import{o as g,p as te}from"./chunk-AT3MKFJ3.js";import{Gb as h,Hb as S,Ja as X,Lb as T,Ra as Y,Xa as Z,a as J,ab as $,tb as ee,w as K,yb as E}from"./chunk-GCMU57WK.js";import{Ea as m,Fa as t,Ga as e,Ha as i,I as V,Mb as C,Mc as I,Nc as R,O as M,Oa as q,Oc as H,P as z,Pa as c,Pc as N,Qc as j,Ra as w,bb as v,cb as n,cd as G,eb as k,ed as Q,gb as y,gd as U,ha as r,hb as P,ib as _,ma as W,oa as d,pa as O,rb as b,ya as B,za as A}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ne=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-basic"]],standalone:!1,decls:4,vars:0,consts:[[1,"po-row"],[1,"po-md-12"]],template:function(l,a){l&1&&(t(0,"div",0),i(1,"po-skeleton",1)(2,"po-skeleton",1)(3,"po-skeleton",1),e())},dependencies:[E],encapsulation:2})}return o})();var be=o=>({"docs-sample-code-tabs":o}),ie=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Skeleton Basic"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
  <po-skeleton class="po-md-12"></po-skeleton>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-skeleton-basic/sample-po-skeleton-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-basic',
  templateUrl: './sample-po-skeleton-basic.component.html',
  standalone: false
})
export class SamplePoSkeletonBasicComponent {}
`),e()()()()(),t(21,"div",10),i(22,"sample-po-skeleton-basic"),e(),i(23,"hr")),l&2&&(r(5),v("po-icon "+a.sampleCodeButtonIcon),r(),k(" ",a.sampleCodeButtonLabel),r(),m("ngClass",b(4,be,a.hideSampleCodeTabs)))},dependencies:[C,g,h,S,ne],encapsulation:2})}return o})();function Ee(o,F){if(o&1){let p=q();t(0,"po-select",12),_("ngModelChange",function(a){M(p);let s=w();return P(s.size,a)||(s.size=a),z(a)}),e()}if(o&2){let p=w();y("ngModel",p.size),m("p-options",p.sizeOptions)}}function fe(o,F){if(o&1){let p=q();i(0,"po-divider",13),t(1,"po-number",14),_("ngModelChange",function(a){M(p);let s=w();return P(s.circleSize,a)||(s.circleSize=a),z(a)}),c("p-change",function(){M(p);let a=w();return z(a.onCircleSizeChange())}),e(),t(2,"po-select",15),_("ngModelChange",function(a){M(p);let s=w();return P(s.circleSizeUnit,a)||(s.circleSizeUnit=a),z(a)}),c("p-change",function(){M(p);let a=w();return z(a.onCircleSizeUnitChange())}),e(),i(3,"po-info",16)}if(o&2){let p=w();r(),y("ngModel",p.circleSize),r(),y("ngModel",p.circleSizeUnit),m("p-options",p.unitOptions),r(),m("p-value",p.circleSize?p.circleSize+p.circleSizeUnit:"Using default size from Size select")}}function we(o,F){if(o&1){let p=q();i(0,"po-divider",17),t(1,"po-input",18),_("ngModelChange",function(a){M(p);let s=w();return P(s.width,a)||(s.width=a),z(a)}),e(),t(2,"po-input",19),_("ngModelChange",function(a){M(p);let s=w();return P(s.height,a)||(s.height=a),z(a)}),e(),t(3,"po-input",20),_("ngModelChange",function(a){M(p);let s=w();return P(s.borderRadius,a)||(s.borderRadius=a),z(a)}),e()}if(o&2){let p=w();r(),y("ngModel",p.width),r(),y("ngModel",p.height),r(),y("ngModel",p.borderRadius)}}var oe=(()=>{class o{animation;borderRadius;height;ariaLabel;size;type;variant;width;circleSize;circleSizeUnit="px";animationOptions=[{label:"Shimmer",value:"shimmer"},{label:"Pulse",value:"pulse"},{label:"None",value:"none"}];sizeOptions=[{label:"Extra Small",value:"xs"},{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra Large",value:"xl"},{label:"Extra Extra Large",value:"2xl"}];typeOptions=[{label:"Normal",value:"normal"},{label:"Primary",value:"primary"},{label:"Content",value:"content"}];variantOptions=[{label:"Circle",value:"circle"},{label:"Text",value:"text"},{label:"Rectangle",value:"rectangle"},{label:"Square",value:"square"}];unitOptions=[{label:"Pixels (px)",value:"px"},{label:"REM",value:"rem"},{label:"EM",value:"em"},{label:"Percentage (%)",value:"%"}];ngOnInit(){this.restore()}get modelValue(){return JSON.stringify({variant:this.variant,type:this.type,animation:this.animation,size:this.size,width:this.width,height:this.height,borderRadius:this.borderRadius,ariaLabel:this.ariaLabel},null,2)}onVariantChange(){this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.circleSize=null}onCircleSizeChange(){if(this.circleSize&&this.variant==="circle"){let p=`${this.circleSize}${this.circleSizeUnit}`;this.width=p,this.height=p,this.borderRadius="50%"}else this.width=void 0,this.height=void 0,this.borderRadius=void 0}onCircleSizeUnitChange(){this.onCircleSizeChange()}restore(){this.variant="circle",this.type="normal",this.animation="shimmer",this.size="md",this.width=void 0,this.height=void 0,this.borderRadius=void 0,this.ariaLabel="Carregando",this.circleSize=null,this.circleSizeUnit="px"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-labs"]],standalone:!1,decls:17,vars:19,consts:[[1,"po-row"],[1,"po-md-12",3,"p-variant","p-type","p-animation","p-size","p-width","p-height","p-border-radius","p-aria-label"],["p-label","Model",1,"po-md-12",3,"p-value"],["p-label","Animation",1,"po-md-12"],["name","animation","p-label","Animation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["name","type","p-label","Type",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Shapes",1,"po-md-12"],["name","variant","p-label","Variant",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","size","p-label","Size",1,"po-md-6",3,"ngModel","p-options"],["p-label","Accessibility",1,"po-md-12"],["name","ariaLabel","p-label","Aria Label","p-help","Texto descritivo para leitores de tela (acessibilidade)",1,"po-md-12",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["name","size","p-label","Size",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Circle Dynamic Size (optional)",1,"po-md-12"],["name","circleSize","p-clean","","p-label","Circle Size","p-help","Define o tamanho do c\xEDrculo","p-min","1",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","circleSizeUnit","p-label","Unit",1,"po-md-2",3,"ngModelChange","p-change","ngModel","p-options"],["p-label","Applied Size",1,"po-md-6",3,"p-value"],["p-label","Custom (optional)",1,"po-md-12"],["name","width","p-clean","","p-label","Width","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","height","p-clean","","p-label","Height","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"],["name","borderRadius","p-clean","","p-label","Border Radius","p-help","Valores CSS: px, %, em, rem",1,"po-md-6",3,"ngModelChange","ngModel"]],template:function(l,a){l&1&&(t(0,"div",0),i(1,"po-skeleton",1),e(),i(2,"hr")(3,"po-info",2)(4,"hr"),t(5,"form",0),i(6,"po-divider",3),t(7,"po-select",4),_("ngModelChange",function(x){return P(a.animation,x)||(a.animation=x),x}),e(),t(8,"po-select",5),_("ngModelChange",function(x){return P(a.type,x)||(a.type=x),x}),e(),i(9,"po-divider",6),t(10,"po-select",7),_("ngModelChange",function(x){return P(a.variant,x)||(a.variant=x),x}),c("p-change",function(){return a.onVariantChange()}),e(),B(11,Ee,1,2,"po-select",8),i(12,"po-divider",9),t(13,"po-input",10),_("ngModelChange",function(x){return P(a.ariaLabel,x)||(a.ariaLabel=x),x}),e(),B(14,fe,4,4),B(15,we,4,3),t(16,"po-button",11),c("p-click",function(){return a.restore()}),e()()),l&2&&(r(),m("p-variant",a.variant)("p-type",a.type)("p-animation",a.animation)("p-size",a.size)("p-width",a.width||void 0)("p-height",a.height||void 0)("p-border-radius",a.borderRadius||void 0)("p-aria-label",a.ariaLabel),r(2),m("p-value",a.modelValue),r(4),y("ngModel",a.animation),m("p-options",a.animationOptions),r(),y("ngModel",a.type),m("p-options",a.typeOptions),r(2),y("ngModel",a.variant),m("p-options",a.variantOptions),r(),A(a.variant!=="text"?11:-1),r(2),y("ngModel",a.ariaLabel),r(),A(a.variant==="circle"?14:-1),r(),A(a.variant==="text"?15:-1))},dependencies:[j,I,R,N,H,K,J,X,Y,Z,$,E],encapsulation:2})}return o})();var Pe=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Skeleton Labs"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-skeleton
    class="po-md-12"
    [p-variant]="variant"
    [p-type]="type"
    [p-animation]="animation"
    [p-size]="size"
    [p-width]="width || undefined"
    [p-height]="height || undefined"
    [p-border-radius]="borderRadius || undefined"
    [p-aria-label]="ariaLabel"
  >
  </po-skeleton>
</div>

<hr />

<po-info class="po-md-12" p-label="Model" [p-value]="modelValue"></po-info>

<hr />

<form class="po-row">
  <po-divider class="po-md-12" p-label="Animation"></po-divider>

  <po-select
    class="po-md-6"
    name="animation"
    [(ngModel)]="animation"
    p-label="Animation"
    [p-options]="animationOptions"
  >
  </po-select>

  <po-select class="po-md-6" name="type" [(ngModel)]="type" p-label="Type" [p-options]="typeOptions"> </po-select>

  <po-divider class="po-md-12" p-label="Shapes"></po-divider>

  <po-select
    class="po-md-6"
    name="variant"
    [(ngModel)]="variant"
    p-label="Variant"
    [p-options]="variantOptions"
    (p-change)="onVariantChange()"
  >
  </po-select>

  @if (variant !== 'text') {
    <po-select class="po-md-6" name="size" [(ngModel)]="size" p-label="Size" [p-options]="sizeOptions"> </po-select>
  }

  <po-divider class="po-md-12" p-label="Accessibility"></po-divider>

  <po-input
    class="po-md-12"
    name="ariaLabel"
    [(ngModel)]="ariaLabel"
    p-label="Aria Label"
    p-help="Texto descritivo para leitores de tela (acessibilidade)"
  >
  </po-input>

  @if (variant === 'circle') {
    <po-divider class="po-md-12" p-label="Circle Dynamic Size (optional)"></po-divider>

    <po-number
      class="po-md-4"
      name="circleSize"
      [(ngModel)]="circleSize"
      p-clean
      p-label="Circle Size"
      p-help="Define o tamanho do c\xEDrculo"
      p-min="1"
      (p-change)="onCircleSizeChange()"
    >
    </po-number>

    <po-select
      class="po-md-2"
      name="circleSizeUnit"
      [(ngModel)]="circleSizeUnit"
      p-label="Unit"
      [p-options]="unitOptions"
      (p-change)="onCircleSizeUnitChange()"
    >
    </po-select>

    <po-info
      class="po-md-6"
      p-label="Applied Size"
      [p-value]="circleSize ? circleSize + circleSizeUnit : 'Using default size from Size select'"
    >
    </po-info>
  }

  @if (variant === 'text') {
    <po-divider class="po-md-12" p-label="Custom (optional)"></po-divider>

    <po-input
      class="po-md-6"
      name="width"
      [(ngModel)]="width"
      p-clean
      p-label="Width"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-label="Height"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="borderRadius"
      [(ngModel)]="borderRadius"
      p-clean
      p-label="Border Radius"
      p-help="Valores CSS: px, %, em, rem"
    >
    </po-input>
  }

  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-skeleton-labs/sample-po-skeleton-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-labs',
  templateUrl: './sample-po-skeleton-labs.component.html',
  standalone: false
})
export class SamplePoSkeletonLabsComponent implements OnInit {
  animation: string;
  borderRadius: string;
  height: string;
  ariaLabel: string;
  size: string;
  type: string;
  variant: string;
  width: string;
  circleSize: number;
  circleSizeUnit: string = 'px';

  readonly animationOptions = [
    { label: 'Shimmer', value: 'shimmer' },
    { label: 'Pulse', value: 'pulse' },
    { label: 'None', value: 'none' }
  ];

  readonly sizeOptions = [
    { label: 'Extra Small', value: 'xs' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
    { label: 'Extra Large', value: 'xl' },
    { label: 'Extra Extra Large', value: '2xl' }
  ];

  readonly typeOptions = [
    { label: 'Normal', value: 'normal' },
    { label: 'Primary', value: 'primary' },
    { label: 'Content', value: 'content' }
  ];

  readonly variantOptions = [
    { label: 'Circle', value: 'circle' },
    { label: 'Text', value: 'text' },
    { label: 'Rectangle', value: 'rectangle' },
    { label: 'Square', value: 'square' }
  ];

  readonly unitOptions = [
    { label: 'Pixels (px)', value: 'px' },
    { label: 'REM', value: 'rem' },
    { label: 'EM', value: 'em' },
    { label: 'Percentage (%)', value: '%' }
  ];

  ngOnInit() {
    this.restore();
  }

  get modelValue() {
    return JSON.stringify(
      {
        variant: this.variant,
        type: this.type,
        animation: this.animation,
        size: this.size,
        width: this.width,
        height: this.height,
        borderRadius: this.borderRadius,
        ariaLabel: this.ariaLabel
      },
      null,
      2
    );
  }

  onVariantChange() {
    this.width = undefined;
    this.height = undefined;
    this.borderRadius = undefined;
    this.circleSize = null;
  }

  onCircleSizeChange() {
    if (this.circleSize && this.variant === 'circle') {
      const sizeValue = \`\${this.circleSize}\${this.circleSizeUnit}\`;
      this.width = sizeValue;
      this.height = sizeValue;
      this.borderRadius = '50%';
    } else {
      this.width = undefined;
      this.height = undefined;
      this.borderRadius = undefined;
    }
  }

  onCircleSizeUnitChange() {
    this.onCircleSizeChange();
  }

  restore() {
    this.variant = 'circle';
    this.type = 'normal';
    this.animation = 'shimmer';
    this.size = 'md';
    this.width = undefined;
    this.height = undefined;
    this.borderRadius = undefined;
    this.ariaLabel = 'Carregando';
    this.circleSize = null;
    this.circleSizeUnit = 'px';
  }
}
`),e()()()()(),t(21,"div",10),i(22,"sample-po-skeleton-labs"),e(),i(23,"hr")),l&2&&(r(5),v("po-icon "+a.sampleCodeButtonIcon),r(),k(" ",a.sampleCodeButtonLabel),r(),m("ngClass",b(4,Pe,a.hideSampleCodeTabs)))},dependencies:[C,g,h,S,oe],encapsulation:2})}return o})();var le=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-credit-card"]],standalone:!1,decls:47,vars:0,consts:[[1,"po-row"],["p-height","340","p-title","Payment Method",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card"],[1,"po-md-2","card-chip"],["p-variant","rectangle","p-width","40px","p-height","24px"],[1,"po-row","card-number"],[1,"po-sm-3","po-md-3"],["p-variant","text"],[1,"po-row","card-details"],[1,"po-sm-7","po-md-7","card-holder"],["p-variant","text","p-size","sm","p-width","40px"],["p-variant","text","p-width","120px"],[1,"po-sm-5","po-md-5","card-expiry"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","50px"],[1,"card-brand"],["p-variant","circle","p-size","sm"],["p-height","340","p-title","Payment Method - Content",1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"credit-card-gray"],["p-variant","rectangle","p-width","40px","p-height","24px","p-type","content"],["p-variant","text","p-type","content"],["p-variant","text","p-size","sm","p-width","40px","p-type","content"],["p-variant","text","p-width","120px","p-type","content"],["p-variant","text","p-width","60px","p-size","sm","p-type","content"],["p-variant","text","p-width","50px","p-type","content"],["p-variant","circle","p-size","sm","p-type","content"]],template:function(l,a){l&1&&(t(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",0)(4,"div",3),i(5,"po-skeleton",4),e()(),t(6,"div",5)(7,"div",6),i(8,"po-skeleton",7),e(),t(9,"div",6),i(10,"po-skeleton",7),e(),t(11,"div",6),i(12,"po-skeleton",7),e(),t(13,"div",6),i(14,"po-skeleton",7),e()(),t(15,"div",8)(16,"div",9),i(17,"po-skeleton",10)(18,"po-skeleton",11),e(),t(19,"div",12),i(20,"po-skeleton",13)(21,"po-skeleton",14),e()(),t(22,"div",15),i(23,"po-skeleton",16),e()()(),t(24,"po-widget",17)(25,"div",18)(26,"div",0)(27,"div",3),i(28,"po-skeleton",19),e()(),t(29,"div",5)(30,"div",6),i(31,"po-skeleton",20),e(),t(32,"div",6),i(33,"po-skeleton",20),e(),t(34,"div",6),i(35,"po-skeleton",20),e(),t(36,"div",6),i(37,"po-skeleton",20),e()(),t(38,"div",8)(39,"div",9),i(40,"po-skeleton",21)(41,"po-skeleton",22),e(),t(42,"div",12),i(43,"po-skeleton",23)(44,"po-skeleton",24),e()(),t(45,"div",15),i(46,"po-skeleton",25),e()()()())},dependencies:[T,E],styles:[".credit-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);border-radius:16px;padding:24px;min-height:200px;position:relative}.credit-card-gray[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b93a7,#6b7280);border-radius:16px;padding:24px;min-height:200px;position:relative}.card-chip[_ngcontent-%COMP%], .card-number[_ngcontent-%COMP%]{margin-bottom:15px}.card-holder[_ngcontent-%COMP%], .card-expiry[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.card-brand[_ngcontent-%COMP%]{position:absolute;bottom:24px;right:35px}"]})}return o})();var Me=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-credit-card-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Skeleton - Credit Card"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3" p-height="340" p-title="Payment Method">
    <div class="credit-card">
      <div class="po-row">
        <div class="po-md-2 card-chip">
          <po-skeleton p-variant="rectangle" p-width="40px" p-height="24px"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-number">
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-details">
        <div class="po-sm-7 po-md-7 card-holder">
          <po-skeleton p-variant="text" p-size="sm" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="120px"></po-skeleton>
        </div>
        <div class="po-sm-5 po-md-5 card-expiry">
          <po-skeleton p-variant="text" p-width="60px" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-width="50px"></po-skeleton>
        </div>
      </div>

      <div class="card-brand">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
      </div>
    </div>
  </po-widget>

  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3" p-height="340" p-title="Payment Method - Content">
    <div class="credit-card-gray">
      <div class="po-row">
        <div class="po-md-2 card-chip">
          <po-skeleton p-variant="rectangle" p-width="40px" p-height="24px" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-number">
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="po-row card-details">
        <div class="po-sm-7 po-md-7 card-holder">
          <po-skeleton p-variant="text" p-size="sm" p-width="40px" p-type="content"></po-skeleton>
          <po-skeleton p-variant="text" p-width="120px" p-type="content"></po-skeleton>
        </div>
        <div class="po-sm-5 po-md-5 card-expiry">
          <po-skeleton p-variant="text" p-width="60px" p-size="sm" p-type="content"></po-skeleton>
          <po-skeleton p-variant="text" p-width="50px" p-type="content"></po-skeleton>
        </div>
      </div>

      <div class="card-brand">
        <po-skeleton p-variant="circle" p-size="sm" p-type="content"></po-skeleton>
      </div>
    </div>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-credit-card',
  templateUrl: './sample-po-skeleton-credit-card.component.html',
  styleUrls: ['./sample-po-skeleton-credit-card.component.css'],
  standalone: false
})
export class SamplePoSkeletonCreditCardComponent {}
`),e()()(),t(21,"po-tab",10)(22,"div")(23,"label",6),n(24,"sample-po-skeleton-credit-card/sample-po-skeleton-credit-card.component.css"),e(),t(25,"pre",11),n(26,`.credit-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  min-height: 200px;
  position: relative;
}

