import{o as C,p as se}from"./chunk-AT3MKFJ3.js";import{Gb as x,Hb as y,Ja as N,S as pe,U as me,V as X,W as _,Xa as Q,a as O,ab as W,fa as G,tb as de,w as V,za as U}from"./chunk-GCMU57WK.js";import{Ea as d,Fa as n,Ga as t,Ha as o,I as Y,Jc as A,L as q,Mb as P,Mc as T,Nc as B,O as S,Oa as R,Oc as H,P as h,Pa as E,Pc as F,Qc as L,Tc as ie,Uc as oe,Va as $,Wa as ee,Xa as te,Yc as ae,_a as ne,bb as k,cb as e,cd as le,eb as D,ed as re,gb as f,gd as J,ha as p,hb as b,ib as g,ma as Z,oa as u,pa as j,rb as w}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ce=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","datepicker","p-label","PO Datepicker"]],template:function(l,i){l&1&&o(0,"po-datepicker",0)},dependencies:[_],encapsulation:2})}return a})();var Te=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Basic"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker name="datepicker" p-label="PO Datepicker"> </po-datepicker>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-basic/sample-po-datepicker-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-basic',
  templateUrl: './sample-po-datepicker-basic.component.html',
  standalone: false
})
export class SamplePoDatepickerBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-datepicker-basic"),t(),o(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel),p(),d("ngClass",w(4,Te,i.hideSampleCodeTabs)))},dependencies:[P,C,x,y,ce],encapsulation:2})}return a})();var Ee=(()=>{class a{helperText;datepicker;maxDate;errorPattern;event;format;help;isoFormat;label;locale;placeholder;properties;minDate;size;isoFormatOptions=[{label:"Basic",value:X.Basic},{label:"Extended",value:X.Extended}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];formatOptions=[{label:"dd/mm/yyyy",value:"dd/mm/yyyy"},{label:"mm/dd/yyyy",value:"mm/dd/yyyy"},{label:"yyyy/mm/dd",value:"yyyy/mm/dd"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText="",this.datepicker=void 0,this.maxDate=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.isoFormat=void 0,this.label=void 0,this.locale=void 0,this.placeholder=void 0,this.properties=[],this.minDate=void 0,this.size="medium"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-labs"]],standalone:!1,decls:22,vars:47,consts:[["f","ngForm"],["name","datepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-max-date","p-error-pattern","p-format","p-help","p-iso-format","p-label","p-locale","p-min-date","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-label-text-wrap","p-loading","p-compact-label","p-size","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minDate","p-clean","","p-label","Min date",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date","p-format"],["name","maxDate","p-clean","","p-label","Max date",1,"po-md-6",3,"ngModelChange","ngModel","p-format","p-min-date"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","isoFormat","p-columns","4","p-label","Iso Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let s=R();n(0,"po-datepicker",1),g("ngModelChange",function(r){return S(s),b(i.datepicker,r)||(i.datepicker=r),h(r)}),E("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(r){return S(s),b(i.label,r)||(i.label=r),h(r)}),t(),n(9,"po-input",6),g("ngModelChange",function(r){return S(s),b(i.help,r)||(i.help=r),h(r)}),t(),n(10,"po-input",7),g("ngModelChange",function(r){return S(s),b(i.helperText,r)||(i.helperText=r),h(r)}),t(),n(11,"po-input",8),g("ngModelChange",function(r){return S(s),b(i.placeholder,r)||(i.placeholder=r),h(r)}),t(),n(12,"po-input",9),g("ngModelChange",function(r){return S(s),b(i.errorPattern,r)||(i.errorPattern=r),h(r)}),t(),n(13,"po-datepicker",10),g("ngModelChange",function(r){return S(s),b(i.minDate,r)||(i.minDate=r),h(r)}),t(),n(14,"po-datepicker",11),g("ngModelChange",function(r){return S(s),b(i.maxDate,r)||(i.maxDate=r),h(r)}),t(),n(15,"po-checkbox-group",12),g("ngModelChange",function(r){return S(s),b(i.properties,r)||(i.properties=r),h(r)}),t(),n(16,"po-radio-group",13),g("ngModelChange",function(r){return S(s),b(i.locale,r)||(i.locale=r),h(r)}),t(),n(17,"po-radio-group",14),g("ngModelChange",function(r){return S(s),b(i.format,r)||(i.format=r),h(r)}),t(),n(18,"po-radio-group",15),g("ngModelChange",function(r){return S(s),b(i.isoFormat,r)||(i.isoFormat=r),h(r)}),t(),n(19,"po-radio-group",16),g("ngModelChange",function(r){return S(s),b(i.size,r)||(i.size=r),h(r)}),t(),n(20,"div",2)(21,"po-button",17),E("p-click",function(){return i.restore()}),t()()()}l&2&&(f("ngModel",i.datepicker),d("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-max-date",i.maxDate)("p-error-pattern",i.errorPattern)("p-format",i.format)("p-help",i.help)("p-iso-format",i.isoFormat)("p-label",i.label)("p-locale",i.locale)("p-min-date",i.minDate)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),p(3),d("p-value",i.datepicker),p(),d("p-value",i.event),p(4),f("ngModel",i.label),p(),f("ngModel",i.help),p(),f("ngModel",i.helperText),p(),f("ngModel",i.placeholder),p(),f("ngModel",i.errorPattern),p(),f("ngModel",i.minDate),d("p-max-date",i.maxDate)("p-format",i.format),p(),f("ngModel",i.maxDate),d("p-format",i.format)("p-min-date",i.minDate),p(),f("ngModel",i.properties),d("p-options",i.propertiesOptions),p(),f("ngModel",i.locale),d("p-options",i.localeOptions),p(),f("ngModel",i.format),d("p-options",i.formatOptions),p(),f("ngModel",i.isoFormat),d("p-options",i.isoFormatOptions),p(),f("ngModel",i.size),d("p-options",i.sizeOptions))},dependencies:[L,T,B,F,H,V,O,pe,me,_,N,W],encapsulation:2})}return a})();var Ae=a=>({"docs-sample-code-tabs":a}),fe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Labs"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker
  class="po-sm-12"
  name="datepicker"
  [(ngModel)]="datepicker"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-max-date]="maxDate"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-help]="help"
  [p-iso-format]="isoFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-min-date]="minDate"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="datepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-datepicker
    class="po-md-6"
    name="minDate"
    [(ngModel)]="minDate"
    p-clean
    p-label="Min date"
    [p-max-date]="maxDate"
    [p-format]="format"
  >
  </po-datepicker>

  <po-datepicker
    class="po-md-6"
    name="maxDate"
    [(ngModel)]="maxDate"
    p-clean
    p-label="Max date"
    [p-format]="format"
    [p-min-date]="minDate"
  >
  </po-datepicker>

  <po-checkbox-group
    class="po-md-12"
    name="properties"
    [(ngModel)]="properties"
    p-columns="4"
    p-label="Properties"
    [p-options]="propertiesOptions"
  >
  </po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="locale"
    [(ngModel)]="locale"
    p-columns="4"
    p-label="Locale"
    [p-options]="localeOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="format"
    [(ngModel)]="format"
    p-columns="4"
    p-label="Format"
    [p-options]="formatOptions"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-12"
    name="isoFormat"
    [(ngModel)]="isoFormat"
    p-columns="4"
    p-label="Iso Format"
    [p-options]="isoFormatOptions"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" name="restore" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-labs/sample-po-datepicker-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoDatepickerIsoFormat, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-labs',
  templateUrl: './sample-po-datepicker-labs.component.html',
  standalone: false
})
export class SamplePoDatepickerLabsComponent implements OnInit {
  helperText: string;
  datepicker: string | Date;
  maxDate: string | Date;
  errorPattern: string;
  event: string;
  format: string;
  help: string;
  isoFormat: PoDatepickerIsoFormat;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  minDate: string | Date;
  size: string;

