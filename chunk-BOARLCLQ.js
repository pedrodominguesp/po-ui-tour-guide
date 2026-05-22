import{o as y,p as ce}from"./chunk-WYOAC7KN.js";import{Fa as re,Hb as v,Ib as x,Ja as le,Ra as se,S as O,U as ie,Ya as me,_ as ne,a as ee,bb as de,fa as ae,ub as pe,w as te,xb as A,ya as oe,za as W}from"./chunk-XOCFD5XY.js";import{Ea as g,Fa as i,Ga as t,H as Y,Ha as o,Hc as Z,I as F,L as C,Mb as M,Mc as H,Nc as j,O as c,Oa as B,Oc as V,P as u,Pa as S,Pc as G,Qc as q,Va as K,Wa as N,Xa as z,_a as T,bb as L,cb as e,cd as $,eb as w,ed as I,gb as b,gd as J,ha as m,hb as h,ib as E,ma as R,oa as f,pa as k,pb as X,rb as _}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ue=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page List"]],template:function(r,n){r&1&&o(0,"po-page-list",0)},dependencies:[A],encapsulation:2})}return s})();var Le=s=>({"docs-sample-code-tabs":s}),be=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Basic"),t(),i(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-basic/sample-po-page-list-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list p-title="PO Page List"> </po-page-list>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-basic/sample-po-page-list-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-list-basic',
  templateUrl: './sample-po-page-list-basic.component.html',
  standalone: false
})
export class SamplePoPageListBasicComponent {}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-list-basic"),t(),o(23,"hr")),r&2&&(m(5),L("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),g("ngClass",_(4,Le,n.hideSampleCodeTabs)))},dependencies:[M,y,v,x,ue],encapsulation:2})}return s})();var he=(()=>{class s{poNotification=C(W);action;actions;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;disclaimerGroupHideRemoveAll;disclaimerGroupTitle;disclaimerHideClose;disclaimerLabel;disclaimerProperty;disclaimerValue;filterModel;literals;title;subtitle;disclaimerGroup;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filter={action:this.showAction.bind(this),advancedAction:this.showAdvanceAction.bind(this)};iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-podcast",label:"fa fa-podcast"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(l){let r=Object.assign({},l);r.action=r.action?this.showAction.bind(this,r.action):void 0,this.actions=[...this.actions,r],this.restoreActionForm()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let l={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,l):this.breadcrumb.params=l,this.breadcrumbParams={}}addDisclaimer(){this.disclaimerGroup.disclaimers=[...this.disclaimerGroup.disclaimers,{label:this.disclaimerLabel,property:this.disclaimerProperty,hideClose:this.disclaimerHideClose,value:this.disclaimerValue}],this.disclaimerGroup=Object.assign({},this.disclaimerGroup),this.restoreDisclaimerModel()}addDisclaimerGroupParam(l,r){this.disclaimerGroup=Object.assign({},this.disclaimerGroup,{title:l,hideRemoveAll:r})}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}onChangeDisclaimerGroupHideRemoveAll(l){this.addDisclaimerGroupParam(this.disclaimerGroupTitle,l)}restore(){this.actions=[],this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.disclaimerGroup={title:this.disclaimerGroupTitle,disclaimers:[],hideRemoveAll:this.disclaimerGroupHideRemoveAll},this.disclaimerGroupHideRemoveAll=!1,this.disclaimerGroupTitle=void 0,this.filterModel=void 0,this.filter.placeholder=void 0,this.filter.width=void 0,this.literals="",this.title="PO Page List",this.subtitle="",this.restoreDisclaimerModel(),this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null}}restoreDisclaimerModel(){this.disclaimerHideClose=void 0,this.disclaimerLabel=void 0,this.disclaimerProperty=void 0,this.disclaimerValue=void 0}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}showAdvanceAction(l){this.poNotification.success(`Advance Action clicked: ${l}`)}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs"]],standalone:!1,decls:60,vars:40,consts:[["formAction","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],["formDisclaimers","ngForm"],["form","ngForm"],[3,"p-actions","p-breadcrumb","p-components-size","p-disclaimer-group","p-filter","p-literals","p-title","p-subtitle"],["p-label","Model",3,"p-value"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-3","po-md-6",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","disclaimerGroupTitle","p-clean","","p-label","Disclaimer group title",1,"po-md-6",3,"ngModelChange","p-change-model","ngModel"],["name","disclaimerGroupHideRemoveAll","p-label","Disclaimer group hide remove all","ngDefaultControl","",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","disclaimerLabel","p-clean","","p-label","Disclaimer label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerProperty","p-clean","","p-label","Disclaimer property",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerValue","p-clean","","p-label","Disclaimer value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disclaimerHideClose","p-label","Disclaimer hide close",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add disclaimer",1,"po-lg-3","po-md-4",3,"p-click","p-disabled"],["name","title","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterPlaceholder","p-label","Filter placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","filterWidth","p-label","Filter width",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: {"otherActions": "Mais a\xE7\xF5es"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let d=B();i(0,"po-page-list",6),o(1,"po-divider")(2,"po-info",7),t(),o(3,"po-divider"),i(4,"form",null,0)(6,"div",8)(7,"po-input",9),E("ngModelChange",function(a){return c(d),h(n.action.action,a)||(n.action.action=a),u(a)}),t(),i(8,"po-input",10),E("ngModelChange",function(a){return c(d),h(n.action.label,a)||(n.action.label=a),u(a)}),t(),i(9,"po-input",11),E("ngModelChange",function(a){return c(d),h(n.action.url,a)||(n.action.url=a),u(a)}),t(),i(10,"po-select",12),E("ngModelChange",function(a){return c(d),h(n.action.type,a)||(n.action.type=a),u(a)}),t(),i(11,"po-select",13),E("ngModelChange",function(a){return c(d),h(n.action.icon,a)||(n.action.icon=a),u(a)}),t(),i(12,"po-checkbox-group",14),E("ngModelChange",function(a){return c(d),h(n.action,a)||(n.action=a),u(a)}),t()(),i(13,"div",8)(14,"po-button",15),S("p-click",function(){return n.addAction(n.action)}),t()()(),o(15,"po-divider"),i(16,"form",null,1)(18,"div",8)(19,"po-input",16),E("ngModelChange",function(a){return c(d),h(n.breadcrumb.favorite,a)||(n.breadcrumb.favorite=a),u(a)}),t()()(),i(20,"form",null,2)(22,"div",8)(23,"po-input",17),E("ngModelChange",function(a){return c(d),h(n.breadcrumbItem.label,a)||(n.breadcrumbItem.label=a),u(a)}),t(),i(24,"po-input",18),E("ngModelChange",function(a){return c(d),h(n.breadcrumbItem.link,a)||(n.breadcrumbItem.link=a),u(a)}),t()(),i(25,"div",8)(26,"po-button",19),S("p-click",function(){return n.addBreadcrumbItem()}),t()()(),o(27,"po-divider"),i(28,"form",null,3)(30,"div",8)(31,"po-input",20),E("ngModelChange",function(a){return c(d),h(n.breadcrumbParams.property,a)||(n.breadcrumbParams.property=a),u(a)}),t(),i(32,"po-input",21),E("ngModelChange",function(a){return c(d),h(n.breadcrumbParams.value,a)||(n.breadcrumbParams.value=a),u(a)}),t()(),i(33,"div",8)(34,"po-button",22),S("p-click",function(){return n.addBreadcrumbParam()}),t()()(),o(35,"po-divider"),i(36,"div",8)(37,"po-input",23),E("ngModelChange",function(a){return c(d),h(n.disclaimerGroupTitle,a)||(n.disclaimerGroupTitle=a),u(a)}),S("p-change-model",function(){return n.addDisclaimerGroupParam(n.disclaimerGroupTitle,n.disclaimerGroupHideRemoveAll)}),t(),i(38,"po-switch",24),E("ngModelChange",function(a){return c(d),h(n.disclaimerGroupHideRemoveAll,a)||(n.disclaimerGroupHideRemoveAll=a),u(a)}),S("p-change",function(a){return n.onChangeDisclaimerGroupHideRemoveAll(a)}),t()(),i(39,"form",null,4)(41,"div",8)(42,"po-input",25),E("ngModelChange",function(a){return c(d),h(n.disclaimerLabel,a)||(n.disclaimerLabel=a),u(a)}),t(),i(43,"po-input",26),E("ngModelChange",function(a){return c(d),h(n.disclaimerProperty,a)||(n.disclaimerProperty=a),u(a)}),t()(),i(44,"div",8)(45,"po-input",27),E("ngModelChange",function(a){return c(d),h(n.disclaimerValue,a)||(n.disclaimerValue=a),u(a)}),t(),i(46,"po-switch",28),E("ngModelChange",function(a){return c(d),h(n.disclaimerHideClose,a)||(n.disclaimerHideClose=a),u(a)}),t()(),i(47,"div",8)(48,"po-button",29),S("p-click",function(){return n.addDisclaimer()}),t()()(),o(49,"po-divider"),i(50,"form",null,5)(52,"po-input",30),E("ngModelChange",function(a){return c(d),h(n.title,a)||(n.title=a),u(a)}),t(),i(53,"po-input",31),E("ngModelChange",function(a){return c(d),h(n.subtitle,a)||(n.subtitle=a),u(a)}),t(),i(54,"po-input",32),E("ngModelChange",function(a){return c(d),h(n.filter.placeholder,a)||(n.filter.placeholder=a),u(a)}),t(),i(55,"po-input",33),E("ngModelChange",function(a){return c(d),h(n.filter.width,a)||(n.filter.width=a),u(a)}),t(),i(56,"po-input",34),E("ngModelChange",function(a){return c(d),h(n.literals,a)||(n.literals=a),u(a)}),S("p-change",function(){return n.changeLiterals()}),t(),i(57,"po-radio-group",35),E("ngModelChange",function(a){return c(d),h(n.componentsSize,a)||(n.componentsSize=a),u(a)}),t(),i(58,"div",8)(59,"po-button",36),S("p-click",function(){return n.restore()}),t()()()}if(r&2){let d=T(5),p=T(21),a=T(29),ye=T(40);g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filter)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),m(2),g("p-value",n.filterModel),m(5),b("ngModel",n.action.action),m(),b("ngModel",n.action.label),m(),b("ngModel",n.action.url),m(),b("ngModel",n.action.type),g("p-options",n.typeOptions),m(),b("ngModel",n.action.icon),g("p-options",n.iconOptions),m(),b("ngModel",n.action),g("p-options",n.actionOptions),m(2),g("p-disabled",d.form.invalid),m(5),b("ngModel",n.breadcrumb.favorite),m(4),b("ngModel",n.breadcrumbItem.label),m(),b("ngModel",n.breadcrumbItem.link),m(2),g("p-disabled",p.invalid),m(5),b("ngModel",n.breadcrumbParams.property),m(),b("ngModel",n.breadcrumbParams.value),m(2),g("p-disabled",a.invalid),m(3),b("ngModel",n.disclaimerGroupTitle),m(),b("ngModel",n.disclaimerGroupHideRemoveAll),m(4),b("ngModel",n.disclaimerLabel),m(),b("ngModel",n.disclaimerProperty),m(2),b("ngModel",n.disclaimerValue),m(),b("ngModel",n.disclaimerHideClose),m(2),g("p-disabled",ye.invalid),m(4),b("ngModel",n.title),m(),b("ngModel",n.subtitle),m(),b("ngModel",n.filter.placeholder),m(),b("ngModel",n.filter.width),m(),b("ngModel",n.literals),m(),b("ngModel",n.componentsSize),g("p-options",n.componentsSizeOptions)}},dependencies:[q,Z,H,j,G,V,te,ee,O,ie,le,me,oe,de,A],encapsulation:2})}return s})();var Ae=s=>({"docs-sample-code-tabs":s}),Ee=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List Labs"),t(),i(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-labs/sample-po-page-list-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filter"
  [p-literals]="customLiterals"
  [p-title]="title"
  [p-subtitle]="subtitle"
