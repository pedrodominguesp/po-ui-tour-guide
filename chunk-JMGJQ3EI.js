import{o as x,p as Y}from"./chunk-WYOAC7KN.js";import{Hb as P,Ib as C,Ja as Q,U as K,a as I,bb as V,ub as X,vb as k,w as J}from"./chunk-XOCFD5XY.js";import{Ea as p,Fa as t,Ga as e,Ha as o,I as T,L as N,Mb as w,Mc as j,Nc as U,O as g,Oa as W,Oc as A,P as E,Pa as u,Pc as R,Qc as H,_a as F,bb as D,cb as i,cd as G,eb as _,ed as L,gb as S,gd as z,ha as r,hb as h,ib as v,ma as q,oa as b,pa as B,rb as y}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var Z=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Detail"]],template:function(l,n){l&1&&o(0,"po-page-detail",0)},dependencies:[k],encapsulation:2})}return a})();var pe=a=>({"docs-sample-code-tabs":a}),ee=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Basic"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail p-title="PO Page Detail"> </po-page-detail>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-basic/sample-po-page-detail-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-detail-basic',
  templateUrl: './sample-po-page-detail-basic.component.html',
  standalone: false
})
export class SamplePoPageDetailBasicComponent {}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-page-detail-basic"),e(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel),r(),p("ngClass",y(4,pe,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,Z],encapsulation:2})}return a})();var te=(()=>{class a{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}back(){this.action="back"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}edit(){this.action="edit"}remove(){this.action="remove"}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.title="PO Page Detail",this.subtitle=""}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-labs"]],standalone:!1,decls:33,vars:18,consts:[["f","ngForm"],["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-back","p-edit","p-remove","p-breadcrumb","p-components-size","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let s=W();t(0,"po-page-detail",4),u("p-back",function(){return n.back()})("p-edit",function(){return n.edit()})("p-remove",function(){return n.remove()}),t(1,"div",5),o(2,"po-info",6),e(),o(3,"po-divider"),t(4,"form",null,0)(6,"po-input",7),v("ngModelChange",function(m){return g(s),h(n.title,m)||(n.title=m),E(m)}),e(),t(7,"po-input",8),v("ngModelChange",function(m){return g(s),h(n.subtitle,m)||(n.subtitle=m),E(m)}),e(),t(8,"po-radio-group",9),v("ngModelChange",function(m){return g(s),h(n.componentsSize,m)||(n.componentsSize=m),E(m)}),e(),o(9,"po-divider"),t(10,"form",null,1)(12,"div",5)(13,"po-input",10),v("ngModelChange",function(m){return g(s),h(n.breadcrumb.favorite,m)||(n.breadcrumb.favorite=m),E(m)}),e()()(),t(14,"form",null,2)(16,"div",5)(17,"po-input",11),v("ngModelChange",function(m){return g(s),h(n.breadcrumbItem.label,m)||(n.breadcrumbItem.label=m),E(m)}),e(),t(18,"po-input",12),v("ngModelChange",function(m){return g(s),h(n.breadcrumbItem.link,m)||(n.breadcrumbItem.link=m),E(m)}),e()(),t(19,"div",5)(20,"po-button",13),u("p-click",function(){return n.addBreadcrumbItem()}),e()()(),o(21,"po-divider"),t(22,"form",null,3)(24,"div",5)(25,"po-input",14),v("ngModelChange",function(m){return g(s),h(n.breadcrumbParams.property,m)||(n.breadcrumbParams.property=m),E(m)}),e(),t(26,"po-input",15),v("ngModelChange",function(m){return g(s),h(n.breadcrumbParams.value,m)||(n.breadcrumbParams.value=m),E(m)}),e()(),t(27,"div",5)(28,"po-button",16),u("p-click",function(){return n.addBreadcrumbParam()}),e()()(),t(29,"div",5)(30,"po-input",17),v("ngModelChange",function(m){return g(s),h(n.literals,m)||(n.literals=m),E(m)}),u("p-change",function(){return n.changeLiterals()}),e()(),t(31,"div",5)(32,"po-button",18),u("p-click",function(){return n.restore()}),e()()()()}if(l&2){let s=F(15),c=F(23);p("p-breadcrumb",n.breadcrumb)("p-components-size",n.componentsSize)("p-literals",n.customLiterals)("p-title",n.title)("p-subtitle",n.subtitle),r(2),p("p-value",n.action),r(4),S("ngModel",n.title),r(),S("ngModel",n.subtitle),r(),S("ngModel",n.componentsSize),p("p-options",n.componentsSizeOptions),r(5),S("ngModel",n.breadcrumb.favorite),r(4),S("ngModel",n.breadcrumbItem.label),r(),S("ngModel",n.breadcrumbItem.link),r(2),p("p-disabled",s.invalid),r(5),S("ngModel",n.breadcrumbParams.property),r(),S("ngModel",n.breadcrumbParams.value),r(2),p("p-disabled",c.invalid),r(2),S("ngModel",n.literals)}},dependencies:[H,j,U,R,A,J,I,K,Q,V,k],encapsulation:2})}return a})();var ce=a=>({"docs-sample-code-tabs":a}),ie=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail Labs"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-back)="back()"
  (p-edit)="edit()"
  (p-remove)="remove()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form #f="ngForm">
    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>

    <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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

    <po-divider />

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
          class="po-md-6 po-lg-3"
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
          class="po-md-6 po-lg-3"
          p-label="Add breadcrumb params"
          [p-disabled]="formBreadcrumbParams.invalid"
          (p-click)="addBreadcrumbParam()"
        >
        </po-button>
      </div>
    </form>

    <div class="po-row">
      <po-input
        class="po-md-12 po-lg-6"
        name="literals"
        [(ngModel)]="literals"
        p-help='Ex.: {"back": "Retornar", "edit": "Edi\xE7\xE3o", "remove": "Excluir registro"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-detail>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-labs/sample-po-page-detail-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoPageDetailLiterals, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-labs',
  templateUrl: './sample-po-page-detail-labs.component.html',
  standalone: false
})
export class SamplePoPageDetailLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageDetailLiterals;
  literals: string;
  params: any;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  ngOnInit() {
    this.restore();
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

  back() {
    this.action = 'back';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  edit() {
    this.action = 'edit';
  }

  remove() {
    this.action = 'remove';
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.title = 'PO Page Detail';
    this.subtitle = '';
  }
}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-page-detail-labs"),e(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel),r(),p("ngClass",y(4,ce,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,te],encapsulation:2})}return a})();var ne=(()=>{class a{router=N(L);birthDate="26/12/1978";email="john.doe@po-ui.com.br";fathersName="Mike Doe";genre="male";graduation="College Degree";mothersName="Jane Doe";name="John Doe";nationality="USA";nickname="John";placeOfBirth="Colorado";userId=122635;breadcrumb={items:[{label:"Home",link:"/"},{label:"User Detail"}]};edit(){this.router.navigate(["/documentation/po-page-edit"],{queryParams:{view:"web"}})}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-user"]],standalone:!1,decls:19,vars:12,consts:[["p-title","User Detail",3,"p-edit","p-breadcrumb"],[1,"po-row"],["p-label","User ID",1,"po-md-4",3,"p-value"],["p-label","E-mail",1,"po-md-4",3,"p-value"],["p-label","Name",1,"po-md-4",3,"p-value"],["p-label","Nickname",1,"po-md-4",3,"p-value"],["p-label","Birth Date",1,"po-md-4",3,"p-value"],["p-label","Genre",1,"po-md-4",3,"p-value"],["p-label","Nationality",1,"po-md-4",3,"p-value"],["p-label","Place Of Birth",1,"po-md-4",3,"p-value"],["p-label","Graduation",1,"po-md-4",3,"p-value"],["p-label","Fathers Name",1,"po-md-4",3,"p-value"],["p-label","Mothers Name",1,"po-md-4",3,"p-value"]],template:function(l,n){l&1&&(t(0,"po-page-detail",0),u("p-edit",function(){return n.edit()}),t(1,"div",1),o(2,"po-info",2)(3,"po-info",3)(4,"po-info",4),e(),o(5,"po-divider"),t(6,"div",1),o(7,"po-info",5)(8,"po-info",6)(9,"po-info",7),e(),o(10,"po-divider"),t(11,"div",1),o(12,"po-info",8)(13,"po-info",9)(14,"po-info",10),e(),o(15,"po-divider"),t(16,"div",1),o(17,"po-info",11)(18,"po-info",12),e()()),l&2&&(p("p-breadcrumb",n.breadcrumb),r(2),p("p-value",n.userId),r(),p("p-value",n.email),r(),p("p-value",n.name),r(3),p("p-value",n.nickname),r(),p("p-value",n.birthDate),r(),p("p-value",n.genre),r(3),p("p-value",n.nationality),r(),p("p-value",n.placeOfBirth),r(),p("p-value",n.graduation),r(3),p("p-value",n.fathersName),r(),p("p-value",n.mothersName))},dependencies:[I,V,k],encapsulation:2})}return a})();var ge=a=>({"docs-sample-code-tabs":a}),ae=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(o(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Page Detail - User"),e(),t(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),o(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-page-detail-user/sample-po-page-detail-user.component.html"),e(),t(13,"pre",7),i(14,`<po-page-detail p-title="User Detail" [p-breadcrumb]="breadcrumb" (p-edit)="edit()">
  <div class="po-row">
    <po-info class="po-md-4" p-label="User ID" [p-value]="userId"> </po-info>

    <po-info class="po-md-4" p-label="E-mail" [p-value]="email"> </po-info>

    <po-info class="po-md-4" p-label="Name" [p-value]="name"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nickname" [p-value]="nickname"> </po-info>

    <po-info class="po-md-4" p-label="Birth Date" [p-value]="birthDate"> </po-info>

    <po-info class="po-md-4" p-label="Genre" [p-value]="genre"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Nationality" [p-value]="nationality"> </po-info>

    <po-info class="po-md-4" p-label="Place Of Birth" [p-value]="placeOfBirth"> </po-info>

    <po-info class="po-md-4" p-label="Graduation" [p-value]="graduation"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-info class="po-md-4" p-label="Fathers Name" [p-value]="fathersName"> </po-info>

    <po-info class="po-md-4" p-label="Mothers Name" [p-value]="mothersName"> </po-info>
  </div>
</po-page-detail>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-page-detail-user/sample-po-page-detail-user.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-detail-user',
  templateUrl: './sample-po-page-detail-user.component.html',
  standalone: false
})
export class SamplePoPageDetailUserComponent {
  private router = inject(Router);

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@po-ui.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'User Detail' }]
  };

  edit() {
    this.router.navigate(['/documentation/po-page-edit'], { queryParams: { view: 'web' } });
  }
}
`),e()()()()(),t(21,"div",10),o(22,"sample-po-page-detail-user"),e(),o(23,"hr")),l&2&&(r(5),D("po-icon "+n.sampleCodeButtonIcon),r(),_(" ",n.sampleCodeButtonLabel),r(),p("ngClass",y(4,ge,n.hideSampleCodeTabs)))},dependencies:[w,x,P,C,ne],encapsulation:2})}return a})();var oe=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-page-detail-doc"]],standalone:!1,decls:552,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoPageDetailLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(l,n){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),t(7,"code"),i(8,"po-page-default"),e(),i(9,", "),t(10,"code"),i(11,"po-page-detail"),e(),i(12,`,
`),t(13,"code"),i(14,"po-page-edit"),e(),i(15,", "),t(16,"code"),i(17,"po-page-list"),e(),i(18," e "),t(19,"code"),i(20,"po-page-slide"),e(),i(21,"."),e()(),t(22,"h3",3),i(23,"Componente"),e(),t(24,"h4",4)(25,"code",5),i(26,"PoPageDetailComponent"),e()(),t(27,"div",2)(28,"p"),i(29,"O componente "),t(30,"strong"),i(31,"po-page-detail"),e(),i(32,` \xE9 utilizado como container principal para a tela de
detalhamento de um registro, tendo a possibilidade de usar as a\xE7\xF5es de "Voltar", "Editar" e "Remover".`),e(),t(33,"h4"),i(34,"Tokens customiz\xE1veis"),e(),t(35,"blockquote")(36,"p"),i(37,"Para maiores informa\xE7\xF5es, acesse o guia "),t(38,"a",6),i(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(40,"."),e()(),t(41,"table")(42,"thead")(43,"tr")(44,"th"),i(45,"Propriedade"),e(),t(46,"th"),i(47,"Descri\xE7\xE3o"),e(),t(48,"th"),i(49,"Valor Padr\xE3o"),e()()(),t(50,"tbody")(51,"tr")(52,"td")(53,"strong"),i(54,"Header"),e()(),o(55,"td")(56,"td"),e(),t(57,"tr")(58,"td")(59,"code"),i(60,"--padding"),e()(),t(61,"td"),i(62,"Espa\xE7amento do header"),e(),t(63,"td")(64,"code"),i(65,"var(--spacing-xs) var(--spacing-md)"),e()()(),t(66,"tr")(67,"td")(68,"code"),i(69,"--gap"),e()(),t(70,"td"),i(71,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),t(72,"td")(73,"code"),i(74,"var(--spacing-md)"),e()()(),t(75,"tr")(76,"td")(77,"code"),i(78,"--gap-actions"),e()(),t(79,"td"),i(80,"Espa\xE7amento entre as a\xE7\xF5es"),e(),t(81,"td")(82,"code"),i(83,"var(--spacing-xs)"),e()()(),t(84,"tr")(85,"td")(86,"code"),i(87,"--font-family"),e()(),t(88,"td"),i(89,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),t(90,"td")(91,"code"),i(92,"var(--font-family-theme)"),e()()(),t(93,"tr")(94,"td")(95,"strong"),i(96,"Content"),e()(),o(97,"td")(98,"td"),e(),t(99,"tr")(100,"td")(101,"code"),i(102,"--padding-content"),e()(),t(103,"td"),i(104,"Espa\xE7amento do conte\xFAdo"),e(),t(105,"td")(106,"code"),i(107,"var(--spacing-xs) var(--spacing-sm)"),e()()()()()(),t(108,"div",7)(109,"h4",8),i(110,"Seletor"),e(),t(111,"pre",9),i(112,`<po-page-detail
    (p-back)="EventEmitter"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    (p-edit)="EventEmitter"
    p-literals="PoPageDetailLiterals"
    (p-remove)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-detail>
