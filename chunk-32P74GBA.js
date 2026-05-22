import{o as w,p as me}from"./chunk-WYOAC7KN.js";import{Hb as C,Ia as ae,Ib as y,Ja as q,S as ne,Sa as A,U as ie,Wa as le,Ya as re,_ as oe,a as z,bb as R,ub as pe,w as N}from"./chunk-XOCFD5XY.js";import{Ea as d,Fa as n,Ga as t,Ha as o,I as T,Jc as S,L as j,Mb as k,Mc as I,Nc as L,O as E,Oa as H,Oc as Z,P as b,Pa as g,Pc as X,Qc as V,Tc as J,Uc as Y,Va as G,Wa as U,Xa as Q,Yc as $,_a as K,bb as P,cb as e,cd as ee,eb as _,ed as te,gb as x,gd as W,ha as p,hb as h,ib as v,ma as O,oa as u,pa as D,rb as M}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var de=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-input-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","input","p-label","PO Input"]],template:function(r,i){r&1&&o(0,"po-input",0)},dependencies:[q],encapsulation:2})}return a})();var fe=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-input-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Basic"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-basic/sample-po-input-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-input name="input" p-label="PO Input"> </po-input>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-basic/sample-po-input-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-input-basic',
  templateUrl: './sample-po-input-basic.component.html',
  standalone: false
})
export class SamplePoInputBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-basic"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel),p(),d("ngClass",M(4,fe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,de],encapsulation:2})}return a})();var ue=(()=>{class a{helperText;input;errorPattern;event;help;icon;label;mask;maxlength;minlength;pattern;placeholder;properties;size;iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"fa fa-calculator",label:"fa fa-calculator"}];propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"maskFormatModel",label:"Formatted Model"},{value:"maskNoLengthValidation",label:"Mask No Length Validation"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"uppercase",label:"Upper Case"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText="",this.input=void 0,this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-input-labs"]],standalone:!1,decls:22,vars:44,consts:[["f","ngForm"],["name","input",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-icon","p-label","p-loading","p-mask","p-mask-format-model","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-required","p-required-field-error-message","p-readonly","p-upper-case","p-show-required","p-mask-no-length-validation","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","mask","p-clean","","p-help","Ex.: Zip code: '99999-999'; License plate: '@@@-9999'","p-label","Mask",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'","p-label","Pattern (Regex)",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","icon","p-clean","","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=H();n(0,"po-input",1),v("ngModelChange",function(l){return E(s),h(i.input,l)||(i.input=l),b(l)}),g("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),v("ngModelChange",function(l){return E(s),h(i.label,l)||(i.label=l),b(l)}),t(),n(9,"po-input",6),v("ngModelChange",function(l){return E(s),h(i.help,l)||(i.help=l),b(l)}),t(),n(10,"po-input",7),v("ngModelChange",function(l){return E(s),h(i.helperText,l)||(i.helperText=l),b(l)}),t(),n(11,"po-input",8),v("ngModelChange",function(l){return E(s),h(i.placeholder,l)||(i.placeholder=l),b(l)}),t(),n(12,"po-input",9),v("ngModelChange",function(l){return E(s),h(i.errorPattern,l)||(i.errorPattern=l),b(l)}),t(),n(13,"po-input",10),v("ngModelChange",function(l){return E(s),h(i.mask,l)||(i.mask=l),b(l)}),t(),n(14,"po-input",11),v("ngModelChange",function(l){return E(s),h(i.pattern,l)||(i.pattern=l),b(l)}),t(),n(15,"po-number",12),v("ngModelChange",function(l){return E(s),h(i.minlength,l)||(i.minlength=l),b(l)}),t(),n(16,"po-number",13),v("ngModelChange",function(l){return E(s),h(i.maxlength,l)||(i.maxlength=l),b(l)}),t(),n(17,"po-select",14),v("ngModelChange",function(l){return E(s),h(i.icon,l)||(i.icon=l),b(l)}),t(),n(18,"po-checkbox-group",15),v("ngModelChange",function(l){return E(s),h(i.properties,l)||(i.properties=l),b(l)}),t(),n(19,"po-radio-group",16),v("ngModelChange",function(l){return E(s),h(i.size,l)||(i.size=l),b(l)}),t(),n(20,"div",2)(21,"po-button",17),g("p-click",function(){return E(s),K(7).reset(),b(i.restore())}),t()()()}r&2&&(x("ngModel",i.input),d("p-helper",i.helperText)("p-clean",i.properties==null?null:i.properties.includes("clean"))("p-disabled",i.properties==null?null:i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-icon",i.icon)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-mask",i.mask)("p-mask-format-model",i.properties==null?null:i.properties.includes("maskFormatModel"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties==null?null:i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-required",i.properties==null?null:i.properties.includes("required"))("p-required-field-error-message",i.properties==null?null:i.properties.includes("requiredFieldErrorMessage"))("p-readonly",i.properties==null?null:i.properties.includes("readonly"))("p-upper-case",i.properties==null?null:i.properties.includes("uppercase"))("p-show-required",i.properties==null?null:i.properties.includes("showRequired"))("p-mask-no-length-validation",i.properties==null?null:i.properties.includes("maskNoLengthValidation"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),p(3),d("p-value",i.input),p(),d("p-value",i.event),p(4),x("ngModel",i.label),p(),x("ngModel",i.help),p(),x("ngModel",i.helperText),p(),x("ngModel",i.placeholder),p(),x("ngModel",i.errorPattern),p(),x("ngModel",i.mask),p(),x("ngModel",i.pattern),p(),x("ngModel",i.minlength),p(),x("ngModel",i.maxlength),p(),x("ngModel",i.icon),d("p-options",i.iconOptions),p(),x("ngModel",i.properties),d("p-options",i.propertiesOptions),p(),x("ngModel",i.size),d("p-options",i.sizeOptions))},dependencies:[V,I,L,X,Z,N,z,ne,ie,q,A,re,R],encapsulation:2})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),Ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-input-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input Labs"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-labs/sample-po-input-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-input
  name="input"
  [(ngModel)]="input"
  [p-helper]="helperText"
  [p-clean]="properties?.includes('clean')"
  [p-disabled]="properties?.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-mask]="mask"
  [p-mask-format-model]="properties?.includes('maskFormatModel')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties?.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-required]="properties?.includes('required')"
  [p-required-field-error-message]="properties?.includes('requiredFieldErrorMessage')"
  [p-readonly]="properties?.includes('readonly')"
  [p-upper-case]="properties?.includes('uppercase')"
  [p-show-required]="properties?.includes('showRequired')"
  [p-mask-no-length-validation]="properties?.includes('maskNoLengthValidation')"
  [p-size]="size"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-input>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="input"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="mask"
    [(ngModel)]="mask"
    p-clean
    p-help="Ex.: Zip code: '99999-999'; License plate: '@@@-9999'"
    p-label="Mask"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '^(2[0-3]|[01][0-9]):?([0-5][0-9])$'"
    p-label="Pattern (Regex)"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

  <po-select class="po-md-6" name="icon" [(ngModel)]="icon" p-clean p-label="Icon" [p-options]="iconOptions">
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); this.restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-labs/sample-po-input-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-labs',
  templateUrl: './sample-po-input-labs.component.html',
  standalone: false
})
export class SamplePoInputLabsComponent implements OnInit {
  helperText: string;
  input: string;
  errorPattern: string;
  event: string;
  help: string;
  icon: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' },
    { value: 'maskFormatModel', label: 'Formatted Model' },
    { value: 'maskNoLengthValidation', label: 'Mask No Length Validation' },
    { value: 'noAutocomplete', label: 'No Autocomplete' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' },
    { value: 'uppercase', label: 'Upper Case' },
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
    this.input = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-labs"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel),p(),d("ngClass",M(4,Pe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,ue],encapsulation:2})}return a})();var Me=["reactiveFormData"],be=(()=>{class a{fb=j($);reactiveFormModal;reactiveForm;modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};constructor(){this.createReactiveForm()}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",S.compose([S.required,S.minLength(5),S.maxLength(30)])],address:["",S.compose([S.required,S.minLength(5),S.maxLength(50)])],number:["",S.compose([S.required,S.min(1),S.max(99999)])],email:["",S.required],website:["",S.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-input-reactive-form"]],viewQuery:function(r,i){if(r&1&&G(Me,7),r&2){let s;U(s=Q())&&(i.reactiveFormModal=s.first)}},standalone:!1,decls:23,vars:8,consts:[["reactiveFormData",""],[3,"formGroup"],[1,"po-row"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-md-12"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-9"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-3"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"]],template:function(r,i){r&1&&(n(0,"form",1)(1,"div",2),o(2,"po-input",3),t(),n(3,"div",2),o(4,"po-input",4)(5,"po-number",5),t(),n(6,"div",2),o(7,"po-email",6)(8,"po-url",7),t(),n(9,"div",2)(10,"po-button",8),g("p-click",function(){return i.saveForm()}),t()()(),n(11,"po-modal",9,0)(13,"div",2),o(14,"po-info",10),t(),o(15,"po-divider"),n(16,"div",2),o(17,"po-info",11)(18,"po-info",12),t(),o(19,"po-divider"),n(20,"div",2),o(21,"po-info",13)(22,"po-info",14),t()()),r&2&&(d("formGroup",i.reactiveForm),p(10),d("p-disabled",!i.reactiveForm.valid),p(),d("p-primary-action",i.modalPrimaryAction),p(3),d("p-value",i.reactiveForm.controls.name.value),p(3),d("p-value",i.reactiveForm.controls.address.value),p(),d("p-value",i.reactiveForm.controls.number.value),p(3),d("p-value",i.reactiveForm.controls.email.value),p(),d("p-value",i.reactiveForm.controls.website.value))},dependencies:[V,I,L,Y,J,N,z,ae,q,A,le,R,oe],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-input-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Input - Reactive Form"),t(),n(4,"a",2),g("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<form [formGroup]="reactiveForm">
  <div class="po-row">
    <po-input class="po-md-12" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-lg-9" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address"> </po-input>

    <po-number class="po-lg-3" formControlName="number" p-label="Number" p-clean> </po-number>
  </div>

  <div class="po-row">
    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
  </div>
</form>

<po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
  <div class="po-row">
    <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

    <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

    <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-input-reactive-form/sample-po-input-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-input-reactive-form',
  templateUrl: './sample-po-input-reactive-form.component.html',
  standalone: false
})
export class SamplePoInputReactiveFormComponent {
  private fb = inject(UntypedFormBuilder);

  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  reactiveForm: UntypedFormGroup;

