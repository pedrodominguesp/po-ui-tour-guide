import{o as g,p as Le}from"./chunk-AT3MKFJ3.js";import{Aa as D,Ea as C,Fa as _e,Gb as E,Hb as b,Ia as Me,Ja as ee,Lb as te,M as ye,Ra as we,S as Ce,U as Pe,Va as Ie,_ as R,a as z,ab as A,lb as Te,nb as ke,p as ve,q as xe,tb as Fe,w as $}from"./chunk-GCMU57WK.js";import{Ba as q,Ca as O,Da as B,Ea as m,Fa as n,Ga as t,H as J,Ha as l,I as U,Jc as V,L as N,Mb as y,Mc as X,Nc as Y,O as M,Oa as pe,Oc as ue,P as w,Pa as c,Pc as he,Qc as Z,Ra as K,Tc as Se,Uc as fe,Va as W,Wa as I,Xa as T,Yc as Ee,Z as le,bb as v,cb as e,cd as be,eb as S,ed as ge,gb as k,gd as ie,ha as s,hb as F,ib as L,ma as ne,mc as ce,nb as de,oa as u,pa as G,pb as Q,rb as x,ta as re,ya as se,za as me}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var De=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-basic"]],standalone:!1,decls:1,vars:0,template:function(o,i){o&1&&l(0,"po-search")},dependencies:[C],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Basic"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-basic/sample-po-search-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-search></po-search>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-basic/sample-po-search-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-search-basic',
  templateUrl: './sample-po-search-basic.component.html',
  standalone: false
})
export class SamplePoSearchBasicComponent {}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-basic"),t(),l(23,"hr")),o&2&&(s(5),v("po-icon "+i.sampleCodeButtonIcon),s(),S(" ",i.sampleCodeButtonLabel),s(),m("ngClass",x(4,Ye,i.hideSampleCodeTabs)))},dependencies:[y,g,E,b,De],encapsulation:2})}return a})();var et=["poSearch"];function tt(a,_){if(a&1&&(n(0,"div")(1,"strong"),e(2),t(),e(3),t()),a&2){let r=_.$implicit,o=K().$implicit;s(2),S("",r,": "),s(),S(" ",o[r]," \xA0 ")}}function nt(a,_){if(a&1&&(n(0,"li"),O(1,tt,4,2,"div",null,q),t()),a&2){let r=_.$implicit,o=K();s(),B(o.changeFilter(r))}}var qe=(()=>{class a{http=N(ce);poSearch;ariaLabel;customLiterals;literals;properties=[];search="";event="";service="https://po-sample-api.onrender.com/v1/heroes";items=[];filteredItems=[];fieldKeys=[];fieldSelect=[];tooltip;icon;filterMode=D.startsWith;searchMode="action";fieldKey;itemsModel;filterModel='["name"]';filterSelectModel;size="medium";customLocateSummary;locateSummary;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"showListbox",label:"Show Listbox"},{value:"loading",label:"Loading"}];iconsOptions=[{label:"fa-search",value:"fa fa-search"},{label:"an-user",value:"an an-user"},{label:"an-magnifying-glass",value:"an an-magnifying-glass"}];filterModeOptions=[{label:"Starts With",value:D.startsWith},{label:"Contains",value:D.contains},{label:"Ends With",value:D.endsWith}];searchModeOptions=[{label:"Action",value:"action"},{label:"Execute",value:"execute"},{label:"Locate",value:"locate"},{label:"Trigger",value:"trigger"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}ngOnChanges(r){r.items&&(this.filteredItems=this.items)}changeFilter(r){return Object.keys(r)}onChangeService(){this.http.get(this.service).subscribe(r=>{let o=r.items;Array.isArray(o)&&o.length>0&&(this.items=o,this.filteredItems=o,this.fieldKeys=["name"])})}updateFilterKeys(r){this.fieldKeys=this.convertToArray(r)}updateFilterSelect(r){this.fieldSelect=this.convertToArray(r)}filter(r){this.filteredItems=r,this.event=r.length===0?"p-change-model":"p-filtered-items-change"}changeItems(r){try{let o=JSON.parse(r);Array.isArray(o)&&(this.filteredItems=o,this.items=o)}catch(o){}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals??"")}catch(r){this.customLiterals=void 0}}changeEvent(r){setTimeout(()=>{this.event=r})}changeLocateSummary(){try{this.customLocateSummary=JSON.parse(this.locateSummary??"")}catch(r){this.customLocateSummary=void 0}}restore(){this.ariaLabel="",this.search="",this.event="",this.icon=void 0,this.customLiterals=void 0,this.customLocateSummary=void 0,this.properties=[],this.filteredItems=void 0,this.items=void 0,this.itemsModel=void 0,this.filterModel='["name"]',this.filterSelectModel="",this.fieldKeys=void 0,this.fieldSelect=void 0,this.filterMode=D.startsWith,this.searchMode="action",this.literals=void 0,this.locateSummary=void 0,this.size="medium",this.cleanInput(),this.onChangeService()}cleanInput(){try{this.poSearch.clearSearch()}catch(r){}}convertToArray(r){try{return JSON.parse(r)}catch(o){return}}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-labs"]],viewQuery:function(o,i){if(o&1&&W(et,7),o&2){let p;I(p=T())&&(i.poSearch=p.first)}},standalone:!1,features:[le],decls:32,vars:33,consts:[["poSearch",""],["f","ngForm"],[1,"po-row"],[1,"po-md-12",3,"p-blur","p-change-model","p-filtered-items-change","p-locate-next","p-locate-previous","p-aria-label","p-disabled","p-filter-keys","p-filter-type","p-filter-select","p-icon","p-items","p-literals","p-loading","p-locate-summary","p-search-type","p-show-listbox","p-size"],[1,"po-md-12"],[3,"p-label"],[1,"sample-list-search","po-md-12","row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","ariaLabel","p-label","Aria label",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","items","p-label","Items","p-help",'Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","properties","p-label","Properties",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","searchMode","p-label","Search Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-label","Filter Mode",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6","po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locateSummary","p-help",'{ "currentIndex": 1000, "total": 1000 }',"p-label","Locate Summary",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"search": "Search people"}',"p-label","Literals",1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["name","Filter Keys","p-label","Filter Keys","p-help",'Ex.: ["cidade", "pais"]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change-model","ngModel"],["name","Filter Select","p-label","Filter Select","p-help",'Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]',1,"po-lg-6","po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(o,i){if(o&1){let p=pe();n(0,"div",2)(1,"po-search",3,0),c("p-blur",function(){return i.changeEvent("p-blur")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-filtered-items-change",function(d){return i.filter(d)})("p-locate-next",function(){return i.changeEvent("p-locate-next")})("p-locate-previous",function(){return i.changeEvent("p-locate-previous")}),t()(),l(3,"po-divider"),n(4,"div",2)(5,"po-accordion",4)(6,"po-accordion-item",5)(7,"po-widget",4)(8,"ul",6),O(9,nt,3,0,"li",null,q),t()()()()(),l(11,"po-divider"),n(12,"div",2),l(13,"po-info",7)(14,"po-info",8),t(),l(15,"po-divider"),n(16,"form",null,1)(18,"po-input",9),L("ngModelChange",function(d){return M(p),F(i.ariaLabel,d)||(i.ariaLabel=d),w(d)}),t(),n(19,"po-input",10),L("ngModelChange",function(d){return M(p),F(i.itemsModel,d)||(i.itemsModel=d),w(d)}),c("p-change-model",function(d){return i.changeItems(d)}),t(),n(20,"po-checkbox-group",11),L("ngModelChange",function(d){return M(p),F(i.properties,d)||(i.properties=d),w(d)}),t(),n(21,"po-radio-group",12),L("ngModelChange",function(d){return M(p),F(i.icon,d)||(i.icon=d),w(d)}),t(),n(22,"po-radio-group",13),L("ngModelChange",function(d){return M(p),F(i.searchMode,d)||(i.searchMode=d),w(d)}),t(),n(23,"po-radio-group",14),L("ngModelChange",function(d){return M(p),F(i.filterMode,d)||(i.filterMode=d),w(d)}),t(),n(24,"po-radio-group",15),L("ngModelChange",function(d){return M(p),F(i.size,d)||(i.size=d),w(d)}),t(),n(25,"po-input",16),L("ngModelChange",function(d){return M(p),F(i.locateSummary,d)||(i.locateSummary=d),w(d)}),c("p-change",function(){return i.changeLocateSummary()}),t(),n(26,"po-input",17),L("ngModelChange",function(d){return M(p),F(i.literals,d)||(i.literals=d),w(d)}),c("p-change",function(){return i.changeLiterals()}),t(),n(27,"po-input",18),L("ngModelChange",function(d){return M(p),F(i.filterModel,d)||(i.filterModel=d),w(d)}),c("p-change-model",function(d){return i.updateFilterKeys(d)}),t(),n(28,"po-input",19),L("ngModelChange",function(d){return M(p),F(i.filterSelectModel,d)||(i.filterSelectModel=d),w(d)}),c("p-change",function(d){return i.updateFilterSelect(d)}),t(),l(29,"po-divider"),n(30,"div",2)(31,"po-button",20),c("p-click",function(){return i.restore()}),t()()()}o&2&&(s(),m("p-aria-label",i.ariaLabel)("p-disabled",i.properties.includes("disabled"))("p-filter-keys",i.fieldKeys)("p-filter-type",i.filterMode)("p-filter-select",i.fieldSelect)("p-icon",i.icon)("p-items",i.items)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-locate-summary",i.customLocateSummary)("p-search-type",i.searchMode)("p-show-listbox",i.properties.includes("showListbox"))("p-size",i.size),s(5),m("p-label",de("Itens encontrados: ",i.filteredItems==null?null:i.filteredItems.length)),s(3),B(i.filteredItems),s(4),m("p-value",i.search),s(),m("p-value",i.event),s(4),k("ngModel",i.ariaLabel),s(),k("ngModel",i.itemsModel),s(),k("ngModel",i.properties),m("p-options",i.propertiesOptions),s(),k("ngModel",i.icon),m("p-options",i.iconsOptions),s(),k("ngModel",i.searchMode),m("p-options",i.searchModeOptions),s(),k("ngModel",i.filterMode),m("p-options",i.filterModeOptions),s(),k("ngModel",i.size),m("p-options",i.sizeOptions),s(),k("ngModel",i.locateSummary),s(),k("ngModel",i.literals),s(),k("ngModel",i.filterModel),s(),k("ngModel",i.filterSelectModel))},dependencies:[Z,X,Y,he,ue,xe,ve,$,z,Ce,Pe,ee,A,te,C],styles:[".sample-list-search[_ngcontent-%COMP%]{list-style:none;display:grid;grid-template-columns:repeat(2,1fr);grid-gap:1rem}.sample-list-search[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{text-transform:capitalize}"]})}return a})();var at=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-labs-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Labs"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-labs/sample-po-search-labs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    #poSearch
    class="po-md-12"
    [p-aria-label]="ariaLabel"
    [p-disabled]="properties.includes('disabled')"
    [p-filter-keys]="fieldKeys"
    [p-filter-type]="filterMode"
    [p-filter-select]="fieldSelect"
    [p-icon]="icon"
    [p-items]="items"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-locate-summary]="customLocateSummary"
    [p-search-type]="searchMode"
    [p-show-listbox]="properties.includes('showListbox')"
    [p-size]="size"
    (p-blur)="changeEvent('p-blur')"
    (p-change-model)="changeEvent('p-change-model')"
    (p-filtered-items-change)="filter($event)"
    (p-locate-next)="changeEvent('p-locate-next')"
    (p-locate-previous)="changeEvent('p-locate-previous')"
  ></po-search>
</div>

<po-divider />
<div class="po-row">
  <po-accordion class="po-md-12">
    <po-accordion-item p-label="Itens encontrados: { { filteredItems?.length }}">
      <po-widget class="po-md-12">
        <ul class="sample-list-search po-md-12 row">
          @for (item of filteredItems; track item) {
            <li>
              @for (key of changeFilter(item); track key) {
                <div>
                  <strong>{ { key }}: </strong> { { item[key] }} &nbsp;
                </div>
              }
            </li>
          }
        </ul>
      </po-widget>
    </po-accordion-item>
  </po-accordion>
