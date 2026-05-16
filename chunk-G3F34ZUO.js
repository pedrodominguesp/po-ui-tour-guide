import{o as y,p as Fe}from"./chunk-AT3MKFJ3.js";import{Fa as ee,Gb as k,Hb as C,Ja as ye,M as K,Oa as w,S as Ce,U as X,Xa as N,Ya as Pe,a as O,ab as B,k as ke,tb as Le,w as H,za as Z}from"./chunk-GCMU57WK.js";import{Ea as s,Fa as i,Ga as t,H as j,Ha as n,I as Q,Jc as ae,L as h,Mb as q,Mc as D,Nc as V,O as g,Oa as Y,Oc as $,P as v,Pa as u,Pc as A,Qc as z,Ra as ce,Tc as be,Uc as ge,Xb as Se,Yc as ve,_a as ue,bb as P,cb as e,cd as he,eb as L,ed as fe,gb as x,gd as le,ha as d,hb as S,ib as b,k as ie,ma as ne,mc as I,nb as oe,oa as E,pa as J,pb as _,qb as U,rb as F,xb as Ee,ya as pe,yb as xe,z as de,za as se}from"./chunk-XD3NZLB4.js";import{a as G,c as me}from"./chunk-GAL4ENT6.js";var qe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","PO Lookup"]],template:function(l,o){l&1&&n(0,"po-lookup",0)},dependencies:[w],encapsulation:2})}return a})();var Ue=a=>({"docs-sample-code-tabs":a}),we=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Basic"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-basic/sample-po-lookup-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  p-field-label="label"
  p-field-value="value"
  p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  p-label="PO Lookup"
>
</po-lookup>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-basic/sample-po-lookup-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-lookup-basic',
  templateUrl: './sample-po-lookup-basic.component.html',
  standalone: false
})
export class SamplePoLookupBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-lookup-basic"),t(),n(23,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),s("ngClass",F(4,Ue,o.hideSampleCodeTabs)))},dependencies:[q,y,k,C,qe],encapsulation:2})}return a})();var T=(()=>{class a{httpClient=h(I);url="https://po-sample-api.onrender.com/v1/heroes";getFilteredItems(r){let m=r,{filterParams:l,advancedFilters:o}=m,c=me(m,["filterParams","advancedFilters"]),p=G(G(G({},c),l),o);return this.httpClient.get(this.url,{params:p})}getObjectByValue(r){return this.httpClient.get(`${this.url}/${r}`)}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Me=(()=>{class a{sampleFilterService=h(T);helperText;columns;columnsName;customLiterals;event;fieldFormat;formatField;fieldLabel;fieldValue;filterService;help;label;literals;lookup;placeholder;properties;fieldErrorMessage;advancedFilters;customAdvancedFilters;size;spacing=ke.Medium;columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"email",label:"Email"}];fieldLabelOptions=[{value:"label",label:"Label"},...this.columnsOptions];fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"infiniteScroll",label:"Infinite Scroll"},{value:"multiple",label:"Multiple"},{value:"autoHeight",label:"Auto Height"},{value:"hideColumnsManager",label:"Hide Columns Manager"},{value:"textWrap",label:"Text Wrap"},{value:"virtualScroll",label:"Virtual Sroll"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Name"},email:{property:"email",label:"Email"}};typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(r){this.customLiterals=void 0}}onFieldFormatChange(r){try{this.fieldFormat=JSON.parse(r)}catch(l){this.fieldFormat=void 0}}changeAdvancedFilters(){try{this.customAdvancedFilters=JSON.parse(this.advancedFilters)}catch(r){this.customAdvancedFilters=void 0}}restore(){this.helperText="",this.columnsName=["id","name"],this.customLiterals=void 0,this.updateColumns(),this.fieldLabel="name",this.fieldValue="id",this.fieldFormat=void 0,this.formatField=void 0,this.event=void 0,this.filterService=void 0,this.label=void 0,this.literals=void 0,this.help=void 0,this.lookup=void 0,this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.customAdvancedFilters=[],this.size="medium"}updateColumns(){this.columns=[],this.columnsName.forEach(r=>this.columns.push(this.columnsDefinition[r]))}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-labs"]],standalone:!1,features:[_([T])],decls:26,vars:54,consts:[["f","ngForm"],["name","lookup",3,"ngModelChange","p-change","p-error","p-keydown","p-selected","ngModel","p-helper","p-advanced-filters","p-auto-height","p-clean","p-columns","p-disabled","p-field-format","p-field-label","p-filter-service","p-field-value","p-help","p-hide-columns-manager","p-infinite-scroll","p-label","p-literals","p-loading","p-multiple","p-no-autocomplete","p-optional","p-placeholder","p-required","p-field-error-message","p-show-required","p-size","p-spacing","p-text-wrap","p-label-text-wrap","p-virtual-scroll","p-error-limit","p-compact-label"],["p-no-border","true","p-no-padding","true"],[1,"po-row"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columnsName","p-columns","3","p-label","Columns",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/people","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }',"p-label","Literals",1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","advancedFilters","p-help",'Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]',"p-label","Advanced Filters","p-rows","4",1,"po-md-12","po-lg-12",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,o){if(l&1){let c=Y();i(0,"po-lookup",1),b("ngModelChange",function(m){return g(c),S(o.lookup,m)||(o.lookup=m),v(m)}),u("p-change",function(){return o.changeEvent("p-change")})("p-error",function(){return o.changeEvent("p-error")})("p-keydown",function(){return o.changeEvent("p-keydown")})("p-selected",function(){return o.changeEvent("p-selected")}),t(),n(1,"po-divider"),i(2,"po-container",2)(3,"div",3),n(4,"po-info",4)(5,"po-info",5),t()(),n(6,"po-divider"),i(7,"form",null,0)(9,"po-input",6),b("ngModelChange",function(m){return g(c),S(o.label,m)||(o.label=m),v(m)}),t(),i(10,"po-checkbox-group",7),b("ngModelChange",function(m){return g(c),S(o.columnsName,m)||(o.columnsName=m),v(m)}),u("p-change",function(){return o.updateColumns()}),t(),i(11,"po-select",8),b("ngModelChange",function(m){return g(c),S(o.fieldLabel,m)||(o.fieldLabel=m),v(m)}),t(),i(12,"po-select",9),b("ngModelChange",function(m){return g(c),S(o.fieldValue,m)||(o.fieldValue=m),v(m)}),t(),i(13,"po-input",10),b("ngModelChange",function(m){return g(c),S(o.filterService,m)||(o.filterService=m),v(m)}),t(),i(14,"po-input",11),b("ngModelChange",function(m){return g(c),S(o.fieldErrorMessage,m)||(o.fieldErrorMessage=m),v(m)}),t(),i(15,"po-input",12),b("ngModelChange",function(m){return g(c),S(o.help,m)||(o.help=m),v(m)}),t(),i(16,"po-input",13),b("ngModelChange",function(m){return g(c),S(o.helperText,m)||(o.helperText=m),v(m)}),t(),i(17,"po-input",14),b("ngModelChange",function(m){return g(c),S(o.placeholder,m)||(o.placeholder=m),v(m)}),t(),i(18,"po-input",15),b("ngModelChange",function(m){return g(c),S(o.literals,m)||(o.literals=m),v(m)}),u("p-change",function(){return o.changeLiterals()}),t(),i(19,"po-input",16),b("ngModelChange",function(m){return g(c),S(o.formatField,m)||(o.formatField=m),v(m)}),u("p-change",function(m){return o.onFieldFormatChange(m)}),t(),i(20,"po-checkbox-group",17),b("ngModelChange",function(m){return g(c),S(o.properties,m)||(o.properties=m),v(m)}),t(),i(21,"po-radio-group",18),b("ngModelChange",function(m){return g(c),S(o.spacing,m)||(o.spacing=m),v(m)}),t(),i(22,"po-radio-group",19),b("ngModelChange",function(m){return g(c),S(o.size,m)||(o.size=m),v(m)}),t(),i(23,"po-textarea",20),b("ngModelChange",function(m){return g(c),S(o.advancedFilters,m)||(o.advancedFilters=m),v(m)}),u("p-change",function(){return o.changeAdvancedFilters()}),t(),i(24,"div",3)(25,"po-button",21),u("p-click",function(){return o.restore()}),t()()()}l&2&&(x("ngModel",o.lookup),s("p-helper",o.helperText)("p-advanced-filters",o.customAdvancedFilters)("p-auto-height",o.properties.includes("autoHeight"))("p-clean",o.properties.includes("clean"))("p-columns",o.columns)("p-disabled",o.properties.includes("disabled"))("p-field-format",o.fieldFormat)("p-field-label",o.fieldLabel)("p-filter-service",o.filterService||o.sampleFilterService)("p-field-value",o.fieldValue)("p-help",o.help)("p-hide-columns-manager",o.properties.includes("hideColumnsManager"))("p-infinite-scroll",o.properties.includes("infiniteScroll"))("p-label",o.label)("p-literals",o.customLiterals)("p-loading",o.properties.includes("loading"))("p-multiple",o.properties.includes("multiple"))("p-no-autocomplete",o.properties.includes("noAutocomplete"))("p-optional",o.properties.includes("optional"))("p-placeholder",o.placeholder)("p-required",o.properties.includes("required"))("p-field-error-message",o.fieldErrorMessage)("p-show-required",o.properties.includes("showRequired"))("p-size",o.size)("p-spacing",o.spacing)("p-text-wrap",o.properties.includes("textWrap"))("p-label-text-wrap",o.properties==null?null:o.properties.includes("labelTextWrap"))("p-virtual-scroll",o.properties.includes("virtualScroll"))("p-error-limit",o.properties==null?null:o.properties.includes("errorLimit"))("p-compact-label",o.properties==null?null:o.properties.includes("compactLabel")),d(4),s("p-value",o.lookup),d(),s("p-value",o.event),d(4),x("ngModel",o.label),d(),x("ngModel",o.columnsName),s("p-options",o.columnsOptions),d(),x("ngModel",o.fieldLabel),s("p-options",o.fieldLabelOptions),d(),x("ngModel",o.fieldValue),s("p-options",o.fieldValueOptions),d(),x("ngModel",o.filterService),d(),x("ngModel",o.fieldErrorMessage),d(),x("ngModel",o.help),d(),x("ngModel",o.helperText),d(),x("ngModel",o.placeholder),d(),x("ngModel",o.literals),d(),x("ngModel",o.formatField),d(),x("ngModel",o.properties),s("p-options",o.propertiesOptions),d(),x("ngModel",o.spacing),s("p-options",o.typeSpacing),d(),x("ngModel",o.size),s("p-options",o.sizeOptions),d(),x("ngModel",o.advancedFilters))},dependencies:[z,D,V,A,$,H,K,O,Ce,X,ye,w,N,Pe,B],encapsulation:2})}return a})();var Je=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup Labs"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-labs/sample-po-lookup-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-lookup
  name="lookup"
  [(ngModel)]="lookup"
  [p-helper]="helperText"
  [p-advanced-filters]="customAdvancedFilters"
  [p-auto-height]="properties.includes('autoHeight')"
  [p-clean]="properties.includes('clean')"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-field-format]="fieldFormat"
  [p-field-label]="fieldLabel"
  [p-filter-service]="filterService || sampleFilterService"
  [p-field-value]="fieldValue"
  [p-help]="help"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-infinite-scroll]="properties.includes('infiniteScroll')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-no-autocomplete]="properties.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-spacing]="spacing"
  [p-text-wrap]="properties.includes('textWrap')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-change)="changeEvent('p-change')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-selected)="changeEvent('p-selected')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-lookup>

<po-divider />

<po-container p-no-border="true" p-no-padding="true">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Model" [p-value]="lookup"> </po-info>

    <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
  </div>
