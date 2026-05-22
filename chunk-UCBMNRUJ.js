import{o as C,p as Pe}from"./chunk-WYOAC7KN.js";import{Fa as ye,Hb as y,Ib as x,Ja as xe,M as ve,Qa as Ce,Ra as T,S as fe,U as R,W as te,Ya as ne,_ as ie,a as j,bb as k,n as ge,ub as Me,w as L}from"./chunk-XOCFD5XY.js";import{Ab as N,Ea as m,Fa as i,Ga as t,H as re,Ha as o,I as K,Jc as J,L as B,Mb as w,Mc as A,Nc as I,O as g,Oa as W,Oc as ee,P as v,Pa as u,Pc as O,Qc as H,Tc as ue,Uc as be,Yc as Ee,Zb as $,_a as q,bb as M,cb as e,cd as he,db as me,eb as P,ed as Se,gb as E,gd as ae,ha as p,hb as h,ib as S,k as oe,ma as le,mc as ce,oa as b,pa as Y,pb as de,rb as _,ta as se,xb as z,ya as X,za as Z}from"./chunk-XD3NZLB4.js";import{a as Q}from"./chunk-GAL4ENT6.js";var _e=(()=>{class l{options=[{value:"poMultiselect1",label:"PO Multiselect 1"},{value:"poMultiselect2",label:"PO Multiselect 2"}];static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-basic"]],standalone:!1,decls:1,vars:1,consts:[["name","multiselect","p-label","PO Multiselect",3,"p-options"]],template:function(a,n){a&1&&o(0,"po-multiselect",0),a&2&&m("p-options",n.options)},dependencies:[T],encapsulation:2})}return l})();var Re=l=>({"docs-sample-code-tabs":l}),we=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="options"> </po-multiselect>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-basic/sample-po-multiselect-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-basic',
  templateUrl: './sample-po-multiselect-basic.component.html',
  standalone: false
})
export class SamplePoMultiselectBasicComponent {
  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'PO Multiselect 1' },
    { value: 'poMultiselect2', label: 'PO Multiselect 2' }
  ];
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-multiselect-basic"),t(),o(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel),p(),m("ngClass",_(4,Re,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,_e],encapsulation:2})}return l})();var Te=(()=>{class l{helperText;customLiterals;event;filterMode;help;label;literals;multiselect;option;options;placeholder;placeholderSearch;properties;fieldErrorMessage;filterService;fieldLabel;fieldValue;size;listboxPosition="bottom";filterModeOptions=[{label:"Starts With",value:"startsWith"},{label:"Contains",value:"contains"},{label:"Ends With",value:"endsWith"}];listboxPositionOptions=[{label:"top",value:"top"},{label:"bottom",value:"bottom"}];propertiesOptions=[{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"disabled",label:"Disabled"},{value:"optional",label:"Optional"},{value:"hideSearch",label:"Hide Search"},{value:"autoHeight",label:"Auto Height"},{value:"sort",label:"Sort"},{value:"hideSelectAll",label:"Hide Select All"},{value:"errorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"},{value:"compactLabel",label:"Compact Label"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addOption(){this.options=[...this.options,Q({},this.option)],this.option={label:void 0,value:void 0}}changeEvent(s){this.event=s}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(s){this.customLiterals=void 0}}restore(){this.helperText="",this.customLiterals=void 0,this.help="",this.filterMode=void 0,this.label=void 0,this.literals="",this.placeholder="",this.placeholderSearch=void 0,this.properties=[],this.fieldErrorMessage="",this.filterService="",this.fieldLabel="",this.fieldValue="",this.option={label:void 0,value:void 0},this.options=[],this.event="",this.multiselect=[],this.size="medium"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-labs"]],standalone:!1,decls:33,vars:51,consts:[["fOption","ngForm"],["f","ngForm"],[1,"po-row"],["name","PO Multiselect",1,"po-md-12",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-auto-height","p-disabled","p-field-label","p-field-value","p-filter-service","p-filter-mode","p-help","p-hide-search","p-hide-select-all","p-label","p-literals","p-loading","p-optional","p-options","p-placeholder","p-placeholder-search","p-required","p-field-error-message","p-show-required","p-size","p-sort","p-listbox-control-position","p-error-limit","p-label-text-wrap","p-compact-label"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","optionLabel","p-label","Option Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","optionValue","p-label","Option Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Option",1,"po-md-4","po-lg-2",3,"p-click","p-disabled"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholderSearch","p-clean","","p-label","Placeholder Search",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filterService","p-clean","","p-help","https://po-sample-api.onrender.com/v1/heroes","p-label","Filter Service",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","fieldValue","p-clean","","p-label","Field Value",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-clean","","p-label","Field Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-disabled","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","listboxPosition","p-label","Listbox Position",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,n){if(a&1){let c=W();i(0,"div",2)(1,"po-multiselect",3),S("ngModelChange",function(r){return g(c),h(n.multiselect,r)||(n.multiselect=r),v(r)}),u("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),t()(),o(2,"po-divider"),i(3,"div",2),o(4,"po-info",4)(5,"po-info",5),t(),o(6,"po-divider"),i(7,"form",null,0)(9,"div",2)(10,"po-input",6),S("ngModelChange",function(r){return g(c),h(n.option.label,r)||(n.option.label=r),v(r)}),t(),i(11,"po-input",7),S("ngModelChange",function(r){return g(c),h(n.option.value,r)||(n.option.value=r),v(r)}),t()(),i(12,"div",2)(13,"po-button",8),u("p-click",function(){return n.addOption()}),t()()(),o(14,"po-divider"),i(15,"form",null,1)(17,"po-input",9),S("ngModelChange",function(r){return g(c),h(n.label,r)||(n.label=r),v(r)}),t(),i(18,"po-input",10),S("ngModelChange",function(r){return g(c),h(n.help,r)||(n.help=r),v(r)}),t(),i(19,"po-input",11),S("ngModelChange",function(r){return g(c),h(n.helperText,r)||(n.helperText=r),v(r)}),t(),i(20,"po-input",12),S("ngModelChange",function(r){return g(c),h(n.placeholder,r)||(n.placeholder=r),v(r)}),t(),i(21,"po-input",13),S("ngModelChange",function(r){return g(c),h(n.placeholderSearch,r)||(n.placeholderSearch=r),v(r)}),t(),i(22,"po-input",14),S("ngModelChange",function(r){return g(c),h(n.fieldErrorMessage,r)||(n.fieldErrorMessage=r),v(r)}),t(),i(23,"po-input",15),S("ngModelChange",function(r){return g(c),h(n.literals,r)||(n.literals=r),v(r)}),u("p-change",function(){return n.changeLiterals()}),t(),i(24,"po-input",16),S("ngModelChange",function(r){return g(c),h(n.filterService,r)||(n.filterService=r),v(r)}),t(),i(25,"po-input",17),S("ngModelChange",function(r){return g(c),h(n.fieldValue,r)||(n.fieldValue=r),v(r)}),t(),i(26,"po-input",18),S("ngModelChange",function(r){return g(c),h(n.fieldLabel,r)||(n.fieldLabel=r),v(r)}),t(),i(27,"po-checkbox-group",19),S("ngModelChange",function(r){return g(c),h(n.properties,r)||(n.properties=r),v(r)}),t(),i(28,"po-radio-group",20),S("ngModelChange",function(r){return g(c),h(n.filterMode,r)||(n.filterMode=r),v(r)}),t(),i(29,"po-radio-group",21),S("ngModelChange",function(r){return g(c),h(n.size,r)||(n.size=r),v(r)}),t(),i(30,"po-radio-group",22),S("ngModelChange",function(r){return g(c),h(n.listboxPosition,r)||(n.listboxPosition=r),v(r)}),t(),i(31,"div",2)(32,"po-button",23),u("p-click",function(){return n.restore()}),t()()()}if(a&2){let c=q(8);p(),E("ngModel",n.multiselect),m("p-helper",n.helperText)("p-auto-height",n.properties.includes("autoHeight"))("p-disabled",n.properties.includes("disabled"))("p-field-label",n.fieldLabel)("p-field-value",n.fieldValue)("p-filter-service",n.filterService)("p-filter-mode",n.filterMode)("p-help",n.help)("p-hide-search",n.properties.includes("hideSearch"))("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-label",n.label)("p-literals",n.customLiterals)("p-loading",n.properties.includes("loading"))("p-optional",n.properties.includes("optional"))("p-options",n.options)("p-placeholder",n.placeholder)("p-placeholder-search",n.placeholderSearch)("p-required",n.properties.includes("required"))("p-field-error-message",n.fieldErrorMessage)("p-show-required",n.properties.includes("showRequired"))("p-size",n.size)("p-sort",n.properties.includes("sort"))("p-listbox-control-position",n.listboxPosition)("p-error-limit",n.properties==null?null:n.properties.includes("errorLimit"))("p-label-text-wrap",n.properties==null?null:n.properties.includes("labelTextWrap"))("p-compact-label",n.properties==null?null:n.properties.includes("compactLabel")),p(3),m("p-value",n.multiselect),p(),m("p-value",n.event),p(5),E("ngModel",n.option.label),p(),E("ngModel",n.option.value),p(2),m("p-disabled",c.form.invalid),p(4),E("ngModel",n.label),p(),E("ngModel",n.help),p(),E("ngModel",n.helperText),p(),E("ngModel",n.placeholder),p(),E("ngModel",n.placeholderSearch),p(),E("ngModel",n.fieldErrorMessage),p(),E("ngModel",n.literals),p(),E("ngModel",n.filterService),p(),E("ngModel",n.fieldValue),p(),E("ngModel",n.fieldLabel),p(),E("ngModel",n.properties),m("p-options",n.propertiesOptions),p(),E("ngModel",n.filterMode),m("p-disabled",n.properties.includes("hideSearch"))("p-options",n.filterModeOptions),p(),E("ngModel",n.size),m("p-options",n.sizeOptions),p(),E("ngModel",n.listboxPosition),m("p-options",n.listboxPositionOptions)}},dependencies:[H,A,I,O,ee,L,j,fe,R,xe,T,k],encapsulation:2})}return l})();var Ge=l=>({"docs-sample-code-tabs":l}),Ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-multiselect
    class="po-md-12"
    name="PO Multiselect"
    [(ngModel)]="multiselect"
    [p-helper]="helperText"
    [p-auto-height]="properties.includes('autoHeight')"
    [p-disabled]="properties.includes('disabled')"
    [p-field-label]="fieldLabel"
    [p-field-value]="fieldValue"
    [p-filter-service]="filterService"
    [p-filter-mode]="filterMode"
    [p-help]="help"
    [p-hide-search]="properties.includes('hideSearch')"
    [p-hide-select-all]="properties.includes('hideSelectAll')"
    [p-label]="label"
    [p-literals]="customLiterals"
    [p-loading]="properties.includes('loading')"
    [p-optional]="properties.includes('optional')"
    [p-options]="options"
    [p-placeholder]="placeholder"
    [p-placeholder-search]="placeholderSearch"
    [p-required]="properties.includes('required')"
    [p-field-error-message]="fieldErrorMessage"
    [p-show-required]="properties.includes('showRequired')"
    [p-size]="size"
    [p-sort]="properties.includes('sort')"
    [p-listbox-control-position]="listboxPosition"
    (p-change)="changeEvent('p-change')"
    (p-keydown)="changeEvent('p-keydown')"
    [p-error-limit]="properties?.includes('errorLimit')"
    [p-label-text-wrap]="properties?.includes('labelTextWrap')"
    [p-compact-label]="properties?.includes('compactLabel')"
  >
  </po-multiselect>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="multiselect"> </po-info>

  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #fOption="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="optionLabel" [(ngModel)]="option.label" p-label="Option Label" p-required>
    </po-input>

    <po-input class="po-md-6" name="optionValue" [(ngModel)]="option.value" p-label="Option Value" p-required>
    </po-input>
  </div>

  <div class="po-row">
    <po-button class="po-md-4 po-lg-2" p-label="Add Option" [p-disabled]="fOption.form.invalid" (p-click)="addOption()">
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
    name="placeholderSearch"
    [(ngModel)]="placeholderSearch"
    p-clean
    p-label="Placeholder Search"
  >
  </po-input>

  <po-input
    class="po-md-6"
    name="fieldErrorMessage"
    [(ngModel)]="fieldErrorMessage"
    p-clean
    p-label="Field Error Message"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"noData": "Sem dados a serem exibidos", "placeholderSearch": "Buscar"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>

  <po-input
    class="po-md-12 po-lg-6"
    name="filterService"
    [(ngModel)]="filterService"
    p-clean
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    p-label="Filter Service"
  >
  </po-input>

  <po-input class="po-md-6" name="fieldValue" [(ngModel)]="fieldValue" p-clean p-label="Field Value"> </po-input>

  <po-input class="po-md-6" name="fieldLabel" [(ngModel)]="fieldLabel" p-clean p-label="Field Label"> </po-input>

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
    name="filterMode"
    [(ngModel)]="filterMode"
    p-columns="4"
    p-label="Filter mode"
    [p-disabled]="properties.includes('hideSearch')"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-labs/sample-po-multiselect-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoMultiselectLiterals,
  PoMultiselectOption,
  PoRadioGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-labs',
  templateUrl: './sample-po-multiselect-labs.component.html',
  standalone: false
})
export class SamplePoMultiselectLabsComponent implements OnInit {
  helperText: string;
  customLiterals: PoMultiselectLiterals;
  event: string;
  filterMode: string;
  help: string;
  label: string;
  literals: string;
  multiselect: Array<string>;
  option: PoMultiselectOption;
  options: Array<PoMultiselectOption>;
  placeholder: string;
  placeholderSearch: string;
  properties: Array<string>;
  fieldErrorMessage: string;
  filterService: string;
  fieldLabel: string;
  fieldValue: string;
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

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'optional', label: 'Optional' },
    { value: 'hideSearch', label: 'Hide Search' },
    { value: 'autoHeight', label: 'Auto Height' },
    { value: 'sort', label: 'Sort' },
    { value: 'hideSelectAll', label: 'Hide Select All' },
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
    this.options = [...this.options, { ...this.option }];
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

  restore() {
    this.helperText = '';
    this.customLiterals = undefined;
    this.help = '';
    this.filterMode = undefined;
    this.label = undefined;
    this.literals = '';
    this.placeholder = '';
    this.placeholderSearch = undefined;
    this.properties = [];
    this.fieldErrorMessage = '';
    this.filterService = '';
    this.fieldLabel = '';
    this.fieldValue = '';

    this.option = { label: undefined, value: undefined };
    this.options = [];

    this.event = '';
    this.multiselect = [];
    this.size = 'medium';
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-multiselect-labs"),t(),o(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel),p(),m("ngClass",_(4,Ge,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Te],encapsulation:2})}return l})();var Ae=(()=>{class l{days;employeesVacations=[];finalPeriod;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.clean()}clean(){this.days=20,this.initialPeriod=void 0,this.finalPeriod=void 0,this.employeesVacations=[]}updateNameEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.employeesVacations.includes(s.value)).map(s=>s.label).join(", ")}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-vacation"]],standalone:!1,decls:26,vars:20,consts:[["f","ngForm"],["modalEmployeesVacation",""],[1,"po-row"],["name","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"ngModelChange","ngModel","p-min-date"],["name","days","p-help","Maximum of days that employs can choose","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","employeesVacations","p-label","Select your employees for collective vacations","p-required","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=W();i(0,"form",null,0)(2,"h3"),e(3,"Collective vacations"),t(),o(4,"po-divider"),i(5,"div",2)(6,"po-datepicker",3),S("ngModelChange",function(r){return g(c),h(n.initialPeriod,r)||(n.initialPeriod=r),v(r)}),t(),i(7,"po-datepicker",4),S("ngModelChange",function(r){return g(c),h(n.finalPeriod,r)||(n.finalPeriod=r),v(r)}),t()(),i(8,"div",2)(9,"po-radio-group",5),S("ngModelChange",function(r){return g(c),h(n.days,r)||(n.days=r),v(r)}),t()(),i(10,"div",2)(11,"po-multiselect",6),S("ngModelChange",function(r){return g(c),h(n.employeesVacations,r)||(n.employeesVacations=r),v(r)}),t()(),i(12,"div",2)(13,"po-button",7),u("p-click",function(){g(c);let r=q(16);return n.updateNameEmployeesVacations(),v(r.open())}),t(),i(14,"po-button",8),u("p-click",function(){return n.clean()}),t()()(),i(15,"po-modal",9,1)(17,"div",2),o(18,"po-info",10),z(19,"date"),o(20,"po-info",11),z(21,"date"),o(22,"po-info",12),t(),o(23,"po-divider"),i(24,"div",2),o(25,"po-info",13),t()()}if(a&2){let c=q(1);p(6),E("ngModel",n.initialPeriod),p(),E("ngModel",n.finalPeriod),m("p-min-date",n.initialPeriod),p(2),E("ngModel",n.days),m("p-options",n.daysOptions),p(2),E("ngModel",n.employeesVacations),m("p-options",n.employees),p(2),m("p-disabled",c.form.invalid),p(5),m("p-value",N(19,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",N(21,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations)}},dependencies:[H,A,I,O,ee,L,j,R,te,T,k,ie,$],encapsulation:2})}return l})();var Ye=l=>({"docs-sample-code-tabs":l}),Oe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-vacation-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Vacation"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.html"),t(),i(13,"pre",7),e(14,`<form #f="ngForm">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker class="po-md-6" name="initialPeriod" [(ngModel)]="initialPeriod" p-label="Initial period" p-required>
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      [(ngModel)]="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="initialPeriod"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="days"
      [(ngModel)]="days"
      p-help="Maximum of days that employs can choose"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-12"
      name="employeesVacations"
      [(ngModel)]="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-options]="employees"
      p-required
    >
    </po-multiselect>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="f.form.invalid"
      (p-click)="updateNameEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-vacation/sample-po-multiselect-vacation.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation',
  templateUrl: './sample-po-multiselect-vacation.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationComponent implements OnInit {
  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.clean();
  }

  clean() {
    this.days = 20;
    this.initialPeriod = undefined;
    this.finalPeriod = undefined;
    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-multiselect-vacation"),t(),o(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel),p(),m("ngClass",_(4,Ye,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Ae],encapsulation:2})}return l})();var Le=(()=>{class l{formBuilder=B(Ee);days;employeesVacations=[];finalPeriod;formCollectiveVacations;initialPeriod;nameEmployeesVacations;employees=[{value:"412341",label:"Alfred"},{value:"518734",label:"Alice"},{value:"986237",label:"Bradley"},{value:"941278",label:"Jackie"},{value:"112333",label:"Jane"},{value:"989898",label:"John"},{value:"897643",label:"Phillip"},{value:"423767",label:"Reynold"},{value:"423837",label:"Robert"}];daysOptions=[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}];ngOnInit(){this.formCollectiveVacations=this.formBuilder.group({initialPeriod:[null,J.required],finalPeriod:[null,J.required],days:[null,J.required],employeesVacations:[null,J.required]}),this.clean()}clean(){this.formCollectiveVacations.patchValue({days:20,initialPeriod:void 0,finalPeriod:void 0,employeesVacations:void 0})}getRangeFinalPeriod(){return this.formCollectiveVacations.get("initialPeriod").value}updateEmployeesVacations(){this.nameEmployeesVacations=this.employees.filter(s=>this.formCollectiveVacations.get("employeesVacations").value.includes(s.value)).map(s=>s.label).join(", "),this.initialPeriod=this.formCollectiveVacations.get("initialPeriod").value,this.finalPeriod=this.formCollectiveVacations.get("finalPeriod").value,this.days=this.formCollectiveVacations.get("days").value}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form"]],standalone:!1,decls:24,vars:20,consts:[["modalEmployeesVacation",""],[3,"formGroup"],[1,"po-row"],["name","initialPeriod","formControlName","initialPeriod","p-label","Initial period","p-required","",1,"po-md-6"],["name","finalPeriod","formControlName","finalPeriod","p-label","Final period","p-required","",1,"po-md-6",3,"p-min-date"],["name","employeesVacations","formControlName","employeesVacations","p-label","Select your employees for collective vacations",1,"po-md-4",3,"p-auto-height","p-options","p-required"],["name","days","formControlName","days","p-label","How many days of vacation the employees will be able to have?","p-required","",1,"po-lg-8",3,"p-options","p-columns"],["name","Approve Vacations","p-label","Approve Vacations",1,"po-md-4","po-offset-md-5","po-offset-lg-5","po-offset-xl-5",3,"p-click","p-disabled"],["p-label","Clean",1,"po-md-3",3,"p-click"],["p-title","Collective Vacation"],["p-label","Initial period",1,"po-md-5",3,"p-value"],["p-label","Final period",1,"po-md-5",3,"p-value"],["p-label","Days",1,"po-md-2",3,"p-value"],["p-label","Employees",1,"po-lg-12",3,"p-value"]],template:function(a,n){if(a&1){let c=W();i(0,"form",1)(1,"h3"),e(2,"Collective vacations"),t(),o(3,"po-divider"),i(4,"div",2),o(5,"po-datepicker",3)(6,"po-datepicker",4),t(),i(7,"div",2),o(8,"po-multiselect",5)(9,"po-radio-group",6),t(),i(10,"div",2)(11,"po-button",7),u("p-click",function(){g(c);let r=q(14);return n.updateEmployeesVacations(),v(r.open())}),t(),i(12,"po-button",8),u("p-click",function(){return n.clean()}),t()()(),i(13,"po-modal",9,0)(15,"div",2),o(16,"po-info",10),z(17,"date"),o(18,"po-info",11),z(19,"date"),o(20,"po-info",12),t(),o(21,"po-divider"),i(22,"div",2),o(23,"po-info",13),t()()}a&2&&(m("formGroup",n.formCollectiveVacations),p(6),m("p-min-date",n.getRangeFinalPeriod()),p(2),m("p-auto-height",!0)("p-options",n.employees)("p-required",!0),p(),m("p-options",n.daysOptions)("p-columns",3),p(2),m("p-disabled",n.formCollectiveVacations.invalid),p(5),m("p-value",N(17,12,n.initialPeriod,"longDate","+0000")),p(2),m("p-value",N(19,16,n.finalPeriod,"longDate","+0000")),p(2),m("p-value",n.days),p(3),m("p-value",n.nameEmployeesVacations))},dependencies:[H,A,I,be,ue,L,j,R,te,T,k,ie,$],encapsulation:2})}return l})();var $e=l=>({"docs-sample-code-tabs":l}),ke=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-vacation-reactive-form-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Vacation Reactive Form"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.html"),t(),i(13,"pre",7),e(14,`<form [formGroup]="formCollectiveVacations">
  <h3>Collective vacations</h3>

  <po-divider />

  <div class="po-row">
    <po-datepicker
      class="po-md-6"
      name="initialPeriod"
      formControlName="initialPeriod"
      p-label="Initial period"
      p-required
    >
    </po-datepicker>

    <po-datepicker
      class="po-md-6"
      name="finalPeriod"
      formControlName="finalPeriod"
      p-label="Final period"
      p-required
      [p-min-date]="getRangeFinalPeriod()"
    >
    </po-datepicker>
  </div>

  <div class="po-row">
    <po-multiselect
      class="po-md-4"
      name="employeesVacations"
      formControlName="employeesVacations"
      p-label="Select your employees for collective vacations"
      [p-auto-height]="true"
      [p-options]="employees"
      [p-required]="true"
    >
    </po-multiselect>

    <po-radio-group
      class="po-lg-8"
      name="days"
      formControlName="days"
      p-label="How many days of vacation the employees will be able to have?"
      p-required
      [p-options]="daysOptions"
      [p-columns]="3"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4 po-offset-md-5 po-offset-lg-5 po-offset-xl-5"
      name="Approve Vacations"
      p-label="Approve Vacations"
      [p-disabled]="formCollectiveVacations.invalid"
      (p-click)="updateEmployeesVacations(); modalEmployeesVacation.open()"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Clean" (p-click)="clean()"> </po-button>
  </div>
</form>

<po-modal #modalEmployeesVacation p-title="Collective Vacation">
  <div class="po-row">
    <po-info class="po-md-5" p-label="Initial period" [p-value]="initialPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-5" p-label="Final period" [p-value]="finalPeriod | date: 'longDate' : '+0000'"> </po-info>

    <po-info class="po-md-2" p-label="Days" [p-value]="days"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-lg-12" p-label="Employees" [p-value]="nameEmployeesVacations"> </po-info>
  </div>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-vacation-reactive-form/sample-po-multiselect-vacation-reactive-form.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { PoMultiselectOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-vacation-reactive-form',
  templateUrl: './sample-po-multiselect-vacation-reactive-form.component.html',
  standalone: false
})
export class SamplePoMultiselectVacationReactiveFormComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  formCollectiveVacations: UntypedFormGroup;
  initialPeriod: Date;
  nameEmployeesVacations: string;

  public readonly employees: Array<PoMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '112333', label: 'Jane' },
    { value: '989898', label: 'John' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<PoRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.formCollectiveVacations = this.formBuilder.group({
      initialPeriod: [null, Validators.required],
      finalPeriod: [null, Validators.required],
      days: [null, Validators.required],
      employeesVacations: [null, Validators.required]
    });

    this.clean();
  }

  clean() {
    this.formCollectiveVacations.patchValue({
      days: 20,
      initialPeriod: undefined,
      finalPeriod: undefined,
      employeesVacations: undefined
    });
  }

  getRangeFinalPeriod() {
    return this.formCollectiveVacations.get('initialPeriod').value;
  }

  updateEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: PoMultiselectOption) =>
        this.formCollectiveVacations.get('employeesVacations').value.includes(<string>employee.value)
      )
      .map((employee: PoMultiselectOption) => employee.label)
      .join(', ');
    this.initialPeriod = this.formCollectiveVacations.get('initialPeriod').value;
    this.finalPeriod = this.formCollectiveVacations.get('finalPeriod').value;
    this.days = this.formCollectiveVacations.get('days').value;
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-multiselect-vacation-reactive-form"),t(),o(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel),p(),m("ngClass",_(4,$e,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Le],encapsulation:2})}return l})();function tt(l,G){l&1&&o(0,"po-tag",11),l&2&&m("p-icon",!0)}function it(l,G){l&1&&o(0,"po-tag",12),l&2&&m("p-icon",!0)}function nt(l,G){l&1&&o(0,"po-tag",13),l&2&&m("p-icon",!0)}function ot(l,G){if(l&1&&(i(0,"div",0)(1,"div",7)(2,"div",8),e(3),t()(),i(4,"div",9)(5,"div",10),X(6,tt,1,1,"po-tag",11),X(7,it,1,1,"po-tag",12),X(8,nt,1,1,"po-tag",13),t()()()),l&2){let s=G.$implicit;p(3),me(s.label),p(3),Z(s.admin?6:-1),p(),Z(s.access?7:-1),p(),Z(!s.admin&&!s.access?8:-1)}}var De=(()=>{class l{employee;typeAccess;typeAccessMap={admin:{admin:!0,access:!0},access:{admin:!1,access:!0},noAccess:{admin:!1,access:!1}};options=[{value:"Anna M.",label:"Anna M.",admin:!1,access:!0},{value:"Jhon T.",label:"Jhon T.",admin:!0,access:!0},{value:"Marie J.",label:"Marie J.",admin:!1,access:!1}];employees=[{label:"Anna M.",value:"Anna M."},{label:"Jhon T.",value:"Jhon T."},{label:"Marie J.",value:"Marie J."}];typeAccessValue=[{label:"Admin e acesso padr\xE3o",value:"admin"},{label:"Acesso padr\xE3o",value:"access"},{label:"Sem acesso",value:"noAccess"}];changeAccess(){let s=[...this.options].map(a=>a.value===this.employee?Q({value:a.value,label:a.label},this.typeAccessMap[this.typeAccess]):a);this.options=s,this.employee=void 0,this.typeAccess=void 0}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-template"]],standalone:!1,decls:7,vars:7,consts:[[1,"po-row"],["name","employee","p-label","Employee",1,"po-md-5",3,"ngModelChange","p-options","ngModel"],["name","typeOfAccess","p-label","Type of access",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-md-1","containerButton"],["p-label","Alterar acesso",3,"p-click","p-disabled"],["name","multiselect","p-label","PO Multiselect",1,"po-md-12",3,"p-options","p-hide-select-all"],["p-multiselect-option-template",""],[1,"po-md-2","containerFlex"],[1,"po-font-text-large-bold"],[1,"po-md-10"],[1,"containerFlexTag"],["p-value","Admin","p-type","success",3,"p-icon"],["p-value","Normal","p-type","info",3,"p-icon"],["p-value","Sem acesso","p-type","danger",3,"p-icon"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"po-select",1),S("ngModelChange",function(d){return h(n.employee,d)||(n.employee=d),d}),t(),i(2,"po-select",2),S("ngModelChange",function(d){return h(n.typeAccess,d)||(n.typeAccess=d),d}),t(),i(3,"div",3)(4,"po-button",4),u("p-click",function(){return n.changeAccess()}),t()(),i(5,"po-multiselect",5),se(6,ot,9,4,"ng-template",6),t()()),a&2&&(p(),m("p-options",n.employees),E("ngModel",n.employee),p(),m("p-options",n.typeAccessValue),E("ngModel",n.typeAccess),p(2),m("p-disabled",!n.employee||!n.typeAccess),p(),m("p-options",n.options)("p-hide-select-all",!0))},dependencies:[A,O,L,Ce,T,ne,ge],styles:[".containerFlex[_ngcontent-%COMP%]{display:flex;align-items:center}.containerFlexTag[_ngcontent-%COMP%]{display:flex;gap:2px;flex-direction:column}.containerButton[_ngcontent-%COMP%]{display:flex;align-items:flex-end;padding:8px}"]})}return l})();var at=l=>({"docs-sample-code-tabs":l}),qe=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-template-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Template"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-template/sample-po-multiselect-template.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-select class="po-md-5" name="employee" p-label="Employee" [p-options]="employees" [(ngModel)]="employee">
  </po-select>

  <po-select
    class="po-md-6"
    name="typeOfAccess"
    p-label="Type of access"
    [p-options]="typeAccessValue"
    [(ngModel)]="typeAccess"
  >
  </po-select>

  <div class="po-md-1 containerButton">
    <po-button p-label="Alterar acesso" [p-disabled]="!employee || !typeAccess" (p-click)="changeAccess()"> </po-button>
  </div>

  <po-multiselect
    class="po-md-12"
    name="multiselect"
    p-label="PO Multiselect"
    [p-options]="options"
    [p-hide-select-all]="true"
  >
    <ng-template p-multiselect-option-template let-option>
      <div class="po-row">
        <div class="po-md-2 containerFlex">
          <div class="po-font-text-large-bold">{ { option.label }}</div>
        </div>

        <div class="po-md-10">
          <div class="containerFlexTag">
            @if (option.admin) {
              <po-tag p-value="Admin" p-type="success" [p-icon]="true"> </po-tag>
            }
            @if (option.access) {
              <po-tag p-value="Normal" p-type="info" [p-icon]="true"> </po-tag>
            }
            @if (!option.admin && !option.access) {
              <po-tag p-value="Sem acesso" p-type="danger" [p-icon]="true"> </po-tag>
            }
          </div>
        </div>
      </div>
    </ng-template>
  </po-multiselect>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-template/sample-po-multiselect-template.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-template',
  templateUrl: './sample-po-multiselect-template.component.html',
  styleUrls: ['./sample-po-multiselect-template.component.css'],
  standalone: false
})
export class SamplePoMultiselectTemplateComponent {
  employee;
  typeAccess;
  typeAccessMap = {
    admin: { admin: true, access: true },
    access: { admin: false, access: true },
    noAccess: { admin: false, access: false }
  };

  options = [
    { value: 'Anna M.', label: 'Anna M.', admin: false, access: true },
    { value: 'Jhon T.', label: 'Jhon T.', admin: true, access: true },
    { value: 'Marie J.', label: 'Marie J.', admin: false, access: false }
  ];

  readonly employees: Array<PoSelectOption> = [
    { label: 'Anna M.', value: 'Anna M.' },
    { label: 'Jhon T.', value: 'Jhon T.' },
    { label: 'Marie J.', value: 'Marie J.' }
  ];

  readonly typeAccessValue: Array<PoSelectOption> = [
    { label: 'Admin e acesso padr\xE3o', value: 'admin' },
    { label: 'Acesso padr\xE3o', value: 'access' },
    { label: 'Sem acesso', value: 'noAccess' }
  ];

  changeAccess() {
    const newOptions = [...this.options].map(opt => {
      if (opt.value === this.employee) {
        return {
          value: opt.value,
          label: opt.label,
          ...this.typeAccessMap[this.typeAccess]
        };
      }
      return opt;
    });

    this.options = newOptions;
    this.employee = undefined;
    this.typeAccess = undefined;
  }
}
`),t()()(),i(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-multiselect-template/sample-po-multiselect-template.component.css"),t(),i(25,"pre",11),e(26,`.containerFlex {
  display: flex;
  align-items: center;
}

