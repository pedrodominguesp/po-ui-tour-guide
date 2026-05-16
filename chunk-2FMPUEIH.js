import{o as C,p as me}from"./chunk-AT3MKFJ3.js";import{Fa as ae,Gb as P,Hb as y,Ia as oe,Ja as le,Lb as de,S as ne,U as ie,Xa as re,_ as H,a as N,tb as v,w as te,za as z}from"./chunk-GCMU57WK.js";import{Ea as c,Fa as n,Ga as t,H as X,Ha as o,I as L,L as A,Mb as M,Mc as q,Nc as O,O as u,Oa as B,Oc as F,P as b,Pa as h,Pc as V,Qc as W,Va as Y,Wa as R,Xa as G,_a as I,bb as w,cb as e,cd as $,eb as D,ed as ee,gb as g,gd as U,ha as d,hb as E,ib as S,ma as j,oa as f,pa as T,pb as Z,rb as _}from"./chunk-XD3NZLB4.js";import{a as K}from"./chunk-GAL4ENT6.js";var pe=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Default"]],template:function(r,i){r&1&&o(0,"po-page-default",0)},dependencies:[v],encapsulation:2})}return l})();var ve=l=>({"docs-sample-code-tabs":l}),ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default Basic"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-basic/sample-po-page-default-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="PO Page Default"> </po-page-default>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-basic/sample-po-page-default-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-default-basic',
  templateUrl: './sample-po-page-default-basic.component.html',
  standalone: false
})
export class SamplePoPageDefaultBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-default-basic"),t(),o(23,"hr")),r&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),D(" ",i.sampleCodeButtonLabel),d(),c("ngClass",_(4,ve,i.hideSampleCodeTabs)))},dependencies:[M,C,P,y,pe],encapsulation:2})}return l})();var ue=(()=>{class l{poNotification=A(z);action={label:""};actions=[];breadcrumb={items:[]};breadcrumbItem={label:void 0,link:void 0};breadcrumbParams={};componentsSize="medium";customLiterals;literals="";pageActionsLayout="default";pageHeaderType="primary";subtitle="";title="PO Page Default";actionKindOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];pageActionsLayoutOptions=[{label:"default",value:"default"},{label:"dropdown",value:"dropdown"},{label:"mixed",value:"mixed"}];pageHeaderTypeOptions=[{label:"primary",value:"primary"},{label:"secondary",value:"secondary"},{label:"tertiary",value:"tertiary"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(m){let r=K({},m);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let m={[this.breadcrumbParams.property||""]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,m):this.breadcrumb.params=m,this.breadcrumbParams={}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(m){this.customLiterals=void 0}}onBack(){this.poNotification.information("Back button clicked (p-back event)")}restore(){this.action={label:""},this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.pageActionsLayout="default",this.pageHeaderType="primary",this.subtitle="",this.title="PO Page Default",this.restoreActionForm()}restoreActionForm(){this.action={label:"",visible:!0}}showAction(m){this.poNotification.success(`Action clicked: ${m}`)}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-labs"]],standalone:!1,decls:47,vars:36,consts:[["formPage","ngForm"],["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-actions","p-breadcrumb","p-components-size","p-literals","p-page-actions-layout","p-page-header-type","p-title","p-subtitle"],[1,"po-row"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","pageHeaderType","p-label","Page Header Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","pageActionsLayout","p-label","Page Actions Layout",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","kind","p-label","Kind",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=B();n(0,"po-page-default",5),h("p-back",function(){return i.onBack()}),t(),o(1,"po-divider"),n(2,"form",null,0)(4,"div",6)(5,"po-input",7),S("ngModelChange",function(a){return u(p),E(i.title,a)||(i.title=a),b(a)}),t(),n(6,"po-input",8),S("ngModelChange",function(a){return u(p),E(i.subtitle,a)||(i.subtitle=a),b(a)}),t(),n(7,"po-select",9),S("ngModelChange",function(a){return u(p),E(i.pageHeaderType,a)||(i.pageHeaderType=a),b(a)}),t(),n(8,"po-select",10),S("ngModelChange",function(a){return u(p),E(i.pageActionsLayout,a)||(i.pageActionsLayout=a),b(a)}),t(),n(9,"po-input",11),S("ngModelChange",function(a){return u(p),E(i.literals,a)||(i.literals=a),b(a)}),h("p-change",function(){return i.changeLiterals()}),t(),n(10,"po-radio-group",12),S("ngModelChange",function(a){return u(p),E(i.componentsSize,a)||(i.componentsSize=a),b(a)}),t()()(),o(11,"po-divider"),n(12,"form",null,1)(14,"div",6)(15,"po-input",13),S("ngModelChange",function(a){return u(p),E(i.action.label,a)||(i.action.label=a),b(a)}),t(),n(16,"po-input",14),S("ngModelChange",function(a){return u(p),E(i.action.action,a)||(i.action.action=a),b(a)}),t(),n(17,"po-input",15),S("ngModelChange",function(a){return u(p),E(i.action.url,a)||(i.action.url=a),b(a)}),t(),n(18,"po-select",16),S("ngModelChange",function(a){return u(p),E(i.action.type,a)||(i.action.type=a),b(a)}),t(),n(19,"po-select",17),S("ngModelChange",function(a){return u(p),E(i.action.icon,a)||(i.action.icon=a),b(a)}),t(),n(20,"po-select",18),S("ngModelChange",function(a){return u(p),E(i.action.kind,a)||(i.action.kind=a),b(a)}),t(),n(21,"po-checkbox-group",19),S("ngModelChange",function(a){return u(p),E(i.action,a)||(i.action=a),b(a)}),t()(),n(22,"div",6)(23,"po-button",20),h("p-click",function(){return i.addAction(i.action)}),t()()(),o(24,"po-divider"),n(25,"form",null,2)(27,"div",6)(28,"po-input",21),S("ngModelChange",function(a){return u(p),E(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),b(a)}),t()()(),n(29,"form",null,3)(31,"div",6)(32,"po-input",22),S("ngModelChange",function(a){return u(p),E(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),b(a)}),t(),n(33,"po-input",23),S("ngModelChange",function(a){return u(p),E(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),b(a)}),t()(),n(34,"div",6)(35,"po-button",24),h("p-click",function(){return i.addBreadcrumbItem()}),t()()(),o(36,"po-divider"),n(37,"form",null,4)(39,"div",6)(40,"po-input",25),S("ngModelChange",function(a){return u(p),E(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),b(a)}),t(),n(41,"po-input",26),S("ngModelChange",function(a){return u(p),E(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),b(a)}),t()(),n(42,"div",6)(43,"po-button",27),h("p-click",function(){return i.addBreadcrumbParam()}),t()()(),o(44,"po-divider"),n(45,"div",6)(46,"po-button",28),h("p-click",function(){return i.restore()}),t()()}if(r&2){let p=I(13),s=I(30),a=I(38);c("p-actions",i.actions)("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-literals",i.customLiterals)("p-page-actions-layout",i.pageActionsLayout)("p-page-header-type",i.pageHeaderType)("p-title",i.title)("p-subtitle",i.subtitle),d(5),g("ngModel",i.title),d(),g("ngModel",i.subtitle),d(),g("ngModel",i.pageHeaderType),c("p-options",i.pageHeaderTypeOptions),d(),g("ngModel",i.pageActionsLayout),c("p-options",i.pageActionsLayoutOptions),d(),g("ngModel",i.literals),d(),g("ngModel",i.componentsSize),c("p-options",i.componentsSizeOptions),d(5),g("ngModel",i.action.label),d(),g("ngModel",i.action.action),d(),g("ngModel",i.action.url),d(),g("ngModel",i.action.type),c("p-options",i.typeOptions),d(),g("ngModel",i.action.icon),c("p-options",i.iconOptions),d(),g("ngModel",i.action.kind),c("p-options",i.actionKindOptions),d(),g("ngModel",i.action),c("p-options",i.actionOptions),d(2),c("p-disabled",p.form.invalid),d(5),g("ngModel",i.breadcrumb.favorite),d(4),g("ngModel",i.breadcrumbItem.label),d(),g("ngModel",i.breadcrumbItem.link),d(2),c("p-disabled",s.invalid),d(5),g("ngModel",i.breadcrumbParams.property),d(),g("ngModel",i.breadcrumbParams.value),d(2),c("p-disabled",a.invalid)}},dependencies:[W,q,O,V,F,te,N,ne,ie,le,re,v],encapsulation:2})}return l})();var we=l=>({"docs-sample-code-tabs":l}),be=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default Labs"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-labs/sample-po-page-default-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-page-actions-layout]="pageActionsLayout"
  [p-page-header-type]="pageHeaderType"
  [p-title]="title"
  [p-subtitle]="subtitle"
  (p-back)="onBack()"