`),e()(),t(113,"h4",10),i(114,"Propriedades"),e(),t(115,"table",11)(116,"tr",12)(117,"th",13),i(118,"Nome"),e(),t(119,"th",13),i(120,"Tipo"),e(),t(121,"th",13),i(122,"Padr\xE3o"),e(),t(123,"th",13),i(124,"Descri\xE7\xE3o"),e()(),t(125,"tr",14)(126,"td",15)(127,"div",16)(128,"span",17),i(129," (p-back)"),o(130,"br"),e()()(),t(131,"td",18)(132,"code",19),i(133,"EventEmitter"),e()(),t(134,"td",20),i(135,"-"),e(),t(136,"td",21)(137,"p"),i(138,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Voltar".'),e(),t(139,"pre")(140,"code"),i(141,`<po-page-detail (p-back)="myBackFunction()">
</po-page-detail>
`),e()(),t(142,"blockquote")(143,"p"),i(144,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Voltar" n\xE3o ser\xE1 exibido.'),e()()()(),t(145,"tr",14)(146,"td",15)(147,"div",22)(148,"span",23),i(149," p-breadcrumb"),o(150,"br"),e()()(),t(151,"td",18)(152,"code",24),i(153,"PoBreadcrumb"),e()(),t(154,"td",20),i(155,"-"),e(),t(156,"td",21)(157,"p"),i(158,"Objeto com propriedades do breadcrumb."),e()()(),t(159,"tr",14)(160,"td",15)(161,"div",22)(162,"span",23),i(163," p-components-size"),o(164,"br"),e()()(),t(165,"td",18)(166,"code",25),i(167,"string"),e()(),t(168,"td",20)(169,"p")(170,"code"),i(171,"medium"),e()()(),t(172,"td",21)(173,"em")(174,"strong"),i(175,"(opcional)"),e()(),t(176,"p"),i(177,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(178,"ul")(179,"li")(180,"code"),i(181,"small"),e(),i(182,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(183,"li")(184,"code"),i(185,"medium"),e(),i(186,": aplica a medida medium de cada componente."),e()(),t(187,"blockquote")(188,"p"),i(189,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(190,"code"),i(191,"medium"),e(),i(192,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(193,"a",26),i(194,"po-theme"),e(),i(195,"."),e()()()(),t(196,"tr",14)(197,"td",15)(198,"div",16)(199,"span",17),i(200," (p-edit)"),o(201,"br"),e()()(),t(202,"td",18)(203,"code",19),i(204,"EventEmitter"),e()(),t(205,"td",20),i(206,"-"),e(),t(207,"td",21)(208,"p"),i(209,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Editar".'),e(),t(210,"pre")(211,"code"),i(212,`<po-page-detail (p-edit)="myEditFunction()">
</po-page-detail>
`),e()(),t(213,"blockquote")(214,"p"),i(215,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Editar" n\xE3o ser\xE1 exibido.'),e()()()(),t(216,"tr",14)(217,"td",15)(218,"div",22)(219,"span",23),i(220," p-literals"),o(221,"br"),e()()(),t(222,"td",18)(223,"code",27),i(224,"PoPageDetailLiterals"),e()(),t(225,"td",20),i(226,"-"),e(),t(227,"td",21)(228,"em")(229,"strong"),i(230,"(opcional)"),e()(),t(231,"p"),i(232,"Objeto com as literais usadas no "),t(233,"code"),i(234,"po-page-detail"),e(),i(235,"."),e(),t(236,"p"),i(237,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(238,"pre")(239,"code"),i(240,`const customLiterals: PoPageDetailLiterals = {
  edit: 'Edi\xE7\xE3o',
  remove: 'Exclus\xE3o',
  back: 'Menu'
};
`),e()(),t(241,"p"),i(242,"Ou passando apenas as literais que deseja customizar:"),e(),t(243,"pre")(244,"code"),i(245,`const customLiterals: PoPageDetailLiterals = {
  remove: 'Excluir registro permanentemente'
};
`),e()(),t(246,"p"),i(247,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(248,"pre")(249,"code"),i(250,`<po-page-detail
  [p-literals]="customLiterals">
