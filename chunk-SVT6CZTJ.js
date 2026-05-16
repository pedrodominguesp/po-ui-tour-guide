import{o as x,p as xe}from"./chunk-AT3MKFJ3.js";import{Gb as C,Hb as y,Ja as ve,Ra as fe,S as be,U as Se,Xa as we,_ as Ee,a as ce,ab as M,lb as D,mb as B,n as ue,nb as T,r as he,tb as Ce,w as ge,wb as ye,za as H}from"./chunk-GCMU57WK.js";import{Ea as m,Fa as i,Ga as e,H as $,Ha as r,I,L as F,Mb as A,Mc as ae,Nc as le,O as g,Oa as Q,Oc as re,P as b,Pa as u,Pc as se,Qc as pe,Va as Y,Wa as Z,Xa as K,Yb as oe,_a as q,bb as L,cb as t,cd as me,eb as _,ed as de,gb as S,gd as N,ha as s,hb as E,ib as v,ma as j,mb as X,oa as h,pa as O,pb as ee,qb as z,rb as V,sb as te,ta as P,xb as ie,yb as ne}from"./chunk-XD3NZLB4.js";import{a as U,b as J}from"./chunk-GAL4ENT6.js";var Fe=()=>({name:"Registro 1",email:"register@po-ui.com"}),Ie=()=>({name:"Registro 2",email:"register2@po-ui.com"}),Oe=(a,f)=>[a,f];function He(a,f){if(a&1&&(i(0,"div",2),r(1,"po-info",3),e()),a&2){let o=f.$implicit;s(),m("p-value",o.email)}}var Pe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-list-view-basic"]],standalone:!1,decls:2,vars:6,consts:[["p-property-title","name",3,"p-items"],["p-list-view-content-template",""],[1,"po-row"],["p-label","Email",1,"po-md-12",3,"p-value"]],template:function(l,n){l&1&&(i(0,"po-list-view",0),P(1,He,2,1,"ng-template",1),e()),l&2&&m("p-items",te(3,Oe,z(1,Fe),z(2,Ie)))},dependencies:[M,T,D],encapsulation:2})}return a})();var je=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-list-view-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO List View Basic"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-list-view-basic/sample-po-list-view-basic.component.html"),e(),i(13,"pre",7),t(14,`<po-list-view
  p-property-title="name"
  [p-items]="[
    { name: 'Registro 1', email: 'register@po-ui.com' },
    { name: 'Registro 2', email: 'register2@po-ui.com' }
  ]"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-12" p-label="Email" [p-value]="item.email"></po-info>
    </div>
  </ng-template>
