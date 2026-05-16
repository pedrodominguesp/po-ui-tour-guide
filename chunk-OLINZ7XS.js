import{o as y,p as Se}from"./chunk-AT3MKFJ3.js";import{Gb as C,Hb as x,Ja as j,S as de,U as R,Xa as M,_ as me,a as N,ab as V,r as se,tb as ue,w as A,ya as ce}from"./chunk-GCMU57WK.js";import{Ea as c,Fa as n,Ga as t,H as ee,Ha as l,I as F,Jb as ae,L,Mb as T,Mc as k,Nc as z,O as h,Oa as I,Oc as B,P as E,Pa as b,Pc as D,Qc as W,_a as q,bb as _,cb as e,cd as pe,db as K,eb as P,ed as re,gb as u,gd as Y,ha as s,hb as S,ib as g,ma as U,mc as le,nb as ne,oa as v,pa as G,pb as ie,qb as Q,rb as w,sb as oe,ta as te}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var Te=()=>({label:"Option 1",value:"1"}),Me=()=>({label:"Option 2",value:"2"}),Oe=(a,J)=>[a,J],ge=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","select","p-label","PO Select",3,"p-options"]],template:function(p,i){p&1&&l(0,"po-select",0),p&2&&c("p-options",oe(3,Oe,Q(1,Te),Q(2,Me)))},dependencies:[M],encapsulation:2})}return a})();var ke=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select Basic"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-basic/sample-po-select-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-select
  name="select"
  p-label="PO Select"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-select>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-select-basic/sample-po-select-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-select-basic',
  templateUrl: './sample-po-select-basic.component.html',
  standalone: false
})
export class SamplePoSelectBasicComponent {}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-basic"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),P(" ",i.sampleCodeButtonLabel),s(),c("ngClass",w(4,ke,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,ge],encapsulation:2})}return a})();var Ee=(()=>{class a{cdr=L(ae);helperText;event;help;label;option;options;optionsGroup;optionsGroupList=[];placeholder;properties;fieldErrorMessage;select;selectedOptionsGroup;selectOptionGroupSwitch;size;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"readonly",label:"Read Only"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=this.verifyOptionObject(this.options.concat(),this.option,this.optionsGroup),this.option={label:void 0,value:void 0},this.cdr.detectChanges()}changeEvent(r){this.event=r}optionsGroupSelection(){this.optionsGroup=this.selectedOptionsGroup}restore(){this.helperText="",this.event="",this.help=void 0,this.label=void 0,this.option={label:void 0,value:void 0},this.options=[],this.optionsGroup=void 0,this.optionsGroupList=[],this.placeholder="",this.properties=[],this.fieldErrorMessage="",this.select="",this.selectOptionGroupSwitch=!1,this.selectedOptionsGroup=void 0,this.size="medium"}restoreSwitch(r){r||(this.selectedOptionsGroup=void 0,this.optionsGroup=void 0)}insertGroupIntoSelectInput(r){this.selectedOptionsGroup=r,this.optionsGroupList=[...this.optionsGroupList,{label:r,value:r}]}verifyOptionObject(r,p,i){let{label:m,value:d}=p;if(i){let o=r.findIndex($=>$.label===i&&"options"in $);return o===-1?(this.insertGroupIntoSelectInput(i),[...r,{label:i,options:[{label:m,value:d}]}]):(r[o].options.push({label:m,value:d}),r)}return[...r,{label:m,value:d}]}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs"]],standalone:!1,decls:33,vars:37,consts:[["fOption","ngForm"],["f","ngForm"],["name","select",1,"po-md-12",3,"ngModelChange","p-blur","p-change","p-change-model","p-enter","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-loading","p-options","p-optional","p-placeholder","p-readonly","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["p-label","Po select options group"],["name","selectOptionGroupSwitch","p-label","Select options group",1,"po-lg-2","po-md-12",3,"p-change","ngModelChange","ngModel"],["name","selectedsOptionsGroup","p-label","Options group list",1,"po-lg-4","po-md-6",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","optionsGroup","p-label","New Options Group","p-required","",1,"po-lg-4","po-md-6",3,"ngModelChange","ngModel","p-disabled"],["p-label","Po select options"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-lg-3","po-md-6"],["p-label","Sample Restore",3,"p-click"]],template:function(p,i){if(p&1){let m=I();n(0,"po-select",2),g("ngModelChange",function(o){return h(m),S(i.select,o)||(i.select=o),E(o)}),b("p-blur",function(){return i.changeEvent("p-blur")})("p-change",function(){return i.changeEvent("p-change")})("p-change-model",function(){return i.changeEvent("p-change-model")})("p-enter",function(){return i.changeEvent("p-enter")})("p-keydown",function(){return i.changeEvent("p-keydown")}),t(),l(1,"po-divider"),n(2,"div",3),l(3,"po-info",4)(4,"po-info",5),t(),l(5,"po-divider"),n(6,"form",null,0),l(8,"po-divider",6),n(9,"div",3)(10,"po-switch",7),b("p-change",function(o){return i.restoreSwitch(o)}),g("ngModelChange",function(o){return h(m),S(i.selectOptionGroupSwitch,o)||(i.selectOptionGroupSwitch=o),E(o)}),t(),n(11,"po-select",8),g("ngModelChange",function(o){return h(m),S(i.selectedOptionsGroup,o)||(i.selectedOptionsGroup=o),E(o)}),b("p-change",function(){return i.optionsGroupSelection()}),t(),n(12,"po-input",9),g("ngModelChange",function(o){return h(m),S(i.optionsGroup,o)||(i.optionsGroup=o),E(o)}),t()(),l(13,"po-divider",10),n(14,"div",3)(15,"po-input",11),g("ngModelChange",function(o){return h(m),S(i.option.label,o)||(i.option.label=o),E(o)}),t(),n(16,"po-input",12),g("ngModelChange",function(o){return h(m),S(i.option.value,o)||(i.option.value=o),E(o)}),t()(),n(17,"div",3)(18,"po-button",13),b("p-click",function(){return i.addOption()}),t()()(),l(19,"po-divider"),n(20,"form",null,1)(22,"po-input",14),g("ngModelChange",function(o){return h(m),S(i.label,o)||(i.label=o),E(o)}),t(),n(23,"po-input",15),g("ngModelChange",function(o){return h(m),S(i.help,o)||(i.help=o),E(o)}),t(),n(24,"po-input",16),g("ngModelChange",function(o){return h(m),S(i.helperText,o)||(i.helperText=o),E(o)}),t(),n(25,"po-input",17),g("ngModelChange",function(o){return h(m),S(i.placeholder,o)||(i.placeholder=o),E(o)}),t(),n(26,"po-input",18),g("ngModelChange",function(o){return h(m),S(i.fieldErrorMessage,o)||(i.fieldErrorMessage=o),E(o)}),t(),n(27,"po-checkbox-group",19),g("ngModelChange",function(o){return h(m),S(i.properties,o)||(i.properties=o),E(o)}),t(),n(28,"po-radio-group",20),g("ngModelChange",function(o){return h(m),S(i.size,o)||(i.size=o),E(o)}),t(),n(29,"div",3)(30,"div",21)(31,"po-button",22),b("p-click",function(){return i.restore()}),t()()(),l(32,"form"),t()}if(p&2){let m=q(7);u("ngModel",i.select),c("p-helper",i.helperText)("p-disabled",i.properties.includes("disabled"))("p-help",i.help)("p-label",i.label)("p-loading",i.properties.includes("loading"))("p-options",i.options)("p-optional",i.properties.includes("optional"))("p-placeholder",i.placeholder)("p-readonly",i.properties.includes("readonly"))("p-required",i.properties.includes("required"))("p-field-error-message",i.fieldErrorMessage)("p-show-required",i.properties.includes("showRequired"))("p-size",i.size)("p-error-limit",i.properties==null?null:i.properties.includes("errorLimit"))("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel")),s(3),c("p-value",i.select),s(),c("p-value",i.event),s(6),u("ngModel",i.selectOptionGroupSwitch),s(),u("ngModel",i.selectedOptionsGroup),c("p-disabled",!i.selectOptionGroupSwitch)("p-options",i.optionsGroupList),s(),u("ngModel",i.optionsGroup),c("p-disabled",!i.selectOptionGroupSwitch),s(3),u("ngModel",i.option.label),s(),u("ngModel",i.option.value),s(2),c("p-disabled",m.invalid),s(4),u("ngModel",i.label),s(),u("ngModel",i.help),s(),u("ngModel",i.helperText),s(),u("ngModel",i.placeholder),s(),u("ngModel",i.fieldErrorMessage),s(),u("ngModel",i.properties),c("p-options",i.propertiesOptions),s(),u("ngModel",i.size),c("p-options",i.sizeOptions)}},dependencies:[W,k,z,D,B,A,N,de,R,j,M,ce,V],encapsulation:2})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select Labs"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-labs/sample-po-select-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-select
  class="po-md-12"
  name="select"
  [(ngModel)]="select"
  [p-helper]="helperText"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-loading]="properties.includes('loading')"
  [p-options]="options"
  [p-optional]="properties.includes('optional')"
  [p-placeholder]="placeholder"
  [p-readonly]="properties.includes('readonly')"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
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
</po-select>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="select"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <po-divider p-label="Po select options group"></po-divider>

  <div class="po-row">
    <po-switch
      class="po-lg-2 po-md-12"
      name="selectOptionGroupSwitch"
      (p-change)="restoreSwitch($event)"
      [(ngModel)]="selectOptionGroupSwitch"
      p-label="Select options group"
    >
    </po-switch>

    <po-select
      class="po-lg-4 po-md-6"
      name="selectedsOptionsGroup"
      [(ngModel)]="selectedOptionsGroup"
      p-label="Options group list"
      [p-disabled]="!selectOptionGroupSwitch"
      [p-options]="optionsGroupList"
      (p-change)="optionsGroupSelection()"
    >
    </po-select>

    <po-input
      class="po-lg-4 po-md-6"
      name="optionsGroup"
      [(ngModel)]="optionsGroup"
      p-label="New Options Group"
      [p-disabled]="!selectOptionGroupSwitch"
      p-required
    >
    </po-input>
  </div>

  <po-divider p-label="Po select options"></po-divider>
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-4" p-label="Add Option" [p-disabled]="fOption.invalid" (p-click)="addOption()">
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

  <po-input class="po-md-6" name="help" [(ngModel)]="help" p-label="Help"> </po-input>

  <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

  <po-input class="po-md-6" name="placeholder" [(ngModel)]="placeholder" p-label="Placeholder"> </po-input>

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
    name="size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <div class="po-lg-3 po-md-6">
      <po-button p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </div>
  <form></form>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-select-labs/sample-po-select-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption, PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-labs',
  templateUrl: './sample-po-select-labs.component.html',
  standalone: false
})
export class SamplePoSelectLabsComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  helperText: string;
  event: string;
  help: string;
  label: string;
  option: PoSelectOption;
  options: Array<PoSelectOption | PoSelectOptionGroup>;
  optionsGroup: string;
  optionsGroupList: Array<PoSelectOption> = [];
  placeholder: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  select: string;
  selectedOptionsGroup: string;
  selectOptionGroupSwitch: boolean;
  size: string;

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'readonly', label: 'Read Only' },
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
    this.cdr.detectChanges();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  optionsGroupSelection() {
    this.optionsGroup = this.selectedOptionsGroup;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.help = undefined;
    this.label = undefined;
    this.option = { label: undefined, value: undefined };
    this.options = [];
    this.optionsGroup = undefined;
    this.optionsGroupList = [];
    this.placeholder = '';
    this.properties = [];
    this.fieldErrorMessage = '';
    this.select = '';
    this.selectOptionGroupSwitch = false;
    this.selectedOptionsGroup = undefined;
    this.size = 'medium';
  }

  restoreSwitch(event: boolean) {
    if (!event) {
      this.selectedOptionsGroup = undefined;
      this.optionsGroup = undefined;
    }
  }

  private insertGroupIntoSelectInput(value: string) {
    this.selectedOptionsGroup = value;
    this.optionsGroupList = [...this.optionsGroupList, { label: value, value }];
  }

  private verifyOptionObject(
    options: Array<PoSelectOption | PoSelectOptionGroup>,
    option: PoSelectOption,
    optionsGroup?: string
  ) {
    const { label, value } = option;

    if (optionsGroup) {
      const indexItem = options.findIndex(
        (optionItem: PoSelectOptionGroup) => optionItem.label === optionsGroup && 'options' in optionItem
      );

      if (indexItem === -1) {
        this.insertGroupIntoSelectInput(optionsGroup);
        return [...options, { label: optionsGroup, options: [{ label, value }] }];
      }

      (options as Array<PoSelectOptionGroup>)[indexItem].options.push({ label, value });
      return options;
    }

    return [...options, { label, value }];
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-labs"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),P(" ",i.sampleCodeButtonLabel),s(),c("ngClass",w(4,qe,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,Ee],encapsulation:2})}return a})();var Z=(()=>{class a{http=L(le);url="https://po-sample-api.onrender.com/v1/sampleSelect";getCitiesByState(r){return this.http.get(`${this.url}/getCities/${r}`)}getStates(){return this.http.get(`${this.url}/getStates`)}static \u0275fac=function(p){return new(p||a)};static \u0275prov=ee({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Ge(a,J){if(a&1&&(n(0,"div",17),l(1,"po-avatar",18),n(2,"div",19)(3,"div",20),e(4),t(),n(5,"div",21),e(6),t()()()),a&2){let r=J.$implicit;s(),c("p-src",ne("https://po-sample-api.onrender.com/v1/sampleSelect/",r.value,".png")),s(3),K(r.label),s(2),K(r.value)}}var fe=(()=>{class a{sampleService=L(Z);address;city;cityOptions;document;documentLabel;documentType;mask;minLength;name;nameLabel;state;stateOptions;options=[{label:"CPF",value:"CPF"},{label:"CNPJ",value:"CNPJ"}];citiesSubscription;statesSubscription;ngOnDestroy(){this.citiesSubscription?.unsubscribe(),this.statesSubscription?.unsubscribe()}ngOnInit(){this.initialize(),this.getStates(),this.changeType(this.documentType)}changeType(r){r==="CPF"?(this.documentLabel="CPF Number",this.mask="999.999.999-99",this.minLength=14,this.nameLabel="Client Name"):(this.documentLabel="CNPJ Number",this.mask="99.999.999/9999-99",this.minLength=18,this.nameLabel="Company Name"),this.address="",this.document="",this.name=""}initialize(){this.cityOptions=[],this.stateOptions=[],this.documentType="CPF"}onChangeState(){this.getCitiesByState(this.state)}getCityByValue(r){let p=this.cityOptions.find(i=>i.value===r);return p?p.label:""}getStateByValue(r){let p=this.stateOptions.find(i=>i.value===r);return p?p.label:""}getCitiesByState(r){this.citiesSubscription=this.sampleService.getCitiesByState(r).subscribe(p=>{this.cityOptions=p.items,this.city=this.cityOptions[0].value})}getStates(){this.statesSubscription=this.sampleService.getStates().subscribe(r=>{this.stateOptions=r.items,this.state="sp",this.getCitiesByState(this.state)})}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration"]],standalone:!1,features:[ie([Z])],decls:27,vars:22,consts:[["f","ngForm"],["modal",""],[1,"po-row"],["name","documentType","p-label","Document type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","document","p-mask-format-model","","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label","p-mask","p-minlength"],["name","name","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-label"],["name","address","p-label","Address",1,"po-md-6",3,"ngModelChange","ngModel"],["name","state","p-label","State",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["p-select-option-template",""],["name","city","p-label","City",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Send Informations",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Informations"],["p-label","Document type",1,"po-md-6",3,"p-value"],[1,"po-md-6",3,"p-label","p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","State",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"],[1,"sample-select-option-template-container"],["p-size","xs",3,"p-src"],[1,"sample-select-option-template-margin"],[1,"sample-select-option-template-label"],[1,"sample-select-option-template-value"]],template:function(p,i){if(p&1){let m=I();n(0,"form",null,0)(2,"div",2)(3,"po-radio-group",3),g("ngModelChange",function(o){return h(m),S(i.documentType,o)||(i.documentType=o),E(o)}),b("p-change",function(o){return i.changeType(o)}),t(),n(4,"po-input",4),g("ngModelChange",function(o){return h(m),S(i.document,o)||(i.document=o),E(o)}),t()(),n(5,"div",2)(6,"po-input",5),g("ngModelChange",function(o){return h(m),S(i.name,o)||(i.name=o),E(o)}),t(),n(7,"po-input",6),g("ngModelChange",function(o){return h(m),S(i.address,o)||(i.address=o),E(o)}),t()(),n(8,"div",2)(9,"po-select",7),g("ngModelChange",function(o){return h(m),S(i.state,o)||(i.state=o),E(o)}),b("p-change",function(){return i.onChangeState()}),te(10,Ge,7,4,"ng-template",8),t(),n(11,"po-select",9),g("ngModelChange",function(o){return h(m),S(i.city,o)||(i.city=o),E(o)}),t()(),n(12,"div",2)(13,"po-button",10),b("p-click",function(){h(m);let o=q(15);return E(o.open())}),t()()(),n(14,"po-modal",11,1)(16,"div",2),l(17,"po-info",12)(18,"po-info",13),t(),l(19,"po-divider"),n(20,"div",2),l(21,"po-info",13)(22,"po-info",14),t(),l(23,"po-divider"),n(24,"div",2),l(25,"po-info",15)(26,"po-info",16),t()()}if(p&2){let m=q(1);s(3),u("ngModel",i.documentType),c("p-options",i.options),s(),u("ngModel",i.document),c("p-label",i.documentLabel)("p-mask",i.mask)("p-minlength",i.minLength),s(2),u("ngModel",i.name),c("p-label",i.nameLabel),s(),u("ngModel",i.address),s(2),u("ngModel",i.state),c("p-options",i.stateOptions),s(2),u("ngModel",i.city),c("p-options",i.cityOptions),s(2),c("p-disabled",m.invalid),s(4),c("p-value",i.documentType),s(),c("p-label",i.documentLabel)("p-value",i.document),s(3),c("p-label",i.nameLabel)("p-value",i.name),s(),c("p-value",i.address),s(3),c("p-value",i.getStateByValue(i.state)),s(),c("p-value",i.getCityByValue(i.city))}},dependencies:[W,k,z,D,B,se,A,N,R,j,M,V,me],styles:[".sample-select-option-template-container[_ngcontent-%COMP%]{display:inline-flex;align-items:flex-start;width:100%}.sample-select-option-template-margin[_ngcontent-%COMP%]{margin:5px}.sample-select-option-template-label[_ngcontent-%COMP%]{font-size:16px}.sample-select-option-template-value[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}"]})}return a})();var ze=a=>({"docs-sample-code-tabs":a}),Ce=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-customer-registration-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select - Customer registration"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.html"),t(),n(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-md-6"
      name="documentType"
      [(ngModel)]="documentType"
      p-label="Document type"
      [p-options]="options"
      (p-change)="changeType($event)"
    >
    </po-radio-group>

    <po-input
      class="po-md-6"
      name="document"
      [(ngModel)]="document"
      p-mask-format-model
      p-required
      [p-label]="documentLabel"
      [p-mask]="mask"
      [p-minlength]="minLength"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input class="po-md-6" name="name" [(ngModel)]="name" p-required [p-label]="nameLabel"> </po-input>

    <po-input class="po-md-6" name="address" [(ngModel)]="address" p-label="Address"> </po-input>
  </div>

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="state"
      [(ngModel)]="state"
      p-label="State"
      [p-options]="stateOptions"
      (p-change)="onChangeState()"
    >
      <ng-template p-select-option-template let-option>
        <div class="sample-select-option-template-container">
          <po-avatar p-size="xs" p-src="https://po-sample-api.onrender.com/v1/sampleSelect/{ { option.value }}.png">
          </po-avatar>

          <div class="sample-select-option-template-margin">
            <div class="sample-select-option-template-label">{ { option.label }}</div>
            <div class="sample-select-option-template-value">{ { option.value }}</div>
          </div>
        </div>
      </ng-template>
    </po-select>

    <po-select class="po-md-6" name="city" [(ngModel)]="city" p-label="City" [p-options]="cityOptions"> </po-select>
  </div>

  <div class="po-row">
    <po-button class="po-md-4" p-label="Send Informations" [p-disabled]="f.invalid" (p-click)="modal.open()">
    </po-button>
  </div>
</form>

<po-modal #modal p-title="Informations">
  <div class="po-row">
    <po-info class="po-md-6" p-label="Document type" [p-value]="documentType"> </po-info>

    <po-info class="po-md-6" [p-label]="documentLabel" [p-value]="document"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" [p-label]="nameLabel" [p-value]="name"> </po-info>

    <po-info class="po-md-6" p-label="Address" [p-value]="address"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-6" p-label="State" [p-value]="getStateByValue(state)"> </po-info>

    <po-info class="po-md-6" p-label="City" [p-value]="getCityByValue(city)"> </po-info>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { Subscription } from 'rxjs';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

import { SamplePoSelectCustomerRegistrationService } from './sample-po-select-customer-registration.service';

@Component({
  selector: 'sample-po-select-customer-registration',
  templateUrl: './sample-po-select-customer-registration.component.html',
  providers: [SamplePoSelectCustomerRegistrationService],
  styleUrls: ['./sample-po-select-customer-registration.component.css'],
  standalone: false
})
export class SamplePoSelectCustomerRegistrationComponent implements OnDestroy, OnInit {
  private sampleService = inject(SamplePoSelectCustomerRegistrationService);

  address: string;
  city: number;
  cityOptions: Array<PoSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<PoSelectOption>;

  readonly options: Array<PoRadioGroupOption> = [
    { label: 'CPF', value: 'CPF' },
    { label: 'CNPJ', value: 'CNPJ' }
  ];

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  ngOnDestroy() {
    this.citiesSubscription?.unsubscribe();
    this.statesSubscription?.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService
      .getCitiesByState(state)
      .subscribe((cities: { items: Array<PoSelectOption> }) => {
        this.cityOptions = cities.items;
        this.city = this.cityOptions[0].value as number;
      });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: { items: Array<PoSelectOption> }) => {
      this.stateOptions = states.items;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-select-customer-registration/sample-po-select-customer-registration.service.ts"),t(),n(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoSelectCustomerRegistrationService {
  private http = inject(HttpClient);

  private url: string = 'https://po-sample-api.onrender.com/v1/sampleSelect';

  getCitiesByState(uf: string) {
    return this.http.get(\`\${this.url}/getCities/\${uf}\`);
  }

  getStates() {
    return this.http.get(\`\${this.url}/getStates\`);
  }
}
`),t()()(),n(25,"po-tab",10)(26,"div")(27,"label",6),e(28,"sample-po-select-customer-registration/sample-po-select-customer-registration.component.css"),t(),n(29,"pre",11),e(30,`.sample-select-option-template-container {
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
}

.sample-select-option-template-margin {
  margin: 5px;
}

.sample-select-option-template-label {
  font-size: 16px;
}

.sample-select-option-template-value {
  font-size: 12px;
  text-transform: uppercase;
}
`),t()()()()(),n(31,"div",12),l(32,"sample-po-select-customer-registration"),t(),l(33,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),P(" ",i.sampleCodeButtonLabel),s(),c("ngClass",w(4,ze,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,fe],encapsulation:2})}return a})();var xe=(()=>{class a{select;fieldLabel="nomeFantasia";fieldValue="cnpj";empresas=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];labels=[{label:"Dados",options:[{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"email",value:"email"}]},{label:"Cidade",options:[{label:"origem",value:"origem"}]}];values=[{label:"codigo",value:"codigo"},{label:"cnpj",value:"cnpj"},{label:"id",value:"id"},{label:"data",value:"data"}];onChange(r){this.select=void 0}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies"]],standalone:!1,decls:5,vars:9,consts:[["name","select","p-label","PO Select",3,"ngModelChange","ngModel","p-field-value","p-field-label","p-options"],["p-label","Model","name","selectInfo",3,"p-valueChange","p-value"],[1,"po-row"],["name","fieldLabel","p-label","p-field-label",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"],["name","selectValue","p-label","p-field-value",1,"po-md-6",3,"p-change","ngModelChange","p-options","ngModel"]],template:function(p,i){p&1&&(n(0,"po-select",0),g("ngModelChange",function(d){return S(i.select,d)||(i.select=d),d}),t(),n(1,"po-info",1),g("p-valueChange",function(d){return S(i.select,d)||(i.select=d),d}),t(),n(2,"div",2)(3,"po-select",3),b("p-change",function(d){return i.onChange(d)}),g("ngModelChange",function(d){return S(i.fieldLabel,d)||(i.fieldLabel=d),d}),t(),n(4,"po-select",4),b("p-change",function(d){return i.onChange(d)}),g("ngModelChange",function(d){return S(i.fieldValue,d)||(i.fieldValue=d),d}),t()()),p&2&&(u("ngModel",i.select),c("p-field-value",i.fieldValue)("p-field-label",i.fieldLabel)("p-options",i.empresas),s(),u("p-value",i.select),s(2),c("p-options",i.labels),u("ngModel",i.fieldLabel),s(),c("p-options",i.values),u("ngModel",i.fieldValue))},dependencies:[k,D,M,V],encapsulation:2})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),ye=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-companies-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(l(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Select Companies"),t(),n(4,"a",2),b("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-select-companies/sample-po-select-companies.component.html"),t(),n(13,"pre",7),e(14,`<po-select
  name="select"
  p-label="PO Select"
  [(ngModel)]="select"
  [p-field-value]="fieldValue"
  [p-field-label]="fieldLabel"
  [p-options]="empresas"
>
</po-select>

<po-info p-label="Model" name="selectInfo" [(p-value)]="select"> </po-info>

<div class="po-row">
  <po-select
    class="po-md-6"
    name="fieldLabel"
    p-label="p-field-label"
    [p-options]="labels"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldLabel"
  >
  </po-select>

  <po-select
    class="po-md-6"
    name="selectValue"
    p-label="p-field-value"
    [p-options]="values"
    (p-change)="onChange($event)"
    [(ngModel)]="fieldValue"
  >
  </po-select>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-select-companies/sample-po-select-companies.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoSelectOption, PoSelectOptionGroup } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-select-companies',
  templateUrl: './sample-po-select-companies.component.html',
  standalone: false
})
export class SamplePoSelectCompaniesComponent {
  select: Array<string>;
  fieldLabel = 'nomeFantasia';
  fieldValue = 'cnpj';

