import{o as T,p as se}from"./chunk-AT3MKFJ3.js";import{Gb as v,Hb as C,Ia as X,Ja as W,Ra as de,S as pe,U as me,Ya as q,_,a as A,ab as B,tb as j,w as re}from"./chunk-GCMU57WK.js";import{Ea as d,Fa as n,Ga as t,Ha as o,I,Jc as z,L as te,Mb as P,Mc as D,Nc as L,O as E,Oa as U,Oc as J,P as x,Pa as f,Pc as F,Qc as V,Ra as Q,Tc as ne,Uc as ie,Va as K,Wa as O,Xa as N,Yc as oe,bb as w,cb as e,cd as ae,eb as y,ed as le,gb as g,gd as $,ha as p,hb as b,ib as h,ma as Z,oa as u,pa as R,rb as M,ya as H,za as G}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","textarea","p-label","PO Textarea"]],template:function(r,i){r&1&&o(0,"po-textarea",0)},dependencies:[q],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ue=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea Basic"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-basic/sample-po-textarea-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-textarea name="textarea" p-label="PO Textarea"> </po-textarea>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-basic/sample-po-textarea-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-textarea-basic',
  templateUrl: './sample-po-textarea-basic.component.html',
  standalone: false
})
export class SamplePoTextareaBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-basic"),t(),o(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel),p(),d("ngClass",M(4,Me,i.hideSampleCodeTabs)))},dependencies:[P,T,v,C,ce],encapsulation:2})}return a})();var xe=(()=>{class a{helperText;event;help;label;maxlength;minlength;placeholder;properties;fieldErrorMessage;rows;size;textarea;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"readonly",label:"Read Only"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}changeEvent(m){this.event=m}restore(){this.helperText="",this.textarea=void 0,this.label=void 0,this.help=void 0,this.minlength=void 0,this.maxlength=void 0,this.event=void 0,this.fieldErrorMessage="",this.rows=void 0,this.placeholder="",this.properties=[],this.size="medium"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-labs"]],standalone:!1,decls:20,vars:33,consts:[["f","ngForm"],["name","textarea",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-maxlength","p-minlength","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-rows","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","rows","p-clean","","p-label","Rows","p-min","3",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minlength","p-clean","","p-label","Min Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxlength","p-clean","","p-label","Max Length",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let s=U();n(0,"po-textarea",1),h("ngModelChange",function(l){return E(s),b(i.textarea,l)||(i.textarea=l),x(l)}),f("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3)(4,"po-info",4),t(),o(5,"po-divider"),n(6,"form",null,0)(8,"po-input",5),h("ngModelChange",function(l){return E(s),b(i.label,l)||(i.label=l),x(l)}),t(),n(9,"po-input",6),h("ngModelChange",function(l){return E(s),b(i.help,l)||(i.help=l),x(l)}),t(),n(10,"po-input",7),h("ngModelChange",function(l){return E(s),b(i.helperText,l)||(i.helperText=l),x(l)}),t(),n(11,"po-input",8),h("ngModelChange",function(l){return E(s),b(i.placeholder,l)||(i.placeholder=l),x(l)}),t(),n(12,"po-input",9),h("ngModelChange",function(l){return E(s),b(i.fieldErrorMessage,l)||(i.fieldErrorMessage=l),x(l)}),t(),n(13,"po-number",10),h("ngModelChange",function(l){return E(s),b(i.rows,l)||(i.rows=l),x(l)}),t(),n(14,"po-number",11),h("ngModelChange",function(l){return E(s),b(i.minlength,l)||(i.minlength=l),x(l)}),t(),n(15,"po-number",12),h("ngModelChange",function(l){return E(s),b(i.maxlength,l)||(i.maxlength=l),x(l)}),t(),n(16,"po-checkbox-group",13),h("ngModelChange",function(l){return E(s),b(i.properties,l)||(i.properties=l),x(l)}),t(),n(17,"po-radio-group",14),h("ngModelChange",function(l){return E(s),b(i.size,l)||(i.size=l),x(l)}),t(),n(18,"div",2)(19,"po-button",15),f("p-click",function(){return i.restore()}),t()()()}r&2&&(g("ngModel",i.textarea),d("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-maxlength",i.maxlength)("p-minlength",i.minlength)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-rows",i.rows)("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),p(3),d("p-value",i.textarea),p(),d("p-value",i.event),p(4),g("ngModel",i.label),p(),g("ngModel",i.help),p(),g("ngModel",i.helperText),p(),g("ngModel",i.placeholder),p(),g("ngModel",i.fieldErrorMessage),p(),g("ngModel",i.rows),p(),g("ngModel",i.minlength),p(),g("ngModel",i.maxlength),p(),g("ngModel",i.properties),d("p-options",i.propertiesOptions),p(),g("ngModel",i.size),d("p-options",i.sizeOptions))},dependencies:[V,D,L,F,J,re,A,pe,me,W,de,q,B],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ge=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea Labs"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-labs/sample-po-textarea-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-textarea
  name="textarea"
  [(ngModel)]="textarea"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-maxlength]="maxlength"
  [p-minlength]="minlength"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-rows]="rows"
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
</po-textarea>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="textarea"> </po-info>

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
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-number class="po-md-6 po-lg-3" name="rows" [(ngModel)]="rows" p-clean p-label="Rows" p-min="3"> </po-number>

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
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-labs/sample-po-textarea-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-labs',
  templateUrl: './sample-po-textarea-labs.component.html',
  standalone: false
})
export class SamplePoTextareaLabsComponent implements OnInit {
  helperText: string;
  event: string;
  help: string;
  label: string;
  maxlength: number;
  minlength: number;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  rows: string;
  size: string;
  textarea: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'readonly', label: 'Read Only' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'loading', label: 'Loading' }
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
    this.textarea = undefined;
    this.label = undefined;
    this.help = undefined;
    this.minlength = undefined;
    this.maxlength = undefined;
    this.event = undefined;
    this.fieldErrorMessage = '';
    this.rows = undefined;
    this.placeholder = '';
    this.properties = [];
    this.size = 'medium';
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-labs"),t(),o(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel),p(),d("ngClass",M(4,qe,i.hideSampleCodeTabs)))},dependencies:[P,T,v,C,xe],encapsulation:2})}return a})();var De=["formEmail"];function Le(a,we){if(a&1&&(n(0,"div")(1,"div",8),o(2,"po-info",13),t(),o(3,"po-divider"),t()),a&2){let m=Q();p(2),d("p-value",m.cc)}}var be=(()=>{class a{formEmail;poModal;cc="";emailText="";from="";subject="";to="";pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-email"]],viewQuery:function(r,i){if(r&1&&K(De,7)(_,7),r&2){let s;O(s=N())&&(i.formEmail=s.first),O(s=N())&&(i.poModal=s.first)}},standalone:!1,decls:19,vars:12,consts:[["formEmail","ngForm"],["p-title","Send email",3,"p-actions"],["name","from","p-clean","","p-label","From","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","emailText","p-label","E-mail","p-required","","p-rows","8",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){if(r&1){let s=U();n(0,"po-page-default",1)(1,"form",null,0)(3,"po-email",2),h("ngModelChange",function(l){return E(s),b(i.from,l)||(i.from=l),x(l)}),t(),n(4,"po-email",3),h("ngModelChange",function(l){return E(s),b(i.to,l)||(i.to=l),x(l)}),t(),n(5,"po-email",4),h("ngModelChange",function(l){return E(s),b(i.cc,l)||(i.cc=l),x(l)}),t(),n(6,"po-input",5),h("ngModelChange",function(l){return E(s),b(i.subject,l)||(i.subject=l),x(l)}),t(),n(7,"po-textarea",6),h("ngModelChange",function(l){return E(s),b(i.emailText,l)||(i.emailText=l),x(l)}),t()()(),n(8,"po-modal",7)(9,"div",8),o(10,"po-info",9)(11,"po-info",10),t(),o(12,"po-divider"),H(13,Le,4,1,"div"),n(14,"div",8),o(15,"po-info",11),t(),o(16,"po-divider"),n(17,"div",8)(18,"po-textarea",12),h("ngModelChange",function(l){return E(s),b(i.emailText,l)||(i.emailText=l),x(l)}),t()()()}r&2&&(d("p-actions",i.getPageAction()),p(3),g("ngModel",i.from),p(),g("ngModel",i.to),p(),g("ngModel",i.cc),p(),g("ngModel",i.subject),p(),g("ngModel",i.emailText),p(),d("p-primary-action",i.primaryAction),p(2),d("p-value",i.from),p(),d("p-value",i.to),p(2),G(i.cc!==""?13:-1),p(2),d("p-value",i.subject),p(3),g("ngModel",i.emailText))},dependencies:[V,D,L,F,J,A,X,W,q,B,_,j],encapsulation:2})}return a})();var Ve=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-email-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea - Email"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-email/sample-po-textarea-email.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form #formEmail="ngForm">
    <po-email class="po-sm-12" name="from" [(ngModel)]="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required> </po-input>

    <po-textarea class="po-sm-12" name="emailText" [(ngModel)]="emailText" p-label="E-mail" p-required p-rows="8">
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea class="po-md-12" name="text" [(ngModel)]="emailText" p-label="E-mail" p-readonly p-rows="6">
    </po-textarea>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-email/sample-po-textarea-email.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email',
  templateUrl: './sample-po-textarea-email.component.html',
  standalone: false
})
export class SamplePoTextareaEmailComponent {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string = '';
  emailText: string = '';
  from: string = '';
  subject: string = '';
  to: string = '';

  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };
  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail['valid'] : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-email"),t(),o(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel),p(),d("ngClass",M(4,Ve,i.hideSampleCodeTabs)))},dependencies:[P,T,v,C,be],encapsulation:2})}return a})();function We(a,we){if(a&1&&(n(0,"div")(1,"div",8),o(2,"po-info",13),t(),o(3,"po-divider"),t()),a&2){let m=Q();p(2),d("p-value",m.formEmail.get("cc").value)}}var fe=(()=>{class a{formBuilder=te(oe);poModal;formEmail;pageActions;primaryAction={action:()=>{this.poModal.close(),this.reset()},label:"Ok"};ngOnInit(){this.formEmail=this.formBuilder.group({cc:null,from:[null,z.required],to:[null,z.required],emailText:[null,z.required],subject:[null,z.required]})}getPageAction(){let m=this.formEmail?!this.formEmail.valid:!0;return[{label:"Send",action:this.send.bind(this),disabled:m},{label:"Clean",action:this.reset.bind(this)}]}reset(){this.formEmail.reset()}send(){this.poModal.open()}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-email-reactive-form"]],viewQuery:function(r,i){if(r&1&&K(_,7),r&2){let s;O(s=N())&&(i.poModal=s.first)}},standalone:!1,decls:18,vars:8,consts:[["p-title","Send email",3,"p-actions"],[3,"formGroup"],["name","from","formControlName","from","p-clean","","p-label","From","p-required","",1,"po-sm-12"],["name","to","formControlName","to","p-clean","","p-label","To","p-required","",1,"po-sm-12"],["name","cc","formControlName","cc","p-clean","","p-label","CC",1,"po-sm-12"],["name","subject","formControlName","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12"],["name","emailText","formControlName","emailText","p-label","E-mail","p-rows","8","p-required","",1,"po-sm-12"],["p-title","Email successfully sent",3,"p-primary-action"],[1,"po-row"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","Subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-required","","p-rows","6",1,"po-md-12",3,"ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"form",1),o(2,"po-email",2)(3,"po-email",3)(4,"po-email",4)(5,"po-input",5)(6,"po-textarea",6),t()(),n(7,"po-modal",7)(8,"div",8),o(9,"po-info",9)(10,"po-info",10),t(),o(11,"po-divider"),H(12,We,4,1,"div"),n(13,"div",8),o(14,"po-info",11),t(),o(15,"po-divider"),n(16,"div",8),o(17,"po-textarea",12),t()()),r&2&&(d("p-actions",i.getPageAction()),p(),d("formGroup",i.formEmail),p(6),d("p-primary-action",i.primaryAction),p(2),d("p-value",i.formEmail.get("from").value),p(),d("p-value",i.formEmail.get("to").value),p(2),G(i.formEmail.get("cc").value?12:-1),p(2),d("p-value",i.formEmail.get("subject").value),p(3),d("ngModel",i.formEmail.get("emailText").value))},dependencies:[V,D,L,F,ie,ne,A,X,W,q,B,_,j],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a}),Se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-email-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Textarea - Email Reactive Form"),t(),n(4,"a",2),f("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Send email" [p-actions]="getPageAction()">
  <form [formGroup]="formEmail">
    <po-email class="po-sm-12" name="from" formControlName="from" p-clean p-label="From" p-required> </po-email>

    <po-email class="po-sm-12" name="to" formControlName="to" p-clean p-label="To" p-required> </po-email>

    <po-email class="po-sm-12" name="cc" formControlName="cc" p-clean p-label="CC"> </po-email>

    <po-input class="po-sm-12" name="subject" formControlName="subject" p-clean p-label="Subject" p-required>
    </po-input>

    <po-textarea class="po-sm-12" name="emailText" formControlName="emailText" p-label="E-mail" p-rows="8" p-required>
    </po-textarea>
  </form>
