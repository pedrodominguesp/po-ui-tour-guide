import{o as f,p as ae}from"./chunk-WYOAC7KN.js";import{Fa as te,Hb as x,Ib as h,Ja as ne,Jb as ie,O as I,a as $,eb as oe,ub as V,w as X,ya as ee,za as N}from"./chunk-XOCFD5XY.js";import{Ea as c,Fa as t,Ga as e,Gb as O,Ha as l,I as L,L as k,Mb as w,Mc as R,Nc as K,O as g,Oa as W,Oc as Y,P as E,Pa as p,Pc as J,Qc as G,X as C,Ya as z,Za as j,bb as _,cb as n,cd as Q,eb as P,ed as Z,gb as v,gd as A,ha as r,hb as y,ib as M,ma as B,oa as b,pa as F,rb as T}from"./chunk-XD3NZLB4.js";import{a as q,b as H}from"./chunk-GAL4ENT6.js";var le=(()=>{class i{poNotification=k(N);menuItems=[{label:"Dados cadastrais",selected:!0},{label:"Endere\xE7os"},{label:"Documentos"}];onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-context-menu-basic"]],standalone:!1,decls:2,vars:1,consts:[[1,"po-context-menu-wrapper"],["p-context-title","Cadastro","p-title","Fornecedor",3,"p-item-selected","p-items"]],template:function(a,o){a&1&&(t(0,"div",0)(1,"po-context-menu",1),p("p-item-selected",function(s){return o.onItemSelected(s)}),e()()),a&2&&(r(),c("p-items",o.menuItems))},dependencies:[I],encapsulation:2})}return i})();var Se=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-context-menu-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Context Menu Basic"),e(),t(4,"a",2),p("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    p-context-title="Cadastro"
    p-title="Fornecedor"
    [p-items]="menuItems"
    (p-item-selected)="onItemSelected($event)"
  >
  </po-context-menu>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-context-menu-basic/sample-po-context-menu-basic.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, inject } from '@angular/core';

import { PoContextMenuItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-basic',
  templateUrl: './sample-po-context-menu-basic.component.html',
  standalone: false
})
export class SamplePoContextMenuBasicComponent {
  readonly poNotification = inject(PoNotificationService);

  menuItems: Array<PoContextMenuItem> = [
    { label: 'Dados cadastrais', selected: true },
    { label: 'Endere\xE7os' },
    { label: 'Documentos' }
  ];

  onItemSelected(item: PoContextMenuItem): void {
    this.poNotification.success(\`Item selecionado: \${item.label}\`);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-context-menu-basic"),e(),l(23,"hr")),a&2&&(r(5),_("po-icon "+o.sampleCodeButtonIcon),r(),P(" ",o.sampleCodeButtonLabel),r(),c("ngClass",T(4,Se,o.hideSampleCodeTabs)))},dependencies:[w,f,x,h,le],encapsulation:2})}return i})();var de=(()=>{class i{poNotification=k(N);contextTitle=C("Cadastro");title=C("Funcion\xE1rio");expanded=C(!0);newItemLabel=C("");selected=C(!1);menuItems=C([]);onItemSelected(m){this.poNotification.success(`Item selecionado: ${m.label}`)}addItem(){this.newItemLabel()&&(this.menuItems.set([...this.menuItems(),{label:this.newItemLabel(),selected:this.selected()}]),this.newItemLabel.set(""),this.selected.set(!1))}restore(){this.contextTitle.set("Cadastro"),this.title.set("Funcion\xE1rio"),this.expanded.set(!0),this.newItemLabel.set(""),this.selected.set(!1),this.menuItems.set([])}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-context-menu-labs"]],standalone:!1,decls:18,vars:9,consts:[["f","ngForm"],[1,"po-context-menu-wrapper"],[3,"p-expandedChange","p-item-selected","p-context-title","p-title","p-items","p-expanded"],[1,"po-row"],["name","contextTitle","p-label","Context Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","title","p-label","Title","p-clean","",1,"po-md-6",3,"ngModelChange","ngModel"],["name","expanded","p-label","Expanded","p-label-off","Collapsed","p-label-on","Expanded",1,"po-md-6",3,"ngModelChange","ngModel"],[1,"po-row","po-pb-1"],["name","newItemLabel","p-label","New Item Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","Selected","p-label","Selected","p-help","Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado.",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(a,o){if(a&1){let u=W();t(0,"div",1)(1,"po-context-menu",2),M("p-expandedChange",function(d){return g(u),y(o.expanded,d)||(o.expanded=d),E(d)}),p("p-item-selected",function(d){return o.onItemSelected(d)}),e()(),l(2,"po-divider"),t(3,"form",null,0)(5,"div",3)(6,"po-input",4),M("ngModelChange",function(d){return g(u),y(o.contextTitle,d)||(o.contextTitle=d),E(d)}),e(),t(7,"po-input",5),M("ngModelChange",function(d){return g(u),y(o.title,d)||(o.title=d),E(d)}),e()(),t(8,"div",3)(9,"po-switch",6),M("ngModelChange",function(d){return g(u),y(o.expanded,d)||(o.expanded=d),E(d)}),e()(),l(10,"po-divider"),t(11,"div",7)(12,"po-input",8),M("ngModelChange",function(d){return g(u),y(o.newItemLabel,d)||(o.newItemLabel=d),E(d)}),e(),t(13,"po-switch",9),M("ngModelChange",function(d){return g(u),y(o.selected,d)||(o.selected=d),E(d)}),e(),t(14,"po-button",10),p("p-click",function(){return o.addItem()}),e()(),l(15,"po-divider"),t(16,"div",3)(17,"po-button",11),p("p-click",function(){return o.restore()}),e()()()}a&2&&(r(),c("p-context-title",o.contextTitle())("p-title",o.title())("p-items",o.menuItems()),v("p-expanded",o.expanded),r(5),v("ngModel",o.contextTitle),r(),v("ngModel",o.title),r(2),v("ngModel",o.expanded),r(3),v("ngModel",o.newItemLabel),r(),v("ngModel",o.selected))},dependencies:[G,R,K,J,Y,X,I,$,ne,ee],encapsulation:2})}return i})();var ge=i=>({"docs-sample-code-tabs":i}),se=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-context-menu-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Context Menu Labs"),e(),t(4,"a",2),p("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.html"),e(),t(13,"pre",7),n(14,`<div class="po-context-menu-wrapper">
  <po-context-menu
    [p-context-title]="contextTitle()"
    [p-title]="title()"
    [p-items]="menuItems()"
    [(p-expanded)]="expanded"
    (p-item-selected)="onItemSelected($event)"
  />
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="contextTitle" [(ngModel)]="contextTitle" p-label="Context Title" p-clean />

    <po-input class="po-md-6" name="title" [(ngModel)]="title" p-label="Title" p-clean />
  </div>

  <div class="po-row">
    <po-switch
      class="po-md-6"
      name="expanded"
      [(ngModel)]="expanded"
      p-label="Expanded"
      p-label-off="Collapsed"
      p-label-on="Expanded"
    />
  </div>

  <po-divider />

  <div class="po-row po-pb-1">
    <po-input class="po-md-6" name="newItemLabel" [(ngModel)]="newItemLabel" p-label="New Item Label" />

    <po-switch
      class="po-md-6"
      name="Selected"
      [(ngModel)]="selected"
      p-label="Selected"
      p-help="Se mais de um item estiver com selected: *true*, apenas o primeiro ser\xE1 mantido como selecionado."
    />

    <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()" />
  </div>

  <po-divider />

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()" />
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-context-menu-labs/sample-po-context-menu-labs.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, inject, signal } from '@angular/core';

import { PoContextMenuItem, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-labs',
  templateUrl: './sample-po-context-menu-labs.component.html',
  standalone: false
})
export class SamplePoContextMenuLabsComponent {
  readonly poNotification = inject(PoNotificationService);

  contextTitle = signal<string>('Cadastro');
  title = signal<string>('Funcion\xE1rio');
  expanded = signal<boolean>(true);
  newItemLabel = signal<string>('');
  selected = signal<boolean>(false);

  menuItems = signal<Array<PoContextMenuItem>>([]);

  onItemSelected(item: PoContextMenuItem): void {
    this.poNotification.success(\`Item selecionado: \${item.label}\`);
  }

  addItem(): void {
    if (!this.newItemLabel()) {
      return;
    }

    this.menuItems.set([...this.menuItems(), { label: this.newItemLabel(), selected: this.selected() }]);
    this.newItemLabel.set('');
    this.selected.set(false);
  }

  restore(): void {
    this.contextTitle.set('Cadastro');
    this.title.set('Funcion\xE1rio');
    this.expanded.set(true);
    this.newItemLabel.set('');
    this.selected.set(false);
    this.menuItems.set([]);
  }
}
`),e()()()()(),t(21,"div",10),l(22,"sample-po-context-menu-labs"),e(),l(23,"hr")),a&2&&(r(5),_("po-icon "+o.sampleCodeButtonIcon),r(),P(" ",o.sampleCodeButtonLabel),r(),c("ngClass",T(4,ge,o.hideSampleCodeTabs)))},dependencies:[w,f,x,h,de],encapsulation:2})}return i})();var ve=["tab"],pe=(()=>{class i{tab=O("tab");contextTitle="Cadastro";title="Usu\xE1rio";menuItems=C([{label:"Dados cadastrais",selected:!0},{label:"Endere\xE7os"},{label:"Documentos"}]);formDadosCadastrais=[{property:"name",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY."},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required."},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6}];formEndereco=[{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"}];documentos=[{Documento:"CPF",Valor:"987.xxx.xxx-60"},{Documento:"Passporte",Valor:"123456xxx-1"}];onItemSelected(m){this.updateSelectedItemMenu(m.label),this.tab().activateTab(m.label)}onActivatedTab(m){this.updateSelectedItemMenu(m.id)}updateSelectedItemMenu(m){let a=this.menuItems().map(o=>H(q({},o),{selected:o.label===m}));this.menuItems.set(a)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-context-menu-user"]],viewQuery:function(a,o){a&1&&z(o.tab,ve,5),a&2&&j()},standalone:!1,decls:19,vars:12,consts:[["tab",""],["dynamicForm",""],["p-label","Dados cadastrais","p-hide-close","","p-active","","id","Dados cadastrais",3,"p-activated-tab"],[1,"po-context-menu-wrapper"],[3,"p-item-selected","p-context-title","p-title","p-items"],["p-title","Dados cadastrais"],[3,"p-fields"],["p-label","Endere\xE7os","id","Endere\xE7os","p-hide-close","",3,"p-activated-tab"],["p-title","Endere\xE7os"],["p-label","Documentos","id","Documentos","p-hide-close","",3,"p-activated-tab"],["p-title","Documentos"],[3,"p-items"]],template:function(a,o){a&1&&(t(0,"po-context-tabs",null,0)(2,"po-tab",2),p("p-activated-tab",function(s){return o.onActivatedTab(s)}),t(3,"div",3)(4,"po-context-menu",4),p("p-item-selected",function(s){return o.onItemSelected(s)}),e(),t(5,"po-page-default",5),l(6,"po-dynamic-form",6,1),e()()(),t(8,"po-tab",7),p("p-activated-tab",function(s){return o.onActivatedTab(s)}),t(9,"div",3)(10,"po-context-menu",4),p("p-item-selected",function(s){return o.onItemSelected(s)}),e(),t(11,"po-page-default",8),l(12,"po-dynamic-form",6,1),e()()(),t(14,"po-tab",9),p("p-activated-tab",function(s){return o.onActivatedTab(s)}),t(15,"div",3)(16,"po-context-menu",4),p("p-item-selected",function(s){return o.onItemSelected(s)}),e(),t(17,"po-page-default",10),l(18,"po-table",11),e()()()()),a&2&&(r(4),c("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),r(2),c("p-fields",o.formDadosCadastrais),r(4),c("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),r(2),c("p-fields",o.formEndereco),r(4),c("p-context-title",o.contextTitle)("p-title",o.title)("p-items",o.menuItems()),r(2),c("p-items",o.documentos))},dependencies:[I,oe,V,te,x,ie],styles:["po-context-tabs[_ngcontent-%COMP%]{--po-density-gap-header-content: 0px}"]})}return i})();var Me=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-context-menu-user-view"]],standalone:!1,decls:30,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(a,o){a&1&&(l(0,"br"),t(1,"blockquote",0)(2,"label",1),n(3,"PO Context - Cadastro de Usu\xE1rio"),e(),t(4,"a",2),p("click",function(){return o.toggleSampleCodeTabs()}),l(5,"span"),n(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),n(12,"sample-po-context-menu-user/sample-po-context-menu-user.component.html"),e(),t(13,"pre",7),n(14,`<po-context-tabs #tab>
  <po-tab
    p-label="Dados cadastrais"
    p-hide-close
    p-active
    id="Dados cadastrais"
    (p-activated-tab)="onActivatedTab($event)"
  >
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Dados cadastrais">
        <po-dynamic-form #dynamicForm [p-fields]="formDadosCadastrais" />
      </po-page-default>
    </div>
  </po-tab>

  <po-tab p-label="Endere\xE7os" id="Endere\xE7os" p-hide-close (p-activated-tab)="onActivatedTab($event)">
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Endere\xE7os">
        <po-dynamic-form #dynamicForm [p-fields]="formEndereco" />
      </po-page-default>
    </div>
  </po-tab>

  <po-tab p-label="Documentos" id="Documentos" p-hide-close (p-activated-tab)="onActivatedTab($event)">
    <div class="po-context-menu-wrapper">
      <po-context-menu
        [p-context-title]="contextTitle"
        [p-title]="title"
        [p-items]="menuItems()"
        (p-item-selected)="onItemSelected($event)"
      />
      <po-page-default p-title="Documentos">
        <po-table [p-items]="documentos" />
      </po-page-default>
    </div>
  </po-tab>