  empresas: Array<any> = [
    {
      codigo: '1',
      nomeFantasia: 'TOTVS SA',
      razaoSocial: 'TOTVS LTDA',
      label: 'TOTVS COMPANY',
      cnpj: '01.234.567/0000-01',
      value: '100',
      id: '10',
      email: 'totvscompany@sample.com',
      data: '10/03/2015',
      origem: 'S\xE3o Paulo'
    },
    {
      codigo: '2',
      nomeFantasia: 'INSTITUTO TOTVS DE ENSINO SA',
      razaoSocial: 'INST TOTVS DE ENSINO LTDA',
      label: 'INST TOTVS',
      cnpj: '02.345.678/0000-02',
      value: '200',
      id: '20',
      email: 'insttotvs@sample.com',
      data: '10/10/2020',
      origem: 'Joinville'
    },
    {
      codigo: '3',
      nomeFantasia: 'TOTVS ENTERPRISE SA',
      razaoSocial: 'TOTVS ENTERPRISE LTDA ',
      label: 'ENT TOTVS',
      cnpj: '03.456.789/0000-03',
      value: '300',
      id: '30',
      email: 'enttotvs@sample.com',
      data: '10/01/2022',
      origem: 'Curitiba'
    }
  ];

  readonly labels: Array<PoSelectOptionGroup> = [
    {
      label: 'Dados',
      options: [
        { label: 'nomeFantasia', value: 'nomeFantasia' },
        { label: 'razaoSocial', value: 'razaoSocial' },
        { label: 'email', value: 'email' }
      ]
    },
    {
      label: 'Cidade',
      options: [{ label: 'origem', value: 'origem' }]
    }
  ];

