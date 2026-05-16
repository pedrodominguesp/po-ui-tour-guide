import{o as w,p as ie}from"./chunk-AT3MKFJ3.js";import{Gb as x,Hb as v,Ja as ee,S as X,U as Y,a as A,tb as te,va as Z,w as z,wa as D,ya as $}from"./chunk-GCMU57WK.js";import{Ea as h,Fa as i,Ga as t,Ha as p,I as B,L as H,Mb as T,Mc as W,Nc as U,O as s,Oa as _,Oc as Q,P as c,Pa as u,Pc as F,Qc as J,Va as R,Wa as j,Xa as G,_a as y,bb as M,cb as e,cd as K,eb as P,ed as O,gb as b,gd as N,ha as r,hb as f,ib as E,ma as I,oa as S,pa as L,rb as k}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ne=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-basic"]],standalone:!1,decls:5,vars:0,consts:[["pageSlide",""],["p-title","Po Page Slide Title"],[1,"po-row"],["p-label","View Page Slide",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=_();i(0,"po-page-slide",1,0),e(2," Hello World! "),t(),i(3,"div",2)(4,"po-button",3),u("p-click",function(){s(d);let a=y(1);return c(a.open())}),t()()}},dependencies:[z,D],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ae=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(p(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Slide Basic"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-slide #pageSlide p-title="Po Page Slide Title"> Hello World! </po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="View Page Slide" (p-click)="pageSlide.open()"></po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-slide-basic/sample-po-page-slide-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-slide-basic',
  templateUrl: './sample-po-page-slide-basic.component.html',
  standalone: false
})
export class SamplePoPageSlideBasicComponent {}
`),t()()()()(),i(21,"div",10),p(22,"sample-po-page-slide-basic"),t(),p(23,"hr")),l&2&&(r(5),M("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel),r(),h("ngClass",k(4,ge,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,ne],encapsulation:2})}return o})();var be=["poPageSlide"],le=(()=>{class o{poPageSlide;componentsSize;hideClose=!1;title;subtitle;content;size;properties;componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];propertiesOptions=[{value:"click-out",label:"Click Out"},{value:"hide-close",label:"Hide Close"}];sizeOptions=[{label:"Small",value:"sm"},{label:"Medium",value:"md"},{label:"Large",value:"lg"},{label:"Extra large",value:"xl"},{label:"Automatic",value:"auto"}];ngOnInit(){this.restore()}openPage(){this.poPageSlide.open()}restore(){this.componentsSize="medium",this.hideClose=!1,this.title="",this.subtitle="",this.content="",this.size="md",this.properties=[]}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-labs"]],viewQuery:function(l,n){if(l&1&&R(be,5),l&2){let d;j(d=G())&&(n.poPageSlide=d.first)}},standalone:!1,decls:15,vars:17,consts:[["poPageSlide",""],["f","ngForm"],[3,"p-click-out","p-components-size","p-hide-close","p-size","p-subtitle","p-title"],["p-label","Open Page Slide",3,"p-click","p-disabled"],["name","Title","p-clean","","p-label","Title","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Subtitle","p-clean","","p-label","Subtitle","p-optional","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Content","p-clean","","p-label","Content","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","Size","p-columns","4","p-label","Size","p-optional","",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=_();i(0,"po-page-slide",2,0),e(2),t(),i(3,"po-button",3),u("p-click",function(){return n.openPage()}),t(),p(4,"po-divider"),i(5,"form",null,1)(7,"po-input",4),E("ngModelChange",function(a){return s(d),f(n.title,a)||(n.title=a),c(a)}),t(),i(8,"po-input",5),E("ngModelChange",function(a){return s(d),f(n.subtitle,a)||(n.subtitle=a),c(a)}),t(),i(9,"po-input",6),E("ngModelChange",function(a){return s(d),f(n.content,a)||(n.content=a),c(a)}),t(),i(10,"po-checkbox-group",7),E("ngModelChange",function(a){return s(d),f(n.properties,a)||(n.properties=a),c(a)}),t(),i(11,"po-radio-group",8),E("ngModelChange",function(a){return s(d),f(n.size,a)||(n.size=a),c(a)}),t(),i(12,"po-radio-group",9),E("ngModelChange",function(a){return s(d),f(n.componentsSize,a)||(n.componentsSize=a),c(a)}),t(),i(13,"div",10)(14,"po-button",11),u("p-click",function(){return n.restore()}),t()()()}if(l&2){let d=y(6);h("p-click-out",n.properties.includes("click-out"))("p-components-size",n.componentsSize)("p-hide-close",n.properties.includes("hide-close"))("p-size",n.size)("p-subtitle",n.subtitle)("p-title",n.title),r(2),P(" ",n.content,`
`),r(),h("p-disabled",d.form.invalid),r(4),b("ngModel",n.title),r(),b("ngModel",n.subtitle),r(),b("ngModel",n.content),r(),b("ngModel",n.properties),h("p-options",n.propertiesOptions),r(),b("ngModel",n.size),h("p-options",n.sizeOptions),r(),b("ngModel",n.componentsSize),h("p-options",n.componentsSizeOptions)}},dependencies:[J,W,U,F,Q,z,A,X,Y,ee,D],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),pe=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(p(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Slide Labs"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-page-slide
  [p-click-out]="properties.includes('click-out')"
  [p-components-size]="componentsSize"
  [p-hide-close]="properties.includes('hide-close')"
  [p-size]="size"
  [p-subtitle]="subtitle"
  [p-title]="title"
  #poPageSlide
>
  { { content }}
</po-page-slide>

<po-button p-label="Open Page Slide" [p-disabled]="f.form.invalid" (p-click)="openPage()"></po-button>

<po-divider />

<form #f="ngForm">
  <po-input class="po-md-6" name="Title" [(ngModel)]="title" p-clean p-label="Title" p-required></po-input>
  <po-input class="po-md-6" name="Subtitle" [(ngModel)]="subtitle" p-clean p-label="Subtitle" p-optional></po-input>
  <po-input class="po-md-6" name="Content" [(ngModel)]="content" p-clean p-label="Content" p-required></po-input>

  <po-checkbox-group
    class="po-md-12 po-lg-6"
    name="properties"
    [(ngModel)]="properties"
    p-label="Properties"
    [p-options]="propertiesOptions"
  ></po-checkbox-group>

  <po-radio-group
    class="po-md-12"
    name="Size"
    [(ngModel)]="size"
    p-columns="4"
    p-label="Size"
    [p-options]="sizeOptions"
    p-optional
  ></po-radio-group>

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

  <div class="po-row">
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-slide-labs/sample-po-page-slide-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { PoCheckboxGroupOption, PoPageSlideComponent, PoRadioGroupOption } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-page-slide-labs',
  templateUrl: './sample-po-page-slide-labs.component.html',
  standalone: false
})
export class SamplePoPageSlideLabsComponent implements OnInit {
  @ViewChild('poPageSlide')
  private readonly poPageSlide: PoPageSlideComponent;

  public componentsSize: string;
  public hideClose = false;
  public title: string;
  public subtitle: string;
  public content: string;
  public size: string;
  public properties: Array<string>;

  public componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public propertiesOptions: Array<PoCheckboxGroupOption> = [
    {
      value: 'click-out',
      label: 'Click Out'
    },
    {
      value: 'hide-close',
      label: 'Hide Close'
    }
  ];

  public sizeOptions: Array<PoRadioGroupOption> = [
    {
      label: 'Small',
      value: 'sm'
    },
    {
      label: 'Medium',
      value: 'md'
    },
    {
      label: 'Large',
      value: 'lg'
    },
    {
      label: 'Extra large',
      value: 'xl'
    },
    {
      label: 'Automatic',
      value: 'auto'
    }
  ];

  ngOnInit() {
    this.restore();
  }

  public openPage() {
    this.poPageSlide.open();
  }

  public restore() {
    this.componentsSize = 'medium';
    this.hideClose = false;
    this.title = '';
    this.subtitle = '';
    this.content = '';
    this.size = 'md';
    this.properties = [];
  }
}
`),t()()()()(),i(21,"div",10),p(22,"sample-po-page-slide-labs"),t(),p(23,"hr")),l&2&&(r(5),M("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel),r(),h("ngClass",k(4,Ee,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,le],encapsulation:2})}return o})();var re=(()=>{class o{router=H(O);bluetooth=!0;locked=!1;microphone=!0;notification=!0;favorited=!1;localization=!0;openPageSlideFooterDocumentation(){this.router.navigate(["documentation","po-page-slide-footer"])}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-configuration"]],standalone:!1,decls:54,vars:6,consts:[["pageSlide",""],["p-title","Configuration","p-size","sm"],[1,"po-row","po-mb-2"],["p-label-off","Bluetooth","p-label-on","Bluetooth","name","bluetooth",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Unlocked","p-label-on","Locked","name","locked",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Microphone","p-label-on","Microphone","name","microphone",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Notification","p-label-on","Notification","name","notification",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Localization","p-label-on","Localization","name","localization",1,"po-sm-6",3,"ngModelChange","ngModel"],["p-label-off","Not favorited","p-label-on","Favorited","name","favorited",1,"po-sm-6",3,"ngModelChange","ngModel"],[1,"po-font-title"],[1,"po-m-2"],[1,"po-font-subtitle","po-mb-1"],[1,"po-ml-2"],["href","http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern","target","_blank","rel","noopener"],["p-label","Check footer",3,"p-click"],[1,"po-row"],["p-label","Open Configuration",1,"po-sm-3",3,"p-click"]],template:function(l,n){if(l&1){let d=_();i(0,"po-page-slide",1,0)(2,"div",2)(3,"po-switch",3),E("ngModelChange",function(a){return s(d),f(n.bluetooth,a)||(n.bluetooth=a),c(a)}),t(),i(4,"po-switch",4),E("ngModelChange",function(a){return s(d),f(n.locked,a)||(n.locked=a),c(a)}),t()(),i(5,"div",2)(6,"po-switch",5),E("ngModelChange",function(a){return s(d),f(n.microphone,a)||(n.microphone=a),c(a)}),t(),i(7,"po-switch",6),E("ngModelChange",function(a){return s(d),f(n.notification,a)||(n.notification=a),c(a)}),t()(),i(8,"div",2)(9,"po-switch",7),E("ngModelChange",function(a){return s(d),f(n.localization,a)||(n.localization=a),c(a)}),t(),i(10,"po-switch",8),E("ngModelChange",function(a){return s(d),f(n.favorited,a)||(n.favorited=a),c(a)}),t()(),p(11,"po-divider"),i(12,"h2",9),e(13,"About Page Slide"),t(),i(14,"section",10)(15,"h3",11),e(16,"Usage"),t(),i(17,"ul",12)(18,"li"),e(19,"To reveal additional navigation controls"),t(),i(20,"li"),e(21,"In TV or mobile space since controls and/or space is limited"),t(),i(22,"li"),e(23,"To expose a configuration panel (similar to the Module Configure Pattern)"),t(),i(24,"li"),e(25," To a lesser extent to reveal help or contextual information (the partial hiding of the related content might make it a poor choice for this) "),t()()(),i(26,"section",10)(27,"h3",11),e(28,"Challenges"),t(),i(29,"ul",12)(30,"li"),e(31,"Discoverability"),t(),i(32,"li"),e(33,"Losing context with the rest of the page"),t(),i(34,"li"),e(35,"Make the disruption work for you"),t()()(),i(36,"section",10)(37,"h3",11),e(38,"Recommendations"),t(),i(39,"ul",12)(40,"li"),e(41,"Use it sparingly only for major context switches"),t(),i(42,"li"),e(43,"Make the animation fast. No reason to wow the user with your ability to scroll"),t(),i(44,"li"),e(45,"Make the activation/deactivation dead simple"),t()()(),i(46,"p"),e(47," For more information visit "),i(48,"a",13),e(49,"Designing Web Interfaces: Page Slide"),t()(),i(50,"po-page-slide-footer")(51,"po-button",14),u("p-click",function(){return n.openPageSlideFooterDocumentation()}),t()()(),i(52,"div",15)(53,"po-button",16),u("p-click",function(){s(d);let a=y(1);return c(a.open())}),t()()}l&2&&(r(3),b("ngModel",n.bluetooth),r(),b("ngModel",n.locked),r(2),b("ngModel",n.microphone),r(),b("ngModel",n.notification),r(2),b("ngModel",n.localization),r(),b("ngModel",n.favorited))},dependencies:[W,F,z,A,$,D,Z],encapsulation:2})}return o})();var xe=o=>({"docs-sample-code-tabs":o}),de=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-configuration-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(p(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Slide - Configuration"),t(),i(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),p(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.html"),t(),i(13,"pre",7),e(14,`<po-page-slide p-title="Configuration" p-size="sm" #pageSlide>
  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Bluetooth"
      p-label-on="Bluetooth"
      name="bluetooth"
      [(ngModel)]="bluetooth"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Unlocked"
      p-label-on="Locked"
      name="locked"
      [(ngModel)]="locked"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Microphone"
      p-label-on="Microphone"
      name="microphone"
      [(ngModel)]="microphone"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Notification"
      p-label-on="Notification"
      name="notification"
      [(ngModel)]="notification"
    ></po-switch>
  </div>

  <div class="po-row po-mb-2">
    <po-switch
      class="po-sm-6"
      p-label-off="Localization"
      p-label-on="Localization"
      name="localization"
      [(ngModel)]="localization"
    ></po-switch>
    <po-switch
      class="po-sm-6"
      p-label-off="Not favorited"
      p-label-on="Favorited"
      name="favorited"
      [(ngModel)]="favorited"
    ></po-switch>
  </div>

  <po-divider />

  <h2 class="po-font-title">About Page Slide</h2>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Usage</h3>
    <ul class="po-ml-2">
      <li>To reveal additional navigation controls</li>
      <li>In TV or mobile space since controls and/or space is limited</li>
      <li>To expose a configuration panel (similar to the Module Configure Pattern)</li>
      <li>
        To a lesser extent to reveal help or contextual information (the partial hiding of the related content might
        make it a poor choice for this)
      </li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Challenges</h3>
    <ul class="po-ml-2">
      <li>Discoverability</li>
      <li>Losing context with the rest of the page</li>
      <li>Make the disruption work for you</li>
    </ul>
  </section>

  <section class="po-m-2">
    <h3 class="po-font-subtitle po-mb-1">Recommendations</h3>
    <ul class="po-ml-2">
      <li>Use it sparingly only for major context switches</li>
      <li>Make the animation fast. No reason to wow the user with your ability to scroll</li>
      <li>Make the activation/deactivation dead simple</li>
    </ul>
  </section>

  <p>
    For more information visit
    <a href="http://designingwebinterfaces.com/page-slide-stay-on-the-page-pattern" target="_blank" rel="noopener"
      >Designing Web Interfaces: Page Slide</a
    >
  </p>
  <po-page-slide-footer>
    <po-button p-label="Check footer" (p-click)="openPageSlideFooterDocumentation()"> </po-button>
  </po-page-slide-footer>
</po-page-slide>

<div class="po-row">
  <po-button class="po-sm-3" p-label="Open Configuration" (p-click)="pageSlide.open()"></po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-slide-configuration/sample-po-page-slide-configuration.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sample-po-page-slide-configuration',
  templateUrl: './sample-po-page-slide-configuration.component.html',
  standalone: false
})
export class SamplePoPageSlideConfigurationComponent {
  private router = inject(Router);

  public bluetooth = true;
  public locked = false;
  public microphone = true;
  public notification = true;
  public favorited = false;
  public localization = true;

  openPageSlideFooterDocumentation() {
    this.router.navigate(['documentation', 'po-page-slide-footer']);
  }
}
`),t()()()()(),i(21,"div",10),p(22,"sample-po-page-slide-configuration"),t(),p(23,"hr")),l&2&&(r(5),M("po-icon "+n.sampleCodeButtonIcon),r(),P(" ",n.sampleCodeButtonLabel),r(),h("ngClass",k(4,xe,n.hideSampleCodeTabs)))},dependencies:[T,w,x,v,re],encapsulation:2})}return o})();var me=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275cmp=S({type:o,selectors:[["sample-po-page-slide-doc"]],standalone:!1,decls:553,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/grid-system"],["href","/documentation/po-page-slide-footer"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-typescript"]],template:function(l,n){l&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageModule } from '@po-ui/ng-components';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo respons\xE1vel pelos componentes de estrutura de p\xE1gina: "),i(7,"code"),e(8,"po-page-default"),t(),e(9,", "),i(10,"code"),e(11,"po-page-detail"),t(),e(12,`,
`),i(13,"code"),e(14,"po-page-edit"),t(),e(15,", "),i(16,"code"),e(17,"po-page-list"),t(),e(18," e "),i(19,"code"),e(20,"po-page-slide"),t(),e(21,"."),t()(),i(22,"h3",3),e(23,"Componente"),t(),i(24,"h4",4)(25,"code",5),e(26,"PoPageSlideComponent"),t()(),i(27,"div",2)(28,"p"),e(29,"O componente "),i(30,"code"),e(31,"po-page-slide"),t(),e(32,` \xE9 utilizado para incluir conte\xFAdos secund\xE1rios
adicionando controles e navega\xE7\xF5es adicionais, mas mantendo o usu\xE1rio na
p\xE1gina principal.`),t(),i(33,"p"),e(34,"Este componente \xE9 ativado a partir do m\xE9todo "),i(35,"code"),e(36,"#open()"),t(),e(37,` e pode ser encerrado
atrav\xE9s do bot\xE3o que encontra-se no cabe\xE7alho do mesmo ou atrav\xE9s do m\xE9todo
`),i(38,"code"),e(39,"#close()"),t(),e(40,"."),t(),i(41,"blockquote")(42,"p"),e(43,"Para o correto funcionamento do componente "),i(44,"code"),e(45,"po-page-slide"),t(),e(46,`, deve ser
importado o m\xF3dulo `),i(47,"code"),e(48,"BrowserAnimationsModule"),t(),e(49,` no m\xF3dulo principal da sua
aplica\xE7\xE3o.`),t()(),i(50,"p"),e(51,"M\xF3dulo da aplica\xE7\xE3o:"),t(),i(52,"pre")(53,"code"),e(54,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule } from '@po-ui/ng-components';
...

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...
    PoModule
  ],
  declarations: [
    AppComponent,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`),t()(),i(55,"p"),e(56,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),t(),i(57,"pre")(58,"code"),e(59,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),t()(),i(60,"p"),e(61," Caso utilize componentes de field dentro do page-slide, recomenda-se o uso do "),i(62,"a",6),e(63,"Grid System"),t(),e(64,"."),t(),i(65,"p"),e(66,"No rodap\xE9 \xE9 poss\xEDvel utilizar o componente "),i(67,"a",7)(68,"code"),e(69,"PoPageSlideFooter"),t()(),e(70," para customiza\xE7\xE3o do template."),t(),i(71,"ul")(72,"li")(73,"h4"),e(74,"Tokens customiz\xE1veis"),t()()(),i(75,"p"),e(76,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),i(77,"blockquote")(78,"p"),e(79,"Para maiores informa\xE7\xF5es, acesse o guia "),i(80,"a",8),e(81,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(82,"."),t()(),i(83,"table")(84,"thead")(85,"tr")(86,"th"),e(87,"Propriedade"),t(),i(88,"th"),e(89,"Descri\xE7\xE3o"),t(),i(90,"th"),e(91,"Valor Padr\xE3o"),t()()(),i(92,"tbody")(93,"tr")(94,"td")(95,"code"),e(96,"--font-family"),t()(),i(97,"td"),e(98,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(99,"td")(100,"code"),e(101,"var(--font-family-theme)"),t()()(),i(102,"tr")(103,"td")(104,"code"),e(105,"--font-weight"),t()(),i(106,"td"),e(107,"Peso da fonte"),t(),i(108,"td")(109,"code"),e(110,"var(--font-weight-bold)"),t()()(),i(111,"tr")(112,"td")(113,"code"),e(114,"--padding-header"),t()(),i(115,"td"),e(116,"Espa\xE7amento do header"),t(),i(117,"td")(118,"code"),e(119,"var(--spacing-md)"),t()()(),i(120,"tr")(121,"td")(122,"code"),e(123,"--padding-body"),t()(),i(124,"td"),e(125,"Espa\xE7amento do conte\xFAdo"),t(),i(126,"td")(127,"code"),e(128,"var(--line-height-none)"),t()()(),i(129,"tr")(130,"td")(131,"code"),e(132,"--padding-footer"),t()(),i(133,"td"),e(134,"Espa\xE7amento do footer"),t(),i(135,"td")(136,"code"),e(137,"var(--spacing-sm) var(--spacing-md) var(--spacing-xl) var(--spacing-md)"),t()()(),i(138,"tr")(139,"td")(140,"strong"),e(141,"Default Values"),t()(),p(142,"td")(143,"td"),t(),i(144,"tr")(145,"td")(146,"code"),e(147,"--color-overlay"),t()(),i(148,"td"),e(149,"Cor do overlay"),t(),i(150,"td")(151,"code"),e(152,"var(--color-neutral-dark-80)"),t()()(),i(153,"tr")(154,"td")(155,"code"),e(156,"--opacity-overlay"),t()(),i(157,"td"),e(158,"Cor da opacidade do overlay"),t(),i(159,"td")(160,"code"),e(161,"0.7"),t()()(),i(162,"tr")(163,"td")(164,"code"),e(165,"--background-color"),t()(),i(166,"td"),e(167,"Cor de background"),t(),i(168,"td")(169,"code"),e(170,"var(--color-neutral-light-00)"),t()()(),i(171,"tr")(172,"td")(173,"code"),e(174,"--border-color"),t()(),i(175,"td"),e(176,"Cor da borda"),t(),i(177,"td")(178,"code"),e(179,"var(--color-neutral-light-20)"),t()()(),i(180,"tr")(181,"td")(182,"code"),e(183,"--color-title"),t()(),i(184,"td"),e(185,"Cor do titulo do header"),t(),i(186,"td")(187,"code"),e(188,"var(--color-neutral-dark-95)"),t()()(),i(189,"tr")(190,"td")(191,"code"),e(192,"--border-radius"),t()(),i(193,"td"),e(194,"Radius da borda"),t(),i(195,"td")(196,"code"),e(197,"var(--border-radius-md) 0 0 var(--border-radius-md)"),t()()(),i(198,"tr")(199,"td")(200,"code"),e(201,"--transition-duration"),t()(),i(202,"td"),e(203,"Dura\xE7\xE3o da transi\xE7\xE3o"),t(),i(204,"td")(205,"code"),e(206,"var(--duration-extra-fast)"),t()()(),i(207,"tr")(208,"td")(209,"code"),e(210,"--transition-timing"),t()(),i(211,"td"),e(212,"Dura\xE7\xE3o da transi\xE7\xE3o com o tipo de transi\xE7\xE3o"),t(),i(213,"td")(214,"code"),e(215,"var(--duration-extra-slow) var(--timing-standart)"),t()()(),i(216,"tr")(217,"td")(218,"code"),e(219,"--page-slide-width-sm"),t()(),i(220,"td"),e(221,"Tamanho da largura do componente no tamanho "),i(222,"code"),e(223,"small"),t()(),i(224,"td")(225,"code"),e(226,"40%"),t()()(),i(227,"tr")(228,"td")(229,"code"),e(230,"--page-slide-width-md"),t()(),i(231,"td"),e(232,"Tamanho da largura do componente no tamanho "),i(233,"code"),e(234,"medium"),t()(),i(235,"td")(236,"code"),e(237,"50%"),t()()(),i(238,"tr")(239,"td")(240,"code"),e(241,"--page-slide-width-lg"),t()(),i(242,"td"),e(243,"Tamanho da largura do componente no tamanho "),i(244,"code"),e(245,"large"),t()(),i(246,"td")(247,"code"),e(248,"60%"),t()()(),i(249,"tr")(250,"td")(251,"code"),e(252,"--page-slide-width-xl"),t()(),i(253,"td"),e(254,"Tamanho da largura do componente no tamanho "),i(255,"code"),e(256,"extra large"),t()(),i(257,"td")(258,"code"),e(259,"70%"),t()()(),i(260,"tr")(261,"td")(262,"code"),e(263,"--page-slide-min-width-auto"),t()(),i(264,"td"),e(265,"Tamanho da largura m\xEDnima do componente no tamanho "),i(266,"code"),e(267,"auto"),t()(),i(268,"td")(269,"code"),e(270,"40%"),t()()(),i(271,"tr")(272,"td")(273,"code"),e(274,"--page-slide-max-width-auto"),t()(),i(275,"td"),e(276,"Tamanho da largura m\xE1xima do componente no tamanho "),i(277,"code"),e(278,"auto"),t()(),i(279,"td")(280,"code"),e(281,"90%"),t()()()()()(),i(282,"div",9)(283,"h4",10),e(284,"Seletor"),t(),i(285,"pre",11),e(286,`<po-page-slide
    p-click-out="boolean"
    (p-close)="EventEmitter"
    p-components-size="string"
    p-flexible-width="boolean"
    p-hide-close="boolean"
    p-size="string"
    p-subtitle="string"
    p-title="string" >
</po-page-slide>
`),t()(),i(287,"h4",12),e(288,"Propriedades"),t(),i(289,"table",13)(290,"tr",14)(291,"th",15),e(292,"Nome"),t(),i(293,"th",15),e(294,"Tipo"),t(),i(295,"th",15),e(296,"Padr\xE3o"),t(),i(297,"th",15),e(298,"Descri\xE7\xE3o"),t()(),i(299,"tr",16)(300,"td",17)(301,"div",18)(302,"span",19),e(303," p-click-out"),p(304,"br"),t()()(),i(305,"td",20)(306,"code",21),e(307,"boolean"),t()(),i(308,"td",22)(309,"p")(310,"code"),e(311,"false"),t()()(),i(312,"td",23)(313,"em")(314,"strong"),e(315,"(opcional)"),t()(),i(316,"p"),e(317,"Define se permite o encerramento da p\xE1gina ao clicar fora da mesma."),t()()(),i(318,"tr",16)(319,"td",17)(320,"div",24)(321,"span",25),e(322," (p-close)"),p(323,"br"),t()()(),i(324,"td",20)(325,"code",26),e(326,"EventEmitter"),t()(),i(327,"td",22),e(328,"-"),t(),i(329,"td",23)(330,"em")(331,"strong"),e(332,"(opcional)"),t()(),i(333,"p"),e(334,"Evento executado ao fechar o page slide."),t()()(),i(335,"tr",16)(336,"td",17)(337,"div",18)(338,"span",19),e(339," p-components-size"),p(340,"br"),t()()(),i(341,"td",20)(342,"code",27),e(343,"string"),t()(),i(344,"td",22)(345,"p")(346,"code"),e(347,"medium"),t()()(),i(348,"td",23)(349,"em")(350,"strong"),e(351,"(opcional)"),t()(),i(352,"p"),e(353,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(354,"ul")(355,"li")(356,"code"),e(357,"small"),t(),e(358,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(359,"li")(360,"code"),e(361,"medium"),t(),e(362,": aplica a medida medium de cada componente."),t()(),i(363,"blockquote")(364,"p"),e(365,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(366,"code"),e(367,"medium"),t(),e(368,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(369,"a",28),e(370,"po-theme"),t(),e(371,"."),t()()()(),i(372,"tr",16)(373,"td",17)(374,"div",18)(375,"span",19),e(376," p-flexible-width"),p(377,"br"),t()()(),i(378,"td",20)(379,"code",21),e(380,"boolean"),t()(),i(381,"td",22)(382,"p")(383,"code"),e(384,"false"),t()()(),i(385,"td",23)(386,"em")(387,"strong"),e(388,"(opcional)"),t()(),i(389,"p"),e(390,"Permite a expans\xE3o din\xE2mica da largura do "),i(391,"code"),e(392,"po-page-slide"),t(),e(393," quando "),i(394,"code"),e(395,"p-size"),t(),e(396," for "),i(397,"code"),e(398,"auto"),t(),e(399,` (autom\xE1tico).
Propriedade necess\xE1ria para correto funcionamento da `),i(400,"code"),e(401,"po-table"),t(),e(402," dentro do "),i(403,"code"),e(404,"po-page-slide"),t()()()(),i(405,"tr",16)(406,"td",17)(407,"div",18)(408,"span",19),e(409," p-hide-close"),p(410,"br"),t()()(),i(411,"td",20)(412,"code",21),e(413,"boolean"),t()(),i(414,"td",22)(415,"p")(416,"code"),e(417,"false"),t()()(),i(418,"td",23)(419,"em")(420,"strong"),e(421,"(opcional)"),t()(),i(422,"p"),e(423,"Oculta o bot\xE3o de encerramento da p\xE1gina."),t(),i(424,"p"),e(425,"Esta op\xE7\xE3o s\xF3 \xE9 poss\xEDvel se a propriedade "),i(426,"code"),e(427,"p-click-out"),t(),e(428," estiver habilitada."),t()()(),i(429,"tr",16)(430,"td",17)(431,"div",18)(432,"span",19),e(433," p-size"),p(434,"br"),t()()(),i(435,"td",20)(436,"code",27),e(437,"string"),t()(),i(438,"td",22)(439,"p")(440,"code"),e(441,"md"),t()()(),i(442,"td",23)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),i(446,"p"),e(447,"Define o tamanho da p\xE1gina."),t(),i(448,"p"),e(449,"Valores v\xE1lidos:"),t(),i(450,"ul")(451,"li")(452,"code"),e(453,"sm"),t(),e(454," (pequeno)"),t(),i(455,"li")(456,"code"),e(457,"md"),t(),e(458," (m\xE9dio)"),t(),i(459,"li")(460,"code"),e(461,"lg"),t(),e(462," (grande)"),t(),i(463,"li")(464,"code"),e(465,"xl"),t(),e(466," (extra-grande)"),t(),i(467,"li")(468,"code"),e(469,"auto"),t(),e(470," (autom\xE1tico)"),t()(),i(471,"blockquote")(472,"p"),e(473,"Todas as op\xE7\xF5es de tamanho, exceto "),i(474,"code"),e(475,"auto"),t(),e(476,", possuem uma largura m\xE1xima de "),i(477,"strong"),e(478,"768px"),t(),e(479,"."),t()()()(),i(480,"tr",16)(481,"td",17)(482,"div",18)(483,"span",19),e(484," p-subtitle"),p(485,"br"),t()()(),i(486,"td",20)(487,"code",27),e(488,"string"),t()(),i(489,"td",22),e(490,"-"),t(),i(491,"td",23)(492,"em")(493,"strong"),e(494,"(opcional)"),t()(),i(495,"p"),e(496,"Subt\xEDtulo da p\xE1gina."),t()()(),i(497,"tr",16)(498,"td",17)(499,"div",18)(500,"span",19),e(501," p-title"),p(502,"br"),t()()(),i(503,"td",20)(504,"code",27),e(505,"string"),t()(),i(506,"td",22),e(507,"-"),t(),i(508,"td",23)(509,"p"),e(510,"T\xEDtulo da p\xE1gina."),t()()()(),i(511,"h3",12),e(512,"M\xE9todos"),t(),i(513,"table",29)(514,"tr",16)(515,"th",30)(516,"div",18)(517,"h4")(518,"span",19),e(519," open "),t()()()()(),i(520,"tr",23)(521,"td",23)(522,"p"),e(523,"Ativa a visualiza\xE7\xE3o da p\xE1gina."),t(),i(524,"p"),e(525,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),i(526,"code"),e(527,"ViewChild"),t(),e(528," da seguinte forma:"),t(),i(529,"pre")(530,"code",31),e(531,`import { PoPageSlideComponent } from '@po/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public openPage() {
  this.pageSlide.open();
}
`),t()()()()(),p(532,"br"),i(533,"table",29)(534,"tr",16)(535,"th",30)(536,"div",18)(537,"h4")(538,"span",19),e(539," close "),t()()()()(),i(540,"tr",23)(541,"td",23)(542,"p"),e(543,"Encerra a visualiza\xE7\xE3o da p\xE1gina."),t(),i(544,"p"),e(545,`Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo
ser utilizado o `),i(546,"code"),e(547,"ViewChild"),t(),e(548," da seguinte forma:"),t(),i(549,"pre")(550,"code",31),e(551,`import { PoPageSlideComponent } from '@po-ui/ng-components';

...

@ViewChild(PoPageSlideComponent, { static: true }) pageSlide: PoPageSlideComponent;

public closePage() {
  this.pageSlide.close();
}
`),t()()()()(),p(552,"br"),t())},dependencies:[w],encapsulation:2})}return o})();var se=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,l){this.route=m,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let l=m.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||o)(I(K),I(O))};static \u0275cmp=S({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Page Slide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),p(3,"sample-po-page-slide-doc"),t(),i(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),p(5,"sample-po-page-slide-basic-view")(6,"sample-po-page-slide-labs-view")(7,"sample-po-page-slide-configuration-view"),t()()()),l&2&&(h("p-actions",n.actions),r(2),h("p-active",n.activeTab==="doc"),r(2),h("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[te,x,v,ae,pe,de,me],encapsulation:2})}return o})();var _e=[{path:"",component:se}],ce=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=B({imports:[N.forChild(_e),N]})}return o})();var Ze=(()=>{class o{static \u0275fac=function(l){return new(l||o)};static \u0275mod=L({type:o});static \u0275inj=B({imports:[ie,ce]})}return o})();export{Ze as DocPoPageSlideModule};