</po-context-tabs>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),n(18,"sample-po-context-menu-user/sample-po-context-menu-user.component.ts"),e(),t(19,"pre",9),n(20,`import { Component, signal, viewChild } from '@angular/core';
import { PoContextMenuItem, PoContextTabsComponent, PoDynamicFormField, PoTabComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-context-menu-user',
  templateUrl: './sample-po-context-menu-user.component.html',
  styleUrls: ['./sample-po-context-menu-user.component.css'],
  standalone: false
})
export class SamplePoContextMenuUserComponent {
  private readonly tab = viewChild<PoContextTabsComponent>('tab');
  contextTitle = 'Cadastro';
  title = 'Usu\xE1rio';

  menuItems = signal<Array<PoContextMenuItem>>([
    { label: 'Dados cadastrais', selected: true },
    { label: 'Endere\xE7os' },
    { label: 'Documentos' }
  ]);

  formDadosCadastrais: Array<PoDynamicFormField> = [
    {
      property: 'name',
      required: true,
      minLength: 4,
      maxLength: 50,
      gridColumns: 6,
      gridSmColumns: 12,
      order: 1,
      placeholder: 'Type your name'
    },
    {
      property: 'birthday',
      label: 'Date of birth',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
      gridSmColumns: 12,
      maxValue: '2010-01-01',
      errorMessage: 'The date must be before the year 2010.',
      order: -1,
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.'
    },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'cnpj', label: 'CNPJ', mask: '99.999.999/9999-99', gridColumns: 6, gridSmColumns: 12, visible: false },
    { property: 'genre', gridColumns: 6, gridSmColumns: 12, options: ['Male', 'Female', 'Other'], order: 2 },
    {
      property: 'shortDescription',
      label: 'Short Description',
      gridColumns: 12,
      gridSmColumns: 12,
      rows: 5,
      placeholder: 'Type short description'
    },
    {
      property: 'secretKey',
      label: 'Secret Key',
      gridColumns: 6,
      secret: true,
      pattern: '[a-zA]{5}[Z0-9]{3}',
      errorMessage: 'At least 5 alphabetic and 3 numeric characters are required.',
      placeholder: 'Type your password',
      help: 'Password must include a combination of letters and numbers.',
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.'
    },
    {
      property: 'rememberSecretKey',
      label: 'Remember Secret Key',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'yes',
      booleanFalse: 'no',
      formatModel: true
    },
    {
      property: 'status',
      label: 'Status',
      gridColumns: 3,
      type: 'boolean',
      booleanTrue: 'Active',
      booleanFalse: 'Inactive',
      formatModel: true
    },
    { property: 'email', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 }
  ];

  formEndereco: Array<PoDynamicFormField> = [
    { property: 'address', gridColumns: 6 },
    {
      property: 'addressNumber',
      label: 'Address number',
      type: 'number',
      gridColumns: 6,
      maxValue: 10000,
      errorMessage: 'Invalid number.'
    },
    {
      property: 'state',
      gridColumns: 6,
      options: [
        { state: 'Santa Catarina', code: 1 },
        { state: 'S\xE3o Paulo', code: 2 },
        { state: 'Rio de Janeiro', code: 3 },
        { state: 'Minas Gerais', code: 4 }
      ],
      fieldLabel: 'state',
      fieldValue: 'code'
    },
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' }
  ];

  documentos = [
    { Documento: 'CPF', Valor: '987.xxx.xxx-60' },
    { Documento: 'Passporte', Valor: '123456xxx-1' }
  ];

  onItemSelected(value: PoContextMenuItem) {
    this.updateSelectedItemMenu(value.label);
    this.tab().activateTab(value.label);
  }

  onActivatedTab(value: PoTabComponent) {
    this.updateSelectedItemMenu(value.id);
  }

  private updateSelectedItemMenu(label: string) {
    const menuItems = this.menuItems().map(x => ({ ...x, selected: x.label === label }));
    this.menuItems.set(menuItems);
  }
}
`),e()()(),t(21,"po-tab",10)(22,"div")(23,"label",6),n(24,"sample-po-context-menu-user/sample-po-context-menu-user.component.css"),e(),t(25,"pre",11),n(26,`po-context-tabs {
  --po-density-gap-header-content: 0px;
}
`),e()()()()(),t(27,"div",12),l(28,"sample-po-context-menu-user"),e(),l(29,"hr")),a&2&&(r(5),_("po-icon "+o.sampleCodeButtonIcon),r(),P(" ",o.sampleCodeButtonLabel),r(),c("ngClass",T(4,Me,o.hideSampleCodeTabs)))},dependencies:[w,f,x,h,pe],encapsulation:2})}return i})();var ue=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275cmp=b({type:i,selectors:[["sample-po-context-menu-doc"]],standalone:!1,decls:420,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],[1,"language-html"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<PoContextMenuItem>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"]],template:function(a,o){a&1&&(t(0,"div",0)(1,"p",1)(2,"code"),n(3,"import { PoContextMenuModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),n(6,"M\xF3dulo do componente po-context-menu."),e()(),t(7,"h3",3),n(8,"Componente"),e(),t(9,"h4",4)(10,"code",5),n(11,"PoContextMenuComponent"),e()(),t(12,"div",2)(13,"p"),n(14,"O componente "),t(15,"code"),n(16,"po-context-menu"),e(),n(17,` \xE9 uma barra lateral de contexto (sidebar) para navega\xE7\xE3o interna entre contextos.
Inspirado visualmente no `),t(18,"code"),n(19,"po-menu"),e(),n(20,", por\xE9m independente e focado em navega\xE7\xE3o contextual."),e(),t(21,"p"),n(22,"No caso de uso do componente "),t(23,"code"),n(24,"po-page-default"),e(),n(25,` em conjunto, ambos devem estar no mesmo n\xEDvel
e inseridos em uma div com a classe `),t(26,"strong"),n(27,"po-context-menu-wrapper"),e(),n(28,`.
Esta classe \xE9 respons\xE1vel por fazer os c\xE1lculos necess\xE1rios para o alinhamento dos componentes.`),e(),t(29,"p"),n(30,"O uso simult\xE2neo dos componentes "),t(31,"code"),n(32,"po-menu"),e(),n(33," e "),t(34,"code"),n(35,"po-context-menu"),e(),n(36,` n\xE3o \xE9 recomendado.
Por\xE9m, se os mesmos forem necess\xE1rios na mesma interface, certifique-se de que n\xE3o permane\xE7am expandidos
simultaneamente para n\xE3o comprometer a usabilidade.`),e(),t(37,"h4"),n(38,"Tokens customiz\xE1veis"),e(),t(39,"p"),n(40,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(41,"blockquote")(42,"p"),n(43,"Para maiores informa\xE7\xF5es, acesse o guia "),t(44,"a",6),n(45,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),n(46,"."),e()(),t(47,"table")(48,"thead")(49,"tr")(50,"th"),n(51,"Propriedade"),e(),t(52,"th"),n(53,"Descri\xE7\xE3o"),e(),t(54,"th"),n(55,"Valor Padr\xE3o"),e()()(),t(56,"tbody")(57,"tr")(58,"td")(59,"strong"),n(60,"Default Values"),e()(),l(61,"td")(62,"td"),e(),t(63,"tr")(64,"td")(65,"code"),n(66,"--font-family"),e()(),t(67,"td"),n(68,"Fam\xEDlia tipogr\xE1fica usada"),e(),t(69,"td")(70,"code"),n(71,"var(--font-family-theme)"),e()()(),t(72,"tr")(73,"td")(74,"code"),n(75,"--font-size"),e()(),t(76,"td"),n(77,"Tamanho da fonte dos itens"),e(),t(78,"td")(79,"code"),n(80,"var(--font-size-default)"),e()()(),t(81,"tr")(82,"td")(83,"code"),n(84,"--font-size-context-title"),e()(),t(85,"td"),n(86,"Tamanho da fonte do t\xEDtulo de contexto"),e(),t(87,"td")(88,"code"),n(89,"var(--font-size-sm)"),e()()(),t(90,"tr")(91,"td")(92,"code"),n(93,"--font-size-title"),e()(),t(94,"td"),n(95,"Tamanho da fonte do t\xEDtulo principal"),e(),t(96,"td")(97,"code"),n(98,"var(--font-size-lg)"),e()()(),t(99,"tr")(100,"td")(101,"code"),n(102,"--line-height"),e()(),t(103,"td"),n(104,"Altura da linha"),e(),t(105,"td")(106,"code"),n(107,"var(--line-height-md)"),e()()(),t(108,"tr")(109,"td")(110,"code"),n(111,"--border-radius"),e()(),t(112,"td"),n(113,"Raio dos cantos dos itens"),e(),t(114,"td")(115,"code"),n(116,"var(--border-radius-md)"),e()()(),t(117,"tr")(118,"td")(119,"code"),n(120,"--border-color"),e()(),t(121,"td"),n(122,"Cor da borda lateral direita do componente"),e(),t(123,"td")(124,"code"),n(125,"var(--color-neutral-light-20)"),e()()(),t(126,"tr")(127,"td")(128,"code"),n(129,"--background-color"),e()(),t(130,"td"),n(131,"Cor de fundo do componente"),e(),t(132,"td")(133,"code"),n(134,"var(--color-neutral-light-05)"),e()()(),t(135,"tr")(136,"td")(137,"code"),n(138,"--color"),e()(),t(139,"td"),n(140,"Cor do texto dos itens"),e(),t(141,"td")(142,"code"),n(143,"var(--color-action-default)"),e()()(),t(144,"tr")(145,"td")(146,"code"),n(147,"--color-context-title"),e()(),t(148,"td"),n(149,"Cor do texto do t\xEDtulo de contexto"),e(),t(150,"td")(151,"code"),n(152,"var(--color-neutral-mid-40)"),e()()(),t(153,"tr")(154,"td")(155,"code"),n(156,"--color-title"),e()(),t(157,"td"),n(158,"Cor do texto do t\xEDtulo principal"),e(),t(159,"td")(160,"code"),n(161,"var(--color-neutral-dark-80)"),e()()(),t(162,"tr")(163,"td")(164,"code"),n(165,"--font-weight"),e()(),t(166,"td"),n(167,"Peso da fonte dos itens"),e(),t(168,"td")(169,"code"),n(170,"var(--font-weight-bold)"),e()()(),t(171,"tr")(172,"td")(173,"code"),n(174,"--font-weight-title"),e()(),t(175,"td"),n(176,"Peso da fonte do t\xEDtulo principal"),e(),t(177,"td")(178,"code"),n(179,"var(--font-weight-bold)"),e()()(),t(180,"tr")(181,"td")(182,"code"),n(183,"--outline-color-focused"),e()(),t(184,"td"),n(185,"Cor do outline no estado de focus"),e(),t(186,"td")(187,"code"),n(188,"var(--color-action-focus)"),e()()(),t(189,"tr")(190,"td")(191,"strong"),n(192,"Hover"),e()(),l(193,"td")(194,"td"),e(),t(195,"tr")(196,"td")(197,"code"),n(198,"--color-hover"),e()(),t(199,"td"),n(200,"Cor do texto no estado hover"),e(),t(201,"td")(202,"code"),n(203,"var(--color-brand-01-darkest)"),e()()(),t(204,"tr")(205,"td")(206,"code"),n(207,"--background-color-hover"),e()(),t(208,"td"),n(209,"Cor de fundo no estado hover"),e(),t(210,"td")(211,"code"),n(212,"var(--color-brand-01-lighter)"),e()()(),t(213,"tr")(214,"td")(215,"strong"),n(216,"Pressed"),e()(),l(217,"td")(218,"td"),e(),t(219,"tr")(220,"td")(221,"code"),n(222,"--background-color-pressed"),e()(),t(223,"td"),n(224,"Cor de fundo no estado pressed"),e(),t(225,"td")(226,"code"),n(227,"var(--color-brand-01-light)"),e()()(),t(228,"tr")(229,"td")(230,"strong"),n(231,"Active (Selected)"),e()(),l(232,"td")(233,"td"),e(),t(234,"tr")(235,"td")(236,"code"),n(237,"--background-color-actived"),e()(),t(238,"td"),n(239,"Cor de fundo do item selecionado"),e(),t(240,"td")(241,"code"),n(242,"var(--color-brand-01-lightest)"),e()()(),t(243,"tr")(244,"td")(245,"code"),n(246,"--color-actived"),e()(),t(247,"td"),n(248,"Cor do texto do item selecionado"),e(),t(249,"td")(250,"code"),n(251,"var(--color-action-pressed)"),e()()()()()(),t(252,"div",7)(253,"h4",8),n(254,"Seletor"),e(),t(255,"pre",9),n(256,`<po-context-menu
    p-context-title="string"
    p-expanded="boolean"
    (p-item-selected)="EventEmitter"
    p-items="Array<PoContextMenuItem>"
    p-title="string" >
</po-context-menu>
`),e()(),t(257,"h4",10),n(258,"Propriedades"),e(),t(259,"table",11)(260,"tr",12)(261,"th",13),n(262,"Nome"),e(),t(263,"th",13),n(264,"Tipo"),e(),t(265,"th",13),n(266,"Padr\xE3o"),e(),t(267,"th",13),n(268,"Descri\xE7\xE3o"),e()(),t(269,"tr",14)(270,"td",15)(271,"div",16)(272,"span",17),n(273," p-context-title"),l(274,"br"),e()()(),t(275,"td",18)(276,"code",19),n(277,"string"),e()(),t(278,"td",20),n(279,"-"),e(),t(280,"td",21)(281,"p"),n(282,"T\xEDtulo do contexto superior"),e()()(),t(283,"tr",14)(284,"td",15)(285,"div",16)(286,"span",17),n(287," p-expanded"),l(288,"br"),e()()(),t(289,"td",18)(290,"code",22),n(291,"boolean"),e()(),t(292,"td",20)(293,"p")(294,"code"),n(295,"true"),e()()(),t(296,"td",21)(297,"p"),n(298,"Define se o menu est\xE1 aberto ou fechado."),e(),t(299,"p"),n(300,"Suporta two-way binding:"),e(),t(301,"pre")(302,"code",23),n(303,`<po-context-menu
  [(p-expanded)]="expanded"
/>
`),e()(),t(304,"p"),n(305,"ou"),e(),t(306,"pre")(307,"code",23),n(308,`<po-context-menu
  [(p-expanded)]="expanded"
  (p-expandedChange)="handlerExpanded($event)"
/>
`),e()()()(),t(309,"tr",14)(310,"td",15)(311,"div",24)(312,"span",25),n(313," (p-item-selected)"),l(314,"br"),e()()(),t(315,"td",18)(316,"code",26),n(317,"EventEmitter"),e()(),t(318,"td",20),n(319,"-"),e(),t(320,"td",21)(321,"p"),n(322,"Evento emitido ao selecionar um item. Emite o item selecionado."),e()()(),t(323,"tr",14)(324,"td",15)(325,"div",16)(326,"span",17),n(327," p-items"),l(328,"br"),e()()(),t(329,"td",18)(330,"code",27),n(331,"Array<PoContextMenuItem>"),e()(),t(332,"td",20),n(333,"-"),e(),t(334,"td",21)(335,"p"),n(336,"Lista de itens para renderiza\xE7\xE3o."),e(),t(337,"blockquote")(338,"p"),n(339,"Ao receber os itens, o componente valida que apenas um item pode ter "),t(340,"code"),n(341,"selected: true"),e(),n(342,`.
Se mais de um item estiver com `),t(343,"code"),n(344,"selected: true"),e(),n(345,", apenas o primeiro ser\xE1 mantido como selecionado."),e()()()(),t(346,"tr",14)(347,"td",15)(348,"div",16)(349,"span",17),n(350," p-title"),l(351,"br"),e()()(),t(352,"td",18)(353,"code",19),n(354,"string"),e()(),t(355,"td",20),n(356,"-"),e(),t(357,"td",21)(358,"p"),n(359,"T\xEDtulo principal do menu"),e()()()(),t(360,"h3"),n(361,"Interfaces"),e(),t(362,"h4",28)(363,"code",5),n(364,"PoContextMenuItem"),e()(),t(365,"div",2)(366,"p"),n(367,"Interface para os itens do componente po-context-menu."),e()(),t(368,"h4",10),n(369,"Propriedades"),e(),t(370,"table",11)(371,"tr",12)(372,"th",13),n(373,"Nome"),e(),t(374,"th",13),n(375,"Tipo"),e(),t(376,"th",13),n(377,"Descri\xE7\xE3o"),e()(),t(378,"tr",14)(379,"td",15)(380,"div",16)(381,"span",17),n(382," action"),l(383,"br"),e()()(),t(384,"td",18)(385,"code",29),n(386,"Function"),e()(),t(387,"td",21)(388,"em")(389,"strong"),n(390,"(opcional)"),e()(),t(391,"p"),n(392,"A\xE7\xE3o executada ao clicar no item."),e()()(),t(393,"tr",14)(394,"td",15)(395,"div",16)(396,"span",17),n(397," label"),l(398,"br"),e()()(),t(399,"td",18)(400,"code",19),n(401,"string"),e()(),t(402,"td",21)(403,"p"),n(404,"Texto do item de menu."),e()()(),t(405,"tr",14)(406,"td",15)(407,"div",16)(408,"span",17),n(409," selected"),l(410,"br"),e()()(),t(411,"td",18)(412,"code",22),n(413,"boolean"),e()(),t(414,"td",21)(415,"em")(416,"strong"),n(417,"(opcional)"),e()(),t(418,"p"),n(419,"Estado de sele\xE7\xE3o do item."),e()()()()())},dependencies:[f],encapsulation:2})}return i})();var be=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||i)(B(Q),B(Z))};static \u0275cmp=b({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Context Menu",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,o){a&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),p("p-click",function(){return o.changeTab("doc")}),l(3,"sample-po-context-menu-doc"),e(),t(4,"po-tab",3),p("p-click",function(){return o.changeTab("web")}),l(5,"sample-po-context-menu-basic-view")(6,"sample-po-context-menu-labs-view")(7,"sample-po-context-menu-user-view"),e()()()),a&2&&(c("p-actions",o.actions),r(2),c("p-active",o.activeTab==="doc"),r(2),c("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[V,x,h,re,se,ce,ue],encapsulation:2})}return i})();var Te=[{path:"",component:be}],xe=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=F({type:i});static \u0275inj=L({imports:[A.forChild(Te),A]})}return i})();var mt=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275mod=F({type:i});static \u0275inj=L({imports:[ae,xe]})}return i})();export{mt as DocPoContextMenuModule};