  readonly values: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'id', value: 'id' },
    { label: 'data', value: 'data' }
  ];

  onChange(event) {
    this.select = undefined;
  }
}
`),t()()()()(),n(21,"div",10),l(22,"sample-po-select-companies"),t(),l(23,"hr")),p&2&&(s(5),_("po-icon "+i.sampleCodeButtonIcon),s(),P(" ",i.sampleCodeButtonLabel),s(),c("ngClass",w(4,Ne,i.hideSampleCodeTabs)))},dependencies:[T,y,C,x,xe],encapsulation:2})}return a})();var _e=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=v({type:a,selectors:[["sample-po-select-doc"]],standalone:!1,decls:1068,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo-option-template"],["href","/documentation/po-select-option-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","number"]],template:function(p,i){p&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoSelectComponent"),t()(),n(21,"div",2)(22,"p"),e(23,` O componente po-select exibe uma lista de valores e permite que o usu\xE1rio selecione um desses valores.
Os valores listados podem ser fixos ou din\xE2micos de acordo com a necessidade do desenvolvedor, dando mais flexibilidade ao componente.
O po-select n\xE3o permite que o usu\xE1rio informe um valor diferente dos valores listados, isso garante a consist\xEAncia da informa\xE7\xE3o.
O po-select n\xE3o permite que sejam passados valores duplicados, undefined e null para as op\xE7\xF5es, excluindo-os da lista.`),t(),n(24,"blockquote")(25,"p"),e(26,"Ao passar um valor para o "),n(27,"em"),e(28,"model"),t(),e(29," que n\xE3o est\xE1 na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),n(30,"code"),e(31,"undefined"),t(),e(32,"."),t()(),n(33,"p"),e(34,"Tamb\xE9m existe a possibilidade de utilizar um "),n(35,"em"),e(36,"template"),t(),e(37,` para a exibi\xE7\xE3o dos itens da lista,
veja mais em `),n(38,"strong")(39,"a",6),e(40,"p-combo-option-template"),t()(),e(41,"."),t(),n(42,"blockquote")(43,"p"),e(44,"Obs: o template "),n(45,"strong")(46,"a",7),e(47,"p-select-option-template"),t()(),e(48," ser\xE1 depreciado na vers\xE3o 14.x.x."),t()(),n(49,"h4"),e(50,"Tokens customiz\xE1veis"),t(),n(51,"p"),e(52,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(53,"blockquote")(54,"p"),e(55,"Para maiores informa\xE7\xF5es, acesse o guia "),n(56,"a",8),e(57,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(58,"."),t()(),n(59,"table")(60,"thead")(61,"tr")(62,"th"),e(63,"Propriedade"),t(),n(64,"th"),e(65,"Descri\xE7\xE3o"),t(),n(66,"th"),e(67,"Valor Padr\xE3o"),t()()(),n(68,"tbody")(69,"tr")(70,"td")(71,"strong"),e(72,"Default Values"),t()(),l(73,"td")(74,"td"),t(),n(75,"tr")(76,"td")(77,"code"),e(78,"--font-family"),t()(),n(79,"td"),e(80,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(81,"td")(82,"code"),e(83,"var(--font-family-theme)"),t()()(),n(84,"tr")(85,"td")(86,"code"),e(87,"--font-size"),t()(),n(88,"td"),e(89,"Tamanho da fonte"),t(),n(90,"td")(91,"code"),e(92,"var(--font-size-default)"),t()()(),n(93,"tr")(94,"td")(95,"code"),e(96,"--text-color-empty"),t()(),n(97,"td"),e(98,"Cor do placeholder"),t(),n(99,"td")(100,"code"),e(101,"var(--color-neutral-light-30)"),t()()(),n(102,"tr")(103,"td")(104,"code"),e(105,"--color"),t()(),n(106,"td"),e(107,"Cor da borda"),t(),n(108,"td")(109,"code"),e(110,"var(--color-neutral-dark-70)"),t()()(),n(111,"tr")(112,"td")(113,"code"),e(114,"--background"),t()(),n(115,"td"),e(116,"Cor de background"),t(),n(117,"td")(118,"code"),e(119,"var(--color-neutral-light-05)"),t()()(),n(120,"tr")(121,"td")(122,"code"),e(123,"--text-color"),t()(),n(124,"td"),e(125,"Cor do texto"),t(),n(126,"td")(127,"code"),e(128,"var(--color-neutral-dark-90)"),t()()(),n(129,"tr")(130,"td")(131,"code"),e(132,"--padding-horizontal"),t()(),n(133,"td"),e(134,"Preenchimento horizontal"),t(),n(135,"td")(136,"code"),e(137,"0.5em"),t()()(),n(138,"tr")(139,"td")(140,"code"),e(141,"--padding-vertical"),t()(),n(142,"td"),e(143,"Preenchimento vertical"),t(),n(144,"td")(145,"code"),e(146,"0.7em"),t()()(),n(147,"tr")(148,"td")(149,"code"),e(150,"--field-container-title-justify"),t()(),n(151,"td"),e(152,"Alinhamento horizontal do t\xEDtulo ("),n(153,"code"),e(154,"justify-content"),t(),e(155,")"),t(),n(156,"td")(157,"code"),e(158,"space-between"),t()()(),n(159,"tr")(160,"td")(161,"code"),e(162,"--field-container-title-flex"),t()(),n(163,"td"),e(164,"Flex do t\xEDtulo ("),n(165,"code"),e(166,"flex"),t(),e(167,")"),t(),n(168,"td")(169,"code"),e(170,"1 auto"),t()()(),n(171,"tr")(172,"td")(173,"strong"),e(174,"Hover"),t()(),l(175,"td")(176,"td"),t(),n(177,"tr")(178,"td")(179,"code"),e(180,"--color-hover"),t()(),n(181,"td"),e(182,"Cor principal no estado hover"),t(),n(183,"td")(184,"code"),e(185,"var(--color-brand-01-dark)"),t()()(),n(186,"tr")(187,"td")(188,"code"),e(189,"--background-hover"),t()(),n(190,"td"),e(191,"Cor de background no estado hover"),t(),n(192,"td")(193,"code"),e(194,"var(--color-brand-01-lighter)"),t()()(),n(195,"tr")(196,"td")(197,"strong"),e(198,"Focused"),t()(),l(199,"td")(200,"td"),t(),n(201,"tr")(202,"td")(203,"code"),e(204,"--outline-color-focused"),t()(),n(205,"td"),e(206,"Cor do outline do estado de focus"),t(),n(207,"td")(208,"code"),e(209,"var(--color-action-focus)"),t()()(),n(210,"tr")(211,"td")(212,"code"),e(213,"--color-focused"),t()(),n(214,"td"),e(215,"Cor da borda no estado de focus"),t(),n(216,"td")(217,"code"),e(218,"var(--color-action-default)"),t()()(),n(219,"tr")(220,"td")(221,"strong"),e(222,"Disabled"),t()(),l(223,"td")(224,"td"),t(),n(225,"tr")(226,"td")(227,"code"),e(228,"--color-disabled"),t()(),n(229,"td"),e(230,"Cor principal no estado disabled"),t(),n(231,"td")(232,"code"),e(233,"var(--color-neutral-light-30)"),t()()(),n(234,"tr")(235,"td")(236,"code"),e(237,"--background-color-disabled"),t(),e(238,"\xA0"),t(),n(239,"td"),e(240,"Cor de background no estado disabled"),t(),n(241,"td")(242,"code"),e(243,"var(--color-neutral-light-20)"),t()()()()()(),n(244,"div",9)(245,"h4",10),e(246,"Seletor"),t(),n(247,"pre",11),e(248,`<po-select
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    p-optional="boolean"
    p-options="any[]"
    p-placeholder="string"
    p-helper="PoHelperOptions | string"
    p-readonly="boolean"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-select>
