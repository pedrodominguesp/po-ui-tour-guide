import{o as v,p as oe}from"./chunk-AT3MKFJ3.js";import{Gb as h,Hb as f,Ja as ee,M as Y,Ra as te,S as Z,U as $,a as Q,s as M,tb as ne,w as X}from"./chunk-GCMU57WK.js";import{Ba as N,Ca as F,Da as H,Ea as d,Fa as e,Ga as n,Ha as o,I as T,Mb as y,Mc as R,Nc as A,O as C,Oa as q,Oc as G,P as E,Pa as c,Pc as j,Q as I,Qc as U,R as V,bb as B,cb as t,cd as J,eb as S,ed as K,gb as x,gd as O,ha as r,hb as P,ib as w,ma as L,oa as m,pa as D,rb as _,wa as W}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ie=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-badge-basic"]],standalone:!1,decls:1,vars:0,template:function(l,i){l&1&&o(0,"po-badge")},dependencies:[M],encapsulation:2})}return a})();var Se=a=>({"docs-sample-code-tabs":a}),le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-badge-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Basic"),n(),e(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-basic/sample-po-badge-basic.component.html"),n(),e(13,"pre",7),t(14,`<po-badge></po-badge>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-basic/sample-po-badge-basic.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-badge-basic',
  templateUrl: './sample-po-badge-basic.component.html',
  standalone: false
})
export class SamplePoBadgeBasicComponent {}
`),n()()()()(),e(21,"div",10),o(22,"sample-po-badge-basic"),n(),o(23,"hr")),l&2&&(r(5),B("po-icon "+i.sampleCodeButtonIcon),r(),S(" ",i.sampleCodeButtonLabel),r(),d("ngClass",_(4,Se,i.hideSampleCodeTabs)))},dependencies:[y,v,h,f,ie],encapsulation:2})}return a})();var pe=(()=>{class a{value;icon;size;status;properties;color;showIcon;propertiesOptions=[{value:"showBorder",label:"Show Border"}];iconsOptions=[{label:"an-check",value:"an an-check"},{label:"an-check-circle",value:"an an-check-circle"},{label:"an an-check",value:"an an-check"},{label:"fa-minus",value:"fa fa-minus"},{label:"true (Enabled when status is settled)",value:"true",disabled:!0},{label:"None",value:"false"}];sizesOptions=[{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];statusOptions=[{label:"Positive",value:"positive"},{label:"Negative",value:"negative"},{label:"Warning",value:"warning"},{label:"Disabled",value:"disabled"},{label:"None",value:"none"}];constructor(){}ngOnInit(){this.restore()}propertiesChange(p){this.properties=p}statusChange(p){this.value=void 0,this.iconsOptions[4].disabled=!1,p==="none"&&(this.iconsOptions[4].disabled=!0)}iconsChange(p){this.value=void 0,this.showIcon=p==="true"}restore(){this.size="medium",this.status=void 0,this.icon=void 0,this.color="color-07",this.value=void 0,this.showIcon=!1,this.iconsOptions[4].disabled=!0,this.properties=[]}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-badge-labs"]],standalone:!1,decls:15,vars:17,consts:[["f","ngForm"],[1,"po-row"],[3,"p-color","p-icon","p-size","p-status","p-show-border","p-value"],["name","value","p-label","Value",1,"po-md-4",3,"ngModelChange","ngModel","p-min"],["name","color","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-4",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","status","p-label","Status",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(l,i){if(l&1){let g=q();e(0,"div",1),o(1,"po-badge",2),n(),o(2,"po-divider"),e(3,"form",null,0)(5,"div",1)(6,"po-number",3),w("ngModelChange",function(s){return C(g),P(i.value,s)||(i.value=s),E(s)}),n(),e(7,"po-input",4),w("ngModelChange",function(s){return C(g),P(i.color,s)||(i.color=s),E(s)}),n()(),e(8,"div",1)(9,"po-checkbox-group",5),w("ngModelChange",function(s){return C(g),P(i.properties,s)||(i.properties=s),E(s)}),c("p-change",function(s){return i.propertiesChange(s)}),n(),e(10,"po-radio-group",6),w("ngModelChange",function(s){return C(g),P(i.status,s)||(i.status=s),E(s)}),c("p-change",function(s){return i.statusChange(s)}),n(),e(11,"po-radio-group",7),w("ngModelChange",function(s){return C(g),P(i.size,s)||(i.size=s),E(s)}),n(),e(12,"po-radio-group",8),w("ngModelChange",function(s){return C(g),P(i.icon,s)||(i.icon=s),E(s)}),c("p-change",function(s){return i.iconsChange(s)}),n()(),e(13,"div",1)(14,"po-button",9),c("p-click",function(){return i.restore()}),n()()()}l&2&&(r(),d("p-color",i.color)("p-icon",i.showIcon?!0:i.icon)("p-size",i.size)("p-status",i.status)("p-show-border",i.properties.includes("showBorder"))("p-value",i.value),r(5),x("ngModel",i.value),d("p-min",0),r(),x("ngModel",i.color),r(2),x("ngModel",i.properties),d("p-options",i.propertiesOptions),r(),x("ngModel",i.status),d("p-options",i.statusOptions),r(),x("ngModel",i.size),d("p-options",i.sizesOptions),r(),x("ngModel",i.icon),d("p-options",i.iconsOptions))},dependencies:[U,R,A,j,G,X,Q,Z,$,ee,te,M],encapsulation:2})}return a})();var ve=a=>({"docs-sample-code-tabs":a}),se=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-badge-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Labs"),n(),e(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-labs/sample-po-badge-labs.component.html"),n(),e(13,"pre",7),t(14,`<div class="po-row">
  <po-badge
    [p-color]="color"
    [p-icon]="showIcon ? true : icon"
    [p-size]="size"
    [p-status]="status"
    [p-show-border]="properties.includes('showBorder')"
    [p-value]="value"
  ></po-badge>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-number class="po-md-4" name="value" [(ngModel)]="value" p-label="Value" [p-min]="0"> </po-number>
    <po-input
      class="po-md-4"
      name="color"
      [(ngModel)]="color"
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    ></po-input>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-lg-12"
      name="status"
      [(ngModel)]="status"
      p-label="Status"
      [p-options]="statusOptions"
      (p-change)="statusChange($event)"
    >
    </po-radio-group>

    <po-radio-group class="po-lg-12" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizesOptions">
    </po-radio-group>

    <po-radio-group
      class="po-lg-12"
      name="icon"
      [(ngModel)]="icon"
      p-label="Icon"
      [p-options]="iconsOptions"
      (p-change)="iconsChange($event)"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-labs/sample-po-badge-labs.component.ts"),n(),e(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';
