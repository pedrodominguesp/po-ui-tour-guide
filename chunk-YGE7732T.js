import{o as w,p as Ne}from"./chunk-WYOAC7KN.js";import{F as de,G as T,Ha as Ve,Hb as x,Ia as qe,Ib as y,Ja as ue,Mb as te,S as Le,Sa as De,U as Oe,W as $,Ya as K,Za as Fe,_ as se,a as pe,bb as W,r as me,ub as We,w as Q,ya as ce,za as ee}from"./chunk-XOCFD5XY.js";import{Ea as s,Fa as o,Ga as t,H as Ee,Ha as l,I as ie,Jc as we,L,Mb as M,Mc as O,Nc as F,O as h,Oa as H,Oc as R,P as f,Pa as S,Pc as q,Qc as U,Ra as re,Tc as _e,Uc as Pe,Va as Y,Vb as X,Wa as A,Xa as I,Yc as Me,Zb as ye,_a as G,bb as _,cb as e,cd as Te,db as ne,eb as v,ed as ke,gb as u,gd as he,ha as r,hb as b,ib as g,ma as be,mb as Ce,mc as Z,oa as E,pa as ae,pb as ve,qb as ge,rb as P,sb as xe,ta as le,xb as j,ya as N,yb as z,za as B}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var nt=()=>({value:"Option 1"}),it=()=>({value:"Option 2"}),at=(a,V)=>[a,V],Be=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","combo","p-label","PO Combo",3,"p-options"]],template:function(p,n){p&1&&l(0,"po-combo",0),p&2&&s("p-options",xe(3,at,ge(1,nt),ge(2,it)))},dependencies:[T],encapsulation:2})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),He=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo Basic"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-basic/sample-po-combo-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{ value: 'Option 1' }, { value: 'Option 2' }]"> </po-combo>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-basic/sample-po-combo-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-combo-basic',
  templateUrl: './sample-po-combo-basic.component.html',
  standalone: false
})
export class SamplePoComboBasicComponent {}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-basic"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel),r(),s("ngClass",P(4,rt,n.hideSampleCodeTabs)))},dependencies:[M,w,x,y,Be],encapsulation:2})}return a})();var Ae=(()=>{class a{helperText;combo;comboOptionGroupSwitch;customLiterals;debounceTime;event;fieldLabel;fieldValue;filterMinlength;filterMode;filterService;help;icon;label;literals;optionsGroup;optionsGroupList;placeholder;properties;fieldErrorMessage;option;options;selectedOptionsGroup;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];iconsOptions=[{label:"an an-building-apartment",value:"an an-building-apartment"},{label:"an an-gas-pump",value:"an an-gas-pump"},{label:"fa fa-calculator",value:"fa fa-calculator"}];propertiesOptions=[{value:"changeOnEnter",label:"Change On Enter"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"disabledInitFilter",label:"Disabled Init Filter"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"sort",label:"Sort"},{value:"clean",label:"Clean"},{value:"disabledTabFilter",label:"Disabled Tab Filter"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0}}changeEvent(m){this.event=m}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(m){this.customLiterals=void 0}}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText="",this.combo=void 0,this.comboOptionGroupSwitch=!1,this.customLiterals=void 0,this.event="",this.debounceTime=void 0,this.fieldLabel="",this.fieldValue="",this.filterMinlength=void 0,this.filterService="",this.filterMode=void 0,this.help=void 0,this.label=void 0,this.literals="",this.icon=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.selectedOptionsGroup=void 0,this.size="medium"}insertGroupIntoSelectInput(m){this.selectedOptionsGroup=m,this.optionsGroupList=[...this.optionsGroupList,{label:m,value:m}]}verifyOptionObject(m,p,n){let{label:d,value:c}=p;if(n){let i=m.findIndex(Se=>Se.label===n&&"options"in Se);return i===-1?(this.insertGroupIntoSelectInput(n),[...m,{label:n,options:[{label:d,value:c}]}]):(m[i].options.push({label:d,value:c}),m)}return[...m,{label:d,value:c}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs"]],standalone:!1,decls:44,vars:62,consts:[["fOption","ngForm"],["f","ngForm"],["name","combo",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-change-on-enter","p-clean","p-debounce-time","p-disabled","p-disabled-init-filter","p-disabled-tab-filter","p-field-label","p-field-value","p-filter-minlength","p-filter-mode","p-filter-service","p-help","p-icon","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-required","p-field-error-message","p-show-required","p-sort","p-size","p-error-limit","p-label-text-wrap","p-compact-label","p-listbox-control-position"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po combo options group"],["name","comboOptionGroupSwitch","p-label","Combo options group",1,"po-lg-4","po-md-12",3,"ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po combo options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-columns","4","p-label","Icon",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter Mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","debounceTime","p-clean","","p-label","Debounce Time",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterMinlength","p-clean","","p-label","Filter Min Length",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(p,n){if(p&1){let d=H();o(0,"po-combo",2),g("ngModelChange",function(i){return h(d),b(n.combo,i)||(n.combo=i),f(i)}),S("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),t(),l(1,"po-divider"),o(2,"div",3),l(3,"po-info",4)(4,"po-info",5),t(),l(5,"po-divider"),o(6,"form",null,0),l(8,"po-divider",6),o(9,"div",3)(10,"po-switch",7),g("ngModelChange",function(i){return h(d),b(n.comboOptionGroupSwitch,i)||(n.comboOptionGroupSwitch=i),f(i)}),t(),o(11,"po-select",8),g("ngModelChange",function(i){return h(d),b(n.selectedOptionsGroup,i)||(n.selectedOptionsGroup=i),f(i)}),S("p-change",function(){return n.optionsGroupSelection()}),t(),o(12,"po-input",9),g("ngModelChange",function(i){return h(d),b(n.optionsGroup,i)||(n.optionsGroup=i),f(i)}),t()(),l(13,"po-divider",10),o(14,"div",3)(15,"po-input",11),g("ngModelChange",function(i){return h(d),b(n.option.label,i)||(n.option.label=i),f(i)}),t(),o(16,"po-input",12),g("ngModelChange",function(i){return h(d),b(n.option.value,i)||(n.option.value=i),f(i)}),t()(),o(17,"div",3)(18,"po-button",13),S("p-click",function(){return n.addOption()}),t()()(),l(19,"po-divider"),o(20,"form",null,1)(22,"po-input",14),g("ngModelChange",function(i){return h(d),b(n.label,i)||(n.label=i),f(i)}),t(),o(23,"po-input",15),g("ngModelChange",function(i){return h(d),b(n.help,i)||(n.help=i),f(i)}),t(),o(24,"po-input",16),g("ngModelChange",function(i){return h(d),b(n.helperText,i)||(n.helperText=i),f(i)}),t(),o(25,"po-input",17),g("ngModelChange",function(i){return h(d),b(n.placeholder,i)||(n.placeholder=i),f(i)}),t(),o(26,"po-input",18),g("ngModelChange",function(i){return h(d),b(n.fieldErrorMessage,i)||(n.fieldErrorMessage=i),f(i)}),t(),o(27,"div",3)(28,"po-checkbox-group",19),g("ngModelChange",function(i){return h(d),b(n.properties,i)||(n.properties=i),f(i)}),t(),o(29,"po-radio-group",20),g("ngModelChange",function(i){return h(d),b(n.icon,i)||(n.icon=i),f(i)}),t(),o(30,"po-radio-group",21),g("ngModelChange",function(i){return h(d),b(n.filterMode,i)||(n.filterMode=i),f(i)}),t(),o(31,"po-radio-group",22),g("ngModelChange",function(i){return h(d),b(n.size,i)||(n.size=i),f(i)}),t(),o(32,"po-radio-group",23),g("ngModelChange",function(i){return h(d),b(n.listboxPosition,i)||(n.listboxPosition=i),f(i)}),t()(),o(33,"div",3)(34,"po-input",24),g("ngModelChange",function(i){return h(d),b(n.filterService,i)||(n.filterService=i),f(i)}),t(),o(35,"po-input",25),g("ngModelChange",function(i){return h(d),b(n.literals,i)||(n.literals=i),f(i)}),S("p-change",function(){return n.changeLiterals()}),t()(),o(36,"div",3)(37,"po-input",26),g("ngModelChange",function(i){return h(d),b(n.fieldValue,i)||(n.fieldValue=i),f(i)}),t(),o(38,"po-input",27),g("ngModelChange",function(i){return h(d),b(n.fieldLabel,i)||(n.fieldLabel=i),f(i)}),t()(),o(39,"div",3)(40,"po-number",28),g("ngModelChange",function(i){return h(d),b(n.debounceTime,i)||(n.debounceTime=i),f(i)}),t(),o(41,"po-number",29),g("ngModelChange",function(i){return h(d),b(n.filterMinlength,i)||(n.filterMinlength=i),f(i)}),t()(),o(42,"div",3)(43,"po-button",30),S("p-click",function(){return n.restore()}),t()()()}if(p&2){let d=G(7);u("ngModel",n.combo),s("p-helper",n.helperText)("p-change-on-enter",n.properties.includes("changeOnEnter"))("p-clean",n.properties.includes("clean"))("p-debounce-time",n.debounceTime)("p-disabled",n.properties.includes("disabled"))("p-disabled-init-filter",n.properties.includes("disableInitFilter"))("p-disabled-tab-filter",n.properties.includes("disabledTabFilter"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-minlength",n.filterMinlength)("p-filter-mode",n.filterMode)("p-filter-service",n.filterService)("p-help",n.help)("p-icon",n.icon)("p-label",n.label)("p-literals",n.customLiterals)("p-loading",n.properties.includes("loading"))("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-sort",n.properties.includes("sort"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel"))("p-listbox-control-position",n.listboxPosition),r(3),s("p-value",n.combo),r(),s("p-value",n.event),r(6),u("ngModel",n.comboOptionGroupSwitch),r(),u("ngModel",n.selectedOptionsGroup),s("p-disabled",!n.comboOptionGroupSwitch)("p-options",n.optionsGroupList),r(),u("ngModel",n.optionsGroup),s("p-disabled",!n.comboOptionGroupSwitch),r(3),u("ngModel",n.option.label),r(),u("ngModel",n.option.value),r(2),s("p-disabled",d.form.invalid),r(4),u("ngModel",n.label),r(),u("ngModel",n.help),r(),u("ngModel",n.helperText),r(),u("ngModel",n.placeholder),r(),u("ngModel",n.fieldErrorMessage),r(2),u("ngModel",n.properties),s("p-options",n.propertiesOptions),r(),u("ngModel",n.icon),s("p-options",n.iconsOptions),r(),u("ngModel",n.filterMode),s("p-options",n.filterModeOptions),r(),u("ngModel",n.size),s("p-options",n.sizeOptions),r(),u("ngModel",n.listboxPosition),s("p-options",n.listboxPositionOptions),r(2),u("ngModel",n.filterService),r(),u("ngModel",n.literals),r(2),u("ngModel",n.fieldValue),r(),u("ngModel",n.fieldLabel),r(2),u("ngModel",n.debounceTime),r(),u("ngModel",n.filterMinlength)}},dependencies:[U,O,F,q,R,Q,pe,Le,Oe,T,ue,De,K,ce,W],encapsulation:2})}return a})();var dt=a=>({"docs-sample-code-tabs":a}),Ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo Labs"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-labs/sample-po-combo-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-combo
  class="po-md-12"
  name="combo"
  [(ngModel)]="combo"
  [p-helper]="helperText"
  [p-change-on-enter]="properties.includes('changeOnEnter')"
  [p-clean]="properties.includes('clean')"
  [p-debounce-time]="debounceTime"
  [p-disabled]="properties.includes('disabled')"
  [p-disabled-init-filter]="properties.includes('disableInitFilter')"
  [p-disabled-tab-filter]="properties.includes('disabledTabFilter')"
  [p-field-label]="fieldLabel"
  [p-field-value]="fieldValue"
  [p-filter-minlength]="filterMinlength"
  [p-filter-mode]="filterMode"
  [p-filter-service]="filterService"
  [p-help]="help"
  [p-icon]="icon"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-placeholder]="placeholder"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-sort]="properties.includes('sort')"
  [p-size]="size"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-listbox-control-position]="listboxPosition"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
>
</po-combo>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="combo"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po combo options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-4 po-md-12"
      name="comboOptionGroupSwitch"
      [(ngModel)]="comboOptionGroupSwitch"
      p-label="Combo options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!comboOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!comboOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po combo options"></po-divider>

  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-2 po-md-4" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

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

  <div class="po-row">
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
      name="icon"
      [(ngModel)]="icon"
      p-columns="4"
      p-label="Icon"
      [p-options]="iconsOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterMode"
      p-columns="4"
      p-label="Filter Mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-lg-6"
      name="listboxPosition"
      [(ngModel)]="listboxPosition"
      p-label="Listbox Position"
      [p-options]="listboxPositionOptions"
    ></po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="filterService"
      [(ngModel)]="filterService"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Filter Service"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

    <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>
  </div>

  <div class="po-row">
    <po-number class="po-md-6" name="debounceTime" [(ngModel)]="debounceTime" p-clean p-label="Debounce Time">
    </po-number>

    <po-number class="po-md-6" name="filterMinlength" [(ngModel)]="filterMinlength" p-clean p-label="Filter Min Length">
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-labs/sample-po-combo-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoComboLiterals,
  PoComboOption,
  PoComboOptionGroup,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-labs',
  templateUrl: './sample-po-combo-labs.component.html',
  standalone: false
})
export class SamplePoComboLabsComponent implements OnInit {
  helperText: string;
  combo: string;
  comboOptionGroupSwitch: boolean;
  customLiterals: PoComboLiterals;
  debounceTime: number;
  event: string;

  fieldLabel: string;
  fieldValue: string;
  filterMinlength: number;
  filterMode: string;
  filterService: string;

  help: string;
  icon: string;
  label: string;
  literals: string;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption>;
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;

  option: PoComboOption;
  options: Array<PoComboOption | PoComboOptionGroup>;
  selectedOptionsGroup: string;
  size: string;

  listboxPosition: string = 'bottom';

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: 'startsWith' },
    { label: 'Contains', value: 'contains' },
    { label: 'Ends With', value: 'endsWith' }
  ];

  public readonly listboxPositionOptions: Array<any> = [
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-building-apartment', value: 'an an-building-apartment' },
    { label: 'an an-gas-pump', value: 'an an-gas-pump' },
    { label: 'fa fa-calculator', value: 'fa fa-calculator' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'changeOnEnter', label: 'Change On Enter' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'disabledInitFilter', label: 'Disabled Init Filter' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'sort', label: 'Sort' },
    { value: 'clean', label: 'Clean' },
    { value: 'disabledTabFilter', label: 'Disabled Tab Filter' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' },
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
    this.options = this.verifyOptionObject(this.options.concat(), this.option, this.optionsGroup);
    this.option = { label: undefined, value: undefined };
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

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.combo = undefined;
    this.comboOptionGroupSwitch = false;
    this.customLiterals = undefined;
    this.event = '';

    this.debounceTime = undefined;
    this.fieldLabel = '';
    this.fieldValue = '';
    this.filterMinlength = undefined;
    this.filterService = '';
    this.filterMode = undefined;

    this.help = undefined;
    this.label = undefined;
    this.literals = '';
    this.icon = undefined;

    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoComboOption | PoComboOptionGroup>,
    option: PoComboOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoComboOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoComboOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-labs"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel),r(),s("ngClass",P(4,dt,n.hideSampleCodeTabs)))},dependencies:[M,w,x,y,Ae],encapsulation:2})}return a})();var fe=(()=>{class a{getcities(){return[{label:"S\xE3o Paulo",options:[{label:"S\xE3o Paulo",value:"sao paulo"},{label:"Campinas",value:"campinas"}]},{label:"Paran\xE1",options:[{label:"S\xE3o Jos\xE9 dos Pinhais",value:"sao jose dos pinhais"},{label:"Londrina",value:"londrina"},{label:"Maring\xE1",value:"maringa"}]},{label:"Santa Catarina",options:[{label:"Joinville",value:"joinville"},{label:"Florian\xF3polis",value:"florianopolis"},{label:"Itaja\xED",value:"itajai"}]}]}getMedicalSpecialty(){return[{specialty:"Allergist",specialtyValue:"allergist"},{specialty:"Cardiologist",specialtyValue:"cardiologist"},{specialty:"General practitioner",specialtyValue:"generalPractitioner"},{specialty:"Dermatologist",specialtyValue:"dermatologist"},{specialty:"Gynecologist",specialtyValue:"gynecologist"},{specialty:"Nutritionist",specialtyValue:"nutritionist"},{specialty:"Pediatrist",specialtyValue:"pediatrist"},{specialty:"Psychiatrist",specialtyValue:"psychiatrist"},{specialty:"Orthopaedist",specialtyValue:"orthopaedist"}]}static \u0275fac=function(p){return new(p||a)};static \u0275prov=Ee({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ct=["schedulingForm"];function ut(a,V){if(a&1&&(o(0,"div",3),l(1,"po-avatar",15),o(2,"p",14),e(3),t()()),a&2){let m=re().$implicit,p=re();r(),s("p-src",p.getStateByLabel(m.label)),r(2),ne(m.label)}}function bt(a,V){if(a&1&&(o(0,"div",14),e(1),t()),a&2){let m=re().$implicit;r(),ne(m.label)}}function gt(a,V){if(a&1&&N(0,ut,4,2,"div",3)(1,bt,2,1,"div",14),a&2){let m=V.$implicit;B(m.options?0:1)}}var Ge=(()=>{class a{poNotification=L(ee);schedulingService=L(fe);form;birthday;citiesOptions;city;email;informations;medicalSpecialty;medicalSpecialtyOptions;name;phone;typeScheduling;typeSchedulings=[{label:"Particular",value:"particular"},{label:"Health Insurance",value:"healthInsurance"}];ngOnInit(){this.citiesOptions=this.schedulingService.getcities(),this.medicalSpecialtyOptions=this.schedulingService.getMedicalSpecialty()}confirmPreAppointment(m=""){this.poNotification.success(`Great ${m}, your pre-appointment was successfully received!`),this.form.reset()}getStateByLabel(m){return`https://thf.totvs.com.br/sample/api/static/assets/${{"S\xE3o Paulo":"sp","Santa Catarina":"sc",Paran\u00E1:"pr"}[m]}.png`}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling"]],viewQuery:function(p,n){if(p&1&&Y(ct,7),p&2){let d;A(d=I())&&(n.form=d.first)}},standalone:!1,features:[ve([fe])],decls:20,vars:12,consts:[["schedulingForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-placeholder","example@domain.com","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","birthday","p-clean","","p-label","Birthday","p-placeholder","dd/mm/yyyy","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","phone","p-clean","","p-label","Phone number","p-mask","(99) 99999-9999","p-placeholder","(99) 99999-9999","p-required","",1,"po-lg-6",3,"ngModelChange","ngModel"],["name","city","p-icon","an an-map-trifold","p-label","Select a location","p-placeholder","Select a location","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-combo-option-template",""],["name","typeScheduling","p-label","Type scheduling","p-required","","p-sort","",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","medicalSpecialty","p-icon","an an-flask","p-label","Medical Specialty/Exam","p-required","","p-sort","","p-field-label","specialty","p-field-value","specialtyValue",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","informations","p-help","Additional informations","p-label","Informations",1,"po-sm-12",3,"ngModelChange","ngModel"],["p-label","Schedule","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-sm-10","po-md-9","po-lg-11"],["p-size","xs",1,"po-sm-2","po-md-3","po-lg-1","sample-combo-avatar-bg",3,"p-src"]],template:function(p,n){if(p&1){let d=H();o(0,"div",1)(1,"div",2),e(2,"Pre-appointment scheduling"),t()(),o(3,"form",null,0)(5,"div",3)(6,"po-input",4),g("ngModelChange",function(i){return h(d),b(n.name,i)||(n.name=i),f(i)}),t(),o(7,"po-email",5),g("ngModelChange",function(i){return h(d),b(n.email,i)||(n.email=i),f(i)}),t()(),o(8,"div",3)(9,"po-datepicker",6),g("ngModelChange",function(i){return h(d),b(n.birthday,i)||(n.birthday=i),f(i)}),t(),o(10,"po-input",7),g("ngModelChange",function(i){return h(d),b(n.phone,i)||(n.phone=i),f(i)}),t()(),o(11,"div",3)(12,"po-combo",8),g("ngModelChange",function(i){return h(d),b(n.city,i)||(n.city=i),f(i)}),le(13,gt,2,1,"ng-template",9),t(),o(14,"po-select",10),g("ngModelChange",function(i){return h(d),b(n.typeScheduling,i)||(n.typeScheduling=i),f(i)}),t(),o(15,"po-combo",11),g("ngModelChange",function(i){return h(d),b(n.medicalSpecialty,i)||(n.medicalSpecialty=i),f(i)}),t()(),o(16,"div",3)(17,"po-textarea",12),g("ngModelChange",function(i){return h(d),b(n.informations,i)||(n.informations=i),f(i)}),t()(),o(18,"div",3)(19,"po-button",13),S("p-click",function(){return n.confirmPreAppointment(n.name)}),t()()()}if(p&2){let d=G(4);r(6),u("ngModel",n.name),r(),u("ngModel",n.email),r(2),u("ngModel",n.birthday),r(),u("ngModel",n.phone),r(2),u("ngModel",n.city),s("p-options",n.citiesOptions),r(2),u("ngModel",n.typeScheduling),s("p-options",n.typeSchedulings),r(),u("ngModel",n.medicalSpecialty),s("p-options",n.medicalSpecialtyOptions),r(2),u("ngModel",n.informations),r(2),s("p-disabled",d.invalid)}},dependencies:[U,O,F,q,R,me,Q,$,T,de,qe,ue,K,Fe],styles:[".sample-combo-avatar-bg[_ngcontent-%COMP%]{background-color:#fbfbfb}"]})}return a})();var ft=a=>({"docs-sample-code-tabs":a}),je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-scheduling-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Scheduling"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-title">Pre-appointment scheduling</div>