  public readonly isoFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: PoDatepickerIsoFormat.Basic },
    { label: 'Extended', value: PoDatepickerIsoFormat.Extended }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: 'dd/mm/yyyy', value: 'dd/mm/yyyy' },
    { label: 'mm/dd/yyyy', value: 'mm/dd/yyyy' },
    { label: 'yyyy/mm/dd', value: 'yyyy/mm/dd' }
  ];

  public readonly localeOptions: Array<PoRadioGroupOption> = [
    { label: 'pt', value: 'pt' },
    { label: 'en', value: 'en' },
    { label: 'es', value: 'es' },
    { label: 'ru', value: 'ru' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.datepicker = undefined;
    this.maxDate = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.isoFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.minDate = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-datepicker-labs"),t(),o(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel),p(),d("ngClass",w(4,Ae,i.hideSampleCodeTabs)))},dependencies:[P,C,x,y,Ee],encapsulation:2})}return a})();var be=(()=>{class a{selectedYear=new Date("2026-04-30").getFullYear();event;changeEvent(m){this.event=m}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-year"]],standalone:!1,decls:5,vars:3,consts:[["name","yearPicker","p-label","Year Picker","p-placeholder","Select a year","p-mode","year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(n(0,"po-datepicker",0),g("ngModelChange",function(c){return b(i.selectedYear,c)||(i.selectedYear=c),c}),E("p-change",function(c){return i.changeEvent(c)}),t(),o(1,"po-divider"),n(2,"div",1),o(3,"po-info",2)(4,"po-info",3),t()),l&2&&(f("ngModel",i.selectedYear),p(3),d("p-value",i.selectedYear),p(),d("p-value",i.event))},dependencies:[T,F,O,_,W],encapsulation:2})}return a})();var Oe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-year-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker Year"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-year/sample-po-datepicker-year.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker
  name="yearPicker"
  [(ngModel)]="selectedYear"
  p-label="Year Picker"
  p-placeholder="Select a year"
  p-mode="year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-year/sample-po-datepicker-year.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-year',
  templateUrl: './sample-po-datepicker-year.component.html',
  standalone: false
})
export class SamplePoDatepickerYearComponent {
  selectedYear = new Date('2026-04-30').getFullYear();
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-datepicker-year"),t(),o(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel),p(),d("ngClass",w(4,Oe,i.hideSampleCodeTabs)))},dependencies:[P,C,x,y,be],encapsulation:2})}return a})();var Se=(()=>{class a{selectedMonthYear=new Date("2026-12-02");event;changeEvent(m){this.event=m}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-month-year"]],standalone:!1,decls:5,vars:3,consts:[["name","monthYearPicker","p-label","Month/Year Picker","p-placeholder","Select month and year","p-mode","month-year",3,"ngModelChange","p-change","ngModel"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"]],template:function(l,i){l&1&&(n(0,"po-datepicker",0),g("ngModelChange",function(c){return b(i.selectedMonthYear,c)||(i.selectedMonthYear=c),c}),E("p-change",function(c){return i.changeEvent(c)}),t(),o(1,"po-divider"),n(2,"div",1),o(3,"po-info",2)(4,"po-info",3),t()),l&2&&(f("ngModel",i.selectedMonthYear),p(3),d("p-value",i.selectedMonthYear),p(),d("p-value",i.event))},dependencies:[T,F,O,_,W],encapsulation:2})}return a})();var We=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-month-year-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker MonthYear"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.html"),t(),n(13,"pre",7),e(14,`<po-datepicker
  name="monthYearPicker"
  [(ngModel)]="selectedMonthYear"
  p-label="Month/Year Picker"
  p-placeholder="Select month and year"
  p-mode="month-year"
  (p-change)="changeEvent($event)"
>
</po-datepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="selectedMonthYear"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-month-year/sample-po-datepicker-month-year.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-datepicker-month-year',
  templateUrl: './sample-po-datepicker-month-year.component.html',
  standalone: false
})
export class SamplePoDatepickerMonthYearComponent {
  selectedMonthYear = new Date('2026-12-02');
  event: string;

