import{o as w,p as ee}from"./chunk-WYOAC7KN.js";import{Hb as v,Ia as k,Ib as C,Ja as J,S as U,Sa as Y,U as K,a as Q,bb as Z,fa as X,ub as $,w as V}from"./chunk-XOCFD5XY.js";import{Ea as s,Fa as n,Ga as t,Ha as o,I as q,L as I,Mb as M,Mc as F,Nc as z,O as x,Oa as L,Oc as N,P as S,Pa as E,Pc as O,Qc as A,_a as j,bb as y,cb as e,cd as H,eb as P,ed as G,gb as b,gd as W,ha as m,hb as g,ib as h,ma as B,oa as u,pa as D,rb as _}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var te=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-email-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","email","p-label","PO Email"]],template:function(l,i){l&1&&o(0,"po-email",0)},dependencies:[k],encapsulation:2})}return a})();var ce=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-email-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Email Basic"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-email-basic/sample-po-email-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-email name="email" p-label="PO Email"> </po-email>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-email-basic/sample-po-email-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-email-basic',
  templateUrl: './sample-po-email-basic.component.html',
  standalone: false
})
export class SamplePoEmailBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-email-basic"),t(),o(23,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel),m(),s("ngClass",_(4,ce,i.hideSampleCodeTabs)))},dependencies:[M,w,v,C,te],encapsulation:2})}return a})();var oe=(()=>{class a{helperText;email;errorPattern;event;help;label;maxlength;minlength;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}restore(){this.helperText="",this.properties=[],this.label=void 0,this.help=void 0,this.errorPattern="",this.placeholder="",this.minlength=void 0,this.maxlength=void 0,this.email="",this.event="",this.size="medium"}changeEvent(d){this.event=d}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-email-labs"]],standalone:!1,decls:19,vars:34,consts:[["f","ngForm"],["name","email",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-label-text-wrap","p-compact-label","p-error-limit"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,i){if(l&1){let p=L();n(0,"po-email",1),h("ngModelChange",function(r){return x(p),g(i.email,r)||(i.email=r),S(r)}),E("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(r){return x(p),g(i.label,r)||(i.label=r),S(r)}),t(),n(9,"po-input",6),h("ngModelChange",function(r){return x(p),g(i.help,r)||(i.help=r),S(r)}),t(),n(10,"po-input",7),h("ngModelChange",function(r){return x(p),g(i.helperText,r)||(i.helperText=r),S(r)}),t(),n(11,"po-input",8),h("ngModelChange",function(r){return x(p),g(i.placeholder,r)||(i.placeholder=r),S(r)}),t(),n(12,"po-input",9),h("ngModelChange",function(r){return x(p),g(i.errorPattern,r)||(i.errorPattern=r),S(r)}),t(),n(13,"po-number",10),h("ngModelChange",function(r){return x(p),g(i.minlength,r)||(i.minlength=r),S(r)}),t(),n(14,"po-number",11),h("ngModelChange",function(r){return x(p),g(i.maxlength,r)||(i.maxlength=r),S(r)}),t(),n(15,"po-checkbox-group",12),h("ngModelChange",function(r){return x(p),g(i.properties,r)||(i.properties=r),S(r)}),t(),n(16,"po-radio-group",13),h("ngModelChange",function(r){return x(p),g(i.size,r)||(i.size=r),S(r)}),t(),n(17,"div",2)(18,"po-button",14),E("p-click",function(){return i.restore()}),t()()()}l&2&&(b("ngModel",i.email),s("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit")),m(3),s("p-value",i.email),m(),s("p-value",i.event),m(4),b("ngModel",i.label),m(),b("ngModel",i.help),m(),b("ngModel",i.helperText),m(),b("ngModel",i.placeholder),m(),b("ngModel",i.errorPattern),m(),b("ngModel",i.minlength),m(),b("ngModel",i.maxlength),m(),b("ngModel",i.properties),s("p-options",i.propertiesOptions),m(),b("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[A,F,z,O,N,V,Q,U,K,k,J,Y,Z],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-email-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Email Labs"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-email-labs/sample-po-email-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-email
  name="email"
  [(ngModel)]="email"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  (p-blur)="changeEvent('p-blur')"
  (p-change)="changeEvent('p-change')"
  (p-change-model)="changeEvent('p-change-model')"
  (p-enter)="changeEvent('p-enter')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
>
</po-email>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="email"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-clean p-label="Placeholder"> </po-input>

  <po-input class="po-md-6" name="errorPattern" [(ngModel)]="errorPattern" p-clean p-label="Error Pattern"> </po-input>

  <po-number class="po-md-6 po-lg-3" name="minlength" [(ngModel)]="minlength" p-clean p-label="Min Length"> </po-number>

  <po-number class="po-md-6 po-lg-3" name="maxlength" [(ngModel)]="maxlength" p-clean p-label="Max Length"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-email-labs/sample-po-email-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-email-labs',
  templateUrl: './sample-po-email-labs.component.html',
  standalone: false
})
export class SamplePoEmailLabsComponent implements OnInit {
  helperText: string;
  email: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  size: string;

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
    { value: 'requiredFieldErrorMessage', label: 'Required Field Error Message' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.helperText = '';
    this.properties = [];

    this.label = undefined;
    this.help = undefined;
    this.errorPattern = '';
    this.placeholder = '';

    this.minlength = undefined;
    this.maxlength = undefined;

    this.email = '';
    this.event = '';

    this.size = 'medium';
  }