</po-page-default>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="formEmail.get('from').value"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="formEmail.get('to').value"> </po-info>
  </div>

  <po-divider />

  @if (formEmail.get('cc').value) {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="formEmail.get('cc').value"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="Subject:" [p-value]="formEmail.get('subject').value"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [ngModel]="formEmail.get('emailText').value"
      p-label="E-mail"
      p-readonly
      p-required
      p-rows="6"
    >
    </po-textarea>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-textarea-email-reactive-form/sample-po-textarea-email-reactive-form.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-textarea-email-reactive-form',
  templateUrl: './sample-po-textarea-email-reactive-form.component.html',
  standalone: false
})
export class SamplePoTextareaEmailReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  formEmail: UntypedFormGroup;
  pageActions: Array<PoPageAction>;
  primaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
      this.reset();
    },
    label: 'Ok'
  };

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      cc: null,
      from: [null, Validators.required],
      to: [null, Validators.required],
      emailText: [null, Validators.required],
      subject: [null, Validators.required]
    });
  }

  getPageAction() {
    const isDisabled = this.formEmail ? !this.formEmail.valid : true;
    return [
      { label: 'Send', action: this.send.bind(this), disabled: isDisabled },
      { label: 'Clean', action: this.reset.bind(this) }
    ];
  }

  reset() {
    this.formEmail.reset();
  }

  send() {
    this.poModal.open();
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-textarea-email-reactive-form"),t(),o(23,"hr")),r&2&&(p(5),w("po-icon "+i.sampleCodeButtonIcon),p(),y(" ",i.sampleCodeButtonLabel),p(),d("ngClass",M(4,je,i.hideSampleCodeTabs)))},dependencies:[P,T,v,C,fe],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-textarea-doc"]],standalone:!1,decls:902,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoTextareaComponent"),t()(),n(21,"div",2)(22,"p"),e(23,`Este \xE9 um componente de entrada de dados que possibilita o preechimento com m\xFAltiplas linhas.
\xC9 recomendado para observa\xE7\xF5es, detalhamentos e outras situa\xE7\xF5es onde o usu\xE1rio deva preencher com um texto.`),t(),n(24,"p"),e(25,"Importante:"),t(),n(26,"ul")(27,"li"),e(28,"A propriedade "),n(29,"code"),e(30,"name"),t(),e(31," \xE9 obrigat\xF3ria para que o formul\xE1rio e o "),n(32,"code"),e(33,"model"),t(),e(34,` funcionem corretamente. Do contr\xE1rio, ocorrer\xE1 um erro de
`),n(35,"em"),e(36,"Angular"),t(),e(37,", onde ser\xE1 necess\xE1rio informar o atributo "),n(38,"code"),e(39,"name"),t(),e(40," ou o atributo "),n(41,"code"),e(42,'[ngModelOptions]="{standalone: true}"'),t(),e(43,", por exemplo:"),t()(),n(44,"pre")(45,"code"),e(46,`<po-textarea
  [(ngModel)]="pessoa.nome"
  [ngModelOptions]="{standalone: true}">
