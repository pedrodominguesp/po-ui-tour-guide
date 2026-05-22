import{o as A,p as ge}from"./chunk-WYOAC7KN.js";import{B as q,Hb as w,Ia as de,Ib as _,Ja as G,Mb as be,S as le,U as re,Ya as se,Za as ce,_ as U,a as H,bb as ue,c as pe,ub as Ee,w as Q,za as me}from"./chunk-XOCFD5XY.js";import{$ as M,Ea as s,Fa as n,Ga as e,Ha as p,Hc as oe,I as O,Jb as ne,L as B,Mb as V,Mc as I,Nc as W,O as u,Oa as T,Oc as N,P as E,Pa as b,Pc as z,Qc as j,Ra as ee,Va as k,Wa as P,Xa as C,_a as x,bb as L,cb as t,cd as ie,eb as D,ed as ae,gb as g,gd as K,ha as m,hb as f,ib as h,ma as J,oa as S,pa as F,qb as te,rb as y,ya as Z,za as $}from"./chunk-XD3NZLB4.js";import{a as Y}from"./chunk-GAL4ENT6.js";var Ae=["target"],Me=()=>({label:"PO Popup"}),Te=l=>[l],fe=(()=>{class l{cdr=B(ne);targetRef;ngAfterViewInit(){this.cdr.detectChanges()}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-popup-basic"]],viewQuery:function(a,o){if(a&1&&k(Ae,5,M),a&2){let r;P(r=C())&&(o.targetRef=r.first)}},standalone:!1,decls:4,vars:5,consts:[["target",""],["popup",""],["p-icon","an an-question",1,"po-clickable",3,"click"],[3,"p-actions","p-target"]],template:function(a,o){if(a&1){let r=T();n(0,"po-icon",2,0),b("click",function(){u(r);let i=x(3);return E(i.toggle())}),e(),p(2,"po-popup",3,1)}a&2&&(m(2),s("p-actions",y(3,Te,te(2,Me)))("p-target",o.targetRef))},dependencies:[pe,q],encapsulation:2})}return l})();var Le=l=>({"docs-sample-code-tabs":l}),Se=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-popup-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(p(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Popup - Basic"),e(),n(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popup-basic/sample-po-popup-basic.component.html"),e(),n(13,"pre",7),t(14,`<po-icon p-icon="an an-question" #target class="po-clickable" (click)="popup.toggle()"> </po-icon>
<po-popup #popup [p-actions]="[{ label: 'PO Popup' }]" [p-target]="targetRef"> </po-popup>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popup-basic/sample-po-popup-basic.component.ts"),e(),n(19,"pre",9),t(20,`import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'sample-po-popup-basic',
  templateUrl: './sample-po-popup-basic.component.html',
  standalone: false
})
export class SamplePoPopupBasicComponent implements AfterViewInit {
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('target', { read: ElementRef }) targetRef: ElementRef;

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
`),e()()()()(),n(21,"div",10),p(22,"sample-po-popup-basic"),e(),p(23,"hr")),a&2&&(m(5),L("po-icon "+o.sampleCodeButtonIcon),m(),D(" ",o.sampleCodeButtonLabel),m(),s("ngClass",y(4,Le,o.hideSampleCodeTabs)))},dependencies:[V,A,w,_,fe],encapsulation:2})}return l})();var qe=["target"],xe=(()=>{class l{poNotification=B(me);targetRef;action;actions;customPositions;parentList;position;positions;properties;size;actionOptions=[{label:"Disabled",value:"disabled"},{label:"Separator",value:"separator"},{label:"Selected",value:"selected"},{label:"Visible",value:"visible"}];iconOptions=[{value:"an an-newspaper",label:"an an-newspaper"},{value:"an an-magnifying-glass",label:"an an-magnifying-glass"},{value:"an an-globe",label:"an an-globe"},{label:"fa fa-address-card",value:"fa fa-address-card"},{label:"fa fa-bell",value:"fa fa-bell"}];positionOptions=[{label:"Right",value:"right"},{label:"Right-top",value:"right-top"},{label:"Right-bottom",value:"right-bottom"},{label:"Bottom",value:"bottom"},{label:"Bottom-left",value:"bottom-left"},{label:"Bottom-right",value:"bottom-right"},{label:"Left",value:"left"},{label:"Left-top",value:"left-top"},{label:"Left-bottom",value:"left-bottom"},{label:"Top",value:"top"},{label:"Top-left",value:"top-left"},{label:"Top-right",value:"top-right"}];propertiesOptions=[{value:"hideArrow",label:"Hide arrow"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];ngOnInit(){this.restore()}addAction(d){let a=Y({},d);if(a.action=a.action?this.showAction.bind(this,a.action):void 0,!d.parent)this.actions=[...this.actions,a];else{let o=this.getActionNode(this.actions,d.parent);o?o.subItems=[...o.subItems||[],a]:this.actions=[...this.actions,a]}this.actions=[].concat(this.actions),this.parentList=this.updateParentList(this.actions),this.restoreActionForm()}convertToArray(){this.customPositions=this.positions&&this.positions.length?JSON.parse(this.positions):void 0}restore(){this.actions=[],this.customPositions=[],this.parentList=[],this.position=void 0,this.positions="",this.properties=[],this.size="medium",this.restoreActionForm()}restoreActionForm(){this.action={label:void 0,visible:null,parent:void 0}}getActionNode(d,a){if(!(!d||!Array.isArray(d)||!a))for(let o of d){if(o.label===a||o.value===a)return o;if(o.subItems&&Array.isArray(o.subItems)){let r=this.getActionNode(o.subItems,a);if(r)return r}}}updateParentList(d,a=0,o=[]){return!d||!Array.isArray(d)||d.forEach(r=>{let{label:c}=r;o.push({label:`${"-".repeat(a)} ${c}`,value:c}),r.subItems&&Array.isArray(r.subItems)&&this.updateParentList(r.subItems,a+1,o)}),o}showAction(d){this.poNotification.success(`Action clicked: ${d}`)}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-popup-labs"]],viewQuery:function(a,o){if(a&1&&k(qe,7,M),a&2){let r;P(r=C())&&(o.targetRef=r.first)}},standalone:!1,decls:28,vars:25,consts:[["popup",""],["target",""],["formAction","ngForm"],["f","ngForm"],[3,"p-actions","p-custom-positions","p-hide-arrow","p-position","p-size","p-target"],[1,"po-row","sample-button-container"],[1,"po-offset-xl-5","po-offset-lg-5","po-md-2","po-lg-2"],["p-label","Popup",3,"p-click"],["name","actionLabel","p-label","Label","p-required","",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionAction","p-clean","","p-label","Action",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","actionURL","p-label","URL",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","type","p-label","Type",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","icon","p-label","Icon",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","parent","p-label","Subitems","p-placeholder","Add subitems",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","action","p-columns","4","p-indeterminate","","p-label","Action properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Add Action",1,"po-lg-2","po-md-4",3,"p-click","p-disabled"],["name","customPositions","p-help",'["top", "left", "right-bottom"]',"p-label","Custom positions",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","position","p-label","Position",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(a,o){if(a&1){let r=T();p(0,"po-popup",4,0),n(2,"div",5)(3,"div",6)(4,"po-button",7,1),b("p-click",function(){u(r);let i=x(1);return E(i.toggle())}),e()()(),p(6,"po-divider"),n(7,"form",null,2)(9,"po-input",8),h("ngModelChange",function(i){return u(r),f(o.action.label,i)||(o.action.label=i),E(i)}),e(),n(10,"po-input",9),h("ngModelChange",function(i){return u(r),f(o.action.action,i)||(o.action.action=i),E(i)}),e(),n(11,"po-input",10),h("ngModelChange",function(i){return u(r),f(o.action.url,i)||(o.action.url=i),E(i)}),e(),n(12,"po-select",11),h("ngModelChange",function(i){return u(r),f(o.action.type,i)||(o.action.type=i),E(i)}),e(),n(13,"po-select",12),h("ngModelChange",function(i){return u(r),f(o.action.icon,i)||(o.action.icon=i),E(i)}),e(),n(14,"po-select",13),h("ngModelChange",function(i){return u(r),f(o.action.parent,i)||(o.action.parent=i),E(i)}),e(),n(15,"po-checkbox-group",14),h("ngModelChange",function(i){return u(r),f(o.action,i)||(o.action=i),E(i)}),e(),n(16,"div",15)(17,"po-button",16),b("p-click",function(){return o.addAction(o.action)}),e()()(),p(18,"po-divider"),n(19,"form",null,3)(21,"div",15)(22,"po-input",17),h("ngModelChange",function(i){return u(r),f(o.positions,i)||(o.positions=i),E(i)}),b("p-change",function(){return o.convertToArray()}),e(),n(23,"po-select",18),h("ngModelChange",function(i){return u(r),f(o.position,i)||(o.position=i),E(i)}),e(),n(24,"po-checkbox-group",19),h("ngModelChange",function(i){return u(r),f(o.properties,i)||(o.properties=i),E(i)}),e(),n(25,"po-radio-group",20),h("ngModelChange",function(i){return u(r),f(o.size,i)||(o.size=i),E(i)}),e()(),n(26,"div",15)(27,"po-button",21),b("p-click",function(){u(r);let i=x(8);return x(20).reset(),i.reset(),E(o.restore())}),e()()()}if(a&2){let r=x(8);s("p-actions",o.actions)("p-custom-positions",o.customPositions)("p-hide-arrow",o.properties.includes("hideArrow"))("p-position",o.position)("p-size",o.size)("p-target",o.targetRef),m(9),g("ngModel",o.action.label),m(),g("ngModel",o.action.action),m(),g("ngModel",o.action.url),m(),g("ngModel",o.action.type),s("p-options",o.typeOptions),m(),g("ngModel",o.action.icon),s("p-options",o.iconOptions),m(),g("ngModel",o.action.parent),s("p-options",o.parentList),m(),g("ngModel",o.action),s("p-options",o.actionOptions),m(2),s("p-disabled",r.form.invalid),m(5),g("ngModel",o.positions),m(),g("ngModel",o.position),s("p-options",o.positionOptions),m(),g("ngModel",o.properties),s("p-options",o.propertiesOptions),m(),g("ngModel",o.size),s("p-options",o.sizeOptions)}},dependencies:[j,I,W,z,N,Q,H,le,re,G,se,q],styles:[".sample-button-container[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}"]})}return l})();var Oe=l=>({"docs-sample-code-tabs":l}),ve=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-popup-labs-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(p(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Popup - Labs"),e(),n(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popup-labs/sample-po-popup-labs.component.html"),e(),n(13,"pre",7),t(14,`<po-popup
  #popup
  [p-actions]="actions"
  [p-custom-positions]="customPositions"
  [p-hide-arrow]="properties.includes('hideArrow')"
  [p-position]="position"
  [p-size]="size"
  [p-target]="targetRef"
>
</po-popup>

<div class="po-row sample-button-container">
  <div class="po-offset-xl-5 po-offset-lg-5 po-md-2 po-lg-2">
    <po-button #target p-label="Popup" (p-click)="popup.toggle()"> </po-button>
  </div>
</div>

<po-divider />

<form #formAction="ngForm">
  <po-input class="po-md-6 po-lg-4" name="actionLabel" [(ngModel)]="action.label" p-label="Label" p-required>
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionAction" [(ngModel)]="action.action" p-clean p-label="Action">
  </po-input>

  <po-input class="po-md-6 po-lg-4" name="actionURL" [(ngModel)]="action.url" p-label="URL"> </po-input>

  <po-select class="po-md-6 po-lg-4" name="type" [(ngModel)]="action.type" p-label="Type" [p-options]="typeOptions">
  </po-select>

  <po-select class="po-md-6 po-lg-4" name="icon" [(ngModel)]="action.icon" p-label="Icon" [p-options]="iconOptions">
  </po-select>

  <po-select
    class="po-md-6 po-lg-4"
    name="parent"
    [(ngModel)]="action.parent"
    p-label="Subitems"
    p-placeholder="Add subitems"
    [p-options]="parentList"
  >
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

  <div class="po-row">
    <po-button
      class="po-lg-2 po-md-4"
      p-label="Add Action"
      [p-disabled]="formAction.form.invalid"
      (p-click)="addAction(action)"
    >
    </po-button>
  </div>
</form>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input
      class="po-md-6"
      name="customPositions"
      [(ngModel)]="positions"
      p-help='["top", "left", "right-bottom"]'
      p-label="Custom positions"
      (p-change)="convertToArray()"
    >
    </po-input>

    <po-select
      class="po-md-6 po-lg-3"
      name="position"
      [(ngModel)]="position"
      p-label="Position"
      [p-options]="positionOptions"
    >
    </po-select>

    <po-checkbox-group
      class="po-md-12 po-lg-3"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="size"
      p-columns="4"
      p-label="Size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="sizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="f.reset(); formAction.reset(); restore()">
    </po-button>
  </div>
</form>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popup-labs/sample-po-popup-labs.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoPopupAction,
  PoRadioGroupOption,
  PoSelectOption
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-labs',
  templateUrl: './sample-po-popup-labs.component.html',
  styleUrls: ['./sample-po-popup-labs.component.css'],
  standalone: false
})
export class SamplePoPopupLabsComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  action: PoPopupAction & { parent?: string };
  actions: Array<PoPopupAction>;
  customPositions: Array<string>;
  parentList: Array<PoSelectOption>;
  position: string;
  positions: string;
  properties: Array<string>;
  size: string;

  public readonly actionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Disabled', value: 'disabled' },
    { label: 'Separator', value: 'separator' },
    { label: 'Selected', value: 'selected' },
    { label: 'Visible', value: 'visible' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-newspaper', label: 'an an-newspaper' },
    { value: 'an an-magnifying-glass', label: 'an an-magnifying-glass' },
    { value: 'an an-globe', label: 'an an-globe' },
    { label: 'fa fa-address-card', value: 'fa fa-address-card' },
    { label: 'fa fa-bell', value: 'fa fa-bell' }
  ];

  public readonly positionOptions: Array<PoSelectOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [{ value: 'hideArrow', label: 'Hide arrow' }];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  ngOnInit() {
    this.restore();
  }

  addAction(action: PoPopupAction & { parent?: string }) {
    const newAction: PoPopupAction = { ...action };
    newAction.action = newAction.action ? this.showAction.bind(this, newAction.action) : undefined;

    if (!action.parent) {
      this.actions = [...this.actions, newAction];
    } else {
      const parentNode = this.getActionNode(this.actions, action.parent);
      if (parentNode) {
        parentNode.subItems = [...(parentNode.subItems || []), newAction];
      } else {
        this.actions = [...this.actions, newAction];
      }
    }

    this.actions = [].concat(this.actions);
    this.parentList = this.updateParentList(this.actions);

    this.restoreActionForm();
  }

  convertToArray() {
    this.customPositions = this.positions && this.positions.length ? JSON.parse(this.positions) : undefined;
  }

  restore() {
    this.actions = [];
    this.customPositions = [];
    this.parentList = [];
    this.position = undefined;
    this.positions = '';
    this.properties = [];
    this.size = 'medium';
    this.restoreActionForm();
  }

  restoreActionForm() {
    this.action = {
      label: undefined,
      visible: null,
      parent: undefined
    } as any;
  }

  private getActionNode(items: Array<PoPopupAction>, value: string): PoPopupAction | undefined {
    if (!items || !Array.isArray(items) || !value) {
      return undefined;
    }

    for (const item of items) {
      if (item.label === value || (item as any).value === value) {
        return item;
      }

      if (item.subItems && Array.isArray(item.subItems)) {
        const found = this.getActionNode(item.subItems, value);
        if (found) {
          return found;
        }
      }
    }

    return undefined;
  }

  private updateParentList(
    items: Array<PoPopupAction>,
    level = 0,
    parentList: Array<PoSelectOption> = []
  ): Array<PoSelectOption> {
    if (!items || !Array.isArray(items)) {
      return parentList;
    }

    items.forEach(item => {
      const { label } = item;
      parentList.push({ label: \`\${'-'.repeat(level)} \${label}\`, value: label });

      if (item.subItems && Array.isArray(item.subItems)) {
        this.updateParentList(item.subItems, level + 1, parentList);
      }
    });

    return parentList;
  }

  private showAction(action: string): any {
    this.poNotification.success(\`Action clicked: \${action}\`);
  }
}
`),e()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),t(24,"sample-po-popup-labs/sample-po-popup-labs.component.css"),e(),n(25,"pre",11),t(26,`.sample-button-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
`),e()()()()(),n(27,"div",12),p(28,"sample-po-popup-labs"),e(),p(29,"hr")),a&2&&(m(5),L("po-icon "+o.sampleCodeButtonIcon),m(),D(" ",o.sampleCodeButtonLabel),m(),s("ngClass",y(4,Oe,o.hideSampleCodeTabs)))},dependencies:[V,A,w,_,xe],encapsulation:2})}return l})();var Fe=["formEmail"],Ie=["target"];function We(l,Ue){if(l&1&&(n(0,"div")(1,"div",6),p(2,"po-info",20),e(),p(3,"po-divider"),e()),l&2){let d=ee();m(2),s("p-value",d.cc)}}var Pe=(()=>{class l{formEmail;targetRef;poModal;cc;emailText;from;popupActions;primaryAction;subject;to;ngOnInit(){this.popupActions=[{icon:"an an-plus",label:"Upper Text",type:"default",action:this.upper.bind(this)},{icon:"an an-minus",label:"Lower Text",type:"default",action:this.lower.bind(this)},{icon:"an an-x",label:"Clear",type:"danger",action:this.clear.bind(this),separator:!0}],this.primaryAction={label:"Confirmar",action:()=>{this.poModal.close(),this.reset()}}}send(){this.poModal.open()}reset(){this.formEmail.reset()}clear(){this.emailText=void 0}lower(){this.emailText=this.emailText&&this.emailText.toLowerCase()}upper(){this.emailText=this.emailText&&this.emailText.toUpperCase()}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-popup-email"]],viewQuery:function(a,o){if(a&1&&k(Fe,7)(Ie,7,M)(U,7),a&2){let r;P(r=C())&&(o.formEmail=r.first),P(r=C())&&(o.targetRef=r.first),P(r=C())&&(o.poModal=r.first)}},standalone:!1,decls:31,vars:14,consts:[["popup",""],["formEmail","ngForm"],["target",""],["p-position","right",3,"p-actions","p-target"],["p-popup-header-template",""],[1,"sample-popup-header-template"],[1,"po-row"],["p-title","Send email",1,"po-sm-12"],["name","to","p-clean","","p-label","To","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","cc","p-clean","","p-label","CC",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","subject","p-clean","","p-label","Subject","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel"],["name","message","p-help","Click show settings popup","p-label","Message","p-required","",1,"po-lg-10",3,"ngModelChange","click","ngModel"],["src","./assets/graphics/po.png",1,"po-lg-2","sample-logo-po"],["p-label","Send","p-kind","primary",1,"po-md-4",3,"p-click","p-disabled"],["p-label","Reset",1,"po-md-4",3,"p-click","p-disabled"],["p-title","Email successfully sent",3,"p-primary-action"],["p-label","From:",1,"po-md-6",3,"p-value"],["p-label","To:",1,"po-md-6",3,"p-value"],["p-label","subject:",1,"po-md-12",3,"p-value"],["name","text","p-label","E-mail","p-readonly","","p-rows","6","ngDefaultControl","",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","CC:",1,"po-md-12",3,"p-value"]],template:function(a,o){if(a&1){let r=T();n(0,"po-popup",3,0)(2,"div",4)(3,"div",5),t(4,"Settings"),e()()(),n(5,"div",6)(6,"po-widget",7)(7,"form",null,1)(9,"div",6)(10,"po-email",8),h("ngModelChange",function(i){return u(r),f(o.to,i)||(o.to=i),E(i)}),e(),n(11,"po-email",9),h("ngModelChange",function(i){return u(r),f(o.cc,i)||(o.cc=i),E(i)}),e(),n(12,"po-input",10),h("ngModelChange",function(i){return u(r),f(o.subject,i)||(o.subject=i),E(i)}),e()(),n(13,"div",6)(14,"po-textarea",11,2),h("ngModelChange",function(i){return u(r),f(o.emailText,i)||(o.emailText=i),E(i)}),b("click",function(){u(r);let i=x(1);return E(i.toggle())}),e(),p(16,"img",12),e(),n(17,"div",6)(18,"po-button",13),b("p-click",function(){return o.send()}),e(),n(19,"po-button",14),b("p-click",function(){return o.reset()}),e()()()()(),n(20,"po-modal",15)(21,"div",6),p(22,"po-info",16)(23,"po-info",17),e(),p(24,"po-divider"),Z(25,We,4,1,"div"),n(26,"div",6),p(27,"po-info",18),e(),p(28,"po-divider"),n(29,"div",6)(30,"po-textarea",19),h("ngModelChange",function(i){return u(r),f(o.emailText,i)||(o.emailText=i),E(i)}),e()()()}if(a&2){let r=x(8);s("p-actions",o.popupActions)("p-target",o.targetRef),m(10),g("ngModel",o.to),m(),g("ngModel",o.cc),m(),g("ngModel",o.subject),m(2),g("ngModel",o.emailText),m(4),s("p-disabled",r.form.invalid),m(),s("p-disabled",r.form.invalid),m(),s("p-primary-action",o.primaryAction),m(2),s("p-value",o.from),m(),s("p-value",o.to),m(2),$(o.cc!==""?25:-1),m(2),s("p-value",o.subject),m(3),g("ngModel",o.emailText)}},dependencies:[j,oe,I,W,z,N,Q,H,de,G,ce,ue,U,q,be],styles:[".sample-logo-po[_ngcontent-%COMP%]{height:15%;padding-top:2.5%}.sample-popup-header-template[_ngcontent-%COMP%]{border-top-left-radius:3px;border-top-right-radius:3px;color:#0c9abe;padding-bottom:5%;padding-left:25%;padding-top:5%}"]})}return l})();var ze=l=>({"docs-sample-code-tabs":l}),Ce=(()=>{class l{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-popup-email-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(p(0,"br"),n(1,"blockquote",0)(2,"label",1),t(3,"PO Popup Email"),e(),n(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),p(5,"span"),t(6),e()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),t(12,"sample-po-popup-email/sample-po-popup-email.component.html"),e(),n(13,"pre",7),t(14,`<po-popup #popup p-position="right" [p-actions]="popupActions" [p-target]="targetRef">
  <div p-popup-header-template>
    <div class="sample-popup-header-template">Settings</div>
  </div>
</po-popup>

<div class="po-row">
  <po-widget class="po-sm-12" p-title="Send email">
    <form #formEmail="ngForm">
      <div class="po-row">
        <po-email class="po-sm-12" name="to" [(ngModel)]="to" p-clean p-label="To" p-required> </po-email>

        <po-email class="po-sm-12" name="cc" [(ngModel)]="cc" p-clean p-label="CC"> </po-email>

        <po-input class="po-sm-12" name="subject" [(ngModel)]="subject" p-clean p-label="Subject" p-required>
        </po-input>
      </div>

      <div class="po-row">
        <po-textarea
          #target
          class="po-lg-10"
          name="message"
          [(ngModel)]="emailText"
          p-help="Click show settings popup"
          p-label="Message"
          p-required
          (click)="popup.toggle()"
        >
        </po-textarea>

        <img class="po-lg-2 sample-logo-po" src="./assets/graphics/po.png" />
      </div>

      <div class="po-row">
        <po-button
          class="po-md-4"
          p-label="Send"
          p-kind="primary"
          [p-disabled]="formEmail.form.invalid"
          (p-click)="send()"
        >
        </po-button>
        <po-button class="po-md-4" p-label="Reset" [p-disabled]="formEmail.form.invalid" (p-click)="reset()">
        </po-button>
      </div>
    </form>
  </po-widget>
</div>

<po-modal p-title="Email successfully sent" [p-primary-action]="primaryAction">
  <div class="po-row">
    <po-info class="po-md-6" p-label="From:" [p-value]="from"> </po-info>

    <po-info class="po-md-6" p-label="To:" [p-value]="to"> </po-info>
  </div>

  <po-divider />

  @if (cc !== '') {
    <div>
      <div class="po-row">
        <po-info class="po-md-12" p-label="CC:" [p-value]="cc"> </po-info>
      </div>
      <po-divider />
    </div>
  }

  <div class="po-row">
    <po-info class="po-md-12" p-label="subject:" [p-value]="subject"> </po-info>
  </div>

  <po-divider />

  <div class="po-row">
    <po-textarea
      class="po-md-12"
      name="text"
      [(ngModel)]="emailText"
      p-label="E-mail"
      p-readonly
      p-rows="6"
      ngDefaultControl
    >
    </po-textarea>
  </div>
</po-modal>
`),e()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),t(18,"sample-po-popup-email/sample-po-popup-email.component.ts"),e(),n(19,"pre",9),t(20,`import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoPopupAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-popup-email',
  templateUrl: './sample-po-popup-email.component.html',
  styleUrls: ['./sample-po-popup-email.component.css'],
  standalone: false
})
export class SamplePoPopupEmailComponent implements OnInit {
  @ViewChild('formEmail', { static: true }) formEmail: UntypedFormControl;

  @ViewChild('target', { read: ElementRef, static: true }) targetRef: ElementRef;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  cc: string;
  emailText: string;
  from: string;
  popupActions: Array<PoPopupAction>;
  primaryAction: PoModalAction;
  subject: string;
  to: string;

  ngOnInit() {
    this.popupActions = [
      { icon: 'an an-plus', label: 'Upper Text', type: 'default', action: this.upper.bind(this) },
      { icon: 'an an-minus', label: 'Lower Text', type: 'default', action: this.lower.bind(this) },
      { icon: 'an an-x', label: 'Clear', type: 'danger', action: this.clear.bind(this), separator: true }
    ];

    this.primaryAction = {
      label: 'Confirmar',
      action: () => {
        this.poModal.close();
        this.reset();
      }
    };
  }

  send() {
    this.poModal.open();
  }

  reset() {
    this.formEmail.reset();
  }

  private clear() {
    this.emailText = undefined;
  }

  private lower() {
    this.emailText = this.emailText && this.emailText.toLowerCase();
  }

  private upper() {
    this.emailText = this.emailText && this.emailText.toUpperCase();
  }
}
`),e()()(),n(21,"po-tab",10)(22,"div")(23,"label",6),t(24,"sample-po-popup-email/sample-po-popup-email.component.css"),e(),n(25,"pre",11),t(26,`.sample-logo-po {
  height: 15%;
  padding-top: 2.5%;
}

.sample-popup-header-template {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #0c9abe;
  padding-bottom: 5%;
  padding-left: 25%;
  padding-top: 5%;
}
`),e()()()()(),n(27,"div",12),p(28,"sample-po-popup-email"),e(),p(29,"hr")),a&2&&(m(5),L("po-icon "+o.sampleCodeButtonIcon),m(),D(" ",o.sampleCodeButtonLabel),m(),s("ngClass",y(4,ze,o.hideSampleCodeTabs)))},dependencies:[V,A,w,_,Pe],encapsulation:2})}return l})();var ye=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275cmp=S({type:l,selectors:[["sample-po-popup-doc"]],standalone:!1,decls:890,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPopupAction[]"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string[]"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"]],template:function(a,o){a&1&&(n(0,"div",0)(1,"p",1)(2,"code"),t(3,"import { PoPopupModule } from '@po-ui/ng-components';"),e()(),n(4,"div",2)(5,"p"),t(6,"M\xF3dulo do componente po-popup."),e()(),n(7,"h3",3),t(8,"Componente"),e(),n(9,"h4",4)(10,"code",5),t(11,"PoPopupComponent"),e()(),n(12,"div",2)(13,"p"),t(14,"O componente "),n(15,"code"),t(16,"po-popup"),e(),t(17,` \xE9 um container pequeno recomendado para a\xE7\xF5es de navega\xE7\xE3o:
Ele abre sobreposto aos outros componentes.`),e(),n(18,"p"),t(19,"Suporta subn\xEDveis (submenus) quando as a\xE7\xF5es possuem a propriedade "),n(20,"code"),t(21,"subItems"),e(),t(22,`,
habilitando navega\xE7\xE3o hier\xE1rquica automaticamente.`),e(),n(23,"p"),t(24,"\xC9 poss\xEDvel escolher as posi\xE7\xF5es do "),n(25,"code"),t(26,"po-popup"),e(),t(27," em rela\xE7\xE3o ao componente alvo, para isto veja a propriedade "),n(28,"code"),t(29,"p-position"),e(),t(30,"."),e(),n(31,"p"),t(32,"Tamb\xE9m \xE9 poss\xEDvel informar um "),n(33,"em"),t(34,"template"),e(),n(35,"em"),t(36,"header"),e(),t(37," para o "),n(38,"code"),t(39,"po-popup"),e(),t(40,`, que ser\xE1 exibido acima das a\xE7\xF5es.
Para funcionar corretamente \xE9 preciso adicionar a propriedade `),n(41,"code"),t(42,"p-popup-header-template"),e(),t(43," no elemento que servir\xE1 de template, por exemplo:"),e(),n(44,"pre")(45,"code"),t(46,`<po-popup [p-target]="target">
  <div p-popup-header-template>
    <div>
      Dev PO
    </div>
    <div>
      dev.po@po-ui.com.br
    </div>
  </div>
</po-popup >
`),e()(),n(47,"h4"),t(48,"Tokens customiz\xE1veis"),e(),n(49,"p"),t(50,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),n(51,"blockquote")(52,"p"),t(53,"Para maiores informa\xE7\xF5es, acesse o guia "),n(54,"a",6),t(55,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),t(56,"."),e()(),n(57,"table")(58,"thead")(59,"tr")(60,"th"),t(61,"Propriedade"),e(),n(62,"th"),t(63,"Descri\xE7\xE3o"),e(),n(64,"th"),t(65,"Valor Padr\xE3o"),e()()(),n(66,"tbody")(67,"tr")(68,"td")(69,"strong"),t(70,"Default Values"),e()(),p(71,"td")(72,"td"),e(),n(73,"tr")(74,"td")(75,"code"),t(76,"--border-radius"),e()(),n(77,"td"),t(78,"Cont\xE9m o valor do raio dos cantos do elemento\xA0"),e(),n(79,"td")(80,"code"),t(81,"var(--border-radius-md)"),e()()(),n(82,"tr")(83,"td")(84,"code"),t(85,"--border-width"),e()(),n(86,"td"),t(87,"Cont\xE9m o valor da largura dos cantos do elemento\xA0"),e(),n(88,"td")(89,"code"),t(90,"var(--border-width-sm)"),e()()(),n(91,"tr")(92,"td")(93,"code"),t(94,"--border-color"),e()(),n(95,"td"),t(96,"Cor da borda"),e(),n(97,"td")(98,"code"),t(99,"var(--color-neutral-light-20)"),e()()(),n(100,"tr")(101,"td")(102,"code"),t(103,"--background"),e()(),n(104,"td"),t(105,"Cor do background"),e(),n(106,"td")(107,"code"),t(108,"var(--color-neutral-light-00)"),e()()(),n(109,"tr")(110,"td")(111,"code"),t(112,"--shadow"),e()(),n(113,"td"),t(114,"Cont\xE9m o valor da sombra do elemento"),e(),n(115,"td")(116,"code"),t(117,"var(--shadow-md)"),e()()(),n(118,"tr")(119,"td")(120,"strong"),t(121,"po-popup po-item-list"),e()(),p(122,"td")(123,"td"),e(),n(124,"tr")(125,"td")(126,"code"),t(127,"--font-family"),e()(),n(128,"td"),t(129,"Fam\xEDlia tipogr\xE1fica usada"),e(),n(130,"td")(131,"code"),t(132,"var(--font-family-theme)"),e()()(),n(133,"tr")(134,"td")(135,"code"),t(136,"--font-size"),e()(),n(137,"td"),t(138,"Tamanho da fonte"),e(),n(139,"td")(140,"code"),t(141,"var(--font-size-default)"),e()()(),n(142,"tr")(143,"td")(144,"code"),t(145,"--line-height"),e()(),n(146,"td"),t(147,"Tamanho da label"),e(),n(148,"td")(149,"code"),t(150,"var(--line-height-md)"),e()()(),n(151,"tr")(152,"td")(153,"strong"),t(154,"Action"),e()(),p(155,"td")(156,"td"),e(),n(157,"tr")(158,"td")(159,"code"),t(160,"--font-weight"),e()(),n(161,"td"),t(162,"Peso da fonte"),e(),n(163,"td")(164,"code"),t(165,"var(--font-weight-bold)"),e()()(),n(166,"tr")(167,"td")(168,"code"),t(169,"--color"),e()(),n(170,"td"),t(171,"Cor principal do popup"),e(),n(172,"td")(173,"code"),t(174,"var(--color-action-default)"),e()()(),n(175,"tr")(176,"td")(177,"strong"),t(178,"Hover"),e()(),p(179,"td")(180,"td"),e(),n(181,"tr")(182,"td")(183,"code"),t(184,"--color-hover"),e()(),n(185,"td"),t(186,"Cor principal no estado hover"),e(),n(187,"td")(188,"code"),t(189,"var(--color-brand-01-darkest)"),e()()(),n(190,"tr")(191,"td")(192,"code"),t(193,"--background-hover"),e()(),n(194,"td"),t(195,"Cor de background no estado hover"),e(),n(196,"td")(197,"code"),t(198,"var(--color-brand-01-lighter)"),e()()(),n(199,"tr")(200,"td")(201,"strong"),t(202,"Focused"),e()(),p(203,"td")(204,"td"),e(),n(205,"tr")(206,"td")(207,"code"),t(208,"--outline-color-focused"),e()(),n(209,"td"),t(210,"Cor do outline do estado de focus"),e(),n(211,"td")(212,"code"),t(213,"var(--color-action-focus)"),e()()(),n(214,"tr")(215,"td")(216,"strong"),t(217,"Pressed"),e()(),p(218,"td")(219,"td"),e(),n(220,"tr")(221,"td")(222,"code"),t(223,"--background-pressed"),e()(),n(224,"td"),t(225,"Cor de background no estado de pressionado\xA0"),e(),n(226,"td")(227,"code"),t(228,"var(--color-brand-01-light)"),e()()(),n(229,"tr")(230,"td")(231,"strong"),t(232,"Disabled"),e()(),p(233,"td")(234,"td"),e(),n(235,"tr")(236,"td")(237,"code"),t(238,"--color-disabled"),e()(),n(239,"td"),t(240,"Cor principal no estado disabled"),e(),n(241,"td")(242,"code"),t(243,"var(--color-action-disabled)"),e()()(),n(244,"tr")(245,"td")(246,"strong"),t(247,"Selected"),e()(),p(248,"td")(249,"td"),e(),n(250,"tr")(251,"td")(252,"code"),t(253,"--font-weight-selected"),e()(),n(254,"td"),t(255,"Peso da fonte no estado selecionado"),e(),n(256,"td")(257,"code"),t(258,"var(--font-weight-bold)"),e()()(),n(259,"tr")(260,"td")(261,"code"),t(262,"--background-selected"),e()(),n(263,"td"),t(264,"Cor de background no estado selecionado"),e(),n(265,"td")(266,"code"),t(267,"var(--color-brand-01-lightest)"),e()()(),n(268,"tr")(269,"td")(270,"strong"),t(271,"Option e check"),e()(),p(272,"td")(273,"td"),e(),n(274,"tr")(275,"td")(276,"code"),t(277,"--color-option"),e()(),n(278,"td"),t(279,"Cor principa no estado Option/check"),e(),n(280,"td")(281,"code"),t(282,"var(--color-neutral-dark-90)"),e()()()()()(),n(283,"div",7)(284,"h4",8),t(285,"Seletor"),e(),n(286,"pre",9),t(287,`<po-popup
    p-actions="PoPopupAction[]"
    p-custom-positions="string[]"
    p-hide-arrow="boolean"
    p-position="string"
    p-size="string"
    p-target="any" >
</po-popup>
`),e()(),n(288,"h4",10),t(289,"Propriedades"),e(),n(290,"table",11)(291,"tr",12)(292,"th",13),t(293,"Nome"),e(),n(294,"th",13),t(295,"Tipo"),e(),n(296,"th",13),t(297,"Padr\xE3o"),e(),n(298,"th",13),t(299,"Descri\xE7\xE3o"),e()(),n(300,"tr",14)(301,"td",15)(302,"div",16)(303,"span",17),t(304," p-actions"),p(305,"br"),e()()(),n(306,"td",18)(307,"code",19),t(308,"PoPopupAction[]"),e()(),n(309,"td",20),t(310,"-"),e(),n(311,"td",21)(312,"p"),t(313,"Lista de a\xE7\xF5es que ser\xE3o exibidas no componente."),e()()(),n(314,"tr",14)(315,"td",15)(316,"div",16)(317,"span",17),t(318," p-custom-positions"),p(319,"br"),e()()(),n(320,"td",18)(321,"code",22),t(322,"string[]"),e()(),n(323,"td",20),t(324,"-"),e(),n(325,"td",21)(326,"em")(327,"strong"),t(328,"(opcional)"),e()(),n(329,"p"),t(330,"Define as posi\xE7\xF5es e a sequ\xEAncia que o "),n(331,"code"),t(332,"po-popup"),e(),t(333,` poder\xE1 rotacionar. A sequ\xEAncia ser\xE1 definida pela ordem passada
no `),n(334,"em"),t(335,"array"),e(),t(336,". Caso n\xE3o seja definido, o "),n(337,"code"),t(338,"po-popup"),e(),t(339," ir\xE1 rotacionar em todas as posi\xE7\xF5es v\xE1lidas."),e(),n(340,"blockquote")(341,"p"),t(342,"O componente sempre ir\xE1 abrir na posi\xE7\xE3o definida no "),n(343,"code"),t(344,"p-position"),e(),t(345,` e caso n\xE3o caiba na posi\xE7\xE3o definida o mesmo
ir\xE1 rotacionar seguindo a ordem definida pelo `),n(346,"code"),t(347,"p-custom-position"),e(),t(348,"."),e()(),n(349,"p"),t(350,"Posi\xE7\xF5es v\xE1lidas:"),e(),n(351,"ul")(352,"li")(353,"code"),t(354,"right"),e(),t(355,": Posiciona o po-popup no lado direito do componente alvo."),e(),n(356,"li")(357,"code"),t(358,"right-bottom"),e(),t(359,": Posiciona o po-popup no lado direito inferior do componente alvo."),e(),n(360,"li")(361,"code"),t(362,"right-top"),e(),t(363,": Posiciona o po-popup no lado direito superior do componente alvo."),e(),n(364,"li")(365,"code"),t(366,"bottom"),e(),t(367,": Posiciona o po-popup abaixo do componente alvo."),e(),n(368,"li")(369,"code"),t(370,"bottom-left"),e(),t(371,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),e(),n(372,"li")(373,"code"),t(374,"bottom-right"),e(),t(375,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),e(),n(376,"li")(377,"code"),t(378,"left"),e(),t(379,": Posiciona o po-popup no lado esquerdo do componente alvo."),e(),n(380,"li")(381,"code"),t(382,"left-top"),e(),t(383,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),e(),n(384,"li")(385,"code"),t(386,"left-bottom"),e(),t(387,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),e(),n(388,"li")(389,"code"),t(390,"top"),e(),t(391,": Posiciona o po-popup acima do componente alvo."),e(),n(392,"li")(393,"code"),t(394,"top-right"),e(),t(395,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),e(),n(396,"li")(397,"code"),t(398,"top-left"),e(),t(399,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),e()()()(),n(400,"tr",14)(401,"td",15)(402,"div",16)(403,"span",17),t(404," p-hide-arrow"),p(405,"br"),e()()(),n(406,"td",18)(407,"code",23),t(408,"boolean"),e()(),n(409,"td",20)(410,"p")(411,"code"),t(412,"false"),e()()(),n(413,"td",21)(414,"em")(415,"strong"),t(416,"(opcional)"),e()(),n(417,"p"),t(418,"Oculta a seta do componente "),n(419,"em"),t(420,"popup"),e(),t(421,"."),e()()(),n(422,"tr",14)(423,"td",15)(424,"div",16)(425,"span",17),t(426," p-position"),p(427,"br"),e()()(),n(428,"td",18)(429,"code",24),t(430,"string"),e()(),n(431,"td",20)(432,"p")(433,"code"),t(434,"bottom-left"),e()()(),n(435,"td",21)(436,"em")(437,"strong"),t(438,"(opcional)"),e()(),n(439,"p"),t(440,"Define a posi\xE7\xE3o inicial que o "),n(441,"code"),t(442,"po-popup"),e(),t(443,` abrir\xE1 em rela\xE7\xE3o ao componente alvo. Sugere-se que seja
usada a orienta\xE7\xE3o `),n(444,"code"),t(445,"bottom-left"),e(),t(446,` (abaixo e a esquerda), por\xE9m o mesmo \xE9 flex\xEDvel e ser\xE1 rotacionado
automaticamente para se adequar a tela, caso necess\xE1rio.`),e(),n(447,"blockquote")(448,"p"),t(449,"Caso seja definido um "),n(450,"code"),t(451,"p-custom-positions"),e(),t(452," o componente ir\xE1 abrir na posi\xE7\xE3o definida na propriedade "),n(453,"code"),t(454,"p-position"),e(),t(455,`
e caso n\xE3o caiba na posi\xE7\xE3o inicial ele ir\xE1 rotacionar seguindo a ordem de posi\xE7\xF5es definidas no `),n(456,"code"),t(457,"p-custom-positions"),e(),t(458,"."),e()(),n(459,"p"),t(460,"Posi\xE7\xF5es v\xE1lidas:"),e(),n(461,"ul")(462,"li")(463,"code"),t(464,"right"),e(),t(465,": Posiciona o po-popup no lado direito do componente alvo."),e(),n(466,"li")(467,"code"),t(468,"right-bottom"),e(),t(469,": Posiciona o po-popup no lado direito inferior do componente alvo."),e(),n(470,"li")(471,"code"),t(472,"right-top"),e(),t(473,": Posiciona o po-popup no lado direito superior do componente alvo."),e(),n(474,"li")(475,"code"),t(476,"bottom"),e(),t(477,": Posiciona o po-popup abaixo do componente alvo."),e(),n(478,"li")(479,"code"),t(480,"bottom-left"),e(),t(481,": Posiciona o po-popup abaixo e \xE0 esquerda do componente alvo."),e(),n(482,"li")(483,"code"),t(484,"bottom-right"),e(),t(485,": Posiciona o po-popup abaixo e \xE0 direita do componente alvo."),e(),n(486,"li")(487,"code"),t(488,"left"),e(),t(489,": Posiciona o po-popup no lado esquerdo do componente alvo."),e(),n(490,"li")(491,"code"),t(492,"left-top"),e(),t(493,": Posiciona o po-popup no lado esquerdo superior do componente alvo."),e(),n(494,"li")(495,"code"),t(496,"left-bottom"),e(),t(497,": Posiciona o po-popup no lado esquerdo inferior do componente alvo."),e(),n(498,"li")(499,"code"),t(500,"top"),e(),t(501,": Posiciona o po-popup acima do componente alvo."),e(),n(502,"li")(503,"code"),t(504,"top-right"),e(),t(505,": Posiciona o po-popup acima e \xE0 direita do componente alvo."),e(),n(506,"li")(507,"code"),t(508,"top-left"),e(),t(509,": Posiciona o po-popup acima e \xE0 esquerda do componente alvo."),e()()()(),n(510,"tr",14)(511,"td",15)(512,"div",16)(513,"span",17),t(514," p-size"),p(515,"br"),e()()(),n(516,"td",18)(517,"code",24),t(518,"string"),e()(),n(519,"td",20)(520,"p")(521,"code"),t(522,"medium"),e()()(),n(523,"td",21)(524,"em")(525,"strong"),t(526,"(opcional)"),e()(),n(527,"p"),t(528,"Define o tamanho dos componentes de formul\xE1rio no template:"),e(),n(529,"ul")(530,"li")(531,"code"),t(532,"small"),e(),t(533,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),e(),n(534,"li")(535,"code"),t(536,"medium"),e(),t(537,": aplica a medida medium de cada componente."),e()(),n(538,"blockquote")(539,"p"),t(540,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(541,"code"),t(542,"medium"),e(),t(543,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(544,"a",25),t(545,"po-theme"),e(),t(546,"."),e()()()(),n(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),t(551," p-target"),p(552,"br"),e()()(),n(553,"td",18)(554,"code",26),t(555,"any"),e()(),n(556,"td",20),t(557,"-"),e(),n(558,"td",21)(559,"p"),t(560,"Para utilizar o "),n(561,"code"),t(562,"po-popup"),e(),t(563,` deve-se colocar uma vari\xE1vel local no componente que disparar\xE1 o evento
de abertura no mesmo e com isso, invocar\xE1 a fun\xE7\xE3o `),n(564,"code"),t(565,"toggle"),e(),t(566,", por exemplo:"),e(),n(567,"pre")(568,"code"),t(569,`<span #icon class="an an-credit-card" (click)="popup.toggle()">
  Credit Actions
</span>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="icon">
</po-popup>
`),e()(),n(570,"p"),t(571,"Caso o elemento alvo for um componente, ser\xE1 preciso obter o "),n(572,"code"),t(573,"ElementRef"),e(),t(574," do mesmo e pass\xE1-lo \xE0 propriedade, por exemplo:"),e(),n(575,"pre")(576,"code"),t(577,`// component.html

<po-button #poButton
  p-label="Open Popover"
  (p-click)="popup.toggle()">
</po-button>

<po-popup #popup
  [p-actions]="actions"
  [p-target]="poButtonRef">
</po-popup>

// component.ts

@ViewChild('poButton', { read: ElementRef }) poButtonRef: ElementRef;
`),e()()()()(),n(578,"h3",10),t(579,"M\xE9todos"),e(),n(580,"table",27)(581,"tr",14)(582,"th",28)(583,"div",16)(584,"h4")(585,"span",17),t(586," close "),e()()()()(),n(587,"tr",21)(588,"td",21)(589,"p"),t(590,"Fecha o componente "),n(591,"em"),t(592,"popup"),e(),t(593,"."),e(),n(594,"blockquote")(595,"p"),t(596,"Por padr\xE3o, este comportamento \xE9 acionado somente ao clicar fora do componente ou em determinada a\xE7\xE3o / url."),e()()()()(),p(597,"br"),n(598,"table",27)(599,"tr",14)(600,"th",28)(601,"div",16)(602,"h4")(603,"span",17),t(604," open "),e()()()()(),n(605,"tr",21)(606,"td",21)(607,"p"),t(608,"Abre o componente "),n(609,"em"),t(610,"popup"),e(),t(611,"."),e(),n(612,"blockquote")(613,"p"),t(614,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),e()()()()(),p(615,"br"),n(616,"table",27)(617,"tr",14)(618,"th",28)(619,"div",16)(620,"h4")(621,"span",17),t(622," toggle "),e()()()()(),n(623,"tr",21)(624,"td",21)(625,"p"),t(626,"Respons\xE1vel por abrir e fechar o "),n(627,"em"),t(628,"popup"),e(),t(629,"."),e(),n(630,"p"),t(631,"Quando disparado abrir\xE1 o "),n(632,"em"),t(633,"popup"),e(),t(634," e caso o mesmo j\xE1 estiver aberto e possuir o mesmo "),n(635,"code"),t(636,"target"),e(),t(637," ir\xE1 fecha-lo."),e(),n(638,"p"),t(639,"\xC9 poss\xEDvel informar um par\xE2metro que ser\xE1 utilizado na execu\xE7\xE3o da a\xE7\xE3o do item e na fun\xE7\xE3o de desabilitar."),e()()()(),p(640,"br"),n(641,"h3"),t(642,"Interfaces"),e(),n(643,"h4",29)(644,"code",5),t(645,"PoPopupAction"),e()(),n(646,"div",2)(647,"p"),t(648,"Interface para lista de a\xE7\xF5es do componente."),e()(),n(649,"h4",10),t(650,"Propriedades"),e(),n(651,"table",11)(652,"tr",12)(653,"th",13),t(654,"Nome"),e(),n(655,"th",13),t(656,"Tipo"),e(),n(657,"th",13),t(658,"Descri\xE7\xE3o"),e()(),n(659,"tr",14)(660,"td",15)(661,"div",16)(662,"span",17),t(663," action"),p(664,"br"),e()()(),n(665,"td",18)(666,"code",30),t(667,"Function"),e()(),n(668,"td",21)(669,"em")(670,"strong"),t(671,"(opcional)"),e()(),n(672,"p"),t(673,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),e(),n(674,"p"),t(675,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),n(676,"code"),t(677,"subItems"),e(),t(678,"."),e(),n(679,"blockquote")(680,"p"),t(681,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),n(682,"em"),t(683,"bind"),e(),t(684,`:
`),n(685,"code"),t(686,"action: this.myFunction.bind(this)"),e()()()()(),n(687,"tr",14)(688,"td",15)(689,"div",16)(690,"span",17),t(691," disabled"),p(692,"br"),e()()(),n(693,"td",18)(694,"code",23),t(695,"boolean "),e(),n(696,"code",30),t(697," Function"),e()(),n(698,"td",21)(699,"em")(700,"strong"),t(701,"(opcional)"),e()(),n(702,"p"),t(703,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),e()()(),n(704,"tr",14)(705,"td",15)(706,"div",16)(707,"span",17),t(708," icon"),p(709,"br"),e()()(),n(710,"td",18)(711,"code",24),t(712,"string "),e(),n(713,"code",31),t(714," TemplateRef<void>"),e()(),n(715,"td",21)(716,"em")(717,"strong"),t(718,"(opcional)"),e()(),n(719,"p"),t(720,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),e(),n(721,"p"),t(722,"Aceita \xEDcones da "),n(723,"a",32),t(724,"Biblioteca de \xEDcones"),e(),t(725,`, fontes externas (ex: Font Awesome)
ou um `),n(726,"code"),t(727,"TemplateRef"),e(),t(728," para \xEDcones customizados."),e(),n(729,"pre")(730,"code"),t(731,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),e()()()(),n(732,"tr",14)(733,"td",15)(734,"div",16)(735,"span",17),t(736," label"),p(737,"br"),e()()(),n(738,"td",18)(739,"code",24),t(740,"string"),e()(),n(741,"td",21)(742,"p"),t(743,"R\xF3tulo da a\xE7\xE3o."),e(),n(744,"p"),t(745,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),n(746,"code"),t(747,"subItems"),e(),t(748,"."),e()()(),n(749,"tr",14)(750,"td",15)(751,"div",16)(752,"span",17),t(753," selected"),p(754,"br"),e()()(),n(755,"td",18)(756,"code",23),t(757,"boolean"),e()(),n(758,"td",21)(759,"em")(760,"strong"),t(761,"(opcional)"),e()(),n(762,"p"),t(763,"Define se a a\xE7\xE3o est\xE1 selecionada."),e()()(),n(764,"tr",14)(765,"td",15)(766,"div",16)(767,"span",17),t(768," separator"),p(769,"br"),e()()(),n(770,"td",18)(771,"code",23),t(772,"boolean"),e()(),n(773,"td",21)(774,"em")(775,"strong"),t(776,"(opcional)"),e()(),n(777,"p"),t(778,"Atribui uma linha separadora acima do item."),e()()(),n(779,"tr",14)(780,"td",15)(781,"div",16)(782,"span",17),t(783," subItems"),p(784,"br"),e()()(),n(785,"td",18)(786,"code",33),t(787,"Array<PoPopupAction>"),e()(),n(788,"td",21)(789,"em")(790,"strong"),t(791,"(opcional)"),e()(),n(792,"p"),t(793,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),e(),n(794,"p"),t(795,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),e(),n(796,"blockquote")(797,"p"),t(798,"As propriedades "),n(799,"code"),t(800,"disabled"),e(),t(801,", "),n(802,"code"),t(803,"type"),e(),t(804," e "),n(805,"code"),t(806,"visible"),e(),t(807," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),e()(),n(808,"blockquote")(809,"p"),t(810,"Quando "),n(811,"code"),t(812,"url"),e(),t(813," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),e()(),n(814,"blockquote")(815,"p"),t(816,"Em subn\xEDveis aninhados, o "),n(817,"code"),t(818,"icon"),e(),t(819," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),e()()()(),n(820,"tr",14)(821,"td",15)(822,"div",16)(823,"span",17),t(824," type"),p(825,"br"),e()()(),n(826,"td",18)(827,"code",24),t(828,"string"),e()(),n(829,"td",21)(830,"em")(831,"strong"),t(832,"(opcional)"),e()(),n(833,"p"),t(834,"Define a cor do item."),e(),n(835,"p"),t(836,"Valores v\xE1lidos:"),e(),n(837,"ul")(838,"li")(839,"code"),t(840,"default"),e()(),n(841,"li")(842,"code"),t(843,"danger"),e()()()()(),n(844,"tr",14)(845,"td",15)(846,"div",16)(847,"span",17),t(848," url"),p(849,"br"),e()()(),n(850,"td",18)(851,"code",24),t(852,"string"),e()(),n(853,"td",21)(854,"em")(855,"strong"),t(856,"(opcional)"),e()(),n(857,"p"),t(858,"URL para redirecionamento. Aceita rotas internas e links externos."),e(),n(859,"p"),t(860,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),n(861,"code"),t(862,"url"),e(),t(863," \xE9 informada em um agrupador, o clique "),n(864,"strong"),t(865,"n\xE3o abrir\xE1 os subitens"),e(),t(866,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),e(),n(867,"blockquote")(868,"p"),t(869,"Quando informada, tem prioridade sobre a propriedade "),n(870,"code"),t(871,"action"),e(),t(872,"."),e()()()(),n(873,"tr",14)(874,"td",15)(875,"div",16)(876,"span",17),t(877," visible"),p(878,"br"),e()()(),n(879,"td",18)(880,"code",23),t(881,"boolean "),e(),n(882,"code",30),t(883," Function"),e()(),n(884,"td",21)(885,"em")(886,"strong"),t(887,"(opcional)"),e()(),n(888,"p"),t(889,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),e()()()()())},dependencies:[A],encapsulation:2})}return l})();var we=(()=>{class l{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,a){this.route=d,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let a=d.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||l)(J(ie),J(ae))};static \u0275cmp=S({type:l,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Popup",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return o.changeTab("doc")}),p(3,"sample-po-popup-doc"),e(),n(4,"po-tab",3),b("p-click",function(){return o.changeTab("web")}),p(5,"sample-po-popup-basic-view")(6,"sample-po-popup-labs-view")(7,"sample-po-popup-email-view"),e()()()),a&2&&(s("p-actions",o.actions),m(2),s("p-active",o.activeTab==="doc"),m(2),s("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Ee,w,_,Se,ve,Ce,ye],encapsulation:2})}return l})();var Qe=[{path:"",component:we}],_e=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=F({type:l});static \u0275inj=O({imports:[K.forChild(Qe),K]})}return l})();var Tt=(()=>{class l{static \u0275fac=function(a){return new(a||l)};static \u0275mod=F({type:l});static \u0275inj=O({imports:[ge,_e]})}return l})();export{Tt as DocPoPopupModule};
