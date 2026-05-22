import{o as E,p as oe}from"./chunk-WYOAC7KN.js";import{Hb as f,Ib as S,Ja as ee,S as Z,U as $,a as K,eb as te,p as g,q as k,ub as F,w as X}from"./chunk-XOCFD5XY.js";import{Ba as V,Ca as H,Da as W,Ea as m,Fa as o,Ga as t,Ha as r,I as M,Mb as T,Mc as Q,O as C,Oa as j,P as v,Pa as u,Pc as Y,Va as R,Wa as N,Xa as G,_a as O,bb as A,cb as e,cd as U,eb as b,ed as J,gb as y,gd as q,ha as d,hb as w,ib as P,ma as D,oa as s,pa as L,rb as I}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ne=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-basic"]],standalone:!1,decls:7,vars:0,consts:[["p-label","PO Accordion 1"],[1,"po-text-color-neutral-dark-40"],["p-label","PO Accordion 2"]],template:function(a,i){a&1&&(o(0,"po-accordion")(1,"po-accordion-item",0)(2,"p",1),e(3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),t()(),o(4,"po-accordion-item",2)(5,"p",1),e(6," In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque "),t()()())},dependencies:[k,g],encapsulation:2})}return n})();var he=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Accordion Basic"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-accordion-basic/sample-po-accordion-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-accordion>
  <po-accordion-item p-label="PO Accordion 1">
    <p class="po-text-color-neutral-dark-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </po-accordion-item>
  <po-accordion-item p-label="PO Accordion 2">
    <p class="po-text-color-neutral-dark-40">
      In rhoncus condimentum elit, egestas efficitur orci tincidunt a. Etiam ut neque
    </p>
  </po-accordion-item>
