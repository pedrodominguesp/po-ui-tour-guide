import{o as k,p as le}from"./chunk-AT3MKFJ3.js";import{Gb as v,Hb as C,Ja as oe,Ra as ne,S as M,U as ee,a as B,ab as ie,tb as ae,w as W,ya as z,za as te}from"./chunk-GCMU57WK.js";import{Ea as m,Fa as o,Ga as t,Ha as i,I as T,L as Q,Mb as _,Mc as q,Nc as L,O as u,Oa as D,Oc as F,P as b,Pa as S,Pc as A,Qc as V,_a as K,_b as Y,bb as w,cb as e,cd as Z,eb as y,ed as $,gb as h,gd as R,ha as r,hb as E,ib as g,ma as N,oa as x,pa as O,qb as j,rb as P,sb as U,xb as J,yb as X}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var Ee=()=>({value:"1",label:"Option 1"}),ge=()=>({value:"2",label:"Option 2"}),Se=(a,he)=>[a,he],pe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=x({type:a,selectors:[["sample-po-checkbox-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","checkboxGroup","p-label","PO Checkbox Group",3,"p-options"]],template:function(p,n){p&1&&i(0,"po-checkbox-group",0),p&2&&m("p-options",U(3,Se,j(1,Ee),j(2,ge)))},dependencies:[M],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=x({type:a,selectors:[["sample-po-checkbox-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Basic"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  p-label="PO Checkbox Group"
  [p-options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]"
>
</po-checkbox-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-basic/sample-po-checkbox-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-group-basic',
  templateUrl: './sample-po-checkbox-group-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-basic"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel),r(),m("ngClass",P(4,ve,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,pe],encapsulation:2})}return a})();var de=(()=>{class a{helperText;checkboxGroup;columns;disabled;event;help;indeterminate;label;option;options;properties;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"indeterminate",label:"Indeterminate"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,this.option],this.clearOption()}changeEvent(d){this.event=d}restore(){this.helperText="",this.checkboxGroup=void 0,this.columns=void 0,this.disabled=!1,this.event=void 0,this.help="",this.indeterminate=void 0,this.label=void 0,this.options=[],this.properties=[],this.fieldErrorMessage="",this.size="medium",this.clearOption()}clearOption(){this.option={label:void 0,value:void 0}}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=x({type:a,selectors:[["sample-po-checkbox-group-labs"]],standalone:!1,decls:26,vars:34,consts:[["fOption","ngForm"],["f","ngForm"],["name","checkboxGroup",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-indeterminate","p-label","p-optional","p-options","p-required","p-field-error-message","p-error-limit","p-show-required","p-label-text-wrap","p-compact-label","p-size"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionValue","p-clean","","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionLabel","p-clean","","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Option Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let s=D();o(0,"po-checkbox-group",2),g("ngModelChange",function(l){return u(s),E(n.checkboxGroup,l)||(n.checkboxGroup=l),b(l)}),S("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),t(),i(1,"po-divider"),o(2,"div",3),i(3,"po-info",4),J(4,"json"),i(5,"po-info",5),t(),i(6,"po-divider"),o(7,"form",null,0)(9,"po-input",6),g("ngModelChange",function(l){return u(s),E(n.option.value,l)||(n.option.value=l),b(l)}),t(),o(10,"po-input",7),g("ngModelChange",function(l){return u(s),E(n.option.label,l)||(n.option.label=l),b(l)}),t(),o(11,"po-switch",8),g("ngModelChange",function(l){return u(s),E(n.option.disabled,l)||(n.option.disabled=l),b(l)}),t(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return n.addOption()}),t()()(),i(14,"po-divider"),o(15,"form",null,1)(17,"po-input",10),g("ngModelChange",function(l){return u(s),E(n.label,l)||(n.label=l),b(l)}),t(),o(18,"po-input",11),g("ngModelChange",function(l){return u(s),E(n.help,l)||(n.help=l),b(l)}),t(),o(19,"po-input",12),g("ngModelChange",function(l){return u(s),E(n.helperText,l)||(n.helperText=l),b(l)}),t(),o(20,"po-input",13),g("ngModelChange",function(l){return u(s),E(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),b(l)}),t(),o(21,"po-checkbox-group",14),g("ngModelChange",function(l){return u(s),E(n.properties,l)||(n.properties=l),b(l)}),t(),o(22,"po-radio-group",15),g("ngModelChange",function(l){return u(s),E(n.columns,l)||(n.columns=l),b(l)}),t(),o(23,"po-radio-group",16),g("ngModelChange",function(l){return u(s),E(n.size,l)||(n.size=l),b(l)}),t(),o(24,"div",3)(25,"po-button",17),S("p-click",function(){return n.restore()}),t()()()}if(p&2){let s=K(8);h("ngModel",n.checkboxGroup),m("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-indeterminate",n.properties.includes("indeterminate"))("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-show-required",n.properties.includes("showRequired"))("p-label-text-wrap",n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-size",n.size),r(3),m("p-value",X(4,32,n.checkboxGroup)),r(2),m("p-value",n.event),r(4),h("ngModel",n.option.value),r(),h("ngModel",n.option.label),r(),h("ngModel",n.option.disabled),r(2),m("p-disabled",s.invalid),r(4),h("ngModel",n.label),r(),h("ngModel",n.help),r(),h("ngModel",n.helperText),r(),h("ngModel",n.fieldErrorMessage),r(),h("ngModel",n.properties),m("p-options",n.propertiesOptions),r(),h("ngModel",n.columns),m("p-options",n.columnOptions),r(),h("ngModel",n.size),m("p-options",n.sizeOptions)}},dependencies:[V,q,L,A,F,W,B,M,ee,oe,z,ie,Y],encapsulation:2})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=x({type:a,selectors:[["sample-po-checkbox-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group Labs"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox-group
  name="checkboxGroup"
  [(ngModel)]="checkboxGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-indeterminate]="properties.includes('indeterminate')"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-show-required]="properties.includes('showRequired')"
  [p-label-text-wrap]="properties.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-checkbox-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkboxGroup | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-clean p-label="Option Value" p-required>
  </po-input>

  <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-clean p-label="Option Label" p-required>
  </po-input>

  <po-switch class="po-md-6" name="disabled" [(ngModel)]="option.disabled" p-label="Option Disabled"> </po-switch>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

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
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-labs/sample-po-checkbox-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-labs',
  templateUrl: './sample-po-checkbox-group-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupLabsComponent implements OnInit {
  helperText: string;
  checkboxGroup: object;
  columns: number;
  disabled: boolean;
  event: string;
  help: string;
  indeterminate: boolean;
  label: string;
  option: PoCheckboxGroupOption;
  options: Array<PoCheckboxGroupOption>;
  properties: Array<string>;
  fieldErrorMessage: string;
  size: string;

  public readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options = [...this.options, this.option];
    this.clearOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkboxGroup = undefined;
    this.columns = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.indeterminate = undefined;
    this.label = undefined;
    this.options = [];
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';

    this.clearOption();
  }

  private clearOption() {
    this.option = { label: undefined, value: undefined };
  }
}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-labs"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel),r(),m("ngClass",P(4,ye,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,de],encapsulation:2})}return a})();var se=(()=>{class a{poNotification=Q(te);attempts;expiration;maxAttempts;periodExpiration;auditOptions=[{value:"1",label:"Functional menu"},{value:"2",label:"Online panel"},{value:"3",label:"Internet browser"},{value:"4",label:"Browser details"},{value:"5",label:"Transparent panel"},{value:"6",label:"Browser refresh"}];systemOptions=[{value:"1",label:"Audit updates in the data dictionary"},{value:"2",label:"Audit updates in the user registry"},{value:"3",label:"Audit authentication / access"},{value:"4",label:"Audit rejection of access to resources"}];confirm(){this.poNotification.success("Settings saved successfully!")}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=x({type:a,selectors:[["sample-po-checkbox-group-password-policy"]],standalone:!1,decls:19,vars:7,consts:[["g","ngForm"],[1,"po-font-subtitle"],[1,"po-row"],["name","system","p-label","System features",1,"po-lg-12",3,"p-options"],["name","audit","p-label","Audit rules",1,"po-lg-12",3,"p-options"],["name","expiration","p-label","Password expiration","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","periodExpiration","p-label","Period (in days)","p-maxlength","3",1,"po-lg-6",3,"p-disabled"],["name","attempts","p-label","Restrict access attempts","p-label-off","Desactive","p-label-on","Actived",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","maxAttempts","p-label","Maximum number of attempts","p-maxlength","3",1,"po-lg-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Apply password policy",1,"po-offset-lg-9","po-lg-3","po-offset-xl-9",3,"p-click"]],template:function(p,n){if(p&1){let s=D();o(0,"div",1),e(1,"Password Rules"),t(),i(2,"po-divider"),o(3,"form",null,0)(5,"div",2),i(6,"po-checkbox-group",3),t(),i(7,"po-divider"),o(8,"div",2),i(9,"po-checkbox-group",4),t(),i(10,"po-divider"),o(11,"div",2)(12,"po-switch",5),g("ngModelChange",function(l){return u(s),E(n.expiration,l)||(n.expiration=l),b(l)}),t(),i(13,"po-number",6),t(),o(14,"div",2)(15,"po-switch",7),g("ngModelChange",function(l){return u(s),E(n.attempts,l)||(n.attempts=l),b(l)}),t(),o(16,"po-number",8),g("ngModelChange",function(l){return u(s),E(n.maxAttempts,l)||(n.maxAttempts=l),b(l)}),t()(),o(17,"div",2)(18,"po-button",9),S("p-click",function(){return n.confirm()}),t()()()}p&2&&(r(6),m("p-options",n.systemOptions),r(3),m("p-options",n.auditOptions),r(3),h("ngModel",n.expiration),r(),m("p-disabled",!n.expiration),r(2),h("ngModel",n.attempts),r(),h("ngModel",n.maxAttempts),m("p-disabled",!n.attempts))},dependencies:[V,q,L,A,F,W,B,M,ne,z],encapsulation:2})}return a})();var Me=a=>({"docs-sample-code-tabs":a}),ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=x({type:a,selectors:[["sample-po-checkbox-group-password-policy-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(i(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Group \u2013 Security policy"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),i(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-font-subtitle">Password Rules</div>

<po-divider />

<form #g="ngForm">
  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="system" p-label="System features" [p-options]="systemOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-checkbox-group class="po-lg-12" name="audit" p-label="Audit rules" [p-options]="auditOptions">
    </po-checkbox-group>
  </div>

  <po-divider />

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="expiration"
      [(ngModel)]="expiration"
      p-label="Password expiration"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="periodExpiration"
      p-label="Period (in days)"
      p-maxlength="3"
      [p-disabled]="!expiration"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-switch
      class="po-lg-6"
      name="attempts"
      [(ngModel)]="attempts"
      p-label="Restrict access attempts"
      p-label-off="Desactive"
      p-label-on="Actived"
    >
    </po-switch>

    <po-number
      class="po-lg-6"
      name="maxAttempts"
      [(ngModel)]="maxAttempts"
      p-label="Maximum number of attempts"
      p-maxlength="3"
      [p-disabled]="!attempts"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-offset-lg-9 po-lg-3 po-offset-xl-9" p-label="Apply password policy" (p-click)="confirm()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-group-password-policy/sample-po-checkbox-group-password-policy.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoCheckboxGroupOption } from '@po-ui/ng-components';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-group-password-policy',
  templateUrl: './sample-po-checkbox-group-password-policy.component.html',
  standalone: false
})
export class SamplePoCheckboxGroupPasswordPolicyComponent {
  private poNotification = inject(PoNotificationService);

  attempts: number;
  expiration: number;
  maxAttempts: boolean;
  periodExpiration: boolean;

  public readonly auditOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Functional menu' },
    { value: '2', label: 'Online panel' },
    { value: '3', label: 'Internet browser' },
    { value: '4', label: 'Browser details' },
    { value: '5', label: 'Transparent panel' },
    { value: '6', label: 'Browser refresh' }
  ];

  public readonly systemOptions: Array<PoCheckboxGroupOption> = [
    { value: '1', label: 'Audit updates in the data dictionary' },
    { value: '2', label: 'Audit updates in the user registry' },
    { value: '3', label: 'Audit authentication / access' },
    { value: '4', label: 'Audit rejection of access to resources' }
  ];

  confirm() {
    this.poNotification.success('Settings saved successfully!');
  }
}
`),t()()()()(),o(21,"div",10),i(22,"sample-po-checkbox-group-password-policy"),t(),i(23,"hr")),p&2&&(r(5),w("po-icon "+n.sampleCodeButtonIcon),r(),y(" ",n.sampleCodeButtonLabel),r(),m("ngClass",P(4,Me,n.hideSampleCodeTabs)))},dependencies:[_,k,v,C,se],encapsulation:2})}return a})();var ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=x({type:a,selectors:[["sample-po-checkbox-group-doc"]],standalone:!1,decls:867,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-radio-group"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoCheckboxGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox-group"),t(),e(26,` exibe uma lista de m\xFAltipla escolha onde o usu\xE1rio pode marcar e desmarcar,
utilizando a tecla de espa\xE7o ou o clique do mouse, v\xE1rias op\xE7\xF5es.`),t(),o(27,"blockquote")(28,"p"),e(29,"Para sele\xE7\xE3o \xFAnica, utilize o "),o(30,"a",6)(31,"strong"),e(32,"PO Radio Group"),t()(),e(33,"."),t()(),o(34,"p"),e(35,"Por padr\xE3o, o po-checkbox-group retorna um array com os valores dos itens selecionados para o model."),t(),o(36,"pre")(37,"code"),e(38,`favorites = ['PO', 'Angular'];
`),t()(),o(39,"p"),e(40,`Na maioria das situa\xE7\xF5es, o array com os objetos setados j\xE1 atende as necessidades mas, caso o desenvolvedor
tenha necessidade de usar um valor indeterminado (`),o(41,"code"),e(42,"null"),t(),e(43,"), ou seja, nem marcado ("),o(44,"code"),e(45,"true"),t(),e(46,") e nem desmarcado ("),o(47,"code"),e(48,"false"),t(),e(49,`),
deve setar a propriedade `),o(50,"code"),e(51,"p-indeterminate"),t(),e(52," como "),o(53,"code"),e(54,"true"),t(),e(55,"."),t(),o(56,"p"),e(57,"Nesse caso, o po-checkbox-group vai retornar um objeto com todas as op\xE7\xF5es dispon\xEDveis e seus valores."),t(),o(58,"pre")(59,"code"),e(60,`favorites = {
 PO: true,
 Angular: true,
 VueJS: false,
 React: null // indeterminado
};
`),t()()(),o(61,"div",7)(62,"h4",8),e(63,"Seletor"),t(),o(64,"pre",9),e(65,`<po-checkbox-group
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-change)="EventEmitter"
    p-columns="number"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-help="string"
    p-indeterminate="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="PoCheckboxGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-checkbox-group>
