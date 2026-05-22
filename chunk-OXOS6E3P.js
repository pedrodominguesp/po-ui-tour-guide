import{o as w,p as le}from"./chunk-WYOAC7KN.js";import{Hb as v,Ib as C,Ja as O,S as oe,U as M,Ya as z,a as ee,bb as ie,ub as ae,w as te,ya as ne}from"./chunk-XOCFD5XY.js";import{Ea as s,Fa as o,Ga as t,Ha as a,I as k,Jc as B,L as K,Mb as P,Mc as G,Nc as F,O as E,Oa as D,Oc as A,P as b,Pa as u,Pc as W,Qc as L,Tc as J,Uc as X,Yc as Y,_a as V,bb as y,cb as e,cd as Z,eb as _,ed as $,gb as S,gd as j,ha as p,hb as h,ib as f,ma as H,oa as c,pa as q,qb as I,rb as T,sb as Q}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var xe=()=>({label:"Option 1",value:"1"}),ve=()=>({label:"Option 2",value:"2"}),Ce=(i,fe)=>[i,fe],re=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-basic"]],standalone:!1,decls:1,vars:6,consts:[["name","radioGroupBasic","p-label","PO Radio Group",3,"p-options"]],template:function(r,n){r&1&&a(0,"po-radio-group",0),r&2&&s("p-options",Q(3,Ce,I(1,xe),I(2,ve)))},dependencies:[M],encapsulation:2})}return i})();var ye=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Basic"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupBasic"
  p-label="PO Radio Group"
  [p-options]="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
>
</po-radio-group>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-basic/sample-po-radio-group-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-radio-group-basic',
  templateUrl: './sample-po-radio-group-basic.component.html',
  standalone: false
})
export class SamplePoRadioGroupBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-basic"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel),p(),s("ngClass",T(4,ye,n.hideSampleCodeTabs)))},dependencies:[P,w,v,C,re],encapsulation:2})}return i})();var me=(()=>{class i{helperText;columns;event;help;label;option;options;properties;radioGroup;fieldErrorMessage;size;columnOptions=[{label:"1 column",value:1},{label:"2 columns",value:2},{label:"3 columns",value:3},{label:"4 columns",value:4}];propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];ngOnInit(){this.restore()}addOption(){this.options.push(this.option),this.option=this.getNewOption()}changeEvent(d){this.event=d}restore(){this.helperText="",this.event="",this.radioGroup=void 0,this.properties=[],this.fieldErrorMessage="",this.size="medium",this.option=this.getNewOption(),this.options=[]}getNewOption(){return{label:void 0,value:void 0}}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-labs"]],standalone:!1,decls:26,vars:31,consts:[["optionForm","ngForm"],["propertiesForm","ngForm"],["name","radioGroupLabs",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-columns","p-disabled","p-help","p-label","p-optional","p-options","p-required","p-field-error-message","p-show-required","p-size","p-error-limit","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","optionDisabled","p-label","Option Disabled",1,"po-lg-4",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","columns","p-columns","4","p-label","Columns",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"click"]],template:function(r,n){if(r&1){let m=D();o(0,"po-radio-group",2),f("ngModelChange",function(l){return E(m),h(n.radioGroup,l)||(n.radioGroup=l),b(l)}),u("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),t(),a(1,"po-divider"),o(2,"div",3),a(3,"po-info",4)(4,"po-info",5),t(),a(5,"po-divider"),o(6,"form",null,0)(8,"div",3)(9,"po-input",6),f("ngModelChange",function(l){return E(m),h(n.option.label,l)||(n.option.label=l),b(l)}),t(),o(10,"po-input",7),f("ngModelChange",function(l){return E(m),h(n.option.value,l)||(n.option.value=l),b(l)}),t(),o(11,"po-switch",8),f("ngModelChange",function(l){return E(m),h(n.option.disabled,l)||(n.option.disabled=l),b(l)}),t()(),o(12,"div",3)(13,"po-button",9),u("p-click",function(){E(m);let l=V(7);return n.addOption(),b(l.reset())}),t()()(),a(14,"po-divider"),o(15,"form",null,1)(17,"po-input",10),f("ngModelChange",function(l){return E(m),h(n.label,l)||(n.label=l),b(l)}),t(),o(18,"po-input",11),f("ngModelChange",function(l){return E(m),h(n.help,l)||(n.help=l),b(l)}),t(),o(19,"po-input",12),f("ngModelChange",function(l){return E(m),h(n.helperText,l)||(n.helperText=l),b(l)}),t(),o(20,"po-input",13),f("ngModelChange",function(l){return E(m),h(n.fieldErrorMessage,l)||(n.fieldErrorMessage=l),b(l)}),t(),o(21,"po-radio-group",14),f("ngModelChange",function(l){return E(m),h(n.columns,l)||(n.columns=l),b(l)}),t(),o(22,"po-checkbox-group",15),f("ngModelChange",function(l){return E(m),h(n.properties,l)||(n.properties=l),b(l)}),t(),o(23,"po-radio-group",16),f("ngModelChange",function(l){return E(m),h(n.size,l)||(n.size=l),b(l)}),t(),o(24,"div",3)(25,"po-button",17),u("click",function(){return E(m),V(16).reset(),b(n.restore())}),t()()()}if(r&2){let m=V(7);S("ngModel",n.radioGroup),s("p-helper",n.helperText)("p-columns",n.columns)("p-disabled",n.properties.includes("disabled"))("p-help",n.help)("p-label",n.label)("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),p(3),s("p-value",n.radioGroup),p(),s("p-value",n.event),p(5),S("ngModel",n.option.label),p(),S("ngModel",n.option.value),p(),S("ngModel",n.option.disabled),p(2),s("p-disabled",m.invalid),p(4),S("ngModel",n.label),p(),S("ngModel",n.help),p(),S("ngModel",n.helperText),p(),S("ngModel",n.fieldErrorMessage),p(),S("ngModel",n.columns),s("p-options",n.columnOptions),p(),S("ngModel",n.properties),s("p-options",n.propertiesOptions),p(),S("ngModel",n.size),s("p-options",n.sizesOptions)}},dependencies:[L,G,F,W,A,te,ee,oe,M,O,ne,ie],encapsulation:2})}return i})();var Pe=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group Labs"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-radio-group
  name="radioGroupLabs"
  [(ngModel)]="radioGroup"
  [p-helper]="helperText"
  [p-columns]="columns"
  [p-disabled]="properties.includes('disabled')"
  [p-help]="help"
  [p-label]="label"
  [p-optional]="properties.includes('optional')"
  [p-options]="options"
  [p-required]="properties.includes('required')"
  [p-field-error-message]="fieldErrorMessage"
  [p-show-required]="properties.includes('showRequired')"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-error-limit]="properties?.includes('errorLimit')"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