.credit-card-gray {
  background: linear-gradient(135deg, #8b93a7 0%, #6b7280 100%);
  border-radius: 16px;
  padding: 24px;
  min-height: 200px;
  position: relative;
}

.card-chip,
.card-number {
  margin-bottom: 15px;
}

.card-holder,
.card-expiry {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.card-brand {
  position: absolute;
  bottom: 24px;
  right: 35px;
}
`),e()()()()(),t(27,"div",12),i(28,"sample-po-skeleton-credit-card"),e(),i(29,"hr")),l&2&&(r(5),v("po-icon "+a.sampleCodeButtonIcon),r(),k(" ",a.sampleCodeButtonLabel),r(),m("ngClass",b(4,Me,a.hideSampleCodeTabs)))},dependencies:[C,g,h,S,le],encapsulation:2})}return o})();var re=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-widget-card"]],standalone:!1,decls:17,vars:0,consts:[[1,"po-row"],[1,"po-sm-12","po-md-6","po-lg-4","po-xl-3"],[1,"widget-card"],[1,"po-row","widget-header"],[1,"po-sm-7","po-md-7"],["p-variant","text","p-height","32px"],[1,"po-sm-3","po-md-3"],["p-variant","text","p-width","80px","p-height","32px"],[1,"po-sm-2","po-md-2","widget-icon"],["p-variant","square","p-size","sm"],[1,"po-row","widget-content"],[1,"widget-spacer"],[1,"po-row","widget-footer"],[1,"po-sm-12","po-md-12","footer-button"],["p-variant","rectangle","p-size","md"]],template:function(l,a){l&1&&(t(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3)(4,"div",4),i(5,"po-skeleton",5),e(),t(6,"div",6),i(7,"po-skeleton",7),e(),t(8,"div",8),i(9,"po-skeleton",9),e()(),t(10,"div",10)(11,"div",4),i(12,"po-skeleton",5),e()(),i(13,"div",11),t(14,"div",12)(15,"div",13),i(16,"po-skeleton",14),e()()()()())},dependencies:[T,E],styles:[".widget-card[_ngcontent-%COMP%]{padding:8px 0}.widget-header[_ngcontent-%COMP%]{margin-bottom:8px;align-items:center}.widget-icon[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.widget-content[_ngcontent-%COMP%]{margin-bottom:16px}.widget-spacer[_ngcontent-%COMP%]{height:40px}.widget-footer[_ngcontent-%COMP%], .footer-button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]})}return o})();var De=o=>({"docs-sample-code-tabs":o}),se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-widget-card-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Skeleton - Widget Card"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget class="po-sm-12 po-md-6 po-lg-4 po-xl-3">
    <div class="widget-card">
      <div class="po-row widget-header">
        <div class="po-sm-7 po-md-7">
          <po-skeleton p-variant="text" p-height="32px"></po-skeleton>
        </div>
        <div class="po-sm-3 po-md-3">
          <po-skeleton p-variant="text" p-width="80px" p-height="32px"></po-skeleton>
        </div>
        <div class="po-sm-2 po-md-2 widget-icon">
          <po-skeleton p-variant="square" p-size="sm"></po-skeleton>
        </div>
      </div>

      <div class="po-row widget-content">
        <div class="po-sm-7 po-md-7">
          <po-skeleton p-variant="text" p-height="32px"></po-skeleton>
        </div>
      </div>

      <div class="widget-spacer"></div>

      <div class="po-row widget-footer">
        <div class="po-sm-12 po-md-12 footer-button">
          <po-skeleton p-variant="rectangle" p-size="md"></po-skeleton>
        </div>
      </div>
    </div>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-widget-card',
  templateUrl: './sample-po-skeleton-widget-card.component.html',
  styleUrls: ['./sample-po-skeleton-widget-card.component.css'],
  standalone: false
})
export class SamplePoSkeletonWidgetCardComponent {}
`),e()()(),t(21,"po-tab",10)(22,"div")(23,"label",6),n(24,"sample-po-skeleton-widget-card/sample-po-skeleton-widget-card.component.css"),e(),t(25,"pre",11),n(26,`.widget-card {
  padding: 8px 0;
}

.widget-header {
  margin-bottom: 8px;
  align-items: center;
}

.widget-icon {
  display: flex;
  justify-content: flex-end;
}

.widget-content {
  margin-bottom: 16px;
}

.widget-spacer {
  height: 40px;
}

.widget-footer {
  display: flex;
  justify-content: flex-end;
}

.footer-button {
  display: flex;
  justify-content: flex-end;
}
`),e()()()()(),t(27,"div",12),i(28,"sample-po-skeleton-widget-card"),e(),i(29,"hr")),l&2&&(r(5),v("po-icon "+a.sampleCodeButtonIcon),r(),k(" ",a.sampleCodeButtonLabel),r(),m("ngClass",b(4,De,a.hideSampleCodeTabs)))},dependencies:[C,g,h,S,re],encapsulation:2})}return o})();var de=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-user-profile"]],standalone:!1,decls:20,vars:0,consts:[[1,"po-row"],["p-title","User Profile",1,"po-md-6"],[1,"profile-card"],[1,"profile-picture"],["p-variant","circle","p-size","xl","p-aria-label","Carregando perfil do usu\xE1rio"],["p-variant","text","p-width","150px"],["p-variant","text","p-width","200px"],["p-variant","text"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],[1,"profile-stats"],[1,"stat"],["p-variant","text","p-width","40px"],["p-variant","text","p-width","60px","p-size","sm"],["p-variant","text","p-width","70px","p-size","sm"],["p-variant","text","p-width","65px","p-size","sm"]],template:function(l,a){l&1&&(t(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),i(4,"po-skeleton",4),e(),i(5,"po-skeleton",5)(6,"po-skeleton",6)(7,"po-skeleton",7)(8,"po-skeleton",8)(9,"po-skeleton",9),t(10,"div",10)(11,"div",11),i(12,"po-skeleton",12)(13,"po-skeleton",13),e(),t(14,"div",11),i(15,"po-skeleton",12)(16,"po-skeleton",14),e(),t(17,"div",11),i(18,"po-skeleton",12)(19,"po-skeleton",15),e()()()()())},dependencies:[T,E],styles:[".profile-card[_ngcontent-%COMP%]{text-align:center;padding:24px}.profile-picture[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:16px}.profile-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-around;margin-top:24px;padding-top:24px;border-top:1px solid #e0e0e0}.stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.profile-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"]})}return o})();var Be=o=>({"docs-sample-code-tabs":o}),me=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-user-profile-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Skeleton - User Profile"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget class="po-md-6" p-title="User Profile">
    <div class="profile-card">
      <!-- Profile picture -->
      <div class="profile-picture">
        <po-skeleton p-variant="circle" p-size="xl" p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>
      </div>

      <!-- Name -->
      <po-skeleton p-variant="text" p-width="150px"></po-skeleton>

      <!-- Email -->
      <po-skeleton p-variant="text" p-width="200px"></po-skeleton>

      <!-- Bio -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="70%"></po-skeleton>

      <!-- Stats -->
      <div class="profile-stats">
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="60px" p-size="sm"></po-skeleton>
        </div>
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="70px" p-size="sm"></po-skeleton>
        </div>
        <div class="stat">
          <po-skeleton p-variant="text" p-width="40px"></po-skeleton>
          <po-skeleton p-variant="text" p-width="65px" p-size="sm"></po-skeleton>
        </div>
      </div>
    </div>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-user-profile',
  templateUrl: './sample-po-skeleton-user-profile.component.html',
  styleUrls: ['./sample-po-skeleton-user-profile.component.css'],
  standalone: false
})
export class SamplePoSkeletonUserProfileComponent {}
`),e()()(),t(21,"po-tab",10)(22,"div")(23,"label",6),n(24,"sample-po-skeleton-user-profile/sample-po-skeleton-user-profile.component.css"),e(),t(25,"pre",11),n(26,`.profile-card {
  text-align: center;
  padding: 24px;
}