.containerFlexTag {
  display: flex;
  gap: 2px;
  flex-direction: column;
}

.containerButton {
  display: flex;
  align-items: flex-end;
  padding: 8px;
}
`),t()()()()(),i(27,"div",12),o(28,"sample-po-multiselect-template"),t(),o(29,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel),p(),m("ngClass",_(4,at,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,De],encapsulation:2})}return l})();var pe=(()=>{class l{http=B(ce);getFilteredData({value:s}){let a={filter:s};return this.http.get("https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10",{params:a}).pipe(oe(n=>n.items))}getObjectsByValues(s){return this.http.get(`https://po-sample-api.onrender.com/v1/heroes/?value=${s.toString()}`).pipe(oe(a=>a.items))}static \u0275fac=function(a){return new(a||l)};static \u0275prov=re({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var Fe=(()=>{class l{samplePoMultiselectHeroesService=B(pe);debounce=500;filterService;heroes;multiselect=["1495831666871","1405833068599"];columns=[{property:"value",label:"id"},{property:"label",label:"Name",type:"link",action:s=>{this.openLink(s)}}];constructor(){let s=this.samplePoMultiselectHeroesService;this.filterService=s}changeOptions(s){this.heroes=[...s]}openLink(s){window.open(`http://google.com/search?q=${s}`,"_blank")}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-heroes"]],standalone:!1,features:[de([pe])],decls:4,vars:9,consts:[[1,"po-row"],["name","multiselect","p-label","Search a Hero",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-filter-service","p-debounce-time"],[1,"po-md-6"],[3,"p-columns","p-items","p-height","p-striped","p-hide-columns-manager","p-hide-table-search"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"po-multiselect",1),S("ngModelChange",function(d){return h(n.multiselect,d)||(n.multiselect=d),d}),u("p-change",function(d){return n.changeOptions(d)}),t(),i(2,"po-container",2),o(3,"po-table",3),t()()),a&2&&(p(),E("ngModel",n.multiselect),m("p-filter-service",n.filterService)("p-debounce-time",n.debounce),p(2),m("p-columns",n.columns)("p-items",n.heroes)("p-height",220)("p-striped",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[A,O,ve,T,ye],encapsulation:2})}return l})();var st=l=>({"docs-sample-code-tabs":l}),Be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Heroes - using API"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <po-multiselect
    class="po-md-6"
    name="multiselect"
    [(ngModel)]="multiselect"
    p-label="Search a Hero"
    [p-filter-service]="filterService"
    [p-debounce-time]="debounce"
    (p-change)="changeOptions($event)"
  >
  </po-multiselect>

  <po-container class="po-md-6">
    <po-table
      [p-columns]="columns"
      [p-items]="heroes"
      [p-height]="220"
      [p-striped]="true"
      [p-hide-columns-manager]="true"
      [p-hide-table-search]="false"
    >
    </po-table>
  </po-container>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { PoTableColumn, PoMultiselectFilter } from '@po-ui/ng-components';