</po-list-view>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-list-view-basic/sample-po-list-view-basic.component.ts"),e(),i(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-list-view-basic',
  templateUrl: './sample-po-list-view-basic.component.html',
  standalone: false
})
export class SamplePoListViewBasicComponent {}
`),e()()()()(),i(21,"div",10),r(22,"sample-po-list-view-basic"),e(),r(23,"hr")),l&2&&(s(5),L("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel),s(),m("ngClass",V(4,je,n.hideSampleCodeTabs)))},dependencies:[A,x,C,y,Pe],encapsulation:2})}return a})();function ze(a,f){if(a&1&&(i(0,"div",5),r(1,"po-info",22)(2,"po-info",23)(3,"po-info",24)(4,"po-info",25),e()),a&2){let o=f.$implicit;s(),m("p-value",o.name),s(),m("p-value",o.email),s(),m("p-value",o.location),s(),m("p-value",o.phone)}}function Ne(a,f){if(a&1&&(i(0,"div",5),r(1,"po-info",26)(2,"po-info",27),e()),a&2){let o=f.$implicit;s(),m("p-value",o.company),s(),m("p-value",o.zipCode)}}var _e=(()=>{class a{poNotification=F(H);action;actions;componentsSize="medium";customLiterals;height;items;literals;properties;propertyLink;propertyLinkValue;propertyTitle;titleAction;propertiesOptions=[{value:"select",label:"Select"},{value:"hideSelectAll",label:"Hide Select All",disabled:!0},{value:"showMoreDisabled",label:"Show More Disabled"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"fa fa-podcast",label:"fa fa-podcast"}];propertyTitleOptions=[{value:"name",label:"name"},{value:"email",label:"email"},{value:"phone",label:"phone"},{value:"location",label:"location"}];typeOptions=[{label:"Default",value:"default"},{label:"Danger",value:"danger"}];ngOnInit(){this.restore()}addAction(o){let l=Object.assign({},o);l.action=l.action?this.showAction.bind(this,l.action):void 0,this.actions.push(l),this.restoreActionForm()}addItem(){this.items.push(this.generateNewItem(this.items.length+1))}changeAction(o){this.titleAction=o}changeActionOptions(){this.propertiesOptions=this.propertiesOptions.map(o=>o.value==="hideSelectAll"?J(U({},o),{disabled:!this.properties.includes("select")}):o)}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}restore(){this.actions=[],this.componentsSize="medium",this.items=[],this.height=void 0,this.literals="",this.properties=[],this.propertyLink="url",this.propertyLinkValue="",this.propertyTitle="",this.titleAction="",this.restoreActionForm()}showMore(){this.addItem()}generateNewItem(o){return{name:`Register ${o}`,email:`register${o}@po-ui.com`,phone:`(55) ${o}234567`,location:"Brazil",company:`Company ${o}`,url:this.propertyLinkValue,zipCode:`${o}221`}}restoreActionForm(){this.action={label:"",visible:null}}showAction(o){this.poNotification.success(`Action clicked: ${o}`)}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-list-view-labs"]],standalone:!1,decls:35,vars:30,consts:[["propertiesForm","ngForm"],["actionForm","ngForm"],[3,"p-show-more","p-title-action","p-actions","p-components-size","p-height","p-hide-select-all","p-items","p-literals","p-property-link","p-property-title","p-select","p-show-more-disabled"],["p-list-view-content-template",""],["p-list-view-detail-template",""],[1,"po-row"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","propertyTitle","p-help","Ex.: email","p-label","Property title",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","height","p-help","Ex.: 200","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","propertyLinkValue","p-help",'Ex.: "http://po.com.br"',"p-label","Title Link",1,"po-md-6",3,"ngModelChange","ngModel"],["name","literals","p-help",'Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","size","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","4","p-label","Properties","p-help",'To enable the "Hide Select All" option, you must select the "Select" option first.',1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-4","po-lg-3",3,"p-click","p-disabled"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-label","Name",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Email",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Location",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Phone",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Company",1,"po-md-6","po-lg-3",3,"p-value"],["p-label","Zip Code",1,"po-md-6","po-lg-3",3,"p-value"]],template:function(l,n){if(l&1){let d=Q();i(0,"po-list-view",2),u("p-show-more",function(){return n.showMore()})("p-title-action",function(){return n.changeAction("p-title-action")}),P(1,ze,5,4,"ng-template",3)(2,Ne,3,2,"ng-template",4),e(),r(3,"po-divider"),i(4,"div",5)(5,"po-button",6),u("p-click",function(){return n.addItem()}),e()(),r(6,"po-divider"),i(7,"div",5),r(8,"po-info",7),e(),r(9,"po-divider"),i(10,"form",null,0)(12,"div",5)(13,"po-select",8),v("ngModelChange",function(p){return g(d),E(n.propertyTitle,p)||(n.propertyTitle=p),b(p)}),e(),i(14,"po-number",9),v("ngModelChange",function(p){return g(d),E(n.height,p)||(n.height=p),b(p)}),u("p-change",function(){return n.changeLiterals()}),e(),i(15,"po-input",10),v("ngModelChange",function(p){return g(d),E(n.propertyLinkValue,p)||(n.propertyLinkValue=p),b(p)}),e(),i(16,"po-input",11),v("ngModelChange",function(p){return g(d),E(n.literals,p)||(n.literals=p),b(p)}),u("p-change",function(){return n.changeLiterals()}),e(),i(17,"po-radio-group",12),v("ngModelChange",function(p){return g(d),E(n.componentsSize,p)||(n.componentsSize=p),b(p)}),e()(),i(18,"div",5)(19,"po-checkbox-group",13),v("ngModelChange",function(p){return g(d),E(n.properties,p)||(n.properties=p),b(p)}),u("p-change",function(){return n.changeActionOptions()}),e()()(),r(20,"po-divider"),i(21,"form",null,1)(23,"div",5)(24,"po-input",14),v("ngModelChange",function(p){return g(d),E(n.action.action,p)||(n.action.action=p),b(p)}),e(),i(25,"po-input",15),v("ngModelChange",function(p){return g(d),E(n.action.label,p)||(n.action.label=p),b(p)}),e(),i(26,"po-input",16),v("ngModelChange",function(p){return g(d),E(n.action.url,p)||(n.action.url=p),b(p)}),e(),i(27,"po-select",17),v("ngModelChange",function(p){return g(d),E(n.action.type,p)||(n.action.type=p),b(p)}),e(),i(28,"po-select",18),v("ngModelChange",function(p){return g(d),E(n.action.icon,p)||(n.action.icon=p),b(p)}),e(),i(29,"po-checkbox-group",19),v("ngModelChange",function(p){return g(d),E(n.action,p)||(n.action=p),b(p)}),e()(),i(30,"div",5)(31,"po-button",20),u("p-click",function(){return n.addAction(n.action)}),e()()(),r(32,"po-divider"),i(33,"div",5)(34,"po-button",21),u("p-click",function(){return g(d),q(22).reset(),b(n.restore())}),e()()}if(l&2){let d=q(22);m("p-actions",n.actions)("p-components-size",n.componentsSize)("p-height",n.height)("p-hide-select-all",n.properties.includes("hideSelectAll"))("p-items",n.items)("p-literals",n.customLiterals)("p-property-link",n.propertyLink)("p-property-title",n.propertyTitle)("p-select",n.properties.includes("select"))("p-show-more-disabled",n.properties.includes("showMoreDisabled")),s(8),m("p-value",n.titleAction),s(5),S("ngModel",n.propertyTitle),m("p-options",n.propertyTitleOptions),s(),S("ngModel",n.height),s(),S("ngModel",n.propertyLinkValue),s(),S("ngModel",n.literals),s(),S("ngModel",n.componentsSize),m("p-options",n.componentsSizeOptions),s(2),S("ngModel",n.properties),m("p-options",n.propertiesOptions),s(5),S("ngModel",n.action.action),s(),S("ngModel",n.action.label),s(),S("ngModel",n.action.url),s(),S("ngModel",n.action.type),m("p-options",n.typeOptions),s(),S("ngModel",n.action.icon),m("p-options",n.iconOptions),s(),S("ngModel",n.action),m("p-options",n.actionOptions),s(2),m("p-disabled",d.invalid)}},dependencies:[pe,ae,le,se,re,ge,ce,be,Se,ve,fe,we,M,T,D,B],encapsulation:2})}return a})();var Re=a=>({"docs-sample-code-tabs":a}),Ve=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-list-view-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO List View Labs"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-list-view-labs/sample-po-list-view-labs.component.html"),e(),i(13,"pre",7),t(14,`<po-list-view
  [p-actions]="actions"
  [p-components-size]="componentsSize"
  [p-height]="height"
  [p-hide-select-all]="properties.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-property-link]="propertyLink"
  [p-property-title]="propertyTitle"
  [p-select]="properties.includes('select')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  (p-show-more)="showMore()"
  (p-title-action)="changeAction('p-title-action')"
>
  <ng-template p-list-view-content-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Name" [p-value]="item.name"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Email" [p-value]="item.email"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Location" [p-value]="item.location"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Phone" [p-value]="item.phone"> </po-info>
    </div>
  </ng-template>

  <ng-template p-list-view-detail-template let-item>
    <div class="po-row">
      <po-info class="po-md-6 po-lg-3" p-label="Company" [p-value]="item.company"> </po-info>

      <po-info class="po-md-6 po-lg-3" p-label="Zip Code" [p-value]="item.zipCode"> </po-info>
    </div>
  </ng-template>
</po-list-view>

<po-divider />

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="titleAction"> </po-info>
</div>

<po-divider />

<form #propertiesForm="ngForm">
  <div class="po-row">
    <po-select
      class="po-md-6 po-lg-3"
      name="propertyTitle"
      [(ngModel)]="propertyTitle"
      p-help="Ex.: email"
      p-label="Property title"
      [p-options]="propertyTitleOptions"
    >
    </po-select>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-help="Ex.: 200"
      p-label="Height"
      (p-change)="changeLiterals()"
    >
    </po-number>

    <po-input
      class="po-md-6"
      name="propertyLinkValue"
      [(ngModel)]="propertyLinkValue"
      p-help='Ex.: "http://po.com.br"'
      p-label="Title Link"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: { "hideDetails": "Esconder detalhes", "showDetails": "Ver detalhes", "loadMoreData": "Ver mais", "noData": "Sem itens cadastrados" }'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-radio-group
      class="po-lg-6"
      name="size"
      [(ngModel)]="componentsSize"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-label="Properties"
      p-help='To enable the "Hide Select All" option, you must select the "Select" option first.'
      [p-options]="propertiesOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>
</form>

<po-divider />

<form #actionForm="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required> </po-input>

    <po-input class="po-md-6" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

    <po-select class="po-md-6 po-lg-3" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
    </po-select>

    <po-select class="po-md-6 po-lg-3" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
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
      class="po-md-4 po-lg-3"
      p-label="Add Action"
      [p-disabled]="actionForm.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="actionForm.reset(); restore()"> </po-button>