</div>
<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="search"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<!-- Properties -->
<form #f="ngForm">
  <po-input class="po-lg-6" name="ariaLabel" p-label="Aria label" [(ngModel)]="ariaLabel"></po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="items"
    [(ngModel)]="itemsModel"
    p-label="Items"
    p-help='Ex.: [{ "cidade": "S\xE3o Paulo", "pais": "Brasil" }, { "cidade": "Rio de Janeiro", "pais": "Brasil" }, { "cidade": "T\xF3quio", "pais": "Jap\xE3o" }]'
    (p-change-model)="changeItems($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-6 po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group class="po-lg-6 po-md-12" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconsOptions">
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="searchMode"
    [(ngModel)]="searchMode"
    p-label="Search Mode"
    [p-options]="searchModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="filterMode"
    [(ngModel)]="filterMode"
    p-label="Filter Mode"
    [p-options]="filterModeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-lg-6 po-md-12"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-input
    class="po-lg-6 po-md-12"
    name="locateSummary"
    [(ngModel)]="locateSummary"
    p-help='{ "currentIndex": 1000, "total": 1000 }'
    p-label="Locate Summary"
    (p-change)="changeLocateSummary()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"search": "Search people"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Keys"
    [(ngModel)]="filterModel"
    p-label="Filter Keys"
    p-help='Ex.: ["cidade", "pais"]'
    (p-change-model)="updateFilterKeys($event)"
  >
  </po-input>

  <po-input
    class="po-lg-6 po-md-12"
    name="Filter Select"
    [(ngModel)]="filterSelectModel"
    p-label="Filter Select"
    p-help='Ex.: [ { "label": "Name", "value": ["name", "nickname"] }, { "label": "Email", "value": "email" } ]'
    (p-change)="updateFilterSelect($event)"
  >
  </po-input>

  <po-divider />

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-labs/sample-po-search-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, inject } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSearchComponent,
  PoSearchFilterMode,
  PoSearchLiterals
} from '@po-ui/ng-components';
import { PoSearchLocateSummary } from '@po-ui/ng-components/lib/components/po-search/interfaces/po-search-locate-summary.interface';

@Component({
  selector: 'sample-po-search-labs',
  templateUrl: './sample-po-search-labs.component.html',
  styleUrls: ['./sample-po-search-labs.component.css'],
  standalone: false
})
export class SamplePoSearchLabsComponent implements OnInit, OnChanges {
  protected http = inject(HttpClient);

  @ViewChild('poSearch', { static: true }) poSearch!: PoSearchComponent;