</po-accordion>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-accordion-basic/sample-po-accordion-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-accordion-basic',
  templateUrl: './sample-po-accordion-basic.component.html',
  standalone: false
})
export class SamplePoAccordionBasicComponent {}
`),t()()()()(),o(21,"div",10),r(22,"sample-po-accordion-basic"),t(),r(23,"hr")),a&2&&(d(5),A("po-icon "+i.sampleCodeButtonIcon),d(),b(" ",i.sampleCodeButtonLabel),d(),m("ngClass",I(4,he,i.hideSampleCodeTabs)))},dependencies:[T,E,f,S,ne],encapsulation:2})}return n})();function ge(n,z){if(n&1&&(o(0,"po-accordion-item",2),e(1),t()),n&2){let l=z.$implicit,a=z.$index;m("p-label",l.label)("p-disabled",l.disabledItem)("p-label-tag",l.labelTag)("p-type-tag",l.typeTag),d(),b(" Accordion Item Content ",a," ")}}var re=(()=>{class n{accordionFieldsForm=[{property:"label",required:!0,gridColumns:6},{property:"labelTag",label:"Label Tag",gridColumns:6}];propertiesAccordionOptions=[{value:"showManager",label:"Show Accordion Manager"},{value:"expandItems",label:"Allow Expand All Items"}];typeTagOptions=[{value:"success",label:"Success"},{value:"warning",label:"Warning"},{value:"danger",label:"Danger"},{value:"info",label:"Info"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];disabledOption=[{value:"disabled",label:"Disabled"}];properties=[];propertiesAccordion=[];disabledItem=[];accordionItemIndex;customLiterals;literals;typeTag;accordionItems=[];size;ngOnInit(){this.restore()}addAccordionItem(l){l.disabledItem=this.disabledItem.includes("disabled"),l.labelTag&&(l.typeTag=this.typeTag);let a=Object.assign({},l,{value:this.accordionItems.length});this.accordionItems=[...this.accordionItems,a],this.disabledItem=[],this.typeTag=void 0}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(l){this.customLiterals=void 0}}restore(){this.accordionItems=[],this.customLiterals=void 0,this.disabledItem=[],this.literals="",this.properties=[],this.propertiesAccordion=[],this.typeTag=void 0,this.size="medium"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-labs"]],standalone:!1,decls:18,vars:16,consts:[["accordionForm",""],[3,"p-literals","p-show-manager-accordion","p-allow-expand-all-items","p-size"],[3,"p-label","p-disabled","p-label-tag","p-type-tag"],["p-label","ACCORDION"],[1,"po-row","po-mt-1","po-mb-1"],["name","literals","p-help",'Ex.: {"closeAllItems": "Fechar itens"}',"p-label","Literals",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","propertiesAccordion","p-label","Properties Accordion",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","ACCORDION ITEM"],[3,"p-fields","p-value"],[1,"po-row","po-mt-2","po-mb-2"],["p-label","Type Tag",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],["p-label","Properties Accordion Item","name","disabledItem",1,"po-md-6",3,"ngModelChange","p-options","ngModel"],[1,"po-row","po-mt-1"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel","p-options"],["p-label","Add Accordion",1,"po-md-6",3,"p-click","p-disabled"],[1,"po-row","po-mt-2"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,i){if(a&1){let c=j();o(0,"po-accordion",1),H(1,ge,2,5,"po-accordion-item",2,V),t(),r(3,"po-divider",3),o(4,"div",4)(5,"po-input",5),P("ngModelChange",function(p){return C(c),w(i.literals,p)||(i.literals=p),v(p)}),u("p-change",function(){return i.changeLiterals()}),t(),o(6,"po-checkbox-group",6),P("ngModelChange",function(p){return C(c),w(i.propertiesAccordion,p)||(i.propertiesAccordion=p),v(p)}),t()(),r(7,"po-divider",7)(8,"po-dynamic-form",8,0),o(10,"div",9)(11,"po-radio-group",10),P("ngModelChange",function(p){return C(c),w(i.typeTag,p)||(i.typeTag=p),v(p)}),t(),o(12,"po-checkbox-group",11),P("ngModelChange",function(p){return C(c),w(i.disabledItem,p)||(i.disabledItem=p),v(p)}),t()(),o(13,"div",12)(14,"po-radio-group",13),P("ngModelChange",function(p){return C(c),w(i.size,p)||(i.size=p),v(p)}),t(),o(15,"po-button",14),u("p-click",function(){C(c);let p=O(9);return i.addAccordionItem(p.form.value),v(p.form.reset())}),t()(),o(16,"div",15)(17,"po-button",16),u("p-click",function(){return i.restore()}),t()()}if(a&2){let c=O(9);m("p-literals",i.customLiterals)("p-show-manager-accordion",i.propertiesAccordion.includes("showManager"))("p-allow-expand-all-items",i.propertiesAccordion.includes("expandItems"))("p-size",i.size),d(),W(i.accordionItems),d(4),y("ngModel",i.literals),d(),y("ngModel",i.propertiesAccordion),m("p-options",i.propertiesAccordionOptions),d(2),m("p-fields",i.accordionFieldsForm)("p-value",i.accordionItems),d(3),m("p-options",i.typeTagOptions),y("ngModel",i.typeTag),d(),m("p-options",i.disabledOption),y("ngModel",i.disabledItem),d(2),y("ngModel",i.size),m("p-options",i.sizeOptions),d(),m("p-disabled",c.form.invalid)}},dependencies:[Q,Y,k,g,X,K,te,Z,$,ee],encapsulation:2})}return n})();var Se=n=>({"docs-sample-code-tabs":n}),le=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Accordion Labs"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-accordion-labs/sample-po-accordion-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-accordion
  [p-literals]="customLiterals"
  [p-show-manager-accordion]="propertiesAccordion.includes('showManager')"
  [p-allow-expand-all-items]="propertiesAccordion.includes('expandItems')"
  [p-size]="size"
>
  @for (accordionItem of accordionItems; track accordionItem; let i = $index) {
    <po-accordion-item
      [p-label]="accordionItem.label"
      [p-disabled]="accordionItem.disabledItem"
      [p-label-tag]="accordionItem.labelTag"
      [p-type-tag]="accordionItem.typeTag"
    >
      Accordion Item Content { { i }}
    </po-accordion-item>
  }
</po-accordion>

<po-divider p-label="ACCORDION"></po-divider>
<div class="po-row po-mt-1 po-mb-1">
  <po-input
    class="po-md-6"
    name="literals"
    [(ngModel)]="literals"
    p-help='Ex.: {"closeAllItems": "Fechar itens"}'
    p-label="Literals"
    (p-change)="changeLiterals()"
  >
  </po-input>
  <po-checkbox-group
    class="po-md-6"
    name="propertiesAccordion"
    [(ngModel)]="propertiesAccordion"
    p-label="Properties Accordion"
    [p-options]="propertiesAccordionOptions"
  >
  </po-checkbox-group>
</div>

<po-divider p-label="ACCORDION ITEM"></po-divider>
<po-dynamic-form #accordionForm [p-fields]="accordionFieldsForm" [p-value]="accordionItems"> </po-dynamic-form>

<div class="po-row po-mt-2 po-mb-2">
  <po-radio-group class="po-md-6" p-label="Type Tag" [p-options]="typeTagOptions" [(ngModel)]="typeTag">
  </po-radio-group>
  <po-checkbox-group
    class="po-md-6"
    p-label="Properties Accordion Item"
    name="disabledItem"
    [p-options]="disabledOption"
    [(ngModel)]="disabledItem"
  >
  </po-checkbox-group>
</div>

<div class="po-row po-mt-1">
  <po-radio-group
    class="po-md-12 po-lg-6"
    name="size"
    [(ngModel)]="size"
    p-label="Size"
    p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
    [p-options]="sizeOptions"
  >
  </po-radio-group>
  <po-button
    class="po-md-6"
    p-label="Add Accordion"
    [p-disabled]="accordionForm.form.invalid"
    (p-click)="addAccordionItem(accordionForm.form.value); accordionForm.form.reset()"
  >
  </po-button>
</div>

<div class="po-row po-mt-2">
  <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
</div>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-accordion-labs/sample-po-accordion-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoAccordionItemComponent,
  PoAccordionLiterals,
  PoCheckboxGroupOption,
  PoDynamicFormField,
  PoRadioGroupOption,
  PoTagType
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-labs',
  templateUrl: './sample-po-accordion-labs.component.html',
  standalone: false
})
export class SamplePoAccordionLabsComponent implements OnInit {
  accordionFieldsForm: Array<PoDynamicFormField> = [
    { property: 'label', required: true, gridColumns: 6 },
    { property: 'labelTag', label: 'Label Tag', gridColumns: 6 }
  ];

  propertiesAccordionOptions: Array<PoCheckboxGroupOption> = [
    { value: 'showManager', label: 'Show Accordion Manager' },
    { value: 'expandItems', label: 'Allow Expand All Items' }
  ];

  typeTagOptions: Array<PoRadioGroupOption> = [
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
    { value: 'danger', label: 'Danger' },
    { value: 'info', label: 'Info' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  disabledOption: Array<PoRadioGroupOption> = [{ value: 'disabled', label: 'Disabled' }];

  properties: Array<string> = [];
  propertiesAccordion: Array<string> = [];
  disabledItem: Array<string> = [];
  accordionItemIndex: number;
  customLiterals: PoAccordionLiterals;
  literals: string;
  typeTag: PoTagType;
  accordionItems: Array<PoAccordionItemComponent> = [];
  size: string;

  ngOnInit() {
    this.restore();
  }

  addAccordionItem(accordionItem: PoAccordionItemComponent) {
    accordionItem.disabledItem = this.disabledItem.includes('disabled');
    if (accordionItem.labelTag) {
      accordionItem.typeTag = this.typeTag;
    }
    const newAccordionItem = Object.assign({}, accordionItem, { value: this.accordionItems.length });

    this.accordionItems = [...this.accordionItems, newAccordionItem];
    this.disabledItem = [];
    this.typeTag = undefined;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  restore() {
    this.accordionItems = [];
    this.customLiterals = undefined;
    this.disabledItem = [];
    this.literals = '';
    this.properties = [];
    this.propertiesAccordion = [];
    this.typeTag = undefined;
    this.size = 'medium';
  }
}
`),t()()()()(),o(21,"div",10),r(22,"sample-po-accordion-labs"),t(),r(23,"hr")),a&2&&(d(5),A("po-icon "+i.sampleCodeButtonIcon),d(),b(" ",i.sampleCodeButtonLabel),d(),m("ngClass",I(4,Se,i.hideSampleCodeTabs)))},dependencies:[T,E,f,S,re],encapsulation:2})}return n})();var de=(()=>{class n{questionOne;ngAfterContentInit(){this.questionOne.expand()}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-faq"]],viewQuery:function(a,i){if(a&1&&R(g,7),a&2){let c;N(c=G())&&(i.questionOne=c.first)}},standalone:!1,decls:22,vars:1,consts:[["questionOne",""],["p-title","Blood donation FAQs"],[1,"po-pb-2","po-text-color-neutral-dark-40"],[3,"p-show-manager-accordion"],["p-label","Who can donate?"],[1,"po-text-color-neutral-dark-40"],["p-label","How long does it take for the blood to be processed?","p-label-tag","Important!","p-type-tag","danger"],["p-label","How long does the body take to replenish donated blood?"],["p-label","Is donating blood safe?"],[1,"po-pt-2","po-text-color-neutral-dark-40"],["href","http://www.hemosc.org.br/perguntas-frequentes.html"]],template:function(a,i){a&1&&(o(0,"po-page-default",1)(1,"p",2),e(2,"You don't have to be afraid of being a blood donor!"),t(),o(3,"po-accordion",3)(4,"po-accordion-item",4,0)(6,"p",5),e(7," In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance with current legislation and a number of factors that take into account the risk that such a donation may pose to the health of the candidate himself and to the health of the individual receiving the donated blood. "),t()(),o(8,"po-accordion-item",6)(9,"p",5),e(10," Blood is processed as soon as collected, preferably within 6 hours of donation. "),t()(),o(11,"po-accordion-item",7)(12,"p",5),e(13," Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of childbearing age. "),t()(),o(14,"po-accordion-item",8)(15,"p",5),e(16," Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there is a small risk that the donor may feel unwell during or shortly after the donation especially the first few times he or she donates, but the services are concerned about this, watching and making sure the donors feel nothing or feel feel so that they are well assisted until full recovery. "),t()()(),o(17,"p",9),e(18," For more information, see the "),o(19,"a",10),e(20,"Hemosc FAQ"),t(),e(21,". "),t()()),a&2&&(d(3),m("p-show-manager-accordion",!0))},dependencies:[k,g,F],encapsulation:2})}return n})();var Ce=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-faq-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,i){a&1&&(r(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Accordion - FAQs"),t(),o(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),r(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-accordion-faq/sample-po-accordion-faq.component.html"),t(),o(13,"pre",7),e(14,`<po-page-default p-title="Blood donation FAQs">
  <p class="po-pb-2 po-text-color-neutral-dark-40">You don't have to be afraid of being a blood donor!</p>

  <po-accordion [p-show-manager-accordion]="true">
    <po-accordion-item p-label="Who can donate?" #questionOne>
      <p class="po-text-color-neutral-dark-40">
        In principle, we can say that we can all apply for blood donation. However, our acceptance depends on compliance
        with current legislation and a number of factors that take into account the risk that such a donation may pose
        to the health of the candidate himself and to the health of the individual receiving the donated blood.
      </p>
    </po-accordion-item>

    <po-accordion-item
      p-label="How long does it take for the blood to be processed?"
      p-label-tag="Important!"
      p-type-tag="danger"
    >
      <p class="po-text-color-neutral-dark-40">
        Blood is processed as soon as collected, preferably within 6 hours of donation.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="How long does the body take to replenish donated blood?">
      <p class="po-text-color-neutral-dark-40">
        Red blood cells recover 2 to 3 weeks after donation. Iron stocks at 60 days in men and 60 to 90 days in women of
        childbearing age.
      </p>
    </po-accordion-item>

    <po-accordion-item p-label="Is donating blood safe?">
      <p class="po-text-color-neutral-dark-40">
        Yes, donating blood is safe. There is no risk of getting an infectious disease by donating blood. However, there
        is a small risk that the donor may feel unwell during or shortly after the donation especially the first few
        times he or she donates, but the services are concerned about this, watching and making sure the donors feel
        nothing or feel feel so that they are well assisted until full recovery.
      </p>
    </po-accordion-item>
  </po-accordion>

  <p class="po-pt-2 po-text-color-neutral-dark-40">
    For more information, see the <a href="http://www.hemosc.org.br/perguntas-frequentes.html">Hemosc FAQ</a>.
  </p>
</po-page-default>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-accordion-faq/sample-po-accordion-faq.component.ts"),t(),o(19,"pre",9),e(20,`import { AfterContentInit, Component, ViewChild } from '@angular/core';

import { PoAccordionItemComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-accordion-faq',
  templateUrl: './sample-po-accordion-faq.component.html',
  standalone: false
})
export class SamplePoAccordionFaqComponent implements AfterContentInit {
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;

  ngAfterContentInit() {
    this.questionOne.expand();
  }
}
`),t()()()()(),o(21,"div",10),r(22,"sample-po-accordion-faq"),t(),r(23,"hr")),a&2&&(d(5),A("po-icon "+i.sampleCodeButtonIcon),d(),b(" ",i.sampleCodeButtonLabel),d(),m("ngClass",I(4,Ce,i.hideSampleCodeTabs)))},dependencies:[T,E,f,S,de],encapsulation:2})}return n})();var me=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275cmp=s({type:n,selectors:[["sample-po-accordion-doc"]],standalone:!1,decls:551,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-accordion-item"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoAccordionLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"]],template:function(a,i){a&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoAccordionModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),o(7,"code"),e(8,"po-accordion"),t(),e(9,"."),t(),o(10,"blockquote")(11,"p"),e(12,"Para o correto funcionamento do componente "),o(13,"code"),e(14,"po-accordion"),t(),e(15,", deve ser importado o m\xF3dulo "),o(16,"code"),e(17,"BrowserAnimationsModule"),t(),e(18,` no
m\xF3dulo principal da sua aplica\xE7\xE3o.`),t()(),o(19,"p"),e(20,"M\xF3dulo da aplica\xE7\xE3o:"),t(),o(21,"pre")(22,"code"),e(23,`import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
`),t()(),o(24,"p"),e(25,"Em aplica\xE7\xF5es Standalone, utilize a seguinte configura\xE7\xE3o para o bootstrap:"),t(),o(26,"pre")(27,"code"),e(28,`import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule)]
}).catch(err => console.error(err));
`),t()()(),o(29,"h3",3),e(30,"Componente"),t(),o(31,"h4",4)(32,"code",5),e(33,"PoAccordionComponent"),t()(),o(34,"div",2)(35,"p"),e(36,`Componente utilizado para agrupar visualmente uma lista de conte\xFAdos, mostrando-os individualmente
ao clicar no t\xEDtulo de cada item.`),t(),o(37,"p"),e(38,"Para utiliz\xE1-lo, \xE9 necess\xE1rio envolver cada item no componente "),o(39,"a",6)(40,"code"),e(41,"po-accordion-item"),t()(),e(42,`,
como no exemplo abaixo:`),t(),o(43,"pre")(44,"code"),e(45,`<po-accordion #accordion [p-show-manager-accordion]="true">
  <po-accordion-item p-label="PO Accordion 1">
     Accordion 1
  </po-accordion-item>

  <po-accordion-item p-label="PO Accordion 2">
     Accordion 2
  </po-accordion-item>