</po-textarea>
`),t()(),n(47,"h4"),e(48,"Acessibilidade tratada no componente"),t(),n(49,"p"),e(50,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),t(),n(51,"ul")(52,"li"),e(53,`O Text area foi desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o do mesmo na interface por tecnologias
assistivas. `),n(54,"a",6),e(55,"WCAG 4.1.2: Name, Role, Value"),t()(),n(56,"li"),e(57,`O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros
elementos da tela. `),n(58,"a",7),e(59,"WCAG 2.4.12: Focus Appearance)"),t()(),n(60,"li"),e(61,`A identifica\xE7\xE3o do erro acontece tamb\xE9m atrav\xE9s da mudan\xE7a de cor do campo, mas tamb\xE9m de um \xEDcone
junto da mensagem. `),n(62,"a",8),e(63,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()()(),n(64,"h4"),e(65,"Tokens customiz\xE1veis"),t(),n(66,"p"),e(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(68,"blockquote")(69,"p"),e(70,"Para maiores informa\xE7\xF5es, acesse o guia "),n(71,"a",9),e(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(73,"."),t()(),n(74,"table")(75,"thead")(76,"tr")(77,"th"),e(78,"Propriedade"),t(),n(79,"th"),e(80,"Descri\xE7\xE3o"),t(),n(81,"th"),e(82,"Valor Padr\xE3o"),t()()(),n(83,"tbody")(84,"tr")(85,"td")(86,"strong"),e(87,"Default Values"),t()(),o(88,"td")(89,"td"),t(),n(90,"tr")(91,"td")(92,"code"),e(93,"--font-family"),t()(),n(94,"td"),e(95,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(96,"td")(97,"code"),e(98,"var(--font-family-theme)"),t()()(),n(99,"tr")(100,"td")(101,"code"),e(102,"--font-size"),t()(),n(103,"td"),e(104,"Tamanho da fonte"),t(),n(105,"td")(106,"code"),e(107,"var(--font-size-default)"),t()()(),n(108,"tr")(109,"td")(110,"code"),e(111,"--text-color-placeholder"),t()(),n(112,"td"),e(113,"Cor do texto placeholder"),t(),n(114,"td")(115,"code"),e(116,"var(--color-neutral-light-30)"),t()()(),n(117,"tr")(118,"td")(119,"code"),e(120,"--color"),t()(),n(121,"td"),e(122,"Cor pincipal do campo"),t(),n(123,"td")(124,"code"),e(125,"var(--color-neutral-dark-70)"),t()()(),n(126,"tr")(127,"td")(128,"code"),e(129,"--background"),t()(),n(130,"td"),e(131,"Cor de background"),t(),n(132,"td")(133,"code"),e(134,"var(--color-neutral-light-05)"),t()()(),n(135,"tr")(136,"td")(137,"code"),e(138,"--field-container-title-justify"),t()(),n(139,"td"),e(140,"Alinhamento horizontal do t\xEDtulo ("),n(141,"code"),e(142,"justify-content"),t(),e(143,")"),t(),n(144,"td")(145,"code"),e(146,"space-between"),t()()(),n(147,"tr")(148,"td")(149,"code"),e(150,"--field-container-title-flex"),t()(),n(151,"td"),e(152,"Flex do t\xEDtulo ("),n(153,"code"),e(154,"flex"),t(),e(155,")"),t(),n(156,"td")(157,"code"),e(158,"1 auto"),t()()()()()(),n(159,"div",10)(160,"h4",11),e(161,"Seletor"),t(),n(162,"pre",12),e(163,`<po-textarea
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    (p-change-model)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    (p-enter)="EventEmitter"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    p-maxlength="number"
    p-minlength="number"
    name="string"
    p-optional="boolean"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-rows="number"
    p-show-required="boolean"
    p-size="string" >