</div>

<form #schedulingForm="ngForm">
  <div class="po-row">
    <po-input class="po-lg-6" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>

    <po-email
      class="po-lg-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Email"
      p-placeholder="example@domain.com"
      p-required
    >
    </po-email>
  </div>

  <div class="po-row">
    <po-datepicker
      class="po-lg-6"
      name="birthday"
      [(ngModel)]="birthday"
      p-clean
      p-label="Birthday"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>

    <po-input
      class="po-lg-6"
      name="phone"
      [(ngModel)]="phone"
      p-clean
      p-label="Phone number"
      p-mask="(99) 99999-9999"
      p-placeholder="(99) 99999-9999"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-combo
      class="po-lg-6"
      name="city"
      [(ngModel)]="city"
      p-icon="an an-map-trifold"
      p-label="Select a location"
      p-placeholder="Select a location"
      p-required
      p-sort
      [p-options]="citiesOptions"
    >
      <ng-template p-combo-option-template let-option>
        @if (option.options) {
          <div class="po-row">
            <po-avatar
              class="po-sm-2 po-md-3 po-lg-1 sample-combo-avatar-bg"
              p-size="xs"
              [p-src]="getStateByLabel(option.label)"
            >
            </po-avatar>
            <p class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</p>
          </div>
        } @else {
          <div class="po-sm-10 po-md-9 po-lg-11">{ { option.label }}</div>
        }
      </ng-template>
    </po-combo>

    <po-select
      class="po-lg-6"
      name="typeScheduling"
      [(ngModel)]="typeScheduling"
      p-label="Type scheduling"
      p-required
      p-sort
      [p-options]="typeSchedulings"
    >
    </po-select>

    <po-combo
      class="po-lg-6"
      name="medicalSpecialty"
      [(ngModel)]="medicalSpecialty"
      p-icon="an an-flask"
      p-label="Medical Specialty/Exam"
      p-required
      p-sort
      [p-options]="medicalSpecialtyOptions"
      p-field-label="specialty"
      p-field-value="specialtyValue"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-textarea
      class="po-sm-12"
      name="informations"
      [(ngModel)]="informations"
      p-help="Additional informations"
      p-label="Informations"
    >
    </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Schedule"
      p-kind="primary"
      [p-disabled]="schedulingForm.invalid"
      (p-click)="confirmPreAppointment(name)"
    >
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoComboOption, PoComboOptionGroup, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';
import { SamplePoComboSchedulingService } from './sample-po-combo-scheduling.service';

