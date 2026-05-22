import{o as w,p as ce}from"./chunk-WYOAC7KN.js";import{Hb as A,Ib as y,Ja as me,Ob as L,Sa as se,U as re,ja as de,ub as pe,w as F,ya as le,za as B}from"./chunk-XOCFD5XY.js";import{Ca as q,Cb as Y,Da as j,Ea as s,Fa as n,Ga as e,Ha as o,I,Jb as Z,Mb as M,Mc as $,Nc as ee,O as h,Oa as O,Oc as te,P as S,Pa as E,Pc as ne,Qc as ie,Ra as R,Va as G,Wa as Q,Xa as J,bb as T,cb as t,cd as oe,eb as _,ed as ae,gb as b,gd as U,ha as m,hb as g,ib as x,ma as v,oa as u,pa as D,qb as P,rb as H,sb as K,ta as W,ub as X}from"./chunk-XD3NZLB4.js";import{a as N,b as V}from"./chunk-GAL4ENT6.js";var ue=(()=>{class a{poNotification;headerBrand={title:"Minha empresa",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};constructor(d){this.poNotification=d}myAction(d){this.poNotification.success(`Action clicked: ${d}`)}static \u0275fac=function(r){return new(r||a)(v(B))};static \u0275cmp=u({type:a,selectors:[["sample-po-header-basic"]],standalone:!1,decls:1,vars:2,consts:[[3,"p-brand","p-side-menu-only-action"]],template:function(r,i){r&1&&o(0,"po-header",0),r&2&&s("p-brand",i.headerBrand)("p-side-menu-only-action",!0)},dependencies:[L],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var ye=a=>({"docs-sample-code-tabs":a}),he=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-header-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Header Basic"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-header-basic/sample-po-header-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-header [p-brand]="headerBrand" [p-side-menu-only-action]="true"></po-header>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-header-basic/sample-po-header-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

import { PoHeaderBrand, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-basic',
  templateUrl: './sample-po-header-basic.component.html',
  standalone: false,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderBasicComponent {
  headerBrand: PoHeaderBrand = {
    title: 'Minha empresa',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  constructor(private poNotification: PoNotificationService) {}

  myAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()()()(),n(21,"div",10),o(22,"sample-po-header-basic"),e(),o(23,"hr")),r&2&&(m(5),T("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel),m(),s("ngClass",H(4,ye,i.hideSampleCodeTabs)))},dependencies:[M,w,A,y,ue],encapsulation:2})}return a})();var Pe=()=>({label:"Positive",value:"positive"}),Te=()=>({label:"Negative",value:"negative"}),_e=()=>({label:"Warning",value:"warning"}),He=()=>({label:"Disabled",value:"disabled"}),Me=(a,C,d,r)=>[a,C,d,r],Be=()=>({label:"Medium",value:"medium"}),Le=()=>({label:"Small",value:"small"}),ke=(a,C)=>[a,C],Se=(()=>{class a{poNotification;headerBrandTitle="";headerBrandLogo="";headerBrandSmallLogo="";headerBrand={};menuActionLabel="";menuActionEvent="";menuActions=[];actionNewTool={tooltip:"",icon:"",badge:null,action:null,label:""};actionNewToolEvent=!1;actionTools=[];newActionUser={avatar:"",customerBrand:"",status:"positive"};actionUser={avatar:"",customerBrand:"",status:"positive"};size="medium";constructor(d){this.poNotification=d}addBrand(){this.headerBrand={logo:this.headerBrandLogo,title:this.headerBrandTitle,smallLogo:this.headerBrandSmallLogo},this.headerBrandTitle="",this.headerBrandLogo="",this.headerBrandSmallLogo=""}addAction(){this.menuActions=[...this.menuActions,{label:this.menuActionLabel,action:this.menuActionEvent?this.showAction.bind(this,this.menuActionEvent):null}],this.menuActionLabel="",this.menuActionEvent=""}addTool(d){let r=d;d.label=`${this.actionTools.length}`,this.actionNewToolEvent&&(r.action=this.showAction.bind(this,"Tool Actions!")),this.actionTools=[...this.actionTools,d],this.actionNewTool={}}addUser(){this.actionUser=N({},this.newActionUser),this.newActionUser={avatar:"",customerBrand:"",status:"positive"}}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}reset(){this.headerBrand={},this.menuActions=[],this.actionNewTool={},this.actionTools=[],this.actionUser={avatar:"",customerBrand:"",status:"positive"},this.newActionUser={avatar:"",customerBrand:"",status:"positive"},this.size="medium"}static \u0275fac=function(r){return new(r||a)(v(B))};static \u0275cmp=u({type:a,selectors:[["sample-po-header-labs"]],standalone:!1,decls:40,vars:38,consts:[["formAction","ngForm"],[3,"p-side-menu-only-action","p-brand","p-menu-items","p-actions-tools","p-header-user","p-size"],[1,"po-row","po-mt-4"],["p-clean","","p-label","T\xEDtulo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Logo da marca - small",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-mt-1"],["p-label","Add Brand",1,"po-lg-6","po-md-6",3,"p-click"],[1,"po-row","po-mt-2"],[1,"po-lg-12","po-mb-2"],["p-clean","","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-clean","","p-label","Label",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Action",1,"po-md-3",3,"p-click","p-disabled"],["name","icon","p-clean","","p-label","Icon",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","tooltip","p-clean","","p-label","Tooltip",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","badge","p-clean","","p-label","Badge",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","switch","name","action","p-label","Action",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["p-label","Add settings",1,"po-md-3",3,"p-click","p-disabled"],["name","brand","p-clean","","p-label","Logo Brand",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","avatar","p-clean","","p-label","Avatar",1,"po-lg-6","po-md-6",3,"ngModelChange","ngModel"],["name","radioGroupBasic","p-label","Status",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-12",3,"ngModelChange","ngModel","p-options"],["p-label","Reset",1,"po-md-3",3,"p-click"]],template:function(r,i){if(r&1){let p=O();o(0,"po-header",1),n(1,"div",2)(2,"po-input",3),x("ngModelChange",function(l){return h(p),g(i.headerBrandTitle,l)||(i.headerBrandTitle=l),S(l)}),e(),n(3,"po-input",4),x("ngModelChange",function(l){return h(p),g(i.headerBrandLogo,l)||(i.headerBrandLogo=l),S(l)}),e(),n(4,"po-input",5),x("ngModelChange",function(l){return h(p),g(i.headerBrandSmallLogo,l)||(i.headerBrandSmallLogo=l),S(l)}),e(),n(5,"div",6)(6,"po-button",7),E("p-click",function(){return i.addBrand()}),e()()(),o(7,"hr"),n(8,"div",8)(9,"h3",9),t(10,"A\xE7\xF5es dos itens de menu"),e(),n(11,"po-input",10),x("ngModelChange",function(l){return h(p),g(i.menuActionEvent,l)||(i.menuActionEvent=l),S(l)}),e(),n(12,"po-input",11),x("ngModelChange",function(l){return h(p),g(i.menuActionLabel,l)||(i.menuActionLabel=l),S(l)}),e(),n(13,"po-button",12),E("p-click",function(){return i.addAction()}),e()(),o(14,"hr"),n(15,"h3",9),t(16,"A\xE7\xF5es das configura\xE7\xF5es"),e(),n(17,"form",8,0)(19,"po-input",13),x("ngModelChange",function(l){return h(p),g(i.actionNewTool.icon,l)||(i.actionNewTool.icon=l),S(l)}),e(),n(20,"po-input",14),x("ngModelChange",function(l){return h(p),g(i.actionNewTool.tooltip,l)||(i.actionNewTool.tooltip=l),S(l)}),e(),n(21,"po-number",15),x("ngModelChange",function(l){return h(p),g(i.actionNewTool.badge,l)||(i.actionNewTool.badge=l),S(l)}),e(),n(22,"po-switch",16),x("ngModelChange",function(l){return h(p),g(i.actionNewToolEvent,l)||(i.actionNewToolEvent=l),S(l)}),e(),n(23,"po-button",17),E("p-click",function(){return i.addTool(i.actionNewTool)}),e()(),o(24,"hr"),n(25,"h3",9),t(26,"A\xE7\xF5es do Usu\xE1rio"),e(),n(27,"form",8,0)(29,"po-input",18),x("ngModelChange",function(l){return h(p),g(i.newActionUser.customerBrand,l)||(i.newActionUser.customerBrand=l),S(l)}),e(),n(30,"po-input",19),x("ngModelChange",function(l){return h(p),g(i.newActionUser.avatar,l)||(i.newActionUser.avatar=l),S(l)}),e(),n(31,"po-radio-group",20),x("ngModelChange",function(l){return h(p),g(i.newActionUser.status,l)||(i.newActionUser.status=l),S(l)}),e(),n(32,"po-button",17),E("p-click",function(){return i.addUser()}),e(),o(33,"hr"),n(34,"h3",9),t(35,"Varia\xE7\xF5es de tamanho"),e(),n(36,"div",8)(37,"po-radio-group",21),x("ngModelChange",function(l){return h(p),g(i.size,l)||(i.size=l),S(l)}),e()(),o(38,"hr"),n(39,"po-button",22),E("p-click",function(){return i.reset()}),e()()}r&2&&(s("p-side-menu-only-action",!0)("p-brand",i.headerBrand)("p-menu-items",i.menuActions)("p-actions-tools",i.actionTools)("p-header-user",i.actionUser)("p-size",i.size),m(2),b("ngModel",i.headerBrandTitle),m(),b("ngModel",i.headerBrandLogo),m(),b("ngModel",i.headerBrandSmallLogo),m(7),b("ngModel",i.menuActionEvent),m(),b("ngModel",i.menuActionLabel),m(),s("p-disabled",!i.menuActionLabel),m(6),b("ngModel",i.actionNewTool.icon),m(),b("ngModel",i.actionNewTool.tooltip),m(),b("ngModel",i.actionNewTool.badge),m(),b("ngModel",i.actionNewToolEvent),m(),s("p-disabled",i.actionTools.length>2),m(6),b("ngModel",i.newActionUser.customerBrand),m(),b("ngModel",i.newActionUser.avatar),m(),b("ngModel",i.newActionUser.status),s("p-options",X(28,Me,P(24,Pe),P(25,Te),P(26,_e),P(27,He))),m(),s("p-disabled",!i.newActionUser.avatar||i.newActionUser.customerBrand),m(5),b("ngModel",i.size),s("p-options",K(35,ke,P(33,Be),P(34,Le))))},dependencies:[ie,$,ee,ne,te,F,re,me,se,le,L],styles:["po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var Ie=a=>({"docs-sample-code-tabs":a}),be=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-header-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Header Labs"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-header-labs/sample-po-header-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-header
  [p-side-menu-only-action]="true"
  [p-brand]="headerBrand"
  [p-menu-items]="menuActions"
  [p-actions-tools]="actionTools"
  [p-header-user]="actionUser"
  [p-size]="size"
></po-header>

<div class="po-row po-mt-4">
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandTitle" p-clean p-label="T\xEDtulo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandLogo" p-clean p-label="Logo da marca"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="headerBrandSmallLogo" p-clean p-label="Logo da marca - small">
  </po-input>
  <div class="po-row po-mt-1">
    <po-button class="po-lg-6 po-md-6" p-label="Add Brand" (p-click)="addBrand()"></po-button>
  </div>
</div>
<hr />
<div class="po-row po-mt-2">
  <h3 class="po-lg-12 po-mb-2">A\xE7\xF5es dos itens de menu</h3>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionEvent" p-clean p-label="Action"> </po-input>
  <po-input class="po-lg-6 po-md-6" [(ngModel)]="menuActionLabel" p-clean p-label="Label"> </po-input>
  <po-button [p-disabled]="!menuActionLabel" class="po-md-3" p-label="Add Action" (p-click)="addAction()"></po-button>
</div>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es das configura\xE7\xF5es</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="icon" [(ngModel)]="actionNewTool.icon" p-clean p-label="Icon"> </po-input>
  <po-input class="po-lg-6 po-md-6" name="tooltip" [(ngModel)]="actionNewTool.tooltip" p-clean p-label="Tooltip">
  </po-input>
  <po-number class="po-lg-6 po-md-6" name="badge" [(ngModel)]="actionNewTool.badge" p-clean p-label="Badge">
  </po-number>
  <po-switch class="po-lg-6 po-md-6" name="switch" [(ngModel)]="actionNewToolEvent" name="action" p-label="Action">
  </po-switch>
  <po-button
    [p-disabled]="actionTools.length > 2"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addTool(actionNewTool)"
  ></po-button>
</form>
<hr />
<h3 class="po-lg-12 po-mb-2">A\xE7\xF5es do Usu\xE1rio</h3>
<form #formAction="ngForm" class="po-row po-mt-2">
  <po-input class="po-lg-6 po-md-6" name="brand" [(ngModel)]="newActionUser.customerBrand" p-clean p-label="Logo Brand">
  </po-input>
  <po-input class="po-lg-6 po-md-6" name="avatar" [(ngModel)]="newActionUser.avatar" p-clean p-label="Avatar">
  </po-input>

  <po-radio-group
    name="radioGroupBasic"
    class="po-lg-12"
    p-label="Status"
    [(ngModel)]="newActionUser.status"
    [p-options]="[
      { label: 'Positive', value: 'positive' },
      { label: 'Negative', value: 'negative' },
      { label: 'Warning', value: 'warning' },
      { label: 'Disabled', value: 'disabled' }
    ]"
  >
  </po-radio-group>
  <po-button
    [p-disabled]="!newActionUser.avatar || newActionUser.customerBrand"
    class="po-md-3"
    p-label="Add settings"
    (p-click)="addUser()"
  ></po-button>

  <hr />
  <h3 class="po-lg-12 po-mb-2">Varia\xE7\xF5es de tamanho</h3>
  <div class="po-row po-mt-2">
    <po-radio-group
      class="po-md-12 po-lg-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="[
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' }
      ]"
    >
    </po-radio-group>
  </div>

  <hr />

  <po-button class="po-md-3" p-label="Reset" (p-click)="reset()"></po-button>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-header-labs/sample-po-header-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-labs',
  templateUrl: './sample-po-header-labs.component.html',
  standalone: false,
  styles: \`
    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderLabsComponent {
  headerBrandTitle = '';
  headerBrandLogo = '';
  headerBrandSmallLogo = '';
  headerBrand: PoHeaderBrand = {};

  menuActionLabel = '';
  menuActionEvent = '';
  menuActions: Array<PoHeaderActions> = [];

  actionNewTool: PoHeaderActionTool = {
    tooltip: '',
    icon: '',
    badge: null,
    action: null,
    label: ''
  };
  actionNewToolEvent = false;
  actionTools: Array<PoHeaderActionTool> = [];

  newActionUser: any = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  actionUser: PoHeaderUser = {
    avatar: '',
    customerBrand: '',
    status: 'positive'
  };

  size: string = 'medium';

  constructor(private poNotification: PoNotificationService) {}

  addBrand() {
    this.headerBrand = {
      logo: this.headerBrandLogo,
      title: this.headerBrandTitle,
      smallLogo: this.headerBrandSmallLogo
    };
    this.headerBrandTitle = '';
    this.headerBrandLogo = '';
    this.headerBrandSmallLogo = '';
  }

  addAction() {
    this.menuActions = [
      ...this.menuActions,
      {
        label: this.menuActionLabel,
        action: this.menuActionEvent ? this.showAction.bind(this, this.menuActionEvent) : null
      }
    ];
    this.menuActionLabel = '';
    this.menuActionEvent = '';
  }

  addTool(action: PoHeaderActionTool) {
    const newAction = action;
    action.label = \`\${this.actionTools.length}\`;
    if (this.actionNewToolEvent) {
      newAction.action = this.showAction.bind(this, 'Tool Actions!');
    }
    this.actionTools = [...this.actionTools, action];
    this.actionNewTool = {};
  }

  addUser() {
    this.actionUser = { ...this.newActionUser };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }

  reset() {
    this.headerBrand = {};
    this.menuActions = [];
    this.actionNewTool = {};
    this.actionTools = [];
    this.actionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.newActionUser = {
      avatar: '',
      customerBrand: '',
      status: 'positive'
    };
    this.size = 'medium';
  }
}
`),e()()()()(),n(21,"div",10),o(22,"sample-po-header-labs"),e(),o(23,"hr")),r&2&&(m(5),T("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel),m(),s("ngClass",H(4,Ie,i.hideSampleCodeTabs)))},dependencies:[M,w,A,y,Se],encapsulation:2})}return a})();var Fe=["meuTemplate"],Ve=(a,C)=>C.icon;function Ue(a,C){if(a&1&&o(0,"po-button",4),a&2){let d=C.$implicit;s("p-icon",d.icon)}}function ze(a,C){if(a&1&&(n(0,"div",2)(1,"p"),t(2,"Meus aplicativos"),e(),o(3,"br"),n(4,"div",3),q(5,Ue,1,1,"po-button",4,Ve),e()()),a&2){let d=R();m(5),j(d.systemApps)}}var ge=(()=>{class a{poNotification;cd;meuTemplate;listItem=[{label:"A\xE7\xE3o 1",action:this.myAction.bind(this,"A\xE7\xE3o 1")},{label:"A\xE7\xE3o 2",action:this.myAction.bind(this,"A\xE7\xE3o 2")},{label:"A\xE7\xE3o 3",action:this.myAction.bind(this,"A\xE7\xE3o 3")}];headerBrand={title:"PO UI",logo:"../../../assets/po-logos/po_color.png",action:this.myAction.bind(this,"Logo a\xE7\xE3o")};menuItems=[{label:"Item 1",action:this.myAction.bind(this,"Item 1")},{label:"Item 2",action:this.myAction.bind(this,"Item 2")},{label:"Item 3",action:this.myAction.bind(this,"Item 3")}];actionTools=[{label:"Configura\xE7\xF5es",icon:"an an-gear-six",tooltip:"Configura\xE7\xF5es do sistema",action:this.myAction.bind(this,"Configura\xE7\xE3o")},{label:"Aplicativos",icon:"an an-dots-nine",tooltip:"Aplicativos do sistema",popover:{content:this.meuTemplate}},{label:"Notifica\xE7\xF5es",icon:"an an-chat-circle-dots",tooltip:"Notifica\xE7\xF5es do usu\xE1rio",badge:5,items:this.listItem}];headerUser={avatar:"../../../assets/graphics/avatar1.png",customerBrand:"../../../assets/po-logos/po_black.png",action:this.myAction.bind(this,"Meu Usu\xE1rio"),status:"positive"};systemApps=[{icon:"an an-reddit-logo",action:this.myAction.bind(this,"Aplicativo 1")},{icon:"an an-twitter-logo",action:this.myAction.bind(this,"Aplicativo 2")},{icon:"an an-twitch-logo",action:this.myAction.bind(this,"Aplicativo 3")},{icon:"an an-facebook-logo",action:this.myAction.bind(this,"Aplicativo 4")},{icon:"an an-meta-logo",action:this.myAction.bind(this,"Aplicativo 5")},{icon:"an an-amazon-logo",action:this.myAction.bind(this,"Aplicativo 6")}];constructor(d,r){this.poNotification=d,this.cd=r}ngAfterViewInit(){this.actionTools=this.actionTools.map(d=>d.popover?V(N({},d),{popover:V(N({},d.popover),{content:this.meuTemplate})}):d),this.cd.detectChanges()}myAction(d){this.poNotification.success({message:`Action clicked: ${d}`,orientation:de.Top})}static \u0275fac=function(r){return new(r||a)(v(B),v(Z))};static \u0275cmp=u({type:a,selectors:[["sample-po-header-apps"]],viewQuery:function(r,i){if(r&1&&G(Fe,5),r&2){let p;Q(p=J())&&(i.meuTemplate=p.first)}},standalone:!1,decls:3,vars:5,consts:[["meuTemplate",""],[3,"p-brand","p-menu-items","p-actions-tools","p-header-user","p-side-menu-only-action"],[1,"custom-template"],[1,"app-wrapper"],[3,"p-icon"]],template:function(r,i){r&1&&(o(0,"po-header",1),W(1,ze,7,0,"ng-template",null,0,Y)),r&2&&s("p-brand",i.headerBrand)("p-menu-items",i.menuItems)("p-actions-tools",i.actionTools)("p-header-user",i.headerUser)("p-side-menu-only-action",!0)},dependencies:[F,L],styles:[".app-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;justify-items:center}.custom-template[_ngcontent-%COMP%]{padding:.5rem}.custom-template[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:var(--color-neutral-dark-90)}po-header[_ngcontent-%COMP%]{--nav-position: flex}"]})}return a})();var qe=a=>({"docs-sample-code-tabs":a}),xe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-header-apps-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Header Apps"),e(),n(4,"a",2),E("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-header-apps/sample-po-header-apps.component.html"),e(),n(13,"pre",7),t(14,`<po-header
  [p-brand]="headerBrand"
  [p-menu-items]="menuItems"
  [p-actions-tools]="actionTools"
  [p-header-user]="headerUser"
  [p-side-menu-only-action]="true"
></po-header>

<ng-template #meuTemplate>
  <div class="custom-template">
    <p>Meus aplicativos</p>
    <br />
    <div class="app-wrapper">
      @for (app of systemApps; track app.icon) {
        <po-button [p-icon]="app.icon"></po-button>
      }
    </div>
  </div>
</ng-template>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-header-apps/sample-po-header-apps.component.ts"),e(),n(19,"pre",9),t(20,`import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';

import {
  PoHeaderActions,
  PoHeaderActionTool,
  PoHeaderActionToolItem,
  PoHeaderBrand,
  PoHeaderUser,
  PoNotificationService,
  PoToasterOrientation
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-header-apps',
  templateUrl: './sample-po-header-apps.component.html',
  standalone: false,
  styles: \`
    .app-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      justify-items: center;
    }

    .custom-template {
      padding: 0.5rem;
    }

    .custom-template p {
      text-align: center;
      font-weight: bold;
      color: var(--color-neutral-dark-90);
    }

    /* alterado apenas para demonstra\xE7\xE3o no portal*/
    po-header {
      --nav-position: flex;
    }
  \`
})
export class SamplePoHeaderAppsComponent implements AfterViewInit {
  @ViewChild('meuTemplate') meuTemplate!: TemplateRef<any>;

  listItem: Array<PoHeaderActionToolItem> = [
    {
      label: 'A\xE7\xE3o 1',
      action: this.myAction.bind(this, 'A\xE7\xE3o 1')
    },
    { label: 'A\xE7\xE3o 2', action: this.myAction.bind(this, 'A\xE7\xE3o 2') },
    { label: 'A\xE7\xE3o 3', action: this.myAction.bind(this, 'A\xE7\xE3o 3') }
  ];

  headerBrand: PoHeaderBrand = {
    title: 'PO UI',
    logo: '../../../assets/po-logos/po_color.png',
    action: this.myAction.bind(this, 'Logo a\xE7\xE3o')
  };

  menuItems: Array<PoHeaderActions> = [
    {
      label: 'Item 1',
      action: this.myAction.bind(this, 'Item 1')
    },
    { label: 'Item 2', action: this.myAction.bind(this, 'Item 2') },
    { label: 'Item 3', action: this.myAction.bind(this, 'Item 3') }
  ];

  actionTools: Array<PoHeaderActionTool> = [
    {
      label: 'Configura\xE7\xF5es',
      icon: 'an an-gear-six',
      tooltip: 'Configura\xE7\xF5es do sistema',
      action: this.myAction.bind(this, 'Configura\xE7\xE3o')
    },
    {
      label: 'Aplicativos',
      icon: 'an an-dots-nine',
      tooltip: 'Aplicativos do sistema',
      popover: {
        content: this.meuTemplate
      }
    },
    {
      label: 'Notifica\xE7\xF5es',
      icon: 'an an-chat-circle-dots',
      tooltip: 'Notifica\xE7\xF5es do usu\xE1rio',
      badge: 5,
      items: this.listItem
    }
  ];

  headerUser: PoHeaderUser = {
    avatar: '../../../assets/graphics/avatar1.png',
    customerBrand: '../../../assets/po-logos/po_black.png',
    action: this.myAction.bind(this, 'Meu Usu\xE1rio'),
    status: 'positive'
  };

  systemApps = [
    {
      icon: 'an an-reddit-logo',
      action: this.myAction.bind(this, 'Aplicativo 1')
    },
    {
      icon: 'an an-twitter-logo',
      action: this.myAction.bind(this, 'Aplicativo 2')
    },
    {
      icon: 'an an-twitch-logo',
      action: this.myAction.bind(this, 'Aplicativo 3')
    },
    {
      icon: 'an an-facebook-logo',
      action: this.myAction.bind(this, 'Aplicativo 4')
    },
    {
      icon: 'an an-meta-logo',
      action: this.myAction.bind(this, 'Aplicativo 5')
    },
    {
      icon: 'an an-amazon-logo',
      action: this.myAction.bind(this, 'Aplicativo 6')
    }
  ];

  constructor(
    private poNotification: PoNotificationService,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.actionTools = this.actionTools.map(action => {
      if (action.popover) {
        return {
          ...action,
          popover: {
            ...action.popover,
            content: this.meuTemplate
          }
        };
      }
      return action;
    });

    this.cd.detectChanges();
  }

  myAction(action: string): any {
    this.poNotification.success({ message: \`Action clicked: \${action}\`, orientation: PoToasterOrientation.Top });
  }
}
`),e()()()()(),n(21,"div",10),o(22,"sample-po-header-apps"),e(),o(23,"hr")),r&2&&(m(5),T("po-icon "+i.sampleCodeButtonIcon),m(),_(" ",i.sampleCodeButtonLabel),m(),s("ngClass",H(4,qe,i.hideSampleCodeTabs)))},dependencies:[M,w,A,y,ge],encapsulation:2})}return a})();var ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=u({type:a,selectors:[["sample-po-header-doc"]],standalone:!1,decls:1371,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionTool>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoHeaderBrand"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<any>"],["pan","",1,"docs-api-property-type","PoHeaderUser"],["pan","",1,"docs-api-property-type","PoHeaderLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoMenuItem>"],["pan","",1,"docs-api-property-type","Array<PoHeaderActions>"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoHeaderActionToolItem>"],["pan","",1,"docs-api-property-type","PoHeaderActionPopoverAction"],["pan","",1,"docs-api-property-type","'positive'"],["pan","",1,"docs-api-property-type","'negative'"],["pan","",1,"docs-api-property-type","'warning'"],["pan","",1,"docs-api-property-type","'disabled'"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoHeaderModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),n(7,"code"),t(8,"po-header"),e(),t(9,"."),e()(),n(10,"h3",3),t(11,"Componente"),e(),n(12,"h4",4)(13,"code",5),t(14,"PoHeaderComponent"),e()(),n(15,"div",2)(16,"p"),t(17,"O componente "),n(18,"code"),t(19,"po-header"),e(),t(20," \xE9 um cabe\xE7alho fixo que permite apresentar itens com a\xE7\xF5es, divididos em "),n(21,"code"),t(22,"p-brand"),e(),t(23,", "),n(24,"code"),t(25,"p-menu-items"),e(),t(26,", "),n(27,"code"),t(28,"p-actions-tools"),e(),t(29," e "),n(30,"code"),t(31,"p-header-user"),e(),t(32,"."),e(),n(33,"ul")(34,"li")(35,"code"),t(36,"p-brand"),e(),t(37,": Possibilita a inclus\xE3o de uma imagem e o titulo do header."),e(),n(38,"li")(39,"code"),t(40,"p-menu-items"),e(),t(41,": Possibilita a inclus\xE3o de uma lista de itens com a\xE7\xF5es ou links."),e(),n(42,"li")(43,"code"),t(44,"p-actions-tools"),e(),t(45,": Possibilita a inclus\xE3o de at\xE9 3 bot\xF5es com a\xE7\xF5es."),e(),n(46,"li")(47,"code"),t(48,"p-header-user"),e(),t(49,": Possibilita a inclus\xE3o de uma imagem representando a marca e avatar."),e()(),n(50,"p"),t(51,"O componente "),n(52,"code"),t(53,"po-header"),e(),t(54," pode ser usado de duas formas:"),e(),n(55,"p"),t(56,"Com "),n(57,"code"),t(58,"po-menu"),e(),t(59," definido pelo usu\xE1rio:"),e(),n(60,"pre")(61,"code"),t(62,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
></po-header>

<div class="po-wrapper">
  <po-menu [p-menus]="itemsMenu">
  </po-menu>

  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),e()(),n(63,"p"),t(64,"Passando os itens diretamente para o "),n(65,"code"),t(66,"po-header"),e(),t(67," pela propriedade "),n(68,"code"),t(69,"p-menus"),e(),t(70,":"),e(),n(71,"pre")(72,"code"),t(73,`...
<po-header
  [p-brand]="brand"
  [p-menu-items]="items"
  [p-actions-tools]="actions"
  [p-header-user]="user"
  [p-menus]="itensMenu"
></po-header>

<div class="po-wrapper">
  <po-page-default>
      <router-outlet></router-outlet>
  </po-page-default>
</div>
...
`),e()(),n(74,"h4"),t(75,"Tokens customiz\xE1veis"),e(),n(76,"p"),t(77,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),n(78,"blockquote")(79,"p"),t(80,"Para maiores informa\xE7\xF5es, acesse o guia "),n(81,"a",6),t(82,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(83,"."),e()(),n(84,"table")(85,"thead")(86,"tr")(87,"th"),t(88,"Propriedade"),e(),n(89,"th"),t(90,"Descri\xE7\xE3o"),e(),n(91,"th"),t(92,"Valor Padr\xE3o"),e()()(),n(93,"tbody")(94,"tr")(95,"td")(96,"code"),t(97,"--font-family"),e()(),n(98,"td"),t(99,"Fam\xEDlia tipogr\xE1fica usada"),e(),n(100,"td")(101,"code"),t(102,"var(--font-family-theme)"),e()()(),n(103,"tr")(104,"td")(105,"code"),t(106,"--font-weight"),e()(),n(107,"td"),t(108,"Peso da fonte"),e(),n(109,"td")(110,"code"),t(111,"var(--font-weight-bold)"),e()()(),n(112,"tr")(113,"td")(114,"code"),t(115,"--text-color"),e()(),n(116,"td"),t(117,"Cor do texto"),e(),n(118,"td")(119,"code"),t(120,"var(--color-neutral-dark-70)"),e()()(),n(121,"tr")(122,"td")(123,"code"),t(124,"--outline-color-focused"),e()(),n(125,"td"),t(126,"Cor do outline dos itens de sub-menu e customer"),e(),n(127,"td")(128,"code"),t(129,"var(--color-neutral-dark-95)"),e()()(),n(130,"tr")(131,"td")(132,"code"),t(133,"--object-fit-brand"),e()(),n(134,"td"),t(135,"Valor do object-fit da imagem do logo"),e(),n(136,"td")(137,"code"),t(138,"contain"),e()()(),n(139,"tr")(140,"td")(141,"code"),t(142,"--object-fit-customer"),e()(),n(143,"td"),t(144,"Valor do object-fit da imagem do logo na se\xE7\xE3o customer"),e(),n(145,"td")(146,"code"),t(147,"contain"),e()()(),n(148,"tr")(149,"td")(150,"code"),t(151,"--object-fit-customer-user"),e()(),n(152,"td"),t(153,"Valor do object-fit da imagem do avatar"),e(),n(154,"td")(155,"code"),t(156,"cover"),e()()(),n(157,"tr")(158,"td")(159,"strong"),t(160,"Header"),e()(),o(161,"td")(162,"td"),e(),n(163,"tr")(164,"td")(165,"code"),t(166,"--background-color"),e()(),n(167,"td"),t(168,"Cor de background do header"),e(),n(169,"td")(170,"code"),t(171,"var(--color-neutral-light-05)"),e()()(),n(172,"tr")(173,"td")(174,"code"),t(175,"--border-radius-bottom-left"),e()(),n(176,"td"),t(177,"Valor do radius do lado esquerdo do header"),e(),n(178,"td")(179,"code"),t(180,"var(--border-radius-md)"),e()()(),n(181,"tr")(182,"td")(183,"code"),t(184,"--border-radius-bottom-right"),e()(),n(185,"td"),t(186,"Valor do radius do lado direito do header"),e(),n(187,"td")(188,"code"),t(189,"var(--border-radius-md)"),e()()(),n(190,"tr")(191,"td")(192,"code"),t(193,"--base shadow"),e()(),n(194,"td"),t(195,"Cor da sombra do header"),e(),n(196,"td")(197,"code"),t(198,"0 1px 8px rgba(0, 0, 0, 0.1)"),e()()(),n(199,"tr")(200,"td")(201,"code"),t(202,"--stroke-color"),e()(),n(203,"td"),t(204,"Cor da borda inferior do header"),e(),n(205,"td")(206,"code"),t(207,"var(--color-brand-01-base)"),e()()(),n(208,"tr")(209,"td")(210,"strong"),t(211,"Sub-menu"),e()(),o(212,"td")(213,"td"),e(),n(214,"tr")(215,"td")(216,"code"),t(217,"--border-radius"),e()(),n(218,"td"),t(219,"Valor do radius dos itens do sub-menu"),e(),n(220,"td")(221,"code"),t(222,"var(--border-radius-md);"),e()()(),n(223,"tr")(224,"td")(225,"code"),t(226,"--text-color-submenu"),e()(),n(227,"td"),t(228,"Cor do texto dos itens do sub-menu"),e(),n(229,"td")(230,"code"),t(231,"var(--color-brand-01-base)"),e()()(),n(232,"tr")(233,"td")(234,"code"),t(235,"--icon-color"),e()(),n(236,"td"),t(237,"Cor do \xEDcone do sub-menu com itens"),e(),n(238,"td")(239,"code"),t(240,"var(--color-brand-01-base)"),e()()(),n(241,"tr")(242,"td")(243,"code"),t(244,"--border-color"),e()(),n(245,"td"),t(246,"Cor da borda"),e(),n(247,"td")(248,"code"),t(249,"var(--color-transparent)"),e()()(),n(250,"tr")(251,"td")(252,"code"),t(253,"--shadow"),e()(),n(254,"td"),t(255,"Cont\xE9m o valor da sombra do elemento"),e(),n(256,"td")(257,"code"),t(258,"var(--shadow-none)"),e()()(),n(259,"tr")(260,"td")(261,"code"),t(262,"--font-family-submenu"),e()(),n(263,"td"),t(264,"Fonte do texto dos itens de sub-menu"),e(),n(265,"td")(266,"code"),t(267,"var(--font-family-theme)"),e()()(),n(268,"tr")(269,"td")(270,"code"),t(271,"--font-weight-submenu"),e()(),n(272,"td"),t(273,"Peso da fonte do texto dos itens de sub-menu"),e(),n(274,"td")(275,"code"),t(276,"var(--font-weight-bold)"),e()()(),n(277,"tr")(278,"td")(279,"strong"),t(280,"Sub-menu - Hover"),e()(),o(281,"td")(282,"td"),e(),n(283,"tr")(284,"td")(285,"code"),t(286,"--background-hover"),e()(),n(287,"td"),t(288,"Cor de background dos itens do sub-menu no estado hover"),e(),n(289,"td")(290,"code"),t(291,"var(--color-brand-01-lighter)"),e()()(),n(292,"tr")(293,"td")(294,"code"),t(295,"--icon-color-hover"),e()(),n(296,"td"),t(297,"Cor do \xEDcone dos itens de sub-menu no estado hover"),e(),n(298,"td")(299,"code"),t(300,"var(--color-brand-01-darkest)"),e()()(),n(301,"tr")(302,"td")(303,"code"),t(304,"--text-color-hover"),e()(),n(305,"td"),t(306,"Cor do texto dos itens de sub-menu no estado hover"),e(),n(307,"td")(308,"code"),t(309,"var(--color-brand-01-darkest)"),e()()(),n(310,"tr")(311,"td")(312,"strong"),t(313,"Sub-menu - pressed"),e()(),o(314,"td")(315,"td"),e(),n(316,"tr")(317,"td")(318,"code"),t(319,"--background-pressed"),e()(),n(320,"td"),t(321,"Cor de background dos itens do sub-menu no estado pressed"),e(),n(322,"td")(323,"code"),t(324,"var(--color-brand-01-light)"),e()()(),n(325,"tr")(326,"td")(327,"code"),t(328,"--icon-color-pressed"),e()(),n(329,"td"),t(330,"Cor do \xEDcone dos itens de sub-menu no estado pressed"),e(),n(331,"td")(332,"code"),t(333,"var(--color-brand-01-darkest)"),e()()(),n(334,"tr")(335,"td")(336,"code"),t(337,"--text-color-pressed"),e()(),n(338,"td"),t(339,"Cor do texto dos itens de sub-menu no estado pressed"),e(),n(340,"td")(341,"code"),t(342,"var(--color-brand-01-darkest)"),e()()(),n(343,"tr")(344,"td")(345,"strong"),t(346,"Sub-menu - selected"),e()(),o(347,"td")(348,"td"),e(),n(349,"tr")(350,"td")(351,"code"),t(352,"--background-selected"),e()(),n(353,"td"),t(354,"Cor de background dos itens do sub-menu no estado selected"),e(),n(355,"td")(356,"code"),t(357,"var(--color-brand-01-light)"),e()()(),n(358,"tr")(359,"td")(360,"code"),t(361,"--icon-color-selected"),e()(),n(362,"td"),t(363,"Cor do \xEDcone dos itens de sub-menu no estado selected"),e(),n(364,"td")(365,"code"),t(366,"var(--color-neutral-dark-95)"),e()()(),n(367,"tr")(368,"td")(369,"code"),t(370,"--text-color-selected"),e()(),n(371,"td"),t(372,"Cor do texto dos itens de sub-menu no estado selected"),e(),n(373,"td")(374,"code"),t(375,"var(--color-brand-01-darkest)"),e()()(),n(376,"tr")(377,"td")(378,"strong"),t(379,"Customer"),e()(),o(380,"td")(381,"td"),e(),n(382,"tr")(383,"td")(384,"code"),t(385,"--background-color-customer"),e()(),n(386,"td"),t(387,"Cor do background da se\xE7\xE3o customer"),e(),n(388,"td")(389,"code"),t(390,"var(--color-neutral-light-00)"),e()()(),n(391,"tr")(392,"td")(393,"code"),t(394,"--border-color"),e()(),n(395,"td"),t(396,"Cor da borda da se\xE7\xE3o customer"),e(),n(397,"td")(398,"code"),t(399,"var(--color-neutral-light-10)"),e()()(),n(400,"tr")(401,"td")(402,"code"),t(403,"--border-style"),e()(),n(404,"td"),t(405,"Estilo da borda da se\xE7\xE3o customer"),e(),n(406,"td")(407,"code"),t(408,"solid"),e()()(),n(409,"tr")(410,"td")(411,"code"),t(412,"--border-width"),e()(),n(413,"td"),t(414,"Largura da borda da se\xE7\xE3o customer"),e(),n(415,"td")(416,"code"),t(417,"var(--border-width-sm)"),e()()(),n(418,"tr")(419,"td")(420,"strong"),t(421,"Customer - hover"),e()(),o(422,"td")(423,"td"),e(),n(424,"tr")(425,"td")(426,"code"),t(427,"--background-color-customer-hover"),e()(),n(428,"td"),t(429,"Cor do background da se\xE7\xE3o customer no estado hover"),e(),n(430,"td")(431,"code"),t(432,"var(--color-brand-01-lighter)"),e()()(),n(433,"tr")(434,"td")(435,"strong"),t(436,"Customer - pressed"),e()(),o(437,"td")(438,"td"),e(),n(439,"tr")(440,"td")(441,"code"),t(442,"--background-color-customer-pressed"),e()(),n(443,"td"),t(444,"Cor do background da se\xE7\xE3o customer no estado pressed"),e(),n(445,"td")(446,"code"),t(447,"var(--color-brand-01-light)"),e()()(),n(448,"tr")(449,"td")(450,"code"),t(451,"--border-width-pressed"),e()(),n(452,"td"),t(453,"Largura da borda da se\xE7\xE3o customer no estado pressed"),e(),n(454,"td")(455,"code"),t(456,"var(--border-width-md)"),e()()()()()(),n(457,"div",7)(458,"h4",8),t(459,"Seletor"),e(),n(460,"pre",9),t(461,`<po-header
    p-actions-tools="Array<PoHeaderActionTool>"
    p-amount-more="number"
    p-brand="PoHeaderBrand | string"
    (p-colapsed-menu)="EventEmitter"
    p-filter-menu="boolean"
    p-header-template="TemplateRef<any>"
    p-header-user="PoHeaderUser"
    p-hide-button-menu="boolean"
    p-literals="PoHeaderLiterals"
    p-menus="Array<PoMenuItem>"
    p-menu-items="Array<PoHeaderActions>"
    p-size="string" >
</po-header>
`),e()(),n(462,"h4",10),t(463,"Propriedades"),e(),n(464,"table",11)(465,"tr",12)(466,"th",13),t(467,"Nome"),e(),n(468,"th",13),t(469,"Tipo"),e(),n(470,"th",13),t(471,"Padr\xE3o"),e(),n(472,"th",13),t(473,"Descri\xE7\xE3o"),e()(),n(474,"tr",14)(475,"td",15)(476,"div",16)(477,"span",17),t(478," p-actions-tools"),o(479,"br"),e()()(),n(480,"td",18)(481,"code",19),t(482,"Array<PoHeaderActionTool>"),e()(),n(483,"td",20),t(484,"-"),e(),n(485,"td",21)(486,"em")(487,"strong"),t(488,"(opcional)"),e()(),n(489,"p"),t(490,"Propriedade para configurar a se\xE7\xE3o de tools do "),n(491,"code"),t(492,"po-header"),e()(),n(493,"blockquote")(494,"p"),t(495,"M\xE1ximo de 3 itens, o componente ir\xE1 ignorar os itens caso seja mandado mais itens que o suportado."),e()()()(),n(496,"tr",14)(497,"td",15)(498,"div",16)(499,"span",17),t(500," p-amount-more"),o(501,"br"),e()()(),n(502,"td",18)(503,"code",22),t(504,"number"),e()(),n(505,"td",20),t(506,"-"),e(),n(507,"td",21)(508,"em")(509,"strong"),t(510,"(opcional)"),e()(),n(511,"p"),t(512,`N\xFAmero de itens dentro do bot\xE3o de overflow. Caso a largura do header n\xE3o suportar a quantidade de itens passadas, um bot\xE3o com itens ser\xE1 criado.
Essa propriedade possibilita a escolha de quantos itens estar\xE3o dentro do bot\xE3o de overflow.`),e(),n(513,"blockquote")(514,"p"),t(515,"Ao utilizar essa propriedade o "),n(516,"code"),t(517,"po-header"),e(),t(518," n\xE3o ir\xE1 realizar o calculo automat\xEDco de itens."),e()()()(),n(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),t(523," p-brand"),o(524,"br"),e()()(),n(525,"td",18)(526,"code",23),t(527,"PoHeaderBrand "),e(),n(528,"code",24),t(529," string"),e()(),n(530,"td",20),t(531,"-"),e(),n(532,"td",21)(533,"em")(534,"strong"),t(535,"(opcional)"),e()(),n(536,"p"),t(537,"Propriedade para configurar a se\xE7\xE3o de brand do "),n(538,"code"),t(539,"po-header"),e()(),n(540,"p"),t(541,"Caso seja enviada uma string, apenas o logo sera mostrado com o valor da string passada."),e()()(),n(542,"tr",14)(543,"td",15)(544,"div",25)(545,"span",26),t(546," (p-colapsed-menu)"),o(547,"br"),e()()(),n(548,"td",18)(549,"code",27),t(550,"EventEmitter"),e()(),n(551,"td",20),t(552,"-"),e(),n(553,"td",21)(554,"em")(555,"strong"),t(556,"(opcional)"),e()(),n(557,"p"),t(558,"Evento emitido ao clicar no bot\xE3o para colapsar ou expandir menu."),e()()(),n(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),t(563," p-filter-menu"),o(564,"br"),e()()(),n(565,"td",18)(566,"code",28),t(567,"boolean"),e()(),n(568,"td",20),t(569,"-"),e(),n(570,"td",21)(571,"em")(572,"strong"),t(573,"(opcional)"),e()(),n(574,"p"),t(575,"Habilita campo para filtrar itens no menu"),e()()(),n(576,"tr",14)(577,"td",15)(578,"div",16)(579,"span",17),t(580," p-header-template"),o(581,"br"),e()()(),n(582,"td",18)(583,"code",29),t(584,"TemplateRef<any>"),e()(),n(585,"td",20),t(586,"-"),e(),n(587,"td",21)(588,"em")(589,"strong"),t(590,"(opcional)"),e()(),n(591,"p"),t(592,"Template customiado que ser\xE1 renderizado ap\xF3s os itens definidos na propriedade "),n(593,"code"),t(594,"p-menu-items"),e()()()(),n(595,"tr",14)(596,"td",15)(597,"div",16)(598,"span",17),t(599," p-header-user"),o(600,"br"),e()()(),n(601,"td",18)(602,"code",30),t(603,"PoHeaderUser"),e()(),n(604,"td",20),t(605,"-"),e(),n(606,"td",21)(607,"em")(608,"strong"),t(609,"(opcional)"),e()(),n(610,"p"),t(611,"Propriedade para configurar a se\xE7\xE3o de headerUser do "),n(612,"code"),t(613,"po-header"),e()()()(),n(614,"tr",14)(615,"td",15)(616,"div",16)(617,"span",17),t(618," p-hide-button-menu"),o(619,"br"),e()()(),n(620,"td",18)(621,"code",28),t(622,"boolean"),e()(),n(623,"td",20),t(624,"-"),e(),n(625,"td",21)(626,"em")(627,"strong"),t(628,"(opcional)"),e()(),n(629,"p"),t(630,"Esconde o bot\xE3o de menu colapsado."),e()()(),n(631,"tr",14)(632,"td",15)(633,"div",16)(634,"span",17),t(635," p-literals"),o(636,"br"),e()()(),n(637,"td",18)(638,"code",31),t(639,"PoHeaderLiterals"),e()(),n(640,"td",20),t(641,"-"),e(),n(642,"td",21)(643,"em")(644,"strong"),t(645,"(opcional)"),e()(),n(646,"p"),t(647,"Objeto com a literal usada na propriedade "),n(648,"code"),t(649,"p-literals"),e(),t(650,"."),e(),n(651,"p"),t(652,"Para customizar a literal, basta declarar um objeto do tipo "),n(653,"code"),t(654,"PoHeaderLiterals"),e(),t(655," conforme exemplo abaixo:"),e(),n(656,"pre")(657,"code"),t(658,`const customLiterals: PoHeaderLiterals = {
  headerLinks: 'Itens de navega\xE7\xE3o',
  notifications: 'Mensagens'
};
`),e()(),n(659,"p"),t(660,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),n(661,"pre")(662,"code"),t(663,`<po-header
  [p-literals]="customLiterals">
</po-header>
`),e()(),n(664,"blockquote")(665,"p"),t(666,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(667,"a",32)(668,"code"),t(669,"PoI18nService"),e()(),t(670," ou do browser."),e()()()(),n(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),t(675," p-menus"),o(676,"br"),e()()(),n(677,"td",18)(678,"code",33),t(679,"Array<PoMenuItem>"),e()(),n(680,"td",20),t(681,"-"),e(),n(682,"td",21)(683,"em")(684,"strong"),t(685,"(opcional)"),e()(),n(686,"p"),t(687,"Lista dos itens do menu. Se o valor estiver indefinido ou inv\xE1lido, ser\xE1 inicializado como um array vazio."),e(),n(688,"blockquote")(689,"p"),t(690,"O menu poder\xE1 ser aberto via bot\xE3o hamburguer quando a tela tiver menos que 960px"),e()()()(),n(691,"tr",14)(692,"td",15)(693,"div",16)(694,"span",17),t(695," p-menu-items"),o(696,"br"),e()()(),n(697,"td",18)(698,"code",34),t(699,"Array<PoHeaderActions>"),e()(),n(700,"td",20),t(701,"-"),e(),n(702,"td",21)(703,"em")(704,"strong"),t(705,"(opcional)"),e()(),n(706,"p"),t(707,"Propriedade para configurar a se\xE7\xE3o de menu do "),n(708,"code"),t(709,"po-header"),e(),t(710,`.
Cada item pode receber uma label e uma a\xE7\xE3o`),e(),n(711,"blockquote")(712,"p"),t(713,"Os itens ir\xE3o ficar vis\xEDveis em uma tela de at\xE9 960px"),e()()()(),n(714,"tr",14)(715,"td",15)(716,"div",16)(717,"span",17),t(718," p-size"),o(719,"br"),e()()(),n(720,"td",18)(721,"code",24),t(722,"string"),e()(),n(723,"td",20)(724,"p")(725,"code"),t(726,"medium"),e()()(),n(727,"td",21)(728,"em")(729,"strong"),t(730,"(opcional)"),e()(),n(731,"p"),t(732,"Define o tamanho do componente:"),e(),n(733,"ul")(734,"li")(735,"code"),t(736,"small"),e(),t(737,": altura de 44px (dispon\xEDvel apenas para acessibilidade AA)."),e(),n(738,"li")(739,"code"),t(740,"medium"),e(),t(741,": altura de 56px."),e()(),n(742,"blockquote")(743,"p"),t(744,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(745,"code"),t(746,"medium"),e(),t(747,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(748,"a",35),t(749,"po-theme"),e(),t(750,"."),e()()()()(),n(751,"h3"),t(752,"Interfaces"),e(),n(753,"h4",36)(754,"code",5),t(755,"PoHeaderActionTool"),e()(),n(756,"div",2)(757,"p")(758,"em"),t(759,"Interface"),e(),t(760," que define a se\xE7\xE3o de Actions do header."),e(),n(761,"p"),t(762,"Indica\xE7\xE3o de uso:"),e(),n(763,"ul")(764,"li"),t(765,"Primeira a\xE7\xE3o destinada \xE0 app launcher."),e(),n(766,"li"),t(767,"Segunda a\xE7\xE3o (terceiro \xEDcone) destinada \xE0 notifica\xE7\xF5es."),e(),n(768,"li"),t(769,"Terceira a\xE7\xE3o (segundo \xEDcone) destinada para agrupamento de a\xE7\xF5es."),e()(),n(770,"blockquote")(771,"p"),t(772,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados."),e()()(),n(773,"h4",10),t(774,"Propriedades"),e(),n(775,"table",11)(776,"tr",12)(777,"th",13),t(778,"Nome"),e(),n(779,"th",13),t(780,"Tipo"),e(),n(781,"th",13),t(782,"Descri\xE7\xE3o"),e()(),n(783,"tr",14)(784,"td",15)(785,"div",16)(786,"span",17),t(787," action"),o(788,"br"),e()()(),n(789,"td",18)(790,"code",37),t(791,"Function"),e()(),n(792,"td",21)(793,"em")(794,"strong"),t(795,"(opcional)"),e()(),n(796,"p"),t(797,"Evento emitido ao clicar em uma a\xE7\xE3o"),e(),n(798,"p"),t(799,"Exemplo: "),n(800,"code"),t(801,"action: this.myFunction.bind(this)"),e()()()(),n(802,"tr",14)(803,"td",15)(804,"div",16)(805,"span",17),t(806," badge"),o(807,"br"),e()()(),n(808,"td",18)(809,"code",22),t(810,"number"),e()(),n(811,"td",21)(812,"em")(813,"strong"),t(814,"(opcional)"),e()(),n(815,"p"),t(816,"Valor n\xFAmerico com a repsenta\xE7\xE3o de notifica\xE7\xF5es"),e()()(),n(817,"tr",14)(818,"td",15)(819,"div",16)(820,"span",17),t(821," icon"),o(822,"br"),e()()(),n(823,"td",18)(824,"code",24),t(825,"string"),e()(),n(826,"td",21)(827,"em")(828,"strong"),t(829,"(opcional)"),e()(),n(830,"p"),t(831,"\xCDcone do bot\xE3o de a\xE7\xE3o"),e()()(),n(832,"tr",14)(833,"td",15)(834,"div",16)(835,"span",17),t(836," items"),o(837,"br"),e()()(),n(838,"td",18)(839,"code",38),t(840,"Array<PoHeaderActionToolItem>"),e()(),n(841,"td",21)(842,"em")(843,"strong"),t(844,"(opcional)"),e()(),n(845,"p"),t(846,"Itens de a\xE7\xF5es"),e()()(),n(847,"tr",14)(848,"td",15)(849,"div",16)(850,"span",17),t(851," label"),o(852,"br"),e()()(),n(853,"td",18)(854,"code",24),t(855,"string"),e()(),n(856,"td",21)(857,"em")(858,"strong"),t(859,"(opcional)"),e()(),n(860,"p"),t(861,"T\xEDtulo da a\xE7\xE3o"),e()()(),n(862,"tr",14)(863,"td",15)(864,"div",16)(865,"span",17),t(866," link"),o(867,"br"),e()()(),n(868,"td",18)(869,"code",24),t(870,"string"),e()(),n(871,"td",21)(872,"em")(873,"strong"),t(874,"(opcional)"),e()(),n(875,"p"),t(876,"link utilizado no redirecionamento das p\xE1ginas."),e()()(),n(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),t(881," popover"),o(882,"br"),e()()(),n(883,"td",18)(884,"code",39),t(885,"PoHeaderActionPopoverAction"),e()(),n(886,"td",21)(887,"em")(888,"strong"),t(889,"(opcional)"),e()(),n(890,"p"),t(891,"Template que ser\xE1 utilizado na a\xE7\xE3o"),e()()(),n(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),t(896," tooltip"),o(897,"br"),e()()(),n(898,"td",18)(899,"code",24),t(900,"string"),e()(),n(901,"td",21)(902,"em")(903,"strong"),t(904,"(opcional)"),e()(),n(905,"p"),t(906,"Texto que ser\xE1 apresentado na tooltip"),e()()()(),n(907,"h4",36)(908,"code",5),t(909,"PoHeaderActionPopoverAction"),e()(),n(910,"div",2)(911,"p")(912,"em"),t(913,"Interface"),e(),t(914," que define um template para uma a\xE7\xE3o."),e()(),n(915,"h4",10),t(916,"Propriedades"),e(),n(917,"table",11)(918,"tr",12)(919,"th",13),t(920,"Nome"),e(),n(921,"th",13),t(922,"Tipo"),e(),n(923,"th",13),t(924,"Descri\xE7\xE3o"),e()(),n(925,"tr",14)(926,"td",15)(927,"div",16)(928,"span",17),t(929," content"),o(930,"br"),e()()(),n(931,"td",18)(932,"code",29),t(933,"TemplateRef<any>"),e()(),n(934,"td",21)(935,"p"),t(936,"Template que ser\xE1 renderizado dentro do popover."),e()()(),n(937,"tr",14)(938,"td",15)(939,"div",16)(940,"span",17),t(941," width"),o(942,"br"),e()()(),n(943,"td",18)(944,"code",22),t(945,"number"),e()(),n(946,"td",21)(947,"em")(948,"strong"),t(949,"(opcional)"),e()(),n(950,"p"),t(951,"Largura, em pixels, do template renderizado dentro do popover."),e(),n(952,"p"),t(953,"Valores permitidos: de 240 a 800."),e()()()(),n(954,"h4",36)(955,"code",5),t(956,"PoHeaderActionToolItem"),e()(),n(957,"div",2)(958,"p")(959,"em"),t(960,"Interface"),e(),t(961," que define uma lista de a\xE7\xF5es."),e()(),n(962,"h4",10),t(963,"Propriedades"),e(),n(964,"table",11)(965,"tr",12)(966,"th",13),t(967,"Nome"),e(),n(968,"th",13),t(969,"Tipo"),e(),n(970,"th",13),t(971,"Descri\xE7\xE3o"),e()(),n(972,"tr",14)(973,"td",15)(974,"div",16)(975,"span",17),t(976," action"),o(977,"br"),e()()(),n(978,"td",18)(979,"code",37),t(980,"Function"),e()(),n(981,"td",21)(982,"p"),t(983,"Evento emitido ao clicar em uma a\xE7\xE3o"),e(),n(984,"p"),t(985,"Exemplo: "),n(986,"code"),t(987,"action: this.myFunction.bind(this)"),e()()()(),n(988,"tr",14)(989,"td",15)(990,"div",16)(991,"span",17),t(992," label"),o(993,"br"),e()()(),n(994,"td",18)(995,"code",24),t(996,"string"),e()(),n(997,"td",21)(998,"p"),t(999,"Label da a\xE7\xE3o"),e()()()(),n(1e3,"h4",36)(1001,"code",5),t(1002,"PoHeaderActions"),e()(),n(1003,"div",2)(1004,"p")(1005,"em"),t(1006,"Interface"),e(),t(1007," que define uma lista de a\xE7\xF5es no sub-menu."),e()(),n(1008,"h4",10),t(1009,"Propriedades"),e(),n(1010,"table",11)(1011,"tr",12)(1012,"th",13),t(1013,"Nome"),e(),n(1014,"th",13),t(1015,"Tipo"),e(),n(1016,"th",13),t(1017,"Descri\xE7\xE3o"),e()(),n(1018,"tr",14)(1019,"td",15)(1020,"div",16)(1021,"span",17),t(1022," action"),o(1023,"br"),e()()(),n(1024,"td",18)(1025,"code",37),t(1026,"Function"),e()(),n(1027,"td",21)(1028,"em")(1029,"strong"),t(1030,"(opcional)"),e()(),n(1031,"p"),t(1032,"Evento da a\xE7\xE3o"),e(),n(1033,"p"),t(1034," Exemplo: "),n(1035,"code"),t(1036,"action: this.myFunction.bind(this)"),e()()()(),n(1037,"tr",14)(1038,"td",15)(1039,"div",16)(1040,"span",17),t(1041," id"),o(1042,"br"),e()()(),n(1043,"td",18)(1044,"code",24),t(1045,"string"),e()(),n(1046,"td",21)(1047,"em")(1048,"strong"),t(1049,"(opcional)"),e()(),n(1050,"p"),t(1051,"Identificador da a\xE7\xE3o"),e()()(),n(1052,"tr",14)(1053,"td",15)(1054,"div",16)(1055,"span",17),t(1056," label"),o(1057,"br"),e()()(),n(1058,"td",18)(1059,"code",24),t(1060,"string"),e()(),n(1061,"td",21)(1062,"p"),t(1063,"Label da a\xE7\xE3o"),e()()(),n(1064,"tr",14)(1065,"td",15)(1066,"div",16)(1067,"span",17),t(1068," link"),o(1069,"br"),e()()(),n(1070,"td",18)(1071,"code",24),t(1072,"string"),e()(),n(1073,"td",21)(1074,"em")(1075,"strong"),t(1076,"(opcional)"),e()(),n(1077,"p"),t(1078,"link utilizado no redirecionamento das p\xE1ginas."),e()()()(),n(1079,"h4",36)(1080,"code",5),t(1081,"PoHeaderBrand"),e()(),n(1082,"div",2)(1083,"p")(1084,"em"),t(1085,"Interface"),e(),t(1086," que define a se\xE7\xE3o de brand."),e()(),n(1087,"h4",10),t(1088,"Propriedades"),e(),n(1089,"table",11)(1090,"tr",12)(1091,"th",13),t(1092,"Nome"),e(),n(1093,"th",13),t(1094,"Tipo"),e(),n(1095,"th",13),t(1096,"Descri\xE7\xE3o"),e()(),n(1097,"tr",14)(1098,"td",15)(1099,"div",16)(1100,"span",17),t(1101," action"),o(1102,"br"),e()()(),n(1103,"td",18)(1104,"code",37),t(1105,"Function"),e()(),n(1106,"td",21)(1107,"em")(1108,"strong"),t(1109,"(opcional)"),e()(),n(1110,"p"),t(1111,"Evento da a\xE7\xE3o"),e(),n(1112,"p"),t(1113," Exemplo: "),n(1114,"code"),t(1115,"action: this.myFunction.bind(this)"),e()()()(),n(1116,"tr",14)(1117,"td",15)(1118,"div",16)(1119,"span",17),t(1120," link"),o(1121,"br"),e()()(),n(1122,"td",18)(1123,"code",24),t(1124,"string"),e()(),n(1125,"td",21)(1126,"em")(1127,"strong"),t(1128,"(opcional)"),e()(),n(1129,"p"),t(1130,"link utilizado no redirecionamento das p\xE1ginas."),e()()(),n(1131,"tr",14)(1132,"td",15)(1133,"div",16)(1134,"span",17),t(1135," logo"),o(1136,"br"),e()()(),n(1137,"td",18)(1138,"code",24),t(1139,"string"),e()(),n(1140,"td",21)(1141,"em")(1142,"strong"),t(1143,"(opcional)"),e()(),n(1144,"p"),t(1145,"Imagem da marca"),e()()(),n(1146,"tr",14)(1147,"td",15)(1148,"div",16)(1149,"span",17),t(1150," smallLogo"),o(1151,"br"),e()()(),n(1152,"td",18)(1153,"code",24),t(1154,"string"),e()(),n(1155,"td",21)(1156,"em")(1157,"strong"),t(1158,"(opcional)"),e()(),n(1159,"p"),t(1160,"Imagem da marca quando a tela \xE9 menor que 960px"),e()()(),n(1161,"tr",14)(1162,"td",15)(1163,"div",16)(1164,"span",17),t(1165," title"),o(1166,"br"),e()()(),n(1167,"td",18)(1168,"code",24),t(1169,"string"),e()(),n(1170,"td",21)(1171,"em")(1172,"strong"),t(1173,"(opcional)"),e()(),n(1174,"p"),t(1175,"T\xEDtulo da marca"),e()()()(),n(1176,"h4",36)(1177,"code",5),t(1178,"PoHeaderLiterals"),e()(),n(1179,"div",2)(1180,"p"),t(1181,"Interface para defini\xE7\xE3o das literais usadas no "),n(1182,"code"),t(1183,"po-header"),e(),t(1184,"."),e()(),n(1185,"h4",10),t(1186,"Propriedades"),e(),n(1187,"table",11)(1188,"tr",12)(1189,"th",13),t(1190,"Nome"),e(),n(1191,"th",13),t(1192,"Tipo"),e(),n(1193,"th",13),t(1194,"Descri\xE7\xE3o"),e()(),n(1195,"tr",14)(1196,"td",15)(1197,"div",16)(1198,"span",17),t(1199," headerLinks"),o(1200,"br"),e()()(),n(1201,"td",18)(1202,"code",24),t(1203,"string"),e()(),n(1204,"td",21)(1205,"em")(1206,"strong"),t(1207,"(opcional)"),e()(),n(1208,"p"),t(1209,"Texto exibido no item de menu no qual os itens do header s\xE3o agrupados quando est\xE1 no modo responsivo."),e()()(),n(1210,"tr",14)(1211,"td",15)(1212,"div",16)(1213,"span",17),t(1214," notifications"),o(1215,"br"),e()()(),n(1216,"td",18)(1217,"code",24),t(1218,"string"),e()(),n(1219,"td",21)(1220,"em")(1221,"strong"),t(1222,"(opcional)"),e()(),n(1223,"p"),t(1224,"Texto para indica\xE7\xE3o de notifica\xE7\xE3o, caso seja passado um valor v\xE1lido na propriedade "),n(1225,"code"),t(1226,"badge"),e()()()()(),n(1227,"h4",36)(1228,"code",5),t(1229,"PoHeaderUser"),e()(),n(1230,"div",2)(1231,"p")(1232,"em"),t(1233,"Interface"),e(),t(1234," que define a se\xE7\xE3o de Customer do header."),e()(),n(1235,"h4",10),t(1236,"Propriedades"),e(),n(1237,"table",11)(1238,"tr",12)(1239,"th",13),t(1240,"Nome"),e(),n(1241,"th",13),t(1242,"Tipo"),e(),n(1243,"th",13),t(1244,"Descri\xE7\xE3o"),e()(),n(1245,"tr",14)(1246,"td",15)(1247,"div",16)(1248,"span",17),t(1249," action"),o(1250,"br"),e()()(),n(1251,"td",18)(1252,"code",37),t(1253,"Function"),e()(),n(1254,"td",21)(1255,"em")(1256,"strong"),t(1257,"(opcional)"),e()(),n(1258,"p"),t(1259,"Evento emitido ao clicar na se\xE7\xE3o"),e(),n(1260,"p"),t(1261,"Exemplo: "),n(1262,"code"),t(1263,"action: this.myFunction.bind(this)"),e()()()(),n(1264,"tr",14)(1265,"td",15)(1266,"div",16)(1267,"span",17),t(1268," avatar"),o(1269,"br"),e()()(),n(1270,"td",18)(1271,"code",24),t(1272,"string"),e()(),n(1273,"td",21)(1274,"p"),t(1275,"Logo representando o perfil"),e()()(),n(1276,"tr",14)(1277,"td",15)(1278,"div",16)(1279,"span",17),t(1280," customerBrand"),o(1281,"br"),e()()(),n(1282,"td",18)(1283,"code",24),t(1284,"string"),e()(),n(1285,"td",21)(1286,"p"),t(1287,"Imagem da marca"),e()()(),n(1288,"tr",14)(1289,"td",15)(1290,"div",16)(1291,"span",17),t(1292," items"),o(1293,"br"),e()()(),n(1294,"td",18)(1295,"code",38),t(1296,"Array<PoHeaderActionToolItem>"),e()(),n(1297,"td",21)(1298,"em")(1299,"strong"),t(1300,"(opcional)"),e()(),n(1301,"p"),t(1302,"Itens de a\xE7\xF5es"),e(),n(1303,"blockquote")(1304,"p"),t(1305,"Caso seja passado items e popover, o componente ir\xE1 renderizar o popover e os itens ser\xE3o ignorados"),e()()()(),n(1306,"tr",14)(1307,"td",15)(1308,"div",16)(1309,"span",17),t(1310," popover"),o(1311,"br"),e()()(),n(1312,"td",18)(1313,"code",39),t(1314,"PoHeaderActionPopoverAction"),e()(),n(1315,"td",21)(1316,"em")(1317,"strong"),t(1318,"(opcional)"),e()(),n(1319,"p"),t(1320,"Template que ser\xE1 utilizado na a\xE7\xE3o"),e()()(),n(1321,"tr",14)(1322,"td",15)(1323,"div",16)(1324,"span",17),t(1325," status"),o(1326,"br"),e()()(),n(1327,"td",18)(1328,"code",40),t(1329,"'positive' "),e(),n(1330,"code",41),t(1331," 'negative' "),e(),n(1332,"code",42),t(1333," 'warning' "),e(),n(1334,"code",43),t(1335," 'disabled'"),e()(),n(1336,"td",21)(1337,"em")(1338,"strong"),t(1339,"(opcional)"),e()(),n(1340,"p"),t(1341,`Indica\xE7\xE3o representando o estado do usu\xE1rio
Valores v\xE1lidos:`),e(),n(1342,"ul")(1343,"li")(1344,"code"),t(1345,"positive"),e(),t(1346,": Define a cor do "),n(1347,"code"),t(1348,"status"),e(),t(1349," com a cor de feedback positivo."),e(),n(1350,"li")(1351,"code"),t(1352,"negative"),e(),t(1353,": Define a cor do "),n(1354,"code"),t(1355,"status"),e(),t(1356," com a cor de feedback negative."),e(),n(1357,"li")(1358,"code"),t(1359,"warning"),e(),t(1360,": Define a cor do "),n(1361,"code"),t(1362,"status"),e(),t(1363," com a cor de feedback warning."),e(),n(1364,"li")(1365,"code"),t(1366,"disabled"),e(),t(1367,": Define a cor do "),n(1368,"code"),t(1369,"status"),e(),t(1370," com a cor de feedback disabled"),e()()()()()())},dependencies:[w],encapsulation:2})}return a})();var fe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(v(oe),v(ae))};static \u0275cmp=u({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Header",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-header-doc"),e(),n(4,"po-tab",3),E("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-header-basic-view")(6,"sample-po-header-labs-view")(7,"sample-po-header-apps-view"),e()()()),r&2&&(s("p-actions",i.actions),m(2),s("p-active",i.activeTab==="doc"),m(2),s("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[pe,A,y,he,be,xe,ve],encapsulation:2})}return a})();var Re=[{path:"",component:fe}],Ce=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=I({imports:[U.forChild(Re),U]})}return a})();var xt=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=D({type:a});static \u0275inj=I({imports:[ce,Ce]})}return a})();export{xt as DocPoHeaderModule};