.profile-picture {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.profile-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),e()()()()(),t(27,"div",12),i(28,"sample-po-skeleton-user-profile"),e(),i(29,"hr")),l&2&&(r(5),v("po-icon "+a.sampleCodeButtonIcon),r(),k(" ",a.sampleCodeButtonLabel),r(),m("ngClass",b(4,Be,a.hideSampleCodeTabs)))},dependencies:[C,g,h,S,de],encapsulation:2})}return o})();var ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-social-post"]],standalone:!1,decls:35,vars:0,consts:[[1,"po-row"],["p-height","550",1,"po-md-6"],[1,"post-card"],[1,"post-header"],["p-variant","circle","p-size","sm","p-aria-label","Carregando post de rede social"],[1,"post-header-text"],["p-variant","text","p-size","sm"],["p-variant","rectangle","p-height","300px"],[1,"post-actions"],["p-variant","rectangle","p-size","sm","p-width","30px","p-height","30px"],["p-variant","text","p-width","120px"],["p-variant","text"],["p-variant","text","p-width","85%"],["p-variant","text","p-width","60%"],["p-variant","circle","p-size","sm"],["p-variant","rectangle","p-height","250px"],["p-variant","text","p-width","140px"],["p-variant","text","p-width","90%"],["p-variant","text","p-width","70%"],["p-variant","text","p-width","65%"],["p-variant","text","p-width","50%"]],template:function(l,a){l&1&&(t(0,"div",0)(1,"po-widget",1)(2,"div",2)(3,"div",3),i(4,"po-skeleton",4),t(5,"div",5),i(6,"po-skeleton",6)(7,"po-skeleton",6),e()(),i(8,"po-skeleton",7),t(9,"div",8),i(10,"po-skeleton",9)(11,"po-skeleton",9)(12,"po-skeleton",9),e(),i(13,"po-skeleton",10)(14,"po-skeleton",11)(15,"po-skeleton",12)(16,"po-skeleton",13),e()(),t(17,"po-widget",1)(18,"div",2)(19,"div",3),i(20,"po-skeleton",14),t(21,"div",5),i(22,"po-skeleton",6)(23,"po-skeleton",6),e()(),i(24,"po-skeleton",15),t(25,"div",8),i(26,"po-skeleton",9)(27,"po-skeleton",9)(28,"po-skeleton",9),e(),i(29,"po-skeleton",16)(30,"po-skeleton",11)(31,"po-skeleton",17)(32,"po-skeleton",18)(33,"po-skeleton",19)(34,"po-skeleton",20),e()()())},dependencies:[T,E],styles:[".post-card[_ngcontent-%COMP%]{padding:16px}.post-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:12px}.post-header-text[_ngcontent-%COMP%]{flex:1}.post-actions[_ngcontent-%COMP%]{display:flex;gap:16px;margin:12px 0}.post-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"]})}return o})();var We=o=>({"docs-sample-code-tabs":o}),ue=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-social-post-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Skeleton - Social Post"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <!-- Post Card 1 - Instagram Style -->
  <po-widget class="po-md-6" p-height="550">
    <div class="post-card">
      <!-- Header: Avatar + Username -->
      <div class="post-header">
        <po-skeleton p-variant="circle" p-size="sm" p-aria-label="Carregando post de rede social"></po-skeleton>
        <div class="post-header-text">
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Image -->
      <po-skeleton p-variant="rectangle" p-height="300px"></po-skeleton>

      <!-- Actions (like, comment, share) -->
      <div class="post-actions">
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
      </div>

      <!-- Likes count -->
      <po-skeleton p-variant="text" p-width="120px"></po-skeleton>

      <!-- Caption -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="85%"></po-skeleton>

      <!-- Comments preview -->
      <po-skeleton p-variant="text" p-width="60%"></po-skeleton>
    </div>
  </po-widget>

  <!-- Post Card 2 - Instagram Style -->
  <po-widget class="po-md-6" p-height="550">
    <div class="post-card">
      <!-- Header: Avatar + Username -->
      <div class="post-header">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
        <div class="post-header-text">
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Image -->
      <po-skeleton p-variant="rectangle" p-height="250px"></po-skeleton>

      <!-- Actions (like, comment, share) -->
      <div class="post-actions">
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
        <po-skeleton p-variant="rectangle" p-size="sm" p-width="30px" p-height="30px"></po-skeleton>
      </div>

      <!-- Likes count -->
      <po-skeleton p-variant="text" p-width="140px"></po-skeleton>

      <!-- Caption -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>

      <!-- Comments preview -->
      <po-skeleton p-variant="text" p-width="70%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="65%"></po-skeleton>
      <po-skeleton p-variant="text" p-width="50%"></po-skeleton>
    </div>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-social-post',
  templateUrl: './sample-po-skeleton-social-post.component.html',
  styleUrls: ['./sample-po-skeleton-social-post.component.css'],
  standalone: false
})
export class SamplePoSkeletonSocialPostComponent {}
`),e()()(),t(21,"po-tab",10)(22,"div")(23,"label",6),n(24,"sample-po-skeleton-social-post/sample-po-skeleton-social-post.component.css"),e(),t(25,"pre",11),n(26,`.post-card {
  padding: 16px;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.post-header-text {
  flex: 1;
}

.post-actions {
  display: flex;
  gap: 16px;
  margin: 12px 0;
}

.post-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),e()()()()(),t(27,"div",12),i(28,"sample-po-skeleton-social-post"),e(),i(29,"hr")),l&2&&(r(5),v("po-icon "+a.sampleCodeButtonIcon),r(),k(" ",a.sampleCodeButtonLabel),r(),m("ngClass",b(4,We,a.hideSampleCodeTabs)))},dependencies:[C,g,h,S,ce],encapsulation:2})}return o})();var he=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-article"]],standalone:!1,decls:15,vars:0,consts:[[1,"po-row"],["p-height","380","p-title","Latest Article",1,"po-md-6"],[1,"article-card"],["p-variant","rectangle","p-height","150px","p-aria-label","Carregando artigo"],["p-variant","text"],["p-variant","text","p-width","90%"],[1,"article-author"],["p-variant","circle","p-size","sm"],[1,"author-details"],["p-variant","text","p-width","100px","p-size","sm"],["p-variant","text","p-width","80px","p-size","sm"],["p-variant","text","p-width","75%"],["p-variant","text","p-width","80px"]],template:function(l,a){l&1&&(t(0,"div",0)(1,"po-widget",1)(2,"div",2),i(3,"po-skeleton",3)(4,"po-skeleton",4)(5,"po-skeleton",5),t(6,"div",6),i(7,"po-skeleton",7),t(8,"div",8),i(9,"po-skeleton",9)(10,"po-skeleton",10),e()(),i(11,"po-skeleton",4)(12,"po-skeleton",4)(13,"po-skeleton",11)(14,"po-skeleton",12),e()()())},dependencies:[T,E],styles:[".article-card[_ngcontent-%COMP%]{padding:16px}.article-author[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin:16px 0}.author-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:4px}.article-card[_ngcontent-%COMP%]   po-skeleton[_ngcontent-%COMP%]:last-child{--margin-bottom: 0}"]})}return o})();var Ie=o=>({"docs-sample-code-tabs":o}),Se=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-article-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Skeleton - Article"),e(),t(4,"a",2),c("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-skeleton-article/sample-po-skeleton-article.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-row">
  <po-widget class="po-md-6" p-height="380" p-title="Latest Article">
    <div class="article-card">
      <!-- Article thumbnail -->
      <po-skeleton p-variant="rectangle" p-height="150px" p-aria-label="Carregando artigo"></po-skeleton>

      <!-- Article title -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="90%"></po-skeleton>

      <!-- Author info -->
      <div class="article-author">
        <po-skeleton p-variant="circle" p-size="sm"></po-skeleton>
        <div class="author-details">
          <po-skeleton p-variant="text" p-width="100px" p-size="sm"></po-skeleton>
          <po-skeleton p-variant="text" p-width="80px" p-size="sm"></po-skeleton>
        </div>
      </div>

      <!-- Article excerpt -->
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text"></po-skeleton>
      <po-skeleton p-variant="text" p-width="75%"></po-skeleton>

      <!-- Read more -->
      <po-skeleton p-variant="text" p-width="80px"></po-skeleton>
    </div>
  </po-widget>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-skeleton-article/sample-po-skeleton-article.component.ts"),e(),t(19,"pre",9),n(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-skeleton-article',
  templateUrl: './sample-po-skeleton-article.component.html',
  styleUrls: ['./sample-po-skeleton-article.component.css'],
  standalone: false
})
export class SamplePoSkeletonArticleComponent {}
`),e()()(),t(21,"po-tab",10)(22,"div")(23,"label",6),n(24,"sample-po-skeleton-article/sample-po-skeleton-article.component.css"),e(),t(25,"pre",11),n(26,`.article-card {
  padding: 16px;
}