  changeEvent(event: string) {
    this.event = event;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-email-labs"),t(),o(23,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel),m(),s("ngClass",_(4,Se,i.hideSampleCodeTabs)))},dependencies:[M,w,v,C,oe],encapsulation:2})}return a})();var le=(()=>{class a{poAlert=I(X);email="";openDialog(){this.poAlert.alert({title:"Sent with success!",message:`Ready Mr(s). ${this.getNameEmail()}, now you will get all the news from PO!`})}getNameEmail(){let d=this.email.indexOf("@");return this.email.substr(0,d).toLocaleUpperCase()}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-email-newsletter"]],standalone:!1,decls:8,vars:2,consts:[["f","ngForm"],[1,"po-lg-12","po-text-center","po-font-subtitle"],[1,"po-row"],["name","email","p-clean","","p-error-pattern","Invalid e-mail","p-label","Email","p-placeholder","Enter your e-mail","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"]],template:function(l,i){if(l&1){let p=L();n(0,"div",1),e(1,"Enter your email to receive PO news, be sure to participate."),t(),n(2,"form",null,0)(4,"div",2)(5,"po-email",3),h("ngModelChange",function(r){return x(p),g(i.email,r)||(i.email=r),S(r)}),t()(),n(6,"div",2)(7,"po-button",4),E("p-click",function(){return i.openDialog()}),t()()()}if(l&2){let p=j(3);m(5),b("ngModel",i.email),m(2),s("p-disabled",p.form.invalid)}},dependencies:[A,F,z,O,N,V,k],encapsulation:2})}return a})();var he=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-email-newsletter-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Email - Newsletter"),t(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-email-newsletter/sample-po-email-newsletter.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-lg-12 po-text-center po-font-subtitle">Enter your email to receive PO news, be sure to participate.</div>

<form #f="ngForm">
  <div class="po-row">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-error-pattern="Invalid e-mail"
      p-label="Email"
      p-placeholder="Enter your e-mail"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send" p-kind="primary" [p-disabled]="f.form.invalid" (p-click)="openDialog()">
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-email-newsletter/sample-po-email-newsletter.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-email-newsletter',
  templateUrl: './sample-po-email-newsletter.component.html',
  standalone: false
})
export class SamplePoEmailNewsletterComponent {
  private poAlert = inject(PoDialogService);

  email: string = '';

