import{o as P,p as te}from"./chunk-WYOAC7KN.js";import{Hb as f,Ib as v,Ja as J,S as Y,Sa as X,Ta as k,U as Z,a as U,bb as $,fa as O,ub as ee,w as V}from"./chunk-XOCFD5XY.js";import{Ea as s,Fa as n,Ga as t,Ha as o,I as T,L as j,Mb as M,Mc as F,Nc as z,O as u,Oa as L,Oc as A,P as E,Pa as h,Pc as N,Qc as R,_a as H,bb as C,cb as e,cd as Q,eb as y,ed as K,gb as x,gd as B,ha as d,hb as b,ib as g,ma as W,oa as S,pa as D,pb as G,rb as _}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ne=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","password","p-label","PO Password"]],template:function(r,i){r&1&&o(0,"po-password",0)},dependencies:[k],encapsulation:2})}return a})();var ue=a=>({"docs-sample-code-tabs":a}),oe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-basic/sample-po-password-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-password name="password" p-label="PO Password"> </po-password>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-basic/sample-po-password-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-password-basic',
  templateUrl: './sample-po-password-basic.component.html',
  standalone: false
})
export class SamplePoPasswordBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-basic"),t(),o(23,"hr")),r&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel),d(),s("ngClass",_(4,ue,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ne],encapsulation:2})}return a})();var ae=(()=>{class a{helperText;errorPattern;event;help;label;mask;maxlength;minlength;password;pattern;placeholder;properties;size;propertiesOptions=[{value:"clean",label:"Clean"},{value:"disabled",label:"Disabled"},{value:"errorLimit",label:"Limit Error Message"},{value:"hidepasswordpeek",label:"Hide Password Peek"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"},{value:"noAutocomplete",label:"No Autocomplete"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"requiredFieldErrorMessage",label:"Required Field Error Message"},{value:"showRequired",label:"Show Required"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(p){this.event=p}restore(){this.helperText="",this.errorPattern=void 0,this.event=void 0,this.help=void 0,this.label=void 0,this.maxlength=void 0,this.minlength=void 0,this.password=void 0,this.pattern="",this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs"]],standalone:!1,decls:20,vars:37,consts:[["f","ngForm"],["name","password",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-clean","p-disabled","p-error-pattern","p-help","p-hide-password-peek","p-label","p-loading","p-maxlength","p-minlength","p-no-autocomplete","p-optional","p-pattern","p-placeholder","p-readonly","p-required","p-required-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","errorPattern","p-clean","","p-label","Error Pattern",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pattern","p-clean","","p-help","Ex.: '[a-zA]{5}[Z0-9]{3}'","p-label","Pattern (Regex)",1,"po-md-6",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let m=L();n(0,"po-password",1),g("ngModelChange",function(l){return u(m),b(i.password,l)||(i.password=l),E(l)}),h("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),g("ngModelChange",function(l){return u(m),b(i.label,l)||(i.label=l),E(l)}),t(),n(9,"po-input",6),g("ngModelChange",function(l){return u(m),b(i.help,l)||(i.help=l),E(l)}),t(),n(10,"po-input",7),g("ngModelChange",function(l){return u(m),b(i.helperText,l)||(i.helperText=l),E(l)}),t(),n(11,"po-input",8),g("ngModelChange",function(l){return u(m),b(i.placeholder,l)||(i.placeholder=l),E(l)}),t(),n(12,"po-input",9),g("ngModelChange",function(l){return u(m),b(i.errorPattern,l)||(i.errorPattern=l),E(l)}),t(),n(13,"po-input",10),g("ngModelChange",function(l){return u(m),b(i.pattern,l)||(i.pattern=l),E(l)}),t(),n(14,"po-number",11),g("ngModelChange",function(l){return u(m),b(i.minlength,l)||(i.minlength=l),E(l)}),t(),n(15,"po-number",12),g("ngModelChange",function(l){return u(m),b(i.maxlength,l)||(i.maxlength=l),E(l)}),t(),n(16,"po-checkbox-group",13),g("ngModelChange",function(l){return u(m),b(i.properties,l)||(i.properties=l),E(l)}),t(),n(17,"po-radio-group",14),g("ngModelChange",function(l){return u(m),b(i.size,l)||(i.size=l),E(l)}),t(),n(18,"div",2)(19,"po-button",15),h("p-click",function(){return i.restore()}),t()()()}r&2&&(x("ngModel",i.password),s("p-helper",i.helperText)("p-clean",i.properties.includes("clean"))("p-disabled",i.properties.includes("disabled"))("p-error-pattern",i.errorPattern)("p-help",i.help)("p-hide-password-peek",i.properties.includes("hidepasswordpeek"))("p-label",i.label)("p-loading",i.properties==null?null:i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-no-autocomplete",i.properties==null?null:i.properties.includes("noAutocomplete"))("p-optional",i.properties.includes("optional"))("p-pattern",i.pattern)("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-required-field-error-message",i.properties.includes("requiredFieldErrorMessage"))("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),d(3),s("p-value",i.password),d(),s("p-value",i.event),d(4),x("ngModel",i.label),d(),x("ngModel",i.help),d(),x("ngModel",i.helperText),d(),x("ngModel",i.placeholder),d(),x("ngModel",i.errorPattern),d(),x("ngModel",i.pattern),d(),x("ngModel",i.minlength),d(),x("ngModel",i.maxlength),d(),x("ngModel",i.properties),s("p-options",i.propertiesOptions),d(),x("ngModel",i.size),s("p-options",i.sizeOptions))},dependencies:[R,F,z,N,A,V,U,Y,Z,J,X,k,$],encapsulation:2})}return a})();var be=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-labs/sample-po-password-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-password
  name="password"
  [(ngModel)]="password"
  [p-helper]="helperText"
  [p-clean]="properties.includes('clean')"
  [p-disabled]="properties.includes('disabled')"
  [p-error-pattern]="errorPattern"
  [p-help]="help"
  [p-hide-password-peek]="properties.includes('hidepasswordpeek')"
  [p-label]="label"
  [p-loading]="properties?.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-no-autocomplete]="properties?.includes('noAutocomplete')"
  [p-optional]="properties.includes('optional')"
  [p-pattern]="pattern"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-required-field-error-message]="properties.includes('requiredFieldErrorMessage')"
  [p-show-required]="properties.includes('showRequired')"
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
</po-password>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="password"> </po-info>

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
    class="po-md-6"
    name="pattern"
    [(ngModel)]="pattern"
    p-clean
    p-help="Ex.: '[a-zA]{5}[Z0-9]{3}'"
    p-label="Pattern (Regex)"
  >
  </po-input>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-labs/sample-po-password-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-labs',
  templateUrl: './sample-po-password-labs.component.html',
  standalone: false
})
export class SamplePoPasswordLabsComponent implements OnInit {
  helperText: string;
  errorPattern: string;
  event: string;
  help: string;
  label: string;
  mask: string;
  maxlength: number;
  minlength: number;
  password: string;
  pattern: string;
  placeholder: string;
  properties: Array<string>;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'clean', label: 'Clean' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'hidepasswordpeek', label: 'Hide Password Peek' },
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
    this.errorPattern = undefined;
    this.event = undefined;
    this.help = undefined;
    this.label = undefined;
    this.maxlength = undefined;
    this.minlength = undefined;
    this.password = undefined;
    this.pattern = '';
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-labs"),t(),o(23,"hr")),r&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel),d(),s("ngClass",_(4,be,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,ae],encapsulation:2})}return a})();var re=(()=>{class a{poAlert=j(O);confirmNewPassword;currentPassword;errorPattern;help="Initial password = 123456";newPassword;password="123456";setPassword(){this.confirmNewPassword===this.newPassword?(this.password=this.newPassword,this.help=`Actual password = ${this.password}`,this.currentPassword=void 0,this.newPassword=void 0,this.confirmNewPassword=void 0,this.poAlert.alert({title:"Password Reset",message:"Password saved successfully",ok:()=>this.reset()})):this.poAlert.alert({title:"Password Error",message:"Your (new passsword) is different of (confirm new password)",ok:()=>this.reset()})}reset(){this.newPassword=void 0,this.confirmNewPassword=void 0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset"]],standalone:!1,features:[G([O])],decls:7,vars:7,consts:[["passwordForm","ngForm"],["name","currentPassword","p-clean","","p-error-pattern","invalid password","p-label","Current Password","p-mask","999999","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-help"],["name","newPassword","p-clean","","p-error-pattern","invalid password","p-label","New password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","confirmNewPassword","p-clean","","p-error-pattern","invalid password","p-label","Confirm New Password","p-mask","999999","p-minlength","6","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],[1,"po-row"],["p-label","Save",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=L();n(0,"form",null,0)(2,"po-password",1),g("ngModelChange",function(l){return u(m),b(i.currentPassword,l)||(i.currentPassword=l),E(l)}),t(),n(3,"po-password",2),g("ngModelChange",function(l){return u(m),b(i.newPassword,l)||(i.newPassword=l),E(l)}),t(),n(4,"po-password",3),g("ngModelChange",function(l){return u(m),b(i.confirmNewPassword,l)||(i.confirmNewPassword=l),E(l)}),t(),n(5,"div",4)(6,"po-button",5),h("p-click",function(){return i.setPassword()}),t()()()}if(r&2){let m=H(1);d(2),x("ngModel",i.currentPassword),s("p-help",i.help),d(),x("ngModel",i.newPassword),s("p-disabled",i.currentPassword!==i.password),d(),x("ngModel",i.confirmNewPassword),s("p-disabled",i.currentPassword!==i.password),d(2),s("p-disabled",m.invalid)}},dependencies:[R,F,z,N,A,V,k],encapsulation:2})}return a})();var we=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-reset-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Password - Reset"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-password-reset/sample-po-password-reset.component.html"),t(),n(13,"pre",7),e(14,`<form #passwordForm="ngForm">
  <po-password
    class="po-sm-12"
    name="currentPassword"
    [(ngModel)]="currentPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Current Password"
    p-mask="999999"
    p-required
    [p-help]="help"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="newPassword"
    [(ngModel)]="newPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="New password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <po-password
    class="po-sm-12"
    name="confirmNewPassword"
    [(ngModel)]="confirmNewPassword"
    p-clean
    p-error-pattern="invalid password"
    p-label="Confirm New Password"
    p-mask="999999"
    p-minlength="6"
    p-required
    [p-disabled]="currentPassword !== password"
  >
  </po-password>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Save" [p-disabled]="passwordForm.invalid" (p-click)="setPassword()">
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-password-reset/sample-po-password-reset.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoDialogService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-password-reset',
  templateUrl: './sample-po-password-reset.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoPasswordResetComponent {
  private poAlert = inject(PoDialogService);

  confirmNewPassword: string;
  currentPassword: string;
  errorPattern: string;
  help: string = 'Initial password = 123456';
  newPassword: string;
  password: string = '123456';

  setPassword() {
    if (this.confirmNewPassword === this.newPassword) {
      this.password = this.newPassword;
      this.help = \`Actual password = \${this.password}\`;
      this.currentPassword = undefined;
      this.newPassword = undefined;
      this.confirmNewPassword = undefined;

      this.poAlert.alert({
        title: 'Password Reset',
        message: 'Password saved successfully',
        ok: () => this.reset()
      });
    } else {
      this.poAlert.alert({
        title: 'Password Error',
        message: 'Your (new passsword) is different of (confirm new password)',
        ok: () => this.reset()
      });
    }
  }

  reset() {
    this.newPassword = undefined;
    this.confirmNewPassword = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-password-reset"),t(),o(23,"hr")),r&2&&(d(5),C("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel),d(),s("ngClass",_(4,we,i.hideSampleCodeTabs)))},dependencies:[M,P,f,v,re],encapsulation:2})}return a})();var pe=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=S({type:a,selectors:[["sample-po-password-doc"]],standalone:!1,decls:1360,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoPasswordComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente baseado em input, com v\xE1rias propriedades do input nativo e outras
propriedades extras como: m\xE1scara, pattern, mensagem de erro e etc.
Voc\xEA deve informar a vari\xE1vel que cont\xE9m o valor como [(ngModel)]="variavel", para que o
input receba o valor da vari\xE1vel e para que ela receba as altera\xE7\xF5es do valor (two-way-databinding).
A propriedade name \xE9 obrigat\xF3ria para que o formul\xE1rio e o model funcionem corretamente.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,`Caso o input tenha um [(ngModel)] sem o atributo name, ocorrer\xE1 um erro de angular.
Ent\xE3o voc\xEA precisa informar o atributo name ou o atributo [ngModelOptions]="{standalone: true}".
Exemplo: [(ngModel)]="pessoa.nome" [ngModelOptions]="{standalone: true}".`),t()(),n(29,"h4"),e(30,"Tokens customiz\xE1veis"),t(),n(31,"p"),e(32,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),o(33,"br"),e(34,`
Obs: S\xF3 \xE9 poss\xEDvel realizar altera\xE7\xF5es ao adicionar a classe `),n(35,"code"),e(36,".po-input"),t()(),n(37,"blockquote")(38,"p"),e(39,"Para correto alinhamento \xE9 recomendado o uso das classes de espa\xE7amento do "),n(40,"a",6),e(41,"Grid System"),t(),e(42,"."),t()(),n(43,"blockquote")(44,"p"),e(45,"Para maiores informa\xE7\xF5es, acesse o guia "),n(46,"a",7),e(47,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(48,"."),t()(),n(49,"table")(50,"thead")(51,"tr")(52,"th"),e(53,"Propriedade"),t(),n(54,"th"),e(55,"Descri\xE7\xE3o"),t(),n(56,"th"),e(57,"Valor Padr\xE3o"),t()()(),n(58,"tbody")(59,"tr")(60,"td")(61,"strong"),e(62,"Default Values"),t()(),o(63,"td")(64,"td"),t(),n(65,"tr")(66,"td")(67,"code"),e(68,"--font-family"),t()(),n(69,"td"),e(70,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(71,"td")(72,"code"),e(73,"var(--font-family-theme)"),t()()(),n(74,"tr")(75,"td")(76,"code"),e(77,"--font-size"),t()(),n(78,"td"),e(79,"Tamanho da fonte"),t(),n(80,"td")(81,"code"),e(82,"var(--font-size-default)"),t()()(),n(83,"tr")(84,"td")(85,"code"),e(86,"--text-color-placeholder"),t()(),n(87,"td"),e(88,"Cor do texto placeholder"),t(),n(89,"td")(90,"code"),e(91,"var(--color-neutral-light-30)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--color"),t()(),n(96,"td"),e(97,"Cor pincipal do input"),t(),n(98,"td")(99,"code"),e(100,"var(--color-neutral-dark-70)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--background"),t()(),n(105,"td"),e(106,"Cor de background"),t(),n(107,"td")(108,"code"),e(109,"var(--color-neutral-light-05)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--padding"),t()(),n(114,"td"),e(115,"Preenchimento"),t(),n(116,"td")(117,"code"),e(118,"0 0.5rem"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--text-color"),t()(),n(123,"td"),e(124,"Cor do texto"),t(),n(125,"td")(126,"code"),e(127,"var(--color-neutral-dark-90)"),t()()(),n(128,"tr")(129,"td")(130,"code"),e(131,"--field-container-title-justify"),t()(),n(132,"td"),e(133,"Alinhamento horizontal do t\xEDtulo ("),n(134,"code"),e(135,"justify-content"),t(),e(136,")"),t(),n(137,"td")(138,"code"),e(139,"space-between"),t()()(),n(140,"tr")(141,"td")(142,"code"),e(143,"--field-container-title-flex"),t()(),n(144,"td"),e(145,"Flex do t\xEDtulo ("),n(146,"code"),e(147,"flex"),t(),e(148,")"),t(),n(149,"td")(150,"code"),e(151,"1 auto"),t()()(),n(152,"tr")(153,"td")(154,"strong"),e(155,"Hover"),t()(),o(156,"td")(157,"td"),t(),n(158,"tr")(159,"td")(160,"code"),e(161,"--color-hover"),t()(),n(162,"td"),e(163,"Cor principal no estado hover"),t(),n(164,"td")(165,"code"),e(166,"var(--color-brand-01-dark)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--background-hover"),t()(),n(171,"td"),e(172,"Cor de background no estado hover"),t(),n(173,"td")(174,"code"),e(175,"var(--color-brand-01-lightest)"),t()()(),n(176,"tr")(177,"td")(178,"strong"),e(179,"Focused"),t()(),o(180,"td")(181,"td"),t(),n(182,"tr")(183,"td")(184,"code"),e(185,"--color-focused"),t()(),n(186,"td"),e(187,"Cor principal no estado de focus"),t(),n(188,"td")(189,"code"),e(190,"var(--color-action-default)"),t()()(),n(191,"tr")(192,"td")(193,"code"),e(194,"--outline-color-focused"),t()(),n(195,"td"),e(196,"Cor do outline do estado de focus"),t(),n(197,"td")(198,"code"),e(199,"var(--color-action-focus)"),t()()(),n(200,"tr")(201,"td")(202,"strong"),e(203,"Disabled"),t()(),o(204,"td")(205,"td"),t(),n(206,"tr")(207,"td")(208,"code"),e(209,"--color-disabled"),t()(),n(210,"td"),e(211,"Cor principal no estado disabled"),t(),n(212,"td")(213,"code"),e(214,"var(--color-neutral-light-30)"),t()()(),n(215,"tr")(216,"td")(217,"code"),e(218,"--background-disabled"),t()(),n(219,"td"),e(220,"Cor de background no estado disabled"),t(),n(221,"td")(222,"code"),e(223,"var(--color-neutral-light-20)"),t()()(),n(224,"tr")(225,"td")(226,"code"),e(227,"--text-color-disabled"),t()(),n(228,"td"),e(229,"Cor do texto no estado disabled"),t(),n(230,"td")(231,"code"),e(232,"var(--color-neutral-dark-70)"),t()()()()(),n(233,"p"),o(234,"br"),e(235," O "),n(236,"code"),e(237,"po-password"),t(),e(238," \xE9 um input espec\xEDfico para senhas. J\xE1 possui tipo, estilo e \xEDcone predefinidos."),t()(),n(239,"div",8)(240,"h4",9),e(241,"Seletor"),t(),n(242,"pre",10),e(243,`<po-password
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
    p-hide-password-peek="boolean"
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
</po-password>
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
Para exibir a mensagem com o campo vazio, utilize a propriedade `),n(625,"code"),e(626,"p-required-field-error-message"),t(),e(627," em conjunto."),t()()()(),n(628,"tr",15)(629,"td",16)(630,"div",24)(631,"span",25),e(632," p-help"),o(633,"br"),t()()(),n(634,"td",20)(635,"code",26),e(636,"string"),t()(),n(637,"td",22),e(638,"-"),t(),n(639,"td",23)(640,"em")(641,"strong"),e(642,"(opcional)"),t()(),n(643,"p"),e(644,"Texto de apoio do campo."),t()()(),n(645,"tr",15)(646,"td",16)(647,"div",24)(648,"span",25),e(649," p-hide-password-peek"),o(650,"br"),t()()(),n(651,"td",20)(652,"code",27),e(653,"boolean"),t()(),n(654,"td",22)(655,"p")(656,"code"),e(657,"false"),t()()(),n(658,"td",23)(659,"em")(660,"strong"),e(661,"(opcional)"),t()(),n(662,"p"),e(663,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada."),t()()(),n(664,"tr",15)(665,"td",16)(666,"div",24)(667,"span",25),e(668," p-icon"),o(669,"br"),t()()(),n(670,"td",20)(671,"code",26),e(672,"string "),t(),n(673,"code",29),e(674," TemplateRef<void>"),t()(),n(675,"td",22),e(676,"-"),t(),n(677,"td",23)(678,"em")(679,"strong"),e(680,"(opcional)"),t()(),n(681,"p"),e(682,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),n(683,"p"),e(684,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(685,"a",30),e(686,"Biblioteca de \xEDcones"),t(),e(687,". conforme exemplo abaixo:"),t(),n(688,"pre")(689,"code"),e(690,`<po-input p-icon="an an-user" p-label="PO input"></po-input>
`),t()(),n(691,"p"),e(692,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(693,"em"),e(694,"Font Awesome"),t(),e(695,", da seguinte forma:"),t(),n(696,"pre")(697,"code"),e(698,`<po-input p-icon="fa fa-podcast" p-label="PO input"></po-input>
`),t()(),n(699,"p"),e(700,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(701,"code"),e(702,"TemplateRef"),t(),e(703,", conforme exemplo abaixo:"),t(),n(704,"pre")(705,"code"),e(706,`<po-input [p-icon]="template" p-label="input template ionic"></po-input>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),n(707,"blockquote")(708,"p"),e(709,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(710,"code"),e(711,"font-size: inherit"),t(),e(712," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(713,"tr",15)(714,"td",16)(715,"div",17)(716,"span",18),e(717," (p-keydown)"),o(718,"br"),t()()(),n(719,"td",20)(720,"code",21),e(721,"EventEmitter"),t()(),n(722,"td",22),e(723,"-"),t(),n(724,"td",23)(725,"em")(726,"strong"),e(727,"(opcional)"),t()(),n(728,"p"),e(729,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(730,"code"),e(731,"KeyboardEvent"),t(),e(732," com informa\xE7\xF5es sobre a tecla."),t()()(),n(733,"tr",15)(734,"td",16)(735,"div",24)(736,"span",25),e(737," p-label"),o(738,"br"),t()()(),n(739,"td",20)(740,"code",26),e(741,"string"),t()(),n(742,"td",22),e(743,"-"),t(),n(744,"td",23)(745,"em")(746,"strong"),e(747,"(opcional)"),t()(),n(748,"p"),e(749,"R\xF3tulo do campo."),t()()(),n(750,"tr",15)(751,"td",16)(752,"div",24)(753,"span",25),e(754," p-label-text-wrap"),o(755,"br"),t()()(),n(756,"td",20)(757,"code",27),e(758,"boolean"),t()(),n(759,"td",22)(760,"p")(761,"code"),e(762,"false"),t()()(),n(763,"td",23)(764,"em")(765,"strong"),e(766,"(opcional)"),t()(),n(767,"p"),e(768,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(769,"code"),e(770,"p-label"),t(),e(771,". Quando "),n(772,"code"),e(773,"p-label-text-wrap"),t(),e(774,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(775,"tr",15)(776,"td",16)(777,"div",24)(778,"span",25),e(779," p-loading"),o(780,"br"),t()()(),n(781,"td",20)(782,"code",27),e(783,"boolean"),t()(),n(784,"td",22)(785,"p")(786,"code"),e(787,"false"),t()()(),n(788,"td",23)(789,"em")(790,"strong"),e(791,"(opcional)"),t()(),n(792,"p"),e(793,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(794,"tr",15)(795,"td",16)(796,"div",24)(797,"span",25),e(798,"p-mask"),o(799,"br"),t()()(),n(800,"td",20)(801,"code",26),e(802,"string"),t()(),n(803,"td",22),e(804,"-"),t(),n(805,"td",23)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),n(809,"p"),e(810,`Indica uma m\xE1scara para o campo. Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
A m\xE1scara gera uma valida\xE7\xE3o autom\xE1tica do campo, podendo esta ser substitu\xEDda por um REGEX espec\xEDfico
atrav\xE9s da propriedade p-pattern.
O campo ser\xE1 sinalizado e o formul\xE1rio ficar\xE1 inv\xE1lido quando o valor informado estiver fora do padr\xE3o definido,
mesmo quando desabilitado.`),t()()(),n(811,"tr",15)(812,"td",16)(813,"div",24)(814,"span",25),e(815,"p-mask-format-model"),o(816,"br"),t()()(),n(817,"td",20)(818,"code",27),e(819,"boolean"),t()(),n(820,"td",22)(821,"p")(822,"code"),e(823,"false"),t()()(),n(824,"td",23)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),n(828,"p"),e(829,"Indica se o "),n(830,"code"),e(831,"model"),t(),e(832," receber\xE1 o valor formatado pela m\xE1scara ou apenas o valor puro (sem formata\xE7\xE3o)."),t()()(),n(833,"tr",15)(834,"td",16)(835,"div",24)(836,"span",25),e(837," p-mask-no-length-validation"),o(838,"br"),t()()(),n(839,"td",20)(840,"code",27),e(841,"boolean"),t()(),n(842,"td",22)(843,"p")(844,"code"),e(845,"false"),t()()(),n(846,"td",23)(847,"p"),e(848,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),n(849,"code"),e(850,"minLength"),t(),e(851,") e m\xE1ximo ("),n(852,"code"),e(853,"maxLength"),t(),e(854,") quando h\xE1 uma m\xE1scara ("),n(855,"code"),e(856,"p-mask"),t(),e(857,") definida."),t(),n(858,"ul")(859,"li"),e(860,"Quando "),n(861,"code"),e(862,"true"),t(),e(863,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),n(864,"li"),e(865,"Quando "),n(866,"code"),e(867,"false"),t(),e(868,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),n(869,"blockquote")(870,"p"),e(871,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),n(872,"code"),e(873,"p-mask-format-model"),t(),e(874,"."),t()(),n(875,"p"),e(876,"Exemplo:"),t(),n(877,"pre")(878,"code"),e(879,`<po-input
  p-mask="999-999"
  p-maxlength="6"
  p-minlength="4"
  p-mask-no-length-validation="true"
></po-input>
`),t()(),n(880,"ul")(881,"li"),e(882,"Entrada: "),n(883,"code"),e(884,"123-456"),t(),e(885," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando o caractere especial "),n(886,"code"),e(887,"-"),t(),e(888,"."),t()()()(),n(889,"tr",15)(890,"td",16)(891,"div",24)(892,"span",25),e(893," p-maxlength"),o(894,"br"),t()()(),n(895,"td",20)(896,"code",31),e(897,"number"),t()(),n(898,"td",22),e(899,"-"),t(),n(900,"td",23)(901,"em")(902,"strong"),e(903,"(opcional)"),t()(),n(904,"p"),e(905,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(906,"tr",15)(907,"td",16)(908,"div",24)(909,"span",25),e(910," p-minlength"),o(911,"br"),t()()(),n(912,"td",20)(913,"code",31),e(914,"number"),t()(),n(915,"td",22),e(916,"-"),t(),n(917,"td",23)(918,"em")(919,"strong"),e(920,"(opcional)"),t()(),n(921,"p"),e(922,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(923,"tr",15)(924,"td",16)(925,"div",24)(926,"span",25),e(927," name"),o(928,"br"),t()()(),n(929,"td",20)(930,"code",26),e(931,"string"),t()(),n(932,"td",22),e(933,"-"),t(),n(934,"td",23)(935,"p"),e(936,"Nome e identificador do campo."),t()()(),n(937,"tr",15)(938,"td",16)(939,"div",24)(940,"span",25),e(941," p-no-autocomplete"),o(942,"br"),t()()(),n(943,"td",20)(944,"code",27),e(945,"boolean"),t()(),n(946,"td",22)(947,"p")(948,"code"),e(949,"false"),t()()(),n(950,"td",23)(951,"em")(952,"strong"),e(953,"(opcional)"),t()(),n(954,"p"),e(955,"Define a propriedade nativa "),n(956,"code"),e(957,"autocomplete"),t(),e(958," do campo como "),n(959,"code"),e(960,"off"),t(),e(961,"."),t(),n(962,"blockquote")(963,"p"),e(964,"No componente "),n(965,"code"),e(966,"po-password"),t(),e(967," ser\xE1 definido como "),n(968,"code"),e(969,"new-password"),t(),e(970,"."),t()(),n(971,"p"),e(972,"Nos componentes "),n(973,"code"),e(974,"po-password"),t(),e(975," e "),n(976,"code"),e(977,"po-login"),t(),e(978," o valor padr\xE3o ser\xE1 "),n(979,"code"),e(980,"true"),t(),e(981,"."),t()()(),n(982,"tr",15)(983,"td",16)(984,"div",24)(985,"span",25),e(986," p-optional"),o(987,"br"),t()()(),n(988,"td",20)(989,"code",27),e(990,"boolean"),t()(),n(991,"td",22)(992,"p")(993,"code"),e(994,"false"),t()()(),n(995,"td",23)(996,"em")(997,"strong"),e(998,"(opcional)"),t()(),n(999,"p"),e(1e3,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1001,"blockquote")(1002,"p"),e(1003,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1004,"ul")(1005,"li"),e(1006,"O campo conter "),n(1007,"code"),e(1008,"p-required"),t(),e(1009,";"),t(),n(1010,"li"),e(1011,"N\xE3o possuir "),n(1012,"code"),e(1013,"p-help"),t(),e(1014," e/ou "),n(1015,"code"),e(1016,"p-label"),t(),e(1017,"."),t()()()(),n(1018,"tr",15)(1019,"td",16)(1020,"div",24)(1021,"span",25),e(1022,"p-pattern"),o(1023,"br"),t()()(),n(1024,"td",20)(1025,"code",26),e(1026,"string"),t()(),n(1027,"td",22),e(1028,"-"),t(),n(1029,"td",23)(1030,"em")(1031,"strong"),e(1032,"(opcional)"),t()(),n(1033,"p"),e(1034,`Express\xE3o regular para validar o campo.
Quando o campo possuir uma m\xE1scara `),n(1035,"code"),e(1036,"(p-mask)"),t(),e(1037,` ser\xE1 automaticamente validado por ela, por\xE9m
\xE9 poss\xEDvel definir um p-pattern para substituir a valida\xE7\xE3o da m\xE1scara.`),t()()(),n(1038,"tr",15)(1039,"td",16)(1040,"div",24)(1041,"span",25),e(1042," p-placeholder"),o(1043,"br"),t()()(),n(1044,"td",20)(1045,"code",26),e(1046,"string"),t()(),n(1047,"td",22)(1048,"p"),e(1049,"''"),t()(),n(1050,"td",23)(1051,"em")(1052,"strong"),e(1053,"(opcional)"),t()(),n(1054,"p"),e(1055,"Mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(1056,"tr",15)(1057,"td",16)(1058,"div",24)(1059,"span",25),e(1060," p-helper"),o(1061,"br"),t()()(),n(1062,"td",20)(1063,"code",32),e(1064,"PoHelperOptions "),t(),n(1065,"code",26),e(1066," string"),t()(),n(1067,"td",22),e(1068,"-"),t(),n(1069,"td",23)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),n(1073,"p"),e(1074,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1075,"code"),e(1076,"p-label"),t(),e(1077," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1078,"code"),e(1079,"p-label"),t(),e(1080,"."),t(),n(1081,"blockquote")(1082,"p"),e(1083,"Para mais informa\xE7\xF5es acesse: "),n(1084,"a",33),e(1085,"https://po-ui.io/documentation/po-helper"),t(),e(1086,"."),t()(),n(1087,"blockquote")(1088,"p"),e(1089,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1090,"code"),e(1091,"p-additional-help-tooltip"),t(),e(1092," e "),n(1093,"code"),e(1094,"p-additional-help"),t(),e(1095,") ser\xE1 ignorado."),t()()()(),n(1096,"tr",15)(1097,"td",16)(1098,"div",24)(1099,"span",25),e(1100,"p-readonly"),o(1101,"br"),t()()(),n(1102,"td",20)(1103,"code",27),e(1104,"boolean"),t()(),n(1105,"td",22),e(1106,"-"),t(),n(1107,"td",23)(1108,"em")(1109,"strong"),e(1110,"(opcional)"),t()(),n(1111,"p"),e(1112,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(1113,"tr",15)(1114,"td",16)(1115,"div",24)(1116,"span",25),e(1117,"p-required"),o(1118,"br"),t()()(),n(1119,"td",20)(1120,"code",27),e(1121,"boolean"),t()(),n(1122,"td",22)(1123,"p")(1124,"code"),e(1125,"false"),t()()(),n(1126,"td",23)(1127,"em")(1128,"strong"),e(1129,"(opcional)"),t()(),n(1130,"p"),e(1131,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(1132,"blockquote")(1133,"p"),e(1134,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(1135,"code"),e(1136,"(p-disabled)"),t(),e(1137,"."),t()()()(),n(1138,"tr",15)(1139,"td",16)(1140,"div",24)(1141,"span",25),e(1142," p-required-field-error-message"),o(1143,"br"),t()()(),n(1144,"td",20)(1145,"code",27),e(1146,"boolean"),t()(),n(1147,"td",22)(1148,"p")(1149,"code"),e(1150,"false"),t()()(),n(1151,"td",23)(1152,"em")(1153,"strong"),e(1154,"(opcional)"),t()(),n(1155,"p"),e(1156,"Exibe a mensagem setada na propriedade "),n(1157,"code"),e(1158,"p-error-pattern"),t(),e(1159," se o campo estiver vazio e for requerido."),t(),n(1160,"blockquote")(1161,"p"),e(1162,"Necess\xE1rio que a propriedade "),n(1163,"code"),e(1164,"p-required"),t(),e(1165," esteja habilitada."),t()()()(),n(1166,"tr",15)(1167,"td",16)(1168,"div",24)(1169,"span",25),e(1170," p-show-required"),o(1171,"br"),t()()(),n(1172,"td",20)(1173,"code",27),e(1174,"boolean"),t()(),n(1175,"td",22),e(1176,"-"),t(),n(1177,"td",23)(1178,"p"),e(1179,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1180,"blockquote")(1181,"p"),e(1182,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1183,"ul")(1184,"li"),e(1185,"N\xE3o possuir "),n(1186,"code"),e(1187,"p-help"),t(),e(1188," e/ou "),n(1189,"code"),e(1190,"p-label"),t(),e(1191,"."),t()()()(),n(1192,"tr",15)(1193,"td",16)(1194,"div",24)(1195,"span",25),e(1196," p-size"),o(1197,"br"),t()()(),n(1198,"td",20)(1199,"code",26),e(1200,"string"),t()(),n(1201,"td",22)(1202,"p")(1203,"code"),e(1204,"medium"),t()()(),n(1205,"td",23)(1206,"em")(1207,"strong"),e(1208,"(opcional)"),t()(),n(1209,"p"),e(1210,"Define o tamanho do componente:"),t(),n(1211,"ul")(1212,"li")(1213,"code"),e(1214,"small"),t(),e(1215,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1216,"li")(1217,"code"),e(1218,"medium"),t(),e(1219,": altura do input como 44px."),t()(),n(1220,"blockquote")(1221,"p"),e(1222,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1223,"code"),e(1224,"medium"),t(),e(1225,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1226,"a",34),e(1227,"po-theme"),t(),e(1228,"."),t()()()(),n(1229,"tr",15)(1230,"td",16)(1231,"div",24)(1232,"span",25),e(1233," p-upper-case"),o(1234,"br"),t()()(),n(1235,"td",20)(1236,"code",27),e(1237,"boolean"),t()(),n(1238,"td",22),e(1239,"-"),t(),n(1240,"td",23)(1241,"p"),e(1242,"Converte o conte\xFAdo do campo em mai\xFAsulo automaticamente."),t()()()(),n(1243,"h3",11),e(1244,"M\xE9todos"),t(),n(1245,"table",35)(1246,"tr",15)(1247,"th",36)(1248,"div",24)(1249,"h4")(1250,"span",25),e(1251," showAdditionalHelp "),t()()()()(),n(1252,"tr",23)(1253,"td",23)(1254,"p"),e(1255,"M\xE9todo que exibe "),n(1256,"code"),e(1257,"p-helper"),t(),e(1258," ou executa a a\xE7\xE3o definida em "),n(1259,"code"),e(1260,"p-helper{eventOnClick}"),t(),e(1261," ou em "),n(1262,"code"),e(1263,"p-additionalHelp"),t(),e(1264,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1265,"code"),e(1266,"p-keydown"),t(),e(1267,"."),t(),n(1268,"blockquote")(1269,"p"),e(1270,"Exibe ou oculta o conte\xFAdo do componente "),n(1271,"code"),e(1272,"po-helper"),t(),e(1273," quando o componente estiver com foco."),t()(),n(1274,"pre")(1275,"code"),e(1276,`// Exemplo com p-label e p-helper
<po-nome-component
 #component
 ...
 p-label="Label do componente"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, component)"
></po-nome-component>
`),t()(),n(1277,"pre")(1278,"code"),e(1279,`...
onKeyDown(event: KeyboardEvent, inp: PoNomeDoComponente): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1280,"br"),n(1281,"table",35)(1282,"tr",15)(1283,"th",36)(1284,"div",24)(1285,"h4")(1286,"span",25),e(1287," focus "),t()()()()(),n(1288,"tr",23)(1289,"td",23)(1290,"p"),e(1291,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1292,"p"),e(1293,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1294,"pre")(1295,"code"),e(1296,`import { PoNomeDoComponenteComponent } from '@po-ui/ng-components';

...

@ViewChild(PoNomeDoComponenteComponent, { static: true }) nomeDoComponente: PoNomeDoComponenteComponent;

focusComponent() {
  this.nomeDoComponente.focus();
}
`),t()()()()(),o(1297,"br"),n(1298,"h3"),e(1299,"Interfaces"),t(),n(1300,"h4",37)(1301,"code",5),e(1302,"ErrorAsyncProperties"),t()(),n(1303,"div",2)(1304,"p"),e(1305,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),n(1306,"h4",11),e(1307,"Propriedades"),t(),n(1308,"table",12)(1309,"tr",13)(1310,"th",14),e(1311,"Nome"),t(),n(1312,"th",14),e(1313,"Tipo"),t(),n(1314,"th",14),e(1315,"Descri\xE7\xE3o"),t()(),n(1316,"tr",15)(1317,"td",16)(1318,"div",24)(1319,"span",25),e(1320," errorAsync"),o(1321,"br"),t()()(),n(1322,"td",20)(1323,"code",38),e(1324,"(value) => Observable<boolean>"),t()(),n(1325,"td",23)(1326,"p"),e(1327,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),n(1328,"code"),e(1329,"change"),t(),e(1330," ou "),n(1331,"code"),e(1332,"change-model"),t(),e(1333,", dependendo do valor da propriedade "),n(1334,"code"),e(1335,"triggerMode"),t(),e(1336,"."),t()()(),n(1337,"tr",15)(1338,"td",16)(1339,"div",24)(1340,"span",25),e(1341," triggerMode"),o(1342,"br"),t()()(),n(1343,"td",20)(1344,"code",39),e(1345,"'change' "),t(),n(1346,"code",40),e(1347," 'changeModel'"),t()(),n(1348,"td",23)(1349,"em")(1350,"strong"),e(1351,"(opcional)"),t()(),n(1352,"p"),e(1353,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),n(1354,"code"),e(1355,"change"),t(),e(1356," ou "),n(1357,"code"),e(1358,"change-model"),t(),e(1359,"."),t()()()()())},dependencies:[P],encapsulation:2})}return a})();var me=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,r){this.route=p,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let r=p.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(W(Q),W(K))};static \u0275cmp=S({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Password",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-password-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-password-basic-view")(6,"sample-po-password-labs-view")(7,"sample-po-password-reset-view"),t()()()),r&2&&(s("p-actions",i.actions),d(2),s("p-active",i.activeTab==="doc"),d(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ee,f,v,oe,le,de,pe],encapsulation:2})}return a})();var Pe=[{path:"",component:me}],se=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[B.forChild(Pe),B]})}return a})();var Ze=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[te,se]})}return a})();export{Ze as DocPoPasswordModule};