</po-accordion>
`),t()(),o(46,"p"),e(47,"e no typescript pode-se utilizar o "),o(48,"code"),e(49,"@ViewChild"),t(),e(50,":"),t(),o(51,"pre")(52,"code"),e(53,`@ViewChild(PoAccordionComponent, { static: true }) accordion: PoAccordionComponent;

ngAfterContentInit() {
  // ou utilizar o m\xE9todo collapseAllItems();
  this.accordion.expandAllItems();
}
`),t()(),o(54,"p"),e(55,"O componente j\xE1 faz o controle de abertura e fechamento dos itens automaticamente."),t(),o(56,"p"),e(57,"Caso houver a necessidade de abrir algum dos "),o(58,"code"),e(59,"po-accordion-item"),t(),e(60,` via Typescript
acesse a `),o(61,"a",6),e(62,"documenta\xE7\xE3o do PoAccordionItem"),t(),e(63,"."),t(),o(64,"h4"),e(65,"Tokens customiz\xE1veis"),t(),o(66,"p"),e(67,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(68,"blockquote")(69,"p"),e(70,"Para maiores informa\xE7\xF5es, acesse o guia "),o(71,"a",7),e(72,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(73,"."),t()(),o(74,"table")(75,"thead")(76,"tr")(77,"th"),e(78,"Propriedade"),t(),o(79,"th"),e(80,"Descri\xE7\xE3o"),t(),o(81,"th"),e(82,"Valor Padr\xE3o"),t()()(),o(83,"tbody")(84,"tr")(85,"td")(86,"strong"),e(87,"Default Values"),t()(),r(88,"td")(89,"td"),t(),o(90,"tr")(91,"td")(92,"code"),e(93,"--font-family"),t()(),o(94,"td"),e(95,"Fam\xEDlia tipogr\xE1fica usada"),t(),o(96,"td")(97,"code"),e(98,"var(--font-family-theme)"),t()()(),o(99,"tr")(100,"td")(101,"code"),e(102,"--font-size"),t()(),o(103,"td"),e(104,"Tamanho da fonte"),t(),o(105,"td")(106,"code"),e(107,"var(--font-size-default)"),t()()(),o(108,"tr")(109,"td")(110,"code"),e(111,"--color"),t()(),o(112,"td"),e(113,"Cor principal do accordion"),t(),o(114,"td")(115,"code"),e(116,"var(--color-action-default)"),t()()(),o(117,"tr")(118,"td")(119,"code"),e(120,"--background-color"),t()(),o(121,"td"),e(122,"Cor de background"),t(),o(123,"td")(124,"code"),e(125,"var(--color-neutral-light-00)"),t()()(),o(126,"tr")(127,"td")(128,"code"),e(129,"--font-weight"),t()(),o(130,"td"),e(131,"Peso da fonte"),t(),o(132,"td")(133,"code"),e(134,"var(--font-weight-bold)"),t()()(),o(135,"tr")(136,"td")(137,"strong"),e(138,"Hover"),t()(),r(139,"td")(140,"td"),t(),o(141,"tr")(142,"td")(143,"code"),e(144,"--color-hover"),t()(),o(145,"td"),e(146,"Cor principal no estado hover"),t(),o(147,"td")(148,"code"),e(149,"var(--color-action-hover)"),t()()(),o(150,"tr")(151,"td")(152,"code"),e(153,"--background-hover"),t()(),o(154,"td"),e(155,"Cor de background no estado hover"),t(),o(156,"td")(157,"code"),e(158,"var(--color-brand-01-lightest)"),t()()(),o(159,"tr")(160,"td")(161,"strong"),e(162,"Focused"),t()(),r(163,"td")(164,"td"),t(),o(165,"tr")(166,"td")(167,"code"),e(168,"--color-focused"),t()(),o(169,"td"),e(170,"Cor principal no estado de focus"),t(),o(171,"td")(172,"code"),e(173,"var(--color-action-focus)"),t()()(),o(174,"tr")(175,"td")(176,"code"),e(177,"--outline-color-focused"),t(),e(178," \xA0"),t(),o(179,"td"),e(180,"Cor do outline do estado de focus"),t(),o(181,"td")(182,"code"),e(183,"var(--color-action-focus)"),t()()(),o(184,"tr")(185,"td")(186,"strong"),e(187,"Disabled"),t()(),r(188,"td")(189,"td"),t(),o(190,"tr")(191,"td")(192,"code"),e(193,"--color-disabled"),t()(),o(194,"td"),e(195,"Cor principal no estado disabled"),t(),o(196,"td")(197,"code"),e(198,"var(--color-neutral-mid-60)"),t()()(),o(199,"tr")(200,"td")(201,"code"),e(202,"--background-disabled"),t(),e(203," \xA0"),t(),o(204,"td"),e(205,"Cor de background no estado disabled"),t(),o(206,"td")(207,"code"),e(208,"var(--color-neutral-light-10)"),t()()(),o(209,"tr")(210,"td")(211,"strong"),e(212,"po-accordion-manager"),t()(),r(213,"td")(214,"td"),t(),o(215,"tr")(216,"td")(217,"code"),e(218,"--background-color"),t()(),o(219,"td"),e(220,"Cor de background"),t(),o(221,"td")(222,"code"),e(223,"var(--color-neutral-mid-60)"),t()()(),o(224,"tr")(225,"td")(226,"code"),e(227,"--color"),t()(),o(228,"td"),e(229,"Cor principal do accordion manager"),t(),o(230,"td")(231,"code"),e(232,"var(--color-neutral-light-10)"),t()()(),o(233,"tr")(234,"td")(235,"code"),e(236,"--font-family"),t()(),o(237,"td"),e(238,"Fam\xEDlia tipogr\xE1fica usada"),t(),o(239,"td")(240,"code"),e(241,"var(--color-neutral-light-10)"),t()()(),o(242,"tr")(243,"td")(244,"code"),e(245,"--font-size"),t()(),o(246,"td"),e(247,"Tamanho da fonte"),t(),o(248,"td")(249,"code"),e(250,"var(--color-neutral-light-10)"),t()()(),o(251,"tr")(252,"td")(253,"code"),e(254,"--font-weight"),t()(),o(255,"td"),e(256,"Peso da fonte"),t(),o(257,"td")(258,"code"),e(259,"var(--color-neutral-light-10)"),t()()(),o(260,"tr")(261,"td")(262,"strong"),e(263,"Pressed"),t()(),r(264,"td")(265,"td"),t(),o(266,"tr")(267,"td")(268,"code"),e(269,"--background-pressed"),t(),e(270," \xA0"),t(),o(271,"td"),e(272,"Cor de background no estado de pressionado\xA0"),t(),o(273,"td")(274,"code"),e(275,"var(--color-brand-01-lighter)"),t()()(),o(276,"tr")(277,"td")(278,"code"),e(279,"--color-pressed"),t()(),o(280,"td"),e(281,"Cor principal no estado de pressionado"),t(),o(282,"td")(283,"code"),e(284,"var(--color-action-pressed)"),t()()()()()(),o(285,"div",8)(286,"h4",9),e(287,"Seletor"),t(),o(288,"pre",10),e(289,`<po-accordion
    p-allow-expand-all-items="boolean"
    (p-collapse-all)="EventEmitter"
    (p-expand-all)="EventEmitter"
    p-literals="PoAccordionLiterals"
    p-show-manager-accordion="boolean"
    p-size="string" >
