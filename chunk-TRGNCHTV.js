import{o as w,p as ue}from"./chunk-AT3MKFJ3.js";import{Gb as P,Hb as C,Ja as se,Lb as A,Ra as pe,S as ae,U as re,Wa as me,Xa as de,a as oe,aa as O,ab as ce,ba as q,ca as V,da as T,tb as H,w as R,ya as le}from"./chunk-GCMU57WK.js";import{Ea as p,Fa as n,Ga as t,Ha as a,I as L,L as K,Mb as M,Mc as N,Nc as X,O as h,Oa as I,Oc as Y,P as x,Pa as u,Pc as W,Qc as Z,Ra as v,Tc as $,Uc as ee,Xc as te,bb as y,cb as e,cd as ne,eb as _,ed as ie,gb as g,gd as Q,ha as s,hb as E,ib as b,ma as U,oa as c,pa as F,rb as D,ya as z,za as B}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-basic"]],standalone:!1,decls:8,vars:3,consts:[["p-title","Bar"],[3,"p-value"],[1,"po-mt-1"],["p-title","Circle",1,"po-mt-2"],["p-shape","circle",3,"p-value","p-radius"]],template:function(l,i){l&1&&(n(0,"div")(1,"po-widget",0),a(2,"po-progress",1),t()(),n(3,"div",2)(4,"po-widget",3),a(5,"po-progress",4),n(6,"div",2),e(7,"Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),t()()()),l&2&&(s(2),p("p-value",25),s(3),p("p-value",25)("p-radius",24))},dependencies:[T,A],encapsulation:2})}return o})();var _e=o=>({"docs-sample-code-tabs":o}),Ee=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Progress Basic"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-progress-basic/sample-po-progress-basic.component.html"),t(),n(13,"pre",7),e(14,`<div>
  <po-widget p-title="Bar">
    <po-progress [p-value]="25"></po-progress>
  </po-widget>
</div>

<div class="po-mt-1">
  <po-widget p-title="Circle" class="po-mt-2">
    <po-progress [p-value]="25" p-shape="circle" [p-radius]="24"></po-progress>
    <div class="po-mt-1">Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.</div>
  </po-widget>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-progress-basic/sample-po-progress-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-basic',
  templateUrl: './sample-po-progress-basic.component.html',
  standalone: false
})
export class SamplePoProgressBasicComponent {}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-progress-basic"),t(),a(23,"hr")),l&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),_(" ",i.sampleCodeButtonLabel),s(),p("ngClass",D(4,_e,i.hideSampleCodeTabs)))},dependencies:[M,w,P,C,ge],encapsulation:2})}return o})();function Te(o,G){if(o&1&&(n(0,"po-widget",3),a(1,"po-info",15),t()),o&2){let r=v();s(),p("p-value",r.event)}}function ke(o,G){if(o&1&&(n(0,"div")(1,"po-widget",21)(2,"form",22),a(3,"po-input",23)(4,"po-select",24)(5,"po-select",25)(6,"po-switch",26)(7,"po-switch",27),t()()()),o&2){let r=v(2);s(2),p("formGroup",r.actionForm),s(2),p("p-options",r.iconOptions),s(),p("p-options",r.typeOptions)}}function Oe(o,G){if(o&1){let r=I();n(0,"po-select",16),b("ngModelChange",function(i){h(r);let m=v();return E(m.infoIcon,i)||(m.infoIcon=i),x(i)}),t(),n(1,"po-input",17),b("ngModelChange",function(i){h(r);let m=v();return E(m.text,i)||(m.text=i),x(i)}),t(),n(2,"po-input",18),b("ngModelChange",function(i){h(r);let m=v();return E(m.info,i)||(m.info=i),x(i)}),t(),n(3,"po-radio-group",19),b("ngModelChange",function(i){h(r);let m=v();return E(m.sizeActions,i)||(m.sizeActions=i),x(i)}),t(),n(4,"po-switch",20),b("ngModelChange",function(i){h(r);let m=v();return E(m.showAction,i)||(m.showAction=i),x(i)}),t(),z(5,ke,8,3,"div")}if(o&2){let r=v();g("ngModel",r.infoIcon),p("p-options",r.infoIconsOptions),s(),g("ngModel",r.text),s(),g("ngModel",r.info),s(),g("ngModel",r.sizeActions),p("p-options",r.sizeActionsOptions),s(),g("ngModel",r.showAction),s(),B(r.showAction?5:-1)}}function Ae(o,G){if(o&1){let r=I();n(0,"po-number",28),b("ngModelChange",function(i){h(r);let m=v();return E(m.radius,i)||(m.radius=i),x(i)}),t()}if(o&2){let r=v();g("ngModel",r.radius)}}var be=(()=>{class o{fb=K(te);event;info;infoIcon;disabledCancel;indeterminate;showPercentage;status=O.Default;size=V.large;shape=q.bar;radius;text;value;action;actionForm;showAction;properties;sizeActions;infoIconsOptions=[{label:"an an-warning-circle",value:"an an-warning-circle"},{label:"an an-check",value:"an an-check"},{label:"an an-user",value:"an an-user"},{label:"an an-cloud-slash",value:"an an-cloud-slash"}];statusOptions=[{label:"Default",value:O.Default},{label:"Success",value:O.Success},{label:"Error",value:O.Error}];sizeOptions=[{label:"Medium",value:V.medium},{label:"Large",value:V.large}];shapeOptions=[{label:"Bar",value:q.bar},{label:"Circle",value:q.circle}];sizeActionsOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];actionOptions=[{label:"Disabled",value:"disabled"},{label:"Visible",value:"visible"}];allPropertiesOptions=[{value:"disabledCancel",label:"Disabled cancel"},{value:"indeterminate",label:"Indeterminate"},{value:"showPercentage",label:"Show percentage"}];propertiesOptions=[...this.allPropertiesOptions];constructor(){this.initializeActionForm()}onShapeChange(r){this.restore(r),r==="circle"?this.propertiesOptions=this.allPropertiesOptions.filter(l=>l.value!=="disabledCancel"):this.propertiesOptions=[...this.allPropertiesOptions]}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(r=>{this.updateAction(r)})}updateAction(r){this.action=r}onEvent(r){this.event=r}restore(r){this.event=void 0,this.info=void 0,this.infoIcon=void 0,this.disabledCancel=!1,this.indeterminate=!1,this.showPercentage=!1,this.status=O.Default,this.text=void 0,this.value=void 0,this.size=V.large,this.radius=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.showAction=!1,this.properties=[],this.sizeActions="medium",r||(this.propertiesOptions=[...this.allPropertiesOptions],this.shape=q.bar)}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-labs"]],standalone:!1,decls:17,vars:25,consts:[["progressBarPropertiesForm","ngForm"],[1,"sample-progress-grid"],[3,"p-custom-action-click","p-cancel","p-retry","p-disabled-cancel","p-indeterminate","p-show-percentage","p-info","p-info-icon","p-status","p-text","p-value","p-size","p-shape","p-radius","p-size-actions","p-custom-action"],["p-title","Events"],["p-title","Properties"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],["name","shape","p-label","Shape",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel","p-options"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mt-2"],["name","value","p-clean","","p-label","Value","p-max","100","p-min","0",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Size","p-label","Size",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","Status","p-label","Status",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModel"],["name","properties","p-columns","4","p-label","Properties",1,"po-md-12","po-mt-2",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],[3,"p-value"],["name","infoIcon","p-label","Info icon",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","text","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","info","p-clean","","p-label","Info",1,"po-md-6",3,"ngModelChange","ngModel"],["name","sizeActions","p-columns","4","p-label","Size actions","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-mb-2",3,"ngModelChange","ngModel","p-options"],["name","addAction","p-label","Add Action Button",1,"po-md-3",3,"ngModelChange","ngModel"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"],["name","radius","p-clean","","p-label","Radius","p-help","Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.","p-min","24",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"]],template:function(l,i){if(l&1){let m=I();n(0,"div",1)(1,"po-progress",2),u("p-custom-action-click",function(){return i.onEvent("p-custom-action-click")})("p-cancel",function(){return i.onEvent("p-cancel")})("p-retry",function(){return i.onEvent("p-retry")}),t(),z(2,Te,2,1,"po-widget",3),n(3,"po-widget",4)(4,"form",null,0)(6,"div",5)(7,"po-radio-group",6),b("ngModelChange",function(d){return h(m),E(i.shape,d)||(i.shape=d),x(d)}),u("p-change",function(d){return i.onShapeChange(d)}),t()(),n(8,"div",7)(9,"po-number",8),b("ngModelChange",function(d){return h(m),E(i.value,d)||(i.value=d),x(d)}),t(),n(10,"po-select",9),b("ngModelChange",function(d){return h(m),E(i.size,d)||(i.size=d),x(d)}),t(),n(11,"po-select",10),b("ngModelChange",function(d){return h(m),E(i.status,d)||(i.status=d),x(d)}),t(),z(12,Oe,6,8),z(13,Ae,1,1,"po-number",11),n(14,"po-checkbox-group",12),b("ngModelChange",function(d){return h(m),E(i.properties,d)||(i.properties=d),x(d)}),t()()()(),n(15,"div",13)(16,"po-button",14),u("p-click",function(){return i.restore()}),t()()()}l&2&&(s(),p("p-disabled-cancel",i.properties.includes("disabledCancel"))("p-indeterminate",i.properties.includes("indeterminate"))("p-show-percentage",i.properties.includes("showPercentage"))("p-info",i.info)("p-info-icon",i.infoIcon)("p-status",i.status)("p-text",i.text)("p-value",i.value)("p-size",i.size)("p-shape",i.shape)("p-radius",i.radius)("p-size-actions",i.sizeActions)("p-custom-action",i.action),s(),B(i.shape==="bar"?2:-1),s(5),g("ngModel",i.shape),p("p-options",i.shapeOptions),s(2),g("ngModel",i.value),s(),g("ngModel",i.size),p("p-options",i.sizeOptions),s(),g("ngModel",i.status),p("p-options",i.statusOptions),s(),B(i.shape==="bar"?12:-1),s(),B(i.shape==="circle"?13:-1),s(),g("ngModel",i.properties),p("p-options",i.propertiesOptions))},dependencies:[Z,N,X,W,Y,ee,$,R,ae,re,se,pe,de,le,ce,T,A],styles:[".sample-progress-grid[_ngcontent-%COMP%]{display:grid;gap:16px}"]})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-labs-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Progress Labs"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-progress-labs/sample-po-progress-labs.component.html"),t(),n(13,"pre",7),e(14,`<div class="sample-progress-grid">
  <po-progress
    [p-disabled-cancel]="properties.includes('disabledCancel')"
    [p-indeterminate]="properties.includes('indeterminate')"
    [p-show-percentage]="properties.includes('showPercentage')"
    [p-info]="info"
    [p-info-icon]="infoIcon"
    [p-status]="status"
    [p-text]="text"
    [p-value]="value"
    [p-size]="size"
    [p-shape]="shape"
    [p-radius]="radius"
    [p-size-actions]="sizeActions"
    [p-custom-action]="action"
    (p-custom-action-click)="onEvent('p-custom-action-click')"
    (p-cancel)="onEvent('p-cancel')"
    (p-retry)="onEvent('p-retry')"
  />

  @if (shape === 'bar') {
    <po-widget p-title="Events">
      <po-info [p-value]="event" />
    </po-widget>
  }

  <po-widget p-title="Properties">
    <form #progressBarPropertiesForm="ngForm">
      <div class="po-sm-12 po-md-12 po-lg-12 po-xl-12">
        <po-radio-group
          class="po-md-6 po-lg-3"
          name="shape"
          [(ngModel)]="shape"
          p-label="Shape"
          [p-options]="shapeOptions"
          (p-change)="onShapeChange($event)"
        >
        </po-radio-group>
      </div>

      <div class="po-sm-12 po-md-12 po-lg-12 po-xl-12 po-mt-2">
        <po-number
          class="po-md-6 po-lg-3"
          name="value"
          [(ngModel)]="value"
          p-clean
          p-label="Value"
          p-max="100"
          p-min="0"
        />

        <po-select class="po-md-6 po-lg-3" name="Size" p-label="Size" [(ngModel)]="size" [p-options]="sizeOptions" />

        <po-select
          class="po-md-6 po-lg-3"
          name="Status"
          p-label="Status"
          [(ngModel)]="status"
          [p-options]="statusOptions"
        />

        @if (shape === 'bar') {
          <po-select
            class="po-md-6 po-lg-3"
            name="infoIcon"
            [(ngModel)]="infoIcon"
            p-label="Info icon"
            [p-options]="infoIconsOptions"
          />

          <po-input class="po-md-6" name="text" [(ngModel)]="text" p-clean p-label="Label" />

          <po-input class="po-md-6" name="info" [(ngModel)]="info" p-clean p-label="Info" />

          <po-radio-group
            class="po-md-12 po-mb-2"
            name="sizeActions"
            [(ngModel)]="sizeActions"
            p-columns="4"
            p-label="Size actions"
            p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
            [p-options]="sizeActionsOptions"
          >
          </po-radio-group>

          <po-switch class="po-md-3" name="addAction" [(ngModel)]="showAction" p-label="Add Action Button" />

          @if (showAction) {
            <div>
              <po-widget p-title="Action Button">
                <form [formGroup]="actionForm" class="po-row">
                  <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
                  <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
                  <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
                  <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
                  <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
                </form>
              </po-widget>
            </div>
          }
        }

        @if (shape === 'circle') {
          <po-number
            class="po-md-6 po-lg-3"
            name="radius"
            [(ngModel)]="radius"
            p-clean
            p-label="Radius"
            p-help="Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."
            p-min="24"
          />
        }

        <po-checkbox-group
          class="po-md-12 po-mt-2"
          name="properties"
          [(ngModel)]="properties"
          p-columns="4"
          p-label="Properties"
          [p-options]="propertiesOptions"
        >
        </po-checkbox-group>
      </div>
    </form>
  </po-widget>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-progress-labs/sample-po-progress-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressStatus,
  PoRadioGroupOption,
  PoProgressSize,
  PoProgressShape,
  PoProgressAction,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-progress-labs',
  templateUrl: './sample-po-progress-labs.component.html',
  styleUrls: ['./sample-po-progress-labs.component.css'],
  standalone: false
})
export class SamplePoProgressLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  event: any;
  info: string;
  infoIcon: string;
  disabledCancel: boolean;
  indeterminate: boolean;
  showPercentage: boolean;
  status: PoProgressStatus = PoProgressStatus.Default;
  size: PoProgressSize = PoProgressSize.large;
  shape: PoProgressShape = PoProgressShape.bar;
  radius: number;
  text: string;
  value: number;
  action: PoProgressAction;
  actionForm: FormGroup;
  showAction: false;
  properties: Array<string>;
  sizeActions: string;

  infoIconsOptions: Array<PoRadioGroupOption> = [
    { label: 'an an-warning-circle', value: 'an an-warning-circle' },
    { label: 'an an-check', value: 'an an-check' },
    { label: 'an an-user', value: 'an an-user' },
    { label: 'an an-cloud-slash', value: 'an an-cloud-slash' }
  ];

  statusOptions: Array<PoRadioGroupOption> = [
    { label: 'Default', value: PoProgressStatus.Default },
    { label: 'Success', value: PoProgressStatus.Success },
    { label: 'Error', value: PoProgressStatus.Error }
  ];

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'Medium', value: PoProgressSize.medium },
    { label: 'Large', value: PoProgressSize.large }
  ];

  shapeOptions: Array<PoRadioGroupOption> = [
    { label: 'Bar', value: PoProgressShape.bar },
    { label: 'Circle', value: PoProgressShape.circle }
  ];

  sizeActionsOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Visible', value: 'visible' }
  ];

  private readonly allPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'disabledCancel', label: 'Disabled cancel' },
    { value: 'indeterminate', label: 'Indeterminate' },
    { value: 'showPercentage', label: 'Show percentage' }
  ];

  public propertiesOptions: Array<PoCheckboxGroupOption> = [...this.allPropertiesOptions];

  constructor() {
    this.initializeActionForm();
  }

  onShapeChange(value: string): void {
    this.restore(value);

    if (value === 'circle') {
      this.propertiesOptions = this.allPropertiesOptions.filter(property => property.value !== 'disabledCancel');
    } else {
      this.propertiesOptions = [...this.allPropertiesOptions];
    }
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  onEvent(event) {
    this.event = event;
  }

  restore(shape?: string) {
    this.event = undefined;
    this.info = undefined;
    this.infoIcon = undefined;
    this.disabledCancel = false;
    this.indeterminate = false;
    this.showPercentage = false;
    this.status = PoProgressStatus.Default;
    this.text = undefined;
    this.value = undefined;
    this.size = PoProgressSize.large;
    this.radius = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.showAction = false;
    this.properties = [];
    this.sizeActions = 'medium';

    if (!shape) {
      this.propertiesOptions = [...this.allPropertiesOptions];
      this.shape = PoProgressShape.bar;
    }
  }
}
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-progress-labs/sample-po-progress-labs.component.css"),t(),n(25,"pre",11),e(26,`.sample-progress-grid {
  display: grid;
  gap: 16px;
}
`),t()()()()(),n(27,"div",12),a(28,"sample-po-progress-labs"),t(),a(29,"hr")),l&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),_(" ",i.sampleCodeButtonLabel),s(),p("ngClass",D(4,Be,i.hideSampleCodeTabs)))},dependencies:[M,w,P,C,be],encapsulation:2})}return o})();var he=(()=>{class o{buttonDisabled;progressBarValue=0;publication=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.`;get progressBarInfo(){return`${this.progressBarValue}/100`}finishEdition(){this.buttonDisabled=!0}updatePublication(){let r=setInterval(()=>{this.progressBarValue>=100?(clearInterval(r),this.finishEdition()):this.progressBarValue++},20)}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-publication"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Edit publication"],[1,"po-row"],[1,"po-md-9",3,"ngModelChange","ngModel"],[1,"po-md-9"],["p-text","Loading update",1,"po-md-9",3,"p-value","p-show-percentage"],["p-label","Update publication",3,"p-click","p-disabled"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"div",1)(2,"po-rich-text",2),b("ngModelChange",function(S){return E(i.publication,S)||(i.publication=S),S}),t(),a(3,"po-divider",3)(4,"po-progress",4),t(),n(5,"div",1)(6,"po-button",5),u("p-click",function(){return i.updatePublication()}),t()()()),l&2&&(s(2),g("ngModel",i.publication),s(2),p("p-value",i.progressBarValue)("p-show-percentage",!0),s(2),p("p-disabled",i.buttonDisabled))},dependencies:[N,W,R,oe,me,H,T],encapsulation:2})}return o})();var Le=o=>({"docs-sample-code-tabs":o}),xe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-publication-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Progress - Publication"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-progress-publication/sample-po-progress-publication.component.html"),t(),n(13,"pre",7),e(14,`<po-page-default p-title="Edit publication">
  <div class="po-row">
    <po-rich-text class="po-md-9" [(ngModel)]="publication"></po-rich-text>

    <po-divider class="po-md-9"></po-divider>

    <po-progress class="po-md-9" p-text="Loading update" [p-value]="progressBarValue" [p-show-percentage]="true">
    </po-progress>
  </div>

  <div class="po-row">
    <po-button p-label="Update publication" [p-disabled]="buttonDisabled" (p-click)="updatePublication()"> </po-button>
  </div>
</po-page-default>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-progress-publication/sample-po-progress-publication.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-publication',
  templateUrl: './sample-po-progress-publication.component.html',
  standalone: false
})
export class SamplePoProgressPublicationComponent {
  buttonDisabled: boolean;
  progressBarValue = 0;
  publication: string = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales, metus quis gravida dignissim, justo eros interdum
    metus, lacinia mollis lorem nunc vel nibh. Donec odio turpis, malesuada quis enim eu, varius vulputate magna. Donec efficitur, nibh et
    ultricies lacinia, nunc metus viverra nisl, ut ultricies augue nibh nec nisi. Nunc elit arcu, auctor ac diam vel, tempus vehicula
    Pellentesque dignissim eros urna, nec vehicula nulla sagittis et. Aliquam nec elit justo. Curabitur sed consequat augue. Etiam ultrices
    lectus a mauris fringilla, sit amet imperdiet purus vulputate.\`;

  get progressBarInfo() {
    return \`\${this.progressBarValue}/100\`;
  }

  finishEdition() {
    this.buttonDisabled = true;
  }

  updatePublication() {
    const interval = setInterval(() => {
      if (this.progressBarValue >= 100) {
        clearInterval(interval);

        this.finishEdition();
      } else {
        this.progressBarValue++;
      }
    }, 20);
  }
}
`),t()()()()(),n(21,"div",10),a(22,"sample-po-progress-publication"),t(),a(23,"hr")),l&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),_(" ",i.sampleCodeButtonLabel),s(),p("ngClass",D(4,Le,i.hideSampleCodeTabs)))},dependencies:[M,w,P,C,he],encapsulation:2})}return o})();var ve=(()=>{class o{minRadius=24;value=65;static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-circle"]],standalone:!1,decls:99,vars:2,consts:[[1,"container"],["p-title","Regra de Adequa\xE7\xE3o de Layout"],[1,"line-height"],[1,"po-font-text-large-bold"],[1,"po-text-large"],["p-title","Exemplo B\xE1sico - Radius M\xEDnimo (24px)"],[1,"po-row","po-align-items-center"],[1,"po-md-6","po-lg-4","po-center"],["p-shape","circle","p-show-percentage","true","p-radius","24",3,"p-value"],[1,"po-md-6","po-lg-8"],[1,"po-font-text"],["p-title","Com Radius Maior (60px)"],["p-shape","circle","p-show-percentage","true","p-radius","60",3,"p-value"],["p-title","Com Status Error (Radius 24px)"],["p-shape","circle","p-value","50","p-status","error","p-radius","24"],["p-title","Modo Indeterminado"],["p-shape","circle","p-indeterminate","true","p-radius","30"],["p-title","Compara\xE7\xE3o Visual - Diferentes Status"],[1,"po-row","row"],[1,"po-md-3","po-center","items"],[1,"po-font-text-large-bold","po-mb-1"],["p-shape","circle","p-value","100","p-status","success","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","50","p-status","warning","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","0","p-status","error","p-show-percentage","true","p-radius","25"],["p-shape","circle","p-value","75","p-show-percentage","true","p-radius","25"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"p",3),e(4,"\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px."),t(),n(5,"p",4),e(6," O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos. "),t()()(),n(7,"po-widget",5)(8,"div",6)(9,"div",7),a(10,"po-progress",8),t(),n(11,"div",9)(12,"p")(13,"strong"),e(14,"Configura\xE7\xE3o:"),t()(),n(15,"ul")(16,"li"),e(17,'p-shape="circle"'),t(),n(18,"li"),e(19,'p-value="65"'),t(),n(20,"li"),e(21,'p-show-percentage="true"'),t(),n(22,"li"),e(23,'p-radius="24" (valor m\xEDnimo permitido)'),t()(),n(24,"p",10),e(25,"A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo."),t()()()(),n(26,"po-widget",11)(27,"div",6)(28,"div",7),a(29,"po-progress",12),t(),n(30,"div",9)(31,"p")(32,"strong"),e(33,"Configura\xE7\xE3o:"),t()(),n(34,"ul")(35,"li"),e(36,'p-shape="circle"'),t(),n(37,"li"),e(38,'p-value="65"'),t(),n(39,"li"),e(40,'p-show-percentage="true"'),t(),n(41,"li"),e(42,'p-radius="60" (valor maior)'),t()(),n(43,"p",10),e(44," Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o. "),t()()()(),n(45,"po-widget",13)(46,"div",6)(47,"div",7),a(48,"po-progress",14),t(),n(49,"div",9)(50,"p")(51,"strong"),e(52,"Configura\xE7\xE3o:"),t()(),n(53,"ul")(54,"li"),e(55,'p-shape="circle"'),t(),n(56,"li"),e(57,'p-value="50"'),t(),n(58,"li"),e(59,'p-status="error"'),t(),n(60,"li"),e(61,'p-radius="24" (valor m\xEDnimo)'),t()(),n(62,"p",10),e(63,"\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o."),t()()()(),n(64,"po-widget",15)(65,"div",6)(66,"div",7),a(67,"po-progress",16),t(),n(68,"div",9)(69,"p")(70,"strong"),e(71,"Configura\xE7\xE3o:"),t()(),n(72,"ul")(73,"li"),e(74,'p-shape="circle"'),t(),n(75,"li"),e(76,'p-indeterminate="true"'),t(),n(77,"li"),e(78,'p-radius="30"'),t()(),n(79,"p",10),e(80,"Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento."),t()()()(),n(81,"po-widget",17)(82,"div",18)(83,"div",19)(84,"p",20),e(85,"Success"),t(),a(86,"po-progress",21),t(),n(87,"div",19)(88,"p",20),e(89,"Warning"),t(),a(90,"po-progress",22),t(),n(91,"div",19)(92,"p",20),e(93,"Error"),t(),a(94,"po-progress",23),t(),n(95,"div",19)(96,"p",20),e(97,"Default"),t(),a(98,"po-progress",24),t()()()()),l&2&&(s(10),p("p-value",i.value),s(19),p("p-value",i.value))},dependencies:[T,A],styles:[".container[_ngcontent-%COMP%]{display:grid;gap:24px;padding:16px}.line-height[_ngcontent-%COMP%]{line-height:1.6}.row[_ngcontent-%COMP%]{text-align:center;gap:16px}.items[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}"]})}return o})();var Ne=o=>({"docs-sample-code-tabs":o}),fe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-circle-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,i){l&1&&(a(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Progress Circle"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-progress-circle/sample-po-progress-circle.component.html"),t(),n(13,"pre",7),e(14,`<div class="container">
  <po-widget p-title="Regra de Adequa\xE7\xE3o de Layout">
    <div class="line-height">
      <p class="po-font-text-large-bold">\u{1F4CF} Para adequa\xE7\xE3o do layout, o valor m\xEDnimo de p-radius \xE9 24px.</p>
      <p class="po-text-large">
        O raio m\xEDnimo de 24px \xE9 necess\xE1rio para evitar colis\xE3o entre o conte\xFAdo central (porcentagem ou \xEDcone de erro) e
        a borda do c\xEDrculo. Valores menores podem causar sobreposi\xE7\xE3o visual dos elementos.
      </p>
    </div>
  </po-widget>

  <po-widget p-title="Exemplo B\xE1sico - Radius M\xEDnimo (24px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" [p-value]="value" p-show-percentage="true" p-radius="24"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="65"</li>
          <li>p-show-percentage="true"</li>
          <li>p-radius="24" (valor m\xEDnimo permitido)</li>
        </ul>
        <p class="po-font-text">A porcentagem \xE9 exibida no centro sem colis\xE3o com a borda do c\xEDrculo.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Com Radius Maior (60px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" [p-value]="value" p-show-percentage="true" p-radius="60"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="65"</li>
          <li>p-show-percentage="true"</li>
          <li>p-radius="60" (valor maior)</li>
        </ul>
        <p class="po-font-text">
          Maior espa\xE7o dispon\xEDvel para o conte\xFAdo central. Recomendado para melhor visualiza\xE7\xE3o.
        </p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Com Status Error (Radius 24px)">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" p-value="50" p-status="error" p-radius="24"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-value="50"</li>
          <li>p-status="error"</li>
          <li>p-radius="24" (valor m\xEDnimo)</li>
        </ul>
        <p class="po-font-text">\xCDcone de erro exibido no centro. O radius m\xEDnimo de 24px evita sobreposi\xE7\xE3o.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Modo Indeterminado">
    <div class="po-row po-align-items-center">
      <div class="po-md-6 po-lg-4 po-center">
        <po-progress p-shape="circle" p-indeterminate="true" p-radius="30"></po-progress>
      </div>
      <div class="po-md-6 po-lg-8">
        <p><strong>Configura\xE7\xE3o:</strong></p>
        <ul>
          <li>p-shape="circle"</li>
          <li>p-indeterminate="true"</li>
          <li>p-radius="30"</li>
        </ul>
        <p class="po-font-text">Anima\xE7\xE3o cont\xEDnua para indicar progresso em andamento.</p>
      </div>
    </div>
  </po-widget>

  <po-widget p-title="Compara\xE7\xE3o Visual - Diferentes Status">
    <div class="po-row row">
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Success</p>
        <po-progress
          p-shape="circle"
          p-value="100"
          p-status="success"
          p-show-percentage="true"
          p-radius="25"
        ></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Warning</p>
        <po-progress
          p-shape="circle"
          p-value="50"
          p-status="warning"
          p-show-percentage="true"
          p-radius="25"
        ></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Error</p>
        <po-progress p-shape="circle" p-value="0" p-status="error" p-show-percentage="true" p-radius="25"></po-progress>
      </div>
      <div class="po-md-3 po-center items">
        <p class="po-font-text-large-bold po-mb-1">Default</p>
        <po-progress p-shape="circle" p-value="75" p-show-percentage="true" p-radius="25"></po-progress>
      </div>
    </div>
  </po-widget>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-progress-circle/sample-po-progress-circle.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-progress-circle',
  templateUrl: './sample-po-progress-circle.component.html',
  styleUrls: ['./sample-po-progress-circle.component.css'],
  standalone: false
})
export class SamplePoProgressCircleComponent {
  minRadius = 24;
  value = 65;
}
`),t()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),e(24,"sample-po-progress-circle/sample-po-progress-circle.component.css"),t(),n(25,"pre",11),e(26,`.container {
  display: grid;
  gap: 24px;
  padding: 16px;
}

.line-height {
  line-height: 1.6;
}

.row {
  text-align: center;
  gap: 16px;
}

.items {
  display: flex;
  align-items: center;
  flex-direction: column;
}
`),t()()()()(),n(27,"div",12),a(28,"sample-po-progress-circle"),t(),a(29,"hr")),l&2&&(s(5),y("po-icon "+i.sampleCodeButtonIcon),s(),_(" ",i.sampleCodeButtonLabel),s(),p("ngClass",D(4,Ne,i.hideSampleCodeTabs)))},dependencies:[M,w,P,C,ve],encapsulation:2})}return o})();var Pe=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=c({type:o,selectors:[["sample-po-progress-doc"]],standalone:!1,decls:966,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoProgressAction"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoProgressStatus"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["href","https://po-ui.io/icons"]],template:function(l,i){l&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoProgressModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),n(7,"code"),e(8,"po-progress"),t(),e(9,"."),t()(),n(10,"h3",3),e(11,"Componente"),t(),n(12,"h4",4)(13,"code",5),e(14,"PoProgressComponent"),t()(),n(15,"div",2)(16,"p"),e(17,"Componente de barra de progresso que possibilita exibir visualmente o progresso/carregamento de uma tarefa."),t(),n(18,"p"),e(19,"Este componente pode ser utilizado no "),n(20,"em"),e(21,"upload"),t(),e(22," de arquivos, uma atualiza\xE7\xE3o no sistema ou o processamento de uma imagem."),t(),n(23,"h4"),e(24,"Tokens customiz\xE1veis"),t(),n(25,"p"),e(26,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(27,"blockquote")(28,"p"),e(29,"Para maiores informa\xE7\xF5es, acesse o guia "),n(30,"a",6),e(31,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(32,"."),t()(),n(33,"table")(34,"thead")(35,"tr")(36,"th"),e(37,"Propriedade"),t(),n(38,"th"),e(39,"Descri\xE7\xE3o"),t(),n(40,"th"),e(41,"Valor Padr\xE3o"),t()()(),n(42,"tbody")(43,"tr")(44,"td")(45,"strong"),e(46,"Default Values"),t()(),a(47,"td")(48,"td"),t(),n(49,"tr")(50,"td")(51,"code"),e(52,"--font-family"),t()(),n(53,"td"),e(54,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(55,"td")(56,"code"),e(57,"var(--font-family-theme)"),t()()(),n(58,"tr")(59,"td")(60,"code"),e(61,"--text-color"),t()(),n(62,"td"),e(63,"Cor do texto"),t(),n(64,"td")(65,"code"),e(66,"var(--color-neutral-dark-90)"),t()()(),n(67,"tr")(68,"td")(69,"strong"),e(70,"Error"),t()(),a(71,"td")(72,"td"),t(),n(73,"tr")(74,"td")(75,"code"),e(76,"--text-color-error"),t()(),n(77,"td"),e(78,"Cor do texto no estado error"),t(),n(79,"td")(80,"code"),e(81,"var(--color-feedback-negative-dark)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--color-icon-error"),t()(),n(86,"td"),e(87,"Cor do \xEDcone no estado error"),t(),n(88,"td")(89,"code"),e(90,"var(--color-feedback-negative-dark)"),t()()(),n(91,"tr")(92,"td")(93,"strong"),e(94,"po-progress-bar"),t()(),a(95,"td")(96,"td"),t(),n(97,"tr")(98,"td")(99,"code"),e(100,"--background-color-tray"),t()(),n(101,"td"),e(102,"Cor do background"),t(),n(103,"td")(104,"code"),e(105,"var(--color-brand-01-lightest)"),t()()(),n(106,"tr")(107,"td")(108,"code"),e(109,"--background-color-indicator"),t()(),n(110,"td"),e(111,"Cor do background do indicador"),t(),n(112,"td")(113,"code"),e(114,"var(--color-action-default)"),t()()(),n(115,"tr")(116,"td")(117,"strong"),e(118,"po-progress-circle"),t()(),a(119,"td")(120,"td"),t(),n(121,"tr")(122,"td")(123,"code"),e(124,"--background-color-tray"),t()(),n(125,"td"),e(126,"Cor do background"),t(),n(127,"td")(128,"code"),e(129,"var(--color-brand-01-lightest)"),t()()(),n(130,"tr")(131,"td")(132,"code"),e(133,"--background-color-indicator"),t()(),n(134,"td"),e(135,"Cor do background do indicador"),t(),n(136,"td")(137,"code"),e(138,"var(--color-action-default)"),t()()()()()(),n(139,"div",7)(140,"h4",8),e(141,"Seletor"),t(),n(142,"pre",9),e(143,`<po-progress
    p-aria-label="string"
    (p-cancel)="EventEmitter"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-disabled-cancel="boolean"
    p-indeterminate="boolean"
    p-info="string"
    p-info-icon="string | TemplateRef<void>"
    p-radius="number"
    (p-retry)="EventEmitter"
    p-shape="string"
    p-show-percentage="boolean"
    p-size="string"
    p-size-actions="string"
    p-status="PoProgressStatus"
    p-text="string"
    p-value="number" >
</po-progress>
`),t()(),n(144,"h4",10),e(145,"Propriedades"),t(),n(146,"table",11)(147,"tr",12)(148,"th",13),e(149,"Nome"),t(),n(150,"th",13),e(151,"Tipo"),t(),n(152,"th",13),e(153,"Padr\xE3o"),t(),n(154,"th",13),e(155,"Descri\xE7\xE3o"),t()(),n(156,"tr",14)(157,"td",15)(158,"div",16)(159,"span",17),e(160," p-aria-label"),a(161,"br"),t()()(),n(162,"td",18)(163,"code",19),e(164,"string"),t()(),n(165,"td",20),e(166,"-"),t(),n(167,"td",21)(168,"em")(169,"strong"),e(170,"(opcional)"),t()(),n(171,"p"),e(172,"Define um nome acess\xEDvel para o elemento com "),n(173,"code"),e(174,'role="progressbar"'),t(),e(175,"."),t(),n(176,"p"),e(177,"Quando n\xE3o informado, o componente utiliza o valor de "),n(178,"code"),e(179,"p-text"),t(),e(180," como alternativa, se dispon\xEDvel."),t()()(),n(181,"tr",14)(182,"td",15)(183,"div",22)(184,"span",23),e(185," (p-cancel)"),a(186,"br"),t()()(),n(187,"td",18)(188,"code",24),e(189,"EventEmitter"),t()(),n(190,"td",20),e(191,"-"),t(),n(192,"td",21)(193,"em")(194,"strong"),e(195,"(opcional)"),t()(),n(196,"p"),e(197,'Evento que ser\xE1 disparado ao clicar no \xEDcone de cancelamento ("x") na parte inferior da barra de progresso.'),t(),n(198,"p"),e(199,"Ao ser disparado, a fun\xE7\xE3o receber\xE1 como par\xE2metro o status atual da barra de progresso."),t(),n(200,"blockquote")(201,"p"),e(202,"Se nenhuma fun\xE7\xE3o for passada para o evento ou a barra de progresso estiver com o status "),n(203,"code"),e(204,"PoProgressStatus.Success"),t(),e(205,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),t()(),n(206,"blockquote")(207,"p"),e(208,"N\xE3o compat\xEDvel com "),n(209,"code"),e(210,'p-shape="circle"'),t(),e(211,"."),t()()()(),n(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),e(216," p-custom-action"),a(217,"br"),t()()(),n(218,"td",18)(219,"code",25),e(220,"PoProgressAction"),t()(),n(221,"td",20),e(222,"-"),t(),n(223,"td",21)(224,"em")(225,"strong"),e(226,"(opcional)"),t()(),n(227,"p"),e(228,"Permite definir uma a\xE7\xE3o personalizada no componente "),n(229,"code"),e(230,"po-progress"),t(),e(231,`, exibindo um bot\xE3o no canto inferior direito
da barra de progresso. A a\xE7\xE3o deve implementar a interface `),n(232,"strong"),e(233,"PoProgressAction"),t(),e(234,", possibilitando configurar:"),t(),n(235,"ul")(236,"li")(237,"strong")(238,"code"),e(239,"label"),t()(),e(240,": Texto exibido no bot\xE3o (opcional)."),t(),n(241,"li")(242,"strong")(243,"code"),e(244,"icon"),t()(),e(245,": \xCDcone exibido no bot\xE3o (opcional)."),t(),n(246,"li")(247,"strong")(248,"code"),e(249,"type"),t()(),e(250,": Tipo do bot\xE3o ("),n(251,"code"),e(252,"default"),t(),e(253," ou "),n(254,"code"),e(255,"danger"),t(),e(256,") para indicar a inten\xE7\xE3o da a\xE7\xE3o (opcional)."),t(),n(257,"li")(258,"strong")(259,"code"),e(260,"disabled"),t()(),e(261,": Indica se o bot\xE3o deve estar desabilitado (opcional)."),t(),n(262,"li")(263,"strong")(264,"code"),e(265,"visible"),t()(),e(266,": Determina se o bot\xE3o ser\xE1 exibido. Pode ser um valor booleano ou uma fun\xE7\xE3o que retorna um booleano (opcional)."),t()(),n(267,"blockquote")(268,"p"),e(269,"N\xE3o compat\xEDvel com "),n(270,"code"),e(271,'p-shape="circle"'),t(),e(272,"."),t()()()(),n(273,"tr",14)(274,"td",15)(275,"div",22)(276,"span",23),e(277," (p-custom-action-click)"),a(278,"br"),t()()(),n(279,"td",18)(280,"code",24),e(281,"EventEmitter"),t()(),n(282,"td",20),e(283,"-"),t(),n(284,"td",21)(285,"em")(286,"strong"),e(287,"(opcional)"),t()(),n(288,"p"),e(289,"Evento emitido quando o bot\xE3o definido em "),n(290,"code"),e(291,"p-custom-action"),t(),e(292,` \xE9 clicado. Este evento retorna informa\xE7\xF5es
relacionadas \xE0 barra de progresso ou ao arquivo/processo associado, permitindo executar a\xE7\xF5es espec\xEDficas.`),t(),n(293,"blockquote")(294,"p"),e(295,"N\xE3o compat\xEDvel com "),n(296,"code"),e(297,'p-shape="circle"'),t(),e(298,"."),t()()()(),n(299,"tr",14)(300,"td",15)(301,"div",16)(302,"span",17),e(303," p-disabled-cancel"),a(304,"br"),t()()(),n(305,"td",18)(306,"code",26),e(307,"boolean"),t()(),n(308,"td",20)(309,"p")(310,"code"),e(311,"false"),t()()(),n(312,"td",21)(313,"em")(314,"strong"),e(315,"(opcional)"),t()(),n(316,"p"),e(317,"Desabilita bot\xE3o de cancelamento na parte inferior da barra de progresso."),t(),n(318,"blockquote")(319,"p"),e(320,"Se nenhuma fun\xE7\xE3o for passada para o evento "),n(321,"code"),e(322,"(p-cancel)"),t(),e(323," ou a barra de progresso estiver com o status "),n(324,"code"),e(325,"PoProgressStatus.Success"),t(),e(326,`,
o \xEDcone de cancelamento n\xE3o ser\xE1 exibido.`),t()(),n(327,"blockquote")(328,"p"),e(329,"N\xE3o compat\xEDvel com "),n(330,"code"),e(331,'p-shape="circle"'),t(),e(332,"."),t()()()(),n(333,"tr",14)(334,"td",15)(335,"div",16)(336,"span",17),e(337," p-indeterminate"),a(338,"br"),t()()(),n(339,"td",18)(340,"code",26),e(341,"boolean"),t()(),n(342,"td",20)(343,"p")(344,"code"),e(345,"false"),t()()(),n(346,"td",21)(347,"em")(348,"strong"),e(349,"(opcional)"),t()(),n(350,"p"),e(351,"Habilita o modo indeterminado na barra de progresso, que mostra uma anima\xE7\xE3o fixa sem um valor estabelecido."),t(),n(352,"p"),e(353,"Esta op\xE7\xE3o pode ser utilizada quando n\xE3o souber quanto tempo levar\xE1 para que um processo seja conclu\xEDdo."),t(),n(354,"blockquote")(355,"p"),e(356,"Caso esta propriedade e a "),n(357,"code"),e(358,"p-value"),t(),e(359," seja habilitada, a propriedade "),n(360,"code"),e(361,"p-value"),t(),e(362," ser\xE1 ignorada."),t()()()(),n(363,"tr",14)(364,"td",15)(365,"div",16)(366,"span",17),e(367," p-info"),a(368,"br"),t()()(),n(369,"td",18)(370,"code",19),e(371,"string"),t()(),n(372,"td",20),e(373,"-"),t(),n(374,"td",21)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),n(378,"p"),e(379,"Informa\xE7\xE3o adicional que aparecer\xE1 abaixo da barra de progresso ao lado direito."),t(),n(380,"blockquote")(381,"p"),e(382,"N\xE3o compat\xEDvel com "),n(383,"code"),e(384,'p-shape="circle"'),t(),e(385,"."),t()()()(),n(386,"tr",14)(387,"td",15)(388,"div",16)(389,"span",17),e(390," p-info-icon"),a(391,"br"),t()()(),n(392,"td",18)(393,"code",19),e(394,"string "),t(),n(395,"code",27),e(396," TemplateRef<void>"),t()(),n(397,"td",20),e(398,"-"),t(),n(399,"td",21)(400,"em")(401,"strong"),e(402,"(opcional)"),t()(),n(403,"p"),e(404,"\xCDcone que aparecer\xE1 ao lado do texto da propriedade "),n(405,"code"),e(406,"p-info"),t(),e(407,"."),t(),n(408,"p"),e(409,"Exemplo: "),n(410,"code"),e(411,"an an-check"),t(),e(412,"."),t(),n(413,"blockquote")(414,"p"),e(415,"N\xE3o compat\xEDvel com "),n(416,"code"),e(417,'p-shape="circle"'),t(),e(418,"."),t()()()(),n(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),e(423," p-radius"),a(424,"br"),t()()(),n(425,"td",18)(426,"code",28),e(427,"number"),t()(),n(428,"td",20)(429,"p")(430,"code"),e(431,"45"),t(),e(432," (autom\xE1tico)"),t()(),n(433,"td",21)(434,"em")(435,"strong"),e(436,"(opcional)"),t()(),n(437,"p"),e(438,`Define o raio do c\xEDrculo SVG em pixels. Permite ao usu\xE1rio customizar o tamanho
do indicador circular ao utilizar `),n(439,"code"),e(440,'p-shape="circle"'),t(),e(441,"."),t(),n(442,"blockquote")(443,"p"),e(444,"O valor m\xEDnimo aceito \xE9 "),n(445,"strong"),e(446,"24"),t(),e(447,"."),t()(),n(448,"blockquote")(449,"p"),e(450,`Quando n\xE3o informado, o componente calcula o raio automaticamente a partir do container pai.
Caso o container pai n\xE3o possua dimens\xF5es definidas, o valor padr\xE3o de `),n(451,"strong"),e(452,"45"),t(),e(453," ser\xE1 utilizado."),t()(),n(454,"blockquote")(455,"p"),e(456,"N\xE3o compat\xEDvel com "),n(457,"code"),e(458,'p-shape="bar"'),t(),e(459,"."),t()()()(),n(460,"tr",14)(461,"td",15)(462,"div",22)(463,"span",23),e(464," (p-retry)"),a(465,"br"),t()()(),n(466,"td",18)(467,"code",24),e(468,"EventEmitter"),t()(),n(469,"td",20),e(470,"-"),t(),n(471,"td",21)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),n(475,"p"),e(476,"Evento que ser\xE1 disparado ao clicar no \xEDcone de tentar novamente na parte inferior da barra de progresso."),t(),n(477,"blockquote")(478,"p"),e(479,`o \xEDcone ser\xE1 exibido apenas se informar uma fun\xE7\xE3o neste evento e o status da barra de progresso for
`),n(480,"code"),e(481,"PoProgressStatus.Error"),t(),e(482,"."),t()(),n(483,"blockquote")(484,"p"),e(485,"N\xE3o compat\xEDvel com "),n(486,"code"),e(487,'p-shape="circle"'),t(),e(488,"."),t()()()(),n(489,"tr",14)(490,"td",15)(491,"div",16)(492,"span",17),e(493," p-shape"),a(494,"br"),t()()(),n(495,"td",18)(496,"code",19),e(497,"string"),t()(),n(498,"td",20)(499,"p")(500,"code"),e(501,"bar"),t()()(),n(502,"td",21)(503,"em")(504,"strong"),e(505,"(opcional)"),t()(),n(506,"p"),e(507,"Define o formato visual do componente de progresso."),t(),n(508,"p"),e(509,"Valores v\xE1lidos:"),t(),n(510,"ul")(511,"li")(512,"code"),e(513,"bar"),t(),e(514,": exibe o progresso em formato de barra."),t(),n(515,"li")(516,"code"),e(517,"circle"),t(),e(518,": exibe o progresso em formato circular."),t()()()(),n(519,"tr",14)(520,"td",15)(521,"div",16)(522,"span",17),e(523," p-show-percentage"),a(524,"br"),t()()(),n(525,"td",18)(526,"code",26),e(527,"boolean"),t()(),n(528,"td",20)(529,"p")(530,"code"),e(531,"false"),t()()(),n(532,"td",21)(533,"em")(534,"strong"),e(535,"(opcional)"),t()(),n(536,"p"),e(537,"Ativa a exibi\xE7\xE3o da porcentagem atual da barra de progresso."),t(),n(538,"blockquote")(539,"p"),e(540,"Se utilizada no "),n(541,"code"),e(542,'p-shape="circle"'),t(),e(543," e o status estiver como "),n(544,"code"),e(545,"error"),t(),e(546,", a porcentagem n\xE3o ser\xE1 exibida."),t()()()(),n(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),e(551," p-size"),a(552,"br"),t()()(),n(553,"td",18)(554,"code",19),e(555,"string"),t()(),n(556,"td",20)(557,"p")(558,"code"),e(559,"large"),t()()(),n(560,"td",21)(561,"em")(562,"strong"),e(563,"(opcional)"),t()(),n(564,"p"),e(565,"Define a expessura da barra de progresso."),t(),n(566,"p"),e(567,"Valores v\xE1lidos:"),t(),n(568,"ul")(569,"li"),e(570,"medium"),t(),n(571,"li"),e(572,"large"),t()()()(),n(573,"tr",14)(574,"td",15)(575,"div",16)(576,"span",17),e(577," p-size-actions"),a(578,"br"),t()()(),n(579,"td",18)(580,"code",19),e(581,"string"),t()(),n(582,"td",20)(583,"p")(584,"code"),e(585,"medium"),t()()(),n(586,"td",21)(587,"em")(588,"strong"),e(589,"(opcional)"),t()(),n(590,"p"),e(591,"Define o tamanho das a\xE7\xF5es no componente com excess\xE3o da barra de progresso que pode ser ajustada atrav\xE9s da propriedade "),n(592,"code"),e(593,"p-size"),t(),e(594,":"),t(),n(595,"ul")(596,"li")(597,"code"),e(598,"small"),t(),e(599,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(600,"li")(601,"code"),e(602,"medium"),t(),e(603,": aplica a medida medium de cada componente."),t()(),n(604,"blockquote")(605,"p"),e(606,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(607,"code"),e(608,"medium"),t(),e(609,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(610,"a",29),e(611,"po-theme"),t(),e(612,"."),t()(),n(613,"blockquote")(614,"p"),e(615,"N\xE3o compat\xEDvel com "),n(616,"code"),e(617,'p-shape="circle"'),t(),e(618,"."),t()()()(),n(619,"tr",14)(620,"td",15)(621,"div",16)(622,"span",17),e(623," p-status"),a(624,"br"),t()()(),n(625,"td",18)(626,"code",30),e(627,"PoProgressStatus"),t()(),n(628,"td",20)(629,"p")(630,"code"),e(631,"PoProgressStatus.Default"),t()()(),n(632,"td",21)(633,"em")(634,"strong"),e(635,"(opcional)"),t()(),n(636,"p"),e(637,`Status da barra de progresso que indicar\xE1 visualmente ao usu\xE1rio
o andamento, por exemplo, se a mesma foi conclu\xEDda com sucesso.`),t()()(),n(638,"tr",14)(639,"td",15)(640,"div",16)(641,"span",17),e(642," p-text"),a(643,"br"),t()()(),n(644,"td",18)(645,"code",19),e(646,"string"),t()(),n(647,"td",20),e(648,"-"),t(),n(649,"td",21)(650,"em")(651,"strong"),e(652,"(opcional)"),t()(),n(653,"p"),e(654,"Texto principal que aparecer\xE1 abaixo da barra de progresso no lado esquerdo."),t(),n(655,"blockquote")(656,"p"),e(657,"N\xE3o compat\xEDvel com "),n(658,"code"),e(659,'p-shape="circle"'),t(),e(660,"."),t()()()(),n(661,"tr",14)(662,"td",15)(663,"div",16)(664,"span",17),e(665," p-value"),a(666,"br"),t()()(),n(667,"td",18)(668,"code",28),e(669,"number"),t()(),n(670,"td",20)(671,"p")(672,"code"),e(673,"0"),t()()(),n(674,"td",21)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),n(678,"p"),e(679,"Valor que representar\xE1 o progresso."),t(),n(680,"blockquote")(681,"p"),e(682,"Os valores aceitos s\xE3o n\xFAmeros inteiros de "),n(683,"code"),e(684,"0"),t(),e(685," \xE0 "),n(686,"code"),e(687,"100"),t(),e(688,"."),t()()()()(),n(689,"h3"),e(690,"Interfaces"),t(),n(691,"h4",31)(692,"code",5),e(693,"PoProgressAction"),t()(),n(694,"div",2)(695,"p"),e(696,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(697,"h4",10),e(698,"Propriedades"),t(),n(699,"table",11)(700,"tr",12)(701,"th",13),e(702,"Nome"),t(),n(703,"th",13),e(704,"Tipo"),t(),n(705,"th",13),e(706,"Descri\xE7\xE3o"),t()(),n(707,"tr",14)(708,"td",15)(709,"div",16)(710,"span",17),e(711," disabled"),a(712,"br"),t()()(),n(713,"td",18)(714,"code",26),e(715,"boolean "),t(),n(716,"code",32),e(717," Function"),t()(),n(718,"td",21)(719,"em")(720,"strong"),e(721,"(opcional)"),t()(),n(722,"p"),e(723,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(724,"p"),e(725,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(726,"tr",14)(727,"td",15)(728,"div",16)(729,"span",17),e(730," icon"),a(731,"br"),t()()(),n(732,"td",18)(733,"code",19),e(734,"string "),t(),n(735,"code",27),e(736," TemplateRef<void>"),t()(),n(737,"td",21)(738,"em")(739,"strong"),e(740,"(opcional)"),t()(),n(741,"p"),e(742,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(743,"p"),e(744,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(745,"a",33),e(746,"Biblioteca de \xEDcones"),t(),e(747,". conforme exemplo abaixo:"),t(),n(748,"pre")(749,"code"),e(750,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(751,"p"),e(752,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(753,"pre")(754,"code"),e(755,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(756,"p"),e(757,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(758,"code"),e(759,"TemplateRef"),t(),e(760,`, conforme exemplo abaixo:
component.html:`),t(),n(761,"pre")(762,"code"),e(763,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(764,"p"),e(765,"component.ts:"),t(),n(766,"pre")(767,"code"),e(768,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(769,"tr",14)(770,"td",15)(771,"div",16)(772,"span",17),e(773," label"),a(774,"br"),t()()(),n(775,"td",18)(776,"code",19),e(777,"string"),t()(),n(778,"td",21)(779,"em")(780,"strong"),e(781,"(opcional)"),t()(),n(782,"p"),e(783,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(784,"tr",14)(785,"td",15)(786,"div",16)(787,"span",17),e(788," type"),a(789,"br"),t()()(),n(790,"td",18)(791,"code",19),e(792,"string"),t()(),n(793,"td",21)(794,"em")(795,"strong"),e(796,"(opcional)"),t()(),n(797,"p"),e(798,"Define a cor do item, sendo "),n(799,"code"),e(800,"default"),t(),e(801," o padr\xE3o."),t(),n(802,"p"),e(803,"Valores v\xE1lidos:"),t(),n(804,"ul")(805,"li")(806,"code"),e(807,"default"),t()(),n(808,"li")(809,"code"),e(810,"danger"),t(),e(811," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(812,"tr",14)(813,"td",15)(814,"div",16)(815,"span",17),e(816," visible"),a(817,"br"),t()()(),n(818,"td",18)(819,"code",26),e(820,"boolean "),t(),n(821,"code",32),e(822," Function"),t()(),n(823,"td",21)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),n(827,"p"),e(828,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(829,"blockquote")(830,"p"),e(831,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(832,"p"),e(833,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(834,"ul")(835,"li")(836,"p"),e(837,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(838,"li")(839,"p"),e(840,"Informar diretamente um valor booleano."),t()()()()()(),n(841,"h3"),e(842,"Enums"),t(),n(843,"h4",4)(844,"code",5),e(845,"PoProgressShape"),t()(),n(846,"div",2)(847,"p"),e(848,"Enum "),n(849,"code"),e(850,"PoProgressShape"),t(),e(851," para definir o formato visual do componente de progresso."),t()(),n(852,"h4",10),e(853,"Propriedades"),t(),n(854,"table",11)(855,"tr",12)(856,"th",13),e(857,"Nome"),t(),n(858,"th",13),e(859,"Descri\xE7\xE3o"),t()(),n(860,"tr",14)(861,"td",15)(862,"div",16)(863,"span",17),e(864," bar"),a(865,"br"),t()()(),n(866,"td",21)(867,"p"),e(868,"Formato barra de progresso (padr\xE3o)."),t()()(),n(869,"tr",14)(870,"td",15)(871,"div",16)(872,"span",17),e(873," circle"),a(874,"br"),t()()(),n(875,"td",21)(876,"p"),e(877,"Formato circular de progresso."),t()()()(),n(878,"h4",4)(879,"code",5),e(880,"PoProgressSize"),t()(),n(881,"div",2)(882,"p"),e(883,"Enum para configurar a expessura ("),n(884,"code"),e(885,"p-size"),t(),e(886,") da barra de progresso do componente."),t()(),n(887,"h4",10),e(888,"Propriedades"),t(),n(889,"table",11)(890,"tr",12)(891,"th",13),e(892,"Nome"),t(),n(893,"th",13),e(894,"Descri\xE7\xE3o"),t()(),n(895,"tr",14)(896,"td",15)(897,"div",16)(898,"span",17),e(899," medium"),a(900,"br"),t()()(),n(901,"td",21)(902,"p"),e(903,"Tamanho m\xE9dio com 4px."),t()()(),n(904,"tr",14)(905,"td",15)(906,"div",16)(907,"span",17),e(908," large"),a(909,"br"),t()()(),n(910,"td",21)(911,"p"),e(912,"Tamanho grande com 8px."),t()()()(),n(913,"h4",4)(914,"code",5),e(915,"PoProgressStatus"),t()(),n(916,"div",2)(917,"p"),e(918,"Enum "),n(919,"code"),e(920,"PoProgressStatus"),t(),e(921," para os status de barra de progresso."),t()(),n(922,"h4",10),e(923,"Propriedades"),t(),n(924,"table",11)(925,"tr",12)(926,"th",13),e(927,"Nome"),t(),n(928,"th",13),e(929,"Descri\xE7\xE3o"),t()(),n(930,"tr",14)(931,"td",15)(932,"div",16)(933,"span",17),e(934," Default"),a(935,"br"),t()()(),n(936,"td",21)(937,"p"),e(938,"Define o status "),n(939,"code"),e(940,"default"),t(),e(941," para a barra de progresso."),t()()(),n(942,"tr",14)(943,"td",15)(944,"div",16)(945,"span",17),e(946," Error"),a(947,"br"),t()()(),n(948,"td",21)(949,"p"),e(950,"Define o status de "),n(951,"code"),e(952,"error"),t(),e(953," para a barra de progresso."),t()()(),n(954,"tr",14)(955,"td",15)(956,"div",16)(957,"span",17),e(958," Success"),a(959,"br"),t()()(),n(960,"td",21)(961,"p"),e(962,"Define o status de "),n(963,"code"),e(964,"success"),t(),e(965," para a barra de progresso."),t()()()()())},dependencies:[w],encapsulation:2})}return o})();var Ce=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=4;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(U(ne),U(ie))};static \u0275cmp=c({type:o,selectors:[["ng-component"]],standalone:!1,decls:9,vars:4,consts:[["p-title","Progress",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,i){l&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),a(3,"sample-po-progress-doc"),t(),n(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),a(5,"sample-po-progress-basic-view")(6,"sample-po-progress-labs-view")(7,"sample-po-progress-publication-view")(8,"sample-po-progress-circle-view"),t()()()),l&2&&(p("p-actions",i.actions),s(2),p("p-active",i.activeTab==="doc"),s(2),p("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[H,P,C,Ee,Se,xe,fe,Pe],encapsulation:2})}return o})();var He=[{path:"",component:Ce}],we=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=F({type:o});static \u0275inj=L({imports:[Q.forChild(He),Q]})}return o})();var ft=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=F({type:o});static \u0275inj=L({imports:[ue,we]})}return o})();export{ft as DocPoProgressModule};