>
</po-page-default>

<po-divider></po-divider>

<form #formPage="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

    <po-select
      class="po-lg-3 po-md-6"
      name="pageHeaderType"
      [(ngModel)]="pageHeaderType"
      p-label="Page Header Type"
      [p-options]="pageHeaderTypeOptions"
    >
    </po-select>

    <po-select
      class="po-lg-3 po-md-6"
      name="pageActionsLayout"
      [(ngModel)]="pageActionsLayout"
      p-label="Page Actions Layout"
      [p-options]="pageActionsLayoutOptions"
    >
    </po-select>

    <po-input
      class="po-md-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"otherActions": "Mais a\xE7\xF5es"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>
</form>

<po-divider></po-divider>

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
    </po-select>

    <po-select
      class="po-lg-3 po-md-6"
      name="kind"
      [(ngModel)]="action.kind"
      p-label="Kind"
      [p-options]="actionKindOptions"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-12"
      name="action"
      [(ngModel)]="action"
      p-columns="4"
      p-indeterminate
      p-label="Action properties"
      [p-options]="actionOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbFavorite"
      [(ngModel)]="breadcrumb.favorite"
      p-clean
      p-help="https://po-sample-api.onrender.com/v1/favorite"
      p-label="Breadcrumb favorite"
    >
    </po-input>
  </div>
</form>

<form #formBreadcrumbItems="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbItemLabel"
      [(ngModel)]="breadcrumbItem.label"
      p-clean
      p-label="Breadcrumb item label"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbItemLink"
      [(ngModel)]="breadcrumbItem.link"
      p-clean
      p-label="Breadcrumb item link"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb item"
      [p-disabled]="formBreadcrumbItems.invalid"
      (p-click)="addBreadcrumbItem()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<form #formBreadcrumbParams="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="breadcrumbParamsProperty"
      [(ngModel)]="breadcrumbParams.property"
      p-clean
      p-label="Breadcrumb params property"
      p-required
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="breadcrumbParamsValue"
      [(ngModel)]="breadcrumbParams.value"
      p-clean
      p-label="Breadcrumb params value"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add breadcrumb params"
      [p-disabled]="formBreadcrumbParams.invalid"
      (p-click)="addBreadcrumbParam()"
    >
    </po-button>
  </div>