`),t()(),n(249,"h4",12),e(250,"Propriedades"),t(),n(251,"table",13)(252,"tr",14)(253,"th",15),e(254,"Nome"),t(),n(255,"th",15),e(256,"Tipo"),t(),n(257,"th",15),e(258,"Padr\xE3o"),t(),n(259,"th",15),e(260,"Descri\xE7\xE3o"),t()(),n(261,"tr",16)(262,"td",17)(263,"div",18)(264,"span",19),e(265," (p-additional-help)"),l(266,"br"),t()(),n(267,"div",20),e(268,"Deprecated"),t()(),n(269,"td",21)(270,"code",22),e(271,"EventEmitter"),t()(),n(272,"td",23),e(273,"-"),t(),n(274,"td",24)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),n(278,"p"),e(279,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(280,"blockquote")(281,"p"),e(282,"Essa propriedade est\xE1 "),n(283,"strong"),e(284,"depreciada"),t(),e(285," e ser\xE1 removida na vers\xE3o "),n(286,"code"),e(287,"23.x.x"),t(),e(288,". Recomendamos utilizar a propriedade "),n(289,"code"),e(290,"p-helper"),t(),e(291," que oferece mais recursos e flexibilidade."),t()()()(),n(292,"tr",16)(293,"td",17)(294,"div",25)(295,"span",26),e(296," p-additional-help-tooltip"),l(297,"br"),t()(),n(298,"div",20),e(299,"Deprecated"),t()(),n(300,"td",21)(301,"code",27),e(302,"string"),t()(),n(303,"td",23),e(304,"-"),t(),n(305,"td",24)(306,"em")(307,"strong"),e(308,"(opcional)"),t()(),n(309,"p"),e(310,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(311,"code"),e(312,"po-helper"),t(),e(313,`.
`),n(314,"strong"),e(315,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(316,"blockquote")(317,"p"),e(318,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(319,"blockquote")(320,"p"),e(321,"Essa propriedade est\xE1 "),n(322,"strong"),e(323,"depreciada"),t(),e(324," e ser\xE1 removida na vers\xE3o "),n(325,"code"),e(326,"23.x.x"),t(),e(327,". Recomendamos utilizar a propriedade "),n(328,"code"),e(329,"p-helper"),t(),e(330," que oferece mais recursos e flexibilidade."),t()()()(),n(331,"tr",16)(332,"td",17)(333,"div",25)(334,"span",26),e(335," p-append-in-body"),l(336,"br"),t()()(),n(337,"td",21)(338,"code",28),e(339,"boolean"),t()(),n(340,"td",23)(341,"p")(342,"code"),e(343,"false"),t()()(),n(344,"td",24)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),n(348,"p"),e(349,"Define que o popover ("),n(350,"code"),e(351,"p-helper"),t(),e(352," e/ou "),n(353,"code"),e(354,"p-error-limit"),t(),e(355,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(356,"blockquote")(357,"p"),e(358,"Quando utilizado com "),n(359,"code"),e(360,"p-helper"),t(),e(361,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(362,"tr",16)(363,"td",17)(364,"div",18)(365,"span",19),e(366," (p-blur)"),l(367,"br"),t()()(),n(368,"td",21)(369,"code",22),e(370,"EventEmitter"),t()(),n(371,"td",23),e(372,"-"),t(),n(373,"td",24)(374,"em")(375,"strong"),e(376,"(opcional)"),t()(),n(377,"p"),e(378,"Evento disparado ao sair do campo."),t()()(),n(379,"tr",16)(380,"td",17)(381,"div",18)(382,"span",19),e(383," (p-change)"),l(384,"br"),t()()(),n(385,"td",21)(386,"code",22),e(387,"EventEmitter"),t()(),n(388,"td",23),e(389,"-"),t(),n(390,"td",24)(391,"em")(392,"strong"),e(393,"(opcional)"),t()(),n(394,"p"),e(395,"Evento disparado ao alterar valor do campo."),t()()(),n(396,"tr",16)(397,"td",17)(398,"div",25)(399,"span",26),e(400," p-compact-label"),l(401,"br"),t()()(),n(402,"td",21)(403,"code",28),e(404,"boolean"),t()(),n(405,"td",23)(406,"p")(407,"code"),e(408,"false"),t()()(),n(409,"td",24)(410,"em")(411,"strong"),e(412,"(opcional)"),t()(),n(413,"p"),e(414,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),n(415,"p"),e(416,"Quando habilitado ("),n(417,"code"),e(418,"true"),t(),e(419,"), o modo compacto afeta o conjunto composto por:"),t(),n(420,"ul")(421,"li")(422,"code"),e(423,"po-label"),t()(),n(424,"li")(425,"code"),e(426,"p-requirement (showRequired)"),t()(),n(427,"li")(428,"code"),e(429,"po-helper"),t()()(),n(430,"p"),e(431,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),n(432,"p"),e(433,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),n(434,"ul")(435,"li")(436,"code"),e(437,"--field-container-title-justify"),t()(),n(438,"li")(439,"code"),e(440,"--field-container-title-flex"),t()()(),n(441,"p"),e(442,"Exemplo:"),t(),n(443,"pre")(444,"code"),e(445,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),n(446,"p"),e(447,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),n(448,"tr",16)(449,"td",17)(450,"div",25)(451,"span",26),e(452," p-disabled"),l(453,"br"),t()()(),n(454,"td",21)(455,"code",28),e(456,"boolean"),t()(),n(457,"td",23)(458,"p")(459,"code"),e(460,"false"),t()()(),n(461,"td",24)(462,"em")(463,"strong"),e(464,"(opcional)"),t()(),n(465,"p"),e(466,"Indica se o campo ser\xE1 desabilitado."),t()()(),n(467,"tr",16)(468,"td",17)(469,"div",25)(470,"span",26),e(471," p-error-limit"),l(472,"br"),t()()(),n(473,"td",21)(474,"code",28),e(475,"boolean"),t()(),n(476,"td",23)(477,"p")(478,"code"),e(479,"false"),t()()(),n(480,"td",24)(481,"em")(482,"strong"),e(483,"(opcional)"),t()(),n(484,"p"),e(485,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),n(486,"blockquote")(487,"p"),e(488,"Caso essa propriedade seja definida como "),n(489,"code"),e(490,"true"),t(),e(491,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),n(492,"tr",16)(493,"td",17)(494,"div",25)(495,"span",26),e(496," p-field-error-message"),l(497,"br"),t()()(),n(498,"td",21)(499,"code",27),e(500,"string"),t()(),n(501,"td",23),e(502,"-"),t(),n(503,"td",24)(504,"em")(505,"strong"),e(506,"(opcional)"),t()(),n(507,"p"),e(508,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),n(509,"blockquote")(510,"p"),e(511,"Necess\xE1rio que a propriedade "),n(512,"code"),e(513,"p-required"),t(),e(514," esteja habilitada."),t()()()(),n(515,"tr",16)(516,"td",17)(517,"div",25)(518,"span",26),e(519," p-field-label"),l(520,"br"),t()()(),n(521,"td",21)(522,"code",27),e(523,"string"),t()(),n(524,"td",23)(525,"p")(526,"code"),e(527,"label"),t()()(),n(528,"td",24)(529,"em")(530,"strong"),e(531,"(opcional)"),t()(),n(532,"p"),e(533,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),n(534,"code"),e(535,"p-options"),t(),e(536,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),t()()(),n(537,"tr",16)(538,"td",17)(539,"div",25)(540,"span",26),e(541," p-field-value"),l(542,"br"),t()()(),n(543,"td",21)(544,"code",27),e(545,"string"),t()(),n(546,"td",23)(547,"p")(548,"code"),e(549,"value"),t()()(),n(550,"td",24)(551,"em")(552,"strong"),e(553,"(opcional)"),t()(),n(554,"p"),e(555,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),n(556,"code"),e(557,"p-options"),t(),e(558,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t()()(),n(559,"tr",16)(560,"td",17)(561,"div",25)(562,"span",26),e(563," p-help"),l(564,"br"),t()()(),n(565,"td",21)(566,"code",27),e(567,"string"),t()(),n(568,"td",23),e(569,"-"),t(),n(570,"td",24)(571,"p"),e(572,"Texto de apoio para o campo."),t()()(),n(573,"tr",16)(574,"td",17)(575,"div",18)(576,"span",19),e(577," (p-keydown)"),l(578,"br"),t()()(),n(579,"td",21)(580,"code",22),e(581,"EventEmitter"),t()(),n(582,"td",23),e(583,"-"),t(),n(584,"td",24)(585,"em")(586,"strong"),e(587,"(opcional)"),t()(),n(588,"p"),e(589,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(590,"code"),e(591,"KeyboardEvent"),t(),e(592," com informa\xE7\xF5es sobre a tecla."),t()()(),n(593,"tr",16)(594,"td",17)(595,"div",25)(596,"span",26),e(597," p-label"),l(598,"br"),t()()(),n(599,"td",21)(600,"code",27),e(601,"string"),t()(),n(602,"td",23),e(603,"-"),t(),n(604,"td",24)(605,"p"),e(606,"R\xF3tulo exibido pelo componente."),t()()(),n(607,"tr",16)(608,"td",17)(609,"div",25)(610,"span",26),e(611," p-label-text-wrap"),l(612,"br"),t()()(),n(613,"td",21)(614,"code",28),e(615,"boolean"),t()(),n(616,"td",23)(617,"p")(618,"code"),e(619,"false"),t()()(),n(620,"td",24)(621,"em")(622,"strong"),e(623,"(opcional)"),t()(),n(624,"p"),e(625,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(626,"code"),e(627,"p-label"),t(),e(628,". Quando "),n(629,"code"),e(630,"p-label-text-wrap"),t(),e(631,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(632,"tr",16)(633,"td",17)(634,"div",25)(635,"span",26),e(636," p-loading"),l(637,"br"),t()()(),n(638,"td",21)(639,"code",28),e(640,"boolean"),t()(),n(641,"td",23)(642,"p")(643,"code"),e(644,"false"),t()()(),n(645,"td",24)(646,"em")(647,"strong"),e(648,"(opcional)"),t()(),n(649,"p"),e(650,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),n(651,"tr",16)(652,"td",17)(653,"div",25)(654,"span",26),e(655," name"),l(656,"br"),t()()(),n(657,"td",21)(658,"code",27),e(659,"string"),t()(),n(660,"td",23),e(661,"-"),t(),n(662,"td",24)(663,"p"),e(664,"Nome do componente."),t()()(),n(665,"tr",16)(666,"td",17)(667,"div",18)(668,"span",19),e(669," (ngModelChange)"),l(670,"br"),t()()(),n(671,"td",21)(672,"code",22),e(673,"EventEmitter"),t()(),n(674,"td",23),e(675,"-"),t(),n(676,"td",24)(677,"em")(678,"strong"),e(679,"(opcional)"),t()(),n(680,"p"),e(681,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da tag form."),t(),n(682,"p"),e(683,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(684,"code"),e(685,"strictTemplates"),t(),e(686,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(687,"pre")(688,"code"),e(689,`<po-select ... [ngModel]="selectModel" (ngModelChange)="selectModel = $event"> </po-select>
`),t()()()(),n(690,"tr",16)(691,"td",17)(692,"div",25)(693,"span",26),e(694," p-optional"),l(695,"br"),t()()(),n(696,"td",21)(697,"code",28),e(698,"boolean"),t()(),n(699,"td",23)(700,"p")(701,"code"),e(702,"false"),t()()(),n(703,"td",24)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),n(707,"p"),e(708,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(709,"blockquote")(710,"p"),e(711,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(712,"ul")(713,"li"),e(714,"O campo conter "),n(715,"code"),e(716,"p-required"),t(),e(717,";"),t(),n(718,"li"),e(719,"N\xE3o possuir "),n(720,"code"),e(721,"p-help"),t(),e(722," e/ou "),n(723,"code"),e(724,"p-label"),t(),e(725,"."),t()()()(),n(726,"tr",16)(727,"td",17)(728,"div",25)(729,"span",26),e(730," p-options"),l(731,"br"),t()()(),n(732,"td",21)(733,"code",29),e(734,"any[]"),t()(),n(735,"td",23),e(736,"-"),t(),n(737,"td",24)(738,"p"),e(739,"Nesta propriedade deve ser definido uma cole\xE7\xE3o de objetos que implementam a interface "),n(740,"code"),e(741,"PoSelectOption"),t(),e(742,`,
ou uma cole\xE7\xE3o de objetos dentro de grupos diferentes, que seriam da interface `),n(743,"code"),e(744,"PoSelectOptionGroup"),t(),e(745,"."),t(),n(746,"p"),e(747,"Caso esta lista estiver vazia, o model ser\xE1 "),n(748,"code"),e(749,"undefined"),t(),e(750,"."),t(),n(751,"blockquote")(752,"p"),e(753,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),t()(),n(754,"pre")(755,"code"),e(756,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),t()(),n(757,"blockquote")(758,"p"),e(759,"Para cole\xE7\xE3o de objetos dentro de grupos distintos ser\xE1 exibido a label e op\xE7\xF5es somente se a propriedade "),n(760,"code"),e(761,"options"),t(),e(762," possua valores. Sendo assim, a estrutura seguiria dessa forma:"),t()(),n(763,"pre")(764,"code"),e(765,`this.options = [{
 label: 'Op\xE7\xF5es',
 options: [
   { value: 1, label: 'op\xE7\xE3o 1' },
   { value: 2, label: 'op\xE7\xE3o 2' }
 ],
}];
`),t()(),n(766,"p"),e(767,`\xC9 poss\xEDvel a utiliza\xE7\xE3o de op\xE7\xF5es agrupadas e desagrupadas em conjunto, por\xE9m ser\xE1 feita a ordena\xE7\xE3o de exibir as op\xE7\xF5es
desagrupadas acima.`),t()()(),n(768,"tr",16)(769,"td",17)(770,"div",25)(771,"span",26),e(772," p-placeholder"),l(773,"br"),t()()(),n(774,"td",21)(775,"code",27),e(776,"string"),t()(),n(777,"td",23),e(778,"-"),t(),n(779,"td",24)(780,"em")(781,"strong"),e(782,"(opcional)"),t()(),n(783,"p"),e(784,"Mensagem que aparecer\xE1 enquanto nenhuma op\xE7\xE3o estiver selecionada."),t()()(),n(785,"tr",16)(786,"td",17)(787,"div",25)(788,"span",26),e(789," p-helper"),l(790,"br"),t()()(),n(791,"td",21)(792,"code",30),e(793,"PoHelperOptions "),t(),n(794,"code",27),e(795," string"),t()(),n(796,"td",23),e(797,"-"),t(),n(798,"td",24)(799,"em")(800,"strong"),e(801,"(opcional)"),t()(),n(802,"p"),e(803,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(804,"code"),e(805,"p-label"),t(),e(806," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(807,"code"),e(808,"p-label"),t(),e(809,"."),t(),n(810,"blockquote")(811,"p"),e(812,"Para mais informa\xE7\xF5es acesse: "),n(813,"a",31),e(814,"https://po-ui.io/documentation/po-helper"),t(),e(815,"."),t()(),n(816,"blockquote")(817,"p"),e(818,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(819,"code"),e(820,"p-additional-help-tooltip"),t(),e(821," e "),n(822,"code"),e(823,"p-additional-help"),t(),e(824,") ser\xE1 ignorado."),t()()()(),n(825,"tr",16)(826,"td",17)(827,"div",25)(828,"span",26),e(829," p-readonly"),l(830,"br"),t()()(),n(831,"td",21)(832,"code",28),e(833,"boolean"),t()(),n(834,"td",23)(835,"p")(836,"code"),e(837,"false"),t()()(),n(838,"td",24)(839,"em")(840,"strong"),e(841,"(opcional)"),t()(),n(842,"p"),e(843,"Indica que o campo ser\xE1 somente para leitura."),t()()(),n(844,"tr",16)(845,"td",17)(846,"div",25)(847,"span",26),e(848," p-required"),l(849,"br"),t()()(),n(850,"td",21)(851,"code",28),e(852,"boolean"),t()(),n(853,"td",23)(854,"p")(855,"code"),e(856,"false"),t()()(),n(857,"td",24)(858,"em")(859,"strong"),e(860,"(opcional)"),t()(),n(861,"p"),e(862,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(863,"tr",16)(864,"td",17)(865,"div",25)(866,"span",26),e(867," p-show-required"),l(868,"br"),t()()(),n(869,"td",21)(870,"code",28),e(871,"boolean"),t()(),n(872,"td",23),e(873,"-"),t(),n(874,"td",24)(875,"p"),e(876,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(877,"blockquote")(878,"p"),e(879,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(880,"ul")(881,"li"),e(882,"N\xE3o possuir "),n(883,"code"),e(884,"p-help"),t(),e(885," e/ou "),n(886,"code"),e(887,"p-label"),t(),e(888,"."),t()()()(),n(889,"tr",16)(890,"td",17)(891,"div",25)(892,"span",26),e(893," p-size"),l(894,"br"),t()()(),n(895,"td",21)(896,"code",27),e(897,"string"),t()(),n(898,"td",23)(899,"p")(900,"code"),e(901,"medium"),t()()(),n(902,"td",24)(903,"em")(904,"strong"),e(905,"(opcional)"),t()(),n(906,"p"),e(907,"Define o tamanho do componente:"),t(),n(908,"ul")(909,"li")(910,"code"),e(911,"small"),t(),e(912,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(913,"li")(914,"code"),e(915,"medium"),t(),e(916,": altura do input como 44px."),t()(),n(917,"blockquote")(918,"p"),e(919,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(920,"code"),e(921,"medium"),t(),e(922,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(923,"a",32),e(924,"po-theme"),t(),e(925,"."),t()()()()(),n(926,"h3",12),e(927,"M\xE9todos"),t(),n(928,"table",33)(929,"tr",16)(930,"th",34)(931,"div",25)(932,"h4")(933,"span",26),e(934," focus "),t()()()()(),n(935,"tr",24)(936,"td",24)(937,"p"),e(938,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(939,"p"),e(940,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(941,"pre")(942,"code"),e(943,`import { PoSelectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoSelectComponent, { static: true }) select: PoSelectComponent;