  ariaLabel?: any;
  customLiterals?: PoSearchLiterals;
  literals?: string;
  properties: Array<string> = [];
  search: string = '';
  event: string = '';
  service: string = 'https://po-sample-api.onrender.com/v1/heroes';
  items: Array<any> = [];
  filteredItems: Array<any> = [];
  fieldKeys?: Array<any> = [];
  fieldSelect?: Array<any> = [];
  tooltip?: string;
  icon?: string;
  filterMode: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  searchMode: 'action' | 'trigger' | 'locate' | 'execute' = 'action';
  fieldKey?: any;
  itemsModel?: any;
  filterModel: any = '["name"]';
  filterSelectModel?: any;
  size: string = 'medium';
  customLocateSummary?: PoSearchLocateSummary;
  locateSummary?: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'showListbox', label: 'Show Listbox' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'fa-search', value: 'fa fa-search' },
    { label: 'an-user', value: 'an an-user' },
    { label: 'an-magnifying-glass', value: 'an an-magnifying-glass' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly searchModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Action', value: 'action' },
    { label: 'Execute', value: 'execute' },
    { label: 'Locate', value: 'locate' },
    { label: 'Trigger', value: 'trigger' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.filteredItems = this.items;
    }
  }

  changeFilter(item: any) {
    return Object.keys(item);
  }

  onChangeService() {
    this.http.get(this.service).subscribe((response: any) => {
      const items = response.items;
      if (Array.isArray(items) && items.length > 0) {
        this.items = items;
        this.filteredItems = items;
        this.fieldKeys = ['name'];
      }
    });
  }

  updateFilterKeys(event: string): void {
    this.fieldKeys = this.convertToArray(event);
  }

  updateFilterSelect(event: string): void {
    this.fieldSelect = this.convertToArray(event);
  }

  filter(event: Array<any>) {
    this.filteredItems = event;

    this.event = event.length === 0 ? 'p-change-model' : 'p-filtered-items-change';
  }

  changeItems(items: string): void {
    try {
      const newItems = JSON.parse(items);
      if (Array.isArray(newItems)) {
        this.filteredItems = newItems;
        this.items = newItems;
      }
    } catch {}
  }

  changeLiterals(): void {
    try {
      this.customLiterals = JSON.parse(this.literals ?? '');
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeEvent(event: string): void {
    setTimeout(() => {
      this.event = event;
    });
  }

  changeLocateSummary(): void {
    try {
      this.customLocateSummary = JSON.parse(this.locateSummary ?? '');
    } catch {
      this.customLocateSummary = undefined;
    }
  }

  restore(): void {
    this.ariaLabel = '';
    this.search = '';
    this.event = '';
    this.icon = undefined;
    this.customLiterals = undefined;
    this.customLocateSummary = undefined;
    this.properties = [];
    this.filteredItems = undefined;
    this.items = undefined;
    this.itemsModel = undefined;
    this.filterModel = '["name"]';
    this.filterSelectModel = '';
    this.fieldKeys = undefined;
    this.fieldSelect = undefined;
    this.filterMode = PoSearchFilterMode.startsWith;
    this.searchMode = 'action';
    this.literals = undefined;
    this.locateSummary = undefined;
    this.size = 'medium';
    this.cleanInput();
    this.onChangeService();
  }

  cleanInput(): void {
    try {
      this.poSearch.clearSearch();
    } catch {}
  }

  private convertToArray(value: string): Array<any> | undefined {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-search-labs/sample-po-search-labs.component.css"),t(),n(25,"pre",11),e(26,`.sample-list-search {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.sample-list-search strong {
  text-transform: capitalize;
}
`),t()()()()(),n(27,"div",12),l(28,"sample-po-search-labs"),t(),l(29,"hr")),o&2&&(s(5),v("po-icon "+i.sampleCodeButtonIcon),s(),S(" ",i.sampleCodeButtonLabel),s(),m("ngClass",x(4,at,i.hideSampleCodeTabs)))},dependencies:[y,g,E,b,qe],encapsulation:2})}return a})();var ae=(()=>{class a{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=J({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function lt(a,_){if(a&1&&(n(0,"div",0),l(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),t()),a&2){let r=_.$implicit;s(),m("p-value",r.name),s(),m("p-value",r.nickname),s(),m("p-value",r.email)}}function rt(a,_){a&1&&l(0,"div")}function st(a,_){if(a&1&&(n(0,"li",7),e(1),se(2,rt,1,0,"div"),t(),n(3,"li",7),e(4),t()),a&2){let r=_.$implicit,o=K();s(),S(" Nickname: ",r.nickname," "),s(),me(o.compareObjects(r)?2:-1),s(2),S("Email: ",r.email)}}var Be=(()=>{class a{service=N(ae);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-find-people"]],standalone:!1,features:[Q([ae])],decls:8,vars:3,consts:[[1,"po-row"],["p-aria-label","Po Search",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"],[1,"po-md-12","po-text-color-neutral-dark-40"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(h){return i.filtered(h)}),t()(),l(2,"po-divider"),O(3,lt,4,3,"div",0,q),l(5,"po-divider"),n(6,"po-list-view",2),re(7,st,5,3,"ng-template",3),t()),o&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(2),B(i.peopleFiltered),s(3),m("p-items",i.items))},dependencies:[z,A,ke,Te,C],styles:["li[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center}li[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:.75em;height:.75em;border-radius:50%;background-color:green;margin-left:10px}"]})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),Ne=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-find-people-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Find People"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-find-people/sample-po-search-find-people.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
  ></po-search>
</div>

<po-divider />

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}

<po-divider />

<po-list-view p-property-title="name" [p-items]="items">
  <ng-template p-list-view-content-template let-item>
    <li class="po-md-12 po-text-color-neutral-dark-40">
      Nickname: { { item.nickname }}
      @if (compareObjects(item)) {
        <div></div>
      }
    </li>
    <li class="po-md-12 po-text-color-neutral-dark-40">Email: { { item.email }}</li>
  </ng-template>
</po-list-view>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-find-people/sample-po-search-find-people.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { SamplePoSearchFindPeopleService } from './sample-po-search-find-people.service';

@Component({
  selector: 'sample-po-search-find-people',
  templateUrl: './sample-po-search-find-people.component.html',
  styleUrls: ['./sample-po-search-find-people.component.css'],
  providers: [SamplePoSearchFindPeopleService],
  standalone: false
})
export class SamplePoSearchFindPeopleComponent implements OnInit {
  private service = inject(SamplePoSearchFindPeopleService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-find-people/sample-po-search-find-people.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchFindPeopleService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),t()()(),n(25,"po-tab",10)(26,"div")(27,"label",6),e(28,"sample-po-search-find-people/sample-po-search-find-people.component.css"),t(),n(29,"pre",11),e(30,`li {
  list-style: none;
  display: flex;
  align-items: center;
}

li div {
  width: 0.75em;
  height: 0.75em;
  border-radius: 50%;
  background-color: green;
  margin-left: 10px;
}
`),t()()()()(),n(31,"div",12),l(32,"sample-po-search-find-people"),t(),l(33,"hr")),o&2&&(s(5),v("po-icon "+i.sampleCodeButtonIcon),s(),S(" ",i.sampleCodeButtonLabel),s(),m("ngClass",x(4,pt,i.hideSampleCodeTabs)))},dependencies:[y,g,E,b,Be],encapsulation:2})}return a})();var oe=(()=>{class a{getItems(){return[{id:"0348093615904",name:"Leonardo Silveiras",birthdate:"1995-07-15T00:00:00-00:00",genre:"male",city:"4209102",status:"active",nickname:"leo.silveira",email:"leonardo.silveira@gmail.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"Joinville",state:"Santa Catarina",uf:"SC",dependents:[]},{id:"0648093812893",name:"Jo\xE3o Severino",birthdate:"1995-10-07T00:00:00-00:00",genre:"male",city:"4216206",status:"active",nickname:"jseverino",email:"jseverino@yahoo.com",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Francisco do Sul",state:"Santa Catarina",uf:"SC",dependents:[{id:109481,name:"Maria",age:"10",related:"Daughter",birthdate:"2008-12-10"}]},{id:"0748093840433",name:"Jos\xE9 Marcos Cardoso",birthdate:"1986-08-01T00:00:00-00:00",genre:"male",city:"4201307",status:"inactive",nickname:"jose",email:"jose@outlook.com",nationality:"Brazilian",birthPlace:"3550308",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Inativo",cityName:"Araquari",state:"Santa Catarina",uf:"SC",dependents:[{id:109483,name:"Pedro",age:"13",related:"Son",birthdate:"2008-12-10"},{id:109484,name:"Paulo",age:"15",related:"Son",birthdate:"2008-12-10"},{id:109485,name:"Jos\xE9",age:"19",related:"Son",birthdate:"2008-12-10"}]},{id:"0848094890811",name:"Karlo Rodrigues",birthdate:"1989-12-28T00:00:00-00:00",genre:"male",city:"3550308",status:"active",nickname:"krodrigues",email:"krodrigues@uol.com.br",nationality:"Brazilian",birthPlace:"S\xE3o Paulo",graduation:"College",father:"Papai",mother:"Mam\xE3e",street:"Santos Dumont",country:"Brasil",genreDescription:"Masculino",statusDescription:"Ativo",cityName:"S\xE3o Paulo",state:"S\xE3o Paulo",uf:"SP",dependents:[]}]}static \u0275fac=function(o){return new(o||a)};static \u0275prov=J({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function ct(a,_){if(a&1&&(n(0,"div",0),l(1,"po-divider")(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),t()),a&2){let r=_.$implicit;s(2),m("p-value",r.name),s(),m("p-value",r.nickname),s(),m("p-value",r.email)}}var Ve=(()=>{class a{service=N(oe);items;filterKeys=["name","nickname","email"];peopleFiltered=[];ngOnInit(){this.items=this.service.getItems()}filtered(r){this.peopleFiltered=r,r.length===4&&(this.peopleFiltered=[])}compareObjects(r){return!!this.peopleFiltered.includes(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-listbox"]],standalone:!1,features:[Q([oe])],decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-show-listbox","true","p-search-type","trigger",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-keys"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(h){return i.filtered(h)}),t()(),O(2,ct,5,3,"div",0,q)),o&2&&(s(),m("p-items",i.items)("p-filter-keys",i.filterKeys),s(),B(i.peopleFiltered))},dependencies:[z,A,C],encapsulation:2})}return a})();var ht=a=>({"docs-sample-code-tabs":a}),ze=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-listbox-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Listbox"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-listbox/sample-po-search-listbox.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    [p-filter-keys]="filterKeys"
    (p-filtered-items-change)="filtered($event)"
    p-show-listbox="true"
    p-search-type="trigger"
  ></po-search>
</div>

@for (people of peopleFiltered; track people) {
  <div class="po-row">
    <po-divider />
    <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
    <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
    <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
  </div>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-listbox/sample-po-search-listbox.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { SamplePoSearchListboxService } from './sample-po-search-listbox.service';

@Component({
  selector: 'sample-po-search-listbox',
  templateUrl: './sample-po-search-listbox.component.html',
  providers: [SamplePoSearchListboxService],
  standalone: false
})
export class SamplePoSearchListboxComponent implements OnInit {
  private service = inject(SamplePoSearchListboxService);

  items: any;
  filterKeys: Array<string> = ['name', 'nickname', 'email'];
  peopleFiltered: Array<any> = [];

  ngOnInit() {
    this.items = this.service.getItems();
  }

  filtered(event: Array<any>) {
    this.peopleFiltered = event;
    if (event.length === 4) {
      this.peopleFiltered = [];
    } else {
      try {
      } catch (error) {
        return undefined;
      }
    }
  }

  compareObjects(value: any) {
    return this.peopleFiltered.includes(value) ? true : false;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-search-listbox/sample-po-search-listbox.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSearchListboxService {
  getItems(): Array<any> {
    return [
      {
        'id': '0348093615904',
        'name': 'Leonardo Silveiras',
        'birthdate': '1995-07-15T00:00:00-00:00',
        'genre': 'male',
        'city': '4209102',
        'status': 'active',
        'nickname': 'leo.silveira',
        'email': 'leonardo.silveira@gmail.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'Joinville',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': []
      },
      {
        'id': '0648093812893',
        'name': 'Jo\xE3o Severino',
        'birthdate': '1995-10-07T00:00:00-00:00',
        'genre': 'male',
        'city': '4216206',
        'status': 'active',
        'nickname': 'jseverino',
        'email': 'jseverino@yahoo.com',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Francisco do Sul',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [{ 'id': 109481, 'name': 'Maria', 'age': '10', 'related': 'Daughter', 'birthdate': '2008-12-10' }]
      },
      {
        'id': '0748093840433',
        'name': 'Jos\xE9 Marcos Cardoso',
        'birthdate': '1986-08-01T00:00:00-00:00',
        'genre': 'male',
        'city': '4201307',
        'status': 'inactive',
        'nickname': 'jose',
        'email': 'jose@outlook.com',
        'nationality': 'Brazilian',
        'birthPlace': '3550308',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Inativo',
        'cityName': 'Araquari',
        'state': 'Santa Catarina',
        'uf': 'SC',
        'dependents': [
          { 'id': 109483, 'name': 'Pedro', 'age': '13', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109484, 'name': 'Paulo', 'age': '15', 'related': 'Son', 'birthdate': '2008-12-10' },
          { 'id': 109485, 'name': 'Jos\xE9', 'age': '19', 'related': 'Son', 'birthdate': '2008-12-10' }
        ]
      },
      {
        'id': '0848094890811',
        'name': 'Karlo Rodrigues',
        'birthdate': '1989-12-28T00:00:00-00:00',
        'genre': 'male',
        'city': '3550308',
        'status': 'active',
        'nickname': 'krodrigues',
        'email': 'krodrigues@uol.com.br',
        'nationality': 'Brazilian',
        'birthPlace': 'S\xE3o Paulo',
        'graduation': 'College',
        'father': 'Papai',
        'mother': 'Mam\xE3e',
        'street': 'Santos Dumont',
        'country': 'Brasil',
        'genreDescription': 'Masculino',
        'statusDescription': 'Ativo',
        'cityName': 'S\xE3o Paulo',
        'state': 'S\xE3o Paulo',
        'uf': 'SP',
        'dependents': []
      }
    ];
  }
}
`),t()()()()(),n(25,"div",10),l(26,"sample-po-search-listbox"),t(),l(27,"hr")),o&2&&(s(5),v("po-icon "+i.sampleCodeButtonIcon),s(),S(" ",i.sampleCodeButtonLabel),s(),m("ngClass",x(4,ht,i.hideSampleCodeTabs)))},dependencies:[y,g,E,b,Ve],encapsulation:2})}return a})();function ft(a,_){if(a&1&&(n(0,"div",0)(1,"po-container",2),l(2,"po-info",3)(3,"po-info",4)(4,"po-info",5)(5,"po-info",6),t()()),a&2){let r=_.$implicit;s(2),m("p-value",r.name),s(),m("p-value",r.gender),s(),m("p-value",r.planet),s(),m("p-value",r.father)}}var je=(()=>{class a{items;filteredItems=[];filterSelect=[{label:"Personal",value:["name","gender"]},{label:"Planet",value:["planet"]},{label:"Family",value:"father"}];ngOnInit(){this.items=[{name:"Anakin Skywalker",gender:"male",planet:"Tatooine",father:"Darth Sidious"},{name:"Luke Skywalker",gender:"male",planet:"Tatooine",father:"Anakin Skywalker"},{name:"Leia Organa",gender:"female",planet:"Alderaan",father:"Anakin Skywalker"},{name:"Han Solo",gender:"male",planet:"Corellia",father:"Ovan"}]}filtered(r){this.filteredItems=r}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-filter-select"]],standalone:!1,decls:4,vars:2,consts:[[1,"po-row"],["p-aria-label","Po Search","p-search-type","trigger","p-show-listbox","true","p-disabled","false",1,"po-md-12",3,"p-filtered-items-change","p-items","p-filter-select"],[1,"po-row","po-mt-2"],["p-label","Name",1,"po-md-3",3,"p-value"],["p-label","Gender",1,"po-md-3",3,"p-value"],["p-label","Planet",1,"po-md-3",3,"p-value"],["p-label","Father",1,"po-md-3",3,"p-value"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"po-search",1),c("p-filtered-items-change",function(h){return i.filtered(h)}),t()(),O(2,ft,6,4,"div",0,q)),o&2&&(s(),m("p-items",i.items)("p-filter-select",i.filterSelect),s(),B(i.filteredItems))},dependencies:[ye,A,C],encapsulation:2})}return a})();var bt=a=>({"docs-sample-code-tabs":a}),We=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-filter-select-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search With Filter Select + Listbox"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-filter-select/sample-po-search-filter-select.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-search
    class="po-md-12"
    p-aria-label="Po Search"
    [p-items]="items"
    (p-filtered-items-change)="filtered($event)"
    p-search-type="trigger"
    [p-filter-select]="filterSelect"
    p-show-listbox="true"
    p-disabled="false"
  ></po-search>
</div>

@for (people of filteredItems; track people) {
  <div class="po-row">
    <po-container class="po-row po-mt-2">
      <po-info class="po-md-3" p-label="Name" [p-value]="people.name"> </po-info>
      <po-info class="po-md-3" p-label="Gender" [p-value]="people.gender"> </po-info>
      <po-info class="po-md-3" p-label="Planet" [p-value]="people.planet"> </po-info>
      <po-info class="po-md-3" p-label="Father" [p-value]="people.father"> </po-info>
    </po-container>
  </div>
}
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-filter-select/sample-po-search-filter-select.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-po-search-filter-select',
  templateUrl: './sample-po-search-filter-select.component.html',
  standalone: false
})
export class SamplePoSearchFilterSelectComponent implements OnInit {
  items: any;
  filteredItems: Array<any> = [];
  filterSelect = [
    { label: 'Personal', value: ['name', 'gender'] },
    { label: 'Planet', value: ['planet'] },
    { label: 'Family', value: 'father' }
  ];

  ngOnInit() {
    this.items = [
      { name: 'Anakin Skywalker', gender: 'male', planet: 'Tatooine', father: 'Darth Sidious' },
      { name: 'Luke Skywalker', gender: 'male', planet: 'Tatooine', father: 'Anakin Skywalker' },
      { name: 'Leia Organa', gender: 'female', planet: 'Alderaan', father: 'Anakin Skywalker' },
      { name: 'Han Solo', gender: 'male', planet: 'Corellia', father: 'Ovan' }
    ];
  }

  filtered(event: Array<any>) {
    this.filteredItems = event;
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-filter-select"),t(),l(23,"hr")),o&2&&(s(5),v("po-icon "+i.sampleCodeButtonIcon),s(),S(" ",i.sampleCodeButtonLabel),s(),m("ngClass",x(4,bt,i.hideSampleCodeTabs)))},dependencies:[y,g,E,b,je],encapsulation:2})}return a})();var Re=(()=>{class a{poModal;filterType=D.contains;filterKeysAction=["rotina","codigo","modulo","versao"];keysLabel=["rotina","codigo"];itemsAction=[{rotina:"Contas a Pagar",codigo:"MATA103",modulo:"Adm",versao:"1.2.3",action:()=>alert("Contas a Pagar")},{rotina:"Cota\xE7\xE3o de Fornecedores",codigo:"MATA140",modulo:"Adm",versao:"1.2.3",action:()=>alert("Cota\xE7\xE3o de Fornecedores")},{rotina:"Meus Funcionarios",codigo:"XPTO987",modulo:"RH",versao:"1.2.3",url:"documentation/po-widget"}];columns=[{property:"rotina",label:"Rotina"},{property:"codigo",label:"C\xF3digo"},{property:"modulo",label:"M\xF3dulo"},{property:"versao",label:"Vers\xE3o"}];footerAction(){this.poModal.open()}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-execute"]],viewQuery:function(o,i){if(o&1&&W(R,7),o&2){let p;I(p=T())&&(i.poModal=p.first)}},standalone:!1,decls:10,vars:9,consts:[["modal",""],[1,"po-row"],["p-title","Pesquisar e executar","p-help","https://github.com/po-ui/po-angular/stargazers",1,"po-lg-6","po-mt-2",3,"p-height"],["name","Po Search",1,"po-mt-2","full",3,"p-footer-action-listbox","p-search-type","p-items","p-filter-type","p-filter-keys","p-keys-label"],["p-title","Rotinas"],[3,"p-columns","p-items","p-hide-columns-manager"]],template:function(o,i){o&1&&(n(0,"div",1)(1,"po-widget",2)(2,"div",1)(3,"span"),e(4,"Entre com o nome ou c\xF3digo da rotina"),t()(),n(5,"div",1)(6,"po-search",3),c("p-footer-action-listbox",function(){return i.footerAction()}),t()()()(),n(7,"po-modal",4,0),l(9,"po-table",5),t()),o&2&&(s(),m("p-height",180),s(5),m("p-search-type","execute")("p-items",i.itemsAction)("p-filter-type",i.filterType)("p-filter-keys",i.filterKeysAction)("p-keys-label",i.keysLabel),s(3),m("p-columns",i.columns)("p-items",i.itemsAction)("p-hide-columns-manager",!0))},dependencies:[R,_e,te,C],styles:[".full[_ngcontent-%COMP%]{width:100%}"]})}return a})();var xt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-execute-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Form Fields with Execute"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-execute/sample-po-search-execute.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-widget
    class="po-lg-6 po-mt-2"
    p-title="Pesquisar e executar"
    p-help="https://github.com/po-ui/po-angular/stargazers"
    [p-height]="180"
  >
    <div class="po-row">
      <span>Entre com o nome ou c\xF3digo da rotina</span>
    </div>
    <div class="po-row">
      <po-search
        class="po-mt-2 full"
        name="Po Search"
        [p-search-type]="'execute'"
        [p-items]="itemsAction"
        [p-filter-type]="filterType"
        [p-filter-keys]="filterKeysAction"
        [p-keys-label]="keysLabel"
        (p-footer-action-listbox)="footerAction()"
      />
    </div>
  </po-widget>