</po-textarea>
`),t()(),n(164,"h4",13),e(165,"Propriedades"),t(),n(166,"table",14)(167,"tr",15)(168,"th",16),e(169,"Nome"),t(),n(170,"th",16),e(171,"Tipo"),t(),n(172,"th",16),e(173,"Padr\xE3o"),t(),n(174,"th",16),e(175,"Descri\xE7\xE3o"),t()(),n(176,"tr",17)(177,"td",18)(178,"div",19)(179,"span",20),e(180," (p-additional-help)"),o(181,"br"),t()(),n(182,"div",21),e(183,"Deprecated"),t()(),n(184,"td",22)(185,"code",23),e(186,"EventEmitter"),t()(),n(187,"td",24),e(188,"-"),t(),n(189,"td",25)(190,"em")(191,"strong"),e(192,"(opcional)"),t()(),n(193,"p"),e(194,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(195,"blockquote")(196,"p"),e(197,"Essa propriedade est\xE1 "),n(198,"strong"),e(199,"depreciada"),t(),e(200," e ser\xE1 removida na vers\xE3o "),n(201,"code"),e(202,"23.x.x"),t(),e(203,". Recomendamos utilizar a propriedade "),n(204,"code"),e(205,"p-helper"),t(),e(206," que oferece mais recursos e flexibilidade."),t()()()(),n(207,"tr",17)(208,"td",18)(209,"div",26)(210,"span",27),e(211," p-additional-help-tooltip"),o(212,"br"),t()(),n(213,"div",21),e(214,"Deprecated"),t()(),n(215,"td",22)(216,"code",28),e(217,"string"),t()(),n(218,"td",24),e(219,"-"),t(),n(220,"td",25)(221,"em")(222,"strong"),e(223,"(opcional)"),t()(),n(224,"p"),e(225,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(226,"code"),e(227,"po-helper"),t(),e(228,`.
`),n(229,"strong"),e(230,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(231,"blockquote")(232,"p"),e(233,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(234,"blockquote")(235,"p"),e(236,"Essa propriedade est\xE1 "),n(237,"strong"),e(238,"depreciada"),t(),e(239," e ser\xE1 removida na vers\xE3o "),n(240,"code"),e(241,"23.x.x"),t(),e(242,". Recomendamos utilizar a propriedade "),n(243,"code"),e(244,"p-helper"),t(),e(245," que oferece mais recursos e flexibilidade."),t()()()(),n(246,"tr",17)(247,"td",18)(248,"div",26)(249,"span",27),e(250," p-append-in-body"),o(251,"br"),t()()(),n(252,"td",22)(253,"code",29),e(254,"boolean"),t()(),n(255,"td",24)(256,"p")(257,"code"),e(258,"false"),t()()(),n(259,"td",25)(260,"em")(261,"strong"),e(262,"(opcional)"),t()(),n(263,"p"),e(264,"Define que o popover ("),n(265,"code"),e(266,"p-helper"),t(),e(267," e/ou "),n(268,"code"),e(269,"p-error-limit"),t(),e(270,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(271,"blockquote")(272,"p"),e(273,"Quando utilizado com "),n(274,"code"),e(275,"p-helper"),t(),e(276,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(277,"tr",17)(278,"td",18)(279,"div",26)(280,"span",27),e(281," p-auto-focus"),o(282,"br"),t()()(),n(283,"td",22)(284,"code",29),e(285,"boolean"),t()(),n(286,"td",24)(287,"p")(288,"code"),e(289,"false"),t()()(),n(290,"td",25)(291,"em")(292,"strong"),e(293,"(opcional)"),t()(),n(294,"p"),e(295,"Aplica foco no elemento ao ser iniciado."),t(),n(296,"blockquote")(297,"p"),e(298,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(299,"tr",17)(300,"td",18)(301,"div",19)(302,"span",20),e(303," (p-blur)"),o(304,"br"),t()()(),n(305,"td",22)(306,"code",23),e(307,"EventEmitter"),t()(),n(308,"td",24),e(309,"-"),t(),n(310,"td",25)(311,"em")(312,"strong"),e(313,"(opcional)"),t()(),n(314,"p"),e(315,"Evento disparado ao sair do campo."),t()()(),n(316,"tr",17)(317,"td",18)(318,"div",19)(319,"span",20),e(320," (p-change)"),o(321,"br"),t()()(),n(322,"td",22)(323,"code",23),e(324,"EventEmitter"),t()(),n(325,"td",24),e(326,"-"),t(),n(327,"td",25)(328,"em")(329,"strong"),e(330,"(opcional)"),t()(),n(331,"p"),e(332,"Evento disparado ao alterar valor e deixar o campo."),t()()(),n(333,"tr",17)(334,"td",18)(335,"div",19)(336,"span",20),e(337," (p-change-model)"),o(338,"br"),t()()(),n(339,"td",22)(340,"code",23),e(341,"EventEmitter"),t()(),n(342,"td",24),e(343,"-"),t(),n(344,"td",25)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Evento disparado ao alterar valor do model."),t()()(),n(350,"tr",17)(351,"td",18)(352,"div",26)(353,"span",27),e(354," p-compact-label"),o(355,"br"),t()()(),n(356,"td",22)(357,"code",29),e(358,"boolean"),t()(),n(359,"td",24)(360,"p")(361,"code"),e(362,"false"),t()()(),n(363,"td",25)(364,"em")(365,"strong"),e(366,"(opcional)"),t()(),n(367,"p"),e(368,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),n(369,"p"),e(370,"Quando habilitado ("),n(371,"code"),e(372,"true"),t(),e(373,"), o modo compacto afeta o conjunto composto por:"),t(),n(374,"ul")(375,"li")(376,"code"),e(377,"po-label"),t()(),n(378,"li")(379,"code"),e(380,"p-requirement (showRequired)"),t()(),n(381,"li")(382,"code"),e(383,"po-helper"),t()()(),n(384,"p"),e(385,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),n(386,"p"),e(387,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),n(388,"ul")(389,"li")(390,"code"),e(391,"--field-container-title-justify"),t()(),n(392,"li")(393,"code"),e(394,"--field-container-title-flex"),t()()(),n(395,"p"),e(396,"Exemplo:"),t(),n(397,"pre")(398,"code"),e(399,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),n(400,"p"),e(401,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),n(402,"tr",17)(403,"td",18)(404,"div",26)(405,"span",27),e(406," p-disabled"),o(407,"br"),t()()(),n(408,"td",22)(409,"code",29),e(410,"boolean"),t()(),n(411,"td",24)(412,"p")(413,"code"),e(414,"false"),t()()(),n(415,"td",25)(416,"em")(417,"strong"),e(418,"(opcional)"),t()(),n(419,"p"),e(420,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(421,"tr",17)(422,"td",18)(423,"div",19)(424,"span",20),e(425," (p-enter)"),o(426,"br"),t()()(),n(427,"td",22)(428,"code",23),e(429,"EventEmitter"),t()(),n(430,"td",24),e(431,"-"),t(),n(432,"td",25)(433,"em")(434,"strong"),e(435,"(opcional)"),t()(),n(436,"p"),e(437,"Evento disparado ao entrar do campo."),t()()(),n(438,"tr",17)(439,"td",18)(440,"div",26)(441,"span",27),e(442," p-error-limit"),o(443,"br"),t()()(),n(444,"td",22)(445,"code",29),e(446,"boolean"),t()(),n(447,"td",24)(448,"p")(449,"code"),e(450,"false"),t()()(),n(451,"td",25)(452,"em")(453,"strong"),e(454,"(opcional)"),t()(),n(455,"p"),e(456,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(457,"blockquote")(458,"p"),e(459,"Caso essa propriedade seja definida como "),n(460,"code"),e(461,"true"),t(),e(462,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(463,"tr",17)(464,"td",18)(465,"div",26)(466,"span",27),e(467," p-field-error-message"),o(468,"br"),t()()(),n(469,"td",22)(470,"code",28),e(471,"string"),t()(),n(472,"td",24),e(473,"-"),t(),n(474,"td",25)(475,"em")(476,"strong"),e(477,"(opcional)"),t()(),n(478,"p"),e(479,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(480,"blockquote")(481,"p"),e(482,"Necess\xE1rio que a propriedade "),n(483,"code"),e(484,"p-required"),t(),e(485," esteja habilitada."),t()()()(),n(486,"tr",17)(487,"td",18)(488,"div",26)(489,"span",27),e(490," p-help"),o(491,"br"),t()()(),n(492,"td",22)(493,"code",28),e(494,"string"),t()(),n(495,"td",24),e(496,"-"),t(),n(497,"td",25)(498,"em")(499,"strong"),e(500,"(opcional)"),t()(),n(501,"p"),e(502,"Texto de apoio do campo."),t()()(),n(503,"tr",17)(504,"td",18)(505,"div",19)(506,"span",20),e(507," (p-keydown)"),o(508,"br"),t()()(),n(509,"td",22)(510,"code",23),e(511,"EventEmitter"),t()(),n(512,"td",24),e(513,"-"),t(),n(514,"td",25)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(520,"code"),e(521,"KeyboardEvent"),t(),e(522," com informa\xE7\xF5es sobre a tecla."),t()()(),n(523,"tr",17)(524,"td",18)(525,"div",26)(526,"span",27),e(527," p-label"),o(528,"br"),t()()(),n(529,"td",22)(530,"code",28),e(531,"string"),t()(),n(532,"td",24),e(533,"-"),t(),n(534,"td",25)(535,"em")(536,"strong"),e(537,"(opcional)"),t()(),n(538,"p"),e(539,"Label do campo."),t()()(),n(540,"tr",17)(541,"td",18)(542,"div",26)(543,"span",27),e(544," p-label-text-wrap"),o(545,"br"),t()()(),n(546,"td",22)(547,"code",29),e(548,"boolean"),t()(),n(549,"td",24)(550,"p")(551,"code"),e(552,"false"),t()()(),n(553,"td",25)(554,"em")(555,"strong"),e(556,"(opcional)"),t()(),n(557,"p"),e(558,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(559,"code"),e(560,"p-label"),t(),e(561,". Quando "),n(562,"code"),e(563,"p-label-text-wrap"),t(),e(564,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(565,"tr",17)(566,"td",18)(567,"div",26)(568,"span",27),e(569," p-loading"),o(570,"br"),t()()(),n(571,"td",22)(572,"code",29),e(573,"boolean"),t()(),n(574,"td",24)(575,"p")(576,"code"),e(577,"false"),t()()(),n(578,"td",25)(579,"em")(580,"strong"),e(581,"(opcional)"),t()(),n(582,"p"),e(583,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(584,"tr",17)(585,"td",18)(586,"div",26)(587,"span",27),e(588," p-maxlength"),o(589,"br"),t()()(),n(590,"td",22)(591,"code",30),e(592,"number"),t()(),n(593,"td",24),e(594,"-"),t(),n(595,"td",25)(596,"em")(597,"strong"),e(598,"(opcional)"),t()(),n(599,"p"),e(600,"Indica a quantidade m\xE1xima de caracteres que o campo aceita."),t()()(),n(601,"tr",17)(602,"td",18)(603,"div",26)(604,"span",27),e(605," p-minlength"),o(606,"br"),t()()(),n(607,"td",22)(608,"code",30),e(609,"number"),t()(),n(610,"td",24),e(611,"-"),t(),n(612,"td",25)(613,"em")(614,"strong"),e(615,"(opcional)"),t()(),n(616,"p"),e(617,"Indica a quantidade m\xEDnima de caracteres que o campo aceita."),t()()(),n(618,"tr",17)(619,"td",18)(620,"div",26)(621,"span",27),e(622," name"),o(623,"br"),t()()(),n(624,"td",22)(625,"code",28),e(626,"string"),t()(),n(627,"td",24),e(628,"-"),t(),n(629,"td",25)(630,"p"),e(631,"Nome e Id do componente."),t()()(),n(632,"tr",17)(633,"td",18)(634,"div",26)(635,"span",27),e(636," p-optional"),o(637,"br"),t()()(),n(638,"td",22)(639,"code",29),e(640,"boolean"),t()(),n(641,"td",24)(642,"p")(643,"code"),e(644,"false"),t()()(),n(645,"td",25)(646,"em")(647,"strong"),e(648,"(opcional)"),t()(),n(649,"p"),e(650,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(651,"blockquote")(652,"p"),e(653,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(654,"ul")(655,"li"),e(656,"O campo conter "),n(657,"code"),e(658,"p-required"),t(),e(659,";"),t(),n(660,"li"),e(661,"N\xE3o possuir "),n(662,"code"),e(663,"p-help"),t(),e(664," e/ou "),n(665,"code"),e(666,"p-label"),t(),e(667,"."),t()()()(),n(668,"tr",17)(669,"td",18)(670,"div",26)(671,"span",27),e(672," p-placeholder"),o(673,"br"),t()()(),n(674,"td",22)(675,"code",28),e(676,"string"),t()(),n(677,"td",24),e(678,"-"),t(),n(679,"td",25)(680,"p"),e(681,"Placeholder, mensagem que aparecer\xE1 enquanto o campo n\xE3o estiver preenchido."),t()()(),n(682,"tr",17)(683,"td",18)(684,"div",26)(685,"span",27),e(686," p-helper"),o(687,"br"),t()()(),n(688,"td",22)(689,"code",31),e(690,"PoHelperOptions "),t(),n(691,"code",28),e(692," string"),t()(),n(693,"td",24),e(694,"-"),t(),n(695,"td",25)(696,"em")(697,"strong"),e(698,"(opcional)"),t()(),n(699,"p"),e(700,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(701,"code"),e(702,"p-label"),t(),e(703," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(704,"code"),e(705,"p-label"),t(),e(706,"."),t(),n(707,"blockquote")(708,"p"),e(709,"Para mais informa\xE7\xF5es acesse: "),n(710,"a",32),e(711,"https://po-ui.io/documentation/po-helper"),t(),e(712,"."),t()(),n(713,"blockquote")(714,"p"),e(715,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(716,"code"),e(717,"p-additional-help-tooltip"),t(),e(718," e "),n(719,"code"),e(720,"p-additional-help"),t(),e(721,") ser\xE1 ignorado."),t()()()(),n(722,"tr",17)(723,"td",18)(724,"div",26)(725,"span",27),e(726," p-readonly"),o(727,"br"),t()()(),n(728,"td",22)(729,"code",29),e(730,"boolean"),t()(),n(731,"td",24)(732,"p")(733,"code"),e(734,"false"),t()()(),n(735,"td",25)(736,"em")(737,"strong"),e(738,"(opcional)"),t()(),n(739,"p"),e(740,"Indica que o campo ser\xE1 somente leitura."),t()()(),n(741,"tr",17)(742,"td",18)(743,"div",26)(744,"span",27),e(745," p-required"),o(746,"br"),t()()(),n(747,"td",22)(748,"code",29),e(749,"boolean"),t()(),n(750,"td",24)(751,"p")(752,"code"),e(753,"false"),t()()(),n(754,"td",25)(755,"em")(756,"strong"),e(757,"(opcional)"),t()(),n(758,"p"),e(759,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),n(760,"blockquote")(761,"p"),e(762,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),n(763,"code"),e(764,"(p-disabled)"),t(),e(765,"."),t()()()(),n(766,"tr",17)(767,"td",18)(768,"div",26)(769,"span",27),e(770," p-rows"),o(771,"br"),t()()(),n(772,"td",22)(773,"code",30),e(774,"number"),t()(),n(775,"td",24)(776,"p")(777,"code"),e(778,"3"),t()()(),n(779,"td",25)(780,"em")(781,"strong"),e(782,"(opcional)"),t()(),n(783,"p"),e(784,"Indica a quantidade de linhas que ser\xE3o exibidas."),t()()(),n(785,"tr",17)(786,"td",18)(787,"div",26)(788,"span",27),e(789," p-show-required"),o(790,"br"),t()()(),n(791,"td",22)(792,"code",29),e(793,"boolean"),t()(),n(794,"td",24),e(795,"-"),t(),n(796,"td",25)(797,"p"),e(798,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(799,"blockquote")(800,"p"),e(801,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(802,"ul")(803,"li"),e(804,"N\xE3o possuir "),n(805,"code"),e(806,"p-help"),t(),e(807," e/ou "),n(808,"code"),e(809,"p-label"),t(),e(810,"."),t()()()(),n(811,"tr",17)(812,"td",18)(813,"div",26)(814,"span",27),e(815," p-size"),o(816,"br"),t()()(),n(817,"td",22)(818,"code",28),e(819,"string"),t()(),n(820,"td",24)(821,"p")(822,"code"),e(823,"medium"),t()()(),n(824,"td",25)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),n(828,"p"),e(829,"Define o tamanho do componente:"),t(),n(830,"ul")(831,"li")(832,"code"),e(833,"small"),t(),e(834," (dispon\xEDvel apenas para acessibilidade AA)"),t(),n(835,"li")(836,"code"),e(837,"medium"),t()()(),n(838,"blockquote")(839,"p"),e(840,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(841,"code"),e(842,"medium"),t(),e(843,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(844,"a",33),e(845,"po-theme"),t(),e(846,"."),t()()()()(),n(847,"h3",13),e(848,"M\xE9todos"),t(),n(849,"table",34)(850,"tr",17)(851,"th",35)(852,"div",26)(853,"h4")(854,"span",27),e(855," focus "),t()()()()(),n(856,"tr",25)(857,"td",25)(858,"p"),e(859,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(860,"p"),e(861,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(862,"pre")(863,"code"),e(864,`import { PoTextareaComponent } from '@po-ui/ng-components';