>
  <po-divider />

  <po-info p-label="Model" [p-value]="filterModel"> </po-info>
</po-page-list>

<po-divider />

<form #formAction="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-lg-3 po-md-6" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-lg-3 po-md-6" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
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
      class="po-lg-3 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #formBreadcrumbFavorite="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
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

<po-divider />

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

<po-divider />

<div class="po-row">
  <po-input
    class="po-md-6"
    name="disclaimerGroupTitle"
    [(ngModel)]="disclaimerGroupTitle"
    p-clean
    p-label="Disclaimer group title"
    (p-change-model)="addDisclaimerGroupParam(disclaimerGroupTitle, disclaimerGroupHideRemoveAll)"
  >
  </po-input>

  <po-switch
    class="po-md-6"
    name="disclaimerGroupHideRemoveAll"
    [(ngModel)]="disclaimerGroupHideRemoveAll"
    p-label="Disclaimer group hide remove all"
    (p-change)="onChangeDisclaimerGroupHideRemoveAll($event)"
    ngDefaultControl
  >
  </po-switch>
</div>

<form #formDisclaimers="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="disclaimerLabel" [(ngModel)]="disclaimerLabel" p-clean p-label="Disclaimer label">
    </po-input>

    <po-input
      class="po-md-6"
      name="disclaimerProperty"
      [(ngModel)]="disclaimerProperty"
      p-clean
      p-label="Disclaimer property"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="disclaimerValue"
      [(ngModel)]="disclaimerValue"
      p-clean
      p-label="Disclaimer value"
      p-required
    >
    </po-input>

    <po-switch
      class="po-md-6"
      name="disclaimerHideClose"
      [(ngModel)]="disclaimerHideClose"
      p-label="Disclaimer hide close"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-4"
      p-label="Add disclaimer"
      [p-disabled]="formDisclaimers.invalid"
      (p-click)="addDisclaimer()"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #form="ngForm">
  <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-required> </po-input>
  <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

  <po-input class="po-md-6" name="filterPlaceholder" [(ngModel)]="filter.placeholder" p-label="Filter placeholder">
  </po-input>

  <po-input class="po-md-6" name="filterWidth" [(ngModel)]="filter.width" p-label="Filter width"> </po-input>

  <po-input
    class="po-md-12 po-lg-6"
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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-labs/sample-po-page-list-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoBreadcrumb,
  PoBreadcrumbItem,
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