  openDialog() {
    this.poAlert.alert({
      title: 'Sent with success!',
      message: \`Ready Mr(s). \${this.getNameEmail()}, now you will get all the news from PO!\`
    });
  }

  private getNameEmail() {
    const index = this.email.indexOf('@');

    return this.email.substr(0, index).toLocaleUpperCase();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-email-newsletter"),t(),o(23,"hr")),l&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),P(" ",i.sampleCodeButtonLabel),m(),s("ngClass",_(4,he,i.hideSampleCodeTabs)))},dependencies:[M,w,v,C,le],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-email-doc"]],standalone:!1,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoEmailComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"code"),e(131,"--field-container-title-justify"),t()(),n(132,"td"),e(133,"Alinhamento horizontal do t\xEDtulo ("),n(134,"code"),e(135,"justify-content"),t(),e(136,")"),t(),n(137,"td")(138,"code"),e(139,"space-between"),t()()(),n(140,"tr")(141,"td")(142,"code"),e(143,"--field-container-title-flex"),t()(),n(144,"td"),e(145,"Flex do t\xEDtulo ("),n(146,"code"),e(147,"flex"),t(),e(148,")"),t(),n(149,"td")(150,"code"),e(151,"1 auto"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Hover"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-hover"),t()(),n(162,"td"),e(163,"Cor principal no estado hover"),t(),n(164,"td")(165,"code"),e(166,"var(--color-brand-01-dark)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--background-hover"),t()(),n(171,"td"),e(172,"Cor de background no estado hover"),t(),n(173,"td")(174,"code"),e(175,"var(--color-brand-01-lightest)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Focused"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-focused"),t()(),n(186,"td"),e(187,"Cor principal no estado de focus"),t(),n(188,"td")(189,"code"),e(190,"var(--color-action-default)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--outline-color-focused"),t()(),n(195,"td"),e(196,"Cor do outline do estado de focus"),t(),n(197,"td")(198,"code"),e(199,"var(--color-action-focus)"),t()()(),n(200,"tr")(201,"td")(202,"strong"),e(203,"Disabled"),t()(),o(204,"td")(205,"td"),t(),n(206,"tr")(207,"td")(208,"code"),e(209,"--color-disabled"),t()(),n(210,"td"),e(211,"Cor principal no estado disabled"),t(),n(212,"td")(213,"code"),e(214,"var(--color-neutral-light-30)"),t()()(),n(215,"tr")(216,"td")(217,"code"),e(218,"--background-disabled"),t()(),n(219,"td"),e(220,"Cor de background no estado disabled"),t(),n(221,"td")(222,"code"),e(223,"var(--color-neutral-light-20)"),t()()(),n(224,"tr")(225,"td")(226,"code"),e(227,"--text-color-disabled"),t()(),n(228,"td"),e(229,"Cor do texto no estado disabled"),t(),n(230,"td")(231,"code"),e(232,"var(--color-neutral-dark-70)"),t()()()()(),n(233,"p"),o(234,"br"),e(235," O "),n(236,"code"),e(237,"po-email"),t(),e(238," \xE9 um input espec\xEDfico para receber E-mail, com o pattern j\xE1 configurado."),t()(),n(239,"div",8)(240,"h4",9),e(241,"Seletor"),t(),n(242,"pre",10),e(243,`<po-email
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
</po-email>
`),t()(),n(244,"h4",11),e(245,"Propriedades"),t(),n(246,"table",12)(247,"tr",13)(248,"th",14),e(249,"Nome"),t(),n(250,"th",14),e(251,"Tipo"),t(),n(252,"th",14),e(253,"Padr\xE3o"),t(),n(254,"th",14),e(255,"Descri\xE7\xE3o"),t()(),n(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),e(260," (p-additional-help)"),o(261,"br"),t()(),n(262,"div",19),e(263,"Deprecated"),t()(),n(264,"td",20)(265,"code",21),e(266,"EventEmitter"),t()(),n(267,"td",22),e(268,"-"),t(),n(269,"td",23)(270,"em")(271,"strong"),e(272,"(opcional)"),t()(),n(273,"p"),e(274,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(275,"blockquote")(276,"p"),e(277,"Essa propriedade est\xE1 "),n(278,"strong"),e(279,"depreciada"),t(),e(280," e ser\xE1 removida na vers\xE3o "),n(281,"code"),e(282,"23.x.x"),t(),e(283,". Recomendamos utilizar a propriedade "),n(284,"code"),e(285,"p-helper"),t(),e(286," que oferece mais recursos e flexibilidade."),t()()()(),n(287,"tr",15)(288,"td",16)(289,"div",24)(290,"span",25),e(291," p-additional-help-tooltip"),o(292,"br"),t()(),n(293,"div",19),e(294,"Deprecated"),t()(),n(295,"td",20)(296,"code",26),e(297,"string"),t()(),n(298,"td",22),e(299,"-"),t(),n(300,"td",23)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),n(304,"p"),e(305,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(306,"code"),e(307,"po-helper"),t(),e(308,`.
`),n(309,"strong"),e(310,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(311,"blockquote")(312,"p"),e(313,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(314,"blockquote")(315,"p"),e(316,"Essa propriedade est\xE1 "),n(317,"strong"),e(318,"depreciada"),t(),e(319," e ser\xE1 removida na vers\xE3o "),n(320,"code"),e(321,"23.x.x"),t(),e(322,". Recomendamos utilizar a propriedade "),n(323,"code"),e(324,"p-helper"),t(),e(325," que oferece mais recursos e flexibilidade."),t()()()(),n(326,"tr",15)(327,"td",16)(328,"div",24)(329,"span",25),e(330," p-append-in-body"),o(331,"br"),t()()(),n(332,"td",20)(333,"code",27),e(334,"boolean"),t()(),n(335,"td",22)(336,"p")(337,"code"),e(338,"false"),t()()(),n(339,"td",23)(340,"em")(341,"strong"),e(342,"(opcional)"),t()(),n(343,"p"),e(344,"Define que o popover ("),n(345,"code"),e(346,"p-helper"),t(),e(347," e/ou "),n(348,"code"),e(349,"p-error-limit"),t(),e(350,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(351,"blockquote")(352,"p"),e(353,"Quando utilizado com "),n(354,"code"),e(355,"p-helper"),t(),e(356,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(357,"tr",15)(358,"td",16)(359,"div",24)(360,"span",25),e(361," p-auto-focus"),o(362,"br"),t()()(),n(363,"td",20)(364,"code",27),e(365,"boolean"),t()(),n(366,"td",22)(367,"p")(368,"code"),e(369,"false"),t()()(),n(370,"td",23)(371,"em")(372,"strong"),e(373,"(opcional)"),t()(),n(374,"p"),e(375,"Aplica foco no elemento ao ser iniciado."),t(),n(376,"blockquote")(377,"p"),e(378,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(379,"tr",15)(380,"td",16)(381,"div",17)(382,"span",18),e(383," (p-blur)"),o(384,"br"),t()()(),n(385,"td",20)(386,"code",21),e(387,"EventEmitter"),t()(),n(388,"td",22),e(389,"-"),t(),n(390,"td",23)(391,"em")(392,"strong"),e(393,"(opcional)"),t()(),n(394,"p"),e(395,"Evento disparado ao sair do campo."),t()()(),n(396,"tr",15)(397,"td",16)(398,"div",17)(399,"span",18),e(400," (p-change)"),o(401,"br"),t()()(),n(402,"td",20)(403,"code",21),e(404,"EventEmitter"),t()(),n(405,"td",22),e(406,"-"),t(),n(407,"td",23)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),n(411,"p"),e(412,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),e(417," (p-change-model)"),o(418,"br"),t()()(),n(419,"td",20)(420,"code",21),e(421,"EventEmitter"),t()(),n(422,"td",22),e(423,"-"),t(),n(424,"td",23)(425,"em")(426,"strong"),e(427,"(opcional)"),t()(),n(428,"p"),e(429,"Evento disparado ao alterar valor do model."),t()()(),n(430,"tr",15)(431,"td",16)(432,"div",24)(433,"span",25),e(434,"p-clean"),o(435,"br"),t()()(),n(436,"td",20)(437,"code",27),e(438,"boolean"),t()(),n(439,"td",22),e(440,"-"),t(),n(441,"td",23)(442,"em")(443,"strong"),e(444,"(opcional)"),t()(),n(445,"p"),e(446,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),n(447,"tr",15)(448,"td",16)(449,"div",24)(450,"span",25),e(451," p-compact-label"),o(452,"br"),t()()(),n(453,"td",20)(454,"code",27),e(455,"boolean"),t()(),n(456,"td",22)(457,"p")(458,"code"),e(459,"false"),t()()(),n(460,"td",23)(461,"em")(462,"strong"),e(463,"(opcional)"),t()(),n(464,"p"),e(465,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),n(466,"p"),e(467,"Quando habilitado ("),n(468,"code"),e(469,"true"),t(),e(470,"), o modo compacto afeta o conjunto composto por:"),t(),n(471,"ul")(472,"li")(473,"code"),e(474,"po-label"),t()(),n(475,"li")(476,"code"),e(477,"p-requirement (showRequired)"),t()(),n(478,"li")(479,"code"),e(480,"po-helper"),t()()(),n(481,"p"),e(482,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),n(483,"p"),e(484,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),n(485,"ul")(486,"li")(487,"code"),e(488,"--field-container-title-justify"),t()(),n(489,"li")(490,"code"),e(491,"--field-container-title-flex"),t()()(),n(492,"p"),e(493,"Exemplo:"),t(),n(494,"pre")(495,"code"),e(496,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),n(497,"p"),e(498,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),n(499,"tr",15)(500,"td",16)(501,"div",24)(502,"span",25),e(503,"p-disabled"),o(504,"br"),t()()(),n(505,"td",20)(506,"code",27),e(507,"boolean"),t()(),n(508,"td",22)(509,"p")(510,"code"),e(511,"false"),t()()(),n(512,"td",23)(513,"em")(514,"strong"),e(515,"(opcional)"),t()(),n(516,"p"),e(517,"Se verdadeiro, desabilita o campo."),t()()(),n(518,"tr",15)(519,"td",16)(520,"div",24)(521,"span",25),e(522," p-emit-all-changes"),o(523,"br"),t()()(),n(524,"td",20)(525,"code",27),e(526,"boolean"),t()(),n(527,"td",22)(528,"p")(529,"code"),e(530,"false"),t()()(),n(531,"td",23)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),n(535,"p"),e(536,"Sempre emite as altera\xE7\xF5es do model mesmo quando o valor atual for igual ao valor anterior."),t()()(),n(537,"tr",15)(538,"td",16)(539,"div",17)(540,"span",18),e(541," (p-enter)"),o(542,"br"),t()()(),n(543,"td",20)(544,"code",21),e(545,"EventEmitter"),t()(),n(546,"td",22),e(547,"-"),t(),n(548,"td",23)(549,"em")(550,"strong"),e(551,"(opcional)"),t()(),n(552,"p"),e(553,"Evento disparado ao entrar do campo."),t()()(),n(554,"tr",15)(555,"td",16)(556,"div",24)(557,"span",25),e(558," p-error-async-properties"),o(559,"br"),t()()(),n(560,"td",20)(561,"code",28),e(562,"ErrorAsyncProperties"),t()(),n(563,"td",22),e(564,"-"),t(),n(565,"td",23)(566,"em")(567,"strong"),e(568,"(opcional)"),t()(),n(569,"p"),e(570,`Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente.
Aconselhamos a utiliza\xE7\xE3o dessa propriedade somente em componentes que n\xE3o estejam
utilizando `),n(571,"code"),e(572,"Reactive Forms"),t(),e(573,". Em formul\xE1rios reativos, pode-se utilizar o pr\xF3prio "),n(574,"code"),e(575,"asyncValidators"),t(),e(576,"."),t()()(),n(577,"tr",15)(578,"td",16)(579,"div",24)(580,"span",25),e(581," p-error-limit"),o(582,"br"),t()()(),n(583,"td",20)(584,"code",27),e(585,"boolean"),t()(),n(586,"td",22)(587,"p")(588,"code"),e(589,"false"),t()()(),n(590,"td",23)(591,"em")(592,"strong"),e(593,"(opcional)"),t()(),n(594,"p"),e(595,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(596,"blockquote")(597,"p"),e(598,"Caso essa propriedade seja definida como "),n(599,"code"),e(600,"true"),t(),e(601,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(602,"tr",15)(603,"td",16)(604,"div",24)(605,"span",25),e(606," p-error-pattern"),o(607,"br"),t()()(),n(608,"td",20)(609,"code",26),e(610,"string"),t()(),n(611,"td",22),e(612,"-"),t(),n(613,"td",23)(614,"em")(615,"strong"),e(616,"(opcional)"),t()(),n(617,"p"),e(618,"Mensagem que ser\xE1 apresentada quando o "),n(619,"code"),e(620,"pattern"),t(),e(621," ou a m\xE1scara n\xE3o for satisfeita."),t(),n(622,"blockquote")(623,"p"),e(624,`Por padr\xE3o, esta mensagem n\xE3o \xE9 apresentada quando o campo estiver vazio, mesmo que ele seja requerido.
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(625,"code"),e(626,"p-required-field-error-message"),t(),e(627," em conjunto."),t()()()(),n(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),e(632," p-help"),o(633,"br"),t()()(),n(634,"td",20)(635,"code",26),e(636,"string"),t()(),n(637,"td",22),e(638,"-"),t(),n(639,"td",23)(640,"em")(641,"strong"),e(642,"(opcional)"),t()(),n(643,"p"),e(644,"Texto de apoio do campo."),t()()(),n(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),e(649," p-icon"),o(650,"br"),t()()(),n(651,"td",20)(652,"code",26),e(653,"string "),t(),n(654,"code",29),e(655," TemplateRef<void>"),t()(),n(656,"td",22),e(657,"-"),t(),n(658,"td",23)(659,"em")(660,"strong"),e(661,"(opcional)"),t()(),n(662,"p"),e(663,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(664,"p"),e(665,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(666,"a",30),e(667,"Biblioteca de \xEDcones"),t(),e(668,". conforme exemplo abaixo:"),t(),n(669,"pre")(670,"code"),e(671,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(672,"p"),e(673,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(674,"em"),e(675,"Font Awesome"),t(),e(676,", da seguinte forma:"),t(),n(677,"pre")(678,"code"),e(679,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(680,"p"),e(681,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(682,"code"),e(683,"TemplateRef"),t(),e(684,", conforme exemplo abaixo:"),t(),n(685,"pre")(686,"code"),e(687,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(688,"blockquote")(689,"p"),e(690,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(691,"code"),e(692,"font-size: inherit"),t(),e(693," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(694,"tr",15)(695,"td",16)(696,"div",17)(697,"span",18),e(698," (p-keydown)"),o(699,"br"),t()()(),n(700,"td",20)(701,"code",21),e(702,"EventEmitter"),t()(),n(703,"td",22),e(704,"-"),t(),n(705,"td",23)(706,"em")(707,"strong"),e(708,"(opcional)"),t()(),n(709,"p"),e(710,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(711,"code"),e(712,"KeyboardEvent"),t(),e(713," com informa\xE7\xF5es sobre a tecla."),t()()(),n(714,"tr",15)(715,"td",16)(716,"div",24)(717,"span",25),e(718," p-label"),o(719,"br"),t()()(),n(720,"td",20)(721,"code",26),e(722,"string"),t()(),n(723,"td",22),e(724,"-"),t(),n(725,"td",23)(726,"em")(727,"strong"),e(728,"(opcional)"),t()(),n(729,"p"),e(730,"R\xF3tulo do campo."),t()()(),n(731,"tr",15)(732,"td",16)(733,"div",24)(734,"span",25),e(735," p-label-text-wrap"),o(736,"br"),t()()(),n(737,"td",20)(738,"code",27),e(739,"boolean"),t()(),n(740,"td",22)(741,"p")(742,"code"),e(743,"false"),t()()(),n(744,"td",23)(745,"em")(746,"strong"),e(747,"(opcional)"),t()(),n(748,"p"),e(749,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(750,"code"),e(751,"p-label"),t(),e(752,". Quando "),n(753,"code"),e(754,"p-label-text-wrap"),t(),e(755,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(756,"tr",15)(757,"td",16)(758,"div",24)(759,"span",25),e(760," p-loading"),o(761,"br"),t()()(),n(762,"td",20)(763,"code",27),e(764,"boolean"),t()(),n(765,"td",22)(766,"p")(767,"code"),e(768,"false"),t()()(),n(769,"td",23)(770,"em")(771,"strong"),e(772,"(opcional)"),t()(),n(773,"p"),e(774,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),e(779,"p-mask"),o(780,"br"),t()()(),n(781,"td",20)(782,"code",26),e(783,"string"),t()(),n(784,"td",22),e(785,"-"),t(),n(786,"td",23)(787,"em")(788,"strong"),e(789,"(opcional)"),t()(),n(790,"p"),e(791,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(792,"tr",15)(793,"td",16)(794,"div",24)(795,"span",25),e(796,"p-mask-format-model"),o(797,"br"),t()()(),n(798,"td",20)(799,"code",27),e(800,"boolean"),t()(),n(801,"td",22)(802,"p")(803,"code"),e(804,"false"),t()()(),n(805,"td",23)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),n(809,"p"),e(810,"Indica se o "),n(811,"code"),e(812,"model"),t(),e(813," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(814,"tr",15)(815,"td",16)(816,"div",24)(817,"span",25),e(818," p-mask-no-length-validation"),o(819,"br"),t()()(),n(820,"td",20)(821,"code",27),e(822,"boolean"),t()(),n(823,"td",22)(824,"p")(825,"code"),e(826,"false"),t()()(),n(827,"td",23)(828,"p"),e(829,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(830,"code"),e(831,"minLength"),t(),e(832,") e m\xE1ximo ("),n(833,"code"),e(834,"maxLength"),t(),e(835,") quando h\xE1 uma m\xE1scara ("),n(836,"code"),e(837,"p-mask"),t(),e(838,") definida."),t(),n(839,"ul")(840,"li"),e(841,"Quando "),n(842,"code"),e(843,"true"),t(),e(844,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(845,"li"),e(846,"Quando "),n(847,"code"),e(848,"false"),t(),e(849,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(850,"blockquote")(851,"p"),e(852,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(853,"code"),e(854,"p-mask-format-model"),t(),e(855,"."),t()(),n(856,"p"),e(857,"Exemplo:"),t(),n(858,"pre")(859,"code"),e(860,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(861,"ul")(862,"li"),e(863,"Entrada: "),n(864,"code"),e(865,"123-456"),t(),e(866," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(867,"code"),e(868,"-"),t(),e(869,"."),t()()()(),n(870,"tr",15)(871,"td",16)(872,"div",24)(873,"span",25),e(874," p-maxlength"),o(875,"br"),t()()(),n(876,"td",20)(877,"code",31),e(878,"number"),t()(),n(879,"td",22),e(880,"-"),t(),n(881,"td",23)(882,"em")(883,"strong"),e(884,"(opcional)"),t()(),n(885,"p"),e(886,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(887,"tr",15)(888,"td",16)(889,"div",24)(890,"span",25),e(891," p-minlength"),o(892,"br"),t()()(),n(893,"td",20)(894,"code",31),e(895,"number"),t()(),n(896,"td",22),e(897,"-"),t(),n(898,"td",23)(899,"em")(900,"strong"),e(901,"(opcional)"),t()(),n(902,"p"),e(903,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(904,"tr",15)(905,"td",16)(906,"div",24)(907,"span",25),e(908," name"),o(909,"br"),t()()(),n(910,"td",20)(911,"code",26),e(912,"string"),t()(),n(913,"td",22),e(914,"-"),t(),n(915,"td",23)(916,"p"),e(917,"Nome e identificador do campo."),t()()(),n(918,"tr",15)(919,"td",16)(920,"div",24)(921,"span",25),e(922," p-no-autocomplete"),o(923,"br"),t()()(),n(924,"td",20)(925,"code",27),e(926,"boolean"),t()(),n(927,"td",22)(928,"p")(929,"code"),e(930,"false"),t()()(),n(931,"td",23)(932,"em")(933,"strong"),e(934,"(opcional)"),t()(),n(935,"p"),e(936,"Define a propriedade nativa "),n(937,"code"),e(938,"autocomplete"),t(),e(939," do campo como "),n(940,"code"),e(941,"off"),t(),e(942,"."),t(),n(943,"blockquote")(944,"p"),e(945,"No componente "),n(946,"code"),e(947,"po-password"),t(),e(948," ser\xE1 definido como "),n(949,"code"),e(950,"new-password"),t(),e(951,"."),t()(),n(952,"p"),e(953,"Nos componentes "),n(954,"code"),e(955,"po-password"),t(),e(956," e "),n(957,"code"),e(958,"po-login"),t(),e(959," o valor padr\xE3o ser\xE1 "),n(960,"code"),e(961,"true"),t(),e(962,"."),t()()(),n(963,"tr",15)(964,"td",16)(965,"div",24)(966,"span",25),e(967," p-optional"),o(968,"br"),t()()(),n(969,"td",20)(970,"code",27),e(971,"boolean"),t()(),n(972,"td",22)(973,"p")(974,"code"),e(975,"false"),t()()(),n(976,"td",23)(977,"em")(978,"strong"),e(979,"(opcional)"),t()(),n(980,"p"),e(981,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(982,"blockquote")(983,"p"),e(984,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(985,"ul")(986,"li"),e(987,"O campo conter "),n(988,"code"),e(989,"p-required"),t(),e(990,";"),t(),n(991,"li"),e(992,"N\xE3o possuir "),n(993,"code"),e(994,"p-help"),t(),e(995," e/ou "),n(996,"code"),e(997,"p-label"),t(),e(998,"."),t()()()(),n(999,"tr",15)(1e3,"td",16)(1001,"div",24)(1002,"span",25),e(1003,"p-pattern"),o(1004,"br"),t()()(),n(1005,"td",20)(1006,"code",26),e(1007,"string"),t()(),n(1008,"td",22),e(1009,"-"),t(),n(1010,"td",23)(1011,"em")(1012,"strong"),e(1013,"(opcional)"),t()(),n(1014,"p"),e(1015,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1016,"code"),e(1017,"(p-mask)"),t(),e(1018,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1019,"tr",15)(1020,"td",16)(1021,"div",24)(1022,"span",25),e(1023," p-placeholder"),o(1024,"br"),t()()(),n(1025,"td",20)(1026,"code",26),e(1027,"string"),t()(),n(1028,"td",22)(1029,"p"),e(1030,"''"),t()(),n(1031,"td",23)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),n(1035,"p"),e(1036,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1037,"tr",15)(1038,"td",16)(1039,"div",24)(1040,"span",25),e(1041," p-helper"),o(1042,"br"),t()()(),n(1043,"td",20)(1044,"code",32),e(1045,"PoHelperOptions "),t(),n(1046,"code",26),e(1047," string"),t()(),n(1048,"td",22),e(1049,"-"),t(),n(1050,"td",23)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),n(1054,"p"),e(1055,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1056,"code"),e(1057,"p-label"),t(),e(1058," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1059,"code"),e(1060,"p-label"),t(),e(1061,"."),t(),n(1062,"blockquote")(1063,"p"),e(1064,"Para mais informa\xE7\xF5es acesse: "),n(1065,"a",33),e(1066,"https://po-ui.io/documentation/po-helper"),t(),e(1067,"."),t()(),n(1068,"blockquote")(1069,"p"),e(1070,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1071,"code"),e(1072,"p-additional-help-tooltip"),t(),e(1073," e "),n(1074,"code"),e(1075,"p-additional-help"),t(),e(1076,") ser\xE1 ignorado."),t()()()(),n(1077,"tr",15)(1078,"td",16)(1079,"div",24)(1080,"span",25),e(1081,"p-readonly"),o(1082,"br"),t()()(),n(1083,"td",20)(1084,"code",27),e(1085,"boolean"),t()(),n(1086,"td",22),e(1087,"-"),t(),n(1088,"td",23)(1089,"em")(1090,"strong"),e(1091,"(opcional)"),t()(),n(1092,"p"),e(1093,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1094,"tr",15)(1095,"td",16)(1096,"div",24)(1097,"span",25),e(1098,"p-required"),o(1099,"br"),t()()(),n(1100,"td",20)(1101,"code",27),e(1102,"boolean"),t()(),n(1103,"td",22)(1104,"p")(1105,"code"),e(1106,"false"),t()()(),n(1107,"td",23)(1108,"em")(1109,"strong"),e(1110,"(opcional)"),t()(),n(1111,"p"),e(1112,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1113,"blockquote")(1114,"p"),e(1115,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1116,"code"),e(1117,"(p-disabled)"),t(),e(1118,"."),t()()()(),n(1119,"tr",15)(1120,"td",16)(1121,"div",24)(1122,"span",25),e(1123," p-required-field-error-message"),o(1124,"br"),t()()(),n(1125,"td",20)(1126,"code",27),e(1127,"boolean"),t()(),n(1128,"td",22)(1129,"p")(1130,"code"),e(1131,"false"),t()()(),n(1132,"td",23)(1133,"em")(1134,"strong"),e(1135,"(opcional)"),t()(),n(1136,"p"),e(1137,"Exibe a mensagem setada na propriedade "),n(1138,"code"),e(1139,"p-error-pattern"),t(),e(1140," se o campo estiver vazio e for requerido."),t(),n(1141,"blockquote")(1142,"p"),e(1143,"Necess\xE1rio que a propriedade "),n(1144,"code"),e(1145,"p-required"),t(),e(1146," esteja habilitada."),t()()()(),n(1147,"tr",15)(1148,"td",16)(1149,"div",24)(1150,"span",25),e(1151," p-show-required"),o(1152,"br"),t()()(),n(1153,"td",20)(1154,"code",27),e(1155,"boolean"),t()(),n(1156,"td",22),e(1157,"-"),t(),n(1158,"td",23)(1159,"p"),e(1160,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1161,"blockquote")(1162,"p"),e(1163,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1164,"ul")(1165,"li"),e(1166,"N\xE3o possuir "),n(1167,"code"),e(1168,"p-help"),t(),e(1169," e/ou "),n(1170,"code"),e(1171,"p-label"),t(),e(1172,"."),t()()()(),n(1173,"tr",15)(1174,"td",16)(1175,"div",24)(1176,"span",25),e(1177," p-size"),o(1178,"br"),t()()(),n(1179,"td",20)(1180,"code",26),e(1181,"string"),t()(),n(1182,"td",22)(1183,"p")(1184,"code"),e(1185,"medium"),t()()(),n(1186,"td",23)(1187,"em")(1188,"strong"),e(1189,"(opcional)"),t()(),n(1190,"p"),e(1191,"Define o tamanho do componente:"),t(),n(1192,"ul")(1193,"li")(1194,"code"),e(1195,"small"),t(),e(1196,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1197,"li")(1198,"code"),e(1199,"medium"),t(),e(1200,": altura do input como 44px."),t()(),n(1201,"blockquote")(1202,"p"),e(1203,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1204,"code"),e(1205,"medium"),t(),e(1206,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1207,"a",34),e(1208,"po-theme"),t(),e(1209,"."),t()()()(),n(1210,"tr",15)(1211,"td",16)(1212,"div",24)(1213,"span",25),e(1214," p-upper-case"),o(1215,"br"),t()()(),n(1216,"td",20)(1217,"code",27),e(1218,"boolean"),t()(),n(1219,"td",22),e(1220,"-"),t(),n(1221,"td",23)(1222,"p"),e(1223,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1224,"h3",11),e(1225,"M\xE9todos"),t(),n(1226,"table",35)(1227,"tr",15)(1228,"th",36)(1229,"div",24)(1230,"h4")(1231,"span",25),e(1232," showAdditionalHelp "),t()()()()(),n(1233,"tr",23)(1234,"td",23)(1235,"p"),e(1236,"M\xE9todo que exibe "),n(1237,"code"),e(1238,"p-helper"),t(),e(1239," ou executa a a\xE7\xE3o definida em "),n(1240,"code"),e(1241,"p-helper{eventOnClick}"),t(),e(1242," ou em "),n(1243,"code"),e(1244,"p-additionalHelp"),t(),e(1245,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1246,"code"),e(1247,"p-keydown"),t(),e(1248,"."),t(),n(1249,"blockquote")(1250,"p"),e(1251,"Exibe ou oculta o conte\xFAdo do componente "),n(1252,"code"),e(1253,"po-helper"),t(),e(1254," quando o componente estiver com foco."),t()(),n(1255,"pre")(1256,"code"),e(1257,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1258,"pre")(1259,"code"),e(1260,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1261,"br"),n(1262,"table",35)(1263,"tr",15)(1264,"th",36)(1265,"div",24)(1266,"h4")(1267,"span",25),e(1268," focus "),t()()()()(),n(1269,"tr",23)(1270,"td",23)(1271,"p"),e(1272,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1273,"p"),e(1274,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1275,"pre")(1276,"code"),e(1277,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1278,"br"),n(1279,"h3"),e(1280,"Interfaces"),t(),n(1281,"h4",37)(1282,"code",5),e(1283,"ErrorAsyncProperties"),t()(),n(1284,"div",2)(1285,"p"),e(1286,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1287,"h4",11),e(1288,"Propriedades"),t(),n(1289,"table",12)(1290,"tr",13)(1291,"th",14),e(1292,"Nome"),t(),n(1293,"th",14),e(1294,"Tipo"),t(),n(1295,"th",14),e(1296,"Descri\xE7\xE3o"),t()(),n(1297,"tr",15)(1298,"td",16)(1299,"div",24)(1300,"span",25),e(1301," errorAsync"),o(1302,"br"),t()()(),n(1303,"td",20)(1304,"code",38),e(1305,"(value) => Observable<boolean>"),t()(),n(1306,"td",23)(1307,"p"),e(1308,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1309,"code"),e(1310,"change"),t(),e(1311," ou "),n(1312,"code"),e(1313,"change-model"),t(),e(1314,", dependendo do valor da propriedade "),n(1315,"code"),e(1316,"triggerMode"),t(),e(1317,"."),t()()(),n(1318,"tr",15)(1319,"td",16)(1320,"div",24)(1321,"span",25),e(1322," triggerMode"),o(1323,"br"),t()()(),n(1324,"td",20)(1325,"code",39),e(1326,"'change' "),t(),n(1327,"code",40),e(1328," 'changeModel'"),t()(),n(1329,"td",23)(1330,"em")(1331,"strong"),e(1332,"(opcional)"),t()(),n(1333,"p"),e(1334,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1335,"code"),e(1336,"change"),t(),e(1337," ou "),n(1338,"code"),e(1339,"change-model"),t(),e(1340,"."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var de=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(B(H),B(G))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Email",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-email-doc"),t(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-email-basic-view")(6,"sample-po-email-labs-view")(7,"sample-po-email-newsletter-view"),t()()()),l&2&&(s("p-actions",i.actions),m(2),s("p-active",i.activeTab==="doc"),m(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[$,v,C,ie,ae,re,me],encapsulation:2})}return a})();var Ce=[{path:"",component:de}],pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=q({imports:[W.forChild(Ce),W]})}return a})();var Xe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=q({imports:[ee,pe]})}return a})();export{Xe as DocPoEmailModule};
