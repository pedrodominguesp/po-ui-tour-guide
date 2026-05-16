import{o as k,p as me}from"./chunk-AT3MKFJ3.js";import{Gb as x,Hb as C,Ja as A,Ra as oe,S as ee,U as te,W as ne,X as G,Xa as ae,Y as _,a as $,ab as le,fa as ie,tb as re,w as L,za as N}from"./chunk-GCMU57WK.js";import{Ea as c,Fa as n,Ga as e,Ha as a,I as B,L as F,Mb as M,Mc as D,Nc as V,O as S,Oa as W,Oc as I,P as b,Pa as f,Pc as H,Qc as O,Va as Q,Wa as J,Xa as K,_a as X,bb as T,cb as t,cd as Y,eb as y,ed as Z,gb as u,gd as j,ha as m,hb as g,ib as h,ma as R,oa as E,pa as q,rb as w}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","timepicker","p-label","PO Timepicker"]],template:function(r,i){r&1&&a(0,"po-timepicker",0)},dependencies:[_],encapsulation:2})}return l})();var Ce=l=>({"docs-sample-code-tabs":l}),de=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Timepicker Basic"),e(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-timepicker name="timepicker" p-label="PO Timepicker"> </po-timepicker>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-timepicker-basic/sample-po-timepicker-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-timepicker-basic',
  templateUrl: './sample-po-timepicker-basic.component.html',
  standalone: false
})
export class SamplePoTimepickerBasicComponent {}
`),e()()()()(),n(21,"div",10),a(22,"sample-po-timepicker-basic"),e(),a(23,"hr")),r&2&&(m(5),T("po-icon "+i.sampleCodeButtonIcon),m(),y(" ",i.sampleCodeButtonLabel),m(),c("ngClass",w(4,Ce,i.hideSampleCodeTabs)))},dependencies:[M,k,x,C,pe],encapsulation:2})}return l})();var ce=(()=>{class l{timepicker;event;errorPattern;format;help;helper;modelFormat;label;locale;maxTime;minTime;minuteInterval;secondInterval;placeholder;properties;size;modelFormatOptions=[{label:"HourMinute",value:G.HourMinute},{label:"HourMinuteSecond",value:G.HourMinuteSecond}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"},{value:"showSeconds",label:"Show Seconds"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"},{value:"appendInBody",label:"Append In Body"}];formatOptions=[{label:"24",value:"24"},{label:"12",value:"12"}];localeOptions=[{label:"pt",value:"pt"},{label:"en",value:"en"},{label:"es",value:"es"},{label:"ru",value:"ru"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.timepicker=void 0,this.event=void 0,this.errorPattern=void 0,this.format=void 0,this.help=void 0,this.helper=void 0,this.modelFormat=void 0,this.label=void 0,this.locale=void 0,this.maxTime=void 0,this.minTime=void 0,this.minuteInterval=void 0,this.secondInterval=void 0,this.placeholder=void 0,this.properties=[],this.size="medium"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-labs"]],standalone:!1,decls:24,vars:49,consts:[["f","ngForm"],["name","timepicker",1,"po-sm-12",3,"ngModelChange","p-blur","p-change","p-keydown","ngModel","p-clean","p-disabled","p-error-pattern","p-format","p-helper","p-help","p-model-format","p-label","p-locale","p-max-time","p-min-time","p-minute-interval","p-second-interval","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-show-seconds","p-label-text-wrap","p-loading","p-compact-label","p-append-in-body","p-error-limit","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helper","p-clean","","p-label","Helper",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minTime","p-clean","","p-label","Min Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","maxTime","p-clean","","p-label","Max Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minuteInterval","p-clean","","p-label","Minute Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondInterval","p-clean","","p-label","Second Interval",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","locale","p-columns","4","p-label","Locale",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","format","p-columns","4","p-label","Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","modelFormat","p-columns","4","p-label","Model Format",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","restore","p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=W();n(0,"po-timepicker",1),h("ngModelChange",function(o){return S(s),g(i.timepicker,o)||(i.timepicker=o),b(o)}),f("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-keydown",function(){return i.changeEvent("p-keydown")}),e(),a(1,"po-divider"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),e(),a(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(o){return S(s),g(i.label,o)||(i.label=o),b(o)}),e(),n(9,"po-input",6),h("ngModelChange",function(o){return S(s),g(i.help,o)||(i.help=o),b(o)}),e(),n(10,"po-input",7),h("ngModelChange",function(o){return S(s),g(i.helper,o)||(i.helper=o),b(o)}),e(),n(11,"po-input",8),h("ngModelChange",function(o){return S(s),g(i.placeholder,o)||(i.placeholder=o),b(o)}),e(),n(12,"po-input",9),h("ngModelChange",function(o){return S(s),g(i.errorPattern,o)||(i.errorPattern=o),b(o)}),e(),n(13,"po-timepicker",10),h("ngModelChange",function(o){return S(s),g(i.minTime,o)||(i.minTime=o),b(o)}),e(),n(14,"po-timepicker",11),h("ngModelChange",function(o){return S(s),g(i.maxTime,o)||(i.maxTime=o),b(o)}),e(),n(15,"po-number",12),h("ngModelChange",function(o){return S(s),g(i.minuteInterval,o)||(i.minuteInterval=o),b(o)}),e(),n(16,"po-number",13),h("ngModelChange",function(o){return S(s),g(i.secondInterval,o)||(i.secondInterval=o),b(o)}),e(),n(17,"po-checkbox-group",14),h("ngModelChange",function(o){return S(s),g(i.properties,o)||(i.properties=o),b(o)}),e(),n(18,"po-radio-group",15),h("ngModelChange",function(o){return S(s),g(i.locale,o)||(i.locale=o),b(o)}),e(),n(19,"po-radio-group",16),h("ngModelChange",function(o){return S(s),g(i.format,o)||(i.format=o),b(o)}),e(),n(20,"po-radio-group",17),h("ngModelChange",function(o){return S(s),g(i.modelFormat,o)||(i.modelFormat=o),b(o)}),e(),n(21,"po-radio-group",18),h("ngModelChange",function(o){return S(s),g(i.size,o)||(i.size=o),b(o)}),e(),n(22,"div",2)(23,"po-button",19),f("p-click",function(){return i.restore()}),e()()()}r&2&&(u("ngModel",i.timepicker),c("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-format",i.format)("p-helper",i.helper)("p-help",i.help)("p-model-format",i.modelFormat)("p-label",i.label)("p-locale",i.locale)("p-max-time",i.maxTime)("p-min-time",i.minTime)("p-minute-interval",i.minuteInterval)("p-second-interval",i.secondInterval)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-show-seconds",i.properties.includes("showSeconds"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-loading",i.properties.includes("loading"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-append-in-body",i.properties==null?null:i.properties.includes("appendInBody"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-size",i.size),m(3),c("p-value",i.timepicker),m(),c("p-value",i.event),m(4),u("ngModel",i.label),m(),u("ngModel",i.help),m(),u("ngModel",i.helper),m(),u("ngModel",i.placeholder),m(),u("ngModel",i.errorPattern),m(),u("ngModel",i.minTime),m(),u("ngModel",i.maxTime),m(),u("ngModel",i.minuteInterval),m(),u("ngModel",i.secondInterval),m(),u("ngModel",i.properties),c("p-options",i.propertiesOptions),m(),u("ngModel",i.locale),c("p-options",i.localeOptions),m(),u("ngModel",i.format),c("p-options",i.formatOptions),m(),u("ngModel",i.modelFormat),c("p-options",i.modelFormatOptions),m(),u("ngModel",i.size),c("p-options",i.sizeOptions))},dependencies:[O,D,V,H,I,L,$,ee,te,_,A,oe,le],encapsulation:2})}return l})();var ye=l=>({"docs-sample-code-tabs":l}),ue=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Timepicker Labs"),e(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-timepicker
  class="po-sm-12"
  name="timepicker"
  [(ngModel)]="timepicker"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-format]="format"
  [p-helper]="helper"
  [p-help]="help"
  [p-model-format]="modelFormat"
  [p-label]="label"
  [p-locale]="locale"
  [p-max-time]="maxTime"
  [p-min-time]="minTime"
  [p-minute-interval]="minuteInterval"
  [p-second-interval]="secondInterval"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-seconds]="properties.includes('showSeconds')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-loading]="properties.includes('loading')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-append-in-body]="properties?.includes('appendInBody')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-timepicker>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="timepicker"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helper" [(ngModel)]="helper" p-clean p-label="Helper"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-timepicker class="po-md-6" name="minTime" [(ngModel)]="minTime" p-clean p-label="Min Time"> </po-timepicker>

  <po-timepicker class="po-md-6" name="maxTime" [(ngModel)]="maxTime" p-clean p-label="Max Time"> </po-timepicker>

  <po-number class="po-md-6" name="minuteInterval" [(ngModel)]="minuteInterval" p-clean p-label="Minute Interval">
  </po-number>

  <po-number class="po-md-6" name="secondInterval" [(ngModel)]="secondInterval" p-clean p-label="Second Interval">
  </po-number>

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
    name="modelFormat"
    [(ngModel)]="modelFormat"
    p-columns="4"
    p-label="Model Format"
    [p-options]="modelFormatOptions"
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
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-timepicker-labs/sample-po-timepicker-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoTimepickerModelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-labs',
  templateUrl: './sample-po-timepicker-labs.component.html',
  standalone: false
})
export class SamplePoTimepickerLabsComponent implements OnInit {
  timepicker: string;
  event: string;
  errorPattern: string;
  format: string;
  help: string;
  helper: string;
  modelFormat: string;
  label: string;
  locale: string;
  maxTime: string;
  minTime: string;
  minuteInterval: number;
  secondInterval: number;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly modelFormatOptions: Array<PoRadioGroupOption> = [
    { label: 'HourMinute', value: PoTimepickerModelFormat.HourMinute },
    { label: 'HourMinuteSecond', value: PoTimepickerModelFormat.HourMinuteSecond }
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
    { value: 'showSeconds', label: 'Show Seconds' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'appendInBody', label: 'Append In Body' }
  ];

  public readonly formatOptions: Array<PoRadioGroupOption> = [
    { label: '24', value: '24' },
    { label: '12', value: '12' }
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
    this.timepicker = undefined;
    this.event = undefined;
    this.errorPattern = undefined;
    this.format = undefined;
    this.help = undefined;
    this.helper = undefined;
    this.modelFormat = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.maxTime = undefined;
    this.minTime = undefined;
    this.minuteInterval = undefined;
    this.secondInterval = undefined;
    this.placeholder = undefined;
    this.properties = [];
    this.size = 'medium';
  }
}
`),e()()()()(),n(21,"div",10),a(22,"sample-po-timepicker-labs"),e(),a(23,"hr")),r&2&&(m(5),T("po-icon "+i.sampleCodeButtonIcon),m(),y(" ",i.sampleCodeButtonLabel),m(),c("ngClass",w(4,ye,i.hideSampleCodeTabs)))},dependencies:[M,k,x,C,ce],encapsulation:2})}return l})();var Me=["formScheduling"],ge=(()=>{class l{poDialog=F(ie);poNotification=F(N);formScheduling;title="";date=new Date;startTime="";endTime="";room="";roomOptions=[{value:"sala-a",label:"Sala A"},{value:"sala-b",label:"Sala B"},{value:"sala-c",label:"Sala C"},{value:"auditorio",label:"Audit\xF3rio"}];schedule(){let d=`Deseja confirmar o agendamento "${this.title}" no dia ${this.getFormatedDate(this.date)} das ${this.startTime} \xE0s ${this.endTime} na ${this.getRoomLabel()}?`;this.poDialog.confirm({title:"Confirmar Agendamento",message:d,confirm:()=>{this.poNotification.success("Agendamento confirmado com sucesso!"),this.formScheduling.reset({date:"",room:""})},cancel:()=>{this.poNotification.warning("Agendamento cancelado.")}})}getFormatedDate(d){return d&&d.slice(0,10)}getRoomLabel(){let d=this.roomOptions.find(r=>r.value===this.room);return d?d.label:this.room}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-scheduling"]],viewQuery:function(r,i){if(r&1&&Q(Me,7),r&2){let s;J(s=K())&&(i.formScheduling=s.first)}},standalone:!1,decls:11,vars:9,consts:[["formScheduling","ngForm"],[1,"po-row"],["name","title","p-label","T\xEDtulo do agendamento","p-placeholder","Ex: Reuni\xE3o de planejamento","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","date","p-clean","","p-format","dd/mm/yyyy","p-label","Data","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","startTime","p-label","Hor\xE1rio de in\xEDcio","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","endTime","p-label","Hor\xE1rio de t\xE9rmino","p-placeholder","HH:mm","p-clean","","p-required","","p-min-time","08:00","p-max-time","18:00","p-error-pattern","Hor\xE1rio fora do expediente (08:00 - 18:00)",1,"po-md-4",3,"ngModelChange","ngModel","p-show-required"],["name","room","p-label","Sala","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","scheduleButton","p-label","Agendar",1,"po-md-3","po-offset-md-9","po-offset-lg-9",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let s=W();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),h("ngModelChange",function(o){return S(s),g(i.title,o)||(i.title=o),b(o)}),e(),n(4,"po-datepicker",3),h("ngModelChange",function(o){return S(s),g(i.date,o)||(i.date=o),b(o)}),e()(),n(5,"div",1)(6,"po-timepicker",4),h("ngModelChange",function(o){return S(s),g(i.startTime,o)||(i.startTime=o),b(o)}),e(),n(7,"po-timepicker",5),h("ngModelChange",function(o){return S(s),g(i.endTime,o)||(i.endTime=o),b(o)}),e(),n(8,"po-select",6),h("ngModelChange",function(o){return S(s),g(i.room,o)||(i.room=o),b(o)}),e()(),n(9,"div",1)(10,"po-button",7),f("p-click",function(){return i.schedule()}),e()()()}if(r&2){let s=X(1);m(3),u("ngModel",i.title),m(),u("ngModel",i.date),m(2),u("ngModel",i.startTime),c("p-show-required",!0),m(),u("ngModel",i.endTime),c("p-show-required",!0),m(),u("ngModel",i.room),c("p-options",i.roomOptions),m(2),c("p-disabled",s.invalid)}},dependencies:[O,D,V,H,I,L,ne,_,A,ae],encapsulation:2})}return l})();var Pe=l=>({"docs-sample-code-tabs":l}),he=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-scheduling-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Timepicker - Scheduling"),e(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.html"),e(),n(13,"pre",7),t(14,`<form #formScheduling="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="title"
      [(ngModel)]="title"
      p-label="T\xEDtulo do agendamento"
      p-placeholder="Ex: Reuni\xE3o de planejamento"
      p-required
    >
    </po-input>

    <po-datepicker
      class="po-md-6"
      name="date"
      [(ngModel)]="date"
      p-clean
      p-format="dd/mm/yyyy"
      p-label="Data"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-timepicker
      class="po-md-4"
      name="startTime"
      [(ngModel)]="startTime"
      p-label="Hor\xE1rio de in\xEDcio"
      p-placeholder="HH:mm"
      p-clean
      p-required
      p-min-time="08:00"
      p-max-time="18:00"
      p-error-pattern="Hor\xE1rio fora do expediente (08:00 - 18:00)"
      [p-show-required]="true"
    >
    </po-timepicker>

    <po-timepicker
      class="po-md-4"
      name="endTime"
      [(ngModel)]="endTime"
      p-label="Hor\xE1rio de t\xE9rmino"
      p-placeholder="HH:mm"
      p-clean
      p-required
      p-min-time="08:00"
      p-max-time="18:00"
      p-error-pattern="Hor\xE1rio fora do expediente (08:00 - 18:00)"
      [p-show-required]="true"
    >
    </po-timepicker>

    <po-select class="po-md-4" name="room" [(ngModel)]="room" p-label="Sala" p-required [p-options]="roomOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3 po-offset-md-9 po-offset-lg-9"
      name="scheduleButton"
      p-label="Agendar"
      [p-disabled]="formScheduling.invalid"
      (p-click)="schedule()"
    >
    </po-button>
  </div>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-timepicker-scheduling/sample-po-timepicker-scheduling.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoDialogService, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-scheduling',
  templateUrl: './sample-po-timepicker-scheduling.component.html',
  standalone: false
})
export class SamplePoTimepickerSchedulingComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formScheduling', { static: true }) formScheduling: UntypedFormControl;

  title: string = '';
  date: string = <any>new Date();
  startTime: string = '';
  endTime: string = '';
  room: string = '';

  public readonly roomOptions: Array<PoSelectOption> = [
    { value: 'sala-a', label: 'Sala A' },
    { value: 'sala-b', label: 'Sala B' },
    { value: 'sala-c', label: 'Sala C' },
    { value: 'auditorio', label: 'Audit\xF3rio' }
  ];

  schedule() {
    const message = \`Deseja confirmar o agendamento "\${this.title}" no dia \${this.getFormatedDate(this.date)} das \${this.startTime} \xE0s \${this.endTime} na \${this.getRoomLabel()}?\`;

    this.poDialog.confirm({
      title: 'Confirmar Agendamento',
      message,
      confirm: () => {
        this.poNotification.success('Agendamento confirmado com sucesso!');

        this.formScheduling.reset({
          date: '',
          room: ''
        });
      },
      cancel: () => {
        this.poNotification.warning('Agendamento cancelado.');
      }
    });
  }

  private getFormatedDate(date: string) {
    return date && date.slice(0, 10);
  }

  private getRoomLabel(): string {
    const option = this.roomOptions.find(o => o.value === this.room);
    return option ? option.label : this.room;
  }
}
`),e()()()()(),n(21,"div",10),a(22,"sample-po-timepicker-scheduling"),e(),a(23,"hr")),r&2&&(m(5),T("po-icon "+i.sampleCodeButtonIcon),m(),y(" ",i.sampleCodeButtonLabel),m(),c("ngClass",w(4,Pe,i.hideSampleCodeTabs)))},dependencies:[M,k,x,C,ge],encapsulation:2})}return l})();var Se=(()=>{class l{poNotification=F(N);openTime="08:00";closeTime="18:00";lunchStart="12:00";lunchEnd="13:00";save(){this.poNotification.success(`Hor\xE1rio comercial salvo: ${this.openTime} - ${this.closeTime} (Almo\xE7o: ${this.lunchStart} - ${this.lunchEnd})`)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-business-hours"]],standalone:!1,decls:8,vars:14,consts:[[1,"po-row"],["name","openTime","p-label","Abertura","p-clean","","p-min-time","06:00",1,"po-md-6",3,"ngModelChange","ngModel","p-max-time","p-minute-interval"],["name","closeTime","p-label","Fechamento","p-clean","","p-max-time","23:00",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-minute-interval"],["name","lunchStart","p-label","In\xEDcio do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["name","lunchEnd","p-label","Fim do almo\xE7o","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-time","p-max-time","p-minute-interval"],["p-label","Salvar","p-kind","primary",1,"po-md-3","po-offset-md-9",3,"p-click"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"po-timepicker",1),h("ngModelChange",function(p){return g(i.openTime,p)||(i.openTime=p),p}),e(),n(2,"po-timepicker",2),h("ngModelChange",function(p){return g(i.closeTime,p)||(i.closeTime=p),p}),e()(),n(3,"div",0)(4,"po-timepicker",3),h("ngModelChange",function(p){return g(i.lunchStart,p)||(i.lunchStart=p),p}),e(),n(5,"po-timepicker",4),h("ngModelChange",function(p){return g(i.lunchEnd,p)||(i.lunchEnd=p),p}),e()(),n(6,"div",0)(7,"po-button",5),f("p-click",function(){return i.save()}),e()()),r&2&&(m(),u("ngModel",i.openTime),c("p-max-time",i.lunchStart)("p-minute-interval",30),m(),u("ngModel",i.closeTime),c("p-min-time",i.lunchEnd)("p-minute-interval",30),m(2),u("ngModel",i.lunchStart),c("p-min-time",i.openTime)("p-max-time",i.lunchEnd)("p-minute-interval",15),m(),u("ngModel",i.lunchEnd),c("p-min-time",i.lunchStart)("p-max-time",i.closeTime)("p-minute-interval",15))},dependencies:[D,H,L,_],encapsulation:2})}return l})();var Le=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-business-hours-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Timepicker - Business Hours"),e(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.html"),e(),n(13,"pre",7),t(14,`<div class="po-row">
  <po-timepicker
    class="po-md-6"
    name="openTime"
    [(ngModel)]="openTime"
    p-label="Abertura"
    p-clean
    p-min-time="06:00"
    [p-max-time]="lunchStart"
    [p-minute-interval]="30"
  >
  </po-timepicker>

  <po-timepicker
    class="po-md-6"
    name="closeTime"
    [(ngModel)]="closeTime"
    p-label="Fechamento"
    p-clean
    [p-min-time]="lunchEnd"
    p-max-time="23:00"
    [p-minute-interval]="30"
  >
  </po-timepicker>
</div>

<div class="po-row">
  <po-timepicker
    class="po-md-6"
    name="lunchStart"
    [(ngModel)]="lunchStart"
    p-label="In\xEDcio do almo\xE7o"
    p-clean
    [p-min-time]="openTime"
    [p-max-time]="lunchEnd"
    [p-minute-interval]="15"
  >
  </po-timepicker>

  <po-timepicker
    class="po-md-6"
    name="lunchEnd"
    [(ngModel)]="lunchEnd"
    p-label="Fim do almo\xE7o"
    p-clean
    [p-min-time]="lunchStart"
    [p-max-time]="closeTime"
    [p-minute-interval]="15"
  >
  </po-timepicker>
</div>

<div class="po-row">
  <po-button class="po-md-3 po-offset-md-9" p-label="Salvar" p-kind="primary" (p-click)="save()"> </po-button>
</div>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-timepicker-business-hours/sample-po-timepicker-business-hours.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, inject } from '@angular/core';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-timepicker-business-hours',
  templateUrl: './sample-po-timepicker-business-hours.component.html',
  standalone: false
})
export class SamplePoTimepickerBusinessHoursComponent {
  private poNotification = inject(PoNotificationService);

  openTime: string = '08:00';
  closeTime: string = '18:00';
  lunchStart: string = '12:00';
  lunchEnd: string = '13:00';

  save() {
    this.poNotification.success(
      \`Hor\xE1rio comercial salvo: \${this.openTime} - \${this.closeTime} (Almo\xE7o: \${this.lunchStart} - \${this.lunchEnd})\`
    );
  }
}
`),e()()()()(),n(21,"div",10),a(22,"sample-po-timepicker-business-hours"),e(),a(23,"hr")),r&2&&(m(5),T("po-icon "+i.sampleCodeButtonIcon),m(),y(" ",i.sampleCodeButtonLabel),m(),c("ngClass",w(4,Le,i.hideSampleCodeTabs)))},dependencies:[M,k,x,C,Se],encapsulation:2})}return l})();var Ee=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=E({type:l,selectors:[["sample-po-timepicker-doc"]],standalone:!1,decls:1006,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoTimerFormat"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","PoHelperOptions"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoFieldModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),e(),n(7,"blockquote")(8,"p"),t(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),t(11,"FormsModule"),e(),t(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),t(14,"ReactiveFormsModule"),e(),t(15,", ambos nativos do Angular."),e()()(),n(16,"h3",3),t(17,"Componente"),e(),n(18,"h4",4)(19,"code",5),t(20,"PoTimepickerComponent"),e()(),n(21,"div",2)(22,"p"),t(23,"O "),n(24,"code"),t(25,"po-timepicker"),e(),t(26," \xE9 um componente para sele\xE7\xE3o de hor\xE1rio que permite a digita\xE7\xE3o e/ou sele\xE7\xE3o via painel flutuante."),e(),n(27,"p"),t(28,"O formato de exibi\xE7\xE3o do hor\xE1rio pode ser de 24 horas ("),n(29,"code"),t(30,"HH:mm"),e(),t(31,") ou 12 horas ("),n(32,"code"),t(33,"hh:mm AM/PM"),e(),t(34,`),
e opcionalmente incluir segundos (`),n(35,"code"),t(36,"HH:mm:ss"),e(),t(37,")."),e(),n(38,"p"),t(39,"O valor de sa\xEDda segue o formato ISO 8601 para hor\xE1rios ("),n(40,"code"),t(41,"HH:mm"),e(),t(42," ou "),n(43,"code"),t(44,"HH:mm:ss"),e(),t(45,")."),e(),n(46,"p")(47,"strong"),t(48,"Importante:"),e()(),n(49,"ul")(50,"li"),t(51,"Caso o valor digitado seja inv\xE1lido, o "),n(52,"code"),t(53,"model"),e(),t(54," receber\xE1 uma string vazia."),e(),n(55,"li"),t(56,"Caso o "),n(57,"code"),t(58,"input"),e(),t(59," esteja passando um "),n(60,"code"),t(61,"[(ngModel)]"),e(),t(62,", mas n\xE3o tenha um "),n(63,"code"),t(64,"name"),e(),t(65,`, ent\xE3o ir\xE1 ocorrer um erro
do pr\xF3prio Angular (`),n(66,"code"),t(67,'[ngModelOptions]="{standalone: true}"'),e(),t(68,")."),e()(),n(69,"blockquote")(70,"p"),t(71,"N\xE3o esque\xE7a de importar o "),n(72,"code"),t(73,"FormsModule"),e(),t(74," em seu m\xF3dulo, tal como para utilizar o "),n(75,"code"),t(76,"input default"),e(),t(77,"."),e()(),n(78,"h4"),t(79,"Tokens customiz\xE1veis"),e(),n(80,"p"),t(81,`\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(82,"code"),t(83,".po-input"),e()(),n(84,"blockquote")(85,"p"),t(86,"Para maiores informa\xE7\xF5es, acesse o guia "),n(87,"a",6),t(88,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(89,"."),e()(),n(90,"table")(91,"thead")(92,"tr")(93,"th"),t(94,"Propriedade"),e(),n(95,"th"),t(96,"Descri\xE7\xE3o"),e(),n(97,"th"),t(98,"Valor Padr\xE3o"),e()()(),n(99,"tbody")(100,"tr")(101,"td")(102,"strong"),t(103,"Default Values"),e()(),a(104,"td")(105,"td"),e(),n(106,"tr")(107,"td")(108,"code"),t(109,"--font-family"),e()(),n(110,"td"),t(111,"Fam\xEDlia tipogr\xE1fica usada"),e(),n(112,"td")(113,"code"),t(114,"var(--font-family-theme)"),e()()(),n(115,"tr")(116,"td")(117,"code"),t(118,"--font-size"),e()(),n(119,"td"),t(120,"Tamanho da fonte"),e(),n(121,"td")(122,"code"),t(123,"var(--font-size-default)"),e()()(),n(124,"tr")(125,"td")(126,"code"),t(127,"--text-color-placeholder"),e()(),n(128,"td"),t(129,"Cor do texto placeholder"),e(),n(130,"td")(131,"code"),t(132,"var(--color-neutral-light-30)"),e()()(),n(133,"tr")(134,"td")(135,"code"),t(136,"--color"),e()(),n(137,"td"),t(138,"Cor principal do timepicker"),e(),n(139,"td")(140,"code"),t(141,"var(--color-neutral-dark-70)"),e()()(),n(142,"tr")(143,"td")(144,"code"),t(145,"--background"),e()(),n(146,"td"),t(147,"Cor de background"),e(),n(148,"td")(149,"code"),t(150,"var(--color-neutral-light-05)"),e()()(),n(151,"tr")(152,"td")(153,"code"),t(154,"--padding"),e()(),n(155,"td"),t(156,"Preenchimento"),e(),n(157,"td")(158,"code"),t(159,"0 0.5rem"),e()()(),n(160,"tr")(161,"td")(162,"code"),t(163,"--text-color"),e()(),n(164,"td"),t(165,"Cor do texto"),e(),n(166,"td")(167,"code"),t(168,"var(--color-neutral-dark-90)"),e()()(),n(169,"tr")(170,"td")(171,"code"),t(172,"--field-container-title-justify"),e()(),n(173,"td"),t(174,"Alinhamento horizontal do t\xEDtulo ("),n(175,"code"),t(176,"justify-content"),e(),t(177,")"),e(),n(178,"td")(179,"code"),t(180,"space-between"),e()()(),n(181,"tr")(182,"td")(183,"code"),t(184,"--field-container-title-flex"),e()(),n(185,"td"),t(186,"Flex do t\xEDtulo ("),n(187,"code"),t(188,"flex"),e(),t(189,")"),e(),n(190,"td")(191,"code"),t(192,"1 auto"),e()()(),n(193,"tr")(194,"td")(195,"strong"),t(196,"Hover"),e()(),a(197,"td")(198,"td"),e(),n(199,"tr")(200,"td")(201,"code"),t(202,"--color-hover"),e()(),n(203,"td"),t(204,"Cor principal no estado hover"),e(),n(205,"td")(206,"code"),t(207,"var(--color-brand-01-dark)"),e()()(),n(208,"tr")(209,"td")(210,"code"),t(211,"--background-hover"),e()(),n(212,"td"),t(213,"Cor de background no estado hover"),e(),n(214,"td")(215,"code"),t(216,"var(--color-brand-01-lightest)"),e()()(),n(217,"tr")(218,"td")(219,"strong"),t(220,"Focused"),e()(),a(221,"td")(222,"td"),e(),n(223,"tr")(224,"td")(225,"code"),t(226,"--color-focused"),e()(),n(227,"td"),t(228,"Cor principal no estado de focus"),e(),n(229,"td")(230,"code"),t(231,"var(--color-action-default)"),e()()(),n(232,"tr")(233,"td")(234,"code"),t(235,"--outline-color-focused"),e()(),n(236,"td"),t(237,"Cor do outline do estado de focus"),e(),n(238,"td")(239,"code"),t(240,"var(--color-action-focus)"),e()()(),n(241,"tr")(242,"td")(243,"strong"),t(244,"Disabled"),e()(),a(245,"td")(246,"td"),e(),n(247,"tr")(248,"td")(249,"code"),t(250,"--color-disabled"),e()(),n(251,"td"),t(252,"Cor principal no estado disabled"),e(),n(253,"td")(254,"code"),t(255,"var(--color-neutral-light-30)"),e()()(),n(256,"tr")(257,"td")(258,"code"),t(259,"--background-disabled"),e()(),n(260,"td"),t(261,"Cor de background no estado disabled"),e(),n(262,"td")(263,"code"),t(264,"var(--color-neutral-light-20)"),e()()(),n(265,"tr")(266,"td")(267,"code"),t(268,"--text-color-disabled"),e()(),n(269,"td"),t(270,"Cor do texto no estado disabled"),e(),n(271,"td")(272,"code"),t(273,"var(--color-neutral-dark-70)"),e()()()()()(),n(274,"div",7)(275,"h4",8),t(276,"Seletor"),e(),n(277,"pre",9),t(278,`<po-timepicker
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-format="PoTimerFormat"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-locale="string"
    p-max-time="string"
    p-min-time="string"
    p-minute-interval="number"
    p-model-format="PoTimepickerModelFormat"
    name="string"
    p-no-autocomplete="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-second-interval="number"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-show-seconds="boolean"
    p-size="string" >
</po-timepicker>
`),e()(),n(279,"h4",10),t(280,"Propriedades"),e(),n(281,"table",11)(282,"tr",12)(283,"th",13),t(284,"Nome"),e(),n(285,"th",13),t(286,"Tipo"),e(),n(287,"th",13),t(288,"Padr\xE3o"),e(),n(289,"th",13),t(290,"Descri\xE7\xE3o"),e()(),n(291,"tr",14)(292,"td",15)(293,"div",16)(294,"span",17),t(295," p-append-in-body"),a(296,"br"),e()()(),n(297,"td",18)(298,"code",19),t(299,"boolean"),e()(),n(300,"td",20)(301,"p")(302,"code"),t(303,"false"),e()()(),n(304,"td",21)(305,"em")(306,"strong"),t(307,"(opcional)"),e()(),n(308,"p"),t(309,"Define que o painel do timer ser\xE1 inclu\xEDdo no body da p\xE1gina."),e()()(),n(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),t(314," p-auto-focus"),a(315,"br"),e()()(),n(316,"td",18)(317,"code",19),t(318,"boolean"),e()(),n(319,"td",20)(320,"p")(321,"code"),t(322,"false"),e()()(),n(323,"td",21)(324,"em")(325,"strong"),t(326,"(opcional)"),e()(),n(327,"p"),t(328,"Aplica foco no elemento ao ser iniciado."),e()()(),n(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),t(333,"p-clean"),a(334,"br"),e()()(),n(335,"td",18)(336,"code",19),t(337,"boolean"),e()(),n(338,"td",20),t(339,"-"),e(),n(340,"td",21)(341,"em")(342,"strong"),t(343,"(opcional)"),e()(),n(344,"p"),t(345,"Habilita a\xE7\xE3o para limpar o campo."),e()()(),n(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),t(350," p-compact-label"),a(351,"br"),e()()(),n(352,"td",18)(353,"code",19),t(354,"boolean"),e()(),n(355,"td",20)(356,"p")(357,"code"),t(358,"false"),e()()(),n(359,"td",21)(360,"em")(361,"strong"),t(362,"(opcional)"),e()(),n(363,"p"),t(364,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),e()()(),n(365,"tr",14)(366,"td",15)(367,"div",16)(368,"span",17),t(369,"p-disabled"),a(370,"br"),e()()(),n(371,"td",18)(372,"code",19),t(373,"boolean"),e()(),n(374,"td",20),t(375,"-"),e(),n(376,"td",21)(377,"em")(378,"strong"),t(379,"(opcional)"),e()(),n(380,"p"),t(381,"Desabilita o campo."),e()()(),n(382,"tr",14)(383,"td",15)(384,"div",16)(385,"span",17),t(386," p-error-limit"),a(387,"br"),e()()(),n(388,"td",18)(389,"code",19),t(390,"boolean"),e()(),n(391,"td",20)(392,"p")(393,"code"),t(394,"false"),e()()(),n(395,"td",21)(396,"em")(397,"strong"),t(398,"(opcional)"),e()(),n(399,"p"),t(400,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),e()()(),n(401,"tr",14)(402,"td",15)(403,"div",16)(404,"span",17),t(405," p-error-pattern"),a(406,"br"),e()()(),n(407,"td",18)(408,"code",22),t(409,"string"),e()(),n(410,"td",20),t(411,"-"),e(),n(412,"td",21)(413,"em")(414,"strong"),t(415,"(opcional)"),e()(),n(416,"p"),t(417,"Mensagem apresentada quando o hor\xE1rio for inv\xE1lido ou fora do per\xEDodo."),e(),n(418,"blockquote")(419,"p"),t(420,"Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido."),e()()()(),n(421,"tr",14)(422,"td",15)(423,"div",16)(424,"span",17),t(425," p-format"),a(426,"br"),e()()(),n(427,"td",18)(428,"code",23),t(429,"PoTimerFormat"),e()(),n(430,"td",20)(431,"p")(432,"code"),t(433,"24"),e()()(),n(434,"td",21)(435,"em")(436,"strong"),t(437,"(opcional)"),e()(),n(438,"p"),t(439,"Define o formato de exibi\xE7\xE3o do timer."),e(),n(440,"p"),t(441,"Valores v\xE1lidos:"),e(),n(442,"ul")(443,"li")(444,"code"),t(445,"24"),e(),t(446,": formato de 24 horas (padr\xE3o)"),e(),n(447,"li")(448,"code"),t(449,"12"),e(),t(450,": formato de 12 horas com indicador AM/PM"),e()()()(),n(451,"tr",14)(452,"td",15)(453,"div",16)(454,"span",17),t(455," p-help"),a(456,"br"),e()()(),n(457,"td",18)(458,"code",22),t(459,"string"),e()(),n(460,"td",20),t(461,"-"),e(),n(462,"td",21)(463,"em")(464,"strong"),t(465,"(opcional)"),e()(),n(466,"p"),t(467,"Texto de apoio do campo."),e()()(),n(468,"tr",14)(469,"td",15)(470,"div",24)(471,"span",25),t(472," (p-keydown)"),a(473,"br"),e()()(),n(474,"td",18)(475,"code",26),t(476,"EventEmitter"),e()(),n(477,"td",20),t(478,"-"),e(),n(479,"td",21)(480,"p"),t(481,"Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente."),e()()(),n(482,"tr",14)(483,"td",15)(484,"div",16)(485,"span",17),t(486," p-label"),a(487,"br"),e()()(),n(488,"td",18)(489,"code",22),t(490,"string"),e()(),n(491,"td",20),t(492,"-"),e(),n(493,"td",21)(494,"em")(495,"strong"),t(496,"(opcional)"),e()(),n(497,"p"),t(498,"R\xF3tulo do campo."),e()()(),n(499,"tr",14)(500,"td",15)(501,"div",16)(502,"span",17),t(503," p-label-text-wrap"),a(504,"br"),e()()(),n(505,"td",18)(506,"code",19),t(507,"boolean"),e()(),n(508,"td",20)(509,"p")(510,"code"),t(511,"false"),e()()(),n(512,"td",21)(513,"em")(514,"strong"),t(515,"(opcional)"),e()(),n(516,"p"),t(517,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(518,"code"),t(519,"p-label"),e(),t(520,"."),e()()(),n(521,"tr",14)(522,"td",15)(523,"div",16)(524,"span",17),t(525," p-loading"),a(526,"br"),e()()(),n(527,"td",18)(528,"code",19),t(529,"boolean"),e()(),n(530,"td",20)(531,"p")(532,"code"),t(533,"false"),e()()(),n(534,"td",21)(535,"em")(536,"strong"),t(537,"(opcional)"),e()(),n(538,"p"),t(539,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),e()()(),n(540,"tr",14)(541,"td",15)(542,"div",16)(543,"span",17),t(544," p-locale"),a(545,"br"),e()()(),n(546,"td",18)(547,"code",22),t(548,"string"),e()(),n(549,"td",20),t(550,"-"),e(),n(551,"td",21)(552,"em")(553,"strong"),t(554,"(opcional)"),e()(),n(555,"p"),t(556,"Idioma do componente."),e()()(),n(557,"tr",14)(558,"td",15)(559,"div",16)(560,"span",17),t(561," p-max-time"),a(562,"br"),e()()(),n(563,"td",18)(564,"code",22),t(565,"string"),e()(),n(566,"td",20),t(567,"-"),e(),n(568,"td",21)(569,"em")(570,"strong"),t(571,"(opcional)"),e()(),n(572,"p"),t(573,"Define o hor\xE1rio m\xE1ximo permitido. Formato: "),n(574,"code"),t(575,"HH:mm"),e(),t(576," ou "),n(577,"code"),t(578,"HH:mm:ss"),e(),t(579,"."),e()()(),n(580,"tr",14)(581,"td",15)(582,"div",16)(583,"span",17),t(584," p-min-time"),a(585,"br"),e()()(),n(586,"td",18)(587,"code",22),t(588,"string"),e()(),n(589,"td",20),t(590,"-"),e(),n(591,"td",21)(592,"em")(593,"strong"),t(594,"(opcional)"),e()(),n(595,"p"),t(596,"Define o hor\xE1rio m\xEDnimo permitido. Formato: "),n(597,"code"),t(598,"HH:mm"),e(),t(599," ou "),n(600,"code"),t(601,"HH:mm:ss"),e(),t(602,"."),e()()(),n(603,"tr",14)(604,"td",15)(605,"div",16)(606,"span",17),t(607," p-minute-interval"),a(608,"br"),e()()(),n(609,"td",18)(610,"code",27),t(611,"number"),e()(),n(612,"td",20)(613,"p")(614,"code"),t(615,"5"),e()()(),n(616,"td",21)(617,"em")(618,"strong"),t(619,"(opcional)"),e()(),n(620,"p"),t(621,"Define o intervalo entre os minutos exibidos no painel."),e()()(),n(622,"tr",14)(623,"td",15)(624,"div",16)(625,"span",17),t(626," p-model-format"),a(627,"br"),e()()(),n(628,"td",18)(629,"code",28),t(630,"PoTimepickerModelFormat"),e()(),n(631,"td",20),t(632,"-"),e(),n(633,"td",21)(634,"em")(635,"strong"),t(636,"(opcional)"),e()(),n(637,"p"),t(638,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do "),n(639,"em"),t(640,"model"),e(),t(641,"."),e(),n(642,"blockquote")(643,"p"),t(644,"Veja os valores v\xE1lidos no "),n(645,"em"),t(646,"enum"),e(),n(647,"code"),t(648,"PoTimepickerModelFormat"),e(),t(649,"."),e()()()(),n(650,"tr",14)(651,"td",15)(652,"div",16)(653,"span",17),t(654," name"),a(655,"br"),e()()(),n(656,"td",18)(657,"code",22),t(658,"string"),e()(),n(659,"td",20),t(660,"-"),e(),n(661,"td",21)(662,"p"),t(663,"Nome do componente."),e()()(),n(664,"tr",14)(665,"td",15)(666,"div",16)(667,"span",17),t(668," p-no-autocomplete"),a(669,"br"),e()()(),n(670,"td",18)(671,"code",19),t(672,"boolean"),e()(),n(673,"td",20)(674,"p")(675,"code"),t(676,"false"),e()()(),n(677,"td",21)(678,"em")(679,"strong"),t(680,"(opcional)"),e()(),n(681,"p"),t(682,"Define a propriedade nativa "),n(683,"code"),t(684,"autocomplete"),e(),t(685," do campo como "),n(686,"code"),t(687,"off"),e(),t(688,"."),e()()(),n(689,"tr",14)(690,"td",15)(691,"div",24)(692,"span",25),t(693," (p-blur)"),a(694,"br"),e()()(),n(695,"td",18)(696,"code",26),t(697,"EventEmitter"),e()(),n(698,"td",20),t(699,"-"),e(),n(700,"td",21)(701,"p"),t(702,"Evento disparado ao sair do campo."),e()()(),n(703,"tr",14)(704,"td",15)(705,"div",24)(706,"span",25),t(707," (p-change)"),a(708,"br"),e()()(),n(709,"td",18)(710,"code",26),t(711,"EventEmitter"),e()(),n(712,"td",20),t(713,"-"),e(),n(714,"td",21)(715,"p"),t(716,"Evento disparado ao alterar valor do campo."),e()()(),n(717,"tr",14)(718,"td",15)(719,"div",16)(720,"span",17),t(721," p-optional"),a(722,"br"),e()()(),n(723,"td",18)(724,"code",19),t(725,"boolean"),e()(),n(726,"td",20)(727,"p")(728,"code"),t(729,"false"),e()()(),n(730,"td",21)(731,"em")(732,"strong"),t(733,"(opcional)"),e()(),n(734,"p"),t(735,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),e()()(),n(736,"tr",14)(737,"td",15)(738,"div",16)(739,"span",17),t(740," p-placeholder"),a(741,"br"),e()()(),n(742,"td",18)(743,"code",22),t(744,"string"),e()(),n(745,"td",20),t(746,"-"),e(),n(747,"td",21)(748,"em")(749,"strong"),t(750,"(opcional)"),e()(),n(751,"p"),t(752,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),e(),n(753,"p"),t(754,"Para personalizar os segmentos, informe o valor no formato "),n(755,"code"),t(756,"HH:mm"),e(),t(757," ou "),n(758,"code"),t(759,"HH:mm:ss"),e(),t(760,"."),e()()(),n(761,"tr",14)(762,"td",15)(763,"div",16)(764,"span",17),t(765," p-helper"),a(766,"br"),e()()(),n(767,"td",18)(768,"code",29),t(769,"PoHelperOptions "),e(),n(770,"code",22),t(771," string"),e()(),n(772,"td",20),t(773,"-"),e(),n(774,"td",21)(775,"em")(776,"strong"),t(777,"(opcional)"),e()(),n(778,"p"),t(779,"Define as op\xE7\xF5es do componente de ajuda (po-helper)."),e()()(),n(780,"tr",14)(781,"td",15)(782,"div",16)(783,"span",17),t(784,"p-readonly"),a(785,"br"),e()()(),n(786,"td",18)(787,"code",19),t(788,"boolean"),e()(),n(789,"td",20),t(790,"-"),e(),n(791,"td",21)(792,"em")(793,"strong"),t(794,"(opcional)"),e()(),n(795,"p"),t(796,"Torna o elemento somente leitura."),e()()(),n(797,"tr",14)(798,"td",15)(799,"div",16)(800,"span",17),t(801,"p-required"),a(802,"br"),e()()(),n(803,"td",18)(804,"code",19),t(805,"boolean"),e()(),n(806,"td",20)(807,"p")(808,"code"),t(809,"false"),e()()(),n(810,"td",21)(811,"em")(812,"strong"),t(813,"(opcional)"),e()(),n(814,"p"),t(815,"Define que o campo ser\xE1 obrigat\xF3rio."),e()()(),n(816,"tr",14)(817,"td",15)(818,"div",16)(819,"span",17),t(820," p-second-interval"),a(821,"br"),e()()(),n(822,"td",18)(823,"code",27),t(824,"number"),e()(),n(825,"td",20)(826,"p")(827,"code"),t(828,"1"),e()()(),n(829,"td",21)(830,"em")(831,"strong"),t(832,"(opcional)"),e()(),n(833,"p"),t(834,"Define o intervalo entre os segundos exibidos no painel."),e()()(),n(835,"tr",14)(836,"td",15)(837,"div",16)(838,"span",17),t(839," p-required-field-error-message"),a(840,"br"),e()()(),n(841,"td",18)(842,"code",19),t(843,"boolean"),e()(),n(844,"td",20)(845,"p")(846,"code"),t(847,"false"),e()()(),n(848,"td",21)(849,"em")(850,"strong"),t(851,"(opcional)"),e()(),n(852,"p"),t(853,"Exibe a mensagem setada na propriedade "),n(854,"code"),t(855,"p-error-pattern"),e(),t(856," se o campo estiver vazio e for requerido."),e()()(),n(857,"tr",14)(858,"td",15)(859,"div",16)(860,"span",17),t(861," p-show-required"),a(862,"br"),e()()(),n(863,"td",18)(864,"code",19),t(865,"boolean"),e()(),n(866,"td",20),t(867,"-"),e(),n(868,"td",21)(869,"p"),t(870,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),e()()(),n(871,"tr",14)(872,"td",15)(873,"div",16)(874,"span",17),t(875," p-show-seconds"),a(876,"br"),e()()(),n(877,"td",18)(878,"code",19),t(879,"boolean"),e()(),n(880,"td",20)(881,"p")(882,"code"),t(883,"false"),e()()(),n(884,"td",21)(885,"em")(886,"strong"),t(887,"(opcional)"),e()(),n(888,"p"),t(889,"Exibe a coluna de segundos no painel."),e()()(),n(890,"tr",14)(891,"td",15)(892,"div",16)(893,"span",17),t(894," p-size"),a(895,"br"),e()()(),n(896,"td",18)(897,"code",22),t(898,"string"),e()(),n(899,"td",20)(900,"p")(901,"code"),t(902,"medium"),e()()(),n(903,"td",21)(904,"em")(905,"strong"),t(906,"(opcional)"),e()(),n(907,"p"),t(908,"Define o tamanho do componente:"),e(),n(909,"ul")(910,"li")(911,"code"),t(912,"small"),e(),t(913,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),e(),n(914,"li")(915,"code"),t(916,"medium"),e(),t(917,": altura do input como 44px."),e()()()()(),n(918,"h3",10),t(919,"M\xE9todos"),e(),n(920,"table",30)(921,"tr",14)(922,"th",31)(923,"div",16)(924,"h4")(925,"span",17),t(926," focus "),e()()()()(),n(927,"tr",21)(928,"td",21)(929,"p"),t(930,"Fun\xE7\xE3o que atribui foco ao componente."),e(),n(931,"p"),t(932,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),e(),n(933,"pre")(934,"code"),t(935,`import { PoTimepickerComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTimepickerComponent, { static: true }) timepicker: PoTimepickerComponent;

focusTimepicker() {
  this.timepicker.focus();
}
`),e()()()()(),a(936,"br"),n(937,"table",30)(938,"tr",14)(939,"th",31)(940,"div",16)(941,"h4")(942,"span",17),t(943," showAdditionalHelp "),e()()()()(),n(944,"tr",21)(945,"td",21)(946,"p"),t(947,"M\xE9todo que exibe "),n(948,"code"),t(949,"p-helper"),e(),t(950," ou executa a a\xE7\xE3o definida em "),n(951,"code"),t(952,"p-helper{eventOnClick}"),e(),t(953," ou em "),n(954,"code"),t(955,"p-additionalHelp"),e(),t(956,"."),e()()()(),a(957,"br"),n(958,"h3"),t(959,"Enums"),e(),n(960,"h4",4)(961,"code",5),t(962,"PoTimepickerModelFormat"),e()(),n(963,"div",2)(964,"p")(965,"em"),t(966,"Enum"),e(),t(967," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),e()(),n(968,"h4",10),t(969,"Propriedades"),e(),n(970,"table",11)(971,"tr",12)(972,"th",13),t(973,"Nome"),e(),n(974,"th",13),t(975,"Descri\xE7\xE3o"),e()(),n(976,"tr",14)(977,"td",15)(978,"div",16)(979,"span",17),t(980," HourMinute"),a(981,"br"),e()()(),n(982,"td",21)(983,"p"),t(984,"Formato b\xE1sico "),n(985,"code"),t(986,"HH:mm"),e(),t(987," (ex: "),n(988,"code"),t(989,"14:30"),e(),t(990,")."),e()()(),n(991,"tr",14)(992,"td",15)(993,"div",16)(994,"span",17),t(995," HourMinuteSecond"),a(996,"br"),e()()(),n(997,"td",21)(998,"p"),t(999,"Formato com segundos "),n(1e3,"code"),t(1001,"HH:mm:ss"),e(),t(1002," (ex: "),n(1003,"code"),t(1004,"14:30:00"),e(),t(1005,")."),e()()()()())},dependencies:[k],encapsulation:2})}return l})();var fe=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(R(Y),R(Z))};static \u0275cmp=E({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Timepicker",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-timepicker-doc"),e(),n(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-timepicker-basic-view")(6,"sample-po-timepicker-labs-view")(7,"sample-po-timepicker-scheduling-view")(8,"sample-po-timepicker-business-hours-view"),e()()()),r&2&&(c("p-actions",i.actions),m(2),c("p-active",i.activeTab==="doc"),m(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[re,x,C,de,ue,he,be,Ee],encapsulation:2})}return l})();var qe=[{path:"",component:fe}],ve=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=q({type:l});static \u0275inj=B({imports:[j.forChild(qe),j]})}return l})();var bt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=q({type:l});static \u0275inj=B({imports:[me,ve]})}return l})();export{bt as DocPoTimepickerModule};