@Component({
  selector: 'sample-po-combo-scheduling',
  templateUrl: './sample-po-combo-scheduling.component.html',
  styleUrls: ['./sample-po-combo-scheduling.component.css'],
  providers: [SamplePoComboSchedulingService],
  standalone: false
})
export class SamplePoComboSchedulingComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private schedulingService = inject(SamplePoComboSchedulingService);

  @ViewChild('schedulingForm', { static: true }) form: NgForm;

  birthday: string;
  citiesOptions: Array<PoComboOptionGroup>;
  city: string;
  email: string;
  informations: string;
  medicalSpecialty: string;
  medicalSpecialtyOptions: Array<any>;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<PoSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' }
  ];

  ngOnInit() {
    this.citiesOptions = this.schedulingService.getcities();
    this.medicalSpecialtyOptions = this.schedulingService.getMedicalSpecialty();
  }

  confirmPreAppointment(name: string = '') {
    this.poNotification.success(\`Great \${name}, your pre-appointment was successfully received!\`);

    this.form.reset();
  }

  getStateByLabel(state: string) {
    const stateByLabel = {
      ['S\xE3o Paulo']: 'sp',
      ['Santa Catarina']: 'sc',
      ['Paran\xE1']: 'pr'
    };

    return \`https://thf.totvs.com.br/sample/api/static/assets/\${stateByLabel[state]}.png\`;
  }
}
`),t(),o(21,"label",6),e(22,"sample-po-combo-scheduling/sample-po-combo-scheduling.service.ts"),t(),o(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoComboOptionGroup } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoComboSchedulingService {
  getcities(): Array<PoComboOptionGroup> {
    return [
      {
        label: 'S\xE3o Paulo',
        options: [
          { label: 'S\xE3o Paulo', value: 'sao paulo' },
          { label: 'Campinas', value: 'campinas' }
        ]
      },
      {
        label: 'Paran\xE1',
        options: [
          { label: 'S\xE3o Jos\xE9 dos Pinhais', value: 'sao jose dos pinhais' },
          { label: 'Londrina', value: 'londrina' },
          { label: 'Maring\xE1', value: 'maringa' }
        ]
      },
      {
        label: 'Santa Catarina',
        options: [
          { label: 'Joinville', value: 'joinville' },
          { label: 'Florian\xF3polis', value: 'florianopolis' },
          { label: 'Itaja\xED', value: 'itajai' }
        ]
      }
    ];
  }

  getMedicalSpecialty() {
    return [
      { specialty: 'Allergist', specialtyValue: 'allergist' },
      { specialty: 'Cardiologist', specialtyValue: 'cardiologist' },
      { specialty: 'General practitioner', specialtyValue: 'generalPractitioner' },
      { specialty: 'Dermatologist', specialtyValue: 'dermatologist' },
      { specialty: 'Gynecologist', specialtyValue: 'gynecologist' },
      { specialty: 'Nutritionist', specialtyValue: 'nutritionist' },
      { specialty: 'Pediatrist', specialtyValue: 'pediatrist' },
      { specialty: 'Psychiatrist', specialtyValue: 'psychiatrist' },
      { specialty: 'Orthopaedist', specialtyValue: 'orthopaedist' }
    ];
  }
}
`),t()()(),o(25,"po-tab",10)(26,"div")(27,"label",6),e(28,"sample-po-combo-scheduling/sample-po-combo-scheduling.component.css"),t(),o(29,"pre",11),e(30,`.sample-combo-avatar-bg {
  background-color: #fbfbfb;
}
`),t()()()()(),o(31,"div",12),l(32,"sample-po-combo-scheduling"),t(),l(33,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel),r(),s("ngClass",P(4,ft,n.hideSampleCodeTabs)))},dependencies:[M,w,x,y,Ge],encapsulation:2})}return a})();var Et=["transferForm"];function Ct(a,V){if(a&1&&(o(0,"div",3),l(1,"po-avatar",15),o(2,"div",16)(3,"div",17),e(4),t(),o(5,"div",18),e(6),t()()()),a&2){let m=V.$implicit;r(4),ne(m.label),r(2),v("Account: ",m.value)}}var ze=(()=>{class a{poNotification=L(ee);form;poModal;contact;dateTransfer=new Date;typeAccount="Checking Account";value;cancelAction={label:"Cancel",action:()=>this.poModal.close()};confirmAction={label:"Confirm",action:()=>this.confirmTransfer()};typeAccounts=[{label:"Checking Account",value:"Checking Account"},{label:"Savings Account",value:"Savings Account"}];confirmTransfer(){this.poModal.close(),this.poNotification.success("Successful Transfer"),this.formReset()}transfer(){this.poModal.open()}formReset(){this.form.reset({dateTransfer:new Date,typeAccount:"Checking Account"})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer"]],viewQuery:function(p,n){if(p&1&&Y(Et,7)(se,7),p&2){let d;A(d=I())&&(n.form=d.first),A(d=I())&&(n.poModal=d.first)}},standalone:!1,decls:23,vars:15,consts:[["transferForm","ngForm"],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","typeAccount","p-label","From","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","contact","p-field-value","id","p-field-label","name","p-filter-service","https://po-sample-api.onrender.com/v1/people","p-icon","an an-user","p-label","To contact","p-placeholder","Select a contact","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-combo-option-template",""],["name","value","p-clean","","p-label","Value to transfer","p-placeholder","R$ 0,00","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","dateTransfer","p-label","Date to transfer","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Transfer","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Do you confirm transfer?",3,"p-primary-action","p-secondary-action"],["p-label","From",1,"po-md-6",3,"p-value"],["p-label","To",1,"po-md-6",3,"p-value"],["p-label","Value",1,"po-md-6",3,"p-value"],["p-label","Date to transfer",1,"po-md-6",3,"p-value"],["p-size","sm",1,"po-sm-2","po-md-3","po-lg-1"],[1,"po-sm-10","po-md-9","po-lg-11"],[1,"po-font-text-large-bold"],[1,"po-font-text-smaller"]],template:function(p,n){if(p&1){let d=H();o(0,"div",1)(1,"div",2),e(2,"Banking Transfer"),t()(),o(3,"form",null,0)(5,"div",3)(6,"po-select",4),g("ngModelChange",function(i){return h(d),b(n.typeAccount,i)||(n.typeAccount=i),f(i)}),t(),o(7,"po-combo",5),g("ngModelChange",function(i){return h(d),b(n.contact,i)||(n.contact=i),f(i)}),le(8,Ct,7,2,"ng-template",6),t()(),o(9,"div",3)(10,"po-decimal",7),g("ngModelChange",function(i){return h(d),b(n.value,i)||(n.value=i),f(i)}),t(),o(11,"po-datepicker",8),g("ngModelChange",function(i){return h(d),b(n.dateTransfer,i)||(n.dateTransfer=i),f(i)}),t()(),o(12,"div",3)(13,"po-button",9),S("p-click",function(){return n.transfer()}),t()()(),o(14,"po-modal",10)(15,"div",3),l(16,"po-info",11)(17,"po-info",12),t(),l(18,"po-divider"),o(19,"div",3),l(20,"po-info",13)(21,"po-info",14),j(22,"date"),t()()}if(p&2){let d=G(4);r(6),u("ngModel",n.typeAccount),s("p-options",n.typeAccounts),r(),u("ngModel",n.contact),r(3),u("ngModel",n.value),r(),u("ngModel",n.dateTransfer),r(2),s("p-disabled",d.invalid),r(),s("p-primary-action",n.confirmAction)("p-secondary-action",n.cancelAction),r(2),s("p-value",n.typeAccount),r(),s("p-value",n.contact),r(3),s("p-value",n.value),r(),s("p-value",Ce(z(22,13,n.dateTransfer)))}},dependencies:[U,O,F,q,R,me,Q,pe,$,T,de,Ve,K,W,se,ye],encapsulation:2})}return a})();var xt=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-transfer-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Banking Transfer"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-transfer/sample-po-combo-transfer.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-title">Banking Transfer</div>
</div>

<form #transferForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6"
      name="typeAccount"
      [(ngModel)]="typeAccount"
      p-label="From"
      p-required
      [p-options]="typeAccounts"
    >
    </po-select>

    <po-combo
      class="po-md-6"
      name="contact"
      [(ngModel)]="contact"
      p-field-value="id"
      p-field-label="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-icon="an an-user"
      p-label="To contact"
      p-placeholder="Select a contact"
      p-required
    >
      <ng-template p-combo-option-template let-option>
        <div class="po-row">
          <po-avatar class="po-sm-2 po-md-3 po-lg-1" p-size="sm"></po-avatar>

          <div class="po-sm-10 po-md-9 po-lg-11">
            <div class="po-font-text-large-bold">{ { option.label }}</div>
            <div class="po-font-text-smaller">Account: { { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-combo>
  </div>

  <div class="po-row">
    <po-decimal
      class="po-md-6"
      name="value"
      [(ngModel)]="value"
      p-clean
      p-label="Value to transfer"
      p-placeholder="R$ 0,00"
      p-required
    >
    </po-decimal>

    <po-datepicker
      class="po-md-6"
      name="dateTransfer"
      [(ngModel)]="dateTransfer"
      p-label="Date to transfer"
      p-placeholder="dd/mm/yyyy"
      p-required
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Transfer"
      p-kind="primary"
      [p-disabled]="transferForm.invalid"
      (p-click)="transfer()"
    >
    </po-button>
  </div>
</form>

<po-modal p-title="Do you confirm transfer?" [p-primary-action]="confirmAction" [p-secondary-action]="cancelAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From" [p-value]="typeAccount"> </po-info>

    <po-info class="po-md-6" p-label="To" [p-value]="contact"> </po-info>
  </div>

  <po-divider></po-divider>

  <div class="po-row">
    <po-info class="po-md-6" p-label="Value" [p-value]="value"> </po-info>

    <po-info class="po-md-6" p-label="Date to transfer" p-value="{ { dateTransfer | date }}"> </po-info>
  </div>
</po-modal>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-transfer/sample-po-combo-transfer.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-transfer',
  templateUrl: './sample-po-combo-transfer.component.html',
  standalone: false
})
export class SamplePoComboTransferComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('transferForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  contact: any;
  dateTransfer: Date = new Date();
  typeAccount: string = 'Checking Account';
  value: number;

  cancelAction: PoModalAction = {
    label: 'Cancel',
    action: () => this.poModal.close()
  };

  confirmAction: PoModalAction = {
    label: 'Confirm',
    action: () => this.confirmTransfer()
  };

  readonly typeAccounts: Array<PoSelectOption> = [
    { label: 'Checking Account', value: 'Checking Account' },
    { label: 'Savings Account', value: 'Savings Account' }
  ];

  confirmTransfer() {
    this.poModal.close();

    this.poNotification.success('Successful Transfer');

    this.formReset();
  }

  transfer() {
    this.poModal.open();
  }

  private formReset() {
    this.form.reset({
      dateTransfer: new Date(),
      typeAccount: 'Checking Account'
    });
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-transfer"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel),r(),s("ngClass",P(4,xt,n.hideSampleCodeTabs)))},dependencies:[M,w,x,y,ze],encapsulation:2})}return a})();function wt(a,V){if(a&1&&(o(0,"div",0),l(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),t()),a&2){let m=V;r(),s("p-value",m.name),r(),s("p-value",m.nickname),r(),s("p-value",m.email)}}var Ue=(()=>{class a{http=L(Z);hero$;heroName;get knowMoreLabel(){return this.heroName?"Know more":void 0}knowMore(m){window.open(`http://google.com/search?q=${m}`,"_blank")}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],["name","heroName","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"ngModelChange","p-change","ngModel"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore(n.heroName)}),o(2,"po-combo",2),g("ngModelChange",function(c){return b(n.heroName,c)||(n.heroName=c),c}),S("p-change",function(c){return n.onChangeHero(c)}),t(),N(3,wt,4,3,"div",0),j(4,"async"),t()()),p&2){let d;r(),s("p-primary-label",n.knowMoreLabel),r(),u("ngModel",n.heroName),r(),B((d=z(4,3,n.hero$))?3:-1,d)}},dependencies:[O,q,T,W,te,X],encapsulation:2})}return a})();var Pt=a=>({"docs-sample-code-tabs":a}),Qe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Heroes"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-heroes/sample-po-combo-heroes.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore(heroName)">
    <po-combo
      name="heroName"
      [(ngModel)]="heroName"
      p-field-label="nickname"
      p-field-value="name"
      p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
      p-label="Search a Hero"
      p-sort
      (p-change)="onChangeHero($event)"
    >
    </po-combo>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-heroes/sample-po-combo-heroes.component.ts"),t(),o(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes',
  templateUrl: './sample-po-combo-heroes.component.html',
  standalone: false
})
export class SamplePoComboHeroesComponent {
  private http = inject(HttpClient);

  hero$: Observable<any>;
  heroName: string;

  get knowMoreLabel() {
    return this.heroName ? 'Know more' : undefined;
  }

  knowMore(heroName: string) {
    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-heroes"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel),r(),s("ngClass",P(4,Pt,n.hideSampleCodeTabs)))},dependencies:[M,w,x,y,Ue],encapsulation:2})}return a})();function Tt(a,V){if(a&1&&(o(0,"div",0),l(1,"po-info",4)(2,"po-info",5)(3,"po-info",6),t()),a&2){let m=V;r(),s("p-value",m.name),r(),s("p-value",m.nickname),r(),s("p-value",m.email)}}var Ke=(()=>{class a{http=L(Z);formBuilder=L(Me);form;hero$;ngOnInit(){this.form=this.formBuilder.group({hero:[null,we.required]})}get knowMoreLabel(){return this.form.valid?"Know more":void 0}knowMore(){let m=this.form.get("hero").value;window.open(`http://google.com/search?q=${m}`,"_blank")}onChangeHero(m){this.hero$=this.getHero(m)}getHero(m){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form"]],standalone:!1,decls:6,vars:5,consts:[[1,"po-row"],[1,"po-lg-6",3,"p-primary-action","p-primary-label"],[3,"formGroup"],["name","heroName","formControlName","hero","p-field-label","nickname","p-field-value","name","p-filter-service","https://po-sample-api.onrender.com/v1/heroes","p-label","Search a Hero","p-sort","",3,"p-change"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1),S("p-primary-action",function(){return n.knowMore()}),o(2,"div",2)(3,"po-combo",3),S("p-change",function(c){return n.onChangeHero(c)}),t()(),N(4,Tt,4,3,"div",0),j(5,"async"),t()()),p&2){let d;r(),s("p-primary-label",n.knowMoreLabel),r(),s("formGroup",n.form),r(2),B((d=z(5,3,n.hero$))?4:-1,d)}},dependencies:[O,F,Pe,_e,T,W,te,X],encapsulation:2})}return a})();var Lt=a=>({"docs-sample-code-tabs":a}),Je=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-heroes-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Heroes Reactive Form"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-lg-6" [p-primary-label]="knowMoreLabel" (p-primary-action)="knowMore()">
    <div [formGroup]="form">
      <po-combo
        name="heroName"
        formControlName="hero"
        p-field-label="nickname"
        p-field-value="name"
        p-filter-service="https://po-sample-api.onrender.com/v1/heroes"
        p-label="Search a Hero"
        p-sort
        (p-change)="onChangeHero($event)"
      >
      </po-combo>
    </div>

    @if (hero$ | async; as hero) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="hero.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="hero.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="hero.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-heroes-reactive-form/sample-po-combo-heroes-reactive-form.component.ts"),t(),o(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-heroes-reactive-form',
  templateUrl: './sample-po-combo-heroes-reactive-form.component.html',
  standalone: false
})
export class SamplePoComboHeroesReactiveFormComponent implements OnInit {
  private http = inject(HttpClient);
  private formBuilder = inject(UntypedFormBuilder);

  form: UntypedFormGroup;
  hero$: Observable<any>;

  ngOnInit() {
    this.form = this.formBuilder.group({
      hero: [null, Validators.required]
    });
  }