import { SamplePoMultiselectHeroesService } from './sample-po-multiselect-heroes.service';

@Component({
  selector: 'sample-po-multiselect-heroes',
  templateUrl: './sample-po-multiselect-heroes.component.html',
  providers: [SamplePoMultiselectHeroesService],
  standalone: false
})
export class SamplePoMultiselectHeroesComponent {
  samplePoMultiselectHeroesService = inject(SamplePoMultiselectHeroesService);

  debounce = 500;
  filterService: PoMultiselectFilter;
  heroes: Array<any>;
  multiselect: Array<string> = ['1495831666871', '1405833068599'];
  columns: Array<PoTableColumn> = [
    { property: 'value', label: 'id' },
    {
      property: 'label',
      label: 'Name',
      type: 'link',
      action: value => {
        this.openLink(value);
      }
    }
  ];

  constructor() {
    const samplePoMultiselectHeroesService = this.samplePoMultiselectHeroesService;

    this.filterService = samplePoMultiselectHeroesService;
  }

  changeOptions(event): void {
    this.heroes = [...event];
  }

  openLink(value) {
    window.open(\`http://google.com/search?q=\${value}\`, '_blank');
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-multiselect-heroes/sample-po-multiselect-heroes.service.ts"),t(),i(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PoMultiselectFilter, PoMultiselectOption } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoMultiselectHeroesService implements PoMultiselectFilter {
  private http = inject(HttpClient);

  getFilteredData({ value }): Observable<Array<PoMultiselectOption>> {
    const params = { filter: value };

    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes?page=1&pageSize=10\`, { params })
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }

  getObjectsByValues(value: Array<string | number>): Observable<Array<PoMultiselectOption>> {
    return this.http
      .get(\`https://po-sample-api.onrender.com/v1/heroes/?value=\${value.toString()}\`)
      .pipe(map((response: { items: Array<PoMultiselectOption> }) => response.items));
  }
}
`),t()()()()(),i(25,"div",10),o(26,"sample-po-multiselect-heroes"),t(),o(27,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel),p(),m("ngClass",_(4,st,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,Fe],encapsulation:2})}return l})();var We=(()=>{class l{company;fieldLabel="razaoSocial";fieldValue="cnpj";options=[{codigo:"1",nomeFantasia:"TOTVS SA",razaoSocial:"TOTVS LTDA",label:"TOTVS COMPANY",cnpj:"01.234.567/0000-01",value:"100",id:"10",email:"totvscompany@sample.com",data:"10/03/2015",origem:"S\xE3o Paulo"},{codigo:"2",nomeFantasia:"INSTITUTO TOTVS DE ENSINO SA",razaoSocial:"INST TOTVS DE ENSINO LTDA",label:"INST TOTVS",cnpj:"02.345.678/0000-02",value:"200",id:"20",email:"insttotvs@sample.com",data:"10/10/2020",origem:"Joinville"},{codigo:"3",nomeFantasia:"TOTVS ENTERPRISE SA",razaoSocial:"TOTVS ENTERPRISE LTDA ",label:"ENT TOTVS",cnpj:"03.456.789/0000-03",value:"300",id:"30",email:"enttotvs@sample.com",data:"10/01/2022",origem:"Curitiba"}];optionsSelect=[{label:"codigo",value:"codigo"},{label:"nomeFantasia",value:"nomeFantasia"},{label:"razaoSocial",value:"razaoSocial"},{label:"label",value:"label"},{label:"cnpj",value:"cnpj"},{label:"value",value:"value"},{label:"id",value:"id"},{label:"email",value:"email"},{label:"data",value:"data"},{label:"origem",value:"origem"}];onChange(s){this.company=void 0}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-any-array"]],standalone:!1,decls:9,vars:9,consts:[[1,"po-row"],[1,"po-md-6"],["name","label","p-label","Select Field Label",3,"ngModelChange","p-change","p-options","ngModel"],["name","label","p-label","Select Field Value",3,"ngModelChange","p-change","p-options","ngModel"],["name","multiselect","p-label","Select your Company","p-listbox-control-position","top",1,"po-md-12",3,"ngModelChange","p-options","p-field-value","p-field-label","ngModel"],["p-label","Model",1,"po-md-12",3,"p-value"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"div",1)(2,"po-select",2),S("ngModelChange",function(d){return h(n.fieldLabel,d)||(n.fieldLabel=d),d}),u("p-change",function(d){return n.onChange(d)}),t(),i(3,"po-select",3),S("ngModelChange",function(d){return h(n.fieldValue,d)||(n.fieldValue=d),d}),u("p-change",function(d){return n.onChange(d)}),t()(),i(4,"div",1)(5,"div",0)(6,"po-multiselect",4),S("ngModelChange",function(d){return h(n.company,d)||(n.company=d),d}),t()(),i(7,"div",0),o(8,"po-info",5),t()()()),a&2&&(p(2),m("p-options",n.optionsSelect),E("ngModel",n.fieldLabel),p(),m("p-options",n.optionsSelect),E("ngModel",n.fieldValue),p(3),m("p-options",n.options)("p-field-value",n.fieldValue)("p-field-label",n.fieldLabel),E("ngModel",n.company),p(2),m("p-value",n.company))},dependencies:[A,O,T,ne,k],encapsulation:2})}return l})();var ct=l=>({"docs-sample-code-tabs":l}),ze=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-any-array-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,n){a&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Multiselect - Array Any"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-md-6">
    <po-select
      name="label"
      p-label="Select Field Label"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldLabel"
      (p-change)="onChange($event)"
    >
    </po-select>
    <po-select
      name="label"
      p-label="Select Field Value"
      [p-options]="optionsSelect"
      [(ngModel)]="fieldValue"
      (p-change)="onChange($event)"
    >
    </po-select>
  </div>
  <div class="po-md-6">
    <div class="po-row">
      <po-multiselect
        class="po-md-12"
        name="multiselect"
        p-label="Select your Company"
        p-listbox-control-position="top"
        [p-options]="options"
        [p-field-value]="fieldValue"
        [p-field-label]="fieldLabel"
        [(ngModel)]="company"
      >
      </po-multiselect>
    </div>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Model" [p-value]="company"> </po-info>
    </div>
  </div>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-multiselect-any-array/sample-po-multiselect-any-array.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-multiselect-any-array',
  templateUrl: './sample-po-multiselect-any-array.component.html',
  standalone: false
})
export class SamplePoMultiselectAnyArrayComponent {
  company;
  fieldLabel = 'razaoSocial';
  fieldValue = 'cnpj';

  public readonly options: Array<any> = [
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

  public readonly optionsSelect: Array<PoSelectOption> = [
    { label: 'codigo', value: 'codigo' },
    { label: 'nomeFantasia', value: 'nomeFantasia' },
    { label: 'razaoSocial', value: 'razaoSocial' },
    { label: 'label', value: 'label' },
    { label: 'cnpj', value: 'cnpj' },
    { label: 'value', value: 'value' },
    { label: 'id', value: 'id' },
    { label: 'email', value: 'email' },
    { label: 'data', value: 'data' },
    { label: 'origem', value: 'origem' }
  ];

  onChange(event) {
    this.company = undefined;
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-multiselect-any-array"),t(),o(23,"hr")),a&2&&(p(5),M("po-icon "+n.sampleCodeButtonIcon),p(),P(" ",n.sampleCodeButtonLabel),p(),m("ngClass",_(4,ct,n.hideSampleCodeTabs)))},dependencies:[w,C,y,x,We],encapsulation:2})}return l})();var Ne=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=b({type:l,selectors:[["sample-po-multiselect-doc"]],standalone:!1,decls:1513,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption"],["pan","",1,"docs-api-property-type","any>"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","{","property:","string,","value:","string","}"],["pan","",1,"docs-api-property-type","Array<string"],["pan","",1,"docs-api-property-type","number>"]],template:function(a,n){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),i(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),i(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),i(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),i(16,"h3",3),e(17,"Componente"),t(),i(18,"h4",4)(19,"code",5),e(20,"PoMultiselectComponent"),t()(),i(21,"div",2)(22,"p"),e(23,`O po-multiselect \xE9 um componente de m\xFAltipla sele\xE7\xE3o.
Este componente \xE9 recomendado para dar ao usu\xE1rio a op\xE7\xE3o de selecionar v\xE1rios itens em uma lista.`),t(),i(24,"p"),e(25,`Quando a lista possuir poucos itens, deve-se dar prefer\xEAncia para o uso do po-checkbox-group, por ser mais simples
e mais r\xE1pido para a sele\xE7\xE3o do usu\xE1rio.`),t(),i(26,"p"),e(27,`Este componente tamb\xE9m n\xE3o deve ser utilizado em casos onde a sele\xE7\xE3o seja \xFAnica. Nesses casos, deve-se utilizar o
po-select, po-combo ou po-radio-group.`),t(),i(28,"p"),e(29,"Com ele tamb\xE9m \xE9 poss\xEDvel definir uma lista \xE0 partir da requisi\xE7\xE3o de um servi\xE7o definido em "),i(30,"code"),e(31,"p-filter-service"),t(),e(32,"."),t(),i(33,"h4"),e(34,"Boas pr\xE1ticas"),t(),i(35,"ul")(36,"li"),e(37,"Caso a lista apresente menos de 5 itens, considere utilizar outro componente;"),t(),i(38,"li"),e(39,"N\xE3o utilize o multiselect caso o usu\xE1rio possa selecionar apenas uma op\xE7\xE3o. Para esse caso, opte por utilizar po-radio ou po-select;"),t()(),i(40,"h4"),e(41,"Acessibilidade tratada no componente"),t(),i(42,"p"),e(43,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),i(44,"ul")(45,"li"),e(46,"Quando em foco, o multiselect abre o listbox usando as teclas de Espa\xE7o ou Enter do teclado."),t(),i(47,"li"),e(48,"Utilize as teclas Arrow Up [seta para cima] ou Arrow Down [seta para baixo] do teclado para navegar entre os itens do listbox."),t(),i(49,"li"),e(50,"Utilize a tecla Esc do teclado para fechar o listbox."),t(),i(51,"li"),e(52,"Quando um item estiver em foco, utilize as teclas Arrow Right [seta para direita] ou Arrow Left [seta para esquerda] do teclado para navegar entre eles."),t(),i(53,"li"),e(54,"Quando em foco e havendo um item ou mais j\xE1 selecionado, utilize a tecla Arrow Down [seta para baixo] do teclado para abrir o listbox."),t()(),i(55,"h4"),e(56,"Tokens customiz\xE1veis"),t(),i(57,"p"),e(58,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(59,"blockquote")(60,"p"),e(61,"Para maiores informa\xE7\xF5es, acesse o guia "),i(62,"a",6),e(63,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(64,"."),t()(),i(65,"table")(66,"thead")(67,"tr")(68,"th"),e(69,"Propriedade"),t(),i(70,"th"),e(71,"Descri\xE7\xE3o"),t(),i(72,"th"),e(73,"Valor Padr\xE3o"),t()()(),i(74,"tbody")(75,"tr")(76,"td")(77,"strong"),e(78,"Default Values"),t()(),o(79,"td")(80,"td"),t(),i(81,"tr")(82,"td")(83,"code"),e(84,"--font-family"),t()(),i(85,"td"),e(86,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(87,"td")(88,"code"),e(89,"var(--font-family-theme)"),t()()(),i(90,"tr")(91,"td")(92,"code"),e(93,"--font-size"),t()(),i(94,"td"),e(95,"Tamanho da fonte"),t(),i(96,"td")(97,"code"),e(98,"var(--font-size-default)"),t()()(),i(99,"tr")(100,"td")(101,"code"),e(102,"--text-color-placeholder"),t(),e(103," \xA0"),t(),i(104,"td"),e(105,"Cor do texto do placeholder"),t(),i(106,"td")(107,"code"),e(108,"var(--color-action-disabled)"),t()()(),i(109,"tr")(110,"td")(111,"code"),e(112,"--color"),t()(),i(113,"td"),e(114,"Cor principal do multiselect"),t(),i(115,"td")(116,"code"),e(117,"var(--color-neutral-dark-70)"),t()()(),i(118,"tr")(119,"td")(120,"code"),e(121,"--background"),t()(),i(122,"td"),e(123,"Cor de background"),t(),i(124,"td")(125,"code"),e(126,"var(--color-neutral-light-05)"),t()()(),i(127,"tr")(128,"td")(129,"code"),e(130,"--field-container-title-justify"),t()(),i(131,"td"),e(132,"Alinhamento horizontal do t\xEDtulo ("),i(133,"code"),e(134,"justify-content"),t(),e(135,")"),t(),i(136,"td")(137,"code"),e(138,"space-between"),t()()(),i(139,"tr")(140,"td")(141,"code"),e(142,"--field-container-title-flex"),t()(),i(143,"td"),e(144,"Flex do t\xEDtulo ("),i(145,"code"),e(146,"flex"),t(),e(147,")"),t(),i(148,"td")(149,"code"),e(150,"1 auto"),t()()(),i(151,"tr")(152,"td")(153,"strong"),e(154,"Hover"),t()(),o(155,"td")(156,"td"),t(),i(157,"tr")(158,"td")(159,"code"),e(160,"--color-hover"),t()(),i(161,"td"),e(162,"Cor principal no estado hover"),t(),i(163,"td")(164,"code"),e(165,"var(--color-action-hover)"),t()()(),i(166,"tr")(167,"td")(168,"code"),e(169,"--background-hover"),t()(),i(170,"td"),e(171,"Cor de background no estado hover"),t(),i(172,"td")(173,"code"),e(174,"var(--color-brand-01-lighter)"),t()()(),i(175,"tr")(176,"td")(177,"strong"),e(178,"Focused"),t()(),o(179,"td")(180,"td"),t(),i(181,"tr")(182,"td")(183,"code"),e(184,"--color-focused"),t()(),i(185,"td"),e(186,"Cor principal no estado de focus"),t(),i(187,"td")(188,"code"),e(189,"var(--color-action-default)"),t()()(),i(190,"tr")(191,"td")(192,"code"),e(193,"--outline-color-focused"),t(),e(194," \xA0"),t(),i(195,"td"),e(196,"Cor do outline do estado de focus"),t(),i(197,"td")(198,"code"),e(199,"var(--color-action-focus)"),t()()(),i(200,"tr")(201,"td")(202,"strong"),e(203,"Disabled"),t()(),o(204,"td")(205,"td"),t(),i(206,"tr")(207,"td")(208,"code"),e(209,"--color-disabled"),t()(),i(210,"td"),e(211,"Cor principal no estado disabled"),t(),i(212,"td")(213,"code"),e(214,"var(--color-action-disabled)"),t()()(),i(215,"tr")(216,"td")(217,"code"),e(218,"--background-disabled"),t(),e(219," \xA0"),t(),i(220,"td"),e(221,"Cor de background no estado disabled \xA0"),t(),i(222,"td")(223,"code"),e(224,"var(--color-neutral-light-20)"),t()()(),i(225,"tr")(226,"td")(227,"strong"),e(228,"Error"),t()(),o(229,"td")(230,"td"),t(),i(231,"tr")(232,"td")(233,"code"),e(234,"--color-error"),t()(),i(235,"td"),e(236,"Cor principal no estado error"),t(),i(237,"td")(238,"code"),e(239,"var(--color-feedback-negative-base)"),t()()()()()(),i(240,"div",7)(241,"h4",8),e(242,"Seletor"),t(),i(243,"pre",9),e(244,`<po-multiselect
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-height="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-debounce-time="number"
    p-disabled="boolean"
    p-error-limit="boolean"
    p-field-error-message="string"
    p-field-label="string"
    p-field-value="string"
    p-filter-mode="PoMultiselectFilterMode"
    p-filter-service="string | PoMultiselectFilter"
    p-help="string"
    p-hide-search="boolean"
    p-hide-select-all="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-listbox-control-position="'top' | 'bottom'"
    p-literals="PoMultiselectLiterals"
    p-loading="boolean"
    name="string"
    p-optional="boolean"
    p-options="Array<PoMultiselectOption | any>"
    p-placeholder="string"
    p-placeholder-search="string"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-show-required="boolean"
    p-size="string"
    p-sort="boolean" >
</po-multiselect>
`),t()(),i(245,"h4",10),e(246,"Propriedades"),t(),i(247,"table",11)(248,"tr",12)(249,"th",13),e(250,"Nome"),t(),i(251,"th",13),e(252,"Tipo"),t(),i(253,"th",13),e(254,"Padr\xE3o"),t(),i(255,"th",13),e(256,"Descri\xE7\xE3o"),t()(),i(257,"tr",14)(258,"td",15)(259,"div",16)(260,"span",17),e(261," (p-additional-help)"),o(262,"br"),t()(),i(263,"div",18),e(264,"Deprecated"),t()(),i(265,"td",19)(266,"code",20),e(267,"EventEmitter"),t()(),i(268,"td",21),e(269,"-"),t(),i(270,"td",22)(271,"em")(272,"strong"),e(273,"(opcional)"),t()(),i(274,"p"),e(275,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(276,"blockquote")(277,"p"),e(278,"Essa propriedade est\xE1 "),i(279,"strong"),e(280,"depreciada"),t(),e(281," e ser\xE1 removida na vers\xE3o "),i(282,"code"),e(283,"23.x.x"),t(),e(284,". Recomendamos utilizar a propriedade "),i(285,"code"),e(286,"p-helper"),t(),e(287," que oferece mais recursos e flexibilidade."),t()()()(),i(288,"tr",14)(289,"td",15)(290,"div",23)(291,"span",24),e(292," p-additional-help-tooltip"),o(293,"br"),t()(),i(294,"div",18),e(295,"Deprecated"),t()(),i(296,"td",19)(297,"code",25),e(298,"string"),t()(),i(299,"td",21),e(300,"-"),t(),i(301,"td",22)(302,"em")(303,"strong"),e(304,"(opcional)"),t()(),i(305,"p"),e(306,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(307,"code"),e(308,"po-helper"),t(),e(309,`.
`),i(310,"strong"),e(311,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(312,"blockquote")(313,"p"),e(314,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(315,"blockquote")(316,"p"),e(317,"Essa propriedade est\xE1 "),i(318,"strong"),e(319,"depreciada"),t(),e(320," e ser\xE1 removida na vers\xE3o "),i(321,"code"),e(322,"23.x.x"),t(),e(323,". Recomendamos utilizar a propriedade "),i(324,"code"),e(325,"p-helper"),t(),e(326," que oferece mais recursos e flexibilidade."),t()()()(),i(327,"tr",14)(328,"td",15)(329,"div",23)(330,"span",24),e(331," p-append-in-body"),o(332,"br"),t()()(),i(333,"td",19)(334,"code",26),e(335,"boolean"),t()(),i(336,"td",21)(337,"p")(338,"code"),e(339,"false"),t()()(),i(340,"td",22)(341,"em")(342,"strong"),e(343,"(opcional)"),t()(),i(344,"p"),e(345,"Define que o "),i(346,"code"),e(347,"listbox"),t(),e(348," e/ou popover ("),i(349,"code"),e(350,"p-helper"),t(),e(351," e/ou "),i(352,"code"),e(353,"p-error-limit"),t(),e(354,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(355,"blockquote")(356,"p"),e(357,"Quando utilizado com "),i(358,"code"),e(359,"p-helper"),t(),e(360,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(361,"tr",14)(362,"td",15)(363,"div",23)(364,"span",24),e(365," p-auto-focus"),o(366,"br"),t()()(),i(367,"td",19)(368,"code",26),e(369,"boolean"),t()(),i(370,"td",21)(371,"p")(372,"code"),e(373,"false"),t()()(),i(374,"td",22)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,"Aplica foco no elemento ao ser iniciado."),t(),i(380,"blockquote")(381,"p"),e(382,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(383,"tr",14)(384,"td",15)(385,"div",23)(386,"span",24),e(387," p-auto-height"),o(388,"br"),t()()(),i(389,"td",19)(390,"code",26),e(391,"boolean"),t()(),i(392,"td",21)(393,"p")(394,"code"),e(395,"false"),t()()(),i(396,"td",22)(397,"em")(398,"strong"),e(399,"(opcional)"),t()(),i(400,"p"),e(401,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo
com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis.`),t(),i(402,"blockquote")(403,"p"),e(404,"O valor padr\xE3o ser\xE1 "),i(405,"code"),e(406,"true"),t(),e(407," quando houver servi\xE7o ("),i(408,"code"),e(409,"p-filter-service"),t(),e(410,")."),t()()()(),i(411,"tr",14)(412,"td",15)(413,"div",16)(414,"span",17),e(415," (p-blur)"),o(416,"br"),t()()(),i(417,"td",19)(418,"code",20),e(419,"EventEmitter"),t()(),i(420,"td",21),e(421,"-"),t(),i(422,"td",22)(423,"em")(424,"strong"),e(425,"(opcional)"),t()(),i(426,"p"),e(427,"Evento disparado ao sair do campo."),t()()(),i(428,"tr",14)(429,"td",15)(430,"div",16)(431,"span",17),e(432," (p-change)"),o(433,"br"),t()()(),i(434,"td",19)(435,"code",20),e(436,"EventEmitter"),t()(),i(437,"td",21),e(438,"-"),t(),i(439,"td",22)(440,"em")(441,"strong"),e(442,"(opcional)"),t()(),i(443,"p"),e(444,"Pode ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no ngModel."),t()()(),i(445,"tr",14)(446,"td",15)(447,"div",23)(448,"span",24),e(449," p-compact-label"),o(450,"br"),t()()(),i(451,"td",19)(452,"code",26),e(453,"boolean"),t()(),i(454,"td",21)(455,"p")(456,"code"),e(457,"false"),t()()(),i(458,"td",22)(459,"em")(460,"strong"),e(461,"(opcional)"),t()(),i(462,"p"),e(463,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(464,"p"),e(465,"Quando habilitado ("),i(466,"code"),e(467,"true"),t(),e(468,"), o modo compacto afeta o conjunto composto por:"),t(),i(469,"ul")(470,"li")(471,"code"),e(472,"po-label"),t()(),i(473,"li")(474,"code"),e(475,"p-requirement (showRequired)"),t()(),i(476,"li")(477,"code"),e(478,"po-helper"),t()()(),i(479,"p"),e(480,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(481,"p"),e(482,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(483,"ul")(484,"li")(485,"code"),e(486,"--field-container-title-justify"),t()(),i(487,"li")(488,"code"),e(489,"--field-container-title-flex"),t()()(),i(490,"p"),e(491,"Exemplo:"),t(),i(492,"pre")(493,"code"),e(494,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(495,"p"),e(496,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(497,"tr",14)(498,"td",15)(499,"div",23)(500,"span",24),e(501," p-debounce-time"),o(502,"br"),t()()(),i(503,"td",19)(504,"code",27),e(505,"number"),t()(),i(506,"td",21)(507,"p")(508,"code"),e(509,"400"),t()()(),i(510,"td",22)(511,"em")(512,"strong"),e(513,"(opcional)"),t()(),i(514,"p"),e(515,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla."),t(),i(516,"blockquote")(517,"p"),e(518,"Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(519,"code"),e(520,"p-filter-service"),t(),e(521,") e somente ser\xE1 aceito valor maior do que "),i(522,"em"),e(523,"zero"),t(),e(524,"."),t()()()(),i(525,"tr",14)(526,"td",15)(527,"div",23)(528,"span",24),e(529," p-disabled"),o(530,"br"),t()()(),i(531,"td",19)(532,"code",26),e(533,"boolean"),t()(),i(534,"td",21)(535,"p")(536,"code"),e(537,"false"),t()()(),i(538,"td",22)(539,"em")(540,"strong"),e(541,"(opcional)"),t()(),i(542,"p"),e(543,"Indica que o campo ser\xE1 desabilitado."),t()()(),i(544,"tr",14)(545,"td",15)(546,"div",23)(547,"span",24),e(548," p-error-limit"),o(549,"br"),t()()(),i(550,"td",19)(551,"code",26),e(552,"boolean"),t()(),i(553,"td",21)(554,"p")(555,"code"),e(556,"false"),t()()(),i(557,"td",22)(558,"em")(559,"strong"),e(560,"(opcional)"),t()(),i(561,"p"),e(562,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(563,"blockquote")(564,"p"),e(565,"Caso essa propriedade seja definida como "),i(566,"code"),e(567,"true"),t(),e(568,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(569,"tr",14)(570,"td",15)(571,"div",23)(572,"span",24),e(573," p-field-error-message"),o(574,"br"),t()()(),i(575,"td",19)(576,"code",25),e(577,"string"),t()(),i(578,"td",21),e(579,"-"),t(),i(580,"td",22)(581,"em")(582,"strong"),e(583,"(opcional)"),t()(),i(584,"p"),e(585,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(586,"blockquote")(587,"p"),e(588,"Necess\xE1rio que a propriedade "),i(589,"code"),e(590,"p-required"),t(),e(591," esteja habilitada."),t()()()(),i(592,"tr",14)(593,"td",15)(594,"div",23)(595,"span",24),e(596," p-field-label"),o(597,"br"),t()()(),i(598,"td",19)(599,"code",25),e(600,"string"),t()(),i(601,"td",21)(602,"p")(603,"code"),e(604,"label"),t()()(),i(605,"td",22)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),i(609,"p"),e(610,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),i(611,"code"),e(612,"p-options"),t(),e(613,"), esta propriedade ser\xE1 respons\xE1vel pelo texto de apresenta\xE7\xE3o de cada item da lista."),t(),i(614,"p"),e(615,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),i(616,"code"),e(617,"PoMultiSelectOption"),t(),e(618,"."),t()()(),i(619,"tr",14)(620,"td",15)(621,"div",23)(622,"span",24),e(623," p-field-value"),o(624,"br"),t()()(),i(625,"td",19)(626,"code",25),e(627,"string"),t()(),i(628,"td",21)(629,"p")(630,"code"),e(631,"value"),t()()(),i(632,"td",22)(633,"em")(634,"strong"),e(635,"(opcional)"),t()(),i(636,"p"),e(637,`Deve ser informado o nome da propriedade do objeto que ser\xE1 utilizado para a convers\xE3o dos itens apresentados na lista do componente
(`),i(638,"code"),e(639,"p-options"),t(),e(640,"), esta propriedade ser\xE1 respons\xE1vel pelo valor de cada item da lista."),t(),i(641,"p"),e(642,`Necess\xE1rio quando informar o servi\xE7o como URL e o mesmo n\xE3o estiver retornando uma lista de objetos no padr\xE3o da interface
`),i(643,"code"),e(644,"PoMultiSelectOption"),t(),e(645,"."),t()()(),i(646,"tr",14)(647,"td",15)(648,"div",23)(649,"span",24),e(650," p-filter-mode"),o(651,"br"),t()()(),i(652,"td",19)(653,"code",28),e(654,"PoMultiselectFilterMode"),t()(),i(655,"td",21)(656,"p")(657,"code"),e(658,"startsWith"),t()()(),i(659,"td",22)(660,"em")(661,"strong"),e(662,"(opcional)"),t()(),i(663,"p"),e(664,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoMultiselectFilterMode`),t()()(),i(665,"tr",14)(666,"td",15)(667,"div",23)(668,"span",24),e(669," p-filter-service"),o(670,"br"),t()()(),i(671,"td",19)(672,"code",25),e(673,"string "),t(),i(674,"code",29),e(675," PoMultiselectFilter"),t()(),i(676,"td",21),e(677,"-"),t(),i(678,"td",22)(679,"em")(680,"strong"),e(681,"(opcional)"),t()(),i(682,"p"),e(683,"Nesta propriedade pode ser informada a URL do servi\xE7o em que ser\xE1 realizado o filtro para carregamento da lista de itens no componente."),t(),i(684,"p"),e(685,"Tamb\xE9m existe a possibilidade de informar um servi\xE7o implementando a interface "),i(686,"code"),e(687,"PoMultiselectFilter"),t(),e(688,"."),t(),i(689,"p"),e(690,"Caso utilizado uma URL, o servi\xE7o deve ser retornado no padr\xE3o "),i(691,"a",30),e(692,"API PO UI"),t(),e(693," e utilizar as propriedades "),i(694,"code"),e(695,"p-field-label"),t(),e(696," e "),i(697,"code"),e(698,"p-field-value"),t(),e(699," para a constru\xE7\xE3o da lista de itens."),t(),i(700,"p"),e(701,"Quando utilizada uma URL de servi\xE7o, ent\xE3o ser\xE1 concatenada nesta URL o valor que deseja-se filtrar da seguinte forma:"),t(),i(702,"pre")(703,"code"),e(704,`// caso filtrar por "Peter"
https://localhost:8080/api/heroes?filter=Peter
`),t()(),i(705,"p"),e(706,"E caso iniciar o campo com valor, os itens ser\xE3o buscados da seguinte forma:"),t(),i(707,"pre")(708,"code"),e(709,`// caso o valor do campo for [1234, 5678];
 https://localhost:8080/api/heroes?value=1234,5678

//O *value* \xE9 referente ao \`fieldValue\`.
`),t()()()(),i(710,"tr",14)(711,"td",15)(712,"div",23)(713,"span",24),e(714," p-help"),o(715,"br"),t()()(),i(716,"td",19)(717,"code",25),e(718,"string"),t()(),i(719,"td",21),e(720,"-"),t(),i(721,"td",22)(722,"em")(723,"strong"),e(724,"(opcional)"),t()(),i(725,"p"),e(726,"Texto de apoio para o campo."),t()()(),i(727,"tr",14)(728,"td",15)(729,"div",23)(730,"span",24),e(731," p-hide-search"),o(732,"br"),t()()(),i(733,"td",19)(734,"code",26),e(735,"boolean"),t()(),i(736,"td",21)(737,"p")(738,"code"),e(739,"false"),t()()(),i(740,"td",22)(741,"em")(742,"strong"),e(743,"(opcional)"),t()(),i(744,"p"),e(745,"Esconde o campo de pesquisa existente dentro do dropdown do po-multiselect."),t()()(),i(746,"tr",14)(747,"td",15)(748,"div",23)(749,"span",24),e(750," p-hide-select-all"),o(751,"br"),t()()(),i(752,"td",19)(753,"code",26),e(754,"boolean"),t()(),i(755,"td",21)(756,"p")(757,"code"),e(758,"false"),t()()(),i(759,"td",22)(760,"em")(761,"strong"),e(762,"(opcional)"),t()(),i(763,"p"),e(764,'Indica se o campo "Selecionar todos" ser\xE1 escondido.'),t()()(),i(765,"tr",14)(766,"td",15)(767,"div",16)(768,"span",17),e(769," (p-keydown)"),o(770,"br"),t()()(),i(771,"td",19)(772,"code",20),e(773,"EventEmitter"),t()(),i(774,"td",21),e(775,"-"),t(),i(776,"td",22)(777,"em")(778,"strong"),e(779,"(opcional)"),t()(),i(780,"p"),e(781,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(782,"code"),e(783,"KeyboardEvent"),t(),e(784," com informa\xE7\xF5es sobre a tecla."),t()()(),i(785,"tr",14)(786,"td",15)(787,"div",23)(788,"span",24),e(789," p-label"),o(790,"br"),t()()(),i(791,"td",19)(792,"code",25),e(793,"string"),t()(),i(794,"td",21),e(795,"-"),t(),i(796,"td",22)(797,"em")(798,"strong"),e(799,"(opcional)"),t()(),i(800,"p"),e(801,"Label no componente."),t()()(),i(802,"tr",14)(803,"td",15)(804,"div",23)(805,"span",24),e(806," p-label-text-wrap"),o(807,"br"),t()()(),i(808,"td",19)(809,"code",26),e(810,"boolean"),t()(),i(811,"td",21)(812,"p")(813,"code"),e(814,"false"),t()()(),i(815,"td",22)(816,"em")(817,"strong"),e(818,"(opcional)"),t()(),i(819,"p"),e(820,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(821,"code"),e(822,"p-label"),t(),e(823,". Quando "),i(824,"code"),e(825,"p-label-text-wrap"),t(),e(826,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(827,"tr",14)(828,"td",15)(829,"div",23)(830,"span",24),e(831," p-listbox-control-position"),o(832,"br"),t()()(),i(833,"td",19)(834,"code",31),e(835,"'top' "),t(),i(836,"code",32),e(837," 'bottom'"),t()(),i(838,"td",21)(839,"p")(840,"code"),e(841,"bottom"),t()()(),i(842,"td",22)(843,"em")(844,"strong"),e(845,"(opcional)"),t()(),i(846,"p"),e(847,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(848,"code"),e(849,"listbox"),t(),e(850," em rela\xE7\xE3o ao campo ("),i(851,"code"),e(852,"top"),t(),e(853," ou "),i(854,"code"),e(855,"bottom"),t(),e(856,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t()()(),i(857,"tr",14)(858,"td",15)(859,"div",23)(860,"span",24),e(861," p-literals"),o(862,"br"),t()()(),i(863,"td",19)(864,"code",33),e(865,"PoMultiselectLiterals"),t()(),i(866,"td",21),e(867,"-"),t(),i(868,"td",22)(869,"em")(870,"strong"),e(871,"(opcional)"),t()(),i(872,"p"),e(873,"Objeto com as literais usadas no "),i(874,"code"),e(875,"po-multiselect"),t(),e(876,"."),t(),i(877,"p"),e(878,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(879,"pre")(880,"code"),e(881,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Nenhum dado encontrado',
  placeholderSearch: 'Buscar',
  selectAll: 'Select all',
  selectItem: 'Select items'
};
`),t()(),i(882,"p"),e(883,"Ou passando apenas as literais que deseja customizar:"),t(),i(884,"pre")(885,"code"),e(886,`const customLiterals: PoMultiselectLiterals = {
  noData: 'Sem dados'
};
`),t()(),i(887,"p"),e(888,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),i(889,"pre")(890,"code"),e(891,`<po-multiselect
  [p-literals]="customLiterals">
</po-po-multiselect>
`),t()(),i(892,"blockquote")(893,"p"),e(894,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(895,"a",34)(896,"code"),e(897,"PoI18nService"),t()(),e(898," ou do browser."),t()()()(),i(899,"tr",14)(900,"td",15)(901,"div",23)(902,"span",24),e(903," p-loading"),o(904,"br"),t()()(),i(905,"td",19)(906,"code",26),e(907,"boolean"),t()(),i(908,"td",21)(909,"p")(910,"code"),e(911,"false"),t()()(),i(912,"td",22)(913,"em")(914,"strong"),e(915,"(opcional)"),t()(),i(916,"p"),e(917,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(918,"tr",14)(919,"td",15)(920,"div",23)(921,"span",24),e(922," name"),o(923,"br"),t()()(),i(924,"td",19)(925,"code",25),e(926,"string"),t()(),i(927,"td",21),e(928,"-"),t(),i(929,"td",22)(930,"p"),e(931,"Nome do componente."),t()()(),i(932,"tr",14)(933,"td",15)(934,"div",23)(935,"span",24),e(936," p-optional"),o(937,"br"),t()()(),i(938,"td",19)(939,"code",26),e(940,"boolean"),t()(),i(941,"td",21)(942,"p")(943,"code"),e(944,"false"),t()()(),i(945,"td",22)(946,"em")(947,"strong"),e(948,"(opcional)"),t()(),i(949,"p"),e(950,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(951,"blockquote")(952,"p"),e(953,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(954,"ul")(955,"li"),e(956,"O campo conter "),i(957,"code"),e(958,"p-required"),t(),e(959,";"),t(),i(960,"li"),e(961,"N\xE3o possuir "),i(962,"code"),e(963,"p-help"),t(),e(964," e/ou "),i(965,"code"),e(966,"p-label"),t(),e(967,"."),t()()()(),i(968,"tr",14)(969,"td",15)(970,"div",23)(971,"span",24),e(972," p-options"),o(973,"br"),t()()(),i(974,"td",19)(975,"code",35),e(976,"Array<PoMultiselectOption "),t(),i(977,"code",36),e(978," any>"),t()(),i(979,"td",21),e(980,"-"),t(),i(981,"td",22)(982,"p"),e(983,`Nesta propriedade deve ser definida uma lista de objetos que ser\xE1 exibida no multiselect.
Esta lista deve conter os valores e os labels que ser\xE3o apresentados na tela.`),t(),i(984,"blockquote")(985,"p"),e(986,`Essa propriedade \xE9 imut\xE1vel, ou seja, sempre que quiser atualizar a lista de op\xE7\xF5es dispon\xEDveis
atualize a refer\xEAncia do objeto:`),t()(),i(987,"pre")(988,"code"),e(989,`// atualiza a refer\xEAncia do objeto garantindo a atualiza\xE7\xE3o do template
this.options = [...this.options, { value: 'x', label: 'Nova op\xE7\xE3o' }];

// evite, pois n\xE3o atualiza a refer\xEAncia do objeto podendo gerar atrasos na atualiza\xE7\xE3o do template
this.options.push({ value: 'x', label: 'Nova op\xE7\xE3o' });
`),t()(),i(990,"blockquote")(991,"p"),e(992,"A lista pode ser definida utilizando um array com o valor representando "),i(993,"code"),e(994,"value"),t(),e(995," e "),i(996,"code"),e(997,"label"),t(),e(998," das seguintes formas:"),t()(),i(999,"pre")(1e3,"code"),e(1001,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{value: 1, label: 'One'}, {value: 2, label: 'two'}]"> </po-multiselect>
`),t()(),i(1002,"pre")(1003,"code"),e(1004,`<po-multiselect name="multiselect" p-label="PO Multiselect" [p-options]="[{name: 'Roger', age: 28}, {name: 'Anne', age: 35}]" p-field-label="name" p-field-value="age"> </po-multiselect>
`),t()(),i(1005,"ul")(1006,"li"),e(1007,"Aconselha-se utilizar valores distintos no "),i(1008,"code"),e(1009,"label"),t(),e(1010," e "),i(1011,"code"),e(1012,"value"),t(),e(1013," dos itens."),t()()()(),i(1014,"tr",14)(1015,"td",15)(1016,"div",23)(1017,"span",24),e(1018," p-placeholder"),o(1019,"br"),t()()(),i(1020,"td",19)(1021,"code",25),e(1022,"string"),t()(),i(1023,"td",21),e(1024,"-"),t(),i(1025,"td",22)(1026,"em")(1027,"strong"),e(1028,"(opcional)"),t()(),i(1029,"p"),e(1030,"Mensagem apresentada enquanto o campo estiver vazio."),t()()(),i(1031,"tr",14)(1032,"td",15)(1033,"div",23)(1034,"span",24),e(1035," p-placeholder-search"),o(1036,"br"),t()()(),i(1037,"td",19)(1038,"code",25),e(1039,"string"),t()(),i(1040,"td",21)(1041,"p")(1042,"code"),e(1043,"Buscar"),t()()(),i(1044,"td",22)(1045,"em")(1046,"strong"),e(1047,"(opcional)"),t()(),i(1048,"p"),e(1049,"Placeholder do campo de pesquisa."),t(),i(1050,"blockquote")(1051,"p"),e(1052,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(1053,"tr",14)(1054,"td",15)(1055,"div",23)(1056,"span",24),e(1057," p-helper"),o(1058,"br"),t()()(),i(1059,"td",19)(1060,"code",37),e(1061,"PoHelperOptions "),t(),i(1062,"code",25),e(1063," string"),t()(),i(1064,"td",21),e(1065,"-"),t(),i(1066,"td",22)(1067,"em")(1068,"strong"),e(1069,"(opcional)"),t()(),i(1070,"p"),e(1071,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),i(1072,"code"),e(1073,"p-label"),t(),e(1074," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),i(1075,"code"),e(1076,"p-label"),t(),e(1077,"."),t(),i(1078,"blockquote")(1079,"p"),e(1080,"Para mais informa\xE7\xF5es acesse: "),i(1081,"a",38),e(1082,"https://po-ui.io/documentation/po-helper"),t(),e(1083,"."),t()(),i(1084,"blockquote")(1085,"p"),e(1086,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(1087,"code"),e(1088,"p-additional-help-tooltip"),t(),e(1089," e "),i(1090,"code"),e(1091,"p-additional-help"),t(),e(1092,") ser\xE1 ignorado."),t()()()(),i(1093,"tr",14)(1094,"td",15)(1095,"div",23)(1096,"span",24),e(1097," p-required"),o(1098,"br"),t()()(),i(1099,"td",19)(1100,"code",26),e(1101,"boolean"),t()(),i(1102,"td",21)(1103,"p")(1104,"code"),e(1105,"false"),t()()(),i(1106,"td",22)(1107,"em")(1108,"strong"),e(1109,"(opcional)"),t()(),i(1110,"p"),e(1111,"Define que o campo ser\xE1 obrigat\xF3rio."),t(),i(1112,"blockquote")(1113,"p"),e(1114,"Esta propriedade \xE9 desconsiderada quando o input est\xE1 desabilitado "),i(1115,"code"),e(1116,"(p-disabled)"),t(),e(1117,"."),t()()()(),i(1118,"tr",14)(1119,"td",15)(1120,"div",23)(1121,"span",24),e(1122," p-show-required"),o(1123,"br"),t()()(),i(1124,"td",19)(1125,"code",26),e(1126,"boolean"),t()(),i(1127,"td",21),e(1128,"-"),t(),i(1129,"td",22)(1130,"p"),e(1131,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(1132,"blockquote")(1133,"p"),e(1134,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(1135,"ul")(1136,"li"),e(1137,"N\xE3o possuir "),i(1138,"code"),e(1139,"p-help"),t(),e(1140," e/ou "),i(1141,"code"),e(1142,"p-label"),t(),e(1143,"."),t()()()(),i(1144,"tr",14)(1145,"td",15)(1146,"div",23)(1147,"span",24),e(1148," p-size"),o(1149,"br"),t()()(),i(1150,"td",19)(1151,"code",25),e(1152,"string"),t()(),i(1153,"td",21)(1154,"p")(1155,"code"),e(1156,"medium"),t()()(),i(1157,"td",22)(1158,"em")(1159,"strong"),e(1160,"(opcional)"),t()(),i(1161,"p"),e(1162,"Define o tamanho do componente:"),t(),i(1163,"ul")(1164,"li")(1165,"code"),e(1166,"small"),t(),e(1167,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(1168,"li")(1169,"code"),e(1170,"medium"),t(),e(1171,": altura do input como 44px."),t()(),i(1172,"blockquote")(1173,"p"),e(1174,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(1175,"code"),e(1176,"medium"),t(),e(1177,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(1178,"a",39),e(1179,"po-theme"),t(),e(1180,"."),t()()()(),i(1181,"tr",14)(1182,"td",15)(1183,"div",23)(1184,"span",24),e(1185," p-sort"),o(1186,"br"),t()()(),i(1187,"td",19)(1188,"code",26),e(1189,"boolean"),t()(),i(1190,"td",21)(1191,"p")(1192,"code"),e(1193,"false"),t()()(),i(1194,"td",22)(1195,"em")(1196,"strong"),e(1197,"(opcional)"),t()(),i(1198,"p"),e(1199,`Indica que a lista definida na propriedade p-options ser\xE1 ordenada pelo label antes de ser apresentada no
dropdown.`),t()()()(),i(1200,"h3",10),e(1201,"M\xE9todos"),t(),i(1202,"table",40)(1203,"tr",14)(1204,"th",41)(1205,"div",23)(1206,"h4")(1207,"span",24),e(1208," focus "),t()()()()(),i(1209,"tr",22)(1210,"td",22)(1211,"p"),e(1212,"Fun\xE7\xE3o que atribui foco ao componente."),t(),i(1213,"p"),e(1214,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),i(1215,"pre")(1216,"code"),e(1217,`import { PoMultiselectComponent } from '@po-ui/ng-components';

...

@ViewChild(PoMultiselectComponent, { static: true }) multiselect: PoMultiselectComponent;

focusMultiselect() {
  this.multiselect.focus();
}
`),t()()()()(),o(1218,"br"),i(1219,"table",40)(1220,"tr",14)(1221,"th",41)(1222,"div",23)(1223,"h4")(1224,"span",24),e(1225," showAdditionalHelp "),t()()()()(),i(1226,"tr",22)(1227,"td",22)(1228,"p"),e(1229,"M\xE9todo que exibe "),i(1230,"code"),e(1231,"p-helper"),t(),e(1232," ou executa a a\xE7\xE3o definida em "),i(1233,"code"),e(1234,"p-helper{eventOnClick}"),t(),e(1235," ou em "),i(1236,"code"),e(1237,"p-additionalHelp"),t(),e(1238,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1239,"code"),e(1240,"p-keydown"),t(),e(1241,"."),t(),i(1242,"blockquote")(1243,"p"),e(1244,"Exibe ou oculta o conte\xFAdo do componente "),i(1245,"code"),e(1246,"po-helper"),t(),e(1247," quando o componente estiver com foco."),t()(),i(1248,"pre")(1249,"code"),e(1250,`// Exemplo com p-label e p-helper
<po-multiselect
 #multiselect
 ...
 p-label="Label do multiselect"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, multiselect)"
></po-multiselect>
`),t()(),i(1251,"pre")(1252,"code"),e(1253,`...
onKeyDown(event: KeyboardEvent, inp: PoMultiselectComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1254,"br"),i(1255,"h3"),e(1256,"Interfaces"),t(),i(1257,"h4",42)(1258,"code",5),e(1259,"PoMultiselectFilter"),t()(),i(1260,"div",2)(1261,"p"),e(1262,"Interface para os servi\xE7os que ser\xE3o utilizados no po-multiselect."),t()(),i(1263,"h4",10),e(1264,"M\xE9todos"),t(),i(1265,"table",40)(1266,"tr",14)(1267,"th",41)(1268,"div",23)(1269,"h4")(1270,"span",24),e(1271," getFilteredData "),t()()()()(),i(1272,"tr",22)(1273,"td",22)(1274,"p"),e(1275,`M\xE9todo que ser\xE1 chamado ao realizar uma busca no componente, deve retornar um Observable que cont\xE9m uma cole\xE7\xE3o de objetos que seguem
a interface `),i(1276,"code"),e(1277,"PoMultiselectOption"),t(),e(1278,", ser\xE1 informado por parametro o campo e o valor a ser pesquisado."),t()()()(),i(1279,"h5")(1280,"b"),e(1281,"Par\xE2metros"),t()(),i(1282,"table",11)(1283,"tr",12)(1284,"th",13),e(1285,"Nome"),t(),i(1286,"th",13),e(1287,"Tipo"),t(),i(1288,"th",13),e(1289,"Descri\xE7\xE3o"),t()(),i(1290,"tr",14)(1291,"td",15),e(1292," params"),t(),i(1293,"td",19)(1294,"code",43),e(1295," { property: string, value: string } "),t()(),i(1296,"td",22)(1297,"p"),e(1298,"Objeto contendo a propriedade e o valor respons\xE1vel por realizar o filtro."),t()()()(),o(1299,"br"),i(1300,"table",40)(1301,"tr",14)(1302,"th",41)(1303,"div",23)(1304,"h4")(1305,"span",24),e(1306," getObjectsByValues "),t()()()()(),i(1307,"tr",22)(1308,"td",22)(1309,"p"),e(1310,`M\xE9todo que ser\xE1 chamado ao iniciar o componente com valor, deve retornar um Observable que cont\xE9m apenas os objetos filtrados que
seguem a interface `),i(1311,"code"),e(1312,"PoMultiselectOption"),t(),e(1313,", ser\xE1 informado por par\xE2metro valor a ser pesquisado."),t()()()(),i(1314,"h5")(1315,"b"),e(1316,"Par\xE2metros"),t()(),i(1317,"table",11)(1318,"tr",12)(1319,"th",13),e(1320,"Nome"),t(),i(1321,"th",13),e(1322,"Tipo"),t(),i(1323,"th",13),e(1324,"Descri\xE7\xE3o"),t()(),i(1325,"tr",14)(1326,"td",15),e(1327," values"),t(),i(1328,"td",19)(1329,"code",44),e(1330," Array<string "),t(),i(1331,"code",45),e(1332," number> "),t()(),i(1333,"td",22)(1334,"p"),e(1335,"Array com os valores a serem buscados."),t()()()(),o(1336,"br"),i(1337,"h4",42)(1338,"code",5),e(1339,"PoMultiselectLiterals"),t()(),i(1340,"div",2)(1341,"p"),e(1342,"Interface para defini\xE7\xE3o das literais usadas no "),i(1343,"code"),e(1344,"po-multiselect"),t(),e(1345,"."),t()(),i(1346,"h4",10),e(1347,"Propriedades"),t(),i(1348,"table",11)(1349,"tr",12)(1350,"th",13),e(1351,"Nome"),t(),i(1352,"th",13),e(1353,"Tipo"),t(),i(1354,"th",13),e(1355,"Descri\xE7\xE3o"),t()(),i(1356,"tr",14)(1357,"td",15)(1358,"div",23)(1359,"span",24),e(1360," noData"),o(1361,"br"),t()()(),i(1362,"td",19)(1363,"code",25),e(1364,"string"),t()(),i(1365,"td",22)(1366,"em")(1367,"strong"),e(1368,"(opcional)"),t()(),i(1369,"p"),e(1370,"Texto exibido quando n\xE3o houver dados encontrados na busca."),t()()(),i(1371,"tr",14)(1372,"td",15)(1373,"div",23)(1374,"span",24),e(1375," placeholderSearch"),o(1376,"br"),t()()(),i(1377,"td",19)(1378,"code",25),e(1379,"string"),t()(),i(1380,"td",22)(1381,"em")(1382,"strong"),e(1383,"(opcional)"),t()(),i(1384,"p"),e(1385,"Texto do "),i(1386,"em"),e(1387,"placeholder"),t(),e(1388," do campo de busca."),t()()(),i(1389,"tr",14)(1390,"td",15)(1391,"div",23)(1392,"span",24),e(1393," selectAll"),o(1394,"br"),t()()(),i(1395,"td",19)(1396,"code",25),e(1397,"string"),t()(),i(1398,"td",22)(1399,"em")(1400,"strong"),e(1401,"(opcional)"),t()(),i(1402,"p"),e(1403,"Texto exibido no bot\xE3o de selecionar todos."),t()()(),i(1404,"tr",14)(1405,"td",15)(1406,"div",23)(1407,"span",24),e(1408," selectItem"),o(1409,"br"),t()()(),i(1410,"td",19)(1411,"code",25),e(1412,"string"),t()(),i(1413,"td",22)(1414,"em")(1415,"strong"),e(1416,"(opcional)"),t()(),i(1417,"p"),e(1418,"Texto exibido na propriedade placeholder."),t()()()(),i(1419,"h4",42)(1420,"code",5),e(1421,"PoMultiselectOption"),t()(),i(1422,"div",2)(1423,"p"),e(1424,"Interface dos itens da cole\xE7\xE3o que ser\xE1 exibida no dropdown do po-multiselect."),t()(),i(1425,"h4",10),e(1426,"Propriedades"),t(),i(1427,"table",11)(1428,"tr",12)(1429,"th",13),e(1430,"Nome"),t(),i(1431,"th",13),e(1432,"Tipo"),t(),i(1433,"th",13),e(1434,"Descri\xE7\xE3o"),t()(),i(1435,"tr",14)(1436,"td",15)(1437,"div",23)(1438,"span",24),e(1439," label"),o(1440,"br"),t()()(),i(1441,"td",19)(1442,"code",25),e(1443,"string"),t()(),i(1444,"td",22)(1445,"p"),e(1446,"Label exibido nos itens da lista."),t()()(),i(1447,"tr",14)(1448,"td",15)(1449,"div",23)(1450,"span",24),e(1451," value"),o(1452,"br"),t()()(),i(1453,"td",19)(1454,"code",25),e(1455,"string "),t(),i(1456,"code",27),e(1457," number"),t()(),i(1458,"td",22)(1459,"p"),e(1460,"Valor do objeto que ser\xE1 atribu\xEDdo ao model."),t()()()(),i(1461,"h3"),e(1462,"Enums"),t(),i(1463,"h4",4)(1464,"code",5),e(1465,"PoMultiselectFilterMode"),t()(),i(1466,"div",2)(1467,"p"),e(1468,"Define o tipo de busca usado no po-multiselect."),t()(),i(1469,"h4",10),e(1470,"Propriedades"),t(),i(1471,"table",11)(1472,"tr",12)(1473,"th",13),e(1474,"Nome"),t(),i(1475,"th",13),e(1476,"Descri\xE7\xE3o"),t()(),i(1477,"tr",14)(1478,"td",15)(1479,"div",23)(1480,"span",24),e(1481," startsWith"),o(1482,"br"),t()()(),i(1483,"td",22)(1484,"p"),e(1485,"Verifica se o texto "),i(1486,"em"),e(1487,"inicia"),t(),e(1488," com o valor pesquisado."),t()()(),i(1489,"tr",14)(1490,"td",15)(1491,"div",23)(1492,"span",24),e(1493," contains"),o(1494,"br"),t()()(),i(1495,"td",22)(1496,"p"),e(1497,"Verifica se o texto "),i(1498,"em"),e(1499,"cont\xE9m"),t(),e(1500," o valor pesquisado."),t()()(),i(1501,"tr",14)(1502,"td",15)(1503,"div",23)(1504,"span",24),e(1505," endsWith"),o(1506,"br"),t()()(),i(1507,"td",22)(1508,"p"),e(1509,"Verifica se o texto "),i(1510,"em"),e(1511,"finaliza"),t(),e(1512," com o valor pesquisado."),t()()()()())},dependencies:[C],encapsulation:2})}return l})();var Ie=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,a){this.route=s,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let a=s.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||l)(le(he),le(Se))};static \u0275cmp=b({type:l,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Multiselect",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,n){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-multiselect-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-multiselect-basic-view")(6,"sample-po-multiselect-labs-view")(7,"sample-po-multiselect-vacation-view")(8,"sample-po-multiselect-vacation-reactive-form-view")(9,"sample-po-multiselect-template-view")(10,"sample-po-multiselect-heroes-view")(11,"sample-po-multiselect-any-array-view"),t()()()),a&2&&(m("p-actions",n.actions),p(2),m("p-active",n.activeTab==="doc"),p(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Me,y,x,we,Ve,Oe,ke,qe,Be,ze,Ne],encapsulation:2})}return l})();var Et=[{path:"",component:Ie}],He=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=Y({type:l});static \u0275inj=K({imports:[ae.forChild(Et),ae]})}return l})();var bi=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=Y({type:l});static \u0275inj=K({imports:[Pe,He]})}return l})();export{bi as DocPoMultiselectModule};
