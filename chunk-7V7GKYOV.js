import{o as y,p as Z}from"./chunk-WYOAC7KN.js";import{Hb as v,Ib as C,Ja as J,S as K,Sa as q,U,Ya as A,a as O,bb as X,ub as Y,w as B}from"./chunk-XOCFD5XY.js";import{Ea as g,Fa as n,Ga as t,Ha as a,I as k,Mb as P,Mc as L,Nc as V,O as u,Oa as D,Oc as F,P as c,Pa as h,Pc as W,Qc as z,_a as R,bb as _,cb as e,cd as Q,eb as w,ed as G,gb as E,gd as j,ha as m,hb as b,ib as S,ma as I,oa as x,pa as N,rb as M}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var $=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","number","p-label","PO Number"]],template:function(r,i){r&1&&a(0,"po-number",0)},dependencies:[q],encapsulation:2})}return l})();var pe=l=>({"docs-sample-code-tabs":l}),te=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-basic/sample-po-number-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-number name="number" p-label="PO Number"> </po-number>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-basic/sample-po-number-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-number-basic',
  templateUrl: './sample-po-number-basic.component.html',
  standalone: false
})
export class SamplePoNumberBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-basic"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel),m(),g("ngClass",M(4,pe,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,$],encapsulation:2})}return l})();var ne=(()=>{class l{helperText;event;messageErrorPattern;help;icon;label;max;maxlength;min;minlength;number;placeholder;properties;size;step;iconOptions=[{value:"an an-currency-circle-dollar",label:"an an-currency-circle-dollar"},{value:"an an-currency-btc",label:"an an-currency-btc"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText="",this.number=void 0,this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.event="",this.messageErrorPattern="",this.label=void 0,this.placeholder="",this.help="",this.icon="",this.size="medium",this.step=void 0,this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-labs"]],standalone:!1,decls:23,vars:43,consts:[["f","ngForm"],["name","PO number",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-max","p-maxlength","p-min","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-step","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","messageErrorPattern","p-clean","","p-label","Message error pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Minlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Maxlength",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","step","p-clean","","p-label","Step",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=D();n(0,"po-number",1),S("ngModelChange",function(o){return u(p),b(i.number,o)||(i.number=o),c(o)}),h("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),a(1,"po-divider"),n(2,"div",2),a(3,"po-info",3)(4,"po-info",4),t(),a(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),S("ngModelChange",function(o){return u(p),b(i.label,o)||(i.label=o),c(o)}),t(),n(9,"po-input",6),S("ngModelChange",function(o){return u(p),b(i.help,o)||(i.help=o),c(o)}),t(),n(10,"po-input",7),S("ngModelChange",function(o){return u(p),b(i.helperText,o)||(i.helperText=o),c(o)}),t(),n(11,"po-input",8),S("ngModelChange",function(o){return u(p),b(i.placeholder,o)||(i.placeholder=o),c(o)}),t(),n(12,"po-input",9),S("ngModelChange",function(o){return u(p),b(i.messageErrorPattern,o)||(i.messageErrorPattern=o),c(o)}),t(),n(13,"po-number",10),S("ngModelChange",function(o){return u(p),b(i.min,o)||(i.min=o),c(o)}),t(),n(14,"po-number",11),S("ngModelChange",function(o){return u(p),b(i.minlength,o)||(i.minlength=o),c(o)}),t(),n(15,"po-number",12),S("ngModelChange",function(o){return u(p),b(i.max,o)||(i.max=o),c(o)}),t(),n(16,"po-number",13),S("ngModelChange",function(o){return u(p),b(i.maxlength,o)||(i.maxlength=o),c(o)}),t(),n(17,"po-number",14),S("ngModelChange",function(o){return u(p),b(i.step,o)||(i.step=o),c(o)}),t(),n(18,"po-select",15),S("ngModelChange",function(o){return u(p),b(i.icon,o)||(i.icon=o),c(o)}),t(),n(19,"po-checkbox-group",16),S("ngModelChange",function(o){return u(p),b(i.properties,o)||(i.properties=o),c(o)}),t(),n(20,"po-radio-group",17),S("ngModelChange",function(o){return u(p),b(i.size,o)||(i.size=o),c(o)}),t(),n(21,"div",2)(22,"po-button",18),h("p-click",function(){return i.restore()}),t()()()}r&2&&(E("ngModel",i.number),g("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.messageErrorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-max",i.max)("p-maxlength",i.maxlength)("p-min",i.min)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-step",i.step)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),m(3),g("p-value",i.number),m(),g("p-value",i.event),m(4),E("ngModel",i.label),m(),E("ngModel",i.help),m(),E("ngModel",i.helperText),m(),E("ngModel",i.placeholder),m(),E("ngModel",i.messageErrorPattern),m(),E("ngModel",i.min),m(),E("ngModel",i.minlength),m(),E("ngModel",i.max),m(),E("ngModel",i.maxlength),m(),E("ngModel",i.step),m(),E("ngModel",i.icon),g("p-options",i.iconOptions),m(),E("ngModel",i.properties),g("p-options",i.propertiesOptions),m(),E("ngModel",i.size),g("p-options",i.sizeOptions))},dependencies:[z,L,V,W,F,B,O,K,U,J,q,A,X],encapsulation:2})}return l})();var Ee=l=>({"docs-sample-code-tabs":l}),ie=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-labs/sample-po-number-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-number
  class="po-md-12"
  name="PO number"
  [(ngModel)]="number"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="messageErrorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-max]="max"
  [p-maxlength]="maxlength"
  [p-min]="min"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-step]="step"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-number>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="number"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input
    class="po-md-6"
    name="messageErrorPattern"
    [(ngModel)]="messageErrorPattern"
    p-clean
    p-label="Message error pattern"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Minlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Maxlength"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="step" [(ngModel)]="step" p-clean p-label="Step"> </po-number>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-labs/sample-po-number-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-labs',
  templateUrl: './sample-po-number-labs.component.html',
  standalone: false
})
export class SamplePoNumberLabsComponent implements OnInit {
  helperText: string;
  event: string;
  messageErrorPattern: string;
  help: string;
  icon: string;
  label: string;
  max: number;
  maxlength: number;
  min: number;
  minlength: number;
  number: number;
  placeholder: string;
  properties: Array<string>;
  size: string;
  step: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-currency-circle-dollar', label: 'an an-currency-circle-dollar' },
    { value: 'an an-currency-btc', label: 'an an-currency-btc' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'showRequired', label: 'Show Required' }
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
    this.number = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.event = '';
    this.messageErrorPattern = '';
    this.label = undefined;
    this.placeholder = '';
    this.help = '';
    this.icon = '';
    this.size = 'medium';
    this.step = undefined;
    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-labs"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel),m(),g("ngClass",M(4,Ee,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,ne],encapsulation:2})}return l})();var oe=(()=>{class l{icms;liquid;price;quantity;state;total;statesOptions=[{value:18,label:"S\xE3o Paulo"},{value:17,label:"Alagoas"},{value:15,label:"Cear\xE1"}];calculate(){let d=this.price*this.quantity;this.liquid=d,this.total=d+d*(this.state/100)}loadICMS(){this.icms=this.state}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-calculate"]],standalone:!1,decls:16,vars:9,consts:[["f","ngForm"],[1,"po-row"],["name","price","p-label","Price","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantity","p-label","Quantity","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State","p-required","","p-sort","",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],["name","icms","p-label","ICMS %","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","liquid","p-label","Liquid","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","total","p-label","Total","p-disabled","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Calculate",1,"po-md-3",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=D();n(0,"h3"),e(1,"Calculate Tax"),t(),a(2,"po-divider"),n(3,"form",null,0)(5,"div",1)(6,"po-number",2),S("ngModelChange",function(o){return u(p),b(i.price,o)||(i.price=o),c(o)}),t(),n(7,"po-number",3),S("ngModelChange",function(o){return u(p),b(i.quantity,o)||(i.quantity=o),c(o)}),t()(),n(8,"div")(9,"po-select",4),S("ngModelChange",function(o){return u(p),b(i.state,o)||(i.state=o),c(o)}),h("p-change",function(){return i.loadICMS()}),t(),n(10,"po-number",5),S("ngModelChange",function(o){return u(p),b(i.icms,o)||(i.icms=o),c(o)}),t(),n(11,"po-number",6),S("ngModelChange",function(o){return u(p),b(i.liquid,o)||(i.liquid=o),c(o)}),t(),n(12,"po-number",7),S("ngModelChange",function(o){return u(p),b(i.total,o)||(i.total=o),c(o)}),t()(),n(13,"div",1)(14,"po-button",8),h("p-click",function(){return i.calculate()}),t(),n(15,"po-button",9),h("p-click",function(){u(p);let o=R(4);return c(o.reset())}),t()()()}if(r&2){let p=R(4);m(6),E("ngModel",i.price),m(),E("ngModel",i.quantity),m(2),E("ngModel",i.state),g("p-options",i.statesOptions),m(),E("ngModel",i.icms),m(),E("ngModel",i.liquid),m(),E("ngModel",i.total),m(2),g("p-disabled",p.invalid),m(),g("p-disabled",p.invalid)}},dependencies:[z,L,V,W,F,B,O,q,A],encapsulation:2})}return l})();var ge=l=>({"docs-sample-code-tabs":l}),ae=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-calculate-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Number - Calculate"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-number-calculate/sample-po-number-calculate.component.html"),t(),n(13,"pre",7),e(14,`<h3>Calculate Tax</h3>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-6" name="price" [(ngModel)]="price" p-label="Price" p-required> </po-number>

    <po-number class="po-md-6" name="quantity" [(ngModel)]="quantity" p-label="Quantity" p-required> </po-number>
  </div>

  <div>
    <po-select
      class="po-md-6 po-lg-3"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      p-required
      p-sort
      [p-options]="statesOptions"
      (p-change)="loadICMS()"
    >
    </po-select>

    <po-number class="po-md-6 po-lg-3" name="icms" [(ngModel)]="icms" p-label="ICMS %" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="liquid" [(ngModel)]="liquid" p-label="Liquid" p-disabled> </po-number>

    <po-number class="po-md-6 po-lg-3" name="total" [(ngModel)]="total" p-label="Total" p-disabled> </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Calculate" [p-disabled]="f.invalid" (p-click)="calculate()"> </po-button>

    <po-button class="po-md-3" p-label="Clean" [p-disabled]="f.invalid" (p-click)="f.reset()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-number-calculate/sample-po-number-calculate.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-number-calculate',
  templateUrl: './sample-po-number-calculate.component.html',
  standalone: false
})
export class SamplePoNumberCalculateComponent {
  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<PoSelectOption> = [
    { value: 18, label: 'S\xE3o Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Cear\xE1' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + realPrice * (this.state / 100);
  }

  loadICMS() {
    this.icms = this.state;
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-number-calculate"),t(),a(23,"hr")),r&2&&(m(5),_("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel),m(),g("ngClass",M(4,ge,i.hideSampleCodeTabs)))},dependencies:[P,y,v,C,oe],encapsulation:2})}return l})();var le=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-number-doc"]],standalone:!1,decls:1418,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoNumberComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),a(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"code"),e(131,"--field-container-title-justify"),t()(),n(132,"td"),e(133,"Alinhamento horizontal do t\xEDtulo ("),n(134,"code"),e(135,"justify-content"),t(),e(136,")"),t(),n(137,"td")(138,"code"),e(139,"space-between"),t()()(),n(140,"tr")(141,"td")(142,"code"),e(143,"--field-container-title-flex"),t()(),n(144,"td"),e(145,"Flex do t\xEDtulo ("),n(146,"code"),e(147,"flex"),t(),e(148,")"),t(),n(149,"td")(150,"code"),e(151,"1 auto"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Hover"),t()(),a(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-hover"),t()(),n(162,"td"),e(163,"Cor principal no estado hover"),t(),n(164,"td")(165,"code"),e(166,"var(--color-brand-01-dark)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--background-hover"),t()(),n(171,"td"),e(172,"Cor de background no estado hover"),t(),n(173,"td")(174,"code"),e(175,"var(--color-brand-01-lightest)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Focused"),t()(),a(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-focused"),t()(),n(186,"td"),e(187,"Cor principal no estado de focus"),t(),n(188,"td")(189,"code"),e(190,"var(--color-action-default)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--outline-color-focused"),t()(),n(195,"td"),e(196,"Cor do outline do estado de focus"),t(),n(197,"td")(198,"code"),e(199,"var(--color-action-focus)"),t()()(),n(200,"tr")(201,"td")(202,"strong"),e(203,"Disabled"),t()(),a(204,"td")(205,"td"),t(),n(206,"tr")(207,"td")(208,"code"),e(209,"--color-disabled"),t()(),n(210,"td"),e(211,"Cor principal no estado disabled"),t(),n(212,"td")(213,"code"),e(214,"var(--color-neutral-light-30)"),t()()(),n(215,"tr")(216,"td")(217,"code"),e(218,"--background-disabled"),t()(),n(219,"td"),e(220,"Cor de background no estado disabled"),t(),n(221,"td")(222,"code"),e(223,"var(--color-neutral-light-20)"),t()()(),n(224,"tr")(225,"td")(226,"code"),e(227,"--text-color-disabled"),t()(),n(228,"td"),e(229,"Cor do texto no estado disabled"),t(),n(230,"td")(231,"code"),e(232,"var(--color-neutral-dark-70)"),t()()()()(),n(233,"p"),a(234,"br"),e(235," O "),n(236,"code"),e(237,"po-number"),t(),e(238,` \xE9 um input espec\xEDfico para receber apenas n\xFAmeros.
\xC9 poss\xEDvel configurar um valor m\xEDnimo, m\xE1ximo e um step com p-min, p-max e p-step,
respectivamente.`),t()(),n(239,"div",8)(240,"h4",9),e(241,"Seletor"),t(),n(242,"pre",10),e(243,`<po-number
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-emit-all-changes="boolean"
    (p-enter)="EventEmitter"
    p-error-async-properties="ErrorAsyncProperties"
    p-error-limit="boolean"
    p-error-pattern="string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-mask="string"
    p-mask-format-model="boolean"
    p-mask-no-length-validation="boolean"
    p-max="number"
    p-maxlength="number"
    p-min="number"
    p-minlength="number"
    name="string"
    p-no-autocomplete="boolean"
    p-optional="boolean"
    p-pattern="string"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-required-field-error-message="boolean"
    p-show-required="boolean"
    p-size="string"
    p-step="string"
    p-upper-case="boolean" >
</po-number>
`),t()(),n(244,"h4",11),e(245,"Propriedades"),t(),n(246,"table",12)(247,"tr",13)(248,"th",14),e(249,"Nome"),t(),n(250,"th",14),e(251,"Tipo"),t(),n(252,"th",14),e(253,"Padr\xE3o"),t(),n(254,"th",14),e(255,"Descri\xE7\xE3o"),t()(),n(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),e(260," (p-additional-help)"),a(261,"br"),t()(),n(262,"div",19),e(263,"Deprecated"),t()(),n(264,"td",20)(265,"code",21),e(266,"EventEmitter"),t()(),n(267,"td",22),e(268,"-"),t(),n(269,"td",23)(270,"em")(271,"strong"),e(272,"(opcional)"),t()(),n(273,"p"),e(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(275,"blockquote")(276,"p"),e(277,"Essa propriedade est\xE1 "),n(278,"strong"),e(279,"depreciada"),t(),e(280," e ser\xE1 removida na vers\xE3o "),n(281,"code"),e(282,"23.x.x"),t(),e(283,". Recomendamos utilizar a propriedade "),n(284,"code"),e(285,"p-helper"),t(),e(286," que oferece mais recursos e flexibilidade."),t()()()(),n(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),e(291," p-additional-help-tooltip"),a(292,"br"),t()(),n(293,"div",19),e(294,"Deprecated"),t()(),n(295,"td",20)(296,"code",26),e(297,"string"),t()(),n(298,"td",22),e(299,"-"),t(),n(300,"td",23)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),n(304,"p"),e(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(306,"code"),e(307,"po-helper"),t(),e(308,`.
`),n(309,"strong"),e(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(311,"blockquote")(312,"p"),e(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(314,"blockquote")(315,"p"),e(316,"Essa propriedade est\xE1 "),n(317,"strong"),e(318,"depreciada"),t(),e(319," e ser\xE1 removida na vers\xE3o "),n(320,"code"),e(321,"23.x.x"),t(),e(322,". Recomendamos utilizar a propriedade "),n(323,"code"),e(324,"p-helper"),t(),e(325," que oferece mais recursos e flexibilidade."),t()()()(),n(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),e(330," p-append-in-body"),a(331,"br"),t()()(),n(332,"td",20)(333,"code",27),e(334,"boolean"),t()(),n(335,"td",22)(336,"p")(337,"code"),e(338,"false"),t()()(),n(339,"td",23)(340,"em")(341,"strong"),e(342,"(opcional)"),t()(),n(343,"p"),e(344,"Define que o popover ("),n(345,"code"),e(346,"p-helper"),t(),e(347," e/ou "),n(348,"code"),e(349,"p-error-limit"),t(),e(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(351,"blockquote")(352,"p"),e(353,"Quando utilizado com "),n(354,"code"),e(355,"p-helper"),t(),e(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),e(361," p-auto-focus"),a(362,"br"),t()()(),n(363,"td",20)(364,"code",27),e(365,"boolean"),t()(),n(366,"td",22)(367,"p")(368,"code"),e(369,"false"),t()()(),n(370,"td",23)(371,"em")(372,"strong"),e(373,"(opcional)"),t()(),n(374,"p"),e(375,"Aplica foco no elemento ao ser iniciado."),t(),n(376,"blockquote")(377,"p"),e(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),e(383," (p-blur)"),a(384,"br"),t()()(),n(385,"td",20)(386,"code",21),e(387,"EventEmitter"),t()(),n(388,"td",22),e(389,"-"),t(),n(390,"td",23)(391,"em")(392,"strong"),e(393,"(opcional)"),t()(),n(394,"p"),e(395,"Evento disparado ao sair do campo."),t()()(),n(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),e(400," (p-change)"),a(401,"br"),t()()(),n(402,"td",20)(403,"code",21),e(404,"EventEmitter"),t()(),n(405,"td",22),e(406,"-"),t(),n(407,"td",23)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),n(411,"p"),e(412,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),e(417," (p-change-model)"),a(418,"br"),t()()(),n(419,"td",20)(420,"code",21),e(421,"EventEmitter"),t()(),n(422,"td",22),e(423,"-"),t(),n(424,"td",23)(425,"em")(426,"strong"),e(427,"(opcional)"),t()(),n(428,"p"),e(429,"Evento disparado ao alterar valor do model."),t()()(),n(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),e(434,"p-clean"),a(435,"br"),t()()(),n(436,"td",20)(437,"code",27),e(438,"boolean"),t()(),n(439,"td",22),e(440,"-"),t(),n(441,"td",23)(442,"em")(443,"strong"),e(444,"(opcional)"),t()(),n(445,"p"),e(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),e(451," p-compact-label"),a(452,"br"),t()()(),n(453,"td",20)(454,"code",27),e(455,"boolean"),t()(),n(456,"td",22)(457,"p")(458,"code"),e(459,"false"),t()()(),n(460,"td",23)(461,"em")(462,"strong"),e(463,"(opcional)"),t()(),n(464,"p"),e(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),n(466,"p"),e(467,"Quando habilitado ("),n(468,"code"),e(469,"true"),t(),e(470,"), o modo compacto afeta o conjunto composto por:"),t(),n(471,"ul")(472,"li")(473,"code"),e(474,"po-label"),t()(),n(475,"li")(476,"code"),e(477,"p-requirement (showRequired)"),t()(),n(478,"li")(479,"code"),e(480,"po-helper"),t()()(),n(481,"p"),e(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),n(483,"p"),e(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),n(485,"ul")(486,"li")(487,"code"),e(488,"--field-container-title-justify"),t()(),n(489,"li")(490,"code"),e(491,"--field-container-title-flex"),t()()(),n(492,"p"),e(493,"Exemplo:"),t(),n(494,"pre")(495,"code"),e(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),n(497,"p"),e(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),n(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),e(503,"p-disabled"),a(504,"br"),t()()(),n(505,"td",20)(506,"code",27),e(507,"boolean"),t()(),n(508,"td",22)(509,"p")(510,"code"),e(511,"false"),t()()(),n(512,"td",23)(513,"em")(514,"strong"),e(515,"(opcional)"),t()(),n(516,"p"),e(517,"Se verdadeiro, desabilita o campo."),t()()(),n(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),e(522," p-emit-all-changes"),a(523,"br"),t()()(),n(524,"td",20)(525,"code",27),e(526,"boolean"),t()(),n(527,"td",22)(528,"p")(529,"code"),e(530,"false"),t()()(),n(531,"td",23)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),n(535,"p"),e(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),e(541," (p-enter)"),a(542,"br"),t()()(),n(543,"td",20)(544,"code",21),e(545,"EventEmitter"),t()(),n(546,"td",22),e(547,"-"),t(),n(548,"td",23)(549,"em")(550,"strong"),e(551,"(opcional)"),t()(),n(552,"p"),e(553,"Evento disparado ao entrar do campo."),t()()(),n(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),e(558," p-error-async-properties"),a(559,"br"),t()()(),n(560,"td",20)(561,"code",28),e(562,"ErrorAsyncProperties"),t()(),n(563,"td",22),e(564,"-"),t(),n(565,"td",23)(566,"em")(567,"strong"),e(568,"(opcional)"),t()(),n(569,"p"),e(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(571,"code"),e(572,"Reactive Forms"),t(),e(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(574,"code"),e(575,"asyncValidators"),t(),e(576,"."),t()()(),n(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),e(581," p-error-limit"),a(582,"br"),t()()(),n(583,"td",20)(584,"code",27),e(585,"boolean"),t()(),n(586,"td",22)(587,"p")(588,"code"),e(589,"false"),t()()(),n(590,"td",23)(591,"em")(592,"strong"),e(593,"(opcional)"),t()(),n(594,"p"),e(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(596,"blockquote")(597,"p"),e(598,"Caso essa propriedade seja definida como "),n(599,"code"),e(600,"true"),t(),e(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),e(606," p-error-pattern"),a(607,"br"),t()()(),n(608,"td",20)(609,"code",26),e(610,"string"),t()(),n(611,"td",22),e(612,"-"),t(),n(613,"td",23)(614,"em")(615,"strong"),e(616,"(opcional)"),t()(),n(617,"p"),e(618,"Mensagem que ser\xE1 apresentada quando o "),n(619,"code"),e(620,"pattern"),t(),e(621," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(622,"blockquote")(623,"p"),e(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(625,"code"),e(626,"p-required-field-error-message"),t(),e(627," em conjunto."),t()()()(),n(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),e(632," p-help"),a(633,"br"),t()()(),n(634,"td",20)(635,"code",26),e(636,"string"),t()(),n(637,"td",22),e(638,"-"),t(),n(639,"td",23)(640,"em")(641,"strong"),e(642,"(opcional)"),t()(),n(643,"p"),e(644,"Texto de apoio do campo."),t()()(),n(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),e(649," p-icon"),a(650,"br"),t()()(),n(651,"td",20)(652,"code",26),e(653,"string "),t(),n(654,"code",29),e(655," TemplateRef<void>"),t()(),n(656,"td",22),e(657,"-"),t(),n(658,"td",23)(659,"em")(660,"strong"),e(661,"(opcional)"),t()(),n(662,"p"),e(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(664,"p"),e(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(666,"a",30),e(667,"Biblioteca de \xEDcones"),t(),e(668,". conforme exemplo abaixo:"),t(),n(669,"pre")(670,"code"),e(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(672,"p"),e(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(674,"em"),e(675,"Font Awesome"),t(),e(676,", da seguinte forma:"),t(),n(677,"pre")(678,"code"),e(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(680,"p"),e(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(682,"code"),e(683,"TemplateRef"),t(),e(684,", conforme exemplo abaixo:"),t(),n(685,"pre")(686,"code"),e(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(688,"blockquote")(689,"p"),e(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(691,"code"),e(692,"font-size: inherit"),t(),e(693," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),e(698," (p-keydown)"),a(699,"br"),t()()(),n(700,"td",20)(701,"code",21),e(702,"EventEmitter"),t()(),n(703,"td",22),e(704,"-"),t(),n(705,"td",23)(706,"em")(707,"strong"),e(708,"(opcional)"),t()(),n(709,"p"),e(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(711,"code"),e(712,"KeyboardEvent"),t(),e(713," com informa\xE7\xF5es sobre a tecla."),t()()(),n(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),e(718," p-label"),a(719,"br"),t()()(),n(720,"td",20)(721,"code",26),e(722,"string"),t()(),n(723,"td",22),e(724,"-"),t(),n(725,"td",23)(726,"em")(727,"strong"),e(728,"(opcional)"),t()(),n(729,"p"),e(730,"R\xF3tulo do campo."),t()()(),n(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),e(735," p-label-text-wrap"),a(736,"br"),t()()(),n(737,"td",20)(738,"code",27),e(739,"boolean"),t()(),n(740,"td",22)(741,"p")(742,"code"),e(743,"false"),t()()(),n(744,"td",23)(745,"em")(746,"strong"),e(747,"(opcional)"),t()(),n(748,"p"),e(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(750,"code"),e(751,"p-label"),t(),e(752,". Quando "),n(753,"code"),e(754,"p-label-text-wrap"),t(),e(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),e(760," p-loading"),a(761,"br"),t()()(),n(762,"td",20)(763,"code",27),e(764,"boolean"),t()(),n(765,"td",22)(766,"p")(767,"code"),e(768,"false"),t()()(),n(769,"td",23)(770,"em")(771,"strong"),e(772,"(opcional)"),t()(),n(773,"p"),e(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),e(779,"p-mask"),a(780,"br"),t()()(),n(781,"td",20)(782,"code",26),e(783,"string"),t()(),n(784,"td",22),e(785,"-"),t(),n(786,"td",23)(787,"em")(788,"strong"),e(789,"(opcional)"),t()(),n(790,"p"),e(791,"Indica uma m\xE1scara para o campo, por\xE9m \xE9 incompat\xEDvel com o "),n(792,"code"),e(793,"po-number"),t(),e(794,"."),t(),n(795,"blockquote")(796,"p")(797,"strong"),e(798,"Componentes compat\xEDveis:"),t(),n(799,"code"),e(800,"po-input"),t(),e(801,","),n(802,"code"),e(803,"po-decimal"),t(),e(804,"."),t()()()(),n(805,"tr",15)(806,"td",16)(807,"div",24)(808,"span",25),e(809,"p-mask-format-model"),a(810,"br"),t()()(),n(811,"td",20)(812,"code",27),e(813,"boolean"),t()(),n(814,"td",22)(815,"p")(816,"code"),e(817,"false"),t()()(),n(818,"td",23)(819,"em")(820,"strong"),e(821,"(opcional)"),t()(),n(822,"p"),e(823,"Indica se o "),n(824,"code"),e(825,"model"),t(),e(826," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(827,"tr",15)(828,"td",16)(829,"div",24)(830,"span",25),e(831," p-mask-no-length-validation"),a(832,"br"),t()()(),n(833,"td",20)(834,"code",27),e(835,"boolean"),t()(),n(836,"td",22)(837,"p")(838,"code"),e(839,"false"),t()()(),n(840,"td",23)(841,"p"),e(842,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(843,"code"),e(844,"minLength"),t(),e(845,") e m\xE1ximo ("),n(846,"code"),e(847,"maxLength"),t(),e(848,") quando h\xE1 uma m\xE1scara ("),n(849,"code"),e(850,"p-mask"),t(),e(851,") definida."),t(),n(852,"ul")(853,"li"),e(854,"Quando "),n(855,"code"),e(856,"true"),t(),e(857,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(858,"li"),e(859,"Quando "),n(860,"code"),e(861,"false"),t(),e(862,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(863,"blockquote")(864,"p"),e(865,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(866,"code"),e(867,"p-mask-format-model"),t(),e(868,"."),t()(),n(869,"p"),e(870,"Exemplo:"),t(),n(871,"pre")(872,"code"),e(873,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(874,"ul")(875,"li"),e(876,"Entrada: "),n(877,"code"),e(878,"123-456"),t(),e(879," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(880,"code"),e(881,"-"),t(),e(882,"."),t()()()(),n(883,"tr",15)(884,"td",16)(885,"div",24)(886,"span",25),e(887,"p-max"),a(888,"br"),t()()(),n(889,"td",20)(890,"code",31),e(891,"number"),t()(),n(892,"td",22),e(893,"-"),t(),n(894,"td",23)(895,"em")(896,"strong"),e(897,"(opcional)"),t()(),n(898,"p"),e(899,"Valor m\xE1ximo."),t(),n(900,"blockquote")(901,"p"),e(902,"Quando o valor m\xE1ximo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(903,"code"),e(904,"p-step"),t(),e(905," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),e(910," p-maxlength"),a(911,"br"),t()()(),n(912,"td",20)(913,"code",31),e(914,"number"),t()(),n(915,"td",22),e(916,"-"),t(),n(917,"td",23)(918,"em")(919,"strong"),e(920,"(opcional)"),t()(),n(921,"p"),e(922,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),e(927,"p-min"),a(928,"br"),t()()(),n(929,"td",20)(930,"code",31),e(931,"number"),t()(),n(932,"td",22),e(933,"-"),t(),n(934,"td",23)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),n(938,"p"),e(939,"Valor m\xEDnimo."),t(),n(940,"blockquote")(941,"p"),e(942,"Quando o valor m\xEDnimo for um n\xFAmero com decimais aconselha-se utilizar junto da propriedade "),n(943,"code"),e(944,"p-step"),t(),e(945," tamb\xE9m passando a ela um valor decimal."),t()()()(),n(946,"tr",15)(947,"td",16)(948,"div",24)(949,"span",25),e(950," p-minlength"),a(951,"br"),t()()(),n(952,"td",20)(953,"code",31),e(954,"number"),t()(),n(955,"td",22),e(956,"-"),t(),n(957,"td",23)(958,"em")(959,"strong"),e(960,"(opcional)"),t()(),n(961,"p"),e(962,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),e(967," name"),a(968,"br"),t()()(),n(969,"td",20)(970,"code",26),e(971,"string"),t()(),n(972,"td",22),e(973,"-"),t(),n(974,"td",23)(975,"p"),e(976,"Nome e identificador do campo."),t()()(),n(977,"tr",15)(978,"td",16)(979,"div",24)(980,"span",25),e(981," p-no-autocomplete"),a(982,"br"),t()()(),n(983,"td",20)(984,"code",27),e(985,"boolean"),t()(),n(986,"td",22)(987,"p")(988,"code"),e(989,"false"),t()()(),n(990,"td",23)(991,"em")(992,"strong"),e(993,"(opcional)"),t()(),n(994,"p"),e(995,"Define a propriedade nativa "),n(996,"code"),e(997,"autocomplete"),t(),e(998," do campo como "),n(999,"code"),e(1e3,"off"),t(),e(1001,"."),t(),n(1002,"blockquote")(1003,"p"),e(1004,"No componente "),n(1005,"code"),e(1006,"po-password"),t(),e(1007," ser\xE1 definido como "),n(1008,"code"),e(1009,"new-password"),t(),e(1010,"."),t()(),n(1011,"p"),e(1012,"Nos componentes "),n(1013,"code"),e(1014,"po-password"),t(),e(1015," e "),n(1016,"code"),e(1017,"po-login"),t(),e(1018," o valor padr\xE3o ser\xE1 "),n(1019,"code"),e(1020,"true"),t(),e(1021,"."),t()()(),n(1022,"tr",15)(1023,"td",16)(1024,"div",24)(1025,"span",25),e(1026," p-optional"),a(1027,"br"),t()()(),n(1028,"td",20)(1029,"code",27),e(1030,"boolean"),t()(),n(1031,"td",22)(1032,"p")(1033,"code"),e(1034,"false"),t()()(),n(1035,"td",23)(1036,"em")(1037,"strong"),e(1038,"(opcional)"),t()(),n(1039,"p"),e(1040,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1041,"blockquote")(1042,"p"),e(1043,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1044,"ul")(1045,"li"),e(1046,"O campo conter "),n(1047,"code"),e(1048,"p-required"),t(),e(1049,";"),t(),n(1050,"li"),e(1051,"N\xE3o possuir "),n(1052,"code"),e(1053,"p-help"),t(),e(1054," e/ou "),n(1055,"code"),e(1056,"p-label"),t(),e(1057,"."),t()()()(),n(1058,"tr",15)(1059,"td",16)(1060,"div",24)(1061,"span",25),e(1062,"p-pattern"),a(1063,"br"),t()()(),n(1064,"td",20)(1065,"code",26),e(1066,"string"),t()(),n(1067,"td",22),e(1068,"-"),t(),n(1069,"td",23)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),n(1073,"p"),e(1074,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1075,"code"),e(1076,"(p-mask)"),t(),e(1077,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1078,"tr",15)(1079,"td",16)(1080,"div",24)(1081,"span",25),e(1082," p-placeholder"),a(1083,"br"),t()()(),n(1084,"td",20)(1085,"code",26),e(1086,"string"),t()(),n(1087,"td",22)(1088,"p"),e(1089,"''"),t()(),n(1090,"td",23)(1091,"em")(1092,"strong"),e(1093,"(opcional)"),t()(),n(1094,"p"),e(1095,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),e(1100," p-helper"),a(1101,"br"),t()()(),n(1102,"td",20)(1103,"code",32),e(1104,"PoHelperOptions "),t(),n(1105,"code",26),e(1106," string"),t()(),n(1107,"td",22),e(1108,"-"),t(),n(1109,"td",23)(1110,"em")(1111,"strong"),e(1112,"(opcional)"),t()(),n(1113,"p"),e(1114,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1115,"code"),e(1116,"p-label"),t(),e(1117," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1118,"code"),e(1119,"p-label"),t(),e(1120,"."),t(),n(1121,"blockquote")(1122,"p"),e(1123,"Para mais informa\xE7\xF5es acesse: "),n(1124,"a",33),e(1125,"https://po-ui.io/documentation/po-helper"),t(),e(1126,"."),t()(),n(1127,"blockquote")(1128,"p"),e(1129,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1130,"code"),e(1131,"p-additional-help-tooltip"),t(),e(1132," e "),n(1133,"code"),e(1134,"p-additional-help"),t(),e(1135,") ser\xE1 ignorado."),t()()()(),n(1136,"tr",15)(1137,"td",16)(1138,"div",24)(1139,"span",25),e(1140,"p-readonly"),a(1141,"br"),t()()(),n(1142,"td",20)(1143,"code",27),e(1144,"boolean"),t()(),n(1145,"td",22),e(1146,"-"),t(),n(1147,"td",23)(1148,"em")(1149,"strong"),e(1150,"(opcional)"),t()(),n(1151,"p"),e(1152,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1153,"tr",15)(1154,"td",16)(1155,"div",24)(1156,"span",25),e(1157,"p-required"),a(1158,"br"),t()()(),n(1159,"td",20)(1160,"code",27),e(1161,"boolean"),t()(),n(1162,"td",22)(1163,"p")(1164,"code"),e(1165,"false"),t()()(),n(1166,"td",23)(1167,"em")(1168,"strong"),e(1169,"(opcional)"),t()(),n(1170,"p"),e(1171,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1172,"blockquote")(1173,"p"),e(1174,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1175,"code"),e(1176,"(p-disabled)"),t(),e(1177,"."),t()()()(),n(1178,"tr",15)(1179,"td",16)(1180,"div",24)(1181,"span",25),e(1182," p-required-field-error-message"),a(1183,"br"),t()()(),n(1184,"td",20)(1185,"code",27),e(1186,"boolean"),t()(),n(1187,"td",22)(1188,"p")(1189,"code"),e(1190,"false"),t()()(),n(1191,"td",23)(1192,"em")(1193,"strong"),e(1194,"(opcional)"),t()(),n(1195,"p"),e(1196,"Exibe a mensagem setada na propriedade "),n(1197,"code"),e(1198,"p-error-pattern"),t(),e(1199," se o campo estiver vazio e for requerido."),t(),n(1200,"blockquote")(1201,"p"),e(1202,"Necess\xE1rio que a propriedade "),n(1203,"code"),e(1204,"p-required"),t(),e(1205," esteja habilitada."),t()()()(),n(1206,"tr",15)(1207,"td",16)(1208,"div",24)(1209,"span",25),e(1210," p-show-required"),a(1211,"br"),t()()(),n(1212,"td",20)(1213,"code",27),e(1214,"boolean"),t()(),n(1215,"td",22),e(1216,"-"),t(),n(1217,"td",23)(1218,"p"),e(1219,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1220,"blockquote")(1221,"p"),e(1222,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1223,"ul")(1224,"li"),e(1225,"N\xE3o possuir "),n(1226,"code"),e(1227,"p-help"),t(),e(1228," e/ou "),n(1229,"code"),e(1230,"p-label"),t(),e(1231,"."),t()()()(),n(1232,"tr",15)(1233,"td",16)(1234,"div",24)(1235,"span",25),e(1236," p-size"),a(1237,"br"),t()()(),n(1238,"td",20)(1239,"code",26),e(1240,"string"),t()(),n(1241,"td",22)(1242,"p")(1243,"code"),e(1244,"medium"),t()()(),n(1245,"td",23)(1246,"em")(1247,"strong"),e(1248,"(opcional)"),t()(),n(1249,"p"),e(1250,"Define o tamanho do componente:"),t(),n(1251,"ul")(1252,"li")(1253,"code"),e(1254,"small"),t(),e(1255,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1256,"li")(1257,"code"),e(1258,"medium"),t(),e(1259,": altura do input como 44px."),t()(),n(1260,"blockquote")(1261,"p"),e(1262,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1263,"code"),e(1264,"medium"),t(),e(1265,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1266,"a",34),e(1267,"po-theme"),t(),e(1268,"."),t()()()(),n(1269,"tr",15)(1270,"td",16)(1271,"div",24)(1272,"span",25),e(1273," p-step"),a(1274,"br"),t()()(),n(1275,"td",20)(1276,"code",26),e(1277,"string"),t()(),n(1278,"td",22)(1279,"p"),e(1280,"1"),t()(),n(1281,"td",23)(1282,"em")(1283,"strong"),e(1284,"(opcional)"),t()(),n(1285,"p"),e(1286,"Intervalo."),t()()(),n(1287,"tr",15)(1288,"td",16)(1289,"div",24)(1290,"span",25),e(1291," p-upper-case"),a(1292,"br"),t()()(),n(1293,"td",20)(1294,"code",27),e(1295,"boolean"),t()(),n(1296,"td",22),e(1297,"-"),t(),n(1298,"td",23)(1299,"p"),e(1300,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1301,"h3",11),e(1302,"M\xE9todos"),t(),n(1303,"table",35)(1304,"tr",15)(1305,"th",36)(1306,"div",24)(1307,"h4")(1308,"span",25),e(1309," showAdditionalHelp "),t()()()()(),n(1310,"tr",23)(1311,"td",23)(1312,"p"),e(1313,"M\xE9todo que exibe "),n(1314,"code"),e(1315,"p-helper"),t(),e(1316," ou executa a a\xE7\xE3o definida em "),n(1317,"code"),e(1318,"p-helper{eventOnClick}"),t(),e(1319," ou em "),n(1320,"code"),e(1321,"p-additionalHelp"),t(),e(1322,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1323,"code"),e(1324,"p-keydown"),t(),e(1325,"."),t(),n(1326,"blockquote")(1327,"p"),e(1328,"Exibe ou oculta o conte\xFAdo do componente "),n(1329,"code"),e(1330,"po-helper"),t(),e(1331," quando o componente estiver com foco."),t()(),n(1332,"pre")(1333,"code"),e(1334,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1335,"pre")(1336,"code"),e(1337,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(1338,"br"),n(1339,"table",35)(1340,"tr",15)(1341,"th",36)(1342,"div",24)(1343,"h4")(1344,"span",25),e(1345," focus "),t()()()()(),n(1346,"tr",23)(1347,"td",23)(1348,"p"),e(1349,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1350,"p"),e(1351,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1352,"pre")(1353,"code"),e(1354,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),a(1355,"br"),n(1356,"h3"),e(1357,"Interfaces"),t(),n(1358,"h4",37)(1359,"code",5),e(1360,"ErrorAsyncProperties"),t()(),n(1361,"div",2)(1362,"p"),e(1363,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1364,"h4",11),e(1365,"Propriedades"),t(),n(1366,"table",12)(1367,"tr",13)(1368,"th",14),e(1369,"Nome"),t(),n(1370,"th",14),e(1371,"Tipo"),t(),n(1372,"th",14),e(1373,"Descri\xE7\xE3o"),t()(),n(1374,"tr",15)(1375,"td",16)(1376,"div",24)(1377,"span",25),e(1378," errorAsync"),a(1379,"br"),t()()(),n(1380,"td",20)(1381,"code",38),e(1382,"(value) => Observable<boolean>"),t()(),n(1383,"td",23)(1384,"p"),e(1385,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1386,"code"),e(1387,"change"),t(),e(1388," ou "),n(1389,"code"),e(1390,"change-model"),t(),e(1391,", dependendo do valor da propriedade "),n(1392,"code"),e(1393,"triggerMode"),t(),e(1394,"."),t()()(),n(1395,"tr",15)(1396,"td",16)(1397,"div",24)(1398,"span",25),e(1399," triggerMode"),a(1400,"br"),t()()(),n(1401,"td",20)(1402,"code",39),e(1403,"'change' "),t(),n(1404,"code",40),e(1405," 'changeModel'"),t()(),n(1406,"td",23)(1407,"em")(1408,"strong"),e(1409,"(opcional)"),t()(),n(1410,"p"),e(1411,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1412,"code"),e(1413,"change"),t(),e(1414," ou "),n(1415,"code"),e(1416,"change-model"),t(),e(1417,"."),t()()()()())},dependencies:[y],encapsulation:2})}return l})();var re=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(I(Q),I(G))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Number",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-number-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-number-basic-view")(6,"sample-po-number-labs-view")(7,"sample-po-number-calculate-view"),t()()()),r&2&&(g("p-actions",i.actions),m(2),g("p-active",i.activeTab==="doc"),m(2),g("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[Y,v,C,te,ie,ae,le],encapsulation:2})}return l})();var fe=[{path:"",component:re}],me=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=N({type:l});static \u0275inj=k({imports:[j.forChild(fe),j]})}return l})();var He=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=N({type:l});static \u0275inj=k({imports:[Z,me]})}return l})();export{He as DocPoNumberModule};
