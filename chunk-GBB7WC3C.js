import{o as P,p as ge}from"./chunk-WYOAC7KN.js";import{Hb as b,Ib as S,Ja as ce,Mb as N,S as re,U as me,Ya as se,a as ie,bb as W,e as J,f as F,n as B,r as le,ub as A,w as pe,ya as de}from"./chunk-XOCFD5XY.js";import{Ba as z,Ca as f,Da as h,Ea as m,Fa as e,Ga as n,Ha as a,I,Mb as M,Mc as X,Nc as Z,O as x,Oa as q,Oc as ee,P as v,Pa as u,Pc as te,Qc as ne,Ra as O,bb as _,cb as t,cd as ae,eb as k,ed as oe,gb as C,gd as U,ha as r,hb as T,ib as y,ma as $,mb as Y,nb as K,oa as s,pa as V,rb as D,ya as j,za as G}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ue=(()=>{class o{static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-value","PO Tag"]],template:function(p,i){p&1&&a(0,"po-tag",0)},dependencies:[B],encapsulation:2})}return o})();var we=o=>({"docs-sample-code-tabs":o}),be=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag Basic"),n(),e(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-basic/sample-po-tag-basic.component.html"),n(),e(13,"pre",7),t(14,`<po-tag p-value="PO Tag"> </po-tag>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-basic/sample-po-tag-basic.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-basic',
  templateUrl: './sample-po-tag-basic.component.html',
  standalone: false
})
export class SamplePoTagBasicComponent {}
`),n()()()()(),e(21,"div",10),a(22,"sample-po-tag-basic"),n(),a(23,"hr")),p&2&&(r(5),_("po-icon "+i.sampleCodeButtonIcon),r(),k(" ",i.sampleCodeButtonLabel),r(),m("ngClass",D(4,we,i.hideSampleCodeTabs)))},dependencies:[M,P,b,S,ue],encapsulation:2})}return o})();function ke(o,c){if(o&1){let l=q();e(0,"po-select",14),y("ngModelChange",function(i){x(l);let g=O();return T(g.icon,i)||(g.icon=i),v(i)}),n()}if(o&2){let l=O();C("ngModel",l.icon),m("p-options",l.iconList)}}function De(o,c){if(o&1){let l=q();e(0,"po-switch",15),y("ngModelChange",function(i){x(l);let g=O();return T(g.icon,i)||(g.icon=i),v(i)}),n()}if(o&2){let l=O();C("ngModel",l.icon)}}var Se=(()=>{class o{color;event;icon;textColor;label;orientation;type;value;properties;propertiesOptions=[{value:"removable",label:"Removable"}];iconList=[{label:"an an-bluetooth",value:"an an-bluetooth"},{label:"an an-heart",value:"an an-heart"},{label:"an an-lightbulb",value:"an an-lightbulb"},{label:"an an-star",value:"an an-star"},{label:"an an-gear",value:"an an-gear"},{label:"an an-globe",value:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];orientationOptions=[{label:"Horizontal",value:J.Horizontal},{label:"Vertical",value:J.Vertical}];typeOptions=[{label:"None",value:void 0},{label:"Info",value:F.Info},{label:"Danger",value:F.Danger},{label:"Success",value:F.Success},{label:"Warning",value:F.Warning},{label:"Neutral",value:F.Neutral}];ngOnInit(){this.restore()}changeEvent(l){this.event=l}propertiesChange(l){let p=[...this.propertiesOptions];l.includes("removable")?(p[1]={value:"disabled",label:"Disabled",disabled:!1},this.propertiesOptions=p):this.propertiesOptions=p.filter(i=>i.value!=="disabled")}restore(){this.color=void 0,this.icon=void 0,this.label=void 0,this.orientation=void 0,this.value="PO Tag",this.type=void 0,this.event="",this.textColor=void 0,this.properties=[]}static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-labs"]],standalone:!1,decls:21,vars:22,consts:[["f","ngForm"],[3,"p-click","p-color","p-disabled","p-removable","p-icon","p-text-color","p-label","p-orientation","p-type","p-value"],[1,"po-row"],["p-label","Events",1,"po-md-6",3,"p-value"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","value","p-clean","","p-label","Value","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","color","p-clean","","p-label","Color","p-help","color-01, caption-tag-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","textColor","p-clean","","p-label","Text color","p-help","color-01, red, rgb(201, 53, 125), #753399",1,"po-md-6",3,"ngModelChange","ngModel"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-6","po-mt-2",3,"ngModelChange","p-change","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModel"],["name","orientation","p-columns","1","p-label","Orientation",1,"po-md-4",3,"ngModelChange","ngModel","p-options"],["name","type","p-columns","3","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","icon","p-label","Icon",1,"po-md-6","po-mt-2",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(p,i){if(p&1){let g=q();e(0,"po-tag",1),u("p-click",function(){return i.changeEvent("p-click")}),n(),a(1,"po-divider"),e(2,"div",2),a(3,"po-info",3),n(),a(4,"po-divider"),e(5,"form",null,0)(7,"div",2)(8,"po-input",4),y("ngModelChange",function(d){return x(g),T(i.label,d)||(i.label=d),v(d)}),n(),e(9,"po-input",5),y("ngModelChange",function(d){return x(g),T(i.value,d)||(i.value=d),v(d)}),n()(),e(10,"div",2)(11,"po-input",6),y("ngModelChange",function(d){return x(g),T(i.color,d)||(i.color=d),v(d)}),n(),e(12,"po-input",7),y("ngModelChange",function(d){return x(g),T(i.textColor,d)||(i.textColor=d),v(d)}),n(),j(13,ke,1,2,"po-select",8),e(14,"po-checkbox-group",9),y("ngModelChange",function(d){return x(g),T(i.properties,d)||(i.properties=d),v(d)}),u("p-change",function(d){return i.propertiesChange(d)}),n(),j(15,De,1,1,"po-switch",10),n(),e(16,"div",2)(17,"po-radio-group",11),y("ngModelChange",function(d){return x(g),T(i.orientation,d)||(i.orientation=d),v(d)}),n(),e(18,"po-radio-group",12),y("ngModelChange",function(d){return x(g),T(i.type,d)||(i.type=d),v(d)}),n()(),e(19,"div",2)(20,"po-button",13),u("p-click",function(){return i.restore()}),n()()()}p&2&&(m("p-color",i.color)("p-disabled",i.properties.includes("disabled"))("p-removable",i.properties.includes("removable"))("p-icon",i.icon)("p-text-color",i.textColor)("p-label",i.label)("p-orientation",i.orientation)("p-type",i.type)("p-value",i.value),r(3),m("p-value",i.event),r(5),C("ngModel",i.label),r(),C("ngModel",i.value),r(2),C("ngModel",i.color),r(),C("ngModel",i.textColor),r(),G(i.type?-1:13),r(),C("ngModel",i.properties),m("p-options",i.propertiesOptions),r(),G(i.type?15:-1),r(2),C("ngModel",i.orientation),m("p-options",i.orientationOptions),r(),C("ngModel",i.type),m("p-options",i.typeOptions))},dependencies:[ne,X,Z,te,ee,pe,ie,re,me,ce,se,de,B,W],styles:[".sample-tag-color-circle[_ngcontent-%COMP%]{border-radius:10px;display:inline-block;height:16px;margin-right:4px;vertical-align:middle;width:16px}"]})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-labs-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag Labs"),n(),e(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-labs/sample-po-tag-labs.component.html"),n(),e(13,"pre",7),t(14,`<po-tag
  [p-color]="color"
  [p-disabled]="properties.includes('disabled')"
  [p-removable]="properties.includes('removable')"
  [p-icon]="icon"
  [p-text-color]="textColor"
  [p-label]="label"
  [p-orientation]="orientation"
  [p-type]="type"
  [p-value]="value"
  (p-click)="changeEvent('p-click')"
>
</po-tag>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Events" [p-value]="event"> </po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="value" [(ngModel)]="value" p-clean p-label="Value" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-6"
      name="color"
      [(ngModel)]="color"
      p-clean
      p-label="Color"
      p-help="color-01, caption-tag-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="textColor"
      [(ngModel)]="textColor"
      p-clean
      p-label="Text color"
      p-help="color-01, red, rgb(201, 53, 125), #753399"
    >
    </po-input>

    @if (!type) {
      <po-select class="po-md-6 po-mt-2" name="icon" [(ngModel)]="icon" p-label="Icon" [p-options]="iconList">
      </po-select>
    }

    <po-checkbox-group
      class="po-md-6 po-mt-2"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
      (p-change)="propertiesChange($event)"
    >
    </po-checkbox-group>

    @if (type) {
      <po-switch class="po-md-6" name="icon" [(ngModel)]="icon" p-label="Icon"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-md-4"
      name="orientation"
      [(ngModel)]="orientation"
      p-columns="1"
      p-label="Orientation"
      [p-options]="orientationOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-6"
      name="type"
      [(ngModel)]="type"
      p-columns="3"
      p-label="Type"
      [p-options]="typeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-labs/sample-po-tag-labs.component.ts"),n(),e(19,"pre",9),t(20,`import { Component, OnInit } from '@angular/core';

import {
  PoRadioGroupOption,
  PoSelectOption,
  PoTagOrientation,
  PoTagType,
  PoCheckboxGroupOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tag-labs',
  templateUrl: './sample-po-tag-labs.component.html',
  styleUrls: ['./sample-po-tag-labs.component.css'],
  standalone: false
})
export class SamplePoTagLabsComponent implements OnInit {
  color: string;
  event: string;
  icon: boolean | string;
  textColor: string;
  label: string;
  orientation: PoTagOrientation;
  type: PoTagType;
  value: string;
  properties: Array<string>;

  propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'removable', label: 'Removable' }];

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

  public readonly orientationOptions: Array<PoRadioGroupOption> = [
    { label: 'Horizontal', value: PoTagOrientation.Horizontal },
    { label: 'Vertical', value: PoTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<PoRadioGroupOption> = [
    { label: 'None', value: undefined },
    { label: 'Info', value: PoTagType.Info },
    { label: 'Danger', value: PoTagType.Danger },
    { label: 'Success', value: PoTagType.Success },
    { label: 'Warning', value: PoTagType.Warning },
    { label: 'Neutral', value: PoTagType.Neutral }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  propertiesChange(event) {
    const value = [...this.propertiesOptions];

    if (event.includes('removable')) {
      value[1] = { value: 'disabled', label: 'Disabled', disabled: false };
      this.propertiesOptions = value;
    } else {
      this.propertiesOptions = value.filter(option => option.value !== 'disabled');
    }
  }

  restore() {
    this.color = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'PO Tag';
    this.type = undefined;
    this.event = '';
    this.textColor = undefined;
    this.properties = [];
  }
}
`),n()()(),e(21,"po-tab",10)(22,"div")(23,"label",6),t(24,"sample-po-tag-labs/sample-po-tag-labs.component.css"),n(),e(25,"pre",11),t(26,`.sample-tag-color-circle {
  border-radius: 10px;
  display: inline-block;
  height: 16px;
  margin-right: 4px;
  vertical-align: middle;
  width: 16px;
}
`),n()()()()(),e(27,"div",12),a(28,"sample-po-tag-labs"),n(),a(29,"hr")),p&2&&(r(5),_("po-icon "+i.sampleCodeButtonIcon),r(),k(" ",i.sampleCodeButtonLabel),r(),m("ngClass",D(4,Be,i.hideSampleCodeTabs)))},dependencies:[M,P,b,S,Se],encapsulation:2})}return o})();function Fe(o,c){if(o&1&&a(0,"po-tag",12),o&2){let l=c.$implicit;m("p-label",l.label)("p-type",l.type)("p-value",l.value)}}function Ae(o,c){if(o&1&&(e(0,"po-widget",15)(1,"div",3),a(2,"po-info",16)(3,"po-tag",17),n()()),o&2){let l=c.$implicit;r(2),m("p-label",l.label)("p-value",l.value),r(),m("p-type",l.type)("p-value",l.text)}}function Oe(o,c){if(o&1&&(e(0,"po-tab",14),f(1,Ae,4,4,"po-widget",15,z),n()),o&2){let l=c.$implicit;m("p-label",Y(l.month)),r(),h(l.details)}}var xe=(()=>{class o{investiments=[{label:"Stocks",type:"danger",value:"Low -3.50%"},{label:"Treasury bills",type:"success",value:"Growing +2.25%"},{label:"Real estate",type:"warning",value:"Risk -0.02%"},{label:"Mutual fund",type:"success",value:"Growing +3.00%"}];items=[{month:"June",details:[{label:"Automatic Payment",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Credit Card",value:"$ 230",type:"danger",text:"Expense"},{label:"Personal Loan",value:"$ 150",type:"warning",text:"Future"}]},{month:"July",details:[{label:"Deposit",value:"$ 500",type:"success",text:"Income"},{label:"Car insurance",value:"$ 40",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 200",type:"success",text:"Income"},{label:"Bank statement",value:"$ 5",type:"info",text:"Document"},{label:"Deposit",value:"$ 70",type:"success",text:"Income"}]},{month:"August",details:[{label:"Student Loan",value:"$ 250",type:"danger",text:"Expense"},{label:"Deposit",value:"$ 50",type:"success",text:"Income"},{label:"Bank receipt",value:"$ 10",type:"info",text:"Document"},{label:"Automatic Payment",value:"$ 230",type:"warning",text:"Future"},{label:"Credit Card",value:"$ 150",type:"warning",text:"Future"}]}];advantages=[{title:"Platinum Card:",description:"best card in the market. You earn points and have concierge service and cultural advice."},{title:"Exclusive agencies:",description:"environments designed to offer comfort and privacy."},{title:"Unique experience",description:"with exclusivity background in travel, culture, entertainment and much more."},{title:"Progressive discounts",description:"on service packages, according to the volume of investments."},{title:"Free tax:",description:"withdrawals and Transfers Between Unlimited Accounts."}];userData={name:"Natasha Romanova",email:"natasha.romanova@po-ui.com.br",photo:"avatar2.png"};static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-bank-account"]],standalone:!1,decls:20,vars:4,consts:[["p-title","Bank Statement"],[1,"po-mt-1","po-lg-7"],["p-title","User information",1,"po-md-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],[1,"po-row"],[1,"po-md-5","po-lg-4"],["p-size","xl",3,"p-src"],[1,"po-md-7","po-lg-8"],[1,"po-mb-2"],["p-label","Name",3,"p-value"],["p-value","Premium Account"],["p-label","Email",1,"po-mt-5",3,"p-value"],["p-title","My Investiments",1,"po-md-12","po-sm-mt-1","po-mt-1","po-lg-mt-1"],[1,"po-md-6","po-lg-3",3,"p-label","p-type","p-value"],["p-title","Last three month operations",1,"po-mt-1","po-lg-5"],["p-active","",3,"p-label"],[1,"po-lg-12","po-sm-mb-1","po-mb-1","po-lg-mb-1"],["p-label-size","6","p-orientation","horizontal",1,"po-lg-9","po-md-8",3,"p-label","p-value"],["p-icon","","p-orientation","horizontal",1,"po-lg-3","po-md-4",3,"p-type","p-value"]],template:function(p,i){p&1&&(e(0,"po-page-default",0)(1,"div",1)(2,"po-widget",2)(3,"div",3)(4,"div",4),a(5,"po-avatar",5),n(),e(6,"div",6)(7,"div",7),a(8,"po-info",8)(9,"po-tag",9),n(),e(10,"div",7),a(11,"po-info",10),n()()()(),e(12,"po-widget",11)(13,"div",3),f(14,Fe,1,3,"po-tag",12,z),n()()(),e(16,"po-widget",13)(17,"po-tabs"),f(18,Oe,3,2,"po-tab",14,z),n()()()),p&2&&(r(5),m("p-src",K("assets/graphics/",i.userData.photo)),r(3),m("p-value",i.userData.name),r(3),m("p-value",i.userData.email),r(3),h(i.investiments),r(4),h(i.items))},dependencies:[le,B,W,A,b,S,N],encapsulation:2})}return o})();var Ve=o=>({"docs-sample-code-tabs":o}),ve=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-bank-account-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag - Bank Account"),n(),e(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.html"),n(),e(13,"pre",7),t(14,`<po-page-default p-title="Bank Statement">
  <div class="po-mt-1 po-lg-7">
    <po-widget class="po-md-12 po-sm-mb-1 po-mb-1 po-lg-mb-1" p-title="User information">
      <div class="po-row">
        <div class="po-md-5 po-lg-4">
          <po-avatar p-size="xl" p-src="assets/graphics/{ { userData.photo }}"></po-avatar>
        </div>
        <div class="po-md-7 po-lg-8">
          <div class="po-mb-2">
            <po-info p-label="Name" [p-value]="userData.name"> </po-info>
            <po-tag p-value="Premium Account"> </po-tag>
          </div>
          <div class="po-mb-2">
            <po-info class="po-mt-5" p-label="Email" [p-value]="userData.email"> </po-info>
          </div>
        </div>
      </div>
    </po-widget>

    <po-widget class="po-md-12 po-sm-mt-1 po-mt-1 po-lg-mt-1" p-title="My Investiments">
      <div class="po-row">
        @for (investiment of investiments; track investiment) {
          <po-tag
            class="po-md-6 po-lg-3"
            [p-label]="investiment.label"
            [p-type]="investiment.type"
            [p-value]="investiment.value"
          >
          </po-tag>
        }
      </div>
    </po-widget>
  </div>
  <po-widget p-title="Last three month operations" class="po-mt-1 po-lg-5">
    <po-tabs>
      @for (item of items; track item) {
        <po-tab p-active p-label="{ { item.month }}">
          @for (item of item.details; track item) {
            <po-widget class="po-lg-12 po-sm-mb-1 po-mb-1 po-lg-mb-1">
              <div class="po-row">
                <po-info
                  class="po-lg-9 po-md-8"
                  p-label-size="6"
                  p-orientation="horizontal"
                  [p-label]="item.label"
                  [p-value]="item.value"
                >
                </po-info>
                <po-tag
                  class="po-lg-3 po-md-4"
                  p-icon
                  p-orientation="horizontal"
                  [p-type]="item.type"
                  [p-value]="item.text"
                >
                </po-tag>
              </div>
            </po-widget>
          }
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-bank-account/sample-po-tag-bank-account.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-bank-account',
  templateUrl: './sample-po-tag-bank-account.component.html',
  standalone: false
})
export class SamplePoTagBankAccountComponent {
  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    {
      month: 'June',
      details: [
        { label: 'Automatic Payment', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Credit Card', value: '$ 230', type: 'danger', text: 'Expense' },
        { label: 'Personal Loan', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    },
    {
      month: 'July',
      details: [
        { label: 'Deposit', value: '$ 500', type: 'success', text: 'Income' },
        { label: 'Car insurance', value: '$ 40', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 200', type: 'success', text: 'Income' },
        { label: 'Bank statement', value: '$ 5', type: 'info', text: 'Document' },
        { label: 'Deposit', value: '$ 70', type: 'success', text: 'Income' }
      ]
    },
    {
      month: 'August',
      details: [
        { label: 'Student Loan', value: '$ 250', type: 'danger', text: 'Expense' },
        { label: 'Deposit', value: '$ 50', type: 'success', text: 'Income' },
        { label: 'Bank receipt', value: '$ 10', type: 'info', text: 'Document' },
        { label: 'Automatic Payment', value: '$ 230', type: 'warning', text: 'Future' },
        { label: 'Credit Card', value: '$ 150', type: 'warning', text: 'Future' }
      ]
    }
  ];

  advantages = [
    {
      title: 'Platinum Card:',
      description: 'best card in the market. You earn points and have concierge service and cultural advice.'
    },
    { title: 'Exclusive agencies:', description: 'environments designed to offer comfort and privacy.' },
    {
      title: 'Unique experience',
      description: 'with exclusivity background in travel, culture, entertainment and much more.'
    },
    { title: 'Progressive discounts', description: 'on service packages, according to the volume of investments.' },
    { title: 'Free tax:', description: 'withdrawals and Transfers Between Unlimited Accounts.' }
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@po-ui.com.br',
    'photo': 'avatar2.png'
  };
}
`),n()()()()(),e(21,"div",10),a(22,"sample-po-tag-bank-account"),n(),a(23,"hr")),p&2&&(r(5),_("po-icon "+i.sampleCodeButtonIcon),r(),k(" ",i.sampleCodeButtonLabel),r(),m("ngClass",D(4,Ve,i.hideSampleCodeTabs)))},dependencies:[M,P,b,S,xe],encapsulation:2})}return o})();var R=(o,c)=>c.color,qe=(o,c)=>c.name;function We(o,c){if(o&1&&a(0,"po-tag",3),o&2){let l=c.$implicit;m("p-color",l.color)("p-value",l.label)}}function Ne(o,c){if(o&1&&a(0,"po-tag",5),o&2){let l=c.$implicit;m("p-color",l.color)("p-label",l.label)("p-value",l.value)}}function He(o,c){if(o&1&&a(0,"po-tag",7),o&2){let l=c.$implicit;m("p-color",l.color)("p-icon",l.icon)("p-value",l.label)}}function Re(o,c){if(o&1&&a(0,"po-tag",10),o&2){let l=c.$implicit;m("p-color",l.color)("p-value",l.label)}}function $e(o,c){if(o&1&&(e(0,"po-tab",9)(1,"div",2),f(2,Re,1,2,"po-tag",10,R),n()()),o&2){let l=c.$implicit;m("p-label",l.name),r(2),h(l.tags)}}var fe=(()=>{class o{captionTags=Array.from({length:35},(l,p)=>{let i=String(p+1).padStart(2,"0");return{label:`Caption Tag ${i}`,color:`caption-tag-${i}`}});statusItems=[{label:"Ativo",value:"Em operacao",color:"caption-tag-01"},{label:"Pendente",value:"Aguardando aprovacao",color:"caption-tag-06"},{label:"Em analise",value:"Verificacao interna",color:"caption-tag-11"},{label:"Concluido",value:"Finalizado com sucesso",color:"caption-tag-16"},{label:"Cancelado",value:"Operacao cancelada",color:"caption-tag-21"},{label:"Expirado",value:"Prazo excedido",color:"caption-tag-26"},{label:"Bloqueado",value:"Acesso restrito",color:"caption-tag-31"}];categories=[{label:"Financeiro",color:"caption-tag-03",icon:"an an-currency-circle-dollar"},{label:"Recursos Humanos",color:"caption-tag-08",icon:"an an-users"},{label:"Logistica",color:"caption-tag-13",icon:"an an-truck"},{label:"Vendas",color:"caption-tag-18",icon:"an an-shopping-cart-simple"},{label:"Suporte",color:"caption-tag-23",icon:"an an-headset"},{label:"Marketing",color:"caption-tag-28",icon:"an an-megaphone-simple"},{label:"TI",color:"caption-tag-33",icon:"an an-desktop-tower"}];families=[{name:"Familia 01-05",tags:[{label:"caption-tag-01",color:"caption-tag-01"},{label:"caption-tag-02",color:"caption-tag-02"},{label:"caption-tag-03",color:"caption-tag-03"},{label:"caption-tag-04",color:"caption-tag-04"},{label:"caption-tag-05",color:"caption-tag-05"}]},{name:"Familia 06-10",tags:[{label:"caption-tag-06",color:"caption-tag-06"},{label:"caption-tag-07",color:"caption-tag-07"},{label:"caption-tag-08",color:"caption-tag-08"},{label:"caption-tag-09",color:"caption-tag-09"},{label:"caption-tag-10",color:"caption-tag-10"}]},{name:"Familia 11-15",tags:[{label:"caption-tag-11",color:"caption-tag-11"},{label:"caption-tag-12",color:"caption-tag-12"},{label:"caption-tag-13",color:"caption-tag-13"},{label:"caption-tag-14",color:"caption-tag-14"},{label:"caption-tag-15",color:"caption-tag-15"}]},{name:"Familia 16-20",tags:[{label:"caption-tag-16",color:"caption-tag-16"},{label:"caption-tag-17",color:"caption-tag-17"},{label:"caption-tag-18",color:"caption-tag-18"},{label:"caption-tag-19",color:"caption-tag-19"},{label:"caption-tag-20",color:"caption-tag-20"}]},{name:"Familia 21-25",tags:[{label:"caption-tag-21",color:"caption-tag-21"},{label:"caption-tag-22",color:"caption-tag-22"},{label:"caption-tag-23",color:"caption-tag-23"},{label:"caption-tag-24",color:"caption-tag-24"},{label:"caption-tag-25",color:"caption-tag-25"}]},{name:"Familia 26-30",tags:[{label:"caption-tag-26",color:"caption-tag-26"},{label:"caption-tag-27",color:"caption-tag-27"},{label:"caption-tag-28",color:"caption-tag-28"},{label:"caption-tag-29",color:"caption-tag-29"},{label:"caption-tag-30",color:"caption-tag-30"}]},{name:"Familia 31-35",tags:[{label:"caption-tag-31",color:"caption-tag-31"},{label:"caption-tag-32",color:"caption-tag-32"},{label:"caption-tag-33",color:"caption-tag-33"},{label:"caption-tag-34",color:"caption-tag-34"},{label:"caption-tag-35",color:"caption-tag-35"}]}];static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-caption-tag-colors"]],standalone:!1,decls:17,vars:0,consts:[["p-title","Caption Tag Colors"],["p-title","Paleta completa - 35 cores",1,"po-md-12","po-mb-1"],[1,"po-row"],[1,"po-md-3","po-lg-2","po-mb-1",3,"p-color","p-value"],["p-title","Status de processos",1,"po-md-12","po-mb-1"],["p-orientation","horizontal",1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-label","p-value"],["p-title","Categorias com icones",1,"po-md-12"],[1,"po-md-4","po-lg-3","po-mb-1",3,"p-color","p-icon","p-value"],["p-title","Familias de cores",1,"po-md-12","po-mb-1"],[3,"p-label"],[1,"po-md-4","po-lg-2","po-mb-1",3,"p-color","p-value"]],template:function(p,i){p&1&&(e(0,"po-page-default",0)(1,"po-widget",1)(2,"div",2),f(3,We,1,2,"po-tag",3,R),n()(),e(5,"po-widget",4)(6,"div",2),f(7,Ne,1,3,"po-tag",5,R),n()(),e(9,"po-widget",6)(10,"div",2),f(11,He,1,3,"po-tag",7,R),n()(),e(13,"po-widget",8)(14,"po-tabs"),f(15,$e,4,1,"po-tab",9,qe),n()()()),p&2&&(r(3),h(i.captionTags),r(4),h(i.statusItems),r(4),h(i.categories),r(4),h(i.families))},dependencies:[B,A,b,S,N],encapsulation:2})}return o})();var Ge=o=>({"docs-sample-code-tabs":o}),he=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-caption-tag-colors-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(p,i){p&1&&(a(0,"br"),e(1,"blockquote",0)(2,"label",1),t(3,"PO Tag - Caption Tag Colors"),n(),e(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),t(6),n()(),e(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.html"),n(),e(13,"pre",7),t(14,`<po-page-default p-title="Caption Tag Colors">
  <po-widget class="po-md-12 po-mb-1" p-title="Paleta completa - 35 cores">
    <div class="po-row">
      @for (tag of captionTags; track tag.color) {
        <po-tag class="po-md-3 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Status de processos">
    <div class="po-row">
      @for (item of statusItems; track item.color) {
        <po-tag
          class="po-md-4 po-lg-3 po-mb-1"
          [p-color]="item.color"
          [p-label]="item.label"
          [p-value]="item.value"
          p-orientation="horizontal"
        >
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12" p-title="Categorias com icones">
    <div class="po-row">
      @for (cat of categories; track cat.color) {
        <po-tag class="po-md-4 po-lg-3 po-mb-1" [p-color]="cat.color" [p-icon]="cat.icon" [p-value]="cat.label">
        </po-tag>
      }
    </div>
  </po-widget>

  <po-widget class="po-md-12 po-mb-1" p-title="Familias de cores">
    <po-tabs>
      @for (family of families; track family.name) {
        <po-tab [p-label]="family.name">
          <div class="po-row">
            @for (tag of family.tags; track tag.color) {
              <po-tag class="po-md-4 po-lg-2 po-mb-1" [p-color]="tag.color" [p-value]="tag.label"> </po-tag>
            }
          </div>
        </po-tab>
      }
    </po-tabs>
  </po-widget>
</po-page-default>
`),n()()(),e(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-tag-caption-tag-colors/sample-po-tag-caption-tag-colors.component.ts"),n(),e(19,"pre",9),t(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-tag-caption-tag-colors',
  templateUrl: './sample-po-tag-caption-tag-colors.component.html',
  standalone: false
})
export class SamplePoTagCaptionTagColorsComponent {
  captionTags = Array.from({ length: 35 }, (_, i) => {
    const index = String(i + 1).padStart(2, '0');
    return { label: \`Caption Tag \${index}\`, color: \`caption-tag-\${index}\` };
  });

  statusItems = [
    { label: 'Ativo', value: 'Em operacao', color: 'caption-tag-01' },
    { label: 'Pendente', value: 'Aguardando aprovacao', color: 'caption-tag-06' },
    { label: 'Em analise', value: 'Verificacao interna', color: 'caption-tag-11' },
    { label: 'Concluido', value: 'Finalizado com sucesso', color: 'caption-tag-16' },
    { label: 'Cancelado', value: 'Operacao cancelada', color: 'caption-tag-21' },
    { label: 'Expirado', value: 'Prazo excedido', color: 'caption-tag-26' },
    { label: 'Bloqueado', value: 'Acesso restrito', color: 'caption-tag-31' }
  ];

  categories = [
    { label: 'Financeiro', color: 'caption-tag-03', icon: 'an an-currency-circle-dollar' },
    { label: 'Recursos Humanos', color: 'caption-tag-08', icon: 'an an-users' },
    { label: 'Logistica', color: 'caption-tag-13', icon: 'an an-truck' },
    { label: 'Vendas', color: 'caption-tag-18', icon: 'an an-shopping-cart-simple' },
    { label: 'Suporte', color: 'caption-tag-23', icon: 'an an-headset' },
    { label: 'Marketing', color: 'caption-tag-28', icon: 'an an-megaphone-simple' },
    { label: 'TI', color: 'caption-tag-33', icon: 'an an-desktop-tower' }
  ];

  families = [
    {
      name: 'Familia 01-05',
      tags: [
        { label: 'caption-tag-01', color: 'caption-tag-01' },
        { label: 'caption-tag-02', color: 'caption-tag-02' },
        { label: 'caption-tag-03', color: 'caption-tag-03' },
        { label: 'caption-tag-04', color: 'caption-tag-04' },
        { label: 'caption-tag-05', color: 'caption-tag-05' }
      ]
    },
    {
      name: 'Familia 06-10',
      tags: [
        { label: 'caption-tag-06', color: 'caption-tag-06' },
        { label: 'caption-tag-07', color: 'caption-tag-07' },
        { label: 'caption-tag-08', color: 'caption-tag-08' },
        { label: 'caption-tag-09', color: 'caption-tag-09' },
        { label: 'caption-tag-10', color: 'caption-tag-10' }
      ]
    },
    {
      name: 'Familia 11-15',
      tags: [
        { label: 'caption-tag-11', color: 'caption-tag-11' },
        { label: 'caption-tag-12', color: 'caption-tag-12' },
        { label: 'caption-tag-13', color: 'caption-tag-13' },
        { label: 'caption-tag-14', color: 'caption-tag-14' },
        { label: 'caption-tag-15', color: 'caption-tag-15' }
      ]
    },
    {
      name: 'Familia 16-20',
      tags: [
        { label: 'caption-tag-16', color: 'caption-tag-16' },
        { label: 'caption-tag-17', color: 'caption-tag-17' },
        { label: 'caption-tag-18', color: 'caption-tag-18' },
        { label: 'caption-tag-19', color: 'caption-tag-19' },
        { label: 'caption-tag-20', color: 'caption-tag-20' }
      ]
    },
    {
      name: 'Familia 21-25',
      tags: [
        { label: 'caption-tag-21', color: 'caption-tag-21' },
        { label: 'caption-tag-22', color: 'caption-tag-22' },
        { label: 'caption-tag-23', color: 'caption-tag-23' },
        { label: 'caption-tag-24', color: 'caption-tag-24' },
        { label: 'caption-tag-25', color: 'caption-tag-25' }
      ]
    },
    {
      name: 'Familia 26-30',
      tags: [
        { label: 'caption-tag-26', color: 'caption-tag-26' },
        { label: 'caption-tag-27', color: 'caption-tag-27' },
        { label: 'caption-tag-28', color: 'caption-tag-28' },
        { label: 'caption-tag-29', color: 'caption-tag-29' },
        { label: 'caption-tag-30', color: 'caption-tag-30' }
      ]
    },
    {
      name: 'Familia 31-35',
      tags: [
        { label: 'caption-tag-31', color: 'caption-tag-31' },
        { label: 'caption-tag-32', color: 'caption-tag-32' },
        { label: 'caption-tag-33', color: 'caption-tag-33' },
        { label: 'caption-tag-34', color: 'caption-tag-34' },
        { label: 'caption-tag-35', color: 'caption-tag-35' }
      ]
    }
  ];
}
`),n()()()()(),e(21,"div",10),a(22,"sample-po-tag-caption-tag-colors"),n(),a(23,"hr")),p&2&&(r(5),_("po-icon "+i.sampleCodeButtonIcon),r(),k(" ",i.sampleCodeButtonLabel),r(),m("ngClass",D(4,Ge,i.hideSampleCodeTabs)))},dependencies:[M,P,b,S,fe],encapsulation:2})}return o})();var Ce=(()=>{class o{static \u0275fac=function(p){return new(p||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-tag-doc"]],standalone:!1,decls:1168,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoTagLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoTagOrientation"],["pan","",1,"docs-api-property-type","PoTagType"],[1,"docs-api-h4","docs-api-class-name"]],template:function(p,i){p&1&&(e(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoTagModule } from '@po-ui/ng-components';"),n()(),e(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente "),e(7,"code"),t(8,"po-tag"),n(),t(9,"."),n()(),e(10,"h3",3),t(11,"Componente"),n(),e(12,"h4",4)(13,"code",5),t(14,"PoTagComponent"),n()(),e(15,"div",2)(16,"p"),t(17,`Este componente permite exibir um valor em forma de um marcador colorido, sendo poss\xEDvel definir uma legenda e realizar customiza\xE7\xF5es
na cor, iconografia e tipo.`),n(),e(18,"p"),t(19,"Al\xE9m disso, \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada tanto ao "),e(20,"em"),t(21,"click"),n(),t(22," quanto atrav\xE9s das teclas "),e(23,"em"),t(24,"enter/space"),n(),t(25,` enquanto navega
utilizando a tecla `),e(26,"em"),t(27,"tab"),n(),t(28,"."),n(),e(29,"p"),t(30,"Seu uso \xE9 recomendado para informa\xE7\xF5es que necessitem de destaque em forma de marca\xE7\xE3o."),n(),e(31,"h4"),t(32,"Tokens customiz\xE1veis"),n(),e(33,"p"),t(34,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),e(35,"blockquote")(36,"p"),t(37,"Para maiores informa\xE7\xF5es, acesse o guia "),e(38,"a",6),t(39,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),t(40,"."),n()(),e(41,"table")(42,"thead")(43,"tr")(44,"th"),t(45,"Propriedade"),n(),e(46,"th"),t(47,"Descri\xE7\xE3o"),n(),e(48,"th"),t(49,"Valor Padr\xE3o"),n()()(),e(50,"tbody")(51,"tr")(52,"td")(53,"strong"),t(54,"Default Values"),n()(),a(55,"td")(56,"td"),n(),e(57,"tr")(58,"td")(59,"code"),t(60,"--font-family"),n()(),e(61,"td"),t(62,"Fam\xEDlia tipogr\xE1fica usada"),n(),e(63,"td")(64,"code"),t(65,"var(--font-family-theme)"),n()()(),e(66,"tr")(67,"td")(68,"code"),t(69,"--font-size"),n()(),e(70,"td"),t(71,"Tamanho da fonte"),n(),e(72,"td")(73,"code"),t(74,"var(--font-size-sm)"),n()()(),e(75,"tr")(76,"td")(77,"code"),t(78,"--line-height"),n()(),e(79,"td"),t(80,"Tamanho da label"),n(),e(81,"td")(82,"code"),t(83,"var(---line-height-sm)"),n()()(),e(84,"tr")(85,"td")(86,"code"),t(87,"--border-radius"),n()(),e(88,"td"),t(89,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),n(),e(90,"td")(91,"code"),t(92,"var(--border-radius-pill)"),n()()(),e(93,"tr")(94,"td")(95,"code"),t(96,"--gap"),n()(),e(97,"td"),t(98,"Espa\xE7amento entre o label e o value"),n(),e(99,"td")(100,"code"),t(101,"var(--spacing-xs)"),n()()(),e(102,"tr")(103,"td")(104,"strong"),t(105,"Neutral"),n()(),a(106,"td")(107,"td"),n(),e(108,"tr")(109,"td")(110,"code"),t(111,"--color-neutral"),n()(),e(112,"td"),t(113,"Cor principal no estado neutral"),n(),e(114,"td")(115,"code"),t(116,"var(--color-neutral-light-10)"),n()()(),e(117,"tr")(118,"td")(119,"code"),t(120,"--text-color-positive"),n()(),e(121,"td"),t(122,"Cor do texto no estado neutral"),n(),e(123,"td")(124,"code"),t(125,"var(--color-neutral-dark-80)"),n()()(),e(126,"tr")(127,"td")(128,"strong"),t(129,"Positive"),n()(),a(130,"td")(131,"td"),n(),e(132,"tr")(133,"td")(134,"code"),t(135,"--color-positive"),n()(),e(136,"td"),t(137,"Cor principal no estado positive"),n(),e(138,"td")(139,"code"),t(140,"var(--color-feedback-positive-lightest)"),n()()(),e(141,"tr")(142,"td")(143,"code"),t(144,"--text-color-positive"),n()(),e(145,"td"),t(146,"Cor do texto no estado positive"),n(),e(147,"td")(148,"code"),t(149,"var(--color-feedback-positive-dark)"),n()()(),e(150,"tr")(151,"td")(152,"strong"),t(153,"Negative"),n()(),a(154,"td")(155,"td"),n(),e(156,"tr")(157,"td")(158,"code"),t(159,"--color-negative"),n()(),e(160,"td"),t(161,"Cor principal no estado danger"),n(),e(162,"td")(163,"code"),t(164,"var(--color-feedback-negative-lightest)"),n()()(),e(165,"tr")(166,"td")(167,"code"),t(168,"--text-color-negative"),n()(),e(169,"td"),t(170,"Cor do texto no estado danger"),n(),e(171,"td")(172,"code"),t(173,"var(--color-feedback-negative-darker)"),n()()(),e(174,"tr")(175,"td")(176,"strong"),t(177,"Warning"),n()(),a(178,"td")(179,"td"),n(),e(180,"tr")(181,"td")(182,"code"),t(183,"--color-tag-warning"),n()(),e(184,"td"),t(185,"Cor principal no estado warning"),n(),e(186,"td")(187,"code"),t(188,"var(--color-feedback-warning-lightest)"),n()()(),e(189,"tr")(190,"td")(191,"code"),t(192,"--text-color-warning"),n()(),e(193,"td"),t(194,"Cor do texto no estado warning"),n(),e(195,"td")(196,"code"),t(197,"var(--color-feedback-warning-darkest)"),n()()(),e(198,"tr")(199,"td")(200,"strong"),t(201,"Info"),n()(),a(202,"td")(203,"td"),n(),e(204,"tr")(205,"td")(206,"code"),t(207,"--color-info"),n()(),e(208,"td"),t(209,"Cor principal no estado info"),n(),e(210,"td")(211,"code"),t(212,"var(--color-feedback-info-lightest)"),n()()(),e(213,"tr")(214,"td")(215,"code"),t(216,"--text-color-info"),n()(),e(217,"td"),t(218,"Cor do texto no estado info"),n(),e(219,"td")(220,"code"),t(221,"var(--color-feedback-info-dark)"),n()()(),e(222,"tr")(223,"td")(224,"strong"),t(225,"Removable"),n()(),a(226,"td")(227,"td"),n(),e(228,"tr")(229,"td")(230,"code"),t(231,"--color"),n()(),e(232,"td"),t(233,"Cor principal quando removable"),n(),e(234,"td")(235,"code"),t(236,"var(--color-brand-01-lightest)"),n()()(),e(237,"tr")(238,"td")(239,"code"),t(240,"--border-color"),n()(),e(241,"td"),t(242,"Cor de borda quando removable \xA0"),n(),e(243,"td")(244,"code"),t(245,"var(--color-brand-01-lighter)"),n()()(),e(246,"tr")(247,"td")(248,"code"),t(249,"--color-icon"),n()(),e(250,"td"),t(251,"Cor do \xEDcone quando removable \xA0"),n(),e(252,"td")(253,"code"),t(254,"var(--color-action-default)"),n()()(),e(255,"tr")(256,"td")(257,"code"),t(258,"--text-color"),n()(),e(259,"td"),t(260,"Cor do texto quando removable \xA0"),n(),e(261,"td")(262,"code"),t(263,"var(--color-neutral-dark-80)"),n()()(),e(264,"tr")(265,"td")(266,"code"),t(267,"--color-hover"),n()(),e(268,"td"),t(269,"Cor do hover no estado removable \xA0"),n(),e(270,"td")(271,"code"),t(272,"var(--color-brand-01-lighter)"),n()()(),e(273,"tr")(274,"td")(275,"strong"),t(276,"Focused"),n()(),a(277,"td")(278,"td"),n(),e(279,"tr")(280,"td")(281,"code"),t(282,"--outline-color-focused"),n()(),e(283,"td"),t(284,"Cor do outline do estado de focus"),n(),e(285,"td")(286,"code"),t(287,"var(--color-action-focus)"),n()()(),e(288,"tr")(289,"td")(290,"strong"),t(291,"Disabled"),n()(),a(292,"td")(293,"td"),n(),e(294,"tr")(295,"td")(296,"code"),t(297,"--color-disabled"),n()(),e(298,"td"),t(299,"Cor principal no estado disabled"),n(),e(300,"td")(301,"code"),t(302,"var(--color-neutral-light-20)"),n()()(),e(303,"tr")(304,"td")(305,"code"),t(306,"--border-color-disabled"),n()(),e(307,"td"),t(308,"Cor da borda no estado disabled \xA0"),n(),e(309,"td")(310,"code"),t(311,"var(--color-action-disabled)"),n()()(),e(312,"tr")(313,"td")(314,"code"),t(315,"--color-icon-disabled"),n()(),e(316,"td"),t(317,"Cor do icone no estado disabled \xA0"),n(),e(318,"td")(319,"code"),t(320,"var(--color-action-disabled)"),n()()(),e(321,"tr")(322,"td")(323,"code"),t(324,"--text-color-disabled"),n()(),e(325,"td"),t(326,"Cor do texto no estado disabled \xA0"),n(),e(327,"td")(328,"code"),t(329,"var(--color-neutral-mid-60)"),n()()()()()(),e(330,"div",7)(331,"h4",8),t(332,"Seletor"),n(),e(333,"pre",9),t(334,`<po-tag
    (p-click)="EventEmitter"
    p-color="string"
    p-disabled="boolean"
    p-icon="string | boolean | TemplateRef<void>"
    p-label="string"
    p-literals="PoTagLiterals"
    p-orientation="PoTagOrientation"
    p-removable="boolean"
    (p-close)="EventEmitter"
    p-text-color="string"
    p-type="PoTagType"
    p-value="string" >
</po-tag>
`),n()(),e(335,"h4",10),t(336,"Propriedades"),n(),e(337,"table",11)(338,"tr",12)(339,"th",13),t(340,"Nome"),n(),e(341,"th",13),t(342,"Tipo"),n(),e(343,"th",13),t(344,"Padr\xE3o"),n(),e(345,"th",13),t(346,"Descri\xE7\xE3o"),n()(),e(347,"tr",14)(348,"td",15)(349,"div",16)(350,"span",17),t(351," (p-click)"),a(352,"br"),n()()(),e(353,"td",18)(354,"code",19),t(355,"EventEmitter"),n()(),e(356,"td",20),t(357,"-"),n(),e(358,"td",21)(359,"em")(360,"strong"),t(361,"(opcional)"),n()(),e(362,"p"),t(363,"A\xE7\xE3o que ser\xE1 executada ao clicar sobre o "),e(364,"code"),t(365,"po-tag"),n(),t(366," e que receber\xE1 como par\xE2metro um objeto contendo o seu valor e tipo."),n(),e(367,"p"),t(368,"O evento de click s\xF3 funciona se a tag n\xE3o for remov\xEDvel."),n()()(),e(369,"tr",14)(370,"td",15)(371,"div",22)(372,"span",23),t(373," p-color"),a(374,"br"),n()()(),e(375,"td",18)(376,"code",24),t(377,"string"),n()(),e(378,"td",20),t(379,"-"),n(),e(380,"td",21)(381,"em")(382,"strong"),t(383,"(opcional)"),n()(),e(384,"p"),t(385,"Determina a cor da tag. As maneiras de customizar as cores s\xE3o:"),n(),e(386,"ul")(387,"li"),t(388,"Hexadeximal, por exemplo "),e(389,"code"),t(390,"#c64840"),n(),t(391,";"),n(),e(392,"li"),t(393,"RGB, como "),e(394,"code"),t(395,"rgb(0, 0, 165)"),n(),t(396,";"),n(),e(397,"li"),t(398,"O nome da cor, por exemplo "),e(399,"code"),t(400,"blue"),n(),t(401,";"),n(),e(402,"li"),t(403,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),e(404,"ul")(405,"li"),a(406,"span",25),e(407,"code"),t(408,"color-01"),n()(),e(409,"li"),a(410,"span",26),e(411,"code"),t(412,"color-02"),n()(),e(413,"li"),a(414,"span",27),e(415,"code"),t(416,"color-03"),n()(),e(417,"li"),a(418,"span",28),e(419,"code"),t(420,"color-04"),n()(),e(421,"li"),a(422,"span",29),e(423,"code"),t(424,"color-05"),n()(),e(425,"li"),a(426,"span",30),e(427,"code"),t(428,"color-06"),n()(),e(429,"li"),a(430,"span",31),e(431,"code"),t(432,"color-07"),n()(),e(433,"li"),a(434,"span",32),e(435,"code"),t(436,"color-08"),n()(),e(437,"li"),a(438,"span",33),e(439,"code"),t(440,"color-09"),n()(),e(441,"li"),a(442,"span",34),e(443,"code"),t(444,"color-10"),n()(),e(445,"li"),a(446,"span",35),e(447,"code"),t(448,"color-11"),n()(),e(449,"li"),a(450,"span",36),e(451,"code"),t(452,"color-12"),n()()()()(),e(453,"blockquote")(454,"p"),t(455,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),e(456,"strong"),t(457,"Caption Tag Colors"),n(),t(458,":"),n()(),e(459,"ul")(460,"li"),a(461,"span",37),e(462,"code"),t(463,"caption-tag-01"),n(),a(464,"span",38),e(465,"code"),t(466,"caption-tag-02"),n(),a(467,"span",39),e(468,"code"),t(469,"caption-tag-03"),n(),a(470,"span",40),e(471,"code"),t(472,"caption-tag-04"),n(),a(473,"span",41),e(474,"code"),t(475,"caption-tag-05"),n()(),e(476,"li"),a(477,"span",42),e(478,"code"),t(479,"caption-tag-06"),n(),a(480,"span",43),e(481,"code"),t(482,"caption-tag-07"),n(),a(483,"span",44),e(484,"code"),t(485,"caption-tag-08"),n(),a(486,"span",45),e(487,"code"),t(488,"caption-tag-09"),n(),a(489,"span",46),e(490,"code"),t(491,"caption-tag-10"),n()(),e(492,"li"),a(493,"span",47),e(494,"code"),t(495,"caption-tag-11"),n(),a(496,"span",48),e(497,"code"),t(498,"caption-tag-12"),n(),a(499,"span",49),e(500,"code"),t(501,"caption-tag-13"),n(),a(502,"span",50),e(503,"code"),t(504,"caption-tag-14"),n(),a(505,"span",51),e(506,"code"),t(507,"caption-tag-15"),n()(),e(508,"li"),a(509,"span",52),e(510,"code"),t(511,"caption-tag-16"),n(),a(512,"span",53),e(513,"code"),t(514,"caption-tag-17"),n(),a(515,"span",54),e(516,"code"),t(517,"caption-tag-18"),n(),a(518,"span",55),e(519,"code"),t(520,"caption-tag-19"),n(),a(521,"span",56),e(522,"code"),t(523,"caption-tag-20"),n()(),e(524,"li"),a(525,"span",57),e(526,"code"),t(527,"caption-tag-21"),n(),a(528,"span",58),e(529,"code"),t(530,"caption-tag-22"),n(),a(531,"span",59),e(532,"code"),t(533,"caption-tag-23"),n(),a(534,"span",60),e(535,"code"),t(536,"caption-tag-24"),n(),a(537,"span",61),e(538,"code"),t(539,"caption-tag-25"),n()(),e(540,"li"),a(541,"span",62),e(542,"code"),t(543,"caption-tag-26"),n(),a(544,"span",63),e(545,"code"),t(546,"caption-tag-27"),n(),a(547,"span",64),e(548,"code"),t(549,"caption-tag-28"),n(),a(550,"span",65),e(551,"code"),t(552,"caption-tag-29"),n(),a(553,"span",66),e(554,"code"),t(555,"caption-tag-30"),n()(),e(556,"li"),a(557,"span",67),e(558,"code"),t(559,"caption-tag-31"),n(),a(560,"span",68),e(561,"code"),t(562,"caption-tag-32"),n(),a(563,"span",69),e(564,"code"),t(565,"caption-tag-33"),n(),a(566,"span",70),e(567,"code"),t(568,"caption-tag-34"),n(),a(569,"span",71),e(570,"code"),t(571,"caption-tag-35"),n()()(),e(572,"p"),t(573,"Exemplo de uso:"),n(),e(574,"pre")(575,"code"),t(576,`<po-tag p-color="caption-tag-15" p-value="Status"></po-tag>
`),n()(),e(577,"ul")(578,"li"),t(579,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background;"),n(),e(580,"li"),t(581,"Para as cores legacy ("),e(582,"code"),t(583,"color-01"),n(),t(584," a "),e(585,"code"),t(586,"color-12"),n(),t(587,") e cores customizadas, o componente ajusta automaticamente a cor do texto para garantir legibilidade."),n(),e(588,"li"),t(589,"Para as cores "),e(590,"strong"),t(591,"Caption Tag Colors"),n(),t(592," ("),e(593,"code"),t(594,"caption-tag-01"),n(),t(595," a "),e(596,"code"),t(597,"caption-tag-35"),n(),t(598,"), a cor do texto \xE9 fixa e definida via token CSS, n\xE3o sendo poss\xEDvel alter\xE1-la via "),e(599,"code"),t(600,"p-text-color"),n(),t(601,"."),n()(),e(602,"blockquote")(603,"p")(604,"strong"),t(605,"Aten\xE7\xE3o:"),n(),t(606," A propriedade "),e(607,"code"),t(608,"p-type"),n(),t(609," sobrep\xF5e esta defini\xE7\xE3o."),n()()()(),e(610,"tr",14)(611,"td",15)(612,"div",22)(613,"span",23),t(614," p-disabled"),a(615,"br"),n()()(),e(616,"td",18)(617,"code",72),t(618,"boolean"),n()(),e(619,"td",20)(620,"p")(621,"code"),t(622,"false"),n()()(),e(623,"td",21)(624,"em")(625,"strong"),t(626,"(opcional)"),n()(),e(627,"p"),t(628,"Desabilita o "),e(629,"code"),t(630,"po-tag"),n(),t(631," e n\xE3o permite que o usu\xE1rio interaja com o mesmo."),n(),e(632,"blockquote")(633,"p"),t(634,"A propriedade "),e(635,"code"),t(636,"p-disabled"),n(),t(637," somente ter\xE1 efeito caso a propriedade "),e(638,"code"),t(639,"p-removable"),n(),t(640," esteja definida como "),e(641,"code"),t(642,"true"),n(),t(643,"."),n()()()(),e(644,"tr",14)(645,"td",15)(646,"div",22)(647,"span",23),t(648," p-icon"),a(649,"br"),n()()(),e(650,"td",18)(651,"code",24),t(652,"string "),n(),e(653,"code",72),t(654," boolean "),n(),e(655,"code",73),t(656," TemplateRef<void>"),n()(),e(657,"td",20)(658,"p")(659,"code"),t(660,"false"),n()()(),e(661,"td",21)(662,"em")(663,"strong"),t(664,"(opcional)"),n()(),e(665,"p"),t(666,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),e(667,"em"),t(668,"tag"),n(),t(669,"."),n(),e(670,"p"),t(671,"Quando "),e(672,"code"),t(673,"p-type"),n(),t(674," estiver definida, basta informar um valor igual a "),e(675,"code"),t(676,"true"),n(),t(677," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),e(678,"ul")(679,"li"),a(680,"span",74),t(681," - "),e(682,"code"),t(683,"success"),n()(),e(684,"li"),a(685,"span",75),t(686," - "),e(687,"code"),t(688,"warning"),n()(),e(689,"li"),a(690,"span",76),t(691," - "),e(692,"code"),t(693,"danger"),n()(),e(694,"li"),a(695,"span",77),t(696," - "),e(697,"code"),t(698,"info"),n()()(),e(699,"p"),t(700,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),e(701,"a",78),t(702,"Biblioteca de \xEDcones"),n(),t(703,". conforme exemplo abaixo:"),n(),e(704,"pre")(705,"code"),t(706,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),e(707,"p"),t(708,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),e(709,"em"),t(710,"Font Awesome"),n(),t(711,", da seguinte forma:"),n(),e(712,"pre")(713,"code"),t(714,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),e(715,"p"),t(716,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),e(717,"code"),t(718,"TemplateRef"),n(),t(719,", conforme exemplo abaixo:"),n(),e(720,"pre")(721,"code"),t(722,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),e(723,"blockquote")(724,"p"),t(725,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),e(726,"code"),t(727,"font-size: inherit"),n(),t(728," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),e(729,"tr",14)(730,"td",15)(731,"div",22)(732,"span",23),t(733," p-label"),a(734,"br"),n()()(),e(735,"td",18)(736,"code",24),t(737,"string"),n()(),e(738,"td",20),t(739,"-"),n(),e(740,"td",21)(741,"em")(742,"strong"),t(743,"(opcional)"),n()(),e(744,"p"),t(745,"Define uma legenda que ser\xE1 exibida acima ou ao lado da "),e(746,"em"),t(747,"tag"),n(),t(748,", de acordo com a "),e(749,"code"),t(750,"p-orientation"),n(),t(751,"."),n()()(),e(752,"tr",14)(753,"td",15)(754,"div",22)(755,"span",23),t(756," p-literals"),a(757,"br"),n()()(),e(758,"td",18)(759,"code",79),t(760,"PoTagLiterals"),n()(),e(761,"td",20),t(762,"-"),n(),e(763,"td",21)(764,"em")(765,"strong"),t(766,"(opcional)"),n()(),e(767,"p"),t(768,"Objeto com as literais usadas no "),e(769,"code"),t(770,"po-tag"),n(),t(771,"."),n(),e(772,"p"),t(773,"Para utilizar, basta passar a literal customizada:"),n(),e(774,"pre")(775,"code"),t(776,`const customLiterals: PoTagLiterals = {
  remove: 'Remover itens'
};
`),n()(),e(777,"p"),t(778,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),n(),e(779,"pre")(780,"code"),t(781,`<po-tag
  [p-literals]="customLiterals">
</po-tag>
`),n()(),e(782,"blockquote")(783,"p"),t(784,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),e(785,"a",80)(786,"code"),t(787,"PoI18nService"),n()(),t(788," ou do browser."),n()()()(),e(789,"tr",14)(790,"td",15)(791,"div",22)(792,"span",23),t(793," p-orientation"),a(794,"br"),n()()(),e(795,"td",18)(796,"code",81),t(797,"PoTagOrientation"),n()(),e(798,"td",20)(799,"p")(800,"code"),t(801,"vertical"),n()()(),e(802,"td",21)(803,"em")(804,"strong"),t(805,"(opcional)"),n()(),e(806,"p"),t(807,"Define o "),e(808,"em"),t(809,"layout"),n(),t(810," de exibi\xE7\xE3o."),n()()(),e(811,"tr",14)(812,"td",15)(813,"div",22)(814,"span",23),t(815," p-removable"),a(816,"br"),n()()(),e(817,"td",18)(818,"code",72),t(819,"boolean"),n()(),e(820,"td",20)(821,"p")(822,"code"),t(823,"false"),n()()(),e(824,"td",21)(825,"em")(826,"strong"),t(827,"(opcional)"),n()(),e(828,"p"),t(829,"Habilita a op\xE7\xE3o de remover a tag"),n()()(),e(830,"tr",14)(831,"td",15)(832,"div",16)(833,"span",17),t(834," (p-close)"),a(835,"br"),n()()(),e(836,"td",18)(837,"code",19),t(838,"EventEmitter"),n()(),e(839,"td",20),t(840,"-"),n(),e(841,"td",21)(842,"em")(843,"strong"),t(844,"(opcional)"),n()(),e(845,"p"),t(846,"A\xE7\xE3o que sera executada quando clicar sobre o \xEDcone de remover no "),e(847,"code"),t(848,"po-tag"),n()()()(),e(849,"tr",14)(850,"td",15)(851,"div",22)(852,"span",23),t(853," p-text-color"),a(854,"br"),n()()(),e(855,"td",18)(856,"code",24),t(857,"string"),n()(),e(858,"td",20),t(859,"-"),n(),e(860,"td",21)(861,"em")(862,"strong"),t(863,"(opcional)"),n()(),e(864,"p"),t(865,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),e(866,"ul")(867,"li")(868,"p"),t(869,"Hexadeximal, por exemplo "),e(870,"code"),t(871,"#c64840"),n(),t(872,";"),n()(),e(873,"li")(874,"p"),t(875,"RGB, como "),e(876,"code"),t(877,"rgb(0, 0, 165)"),n(),t(878,";"),n()(),e(879,"li")(880,"p"),t(881,"O nome da cor, por exemplo "),e(882,"code"),t(883,"blue"),n(),t(884,";"),n()(),e(885,"li")(886,"p"),t(887,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),e(888,"ul")(889,"li"),a(890,"span",25),e(891,"code"),t(892,"color-01"),n()(),e(893,"li"),a(894,"span",26),e(895,"code"),t(896,"color-02"),n()(),e(897,"li"),a(898,"span",27),e(899,"code"),t(900,"color-03"),n()(),e(901,"li"),a(902,"span",28),e(903,"code"),t(904,"color-04"),n()(),e(905,"li"),a(906,"span",29),e(907,"code"),t(908,"color-05"),n()(),e(909,"li"),a(910,"span",30),e(911,"code"),t(912,"color-06"),n()(),e(913,"li"),a(914,"span",31),e(915,"code"),t(916,"color-07"),n()(),e(917,"li"),a(918,"span",32),e(919,"code"),t(920,"color-08"),n()(),e(921,"li"),a(922,"span",33),e(923,"code"),t(924,"color-09"),n()(),e(925,"li"),a(926,"span",34),e(927,"code"),t(928,"color-10"),n()(),e(929,"li"),a(930,"span",35),e(931,"code"),t(932,"color-11"),n()(),e(933,"li"),a(934,"span",36),e(935,"code"),t(936,"color-12"),n()()()(),e(937,"li")(938,"p"),t(939,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),e(940,"blockquote")(941,"p")(942,"strong"),t(943,"Aten\xE7\xE3o:"),n(),t(944," A propriedade "),e(945,"code"),t(946,"p-type"),n(),t(947," sobrep\xF5e esta defini\xE7\xE3o."),n()(),e(948,"blockquote")(949,"p")(950,"strong"),t(951,"Aten\xE7\xE3o:"),n(),t(952," As cores da paleta "),e(953,"strong"),t(954,"Caption Tag Colors"),n(),t(955," ("),e(956,"code"),t(957,"caption-tag-01"),n(),t(958," a "),e(959,"code"),t(960,"caption-tag-35"),n(),t(961,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),n()()()(),e(962,"tr",14)(963,"td",15)(964,"div",22)(965,"span",23),t(966," p-type"),a(967,"br"),n()()(),e(968,"td",18)(969,"code",82),t(970,"PoTagType"),n()(),e(971,"td",20)(972,"p")(973,"code"),t(974,"info"),n()()(),e(975,"td",21)(976,"em")(977,"strong"),t(978,"(opcional)"),n()(),e(979,"p"),t(980,"Define o tipo da "),e(981,"em"),t(982,"tag"),n(),t(983,"."),n(),e(984,"p"),t(985,"Valores v\xE1lidos:"),n(),e(986,"ul")(987,"li")(988,"code"),t(989,"success"),n(),t(990,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),e(991,"li")(992,"code"),t(993,"warning"),n(),t(994,": cor amarela que representa aviso ou advert\xEAncia."),n(),e(995,"li")(996,"code"),t(997,"danger"),n(),t(998,": cor vermelha para erro ou aviso cr\xEDtico."),n(),e(999,"li")(1e3,"code"),t(1001,"info"),n(),t(1002,": cor azul claro que caracteriza conte\xFAdo informativo."),n(),e(1003,"li")(1004,"code"),t(1005,"neutral"),n(),t(1006,": cor cinza claro para uso geral."),n()(),e(1007,"blockquote")(1008,"p"),t(1009,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),e(1010,"code"),t(1011,"p-color"),n(),t(1012," e "),e(1013,"code"),t(1014,"p-icon"),n(),t(1015," somente ser\xE1 exibido caso seja "),e(1016,"code"),t(1017,"true"),n(),t(1018,"."),n()()()(),e(1019,"tr",14)(1020,"td",15)(1021,"div",22)(1022,"span",23),t(1023," p-value"),a(1024,"br"),n()()(),e(1025,"td",18)(1026,"code",24),t(1027,"string"),n()(),e(1028,"td",20),t(1029,"-"),n(),e(1030,"td",21)(1031,"p"),t(1032,"Texto da tag."),n()()()(),e(1033,"h3"),t(1034,"Interfaces"),n(),e(1035,"h4",83)(1036,"code",5),t(1037,"PoTagLiterals"),n()(),e(1038,"div",2)(1039,"p"),t(1040,"Interface para defini\xE7\xE3o das literais usadas no "),e(1041,"code"),t(1042,"po-tag"),n(),t(1043,"."),n()(),e(1044,"h4",10),t(1045,"Propriedades"),n(),e(1046,"table",11)(1047,"tr",12)(1048,"th",13),t(1049,"Nome"),n(),e(1050,"th",13),t(1051,"Tipo"),n(),e(1052,"th",13),t(1053,"Descri\xE7\xE3o"),n()(),e(1054,"tr",14)(1055,"td",15)(1056,"div",22)(1057,"span",23),t(1058," remove"),a(1059,"br"),n()()(),e(1060,"td",18)(1061,"code",24),t(1062,"string"),n()(),e(1063,"td",21)(1064,"em")(1065,"strong"),t(1066,"(opcional)"),n()(),e(1067,"p"),t(1068,"Texto exibido no tooltip indicando remo\xE7\xE3o da tag."),n()()()(),e(1069,"h3"),t(1070,"Enums"),n(),e(1071,"h4",4)(1072,"code",5),t(1073,"PoTagOrientation"),n()(),e(1074,"div",2)(1075,"p"),t(1076,"Define os tipos de orienta\xE7\xF5es dispon\xEDveis para o "),e(1077,"code"),t(1078,"po-tag"),n(),t(1079,"."),n()(),e(1080,"h4",10),t(1081,"Propriedades"),n(),e(1082,"table",11)(1083,"tr",12)(1084,"th",13),t(1085,"Nome"),n(),e(1086,"th",13),t(1087,"Descri\xE7\xE3o"),n()(),e(1088,"tr",14)(1089,"td",15)(1090,"div",22)(1091,"span",23),t(1092," Horizontal"),a(1093,"br"),n()()(),e(1094,"td",21)(1095,"p"),t(1096,"A tag ser\xE1 exibida na horizontal, ao lado direito em rela\xE7\xE3o ao label."),n()()(),e(1097,"tr",14)(1098,"td",15)(1099,"div",22)(1100,"span",23),t(1101," Vertical"),a(1102,"br"),n()()(),e(1103,"td",21)(1104,"p"),t(1105,"Exibe a tag na vertical, ou seja, abaixo do label."),n()()()(),e(1106,"h4",4)(1107,"code",5),t(1108,"PoTagType"),n()(),e(1109,"div",2)(1110,"p"),t(1111,"Define os tipos dispon\xEDveis para o "),e(1112,"code"),t(1113,"po-tag"),n(),t(1114,"."),n()(),e(1115,"h4",10),t(1116,"Propriedades"),n(),e(1117,"table",11)(1118,"tr",12)(1119,"th",13),t(1120,"Nome"),n(),e(1121,"th",13),t(1122,"Descri\xE7\xE3o"),n()(),e(1123,"tr",14)(1124,"td",15)(1125,"div",22)(1126,"span",23),t(1127," Danger"),a(1128,"br"),n()()(),e(1129,"td",21)(1130,"p"),t(1131,"Erro, perigo, problema ou aviso cr\xEDtico."),n()()(),e(1132,"tr",14)(1133,"td",15)(1134,"div",22)(1135,"span",23),t(1136," Info"),a(1137,"br"),n()()(),e(1138,"td",21)(1139,"p"),t(1140,"Informativo ou explicativo."),n()()(),e(1141,"tr",14)(1142,"td",15)(1143,"div",22)(1144,"span",23),t(1145," Success"),a(1146,"br"),n()()(),e(1147,"td",21)(1148,"p"),t(1149,"Confirma\xE7\xE3o, resultados positivos ou \xEAxito."),n()()(),e(1150,"tr",14)(1151,"td",15)(1152,"div",22)(1153,"span",23),t(1154," Warning"),a(1155,"br"),n()()(),e(1156,"td",21)(1157,"p"),t(1158,"Aviso ou advert\xEAncia."),n()()(),e(1159,"tr",14)(1160,"td",15)(1161,"div",22)(1162,"span",23),t(1163," Neutral"),a(1164,"br"),n()()(),e(1165,"td",21)(1166,"p"),t(1167,"De uso geral, quando os tipos Info, Warning, Success e Danger n\xE3o atendem a necessidade."),n()()()()())},dependencies:[P],encapsulation:2})}return o})();var Te=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,p){this.route=l,this.router=p}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let p=l.view;this.activeTab=p||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(p){return new(p||o)($(ae),$(oe))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Tag",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(p,i){p&1&&(e(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-tag-doc"),n(),e(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-tag-basic-view")(6,"sample-po-tag-labs-view")(7,"sample-po-tag-bank-account-view")(8,"sample-po-tag-caption-tag-colors-view"),n()()()),p&2&&(m("p-actions",i.actions),r(2),m("p-active",i.activeTab==="doc"),r(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[A,b,S,be,Ee,ve,he,Ce],encapsulation:2})}return o})();var Qe=[{path:"",component:Te}],ye=(()=>{class o{static \u0275fac=function(p){return new(p||o)};static \u0275mod=V({type:o});static \u0275inj=I({imports:[U.forChild(Qe),U]})}return o})();var Pt=(()=>{class o{static \u0275fac=function(p){return new(p||o)};static \u0275mod=V({type:o});static \u0275inj=I({imports:[ge,ye]})}return o})();export{Pt as DocPoTagModule};