.article-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
}

.author-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.article-card po-skeleton:last-child {
  --margin-bottom: 0;
}
`),e()()()()(),t(27,"div",12),i(28,"sample-po-skeleton-article"),e(),i(29,"hr")),l&2&&(r(5),v("po-icon "+a.sampleCodeButtonIcon),r(),k(" ",a.sampleCodeButtonLabel),r(),m("ngClass",b(4,Ie,a.hideSampleCodeTabs)))},dependencies:[C,g,h,S,he],encapsulation:2})}return o})();var ge=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=d({type:o,selectors:[["sample-po-skeleton-doc"]],standalone:!1,decls:733,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoSkeletonAnimation"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"language-html"],["pan","",1,"docs-api-property-type","PoSkeletonSize"],["pan","",1,"docs-api-property-type","PoSkeletonType"],["pan","",1,"docs-api-property-type","PoSkeletonVariant"]],template:function(l,a){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoSkeletonModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-skeleton."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoSkeletonComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-skeleton"),e(),n(17,` \xE9 utilizado para exibir placeholders durante o carregamento de conte\xFAdo,
melhorando a experi\xEAncia do usu\xE1rio ao indicar que a informa\xE7\xE3o est\xE1 sendo processada.`),e(),t(18,"p"),n(19,`Ele oferece diferentes variantes visuais (texto, ret\xE2ngulo, c\xEDrculo) e anima\xE7\xF5es (pulse, shimmer)
para simular diversos tipos de conte\xFAdo em estado de carregamento.`),e(),t(20,"h4"),n(21,"Tokens customiz\xE1veis"),e(),t(22,"p"),n(23,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(24,"blockquote")(25,"p"),n(26,"Para maiores informa\xE7\xF5es, acesse o guia "),t(27,"a",6),n(28,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(29,"."),e()(),t(30,"table")(31,"thead")(32,"tr")(33,"th"),n(34,"Propriedade"),e(),t(35,"th"),n(36,"Descri\xE7\xE3o"),e(),t(37,"th"),n(38,"Valor Padr\xE3o"),e()()(),t(39,"tbody")(40,"tr")(41,"td")(42,"strong"),n(43,"Cores"),e()(),i(44,"td")(45,"td"),e(),t(46,"tr")(47,"td")(48,"code"),n(49,"--color"),e()(),t(50,"td"),n(51,"Cor de fundo do skeleton (tipo normal)"),e(),t(52,"td")(53,"code"),n(54,"var(--color-neutral-light-20)"),e()()(),t(55,"tr")(56,"td")(57,"code"),n(58,"--color-primary"),e()(),t(59,"td"),n(60,"Cor de fundo do skeleton (tipo primary)"),e(),t(61,"td")(62,"code"),n(63,"var(--color-neutral-mid-40)"),e()()(),t(64,"tr")(65,"td")(66,"code"),n(67,"--color-content"),e()(),t(68,"td"),n(69,"Cor de fundo do skeleton (tipo content)"),e(),t(70,"td")(71,"code"),n(72,"var(--color-neutral-light-00)"),e()()(),t(73,"tr")(74,"td")(75,"code"),n(76,"--shimmer-highlight"),e()(),t(77,"td"),n(78,"Cor de destaque do shimmer (tipo normal)"),e(),t(79,"td")(80,"code"),n(81,"var(--color-neutral-light-30)"),e()()(),t(82,"tr")(83,"td")(84,"code"),n(85,"--shimmer-highlight-primary"),e()(),t(86,"td"),n(87,"Cor de destaque do shimmer (tipo primary)"),e(),t(88,"td")(89,"code"),n(90,"var(--color-neutral-light-20)"),e()()(),t(91,"tr")(92,"td")(93,"code"),n(94,"--shimmer-highlight-content"),e()(),t(95,"td"),n(96,"Cor de destaque do shimmer (tipo content)"),e(),t(97,"td")(98,"code"),n(99,"var(--color-neutral-light-05)"),e()()(),t(100,"tr")(101,"td")(102,"strong"),n(103,"Espa\xE7amento"),e()(),i(104,"td")(105,"td"),e(),t(106,"tr")(107,"td")(108,"code"),n(109,"--margin-bottom"),e()(),t(110,"td"),n(111,"Margem inferior do skeleton"),e(),t(112,"td")(113,"code"),n(114,"var(--spacing-xs)"),e()()(),t(115,"tr")(116,"td")(117,"strong"),n(118,"Bordas"),e()(),i(119,"td")(120,"td"),e(),t(121,"tr")(122,"td")(123,"code"),n(124,"--border-radius"),e()(),t(125,"td"),n(126,"Raio da borda do skeleton"),e(),t(127,"td")(128,"code"),n(129,"var(--border-radius-md)"),e()()(),t(130,"tr")(131,"td")(132,"code"),n(133,"--border-radius-text"),e()(),t(134,"td"),n(135,"Raio da borda para a variante text"),e(),t(136,"td")(137,"code"),n(138,"var(--border-radius-md)"),e()()(),t(139,"tr")(140,"td")(141,"code"),n(142,"--border-radius-primary"),e()(),t(143,"td"),n(144,"Raio da borda do skeleton (tipo primary)"),e(),t(145,"td")(146,"code"),n(147,"var(--border-radius-md)"),e()()(),t(148,"tr")(149,"td")(150,"code"),n(151,"--border-radius-content"),e()(),t(152,"td"),n(153,"Raio da borda do skeleton (tipo content)"),e(),t(154,"td")(155,"code"),n(156,"var(--border-radius-lg)"),e()()(),t(157,"tr")(158,"td")(159,"strong"),n(160,"Transi\xE7\xF5es"),e()(),i(161,"td")(162,"td"),e(),t(163,"tr")(164,"td")(165,"code"),n(166,"--transition-property"),e()(),t(167,"td"),n(168,"Propriedade CSS da transi\xE7\xE3o"),e(),t(169,"td")(170,"code"),n(171,"all"),e()()(),t(172,"tr")(173,"td")(174,"code"),n(175,"--transition-duration"),e()(),t(176,"td"),n(177,"Dura\xE7\xE3o da transi\xE7\xE3o de cor"),e(),t(178,"td")(179,"code"),n(180,"var(--duration-moderate)"),e()()(),t(181,"tr")(182,"td")(183,"code"),n(184,"--transition-timing"),e()(),t(185,"td"),n(186,"Fun\xE7\xE3o de temporiza\xE7\xE3o da transi\xE7\xE3o/anima\xE7\xE3o"),e(),t(187,"td")(188,"code"),n(189,"var(--timing-continuous)"),e()()(),t(190,"tr")(191,"td")(192,"strong"),n(193,"Anima\xE7\xF5es"),e()(),i(194,"td")(195,"td"),e(),t(196,"tr")(197,"td")(198,"code"),n(199,"--animation-duration-pulse"),e()(),t(200,"td"),n(201,"Dura\xE7\xE3o da anima\xE7\xE3o de pulsa\xE7\xE3o"),e(),t(202,"td")(203,"code"),n(204,"var(--duration-very-slow)"),e()()(),t(205,"tr")(206,"td")(207,"code"),n(208,"--animation-duration-shimmer"),e()(),t(209,"td"),n(210,"Dura\xE7\xE3o da anima\xE7\xE3o de brilho deslizante"),e(),t(211,"td")(212,"code"),n(213,"var(--duration-ultra-slow)"),e()()()()()(),t(214,"div",7)(215,"h4",8),n(216,"Seletor"),e(),t(217,"pre",9),n(218,`<po-skeleton
    p-animation="PoSkeletonAnimation"
    p-aria-label="string"
    p-border-radius="string"
    p-height="string"
    p-size="PoSkeletonSize"
    p-type="PoSkeletonType"
    p-variant="PoSkeletonVariant"
    p-width="string" >