  changeEvent(event: string) {
    this.event = event;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-datepicker-month-year"),t(),o(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel),p(),d("ngClass",w(4,We,i.hideSampleCodeTabs)))},dependencies:[P,C,x,y,Se],encapsulation:2})}return a})();var ze=["formAirfare"],ve=(()=>{class a{poDialog=q(G);poNotification=q(U);formAirfare;accompany=0;destination;endDate=new Date;origin;startDate=new Date;ticketClass="Economy";accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];apply(){let m=`Would you like to confirm the ticket from ${this.origin} to ${this.destination} with departure date at
    ${this.getFormatedDate(this.startDate)} and return at ${this.getFormatedDate(this.endDate)} with ${this.accompany} companions in
    ${this.ticketClass} class?`;this.poDialog.confirm({title:"Confirm",message:m,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-airfare"]],viewQuery:function(l,i){if(l&1&&$(ze,7),l&2){let s;ee(s=te())&&(i.formAirfare=s.first)}},standalone:!1,decls:13,vars:11,consts:[["formAirfare","ngForm"],[1,"po-row"],["name","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-max-date"],["name","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","origin","p-placeholder","Flight origin","p-label","Origin","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","destination","p-label","Destination","p-placeholder","Flight destination","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["clas","po-row"],["name","ticketClass","p-label","Class","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","accompany","p-label","Accompany","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let s=R();n(0,"form",null,0)(2,"div",1)(3,"po-datepicker",2),g("ngModelChange",function(r){return S(s),b(i.startDate,r)||(i.startDate=r),h(r)}),t(),n(4,"po-datepicker",3),g("ngModelChange",function(r){return S(s),b(i.endDate,r)||(i.endDate=r),h(r)}),t()(),n(5,"div",1)(6,"po-input",4),g("ngModelChange",function(r){return S(s),b(i.origin,r)||(i.origin=r),h(r)}),t(),n(7,"po-input",5),g("ngModelChange",function(r){return S(s),b(i.destination,r)||(i.destination=r),h(r)}),t()(),n(8,"div",6)(9,"po-select",7),g("ngModelChange",function(r){return S(s),b(i.ticketClass,r)||(i.ticketClass=r),h(r)}),t(),n(10,"po-select",8),g("ngModelChange",function(r){return S(s),b(i.accompany,r)||(i.accompany=r),h(r)}),t()(),n(11,"div",1)(12,"po-button",9),E("p-click",function(){return i.apply()}),t()()()}if(l&2){let s=ne(1);p(3),f("ngModel",i.startDate),d("p-max-date",i.endDate),p(),f("ngModel",i.endDate),d("p-min-date",i.startDate),p(2),f("ngModel",i.origin),p(),f("ngModel",i.destination),p(2),f("ngModel",i.ticketClass),d("p-options",i.ticketClassOptions),p(),f("ngModel",i.accompany),d("p-options",i.accompanyNumber),p(2),d("p-disabled",s.invalid)}},dependencies:[L,T,B,F,H,V,_,N,Q],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-airfare-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.html"),t(),n(13,"pre",7),e(14,`<form #formAirfare="ngForm">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="startDate"
      [(ngModel)]="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      p-required
      [p-max-date]="endDate"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="endDate"
      [(ngModel)]="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      p-required
      [p-min-date]="startDate"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="origin"
      [(ngModel)]="origin"
      p-placeholder="Flight origin"
      p-label="Origin"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="destination"
      [(ngModel)]="destination"
      p-label="Destination"
      p-placeholder="Flight destination"
      p-required
    >
    </po-input>
  </div>

  <div clas="po-row">
    <po-select
      class="po-md-6"
      name="ticketClass"
      [(ngModel)]="ticketClass"
      p-label="Class"
      p-required
      [p-options]="ticketClassOptions"
    >
    </po-select>

    <po-select
      class="po-md-6"
      name="accompany"
      [(ngModel)]="accompany"
      p-label="Accompany"
      p-required
      [p-options]="accompanyNumber"
    >
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare/sample-po-datepicker-airfare.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare',
  templateUrl: './sample-po-datepicker-airfare.component.html',
  standalone: false
})
export class SamplePoDatepickerAirfareComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formAirfare', { static: true }) formAirfare: UntypedFormControl;

  accompany: number = 0;
  destination: string;
  endDate: string = <any>new Date();
  origin: string;
  startDate: string = <any>new Date();
  ticketClass: string = 'Economy';

  public readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  public readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  apply() {
    const message = \`Would you like to confirm the ticket from \${this.origin} to \${
      this.destination
    } with departure date at
    \${this.getFormatedDate(this.startDate)} and return at \${this.getFormatedDate(this.endDate)} with \${
      this.accompany
    } companions in
    \${this.ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-datepicker-airfare"),t(),o(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel),p(),d("ngClass",w(4,je,i.hideSampleCodeTabs)))},dependencies:[P,C,x,y,ve],encapsulation:2})}return a})();var ye=(()=>{class a{formBuilder=q(ae);poDialog=q(G);poNotification=q(U);formAirfare;accompanyNumber=[{value:0,label:"0"},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"}];ticketClassOptions=[{value:"Economy",label:"Economy"},{value:"Premium",label:"Premium"},{value:"Business",label:"Business"},{value:"First",label:"First"}];ngOnInit(){this.formAirfare=this.formBuilder.group({accompany:[0,A.required],destination:["",A.required],endDate:[new Date,A.required],origin:["",A.required],startDate:[new Date,A.required],ticketClass:["Economy",A.required]})}apply(m){let{accompany:l,destination:i,endDate:s,origin:c,ticketClass:r,startDate:Pe}=m.value,_e=`Would you like to confirm the ticket from ${c} to ${i} with departure date at
    ${this.getFormatedDate(Pe)} and return at ${this.getFormatedDate(s)} with ${l} companions in
    ${r} class?`;this.poDialog.confirm({title:"Confirm",message:_e,confirm:()=>{this.poNotification.success("Booking Confirmed"),this.formAirfare.reset({accompany:0,endDate:new Date,startDate:new Date,ticketClass:"Economy"})},cancel:()=>{this.poNotification.warning("Booking Canceled")}})}getFormatedDate(m){return m&&m.slice(0,10)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form"]],standalone:!1,decls:12,vars:6,consts:[[3,"formGroup"],[1,"po-row"],["formControlName","startDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date start",1,"po-md-6",3,"p-max-date"],["formControlName","endDate","p-clean","","p-format","dd/mm/yyyy","p-label","Date end",1,"po-md-6",3,"p-min-date"],["formControlName","origin","p-placeholder","Flight origin","p-label","Origin",1,"po-md-6"],["formControlName","destination","p-label","Destination","p-placeholder","Flight destination",1,"po-md-6"],["clas","po-row"],["formControlName","ticketClass","p-label","Class",1,"po-md-6",3,"p-options"],["formControlName","accompany","p-label","Accompany",1,"po-md-6",3,"p-options"],["name","applyButton","p-label","Apply",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(n(0,"form",0)(1,"div",1),o(2,"po-datepicker",2)(3,"po-datepicker",3),t(),n(4,"div",1),o(5,"po-input",4)(6,"po-input",5),t(),n(7,"div",6),o(8,"po-select",7)(9,"po-select",8),t(),n(10,"div",1)(11,"po-button",9),E("p-click",function(){return i.apply(i.formAirfare)}),t()()()),l&2&&(d("formGroup",i.formAirfare),p(2),d("p-max-date",i.formAirfare.get("endDate").value),p(),d("p-min-date",i.formAirfare.get("startDate").value),p(5),d("p-options",i.ticketClassOptions),p(),d("p-options",i.accompanyNumber),p(2),d("p-disabled",i.formAirfare.invalid))},dependencies:[L,T,B,oe,ie,V,_,N,Q],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-airfare-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Datepicker - Airfare Reactive Form"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formAirfare">
  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      formControlName="startDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date start"
      [p-max-date]="formAirfare.get('endDate').value"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      formControlName="endDate"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Date end"
      [p-min-date]="formAirfare.get('startDate').value"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" formControlName="origin" p-placeholder="Flight origin" p-label="Origin"> </po-input>

    <po-input class="po-md-6" formControlName="destination" p-label="Destination" p-placeholder="Flight destination">
    </po-input>
  </div>

  <div clas="po-row">
    <po-select class="po-md-6" formControlName="ticketClass" p-label="Class" [p-options]="ticketClassOptions">
    </po-select>

    <po-select class="po-md-6" formControlName="accompany" p-label="Accompany" [p-options]="accompanyNumber">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="applyButton"
      p-label="Apply"
      [p-disabled]="formAirfare.invalid"
      (p-click)="apply(formAirfare)"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-datepicker-airfare-reactive-form/sample-po-datepicker-airfare-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-datepicker-airfare-reactive-form',
  templateUrl: './sample-po-datepicker-airfare-reactive-form.component.html',
  standalone: false
})
export class SamplePoDatepickerAirfareReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  formAirfare: UntypedFormGroup;

  readonly accompanyNumber: Array<PoSelectOption> = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' }
  ];

  readonly ticketClassOptions: Array<PoSelectOption> = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Premium', label: 'Premium' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
  ];

  ngOnInit() {
    this.formAirfare = this.formBuilder.group({
      accompany: [0, Validators.required],
      destination: ['', Validators.required],
      endDate: [new Date(), Validators.required],
      origin: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      ticketClass: ['Economy', Validators.required]
    });
  }

  apply(formAirfare: UntypedFormGroup) {
    const { accompany, destination, endDate, origin, ticketClass, startDate } = formAirfare.value;

    const message = \`Would you like to confirm the ticket from \${origin} to \${destination} with departure date at
    \${this.getFormatedDate(startDate)} and return at \${this.getFormatedDate(endDate)} with \${accompany} companions in
    \${ticketClass} class?\`;

    this.poDialog.confirm({
      title: 'Confirm',
      message,
      confirm: () => {
        this.poNotification.success('Booking Confirmed');

        this.formAirfare.reset({
          accompany: 0,
          endDate: new Date(),
          startDate: new Date(),
          ticketClass: 'Economy'
        });
      },
      cancel: () => {
        this.poNotification.warning('Booking Canceled');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-datepicker-airfare-reactive-form"),t(),o(23,"hr")),l&2&&(p(5),k("po-icon "+i.sampleCodeButtonIcon),p(),D(" ",i.sampleCodeButtonLabel),p(),d("ngClass",w(4,Ge,i.hideSampleCodeTabs)))},dependencies:[P,C,x,y,ye],encapsulation:2})}return a})();var ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-datepicker-doc"]],standalone:!1,decls:1291,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3schools.com/js/js_dates.asp"],["href","https://www.w3schools.com/jsref/jsref_setfullyear.asp"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","Date"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDatepickerComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O "),n(24,"code"),e(25,"po-datepicker"),t(),e(26," \xE9 um componente espec\xEDfico para manipula\xE7\xE3o de datas permitindo a digita\xE7\xE3o e / ou sele\xE7\xE3o."),t(),n(27,"p"),e(28,`O formato de exibi\xE7\xE3o da data, ou seja, o formato que \xE9 apresentado ao usu\xE1rio \xE9 o dd/mm/yyyy,
mas podem ser definidos outros padr\xF5es (veja mais na propriedade `),n(29,"code"),e(30,"p-format"),t(),e(31,")."),t(),n(32,"p"),e(33,`O idioma padr\xE3o do calend\xE1rio ser\xE1 exibido de acordo com o navegador, caso tenha necessidade de alterar
use a propriedade `),n(34,"code"),e(35,"p-locale"),t(),e(36,"."),t(),n(37,"p"),e(38,`O datepicker aceita tr\xEAs formatos de data: o E8601DZw (yyyy-mm-ddThh:mm:ss+|-hh:mm), o E8601DAw (yyyy-mm-dd) e o
Date padr\xE3o do Javascript.`),t(),n(39,"blockquote")(40,"p"),e(41,"Por padr\xE3o, o formato de sa\xEDda do "),n(42,"em"),e(43,"model"),t(),e(44,` se ajustar\xE1 conforme o formato de entrada. Se por acaso precisar controlar o valor de sa\xEDda,
a propriedade `),n(45,"code"),e(46,"p-iso-format"),t(),e(47," prov\xEA esse controle independentemente do formato de entrada. Veja abaixo os formatos dispon\xEDveis:"),t()(),n(48,"ul")(49,"li")(50,"p"),e(51,"Formato de entrada e sa\xEDda (E8601DZw) - "),n(52,"code"),e(53,"'2017-11-28T00:00:00-02:00'"),t(),e(54,";"),t()(),n(55,"li")(56,"p"),e(57,"Formato de entrada e sa\xEDda (E8601DAw) - "),n(58,"code"),e(59,"'2017-11-28'"),t(),e(60,";"),t()(),n(61,"li")(62,"p"),e(63,"Formato de entrada (Date) - "),n(64,"code"),e(65,"new Date(2017, 10, 28)"),t(),e(66," e sa\xEDda (E8601DAw) - "),n(67,"code"),e(68,"'2017-11-28'"),t(),e(69,";"),t()()(),n(70,"p")(71,"strong"),e(72,"Importante:"),t()(),n(73,"ul")(74,"li"),e(75,"Para utilizar datas com ano inferior a 100, verificar o comportamento do "),n(76,"a",6)(77,"code"),e(78,"new Date"),t()(),e(79,`
e utilizar o m\xE9todo `),n(80,"a",7)(81,"code"),e(82,"setFullYear"),t()(),e(83,"."),t(),n(84,"li"),e(85,"Caso a data esteja inv\xE1lida, o "),n(86,"code"),e(87,"model"),t(),e(88," receber\xE1 "),n(89,"strong"),e(90,"'Data inv\xE1lida'"),t(),e(91,"."),t(),n(92,"li"),e(93,"Caso o "),n(94,"code"),e(95,"input"),t(),e(96," esteja passando um "),n(97,"code"),e(98,"[(ngModel)]"),t(),e(99,", mas n\xE3o tenha um "),n(100,"code"),e(101,"name"),t(),e(102,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),n(103,"code"),e(104,'[ngModelOptions]="{standalone: true}"'),t(),e(105,")."),t()(),n(106,"p"),e(107,"Exemplo:"),t(),n(108,"pre")(109,"code"),e(110,`<po-datepicker
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}"
</po-datepicker>
`),t()(),n(111,"blockquote")(112,"p"),e(113,"N\xE3o esque\xE7a de importar o "),n(114,"code"),e(115,"FormsModule"),t(),e(116," em seu m\xF3dulo, tal como para utilizar o "),n(117,"code"),e(118,"input default"),t(),e(119,"."),t()(),n(120,"h4"),e(121,"Tokens customiz\xE1veis"),t(),n(122,"p"),e(123,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(124,"br"),e(125,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(126,"code"),e(127,".po-input"),t()(),n(128,"blockquote")(129,"p"),e(130,"Para maiores informa\xE7\xF5es, acesse o guia "),n(131,"a",8),e(132,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(133,"."),t()(),n(134,"table")(135,"thead")(136,"tr")(137,"th"),e(138,"Propriedade"),t(),n(139,"th"),e(140,"Descri\xE7\xE3o"),t(),n(141,"th"),e(142,"Valor Padr\xE3o"),t()()(),n(143,"tbody")(144,"tr")(145,"td")(146,"strong"),e(147,"Default Values"),t()(),o(148,"td")(149,"td"),t(),n(150,"tr")(151,"td")(152,"code"),e(153,"--font-family"),t()(),n(154,"td"),e(155,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(156,"td")(157,"code"),e(158,"var(--font-family-theme)"),t()()(),n(159,"tr")(160,"td")(161,"code"),e(162,"--font-size"),t()(),n(163,"td"),e(164,"Tamanho da fonte"),t(),n(165,"td")(166,"code"),e(167,"var(--font-size-default)"),t()()(),n(168,"tr")(169,"td")(170,"code"),e(171,"--text-color-placeholder"),t(),e(172," \xA0"),t(),n(173,"td"),e(174,"Cor principal do texto do placeholder"),t(),n(175,"td")(176,"code"),e(177,"var(--color-neutral-light-30)"),t()()(),n(178,"tr")(179,"td")(180,"code"),e(181,"--color"),t()(),n(182,"td"),e(183,"Cor principal do datepicker"),t(),n(184,"td")(185,"code"),e(186,"var(--color-neutral-dark-70)"),t()()(),n(187,"tr")(188,"td")(189,"code"),e(190,"--background"),t()(),n(191,"td"),e(192,"Cor de background"),t(),n(193,"td")(194,"code"),e(195,"var(--color-neutral-light-05)"),t()()(),n(196,"tr")(197,"td")(198,"code"),e(199,"--padding"),t()(),n(200,"td"),e(201,"Preenchimento"),t(),n(202,"td")(203,"code"),e(204,"0 0.5rem"),t()()(),n(205,"tr")(206,"td")(207,"code"),e(208,"--text-color"),t()(),n(209,"td"),e(210,"Cor do texto"),t(),n(211,"td")(212,"code"),e(213,"var(--color-neutral-dark-90)"),t()()(),n(214,"tr")(215,"td")(216,"code"),e(217,"--field-container-title-justify"),t()(),n(218,"td"),e(219,"Alinhamento horizontal do t\xEDtulo ("),n(220,"code"),e(221,"justify-content"),t(),e(222,")"),t(),n(223,"td")(224,"code"),e(225,"space-between"),t()()(),n(226,"tr")(227,"td")(228,"code"),e(229,"--field-container-title-flex"),t()(),n(230,"td"),e(231,"Flex do t\xEDtulo ("),n(232,"code"),e(233,"flex"),t(),e(234,")"),t(),n(235,"td")(236,"code"),e(237,"1 auto"),t()()(),n(238,"tr")(239,"td")(240,"strong"),e(241,"Hover"),t()(),o(242,"td")(243,"td"),t(),n(244,"tr")(245,"td")(246,"code"),e(247,"--color-hover"),t()(),n(248,"td"),e(249,"Cor principal no estado hover"),t(),n(250,"td")(251,"code"),e(252,"var(--color-brand-01-dark)"),t()()(),n(253,"tr")(254,"td")(255,"code"),e(256,"--background-hover"),t()(),n(257,"td"),e(258,"Cor de background no estado hover"),t(),n(259,"td")(260,"code"),e(261,"var(--color-brand-01-lightest)"),t()()(),n(262,"tr")(263,"td")(264,"strong"),e(265,"Focused"),t()(),o(266,"td")(267,"td"),t(),n(268,"tr")(269,"td")(270,"code"),e(271,"--color-focused"),t()(),n(272,"td"),e(273,"Cor principal no estado de focus"),t(),n(274,"td")(275,"code"),e(276,"var(--color-action-default)"),t()()(),n(277,"tr")(278,"td")(279,"code"),e(280,"--outline-color-focused"),t()(),n(281,"td"),e(282,"Cor do outline do estado de focus"),t(),n(283,"td")(284,"code"),e(285,"var(--color-action-focus)"),t()()(),n(286,"tr")(287,"td")(288,"strong"),e(289,"Disabled"),t()(),o(290,"td")(291,"td"),t(),n(292,"tr")(293,"td")(294,"code"),e(295,"--color-disabled"),t()(),n(296,"td"),e(297,"Cor principal no estado disabled"),t(),n(298,"td")(299,"code"),e(300,"var(--color-neutral-light-30)"),t()()(),n(301,"tr")(302,"td")(303,"code"),e(304,"--background-disabled"),t()(),n(305,"td"),e(306,"Cor de background no estado disabled \xA0"),t(),n(307,"td")(308,"code"),e(309,"var(--color-neutral-light-20)"),t()()(),n(310,"tr")(311,"td")(312,"code"),e(313,"--text-color-disabled"),t()(),n(314,"td"),e(315,"Cor do texto no estado disabled"),t(),n(316,"td")(317,"code"),e(318,"var(--color-neutral-dark-70)"),t()()()()()(),n(319,"div",9)(320,"h4",10),e(321,"Seletor"),t(),n(322,"pre",11),e(323,`<po-datepicker
    p-locale="string"
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-async="(value) => Observable<boolean>"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="string"
    p-help="string"
    p-iso-format="PoDatepickerIsoFormat"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-max-date="string | Date"
    p-min-date="string | Date"
    p-mode="'month-year' | 'year'"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-year-range-limit="number" >
</po-datepicker>
`),t()(),n(324,"h4",12),e(325,"Propriedades"),t(),n(326,"table",13)(327,"tr",14)(328,"th",15),e(329,"Nome"),t(),n(330,"th",15),e(331,"Tipo"),t(),n(332,"th",15),e(333,"Padr\xE3o"),t(),n(334,"th",15),e(335,"Descri\xE7\xE3o"),t()(),n(336,"tr",16)(337,"td",17)(338,"div",18)(339,"span",19),e(340,"p-locale"),o(341,"br"),t()()(),n(342,"td",20)(343,"code",21),e(344,"string"),t()(),n(345,"td",22),e(346,"-"),t(),n(347,"td",23)(348,"em")(349,"strong"),e(350,"(opcional)"),t()(),n(351,"p"),e(352,"Idioma do Datepicker."),t(),n(353,"blockquote")(354,"p"),e(355,"O locale padr\xE3o sera recuperado com base no "),n(356,"a",24)(357,"code"),e(358,"PoI18nService"),t()(),e(359," ou "),n(360,"em"),e(361,"browser"),t(),e(362,"."),t()()()(),n(363,"tr",16)(364,"td",17)(365,"div",25)(366,"span",26),e(367," (p-additional-help)"),o(368,"br"),t()(),n(369,"div",27),e(370,"Deprecated"),t()(),n(371,"td",20)(372,"code",28),e(373,"EventEmitter"),t()(),n(374,"td",22),e(375,"-"),t(),n(376,"td",23)(377,"em")(378,"strong"),e(379,"(opcional)"),t()(),n(380,"p"),e(381,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(382,"blockquote")(383,"p"),e(384,"Essa propriedade est\xE1 "),n(385,"strong"),e(386,"depreciada"),t(),e(387," e ser\xE1 removida na vers\xE3o "),n(388,"code"),e(389,"23.x.x"),t(),e(390,". Recomendamos utilizar a propriedade "),n(391,"code"),e(392,"p-helper"),t(),e(393," que oferece mais recursos e flexibilidade."),t()()()(),n(394,"tr",16)(395,"td",17)(396,"div",18)(397,"span",19),e(398," p-additional-help-tooltip"),o(399,"br"),t()(),n(400,"div",27),e(401,"Deprecated"),t()(),n(402,"td",20)(403,"code",21),e(404,"string"),t()(),n(405,"td",22),e(406,"-"),t(),n(407,"td",23)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),n(411,"p"),e(412,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(413,"code"),e(414,"po-helper"),t(),e(415,`.
`),n(416,"strong"),e(417,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(418,"blockquote")(419,"p"),e(420,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(421,"blockquote")(422,"p"),e(423,"Essa propriedade est\xE1 "),n(424,"strong"),e(425,"depreciada"),t(),e(426," e ser\xE1 removida na vers\xE3o "),n(427,"code"),e(428,"23.x.x"),t(),e(429,". Recomendamos utilizar a propriedade "),n(430,"code"),e(431,"p-helper"),t(),e(432," que oferece mais recursos e flexibilidade."),t()()()(),n(433,"tr",16)(434,"td",17)(435,"div",18)(436,"span",19),e(437," p-append-in-body"),o(438,"br"),t()()(),n(439,"td",20)(440,"code",29),e(441,"boolean"),t()(),n(442,"td",22)(443,"p")(444,"code"),e(445,"false"),t()()(),n(446,"td",23)(447,"em")(448,"strong"),e(449,"(opcional)"),t()(),n(450,"p"),e(451,"Define que o "),n(452,"code"),e(453,"calendar"),t(),e(454," e/ou tooltip ("),n(455,"code"),e(456,"p-additional-help-tooltip"),t(),e(457," e/ou "),n(458,"code"),e(459,"p-error-limit"),t(),e(460,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),n(461,"blockquote")(462,"p"),e(463,"Quando utilizado com "),n(464,"code"),e(465,"p-helper"),t(),e(466,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(467,"tr",16)(468,"td",17)(469,"div",18)(470,"span",19),e(471," p-auto-focus"),o(472,"br"),t()()(),n(473,"td",20)(474,"code",29),e(475,"boolean"),t()(),n(476,"td",22)(477,"p")(478,"code"),e(479,"false"),t()()(),n(480,"td",23)(481,"em")(482,"strong"),e(483,"(opcional)"),t()(),n(484,"p"),e(485,"Aplica foco no elemento ao ser iniciado."),t(),n(486,"blockquote")(487,"p"),e(488,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(489,"tr",16)(490,"td",17)(491,"div",18)(492,"span",19),e(493,"p-clean"),o(494,"br"),t()()(),n(495,"td",20)(496,"code",29),e(497,"boolean"),t()(),n(498,"td",22),e(499,"-"),t(),n(500,"td",23)(501,"em")(502,"strong"),e(503,"(opcional)"),t()(),n(504,"p"),e(505,"Habilita a\xE7\xE3o para limpar o campo."),t()()(),n(506,"tr",16)(507,"td",17)(508,"div",18)(509,"span",19),e(510," p-compact-label"),o(511,"br"),t()()(),n(512,"td",20)(513,"code",29),e(514,"boolean"),t()(),n(515,"td",22)(516,"p")(517,"code"),e(518,"false"),t()()(),n(519,"td",23)(520,"em")(521,"strong"),e(522,"(opcional)"),t()(),n(523,"p"),e(524,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),n(525,"p"),e(526,"Quando habilitado ("),n(527,"code"),e(528,"true"),t(),e(529,"), o modo compacto afeta o conjunto composto por:"),t(),n(530,"ul")(531,"li")(532,"code"),e(533,"po-label"),t()(),n(534,"li")(535,"code"),e(536,"p-requirement (showRequired)"),t()(),n(537,"li")(538,"code"),e(539,"po-helper"),t()()(),n(540,"p"),e(541,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),n(542,"p"),e(543,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),n(544,"ul")(545,"li")(546,"code"),e(547,"--field-container-title-justify"),t()(),n(548,"li")(549,"code"),e(550,"--field-container-title-flex"),t()()(),n(551,"p"),e(552,"Exemplo:"),t(),n(553,"pre")(554,"code"),e(555,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),n(556,"p"),e(557,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),n(558,"tr",16)(559,"td",17)(560,"div",18)(561,"span",19),e(562,"p-disabled"),o(563,"br"),t()()(),n(564,"td",20)(565,"code",29),e(566,"boolean"),t()(),n(567,"td",22),e(568,"-"),t(),n(569,"td",23)(570,"em")(571,"strong"),e(572,"(opcional)"),t()(),n(573,"p"),e(574,"Desabilita o campo."),t()()(),n(575,"tr",16)(576,"td",17)(577,"div",18)(578,"span",19),e(579," p-error-async"),o(580,"br"),t()()(),n(581,"td",20)(582,"code",30),e(583,"(value) => Observable<boolean>"),t()(),n(584,"td",22),e(585,"-"),t(),n(586,"td",23)(587,"em")(588,"strong"),e(589,"(opcional)"),t()(),n(590,"p"),e(591,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(592,"code"),e(593,"change"),t(),e(594,"."),t()()(),n(595,"tr",16)(596,"td",17)(597,"div",18)(598,"span",19),e(599," p-error-limit"),o(600,"br"),t()()(),n(601,"td",20)(602,"code",29),e(603,"boolean"),t()(),n(604,"td",22)(605,"p")(606,"code"),e(607,"false"),t()()(),n(608,"td",23)(609,"em")(610,"strong"),e(611,"(opcional)"),t()(),n(612,"p"),e(613,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(614,"blockquote")(615,"p"),e(616,"Caso essa propriedade seja definida como "),n(617,"code"),e(618,"true"),t(),e(619,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(620,"tr",16)(621,"td",17)(622,"div",18)(623,"span",19),e(624," p-error-pattern"),o(625,"br"),t()()(),n(626,"td",20)(627,"code",21),e(628,"string"),t()(),n(629,"td",22),e(630,"-"),t(),n(631,"td",23)(632,"em")(633,"strong"),e(634,"(opcional)"),t()(),n(635,"p"),e(636,"Mensagem apresentada quando a data for inv\xE1lida ou fora do per\xEDodo."),t(),n(637,"blockquote")(638,"p"),e(639,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(640,"code"),e(641,"p-required-field-error-message"),t(),e(642," em conjunto."),t()()()(),n(643,"tr",16)(644,"td",17)(645,"div",18)(646,"span",19),e(647," p-format"),o(648,"br"),t()()(),n(649,"td",20)(650,"code",21),e(651,"string"),t()(),n(652,"td",22)(653,"p")(654,"code"),e(655,"dd/mm/yyyy"),t()()(),n(656,"td",23)(657,"em")(658,"strong"),e(659,"(opcional)"),t()(),n(660,"p"),e(661,"Formato de exibi\xE7\xE3o da data."),t(),n(662,"p"),e(663,"Valores v\xE1lidos:"),t(),n(664,"ul")(665,"li")(666,"code"),e(667,"dd/mm/yyyy"),t()(),n(668,"li")(669,"code"),e(670,"mm/dd/yyyy"),t()(),n(671,"li")(672,"code"),e(673,"yyyy/mm/dd"),t()()(),n(674,"p"),e(675,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),t()()(),n(676,"tr",16)(677,"td",17)(678,"div",18)(679,"span",19),e(680," p-help"),o(681,"br"),t()()(),n(682,"td",20)(683,"code",21),e(684,"string"),t()(),n(685,"td",22),e(686,"-"),t(),n(687,"td",23)(688,"em")(689,"strong"),e(690,"(opcional)"),t()(),n(691,"p"),e(692,"Texto de apoio do campo."),t()()(),n(693,"tr",16)(694,"td",17)(695,"div",18)(696,"span",19),e(697," p-iso-format"),o(698,"br"),t()()(),n(699,"td",20)(700,"code",31),e(701,"PoDatepickerIsoFormat"),t()(),n(702,"td",22),e(703,"-"),t(),n(704,"td",23)(705,"em")(706,"strong"),e(707,"(opcional)"),t()(),n(708,"p"),e(709,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),n(710,"em"),e(711,"model"),t(),e(712,", independentemente do formato de entrada."),t(),n(713,"blockquote")(714,"p"),e(715,"Veja os valores v\xE1lidos no "),n(716,"em"),e(717,"enum"),t(),n(718,"code"),e(719,"PoDatepickerIsoFormat"),t(),e(720,"."),t()(),n(721,"p"),e(722,"Propriedade incompat\xEDvel com as varia\xE7\xF5es month-year e year."),t()()(),n(723,"tr",16)(724,"td",17)(725,"div",25)(726,"span",26),e(727," (p-keydown)"),o(728,"br"),t()()(),n(729,"td",20)(730,"code",28),e(731,"EventEmitter"),t()(),n(732,"td",22),e(733,"-"),t(),n(734,"td",23)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),n(738,"p"),e(739,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(740,"code"),e(741,"KeyboardEvent"),t(),e(742," com informa\xE7\xF5es sobre a tecla."),t()()(),n(743,"tr",16)(744,"td",17)(745,"div",18)(746,"span",19),e(747," p-label"),o(748,"br"),t()()(),n(749,"td",20)(750,"code",21),e(751,"string"),t()(),n(752,"td",22),e(753,"-"),t(),n(754,"td",23)(755,"em")(756,"strong"),e(757,"(opcional)"),t()(),n(758,"p"),e(759,"R\xF3tulo do campo."),t()()(),n(760,"tr",16)(761,"td",17)(762,"div",18)(763,"span",19),e(764," p-label-text-wrap"),o(765,"br"),t()()(),n(766,"td",20)(767,"code",29),e(768,"boolean"),t()(),n(769,"td",22)(770,"p")(771,"code"),e(772,"false"),t()()(),n(773,"td",23)(774,"em")(775,"strong"),e(776,"(opcional)"),t()(),n(777,"p"),e(778,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(779,"code"),e(780,"p-label"),t(),e(781,". Quando "),n(782,"code"),e(783,"p-label-text-wrap"),t(),e(784,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(785,"tr",16)(786,"td",17)(787,"div",18)(788,"span",19),e(789," p-loading"),o(790,"br"),t()()(),n(791,"td",20)(792,"code",29),e(793,"boolean"),t()(),n(794,"td",22)(795,"p")(796,"code"),e(797,"false"),t()()(),n(798,"td",23)(799,"em")(800,"strong"),e(801,"(opcional)"),t()(),n(802,"p"),e(803,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(804,"tr",16)(805,"td",17)(806,"div",18)(807,"span",19),e(808," p-max-date"),o(809,"br"),t()()(),n(810,"td",20)(811,"code",21),e(812,"string "),t(),n(813,"code",32),e(814," Date"),t()(),n(815,"td",22),e(816,"-"),t(),n(817,"td",23)(818,"em")(819,"strong"),e(820,"(opcional)"),t()(),n(821,"p"),e(822,"Define uma data m\xE1xima para o "),n(823,"code"),e(824,"po-datepicker"),t(),e(825,"."),t()()(),n(826,"tr",16)(827,"td",17)(828,"div",18)(829,"span",19),e(830," p-min-date"),o(831,"br"),t()()(),n(832,"td",20)(833,"code",21),e(834,"string "),t(),n(835,"code",32),e(836," Date"),t()(),n(837,"td",22),e(838,"-"),t(),n(839,"td",23)(840,"em")(841,"strong"),e(842,"(opcional)"),t()(),n(843,"p"),e(844,"Define uma data m\xEDnima para o "),n(845,"code"),e(846,"po-datepicker"),t(),e(847,"."),t()()(),n(848,"tr",16)(849,"td",17)(850,"div",18)(851,"span",19),e(852," p-mode"),o(853,"br"),t()()(),n(854,"td",20)(855,"code",33),e(856,"'month-year' "),t(),n(857,"code",34),e(858," 'year'"),t()(),n(859,"td",22),e(860,"-"),t(),n(861,"td",23)(862,"em")(863,"strong"),e(864,"(opcional)"),t()(),n(865,"p"),e(866,"Define o modo de opera\xE7\xE3o do datepicker."),t(),n(867,"p"),e(868,"Permite configurar o componente para sele\xE7\xE3o de:"),t(),n(869,"ul")(870,"li"),e(871,"M\xEAs e ano ("),n(872,"code"),e(873,"month-year"),t(),e(874,");"),t(),n(875,"li"),e(876,"Apenas ano ("),n(877,"code"),e(878,"year"),t(),e(879,")."),t()()()(),n(880,"tr",16)(881,"td",17)(882,"div",18)(883,"span",19),e(884," p-no-autocomplete"),o(885,"br"),t()()(),n(886,"td",20)(887,"code",29),e(888,"boolean"),t()(),n(889,"td",22)(890,"p")(891,"code"),e(892,"false"),t()()(),n(893,"td",23)(894,"em")(895,"strong"),e(896,"(opcional)"),t()(),n(897,"p"),e(898,"Define a propriedade nativa "),n(899,"code"),e(900,"autocomplete"),t(),e(901," do campo como "),n(902,"code"),e(903,"off"),t(),e(904,"."),t()()(),n(905,"tr",16)(906,"td",17)(907,"div",25)(908,"span",26),e(909," (p-blur)"),o(910,"br"),t()()(),n(911,"td",20)(912,"code",28),e(913,"EventEmitter"),t()(),n(914,"td",22),e(915,"-"),t(),n(916,"td",23)(917,"em")(918,"strong"),e(919,"(opcional)"),t()(),n(920,"p"),e(921,"Evento disparado ao sair do campo."),t()()(),n(922,"tr",16)(923,"td",17)(924,"div",25)(925,"span",26),e(926," (p-change)"),o(927,"br"),t()()(),n(928,"td",20)(929,"code",28),e(930,"EventEmitter"),t()(),n(931,"td",22),e(932,"-"),t(),n(933,"td",23)(934,"em")(935,"strong"),e(936,"(opcional)"),t()(),n(937,"p"),e(938,"Evento disparado ao alterar valor do campo."),t()()(),n(939,"tr",16)(940,"td",17)(941,"div",18)(942,"span",19),e(943," p-optional"),o(944,"br"),t()()(),n(945,"td",20)(946,"code",29),e(947,"boolean"),t()(),n(948,"td",22)(949,"p")(950,"code"),e(951,"false"),t()()(),n(952,"td",23)(953,"em")(954,"strong"),e(955,"(opcional)"),t()(),n(956,"p"),e(957,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(958,"blockquote")(959,"p"),e(960,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(961,"ul")(962,"li"),e(963,"O campo conter "),n(964,"code"),e(965,"p-required"),t(),e(966,";"),t(),n(967,"li"),e(968,"N\xE3o possuir "),n(969,"code"),e(970,"p-help"),t(),e(971," e/ou "),n(972,"code"),e(973,"p-label"),t(),e(974,"."),t()()()(),n(975,"tr",16)(976,"td",17)(977,"div",18)(978,"span",19),e(979," p-placeholder"),o(980,"br"),t()()(),n(981,"td",20)(982,"code",21),e(983,"string"),t()(),n(984,"td",22),e(985,"-"),t(),n(986,"td",23)(987,"em")(988,"strong"),e(989,"(opcional)"),t()(),n(990,"p"),e(991,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(992,"tr",16)(993,"td",17)(994,"div",18)(995,"span",19),e(996," p-helper"),o(997,"br"),t()()(),n(998,"td",20)(999,"code",35),e(1e3,"PoHelperOptions "),t(),n(1001,"code",21),e(1002," string"),t()(),n(1003,"td",22),e(1004,"-"),t(),n(1005,"td",23)(1006,"em")(1007,"strong"),e(1008,"(opcional)"),t()(),n(1009,"p"),e(1010,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1011,"code"),e(1012,"p-label"),t(),e(1013," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1014,"code"),e(1015,"p-label"),t(),e(1016,"."),t(),n(1017,"blockquote")(1018,"p"),e(1019,"Para mais informa\xE7\xF5es acesse: "),n(1020,"a",36),e(1021,"https://po-ui.io/documentation/po-helper"),t(),e(1022,"."),t()(),n(1023,"blockquote")(1024,"p"),e(1025,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1026,"code"),e(1027,"p-additional-help-tooltip"),t(),e(1028," e "),n(1029,"code"),e(1030,"p-additional-help"),t(),e(1031,") ser\xE1 ignorado."),t()()()(),n(1032,"tr",16)(1033,"td",17)(1034,"div",18)(1035,"span",19),e(1036,"p-readonly"),o(1037,"br"),t()()(),n(1038,"td",20)(1039,"code",29),e(1040,"boolean"),t()(),n(1041,"td",22),e(1042,"-"),t(),n(1043,"td",23)(1044,"em")(1045,"strong"),e(1046,"(opcional)"),t()(),n(1047,"p"),e(1048,"Torna o elemento somente leitura."),t()()(),n(1049,"tr",16)(1050,"td",17)(1051,"div",18)(1052,"span",19),e(1053,"p-required"),o(1054,"br"),t()()(),n(1055,"td",20)(1056,"code",29),e(1057,"boolean"),t()(),n(1058,"td",22)(1059,"p")(1060,"code"),e(1061,"false"),t()()(),n(1062,"td",23)(1063,"em")(1064,"strong"),e(1065,"(opcional)"),t()(),n(1066,"p"),e(1067,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(1068,"tr",16)(1069,"td",17)(1070,"div",18)(1071,"span",19),e(1072," p-required-field-error-message"),o(1073,"br"),t()()(),n(1074,"td",20)(1075,"code",29),e(1076,"boolean"),t()(),n(1077,"td",22)(1078,"p")(1079,"code"),e(1080,"false"),t()()(),n(1081,"td",23)(1082,"em")(1083,"strong"),e(1084,"(opcional)"),t()(),n(1085,"p"),e(1086,"Exibe a mensagem setada na propriedade "),n(1087,"code"),e(1088,"p-error-pattern"),t(),e(1089," se o campo estiver vazio e for requerido."),t(),n(1090,"blockquote")(1091,"p"),e(1092,"Necess\xE1rio que a propriedade "),n(1093,"code"),e(1094,"p-required"),t(),e(1095," esteja habilitada."),t()()()(),n(1096,"tr",16)(1097,"td",17)(1098,"div",18)(1099,"span",19),e(1100," p-show-required"),o(1101,"br"),t()()(),n(1102,"td",20)(1103,"code",29),e(1104,"boolean"),t()(),n(1105,"td",22),e(1106,"-"),t(),n(1107,"td",23)(1108,"p"),e(1109,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1110,"blockquote")(1111,"p"),e(1112,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1113,"ul")(1114,"li"),e(1115,"N\xE3o possuir "),n(1116,"code"),e(1117,"p-help"),t(),e(1118," e/ou "),n(1119,"code"),e(1120,"p-label"),t(),e(1121,"."),t()()()(),n(1122,"tr",16)(1123,"td",17)(1124,"div",18)(1125,"span",19),e(1126," p-size"),o(1127,"br"),t()()(),n(1128,"td",20)(1129,"code",21),e(1130,"string"),t()(),n(1131,"td",22)(1132,"p")(1133,"code"),e(1134,"medium"),t()()(),n(1135,"td",23)(1136,"em")(1137,"strong"),e(1138,"(opcional)"),t()(),n(1139,"p"),e(1140,"Define o tamanho do componente:"),t(),n(1141,"ul")(1142,"li")(1143,"code"),e(1144,"small"),t(),e(1145,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1146,"li")(1147,"code"),e(1148,"medium"),t(),e(1149,": altura do input como 44px."),t()(),n(1150,"blockquote")(1151,"p"),e(1152,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1153,"code"),e(1154,"medium"),t(),e(1155,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1156,"a",37),e(1157,"po-theme"),t(),e(1158,"."),t()()()(),n(1159,"tr",16)(1160,"td",17)(1161,"div",18)(1162,"span",19),e(1163," p-year-range-limit"),o(1164,"br"),t()()(),n(1165,"td",20)(1166,"code",38),e(1167,"number"),t()(),n(1168,"td",22)(1169,"p"),e(1170,"150"),t()(),n(1171,"td",23)(1172,"em")(1173,"strong"),e(1174,"(opcional)"),t()(),n(1175,"p"),e(1176,"Define o limite de anos exibidos nas varia\xE7\xF5es "),n(1177,"code"),e(1178,"month-year"),t(),e(1179," e "),n(1180,"code"),e(1181,"year"),t(),e(1182,`,
considerando a data atual como refer\xEAncia.`),t(),n(1183,"p"),e(1184,`O valor informado determina o intervalo de anos anterior e posterior
\xE0 data corrente que ser\xE1 disponibilizado para sele\xE7\xE3o.`),t()()()(),n(1185,"h3",12),e(1186,"M\xE9todos"),t(),n(1187,"table",39)(1188,"tr",16)(1189,"th",40)(1190,"div",18)(1191,"h4")(1192,"span",19),e(1193," focus "),t()()()()(),n(1194,"tr",23)(1195,"td",23)(1196,"p"),e(1197,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1198,"p"),e(1199,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1200,"pre")(1201,"code"),e(1202,`import { PoDatepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoDatepickerComponent, { static: true }) datepicker: PoDatepickerComponent;

focusDatepicker() {
  this.datepicker.focus();
}
`),t()()()()(),o(1203,"br"),n(1204,"table",39)(1205,"tr",16)(1206,"th",40)(1207,"div",18)(1208,"h4")(1209,"span",19),e(1210," showAdditionalHelp "),t()()()()(),n(1211,"tr",23)(1212,"td",23)(1213,"p"),e(1214,"M\xE9todo que exibe "),n(1215,"code"),e(1216,"p-helper"),t(),e(1217," ou executa a a\xE7\xE3o definida em "),n(1218,"code"),e(1219,"p-helper{eventOnClick}"),t(),e(1220," ou em "),n(1221,"code"),e(1222,"p-additionalHelp"),t(),e(1223,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1224,"code"),e(1225,"p-keydown"),t(),e(1226,"."),t(),n(1227,"blockquote")(1228,"p"),e(1229,"Exibe ou oculta o conte\xFAdo do componente "),n(1230,"code"),e(1231,"po-helper"),t(),e(1232," quando o componente estiver com foco."),t()(),n(1233,"pre")(1234,"code"),e(1235,`// Exemplo com p-label e p-helper
<po-datepicker
 #datepicker
 ...
 p-label="Label do datepicker"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, datepicker)"
