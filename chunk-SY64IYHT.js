import{o as _,p as re}from"./chunk-AT3MKFJ3.js";import{Gb as v,Hb as C,Ia as ne,Ja as z,Ra as ie,S as Y,U as Z,W as $,a as K,ab as ae,fa as ee,tb as oe,vb as B,w as X,za as te}from"./chunk-GCMU57WK.js";import{Ea as h,Fa as t,Ga as e,Ha as l,I as k,L as D,Mb as M,Mc as V,Nc as W,O as c,Oa as I,Oc as O,P as u,Pa as S,Pc as U,Qc as q,Va as H,Wa as G,Xa as J,_a as L,bb as y,cb as n,cd as Q,eb as w,ed as F,gb as b,gd as A,ha as m,hb as g,ib as E,ma as j,oa as f,pa as N,rb as x}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var le=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-title","PO Page Edit"]],template:function(r,i){r&1&&l(0,"po-page-edit",0)},dependencies:[B],encapsulation:2})}return o})();var Se=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Page Edit Basic"),e(),t(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.html"),e(),t(13,"pre",7),n(14,`<po-page-edit p-title="PO Page Edit"> </po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-page-edit-basic/sample-po-page-edit-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-edit-basic',
  templateUrl: './sample-po-page-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageEditBasicComponent {}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-basic"),e(),l(23,"hr")),r&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel),m(),h("ngClass",x(4,Se,i.hideSampleCodeTabs)))},dependencies:[M,_,v,C,le],encapsulation:2})}return o})();var de=(()=>{class o{action;breadcrumb;breadcrumbItem;breadcrumbParams;componentsSize;customLiterals;literals;params;properties;title;subtitle;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"disableSubmit",label:"Disable Submit"}];ngOnInit(){this.restore()}addBreadcrumbItem(){this.breadcrumb.items=this.breadcrumb.items.concat([this.breadcrumbItem]),this.breadcrumbItem={label:void 0,link:void 0}}addBreadcrumbParam(){let d={[this.breadcrumbParams.property]:this.breadcrumbParams.value};this.breadcrumb.params?this.breadcrumb.params=Object.assign(this.breadcrumb.params,d):this.breadcrumb.params=d,this.breadcrumbParams={}}cancel(){this.action="Cancel"}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}restore(){this.action="",this.breadcrumb={items:[]},this.breadcrumbItem={label:void 0,link:void 0},this.breadcrumbParams={},this.componentsSize="medium",this.customLiterals=void 0,this.literals="",this.properties=[],this.title="PO Page Edit",this.subtitle=""}save(){this.action="Save"}saveNew(){this.action="Save and new"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs"]],standalone:!1,decls:34,vars:21,consts:[["formBreadcrumbFavorite","ngForm"],["formBreadcrumbItems","ngForm"],["formBreadcrumbParams","ngForm"],[3,"p-cancel","p-save","p-save-new","p-breadcrumb","p-components-size","p-disable-submit","p-literals","p-title","p-subtitle"],[1,"po-row"],["p-label","Action",1,"po-md-12",3,"p-value"],["name","title","p-label","Title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","subtitle","p-label","Subtitle",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","breadcrumbFavorite","p-clean","","p-help","https://po-sample-api.onrender.com/v1/favorite","p-label","Breadcrumb favorite",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLabel","p-clean","","p-label","Breadcrumb item label","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbItemLink","p-clean","","p-label","Breadcrumb item link","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb item",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","breadcrumbParamsProperty","p-clean","","p-label","Breadcrumb params property","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","breadcrumbParamsValue","p-clean","","p-label","Breadcrumb params value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add breadcrumb params",1,"po-md-6","po-lg-3",3,"p-click","p-disabled"],["name","literals","p-help",'Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,i){if(r&1){let p=I();t(0,"po-page-edit",3),S("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()})("p-save-new",function(){return i.saveNew()}),t(1,"div",4),l(2,"po-info",5),e(),l(3,"po-divider"),t(4,"form")(5,"div",4)(6,"po-input",6),E("ngModelChange",function(a){return c(p),g(i.title,a)||(i.title=a),u(a)}),e(),t(7,"po-input",7),E("ngModelChange",function(a){return c(p),g(i.subtitle,a)||(i.subtitle=a),u(a)}),e(),t(8,"po-checkbox-group",8),E("ngModelChange",function(a){return c(p),g(i.properties,a)||(i.properties=a),u(a)}),e(),t(9,"po-radio-group",9),E("ngModelChange",function(a){return c(p),g(i.componentsSize,a)||(i.componentsSize=a),u(a)}),e()(),l(10,"po-divider"),t(11,"form",null,0)(13,"div",4)(14,"po-input",10),E("ngModelChange",function(a){return c(p),g(i.breadcrumb.favorite,a)||(i.breadcrumb.favorite=a),u(a)}),e()()(),t(15,"form",null,1)(17,"div",4)(18,"po-input",11),E("ngModelChange",function(a){return c(p),g(i.breadcrumbItem.label,a)||(i.breadcrumbItem.label=a),u(a)}),e(),t(19,"po-input",12),E("ngModelChange",function(a){return c(p),g(i.breadcrumbItem.link,a)||(i.breadcrumbItem.link=a),u(a)}),e()(),t(20,"div",4)(21,"po-button",13),S("p-click",function(){return i.addBreadcrumbItem()}),e()()(),l(22,"po-divider"),t(23,"form",null,2)(25,"div",4)(26,"po-input",14),E("ngModelChange",function(a){return c(p),g(i.breadcrumbParams.property,a)||(i.breadcrumbParams.property=a),u(a)}),e(),t(27,"po-input",15),E("ngModelChange",function(a){return c(p),g(i.breadcrumbParams.value,a)||(i.breadcrumbParams.value=a),u(a)}),e()(),t(28,"div",4)(29,"po-button",16),S("p-click",function(){return i.addBreadcrumbParam()}),e()()(),t(30,"div",4)(31,"po-input",17),E("ngModelChange",function(a){return c(p),g(i.literals,a)||(i.literals=a),u(a)}),S("p-change",function(){return i.changeLiterals()}),e()(),t(32,"div",4)(33,"po-button",18),S("p-click",function(){return i.restore()}),e()()()()}if(r&2){let p=L(16),s=L(24);h("p-breadcrumb",i.breadcrumb)("p-components-size",i.componentsSize)("p-disable-submit",i.properties.includes("disableSubmit"))("p-literals",i.customLiterals)("p-title",i.title)("p-subtitle",i.subtitle),m(2),h("p-value",i.action),m(4),b("ngModel",i.title),m(),b("ngModel",i.subtitle),m(),b("ngModel",i.properties),h("p-options",i.propertiesOptions),m(),b("ngModel",i.componentsSize),h("p-options",i.componentsSizeOptions),m(5),b("ngModel",i.breadcrumb.favorite),m(4),b("ngModel",i.breadcrumbItem.label),m(),b("ngModel",i.breadcrumbItem.link),m(2),h("p-disabled",p.invalid),m(5),b("ngModel",i.breadcrumbParams.property),m(),b("ngModel",i.breadcrumbParams.value),m(2),h("p-disabled",s.invalid),m(2),b("ngModel",i.literals)}},dependencies:[q,V,W,U,O,X,K,Y,Z,z,ae,B],encapsulation:2})}return o})();var Ce=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Page Edit Labs"),e(),t(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.html"),e(),t(13,"pre",7),n(14,`<po-page-edit
  [p-breadcrumb]="breadcrumb"
  [p-components-size]="componentsSize"
  [p-disable-submit]="properties.includes('disableSubmit')"
  [p-literals]="customLiterals"
  [p-title]="title"
  (p-cancel)="cancel()"
  (p-save)="save()"
  (p-save-new)="saveNew()"
  [p-subtitle]="subtitle"
>
  <div class="po-row">
    <po-info class="po-md-12" p-label="Action" [p-value]="action"> </po-info>
  </div>

  <po-divider />

  <form>
    <div class="po-row">
      <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title"> </po-input>
      <po-input class="po-md-6" name="subtitle" [(ngModel)]="subtitle" p-label="Subtitle"> </po-input>

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
        [(ngModel)]="componentsSize"
        p-columns="4"
        p-label="Components size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
        [p-options]="componentsSizeOptions"
      >
      </po-radio-group>
    </div>

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
        p-help='Ex.: {"cancel": "Voltar", "save": "Confirmar", "saveNew": "Confirmar e criar um novo"}'
        p-label="Literals"
        (p-change)="changeLiterals()"
      >
      </po-input>
    </div>

    <div class="po-row">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-page-edit-labs/sample-po-page-edit-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

import { PoBreadcrumb, PoBreadcrumbItem, PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

import { PoPageEditLiterals } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-labs',
  templateUrl: './sample-po-page-edit-labs.component.html',
  standalone: false
})
export class SamplePoPageEditLabsComponent implements OnInit {
  action: string;
  breadcrumb: PoBreadcrumb;
  breadcrumbItem: PoBreadcrumbItem;
  breadcrumbParams: any;
  componentsSize: string;
  customLiterals: PoPageEditLiterals;
  literals: string;
  params: any;
  properties: Array<string>;
  title: string;
  subtitle: string;

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disableSubmit', label: 'Disable Submit' }
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

  cancel() {
    this.action = 'Cancel';
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.action = '';
    this.breadcrumb = { items: [] };
    this.breadcrumbItem = { label: undefined, link: undefined };
    this.breadcrumbParams = {};
    this.componentsSize = 'medium';
    this.customLiterals = undefined;
    this.literals = '';
    this.properties = [];
    this.title = 'PO Page Edit';
    this.subtitle = '';
  }

  save() {
    this.action = 'Save';
  }

  saveNew() {
    this.action = 'Save and new';
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-labs"),e(),l(23,"hr")),r&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel),m(),h("ngClass",x(4,Ce,i.hideSampleCodeTabs)))},dependencies:[M,_,v,C,de],encapsulation:2})}return o})();var ye=["formEditUser"],ce=(()=>{class o{route=D(F);poDialog=D(ee);poNotification=D(te);formEditUser;birthDate;email;fathersName;genre;graduation;mothersName;name;nationality;nickname;placeOfBirth;userId;breadcrumb={items:[{label:"Home",action:this.beforeRedirect.bind(this)},{label:"User Edit"}]};ngOnInit(){this.initialize()}cancel(){this.initialize()}initialize(){this.birthDate=new Date(1978,11,26),this.email="john.doe@po-ui.com.br",this.fathersName="Mike Doe",this.genre="male",this.graduation="College Degree",this.mothersName="Jane Doe",this.name="John Doe",this.nationality="USA",this.nickname="John",this.placeOfBirth="Colorado",this.userId=122635}save(){this.poNotification.success("Save successfully")}beforeRedirect(d){this.formEditUser.valid?this.route.navigate(["/"]):this.poDialog.confirm({title:`Confirm redirect to ${d}`,message:"There is data that has not been saved yet. Are you sure you want to quit?",confirm:()=>this.route.navigate(["/"])})}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user"]],viewQuery:function(r,i){if(r&1&&H(ye,7),r&2){let p;G(p=J())&&(i.formEditUser=p.first)}},standalone:!1,decls:18,vars:13,consts:[["formEditUser","ngForm"],["p-title","User Edit",3,"p-cancel","p-save","p-breadcrumb","p-disable-submit"],[1,"po-row"],["name","userId","p-clean","","p-label","User ID","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","email","p-clean","","p-label","Email","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","name","p-clean","","p-label","Name","p-required","",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nickname","p-clean","","p-label","Nickname",1,"po-md-4",3,"ngModelChange","ngModel"],["name","birthDate","p-clean","","p-label","Birth Date",1,"po-md-4",3,"ngModelChange","ngModel"],["name","genre","p-clean","","p-label","Genre",1,"po-md-4",3,"ngModelChange","ngModel"],["name","nationality","p-clean","","p-label","Nationality",1,"po-md-4",3,"ngModelChange","ngModel"],["name","placeOfBirth","p-clean","","p-label","Place Of Birth",1,"po-md-4",3,"ngModelChange","ngModel"],["name","graduation","p-clean","","p-label","Graduation",1,"po-md-4",3,"ngModelChange","ngModel"],["name","fathersName","p-clean","","p-label","Father's Name",1,"po-md-4",3,"ngModelChange","ngModel"],["name","mothersName","p-clean","","p-label","Mother's Name",1,"po-md-4",3,"ngModelChange","ngModel"]],template:function(r,i){if(r&1){let p=I();t(0,"po-page-edit",1),S("p-cancel",function(){return i.cancel()})("p-save",function(){return i.save()}),t(1,"form",null,0)(3,"div",2)(4,"po-number",3),E("ngModelChange",function(a){return c(p),g(i.userId,a)||(i.userId=a),u(a)}),e(),t(5,"po-email",4),E("ngModelChange",function(a){return c(p),g(i.email,a)||(i.email=a),u(a)}),e(),t(6,"po-input",5),E("ngModelChange",function(a){return c(p),g(i.name,a)||(i.name=a),u(a)}),e()(),t(7,"div",2)(8,"po-input",6),E("ngModelChange",function(a){return c(p),g(i.nickname,a)||(i.nickname=a),u(a)}),e(),t(9,"po-datepicker",7),E("ngModelChange",function(a){return c(p),g(i.birthDate,a)||(i.birthDate=a),u(a)}),e(),t(10,"po-input",8),E("ngModelChange",function(a){return c(p),g(i.genre,a)||(i.genre=a),u(a)}),e()(),t(11,"div",2)(12,"po-input",9),E("ngModelChange",function(a){return c(p),g(i.nationality,a)||(i.nationality=a),u(a)}),e(),t(13,"po-input",10),E("ngModelChange",function(a){return c(p),g(i.placeOfBirth,a)||(i.placeOfBirth=a),u(a)}),e(),t(14,"po-input",11),E("ngModelChange",function(a){return c(p),g(i.graduation,a)||(i.graduation=a),u(a)}),e()(),t(15,"div",2)(16,"po-input",12),E("ngModelChange",function(a){return c(p),g(i.fathersName,a)||(i.fathersName=a),u(a)}),e(),t(17,"po-input",13),E("ngModelChange",function(a){return c(p),g(i.mothersName,a)||(i.mothersName=a),u(a)}),e()()()()}if(r&2){let p=L(2);h("p-breadcrumb",i.breadcrumb)("p-disable-submit",p.invalid),m(4),b("ngModel",i.userId),m(),b("ngModel",i.email),m(),b("ngModel",i.name),m(2),b("ngModel",i.nickname),m(),b("ngModel",i.birthDate),m(),b("ngModel",i.genre),m(2),b("ngModel",i.nationality),m(),b("ngModel",i.placeOfBirth),m(),b("ngModel",i.graduation),m(2),b("ngModel",i.fathersName),m(),b("ngModel",i.mothersName)}},dependencies:[q,V,W,U,O,$,ne,z,ie,B],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Page Edit - User"),e(),t(4,"a",2),S("click",function(){return i.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-page-edit-user/sample-po-page-edit-user.component.html"),e(),t(13,"pre",7),n(14,`<po-page-edit
  p-title="User Edit"
  [p-breadcrumb]="breadcrumb"
  [p-disable-submit]="formEditUser.invalid"
  (p-cancel)="cancel()"
  (p-save)="save()"
>
  <form #formEditUser="ngForm">
    <div class="po-row">
      <po-number class="po-md-4" name="userId" [(ngModel)]="userId" p-clean p-label="User ID" p-required> </po-number>

      <po-email class="po-md-4" name="email" [(ngModel)]="email" p-clean p-label="Email" p-required> </po-email>

      <po-input class="po-md-4" name="name" [(ngModel)]="name" p-clean p-label="Name" p-required> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nickname" [(ngModel)]="nickname" p-clean p-label="Nickname"> </po-input>

      <po-datepicker class="po-md-4" name="birthDate" [(ngModel)]="birthDate" p-clean p-label="Birth Date">
      </po-datepicker>

      <po-input class="po-md-4" name="genre" [(ngModel)]="genre" p-clean p-label="Genre"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="nationality" [(ngModel)]="nationality" p-clean p-label="Nationality"> </po-input>

      <po-input class="po-md-4" name="placeOfBirth" [(ngModel)]="placeOfBirth" p-clean p-label="Place Of Birth">
      </po-input>

      <po-input class="po-md-4" name="graduation" [(ngModel)]="graduation" p-clean p-label="Graduation"> </po-input>
    </div>

    <div class="po-row">
      <po-input class="po-md-4" name="fathersName" [(ngModel)]="fathersName" p-clean p-label="Father's Name">
      </po-input>

      <po-input class="po-md-4" name="mothersName" [(ngModel)]="mothersName" p-clean p-label="Mother's Name">
      </po-input>
    </div>
  </form>
</po-page-edit>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-page-edit-user/sample-po-page-edit-user.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoDialogService } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-edit-user',
  templateUrl: './sample-po-page-edit-user.component.html',
  standalone: false
})
export class SamplePoPageEditUserComponent implements OnInit {
  private route = inject(Router);
  private poDialog = inject(PoDialogService);
  private poNotification = inject(PoNotificationService);

  @ViewChild('formEditUser', { static: true }) formEditUser: NgForm;

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', action: this.beforeRedirect.bind(this) }, { label: 'User Edit' }]
  };

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@po-ui.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.poNotification.success(\`Save successfully\`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {
      this.poDialog.confirm({
        title: \`Confirm redirect to \${itemBreadcrumbLabel}\`,
        message: \`There is data that has not been saved yet. Are you sure you want to quit?\`,
        confirm: () => this.route.navigate(['/'])
      });
    }
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-page-edit-user"),e(),l(23,"hr")),r&2&&(m(5),y("po-icon "+i.sampleCodeButtonIcon),m(),w(" ",i.sampleCodeButtonLabel),m(),h("ngClass",x(4,xe,i.hideSampleCodeTabs)))},dependencies:[M,_,v,C,ce],encapsulation:2})}return o})();var be=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=f({type:o,selectors:[["sample-po-page-edit-doc"]],standalone:!1,decls:577,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoPageEditLiterals"],["href","/documentation/po-i18n"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","/guides/getting-started"],["pan","",1,"docs-api-property-type","Array<PoBreadcrumbItem>"],["pan","",1,"docs-api-property-type","object"]],template:function(r,i){r&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoPageModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),t(7,"code"),n(8,"po-page-default"),e(),n(9,", "),t(10,"code"),n(11,"po-page-detail"),e(),n(12,`,
`),t(13,"code"),n(14,"po-page-edit"),e(),n(15,", "),t(16,"code"),n(17,"po-page-list"),e(),n(18," e "),t(19,"code"),n(20,"po-page-slide"),e(),n(21,"."),e()(),t(22,"h3",3),n(23,"Componente"),e(),t(24,"h4",4)(25,"code",5),n(26,"PoPageEditComponent"),e()(),t(27,"div",2)(28,"p"),n(29,"O componente "),t(30,"strong"),n(31,"po-page-edit"),e(),n(32,` \xE9 utilizado como container principal para tela de edi\xE7\xE3o ou adi\xE7\xE3o de um
registro, tendo a possibilidade de usar as a\xE7\xF5es de "Salvar", "Salvar e Novo" e "Cancelar".`),e(),t(33,"p"),n(34,'Os bot\xF5es "Salvar" e "Salvar e Novo" podem ser habilitados/desabilitados utilizando a propriedade '),t(35,"code"),n(36,"p-disable-submit"),e(),n(37,`.
Esta propriedade pode ser utilizada para desabilitar os bot\xF5es caso exista um formul\xE1rio inv\xE1lido na p\xE1gina ou alguma
regra de neg\xF3cio n\xE3o tenha sido atendida.`),e(),t(38,"h4"),n(39,"Tokens customiz\xE1veis"),e(),t(40,"blockquote")(41,"p"),n(42,"Para maiores informa\xE7\xF5es, acesse o guia "),t(43,"a",6),n(44,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(45,"."),e()(),t(46,"table")(47,"thead")(48,"tr")(49,"th"),n(50,"Propriedade"),e(),t(51,"th"),n(52,"Descri\xE7\xE3o"),e(),t(53,"th"),n(54,"Valor Padr\xE3o"),e()()(),t(55,"tbody")(56,"tr")(57,"td")(58,"strong"),n(59,"Header"),e()(),l(60,"td")(61,"td"),e(),t(62,"tr")(63,"td")(64,"code"),n(65,"--padding"),e()(),t(66,"td"),n(67,"Espa\xE7amento do header"),e(),t(68,"td")(69,"code"),n(70,"var(--spacing-xs) var(--spacing-md)"),e()()(),t(71,"tr")(72,"td")(73,"code"),n(74,"--gap"),e()(),t(75,"td"),n(76,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),e(),t(77,"td")(78,"code"),n(79,"var(--spacing-md)"),e()()(),t(80,"tr")(81,"td")(82,"code"),n(83,"--gap-actions"),e()(),t(84,"td"),n(85,"Espa\xE7amento entre as a\xE7\xF5es"),e(),t(86,"td")(87,"code"),n(88,"var(--spacing-xs)"),e()()(),t(89,"tr")(90,"td")(91,"code"),n(92,"--font-family"),e()(),t(93,"td"),n(94,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),e(),t(95,"td")(96,"code"),n(97,"var(--font-family-theme)"),e()()(),t(98,"tr")(99,"td")(100,"strong"),n(101,"Content"),e()(),l(102,"td")(103,"td"),e(),t(104,"tr")(105,"td")(106,"code"),n(107,"--padding-content"),e()(),t(108,"td"),n(109,"Espa\xE7amento do conte\xFAdo"),e(),t(110,"td")(111,"code"),n(112,"var(--spacing-xs) var(--spacing-sm)"),e()()()()()(),t(113,"div",7)(114,"h4",8),n(115,"Seletor"),e(),t(116,"pre",9),n(117,`<po-page-edit
    p-breadcrumb="PoBreadcrumb"
    (p-cancel)="EventEmitter"
    p-components-size="string"
    p-disable-submit="boolean"
    p-literals="PoPageEditLiterals"
    (p-save)="EventEmitter"
    (p-save-new)="EventEmitter"
    p-subtitle="string"
    p-title="string" >
</po-page-edit>
`),e()(),t(118,"h4",10),n(119,"Propriedades"),e(),t(120,"table",11)(121,"tr",12)(122,"th",13),n(123,"Nome"),e(),t(124,"th",13),n(125,"Tipo"),e(),t(126,"th",13),n(127,"Padr\xE3o"),e(),t(128,"th",13),n(129,"Descri\xE7\xE3o"),e()(),t(130,"tr",14)(131,"td",15)(132,"div",16)(133,"span",17),n(134," p-breadcrumb"),l(135,"br"),e()()(),t(136,"td",18)(137,"code",19),n(138,"PoBreadcrumb"),e()(),t(139,"td",20),n(140,"-"),e(),t(141,"td",21)(142,"em")(143,"strong"),n(144,"(opcional)"),e()(),t(145,"p"),n(146,"Objeto com propriedades do breadcrumb."),e()()(),t(147,"tr",14)(148,"td",15)(149,"div",22)(150,"span",23),n(151," (p-cancel)"),l(152,"br"),e()()(),t(153,"td",18)(154,"code",24),n(155,"EventEmitter"),e()(),t(156,"td",20),n(157,"-"),e(),t(158,"td",21)(159,"p"),n(160,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Cancelar".'),e(),t(161,"pre")(162,"code"),n(163,`<po-page-edit (p-cancel)="myCancelFunction()">
</po-page-edit>
`),e()(),t(164,"blockquote")(165,"p"),n(166,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Cancelar" n\xE3o ser\xE1 exibido.'),e()()()(),t(167,"tr",14)(168,"td",15)(169,"div",16)(170,"span",17),n(171," p-components-size"),l(172,"br"),e()()(),t(173,"td",18)(174,"code",25),n(175,"string"),e()(),t(176,"td",20)(177,"p")(178,"code"),n(179,"medium"),e()()(),t(180,"td",21)(181,"em")(182,"strong"),n(183,"(opcional)"),e()(),t(184,"p"),n(185,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),t(186,"ul")(187,"li")(188,"code"),n(189,"small"),e(),n(190,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),t(191,"li")(192,"code"),n(193,"medium"),e(),n(194,": aplica a medida medium de cada componente."),e()(),t(195,"blockquote")(196,"p"),n(197,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(198,"code"),n(199,"medium"),e(),n(200,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(201,"a",26),n(202,"po-theme"),e(),n(203,"."),e()()()(),t(204,"tr",14)(205,"td",15)(206,"div",16)(207,"span",17),n(208," p-disable-submit"),l(209,"br"),e()()(),t(210,"td",18)(211,"code",27),n(212,"boolean"),e()(),t(213,"td",20),n(214,"-"),e(),t(215,"td",21)(216,"em")(217,"strong"),n(218,"(opcional)"),e()(),t(219,"p"),n(220,"Desabilita bot\xF5es de submiss\xE3o (save e saveNew)"),e()()(),t(221,"tr",14)(222,"td",15)(223,"div",16)(224,"span",17),n(225," p-literals"),l(226,"br"),e()()(),t(227,"td",18)(228,"code",28),n(229,"PoPageEditLiterals"),e()(),t(230,"td",20),n(231,"-"),e(),t(232,"td",21)(233,"em")(234,"strong"),n(235,"(opcional)"),e()(),t(236,"p"),n(237,"Objeto com as literais usadas no "),t(238,"code"),n(239,"po-page-edit"),e(),n(240,"."),e(),t(241,"p"),n(242,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),e(),t(243,"pre")(244,"code"),n(245,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Voltar',
  save: 'Confirmar',
  saveNew: 'Confirmar e criar um novo'
};
`),e()(),t(246,"p"),n(247,"Ou passando apenas as literais que deseja customizar:"),e(),t(248,"pre")(249,"code"),n(250,`const customLiterals: PoPageEditLiterals = {
  cancel: 'Cancelar processo'
};
`),e()(),t(251,"p"),n(252,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),e(),t(253,"pre")(254,"code"),n(255,`<po-page-edit
  [p-literals]="customLiterals">
</po-page-edit>
`),e()(),t(256,"blockquote")(257,"p"),n(258,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(259,"a",29)(260,"code"),n(261,"PoI18nService"),e()(),n(262," ou do browser."),e()()()(),t(263,"tr",14)(264,"td",15)(265,"div",22)(266,"span",23),n(267," (p-save)"),l(268,"br"),e()()(),t(269,"td",18)(270,"code",24),n(271,"EventEmitter"),e()(),t(272,"td",20),n(273,"-"),e(),t(274,"td",21)(275,"p"),n(276,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar".'),e(),t(277,"pre")(278,"code"),n(279,`<po-page-edit (p-save)="mySaveFunction()">
</po-page-edit>
`),e()(),t(280,"blockquote")(281,"p"),n(282,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar" n\xE3o ser\xE1 exibido.'),e()()()(),t(283,"tr",14)(284,"td",15)(285,"div",22)(286,"span",23),n(287," (p-save-new)"),l(288,"br"),e()()(),t(289,"td",18)(290,"code",24),n(291,"EventEmitter"),e()(),t(292,"td",20),n(293,"-"),e(),t(294,"td",21)(295,"p"),n(296,'Evento que ser\xE1 disparado ao clicar no bot\xE3o de "Salvar e Novo".'),e(),t(297,"pre")(298,"code"),n(299,`<po-page-edit (p-save-new)="mySaveNewFunction()">
</po-page-edit>
`),e()(),t(300,"blockquote")(301,"p"),n(302,'Caso n\xE3o utilizar esta propriedade, o bot\xE3o de "Salvar e Novo" n\xE3o ser\xE1 exibido.'),e()()()(),t(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),n(307," p-subtitle"),l(308,"br"),e()()(),t(309,"td",18)(310,"code",25),n(311,"string"),e()(),t(312,"td",20),n(313,"-"),e(),t(314,"td",21)(315,"em")(316,"strong"),n(317,"(opcional)"),e()(),t(318,"p"),n(319,"Subtitulo do Header da p\xE1gina"),e()()(),t(320,"tr",14)(321,"td",15)(322,"div",16)(323,"span",17),n(324," p-title"),l(325,"br"),e()()(),t(326,"td",18)(327,"code",25),n(328,"string"),e()(),t(329,"td",20),n(330,"-"),e(),t(331,"td",21)(332,"p"),n(333,"T\xEDtulo da p\xE1gina."),e()()()(),t(334,"h3"),n(335,"Interfaces"),e(),t(336,"h4",30)(337,"code",5),n(338,"PoBreadcrumbItem"),e()(),t(339,"div",2)(340,"p"),n(341,"Interface que define cada item do componente "),t(342,"strong"),n(343,"po-breadcrumb"),e(),n(344,"."),e()(),t(345,"h4",10),n(346,"Propriedades"),e(),t(347,"table",11)(348,"tr",12)(349,"th",13),n(350,"Nome"),e(),t(351,"th",13),n(352,"Tipo"),e(),t(353,"th",13),n(354,"Descri\xE7\xE3o"),e()(),t(355,"tr",14)(356,"td",15)(357,"div",16)(358,"span",17),n(359," action"),l(360,"br"),e()()(),t(361,"td",18)(362,"code",31),n(363,"Function"),e()(),t(364,"td",21)(365,"em")(366,"strong"),n(367,"(opcional)"),e()(),t(368,"p"),n(369,"A\xE7\xE3o executada ao clicar no item."),e(),t(370,"blockquote")(371,"p"),n(372,"A fun\xE7\xE3o atribu\xEDda a esta propriedade receber\xE1 o "),t(373,"em"),n(374,"label"),e(),n(375," do item como par\xE2metro para execu\xE7\xE3o."),e()()()(),t(376,"tr",14)(377,"td",15)(378,"div",16)(379,"span",17),n(380," label"),l(381,"br"),e()()(),t(382,"td",18)(383,"code",25),n(384,"string"),e()(),t(385,"td",21)(386,"p"),n(387,"R\xF3tulo do item."),e()()(),t(388,"tr",14)(389,"td",15)(390,"div",16)(391,"span",17),n(392," link"),l(393,"br"),e()()(),t(394,"td",18)(395,"code",25),n(396,"string"),e()(),t(397,"td",21)(398,"em")(399,"strong"),n(400,"(opcional)"),e()(),t(401,"p"),n(402,"Url do item."),e(),t(403,"blockquote")(404,"p"),n(405,"Caso o item tamb\xE9m contenha uma "),t(406,"em"),n(407,"action"),e(),n(408," definida, a prefer\xEAncia de execu\xE7\xE3o ser\xE1 do "),t(409,"em"),n(410,"link"),e(),n(411,"."),e()(),t(412,"blockquote")(413,"p"),n(414,`Para o correto funcionamento, \xE9 necess\xE1rio que haja uma rota referenciando seu valor.
`),t(415,"strong")(416,"a",32),n(417,"Veja um exemplo de como criar rotas aqui"),e()(),n(418,"."),e()(),t(419,"blockquote")(420,"p"),n(421,"Esta propriedade \xE9 necess\xE1ria para que a propriedade "),t(422,"code"),n(423,"p-favorite-service"),e(),n(424," consiga favoritar ou desfavoritar."),e()()()()(),t(425,"h4",30)(426,"code",5),n(427,"PoBreadcrumb"),e()(),t(428,"div",2)(429,"p"),n(430,"Interface que define o "),t(431,"code"),n(432,"po-breadcrumb"),e(),n(433,"."),e()(),t(434,"h4",10),n(435,"Propriedades"),e(),t(436,"table",11)(437,"tr",12)(438,"th",13),n(439,"Nome"),e(),t(440,"th",13),n(441,"Tipo"),e(),t(442,"th",13),n(443,"Descri\xE7\xE3o"),e()(),t(444,"tr",14)(445,"td",15)(446,"div",16)(447,"span",17),n(448," favorite"),l(449,"br"),e()()(),t(450,"td",18)(451,"code",25),n(452,"string"),e()(),t(453,"td",21)(454,"em")(455,"strong"),n(456,"(opcional)"),e()(),t(457,"p"),n(458,"Permite definir uma URL para favoritar ou desfavoritar."),e(),t(459,"blockquote")(460,"p"),n(461,"Para maiores informa\xE7\xF5es verificar a propriedade "),t(462,"code"),n(463,"p-favorite-service"),e(),n(464," do componente "),t(465,"code"),n(466,"po-breadcrumb"),e(),n(467,"."),e()()()(),t(468,"tr",14)(469,"td",15)(470,"div",16)(471,"span",17),n(472," items"),l(473,"br"),e()()(),t(474,"td",18)(475,"code",33),n(476,"Array<PoBreadcrumbItem>"),e()(),t(477,"td",21)(478,"p"),n(479,"Lista de itens do "),t(480,"em"),n(481,"breadcrumb"),e(),n(482,"."),e(),t(483,"p")(484,"strong"),n(485,"Exemplo:"),e()(),t(486,"pre")(487,"code"),n(488,`{ label: 'Po Portal', link: 'portal' }
`),e()()()(),t(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),n(493," params"),l(494,"br"),e()()(),t(495,"td",18)(496,"code",34),n(497,"object"),e()(),t(498,"td",21)(499,"em")(500,"strong"),n(501,"(opcional)"),e()(),t(502,"p"),n(503,"Objeto que possibilita o envio de par\xE2metros adicionais \xE0 requisi\xE7\xE3o."),e()()()(),t(504,"h4",30)(505,"code",5),n(506,"PoPageEditLiterals"),e()(),t(507,"div",2)(508,"p"),n(509,"Interface para defini\xE7\xE3o das literais usadas no "),t(510,"code"),n(511,"po-page-edit"),e(),n(512,"."),e()(),t(513,"h4",10),n(514,"Propriedades"),e(),t(515,"table",11)(516,"tr",12)(517,"th",13),n(518,"Nome"),e(),t(519,"th",13),n(520,"Tipo"),e(),t(521,"th",13),n(522,"Descri\xE7\xE3o"),e()(),t(523,"tr",14)(524,"td",15)(525,"div",16)(526,"span",17),n(527," cancel"),l(528,"br"),e()()(),t(529,"td",18)(530,"code",25),n(531,"string"),e()(),t(532,"td",21)(533,"em")(534,"strong"),n(535,"(opcional)"),e()(),t(536,"p"),n(537,"Label da a\xE7\xE3o "),t(538,"code"),n(539,"cancel"),e(),n(540,"."),e()()(),t(541,"tr",14)(542,"td",15)(543,"div",16)(544,"span",17),n(545," save"),l(546,"br"),e()()(),t(547,"td",18)(548,"code",25),n(549,"string"),e()(),t(550,"td",21)(551,"em")(552,"strong"),n(553,"(opcional)"),e()(),t(554,"p"),n(555,"Label da a\xE7\xE3o "),t(556,"code"),n(557,"save"),e(),n(558,"."),e()()(),t(559,"tr",14)(560,"td",15)(561,"div",16)(562,"span",17),n(563," saveNew"),l(564,"br"),e()()(),t(565,"td",18)(566,"code",25),n(567,"string"),e()(),t(568,"td",21)(569,"em")(570,"strong"),n(571,"(opcional)"),e()(),t(572,"p"),n(573,"Label da a\xE7\xE3o "),t(574,"code"),n(575,"saveNew"),e(),n(576,"."),e()()()()())},dependencies:[_],encapsulation:2})}return o})();var ge=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||o)(j(Q),j(F))};static \u0275cmp=f({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),S("p-click",function(){return i.changeTab("doc")}),l(3,"sample-po-page-edit-doc"),e(),t(4,"po-tab",3),S("p-click",function(){return i.changeTab("web")}),l(5,"sample-po-page-edit-basic-view")(6,"sample-po-page-edit-labs-view")(7,"sample-po-page-edit-user-view"),e()()()),r&2&&(h("p-actions",i.actions),m(2),h("p-active",i.activeTab==="doc"),m(2),h("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[oe,v,C,pe,se,ue,be],encapsulation:2})}return o})();var Te=[{path:"",component:ge}],Ee=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=N({type:o});static \u0275inj=k({imports:[A.forChild(Te),A]})}return o})();var ot=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275mod=N({type:o});static \u0275inj=k({imports:[re,Ee]})}return o})();export{ot as DocPoPageEditModule};
