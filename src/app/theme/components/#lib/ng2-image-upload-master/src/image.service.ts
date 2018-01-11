import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs";

export interface Header {
  header: string;
  value: string;
}

@Injectable()
export class ImageService {
  private url: string;

  public setUrl(url: string) {
    this.url = url;
  }

  public postImage(image: File, headers?: Header[]) {
    this.checkUrl();
    return Observable.create(observer => {
      let formData: FormData = new FormData();
      let xhr: XMLHttpRequest = new XMLHttpRequest();

      formData.append('image', image);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(xhr.response);
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };


      xhr.open('POST', this.url, true);

      if (headers)
        for (let header of headers)
          xhr.setRequestHeader(header.header, header.value);

      xhr.send(formData);
    });
  }

  private checkUrl() {
    if (!this.url) {
      throw new Error('Url is not set! Please use setUrl(url) method before doing queries');
    }
  }

  getFile(url: string, authToken?: string, authTokenPrefix?: string): Observable<File> {
    return Observable.create((observer: Observer<File>) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';

      xhr.onload = () => {
        let contentType = xhr.getResponseHeader('Content-Type');
        let blob = new File([xhr.response], 'filename', {type: contentType});

        if (blob.size > 0) {
          observer.next(blob);
          observer.complete();
        } else {
          observer.error('No image');
          observer.complete();
        }
      };

      xhr.setRequestHeader("Authorization", `${authTokenPrefix} ${authToken}`);

      xhr.send();
    });
  }

}