import { PoCheckboxGroupOption, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-badge-labs',
  templateUrl: './sample-po-badge-labs.component.html',
  standalone: false
})
export class SamplePoBadgeLabsComponent implements OnInit {
  value: number;
  icon: string;
  size: string;
  status: any;
  properties: Array<string>;
  color: string;
  showIcon: boolean;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'showBorder', label: 'Show Border' }];

  iconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an-check', value: 'an an-check' },
    { label: 'an-check-circle', value: 'an an-check-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'fa-minus', value: 'fa fa-minus' },
    { label: 'true (Enabled when status is settled)', value: 'true', disabled: true },
    { label: 'None', value: 'false' }
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Positive', value: 'positive' },
    { label: 'Negative', value: 'negative' },
    { label: 'Warning', value: 'warning' },
    { label: 'Disabled', value: 'disabled' },
    { label: 'None', value: 'none' }
  ];

  constructor() {}

  ngOnInit() {
    this.restore();
  }

  propertiesChange(event) {
    this.properties = event;
  }

  statusChange(event) {
    this.value = undefined;
    this.iconsOptions[4].disabled = false;

    if (event === 'none') {
      this.iconsOptions[4].disabled = true;
    }
  }

  iconsChange(event) {
    this.value = undefined;
    this.showIcon = event === 'true' ? true : false;
  }

  restore() {
    this.size = 'medium';
    this.status = undefined;
    this.icon = undefined;
    this.color = 'color-07';
    this.value = undefined;
    this.showIcon = false;
    this.iconsOptions[4].disabled = true;
    this.properties = [];
  }
}
`),n()()()()(),e(21,"div",10),o(22,"sample-po-badge-labs"),n(),o(23,"hr")),l&2&&(r(5),B("po-icon "+i.sampleCodeButtonIcon),r(),S(" ",i.sampleCodeButtonLabel),r(),d("ngClass",_(4,ve,i.hideSampleCodeTabs)))},dependencies:[y,v,h,f,pe],encapsulation:2})}return a})();function Ee(a,ue){if(a&1&&(e(0,"div",1)(1,"po-container")(2,"div",2),I(),e(3,"svg",3),o(4,"circle",4)(5,"path",5),n(),V(),e(6,"p",6),t(7),o(8,"po-badge",7),n()()()()),a&2){let p=ue.$implicit;r(3),W("kind",p.status),r(4),S(" ",p.nome," "),r(),d("p-status",p.status==="online"?"positive":"negative")}}var re=(()=>{class a{users=[{nome:"Leonardo da vinci",status:"online"},{nome:"Johann Pachelbel",status:"offline"},{nome:"Amadeus Mozart",status:"offline"}];static \u0275fac=function(l){return new(l||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-badge-message"]],standalone:!1,decls:4,vars:0,consts:[[1,"po-row","po-mt-3"],[1,"po-mb-1"],[1,"card"],["stroke-linecap","round","stroke-linejoin","round",1,"po-mr-2"],["cx","12","cy","12","r","11"],["d","m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9","fill","none"],[1,"po-mr-2","card-name-user","po-text-color-neutral-dark-40"],[1,"po-badge-wrap",3,"p-status"]],template:function(l,i){l&1&&(e(0,"div",0)(1,"div"),F(2,Ee,9,3,"div",1,N),n()()),l&2&&(r(2),H(i.users))},dependencies:[Y,M],styles:[".po-badge-wrap[_ngcontent-%COMP%]{position:absolute;top:-5px;right:-5px}svg[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;flex:none;stroke-width:2;stroke-linecap:round}svg[kind=online][_ngcontent-%COMP%]{stroke:#0ea5e9;fill:#e0f2fe}svg[kind=offline][_ngcontent-%COMP%]{fill:#fff;stroke:#dc2626}.card[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}"]})}return a})();var Pe=a=>({"docs-sample-code-tabs":a}),de=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-badge-message-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(o(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Badge Message"),n(),e(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-badge-message/sample-po-badge-message.component.html"),n(),e(13,"pre",7),t(14,`<div class="po-row po-mt-3">
  <div>
    @for (user of users; track user) {
      <div class="po-mb-1">
        <po-container>
          <div class="card">
            <svg class="po-mr-2" [attr.kind]="user.status" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="11" />
              <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
            </svg>
            <p class="po-mr-2 card-name-user po-text-color-neutral-dark-40">
              { { user.nome }}
              <po-badge
                class="po-badge-wrap"
                [p-status]="user.status === 'online' ? 'positive' : 'negative'"
              ></po-badge>
            </p>
          </div>
        </po-container>
      </div>
    }
  </div>
