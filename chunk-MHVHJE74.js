import{g as P,o as g,p as M}from"./chunk-WYOAC7KN.js";import{Hb as x,Ib as S,ub as N}from"./chunk-XOCFD5XY.js";import{Ea as l,Fa as i,Ga as t,Ha as n,I as v,Mb as h,Pa as s,Va as w,Wa as A,Xa as T,bb as y,cb as e,cd as k,eb as f,ed as F,gd as C,ha as p,ma as D,oa as m,pa as b,qb as q,rb as E}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var V=()=>({property:"id",label:"User ID"}),G=a=>[a],B=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic"]],standalone:!1,decls:1,vars:4,consts:[["p-title","Po Page Dynamic Edit","p-service-api","https://po-sample-api.onrender.com/v1/people",3,"p-fields"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",0),o&2&&l("p-fields",E(2,G,q(1,V)))},dependencies:[P],encapsulation:2})}return a})();var W=a=>({"docs-sample-code-tabs":a}),L=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit Basic"),t(),i(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-page-dynamic-edit
  p-title="Po Page Dynamic Edit"
  [p-fields]="[{ property: 'id', label: 'User ID' }]"
  p-service-api="https://po-sample-api.onrender.com/v1/people"
>
</po-page-dynamic-edit>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-dynamic-edit-basic/sample-po-page-dynamic-edit-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-page-dynamic-edit-basic',
  templateUrl: './sample-po-page-dynamic-edit-basic.component.html',
  standalone: false
})
export class SamplePoPageDynamicEditBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-page-dynamic-edit-basic"),t(),n(23,"hr")),o&2&&(p(5),y("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel),p(),l("ngClass",E(4,W,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,B],encapsulation:2})}return a})();var J=["dynamicEdit"],j=(()=>{class a{dynamicEdit;serviceApi="https://po-sample-api.onrender.com/v1/people";actions={save:"/documentation/po-page-dynamic-detail",saveNew:"/documentation/po-page-dynamic-edit"};literals={pageActionCancel:"Descartar",pageActionSave:"Gravar",pageActionSaveNew:"Gravar e novo"};breadcrumb={items:[{label:"Home",link:"/"},{label:"People",link:"/documentation/po-page-dynamic-table"},{label:"Edit"}]};fields=[{property:"status",divider:"Status",options:["active","inactive"]},{property:"id",label:"User ID",key:!0,required:!0},{property:"name",divider:"Personal data",required:!0},{property:"nickname"},{property:"email",label:"E-mail"},{property:"birthdate",label:"Birth date",type:"date",errorMessage:"Invalid date.",help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthdate")},{property:"genre",options:["female","male","others"],gridLgColumns:6},{property:"nationality"},{property:"birthPlace",label:"Place of birth"},{property:"graduation"},{property:"father",label:"Father`s name",divider:"Relationship",gridMdColumns:4,gridLgColumns:4},{property:"mother",label:"Mother`s name",offsetMdColumns:4,offsetLgColumns:4,gridMdColumns:4,gridLgColumns:4},{property:"street",divider:"Address",gridColumns:4},{property:"city",optionsService:"https://po-sample-api.onrender.com/v1/cities?transform=true",offsetColumns:4,gridColumns:4}];onKeyDown(r,o){o.code==="F9"&&this.dynamicEdit.showAdditionalHelp(r)}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user"]],viewQuery:function(o,d){if(o&1&&w(J,7),o&2){let u;A(u=T())&&(d.dynamicEdit=u.first)}},standalone:!1,decls:2,vars:6,consts:[["dynamicEdit",""],["p-title","User edit",3,"p-auto-router","p-actions","p-breadcrumb","p-fields","p-literals","p-service-api"]],template:function(o,d){o&1&&n(0,"po-page-dynamic-edit",1,0),o&2&&l("p-auto-router",!0)("p-actions",d.actions)("p-breadcrumb",d.breadcrumb)("p-fields",d.fields)("p-literals",d.literals)("p-service-api",d.serviceApi)},dependencies:[P],encapsulation:2})}return a})();var Z=a=>({"docs-sample-code-tabs":a}),O=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-user-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,d){o&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Page Dynamic Edit - User"),t(),i(4,"a",2),s("click",function(){return d.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.html"),t(),i(13,"pre",7),e(14,`<po-page-dynamic-edit
  #dynamicEdit
  [p-auto-router]="true"
  p-title="User edit"
  [p-actions]="actions"
  [p-breadcrumb]="breadcrumb"
  [p-fields]="fields"
  [p-literals]="literals"
  [p-service-api]="serviceApi"
>
</po-page-dynamic-edit>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-page-dynamic-edit-user/sample-po-page-dynamic-edit-user.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoBreadcrumb, PoDynamicFormField } from '@po-ui/ng-components';

import { PoPageDynamicEditActions, PoPageDynamicEditComponent, PoPageDynamicEditLiterals } from '@po-ui/ng-templates';

@Component({
  selector: 'sample-po-page-dynamic-edit-user',
  templateUrl: './sample-po-page-dynamic-edit-user.component.html',
  standalone: false
})
export class SamplePoPageDynamicEditUserComponent {
  @ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

  public readonly serviceApi = 'https://po-sample-api.onrender.com/v1/people';

  public readonly actions: PoPageDynamicEditActions = {
    save: '/documentation/po-page-dynamic-detail',
    saveNew: '/documentation/po-page-dynamic-edit'
  };

  public readonly literals: PoPageDynamicEditLiterals = {
    pageActionCancel: 'Descartar',
    pageActionSave: 'Gravar',
    pageActionSaveNew: 'Gravar e novo'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/documentation/po-page-dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<PoDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    {
      property: 'birthdate',
      label: 'Birth date',
      type: 'date',
      errorMessage: 'Invalid date.',
      help: 'Enter or select a valid date.',
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthdate')
    },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    {
      property: 'father',
      label: 'Father\`s name',
      divider: 'Relationship',
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'mother',
      label: 'Mother\`s name',
      offsetMdColumns: 4,
      offsetLgColumns: 4,
      gridMdColumns: 4,
      gridLgColumns: 4
    },
    {
      property: 'street',
      divider: 'Address',
      gridColumns: 4
    },
    {
      property: 'city',
      optionsService: 'https://po-sample-api.onrender.com/v1/cities?transform=true',
      offsetColumns: 4,
      gridColumns: 4
    }
  ];

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicEdit.showAdditionalHelp(property);
    }
  }
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-page-dynamic-edit-user"),t(),n(23,"hr")),o&2&&(p(5),y("po-icon "+d.sampleCodeButtonIcon),p(),f(" ",d.sampleCodeButtonLabel),p(),l("ngClass",E(4,Z,d.hideSampleCodeTabs)))},dependencies:[h,g,x,S,j],encapsulation:2})}return a})();var _=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275cmp=m({type:a,selectors:[["sample-po-page-dynamic-edit-doc"]],standalone:!1,decls:1475,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-page-dynamic-edit#po-page-dynamic-edit-metadata"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoPageDynamicEditActions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoBreadcrumb"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicEditField>"],["pan","",1,"docs-api-property-type","PoPageDynamicEditLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditOptions)"],["pan","",1,"docs-api-property-type","unknown"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","(()","=>","PoPageDynamicEditBeforeCancel)"],["href","https://po-ui.io/guides/api#successMessages"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSave)"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","PoPageDynamicEditBeforeSaveNew)"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","((resource:","any,","id:","string)","=>","void)"],["pan","",1,"docs-api-property-type","((resource:","any,","id?:","string)","=>","void)"],["pan","",1,"docs-api-property-type","any"],["href","https://po-ui.io/documentation/po-dynamic-form"],["id","po-page-dynamic-edit-metadata"],["pan","",1,"docs-api-property-type","number"]],template:function(o,d){o&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoPageDynamicEditModule } from '@po-ui/ng-templates';"),t()(),i(4,"div",2)(5,"p"),e(6,"M\xF3dulo do template do po-page-dynamic-detail."),t()(),i(7,"h3",3),e(8,"Componente"),t(),i(9,"h4",4)(10,"code",5),e(11,"PoPageDynamicEditComponent"),t()(),i(12,"div",2)(13,"p"),e(14,"O "),i(15,"code"),e(16,"po-page-dynamic-edit"),t(),e(17,` \xE9 uma p\xE1gina que pode servir para editar ou criar novos registros,
o mesmo tamb\xE9m suporta metadados conforme especificado na documenta\xE7\xE3o.`),t(),i(18,"h3"),e(19,"Utiliza\xE7\xE3o via rota"),t(),i(20,"p"),e(21,"Ao utilizar as rotas para inicializar o template, o "),i(22,"code"),e(23,"page-dynamic-edit"),t(),e(24,` disponibiliza propriedades que devem ser fornecidas no arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o, para
poder especificar o endpoint dos dados e dos metadados que ser\xE3o carregados na inicializa\xE7\xE3o.`),t(),i(25,"p"),e(26,"Exemplo de utiliza\xE7\xE3o:"),t(),i(27,"p"),e(28,"Arquivo de configura\xE7\xE3o de rotas da aplica\xE7\xE3o: "),i(29,"code"),e(30,"app-routing.module.ts"),t()(),i(31,"pre")(32,"code"),e(33,`const routes: Routes = [
{
  path: 'people',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados utilizando o m\xE9todo HTTP Get
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados utilizando o m\xE9todo HTTP Post
  }
 },
 {
  path: 'home',
  component: HomeExampleComponent
 }
];
`),t()(),i(34,"p"),e(35,`O componente primeiro ir\xE1 carregar o metadado da rota definida na propriedade serviceMetadataApi
e depois ir\xE1 buscar da rota definida na propriedade serviceLoadApi.`),t(),i(36,"p"),e(37,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),t(),i(38,"blockquote")(39,"p"),e(40,`Caso o servidor retornar um erro ao recuperar os metadados, ser\xE3o repassados os metadados salvos em cache,
se o cache n\xE3o existir ser\xE1 disparada uma notifica\xE7\xE3o.`),t()(),i(41,"p"),e(42,"Para carregar com um recurso j\xE1 existente, deve-se ser inclu\xEDdo um par\xE2metro na rota chamado "),i(43,"code"),e(44,"id"),t(),e(45,":"),t(),i(46,"pre")(47,"code"),e(48,`{
  path: 'people/:id',
  component: PoPageDynamicEditComponent,
  data: {
    serviceApi: 'http://localhost:3000/v1/people', // endpoint dos dados
    serviceMetadataApi: 'http://localhost:3000/v1/metadata', // endpoint dos metadados
    serviceLoadApi: 'http://localhost:3000/load-metadata' // endpoint de customiza\xE7\xF5es dos metadados
  }
}
`),t()(),i(49,"p"),e(50,`A requisi\xE7\xE3o dos metadados \xE9 feita na inicializa\xE7\xE3o do template para buscar os metadados da p\xE1gina passando o
tipo do metadado esperado e a vers\xE3o cacheada pelo browser.`),t(),i(51,"p"),e(52,`O formato esperado na resposta da requisi\xE7\xE3o est\xE1 especificado na interface
`),i(53,"a",6),e(54,"PoPageDynamicEditMetadata"),t(),e(55,". Por exemplo:"),t(),i(56,"pre")(57,"code"),e(58,` {
  version: 1,
  title: 'Person edit',
  fields: [
    { property: 'id', key: true, disabled: true },
    { property: 'status' },
    { property: 'name' },
    { property: 'nickname' },
    { property: 'birthdate', label: 'Birth date' },
    { property: 'genre' },
    { property: 'city' },
    { property: 'country' }
  ]
}
`),t()(),i(59,"blockquote")(60,"p"),e(61,"Caso o endpoint dos metadados n\xE3o seja especificado, ser\xE1 feito uma requisi\xE7\xE3o utilizando o "),i(62,"code"),e(63,"serviceApi"),t(),e(64," da seguinte forma:"),t()(),i(65,"pre")(66,"code"),e(67,`GET {end-point}/metadata?type=edit&version={version}
`),t()(),i(68,"h4"),e(69,"Tokens customiz\xE1veis"),t(),i(70,"table")(71,"thead")(72,"tr")(73,"th"),e(74,"Propriedade"),t(),i(75,"th"),e(76,"Descri\xE7\xE3o"),t(),i(77,"th"),e(78,"Valor Padr\xE3o"),t()()(),i(79,"tbody")(80,"tr")(81,"td")(82,"strong"),e(83,"Header"),t()(),n(84,"td")(85,"td"),t(),i(86,"tr")(87,"td")(88,"code"),e(89,"--padding"),t()(),i(90,"td"),e(91,"Espa\xE7amento do header"),t(),i(92,"td")(93,"code"),e(94,"var(--spacing-xs) var(--spacing-md)"),t()()(),i(95,"tr")(96,"td")(97,"code"),e(98,"--gap"),t()(),i(99,"td"),e(100,"Espa\xE7amento entre os breadcrumbs e o t\xEDtulo"),t(),i(101,"td")(102,"code"),e(103,"var(--spacing-md)"),t()()(),i(104,"tr")(105,"td")(106,"code"),e(107,"--gap-actions"),t()(),i(108,"td"),e(109,"Espa\xE7amento entre as a\xE7\xF5es"),t(),i(110,"td")(111,"code"),e(112,"var(--spacing-xs)"),t()()(),i(113,"tr")(114,"td")(115,"code"),e(116,"--font-family"),t()(),i(117,"td"),e(118,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo"),t(),i(119,"td")(120,"code"),e(121,"var(--font-family-theme)"),t()()(),i(122,"tr")(123,"td")(124,"strong"),e(125,"Content"),t()(),n(126,"td")(127,"td"),t(),i(128,"tr")(129,"td")(130,"code"),e(131,"--padding-content"),t()(),i(132,"td"),e(133,"Espa\xE7amento do conte\xFAdo"),t(),i(134,"td")(135,"code"),e(136,"var(--spacing-xs) var(--spacing-sm)"),t()()()()()(),i(137,"div",7)(138,"h4",8),e(139,"Seletor"),t(),i(140,"pre",9),e(141,`<po-page-dynamic-edit
    p-actions="PoPageDynamicEditActions"
    p-auto-router="boolean"
    p-breadcrumb="PoBreadcrumb"
    p-components-size="string"
    p-fields="Array<PoPageDynamicEditField>"
    p-literals="PoPageDynamicEditLiterals"
    p-notification-type="string"
    p-load="string | (() => PoPageDynamicEditOptions)"
    p-load-data="unknown"
    p-service-api="string"
    p-title="string" >
</po-page-dynamic-edit>
`),t()(),i(142,"h4",10),e(143,"Propriedades"),t(),i(144,"table",11)(145,"tr",12)(146,"th",13),e(147,"Nome"),t(),i(148,"th",13),e(149,"Tipo"),t(),i(150,"th",13),e(151,"Padr\xE3o"),t(),i(152,"th",13),e(153,"Descri\xE7\xE3o"),t()(),i(154,"tr",14)(155,"td",15)(156,"div",16)(157,"span",17),e(158," p-actions"),n(159,"br"),t()()(),i(160,"td",18)(161,"code",19),e(162,"PoPageDynamicEditActions"),t()(),i(163,"td",20),e(164,"-"),t(),i(165,"td",21)(166,"em")(167,"strong"),e(168,"(opcional)"),t()(),i(169,"p"),e(170,"A\xE7\xF5es da p\xE1gina."),t()()(),i(171,"tr",14)(172,"td",15)(173,"div",16)(174,"span",17),e(175," p-auto-router"),n(176,"br"),t()()(),i(177,"td",18)(178,"code",22),e(179,"boolean"),t()(),i(180,"td",20)(181,"p"),e(182,"false"),t()(),i(183,"td",21)(184,"em")(185,"strong"),e(186,"(opcional)"),t()(),i(187,"p"),e(188,`Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso as a\xE7\xF5es
estejam definidas nas a\xE7\xF5es.`),t(),i(189,"blockquote")(190,"p"),e(191,"Para o correto funcionamento n\xE3o pode haver nenhum rota coringa ("),i(192,"code"),e(193,"**"),t(),e(194,") especificada."),t()()()(),i(195,"tr",14)(196,"td",15)(197,"div",16)(198,"span",17),e(199," p-breadcrumb"),n(200,"br"),t()()(),i(201,"td",18)(202,"code",23),e(203,"PoBreadcrumb"),t()(),i(204,"td",20),e(205,"-"),t(),i(206,"td",21)(207,"em")(208,"strong"),e(209,"(opcional)"),t()(),i(210,"p"),e(211,"Objeto com propriedades do breadcrumb."),t()()(),i(212,"tr",14)(213,"td",15)(214,"div",16)(215,"span",17),e(216," p-components-size"),n(217,"br"),t()()(),i(218,"td",18)(219,"code",24),e(220,"string"),t()(),i(221,"td",20)(222,"p")(223,"code"),e(224,"medium"),t()()(),i(225,"td",21)(226,"em")(227,"strong"),e(228,"(opcional)"),t()(),i(229,"p"),e(230,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(231,"ul")(232,"li")(233,"code"),e(234,"small"),t(),e(235,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(236,"li")(237,"code"),e(238,"medium"),t(),e(239,": aplica a medida medium de cada componente."),t()(),i(240,"blockquote")(241,"p"),e(242,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(243,"code"),e(244,"medium"),t(),e(245,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(246,"a",25),e(247,"po-theme"),t(),e(248,"."),t()()()(),i(249,"tr",14)(250,"td",15)(251,"div",16)(252,"span",17),e(253," p-fields"),n(254,"br"),t()()(),i(255,"td",18)(256,"code",26),e(257,"Array<PoPageDynamicEditField>"),t()(),i(258,"td",20),e(259,"-"),t(),i(260,"td",21)(261,"p"),e(262,"Lista dos campos usados na tabela e busca avan\xE7ada."),t()()(),i(263,"tr",14)(264,"td",15)(265,"div",16)(266,"span",17),e(267," p-literals"),n(268,"br"),t()()(),i(269,"td",18)(270,"code",27),e(271,"PoPageDynamicEditLiterals"),t()(),i(272,"td",20),e(273,"-"),t(),i(274,"td",21)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),i(278,"p"),e(279,"Objeto com as literais usadas no "),i(280,"code"),e(281,"po-page-dynamic-edit"),t(),e(282,"."),t(),i(283,"p"),e(284,`\xC9 possivel customizar passando um objeto com todas as literais dispon\xEDveis
ou passando apenas as literais que deseja customizar`),t(),i(285,"pre")(286,"code"),e(287,`const customLiterals: PoPageDynamicEditLiterals = {
  detailActionNew: 'Incluir',
  pageActionCancel: 'Descartar',
  pageActionSave: 'Gravar',
  pageActionSaveNew: 'Gravar e incluir',
  registerNotFound: 'Nenhum registro encontrado.',
  saveNotificationError: 'Campo(s) obrigat\xF3rio(s) sem preenchimento.',
  saveNotificationSuccessSave: 'Item salvo com sucesso.',
  saveNotificationSuccessUpdate: 'Item atualizado com sucesso.',
  saveNotificationWarning: 'Necess\xE1rio preencher o formul\xE1rio corretamente.'
};
`),t()(),i(288,"p"),e(289,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),t(),i(290,"pre")(291,"code"),e(292,`<po-page-dynamic-edit
  [p-literals]="customLiterals">
</po-page-dynamic-edit>
`),t()(),i(293,"blockquote")(294,"p"),e(295,"O valor padr\xE3o ser\xE1 traduzido de acordo com o idioma configurado no "),i(296,"a",28)(297,"code"),e(298,"PoI18nService"),t()(),e(299," ou "),i(300,"em"),e(301,"browser"),t(),e(302,"."),t()()()(),i(303,"tr",14)(304,"td",15)(305,"div",16)(306,"span",17),e(307," p-notification-type"),n(308,"br"),t()()(),i(309,"td",18)(310,"code",24),e(311,"string"),t()(),i(312,"td",20)(313,"p"),e(314,"warning"),t()(),i(315,"td",21)(316,"em")(317,"strong"),e(318,"(opcional)"),t()(),i(319,"p"),e(320,"Tipo da notifica\xE7\xE3o."),t(),i(321,"p"),e(322,"\xC9 possivel definir o tipo de notifica\xE7\xE3o que ser\xE1 exibido quando houver algum campo inv\xE1lido no formul\xE1rio."),t(),i(323,"pre")(324,"code"),e(325,`<po-page-dynamic-edit
  p-notification-type="warning">
</po-page-dynamic-edit>
`),t()(),i(326,"blockquote")(327,"p"),e(328,"Os valores aceitos s\xE3o 'warning' e 'error'."),t()()()(),i(329,"tr",14)(330,"td",15)(331,"div",16)(332,"span",17),e(333," p-load"),n(334,"br"),t()()(),i(335,"td",18)(336,"code",24),e(337,"string "),t(),i(338,"code",29),e(339," (() => PoPageDynamicEditOptions)"),t()(),i(340,"td",20),e(341,"-"),t(),i(342,"td",21)(343,"p"),e(344,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),i(345,"p"),e(346,"A propriedade aceita os seguintes tipos:"),t(),i(347,"ul")(348,"li")(349,"code"),e(350,"string"),t(),e(351,": "),i(352,"em"),e(353,"Endpoint"),t(),e(354," usado pelo componente para requisi\xE7\xE3o via "),i(355,"code"),e(356,"POST"),t(),e(357,"."),t(),i(358,"li")(359,"code"),e(360,"function"),t(),e(361,": M\xE9todo que ser\xE1 executado."),t()(),i(362,"p"),e(363,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(364,"code"),e(365,"PoPageDynamicEditOptions"),t(),e(366,`,
onde o usu\xE1rio poder\xE1 customizar novos campos, breadcrumb, title e actions`),t(),i(367,"p"),e(368,"Por exemplo:"),t(),i(369,"pre")(370,"code"),e(371,`getPageOptions(): PoPageDynamicEditOptions {
return {
  actions:
    { cancel: false, save: 'save/:id', saveNew: 'saveNew' },
  fields: [
    { property: 'idCard', gridColumns: 6 }
  ]
};
}
`),t()(),i(372,"p"),e(373,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(374,"code"),e(375,"bind"),t(),e(376,", por exemplo:"),t(),i(377,"pre")(378,"code"),e(379,`[p-load]="onLoadOptions.bind(this)"
`),t()()()(),i(380,"tr",14)(381,"td",15)(382,"div",16)(383,"span",17),e(384," p-load-data"),n(385,"br"),t()()(),i(386,"td",18)(387,"code",30),e(388,"unknown"),t()(),i(389,"td",20),e(390,"-"),t(),i(391,"td",21)(392,"em")(393,"strong"),e(394,"(opcional)"),t()(),i(395,"p"),e(396,"Fun\xE7\xE3o que ser\xE1 executada ap\xF3s ser realizada a busca dos dados."),t(),i(397,"p"),e(398,"A propriedade aceita os seguintes tipos:"),t(),i(399,"ul")(400,"li")(401,"code"),e(402,"function"),t(),e(403,": M\xE9todo que ser\xE1 executado."),t()(),i(404,"p"),e(405,`Esta fun\xE7\xE3o passa por par\xE2metro o model e deve receb\xEA-lo de volta com as altera\xE7\xF5es.
Tamb\xE9m aceita o retorno de um Observable com o novo model.`),t(),i(406,"p"),e(407,"Por exemplo:"),t(),i(408,"pre")(409,"code"),e(410,`onLoadCustom(model) {
 return { ...model, customField: 'newValue' };
}
`),t()(),i(411,"p"),e(412,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(413,"code"),e(414,"bind"),t(),e(415,", por exemplo:"),t(),i(416,"pre")(417,"code"),e(418,`[p-load-data]="onLoadCustom.bind(this)"
`),t()()()(),i(419,"tr",14)(420,"td",15)(421,"div",16)(422,"span",17),e(423," p-service-api"),n(424,"br"),t()()(),i(425,"td",18)(426,"code",24),e(427,"string"),t()(),i(428,"td",20),e(429,"-"),t(),i(430,"td",21)(431,"p"),e(432,"Endpoint usado pelo template para requisi\xE7\xE3o do recurso que ser\xE1 exibido para edi\xE7\xE3o."),t(),i(433,"p"),e(434,"Para as a\xE7\xF5es de "),i(435,"code"),e(436,"save"),t(),e(437," e "),i(438,"code"),e(439,"saveNew"),t(),e(440,`, ser\xE1 feito uma requisi\xE7\xE3o de cria\xE7\xE3o nesse mesmo endpoint passando os valores
preenchidos pelo usu\xE1rio via payload.`),t(),i(441,"blockquote")(442,"p")(443,"code"),e(444,"POST {end-point}"),t()()(),i(445,"pre")(446,"code"),e(447,`<po-page-dynamic-edit
  [p-actions]="{ save: '/', saveNew: 'new' }"
  [p-fields]="[ { property: 'name' }, { property: 'city' } ]"
  p-service="/api/po-samples/v1/people"
  ...>
</po-page-dynamic-edit>
`),t()(),i(448,"p"),e(449,"Resquisi\xE7\xE3o disparada, onde a propriedade "),i(450,"code"),e(451,"name"),t(),e(452," e "),i(453,"code"),e(454,"city"),t(),e(455," foram preenchidas:"),t(),i(456,"pre")(457,"code"),e(458,`POST /api/po-samples/v1/people HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),t()(),i(459,"p"),e(460,"Request payload:"),t(),i(461,"pre")(462,"code"),e(463,`{ "name": "Fulano", "city": "Smallville" }
`),t()(),i(464,"p"),e(465,"Caso queira que o template carregue um recurso j\xE1 existente, deve-se ser inclu\xEDdo um parametro na rota chamado "),i(466,"code"),e(467,"id"),t(),e(468,"."),t(),i(469,"p"),e(470,"Exemplo de configura\xE7\xE3o de rota:"),t(),i(471,"pre")(472,"code"),e(473,`RouterModule.forRoot([
  ...
  { path: 'edit/:id', component: PersonEditComponent },
  ...
],
`),t()(),i(474,"p"),e(475,"Baseado nisso, na inicializa\xE7\xE3o do template, ser\xE1 disparado uma requisi\xE7\xE3o para buscar o recurso que ser\xE1 editado."),t(),i(476,"blockquote")(477,"p")(478,"code"),e(479,"GET {end-point}/{id}"),t()()(),i(480,"p"),e(481,"Nos m\xE9todos de "),i(482,"code"),e(483,"save"),t(),e(484," e "),i(485,"code"),e(486,"saveNew"),t(),e(487,", ao inv\xE9s de um "),i(488,"code"),e(489,"POST"),t(),e(490,", ser\xE1 disparado um "),i(491,"code"),e(492,"PUT"),t(),e(493,"."),t(),i(494,"p"),e(495,"Resquisi\xE7\xE3o disparada, onde a propriedade "),i(496,"code"),e(497,"name"),t(),e(498," e "),i(499,"code"),e(500,"city"),t(),e(501," foram preenchidas / atualizadas, e o "),i(502,"code"),e(503,"id"),t(),e(504," da url \xE9 2:"),t(),i(505,"pre")(506,"code"),e(507,`PUT /api/po-samples/v1/people/2 HTTP/1.1
Host: localhost:4000
Connection: keep-alive
Accept: application/json, text/plain
...
`),t()(),i(508,"p"),e(509,"Request payload:"),t(),i(510,"pre")(511,"code"),e(512,`{ "name": "Fulano", "city": "Metropolis" }
`),t()()()(),i(513,"tr",14)(514,"td",15)(515,"div",16)(516,"span",17),e(517," p-title"),n(518,"br"),t()()(),i(519,"td",18)(520,"code",24),e(521,"string"),t()(),i(522,"td",20),e(523,"-"),t(),i(524,"td",21)(525,"p"),e(526,"T\xEDtulo da p\xE1gina."),t()()()(),i(527,"h3",10),e(528,"M\xE9todos"),t(),i(529,"table",31)(530,"tr",14)(531,"th",32)(532,"div",16)(533,"h4")(534,"span",17),e(535," showAdditionalHelp "),t()()()()(),i(536,"tr",21)(537,"td",21)(538,"p"),e(539,"M\xE9todo que exibe "),i(540,"code"),e(541,"p-helper"),t(),e(542," ou executa a a\xE7\xE3o definida em "),i(543,"code"),e(544,"p-helper{eventOnClick}"),t(),e(545," ou em "),i(546,"code"),e(547,"p-additionalHelp"),t(),e(548,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(549,"code"),e(550,"keydown"),t(),e(551,"."),t(),i(552,"pre")(553,"code"),e(554,`import { PoPageDynamicEditModule } from '@po-ui/ng-templates';
...
@ViewChild('dynamicEdit', { static: true }) dynamicEdit: PoPageDynamicEditComponent;

fields: Array<PoPageDynamicEditField> = [
 {
   property: 'name',
   ...
   help: 'Mensagem de ajuda.',
   helper: 'Mensagem de ajuda complementar com o componente po-helper implementado.',
   keydown: this.onKeyDown.bind(this, 'name')
 },
]

onKeyDown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.dynamicEdit.showAdditionalHelp(property);
 }
}
`),t()()()()(),i(555,"h5")(556,"b"),e(557,"Par\xE2metros"),t()(),i(558,"table",11)(559,"tr",12)(560,"th",13),e(561,"Nome"),t(),i(562,"th",13),e(563,"Tipo"),t(),i(564,"th",13),e(565,"Descri\xE7\xE3o"),t()(),i(566,"tr",14)(567,"td",15),e(568," property"),t(),i(569,"td",18)(570,"code",33),e(571," string "),t()(),i(572,"td",21)(573,"p"),e(574,"Identificador da coluna."),t()()()(),n(575,"br"),i(576,"h3"),e(577,"Interfaces"),t(),i(578,"h4",34)(579,"code",5),e(580,"PoPageDynamicEditActions"),t()(),i(581,"div",2)(582,"p"),e(583,"Interface para as a\xE7\xF5es do componente po-page-dynamic-edit."),t()(),i(584,"h4",10),e(585,"Propriedades"),t(),i(586,"table",11)(587,"tr",12)(588,"th",13),e(589,"Nome"),t(),i(590,"th",13),e(591,"Tipo"),t(),i(592,"th",13),e(593,"Descri\xE7\xE3o"),t()(),i(594,"tr",14)(595,"td",15)(596,"div",16)(597,"span",17),e(598," beforeCancel"),n(599,"br"),t()()(),i(600,"td",18)(601,"code",24),e(602,"string "),t(),i(603,"code",35),e(604," (() => PoPageDynamicEditBeforeCancel)"),t()(),i(605,"td",21)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),i(609,"p"),e(610,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar a a\xE7\xE3o de cancelamento (cancel)."),t(),i(611,"p"),e(612,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(613,"code"),e(614,"PoPageDynamicEditBeforeCancel"),t(),e(615,"."),t(),i(616,"blockquote")(617,"p"),e(618,"A url ser\xE1 chamada via POST"),t()(),i(619,"p"),e(620,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(621,"strong"),e(622,"beforeCancel"),t(),e(623,`
ou definir a mensagem no atributo `),i(624,"code"),e(625,"_messages"),t(),e(626,` na resposta da API conforme definido
em `),i(627,"a",36),e(628,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(629,"tr",14)(630,"td",15)(631,"div",16)(632,"span",17),e(633," beforeSave"),n(634,"br"),t()()(),i(635,"td",18)(636,"code",24),e(637,"string "),t(),i(638,"code",37),e(639," ((resource: any, id: string) => PoPageDynamicEditBeforeSave)"),t()(),i(640,"td",21)(641,"em")(642,"strong"),e(643,"(opcional)"),t()(),i(644,"p"),e(645,"Rota ou m\xE9todo que ser\xE1 chamado antes de salvar um recurso (save)."),t(),i(646,"p"),e(647,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(648,"code"),e(649,"PoPageDynamicEditBeforeSave"),t(),e(650,"."),t(),i(651,"blockquote")(652,"p"),e(653,`A url ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a url ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),i(654,"code"),e(655,"POST {beforeSave}/{key}"),t(),e(656,"."),t()(),i(657,"p"),e(658,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(659,"strong"),e(660,"beforeSave"),t(),e(661,`
ou definir a mensagem no atributo `),i(662,"code"),e(663,"_messages"),t(),e(664,` na resposta da API conforme definido
em `),i(665,"a",36),e(666,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(667,"tr",14)(668,"td",15)(669,"div",16)(670,"span",17),e(671," beforeSaveNew"),n(672,"br"),t()()(),i(673,"td",18)(674,"code",24),e(675,"string "),t(),i(676,"code",38),e(677," ((resource: any, id: string) => PoPageDynamicEditBeforeSaveNew)"),t()(),i(678,"td",21)(679,"em")(680,"strong"),e(681,"(opcional)"),t()(),i(682,"p"),e(683,"Rota ou m\xE9todo que ser\xE1 chamado antes de executar o evento salvar e abrir novo registro (saveNew)."),t(),i(684,"p"),e(685,"Tanto o m\xE9todo como a API receber\xE3o o recurso e devem retornar um objeto com a defini\xE7\xE3o de "),i(686,"code"),e(687,"PoPageDynamicEditBeforeSaveNew"),t(),e(688,"."),t(),i(689,"blockquote")(690,"p"),e(691,`A URL ser\xE1 chamada via POST. Caso seja a edi\xE7\xE3o de um recurso, a URL ser\xE1 concatenada
com a key especificada no metadata, por exemplo: `),i(692,"code"),e(693,"POST {beforeSave}/{key}"),t(),e(694,"."),t()(),i(695,"p"),e(696,"Caso o desenvolvedor queira que apare\xE7a alguma mensagem nessa a\xE7\xE3o ele pode cri\xE1-la na fun\xE7\xE3o chamada pela "),i(697,"strong"),e(698,"beforeSaveNew"),t(),e(699,`
ou definir a mensagem no atributo `),i(700,"code"),e(701,"_messages"),t(),e(702,` na resposta da API conforme definido
em `),i(703,"a",36),e(704,"Guia de implementa\xE7\xE3o de APIs"),t()()()(),i(705,"tr",14)(706,"td",15)(707,"div",16)(708,"span",17),e(709," cancel"),n(710,"br"),t()()(),i(711,"td",18)(712,"code",24),e(713,"string "),t(),i(714,"code",22),e(715," boolean "),t(),i(716,"code",39),e(717," Function"),t()(),i(718,"td",21)(719,"em")(720,"strong"),e(721,"(opcional)"),t()(),i(722,"p"),e(723,"Rota de redirecionamento para a\xE7\xE3o de cancelar, caso n\xE3o seja especificada ser\xE1 usado o comando "),i(724,"code"),e(725,"navigator.back()"),t(),e(726,"."),t(),i(727,"blockquote")(728,"p"),e(729,"Se passada uma fun\xE7\xE3o, \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o ou outro comportamento desejado."),t()(),i(730,"blockquote")(731,"p"),e(732,"Caso queira esconder a a\xE7\xE3o deve ser passado o valor "),i(733,"code"),e(734,"false"),t(),e(735,";"),t()(),i(736,"pre")(737,"code"),e(738,`actions = {
  cancel: '/'
};
`),t()()()(),i(739,"tr",14)(740,"td",15)(741,"div",16)(742,"span",17),e(743," save"),n(744,"br"),t()()(),i(745,"td",18)(746,"code",24),e(747,"string "),t(),i(748,"code",40),e(749," ((resource: any, id: string) => void)"),t()(),i(750,"td",21)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),i(754,"p"),e(755,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),t(),i(756,"p"),e(757,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),t(),i(758,"blockquote")(759,"p"),e(760,"A rota pode conter um par\xE2metro chamando id."),t()(),i(761,"pre")(762,"code"),e(763,`actions = {
  save: 'detail/:id'
};
`),t()(),i(764,"p"),e(765,"Se for passado um m\xE9todo:"),t(),i(766,"ul")(767,"li"),e(768,"receber\xE1 como par\xE2metro na chamada do m\xE9todo o recurso, por exemplo: "),i(769,"code"),e(770,"{ email: 'example@email.com' }"),t(),e(771,"."),t(),i(772,"li"),e(773,`\xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),t()()()(),i(774,"tr",14)(775,"td",15)(776,"div",16)(777,"span",17),e(778," saveNew"),n(779,"br"),t()()(),i(780,"td",18)(781,"code",24),e(782,"string "),t(),i(783,"code",41),e(784," ((resource: any, id?: string) => void)"),t()(),i(785,"td",21)(786,"em")(787,"strong"),e(788,"(opcional)"),t()(),i(789,"p"),e(790,"Rota de redirecionamento ou m\xE9todo para executar o envio dos dados ao servidor."),t(),i(791,"p"),e(792,"A rota de redirecionamento ser\xE1 executada ap\xF3s a confirma\xE7\xE3o de grava\xE7\xE3o do registro."),t(),i(793,"blockquote")(794,"p"),e(795,`Caso tratar-se de um novo registro, ser\xE1 resetado o formul\xE1rio para um novo registro.
Se estiver editando um registro a rota de redirecionamento ser\xE1 utilizada.`),t()(),i(796,"pre")(797,"code"),e(798,`actions = {
  saveNew: 'new'
};
`),t()(),i(799,"p"),e(800,"A rota pode conter um par\xE2metro id."),t(),i(801,"pre")(802,"code"),e(803,`actions = {
  saveNew: 'edit/:id'
};
`),t()(),i(804,"p"),e(805,`Ao informar um m\xE9todo \xE9 responsabilidade do desenvolvedor implementar a navega\xE7\xE3o e/ou envio dos dados
para o servidor ou outro comportamento desejado.`),t()()()(),i(806,"h4",34)(807,"code",5),e(808,"PoPageDynamicEditBeforeCancel"),t()(),i(809,"div",2)(810,"p"),e(811,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(812,"code"),e(813,"beforeCancel"),t(),e(814,"."),t()(),i(815,"h4",10),e(816,"Propriedades"),t(),i(817,"table",11)(818,"tr",12)(819,"th",13),e(820,"Nome"),t(),i(821,"th",13),e(822,"Tipo"),t(),i(823,"th",13),e(824,"Descri\xE7\xE3o"),t()(),i(825,"tr",14)(826,"td",15)(827,"div",16)(828,"span",17),e(829," allowAction"),n(830,"br"),t()()(),i(831,"td",18)(832,"code",22),e(833,"boolean"),t()(),i(834,"td",21)(835,"em")(836,"strong"),e(837,"(opcional)"),t()(),i(838,"p"),e(839,"Define se deve ou n\xE3o executar a a\xE7\xE3o de cancelamento de edi\xE7\xE3o da p\xE1gina (cancel)"),t()()(),i(840,"tr",14)(841,"td",15)(842,"div",16)(843,"span",17),e(844," newUrl"),n(845,"br"),t()()(),i(846,"td",18)(847,"code",24),e(848,"string"),t()(),i(849,"td",21)(850,"em")(851,"strong"),e(852,"(opcional)"),t()(),i(853,"p"),e(854,"Nova rota para navega\xE7\xE3o que substituir\xE1 a definida anteriormente em "),i(855,"code"),e(856,"cancel"),t(),e(857,"."),t()()()(),i(858,"h4",34)(859,"code",5),e(860,"PoPageDynamicEditBeforeSaveNew"),t()(),i(861,"div",2)(862,"p"),e(863,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(864,"code"),e(865,"beforeSaveNew"),t(),e(866,"."),t()(),i(867,"h4",10),e(868,"Propriedades"),t(),i(869,"table",11)(870,"tr",12)(871,"th",13),e(872,"Nome"),t(),i(873,"th",13),e(874,"Tipo"),t(),i(875,"th",13),e(876,"Descri\xE7\xE3o"),t()(),i(877,"tr",14)(878,"td",15)(879,"div",16)(880,"span",17),e(881," allowAction"),n(882,"br"),t()()(),i(883,"td",18)(884,"code",22),e(885,"boolean"),t()(),i(886,"td",21)(887,"em")(888,"strong"),e(889,"(opcional)"),t()(),i(890,"p"),e(891,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar e novo (saveNew)."),t()()(),i(892,"tr",14)(893,"td",15)(894,"div",16)(895,"span",17),e(896," newUrl"),n(897,"br"),t()()(),i(898,"td",18)(899,"code",24),e(900,"string"),t()(),i(901,"td",21)(902,"em")(903,"strong"),e(904,"(opcional)"),t()(),i(905,"p"),e(906,"Nova rota de redirecionamento, que substituir\xE1 a rota definida anteriormente em "),i(907,"code"),e(908,"saveNew"),t(),e(909,"."),t()()(),i(910,"tr",14)(911,"td",15)(912,"div",16)(913,"span",17),e(914," resource"),n(915,"br"),t()()(),i(916,"td",18)(917,"code",42),e(918,"any"),t()(),i(919,"td",21)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),i(923,"p"),e(924,"Recurso atualizado."),t(),i(925,"p"),e(926,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto,
no entanto as propriedades que possu\xEDrem `),i(927,"code"),e(928,"key: true"),t(),e(929,` n\xE3o ser\xE3o alteradas.
Por exemplo:`),t(),i(930,"ul")(931,"li")(932,"p"),e(933,"recurso anterior com a propriedade id foi que definida como "),i(934,"em"),e(935,"key"),t(),e(936,":"),t(),i(937,"pre")(938,"code"),e(939,`{ id: 1, name: 'Ane' }
`),t()()(),i(940,"li")(941,"p"),e(942,"recurso retornado no "),i(943,"code"),e(944,"beforeSaveNew"),t(),e(945,":"),t(),i(946,"pre")(947,"code"),e(948,`{ id: 50, age: 23 }
`),t()()(),i(949,"li")(950,"p"),e(951,"Mesclagem do recurso:"),t(),i(952,"pre")(953,"code"),e(954,`{ id: 1, name: 'Ane', age: 23 }
`),t()()()(),i(955,"blockquote")(956,"p"),e(957,"Caso "),i(958,"code"),e(959,"allowAction"),t(),e(960," seja "),i(961,"code"),e(962,"false"),t(),e(963,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (saveNew).`),t()()()()(),i(964,"h4",34)(965,"code",5),e(966,"PoPageDynamicEditBeforeSave"),t()(),i(967,"div",2)(968,"p"),e(969,`Defini\xE7\xE3o da estrutura de retorno da url ou m\xE9todo executado atrav\xE9s da
propriedade `),i(970,"code"),e(971,"beforeSave"),t(),e(972,"."),t()(),i(973,"h4",10),e(974,"Propriedades"),t(),i(975,"table",11)(976,"tr",12)(977,"th",13),e(978,"Nome"),t(),i(979,"th",13),e(980,"Tipo"),t(),i(981,"th",13),e(982,"Descri\xE7\xE3o"),t()(),i(983,"tr",14)(984,"td",15)(985,"div",16)(986,"span",17),e(987," allowAction"),n(988,"br"),t()()(),i(989,"td",18)(990,"code",22),e(991,"boolean"),t()(),i(992,"td",21)(993,"em")(994,"strong"),e(995,"(opcional)"),t()(),i(996,"p"),e(997,"Define se deve ou n\xE3o executar a a\xE7\xE3o salvar (save)."),t()()(),i(998,"tr",14)(999,"td",15)(1e3,"div",16)(1001,"span",17),e(1002," newUrl"),n(1003,"br"),t()()(),i(1004,"td",18)(1005,"code",24),e(1006,"string"),t()(),i(1007,"td",21)(1008,"em")(1009,"strong"),e(1010,"(opcional)"),t()(),i(1011,"p"),e(1012,"Nova rota para salvar o recurso, que substituir\xE1 a rota definida anteriormente em "),i(1013,"code"),e(1014,"save"),t(),e(1015,"."),t()()(),i(1016,"tr",14)(1017,"td",15)(1018,"div",16)(1019,"span",17),e(1020," resource"),n(1021,"br"),t()()(),i(1022,"td",18)(1023,"code",42),e(1024,"any"),t()(),i(1025,"td",21)(1026,"em")(1027,"strong"),e(1028,"(opcional)"),t()(),i(1029,"p"),e(1030,"Recurso atualizado."),t(),i(1031,"p"),e(1032,`Ser\xE1 feito uma mesclagem entre os valores existentes e esse novo objeto.
Por exemplo:`),t(),i(1033,"ul")(1034,"li")(1035,"p"),e(1036,"recurso anterior:"),t(),i(1037,"pre")(1038,"code"),e(1039,`{ name: 'Ane' }
`),t()()(),i(1040,"li")(1041,"p"),e(1042,"recurso retornado no "),i(1043,"code"),e(1044,"beforeSave"),t(),e(1045,":"),t(),i(1046,"pre")(1047,"code"),e(1048,`{ age: 23 }
`),t()()(),i(1049,"li")(1050,"p"),e(1051,"Mesclagem do recurso:"),t(),i(1052,"pre")(1053,"code"),e(1054,`{ name: 'Ane', age: 23 }
`),t()()()(),i(1055,"blockquote")(1056,"p"),e(1057,"Caso "),i(1058,"code"),e(1059,"allowAction"),t(),e(1060," seja "),i(1061,"code"),e(1062,"false"),t(),e(1063,`, o recurso ser\xE1 atualizado apenas localmente, sem concluir
a a\xE7\xE3o de salvar (save).`),t()()()()(),i(1064,"h4",34)(1065,"code",5),e(1066,"PoPageDynamicEditField"),t()(),i(1067,"div",2)(1068,"p"),e(1069,"Interface dos fields usados para compor o template "),i(1070,"code"),e(1071,"po-page-dynamic-edit"),t(),e(1072,`.
Herda as defini\xE7\xF5es da interface
`),i(1073,"a",43),e(1074,"PoDynamicFormField"),t(),e(1075,"."),t()(),i(1076,"h4",10),e(1077,"Propriedades"),t(),i(1078,"table",11)(1079,"tr",12)(1080,"th",13),e(1081,"Nome"),t(),i(1082,"th",13),e(1083,"Tipo"),t(),i(1084,"th",13),e(1085,"Descri\xE7\xE3o"),t()(),i(1086,"tr",14)(1087,"td",15)(1088,"div",16)(1089,"span",17),e(1090," duplicate"),n(1091,"br"),t()()(),i(1092,"td",18)(1093,"code",22),e(1094,"boolean"),t()(),i(1095,"td",21)(1096,"em")(1097,"strong"),e(1098,"(opcional)"),t()(),i(1099,"p"),e(1100,"Indica se o campo ser\xE1 duplicado caso seja executada a a\xE7\xE3o de duplica\xE7\xE3o."),t()()()(),i(1101,"h4",34)(1102,"code",5),e(1103,"PoPageDynamicEditLiterals"),t()(),i(1104,"div",2)(1105,"p"),e(1106,"Interface para defini\xE7\xE3o das literais usadas no "),i(1107,"code"),e(1108,"po-page-dynamic-edit"),t(),e(1109,"."),t()(),i(1110,"h4",10),e(1111,"Propriedades"),t(),i(1112,"table",11)(1113,"tr",12)(1114,"th",13),e(1115,"Nome"),t(),i(1116,"th",13),e(1117,"Tipo"),t(),i(1118,"th",13),e(1119,"Descri\xE7\xE3o"),t()(),i(1120,"tr",14)(1121,"td",15)(1122,"div",16)(1123,"span",17),e(1124," cancelConfirmMessage"),n(1125,"br"),t()()(),i(1126,"td",18)(1127,"code",24),e(1128,"string"),t()(),i(1129,"td",21)(1130,"em")(1131,"strong"),e(1132,"(opcional)"),t()(),i(1133,"p"),e(1134,"Texto exibido na mensagem de cancelamento da inclus\xE3o/edi\xE7\xE3o."),t()()(),i(1135,"tr",14)(1136,"td",15)(1137,"div",16)(1138,"span",17),e(1139," detailActionNew"),n(1140,"br"),t()()(),i(1141,"td",18)(1142,"code",24),e(1143,"string"),t()(),i(1144,"td",21)(1145,"em")(1146,"strong"),e(1147,"(opcional)"),t()(),i(1148,"p"),e(1149,"R\xF3tulo exibido no bot\xE3o "),i(1150,"code"),e(1151,"Novo"),t(),e(1152,"."),t()()(),i(1153,"tr",14)(1154,"td",15)(1155,"div",16)(1156,"span",17),e(1157," pageActionCancel"),n(1158,"br"),t()()(),i(1159,"td",18)(1160,"code",24),e(1161,"string"),t()(),i(1162,"td",21)(1163,"em")(1164,"strong"),e(1165,"(opcional)"),t()(),i(1166,"p"),e(1167,"R\xF3tulo exibido no bot\xE3o "),i(1168,"code"),e(1169,"Cancelar"),t(),e(1170,"."),t()()(),i(1171,"tr",14)(1172,"td",15)(1173,"div",16)(1174,"span",17),e(1175," pageActionSave"),n(1176,"br"),t()()(),i(1177,"td",18)(1178,"code",24),e(1179,"string"),t()(),i(1180,"td",21)(1181,"em")(1182,"strong"),e(1183,"(opcional)"),t()(),i(1184,"p"),e(1185,"R\xF3tulo exibido no bot\xE3o "),i(1186,"code"),e(1187,"Salvar"),t(),e(1188,"."),t()()(),i(1189,"tr",14)(1190,"td",15)(1191,"div",16)(1192,"span",17),e(1193," pageActionSaveNew"),n(1194,"br"),t()()(),i(1195,"td",18)(1196,"code",24),e(1197,"string"),t()(),i(1198,"td",21)(1199,"em")(1200,"strong"),e(1201,"(opcional)"),t()(),i(1202,"p"),e(1203,"R\xF3tulo exibido no bot\xE3o "),i(1204,"code"),e(1205,"Salvar e novo"),t(),e(1206,"."),t()()(),i(1207,"tr",14)(1208,"td",15)(1209,"div",16)(1210,"span",17),e(1211," registerNotFound"),n(1212,"br"),t()()(),i(1213,"td",18)(1214,"code",24),e(1215,"string"),t()(),i(1216,"td",21)(1217,"em")(1218,"strong"),e(1219,"(opcional)"),t()(),i(1220,"p"),e(1221,"Texto exibido para resgistro n\xE3o encontrado."),t()()(),i(1222,"tr",14)(1223,"td",15)(1224,"div",16)(1225,"span",17),e(1226," saveNotificationError"),n(1227,"br"),t()()(),i(1228,"td",18)(1229,"code",24),e(1230,"string"),t()(),i(1231,"td",21)(1232,"em")(1233,"strong"),e(1234,"(opcional)"),t()(),i(1235,"p"),e(1236,"Texto exibido para ocorr\xEAncia de alguma inconsist\xEAncia ao salvar."),t()()(),i(1237,"tr",14)(1238,"td",15)(1239,"div",16)(1240,"span",17),e(1241," saveNotificationSuccessSave"),n(1242,"br"),t()()(),i(1243,"td",18)(1244,"code",24),e(1245,"string"),t()(),i(1246,"td",21)(1247,"em")(1248,"strong"),e(1249,"(opcional)"),t()(),i(1250,"p"),e(1251,"Texto exibido para recurso salvo com sucesso."),t()()(),i(1252,"tr",14)(1253,"td",15)(1254,"div",16)(1255,"span",17),e(1256," saveNotificationSuccessUpdate"),n(1257,"br"),t()()(),i(1258,"td",18)(1259,"code",24),e(1260,"string"),t()(),i(1261,"td",21)(1262,"em")(1263,"strong"),e(1264,"(opcional)"),t()(),i(1265,"p"),e(1266,"Texto exibido para recurso atualizado com sucesso."),t()()(),i(1267,"tr",14)(1268,"td",15)(1269,"div",16)(1270,"span",17),e(1271," saveNotificationWarning"),n(1272,"br"),t()()(),i(1273,"td",18)(1274,"code",24),e(1275,"string"),t()(),i(1276,"td",21)(1277,"em")(1278,"strong"),e(1279,"(opcional)"),t()(),i(1280,"p"),e(1281,"Texto exibido para adivert\xEAncia de formul\xE1rio preenchido de forma incorreta."),t()()()(),i(1282,"h4",34)(1283,"code",5),e(1284,"PoPageDynamicEditMetadata"),t()(),i(1285,"div",2)(1286,"p"),e(1287,"Interface para as propriedades de uma p\xE1gina din\xE2mica. "),n(1288,"a",44),t()(),i(1289,"h4",10),e(1290,"Propriedades"),t(),i(1291,"table",11)(1292,"tr",12)(1293,"th",13),e(1294,"Nome"),t(),i(1295,"th",13),e(1296,"Tipo"),t(),i(1297,"th",13),e(1298,"Descri\xE7\xE3o"),t()(),i(1299,"tr",14)(1300,"td",15)(1301,"div",16)(1302,"span",17),e(1303," actions"),n(1304,"br"),t()()(),i(1305,"td",18)(1306,"code",19),e(1307,"PoPageDynamicEditActions"),t()(),i(1308,"td",21)(1309,"em")(1310,"strong"),e(1311,"(opcional)"),t()(),i(1312,"p"),e(1313,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),t()()(),i(1314,"tr",14)(1315,"td",15)(1316,"div",16)(1317,"span",17),e(1318," autoRouter"),n(1319,"br"),t()()(),i(1320,"td",18)(1321,"code",22),e(1322,"boolean"),t()(),i(1323,"td",21)(1324,"em")(1325,"strong"),e(1326,"(opcional)"),t()(),i(1327,"p"),e(1328,"Cria automaticamente as rotas de edi\xE7\xE3o (novo/duplicate) e detalhes caso sejam definidas a\xE7\xF5es na propriedade "),i(1329,"code"),e(1330,"p-actions"),t()(),i(1331,"p"),e(1332,"As rotas criadas ser\xE3o baseadas na propriedade "),i(1333,"code"),e(1334,"p-actions"),t(),e(1335,"."),t(),i(1336,"blockquote")(1337,"p"),e(1338,"Para o correto funcionamento n\xE3o pode haver nenhuma rota coringa ("),i(1339,"code"),e(1340,"**"),t(),e(1341,") especificada."),t()()()(),i(1342,"tr",14)(1343,"td",15)(1344,"div",16)(1345,"span",17),e(1346," breadcrumb"),n(1347,"br"),t()()(),i(1348,"td",18)(1349,"code",23),e(1350,"PoBreadcrumb"),t()(),i(1351,"td",21)(1352,"em")(1353,"strong"),e(1354,"(opcional)"),t()(),i(1355,"p"),e(1356,"Objeto com propriedades do breadcrumb."),t()()(),i(1357,"tr",14)(1358,"td",15)(1359,"div",16)(1360,"span",17),e(1361," fields"),n(1362,"br"),t()()(),i(1363,"td",18)(1364,"code",26),e(1365,"Array<PoPageDynamicEditField>"),t()(),i(1366,"td",21)(1367,"em")(1368,"strong"),e(1369,"(opcional)"),t()(),i(1370,"p"),e(1371,"Lista dos campos usados."),t()()(),i(1372,"tr",14)(1373,"td",15)(1374,"div",16)(1375,"span",17),e(1376," title"),n(1377,"br"),t()()(),i(1378,"td",18)(1379,"code",24),e(1380,"string"),t()(),i(1381,"td",21)(1382,"em")(1383,"strong"),e(1384,"(opcional)"),t()(),i(1385,"p"),e(1386,"T\xEDtulo da p\xE1gina."),t()()(),i(1387,"tr",14)(1388,"td",15)(1389,"div",16)(1390,"span",17),e(1391," version"),n(1392,"br"),t()()(),i(1393,"td",18)(1394,"code",45),e(1395,"number"),t()(),i(1396,"td",21)(1397,"p"),e(1398,"Vers\xE3o do metadado devolvido pelo backend."),t()()()(),i(1399,"h4",34)(1400,"code",5),e(1401,"PoPageDynamicEditOptions"),t()(),i(1402,"div",2)(1403,"p"),e(1404,"Interface para as propriedades de uma p\xE1gina din\xE2mica."),t()(),i(1405,"h4",10),e(1406,"Propriedades"),t(),i(1407,"table",11)(1408,"tr",12)(1409,"th",13),e(1410,"Nome"),t(),i(1411,"th",13),e(1412,"Tipo"),t(),i(1413,"th",13),e(1414,"Descri\xE7\xE3o"),t()(),i(1415,"tr",14)(1416,"td",15)(1417,"div",16)(1418,"span",17),e(1419," actions"),n(1420,"br"),t()()(),i(1421,"td",18)(1422,"code",19),e(1423,"PoPageDynamicEditActions"),t()(),i(1424,"td",21)(1425,"em")(1426,"strong"),e(1427,"(opcional)"),t()(),i(1428,"p"),e(1429,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar na p\xE1gina atrav\xE9s de bot\xF5es."),t()()(),i(1430,"tr",14)(1431,"td",15)(1432,"div",16)(1433,"span",17),e(1434," breadcrumb"),n(1435,"br"),t()()(),i(1436,"td",18)(1437,"code",23),e(1438,"PoBreadcrumb"),t()(),i(1439,"td",21)(1440,"em")(1441,"strong"),e(1442,"(opcional)"),t()(),i(1443,"p"),e(1444,"Objeto com propriedades do breadcrumb."),t()()(),i(1445,"tr",14)(1446,"td",15)(1447,"div",16)(1448,"span",17),e(1449," fields"),n(1450,"br"),t()()(),i(1451,"td",18)(1452,"code",26),e(1453,"Array<PoPageDynamicEditField>"),t()(),i(1454,"td",21)(1455,"em")(1456,"strong"),e(1457,"(opcional)"),t()(),i(1458,"p"),e(1459,"Lista dos campos usados."),t()()(),i(1460,"tr",14)(1461,"td",15)(1462,"div",16)(1463,"span",17),e(1464," title"),n(1465,"br"),t()()(),i(1466,"td",18)(1467,"code",24),e(1468,"string"),t()(),i(1469,"td",21)(1470,"em")(1471,"strong"),e(1472,"(opcional)"),t()(),i(1473,"p"),e(1474,"T\xEDtulo da p\xE1gina."),t()()()()())},dependencies:[g],encapsulation:2})}return a})();var R=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=2;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||a)(D(k),D(F))};static \u0275cmp=m({type:a,selectors:[["ng-component"]],standalone:!1,decls:7,vars:4,consts:[["p-title","Page Dynamic Edit",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,d){o&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),s("p-click",function(){return d.changeTab("doc")}),n(3,"sample-po-page-dynamic-edit-doc"),t(),i(4,"po-tab",3),s("p-click",function(){return d.changeTab("web")}),n(5,"sample-po-page-dynamic-edit-basic-view")(6,"sample-po-page-dynamic-edit-user-view"),t()()()),o&2&&(l("p-actions",d.actions),p(2),l("p-active",d.activeTab==="doc"),p(2),l("p-hide",d.hidePoWebSample)("p-active",d.activeTab==="web"))},dependencies:[N,x,S,L,O,_],encapsulation:2})}return a})();var te=[{path:"",component:R}],U=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=b({type:a});static \u0275inj=v({imports:[C.forChild(te),C]})}return a})();var fe=(()=>{class a{static \u0275fac=function(o){return new(o||a)};static \u0275mod=b({type:a});static \u0275inj=v({imports:[M,U]})}return a})();export{fe as DocPoPageDynamicEditModule};
