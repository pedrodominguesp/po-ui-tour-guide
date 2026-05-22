import{o as P,p as Se}from"./chunk-WYOAC7KN.js";import{Fa as se,Hb as w,Ib as C,Ja as ce,L as pe,Mb as M,Ra as ue,S as me,Sa as ge,Ya as Ee,Za as be,_ as W,a as de,bb as R,ub as he,w as O,za as N}from"./chunk-XOCFD5XY.js";import{Ba as Q,Ca as K,Cb as ee,Da as X,Ea as s,Fa as n,Ga as t,Ha as a,I as k,L,Mb as T,Mc as te,Nc as ne,O as E,Oa as Y,Oc as ie,P as b,Pa as c,Pc as ae,Qc as oe,Va as q,Wa as z,Xa as B,_a as Z,bb as _,cb as e,cd as le,db as $,eb as y,ed as re,gb as h,gd as j,ha as d,hb as S,ib as x,ma as H,oa as g,pa as F,qb as V,rb as v,sb as I,ta as G}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var xe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-basic"]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&a(0,"po-widget")},dependencies:[M],encapsulation:2})}return o})();var We=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Widget Basic"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-widget-basic/sample-po-widget-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-widget></po-widget>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-widget-basic/sample-po-widget-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-widget-basic',
  templateUrl: './sample-po-widget-basic.component.html',
  standalone: false
})
export class SamplePoWidgetBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-widget-basic"),t(),a(23,"hr")),l&2&&(d(5),_("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel),d(),s("ngClass",v(4,We,i.hideSampleCodeTabs)))},dependencies:[T,P,w,C,xe],encapsulation:2})}return o})();var Le=(o,D)=>({src:o,size:D}),fe=(()=>{class o{poNotification=L(N);action;background;content;height;help;primaryLabel;properties;secondaryLabel;tagIcon;tagLabel;title;actionPopup={action:null,label:""};myActions=[];tagPosition;avatarSrc;avatarSize;propertiesOptions=[{value:"disabled",label:"Disabled"},{value:"primaryWidget",label:"Primary Widget"},{value:"small",label:"small"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];listTagPosition=[{label:"right",value:"right"},{label:"top",value:"top"},{label:"bottom",value:"bottom"}];listAvatarSize=[{label:"xs",value:"xs"},{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"}];ngOnInit(){this.restore()}changeAction(p){this.action=p}addAction(p){this.myActions=[...this.myActions,{label:p.label,action:this.showAction.bind(this,p.action)}],this.actionPopup={action:null,label:""}}restore(){this.background="",this.action="",this.content="",this.height=void 0,this.help="",this.title=void 0,this.primaryLabel=void 0,this.properties=[],this.myActions=[],this.secondaryLabel=void 0,this.tagLabel=void 0,this.tagIcon=void 0,this.actionPopup={action:null,label:""},this.tagPosition=void 0,this.avatarSrc=void 0,this.avatarSize=void 0}showAction(p){this.poNotification.success(`Action clicked: ${p}`)}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-labs"]],standalone:!1,decls:32,vars:39,consts:[["f","ngForm"],[1,"po-row"],[1,"po-sm-12",3,"p-on-disabled","p-primary-action","p-secondary-action","p-setting","p-title-action","p-background","p-disabled","p-size","p-height","p-help","p-primary","p-primary-label","p-secondary-label","p-tag","p-tag-icon","p-tag-position","p-title","p-actions","p-avatar"],["p-label","Action",1,"po-md-6",3,"p-value"],["name","title","p-label","Title","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","help","p-label","Help","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","height","p-label","Height","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","background","p-clean","","p-help","Ex.: 'http://image.com'; '../../image.png'","p-label","Background","p-clean","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","primaryLabel","p-label","Primary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","secondaryLabel","p-label","Secondary Label","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","sample-widget-align-end"],["name","tagLabel","p-label","Label Tag","p-clean","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","tagPosition","p-label","Tag Position",1,"po-md-4","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","avatarSrc","p-label","Avatar Src","p-help","https://picsum.photos/144/144","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","avatarSize","p-label","Avatar Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","properties","p-columns","3","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","content","p-label","Content",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let m=Y();n(0,"div",1)(1,"po-widget",2),c("p-on-disabled",function(){return i.changeAction("p-on-disabled")})("p-primary-action",function(){return i.changeAction("p-primary-action")})("p-secondary-action",function(){return i.changeAction("p-secondary-action")})("p-setting",function(){return i.changeAction("p-setting")})("p-title-action",function(){return i.changeAction("p-title-action")}),e(2),t()(),a(3,"po-divider"),n(4,"div",1),a(5,"po-info",3),t(),a(6,"po-divider"),n(7,"form",null,0)(9,"po-input",4),x("ngModelChange",function(r){return E(m),S(i.title,r)||(i.title=r),b(r)}),t(),n(10,"po-input",5),x("ngModelChange",function(r){return E(m),S(i.help,r)||(i.help=r),b(r)}),t(),n(11,"po-number",6),x("ngModelChange",function(r){return E(m),S(i.height,r)||(i.height=r),b(r)}),t(),n(12,"div",1)(13,"po-input",7),x("ngModelChange",function(r){return E(m),S(i.actionPopup.action,r)||(i.actionPopup.action=r),b(r)}),t(),n(14,"po-input",8),x("ngModelChange",function(r){return E(m),S(i.actionPopup.label,r)||(i.actionPopup.label=r),b(r)}),t()(),n(15,"div",1)(16,"po-button",9),c("p-click",function(){return i.addAction(i.actionPopup)}),t()(),n(17,"po-input",10),x("ngModelChange",function(r){return E(m),S(i.background,r)||(i.background=r),b(r)}),t(),n(18,"po-input",11),x("ngModelChange",function(r){return E(m),S(i.primaryLabel,r)||(i.primaryLabel=r),b(r)}),t(),n(19,"po-input",12),x("ngModelChange",function(r){return E(m),S(i.secondaryLabel,r)||(i.secondaryLabel=r),b(r)}),t(),n(20,"div",13)(21,"po-input",14),x("ngModelChange",function(r){return E(m),S(i.tagLabel,r)||(i.tagLabel=r),b(r)}),t(),n(22,"po-select",15),x("ngModelChange",function(r){return E(m),S(i.tagIcon,r)||(i.tagIcon=r),b(r)}),t(),n(23,"po-select",16),x("ngModelChange",function(r){return E(m),S(i.tagPosition,r)||(i.tagPosition=r),b(r)}),t()(),n(24,"div",1)(25,"po-input",17),x("ngModelChange",function(r){return E(m),S(i.avatarSrc,r)||(i.avatarSrc=r),b(r)}),t(),n(26,"po-select",18),x("ngModelChange",function(r){return E(m),S(i.avatarSize,r)||(i.avatarSize=r),b(r)}),t()(),n(27,"div",1)(28,"po-checkbox-group",19),x("ngModelChange",function(r){return E(m),S(i.properties,r)||(i.properties=r),b(r)}),t()(),n(29,"po-textarea",20),x("ngModelChange",function(r){return E(m),S(i.content,r)||(i.content=r),b(r)}),t(),n(30,"div",1)(31,"po-button",21),c("p-click",function(){return i.restore()}),t()()()}l&2&&(d(),s("p-background",i.background)("p-disabled",i.properties.includes("disabled"))("p-size",i.properties.includes("small")?"small":"medium")("p-height",i.height)("p-help",i.help)("p-primary",i.properties.includes("primaryWidget"))("p-primary-label",i.primaryLabel)("p-secondary-label",i.secondaryLabel)("p-tag",i.tagLabel)("p-tag-icon",i.tagIcon)("p-tag-position",i.tagPosition)("p-title",i.title)("p-actions",i.myActions)("p-avatar",I(36,Le,i.avatarSrc,i.avatarSize)),d(),y(" ",i.content," "),d(3),s("p-value",i.action),d(4),h("ngModel",i.title),d(),h("ngModel",i.help),d(),h("ngModel",i.height),d(2),h("ngModel",i.actionPopup.action),d(),h("ngModel",i.actionPopup.label),d(2),s("p-disabled",!i.actionPopup.action||!i.actionPopup.label),d(),h("ngModel",i.background),d(),h("ngModel",i.primaryLabel),d(),h("ngModel",i.secondaryLabel),d(2),h("ngModel",i.tagLabel),d(),h("ngModel",i.tagIcon),s("p-options",i.iconList),d(),h("ngModel",i.tagPosition),s("p-options",i.listTagPosition),d(2),h("ngModel",i.avatarSrc),d(),h("ngModel",i.avatarSize),s("p-options",i.listAvatarSize),d(2),h("ngModel",i.properties),s("p-options",i.propertiesOptions),d(),h("ngModel",i.content))},dependencies:[oe,te,ne,ae,ie,O,de,me,ce,ge,Ee,be,R,M],styles:[".sample-widget-align-end[_ngcontent-%COMP%]{align-items:flex-end}"]})}return o})();var qe=o=>({"docs-sample-code-tabs":o}),ye=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-labs-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Widget Labs"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-widget-labs/sample-po-widget-labs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-widget
    class="po-sm-12"
    [p-background]="background"
    [p-disabled]="properties.includes('disabled')"
    [p-size]="properties.includes('small') ? 'small' : 'medium'"
    [p-height]="height"
    [p-help]="help"
    [p-primary]="properties.includes('primaryWidget')"
    [p-primary-label]="primaryLabel"
    [p-secondary-label]="secondaryLabel"
    [p-tag]="tagLabel"
    [p-tag-icon]="tagIcon"
    [p-tag-position]="tagPosition"
    [p-title]="title"
    [p-actions]="myActions"
    (p-on-disabled)="changeAction('p-on-disabled')"
    (p-primary-action)="changeAction('p-primary-action')"
    (p-secondary-action)="changeAction('p-secondary-action')"
    (p-setting)="changeAction('p-setting')"
    (p-title-action)="changeAction('p-title-action')"
    [p-avatar]="{ src: avatarSrc, size: avatarSize }"
  >
    { { content }}
  </po-widget>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Action" [p-value]="action"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-4" name="title" [(ngModel)]="title" p-label="Title" p-clean />

  <po-input class="po-md-4" name="help" [(ngModel)]="help" p-label="Help" p-clean />

  <po-number class="po-md-4" name="height" [(ngModel)]="height" p-label="Height" p-clean />

  <div class="po-row">
    <po-input class="po-md-6" name="actionAction" [(ngModel)]="actionPopup.action" p-clean p-label="Action" />

    <po-input class="po-md-6" name="actionLabel" [(ngModel)]="actionPopup.label" p-label="Label" p-required />
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="!actionPopup.action || !actionPopup.label"
      (p-click)="addAction(actionPopup)"
    >
    </po-button>
  </div>

  <po-input
    class="po-md-12"
    name="background"
    [(ngModel)]="background"
    p-clean
    p-help="Ex.: 'http://image.com'; '../../image.png'"
    p-label="Background"
    p-clean
  />

  <po-input class="po-md-6" name="primaryLabel" [(ngModel)]="primaryLabel" p-label="Primary Label" p-clean />

  <po-input class="po-md-6" name="secondaryLabel" [(ngModel)]="secondaryLabel" p-label="Secondary Label" p-clean />

  <div class="po-row sample-widget-align-end">
    <po-input class="po-md-4" name="tagLabel" [(ngModel)]="tagLabel" p-label="Label Tag" p-clean />

    <po-select class="po-md-4 po-mt-2" name="icon" [(ngModel)]="tagIcon" p-label="Icon" [p-options]="iconList" />

    <po-select
      class="po-md-4 po-mt-2"
      name="tagPosition"
      [(ngModel)]="tagPosition"
      p-label="Tag Position"
      [p-options]="listTagPosition"
    />
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="avatarSrc"
      [(ngModel)]="avatarSrc"
      p-label="Avatar Src"
      p-help="https://picsum.photos/144/144"
      p-clean
    />

    <po-select
      class="po-md-6"
      name="avatarSize"
      [(ngModel)]="avatarSize"
      p-label="Avatar Size"
      [p-options]="listAvatarSize"
    />
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="3"
      p-label="Properties"
      [p-options]="propertiesOptions"
    />
  </div>

  <po-textarea class="po-md-12" [(ngModel)]="content" name="content" p-label="Content" />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()" />
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-widget-labs/sample-po-widget-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';