import { PoNotificationService, PoPageAction, PoPageFilter, PoPageListLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-list-labs',
  templateUrl: './sample-po-page-list-labs.component.html',
  standalone: false
})
export class SamplePoPageListLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoPageAction;
  actions: Array<PoPageAction>;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageListLiterals;
  disclaimerGroupHideRemoveAll: boolean;
  disclaimerGroupTitle: string;
  disclaimerHideClose: boolean;
  disclaimerLabel: string;
  disclaimerProperty: string;
  disclaimerValue: string;
  filterModel: string;
  literals: string;
  title: string;
  subtitle: string;

  public disclaimerGroup;

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

  public readonly filter: PoPageFilter = {
    action: this.showAction.bind(this),
    advancedAction: this.showAdvanceAction.bind(this)
  };

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPageAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;
    this.actions = [...this.actions, newAction];

    this.restoreActionForm();
  }

  addBreadcrumbItem() {
    this.breadcrumb.items = this.breadcrumb.items.concat([this.breadcrumbItem]);
    this.breadcrumbItem = { label: undefined, link: undefined };
  }

  addBreadcrumbParam() {
    const newParam = { [this.breadcrumbParams.property]: this.breadcrumbParams.value };

    if (this.breadcrumb.params) {
      this.breadcrumb.params = Object.assign(this.breadcrumb.params, newParam);
    } else {
      this.breadcrumb.params = newParam;
    }

    this.breadcrumbParams = {};
  }

  addDisclaimer() {
    this.disclaimerGroup.disclaimers = [
      ...this.disclaimerGroup.disclaimers,
      {
        label: this.disclaimerLabel,
        property: this.disclaimerProperty,
        hideClose: this.disclaimerHideClose,
        value: this.disclaimerValue
      }
    ];

    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup);

    this.restoreDisclaimerModel();
  }

  addDisclaimerGroupParam(title, hideRemoveAll) {
    this.disclaimerGroup = Object.assign({}, this.disclaimerGroup, {
      title,
      hideRemoveAll
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  onChangeDisclaimerGroupHideRemoveAll(hideRemoveAll: boolean) {
    this.addDisclaimerGroupParam(this.disclaimerGroupTitle, hideRemoveAll);
  }

  restore() {
    this.actions = [];
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.disclaimerGroup = {
      title: this.disclaimerGroupTitle,
      disclaimers: [],
      hideRemoveAll: this.disclaimerGroupHideRemoveAll
    };
    this.disclaimerGroupHideRemoveAll = false;
    this.disclaimerGroupTitle = undefined;
    this.filterModel = undefined;
    this.filter.placeholder = undefined;
    this.filter.width = undefined;
    this.literals = '';
    this.title = 'PO Page List';
    this.subtitle = '';

    this.restoreDisclaimerModel();
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null
    };
  }

  restoreDisclaimerModel() {
    this.disclaimerHideClose = undefined;
    this.disclaimerLabel = undefined;
    this.disclaimerProperty = undefined;
    this.disclaimerValue = undefined;
  }

  showAction(filter) {
    this.poNotification.success(\`Action clicked: \${filter}\`);
  }

  showAdvanceAction(filter) {
    this.poNotification.success(\`Advance Action clicked: \${filter}\`);
  }
}
`),t()()()()(),i(21,"div",10),o(22,"sample-po-page-list-labs"),t(),o(23,"hr")),r&2&&(m(5),L("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),g("ngClass",_(4,Ae,n.hideSampleCodeTabs)))},dependencies:[M,y,v,x,he],encapsulation:2})}return s})();var Q=(()=>{class s{getColumns(){return[{property:"hireStatus",label:"Status",type:"subtitle",subtitles:[{value:"hired",color:"success",label:"Hired",content:"1"},{value:"progress",color:"warning",label:"Progress",content:"2"},{value:"canceled",color:"danger",label:"Canceled",content:"3"}]},{property:"idCard",label:"Identity card",type:"string"},{property:"name",label:"Name"},{property:"age",label:"Age"},{property:"city",label:"City"},{property:"jobDescription",label:"Job description",type:"string"}]}getHireStatus(){return[{value:"hired",label:"Hired"},{value:"progress",label:"Progress"},{value:"canceled",label:"Canceled"}]}getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",jobDescription:"Systems Analyst"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",jobDescription:"Trainee"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",jobDescription:"Programmer"},{hireStatus:"hired",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",jobDescription:"Web developer"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",jobDescription:"Recruiter"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",jobDescription:"Consultant"},{hireStatus:"hired",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",jobDescription:"Programmer"}]}getJobs(){return[{value:"Systems Analyst",label:"Systems Analyst"},{value:"Trainee",label:"Trainee"},{value:"Programmer",label:"Programmer"},{value:"Web Developer",label:"Web developer"},{value:"Recruiter",label:"Recruiter"},{value:"Consultant",label:"Consultant"},{value:"DBA",label:"DBA"}]}static \u0275fac=function(r){return new(r||s)};static \u0275prov=Y({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var Te=["advancedFilterModal"],Fe=["poPageList"],Se=(()=>{class s{sampleHiringProcessesService=C(Q);poNotification=C(W);poDialog=C(ae);router=C(I);advancedFilterModal;poPageList;disclaimerGroup;hiringProcesses;hiringProcessesColumns;hiringProcessesFiltered;jobDescription=[];jobDescriptionOptions;labelFilter="";status=[];statusOptions;actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.disableHireButton.bind(this)},{label:"Legislation",url:"https://www.usa.gov/labor-laws"}];breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"Hiring processes"}]};advancedFilterPrimaryAction={action:()=>{this.poPageList.clearInputSearch(),this.advancedFilterModal.close();let l=[...this.jobDescription,...this.status];this.filterAction(l)},label:"Apply filters"};filterSettings={action:this.filterAction.bind(this),advancedAction:this.advancedFilterActionModal.bind(this),placeholder:"Search"};disclaimers=[];ngOnInit(){this.disclaimerGroup={title:"Filters",disclaimers:[],change:this.onChangeDisclaimer.bind(this),remove:this.onClearDisclaimer.bind(this)},this.hiringProcesses=this.sampleHiringProcessesService.getItems(),this.hiringProcessesColumns=this.sampleHiringProcessesService.getColumns(),this.jobDescriptionOptions=this.sampleHiringProcessesService.getJobs(),this.statusOptions=this.sampleHiringProcessesService.getHireStatus(),this.hiringProcessesFiltered=[...this.hiringProcesses]}advancedFilterActionModal(){this.advancedFilterModal.open()}disableHireButton(){return!this.hiringProcesses.find(l=>l.$selected)}filter(){let l=this.disclaimers.map(r=>r.value);l.length?this.hiringProcessesFilter(l):this.resetFilterHiringProcess()}filterAction(l){let r=typeof l=="string"?[l]:[...l];this.populateDisclaimers(r),this.filter()}hireCandidate(){let l=this.hiringProcesses.find(r=>r.$selected);switch(l.hireStatus){case"progress":l.hireStatus="hired",this.poNotification.success("Hired candidate!");break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}}hiringProcessesFilter(l){this.hiringProcessesFiltered=this.hiringProcesses.filter(r=>Object.keys(r).some(n=>!(r[n]instanceof Object)&&this.includeFilter(r[n],l)))}includeFilter(l,r){return r.some(n=>String(l).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}onChangeDisclaimer(l){this.disclaimers=l,this.filter()}onClearDisclaimer(l){l.removedDisclaimer.property==="search"&&this.poPageList.clearInputSearch(),this.disclaimers=[],this.filter()}populateDisclaimers(l){let r=l.length>1?"advanced":"search";this.disclaimers=l.map(n=>({value:n,property:r})),this.disclaimers&&this.disclaimers.length>0?this.disclaimerGroup.disclaimers=[...this.disclaimers]:this.disclaimerGroup.disclaimers=[]}resetFilterHiringProcess(){this.hiringProcessesFiltered=[...this.hiringProcesses],this.status=[],this.jobDescription=[]}beforeRedirect(l){this.hiringProcesses.some(r=>r.$selected)?this.poDialog.confirm({title:`Confirm redirect to ${l}`,message:"There is data selected. Are you sure you want to quit?",confirm:()=>this.router.navigate(["/"])}):this.router.navigate(["/"])}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes"]],viewQuery:function(r,n){if(r&1&&K(Te,7)(Fe,7),r&2){let d;N(d=z())&&(n.advancedFilterModal=d.first),N(d=z())&&(n.poPageList=d.first)}},standalone:!1,features:[X([Q])],decls:9,vars:15,consts:[["poPageList",""],["advancedFilterModal",""],["f","ngForm"],["p-title","Hiring processes",3,"p-actions","p-breadcrumb","p-disclaimer-group","p-filter"],[3,"p-selectable","p-single-select","p-sort","p-striped","p-columns","p-items"],["p-title","Advanced filter",3,"p-primary-action"],["name","jobDescription","p-label","Job description",3,"ngModelChange","ngModel","p-options"],["name","status","p-label","Status",3,"ngModelChange","ngModel","p-options"]],template:function(r,n){if(r&1){let d=B();i(0,"po-page-list",3,0),o(2,"po-table",4),t(),i(3,"po-modal",5,1)(5,"form",null,2)(7,"po-multiselect",6),E("ngModelChange",function(a){return c(d),h(n.jobDescription,a)||(n.jobDescription=a),u(a)}),t(),i(8,"po-checkbox-group",7),E("ngModelChange",function(a){return c(d),h(n.status,a)||(n.status=a),u(a)}),t()()()}r&2&&(g("p-actions",n.actions)("p-breadcrumb",n.breadcrumb)("p-disclaimer-group",n.disclaimerGroup)("p-filter",n.filterSettings),m(2),g("p-selectable",!0)("p-single-select",!0)("p-sort",!0)("p-striped",!0)("p-columns",n.hiringProcessesColumns)("p-items",n.hiringProcessesFiltered),m(),g("p-primary-action",n.advancedFilterPrimaryAction),m(4),b("ngModel",n.jobDescription),g("p-options",n.jobDescriptionOptions),m(),b("ngModel",n.status),g("p-options",n.statusOptions))},dependencies:[q,H,j,G,V,O,se,ne,A,re],encapsulation:2})}return s})();var Be=s=>({"docs-sample-code-tabs":s}),fe=(()=>{class s{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,n){r&1&&(o(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page List - Hiring Processes"),t(),i(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.html"),t(),i(13,"pre",7),e(14,`<po-page-list
  #poPageList
  p-title="Hiring processes"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-disclaimer-group]="disclaimerGroup"
  [p-filter]="filterSettings"
>
  <po-table
    [p-selectable]="true"
    [p-single-select]="true"
    [p-sort]="true"
    [p-striped]="true"
    [p-columns]="hiringProcessesColumns"
    [p-items]="hiringProcessesFiltered"
  >
  </po-table>
</po-page-list>

<po-modal #advancedFilterModal p-title="Advanced filter" [p-primary-action]="advancedFilterPrimaryAction">
  <form #f="ngForm">
    <po-multiselect
      name="jobDescription"
      [(ngModel)]="jobDescription"
      p-label="Job description"
      [p-options]="jobDescriptionOptions"
    >
    </po-multiselect>

    <po-checkbox-group name="status" [(ngModel)]="status" p-label="Status" [p-options]="statusOptions">
    </po-checkbox-group>
  </form>
</po-modal>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoCheckboxGroupOption, PoMultiselectOption } from '@po-ui/ng-components';