  get knowMoreLabel() {
    return this.form.valid ? 'Know more' : undefined;
  }

  knowMore() {
    const heroName = this.form.get('hero').value;

    window.open(\`http://google.com/search?q=\${heroName}\`, '_blank');
  }

  onChangeHero(heroName: string) {
    this.hero$ = this.getHero(heroName);
  }

  private getHero(heroName: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/heroes/\${heroName}\`);
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-heroes-reactive-form"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel),r(),s("ngClass",P(4,Lt,n.hideSampleCodeTabs)))},dependencies:[M,w,x,y,Ke],encapsulation:2})}return a})();function Vt(a,V){if(a&1&&(o(0,"div",0),l(1,"po-info",3)(2,"po-info",4)(3,"po-info",5),t()),a&2){let m=V;r(),s("p-value",m.name),r(),s("p-value",m.nickname),r(),s("p-value",m.email)}}var Ye=(()=>{class a{http=L(Z);peopleName;people$;onChangePeople(m){this.people$=this.getPeople(m)}getPeople(m){return this.http.get(`https://po-sample-api.onrender.com/v1/people/${m}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll"]],standalone:!1,decls:5,vars:5,consts:[[1,"po-row"],[1,"po-lg-6"],["p-filter-service","https://po-sample-api.onrender.com/v1/people","p-label","People","name","people","p-field-label","name","p-field-value","id",3,"ngModelChange","p-change","ngModel","p-infinite-scroll"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Email",1,"po-md-4",3,"p-value"]],template:function(p,n){if(p&1&&(o(0,"div",0)(1,"po-widget",1)(2,"po-combo",2),g("ngModelChange",function(c){return b(n.peopleName,c)||(n.peopleName=c),c}),S("p-change",function(c){return n.onChangePeople(c)}),t(),N(3,Vt,4,3,"div",0),j(4,"async"),t()()),p&2){let d;r(2),u("ngModel",n.peopleName),s("p-infinite-scroll",!0),r(),B((d=z(4,3,n.people$))?3:-1,d)}},dependencies:[O,q,T,W,te,X],encapsulation:2})}return a})();var Dt=a=>({"docs-sample-code-tabs":a}),Xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-infinity-scroll-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Inifity Scroll"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-row">
  <po-widget class="po-lg-6">
    <po-combo
      p-filter-service="https://po-sample-api.onrender.com/v1/people"
      p-label="People"
      name="people"
      [(ngModel)]="peopleName"
      (p-change)="onChangePeople($event)"
      [p-infinite-scroll]="true"
      p-field-label="name"
      p-field-value="id"
    ></po-combo>

    @if (people$ | async; as people) {
      <div class="po-row">
        <po-info class="po-md-4" p-label="Name" [p-value]="people.name"> </po-info>
        <po-info class="po-md-4" p-label="Nickname" [p-value]="people.nickname"> </po-info>
        <po-info class="po-md-4" p-label="Email" [p-value]="people.email"> </po-info>
      </div>
    }
  </po-widget>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-infinity-scroll/sample-po-combo-infinity-scroll.component.ts"),t(),o(19,"pre",9),e(20,`import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sample-po-combo-infinity-scroll',
  templateUrl: './sample-po-combo-infinity-scroll.component.html',
  standalone: false
})
export class SamplePoComboInfinityScrollComponent {
  private http = inject(HttpClient);

  peopleName: string;
  people$: Observable<any>;

  onChangePeople(peopleId: string) {
    this.people$ = this.getPeople(peopleId);
  }

  private getPeople(peopleId: string) {
    return this.http.get(\`https://po-sample-api.onrender.com/v1/people/\${peopleId}\`);
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-infinity-scroll"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel),r(),s("ngClass",P(4,Dt,n.hideSampleCodeTabs)))},dependencies:[M,w,x,y,Ye],encapsulation:2})}return a})();var Wt=["bookingForm"],Nt=["datepicker"],Ze=(()=>{class a{poNotification=L(ee);form;datepickerComponent;adults=1;category=!1;checkin;checkout;children=0;hotel;rooms=1;filterParams={};adultsOptions=[{label:"1 Adult",value:1},{label:"2 Adults",value:2},{label:"3 Adults",value:3},{label:"4 Adults",value:4}];childrenOptions=[{label:"No Child",value:0},{label:"1 Child",value:1},{label:"2 Children",value:2}];roomsOptions=[{label:"1 Room",value:1},{label:"2 Rooms",value:2},{label:"3 Rooms",value:3}];booking(){this.poNotification.success("Hotel booked successfully"),this.formReset(),this.datepickerComponent.focus()}onChangeParams(m){this.filterParams=m?{category:"Luxo"}:{},this.hotel=void 0}formReset(){this.form.reset({adults:1,category:!1,children:0,rooms:1})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels"]],viewQuery:function(p,n){if(p&1&&Y(Wt,7)(Nt,7),p&2){let d;A(d=I())&&(n.form=d.first),A(d=I())&&(n.datepickerComponent=d.first)}},standalone:!1,decls:18,vars:14,consts:[["bookingForm","ngForm"],["datepicker",""],[1,"po-text-center"],[1,"po-font-title"],[1,"po-row"],["name","checkin","p-label","Check In","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-max-date"],["name","checkout","p-label","Check Out","p-placeholder","dd/mm/yyyy","p-required","",1,"po-md-4",3,"ngModelChange","ngModel","p-min-date"],["name","switch","p-label-off","No, thank you.","p-label-on","Yes, please.","p-label","Only Luxury Category",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","rooms","p-label","Rooms",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","children","p-label","Children",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","adults","p-label","Adults",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","hotel","p-debounce-time","500","p-disabled-init-filter","","p-filter-minlength","1","p-icon","an an-magnifying-glass","p-required","","p-field-label","name","p-field-value","value","p-label","Search a hotel","p-sort","","p-filter-service","https://po-sample-api.onrender.com/v1/hotels","p-listbox-control-position","top",1,"po-sm-12",3,"ngModelChange","ngModel","p-filter-params"],["p-label","Booking","p-kind","primary",1,"po-md-3",3,"p-click","p-disabled"]],template:function(p,n){if(p&1){let d=H();o(0,"div",2)(1,"div",3),e(2,"Booking a Hotel"),t()(),o(3,"form",null,0)(5,"div",4)(6,"po-datepicker",5,1),g("ngModelChange",function(i){return h(d),b(n.checkin,i)||(n.checkin=i),f(i)}),t(),o(8,"po-datepicker",6),g("ngModelChange",function(i){return h(d),b(n.checkout,i)||(n.checkout=i),f(i)}),t(),o(9,"po-switch",7),g("ngModelChange",function(i){return h(d),b(n.category,i)||(n.category=i),f(i)}),S("p-change",function(i){return n.onChangeParams(i)}),t()(),o(10,"div",4)(11,"po-select",8),g("ngModelChange",function(i){return h(d),b(n.rooms,i)||(n.rooms=i),f(i)}),t(),o(12,"po-select",9),g("ngModelChange",function(i){return h(d),b(n.children,i)||(n.children=i),f(i)}),t(),o(13,"po-select",10),g("ngModelChange",function(i){return h(d),b(n.adults,i)||(n.adults=i),f(i)}),t()(),o(14,"div",4)(15,"po-combo",11),g("ngModelChange",function(i){return h(d),b(n.hotel,i)||(n.hotel=i),f(i)}),t()(),o(16,"div",4)(17,"po-button",12),S("p-click",function(){return n.booking()}),t()()()}if(p&2){let d=G(4);r(6),u("ngModel",n.checkin),s("p-max-date",n.checkout),r(2),u("ngModel",n.checkout),s("p-min-date",n.checkin),r(),u("ngModel",n.category),r(2),u("ngModel",n.rooms),s("p-options",n.roomsOptions),r(),u("ngModel",n.children),s("p-options",n.childrenOptions),r(),u("ngModel",n.adults),s("p-options",n.adultsOptions),r(2),u("ngModel",n.hotel),s("p-filter-params",n.filterParams),r(2),s("p-disabled",d.invalid)}},dependencies:[U,O,F,q,R,Q,$,T,K,ce],encapsulation:2})}return a})();var Ht=a=>({"docs-sample-code-tabs":a}),$e=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-hotels-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(l(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Combo - Booking Hotel"),t(),o(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-combo-hotels/sample-po-combo-hotels.component.html"),t(),o(13,"pre",7),e(14,`<div class="po-text-center">
  <div class="po-font-title">Booking a Hotel</div>
</div>

<form #bookingForm="ngForm">
  <div class="po-row">
    <po-datepicker
      #datepicker
      class="po-md-4"
      name="checkin"
      [(ngModel)]="checkin"
      p-label="Check In"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-max-date]="checkout"
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-4"
      name="checkout"
      [(ngModel)]="checkout"
      p-label="Check Out"
      p-placeholder="dd/mm/yyyy"
      p-required
      [p-min-date]="checkin"
    >
    </po-datepicker>

    <po-switch
      class="po-md-4"
      name="switch"
      [(ngModel)]="category"
      p-label-off="No, thank you."
      p-label-on="Yes, please."
      p-label="Only Luxury Category"
      (p-change)="onChangeParams($event)"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-select class="po-md-4" name="rooms" [(ngModel)]="rooms" p-label="Rooms" [p-options]="roomsOptions"> </po-select>

    <po-select class="po-md-4" name="children" [(ngModel)]="children" p-label="Children" [p-options]="childrenOptions">
    </po-select>

    <po-select class="po-md-4" name="adults" [(ngModel)]="adults" p-label="Adults" [p-options]="adultsOptions">
    </po-select>
  </div>

  <div class="po-row">
    <po-combo
      class="po-sm-12"
      name="hotel"
      [(ngModel)]="hotel"
      p-debounce-time="500"
      p-disabled-init-filter
      p-filter-minlength="1"
      p-icon="an an-magnifying-glass"
      p-required
      p-field-label="name"
      p-field-value="value"
      p-label="Search a hotel"
      p-sort
      p-filter-service="https://po-sample-api.onrender.com/v1/hotels"
      p-listbox-control-position="top"
      [p-filter-params]="filterParams"
    >
    </po-combo>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-3"
      p-label="Booking"
      p-kind="primary"
      [p-disabled]="bookingForm.invalid"
      (p-click)="booking()"
    >
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-combo-hotels/sample-po-combo-hotels.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoDatepickerComponent, PoNotificationService, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-combo-hotels',
  templateUrl: './sample-po-combo-hotels.component.html',
  standalone: false
})
export class SamplePoComboHotelsComponent {
  private poNotification = inject(PoNotificationService);

  @ViewChild('bookingForm', { static: true }) form: NgForm;
  @ViewChild('datepicker', { static: true }) datepickerComponent: PoDatepickerComponent;

  adults: number = 1;
  category: boolean = false;
  checkin: Date;
  checkout: Date;
  children: number = 0;
  hotel: string;
  rooms: number = 1;
  filterParams = {};

  readonly adultsOptions: Array<PoSelectOption> = [
    { label: '1 Adult', value: 1 },
    { label: '2 Adults', value: 2 },
    { label: '3 Adults', value: 3 },
    { label: '4 Adults', value: 4 }
  ];

  readonly childrenOptions: Array<PoSelectOption> = [
    { label: 'No Child', value: 0 },
    { label: '1 Child', value: 1 },
    { label: '2 Children', value: 2 }
  ];

  readonly roomsOptions: Array<PoSelectOption> = [
    { label: '1 Room', value: 1 },
    { label: '2 Rooms', value: 2 },
    { label: '3 Rooms', value: 3 }
  ];

  booking() {
    this.poNotification.success('Hotel booked successfully');

    this.formReset();

    this.datepickerComponent.focus();
  }

  onChangeParams(isLuxury: boolean) {
    this.filterParams = isLuxury ? { category: 'Luxo' } : {};
    this.hotel = undefined;
  }