</div>

<po-modal #modal p-title="Rotinas">
  <po-table [p-columns]="columns" [p-items]="itemsAction" [p-hide-columns-manager]="true"> </po-table>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-execute/sample-po-search-execute.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalComponent, PoSearchFilterMode } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-execute',
  templateUrl: './sample-po-search-execute.component.html',
  styleUrls: ['./sample-po-search-execute.component.css'],
  standalone: false
})
export class SamplePoSearchExecuteComponent {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  filterType = PoSearchFilterMode.contains;
  filterKeysAction: Array<string> = ['rotina', 'codigo', 'modulo', 'versao'];
  keysLabel: Array<string> = ['rotina', 'codigo'];

  itemsAction = [
    {
      rotina: 'Contas a Pagar',
      codigo: 'MATA103',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Contas a Pagar\`)
    },
    {
      rotina: 'Cota\xE7\xE3o de Fornecedores',
      codigo: 'MATA140',
      modulo: 'Adm',
      versao: '1.2.3',
      action: () => alert(\`Cota\xE7\xE3o de Fornecedores\`)
    },
    {
      rotina: 'Meus Funcionarios',
      codigo: 'XPTO987',
      modulo: 'RH',
      versao: '1.2.3',
      url: 'documentation/po-widget'
    }
  ];

  columns = [
    { property: 'rotina', label: 'Rotina' },
    { property: 'codigo', label: 'C\xF3digo' },
    { property: 'modulo', label: 'M\xF3dulo' },
    { property: 'versao', label: 'Vers\xE3o' }
  ];

  footerAction() {
    this.poModal.open();
  }
}
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-search-execute/sample-po-search-execute.component.css"),t(),n(25,"pre",11),e(26,`.full {
  width: 100%;
}
`),t()()()()(),n(27,"div",12),l(28,"sample-po-search-execute"),t(),l(29,"hr")),o&2&&(s(5),v("po-icon "+i.sampleCodeButtonIcon),s(),S(" ",i.sampleCodeButtonLabel),s(),m("ngClass",x(4,xt,i.hideSampleCodeTabs)))},dependencies:[y,g,E,b,Re],encapsulation:2})}return a})();var Ct=["nameInput"],Pt=["cpfInput"],_t=["addressInput"],Mt=["numberInput"],wt=["emailInput"],It=["websiteInput"],Tt=["reactiveFormData"],Ke=(()=>{class a{fb=N(Ee);nameInput;cpfInput;addressInput;numberInput;emailInput;websiteInput;reactiveFormModal;reactiveForm;filterTargets=[];filteredIndexes=[];currentIndex=-1;firstSearch=!0;locateSummary={currentIndex:0,total:0};filterType=D.endsWith;searchLiterals={search:"Buscar campos"};modalPrimaryAction={label:"Close",action:()=>this.reactiveFormModal.close()};constructor(){this.createForm()}ngAfterViewInit(){this.filterTargets=[{label:"Customer name",index:0,focus:()=>this.nameInput.focus()},{label:"CPF",index:1,focus:()=>this.cpfInput.focus()},{label:"Address",index:2,focus:()=>this.addressInput.focus()},{label:"Number",index:3,focus:()=>this.numberInput.focus()},{label:"Email",index:4,focus:()=>this.emailInput.focus()},{label:"Website",index:5,focus:()=>this.websiteInput.focus()}]}createForm(){this.reactiveForm=this.fb.group({name:["",[V.required,V.minLength(5)]],cpf:["",V.required],address:["",V.required],number:["",V.required],email:["",V.required],website:["",V.required]})}updateSearchTerm(r){console.log("updateSearchTerm");let o=r.toLowerCase();this.filteredIndexes=this.filterTargets.map((p,h)=>({i:h,t:p})).filter(({t:p})=>o&&p.label.toLowerCase().startsWith(o)).map(({i:p})=>p),this.currentIndex=-1;let i=this.filteredIndexes.length;this.locateSummary={currentIndex:0,total:i}}onNextOccurrenceClick(){console.log("onNextOccurrenceClick"),this.goToNextOccurrence(),this.focusCurrent()}onPreviousOccurrenceClick(){console.log("onPreviousOccurrenceClick"),this.goToPreviousOccurrence(),this.focusCurrent()}goToNextOccurrence(){this.filteredIndexes.length&&(this.currentIndex=(this.currentIndex+1)%this.filteredIndexes.length,this.updateSummary())}goToPreviousOccurrence(){this.filteredIndexes.length&&(this.currentIndex=this.currentIndex<=0?this.filteredIndexes.length-1:this.currentIndex-1,this.updateSummary())}updateSummary(){let r=this.filteredIndexes.length,o=r===0||this.currentIndex===-1?0:this.currentIndex+1;this.locateSummary={currentIndex:o,total:r}}focusCurrent(){let r=this.filteredIndexes[this.currentIndex];r!==void 0&&(document.activeElement?.blur(),this.filterTargets[r].focus())}getInputElementByIndex(r){switch(r){case 0:return this.nameInput?.inputEl?.nativeElement??null;case 1:return this.cpfInput?.inputEl?.nativeElement??null;case 2:return this.addressInput?.inputEl?.nativeElement??null;case 3:return this.numberInput?.inputEl?.nativeElement??null;case 4:return this.emailInput?.inputEl?.nativeElement??null;case 5:return this.websiteInput?.inputEl?.nativeElement??null;default:return null}}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-fields-locate"]],viewQuery:function(o,i){if(o&1&&W(Ct,7)(Pt,7)(_t,7)(Mt,7)(wt,7)(It,7)(Tt,7),o&2){let p;I(p=T())&&(i.nameInput=p.first),I(p=T())&&(i.cpfInput=p.first),I(p=T())&&(i.addressInput=p.first),I(p=T())&&(i.numberInput=p.first),I(p=T())&&(i.emailInput=p.first),I(p=T())&&(i.websiteInput=p.first),I(p=T())&&(i.reactiveFormModal=p.first)}},standalone:!1,decls:35,vars:11,consts:[["nameInput",""],["cpfInput",""],["addressInput",""],["numberInput",""],["emailInput",""],["websiteInput",""],["reactiveFormData",""],[1,"po-row"],[1,"po-ml-1","po-mr-1"],["p-search-type","locate",3,"p-change-model","p-locate-next","p-locate-previous","p-literals","p-locate-summary"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-9"],["formControlName","cpf","p-label","CPF","p-mask","999.999.999-99","p-clean","",1,"po-lg-3"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-lg-6",3,"p-value"],["p-label","CPF",1,"po-lg-6",3,"p-value"],["p-label","Address",1,"po-lg-6",3,"p-value"],["p-label","Number",1,"po-lg-6",3,"p-value"],["p-label","Email",1,"po-lg-6",3,"p-value"],["p-label","Website",1,"po-lg-6",3,"p-value"]],template:function(o,i){o&1&&(n(0,"div",7)(1,"div",8)(2,"po-search",9),c("p-change-model",function(h){return i.updateSearchTerm(h)})("p-locate-next",function(){return i.onNextOccurrenceClick()})("p-locate-previous",function(){return i.onPreviousOccurrenceClick()}),t()()(),l(3,"po-divider"),n(4,"form",10)(5,"div",7),l(6,"po-input",11,0)(8,"po-input",12,1),t(),n(10,"div",7),l(11,"po-input",13,2)(13,"po-number",14,3),t(),n(15,"div",7),l(16,"po-email",15,4)(18,"po-url",16,5),t(),n(20,"div",7)(21,"po-button",17),c("p-click",function(){return i.saveForm()}),t()()(),n(22,"po-modal",18,6)(24,"div",7),l(25,"po-info",19)(26,"po-info",20),t(),l(27,"po-divider"),n(28,"div",7),l(29,"po-info",21)(30,"po-info",22),t(),l(31,"po-divider"),n(32,"div",7),l(33,"po-info",23)(34,"po-info",24),t()()),o&2&&(s(2),m("p-literals",i.searchLiterals)("p-locate-summary",i.locateSummary),s(2),m("formGroup",i.reactiveForm),s(17),m("p-disabled",!i.reactiveForm.valid),s(),m("p-primary-action",i.modalPrimaryAction),s(3),m("p-value",i.reactiveForm.controls.name.value),s(),m("p-value",i.reactiveForm.controls.cpf.value),s(3),m("p-value",i.reactiveForm.controls.address.value),s(),m("p-value",i.reactiveForm.controls.number.value),s(3),m("p-value",i.reactiveForm.controls.email.value),s(),m("p-value",i.reactiveForm.controls.website.value))},dependencies:[Z,X,Y,fe,Se,$,z,Me,ee,we,Ie,A,R,C],encapsulation:2})}return a})();var Ft=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-fields-locate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,i){o&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Search Form Fields with Locate"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-ml-1 po-mr-1">
    <po-search
      p-search-type="locate"
      [p-literals]="searchLiterals"
      [p-locate-summary]="locateSummary"
      (p-change-model)="updateSearchTerm($event)"
      (p-locate-next)="onNextOccurrenceClick()"
      (p-locate-previous)="onPreviousOccurrenceClick()"
    />
  </div>
</div>
<po-divider></po-divider>

<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input #nameInput class="po-lg-9" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name">
    </po-input>

    <po-input #cpfInput class="po-lg-3" formControlName="cpf" p-label="CPF" p-mask="999.999.999-99" p-clean> </po-input>
  </div>

  <div class="po-row">
    <po-input #addressInput class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number #numberInput class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email #emailInput class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url #websiteInput class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-lg-6" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>

    <po-info class="po-lg-6" p-label="CPF" [p-value]="reactiveForm.controls.cpf.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-lg-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-lg-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-lg-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-search-fields-locate/sample-po-search-fields-locate.component.ts"),t(),n(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {
  PoEmailComponent,
  PoInputComponent,
  PoModalAction,
  PoModalComponent,
  PoNumberComponent,
  PoSearchFilterMode,
  PoSearchLiterals,
  PoUrlComponent
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-search-fields-locate',
  templateUrl: './sample-po-search-fields-locate.component.html',
  standalone: false
})
export class SamplePoSearchFieldsLocateComponent implements AfterViewInit {
  protected fb = inject(UntypedFormBuilder);

  @ViewChild('nameInput', { static: true }) nameInput!: PoInputComponent;
  @ViewChild('cpfInput', { static: true }) cpfInput!: PoInputComponent;
  @ViewChild('addressInput', { static: true }) addressInput!: PoInputComponent;
  @ViewChild('numberInput', { static: true }) numberInput!: PoNumberComponent;
  @ViewChild('emailInput', { static: true }) emailInput!: PoEmailComponent;
  @ViewChild('websiteInput', { static: true }) websiteInput!: PoUrlComponent;
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal!: PoModalComponent;

  reactiveForm!: UntypedFormGroup;

  filterTargets: Array<{ label: string; index: number; focus: () => void }> = [];
  filteredIndexes: Array<number> = [];
  currentIndex: number = -1;
  firstSearch = true;

  locateSummary: { currentIndex: number; total: number } = { currentIndex: 0, total: 0 };
  filterType: PoSearchFilterMode = PoSearchFilterMode.endsWith;
  searchLiterals: PoSearchLiterals = { search: 'Buscar campos' };
  modalPrimaryAction: PoModalAction = {
    label: 'Close',
    action: () => this.reactiveFormModal.close()
  };

  constructor() {
    this.createForm();
  }

  ngAfterViewInit() {
    this.filterTargets = [
      { label: 'Customer name', index: 0, focus: () => this.nameInput.focus() },
      { label: 'CPF', index: 1, focus: () => this.cpfInput.focus() },
      { label: 'Address', index: 2, focus: () => this.addressInput.focus() },
      { label: 'Number', index: 3, focus: () => this.numberInput.focus() },
      { label: 'Email', index: 4, focus: () => this.emailInput.focus() },
      { label: 'Website', index: 5, focus: () => this.websiteInput.focus() }
    ];
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', Validators.required],
      address: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  // Atualiza os campos filtrados conforme o termo digitado
  updateSearchTerm(term: string) {
    console.log('updateSearchTerm');
    const value = term.toLowerCase();

    this.filteredIndexes = this.filterTargets
      .map((t, i) => ({ i, t }))
      .filter(({ t }) => value && t.label.toLowerCase().startsWith(value))
      .map(({ i }) => i);

    this.currentIndex = -1;

    const total = this.filteredIndexes.length;

    this.locateSummary = {
      currentIndex: 0,
      total: total
    };
  }

  // Navega\xE7\xE3o pelos bot\xF5es
  onNextOccurrenceClick() {
    console.log('onNextOccurrenceClick');
    this.goToNextOccurrence();
    this.focusCurrent();
  }

  onPreviousOccurrenceClick() {
    console.log('onPreviousOccurrenceClick');
    this.goToPreviousOccurrence();
    this.focusCurrent();
  }

  goToNextOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = (this.currentIndex + 1) % this.filteredIndexes.length;
    this.updateSummary();
  }

  goToPreviousOccurrence() {
    if (!this.filteredIndexes.length) return;

    this.currentIndex = this.currentIndex <= 0 ? this.filteredIndexes.length - 1 : this.currentIndex - 1;
    this.updateSummary();
  }

  updateSummary() {
    const total = this.filteredIndexes.length;
    const current = total === 0 || this.currentIndex === -1 ? 0 : this.currentIndex + 1;

    this.locateSummary = {
      currentIndex: current,
      total: total
    };
  }

  // Foca o campo selecionado
  focusCurrent() {
    const index = this.filteredIndexes[this.currentIndex];
    if (index !== undefined) {
      (document.activeElement as HTMLElement)?.blur();
      this.filterTargets[index].focus();
    }
  }

  // Obt\xEAm o elemento real do campo
  getInputElementByIndex(index: number): HTMLElement | null {
    switch (index) {
      case 0:
        return this.nameInput?.inputEl?.nativeElement ?? null;
      case 1:
        return this.cpfInput?.inputEl?.nativeElement ?? null;
      case 2:
        return this.addressInput?.inputEl?.nativeElement ?? null;
      case 3:
        return this.numberInput?.inputEl?.nativeElement ?? null;
      case 4:
        return this.emailInput?.inputEl?.nativeElement ?? null;
      case 5:
        return this.websiteInput?.inputEl?.nativeElement ?? null;
      default:
        return null;
    }
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-search-fields-locate"),t(),l(23,"hr")),o&2&&(s(5),v("po-icon "+i.sampleCodeButtonIcon),s(),S(" ",i.sampleCodeButtonLabel),s(),m("ngClass",x(4,Ft,i.hideSampleCodeTabs)))},dependencies:[y,g,E,b,Ke],encapsulation:2})}return a})();var Ue=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-search-doc"]],standalone:!1,decls:1426,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<any>"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","PoSearchFilterSelect[]"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<string>"],[1,"language-ts"],["pan","",1,"docs-api-property-type","PoSearchLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoSearchLocateSummary"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","searchMode"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoSearchModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-search."),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoSearchComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente search, tamb\xE9m conhecido como barra de pesquisa, \xE9 utilizado para ajudar os usu\xE1rios a localizar um determinado conte\xFAdo."),t(),n(15,"p"),e(16,"Normalmente localizado no canto superior direito, junto com o \xEDcone de lupa, uma vez que este \xEDcone \xE9 amplamente reconhecido."),t(),n(17,"h4"),e(18,"Boas pr\xE1ticas"),t(),n(19,"p"),e(20,`Foram estruturados os padr\xF5es de usabilidade para auxiliar na utiliza\xE7\xE3o do componente e garantir uma boa experi\xEAncia
aos usu\xE1rios. Portanto, \xE9 de extrema import\xE2ncia que, ao utilizar este componente, as pessoas respons\xE1veis por seu
desenvolvimento considerem os seguintes crit\xE9rios:`),t(),n(21,"ul")(22,"li"),e(23,`Utilize labels para apresentar resultados que est\xE3o sendo exibidos e apresente os resultados mais relevantes
primeiro.`),t(),n(24,"li"),e(25,`Exiba uma mensagem clara quando n\xE3o forem encontrados resultados para busca e sempre que poss\xEDvel ofere\xE7a outras
sugest\xF5es de busca.`),t(),n(26,"li"),e(27,`Mantenha o texto original no campo de input, que facilita a a\xE7\xE3o do usu\xE1rio caso queira fazer uma nova busca com
alguma modifica\xE7\xE3o na pesquisa.`),t(),n(28,"li"),e(29,`Caso seja poss\xEDvel detectar um erro de digita\xE7\xE3o, mostre os resultados para a palavra "corrigida", isso evita a
frustra\xE7\xE3o de n\xE3o obter resultados e n\xE3o for\xE7a o usu\xE1rio a realizar uma nova busca.`),t(),n(30,"li"),e(31,"Quando apropriado, destaque os termos da busca nos resultados."),t(),n(32,"li"),e(33,"A entrada do campo de pesquisa deve caber em uma linha. N\xE3o use entradas de pesquisa de v\xE1rias linhas."),t(),n(34,"li"),e(35,`Recomenda-se ter apenas uma pesquisa por p\xE1gina. Se voc\xEA precisar de v\xE1rias pesquisas, rotule-as claramente para
indicar sua finalidade.`),t(),n(36,"li"),e(37,`Se poss\xEDvel, forne\xE7a sugest\xF5es de pesquisa, seja em um helptext ou sugest\xE3o de pesquisa que \xE9 um autocomplete. Isso
ajuda os usu\xE1rios a encontrar o que est\xE3o procurando, especialmente se os itens pesquis\xE1veis forem complexos.`),t()(),n(38,"h4"),e(39,"Acessibilidade tratada no componente"),t(),n(40,"p"),e(41,` Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo
propriet\xE1rio do conte\xFAdo. S\xE3o elas:`),t(),n(42,"ul")(43,"li"),e(44,"Permitir a intera\xE7\xE3o via teclado (2.1.1: Keyboard (A));"),t(),n(45,"li"),e(46,"Altera\xE7\xE3o entre os estados precisa ser indicada por mais de um elemento al\xE9m da cor (1.4.1: Use of Color);"),t()(),n(47,"h4"),e(48,"Tokens customiz\xE1veis"),t(),n(49,"p"),e(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(51,"blockquote")(52,"p"),e(53,"Para maiores informa\xE7\xF5es, acesse o guia "),n(54,"a",6),e(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(56,"."),t()(),n(57,"table")(58,"thead")(59,"tr")(60,"th"),e(61,"Propriedade"),t(),n(62,"th"),e(63,"Descri\xE7\xE3o"),t(),n(64,"th"),e(65,"Valor Padr\xE3o"),t()()(),n(66,"tbody")(67,"tr")(68,"td")(69,"strong"),e(70,"Default Values"),t()(),l(71,"td")(72,"td"),t(),n(73,"tr")(74,"td")(75,"code"),e(76,"--font-family"),t()(),n(77,"td"),e(78,"Fam\xEDlia tipogr\xE1fica do campo"),t(),n(79,"td")(80,"code"),e(81,"var(--font-family-theme)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--font-size"),t()(),n(86,"td"),e(87,"Tamanho da fonte do campo"),t(),n(88,"td")(89,"code"),e(90,"var(--font-size-default)"),t()()(),n(91,"tr")(92,"td")(93,"code"),e(94,"--text-color-placeholder"),t()(),n(95,"td"),e(96,"Cor do texto no placeholder"),t(),n(97,"td")(98,"code"),e(99,"var(--color-neutral-light-30)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--color"),t()(),n(104,"td"),e(105,"Cor das bordas"),t(),n(106,"td")(107,"code"),e(108,"var(--color-neutral-dark-70)"),t()()(),n(109,"tr")(110,"td")(111,"code"),e(112,"--border-radius"),t()(),n(113,"td"),e(114,"Raio das bordas"),t(),n(115,"td")(116,"code"),e(117,"var(--border-radius-md)"),t()()(),n(118,"tr")(119,"td")(120,"code"),e(121,"--background"),t()(),n(122,"td"),e(123,"Cor de background"),t(),n(124,"td")(125,"code"),e(126,"var(--color-neutral-light-05)"),t()()(),n(127,"tr")(128,"td")(129,"code"),e(130,"--text-color"),t()(),n(131,"td"),e(132,"Cor do texto edit\xE1vel"),t(),n(133,"td")(134,"code"),e(135,"var(--color-neutral-dark-90)"),t()()(),n(136,"tr")(137,"td")(138,"code"),e(139,"--color-clear"),t()(),n(140,"td"),e(141,"Cor do \xEDcone close"),t(),n(142,"td")(143,"code"),e(144,"var(--color-action-default)"),t()()(),n(145,"tr")(146,"td")(147,"code"),e(148,"--color-controls"),t()(),n(149,"td"),e(150,"Cor dos \xEDcones de controle do mode location"),t(),n(151,"td")(152,"code"),e(153,"var(--color-action-default)"),t()()(),n(154,"tr")(155,"td")(156,"code"),e(157,"--transition-property"),t()(),n(158,"td"),e(159,"Atributo da transi\xE7\xE3o"),t(),n(160,"td")(161,"code"),e(162,"all"),t()()(),n(163,"tr")(164,"td")(165,"code"),e(166,"--transition-duration"),t()(),n(167,"td"),e(168,"Dura\xE7\xE3o da transi\xE7\xE3o"),t(),n(169,"td")(170,"code"),e(171,"var(--duration-extra-fast)"),t()()(),n(172,"tr")(173,"td")(174,"code"),e(175,"--transition-timing"),t()(),n(176,"td"),e(177,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),t(),n(178,"td")(179,"code"),e(180,"var(--timing-standart)"),t()()(),n(181,"tr")(182,"td")(183,"strong"),e(184,"Icon"),t()(),l(185,"td")(186,"td"),t(),n(187,"tr")(188,"td")(189,"code"),e(190,"--color-icon-read"),t()(),n(191,"td"),e(192,"Cor do \xEDcone de busca no modo action"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-dark-70)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--color-icon"),t()(),n(200,"td"),e(201,"Cor do \xEDcone de busca no modo trigger"),t(),n(202,"td")(203,"code"),e(204,"var(--color-action-default)"),t()()(),n(205,"tr")(206,"td")(207,"strong"),e(208,"Hover"),t()(),l(209,"td")(210,"td"),t(),n(211,"tr")(212,"td")(213,"code"),e(214,"--color-hover"),t()(),n(215,"td"),e(216,"Cor das bordas no estado hover"),t(),n(217,"td")(218,"code"),e(219,"var(--color-action-hover)"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"--background-hover"),t()(),n(224,"td"),e(225,"Cor de background no estado hover"),t(),n(226,"td")(227,"code"),e(228,"var(--color-brand-01-lightest)"),t()()(),n(229,"tr")(230,"td")(231,"strong"),e(232,"Focused"),t()(),l(233,"td")(234,"td"),t(),n(235,"tr")(236,"td")(237,"code"),e(238,"--color-focused"),t()(),n(239,"td"),e(240,"Cor das bordas no estado de focus"),t(),n(241,"td")(242,"code"),e(243,"var(--color-action-default)"),t()()(),n(244,"tr")(245,"td")(246,"code"),e(247,"--outline-color-focused"),t()(),n(248,"td"),e(249,"Cor do outline no estado de focus"),t(),n(250,"td")(251,"code"),e(252,"var(--color-action-focus)"),t()()(),n(253,"tr")(254,"td")(255,"strong"),e(256,"Disabled"),t()(),l(257,"td")(258,"td"),t(),n(259,"tr")(260,"td")(261,"code"),e(262,"--color-disabled"),t()(),n(263,"td"),e(264,"Cor principal no estado disabled"),t(),n(265,"td")(266,"code"),e(267,"var(--color-action-disabled)"),t()()(),n(268,"tr")(269,"td")(270,"code"),e(271,"--background-disabled"),t()(),n(272,"td"),e(273,"Cor de background no estado disabled"),t(),n(274,"td")(275,"code"),e(276,"var(--color-neutral-light-20)"),t()()()()()(),n(277,"div",7)(278,"h4",8),e(279,"Seletor"),t(),n(280,"pre",9),e(281,`<po-search
    p-aria-label="string"
    (p-blur)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-disabled="boolean"
    (p-filter)="EventEmitter"
    p-filter-keys="Array<any>"
    p-filter-select="PoSearchFilterSelect[]"
    p-filter-type="PoSearchFilterMode"
    (p-filtered-items-change)="EventEmitter"
    (p-focus)="EventEmitter"
    (p-footer-action-listbox)="EventEmitter"
    p-icon="string | TemplateRef<void>"
    p-items="Array<any>"
    (p-keydown)="EventEmitter"
    p-keys-label="Array<string>"
    (p-listbox-onclick)="EventEmitter"
    p-literals="PoSearchLiterals"
    p-loading="boolean"
    (p-locate-next)="EventEmitter"
    (p-locate-previous)="EventEmitter"
    p-locate-summary="PoSearchLocateSummary"
    name="string"
    p-no-autocomplete="boolean"
    p-show-listbox="boolean"
    p-size="string"
    p-search-type="searchMode" >
</po-search>
`),t()(),n(282,"h4",10),e(283,"Propriedades"),t(),n(284,"table",11)(285,"tr",12)(286,"th",13),e(287,"Nome"),t(),n(288,"th",13),e(289,"Tipo"),t(),n(290,"th",13),e(291,"Padr\xE3o"),t(),n(292,"th",13),e(293,"Descri\xE7\xE3o"),t()(),n(294,"tr",14)(295,"td",15)(296,"div",16)(297,"span",17),e(298," p-aria-label"),l(299,"br"),t()()(),n(300,"td",18)(301,"code",19),e(302,"string"),t()(),n(303,"td",20),e(304,"-"),t(),n(305,"td",21)(306,"em")(307,"strong"),e(308,"(opcional)"),t()(),n(309,"p"),e(310,"Define um aria-label para o po-search."),t(),n(311,"blockquote")(312,"p"),e(313,"Devido o componente n\xE3o possuir uma label assim como outros campos de texto, o "),n(314,"code"),e(315,"aria-label"),t(),e(316,` \xE9 utilizado para
acessibilidade.`),t()()()(),n(317,"tr",14)(318,"td",15)(319,"div",22)(320,"span",23),e(321," (p-blur)"),l(322,"br"),t()()(),n(323,"td",18)(324,"code",24),e(325,"EventEmitter"),t()(),n(326,"td",20),e(327,"-"),t(),n(328,"td",21)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),n(332,"p"),e(333,"Evento disparado ao sair do campo."),t()()(),n(334,"tr",14)(335,"td",15)(336,"div",22)(337,"span",23),e(338," (p-change-model)"),l(339,"br"),t()()(),n(340,"td",18)(341,"code",24),e(342,"EventEmitter"),t()(),n(343,"td",20),e(344,"-"),t(),n(345,"td",21)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),n(349,"p"),e(350,"Evento disparado ao alterar valor do model."),t()()(),n(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),e(355," p-disabled"),l(356,"br"),t()()(),n(357,"td",18)(358,"code",25),e(359,"boolean"),t()(),n(360,"td",20)(361,"p")(362,"code"),e(363,"false"),t()()(),n(364,"td",21)(365,"em")(366,"strong"),e(367,"(opcional)"),t()(),n(368,"p"),e(369,"Desabilita o po-search e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),t()()(),n(370,"tr",14)(371,"td",15)(372,"div",22)(373,"span",23),e(374," (p-filter)"),l(375,"br"),t()()(),n(376,"td",18)(377,"code",24),e(378,"EventEmitter"),t()(),n(379,"td",20),e(380,"-"),t(),n(381,"td",21)(382,"em")(383,"strong"),e(384,"(opcional)"),t()(),n(385,"p"),e(386,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es nos filtros."),t(),n(387,"blockquote")(388,"p"),e(389,"Incompat\xEDvel com a propriedade "),n(390,"code"),e(391,"p-search-type"),t(),e(392," do tipo "),n(393,"code"),e(394,"locate"),t(),e(395,"."),t()()()(),n(396,"tr",14)(397,"td",15)(398,"div",16)(399,"span",17),e(400," p-filter-keys"),l(401,"br"),t()()(),n(402,"td",18)(403,"code",26),e(404,"Array<any>"),t()(),n(405,"td",20),e(406,"-"),t(),n(407,"td",21)(408,"p"),e(409,"Define os nomes das propriedades do objeto que ser\xE3o utilizados para busca em "),n(410,"code"),e(411,"p-items"),t(),e(412,`. Cada valor definido no
array ser\xE1 considerado durante a apresenta\xE7\xE3o e filtragem dos itens.
Exemplo de uso:`),t(),n(413,"pre")(414,"code",27),e(415,`const filterKeys: Array<string> = ['name', 'gender', 'planet', 'father'];
`),t()(),n(416,"blockquote")(417,"p"),e(418,"Esta propriedade \xE9 ignorada quando utilizado com "),n(419,"code"),e(420,"p-filter-select"),t(),e(421,` e incompat\xEDvel com a propriedade
`),n(422,"code"),e(423,"p-search-type"),t(),e(424," do tipo "),n(425,"code"),e(426,"locate"),t(),e(427,"."),t()()()(),n(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),e(432," p-filter-select"),l(433,"br"),t()()(),n(434,"td",18)(435,"code",28),e(436,"PoSearchFilterSelect[]"),t()(),n(437,"td",20),e(438,"-"),t(),n(439,"td",21)(440,"p"),e(441,`Habilita um seletor de filtros \xE0 esquerda do campo, permitindo a aplica\xE7\xE3o de filtros agrupados na busca ou sobre
os itens fornecidos em `),n(442,"code"),e(443,"p-items"),t(),e(444,". Automaticamente adiciona a op\xE7\xE3o "),n(445,"strong"),e(446,"Todos"),t(),e(447,", com um mapeamento de todas as op\xE7\xF5es passadas."),t(),n(448,"p"),e(449,"Exemplo de uso:"),t(),n(450,"pre")(451,"code",27),e(452,`const filterSelect = [
  { label: 'personal', value: ['name', 'email', 'nickname'] },
  { label: 'address', value: ['country', 'state', 'city', 'street'] },
  { label: 'family', value: ['father', 'mother', 'dependents'] }
];
`),t()(),n(453,"blockquote")(454,"p"),e(455,"Ao ser habilitada, a propriedade "),n(456,"code"),e(457,"p-filter-keys"),t(),e(458,` ser\xE1 ignorada. Esta propriedade \xE9 incompat\xEDvel com a propriedade
`),n(459,"code"),e(460,"p-search-type"),t(),e(461," do tipo "),n(462,"code"),e(463,"locate"),t(),e(464,"."),t()()()(),n(465,"tr",14)(466,"td",15)(467,"div",16)(468,"span",17),e(469," p-filter-type"),l(470,"br"),t()()(),n(471,"td",18)(472,"code",29),e(473,"PoSearchFilterMode"),t()(),n(474,"td",20)(475,"p")(476,"code"),e(477,"startsWith"),t()()(),n(478,"td",21)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,`Define o modo de pesquisa utilizado no campo de busca. Os valores permitidos s\xE3o definidos pelo enum
`),n(484,"strong"),e(485,"PoSearchFilterMode"),t(),e(486,"."),t(),n(487,"blockquote")(488,"p"),e(489,"Incompat\xEDvel com a propriedade "),n(490,"code"),e(491,"p-search-type"),t(),e(492," do tipo "),n(493,"code"),e(494,"locate"),t(),e(495,"."),t()()()(),n(496,"tr",14)(497,"td",15)(498,"div",22)(499,"span",23),e(500," (p-filtered-items-change)"),l(501,"br"),t()()(),n(502,"td",18)(503,"code",24),e(504,"EventEmitter"),t()(),n(505,"td",20),e(506,"-"),t(),n(507,"td",21)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),n(511,"p"),e(512,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no input."),t(),n(513,"blockquote")(514,"p"),e(515,"Incompat\xEDvel com a propriedade "),n(516,"code"),e(517,"p-search-type"),t(),e(518," do tipo "),n(519,"code"),e(520,"locate"),t(),e(521,"."),t()()()(),n(522,"tr",14)(523,"td",15)(524,"div",22)(525,"span",23),e(526," (p-focus)"),l(527,"br"),t()()(),n(528,"td",18)(529,"code",24),e(530,"EventEmitter"),t()(),n(531,"td",20),e(532,"-"),t(),n(533,"td",21)(534,"em")(535,"strong"),e(536,"(opcional)"),t()(),n(537,"p"),e(538,"Evento emitido quando o campo de entrada (input) recebe foco."),t()()(),n(539,"tr",14)(540,"td",15)(541,"div",22)(542,"span",23),e(543," (p-footer-action-listbox)"),l(544,"br"),t()()(),n(545,"td",18)(546,"code",24),e(547,"EventEmitter"),t()(),n(548,"td",20),e(549,"-"),t(),n(550,"td",21)(551,"em")(552,"strong"),e(553,"(opcional)"),t()(),n(554,"p"),e(555,"Evento disparado ao clicar no bot\xE3o de a\xE7\xE3o exibido no rodap\xE9 do "),n(556,"code"),e(557,"listbox"),t(),e(558,`.
O texto exibido pode ser configurado por meio do literal `),n(559,"code"),e(560,"footerActionListbox"),t(),e(561,"."),t()()(),n(562,"tr",14)(563,"td",15)(564,"div",16)(565,"span",17),e(566," p-icon"),l(567,"br"),t()()(),n(568,"td",18)(569,"code",19),e(570,"string "),t(),n(571,"code",30),e(572," TemplateRef<void>"),t()(),n(573,"td",20),e(574,"-"),t(),n(575,"td",21)(576,"em")(577,"strong"),e(578,"(opcional)"),t()(),n(579,"p"),e(580,"Permite customizar o \xEDcone de busca que acompanha o campo."),t(),n(581,"p"),e(582,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(583,"a",31),e(584,"Biblioteca de \xEDcones PO UI"),t(),e(585,", conforme exemplo:"),t(),n(586,"pre")(587,"code"),e(588,`<po-search p-icon="an an-user"></po-search>
`),t()(),n(589,"p"),e(590,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(591,"em"),e(592,"Font Awesome"),t(),e(593,`, desde que a biblioteca
esteja carregada no projeto:`),t(),n(594,"pre")(595,"code"),e(596,`<po-search p-icon="fa fa-podcast"></po-search>
`),t()(),n(597,"p"),e(598,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(599,"code"),e(600,"TemplateRef"),t(),e(601,", conforme exemplo abaixo:"),t(),n(602,"pre")(603,"code"),e(604,`<po-search [p-icon]="template"></po-search>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),t()()()(),n(605,"tr",14)(606,"td",15)(607,"div",16)(608,"span",17),e(609," p-items"),l(610,"br"),t()()(),n(611,"td",18)(612,"code",26),e(613,"Array<any>"),t()(),n(614,"td",20),e(615,"-"),t(),n(616,"td",21)(617,"em")(618,"strong"),e(619,"(opcional)"),t()(),n(620,"p"),e(621,"Lista de itens que ser\xE3o utilizados para pesquisa."),t(),n(622,"blockquote")(623,"p"),e(624,"Incompat\xEDvel com a propriedade "),n(625,"code"),e(626,"p-search-type"),t(),e(627," do tipo "),n(628,"code"),e(629,"locate"),t(),e(630,"."),t()()()(),n(631,"tr",14)(632,"td",15)(633,"div",22)(634,"span",23),e(635," (p-keydown)"),l(636,"br"),t()()(),n(637,"td",18)(638,"code",24),e(639,"EventEmitter"),t()(),n(640,"td",20),e(641,"-"),t(),n(642,"td",21)(643,"em")(644,"strong"),e(645,"(opcional)"),t()(),n(646,"p"),e(647,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(648,"code"),e(649,"KeyboardEvent"),t(),e(650," com informa\xE7\xF5es sobre a tecla."),t()()(),n(651,"tr",14)(652,"td",15)(653,"div",16)(654,"span",17),e(655," p-keys-label"),l(656,"br"),t()()(),n(657,"td",18)(658,"code",32),e(659,"Array<string>"),t()(),n(660,"td",20),e(661,"-"),t(),n(662,"td",21)(663,"em")(664,"strong"),e(665,"(opcional)"),t()(),n(666,"p"),e(667,"Define os nomes das propriedades do objeto que ser\xE3o exibidos como r\xF3tulos (labels) no "),n(668,"code"),e(669,"listbox"),t(),e(670,` quando a propriedade
`),n(671,"code"),e(672,"p-show-listbox"),t(),e(673," estiver habilitada."),t(),n(674,"p"),e(675,"Deve ser informado um array de strings contendo at\xE9 "),n(676,"strong"),e(677,"3 propriedades"),t(),e(678,"."),t(),n(679,"p"),e(680,"Exemplo de uso:"),t(),n(681,"pre")(682,"code",33),e(683,`keysLabel: Array<string> = ['nome', 'email', 'country'];
`),t()()()(),n(684,"tr",14)(685,"td",15)(686,"div",22)(687,"span",23),e(688," (p-listbox-onclick)"),l(689,"br"),t()()(),n(690,"td",18)(691,"code",24),e(692,"EventEmitter"),t()(),n(693,"td",20),e(694,"-"),t(),n(695,"td",21)(696,"em")(697,"strong"),e(698,"(opcional)"),t()(),n(699,"p"),e(700,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver click no listbox."),t(),n(701,"blockquote")(702,"p"),e(703,"Incompat\xEDvel com a propriedade "),n(704,"code"),e(705,"p-search-type"),t(),e(706," do tipo "),n(707,"code"),e(708,"locate"),t(),e(709,"."),t()()()(),n(710,"tr",14)(711,"td",15)(712,"div",16)(713,"span",17),e(714," p-literals"),l(715,"br"),t()()(),n(716,"td",18)(717,"code",34),e(718,"PoSearchLiterals"),t()(),n(719,"td",20),e(720,"-"),t(),n(721,"td",21)(722,"em")(723,"strong"),e(724,"(opcional)"),t()(),n(725,"p"),e(726,"Objeto com as literais usadas no "),n(727,"code"),e(728,"po-search"),t(),e(729,", permitindo personalizar os textos exibidos no componente."),t(),n(730,"p"),e(731,"Para utilizar basta passar a literal que deseja customizar:"),t(),n(732,"pre")(733,"code"),e(734,`const customLiterals: PoSearchLiterals = {
  search: 'Pesquisar',
  clean: 'Limpar',
};
`),t()(),n(735,"p"),e(736,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),n(737,"pre")(738,"code"),e(739,`<po-search
  [p-literals]="customLiterals">
</po-search>
`),t()(),n(740,"blockquote")(741,"p"),e(742,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(743,"a",35)(744,"code"),e(745,"PoI18nService"),t()(),e(746,` ou
do browser.`),t()()()(),n(747,"tr",14)(748,"td",15)(749,"div",16)(750,"span",17),e(751," p-loading"),l(752,"br"),t()()(),n(753,"td",18)(754,"code",25),e(755,"boolean"),t()(),n(756,"td",20)(757,"p")(758,"code"),e(759,"false"),t()()(),n(760,"td",21)(761,"em")(762,"strong"),e(763,"(opcional)"),t()(),n(764,"p"),e(765,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t(),n(766,"blockquote")(767,"p"),e(768,"Incompat\xEDvel com a propriedade "),n(769,"code"),e(770,"p-search-type"),t(),e(771," do tipo "),n(772,"code"),e(773,"locate"),t(),e(774,"."),t()()()(),n(775,"tr",14)(776,"td",15)(777,"div",22)(778,"span",23),e(779," (p-locate-next)"),l(780,"br"),t()()(),n(781,"td",18)(782,"code",24),e(783,"EventEmitter"),t()(),n(784,"td",20),e(785,"-"),t(),n(786,"td",21)(787,"em")(788,"strong"),e(789,"(opcional)"),t()(),n(790,"p"),e(791,'Evento disparado ao clicar no controle "Pr\xF3ximo resultado".'),t(),n(792,"blockquote")(793,"p"),e(794,"Compat\xEDvel com a propriedade "),n(795,"code"),e(796,"p-search-type"),t(),e(797," do tipo "),n(798,"code"),e(799,"locate"),t(),e(800,"."),t()()()(),n(801,"tr",14)(802,"td",15)(803,"div",22)(804,"span",23),e(805," (p-locate-previous)"),l(806,"br"),t()()(),n(807,"td",18)(808,"code",24),e(809,"EventEmitter"),t()(),n(810,"td",20),e(811,"-"),t(),n(812,"td",21)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),n(816,"p"),e(817,'Evento disparado ao clicar no controle "Resultado anterior".'),t(),n(818,"blockquote")(819,"p"),e(820,"Compat\xEDvel com a propriedade "),n(821,"code"),e(822,"p-search-type"),t(),e(823," do tipo "),n(824,"code"),e(825,"locate"),t(),e(826,"."),t()()()(),n(827,"tr",14)(828,"td",15)(829,"div",16)(830,"span",17),e(831," p-locate-summary"),l(832,"br"),t()()(),n(833,"td",18)(834,"code",36),e(835,"PoSearchLocateSummary"),t()(),n(836,"td",20),e(837,"-"),t(),n(838,"td",21)(839,"em")(840,"strong"),e(841,"(opcional)"),t()(),n(842,"p"),e(843,"Define os valores do contador exibido ao usar a propriedade "),n(844,"code"),e(845,"p-search-type"),t(),e(846," do tipo "),n(847,"code"),e(848,"locate"),t(),e(849,`, indicando a posi\xE7\xE3o
atual e o total de ocorr\xEAncias encontradas.
Exemplo de uso:`),t(),n(850,"pre")(851,"code",33),e(852,`locateSummary: PoSearchLocateSummary = { currentIndex: 0, total: 5 };
`),t()(),n(853,"blockquote")(854,"p"),e(855,"Compat\xEDvel com a propriedade "),n(856,"code"),e(857,"p-search-type"),t(),e(858," do tipo "),n(859,"code"),e(860,"locate"),t(),e(861,"."),t()()()(),n(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),e(866," name"),l(867,"br"),t()()(),n(868,"td",18)(869,"code",19),e(870,"string"),t()(),n(871,"td",20),e(872,"-"),t(),n(873,"td",21)(874,"em")(875,"strong"),e(876,"(opcional)"),t()(),n(877,"p"),e(878,"Nome e identificador do campo."),t()()(),n(879,"tr",14)(880,"td",15)(881,"div",16)(882,"span",17),e(883," p-no-autocomplete"),l(884,"br"),t()()(),n(885,"td",18)(886,"code",25),e(887,"boolean"),t()(),n(888,"td",20)(889,"p")(890,"code"),e(891,"false"),t()()(),n(892,"td",21)(893,"em")(894,"strong"),e(895,"(opcional)"),t()(),n(896,"p"),e(897,"Define a propriedade nativa "),n(898,"code"),e(899,"autocomplete"),t(),e(900," do campo como "),n(901,"code"),e(902,"off"),t(),e(903,"."),t()()(),n(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),e(908," p-show-listbox"),l(909,"br"),t()()(),n(910,"td",18)(911,"code",25),e(912,"boolean"),t()(),n(913,"td",20)(914,"p")(915,"code"),e(916,"false"),t()()(),n(917,"td",21)(918,"em")(919,"strong"),e(920,"(opcional)"),t()(),n(921,"p"),e(922,"Exibe uma lista (auto-complete) com as op\xE7\xF5es definidas em "),n(923,"code"),e(924,"p-filter-keys"),t(),e(925," ou "),n(926,"code"),e(927,"p-filter-select"),t(),e(928,` enquanto realiza
uma busca, respeitando o `),n(929,"code"),e(930,"p-filter-type"),t(),e(931," como modo de pesquisa."),t(),n(932,"blockquote")(933,"p"),e(934,"Incompat\xEDvel com a propriedade "),n(935,"code"),e(936,"p-search-type"),t(),e(937," do tipo "),n(938,"code"),e(939,"locate"),t(),e(940,"."),t()()()(),n(941,"tr",14)(942,"td",15)(943,"div",16)(944,"span",17),e(945," p-size"),l(946,"br"),t()()(),n(947,"td",18)(948,"code",19),e(949,"string"),t()(),n(950,"td",20)(951,"p")(952,"code"),e(953,"medium"),t()()(),n(954,"td",21)(955,"em")(956,"strong"),e(957,"(opcional)"),t()(),n(958,"p"),e(959,"Define o tamanho do componente:"),t(),n(960,"ul")(961,"li")(962,"code"),e(963,"small"),t(),e(964,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(965,"li")(966,"code"),e(967,"medium"),t(),e(968,": altura do input como 44px."),t()(),n(969,"blockquote")(970,"p"),e(971,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(972,"code"),e(973,"medium"),t(),e(974,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(975,"a",37),e(976,"po-theme"),t(),e(977,"."),t()()()(),n(978,"tr",14)(979,"td",15)(980,"div",16)(981,"span",17),e(982," p-search-type"),l(983,"br"),t()()(),n(984,"td",18)(985,"code",38),e(986,"searchMode"),t()(),n(987,"td",20)(988,"p")(989,"code"),e(990,"action"),t()()(),n(991,"td",21)(992,"em")(993,"strong"),e(994,"(opcional)"),t()(),n(995,"p"),e(996,"Determina a forma de realizar a pesquisa no componente. Valores aceitos:"),t(),n(997,"ul")(998,"li")(999,"code"),e(1e3,"action"),t(),e(1001,": Realiza a busca a cada caractere digitado."),t(),n(1002,"li")(1003,"code"),e(1004,"trigger"),t(),e(1005,": Realiza a busca ao pressionar "),n(1006,"code"),e(1007,"enter"),t(),e(1008," ou clicar no \xEDcone de busca."),t(),n(1009,"li")(1010,"code"),e(1011,"locate"),t(),e(1012,": Modo manual. Exibe bot\xF5es e contador, mas n\xE3o executa buscas \u2014 controle \xE9 do desenvolvedor."),t(),n(1013,"li")(1014,"code"),e(1015,"execute"),t(),e(1016,": Executa uma a\xE7\xE3o ou realiza um redirecionamento ao selecionar um item no "),n(1017,"code"),e(1018,"listbox"),t(),e(1019,". Para este tipo, \xE9 necess\xE1rio informar as propriedades "),n(1020,"code"),e(1021,"action"),t(),e(1022," ou "),n(1023,"code"),e(1024,"url"),t(),e(1025," nos itens definidos em "),n(1026,"code"),e(1027,"p-items"),t(),e(1028,"."),t()()()()(),n(1029,"h3"),e(1030,"Interfaces"),t(),n(1031,"h4",39)(1032,"code",5),e(1033,"PoSearchFilterSelect"),t()(),n(1034,"div",2)(1035,"p"),e(1036,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas no dropdown do "),n(1037,"code"),e(1038,"po-search"),t(),e(1039,", ao usar a propriedade "),n(1040,"code"),e(1041,"p-filter-select"),t(),e(1042,"."),t()(),n(1043,"h4",10),e(1044,"Propriedades"),t(),n(1045,"table",11)(1046,"tr",12)(1047,"th",13),e(1048,"Nome"),t(),n(1049,"th",13),e(1050,"Tipo"),t(),n(1051,"th",13),e(1052,"Descri\xE7\xE3o"),t()(),n(1053,"tr",14)(1054,"td",15)(1055,"div",16)(1056,"span",17),e(1057," label"),l(1058,"br"),t()()(),n(1059,"td",18)(1060,"code",19),e(1061,"string"),t()(),n(1062,"td",21)(1063,"p"),e(1064,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t()()(),n(1065,"tr",14)(1066,"td",15)(1067,"div",16)(1068,"span",17),e(1069," value"),l(1070,"br"),t()()(),n(1071,"td",18)(1072,"code",32),e(1073,"Array<string> "),t(),n(1074,"code",19),e(1075," string"),t()(),n(1076,"td",21)(1077,"p"),e(1078,"Valores que ser\xE3o atribu\xEDdos ao "),n(1079,"code"),e(1080,"p-filter-keys"),t()()()()(),n(1081,"h4",39)(1082,"code",5),e(1083,"PoSearchLocateSummary"),t()(),n(1084,"div",2)(1085,"p"),e(1086,"Interface que define o resumo de localiza\xE7\xE3o do filtro "),n(1087,"code"),e(1088,"p-filter-locate"),t(),e(1089,"."),t()(),n(1090,"h4",10),e(1091,"Propriedades"),t(),n(1092,"table",11)(1093,"tr",12)(1094,"th",13),e(1095,"Nome"),t(),n(1096,"th",13),e(1097,"Tipo"),t(),n(1098,"th",13),e(1099,"Descri\xE7\xE3o"),t()(),n(1100,"tr",14)(1101,"td",15)(1102,"div",16)(1103,"span",17),e(1104," currentIndex"),l(1105,"br"),t()()(),n(1106,"td",18)(1107,"code",40),e(1108,"number"),t()(),n(1109,"td",21)(1110,"p"),e(1111,"\xCDndice atual da ocorr\xEAncia localizada."),t()()(),n(1112,"tr",14)(1113,"td",15)(1114,"div",16)(1115,"span",17),e(1116," total"),l(1117,"br"),t()()(),n(1118,"td",18)(1119,"code",40),e(1120,"number"),t()(),n(1121,"td",21)(1122,"p"),e(1123,"Total de ocorr\xEAncias encontradas."),t()()()(),n(1124,"h4",39)(1125,"code",5),e(1126,"PoSearchOption"),t()(),n(1127,"div",2)(1128,"p"),e(1129,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista ao procurar do "),n(1130,"code"),e(1131,"po-search"),t(),e(1132,"."),t()(),n(1133,"h4",10),e(1134,"Propriedades"),t(),n(1135,"table",11)(1136,"tr",12)(1137,"th",13),e(1138,"Nome"),t(),n(1139,"th",13),e(1140,"Tipo"),t(),n(1141,"th",13),e(1142,"Descri\xE7\xE3o"),t()(),n(1143,"tr",14)(1144,"td",15)(1145,"div",16)(1146,"span",17),e(1147," label"),l(1148,"br"),t()()(),n(1149,"td",18)(1150,"code",19),e(1151,"string"),t()(),n(1152,"td",21)(1153,"em")(1154,"strong"),e(1155,"(opcional)"),t()(),n(1156,"p"),e(1157,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t(),n(1158,"blockquote")(1159,"p"),e(1160,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),n(1161,"code"),e(1162,"value"),t(),e(1163,"."),t()()()(),n(1164,"tr",14)(1165,"td",15)(1166,"div",16)(1167,"span",17),e(1168," value"),l(1169,"br"),t()()(),n(1170,"td",18)(1171,"code",19),e(1172,"string "),t(),n(1173,"code",40),e(1174," number"),t()(),n(1175,"td",21)(1176,"p"),e(1177,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),n(1178,"em"),e(1179,"model"),t(),e(1180,"."),t()()()(),n(1181,"h4",39)(1182,"code",5),e(1183,"PoSearchLiterals"),t()(),n(1184,"div",2)(1185,"p"),e(1186,"Interface para defini\xE7\xE3o das literais usadas no "),n(1187,"code"),e(1188,"po-search"),t(),e(1189,"."),t()(),n(1190,"h4",10),e(1191,"Propriedades"),t(),n(1192,"table",11)(1193,"tr",12)(1194,"th",13),e(1195,"Nome"),t(),n(1196,"th",13),e(1197,"Tipo"),t(),n(1198,"th",13),e(1199,"Descri\xE7\xE3o"),t()(),n(1200,"tr",14)(1201,"td",15)(1202,"div",16)(1203,"span",17),e(1204," all"),l(1205,"br"),t()()(),n(1206,"td",18)(1207,"code",19),e(1208,"string"),t()(),n(1209,"td",21)(1210,"em")(1211,"strong"),e(1212,"(opcional)"),t()(),n(1213,"p"),e(1214,"Texto exibido no dropdown de tipo de filtro, representando todos os tipos dispon\xEDveis."),t(),n(1215,"blockquote")(1216,"p"),e(1217,"Exibido apenas quando a propriedade "),n(1218,"code"),e(1219,"p-filter-select"),t(),e(1220," estiver habilitada."),t()()()(),n(1221,"tr",14)(1222,"td",15)(1223,"div",16)(1224,"span",17),e(1225," clean"),l(1226,"br"),t()()(),n(1227,"td",18)(1228,"code",19),e(1229,"string"),t()(),n(1230,"td",21)(1231,"em")(1232,"strong"),e(1233,"(opcional)"),t()(),n(1234,"p"),e(1235,"Texto alternativo (aria-label) para o bot\xE3o de limpar o campo de busca, usado por leitores de tela."),t()()(),n(1236,"tr",14)(1237,"td",15)(1238,"div",16)(1239,"span",17),e(1240," footerActionListbox"),l(1241,"br"),t()()(),n(1242,"td",18)(1243,"code",19),e(1244,"string"),t()(),n(1245,"td",21)(1246,"em")(1247,"strong"),e(1248,"(opcional)"),t()(),n(1249,"p"),e(1250,"Texto exibido na a\xE7\xE3o do rodap\xE9 da lista de resultados."),t()()(),n(1251,"tr",14)(1252,"td",15)(1253,"div",16)(1254,"span",17),e(1255," next"),l(1256,"br"),t()()(),n(1257,"td",18)(1258,"code",19),e(1259,"string"),t()(),n(1260,"td",21)(1261,"em")(1262,"strong"),e(1263,"(opcional)"),t()(),n(1264,"p"),e(1265,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o pr\xF3ximo resultado da busca."),t(),n(1266,"blockquote")(1267,"p"),e(1268,"Exibido apenas quando a propriedade "),n(1269,"code"),e(1270,"p-filter-locate"),t(),e(1271," estiver habilitada."),t()()()(),n(1272,"tr",14)(1273,"td",15)(1274,"div",16)(1275,"span",17),e(1276," of"),l(1277,"br"),t()()(),n(1278,"td",18)(1279,"code",19),e(1280,"string"),t()(),n(1281,"td",21)(1282,"em")(1283,"strong"),e(1284,"(opcional)"),t()(),n(1285,"p"),e(1286,'Texto alternativo (aria-label) para a palavra "de" no contador de resultados (ex: "Resultado 1 de 4").'),t(),n(1287,"blockquote")(1288,"p"),e(1289,"Exibido apenas quando a propriedade "),n(1290,"code"),e(1291,"p-filter-locate"),t(),e(1292," estiver habilitada."),t()()()(),n(1293,"tr",14)(1294,"td",15)(1295,"div",16)(1296,"span",17),e(1297," placeholderListbox"),l(1298,"br"),t()()(),n(1299,"td",18)(1300,"code",19),e(1301,"string"),t()(),n(1302,"td",21)(1303,"em")(1304,"strong"),e(1305,"(opcional)"),t()(),n(1306,"p"),e(1307,"Texto exibido como "),n(1308,"em"),e(1309,"placeholder"),t(),e(1310," na lista de resultados."),t()()(),n(1311,"tr",14)(1312,"td",15)(1313,"div",16)(1314,"span",17),e(1315," previous"),l(1316,"br"),t()()(),n(1317,"td",18)(1318,"code",19),e(1319,"string"),t()(),n(1320,"td",21)(1321,"em")(1322,"strong"),e(1323,"(opcional)"),t()(),n(1324,"p"),e(1325,"Texto alternativo (aria-label) para navega\xE7\xE3o at\xE9 o resultado anterior da busca."),t(),n(1326,"blockquote")(1327,"p"),e(1328,"Exibido apenas quando a propriedade "),n(1329,"code"),e(1330,"p-filter-locate"),t(),e(1331," estiver habilitada."),t()()()(),n(1332,"tr",14)(1333,"td",15)(1334,"div",16)(1335,"span",17),e(1336," result"),l(1337,"br"),t()()(),n(1338,"td",18)(1339,"code",19),e(1340,"string"),t()(),n(1341,"td",21)(1342,"em")(1343,"strong"),e(1344,"(opcional)"),t()(),n(1345,"p"),e(1346,'Texto alternativo (aria-label) para a label "Resultado" que acompanha o contador.'),t(),n(1347,"blockquote")(1348,"p"),e(1349,"Exibido apenas quando a propriedade "),n(1350,"code"),e(1351,"p-filter-locate"),t(),e(1352," estiver habilitada."),t()()()(),n(1353,"tr",14)(1354,"td",15)(1355,"div",16)(1356,"span",17),e(1357," search"),l(1358,"br"),t()()(),n(1359,"td",18)(1360,"code",19),e(1361,"string"),t()(),n(1362,"td",21)(1363,"em")(1364,"strong"),e(1365,"(opcional)"),t()(),n(1366,"p"),e(1367,"Texto exibido como "),n(1368,"em"),e(1369,"placeholder"),t(),e(1370," no campo de busca."),t()()()(),n(1371,"h3"),e(1372,"Enums"),t(),n(1373,"h4",4)(1374,"code",5),e(1375,"PoSearchFilterMode"),t()(),n(1376,"div",2)(1377,"p"),e(1378,"Define o tipo de busca usado no "),n(1379,"code"),e(1380,"po-search"),t(),e(1381,"."),t()(),n(1382,"h4",10),e(1383,"Propriedades"),t(),n(1384,"table",11)(1385,"tr",12)(1386,"th",13),e(1387,"Nome"),t(),n(1388,"th",13),e(1389,"Descri\xE7\xE3o"),t()(),n(1390,"tr",14)(1391,"td",15)(1392,"div",16)(1393,"span",17),e(1394," startsWith"),l(1395,"br"),t()()(),n(1396,"td",21)(1397,"p"),e(1398,"Verifica se o texto "),n(1399,"em"),e(1400,"inicia"),t(),e(1401," com o valor pesquisado."),t()()(),n(1402,"tr",14)(1403,"td",15)(1404,"div",16)(1405,"span",17),e(1406," contains"),l(1407,"br"),t()()(),n(1408,"td",21)(1409,"p"),e(1410,"Verifica se o texto "),n(1411,"em"),e(1412,"cont\xE9m"),t(),e(1413," o valor pesquisado."),t()()(),n(1414,"tr",14)(1415,"td",15)(1416,"div",16)(1417,"span",17),e(1418," endsWith"),l(1419,"br"),t()()(),n(1420,"td",21)(1421,"p"),e(1422,"Verifica se o texto "),n(1423,"em"),e(1424,"finaliza"),t(),e(1425," com o valor pesquisado."),t()()()()())},dependencies:[g],encapsulation:2})}return a})();var Ge=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(ne(be),ne(ge))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Search",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,i){o&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-search-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-search-basic-view")(6,"sample-po-search-labs-view")(7,"sample-po-search-find-people-view")(8,"sample-po-search-listbox-view")(9,"sample-po-search-filter-select-view")(10,"sample-po-search-execute-view")(11,"sample-po-search-fields-locate-view"),t()()()),o&2&&(m("p-actions",i.actions),s(2),m("p-active",i.activeTab==="doc"),s(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Fe,E,b,Ae,Oe,Ne,ze,We,He,Je,Ue],encapsulation:2})}return a})();var At=[{path:"",component:Ge}],Qe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=G({type:a});static \u0275inj=U({imports:[ie.forChild(At),ie]})}return a})();var zn=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=G({type:a});static \u0275inj=U({imports:[Le,Qe]})}return a})();export{zn as DocPoSearchModule};
