import { Observer } from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {UploadedFile} from './uploaded-file';
import {FileUploaderOptions, CropOptions} from './interfaces';
import { unescape } from 'querystring';

@Injectable()
export class FileUploader {
  private _fileProgress$: Subject<UploadedFile>;

  constructor() {
    this._fileProgress$ = <Subject<UploadedFile>>new Subject();
  }


  statusUpload: boolean = false;


  status(){
    this.statusUpload = true;
  }



  get fileProgress$() {
    return this._fileProgress$.asObservable();
  }


  dataURLtoFile(dataURI, filename) {
     var arr = dataURI.split(','), mime = arr[0].match(/:(.*?);/)[1],
       bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
     while(n--){
       u8arr[n] = bstr.charCodeAt(n);
     }
     return new File([u8arr], filename, {type:mime});
   }

  uploadFile(file: File, image: string,  options: FileUploaderOptions, cropOptions?: CropOptions): string {
    this.setDefaults(options);
    let xhr = new XMLHttpRequest();
    let form = new FormData();
debugger;

    var filed = this.dataURLtoFile(image, file.name);
    form.append(options.fieldName, filed, filed.name);


    if (cropOptions) {
      form.append('X', String(cropOptions.x));
      form.append('Y', String(cropOptions.y));
      form.append('Width', String(cropOptions.width));
      form.append('Height', String(cropOptions.height));
    }

    let uploadingFile = new UploadedFile(
        this.generateRandomIndex(),
        file.name,
        file.size
    );

    xhr.upload.onprogress = (e: ProgressEvent) => {
      if (e.lengthComputable) {
        let percent = Math.round(e.loaded / e.total * 100);
        uploadingFile.progress = percent;
        this._fileProgress$.next(uploadingFile);
      }
    };

    xhr.upload.onabort = (e: Event) => {
      uploadingFile.setAbort();
      this._fileProgress$.next(uploadingFile);
    };

    xhr.upload.onerror = (e: Event) => {
      uploadingFile.setError();
      this._fileProgress$.next(uploadingFile);
    };

    xhr.onload = () => {
      let success = this.isSuccessCode(xhr.status);

      if (!success) {
          uploadingFile.setError();
      }

      uploadingFile.onFinished(
          xhr.status,
          xhr.statusText,
          xhr.response
      );

      this._fileProgress$.next(uploadingFile);
    }

    xhr.open(options.httpMethod, options.uploadUrl, true);
    xhr.withCredentials = options.withCredentials;

    if (options.customHeaders) {
      Object.keys(options.customHeaders).forEach((key) => {
        xhr.setRequestHeader(key, options.customHeaders[key]);
      });
    }

    if (options.authToken) {
      xhr.setRequestHeader("Authorization", `${options.authTokenPrefix} ${options.authToken}`);
    }

    xhr.send(form);
    return uploadingFile.id;
  }

  getFile(url: string, options: { authToken?: string, authTokenPrefix?: string}): Observable<File> {
    debugger;
    return Observable.create((observer: Observer<File>) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';

      xhr.onload = () => {
        let success = this.isSuccessCode(xhr.status);

        if (!success) {
          observer.error(xhr.status);
          observer.complete();
        } else {
          let contentType = xhr.getResponseHeader('Content-Type');
          let blob = new File([xhr.response], 'filename', {type: contentType});

          if (blob.size > 0) {
            observer.next(blob);
            observer.complete();
          } else {
            observer.error('No image');
            observer.complete();
          }
        }
      };

      xhr.onerror = (e) => {
        observer.error(xhr.status);
        observer.complete();
      };

      if (options.authToken) {
        xhr.setRequestHeader("Authorization", `${options.authTokenPrefix} ${options.authToken}`);
      }

      xhr.send();
    });
  }

  private setDefaults(options: FileUploaderOptions) {
    options.withCredentials = options.withCredentials || false;
    options.httpMethod = options.httpMethod || 'POST';
    options.authTokenPrefix = options.authTokenPrefix || 'Bearer';
    options.fieldName = options.fieldName || 'file';
  }

  private isSuccessCode(status:number):boolean {
    return (status >= 200 && status < 300) || status === 304;
  }

  private generateRandomIndex(): string {
    return Math.random().toString(36).substring(7);
  }
}