></po-datepicker>
`),t()(),n(1236,"pre")(1237,"code"),e(1238,`...
onKeyDown(event: KeyboardEvent, inp: PoDatepickerComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1239,"br"),n(1240,"h3"),e(1241,"Enums"),t(),n(1242,"h4",4)(1243,"code",5),e(1244,"PoDatepickerIsoFormat"),t()(),n(1245,"div",2)(1246,"p")(1247,"em"),e(1248,"Enum"),t(),e(1249," que define o padr\xE3o de formata\xE7\xE3o das datas."),t(),n(1250,"blockquote")(1251,"p"),e(1252,"Caso um formato padr\xE3o seja definido, o mesmo n\xE3o ser\xE1 mais alterado de acordo com o formato de entrada."),t()()(),n(1253,"h4",12),e(1254,"Propriedades"),t(),n(1255,"table",13)(1256,"tr",14)(1257,"th",15),e(1258,"Nome"),t(),n(1259,"th",15),e(1260,"Descri\xE7\xE3o"),t()(),n(1261,"tr",16)(1262,"td",17)(1263,"div",18)(1264,"span",19),e(1265," Basic"),o(1266,"br"),t()()(),n(1267,"td",23)(1268,"p"),e(1269,"Padr\xE3o "),n(1270,"strong"),e(1271,"E8601DAw"),t(),e(1272," ("),n(1273,"em"),e(1274,"yyyy-mm-dd"),t(),e(1275,")."),t()()(),n(1276,"tr",16)(1277,"td",17)(1278,"div",18)(1279,"span",19),e(1280," Extended"),o(1281,"br"),t()()(),n(1282,"td",23)(1283,"p"),e(1284,"Padr\xE3o "),n(1285,"strong"),e(1286,"E8601DZw"),t(),e(1287," ("),n(1288,"em"),e(1289,"yyyy-mm-ddThh:mm:ss+|-hh:mm"),t(),e(1290,")."),t()()()()())},dependencies:[C],encapsulation:2})}return a})();var De=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(Z(le),Z(re))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Datepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-datepicker-doc"),t(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-datepicker-basic-view")(6,"sample-po-datepicker-labs-view")(7,"sample-po-datepicker-year-view")(8,"sample-po-datepicker-month-year-view")(9,"sample-po-datepicker-airfare-view")(10,"sample-po-datepicker-airfare-reactive-form-view"),t()()()),l&2&&(d("p-actions",i.actions),p(2),d("p-active",i.activeTab==="doc"),p(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[de,x,y,ue,fe,ge,he,xe,Ce,ke],encapsulation:2})}return a})();var Ke=[{path:"",component:De}],we=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=j({type:a});static \u0275inj=Y({imports:[J.forChild(Ke),J]})}return a})();var It=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=j({type:a});static \u0275inj=Y({imports:[se,we]})}return a})();export{It as DocPoDatepickerModule};