focusSelect() {
  this.select.focus();
}
`),t()()()()(),l(944,"br"),n(945,"table",33)(946,"tr",16)(947,"th",34)(948,"div",25)(949,"h4")(950,"span",26),e(951," showAdditionalHelp "),t()()()()(),n(952,"tr",24)(953,"td",24)(954,"p"),e(955,"M\xE9todo que exibe "),n(956,"code"),e(957,"p-helper"),t(),e(958," ou executa a a\xE7\xE3o definida em "),n(959,"code"),e(960,"p-helper{eventOnClick}"),t(),e(961," ou em "),n(962,"code"),e(963,"p-additionalHelp"),t(),e(964,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(965,"code"),e(966,"p-keydown"),t(),e(967,"."),t(),n(968,"blockquote")(969,"p"),e(970,"Exibe ou oculta o conte\xFAdo do componente "),n(971,"code"),e(972,"po-helper"),t(),e(973," quando o componente estiver com foco."),t()(),n(974,"pre")(975,"code"),e(976,`//Exemplo com p-label e p-helper
<po-select
 #select
 ...
 p-label="Label do select"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, select)"
></po-select>
`),t()(),n(977,"pre")(978,"code",35),e(979,`onKeyDown(event: KeyboardEvent, inp: PoSelectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),l(980,"br"),n(981,"h3"),e(982,"Interfaces"),t(),n(983,"h4",36)(984,"code",5),e(985,"PoSelectOptionGroup"),t()(),n(986,"div",2)(987,"p"),e(988,"Interface da cole\xE7\xF5es de itens em grupo, utilizando uma label para o grupo e as op\xE7\xF5es do tipo "),n(989,"code"),e(990,"PoSelectOption"),t(),e(991,"."),t()(),n(992,"h4",12),e(993,"Propriedades"),t(),n(994,"table",13)(995,"tr",14)(996,"th",15),e(997,"Nome"),t(),n(998,"th",15),e(999,"Tipo"),t(),n(1e3,"th",15),e(1001,"Descri\xE7\xE3o"),t()(),n(1002,"tr",16)(1003,"td",17)(1004,"div",25)(1005,"span",26),e(1006," label"),l(1007,"br"),t()()(),n(1008,"td",21)(1009,"code",27),e(1010,"string"),t()(),n(1011,"td",24)(1012,"p"),e(1013,"Label para denominar o nome do grupo."),t()()(),n(1014,"tr",16)(1015,"td",17)(1016,"div",25)(1017,"span",26),e(1018," options"),l(1019,"br"),t()()(),n(1020,"td",21)(1021,"code",37),e(1022,"Array<PoSelectOption>"),t()(),n(1023,"td",24)(1024,"p"),e(1025,"Lista com as op\xE7\xF5es dispon\xEDveis em cada grupo."),t()()()(),n(1026,"h4",36)(1027,"code",5),e(1028,"PoSelectOption"),t()(),n(1029,"div",2)(1030,"p"),e(1031,"Interface da cole\xE7\xF5es de itens que deve ser informado no componente po-select"),t()(),n(1032,"h4",12),e(1033,"Propriedades"),t(),n(1034,"table",13)(1035,"tr",14)(1036,"th",15),e(1037,"Nome"),t(),n(1038,"th",15),e(1039,"Tipo"),t(),n(1040,"th",15),e(1041,"Descri\xE7\xE3o"),t()(),n(1042,"tr",16)(1043,"td",17)(1044,"div",25)(1045,"span",26),e(1046," label"),l(1047,"br"),t()()(),n(1048,"td",21)(1049,"code",27),e(1050,"string"),t()(),n(1051,"td",24)(1052,"p"),e(1053,"Label a ser utilizada nos itens da lista."),t()()(),n(1054,"tr",16)(1055,"td",17)(1056,"div",25)(1057,"span",26),e(1058," value"),l(1059,"br"),t()()(),n(1060,"td",21)(1061,"code",27),e(1062,"string "),t(),n(1063,"code",38),e(1064," number"),t()(),n(1065,"td",24)(1066,"p"),e(1067,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),t()()()()())},dependencies:[y],encapsulation:2})}return a})();var Pe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,p){this.route=r,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let p=r.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(U(pe),U(re))};static \u0275cmp=v({type:a,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Select",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-select-doc"),t(),n(4,"po-tab",3),b("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-select-basic-view")(6,"sample-po-select-labs-view")(7,"sample-po-select-customer-registration-view")(8,"sample-po-select-companies-view"),t()()()),p&2&&(c("p-actions",i.actions),s(2),c("p-active",i.activeTab==="doc"),s(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ue,C,x,be,ve,Ce,ye,_e],encapsulation:2})}return a})();var je=[{path:"",component:Pe}],we=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=G({type:a});static \u0275inj=F({imports:[Y.forChild(je),Y]})}return a})();var Tt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=G({type:a});static \u0275inj=F({imports:[Se,we]})}return a})();export{Tt as DocPoSelectModule};
