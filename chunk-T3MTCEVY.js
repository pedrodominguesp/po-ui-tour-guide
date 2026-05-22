import{o as M,p as $}from"./chunk-WYOAC7KN.js";import{Hb as y,Ib as U,Ja as W,Na as h,Oa as f,Sa as J,W as X,Za as Y,a as Q,ub as Z,w as L,ya as K}from"./chunk-XOCFD5XY.js";import{Ea as v,Fa as i,Ga as t,Ha as n,I as D,Mb as _,Mc as z,Nc as q,O as u,Oa as A,Oc as I,P as c,Pa as b,Pc as B,Qc as V,_a as H,bb as G,cb as e,cd as N,eb as w,ed as R,gb as E,gd as j,ha as l,hb as x,ib as S,ma as P,oa as g,pa as O,pb as k,rb as T}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ee=(()=>{class r{poUserGuide;steps=[{element:"#sample-po-user-guide-basic-title",title:"Bem-vindo ao tour",content:"Este \xE9 um exemplo b\xE1sico de uso do <strong>PoUserGuideService</strong>.",position:h.Bottom},{element:"#sample-po-user-guide-basic-info",title:"Conte\xFAdo destacado",content:"Aqui voc\xEA pode descrever em detalhes a \xE1rea destacada para o usu\xE1rio.",position:h.Right},{element:"#sample-po-user-guide-basic-cta",title:"Pr\xF3ximos passos",content:"Clique em <strong>Finalizar</strong> para encerrar o tour.",position:h.Top}];constructor(s){this.poUserGuide=s}startTour(){this.poUserGuide.setSteps(this.steps).setOptions({showProgress:!0}).start()}static \u0275fac=function(d){return new(d||r)(P(f))};static \u0275cmp=g({type:r,selectors:[["sample-po-user-guide-basic"]],standalone:!1,decls:21,vars:0,consts:[[1,"po-row"],["id","sample-po-user-guide-basic-title",1,"po-md-12"],["id","sample-po-user-guide-basic-info",1,"po-md-12"],[1,"po-md-12"],["id","sample-po-user-guide-basic-cta","p-label","Iniciar guia","p-kind","primary",1,"po-md-3",3,"p-click"]],template:function(d,o){d&1&&(i(0,"div",0)(1,"h2",1),e(2,"PO User Guide Basic"),t(),i(3,"p",2),e(4," Acompanhe um guia r\xE1pido de tr\xEAs passos sobre os principais elementos desta p\xE1gina. "),t(),i(5,"p",3),e(6," Quando o guia estiver ativo, \xE9 poss\xEDvel controlar a navega\xE7\xE3o pelo teclado: pressione "),i(7,"strong"),e(8,"Esc"),t(),e(9," para encerrar o este tour, "),i(10,"strong"),e(11,"\u2192"),t(),e(12," (seta para a direita) ou "),i(13,"strong"),e(14,"Enter"),t(),e(15," para avan\xE7ar para o pr\xF3ximo passo e "),i(16,"strong"),e(17,"\u2190"),t(),e(18," (seta para a esquerda) para retornar ao passo anterior. "),t()(),i(19,"div",0)(20,"po-button",4),b("p-click",function(){return o.startTour()}),t()())},dependencies:[L],encapsulation:2})}return r})();var ue=r=>({"docs-sample-code-tabs":r}),ne=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=g({type:r,selectors:[["sample-po-user-guide-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,o){d&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO User Guide Basic"),t(),i(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-user-guide-basic/sample-po-user-guide-basic.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <h2 id="sample-po-user-guide-basic-title" class="po-md-12">PO User Guide Basic</h2>

  <p id="sample-po-user-guide-basic-info" class="po-md-12">
    Acompanhe um guia r\xE1pido de tr\xEAs passos sobre os principais elementos desta p\xE1gina.
  </p>
  <p class="po-md-12">
    Quando o guia estiver ativo, \xE9 poss\xEDvel controlar a navega\xE7\xE3o pelo teclado: pressione <strong>Esc</strong> para
    encerrar o este tour, <strong>\u2192</strong> (seta para a direita) ou <strong>Enter</strong> para avan\xE7ar para o pr\xF3ximo
    passo e <strong>\u2190</strong> (seta para a esquerda) para retornar ao passo anterior.
  </p>
</div>

<div class="po-row">
  <po-button
    id="sample-po-user-guide-basic-cta"
    class="po-md-3"
    p-label="Iniciar guia"
    p-kind="primary"
    (p-click)="startTour()"
  >
  </po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-user-guide-basic/sample-po-user-guide-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoUserGuidePosition, PoUserGuideService, PoUserGuideStep } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-user-guide-basic',
  templateUrl: './sample-po-user-guide-basic.component.html',
  standalone: false
})
export class SamplePoUserGuideBasicComponent {
  private readonly steps: Array<PoUserGuideStep> = [
    {
      element: '#sample-po-user-guide-basic-title',
      title: 'Bem-vindo ao tour',
      content: 'Este \xE9 um exemplo b\xE1sico de uso do <strong>PoUserGuideService</strong>.',
      position: PoUserGuidePosition.Bottom
    },
    {
      element: '#sample-po-user-guide-basic-info',
      title: 'Conte\xFAdo destacado',
      content: 'Aqui voc\xEA pode descrever em detalhes a \xE1rea destacada para o usu\xE1rio.',
      position: PoUserGuidePosition.Right
    },
    {
      element: '#sample-po-user-guide-basic-cta',
      title: 'Pr\xF3ximos passos',
      content: 'Clique em <strong>Finalizar</strong> para encerrar o tour.',
      position: PoUserGuidePosition.Top
    }
  ];

  constructor(private poUserGuide: PoUserGuideService) {}

  startTour(): void {
    this.poUserGuide.setSteps(this.steps).setOptions({ showProgress: true }).start();
  }
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-user-guide-basic"),t(),n(23,"hr")),d&2&&(l(5),G("po-icon "+o.sampleCodeButtonIcon),l(),w(" ",o.sampleCodeButtonLabel),l(),v("ngClass",T(4,ue,o.hideSampleCodeTabs)))},dependencies:[_,M,y,U,ee],encapsulation:2})}return r})();var oe=(()=>{class r{poUserGuide;allowClose;showProgress;keyboardControl;overlayOpacity;nextLabel;previousLabel;doneLabel;progressTemplate;stepTitle;stepContent;progressTemplateHelp="Use { { current } } e { { total } } como placeholders.";constructor(s){this.poUserGuide=s}ngOnInit(){this.restore()}restore(){this.allowClose=!0,this.showProgress=!0,this.keyboardControl=!0,this.overlayOpacity=.7,this.nextLabel="Pr\xF3ximo",this.previousLabel="Anterior",this.doneLabel="Finalizar",this.progressTemplate="{{current}} de {{total}}",this.stepTitle="Passo destacado",this.stepContent="Edite os campos ao lado e inicie o tour para visualizar as altera\xE7\xF5es."}startTour(){let s=[{element:"#sample-po-user-guide-labs-form",title:this.stepTitle,content:this.stepContent,position:h.Right},{element:"#sample-po-user-guide-labs-cta",title:"Bot\xE3o de in\xEDcio",content:"Reinicie o tour quantas vezes precisar para experimentar op\xE7\xF5es diferentes.",position:h.Top},{title:"Modal final",content:"Passos sem <code>element</code> s\xE3o exibidos como um modal centralizado."}],d={allowClose:this.allowClose,showProgress:this.showProgress,keyboardControl:this.keyboardControl,overlayOpacity:this.overlayOpacity,nextLabel:this.nextLabel,previousLabel:this.previousLabel,doneLabel:this.doneLabel,progressTemplate:this.progressTemplate};this.poUserGuide.setSteps(s).setOptions(d).start()}static \u0275fac=function(d){return new(d||r)(P(f))};static \u0275cmp=g({type:r,selectors:[["sample-po-user-guide-labs"]],standalone:!1,features:[k([f])],decls:17,vars:11,consts:[["f","ngForm"],["id","sample-po-user-guide-labs-cta","p-label","Iniciar Guia","p-kind","primary",3,"p-click"],["id","sample-po-user-guide-labs-form",1,"po-row"],["name","stepTitle","p-clean","","p-label","Step title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","stepContent","p-clean","","p-label","Step content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","nextLabel","p-clean","","p-label","Next label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","previousLabel","p-clean","","p-label","Previous label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","doneLabel","p-clean","","p-label","Done label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","progressTemplate","p-clean","","p-label","Progress template",1,"po-md-3",3,"ngModelChange","ngModel","p-help"],["name","overlayOpacity","p-clean","","p-label","Overlay opacity","p-min","0","p-max","1","p-step","0.1",1,"po-md-3",3,"ngModelChange","ngModel"],["name","allowClose","p-label","Allow close",1,"po-md-3",3,"ngModelChange","ngModel"],["name","showProgress","p-label","Show progress",1,"po-md-3",3,"ngModelChange","ngModel"],["name","keyboardControl","p-label","Keyboard control",1,"po-md-3",3,"ngModelChange","ngModel"],[1,"po-row"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(d,o){if(d&1){let m=A();i(0,"po-button",1),b("p-click",function(){return o.startTour()}),t(),n(1,"po-divider"),i(2,"div",2)(3,"form",null,0)(5,"po-input",3),S("ngModelChange",function(a){return u(m),x(o.stepTitle,a)||(o.stepTitle=a),c(a)}),t(),i(6,"po-input",4),S("ngModelChange",function(a){return u(m),x(o.stepContent,a)||(o.stepContent=a),c(a)}),t(),i(7,"po-input",5),S("ngModelChange",function(a){return u(m),x(o.nextLabel,a)||(o.nextLabel=a),c(a)}),t(),i(8,"po-input",6),S("ngModelChange",function(a){return u(m),x(o.previousLabel,a)||(o.previousLabel=a),c(a)}),t(),i(9,"po-input",7),S("ngModelChange",function(a){return u(m),x(o.doneLabel,a)||(o.doneLabel=a),c(a)}),t(),i(10,"po-input",8),S("ngModelChange",function(a){return u(m),x(o.progressTemplate,a)||(o.progressTemplate=a),c(a)}),t(),i(11,"po-number",9),S("ngModelChange",function(a){return u(m),x(o.overlayOpacity,a)||(o.overlayOpacity=a),c(a)}),t(),i(12,"po-switch",10),S("ngModelChange",function(a){return u(m),x(o.allowClose,a)||(o.allowClose=a),c(a)}),t(),i(13,"po-switch",11),S("ngModelChange",function(a){return u(m),x(o.showProgress,a)||(o.showProgress=a),c(a)}),t(),i(14,"po-switch",12),S("ngModelChange",function(a){return u(m),x(o.keyboardControl,a)||(o.keyboardControl=a),c(a)}),t(),i(15,"div",13)(16,"po-button",14),b("p-click",function(){return o.restore()}),t()()()()}d&2&&(l(5),E("ngModel",o.stepTitle),l(),E("ngModel",o.stepContent),l(),E("ngModel",o.nextLabel),l(),E("ngModel",o.previousLabel),l(),E("ngModel",o.doneLabel),l(),E("ngModel",o.progressTemplate),v("p-help",o.progressTemplateHelp),l(),E("ngModel",o.overlayOpacity),l(),E("ngModel",o.allowClose),l(),E("ngModel",o.showProgress),l(),E("ngModel",o.keyboardControl))},dependencies:[V,z,q,B,I,L,Q,W,J,K],encapsulation:2})}return r})();var Se=r=>({"docs-sample-code-tabs":r}),ae=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=g({type:r,selectors:[["sample-po-user-guide-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,o){d&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO User Guide Labs"),t(),i(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-user-guide-labs/sample-po-user-guide-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-button id="sample-po-user-guide-labs-cta" p-label="Iniciar Guia" p-kind="primary" (p-click)="startTour()">
</po-button>

<po-divider />

<div id="sample-po-user-guide-labs-form" class="po-row">
  <form #f="ngForm">
    <po-input class="po-md-6" name="stepTitle" [(ngModel)]="stepTitle" p-clean p-label="Step title"> </po-input>

    <po-input class="po-md-6" name="stepContent" [(ngModel)]="stepContent" p-clean p-label="Step content"> </po-input>

    <po-input class="po-md-3" name="nextLabel" [(ngModel)]="nextLabel" p-clean p-label="Next label"> </po-input>

    <po-input class="po-md-3" name="previousLabel" [(ngModel)]="previousLabel" p-clean p-label="Previous label">
    </po-input>

    <po-input class="po-md-3" name="doneLabel" [(ngModel)]="doneLabel" p-clean p-label="Done label"> </po-input>

    <po-input
      class="po-md-3"
      name="progressTemplate"
      [(ngModel)]="progressTemplate"
      p-clean
      p-label="Progress template"
      [p-help]="progressTemplateHelp"
    >
    </po-input>

    <po-number
      class="po-md-3"
      name="overlayOpacity"
      [(ngModel)]="overlayOpacity"
      p-clean
      p-label="Overlay opacity"
      p-min="0"
      p-max="1"
      p-step="0.1"
    >
    </po-number>

    <po-switch class="po-md-3" name="allowClose" [(ngModel)]="allowClose" p-label="Allow close"> </po-switch>

    <po-switch class="po-md-3" name="showProgress" [(ngModel)]="showProgress" p-label="Show progress"> </po-switch>

    <po-switch class="po-md-3" name="keyboardControl" [(ngModel)]="keyboardControl" p-label="Keyboard control">
    </po-switch>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-user-guide-labs/sample-po-user-guide-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoUserGuideOptions, PoUserGuidePosition, PoUserGuideService, PoUserGuideStep } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-user-guide-labs',
  templateUrl: './sample-po-user-guide-labs.component.html',
  providers: [PoUserGuideService],
  standalone: false
})
export class SamplePoUserGuideLabsComponent implements OnInit {
  allowClose: boolean;
  showProgress: boolean;
  keyboardControl: boolean;
  overlayOpacity: number;
  nextLabel: string;
  previousLabel: string;
  doneLabel: string;
  progressTemplate: string;