</po-accordion>
`),t()(),o(290,"h4",11),e(291,"Propriedades"),t(),o(292,"table",12)(293,"tr",13)(294,"th",14),e(295,"Nome"),t(),o(296,"th",14),e(297,"Tipo"),t(),o(298,"th",14),e(299,"Padr\xE3o"),t(),o(300,"th",14),e(301,"Descri\xE7\xE3o"),t()(),o(302,"tr",15)(303,"td",16)(304,"div",17)(305,"span",18),e(306," p-allow-expand-all-items"),r(307,"br"),t()()(),o(308,"td",19)(309,"code",20),e(310,"boolean"),t()(),o(311,"td",21)(312,"p")(313,"code"),e(314,"false"),t()()(),o(315,"td",22)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),o(319,"p"),e(320,"Permite expandir mais de um "),o(321,"code"),e(322,"<po-accordion-item></po-accordion-item>"),t(),e(323,` ao mesmo tempo.
Sempre habilitada caso a propriedade `),o(324,"code"),e(325,"p-show-manager-accordion"),t(),e(326," esteja como "),o(327,"code"),e(328,"true"),t(),e(329,"."),t()()(),o(330,"tr",15)(331,"td",16)(332,"div",23)(333,"span",24),e(334," (p-collapse-all)"),r(335,"br"),t()()(),o(336,"td",19)(337,"code",25),e(338,"EventEmitter"),t()(),o(339,"td",21),e(340,"-"),t(),o(341,"td",22)(342,"em")(343,"strong"),e(344,"(opcional)"),t()(),o(345,"p"),e(346,"Evento disparado ao retrair o gerenciador de accordion, seja manualmente ou programaticamente."),t()()(),o(347,"tr",15)(348,"td",16)(349,"div",23)(350,"span",24),e(351," (p-expand-all)"),r(352,"br"),t()()(),o(353,"td",19)(354,"code",25),e(355,"EventEmitter"),t()(),o(356,"td",21),e(357,"-"),t(),o(358,"td",22)(359,"em")(360,"strong"),e(361,"(opcional)"),t()(),o(362,"p"),e(363,"Evento disparado ao expandir o gerenciador de accordion, seja manualmente ou programaticamente."),t()()(),o(364,"tr",15)(365,"td",16)(366,"div",17)(367,"span",18),e(368," p-literals"),r(369,"br"),t()()(),o(370,"td",19)(371,"code",26),e(372,"PoAccordionLiterals"),t()(),o(373,"td",21),e(374,"-"),t(),o(375,"td",22)(376,"em")(377,"strong"),e(378,"(opcional)"),t()(),o(379,"p"),e(380,"Objeto com as literais usadas no "),o(381,"code"),e(382,"po-accordion"),t(),e(383,"."),t(),o(384,"p"),e(385,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),t(),o(386,"pre")(387,"code"),e(388,`const customLiterals: PoAccordionLiterals = {
  closeAllItems: 'Fechar todos os itens',
  expandAllItems: 'Expandir todos os itens'
};
`),t()(),o(389,"p"),e(390,"Ou passando apenas as literais que deseja customizar:"),t(),o(391,"pre")(392,"code"),e(393,`const customLiterals: PoAccordionLiterals = {
  expandAllItems: 'Expandir todos os itens'
};
`),t()(),o(394,"p"),e(395,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),o(396,"pre")(397,"code"),e(398,`<po-accordion
  [p-literals]="customLiterals">