import { PoDialogService } from '@po-ui/ng-components';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoPageAction, PoPageFilter } from '@po-ui/ng-components';
import { PoTableColumn } from '@po-ui/ng-components';
import { PoPageListComponent } from '@po-ui/ng-components';

import { SamplePoPageListHiringProcessesService } from './sample-po-page-list-hiring-processes.service';

@Component({
  selector: 'sample-po-page-list-hiring-processes',
  templateUrl: './sample-po-page-list-hiring-processes.component.html',
  providers: [SamplePoPageListHiringProcessesService],
  standalone: false
})
export class SamplePoPageListHiringProcessesComponent implements OnInit {
  private sampleHiringProcessesService = inject(SamplePoPageListHiringProcessesService);
  private poNotification = inject(PoNotificationService);
  private poDialog = inject(PoDialogService);
  private router = inject(Router);

  @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
  @ViewChild('poPageList', { static: true }) poPageList: PoPageListComponent;

  disclaimerGroup;
  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter: string = '';
  status: Array<string> = [];
  statusOptions: Array<PoCheckboxGroupOption>;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) },
    { label: 'Legislation', url: 'https://www.usa.gov/labor-laws' }
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'Hiring processes' }]
  };

  public readonly advancedFilterPrimaryAction: PoModalAction = {
    action: () => {
      this.poPageList.clearInputSearch();
      this.advancedFilterModal.close();
      const filters = [...this.jobDescription, ...this.status];
      this.filterAction(filters);
    },
    label: 'Apply filters'
  };

  public readonly filterSettings: PoPageFilter = {
    action: this.filterAction.bind(this),
    advancedAction: this.advancedFilterActionModal.bind(this),
    placeholder: 'Search'
  };

  private disclaimers = [];

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this),
      remove: this.onClearDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(labelFilter: string | Array<string>) {
    const filter = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.poNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.poNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.poNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  onClearDisclaimer(disclaimers) {
    if (disclaimers.removedDisclaimer.property === 'search') {
      this.poPageList.clearInputSearch();
    }
    this.disclaimers = [];
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    const property = filters.length > 1 ? 'advanced' : 'search';
    this.disclaimers = filters.map(value => ({ value, property }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data selected. Are you sure you want to quit?\`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-page-list-hiring-processes/sample-po-page-list-hiring-processes.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoPageListHiringProcessesService {
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus',
        label: 'Status',
        type: 'subtitle',
        subtitles: [
          { value: 'hired', color: 'success', label: 'Hired', content: '1' },
          { value: 'progress', color: 'warning', label: 'Progress', content: '2' },
          { value: 'canceled', color: 'danger', label: 'Canceled', content: '3' }
        ]
      },
      { property: 'idCard', label: 'Identity card', type: 'string' },
      { property: 'name', label: 'Name' },
      { property: 'age', label: 'Age' },
      { property: 'city', label: 'City' },
      { property: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled' }
    ];
  }

  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        jobDescription: 'Systems Analyst'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        jobDescription: 'Trainee'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'hired',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        jobDescription: 'Web developer'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        jobDescription: 'Recruiter'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        jobDescription: 'Consultant'
      },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        jobDescription: 'Programmer'
      }
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer' },
      { value: 'Web Developer', label: 'Web developer' },
      { value: 'Recruiter', label: 'Recruiter' },
      { value: 'Consultant', label: 'Consultant' },
      { value: 'DBA', label: 'DBA' }
    ];
  }
}
`),t()()()()(),i(25,"div",10),o(26,"sample-po-page-list-hiring-processes"),t(),o(27,"hr")),r&2&&(m(5),L("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),g("ngClass",_(4,Be,n.hideSampleCodeTabs)))},dependencies:[M,y,v,x,Se],encapsulation:2})}return s})();var Pe=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275cmp=f({type:s,selectors:[["sample-po-page-list-doc"]],standalone:!1,decls:1290,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/icons"],["href","/documentation/po-disclaimer-group"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPageAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoDisclaimerGroup"],["pan","",1,"docs-api-property-type","PoPageFilter"],["pan","",1,"docs-api-property-type","PoPageListLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<PoDisclaimer>"],["pan","",1,"docs-api-property-type","PoDisclaimer"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","number"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),i(7,"code"),e(8,"po-page-default"),t(),e(9,", "),i(10,"code"),e(11,"po-page-detail"),t(),e(12,`,
`),i(13,"code"),e(14,"po-page-edit"),t(),e(15,", "),i(16,"code"),e(17,"po-page-list"),t(),e(18," e "),i(19,"code"),e(20,"po-page-slide"),t(),e(21,"."),t()(),i(22,"h3",3),e(23,"Componente"),t(),i(24,"h4",4)(25,"code",5),e(26,"PoPageListComponent"),t()(),i(27,"div",2)(28,"p"),e(29,"O componente "),i(30,"code"),e(31,"po-page-list"),t(),e(32,` \xE9 utilizado como o container principal para as telas de listagem de dados,
podendo ser apresentado como lista ou tabela.`),t(),i(33,"p"),e(34,`Este componente possibilita realizar filtro dos dados, no qual permite que seja atribuido uma fun\xE7\xE3o que ser\xE1 executada no momento
da filtragem. Este comportamento pode ser acionado tanto ao `),i(35,"em"),e(36,"click"),t(),e(37," do \xEDcone "),i(38,"a",6),e(39,"an-magnifying-glass"),t(),e(40,`
quanto ao pressionar da tecla `),i(41,"em"),e(42,"ENTER"),t(),e(43," quando o foco estiver no campo de pesquisa."),t(),i(44,"p"),e(45,`Para facilitar a manipula\xE7\xE3o e visualiza\xE7\xE3o dos filtros aplicados, \xE9 poss\xEDvel tamb\xE9m utilizar o componente
`),i(46,"a",7)(47,"code"),e(48,"po-disclaimer-group"),t()(),e(49,"."),t(),i(50,"h4"),e(51,"Tokens customiz\xE1veis"),t(),i(52,"blockquote")(53,"p"),e(54,"Para maiores informa\xE7\xF5es, acesse o guia "),i(55,"a",8),e(56,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(57,"."),t()(),i(58,"table")(59,"thead")(60,"tr")(61,"th"),e(62,"Propriedade"),t(),i(63,"th"),e(64,"Descri\xE7\xE3o"),t(),i(65,"th"),e(66,"Valor Padr\xE3o"),t()()(),i(67,"tbody")(68,"tr")(69,"td")(70,"strong"),e(71,"Header"),t()(),o(72,"td")(73,"td"),t(),i(74,"tr")(75,"td")(76,"code"),e(77,"--padding"),t()(),i(78,"td"),e(79,"Espa\xE7amento do header"),t(),i(80,"td")(81,"code"),e(82,"var(--spacing-xs) var(--spacing-md)"),t()()(),i(83,"tr")(84,"td")(85,"code"),e(86,"--gap"),t()(),i(87,"td"),e(88,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),i(89,"td")(90,"code"),e(91,"var(--spacing-md)"),t()()(),i(92,"tr")(93,"td")(94,"code"),e(95,"--gap-actions"),t()(),i(96,"td"),e(97,"Espa\xE7amento entre as a\xE7\xF5es"),t(),i(98,"td")(99,"code"),e(100,"var(--spacing-xs)"),t()()(),i(101,"tr")(102,"td")(103,"code"),e(104,"--font-family"),t()(),i(105,"td"),e(106,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),i(107,"td")(108,"code"),e(109,"var(--font-family-theme)"),t()()(),i(110,"tr")(111,"td")(112,"strong"),e(113,"Content"),t()(),o(114,"td")(115,"td"),t(),i(116,"tr")(117,"td")(118,"code"),e(119,"--padding-content"),t()(),i(120,"td"),e(121,"Espa\xE7amento do conte\xFAdo"),t(),i(122,"td")(123,"code"),e(124,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),i(125,"div",9)(126,"h4",10),e(127,"Seletor"),t(),i(128,"pre",11),e(129,`<po-page-list
    p-actions="Array<PoPageAction>"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-disclaimer-group="PoDisclaimerGroup"
    p-filter="PoPageFilter"
    p-literals="PoPageListLiterals"
    p-quick-search-value="string"
    p-subtitle="string"
    p-title="string" >
</po-page-list>
`),t()(),i(130,"h4",12),e(131,"Propriedades"),t(),i(132,"table",13)(133,"tr",14)(134,"th",15),e(135,"Nome"),t(),i(136,"th",15),e(137,"Tipo"),t(),i(138,"th",15),e(139,"Padr\xE3o"),t(),i(140,"th",15),e(141,"Descri\xE7\xE3o"),t()(),i(142,"tr",16)(143,"td",17)(144,"div",18)(145,"span",19),e(146," p-actions"),o(147,"br"),t()()(),i(148,"td",20)(149,"code",21),e(150,"Array<PoPageAction>"),t()(),i(151,"td",22),e(152,"-"),t(),i(153,"td",23)(154,"em")(155,"strong"),e(156,"(opcional)"),t()(),i(157,"p"),e(158,"Nesta propriedade deve ser definido um array de objetos que implementam a interface "),i(159,"code"),e(160,"PoPageAction"),t(),e(161,"."),t()()(),i(162,"tr",16)(163,"td",17)(164,"div",18)(165,"span",19),e(166," p-breadcrumb"),o(167,"br"),t()()(),i(168,"td",20)(169,"code",24),e(170,"PoBreadcrumb"),t()(),i(171,"td",22),e(172,"-"),t(),i(173,"td",23)(174,"em")(175,"strong"),e(176,"(opcional)"),t()(),i(177,"p"),e(178,"Objeto que implementa as propriedades da interface "),i(179,"code"),e(180,"PoBreadcrumb"),t(),e(181,"."),t()()(),i(182,"tr",16)(183,"td",17)(184,"div",18)(185,"span",19),e(186," p-components-size"),o(187,"br"),t()()(),i(188,"td",20)(189,"code",25),e(190,"string"),t()(),i(191,"td",22)(192,"p")(193,"code"),e(194,"medium"),t()()(),i(195,"td",23)(196,"em")(197,"strong"),e(198,"(opcional)"),t()(),i(199,"p"),e(200,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(201,"ul")(202,"li")(203,"code"),e(204,"small"),t(),e(205,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(206,"li")(207,"code"),e(208,"medium"),t(),e(209,": aplica a medida medium de cada componente."),t()(),i(210,"blockquote")(211,"p"),e(212,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(213,"code"),e(214,"medium"),t(),e(215,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(216,"a",26),e(217,"po-theme"),t(),e(218,"."),t()()()(),i(219,"tr",16)(220,"td",17)(221,"div",18)(222,"span",19),e(223," p-disclaimer-group"),o(224,"br"),t()()(),i(225,"td",20)(226,"code",27),e(227,"PoDisclaimerGroup"),t()(),i(228,"td",22),e(229,"-"),t(),i(230,"td",23)(231,"em")(232,"strong"),e(233,"(opcional)"),t()(),i(234,"p"),e(235,"Objeto que implementa as propriedades da interface "),i(236,"code"),e(237,"PoDisclaimerGroup"),t(),e(238,"."),t()()(),i(239,"tr",16)(240,"td",17)(241,"div",18)(242,"span",19),e(243," p-filter"),o(244,"br"),t()()(),i(245,"td",20)(246,"code",28),e(247,"PoPageFilter"),t()(),i(248,"td",22),e(249,"-"),t(),i(250,"td",23)(251,"p"),e(252,"Objeto que implementa as propriedades da interface "),i(253,"code"),e(254,"PoPageFilter"),t(),e(255,"."),t()()(),i(256,"tr",16)(257,"td",17)(258,"div",18)(259,"span",19),e(260," p-literals"),o(261,"br"),t()()(),i(262,"td",20)(263,"code",29),e(264,"PoPageListLiterals"),t()(),i(265,"td",22),e(266,"-"),t(),i(267,"td",23)(268,"em")(269,"strong"),e(270,"(opcional)"),t()(),i(271,"p"),e(272,"Objeto com as literais usadas no "),i(273,"code"),e(274,"po-page-list"),t(),e(275,"."),t(),i(276,"p"),e(277,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(278,"pre")(279,"code"),e(280,`const customLiterals: PoPageListLiterals = {
  otherActions: 'Mais a\xE7\xF5es'
};
`),t()(),i(281,"p"),e(282,"Ou passando apenas as literais que deseja customizar:"),t(),i(283,"pre")(284,"code"),e(285,`const customLiterals: PoPageListLiterals = {
  otherActions: 'A\xE7\xF5es da p\xE1gina'
};
`),t()(),i(286,"p"),e(287,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(288,"pre")(289,"code"),e(290,`<po-page-list
  [p-literals]="customLiterals">
</po-page-list>
`),t()(),i(291,"blockquote")(292,"p"),e(293,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(294,"a",30)(295,"code"),e(296,"PoI18nService"),t()(),e(297," ou "),i(298,"em"),e(299,"browser"),t(),e(300,"."),t()()()(),i(301,"tr",16)(302,"td",17)(303,"div",18)(304,"span",19),e(305," p-quick-search-value"),o(306,"br"),t()()(),i(307,"td",20)(308,"code",25),e(309,"string"),t()(),i(310,"td",22),e(311,"-"),t(),i(312,"td",23)(313,"em")(314,"strong"),e(315,"(opcional)"),t()(),i(316,"p"),e(317,"Valor padr\xE3o na busca r\xE1pida ao inicializar o componente"),t()()(),i(318,"tr",16)(319,"td",17)(320,"div",18)(321,"span",19),e(322," p-subtitle"),o(323,"br"),t()()(),i(324,"td",20)(325,"code",25),e(326,"string"),t()(),i(327,"td",22),e(328,"-"),t(),i(329,"td",23)(330,"em")(331,"strong"),e(332,"(opcional)"),t()(),i(333,"p"),e(334,"Subtitulo do Header da p\xE1gina"),t()()(),i(335,"tr",16)(336,"td",17)(337,"div",18)(338,"span",19),e(339," p-title"),o(340,"br"),t()()(),i(341,"td",20)(342,"code",25),e(343,"string"),t()(),i(344,"td",22),e(345,"-"),t(),i(346,"td",23)(347,"p"),e(348,"T\xEDtulo da p\xE1gina."),t()()()(),i(349,"h3",12),e(350,"M\xE9todos"),t(),i(351,"table",31)(352,"tr",16)(353,"th",32)(354,"div",18)(355,"h4")(356,"span",19),e(357," clearInputSearch "),t()()()()(),i(358,"tr",23)(359,"td",23)(360,"p"),e(361,"Limpa o campo de pesquisa."),t()()()(),o(362,"br"),i(363,"h3"),e(364,"Interfaces"),t(),i(365,"h4",33)(366,"code",5),e(367,"PoBreadcrumbItem"),t()(),i(368,"div",2)(369,"p"),e(370,"Interface que define cada item do componente "),i(371,"strong"),e(372,"po-breadcrumb"),t(),e(373,"."),t()(),i(374,"h4",12),e(375,"Propriedades"),t(),i(376,"table",13)(377,"tr",14)(378,"th",15),e(379,"Nome"),t(),i(380,"th",15),e(381,"Tipo"),t(),i(382,"th",15),e(383,"Descri\xE7\xE3o"),t()(),i(384,"tr",16)(385,"td",17)(386,"div",18)(387,"span",19),e(388," action"),o(389,"br"),t()()(),i(390,"td",20)(391,"code",34),e(392,"Function"),t()(),i(393,"td",23)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),i(397,"p"),e(398,"A\xE7\xE3o executada ao clicar no item."),t(),i(399,"blockquote")(400,"p"),e(401,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),i(402,"em"),e(403,"label"),t(),e(404," do item como par\xE2metro para execu\xE7\xE3o."),t()()()(),i(405,"tr",16)(406,"td",17)(407,"div",18)(408,"span",19),e(409," label"),o(410,"br"),t()()(),i(411,"td",20)(412,"code",25),e(413,"string"),t()(),i(414,"td",23)(415,"p"),e(416,"R\xF3tulo do item."),t()()(),i(417,"tr",16)(418,"td",17)(419,"div",18)(420,"span",19),e(421," link"),o(422,"br"),t()()(),i(423,"td",20)(424,"code",25),e(425,"string"),t()(),i(426,"td",23)(427,"em")(428,"strong"),e(429,"(opcional)"),t()(),i(430,"p"),e(431,"Url do item."),t(),i(432,"blockquote")(433,"p"),e(434,"Caso o item tamb\xE9m contenha uma "),i(435,"em"),e(436,"action"),t(),e(437," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),i(438,"em"),e(439,"link"),t(),e(440,"."),t()(),i(441,"blockquote")(442,"p"),e(443,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),i(444,"strong")(445,"a",35),e(446,"Veja um exemplo de como criar rotas aqui"),t()(),e(447,"."),t()(),i(448,"blockquote")(449,"p"),e(450,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),i(451,"code"),e(452,"p-favorite-service"),t(),e(453," consiga favoritar ou desfavoritar."),t()()()()(),i(454,"h4",33)(455,"code",5),e(456,"PoBreadcrumb"),t()(),i(457,"div",2)(458,"p"),e(459,"Interface que define o "),i(460,"code"),e(461,"po-breadcrumb"),t(),e(462,"."),t()(),i(463,"h4",12),e(464,"Propriedades"),t(),i(465,"table",13)(466,"tr",14)(467,"th",15),e(468,"Nome"),t(),i(469,"th",15),e(470,"Tipo"),t(),i(471,"th",15),e(472,"Descri\xE7\xE3o"),t()(),i(473,"tr",16)(474,"td",17)(475,"div",18)(476,"span",19),e(477," favorite"),o(478,"br"),t()()(),i(479,"td",20)(480,"code",25),e(481,"string"),t()(),i(482,"td",23)(483,"em")(484,"strong"),e(485,"(opcional)"),t()(),i(486,"p"),e(487,"Permite definir uma URL para favoritar ou desfavoritar."),t(),i(488,"blockquote")(489,"p"),e(490,"Para maiores informa\xE7\xF5es verificar a propriedade "),i(491,"code"),e(492,"p-favorite-service"),t(),e(493," do componente "),i(494,"code"),e(495,"po-breadcrumb"),t(),e(496,"."),t()()()(),i(497,"tr",16)(498,"td",17)(499,"div",18)(500,"span",19),e(501," items"),o(502,"br"),t()()(),i(503,"td",20)(504,"code",36),e(505,"Array<PoBreadcrumbItem>"),t()(),i(506,"td",23)(507,"p"),e(508,"Lista de itens do "),i(509,"em"),e(510,"breadcrumb"),t(),e(511,"."),t(),i(512,"p")(513,"strong"),e(514,"Exemplo:"),t()(),i(515,"pre")(516,"code"),e(517,`{ label: 'Po Portal', link: 'portal' }
`),t()()()(),i(518,"tr",16)(519,"td",17)(520,"div",18)(521,"span",19),e(522," params"),o(523,"br"),t()()(),i(524,"td",20)(525,"code",37),e(526,"object"),t()(),i(527,"td",23)(528,"em")(529,"strong"),e(530,"(opcional)"),t()(),i(531,"p"),e(532,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),t()()()(),i(533,"h4",33)(534,"code",5),e(535,"PoDisclaimer"),t()(),i(536,"div",2)(537,"p"),e(538,"Interface que representa o objeto "),i(539,"code"),e(540,"po-disclaimer"),t(),e(541,"."),t()(),i(542,"h4",12),e(543,"Propriedades"),t(),i(544,"table",13)(545,"tr",14)(546,"th",15),e(547,"Nome"),t(),i(548,"th",15),e(549,"Tipo"),t(),i(550,"th",15),e(551,"Descri\xE7\xE3o"),t()(),i(552,"tr",16)(553,"td",17)(554,"div",18)(555,"span",19),e(556," hideClose"),o(557,"br"),t()()(),i(558,"td",20)(559,"code",38),e(560,"boolean"),t()(),i(561,"td",23)(562,"em")(563,"strong"),e(564,"(opcional)"),t()(),i(565,"p"),e(566,"Se verdadeiro, oculta o bot\xE3o para fechar o "),i(567,"em"),e(568,"disclaimer"),t(),e(569,"."),t()()(),i(570,"tr",16)(571,"td",17)(572,"div",18)(573,"span",19),e(574," label"),o(575,"br"),t()()(),i(576,"td",20)(577,"code",25),e(578,"string"),t()(),i(579,"td",23)(580,"em")(581,"strong"),e(582,"(opcional)"),t()(),i(583,"p"),e(584,"Texto de exibi\xE7\xE3o do objeto."),t()()(),i(585,"tr",16)(586,"td",17)(587,"div",18)(588,"span",19),e(589," property"),o(590,"br"),t()()(),i(591,"td",20)(592,"code",25),e(593,"string"),t()(),i(594,"td",23)(595,"em")(596,"strong"),e(597,"(opcional)"),t()(),i(598,"p"),e(599,"Nome da propriedade vinculada ao objeto "),i(600,"em"),e(601,"disclaimer"),t(),e(602,"."),t()()(),i(603,"tr",16)(604,"td",17)(605,"div",18)(606,"span",19),e(607," value"),o(608,"br"),t()()(),i(609,"td",20)(610,"code",39),e(611,"any"),t()(),i(612,"td",23)(613,"p"),e(614,"Valor do objeto."),t()()()(),i(615,"h4",33)(616,"code",5),e(617,"PoDisclaimerGroupRemoveAction"),t()(),i(618,"div",2)(619,"p"),e(620,"Estrutura do objeto representando o estado dos "),i(621,"em"),e(622,"disclaimers"),t(),e(623," ap\xF3s a remo\xE7\xE3o."),t()(),i(624,"h4",12),e(625,"Propriedades"),t(),i(626,"table",13)(627,"tr",14)(628,"th",15),e(629,"Nome"),t(),i(630,"th",15),e(631,"Tipo"),t(),i(632,"th",15),e(633,"Descri\xE7\xE3o"),t()(),i(634,"tr",16)(635,"td",17)(636,"div",18)(637,"span",19),e(638," currentDisclaimers"),o(639,"br"),t()()(),i(640,"td",20)(641,"code",40),e(642,"Array<PoDisclaimer>"),t()(),i(643,"td",23)(644,"p"),e(645,"Lista com os "),i(646,"em"),e(647,"disclaimers"),t(),e(648," atuais (restantes)."),t()()(),i(649,"tr",16)(650,"td",17)(651,"div",18)(652,"span",19),e(653," removedDisclaimer"),o(654,"br"),t()()(),i(655,"td",20)(656,"code",41),e(657,"PoDisclaimer"),t()(),i(658,"td",23)(659,"p")(660,"em"),e(661,"Disclaimer"),t(),e(662," que foi removido."),t()()()(),i(663,"h4",33)(664,"code",5),e(665,"PoDisclaimerGroup"),t()(),i(666,"div",2)(667,"p"),e(668,"Interface que representa o objeto "),i(669,"code"),e(670,"po-disclaimer-group"),t(),e(671,"."),t()(),i(672,"h4",12),e(673,"Propriedades"),t(),i(674,"table",13)(675,"tr",14)(676,"th",15),e(677,"Nome"),t(),i(678,"th",15),e(679,"Tipo"),t(),i(680,"th",15),e(681,"Descri\xE7\xE3o"),t()(),i(682,"tr",16)(683,"td",17)(684,"div",18)(685,"span",19),e(686," change"),o(687,"br"),t()()(),i(688,"td",20)(689,"code",34),e(690,"Function"),t()(),i(691,"td",23)(692,"em")(693,"strong"),e(694,"(opcional)"),t()(),i(695,"p"),e(696,"Fun\xE7\xE3o que ser\xE1 disparada quando a lista de "),i(697,"em"),e(698,"disclaimers"),t(),e(699,` for modificada.
Ser\xE1 passado por par\xE2metro a nova lista de `),i(700,"em"),e(701,"disclaimers"),t(),e(702,"."),t()()(),i(703,"tr",16)(704,"td",17)(705,"div",18)(706,"span",19),e(707," disclaimers"),o(708,"br"),t()()(),i(709,"td",20)(710,"code",40),e(711,"Array<PoDisclaimer>"),t()(),i(712,"td",23)(713,"p"),e(714,"Lista de "),i(715,"em"),e(716,"disclaimers"),t(),e(717,"."),t(),i(718,"p"),e(719,"Exemplo:"),t(),i(720,"pre")(721,"code"),e(722,`disclaimers: [
  { property: 'type', label: 'Hotel', value: 'hotel' },
  { property: 'cost', label: '$500,00', value: '500'  },
  { property: 'dates', label: '10/05/2018 - 15/05/2018', value: '10/05/2018|15/05/2018'  }
 ]
`),t()(),i(723,"p"),e(724,"Para que a lista de "),i(725,"em"),e(726,"disclaimers"),t(),e(727," seja atualizada dinamicamente deve-se passar uma nova refer\xEAncia do array de "),i(728,"code"),e(729,"PoDisclaimer"),t(),e(730,"."),t(),i(731,"p"),e(732,"Exemplo:"),t(),i(733,"pre")(734,"code"),e(735,`this.disclaimerGroup.disclaimers = [...this.disclaimers];
`),t()()()(),i(736,"tr",16)(737,"td",17)(738,"div",18)(739,"span",19),e(740," hideRemoveAll"),o(741,"br"),t()()(),i(742,"td",20)(743,"code",38),e(744,"boolean"),t()(),i(745,"td",23)(746,"em")(747,"strong"),e(748,"(opcional)"),t()(),i(749,"p"),e(750,"Oculta o bot\xE3o para remover todos os "),i(751,"em"),e(752,"disclaimers"),t(),e(753," do grupo."),t(),i(754,"blockquote")(755,"p"),e(756,"Por padr\xE3o, o mesmo \xE9 exibido \xE0 partir de dois ou mais "),i(757,"em"),e(758,"disclaimers"),t(),e(759," com a op\xE7\xE3o "),i(760,"code"),e(761,"hideClose"),t(),e(762," habilitada."),t()()()(),i(763,"tr",16)(764,"td",17)(765,"div",18)(766,"span",19),e(767," remove"),o(768,"br"),t()()(),i(769,"td",20)(770,"code",34),e(771,"Function"),t()(),i(772,"td",23)(773,"em")(774,"strong"),e(775,"(opcional)"),t()(),i(776,"p"),e(777,"Fun\xE7\xE3o que ser\xE1 disparada quando um "),i(778,"em"),e(779,"disclaimer"),t(),e(780,` for removido da lista de
`),i(781,"em"),e(782,"disclaimers"),t(),e(783," pelo usu\xE1rio."),t(),i(784,"p"),e(785,"Recebe como par\xE2metro um objeto conforme a interface "),i(786,"code"),e(787,"PoDisclaimerGroupRemoveAction"),t(),e(788,"."),t()()(),i(789,"tr",16)(790,"td",17)(791,"div",18)(792,"span",19),e(793," removeAll"),o(794,"br"),t()()(),i(795,"td",20)(796,"code",34),e(797,"Function"),t()(),i(798,"td",23)(799,"em")(800,"strong"),e(801,"(opcional)"),t()(),i(802,"p"),e(803,"Fun\xE7\xE3o que ser\xE1 disparada quando todos os "),i(804,"em"),e(805,"disclaimers"),t(),e(806," forem removidos da lista de "),i(807,"em"),e(808,"disclaimers"),t(),e(809,` pelo usu\xE1rio,
utilizando o bot\xE3o "remover todos".`),t(),i(810,"p"),e(811,"Recebe como par\xE2metro uma lista contendo todos os "),i(812,"code"),e(813,"disclaimers"),t(),e(814," removidos."),t()()(),i(815,"tr",16)(816,"td",17)(817,"div",18)(818,"span",19),e(819," title"),o(820,"br"),t()()(),i(821,"td",20)(822,"code",25),e(823,"string"),t()(),i(824,"td",23)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),i(828,"p"),e(829,"T\xEDtulo do grupo de "),i(830,"em"),e(831,"disclaimers"),t(),e(832,"."),t()()()(),i(833,"h4",33)(834,"code",5),e(835,"PoPageAction"),t()(),i(836,"div",2)(837,"p"),e(838,"Interface para as a\xE7\xF5es dos componentes "),i(839,"code"),e(840,"po-page-default"),t(),e(841," e "),i(842,"code"),e(843,"po-page-list"),t(),e(844,"."),t(),i(845,"p"),e(846,"As a\xE7\xF5es podem ser exibidas como bot\xF5es no cabe\xE7alho ou agrupadas em um "),i(847,"em"),e(848,"dropdown"),t(),e(849,`,
conforme o `),i(850,"code"),e(851,"PoPageActionsLayout"),t(),e(852," e o tamanho da tela."),t(),i(853,"blockquote")(854,"p"),e(855,"As propriedades "),i(856,"code"),e(857,"separator"),t(),e(858,", "),i(859,"code"),e(860,"selected"),t(),e(861," e "),i(862,"code"),e(863,"subItems"),t(),e(864,` possuem efeito apenas quando
a a\xE7\xE3o \xE9 exibida dentro do `),i(865,"em"),e(866,"dropdown"),t(),e(867,"."),t()()(),i(868,"h4",12),e(869,"Propriedades"),t(),i(870,"table",13)(871,"tr",14)(872,"th",15),e(873,"Nome"),t(),i(874,"th",15),e(875,"Tipo"),t(),i(876,"th",15),e(877,"Descri\xE7\xE3o"),t()(),i(878,"tr",16)(879,"td",17)(880,"div",18)(881,"span",19),e(882," action"),o(883,"br"),t()()(),i(884,"td",20)(885,"code",34),e(886,"Function"),t()(),i(887,"td",23)(888,"em")(889,"strong"),e(890,"(opcional)"),t()(),i(891,"p"),e(892,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(893,"p"),e(894,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),i(895,"code"),e(896,"subItems"),t(),e(897,"."),t(),i(898,"blockquote")(899,"p"),e(900,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),i(901,"em"),e(902,"bind"),t(),e(903,`:
`),i(904,"code"),e(905,"action: this.myFunction.bind(this)"),t()()()()(),i(906,"tr",16)(907,"td",17)(908,"div",18)(909,"span",19),e(910," disabled"),o(911,"br"),t()()(),i(912,"td",20)(913,"code",38),e(914,"boolean "),t(),i(915,"code",34),e(916," Function"),t()(),i(917,"td",23)(918,"em")(919,"strong"),e(920,"(opcional)"),t()(),i(921,"p"),e(922,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),i(923,"tr",16)(924,"td",17)(925,"div",18)(926,"span",19),e(927," icon"),o(928,"br"),t()()(),i(929,"td",20)(930,"code",25),e(931,"string "),t(),i(932,"code",42),e(933," TemplateRef<void>"),t()(),i(934,"td",23)(935,"em")(936,"strong"),e(937,"(opcional)"),t()(),i(938,"p"),e(939,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),i(940,"p"),e(941,"Aceita \xEDcones da "),i(942,"a",6),e(943,"Biblioteca de \xEDcones"),t(),e(944,`, fontes externas (ex: Font Awesome)
ou um `),i(945,"code"),e(946,"TemplateRef"),t(),e(947," para \xEDcones customizados."),t(),i(948,"pre")(949,"code"),e(950,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),i(951,"tr",16)(952,"td",17)(953,"div",18)(954,"span",19),e(955," kind"),o(956,"br"),t()()(),i(957,"td",20)(958,"code",25),e(959,"string"),t()(),i(960,"td",23)(961,"em")(962,"strong"),e(963,"(opcional)"),t()(),i(964,"p"),e(965,"Define o estilo visual da a\xE7\xE3o quando exibida como bot\xE3o fora do "),i(966,"em"),e(967,"dropdown"),t(),e(968,"."),t(),i(969,"p"),e(970,"Valores permitidos:"),t(),i(971,"ul")(972,"li")(973,"code"),e(974,"primary"),t(),e(975,": bot\xE3o com maior destaque visual."),t(),i(976,"li")(977,"code"),e(978,"secondary"),t(),e(979,": estilo padr\xE3o."),t()(),i(980,"blockquote")(981,"p"),e(982,"Valores inv\xE1lidos s\xE3o ignorados e o componente aplica o estilo padr\xE3o da posi\xE7\xE3o."),t()(),i(983,"blockquote")(984,"p"),e(985,"Somente uma a\xE7\xE3o pode ter "),i(986,"code"),e(987,"kind"),t(),e(988," igual a "),i(989,"code"),e(990,"primary"),t(),e(991,". Caso mais de uma defina "),i(992,"code"),e(993,"primary"),t(),e(994,`,
apenas a primeira ser\xE1 mantida e as demais receber\xE3o `),i(995,"code"),e(996,"secondary"),t(),e(997,"."),t()(),i(998,"blockquote")(999,"p"),e(1e3,"Quando n\xE3o definido, o estilo \xE9 determinado pelo "),i(1001,"code"),e(1002,"PoPageActionsLayout"),t(),e(1003,"."),t()()()(),i(1004,"tr",16)(1005,"td",17)(1006,"div",18)(1007,"span",19),e(1008," label"),o(1009,"br"),t()()(),i(1010,"td",20)(1011,"code",25),e(1012,"string"),t()(),i(1013,"td",23)(1014,"p"),e(1015,"R\xF3tulo da a\xE7\xE3o."),t(),i(1016,"p"),e(1017,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),i(1018,"code"),e(1019,"subItems"),t(),e(1020,"."),t()()(),i(1021,"tr",16)(1022,"td",17)(1023,"div",18)(1024,"span",19),e(1025," selected"),o(1026,"br"),t()()(),i(1027,"td",20)(1028,"code",38),e(1029,"boolean"),t()(),i(1030,"td",23)(1031,"em")(1032,"strong"),e(1033,"(opcional)"),t()(),i(1034,"p"),e(1035,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(1036,"tr",16)(1037,"td",17)(1038,"div",18)(1039,"span",19),e(1040," separator"),o(1041,"br"),t()()(),i(1042,"td",20)(1043,"code",38),e(1044,"boolean"),t()(),i(1045,"td",23)(1046,"em")(1047,"strong"),e(1048,"(opcional)"),t()(),i(1049,"p"),e(1050,"Atribui uma linha separadora acima do item."),t()()(),i(1051,"tr",16)(1052,"td",17)(1053,"div",18)(1054,"span",19),e(1055," subItems"),o(1056,"br"),t()()(),i(1057,"td",20)(1058,"code",43),e(1059,"Array<PoPopupAction>"),t()(),i(1060,"td",23)(1061,"em")(1062,"strong"),e(1063,"(opcional)"),t()(),i(1064,"p"),e(1065,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),i(1066,"p"),e(1067,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),i(1068,"blockquote")(1069,"p"),e(1070,"As propriedades "),i(1071,"code"),e(1072,"disabled"),t(),e(1073,", "),i(1074,"code"),e(1075,"type"),t(),e(1076," e "),i(1077,"code"),e(1078,"visible"),t(),e(1079," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),i(1080,"blockquote")(1081,"p"),e(1082,"Quando "),i(1083,"code"),e(1084,"url"),t(),e(1085," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),i(1086,"blockquote")(1087,"p"),e(1088,"Em subn\xEDveis aninhados, o "),i(1089,"code"),e(1090,"icon"),t(),e(1091," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),i(1092,"tr",16)(1093,"td",17)(1094,"div",18)(1095,"span",19),e(1096," type"),o(1097,"br"),t()()(),i(1098,"td",20)(1099,"code",25),e(1100,"string"),t()(),i(1101,"td",23)(1102,"em")(1103,"strong"),e(1104,"(opcional)"),t()(),i(1105,"p"),e(1106,"Define a cor do item."),t(),i(1107,"p"),e(1108,"Valores v\xE1lidos:"),t(),i(1109,"ul")(1110,"li")(1111,"code"),e(1112,"default"),t()(),i(1113,"li")(1114,"code"),e(1115,"danger"),t()()()()(),i(1116,"tr",16)(1117,"td",17)(1118,"div",18)(1119,"span",19),e(1120," url"),o(1121,"br"),t()()(),i(1122,"td",20)(1123,"code",25),e(1124,"string"),t()(),i(1125,"td",23)(1126,"em")(1127,"strong"),e(1128,"(opcional)"),t()(),i(1129,"p"),e(1130,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),i(1131,"p"),e(1132,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(1133,"code"),e(1134,"url"),t(),e(1135," \xE9 informada em um agrupador, o clique "),i(1136,"strong"),e(1137,"n\xE3o abrir\xE1 os subitens"),t(),e(1138,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),i(1139,"blockquote")(1140,"p"),e(1141,"Quando informada, tem prioridade sobre a propriedade "),i(1142,"code"),e(1143,"action"),t(),e(1144,"."),t()()()(),i(1145,"tr",16)(1146,"td",17)(1147,"div",18)(1148,"span",19),e(1149," visible"),o(1150,"br"),t()()(),i(1151,"td",20)(1152,"code",38),e(1153,"boolean "),t(),i(1154,"code",34),e(1155," Function"),t()(),i(1156,"td",23)(1157,"em")(1158,"strong"),e(1159,"(opcional)"),t()(),i(1160,"p"),e(1161,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()(),i(1162,"h4",33)(1163,"code",5),e(1164,"PoPageFilter"),t()(),i(1165,"div",2)(1166,"p"),e(1167,"Interface para o atributo "),i(1168,"code"),e(1169,"filter"),t(),e(1170," do componente "),i(1171,"code"),e(1172,"po-page-list"),t(),e(1173,"."),t()(),i(1174,"h4",12),e(1175,"Propriedades"),t(),i(1176,"table",13)(1177,"tr",14)(1178,"th",15),e(1179,"Nome"),t(),i(1180,"th",15),e(1181,"Tipo"),t(),i(1182,"th",15),e(1183,"Descri\xE7\xE3o"),t()(),i(1184,"tr",16)(1185,"td",17)(1186,"div",18)(1187,"span",19),e(1188," action"),o(1189,"br"),t()()(),i(1190,"td",20)(1191,"code",34),e(1192,"Function"),t()(),i(1193,"td",23)(1194,"em")(1195,"strong"),e(1196,"(opcional)"),t()(),i(1197,"p"),e(1198,"A\xE7\xE3o a ser executada."),t()()(),i(1199,"tr",16)(1200,"td",17)(1201,"div",18)(1202,"span",19),e(1203," advancedAction"),o(1204,"br"),t()()(),i(1205,"td",20)(1206,"code",34),e(1207,"Function"),t()(),i(1208,"td",23)(1209,"em")(1210,"strong"),e(1211,"(opcional)"),t()(),i(1212,"p"),e(1213,`A\xE7\xE3o a ser executada quando for disparado o
evento de `),i(1214,"em"),e(1215,"click"),t(),e(1216," atrav\xE9s do r\xF3tulo "),i(1217,"strong"),e(1218,"Busca Avan\xE7ada"),t(),e(1219,"."),t()()(),i(1220,"tr",16)(1221,"td",17)(1222,"div",18)(1223,"span",19),e(1224," placeholder"),o(1225,"br"),t()()(),i(1226,"td",20)(1227,"code",25),e(1228,"string"),t()(),i(1229,"td",23)(1230,"em")(1231,"strong"),e(1232,"(opcional)"),t()(),i(1233,"p"),e(1234,"Texto de instru\xE7\xE3o exibido dentro do campo de filtro."),t()()(),i(1235,"tr",16)(1236,"td",17)(1237,"div",18)(1238,"span",19),e(1239," width"),o(1240,"br"),t()()(),i(1241,"td",20)(1242,"code",44),e(1243,"number"),t()(),i(1244,"td",23)(1245,"em")(1246,"strong"),e(1247,"(opcional)"),t()(),i(1248,"p"),e(1249,"Tamanho do filtro em tela, utilizando o "),i(1250,"em"),e(1251,"Grid System"),t(),e(1252,`,
e limitado ao m\xE1ximo de 6 colunas. O tamanho m\xEDnimo \xE9 controlado
conforme resolu\xE7\xE3o de tela para manter a consist\xEAncia do layout.`),t()()()(),i(1253,"h4",33)(1254,"code",5),e(1255,"PoPageListLiterals"),t()(),i(1256,"div",2)(1257,"p"),e(1258,"Interface para defini\xE7\xE3o das literais usadas no "),i(1259,"code"),e(1260,"po-page-list"),t(),e(1261,"."),t()(),i(1262,"h4",12),e(1263,"Propriedades"),t(),i(1264,"table",13)(1265,"tr",14)(1266,"th",15),e(1267,"Nome"),t(),i(1268,"th",15),e(1269,"Tipo"),t(),i(1270,"th",15),e(1271,"Descri\xE7\xE3o"),t()(),i(1272,"tr",16)(1273,"td",17)(1274,"div",18)(1275,"span",19),e(1276," otherActions"),o(1277,"br"),t()()(),i(1278,"td",20)(1279,"code",25),e(1280,"string"),t()(),i(1281,"td",23)(1282,"em")(1283,"strong"),e(1284,"(opcional)"),t()(),i(1285,"p"),e(1286,"Legenda do "),i(1287,"code"),e(1288,"po-dropdown"),t(),e(1289," de a\xE7\xF5es."),t()()()()())},dependencies:[y],encapsulation:2})}return s})();var ve=(()=>{class s{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,r){this.route=l,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let r=l.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||s)(R($),R(I))};static \u0275cmp=f({type:s,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page List",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-page-list-doc"),t(),i(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-page-list-basic-view")(6,"sample-po-page-list-labs-view")(7,"sample-po-page-list-hiring-processes-view"),t()()()),r&2&&(g("p-actions",n.actions),m(2),g("p-active",n.activeTab==="doc"),m(2),g("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[pe,v,x,be,Ee,fe,Pe],encapsulation:2})}return s})();var Ve=[{path:"",component:ve}],xe=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=k({type:s});static \u0275inj=F({imports:[J.forChild(Ve),J]})}return s})();var St=(()=>{class s{static \u0275fac=function(r){return new(r||s)};static \u0275mod=k({type:s});static \u0275inj=F({imports:[ce,xe]})}return s})();export{St as DocPoPageListModule};