</po-container>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="columnsName"
    [(ngModel)]="columnsName"
    p-columns="3"
    p-label="Columns"
    [p-options]="columnsOptions"
    (p-change)="updateColumns()"
  >
  </po-checkbox-group>

  <po-select
    class="po-md-6 po-lg-12"
    name="fieldLabel"
    [(ngModel)]="fieldLabel"
    p-label="Field Label"
    p-required
    [p-options]="fieldLabelOptions"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="fieldValue"
    [(ngModel)]="fieldValue"
    p-label="Field Value"
    p-required
    [p-options]="fieldValueOptions"
  >
  </po-select>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/people"
    p-label="Filter Service"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: { "modalTitle": "Select a register", "modalPrimaryActionLabel": "Select", "modalPlaceholder": "Search Value" }'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    name="formatField"
    [(ngModel)]="formatField"
    class="po-lg-6"
    p-label="Field Format"
    p-help='Ex.: ["id", "name"]'
    (p-change)="onFieldFormatChange($event)"
  >
  </po-input>

  <po-checkbox-group
    class="po-lg-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-lg-12"
    name="spacing"
    [(ngModel)]="spacing"
    p-columns="4"
    p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    p-label="Spacing"
    [p-options]="typeSpacing"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <po-textarea
    class="po-md-12 po-lg-12"
    name="advancedFilters"
    [(ngModel)]="advancedFilters"
    (p-change)="changeAdvancedFilters()"
    p-help='Ex.: [{"property":"name","divider":"PERSONAL DATA","required":true,"gridColumns":6},{"property":"id","optional":true,"gridColumns":6}]'
    p-label="Advanced Filters"
    p-rows="4"
  >
  </po-textarea>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-labs/sample-po-lookup-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoLookupColumn,
  PoLookupFilter,
  PoLookupLiterals,
  PoDynamicFormField,
  PoSelectOption,
  PoTableColumnSpacing,
  PoRadioGroupOption
} from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-labs',
  templateUrl: './sample-po-lookup-labs.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupLabsComponent implements OnInit {
  sampleFilterService = inject(SamplePoLookupService);

  helperText: string;
  columns: Array<PoLookupColumn>;
  columnsName: Array<string>;
  customLiterals: PoLookupLiterals;
  event: string;
  fieldFormat: Array<string>;
  formatField: string;
  fieldLabel: string;
  fieldValue: string;
  filterService: PoLookupFilter | string;
  help: string;
  label: string;
  literals: string;
  lookup: any;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  advancedFilters: string;
  customAdvancedFilters: Array<PoDynamicFormField>;
  size: string;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' }
  ];

  public readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'label', label: 'Label' },
    ...this.columnsOptions
  ];

  public readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'infiniteScroll', label: 'Infinite Scroll' },
    { value: 'multiple', label: 'Multiple' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'hideColumnsManager', label: 'Hide Columns Manager' },
    { value: 'textWrap', label: 'Text Wrap' },
    { value: 'virtualScroll', label: 'Virtual Sroll' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  private readonly columnsDefinition = {
    id: <PoLookupColumn>{ property: 'id', label: 'Id' },
    name: <PoLookupColumn>{ property: 'name', label: 'Name' },
    email: <PoLookupColumn>{ property: 'email', label: 'Email' }
  };

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit(): void {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onFieldFormatChange(event) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  changeAdvancedFilters() {
    try {
      this.customAdvancedFilters = JSON.parse(this.advancedFilters);
    } catch {
      this.customAdvancedFilters = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name'];
    this.customLiterals = undefined;
    this.updateColumns();

    this.fieldLabel = 'name';
    this.fieldValue = 'id';
    this.fieldFormat = undefined;
    this.formatField = undefined;
    this.event = undefined;
    this.filterService = undefined;
    this.label = undefined;
    this.literals = undefined;
    this.help = undefined;
    this.lookup = undefined;
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.customAdvancedFilters = [];
    this.size = 'medium';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-labs"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),s("ngClass",F(4,Je,o.hideSampleCodeTabs)))},dependencies:[q,y,k,C,Me],encapsulation:2})}return a})();var $e=()=>({modalTitle:"Heroes available for mission"}),Te=(()=>{class a{service=h(T);notification=h(Z);hero;vehicle;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];advancedFilters=[{property:"nickname",divider:"Hero Informations",optional:!0,gridColumns:6,label:"Hero"},{property:"name",optional:!0,gridColumns:6}];fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){this.hero.length%2===0?this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle?"with vehicle: "+this.vehicle:""}.`):this.notification.error(`Choose another hero because ${this.hero} is in other mission.`),this.hero=void 0,this.vehicle=void 0}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-hero"]],standalone:!1,features:[_([T])],decls:10,vars:11,consts:[["f","ngForm"],[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],["name","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-columns","p-field-format","p-filter-service","p-hide-columns-manager","p-advanced-filters","p-literals"],["name","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){if(l&1){let c=Y();i(0,"div",1),n(1,"po-info",2),t(),n(2,"po-divider"),i(3,"form",null,0)(5,"div",1)(6,"po-lookup",3),b("ngModelChange",function(m){return g(c),S(o.hero,m)||(o.hero=m),v(m)}),t(),i(7,"po-select",4),b("ngModelChange",function(m){return g(c),S(o.vehicle,m)||(o.vehicle=m),v(m)}),t()(),i(8,"div",1)(9,"po-button",5),u("p-click",function(){return o.startMission()}),t()()()}if(l&2){let c=ue(4);d(6),x("ngModel",o.hero),s("p-columns",o.columns)("p-field-format",o.fieldFormat)("p-filter-service",o.service)("p-hide-columns-manager",!0)("p-advanced-filters",o.advancedFilters)("p-literals",U(10,$e)),d(),x("ngModel",o.vehicle),s("p-options",o.vehicles),d(2),s("p-disabled",c.form.invalid||c.form.pending)}},dependencies:[z,D,V,A,$,H,O,w,N,B],encapsulation:2})}return a})();var Xe=a=>({"docs-sample-code-tabs":a}),_e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-hero-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero/sample-po-lookup-hero.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      [(ngModel)]="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="fieldFormat"
      [p-filter-service]="service"
      [p-hide-columns-manager]="true"
      [p-advanced-filters]="advancedFilters"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      [(ngModel)]="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="f.form.invalid || f.form.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero/sample-po-lookup-hero.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService, PoDynamicFormField } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero',
  templateUrl: './sample-po-lookup-hero.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroComponent {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);

  hero: string;
  vehicle: string;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  advancedFilters: Array<PoDynamicFormField> = [
    { property: 'nickname', divider: 'Hero Informations', optional: true, gridColumns: 6, label: 'Hero' },
    { property: 'name', optional: true, gridColumns: 6 }
  ];

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${this.hero} \${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${this.hero} is in other mission.\`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),s("ngClass",F(4,Xe,o.hideSampleCodeTabs)))},dependencies:[q,y,k,C,Te],encapsulation:2})}return a})();var et=()=>["nickname","label"],tt=()=>({modalTitle:"Heroes available for mission"}),Ae=(()=>{class a{service=h(T);notification=h(Z);formBuilder=h(ve);formMission;columns=[{property:"nickname",label:"Hero"},{property:"name",label:"Name"}];vehicles=[{label:"Airplane",value:"airplane"},{label:"Boat",value:"boat"},{label:"Car",value:"car"},{label:"Helicopter",value:"helicopter"},{label:"Motorcycle",value:"motorcycle"},{label:"Rocket",value:"rocket"},{label:"Spaceship",value:"spaceship"},{label:"Submarine",value:"submarine"},{label:"Truck",value:"truck"}];ngOnInit(){this.formMission=this.formBuilder.group({hero:[null,ae.required],vehicle:[null,ae.required]})}fieldFormat(r){return`${r.nickname} - ${r.label}`}startMission(){let r=this.formMission.get("hero").value,l=this.formMission.get("vehicle").value;r.length%2===0?this.notification.success(`Mission started with hero ${r} ${l?"with vehicle: "+l:""}.`):this.notification.error(`Choose another hero because ${r} is in other mission.`),this.formMission.reset()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-hero-reactive-form"]],standalone:!1,features:[_([T])],decls:9,vars:9,consts:[[1,"po-row"],["p-label","New mission found","p-value","Objective: Stop an asteroid collision on Earth",1,"po-lg-6"],[3,"formGroup"],["name","hero","formControlName","hero","p-field-label","label","p-field-value","label","p-help","Select hero for mission","p-label","Hero","p-required","",1,"po-md-6",3,"p-columns","p-field-format","p-filter-service","p-literals"],["name","vehicle","formControlName","vehicle","p-help","Select a vehicle for the hero","p-label","Vehicle","p-placeholder","None",1,"po-md-6",3,"p-options"],["p-label","Start Mission",1,"po-md-6",3,"p-click","p-disabled"]],template:function(l,o){l&1&&(i(0,"div",0),n(1,"po-info",1),t(),n(2,"po-divider"),i(3,"form",2)(4,"div",0),n(5,"po-lookup",3)(6,"po-select",4),t(),i(7,"div",0)(8,"po-button",5),u("p-click",function(){return o.startMission()}),t()()()),l&2&&(d(3),s("formGroup",o.formMission),d(2),s("p-columns",o.columns)("p-field-format",U(7,et))("p-filter-service",o.service)("p-literals",U(8,tt)),d(),s("p-options",o.vehicles),d(2),s("p-disabled",o.formMission.invalid||o.formMission.pending))},dependencies:[z,D,V,ge,be,H,O,w,N,B],encapsulation:2})}return a})();var nt=a=>({"docs-sample-code-tabs":a}),Oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-hero-reactive-form-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Hero Reactive Form"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-info class="po-lg-6" p-label="New mission found" p-value="Objective: Stop an asteroid collision on Earth">
  </po-info>
</div>

<po-divider />

<form [formGroup]="formMission">
  <div class="po-row">
    <po-lookup
      class="po-md-6"
      name="hero"
      formControlName="hero"
      p-field-label="label"
      p-field-value="label"
      p-help="Select hero for mission"
      p-label="Hero"
      p-required
      [p-columns]="columns"
      [p-field-format]="['nickname', 'label']"
      [p-filter-service]="service"
      [p-literals]="{ 'modalTitle': 'Heroes available for mission' }"
    >
    </po-lookup>

    <po-select
      class="po-md-6"
      name="vehicle"
      formControlName="vehicle"
      p-help="Select a vehicle for the hero"
      p-label="Vehicle"
      p-placeholder="None"
      [p-options]="vehicles"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6"
      p-label="Start Mission"
      [p-disabled]="formMission.invalid || formMission.pending"
      (p-click)="startMission()"
    >
    </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-hero-reactive-form/sample-po-lookup-hero-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoLookupColumn, PoSelectOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

import { SamplePoLookupService } from '../sample-po-lookup.service';

@Component({
  selector: 'sample-po-lookup-hero-reactive-form',
  templateUrl: './sample-po-lookup-hero-reactive-form.component.html',
  providers: [SamplePoLookupService],
  standalone: false
})
export class SamplePoLookupHeroReactiveFormComponent implements OnInit {
  service = inject(SamplePoLookupService);
  notification = inject(PoNotificationService);
  private formBuilder = inject(UntypedFormBuilder);

  formMission: UntypedFormGroup;

  public readonly columns: Array<PoLookupColumn> = [
    { property: 'nickname', label: 'Hero' },
    { property: 'name', label: 'Name' }
  ];

  public readonly vehicles: Array<PoSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return \`\${value.nickname} - \${value.label}\`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(
        \`Mission started with hero \${heroName} \${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.\`
      );
    } else {
      this.notification.error(\`Choose another hero because \${heroName} is in other mission.\`);
    }

    this.formMission.reset();
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupService implements PoLookupFilter {
  private httpClient = inject(HttpClient);

  private url = 'https://po-sample-api.onrender.com/v1/heroes';

  getFilteredItems(filteredParams: PoLookupFilteredItemsParams): Observable<any> {
    const { filterParams, advancedFilters, ...restFilteredItemsParams } = filteredParams;
    const params = { ...restFilteredItemsParams, ...filterParams, ...advancedFilters };

    return this.httpClient.get(this.url, { params });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(\`\${this.url}/\${value}\`);
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-hero-reactive-form"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),s("ngClass",F(4,nt,o.hideSampleCodeTabs)))},dependencies:[q,y,k,C,Ae],encapsulation:2})}return a})();var re=(()=>{class a{http=h(I);baseUrl="https://swapi.dev/api";filmsUrl="https://swapi.dev/api/films/";getFilms(){return this.http.get(this.filmsUrl)}getFilteredItems({filter:r,page:l,filterParams:o}){let c={page:l.toString()};return r&&(c.search=r),this.http.get(`${this.baseUrl}/${o}`,{params:c}).pipe(ie(p=>({items:p.results,hasNext:!!p.next})))}getObjectByValue(r,l){return this.http.get(`${this.baseUrl}/${l}/?search=${r}`).pipe(ie(o=>o.results[0]))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function at(a,Et){if(a&1&&(i(0,"div",0),n(1,"po-table",3),t()),a&2){let r=ce();d(),s("p-columns",r.filmColumns)("p-items",r.filmItemsFiltered)("p-sort",!0)("p-hide-table-search",!1)}}var je=(()=>{class a{filterService=h(re);entity;filmItemsFiltered;filterParams="people";characterColumns=[{property:"name",label:"Name"},{property:"gender",label:"Gender"},{property:"height",label:"Height"},{property:"mass",label:"Mass"}];entities=[{label:"Character",value:"people"},{label:"Planet",value:"planets"},{label:"Starship",value:"starships"}];filmColumns=[{property:"episode_id",label:"Episode id"},{property:"title",label:"Title"},{property:"director",label:"Director"},{property:"producer",label:"Producer"},{property:"release_date",label:"Release date",type:"date"}];planetsColumns=[{property:"name",label:"Name"},{property:"diameter",label:"Diameter"},{property:"population",label:"Population"},{property:"climate",label:"Climate"}];starshipsColumns=[{property:"name",label:"Name"},{property:"passengers",label:"Passengers"},{property:"max_atmosphering_speed",label:"Max Speed"},{property:"consumables",label:"Consumables"}];filmItems;get entityColumns(){return this.getEntityColumns(this.filterParams)}get entityLabel(){return this.getLabelOfEntity(this.filterParams)}ngOnInit(){this.filterService.getFilms().subscribe(r=>{this.filmItems=r.results})}onSelected(r){this.filterService.getObjectByValue(r.name,this.filterParams).subscribe(l=>{this.filmItemsFiltered=this.filmItems.filter(o=>l?.films.includes(o.url))},l=>console.error(l))}getEntityColumns(r){switch(r){case"people":return this.characterColumns;case"planets":return this.planetsColumns;case"starships":return this.starshipsColumns}}getLabelOfEntity(r){switch(r){case"people":return"character";case"planets":return"planet";case"starships":return"starship"}}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-sw-films"]],standalone:!1,features:[_([re])],decls:7,vars:14,consts:[[1,"po-row"],["name","filterParams","p-label","Choose the entity of SW to search",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","entity","p-field-label","name","p-field-value","name",1,"po-md-12",3,"ngModelChange","p-selected","ngModel","p-help","p-label","p-columns","p-filter-params","p-filter-service","p-infinite-scroll"],[1,"po-sm-12",3,"p-columns","p-items","p-sort","p-hide-table-search"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-radio-group",1),b("ngModelChange",function(p){return S(o.filterParams,p)||(o.filterParams=p),p}),t()(),n(2,"po-divider"),i(3,"div",0)(4,"po-lookup",2),Ee(5,"titlecase"),b("ngModelChange",function(p){return S(o.entity,p)||(o.entity=p),p}),u("p-selected",function(p){return o.onSelected(p)}),t()(),pe(6,at,2,4,"div",0)),l&2&&(d(),x("ngModel",o.filterParams),s("p-options",o.entities),d(3),s("p-help",oe("Select a ",o.entityLabel," to see the list of movies in which it participated"))("p-label",oe("",xe(5,12,o.entityLabel)," of Star Wars")),x("ngModel",o.entity),s("p-columns",o.entityColumns)("p-filter-params",o.filterParams)("p-filter-service",o.filterService)("p-infinite-scroll",!0),d(2),se(o.filmItemsFiltered&&o.entity?6:-1))},dependencies:[D,A,O,X,w,ee,Se],encapsulation:2})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-sw-films-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Star Wars films"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-radio-group
    class="po-md-12"
    name="filterParams"
    [(ngModel)]="filterParams"
    p-label="Choose the entity of SW to search"
    [p-options]="entities"
  >
  </po-radio-group>
</div>

<po-divider />

<div class="po-row">
  <po-lookup
    class="po-md-12"
    name="entity"
    [(ngModel)]="entity"
    p-field-label="name"
    p-field-value="name"
    p-help="Select a { { entityLabel }} to see the list of movies in which it participated"
    p-label="{ { entityLabel | titlecase }} of Star Wars"
    [p-columns]="entityColumns"
    [p-filter-params]="filterParams"
    [p-filter-service]="filterService"
    [p-infinite-scroll]="true"
    (p-selected)="onSelected($event)"
  >
  </po-lookup>
</div>

@if (filmItemsFiltered && entity) {
  <div class="po-row">
    <po-table
      class="po-sm-12"
      [p-columns]="filmColumns"
      [p-items]="filmItemsFiltered"
      [p-sort]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </div>
}
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
import { SamplePoLookupSwFilmsService } from './sample-po-lookup-sw-films.service';

@Component({
  selector: 'sample-po-lookup-sw-films',
  templateUrl: './sample-po-lookup-sw-films.component.html',
  providers: [SamplePoLookupSwFilmsService],
  standalone: false
})
export class SamplePoLookupSwFilmsComponent implements OnInit {
  filterService = inject(SamplePoLookupSwFilmsService);

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  readonly characterColumns = [
    { property: 'name', label: 'Name' },
    { property: 'gender', label: 'Gender' },
    { property: 'height', label: 'Height' },
    { property: 'mass', label: 'Mass' }
  ];

  readonly entities: Array<PoRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { property: 'episode_id', label: 'Episode id' },
    { property: 'title', label: 'Title' },
    { property: 'director', label: 'Director' },
    { property: 'producer', label: 'Producer' },
    { property: 'release_date', label: 'Release date', type: 'date' }
  ];

  readonly planetsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'diameter', label: 'Diameter' },
    { property: 'population', label: 'Population' },
    { property: 'climate', label: 'Climate' }
  ];

  readonly starshipsColumns = [
    { property: 'name', label: 'Name' },
    { property: 'passengers', label: 'Passengers' },
    { property: 'max_atmosphering_speed', label: 'Max Speed' },
    { property: 'consumables', label: 'Consumables' }
  ];

  private filmItems;

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filterService.getObjectByValue(entity.name, this.filterParams).subscribe(
      result => {
        this.filmItemsFiltered = this.filmItems.filter(film => result?.films.includes(film.url));
      },
      err => console.error(err)
    );
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-sw-films/sample-po-lookup-sw-films.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { PoLookupFilter, PoLookupResponseApi, PoLookupFilteredItemsParams } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupSwFilmsService implements PoLookupFilter {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api';
  private filmsUrl = 'https://swapi.dev/api/films/';

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredItems({ filter, page, filterParams }: PoLookupFilteredItemsParams): Observable<PoLookupResponseApi> {
    const params = { page: page.toString() };

    if (filter) {
      params['search'] = filter;
    }

    return this.http.get(\`\${this.baseUrl}/\${filterParams}\`, { params }).pipe(
      map((response: { results: Array<any>; next: string }) => ({
        items: response.results,
        hasNext: !!response.next
      }))
    );
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http
      .get(\`\${this.baseUrl}/\${filterParams}/?search=\${value}\`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-sw-films"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),s("ngClass",F(4,rt,o.hideSampleCodeTabs)))},dependencies:[q,y,k,C,je],encapsulation:2})}return a})();var Ve=(()=>{class a{http=h(I);getHeroes(r){let l=r?.length?r.toString():r;return this.http.get(`https://po-sample-api.onrender.com/v1/heroes?value=${l}`).pipe(de("items"))}static \u0275fac=function(l){return new(l||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ze=(()=>{class a{service=h(Ve);loading=!1;heroes;multiLookup=[1495831666871,1405833068599];columns=[{property:"value",label:"id"},{property:"label",label:"Name"}];changeOptions(r){this.loading=!0,this.service.getHeroes(r).subscribe(l=>{this.heroes=l},l=>console.error(l),()=>this.loading=!1)}openLink(r){window.open(`http://google.com/search?q=${r}`,"_blank")}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-multiple"]],standalone:!1,decls:4,vars:8,consts:[[1,"po-row"],["name","lookup","p-field-label","label","p-field-value","value","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-multiple"],[1,"po-md-6","po-mt-4"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-loading"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"po-lookup",1),b("ngModelChange",function(p){return S(o.multiLookup,p)||(o.multiLookup=p),p}),u("p-change",function(p){return o.changeOptions(p)}),t(),i(2,"po-container",2),n(3,"po-table",3),t()()),l&2&&(d(),x("ngModel",o.multiLookup),s("p-multiple",!0),d(2),s("p-columns",o.columns)("p-items",o.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-loading",o.loading))},dependencies:[D,A,K,w,ee],encapsulation:2})}return a})();var pt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-multiple-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,o){l&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Lookup - Multiple"),t(),i(4,"a",2),u("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-lookup
    class="po-md-6"
    name="lookup"
    [(ngModel)]="multiLookup"
    p-field-label="label"
    p-field-value="value"
    p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Search a Hero"
    [p-multiple]="true"
    (p-change)="changeOptions($event)"
  ></po-lookup>
  <po-container class="po-md-6 po-mt-4">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-loading]="loading"
    ></po-table>
  </po-container>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-lookup-multiple/sample-po-lookup-multiple.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoLookupMultipleService } from './sample-po-lookup-multiple.service';

@Component({
  selector: 'sample-po-lookup-multiple',
  templateUrl: './sample-po-lookup-multiple.component.html',
  styles: [],
  standalone: false
})
export class SamplePoLookupMultipleComponent {
  service = inject(SamplePoLookupMultipleService);

  loading: boolean = false;
  heroes: Array<any>;
  multiLookup: Array<any> = [1495831666871, 1405833068599];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name'
    }
  ];

  changeOptions(event): void {
    this.loading = true;
    this.service.getHeroes(event).subscribe(
      result => {
        this.heroes = result;
      },
      err => console.error(err),
      () => (this.loading = false)
    );
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-lookup-multiple/sample-po-lookup-multiple.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoLookupMultipleService {
  http = inject(HttpClient);

  getHeroes(data): Observable<any> {
    const values = data?.length ? data.toString() : data;
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes?value=\${values}\`).pipe(pluck('items'));
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-lookup-multiple"),t(),n(27,"hr")),l&2&&(d(5),P("po-icon "+o.sampleCodeButtonIcon),d(),L(" ",o.sampleCodeButtonLabel),d(),s("ngClass",F(4,pt,o.hideSampleCodeTabs)))},dependencies:[q,y,k,C,ze],encapsulation:2})}return a})();var Ne=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-lookup-doc"]],standalone:!1,decls:6165,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://angular.io/guide/form-validation#creating-asynchronous-validators"],["href","https://po-ui.io/guides/api"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","((value)","=>","string)"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","Array<object>"]],template:function(l,o){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoLookupComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`Componente utilizado para abrir uma janela de busca com uma tabela que lista dados de um servi\xE7o. Nesta janela \xE9 poss\xEDvel buscar e
selecionar um ou mais registros que ser\xE3o enviados para o campo. O `),i(24,"code"),e(25,"po-lookup"),t(),e(26," permite que o usu\xE1rio digite um valor e pressione a tecla "),i(27,"em"),e(28,"TAB"),t(),e(29,` para
buscar um registro.`),t(),i(30,"blockquote")(31,"p"),e(32,`Caso o campo seja iniciado ou preenchido com um valor inexistente na busca, o mesmo ser\xE1 limpado.
No segundo caso ocorrer\xE1 ap\xF3s este perder o foco; ambos os casos o campo ficar\xE1 inv\xE1lido quando requerido.`),t()(),i(33,"blockquote")(34,"p"),e(35,`Enquanto o componente realiza a requisi\xE7\xE3o ao servidor, o componente ficar\xE1 desabilitado e com o status interno do
`),i(36,"a",6),e(37,"modelo"),t(),e(38," como "),i(39,"code"),e(40,"pending"),t(),e(41,"."),t()(),i(42,"p"),e(43,`Este componente n\xE3o \xE9 recomendado quando a busca dos dados possuir poucas informa\xE7\xF5es, para isso utilize outros componentes como o
`),i(44,"code"),e(45,"po-select"),t(),e(46," ou o "),i(47,"code"),e(48,"po-combo"),t(),e(49,`. Quando existe muitos dados o po-lookup por padr\xE3o traz apenas 10 itens na tabela e os demais s\xE3o carregados por demanda atrav\xE9s do
bot\xE3o 'Carregar mais resultados'. Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(50,"a",7),e(51,"Guia de implementa\xE7\xE3o das APIs TOTVS"),t(),e(52,"."),t(),i(53,"p"),e(54,"Importante:"),t(),i(55,"ul")(56,"li"),e(57,`Caso o po-lookup contenha o [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o ser\xE1 necess\xE1rio informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".`),i(58,"pre")(59,"code"),e(60,`<po-lookup
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-lookup>
`),t()()()(),i(61,"h4"),e(62,"Tokens customiz\xE1veis"),t(),i(63,"p"),e(64,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(65,"blockquote")(66,"p"),e(67,"Para maiores informa\xE7\xF5es, acesse o guia "),i(68,"a",8),e(69,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(70,"."),t()(),i(71,"table")(72,"thead")(73,"tr")(74,"th"),e(75,"Propriedade"),t(),i(76,"th"),e(77,"Descri\xE7\xE3o"),t(),i(78,"th"),e(79,"Valor Padr\xE3o"),t()()(),i(80,"tbody")(81,"tr")(82,"td")(83,"strong"),e(84,"Default Values"),t()(),n(85,"td")(86,"td"),t(),i(87,"tr")(88,"td")(89,"code"),e(90,"--font-family"),t()(),i(91,"td"),e(92,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(93,"td")(94,"code"),e(95,"var(--font-family-theme)"),t()()(),i(96,"tr")(97,"td")(98,"code"),e(99,"--font-size"),t()(),i(100,"td"),e(101,"Tamanho da fonte"),t(),i(102,"td")(103,"code"),e(104,"var(--font-size-default)"),t()()(),i(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-placeholder"),t()(),i(109,"td"),e(110,"Cor do texto no placeholder"),t(),i(111,"td")(112,"code"),e(113,"var(--color-neutral-light-30)"),t()()(),i(114,"tr")(115,"td")(116,"code"),e(117,"--color"),t()(),i(118,"td"),e(119,"Cor principal do lookup"),t(),i(120,"td")(121,"code"),e(122,"var(--color-neutral-dark-70)"),t()()(),i(123,"tr")(124,"td")(125,"code"),e(126,"--border-radius"),t()(),i(127,"td"),e(128,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),i(129,"td")(130,"code"),e(131,"var(--border-radius-md)"),t()()(),i(132,"tr")(133,"td")(134,"code"),e(135,"--background"),t()(),i(136,"td"),e(137,"Cor de background"),t(),i(138,"td")(139,"code"),e(140,"var(--color-neutral-light-05)"),t()()(),i(141,"tr")(142,"td")(143,"code"),e(144,"--text-color"),t()(),i(145,"td"),e(146,"Cor do texto"),t(),i(147,"td")(148,"code"),e(149,"var(--color-neutral-dark-90)"),t()()(),i(150,"tr")(151,"td")(152,"code"),e(153,"--color-clear"),t()(),i(154,"td"),e(155,"Cor principal do icone clear"),t(),i(156,"td")(157,"code"),e(158,"var(--color-action-default)"),t()()(),i(159,"tr")(160,"td")(161,"strong"),e(162,"Icon"),t()(),n(163,"td")(164,"td"),t(),i(165,"tr")(166,"td")(167,"code"),e(168,"--color-icon"),t()(),i(169,"td"),e(170,"Cor principal do icone pesquisar"),t(),i(171,"td")(172,"code"),e(173,"var(--color-action-default)"),t()()(),i(174,"tr")(175,"td")(176,"strong"),e(177,"Hover"),t()(),n(178,"td")(179,"td"),t(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-hover"),t()(),i(184,"td"),e(185,"Cor principal no estado hover"),t(),i(186,"td")(187,"code"),e(188,"var(--color-brand-01-dark)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--background-hover"),t()(),i(193,"td"),e(194,"Cor de background no estado hover"),t(),i(195,"td")(196,"code"),e(197,"var(--color-brand-01-lightest)"),t()()(),i(198,"tr")(199,"td")(200,"strong"),e(201,"Focused"),t()(),n(202,"td")(203,"td"),t(),i(204,"tr")(205,"td")(206,"code"),e(207,"--color-focused"),t()(),i(208,"td"),e(209,"Cor principal no estado de focus"),t(),i(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),i(213,"tr")(214,"td")(215,"code"),e(216,"--outline-color-focused"),t()(),i(217,"td"),e(218,"Cor do outline do estado de focus"),t(),i(219,"td")(220,"code"),e(221,"var(--color-action-focus)"),t()()(),i(222,"tr")(223,"td")(224,"strong"),e(225,"Disabled"),t()(),n(226,"td")(227,"td"),t(),i(228,"tr")(229,"td")(230,"code"),e(231,"--color-disabled"),t()(),i(232,"td"),e(233,"Cor principal no estado disabled"),t(),i(234,"td")(235,"code"),e(236,"var(--color-action-disabled)"),t()()(),i(237,"tr")(238,"td")(239,"code"),e(240,"--background-disabled"),t()(),i(241,"td"),e(242,"Cor de background no estado disabled"),t(),i(243,"td")(244,"code"),e(245,"var(--color-neutral-light-20)"),t()()(),i(246,"tr")(247,"td")(248,"code"),e(249,"--text-color-disabled"),t()(),i(250,"td"),e(251,"Cor do texto quando campo est\xE1 desabilitado"),t(),i(252,"td")(253,"code"),e(254,"var(--color-action-disabled)"),t()()(),i(255,"tr")(256,"td")(257,"strong"),e(258,"Error"),t()(),n(259,"td")(260,"td"),t(),i(261,"tr")(262,"td")(263,"code"),e(264,"--color-error"),t()(),i(265,"td"),e(266,"Cor de background no estado de requerido"),t(),i(267,"td")(268,"code"),e(269,"var(--color-feedback-negative-base)"),t()()()()()(),i(270,"div",9)(271,"h4",10),e(272,"Seletor"),t(),i(273,"pre",11),e(274,`<po-lookup
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-advanced-filters="Array<PoLookupAdvancedFilter>"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-change)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    p-clean="boolean"
    (p-restore-column-manager)="EventEmitter"
    p-columns="Array<PoLookupColumn>"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-format="((value) => string) | Array<string>"
    p-field-label="string"
    p-field-value="string"
    p-filter-params="any"
    p-filter-service="string | PoLookupFilter"
    p-help="string"
    p-hide-columns-manager="boolean"
    p-infinite-scroll="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoLookupLiterals"
    p-loading="boolean"
    p-multiple="boolean"
    name="string"
    p-no-autocomplete="boolean"
    (p-error)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    (p-selected)="EventEmitter"
    p-show-required="boolean"
    p-size="string"
    p-spacing="string"
    p-text-wrap="boolean"
    p-virtual-scroll="boolean" >
</po-lookup>
`),t()(),i(275,"h4",12),e(276,"Propriedades"),t(),i(277,"table",13)(278,"tr",14)(279,"th",15),e(280,"Nome"),t(),i(281,"th",15),e(282,"Tipo"),t(),i(283,"th",15),e(284,"Padr\xE3o"),t(),i(285,"th",15),e(286,"Descri\xE7\xE3o"),t()(),i(287,"tr",16)(288,"td",17)(289,"div",18)(290,"span",19),e(291," (p-additional-help)"),n(292,"br"),t()(),i(293,"div",20),e(294,"Deprecated"),t()(),i(295,"td",21)(296,"code",22),e(297,"EventEmitter"),t()(),i(298,"td",23),e(299,"-"),t(),i(300,"td",24)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),i(304,"p"),e(305,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(306,"blockquote")(307,"p"),e(308,"Essa propriedade est\xE1 "),i(309,"strong"),e(310,"depreciada"),t(),e(311," e ser\xE1 removida na vers\xE3o "),i(312,"code"),e(313,"23.x.x"),t(),e(314,". Recomendamos utilizar a propriedade "),i(315,"code"),e(316,"p-helper"),t(),e(317," que oferece mais recursos e flexibilidade."),t()()()(),i(318,"tr",16)(319,"td",17)(320,"div",25)(321,"span",26),e(322," p-additional-help-tooltip"),n(323,"br"),t()(),i(324,"div",20),e(325,"Deprecated"),t()(),i(326,"td",21)(327,"code",27),e(328,"string"),t()(),i(329,"td",23),e(330,"-"),t(),i(331,"td",24)(332,"em")(333,"strong"),e(334,"(opcional)"),t()(),i(335,"p"),e(336,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(337,"code"),e(338,"po-helper"),t(),e(339,`.
`),i(340,"strong"),e(341,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(342,"blockquote")(343,"p"),e(344,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(345,"blockquote")(346,"p"),e(347,"Essa propriedade est\xE1 "),i(348,"strong"),e(349,"depreciada"),t(),e(350," e ser\xE1 removida na vers\xE3o "),i(351,"code"),e(352,"23.x.x"),t(),e(353,". Recomendamos utilizar a propriedade "),i(354,"code"),e(355,"p-helper"),t(),e(356," que oferece mais recursos e flexibilidade."),t()()()(),i(357,"tr",16)(358,"td",17)(359,"div",25)(360,"span",26),e(361," p-advanced-filters"),n(362,"br"),t()()(),i(363,"td",21)(364,"code",28),e(365,"Array<PoLookupAdvancedFilter>"),t()(),i(366,"td",23),e(367,"-"),t(),i(368,"td",24)(369,"em")(370,"strong"),e(371,"(opcional)"),t()(),i(372,"p"),e(373,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(374,"blockquote")(375,"p"),e(376,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(377,"p"),e(378,"Exemplo de URL com busca avan\xE7ada:"),t(),i(379,"pre")(380,"code"),e(381,`url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro
`),t()(),i(382,"p"),e(383,`Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula.
Exemplo:`),t(),i(384,"pre")(385,"code"),e(386,`url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan
`),t()()()(),i(387,"tr",16)(388,"td",17)(389,"div",25)(390,"span",26),e(391," p-append-in-body"),n(392,"br"),t()()(),i(393,"td",21)(394,"code",29),e(395,"boolean"),t()(),i(396,"td",23)(397,"p")(398,"code"),e(399,"false"),t()()(),i(400,"td",24)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),i(404,"p"),e(405,"Define que o popover ("),i(406,"code"),e(407,"p-helper"),t(),e(408," e/ou "),i(409,"code"),e(410,"p-error-limit"),t(),e(411,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),i(412,"blockquote")(413,"p"),e(414,"Quando utilizado com "),i(415,"code"),e(416,"p-helper"),t(),e(417,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(418,"tr",16)(419,"td",17)(420,"div",25)(421,"span",26),e(422," p-auto-focus"),n(423,"br"),t()()(),i(424,"td",21)(425,"code",29),e(426,"boolean"),t()(),i(427,"td",23)(428,"p")(429,"code"),e(430,"false"),t()()(),i(431,"td",24)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),i(435,"p"),e(436,"Aplica foco no elemento ao ser iniciado."),t(),i(437,"blockquote")(438,"p"),e(439,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(440,"tr",16)(441,"td",17)(442,"div",25)(443,"span",26),e(444," p-auto-height"),n(445,"br"),t()()(),i(446,"td",21)(447,"code",29),e(448,"boolean"),t()(),i(449,"td",23)(450,"p")(451,"code"),e(452,"false"),t()()(),i(453,"td",24)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),i(457,"p"),e(458,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t()()(),i(459,"tr",16)(460,"td",17)(461,"div",18)(462,"span",19),e(463," (p-change)"),n(464,"br"),t()()(),i(465,"td",21)(466,"code",22),e(467,"EventEmitter"),t()(),i(468,"td",23),e(469,"-"),t(),i(470,"td",24)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),i(474,"p"),e(475,"Evento que ser\xE1 disparado ao alterar o model. Por par\xE2metro ser\xE1 passado o novo valor."),t()()(),i(476,"tr",16)(477,"td",17)(478,"div",18)(479,"span",19),e(480," (p-change-visible-columns)"),n(481,"br"),t()()(),i(482,"td",21)(483,"code",22),e(484,"EventEmitter"),t()(),i(485,"td",23),e(486,"-"),t(),i(487,"td",24)(488,"em")(489,"strong"),e(490,"(opcional)"),t()(),i(491,"p"),e(492,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(493,"p"),e(494,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(495,"tr",16)(496,"td",17)(497,"div",25)(498,"span",26),e(499," p-clean"),n(500,"br"),t()()(),i(501,"td",21)(502,"code",29),e(503,"boolean"),t()(),i(504,"td",23),e(505,"-"),t(),i(506,"td",24)(507,"p"),e(508,"Exibe um \xEDcone que permite limpar o campo."),t()()(),i(509,"tr",16)(510,"td",17)(511,"div",18)(512,"span",19),e(513," (p-restore-column-manager)"),n(514,"br"),t()()(),i(515,"td",21)(516,"code",22),e(517,"EventEmitter"),t()(),i(518,"td",23),e(519,"-"),t(),i(520,"td",24)(521,"em")(522,"strong"),e(523,"(opcional)"),t()(),i(524,"p"),e(525,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(526,"p"),e(527,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t()()(),i(528,"tr",16)(529,"td",17)(530,"div",25)(531,"span",26),e(532," p-columns"),n(533,"br"),t()()(),i(534,"td",21)(535,"code",30),e(536,"Array<PoLookupColumn>"),t()(),i(537,"td",23),e(538,"-"),t(),i(539,"td",24)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),i(543,"p"),e(544,`Lista das colunas da tabela.
Essa propriedade deve receber um array de objetos que implementam a interface PoLookupColumn.`),t()()(),i(545,"tr",16)(546,"td",17)(547,"div",25)(548,"span",26),e(549," p-compact-label"),n(550,"br"),t()()(),i(551,"td",21)(552,"code",29),e(553,"boolean"),t()(),i(554,"td",23)(555,"p")(556,"code"),e(557,"false"),t()()(),i(558,"td",24)(559,"em")(560,"strong"),e(561,"(opcional)"),t()(),i(562,"p"),e(563,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(564,"p"),e(565,"Quando habilitado ("),i(566,"code"),e(567,"true"),t(),e(568,"), o modo compacto afeta o conjunto composto por:"),t(),i(569,"ul")(570,"li")(571,"code"),e(572,"po-label"),t()(),i(573,"li")(574,"code"),e(575,"p-requirement (showRequired)"),t()(),i(576,"li")(577,"code"),e(578,"po-helper"),t()()(),i(579,"p"),e(580,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(581,"p"),e(582,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(583,"ul")(584,"li")(585,"code"),e(586,"--field-container-title-justify"),t()(),i(587,"li")(588,"code"),e(589,"--field-container-title-flex"),t()()(),i(590,"p"),e(591,"Exemplo:"),t(),i(592,"pre")(593,"code"),e(594,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(595,"p"),e(596,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(597,"tr",16)(598,"td",17)(599,"div",25)(600,"span",26),e(601," p-disabled"),n(602,"br"),t()()(),i(603,"td",21)(604,"code",29),e(605,"boolean"),t()(),i(606,"td",23)(607,"p"),e(608,"false"),t()(),i(609,"td",24)(610,"em")(611,"strong"),e(612,"(opcional)"),t()(),i(613,"p"),e(614,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(615,"tr",16)(616,"td",17)(617,"div",25)(618,"span",26),e(619," p-error-limit"),n(620,"br"),t()()(),i(621,"td",21)(622,"code",29),e(623,"boolean"),t()(),i(624,"td",23)(625,"p")(626,"code"),e(627,"false"),t()()(),i(628,"td",24)(629,"em")(630,"strong"),e(631,"(opcional)"),t()(),i(632,"p"),e(633,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(634,"blockquote")(635,"p"),e(636,"Caso essa propriedade seja definida como "),i(637,"code"),e(638,"true"),t(),e(639,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(640,"tr",16)(641,"td",17)(642,"div",25)(643,"span",26),e(644," p-field-error-message"),n(645,"br"),t()()(),i(646,"td",21)(647,"code",27),e(648,"string"),t()(),i(649,"td",23),e(650,"-"),t(),i(651,"td",24)(652,"em")(653,"strong"),e(654,"(opcional)"),t()(),i(655,"p"),e(656,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(657,"blockquote")(658,"p"),e(659,"Necess\xE1rio que a propriedade "),i(660,"code"),e(661,"p-required"),t(),e(662," esteja habilitada."),t()()()(),i(663,"tr",16)(664,"td",17)(665,"div",25)(666,"span",26),e(667," p-field-format"),n(668,"br"),t()()(),i(669,"td",21)(670,"code",31),e(671,"((value) => string) "),t(),i(672,"code",32),e(673," Array<string>"),t()(),i(674,"td",23),e(675,"-"),t(),i(676,"td",24)(677,"em")(678,"strong"),e(679,"(opcional)"),t()(),i(680,"p"),e(681,"Formato de exibi\xE7\xE3o do campo."),t(),i(682,"p"),e(683,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(684,"em"),e(685,"string"),t(),e(686," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(687,"pre")(688,"code"),e(689,"fieldFormat(obj) {\n  return `${obj.id} - ${obj.name}`;\n}\n"),t()(),i(690,"blockquote")(691,"p"),e(692,"Esta propriedade sobrep\xF5e o valor da propriedade "),i(693,"code"),e(694,"p-field-label"),t(),e(695," na descri\xE7\xE3o do campo."),t()(),i(696,"p"),e(697,"Pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo, Por exemplo:"),t(),i(698,"pre")(699,"code"),e(700,`<po-lookup
 ...
 [p-field-format]="['id','nickname']"
 ...
>

Objeto retornado:
  {
     id:123,
     name: 'Kakaroto',
     nickname: 'Goku',
  }
Apresenta\xE7\xE3o no campo: 123 - Goku
`),t()(),i(701,"blockquote")(702,"p"),e(703,"Ser\xE1 utilizado "),i(704,"code"),e(705,"-"),t(),e(706," como separador."),t()()()(),i(707,"tr",16)(708,"td",17)(709,"div",25)(710,"span",26),e(711," p-field-label"),n(712,"br"),t()()(),i(713,"td",21)(714,"code",27),e(715,"string"),t()(),i(716,"td",23),e(717,"-"),t(),i(718,"td",24)(719,"p"),e(720,"Indica a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e como filtro dentro da janela."),t()()(),i(721,"tr",16)(722,"td",17)(723,"div",25)(724,"span",26),e(725," p-field-value"),n(726,"br"),t()()(),i(727,"td",21)(728,"code",27),e(729,"string"),t()(),i(730,"td",23),e(731,"-"),t(),i(732,"td",24)(733,"p"),e(734,"Indica a coluna que ser\xE1 utilizada como valor do campo."),t(),i(735,"blockquote")(736,"p"),e(737,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(738,"tr",16)(739,"td",17)(740,"div",25)(741,"span",26),e(742," p-filter-params"),n(743,"br"),t()()(),i(744,"td",21)(745,"code",33),e(746,"any"),t()(),i(747,"td",23),e(748,"-"),t(),i(749,"td",24)(750,"em")(751,"strong"),e(752,"(opcional)"),t()(),i(753,"p"),e(754,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),i(755,"code"),e(756,"PoLookupFilter"),t(),e(757,"."),t()()(),i(758,"tr",16)(759,"td",17)(760,"div",25)(761,"span",26),e(762," p-filter-service"),n(763,"br"),t()()(),i(764,"td",21)(765,"code",27),e(766,"string "),t(),i(767,"code",34),e(768," PoLookupFilter"),t()(),i(769,"td",23),e(770,"-"),t(),i(771,"td",24)(772,"p"),e(773,`Servi\xE7o respons\xE1vel por buscar os dados da tabela na janela. Pode ser informado um servi\xE7o que implemente a interface
`),i(774,"code"),e(775,"PoLookupFilter"),t(),e(776," ou uma URL."),t(),i(777,"p"),e(778,"Quando utilizada uma URL de um servi\xE7o, ser\xE1 concatenada nesta URL o valor que deseja-se filtrar, por exemplo:"),t(),i(779,"pre")(780,"code"),e(781,`url + ?page=1&pageSize=20&filter=Peter
`),t()(),i(782,"p"),e(783,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),i(784,"code"),e(785,"order"),t(),e(786,", por exemplo:"),t(),i(787,"ul")(788,"li")(789,"p"),e(790,"Coluna decrescente:"),t(),i(791,"pre")(792,"code"),e(793,`url + ?page=1&pageSize=20&filter=Peter&order=-name
`),t()()(),i(794,"li")(795,"p"),e(796,"Coluna ascendente:"),t(),i(797,"pre")(798,"code"),e(799,`url + ?page=1&pageSize=20&filter=Peter&order=name
`),t()()()(),i(800,"p"),e(801,"Se for definido a propriedade "),i(802,"code"),e(803,"p-filter-params"),t(),e(804,`, o mesmo tamb\xE9m ser\xE1 concatenado. Por exemplo, para o
par\xE2metro `),i(805,"code"),e(806,"{ age: 23 }"),t(),e(807," a URL ficaria:"),t(),i(808,"pre")(809,"code"),e(810,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()(),i(811,"p"),e(812,"Ao iniciar o campo com valor, os registros ser\xE3o buscados da seguinte forma:"),t(),i(813,"pre")(814,"code"),e(815,`model = 1234;

GET url/1234
`),t()(),i(816,"p"),e(817,"Caso estiver com m\xFAltipla sele\xE7\xE3o habilitada:"),t(),i(818,"pre")(819,"code"),e(820,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678
`),t()(),i(821,"blockquote")(822,"p"),e(823,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(824,"a",7),e(825,"API do PO UI"),t(),e(826,` e utiliza os valores
definidos nas propriedades `),i(827,"code"),e(828,"p-field-label"),t(),e(829," e "),i(830,"code"),e(831,"p-field-value"),t(),e(832," para a constru\xE7\xE3o do "),i(833,"code"),e(834,"po-lookup"),t(),e(835,"."),t()(),i(836,"p"),e(837,"Caso o usu\xE1rio digite um valor e pressione a tecla "),i(838,"em"),e(839,"TAB"),t(),e(840,` para realizar a busca de um registro espec\xEDfico, o valor que se
deseja filtrar ser\xE1 codificado utilizando a fun\xE7\xE3o `),i(841,"a",35),e(842,"encodeURIComponent"),t(),e(843,`
e concatenado na URL da seguinte forma:`),t(),i(844,"pre")(845,"code"),e(846,`url/valor%20que%20se%20deseja%20filtrar
`),t()(),i(847,"blockquote")(848,"p"),e(849,"Quando informado um servi\xE7o que implemente a interface "),i(850,"code"),e(851,"PoLookupFilter"),t(),e(852," o tratamento de encoding do valor a ser filtrado ficar\xE1 a cargo do desenvolvedor."),t()()()(),i(853,"tr",16)(854,"td",17)(855,"div",25)(856,"span",26),e(857," p-help"),n(858,"br"),t()()(),i(859,"td",21)(860,"code",27),e(861,"string"),t()(),i(862,"td",23),e(863,"-"),t(),i(864,"td",24)(865,"em")(866,"strong"),e(867,"(opcional)"),t()(),i(868,"p"),e(869,"Texto de apoio do campo."),t()()(),i(870,"tr",16)(871,"td",17)(872,"div",25)(873,"span",26),e(874," p-hide-columns-manager"),n(875,"br"),t()()(),i(876,"td",21)(877,"code",29),e(878,"boolean"),t()(),i(879,"td",23)(880,"p")(881,"code"),e(882,"false"),t()()(),i(883,"td",24)(884,"em")(885,"strong"),e(886,"(opcional)"),t()(),i(887,"p"),e(888,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),t()()(),i(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),e(893," p-infinite-scroll"),n(894,"br"),t()()(),i(895,"td",21)(896,"code",29),e(897,"boolean"),t()(),i(898,"td",23)(899,"p")(900,"code"),e(901,"false"),t()()(),i(902,"td",24)(903,"em")(904,"strong"),e(905,"(opcional)"),t()(),i(906,"p"),e(907,"Ativa a funcionalidade de scroll infinito para a tabela exibida no retorno da consulta."),t()()(),i(908,"tr",16)(909,"td",17)(910,"div",18)(911,"span",19),e(912," (p-keydown)"),n(913,"br"),t()()(),i(914,"td",21)(915,"code",22),e(916,"EventEmitter"),t()(),i(917,"td",23),e(918,"-"),t(),i(919,"td",24)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),i(923,"p"),e(924,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(925,"code"),e(926,"KeyboardEvent"),t(),e(927," com informa\xE7\xF5es sobre a tecla."),t()()(),i(928,"tr",16)(929,"td",17)(930,"div",25)(931,"span",26),e(932," p-label"),n(933,"br"),t()()(),i(934,"td",21)(935,"code",27),e(936,"string"),t()(),i(937,"td",23),e(938,"-"),t(),i(939,"td",24)(940,"em")(941,"strong"),e(942,"(opcional)"),t()(),i(943,"p"),e(944,"Label do campo."),t(),i(945,"blockquote")(946,"p"),e(947,`Quando utilizar esta propriedade o seu valor ser\xE1 utilizado como t\xEDtulo da modal do componente caso n\xE3o tenha
sido definido um `),i(948,"code"),e(949,"modalTitle"),t(),e(950," na propriedade "),i(951,"code"),e(952,"p-literals"),t(),e(953,"."),t()()()(),i(954,"tr",16)(955,"td",17)(956,"div",25)(957,"span",26),e(958," p-label-text-wrap"),n(959,"br"),t()()(),i(960,"td",21)(961,"code",29),e(962,"boolean"),t()(),i(963,"td",23)(964,"p")(965,"code"),e(966,"false"),t()()(),i(967,"td",24)(968,"em")(969,"strong"),e(970,"(opcional)"),t()(),i(971,"p"),e(972,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(973,"code"),e(974,"p-label"),t(),e(975,". Quando "),i(976,"code"),e(977,"p-label-text-wrap"),t(),e(978,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(979,"tr",16)(980,"td",17)(981,"div",25)(982,"span",26),e(983," p-literals"),n(984,"br"),t()()(),i(985,"td",21)(986,"code",36),e(987,"PoLookupLiterals"),t()(),i(988,"td",23),e(989,"-"),t(),i(990,"td",24)(991,"p"),e(992,"Objeto com as literais usadas no "),i(993,"code"),e(994,"po-lookup"),t(),e(995,"."),t(),i(996,"p"),e(997,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(998,"pre")(999,"code"),e(1e3,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select',
  modalSecondaryActionLabel: 'Cancel',
  modalPlaceholder: 'Search Value',
  modalTableNoColumns: 'No columns',
  modalTableNoData: 'No data',
  modalTableLoadingData: 'Loading data',
  modalTableLoadMoreData: 'Load more',
  modalTitle: 'Select a user',
  modalAdvancedSearch: 'Advanced search',
  modalAdvancedSearchTitle: 'Advanced search',
  modalAdvancedSearchPrimaryActionLabel: 'Filter',
  modalAdvancedSearchSecondaryActionLabel: 'Return',
  modalDisclaimerGroupTitle: 'Presenting results filtered by:'
};
`),t()(),i(1001,"p"),e(1002,"Ou passando apenas as literais que deseja customizar:"),t(),i(1003,"pre")(1004,"code"),e(1005,`const customLiterals: PoLookupLiterals = {
  modalPrimaryActionLabel: 'Select'
};
`),t()(),i(1006,"p"),e(1007,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(1008,"pre")(1009,"code"),e(1010,`<po-lookup
  [p-literals]="customLiterals">
</po-lookup>
`),t()(),i(1011,"blockquote")(1012,"p"),e(1013,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(1014,"a",37)(1015,"code"),e(1016,"PoI18nService"),t()(),e(1017," ou do browser."),t()()()(),i(1018,"tr",16)(1019,"td",17)(1020,"div",25)(1021,"span",26),e(1022," p-loading"),n(1023,"br"),t()()(),i(1024,"td",21)(1025,"code",29),e(1026,"boolean"),t()(),i(1027,"td",23)(1028,"p")(1029,"code"),e(1030,"false"),t()()(),i(1031,"td",24)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),i(1035,"p"),e(1036,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(1037,"tr",16)(1038,"td",17)(1039,"div",25)(1040,"span",26),e(1041," p-multiple"),n(1042,"br"),t()()(),i(1043,"td",21)(1044,"code",29),e(1045,"boolean"),t()(),i(1046,"td",23)(1047,"p")(1048,"code"),e(1049,"false"),t()()(),i(1050,"td",24)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),i(1054,"p"),e(1055,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(1056,"blockquote")(1057,"p"),e(1058,"Quando habilitado o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(1059,"code"),e(1060,"[ 12345, 67890 ]"),t()()()()(),i(1061,"tr",16)(1062,"td",17)(1063,"div",25)(1064,"span",26),e(1065," name"),n(1066,"br"),t()()(),i(1067,"td",21)(1068,"code",27),e(1069,"string"),t()(),i(1070,"td",23),e(1071,"-"),t(),i(1072,"td",24)(1073,"p"),e(1074,"Nome e Id do componente."),t()()(),i(1075,"tr",16)(1076,"td",17)(1077,"div",25)(1078,"span",26),e(1079," p-no-autocomplete"),n(1080,"br"),t()()(),i(1081,"td",21)(1082,"code",29),e(1083,"boolean"),t()(),i(1084,"td",23)(1085,"p")(1086,"code"),e(1087,"false"),t()()(),i(1088,"td",24)(1089,"em")(1090,"strong"),e(1091,"(opcional)"),t()(),i(1092,"p"),e(1093,"Define a propriedade nativa "),i(1094,"code"),e(1095,"autocomplete"),t(),e(1096," do campo como "),i(1097,"code"),e(1098,"off"),t(),e(1099,"."),t()()(),i(1100,"tr",16)(1101,"td",17)(1102,"div",18)(1103,"span",19),e(1104," (p-error)"),n(1105,"br"),t()()(),i(1106,"td",21)(1107,"code",22),e(1108,"EventEmitter"),t()(),i(1109,"td",23),e(1110,"-"),t(),i(1111,"td",24)(1112,"p"),e(1113,`Evento ser\xE1 disparado quando ocorrer algum erro na requisi\xE7\xE3o de busca do item.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(1114,"tr",16)(1115,"td",17)(1116,"div",25)(1117,"span",26),e(1118," p-optional"),n(1119,"br"),t()()(),i(1120,"td",21)(1121,"code",29),e(1122,"boolean"),t()(),i(1123,"td",23)(1124,"p")(1125,"code"),e(1126,"false"),t()()(),i(1127,"td",24)(1128,"em")(1129,"strong"),e(1130,"(opcional)"),t()(),i(1131,"p"),e(1132,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(1133,"blockquote")(1134,"p"),e(1135,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1136,"ul")(1137,"li"),e(1138,"O campo conter "),i(1139,"code"),e(1140,"p-required"),t(),e(1141,";"),t(),i(1142,"li"),e(1143,"N\xE3o possuir "),i(1144,"code"),e(1145,"p-help"),t(),e(1146," e/ou "),i(1147,"code"),e(1148,"p-label"),t(),e(1149,"."),t()()()(),i(1150,"tr",16)(1151,"td",17)(1152,"div",25)(1153,"span",26),e(1154," p-placeholder"),n(1155,"br"),t()()(),i(1156,"td",21)(1157,"code",27),e(1158,"string"),t()(),i(1159,"td",23),e(1160,"-"),t(),i(1161,"td",24)(1162,"p"),e(1163,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),i(1164,"tr",16)(1165,"td",17)(1166,"div",25)(1167,"span",26),e(1168," p-helper"),n(1169,"br"),t()()(),i(1170,"td",21)(1171,"code",38),e(1172,"PoHelperOptions "),t(),i(1173,"code",27),e(1174," string"),t()(),i(1175,"td",23),e(1176,"-"),t(),i(1177,"td",24)(1178,"em")(1179,"strong"),e(1180,"(opcional)"),t()(),i(1181,"p"),e(1182,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),i(1183,"code"),e(1184,"p-label"),t(),e(1185," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),i(1186,"code"),e(1187,"p-label"),t(),e(1188,"."),t(),i(1189,"blockquote")(1190,"p"),e(1191,"Para mais informa\xE7\xF5es acesse: "),i(1192,"a",39),e(1193,"https://po-ui.io/documentation/po-helper"),t(),e(1194,"."),t()(),i(1195,"blockquote")(1196,"p"),e(1197,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(1198,"code"),e(1199,"p-additional-help-tooltip"),t(),e(1200," e "),i(1201,"code"),e(1202,"p-additional-help"),t(),e(1203,") ser\xE1 ignorado."),t()()()(),i(1204,"tr",16)(1205,"td",17)(1206,"div",25)(1207,"span",26),e(1208," p-required"),n(1209,"br"),t()()(),i(1210,"td",21)(1211,"code",29),e(1212,"boolean"),t()(),i(1213,"td",23)(1214,"p")(1215,"code"),e(1216,"false"),t()()(),i(1217,"td",24)(1218,"em")(1219,"strong"),e(1220,"(opcional)"),t()(),i(1221,"p"),e(1222,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1223,"blockquote")(1224,"p"),e(1225,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1226,"code"),e(1227,"(p-disabled)"),t(),e(1228,"."),t()()()(),i(1229,"tr",16)(1230,"td",17)(1231,"div",18)(1232,"span",19),e(1233," (p-selected)"),n(1234,"br"),t()()(),i(1235,"td",21)(1236,"code",22),e(1237,"EventEmitter"),t()(),i(1238,"td",23),e(1239,"-"),t(),i(1240,"td",24)(1241,"em")(1242,"strong"),e(1243,"(opcional)"),t()(),i(1244,"p"),e(1245,`Evento ser\xE1 disparado quando ocorrer alguma sele\xE7\xE3o.
Ser\xE1 passado por par\xE2metro o objeto com o valor selecionado.`),t()()(),i(1246,"tr",16)(1247,"td",17)(1248,"div",25)(1249,"span",26),e(1250," p-show-required"),n(1251,"br"),t()()(),i(1252,"td",21)(1253,"code",29),e(1254,"boolean"),t()(),i(1255,"td",23),e(1256,"-"),t(),i(1257,"td",24)(1258,"p"),e(1259,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE9 exibida."),t(),i(1260,"blockquote")(1261,"p"),e(1262,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1263,"ul")(1264,"li"),e(1265,"N\xE3o possuir "),i(1266,"code"),e(1267,"p-help"),t(),e(1268," e/ou "),i(1269,"code"),e(1270,"p-label"),t(),e(1271,"."),t()()()(),i(1272,"tr",16)(1273,"td",17)(1274,"div",25)(1275,"span",26),e(1276," p-size"),n(1277,"br"),t()()(),i(1278,"td",21)(1279,"code",27),e(1280,"string"),t()(),i(1281,"td",23)(1282,"p")(1283,"code"),e(1284,"medium"),t()()(),i(1285,"td",24)(1286,"em")(1287,"strong"),e(1288,"(opcional)"),t()(),i(1289,"p"),e(1290,"Define o tamanho do componente:"),t(),i(1291,"ul")(1292,"li")(1293,"code"),e(1294,"small"),t(),e(1295,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1296,"li")(1297,"code"),e(1298,"medium"),t(),e(1299,": altura do input como 44px."),t()(),i(1300,"blockquote")(1301,"p"),e(1302,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1303,"code"),e(1304,"medium"),t(),e(1305,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1306,"a",40),e(1307,"po-theme"),t(),e(1308,"."),t()()()(),i(1309,"tr",16)(1310,"td",17)(1311,"div",25)(1312,"span",26),e(1313," p-spacing"),n(1314,"br"),t()()(),i(1315,"td",21)(1316,"code",27),e(1317,"string"),t()(),i(1318,"td",23)(1319,"p")(1320,"code"),e(1321,"medium"),t()()(),i(1322,"td",24)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),i(1326,"p"),e(1327,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table dentro do modal. Os
valores permitidos s\xE3o definidos pelo enum `),i(1328,"strong"),e(1329,"PoTableColumnSpacing"),t(),e(1330,"."),t(),i(1331,"blockquote")(1332,"p"),e(1333,"Em n\xEDvel de acessibilidade "),i(1334,"strong"),e(1335,"AA"),t(),e(1336,", caso o valor de "),i(1337,"code"),e(1338,"p-spacing"),t(),e(1339," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(1340,"code"),e(1341,"extraSmall"),t(),e(1342,`
nos seguintes cen\xE1rios:`),t(),i(1343,"ul")(1344,"li"),e(1345,"Quando o valor de "),i(1346,"code"),e(1347,"p-size"),t(),e(1348," for "),i(1349,"code"),e(1350,"small"),t(),e(1351,";"),t(),i(1352,"li"),e(1353,"Quando o valor padr\xE3o dos componentes for configurado como "),i(1354,"code"),e(1355,"small"),t(),e(1356,` no
`),i(1357,"a",40),e(1358,"servi\xE7o de tema"),t(),e(1359,"."),t()()()()(),i(1360,"tr",16)(1361,"td",17)(1362,"div",25)(1363,"span",26),e(1364," p-text-wrap"),n(1365,"br"),t()()(),i(1366,"td",21)(1367,"code",29),e(1368,"boolean"),t()(),i(1369,"td",23)(1370,"p")(1371,"code"),e(1372,"false"),t()()(),i(1373,"td",24)(1374,"em")(1375,"strong"),e(1376,"(opcional)"),t()(),i(1377,"p"),e(1378,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t(),i(1379,"p"),e(1380,"Esta propriedade aplica-se ao texto contido nas c\xE9lulas da tabela."),t(),i(1381,"blockquote")(1382,"p"),e(1383,"Incompat\xEDvel com "),i(1384,"code"),e(1385,"virtual-scroll"),t(),e(1386,", que requer altura fixa nas linhas."),t()()()(),i(1387,"tr",16)(1388,"td",17)(1389,"div",25)(1390,"span",26),e(1391," p-virtual-scroll"),n(1392,"br"),t()()(),i(1393,"td",21)(1394,"code",29),e(1395,"boolean"),t()(),i(1396,"td",23)(1397,"p")(1398,"code"),e(1399,"true"),t()()(),i(1400,"td",24)(1401,"em")(1402,"strong"),e(1403,"(opcional)"),t()(),i(1404,"p"),e(1405,"Habilita o "),i(1406,"code"),e(1407,"virtual-scroll"),t(),e(1408,` na tabela para melhorar a performance com grandes volumes de dados.
A altura da tabela j\xE1 \xE9 pr\xE9-definida, portanto o `),i(1409,"code"),e(1410,"virtual-scroll"),t(),e(1411," ser\xE1 ativado automaticamente."),t(),i(1412,"blockquote")(1413,"p"),e(1414,"Incompat\xEDvel com "),i(1415,"code"),e(1416,"p-text-wrap"),t(),e(1417," e "),i(1418,"code"),e(1419,"master-detail"),t(),e(1420,", pois o "),i(1421,"code"),e(1422,"virtual-scroll"),t(),e(1423," exige altura fixa nas linhas."),t()()()()(),i(1424,"h3",12),e(1425,"M\xE9todos"),t(),i(1426,"table",41)(1427,"tr",16)(1428,"th",42)(1429,"div",25)(1430,"h4")(1431,"span",26),e(1432," focus "),t()()()()(),i(1433,"tr",24)(1434,"td",24)(1435,"p"),e(1436,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1437,"p"),e(1438,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1439,"pre")(1440,"code"),e(1441,`import { PoLookupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoLookupComponent, { static: true }) lookup: PoLookupComponent;

focusLookup() {
  this.lookup.focus();
}
`),t()()()()(),n(1442,"br"),i(1443,"table",41)(1444,"tr",16)(1445,"th",42)(1446,"div",25)(1447,"h4")(1448,"span",26),e(1449," showAdditionalHelp "),t()()()()(),i(1450,"tr",24)(1451,"td",24)(1452,"p"),e(1453,"M\xE9todo que exibe "),i(1454,"code"),e(1455,"p-helper"),t(),e(1456," ou executa a a\xE7\xE3o definida em "),i(1457,"code"),e(1458,"p-helper{eventOnClick}"),t(),e(1459," ou em "),i(1460,"code"),e(1461,"p-additionalHelp"),t(),e(1462,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1463,"code"),e(1464,"p-keydown"),t(),e(1465,"."),t(),i(1466,"blockquote")(1467,"p"),e(1468,"Exibe ou oculta o conte\xFAdo do componente "),i(1469,"code"),e(1470,"po-helper"),t(),e(1471," quando o componente estiver com foco."),t()(),i(1472,"pre")(1473,"code"),e(1474,`// Exemplo com p-label e p-helper
<po-lookup
 #lookup
 ...
 p-label="Label do lookup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, lookup)"
></po-lookup>
`),t()(),i(1475,"pre")(1476,"code"),e(1477,`...
onKeyDown(event: KeyboardEvent, inp: PoLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),n(1478,"br"),i(1479,"h3"),e(1480,"Interfaces"),t(),i(1481,"h4",43)(1482,"code",5),e(1483,"PoLookupAdvancedFilter"),t()(),i(1484,"div",2)(1485,"p"),e(1486," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente. "),t()(),i(1487,"h4",12),e(1488,"Propriedades"),t(),i(1489,"table",13)(1490,"tr",14)(1491,"th",15),e(1492,"Nome"),t(),i(1493,"th",15),e(1494,"Tipo"),t(),i(1495,"th",15),e(1496,"Descri\xE7\xE3o"),t()(),i(1497,"tr",16)(1498,"td",17)(1499,"div",25)(1500,"span",26),e(1501," additionalHelp"),n(1502,"br"),t()()(),i(1503,"td",21)(1504,"code",44),e(1505,"Function"),t()(),i(1506,"td",24)(1507,"em")(1508,"strong"),e(1509,"(opcional)"),t()(),i(1510,"p"),e(1511,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(1512,"blockquote")(1513,"p"),e(1514,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(1515,"tr",16)(1516,"td",17)(1517,"div",25)(1518,"span",26),e(1519," additionalHelpTooltip"),n(1520,"br"),t()()(),i(1521,"td",21)(1522,"code",27),e(1523,"string"),t()(),i(1524,"td",24)(1525,"em")(1526,"strong"),e(1527,"(opcional)"),t()(),i(1528,"p"),e(1529,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(1530,"code"),e(1531,"po-helper"),t(),e(1532,`.
`),i(1533,"strong"),e(1534,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(1535,"blockquote")(1536,"p"),e(1537,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(1538,"tr",16)(1539,"td",17)(1540,"div",25)(1541,"span",26),e(1542," advancedFilters"),n(1543,"br"),t()()(),i(1544,"td",21)(1545,"code",28),e(1546,"Array<PoLookupAdvancedFilter>"),t()(),i(1547,"td",24)(1548,"em")(1549,"strong"),e(1550,"(opcional)"),t()(),i(1551,"p"),e(1552,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(1553,"blockquote")(1554,"p"),e(1555,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(1556,"p"),e(1557,"Exemplo de URL com busca avan\xE7ada:"),t(),i(1558,"p")(1559,"code"),e(1560,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(1561,"p"),e(1562,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(1563,"p")(1564,"code"),e(1565,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(1566,"tr",16)(1567,"td",17)(1568,"div",25)(1569,"span",26),e(1570," appendBox"),n(1571,"br"),t()()(),i(1572,"td",21)(1573,"code",29),e(1574,"boolean"),t()(),i(1575,"td",24)(1576,"em")(1577,"strong"),e(1578,"(opcional)"),t()(),i(1579,"p"),e(1580,"Define que o "),i(1581,"code"),e(1582,"listbox"),t(),e(1583," e/ou popover ("),i(1584,"code"),e(1585,"p-helper"),t(),e(1586," e/ou "),i(1587,"code"),e(1588,"p-error-limit"),t(),e(1589,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(1590,"blockquote")(1591,"p"),e(1592,"Quando utilizado com "),i(1593,"code"),e(1594,"p-helper"),t(),e(1595,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(1596,"tr",16)(1597,"td",17)(1598,"div",25)(1599,"span",26),e(1600," autoHeight"),n(1601,"br"),t()()(),i(1602,"td",21)(1603,"code",29),e(1604,"boolean"),t()(),i(1605,"td",24)(1606,"em")(1607,"strong"),e(1608,"(opcional)"),t()(),i(1609,"p"),e(1610,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(1611,"p")(1612,"strong"),e(1613,"Componentes compat\xEDveis:"),t(),i(1614,"code"),e(1615,"po-multiselect"),t(),e(1616,", "),i(1617,"code"),e(1618,"po-lookup"),t(),e(1619,"."),t()()(),i(1620,"tr",16)(1621,"td",17)(1622,"div",25)(1623,"span",26),e(1624," autoUpload"),n(1625,"br"),t()()(),i(1626,"td",21)(1627,"code",29),e(1628,"boolean"),t()(),i(1629,"td",24)(1630,"em")(1631,"strong"),e(1632,"(opcional)"),t()(),i(1633,"p"),e(1634,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(1635,"p")(1636,"strong"),e(1637,"Componente compat\xEDvel"),t(),e(1638,": "),i(1639,"code"),e(1640,"po-upload"),t()()()(),i(1641,"tr",16)(1642,"td",17)(1643,"div",25)(1644,"span",26),e(1645," booleanFalse"),n(1646,"br"),t()()(),i(1647,"td",21)(1648,"code",27),e(1649,"string"),t()(),i(1650,"td",24)(1651,"em")(1652,"strong"),e(1653,"(opcional)"),t()(),i(1654,"p"),e(1655,"Texto exibido quando o valor do componente for "),i(1656,"em"),e(1657,"false"),t(),e(1658,"."),t()()(),i(1659,"tr",16)(1660,"td",17)(1661,"div",25)(1662,"span",26),e(1663," booleanTrue"),n(1664,"br"),t()()(),i(1665,"td",21)(1666,"code",27),e(1667,"string"),t()(),i(1668,"td",24)(1669,"em")(1670,"strong"),e(1671,"(opcional)"),t()(),i(1672,"p"),e(1673,"Texto exibido quando o valor do componente for "),i(1674,"em"),e(1675,"true"),t(),e(1676,"."),t()()(),i(1677,"tr",16)(1678,"td",17)(1679,"div",25)(1680,"span",26),e(1681," changeOnEnter"),n(1682,"br"),t()()(),i(1683,"td",21)(1684,"code",29),e(1685,"boolean"),t()(),i(1686,"td",24)(1687,"em")(1688,"strong"),e(1689,"(opcional)"),t()(),i(1690,"p"),e(1691,"Indica que o evento "),i(1692,"code"),e(1693,"p-change"),t(),e(1694,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(1695,"code"),e(1696,"po-combo"),t(),e(1697,"."),t()()(),i(1698,"tr",16)(1699,"td",17)(1700,"div",25)(1701,"span",26),e(1702," changeVisibleColumns"),n(1703,"br"),t()()(),i(1704,"td",21)(1705,"code",44),e(1706,"Function"),t()(),i(1707,"td",24)(1708,"em")(1709,"strong"),e(1710,"(opcional)"),t()(),i(1711,"p"),e(1712,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(1713,"p"),e(1714,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1715,"p")(1716,"strong"),e(1717,"Componente compat\xEDvel"),t(),e(1718,": "),i(1719,"code"),e(1720,"po-lookup"),t()()()(),i(1721,"tr",16)(1722,"td",17)(1723,"div",25)(1724,"span",26),e(1725," clean"),n(1726,"br"),t()()(),i(1727,"td",21)(1728,"code",29),e(1729,"boolean"),t()(),i(1730,"td",24)(1731,"em")(1732,"strong"),e(1733,"(opcional)"),t()(),i(1734,"p"),e(1735,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(1736,"p")(1737,"strong"),e(1738,"Componentes compat\xEDveis:"),t(),i(1739,"code"),e(1740,"po-datepicker"),t(),e(1741,", "),i(1742,"code"),e(1743,"po-datepicker-range"),t(),e(1744,", "),i(1745,"code"),e(1746,"po-input"),t(),e(1747,", "),i(1748,"code"),e(1749,"po-number"),t(),e(1750,", "),i(1751,"code"),e(1752,"po-decimal"),t(),e(1753,`,
`),i(1754,"code"),e(1755,"po-combo"),t(),e(1756,", "),i(1757,"code"),e(1758,"po-lookup"),t(),e(1759,", "),i(1760,"code"),e(1761,"po-password"),t(),e(1762,", "),i(1763,"code"),e(1764,"po-timepicker"),t(),e(1765,"."),t()()(),i(1766,"tr",16)(1767,"td",17)(1768,"div",25)(1769,"span",26),e(1770," columnRestoreManager"),n(1771,"br"),t()()(),i(1772,"td",21)(1773,"code",44),e(1774,"Function"),t()(),i(1775,"td",24)(1776,"em")(1777,"strong"),e(1778,"(opcional)"),t()(),i(1779,"p"),e(1780,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(1781,"p"),e(1782,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(1783,"p")(1784,"strong"),e(1785,"Componente compat\xEDvel"),t(),e(1786,": "),i(1787,"code"),e(1788,"po-lookup"),t()()()(),i(1789,"tr",16)(1790,"td",17)(1791,"div",25)(1792,"span",26),e(1793," columns"),n(1794,"br"),t()()(),i(1795,"td",21)(1796,"code",30),e(1797,"Array<PoLookupColumn> "),t(),i(1798,"code",45),e(1799," number"),t()(),i(1800,"td",24)(1801,"em")(1802,"strong"),e(1803,"(opcional)"),t()(),i(1804,"p"),e(1805,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(1806,"code"),e(1807,"searchService"),t(),e(1808,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(1809,"a",46)(1810,"code"),e(1811,"PoLookupColumn"),t()(),e(1812,"."),t(),i(1813,"blockquote")(1814,"p"),e(1815,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(1816,"em"),e(1817,"label"),t(),e(1818," e "),i(1819,"em"),e(1820,"value"),t(),e(1821,` para valores
de tela e do model respectivamente.`),t()(),i(1822,"p")(1823,"strong"),e(1824,"Componentes compat\xEDveis:"),t(),i(1825,"code"),e(1826,"po-radio-group"),t(),e(1827,", "),i(1828,"code"),e(1829,"po-lookup"),t(),e(1830,", "),i(1831,"code"),e(1832,"po-checkbox-group"),t(),e(1833,"."),t()()(),i(1834,"tr",16)(1835,"td",17)(1836,"div",25)(1837,"span",26),e(1838," compactLabel"),n(1839,"br"),t()()(),i(1840,"td",21)(1841,"code",29),e(1842,"boolean"),t()(),i(1843,"td",24)(1844,"em")(1845,"strong"),e(1846,"(opcional)"),t()(),i(1847,"p"),e(1848,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(1849,"p"),e(1850,"Quando habilitado ("),i(1851,"code"),e(1852,"true"),t(),e(1853,"), o modo compacto afeta o conjunto composto por:"),t(),i(1854,"ul")(1855,"li")(1856,"code"),e(1857,"po-label"),t()(),i(1858,"li")(1859,"code"),e(1860,"p-requirement (showRequired)"),t()(),i(1861,"li")(1862,"code"),e(1863,"po-helper"),t()()(),i(1864,"p"),e(1865,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(1866,"p"),e(1867,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(1868,"ul")(1869,"li")(1870,"code"),e(1871,"--field-container-title-justify"),t()(),i(1872,"li")(1873,"code"),e(1874,"--field-container-title-flex"),t()()(),i(1875,"p"),e(1876,"Exemplo:"),t(),i(1877,"pre")(1878,"code"),e(1879,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(1880,"p"),e(1881,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(1882,"tr",16)(1883,"td",17)(1884,"div",25)(1885,"span",26),e(1886," container"),n(1887,"br"),t()()(),i(1888,"td",21)(1889,"code",27),e(1890,"string"),t()(),i(1891,"td",24)(1892,"em")(1893,"strong"),e(1894,"(opcional)"),t()(),i(1895,"p"),e(1896,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1897,"p"),e(1898,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1899,"tr",16)(1900,"td",17)(1901,"div",25)(1902,"span",26),e(1903," customAction"),n(1904,"br"),t()()(),i(1905,"td",21)(1906,"code",47),e(1907,"PoProgressAction"),t()(),i(1908,"td",24)(1909,"em")(1910,"strong"),e(1911,"(opcional)"),t()(),i(1912,"p"),e(1913,"Define uma a\xE7\xE3o personalizada no componente "),i(1914,"code"),e(1915,"po-upload"),t(),e(1916,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1917,"p")(1918,"strong"),e(1919,"Componente compat\xEDvel"),t(),e(1920,": "),i(1921,"code"),e(1922,"po-upload"),t(),e(1923,","),t(),i(1924,"p")(1925,"strong"),e(1926,"Exemplo de configura\xE7\xE3o"),t(),e(1927,":"),t(),i(1928,"pre")(1929,"code",48),e(1930,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1931,"tr",16)(1932,"td",17)(1933,"div",25)(1934,"span",26),e(1935," customActionClick"),n(1936,"br"),t()()(),i(1937,"td",21)(1938,"code",49),e(1939,"(file: PoUploadFile) => void"),t()(),i(1940,"td",24)(1941,"em")(1942,"strong"),e(1943,"(opcional)"),t()(),i(1944,"p"),e(1945,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1946,"code"),e(1947,"p-custom-action"),t(),e(1948,"."),t(),i(1949,"p")(1950,"strong"),e(1951,"Componente compat\xEDvel"),t(),e(1952,": "),i(1953,"code"),e(1954,"po-upload"),t(),e(1955,","),t(),i(1956,"p"),e(1957,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1958,"p")(1959,"strong"),e(1960,"Par\xE2metro do evento"),t(),e(1961,":"),t(),i(1962,"ul")(1963,"li")(1964,"code"),e(1965,"file"),t(),e(1966,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1967,"code"),e(1968,"PoUploadFile"),t(),e(1969," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1970,"p")(1971,"strong"),e(1972,"Exemplo de uso"),t(),e(1973,":"),t(),i(1974,"pre")(1975,"code",48),e(1976,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1977,"tr",16)(1978,"td",17)(1979,"div",25)(1980,"span",26),e(1981," debounceTime"),n(1982,"br"),t()()(),i(1983,"td",21)(1984,"code",45),e(1985,"number"),t()(),i(1986,"td",24)(1987,"em")(1988,"strong"),e(1989,"(opcional)"),t()(),i(1990,"p"),e(1991,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1992,"code"),e(1993,"p-filter-service"),t(),e(1994,")."),t(),i(1995,"p")(1996,"strong"),e(1997,"Componentes compat\xEDveis:"),t(),i(1998,"code"),e(1999,"po-combo"),t(),e(2e3,", "),i(2001,"code"),e(2002,"po-multiselect"),t(),e(2003,"."),t()()(),i(2004,"tr",16)(2005,"td",17)(2006,"div",25)(2007,"span",26),e(2008," decimalsLength"),n(2009,"br"),t()()(),i(2010,"td",21)(2011,"code",45),e(2012,"number"),t()(),i(2013,"td",24)(2014,"em")(2015,"strong"),e(2016,"(opcional)"),t()(),i(2017,"p"),e(2018,"Quantidade m\xE1xima de casas decimais."),t(),i(2019,"blockquote")(2020,"p"),e(2021,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(2022,"code"),e(2023,"type"),t(),e(2024," for "),i(2025,"em"),e(2026,"currency"),t(),e(2027," ou "),i(2028,"em"),e(2029,"decimal"),t(),e(2030,"."),t()()()(),i(2031,"tr",16)(2032,"td",17)(2033,"div",25)(2034,"span",26),e(2035," directory"),n(2036,"br"),t()()(),i(2037,"td",21)(2038,"code",29),e(2039,"boolean"),t()(),i(2040,"td",24)(2041,"em")(2042,"strong"),e(2043,"(opcional)"),t()(),i(2044,"p"),e(2045,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(2046,"blockquote")(2047,"p"),e(2048,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(2049,"blockquote")(2050,"p"),e(2051,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(2052,"strong"),e(2053,"Internet Explorer"),t(),e(2054,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(2055,"p")(2056,"strong"),e(2057,"Componente compat\xEDvel"),t(),e(2058,": "),i(2059,"code"),e(2060,"po-upload"),t()()()(),i(2061,"tr",16)(2062,"td",17)(2063,"div",25)(2064,"span",26),e(2065," disabled"),n(2066,"br"),t()()(),i(2067,"td",21)(2068,"code",29),e(2069,"boolean"),t()(),i(2070,"td",24)(2071,"em")(2072,"strong"),e(2073,"(opcional)"),t()(),i(2074,"p"),e(2075,"Desabilita o campo caso informar o valor "),i(2076,"em"),e(2077,"true"),t(),e(2078,"."),t()()(),i(2079,"tr",16)(2080,"td",17)(2081,"div",25)(2082,"span",26),e(2083," disabledInitFilter"),n(2084,"br"),t()()(),i(2085,"td",21)(2086,"code",29),e(2087,"boolean"),t()(),i(2088,"td",24)(2089,"em")(2090,"strong"),e(2091,"(opcional)"),t()(),i(2092,"p"),e(2093,"Desabilita o filtro inicial no servi\xE7o do "),i(2094,"code"),e(2095,"po-combo"),t(),e(2096,", que \xE9 executado no primeiro clique no campo."),t()()(),i(2097,"tr",16)(2098,"td",17)(2099,"div",25)(2100,"span",26),e(2101," disabledTabFilter"),n(2102,"br"),t()()(),i(2103,"td",21)(2104,"code",29),e(2105,"boolean"),t()(),i(2106,"td",24)(2107,"em")(2108,"strong"),e(2109,"(opcional)"),t()(),i(2110,"p"),e(2111,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(2112,"code"),e(2113,"po-combo"),t(),e(2114,"."),t()()(),i(2115,"tr",16)(2116,"td",17)(2117,"div",25)(2118,"span",26),e(2119," divider"),n(2120,"br"),t()()(),i(2121,"td",21)(2122,"code",27),e(2123,"string"),t()(),i(2124,"td",24)(2125,"em")(2126,"strong"),e(2127,"(opcional)"),t()(),i(2128,"p"),e(2129,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(2130,"tr",16)(2131,"td",17)(2132,"div",25)(2133,"span",26),e(2134," dragDrop"),n(2135,"br"),t()()(),i(2136,"td",21)(2137,"code",29),e(2138,"boolean"),t()(),i(2139,"td",24)(2140,"em")(2141,"strong"),e(2142,"(opcional)"),t()(),i(2143,"p"),e(2144,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(2145,"blockquote")(2146,"p"),e(2147,"Recomendamos utilizar apenas um "),i(2148,"code"),e(2149,"po-upload"),t(),e(2150," com esta funcionalidade por tela."),t()(),i(2151,"p")(2152,"strong"),e(2153,"Componente compat\xEDvel"),t(),e(2154,": "),i(2155,"code"),e(2156,"po-upload"),t()()()(),i(2157,"tr",16)(2158,"td",17)(2159,"div",25)(2160,"span",26),e(2161," dragDropHeight"),n(2162,"br"),t()()(),i(2163,"td",21)(2164,"code",45),e(2165,"number"),t()(),i(2166,"td",24)(2167,"em")(2168,"strong"),e(2169,"(opcional)"),t()(),i(2170,"p"),e(2171,"Define em "),i(2172,"em"),e(2173,"pixels"),t(),e(2174," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(2175,"code"),e(2176,"160px"),t(),e(2177,"."),t(),i(2178,"blockquote")(2179,"p"),e(2180,"Esta propriedade funciona somente se a propriedade "),i(2181,"code"),e(2182,"p-drag-drop"),t(),e(2183," estiver habilitada."),t()(),i(2184,"p")(2185,"strong"),e(2186,"Componente compat\xEDvel"),t(),e(2187,": "),i(2188,"code"),e(2189,"po-upload"),t()()()(),i(2190,"tr",16)(2191,"td",17)(2192,"div",25)(2193,"span",26),e(2194," errorAsyncFunction"),n(2195,"br"),t()()(),i(2196,"td",21)(2197,"code",50),e(2198,"(value) => Observable<boolean>"),t()(),i(2199,"td",24)(2200,"em")(2201,"strong"),e(2202,"(opcional)"),t()(),i(2203,"p"),e(2204,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(2205,"code"),e(2206,"change"),t(),e(2207," ou "),i(2208,"code"),e(2209,"change-model"),t(),e(2210,", dependendo do valor da propriedade "),i(2211,"code"),e(2212,"triggerMode"),t(),e(2213,"."),t(),i(2214,"blockquote")(2215,"p"),e(2216,"Retorna "),i(2217,"code"),e(2218,"Observable com o valor true"),t(),e(2219," para sinalizar o erro "),i(2220,"code"),e(2221,"false"),t(),e(2222," para indicar que n\xE3o h\xE1 erro."),t()(),i(2223,"p")(2224,"strong"),e(2225,"Componente compat\xEDvel"),t(),e(2226,": "),i(2227,"code"),e(2228,"po-datepicker"),t()()()(),i(2229,"tr",16)(2230,"td",17)(2231,"div",25)(2232,"span",26),e(2233," errorAsyncProperties"),n(2234,"br"),t()()(),i(2235,"td",21)(2236,"code",51),e(2237,"ErrorAsyncProperties"),t()(),i(2238,"td",24)(2239,"em")(2240,"strong"),e(2241,"(opcional)"),t()(),i(2242,"p"),e(2243,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(2244,"p")(2245,"strong"),e(2246,"Componentes compat\xEDveis:"),t(),i(2247,"code"),e(2248,"po-input"),t(),e(2249,", "),i(2250,"code"),e(2251,"po-number"),t(),e(2252,", "),i(2253,"code"),e(2254,"po-decimal"),t(),e(2255,", "),i(2256,"code"),e(2257,"po-password"),t(),e(2258,"."),t()()(),i(2259,"tr",16)(2260,"td",17)(2261,"div",25)(2262,"span",26),e(2263," errorLimit"),n(2264,"br"),t()()(),i(2265,"td",21)(2266,"code",29),e(2267,"boolean"),t()(),i(2268,"td",24)(2269,"em")(2270,"strong"),e(2271,"(opcional)"),t()(),i(2272,"p"),e(2273,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(2274,"blockquote")(2275,"p"),e(2276,"Caso essa propriedade seja definida como "),i(2277,"code"),e(2278,"true"),t(),e(2279,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(2280,"p")(2281,"strong"),e(2282,"Componentes compat\xEDveis:"),t(),i(2283,"code"),e(2284,"po-checkbox-group"),t(),e(2285,", "),i(2286,"code"),e(2287,"po-combo"),t(),e(2288,", "),i(2289,"code"),e(2290,"po-datepicker"),t(),e(2291,", "),i(2292,"code"),e(2293,"po-datepicker-range"),t(),e(2294,", "),i(2295,"code"),e(2296,"po-decimal"),t(),e(2297,", "),i(2298,"code"),e(2299,"po-input"),t(),e(2300,", "),i(2301,"code"),e(2302,"po-lookup"),t(),e(2303,", "),i(2304,"code"),e(2305,"po-multiselect"),t(),e(2306,", "),i(2307,"code"),e(2308,"po-number"),t(),e(2309,", "),i(2310,"code"),e(2311,"po-password"),t(),e(2312,", "),i(2313,"code"),e(2314,"po-radio-group"),t(),e(2315,", "),i(2316,"code"),e(2317,"po-select"),t(),e(2318,`,
`),i(2319,"code"),e(2320,"po-switch"),t(),e(2321,", "),i(2322,"code"),e(2323,"po-textarea"),t(),e(2324,", "),i(2325,"code"),e(2326,"po-timepicker"),t(),e(2327,"."),t()()(),i(2328,"tr",16)(2329,"td",17)(2330,"div",25)(2331,"span",26),e(2332," errorMessage"),n(2333,"br"),t()()(),i(2334,"td",21)(2335,"code",27),e(2336,"string"),t()(),i(2337,"td",24)(2338,"em")(2339,"strong"),e(2340,"(opcional)"),t()(),i(2341,"p"),e(2342,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(2343,"p"),e(2344,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(2345,"ul")(2346,"li"),e(2347,"pattern;"),t(),i(2348,"li"),e(2349,"minValue;"),t(),i(2350,"li"),e(2351,"maxValue;"),t(),i(2352,"li"),e(2353,"required;"),t()(),i(2354,"blockquote")(2355,"p"),e(2356,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(2357,"code"),e(2358,"po-datepicker"),t(),e(2359,", "),i(2360,"code"),e(2361,"po-input"),t(),e(2362,", "),i(2363,"code"),e(2364,"po-number"),t(),e(2365,", "),i(2366,"code"),e(2367,"po-decimal"),t(),e(2368,", "),i(2369,"code"),e(2370,"po-password"),t(),e(2371,", "),i(2372,"code"),e(2373,"po-timepicker"),t(),e(2374,`, \xE9 necess\xE1rio que a propriedade
`),i(2375,"code"),e(2376,"requiredFieldErrorMessage"),t(),e(2377," esteja como "),i(2378,"code"),e(2379,"true"),t(),e(2380,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(2381,"code"),e(2382,"po-datepicker-range"),t(),e(2383,", "),i(2384,"code"),e(2385,"po-select"),t(),e(2386,", "),i(2387,"code"),e(2388,"po-checkbox-group"),t(),e(2389,", "),i(2390,"code"),e(2391,"po-radio-group"),t(),e(2392,", "),i(2393,"code"),e(2394,"po-multiselect"),t(),e(2395,", "),i(2396,"code"),e(2397,"po-combo"),t(),e(2398,`,
`),i(2399,"code"),e(2400,"po-lookup"),t(),e(2401," e "),i(2402,"code"),e(2403,"po-textarea"),t(),e(2404," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(2405,"code"),e(2406,"requiredFieldErrorMessage"),t(),e(2407,"."),t()(),i(2408,"p")(2409,"strong"),e(2410,"Componentes compat\xEDveis:"),t(),i(2411,"code"),e(2412,"po-checkbox-group"),t(),e(2413,", "),i(2414,"code"),e(2415,"po-combo"),t(),e(2416,", "),i(2417,"code"),e(2418,"po-datepicker"),t(),e(2419,", "),i(2420,"code"),e(2421,"po-datepicker-range"),t(),e(2422,", "),i(2423,"code"),e(2424,"po-decimal"),t(),e(2425,", "),i(2426,"code"),e(2427,"po-input"),t(),e(2428,", "),i(2429,"code"),e(2430,"po-lookup"),t(),e(2431,", "),i(2432,"code"),e(2433,"po-multiselect"),t(),e(2434,", "),i(2435,"code"),e(2436,"po-number"),t(),e(2437,", "),i(2438,"code"),e(2439,"po-password"),t(),e(2440,", "),i(2441,"code"),e(2442,"po-radio-group"),t(),e(2443,", "),i(2444,"code"),e(2445,"po-select"),t(),e(2446,`,
`),i(2447,"code"),e(2448,"po-switch"),t(),e(2449,", "),i(2450,"code"),e(2451,"po-textarea"),t(),e(2452,", "),i(2453,"code"),e(2454,"po-timepicker"),t(),e(2455,"."),t()()(),i(2456,"tr",16)(2457,"td",17)(2458,"div",25)(2459,"span",26),e(2460," fieldLabel"),n(2461,"br"),t()()(),i(2462,"td",21)(2463,"code",27),e(2464,"string"),t()(),i(2465,"td",24)(2466,"em")(2467,"strong"),e(2468,"(opcional)"),t()(),i(2469,"p"),e(2470,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(2471,"p"),e(2472,"O valor padr\xE3o \xE9: "),i(2473,"code"),e(2474,"label"),t(),e(2475,"."),t(),i(2476,"blockquote")(2477,"p"),e(2478,"Esta propriedade pode ser utilizada em conjunto com: "),i(2479,"code"),e(2480,"options"),t(),e(2481,", "),i(2482,"code"),e(2483,"optionsService"),t(),e(2484," e "),i(2485,"code"),e(2486,"searchService"),t(),e(2487,"."),t()()()(),i(2488,"tr",16)(2489,"td",17)(2490,"div",25)(2491,"span",26),e(2492," fieldValue"),n(2493,"br"),t()()(),i(2494,"td",21)(2495,"code",27),e(2496,"string"),t()(),i(2497,"td",24)(2498,"em")(2499,"strong"),e(2500,"(opcional)"),t()(),i(2501,"p"),e(2502,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(2503,"p"),e(2504,"O valor padr\xE3o \xE9: "),i(2505,"code"),e(2506,"value"),t(),e(2507,"."),t(),i(2508,"blockquote")(2509,"p"),e(2510,"Esta propriedade pode ser utilizada em conjunto com: "),i(2511,"code"),e(2512,"options"),t(),e(2513,", "),i(2514,"code"),e(2515,"optionsService"),t(),e(2516," e "),i(2517,"code"),e(2518,"searchService"),t(),e(2519,"."),t()()()(),i(2520,"tr",16)(2521,"td",17)(2522,"div",25)(2523,"span",26),e(2524," filterMinlength"),n(2525,"br"),t()()(),i(2526,"td",21)(2527,"code",45),e(2528,"number"),t()(),i(2529,"td",24)(2530,"em")(2531,"strong"),e(2532,"(opcional)"),t()(),i(2533,"p"),e(2534,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(2535,"code"),e(2536,"po-combo"),t(),e(2537,"."),t()()(),i(2538,"tr",16)(2539,"td",17)(2540,"div",25)(2541,"span",26),e(2542," filterMode"),n(2543,"br"),t()()(),i(2544,"td",21)(2545,"code",52),e(2546,"PoMultiselectFilterMode"),t()(),i(2547,"td",24)(2548,"em")(2549,"strong"),e(2550,"(opcional)"),t()(),i(2551,"p"),e(2552,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(2553,"code"),e(2554,"startsWith"),t(),e(2555,", "),i(2556,"code"),e(2557,"contains"),t(),e(2558," ou "),i(2559,"code"),e(2560,"endsWith"),t(),e(2561,"."),t(),i(2562,"blockquote")(2563,"p"),e(2564,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(2565,"p")(2566,"strong"),e(2567,"Componente compat\xEDvel:"),t(),i(2568,"code"),e(2569,"po-multiselect"),t(),e(2570,"."),t()()(),i(2571,"tr",16)(2572,"td",17)(2573,"div",25)(2574,"span",26),e(2575," forceBooleanComponentType"),n(2576,"br"),t()()(),i(2577,"td",21)(2578,"code",53),e(2579,"ForceBooleanComponentEnum"),t()(),i(2580,"td",24)(2581,"em")(2582,"strong"),e(2583,"(opcional)"),t()(),i(2584,"p"),e(2585,"Valores aceitos:"),t(),i(2586,"ul")(2587,"li"),e(2588,"ForceBooleanComponentEnum.switch"),t(),i(2589,"li"),e(2590,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(2591,"tr",16)(2592,"td",17)(2593,"div",25)(2594,"span",26),e(2595," forceOptionsComponentType"),n(2596,"br"),t()()(),i(2597,"td",21)(2598,"code",54),e(2599,"ForceOptionComponentEnum"),t()(),i(2600,"td",24)(2601,"em")(2602,"strong"),e(2603,"(opcional)"),t()(),i(2604,"p"),e(2605,"pode ser utilizada em conjunto com a propriedade "),i(2606,"code"),e(2607,"options"),t(),e(2608," for\xE7ando o componente a renderizar um "),i(2609,"code"),e(2610,"po-select"),t(),e(2611," ou "),i(2612,"code"),e(2613,"po-radio-group"),t(),e(2614,"."),t(),i(2615,"p"),e(2616,"Valores aceitos:"),t(),i(2617,"ul")(2618,"li"),e(2619,"ForceOptionComponentEnum.radioGroup"),t(),i(2620,"li"),e(2621,"ForceOptionComponentEnum.select"),t()(),i(2622,"blockquote")(2623,"p"),e(2624,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(2625,"code"),e(2626,"optionsMulti"),t(),e(2627," e "),i(2628,"code"),e(2629,"optionsService"),t(),e(2630,"."),t()()()(),i(2631,"tr",16)(2632,"td",17)(2633,"div",25)(2634,"span",26),e(2635," formField"),n(2636,"br"),t()()(),i(2637,"td",21)(2638,"code",27),e(2639,"string"),t()(),i(2640,"td",24)(2641,"em")(2642,"strong"),e(2643,"(opcional)"),t()(),i(2644,"p"),e(2645,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(2646,"code"),e(2647,"url"),t(),e(2648,"."),t(),i(2649,"blockquote")(2650,"p"),e(2651,"O valor default \xE9 "),i(2652,"code"),e(2653,"files"),t()()(),i(2654,"p")(2655,"strong"),e(2656,"Componente compat\xEDvel"),t(),e(2657,": "),i(2658,"code"),e(2659,"po-upload"),t()()()(),i(2660,"tr",16)(2661,"td",17)(2662,"div",25)(2663,"span",26),e(2664," format"),n(2665,"br"),t()()(),i(2666,"td",21)(2667,"code",27),e(2668,"string "),t(),i(2669,"code",32),e(2670," Array<string>"),t()(),i(2671,"td",24)(2672,"em")(2673,"strong"),e(2674,"(opcional)"),t()(),i(2675,"p"),e(2676,"Formato de exibi\xE7\xE3o no campo."),t(),i(2677,"p"),e(2678,"Ao utilizar esta propriedade com o "),i(2679,"code"),e(2680,"type"),t(),i(2681,"em"),e(2682,"PoDynamicFieldType.Date"),t(),e(2683," ou "),i(2684,"em"),e(2685,"PoDynamicFieldType.DateTime"),t(),e(2686,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(2687,"p"),e(2688,"Valores v\xE1lidos:"),t(),i(2689,"ul")(2690,"li"),e(2691,"dd/mm/yyyy"),t(),i(2692,"li"),e(2693,"mm/dd/yyyy"),t(),i(2694,"li"),e(2695,"yyyy/mm/dd"),t()(),i(2696,"p"),e(2697,"Ao utilizar com o "),i(2698,"code"),e(2699,"type"),t(),i(2700,"em"),e(2701,"PoDynamicFieldType.Time"),t(),e(2702,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),t(),i(2703,"p"),e(2704,"Valores v\xE1lidos:"),t(),i(2705,"ul")(2706,"li")(2707,"code"),e(2708,"24"),t(),e(2709,": formato de 24 horas (padr\xE3o)"),t(),i(2710,"li")(2711,"code"),e(2712,"12"),t(),e(2713,": formato de 12 horas com indicador AM/PM"),t()(),i(2714,"p"),e(2715,"Tamb\xE9m pode-se utilizar em conjunto com "),i(2716,"code"),e(2717,"searchService"),t(),e(2718,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t(),i(2719,"p")(2720,"strong"),e(2721,"Componentes compat\xEDveis:"),t(),i(2722,"code"),e(2723,"po-datepicker"),t(),e(2724,", "),i(2725,"code"),e(2726,"po-timepicker"),t(),e(2727,", "),i(2728,"code"),e(2729,"po-lookup"),t(),e(2730,"."),t()()(),i(2731,"tr",16)(2732,"td",17)(2733,"div",25)(2734,"span",26),e(2735," formatModel"),n(2736,"br"),t()()(),i(2737,"td",21)(2738,"code",29),e(2739,"boolean"),t()(),i(2740,"td",24)(2741,"em")(2742,"strong"),e(2743,"(opcional)"),t()(),i(2744,"p"),e(2745,"Indica se o "),i(2746,"code"),e(2747,"model"),t(),e(2748," receber\xE1 o valor formatado pelas propriedades "),i(2749,"code"),e(2750,"p-label-on"),t(),e(2751," e "),i(2752,"code"),e(2753,"p-label-off"),t(),e(2754,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(2755,"p"),e(2756,"O valor padr\xE3o \xE9: "),i(2757,"code"),e(2758,"false"),t(),e(2759,"."),t(),i(2760,"blockquote")(2761,"p"),e(2762,"Esta propriedade est\xE1 disponivel apenas para o "),i(2763,"code"),e(2764,"swicth"),t(),e(2765,"."),t()()()(),i(2766,"tr",16)(2767,"td",17)(2768,"div",25)(2769,"span",26),e(2770," gridColumns"),n(2771,"br"),t()()(),i(2772,"td",21)(2773,"code",45),e(2774,"number"),t()(),i(2775,"td",24)(2776,"em")(2777,"strong"),e(2778,"(opcional)"),t()(),i(2779,"p"),e(2780,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(2781,"p"),e(2782,"Deve ser usado o sistema de "),i(2783,"strong"),e(2784,"grid"),t(),e(2785," do PO (1 ... 12 colunas)."),t(),i(2786,"blockquote")(2787,"p"),e(2788,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(2789,"tr",16)(2790,"td",17)(2791,"div",25)(2792,"span",26),e(2793," gridLgColumns"),n(2794,"br"),t()()(),i(2795,"td",21)(2796,"code",45),e(2797,"number"),t()(),i(2798,"td",24)(2799,"em")(2800,"strong"),e(2801,"(opcional)"),t()(),i(2802,"p"),e(2803,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(2804,"p"),e(2805,"Deve ser usado o sistema de "),i(2806,"strong"),e(2807,"grid"),t(),e(2808," do PO (1 ... 12 colunas)."),t(),i(2809,"blockquote")(2810,"p"),e(2811,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2812,"code"),e(2813,"gridColumns"),t(),e(2814,"."),t()()()(),i(2815,"tr",16)(2816,"td",17)(2817,"div",25)(2818,"span",26),e(2819," gridLgPull"),n(2820,"br"),t()()(),i(2821,"td",21)(2822,"code",45),e(2823,"number"),t()(),i(2824,"td",24)(2825,"em")(2826,"strong"),e(2827,"(opcional)"),t()(),i(2828,"p"),e(2829,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2830,"p"),e(2831,"Deve ser usado o sistema de "),i(2832,"strong"),e(2833,"grid"),t(),e(2834," do PO (1 ... 11 colunas)."),t(),i(2835,"blockquote")(2836,"p"),e(2837,"Esta propriedade n\xE3o funciona com a propriedade "),i(2838,"code"),e(2839,"gridColumns"),t(),e(2840,". Deve-se especificar o tamanho da tela."),t()()()(),i(2841,"tr",16)(2842,"td",17)(2843,"div",25)(2844,"span",26),e(2845," gridMdColumns"),n(2846,"br"),t()()(),i(2847,"td",21)(2848,"code",45),e(2849,"number"),t()(),i(2850,"td",24)(2851,"em")(2852,"strong"),e(2853,"(opcional)"),t()(),i(2854,"p"),e(2855,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2856,"p"),e(2857,"Deve ser usado o sistema de "),i(2858,"strong"),e(2859,"grid"),t(),e(2860," do PO (1 ... 12 colunas)."),t(),i(2861,"blockquote")(2862,"p"),e(2863,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2864,"code"),e(2865,"gridColumns"),t(),e(2866,"."),t()()()(),i(2867,"tr",16)(2868,"td",17)(2869,"div",25)(2870,"span",26),e(2871," gridMdPull"),n(2872,"br"),t()()(),i(2873,"td",21)(2874,"code",45),e(2875,"number"),t()(),i(2876,"td",24)(2877,"em")(2878,"strong"),e(2879,"(opcional)"),t()(),i(2880,"p"),e(2881,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2882,"p"),e(2883,"Deve ser usado o sistema de "),i(2884,"strong"),e(2885,"grid"),t(),e(2886," do PO (1 ... 11 colunas)."),t(),i(2887,"blockquote")(2888,"p"),e(2889,"Esta propriedade n\xE3o funciona com a propriedade "),i(2890,"code"),e(2891,"gridColumns"),t(),e(2892,". Deve-se especificar o tamanho da tela."),t()()()(),i(2893,"tr",16)(2894,"td",17)(2895,"div",25)(2896,"span",26),e(2897," gridSmColumns"),n(2898,"br"),t()()(),i(2899,"td",21)(2900,"code",45),e(2901,"number"),t()(),i(2902,"td",24)(2903,"em")(2904,"strong"),e(2905,"(opcional)"),t()(),i(2906,"p"),e(2907,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2908,"p"),e(2909,"Deve ser usado o sistema de "),i(2910,"strong"),e(2911,"grid"),t(),e(2912," do PO (1 ... 12 colunas)."),t(),i(2913,"blockquote")(2914,"p"),e(2915,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2916,"code"),e(2917,"gridColumns"),t(),e(2918,"."),t()()()(),i(2919,"tr",16)(2920,"td",17)(2921,"div",25)(2922,"span",26),e(2923," gridSmPull"),n(2924,"br"),t()()(),i(2925,"td",21)(2926,"code",45),e(2927,"number"),t()(),i(2928,"td",24)(2929,"em")(2930,"strong"),e(2931,"(opcional)"),t()(),i(2932,"p"),e(2933,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2934,"p"),e(2935,"Deve ser usado o sistema de "),i(2936,"strong"),e(2937,"grid"),t(),e(2938," do PO (1 ... 11 colunas)."),t(),i(2939,"blockquote")(2940,"p"),e(2941,"Esta propriedade n\xE3o funciona com a propriedade "),i(2942,"code"),e(2943,"gridColumns"),t(),e(2944,". Deve-se especificar o tamanho da tela."),t()()()(),i(2945,"tr",16)(2946,"td",17)(2947,"div",25)(2948,"span",26),e(2949," gridXlColumns"),n(2950,"br"),t()()(),i(2951,"td",21)(2952,"code",45),e(2953,"number"),t()(),i(2954,"td",24)(2955,"em")(2956,"strong"),e(2957,"(opcional)"),t()(),i(2958,"p"),e(2959,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2960,"p"),e(2961,"Deve ser usado o sistema de "),i(2962,"strong"),e(2963,"grid"),t(),e(2964," do PO (1 ... 12 colunas)."),t(),i(2965,"blockquote")(2966,"p"),e(2967,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2968,"code"),e(2969,"gridColumns"),t(),e(2970,"."),t()()()(),i(2971,"tr",16)(2972,"td",17)(2973,"div",25)(2974,"span",26),e(2975," gridXlPull"),n(2976,"br"),t()()(),i(2977,"td",21)(2978,"code",45),e(2979,"number"),t()(),i(2980,"td",24)(2981,"em")(2982,"strong"),e(2983,"(opcional)"),t()(),i(2984,"p"),e(2985,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2986,"p"),e(2987,"Deve ser usado o sistema de "),i(2988,"strong"),e(2989,"grid"),t(),e(2990," do PO (1 ... 11 colunas)."),t(),i(2991,"blockquote")(2992,"p"),e(2993,"Esta propriedade n\xE3o funciona com a propriedade "),i(2994,"code"),e(2995,"gridColumns"),t(),e(2996,". Deve-se especificar o tamanho da tela."),t()()()(),i(2997,"tr",16)(2998,"td",17)(2999,"div",25)(3e3,"span",26),e(3001," headers"),n(3002,"br"),t()()(),i(3003,"td",21)(3004,"code",55),e(3005,"{ [name: string]: string "),t(),i(3006,"code",56),e(3007,` Array<string>;
}`),t()(),i(3008,"td",24)(3009,"em")(3010,"strong"),e(3011,"(opcional)"),t()(),i(3012,"p"),e(3013,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(3014,"p")(3015,"strong"),e(3016,"Componente compat\xEDvel"),t(),e(3017,": "),i(3018,"code"),e(3019,"po-upload"),t()()()(),i(3020,"tr",16)(3021,"td",17)(3022,"div",25)(3023,"span",26),e(3024," help"),n(3025,"br"),t()()(),i(3026,"td",21)(3027,"code",27),e(3028,"string"),t()(),i(3029,"td",24)(3030,"em")(3031,"strong"),e(3032,"(opcional)"),t()(),i(3033,"p"),e(3034,"Texto de ajuda."),t()()(),i(3035,"tr",16)(3036,"td",17)(3037,"div",25)(3038,"span",26),e(3039," helper"),n(3040,"br"),t()()(),i(3041,"td",21)(3042,"code",27),e(3043,"string "),t(),i(3044,"code",38),e(3045," PoHelperOptions"),t()(),i(3046,"td",24)(3047,"em")(3048,"strong"),e(3049,"(opcional)"),t()(),i(3050,"p"),e(3051,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),i(3052,"tr",16)(3053,"td",17)(3054,"div",25)(3055,"span",26),e(3056," hideLabelStatus"),n(3057,"br"),t()()(),i(3058,"td",21)(3059,"code",29),e(3060,"boolean"),t()(),i(3061,"td",24)(3062,"em")(3063,"strong"),e(3064,"(opcional)"),t()(),i(3065,"p"),e(3066,"Indica se o status do "),i(3067,"code"),e(3068,"model"),t(),e(3069," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(3070,"tr",16)(3071,"td",17)(3072,"div",25)(3073,"span",26),e(3074," hidePasswordPeek"),n(3075,"br"),t()()(),i(3076,"td",21)(3077,"code",29),e(3078,"boolean"),t()(),i(3079,"td",24)(3080,"em")(3081,"strong"),e(3082,"(opcional)"),t()(),i(3083,"p"),e(3084,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(3085,"code"),e(3086,"po-password"),t(),e(3087,"."),t()()(),i(3088,"tr",16)(3089,"td",17)(3090,"div",25)(3091,"span",26),e(3092," hideRestrictionsInfo"),n(3093,"br"),t()()(),i(3094,"td",21)(3095,"code",29),e(3096,"boolean"),t()(),i(3097,"td",24)(3098,"em")(3099,"strong"),e(3100,"(opcional)"),t()(),i(3101,"p"),e(3102,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(3103,"p")(3104,"strong"),e(3105,"Componente compat\xEDvel"),t(),e(3106,": "),i(3107,"code"),e(3108,"po-upload"),t()()()(),i(3109,"tr",16)(3110,"td",17)(3111,"div",25)(3112,"span",26),e(3113," hideSearch"),n(3114,"br"),t()()(),i(3115,"td",21)(3116,"code",29),e(3117,"boolean"),t()(),i(3118,"td",24)(3119,"em")(3120,"strong"),e(3121,"(opcional)"),t()(),i(3122,"p"),e(3123,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(3124,"code"),e(3125,"po-multiselect"),t(),e(3126,"."),t()()(),i(3127,"tr",16)(3128,"td",17)(3129,"div",25)(3130,"span",26),e(3131," hideSelectAll"),n(3132,"br"),t()()(),i(3133,"td",21)(3134,"code",29),e(3135,"boolean"),t()(),i(3136,"td",24)(3137,"em")(3138,"strong"),e(3139,"(opcional)"),t()(),i(3140,"p"),e(3141,'Indica se o campo "Selecionar todos" do '),i(3142,"code"),e(3143,"po-multiselect"),t(),e(3144," ser\xE1 escondido."),t()()(),i(3145,"tr",16)(3146,"td",17)(3147,"div",25)(3148,"span",26),e(3149," hideSelectButton"),n(3150,"br"),t()()(),i(3151,"td",21)(3152,"code",29),e(3153,"boolean"),t()(),i(3154,"td",24)(3155,"em")(3156,"strong"),e(3157,"(opcional)"),t()(),i(3158,"p"),e(3159,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(3160,"blockquote")(3161,"p"),e(3162,"Caso o valor definido seja "),i(3163,"code"),e(3164,"true"),t(),e(3165,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3166,"code"),e(3167,"selectFiles()"),t(),e(3168," para sele\xE7\xE3o de arquivos."),t()(),i(3169,"p")(3170,"strong"),e(3171,"Componente compat\xEDvel"),t(),e(3172,": "),i(3173,"code"),e(3174,"po-upload"),t()()()(),i(3175,"tr",16)(3176,"td",17)(3177,"div",25)(3178,"span",26),e(3179," hideSendButton"),n(3180,"br"),t()()(),i(3181,"td",21)(3182,"code",29),e(3183,"boolean"),t()(),i(3184,"td",24)(3185,"em")(3186,"strong"),e(3187,"(opcional)"),t()(),i(3188,"p"),e(3189,"Omite o bot\xE3o de envio de arquivos."),t(),i(3190,"blockquote")(3191,"p"),e(3192,"Caso o valor definido seja "),i(3193,"code"),e(3194,"true"),t(),e(3195,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(3196,"code"),e(3197,"sendFiles()"),t(),e(3198," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(3199,"p")(3200,"strong"),e(3201,"Componente compat\xEDvel"),t(),e(3202,": "),i(3203,"code"),e(3204,"po-upload"),t()()()(),i(3205,"tr",16)(3206,"td",17)(3207,"div",25)(3208,"span",26),e(3209," icon"),n(3210,"br"),t()()(),i(3211,"td",21)(3212,"code",27),e(3213,"string "),t(),i(3214,"code",57),e(3215," TemplateRef<void>"),t()(),i(3216,"td",24)(3217,"em")(3218,"strong"),e(3219,"(opcional)"),t()(),i(3220,"p"),e(3221,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(3222,"blockquote")(3223,"p"),e(3224,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(3225,"ul")(3226,"li"),e(3227,"Input;"),t(),i(3228,"li"),e(3229,"Number;"),t(),i(3230,"li"),e(3231,"Decimal;"),t(),i(3232,"li"),e(3233,"Combo;"),t(),i(3234,"li"),e(3235,"Password;"),t()(),i(3236,"blockquote")(3237,"p"),e(3238,"Veja a disponibilidade de \xEDcones em "),i(3239,"a",58),e(3240,"biblioteca de \xEDcones"),t(),e(3241,"."),t()()()(),i(3242,"tr",16)(3243,"td",17)(3244,"div",25)(3245,"span",26),e(3246," infiniteScroll"),n(3247,"br"),t()()(),i(3248,"td",21)(3249,"code",29),e(3250,"boolean"),t()(),i(3251,"td",24)(3252,"em")(3253,"strong"),e(3254,"(opcional)"),t()(),i(3255,"p"),e(3256,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(3257,"p")(3258,"strong"),e(3259,"Componentes compat\xEDveis:"),t(),i(3260,"code"),e(3261,"po-combo"),t(),e(3262,", "),i(3263,"code"),e(3264,"po-lookup"),t(),e(3265,"."),t()()(),i(3266,"tr",16)(3267,"td",17)(3268,"div",25)(3269,"span",26),e(3270," infiniteScrollDistance"),n(3271,"br"),t()()(),i(3272,"td",21)(3273,"code",45),e(3274,"number"),t()(),i(3275,"td",24)(3276,"em")(3277,"strong"),e(3278,"(opcional)"),t()(),i(3279,"p"),e(3280,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(3281,"strong"),e(3282,"Exemplos"),t(),i(3283,"code"),e(3284,"{ infiniteScrollDistance: 80 }"),t(),e(3285,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(3286,"p")(3287,"strong"),e(3288,"Componente compat\xEDvel:"),t(),i(3289,"code"),e(3290,"po-combo"),t(),e(3291,"."),t()()(),i(3292,"tr",16)(3293,"td",17)(3294,"div",25)(3295,"span",26),e(3296," invalidValue"),n(3297,"br"),t()()(),i(3298,"td",21)(3299,"code",29),e(3300,"boolean"),t()(),i(3301,"td",24)(3302,"em")(3303,"strong"),e(3304,"(opcional)"),t()(),i(3305,"p"),e(3306,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(3307,"code"),e(3308,"p-field-error-message"),t(),e(3309,"."),t(),i(3310,"blockquote")(3311,"p"),e(3312,"Caso essa propriedade seja definida como "),i(3313,"code"),e(3314,"true"),t(),e(3315,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),i(3316,"p")(3317,"strong"),e(3318,"Componente compat\xEDvel"),t(),e(3319,": "),i(3320,"code"),e(3321,"po-switch"),t()()()(),i(3322,"tr",16)(3323,"td",17)(3324,"div",25)(3325,"span",26),e(3326," isoFormat"),n(3327,"br"),t()()(),i(3328,"td",21)(3329,"code",59),e(3330,"PoDatepickerIsoFormat"),t()(),i(3331,"td",24)(3332,"em")(3333,"strong"),e(3334,"(opcional)"),t()(),i(3335,"p"),e(3336,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(3337,"blockquote")(3338,"p"),e(3339,"Veja os valores v\xE1lidos no "),i(3340,"code"),e(3341,"PoDatepickerIsoFormat"),t(),e(3342,"."),t()(),i(3343,"p")(3344,"strong"),e(3345,"Componente compat\xEDvel:"),t(),i(3346,"code"),e(3347,"po-datepicker"),t()()()(),i(3348,"tr",16)(3349,"td",17)(3350,"div",25)(3351,"span",26),e(3352," key"),n(3353,"br"),t()()(),i(3354,"td",21)(3355,"code",29),e(3356,"boolean"),t()(),i(3357,"td",24)(3358,"em")(3359,"strong"),e(3360,"(opcional)"),t()(),i(3361,"p"),e(3362,"Identificador"),t()()(),i(3363,"tr",16)(3364,"td",17)(3365,"div",25)(3366,"span",26),e(3367," keydown"),n(3368,"br"),t()()(),i(3369,"td",21)(3370,"code",44),e(3371,"Function"),t()(),i(3372,"td",24)(3373,"em")(3374,"strong"),e(3375,"(opcional)"),t()(),i(3376,"p"),e(3377,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(3378,"code"),e(3379,"KeyboardEvent"),t(),e(3380," com informa\xE7\xF5es sobre a tecla."),t()()(),i(3381,"tr",16)(3382,"td",17)(3383,"div",25)(3384,"span",26),e(3385," label"),n(3386,"br"),t()()(),i(3387,"td",21)(3388,"code",27),e(3389,"string"),t()(),i(3390,"td",24)(3391,"em")(3392,"strong"),e(3393,"(opcional)"),t()(),i(3394,"p"),e(3395,"R\xF3tulo do campo exibido."),t(),i(3396,"p"),e(3397,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3398,"code"),e(3399,"label"),t(),e(3400," o valor da propriedade "),i(3401,"code"),e(3402,"property"),t(),e(3403," com a primeira letra em mai\xFAsculo."),t()()(),i(3404,"tr",16)(3405,"td",17)(3406,"div",25)(3407,"span",26),e(3408," labelPosition"),n(3409,"br"),t()()(),i(3410,"td",21)(3411,"code",60),e(3412,"PoSwitchLabelPosition"),t()(),i(3413,"td",24)(3414,"em")(3415,"strong"),e(3416,"(opcional)"),t()(),i(3417,"p"),e(3418,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(3419,"blockquote")(3420,"p"),e(3421,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(3422,"tr",16)(3423,"td",17)(3424,"div",25)(3425,"span",26),e(3426," listboxControlPosition"),n(3427,"br"),t()()(),i(3428,"td",21)(3429,"code",61),e(3430,"'top' "),t(),i(3431,"code",62),e(3432," 'bottom'"),t()(),i(3433,"td",24)(3434,"em")(3435,"strong"),e(3436,"(opcional)"),t()(),i(3437,"p"),e(3438,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(3439,"code"),e(3440,"listbox"),t(),e(3441," em rela\xE7\xE3o ao campo ("),i(3442,"code"),e(3443,"top"),t(),e(3444," ou "),i(3445,"code"),e(3446,"bottom"),t(),e(3447,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),i(3448,"p")(3449,"strong"),e(3450,"Componentes compat\xEDveis:"),t(),i(3451,"code"),e(3452,"po-multiselect"),t(),e(3453,", "),i(3454,"code"),e(3455,"po-combo"),t(),e(3456,"."),t()()(),i(3457,"tr",16)(3458,"td",17)(3459,"div",25)(3460,"span",26),e(3461," literals"),n(3462,"br"),t()()(),i(3463,"td",21)(3464,"code",36),e(3465,"PoLookupLiterals "),t(),i(3466,"code",63),e(3467," PoMultiselectLiterals "),t(),i(3468,"code",64),e(3469," PoComboLiterals "),t(),i(3470,"code",65),e(3471," PoDatepickerRangeLiterals "),t(),i(3472,"code",66),e(3473," PoUploadLiterals"),t()(),i(3474,"td",24)(3475,"em")(3476,"strong"),e(3477,"(opcional)"),t()(),i(3478,"p"),e(3479,"Objeto com as literais usadas para os seguintes componentes: "),i(3480,"code"),e(3481,"po-lookup"),t(),e(3482,", "),i(3483,"code"),e(3484,"po-multiselect"),t(),e(3485,", "),i(3486,"code"),e(3487,"po-combo"),t(),e(3488," e "),i(3489,"code"),e(3490,"po-datepicker-range"),t(),e(3491,"."),t(),i(3492,"blockquote")(3493,"p"),e(3494,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(3495,"p")(3496,"strong"),e(3497,"Componentes compat\xEDveis:"),t(),i(3498,"code"),e(3499,"po-lookup"),t(),e(3500,", "),i(3501,"code"),e(3502,"po-multiselect"),t(),e(3503,", "),i(3504,"code"),e(3505,"po-combo"),t(),e(3506,", "),i(3507,"code"),e(3508,"po-datepicker-range"),t()()()(),i(3509,"tr",16)(3510,"td",17)(3511,"div",25)(3512,"span",26),e(3513," loading"),n(3514,"br"),t()()(),i(3515,"td",21)(3516,"code",29),e(3517,"boolean"),t()(),i(3518,"td",24)(3519,"em")(3520,"strong"),e(3521,"(opcional)"),t()(),i(3522,"p"),e(3523,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),t(),i(3524,"blockquote")(3525,"p"),e(3526,"Por padr\xE3o \xE9 "),i(3527,"code"),e(3528,"false"),t(),e(3529,"."),t()(),i(3530,"p")(3531,"strong"),e(3532,"Componentes compat\xEDveis:"),t(),i(3533,"code"),e(3534,"po-datepicker"),t(),e(3535,", "),i(3536,"code"),e(3537,"po-datepicker-range"),t(),e(3538,", "),i(3539,"code"),e(3540,"po-number"),t(),e(3541,", "),i(3542,"code"),e(3543,"po-decimal"),t(),e(3544,`,
`),i(3545,"code"),e(3546,"po-input"),t(),e(3547,", "),i(3548,"code"),e(3549,"po-select"),t(),e(3550,", "),i(3551,"code"),e(3552,"po-switch"),t(),e(3553,", "),i(3554,"code"),e(3555,"po-combo"),t(),e(3556,", "),i(3557,"code"),e(3558,"po-lookup"),t(),e(3559,", "),i(3560,"code"),e(3561,"po-multiselect"),t(),e(3562,`,
`),i(3563,"code"),e(3564,"po-textarea"),t(),e(3565,", "),i(3566,"code"),e(3567,"po-password"),t(),e(3568,", "),i(3569,"code"),e(3570,"po-upload"),t(),e(3571,"."),t()()(),i(3572,"tr",16)(3573,"td",17)(3574,"div",25)(3575,"span",26),e(3576," locale"),n(3577,"br"),t()()(),i(3578,"td",21)(3579,"code",27),e(3580,"string"),t()(),i(3581,"td",24)(3582,"em")(3583,"strong"),e(3584,"(opcional)"),t()(),i(3585,"p"),e(3586,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(3587,"a",67)(3588,"code"),e(3589,"I18n"),t()()(),i(3590,"p"),e(3591,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3592,"pre")(3593,"code"),e(3594,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),i(3595,"blockquote")(3596,"p"),e(3597,"Para ver quais linguagens suportadas acesse "),i(3598,"a",67)(3599,"code"),e(3600,"I18n"),t()()()(),i(3601,"p")(3602,"strong"),e(3603,"Componentes compat\xEDveis:"),t(),i(3604,"code"),e(3605,"po-datepicker"),t(),e(3606,", "),i(3607,"code"),e(3608,"po-decimal"),t(),e(3609,", "),i(3610,"code"),e(3611,"po-timepicker"),t(),e(3612,"."),t()()(),i(3613,"tr",16)(3614,"td",17)(3615,"div",25)(3616,"span",26),e(3617," mask"),n(3618,"br"),t()()(),i(3619,"td",21)(3620,"code",27),e(3621,"string"),t()(),i(3622,"td",24)(3623,"em")(3624,"strong"),e(3625,"(opcional)"),t()(),i(3626,"p"),e(3627,"M\xE1scara para o campo."),t(),i(3628,"p")(3629,"strong"),e(3630,"Componente compat\xEDvel:"),t(),i(3631,"code"),e(3632,"po-input"),t(),e(3633,"."),t(),i(3634,"blockquote")(3635,"p"),e(3636,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3637,"code"),e(3638,"type: time"),t(),e(3639,"."),t()()()(),i(3640,"tr",16)(3641,"td",17)(3642,"div",25)(3643,"span",26),e(3644," maskFormatModel"),n(3645,"br"),t()()(),i(3646,"td",21)(3647,"code",29),e(3648,"boolean"),t()(),i(3649,"td",24)(3650,"em")(3651,"strong"),e(3652,"(opcional)"),t()(),i(3653,"p"),e(3654,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(3655,"code"),e(3656,"false"),t(),e(3657,"."),t(),i(3658,"p")(3659,"strong"),e(3660,"Componente compat\xEDvel:"),t(),i(3661,"code"),e(3662,"po-input"),t(),e(3663,"."),t(),i(3664,"blockquote")(3665,"p"),e(3666,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(3667,"code"),e(3668,"type: time"),t(),e(3669,"."),t()()()(),i(3670,"tr",16)(3671,"td",17)(3672,"div",25)(3673,"span",26),e(3674," maskNoLengthValidation"),n(3675,"br"),t()()(),i(3676,"td",21)(3677,"code",29),e(3678,"boolean"),t()(),i(3679,"td",24)(3680,"em")(3681,"strong"),e(3682,"(opcional)"),t()(),i(3683,"p"),e(3684,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),i(3685,"code"),e(3686,"minLength"),t(),e(3687,") e m\xE1ximo ("),i(3688,"code"),e(3689,"maxLength"),t(),e(3690,") quando h\xE1 uma m\xE1scara ("),i(3691,"code"),e(3692,"p-mask"),t(),e(3693,") definida."),t(),i(3694,"ul")(3695,"li"),e(3696,"Quando "),i(3697,"code"),e(3698,"true"),t(),e(3699,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),i(3700,"li"),e(3701,"Quando "),i(3702,"code"),e(3703,"false"),t(),e(3704,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),i(3705,"p")(3706,"strong"),e(3707,"Componentes compat\xEDveis:"),t(),i(3708,"code"),e(3709,"po-input"),t(),e(3710,", "),i(3711,"code"),e(3712,"po-decimal"),t(),e(3713,"."),t(),i(3714,"blockquote")(3715,"p"),e(3716,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),i(3717,"code"),e(3718,"p-mask-format-model"),t(),e(3719,"."),t()(),i(3720,"p"),e(3721,"Exemplo:"),t(),i(3722,"pre")(3723,"code"),e(3724,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),t()(),i(3725,"ul")(3726,"li"),e(3727,"Entrada: "),i(3728,"code"),e(3729,"11.111.111/1111-11"),t(),e(3730," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),t()()()(),i(3731,"tr",16)(3732,"td",17)(3733,"div",25)(3734,"span",26),e(3735," maxLength"),n(3736,"br"),t()()(),i(3737,"td",21)(3738,"code",45),e(3739,"number"),t()(),i(3740,"td",24)(3741,"em")(3742,"strong"),e(3743,"(opcional)"),t()(),i(3744,"p"),e(3745,"Tamanho m\xE1ximo de caracteres."),t(),i(3746,"p")(3747,"strong"),e(3748,"Componentes compat\xEDveis:"),t(),i(3749,"code"),e(3750,"po-input"),t(),e(3751,", "),i(3752,"code"),e(3753,"po-number"),t(),e(3754,", "),i(3755,"code"),e(3756,"po-decimal"),t(),e(3757,", "),i(3758,"code"),e(3759,"po-textarea"),t(),e(3760,", "),i(3761,"code"),e(3762,"po-password"),t(),e(3763,"."),t()()(),i(3764,"tr",16)(3765,"td",17)(3766,"div",25)(3767,"span",26),e(3768," maxValue"),n(3769,"br"),t()()(),i(3770,"td",21)(3771,"code",27),e(3772,"string "),t(),i(3773,"code",45),e(3774," number"),t()(),i(3775,"td",24)(3776,"em")(3777,"strong"),e(3778,"(opcional)"),t()(),i(3779,"p"),e(3780,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3781,"em"),e(3782,"number"),t(),e(3783,", "),i(3784,"em"),e(3785,"date"),t(),e(3786,", "),i(3787,"em"),e(3788,"dateTime"),t(),e(3789," ou "),i(3790,"em"),e(3791,"time"),t(),e(3792,"."),t(),i(3793,"blockquote")(3794,"p"),e(3795,"Para "),i(3796,"code"),e(3797,"po-timepicker"),t(),e(3798,", o valor deve estar no formato "),i(3799,"code"),e(3800,"HH:mm"),t(),e(3801," ou "),i(3802,"code"),e(3803,"HH:mm:ss"),t(),e(3804,"."),t()(),i(3805,"p")(3806,"strong"),e(3807,"Componentes compat\xEDveis:"),t(),i(3808,"code"),e(3809,"po-datepicker"),t(),e(3810,", "),i(3811,"code"),e(3812,"po-datepicker-range"),t(),e(3813,", "),i(3814,"code"),e(3815,"po-number"),t(),e(3816,", "),i(3817,"code"),e(3818,"po-decimal"),t(),e(3819,", "),i(3820,"code"),e(3821,"po-timepicker"),t()()()(),i(3822,"tr",16)(3823,"td",17)(3824,"div",25)(3825,"span",26),e(3826," minLength"),n(3827,"br"),t()()(),i(3828,"td",21)(3829,"code",45),e(3830,"number"),t()(),i(3831,"td",24)(3832,"em")(3833,"strong"),e(3834,"(opcional)"),t()(),i(3835,"p"),e(3836,"Tamanho m\xEDnimo de caracteres."),t(),i(3837,"p")(3838,"strong"),e(3839,"Componentes compat\xEDveis:"),t(),i(3840,"code"),e(3841,"po-input"),t(),e(3842,", "),i(3843,"code"),e(3844,"po-number"),t(),e(3845,", "),i(3846,"code"),e(3847,"po-decimal"),t(),e(3848,", "),i(3849,"code"),e(3850,"po-textarea"),t(),e(3851,", "),i(3852,"code"),e(3853,"po-password"),t(),e(3854,"."),t()()(),i(3855,"tr",16)(3856,"td",17)(3857,"div",25)(3858,"span",26),e(3859," minValue"),n(3860,"br"),t()()(),i(3861,"td",21)(3862,"code",27),e(3863,"string "),t(),i(3864,"code",45),e(3865," number"),t()(),i(3866,"td",24)(3867,"em")(3868,"strong"),e(3869,"(opcional)"),t()(),i(3870,"p"),e(3871,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3872,"em"),e(3873,"number"),t(),e(3874,", "),i(3875,"em"),e(3876,"date"),t(),e(3877,", "),i(3878,"em"),e(3879,"dateTime"),t(),e(3880," ou "),i(3881,"em"),e(3882,"time"),t(),e(3883,"."),t(),i(3884,"blockquote")(3885,"p"),e(3886,"Para "),i(3887,"code"),e(3888,"po-timepicker"),t(),e(3889,", o valor deve estar no formato "),i(3890,"code"),e(3891,"HH:mm"),t(),e(3892," ou "),i(3893,"code"),e(3894,"HH:mm:ss"),t(),e(3895,"."),t()(),i(3896,"p")(3897,"strong"),e(3898,"Componentes compat\xEDveis:"),t(),i(3899,"code"),e(3900,"po-datepicker"),t(),e(3901,", "),i(3902,"code"),e(3903,"po-datepicker-range"),t(),e(3904,", "),i(3905,"code"),e(3906,"po-number"),t(),e(3907,", "),i(3908,"code"),e(3909,"po-decimal"),t(),e(3910,", "),i(3911,"code"),e(3912,"po-timepicker"),t()()()(),i(3913,"tr",16)(3914,"td",17)(3915,"div",25)(3916,"span",26),e(3917," minuteInterval"),n(3918,"br"),t()()(),i(3919,"td",21)(3920,"code",45),e(3921,"number"),t()(),i(3922,"td",24)(3923,"em")(3924,"strong"),e(3925,"(opcional)"),t()(),i(3926,"p"),e(3927,"Define o intervalo entre os minutos exibidos no painel do timepicker."),t()()(),i(3928,"tr",16)(3929,"td",17)(3930,"div",25)(3931,"span",26),e(3932," mode"),n(3933,"br"),t()()(),i(3934,"td",21)(3935,"code",68),e(3936,"'month-year' "),t(),i(3937,"code",69),e(3938," 'year'"),t()(),i(3939,"td",24)(3940,"em")(3941,"strong"),e(3942,"(opcional)"),t()(),i(3943,"p"),e(3944,"Define o modo de sele\xE7\xE3o do "),i(3945,"code"),e(3946,"po-datepicker"),t(),e(3947,"."),t(),i(3948,"p"),e(3949,"Valores aceitos:"),t(),i(3950,"ul")(3951,"li")(3952,"code"),e(3953,"'month-year'"),t(),e(3954,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),i(3955,"code"),e(3956,"MM/YYYY"),t(),e(3957,")"),t(),i(3958,"li")(3959,"code"),e(3960,"'year'"),t(),e(3961,": exibe sele\xE7\xE3o apenas de ano (formato "),i(3962,"code"),e(3963,"YYYY"),t(),e(3964,")"),t()(),i(3965,"p")(3966,"strong"),e(3967,"Componente compat\xEDvel:"),t(),i(3968,"code"),e(3969,"po-datepicker"),t()()()(),i(3970,"tr",16)(3971,"td",17)(3972,"div",25)(3973,"span",26),e(3974," modelFormat"),n(3975,"br"),t()()(),i(3976,"td",21)(3977,"code",70),e(3978,"PoTimepickerModelFormat"),t()(),i(3979,"td",24)(3980,"em")(3981,"strong"),e(3982,"(opcional)"),t()(),i(3983,"p"),e(3984,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),i(3985,"code"),e(3986,"po-timepicker"),t(),e(3987,"."),t(),i(3988,"blockquote")(3989,"p"),e(3990,"Veja os valores v\xE1lidos no "),i(3991,"code"),e(3992,"PoTimepickerModelFormat"),t(),e(3993,"."),t()(),i(3994,"p")(3995,"strong"),e(3996,"Componente compat\xEDvel:"),t(),i(3997,"code"),e(3998,"po-timepicker"),t()()()(),i(3999,"tr",16)(4e3,"td",17)(4001,"div",25)(4002,"span",26),e(4003," multiple"),n(4004,"br"),t()()(),i(4005,"td",21)(4006,"code",29),e(4007,"boolean"),t()(),i(4008,"td",24)(4009,"em")(4010,"strong"),e(4011,"(opcional)"),t()(),i(4012,"p"),e(4013,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(4014,"p")(4015,"strong"),e(4016,"Componentes compat\xEDveis:"),t(),i(4017,"code"),e(4018,"po-lookup"),t(),e(4019,", "),i(4020,"code"),e(4021,"po-upload"),t()()()(),i(4022,"tr",16)(4023,"td",17)(4024,"div",25)(4025,"span",26),e(4026," noAutocomplete"),n(4027,"br"),t()()(),i(4028,"td",21)(4029,"code",29),e(4030,"boolean"),t()(),i(4031,"td",24)(4032,"em")(4033,"strong"),e(4034,"(opcional)"),t()(),i(4035,"p"),e(4036,"Define a propriedade nativa "),i(4037,"code"),e(4038,"autocomplete"),t(),e(4039," do campo como off."),t(),i(4040,"p")(4041,"strong"),e(4042,"Componentes compat\xEDveis:"),t(),i(4043,"code"),e(4044,"po-datepicker"),t(),e(4045,", "),i(4046,"code"),e(4047,"po-datepicker-range"),t(),e(4048,", "),i(4049,"code"),e(4050,"po-input"),t(),e(4051,", "),i(4052,"code"),e(4053,"po-number"),t(),e(4054,", "),i(4055,"code"),e(4056,"po-decimal"),t(),e(4057,`,
`),i(4058,"code"),e(4059,"po-lookup"),t(),e(4060,", "),i(4061,"code"),e(4062,"po-password"),t(),e(4063,", "),i(4064,"code"),e(4065,"po-timepicker"),t(),e(4066,"."),t()()(),i(4067,"tr",16)(4068,"td",17)(4069,"div",25)(4070,"span",26),e(4071," offsetColumns"),n(4072,"br"),t()()(),i(4073,"td",21)(4074,"code",45),e(4075,"number"),t()(),i(4076,"td",24)(4077,"em")(4078,"strong"),e(4079,"(opcional)"),t()(),i(4080,"p"),e(4081,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(4082,"p"),e(4083,"Deve ser usado o sistema de "),i(4084,"strong"),e(4085,"grid"),t(),e(4086," do PO (1 ... 12 colunas)."),t(),i(4087,"blockquote")(4088,"p"),e(4089,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(4090,"tr",16)(4091,"td",17)(4092,"div",25)(4093,"span",26),e(4094," offsetLgColumns"),n(4095,"br"),t()()(),i(4096,"td",21)(4097,"code",45),e(4098,"number"),t()(),i(4099,"td",24)(4100,"em")(4101,"strong"),e(4102,"(opcional)"),t()(),i(4103,"p"),e(4104,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(4105,"p"),e(4106,"Deve ser usado o sistema de "),i(4107,"strong"),e(4108,"grid"),t(),e(4109," do PO (1 ... 12 colunas)."),t(),i(4110,"blockquote")(4111,"p"),e(4112,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(4113,"code"),e(4114,"offsetColumns"),t(),e(4115,"."),t()()()(),i(4116,"tr",16)(4117,"td",17)(4118,"div",25)(4119,"span",26),e(4120," offsetMdColumns"),n(4121,"br"),t()()(),i(4122,"td",21)(4123,"code",45),e(4124,"number"),t()(),i(4125,"td",24)(4126,"em")(4127,"strong"),e(4128,"(opcional)"),t()(),i(4129,"p"),e(4130,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(4131,"p"),e(4132,"Deve ser usado o sistema de "),i(4133,"strong"),e(4134,"grid"),t(),e(4135," do PO (1 ... 12 colunas)."),t(),i(4136,"blockquote")(4137,"p"),e(4138,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(4139,"code"),e(4140,"offsetColumns"),t(),e(4141,"."),t()()()(),i(4142,"tr",16)(4143,"td",17)(4144,"div",25)(4145,"span",26),e(4146," offsetSmColumns"),n(4147,"br"),t()()(),i(4148,"td",21)(4149,"code",45),e(4150,"number"),t()(),i(4151,"td",24)(4152,"em")(4153,"strong"),e(4154,"(opcional)"),t()(),i(4155,"p"),e(4156,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(4157,"p"),e(4158,"Deve ser usado o sistema de "),i(4159,"strong"),e(4160,"grid"),t(),e(4161," do PO (1 ... 12 colunas)."),t(),i(4162,"blockquote")(4163,"p"),e(4164,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(4165,"code"),e(4166,"offsetColumns"),t(),e(4167,"."),t()()()(),i(4168,"tr",16)(4169,"td",17)(4170,"div",25)(4171,"span",26),e(4172," offsetXlColumns"),n(4173,"br"),t()()(),i(4174,"td",21)(4175,"code",45),e(4176,"number"),t()(),i(4177,"td",24)(4178,"em")(4179,"strong"),e(4180,"(opcional)"),t()(),i(4181,"p"),e(4182,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(4183,"p"),e(4184,"Deve ser usado o sistema de "),i(4185,"strong"),e(4186,"grid"),t(),e(4187," do PO (1 ... 12 colunas)."),t(),i(4188,"blockquote")(4189,"p"),e(4190,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(4191,"code"),e(4192,"offsetColumns"),t(),e(4193,"."),t()()()(),i(4194,"tr",16)(4195,"td",17)(4196,"div",25)(4197,"span",26),e(4198," onError"),n(4199,"br"),t()()(),i(4200,"td",21)(4201,"code",44),e(4202,"Function"),t()(),i(4203,"td",24)(4204,"em")(4205,"strong"),e(4206,"(opcional)"),t()(),i(4207,"p"),e(4208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(4209,"blockquote")(4210,"p"),e(4211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(4212,"code"),e(4213,"HttpErrorResponse"),t(),e(4214,"."),t()(),i(4215,"p")(4216,"strong"),e(4217,"Componente compat\xEDvel"),t(),e(4218,": "),i(4219,"code"),e(4220,"po-upload"),t()()()(),i(4221,"tr",16)(4222,"td",17)(4223,"div",25)(4224,"span",26),e(4225," onSuccess"),n(4226,"br"),t()()(),i(4227,"td",21)(4228,"code",44),e(4229,"Function"),t()(),i(4230,"td",24)(4231,"em")(4232,"strong"),e(4233,"(opcional)"),t()(),i(4234,"p"),e(4235,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(4236,"blockquote")(4237,"p"),e(4238,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(4239,"code"),e(4240,"HttpResponse"),t(),e(4241,"."),t()(),i(4242,"p")(4243,"strong"),e(4244,"Componente compat\xEDvel"),t(),e(4245,": "),i(4246,"code"),e(4247,"po-upload"),t()()()(),i(4248,"tr",16)(4249,"td",17)(4250,"div",25)(4251,"span",26),e(4252," onUpload"),n(4253,"br"),t()()(),i(4254,"td",21)(4255,"code",44),e(4256,"Function"),t()(),i(4257,"td",24)(4258,"em")(4259,"strong"),e(4260,"(opcional)"),t()(),i(4261,"p"),e(4262,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(4263,"pre")(4264,"code"),e(4265,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(4266,"p")(4267,"strong"),e(4268,"Componente compat\xEDvel"),t(),e(4269,": "),i(4270,"code"),e(4271,"po-upload"),t()()()(),i(4272,"tr",16)(4273,"td",17)(4274,"div",25)(4275,"span",26),e(4276," optional"),n(4277,"br"),t()()(),i(4278,"td",21)(4279,"code",29),e(4280,"boolean"),t()(),i(4281,"td",24)(4282,"em")(4283,"strong"),e(4284,"(opcional)"),t()(),i(4285,"p"),e(4286,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(4287,"blockquote")(4288,"p"),e(4289,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(4290,"ul")(4291,"li"),e(4292,"O campo for "),i(4293,"code"),e(4294,"required"),t(),e(4295,", ou;"),t(),i(4296,"li"),e(4297,"N\xE3o possuir "),i(4298,"code"),e(4299,"help"),t(),e(4300," e "),i(4301,"code"),e(4302,"label"),t(),e(4303,"."),t()(),i(4304,"p")(4305,"strong"),e(4306,"Componentes compat\xEDveis:"),t(),i(4307,"code"),e(4308,"po-datepicker"),t(),e(4309,", "),i(4310,"code"),e(4311,"po-datepicker-range"),t(),e(4312,", "),i(4313,"code"),e(4314,"po-timepicker"),t(),e(4315,", "),i(4316,"code"),e(4317,"po-input"),t(),e(4318,", "),i(4319,"code"),e(4320,"po-number"),t(),e(4321,`,
`),i(4322,"code"),e(4323,"po-decimal"),t(),e(4324,", "),i(4325,"code"),e(4326,"po-select"),t(),e(4327,", "),i(4328,"code"),e(4329,"po-radio-group"),t(),e(4330,", "),i(4331,"code"),e(4332,"po-combo"),t(),e(4333,", "),i(4334,"code"),e(4335,"po-lookup"),t(),e(4336,", "),i(4337,"code"),e(4338,"po-checkbox-group"),t(),e(4339,", "),i(4340,"code"),e(4341,"po-multiselect"),t(),e(4342,`,
`),i(4343,"code"),e(4344,"po-textarea"),t(),e(4345,", "),i(4346,"code"),e(4347,"po-password"),t(),e(4348,"."),t()()(),i(4349,"tr",16)(4350,"td",17)(4351,"div",25)(4352,"span",26),e(4353," options"),n(4354,"br"),t()()(),i(4355,"td",21)(4356,"code",32),e(4357,"Array<string> "),t(),i(4358,"code",71),e(4359," Array<PoSelectOption> "),t(),i(4360,"code",72),e(4361," Array<PoMultiselectOption> "),t(),i(4362,"code",73),e(4363," Array<PoCheckboxGroupOption> "),t(),i(4364,"code",74),e(4365," Array<any>"),t()(),i(4366,"td",24)(4367,"em")(4368,"strong"),e(4369,"(opcional)"),t()(),i(4370,"p"),e(4371,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(4372,"p")(4373,"strong"),e(4374,"Componentes compat\xEDveis:"),t(),i(4375,"code"),e(4376,"po-select"),t(),e(4377,", "),i(4378,"code"),e(4379,"po-radio-group"),t(),e(4380,", "),i(4381,"code"),e(4382,"po-checkbox-group"),t(),e(4383,", "),i(4384,"code"),e(4385,"po-multiselect"),t(),e(4386,"."),t()()(),i(4387,"tr",16)(4388,"td",17)(4389,"div",25)(4390,"span",26),e(4391," optionsMulti"),n(4392,"br"),t()()(),i(4393,"td",21)(4394,"code",29),e(4395,"boolean"),t()(),i(4396,"td",24)(4397,"em")(4398,"strong"),e(4399,"(opcional)"),t()(),i(4400,"p"),e(4401,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(4402,"tr",16)(4403,"td",17)(4404,"div",25)(4405,"span",26),e(4406," optionsService"),n(4407,"br"),t()()(),i(4408,"td",21)(4409,"code",27),e(4410,"string "),t(),i(4411,"code",75),e(4412," PoComboFilter "),t(),i(4413,"code",76),e(4414," PoMultiselectFilter"),t()(),i(4415,"td",24)(4416,"em")(4417,"strong"),e(4418,"(opcional)"),t()(),i(4419,"p"),e(4420,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(4421,"strong"),e(4422,"Importante"),t()(),i(4423,"blockquote")(4424,"p"),e(4425,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(4426,"a",7),e(4427,"guia de API do PO UI"),t(),e(4428,"."),t()()()(),i(4429,"tr",16)(4430,"td",17)(4431,"div",25)(4432,"span",26),e(4433," order"),n(4434,"br"),t()()(),i(4435,"td",21)(4436,"code",45),e(4437,"number"),t()(),i(4438,"td",24)(4439,"em")(4440,"strong"),e(4441,"(opcional)"),t()(),i(4442,"p"),e(4443,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(4444,"p"),e(4445,"Exemplo de utiliza\xE7\xE3o:"),t(),i(4446,"p")(4447,"code"),e(4448,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(4449,"p"),e(4450,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(4451,"code"),e(4452,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(4453,"p"),e(4454,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(4455,"p"),e(4456,"Campos sem "),i(4457,"code"),e(4458,"order"),t(),e(4459,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(4460,"tr",16)(4461,"td",17)(4462,"div",25)(4463,"span",26),e(4464," params"),n(4465,"br"),t()()(),i(4466,"td",21)(4467,"code",33),e(4468,"any"),t()(),i(4469,"td",24)(4470,"em")(4471,"strong"),e(4472,"(opcional)"),t()(),i(4473,"p"),e(4474,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(4475,"code"),e(4476,"po-lookup"),t(),e(4477,` e
`),i(4478,"code"),e(4479,"po-combo"),t(),e(4480,"."),t(),i(4481,"p"),e(4482,"Por exemplo, para o par\xE2metro "),i(4483,"code"),e(4484,"{ age: 23 }"),t(),e(4485," a URL da requisi\xE7\xE3o ficaria:"),t(),i(4486,"p")(4487,"code"),e(4488,"url + ?age=23&filter=Peter"),t()()()(),i(4489,"tr",16)(4490,"td",17)(4491,"div",25)(4492,"span",26),e(4493," pattern"),n(4494,"br"),t()()(),i(4495,"td",21)(4496,"code",27),e(4497,"string"),t()(),i(4498,"td",24)(4499,"em")(4500,"strong"),e(4501,"(opcional)"),t()(),i(4502,"p"),e(4503,"Regex para valida\xE7\xE3o do campo."),t(),i(4504,"p")(4505,"strong"),e(4506,"Componentes compat\xEDveis:"),t(),i(4507,"code"),e(4508,"po-input"),t(),e(4509,", "),i(4510,"code"),e(4511,"po-password"),t(),e(4512,"."),t()()(),i(4513,"tr",16)(4514,"td",17)(4515,"div",25)(4516,"span",26),e(4517," placeholder"),n(4518,"br"),t()()(),i(4519,"td",21)(4520,"code",27),e(4521,"string"),t()(),i(4522,"td",24)(4523,"em")(4524,"strong"),e(4525,"(opcional)"),t()(),i(4526,"p"),e(4527,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t(),i(4528,"p")(4529,"strong"),e(4530,"Componentes compat\xEDveis:"),t(),i(4531,"code"),e(4532,"po-datepicker"),t(),e(4533,", "),i(4534,"code"),e(4535,"po-datepicker-range"),t(),e(4536,", "),i(4537,"code"),e(4538,"po-timepicker"),t(),e(4539,", "),i(4540,"code"),e(4541,"po-input"),t(),e(4542,", "),i(4543,"code"),e(4544,"po-number"),t(),e(4545,", "),i(4546,"code"),e(4547,"po-decimal"),t(),e(4548,", "),i(4549,"code"),e(4550,"po-select"),t(),e(4551,", "),i(4552,"code"),e(4553,"po-combo"),t(),e(4554,", "),i(4555,"code"),e(4556,"po-lookup"),t(),e(4557,", "),i(4558,"code"),e(4559,"po-multiselect"),t(),e(4560,", "),i(4561,"code"),e(4562,"po-textarea"),t(),e(4563,", "),i(4564,"code"),e(4565,"po-password"),t(),e(4566,"."),t()()(),i(4567,"tr",16)(4568,"td",17)(4569,"div",25)(4570,"span",26),e(4571," placeholderSearch"),n(4572,"br"),t()()(),i(4573,"td",21)(4574,"code",27),e(4575,"string"),t()(),i(4576,"td",24)(4577,"em")(4578,"strong"),e(4579,"(opcional)"),t()(),i(4580,"p"),e(4581,"Placeholder do campo de pesquisa do "),i(4582,"code"),e(4583,"po-multiselect"),t(),e(4584,"."),t(),i(4585,"blockquote")(4586,"p"),e(4587,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(4588,"tr",16)(4589,"td",17)(4590,"div",25)(4591,"span",26),e(4592," property"),n(4593,"br"),t()()(),i(4594,"td",21)(4595,"code",27),e(4596,"string"),t()(),i(4597,"td",24)(4598,"p"),e(4599,"Nome de refer\xEAncia do campo."),t()()(),i(4600,"tr",16)(4601,"td",17)(4602,"div",25)(4603,"span",26),e(4604," range"),n(4605,"br"),t()()(),i(4606,"td",21)(4607,"code",29),e(4608,"boolean"),t()(),i(4609,"td",24)(4610,"em")(4611,"strong"),e(4612,"(opcional)"),t()(),i(4613,"p"),e(4614,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(4615,"blockquote")(4616,"p"),e(4617,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(4618,"tr",16)(4619,"td",17)(4620,"div",25)(4621,"span",26),e(4622," rangePresetOptions"),n(4623,"br"),t()()(),i(4624,"td",21)(4625,"code",77),e(4626,"Array<PoCalendarRangePreset>"),t()(),i(4627,"td",24)(4628,"em")(4629,"strong"),e(4630,"(opcional)"),t()(),i(4631,"p"),e(4632,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),t(),i(4633,"p"),e(4634,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),i(4635,"code"),e(4636,"PoCalendarRangePreset"),t(),e(4637,"."),t(),i(4638,"p")(4639,"strong"),e(4640,"Componente compat\xEDvel:"),t(),i(4641,"code"),e(4642,"po-datepicker-range"),t()()()(),i(4643,"tr",16)(4644,"td",17)(4645,"div",25)(4646,"span",26),e(4647," rangePresets"),n(4648,"br"),t()()(),i(4649,"td",21)(4650,"code",29),e(4651,"boolean "),t(),i(4652,"code",32),e(4653," Array<string>"),t()(),i(4654,"td",24)(4655,"em")(4656,"strong"),e(4657,"(opcional)"),t()(),i(4658,"p"),e(4659,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),t(),i(4660,"p"),e(4661,"Aceita os seguintes valores:"),t(),i(4662,"ul")(4663,"li")(4664,"code"),e(4665,"true"),t(),e(4666,": exibe todos os presets padr\xE3o."),t(),i(4667,"li")(4668,"code"),e(4669,"false"),t(),e(4670,": n\xE3o exibe os presets padr\xE3o."),t(),i(4671,"li")(4672,"code"),e(4673,"Array<string>"),t(),e(4674,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),t()(),i(4675,"p")(4676,"strong"),e(4677,"Componente compat\xEDvel:"),t(),i(4678,"code"),e(4679,"po-datepicker-range"),t()()()(),i(4680,"tr",16)(4681,"td",17)(4682,"div",25)(4683,"span",26),e(4684," rangePresetsOrder"),n(4685,"br"),t()()(),i(4686,"td",21)(4687,"code",78),e(4688,"'asc' "),t(),i(4689,"code",79),e(4690," 'desc'"),t()(),i(4691,"td",24)(4692,"em")(4693,"strong"),e(4694,"(opcional)"),t()(),i(4695,"p"),e(4696,"Define a ordena\xE7\xE3o dos presets na lista."),t(),i(4697,"p"),e(4698,"Valores aceitos:"),t(),i(4699,"ul")(4700,"li")(4701,"code"),e(4702,"'asc'"),t(),e(4703,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),t(),i(4704,"li")(4705,"code"),e(4706,"'desc'"),t(),e(4707,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),t()(),i(4708,"p")(4709,"strong"),e(4710,"Componente compat\xEDvel:"),t(),i(4711,"code"),e(4712,"po-datepicker-range"),t()()()(),i(4713,"tr",16)(4714,"td",17)(4715,"div",25)(4716,"span",26),e(4717," readonly"),n(4718,"br"),t()()(),i(4719,"td",21)(4720,"code",29),e(4721,"boolean"),t()(),i(4722,"td",24)(4723,"em")(4724,"strong"),e(4725,"(opcional)"),t()(),i(4726,"p"),e(4727,"Indica que o campo ser\xE1 somente leitura."),t(),i(4728,"p")(4729,"strong"),e(4730,"Componentes compat\xEDveis:"),t(),i(4731,"code"),e(4732,"po-datepicker"),t(),e(4733,", "),i(4734,"code"),e(4735,"po-datepicker-range"),t(),e(4736,", "),i(4737,"code"),e(4738,"po-timepicker"),t(),e(4739,", "),i(4740,"code"),e(4741,"po-input"),t(),e(4742,", "),i(4743,"code"),e(4744,"po-number"),t(),e(4745,`,
`),i(4746,"code"),e(4747,"po-decimal"),t(),e(4748,", "),i(4749,"code"),e(4750,"po-select"),t(),e(4751,", "),i(4752,"code"),e(4753,"po-textarea"),t(),e(4754,", "),i(4755,"code"),e(4756,"po-password"),t(),e(4757,"."),t()()(),i(4758,"tr",16)(4759,"td",17)(4760,"div",25)(4761,"span",26),e(4762," removeInitialFilter"),n(4763,"br"),t()()(),i(4764,"td",21)(4765,"code",29),e(4766,"boolean"),t()(),i(4767,"td",24)(4768,"em")(4769,"strong"),e(4770,"(opcional)"),t()(),i(4771,"p"),e(4772,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(4773,"blockquote")(4774,"p"),e(4775,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(4776,"p")(4777,"strong"),e(4778,"Componente compat\xEDvel"),t(),e(4779,": "),i(4780,"code"),e(4781,"po-combo"),t()()()(),i(4782,"tr",16)(4783,"td",17)(4784,"div",25)(4785,"span",26),e(4786," required"),n(4787,"br"),t()()(),i(4788,"td",21)(4789,"code",29),e(4790,"boolean"),t()(),i(4791,"td",24)(4792,"em")(4793,"strong"),e(4794,"(opcional)"),t()(),i(4795,"p"),e(4796,"Define a obrigatoriedade do campo."),t(),i(4797,"p")(4798,"strong"),e(4799,"Componentes compat\xEDveis:"),t(),i(4800,"code"),e(4801,"po-datepicker"),t(),e(4802,", "),i(4803,"code"),e(4804,"po-datepicker-range"),t(),e(4805,", "),i(4806,"code"),e(4807,"po-timepicker"),t(),e(4808,", "),i(4809,"code"),e(4810,"po-input"),t(),e(4811,", "),i(4812,"code"),e(4813,"po-number"),t(),e(4814,`,
`),i(4815,"code"),e(4816,"po-decimal"),t(),e(4817,", "),i(4818,"code"),e(4819,"po-select"),t(),e(4820,", "),i(4821,"code"),e(4822,"po-radio-group"),t(),e(4823,", "),i(4824,"code"),e(4825,"po-combo"),t(),e(4826,", "),i(4827,"code"),e(4828,"po-lookup"),t(),e(4829,", "),i(4830,"code"),e(4831,"po-checkbox-group"),t(),e(4832,", "),i(4833,"code"),e(4834,"po-multiselect"),t(),e(4835,`,
`),i(4836,"code"),e(4837,"po-textarea"),t(),e(4838,", "),i(4839,"code"),e(4840,"po-password``, "),t(),e(4841,"po-upload`."),t()()(),i(4842,"tr",16)(4843,"td",17)(4844,"div",25)(4845,"span",26),e(4846," requiredFieldErrorMessage"),n(4847,"br"),t()()(),i(4848,"td",21)(4849,"code",29),e(4850,"boolean"),t()(),i(4851,"td",24)(4852,"em")(4853,"strong"),e(4854,"(opcional)"),t()(),i(4855,"p"),e(4856,"Exibe a mensagem setada na propriedade "),i(4857,"code"),e(4858,"errorMessage"),t(),e(4859," se o campo estiver vazio e for requerido."),t(),i(4860,"blockquote")(4861,"p"),e(4862,"Necess\xE1rio que a propriedade "),i(4863,"code"),e(4864,"required"),t(),e(4865," esteja habilitada."),t()(),i(4866,"p")(4867,"strong"),e(4868,"Componentes compat\xEDveis:"),t(),i(4869,"code"),e(4870,"po-datepicker"),t(),e(4871,", "),i(4872,"code"),e(4873,"po-timepicker"),t(),e(4874,", "),i(4875,"code"),e(4876,"po-input"),t(),e(4877,", "),i(4878,"code"),e(4879,"po-number"),t(),e(4880,", "),i(4881,"code"),e(4882,"po-decimal"),t(),e(4883,", "),i(4884,"code"),e(4885,"po-password"),t(),e(4886,"."),t()()(),i(4887,"tr",16)(4888,"td",17)(4889,"div",25)(4890,"span",26),e(4891," restrictions"),n(4892,"br"),t()()(),i(4893,"td",21)(4894,"code",80),e(4895,"PoUploadFileRestrictions"),t()(),i(4896,"td",24)(4897,"em")(4898,"strong"),e(4899,"(opcional)"),t()(),i(4900,"p"),e(4901,"Objeto que segue a defini\xE7\xE3o da interface "),i(4902,"code"),e(4903,"PoUploadFileRestrictions"),t(),e(4904,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4905,"p")(4906,"strong"),e(4907,"Componente compat\xEDvel"),t(),e(4908,": "),i(4909,"code"),e(4910,"po-upload"),t()()()(),i(4911,"tr",16)(4912,"td",17)(4913,"div",25)(4914,"span",26),e(4915," rows"),n(4916,"br"),t()()(),i(4917,"td",21)(4918,"code",45),e(4919,"number"),t()(),i(4920,"td",24)(4921,"em")(4922,"strong"),e(4923,"(opcional)"),t()(),i(4924,"p"),e(4925,"Quantidade de linhas exibidas no "),i(4926,"code"),e(4927,"po-textarea"),t(),e(4928,"."),t()()(),i(4929,"tr",16)(4930,"td",17)(4931,"div",25)(4932,"span",26),e(4933," searchService"),n(4934,"br"),t()()(),i(4935,"td",21)(4936,"code",27),e(4937,"string "),t(),i(4938,"code",34),e(4939," PoLookupFilter"),t()(),i(4940,"td",24)(4941,"em")(4942,"strong"),e(4943,"(opcional)"),t()(),i(4944,"p"),e(4945,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4946,"code"),e(4947,"columns"),t(),e(4948,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4949,"strong"),e(4950,"Importante:"),t()(),i(4951,"blockquote")(4952,"p"),e(4953,"Caso utilizar a propriedade "),i(4954,"code"),e(4955,"optionsService"),t(),e(4956,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4957,"a",7),e(4958,"guia de API do PO UI"),t(),e(4959,"."),t()()()(),i(4960,"tr",16)(4961,"td",17)(4962,"div",25)(4963,"span",26),e(4964," secondInterval"),n(4965,"br"),t()()(),i(4966,"td",21)(4967,"code",45),e(4968,"number"),t()(),i(4969,"td",24)(4970,"em")(4971,"strong"),e(4972,"(opcional)"),t()(),i(4973,"p"),e(4974,"Define o intervalo entre os segundos exibidos no painel do timepicker."),t()()(),i(4975,"tr",16)(4976,"td",17)(4977,"div",25)(4978,"span",26),e(4979," secret"),n(4980,"br"),t()()(),i(4981,"td",21)(4982,"code",29),e(4983,"boolean"),t()(),i(4984,"td",24)(4985,"em")(4986,"strong"),e(4987,"(opcional)"),t()(),i(4988,"p"),e(4989,"Esconde a informa\xE7\xE3o estilo "),i(4990,"em"),e(4991,"password"),t(),e(4992,", pode ser utilizado quando o tipo de dado for "),i(4993,"em"),e(4994,"string"),t(),e(4995,"."),t()()(),i(4996,"tr",16)(4997,"td",17)(4998,"div",25)(4999,"span",26),e(5e3," showRequired"),n(5001,"br"),t()()(),i(5002,"td",21)(5003,"code",29),e(5004,"boolean"),t()(),i(5005,"td",24)(5006,"em")(5007,"strong"),e(5008,"(opcional)"),t()(),i(5009,"p"),e(5010,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(5011,"blockquote")(5012,"p"),e(5013,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(5014,"ul")(5015,"li"),e(5016,"N\xE3o possuir "),i(5017,"code"),e(5018,"p-help"),t(),e(5019," e/ou "),i(5020,"code"),e(5021,"p-label"),t(),e(5022,"."),t()(),i(5023,"p")(5024,"strong"),e(5025,"Componentes compat\xEDveis:"),t(),i(5026,"code"),e(5027,"po-datepicker"),t(),e(5028,", "),i(5029,"code"),e(5030,"po-datepicker-range"),t(),e(5031,", "),i(5032,"code"),e(5033,"po-timepicker"),t(),e(5034,", "),i(5035,"code"),e(5036,"po-input"),t(),e(5037,", "),i(5038,"code"),e(5039,"po-number"),t(),e(5040,`,
`),i(5041,"code"),e(5042,"po-decimal"),t(),e(5043,", "),i(5044,"code"),e(5045,"po-select"),t(),e(5046,", "),i(5047,"code"),e(5048,"po-radio-group"),t(),e(5049,", "),i(5050,"code"),e(5051,"po-combo"),t(),e(5052,", "),i(5053,"code"),e(5054,"po-lookup"),t(),e(5055,", "),i(5056,"code"),e(5057,"po-checkbox-group"),t(),e(5058,", "),i(5059,"code"),e(5060,"po-multiselect"),t(),e(5061,`,
`),i(5062,"code"),e(5063,"po-textarea"),t(),e(5064,", "),i(5065,"code"),e(5066,"po-password"),t(),e(5067,", "),i(5068,"code"),e(5069,"po-upload"),t(),e(5070,"."),t()()(),i(5071,"tr",16)(5072,"td",17)(5073,"div",25)(5074,"span",26),e(5075," showSeconds"),n(5076,"br"),t()()(),i(5077,"td",21)(5078,"code",29),e(5079,"boolean"),t()(),i(5080,"td",24)(5081,"em")(5082,"strong"),e(5083,"(opcional)"),t()(),i(5084,"p"),e(5085,"Exibe a coluna de segundos no painel do timepicker."),t()()(),i(5086,"tr",16)(5087,"td",17)(5088,"div",25)(5089,"span",26),e(5090," showThumbnail"),n(5091,"br"),t()()(),i(5092,"td",21)(5093,"code",29),e(5094,"boolean"),t()(),i(5095,"td",24)(5096,"em")(5097,"strong"),e(5098,"(opcional)"),t()(),i(5099,"p"),e(5100,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),i(5101,"blockquote")(5102,"p"),e(5103,"Propriedade funciona apenas em arquivos de formato de imagem ("),i(5104,"code"),e(5105,".png"),t(),e(5106,", "),i(5107,"code"),e(5108,".jpg"),t(),e(5109,", "),i(5110,"code"),e(5111,".jpeg"),t(),e(5112," e "),i(5113,"code"),e(5114,".gif"),t(),e(5115,")."),t()(),i(5116,"p")(5117,"strong"),e(5118,"Componente compat\xEDvel"),t(),e(5119,": "),i(5120,"code"),e(5121,"po-upload"),t()()()(),i(5122,"tr",16)(5123,"td",17)(5124,"div",25)(5125,"span",26),e(5126," size"),n(5127,"br"),t()()(),i(5128,"td",21)(5129,"code",27),e(5130,"string"),t()(),i(5131,"td",24)(5132,"em")(5133,"strong"),e(5134,"(opcional)"),t()(),i(5135,"p"),e(5136,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(5137,"ul")(5138,"li")(5139,"code"),e(5140,"small"),t(),e(5141,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(5142,"li")(5143,"code"),e(5144,"medium"),t(),e(5145,": aplica a medida medium de cada componente."),t(),i(5146,"li")(5147,"code"),e(5148,"large"),t(),e(5149,": aplica a medida large de cada componente (dispon\xEDvel para "),i(5150,"code"),e(5151,"po-checkbox"),t(),e(5152," e "),i(5153,"code"),e(5154,"po-radio-group"),t(),e(5155,")."),i(5156,"blockquote")(5157,"p"),e(5158,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(5159,"code"),e(5160,"medium"),t(),e(5161,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(5162,"a",40),e(5163,"po-theme"),t(),e(5164,"."),t()()()()()(),i(5165,"tr",16)(5166,"td",17)(5167,"div",25)(5168,"span",26),e(5169," sort"),n(5170,"br"),t()()(),i(5171,"td",21)(5172,"code",29),e(5173,"boolean"),t()(),i(5174,"td",24)(5175,"em")(5176,"strong"),e(5177,"(opcional)"),t()(),i(5178,"p"),e(5179,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(5180,"p")(5181,"strong"),e(5182,"Componentes compat\xEDveis:"),t(),i(5183,"code"),e(5184,"po-combo"),t(),e(5185,", po-multiselect"),t()()(),i(5186,"tr",16)(5187,"td",17)(5188,"div",25)(5189,"span",26),e(5190," step"),n(5191,"br"),t()()(),i(5192,"td",21)(5193,"code",45),e(5194,"number"),t()(),i(5195,"td",24)(5196,"em")(5197,"strong"),e(5198,"(opcional)"),t()(),i(5199,"p"),e(5200,"Intervalo utilizado no "),i(5201,"code"),e(5202,"po-number"),t(),e(5203,"."),t()()(),i(5204,"tr",16)(5205,"td",17)(5206,"div",25)(5207,"span",26),e(5208," thousandMaxlength"),n(5209,"br"),t()()(),i(5210,"td",21)(5211,"code",45),e(5212,"number"),t()(),i(5213,"td",24)(5214,"em")(5215,"strong"),e(5216,"(opcional)"),t()(),i(5217,"p"),e(5218,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(5219,"blockquote")(5220,"p"),e(5221,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(5222,"code"),e(5223,"type"),t(),e(5224," for "),i(5225,"em"),e(5226,"currency"),t(),e(5227," ou "),i(5228,"em"),e(5229,"decimal"),t(),e(5230,"."),t()()()(),i(5231,"tr",16)(5232,"td",17)(5233,"div",25)(5234,"span",26),e(5235," type"),n(5236,"br"),t()()(),i(5237,"td",21)(5238,"code",27),e(5239,"string "),t(),i(5240,"code",81),e(5241," PoDynamicFieldType"),t()(),i(5242,"td",24)(5243,"em")(5244,"strong"),e(5245,"(opcional)"),t()(),i(5246,"p"),e(5247,"Tipo do valor campo."),t(),i(5248,"p"),e(5249,"Valores v\xE1lidos:"),t(),i(5250,"ul")(5251,"li")(5252,"code"),e(5253,"boolean"),t(),e(5254,": Valores "),i(5255,"em"),e(5256,"booleanos"),t(),e(5257,"."),t(),i(5258,"li")(5259,"code"),e(5260,"currency"),t(),e(5261,": Valores monet\xE1rios."),t(),i(5262,"li")(5263,"code"),e(5264,"decimal"),t(),e(5265,": Valores decimais."),t(),i(5266,"li")(5267,"code"),e(5268,"date"),t(),e(5269,": Valores de datas."),i(5270,"ul")(5271,"li"),e(5272,"Aceita os tipos "),i(5273,"strong"),e(5274,"string"),t(),e(5275," e "),i(5276,"strong"),e(5277,"Date"),t(),e(5278,` padr\xE3o do Javascript,
por exemplo: `),i(5279,"code"),e(5280,"'2017-11-28'"),t(),e(5281," ou "),i(5282,"code"),e(5283,"new Date(2017, 10, 28)"),t(),e(5284,"."),t()()(),i(5285,"li")(5286,"code"),e(5287,"dateTime"),t(),e(5288,": Valor de data com hor\xE1rio."),i(5289,"ul")(5290,"li"),e(5291,"Aceita o tipo "),i(5292,"em"),e(5293,"string"),t(),e(5294," no formato "),i(5295,"strong"),e(5296,"ISO-8601"),t(),e(5297," extendido "),i(5298,"strong"),e(5299,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(5300,`
e o tipo `),i(5301,"strong"),e(5302,"Date"),t(),e(5303," padr\xE3o do Javascript, por exemplo: "),i(5304,"code"),e(5305,"'2017-11-28T00:00:00-02:00'"),t(),e(5306," ou "),i(5307,"code"),e(5308,"new Date(2017, 10, 28)"),t(),e(5309,"."),t()()(),i(5310,"li")(5311,"code"),e(5312,"number"),t(),e(5313,": Valores num\xE9ricos."),t(),i(5314,"li")(5315,"code"),e(5316,"string"),t(),e(5317,": Textos."),t(),i(5318,"li")(5319,"code"),e(5320,"time"),t(),e(5321,": Valor do hor\xE1rio."),i(5322,"ul")(5323,"li"),e(5324,"Aceita o tipo "),i(5325,"strong"),e(5326,"string"),t(),e(5327," nos formatos "),i(5328,"strong"),e(5329,"'HH:mm:ss'"),t(),e(5330," ou "),i(5331,"strong"),e(5332,"'HH:mm:ss.ffffff'"),t(),e(5333,", por exemplo: "),i(5334,"code"),e(5335,"'23:12:45'"),t(),e(5336,"."),t()()()()()(),i(5337,"tr",16)(5338,"td",17)(5339,"div",25)(5340,"span",26),e(5341," url"),n(5342,"br"),t()()(),i(5343,"td",21)(5344,"code",27),e(5345,"string"),t()(),i(5346,"td",24)(5347,"em")(5348,"strong"),e(5349,"(opcional)"),t()(),i(5350,"p"),e(5351,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(5352,"p")(5353,"strong"),e(5354,"Componente compat\xEDvel"),t(),e(5355,": "),i(5356,"code"),e(5357,"po-upload"),t()()()(),i(5358,"tr",16)(5359,"td",17)(5360,"div",25)(5361,"span",26),e(5362," validate"),n(5363,"br"),t()()(),i(5364,"td",21)(5365,"code",27),e(5366,"string "),t(),i(5367,"code",44),e(5368," Function"),t()(),i(5369,"td",24)(5370,"em")(5371,"strong"),e(5372,"(opcional)"),t()(),i(5373,"p"),e(5374,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(5375,"strong"),e(5376,"mudan\xE7as do campo"),t(),e(5377,"."),t(),i(5378,"ul")(5379,"li"),e(5380,"A propriedade aceita os seguintes tipos:"),t()(),i(5381,"ul")(5382,"li")(5383,"strong"),e(5384,"String"),t(),e(5385,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(5386,"code"),e(5387,"POST"),t(),e(5388,"."),t(),i(5389,"li")(5390,"strong"),e(5391,"Function"),t(),e(5392,": M\xE9todo que ser\xE1 executado."),t()(),i(5393,"p"),e(5394,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(5395,"code"),e(5396,"PoDynamicFormFieldChanged"),t(),e(5397,":"),t(),i(5398,"p")(5399,"code"),e(5400,"{ property: 'property name', value: 'new value' }"),t()(),i(5401,"p"),e(5402,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(5403,"a",82),e(5404,"PoDynamicFormFieldValidation"),t(),e(5405,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(5406,"pre")(5407,"code"),e(5408,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(5409,"p"),e(5410,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(5411,"code"),e(5412,"bind"),t(),e(5413,`, por exemplo:
`),i(5414,"code"),e(5415,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(5416,"tr",16)(5417,"td",17)(5418,"div",25)(5419,"span",26),e(5420," visible"),n(5421,"br"),t()()(),i(5422,"td",21)(5423,"code",29),e(5424,"boolean"),t()(),i(5425,"td",24)(5426,"em")(5427,"strong"),e(5428,"(opcional)"),t()(),i(5429,"p"),e(5430,"Indica se o campo ser\xE1 vis\xEDvel."),t()()(),i(5431,"tr",16)(5432,"td",17)(5433,"div",25)(5434,"span",26),e(5435," yearRangeLimit"),n(5436,"br"),t()()(),i(5437,"td",21)(5438,"code",45),e(5439,"number"),t()(),i(5440,"td",24)(5441,"em")(5442,"strong"),e(5443,"(opcional)"),t()(),i(5444,"p"),e(5445,"Define o limite de anos exibidos na lista de anos do "),i(5446,"code"),e(5447,"po-datepicker"),t(),e(5448," nos modos "),i(5449,"code"),e(5450,"month-year"),t(),e(5451," e "),i(5452,"code"),e(5453,"year"),t(),e(5454,"."),t()()()(),i(5455,"h4",43)(5456,"code",5),e(5457,"PoLookupColumn"),t()(),i(5458,"div",2)(5459,"p"),e(5460,"Interface para configura\xE7\xE3o das colunas do po-lookup."),t()(),i(5461,"h4",12),e(5462,"Propriedades"),t(),i(5463,"table",13)(5464,"tr",14)(5465,"th",15),e(5466,"Nome"),t(),i(5467,"th",15),e(5468,"Tipo"),t(),i(5469,"th",15),e(5470,"Descri\xE7\xE3o"),t()(),i(5471,"tr",16)(5472,"td",17)(5473,"div",25)(5474,"span",26),e(5475," fieldLabel"),n(5476,"br"),t()()(),i(5477,"td",21)(5478,"code",29),e(5479,"boolean"),t()(),i(5480,"td",24)(5481,"em")(5482,"strong"),e(5483,"(opcional)"),t()(),i(5484,"p"),e(5485,"Indica que a coluna ser\xE1 utilizada como valor do campo e como filtro dentro da modal."),t(),i(5486,"p"),e(5487,`Se houver mais de uma configura\xE7\xE3o habilitada, \xE9 exibido os valores no campo concatenados separados
por um tra\xE7o("-"). Por exemplo: "Joinville - SC".`),t(),i(5488,"p"),e(5489,`Importante
Esta configura\xE7\xE3o se torna obsoleta caso os atributos `),i(5490,"code"),e(5491,"p-field-format"),t(),e(5492," ou "),i(5493,"code"),e(5494,"p-field-label"),t(),e(5495," forem configurados no componente."),t()()(),i(5496,"tr",16)(5497,"td",17)(5498,"div",25)(5499,"span",26),e(5500," format"),n(5501,"br"),t()()(),i(5502,"td",21)(5503,"code",27),e(5504,"string"),t()(),i(5505,"td",24)(5506,"em")(5507,"strong"),e(5508,"(opcional)"),t()(),i(5509,"p"),e(5510,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(5511,"ul")(5512,"li"),e(5513,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(5514,"li"),e(5515,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(5516,"tr",16)(5517,"td",17)(5518,"div",25)(5519,"span",26),e(5520," label"),n(5521,"br"),t()()(),i(5522,"td",21)(5523,"code",27),e(5524,"string"),t()(),i(5525,"td",24)(5526,"em")(5527,"strong"),e(5528,"(opcional)"),t()(),i(5529,"p"),e(5530,"Texto para t\xEDtulo da coluna."),t(),i(5531,"p"),e(5532,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(5533,"em"),e(5534,"label"),t(),e(5535," o valor da propriedade "),i(5536,"em"),e(5537,"property"),t(),e(5538," com a primeira letra em mai\xFAsculo."),t()()(),i(5539,"tr",16)(5540,"td",17)(5541,"div",25)(5542,"span",26),e(5543," property"),n(5544,"br"),t()()(),i(5545,"td",21)(5546,"code",27),e(5547,"string"),t()(),i(5548,"td",24)(5549,"em")(5550,"strong"),e(5551,"(opcional)"),t()(),i(5552,"p"),e(5553,"Nome identificador da coluna."),t()()(),i(5554,"tr",16)(5555,"td",17)(5556,"div",25)(5557,"span",26),e(5558," type"),n(5559,"br"),t()()(),i(5560,"td",21)(5561,"code",27),e(5562,"string"),t()(),i(5563,"td",24)(5564,"em")(5565,"strong"),e(5566,"(opcional)"),t()(),i(5567,"p"),e(5568,"Tipo da coluna:"),t(),i(5569,"ul")(5570,"li"),e(5571,"string (padr\xE3o): textos"),t(),i(5572,"li"),e(5573,"number: valores num\xE9ricos"),t(),i(5574,"li"),e(5575,"date: data"),t(),i(5576,"li"),e(5577,"currency: valores monet\xE1rios"),t(),i(5578,"li"),e(5579,"dateTime: data e hora"),t()()()(),i(5580,"tr",16)(5581,"td",17)(5582,"div",25)(5583,"span",26),e(5584," width"),n(5585,"br"),t()()(),i(5586,"td",21)(5587,"code",27),e(5588,"string"),t()(),i(5589,"td",24)(5590,"em")(5591,"strong"),e(5592,"(opcional)"),t()(),i(5593,"p"),e(5594,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()(),i(5595,"h4",43)(5596,"code",5),e(5597,"PoLookupFilter"),t()(),i(5598,"div",2)(5599,"p"),e(5600,"Define o tipo de busca utilizado no po-lookup."),t()(),i(5601,"h4",12),e(5602,"M\xE9todos"),t(),i(5603,"table",41)(5604,"tr",16)(5605,"th",42)(5606,"div",25)(5607,"h4")(5608,"span",26),e(5609," getFilteredItems "),t()()()()(),i(5610,"tr",24)(5611,"td",24)(5612,"p"),e(5613,`M\xE9todo que ser\xE1 disparado ao filtrar a lista de itens ou carregar mais resultados no componente, deve-se retornar
um `),i(5614,"em"),e(5615,"Observable"),t(),e(5616," com a resposta da API no formato da interface "),i(5617,"code"),e(5618,"PoLookupResponseApi"),t(),e(5619,"."),t()()()(),i(5620,"h5")(5621,"b"),e(5622,"Par\xE2metros"),t()(),i(5623,"table",13)(5624,"tr",14)(5625,"th",15),e(5626,"Nome"),t(),i(5627,"th",15),e(5628,"Tipo"),t(),i(5629,"th",15),e(5630,"Descri\xE7\xE3o"),t()(),i(5631,"tr",16)(5632,"td",17),e(5633," params"),t(),i(5634,"td",21)(5635,"code",83),e(5636," PoLookupFilteredItemsParams "),t()(),i(5637,"td",24)(5638,"p"),e(5639,"Objeto enviado por par\xE2metro que implementa a interface "),i(5640,"code"),e(5641,"PoLookupFilteredItemsParams"),t(),e(5642,"."),t()()()(),n(5643,"br"),i(5644,"table",41)(5645,"tr",16)(5646,"th",42)(5647,"div",25)(5648,"h4")(5649,"span",26),e(5650," getObjectByValue "),t()()()()(),i(5651,"tr",24)(5652,"td",24)(5653,"p"),e(5654,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(5655,"p"),e(5656,`Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o estver habilitada, o parametro value ser\xE1 enviado como uma lista de valores
e o observable deve retornar uma lista de objetos.`),t()()()(),i(5657,"h5")(5658,"b"),e(5659,"Par\xE2metros"),t()(),i(5660,"table",13)(5661,"tr",14)(5662,"th",15),e(5663,"Nome"),t(),i(5664,"th",15),e(5665,"Tipo"),t(),i(5666,"th",15),e(5667,"Descri\xE7\xE3o"),t()(),i(5668,"tr",16)(5669,"td",17),e(5670," value"),t(),i(5671,"td",21)(5672,"code",27),e(5673," string "),t(),i(5674,"code",74),e(5675," Array<any> "),t()(),i(5676,"td",24)(5677,"p"),e(5678,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(5679,"tr",16)(5680,"td",17),e(5681," filterParams"),t(),i(5682,"td",21)(5683,"code",83),e(5684," any "),t()(),i(5685,"td",24)(5686,"p"),e(5687,"Valor informado atrav\xE9s da propriedade "),i(5688,"code"),e(5689,"p-filter-params"),t(),e(5690,"."),t()()()(),n(5691,"br"),i(5692,"h4",43)(5693,"code",5),e(5694,"PoLookupFilteredItemsParams"),t()(),i(5695,"div",2)(5696,"p"),e(5697,"Interface do objeto enviado como par\xE2metro na fun\xE7\xE3o "),i(5698,"code"),e(5699,"getFilteredItems"),t(),e(5700,"."),t()(),i(5701,"h4",12),e(5702,"Propriedades"),t(),i(5703,"table",13)(5704,"tr",14)(5705,"th",15),e(5706,"Nome"),t(),i(5707,"th",15),e(5708,"Tipo"),t(),i(5709,"th",15),e(5710,"Descri\xE7\xE3o"),t()(),i(5711,"tr",16)(5712,"td",17)(5713,"div",25)(5714,"span",26),e(5715," advancedFilters"),n(5716,"br"),t()()(),i(5717,"td",21)(5718,"code",84),e(5719,`{ [key: string]: any;
}`),t()(),i(5720,"td",24)(5721,"em")(5722,"strong"),e(5723,"(opcional)"),t()(),i(5724,"p"),e(5725,"Valores informados nos campos de busca avan\xE7ada, que ser\xE3o utilizados para filtrar a lista de itens."),t()()(),i(5726,"tr",16)(5727,"td",17)(5728,"div",25)(5729,"span",26),e(5730," filter"),n(5731,"br"),t()()(),i(5732,"td",21)(5733,"code",27),e(5734,"string"),t()(),i(5735,"td",24)(5736,"em")(5737,"strong"),e(5738,"(opcional)"),t()(),i(5739,"p"),e(5740,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(5741,"tr",16)(5742,"td",17)(5743,"div",25)(5744,"span",26),e(5745," filterParams"),n(5746,"br"),t()()(),i(5747,"td",21)(5748,"code",33),e(5749,"any"),t()(),i(5750,"td",24)(5751,"em")(5752,"strong"),e(5753,"(opcional)"),t()(),i(5754,"p"),e(5755,"Valor informado atrav\xE9s da propriedade "),i(5756,"code"),e(5757,"p-filter-params"),t(),e(5758,"."),t()()(),i(5759,"tr",16)(5760,"td",17)(5761,"div",25)(5762,"span",26),e(5763," order"),n(5764,"br"),t()()(),i(5765,"td",21)(5766,"code",27),e(5767,"string"),t()(),i(5768,"td",24)(5769,"em")(5770,"strong"),e(5771,"(opcional)"),t()(),i(5772,"p"),e(5773,"Coluna que est\xE1 sendo ordenada na tabela."),t(),i(5774,"ul")(5775,"li"),e(5776,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(5777,"code"),e(5778,"-<colunaOrdenada>"),t(),e(5779,", por exemplo "),i(5780,"code"),e(5781,"-name"),t(),e(5782,"."),t(),i(5783,"li"),e(5784,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(5785,"code"),e(5786,"<colunaOrdenada>"),t(),e(5787,", por exemplo "),i(5788,"code"),e(5789,"name"),t(),e(5790,"."),t()()()(),i(5791,"tr",16)(5792,"td",17)(5793,"div",25)(5794,"span",26),e(5795," page"),n(5796,"br"),t()()(),i(5797,"td",21)(5798,"code",45),e(5799,"number"),t()(),i(5800,"td",24)(5801,"em")(5802,"strong"),e(5803,"(opcional)"),t()(),i(5804,"p"),e(5805,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(5806,"tr",16)(5807,"td",17)(5808,"div",25)(5809,"span",26),e(5810," pageSize"),n(5811,"br"),t()()(),i(5812,"td",21)(5813,"code",45),e(5814,"number"),t()(),i(5815,"td",24)(5816,"em")(5817,"strong"),e(5818,"(opcional)"),t()(),i(5819,"p"),e(5820,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()(),i(5821,"h4",43)(5822,"code",5),e(5823,"PoLookupLiterals"),t()(),i(5824,"div",2)(5825,"p"),e(5826,"Interface para defini\xE7\xE3o das literais usadas no "),i(5827,"code"),e(5828,"po-lookup"),t(),e(5829,"."),t()(),i(5830,"h4",12),e(5831,"Propriedades"),t(),i(5832,"table",13)(5833,"tr",14)(5834,"th",15),e(5835,"Nome"),t(),i(5836,"th",15),e(5837,"Tipo"),t(),i(5838,"th",15),e(5839,"Descri\xE7\xE3o"),t()(),i(5840,"tr",16)(5841,"td",17)(5842,"div",25)(5843,"span",26),e(5844," clean"),n(5845,"br"),t()()(),i(5846,"td",21)(5847,"code",27),e(5848,"string"),t()(),i(5849,"td",24)(5850,"em")(5851,"strong"),e(5852,"(opcional)"),t()(),i(5853,"p"),e(5854,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de limpar."),t()()(),i(5855,"tr",16)(5856,"td",17)(5857,"div",25)(5858,"span",26),e(5859," modalAdvancedSearch"),n(5860,"br"),t()()(),i(5861,"td",21)(5862,"code",27),e(5863,"string"),t()(),i(5864,"td",24)(5865,"em")(5866,"strong"),e(5867,"(opcional)"),t()(),i(5868,"p"),e(5869,"Texto do link de busca avan\xE7ada."),t(),i(5870,"p"),e(5871,`Importante
Caso seja passado uma literal muito comprida poder\xE1 quebrar o layout.`),t()()(),i(5872,"tr",16)(5873,"td",17)(5874,"div",25)(5875,"span",26),e(5876," modalAdvancedSearchPrimaryActionLabel"),n(5877,"br"),t()()(),i(5878,"td",21)(5879,"code",27),e(5880,"string"),t()(),i(5881,"td",24)(5882,"em")(5883,"strong"),e(5884,"(opcional)"),t()(),i(5885,"p"),e(5886,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5887,"tr",16)(5888,"td",17)(5889,"div",25)(5890,"span",26),e(5891," modalAdvancedSearchSecondaryActionLabel"),n(5892,"br"),t()()(),i(5893,"td",21)(5894,"code",27),e(5895,"string"),t()(),i(5896,"td",24)(5897,"em")(5898,"strong"),e(5899,"(opcional)"),t()(),i(5900,"p"),e(5901,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal de busca avan\xE7ada."),t()()(),i(5902,"tr",16)(5903,"td",17)(5904,"div",25)(5905,"span",26),e(5906," modalAdvancedSearchTitle"),n(5907,"br"),t()()(),i(5908,"td",21)(5909,"code",27),e(5910,"string"),t()(),i(5911,"td",24)(5912,"em")(5913,"strong"),e(5914,"(opcional)"),t()(),i(5915,"p"),e(5916,"Texto exibido no t\xEDtulo da modal de busca avan\xE7ada."),t()()(),i(5917,"tr",16)(5918,"td",17)(5919,"div",25)(5920,"span",26),e(5921," modalDisclaimerGroupTitle"),n(5922,"br"),t()()(),i(5923,"td",21)(5924,"code",27),e(5925,"string"),t()(),i(5926,"td",24)(5927,"em")(5928,"strong"),e(5929,"(opcional)"),t()(),i(5930,"p"),e(5931,"Texto exibido no t\xEDtulo do disclaimer."),t()()(),i(5932,"tr",16)(5933,"td",17)(5934,"div",25)(5935,"span",26),e(5936," modalPlaceholder"),n(5937,"br"),t()()(),i(5938,"td",21)(5939,"code",27),e(5940,"string"),t()(),i(5941,"td",24)(5942,"em")(5943,"strong"),e(5944,"(opcional)"),t()(),i(5945,"p"),e(5946,"Texto exibido no placeholder do input da modal."),t()()(),i(5947,"tr",16)(5948,"td",17)(5949,"div",25)(5950,"span",26),e(5951," modalPrimaryActionLabel"),n(5952,"br"),t()()(),i(5953,"td",21)(5954,"code",27),e(5955,"string"),t()(),i(5956,"td",24)(5957,"em")(5958,"strong"),e(5959,"(opcional)"),t()(),i(5960,"p"),e(5961,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(5962,"tr",16)(5963,"td",17)(5964,"div",25)(5965,"span",26),e(5966," modalSecondaryActionLabel"),n(5967,"br"),t()()(),i(5968,"td",21)(5969,"code",27),e(5970,"string"),t()(),i(5971,"td",24)(5972,"em")(5973,"strong"),e(5974,"(opcional)"),t()(),i(5975,"p"),e(5976,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(5977,"tr",16)(5978,"td",17)(5979,"div",25)(5980,"span",26),e(5981," modalTableLoadMoreData"),n(5982,"br"),t()()(),i(5983,"td",21)(5984,"code",27),e(5985,"string"),t()(),i(5986,"td",24)(5987,"em")(5988,"strong"),e(5989,"(opcional)"),t()(),i(5990,"p"),e(5991,"Label do "),i(5992,"code"),e(5993,"button"),t(),e(5994," que deve carregar mais resultados na tabela, ou seja, exibir mais itens."),t()()(),i(5995,"tr",16)(5996,"td",17)(5997,"div",25)(5998,"span",26),e(5999," modalTableLoadingData"),n(6e3,"br"),t()()(),i(6001,"td",21)(6002,"code",27),e(6003,"string"),t()(),i(6004,"td",24)(6005,"em")(6006,"strong"),e(6007,"(opcional)"),t()(),i(6008,"p"),e(6009,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),t()()(),i(6010,"tr",16)(6011,"td",17)(6012,"div",25)(6013,"span",26),e(6014," modalTableNoColumns"),n(6015,"br"),t()()(),i(6016,"td",21)(6017,"code",27),e(6018,"string"),t()(),i(6019,"td",24)(6020,"em")(6021,"strong"),e(6022,"(opcional)"),t()(),i(6023,"p"),e(6024,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),t()()(),i(6025,"tr",16)(6026,"td",17)(6027,"div",25)(6028,"span",26),e(6029," modalTableNoData"),n(6030,"br"),t()()(),i(6031,"td",21)(6032,"code",27),e(6033,"string"),t()(),i(6034,"td",24)(6035,"em")(6036,"strong"),e(6037,"(opcional)"),t()(),i(6038,"p"),e(6039,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),t()()(),i(6040,"tr",16)(6041,"td",17)(6042,"div",25)(6043,"span",26),e(6044," modalTitle"),n(6045,"br"),t()()(),i(6046,"td",21)(6047,"code",27),e(6048,"string"),t()(),i(6049,"td",24)(6050,"em")(6051,"strong"),e(6052,"(opcional)"),t()(),i(6053,"p"),e(6054,"Texto exibido no t\xEDtulo da modal."),t()()(),i(6055,"tr",16)(6056,"td",17)(6057,"div",25)(6058,"span",26),e(6059," search"),n(6060,"br"),t()()(),i(6061,"td",21)(6062,"code",27),e(6063,"string"),t()(),i(6064,"td",24)(6065,"em")(6066,"strong"),e(6067,"(opcional)"),t()(),i(6068,"p"),e(6069,"Texto usado no leitor de tela para acessibilidade. Aplica-se ao \xEDcone de pesquisa."),t()()()(),i(6070,"h4",43)(6071,"code",5),e(6072,"PoLookupResponseApi"),t()(),i(6073,"div",2)(6074,"p"),e(6075,"Interface que representa a estrutura de resposta de uma cole\xE7\xE3o de itens. "),t()(),i(6076,"h4",12),e(6077,"Propriedades"),t(),i(6078,"table",13)(6079,"tr",14)(6080,"th",15),e(6081,"Nome"),t(),i(6082,"th",15),e(6083,"Tipo"),t(),i(6084,"th",15),e(6085,"Descri\xE7\xE3o"),t()(),i(6086,"tr",16)(6087,"td",17)(6088,"div",25)(6089,"span",26),e(6090," hasNext"),n(6091,"br"),t()()(),i(6092,"td",21)(6093,"code",29),e(6094,"boolean"),t()(),i(6095,"td",24)(6096,"p"),e(6097,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(6098,"tr",16)(6099,"td",17)(6100,"div",25)(6101,"span",26),e(6102," items"),n(6103,"br"),t()()(),i(6104,"td",21)(6105,"code",85),e(6106,"Array<object>"),t()(),i(6107,"td",24)(6108,"p"),e(6109,"Lista de itens retornados."),t()()()(),i(6110,"h3"),e(6111,"Enums"),t(),i(6112,"h4",4)(6113,"code",5),e(6114,"PoTableColumnSpacing"),t()(),i(6115,"div",2)(6116,"p"),e(6117,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),i(6118,"strong"),e(6119,"p-spacing"),t(),e(6120,") do po-table."),t()(),i(6121,"h4",12),e(6122,"Propriedades"),t(),i(6123,"table",13)(6124,"tr",14)(6125,"th",15),e(6126,"Nome"),t(),i(6127,"th",15),e(6128,"Descri\xE7\xE3o"),t()(),i(6129,"tr",16)(6130,"td",17)(6131,"div",25)(6132,"span",26),e(6133," ExtraSmall"),n(6134,"br"),t()()(),i(6135,"td",24)(6136,"p"),e(6137,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(6138,"tr",16)(6139,"td",17)(6140,"div",25)(6141,"span",26),e(6142," Small"),n(6143,"br"),t()()(),i(6144,"td",24)(6145,"p"),e(6146,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()(),i(6147,"tr",16)(6148,"td",17)(6149,"div",25)(6150,"span",26),e(6151," Medium"),n(6152,"br"),t()()(),i(6153,"td",24)(6154,"p"),e(6155,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(6156,"tr",16)(6157,"td",17)(6158,"div",25)(6159,"span",26),e(6160," Large"),n(6161,"br"),t()()(),i(6162,"td",24)(6163,"p"),e(6164,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(ne(he),ne(fe))};static \u0275cmp=E({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Lookup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,o){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-lookup-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-lookup-basic-view")(6,"sample-po-lookup-labs-view")(7,"sample-po-lookup-hero-view")(8,"sample-po-lookup-hero-reactive-form-view")(9,"sample-po-lookup-sw-films-view")(10,"sample-po-lookup-multiple-view"),t()()()),l&2&&(s("p-actions",o.actions),d(2),s("p-active",o.activeTab==="doc"),d(2),s("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Le,k,C,we,De,_e,Oe,Ie,He,Ne],encapsulation:2})}return a})();var ut=[{path:"",component:Be}],Re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[le.forChild(ut),le]})}return a})();var Mi=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=J({type:a});static \u0275inj=Q({imports:[Fe,Re]})}return a})();export{Mi as DocPoLookupModule};