</po-page-detail>
`),e()(),t(251,"blockquote")(252,"p"),i(253,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(254,"a",28)(255,"code"),i(256,"PoI18nService"),e()(),i(257," ou do browser."),e()()()(),t(258,"tr",14)(259,"td",15)(260,"div",16)(261,"span",17),i(262," (p-remove)"),o(263,"br"),e()()(),t(264,"td",18)(265,"code",19),i(266,"EventEmitter"),e()(),t(267,"td",20),i(268,"-"),e(),t(269,"td",21)(270,"p"),i(271,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Remover".'),e(),t(272,"pre")(273,"code"),i(274,`<po-page-detail (p-remove)="myRemoveFunction()">
</po-page-detail>
`),e()(),t(275,"blockquote")(276,"p"),i(277,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Remover" n\xE3o ser\xE1 exibido.'),e()()()(),t(278,"tr",14)(279,"td",15)(280,"div",22)(281,"span",23),i(282," p-subtitle"),o(283,"br"),e()()(),t(284,"td",18)(285,"code",25),i(286,"string"),e()(),t(287,"td",20),i(288,"-"),e(),t(289,"td",21)(290,"em")(291,"strong"),i(292,"(opcional)"),e()(),t(293,"p"),i(294,"Subtitulo do Header da p\xE1gina"),e()()(),t(295,"tr",14)(296,"td",15)(297,"div",22)(298,"span",23),i(299," p-title"),o(300,"br"),e()()(),t(301,"td",18)(302,"code",25),i(303,"string"),e()(),t(304,"td",20),i(305,"-"),e(),t(306,"td",21)(307,"p"),i(308,"T\xEDtulo da p\xE1gina."),e()()()(),t(309,"h3"),i(310,"Interfaces"),e(),t(311,"h4",29)(312,"code",5),i(313,"PoBreadcrumbItem"),e()(),t(314,"div",2)(315,"p"),i(316,"Interface que define cada item do componente "),t(317,"strong"),i(318,"po-breadcrumb"),e(),i(319,"."),e()(),t(320,"h4",10),i(321,"Propriedades"),e(),t(322,"table",11)(323,"tr",12)(324,"th",13),i(325,"Nome"),e(),t(326,"th",13),i(327,"Tipo"),e(),t(328,"th",13),i(329,"Descri\xE7\xE3o"),e()(),t(330,"tr",14)(331,"td",15)(332,"div",22)(333,"span",23),i(334," action"),o(335,"br"),e()()(),t(336,"td",18)(337,"code",30),i(338,"Function"),e()(),t(339,"td",21)(340,"em")(341,"strong"),i(342,"(opcional)"),e()(),t(343,"p"),i(344,"A\xE7\xE3o executada ao clicar no item."),e(),t(345,"blockquote")(346,"p"),i(347,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),t(348,"em"),i(349,"label"),e(),i(350," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),t(351,"tr",14)(352,"td",15)(353,"div",22)(354,"span",23),i(355," label"),o(356,"br"),e()()(),t(357,"td",18)(358,"code",25),i(359,"string"),e()(),t(360,"td",21)(361,"p"),i(362,"R\xF3tulo do item."),e()()(),t(363,"tr",14)(364,"td",15)(365,"div",22)(366,"span",23),i(367," link"),o(368,"br"),e()()(),t(369,"td",18)(370,"code",25),i(371,"string"),e()(),t(372,"td",21)(373,"em")(374,"strong"),i(375,"(opcional)"),e()(),t(376,"p"),i(377,"Url do item."),e(),t(378,"blockquote")(379,"p"),i(380,"Caso o item tamb\xE9m contenha uma "),t(381,"em"),i(382,"action"),e(),i(383," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),t(384,"em"),i(385,"link"),e(),i(386,"."),e()(),t(387,"blockquote")(388,"p"),i(389,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),t(390,"strong")(391,"a",31),i(392,"Veja um exemplo de como criar rotas aqui"),e()(),i(393,"."),e()(),t(394,"blockquote")(395,"p"),i(396,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),t(397,"code"),i(398,"p-favorite-service"),e(),i(399," consiga favoritar ou desfavoritar."),e()()()()(),t(400,"h4",29)(401,"code",5),i(402,"PoBreadcrumb"),e()(),t(403,"div",2)(404,"p"),i(405,"Interface que define o "),t(406,"code"),i(407,"po-breadcrumb"),e(),i(408,"."),e()(),t(409,"h4",10),i(410,"Propriedades"),e(),t(411,"table",11)(412,"tr",12)(413,"th",13),i(414,"Nome"),e(),t(415,"th",13),i(416,"Tipo"),e(),t(417,"th",13),i(418,"Descri\xE7\xE3o"),e()(),t(419,"tr",14)(420,"td",15)(421,"div",22)(422,"span",23),i(423," favorite"),o(424,"br"),e()()(),t(425,"td",18)(426,"code",25),i(427,"string"),e()(),t(428,"td",21)(429,"em")(430,"strong"),i(431,"(opcional)"),e()(),t(432,"p"),i(433,"Permite definir uma URL para favoritar ou desfavoritar."),e(),t(434,"blockquote")(435,"p"),i(436,"Para maiores informa\xE7\xF5es verificar a propriedade "),t(437,"code"),i(438,"p-favorite-service"),e(),i(439," do componente "),t(440,"code"),i(441,"po-breadcrumb"),e(),i(442,"."),e()()()(),t(443,"tr",14)(444,"td",15)(445,"div",22)(446,"span",23),i(447," items"),o(448,"br"),e()()(),t(449,"td",18)(450,"code",32),i(451,"Array<PoBreadcrumbItem>"),e()(),t(452,"td",21)(453,"p"),i(454,"Lista de itens do "),t(455,"em"),i(456,"breadcrumb"),e(),i(457,"."),e(),t(458,"p")(459,"strong"),i(460,"Exemplo:"),e()(),t(461,"pre")(462,"code"),i(463,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),t(464,"tr",14)(465,"td",15)(466,"div",22)(467,"span",23),i(468," params"),o(469,"br"),e()()(),t(470,"td",18)(471,"code",33),i(472,"object"),e()(),t(473,"td",21)(474,"em")(475,"strong"),i(476,"(opcional)"),e()(),t(477,"p"),i(478,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),t(479,"h4",29)(480,"code",5),i(481,"PoPageDetailLiterals"),e()(),t(482,"div",2)(483,"p"),i(484,"Interface para defini\xE7\xE3o das literais usadas no "),t(485,"code"),i(486,"po-page-detail"),e(),i(487,"."),e()(),t(488,"h4",10),i(489,"Propriedades"),e(),t(490,"table",11)(491,"tr",12)(492,"th",13),i(493,"Nome"),e(),t(494,"th",13),i(495,"Tipo"),e(),t(496,"th",13),i(497,"Descri\xE7\xE3o"),e()(),t(498,"tr",14)(499,"td",15)(500,"div",22)(501,"span",23),i(502," back"),o(503,"br"),e()()(),t(504,"td",18)(505,"code",25),i(506,"string"),e()(),t(507,"td",21)(508,"em")(509,"strong"),i(510,"(opcional)"),e()(),t(511,"p"),i(512,"Label da a\xE7\xE3o "),t(513,"code"),i(514,"back"),e(),i(515,"."),e()()(),t(516,"tr",14)(517,"td",15)(518,"div",22)(519,"span",23),i(520," edit"),o(521,"br"),e()()(),t(522,"td",18)(523,"code",25),i(524,"string"),e()(),t(525,"td",21)(526,"em")(527,"strong"),i(528,"(opcional)"),e()(),t(529,"p"),i(530,"Label da a\xE7\xE3o "),t(531,"code"),i(532,"edit"),e(),i(533,"."),e()()(),t(534,"tr",14)(535,"td",15)(536,"div",22)(537,"span",23),i(538," remove"),o(539,"br"),e()()(),t(540,"td",18)(541,"code",25),i(542,"string"),e()(),t(543,"td",21)(544,"em")(545,"strong"),i(546,"(opcional)"),e()(),t(547,"p"),i(548,"Label da a\xE7\xE3o "),t(549,"code"),i(550,"remove"),e(),i(551,"."),e()()()()())},dependencies:[x],encapsulation:2})}return a})();var le=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,l){this.route=d,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let l=d.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(q(G),q(L))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Detail",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),o(3,"sample-po-page-detail-doc"),e(),t(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),o(5,"sample-po-page-detail-basic-view")(6,"sample-po-page-detail-labs-view")(7,"sample-po-page-detail-user-view"),e()()()),l&2&&(p("p-actions",n.actions),r(2),p("p-active",n.activeTab==="doc"),r(2),p("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[X,P,C,ee,ie,ae,oe],encapsulation:2})}return a})();var he=[{path:"",component:le}],re=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=B({type:a});static \u0275inj=T({imports:[z.forChild(he),z]})}return a})();var Ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=B({type:a});static \u0275inj=T({imports:[Y,re]})}return a})();export{Ge as DocPoPageDetailModule};