</div>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-badge-message/sample-po-badge-message.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-badge-message',
  templateUrl: './sample-po-badge-message.component.html',
  styleUrls: ['./sample-po-badge-message.component.css'],
  standalone: false
})
export class SamplePoBadgeMessageComponent {
  users: Array<any> = [
    {
      nome: 'Leonardo da vinci',
      status: 'online'
    },
    {
      nome: 'Johann Pachelbel',
      status: 'offline'
    },
    {
      nome: 'Amadeus Mozart',
      status: 'offline'
    }
  ];
}
`),n()()(),e(21,"po-tab",10)(22,"div")(23,"label",6),t(24,"sample-po-badge-message/sample-po-badge-message.component.css"),n(),e(25,"pre",11),t(26,`.po-badge-wrap {
  position: absolute;
  top: -5px;
  right: -5px;
}

svg {
  width: 1.5rem;
  height: 1.5rem;
  flex: none;
  stroke-width: 2;
  stroke-linecap: round;
}

svg[kind='online'] {
  stroke: #0ea5e9;
  fill: #e0f2fe;
}

svg[kind='offline'] {
  fill: white;
  stroke: #dc2626;
}

.card {
  display: flex;
  align-items: center;
  position: relative;
}
`),n()()()()(),e(27,"div",12),o(28,"sample-po-badge-message"),n(),o(29,"hr")),l&2&&(r(5),B("po-icon "+i.sampleCodeButtonIcon),r(),S(" ",i.sampleCodeButtonLabel),r(),d("ngClass",_(4,Pe,i.hideSampleCodeTabs)))},dependencies:[y,v,h,f,re],encapsulation:2})}return a})();var me=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-badge-doc"]],standalone:!1,decls:440,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoBadgeIcon"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBadgeSize"],["pan","",1,"docs-api-property-type","PoBadgeStatus"],["pan","",1,"docs-api-property-type","number"]],template:function(l,i){l&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoBadgeModule } from '@po-ui/ng-components';"),n()(),e(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-badge."),n()(),e(7,"h3",3),t(8,"Componente"),n(),e(9,"h4",4)(10,"code",5),t(11,"PoBadgeComponent"),n()(),e(12,"div",2)(13,"p"),t(14,"Utilizado para exibir a quantidade de notifica\xE7\xF5es. "),n()(),e(15,"div",6)(16,"h4",7),t(17,"Seletor"),n(),e(18,"pre",8),t(19,`<po-badge
    p-aria-label="string"
    p-color="string"
    p-icon="PoBadgeIcon"
    p-show-border="boolean"
    p-size="PoBadgeSize"
    p-status="PoBadgeStatus"
    p-value="number" >