  stepTitle: string;
  stepContent: string;

  readonly progressTemplateHelp = 'Use { { current } } e { { total } } como placeholders.';

  constructor(private poUserGuide: PoUserGuideService) {}

  ngOnInit(): void {
    this.restore();
  }

  restore(): void {
    this.allowClose = true;
    this.showProgress = true;
    this.keyboardControl = true;
    this.overlayOpacity = 0.7;
    this.nextLabel = 'Pr\xF3ximo';
    this.previousLabel = 'Anterior';
    this.doneLabel = 'Finalizar';
    this.progressTemplate = '{ {current} } de { {total} }';
    this.stepTitle = 'Passo destacado';
    this.stepContent = 'Edite os campos ao lado e inicie o tour para visualizar as altera\xE7\xF5es.';
  }

  startTour(): void {
    const steps: Array<PoUserGuideStep> = [
      {
        element: '#sample-po-user-guide-labs-form',
        title: this.stepTitle,
        content: this.stepContent,
        position: PoUserGuidePosition.Right
      },
      {
        element: '#sample-po-user-guide-labs-cta',
        title: 'Bot\xE3o de in\xEDcio',
        content: 'Reinicie o tour quantas vezes precisar para experimentar op\xE7\xF5es diferentes.',
        position: PoUserGuidePosition.Top
      },
      {
        title: 'Modal final',
        content: 'Passos sem <code>element</code> s\xE3o exibidos como um modal centralizado.'
      }
    ];

    const options: PoUserGuideOptions = {
      allowClose: this.allowClose,
      showProgress: this.showProgress,
      keyboardControl: this.keyboardControl,
      overlayOpacity: this.overlayOpacity,
      nextLabel: this.nextLabel,
      previousLabel: this.previousLabel,
      doneLabel: this.doneLabel,
      progressTemplate: this.progressTemplate
    };

    this.poUserGuide.setSteps(steps).setOptions(options).start();
  }
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-user-guide-labs"),t(),n(23,"hr")),d&2&&(l(5),G("po-icon "+o.sampleCodeButtonIcon),l(),w(" ",o.sampleCodeButtonLabel),l(),v("ngClass",T(4,Se,o.hideSampleCodeTabs)))},dependencies:[_,M,y,U,oe],encapsulation:2})}return r})();var re=(()=>{class r{poUserGuide;name;email;birthDate;jobTitle;bio;steps=[{element:"#sample-po-user-guide-onboarding-name",title:"Identifique-se",content:"Informe seu nome completo. Este \xE9 o dado utilizado nas comunica\xE7\xF5es da plataforma.",position:h.Right},{element:"#sample-po-user-guide-onboarding-email",title:"E-mail corporativo",content:"Utilize um e-mail v\xE1lido \u2014 ele ser\xE1 o seu identificador \xFAnico de acesso.",position:h.Right},{element:"#sample-po-user-guide-onboarding-birthdate",title:"Data de nascimento",content:"A data de nascimento \xE9 utilizada apenas para valida\xE7\xE3o de elegibilidade do cadastro.",position:h.Right},{element:"#sample-po-user-guide-onboarding-jobtitle",title:"Cargo",content:"Indique seu cargo atual para personalizarmos o conte\xFAdo de boas-vindas.",position:h.Right},{element:"#sample-po-user-guide-onboarding-submit",title:"Conclua o cadastro",content:"Ap\xF3s preencher os campos acima, clique em <strong>Salvar</strong> para concluir.",position:h.Top}];constructor(s){this.poUserGuide=s}ngAfterViewInit(){this.poUserGuide.setSteps(this.steps).setOptions({showProgress:!0,allowClose:!0})}restartTour(){this.poUserGuide.start()}static \u0275fac=function(d){return new(d||r)(P(f))};static \u0275cmp=g({type:r,selectors:[["sample-po-user-guide-onboarding"]],standalone:!1,features:[k([f])],decls:13,vars:6,consts:[["f","ngForm"],[1,"po-row"],["id","sample-po-user-guide-onboarding-name","name","name","p-clean","","p-label","Nome completo","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["id","sample-po-user-guide-onboarding-email","name","email","p-clean","","p-label","E-mail","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["id","sample-po-user-guide-onboarding-birthdate","name","birthDate","p-clean","","p-label","Data de nascimento",1,"po-md-6",3,"ngModelChange","ngModel"],["id","sample-po-user-guide-onboarding-jobtitle","name","jobTitle","p-clean","","p-label","Cargo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","bio","p-clean","","p-label","Sobre voc\xEA","p-rows","3",1,"po-md-12",3,"ngModelChange","ngModel"],["id","sample-po-user-guide-onboarding-submit","p-label","Salvar","p-kind","primary",1,"po-md-3",3,"p-disabled"],["p-label","Reiniciar tour",1,"po-md-3",3,"p-click"]],template:function(d,o){if(d&1){let m=A();i(0,"form",null,0)(2,"div",1)(3,"po-input",2),S("ngModelChange",function(a){return u(m),x(o.name,a)||(o.name=a),c(a)}),t(),i(4,"po-input",3),S("ngModelChange",function(a){return u(m),x(o.email,a)||(o.email=a),c(a)}),t()(),i(5,"div",1)(6,"po-datepicker",4),S("ngModelChange",function(a){return u(m),x(o.birthDate,a)||(o.birthDate=a),c(a)}),t(),i(7,"po-input",5),S("ngModelChange",function(a){return u(m),x(o.jobTitle,a)||(o.jobTitle=a),c(a)}),t()(),i(8,"div",1)(9,"po-textarea",6),S("ngModelChange",function(a){return u(m),x(o.bio,a)||(o.bio=a),c(a)}),t()(),i(10,"div",1),n(11,"po-button",7),i(12,"po-button",8),b("p-click",function(){return o.restartTour()}),t()()()}if(d&2){let m=H(1);l(3),E("ngModel",o.name),l(),E("ngModel",o.email),l(2),E("ngModel",o.birthDate),l(),E("ngModel",o.jobTitle),l(2),E("ngModel",o.bio),l(2),v("p-disabled",m.form.invalid)}},dependencies:[V,z,q,B,I,L,X,W,Y],encapsulation:2})}return r})();var ve=r=>({"docs-sample-code-tabs":r}),de=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=g({type:r,selectors:[["sample-po-user-guide-onboarding-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,o){d&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO User Guide - Onboarding"),t(),i(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-user-guide-onboarding/sample-po-user-guide-onboarding.component.html"),t(),i(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-input
      id="sample-po-user-guide-onboarding-name"
      class="po-md-6"
      name="name"
      [(ngModel)]="name"
      p-clean
      p-label="Nome completo"
      p-required
    >
    </po-input>

    <po-input
      id="sample-po-user-guide-onboarding-email"
      class="po-md-6"
      name="email"
      [(ngModel)]="email"
      p-clean
      p-label="E-mail"
      p-required
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-datepicker
      id="sample-po-user-guide-onboarding-birthdate"
      class="po-md-6"
      name="birthDate"
      [(ngModel)]="birthDate"
      p-clean
      p-label="Data de nascimento"
    >
    </po-datepicker>

    <po-input
      id="sample-po-user-guide-onboarding-jobtitle"
      class="po-md-6"
      name="jobTitle"
      [(ngModel)]="jobTitle"
      p-clean
      p-label="Cargo"
    >
    </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="bio" [(ngModel)]="bio" p-clean p-label="Sobre voc\xEA" p-rows="3"> </po-textarea>
  </div>

  <div class="po-row">
    <po-button
      id="sample-po-user-guide-onboarding-submit"
      class="po-md-3"
      p-label="Salvar"
      p-kind="primary"
      [p-disabled]="f.form.invalid"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Reiniciar tour" (p-click)="restartTour()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-user-guide-onboarding/sample-po-user-guide-onboarding.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, AfterViewInit } from '@angular/core';

import { PoUserGuidePosition, PoUserGuideService, PoUserGuideStep } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-user-guide-onboarding',
  templateUrl: './sample-po-user-guide-onboarding.component.html',
  providers: [PoUserGuideService],
  standalone: false
})
export class SamplePoUserGuideOnboardingComponent implements AfterViewInit {
  name: string;
  email: string;
  birthDate: string;
  jobTitle: string;
  bio: string;

  private readonly steps: Array<PoUserGuideStep> = [
    {
      element: '#sample-po-user-guide-onboarding-name',
      title: 'Identifique-se',
      content: 'Informe seu nome completo. Este \xE9 o dado utilizado nas comunica\xE7\xF5es da plataforma.',
      position: PoUserGuidePosition.Right
    },
    {
      element: '#sample-po-user-guide-onboarding-email',
      title: 'E-mail corporativo',
      content: 'Utilize um e-mail v\xE1lido \u2014 ele ser\xE1 o seu identificador \xFAnico de acesso.',
      position: PoUserGuidePosition.Right
    },
    {
      element: '#sample-po-user-guide-onboarding-birthdate',
      title: 'Data de nascimento',
      content: 'A data de nascimento \xE9 utilizada apenas para valida\xE7\xE3o de elegibilidade do cadastro.',
      position: PoUserGuidePosition.Right
    },
    {
      element: '#sample-po-user-guide-onboarding-jobtitle',
      title: 'Cargo',
      content: 'Indique seu cargo atual para personalizarmos o conte\xFAdo de boas-vindas.',
      position: PoUserGuidePosition.Right
    },
    {
      element: '#sample-po-user-guide-onboarding-submit',
      title: 'Conclua o cadastro',
      content: 'Ap\xF3s preencher os campos acima, clique em <strong>Salvar</strong> para concluir.',
      position: PoUserGuidePosition.Top
    }
  ];

  constructor(private poUserGuide: PoUserGuideService) {}

  ngAfterViewInit(): void {
    this.poUserGuide.setSteps(this.steps).setOptions({ showProgress: true, allowClose: true });
  }