  public readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  constructor() {
    this.createReactiveForm();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-input-reactive-form"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),_(" ",i.sampleCodeButtonLabel),p(),d("ngClass",M(4,qe,i.hideSampleCodeTabs)))},dependencies:[k,w,C,y,be],encapsulation:2})}return a})();var ge=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-input-doc"]],standalone:!1,decls:1336,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoInputComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"code"),e(131,"--field-container-title-justify"),t()(),n(132,"td"),e(133,"Alinhamento horizontal do t\xEDtulo ("),n(134,"code"),e(135,"justify-content"),t(),e(136,")"),t(),n(137,"td")(138,"code"),e(139,"space-between"),t()()(),n(140,"tr")(141,"td")(142,"code"),e(143,"--field-container-title-flex"),t()(),n(144,"td"),e(145,"Flex do t\xEDtulo ("),n(146,"code"),e(147,"flex"),t(),e(148,")"),t(),n(149,"td")(150,"code"),e(151,"1 auto"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Hover"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-hover"),t()(),n(162,"td"),e(163,"Cor principal no estado hover"),t(),n(164,"td")(165,"code"),e(166,"var(--color-brand-01-dark)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--background-hover"),t()(),n(171,"td"),e(172,"Cor de background no estado hover"),t(),n(173,"td")(174,"code"),e(175,"var(--color-brand-01-lightest)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Focused"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-focused"),t()(),n(186,"td"),e(187,"Cor principal no estado de focus"),t(),n(188,"td")(189,"code"),e(190,"var(--color-action-default)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--outline-color-focused"),t()(),n(195,"td"),e(196,"Cor do outline do estado de focus"),t(),n(197,"td")(198,"code"),e(199,"var(--color-action-focus)"),t()()(),n(200,"tr")(201,"td")(202,"strong"),e(203,"Disabled"),t()(),o(204,"td")(205,"td"),t(),n(206,"tr")(207,"td")(208,"code"),e(209,"--color-disabled"),t()(),n(210,"td"),e(211,"Cor principal no estado disabled"),t(),n(212,"td")(213,"code"),e(214,"var(--color-neutral-light-30)"),t()()(),n(215,"tr")(216,"td")(217,"code"),e(218,"--background-disabled"),t()(),n(219,"td"),e(220,"Cor de background no estado disabled"),t(),n(221,"td")(222,"code"),e(223,"var(--color-neutral-light-20)"),t()()(),n(224,"tr")(225,"td")(226,"code"),e(227,"--text-color-disabled"),t()(),n(228,"td"),e(229,"Cor do texto no estado disabled"),t(),n(230,"td")(231,"code"),e(232,"var(--color-neutral-dark-70)"),t()()()()(),o(233,"br"),t(),n(234,"div",8)(235,"h4",9),e(236,"Seletor"),t(),n(237,"pre",10),e(238,`<po-input
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
    p-maxlength="number"
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
    p-upper-case="boolean" >
</po-input>
`),t()(),n(239,"h4",11),e(240,"Propriedades"),t(),n(241,"table",12)(242,"tr",13)(243,"th",14),e(244,"Nome"),t(),n(245,"th",14),e(246,"Tipo"),t(),n(247,"th",14),e(248,"Padr\xE3o"),t(),n(249,"th",14),e(250,"Descri\xE7\xE3o"),t()(),n(251,"tr",15)(252,"td",16)(253,"div",17)(254,"span",18),e(255," (p-additional-help)"),o(256,"br"),t()(),n(257,"div",19),e(258,"Deprecated"),t()(),n(259,"td",20)(260,"code",21),e(261,"EventEmitter"),t()(),n(262,"td",22),e(263,"-"),t(),n(264,"td",23)(265,"em")(266,"strong"),e(267,"(opcional)"),t()(),n(268,"p"),e(269,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(270,"blockquote")(271,"p"),e(272,"Essa propriedade est\xE1 "),n(273,"strong"),e(274,"depreciada"),t(),e(275," e ser\xE1 removida na vers\xE3o "),n(276,"code"),e(277,"23.x.x"),t(),e(278,". Recomendamos utilizar a propriedade "),n(279,"code"),e(280,"p-helper"),t(),e(281," que oferece mais recursos e flexibilidade."),t()()()(),n(282,"tr",15)(283,"td",16)(284,"div",24)(285,"span",25),e(286," p-additional-help-tooltip"),o(287,"br"),t()(),n(288,"div",19),e(289,"Deprecated"),t()(),n(290,"td",20)(291,"code",26),e(292,"string"),t()(),n(293,"td",22),e(294,"-"),t(),n(295,"td",23)(296,"em")(297,"strong"),e(298,"(opcional)"),t()(),n(299,"p"),e(300,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(301,"code"),e(302,"po-helper"),t(),e(303,`.
`),n(304,"strong"),e(305,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(306,"blockquote")(307,"p"),e(308,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(309,"blockquote")(310,"p"),e(311,"Essa propriedade est\xE1 "),n(312,"strong"),e(313,"depreciada"),t(),e(314," e ser\xE1 removida na vers\xE3o "),n(315,"code"),e(316,"23.x.x"),t(),e(317,". Recomendamos utilizar a propriedade "),n(318,"code"),e(319,"p-helper"),t(),e(320," que oferece mais recursos e flexibilidade."),t()()()(),n(321,"tr",15)(322,"td",16)(323,"div",24)(324,"span",25),e(325," p-append-in-body"),o(326,"br"),t()()(),n(327,"td",20)(328,"code",27),e(329,"boolean"),t()(),n(330,"td",22)(331,"p")(332,"code"),e(333,"false"),t()()(),n(334,"td",23)(335,"em")(336,"strong"),e(337,"(opcional)"),t()(),n(338,"p"),e(339,"Define que o popover ("),n(340,"code"),e(341,"p-helper"),t(),e(342," e/ou "),n(343,"code"),e(344,"p-error-limit"),t(),e(345,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(346,"blockquote")(347,"p"),e(348,"Quando utilizado com "),n(349,"code"),e(350,"p-helper"),t(),e(351,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(352,"tr",15)(353,"td",16)(354,"div",24)(355,"span",25),e(356," p-auto-focus"),o(357,"br"),t()()(),n(358,"td",20)(359,"code",27),e(360,"boolean"),t()(),n(361,"td",22)(362,"p")(363,"code"),e(364,"false"),t()()(),n(365,"td",23)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),n(369,"p"),e(370,"Aplica foco no elemento ao ser iniciado."),t(),n(371,"blockquote")(372,"p"),e(373,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(374,"tr",15)(375,"td",16)(376,"div",17)(377,"span",18),e(378," (p-blur)"),o(379,"br"),t()()(),n(380,"td",20)(381,"code",21),e(382,"EventEmitter"),t()(),n(383,"td",22),e(384,"-"),t(),n(385,"td",23)(386,"em")(387,"strong"),e(388,"(opcional)"),t()(),n(389,"p"),e(390,"Evento disparado ao sair do campo."),t()()(),n(391,"tr",15)(392,"td",16)(393,"div",17)(394,"span",18),e(395," (p-change)"),o(396,"br"),t()()(),n(397,"td",20)(398,"code",21),e(399,"EventEmitter"),t()(),n(400,"td",22),e(401,"-"),t(),n(402,"td",23)(403,"em")(404,"strong"),e(405,"(opcional)"),t()(),n(406,"p"),e(407,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(408,"tr",15)(409,"td",16)(410,"div",17)(411,"span",18),e(412," (p-change-model)"),o(413,"br"),t()()(),n(414,"td",20)(415,"code",21),e(416,"EventEmitter"),t()(),n(417,"td",22),e(418,"-"),t(),n(419,"td",23)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),n(423,"p"),e(424,"Evento disparado ao alterar valor do model."),t()()(),n(425,"tr",15)(426,"td",16)(427,"div",24)(428,"span",25),e(429,"p-clean"),o(430,"br"),t()()(),n(431,"td",20)(432,"code",27),e(433,"boolean"),t()(),n(434,"td",22),e(435,"-"),t(),n(436,"td",23)(437,"em")(438,"strong"),e(439,"(opcional)"),t()(),n(440,"p"),e(441,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(442,"tr",15)(443,"td",16)(444,"div",24)(445,"span",25),e(446," p-compact-label"),o(447,"br"),t()()(),n(448,"td",20)(449,"code",27),e(450,"boolean"),t()(),n(451,"td",22)(452,"p")(453,"code"),e(454,"false"),t()()(),n(455,"td",23)(456,"em")(457,"strong"),e(458,"(opcional)"),t()(),n(459,"p"),e(460,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),n(461,"p"),e(462,"Quando habilitado ("),n(463,"code"),e(464,"true"),t(),e(465,"), o modo compacto afeta o conjunto composto por:"),t(),n(466,"ul")(467,"li")(468,"code"),e(469,"po-label"),t()(),n(470,"li")(471,"code"),e(472,"p-requirement (showRequired)"),t()(),n(473,"li")(474,"code"),e(475,"po-helper"),t()()(),n(476,"p"),e(477,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),n(478,"p"),e(479,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),n(480,"ul")(481,"li")(482,"code"),e(483,"--field-container-title-justify"),t()(),n(484,"li")(485,"code"),e(486,"--field-container-title-flex"),t()()(),n(487,"p"),e(488,"Exemplo:"),t(),n(489,"pre")(490,"code"),e(491,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),n(492,"p"),e(493,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),n(494,"tr",15)(495,"td",16)(496,"div",24)(497,"span",25),e(498,"p-disabled"),o(499,"br"),t()()(),n(500,"td",20)(501,"code",27),e(502,"boolean"),t()(),n(503,"td",22)(504,"p")(505,"code"),e(506,"false"),t()()(),n(507,"td",23)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),n(511,"p"),e(512,"Se verdadeiro, desabilita o campo."),t()()(),n(513,"tr",15)(514,"td",16)(515,"div",24)(516,"span",25),e(517," p-emit-all-changes"),o(518,"br"),t()()(),n(519,"td",20)(520,"code",27),e(521,"boolean"),t()(),n(522,"td",22)(523,"p")(524,"code"),e(525,"false"),t()()(),n(526,"td",23)(527,"em")(528,"strong"),e(529,"(opcional)"),t()(),n(530,"p"),e(531,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(532,"tr",15)(533,"td",16)(534,"div",17)(535,"span",18),e(536," (p-enter)"),o(537,"br"),t()()(),n(538,"td",20)(539,"code",21),e(540,"EventEmitter"),t()(),n(541,"td",22),e(542,"-"),t(),n(543,"td",23)(544,"em")(545,"strong"),e(546,"(opcional)"),t()(),n(547,"p"),e(548,"Evento disparado ao entrar do campo."),t()()(),n(549,"tr",15)(550,"td",16)(551,"div",24)(552,"span",25),e(553," p-error-async-properties"),o(554,"br"),t()()(),n(555,"td",20)(556,"code",28),e(557,"ErrorAsyncProperties"),t()(),n(558,"td",22),e(559,"-"),t(),n(560,"td",23)(561,"em")(562,"strong"),e(563,"(opcional)"),t()(),n(564,"p"),e(565,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(566,"code"),e(567,"Reactive Forms"),t(),e(568,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(569,"code"),e(570,"asyncValidators"),t(),e(571,"."),t()()(),n(572,"tr",15)(573,"td",16)(574,"div",24)(575,"span",25),e(576," p-error-limit"),o(577,"br"),t()()(),n(578,"td",20)(579,"code",27),e(580,"boolean"),t()(),n(581,"td",22)(582,"p")(583,"code"),e(584,"false"),t()()(),n(585,"td",23)(586,"em")(587,"strong"),e(588,"(opcional)"),t()(),n(589,"p"),e(590,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(591,"blockquote")(592,"p"),e(593,"Caso essa propriedade seja definida como "),n(594,"code"),e(595,"true"),t(),e(596,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(597,"tr",15)(598,"td",16)(599,"div",24)(600,"span",25),e(601," p-error-pattern"),o(602,"br"),t()()(),n(603,"td",20)(604,"code",26),e(605,"string"),t()(),n(606,"td",22),e(607,"-"),t(),n(608,"td",23)(609,"em")(610,"strong"),e(611,"(opcional)"),t()(),n(612,"p"),e(613,"Mensagem que ser\xE1 apresentada quando o "),n(614,"code"),e(615,"pattern"),t(),e(616," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(617,"blockquote")(618,"p"),e(619,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(620,"code"),e(621,"p-required-field-error-message"),t(),e(622," em conjunto."),t()()()(),n(623,"tr",15)(624,"td",16)(625,"div",24)(626,"span",25),e(627," p-help"),o(628,"br"),t()()(),n(629,"td",20)(630,"code",26),e(631,"string"),t()(),n(632,"td",22),e(633,"-"),t(),n(634,"td",23)(635,"em")(636,"strong"),e(637,"(opcional)"),t()(),n(638,"p"),e(639,"Texto de apoio do campo."),t()()(),n(640,"tr",15)(641,"td",16)(642,"div",24)(643,"span",25),e(644," p-icon"),o(645,"br"),t()()(),n(646,"td",20)(647,"code",26),e(648,"string "),t(),n(649,"code",29),e(650," TemplateRef<void>"),t()(),n(651,"td",22),e(652,"-"),t(),n(653,"td",23)(654,"em")(655,"strong"),e(656,"(opcional)"),t()(),n(657,"p"),e(658,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(659,"p"),e(660,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(661,"a",30),e(662,"Biblioteca de \xEDcones"),t(),e(663,". conforme exemplo abaixo:"),t(),n(664,"pre")(665,"code"),e(666,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(667,"p"),e(668,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(669,"em"),e(670,"Font Awesome"),t(),e(671,", da seguinte forma:"),t(),n(672,"pre")(673,"code"),e(674,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(675,"p"),e(676,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(677,"code"),e(678,"TemplateRef"),t(),e(679,", conforme exemplo abaixo:"),t(),n(680,"pre")(681,"code"),e(682,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(683,"blockquote")(684,"p"),e(685,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(686,"code"),e(687,"font-size: inherit"),t(),e(688," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(689,"tr",15)(690,"td",16)(691,"div",17)(692,"span",18),e(693," (p-keydown)"),o(694,"br"),t()()(),n(695,"td",20)(696,"code",21),e(697,"EventEmitter"),t()(),n(698,"td",22),e(699,"-"),t(),n(700,"td",23)(701,"em")(702,"strong"),e(703,"(opcional)"),t()(),n(704,"p"),e(705,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(706,"code"),e(707,"KeyboardEvent"),t(),e(708," com informa\xE7\xF5es sobre a tecla."),t()()(),n(709,"tr",15)(710,"td",16)(711,"div",24)(712,"span",25),e(713," p-label"),o(714,"br"),t()()(),n(715,"td",20)(716,"code",26),e(717,"string"),t()(),n(718,"td",22),e(719,"-"),t(),n(720,"td",23)(721,"em")(722,"strong"),e(723,"(opcional)"),t()(),n(724,"p"),e(725,"R\xF3tulo do campo."),t()()(),n(726,"tr",15)(727,"td",16)(728,"div",24)(729,"span",25),e(730," p-label-text-wrap"),o(731,"br"),t()()(),n(732,"td",20)(733,"code",27),e(734,"boolean"),t()(),n(735,"td",22)(736,"p")(737,"code"),e(738,"false"),t()()(),n(739,"td",23)(740,"em")(741,"strong"),e(742,"(opcional)"),t()(),n(743,"p"),e(744,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(745,"code"),e(746,"p-label"),t(),e(747,". Quando "),n(748,"code"),e(749,"p-label-text-wrap"),t(),e(750,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(751,"tr",15)(752,"td",16)(753,"div",24)(754,"span",25),e(755," p-loading"),o(756,"br"),t()()(),n(757,"td",20)(758,"code",27),e(759,"boolean"),t()(),n(760,"td",22)(761,"p")(762,"code"),e(763,"false"),t()()(),n(764,"td",23)(765,"em")(766,"strong"),e(767,"(opcional)"),t()(),n(768,"p"),e(769,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(770,"tr",15)(771,"td",16)(772,"div",24)(773,"span",25),e(774,"p-mask"),o(775,"br"),t()()(),n(776,"td",20)(777,"code",26),e(778,"string"),t()(),n(779,"td",22),e(780,"-"),t(),n(781,"td",23)(782,"em")(783,"strong"),e(784,"(opcional)"),t()(),n(785,"p"),e(786,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(787,"tr",15)(788,"td",16)(789,"div",24)(790,"span",25),e(791,"p-mask-format-model"),o(792,"br"),t()()(),n(793,"td",20)(794,"code",27),e(795,"boolean"),t()(),n(796,"td",22)(797,"p")(798,"code"),e(799,"false"),t()()(),n(800,"td",23)(801,"em")(802,"strong"),e(803,"(opcional)"),t()(),n(804,"p"),e(805,"Indica se o "),n(806,"code"),e(807,"model"),t(),e(808," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(809,"tr",15)(810,"td",16)(811,"div",24)(812,"span",25),e(813," p-mask-no-length-validation"),o(814,"br"),t()()(),n(815,"td",20)(816,"code",27),e(817,"boolean"),t()(),n(818,"td",22)(819,"p")(820,"code"),e(821,"false"),t()()(),n(822,"td",23)(823,"p"),e(824,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(825,"code"),e(826,"minLength"),t(),e(827,") e m\xE1ximo ("),n(828,"code"),e(829,"maxLength"),t(),e(830,") quando h\xE1 uma m\xE1scara ("),n(831,"code"),e(832,"p-mask"),t(),e(833,") definida."),t(),n(834,"ul")(835,"li"),e(836,"Quando "),n(837,"code"),e(838,"true"),t(),e(839,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(840,"li"),e(841,"Quando "),n(842,"code"),e(843,"false"),t(),e(844,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(845,"blockquote")(846,"p"),e(847,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(848,"code"),e(849,"p-mask-format-model"),t(),e(850,"."),t()(),n(851,"p"),e(852,"Exemplo:"),t(),n(853,"pre")(854,"code"),e(855,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(856,"ul")(857,"li"),e(858,"Entrada: "),n(859,"code"),e(860,"123-456"),t(),e(861," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(862,"code"),e(863,"-"),t(),e(864,"."),t()()()(),n(865,"tr",15)(866,"td",16)(867,"div",24)(868,"span",25),e(869," p-maxlength"),o(870,"br"),t()()(),n(871,"td",20)(872,"code",31),e(873,"number"),t()(),n(874,"td",22),e(875,"-"),t(),n(876,"td",23)(877,"em")(878,"strong"),e(879,"(opcional)"),t()(),n(880,"p"),e(881,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(882,"tr",15)(883,"td",16)(884,"div",24)(885,"span",25),e(886," p-minlength"),o(887,"br"),t()()(),n(888,"td",20)(889,"code",31),e(890,"number"),t()(),n(891,"td",22),e(892,"-"),t(),n(893,"td",23)(894,"em")(895,"strong"),e(896,"(opcional)"),t()(),n(897,"p"),e(898,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(899,"tr",15)(900,"td",16)(901,"div",24)(902,"span",25),e(903," name"),o(904,"br"),t()()(),n(905,"td",20)(906,"code",26),e(907,"string"),t()(),n(908,"td",22),e(909,"-"),t(),n(910,"td",23)(911,"p"),e(912,"Nome e identificador do campo."),t()()(),n(913,"tr",15)(914,"td",16)(915,"div",24)(916,"span",25),e(917," p-no-autocomplete"),o(918,"br"),t()()(),n(919,"td",20)(920,"code",27),e(921,"boolean"),t()(),n(922,"td",22)(923,"p")(924,"code"),e(925,"false"),t()()(),n(926,"td",23)(927,"em")(928,"strong"),e(929,"(opcional)"),t()(),n(930,"p"),e(931,"Define a propriedade nativa "),n(932,"code"),e(933,"autocomplete"),t(),e(934," do campo como "),n(935,"code"),e(936,"off"),t(),e(937,"."),t(),n(938,"blockquote")(939,"p"),e(940,"No componente "),n(941,"code"),e(942,"po-password"),t(),e(943," ser\xE1 definido como "),n(944,"code"),e(945,"new-password"),t(),e(946,"."),t()(),n(947,"p"),e(948,"Nos componentes "),n(949,"code"),e(950,"po-password"),t(),e(951," e "),n(952,"code"),e(953,"po-login"),t(),e(954," o valor padr\xE3o ser\xE1 "),n(955,"code"),e(956,"true"),t(),e(957,"."),t()()(),n(958,"tr",15)(959,"td",16)(960,"div",24)(961,"span",25),e(962," p-optional"),o(963,"br"),t()()(),n(964,"td",20)(965,"code",27),e(966,"boolean"),t()(),n(967,"td",22)(968,"p")(969,"code"),e(970,"false"),t()()(),n(971,"td",23)(972,"em")(973,"strong"),e(974,"(opcional)"),t()(),n(975,"p"),e(976,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(977,"blockquote")(978,"p"),e(979,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(980,"ul")(981,"li"),e(982,"O campo conter "),n(983,"code"),e(984,"p-required"),t(),e(985,";"),t(),n(986,"li"),e(987,"N\xE3o possuir "),n(988,"code"),e(989,"p-help"),t(),e(990," e/ou "),n(991,"code"),e(992,"p-label"),t(),e(993,"."),t()()()(),n(994,"tr",15)(995,"td",16)(996,"div",24)(997,"span",25),e(998,"p-pattern"),o(999,"br"),t()()(),n(1e3,"td",20)(1001,"code",26),e(1002,"string"),t()(),n(1003,"td",22),e(1004,"-"),t(),n(1005,"td",23)(1006,"em")(1007,"strong"),e(1008,"(opcional)"),t()(),n(1009,"p"),e(1010,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1011,"code"),e(1012,"(p-mask)"),t(),e(1013,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1014,"tr",15)(1015,"td",16)(1016,"div",24)(1017,"span",25),e(1018," p-placeholder"),o(1019,"br"),t()()(),n(1020,"td",20)(1021,"code",26),e(1022,"string"),t()(),n(1023,"td",22)(1024,"p"),e(1025,"''"),t()(),n(1026,"td",23)(1027,"em")(1028,"strong"),e(1029,"(opcional)"),t()(),n(1030,"p"),e(1031,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1032,"tr",15)(1033,"td",16)(1034,"div",24)(1035,"span",25),e(1036," p-helper"),o(1037,"br"),t()()(),n(1038,"td",20)(1039,"code",32),e(1040,"PoHelperOptions "),t(),n(1041,"code",26),e(1042," string"),t()(),n(1043,"td",22),e(1044,"-"),t(),n(1045,"td",23)(1046,"em")(1047,"strong"),e(1048,"(opcional)"),t()(),n(1049,"p"),e(1050,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1051,"code"),e(1052,"p-label"),t(),e(1053," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1054,"code"),e(1055,"p-label"),t(),e(1056,"."),t(),n(1057,"blockquote")(1058,"p"),e(1059,"Para mais informa\xE7\xF5es acesse: "),n(1060,"a",33),e(1061,"https://po-ui.io/documentation/po-helper"),t(),e(1062,"."),t()(),n(1063,"blockquote")(1064,"p"),e(1065,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1066,"code"),e(1067,"p-additional-help-tooltip"),t(),e(1068," e "),n(1069,"code"),e(1070,"p-additional-help"),t(),e(1071,") ser\xE1 ignorado."),t()()()(),n(1072,"tr",15)(1073,"td",16)(1074,"div",24)(1075,"span",25),e(1076,"p-readonly"),o(1077,"br"),t()()(),n(1078,"td",20)(1079,"code",27),e(1080,"boolean"),t()(),n(1081,"td",22),e(1082,"-"),t(),n(1083,"td",23)(1084,"em")(1085,"strong"),e(1086,"(opcional)"),t()(),n(1087,"p"),e(1088,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1089,"tr",15)(1090,"td",16)(1091,"div",24)(1092,"span",25),e(1093,"p-required"),o(1094,"br"),t()()(),n(1095,"td",20)(1096,"code",27),e(1097,"boolean"),t()(),n(1098,"td",22)(1099,"p")(1100,"code"),e(1101,"false"),t()()(),n(1102,"td",23)(1103,"em")(1104,"strong"),e(1105,"(opcional)"),t()(),n(1106,"p"),e(1107,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1108,"blockquote")(1109,"p"),e(1110,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1111,"code"),e(1112,"(p-disabled)"),t(),e(1113,"."),t()()()(),n(1114,"tr",15)(1115,"td",16)(1116,"div",24)(1117,"span",25),e(1118," p-required-field-error-message"),o(1119,"br"),t()()(),n(1120,"td",20)(1121,"code",27),e(1122,"boolean"),t()(),n(1123,"td",22)(1124,"p")(1125,"code"),e(1126,"false"),t()()(),n(1127,"td",23)(1128,"em")(1129,"strong"),e(1130,"(opcional)"),t()(),n(1131,"p"),e(1132,"Exibe a mensagem setada na propriedade "),n(1133,"code"),e(1134,"p-error-pattern"),t(),e(1135," se o campo estiver vazio e for requerido."),t(),n(1136,"blockquote")(1137,"p"),e(1138,"Necess\xE1rio que a propriedade "),n(1139,"code"),e(1140,"p-required"),t(),e(1141," esteja habilitada."),t()()()(),n(1142,"tr",15)(1143,"td",16)(1144,"div",24)(1145,"span",25),e(1146," p-show-required"),o(1147,"br"),t()()(),n(1148,"td",20)(1149,"code",27),e(1150,"boolean"),t()(),n(1151,"td",22),e(1152,"-"),t(),n(1153,"td",23)(1154,"p"),e(1155,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1156,"blockquote")(1157,"p"),e(1158,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1159,"ul")(1160,"li"),e(1161,"N\xE3o possuir "),n(1162,"code"),e(1163,"p-help"),t(),e(1164," e/ou "),n(1165,"code"),e(1166,"p-label"),t(),e(1167,"."),t()()()(),n(1168,"tr",15)(1169,"td",16)(1170,"div",24)(1171,"span",25),e(1172," p-size"),o(1173,"br"),t()()(),n(1174,"td",20)(1175,"code",26),e(1176,"string"),t()(),n(1177,"td",22)(1178,"p")(1179,"code"),e(1180,"medium"),t()()(),n(1181,"td",23)(1182,"em")(1183,"strong"),e(1184,"(opcional)"),t()(),n(1185,"p"),e(1186,"Define o tamanho do componente:"),t(),n(1187,"ul")(1188,"li")(1189,"code"),e(1190,"small"),t(),e(1191,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1192,"li")(1193,"code"),e(1194,"medium"),t(),e(1195,": altura do input como 44px."),t()(),n(1196,"blockquote")(1197,"p"),e(1198,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1199,"code"),e(1200,"medium"),t(),e(1201,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1202,"a",34),e(1203,"po-theme"),t(),e(1204,"."),t()()()(),n(1205,"tr",15)(1206,"td",16)(1207,"div",24)(1208,"span",25),e(1209," p-upper-case"),o(1210,"br"),t()()(),n(1211,"td",20)(1212,"code",27),e(1213,"boolean"),t()(),n(1214,"td",22),e(1215,"-"),t(),n(1216,"td",23)(1217,"p"),e(1218,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1219,"h3",11),e(1220,"M\xE9todos"),t(),n(1221,"table",35)(1222,"tr",15)(1223,"th",36)(1224,"div",24)(1225,"h4")(1226,"span",25),e(1227," showAdditionalHelp "),t()()()()(),n(1228,"tr",23)(1229,"td",23)(1230,"p"),e(1231,"M\xE9todo que exibe "),n(1232,"code"),e(1233,"p-helper"),t(),e(1234," ou executa a a\xE7\xE3o definida em "),n(1235,"code"),e(1236,"p-helper{eventOnClick}"),t(),e(1237," ou em "),n(1238,"code"),e(1239,"p-additionalHelp"),t(),e(1240,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1241,"code"),e(1242,"p-keydown"),t(),e(1243,"."),t(),n(1244,"blockquote")(1245,"p"),e(1246,"Exibe ou oculta o conte\xFAdo do componente "),n(1247,"code"),e(1248,"po-helper"),t(),e(1249," quando o componente estiver com foco."),t()(),n(1250,"pre")(1251,"code"),e(1252,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1253,"pre")(1254,"code"),e(1255,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1256,"br"),n(1257,"table",35)(1258,"tr",15)(1259,"th",36)(1260,"div",24)(1261,"h4")(1262,"span",25),e(1263," focus "),t()()()()(),n(1264,"tr",23)(1265,"td",23)(1266,"p"),e(1267,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1268,"p"),e(1269,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1270,"pre")(1271,"code"),e(1272,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1273,"br"),n(1274,"h3"),e(1275,"Interfaces"),t(),n(1276,"h4",37)(1277,"code",5),e(1278,"ErrorAsyncProperties"),t()(),n(1279,"div",2)(1280,"p"),e(1281,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1282,"h4",11),e(1283,"Propriedades"),t(),n(1284,"table",12)(1285,"tr",13)(1286,"th",14),e(1287,"Nome"),t(),n(1288,"th",14),e(1289,"Tipo"),t(),n(1290,"th",14),e(1291,"Descri\xE7\xE3o"),t()(),n(1292,"tr",15)(1293,"td",16)(1294,"div",24)(1295,"span",25),e(1296," errorAsync"),o(1297,"br"),t()()(),n(1298,"td",20)(1299,"code",38),e(1300,"(value) => Observable<boolean>"),t()(),n(1301,"td",23)(1302,"p"),e(1303,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1304,"code"),e(1305,"change"),t(),e(1306," ou "),n(1307,"code"),e(1308,"change-model"),t(),e(1309,", dependendo do valor da propriedade "),n(1310,"code"),e(1311,"triggerMode"),t(),e(1312,"."),t()()(),n(1313,"tr",15)(1314,"td",16)(1315,"div",24)(1316,"span",25),e(1317," triggerMode"),o(1318,"br"),t()()(),n(1319,"td",20)(1320,"code",39),e(1321,"'change' "),t(),n(1322,"code",40),e(1323," 'changeModel'"),t()(),n(1324,"td",23)(1325,"em")(1326,"strong"),e(1327,"(opcional)"),t()(),n(1328,"p"),e(1329,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1330,"code"),e(1331,"change"),t(),e(1332," ou "),n(1333,"code"),e(1334,"change-model"),t(),e(1335,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var xe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(O(ee),O(te))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Input",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),g("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-input-doc"),t(),n(4,"po-tab",3),g("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-input-basic-view")(6,"sample-po-input-labs-view")(7,"sample-po-input-reactive-form-view"),t()()()),r&2&&(d("p-actions",i.actions),p(2),d("p-active",i.activeTab==="doc"),p(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[pe,C,y,ce,Ee,Se,ge],encapsulation:2})}return a})();var De=[{path:"",component:xe}],he=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[W.forChild(De),W]})}return a})();var lt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[me,he]})}return a})();export{lt as DocPoInputModule};