</po-badge>
`),n()(),e(20,"h4",9),t(21,"Propriedades"),n(),e(22,"table",10)(23,"tr",11)(24,"th",12),t(25,"Nome"),n(),e(26,"th",12),t(27,"Tipo"),n(),e(28,"th",12),t(29,"Padr\xE3o"),n(),e(30,"th",12),t(31,"Descri\xE7\xE3o"),n()(),e(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),t(36," p-aria-label"),o(37,"br"),n()()(),e(38,"td",17)(39,"code",18),t(40,"string"),n()(),e(41,"td",19),t(42,"-"),n(),e(43,"td",20)(44,"p"),t(45,"Define um "),e(46,"code"),t(47,"aria-label"),n(),t(48," para o "),e(49,"code"),t(50,"po-badge"),n()()()(),e(51,"tr",13)(52,"td",14)(53,"div",15)(54,"span",16),t(55," p-color"),o(56,"br"),n()()(),e(57,"td",17)(58,"code",18),t(59,"string"),n()(),e(60,"td",19)(61,"p")(62,"code"),t(63,"color-07"),n()()(),e(64,"td",20)(65,"em")(66,"strong"),t(67,"(opcional)"),n()(),e(68,"p"),t(69,"Determina a cor do "),e(70,"code"),t(71,"po-badge"),n(),t(72,". As maneiras de customizar as cores s\xE3o:"),n(),e(73,"ul")(74,"li"),t(75,"Hexadeximal, por exemplo "),e(76,"code"),t(77,"#c64840"),n(),t(78,";"),n(),e(79,"li"),t(80,"RGB, como "),e(81,"code"),t(82,"rgb(0, 0, 165)"),n(),t(83,";"),n(),e(84,"li"),t(85,"O nome da cor, por exemplo "),e(86,"code"),t(87,"blue"),n(),t(88,";"),n(),e(89,"li"),t(90,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),e(91,"ul")(92,"li"),o(93,"span",21),e(94,"code"),t(95,"color-01"),n()(),e(96,"li"),o(97,"span",22),e(98,"code"),t(99,"color-02"),n()(),e(100,"li"),o(101,"span",23),e(102,"code"),t(103,"color-03"),n()(),e(104,"li"),o(105,"span",24),e(106,"code"),t(107,"color-04"),n()(),e(108,"li"),o(109,"span",25),e(110,"code"),t(111,"color-05"),n()(),e(112,"li"),o(113,"span",26),e(114,"code"),t(115,"color-06"),n()(),e(116,"li"),o(117,"span",27),e(118,"code"),t(119,"color-07"),n()(),e(120,"li"),o(121,"span",28),e(122,"code"),t(123,"color-08"),n()(),e(124,"li"),o(125,"span",29),e(126,"code"),t(127,"color-09"),n()(),e(128,"li"),o(129,"span",30),e(130,"code"),t(131,"color-10"),n()(),e(132,"li"),o(133,"span",31),e(134,"code"),t(135,"color-11"),n()(),e(136,"li"),o(137,"span",32),e(138,"code"),t(139,"color-12"),n()()()()(),e(140,"blockquote")(141,"p"),t(142,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),e(143,"strong"),t(144,"Caption Tag Colors"),n(),t(145,":"),n()(),e(146,"ul")(147,"li"),o(148,"span",33),e(149,"code"),t(150,"caption-tag-01"),n(),o(151,"span",34),e(152,"code"),t(153,"caption-tag-02"),n(),o(154,"span",35),e(155,"code"),t(156,"caption-tag-03"),n(),o(157,"span",36),e(158,"code"),t(159,"caption-tag-04"),n(),o(160,"span",37),e(161,"code"),t(162,"caption-tag-05"),n()(),e(163,"li"),o(164,"span",38),e(165,"code"),t(166,"caption-tag-06"),n(),o(167,"span",39),e(168,"code"),t(169,"caption-tag-07"),n(),o(170,"span",40),e(171,"code"),t(172,"caption-tag-08"),n(),o(173,"span",41),e(174,"code"),t(175,"caption-tag-09"),n(),o(176,"span",42),e(177,"code"),t(178,"caption-tag-10"),n()(),e(179,"li"),o(180,"span",43),e(181,"code"),t(182,"caption-tag-11"),n(),o(183,"span",44),e(184,"code"),t(185,"caption-tag-12"),n(),o(186,"span",45),e(187,"code"),t(188,"caption-tag-13"),n(),o(189,"span",46),e(190,"code"),t(191,"caption-tag-14"),n(),o(192,"span",47),e(193,"code"),t(194,"caption-tag-15"),n()(),e(195,"li"),o(196,"span",48),e(197,"code"),t(198,"caption-tag-16"),n(),o(199,"span",49),e(200,"code"),t(201,"caption-tag-17"),n(),o(202,"span",50),e(203,"code"),t(204,"caption-tag-18"),n(),o(205,"span",51),e(206,"code"),t(207,"caption-tag-19"),n(),o(208,"span",52),e(209,"code"),t(210,"caption-tag-20"),n()(),e(211,"li"),o(212,"span",53),e(213,"code"),t(214,"caption-tag-21"),n(),o(215,"span",54),e(216,"code"),t(217,"caption-tag-22"),n(),o(218,"span",55),e(219,"code"),t(220,"caption-tag-23"),n(),o(221,"span",56),e(222,"code"),t(223,"caption-tag-24"),n(),o(224,"span",57),e(225,"code"),t(226,"caption-tag-25"),n()(),e(227,"li"),o(228,"span",58),e(229,"code"),t(230,"caption-tag-26"),n(),o(231,"span",59),e(232,"code"),t(233,"caption-tag-27"),n(),o(234,"span",60),e(235,"code"),t(236,"caption-tag-28"),n(),o(237,"span",61),e(238,"code"),t(239,"caption-tag-29"),n(),o(240,"span",62),e(241,"code"),t(242,"caption-tag-30"),n()(),e(243,"li"),o(244,"span",63),e(245,"code"),t(246,"caption-tag-31"),n(),o(247,"span",64),e(248,"code"),t(249,"caption-tag-32"),n(),o(250,"span",65),e(251,"code"),t(252,"caption-tag-33"),n(),o(253,"span",66),e(254,"code"),t(255,"caption-tag-34"),n(),o(256,"span",67),e(257,"code"),t(258,"caption-tag-35"),n()()(),e(259,"p"),t(260,"Exemplo de uso:"),n(),e(261,"pre")(262,"code"),t(263,`<po-badge p-color="caption-tag-13" p-value="5"></po-badge>
`),n()()()(),e(264,"tr",13)(265,"td",14)(266,"div",15)(267,"span",16),t(268," p-icon"),o(269,"br"),n()()(),e(270,"td",17)(271,"code",68),t(272,"PoBadgeIcon"),n()(),e(273,"td",19),t(274,"-"),n(),e(275,"td",20)(276,"em")(277,"strong"),t(278,"(opcional)"),n()(),e(279,"p"),t(280,"\xCDcone exibido no "),e(281,"code"),t(282,"po-badge"),n(),t(283,"."),n(),e(284,"p"),t(285,"Para exibir icone do status atual declare a propriedade "),e(286,"code"),t(287,"p-icon"),n(),t(288,". conforme exemplo abaixo:"),n(),e(289,"pre")(290,"code"),t(291,`<po-badge [p-icon]="true"></po-badge>
`),n()(),e(292,"p"),t(293,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(294,"a",69),t(295,"Biblioteca de \xEDcones"),n(),t(296,". conforme exemplo abaixo:"),n(),e(297,"pre")(298,"code"),t(299,`<po-badge p-icon="an an-user"></po-badge>
`),n()(),e(300,"p"),t(301,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),e(302,"em"),t(303,"Font Awesome"),n(),t(304,", da seguinte forma:"),n(),e(305,"pre")(306,"code"),t(307,`<po-badge p-icon="fa fa-podcast"></po-badge>
`),n()(),e(308,"p"),t(309,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(310,"code"),t(311,"TemplateRef"),n(),t(312,", conforme exemplo abaixo:"),n(),e(313,"pre")(314,"code"),t(315,`<po-badge [p-icon]="template"></po-badge>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()()()(),e(316,"tr",13)(317,"td",14)(318,"div",15)(319,"span",16),t(320," p-show-border"),o(321,"br"),n()()(),e(322,"td",17)(323,"code",70),t(324,"boolean"),n()(),e(325,"td",19),t(326,"-"),n(),e(327,"td",20)(328,"p"),t(329,"Exibe uma borda para o "),e(330,"code"),t(331,"po-badge"),n()(),e(332,"blockquote")(333,"p"),t(334,"Pode personalizar cor da bordar com a propriedade "),e(335,"code"),t(336,"p-color-border"),n()()()()(),e(337,"tr",13)(338,"td",14)(339,"div",15)(340,"span",16),t(341," p-size"),o(342,"br"),n()()(),e(343,"td",17)(344,"code",71),t(345,"PoBadgeSize"),n()(),e(346,"td",19)(347,"p")(348,"code"),t(349,"medium"),n()()(),e(350,"td",20)(351,"p"),t(352,"Define o tamanho do "),e(353,"code"),t(354,"po-badge"),n()(),e(355,"p"),t(356,"Valores v\xE1lidos:"),n(),e(357,"ul")(358,"li")(359,"code"),t(360,"small"),n(),t(361,": o "),e(362,"code"),t(363,"po-badge"),n(),t(364," fica do tamanho padr\xE3o, com 8px de altura.;"),n(),e(365,"li")(366,"code"),t(367,"medium"),n(),t(368,": o "),e(369,"code"),t(370,"po-badge"),n(),t(371," fica do tamanho padr\xE3o, com 16px de altura.;"),n(),e(372,"li")(373,"code"),t(374,"large"),n(),t(375,": o "),e(376,"code"),t(377,"po-badge"),n(),t(378," fica do tamanho padr\xE3o, com 24px de altura.;"),n()()()(),e(379,"tr",13)(380,"td",14)(381,"div",15)(382,"span",16),t(383," p-status"),o(384,"br"),n()()(),e(385,"td",17)(386,"code",72),t(387,"PoBadgeStatus"),n()(),e(388,"td",19),t(389,"-"),n(),e(390,"td",20)(391,"p"),t(392,"Define o estado do "),e(393,"code"),t(394,"po-badge"),n()(),e(395,"p"),t(396,"Valores v\xE1lidos:"),n(),e(397,"ul")(398,"li")(399,"code"),t(400,"positive"),n(),t(401,": Define a cor do "),e(402,"code"),t(403,"po-badge"),n(),t(404," com a cor de feedback positivo.;"),n(),e(405,"li")(406,"code"),t(407,"negative"),n(),t(408,": Define a cor do "),e(409,"code"),t(410,"po-badge"),n(),t(411," com a cor de feedback negative.;"),n(),e(412,"li")(413,"code"),t(414,"warning"),n(),t(415,": Define a cor do "),e(416,"code"),t(417,"po-badge"),n(),t(418," com a cor de feedback warning.;"),n(),e(419,"li")(420,"code"),t(421,"disabled"),n(),t(422,": Define a cor do "),e(423,"code"),t(424,"po-badge"),n(),t(425," com a cor de feedback disabled;"),n()()()(),e(426,"tr",13)(427,"td",14)(428,"div",15)(429,"span",16),t(430," p-value"),o(431,"br"),n()()(),e(432,"td",17)(433,"code",73),t(434,"number"),n()(),e(435,"td",19),t(436,"-"),n(),e(437,"td",20)(438,"p"),t(439,"N\xFAmero exibido no componente, caso o mesmo seja maior que 9 o valor exibido ser\xE1 9+."),n()()()()())},dependencies:[v],encapsulation:2})}return a})();var ce=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||a)(L(J),L(K))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Badge",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-badge-doc"),n(),e(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-badge-basic-view")(6,"sample-po-badge-labs-view")(7,"sample-po-badge-message-view"),n()()()),l&2&&(d("p-actions",i.actions),r(2),d("p-active",i.activeTab==="doc"),r(2),d("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[ne,h,f,le,se,de,me],encapsulation:2})}return a})();var _e=[{path:"",component:ce}],ge=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[O.forChild(_e),O]})}return a})();var Ye=(()=>{class a{static \u0275fac=function(l){return new(l||a)};static \u0275mod=D({type:a});static \u0275inj=T({imports:[oe,ge]})}return a})();export{Ye as DocPoBadgeModule};