import { PoCheckboxGroupOption, PoNotificationService, PoPopupAction, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-labs',
  templateUrl: './sample-po-widget-labs.component.html',
  styleUrls: ['./sample-po-widget-labs.component.css'],
  standalone: false
})
export class SamplePoWidgetLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: string;
  background: string;
  content: string;
  height: number;
  help: string;
  primaryLabel: string;
  properties: Array<string>;
  secondaryLabel: string;
  tagIcon: string;
  tagLabel: string;
  title: string;
  actionPopup: PoPopupAction = { action: null, label: '' };
  myActions: Array<PoPopupAction> = [];
  tagPosition: string;
  avatarSrc: string;
  avatarSize: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabled', label: 'Disabled' },
    { value: 'primaryWidget', label: 'Primary Widget' },
    { value: 'small', label: 'small' }
  ];

  public readonly iconList: Array<PoSelectOption> = [
    { label: 'an an-bluetooth', value: 'an an-bluetooth' },
    { label: 'an an-heart', value: 'an an-heart' },
    { label: 'an an-lightbulb', value: 'an an-lightbulb' },
    { label: 'an an-star', value: 'an an-star' },
    { label: 'an an-gear', value: 'an an-gear' },
    { label: 'an an-globe', value: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly listTagPosition: Array<PoSelectOption> = [
    { label: 'right', value: 'right' },
    { label: 'top', value: 'top' },
    { label: 'bottom', value: 'bottom' }
  ];

  public readonly listAvatarSize: Array<PoSelectOption> = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeAction(action) {
    this.action = action;
  }

  addAction(action: PoPopupAction) {
    this.myActions = [...this.myActions, { label: action.label, action: this.showAction.bind(this, action.action) }];
    this.actionPopup = { action: null, label: '' };
  }

  restore() {
    this.background = '';
    this.action = '';
    this.content = '';
    this.height = undefined;
    this.help = '';
    this.title = undefined;
    this.primaryLabel = undefined;
    this.properties = [];
    this.myActions = [];
    this.secondaryLabel = undefined;
    this.tagLabel = undefined;
    this.tagIcon = undefined;
    this.actionPopup = { action: null, label: '' };
    this.tagPosition = undefined;
    this.avatarSrc = undefined;
    this.avatarSize = undefined;
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-widget-labs/sample-po-widget-labs.component.css"),t(),n(25,"pre",11),e(26,`.sample-widget-align-end {
  align-items: flex-end;
}
`),t()()()()(),n(27,"div",12),a(28,"sample-po-widget-labs"),t(),a(29,"hr")),l&2&&(d(5),_("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel),d(),s("ngClass",v(4,qe,i.hideSampleCodeTabs)))},dependencies:[T,P,w,C,fe],encapsulation:2})}return o})();var Be=["detailsModal"],we=(()=>{class o{poNotification=L(N);detailsModalElement;paymentLink="https://www.google.com.br/search?q=days+to+payment";itemsDetails;titleDetailsModal;typeChart="line";myActions=[{label:"Detail",icon:"an an-align-top",action:this.showAction.bind(this)},{label:"Remove",icon:"an an-trash",type:"danger",action:this.showAction.bind(this)}];options=[{value:"poMultiselect1",label:"Admin"},{value:"poMultiselect2",label:"User"}];columnsDetails=[{property:"dateUpdate",label:"Date update",type:"date"},{property:"statement",label:"Statement",type:"currency"}];itemsAccountDetails=[{dateUpdate:"03-05-2018",statement:"-56.45"},{dateUpdate:"02-05-2018",statement:"-14.99"},{dateUpdate:"02-05-2018",statement:"-657.56"},{dateUpdate:"12-05-2017",statement:"3547.29"}];itemsSavingsDetails=[{dateUpdate:"03-05-2018",statement:"-300"},{dateUpdate:"03-05-2018",statement:"2000"},{dateUpdate:"02-05-2018",statement:"1500"},{dateUpdate:"02-05-2018",statement:"-200"},{dateUpdate:"12-05-2017",statement:"2000"}];openModal(p){switch(p){case"savings":this.titleDetailsModal="Revenue - Details",this.itemsDetails=this.itemsSavingsDetails,this.detailsModalElement.open();break;case"account":this.titleDetailsModal="Total savings - Details",this.itemsDetails=this.itemsAccountDetails,this.detailsModalElement.open();break}}openExternalLink(p){window.open(p,"_blank")}showAction(){this.poNotification.success("Action clicked")}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-finance-dashboard"]],viewQuery:function(l,i){if(l&1&&q(Be,7),l&2){let m;z(m=B())&&(i.detailsModalElement=m.first)}},standalone:!1,decls:43,vars:13,consts:[["detailsModal",""],[1,"po-row","sample-finance-row-gap"],["p-help","https://github.com/po-ui/po-angular/stargazers","p-title","Days to Payment","p-tag","Sales","p-tag-icon","an an-arrow-circle-up",1,"po-lg-6",3,"p-height"],[1,"sample-finance-actions"],["p-label","Cancel","p-danger",""],["p-label","Confirm",3,"p-click"],["p-title","Total savings",1,"po-lg-3",3,"p-click","p-height"],[1,"po-font-subtitle","po-text-center"],[1,"po-text-center"],["p-disabled","","p-primary-label","Details","p-secondary-label","Edit","p-title","Total checking account",1,"po-lg-3",3,"p-primary-action","p-height"],[1,"po-text-center","sample-finance-total-value"],["p-background","../../../assets/graphics/sales-statistics.png",1,"po-lg-4",3,"p-height"],[1,"po-text-center","sample-finance-padding-inline"],[1,"sample-finance-overlay-badge"],[1,"sample-finance-overlay-text"],[1,"sample-finance-padding-inline"],["name","multiselect",3,"p-options"],["p-title","Most used payment type",1,"po-lg-4",3,"p-actions","p-height"],["p-primary-label","Details","p-tag","Revenue","p-tag-icon","an an-money","p-title","Highest revenue in the month considering Marketing and Sales",1,"po-lg-4",3,"p-primary-action","p-height","p-primary"],[3,"p-title"],[3,"p-columns","p-items","p-hide-table-search"]],template:function(l,i){l&1&&(n(0,"div",1)(1,"div",1)(2,"po-widget",2)(3,"div"),e(4,"Sales order"),t(),n(5,"div"),e(6,"Scheduled to: "),n(7,"strong"),e(8,"05/04/2018"),t()(),n(9,"div",3),a(10,"po-button",4),n(11,"po-button",5),c("p-click",function(){return i.openExternalLink("https://github.com/po-ui/po-angular/stargazers")}),t()()(),n(12,"po-widget",6),c("p-click",function(){return i.openModal("account")}),n(13,"div",7),e(14,"$2.818,29"),t(),n(15,"div",8),e(16,"Last updated at 18:34"),t()(),n(17,"po-widget",9),c("p-primary-action",function(){return i.openModal("account")}),n(18,"div",10),e(19,"$5.000,00"),t(),n(20,"div",8),e(21,"Last updated at 08:20"),t()()(),n(22,"div",1)(23,"po-widget",11)(24,"div",12)(25,"div",13)(26,"strong",14),e(27,"Enter the user routine"),t()()(),n(28,"div",15),a(29,"po-multiselect",16),t()(),n(30,"po-widget",17)(31,"div",7),e(32,"Credit card"),t(),n(33,"div",8),e(34,"MasterCard - 5500 0000 0000 0004"),t()(),n(35,"po-widget",18),c("p-primary-action",function(){return i.openModal("savings")}),n(36,"div",7),e(37,"$2.000,00"),t(),n(38,"div",8),e(39,"05/03/2018"),t()()()(),n(40,"po-modal",19,0),a(42,"po-table",20),t()),l&2&&(d(2),s("p-height",190),d(10),s("p-height",190),d(5),s("p-height",190),d(6),s("p-height",180),d(6),s("p-options",i.options),d(),s("p-actions",i.myActions)("p-height",180),d(5),s("p-height",180)("p-primary",!0),d(5),s("p-title",i.titleDetailsModal),d(2),s("p-columns",i.columnsDetails)("p-items",i.itemsDetails)("p-hide-table-search",!1))},dependencies:[O,ue,W,se,M],styles:[".sample-finance-row-gap[_ngcontent-%COMP%]{row-gap:1rem}.sample-finance-actions[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.5rem}.sample-finance-total-value[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.5rem}.sample-finance-padding-inline[_ngcontent-%COMP%]{padding-inline:.5rem}.sample-finance-overlay-badge[_ngcontent-%COMP%]{margin-bottom:.5rem;display:inline-block;background-color:#000;padding:.5rem;border-radius:3px;opacity:.85}.sample-finance-overlay-text[_ngcontent-%COMP%]{color:#fff}"]})}return o})();var Ie=o=>({"docs-sample-code-tabs":o}),Ce=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-finance-dashboard-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Widget - Finance dashboard"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row sample-finance-row-gap">
  <div class="po-row sample-finance-row-gap">
    <po-widget
      class="po-lg-6"
      p-help="https://github.com/po-ui/po-angular/stargazers"
      p-title="Days to Payment"
      p-tag="Sales"
      p-tag-icon="an an-arrow-circle-up"
      [p-height]="190"
    >
      <div>Sales order</div>
      <div>Scheduled to: <strong>05/04/2018</strong></div>
      <div class="sample-finance-actions">
        <po-button p-label="Cancel" p-danger></po-button>
        <po-button
          p-label="Confirm"
          (p-click)="openExternalLink('https://github.com/po-ui/po-angular/stargazers')"
        ></po-button>
      </div>
    </po-widget>

    <po-widget class="po-lg-3" p-title="Total savings" [p-height]="190" (p-click)="openModal('account')">
      <div class="po-font-subtitle po-text-center">$2.818,29</div>
      <div class="po-text-center">Last updated at 18:34</div>
    </po-widget>

    <po-widget
      class="po-lg-3"
      p-disabled
      p-primary-label="Details"
      p-secondary-label="Edit"
      p-title="Total checking account"
      [p-height]="190"
      (p-primary-action)="openModal('account')"
    >
      <div class="po-text-center sample-finance-total-value">$5.000,00</div>
      <div class="po-text-center">Last updated at 08:20</div>
    </po-widget>
  </div>

  <div class="po-row sample-finance-row-gap">
    <po-widget class="po-lg-4" p-background="../../../assets/graphics/sales-statistics.png" [p-height]="180">
      <div class="po-text-center sample-finance-padding-inline">
        <div class="sample-finance-overlay-badge">
          <strong class="sample-finance-overlay-text">Enter the user routine</strong>
        </div>
      </div>
      <div class="sample-finance-padding-inline">
        <po-multiselect name="multiselect" [p-options]="options"> </po-multiselect>
      </div>
    </po-widget>

    <po-widget class="po-lg-4" p-title="Most used payment type" [p-actions]="myActions" [p-height]="180">
      <div class="po-font-subtitle po-text-center">Credit card</div>
      <div class="po-text-center">MasterCard - 5500 0000 0000 0004</div>
    </po-widget>

    <po-widget
      class="po-lg-4"
      p-primary-label="Details"
      p-tag="Revenue"
      p-tag-icon="an an-money"
      p-title="Highest revenue in the month considering Marketing and Sales"
      [p-height]="180"
      [p-primary]="true"
      (p-primary-action)="openModal('savings')"
    >
      <div class="po-font-subtitle po-text-center">$2.000,00</div>
      <div class="po-text-center">05/03/2018</div>
    </po-widget>
  </div>
</div>

<po-modal #detailsModal [p-title]="titleDetailsModal">
  <po-table [p-columns]="columnsDetails" [p-items]="itemsDetails" [p-hide-table-search]="false"> </po-table>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, ViewChild, inject } from '@angular/core';

import { PoModalComponent, PoMultiselectOption, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-finance-dashboard',
  templateUrl: './sample-po-widget-finance-dashboard.component.html',
  styleUrls: ['./sample-po-widget-finance-dashboard.component.css'],
  standalone: false
})
export class SamplePoWidgetFinanceDashboardComponent {
  private readonly poNotification = inject(PoNotificationService);

  @ViewChild('detailsModal', { static: true }) detailsModalElement: PoModalComponent;

  paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
  itemsDetails: Array<any>;
  titleDetailsModal: string;
  typeChart: string = 'line';
  myActions = [
    { label: 'Detail', icon: 'an an-align-top', action: this.showAction.bind(this) },
    { label: 'Remove', icon: 'an an-trash', type: 'danger', action: this.showAction.bind(this) }
  ];

  options: Array<PoMultiselectOption> = [
    { value: 'poMultiselect1', label: 'Admin' },
    { value: 'poMultiselect2', label: 'User' }
  ];

  public readonly columnsDetails: Array<PoTableColumn> = [
    { property: 'dateUpdate', label: 'Date update', type: 'date' },
    { property: 'statement', label: 'Statement', type: 'currency' }
  ];

  public readonly itemsAccountDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-56.45' },
    { dateUpdate: '02-05-2018', statement: '-14.99' },
    { dateUpdate: '02-05-2018', statement: '-657.56' },
    { dateUpdate: '12-05-2017', statement: '3547.29' }
  ];

  public readonly itemsSavingsDetails: Array<any> = [
    { dateUpdate: '03-05-2018', statement: '-300' },
    { dateUpdate: '03-05-2018', statement: '2000' },
    { dateUpdate: '02-05-2018', statement: '1500' },
    { dateUpdate: '02-05-2018', statement: '-200' },
    { dateUpdate: '12-05-2017', statement: '2000' }
  ];

  openModal(type) {
    switch (type) {
      case 'savings':
        this.titleDetailsModal = 'Revenue - Details';
        this.itemsDetails = this.itemsSavingsDetails;
        this.detailsModalElement.open();
        break;
      case 'account':
        this.titleDetailsModal = 'Total savings - Details';
        this.itemsDetails = this.itemsAccountDetails;
        this.detailsModalElement.open();
        break;
    }
  }

  openExternalLink(url) {
    window.open(url, '_blank');
  }

  private showAction(): any {
    this.poNotification.success(\`Action clicked\`);
  }
}
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-widget-finance-dashboard/sample-po-widget-finance-dashboard.component.css"),t(),n(25,"pre",11),e(26,`.sample-finance-row-gap {
  row-gap: 1rem;
}

.sample-finance-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.sample-finance-total-value {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.sample-finance-padding-inline {
  padding-inline: 0.5rem;
}

.sample-finance-overlay-badge {
  margin-bottom: 0.5rem;
  display: inline-block;
  background-color: black;
  padding: 0.5rem;
  border-radius: 3px;
  opacity: 0.85;
}

.sample-finance-overlay-text {
  color: white;
}
`),t()()()()(),n(27,"div",12),a(28,"sample-po-widget-finance-dashboard"),t(),a(29,"hr")),l&2&&(d(5),_("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel),d(),s("ngClass",v(4,Ie,i.hideSampleCodeTabs)))},dependencies:[T,P,w,C,we],encapsulation:2})}return o})();var Ne=o=>({customTemplate:o,widthCustomTemplate:"40%"}),Re=()=>({hideExpand:!0,hideExportCsv:!0,hideExportImage:!0,hideTableDetails:!0}),Ue=o=>({header:o}),He=()=>({label:"Angular",data:100}),je=()=>({label:"React",data:10}),Je=(o,D)=>[o,D];function Ge(o,D){o&1&&a(0,"po-chart",8),o&2&&s("p-options",v(3,Ue,V(2,Re)))("p-series",I(7,Je,V(5,He),V(6,je)))}function Qe(o,D){if(o&1&&(n(0,"li"),e(1),t()),o&2){let p=D.$implicit;d(),$(p)}}var Pe=(()=>{class o{poModal;help;label;technologies=["Angular","Typescript","React","Babel","Jasmine","Vue"];value;ngOnInit(){this.showAngular()}showAngular(){this.label="Angular",this.value=`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.`,this.help="https://angular.io/"}showJavascriptTechnologies(){this.poModal.open()}showTypescript(){this.label="Typescript",this.value=`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.`,this.help="https://www.typescriptlang.org/"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-card"]],viewQuery:function(l,i){if(l&1&&q(W,7),l&2){let m;z(m=B())&&(i.poModal=m.first)}},standalone:!1,decls:24,vars:6,consts:[["avatar",""],[1,"po-row"],["p-height","300","p-primary-label","Angular","p-secondary-label","Typescript","p-title","Javascript technologies",1,"po-lg-6",3,"p-primary-action","p-secondary-action","p-title-action","p-help"],[3,"p-label","p-value"],["p-title","Apps Enterprise","p-tag","Angular v17+","p-tag-position","top","p-height","300","p-help","https://angular.dev/",1,"po-lg-6",3,"p-avatar"],[1,"po-pl-3","po-pt-1"],["p-title","Javascript Technologies"],[1,"po-ml-3"],["p-height","260",3,"p-options","p-series"]],template:function(l,i){if(l&1&&(n(0,"div",1)(1,"po-widget",2),c("p-primary-action",function(){return i.showAngular()})("p-secondary-action",function(){return i.showTypescript()})("p-title-action",function(){return i.showJavascriptTechnologies()}),a(2,"po-info",3),t(),n(3,"po-widget",4)(4,"div"),e(5," Angular: The default choice for large-scale applications, such as banking and government systems, due to its structured architecture and native TypeScript support. "),n(6,"div",5)(7,"ul")(8,"li"),e(9,"Out-of-the-Box"),t(),n(10,"li"),e(11,"Standardized and Opinion-Based Architecture"),t(),n(12,"li"),e(13,"Next Generation Reactivity (Signals)"),t(),n(14,"li"),e(15,"Focus on Enterprise and Security"),t()()()(),G(16,Ge,1,10,"ng-template",null,0,ee),t()(),n(18,"po-modal",6),e(19," There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we can mention: "),n(20,"div",7)(21,"ul"),K(22,Qe,2,1,"li",null,Q),t()()()),l&2){let m=Z(17);d(),s("p-help",i.help),d(),s("p-label",i.label)("p-value",i.value),d(),s("p-avatar",v(4,Ne,m)),d(19),X(i.technologies)}},dependencies:[pe,R,W,M],encapsulation:2})}return o})();var Xe=o=>({"docs-sample-code-tabs":o}),_e=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-card-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Widget - Card"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-widget-card/sample-po-widget-card.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-widget
    class="po-lg-6"
    p-height="300"
    p-primary-label="Angular"
    p-secondary-label="Typescript"
    p-title="Javascript technologies"
    [p-help]="help"
    (p-primary-action)="showAngular()"
    (p-secondary-action)="showTypescript()"
    (p-title-action)="showJavascriptTechnologies()"
  >
    <po-info [p-label]="label" [p-value]="value"> </po-info>
  </po-widget>

  <po-widget
    p-title="Apps Enterprise"
    p-tag="Angular v17+"
    p-tag-position="top"
    class="po-lg-6"
    p-height="300"
    p-help="https://angular.dev/"
    [p-avatar]="{ customTemplate: avatar, widthCustomTemplate: '40%' }"
  >
    <div>
      Angular: The default choice for large-scale applications, such as banking and government systems, due to its
      structured architecture and native TypeScript support.
      <div class="po-pl-3 po-pt-1">
        <ul>
          <li>Out-of-the-Box</li>
          <li>Standardized and Opinion-Based Architecture</li>
          <li>Next Generation Reactivity (Signals)</li>
          <li>Focus on Enterprise and Security</li>
        </ul>
      </div>
    </div>

    <ng-template #avatar>
      <po-chart
        p-height="260"
        [p-options]="{
          header: { hideExpand: true, hideExportCsv: true, hideExportImage: true, hideTableDetails: true }
        }"
        [p-series]="[
          { label: 'Angular', data: 100 },
          { label: 'React', data: 10 }
        ]"
      >
      </po-chart>
    </ng-template>
  </po-widget>
</div>

<po-modal p-title="Javascript Technologies">
  There are several Javascript technologies that help us in the construction of fast and dynamic screens, among them we
  can mention:

  <div class="po-ml-3">
    <ul>
      @for (technology of technologies; track technology) {
        <li>{ { technology }}</li>
      }
    </ul>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-widget-card/sample-po-widget-card.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import { PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-widget-card',
  templateUrl: './sample-po-widget-card.component.html',
  standalone: false
})
export class SamplePoWidgetCardComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  help: string;
  label: string;
  technologies: Array<string> = ['Angular', 'Typescript', 'React', 'Babel', 'Jasmine', 'Vue'];
  value: string;

  ngOnInit() {
    this.showAngular();
  }

  showAngular() {
    this.label = 'Angular';
    this.value = \`Angular is a javascript framework mantained by Google and successor of the Angular.js.
    In this latest version, we can use all the features of the framework, for example: data bindings, components,
    modules, typescript and much more.\`;
    this.help = 'https://angular.io/';
  }

  showJavascriptTechnologies() {
    this.poModal.open();
  }

  showTypescript() {
    this.label = 'Typescript';
    this.value = \`Typescript allows to write JavaScript in an easier way.
    Typescript is a super set of JavaScript that compiles for simple JavaScript. Any browser.
    Any host. Any operating system. Open code.\`;
    this.help = 'https://www.typescriptlang.org/';
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-widget-card"),t(),a(23,"hr")),l&2&&(d(5),_("po-icon "+i.sampleCodeButtonIcon),d(),y(" ",i.sampleCodeButtonLabel),d(),s("ngClass",v(4,Xe,i.hideSampleCodeTabs)))},dependencies:[T,P,w,C,Pe],encapsulation:2})}return o})();var Te=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=g({type:o,selectors:[["sample-po-widget-doc"]],standalone:!1,decls:1341,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/grid-system"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/keyboard"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoWidgetAvatar"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","false"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<any>"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoWidgetModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-widget"),t()(),n(7,"h3",3),e(8,"Componente"),t(),n(9,"h4",4)(10,"code",5),e(11,"PoWidgetComponent"),t()(),n(12,"div",2)(13,"p"),e(14,"O componente "),n(15,"code"),e(16,"po-widget"),t(),e(17," \xE9 recomendado para exibi\xE7\xE3o de "),n(18,"em"),e(19,"dashboards"),t(),e(20,`, podendo ser utilizado
para incluir v\xE1rios tipos de conte\xFAdo como: gr\xE1ficos, tabelas, grids e imagens.`),t(),n(21,"p"),e(22,`Al\xE9m da exibi\xE7\xE3o de conte\xFAdos, este componente possibilita adicionar a\xE7\xF5es e um link
para ajuda, como tamb\xE9m possibilita ser utilizado com ou sem sombra.`),t(),n(23,"p"),e(24,"Para controlar sua largura, \xE9 poss\xEDvel utilizar o "),n(25,"a",6),e(26,"Grid System"),t(),e(27,` para um maior
controle de seu redimensionamento, assim possibilitando o tratamento para diferentes resolu\xE7\xF5es.`),t(),n(28,"h4"),e(29,"Boas pr\xE1ticas"),t(),n(30,"p"),e(31,"Utilize um tamanho m\xEDnimo de largura de aproximadamente "),n(32,"code"),e(33,"18.75rem"),t(),e(34," no componente."),t(),n(35,"h4"),e(36,"Acessibilidade tratada no componente"),t(),n(37,"p"),e(38,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas. S\xE3o elas:"),t(),n(39,"ul")(40,"li"),e(41,"Utiliza medidas relativas, para se adequar \xE0s prefer\xEAncias e necessidades de quem for utilizar o sistema."),t(),n(42,"li"),e(43,"Desenvolvido com uso de controles padr\xF5es HTML, o que permite a identifica\xE7\xE3o na interface por tecnologias assistivas. (WCAG "),n(44,"a",7),e(45,"4.1.2: Name, Role, Value"),t(),e(46,")"),t(),n(47,"li"),e(48,"O foco \xE9 vis\xEDvel e possui uma espessura superior a 2 pixels CSS, n\xE3o ficando escondido por outros elementos da tela. (WCAG "),n(49,"a",8),e(50,"2.4.12: Focus Appearance"),t(),e(51,")"),t(),n(52,"li"),e(53,"Quando selecion\xE1vel, prev\xEA intera\xE7\xE3o por teclado, podendo ser selecionado atrav\xE9s da tecla space (WCAG "),n(54,"a",9),e(55,"2.4.1 - Keyboard"),t(),e(56,")"),t()(),n(57,"h4"),e(58,"Tokens customiz\xE1veis"),t(),n(59,"p"),e(60,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(61,"blockquote")(62,"p"),e(63,"Para maiores informa\xE7\xF5es, acesse o guia "),n(64,"a",10),e(65,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(66,"."),t()(),n(67,"table")(68,"thead")(69,"tr")(70,"th"),e(71,"Propriedade"),t(),n(72,"th"),e(73,"Descri\xE7\xE3o"),t(),n(74,"th"),e(75,"Valor Padr\xE3o"),t()()(),n(76,"tbody")(77,"tr")(78,"td")(79,"strong"),e(80,"Default Values"),t()(),a(81,"td")(82,"td"),t(),n(83,"tr")(84,"td")(85,"code"),e(86,"--font-family"),t()(),n(87,"td"),e(88,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(89,"td")(90,"code"),e(91,"var(--font-family-theme) "),t()()(),n(92,"tr")(93,"td")(94,"code"),e(95,"--font-size"),t()(),n(96,"td"),e(97,"Tamanho da fonte"),t(),n(98,"td")(99,"code"),e(100,"var(--font-size-sm)"),t()()(),n(101,"tr")(102,"td")(103,"code"),e(104,"--font-weight"),t()(),n(105,"td"),e(106,"Peso da fonte"),t(),n(107,"td")(108,"code"),e(109,"var(--font-weight-bold)"),t()()(),n(110,"tr")(111,"td")(112,"code"),e(113,"--font-color"),t()(),n(114,"td"),e(115,"Cor da fonte"),t(),n(116,"td")(117,"code"),e(118,"var(--color-neutral-dark-95)"),t()()(),n(119,"tr")(120,"td")(121,"code"),e(122,"--padding"),t(),e(123," - "),n(124,"code"),e(125,"@deprecated 21.x.x"),t()(),n(126,"td"),e(127,"Preenchimento do componente"),t(),n(128,"td")(129,"code"),e(130,"1rem"),t()()(),n(131,"tr")(132,"td")(133,"code"),e(134,"--padding-header"),t()(),n(135,"td"),e(136,"Preenchimento do header"),t(),n(137,"td")(138,"code"),e(139,"var(--spacing-sm) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),t()()(),n(140,"tr")(141,"td")(142,"code"),e(143,"--padding-body"),t()(),n(144,"td"),e(145,"Preenchimento do body"),t(),n(146,"td")(147,"code"),e(148,"var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-sm)"),t()()(),n(149,"tr")(150,"td")(151,"code"),e(152,"--padding-avatar"),t()(),n(153,"td"),e(154,"Preenchimento do avatar"),t(),n(155,"td")(156,"code"),e(157,"var(--spacing-sm) 0 var(--spacing-xs) var(--spacing-sm)"),t()()(),n(158,"tr")(159,"td")(160,"code"),e(161,"--padding-footer"),t()(),n(162,"td"),e(163,"Preenchimento do footer"),t(),n(164,"td")(165,"code"),e(166,"var(--spacing-xs) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm)"),t()()(),n(167,"tr")(168,"td")(169,"code"),e(170,"--border-radius"),t()(),n(171,"td"),e(172,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),t(),n(173,"td")(174,"code"),e(175,"var(--border-radius-md)"),t()()(),n(176,"tr")(177,"td")(178,"code"),e(179,"--border-width"),t()(),n(180,"td"),e(181,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),t(),n(182,"td")(183,"code"),e(184,"var(--border-width-sm)"),t()()(),n(185,"tr")(186,"td")(187,"code"),e(188,"--border-color"),t()(),n(189,"td"),e(190,"Cor da borda"),t(),n(191,"td")(192,"code"),e(193,"var(--color-neutral-light-20)"),t()()(),n(194,"tr")(195,"td")(196,"code"),e(197,"--background"),t()(),n(198,"td"),e(199,"Cor de background"),t(),n(200,"td")(201,"code"),e(202,"var(--color-neutral-light-00)"),t()()(),n(203,"tr")(204,"td")(205,"code"),e(206,"--shadow"),t()(),n(207,"td"),e(208,"Cont\xE9m o valor da sombra do elemento"),t(),n(209,"td")(210,"code"),e(211,"var(--shadow-md)"),t()()(),n(212,"tr")(213,"td")(214,"strong"),e(215,"Hover"),t()(),a(216,"td")(217,"td"),t(),n(218,"tr")(219,"td")(220,"code"),e(221,"--border-color-hover"),t()(),n(222,"td"),e(223,"Cor da borda no estado hover"),t(),n(224,"td")(225,"code"),e(226,"var(--color-action-hover)"),t()()(),n(227,"tr")(228,"td")(229,"strong"),e(230,"Focused"),t()(),a(231,"td")(232,"td"),t(),n(233,"tr")(234,"td")(235,"code"),e(236,"--color-focused"),t()(),n(237,"td"),e(238,"Cor principal no estado de focus"),t(),n(239,"td")(240,"code"),e(241,"var(--color-action-default)"),t()()(),n(242,"tr")(243,"td")(244,"code"),e(245,"--outline-color-focused"),t(),e(246," \xA0"),t(),n(247,"td"),e(248,"Cor do outline do estado de focus"),t(),n(249,"td")(250,"code"),e(251,"var(--color-action-focus)"),t()()()()()(),n(252,"div",11)(253,"h4",12),e(254,"Seletor"),t(),n(255,"pre",13),e(256,`<po-widget
    p-actions="Array<PoPopupAction>"
    p-avatar="PoWidgetAvatar"
    p-background="string"
    (p-click)="EventEmitter"
    p-danger-primary-action="false"
    p-danger-secondary-action="false"
    p-disabled="boolean"
    p-height="number"
    p-help="string"
    p-kind-primary-action="string"
    p-kind-secondary-action="string"
    p-no-shadow="boolean"
    (p-on-disabled)="EventEmitter"
    p-primary="boolean"
    (p-primary-action)="EventEmitter"
    p-primary-label="string"
    (p-secondary-action)="EventEmitter"
    p-secondary-label="string"
    (p-setting)="EventEmitter"
    p-size="string"
    p-tag-icon="string | TemplateRef<void>"
    p-tag="string"
    p-tag-position="string"
    p-tag-type="PoTagType | string"
    p-title="string"
    (p-title-action)="EventEmitter" >
</po-widget>
`),t()(),n(257,"h4",14),e(258,"Propriedades"),t(),n(259,"table",15)(260,"tr",16)(261,"th",17),e(262,"Nome"),t(),n(263,"th",17),e(264,"Tipo"),t(),n(265,"th",17),e(266,"Padr\xE3o"),t(),n(267,"th",17),e(268,"Descri\xE7\xE3o"),t()(),n(269,"tr",18)(270,"td",19)(271,"div",20)(272,"span",21),e(273," p-actions"),a(274,"br"),t()()(),n(275,"td",22)(276,"code",23),e(277,"Array<PoPopupAction>"),t()(),n(278,"td",24),e(279,"-"),t(),n(280,"td",25)(281,"em")(282,"strong"),e(283,"(opcional)"),t()(),n(284,"p"),e(285,`Lista de a\xE7\xF5es exibidas no header do componente.
As propriedades das a\xE7\xF5es seguem a interface `),n(286,"code"),e(287,"PoPopupAction"),t(),e(288,"."),t()()(),n(289,"tr",18)(290,"td",19)(291,"div",20)(292,"span",21),e(293," p-avatar"),a(294,"br"),t()()(),n(295,"td",22)(296,"code",26),e(297,"PoWidgetAvatar"),t()(),n(298,"td",24),e(299,"-"),t(),n(300,"td",25)(301,"em")(302,"strong"),e(303,"(opcional)"),t()(),n(304,"p"),e(305,"Define o avatar a ser exibido \xE0 esquerda no Widget."),t()()(),n(306,"tr",18)(307,"td",19)(308,"div",20)(309,"span",21),e(310," p-background"),a(311,"br"),t()()(),n(312,"td",22)(313,"code",27),e(314,"string"),t()(),n(315,"td",24),e(316,"-"),t(),n(317,"td",25)(318,"em")(319,"strong"),e(320,"(opcional)"),t()(),n(321,"p"),e(322,"Define uma imagem de fundo."),t(),n(323,"blockquote")(324,"p"),e(325,"Se a imagem escolhida intervir na legibilidade do texto contido no "),n(326,"code"),e(327,"p-widget"),t(),e(328,`,
pode-se utilizar a propriedade `),n(329,"code"),e(330,"p-primary"),t(),e(331," em conjunto para que os textos fiquem na cor branca."),t()()()(),n(332,"tr",18)(333,"td",19)(334,"div",28)(335,"span",29),e(336," (p-click)"),a(337,"br"),t()()(),n(338,"td",22)(339,"code",30),e(340,"EventEmitter"),t()(),n(341,"td",24),e(342,"-"),t(),n(343,"td",25)(344,"em")(345,"strong"),e(346,"(opcional)"),t()(),n(347,"p"),e(348,"Evento disparado quando o usu\xE1rio clicar no componente."),t(),n(349,"blockquote")(350,"p"),e(351,"Quando este evento est\xE1 em uso, uma sombra (shadow) \xE9 aplicada automaticamente ao componente."),t()()()(),n(352,"tr",18)(353,"td",19)(354,"div",20)(355,"span",21),e(356," p-danger-primary-action"),a(357,"br"),t()()(),n(358,"td",22)(359,"code",31),e(360,"false"),t()(),n(361,"td",24)(362,"p")(363,"code"),e(364,"false"),t()()(),n(365,"td",25)(366,"em")(367,"strong"),e(368,"(opcional)"),t()(),n(369,"p"),e(370,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),n(371,"code"),e(372,"p-primary-label"),t(),e(373," ativar\xE1 o modo "),n(374,"code"),e(375,"danger"),t(),e(376,"."),t(),n(377,"blockquote")(378,"p"),e(379,"Incompat\xEDvel com o tipo "),n(380,"strong"),e(381,"tertiary"),t(),e(382," da propriedade "),n(383,"code"),e(384,"p-kind-primary-action"),t(),e(385,"."),t()()()(),n(386,"tr",18)(387,"td",19)(388,"div",20)(389,"span",21),e(390," p-danger-secondary-action"),a(391,"br"),t()()(),n(392,"td",22)(393,"code",31),e(394,"false"),t()(),n(395,"td",24)(396,"p")(397,"code"),e(398,"false"),t()()(),n(399,"td",25)(400,"em")(401,"strong"),e(402,"(opcional)"),t()(),n(403,"p"),e(404,"Caso verdadeiro o bot\xE3o da a\xE7\xE3o "),n(405,"code"),e(406,"p-secondary-label"),t(),e(407," ativar\xE1 o modo "),n(408,"code"),e(409,"danger"),t(),e(410,"."),t(),n(411,"blockquote")(412,"p"),e(413,"Incompat\xEDvel com o tipo "),n(414,"strong"),e(415,"tertiary"),t(),e(416," da propriedade "),n(417,"code"),e(418,"p-kind-primary-action"),t(),e(419,"."),t()()()(),n(420,"tr",18)(421,"td",19)(422,"div",20)(423,"span",21),e(424," p-disabled"),a(425,"br"),t()()(),n(426,"td",22)(427,"code",32),e(428,"boolean"),t()(),n(429,"td",24)(430,"p")(431,"code"),e(432,"false"),t()()(),n(433,"td",25)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),n(437,"p"),e(438,"Desabilita o componente."),t()()(),n(439,"tr",18)(440,"td",19)(441,"div",20)(442,"span",21),e(443," p-height"),a(444,"br"),t()()(),n(445,"td",22)(446,"code",33),e(447,"number"),t()(),n(448,"td",24),e(449,"-"),t(),n(450,"td",25)(451,"em")(452,"strong"),e(453,"(opcional)"),t()(),n(454,"p"),e(455,"Define a altura do componente."),t(),n(456,"blockquote")(457,"p"),e(458,"Caso n\xE3o seja informado valor, a propriedade ir\xE1 assumir o tamanho do conte\xFAdo."),t()()()(),n(459,"tr",18)(460,"td",19)(461,"div",20)(462,"span",21),e(463," p-help"),a(464,"br"),t()()(),n(465,"td",22)(466,"code",27),e(467,"string"),t()(),n(468,"td",24),e(469,"-"),t(),n(470,"td",25)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),n(474,"p"),e(475,"Link de ajuda inclu\xEDdo no menu de a\xE7\xF5es do header."),t()()(),n(476,"tr",18)(477,"td",19)(478,"div",20)(479,"span",21),e(480," p-kind-primary-action"),a(481,"br"),t()()(),n(482,"td",22)(483,"code",27),e(484,"string"),t()(),n(485,"td",24)(486,"p")(487,"code"),e(488,"tertiary"),t()()(),n(489,"td",25)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),n(493,"p"),e(494,"Define o estilo do bot\xE3o da a\xE7\xE3o "),n(495,"code"),e(496,"p-primary-label"),t(),e(497,", conforme o enum "),n(498,"code"),e(499,"PoButtonKind"),t(),e(500,"."),t()()(),n(501,"tr",18)(502,"td",19)(503,"div",20)(504,"span",21),e(505," p-kind-secondary-action"),a(506,"br"),t()()(),n(507,"td",22)(508,"code",27),e(509,"string"),t()(),n(510,"td",24)(511,"p")(512,"code"),e(513,"tertiary"),t()()(),n(514,"td",25)(515,"em")(516,"strong"),e(517,"(opcional)"),t()(),n(518,"p"),e(519,"Define o estilo do bot\xE3o da a\xE7\xE3o "),n(520,"code"),e(521,"p-secondary-label"),t(),e(522,", conforme o enum "),n(523,"code"),e(524,"PoButtonKind"),t(),e(525,"."),t()()(),n(526,"tr",18)(527,"td",19)(528,"div",20)(529,"span",21),e(530," p-no-shadow"),a(531,"br"),t()()(),n(532,"td",22)(533,"code",32),e(534,"boolean"),t()(),n(535,"td",24)(536,"p")(537,"code"),e(538,"true"),t()()(),n(539,"td",25)(540,"em")(541,"strong"),e(542,"(opcional)"),t()(),n(543,"p"),e(544,"Desabilita a sombra do componente quando o mesmo for clic\xE1vel."),t(),n(545,"blockquote")(546,"p"),e(547,"A sombra \xE9 exibida por padr\xE3o apenas quando o evento "),n(548,"code"),e(549,"p-click"),t(),e(550," est\xE1 definido."),t()()()(),n(551,"tr",18)(552,"td",19)(553,"div",28)(554,"span",29),e(555," (p-on-disabled)"),a(556,"br"),t()()(),n(557,"td",22)(558,"code",30),e(559,"EventEmitter"),t()(),n(560,"td",24),e(561,"-"),t(),n(562,"td",25)(563,"em")(564,"strong"),e(565,"(opcional)"),t()(),n(566,"p"),e(567,"Evento disparado quando a propriedade "),n(568,"code"),e(569,"p-disabled"),t(),e(570," for alterada."),t()()(),n(571,"tr",18)(572,"td",19)(573,"div",20)(574,"span",21),e(575," p-primary"),a(576,"br"),t()()(),n(577,"td",22)(578,"code",32),e(579,"boolean"),t()(),n(580,"td",24)(581,"p")(582,"code"),e(583,"false"),t()()(),n(584,"td",25)(585,"em")(586,"strong"),e(587,"(opcional)"),t()(),n(588,"p"),e(589,"Op\xE7\xE3o para que o "),n(590,"code"),e(591,"po-widget"),t(),e(592," fique em destaque."),t()()(),n(593,"tr",18)(594,"td",19)(595,"div",28)(596,"span",29),e(597," (p-primary-action)"),a(598,"br"),t()()(),n(599,"td",22)(600,"code",30),e(601,"EventEmitter"),t()(),n(602,"td",24),e(603,"-"),t(),n(604,"td",25)(605,"em")(606,"strong"),e(607,"(opcional)"),t()(),n(608,"p"),e(609,"Evento disparado ao clicar na a\xE7\xE3o "),n(610,"code"),e(611,"p-primary-label"),t(),e(612,"."),t()()(),n(613,"tr",18)(614,"td",19)(615,"div",20)(616,"span",21),e(617," p-primary-label"),a(618,"br"),t()()(),n(619,"td",22)(620,"code",27),e(621,"string"),t()(),n(622,"td",24),e(623,"-"),t(),n(624,"td",25)(625,"em")(626,"strong"),e(627,"(opcional)"),t()(),n(628,"p"),e(629,"Define o label e exibe a a\xE7\xE3o prim\xE1ria no footer do componente."),t()()(),n(630,"tr",18)(631,"td",19)(632,"div",28)(633,"span",29),e(634," (p-secondary-action)"),a(635,"br"),t()()(),n(636,"td",22)(637,"code",30),e(638,"EventEmitter"),t()(),n(639,"td",24),e(640,"-"),t(),n(641,"td",25)(642,"em")(643,"strong"),e(644,"(opcional)"),t()(),n(645,"p"),e(646,"Evento disparado ao clicar na a\xE7\xE3o "),n(647,"code"),e(648,"p-secondary-label"),t(),e(649,"."),t()()(),n(650,"tr",18)(651,"td",19)(652,"div",20)(653,"span",21),e(654," p-secondary-label"),a(655,"br"),t()()(),n(656,"td",22)(657,"code",27),e(658,"string"),t()(),n(659,"td",24),e(660,"-"),t(),n(661,"td",25)(662,"em")(663,"strong"),e(664,"(opcional)"),t()(),n(665,"p"),e(666,"Define o label e exibe a a\xE7\xE3o secund\xE1ria no footer do componente."),t(),n(667,"blockquote")(668,"p"),e(669,"Exibida apenas quando "),n(670,"code"),e(671,"p-primary-label"),t(),e(672," estiver definida."),t()()()(),n(673,"tr",18)(674,"td",19)(675,"div",28)(676,"span",29),e(677," (p-setting)"),a(678,"br"),t()()(),n(679,"td",22)(680,"code",30),e(681,"EventEmitter"),t()(),n(682,"td",24),e(683,"-"),t(),n(684,"td",25)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),n(688,"p"),e(689,"Evento disparado ao clicar em "),n(690,"strong"),e(691,"Configura\xE7\xF5es"),t(),e(692," inclu\xEDdo no menu de a\xE7\xF5es do header."),t()()(),n(693,"tr",18)(694,"td",19)(695,"div",20)(696,"span",21),e(697," p-size"),a(698,"br"),t()()(),n(699,"td",22)(700,"code",27),e(701,"string"),t()(),n(702,"td",24)(703,"p")(704,"code"),e(705,"medium"),t()()(),n(706,"td",25)(707,"em")(708,"strong"),e(709,"(opcional)"),t()(),n(710,"p"),e(711,"Define o tamanho dos bot\xF5es do componente:"),t(),n(712,"ul")(713,"li")(714,"code"),e(715,"small"),t(),e(716,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(717,"li")(718,"code"),e(719,"medium"),t(),e(720,": altura de 44px."),t()(),n(721,"blockquote")(722,"p"),e(723,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(724,"code"),e(725,"medium"),t(),e(726,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(727,"a",34),e(728,"po-theme"),t(),e(729,"."),t()()()(),n(730,"tr",18)(731,"td",19)(732,"div",20)(733,"span",21),e(734," p-tag-icon"),a(735,"br"),t()()(),n(736,"td",22)(737,"code",27),e(738,"string "),t(),n(739,"code",35),e(740," TemplateRef<void>"),t()(),n(741,"td",24),e(742,"-"),t(),n(743,"td",25)(744,"em")(745,"strong"),e(746,"(opcional)"),t()(),n(747,"p"),e(748,"Define o \xEDcone exibido ao lado do label da "),n(749,"code"),e(750,"p-tag"),t(),e(751,"."),t(),n(752,"p"),e(753,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(754,"a",36),e(755,"Biblioteca de \xEDcones PO UI"),t(),e(756,", conforme exemplo:"),t(),n(757,"pre")(758,"code"),e(759,`<po-widget p-tag-icon="an an-user"></po-widget>
`),t()(),n(760,"p"),e(761,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),n(762,"em"),e(763,"Font Awesome"),t(),e(764,`, desde que a biblioteca
esteja carregada no projeto:`),t(),n(765,"pre")(766,"code"),e(767,`<po-widget p-tag-icon="fa fa-podcast"></po-widget>
`),t()(),n(768,"p"),e(769,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(770,"code"),e(771,"TemplateRef"),t(),e(772,", conforme exemplo abaixo:"),t(),n(773,"pre")(774,"code"),e(775,`<po-widget [p-tag-icon]="template"></po-widget>

<ng-template #template>
  <i class="fa fa-podcast" style="font-size: inherit;"></i>
</ng-template>
`),t()(),n(776,"blockquote")(777,"p"),e(778,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),n(779,"code"),e(780,"font-size: inherit"),t(),e(781," caso o \xEDcone utilizado n\xE3o aplique-o."),t()()()(),n(782,"tr",18)(783,"td",19)(784,"div",20)(785,"span",21),e(786," p-tag"),a(787,"br"),t()()(),n(788,"td",22)(789,"code",27),e(790,"string"),t()(),n(791,"td",24),e(792,"-"),t(),n(793,"td",25)(794,"em")(795,"strong"),e(796,"(opcional)"),t()(),n(797,"p"),e(798,"Label da tag exibida no header."),t(),n(799,"blockquote")(800,"p"),e(801,`Quando a tag atingir uma largura m\xE1xima de 15rem (240px), ser\xE1 truncado com retic\xEAncias.
O conte\xFAdo completo poder\xE1 ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),t()()()(),n(802,"tr",18)(803,"td",19)(804,"div",20)(805,"span",21),e(806," p-tag-position"),a(807,"br"),t()()(),n(808,"td",22)(809,"code",27),e(810,"string"),t()(),n(811,"td",24)(812,"p")(813,"code"),e(814,"right"),t()()(),n(815,"td",25)(816,"em")(817,"strong"),e(818,"(opcional)"),t()(),n(819,"p"),e(820,"Define o posicionamento da "),n(821,"code"),e(822,"po-tag"),t(),e(823," no cabe\xE7alho do Widget:"),t(),n(824,"ul")(825,"li")(826,"code"),e(827,"right"),t(),e(828,": posicionada no canto superior direito do cabe\xE7alho."),t(),n(829,"li")(830,"code"),e(831,"top"),t(),e(832,": posicionada \xE0 esquerda, acima do t\xEDtulo (quando houver)."),t(),n(833,"li")(834,"code"),e(835,"bottom"),t(),e(836,": posicionada \xE0 esquerda, abaixo do t\xEDtulo (quando houver)."),t()()()(),n(837,"tr",18)(838,"td",19)(839,"div",20)(840,"span",21),e(841," p-tag-type"),a(842,"br"),t()()(),n(843,"td",22)(844,"code",37),e(845,"PoTagType "),t(),n(846,"code",27),e(847," string"),t()(),n(848,"td",24)(849,"p")(850,"code"),e(851,"success"),t()()(),n(852,"td",25)(853,"em")(854,"strong"),e(855,"(opcional)"),t()(),n(856,"p"),e(857,"Define o tipo da "),n(858,"code"),e(859,"p-tag"),t(),e(860,", conforme o enum "),n(861,"strong"),e(862,"PoTagType"),t(),e(863,"."),t(),n(864,"p"),e(865,"Valores v\xE1lidos:"),t(),n(866,"ul")(867,"li")(868,"code"),e(869,"success"),t(),e(870,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),t(),n(871,"li")(872,"code"),e(873,"warning"),t(),e(874,": cor amarela que representa aviso ou advert\xEAncia."),t(),n(875,"li")(876,"code"),e(877,"danger"),t(),e(878,": cor vermelha para erro ou aviso cr\xEDtico."),t(),n(879,"li")(880,"code"),e(881,"info"),t(),e(882,": cor azul claro que caracteriza conte\xFAdo informativo."),t(),n(883,"li")(884,"code"),e(885,"neutral"),t(),e(886,": cor cinza claro para uso geral."),t()()()(),n(887,"tr",18)(888,"td",19)(889,"div",20)(890,"span",21),e(891," p-title"),a(892,"br"),t()()(),n(893,"td",22)(894,"code",27),e(895,"string"),t()(),n(896,"td",24),e(897,"-"),t(),n(898,"td",25)(899,"em")(900,"strong"),e(901,"(opcional)"),t()(),n(902,"p"),e(903,"T\xEDtulo do componente."),t(),n(904,"blockquote")(905,"p"),e(906,`Quando o conte\xFAdo exceder o espa\xE7o dispon\xEDvel, o texto ser\xE1 truncado com retic\xEAncias. O conte\xFAdo completo poder\xE1
ser visualizado ao passar o mouse sobre a tag, por meio do tooltip.`),t()()()(),n(907,"tr",18)(908,"td",19)(909,"div",28)(910,"span",29),e(911," (p-title-action)"),a(912,"br"),t()()(),n(913,"td",22)(914,"code",30),e(915,"EventEmitter"),t()(),n(916,"td",24),e(917,"-"),t(),n(918,"td",25)(919,"em")(920,"strong"),e(921,"(opcional)"),t()(),n(922,"p"),e(923,"Evento disparado ao clicar no t\xEDtulo definido em "),n(924,"code"),e(925,"p-title"),t(),e(926,"."),t()()()(),n(927,"h3"),e(928,"Interfaces"),t(),n(929,"h4",38)(930,"code",5),e(931,"PoPopupAction"),t()(),n(932,"div",2)(933,"p"),e(934,"Interface para lista de a\xE7\xF5es do componente."),t()(),n(935,"h4",14),e(936,"Propriedades"),t(),n(937,"table",15)(938,"tr",16)(939,"th",17),e(940,"Nome"),t(),n(941,"th",17),e(942,"Tipo"),t(),n(943,"th",17),e(944,"Descri\xE7\xE3o"),t()(),n(945,"tr",18)(946,"td",19)(947,"div",20)(948,"span",21),e(949," action"),a(950,"br"),t()()(),n(951,"td",22)(952,"code",39),e(953,"Function"),t()(),n(954,"td",25)(955,"em")(956,"strong"),e(957,"(opcional)"),t()(),n(958,"p"),e(959,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),n(960,"p"),e(961,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),n(962,"code"),e(963,"subItems"),t(),e(964,"."),t(),n(965,"blockquote")(966,"p"),e(967,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),n(968,"em"),e(969,"bind"),t(),e(970,`:
`),n(971,"code"),e(972,"action: this.myFunction.bind(this)"),t()()()()(),n(973,"tr",18)(974,"td",19)(975,"div",20)(976,"span",21),e(977," disabled"),a(978,"br"),t()()(),n(979,"td",22)(980,"code",32),e(981,"boolean "),t(),n(982,"code",39),e(983," Function"),t()(),n(984,"td",25)(985,"em")(986,"strong"),e(987,"(opcional)"),t()(),n(988,"p"),e(989,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()(),n(990,"tr",18)(991,"td",19)(992,"div",20)(993,"span",21),e(994," icon"),a(995,"br"),t()()(),n(996,"td",22)(997,"code",27),e(998,"string "),t(),n(999,"code",35),e(1e3," TemplateRef<void>"),t()(),n(1001,"td",25)(1002,"em")(1003,"strong"),e(1004,"(opcional)"),t()(),n(1005,"p"),e(1006,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),t(),n(1007,"p"),e(1008,"Aceita \xEDcones da "),n(1009,"a",36),e(1010,"Biblioteca de \xEDcones"),t(),e(1011,`, fontes externas (ex: Font Awesome)
ou um `),n(1012,"code"),e(1013,"TemplateRef"),t(),e(1014," para \xEDcones customizados."),t(),n(1015,"pre")(1016,"code"),e(1017,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),t()()()(),n(1018,"tr",18)(1019,"td",19)(1020,"div",20)(1021,"span",21),e(1022," label"),a(1023,"br"),t()()(),n(1024,"td",22)(1025,"code",27),e(1026,"string"),t()(),n(1027,"td",25)(1028,"p"),e(1029,"R\xF3tulo da a\xE7\xE3o."),t(),n(1030,"p"),e(1031,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),n(1032,"code"),e(1033,"subItems"),t(),e(1034,"."),t()()(),n(1035,"tr",18)(1036,"td",19)(1037,"div",20)(1038,"span",21),e(1039," selected"),a(1040,"br"),t()()(),n(1041,"td",22)(1042,"code",32),e(1043,"boolean"),t()(),n(1044,"td",25)(1045,"em")(1046,"strong"),e(1047,"(opcional)"),t()(),n(1048,"p"),e(1049,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),n(1050,"tr",18)(1051,"td",19)(1052,"div",20)(1053,"span",21),e(1054," separator"),a(1055,"br"),t()()(),n(1056,"td",22)(1057,"code",32),e(1058,"boolean"),t()(),n(1059,"td",25)(1060,"em")(1061,"strong"),e(1062,"(opcional)"),t()(),n(1063,"p"),e(1064,"Atribui uma linha separadora acima do item."),t()()(),n(1065,"tr",18)(1066,"td",19)(1067,"div",20)(1068,"span",21),e(1069," subItems"),a(1070,"br"),t()()(),n(1071,"td",22)(1072,"code",23),e(1073,"Array<PoPopupAction>"),t()(),n(1074,"td",25)(1075,"em")(1076,"strong"),e(1077,"(opcional)"),t()(),n(1078,"p"),e(1079,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),t(),n(1080,"p"),e(1081,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),t(),n(1082,"blockquote")(1083,"p"),e(1084,"As propriedades "),n(1085,"code"),e(1086,"disabled"),t(),e(1087,", "),n(1088,"code"),e(1089,"type"),t(),e(1090," e "),n(1091,"code"),e(1092,"visible"),t(),e(1093," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),t()(),n(1094,"blockquote")(1095,"p"),e(1096,"Quando "),n(1097,"code"),e(1098,"url"),t(),e(1099," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),t()(),n(1100,"blockquote")(1101,"p"),e(1102,"Em subn\xEDveis aninhados, o "),n(1103,"code"),e(1104,"icon"),t(),e(1105," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),t()()()(),n(1106,"tr",18)(1107,"td",19)(1108,"div",20)(1109,"span",21),e(1110," type"),a(1111,"br"),t()()(),n(1112,"td",22)(1113,"code",27),e(1114,"string"),t()(),n(1115,"td",25)(1116,"em")(1117,"strong"),e(1118,"(opcional)"),t()(),n(1119,"p"),e(1120,"Define a cor do item."),t(),n(1121,"p"),e(1122,"Valores v\xE1lidos:"),t(),n(1123,"ul")(1124,"li")(1125,"code"),e(1126,"default"),t()(),n(1127,"li")(1128,"code"),e(1129,"danger"),t()()()()(),n(1130,"tr",18)(1131,"td",19)(1132,"div",20)(1133,"span",21),e(1134," url"),a(1135,"br"),t()()(),n(1136,"td",22)(1137,"code",27),e(1138,"string"),t()(),n(1139,"td",25)(1140,"em")(1141,"strong"),e(1142,"(opcional)"),t()(),n(1143,"p"),e(1144,"URL para redirecionamento. Aceita rotas internas e links externos."),t(),n(1145,"p"),e(1146,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),n(1147,"code"),e(1148,"url"),t(),e(1149," \xE9 informada em um agrupador, o clique "),n(1150,"strong"),e(1151,"n\xE3o abrir\xE1 os subitens"),t(),e(1152,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t(),n(1153,"blockquote")(1154,"p"),e(1155,"Quando informada, tem prioridade sobre a propriedade "),n(1156,"code"),e(1157,"action"),t(),e(1158,"."),t()()()(),n(1159,"tr",18)(1160,"td",19)(1161,"div",20)(1162,"span",21),e(1163," visible"),a(1164,"br"),t()()(),n(1165,"td",22)(1166,"code",32),e(1167,"boolean "),t(),n(1168,"code",39),e(1169," Function"),t()(),n(1170,"td",25)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),n(1174,"p"),e(1175,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),t()()()(),n(1176,"h4",38)(1177,"code",5),e(1178,"PoWidgetAvatar"),t()(),n(1179,"div",2)(1180,"p"),e(1181,"Interface para defini\xE7\xE3o do avatar no "),n(1182,"code"),e(1183,"po-widget"),t(),e(1184,"."),t()(),n(1185,"h4",14),e(1186,"Propriedades"),t(),n(1187,"table",15)(1188,"tr",16)(1189,"th",17),e(1190,"Nome"),t(),n(1191,"th",17),e(1192,"Tipo"),t(),n(1193,"th",17),e(1194,"Descri\xE7\xE3o"),t()(),n(1195,"tr",18)(1196,"td",19)(1197,"div",20)(1198,"span",21),e(1199," customTemplate"),a(1200,"br"),t()()(),n(1201,"td",22)(1202,"code",40),e(1203,"TemplateRef<any>"),t()(),n(1204,"td",25)(1205,"em")(1206,"strong"),e(1207,"(opcional)"),t()(),n(1208,"p"),e(1209,"Permite a cria\xE7\xE3o de template customizado para o avatar"),t(),n(1210,"pre")(1211,"code"),e(1212,`<po-widget
 [p-avatar]="{ customTemplate: customAvatar }"
/>

<ng-template #customAvatar>
  ...
</ng-template>
`),t()()()(),n(1213,"tr",18)(1214,"td",19)(1215,"div",20)(1216,"span",21),e(1217," size"),a(1218,"br"),t()()(),n(1219,"td",22)(1220,"code",27),e(1221,"string"),t()(),n(1222,"td",25)(1223,"em")(1224,"strong"),e(1225,"(opcional)"),t()(),n(1226,"p"),e(1227,"Tamanho de exibi\xE7\xE3o do componente "),n(1228,"code"),e(1229,"po-avatar"),t(),e(1230,"."),t(),n(1231,"p"),e(1232,"Valores v\xE1lidos:"),t(),n(1233,"ul")(1234,"li")(1235,"code"),e(1236,"xs"),t(),e(1237," (24x24)"),t(),n(1238,"li")(1239,"code"),e(1240,"sm"),t(),e(1241," (32x32)"),t(),n(1242,"li")(1243,"code"),e(1244,"md"),t(),e(1245," (64x64)"),t(),n(1246,"li")(1247,"code"),e(1248,"lg"),t(),e(1249," (96x96)"),t(),n(1250,"li")(1251,"code"),e(1252,"xl"),t(),e(1253," (144x144)"),t()()()(),n(1254,"tr",18)(1255,"td",19)(1256,"div",20)(1257,"span",21),e(1258," src"),a(1259,"br"),t()()(),n(1260,"td",22)(1261,"code",27),e(1262,"string"),t()(),n(1263,"td",25)(1264,"em")(1265,"strong"),e(1266,"(opcional)"),t()(),n(1267,"p"),e(1268,"Fonte da imagem que pode ser um caminho local ("),n(1269,"code"),e(1270,"./assets/images/logo-black-small.png"),t(),e(1271,`)
ou um servidor externo (`),n(1272,"code"),e(1273,"https://po-ui.io/assets/images/logo-black-small.png"),t(),e(1274,")."),t()()(),n(1275,"tr",18)(1276,"td",19)(1277,"div",20)(1278,"span",21),e(1279," widthCustomTemplate"),a(1280,"br"),t()()(),n(1281,"td",22)(1282,"code",27),e(1283,"string"),t()(),n(1284,"td",25)(1285,"em")(1286,"strong"),e(1287,"(opcional)"),t()(),n(1288,"p"),e(1289,"Define a largura em porcentagem do "),n(1290,"code"),e(1291,"customTemplate"),t(),e(1292,"."),t(),n(1293,"p"),e(1294,"O valor m\xE1ximo aceito \xE9 "),n(1295,"code"),e(1296,"50%"),t(),e(1297,"."),t()()()(),n(1298,"h3"),e(1299,"Enums"),t(),n(1300,"h4",4)(1301,"code",5),e(1302,"PoButtonKind"),t()(),n(1303,"div",2)(1304,"p"),e(1305,"Estilos dispon\xEDveis do button."),t()(),n(1306,"h4",14),e(1307,"Propriedades"),t(),n(1308,"table",15)(1309,"tr",16)(1310,"th",17),e(1311,"Nome"),t(),n(1312,"th",17),e(1313,"Descri\xE7\xE3o"),t()(),n(1314,"tr",18)(1315,"td",19)(1316,"div",20)(1317,"span",21),e(1318," primary"),a(1319,"br"),t()()(),n(1320,"td",25)(1321,"p"),e(1322,"Estilo prim\xE1rio, usado para a\xE7\xF5es principais que requerem maior destaque."),t()()(),n(1323,"tr",18)(1324,"td",19)(1325,"div",20)(1326,"span",21),e(1327," secondary"),a(1328,"br"),t()()(),n(1329,"td",25)(1330,"p"),e(1331,"Estilo secund\xE1rio, usado como padr\xE3o, para a\xE7\xF5es comuns."),t()()(),n(1332,"tr",18)(1333,"td",19)(1334,"div",20)(1335,"span",21),e(1336," tertiary"),a(1337,"br"),t()()(),n(1338,"td",25)(1339,"p"),e(1340,"Estilo terci\xE1rio, ideal para a\xE7\xF5es menos importantes, sem fundo preenchido."),t()()()()())},dependencies:[P],encapsulation:2})}return o})();var Me=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(H(le),H(re))};static \u0275cmp=g({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Widget",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-widget-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-widget-basic-view")(6,"sample-po-widget-labs-view")(7,"sample-po-widget-finance-dashboard-view")(8,"sample-po-widget-card-view"),t()()()),l&2&&(s("p-actions",i.actions),d(2),s("p-active",i.activeTab==="doc"),d(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[he,w,C,ve,ye,Ce,_e,Te],encapsulation:2})}return o})();var $e=[{path:"",component:Me}],Ae=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=F({type:o});static \u0275inj=k({imports:[j.forChild($e),j]})}return o})();var zt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=F({type:o});static \u0275inj=k({imports:[Se,Ae]})}return o})();export{zt as DocPoWidgetModule};