</form>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-labs/sample-po-page-default-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoNotificationService,
  PoPageAction,
  PoPageDefaultLiterals,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-default-labs',
  templateUrl: './sample-po-page-default-labs.component.html',
  standalone: false
})
export class SamplePoPageDefaultLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction = { label: '' };
  actions: Array<PoPageAction> = [];
  breadcrumb: PoBreadcrumb = { items: [] };
  breadcrumbItem: PoBreadcrumbItem = { label: undefined, link: undefined };
  breadcrumbParams: { property?: string; value?: string } = {};
  componentsSize: string = 'medium';
  customLiterals: PoPageDefaultLiterals | undefined;
  literals: string = '';
  pageActionsLayout: string = 'default';
  pageHeaderType: string = 'primary';
  subtitle: string = '';
  title: string = 'PO Page Default';

  public readonly actionKindOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' }
  ];

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly pageActionsLayoutOptions: Array<PoSelectOption> = [
    { label: 'default', value: 'default' },
    { label: 'dropdown', value: 'dropdown' },
    { label: 'mixed', value: 'mixed' }
  ];

  public readonly pageHeaderTypeOptions: Array<PoSelectOption> = [
    { label: 'primary', value: 'primary' },
    { label: 'secondary', value: 'secondary' },
    { label: 'tertiary', value: 'tertiary' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction: PoPageAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property || '']: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onBack() {
    this.poNotification.information('Back button clicked (p-back event)');
  }

  restore() {
    this.action = { label: '' };
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.pageActionsLayout = 'default';
    this.pageHeaderType = 'primary';
    this.subtitle = '';
    this.title = 'PO Page Default';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: '',
      visible: true
    };
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-page-default-labs"),t(),o(23,"hr")),r&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),D(" ",i.sampleCodeButtonLabel),d(),c("ngClass",_(4,we,i.hideSampleCodeTabs)))},dependencies:[M,C,P,y,ue],encapsulation:2})}return l})();var J=(()=>{class l{getColumns(){return[{property:"cities",label:"Cities that most downloaded PO"},{property:"package",label:"Package version"},{property:"downloads",label:"Downloads"}]}getItems(){return[{cities:"S\xE3o Paulo",package:"2.0.0-beta.2",downloads:"2000"},{cities:"Joinville",package:"1.9.1",downloads:"1000"},{cities:"Rio de Janeiro",package:"2.0.0-beta.2",downloads:"250"},{cities:"Santa Catarina",package:"1.9.1",downloads:"100"},{cities:"Curitiba",package:"2.0.0-beta.2",downloads:"1040"},{cities:"Goiania",package:"1.9.1",downloads:"250"},{cities:"Londrina",package:"1.9.1",downloads:"35"},{cities:"Belo Horizonte",package:"1.9.1",downloads:"1100"}]}static \u0275fac=function(r){return new(r||l)};static \u0275prov=X({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})();var _e=["formShare"],ge=(()=>{class l{poNotification=A(z);sampleDashboardService=A(J);formShare;poModal;columns;email=void 0;isSubscribed=!1;items;actions=[{label:"Share",action:this.modalOpen.bind(this),icon:"an an-share"},{label:"GitHub",url:"https://github.com/po-ui/po-angular"},{label:"More info",subItems:[{label:"po-dropdown documentation",url:"https://po-ui.io/documentation/po-dropdown"}]},{label:"Components",url:"/documentation"},{label:"Disable notification",action:this.disableNotification.bind(this),disabled:()=>this.isSubscribed}];breadcrumb={items:[{label:"Home",link:"/"},{label:"Dashboard"}]};cancelAction={action:()=>{this.modalClose()},label:"Cancel"};shareAction={action:()=>{this.share()},label:"Share"};ngOnInit(){this.columns=this.sampleDashboardService.getColumns(),this.items=this.sampleDashboardService.getItems()}modalClose(){this.poModal.close(),this.formShare.reset()}modalOpen(){this.poModal.open()}share(){this.formShare.valid?this.poNotification.success(`Webpage shared successfully to: ${this.email}.`):this.poNotification.error("Email invalid."),this.modalClose()}disableNotification(){this.isSubscribed=!0}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-dashboard"]],viewQuery:function(r,i){if(r&1&&Y(_e,7)(H,7),r&2){let p;R(p=G())&&(i.formShare=p.first),R(p=G())&&(i.poModal=p.first)}},standalone:!1,features:[Z([J])],decls:38,vars:8,consts:[["formShare","ngForm"],["p-title","Dashboard",3,"p-actions","p-breadcrumb"],[1,"po-row"],["p-title","Daily visitors",1,"po-md-6","po-lg-4","po-mb-2"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center","sample-widget-text-subtitle"],["p-title","Most viewed page",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Website status",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","NPM downloads",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Devforum PO questions",1,"po-md-6","po-lg-4","po-mb-2"],["p-title","Angular versions supported",1,"po-md-6","po-lg-4","po-mb-2"],[3,"p-columns","p-items","p-hide-table-search"],["p-title","Share webpage",3,"p-primary-action","p-secondary-action"],["name","email","p-clean","","p-label","Type an e-mail for sharing webpage: http://www.po.com.br","p-required","",1,"po-lg-12",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let p=B();n(0,"po-page-default",1)(1,"div",2)(2,"po-widget",3)(3,"div",4),e(4,"540"),t(),n(5,"div",5),e(6,"www.po.com.br"),t()(),n(7,"po-widget",6)(8,"div",4),e(9,"300 views"),t(),n(10,"div",5),e(11,"https://po-ui.io"),t()(),n(12,"po-widget",7)(13,"div",4),e(14,"Online"),t(),n(15,"div",5),e(16,"28 days"),t()(),n(17,"po-widget",8)(18,"div",4),e(19,"266"),t(),n(20,"div",5),e(21,"@po-ui/ng-components - 1.10.1"),t()(),n(22,"po-widget",9)(23,"div",4),e(24,"800 questions"),t(),n(25,"div",5),e(26,"https://devforum.po.com.br"),t()(),n(27,"po-widget",10)(28,"div",4),e(29,"AngularJS - Angular 6"),t(),n(30,"div",5),e(31,"Angular 6 most downloaded"),t()()(),o(32,"po-divider")(33,"po-table",11),t(),n(34,"po-modal",12)(35,"form",null,0)(37,"po-email",13),S("ngModelChange",function(a){return u(p),E(i.email,a)||(i.email=a),b(a)}),t()()()}r&2&&(c("p-actions",i.actions)("p-breadcrumb",i.breadcrumb),d(33),c("p-columns",i.columns)("p-items",i.items)("p-hide-table-search",!1),d(),c("p-primary-action",i.shareAction)("p-secondary-action",i.cancelAction),d(3),g("ngModel",i.email))},dependencies:[W,q,O,V,F,N,oe,H,v,ae,de],styles:[".sample-widget-text-subtitle[_ngcontent-%COMP%]{font-family:NunitoSans;font-size:14px;text-align:center;color:#9da7a9}"]})}return l})();var ke=l=>({"docs-sample-code-tabs":l}),Ee=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-dashboard-view"]],standalone:!1,decls:34,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Page Default - Dashboard"),t(),n(4,"a",2),h("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Dashboard" [p-actions]="actions" [p-breadcrumb]="breadcrumb">
  <div class="po-row">
    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Daily visitors">
      <div class="po-font-subtitle po-text-center">540</div>
      <div class="po-text-center sample-widget-text-subtitle">www.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Most viewed page">
      <div class="po-font-subtitle po-text-center">300 views</div>
      <div class="po-text-center sample-widget-text-subtitle">https://po-ui.io</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Website status">
      <div class="po-font-subtitle po-text-center">Online</div>
      <div class="po-text-center sample-widget-text-subtitle">28 days</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="NPM downloads">
      <div class="po-font-subtitle po-text-center">266</div>
      <div class="po-text-center sample-widget-text-subtitle">&#64;po-ui/ng-components - 1.10.1</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Devforum PO questions">
      <div class="po-font-subtitle po-text-center">800 questions</div>
      <div class="po-text-center sample-widget-text-subtitle">https://devforum.po.com.br</div>
    </po-widget>

    <po-widget class="po-md-6 po-lg-4 po-mb-2" p-title="Angular versions supported">
      <div class="po-font-subtitle po-text-center">AngularJS - Angular 6</div>
      <div class="po-text-center sample-widget-text-subtitle">Angular 6 most downloaded</div>
    </po-widget>
  </div>

  <po-divider />

  <po-table [p-columns]="columns" [p-items]="items" [p-hide-table-search]="false"> </po-table>
</po-page-default>

<po-modal p-title="Share webpage" [p-primary-action]="shareAction" [p-secondary-action]="cancelAction">
  <form #formShare="ngForm">
    <po-email
      class="po-lg-12"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="Type an e-mail for sharing webpage: http://www.po.com.br"
      p-required
    >
    </po-email>
  </form>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';

import { SampleDashboardService } from './sample-po-page-default-dashboard.service';

@Component({
  selector: 'sample-po-page-default-dashboard',
  templateUrl: './sample-po-page-default-dashboard.component.html',
  styleUrls: ['./sample-po-page-default-dashboard.component.css'],
  providers: [SampleDashboardService],
  standalone: false
})
export class SamplePoPageDefaultDashboardComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private sampleDashboardService = inject(SampleDashboardService);

  @ViewChild('formShare', { static: true }) formShare: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  columns: Array<PoTableColumn>;
  email: string = undefined;
  isSubscribed: boolean = false;
  items: Array<object>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Share', action: this.modalOpen.bind(this), icon: 'an an-share' },
    { label: 'GitHub', url: 'https://github.com/po-ui/po-angular' },
    {
      label: 'More info',
      subItems: [
        {
          label: 'po-dropdown documentation',
          url: 'https://po-ui.io/documentation/po-dropdown'
        }
      ]
    },
    { label: 'Components', url: '/documentation' },
    { label: 'Disable notification', action: this.disableNotification.bind(this), disabled: () => this.isSubscribed }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Dashboard' }]
  };

  public readonly cancelAction: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: PoModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  ngOnInit(): void {
    this.columns = this.sampleDashboardService.getColumns();
    this.items = this.sampleDashboardService.getItems();
  }

  modalClose() {
    this.poModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.poModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.poNotification.success(\`Webpage shared successfully to: \${this.email}.\`);
    } else {
      this.poNotification.error(\`Email invalid.\`);
    }
    this.modalClose();
  }

  private disableNotification() {
    this.isSubscribed = true;
  }
}
`),t(),n(21,"label",6),e(22,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.service.ts"),t(),n(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SampleDashboardService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'cities', label: 'Cities that most downloaded PO' },
      { property: 'package', label: 'Package version' },
      { property: 'downloads', label: 'Downloads' }
    ];
  }

  getItems() {
    return [
      { cities: 'S\xE3o Paulo', package: '2.0.0-beta.2', downloads: '2000' },
      { cities: 'Joinville', package: '1.9.1', downloads: '1000' },
      { cities: 'Rio de Janeiro', package: '2.0.0-beta.2', downloads: '250' },
      { cities: 'Santa Catarina', package: '1.9.1', downloads: '100' },
      { cities: 'Curitiba', package: '2.0.0-beta.2', downloads: '1040' },
      { cities: 'Goiania', package: '1.9.1', downloads: '250' },
      { cities: 'Londrina', package: '1.9.1', downloads: '35' },
      { cities: 'Belo Horizonte', package: '1.9.1', downloads: '1100' }
    ];
  }
}
`),t()()(),n(25,"po-tab",10)(26,"div")(27,"label",6),e(28,"sample-po-page-default-dashboard/sample-po-page-default-dashboard.component.css"),t(),n(29,"pre",11),e(30,`.sample-widget-text-subtitle {
  font-family: NunitoSans;
  font-size: 14px;
  text-align: center;
  color: #9da7a9;
}
`),t()()()()(),n(31,"div",12),o(32,"sample-po-page-default-dashboard"),t(),o(33,"hr")),r&2&&(d(5),w("po-icon "+i.sampleCodeButtonIcon),d(),D(" ",i.sampleCodeButtonLabel),d(),c("ngClass",_(4,ke,i.hideSampleCodeTabs)))},dependencies:[M,C,P,y,ge],encapsulation:2})}return l})();var Se=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275cmp=f({type:l,selectors:[["sample-po-page-default-doc"]],standalone:!1,decls:1082,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDefaultLiterals"],[1,"language-html"],[1,"language-typescript"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),n(7,"code"),e(8,"po-page-default"),t(),e(9,", "),n(10,"code"),e(11,"po-page-detail"),t(),e(12,`,
`),n(13,"code"),e(14,"po-page-edit"),t(),e(15,", "),n(16,"code"),e(17,"po-page-list"),t(),e(18," e "),n(19,"code"),e(20,"po-page-slide"),t(),e(21,"."),t()(),n(22,"h3",3),e(23,"Componente"),t(),n(24,"h4",4)(25,"code",5),e(26,"PoPageDefaultComponent"),t()(),n(27,"div",2)(28,"p"),e(29,"O "),n(30,"code"),e(31,"po-page-default"),t(),e(32," \xE9 utilizado como container principal para telas sem um template definido."),t(),n(33,"p"),e(34,"Oferece suporte a cabe\xE7alhos din\xE2micos via "),n(35,"code"),e(36,"p-page-header-type"),t(),e(37,", navega\xE7\xE3o por "),n(38,"em"),e(39,"breadcrumb"),t(),e(40,`
e gerenciamento de a\xE7\xF5es com agrupamento responsivo via `),n(41,"code"),e(42,"p-page-actions-layout"),t(),e(43,"."),t(),n(44,"h4"),e(45,"Tokens customiz\xE1veis"),t(),n(46,"blockquote")(47,"p"),e(48,"Para maiores informa\xE7\xF5es, acesse o guia "),n(49,"a",6),e(50,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(51,"."),t()(),n(52,"table")(53,"thead")(54,"tr")(55,"th"),e(56,"Propriedade"),t(),n(57,"th"),e(58,"Descri\xE7\xE3o"),t(),n(59,"th"),e(60,"Valor Padr\xE3o"),t()()(),n(61,"tbody")(62,"tr")(63,"td")(64,"strong"),e(65,"P\xE1gina (po-page-default)"),t()(),o(66,"td")(67,"td"),t(),n(68,"tr")(69,"td")(70,"code"),e(71,"--background"),t()(),n(72,"td"),e(73,"Background da p\xE1gina (header e body)"),t(),n(74,"td")(75,"code"),e(76,"var(--color-page-background-color-page)"),t()()(),n(77,"tr")(78,"td")(79,"strong"),e(80,"Header (po-page-header)"),t()(),o(81,"td")(82,"td"),t(),n(83,"tr")(84,"td")(85,"code"),e(86,"--padding"),t()(),n(87,"td"),e(88,"Espa\xE7amento do header"),t(),n(89,"td")(90,"code"),e(91,"var(--spacing-xs) var(--spacing-md)"),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--gap"),t()(),n(96,"td"),e(97,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),n(98,"td")(99,"code"),e(100,"var(--spacing-md)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--gap-actions"),t()(),n(105,"td"),e(106,"Espa\xE7amento entre as a\xE7\xF5es"),t(),n(107,"td")(108,"code"),e(109,"var(--spacing-xs)"),t()()(),n(110,"tr")(111,"td")(112,"strong"),e(113,"Header (po-page-header .po-page-header-title)"),t()(),o(114,"td")(115,"td"),t(),n(116,"tr")(117,"td")(118,"code"),e(119,"--font-family"),t()(),n(120,"td"),e(121,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),n(122,"td")(123,"code"),e(124,"var(--font-family-theme)"),t()()(),n(125,"tr")(126,"td")(127,"strong"),e(128,"Content (po-page-content)"),t()(),o(129,"td")(130,"td"),t(),n(131,"tr")(132,"td")(133,"code"),e(134,"--padding-content"),t()(),n(135,"td"),e(136,"Espa\xE7amento do conte\xFAdo"),t(),n(137,"td")(138,"code"),e(139,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),n(140,"div",7)(141,"h4",8),e(142,"Seletor"),t(),n(143,"pre",9),e(144,`<po-page-default
    p-actions="Array<PoPageAction>"
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-literals="PoPageDefaultLiterals"
    p-page-actions-layout="string"
    p-page-header-type="string"
    p-subtitle="string"
    p-title="string" >