</po-skeleton>
`),e()(),t(219,"h4",10),n(220,"Propriedades"),e(),t(221,"table",11)(222,"tr",12)(223,"th",13),n(224,"Nome"),e(),t(225,"th",13),n(226,"Tipo"),e(),t(227,"th",13),n(228,"Padr\xE3o"),e(),t(229,"th",13),n(230,"Descri\xE7\xE3o"),e()(),t(231,"tr",14)(232,"td",15)(233,"div",16)(234,"span",17),n(235," p-animation"),i(236,"br"),e()()(),t(237,"td",18)(238,"code",19),n(239,"PoSkeletonAnimation"),e()(),t(240,"td",20)(241,"p")(242,"code"),n(243,"shimmer"),e()()(),t(244,"td",21)(245,"em")(246,"strong"),n(247,"(opcional)"),e()(),t(248,"p"),n(249,"Define o tipo de anima\xE7\xE3o do skeleton."),e(),t(250,"p"),n(251,"Valores v\xE1lidos:"),e(),t(252,"ul")(253,"li")(254,"code"),n(255,"none"),e(),n(256,": Sem anima\xE7\xE3o"),e(),t(257,"li")(258,"code"),n(259,"pulse"),e(),n(260,": Anima\xE7\xE3o de pulsa\xE7\xE3o"),e(),t(261,"li")(262,"code"),n(263,"shimmer"),e(),n(264,": Anima\xE7\xE3o de brilho deslizante"),e()()()(),t(265,"tr",14)(266,"td",15)(267,"div",16)(268,"span",17),n(269," p-aria-label"),i(270,"br"),e()()(),t(271,"td",18)(272,"code",22),n(273,"string"),e()(),t(274,"td",20),n(275,"-"),e(),t(276,"td",21)(277,"em")(278,"strong"),n(279,"(opcional)"),e()(),t(280,"p"),n(281,"Define a descri\xE7\xE3o acess\xEDvel do conte\xFAdo que est\xE1 sendo carregado."),e(),t(282,"p"),n(283,`Este texto ser\xE1 anunciado por leitores de tela, garantindo que usu\xE1rios de tecnologias assistivas
sejam informados sobre o estado de carregamento.`),e(),t(284,"p")(285,"strong"),n(286,"Quando usar:"),e()(),t(287,"ul")(288,"li"),n(289,"Use em "),t(290,"strong"),n(291,"skeletons \xFAnicos"),e(),n(292," ou no "),t(293,"strong"),n(294,"primeiro skeleton de um grupo"),e(),n(295," com descri\xE7\xE3o contextual"),e(),t(296,"li"),n(297,"Evite usar em m\xFAltiplos skeletons dentro da mesma \xE1rea sem contexto, para n\xE3o causar repeti\xE7\xE3o excessiva"),e()(),t(298,"p")(299,"strong"),n(300,"Exemplos de uso:"),e()(),t(301,"pre")(302,"code",23),n(303,`<!-- \u2705 BOM: Skeleton \xFAnico com contexto -->
<po-skeleton p-aria-label="Carregando perfil do usu\xE1rio"></po-skeleton>

