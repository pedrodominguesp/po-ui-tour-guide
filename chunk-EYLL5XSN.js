import{o as w,p as ne}from"./chunk-AT3MKFJ3.js";import{Gb as C,Hb as y,Ja as Z,Jb as M,Lb as oe,Ra as $,U as K,Xa as ee,a as Q,fa as X,tb as te,w as J,ya as Y,za as N}from"./chunk-GCMU57WK.js";import{Ea as c,Fa as t,Ga as o,Ha as r,I as L,L as k,Mb as _,Mc as q,Nc as R,O as d,Oa as I,Oc as H,P as u,Pa as S,Pc as j,Qc as z,_a as P,bb as x,cb as e,cd as G,eb as T,ed as U,gb as g,gd as W,ha as m,hb as h,ib as E,ma as B,oa as b,pa as V,pb as O,rb as A}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ie=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Toolbar"]],template:function(p,n){p&1&&r(0,"po-toolbar",0)},dependencies:[M],encapsulation:2})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Toolbar Basic"),o(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),o()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.html"),o(),t(13,"pre",7),e(14,`<po-toolbar p-title="PO Toolbar"></po-toolbar>
`),o()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-toolbar-basic/sample-po-toolbar-basic.component.ts"),o(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-toolbar-basic',
  templateUrl: './sample-po-toolbar-basic.component.html',
  standalone: false
})
export class SamplePoToolbarBasicComponent {}
`),o()()()()(),t(21,"div",10),r(22,"sample-po-toolbar-basic"),o(),r(23,"hr")),p&2&&(m(5),x("po-icon "+n.sampleCodeButtonIcon),m(),T(" ",n.sampleCodeButtonLabel),m(),c("ngClass",A(4,ge,n.hideSampleCodeTabs)))},dependencies:[_,w,C,y,ie],encapsulation:2})}return a})();var re=(()=>{class a{poNotification=k(N);action;actions;actionsIcon;notificationActions;notificationNumber;profile;profileActions;showNotification;title;toolbarActionType;actionTypes=[{value:"danger",label:"Danger"},{value:"default",label:"Default"}];iconOptions=[{value:"an an-chats",label:"an an-chats"},{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"fa fa-calculator",label:"fa fa-calculator"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];actionsIconOptions=[{value:"an an-clock",label:"an an-clock"},{value:"an an-sign-out",label:"an an-sign-out"},{value:"an an-lock",label:"an an-lock"},{value:"an an-gear",label:"an an-gear"},{value:"far fa-comment-alt",label:"far fa-comment-alt"}];toolbarActionTypes=[{label:"Actions",value:"actions"},{label:"Profile",value:"profile"},{label:"Notification",value:"notification"}];ngOnInit(){this.restore()}addAction(l,p){let n=Object.assign({},l);n.action=n.action?this.showAction.bind(this,n.action):void 0,this.toolbarActionType==="profile"?this.profileActions.push(n):this.toolbarActionType==="notification"?this.notificationActions.push(n):this.actions.push(n),p.reset()}restore(){this.action={label:void 0},this.profile={avatar:"",subtitle:"",title:""},this.actions=[],this.actionsIcon=void 0,this.profileActions=[],this.notificationActions=[],this.notificationNumber=void 0,this.showNotification=!0,this.title="PO Toolbar"}showAction(l){this.poNotification.success(`Action clicked: ${l}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-labs"]],standalone:!1,decls:33,vars:27,consts:[["formAction","ngForm"],["formProfile","ngForm"],["formToolbar","ngForm"],[3,"p-actions","p-actions-icon","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-show-notification","p-title"],[1,"sample-container"],[1,"po-row"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionIcon","p-clean","","p-label","Action icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionLabel","p-clean","","p-label","Action label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionUrl","p-clean","","p-label","Action url",1,"po-md-6",3,"ngModelChange","ngModel"],["name","actionType","p-label","Action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","actionDisabled","p-clean","","p-label","Action separator",1,"po-md-6",3,"ngModelChange","ngModel"],["name","toolbarActionType","p-columns","3","p-label","Toolbar action type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","actionsIcon","p-clean","","p-label","Actions icon",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","profileTitle","p-clean","","p-label","Profile title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileSubtitle","p-clean","","p-label","Profile subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","profileAvatar","p-clean","","p-label","Profile avatar",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-clean","","p-label","Title","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","notificationNumber","p-clean","","p-label","Notification number",1,"po-md-4",3,"ngModelChange","ngModel"],["name","showNotification","p-clean","","p-label","Show notification",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(p,n){if(p&1){let s=I();r(0,"po-toolbar",3),t(1,"div",4)(2,"form",null,0)(4,"div",5)(5,"po-input",6),E("ngModelChange",function(i){return d(s),h(n.action.action,i)||(n.action.action=i),u(i)}),o(),t(6,"po-select",7),E("ngModelChange",function(i){return d(s),h(n.action.icon,i)||(n.action.icon=i),u(i)}),o(),t(7,"po-input",8),E("ngModelChange",function(i){return d(s),h(n.action.label,i)||(n.action.label=i),u(i)}),o(),t(8,"po-input",9),E("ngModelChange",function(i){return d(s),h(n.action.url,i)||(n.action.url=i),u(i)}),o(),t(9,"po-radio-group",10),E("ngModelChange",function(i){return d(s),h(n.action.type,i)||(n.action.type=i),u(i)}),o(),t(10,"po-switch",11),E("ngModelChange",function(i){return d(s),h(n.action.separator,i)||(n.action.separator=i),u(i)}),o(),t(11,"po-radio-group",12),E("ngModelChange",function(i){return d(s),h(n.toolbarActionType,i)||(n.toolbarActionType=i),u(i)}),o()(),t(12,"div",5)(13,"po-button",13),S("p-click",function(){d(s);let i=P(3);return u(n.addAction(n.action,i))}),o()()(),r(14,"po-divider"),t(15,"div",5)(16,"po-select",14),E("ngModelChange",function(i){return d(s),h(n.actionsIcon,i)||(n.actionsIcon=i),u(i)}),o()(),r(17,"po-divider"),t(18,"form",null,1)(20,"div",5)(21,"po-input",15),E("ngModelChange",function(i){return d(s),h(n.profile.title,i)||(n.profile.title=i),u(i)}),o(),t(22,"po-input",16),E("ngModelChange",function(i){return d(s),h(n.profile.subtitle,i)||(n.profile.subtitle=i),u(i)}),o(),t(23,"po-input",17),E("ngModelChange",function(i){return d(s),h(n.profile.avatar,i)||(n.profile.avatar=i),u(i)}),o()()(),r(24,"po-divider"),t(25,"form",null,2)(27,"div",5)(28,"po-input",18),E("ngModelChange",function(i){return d(s),h(n.title,i)||(n.title=i),u(i)}),o(),t(29,"po-number",19),E("ngModelChange",function(i){return d(s),h(n.notificationNumber,i)||(n.notificationNumber=i),u(i)}),o(),t(30,"po-switch",20),E("ngModelChange",function(i){return d(s),h(n.showNotification,i)||(n.showNotification=i),u(i)}),o()(),t(31,"div",5)(32,"po-button",21),S("p-click",function(){d(s);let i=P(3),be=P(19);return P(26).reset(),be.reset(),i.reset(),u(n.restore())}),o()()()()}if(p&2){let s=P(3);c("p-actions",n.actions)("p-actions-icon",n.actionsIcon)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.notificationNumber)("p-show-notification",n.showNotification)("p-title",n.title),m(5),g("ngModel",n.action.action),m(),g("ngModel",n.action.icon),c("p-options",n.iconOptions),m(),g("ngModel",n.action.label),m(),g("ngModel",n.action.url),m(),g("ngModel",n.action.type),c("p-options",n.actionTypes),m(),g("ngModel",n.action.separator),m(),g("ngModel",n.toolbarActionType),c("p-options",n.toolbarActionTypes),m(2),c("p-disabled",s.invalid),m(3),g("ngModel",n.actionsIcon),c("p-options",n.actionsIconOptions),m(5),g("ngModel",n.profile.title),m(),g("ngModel",n.profile.subtitle),m(),g("ngModel",n.profile.avatar),m(5),g("ngModel",n.title),m(),g("ngModel",n.notificationNumber),m(),g("ngModel",n.showNotification)}},dependencies:[z,q,R,j,H,J,Q,K,Z,$,ee,Y,M],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"]})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Toolbar Labs"),o(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),o()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.html"),o(),t(13,"pre",7),e(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  [p-actions]="actions"
  [p-actions-icon]="actionsIcon"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="notificationNumber"
  [p-show-notification]="showNotification"
  [p-title]="title"
>
</po-toolbar>

<div class="sample-container">
  <form #formAction="ngForm">
    <div class="po-row">
      <po-input class="po-md-6" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action"> </po-input>

      <po-select
        class="po-md-6"
        name="actionIcon"
        [(ngModel)]="action.icon"
        p-clean
        p-label="Action icon"
        [p-options]="iconOptions"
      >
      </po-select>

      <po-input class="po-md-6" name="actionLabel" [(ngModel)]="action.label" p-clean p-label="Action label" p-required>
      </po-input>

      <po-input class="po-md-6" name="actionUrl" [(ngModel)]="action.url" p-clean p-label="Action url"> </po-input>

      <po-radio-group
        class="po-md-6"
        name="actionType"
        [(ngModel)]="action.type"
        p-label="Action type"
        [p-options]="actionTypes"
      >
      </po-radio-group>

      <po-switch
        class="po-md-6"
        name="actionDisabled"
        [(ngModel)]="action.separator"
        p-clean
        p-label="Action separator"
      >
      </po-switch>

      <po-radio-group
        class="po-md-6"
        name="toolbarActionType"
        [(ngModel)]="toolbarActionType"
        p-columns="3"
        p-label="Toolbar action type"
        [p-options]="toolbarActionTypes"
      >
      </po-radio-group>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Action"
        [p-disabled]="formAction.invalid"
        (p-click)="addAction(action, formAction)"
      >
      </po-button>
    </div>
  </form>

  <po-divider />

  <div class="po-row">
    <po-select
      class="po-md-6"
      name="actionsIcon"
      [(ngModel)]="actionsIcon"
      p-clean
      p-label="Actions icon"
      [p-options]="actionsIconOptions"
    >
    </po-select>
  </div>

  <po-divider />

  <form #formProfile="ngForm">
    <div class="po-row">
      <po-input
        class="po-md-6"
        name="profileTitle"
        [(ngModel)]="profile.title"
        p-clean
        p-label="Profile title"
        p-required
      >
      </po-input>

      <po-input
        class="po-md-6"
        name="profileSubtitle"
        [(ngModel)]="profile.subtitle"
        p-clean
        p-label="Profile subtitle"
      >
      </po-input>

      <po-input class="po-md-6" name="profileAvatar" [(ngModel)]="profile.avatar" p-clean p-label="Profile avatar">
      </po-input>
    </div>
  </form>

  <po-divider />

  <form #formToolbar="ngForm">
    <div class="po-row">
      <po-input class="po-md-4" name="title" [(ngModel)]="title" p-clean p-label="Title" p-required> </po-input>

      <po-number
        class="po-md-4"
        name="notificationNumber"
        [(ngModel)]="notificationNumber"
        p-clean
        p-label="Notification number"
      >
      </po-number>

      <po-switch
        class="po-md-4"
        name="showNotification"
        [(ngModel)]="showNotification"
        p-clean
        p-label="Show notification"
      >
      </po-switch>
    </div>

    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Sample Restore"
        (p-click)="formToolbar.reset(); formProfile.reset(); formAction.reset(); restore()"
      >
      </po-button>
    </div>
  </form>
</div>
`),o()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-toolbar-labs/sample-po-toolbar-labs.component.ts"),o(),t(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  PoNotificationService,
  PoRadioGroupOption,
  PoSelectOption,
  PoToolbarAction,
  PoToolbarProfile
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-labs',
  templateUrl: './sample-po-toolbar-labs.component.html',
  standalone: false
})
export class SamplePoToolbarLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  action: PoToolbarAction;
  actions: Array<PoToolbarAction>;
  actionsIcon: string;
  notificationActions: Array<PoToolbarAction>;
  notificationNumber: number;
  profile: PoToolbarProfile;
  profileActions: Array<PoToolbarAction>;
  showNotification: boolean;
  title: string;
  toolbarActionType: string;

  public readonly actionTypes: Array<PoRadioGroupOption> = [
    { value: 'danger', label: 'Danger' },
    { value: 'default', label: 'Default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-chats', label: 'an an-chats' },
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'fa fa-calculator', label: 'fa fa-calculator' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly actionsIconOptions: Array<PoSelectOption> = [
    { value: 'an an-clock', label: 'an an-clock' },
    { value: 'an an-sign-out', label: 'an an-sign-out' },
    { value: 'an an-lock', label: 'an an-lock' },
    { value: 'an an-gear', label: 'an an-gear' },
    { value: 'far fa-comment-alt', label: 'far fa-comment-alt' }
  ];

  public readonly toolbarActionTypes: Array<PoRadioGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Profile', value: 'profile' },
    { label: 'Notification', value: 'notification' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action, form: NgForm) {
    const newAction = Object.assign({}, action);

    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (this.toolbarActionType === 'profile') {
      this.profileActions.push(newAction);
    } else if (this.toolbarActionType === 'notification') {
      this.notificationActions.push(newAction);
    } else {
      this.actions.push(newAction);
    }
    form.reset();
  }

  restore() {
    this.action = { label: undefined };
    this.profile = { avatar: '', subtitle: '', title: '' };
    this.actions = [];
    this.actionsIcon = undefined;
    this.profileActions = [];
    this.notificationActions = [];
    this.notificationNumber = undefined;
    this.showNotification = true;
    this.title = 'PO Toolbar';
  }

  showAction(label: string): void {
    this.poNotification.success(\`Action clicked: \${label}\`);
  }
}
`),o()()()()(),t(21,"div",10),r(22,"sample-po-toolbar-labs"),o(),r(23,"hr")),p&2&&(m(5),x("po-icon "+n.sampleCodeButtonIcon),m(),T(" ",n.sampleCodeButtonLabel),m(),c("ngClass",A(4,Se,n.hideSampleCodeTabs)))},dependencies:[_,w,C,y,re],encapsulation:2})}return a})();var me=(()=>{class a{poDialog=k(X);poNotification=k(N);notificationActions=[{icon:"an an-newspaper",label:"PO news, stay tuned!",type:"danger",action:l=>this.onClickNotification(l)},{icon:"an an-chat",label:"New message",type:"danger",action:l=>this.openDialog(l)}];profile={avatar:"https://via.placeholder.com/48x48?text=AVATAR",subtitle:"dev@po-ui.com.br",title:"Mr. Dev PO"};profileActions=[{icon:"an an-user",label:"User data",action:l=>this.showAction(l)},{icon:"an an-building-apartment",label:"Company data",action:l=>this.showAction(l)},{icon:"an an-gear",label:"Settings",action:l=>this.showAction(l)},{icon:"an an-sign-out",label:"Exit",type:"danger",separator:!0,action:l=>this.showAction(l)}];actions=[{label:"Start cash register",action:l=>this.showAction(l)},{label:"Finalize cash register",action:l=>this.showAction(l)},{label:"Cash register options",action:l=>this.showAction(l)}];title="PO Toolbar Logged";getNotificationNumber(){return this.notificationActions.filter(l=>l.type==="danger").length}onClickNotification(l){window.open("https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md","_blank"),l.type="default"}openDialog(l){this.poDialog.alert({title:"Welcome",message:"Hello Mr. Dev! Congratulations, you are a TOTVS!",ok:void 0}),l.type="default"}showAction(l){this.poNotification.success(`Action clicked: ${l.label}`)}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-logged"]],standalone:!1,features:[O([N])],decls:8,vars:7,consts:[["p-actions-icon","an an-shopping-cart-simple",3,"p-actions","p-profile","p-profile-actions","p-notification-actions","p-notification-number","p-title"],[1,"po-row"],[1,"sample-container"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-subtitle"]],template:function(p,n){p&1&&(r(0,"po-toolbar",0),t(1,"div",1)(2,"div",2)(3,"po-widget",3)(4,"div",4),e(5),o(),t(6,"div",5),e(7,"Let's work hard!"),o()()()()),p&2&&(c("p-actions",n.actions)("p-profile",n.profile)("p-profile-actions",n.profileActions)("p-notification-actions",n.notificationActions)("p-notification-number",n.getNotificationNumber())("p-title",n.title),m(5),T("Hello, ",n.profile.title,"."))},dependencies:[M,oe],styles:[".sample-container[_ngcontent-%COMP%]{margin-top:50px}"]})}return a})();var Ce=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-logged-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,n){p&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Toolbar - Logged"),o(),t(4,"a",2),S("click",function(){return n.toggleSampleCodeTabs()}),r(5,"span"),e(6),o()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.html"),o(),t(13,"pre",7),e(14,`<style>
  .sample-container {
    margin-top: 50px;
  }
</style>

<po-toolbar
  p-actions-icon="an an-shopping-cart-simple"
  [p-actions]="actions"
  [p-profile]="profile"
  [p-profile-actions]="profileActions"
  [p-notification-actions]="notificationActions"
  [p-notification-number]="getNotificationNumber()"
  [p-title]="title"
>
</po-toolbar>

<div class="po-row">
  <div class="sample-container">
    <po-widget class="po-sm-12">
      <div class="po-font-title">Hello, { { profile.title }}.</div>
      <div class="po-font-subtitle">Let's work hard!</div>
    </po-widget>
  </div>
</div>
`),o()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-toolbar-logged/sample-po-toolbar-logged.component.ts"),o(),t(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoDialogService, PoNotificationService, PoToolbarAction, PoToolbarProfile } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-toolbar-logged',
  templateUrl: './sample-po-toolbar-logged.component.html',
  providers: [PoNotificationService],
  standalone: false
})
export class SamplePoToolbarLoggedComponent {
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  notificationActions: Array<PoToolbarAction> = [
    {
      icon: 'an an-newspaper',
      label: 'PO news, stay tuned!',
      type: 'danger',
      action: item => this.onClickNotification(item)
    },
    { icon: 'an an-chat', label: 'New message', type: 'danger', action: item => this.openDialog(item) }
  ];