</po-page-default>
`),t()(),n(145,"h4",10),e(146,"Propriedades"),t(),n(147,"table",11)(148,"tr",12)(149,"th",13),e(150,"Nome"),t(),n(151,"th",13),e(152,"Tipo"),t(),n(153,"th",13),e(154,"Padr\xE3o"),t(),n(155,"th",13),e(156,"Descri\xE7\xE3o"),t()(),n(157,"tr",14)(158,"td",15)(159,"div",16)(160,"span",17),e(161," p-actions"),o(162,"br"),t()()(),n(163,"td",18)(164,"code",19),e(165,"Array<PoPageAction>"),t()(),n(166,"td",20)(167,"p")(168,"code"),e(169,"[]"),t()()(),n(170,"td",21)(171,"em")(172,"strong"),e(173,"(opcional)"),t()(),n(174,"p"),e(175,"Define a lista de a\xE7\xF5es que ser\xE3o exibidas no cabe\xE7alho da p\xE1gina."),t(),n(176,"p"),e(177,"Recebe um array de objetos que implementam a interface "),n(178,"code"),e(179,"PoPageAction"),t(),e(180,"."),t(),n(181,"blockquote")(182,"p"),e(183,"O comportamento de exibi\xE7\xE3o pode ser customizado atrav\xE9s da propriedade "),n(184,"code"),e(185,"p-page-actions-layout"),t(),e(186,"."),t()()()(),n(187,"tr",14)(188,"td",15)(189,"div",22)(190,"span",23),e(191," (p-back)"),o(192,"br"),t()()(),n(193,"td",18)(194,"code",24),e(195,"EventEmitter"),t()(),n(196,"td",20),e(197,"-"),t(),n(198,"td",21)(199,"em")(200,"strong"),e(201,"(opcional)"),t()(),n(202,"p"),e(203,"Evento disparado ao clicar no bot\xE3o voltar exibido no cabe\xE7alho."),t(),n(204,"blockquote")(205,"p"),e(206,"Bot\xE3o exibido apenas quando a propriedade "),n(207,"code"),e(208,"p-page-header-type"),t(),e(209," est\xE1 configurada como "),n(210,"code"),e(211,"secondary"),t(),e(212,"."),t()()()(),n(213,"tr",14)(214,"td",15)(215,"div",16)(216,"span",17),e(217," p-breadcrumb"),o(218,"br"),t()()(),n(219,"td",18)(220,"code",25),e(221,"PoBreadcrumb"),t()(),n(222,"td",20),e(223,"-"),t(),n(224,"td",21)(225,"em")(226,"strong"),e(227,"(opcional)"),t()(),n(228,"p"),e(229,"Define o sistema de navega\xE7\xE3o que indica o caminho da p\xE1gina atual na hierarquia da aplica\xE7\xE3o."),t(),n(230,"p"),e(231,"Recebe um objeto que implementa a interface "),n(232,"code"),e(233,"PoBreadcrumb"),t(),e(234,"."),t(),n(235,"blockquote")(236,"p"),e(237,"Compat\xEDvel com o cabe\xE7alho ("),n(238,"code"),e(239,"p-page-header-type"),t(),e(240,") do tipo "),n(241,"code"),e(242,"primary"),t(),e(243,"."),t()()()(),n(244,"tr",14)(245,"td",15)(246,"div",16)(247,"span",17),e(248," p-components-size"),o(249,"br"),t()()(),n(250,"td",18)(251,"code",26),e(252,"string"),t()(),n(253,"td",20)(254,"p")(255,"code"),e(256,"medium"),t()()(),n(257,"td",21)(258,"em")(259,"strong"),e(260,"(opcional)"),t()(),n(261,"p"),e(262,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),n(263,"ul")(264,"li")(265,"code"),e(266,"small"),t(),e(267,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(268,"li")(269,"code"),e(270,"medium"),t(),e(271,": aplica a medida medium de cada componente."),t()(),n(272,"blockquote")(273,"p"),e(274,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(275,"code"),e(276,"medium"),t(),e(277,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(278,"a",27),e(279,"po-theme"),t(),e(280,"."),t()()()(),n(281,"tr",14)(282,"td",15)(283,"div",16)(284,"span",17),e(285," p-literals"),o(286,"br"),t()()(),n(287,"td",18)(288,"code",28),e(289,"PoPageDefaultLiterals"),t()(),n(290,"td",20),e(291,"-"),t(),n(292,"td",21)(293,"em")(294,"strong"),e(295,"(opcional)"),t()(),n(296,"p"),e(297,"Permite a customiza\xE7\xE3o das literais utilizadas no componente."),t(),n(298,"p"),e(299,"Para customizar, basta passar um objeto parcial ou completo que implemente a interface "),n(300,"code"),e(301,"PoPageDefaultLiterals"),t(),e(302,"."),t(),n(303,"p"),e(304,"Exemplo de uso:"),t(),n(305,"pre")(306,"code",29),e(307,`<po-page-default [p-literals]="customLiterals"></po-page-default>
`),t()(),n(308,"pre")(309,"code",30),e(310,`const customLiterals: PoPageDefaultLiterals = {
  otherActions: 'Mais op\xE7\xF5es'
};
`),t()(),n(311,"blockquote")(312,"p"),e(313,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),n(314,"a",31)(315,"code"),e(316,"PoI18nService"),t()(),e(317," ou navegador."),t()()()(),n(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),e(322," p-page-actions-layout"),o(323,"br"),t()()(),n(324,"td",18)(325,"code",26),e(326,"string"),t()(),n(327,"td",20)(328,"p")(329,"code"),e(330,"default"),t()()(),n(331,"td",21)(332,"em")(333,"strong"),e(334,"(opcional)"),t()(),n(335,"p"),e(336,"Define o layout de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho."),t(),n(337,"p"),e(338,"Aceita valores do enum "),n(339,"code"),e(340,"PoPageActionsLayout"),t(),e(341,"."),t(),n(342,"blockquote")(343,"p"),e(344,"Em telas reduzidas (< 480px) as a\xE7\xF5es fora do "),n(345,"em"),e(346,"dropdown"),t(),e(347," que possuam a propriedade "),n(348,"code"),e(349,"PoPageAction.icon"),t(),e(350,` definida
exibir\xE3o apenas o \xEDcone.`),t()()()(),n(351,"tr",14)(352,"td",15)(353,"div",16)(354,"span",17),e(355," p-page-header-type"),o(356,"br"),t()()(),n(357,"td",18)(358,"code",26),e(359,"string"),t()(),n(360,"td",20)(361,"p")(362,"code"),e(363,"primary"),t()()(),n(364,"td",21)(365,"em")(366,"strong"),e(367,"(opcional)"),t()(),n(368,"p"),e(369,"Define o tipo de cabe\xE7alho da p\xE1gina."),t(),n(370,"p"),e(371,"Aceita valores do enum "),n(372,"code"),e(373,"PoPageHeaderType"),t(),e(374,"."),t()()(),n(375,"tr",14)(376,"td",15)(377,"div",16)(378,"span",17),e(379," p-subtitle"),o(380,"br"),t()()(),n(381,"td",18)(382,"code",26),e(383,"string"),t()(),n(384,"td",20),e(385,"-"),t(),n(386,"td",21)(387,"em")(388,"strong"),e(389,"(opcional)"),t()(),n(390,"p"),e(391,"Define um texto de apoio ou informa\xE7\xF5es adicionais logo abaixo do t\xEDtulo principal."),t(),n(392,"blockquote")(393,"p"),e(394,"Requer que"),n(395,"code"),e(396,"p-title"),t(),e(397," esteja definido."),t()()()(),n(398,"tr",14)(399,"td",15)(400,"div",16)(401,"span",17),e(402," p-title"),o(403,"br"),t()()(),n(404,"td",18)(405,"code",26),e(406,"string"),t()(),n(407,"td",20),e(408,"-"),t(),n(409,"td",21)(410,"em")(411,"strong"),e(412,"(opcional)"),t()(),n(413,"p"),e(414,"Define o t\xEDtulo principal da p\xE1gina."),t()()()(),n(415,"h3"),e(416,"Interfaces"),t(),n(417,"h4",32)(418,"code",5),e(419,"PoBreadcrumbItem"),t()(),n(420,"div",2)(421,"p"),e(422,"Interface que define cada item do componente "),n(423,"strong"),e(424,"po-breadcrumb"),t(),e(425,"."),t()(),n(426,"h4",10),e(427,"Propriedades"),t(),n(428,"table",11)(429,"tr",12)(430,"th",13),e(431,"Nome"),t(),n(432,"th",13),e(433,"Tipo"),t(),n(434,"th",13),e(435,"Descri\xE7\xE3o"),t()(),n(436,"tr",14)(437,"td",15)(438,"div",16)(439,"span",17),e(440," action"),o(441,"br"),t()()(),n(442,"td",18)(443,"code",33),e(444,"Function"),t()(),n(445,"td",21)(446,"em")(447,"strong"),e(448,"(opcional)"),t()(),n(449,"p"),e(450,"A\xE7\xE3o executada ao clicar no item."),t(),n(451,"blockquote")(452,"p"),e(453,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),n(454,"em"),e(455,"label"),t(),e(456," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),n(457,"tr",14)(458,"td",15)(459,"div",16)(460,"span",17),e(461," label"),o(462,"br"),t()()(),n(463,"td",18)(464,"code",26),e(465,"string"),t()(),n(466,"td",21)(467,"p"),e(468,"R\xF3tulo do item."),t()()(),n(469,"tr",14)(470,"td",15)(471,"div",16)(472,"span",17),e(473," link"),o(474,"br"),t()()(),n(475,"td",18)(476,"code",26),e(477,"string"),t()(),n(478,"td",21)(479,"em")(480,"strong"),e(481,"(opcional)"),t()(),n(482,"p"),e(483,"Url do item."),t(),n(484,"blockquote")(485,"p"),e(486,"Caso o item tamb\xE9m contenha uma "),n(487,"em"),e(488,"action"),t(),e(489," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),n(490,"em"),e(491,"link"),t(),e(492,"."),t()(),n(493,"blockquote")(494,"p"),e(495,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),n(496,"strong")(497,"a",34),e(498,"Veja um exemplo de como criar rotas aqui"),t()(),e(499,"."),t()(),n(500,"blockquote")(501,"p"),e(502,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),n(503,"code"),e(504,"p-favorite-service"),t(),e(505," consiga favoritar ou desfavoritar."),t()()()()(),n(506,"h4",32)(507,"code",5),e(508,"PoBreadcrumb"),t()(),n(509,"div",2)(510,"p"),e(511,"Interface que define o "),n(512,"code"),e(513,"po-breadcrumb"),t(),e(514,"."),t()(),n(515,"h4",10),e(516,"Propriedades"),t(),n(517,"table",11)(518,"tr",12)(519,"th",13),e(520,"Nome"),t(),n(521,"th",13),e(522,"Tipo"),t(),n(523,"th",13),e(524,"Descri\xE7\xE3o"),t()(),n(525,"tr",14)(526,"td",15)(527,"div",16)(528,"span",17),e(529," favorite"),o(530,"br"),t()()(),n(531,"td",18)(532,"code",26),e(533,"string"),t()(),n(534,"td",21)(535,"em")(536,"strong"),e(537,"(opcional)"),t()(),n(538,"p"),e(539,"Permite definir uma URL para favoritar ou desfavoritar."),t(),n(540,"blockquote")(541,"p"),e(542,"Para maiores informa\xE7\xF5es verificar a propriedade "),n(543,"code"),e(544,"p-favorite-service"),t(),e(545," do componente "),n(546,"code"),e(547,"po-breadcrumb"),t(),e(548,"."),t()()()(),n(549,"tr",14)(550,"td",15)(551,"div",16)(552,"span",17),e(553," items"),o(554,"br"),t()()(),n(555,"td",18)(556,"code",35),e(557,"Array<PoBreadcrumbItem>"),t()(),n(558,"td",21)(559,"p"),e(560,"Lista de itens do "),n(561,"em"),e(562,"breadcrumb"),t(),e(563,"."),t(),n(564,"p")(565,"strong"),e(566,"Exemplo:"),t()(),n(567,"pre")(568,"code"),e(569,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),n(570,"tr",14)(571,"td",15)(572,"div",16)(573,"span",17),e(574," params"),o(575,"br"),t()()(),n(576,"td",18)(577,"code",36),e(578,"object"),t()(),n(579,"td",21)(580,"em")(581,"strong"),e(582,"(opcional)"),t()(),n(583,"p"),e(584,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),n(585,"h4",32)(586,"code",5),e(587,"PoPageAction"),t()(),n(588,"div",2)(589,"p"),e(590,"Interface para as a\xE7\xF5es dos componentes "),n(591,"code"),e(592,"po-page-default"),t(),e(593," e "),n(594,"code"),e(595,"po-page-list"),t(),e(596,"."),t(),n(597,"p"),e(598,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),n(599,"em"),e(600,"dropdown"),t(),e(601,`,
conforme o `),n(602,"code"),e(603,"PoPageActionsLayout"),t(),e(604," e o tamanho da tela."),t(),n(605,"blockquote")(606,"p"),e(607,"As propriedades "),n(608,"code"),e(609,"separator"),t(),e(610,", "),n(611,"code"),e(612,"selected"),t(),e(613," e "),n(614,"code"),e(615,"subItems"),t(),e(616,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),n(617,"em"),e(618,"dropdown"),t(),e(619,"."),t()()(),n(620,"h4",10),e(621,"Propriedades"),t(),n(622,"table",11)(623,"tr",12)(624,"th",13),e(625,"Nome"),t(),n(626,"th",13),e(627,"Tipo"),t(),n(628,"th",13),e(629,"Descri\xE7\xE3o"),t()(),n(630,"tr",14)(631,"td",15)(632,"div",16)(633,"span",17),e(634," action"),o(635,"br"),t()()(),n(636,"td",18)(637,"code",33),e(638,"Function"),t()(),n(639,"td",21)(640,"em")(641,"strong"),e(642,"(opcional)"),t()(),n(643,"p"),e(644,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),n(645,"p"),e(646,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),n(647,"code"),e(648,"subItems"),t(),e(649,"."),t(),n(650,"blockquote")(651,"p"),e(652,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),n(653,"em"),e(654,"bind"),t(),e(655,`:
`),n(656,"code"),e(657,"action: this.myFunction.bind(this)"),t()()()()(),n(658,"tr",14)(659,"td",15)(660,"div",16)(661,"span",17),e(662," disabled"),o(663,"br"),t()()(),n(664,"td",18)(665,"code",37),e(666,"boolean "),t(),n(667,"code",33),e(668," Function"),t()(),n(669,"td",21)(670,"em")(671,"strong"),e(672,"(opcional)"),t()(),n(673,"p"),e(674,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),n(675,"tr",14)(676,"td",15)(677,"div",16)(678,"span",17),e(679," icon"),o(680,"br"),t()()(),n(681,"td",18)(682,"code",26),e(683,"string "),t(),n(684,"code",38),e(685," TemplateRef<void>"),t()(),n(686,"td",21)(687,"em")(688,"strong"),e(689,"(opcional)"),t()(),n(690,"p"),e(691,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),n(692,"p"),e(693,"Aceita \xEDcones da "),n(694,"a",39),e(695,"Biblioteca de \xEDcones"),t(),e(696,`, fontes externas (ex: Font Awesome)
ou um `),n(697,"code"),e(698,"TemplateRef"),t(),e(699," para \xEDcones customizados."),t(),n(700,"pre")(701,"code"),e(702,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),n(703,"tr",14)(704,"td",15)(705,"div",16)(706,"span",17),e(707," kind"),o(708,"br"),t()()(),n(709,"td",18)(710,"code",26),e(711,"string"),t()(),n(712,"td",21)(713,"em")(714,"strong"),e(715,"(opcional)"),t()(),n(716,"p"),e(717,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),n(718,"em"),e(719,"dropdown"),t(),e(720,"."),t(),n(721,"p"),e(722,"Valores permitidos:"),t(),n(723,"ul")(724,"li")(725,"code"),e(726,"primary"),t(),e(727,": bot\xE3o com maior destaque visual."),t(),n(728,"li")(729,"code"),e(730,"secondary"),t(),e(731,": estilo padr\xE3o."),t()(),n(732,"blockquote")(733,"p"),e(734,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),t()(),n(735,"blockquote")(736,"p"),e(737,"Somente uma a\xE7\xE3o pode ter "),n(738,"code"),e(739,"kind"),t(),e(740," igual a "),n(741,"code"),e(742,"primary"),t(),e(743,". Caso mais de uma defina "),n(744,"code"),e(745,"primary"),t(),e(746,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),n(747,"code"),e(748,"secondary"),t(),e(749,"."),t()(),n(750,"blockquote")(751,"p"),e(752,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),n(753,"code"),e(754,"PoPageActionsLayout"),t(),e(755,"."),t()()()(),n(756,"tr",14)(757,"td",15)(758,"div",16)(759,"span",17),e(760," label"),o(761,"br"),t()()(),n(762,"td",18)(763,"code",26),e(764,"string"),t()(),n(765,"td",21)(766,"p"),e(767,"R\xF3tulo da a\xE7\xE3o."),t(),n(768,"p"),e(769,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),n(770,"code"),e(771,"subItems"),t(),e(772,"."),t()()(),n(773,"tr",14)(774,"td",15)(775,"div",16)(776,"span",17),e(777," selected"),o(778,"br"),t()()(),n(779,"td",18)(780,"code",37),e(781,"boolean"),t()(),n(782,"td",21)(783,"em")(784,"strong"),e(785,"(opcional)"),t()(),n(786,"p"),e(787,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),n(788,"tr",14)(789,"td",15)(790,"div",16)(791,"span",17),e(792," separator"),o(793,"br"),t()()(),n(794,"td",18)(795,"code",37),e(796,"boolean"),t()(),n(797,"td",21)(798,"em")(799,"strong"),e(800,"(opcional)"),t()(),n(801,"p"),e(802,"Atribui uma linha separadora acima do item."),t()()(),n(803,"tr",14)(804,"td",15)(805,"div",16)(806,"span",17),e(807," subItems"),o(808,"br"),t()()(),n(809,"td",18)(810,"code",40),e(811,"Array<PoPopupAction>"),t()(),n(812,"td",21)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),n(816,"p"),e(817,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),n(818,"p"),e(819,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),n(820,"blockquote")(821,"p"),e(822,"As propriedades "),n(823,"code"),e(824,"disabled"),t(),e(825,", "),n(826,"code"),e(827,"type"),t(),e(828," e "),n(829,"code"),e(830,"visible"),t(),e(831," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),n(832,"blockquote")(833,"p"),e(834,"Quando "),n(835,"code"),e(836,"url"),t(),e(837," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),n(838,"blockquote")(839,"p"),e(840,"Em subn\xEDveis aninhados, o "),n(841,"code"),e(842,"icon"),t(),e(843," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),n(844,"tr",14)(845,"td",15)(846,"div",16)(847,"span",17),e(848," type"),o(849,"br"),t()()(),n(850,"td",18)(851,"code",26),e(852,"string"),t()(),n(853,"td",21)(854,"em")(855,"strong"),e(856,"(opcional)"),t()(),n(857,"p"),e(858,"Define a cor do item."),t(),n(859,"p"),e(860,"Valores v\xE1lidos:"),t(),n(861,"ul")(862,"li")(863,"code"),e(864,"default"),t()(),n(865,"li")(866,"code"),e(867,"danger"),t()()()()(),n(868,"tr",14)(869,"td",15)(870,"div",16)(871,"span",17),e(872," url"),o(873,"br"),t()()(),n(874,"td",18)(875,"code",26),e(876,"string"),t()(),n(877,"td",21)(878,"em")(879,"strong"),e(880,"(opcional)"),t()(),n(881,"p"),e(882,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),n(883,"p"),e(884,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),n(885,"code"),e(886,"url"),t(),e(887," \xE9 informada em um agrupador, o clique "),n(888,"strong"),e(889,"n\xE3o abrir\xE1 os subitens"),t(),e(890,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),n(891,"blockquote")(892,"p"),e(893,"Quando informada, tem prioridade sobre a propriedade "),n(894,"code"),e(895,"action"),t(),e(896,"."),t()()()(),n(897,"tr",14)(898,"td",15)(899,"div",16)(900,"span",17),e(901," visible"),o(902,"br"),t()()(),n(903,"td",18)(904,"code",37),e(905,"boolean "),t(),n(906,"code",33),e(907," Function"),t()(),n(908,"td",21)(909,"em")(910,"strong"),e(911,"(opcional)"),t()(),n(912,"p"),e(913,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()(),n(914,"h4",32)(915,"code",5),e(916,"PoPageDefaultLiterals"),t()(),n(917,"div",2)(918,"p"),e(919,"Interface para defini\xE7\xE3o das literais usadas no "),n(920,"code"),e(921,"po-page-default"),t(),e(922,"."),t()(),n(923,"h4",10),e(924,"Propriedades"),t(),n(925,"table",11)(926,"tr",12)(927,"th",13),e(928,"Nome"),t(),n(929,"th",13),e(930,"Tipo"),t(),n(931,"th",13),e(932,"Descri\xE7\xE3o"),t()(),n(933,"tr",14)(934,"td",15)(935,"div",16)(936,"span",17),e(937," otherActions"),o(938,"br"),t()()(),n(939,"td",18)(940,"code",26),e(941,"string"),t()(),n(942,"td",21)(943,"em")(944,"strong"),e(945,"(opcional)"),t()(),n(946,"p"),e(947,"Legenda do "),n(948,"code"),e(949,"po-dropdown"),t(),e(950," de a\xE7\xF5es."),t()()()(),n(951,"h3"),e(952,"Enums"),t(),n(953,"h4",4)(954,"code",5),e(955,"PoPageActionsLayout"),t()(),n(956,"div",2)(957,"p"),e(958,"Define os layouts de exibi\xE7\xE3o das a\xE7\xF5es no cabe\xE7alho do "),n(959,"code"),e(960,"po-page-default"),t(),e(961,"."),t(),n(962,"blockquote")(963,"p"),e(964,"Compat\xEDvel com todos os valores de "),n(965,"code"),e(966,"PoPageHeaderType"),t(),e(967,"."),t()()(),n(968,"h4",10),e(969,"Propriedades"),t(),n(970,"table",11)(971,"tr",12)(972,"th",13),e(973,"Nome"),t(),n(974,"th",13),e(975,"Descri\xE7\xE3o"),t()(),n(976,"tr",14)(977,"td",15)(978,"div",16)(979,"span",17),e(980," default"),o(981,"br"),t()()(),n(982,"td",21)(983,"p"),e(984,"Exibe as a\xE7\xF5es como bot\xF5es (at\xE9 3 em desktop e 2 em mobile), agrupando as demais no "),n(985,"em"),e(986,"dropdown"),t(),e(987,"."),t(),n(988,"p"),e(989,"Quando "),n(990,"code"),e(991,"PoPageAction.kind"),t(),e(992," n\xE3o \xE9 definido, a primeira a\xE7\xE3o recebe o estilo "),n(993,"code"),e(994,"primary"),t(),e(995,`
e as demais recebem `),n(996,"code"),e(997,"secondary"),t(),e(998,"."),t()()(),n(999,"tr",14)(1e3,"td",15)(1001,"div",16)(1002,"span",17),e(1003," dropdown"),o(1004,"br"),t()()(),n(1005,"td",21)(1006,"p"),e(1007,"Agrupa todas as a\xE7\xF5es exclusivamente dentro do menu "),n(1008,"em"),e(1009,"dropdown"),t(),e(1010,"."),t()()(),n(1011,"tr",14)(1012,"td",15)(1013,"div",16)(1014,"span",17),e(1015," mixed"),o(1016,"br"),t()()(),n(1017,"td",21)(1018,"p"),e(1019,"Exibe a primeira a\xE7\xE3o como bot\xE3o e agrupa as demais no "),n(1020,"em"),e(1021,"dropdown"),t(),e(1022,"."),t()()()(),n(1023,"h4",4)(1024,"code",5),e(1025,"PoPageHeaderType"),t()(),n(1026,"div",2)(1027,"p"),e(1028,"Define os tipos de cabe\xE7alho dispon\xEDveis no "),n(1029,"code"),e(1030,"po-page-default"),t(),e(1031,"."),t()(),n(1032,"h4",10),e(1033,"Propriedades"),t(),n(1034,"table",11)(1035,"tr",12)(1036,"th",13),e(1037,"Nome"),t(),n(1038,"th",13),e(1039,"Descri\xE7\xE3o"),t()(),n(1040,"tr",14)(1041,"td",15)(1042,"div",16)(1043,"span",17),e(1044," primary"),o(1045,"br"),t()()(),n(1046,"td",21)(1047,"p"),e(1048,"Layout padr\xE3o com suporte a "),n(1049,"code"),e(1050,"p-breadcrumb"),t(),e(1051,"."),t()()(),n(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),e(1056," secondary"),o(1057,"br"),t()()(),n(1058,"td",21)(1059,"p"),e(1060,"Exibe um bot\xE3o de retorno ao lado do t\xEDtulo."),t(),n(1061,"blockquote")(1062,"p"),e(1063,"Incompat\xEDvel com "),n(1064,"code"),e(1065,"p-breadcrumb"),t(),e(1066,"."),t()()()(),n(1067,"tr",14)(1068,"td",15)(1069,"div",16)(1070,"span",17),e(1071," tertiary"),o(1072,"br"),t()()(),n(1073,"td",21)(1074,"p"),e(1075,"Layout simplificado sem bot\xE3o de retorno."),t(),n(1076,"blockquote")(1077,"p"),e(1078,"Incompat\xEDvel com "),n(1079,"code"),e(1080,"p-breadcrumb"),t(),e(1081,"."),t()()()()()())},dependencies:[C],encapsulation:2})}return l})();var fe=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,r){this.route=m,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let r=m.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||l)(j($),j(ee))};static \u0275cmp=f({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Default",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),h("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-page-default-doc"),t(),n(4,"po-tab",3),h("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-page-default-basic-view")(6,"sample-po-page-default-labs-view")(7,"sample-po-page-default-dashboard-view"),t()()()),r&2&&(c("p-actions",i.actions),d(2),c("p-active",i.activeTab==="doc"),d(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[v,P,y,ce,be,Ee,Se],encapsulation:2})}return l})();var Te=[{path:"",component:fe}],he=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=T({type:l});static \u0275inj=L({imports:[U.forChild(Te),U]})}return l})();var ut=(()=>{class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=T({type:l});static \u0275inj=L({imports:[me,he]})}return l})();export{ut as DocPoPageDefaultModule};