<!-- \u2705 BOM: Grupo de skeletons - apenas o primeiro anuncia -->
<po-skeleton p-aria-label="Carregando lista de produtos"></po-skeleton>
<po-skeleton p-type="primary"></po-skeleton>
<po-skeleton p-variant="circle"></po-skeleton>

<!-- \u274C EVITE: M\xFAltiplos skeletons com a mesma label -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" -->
<po-skeleton p-aria-label="Carregando"></po-skeleton>  <!-- "Carregando" (repetitivo!) -->
`),e()(),t(304,"blockquote")(305,"p")(306,"strong"),n(307,"Boas pr\xE1ticas de acessibilidade:"),e()(),t(308,"ul")(309,"li"),n(310,"Forne\xE7a contexto espec\xEDfico na label para que os usu\xE1rios entendam o que est\xE1 carregando"),e()()(),t(311,"blockquote")(312,"ul")(313,"li"),n(314,"Em casos complexos, considere usar um \xFAnico "),t(315,"code"),n(316,'<div role="status">'),e(),n(317,` para todo o grupo
de skeletons, ao inv\xE9s de m\xFAltiplas labels id\xEAnticas, para evitar repeti\xE7\xE3o excessiva de an\xFAncios`),e()()()()(),t(318,"tr",14)(319,"td",15)(320,"div",16)(321,"span",17),n(322," p-border-radius"),i(323,"br"),e()()(),t(324,"td",18)(325,"code",22),n(326,"string"),e()(),t(327,"td",20),n(328,"-"),e(),t(329,"td",21)(330,"em")(331,"strong"),n(332,"(opcional)"),e()(),t(333,"p"),n(334,`Define o raio da borda do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),e(),t(335,"p"),n(336,"Esta propriedade sobrescreve o border-radius padr\xE3o de cada variante."),e()()(),t(337,"tr",14)(338,"td",15)(339,"div",16)(340,"span",17),n(341," p-height"),i(342,"br"),e()()(),t(343,"td",18)(344,"code",22),n(345,"string"),e()(),t(346,"td",20),n(347,"-"),e(),t(348,"td",21)(349,"em")(350,"strong"),n(351,"(opcional)"),e()(),t(352,"p"),n(353,`Define a altura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),e(),t(354,"p"),n(355,"Quando definido, sobrescreve a altura padr\xE3o da variante."),e()()(),t(356,"tr",14)(357,"td",15)(358,"div",16)(359,"span",17),n(360," p-size"),i(361,"br"),e()()(),t(362,"td",18)(363,"code",24),n(364,"PoSkeletonSize"),e()(),t(365,"td",20)(366,"p")(367,"code"),n(368,"md"),e()()(),t(369,"td",21)(370,"em")(371,"strong"),n(372,"(opcional)"),e()(),t(373,"p"),n(374,"Define o tamanho do skeleton para as variantes pr\xE9-definidas ("),t(375,"code"),n(376,"rectangle"),e(),n(377,", "),t(378,"code"),n(379,"square"),e(),n(380,", "),t(381,"code"),n(382,"circle"),e(),n(383,")."),e(),t(384,"p"),n(385,"Valores v\xE1lidos:"),e(),t(386,"ul")(387,"li")(388,"code"),n(389,"xs"),e(),n(390,": Extra pequeno (24px para square/circle, 72px x 24px para rectangle)"),e(),t(391,"li")(392,"code"),n(393,"sm"),e(),n(394,": Pequeno (32px para square/circle, 96px x 32px para rectangle)"),e(),t(395,"li")(396,"code"),n(397,"md"),e(),n(398,": M\xE9dio (48px para square/circle, 144px x 48px para rectangle)"),e(),t(399,"li")(400,"code"),n(401,"lg"),e(),n(402,": Grande (64px para square/circle, 192px x 64px para rectangle)"),e(),t(403,"li")(404,"code"),n(405,"xl"),e(),n(406,": Extra grande (96px para square/circle, 288px x 96px para rectangle)"),e(),t(407,"li")(408,"code"),n(409,"2xl"),e(),n(410,": Extra extra grande (144px para square/circle, 432px x 144px para rectangle)"),e()(),t(411,"p"),n(412,"Esta propriedade \xE9 ignorada quando "),t(413,"code"),n(414,"p-width"),e(),n(415," ou "),t(416,"code"),n(417,"p-height"),e(),n(418," s\xE3o definidos explicitamente."),e()()(),t(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),n(423," p-type"),i(424,"br"),e()()(),t(425,"td",18)(426,"code",25),n(427,"PoSkeletonType"),e()(),t(428,"td",20)(429,"p")(430,"code"),n(431,"normal"),e()()(),t(432,"td",21)(433,"em")(434,"strong"),n(435,"(opcional)"),e()(),t(436,"p"),n(437,"Define o tipo visual do skeleton, alterando sua cor de fundo."),e(),t(438,"p"),n(439,"Valores v\xE1lidos:"),e(),t(440,"ul")(441,"li")(442,"code"),n(443,"normal"),e(),n(444,": Cor neutra clara (padr\xE3o)"),e(),t(445,"li")(446,"code"),n(447,"primary"),e(),n(448,": Cor neutra m\xE9dia"),e(),t(449,"li")(450,"code"),n(451,"content"),e(),n(452,": Fundo branco"),e()()()(),t(453,"tr",14)(454,"td",15)(455,"div",16)(456,"span",17),n(457," p-variant"),i(458,"br"),e()()(),t(459,"td",18)(460,"code",26),n(461,"PoSkeletonVariant"),e()(),t(462,"td",20)(463,"p")(464,"code"),n(465,"text"),e()()(),t(466,"td",21)(467,"em")(468,"strong"),n(469,"(opcional)"),e()(),t(470,"p"),n(471,"Define a variante visual do skeleton."),e(),t(472,"p"),n(473,"Valores v\xE1lidos:"),e(),t(474,"ul")(475,"li")(476,"code"),n(477,"text"),e(),n(478,": Simula uma linha de texto (altura padr\xE3o: 1em)"),e(),t(479,"li")(480,"code"),n(481,"rectangle"),e(),n(482,": Forma retangular (propor\xE7\xE3o 3:1 por padr\xE3o)"),e(),t(483,"li")(484,"code"),n(485,"square"),e(),n(486,": Forma quadrada (largura e altura iguais)"),e(),t(487,"li")(488,"code"),n(489,"circle"),e(),n(490,": Forma circular (largura e altura iguais)"),e()()()(),t(491,"tr",14)(492,"td",15)(493,"div",16)(494,"span",17),n(495," p-width"),i(496,"br"),e()()(),t(497,"td",18)(498,"code",22),n(499,"string"),e()(),t(500,"td",20)(501,"p")(502,"code"),n(503,"100%"),e(),n(504," para variante "),t(505,"code"),n(506,"text"),e(),n(507,", tamanho baseado em "),t(508,"code"),n(509,"p-size"),e(),n(510," para outras variantes"),e()(),t(511,"td",21)(512,"em")(513,"strong"),n(514,"(opcional)"),e()(),t(515,"p"),n(516,`Define a largura do skeleton.
Aceita valores CSS v\xE1lidos (px, %, em, rem).`),e(),t(517,"p"),n(518,"Quando definido, sobrescreve a largura padr\xE3o da variante."),e()()()(),t(519,"h3"),n(520,"Enums"),e(),t(521,"h4",4)(522,"code",5),n(523,"PoSkeletonAnimation"),e()(),t(524,"div",2)(525,"p"),n(526,"Define os tipos de anima\xE7\xE3o do componente "),t(527,"code"),n(528,"po-skeleton"),e(),n(529,"."),e()(),t(530,"h4",10),n(531,"Propriedades"),e(),t(532,"table",11)(533,"tr",12)(534,"th",13),n(535,"Nome"),e(),t(536,"th",13),n(537,"Descri\xE7\xE3o"),e()(),t(538,"tr",14)(539,"td",15)(540,"div",16)(541,"span",17),n(542," none"),i(543,"br"),e()()(),t(544,"td",21)(545,"p"),n(546,"Sem anima\xE7\xE3o"),e()()(),t(547,"tr",14)(548,"td",15)(549,"div",16)(550,"span",17),n(551," pulse"),i(552,"br"),e()()(),t(553,"td",21)(554,"p"),n(555,"Anima\xE7\xE3o de pulsa\xE7\xE3o"),e()()(),t(556,"tr",14)(557,"td",15)(558,"div",16)(559,"span",17),n(560," shimmer"),i(561,"br"),e()()(),t(562,"td",21)(563,"p"),n(564,"Anima\xE7\xE3o de brilho deslizante"),e()()()(),t(565,"h4",4)(566,"code",5),n(567,"PoSkeletonSize"),e()(),t(568,"div",2)(569,"p"),n(570,"Define os tamanhos dispon\xEDveis para o componente "),t(571,"code"),n(572,"po-skeleton"),e(),n(573,"."),e()(),t(574,"h4",10),n(575,"Propriedades"),e(),t(576,"table",11)(577,"tr",12)(578,"th",13),n(579,"Nome"),e(),t(580,"th",13),n(581,"Descri\xE7\xE3o"),e()(),t(582,"tr",14)(583,"td",15)(584,"div",16)(585,"span",17),n(586," xs"),i(587,"br"),e()()(),t(588,"td",21)(589,"p"),n(590,"Tamanho extra pequeno"),e()()(),t(591,"tr",14)(592,"td",15)(593,"div",16)(594,"span",17),n(595," sm"),i(596,"br"),e()()(),t(597,"td",21)(598,"p"),n(599,"Tamanho pequeno"),e()()(),t(600,"tr",14)(601,"td",15)(602,"div",16)(603,"span",17),n(604," md"),i(605,"br"),e()()(),t(606,"td",21)(607,"p"),n(608,"Tamanho m\xE9dio"),e()()(),t(609,"tr",14)(610,"td",15)(611,"div",16)(612,"span",17),n(613," lg"),i(614,"br"),e()()(),t(615,"td",21)(616,"p"),n(617,"Tamanho grande"),e()()(),t(618,"tr",14)(619,"td",15)(620,"div",16)(621,"span",17),n(622," xl"),i(623,"br"),e()()(),t(624,"td",21)(625,"p"),n(626,"Tamanho extra grande"),e()()(),t(627,"tr",14)(628,"td",15)(629,"div",16)(630,"span",17),n(631," xxl"),i(632,"br"),e()()(),t(633,"td",21)(634,"p"),n(635,"Tamanho extra extra grande"),e()()()(),t(636,"h4",4)(637,"code",5),n(638,"PoSkeletonType"),e()(),t(639,"div",2)(640,"p"),n(641,"Define os tipos visuais dispon\xEDveis para o componente "),t(642,"code"),n(643,"po-skeleton"),e(),n(644,"."),e()(),t(645,"h4",10),n(646,"Propriedades"),e(),t(647,"table",11)(648,"tr",12)(649,"th",13),n(650,"Nome"),e(),t(651,"th",13),n(652,"Descri\xE7\xE3o"),e()(),t(653,"tr",14)(654,"td",15)(655,"div",16)(656,"span",17),n(657," normal"),i(658,"br"),e()()(),t(659,"td",21)(660,"p"),n(661,"Tipo padr\xE3o com cor neutra clara"),e()()(),t(662,"tr",14)(663,"td",15)(664,"div",16)(665,"span",17),n(666," primary"),i(667,"br"),e()()(),t(668,"td",21)(669,"p"),n(670,"Tipo prim\xE1rio com cor neutra m\xE9dia"),e()()(),t(671,"tr",14)(672,"td",15)(673,"div",16)(674,"span",17),n(675," content"),i(676,"br"),e()()(),t(677,"td",21)(678,"p"),n(679,"Tipo de conte\xFAdo com fundo branco"),e()()()(),t(680,"h4",4)(681,"code",5),n(682,"PoSkeletonVariant"),e()(),t(683,"div",2)(684,"p"),n(685,"Define as variantes visuais do componente "),t(686,"code"),n(687,"po-skeleton"),e(),n(688,"."),e()(),t(689,"h4",10),n(690,"Propriedades"),e(),t(691,"table",11)(692,"tr",12)(693,"th",13),n(694,"Nome"),e(),t(695,"th",13),n(696,"Descri\xE7\xE3o"),e()(),t(697,"tr",14)(698,"td",15)(699,"div",16)(700,"span",17),n(701," text"),i(702,"br"),e()()(),t(703,"td",21)(704,"p"),n(705,"Variante para simular texto"),e()()(),t(706,"tr",14)(707,"td",15)(708,"div",16)(709,"span",17),n(710," rectangle"),i(711,"br"),e()()(),t(712,"td",21)(713,"p"),n(714,"Variante retangular (largura maior que altura)"),e()()(),t(715,"tr",14)(716,"td",15)(717,"div",16)(718,"span",17),n(719," square"),i(720,"br"),e()()(),t(721,"td",21)(722,"p"),n(723,"Variante quadrada (largura igual \xE0 altura)"),e()()(),t(724,"tr",14)(725,"td",15)(726,"div",16)(727,"span",17),n(728," circle"),i(729,"br"),e()()(),t(730,"td",21)(731,"p"),n(732,"Variante circular"),e()()()()())},dependencies:[g],encapsulation:2})}return o})();var xe=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(p,l){this.route=p,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(p=>{let l=p.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(p){this.router.navigate([],{queryParams:{view:p},queryParamsHandling:"merge"}),this.activeTab=p}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(W(G),W(Q))};static \u0275cmp=d({type:o,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Skeleton",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-skeleton-doc"),e(),t(4,"po-tab",3),c("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-skeleton-basic-view")(6,"sample-po-skeleton-labs-view")(7,"sample-po-skeleton-credit-card-view")(8,"sample-po-skeleton-widget-card-view")(9,"sample-po-skeleton-user-profile-view")(10,"sample-po-skeleton-social-post-view")(11,"sample-po-skeleton-article-view"),e()()()),l&2&&(m("p-actions",a.actions),r(2),m("p-active",a.activeTab==="doc"),r(2),m("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[ee,h,S,ie,ae,pe,se,me,ue,Se,ge],encapsulation:2})}return o})();var Ne=[{path:"",component:xe}],ve=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=O({type:o});static \u0275inj=V({imports:[U.forChild(Ne),U]})}return o})();var Lt=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=O({type:o});static \u0275inj=V({imports:[te,ve]})}return o})();export{Lt as DocPoSkeletonModule};