>
</po-radio-group>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="radioGroup"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #optionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6 po-lg-4" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6 po-lg-4" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>

    <po-switch class="po-lg-4" name="optionDisabled" [(ngModel)]="option.disabled" p-label="Option Disabled">
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-6 po-lg-3"
      p-label="Add Option"
      [p-disabled]="optionForm.invalid"
      (p-click)="addOption(); optionForm.reset()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #propertiesForm="ngForm">
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

  <po-radio-group
    class="po-md-12"
    name="columns"
    [(ngModel)]="columns"
    p-columns="4"
    p-label="Columns"
    [p-options]="columnOptions"
  >
  </po-radio-group>

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
    [p-options]="sizesOptions"
  >
  </po-radio-group>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (click)="propertiesForm.reset(); restore()">
    </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-labs/sample-po-radio-group-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-labs',
  templateUrl: './sample-po-radio-group-labs.component.html',
  standalone: false
})
export class SamplePoRadioGroupLabsComponent implements OnInit {
  helperText: string;
  columns: number;
  event: string;
  help: string;
  label: string;
  option: PoRadioGroupOption;
  options: Array<PoRadioGroupOption>;
  properties: Array<string>;
  radioGroup: string;
  fieldErrorMessage: string;
  size: string;

  readonly columnOptions: Array<PoRadioGroupOption> = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 }
  ];

  readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'errorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' }
  ];

  readonly sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  addOption() {
    this.options.push(this.option);
    this.option = this.getNewOption();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.event = '';
    this.radioGroup = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.size = 'medium';
    this.option = this.getNewOption();
    this.options = [];
  }

  private getNewOption(): PoRadioGroupOption {
    return {
      label: undefined,
      value: undefined
    };
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-labs"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel),p(),s("ngClass",T(4,Pe,n.hideSampleCodeTabs)))},dependencies:[P,w,v,C,me],encapsulation:2})}return i})();var ue=(()=>{class i{language="es";original="";translated="";languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];changeLanguage(d){let r=this.wordsOptions.find(n=>n.id===this.original);r&&(this.translated=r[d||this.language])}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-translator"]],standalone:!1,decls:6,vars:5,consts:[["f","ngForm"],[1,"po-row"],["name","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"ngModelChange","p-change","ngModel","p-options"],["name","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4",3,"ngModelChange","ngModel"]],template:function(r,n){if(r&1){let m=D();o(0,"form",null,0)(2,"div",1)(3,"po-radio-group",2),f("ngModelChange",function(l){return E(m),h(n.language,l)||(n.language=l),b(l)}),u("p-change",function(l){return n.changeLanguage(l)}),t(),o(4,"po-select",3),f("ngModelChange",function(l){return E(m),h(n.original,l)||(n.original=l),b(l)}),u("p-change",function(l){return n.changeLanguage(l)}),t(),o(5,"po-input",4),f("ngModelChange",function(l){return E(m),h(n.translated,l)||(n.translated=l),b(l)}),t()()()}r&2&&(p(3),S("ngModel",n.language),s("p-options",n.languageOptions),p(),S("ngModel",n.original),s("p-options",n.optionsList),p(),S("ngModel",n.translated))},dependencies:[L,G,F,W,A,M,O,z],encapsulation:2})}return i})();var Ge=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-translator-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.html"),t(),o(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      [(ngModel)]="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage($event)"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      [(ngModel)]="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage($event)"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      [(ngModel)]="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-translator/sample-po-radio-group-translator.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator',
  templateUrl: './sample-po-radio-group-translator.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorComponent {
  language: string = 'es';
  original: string = '';
  translated: string = '';

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  changeLanguage(value) {
    const word = this.wordsOptions.find(item => item.id === this.original);

    if (word) {
      this.translated = word[value || this.language];
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel),p(),s("ngClass",T(4,Ge,n.hideSampleCodeTabs)))},dependencies:[P,w,v,C,ue],encapsulation:2})}return i})();var ge=(()=>{class i{formBuilder=K(Y);translatorForm;languageOptions=[{label:"Spanish",value:"es"},{label:"English",value:"en"}];optionsList=[{value:"1",label:"Ol\xE1"},{value:"2",label:"Tchau"},{value:"3",label:"Estrangeiro"},{value:"4",label:"Alinhamento"},{value:"5",label:"Vis\xE3o"},{value:"6",label:"Livro"}];wordsOptions=[{id:"1",en:"Hello",es:"Hola"},{id:"2",en:"Bye",es:"Hasta luego"},{id:"3",en:"Foreign",es:"Extranjero"},{id:"4",en:"Alignment",es:"Alineaci\xF3n"},{id:"5",en:"Vision",es:"Vista"},{id:"6",en:"Book",es:"Libro"}];ngOnInit(){this.translatorForm=this.formBuilder.group({language:["es",B.required],original:[void 0,B.required],translated:[void 0,B.required]})}changeLanguage(){let d=this.translatorForm.value.language,r=this.translatorForm.value.original,n=this.wordsOptions.find(m=>m.id===r);n&&this.translatorForm.patchValue({translated:n[d]})}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-translator-reactive-form"]],standalone:!1,decls:5,vars:3,consts:[[3,"formGroup"],[1,"po-row"],["name","language","formControlName","language","p-label","Select a Language","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","original","formControlName","original","p-label","Original Text (Portuguese)","p-required","",1,"po-lg-4",3,"p-change","p-options"],["name","translated","formControlName","translated","p-label","Translated Text","p-readonly","","p-required","",1,"po-lg-4"]],template:function(r,n){r&1&&(o(0,"form",0)(1,"div",1)(2,"po-radio-group",2),u("p-change",function(){return n.changeLanguage()}),t(),o(3,"po-select",3),u("p-change",function(){return n.changeLanguage()}),t(),a(4,"po-input",4),t()()),r&2&&(s("formGroup",n.translatorForm),p(2),s("p-options",n.languageOptions),p(),s("p-options",n.optionsList))},dependencies:[L,G,F,X,J,M,O,z],encapsulation:2})}return i})();var Oe=i=>({"docs-sample-code-tabs":i}),Ee=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-translator-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Radio Group - Translator Reactive Form"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.html"),t(),o(13,"pre",7),e(14,`<form [formGroup]="translatorForm">
  <div class="po-row">
    <po-radio-group
      class="po-lg-4"
      name="language"
      formControlName="language"
      p-label="Select a Language"
      p-required
      [p-options]="languageOptions"
      (p-change)="changeLanguage()"
    >
    </po-radio-group>

    <po-select
      class="po-lg-4"
      name="original"
      formControlName="original"
      p-label="Original Text (Portuguese)"
      p-required
      [p-options]="optionsList"
      (p-change)="changeLanguage()"
    >
    </po-select>

    <po-input
      class="po-lg-4"
      name="translated"
      formControlName="translated"
      p-label="Translated Text"
      p-readonly
      p-required
    >
    </po-input>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-radio-group-translator-reactive-form/sample-po-radio-group-translator-reactive-form.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoRadioGroupOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-radio-group-translator-reactive-form',
  templateUrl: './sample-po-radio-group-translator-reactive-form.component.html',
  standalone: false
})
export class SamplePoRadioGroupTranslatorReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  translatorForm: UntypedFormGroup;

  readonly languageOptions: Array<PoRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<PoSelectOption> = [
    { value: '1', label: 'Ol\xE1' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Vis\xE3o' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineaci\xF3n' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: ['es', Validators.required],
      original: [undefined, Validators.required],
      translated: [undefined, Validators.required]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-radio-group-translator-reactive-form"),t(),a(23,"hr")),r&2&&(p(5),y("po-icon "+n.sampleCodeButtonIcon),p(),_(" ",n.sampleCodeButtonLabel),p(),s("ngClass",T(4,Oe,n.hideSampleCodeTabs)))},dependencies:[P,w,v,C,ge],encapsulation:2})}return i})();var be=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275cmp=c({type:i,selectors:[["sample-po-radio-group-doc"]],standalone:!1,decls:938,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-combo"],["href","/documentation/po-select"],["href","/documentation/po-checkbox-group"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-3"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://doc.animaliads.io/docs/components/radio"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoRadioGroupOption[]"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(r,n){r&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoRadioGroupComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-radio-group"),t(),e(26,` deve ser utilizado para disponibilizar m\xFAltiplas op\xE7\xF5es ao usu\xE1rio, permitindo a ele que
selecione apenas uma delas. Seu uso \xE9 recomendado para um n\xFAmero pequeno de op\xE7\xF5es, caso contr\xE1rio, recomenda-se o uso
do `),o(27,"a",6)(28,"strong"),e(29,"po-combo"),t()(),e(30," ou "),o(31,"a",7)(32,"strong"),e(33,"po-select"),t()(),e(34,"."),t(),o(35,"p"),e(36,`Este n\xE3o \xE9 um componente de multisele\xE7\xE3o, se for este o caso, deve-se utilizar o
`),o(37,"a",8)(38,"strong"),e(39,"po-checkbox-group"),t()(),e(40,"."),t(),o(41,"blockquote")(42,"p"),e(43,"Ao passar um valor para o "),o(44,"em"),e(45,"model"),t(),e(46," que n\xE3o esteja na lista de op\xE7\xF5es, o mesmo ser\xE1 definido como "),o(47,"code"),e(48,"undefined"),t(),e(49,"."),t()(),o(50,"h4"),e(51,"Acessibilidade tratada no componente interno "),o(52,"code"),e(53,"po-radio"),t(),e(54,":"),t(),o(55,"p"),e(56,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),o(57,"ul")(58,"li"),e(59,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),o(60,"a",9),e(61,"WCAG 4.1.2: Name, Role, Value"),t()(),o(62,"li"),e(63,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o radio button normal do selecionado, por isso deve-se manter uma diferen\xE7a visual entre os estados. "),o(64,"a",10),e(65,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()(),o(66,"li"),e(67,"Quando em foco, o componente \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),o(68,"a",11),e(69,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),t()(),o(70,"li"),e(71,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),o(72,"a",12),e(73,"(WCAG 2.4.12: Focus Appearance"),t()()(),o(74,"p"),e(75,"Conforme documenta\xE7\xE3o em: "),o(76,"a",13),e(77,"https://doc.animaliads.io/docs/components/radio"),t()(),o(78,"h4"),e(79,"Tokens customiz\xE1veis"),t(),o(80,"p"),e(81,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS): "),a(82,"br"),e(83,`
Obs: No componente Radio Group, a customiza\xE7\xE3o ocorre principalmente nos elementos `),o(84,"code"),e(85,"po-radio"),t(),e(86," que comp\xF5em o grupo de op\xE7\xF5es. "),a(87,"br"),e(88,`
Portanto, ao aplicar estilos customizados, \xE9 importante focar na customiza\xE7\xE3o dos elementos `),o(89,"code"),e(90,"po-radio"),t(),e(91," em vez do pr\xF3prio "),o(92,"code"),e(93,"po-radio-group"),t(),e(94,"."),t(),o(95,"blockquote")(96,"p"),e(97,"Para maiores informa\xE7\xF5es, acesse o guia "),o(98,"a",14),e(99,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(100,"."),t()(),o(101,"table")(102,"thead")(103,"tr")(104,"th"),e(105,"Propriedade"),t(),o(106,"th"),e(107,"Descri\xE7\xE3o"),t(),o(108,"th"),e(109,"Valor Padr\xE3o"),t()()(),o(110,"tbody")(111,"tr")(112,"td")(113,"strong"),e(114,"Default Values"),t()(),a(115,"td")(116,"td"),t(),o(117,"tr")(118,"td")(119,"code"),e(120,"--border-color"),t()(),o(121,"td"),e(122,"Cor da borda"),t(),o(123,"td")(124,"code"),e(125,"var(--color-neutral-dark-70)"),t()()(),o(126,"tr")(127,"td")(128,"code"),e(129,"--field-container-title-justify"),t()(),o(130,"td"),e(131,"Alinhamento horizontal do t\xEDtulo ("),o(132,"code"),e(133,"justify-content"),t(),e(134,")"),t(),o(135,"td")(136,"code"),e(137,"space-between"),t()()(),o(138,"tr")(139,"td")(140,"code"),e(141,"--field-container-title-flex"),t()(),o(142,"td"),e(143,"Flex do t\xEDtulo ("),o(144,"code"),e(145,"flex"),t(),e(146,")"),t(),o(147,"td")(148,"code"),e(149,"1 auto"),t()()(),o(150,"tr")(151,"td")(152,"strong"),e(153,"Hover"),t()(),a(154,"td")(155,"td"),t(),o(156,"tr")(157,"td")(158,"code"),e(159,"--shadow-color-hover"),t()(),o(160,"td"),e(161,"Cor da sombra no estado hover"),t(),o(162,"td")(163,"code"),e(164,"var(--color-brand-01-lighter)"),t()()(),o(165,"tr")(166,"td")(167,"code"),e(168,"--color-hover"),t()(),o(169,"td"),e(170,"Cor principal no estado hover"),t(),o(171,"td")(172,"code"),e(173,"var(--color-brand-01-dark)"),t()()(),o(174,"tr")(175,"td")(176,"strong"),e(177,"Focused"),t()(),a(178,"td")(179,"td"),t(),o(180,"tr")(181,"td")(182,"code"),e(183,"--outline-color-focused"),t()(),o(184,"td"),e(185,"Cor do outline do estado de focus"),t(),o(186,"td")(187,"code"),e(188,"var(--color-brand-01-darkest)"),t()()(),o(189,"tr")(190,"td")(191,"strong"),e(192,"checked"),t()(),a(193,"td")(194,"td"),t(),o(195,"tr")(196,"td")(197,"code"),e(198,"--color-unchecked"),t()(),o(199,"td"),e(200,"Cor quando n\xE3o selecionado"),t(),o(201,"td")(202,"code"),e(203,"var(--color-neutral-light-00)"),t()()(),o(204,"tr")(205,"td")(206,"code"),e(207,"--color-checked"),t()(),o(208,"td"),e(209,"Cor quando selecionado"),t(),o(210,"td")(211,"code"),e(212,"var(--color-action-default)"),t()()(),o(213,"tr")(214,"td")(215,"strong"),e(216,"Disabled"),t()(),a(217,"td")(218,"td"),t(),o(219,"tr")(220,"td")(221,"code"),e(222,"--color-unchecked-disabled"),t()(),o(223,"td"),e(224,"Cor pricipal quando n\xE3o selecionado no estado disabled"),t(),o(225,"td")(226,"code"),e(227,"var(--color-neutral-light-30)"),t()()(),o(228,"tr")(229,"td")(230,"code"),e(231,"--color-checked-disabled"),t()(),o(232,"td"),e(233,"Cor pricipal quando selecionado no estado disabled"),t(),o(234,"td")(235,"code"),e(236,"var(--color-neutral-dark-70)"),t()()()()()(),o(237,"div",15)(238,"h4",16),e(239,"Seletor"),t(),o(240,"pre",17),e(241,`<po-radio-group
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
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-optional="boolean"
    p-options="PoRadioGroupOption[]"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string" >
</po-radio-group>
`),t()(),o(242,"h4",18),e(243,"Propriedades"),t(),o(244,"table",19)(245,"tr",20)(246,"th",21),e(247,"Nome"),t(),o(248,"th",21),e(249,"Tipo"),t(),o(250,"th",21),e(251,"Padr\xE3o"),t(),o(252,"th",21),e(253,"Descri\xE7\xE3o"),t()(),o(254,"tr",22)(255,"td",23)(256,"div",24)(257,"span",25),e(258," (p-additional-help)"),a(259,"br"),t()(),o(260,"div",26),e(261,"Deprecated"),t()(),o(262,"td",27)(263,"code",28),e(264,"EventEmitter"),t()(),o(265,"td",29),e(266,"-"),t(),o(267,"td",30)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),o(271,"p"),e(272,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),o(273,"blockquote")(274,"p"),e(275,"Essa propriedade est\xE1 "),o(276,"strong"),e(277,"depreciada"),t(),e(278," e ser\xE1 removida na vers\xE3o "),o(279,"code"),e(280,"23.x.x"),t(),e(281,". Recomendamos utilizar a propriedade "),o(282,"code"),e(283,"p-helper"),t(),e(284," que oferece mais recursos e flexibilidade."),t()()()(),o(285,"tr",22)(286,"td",23)(287,"div",31)(288,"span",32),e(289," p-additional-help-tooltip"),a(290,"br"),t()(),o(291,"div",26),e(292,"Deprecated"),t()(),o(293,"td",27)(294,"code",33),e(295,"string"),t()(),o(296,"td",29),e(297,"-"),t(),o(298,"td",30)(299,"em")(300,"strong"),e(301,"(opcional)"),t()(),o(302,"p"),e(303,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),o(304,"code"),e(305,"po-helper"),t(),e(306,`.
`),o(307,"strong"),e(308,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(309,"blockquote")(310,"p"),e(311,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(312,"blockquote")(313,"p"),e(314,"Essa propriedade est\xE1 "),o(315,"strong"),e(316,"depreciada"),t(),e(317," e ser\xE1 removida na vers\xE3o "),o(318,"code"),e(319,"23.x.x"),t(),e(320,". Recomendamos utilizar a propriedade "),o(321,"code"),e(322,"p-helper"),t(),e(323," que oferece mais recursos e flexibilidade."),t()()()(),o(324,"tr",22)(325,"td",23)(326,"div",31)(327,"span",32),e(328," p-append-in-body"),a(329,"br"),t()()(),o(330,"td",27)(331,"code",34),e(332,"boolean"),t()(),o(333,"td",29)(334,"p")(335,"code"),e(336,"false"),t()()(),o(337,"td",30)(338,"em")(339,"strong"),e(340,"(opcional)"),t()(),o(341,"p"),e(342,"Define que o popover ("),o(343,"code"),e(344,"p-helper"),t(),e(345," e/ou "),o(346,"code"),e(347,"p-error-limit"),t(),e(348,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o
dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow
escondido, garantindo o posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(349,"blockquote")(350,"p"),e(351,"Quando utilizado com "),o(352,"code"),e(353,"p-helper"),t(),e(354,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),o(355,"tr",22)(356,"td",23)(357,"div",31)(358,"span",32),e(359," p-auto-focus"),a(360,"br"),t()()(),o(361,"td",27)(362,"code",34),e(363,"boolean"),t()(),o(364,"td",29)(365,"p")(366,"code"),e(367,"false"),t()()(),o(368,"td",30)(369,"em")(370,"strong"),e(371,"(opcional)"),t()(),o(372,"p"),e(373,"Aplica foco no elemento ao ser iniciado."),t(),o(374,"blockquote")(375,"p"),e(376,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(377,"tr",22)(378,"td",23)(379,"div",24)(380,"span",25),e(381," (p-change)"),a(382,"br"),t()()(),o(383,"td",27)(384,"code",28),e(385,"EventEmitter"),t()(),o(386,"td",29),e(387,"-"),t(),o(388,"td",30)(389,"em")(390,"strong"),e(391,"(opcional)"),t()(),o(392,"p"),e(393,"Evento ao alterar valor do campo."),t()()(),o(394,"tr",22)(395,"td",23)(396,"div",31)(397,"span",32),e(398," p-columns"),a(399,"br"),t()()(),o(400,"td",27)(401,"code",35),e(402,"number"),t()(),o(403,"td",29)(404,"p")(405,"code"),e(406,"2"),t()()(),o(407,"td",30)(408,"em")(409,"strong"),e(410,"(opcional)"),t()(),o(411,"p"),e(412,"Define a quantidade de colunas para exibi\xE7\xE3o das op\xE7\xF5es."),t(),o(413,"p")(414,"strong"),e(415,"Considera\xE7\xF5es:"),t()(),o(416,"ul")(417,"li"),e(418,"\xC9 poss\xEDvel exibir as op\xE7\xF5es entre "),o(419,"code"),e(420,"1"),t(),e(421," e "),o(422,"code"),e(423,"4"),t(),e(424," colunas."),t(),o(425,"li"),e(426,"O n\xFAmero m\xE1ximo de colunas \xE9 invari\xE1vel nas seguintes resolu\xE7\xF5es:"),o(427,"ul")(428,"li")(429,"code"),e(430,"sm"),t(),e(431,": "),o(432,"code"),e(433,"1"),t()(),o(434,"li")(435,"code"),e(436,"md"),t(),e(437,": "),o(438,"code"),e(439,"2"),t()()()()()()(),o(440,"tr",22)(441,"td",23)(442,"div",31)(443,"span",32),e(444," p-compact-label"),a(445,"br"),t()()(),o(446,"td",27)(447,"code",34),e(448,"boolean"),t()(),o(449,"td",29)(450,"p")(451,"code"),e(452,"false"),t()()(),o(453,"td",30)(454,"em")(455,"strong"),e(456,"(opcional)"),t()(),o(457,"p"),e(458,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),o(459,"p"),e(460,"Quando habilitado ("),o(461,"code"),e(462,"true"),t(),e(463,"), o modo compacto afeta o conjunto composto por:"),t(),o(464,"ul")(465,"li")(466,"code"),e(467,"po-label"),t()(),o(468,"li")(469,"code"),e(470,"p-requirement (showRequired)"),t()(),o(471,"li")(472,"code"),e(473,"po-helper"),t()()(),o(474,"p"),e(475,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),o(476,"p"),e(477,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),o(478,"ul")(479,"li")(480,"code"),e(481,"--field-container-title-justify"),t()(),o(482,"li")(483,"code"),e(484,"--field-container-title-flex"),t()()(),o(485,"p"),e(486,"Exemplo:"),t(),o(487,"pre")(488,"code"),e(489,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),o(490,"p"),e(491,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),o(492,"tr",22)(493,"td",23)(494,"div",31)(495,"span",32),e(496," p-disabled"),a(497,"br"),t()()(),o(498,"td",27)(499,"code",34),e(500,"boolean"),t()(),o(501,"td",29)(502,"p")(503,"code"),e(504,"false"),t()()(),o(505,"td",30)(506,"em")(507,"strong"),e(508,"(opcional)"),t()(),o(509,"p"),e(510,"Indica que o campo ser\xE1 desabilitado."),t()()(),o(511,"tr",22)(512,"td",23)(513,"div",31)(514,"span",32),e(515," p-error-limit"),a(516,"br"),t()()(),o(517,"td",27)(518,"code",34),e(519,"boolean"),t()(),o(520,"td",29)(521,"p")(522,"code"),e(523,"false"),t()()(),o(524,"td",30)(525,"em")(526,"strong"),e(527,"(opcional)"),t()(),o(528,"p"),e(529,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),o(530,"blockquote")(531,"p"),e(532,"Caso essa propriedade seja definida como "),o(533,"code"),e(534,"true"),t(),e(535,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),o(536,"tr",22)(537,"td",23)(538,"div",31)(539,"span",32),e(540," p-field-error-message"),a(541,"br"),t()()(),o(542,"td",27)(543,"code",33),e(544,"string"),t()(),o(545,"td",29),e(546,"-"),t(),o(547,"td",30)(548,"em")(549,"strong"),e(550,"(opcional)"),t()(),o(551,"p"),e(552,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),o(553,"blockquote")(554,"p"),e(555,"Necess\xE1rio que a propriedade "),o(556,"code"),e(557,"p-required"),t(),e(558," esteja habilitada."),t()()()(),o(559,"tr",22)(560,"td",23)(561,"div",31)(562,"span",32),e(563," p-help"),a(564,"br"),t()()(),o(565,"td",27)(566,"code",33),e(567,"string"),t()(),o(568,"td",29),e(569,"-"),t(),o(570,"td",30)(571,"em")(572,"strong"),e(573,"(opcional)"),t()(),o(574,"p"),e(575,"Texto de apoio do campo."),t()()(),o(576,"tr",22)(577,"td",23)(578,"div",24)(579,"span",25),e(580," (p-keydown)"),a(581,"br"),t()()(),o(582,"td",27)(583,"code",28),e(584,"EventEmitter"),t()(),o(585,"td",29),e(586,"-"),t(),o(587,"td",30)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),o(591,"p"),e(592,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(593,"code"),e(594,"KeyboardEvent"),t(),e(595," com informa\xE7\xF5es sobre a tecla."),t()()(),o(596,"tr",22)(597,"td",23)(598,"div",31)(599,"span",32),e(600," p-label"),a(601,"br"),t()()(),o(602,"td",27)(603,"code",33),e(604,"string"),t()(),o(605,"td",29),e(606,"-"),t(),o(607,"td",30)(608,"em")(609,"strong"),e(610,"(opcional)"),t()(),o(611,"p"),e(612,"Label do campo."),t()()(),o(613,"tr",22)(614,"td",23)(615,"div",31)(616,"span",32),e(617," p-label-text-wrap"),a(618,"br"),t()()(),o(619,"td",27)(620,"code",34),e(621,"boolean"),t()(),o(622,"td",29)(623,"p")(624,"code"),e(625,"false"),t()()(),o(626,"td",30)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),o(630,"p"),e(631,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(632,"code"),e(633,"p-label"),t(),e(634,". Quando "),o(635,"code"),e(636,"p-label-text-wrap"),t(),e(637,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(638,"tr",22)(639,"td",23)(640,"div",31)(641,"span",32),e(642," name"),a(643,"br"),t()()(),o(644,"td",27)(645,"code",33),e(646,"string"),t()(),o(647,"td",29),e(648,"-"),t(),o(649,"td",30)(650,"p"),e(651,"Nome das op\xE7\xF5es."),t()()(),o(652,"tr",22)(653,"td",23)(654,"div",31)(655,"span",32),e(656," p-optional"),a(657,"br"),t()()(),o(658,"td",27)(659,"code",34),e(660,"boolean"),t()(),o(661,"td",29)(662,"p")(663,"code"),e(664,"false"),t()()(),o(665,"td",30)(666,"em")(667,"strong"),e(668,"(opcional)"),t()(),o(669,"p"),e(670,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),o(671,"blockquote")(672,"p"),e(673,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(674,"ul")(675,"li"),e(676,"O campo conter "),o(677,"code"),e(678,"p-required"),t(),e(679,";"),t(),o(680,"li"),e(681,"N\xE3o possuir "),o(682,"code"),e(683,"p-help"),t(),e(684," e/ou "),o(685,"code"),e(686,"p-label"),t(),e(687,"."),t()()()(),o(688,"tr",22)(689,"td",23)(690,"div",31)(691,"span",32),e(692," p-options"),a(693,"br"),t()()(),o(694,"td",27)(695,"code",36),e(696,"PoRadioGroupOption[]"),t()(),o(697,"td",29),e(698,"-"),t(),o(699,"td",30)(700,"p"),e(701,`Lista de op\xE7\xF5es que ser\xE3o exibidas.
Nesta propriedade deve ser definido um array de objetos que implementam a interface PoRadioGroupOption.`),t()()(),o(702,"tr",22)(703,"td",23)(704,"div",31)(705,"span",32),e(706," p-helper"),a(707,"br"),t()()(),o(708,"td",27)(709,"code",37),e(710,"PoHelperOptions "),t(),o(711,"code",33),e(712," string"),t()(),o(713,"td",29),e(714,"-"),t(),o(715,"td",30)(716,"em")(717,"strong"),e(718,"(opcional)"),t()(),o(719,"p"),e(720,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),o(721,"code"),e(722,"p-label"),t(),e(723," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),o(724,"code"),e(725,"p-label"),t(),e(726,"."),t(),o(727,"blockquote")(728,"p"),e(729,"Para mais informa\xE7\xF5es acesse: "),o(730,"a",38),e(731,"https://po-ui.io/documentation/po-helper"),t(),e(732,"."),t()(),o(733,"blockquote")(734,"p"),e(735,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),o(736,"code"),e(737,"p-additional-help-tooltip"),t(),e(738," e "),o(739,"code"),e(740,"p-additional-help"),t(),e(741,") ser\xE1 ignorado."),t()()()(),o(742,"tr",22)(743,"td",23)(744,"div",31)(745,"span",32),e(746," p-required"),a(747,"br"),t()()(),o(748,"td",27)(749,"code",34),e(750,"boolean"),t()(),o(751,"td",29)(752,"p")(753,"code"),e(754,"false"),t()()(),o(755,"td",30)(756,"em")(757,"strong"),e(758,"(opcional)"),t()(),o(759,"p"),e(760,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),o(761,"tr",22)(762,"td",23)(763,"div",31)(764,"span",32),e(765," p-show-required"),a(766,"br"),t()()(),o(767,"td",27)(768,"code",34),e(769,"boolean"),t()(),o(770,"td",29),e(771,"-"),t(),o(772,"td",30)(773,"p"),e(774,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),o(775,"blockquote")(776,"p"),e(777,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),o(778,"ul")(779,"li"),e(780,"N\xE3o possuir "),o(781,"code"),e(782,"p-help"),t(),e(783," e/ou "),o(784,"code"),e(785,"p-label"),t(),e(786,"."),t()()()(),o(787,"tr",22)(788,"td",23)(789,"div",31)(790,"span",32),e(791," p-size"),a(792,"br"),t()()(),o(793,"td",27)(794,"code",33),e(795,"string"),t()(),o(796,"td",29)(797,"p")(798,"code"),e(799,"medium"),t()()(),o(800,"td",30)(801,"em")(802,"strong"),e(803,"(opcional)"),t()(),o(804,"p"),e(805,"Define o tamanho dos radios do componente:"),t(),o(806,"ul")(807,"li")(808,"code"),e(809,"small"),t(),e(810,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(811,"li")(812,"code"),e(813,"medium"),t(),e(814,": 24x24."),t()(),o(815,"blockquote")(816,"p"),e(817,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(818,"code"),e(819,"medium"),t(),e(820,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(821,"a",39),e(822,"po-theme"),t(),e(823,"."),t()()()()(),o(824,"h3",18),e(825,"M\xE9todos"),t(),o(826,"table",40)(827,"tr",22)(828,"th",41)(829,"div",31)(830,"h4")(831,"span",32),e(832," focus "),t()()()()(),o(833,"tr",30)(834,"td",30)(835,"p"),e(836,"Fun\xE7\xE3o que atribui foco ao componente."),t(),o(837,"p"),e(838,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),o(839,"pre")(840,"code"),e(841,`import { PoRadioGroupComponent } from '@po-ui/ng-components';

...

@ViewChild(PoRadioGroupComponent, { static: true }) radio: PoRadioGroupComponent;

focusRadio() {
  this.radio.focus();
}
`),t()()()()(),a(842,"br"),o(843,"table",40)(844,"tr",22)(845,"th",41)(846,"div",31)(847,"h4")(848,"span",32),e(849," showAdditionalHelp "),t()()()()(),o(850,"tr",30)(851,"td",30)(852,"p"),e(853,"M\xE9todo que exibe "),o(854,"code"),e(855,"p-helper"),t(),e(856," ou executa a a\xE7\xE3o definida em "),o(857,"code"),e(858,"p-helper{eventOnClick}"),t(),e(859," ou em "),o(860,"code"),e(861,"p-additionalHelp"),t(),e(862,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(863,"code"),e(864,"p-keydown"),t(),e(865,"."),t(),o(866,"blockquote")(867,"p"),e(868,"Exibe ou oculta o conte\xFAdo do componente "),o(869,"code"),e(870,"po-helper"),t(),e(871," quando o componente estiver com foco."),t()(),o(872,"pre")(873,"code"),e(874,`// Exemplo com p-label e p-helper
<po-radio-group
 #radioGroup
 ...
 p-label="Label do radioGroup"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, radioGroup)"
></po-radio-group>
`),t()(),o(875,"pre")(876,"code"),e(877,`...
onKeyDown(event: KeyboardEvent, inp: PoRadioGroupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(878,"br"),o(879,"h3"),e(880,"Interfaces"),t(),o(881,"h4",42)(882,"code",5),e(883,"PoRadioGroupOption"),t()(),o(884,"div",2)(885,"p"),e(886,"Interface para as a\xE7\xF5es do componente po-radio-group."),t()(),o(887,"h4",18),e(888,"Propriedades"),t(),o(889,"table",19)(890,"tr",20)(891,"th",21),e(892,"Nome"),t(),o(893,"th",21),e(894,"Tipo"),t(),o(895,"th",21),e(896,"Descri\xE7\xE3o"),t()(),o(897,"tr",22)(898,"td",23)(899,"div",31)(900,"span",32),e(901," disabled"),a(902,"br"),t()()(),o(903,"td",27)(904,"code",34),e(905,"boolean"),t()(),o(906,"td",30)(907,"em")(908,"strong"),e(909,"(opcional)"),t()(),o(910,"p"),e(911,"Desabilita o radio."),t()()(),o(912,"tr",22)(913,"td",23)(914,"div",31)(915,"span",32),e(916," label"),a(917,"br"),t()()(),o(918,"td",27)(919,"code",33),e(920,"string"),t()(),o(921,"td",30)(922,"p"),e(923,"Texto do radio."),t()()(),o(924,"tr",22)(925,"td",23)(926,"div",31)(927,"span",32),e(928," value"),a(929,"br"),t()()(),o(930,"td",27)(931,"code",33),e(932,"string "),t(),o(933,"code",35),e(934," number"),t()(),o(935,"td",30)(936,"p"),e(937,"Valor do radio."),t()()()()())},dependencies:[w],encapsulation:2})}return i})();var Se=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||i)(H(Z),H($))};static \u0275cmp=c({type:i,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Radio Group",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-radio-group-doc"),t(),o(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-radio-group-basic-view")(6,"sample-po-radio-group-labs-view")(7,"sample-po-radio-group-translator-view")(8,"sample-po-radio-group-translator-reactive-form-view"),t()()()),r&2&&(s("p-actions",n.actions),p(2),s("p-active",n.activeTab==="doc"),p(2),s("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ae,v,C,pe,se,ce,Ee,be],encapsulation:2})}return i})();var De=[{path:"",component:Se}],he=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=q({type:i});static \u0275inj=k({imports:[j.forChild(De),j]})}return i})();var ct=(()=>{class i{static \u0275fac=function(r){return new(r||i)};static \u0275mod=q({type:i});static \u0275inj=k({imports:[le,he]})}return i})();export{ct as DocPoRadioGroupModule};
