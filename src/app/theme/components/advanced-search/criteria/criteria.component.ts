

import {Component, Input, OnInit} from "@angular/core";
import { TypeSearch } from "../../quick-search/quick-search.component";
import {SearchService} from "../../../services/search/search.service";
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'search-criteria',
  templateUrl: `criteria.component.html`,
  styleUrls: ['criteria.component.scss'],
})

export class CriteriaIComponent {

  constructor(private service: SearchService, private translate: TranslateService) {
    this.typeS = [{
        id: 1,
        name: "criteria.author-name",
      }, {
        id: 2,
        name: "criteria.author-job",
      }, {
        id: 3,
        name: "criteria.artifact-category",
      }, {
        id: 4,
        name: "criteria.artifact-culture",
      }, {
        id: 5,
        name: "criteria.artifact-material",
      }, {
        id: 6,
        name: "criteria.artifact-name",
      }, {
        id: 7,
        name: "criteria.artifact-image-before",
      }, {
        id: 8,
        name: "criteria.artifact-image-after",
      }, {
        id: 9,
        name: "criteria.artifact-found-before",
      }, {
        id: 10,
        name: "criteria.artifact-found-after",
      }, {
        id: 11,
        name: "criteria.excavation-area-more",
      }, {
        id: 12,
        name: "criteria.excavation-area-less",
      }, {
        id: 13,
        name: "criteria.excavation-object",
      }, {
        id: 14,
        name: "criteria.excavation-boss",
      }, {
        id: 15,
        name: "criteria.research-after",
      }, {
        id: 16,
        name: "criteria.research-before",
      }, {
        id: 17,
        name: "criteria.research-type",
      }, {
        id: 18,
        name: "criteria.collection-place",
      }, {
        id: 19,
        name: "criteria.collection-name",
      }, {
        id: 20,
        name: "criteria.heritage-security",
      }, {
        id: 21,
        name: "criteria.heritage-region",
      }, {
        id: 22,
        name: "criteria.heritage-after",
      }, {
        id: 23,
        name: "criteria.heritage-before",
      }, {
        id: 24,
        name: "criteria.site-culture",
      }, {
        id: 25,
        name: "criteria.site-name",
      }, {
        id: 26,
        name: "criteria.site-coords",
      }, {
        id: 27,
        name: "criteria.site-type",
      }, {
        id: 28,
        name: "criteria.site-topo-after",
      }, {
        id: 29,
        name: "criteria.site-topo-before",
      }, {
        id: 30,
        name: "criteria.site-photo-after",
      }, {
        id: 31,
        name: "criteria.site-photo-before",
      }, {
        id: 32,
        name: "criteria.site-epoch",
      }, {
        id: 33,
        name: "criteria.publication-city",
      }, {
        id: 34,
        name: "criteria.publication-publisher",
      }, {
        id: 35,
        name: "criteria.publication-name"
      }
    ];

    translate.addLangs(["en", "ru"]);
    translate.setDefaultLang('ru');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'ru');

    this.critNum = 1;

    this.service.getEpoch('ru')
      .then(res=>{
        this.typeEpoch = res.epochs;
      });
    this.service.getSiteTypes('ru')
      .then(res=>{
        this.typeSite = res.siteTypes;
      })
  }

  public typeEpoch: TypeSearch[];
  public typeSite: TypeSearch[];
  public typeS: TypeSearch[];
  public critNum: number;

  @Input() num: number;
}