`),t()(),o(66,"h4",10),e(67,"Propriedades"),t(),o(68,"table",11)(69,"tr",12)(70,"th",13),e(71,"Nome"),t(),o(72,"th",13),e(73,"Tipo"),t(),o(74,"th",13),e(75,"Padr\xE3o"),t(),o(76,"th",13),e(77,"Descri\xE7\xE3o"),t()(),o(78,"tr",14)(79,"td",15)(80,"div",16)(81,"span",17),e(82," (p-additional-help)"),i(83,"br"),t()(),o(84,"div",18),e(85,"Deprecated"),t()(),o(86,"td",19)(87,"code",20),e(88,"EventEmitter"),t()(),o(89,"td",21),e(90,"-"),t(),o(91,"td",22)(92,"em")(93,"strong"),e(94,"(opcional)"),t()(),o(95,"p"),e(96,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),o(97,"blockquote")(98,"p"),e(99,"Essa propriedade est\xE1 "),o(100,"strong"),e(101,"depreciada"),t(),e(102," e ser\xE1 removida na vers\xE3o "),o(103,"code"),e(104,"23.x.x"),t(),e(105,". Recomendamos utilizar a propriedade "),o(106,"code"),e(107,"p-helper"),t(),e(108," que oferece mais recursos e flexibilidade."),t()()()(),o(109,"tr",14)(110,"td",15)(111,"div",23)(112,"span",24),e(113," p-additional-help-tooltip"),i(114,"br"),t()(),o(115,"div",18),e(116,"Deprecated"),t()(),o(117,"td",19)(118,"code",25),e(119,"string"),t()(),o(120,"td",21),e(121,"-"),t(),o(122,"td",22)(123,"em")(124,"strong"),e(125,"(opcional)"),t()(),o(126,"p"),e(127,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),o(128,"code"),e(129,"po-helper"),t(),e(130,`.
`),o(131,"strong"),e(132,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(133,"blockquote")(134,"p"),e(135,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(136,"blockquote")(137,"p"),e(138,"Essa propriedade est\xE1 "),o(139,"strong"),e(140,"depreciada"),t(),e(141," e ser\xE1 removida na vers\xE3o "),o(142,"code"),e(143,"23.x.x"),t(),e(144,". Recomendamos utilizar a propriedade "),o(145,"code"),e(146,"p-helper"),t(),e(147," que oferece mais recursos e flexibilidade."),t()()()(),o(148,"tr",14)(149,"td",15)(150,"div",23)(151,"span",24),e(152," p-append-in-body"),i(153,"br"),t()()(),o(154,"td",19)(155,"code",26),e(156,"boolean"),t()(),o(157,"td",21)(158,"p")(159,"code"),e(160,"false"),t()()(),o(161,"td",22)(162,"em")(163,"strong"),e(164,"(opcional)"),t()(),o(165,"p"),e(166,"Define que o popover ("),o(167,"code"),e(168,"p-helper"),t(),e(169," e/ou "),o(170,"code"),e(171,"p-error-limit"),t(),e(172,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(173,"blockquote")(174,"p"),e(175,"Quando utilizado com "),o(176,"code"),e(177,"p-helper"),t(),e(178,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),o(179,"tr",14)(180,"td",15)(181,"div",23)(182,"span",24),e(183," p-auto-focus"),i(184,"br"),t()()(),o(185,"td",19)(186,"code",26),e(187,"boolean"),t()(),o(188,"td",21)(189,"p")(190,"code"),e(191,"false"),t()()(),o(192,"td",22)(193,"em")(194,"strong"),e(195,"(opcional)"),t()(),o(196,"p"),e(197,"Aplica foco no elemento ao ser iniciado."),t(),o(198,"blockquote")(199,"p"),e(200,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(201,"tr",14)(202,"td",15)(203,"div",16)(204,"span",17),e(205," (p-change)"),i(206,"br"),t()()(),o(207,"td",19)(208,"code",20),e(209,"EventEmitter"),t()(),o(210,"td",21),e(211,"-"),t(),o(212,"td",22)(213,"em")(214,"strong"),e(215,"(opcional)"),t()(),o(216,"p"),e(217,"Evento disparado ao alterar valor do campo"),t()()(),o(218,"tr",14)(219,"td",15)(220,"div",23)(221,"span",24),e(222," p-columns"),i(223,"br"),t()()(),o(224,"td",19)(225,"code",27),e(226,"number"),t()(),o(227,"td",21)(228,"p")(229,"code"),e(230,"2"),t()()(),o(231,"td",22)(232,"em")(233,"strong"),e(234,"(opcional)"),t()(),o(235,"p"),e(236,"Possibilita definir a quantidade de colunas para exibi\xE7\xE3o dos itens do "),o(237,"em"),e(238,"checkbox"),t(),e(239,"."),t(),o(240,"ul")(241,"li"),e(242,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(243,"code"),e(244,"1"),t(),e(245," e "),o(246,"code"),e(247,"4"),t(),e(248," colunas."),t(),o(249,"li"),e(250,"Para resolu\xE7\xE3o "),o(251,"code"),e(252,"sm"),t(),e(253," a colunagem invariavelmente passa para "),o(254,"code"),e(255,"1"),t(),e(256," coluna."),t(),o(257,"li"),e(258,"Quando se trata de resolu\xE7\xE3o "),o(259,"code"),e(260,"md"),t(),e(261," e o valor estabelecido para colunas for superior a "),o(262,"code"),e(263,"2"),t(),e(264,`,
o `),o(265,"em"),e(266,"grid system"),t(),e(267," ser\xE1 composto por "),o(268,"code"),e(269,"2"),t(),e(270," colunas."),t(),o(271,"li"),e(272,"Para evitar a quebra de linha, prefira a utiliza\xE7\xE3o de "),o(273,"code"),e(274,"1"),t(),e(275," coluna para op\xE7\xF5es com textos grandes."),t()()()(),o(276,"tr",14)(277,"td",15)(278,"div",23)(279,"span",24),e(280," p-compact-label"),i(281,"br"),t()()(),o(282,"td",19)(283,"code",26),e(284,"boolean"),t()(),o(285,"td",21)(286,"p")(287,"code"),e(288,"false"),t()()(),o(289,"td",22)(290,"em")(291,"strong"),e(292,"(opcional)"),t()(),o(293,"p"),e(294,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),o(295,"p"),e(296,"Quando habilitado ("),o(297,"code"),e(298,"true"),t(),e(299,"), o modo compacto afeta o conjunto composto por:"),t(),o(300,"ul")(301,"li")(302,"code"),e(303,"po-label"),t()(),o(304,"li")(305,"code"),e(306,"p-requirement (showRequired)"),t()(),o(307,"li")(308,"code"),e(309,"po-helper"),t()()(),o(310,"p"),e(311,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),o(312,"p"),e(313,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),o(314,"ul")(315,"li")(316,"code"),e(317,"--field-container-title-justify"),t()(),o(318,"li")(319,"code"),e(320,"--field-container-title-flex"),t()()(),o(321,"p"),e(322,"Exemplo:"),t(),o(323,"pre")(324,"code"),e(325,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),o(326,"p"),e(327,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),o(328,"tr",14)(329,"td",15)(330,"div",23)(331,"span",24),e(332," p-disabled"),i(333,"br"),t()()(),o(334,"td",19)(335,"code",26),e(336,"boolean"),t()(),o(337,"td",21)(338,"p")(339,"code"),e(340,"false"),t()()(),o(341,"td",22)(342,"em")(343,"strong"),e(344,"(opcional)"),t()(),o(345,"p"),e(346,"Desabilita todos os itens do checkbox."),t()()(),o(347,"tr",14)(348,"td",15)(349,"div",23)(350,"span",24),e(351," p-error-limit"),i(352,"br"),t()()(),o(353,"td",19)(354,"code",26),e(355,"boolean"),t()(),o(356,"td",21)(357,"p")(358,"code"),e(359,"false"),t()()(),o(360,"td",22)(361,"em")(362,"strong"),e(363,"(opcional)"),t()(),o(364,"p"),e(365,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(366,"blockquote")(367,"p"),e(368,"Caso essa propriedade seja definida como "),o(369,"code"),e(370,"true"),t(),e(371,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(372,"tr",14)(373,"td",15)(374,"div",23)(375,"span",24),e(376," p-field-error-message"),i(377,"br"),t()()(),o(378,"td",19)(379,"code",25),e(380,"string"),t()(),o(381,"td",21),e(382,"-"),t(),o(383,"td",22)(384,"em")(385,"strong"),e(386,"(opcional)"),t()(),o(387,"p"),e(388,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(389,"blockquote")(390,"p"),e(391,"Necess\xE1rio que a propriedade "),o(392,"code"),e(393,"p-required"),t(),e(394," esteja habilitada."),t()()()(),o(395,"tr",14)(396,"td",15)(397,"div",23)(398,"span",24),e(399," p-help"),i(400,"br"),t()()(),o(401,"td",19)(402,"code",25),e(403,"string"),t()(),o(404,"td",21),e(405,"-"),t(),o(406,"td",22)(407,"em")(408,"strong"),e(409,"(opcional)"),t()(),o(410,"p"),e(411,"Texto de apoio do campo"),t()()(),o(412,"tr",14)(413,"td",15)(414,"div",23)(415,"span",24),e(416," p-indeterminate"),i(417,"br"),t()()(),o(418,"td",19)(419,"code",26),e(420,"boolean"),t()(),o(421,"td",21)(422,"p")(423,"code"),e(424,"false"),t()()(),o(425,"td",22)(426,"em")(427,"strong"),e(428,"(opcional)"),t()(),o(429,"p"),e(430,"Caso exista a necessidade de usar o valor indeterminado ("),o(431,"code"),e(432,"null"),t(),e(433,`) dentro da lista de op\xE7\xF5es, \xE9 necess\xE1rio setar
a propriedade `),o(434,"code"),e(435,"p-indeterminate"),t(),e(436," como "),o(437,"code"),e(438,"true"),t(),e(439,", por padr\xE3o essa propriedade vem desabilitada ("),o(440,"code"),e(441,"false"),t(),e(442,")."),t(),o(443,"p"),e(444,"Quando essa propriedade \xE9 setada como "),o(445,"code"),e(446,"true"),t(),e(447,", o "),o(448,"em"),e(449,"po-checkbox-group"),t(),e(450,` passa a devolver um objeto completo para o
`),o(451,"code"),e(452,"ngModel"),t(),e(453,", diferente do array que cont\xE9m apenas os valores selecionados."),t()()(),o(454,"tr",14)(455,"td",15)(456,"div",16)(457,"span",17),e(458," (p-keydown)"),i(459,"br"),t()()(),o(460,"td",19)(461,"code",20),e(462,"EventEmitter"),t()(),o(463,"td",21),e(464,"-"),t(),o(465,"td",22)(466,"em")(467,"strong"),e(468,"(opcional)"),t()(),o(469,"p"),e(470,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(471,"code"),e(472,"KeyboardEvent"),t(),e(473," com informa\xE7\xF5es sobre a tecla."),t()()(),o(474,"tr",14)(475,"td",15)(476,"div",23)(477,"span",24),e(478," p-label"),i(479,"br"),t()()(),o(480,"td",19)(481,"code",25),e(482,"string"),t()(),o(483,"td",21),e(484,"-"),t(),o(485,"td",22)(486,"em")(487,"strong"),e(488,"(opcional)"),t()(),o(489,"p"),e(490,"Label do campo"),t()()(),o(491,"tr",14)(492,"td",15)(493,"div",23)(494,"span",24),e(495," p-label-text-wrap"),i(496,"br"),t()()(),o(497,"td",19)(498,"code",26),e(499,"boolean"),t()(),o(500,"td",21)(501,"p")(502,"code"),e(503,"false"),t()()(),o(504,"td",22)(505,"em")(506,"strong"),e(507,"(opcional)"),t()(),o(508,"p"),e(509,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(510,"code"),e(511,"p-label"),t(),e(512,". Quando "),o(513,"code"),e(514,"p-label-text-wrap"),t(),e(515,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(516,"tr",14)(517,"td",15)(518,"div",23)(519,"span",24),e(520," name"),i(521,"br"),t()()(),o(522,"td",19)(523,"code",25),e(524,"string"),t()(),o(525,"td",21),e(526,"-"),t(),o(527,"td",22)(528,"p"),e(529,"Nome dos checkboxes"),t()()(),o(530,"tr",14)(531,"td",15)(532,"div",16)(533,"span",17),e(534," (ngModelChange)"),i(535,"br"),t()()(),o(536,"td",19)(537,"code",20),e(538,"EventEmitter"),t()(),o(539,"td",21),e(540,"-"),t(),o(541,"td",22)(542,"em")(543,"strong"),e(544,"(opcional)"),t()(),o(545,"p"),e(546,"Fun\xE7\xE3o para atualizar o "),o(547,"code"),e(548,"ngModel"),t(),e(549," do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),o(550,"p"),e(551,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(552,"code"),e(553,"strictTemplates"),t(),e(554,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),o(555,"pre")(556,"code"),e(557,`<po-checkbox-group ... [ngModel]="checkboxgroupModel" (ngModelChange)="checkboxgroupModel = $event"> </po-checkbox-group>
`),t()()()(),o(558,"tr",14)(559,"td",15)(560,"div",23)(561,"span",24),e(562," p-optional"),i(563,"br"),t()()(),o(564,"td",19)(565,"code",26),e(566,"boolean"),t()(),o(567,"td",21)(568,"p")(569,"code"),e(570,"false"),t()()(),o(571,"td",22)(572,"em")(573,"strong"),e(574,"(opcional)"),t()(),o(575,"p"),e(576,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(577,"blockquote")(578,"p"),e(579,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(580,"ul")(581,"li"),e(582,"O campo conter "),o(583,"code"),e(584,"p-required"),t(),e(585,";"),t(),o(586,"li"),e(587,"N\xE3o possuir "),o(588,"code"),e(589,"p-help"),t(),e(590," e/ou "),o(591,"code"),e(592,"p-label"),t(),e(593,"."),t()()()(),o(594,"tr",14)(595,"td",15)(596,"div",23)(597,"span",24),e(598," p-options"),i(599,"br"),t()()(),o(600,"td",19)(601,"code",28),e(602,"PoCheckboxGroupOption[]"),t()(),o(603,"td",21),e(604,"-"),t(),o(605,"td",22)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),o(609,"p"),e(610,`Lista de op\xE7\xF5es que ser\xE3o exibidas
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoCheckboxGroupOption`),t()()(),o(611,"tr",14)(612,"td",15)(613,"div",23)(614,"span",24),e(615," p-helper"),i(616,"br"),t()()(),o(617,"td",19)(618,"code",29),e(619,"PoHelperOptions "),t(),o(620,"code",25),e(621," string"),t()(),o(622,"td",21),e(623,"-"),t(),o(624,"td",22)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),o(628,"p"),e(629,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),o(630,"code"),e(631,"p-label"),t(),e(632," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),o(633,"code"),e(634,"p-label"),t(),e(635,"."),t(),o(636,"blockquote")(637,"p"),e(638,"Para mais informa\xE7\xF5es acesse: "),o(639,"a",30),e(640,"https://po-ui.io/documentation/po-helper"),t(),e(641,"."),t()(),o(642,"blockquote")(643,"p"),e(644,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),o(645,"code"),e(646,"p-additional-help-tooltip"),t(),e(647," e "),o(648,"code"),e(649,"p-additional-help"),t(),e(650,") ser\xE1 ignorado."),t()()()(),o(651,"tr",14)(652,"td",15)(653,"div",23)(654,"span",24),e(655," p-required"),i(656,"br"),t()()(),o(657,"td",19)(658,"code",26),e(659,"boolean"),t()(),o(660,"td",21)(661,"p")(662,"code"),e(663,"false"),t()()(),o(664,"td",22)(665,"em")(666,"strong"),e(667,"(opcional)"),t()(),o(668,"p"),e(669,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(670,"tr",14)(671,"td",15)(672,"div",23)(673,"span",24),e(674," p-show-required"),i(675,"br"),t()()(),o(676,"td",19)(677,"code",26),e(678,"boolean"),t()(),o(679,"td",21),e(680,"-"),t(),o(681,"td",22)(682,"p"),e(683,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(684,"blockquote")(685,"p"),e(686,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(687,"ul")(688,"li"),e(689,"N\xE3o possuir "),o(690,"code"),e(691,"p-help"),t(),e(692," e/ou "),o(693,"code"),e(694,"p-label"),t(),e(695,"."),t()()()(),o(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),e(700," p-size"),i(701,"br"),t()()(),o(702,"td",19)(703,"code",25),e(704,"string"),t()(),o(705,"td",21)(706,"p")(707,"code"),e(708,"medium"),t()()(),o(709,"td",22)(710,"em")(711,"strong"),e(712,"(opcional)"),t()(),o(713,"p"),e(714,"Define o tamanho dos checkboxes do componente:"),t(),o(715,"ul")(716,"li")(717,"code"),e(718,"small"),t(),e(719,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(720,"li")(721,"code"),e(722,"medium"),t(),e(723,": 24x24."),t()(),o(724,"blockquote")(725,"p"),e(726,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(727,"code"),e(728,"medium"),t(),e(729,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(730,"a",31),e(731,"po-theme"),t(),e(732,"."),t()()()()(),o(733,"h3",10),e(734,"M\xE9todos"),t(),o(735,"table",32)(736,"tr",14)(737,"th",33)(738,"div",23)(739,"h4")(740,"span",24),e(741," focus "),t()()()()(),o(742,"tr",22)(743,"td",22)(744,"p"),e(745,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(746,"p"),e(747,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(748,"pre")(749,"code"),e(750,`import { PoCheckboxGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxGroupComponent, { static: true }) checkbox: PoCheckboxGroupComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),i(751,"br"),o(752,"table",32)(753,"tr",14)(754,"th",33)(755,"div",23)(756,"h4")(757,"span",24),e(758," showAdditionalHelp "),t()()()()(),o(759,"tr",22)(760,"td",22)(761,"p"),e(762,"M\xE9todo que exibe "),o(763,"code"),e(764,"p-helper"),t(),e(765," ou executa a a\xE7\xE3o definida em "),o(766,"code"),e(767,"p-helper{eventOnClick}"),t(),e(768," ou em "),o(769,"code"),e(770,"p-additionalHelp"),t(),e(771,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(772,"code"),e(773,"p-keydown"),t(),e(774,"."),t(),o(775,"blockquote")(776,"p"),e(777,"Exibe ou oculta o conte\xFAdo do componente "),o(778,"code"),e(779,"po-helper"),t(),e(780," quando o componente estiver com foco."),t()(),o(781,"pre")(782,"code"),e(783,`//Exemplo com p-label e p-helper
<po-checkbox-group
 #checkboxGroup
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkboxGroup)"
></po-checkbox-group>
`),t()(),o(784,"pre")(785,"code"),e(786,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),i(787,"br"),o(788,"h3"),e(789,"Interfaces"),t(),o(790,"h4",34)(791,"code",5),e(792,"PoCheckboxGroupOption"),t()(),o(793,"div",2)(794,"p"),e(795,"Interface para as a\xE7\xF5es do componente po-checkbox-group."),t()(),o(796,"h4",10),e(797,"Propriedades"),t(),o(798,"table",11)(799,"tr",12)(800,"th",13),e(801,"Nome"),t(),o(802,"th",13),e(803,"Tipo"),t(),o(804,"th",13),e(805,"Descri\xE7\xE3o"),t()(),o(806,"tr",14)(807,"td",15)(808,"div",23)(809,"span",24),e(810," disabled"),i(811,"br"),t()()(),o(812,"td",19)(813,"code",26),e(814,"boolean"),t()(),o(815,"td",22)(816,"em")(817,"strong"),e(818,"(opcional)"),t()(),o(819,"p"),e(820,"Desabilita o checkbox, por padr\xE3o as op\xE7\xF5es sempre estar\xE3o habilitadas para o usu\xE1rio."),t(),o(821,"p"),e(822,`Mesmo desabilitado o desenvolvedor pode alterar o valor do item via c\xF3digo, mas n\xE3o ser\xE1 permitido ao
usu\xE1rio alterar a condi\xE7\xE3o do checkbox.`),t()()(),o(823,"tr",14)(824,"td",15)(825,"div",23)(826,"span",24),e(827," label"),i(828,"br"),t()()(),o(829,"td",19)(830,"code",25),e(831,"string"),t()(),o(832,"td",22)(833,"p"),e(834,"Texto exibido para o usu\xE1rio ao lado do checkbox."),t()()(),o(835,"tr",14)(836,"td",15)(837,"div",23)(838,"span",24),e(839," value"),i(840,"br"),t()()(),o(841,"td",19)(842,"code",25),e(843,"string"),t()(),o(844,"td",22)(845,"p"),e(846,"Valor retornado no model."),t(),o(847,"p"),e(848,"\xC9 poss\xEDvel usar os valores "),o(849,"code"),e(850,"true"),t(),e(851," e "),o(852,"code"),e(853,"false"),t(),e(854,", caso a propriedade "),o(855,"code"),e(856,"p-indeterminate"),t(),e(857," esteja setada como "),o(858,"code"),e(859,"true"),t(),e(860,`
passa a aceitar `),o(861,"code"),e(862,"null"),t(),e(863," tamb\xE9m, por padr\xE3o esse valor sempre ser\xE1 setado como "),o(864,"code"),e(865,"false"),t(),e(866,"."),t()()()()())},dependencies:[k],encapsulation:2})}return a})();var be=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,p){this.route=d,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let p=d.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(N(Z),N($))};static \u0275cmp=x({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),i(3,"sample-po-checkbox-group-doc"),t(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),i(5,"sample-po-checkbox-group-basic-view")(6,"sample-po-checkbox-group-labs-view")(7,"sample-po-checkbox-group-password-policy-view"),t()()()),p&2&&(m("p-actions",n.actions),r(2),m("p-active",n.activeTab==="doc"),r(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,v,C,re,me,ce,ue],encapsulation:2})}return a})();var Oe=[{path:"",component:be}],xe=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=O({type:a});static \u0275inj=T({imports:[R.forChild(Oe),R]})}return a})();var it=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=O({type:a});static \u0275inj=T({imports:[le,xe]})}return a})();export{it as DocPoCheckboxGroupModule};