...

@ViewChild(PoTextareaComponent, { static: true }) textarea: PoTextareaComponent;

focusTextarea() {
  this.textarea.focus();
}
`),t()()()()(),o(865,"br"),n(866,"table",34)(867,"tr",17)(868,"th",35)(869,"div",26)(870,"h4")(871,"span",27),e(872," showAdditionalHelp "),t()()()()(),n(873,"tr",25)(874,"td",25)(875,"p"),e(876,"M\xE9todo que exibe "),n(877,"code"),e(878,"p-helper"),t(),e(879," ou executa a a\xE7\xE3o definida em "),n(880,"code"),e(881,"p-helper{eventOnClick}"),t(),e(882," ou em "),n(883,"code"),e(884,"p-additionalHelp"),t(),e(885,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(886,"code"),e(887,"p-keydown"),t(),e(888,"."),t(),n(889,"blockquote")(890,"p"),e(891,"Exibe ou oculta o conte\xFAdo do componente "),n(892,"code"),e(893,"po-helper"),t(),e(894," quando o componente estiver com foco."),t()(),n(895,"pre")(896,"code"),e(897,`//Exemplo com p-label e p-helper
<po-textarea
 #textarea
 ...
 p-label="Label do textarea"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, textarea)"
></po-textarea>
`),t()(),n(898,"pre")(899,"code"),e(900,`...
onKeyDown(event: KeyboardEvent, inp: PoTextareaComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(901,"br"),t())},dependencies:[T],encapsulation:2})}return a})();var Ce=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(Z(ae),Z(le))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Textarea",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),f("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-textarea-doc"),t(),n(4,"po-tab",3),f("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-textarea-basic-view")(6,"sample-po-textarea-labs-view")(7,"sample-po-textarea-email-view")(8,"sample-po-textarea-email-reactive-form-view"),t()()()),r&2&&(d("p-actions",i.actions),p(2),d("p-active",i.activeTab==="doc"),p(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[j,v,C,ue,ge,he,Se,ve],encapsulation:2})}return a})();var ze=[{path:"",component:Ce}],Te=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=R({type:a});static \u0275inj=I({imports:[$.forChild(ze),$]})}return a})();var vt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=R({type:a});static \u0275inj=I({imports:[se,Te]})}return a})();export{vt as DocPoTextareaModule};