  private formReset() {
    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}
`),t()()()()(),o(21,"div",10),l(22,"sample-po-combo-hotels"),t(),l(23,"hr")),p&2&&(r(5),_("po-icon "+n.sampleCodeButtonIcon),r(),v(" ",n.sampleCodeButtonLabel),r(),s("ngClass",P(4,Ht,n.hideSampleCodeTabs)))},dependencies:[M,w,x,y,Ze],encapsulation:2})}return a})();var et=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=E({type:a,selectors:[["sample-po-combo-doc"]],standalone:!1,decls:1854,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoComboFilterMode"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoComboOption"],["pan","",1,"docs-api-property-type","PoComboOptionGroup"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type"],["pan","",1,"docs-api-property-type","Array<PoComboOption>"]],template:function(p,n){p&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoComboComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O "),o(24,"code"),e(25,"po-combo"),t(),e(26," exibe uma lista de op\xE7\xF5es com f\xE1cil sele\xE7\xE3o e filtragem."),t(),o(27,"p"),e(28,"Al\xE9m da exibi\xE7\xE3o padr\xE3o, nele \xE9 poss\xEDvel listar as op\xF5es em agrupamentos."),t(),o(29,"p"),e(30,"\xC9 poss\xEDvel selecionar e navegar entre as op\xE7\xF5es da lista tanto atrav\xE9s do "),o(31,"em"),e(32,"mouse"),t(),e(33,` quanto do teclado. No teclado navegue com
as setas e pressione `),o(34,"em"),e(35,"Enter"),t(),e(36," na op\xE7\xE3o que desejar."),t(),o(37,"p"),e(38,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),o(39,"code"),e(40,"p-filter-service"),t(),e(41,"."),t(),o(42,"p"),e(43,"Em "),o(44,"code"),e(45,"p-filter-mode"),t(),e(46,", o filtro poder\xE1 ser configurado para buscar op\xF5es que correspondam ao in\xEDcio, fim ou que contenha o valor digitado."),t(),o(47,"p"),e(48,"O "),o(49,"code"),e(50,"po-combo"),t(),e(51," guarda o \xFAltimo valor caso o usu\xE1rio desista de uma busca, deixando o campo ou pressionando "),o(52,"em"),e(53,"Esc"),t(),e(54,`. Caso seja digitado no
campo de busca a descri\xE7\xE3o completa de um item, ent\xE3o a sele\xE7\xE3o ser\xE1 automaticamente efetuada ao deixar o campo ou pressionando `),o(55,"em"),e(56,"Enter"),t(),e(57,"."),t(),o(58,"p"),e(59,`Utilizando po-combo com servi\xE7o, \xE9 possivel digitar um valor no campo de entrada e pressionar a tecla 'tab' para que o componente
fa\xE7a uma requisi\xE7\xE3o \xE0 URL informada passando o valor digitado no campo. Se encontrado o valor, ent\xE3o o mesmo ser\xE1 selecionado, caso
n\xE3o seja encontrado, ent\xE3o a lista de itens voltar\xE1 para o estado inicial.`),t(),o(60,"h4"),e(61,"Tokens customiz\xE1veis"),t(),o(62,"p"),e(63,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(64,"blockquote")(65,"p"),e(66,"Para maiores informa\xE7\xF5es, acesse o guia "),o(67,"a",6),e(68,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(69,"."),t()(),o(70,"table")(71,"thead")(72,"tr")(73,"th"),e(74,"Propriedade"),t(),o(75,"th"),e(76,"Descri\xE7\xE3o"),t(),o(77,"th"),e(78,"Valor Padr\xE3o"),t()()(),o(79,"tbody")(80,"tr")(81,"td")(82,"strong"),e(83,"Default Values"),t()(),l(84,"td")(85,"td"),t(),o(86,"tr")(87,"td")(88,"code"),e(89,"--font-family"),t()(),o(90,"td"),e(91,"Fam\xEDlia tipogr\xE1fica usada"),t(),o(92,"td")(93,"code"),e(94,"var(--font-family-theme)"),t()()(),o(95,"tr")(96,"td")(97,"code"),e(98,"--font-size"),t()(),o(99,"td"),e(100,"Tamanho da fonte"),t(),o(101,"td")(102,"code"),e(103,"var(--font-size-default)"),t()()(),o(104,"tr")(105,"td")(106,"code"),e(107,"--text-color"),t()(),o(108,"td"),e(109,"Cor do texto"),t(),o(110,"td")(111,"code"),e(112,"var(--color-neutral-dark-90)"),t()()(),o(113,"tr")(114,"td")(115,"code"),e(116,"--text-color-placeholder"),t()(),o(117,"td"),e(118,"Cor do texto no placeholder"),t(),o(119,"td")(120,"code"),e(121,"var(--color-neutral-light-30)"),t()()(),o(122,"tr")(123,"td")(124,"code"),e(125,"--color"),t()(),o(126,"td"),e(127,"Cor principal do Combo"),t(),o(128,"td")(129,"code"),e(130,"var(--color-neutral-dark-70)"),t()()(),o(131,"tr")(132,"td")(133,"code"),e(134,"--background"),t()(),o(135,"td"),e(136,"Cor de background"),t(),o(137,"td")(138,"code"),e(139,"var(--color-neutral-light-05)"),t()()(),o(140,"tr")(141,"td")(142,"code"),e(143,"--border-radius"),t()(),o(144,"td"),e(145,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),o(146,"td")(147,"code"),e(148,"var(--border-width-lg)"),t()()(),o(149,"tr")(150,"td")(151,"code"),e(152,"--min-width"),t()(),o(153,"td"),e(154,"Largura m\xEDnima do combo"),t(),o(155,"td")(156,"code"),e(157,"150px"),t()()(),o(158,"tr")(159,"td")(160,"code"),e(161,"--field-container-title-justify"),t()(),o(162,"td"),e(163,"Alinhamento horizontal do t\xEDtulo ("),o(164,"code"),e(165,"justify-content"),t(),e(166,")"),t(),o(167,"td")(168,"code"),e(169,"space-between"),t()()(),o(170,"tr")(171,"td")(172,"code"),e(173,"--field-container-title-flex"),t()(),o(174,"td"),e(175,"Flex do t\xEDtulo ("),o(176,"code"),e(177,"flex"),t(),e(178,")"),t(),o(179,"td")(180,"code"),e(181,"1 auto"),t()()(),o(182,"tr")(183,"td")(184,"strong"),e(185,"Hover"),t()(),l(186,"td")(187,"td"),t(),o(188,"tr")(189,"td")(190,"code"),e(191,"--color-hover"),t()(),o(192,"td"),e(193,"Cor principal no estado hover"),t(),o(194,"td")(195,"code"),e(196,"var(--color-action-hover)"),t()()(),o(197,"tr")(198,"td")(199,"code"),e(200,"--background-hover"),t()(),o(201,"td"),e(202,"Cor de background no estado hover"),t(),o(203,"td")(204,"code"),e(205,"var(--color-brand-01-lightest)"),t()()(),o(206,"tr")(207,"td")(208,"strong"),e(209,"Focused"),t()(),l(210,"td")(211,"td"),t(),o(212,"tr")(213,"td")(214,"code"),e(215,"--color-focused"),t()(),o(216,"td"),e(217,"Cor principal no estado de focus"),t(),o(218,"td")(219,"code"),e(220,"var(--color-action-default)"),t()()(),o(221,"tr")(222,"td")(223,"code"),e(224,"--outline-color-focused"),t()(),o(225,"td"),e(226,"Cor do outline do estado de focus"),t(),o(227,"td")(228,"code"),e(229,"var(--color-action-focus)"),t()()(),o(230,"tr")(231,"td")(232,"strong"),e(233,"Error"),t()(),l(234,"td")(235,"td"),t(),o(236,"tr")(237,"td")(238,"code"),e(239,"--color-error"),t()(),o(240,"td"),e(241,"Cor principal no estado de erro"),t(),o(242,"td")(243,"code"),e(244,"var(--color-feedback-negative-base)"),t()()(),o(245,"tr")(246,"td")(247,"strong"),e(248,"Disabled"),t()(),l(249,"td")(250,"td"),t(),o(251,"tr")(252,"td")(253,"code"),e(254,"--color-disabled"),t()(),o(255,"td"),e(256,"Cor principal no estado disabled"),t(),o(257,"td")(258,"code"),e(259,"var(--color-neutral-light-30)"),t()()(),o(260,"tr")(261,"td")(262,"code"),e(263,"--background-disabled"),t()(),o(264,"td"),e(265,"Cor de background no estado disabled"),t(),o(266,"td")(267,"code"),e(268,"var(--color-neutral-light-20)"),t()()(),o(269,"tr")(270,"td")(271,"strong"),e(272,"Suggestion"),t()(),l(273,"td")(274,"td"),t(),o(275,"tr")(276,"td")(277,"code"),e(278,"--text-color-suggestion"),t()(),o(279,"td"),e(280,"Cor do texto no estado suggestion"),t(),o(281,"td")(282,"code"),e(283,"var(--color-neutral-mid-60)"),t()()(),o(284,"tr")(285,"td")(286,"code"),e(287,"--background-suggestion"),t()(),o(288,"td"),e(289,"Cor do background no estado suggestion"),t(),o(290,"td")(291,"code"),e(292,"var(--color-brand-01-lightest)"),t()()()()()(),o(293,"div",7)(294,"h4",8),e(295,"Seletor"),t(),o(296,"pre",9),e(297,`<po-combo
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    p-cache="boolean"
    (p-change)="EventEmitter"
    p-change-on-enter="boolean"
    p-clean="boolean"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-disabled-init-filter="boolean"
    p-disabled-tab-filter="boolean"
    p-emit-object-value="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-minlength="number"
    p-filter-mode="PoComboFilterMode"
    p-filter-params="any"
    p-filter-service="PoComboFilter | string"
    p-help="string"
    p-icon="string | TemplateRef<void>"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    (p-input-change)="EventEmitter"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoComboLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="Array<PoComboOption | PoComboOptionGroup | any>"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-remove-initial-filter="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-combo>
`),t()(),o(298,"h4",10),e(299,"Propriedades"),t(),o(300,"table",11)(301,"tr",12)(302,"th",13),e(303,"Nome"),t(),o(304,"th",13),e(305,"Tipo"),t(),o(306,"th",13),e(307,"Padr\xE3o"),t(),o(308,"th",13),e(309,"Descri\xE7\xE3o"),t()(),o(310,"tr",14)(311,"td",15)(312,"div",16)(313,"span",17),e(314," (p-additional-help)"),l(315,"br"),t()(),o(316,"div",18),e(317,"Deprecated"),t()(),o(318,"td",19)(319,"code",20),e(320,"EventEmitter"),t()(),o(321,"td",21),e(322,"-"),t(),o(323,"td",22)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),o(327,"p"),e(328,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),o(329,"blockquote")(330,"p"),e(331,"Essa propriedade est\xE1 "),o(332,"strong"),e(333,"depreciada"),t(),e(334," e ser\xE1 removida na vers\xE3o "),o(335,"code"),e(336,"23.x.x"),t(),e(337,". Recomendamos utilizar a propriedade "),o(338,"code"),e(339,"p-helper"),t(),e(340," que oferece mais recursos e flexibilidade."),t()()()(),o(341,"tr",14)(342,"td",15)(343,"div",23)(344,"span",24),e(345," p-additional-help-tooltip"),l(346,"br"),t()(),o(347,"div",18),e(348,"Deprecated"),t()(),o(349,"td",19)(350,"code",25),e(351,"string"),t()(),o(352,"td",21),e(353,"-"),t(),o(354,"td",22)(355,"em")(356,"strong"),e(357,"(opcional)"),t()(),o(358,"p"),e(359,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),o(360,"code"),e(361,"po-helper"),t(),e(362,`.
`),o(363,"strong"),e(364,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(365,"blockquote")(366,"p"),e(367,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(368,"blockquote")(369,"p"),e(370,"Essa propriedade est\xE1 "),o(371,"strong"),e(372,"depreciada"),t(),e(373," e ser\xE1 removida na vers\xE3o "),o(374,"code"),e(375,"23.x.x"),t(),e(376,". Recomendamos utilizar a propriedade "),o(377,"code"),e(378,"p-helper"),t(),e(379," que oferece mais recursos e flexibilidade."),t()()()(),o(380,"tr",14)(381,"td",15)(382,"div",23)(383,"span",24),e(384," p-append-in-body"),l(385,"br"),t()()(),o(386,"td",19)(387,"code",26),e(388,"boolean"),t()(),o(389,"td",21)(390,"p")(391,"code"),e(392,"false"),t()()(),o(393,"td",22)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),o(397,"p"),e(398,"Define que o "),o(399,"code"),e(400,"listbox"),t(),e(401," e/ou popover ("),o(402,"code"),e(403,"p-helper"),t(),e(404," e/ou "),o(405,"code"),e(406,"p-error-limit"),t(),e(407,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido,garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),o(408,"blockquote")(409,"p"),e(410,"Quando utilizado com "),o(411,"code"),e(412,"p-helper"),t(),e(413,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),o(414,"tr",14)(415,"td",15)(416,"div",23)(417,"span",24),e(418," p-auto-focus"),l(419,"br"),t()()(),o(420,"td",19)(421,"code",26),e(422,"boolean"),t()(),o(423,"td",21)(424,"p")(425,"code"),e(426,"false"),t()()(),o(427,"td",22)(428,"em")(429,"strong"),e(430,"(opcional)"),t()(),o(431,"p"),e(432,"Aplica foco no elemento ao ser iniciado."),t(),o(433,"blockquote")(434,"p"),e(435,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(436,"tr",14)(437,"td",15)(438,"div",16)(439,"span",17),e(440," (p-blur)"),l(441,"br"),t()()(),o(442,"td",19)(443,"code",20),e(444,"EventEmitter"),t()(),o(445,"td",21),e(446,"-"),t(),o(447,"td",22)(448,"em")(449,"strong"),e(450,"(opcional)"),t()(),o(451,"p"),e(452,"Evento disparado ao sair do campo."),t()()(),o(453,"tr",14)(454,"td",15)(455,"div",23)(456,"span",24),e(457," p-cache"),l(458,"br"),t()()(),o(459,"td",19)(460,"code",26),e(461,"boolean"),t()(),o(462,"td",21)(463,"p")(464,"code"),e(465,"true"),t()()(),o(466,"td",22)(467,"em")(468,"strong"),e(469,"(opcional)"),t()(),o(470,"p"),e(471,"Define se o componente ir\xE1 guardar o valor do model para evitar requisi\xE7\xF5es repetidas."),t(),o(472,"blockquote")(473,"p"),e(474,"Caso o valor seja "),o(475,"code"),e(476,"false"),t(),e(477,", o componente far\xE1 uma nova requisi\xE7\xE3o mesmo que o valor procurado seja o mesmo do model."),t()()()(),o(478,"tr",14)(479,"td",15)(480,"div",16)(481,"span",17),e(482," (p-change)"),l(483,"br"),t()()(),o(484,"td",19)(485,"code",20),e(486,"EventEmitter"),t()(),o(487,"td",21),e(488,"-"),t(),o(489,"td",22)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),o(493,"p"),e(494,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel. A fun\xE7\xE3o receber\xE1 como argumento o model modificado."),t(),o(495,"blockquote")(496,"p"),e(497,"Pode-se optar pelo recebimento do objeto selecionado ao inv\xE9s do model atrav\xE9s da propriedade "),o(498,"code"),e(499,"p-emit-object-value"),t(),e(500,"."),t()()()(),o(501,"tr",14)(502,"td",15)(503,"div",23)(504,"span",24),e(505," p-change-on-enter"),l(506,"br"),t()()(),o(507,"td",19)(508,"code",26),e(509,"boolean"),t()(),o(510,"td",21)(511,"p")(512,"code"),e(513,"false"),t()()(),o(514,"td",22)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),o(518,"p"),e(519,"Indica que o evento "),o(520,"code"),e(521,"p-change"),t(),e(522,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada.'),t()()(),o(523,"tr",14)(524,"td",15)(525,"div",23)(526,"span",24),e(527," p-clean"),l(528,"br"),t()()(),o(529,"td",19)(530,"code",26),e(531,"boolean"),t()(),o(532,"td",21),e(533,"-"),t(),o(534,"td",22)(535,"em")(536,"strong"),e(537,"(opcional)"),t()(),o(538,"p"),e(539,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t()()(),o(540,"tr",14)(541,"td",15)(542,"div",23)(543,"span",24),e(544," p-compact-label"),l(545,"br"),t()()(),o(546,"td",19)(547,"code",26),e(548,"boolean"),t()(),o(549,"td",21)(550,"p")(551,"code"),e(552,"false"),t()()(),o(553,"td",22)(554,"em")(555,"strong"),e(556,"(opcional)"),t()(),o(557,"p"),e(558,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),o(559,"p"),e(560,"Quando habilitado ("),o(561,"code"),e(562,"true"),t(),e(563,"), o modo compacto afeta o conjunto composto por:"),t(),o(564,"ul")(565,"li")(566,"code"),e(567,"po-label"),t()(),o(568,"li")(569,"code"),e(570,"p-requirement (showRequired)"),t()(),o(571,"li")(572,"code"),e(573,"po-helper"),t()()(),o(574,"p"),e(575,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),o(576,"p"),e(577,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),o(578,"ul")(579,"li")(580,"code"),e(581,"--field-container-title-justify"),t()(),o(582,"li")(583,"code"),e(584,"--field-container-title-flex"),t()()(),o(585,"p"),e(586,"Exemplo:"),t(),o(587,"pre")(588,"code"),e(589,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),o(590,"p"),e(591,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),o(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),e(596," p-debounce-time"),l(597,"br"),t()()(),o(598,"td",19)(599,"code",27),e(600,"number"),t()(),o(601,"td",21)(602,"p")(603,"code"),e(604,"400"),t()()(),o(605,"td",22)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),o(609,"p"),e(610,`Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla.
Ser\xE1 utilizada apenas quando houver servi\xE7o (`),o(611,"code"),e(612,"p-filter-service"),t(),e(613,")."),t()()(),o(614,"tr",14)(615,"td",15)(616,"div",23)(617,"span",24),e(618," p-disabled"),l(619,"br"),t()()(),o(620,"td",19)(621,"code",26),e(622,"boolean"),t()(),o(623,"td",21)(624,"p")(625,"code"),e(626,"false"),t()()(),o(627,"td",22)(628,"em")(629,"strong"),e(630,"(opcional)"),t()(),o(631,"p"),e(632,"Indica que o campo ser\xE1 desabilitado."),t()()(),o(633,"tr",14)(634,"td",15)(635,"div",23)(636,"span",24),e(637," p-disabled-init-filter"),l(638,"br"),t()()(),o(639,"td",19)(640,"code",26),e(641,"boolean"),t()(),o(642,"td",21)(643,"p")(644,"code"),e(645,"false"),t()()(),o(646,"td",22)(647,"em")(648,"strong"),e(649,"(opcional)"),t()(),o(650,"p"),e(651,"Desabilita o filtro inicial no servi\xE7o, que \xE9 executado no primeiro clique no campo."),t()()(),o(652,"tr",14)(653,"td",15)(654,"div",23)(655,"span",24),e(656," p-disabled-tab-filter"),l(657,"br"),t()()(),o(658,"td",19)(659,"code",26),e(660,"boolean"),t()(),o(661,"td",21)(662,"p")(663,"code"),e(664,"false"),t()()(),o(665,"td",22)(666,"em")(667,"strong"),e(668,"(opcional)"),t()(),o(669,"p"),e(670,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB."),t()()(),o(671,"tr",14)(672,"td",15)(673,"div",23)(674,"span",24),e(675," p-emit-object-value"),l(676,"br"),t()()(),o(677,"td",19)(678,"code",26),e(679,"boolean"),t()(),o(680,"td",21)(681,"p")(682,"code"),e(683,"false"),t()()(),o(684,"td",22)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),o(688,"p"),e(689,"Se verdadeiro, o evento "),o(690,"code"),e(691,"p-change"),t(),e(692," receber\xE1 como argumento o "),o(693,"code"),e(694,"PoComboOption"),t(),e(695," referente \xE0 op\xE7\xE3o selecionada."),t()()(),o(696,"tr",14)(697,"td",15)(698,"div",23)(699,"span",24),e(700," p-error-limit"),l(701,"br"),t()()(),o(702,"td",19)(703,"code",26),e(704,"boolean"),t()(),o(705,"td",21)(706,"p")(707,"code"),e(708,"false"),t()()(),o(709,"td",22)(710,"em")(711,"strong"),e(712,"(opcional)"),t()(),o(713,"p"),e(714,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(715,"blockquote")(716,"p"),e(717,"Caso essa propriedade seja definida como "),o(718,"code"),e(719,"true"),t(),e(720,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(721,"tr",14)(722,"td",15)(723,"div",23)(724,"span",24),e(725," p-field-error-message"),l(726,"br"),t()()(),o(727,"td",19)(728,"code",25),e(729,"string"),t()(),o(730,"td",21),e(731,"-"),t(),o(732,"td",22)(733,"em")(734,"strong"),e(735,"(opcional)"),t()(),o(736,"p"),e(737,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(738,"blockquote")(739,"p"),e(740,"Necess\xE1rio que a propriedade "),o(741,"code"),e(742,"p-required"),t(),e(743," esteja habilitada."),t()()()(),o(744,"tr",14)(745,"td",15)(746,"div",23)(747,"span",24),e(748," p-field-label"),l(749,"br"),t()()(),o(750,"td",19)(751,"code",25),e(752,"string"),t()(),o(753,"td",21)(754,"p")(755,"code"),e(756,"label"),t()()(),o(757,"td",22)(758,"em")(759,"strong"),e(760,"(opcional)"),t()(),o(761,"p"),e(762,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),o(763,"code"),e(764,"p-options"),t(),e(765,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),t(),o(766,"p"),e(767,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),t()()(),o(768,"tr",14)(769,"td",15)(770,"div",23)(771,"span",24),e(772," p-field-value"),l(773,"br"),t()()(),o(774,"td",19)(775,"code",25),e(776,"string"),t()(),o(777,"td",21)(778,"p")(779,"code"),e(780,"value"),t()()(),o(781,"td",22)(782,"em")(783,"strong"),e(784,"(opcional)"),t()(),o(785,"p"),e(786,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),o(787,"code"),e(788,"p-options"),t(),e(789,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t(),o(790,"p"),e(791,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
PoComboOption.`),t()()(),o(792,"tr",14)(793,"td",15)(794,"div",23)(795,"span",24),e(796," p-filter-minlength"),l(797,"br"),t()()(),o(798,"td",19)(799,"code",27),e(800,"number"),t()(),o(801,"td",21)(802,"p")(803,"code"),e(804,"0"),t()()(),o(805,"td",22)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),o(809,"p"),e(810,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o."),t()()(),o(811,"tr",14)(812,"td",15)(813,"div",23)(814,"span",24),e(815," p-filter-mode"),l(816,"br"),t()()(),o(817,"td",19)(818,"code",28),e(819,"PoComboFilterMode"),t()(),o(820,"td",21)(821,"p")(822,"code"),e(823,"startsWith"),t()()(),o(824,"td",22)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),o(828,"p"),e(829,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),o(830,"code"),e(831,"startsWith"),t(),e(832,", "),o(833,"code"),e(834,"contains"),t(),e(835," ou "),o(836,"code"),e(837,"endsWith"),t(),e(838,"."),t(),o(839,"blockquote")(840,"p"),e(841,"Quando utilizar a propriedade "),o(842,"code"),e(843,"p-filter-service"),t(),e(844," esta propriedade ser\xE1 ignorada."),t()()()(),o(845,"tr",14)(846,"td",15)(847,"div",23)(848,"span",24),e(849," p-filter-params"),l(850,"br"),t()()(),o(851,"td",19)(852,"code",29),e(853,"any"),t()(),o(854,"td",21),e(855,"-"),t(),o(856,"td",22)(857,"em")(858,"strong"),e(859,"(opcional)"),t()(),o(860,"p"),e(861,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou aos m\xE9todos do servi\xE7o que implementam a interface "),o(862,"em"),e(863,"PoComboFilter"),t(),e(864,"."),t(),o(865,"blockquote")(866,"p"),e(867,"Caso a lista contenha agrupamentos, os mesmos s\xF3 ser\xE3o exibidos se houver no m\xEDnimo uma op\xE7\xE3o que corresponda \xE0 pesquisa."),t()()()(),o(868,"tr",14)(869,"td",15)(870,"div",23)(871,"span",24),e(872," p-filter-service"),l(873,"br"),t()()(),o(874,"td",19)(875,"code",30),e(876,"PoComboFilter "),t(),o(877,"code",25),e(878," string"),t()(),o(879,"td",21),e(880,"-"),t(),o(881,"td",22)(882,"em")(883,"strong"),e(884,"(opcional)"),t()(),o(885,"p"),e(886,`Nesta propriedade deve ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de
itens no componente.
Caso haja a necessidade de customiza\xE7\xE3o, ent\xE3o pode ser informado um servi\xE7o implementando a interface PoComboFilter.`),t(),o(887,"p"),e(888,`Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o API TOTVS e utiliza as propriedades
`),o(889,"code"),e(890,"p-field-label"),t(),e(891," e "),o(892,"code"),e(893,"p-field-value"),t(),e(894," para a constru\xE7\xE3o da lista de itens."),t(),o(895,"p"),e(896,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),t(),o(897,"pre")(898,"code"),e(899,`url + ?filter=Peter
`),t()(),o(900,"p"),e(901,"Se for definida a propriedade "),o(902,"code"),e(903,"p-filter-params"),t(),e(904,`, a mesma tamb\xE9m ser\xE1 concatenada. Por exemplo, para o
par\xE2metro `),o(905,"code"),e(906,"{ age: 23 }"),t(),e(907," a URL ficaria:"),t(),o(908,"pre")(909,"code"),e(910,`url + ?page=1&pageSize=20&age=23&filter=Peter
`),t()()()(),o(911,"tr",14)(912,"td",15)(913,"div",23)(914,"span",24),e(915," p-help"),l(916,"br"),t()()(),o(917,"td",19)(918,"code",25),e(919,"string"),t()(),o(920,"td",21),e(921,"-"),t(),o(922,"td",22)(923,"em")(924,"strong"),e(925,"(opcional)"),t()(),o(926,"p"),e(927,"Texto de apoio para o campo."),t()()(),o(928,"tr",14)(929,"td",15)(930,"div",23)(931,"span",24),e(932," p-icon"),l(933,"br"),t()()(),o(934,"td",19)(935,"code",25),e(936,"string "),t(),o(937,"code",31),e(938," TemplateRef<void>"),t()(),o(939,"td",21),e(940,"-"),t(),o(941,"td",22)(942,"em")(943,"strong"),e(944,"(opcional)"),t()(),o(945,"p"),e(946,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),o(947,"p"),e(948,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),o(949,"a",32),e(950,"Biblioteca de \xEDcones"),t(),e(951,". conforme exemplo abaixo:"),t(),o(952,"pre")(953,"code"),e(954,`<po-combo p-icon="an an-user" p-label="PO combo"></po-combo>
`),t()(),o(955,"p"),e(956,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),o(957,"em"),e(958,"Font Awesome"),t(),e(959,", da seguinte forma:"),t(),o(960,"pre")(961,"code"),e(962,`<po-combo p-icon="fa fa-podcast" p-label="PO combo"></po-combo>
`),t()(),o(963,"p"),e(964,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),o(965,"code"),e(966,"TemplateRef"),t(),e(967,", conforme exemplo abaixo:"),t(),o(968,"pre")(969,"code"),e(970,`<po-combo [p-icon]="template" p-label="combo template ionic"></po-combo>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),t()(),o(971,"blockquote")(972,"p"),e(973,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),o(974,"code"),e(975,"font-size: inherit"),t(),e(976," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),o(977,"tr",14)(978,"td",15)(979,"div",23)(980,"span",24),e(981," p-infinite-scroll"),l(982,"br"),t()()(),o(983,"td",19)(984,"code",26),e(985,"boolean"),t()(),o(986,"td",21)(987,"p")(988,"code"),e(989,"false"),t()()(),o(990,"td",22)(991,"em")(992,"strong"),e(993,"(opcional)"),t()(),o(994,"p"),e(995,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo, Ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t()()(),o(996,"tr",14)(997,"td",15)(998,"div",23)(999,"span",24),e(1e3," p-infinite-scroll-distance"),l(1001,"br"),t()()(),o(1002,"td",19)(1003,"code",27),e(1004,"number"),t()(),o(1005,"td",21),e(1006,"-"),t(),o(1007,"td",22)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),t()(),o(1011,"p"),e(1012,"Define o percentual necess\xE1rio para disparar o evento "),o(1013,"code"),e(1014,"show-more"),t(),e(1015,", que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%."),t(),o(1016,"p")(1017,"strong"),e(1018,"Exemplos"),t()(),o(1019,"ul")(1020,"li"),e(1021,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll do combo, o "),o(1022,"code"),e(1023,"show-more"),t(),e(1024," ser\xE1 disparado."),t()()()(),o(1025,"tr",14)(1026,"td",15)(1027,"div",16)(1028,"span",17),e(1029," (p-input-change)"),l(1030,"br"),t()()(),o(1031,"td",19)(1032,"code",20),e(1033,"EventEmitter"),t()(),o(1034,"td",21),e(1035,"-"),t(),o(1036,"td",22)(1037,"em")(1038,"strong"),e(1039,"(opcional)"),t()(),o(1040,"p"),e(1041,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no Search input. A fun\xE7\xE3o receber\xE1 como argumento o input modificado."),t()()(),o(1042,"tr",14)(1043,"td",15)(1044,"div",16)(1045,"span",17),e(1046," (p-keydown)"),l(1047,"br"),t()()(),o(1048,"td",19)(1049,"code",20),e(1050,"EventEmitter"),t()(),o(1051,"td",21),e(1052,"-"),t(),o(1053,"td",22)(1054,"em")(1055,"strong"),e(1056,"(opcional)"),t()(),o(1057,"p"),e(1058,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(1059,"code"),e(1060,"KeyboardEvent"),t(),e(1061," com informa\xE7\xF5es sobre a tecla."),t()()(),o(1062,"tr",14)(1063,"td",15)(1064,"div",23)(1065,"span",24),e(1066," p-label"),l(1067,"br"),t()()(),o(1068,"td",19)(1069,"code",25),e(1070,"string"),t()(),o(1071,"td",21),e(1072,"-"),t(),o(1073,"td",22)(1074,"em")(1075,"strong"),e(1076,"(opcional)"),t()(),o(1077,"p"),e(1078,"Label no componente."),t()()(),o(1079,"tr",14)(1080,"td",15)(1081,"div",23)(1082,"span",24),e(1083," p-label-text-wrap"),l(1084,"br"),t()()(),o(1085,"td",19)(1086,"code",26),e(1087,"boolean"),t()(),o(1088,"td",21)(1089,"p")(1090,"code"),e(1091,"false"),t()()(),o(1092,"td",22)(1093,"em")(1094,"strong"),e(1095,"(opcional)"),t()(),o(1096,"p"),e(1097,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(1098,"code"),e(1099,"p-label"),t(),e(1100,". Quando "),o(1101,"code"),e(1102,"p-label-text-wrap"),t(),e(1103,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(1104,"tr",14)(1105,"td",15)(1106,"div",23)(1107,"span",24),e(1108," p-listbox-control-position"),l(1109,"br"),t()()(),o(1110,"td",19)(1111,"code",33),e(1112,"'top' "),t(),o(1113,"code",34),e(1114," 'bottom'"),t()(),o(1115,"td",21)(1116,"p")(1117,"code"),e(1118,"bottom"),t()()(),o(1119,"td",22)(1120,"em")(1121,"strong"),e(1122,"(opcional)"),t()(),o(1123,"p"),e(1124,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),o(1125,"code"),e(1126,"listbox"),t(),e(1127," em rela\xE7\xE3o ao campo ("),o(1128,"code"),e(1129,"top"),t(),e(1130," ou "),o(1131,"code"),e(1132,"bottom"),t(),e(1133,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t()()(),o(1134,"tr",14)(1135,"td",15)(1136,"div",23)(1137,"span",24),e(1138," p-literals"),l(1139,"br"),t()()(),o(1140,"td",19)(1141,"code",35),e(1142,"PoComboLiterals"),t()(),o(1143,"td",21),e(1144,"-"),t(),o(1145,"td",22)(1146,"em")(1147,"strong"),e(1148,"(opcional)"),t()(),o(1149,"p"),e(1150,"Objeto com as literais usadas no "),o(1151,"code"),e(1152,"po-combo"),t(),e(1153,"."),t(),o(1154,"p"),e(1155,"Para utilizar basta passar a literal que deseja customizar:"),t(),o(1156,"pre")(1157,"code"),e(1158,`const customLiterals: PoComboLiterals = {
  noData: 'Nenhum valor'
};
`),t()(),o(1159,"p"),e(1160,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),o(1161,"pre")(1162,"code"),e(1163,`<po-combo
  [p-literals]="customLiterals">
</po-combo>
`),t()(),o(1164,"blockquote")(1165,"p"),e(1166,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),o(1167,"a",36)(1168,"code"),e(1169,"PoI18nService"),t()(),e(1170," ou do browser."),t()()()(),o(1171,"tr",14)(1172,"td",15)(1173,"div",23)(1174,"span",24),e(1175," p-loading"),l(1176,"br"),t()()(),o(1177,"td",19)(1178,"code",26),e(1179,"boolean"),t()(),o(1180,"td",21)(1181,"p")(1182,"code"),e(1183,"false"),t()()(),o(1184,"td",22)(1185,"em")(1186,"strong"),e(1187,"(opcional)"),t()(),o(1188,"p"),e(1189,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),o(1190,"tr",14)(1191,"td",15)(1192,"div",23)(1193,"span",24),e(1194," name"),l(1195,"br"),t()()(),o(1196,"td",19)(1197,"code",25),e(1198,"string"),t()(),o(1199,"td",21),e(1200,"-"),t(),o(1201,"td",22)(1202,"p"),e(1203,"Nome do componente."),t()()(),o(1204,"tr",14)(1205,"td",15)(1206,"div",16)(1207,"span",17),e(1208," (ngModelChange)"),l(1209,"br"),t()()(),o(1210,"td",19)(1211,"code",20),e(1212,"EventEmitter"),t()(),o(1213,"td",21),e(1214,"-"),t(),o(1215,"td",22)(1216,"em")(1217,"strong"),e(1218,"(opcional)"),t()(),o(1219,"p"),e(1220,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),o(1221,"p"),e(1222,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),o(1223,"code"),e(1224,"strictTemplates"),t(),e(1225,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),o(1226,"pre")(1227,"code"),e(1228,`<po-combo ... [ngModel]="comboModel" (ngModelChange)="comboModel = $event"> </po-combo>
`),t()()()(),o(1229,"tr",14)(1230,"td",15)(1231,"div",23)(1232,"span",24),e(1233," p-optional"),l(1234,"br"),t()()(),o(1235,"td",19)(1236,"code",26),e(1237,"boolean"),t()(),o(1238,"td",21)(1239,"p")(1240,"code"),e(1241,"false"),t()()(),o(1242,"td",22)(1243,"em")(1244,"strong"),e(1245,"(opcional)"),t()(),o(1246,"p"),e(1247,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(1248,"blockquote")(1249,"p"),e(1250,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(1251,"ul")(1252,"li"),e(1253,"O campo conter "),o(1254,"code"),e(1255,"p-required"),t(),e(1256,";"),t(),o(1257,"li"),e(1258,"N\xE3o possuir "),o(1259,"code"),e(1260,"p-help"),t(),e(1261," e/ou "),o(1262,"code"),e(1263,"p-label"),t(),e(1264,"."),t()()()(),o(1265,"tr",14)(1266,"td",15)(1267,"div",23)(1268,"span",24),e(1269," p-options"),l(1270,"br"),t()()(),o(1271,"td",19)(1272,"code",37),e(1273,"Array<PoComboOption "),t(),o(1274,"code",38),e(1275," PoComboOptionGroup "),t(),o(1276,"code",39),e(1277," any>"),t()(),o(1278,"td",21),e(1279,"-"),t(),o(1280,"td",22)(1281,"p"),e(1282,"Nesta propriedade define a lista de op\xE7\xF5es do "),o(1283,"code"),e(1284,"po-combo"),t(),e(1285,"."),t(),o(1286,"blockquote")(1287,"p"),e(1288,"A lista pode ser definida utilizando um array com o valor representando o "),o(1289,"code"),e(1290,"value"),t(),e(1291," e o "),o(1292,"code"),e(1293,"label"),t(),e(1294," das seguintes formas:"),t()(),o(1295,"pre")(1296,"code"),e(1297,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-combo>
`),t()(),o(1298,"pre")(1299,"code"),e(1300,`<po-combo name="combo" p-label="PO Combo" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-combo>
`),t()(),o(1301,"ul")(1302,"li"),e(1303,"Aconselha-se utilizar valores distintos no "),o(1304,"code"),e(1305,"label"),t(),e(1306," e "),o(1307,"code"),e(1308,"value"),t(),e(1309," dos itens."),t()()()(),o(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),e(1314," p-placeholder"),l(1315,"br"),t()()(),o(1316,"td",19)(1317,"code",25),e(1318,"string"),t()(),o(1319,"td",21),e(1320,"-"),t(),o(1321,"td",22)(1322,"p"),e(1323,"Mensagem apresentada enquanto o campo estiver vazio."),t()()(),o(1324,"tr",14)(1325,"td",15)(1326,"div",23)(1327,"span",24),e(1328," p-helper"),l(1329,"br"),t()()(),o(1330,"td",19)(1331,"code",40),e(1332,"PoHelperOptions "),t(),o(1333,"code",25),e(1334," string"),t()(),o(1335,"td",21),e(1336,"-"),t(),o(1337,"td",22)(1338,"em")(1339,"strong"),e(1340,"(opcional)"),t()(),o(1341,"p"),e(1342,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),o(1343,"code"),e(1344,"p-label"),t(),e(1345," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),o(1346,"code"),e(1347,"p-label"),t(),e(1348,"."),t(),o(1349,"blockquote")(1350,"p"),e(1351,"Para mais informa\xE7\xF5es acesse: "),o(1352,"a",41),e(1353,"https://po-ui.io/documentation/po-helper"),t(),e(1354,"."),t()(),o(1355,"blockquote")(1356,"p"),e(1357,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),o(1358,"code"),e(1359,"p-additional-help-tooltip"),t(),e(1360," e "),o(1361,"code"),e(1362,"p-additional-help"),t(),e(1363,") ser\xE1 ignorado."),t()()()(),o(1364,"tr",14)(1365,"td",15)(1366,"div",23)(1367,"span",24),e(1368," p-remove-initial-filter"),l(1369,"br"),t()()(),o(1370,"td",19)(1371,"code",26),e(1372,"boolean"),t()(),o(1373,"td",21)(1374,"p")(1375,"code"),e(1376,"false"),t()()(),o(1377,"td",22)(1378,"em")(1379,"strong"),e(1380,"(opcional)"),t()(),o(1381,"p"),e(1382,"Define se o filtro inicial ser\xE1 removido no primeiro clique do campo."),t(),o(1383,"p"),e(1384,`Quando habilitado e o combo possui um valor padr\xE3o, o primeiro clique
exibir\xE1 todos os itens da lista ao inv\xE9s de apenas o item inicializado.`),t()()(),o(1385,"tr",14)(1386,"td",15)(1387,"div",23)(1388,"span",24),e(1389," p-required"),l(1390,"br"),t()()(),o(1391,"td",19)(1392,"code",26),e(1393,"boolean"),t()(),o(1394,"td",21)(1395,"p")(1396,"code"),e(1397,"false"),t()()(),o(1398,"td",22)(1399,"em")(1400,"strong"),e(1401,"(opcional)"),t()(),o(1402,"p"),e(1403,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),e(1408," p-show-required"),l(1409,"br"),t()()(),o(1410,"td",19)(1411,"code",26),e(1412,"boolean"),t()(),o(1413,"td",21),e(1414,"-"),t(),o(1415,"td",22)(1416,"p"),e(1417,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(1418,"blockquote")(1419,"p"),e(1420,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(1421,"ul")(1422,"li"),e(1423,"N\xE3o possuir "),o(1424,"code"),e(1425,"p-help"),t(),e(1426," e/ou "),o(1427,"code"),e(1428,"p-label"),t(),e(1429,"."),t()()()(),o(1430,"tr",14)(1431,"td",15)(1432,"div",23)(1433,"span",24),e(1434," p-size"),l(1435,"br"),t()()(),o(1436,"td",19)(1437,"code",25),e(1438,"string"),t()(),o(1439,"td",21)(1440,"p")(1441,"code"),e(1442,"medium"),t()()(),o(1443,"td",22)(1444,"em")(1445,"strong"),e(1446,"(opcional)"),t()(),o(1447,"p"),e(1448,"Define o tamanho do componente:"),t(),o(1449,"ul")(1450,"li")(1451,"code"),e(1452,"small"),t(),e(1453,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(1454,"li")(1455,"code"),e(1456,"medium"),t(),e(1457,": altura do input como 44px."),t()(),o(1458,"blockquote")(1459,"p"),e(1460,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(1461,"code"),e(1462,"medium"),t(),e(1463,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(1464,"a",42),e(1465,"po-theme"),t(),e(1466,"."),t()()()(),o(1467,"tr",14)(1468,"td",15)(1469,"div",23)(1470,"span",24),e(1471," p-sort"),l(1472,"br"),t()()(),o(1473,"td",19)(1474,"code",26),e(1475,"boolean"),t()(),o(1476,"td",21),e(1477,"-"),t(),o(1478,"td",22)(1479,"p"),e(1480,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t()()()(),o(1481,"h3",10),e(1482,"M\xE9todos"),t(),o(1483,"table",43)(1484,"tr",14)(1485,"th",44)(1486,"div",23)(1487,"h4")(1488,"span",24),e(1489," focus "),t()()()()(),o(1490,"tr",22)(1491,"td",22)(1492,"p"),e(1493,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(1494,"p"),e(1495,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(1496,"pre")(1497,"code"),e(1498,`import { PoComboComponent } from '@po-ui/ng-components';

...

@ViewChild(PoComboComponent, { static: true }) combo: PoComboComponent;

focusCombo() {
  this.combo.focus();
}
`),t()()()()(),l(1499,"br"),o(1500,"table",43)(1501,"tr",14)(1502,"th",44)(1503,"div",23)(1504,"h4")(1505,"span",24),e(1506," showAdditionalHelp "),t()()()()(),o(1507,"tr",22)(1508,"td",22)(1509,"p"),e(1510,"M\xE9todo que exibe "),o(1511,"code"),e(1512,"p-helper"),t(),e(1513," ou executa a a\xE7\xE3o definida em "),o(1514,"code"),e(1515,"p-helper{eventOnClick}"),t(),e(1516," ou em "),o(1517,"code"),e(1518,"p-additionalHelp"),t(),e(1519,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(1520,"code"),e(1521,"p-keydown"),t(),e(1522,"."),t(),o(1523,"blockquote")(1524,"p"),e(1525,"Exibe ou oculta o conte\xFAdo do componente "),o(1526,"code"),e(1527,"po-helper"),t(),e(1528," quando o componente estiver com foco."),t()(),o(1529,"pre")(1530,"code"),e(1531,`// Exemplo com p-label e p-helper
<po-combo
 #combo
 ...
 p-label="Label do combo"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, combo)"
></po-combo>
`),t()(),o(1532,"pre")(1533,"code"),e(1534,`...
onKeyDown(event: KeyboardEvent, inp: PoComboComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),l(1535,"br"),o(1536,"h3"),e(1537,"Interfaces"),t(),o(1538,"h4",45)(1539,"code",5),e(1540,"PoComboFilter"),t()(),o(1541,"div",2)(1542,"p"),e(1543,"Interface para os servi\xE7os que ser\xE3o utilizados no po-combo."),t()(),o(1544,"h4",10),e(1545,"M\xE9todos"),t(),o(1546,"table",43)(1547,"tr",14)(1548,"th",44)(1549,"div",23)(1550,"h4")(1551,"span",24),e(1552," getFilteredData "),t()()()()(),o(1553,"tr",22)(1554,"td",22)(1555,"p"),e(1556,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem a interface PoComboOption,
ser\xE1 informado por parametro o campo, de acordo com o fieldLabel, e o valor a ser pesquisado.`),t()()()(),o(1557,"h5")(1558,"b"),e(1559,"Par\xE2metros"),t()(),o(1560,"table",11)(1561,"tr",12)(1562,"th",13),e(1563,"Nome"),t(),o(1564,"th",13),e(1565,"Tipo"),t(),o(1566,"th",13),e(1567,"Descri\xE7\xE3o"),t()(),o(1568,"tr",14)(1569,"td",15),e(1570," params"),t(),o(1571,"td",19)(1572,"code",46),e(1573," any "),t()(),o(1574,"td",22)(1575,"p"),e(1576,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),t()()(),o(1577,"tr",14)(1578,"td",15),e(1579," filterParams"),t(),o(1580,"td",19)(1581,"code",46),e(1582," any "),t()(),o(1583,"td",22)(1584,"p"),e(1585,"Valor informado atrav\xE9s da propriedade "),o(1586,"code"),e(1587,"p-filter-params"),t(),e(1588,"."),t()()()(),l(1589,"br"),o(1590,"table",43)(1591,"tr",14)(1592,"th",44)(1593,"div",23)(1594,"h4")(1595,"span",24),e(1596," getObjectByValue "),t()()()()(),o(1597,"tr",22)(1598,"td",22)(1599,"p"),e(1600,`M\xE9todo respons\xE1vel por retornar um Observable que cont\xE9m apenas o objeto filtrado que seguem a interface PoComboOption,
ser\xE1 informado por parametro valor a ser pesquisado.`),t()()()(),o(1601,"h5")(1602,"b"),e(1603,"Par\xE2metros"),t()(),o(1604,"table",11)(1605,"tr",12)(1606,"th",13),e(1607,"Nome"),t(),o(1608,"th",13),e(1609,"Tipo"),t(),o(1610,"th",13),e(1611,"Descri\xE7\xE3o"),t()(),o(1612,"tr",14)(1613,"td",15),e(1614," value"),t(),o(1615,"td",19)(1616,"code",25),e(1617," string "),t(),o(1618,"code",27),e(1619," number "),t()(),o(1620,"td",22)(1621,"p"),e(1622,"Valor respons\xE1vel por realizar a busca de um \xFAnico objeto."),t()()(),o(1623,"tr",14)(1624,"td",15),e(1625," filterParams"),t(),o(1626,"td",19)(1627,"code",46),e(1628," any "),t()(),o(1629,"td",22)(1630,"p"),e(1631,"Valor informado atrav\xE9s da propriedade "),o(1632,"code"),e(1633,"p-filter-params"),t(),e(1634,"."),t()()()(),l(1635,"br"),o(1636,"h4",45)(1637,"code",5),e(1638,"PoComboLiterals"),t()(),o(1639,"div",2)(1640,"p"),e(1641,"Interface para defini\xE7\xE3o das literais usadas no "),o(1642,"code"),e(1643,"po-combo"),t(),e(1644,"."),t()(),o(1645,"h4",10),e(1646,"Propriedades"),t(),o(1647,"table",11)(1648,"tr",12)(1649,"th",13),e(1650,"Nome"),t(),o(1651,"th",13),e(1652,"Tipo"),t(),o(1653,"th",13),e(1654,"Descri\xE7\xE3o"),t()(),o(1655,"tr",14)(1656,"td",15)(1657,"div",23)(1658,"span",24),e(1659," chooseOption"),l(1660,"br"),t()()(),o(1661,"td",19)(1662,"code",25),e(1663,"string"),t()(),o(1664,"td",22)(1665,"em")(1666,"strong"),e(1667,"(opcional)"),t()(),o(1668,"p"),e(1669,"Texto exibido quando o combo estiver vazio."),t()()(),o(1670,"tr",14)(1671,"td",15)(1672,"div",23)(1673,"span",24),e(1674," clean"),l(1675,"br"),t()()(),o(1676,"td",19)(1677,"code",25),e(1678,"string"),t()(),o(1679,"td",22)(1680,"em")(1681,"strong"),e(1682,"(opcional)"),t()(),o(1683,"p"),e(1684,"Texto do aria-label do bot\xE3o de limpar"),t()()(),o(1685,"tr",14)(1686,"td",15)(1687,"div",23)(1688,"span",24),e(1689," noData"),l(1690,"br"),t()()(),o(1691,"td",19)(1692,"code",25),e(1693,"string"),t()(),o(1694,"td",22)(1695,"em")(1696,"strong"),e(1697,"(opcional)"),t()(),o(1698,"p"),e(1699,"Texto exibido quando n\xE3o houver itens na lista ou se, a pesquisa do filtro n\xE3o retornar nenhum item."),t()()()(),o(1700,"h4",45)(1701,"code",5),e(1702,"PoComboOptionGroup"),t()(),o(1703,"div",2)(1704,"p"),e(1705,"Interface dos agrupamentos da cole\xE7\xE3o que ser\xE1 exibida no dropdown do "),o(1706,"code"),e(1707,"po-combo"),t(),e(1708,"."),t()(),o(1709,"h4",10),e(1710,"Propriedades"),t(),o(1711,"table",11)(1712,"tr",12)(1713,"th",13),e(1714,"Nome"),t(),o(1715,"th",13),e(1716,"Tipo"),t(),o(1717,"th",13),e(1718,"Descri\xE7\xE3o"),t()(),o(1719,"tr",14)(1720,"td",15)(1721,"div",23)(1722,"span",24),e(1723," label"),l(1724,"br"),t()()(),o(1725,"td",19)(1726,"code",25),e(1727,"string"),t()(),o(1728,"td",22)(1729,"p"),e(1730,"T\xEDtulo para cada grupo de op\xE7\xF5es."),t(),o(1731,"p"),e(1732,`Recomenda\xE7\xE3o: evite usar labels id\xEAnticos em diferentes grupos. Labels iguais podem
causar ambiguidade para usu\xE1rios e dificultar a identifica\xE7\xE3o/sele\xE7\xE3o dos itens.`),t()()(),o(1733,"tr",14)(1734,"td",15)(1735,"div",23)(1736,"span",24),e(1737," options"),l(1738,"br"),t()()(),o(1739,"td",19)(1740,"code",47),e(1741,"Array<PoComboOption>"),t()(),o(1742,"td",22)(1743,"p"),e(1744,"Lista de itens a serem exibidos."),t()()()(),o(1745,"h4",45)(1746,"code",5),e(1747,"PoComboOption"),t()(),o(1748,"div",2)(1749,"p"),e(1750,"Interface que define as op\xE7\xF5es que ser\xE3o exibidas na lista do "),o(1751,"code"),e(1752,"po-combo"),t(),e(1753,"."),t()(),o(1754,"h4",10),e(1755,"Propriedades"),t(),o(1756,"table",11)(1757,"tr",12)(1758,"th",13),e(1759,"Nome"),t(),o(1760,"th",13),e(1761,"Tipo"),t(),o(1762,"th",13),e(1763,"Descri\xE7\xE3o"),t()(),o(1764,"tr",14)(1765,"td",15)(1766,"div",23)(1767,"span",24),e(1768," label"),l(1769,"br"),t()()(),o(1770,"td",19)(1771,"code",25),e(1772,"string"),t()(),o(1773,"td",22)(1774,"em")(1775,"strong"),e(1776,"(opcional)"),t()(),o(1777,"p"),e(1778,"Descri\xE7\xE3o exibida nas op\xE7\xF5es da lista."),t(),o(1779,"blockquote")(1780,"p"),e(1781,"Caso n\xE3o seja definida ser\xE1 assumido o valor definido na propriedade "),o(1782,"code"),e(1783,"value"),t(),e(1784,"."),t()()()(),o(1785,"tr",14)(1786,"td",15)(1787,"div",23)(1788,"span",24),e(1789," value"),l(1790,"br"),t()()(),o(1791,"td",19)(1792,"code",25),e(1793,"string "),t(),o(1794,"code",27),e(1795," number"),t()(),o(1796,"td",22)(1797,"p"),e(1798,"Valor do objeto que ser\xE1 atribu\xEDdo ao "),o(1799,"em"),e(1800,"model"),t(),e(1801,"."),t()()()(),o(1802,"h3"),e(1803,"Enums"),t(),o(1804,"h4",4)(1805,"code",5),e(1806,"PoComboFilterMode"),t()(),o(1807,"div",2)(1808,"p"),e(1809,"Define o tipo de busca usado no po-combo."),t()(),o(1810,"h4",10),e(1811,"Propriedades"),t(),o(1812,"table",11)(1813,"tr",12)(1814,"th",13),e(1815,"Nome"),t(),o(1816,"th",13),e(1817,"Descri\xE7\xE3o"),t()(),o(1818,"tr",14)(1819,"td",15)(1820,"div",23)(1821,"span",24),e(1822," startsWith"),l(1823,"br"),t()()(),o(1824,"td",22)(1825,"p"),e(1826,"Verifica se o texto "),o(1827,"em"),e(1828,"inicia"),t(),e(1829," com o valor pesquisado. Caso n\xE3o seja especificado um tipo, ser\xE1 esse o utilizado."),t()()(),o(1830,"tr",14)(1831,"td",15)(1832,"div",23)(1833,"span",24),e(1834," contains"),l(1835,"br"),t()()(),o(1836,"td",22)(1837,"p"),e(1838,"Verifica se o texto "),o(1839,"em"),e(1840,"cont\xE9m"),t(),e(1841," o valor pesquisado."),t()()(),o(1842,"tr",14)(1843,"td",15)(1844,"div",23)(1845,"span",24),e(1846," endsWith"),l(1847,"br"),t()()(),o(1848,"td",22)(1849,"p"),e(1850,"Verifica se o texto "),o(1851,"em"),e(1852,"finaliza"),t(),e(1853," com o valor pesquisado."),t()()()()())},dependencies:[w],encapsulation:2})}return a})();var tt=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,p){this.route=m,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let p=m.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(be(Te),be(ke))};static \u0275cmp=E({type:a,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title","Combo",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),l(3,"sample-po-combo-doc"),t(),o(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),l(5,"sample-po-combo-basic-view")(6,"sample-po-combo-labs-view")(7,"sample-po-combo-scheduling-view")(8,"sample-po-combo-transfer-view")(9,"sample-po-combo-heroes-view")(10,"sample-po-combo-heroes-reactive-form-view")(11,"sample-po-combo-infinity-scroll-view")(12,"sample-po-combo-hotels-view"),t()()()),p&2&&(s("p-actions",n.actions),r(2),s("p-active",n.activeTab==="doc"),r(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[We,x,y,He,Ie,je,Re,Qe,Je,Xe,$e,et],encapsulation:2})}return a})();var Gt=[{path:"",component:tt}],ot=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=ae({type:a});static \u0275inj=ie({imports:[he.forChild(Gt),he]})}return a})();var nn=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=ae({type:a});static \u0275inj=ie({imports:[Ne,ot]})}return a})();export{nn as DocPoComboModule};
