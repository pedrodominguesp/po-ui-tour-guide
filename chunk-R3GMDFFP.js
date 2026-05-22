import{o as C,p as ae}from"./chunk-WYOAC7KN.js";import{Ha as M,Hb as v,Ib as y,Ja as te,S as $,Sa as F,U as ee,Ya as ne,a as L,bb as ie,ub as oe,w as H}from"./chunk-XOCFD5XY.js";import{Ea as c,Fa as n,Ga as t,Ha as o,I as z,Jc as V,L as Q,Mb as _,Mc as q,Nc as W,O as u,Oa as O,Oc as R,P as E,Pa as g,Pc as A,Qc as T,Tc as K,Uc as J,Yc as X,_a as U,bb as w,cb as e,cd as Y,eb as D,ed as Z,gb as h,gd as j,ha as m,hb as b,ib as S,ma as I,oa as x,pa as B,rb as P}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var le=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","decimal","p-label","PO Decimal"]],template:function(r,i){r&1&&o(0,"po-decimal",0)},dependencies:[M],encapsulation:2})}return l})();var xe=l=>({"docs-sample-code-tabs":l}),re=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-basic/sample-po-decimal-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal name="decimal" p-label="PO Decimal"> </po-decimal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-basic/sample-po-decimal-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-basic',
  templateUrl: './sample-po-decimal-basic.component.html',
  standalone: false
})
export class SamplePoDecimalBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-basic"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel),m(),c("ngClass",P(4,xe,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,le],encapsulation:2})}return l})();var de=(()=>{class l{helperText;decimal;decimalsLength;event;help;icon;label;locale;placeholder;properties;thousandMaxlength;errorPattern;max;min;size;localeOptions=[{value:"pt",label:"Portuguese"},{value:"en",label:"English"},{value:"ru",label:"Russian"},{value:"es",label:"Spanish"}];iconOptions=[{value:"an an-shopping-cart-simple",label:"an an-shopping-cart-simple"},{value:"an an-currency-dollar-simple",label:"an an-currency-dollar-simple"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];get maxDecimalsLength(){return 16-this.thousandMaxlength||15}get maxThousandMaxlength(){return 16-this.decimalsLength||13}ngOnInit(){this.restore()}changeEvent(d){this.event=d}restore(){this.helperText="",this.decimal=void 0,this.decimalsLength=void 0,this.event="",this.help=void 0,this.icon=void 0,this.label=void 0,this.locale=void 0,this.placeholder="",this.thousandMaxlength=void 0,this.errorPattern=void 0,this.max=void 0,this.min=void 0,this.size="medium",this.properties=[]}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs"]],standalone:!1,decls:23,vars:46,consts:[["f","ngForm"],["name","decimal",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-keydown","ngModel","p-helper","p-clean","p-decimals-length","p-disabled","p-help","p-icon","p-label","p-loading","p-locale","p-error-pattern","p-max","p-min","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-thousand-maxlength","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","min","p-clean","","p-label","Min",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","max","p-clean","","p-label","Max",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","locale","p-clean","","p-label","Locale",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","decimalsLength","p-clean","","p-help","M\xE1ximo 15","p-label","Decimals max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","thousandMaxlength","p-clean","","p-help","M\xE1ximo 13","p-label","Thousand max length","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-max"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=O();n(0,"po-decimal",1),S("ngModelChange",function(a){return u(p),b(i.decimal,a)||(i.decimal=a),E(a)}),g("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),S("ngModelChange",function(a){return u(p),b(i.label,a)||(i.label=a),E(a)}),t(),n(9,"po-input",6),S("ngModelChange",function(a){return u(p),b(i.help,a)||(i.help=a),E(a)}),t(),n(10,"po-input",7),S("ngModelChange",function(a){return u(p),b(i.helperText,a)||(i.helperText=a),E(a)}),t(),n(11,"po-input",8),S("ngModelChange",function(a){return u(p),b(i.placeholder,a)||(i.placeholder=a),E(a)}),t(),n(12,"po-input",9),S("ngModelChange",function(a){return u(p),b(i.errorPattern,a)||(i.errorPattern=a),E(a)}),t(),n(13,"po-select",10),S("ngModelChange",function(a){return u(p),b(i.icon,a)||(i.icon=a),E(a)}),t(),n(14,"po-number",11),S("ngModelChange",function(a){return u(p),b(i.min,a)||(i.min=a),E(a)}),t(),n(15,"po-number",12),S("ngModelChange",function(a){return u(p),b(i.max,a)||(i.max=a),E(a)}),t(),n(16,"po-select",13),S("ngModelChange",function(a){return u(p),b(i.locale,a)||(i.locale=a),E(a)}),t(),n(17,"po-number",14),S("ngModelChange",function(a){return u(p),b(i.decimalsLength,a)||(i.decimalsLength=a),E(a)}),t(),n(18,"po-number",15),S("ngModelChange",function(a){return u(p),b(i.thousandMaxlength,a)||(i.thousandMaxlength=a),E(a)}),t(),n(19,"po-checkbox-group",16),S("ngModelChange",function(a){return u(p),b(i.properties,a)||(i.properties=a),E(a)}),t(),n(20,"po-radio-group",17),S("ngModelChange",function(a){return u(p),b(i.size,a)||(i.size=a),E(a)}),t(),n(21,"div",2)(22,"po-button",18),g("p-click",function(){return i.restore()}),t()()()}r&2&&(h("ngModel",i.decimal),c("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-decimals-length",i.decimalsLength)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-locale",i.locale)("p-error-pattern",i.errorPattern)("p-max",i.max)("p-min",i.min)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-thousand-maxlength",i.thousandMaxlength)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),c("p-value",i.decimal),m(),c("p-value",i.event),m(4),h("ngModel",i.label),m(),h("ngModel",i.help),m(),h("ngModel",i.helperText),m(),h("ngModel",i.placeholder),m(),h("ngModel",i.errorPattern),m(),h("ngModel",i.icon),c("p-options",i.iconOptions),m(),h("ngModel",i.min),m(),h("ngModel",i.max),m(),h("ngModel",i.locale),c("p-options",i.localeOptions),m(),h("ngModel",i.decimalsLength),c("p-max",i.maxDecimalsLength),m(),h("ngModel",i.thousandMaxlength),c("p-max",i.maxThousandMaxlength),m(),h("ngModel",i.properties),c("p-options",i.propertiesOptions),m(),h("ngModel",i.size),c("p-options",i.sizeOptions))},dependencies:[T,q,W,A,R,H,L,$,ee,M,te,F,ne,ie],encapsulation:2})}return l})();var ye=l=>({"docs-sample-code-tabs":l}),pe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-labs/sample-po-decimal-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-decimal
  class="po-md-12"
  name="decimal"
  [(ngModel)]="decimal"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-decimals-length]="decimalsLength"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-locale]="locale"
  [p-error-pattern]="errorPattern"
  [p-max]="max"
  [p-min]="min"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-thousand-maxlength]="thousandMaxlength"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-decimal>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="decimal"> </po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-number class="po-md-6 po-lg-3" name="min" [(ngModel)]="min" p-clean p-label="Min"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="max" [(ngModel)]="max" p-clean p-label="Max"> </po-number>

  <po-select
    class="po-md-6 po-lg-3"
    name="locale"
    [(ngModel)]="locale"
    p-clean
    p-label="Locale"
    [p-options]="localeOptions"
  ></po-select>

  <po-number
    class="po-md-6 po-lg-3"
    name="decimalsLength"
    [(ngModel)]="decimalsLength"
    p-clean
    p-help="M\xE1ximo 15"
    p-label="Decimals max length"
    p-min="0"
    [p-max]="maxDecimalsLength"
  >
  </po-number>

  <po-number
    class="po-md-6 po-lg-3"
    name="thousandMaxlength"
    [(ngModel)]="thousandMaxlength"
    p-clean
    p-help="M\xE1ximo 13"
    p-label="Thousand max length"
    p-min="0"
    [p-max]="maxThousandMaxlength"
  >
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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-labs/sample-po-decimal-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-decimal-labs',
  templateUrl: './sample-po-decimal-labs.component.html',
  standalone: false
})
export class SamplePoDecimalLabsComponent implements OnInit {
  helperText: string;
  decimal: number;
  decimalsLength: number;
  event: string;
  help: string;
  icon: string;
  label: string;
  locale: string;
  placeholder: string;
  properties: Array<string>;
  thousandMaxlength: number;
  errorPattern: string;
  max: number;
  min: number;
  size: string;