  profile: PoToolbarProfile = {
    avatar: 'https://via.placeholder.com/48x48?text=AVATAR',
    subtitle: 'dev@po-ui.com.br',
    title: 'Mr. Dev PO'
  };

  profileActions: Array<PoToolbarAction> = [
    { icon: 'an an-user', label: 'User data', action: item => this.showAction(item) },
    { icon: 'an an-building-apartment', label: 'Company data', action: item => this.showAction(item) },
    { icon: 'an an-gear', label: 'Settings', action: item => this.showAction(item) },
    { icon: 'an an-sign-out', label: 'Exit', type: 'danger', separator: true, action: item => this.showAction(item) }
  ];

  actions: Array<PoToolbarAction> = [
    { label: 'Start cash register', action: item => this.showAction(item) },
    { label: 'Finalize cash register', action: item => this.showAction(item) },
    { label: 'Cash register options', action: item => this.showAction(item) }
  ];

  title: string = 'PO Toolbar Logged';

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: PoToolbarAction) {
    window.open('https://github.com/po-ui/po-angular/blob/master/CHANGELOG.md', '_blank');

    item.type = 'default';
  }

  openDialog(item: PoToolbarAction) {
    this.poDialog.alert({
      title: 'Welcome',
      message: \`Hello Mr. Dev! Congratulations, you are a TOTVS!\`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: PoToolbarAction): void {
    this.poNotification.success(\`Action clicked: \${item.label}\`);
  }
}
`),o()()()()(),t(21,"div",10),r(22,"sample-po-toolbar-logged"),o(),r(23,"hr")),p&2&&(m(5),x("po-icon "+n.sampleCodeButtonIcon),m(),T(" ",n.sampleCodeButtonLabel),m(),c("ngClass",A(4,Ce,n.hideSampleCodeTabs)))},dependencies:[_,w,C,y,me],encapsulation:2})}return a})();var ce=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-toolbar-doc"]],standalone:!1,decls:530,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoToolbarAction>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoToolbarProfile"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(p,n){p&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoToolbarModule } from '@po-ui/ng-components';"),o()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-toolbar"),o()(),t(7,"h3",3),e(8,"Componente"),o(),t(9,"h4",4)(10,"code",5),e(11,"PoToolbarComponent"),o()(),t(12,"div",2)(13,"p"),e(14,"O componente "),t(15,"code"),e(16,"po-toolbar"),o(),e(17," \xE9 um cabe\xE7alho para o t\xEDtulo da aplica\xE7\xE3o e informa\xE7\xF5es de usu\xE1rio e notifica\xE7\xF5es quando houver necessidade. "),o()(),t(18,"div",6)(19,"h4",7),e(20,"Seletor"),o(),t(21,"pre",8),e(22,`<po-toolbar
    p-actions="Array<PoToolbarAction>"
    p-actions-icon="string | TemplateRef<void>"
    p-notification-actions="Array<PoToolbarAction>"
    p-notification-number="number"
    p-profile="PoToolbarProfile"
    p-profile-actions="Array<PoToolbarAction>"
    p-show-notification="boolean"
    p-title="string" >
</po-toolbar>
`),o()(),t(23,"h4",9),e(24,"Propriedades"),o(),t(25,"table",10)(26,"tr",11)(27,"th",12),e(28,"Nome"),o(),t(29,"th",12),e(30,"Tipo"),o(),t(31,"th",12),e(32,"Padr\xE3o"),o(),t(33,"th",12),e(34,"Descri\xE7\xE3o"),o()(),t(35,"tr",13)(36,"td",14)(37,"div",15)(38,"span",16),e(39," p-actions"),r(40,"br"),o()()(),t(41,"td",17)(42,"code",18),e(43,"Array<PoToolbarAction>"),o()(),t(44,"td",19),e(45,"-"),o(),t(46,"td",20)(47,"em")(48,"strong"),e(49,"(opcional)"),o()(),t(50,"p"),e(51,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone declarado em "),t(52,"code"),e(53,"p-actions-icon"),o(),e(54,"."),o()()(),t(55,"tr",13)(56,"td",14)(57,"div",15)(58,"span",16),e(59," p-actions-icon"),r(60,"br"),o()()(),t(61,"td",17)(62,"code",21),e(63,"string "),o(),t(64,"code",22),e(65," TemplateRef<void>"),o()(),t(66,"td",19)(67,"p")(68,"code"),e(69,"an-dots-three"),o()()(),t(70,"td",20)(71,"em")(72,"strong"),e(73,"(opcional)"),o()(),t(74,"p"),e(75,"Define um "),t(76,"a",23),e(77,"\xEDcone"),o(),e(78," para a propriedade "),t(79,"code"),e(80,"p-actions"),o(),e(81,"."),o(),t(82,"p"),e(83,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(84,"a",23),e(85,"Biblioteca de \xEDcones"),o(),e(86,". conforme exemplo abaixo:"),o(),t(87,"pre")(88,"code"),e(89,`<po-toolbar p-actions-icon="an an-user" [p-actions]="actions"></po-toolbar>
`),o()(),t(90,"p"),e(91,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(92,"em"),e(93,"Font Awesome"),o(),e(94,", da seguinte forma:"),o(),t(95,"pre")(96,"code"),e(97,`<po-toolbar p-actions-icon="far fa-comment-alt" [p-actions]="actions"></po-toolbar>
`),o()(),t(98,"p"),e(99,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(100,"code"),e(101,"TemplateRef"),o(),e(102,", conforme exemplo abaixo:"),o(),t(103,"pre")(104,"code"),e(105,`<po-toolbar [p-actions-icon]="template" [p-actions]="actions"></po-toolbar>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),o()(),t(106,"blockquote")(107,"p"),e(108,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(109,"code"),e(110,"font-size: inherit"),o(),e(111," caso o \xEDcone utilizado n\xE3o aplique-o."),o()(),t(112,"blockquote")(113,"p"),e(114,"Caso n\xE3o haja a\xE7\xF5es definidas em "),t(115,"code"),e(116,"p-actions"),o(),e(117,", o \xEDcone n\xE3o ser\xE1 exibido."),o()()()(),t(118,"tr",13)(119,"td",14)(120,"div",15)(121,"span",16),e(122," p-notification-actions"),r(123,"br"),o()()(),t(124,"td",17)(125,"code",18),e(126,"Array<PoToolbarAction>"),o()(),t(127,"td",19),e(128,"-"),o(),t(129,"td",20)(130,"em")(131,"strong"),e(132,"(opcional)"),o()(),t(133,"p"),e(134,"Lista de a\xE7\xF5es da notifica\xE7\xE3o."),o()()(),t(135,"tr",13)(136,"td",14)(137,"div",15)(138,"span",16),e(139," p-notification-number"),r(140,"br"),o()()(),t(141,"td",17)(142,"code",24),e(143,"number"),o()(),t(144,"td",19),e(145,"-"),o(),t(146,"td",20)(147,"em")(148,"strong"),e(149,"(opcional)"),o()(),t(150,"p"),e(151,"N\xFAmero de notifica\xE7\xF5es."),o()()(),t(152,"tr",13)(153,"td",14)(154,"div",15)(155,"span",16),e(156," p-profile"),r(157,"br"),o()()(),t(158,"td",17)(159,"code",25),e(160,"PoToolbarProfile"),o()(),t(161,"td",19),e(162,"-"),o(),t(163,"td",20)(164,"em")(165,"strong"),e(166,"(opcional)"),o()(),t(167,"p"),e(168,"Define o objeto que ser\xE1 o cabe\xE7alho da lista de a\xE7\xF5es com as informa\xE7\xF5es do perfil."),o()()(),t(169,"tr",13)(170,"td",14)(171,"div",15)(172,"span",16),e(173," p-profile-actions"),r(174,"br"),o()()(),t(175,"td",17)(176,"code",18),e(177,"Array<PoToolbarAction>"),o()(),t(178,"td",19),e(179,"-"),o(),t(180,"td",20)(181,"em")(182,"strong"),e(183,"(opcional)"),o()(),t(184,"p"),e(185,"Define uma lista de a\xE7\xF5es que ser\xE3o exibidas ao clicar no \xEDcone do perfil."),o()()(),t(186,"tr",13)(187,"td",14)(188,"div",15)(189,"span",16),e(190," p-show-notification"),r(191,"br"),o()()(),t(192,"td",17)(193,"code",26),e(194,"boolean"),o()(),t(195,"td",19),e(196,"-"),o(),t(197,"td",20)(198,"em")(199,"strong"),e(200,"(opcional)"),o()(),t(201,"p"),e(202,"Se falso, oculta o \xEDcone de notifica\xE7\xF5es."),o()()(),t(203,"tr",13)(204,"td",14)(205,"div",15)(206,"span",16),e(207," p-title"),r(208,"br"),o()()(),t(209,"td",17)(210,"code",21),e(211,"string"),o()(),t(212,"td",19),e(213,"-"),o(),t(214,"td",20)(215,"p"),e(216,"T\xEDtulo do "),t(217,"em"),e(218,"toolbar"),o(),e(219," e aplica\xE7\xE3o."),o()()()(),t(220,"h3"),e(221,"Interfaces"),o(),t(222,"h4",27)(223,"code",5),e(224,"PoToolbarAction"),o()(),t(225,"div",2)(226,"p"),e(227,"Interface para lista de a\xE7\xF5es do componente. "),o()(),t(228,"h4",9),e(229,"Propriedades"),o(),t(230,"table",10)(231,"tr",11)(232,"th",12),e(233,"Nome"),o(),t(234,"th",12),e(235,"Tipo"),o(),t(236,"th",12),e(237,"Descri\xE7\xE3o"),o()(),t(238,"tr",13)(239,"td",14)(240,"div",15)(241,"span",16),e(242," action"),r(243,"br"),o()()(),t(244,"td",17)(245,"code",28),e(246,"Function"),o()(),t(247,"td",20)(248,"em")(249,"strong"),e(250,"(opcional)"),o()(),t(251,"p"),e(252,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),o(),t(253,"p"),e(254,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),t(255,"code"),e(256,"subItems"),o(),e(257,"."),o(),t(258,"blockquote")(259,"p"),e(260,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),t(261,"em"),e(262,"bind"),o(),e(263,`:
`),t(264,"code"),e(265,"action: this.myFunction.bind(this)"),o()()()()(),t(266,"tr",13)(267,"td",14)(268,"div",15)(269,"span",16),e(270," disabled"),r(271,"br"),o()()(),t(272,"td",17)(273,"code",26),e(274,"boolean "),o(),t(275,"code",28),e(276," Function"),o()(),t(277,"td",20)(278,"em")(279,"strong"),e(280,"(opcional)"),o()(),t(281,"p"),e(282,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),o()()(),t(283,"tr",13)(284,"td",14)(285,"div",15)(286,"span",16),e(287," icon"),r(288,"br"),o()()(),t(289,"td",17)(290,"code",21),e(291,"string "),o(),t(292,"code",22),e(293," TemplateRef<void>"),o()(),t(294,"td",20)(295,"em")(296,"strong"),e(297,"(opcional)"),o()(),t(298,"p"),e(299,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),o(),t(300,"p"),e(301,"Aceita \xEDcones da "),t(302,"a",23),e(303,"Biblioteca de \xEDcones"),o(),e(304,`, fontes externas (ex: Font Awesome)
ou um `),t(305,"code"),e(306,"TemplateRef"),o(),e(307," para \xEDcones customizados."),o(),t(308,"pre")(309,"code"),e(310,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),o()()()(),t(311,"tr",13)(312,"td",14)(313,"div",15)(314,"span",16),e(315," label"),r(316,"br"),o()()(),t(317,"td",17)(318,"code",21),e(319,"string"),o()(),t(320,"td",20)(321,"p"),e(322,"R\xF3tulo da a\xE7\xE3o."),o(),t(323,"p"),e(324,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),t(325,"code"),e(326,"subItems"),o(),e(327,"."),o()()(),t(328,"tr",13)(329,"td",14)(330,"div",15)(331,"span",16),e(332," selected"),r(333,"br"),o()()(),t(334,"td",17)(335,"code",26),e(336,"boolean"),o()(),t(337,"td",20)(338,"em")(339,"strong"),e(340,"(opcional)"),o()(),t(341,"p"),e(342,"Define se a a\xE7\xE3o est\xE1 selecionada."),o()()(),t(343,"tr",13)(344,"td",14)(345,"div",15)(346,"span",16),e(347," separator"),r(348,"br"),o()()(),t(349,"td",17)(350,"code",26),e(351,"boolean"),o()(),t(352,"td",20)(353,"em")(354,"strong"),e(355,"(opcional)"),o()(),t(356,"p"),e(357,"Atribui uma linha separadora acima do item."),o()()(),t(358,"tr",13)(359,"td",14)(360,"div",15)(361,"span",16),e(362," subItems"),r(363,"br"),o()()(),t(364,"td",17)(365,"code",29),e(366,"Array<PoPopupAction>"),o()(),t(367,"td",20)(368,"em")(369,"strong"),e(370,"(opcional)"),o()(),t(371,"p"),e(372,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),o(),t(373,"p"),e(374,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),o(),t(375,"blockquote")(376,"p"),e(377,"As propriedades "),t(378,"code"),e(379,"disabled"),o(),e(380,", "),t(381,"code"),e(382,"type"),o(),e(383," e "),t(384,"code"),e(385,"visible"),o(),e(386," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),o()(),t(387,"blockquote")(388,"p"),e(389,"Quando "),t(390,"code"),e(391,"url"),o(),e(392," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),o()(),t(393,"blockquote")(394,"p"),e(395,"Em subn\xEDveis aninhados, o "),t(396,"code"),e(397,"icon"),o(),e(398," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),o()()()(),t(399,"tr",13)(400,"td",14)(401,"div",15)(402,"span",16),e(403," type"),r(404,"br"),o()()(),t(405,"td",17)(406,"code",21),e(407,"string"),o()(),t(408,"td",20)(409,"em")(410,"strong"),e(411,"(opcional)"),o()(),t(412,"p"),e(413,"Define a cor do item."),o(),t(414,"p"),e(415,"Valores v\xE1lidos:"),o(),t(416,"ul")(417,"li")(418,"code"),e(419,"default"),o()(),t(420,"li")(421,"code"),e(422,"danger"),o()()()()(),t(423,"tr",13)(424,"td",14)(425,"div",15)(426,"span",16),e(427," url"),r(428,"br"),o()()(),t(429,"td",17)(430,"code",21),e(431,"string"),o()(),t(432,"td",20)(433,"em")(434,"strong"),e(435,"(opcional)"),o()(),t(436,"p"),e(437,"URL para redirecionamento. Aceita rotas internas e links externos."),o(),t(438,"p"),e(439,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),t(440,"code"),e(441,"url"),o(),e(442," \xE9 informada em um agrupador, o clique "),t(443,"strong"),e(444,"n\xE3o abrir\xE1 os subitens"),o(),e(445,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),o(),t(446,"blockquote")(447,"p"),e(448,"Quando informada, tem prioridade sobre a propriedade "),t(449,"code"),e(450,"action"),o(),e(451,"."),o()()()(),t(452,"tr",13)(453,"td",14)(454,"div",15)(455,"span",16),e(456," visible"),r(457,"br"),o()()(),t(458,"td",17)(459,"code",26),e(460,"boolean "),o(),t(461,"code",28),e(462," Function"),o()(),t(463,"td",20)(464,"em")(465,"strong"),e(466,"(opcional)"),o()(),t(467,"p"),e(468,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),o()()()(),t(469,"h4",27)(470,"code",5),e(471,"PoToolbarProfile"),o()(),t(472,"div",2)(473,"p"),e(474,"Interface que define o perfil do "),t(475,"code"),e(476,"PoToolbarComponent"),o(),e(477,"."),o()(),t(478,"h4",9),e(479,"Propriedades"),o(),t(480,"table",10)(481,"tr",11)(482,"th",12),e(483,"Nome"),o(),t(484,"th",12),e(485,"Tipo"),o(),t(486,"th",12),e(487,"Descri\xE7\xE3o"),o()(),t(488,"tr",13)(489,"td",14)(490,"div",15)(491,"span",16),e(492," avatar"),r(493,"br"),o()()(),t(494,"td",17)(495,"code",21),e(496,"string"),o()(),t(497,"td",20)(498,"em")(499,"strong"),e(500,"(opcional)"),o()(),t(501,"p"),e(502,"Define o caminho da imagem do perfil."),o()()(),t(503,"tr",13)(504,"td",14)(505,"div",15)(506,"span",16),e(507," subtitle"),r(508,"br"),o()()(),t(509,"td",17)(510,"code",21),e(511,"string"),o()(),t(512,"td",20)(513,"em")(514,"strong"),e(515,"(opcional)"),o()(),t(516,"p"),e(517,"Define um texto com menor destaque ao lado da imagem do perfil, como por exemplo o e-mail de usu\xE1rio."),o()()(),t(518,"tr",13)(519,"td",14)(520,"div",15)(521,"span",16),e(522," title"),r(523,"br"),o()()(),t(524,"td",17)(525,"code",21),e(526,"string"),o()(),t(527,"td",20)(528,"p"),e(529,"Define um texto com maior destaque ao lado da imagem do perfil, como por exemplo o nome de usu\xE1rio."),o()()()()())},dependencies:[w],encapsulation:2})}return a})();var de=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||a)(B(G),B(U))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Toolbar",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,n){p&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return n.changeTab("doc")}),r(3,"sample-po-toolbar-doc"),o(),t(4,"po-tab",3),S("p-click",function(){return n.changeTab("web")}),r(5,"sample-po-toolbar-basic-view")(6,"sample-po-toolbar-labs-view")(7,"sample-po-toolbar-logged-view"),o()()()),p&2&&(c("p-actions",n.actions),m(2),c("p-active",n.activeTab==="doc"),m(2),c("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[te,C,y,le,pe,se,ce],encapsulation:2})}return a})();var Pe=[{path:"",component:de}],ue=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=V({type:a});static \u0275inj=L({imports:[W.forChild(Pe),W]})}return a})();var nt=(()=>{class a{static \u0275fac=function(p){return new(p||a)};static \u0275mod=V({type:a});static \u0275inj=L({imports:[ne,ue]})}return a})();export{nt as DocPoToolbarModule};