  restartTour(): void {
    this.poUserGuide.start();
  }
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-user-guide-onboarding"),t(),n(23,"hr")),d&2&&(l(5),G("po-icon "+o.sampleCodeButtonIcon),l(),w(" ",o.sampleCodeButtonLabel),l(),v("ngClass",T(4,ve,o.hideSampleCodeTabs)))},dependencies:[_,M,y,U,re],encapsulation:2})}return r})();var le=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=g({type:r,selectors:[["sample-po-user-guide-doc"]],standalone:!1,decls:1927,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","PoUserGuideLiterals"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Observable<PoUserGuideStepChangeEvent>"],["pan","",1,"docs-api-property-type","Observable<PoUserGuideEndEvent>"],["pan","",1,"docs-api-property-type","Observable<PoUserGuideStartEvent>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","'completed'"],["pan","",1,"docs-api-property-type","'closed'"],["pan","",1,"docs-api-property-type","'destroyed'"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(event:","PoUserGuideStepChangeEvent)","=>","void"],["pan","",1,"docs-api-property-type","'next'"],["pan","",1,"docs-api-property-type","'previous'"],["pan","",1,"docs-api-property-type","'goto'"],["pan","",1,"docs-api-property-type","'start'"],["pan","",1,"docs-api-property-type","PoUserGuideStep"],["pan","",1,"docs-api-property-type","PoUserGuideAlignment"],["pan","",1,"docs-api-property-type","HTMLElement"],["pan","",1,"docs-api-property-type","(step:","PoUserGuideStep,","index:","number)","=>","void"],["pan","",1,"docs-api-property-type","PoUserGuidePosition"],["pan","",1,"docs-api-property-type","Array<'next'"],["pan","",1,"docs-api-property-type","'close'>"]],template:function(d,o){d&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoUserGuideModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2),i(5,"h3",3),e(6,"Services"),t(),i(7,"h4",4)(8,"code",5),e(9,"PoUserGuideService"),t()(),i(10,"div",2)(11,"p"),e(12,"Servi\xE7o respons\xE1vel por criar e controlar tours guiados na interface da aplica\xE7\xE3o."),t(),i(13,"p"),e(14,"O "),i(15,"code"),e(16,"PoUserGuideService"),t(),e(17,` permite apresentar uma sequ\xEAncia de passos visuais para orientar
o usu\xE1rio durante o uso de uma tela, funcionalidade ou fluxo espec\xEDfico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.`),t(),i(18,"p"),e(19,"O servi\xE7o centraliza a configura\xE7\xE3o do guia do usu\xE1rio, incluindo:"),t(),i(20,"ul")(21,"li"),e(22,"os passos que ser\xE3o exibidos;"),t(),i(23,"li"),e(24,"as op\xE7\xF5es gerais de comportamento;"),t(),i(25,"li"),e(26,"o controle do passo ativo;"),t(),i(27,"li"),e(28,"os eventos emitidos durante o ciclo de vida do tour."),t()(),i(29,"p"),e(30,`A partir dele, a aplica\xE7\xE3o pode iniciar, acompanhar e reagir \xE0 execu\xE7\xE3o do tour por meio
dos eventos p\xFAblicos `),i(31,"code"),e(32,"tourStart$"),t(),e(33,", "),i(34,"code"),e(35,"stepChange$"),t(),e(36," e "),i(37,"code"),e(38,"tourEnd$"),t(),e(39,"."),t(),i(40,"p"),e(41,"Como o servi\xE7o \xE9 disponibilizado com "),i(42,"code"),e(43,"providedIn: 'root'"),t(),e(44,`, n\xE3o \xE9 necess\xE1rio declar\xE1-lo em
`),i(45,"code"),e(46,"providers"),t(),e(47,` nem import\xE1-lo manualmente em m\xF3dulos espec\xEDficos. A mesma inst\xE2ncia \xE9
compartilhada por toda a aplica\xE7\xE3o, facilitando o controle do tour entre diferentes
componentes.`),t(),i(48,"h4"),e(49,"Uso t\xEDpico"),t(),i(50,"p"),e(51,`O fluxo recomendado de utiliza\xE7\xE3o do servi\xE7o, que pode ser encadeado fluentemente, configura os
passos do tour, ajusta op\xE7\xF5es globais e dispara a execu\xE7\xE3o em uma \xFAnica express\xE3o:`),t(),i(52,"pre")(53,"code",6),e(54,`import { Component } from '@angular/core';
import { PoUserGuideService } from '@po-ui/ng-components';

@Component({ selector: 'app-onboarding', templateUrl: './onboarding.component.html' })
export class OnboardingComponent {
  constructor(private PoUserGuide: PoUserGuideService) {}

  startTour(): void {
    this.PoUserGuide
      .setSteps([
        { element: '#header', title: 'Bem-vindo!', content: 'Esta \xE9 a barra superior.' },
        { element: '.po-menu', title: 'Menu', content: 'Acesse aqui as funcionalidades do sistema.' },
        { element: '#user-profile', title: 'Perfil', content: 'Configure suas prefer\xEAncias.' }
      ])
      .setOptions({ showProgress: true, allowClose: true })
      .start();
  }
}
`),t()(),i(55,"h4"),e(56,"Aviso de seguran\xE7a: HTML em "),i(57,"code"),e(58,"step.content"),t()(),i(59,"p"),e(60,"O PO UI sanitiza o conte\xFAdo HTML informado em "),i(61,"code"),e(62,"step.content"),t(),e(63,` antes de exibi-lo no
`),i(64,"em"),e(65,"popover"),t(),e(66," do tour, ajudando a prevenir vulnerabilidades de "),i(67,"em"),e(68,"Cross-Site Scripting"),t(),e(69," (XSS)."),t(),i(70,"p"),e(71,"A mesma prote\xE7\xE3o \xE9 aplicada aos "),i(72,"em"),e(73,"labels"),t(),e(74," definidos em "),i(75,"code"),e(76,"PoUserGuideStep"),t(),e(77,` e
`),i(78,"code"),e(79,"PoUserGuideOptions"),t(),e(80," quando constru\xEDdos dinamicamente."),t(),i(81,"p"),e(82,`Ainda assim, recomenda-se validar conte\xFAdos vindos de fontes n\xE3o confi\xE1veis, como entrada
do usu\xE1rio, APIs externas ou `),i(83,"em"),e(84,"query strings"),t(),e(85,", preservando a seguran\xE7a desde a origem dos dados."),t(),i(86,"h4"),e(87,"Tokens customiz\xE1veis"),t(),i(88,"p"),e(89,"\xC9 poss\xEDvel alterar a apar\xEAncia do "),i(90,"em"),e(91,"popover"),t(),e(92," renderizado pelo "),i(93,"code"),e(94,"PoUserGuideService"),t(),e(95,` atrav\xE9s dos tokens
(CSS) consumidos pelo arquivo `),i(96,"code"),e(97,"po-user-guide.css"),t(),e(98," distribu\xEDdo via "),i(99,"code"),e(100,"@po-ui/style"),t(),e(101,"."),t(),i(102,"blockquote")(103,"p"),e(104,"Para maiores informa\xE7\xF5es, acesse o guia "),i(105,"a",7),e(106,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(107,"."),t()(),i(108,"table")(109,"thead")(110,"tr")(111,"th"),e(112,"Propriedade"),t(),i(113,"th"),e(114,"Descri\xE7\xE3o"),t(),i(115,"th"),e(116,"Valor Padr\xE3o"),t()()(),i(117,"tbody")(118,"tr")(119,"td")(120,"strong"),e(121,"Overlay"),t()(),n(122,"td")(123,"td"),t(),i(124,"tr")(125,"td")(126,"code"),e(127,"--color-secondary-dark-60-alpha-70"),t()(),i(128,"td"),e(129,"Cor do "),i(130,"em"),e(131,"overlay"),t(),e(132," que escurece a p\xE1gina durante o tour"),t(),i(133,"td")(134,"code"),e(135,"rgba(59, 28, 74, 0.7)"),t()()(),i(136,"tr")(137,"td")(138,"strong"),e(139,"Popover"),t()(),n(140,"td")(141,"td"),t(),i(142,"tr")(143,"td")(144,"code"),e(145,"--color-neutral-light-00"),t()(),i(146,"td"),e(147,"Cor de fundo do "),i(148,"em"),e(149,"popover"),t()(),i(150,"td")(151,"code"),e(152,"#ffffff"),t()()(),i(153,"tr")(154,"td")(155,"code"),e(156,"--color-neutral-light-20"),t()(),i(157,"td"),e(158,"Cor da borda do "),i(159,"em"),e(160,"popover"),t()(),i(161,"td")(162,"code"),e(163,"#c9d2d4"),t()()(),i(164,"tr")(165,"td")(166,"code"),e(167,"--border-radius-md"),t()(),i(168,"td"),e(169,"Raio dos cantos do "),i(170,"em"),e(171,"popover"),t(),e(172," e dos bot\xF5es"),t(),i(173,"td")(174,"code"),e(175,"4px"),t()()(),i(176,"tr")(177,"td")(178,"code"),e(179,"--shadow-lg"),t()(),i(180,"td"),e(181,"Sombra projetada pelo "),i(182,"em"),e(183,"popover"),t()(),i(184,"td")(185,"code"),e(186,"0 8px 16px rgba(0, 0, 0, 0.16)"),t()()(),i(187,"tr")(188,"td")(189,"code"),e(190,"--font-family-theme"),t()(),i(191,"td"),e(192,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo, descri\xE7\xE3o, progresso e bot\xF5es"),t(),i(193,"td")(194,"code"),e(195,"Roboto, 'Helvetica Neue', Arial, sans-serif"),t()()(),i(196,"tr")(197,"td")(198,"code"),e(199,"--color-neutral-dark-70"),t()(),i(200,"td"),e(201,"Cor do texto da descri\xE7\xE3o do passo"),t(),i(202,"td")(203,"code"),e(204,"#2c3739"),t()()(),i(205,"tr")(206,"td")(207,"code"),e(208,"--color-neutral-dark-95"),t()(),i(209,"td"),e(210,"Cor do texto do t\xEDtulo do passo"),t(),i(211,"td")(212,"code"),e(213,"#1d2426"),t()()(),i(214,"tr")(215,"td")(216,"code"),e(217,"--color-neutral-mid-60"),t()(),i(218,"td"),e(219,"Cor do texto do indicador de progresso e do \xEDcone do bot\xE3o fechar"),t(),i(220,"td")(221,"code"),e(222,"#4a5c60"),t()()(),i(223,"tr")(224,"td")(225,"strong"),e(226,"Bot\xE3o prim\xE1rio ("),i(227,"code"),e(228,"Pr\xF3ximo"),t(),e(229," / "),i(230,"code"),e(231,"Finalizar"),t(),e(232,")"),t()(),n(233,"td")(234,"td"),t(),i(235,"tr")(236,"td")(237,"code"),e(238,"--color-action-default"),t()(),i(239,"td"),e(240,"Cor de fundo e da borda do bot\xE3o prim\xE1rio"),t(),i(241,"td")(242,"code"),e(243,"#002a8d"),t()()(),i(244,"tr")(245,"td")(246,"code"),e(247,"--color-action-hover"),t()(),i(248,"td"),e(249,"Cor de fundo e da borda do bot\xE3o prim\xE1rio no estado "),i(250,"em"),e(251,"hover"),t()(),i(252,"td")(253,"code"),e(254,"#00368a"),t()()(),i(255,"tr")(256,"td")(257,"code"),e(258,"--color-action-pressed"),t()(),i(259,"td"),e(260,"Cor de fundo e da borda do bot\xE3o prim\xE1rio no estado "),i(261,"em"),e(262,"pressed"),t()(),i(263,"td")(264,"code"),e(265,"#001f6c"),t()()(),i(266,"tr")(267,"td")(268,"strong"),e(269,"Bot\xE3o secund\xE1rio ("),i(270,"code"),e(271,"Anterior"),t(),e(272,")"),t()(),n(273,"td")(274,"td"),t(),i(275,"tr")(276,"td")(277,"code"),e(278,"--color-action-default"),t()(),i(279,"td"),e(280,"Cor do texto e da borda do bot\xE3o secund\xE1rio"),t(),i(281,"td")(282,"code"),e(283,"#002a8d"),t()()(),i(284,"tr")(285,"td")(286,"code"),e(287,"--color-action-hover"),t()(),i(288,"td"),e(289,"Cor de fundo, do texto e da borda do bot\xE3o secund\xE1rio no "),i(290,"em"),e(291,"hover"),t()(),i(292,"td")(293,"code"),e(294,"#00368a"),t()()(),i(295,"tr")(296,"td")(297,"code"),e(298,"--color-action-pressed"),t()(),i(299,"td"),e(300,"Cor de fundo, do texto e da borda do bot\xE3o secund\xE1rio no "),i(301,"em"),e(302,"pressed"),t()(),i(303,"td")(304,"code"),e(305,"#001f6c"),t()()(),i(306,"tr")(307,"td")(308,"strong"),e(309,"Bot\xE3o terci\xE1rio ("),i(310,"code"),e(311,"Fechar"),t(),e(312," / "),i(313,"code"),e(314,"X"),t(),e(315,")"),t()(),n(316,"td")(317,"td"),t(),i(318,"tr")(319,"td")(320,"code"),e(321,"--color-neutral-light-10"),t()(),i(322,"td"),e(323,"Cor de fundo do bot\xE3o fechar no estado "),i(324,"em"),e(325,"hover"),t()(),i(326,"td")(327,"code"),e(328,"#dee9eb"),t()()(),i(329,"tr")(330,"td")(331,"code"),e(332,"--color-neutral-light-20"),t()(),i(333,"td"),e(334,"Cor de fundo do bot\xE3o fechar no estado "),i(335,"em"),e(336,"pressed"),t()(),i(337,"td")(338,"code"),e(339,"#c9d2d4"),t()()(),i(340,"tr")(341,"td")(342,"strong"),e(343,"Foco vis\xEDvel"),t()(),n(344,"td")(345,"td"),t(),i(346,"tr")(347,"td")(348,"code"),e(349,"--outline-color-focused"),t()(),i(350,"td"),e(351,"Cor do "),i(352,"em"),e(353,"outline"),t(),e(354," aplicado a bot\xF5es em foco"),t(),i(355,"td")(356,"code"),e(357,"var(--color-action-focus)"),t(),e(358," ("),i(359,"code"),e(360,"#c9357d"),t(),e(361,")"),t()()()()(),i(362,"h4",8),e(363,"Propriedades"),t(),i(364,"table",9)(365,"tr",10)(366,"th",11),e(367,"Nome"),t(),i(368,"th",11),e(369,"Tipo"),t(),i(370,"th",11),e(371,"Padr\xE3o"),t(),i(372,"th",11),e(373,"Descri\xE7\xE3o"),t()(),i(374,"tr",12)(375,"td",13)(376,"div",14)(377,"span",15),e(378,"p-literals"),n(379,"br"),t()()(),i(380,"td",16)(381,"code",17),e(382,"PoUserGuideLiterals"),t()(),i(383,"td",18),e(384,"-"),t(),i(385,"td",19)(386,"em")(387,"strong"),e(388,"(opcional)"),t()(),i(389,"p"),e(390,"Objeto com as literais usadas no "),i(391,"code"),e(392,"po-user-guide"),t(),e(393,"."),t(),i(394,"p"),e(395,"Existem duas maneiras de customizar o servi\xE7o, passando um objeto com todas as literais dispon\xEDveis:"),t(),i(396,"pre")(397,"code"),e(398,`const customLiterals: PoUserGuideLiterals = {
  next: 'Pr\xF3ximo',
  previous: 'Anterior',
  done: 'Finalizar',
  close: 'Fechar'
};
`),t()(),i(399,"p"),e(400,"Ou passando apenas as literais que deseja customizar:"),t(),i(401,"pre")(402,"code"),e(403,`const customLiterals: PoUserGuideLiterals = {
  next: 'Avan\xE7ar'
};
`),t()(),i(404,"p"),e(405,"E para carregar as literais customizadas, basta pass\xE1-las ao m\xE9todo "),i(406,"code"),e(407,"setOptions"),t(),e(408,":"),t(),i(409,"pre")(410,"code"),e(411,`this.poUserGuide.setOptions({ literals: customLiterals }).start();
`),t()(),i(412,"blockquote")(413,"p"),e(414,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),i(415,"a",20)(416,"code"),e(417,"PoI18nService"),t()(),e(418," ou do browser."),t()()()(),i(419,"tr",12)(420,"td",13)(421,"div",14)(422,"span",15),e(423,"p-step-change"),n(424,"br"),t()()(),i(425,"td",16)(426,"code",21),e(427,"Observable<PoUserGuideStepChangeEvent>"),t()(),i(428,"td",18),e(429,"-"),t(),i(430,"td",19)(431,"p")(432,"code"),e(433,"Observable"),t(),e(434," que emite um "),i(435,"code"),e(436,"PoUserGuideStepChangeEvent"),t(),e(437," a cada mudan\xE7a de passo durante a execu\xE7\xE3o do tour."),t(),i(438,"p"),e(439,"As aplica\xE7\xF5es consumidoras podem assinar este "),i(440,"code"),e(441,"Observable"),t(),e(442,` para reagir \xE0 navega\xE7\xE3o do usu\xE1rio,
atualizar a UI conforme o passo ativo, registrar telemetria de progresso ou disparar l\xF3gica de
neg\xF3cio contextual ao passo corrente.`),t()()(),i(443,"tr",12)(444,"td",13)(445,"div",14)(446,"span",15),e(447,"p-tour-end"),n(448,"br"),t()()(),i(449,"td",16)(450,"code",22),e(451,"Observable<PoUserGuideEndEvent>"),t()(),i(452,"td",18),e(453,"-"),t(),i(454,"td",19)(455,"p")(456,"code"),e(457,"Observable"),t(),e(458," que emite um "),i(459,"code"),e(460,"PoUserGuideEndEvent"),t(),e(461," no encerramento de cada execu\xE7\xE3o do tour."),t(),i(462,"p"),e(463,"\xC9 emitido exatamente uma vez por execu\xE7\xE3o, sempre ap\xF3s a \xFAltima emiss\xE3o de "),i(464,"code"),e(465,"stepChange$"),t(),e(466,` e ap\xF3s a
limpeza do estado interno do servi\xE7o. As aplica\xE7\xF5es consumidoras podem assinar este `),i(467,"code"),e(468,"Observable"),t(),e(469,`
para registrar telemetria de conclus\xE3o ou de abandono do tour, executar limpezas de UI ou disparar
l\xF3gica de neg\xF3cio dependente do encerramento da jornada do usu\xE1rio.`),t()()(),i(470,"tr",12)(471,"td",13)(472,"div",14)(473,"span",15),e(474,"p-tour-start"),n(475,"br"),t()()(),i(476,"td",16)(477,"code",23),e(478,"Observable<PoUserGuideStartEvent>"),t()(),i(479,"td",18),e(480,"-"),t(),i(481,"td",19)(482,"p")(483,"code"),e(484,"Observable"),t(),e(485," que emite um "),i(486,"code"),e(487,"PoUserGuideEvent"),t(),e(488," no in\xEDcio de cada execu\xE7\xE3o do tour."),t(),i(489,"p"),e(490,`\xC9 emitido exatamente uma vez por execu\xE7\xE3o, imediatamente ap\xF3s a configura\xE7\xE3o da inst\xE2ncia do tour
e antes da primeira emiss\xE3o de `),i(491,"code"),e(492,"stepChange$"),t(),e(493,`. As aplica\xE7\xF5es consumidoras podem assinar este
`),i(494,"code"),e(495,"Observable"),t(),e(496,` para registrar telemetria do in\xEDcio do tour, exibir mensagens contextuais ou disparar
l\xF3gica de neg\xF3cio dependente do in\xEDcio da jornada do usu\xE1rio.`),t()()()(),i(497,"h3"),e(498,"Interfaces"),t(),i(499,"h4",24)(500,"code",5),e(501,"PoUserGuideEndEvent"),t()(),i(502,"div",2)(503,"p"),e(504,"Interface que descreve o evento emitido pelo "),i(505,"code"),e(506,"PoUserGuideService"),t(),e(507," no encerramento da execu\xE7\xE3o de um tour guiado."),t(),i(508,"p"),e(509,"\xC9 publicado no "),i(510,"code"),e(511,"Observable"),t(),i(512,"code"),e(513,"PoUserGuideService.tourEnd$"),t(),e(514,` exatamente uma vez por execu\xE7\xE3o, sempre ap\xF3s a
emiss\xE3o do \xFAltimo `),i(515,"code"),e(516,"PoUserGuideStepChangeEvent"),t(),e(517," em "),i(518,"code"),e(519,"PoUserGuideService.stepChange$"),t(),e(520,` e ap\xF3s a limpeza do estado
interno do servi\xE7o.`),t(),i(521,"p"),e(522,"As aplica\xE7\xF5es consumidoras podem assinar "),i(523,"code"),e(524,"tourEnd$"),t(),e(525,` para registrar telemetria de conclus\xE3o ou de
abandono do tour, executar limpezas de UI ou disparar l\xF3gica de neg\xF3cio dependente do encerramento
da jornada do usu\xE1rio.`),t()(),i(526,"h4",8),e(527,"Propriedades"),t(),i(528,"table",9)(529,"tr",10)(530,"th",11),e(531,"Nome"),t(),i(532,"th",11),e(533,"Tipo"),t(),i(534,"th",11),e(535,"Descri\xE7\xE3o"),t()(),i(536,"tr",12)(537,"td",13)(538,"div",14)(539,"span",15),e(540," lastIndex"),n(541,"br"),t()()(),i(542,"td",16)(543,"code",25),e(544,"number"),t()(),i(545,"td",19)(546,"p"),e(547,"\xCDndice, com base zero, do \xFAltimo passo ativo antes do encerramento do tour."),t(),i(548,"p"),e(549,"Quando "),i(550,"code"),e(551,"reason"),t(),e(552," \xE9 "),i(553,"code"),e(554,"'completed'"),t(),e(555,", corresponde ao \xEDndice do \xFAltimo passo da lista ("),i(556,"code"),e(557,"totalSteps - 1"),t(),e(558,`).
Quando `),i(559,"code"),e(560,"reason"),t(),e(561," \xE9 "),i(562,"code"),e(563,"'closed'"),t(),e(564," ou "),i(565,"code"),e(566,"'destroyed'"),t(),e(567,`, corresponde ao \xEDndice do passo que estava em exibi\xE7\xE3o
no momento do encerramento.`),t()()(),i(568,"tr",12)(569,"td",13)(570,"div",14)(571,"span",15),e(572," reason"),n(573,"br"),t()()(),i(574,"td",16)(575,"code",26),e(576,"'completed' "),t(),i(577,"code",27),e(578," 'closed' "),t(),i(579,"code",28),e(580," 'destroyed'"),t()(),i(581,"td",19)(582,"p"),e(583,"Motivo do encerramento do tour."),t(),i(584,"p"),e(585,"Valores aceitos:"),t(),i(586,"ul")(587,"li")(588,"code"),e(589,"completed"),t(),e(590,": o usu\xE1rio avan\xE7ou al\xE9m do \xFAltimo passo do tour, concluindo a jornada por completo."),t(),i(591,"li")(592,"code"),e(593,"closed"),t(),e(594,": o tour foi encerrado antes da conclus\xE3o, seja pelo usu\xE1rio (tecla "),i(595,"code"),e(596,"Esc"),t(),e(597,`, bot\xE3o "Fechar"
ou clique fora do popover quando `),i(598,"code"),e(599,"PoUserGuideOptions.allowClose"),t(),e(600,` est\xE1 habilitado) ou pela aplica\xE7\xE3o
consumidora atrav\xE9s das chamadas a `),i(601,"code"),e(602,"PoUserGuideService.close"),t(),e(603," ou "),i(604,"code"),e(605,"PoUserGuideService.exit"),t(),e(606,"."),t(),i(607,"li")(608,"code"),e(609,"destroyed"),t(),e(610,`: o encerramento foi for\xE7ado pela destrui\xE7\xE3o da inst\xE2ncia do servi\xE7o \u2014 cen\xE1rio raro,
normalmente observado em testes automatizados ou em ciclos de vida at\xEDpicos da aplica\xE7\xE3o.`),t()()()(),i(611,"tr",12)(612,"td",13)(613,"div",14)(614,"span",15),e(615," totalSteps"),n(616,"br"),t()()(),i(617,"td",16)(618,"code",25),e(619,"number"),t()(),i(620,"td",19)(621,"p"),e(622,"Total de passos configurados no tour, equivalente ao tamanho do array passado a "),i(623,"code"),e(624,"PoUserGuideService.setSteps"),t(),e(625,"."),t()()()(),i(626,"h4",24)(627,"code",5),e(628,"PoUserGuideLiterals"),t()(),i(629,"div",2)(630,"p"),e(631,"Interface para defini\xE7\xE3o das literais usadas no "),i(632,"code"),e(633,"po-user-guide"),t(),e(634,"."),t()(),i(635,"h4",8),e(636,"Propriedades"),t(),i(637,"table",9)(638,"tr",10)(639,"th",11),e(640,"Nome"),t(),i(641,"th",11),e(642,"Tipo"),t(),i(643,"th",11),e(644,"Descri\xE7\xE3o"),t()(),i(645,"tr",12)(646,"td",13)(647,"div",14)(648,"span",15),e(649," close"),n(650,"br"),t()()(),i(651,"td",16)(652,"code",29),e(653,"string"),t()(),i(654,"td",19)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),i(658,"p"),e(659,'Label padr\xE3o do bot\xE3o "Fechar" (X) exibido no canto do popover do tour.'),t()()(),i(660,"tr",12)(661,"td",13)(662,"div",14)(663,"span",15),e(664," done"),n(665,"br"),t()()(),i(666,"td",16)(667,"code",29),e(668,"string"),t()(),i(669,"td",19)(670,"em")(671,"strong"),e(672,"(opcional)"),t()(),i(673,"p"),e(674,'Label padr\xE3o do bot\xE3o "Finalizar" aplicado ao \xFAltimo passo do tour.'),t()()(),i(675,"tr",12)(676,"td",13)(677,"div",14)(678,"span",15),e(679," next"),n(680,"br"),t()()(),i(681,"td",16)(682,"code",29),e(683,"string"),t()(),i(684,"td",19)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),i(688,"p"),e(689,'Label padr\xE3o do bot\xE3o "Pr\xF3ximo" aplicado a todos os passos do tour.'),t()()(),i(690,"tr",12)(691,"td",13)(692,"div",14)(693,"span",15),e(694," previous"),n(695,"br"),t()()(),i(696,"td",16)(697,"code",29),e(698,"string"),t()(),i(699,"td",19)(700,"em")(701,"strong"),e(702,"(opcional)"),t()(),i(703,"p"),e(704,'Label padr\xE3o do bot\xE3o "Anterior" aplicado a todos os passos do tour.'),t()()(),i(705,"tr",12)(706,"td",13)(707,"div",14)(708,"span",15),e(709," progressTemplate"),n(710,"br"),t()()(),i(711,"td",16)(712,"code",29),e(713,"string"),t()(),i(714,"td",19)(715,"em")(716,"strong"),e(717,"(opcional)"),t()(),i(718,"p"),e(719,"Template padr\xE3o do texto de progresso exibido no popover (ex: "),i(720,"code"),e(721,"{ {current} } de { {total} }"),t(),e(722,")."),t()()()(),i(723,"h4",24)(724,"code",5),e(725,"PoUserGuideOptions"),t()(),i(726,"div",2)(727,"p"),e(728,"Interface que descreve as op\xE7\xF5es globais de configura\xE7\xE3o do tour guiado executado pelo "),i(729,"code"),e(730,"PoUserGuideService"),t(),e(731,"."),t(),i(732,"p"),e(733,`Os valores informados s\xE3o aplicados a toda a execu\xE7\xE3o do tour e podem ser sobrescritos pontualmente
em cada `),i(734,"code"),e(735,"PoUserGuideStep"),t(),e(736," atrav\xE9s das propriedades espec\xEDficas de "),i(737,"em"),e(738,"labels"),t(),e(739," ("),i(740,"code"),e(741,"nextLabel"),t(),e(742,", "),i(743,"code"),e(744,"previousLabel"),t(),e(745,`,
`),i(746,"code"),e(747,"doneLabel"),t(),e(748,") \u2014 neste caso, o valor declarado no passo prevalece sobre o valor declarado nas op\xE7\xF5es globais."),t(),i(749,"p"),e(750,`Todas as propriedades s\xE3o opcionais. Quando omitidas, s\xE3o aplicados os valores padr\xE3o do PO UI documentados
em cada propriedade atrav\xE9s da anota\xE7\xE3o `),i(751,"code"),e(752,"@default"),t(),e(753,"."),t()(),i(754,"h4",8),e(755,"Propriedades"),t(),i(756,"table",9)(757,"tr",10)(758,"th",11),e(759,"Nome"),t(),i(760,"th",11),e(761,"Tipo"),t(),i(762,"th",11),e(763,"Descri\xE7\xE3o"),t()(),i(764,"tr",12)(765,"td",13)(766,"div",14)(767,"span",15),e(768," allowClose"),n(769,"br"),t()()(),i(770,"td",16)(771,"code",30),e(772,"boolean"),t()(),i(773,"td",19)(774,"em")(775,"strong"),e(776,"(opcional)"),t()(),i(777,"p"),e(778,'Permite que o usu\xE1rio encerre o tour clicando fora do popover ou utilizando o bot\xE3o "Fechar" (X).'),t(),i(779,"p"),e(780,"Quando definido como "),i(781,"code"),e(782,"false"),t(),e(783,`, o tour somente pode ser encerrado de forma program\xE1tica (por exemplo,
atrav\xE9s do m\xE9todo `),i(784,"code"),e(785,"close()"),t(),e(786," do "),i(787,"code"),e(788,"PoUserGuideService"),t(),e(789,") ou ao avan\xE7ar al\xE9m do \xFAltimo passo."),t()()(),i(790,"tr",12)(791,"td",13)(792,"div",14)(793,"span",15),e(794," allowScroll"),n(795,"br"),t()()(),i(796,"td",16)(797,"code",30),e(798,"boolean"),t()(),i(799,"td",19)(800,"em")(801,"strong"),e(802,"(opcional)"),t()(),i(803,"p"),e(804,"Quando "),i(805,"code"),e(806,"true"),t(),e(807,", mant\xE9m a rolagem da p\xE1gina totalmente livre durante o tour."),t(),i(808,"p"),e(809,"O valor padr\xE3o "),i(810,"code"),e(811,"false"),t(),e(812,` (ou a omiss\xE3o da propriedade) preserva o comportamento padr\xE3o de
bloqueio: a rolagem do `),i(813,"code"),e(814,"document.documentElement"),t(),e(815," e do "),i(816,"code"),e(817,"document.body"),t(),e(818,` \xE9 desabilitada
enquanto o tour estiver ativo e restaurada integralmente ao seu t\xE9rmino.`),t()()(),i(819,"tr",12)(820,"td",13)(821,"div",14)(822,"span",15),e(823," closeLabel"),n(824,"br"),t()()(),i(825,"td",16)(826,"code",29),e(827,"string"),t()(),i(828,"td",19)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),i(832,"p")(833,"em"),e(834,"Label"),t(),e(835,' padr\xE3o do bot\xE3o "Fechar" (X) exibido no canto do popover do tour.'),t()()(),i(836,"tr",12)(837,"td",13)(838,"div",14)(839,"span",15),e(840," doneLabel"),n(841,"br"),t()()(),i(842,"td",16)(843,"code",29),e(844,"string"),t()(),i(845,"td",19)(846,"em")(847,"strong"),e(848,"(opcional)"),t()(),i(849,"p")(850,"em"),e(851,"Label"),t(),e(852,' padr\xE3o do bot\xE3o "Finalizar" aplicado ao \xFAltimo passo do tour.'),t(),i(853,"p"),e(854,"Pode ser sobrescrito individualmente por passo atrav\xE9s de "),i(855,"code"),e(856,"PoUserGuideStep.doneLabel"),t(),e(857,"."),t()()(),i(858,"tr",12)(859,"td",13)(860,"div",14)(861,"span",15),e(862," keyboardControl"),n(863,"br"),t()()(),i(864,"td",16)(865,"code",30),e(866,"boolean"),t()(),i(867,"td",19)(868,"em")(869,"strong"),e(870,"(opcional)"),t()(),i(871,"p"),e(872,"Habilita o controle do tour por teclado."),t(),i(873,"p"),e(874,"Quando ativo, s\xE3o interpretadas as seguintes teclas:"),t(),i(875,"ul")(876,"li")(877,"code"),e(878,"Esc"),t(),e(879,": encerra o tour (equivalente a "),i(880,"code"),e(881,"close()"),t(),e(882,")."),t(),i(883,"li")(884,"code"),e(885,"\u2192"),t(),e(886," (seta para a direita) ou "),i(887,"code"),e(888,"Enter"),t(),e(889,": avan\xE7a para o pr\xF3ximo passo (equivalente a "),i(890,"code"),e(891,"next()"),t(),e(892,")."),t(),i(893,"li")(894,"code"),e(895,"\u2190"),t(),e(896," (seta para a esquerda): retrocede para o passo anterior (equivalente a "),i(897,"code"),e(898,"previous()"),t(),e(899,")."),t()()()(),i(900,"tr",12)(901,"td",13)(902,"div",14)(903,"span",15),e(904," literals"),n(905,"br"),t()()(),i(906,"td",16)(907,"code",17),e(908,"PoUserGuideLiterals"),t()(),i(909,"td",19)(910,"em")(911,"strong"),e(912,"(opcional)"),t()(),i(913,"p"),e(914,"Objeto com as literais usadas no "),i(915,"code"),e(916,"po-user-guide"),t(),e(917,"."),t(),i(918,"p"),e(919,`Permite customizar os textos dos bot\xF5es de navega\xE7\xE3o e o template de progresso do tour.
Quando omitido, as literais s\xE3o traduzidas automaticamente de acordo com o idioma do
`),i(920,"a",20)(921,"code"),e(922,"PoI18nService"),t()(),e(923," ou do browser."),t(),i(924,"p"),e(925,"Exemplo passando apenas as literais que deseja customizar:"),t(),i(926,"pre")(927,"code"),e(928,`const customLiterals: PoUserGuideLiterals = {
  next: 'Avan\xE7ar',
  done: 'Concluir'
};
`),t()()()(),i(929,"tr",12)(930,"td",13)(931,"div",14)(932,"span",15),e(933," nextLabel"),n(934,"br"),t()()(),i(935,"td",16)(936,"code",29),e(937,"string"),t()(),i(938,"td",19)(939,"em")(940,"strong"),e(941,"(opcional)"),t()(),i(942,"p")(943,"em"),e(944,"Label"),t(),e(945,' padr\xE3o do bot\xE3o "Pr\xF3ximo" aplicado a todos os passos do tour.'),t(),i(946,"p"),e(947,"Pode ser sobrescrito individualmente por passo atrav\xE9s de "),i(948,"code"),e(949,"PoUserGuideStep.nextLabel"),t(),e(950,"."),t()()(),i(951,"tr",12)(952,"td",13)(953,"div",14)(954,"span",15),e(955," onStepChange"),n(956,"br"),t()()(),i(957,"td",16)(958,"code",31),e(959,"(event: PoUserGuideStepChangeEvent) => void"),t()(),i(960,"td",19)(961,"em")(962,"strong"),e(963,"(opcional)"),t()(),i(964,"p"),e(965,"Fun\xE7\xE3o de "),i(966,"em"),e(967,"callback"),t(),e(968," invocada a cada mudan\xE7a de passo durante a execu\xE7\xE3o do tour."),t(),i(969,"p"),e(970,"Recebe como argumento um evento "),i(971,"code"),e(972,"PoUserGuideStepChangeEvent"),t(),e(973,` contendo o passo ativo, seu \xEDndice, a dire\xE7\xE3o
da transi\xE7\xE3o (`),i(974,"code"),e(975,"'next'"),t(),e(976,", "),i(977,"code"),e(978,"'previous'"),t(),e(979,", "),i(980,"code"),e(981,"'goto'"),t(),e(982," ou "),i(983,"code"),e(984,"'start'"),t(),e(985,") e o total de passos do tour."),t(),i(986,"p"),e(987,"O "),i(988,"em"),e(989,"callback"),t(),e(990," \xE9 executado antes da emiss\xE3o do evento correspondente em "),i(991,"code"),e(992,"PoUserGuideService.stepChange$"),t(),e(993,`,
permitindo a aplica\xE7\xE3o consumidora reagir \xE0 transi\xE7\xE3o antes que outros assinantes do `),i(994,"code"),e(995,"Observable"),t(),e(996," sejam notificados."),t()()(),i(997,"tr",12)(998,"td",13)(999,"div",14)(1e3,"span",15),e(1001," overlayOpacity"),n(1002,"br"),t()()(),i(1003,"td",16)(1004,"code",25),e(1005,"number"),t()(),i(1006,"td",19)(1007,"em")(1008,"strong"),e(1009,"(opcional)"),t()(),i(1010,"p"),e(1011,"Define a opacidade do "),i(1012,"em"),e(1013,"overlay"),t(),e(1014," que escurece a p\xE1gina ao redor do elemento destacado."),t(),i(1015,"p"),e(1016,"O valor deve estar contido no intervalo "),i(1017,"code"),e(1018,"[0, 1]"),t(),e(1019,", sendo "),i(1020,"code"),e(1021,"0"),t(),e(1022," totalmente transparente e "),i(1023,"code"),e(1024,"1"),t(),e(1025,` totalmente opaco.
Valores fora deste intervalo s\xE3o ajustados (`),i(1026,"em"),e(1027,"clamped"),t(),e(1028,") para os limites mais pr\xF3ximos."),t()()(),i(1029,"tr",12)(1030,"td",13)(1031,"div",14)(1032,"span",15),e(1033," popoverClass"),n(1034,"br"),t()()(),i(1035,"td",16)(1036,"code",29),e(1037,"string"),t()(),i(1038,"td",19)(1039,"em")(1040,"strong"),e(1041,"(opcional)"),t()(),i(1042,"p"),e(1043,"Classe CSS adicional aplicada ao elemento raiz do popover do tour."),t(),i(1044,"p"),e(1045,"\xDAtil para customiza\xE7\xF5es pontuais sem alterar o tema global do PO UI. A classe padr\xE3o "),i(1046,"code"),e(1047,"po-user-guide-popover"),t(),e(1048,`
\xE9 sempre aplicada e preservada \u2014 o valor informado \xE9 concatenado a ela.`),t()()(),i(1049,"tr",12)(1050,"td",13)(1051,"div",14)(1052,"span",15),e(1053," previousLabel"),n(1054,"br"),t()()(),i(1055,"td",16)(1056,"code",29),e(1057,"string"),t()(),i(1058,"td",19)(1059,"em")(1060,"strong"),e(1061,"(opcional)"),t()(),i(1062,"p")(1063,"em"),e(1064,"Label"),t(),e(1065,' padr\xE3o do bot\xE3o "Anterior" aplicado a todos os passos do tour.'),t(),i(1066,"p"),e(1067,"Pode ser sobrescrito individualmente por passo atrav\xE9s de "),i(1068,"code"),e(1069,"PoUserGuideStep.previousLabel"),t(),e(1070,"."),t()()(),i(1071,"tr",12)(1072,"td",13)(1073,"div",14)(1074,"span",15),e(1075," progressTemplate"),n(1076,"br"),t()()(),i(1077,"td",16)(1078,"code",29),e(1079,"string"),t()(),i(1080,"td",19)(1081,"em")(1082,"strong"),e(1083,"(opcional)"),t()(),i(1084,"p"),e(1085,"Template do texto de progresso exibido no popover quando "),i(1086,"code"),e(1087,"showProgress"),t(),e(1088," est\xE1 habilitado."),t(),i(1089,"p"),e(1090,"Aceita os seguintes "),i(1091,"em"),e(1092,"placeholders"),t(),e(1093,", que s\xE3o substitu\xEDdos em tempo de renderiza\xE7\xE3o:"),t(),i(1094,"ul")(1095,"li")(1096,"code"),e(1097,"current"),t(),e(1098,": n\xFAmero do passo atual, com base 1 (ou seja, o primeiro passo \xE9 exibido como "),i(1099,"code"),e(1100,"1"),t(),e(1101,")."),t(),i(1102,"li")(1103,"code"),e(1104,"total"),t(),e(1105,": n\xFAmero total de passos do tour."),t()(),i(1106,"p"),e(1107,"Quando o template informado n\xE3o cont\xE9m nenhum dos "),i(1108,"em"),e(1109,"placeholders"),t(),e(1110,` suportados, o texto \xE9 exibido
literalmente e um aviso \xE9 registrado em `),i(1111,"code"),e(1112,"console.warn"),t(),e(1113,"."),t()()(),i(1114,"tr",12)(1115,"td",13)(1116,"div",14)(1117,"span",15),e(1118," showProgress"),n(1119,"br"),t()()(),i(1120,"td",16)(1121,"code",30),e(1122,"boolean"),t()(),i(1123,"td",19)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),i(1127,"p"),e(1128,"Exibe o indicador textual de progresso do tour no popover (por exemplo, "),i(1129,"code"),e(1130,"1 de 5"),t(),e(1131,")."),t(),i(1132,"p"),e(1133,"O texto pode ser personalizado atrav\xE9s da propriedade "),i(1134,"code"),e(1135,"progressTemplate"),t(),e(1136,"."),t()()()(),i(1137,"h4",24)(1138,"code",5),e(1139,"PoUserGuideStartEvent"),t()(),i(1140,"div",2)(1141,"p"),e(1142,"Interface que descreve o evento emitido pelo "),i(1143,"code"),e(1144,"PoUserGuideService"),t(),e(1145," no in\xEDcio da execu\xE7\xE3o de um tour guiado."),t(),i(1146,"p"),e(1147,"\xC9 publicado no "),i(1148,"code"),e(1149,"Observable"),t(),i(1150,"code"),e(1151,"PoUserGuideService.tourStart$"),t(),e(1152,` exatamente uma vez por execu\xE7\xE3o, imediatamente
ap\xF3s a configura\xE7\xE3o da inst\xE2ncia do tour e antes da emiss\xE3o do primeiro `),i(1153,"code"),e(1154,"PoUserGuideStepChangeEvent"),t(),e(1155,` em
`),i(1156,"code"),e(1157,"PoUserGuideService.stepChange$"),t(),e(1158,"."),t(),i(1159,"p"),e(1160,"As aplica\xE7\xF5es consumidoras podem assinar "),i(1161,"code"),e(1162,"tourStart$"),t(),e(1163,` para registrar telemetria do in\xEDcio do tour,
exibir mensagens contextuais ou disparar l\xF3gica de neg\xF3cio dependente do in\xEDcio da jornada do usu\xE1rio.`),t()(),i(1164,"h4",8),e(1165,"Propriedades"),t(),i(1166,"table",9)(1167,"tr",10)(1168,"th",11),e(1169,"Nome"),t(),i(1170,"th",11),e(1171,"Tipo"),t(),i(1172,"th",11),e(1173,"Descri\xE7\xE3o"),t()(),i(1174,"tr",12)(1175,"td",13)(1176,"div",14)(1177,"span",15),e(1178," startIndex"),n(1179,"br"),t()()(),i(1180,"td",16)(1181,"code",25),e(1182,"number"),t()(),i(1183,"td",19)(1184,"p"),e(1185,"\xCDndice do passo inicial do tour, com base zero."),t(),i(1186,"p"),e(1187,"Corresponde ao argumento "),i(1188,"code"),e(1189,"startIndex"),t(),e(1190," informado a "),i(1191,"code"),e(1192,"PoUserGuideService.start"),t(),e(1193,`. Quando o m\xE9todo \xE9 invocado
sem argumentos, o valor \xE9 `),i(1194,"code"),e(1195,"0"),t(),e(1196,"."),t()()(),i(1197,"tr",12)(1198,"td",13)(1199,"div",14)(1200,"span",15),e(1201," timestamp"),n(1202,"br"),t()()(),i(1203,"td",16)(1204,"code",25),e(1205,"number"),t()(),i(1206,"td",19)(1207,"p"),e(1208,"Marca de tempo, em milissegundos, do momento de emiss\xE3o do evento, obtida a partir de "),i(1209,"code"),e(1210,"Date.now()"),t(),e(1211,"."),t(),i(1212,"p"),e(1213,"\xDAtil para correlacionar o in\xEDcio do tour com outros eventos de telemetria da aplica\xE7\xE3o."),t()()(),i(1214,"tr",12)(1215,"td",13)(1216,"div",14)(1217,"span",15),e(1218," totalSteps"),n(1219,"br"),t()()(),i(1220,"td",16)(1221,"code",25),e(1222,"number"),t()(),i(1223,"td",19)(1224,"p"),e(1225,"Total de passos configurados no tour, equivalente ao tamanho do array passado a "),i(1226,"code"),e(1227,"PoUserGuideService.setSteps"),t(),e(1228,"."),t()()()(),i(1229,"h4",24)(1230,"code",5),e(1231,"PoUserGuideStepChangeEvent"),t()(),i(1232,"div",2)(1233,"p"),e(1234,"Interface que descreve o evento emitido pelo "),i(1235,"code"),e(1236,"PoUserGuideService"),t(),e(1237," a cada mudan\xE7a de passo durante a execu\xE7\xE3o do tour."),t(),i(1238,"p"),e(1239,"\xC9 publicado no "),i(1240,"code"),e(1241,"Observable"),t(),i(1242,"code"),e(1243,"PoUserGuideService.stepChange$"),t(),e(1244,` toda vez que o passo ativo \xE9 alterado, seja por
intera\xE7\xE3o do usu\xE1rio (cliques nos bot\xF5es "Pr\xF3ximo"/"Anterior" ou navega\xE7\xE3o por teclado) ou por chamada
program\xE1tica aos m\xE9todos `),i(1245,"code"),e(1246,"next"),t(),e(1247,", "),i(1248,"code"),e(1249,"previous"),t(),e(1250,", "),i(1251,"code"),e(1252,"goTo"),t(),e(1253," e "),i(1254,"code"),e(1255,"start"),t(),e(1256," do "),i(1257,"code"),e(1258,"PoUserGuideService"),t(),e(1259,"."),t(),i(1260,"p"),e(1261,"As aplica\xE7\xF5es consumidoras podem assinar "),i(1262,"code"),e(1263,"stepChange$"),t(),e(1264,` para reagir \xE0 navega\xE7\xE3o do usu\xE1rio, atualizar a
UI conforme o passo ativo, registrar telemetria de progresso ou disparar l\xF3gica de neg\xF3cio contextual.`),t()(),i(1265,"h4",8),e(1266,"Propriedades"),t(),i(1267,"table",9)(1268,"tr",10)(1269,"th",11),e(1270,"Nome"),t(),i(1271,"th",11),e(1272,"Tipo"),t(),i(1273,"th",11),e(1274,"Descri\xE7\xE3o"),t()(),i(1275,"tr",12)(1276,"td",13)(1277,"div",14)(1278,"span",15),e(1279," direction"),n(1280,"br"),t()()(),i(1281,"td",16)(1282,"code",32),e(1283,"'next' "),t(),i(1284,"code",33),e(1285," 'previous' "),t(),i(1286,"code",34),e(1287," 'goto' "),t(),i(1288,"code",35),e(1289," 'start'"),t()(),i(1290,"td",19)(1291,"p"),e(1292,"Dire\xE7\xE3o da transi\xE7\xE3o que originou a mudan\xE7a de passo."),t(),i(1293,"p"),e(1294,"Valores aceitos:"),t(),i(1295,"ul")(1296,"li")(1297,"code"),e(1298,"next"),t(),e(1299,": a transi\xE7\xE3o foi originada pelo m\xE9todo "),i(1300,"code"),e(1301,"PoUserGuideService.next"),t(),e(1302,' ou pelo bot\xE3o "Pr\xF3ximo" do popover.'),t(),i(1303,"li")(1304,"code"),e(1305,"previous"),t(),e(1306,": a transi\xE7\xE3o foi originada pelo m\xE9todo "),i(1307,"code"),e(1308,"PoUserGuideService.previous"),t(),e(1309,' ou pelo bot\xE3o "Anterior" do popover.'),t(),i(1310,"li")(1311,"code"),e(1312,"goto"),t(),e(1313,": a transi\xE7\xE3o foi originada pela chamada ao m\xE9todo "),i(1314,"code"),e(1315,"PoUserGuideService.goTo"),t(),e(1316," com um \xEDndice arbitr\xE1rio."),t(),i(1317,"li")(1318,"code"),e(1319,"start"),t(),e(1320,`: a transi\xE7\xE3o corresponde \xE0 exibi\xE7\xE3o do primeiro passo logo ap\xF3s a inicializa\xE7\xE3o do tour
pelo m\xE9todo `),i(1321,"code"),e(1322,"PoUserGuideService.start"),t(),e(1323,"."),t()()()(),i(1324,"tr",12)(1325,"td",13)(1326,"div",14)(1327,"span",15),e(1328," index"),n(1329,"br"),t()()(),i(1330,"td",16)(1331,"code",25),e(1332,"number"),t()(),i(1333,"td",19)(1334,"p"),e(1335,"\xCDndice, com base zero, do passo ativo ap\xF3s a transi\xE7\xE3o."),t(),i(1336,"p"),e(1337,"Est\xE1 sempre contido no intervalo "),i(1338,"code"),e(1339,"[0, totalSteps - 1]"),t(),e(1340,"."),t()()(),i(1341,"tr",12)(1342,"td",13)(1343,"div",14)(1344,"span",15),e(1345," step"),n(1346,"br"),t()()(),i(1347,"td",16)(1348,"code",36),e(1349,"PoUserGuideStep"),t()(),i(1350,"td",19)(1351,"p"),e(1352,"Passo do tour que se tornou ativo ap\xF3s a transi\xE7\xE3o."),t(),i(1353,"p"),e(1354,"Corresponde ao elemento da lista "),i(1355,"code"),e(1356,"steps"),t(),e(1357," (configurada via "),i(1358,"code"),e(1359,"PoUserGuideService.setSteps"),t(),e(1360,`) cujo \xEDndice \xE9
igual ao valor de `),i(1361,"code"),e(1362,"index"),t(),e(1363," neste evento."),t()()(),i(1364,"tr",12)(1365,"td",13)(1366,"div",14)(1367,"span",15),e(1368," totalSteps"),n(1369,"br"),t()()(),i(1370,"td",16)(1371,"code",25),e(1372,"number"),t()(),i(1373,"td",19)(1374,"p"),e(1375,"Total de passos configurados no tour, equivalente ao tamanho do array passado a "),i(1376,"code"),e(1377,"PoUserGuideService.setSteps"),t(),e(1378,"."),t()()()(),i(1379,"h4",24)(1380,"code",5),e(1381,"PoUserGuideStep"),t()(),i(1382,"div",2)(1383,"p"),e(1384,"Interface que descreve um passo individual do tour guiado executado pelo "),i(1385,"code"),e(1386,"PoUserGuideService"),t(),e(1387,"."),t(),i(1388,"p"),e(1389,`Cada passo representa uma parada do tour, com um elemento opcional a ser destacado na p\xE1gina,
conte\xFAdo textual ou em HTML, configura\xE7\xF5es de posicionamento do popover, `),i(1390,"em"),e(1391,"labels"),t(),e(1392,` espec\xEDficos
dos bot\xF5es de navega\xE7\xE3o e `),i(1393,"em"),e(1394,"hooks"),t(),e(1395," de ciclo de vida do passo."),t(),i(1396,"blockquote")(1397,"p"),e(1398,"A propriedade "),i(1399,"code"),e(1400,"content"),t(),e(1401," \xE9 a \xFAnica obrigat\xF3ria e corresponde ao corpo do popover apresentado ao usu\xE1rio."),t()()(),i(1402,"h4",8),e(1403,"Propriedades"),t(),i(1404,"table",9)(1405,"tr",10)(1406,"th",11),e(1407,"Nome"),t(),i(1408,"th",11),e(1409,"Tipo"),t(),i(1410,"th",11),e(1411,"Descri\xE7\xE3o"),t()(),i(1412,"tr",12)(1413,"td",13)(1414,"div",14)(1415,"span",15),e(1416," align"),n(1417,"br"),t()()(),i(1418,"td",16)(1419,"code",37),e(1420,"PoUserGuideAlignment"),t()(),i(1421,"td",19)(1422,"em")(1423,"strong"),e(1424,"(opcional)"),t()(),i(1425,"p"),e(1426,"Alinhamento do popover ao longo do eixo da posi\xE7\xE3o configurada em "),i(1427,"code"),e(1428,"position"),t(),e(1429,"."),t(),i(1430,"p"),e(1431,"Valores aceitos: 'start' | 'center' | 'end'"),t()()(),i(1432,"tr",12)(1433,"td",13)(1434,"div",14)(1435,"span",15),e(1436," content"),n(1437,"br"),t()()(),i(1438,"td",16)(1439,"code",29),e(1440,"string"),t()(),i(1441,"td",19)(1442,"p"),e(1443,"Conte\xFAdo principal do passo, exibido no corpo do popover. Aceita texto puro ou HTML."),t(),i(1444,"blockquote")(1445,"p")(1446,"strong"),e(1447,"Aviso de seguran\xE7a:"),t(),e(1448,` por padr\xE3o, o PO UI sanitiza o conte\xFAdo HTML recebido antes de repass\xE1-lo
ao popover do tour, reduzindo o risco de vulnerabilidades de `),i(1449,"em"),e(1450,"Cross-Site Scripting"),t(),e(1451," (XSS)."),t(),i(1452,"p"),e(1453,`Mesmo com essa prote\xE7\xE3o, recomenda-se que aplica\xE7\xF5es consumidoras evitem enviar conte\xFAdo HTML
proveniente de fontes n\xE3o confi\xE1veis sem valida\xE7\xE3o pr\xE9via, como entradas de usu\xE1rio ou dados externos.
A sanitiza\xE7\xE3o realizada pelo PO UI atua como uma camada de seguran\xE7a, mas n\xE3o substitui boas pr\xE1ticas
de valida\xE7\xE3o e controle dos dados na origem.`),t()()()(),i(1454,"tr",12)(1455,"td",13)(1456,"div",14)(1457,"span",15),e(1458," doneLabel"),n(1459,"br"),t()()(),i(1460,"td",16)(1461,"code",29),e(1462,"string"),t()(),i(1463,"td",19)(1464,"em")(1465,"strong"),e(1466,"(opcional)"),t()(),i(1467,"p"),e(1468,"Sobrescreve o "),i(1469,"em"),e(1470,"label"),t(),e(1471,' do bot\xE3o "Finalizar" exclusivamente para este passo.'),t(),i(1472,"p"),e(1473,"Quando omitido, \xE9 utilizado o valor configurado em "),i(1474,"code"),e(1475,"PoUserGuideOptions.doneLabel"),t(),e(1476," ou o padr\xE3o do PO UI ("),i(1477,"code"),e(1478,"Finalizar"),t(),e(1479,")."),t()()(),i(1480,"tr",12)(1481,"td",13)(1482,"div",14)(1483,"span",15),e(1484," element"),n(1485,"br"),t()()(),i(1486,"td",16)(1487,"code",29),e(1488,"string "),t(),i(1489,"code",38),e(1490," HTMLElement"),t()(),i(1491,"td",19)(1492,"em")(1493,"strong"),e(1494,"(opcional)"),t()(),i(1495,"p"),e(1496,"Elemento da p\xE1gina que o passo deve destacar."),t(),i(1497,"p"),e(1498,"Aceita um seletor CSS v\xE1lido ("),i(1499,"code"),e(1500,"'#id'"),t(),e(1501,", "),i(1502,"code"),e(1503,"'.class'"),t(),e(1504,", "),i(1505,"code"),e(1506,"'tag'"),t(),e(1507,", "),i(1508,"code"),e(1509,"'.container > .item'"),t(),e(1510,") ou uma refer\xEAncia direta a um "),i(1511,"code"),e(1512,"HTMLElement"),t(),e(1513,`
(por exemplo, obtida via `),i(1514,"code"),e(1515,"@ViewChild"),t(),e(1516," ou "),i(1517,"code"),e(1518,"ElementRef.nativeElement"),t(),e(1519,")."),t(),i(1520,"p"),e(1521,`Quando a propriedade \xE9 omitida, o popover \xE9 exibido como um modal centralizado na viewport, sem destacar
nenhum elemento da p\xE1gina.`),t()()(),i(1522,"tr",12)(1523,"td",13)(1524,"div",14)(1525,"span",15),e(1526," nextLabel"),n(1527,"br"),t()()(),i(1528,"td",16)(1529,"code",29),e(1530,"string"),t()(),i(1531,"td",19)(1532,"em")(1533,"strong"),e(1534,"(opcional)"),t()(),i(1535,"p"),e(1536,"Sobrescreve o "),i(1537,"em"),e(1538,"label"),t(),e(1539,' do bot\xE3o "Pr\xF3ximo" exclusivamente para este passo.'),t(),i(1540,"p"),e(1541,"Quando omitido, \xE9 utilizado o valor configurado em "),i(1542,"code"),e(1543,"PoUserGuideOptions.nextLabel"),t(),e(1544," ou o padr\xE3o do PO UI ("),i(1545,"code"),e(1546,"Pr\xF3ximo"),t(),e(1547,")."),t()()(),i(1548,"tr",12)(1549,"td",13)(1550,"div",14)(1551,"span",15),e(1552," onBeforeHighlight"),n(1553,"br"),t()()(),i(1554,"td",16)(1555,"code",39),e(1556,"(step: PoUserGuideStep, index: number) => void"),t()(),i(1557,"td",19)(1558,"em")(1559,"strong"),e(1560,"(opcional)"),t()(),i(1561,"p")(1562,"em"),e(1563,"Hook"),t(),e(1564," executado imediatamente antes de o passo ser destacado na p\xE1gina, sincronamente \xE0 transi\xE7\xE3o."),t(),i(1565,"p"),e(1566,"Recebe como argumentos o pr\xF3prio passo ("),i(1567,"code"),e(1568,"step"),t(),e(1569,") e o seu \xEDndice ("),i(1570,"code"),e(1571,"index"),t(),e(1572,`, com base zero) na lista de passos
configurada via `),i(1573,"code"),e(1574,"PoUserGuideService.setSteps"),t(),e(1575,"."),t(),i(1576,"p"),e(1577,"\xDAtil para preparar a UI antes do destaque (por exemplo, abrir um menu lateral que cont\xE9m o elemento alvo)."),t()()(),i(1578,"tr",12)(1579,"td",13)(1580,"div",14)(1581,"span",15),e(1582," onDeselected"),n(1583,"br"),t()()(),i(1584,"td",16)(1585,"code",39),e(1586,"(step: PoUserGuideStep, index: number) => void"),t()(),i(1587,"td",19)(1588,"em")(1589,"strong"),e(1590,"(opcional)"),t()(),i(1591,"p")(1592,"em"),e(1593,"Hook"),t(),e(1594," executado quando o passo deixa de estar ativo, seja por avan\xE7o, retrocesso ou encerramento do tour."),t(),i(1595,"p"),e(1596,"Recebe como argumentos o pr\xF3prio passo ("),i(1597,"code"),e(1598,"step"),t(),e(1599,") e o seu \xEDndice ("),i(1600,"code"),e(1601,"index"),t(),e(1602,", com base zero) na lista de passos."),t(),i(1603,"p"),e(1604,"\xDAtil para reverter altera\xE7\xF5es de UI realizadas em "),i(1605,"code"),e(1606,"onBeforeHighlight"),t(),e(1607," ou "),i(1608,"code"),e(1609,"onHighlighted"),t(),e(1610,"."),t()()(),i(1611,"tr",12)(1612,"td",13)(1613,"div",14)(1614,"span",15),e(1615," onHighlighted"),n(1616,"br"),t()()(),i(1617,"td",16)(1618,"code",39),e(1619,"(step: PoUserGuideStep, index: number) => void"),t()(),i(1620,"td",19)(1621,"em")(1622,"strong"),e(1623,"(opcional)"),t()(),i(1624,"p")(1625,"em"),e(1626,"Hook"),t(),e(1627," executado imediatamente ap\xF3s o passo ser destacado na p\xE1gina."),t(),i(1628,"p"),e(1629,"Recebe como argumentos o pr\xF3prio passo ("),i(1630,"code"),e(1631,"step"),t(),e(1632,") e o seu \xEDndice ("),i(1633,"code"),e(1634,"index"),t(),e(1635,", com base zero) na lista de passos."),t(),i(1636,"p"),e(1637,"\xDAtil para registrar telemetria de visualiza\xE7\xE3o ou disparar l\xF3gica de neg\xF3cio dependente da exibi\xE7\xE3o do passo."),t()()(),i(1638,"tr",12)(1639,"td",13)(1640,"div",14)(1641,"span",15),e(1642," position"),n(1643,"br"),t()()(),i(1644,"td",16)(1645,"code",40),e(1646,"PoUserGuidePosition"),t()(),i(1647,"td",19)(1648,"em")(1649,"strong"),e(1650,"(opcional)"),t()(),i(1651,"p"),e(1652,"Posi\xE7\xE3o preferida do popover em rela\xE7\xE3o ao elemento destacado."),t(),i(1653,"p"),e(1654,"Valores aceitos:"),t(),i(1655,"ul")(1656,"li")(1657,"code"),e(1658,"top"),t(),e(1659,": o popover \xE9 renderizado acima do elemento destacado."),t(),i(1660,"li")(1661,"code"),e(1662,"right"),t(),e(1663,": o popover \xE9 renderizado \xE0 direita do elemento destacado."),t(),i(1664,"li")(1665,"code"),e(1666,"bottom"),t(),e(1667,": o popover \xE9 renderizado abaixo do elemento destacado."),t(),i(1668,"li")(1669,"code"),e(1670,"left"),t(),e(1671,": o popover \xE9 renderizado \xE0 esquerda do elemento destacado."),t(),i(1672,"li")(1673,"code"),e(1674,"over"),t(),e(1675,": o popover \xE9 renderizado sobreposto ao elemento destacado."),t(),i(1676,"li")(1677,"code"),e(1678,"auto"),t(),e(1679,": a posi\xE7\xE3o \xE9 calculada automaticamente conforme o espa\xE7o dispon\xEDvel na viewport."),t()()()(),i(1680,"tr",12)(1681,"td",13)(1682,"div",14)(1683,"span",15),e(1684," previousLabel"),n(1685,"br"),t()()(),i(1686,"td",16)(1687,"code",29),e(1688,"string"),t()(),i(1689,"td",19)(1690,"em")(1691,"strong"),e(1692,"(opcional)"),t()(),i(1693,"p"),e(1694,"Sobrescreve o "),i(1695,"em"),e(1696,"label"),t(),e(1697,' do bot\xE3o "Anterior" exclusivamente para este passo.'),t(),i(1698,"p"),e(1699,"Quando omitido, \xE9 utilizado o valor configurado em "),i(1700,"code"),e(1701,"PoUserGuideOptions.previousLabel"),t(),e(1702," ou o padr\xE3o do PO UI ("),i(1703,"code"),e(1704,"Anterior"),t(),e(1705,")."),t()()(),i(1706,"tr",12)(1707,"td",13)(1708,"div",14)(1709,"span",15),e(1710," showButtons"),n(1711,"br"),t()()(),i(1712,"td",16)(1713,"code",41),e(1714,"Array<'next' "),t(),i(1715,"code",33),e(1716," 'previous' "),t(),i(1717,"code",42),e(1718," 'close'>"),t()(),i(1719,"td",19)(1720,"em")(1721,"strong"),e(1722,"(opcional)"),t()(),i(1723,"p"),e(1724,"Lista que filtra quais bot\xF5es de navega\xE7\xE3o devem ser exibidos no popover deste passo."),t(),i(1725,"p"),e(1726,"Aceita qualquer combina\xE7\xE3o dos valores "),i(1727,"code"),e(1728,"'next'"),t(),e(1729,", "),i(1730,"code"),e(1731,"'previous'"),t(),e(1732," e "),i(1733,"code"),e(1734,"'close'"),t(),e(1735,`. Apenas os bot\xF5es presentes
na lista s\xE3o renderizados, permitindo, por exemplo, ocultar o bot\xE3o "Anterior" no primeiro passo
ou exibir somente o bot\xE3o "Fechar" em um passo final.`),t(),i(1736,"p"),e(1737,"Quando a propriedade \xE9 omitida, todos os bot\xF5es padr\xE3o ("),i(1738,"code"),e(1739,"'next'"),t(),e(1740,", "),i(1741,"code"),e(1742,"'previous'"),t(),e(1743," e "),i(1744,"code"),e(1745,"'close'"),t(),e(1746,`) s\xE3o exibidos.
Quando informada como array vazio, nenhum bot\xE3o de navega\xE7\xE3o \xE9 exibido \u2014 o controle do tour passa a ser
100% program\xE1tico via `),i(1747,"code"),e(1748,"next()"),t(),e(1749,", "),i(1750,"code"),e(1751,"previous()"),t(),e(1752,", "),i(1753,"code"),e(1754,"goTo()"),t(),e(1755," e "),i(1756,"code"),e(1757,"close()"),t(),e(1758," do "),i(1759,"code"),e(1760,"PoUserGuideService"),t(),e(1761,"."),t()()(),i(1762,"tr",12)(1763,"td",13)(1764,"div",14)(1765,"span",15),e(1766," title"),n(1767,"br"),t()()(),i(1768,"td",16)(1769,"code",29),e(1770,"string"),t()(),i(1771,"td",19)(1772,"em")(1773,"strong"),e(1774,"(opcional)"),t()(),i(1775,"p"),e(1776,"T\xEDtulo exibido no cabe\xE7alho do popover do passo."),t(),i(1777,"p"),e(1778,"Quando omitido, o popover \xE9 renderizado apenas com o conte\xFAdo definido em "),i(1779,"code"),e(1780,"content"),t(),e(1781,"."),t()()()(),i(1782,"h3"),e(1783,"Enums"),t(),i(1784,"h4",4)(1785,"code",5),e(1786,"PoUserGuideAlignment"),t()(),i(1787,"div",2)(1788,"p")(1789,"em"),e(1790,"Enum"),t(),e(1791,` que define o alinhamento do popover do tour ao longo do eixo da posi\xE7\xE3o configurada,
utilizado na propriedade `),i(1792,"code"),e(1793,"align"),t(),e(1794," de "),i(1795,"code"),e(1796,"PoUserGuideStep"),t(),e(1797,"."),t(),i(1798,"blockquote")(1799,"p"),e(1800,"Quando o valor n\xE3o \xE9 informado, \xE9 aplicado o padr\xE3o "),i(1801,"code"),e(1802,"PoUserGuideAlignment.Start"),t(),e(1803,"."),t()()(),i(1804,"h4",8),e(1805,"Propriedades"),t(),i(1806,"table",9)(1807,"tr",10)(1808,"th",11),e(1809,"Nome"),t(),i(1810,"th",11),e(1811,"Descri\xE7\xE3o"),t()(),i(1812,"tr",12)(1813,"td",13)(1814,"div",14)(1815,"span",15),e(1816," Start"),n(1817,"br"),t()()(),i(1818,"td",19)(1819,"p"),e(1820,"O popover \xE9 alinhado ao in\xEDcio do eixo da posi\xE7\xE3o (topo ou esquerda, conforme a "),i(1821,"code"),e(1822,"PoUserGuidePosition"),t(),e(1823,")."),t()()(),i(1824,"tr",12)(1825,"td",13)(1826,"div",14)(1827,"span",15),e(1828," Center"),n(1829,"br"),t()()(),i(1830,"td",19)(1831,"p"),e(1832,"O popover \xE9 alinhado ao centro do eixo da posi\xE7\xE3o."),t()()(),i(1833,"tr",12)(1834,"td",13)(1835,"div",14)(1836,"span",15),e(1837," End"),n(1838,"br"),t()()(),i(1839,"td",19)(1840,"p"),e(1841,"O popover \xE9 alinhado ao final do eixo da posi\xE7\xE3o (rodap\xE9 ou direita, conforme a "),i(1842,"code"),e(1843,"PoUserGuidePosition"),t(),e(1844,")."),t()()()(),i(1845,"h4",4)(1846,"code",5),e(1847,"PoUserGuidePosition"),t()(),i(1848,"div",2)(1849,"p")(1850,"em"),e(1851,"Enum"),t(),e(1852,` que define a posi\xE7\xE3o preferida do popover do tour em rela\xE7\xE3o ao elemento destacado,
utilizado na propriedade `),i(1853,"code"),e(1854,"position"),t(),e(1855," de "),i(1856,"code"),e(1857,"PoUserGuideStep"),t(),e(1858,"."),t(),i(1859,"blockquote")(1860,"p"),e(1861,"Quando o valor n\xE3o \xE9 informado, \xE9 aplicado o padr\xE3o "),i(1862,"code"),e(1863,"PoUserGuidePosition.Auto"),t(),e(1864,"."),t()()(),i(1865,"h4",8),e(1866,"Propriedades"),t(),i(1867,"table",9)(1868,"tr",10)(1869,"th",11),e(1870,"Nome"),t(),i(1871,"th",11),e(1872,"Descri\xE7\xE3o"),t()(),i(1873,"tr",12)(1874,"td",13)(1875,"div",14)(1876,"span",15),e(1877," Top"),n(1878,"br"),t()()(),i(1879,"td",19)(1880,"p"),e(1881,"O popover \xE9 renderizado acima do elemento destacado."),t()()(),i(1882,"tr",12)(1883,"td",13)(1884,"div",14)(1885,"span",15),e(1886," Right"),n(1887,"br"),t()()(),i(1888,"td",19)(1889,"p"),e(1890,"O popover \xE9 renderizado \xE0 direita do elemento destacado."),t()()(),i(1891,"tr",12)(1892,"td",13)(1893,"div",14)(1894,"span",15),e(1895," Bottom"),n(1896,"br"),t()()(),i(1897,"td",19)(1898,"p"),e(1899,"O popover \xE9 renderizado abaixo do elemento destacado."),t()()(),i(1900,"tr",12)(1901,"td",13)(1902,"div",14)(1903,"span",15),e(1904," Left"),n(1905,"br"),t()()(),i(1906,"td",19)(1907,"p"),e(1908,"O popover \xE9 renderizado \xE0 esquerda do elemento destacado."),t()()(),i(1909,"tr",12)(1910,"td",13)(1911,"div",14)(1912,"span",15),e(1913," Over"),n(1914,"br"),t()()(),i(1915,"td",19)(1916,"p"),e(1917,"O popover \xE9 renderizado sobreposto ao elemento destacado."),t()()(),i(1918,"tr",12)(1919,"td",13)(1920,"div",14)(1921,"span",15),e(1922," Auto"),n(1923,"br"),t()()(),i(1924,"td",19)(1925,"p"),e(1926,"A posi\xE7\xE3o \xE9 calculada automaticamente conforme o espa\xE7o dispon\xEDvel na viewport."),t()()()()())},encapsulation:2})}return r})();var se=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(s,d){this.route=s,this.router=d}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(s=>{let d=s.view;this.activeTab=d||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(s){this.router.navigate([],{queryParams:{view:s},queryParamsHandling:"merge"}),this.activeTab=s}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(d){return new(d||r)(P(N),P(R))};static \u0275cmp=g({type:r,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","User Guide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(d,o){d&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-user-guide-doc"),t(),i(4,"po-tab",3),b("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-user-guide-basic-view")(6,"sample-po-user-guide-labs-view")(7,"sample-po-user-guide-onboarding-view"),t()()()),d&2&&(v("p-actions",o.actions),l(2),v("p-active",o.activeTab==="doc"),l(2),v("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Z,y,U,ne,ae,de,le],encapsulation:2})}return r})();var Pe=[{path:"",component:se}],me=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=O({type:r});static \u0275inj=D({imports:[j.forChild(Pe),j]})}return r})();var Ke=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=O({type:r});static \u0275inj=D({imports:[$,me]})}return r})();export{Ke as DocPoUserGuideModule};
