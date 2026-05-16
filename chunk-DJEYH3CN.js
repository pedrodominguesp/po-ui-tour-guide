import{o as E,p as te}from"./chunk-AT3MKFJ3.js";import{Gb as S,Hb as C,Ja as Z,M as X,a as I,ab as $,hb as y,tb as ee,w as K,ya as Y}from"./chunk-GCMU57WK.js";import{Ca as A,Da as N,Ea as s,Fa as t,Ga as e,Ha as r,I as T,Mb as P,Mc as H,Nc as z,O as g,Oa as D,Oc as j,P as v,Pa as m,Pc as U,Qc as J,Ra as R,bb as x,cb as i,cd as Q,db as q,eb as u,ed as G,gb as L,gd as O,ha as p,hb as M,ib as B,ma as V,oa as d,pa as k,rb as F}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ie=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-filter-chip-basic"]],standalone:!1,decls:1,vars:0,consts:[["p-label","Filter"]],template:function(o,l){o&1&&r(0,"po-filter-chip",0)},dependencies:[y],encapsulation:2})}return n})();var he=n=>({"docs-sample-code-tabs":n}),oe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-filter-chip-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Filter Chip Basic"),e(),t(4,"a",2),m("click",function(){return l.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.html"),e(),t(13,"pre",7),i(14,`<po-filter-chip p-label="Filter"></po-filter-chip>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-filter-chip-basic/sample-po-filter-chip-basic.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-filter-chip-basic',
  templateUrl: './sample-po-filter-chip-basic.component.html',
  standalone: false
})
export class SamplePoFilterChipBasicComponent {}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-filter-chip-basic"),e(),r(23,"hr")),o&2&&(p(5),x("po-icon "+l.sampleCodeButtonIcon),p(),u(" ",l.sampleCodeButtonLabel),p(),s("ngClass",F(4,he,l.hideSampleCodeTabs)))},dependencies:[P,E,S,C,ie],encapsulation:2})}return n})();var le=(()=>{class n{label;selected;disabled;event;model;ngOnInit(){this.restore()}onSelectedChange(a){this.selected=a.selected,this.model=JSON.stringify(a),this.event="p-selected-change"}restore(){this.label="Filter",this.selected=!1,this.disabled=!1,this.event="",this.model=""}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-filter-chip-labs"]],standalone:!1,decls:16,vars:8,consts:[["f","ngForm"],[1,"po-row"],[3,"p-selected-change","p-label","p-selected","p-disabled"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","selected","p-label","Selected",1,"po-md-4",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(o,l){if(o&1){let h=D();t(0,"div",1)(1,"po-filter-chip",2),m("p-selected-change",function(c){return l.onSelectedChange(c)}),e()(),r(2,"po-divider"),t(3,"div",1),r(4,"po-info",3)(5,"po-info",4),e(),r(6,"po-divider"),t(7,"form",null,0)(9,"div",1)(10,"po-input",5),B("ngModelChange",function(c){return g(h),M(l.label,c)||(l.label=c),v(c)}),e()(),t(11,"div",1)(12,"po-switch",6),B("ngModelChange",function(c){return g(h),M(l.selected,c)||(l.selected=c),v(c)}),e(),t(13,"po-switch",7),B("ngModelChange",function(c){return g(h),M(l.disabled,c)||(l.disabled=c),v(c)}),e()(),t(14,"div",1)(15,"po-button",8),m("p-click",function(){return l.restore()}),e()()()}o&2&&(p(),s("p-label",l.label)("p-selected",l.selected)("p-disabled",l.disabled),p(3),s("p-value",l.model),p(),s("p-value",l.event),p(5),L("ngModel",l.label),p(2),L("ngModel",l.selected),p(),L("ngModel",l.disabled))},dependencies:[J,H,z,U,j,K,I,Z,Y,y,$],encapsulation:2})}return n})();var be=n=>({"docs-sample-code-tabs":n}),ae=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-filter-chip-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Filter Chip Labs"),e(),t(4,"a",2),m("click",function(){return l.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
  <po-filter-chip
    [p-label]="label"
    [p-selected]="selected"
    [p-disabled]="disabled"
    (p-selected-change)="onSelectedChange($event)"
  >
  </po-filter-chip>
</div>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="model"></po-info>
  <po-info class="po-md-6" p-label="Event" [p-value]="event"></po-info>
</div>

<po-divider />

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-4" name="label" [(ngModel)]="label" p-label="Label"></po-input>
  </div>

  <div class="po-row">
    <po-switch class="po-md-4" name="selected" [(ngModel)]="selected" p-label="Selected"></po-switch>
    <po-switch class="po-md-4" name="disabled" [(ngModel)]="disabled" p-label="Disabled"></po-switch>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"></po-button>
  </div>
</form>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-filter-chip-labs/sample-po-filter-chip-labs.component.ts"),e(),t(19,"pre",9),i(20,`import { Component, OnInit } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

@Component({
  selector: 'sample-po-filter-chip-labs',
  templateUrl: './sample-po-filter-chip-labs.component.html',
  standalone: false
})
export class SamplePoFilterChipLabsComponent implements OnInit {
  label: string;
  selected: boolean;
  disabled: boolean;
  event: string;
  model: string;

  ngOnInit() {
    this.restore();
  }

  onSelectedChange(event: PoFilterChipSelectedChange): void {
    this.selected = event.selected;
    this.model = JSON.stringify(event);
    this.event = 'p-selected-change';
  }

  restore() {
    this.label = 'Filter';
    this.selected = false;
    this.disabled = false;
    this.event = '';
    this.model = '';
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-filter-chip-labs"),e(),r(23,"hr")),o&2&&(p(5),x("po-icon "+l.sampleCodeButtonIcon),p(),u(" ",l.sampleCodeButtonLabel),p(),s("ngClass",F(4,be,l.hideSampleCodeTabs)))},dependencies:[P,E,S,C,le],encapsulation:2})}return n})();var Ce=(n,b)=>b.label,Ee=(n,b)=>b.name;function ge(n,b){if(n&1){let a=D();t(0,"po-filter-chip",7),m("p-selected-change",function(l){g(a);let h=R();return v(h.onFilterChange(l))}),e()}if(n&2){let a=b.$implicit;s("p-label",a.label)("p-selected",a.selected)}}function ve(n,b){if(n&1&&(t(0,"div",5)(1,"span",8),i(2),e(),t(3,"span",9),i(4),e()()),n&2){let a=b.$implicit;p(2),q(a.name),p(2),u("(",a.category,")")}}function xe(n,b){n&1&&(t(0,"div",6)(1,"span",10),i(2,"No products found."),e()())}var re=(()=>{class n{filters=[{label:"Electronics",selected:!1},{label:"Clothing",selected:!1},{label:"Books",selected:!1},{label:"Sports",selected:!1}];products=[{name:"Laptop",category:"Electronics"},{name:"Smartphone",category:"Electronics"},{name:"T-Shirt",category:"Clothing"},{name:"Sneakers",category:"Clothing"},{name:"Novel",category:"Books"},{name:"Cookbook",category:"Books"},{name:"Basketball",category:"Sports"},{name:"Tennis Racket",category:"Sports"}];get filteredProducts(){let a=this.filters.filter(o=>o.selected).map(o=>o.label);return a.length===0?this.products:this.products.filter(o=>a.includes(o.category))}onFilterChange(a){let o=this.filters.find(l=>l.label===a.label);o&&(o.selected=a.selected)}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-filter-chip-filter-list"]],standalone:!1,decls:16,vars:2,consts:[[1,"po-row"],[1,"po-md-12"],[1,"po-font-subtitle"],[1,"po-mt-1"],[1,"po-mr-1",3,"p-label","p-selected"],[1,"po-row","po-p-1"],[1,"po-row","po-p-2"],[1,"po-mr-1",3,"p-selected-change","p-label","p-selected"],[1,"po-font-text-bold","po-mr-1"],[1,"po-font-text-small"],[1,"po-font-text"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"div",1)(2,"p",2),i(3,"Filter by category:"),e(),t(4,"div",3),A(5,ge,1,2,"po-filter-chip",4,Ce),e()()(),r(7,"po-divider"),t(8,"div",0)(9,"div",1)(10,"p",2),i(11),e(),t(12,"po-container"),A(13,ve,5,2,"div",5,Ee,!1,xe,3,0,"div",6),e()()()),o&2&&(p(5),N(l.filters),p(6),u("Products (",l.filteredProducts.length,"):"),p(2),N(l.filteredProducts))},dependencies:[X,I,y],encapsulation:2})}return n})();var Pe=n=>({"docs-sample-code-tabs":n}),pe=(()=>{class n{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-filter-chip-filter-list-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,l){o&1&&(r(0,"br"),t(1,"blockquote",0)(2,"label",1),i(3,"PO Filter Chip - Filter List"),e(),t(4,"a",2),m("click",function(){return l.toggleSampleCodeTabs()}),r(5,"span"),i(6),e()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),i(12,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.html"),e(),t(13,"pre",7),i(14,`<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Filter by category:</p>
    <div class="po-mt-1">
      @for (filter of filters; track filter.label) {
        <po-filter-chip
          class="po-mr-1"
          [p-label]="filter.label"
          [p-selected]="filter.selected"
          (p-selected-change)="onFilterChange($event)"
        >
        </po-filter-chip>
      }
    </div>
  </div>
</div>

<po-divider />

<div class="po-row">
  <div class="po-md-12">
    <p class="po-font-subtitle">Products ({ { filteredProducts.length }}):</p>
    <po-container>
      @for (product of filteredProducts; track product.name) {
        <div class="po-row po-p-1">
          <span class="po-font-text-bold po-mr-1">{ { product.name }}</span>
          <span class="po-font-text-small">({ { product.category }})</span>
        </div>
      } @empty {
        <div class="po-row po-p-2">
          <span class="po-font-text">No products found.</span>
        </div>
      }
    </po-container>
  </div>
</div>
`),e()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),i(18,"sample-po-filter-chip-filter-list/sample-po-filter-chip-filter-list.component.ts"),e(),t(19,"pre",9),i(20,`import { Component } from '@angular/core';
import { PoFilterChipSelectedChange } from '@po-ui/ng-components/lib';

interface FilterOption {
  label: string;
  selected: boolean;
}

interface Product {
  name: string;
  category: string;
}

@Component({
  selector: 'sample-po-filter-chip-filter-list',
  templateUrl: './sample-po-filter-chip-filter-list.component.html',
  standalone: false
})
export class SamplePoFilterChipFilterListComponent {
  filters: Array<FilterOption> = [
    { label: 'Electronics', selected: false },
    { label: 'Clothing', selected: false },
    { label: 'Books', selected: false },
    { label: 'Sports', selected: false }
  ];

  products: Array<Product> = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Smartphone', category: 'Electronics' },
    { name: 'T-Shirt', category: 'Clothing' },
    { name: 'Sneakers', category: 'Clothing' },
    { name: 'Novel', category: 'Books' },
    { name: 'Cookbook', category: 'Books' },
    { name: 'Basketball', category: 'Sports' },
    { name: 'Tennis Racket', category: 'Sports' }
  ];

  get filteredProducts(): Array<Product> {
    const activeFilters = this.filters.filter(f => f.selected).map(f => f.label);

    if (activeFilters.length === 0) {
      return this.products;
    }

    return this.products.filter(p => activeFilters.includes(p.category));
  }

  onFilterChange(event: PoFilterChipSelectedChange): void {
    const filter = this.filters.find(f => f.label === event.label);
    if (filter) {
      filter.selected = event.selected;
    }
  }
}
`),e()()()()(),t(21,"div",10),r(22,"sample-po-filter-chip-filter-list"),e(),r(23,"hr")),o&2&&(p(5),x("po-icon "+l.sampleCodeButtonIcon),p(),u(" ",l.sampleCodeButtonLabel),p(),s("ngClass",F(4,Pe,l.hideSampleCodeTabs)))},dependencies:[P,E,S,C,re],encapsulation:2})}return n})();var de=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275cmp=d({type:n,selectors:[["sample-po-filter-chip-doc"]],standalone:!1,decls:390,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/ARIA/apg/#listbox"],["href","https://www.w3.org/WAI/ARIA/apg/#keyboard-interaction-3"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","undefined"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-h4","docs-api-class-name"]],template:function(o,l){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),i(3,"import { PoFilterChipModule } from '@po-ui/ng-components';"),e()(),t(4,"div",2)(5,"p"),i(6,"M\xF3dulo do componente "),t(7,"code"),i(8,"po-filter-chip"),e(),i(9,"."),e()(),t(10,"h3",3),i(11,"Componente"),e(),t(12,"h4",4)(13,"code",5),i(14,"PoFilterChipComponent"),e()(),t(15,"div",2)(16,"p"),i(17,"O "),t(18,"code"),i(19,"po-filter-chip"),e(),i(20,` \xE9 um componente interativo que representa uma op\xE7\xE3o de filtro selecion\xE1vel na forma de chip.
O componente exibe um r\xF3tulo de texto e suporta tr\xEAs estados visuais: padr\xE3o (repouso), hover e selecionado.
No estado selecionado, um \xEDcone de check \xE9 exibido \xE0 esquerda do r\xF3tulo.`),e(),t(21,"h4"),i(22,"Boas pr\xE1ticas"),e(),t(23,"ul")(24,"li"),i(25,"Utilize "),t(26,"code"),i(27,"labels"),e(),i(28," curtos e descritivos para os filtros."),e(),t(29,"li"),i(30,"Agrupe m\xFAltiplos "),t(31,"code"),i(32,"po-filter-chip"),e(),i(33," para representar op\xE7\xF5es de filtragem relacionadas."),e(),t(34,"li"),i(35,"Utilize a propriedade "),t(36,"code"),i(37,"p-disabled"),e(),i(38," para filtros temporariamente indispon\xEDveis."),e()(),t(39,"h4"),i(40,"Acessibilidade tratada no componente"),e(),t(41,"p"),i(42,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),e(),t(43,"ul")(44,"li"),i(45,"O componente possui "),t(46,"code"),i(47,'role="option"'),e(),i(48," e "),t(49,"code"),i(50,"aria-selected"),e(),i(51," refletindo o estado de sele\xE7\xE3o. "),t(52,"a",6),i(53,"W3C WAI-ARIA 3.14 Listbox"),e()(),t(54,"li"),i(55,"Quando em foco, o chip \xE9 ativado usando as teclas de Espa\xE7o e Enter do teclado. "),t(56,"a",7),i(57,"W3C WAI-ARIA 3.5 Button - Keyboard Interaction"),e()()(),t(58,"h4"),i(59,"Tokens customiz\xE1veis"),e(),t(60,"p"),i(61,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),e(),t(62,"blockquote")(63,"p"),i(64,"Para maiores informa\xE7\xF5es, acesse o guia "),t(65,"a",8),i(66,"Personalizando o Tema Padr\xE3o com Tokens CSS"),e(),i(67,"."),e()(),t(68,"table")(69,"thead")(70,"tr")(71,"th"),i(72,"Propriedade"),e(),t(73,"th"),i(74,"Descri\xE7\xE3o"),e(),t(75,"th"),i(76,"Valor Padr\xE3o"),e()()(),t(77,"tbody")(78,"tr")(79,"td")(80,"code"),i(81,"--border-radius"),e()(),t(82,"td"),i(83,"Raio dos cantos do elemento"),e(),t(84,"td")(85,"code"),i(86,"var(--border-radius-lg)"),e()()(),t(87,"tr")(88,"td")(89,"code"),i(90,"--border-width"),e()(),t(91,"td"),i(92,"Largura da borda"),e(),t(93,"td")(94,"code"),i(95,"var(--border-width-sm)"),e()()(),t(96,"tr")(97,"td")(98,"code"),i(99,"--font-family"),e()(),t(100,"td"),i(101,"Fam\xEDlia tipogr\xE1fica"),e(),t(102,"td")(103,"code"),i(104,"var(--font-family-theme)"),e()()(),t(105,"tr")(106,"td")(107,"code"),i(108,"--font-size"),e()(),t(109,"td"),i(110,"Tamanho da fonte"),e(),t(111,"td")(112,"code"),i(113,"var(--font-size-default)"),e()()(),t(114,"tr")(115,"td")(116,"code"),i(117,"--font-weight"),e()(),t(118,"td"),i(119,"Peso da fonte"),e(),t(120,"td")(121,"code"),i(122,"var(--font-weight-normal)"),e()()(),t(123,"tr")(124,"td")(125,"strong"),i(126,"Default"),e()(),r(127,"td")(128,"td"),e(),t(129,"tr")(130,"td")(131,"code"),i(132,"--border-color"),e()(),t(133,"td"),i(134,"Cor da borda no estado padr\xE3o"),e(),t(135,"td")(136,"code"),i(137,"var(--color-neutral-light-20)"),e()()(),t(138,"tr")(139,"td")(140,"code"),i(141,"--text-color"),e()(),t(142,"td"),i(143,"Cor do texto no estado padr\xE3o"),e(),t(144,"td")(145,"code"),i(146,"var(--color-neutral-dark-80)"),e()()(),t(147,"tr")(148,"td")(149,"code"),i(150,"--background-color"),e()(),t(151,"td"),i(152,"Cor de fundo no estado padr\xE3o"),e(),t(153,"td")(154,"code"),i(155,"transparent"),e()()(),t(156,"tr")(157,"td")(158,"strong"),i(159,"Hover"),e()(),r(160,"td")(161,"td"),e(),t(162,"tr")(163,"td")(164,"code"),i(165,"--background-color-hover"),e()(),t(166,"td"),i(167,"Cor de fundo no estado hover"),e(),t(168,"td")(169,"code"),i(170,"var(--color-brand-01-lightest)"),e()()(),t(171,"tr")(172,"td")(173,"code"),i(174,"--text-color-hover"),e()(),t(175,"td"),i(176,"Cor do texto no estado hover"),e(),t(177,"td")(178,"code"),i(179,"var(--color-action-default)"),e()()(),t(180,"tr")(181,"td")(182,"strong"),i(183,"Selected"),e()(),r(184,"td")(185,"td"),e(),t(186,"tr")(187,"td")(188,"code"),i(189,"--background-color-selected"),e()(),t(190,"td"),i(191,"Cor de fundo no estado selecionado"),e(),t(192,"td")(193,"code"),i(194,"var(--color-brand-01-lightest)"),e()()(),t(195,"tr")(196,"td")(197,"code"),i(198,"--border-color-selected"),e()(),t(199,"td"),i(200,"Cor da borda no estado selecionado"),e(),t(201,"td")(202,"code"),i(203,"var(--color-brand-01-lighter)"),e()()(),t(204,"tr")(205,"td")(206,"code"),i(207,"--text-color-selected"),e()(),t(208,"td"),i(209,"Cor do texto no estado selecionado"),e(),t(210,"td")(211,"code"),i(212,"var(--color-action-default)"),e()()(),t(213,"tr")(214,"td")(215,"code"),i(216,"--icon-color-selected"),e()(),t(217,"td"),i(218,"Cor do \xEDcone no estado selecionado"),e(),t(219,"td")(220,"code"),i(221,"var(--color-action-default)"),e()()(),t(222,"tr")(223,"td")(224,"strong"),i(225,"Disabled"),e()(),r(226,"td")(227,"td"),e(),t(228,"tr")(229,"td")(230,"code"),i(231,"--opacity-disabled"),e()(),t(232,"td"),i(233,"Opacidade no estado desabilitado"),e(),t(234,"td")(235,"code"),i(236,"0.5"),e()()()()()(),t(237,"div",9)(238,"h4",10),i(239,"Seletor"),e(),t(240,"pre",11),i(241,`<po-filter-chip
    p-disabled="boolean"
    p-label="string | undefined"
    p-selected="boolean"
    (p-selected-change)="EventEmitter" >
</po-filter-chip>
`),e()(),t(242,"h4",12),i(243,"Propriedades"),e(),t(244,"table",13)(245,"tr",14)(246,"th",15),i(247,"Nome"),e(),t(248,"th",15),i(249,"Tipo"),e(),t(250,"th",15),i(251,"Padr\xE3o"),e(),t(252,"th",15),i(253,"Descri\xE7\xE3o"),e()(),t(254,"tr",16)(255,"td",17)(256,"div",18)(257,"span",19),i(258," p-disabled"),r(259,"br"),e()()(),t(260,"td",20)(261,"code",21),i(262,"boolean"),e()(),t(263,"td",22)(264,"p")(265,"code"),i(266,"false"),e()()(),t(267,"td",23)(268,"em")(269,"strong"),i(270,"(opcional)"),e()(),t(271,"p"),i(272,"Define se o chip est\xE1 desabilitado, impedindo qualquer intera\xE7\xE3o do usu\xE1rio."),e(),t(273,"p"),i(274,"Quando habilitado, o chip n\xE3o responde a cliques nem a eventos de teclado (Enter/Space)."),e()()(),t(275,"tr",16)(276,"td",17)(277,"div",18)(278,"span",19),i(279," p-label"),r(280,"br"),e()()(),t(281,"td",20)(282,"code",24),i(283,"string "),e(),t(284,"code",25),i(285," undefined"),e()(),t(286,"td",22),i(287,"-"),e(),t(288,"td",23)(289,"em")(290,"strong"),i(291,"(opcional)"),e()(),t(292,"p"),i(293,"Define o r\xF3tulo de texto exibido no chip."),e()()(),t(294,"tr",16)(295,"td",17)(296,"div",18)(297,"span",19),i(298," p-selected"),r(299,"br"),e()()(),t(300,"td",20)(301,"code",21),i(302,"boolean"),e()(),t(303,"td",22)(304,"p")(305,"code"),i(306,"false"),e()()(),t(307,"td",23)(308,"em")(309,"strong"),i(310,"(opcional)"),e()(),t(311,"p"),i(312,"Define o estado de sele\xE7\xE3o do chip."),e()()(),t(313,"tr",16)(314,"td",17)(315,"div",26)(316,"span",27),i(317," (p-selected-change)"),r(318,"br"),e()()(),t(319,"td",20)(320,"code",28),i(321,"EventEmitter"),e()(),t(322,"td",22),i(323,"-"),e(),t(324,"td",23)(325,"em")(326,"strong"),i(327,"(opcional)"),e()(),t(328,"p"),i(329,"Evento disparado ap\xF3s a altera\xE7\xE3o do estado de sele\xE7\xE3o do "),t(330,"em"),i(331,"chip"),e(),i(332,`. Retorna o objeto PoFilterChipSelectedChange
modificado.`),e()()()(),t(333,"h3"),i(334,"Interfaces"),e(),t(335,"h4",29)(336,"code",5),i(337,"PoFilterChipSelectedChange"),e()(),t(338,"div",2)(339,"p"),i(340,"Interface que define o objeto emitido pelo evento "),t(341,"code"),i(342,"p-selected-change"),e(),i(343,"."),e()(),t(344,"h4",12),i(345,"Propriedades"),e(),t(346,"table",13)(347,"tr",14)(348,"th",15),i(349,"Nome"),e(),t(350,"th",15),i(351,"Tipo"),e(),t(352,"th",15),i(353,"Descri\xE7\xE3o"),e()(),t(354,"tr",16)(355,"td",17)(356,"div",18)(357,"span",19),i(358," label"),r(359,"br"),e()()(),t(360,"td",20)(361,"code",24),i(362,"string"),e()(),t(363,"td",23)(364,"p"),i(365,"R\xF3tulo de texto do "),t(366,"em"),i(367,"chip"),e(),i(368,"."),e()()(),t(369,"tr",16)(370,"td",17)(371,"div",18)(372,"span",19),i(373," selected"),r(374,"br"),e()()(),t(375,"td",20)(376,"code",21),i(377,"boolean"),e()(),t(378,"td",23)(379,"p"),i(380,"Estado de sele\xE7\xE3o do "),t(381,"em"),i(382,"chip"),e(),i(383," ("),t(384,"code"),i(385,"true"),e(),i(386," para selecionado, "),t(387,"code"),i(388,"false"),e(),i(389," para desmarcado)."),e()()()()())},dependencies:[E],encapsulation:2})}return n})();var se=(()=>{class n{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(a,o){this.route=a,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(a=>{let o=a.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(a){this.router.navigate([],{queryParams:{view:a},queryParamsHandling:"merge"}),this.activeTab=a}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||n)(V(Q),V(G))};static \u0275cmp=d({type:n,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Filter Chip",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,l){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),m("p-click",function(){return l.changeTab("doc")}),r(3,"sample-po-filter-chip-doc"),e(),t(4,"po-tab",3),m("p-click",function(){return l.changeTab("web")}),r(5,"sample-po-filter-chip-basic-view")(6,"sample-po-filter-chip-labs-view")(7,"sample-po-filter-chip-filter-list-view"),e()()()),o&2&&(s("p-actions",l.actions),p(2),s("p-active",l.activeTab==="doc"),p(2),s("p-hide",l.hidePoWebSample)("p-active",l.activeTab==="web"))},dependencies:[ee,S,C,oe,ae,pe,de],encapsulation:2})}return n})();var _e=[{path:"",component:se}],me=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[O.forChild(_e),O]})}return n})();var Ze=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=k({type:n});static \u0275inj=T({imports:[te,me]})}return n})();export{Ze as DocPoFilterChipModule};