</po-accordion>
`),t()(),o(399,"blockquote")(400,"p"),e(401,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),o(402,"a",27)(403,"code"),e(404,"PoI18nService"),t()(),e(405," ou do browser."),t()()()(),o(406,"tr",15)(407,"td",16)(408,"div",17)(409,"span",18),e(410," p-show-manager-accordion"),r(411,"br"),t()()(),o(412,"td",19)(413,"code",20),e(414,"boolean"),t()(),o(415,"td",21)(416,"p")(417,"code"),e(418,"false"),t()()(),o(419,"td",22)(420,"em")(421,"strong"),e(422,"(opcional)"),t()(),o(423,"p"),e(424,"Exibe o Gerenciador de Accordion."),t()()(),o(425,"tr",15)(426,"td",16)(427,"div",17)(428,"span",18),e(429," p-size"),r(430,"br"),t()()(),o(431,"td",19)(432,"code",28),e(433,"string"),t()(),o(434,"td",21)(435,"p")(436,"code"),e(437,"medium"),t()()(),o(438,"td",22)(439,"em")(440,"strong"),e(441,"(opcional)"),t()(),o(442,"p"),e(443,"Define o tamanho do componente:"),t(),o(444,"ul")(445,"li")(446,"code"),e(447,"small"),t(),e(448,": altura de 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(449,"li")(450,"code"),e(451,"medium"),t(),e(452,": altura de 44px."),t()(),o(453,"blockquote")(454,"p"),e(455,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(456,"code"),e(457,"medium"),t(),e(458,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(459,"a",29),e(460,"po-theme"),t(),e(461,"."),t()()()()(),o(462,"h3",11),e(463,"M\xE9todos"),t(),o(464,"table",30)(465,"tr",15)(466,"th",31)(467,"div",17)(468,"h4")(469,"span",18),e(470," collapseAllItems "),t()()()()(),o(471,"tr",22)(472,"td",22)(473,"p"),e(474,`M\xE9todo para colapsar todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),o(475,"code"),e(476,"p-show-manager-accordion"),t(),e(477," estiver como "),o(478,"code"),e(479,"true"),t(),e(480,"."),t()()()(),r(481,"br"),o(482,"table",30)(483,"tr",15)(484,"th",31)(485,"div",17)(486,"h4")(487,"span",18),e(488," expandAllItems "),t()()()()(),o(489,"tr",22)(490,"td",22)(491,"p"),e(492,`M\xE9todo para expandir todos os itens.
S\xF3 pode ser utilizado quando a propriedade `),o(493,"code"),e(494,"p-show-manager-accordion"),t(),e(495," estiver como "),o(496,"code"),e(497,"true"),t(),e(498,"."),t()()()(),r(499,"br"),o(500,"h3"),e(501,"Interfaces"),t(),o(502,"h4",32)(503,"code",5),e(504,"PoAccordionLiterals"),t()(),o(505,"div",2)(506,"p"),e(507,"Interface para defini\xE7\xE3o das literais usadas no "),o(508,"code"),e(509,"po-accordion"),t(),e(510,"."),t()(),o(511,"h4",11),e(512,"Propriedades"),t(),o(513,"table",12)(514,"tr",13)(515,"th",14),e(516,"Nome"),t(),o(517,"th",14),e(518,"Tipo"),t(),o(519,"th",14),e(520,"Descri\xE7\xE3o"),t()(),o(521,"tr",15)(522,"td",16)(523,"div",17)(524,"span",18),e(525," closeAllItems"),r(526,"br"),t()()(),o(527,"td",19)(528,"code",28),e(529,"string"),t()(),o(530,"td",22)(531,"em")(532,"strong"),e(533,"(opcional)"),t()(),o(534,"p"),e(535,"Label do gerenciador de Accordion para colapsar todos os itens"),t()()(),o(536,"tr",15)(537,"td",16)(538,"div",17)(539,"span",18),e(540," expandAllItems"),r(541,"br"),t()()(),o(542,"td",19)(543,"code",28),e(544,"string"),t()(),o(545,"td",22)(546,"em")(547,"strong"),e(548,"(opcional)"),t()(),o(549,"p"),e(550,"Label do gerenciador de Accordion para expandir todos os itens."),t()()()()())},dependencies:[E],encapsulation:2})}return n})();var ce=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,a){this.route=l,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let a=l.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||n)(D(U),D(J))};static \u0275cmp=s({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Accordion",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,i){a&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),r(3,"sample-po-accordion-doc"),t(),o(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),r(5,"sample-po-accordion-basic-view")(6,"sample-po-accordion-labs-view")(7,"sample-po-accordion-faq-view"),t()()()),a&2&&(m("p-actions",i.actions),d(2),m("p-active",i.activeTab==="doc"),d(2),m("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[F,f,S,ae,le,pe,me],encapsulation:2})}return n})();var ye=[{path:"",component:ce}],se=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=L({type:n});static \u0275inj=M({imports:[q.forChild(ye),q]})}return n})();var Ke=(()=>{class n{static \u0275fac=function(a){return new(a||n)};static \u0275mod=L({type:n});static \u0275inj=M({imports:[oe,se]})}return n})();export{Ke as DocPoAccordionModule};