  public readonly localeOptions: Array<PoSelectOption> = [
    { value: 'pt', label: 'Portuguese' },
    { value: 'en', label: 'English' },
    { value: 'ru', label: 'Russian' },
    { value: 'es', label: 'Spanish' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-shopping-cart-simple', label: 'an an-shopping-cart-simple' },
    { value: 'an an-currency-dollar-simple', label: 'an an-currency-dollar-simple' },
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

  get maxDecimalsLength() {
    return 16 - this.thousandMaxlength || 15;
  }

  get maxThousandMaxlength() {
    return 16 - this.decimalsLength || 13;
  }

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.decimal = undefined;
    this.decimalsLength = undefined;
    this.event = '';
    this.help = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.locale = undefined;
    this.placeholder = '';
    this.thousandMaxlength = undefined;
    this.errorPattern = undefined;
    this.max = undefined;
    this.min = undefined;
    this.size = 'medium';

    this.properties = [];
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-labs"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel),m(),c("ngClass",P(4,ye,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,de],encapsulation:2})}return l})();var se=(()=>{class l{hourlyWage;quantityDaysPerMonth;salary;weekHours;workingDaysPerWeek;calculate(){let d=this.weekHours/this.workingDaysPerWeek*this.quantityDaysPerMonth,r=this.salary/d;this.hourlyWage=r}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage"]],standalone:!1,decls:16,vars:6,consts:[["f","ngForm"],[1,"po-font-title"],[1,"po-row"],["name","weekHours","p-label","Week Hours","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","workingDaysPerWeek","p-label","Working days per week","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","quantityDaysPerMonth","p-label","Quantity days per month","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-required","","p-thousand-maxlength","13",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let p=O();n(0,"form",null,0)(2,"div",1),e(3,"Calculate hourly wage"),t(),o(4,"po-divider"),n(5,"div",2)(6,"po-number",3),S("ngModelChange",function(a){return u(p),b(i.weekHours,a)||(i.weekHours=a),E(a)}),t(),n(7,"po-number",4),S("ngModelChange",function(a){return u(p),b(i.workingDaysPerWeek,a)||(i.workingDaysPerWeek=a),E(a)}),t()(),n(8,"div",2)(9,"po-number",5),S("ngModelChange",function(a){return u(p),b(i.quantityDaysPerMonth,a)||(i.quantityDaysPerMonth=a),E(a)}),t(),n(10,"po-decimal",6),S("ngModelChange",function(a){return u(p),b(i.salary,a)||(i.salary=a),E(a)}),g("p-change",function(){return i.calculate()}),t()(),n(11,"div",2)(12,"po-decimal",7),S("ngModelChange",function(a){return u(p),b(i.hourlyWage,a)||(i.hourlyWage=a),E(a)}),t()(),n(13,"div",2)(14,"po-button",8),g("p-click",function(){u(p);let a=U(1);return E(a.reset())}),t(),n(15,"po-button",9),g("p-click",function(){return i.calculate()}),t()()()}r&2&&(m(6),h("ngModel",i.weekHours),m(),h("ngModel",i.workingDaysPerWeek),m(2),h("ngModel",i.quantityDaysPerMonth),m(),h("ngModel",i.salary),m(2),h("ngModel",i.hourlyWage),m(3),c("p-disabled",!i.hourlyWage))},dependencies:[T,q,W,A,R,H,L,M,F],encapsulation:2})}return l})();var De=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" name="weekHours" [(ngModel)]="weekHours" p-label="Week Hours" p-required> </po-number>

    <po-number
      class="po-md-6"
      name="workingDaysPerWeek"
      [(ngModel)]="workingDaysPerWeek"
      p-label="Working days per week"
      p-required
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-number
      class="po-md-6"
      name="quantityDaysPerMonth"
      [(ngModel)]="quantityDaysPerMonth"
      p-label="Quantity days per month"
      p-required
    >
    </po-number>

    <po-decimal
      class="po-md-6"
      name="salary"
      [(ngModel)]="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-required
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="hourlyWage"
      [(ngModel)]="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-required
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="f.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="!hourlyWage"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage/sample-po-decimal-hourly-wage.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-decimal-hourly-wage',
  templateUrl: './sample-po-decimal-hourly-wage.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageComponent {
  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = (this.weekHours / this.workingDaysPerWeek) * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel),m(),c("ngClass",P(4,De,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,se],encapsulation:2})}return l})();var ue=(()=>{class l{formBuilder=Q(X);formCalculateHourlyWage;ngOnInit(){this.formCalculateHourlyWage=this.formBuilder.group({hourlyWage:[null],quantityDaysPerMonth:[null,V.required],salary:[null,V.required],weekHours:[null,V.required],workingDaysPerWeek:[null,V.required]})}calculate(){let{weekHours:d,workingDaysPerWeek:r,quantityDaysPerMonth:i,salary:p}=this.formCalculateHourlyWage.value,s=d/r*i,a=p/s;this.formCalculateHourlyWage.patchValue({hourlyWage:a})}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form"]],standalone:!1,decls:15,vars:2,consts:[[3,"formGroup"],[1,"po-font-title"],[1,"po-row"],["formControlName","weekHours","p-label","Week Hours",1,"po-md-6"],["formControlName","workingDaysPerWeek","p-label","Working days per week",1,"po-md-6"],["formControlName","quantityDaysPerMonth","p-label","Quantity days per month",1,"po-md-6"],["formControlName","salary","p-decimals-length","2","p-icon","an an-currency-circle-dollar","p-label","Salary","p-thousand-maxlength","13",1,"po-md-6",3,"p-change"],["formControlName","hourlyWage","p-decimals-length","2","p-disabled","","p-icon","an an-currency-dollar-simple","p-label","Hourly Wage","p-thousand-maxlength","13",1,"po-md-6"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-label","Recalculate","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(r,i){r&1&&(n(0,"form",0)(1,"div",1),e(2,"Calculate hourly wage"),t(),o(3,"po-divider"),n(4,"div",2),o(5,"po-number",3)(6,"po-number",4),t(),n(7,"div",2),o(8,"po-number",5),n(9,"po-decimal",6),g("p-change",function(){return i.calculate()}),t()(),n(10,"div",2),o(11,"po-decimal",7),t(),n(12,"div",2)(13,"po-button",8),g("p-click",function(){return i.formCalculateHourlyWage.reset()}),t(),n(14,"po-button",9),g("p-click",function(){return i.calculate()}),t()()()),r&2&&(c("formGroup",i.formCalculateHourlyWage),m(14),c("p-disabled",i.formCalculateHourlyWage.invalid))},dependencies:[T,q,W,J,K,H,L,M,F],encapsulation:2})}return l})();var Me=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-hourly-wage-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Decimal - Hourly Wage Reactive Form"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="formCalculateHourlyWage">
  <div class="po-font-title">Calculate hourly wage</div>

  <po-divider />

  <div class="po-row">
    <po-number class="po-md-6" formControlName="weekHours" p-label="Week Hours"> </po-number>

    <po-number class="po-md-6" formControlName="workingDaysPerWeek" p-label="Working days per week"> </po-number>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" formControlName="quantityDaysPerMonth" p-label="Quantity days per month"> </po-number>

    <po-decimal
      class="po-md-6"
      formControlName="salary"
      p-decimals-length="2"
      p-icon="an an-currency-circle-dollar"
      p-label="Salary"
      p-thousand-maxlength="13"
      (p-change)="calculate()"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      formControlName="hourlyWage"
      p-decimals-length="2"
      p-disabled
      p-icon="an an-currency-dollar-simple"
      p-label="Hourly Wage"
      p-thousand-maxlength="13"
    >
    </po-decimal>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Clean" (p-click)="formCalculateHourlyWage.reset()"> </po-button>

    <po-button
      class="po-md-3"
      p-label="Recalculate"
      p-kind="primary"
      [p-disabled]="formCalculateHourlyWage.invalid"
      (p-click)="calculate()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-decimal-hourly-wage-reactive-form/sample-po-decimal-hourly-wage-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sample-po-decimal-hourly-wage-reactive-form',
  templateUrl: './sample-po-decimal-hourly-wage-reactive-form.component.html',
  standalone: false
})
export class SamplePoDecimalHourlyWageReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  formCalculateHourlyWage: UntypedFormGroup;

  ngOnInit() {
    this.formCalculateHourlyWage = this.formBuilder.group({
      hourlyWage: [null],
      quantityDaysPerMonth: [null, Validators.required],
      salary: [null, Validators.required],
      weekHours: [null, Validators.required],
      workingDaysPerWeek: [null, Validators.required]
    });
  }

  calculate() {
    const { weekHours, workingDaysPerWeek, quantityDaysPerMonth, salary } = this.formCalculateHourlyWage.value;

    const hours = (weekHours / workingDaysPerWeek) * quantityDaysPerMonth;
    const hourlyWage = salary / hours;

    this.formCalculateHourlyWage.patchValue({ hourlyWage });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-decimal-hourly-wage-reactive-form"),t(),o(23,"hr")),r&2&&(m(5),w("po-icon "+i.sampleCodeButtonIcon),m(),D(" ",i.sampleCodeButtonLabel),m(),c("ngClass",P(4,Me,i.hideSampleCodeTabs)))},dependencies:[_,C,v,y,ue],encapsulation:2})}return l})();var ge=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=x({type:l,selectors:[["sample-po-decimal-doc"]],standalone:!1,decls:1516,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoDecimalComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"code"),e(131,"--field-container-title-justify"),t()(),n(132,"td"),e(133,"Alinhamento horizontal do t\xEDtulo ("),n(134,"code"),e(135,"justify-content"),t(),e(136,")"),t(),n(137,"td")(138,"code"),e(139,"space-between"),t()()(),n(140,"tr")(141,"td")(142,"code"),e(143,"--field-container-title-flex"),t()(),n(144,"td"),e(145,"Flex do t\xEDtulo ("),n(146,"code"),e(147,"flex"),t(),e(148,")"),t(),n(149,"td")(150,"code"),e(151,"1 auto"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Hover"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-hover"),t()(),n(162,"td"),e(163,"Cor principal no estado hover"),t(),n(164,"td")(165,"code"),e(166,"var(--color-brand-01-dark)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--background-hover"),t()(),n(171,"td"),e(172,"Cor de background no estado hover"),t(),n(173,"td")(174,"code"),e(175,"var(--color-brand-01-lightest)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Focused"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-focused"),t()(),n(186,"td"),e(187,"Cor principal no estado de focus"),t(),n(188,"td")(189,"code"),e(190,"var(--color-action-default)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--outline-color-focused"),t()(),n(195,"td"),e(196,"Cor do outline do estado de focus"),t(),n(197,"td")(198,"code"),e(199,"var(--color-action-focus)"),t()()(),n(200,"tr")(201,"td")(202,"strong"),e(203,"Disabled"),t()(),o(204,"td")(205,"td"),t(),n(206,"tr")(207,"td")(208,"code"),e(209,"--color-disabled"),t()(),n(210,"td"),e(211,"Cor principal no estado disabled"),t(),n(212,"td")(213,"code"),e(214,"var(--color-neutral-light-30)"),t()()(),n(215,"tr")(216,"td")(217,"code"),e(218,"--background-disabled"),t()(),n(219,"td"),e(220,"Cor de background no estado disabled"),t(),n(221,"td")(222,"code"),e(223,"var(--color-neutral-light-20)"),t()()(),n(224,"tr")(225,"td")(226,"code"),e(227,"--text-color-disabled"),t()(),n(228,"td"),e(229,"Cor do texto no estado disabled"),t(),n(230,"td")(231,"code"),e(232,"var(--color-neutral-dark-70)"),t()()()()(),n(233,"p"),o(234,"br"),e(235," - O "),n(236,"code"),e(237,"po-decimal"),t(),e(238," \xE9 um "),n(239,"em"),e(240,"input"),t(),e(241," espec\xEDfico para receber apenas n\xFAmeros decimais, por isso recebe as seguintes caracter\xEDsticas:"),t(),n(242,"ul")(243,"li"),e(244,"Aceita apenas n\xFAmeros;"),t(),n(245,"li"),e(246,"Utiliza ',' como separador de decimal;"),t(),n(247,"li"),e(248,"Utiliza '.' para separa\xE7\xE3o de milhar;"),t(),n(249,"li"),e(250,"\xC9 poss\xEDvel configurar a quantidade de casas decimais e a quantidade de digitos do campo."),t()(),n(251,"blockquote")(252,"p")(253,"strong"),e(254,"Importante:"),t(),e(255,`
Atualmente o JavaScript limita-se a um conjunto de dados de `),n(256,"code"),e(257,"32 bits"),t(),e(258,`, e para que os valores comportem-se devidamente,
o `),n(259,"code"),e(260,"po-decimal"),t(),e(261,` cont\xE9m um tratamento que limita em 16 o n\xFAmero total de casas antes e ap\xF3s a v\xEDrgula.
Veja abaixo as demais regras nas documenta\xE7\xF5es de `),n(262,"code"),e(263,"p-decimals-length"),t(),e(264," e "),n(265,"code"),e(266,"p-thousand-maxlength"),t(),e(267,"."),t()()(),n(268,"div",8)(269,"h4",9),e(270,"Seletor"),t(),n(271,"pre",10),e(272,`<po-decimal
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-clean="boolean"
    p-compact-label="boolean"
    p-decimals-length="number"
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
    p-locale="string"
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
    p-thousand-maxlength="number"
    p-upper-case="boolean" >
</po-decimal>
`),t()(),n(273,"h4",11),e(274,"Propriedades"),t(),n(275,"table",12)(276,"tr",13)(277,"th",14),e(278,"Nome"),t(),n(279,"th",14),e(280,"Tipo"),t(),n(281,"th",14),e(282,"Padr\xE3o"),t(),n(283,"th",14),e(284,"Descri\xE7\xE3o"),t()(),n(285,"tr",15)(286,"td",16)(287,"div",17)(288,"span",18),e(289," (p-additional-help)"),o(290,"br"),t()(),n(291,"div",19),e(292,"Deprecated"),t()(),n(293,"td",20)(294,"code",21),e(295,"EventEmitter"),t()(),n(296,"td",22),e(297,"-"),t(),n(298,"td",23)(299,"em")(300,"strong"),e(301,"(opcional)"),t()(),n(302,"p"),e(303,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(304,"blockquote")(305,"p"),e(306,"Essa propriedade est\xE1 "),n(307,"strong"),e(308,"depreciada"),t(),e(309," e ser\xE1 removida na vers\xE3o "),n(310,"code"),e(311,"23.x.x"),t(),e(312,". Recomendamos utilizar a propriedade "),n(313,"code"),e(314,"p-helper"),t(),e(315," que oferece mais recursos e flexibilidade."),t()()()(),n(316,"tr",15)(317,"td",16)(318,"div",24)(319,"span",25),e(320," p-additional-help-tooltip"),o(321,"br"),t()(),n(322,"div",19),e(323,"Deprecated"),t()(),n(324,"td",20)(325,"code",26),e(326,"string"),t()(),n(327,"td",22),e(328,"-"),t(),n(329,"td",23)(330,"em")(331,"strong"),e(332,"(opcional)"),t()(),n(333,"p"),e(334,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(335,"code"),e(336,"po-helper"),t(),e(337,`.
`),n(338,"strong"),e(339,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(340,"blockquote")(341,"p"),e(342,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(343,"blockquote")(344,"p"),e(345,"Essa propriedade est\xE1 "),n(346,"strong"),e(347,"depreciada"),t(),e(348," e ser\xE1 removida na vers\xE3o "),n(349,"code"),e(350,"23.x.x"),t(),e(351,". Recomendamos utilizar a propriedade "),n(352,"code"),e(353,"p-helper"),t(),e(354," que oferece mais recursos e flexibilidade."),t()()()(),n(355,"tr",15)(356,"td",16)(357,"div",24)(358,"span",25),e(359," p-append-in-body"),o(360,"br"),t()()(),n(361,"td",20)(362,"code",27),e(363,"boolean"),t()(),n(364,"td",22)(365,"p")(366,"code"),e(367,"false"),t()()(),n(368,"td",23)(369,"em")(370,"strong"),e(371,"(opcional)"),t()(),n(372,"p"),e(373,"Define que o popover ("),n(374,"code"),e(375,"p-helper"),t(),e(376," e/ou "),n(377,"code"),e(378,"p-error-limit"),t(),e(379,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(380,"blockquote")(381,"p"),e(382,"Quando utilizado com "),n(383,"code"),e(384,"p-helper"),t(),e(385,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(386,"tr",15)(387,"td",16)(388,"div",24)(389,"span",25),e(390," p-auto-focus"),o(391,"br"),t()()(),n(392,"td",20)(393,"code",27),e(394,"boolean"),t()(),n(395,"td",22)(396,"p")(397,"code"),e(398,"false"),t()()(),n(399,"td",23)(400,"em")(401,"strong"),e(402,"(opcional)"),t()(),n(403,"p"),e(404,"Aplica foco no elemento ao ser iniciado."),t(),n(405,"blockquote")(406,"p"),e(407,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),e(412," (p-blur)"),o(413,"br"),t()()(),n(414,"td",20)(415,"code",21),e(416,"EventEmitter"),t()(),n(417,"td",22),e(418,"-"),t(),n(419,"td",23)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),n(423,"p"),e(424,"Evento disparado ao sair do campo."),t()()(),n(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),e(429," (p-change)"),o(430,"br"),t()()(),n(431,"td",20)(432,"code",21),e(433,"EventEmitter"),t()(),n(434,"td",22),e(435,"-"),t(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(442,"tr",15)(443,"td",16)(444,"div",17)(445,"span",18),e(446," (p-change-model)"),o(447,"br"),t()()(),n(448,"td",20)(449,"code",21),e(450,"EventEmitter"),t()(),n(451,"td",22),e(452,"-"),t(),n(453,"td",23)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),n(457,"p"),e(458,"Evento disparado ao alterar valor do model."),t()()(),n(459,"tr",15)(460,"td",16)(461,"div",24)(462,"span",25),e(463,"p-clean"),o(464,"br"),t()()(),n(465,"td",20)(466,"code",27),e(467,"boolean"),t()(),n(468,"td",22),e(469,"-"),t(),n(470,"td",23)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),n(474,"p"),e(475,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(476,"tr",15)(477,"td",16)(478,"div",24)(479,"span",25),e(480," p-compact-label"),o(481,"br"),t()()(),n(482,"td",20)(483,"code",27),e(484,"boolean"),t()(),n(485,"td",22)(486,"p")(487,"code"),e(488,"false"),t()()(),n(489,"td",23)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),n(495,"p"),e(496,"Quando habilitado ("),n(497,"code"),e(498,"true"),t(),e(499,"), o modo compacto afeta o conjunto composto por:"),t(),n(500,"ul")(501,"li")(502,"code"),e(503,"po-label"),t()(),n(504,"li")(505,"code"),e(506,"p-requirement (showRequired)"),t()(),n(507,"li")(508,"code"),e(509,"po-helper"),t()()(),n(510,"p"),e(511,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),n(512,"p"),e(513,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),n(514,"ul")(515,"li")(516,"code"),e(517,"--field-container-title-justify"),t()(),n(518,"li")(519,"code"),e(520,"--field-container-title-flex"),t()()(),n(521,"p"),e(522,"Exemplo:"),t(),n(523,"pre")(524,"code"),e(525,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),n(526,"p"),e(527,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),n(528,"tr",15)(529,"td",16)(530,"div",24)(531,"span",25),e(532," p-decimals-length"),o(533,"br"),t()()(),n(534,"td",20)(535,"code",28),e(536,"number"),t()(),n(537,"td",22)(538,"p")(539,"code"),e(540,"2"),t()()(),n(541,"td",23)(542,"em")(543,"strong"),e(544,"(opcional)"),t()(),n(545,"p"),e(546,"Quantidade m\xE1xima de casas decimais."),t(),n(547,"blockquote")(548,"p")(549,"strong"),e(550,"Importante:"),t()()(),n(551,"ul")(552,"li"),e(553,"O valor m\xE1ximo permitido \xE9 15;"),t(),n(554,"li"),e(555,"A soma total de "),n(556,"code"),e(557,"p-decimals-length"),t(),e(558," com "),n(559,"code"),e(560,"p-thousand-maxlength"),t(),e(561," limita-se \xE0 16;"),t(),n(562,"li"),e(563,"Esta propriedade sobrep\xF5e apenas o valor "),n(564,"strong"),e(565,"padr\xE3o"),t(),e(566," de "),n(567,"code"),e(568,"p-thousand-maxlength"),t(),e(569,";"),t(),n(570,"li"),e(571,"Caso "),n(572,"code"),e(573,"p-thousand-maxlength"),t(),e(574," tenha um valor definido, esta propriedade poder\xE1 receber apenas o valor restante do limite total (16)."),t()()()(),n(575,"tr",15)(576,"td",16)(577,"div",24)(578,"span",25),e(579,"p-disabled"),o(580,"br"),t()()(),n(581,"td",20)(582,"code",27),e(583,"boolean"),t()(),n(584,"td",22)(585,"p")(586,"code"),e(587,"false"),t()()(),n(588,"td",23)(589,"em")(590,"strong"),e(591,"(opcional)"),t()(),n(592,"p"),e(593,"Se verdadeiro, desabilita o campo."),t()()(),n(594,"tr",15)(595,"td",16)(596,"div",24)(597,"span",25),e(598," p-emit-all-changes"),o(599,"br"),t()()(),n(600,"td",20)(601,"code",27),e(602,"boolean"),t()(),n(603,"td",22)(604,"p")(605,"code"),e(606,"false"),t()()(),n(607,"td",23)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),n(611,"p"),e(612,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(613,"tr",15)(614,"td",16)(615,"div",17)(616,"span",18),e(617," (p-enter)"),o(618,"br"),t()()(),n(619,"td",20)(620,"code",21),e(621,"EventEmitter"),t()(),n(622,"td",22),e(623,"-"),t(),n(624,"td",23)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),n(628,"p"),e(629,"Evento disparado ao entrar do campo."),t()()(),n(630,"tr",15)(631,"td",16)(632,"div",24)(633,"span",25),e(634," p-error-async-properties"),o(635,"br"),t()()(),n(636,"td",20)(637,"code",29),e(638,"ErrorAsyncProperties"),t()(),n(639,"td",22),e(640,"-"),t(),n(641,"td",23)(642,"em")(643,"strong"),e(644,"(opcional)"),t()(),n(645,"p"),e(646,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(647,"code"),e(648,"Reactive Forms"),t(),e(649,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(650,"code"),e(651,"asyncValidators"),t(),e(652,"."),t()()(),n(653,"tr",15)(654,"td",16)(655,"div",24)(656,"span",25),e(657," p-error-limit"),o(658,"br"),t()()(),n(659,"td",20)(660,"code",27),e(661,"boolean"),t()(),n(662,"td",22)(663,"p")(664,"code"),e(665,"false"),t()()(),n(666,"td",23)(667,"em")(668,"strong"),e(669,"(opcional)"),t()(),n(670,"p"),e(671,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(672,"blockquote")(673,"p"),e(674,"Caso essa propriedade seja definida como "),n(675,"code"),e(676,"true"),t(),e(677,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(678,"tr",15)(679,"td",16)(680,"div",24)(681,"span",25),e(682," p-error-pattern"),o(683,"br"),t()()(),n(684,"td",20)(685,"code",26),e(686,"string"),t()(),n(687,"td",22),e(688,"-"),t(),n(689,"td",23)(690,"em")(691,"strong"),e(692,"(opcional)"),t()(),n(693,"p"),e(694,"Mensagem que ser\xE1 apresentada quando o "),n(695,"code"),e(696,"pattern"),t(),e(697," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(698,"blockquote")(699,"p"),e(700,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(701,"code"),e(702,"p-required-field-error-message"),t(),e(703," em conjunto."),t()()()(),n(704,"tr",15)(705,"td",16)(706,"div",24)(707,"span",25),e(708," p-help"),o(709,"br"),t()()(),n(710,"td",20)(711,"code",26),e(712,"string"),t()(),n(713,"td",22),e(714,"-"),t(),n(715,"td",23)(716,"em")(717,"strong"),e(718,"(opcional)"),t()(),n(719,"p"),e(720,"Texto de apoio do campo."),t()()(),n(721,"tr",15)(722,"td",16)(723,"div",24)(724,"span",25),e(725," p-icon"),o(726,"br"),t()()(),n(727,"td",20)(728,"code",26),e(729,"string "),t(),n(730,"code",30),e(731," TemplateRef<void>"),t()(),n(732,"td",22),e(733,"-"),t(),n(734,"td",23)(735,"em")(736,"strong"),e(737,"(opcional)"),t()(),n(738,"p"),e(739,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(740,"p"),e(741,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(742,"a",31),e(743,"Biblioteca de \xEDcones"),t(),e(744,". conforme exemplo abaixo:"),t(),n(745,"pre")(746,"code"),e(747,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(748,"p"),e(749,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(750,"em"),e(751,"Font Awesome"),t(),e(752,", da seguinte forma:"),t(),n(753,"pre")(754,"code"),e(755,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(756,"p"),e(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(758,"code"),e(759,"TemplateRef"),t(),e(760,", conforme exemplo abaixo:"),t(),n(761,"pre")(762,"code"),e(763,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(764,"blockquote")(765,"p"),e(766,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(767,"code"),e(768,"font-size: inherit"),t(),e(769," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(770,"tr",15)(771,"td",16)(772,"div",17)(773,"span",18),e(774," (p-keydown)"),o(775,"br"),t()()(),n(776,"td",20)(777,"code",21),e(778,"EventEmitter"),t()(),n(779,"td",22),e(780,"-"),t(),n(781,"td",23)(782,"em")(783,"strong"),e(784,"(opcional)"),t()(),n(785,"p"),e(786,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(787,"code"),e(788,"KeyboardEvent"),t(),e(789," com informa\xE7\xF5es sobre a tecla."),t()()(),n(790,"tr",15)(791,"td",16)(792,"div",24)(793,"span",25),e(794," p-label"),o(795,"br"),t()()(),n(796,"td",20)(797,"code",26),e(798,"string"),t()(),n(799,"td",22),e(800,"-"),t(),n(801,"td",23)(802,"em")(803,"strong"),e(804,"(opcional)"),t()(),n(805,"p"),e(806,"R\xF3tulo do campo."),t()()(),n(807,"tr",15)(808,"td",16)(809,"div",24)(810,"span",25),e(811," p-label-text-wrap"),o(812,"br"),t()()(),n(813,"td",20)(814,"code",27),e(815,"boolean"),t()(),n(816,"td",22)(817,"p")(818,"code"),e(819,"false"),t()()(),n(820,"td",23)(821,"em")(822,"strong"),e(823,"(opcional)"),t()(),n(824,"p"),e(825,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(826,"code"),e(827,"p-label"),t(),e(828,". Quando "),n(829,"code"),e(830,"p-label-text-wrap"),t(),e(831,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(832,"tr",15)(833,"td",16)(834,"div",24)(835,"span",25),e(836," p-loading"),o(837,"br"),t()()(),n(838,"td",20)(839,"code",27),e(840,"boolean"),t()(),n(841,"td",22)(842,"p")(843,"code"),e(844,"false"),t()()(),n(845,"td",23)(846,"em")(847,"strong"),e(848,"(opcional)"),t()(),n(849,"p"),e(850,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(851,"tr",15)(852,"td",16)(853,"div",24)(854,"span",25),e(855," p-locale"),o(856,"br"),t()()(),n(857,"td",20)(858,"code",26),e(859,"string"),t()(),n(860,"td",22),e(861,"-"),t(),n(862,"td",23)(863,"em")(864,"strong"),e(865,"(opcional)"),t()(),n(866,"p"),e(867,`Informa o locale(pa\xEDs) para a formata\xE7\xE3o do valor.
Por padr\xE3o o valor ser\xE1 configurado segundo a o m\xF3dulo `),n(868,"a",32)(869,"code"),e(870,"I18n"),t()()(),n(871,"blockquote")(872,"p"),e(873,"Para ver quais linguagens suportadas acesse "),n(874,"a",32)(875,"code"),e(876,"I18n"),t()()()()()(),n(877,"tr",15)(878,"td",16)(879,"div",24)(880,"span",25),e(881,"p-mask"),o(882,"br"),t()()(),n(883,"td",20)(884,"code",26),e(885,"string"),t()(),n(886,"td",22),e(887,"-"),t(),n(888,"td",23)(889,"em")(890,"strong"),e(891,"(opcional)"),t()(),n(892,"p"),e(893,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(894,"tr",15)(895,"td",16)(896,"div",24)(897,"span",25),e(898,"p-mask-format-model"),o(899,"br"),t()()(),n(900,"td",20)(901,"code",27),e(902,"boolean"),t()(),n(903,"td",22)(904,"p")(905,"code"),e(906,"false"),t()()(),n(907,"td",23)(908,"em")(909,"strong"),e(910,"(opcional)"),t()(),n(911,"p"),e(912,"Indica se o "),n(913,"code"),e(914,"model"),t(),e(915," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(916,"tr",15)(917,"td",16)(918,"div",24)(919,"span",25),e(920," p-mask-no-length-validation"),o(921,"br"),t()()(),n(922,"td",20)(923,"code",27),e(924,"boolean"),t()(),n(925,"td",22)(926,"p")(927,"code"),e(928,"false"),t()()(),n(929,"td",23)(930,"p"),e(931,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(932,"code"),e(933,"minLength"),t(),e(934,") e m\xE1ximo ("),n(935,"code"),e(936,"maxLength"),t(),e(937,") quando h\xE1 uma m\xE1scara ("),n(938,"code"),e(939,"p-mask"),t(),e(940,") definida."),t(),n(941,"ul")(942,"li"),e(943,"Quando "),n(944,"code"),e(945,"true"),t(),e(946,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(947,"li"),e(948,"Quando "),n(949,"code"),e(950,"false"),t(),e(951,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(952,"blockquote")(953,"p"),e(954,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(955,"code"),e(956,"p-mask-format-model"),t(),e(957,"."),t()(),n(958,"p"),e(959,"Exemplo:"),t(),n(960,"pre")(961,"code"),e(962,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(963,"ul")(964,"li"),e(965,"Entrada: "),n(966,"code"),e(967,"123-456"),t(),e(968," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(969,"code"),e(970,"-"),t(),e(971,"."),t()()()(),n(972,"tr",15)(973,"td",16)(974,"div",24)(975,"span",25),e(976," p-max"),o(977,"br"),t()()(),n(978,"td",20)(979,"code",28),e(980,"number"),t()(),n(981,"td",22),e(982,"-"),t(),n(983,"td",23)(984,"em")(985,"strong"),e(986,"(opcional)"),t()(),n(987,"p"),e(988,"Valor m\xE1ximo."),t()()(),n(989,"tr",15)(990,"td",16)(991,"div",24)(992,"span",25),e(993," p-maxlength"),o(994,"br"),t()()(),n(995,"td",20)(996,"code",28),e(997,"number"),t()(),n(998,"td",22),e(999,"-"),t(),n(1e3,"td",23)(1001,"em")(1002,"strong"),e(1003,"(opcional)"),t()(),n(1004,"p"),e(1005,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(1006,"tr",15)(1007,"td",16)(1008,"div",24)(1009,"span",25),e(1010," p-min"),o(1011,"br"),t()()(),n(1012,"td",20)(1013,"code",28),e(1014,"number"),t()(),n(1015,"td",22),e(1016,"-"),t(),n(1017,"td",23)(1018,"em")(1019,"strong"),e(1020,"(opcional)"),t()(),n(1021,"p"),e(1022,"Valor m\xEDnimo."),t()()(),n(1023,"tr",15)(1024,"td",16)(1025,"div",24)(1026,"span",25),e(1027," p-minlength"),o(1028,"br"),t()()(),n(1029,"td",20)(1030,"code",28),e(1031,"number"),t()(),n(1032,"td",22),e(1033,"-"),t(),n(1034,"td",23)(1035,"em")(1036,"strong"),e(1037,"(opcional)"),t()(),n(1038,"p"),e(1039,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(1040,"tr",15)(1041,"td",16)(1042,"div",24)(1043,"span",25),e(1044," name"),o(1045,"br"),t()()(),n(1046,"td",20)(1047,"code",26),e(1048,"string"),t()(),n(1049,"td",22),e(1050,"-"),t(),n(1051,"td",23)(1052,"p"),e(1053,"Nome e identificador do campo."),t()()(),n(1054,"tr",15)(1055,"td",16)(1056,"div",24)(1057,"span",25),e(1058," p-no-autocomplete"),o(1059,"br"),t()()(),n(1060,"td",20)(1061,"code",27),e(1062,"boolean"),t()(),n(1063,"td",22)(1064,"p")(1065,"code"),e(1066,"false"),t()()(),n(1067,"td",23)(1068,"em")(1069,"strong"),e(1070,"(opcional)"),t()(),n(1071,"p"),e(1072,"Define a propriedade nativa "),n(1073,"code"),e(1074,"autocomplete"),t(),e(1075," do campo como "),n(1076,"code"),e(1077,"off"),t(),e(1078,"."),t(),n(1079,"blockquote")(1080,"p"),e(1081,"No componente "),n(1082,"code"),e(1083,"po-password"),t(),e(1084," ser\xE1 definido como "),n(1085,"code"),e(1086,"new-password"),t(),e(1087,"."),t()(),n(1088,"p"),e(1089,"Nos componentes "),n(1090,"code"),e(1091,"po-password"),t(),e(1092," e "),n(1093,"code"),e(1094,"po-login"),t(),e(1095," o valor padr\xE3o ser\xE1 "),n(1096,"code"),e(1097,"true"),t(),e(1098,"."),t()()(),n(1099,"tr",15)(1100,"td",16)(1101,"div",24)(1102,"span",25),e(1103," p-optional"),o(1104,"br"),t()()(),n(1105,"td",20)(1106,"code",27),e(1107,"boolean"),t()(),n(1108,"td",22)(1109,"p")(1110,"code"),e(1111,"false"),t()()(),n(1112,"td",23)(1113,"em")(1114,"strong"),e(1115,"(opcional)"),t()(),n(1116,"p"),e(1117,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1118,"blockquote")(1119,"p"),e(1120,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1121,"ul")(1122,"li"),e(1123,"O campo conter "),n(1124,"code"),e(1125,"p-required"),t(),e(1126,";"),t(),n(1127,"li"),e(1128,"N\xE3o possuir "),n(1129,"code"),e(1130,"p-help"),t(),e(1131," e/ou "),n(1132,"code"),e(1133,"p-label"),t(),e(1134,"."),t()()()(),n(1135,"tr",15)(1136,"td",16)(1137,"div",24)(1138,"span",25),e(1139,"p-pattern"),o(1140,"br"),t()()(),n(1141,"td",20)(1142,"code",26),e(1143,"string"),t()(),n(1144,"td",22),e(1145,"-"),t(),n(1146,"td",23)(1147,"em")(1148,"strong"),e(1149,"(opcional)"),t()(),n(1150,"p"),e(1151,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1152,"code"),e(1153,"(p-mask)"),t(),e(1154,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1155,"tr",15)(1156,"td",16)(1157,"div",24)(1158,"span",25),e(1159," p-placeholder"),o(1160,"br"),t()()(),n(1161,"td",20)(1162,"code",26),e(1163,"string"),t()(),n(1164,"td",22)(1165,"p"),e(1166,"''"),t()(),n(1167,"td",23)(1168,"em")(1169,"strong"),e(1170,"(opcional)"),t()(),n(1171,"p"),e(1172,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),e(1177," p-helper"),o(1178,"br"),t()()(),n(1179,"td",20)(1180,"code",33),e(1181,"PoHelperOptions "),t(),n(1182,"code",26),e(1183," string"),t()(),n(1184,"td",22),e(1185,"-"),t(),n(1186,"td",23)(1187,"em")(1188,"strong"),e(1189,"(opcional)"),t()(),n(1190,"p"),e(1191,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1192,"code"),e(1193,"p-label"),t(),e(1194," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1195,"code"),e(1196,"p-label"),t(),e(1197,"."),t(),n(1198,"blockquote")(1199,"p"),e(1200,"Para mais informa\xE7\xF5es acesse: "),n(1201,"a",34),e(1202,"https://po-ui.io/documentation/po-helper"),t(),e(1203,"."),t()(),n(1204,"blockquote")(1205,"p"),e(1206,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1207,"code"),e(1208,"p-additional-help-tooltip"),t(),e(1209," e "),n(1210,"code"),e(1211,"p-additional-help"),t(),e(1212,") ser\xE1 ignorado."),t()()()(),n(1213,"tr",15)(1214,"td",16)(1215,"div",24)(1216,"span",25),e(1217,"p-readonly"),o(1218,"br"),t()()(),n(1219,"td",20)(1220,"code",27),e(1221,"boolean"),t()(),n(1222,"td",22),e(1223,"-"),t(),n(1224,"td",23)(1225,"em")(1226,"strong"),e(1227,"(opcional)"),t()(),n(1228,"p"),e(1229,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1230,"tr",15)(1231,"td",16)(1232,"div",24)(1233,"span",25),e(1234,"p-required"),o(1235,"br"),t()()(),n(1236,"td",20)(1237,"code",27),e(1238,"boolean"),t()(),n(1239,"td",22)(1240,"p")(1241,"code"),e(1242,"false"),t()()(),n(1243,"td",23)(1244,"em")(1245,"strong"),e(1246,"(opcional)"),t()(),n(1247,"p"),e(1248,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1249,"blockquote")(1250,"p"),e(1251,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1252,"code"),e(1253,"(p-disabled)"),t(),e(1254,"."),t()()()(),n(1255,"tr",15)(1256,"td",16)(1257,"div",24)(1258,"span",25),e(1259," p-required-field-error-message"),o(1260,"br"),t()()(),n(1261,"td",20)(1262,"code",27),e(1263,"boolean"),t()(),n(1264,"td",22)(1265,"p")(1266,"code"),e(1267,"false"),t()()(),n(1268,"td",23)(1269,"em")(1270,"strong"),e(1271,"(opcional)"),t()(),n(1272,"p"),e(1273,"Exibe a mensagem setada na propriedade "),n(1274,"code"),e(1275,"p-error-pattern"),t(),e(1276," se o campo estiver vazio e for requerido."),t(),n(1277,"blockquote")(1278,"p"),e(1279,"Necess\xE1rio que a propriedade "),n(1280,"code"),e(1281,"p-required"),t(),e(1282," esteja habilitada."),t()()()(),n(1283,"tr",15)(1284,"td",16)(1285,"div",24)(1286,"span",25),e(1287," p-show-required"),o(1288,"br"),t()()(),n(1289,"td",20)(1290,"code",27),e(1291,"boolean"),t()(),n(1292,"td",22),e(1293,"-"),t(),n(1294,"td",23)(1295,"p"),e(1296,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1297,"blockquote")(1298,"p"),e(1299,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1300,"ul")(1301,"li"),e(1302,"N\xE3o possuir "),n(1303,"code"),e(1304,"p-help"),t(),e(1305," e/ou "),n(1306,"code"),e(1307,"p-label"),t(),e(1308,"."),t()()()(),n(1309,"tr",15)(1310,"td",16)(1311,"div",24)(1312,"span",25),e(1313," p-size"),o(1314,"br"),t()()(),n(1315,"td",20)(1316,"code",26),e(1317,"string"),t()(),n(1318,"td",22)(1319,"p")(1320,"code"),e(1321,"medium"),t()()(),n(1322,"td",23)(1323,"em")(1324,"strong"),e(1325,"(opcional)"),t()(),n(1326,"p"),e(1327,"Define o tamanho do componente:"),t(),n(1328,"ul")(1329,"li")(1330,"code"),e(1331,"small"),t(),e(1332,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1333,"li")(1334,"code"),e(1335,"medium"),t(),e(1336,": altura do input como 44px."),t()(),n(1337,"blockquote")(1338,"p"),e(1339,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1340,"code"),e(1341,"medium"),t(),e(1342,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1343,"a",35),e(1344,"po-theme"),t(),e(1345,"."),t()()()(),n(1346,"tr",15)(1347,"td",16)(1348,"div",24)(1349,"span",25),e(1350," p-thousand-maxlength"),o(1351,"br"),t()()(),n(1352,"td",20)(1353,"code",28),e(1354,"number"),t()(),n(1355,"td",22)(1356,"p")(1357,"code"),e(1358,"13"),t()()(),n(1359,"td",23)(1360,"em")(1361,"strong"),e(1362,"(opcional)"),t()(),n(1363,"p"),e(1364,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal."),t(),n(1365,"blockquote")(1366,"p")(1367,"strong"),e(1368,"Importante:"),t()()(),n(1369,"ul")(1370,"li"),e(1371,"O valor m\xE1ximo permitido \xE9 13;"),t(),n(1372,"li"),e(1373,"A soma total de "),n(1374,"code"),e(1375,"p-decimals-length"),t(),e(1376," com "),n(1377,"code"),e(1378,"p-thousand-maxlength"),t(),e(1379," limita-se \xE0 16;"),t(),n(1380,"li"),e(1381,"Esta propriedade sobrep\xF5e o valor definido em "),n(1382,"code"),e(1383,"p-decimals-length"),t(),e(1384,"."),t()()()(),n(1385,"tr",15)(1386,"td",16)(1387,"div",24)(1388,"span",25),e(1389," p-upper-case"),o(1390,"br"),t()()(),n(1391,"td",20)(1392,"code",27),e(1393,"boolean"),t()(),n(1394,"td",22),e(1395,"-"),t(),n(1396,"td",23)(1397,"p"),e(1398,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1399,"h3",11),e(1400,"M\xE9todos"),t(),n(1401,"table",36)(1402,"tr",15)(1403,"th",37)(1404,"div",24)(1405,"h4")(1406,"span",25),e(1407," showAdditionalHelp "),t()()()()(),n(1408,"tr",23)(1409,"td",23)(1410,"p"),e(1411,"M\xE9todo que exibe "),n(1412,"code"),e(1413,"p-helper"),t(),e(1414," ou executa a a\xE7\xE3o definida em "),n(1415,"code"),e(1416,"p-helper{eventOnClick}"),t(),e(1417," ou em "),n(1418,"code"),e(1419,"p-additionalHelp"),t(),e(1420,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1421,"code"),e(1422,"p-keydown"),t(),e(1423,"."),t(),n(1424,"blockquote")(1425,"p"),e(1426,"Exibe ou oculta o conte\xFAdo do componente "),n(1427,"code"),e(1428,"po-helper"),t(),e(1429," quando o componente estiver com foco."),t()(),n(1430,"pre")(1431,"code"),e(1432,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1433,"pre")(1434,"code"),e(1435,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1436,"br"),n(1437,"table",36)(1438,"tr",15)(1439,"th",37)(1440,"div",24)(1441,"h4")(1442,"span",25),e(1443," focus "),t()()()()(),n(1444,"tr",23)(1445,"td",23)(1446,"p"),e(1447,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1448,"p"),e(1449,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1450,"pre")(1451,"code"),e(1452,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1453,"br"),n(1454,"h3"),e(1455,"Interfaces"),t(),n(1456,"h4",38)(1457,"code",5),e(1458,"ErrorAsyncProperties"),t()(),n(1459,"div",2)(1460,"p"),e(1461,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1462,"h4",11),e(1463,"Propriedades"),t(),n(1464,"table",12)(1465,"tr",13)(1466,"th",14),e(1467,"Nome"),t(),n(1468,"th",14),e(1469,"Tipo"),t(),n(1470,"th",14),e(1471,"Descri\xE7\xE3o"),t()(),n(1472,"tr",15)(1473,"td",16)(1474,"div",24)(1475,"span",25),e(1476," errorAsync"),o(1477,"br"),t()()(),n(1478,"td",20)(1479,"code",39),e(1480,"(value) => Observable<boolean>"),t()(),n(1481,"td",23)(1482,"p"),e(1483,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1484,"code"),e(1485,"change"),t(),e(1486," ou "),n(1487,"code"),e(1488,"change-model"),t(),e(1489,", dependendo do valor da propriedade "),n(1490,"code"),e(1491,"triggerMode"),t(),e(1492,"."),t()()(),n(1493,"tr",15)(1494,"td",16)(1495,"div",24)(1496,"span",25),e(1497," triggerMode"),o(1498,"br"),t()()(),n(1499,"td",20)(1500,"code",40),e(1501,"'change' "),t(),n(1502,"code",41),e(1503," 'changeModel'"),t()(),n(1504,"td",23)(1505,"em")(1506,"strong"),e(1507,"(opcional)"),t()(),n(1508,"p"),e(1509,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1510,"code"),e(1511,"change"),t(),e(1512," ou "),n(1513,"code"),e(1514,"change-model"),t(),e(1515,"."),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var he=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(I(Y),I(Z))};static \u0275cmp=x({type:l,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Decimal",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-decimal-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-decimal-basic-view")(6,"sample-po-decimal-labs-view")(7,"sample-po-decimal-hourly-wage-view")(8,"sample-po-decimal-hourly-wage-reactive-form-view"),t()()()),r&2&&(c("p-actions",i.actions),m(2),c("p-active",i.activeTab==="doc"),m(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[oe,v,y,re,pe,ce,Ee,ge],encapsulation:2})}return l})();var We=[{path:"",component:he}],be=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=B({type:l});static \u0275inj=z({imports:[j.forChild(We),j]})}return l})();var mt=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=B({type:l});static \u0275inj=z({imports:[ae,be]})}return l})();export{mt as DocPoDecimalModule};