</div>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-list-view-labs/sample-po-list-view-labs.component.ts"),e(),i(19,"pre",9),t(20,`import { Component, OnInit, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoListViewAction,
  PoListViewLiterals,
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-list-view-labs',
  templateUrl: './sample-po-list-view-labs.component.html',
  standalone: false
})
export class SamplePoListViewLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoListViewAction;
  actions: Array<PoListViewAction>;
  componentsSize: string = 'medium';
  customLiterals: PoListViewLiterals;
  height: number;
  items: Array<any>;
  literals: string;
  properties: Array<string>;
  propertyLink: string;
  propertyLinkValue: string;
  propertyTitle: string;
  titleAction: string;

  propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'select', label: 'Select' },
    { value: 'hideSelectAll', label: 'Hide Select All', disabled: true },
    { value: 'showMoreDisabled', label: 'Show More Disabled' }
  ];

  readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'fa fa-podcast', label: 'fa fa-podcast' }
  ];

  readonly propertyTitleOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'name' },
    { value: 'email', label: 'email' },
    { value: 'phone', label: 'phone' },
    { value: 'location', label: 'location' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Default', value: 'default' },
    { label: 'Danger', value: 'danger' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoListViewAction) {
    const newAction = Object.assign({}, action);
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    this.actions.push(newAction);
    this.restoreActionForm();
  }

  addItem() {
    this.items.push(this.generateNewItem(this.items.length + 1));
  }

  changeAction(action) {
    this.titleAction = action;
  }

  changeActionOptions() {
    this.propertiesOptions = this.propertiesOptions.map(propertyOption => {
      if (propertyOption.value === 'hideSelectAll') {
        return { ...propertyOption, disabled: !this.properties.includes('select') };
      } else {
        return propertyOption;
      }
    });
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.actions = [];
    this.componentsSize = 'medium';
    this.items = [];
    this.height = undefined;
    this.literals = '';
    this.properties = [];
    this.propertyLink = 'url';
    this.propertyLinkValue = '';
    this.propertyTitle = '';
    this.titleAction = '';
    this.restoreActionForm();
  }

  showMore() {
    this.addItem();
  }

  private generateNewItem(index) {
    return {
      name: \`Register \${index}\`,
      email: \`register\${index}@po-ui.com\`,
      phone: \`(55) \${index}234567\`,
      location: 'Brazil',
      company: \`Company \${index}\`,
      url: this.propertyLinkValue,
      zipCode: \`\${index}221\`
    };
  }

  private restoreActionForm() {
    this.action = {
      label: '',
      visible: null
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),i(21,"div",10),r(22,"sample-po-list-view-labs"),e(),r(23,"hr")),l&2&&(s(5),L("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel),s(),m("ngClass",V(4,Re,n.hideSampleCodeTabs)))},dependencies:[A,x,C,y,_e],encapsulation:2})}return a})();var G=(()=>{class a{getItems(){return[{hireStatus:"hired",name:"James Johnson",city:"Ontario",age:24,idCard:"AB34lxi90",email:"james@johnson.com",telephone:"1-541-754-3010",jobDescription:"Systems Analyst",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Brian Brown",city:"Buffalo",age:23,idCard:"HG56lds54",email:"brian@brown.com",telephone:"1-543-456-9876",jobDescription:"Trainee",url:"https://po-ui.io/"},{hireStatus:"canceled",name:"Mary Davis",city:"Albany",age:31,idCard:"DF23cfr65",email:"mary@davis.com",telephone:"1-521-223-3232",jobDescription:"Programmer"},{hireStatus:"progress",name:"Margaret Garcia",city:"New York",age:29,idCard:"GF45fgh34",email:"margaret@garcia.com",telephone:"1-541-344-2211",jobDescription:"Web developer",url:"https://po-ui.io/"},{hireStatus:"hired",name:"Emma Hall",city:"Ontario",age:34,idCard:"RF76jut21",email:"emma@hall.com",telephone:"1-555-321-3234",jobDescription:"Recruiter",url:"https://po-ui.io/"},{hireStatus:"progress",name:"Lucas Clark",city:"Utica",age:32,idCard:"HY21kgu65",email:"lucas@clark.com",telephone:"1-541-322-4343",jobDescription:"Consultant"},{hireStatus:"progress",name:"Ella Scott",city:"Ontario",age:24,idCard:"UL78flg68",email:"ella@scott.com",telephone:"1-229-324-3434",jobDescription:"DBA"},{hireStatus:"progress",name:"Chloe Walker",city:"Albany",age:29,idCard:"JH12oli98",email:"chloe@walker.com",telephone:"1-518-222-1212",jobDescription:"Programmer"}]}static \u0275fac=function(l){return new(l||a)};static \u0275prov=$({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ue=["detailsModal"];function Je(a,f){if(a&1&&(i(0,"div",6),r(1,"po-info",14)(2,"po-info",15)(3,"po-info",16),ie(4,"uppercase"),e()),a&2){let o=f.$implicit;s(),m("p-value",o.idCard),s(),m("p-value",o.jobDescription),s(),m("p-value",X(ne(4,4,o.hireStatus)))}}function $e(a,f){if(a&1&&(i(0,"div",6),r(1,"po-info",17)(2,"po-info",18),e()),a&2){let o=f.$implicit;s(),m("p-value",o.age),s(),m("p-value",o.city)}}var Ae=(()=>{class a{poNotification=F(H);hiringProcessesService=F(G);detailsModalElement;hiringProcesses;hiringProcessesFiltered;labelFilter="";modalDetail=!1;selectedActionItem={};titleDetailsModal="User Detail";actions=[{label:"Hire",action:this.hireCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),icon:"an an-check"},{label:"Cancel",action:this.cancelCandidate.bind(this),disabled:this.isHiredOrCanceled.bind(this),type:"danger",icon:"an an-x"}];pageActions=[{label:"Hire selected",action:this.updateCandidates.bind(this,this.hireCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-check"},{label:"Cancel selected",action:this.updateCandidates.bind(this,this.cancelCandidate),disabled:this.disableHireButton.bind(this),icon:"an an-x"}];filterSettings={action:this.hiringProcessesFilter.bind(this),placeholder:"Search"};ngOnInit(){this.hiringProcesses=this.hiringProcessesService.getItems(),this.hiringProcessesFiltered=[...this.hiringProcesses]}formatTitle(o){return`${o.idCard} - ${o.name}`}showDetail(o){return o.url}showDetailModal(o){this.setModalItem(o),this.detailsModalElement.open()}cancelCandidate(o){o.hireStatus="canceled",this.poNotification.error("Canceled candidate!")}disableHireButton(){return!this.hiringProcesses.find(o=>o.$selected)}hireCandidate(o){o.hireStatus="hired",this.poNotification.success("Hired candidate!")}hiringProcessesFilter(o){let l=typeof o=="string"?[o]:[...o];this.hiringProcessesFiltered=this.hiringProcesses.filter(n=>Object.keys(n).some(d=>!(n[d]instanceof Object)&&this.includeFilter(n[d],l)))}includeFilter(o,l){return l.some(n=>String(o).toLocaleLowerCase().includes(n.toLocaleLowerCase()))}isHiredOrCanceled(o){return o.hireStatus==="hired"||o.hireStatus==="canceled"}setModalItem(o){this.selectedActionItem=o,this.titleDetailsModal=`Get in touch with ${this.selectedActionItem.name}`}updateCandidates(o){this.hiringProcesses.forEach(l=>{if(l.$selected){switch(l.hireStatus){case"progress":o.call(this,l);break;case"hired":this.poNotification.warning("This candidate has already been hired.");break;case"canceled":this.poNotification.error("This candidate has already been disqualified.");break}l.$selected=!1}})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-list-view-hiring-processes"]],viewQuery:function(l,n){if(l&1&&Y(Ue,7),l&2){let d;Z(d=K())&&(n.detailsModalElement=d.first)}},standalone:!1,features:[ee([G])],decls:16,vars:11,consts:[["detailsModal",""],["p-title","Hiring processes",3,"p-actions","p-filter"],["p-hide-select-all","","p-property-link","url","p-property-title","name","p-select","",3,"p-title-action","p-actions","p-items"],["p-list-view-content-template","",3,"p-title"],["p-list-view-detail-template","",3,"p-show-detail"],[3,"p-title"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl","p-src","assets/graphics/avatar2.png"],[1,"po-md-7","po-lg-8"],[1,"po-mb-1"],[3,"p-value","p-type"],["p-label","Email",3,"p-value"],["p-label","Telephone",3,"p-value"],["p-label","Id Card",1,"po-lg-4",3,"p-value"],["p-label","Job description",1,"po-lg-4",3,"p-value"],["p-label","Hire status",1,"po-lg-4",3,"p-value"],["p-label","Age",1,"po-md-6",3,"p-value"],["p-label","City",1,"po-md-6",3,"p-value"]],template:function(l,n){l&1&&(i(0,"po-page-list",1)(1,"po-list-view",2),u("p-title-action",function(c){return n.showDetailModal(c)}),P(2,Je,5,6,"ng-template",3)(3,$e,3,2,"ng-template",4),e(),i(4,"po-modal",5,0)(6,"div",6)(7,"div",7),r(8,"po-avatar",8),e(),i(9,"div",9)(10,"div",10),r(11,"po-tag",11),e(),i(12,"div",10),r(13,"po-info",12),e(),i(14,"div",10),r(15,"po-info",13),e()()()()()),l&2&&(m("p-actions",n.pageActions)("p-filter",n.filterSettings),s(),m("p-actions",n.actions)("p-items",n.hiringProcessesFiltered),s(),m("p-title",n.formatTitle),s(),m("p-show-detail",n.showDetail),s(),m("p-title",n.titleDetailsModal),s(7),m("p-value",n.selectedActionItem.hireStatus)("p-type",n.selectedActionItem.hireStatus==="hired"?"success":"info"),s(2),m("p-value",n.selectedActionItem.email),s(2),m("p-value",n.selectedActionItem.telephone))},dependencies:[he,ue,M,T,D,B,Ee,ye,oe],encapsulation:2})}return a})();var Ye=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-list-view-hiring-processes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(r(0,"br"),i(1,"blockquote",0)(2,"label",1),t(3,"PO List View - Hiring Processes"),e(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),t(6),e()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.html"),e(),i(13,"pre",7),t(14,`<po-page-list p-title="Hiring processes" [p-actions]="pageActions" [p-filter]="filterSettings">
  <po-list-view
    p-hide-select-all
    p-property-link="url"
    p-property-title="name"
    p-select
    [p-actions]="actions"
    [p-items]="hiringProcessesFiltered"
    (p-title-action)="showDetailModal($event)"
  >
    <ng-template p-list-view-content-template let-item [p-title]="formatTitle">
      <div class="po-row">
        <po-info class="po-lg-4" p-label="Id Card" [p-value]="item.idCard"></po-info>

        <po-info class="po-lg-4" p-label="Job description" [p-value]="item.jobDescription"></po-info>

        <po-info class="po-lg-4" p-label="Hire status" p-value="{ { item.hireStatus | uppercase }}"></po-info>
      </div>
    </ng-template>

    <ng-template p-list-view-detail-template let-item [p-show-detail]="showDetail">
      <div class="po-row">
        <po-info class="po-md-6" p-label="Age" [p-value]="item.age"></po-info>

        <po-info class="po-md-6" p-label="City" [p-value]="item.city"></po-info>
      </div>
    </ng-template>
  </po-list-view>

  <po-modal #detailsModal [p-title]="titleDetailsModal">
    <div class="po-row">
      <div class="po-md-5 po-lg-4">
        <po-avatar p-size="xl" p-src="assets/graphics/avatar2.png"></po-avatar>
      </div>
      <div class="po-md-7 po-lg-8">
        <div class="po-mb-1">
          <po-tag
            [p-value]="selectedActionItem['hireStatus']"
            [p-type]="selectedActionItem['hireStatus'] === 'hired' ? 'success' : 'info'"
          >
          </po-tag>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Email" [p-value]="selectedActionItem['email']"> </po-info>
        </div>
        <div class="po-mb-1">
          <po-info p-label="Telephone" [p-value]="selectedActionItem['telephone']"> </po-info>
        </div>
      </div>
    </div>
  </po-modal>
</po-page-list>
`),e()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.component.ts"),e(),i(19,"pre",9),t(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  PoListViewAction,
  PoModalComponent,
  PoNotificationService,
  PoPageAction,
  PoPageFilter
} from '@po-ui/ng-components';

import { SamplePoListViewHiringProcessesService } from './sample-po-list-view-hiring-processes.service';

@Component({
  selector: 'sample-po-list-view-hiring-processes',
  templateUrl: 'sample-po-list-view-hiring-processes.component.html',
  providers: [SamplePoListViewHiringProcessesService],
  standalone: false
})
export class SamplePoListViewHiringProcessesComponent implements OnInit {
  private poNotification = inject(PoNotificationService);
  private hiringProcessesService = inject(SamplePoListViewHiringProcessesService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  hiringProcesses: Array<any>;
  hiringProcessesFiltered: Array<object>;
  labelFilter: string = '';
  modalDetail: boolean = false;
  selectedActionItem = {};
  titleDetailsModal: string = 'User Detail';

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Hire',
      action: this.hireCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel',
      action: this.cancelCandidate.bind(this),
      disabled: this.isHiredOrCanceled.bind(this),
      type: 'danger',
      icon: 'an an-x'
    }
  ];

  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Hire selected',
      action: this.updateCandidates.bind(this, this.hireCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-check'
    },
    {
      label: 'Cancel selected',
      action: this.updateCandidates.bind(this, this.cancelCandidate),
      disabled: this.disableHireButton.bind(this),
      icon: 'an an-x'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.hiringProcessesFilter.bind(this),
    placeholder: 'Search'
  };

  ngOnInit() {
    this.hiringProcesses = this.hiringProcessesService.getItems();
    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  formatTitle(item) {
    return \`\${item.idCard} - \${item.name}\`;
  }

  showDetail(item) {
    return item.url;
  }

  showDetailModal(item) {
    this.setModalItem(item);
    this.detailsModalElement.open();
  }

  private cancelCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'canceled';
    this.poNotification.error('Canceled candidate!');
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private hireCandidate(selectedCandidate) {
    selectedCandidate['hireStatus'] = 'hired';
    this.poNotification.success('Hired candidate!');
  }

  private hiringProcessesFilter(labelFilter: string | Array<string>) {
    const filters = typeof labelFilter === 'string' ? [labelFilter] : [...labelFilter];

    this.hiringProcessesFiltered = this.hiringProcesses.filter(item =>
      Object.keys(item).some(key => !(item[key] instanceof Object) && this.includeFilter(item[key], filters))
    );
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  private isHiredOrCanceled(candidate): boolean {
    return candidate['hireStatus'] === 'hired' || candidate['hireStatus'] === 'canceled';
  }

  private setModalItem(listItem) {
    this.selectedActionItem = listItem;
    this.titleDetailsModal = \`Get in touch with \${this.selectedActionItem['name']}\`;
  }

  private updateCandidates(action: Function) {
    this.hiringProcesses.forEach(candidate => {
      if (candidate['$selected']) {
        switch (candidate['hireStatus']) {
          case 'progress':
            action.call(this, candidate);
            break;

          case 'hired':
            this.poNotification.warning('This candidate has already been hired.');
            break;

          case 'canceled':
            this.poNotification.error('This candidate has already been disqualified.');
            break;
        }

        candidate['$selected'] = false;
      }
    });
  }
}
`),e(),i(21,"label",6),t(22,"sample-po-list-view-hiring-processes/sample-po-list-view-hiring-processes.service.ts"),e(),i(23,"pre",9),t(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SamplePoListViewHiringProcessesService {
  getItems() {
    return [
      {
        hireStatus: 'hired',
        name: 'James Johnson',
        city: 'Ontario',
        age: 24,
        idCard: 'AB34lxi90',
        email: 'james@johnson.com',
        telephone: '1-541-754-3010',
        jobDescription: 'Systems Analyst',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Brian Brown',
        city: 'Buffalo',
        age: 23,
        idCard: 'HG56lds54',
        email: 'brian@brown.com',
        telephone: '1-543-456-9876',
        jobDescription: 'Trainee',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'canceled',
        name: 'Mary Davis',
        city: 'Albany',
        age: 31,
        idCard: 'DF23cfr65',
        email: 'mary@davis.com',
        telephone: '1-521-223-3232',
        jobDescription: 'Programmer'
      },
      {
        hireStatus: 'progress',
        name: 'Margaret Garcia',
        city: 'New York',
        age: 29,
        idCard: 'GF45fgh34',
        email: 'margaret@garcia.com',
        telephone: '1-541-344-2211',
        jobDescription: 'Web developer',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'hired',
        name: 'Emma Hall',
        city: 'Ontario',
        age: 34,
        idCard: 'RF76jut21',
        email: 'emma@hall.com',
        telephone: '1-555-321-3234',
        jobDescription: 'Recruiter',
        url: 'https://po-ui.io/'
      },
      {
        hireStatus: 'progress',
        name: 'Lucas Clark',
        city: 'Utica',
        age: 32,
        idCard: 'HY21kgu65',
        email: 'lucas@clark.com',
        telephone: '1-541-322-4343',
        jobDescription: 'Consultant'
      },
      {
        hireStatus: 'progress',
        name: 'Ella Scott',
        city: 'Ontario',
        age: 24,
        idCard: 'UL78flg68',
        email: 'ella@scott.com',
        telephone: '1-229-324-3434',
        jobDescription: 'DBA'
      },
      {
        hireStatus: 'progress',
        name: 'Chloe Walker',
        city: 'Albany',
        age: 29,
        idCard: 'JH12oli98',
        email: 'chloe@walker.com',
        telephone: '1-518-222-1212',
        jobDescription: 'Programmer'
      }
    ];
  }
}
`),e()()()()(),i(25,"div",10),r(26,"sample-po-list-view-hiring-processes"),e(),r(27,"hr")),l&2&&(s(5),L("po-icon "+n.sampleCodeButtonIcon),s(),_(" ",n.sampleCodeButtonLabel),s(),m("ngClass",V(4,Ye,n.hideSampleCodeTabs)))},dependencies:[A,x,C,y,Ae],encapsulation:2})}return a})();var De=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=h({type:a,selectors:[["sample-po-list-view-doc"]],standalone:!1,decls:726,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-list-view-content-template"],["href","/documentation/po-list-view-detail-template"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoListViewAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoListViewLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoListViewModule } from '@po-ui/ng-components';"),e()(),i(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),i(7,"code"),t(8,"po-list-view"),e(),t(9,"."),e(),i(10,"blockquote")(11,"p"),t(12,"Para o correto funcionamento do componente "),i(13,"code"),t(14,"po-list-view"),e(),t(15,", deve ser importado o m\xF3dulo "),i(16,"code"),t(17,"BrowserAnimationsModule"),e(),t(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),e()(),i(19,"p"),t(20,"M\xF3dulo da aplica\xE7\xE3o:"),e(),i(21,"pre")(22,"code"),t(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),e()(),i(24,"p"),t(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),e(),i(26,"pre")(27,"code"),t(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),e()()(),i(29,"h3",3),t(30,"Componente"),e(),i(31,"h4",4)(32,"code",5),t(33,"PoListViewComponent"),e()(),i(34,"div",2)(35,"p"),t(36,`Componente de lista que recebe um array de objetos e renderiza de forma din\xE2mica os dados de
acordo com a necessidade de cada tela e deve ser utilizado em conjunto com as diretivas de `),i(37,"em"),t(38,"templates"),e(),i(39,"strong")(40,"a",6),t(41,"p-list-view-content-template"),e()(),t(42,` e
`),i(43,"strong")(44,"a",7),t(45,"p-list-view-detail-template"),e()(),t(46,"."),e(),i(47,"p"),t(48,`O componente disponibiliza uma \xE1rea espec\xEDfica para exibi\xE7\xE3o informa\xE7\xF5es adicionais,
atrav\xE9s da diretiva `),i(49,"strong")(50,"a",7),t(51,"p-list-view-detail-template"),e()(),t(52,". "),e()(),i(53,"div",8)(54,"h4",9),t(55,"Seletor"),e(),i(56,"pre",10),t(57,`<po-list-view
    p-actions="PoListViewAction[]"
    p-components-size="string"
    p-height="number"
    p-hide-select-all="boolean"
    p-items="any[]"
    p-literals="PoListViewLiterals"
    p-property-link="string"
    p-property-title="string"
    p-select="boolean"
    (p-show-detail)="EventEmitter"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    (p-title-action)="EventEmitter" >
</po-list-view>
`),e()(),i(58,"h4",11),t(59,"Propriedades"),e(),i(60,"table",12)(61,"tr",13)(62,"th",14),t(63,"Nome"),e(),i(64,"th",14),t(65,"Tipo"),e(),i(66,"th",14),t(67,"Padr\xE3o"),e(),i(68,"th",14),t(69,"Descri\xE7\xE3o"),e()(),i(70,"tr",15)(71,"td",16)(72,"div",17)(73,"span",18),t(74," p-actions"),r(75,"br"),e()()(),i(76,"td",19)(77,"code",20),t(78,"PoListViewAction[]"),e()(),i(79,"td",21),t(80,"-"),e(),i(81,"td",22)(82,"em")(83,"strong"),t(84,"(opcional)"),e()(),i(85,"p"),t(86,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),e()()(),i(87,"tr",15)(88,"td",16)(89,"div",17)(90,"span",18),t(91," p-components-size"),r(92,"br"),e()()(),i(93,"td",19)(94,"code",23),t(95,"string"),e()(),i(96,"td",21)(97,"p")(98,"code"),t(99,"medium"),e()()(),i(100,"td",22)(101,"em")(102,"strong"),t(103,"(opcional)"),e()(),i(104,"p"),t(105,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),i(106,"ul")(107,"li")(108,"code"),t(109,"small"),e(),t(110,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),i(111,"li")(112,"code"),t(113,"medium"),e(),t(114,": aplica a medida medium de cada componente."),e()(),i(115,"blockquote")(116,"p"),t(117,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(118,"code"),t(119,"medium"),e(),t(120,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(121,"a",24),t(122,"po-theme"),e(),t(123,"."),e()()()(),i(124,"tr",15)(125,"td",16)(126,"div",17)(127,"span",18),t(128," p-height"),r(129,"br"),e()()(),i(130,"td",19)(131,"code",25),t(132,"number"),e()(),i(133,"td",21),t(134,"-"),e(),i(135,"td",22)(136,"em")(137,"strong"),t(138,"(opcional)"),e()(),i(139,"p"),t(140,"Define a altura do "),i(141,"code"),t(142,"po-list-view"),e(),t(143," em "),i(144,"em"),t(145,"pixels"),e(),t(146,"."),e()()(),i(147,"tr",15)(148,"td",16)(149,"div",17)(150,"span",18),t(151," p-hide-select-all"),r(152,"br"),e()()(),i(153,"td",19)(154,"code",26),t(155,"boolean"),e()(),i(156,"td",21)(157,"p")(158,"code"),t(159,"false"),e()()(),i(160,"td",22)(161,"p"),t(162,"Esconde o "),i(163,"em"),t(164,"checkbox"),e(),t(165," para sele\xE7\xE3o de todos os itens."),e()()(),i(166,"tr",15)(167,"td",16)(168,"div",17)(169,"span",18),t(170," p-items"),r(171,"br"),e()()(),i(172,"td",19)(173,"code",27),t(174,"any[]"),e()(),i(175,"td",21),t(176,"-"),e(),i(177,"td",22)(178,"p"),t(179,"Lista de itens que ser\xE3o exibidos no componente."),e()()(),i(180,"tr",15)(181,"td",16)(182,"div",17)(183,"span",18),t(184," p-literals"),r(185,"br"),e()()(),i(186,"td",19)(187,"code",28),t(188,"PoListViewLiterals"),e()(),i(189,"td",21),t(190,"-"),e(),i(191,"td",22)(192,"em")(193,"strong"),t(194,"(opcional)"),e()(),i(195,"p"),t(196,"Objeto com as literais usadas no "),i(197,"code"),t(198,"po-list-view"),e(),t(199,"."),e(),i(200,"p"),t(201,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),i(202,"pre")(203,"code"),t(204,`const customLiterals: PoListViewLiterals = {
  hideDetail: 'Ocultar detalhes completamente',
  loadMoreData: 'Mais dados',
  showDetail: 'Mostrar mais detalhes',
  selectAll: 'Selecionar todos os itens'
};
`),e()(),i(205,"p"),t(206,"Ou passando apenas as literais que deseja customizar:"),e(),i(207,"pre")(208,"code"),t(209,`const customLiterals: PoListViewLiterals = {
  showDetail: 'Mostrar mais detalhes'
};
`),e()(),i(210,"p"),t(211,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),i(212,"pre")(213,"code"),t(214,`<po-list-view
  [p-literals]="customLiterals">
</po-list-view>
`),e()(),i(215,"blockquote")(216,"p"),t(217,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(218,"a",29)(219,"code"),t(220,"PoI18nService"),e()(),t(221," ou do browser."),e()()()(),i(222,"tr",15)(223,"td",16)(224,"div",17)(225,"span",18),t(226," p-property-link"),r(227,"br"),e()()(),i(228,"td",19)(229,"code",23),t(230,"string"),e()(),i(231,"td",21),t(232,"-"),e(),i(233,"td",22)(234,"em")(235,"strong"),t(236,"(opcional)"),e()(),i(237,"p"),t(238,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 usado como link para o t\xEDtulo."),e()()(),i(239,"tr",15)(240,"td",16)(241,"div",17)(242,"span",18),t(243," p-property-title"),r(244,"br"),e()()(),i(245,"td",19)(246,"code",23),t(247,"string"),e()(),i(248,"td",21),t(249,"-"),e(),i(250,"td",22)(251,"em")(252,"strong"),t(253,"(opcional)"),e()(),i(254,"p"),t(255,"Recebe uma propriedade que ser\xE1 utilizada para recuperar o valor do objeto que ser\xE1 exibido como o t\xEDtulo de cada item."),e()()(),i(256,"tr",15)(257,"td",16)(258,"div",17)(259,"span",18),t(260," p-select"),r(261,"br"),e()()(),i(262,"td",19)(263,"code",26),t(264,"boolean"),e()(),i(265,"td",21)(266,"p")(267,"code"),t(268,"false"),e()()(),i(269,"td",22)(270,"em")(271,"strong"),t(272,"(opcional)"),e()(),i(273,"p"),t(274,"Habilita um "),i(275,"em"),t(276,"checkbox"),e(),t(277," para cada item da lista. Todos os items possuem a propriedade din\xE2mica "),i(278,"code"),t(279,"$selected"),e(),t(280,` para identificar se o
item est\xE1 selecionado, por exemplo:`),e(),i(281,"pre")(282,"code"),t(283,`item.$selected

// ou

item['$selected']
`),e()()()(),i(284,"tr",15)(285,"td",16)(286,"div",30)(287,"span",31),t(288," (p-show-detail)"),r(289,"br"),e()()(),i(290,"td",19)(291,"code",32),t(292,"EventEmitter"),e()(),i(293,"td",21),t(294,"-"),e(),i(295,"td",22)(296,"em")(297,"strong"),t(298,"(opcional)"),e()(),i(299,"p"),t(300,"A\xE7\xE3o que ser\xE1 executada ao clicar no bot\xE3o exibir detalhes."),e(),i(301,"p"),t(302,"Ao ser disparado, o m\xE9todo passa como par\xE2metros os detalhes que ser\xE3o exibidos."),e()()(),i(303,"tr",15)(304,"td",16)(305,"div",30)(306,"span",31),t(307," (p-show-more)"),r(308,"br"),e()()(),i(309,"td",19)(310,"code",32),t(311,"EventEmitter"),e()(),i(312,"td",21),t(313,"-"),e(),i(314,"td",22)(315,"em")(316,"strong"),t(317,"(opcional)"),e()(),i(318,"p"),t(319,'Recebe uma a\xE7\xE3o, que ser\xE1 executada quando clicar no bot\xE3o "Carregar mais resultados".'),e(),i(320,"blockquote")(321,"p"),t(322,"Caso nenhuma a\xE7\xE3o for definida o mesmo n\xE3o ficar\xE1 vis\xEDvel."),e()()()(),i(323,"tr",15)(324,"td",16)(325,"div",17)(326,"span",18),t(327," p-show-more-disabled"),r(328,"br"),e()()(),i(329,"td",19)(330,"code",26),t(331,"boolean"),e()(),i(332,"td",21),t(333,"-"),e(),i(334,"td",22)(335,"em")(336,"strong"),t(337,"(opcional)"),e()(),i(338,"p"),t(339,"Indica que o bot\xE3o "),i(340,"code"),t(341,"Carregar Mais Resultados"),e(),t(342," ser\xE1 desabilitado."),e()()(),i(343,"tr",15)(344,"td",16)(345,"div",30)(346,"span",31),t(347," (p-title-action)"),r(348,"br"),e()()(),i(349,"td",19)(350,"code",32),t(351,"EventEmitter"),e()(),i(352,"td",21),t(353,"-"),e(),i(354,"td",22)(355,"em")(356,"strong"),t(357,"(opcional)"),e()(),i(358,"p"),t(359,"A\xE7\xE3o que ser\xE1 executada ao clicar no t\xEDtulo."),e(),i(360,"p"),t(361,"Ao ser disparado, o m\xE9todo inserido na a\xE7\xE3o ir\xE1 receber como par\xE2metro o item da lista clicado."),e()()()(),i(362,"h3"),t(363,"Interfaces"),e(),i(364,"h4",33)(365,"code",5),t(366,"PoListViewAction"),e()(),i(367,"div",2)(368,"p"),t(369,"Interface que define as a\xE7\xF5es do componente "),i(370,"code"),t(371,"po-list-view"),e(),t(372,"."),e(),i(373,"blockquote")(374,"p"),t(375,"As propriedades "),i(376,"code"),t(377,"subItems"),e(),t(378,", "),i(379,"code"),t(380,"separator"),e(),t(381,", "),i(382,"code"),t(383,"url"),e(),t(384," e "),i(385,"code"),t(386,"selected"),e(),t(387,` ser\xE3o vistas a partir da terceira a\xE7\xE3o e somente quando
definir quatro a\xE7\xF5es ou mais.`),e()()(),i(388,"h4",11),t(389,"Propriedades"),e(),i(390,"table",12)(391,"tr",13)(392,"th",14),t(393,"Nome"),e(),i(394,"th",14),t(395,"Tipo"),e(),i(396,"th",14),t(397,"Descri\xE7\xE3o"),e()(),i(398,"tr",15)(399,"td",16)(400,"div",17)(401,"span",18),t(402," action"),r(403,"br"),e()()(),i(404,"td",19)(405,"code",34),t(406,"Function"),e()(),i(407,"td",22)(408,"em")(409,"strong"),t(410,"(opcional)"),e()(),i(411,"p"),t(412,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),i(413,"p"),t(414,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),i(415,"code"),t(416,"subItems"),e(),t(417,"."),e(),i(418,"blockquote")(419,"p"),t(420,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),i(421,"em"),t(422,"bind"),e(),t(423,`:
`),i(424,"code"),t(425,"action: this.myFunction.bind(this)"),e()()()()(),i(426,"tr",15)(427,"td",16)(428,"div",17)(429,"span",18),t(430," disabled"),r(431,"br"),e()()(),i(432,"td",19)(433,"code",26),t(434,"boolean "),e(),i(435,"code",34),t(436," Function"),e()(),i(437,"td",22)(438,"em")(439,"strong"),t(440,"(opcional)"),e()(),i(441,"p"),t(442,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),e()()(),i(443,"tr",15)(444,"td",16)(445,"div",17)(446,"span",18),t(447," icon"),r(448,"br"),e()()(),i(449,"td",19)(450,"code",23),t(451,"string "),e(),i(452,"code",35),t(453," TemplateRef<void>"),e()(),i(454,"td",22)(455,"em")(456,"strong"),t(457,"(opcional)"),e()(),i(458,"p"),t(459,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),e(),i(460,"p"),t(461,"Aceita \xEDcones da "),i(462,"a",36),t(463,"Biblioteca de \xEDcones"),e(),t(464,`, fontes externas (ex: Font Awesome)
ou um `),i(465,"code"),t(466,"TemplateRef"),e(),t(467," para \xEDcones customizados."),e(),i(468,"pre")(469,"code"),t(470,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),e()()()(),i(471,"tr",15)(472,"td",16)(473,"div",17)(474,"span",18),t(475," label"),r(476,"br"),e()()(),i(477,"td",19)(478,"code",23),t(479,"string"),e()(),i(480,"td",22)(481,"p"),t(482,"R\xF3tulo da a\xE7\xE3o."),e(),i(483,"p"),t(484,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),i(485,"code"),t(486,"subItems"),e(),t(487,"."),e()()(),i(488,"tr",15)(489,"td",16)(490,"div",17)(491,"span",18),t(492," selected"),r(493,"br"),e()()(),i(494,"td",19)(495,"code",26),t(496,"boolean"),e()(),i(497,"td",22)(498,"em")(499,"strong"),t(500,"(opcional)"),e()(),i(501,"p"),t(502,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),i(503,"tr",15)(504,"td",16)(505,"div",17)(506,"span",18),t(507," separator"),r(508,"br"),e()()(),i(509,"td",19)(510,"code",26),t(511,"boolean"),e()(),i(512,"td",22)(513,"em")(514,"strong"),t(515,"(opcional)"),e()(),i(516,"p"),t(517,"Atribui uma linha separadora acima do item."),e()()(),i(518,"tr",15)(519,"td",16)(520,"div",17)(521,"span",18),t(522," subItems"),r(523,"br"),e()()(),i(524,"td",19)(525,"code",37),t(526,"Array<PoPopupAction>"),e()(),i(527,"td",22)(528,"em")(529,"strong"),t(530,"(opcional)"),e()(),i(531,"p"),t(532,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),e(),i(533,"p"),t(534,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),e(),i(535,"blockquote")(536,"p"),t(537,"As propriedades "),i(538,"code"),t(539,"disabled"),e(),t(540,", "),i(541,"code"),t(542,"type"),e(),t(543," e "),i(544,"code"),t(545,"visible"),e(),t(546," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),e()(),i(547,"blockquote")(548,"p"),t(549,"Quando "),i(550,"code"),t(551,"url"),e(),t(552," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),e()(),i(553,"blockquote")(554,"p"),t(555,"Em subn\xEDveis aninhados, o "),i(556,"code"),t(557,"icon"),e(),t(558," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),e()()()(),i(559,"tr",15)(560,"td",16)(561,"div",17)(562,"span",18),t(563," type"),r(564,"br"),e()()(),i(565,"td",19)(566,"code",23),t(567,"string"),e()(),i(568,"td",22)(569,"em")(570,"strong"),t(571,"(opcional)"),e()(),i(572,"p"),t(573,"Define a cor do item."),e(),i(574,"p"),t(575,"Valores v\xE1lidos:"),e(),i(576,"ul")(577,"li")(578,"code"),t(579,"default"),e()(),i(580,"li")(581,"code"),t(582,"danger"),e()()()()(),i(583,"tr",15)(584,"td",16)(585,"div",17)(586,"span",18),t(587," url"),r(588,"br"),e()()(),i(589,"td",19)(590,"code",23),t(591,"string"),e()(),i(592,"td",22)(593,"em")(594,"strong"),t(595,"(opcional)"),e()(),i(596,"p"),t(597,"URL para redirecionamento. Aceita rotas internas e links externos."),e(),i(598,"p"),t(599,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(600,"code"),t(601,"url"),e(),t(602," \xE9 informada em um agrupador, o clique "),i(603,"strong"),t(604,"n\xE3o abrir\xE1 os subitens"),e(),t(605,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),e(),i(606,"blockquote")(607,"p"),t(608,"Quando informada, tem prioridade sobre a propriedade "),i(609,"code"),t(610,"action"),e(),t(611,"."),e()()()(),i(612,"tr",15)(613,"td",16)(614,"div",17)(615,"span",18),t(616," visible"),r(617,"br"),e()()(),i(618,"td",19)(619,"code",26),t(620,"boolean "),e(),i(621,"code",34),t(622," Function"),e()(),i(623,"td",22)(624,"em")(625,"strong"),t(626,"(opcional)"),e()(),i(627,"p"),t(628,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),e()()()(),i(629,"h4",33)(630,"code",5),t(631,"PoListViewLiterals"),e()(),i(632,"div",2)(633,"p"),t(634,"Interface para defini\xE7\xE3o das literais usadas no "),i(635,"code"),t(636,"po-list-view"),e(),t(637,"."),e()(),i(638,"h4",11),t(639,"Propriedades"),e(),i(640,"table",12)(641,"tr",13)(642,"th",14),t(643,"Nome"),e(),i(644,"th",14),t(645,"Tipo"),e(),i(646,"th",14),t(647,"Descri\xE7\xE3o"),e()(),i(648,"tr",15)(649,"td",16)(650,"div",17)(651,"span",18),t(652," hideDetails"),r(653,"br"),e()()(),i(654,"td",19)(655,"code",23),t(656,"string"),e()(),i(657,"td",22)(658,"em")(659,"strong"),t(660,"(opcional)"),e()(),i(661,"p"),t(662,"R\xF3tulo do bot\xE3o que oculta os detalhes do item."),e()()(),i(663,"tr",15)(664,"td",16)(665,"div",17)(666,"span",18),t(667," loadMoreData"),r(668,"br"),e()()(),i(669,"td",19)(670,"code",23),t(671,"string"),e()(),i(672,"td",22)(673,"em")(674,"strong"),t(675,"(opcional)"),e()(),i(676,"p"),t(677,"R\xF3tulo do bot\xE3o que deve carregar mais resultados."),e()()(),i(678,"tr",15)(679,"td",16)(680,"div",17)(681,"span",18),t(682," noData"),r(683,"br"),e()()(),i(684,"td",19)(685,"code",23),t(686,"string"),e()(),i(687,"td",22)(688,"em")(689,"strong"),t(690,"(opcional)"),e()(),i(691,"p"),t(692,"R\xF3tulo exibido quando n\xE3o existem itens para serem exibidos na lista."),e()()(),i(693,"tr",15)(694,"td",16)(695,"div",17)(696,"span",18),t(697," selectAll"),r(698,"br"),e()()(),i(699,"td",19)(700,"code",23),t(701,"string"),e()(),i(702,"td",22)(703,"em")(704,"strong"),t(705,"(opcional)"),e()(),i(706,"p"),t(707,"R\xF3tulo do "),i(708,"code"),t(709,"checkbox"),e(),t(710," da op\xE7\xE3o de selecionar todos."),e()()(),i(711,"tr",15)(712,"td",16)(713,"div",17)(714,"span",18),t(715," showDetails"),r(716,"br"),e()()(),i(717,"td",19)(718,"code",23),t(719,"string"),e()(),i(720,"td",22)(721,"em")(722,"strong"),t(723,"(opcional)"),e()(),i(724,"p"),t(725,"R\xF3tulo do bot\xE3o que exibe os detalhes do item."),e()()()()())},dependencies:[x],encapsulation:2})}return a})();var Te=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(j(me),j(de))};static \u0275cmp=h({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","List View",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),r(3,"sample-po-list-view-doc"),e(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),r(5,"sample-po-list-view-basic-view")(6,"sample-po-list-view-labs-view")(7,"sample-po-list-view-hiring-processes-view"),e()()()),l&2&&(m("p-actions",n.actions),s(2),m("p-active",n.activeTab==="doc"),s(2),m("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[Ce,C,y,Le,Ve,Me,De],encapsulation:2})}return a})();var Xe=[{path:"",component:Te}],ke=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=O({type:a});static \u0275inj=I({imports:[N.forChild(Xe),N]})}return a})();var Ft=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=O({type:a});static \u0275inj=I({imports:[xe,ke]})}return a})();export{Ft as DocPoListViewModule};
