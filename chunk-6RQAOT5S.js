import{o as F,p as Z}from"./chunk-AT3MKFJ3.js";import{Gb as f,Hb as P,Ja as W,Na as h,Ra as K,W as Q,Ya as J,a as R,tb as Y,w as M,ya as X}from"./chunk-GCMU57WK.js";import{Ea as v,Fa as i,Ga as t,Ha as n,I as D,Mb as _,Mc as z,Nc as q,O as u,Oa as A,Oc as I,P as c,Pa as b,Pc as B,Qc as V,_a as H,bb as y,cb as e,cd as N,eb as w,ed as U,gb as E,gd as j,ha as l,hb as x,ib as S,ma as T,oa as g,pa as O,pb as k,rb as G}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var $=(()=>{class r{poTourGuide;steps=[{element:"#sample-po-tour-guide-basic-title",title:"Bem-vindo ao tour",content:"Este \xE9 um exemplo b\xE1sico de uso do <strong>PoTourGuideService</strong>.",position:"bottom"},{element:"#sample-po-tour-guide-basic-info",title:"Conte\xFAdo destacado",content:"Aqui voc\xEA pode descrever em detalhes a \xE1rea destacada para o usu\xE1rio.",position:"right"},{element:"#sample-po-tour-guide-basic-cta",title:"Pr\xF3ximos passos",content:"Clique em <strong>Finalizar</strong> para encerrar o tour.",position:"top"}];constructor(m){this.poTourGuide=m}startTour(){this.poTourGuide.setSteps(this.steps).setOptions({showProgress:!0}).start()}static \u0275fac=function(d){return new(d||r)(T(h))};static \u0275cmp=g({type:r,selectors:[["sample-po-tour-guide-basic"]],standalone:!1,decls:21,vars:0,consts:[[1,"po-row"],["id","sample-po-tour-guide-basic-title",1,"po-md-12"],["id","sample-po-tour-guide-basic-info",1,"po-md-12"],[1,"po-md-12"],["id","sample-po-tour-guide-basic-cta","p-label","Iniciar Tour","p-kind","primary",1,"po-md-3",3,"p-click"]],template:function(d,o){d&1&&(i(0,"div",0)(1,"h2",1),e(2,"PO Tour Basic"),t(),i(3,"p",2),e(4," Acompanhe um tour r\xE1pido de tr\xEAs passos sobre os principais elementos desta p\xE1gina. "),t(),i(5,"p",3),e(6," Quando o tour estiver ativo, \xE9 poss\xEDvel controlar a navega\xE7\xE3o pelo teclado: pressione "),i(7,"strong"),e(8,"Esc"),t(),e(9," para encerrar o tour, "),i(10,"strong"),e(11,"\u2192"),t(),e(12," (seta para a direita) ou "),i(13,"strong"),e(14,"Enter"),t(),e(15," para avan\xE7ar para o pr\xF3ximo passo e "),i(16,"strong"),e(17,"\u2190"),t(),e(18," (seta para a esquerda) para retornar ao passo anterior. "),t()(),i(19,"div",0)(20,"po-button",4),b("p-click",function(){return o.startTour()}),t()())},dependencies:[M],encapsulation:2})}return r})();var pe=r=>({"docs-sample-code-tabs":r}),ie=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=g({type:r,selectors:[["sample-po-tour-guide-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,o){d&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Tour Basic"),t(),i(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-tour-guide-basic/sample-po-tour-guide-basic.component.html"),t(),i(13,"pre",7),e(14,`<div class="po-row">
  <h2 id="sample-po-tour-guide-basic-title" class="po-md-12">PO Tour Basic</h2>

  <p id="sample-po-tour-guide-basic-info" class="po-md-12">
    Acompanhe um tour r\xE1pido de tr\xEAs passos sobre os principais elementos desta p\xE1gina.

  </p>
  <p class="po-md-12">
    Quando o tour estiver ativo, \xE9 poss\xEDvel controlar a navega\xE7\xE3o pelo teclado: pressione <strong>Esc</strong> para encerrar o tour, <strong>\u2192</strong> (seta para a direita) ou <strong>Enter</strong> para avan\xE7ar para o pr\xF3ximo passo e <strong>\u2190</strong> (seta para a esquerda) para retornar ao passo anterior.
  </p>
</div>

<div class="po-row">
  <po-button
    id="sample-po-tour-guide-basic-cta"
    class="po-md-3"
    p-label="Iniciar Tour"
    p-kind="primary"
    (p-click)="startTour()"
  >
  </po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-tour-guide-basic/sample-po-tour-guide-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoTourGuideService, PoTourGuideStep } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tour-guide-basic',
  templateUrl: './sample-po-tour-guide-basic.component.html',
  standalone: false
})
export class SamplePoTourGuideBasicComponent {
  private readonly steps: Array<PoTourGuideStep> = [
    {
      element: '#sample-po-tour-guide-basic-title',
      title: 'Bem-vindo ao tour',
      content: 'Este \xE9 um exemplo b\xE1sico de uso do <strong>PoTourGuideService</strong>.',
      position: 'bottom'
    },
    {
      element: '#sample-po-tour-guide-basic-info',
      title: 'Conte\xFAdo destacado',
      content: 'Aqui voc\xEA pode descrever em detalhes a \xE1rea destacada para o usu\xE1rio.',
      position: 'right'
    },
    {
      element: '#sample-po-tour-guide-basic-cta',
      title: 'Pr\xF3ximos passos',
      content: 'Clique em <strong>Finalizar</strong> para encerrar o tour.',
      position: 'top'
    }
  ];

  constructor(private poTourGuide: PoTourGuideService) {}

  startTour(): void {
    this.poTourGuide.setSteps(this.steps).setOptions({ showProgress: true }).start();
  }
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-tour-guide-basic"),t(),n(23,"hr")),d&2&&(l(5),y("po-icon "+o.sampleCodeButtonIcon),l(),w(" ",o.sampleCodeButtonLabel),l(),v("ngClass",G(4,pe,o.hideSampleCodeTabs)))},dependencies:[_,F,f,P,$],encapsulation:2})}return r})();var oe=(()=>{class r{poTourGuide;allowClose;showProgress;keyboardControl;overlayOpacity;nextLabel;previousLabel;doneLabel;progressTemplate;stepTitle;stepContent;progressTemplateHelp="Use {{ current }} e {{ total }} como placeholders.";constructor(m){this.poTourGuide=m}ngOnInit(){this.restore()}restore(){this.allowClose=!0,this.showProgress=!0,this.keyboardControl=!0,this.overlayOpacity=.7,this.nextLabel="Pr\xF3ximo",this.previousLabel="Anterior",this.doneLabel="Finalizar",this.progressTemplate="{{current}} de {{total}}",this.stepTitle="Passo destacado",this.stepContent="Edite os campos ao lado e inicie o tour para visualizar as altera\xE7\xF5es."}startTour(){let m=[{element:"#sample-po-tour-guide-labs-form",title:this.stepTitle,content:this.stepContent,position:"right"},{element:"#sample-po-tour-guide-labs-cta",title:"Bot\xE3o de in\xEDcio",content:"Reinicie o tour quantas vezes precisar para experimentar op\xE7\xF5es diferentes.",position:"top"},{title:"Modal final",content:"Passos sem <code>element</code> s\xE3o exibidos como um modal centralizado."}],d={allowClose:this.allowClose,showProgress:this.showProgress,keyboardControl:this.keyboardControl,overlayOpacity:this.overlayOpacity,nextLabel:this.nextLabel,previousLabel:this.previousLabel,doneLabel:this.doneLabel,progressTemplate:this.progressTemplate};this.poTourGuide.setSteps(m).setOptions(d).start()}static \u0275fac=function(d){return new(d||r)(T(h))};static \u0275cmp=g({type:r,selectors:[["sample-po-tour-guide-labs"]],standalone:!1,features:[k([h])],decls:17,vars:11,consts:[["f","ngForm"],["id","sample-po-tour-guide-labs-cta","p-label","Iniciar Tour","p-kind","primary",3,"p-click"],["id","sample-po-tour-guide-labs-form",1,"po-row"],["name","stepTitle","p-clean","","p-label","Step title",1,"po-md-6",3,"ngModelChange","ngModel"],["name","stepContent","p-clean","","p-label","Step content",1,"po-md-6",3,"ngModelChange","ngModel"],["name","nextLabel","p-clean","","p-label","Next label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","previousLabel","p-clean","","p-label","Previous label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","doneLabel","p-clean","","p-label","Done label",1,"po-md-3",3,"ngModelChange","ngModel"],["name","progressTemplate","p-clean","","p-label","Progress template",1,"po-md-3",3,"ngModelChange","ngModel","p-help"],["name","overlayOpacity","p-clean","","p-label","Overlay opacity","p-min","0","p-max","1","p-step","0.1",1,"po-md-3",3,"ngModelChange","ngModel"],["name","allowClose","p-label","Allow close",1,"po-md-3",3,"ngModelChange","ngModel"],["name","showProgress","p-label","Show progress",1,"po-md-3",3,"ngModelChange","ngModel"],["name","keyboardControl","p-label","Keyboard control",1,"po-md-3",3,"ngModelChange","ngModel"],[1,"po-row"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"]],template:function(d,o){if(d&1){let s=A();i(0,"po-button",1),b("p-click",function(){return o.startTour()}),t(),n(1,"po-divider"),i(2,"div",2)(3,"form",null,0)(5,"po-input",3),S("ngModelChange",function(a){return u(s),x(o.stepTitle,a)||(o.stepTitle=a),c(a)}),t(),i(6,"po-input",4),S("ngModelChange",function(a){return u(s),x(o.stepContent,a)||(o.stepContent=a),c(a)}),t(),i(7,"po-input",5),S("ngModelChange",function(a){return u(s),x(o.nextLabel,a)||(o.nextLabel=a),c(a)}),t(),i(8,"po-input",6),S("ngModelChange",function(a){return u(s),x(o.previousLabel,a)||(o.previousLabel=a),c(a)}),t(),i(9,"po-input",7),S("ngModelChange",function(a){return u(s),x(o.doneLabel,a)||(o.doneLabel=a),c(a)}),t(),i(10,"po-input",8),S("ngModelChange",function(a){return u(s),x(o.progressTemplate,a)||(o.progressTemplate=a),c(a)}),t(),i(11,"po-number",9),S("ngModelChange",function(a){return u(s),x(o.overlayOpacity,a)||(o.overlayOpacity=a),c(a)}),t(),i(12,"po-switch",10),S("ngModelChange",function(a){return u(s),x(o.allowClose,a)||(o.allowClose=a),c(a)}),t(),i(13,"po-switch",11),S("ngModelChange",function(a){return u(s),x(o.showProgress,a)||(o.showProgress=a),c(a)}),t(),i(14,"po-switch",12),S("ngModelChange",function(a){return u(s),x(o.keyboardControl,a)||(o.keyboardControl=a),c(a)}),t(),i(15,"div",13)(16,"po-button",14),b("p-click",function(){return o.restore()}),t()()()()}d&2&&(l(5),E("ngModel",o.stepTitle),l(),E("ngModel",o.stepContent),l(),E("ngModel",o.nextLabel),l(),E("ngModel",o.previousLabel),l(),E("ngModel",o.doneLabel),l(),E("ngModel",o.progressTemplate),v("p-help",o.progressTemplateHelp),l(),E("ngModel",o.overlayOpacity),l(),E("ngModel",o.allowClose),l(),E("ngModel",o.showProgress),l(),E("ngModel",o.keyboardControl))},dependencies:[V,z,q,B,I,M,R,W,K,X],encapsulation:2})}return r})();var xe=r=>({"docs-sample-code-tabs":r}),ne=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=g({type:r,selectors:[["sample-po-tour-guide-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,o){d&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Tour Labs"),t(),i(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-tour-guide-labs/sample-po-tour-guide-labs.component.html"),t(),i(13,"pre",7),e(14,`<po-button id="sample-po-tour-guide-labs-cta" p-label="Iniciar Tour" p-kind="primary" (p-click)="startTour()"> </po-button>

<po-divider />

<div id="sample-po-tour-guide-labs-form" class="po-row">
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
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-tour-guide-labs/sample-po-tour-guide-labs.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoTourGuideOptions, PoTourGuideService, PoTourGuideStep } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tour-guide-labs',
  templateUrl: './sample-po-tour-guide-labs.component.html',
  providers: [PoTourGuideService],
  standalone: false
})
export class SamplePoTourGuideLabsComponent implements OnInit {
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

  constructor(private poTourGuide: PoTourGuideService) {}

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
    const steps: Array<PoTourGuideStep> = [
      {
        element: '#sample-po-tour-guide-labs-form',
        title: this.stepTitle,
        content: this.stepContent,
        position: 'right'
      },
      {
        element: '#sample-po-tour-guide-labs-cta',
        title: 'Bot\xE3o de in\xEDcio',
        content: 'Reinicie o tour quantas vezes precisar para experimentar op\xE7\xF5es diferentes.',
        position: 'top'
      },
      {
        title: 'Modal final',
        content: 'Passos sem <code>element</code> s\xE3o exibidos como um modal centralizado.'
      }
    ];

    const options: PoTourGuideOptions = {
      allowClose: this.allowClose,
      showProgress: this.showProgress,
      keyboardControl: this.keyboardControl,
      overlayOpacity: this.overlayOpacity,
      nextLabel: this.nextLabel,
      previousLabel: this.previousLabel,
      doneLabel: this.doneLabel,
      progressTemplate: this.progressTemplate
    };

    this.poTourGuide.setSteps(steps).setOptions(options).start();
  }
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-tour-guide-labs"),t(),n(23,"hr")),d&2&&(l(5),y("po-icon "+o.sampleCodeButtonIcon),l(),w(" ",o.sampleCodeButtonLabel),l(),v("ngClass",G(4,xe,o.hideSampleCodeTabs)))},dependencies:[_,F,f,P,oe],encapsulation:2})}return r})();var ae=(()=>{class r{poTourGuide;name;email;birthDate;jobTitle;bio;steps=[{element:"#sample-po-tour-guide-onboarding-name",title:"Identifique-se",content:"Informe seu nome completo. Este \xE9 o dado utilizado nas comunica\xE7\xF5es da plataforma.",position:"right"},{element:"#sample-po-tour-guide-onboarding-email",title:"E-mail corporativo",content:"Utilize um e-mail v\xE1lido \u2014 ele ser\xE1 o seu identificador \xFAnico de acesso.",position:"right"},{element:"#sample-po-tour-guide-onboarding-birthdate",title:"Data de nascimento",content:"A data de nascimento \xE9 utilizada apenas para valida\xE7\xE3o de elegibilidade do cadastro.",position:"right"},{element:"#sample-po-tour-guide-onboarding-jobtitle",title:"Cargo",content:"Indique seu cargo atual para personalizarmos o conte\xFAdo de boas-vindas.",position:"right"},{element:"#sample-po-tour-guide-onboarding-submit",title:"Conclua o cadastro",content:"Ap\xF3s preencher os campos acima, clique em <strong>Salvar</strong> para concluir.",position:"top"}];constructor(m){this.poTourGuide=m}ngAfterViewInit(){this.poTourGuide.setSteps(this.steps).setOptions({showProgress:!0,allowClose:!0})}restartTour(){this.poTourGuide.start()}static \u0275fac=function(d){return new(d||r)(T(h))};static \u0275cmp=g({type:r,selectors:[["sample-po-tour-guide-onboarding"]],standalone:!1,features:[k([h])],decls:13,vars:6,consts:[["f","ngForm"],[1,"po-row"],["id","sample-po-tour-guide-onboarding-name","name","name","p-clean","","p-label","Nome completo","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["id","sample-po-tour-guide-onboarding-email","name","email","p-clean","","p-label","E-mail","p-required","",1,"po-md-6",3,"ngModelChange","ngModel"],["id","sample-po-tour-guide-onboarding-birthdate","name","birthDate","p-clean","","p-label","Data de nascimento",1,"po-md-6",3,"ngModelChange","ngModel"],["id","sample-po-tour-guide-onboarding-jobtitle","name","jobTitle","p-clean","","p-label","Cargo",1,"po-md-6",3,"ngModelChange","ngModel"],["name","bio","p-clean","","p-label","Sobre voc\xEA","p-rows","3",1,"po-md-12",3,"ngModelChange","ngModel"],["id","sample-po-tour-guide-onboarding-submit","p-label","Salvar","p-kind","primary",1,"po-md-3",3,"p-disabled"],["p-label","Reiniciar tour",1,"po-md-3",3,"p-click"]],template:function(d,o){if(d&1){let s=A();i(0,"form",null,0)(2,"div",1)(3,"po-input",2),S("ngModelChange",function(a){return u(s),x(o.name,a)||(o.name=a),c(a)}),t(),i(4,"po-input",3),S("ngModelChange",function(a){return u(s),x(o.email,a)||(o.email=a),c(a)}),t()(),i(5,"div",1)(6,"po-datepicker",4),S("ngModelChange",function(a){return u(s),x(o.birthDate,a)||(o.birthDate=a),c(a)}),t(),i(7,"po-input",5),S("ngModelChange",function(a){return u(s),x(o.jobTitle,a)||(o.jobTitle=a),c(a)}),t()(),i(8,"div",1)(9,"po-textarea",6),S("ngModelChange",function(a){return u(s),x(o.bio,a)||(o.bio=a),c(a)}),t()(),i(10,"div",1),n(11,"po-button",7),i(12,"po-button",8),b("p-click",function(){return o.restartTour()}),t()()()}if(d&2){let s=H(1);l(3),E("ngModel",o.name),l(),E("ngModel",o.email),l(2),E("ngModel",o.birthDate),l(),E("ngModel",o.jobTitle),l(2),E("ngModel",o.bio),l(2),v("p-disabled",s.form.invalid)}},dependencies:[V,z,q,B,I,M,Q,W,J],encapsulation:2})}return r})();var be=r=>({"docs-sample-code-tabs":r}),re=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=g({type:r,selectors:[["sample-po-tour-guide-onboarding-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,o){d&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Tour - Onboarding"),t(),i(4,"a",2),b("click",function(){return o.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-tour-guide-onboarding/sample-po-tour-guide-onboarding.component.html"),t(),i(13,"pre",7),e(14,`<form #f="ngForm">
  <div class="po-row">
    <po-input
      id="sample-po-tour-guide-onboarding-name"
      class="po-md-6"
      name="name"
      [(ngModel)]="name"
      p-clean
      p-label="Nome completo"
      p-required
    >
    </po-input>

    <po-input
      id="sample-po-tour-guide-onboarding-email"
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
      id="sample-po-tour-guide-onboarding-birthdate"
      class="po-md-6"
      name="birthDate"
      [(ngModel)]="birthDate"
      p-clean
      p-label="Data de nascimento"
    >
    </po-datepicker>

    <po-input
      id="sample-po-tour-guide-onboarding-jobtitle"
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
      id="sample-po-tour-guide-onboarding-submit"
      class="po-md-3"
      p-label="Salvar"
      p-kind="primary"
      [p-disabled]="f.form.invalid"
    >
    </po-button>

    <po-button class="po-md-3" p-label="Reiniciar tour" (p-click)="restartTour()"> </po-button>
  </div>
</form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-tour-guide-onboarding/sample-po-tour-guide-onboarding.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, AfterViewInit } from '@angular/core';

import { PoTourGuideService, PoTourGuideStep } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-tour-guide-onboarding',
  templateUrl: './sample-po-tour-guide-onboarding.component.html',
  providers: [PoTourGuideService],
  standalone: false
})
export class SamplePoTourGuideOnboardingComponent implements AfterViewInit {
  name: string;
  email: string;
  birthDate: string;
  jobTitle: string;
  bio: string;

  private readonly steps: Array<PoTourGuideStep> = [
    {
      element: '#sample-po-tour-guide-onboarding-name',
      title: 'Identifique-se',
      content: 'Informe seu nome completo. Este \xE9 o dado utilizado nas comunica\xE7\xF5es da plataforma.',
      position: 'right'
    },
    {
      element: '#sample-po-tour-guide-onboarding-email',
      title: 'E-mail corporativo',
      content: 'Utilize um e-mail v\xE1lido \u2014 ele ser\xE1 o seu identificador \xFAnico de acesso.',
      position: 'right'
    },
    {
      element: '#sample-po-tour-guide-onboarding-birthdate',
      title: 'Data de nascimento',
      content: 'A data de nascimento \xE9 utilizada apenas para valida\xE7\xE3o de elegibilidade do cadastro.',
      position: 'right'
    },
    {
      element: '#sample-po-tour-guide-onboarding-jobtitle',
      title: 'Cargo',
      content: 'Indique seu cargo atual para personalizarmos o conte\xFAdo de boas-vindas.',
      position: 'right'
    },
    {
      element: '#sample-po-tour-guide-onboarding-submit',
      title: 'Conclua o cadastro',
      content: 'Ap\xF3s preencher os campos acima, clique em <strong>Salvar</strong> para concluir.',
      position: 'top'
    }
  ];

  constructor(private poTourGuide: PoTourGuideService) {}

  ngAfterViewInit(): void {
    this.poTourGuide.setSteps(this.steps).setOptions({ showProgress: true, allowClose: true });
  }

  restartTour(): void {
    this.poTourGuide.start();
  }
}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-tour-guide-onboarding"),t(),n(23,"hr")),d&2&&(l(5),y("po-icon "+o.sampleCodeButtonIcon),l(),w(" ",o.sampleCodeButtonLabel),l(),v("ngClass",G(4,be,o.hideSampleCodeTabs)))},dependencies:[_,F,f,P,ae],encapsulation:2})}return r})();var de=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=g({type:r,selectors:[["sample-po-tour-guide-doc"]],standalone:!1,decls:1582,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"language-typescript"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Observable<PoTourGuideStepChangeEvent>"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Observable<PoTourGuideEndEvent>"],["pan","",1,"docs-api-property-type","Observable<PoTourGuideEvent>"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoTourGuideAlignment"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","HTMLElement"],["pan","",1,"docs-api-property-type","(step:","PoTourGuideStep,","index:","number)","=>","void"],["pan","",1,"docs-api-property-type","PoTourGuidePosition"],["pan","",1,"docs-api-property-type","Array<'next'"],["pan","",1,"docs-api-property-type","'previous'"],["pan","",1,"docs-api-property-type","'close'>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","(event:","PoTourGuideStepChangeEvent)","=>","void"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","'next'"],["pan","",1,"docs-api-property-type","'goto'"],["pan","",1,"docs-api-property-type","'start'"],["pan","",1,"docs-api-property-type","PoTourGuideStep"],["pan","",1,"docs-api-property-type","'completed'"],["pan","",1,"docs-api-property-type","'closed'"],["pan","",1,"docs-api-property-type","'destroyed'"]],template:function(d,o){d&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTourGuideModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2),i(5,"h3",3),e(6,"Services"),t(),i(7,"h4",4)(8,"code",5),e(9,"PoTourGuideService"),t()(),i(10,"div",2)(11,"p"),e(12,"Servi\xE7o respons\xE1vel por criar e controlar tours guiados na interface da aplica\xE7\xE3o."),t(),i(13,"p"),e(14,"O "),i(15,"code"),e(16,"PoTourGuideService"),t(),e(17,` permite apresentar uma sequ\xEAncia de passos visuais para orientar
o usu\xE1rio durante o uso de uma tela, funcionalidade ou fluxo espec\xEDfico do sistema.
Ele pode ser utilizado, por exemplo, para apresentar uma nova funcionalidade, guiar um
primeiro acesso ou destacar pontos importantes da interface.`),t(),i(18,"p"),e(19,"O servi\xE7o centraliza a configura\xE7\xE3o do tour, incluindo:"),t(),i(20,"ul")(21,"li"),e(22,"os passos que ser\xE3o exibidos;"),t(),i(23,"li"),e(24,"as op\xE7\xF5es gerais de comportamento;"),t(),i(25,"li"),e(26,"o controle do passo ativo;"),t(),i(27,"li"),e(28,"os eventos emitidos durante o ciclo de vida do tour."),t()(),i(29,"p"),e(30,`A partir dele, a aplica\xE7\xE3o pode iniciar, acompanhar e reagir \xE0 execu\xE7\xE3o do tour por meio
dos eventos p\xFAblicos `),i(31,"code"),e(32,"tourStart$"),t(),e(33,", "),i(34,"code"),e(35,"stepChange$"),t(),e(36," e "),i(37,"code"),e(38,"tourEnd$"),t(),e(39,"."),t(),i(40,"p"),e(41,"Como o servi\xE7o \xE9 disponibilizado com "),i(42,"code"),e(43,"providedIn: 'root'"),t(),e(44,`, n\xE3o \xE9 necess\xE1rio declar\xE1-lo em
`),i(45,"code"),e(46,"providers"),t(),e(47,` nem import\xE1-lo manualmente em m\xF3dulos espec\xEDficos. A mesma inst\xE2ncia \xE9
compartilhada por toda a aplica\xE7\xE3o, facilitando o controle do tour entre diferentes
componentes.`),t(),i(48,"h4"),e(49,"Uso t\xEDpico"),t(),i(50,"p"),e(51,`O fluxo recomendado de utiliza\xE7\xE3o do servi\xE7o, que pode ser encadeado fluentemente, configura os
passos do tour, ajusta op\xE7\xF5es globais e dispara a execu\xE7\xE3o em uma \xFAnica express\xE3o:`),t(),i(52,"pre")(53,"code",6),e(54,`import { Component } from '@angular/core';
import { PoTourGuideService } from '@po-ui/ng-components';

@Component({ selector: 'app-onboarding', templateUrl: './onboarding.component.html' })
export class OnboardingComponent {
  constructor(private poTourGuide: PoTourGuideService) {}

  startTour(): void {
    this.poTourGuide
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
`),i(64,"em"),e(65,"popover"),t(),e(66," do tour, ajudando a prevenir vulnerabilidades de "),i(67,"em"),e(68,"Cross-Site Scripting"),t(),e(69," (XSS)."),t(),i(70,"p"),e(71,"A mesma prote\xE7\xE3o \xE9 aplicada aos "),i(72,"em"),e(73,"labels"),t(),e(74," definidos em "),i(75,"code"),e(76,"PoTourGuideStep"),t(),e(77,` e
`),i(78,"code"),e(79,"PoTourGuideOptions"),t(),e(80," quando constru\xEDdos dinamicamente."),t(),i(81,"p"),e(82,`Ainda assim, recomenda-se validar conte\xFAdos vindos de fontes n\xE3o confi\xE1veis, como entrada
do usu\xE1rio, APIs externas ou `),i(83,"em"),e(84,"query strings"),t(),e(85,", preservando a seguran\xE7a desde a origem dos dados."),t(),i(86,"h4"),e(87,"Tokens customiz\xE1veis"),t(),i(88,"p"),e(89,"\xC9 poss\xEDvel alterar a apar\xEAncia do "),i(90,"em"),e(91,"popover"),t(),e(92," renderizado pelo "),i(93,"code"),e(94,"PoTourGuideService"),t(),e(95,` atrav\xE9s dos tokens
(CSS) consumidos pelo arquivo `),i(96,"code"),e(97,"po-tour-guide.css"),t(),e(98," distribu\xEDdo via "),i(99,"code"),e(100,"@po-ui/style"),t(),e(101,"."),t(),i(102,"blockquote")(103,"p"),e(104,"Para maiores informa\xE7\xF5es, acesse o guia "),i(105,"a",7),e(106,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(107,"."),t()(),i(108,"table")(109,"thead")(110,"tr")(111,"th"),e(112,"Propriedade"),t(),i(113,"th"),e(114,"Descri\xE7\xE3o"),t(),i(115,"th"),e(116,"Valor Padr\xE3o"),t()()(),i(117,"tbody")(118,"tr")(119,"td")(120,"strong"),e(121,"Overlay"),t()(),n(122,"td")(123,"td"),t(),i(124,"tr")(125,"td")(126,"code"),e(127,"--color-secondary-dark-60-alpha-70"),t()(),i(128,"td"),e(129,"Cor do "),i(130,"em"),e(131,"overlay"),t(),e(132," que escurece a p\xE1gina durante o tour"),t(),i(133,"td")(134,"code"),e(135,"rgba(59, 28, 74, 0.7)"),t()()(),i(136,"tr")(137,"td")(138,"strong"),e(139,"Popover"),t()(),n(140,"td")(141,"td"),t(),i(142,"tr")(143,"td")(144,"code"),e(145,"--color-neutral-light-00"),t()(),i(146,"td"),e(147,"Cor de fundo do "),i(148,"em"),e(149,"popover"),t()(),i(150,"td")(151,"code"),e(152,"#ffffff"),t()()(),i(153,"tr")(154,"td")(155,"code"),e(156,"--color-neutral-light-20"),t()(),i(157,"td"),e(158,"Cor da borda do "),i(159,"em"),e(160,"popover"),t()(),i(161,"td")(162,"code"),e(163,"#c9d2d4"),t()()(),i(164,"tr")(165,"td")(166,"code"),e(167,"--border-radius-md"),t()(),i(168,"td"),e(169,"Raio dos cantos do "),i(170,"em"),e(171,"popover"),t(),e(172," e dos bot\xF5es"),t(),i(173,"td")(174,"code"),e(175,"4px"),t()()(),i(176,"tr")(177,"td")(178,"code"),e(179,"--shadow-lg"),t()(),i(180,"td"),e(181,"Sombra projetada pelo "),i(182,"em"),e(183,"popover"),t()(),i(184,"td")(185,"code"),e(186,"0 8px 16px rgba(0, 0, 0, 0.16)"),t()()(),i(187,"tr")(188,"td")(189,"code"),e(190,"--font-family-theme"),t()(),i(191,"td"),e(192,"Fam\xEDlia tipogr\xE1fica do t\xEDtulo, descri\xE7\xE3o, progresso e bot\xF5es"),t(),i(193,"td")(194,"code"),e(195,"Roboto, 'Helvetica Neue', Arial, sans-serif"),t()()(),i(196,"tr")(197,"td")(198,"code"),e(199,"--color-neutral-dark-70"),t()(),i(200,"td"),e(201,"Cor do texto da descri\xE7\xE3o do passo"),t(),i(202,"td")(203,"code"),e(204,"#2c3739"),t()()(),i(205,"tr")(206,"td")(207,"code"),e(208,"--color-neutral-dark-95"),t()(),i(209,"td"),e(210,"Cor do texto do t\xEDtulo do passo"),t(),i(211,"td")(212,"code"),e(213,"#1d2426"),t()()(),i(214,"tr")(215,"td")(216,"code"),e(217,"--color-neutral-mid-60"),t()(),i(218,"td"),e(219,"Cor do texto do indicador de progresso e do \xEDcone do bot\xE3o fechar"),t(),i(220,"td")(221,"code"),e(222,"#4a5c60"),t()()(),i(223,"tr")(224,"td")(225,"strong"),e(226,"Bot\xE3o prim\xE1rio ("),i(227,"code"),e(228,"Pr\xF3ximo"),t(),e(229," / "),i(230,"code"),e(231,"Finalizar"),t(),e(232,")"),t()(),n(233,"td")(234,"td"),t(),i(235,"tr")(236,"td")(237,"code"),e(238,"--color-action-default"),t()(),i(239,"td"),e(240,"Cor de fundo e da borda do bot\xE3o prim\xE1rio"),t(),i(241,"td")(242,"code"),e(243,"#002a8d"),t()()(),i(244,"tr")(245,"td")(246,"code"),e(247,"--color-action-hover"),t()(),i(248,"td"),e(249,"Cor de fundo e da borda do bot\xE3o prim\xE1rio no estado "),i(250,"em"),e(251,"hover"),t()(),i(252,"td")(253,"code"),e(254,"#00368a"),t()()(),i(255,"tr")(256,"td")(257,"code"),e(258,"--color-action-pressed"),t()(),i(259,"td"),e(260,"Cor de fundo e da borda do bot\xE3o prim\xE1rio no estado "),i(261,"em"),e(262,"pressed"),t()(),i(263,"td")(264,"code"),e(265,"#001f6c"),t()()(),i(266,"tr")(267,"td")(268,"strong"),e(269,"Bot\xE3o secund\xE1rio ("),i(270,"code"),e(271,"Anterior"),t(),e(272,")"),t()(),n(273,"td")(274,"td"),t(),i(275,"tr")(276,"td")(277,"code"),e(278,"--color-action-default"),t()(),i(279,"td"),e(280,"Cor do texto e da borda do bot\xE3o secund\xE1rio"),t(),i(281,"td")(282,"code"),e(283,"#002a8d"),t()()(),i(284,"tr")(285,"td")(286,"code"),e(287,"--color-action-hover"),t()(),i(288,"td"),e(289,"Cor de fundo, do texto e da borda do bot\xE3o secund\xE1rio no "),i(290,"em"),e(291,"hover"),t()(),i(292,"td")(293,"code"),e(294,"#00368a"),t()()(),i(295,"tr")(296,"td")(297,"code"),e(298,"--color-action-pressed"),t()(),i(299,"td"),e(300,"Cor de fundo, do texto e da borda do bot\xE3o secund\xE1rio no "),i(301,"em"),e(302,"pressed"),t()(),i(303,"td")(304,"code"),e(305,"#001f6c"),t()()(),i(306,"tr")(307,"td")(308,"strong"),e(309,"Bot\xE3o terci\xE1rio ("),i(310,"code"),e(311,"Fechar"),t(),e(312," / "),i(313,"code"),e(314,"X"),t(),e(315,")"),t()(),n(316,"td")(317,"td"),t(),i(318,"tr")(319,"td")(320,"code"),e(321,"--color-neutral-light-10"),t()(),i(322,"td"),e(323,"Cor de fundo do bot\xE3o fechar no estado "),i(324,"em"),e(325,"hover"),t()(),i(326,"td")(327,"code"),e(328,"#dee9eb"),t()()(),i(329,"tr")(330,"td")(331,"code"),e(332,"--color-neutral-light-20"),t()(),i(333,"td"),e(334,"Cor de fundo do bot\xE3o fechar no estado "),i(335,"em"),e(336,"pressed"),t()(),i(337,"td")(338,"code"),e(339,"#c9d2d4"),t()()(),i(340,"tr")(341,"td")(342,"strong"),e(343,"Foco vis\xEDvel"),t()(),n(344,"td")(345,"td"),t(),i(346,"tr")(347,"td")(348,"code"),e(349,"--outline-color-focused"),t()(),i(350,"td"),e(351,"Cor do "),i(352,"em"),e(353,"outline"),t(),e(354," aplicado a bot\xF5es em foco"),t(),i(355,"td")(356,"code"),e(357,"var(--color-action-focus)"),t(),e(358," ("),i(359,"code"),e(360,"#c9357d"),t(),e(361,")"),t()()()()(),i(362,"h4",8),e(363,"Propriedades"),t(),i(364,"table",9)(365,"tr",10)(366,"th",11),e(367,"Nome"),t(),i(368,"th",11),e(369,"Tipo"),t(),i(370,"th",11),e(371,"Padr\xE3o"),t(),i(372,"th",11),e(373,"Descri\xE7\xE3o"),t()(),i(374,"tr",12)(375,"td",13)(376,"div",14)(377,"span",15),e(378,"p-step-change"),n(379,"br"),t()()(),i(380,"td",16)(381,"code",17),e(382,"Observable<PoTourGuideStepChangeEvent>"),t()(),i(383,"td",18),e(384,"-"),t(),i(385,"td",19)(386,"p")(387,"code"),e(388,"Observable"),t(),e(389," que emite um "),i(390,"code"),e(391,"PoTourGuideStepChangeEvent"),t(),e(392," a cada mudan\xE7a de passo durante a execu\xE7\xE3o do tour."),t(),i(393,"p"),e(394,"As aplica\xE7\xF5es consumidoras podem assinar este "),i(395,"code"),e(396,"Observable"),t(),e(397,` para reagir \xE0 navega\xE7\xE3o do usu\xE1rio,
atualizar a UI conforme o passo ativo, registrar telemetria de progresso ou disparar l\xF3gica de
neg\xF3cio contextual ao passo corrente.`),t()()(),i(398,"tr",12)(399,"td",13)(400,"div",14)(401,"span",15),e(402,"p-tour-end"),n(403,"br"),t()()(),i(404,"td",16)(405,"code",20),e(406,"Observable<PoTourGuideEndEvent>"),t()(),i(407,"td",18),e(408,"-"),t(),i(409,"td",19)(410,"p")(411,"code"),e(412,"Observable"),t(),e(413," que emite um "),i(414,"code"),e(415,"PoTourGuideEndEvent"),t(),e(416," no encerramento de cada execu\xE7\xE3o do tour."),t(),i(417,"p"),e(418,"\xC9 emitido exatamente uma vez por execu\xE7\xE3o, sempre ap\xF3s a \xFAltima emiss\xE3o de "),i(419,"code"),e(420,"stepChange$"),t(),e(421,` e ap\xF3s a
limpeza do estado interno do servi\xE7o. As aplica\xE7\xF5es consumidoras podem assinar este `),i(422,"code"),e(423,"Observable"),t(),e(424,`
para registrar telemetria de conclus\xE3o ou de abandono do tour, executar limpezas de UI ou disparar
l\xF3gica de neg\xF3cio dependente do encerramento da jornada do usu\xE1rio.`),t()()(),i(425,"tr",12)(426,"td",13)(427,"div",14)(428,"span",15),e(429,"p-tour-start"),n(430,"br"),t()()(),i(431,"td",16)(432,"code",21),e(433,"Observable<PoTourGuideEvent>"),t()(),i(434,"td",18),e(435,"-"),t(),i(436,"td",19)(437,"p")(438,"code"),e(439,"Observable"),t(),e(440," que emite um "),i(441,"code"),e(442,"PoTourGuideEvent"),t(),e(443," no in\xEDcio de cada execu\xE7\xE3o do tour."),t(),i(444,"p"),e(445,`\xC9 emitido exatamente uma vez por execu\xE7\xE3o, imediatamente ap\xF3s a configura\xE7\xE3o da inst\xE2ncia do tour
e antes da primeira emiss\xE3o de `),i(446,"code"),e(447,"stepChange$"),t(),e(448,`. As aplica\xE7\xF5es consumidoras podem assinar este
`),i(449,"code"),e(450,"Observable"),t(),e(451,` para registrar telemetria do in\xEDcio do tour, exibir mensagens contextuais ou disparar
l\xF3gica de neg\xF3cio dependente do in\xEDcio da jornada do usu\xE1rio.`),t()()()(),i(452,"h3"),e(453,"Interfaces"),t(),i(454,"h4",22)(455,"code",5),e(456,"PoTourGuideStep"),t()(),i(457,"div",2)(458,"p"),e(459,"Interface que descreve um passo individual do tour guiado executado pelo "),i(460,"code"),e(461,"PoTourGuideService"),t(),e(462,"."),t(),i(463,"p"),e(464,`Cada passo representa uma parada do tour, com um elemento opcional a ser destacado na p\xE1gina,
conte\xFAdo textual ou em HTML, configura\xE7\xF5es de posicionamento do popover, `),i(465,"em"),e(466,"labels"),t(),e(467,` espec\xEDficos
dos bot\xF5es de navega\xE7\xE3o e `),i(468,"em"),e(469,"hooks"),t(),e(470," de ciclo de vida do passo."),t(),i(471,"blockquote")(472,"p"),e(473,"A propriedade "),i(474,"code"),e(475,"content"),t(),e(476," \xE9 a \xFAnica obrigat\xF3ria e corresponde ao corpo do popover apresentado ao usu\xE1rio."),t()()(),i(477,"h4",8),e(478,"Propriedades"),t(),i(479,"table",9)(480,"tr",10)(481,"th",11),e(482,"Nome"),t(),i(483,"th",11),e(484,"Tipo"),t(),i(485,"th",11),e(486,"Descri\xE7\xE3o"),t()(),i(487,"tr",12)(488,"td",13)(489,"div",14)(490,"span",15),e(491," align"),n(492,"br"),t()()(),i(493,"td",16)(494,"code",23),e(495,"PoTourGuideAlignment"),t()(),i(496,"td",19)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),i(500,"p"),e(501,"Alinhamento do popover ao longo do eixo da posi\xE7\xE3o configurada em "),i(502,"code"),e(503,"position"),t(),e(504,"."),t(),i(505,"p"),e(506,"Valores aceitos: 'start' | 'center' | 'end'"),t()()(),i(507,"tr",12)(508,"td",13)(509,"div",14)(510,"span",15),e(511," content"),n(512,"br"),t()()(),i(513,"td",16)(514,"code",24),e(515,"string"),t()(),i(516,"td",19)(517,"p"),e(518,"Conte\xFAdo principal do passo, exibido no corpo do popover. Aceita texto puro ou HTML."),t(),i(519,"blockquote")(520,"p")(521,"strong"),e(522,"Aviso de seguran\xE7a:"),t(),e(523,` por padr\xE3o, o PO UI sanitiza o conte\xFAdo HTML recebido antes de repass\xE1-lo
ao popover do tour, reduzindo o risco de vulnerabilidades de `),i(524,"em"),e(525,"Cross-Site Scripting"),t(),e(526," (XSS)."),t(),i(527,"p"),e(528,`Mesmo com essa prote\xE7\xE3o, recomenda-se que aplica\xE7\xF5es consumidoras evitem enviar conte\xFAdo HTML
proveniente de fontes n\xE3o confi\xE1veis sem valida\xE7\xE3o pr\xE9via, como entradas de usu\xE1rio ou dados externos.
A sanitiza\xE7\xE3o realizada pelo PO UI atua como uma camada de seguran\xE7a, mas n\xE3o substitui boas pr\xE1ticas
de valida\xE7\xE3o e controle dos dados na origem.`),t()()()(),i(529,"tr",12)(530,"td",13)(531,"div",14)(532,"span",15),e(533," doneLabel"),n(534,"br"),t()()(),i(535,"td",16)(536,"code",24),e(537,"string"),t()(),i(538,"td",19)(539,"em")(540,"strong"),e(541,"(opcional)"),t()(),i(542,"p"),e(543,"Sobrescreve o "),i(544,"em"),e(545,"label"),t(),e(546,' do bot\xE3o "Finalizar" exclusivamente para este passo.'),t(),i(547,"p"),e(548,"Quando omitido, \xE9 utilizado o valor configurado em "),i(549,"code"),e(550,"PoTourGuideOptions.doneLabel"),t(),e(551," ou o padr\xE3o do PO UI ("),i(552,"code"),e(553,"Finalizar"),t(),e(554,")."),t()()(),i(555,"tr",12)(556,"td",13)(557,"div",14)(558,"span",15),e(559," element"),n(560,"br"),t()()(),i(561,"td",16)(562,"code",24),e(563,"string "),t(),i(564,"code",25),e(565," HTMLElement"),t()(),i(566,"td",19)(567,"em")(568,"strong"),e(569,"(opcional)"),t()(),i(570,"p"),e(571,"Elemento da p\xE1gina que o passo deve destacar."),t(),i(572,"p"),e(573,"Aceita um seletor CSS v\xE1lido ("),i(574,"code"),e(575,"'#id'"),t(),e(576,", "),i(577,"code"),e(578,"'.class'"),t(),e(579,", "),i(580,"code"),e(581,"'tag'"),t(),e(582,", "),i(583,"code"),e(584,"'.container > .item'"),t(),e(585,") ou uma refer\xEAncia direta a um "),i(586,"code"),e(587,"HTMLElement"),t(),e(588,`
(por exemplo, obtida via `),i(589,"code"),e(590,"@ViewChild"),t(),e(591," ou "),i(592,"code"),e(593,"ElementRef.nativeElement"),t(),e(594,")."),t(),i(595,"p"),e(596,`Quando a propriedade \xE9 omitida, o popover \xE9 exibido como um modal centralizado na viewport, sem destacar
nenhum elemento da p\xE1gina.`),t()()(),i(597,"tr",12)(598,"td",13)(599,"div",14)(600,"span",15),e(601," nextLabel"),n(602,"br"),t()()(),i(603,"td",16)(604,"code",24),e(605,"string"),t()(),i(606,"td",19)(607,"em")(608,"strong"),e(609,"(opcional)"),t()(),i(610,"p"),e(611,"Sobrescreve o "),i(612,"em"),e(613,"label"),t(),e(614,' do bot\xE3o "Pr\xF3ximo" exclusivamente para este passo.'),t(),i(615,"p"),e(616,"Quando omitido, \xE9 utilizado o valor configurado em "),i(617,"code"),e(618,"PoTourGuideOptions.nextLabel"),t(),e(619," ou o padr\xE3o do PO UI ("),i(620,"code"),e(621,"Pr\xF3ximo"),t(),e(622,")."),t()()(),i(623,"tr",12)(624,"td",13)(625,"div",14)(626,"span",15),e(627," onBeforeHighlight"),n(628,"br"),t()()(),i(629,"td",16)(630,"code",26),e(631,"(step: PoTourGuideStep, index: number) => void"),t()(),i(632,"td",19)(633,"em")(634,"strong"),e(635,"(opcional)"),t()(),i(636,"p")(637,"em"),e(638,"Hook"),t(),e(639," executado imediatamente antes de o passo ser destacado na p\xE1gina, sincronamente \xE0 transi\xE7\xE3o."),t(),i(640,"p"),e(641,"Recebe como argumentos o pr\xF3prio passo ("),i(642,"code"),e(643,"step"),t(),e(644,") e o seu \xEDndice ("),i(645,"code"),e(646,"index"),t(),e(647,`, com base zero) na lista de passos
configurada via `),i(648,"code"),e(649,"PoTourGuideService.setSteps"),t(),e(650,"."),t(),i(651,"p"),e(652,"\xDAtil para preparar a UI antes do destaque (por exemplo, abrir um menu lateral que cont\xE9m o elemento alvo)."),t()()(),i(653,"tr",12)(654,"td",13)(655,"div",14)(656,"span",15),e(657," onDeselected"),n(658,"br"),t()()(),i(659,"td",16)(660,"code",26),e(661,"(step: PoTourGuideStep, index: number) => void"),t()(),i(662,"td",19)(663,"em")(664,"strong"),e(665,"(opcional)"),t()(),i(666,"p")(667,"em"),e(668,"Hook"),t(),e(669," executado quando o passo deixa de estar ativo, seja por avan\xE7o, retrocesso ou encerramento do tour."),t(),i(670,"p"),e(671,"Recebe como argumentos o pr\xF3prio passo ("),i(672,"code"),e(673,"step"),t(),e(674,") e o seu \xEDndice ("),i(675,"code"),e(676,"index"),t(),e(677,", com base zero) na lista de passos."),t(),i(678,"p"),e(679,"\xDAtil para reverter altera\xE7\xF5es de UI realizadas em "),i(680,"code"),e(681,"onBeforeHighlight"),t(),e(682," ou "),i(683,"code"),e(684,"onHighlighted"),t(),e(685,"."),t()()(),i(686,"tr",12)(687,"td",13)(688,"div",14)(689,"span",15),e(690," onHighlighted"),n(691,"br"),t()()(),i(692,"td",16)(693,"code",26),e(694,"(step: PoTourGuideStep, index: number) => void"),t()(),i(695,"td",19)(696,"em")(697,"strong"),e(698,"(opcional)"),t()(),i(699,"p")(700,"em"),e(701,"Hook"),t(),e(702," executado imediatamente ap\xF3s o passo ser destacado na p\xE1gina."),t(),i(703,"p"),e(704,"Recebe como argumentos o pr\xF3prio passo ("),i(705,"code"),e(706,"step"),t(),e(707,") e o seu \xEDndice ("),i(708,"code"),e(709,"index"),t(),e(710,", com base zero) na lista de passos."),t(),i(711,"p"),e(712,"\xDAtil para registrar telemetria de visualiza\xE7\xE3o ou disparar l\xF3gica de neg\xF3cio dependente da exibi\xE7\xE3o do passo."),t()()(),i(713,"tr",12)(714,"td",13)(715,"div",14)(716,"span",15),e(717," position"),n(718,"br"),t()()(),i(719,"td",16)(720,"code",27),e(721,"PoTourGuidePosition"),t()(),i(722,"td",19)(723,"em")(724,"strong"),e(725,"(opcional)"),t()(),i(726,"p"),e(727,"Posi\xE7\xE3o preferida do popover em rela\xE7\xE3o ao elemento destacado."),t(),i(728,"p"),e(729,"Valores aceitos:"),t(),i(730,"ul")(731,"li")(732,"code"),e(733,"top"),t(),e(734,": o popover \xE9 renderizado acima do elemento destacado."),t(),i(735,"li")(736,"code"),e(737,"right"),t(),e(738,": o popover \xE9 renderizado \xE0 direita do elemento destacado."),t(),i(739,"li")(740,"code"),e(741,"bottom"),t(),e(742,": o popover \xE9 renderizado abaixo do elemento destacado."),t(),i(743,"li")(744,"code"),e(745,"left"),t(),e(746,": o popover \xE9 renderizado \xE0 esquerda do elemento destacado."),t(),i(747,"li")(748,"code"),e(749,"over"),t(),e(750,": o popover \xE9 renderizado sobreposto ao elemento destacado."),t(),i(751,"li")(752,"code"),e(753,"auto"),t(),e(754,": a posi\xE7\xE3o \xE9 calculada automaticamente conforme o espa\xE7o dispon\xEDvel na viewport."),t()()()(),i(755,"tr",12)(756,"td",13)(757,"div",14)(758,"span",15),e(759," previousLabel"),n(760,"br"),t()()(),i(761,"td",16)(762,"code",24),e(763,"string"),t()(),i(764,"td",19)(765,"em")(766,"strong"),e(767,"(opcional)"),t()(),i(768,"p"),e(769,"Sobrescreve o "),i(770,"em"),e(771,"label"),t(),e(772,' do bot\xE3o "Anterior" exclusivamente para este passo.'),t(),i(773,"p"),e(774,"Quando omitido, \xE9 utilizado o valor configurado em "),i(775,"code"),e(776,"PoTourGuideOptions.previousLabel"),t(),e(777," ou o padr\xE3o do PO UI ("),i(778,"code"),e(779,"Anterior"),t(),e(780,")."),t()()(),i(781,"tr",12)(782,"td",13)(783,"div",14)(784,"span",15),e(785," showButtons"),n(786,"br"),t()()(),i(787,"td",16)(788,"code",28),e(789,"Array<'next' "),t(),i(790,"code",29),e(791," 'previous' "),t(),i(792,"code",30),e(793," 'close'>"),t()(),i(794,"td",19)(795,"em")(796,"strong"),e(797,"(opcional)"),t()(),i(798,"p"),e(799,"Lista que filtra quais bot\xF5es de navega\xE7\xE3o devem ser exibidos no popover deste passo."),t(),i(800,"p"),e(801,"Aceita qualquer combina\xE7\xE3o dos valores "),i(802,"code"),e(803,"'next'"),t(),e(804,", "),i(805,"code"),e(806,"'previous'"),t(),e(807," e "),i(808,"code"),e(809,"'close'"),t(),e(810,`. Apenas os bot\xF5es presentes
na lista s\xE3o renderizados, permitindo, por exemplo, ocultar o bot\xE3o "Anterior" no primeiro passo
ou exibir somente o bot\xE3o "Fechar" em um passo final.`),t(),i(811,"p"),e(812,"Quando a propriedade \xE9 omitida, todos os bot\xF5es padr\xE3o ("),i(813,"code"),e(814,"'next'"),t(),e(815,", "),i(816,"code"),e(817,"'previous'"),t(),e(818," e "),i(819,"code"),e(820,"'close'"),t(),e(821,`) s\xE3o exibidos.
Quando informada como array vazio, nenhum bot\xE3o de navega\xE7\xE3o \xE9 exibido \u2014 o controle do tour passa a ser
100% program\xE1tico via `),i(822,"code"),e(823,"next()"),t(),e(824,", "),i(825,"code"),e(826,"previous()"),t(),e(827,", "),i(828,"code"),e(829,"goTo()"),t(),e(830," e "),i(831,"code"),e(832,"close()"),t(),e(833," do "),i(834,"code"),e(835,"PoTourGuideService"),t(),e(836,"."),t()()(),i(837,"tr",12)(838,"td",13)(839,"div",14)(840,"span",15),e(841," title"),n(842,"br"),t()()(),i(843,"td",16)(844,"code",24),e(845,"string"),t()(),i(846,"td",19)(847,"em")(848,"strong"),e(849,"(opcional)"),t()(),i(850,"p"),e(851,"T\xEDtulo exibido no cabe\xE7alho do popover do passo."),t(),i(852,"p"),e(853,"Quando omitido, o popover \xE9 renderizado apenas com o conte\xFAdo definido em "),i(854,"code"),e(855,"content"),t(),e(856,"."),t()()()(),i(857,"h4",22)(858,"code",5),e(859,"PoTourGuideOptions"),t()(),i(860,"div",2)(861,"p"),e(862,"Interface que descreve as op\xE7\xF5es globais de configura\xE7\xE3o do tour guiado executado pelo "),i(863,"code"),e(864,"PoTourGuideService"),t(),e(865,"."),t(),i(866,"p"),e(867,`Os valores informados s\xE3o aplicados a toda a execu\xE7\xE3o do tour e podem ser sobrescritos pontualmente
em cada `),i(868,"code"),e(869,"PoTourGuideStep"),t(),e(870," atrav\xE9s das propriedades espec\xEDficas de "),i(871,"em"),e(872,"labels"),t(),e(873," ("),i(874,"code"),e(875,"nextLabel"),t(),e(876,", "),i(877,"code"),e(878,"previousLabel"),t(),e(879,`,
`),i(880,"code"),e(881,"doneLabel"),t(),e(882,") \u2014 neste caso, o valor declarado no passo prevalece sobre o valor declarado nas op\xE7\xF5es globais."),t(),i(883,"p"),e(884,`Todas as propriedades s\xE3o opcionais. Quando omitidas, s\xE3o aplicados os valores padr\xE3o do PO UI documentados
em cada propriedade atrav\xE9s da anota\xE7\xE3o `),i(885,"code"),e(886,"@default"),t(),e(887,"."),t()(),i(888,"h4",8),e(889,"Propriedades"),t(),i(890,"table",9)(891,"tr",10)(892,"th",11),e(893,"Nome"),t(),i(894,"th",11),e(895,"Tipo"),t(),i(896,"th",11),e(897,"Descri\xE7\xE3o"),t()(),i(898,"tr",12)(899,"td",13)(900,"div",14)(901,"span",15),e(902," allowClose"),n(903,"br"),t()()(),i(904,"td",16)(905,"code",31),e(906,"boolean"),t()(),i(907,"td",19)(908,"em")(909,"strong"),e(910,"(opcional)"),t()(),i(911,"p"),e(912,'Permite que o usu\xE1rio encerre o tour clicando fora do popover ou utilizando o bot\xE3o "Fechar" (X).'),t(),i(913,"p"),e(914,"Quando definido como "),i(915,"code"),e(916,"false"),t(),e(917,`, o tour somente pode ser encerrado de forma program\xE1tica (por exemplo,
atrav\xE9s do m\xE9todo `),i(918,"code"),e(919,"close()"),t(),e(920," do "),i(921,"code"),e(922,"PoTourGuideService"),t(),e(923,") ou ao avan\xE7ar al\xE9m do \xFAltimo passo."),t()()(),i(924,"tr",12)(925,"td",13)(926,"div",14)(927,"span",15),e(928," closeLabel"),n(929,"br"),t()()(),i(930,"td",16)(931,"code",24),e(932,"string"),t()(),i(933,"td",19)(934,"em")(935,"strong"),e(936,"(opcional)"),t()(),i(937,"p")(938,"em"),e(939,"Label"),t(),e(940,' padr\xE3o do bot\xE3o "Fechar" (X) exibido no canto do popover do tour.'),t()()(),i(941,"tr",12)(942,"td",13)(943,"div",14)(944,"span",15),e(945," doneLabel"),n(946,"br"),t()()(),i(947,"td",16)(948,"code",24),e(949,"string"),t()(),i(950,"td",19)(951,"em")(952,"strong"),e(953,"(opcional)"),t()(),i(954,"p")(955,"em"),e(956,"Label"),t(),e(957,' padr\xE3o do bot\xE3o "Finalizar" aplicado ao \xFAltimo passo do tour.'),t(),i(958,"p"),e(959,"Pode ser sobrescrito individualmente por passo atrav\xE9s de "),i(960,"code"),e(961,"PoTourGuideStep.doneLabel"),t(),e(962,"."),t()()(),i(963,"tr",12)(964,"td",13)(965,"div",14)(966,"span",15),e(967," keyboardControl"),n(968,"br"),t()()(),i(969,"td",16)(970,"code",31),e(971,"boolean"),t()(),i(972,"td",19)(973,"em")(974,"strong"),e(975,"(opcional)"),t()(),i(976,"p"),e(977,"Habilita o controle do tour por teclado."),t(),i(978,"p"),e(979,"Quando ativo, s\xE3o interpretadas as seguintes teclas:"),t(),i(980,"ul")(981,"li")(982,"code"),e(983,"Esc"),t(),e(984,": encerra o tour (equivalente a "),i(985,"code"),e(986,"close()"),t(),e(987,")."),t(),i(988,"li")(989,"code"),e(990,"\u2192"),t(),e(991," (seta para a direita) ou "),i(992,"code"),e(993,"Enter"),t(),e(994,": avan\xE7a para o pr\xF3ximo passo (equivalente a "),i(995,"code"),e(996,"next()"),t(),e(997,")."),t(),i(998,"li")(999,"code"),e(1e3,"\u2190"),t(),e(1001," (seta para a esquerda): retrocede para o passo anterior (equivalente a "),i(1002,"code"),e(1003,"previous()"),t(),e(1004,")."),t()()()(),i(1005,"tr",12)(1006,"td",13)(1007,"div",14)(1008,"span",15),e(1009," nextLabel"),n(1010,"br"),t()()(),i(1011,"td",16)(1012,"code",24),e(1013,"string"),t()(),i(1014,"td",19)(1015,"em")(1016,"strong"),e(1017,"(opcional)"),t()(),i(1018,"p")(1019,"em"),e(1020,"Label"),t(),e(1021,' padr\xE3o do bot\xE3o "Pr\xF3ximo" aplicado a todos os passos do tour.'),t(),i(1022,"p"),e(1023,"Pode ser sobrescrito individualmente por passo atrav\xE9s de "),i(1024,"code"),e(1025,"PoTourGuideStep.nextLabel"),t(),e(1026,"."),t()()(),i(1027,"tr",12)(1028,"td",13)(1029,"div",14)(1030,"span",15),e(1031," onStepChange"),n(1032,"br"),t()()(),i(1033,"td",16)(1034,"code",32),e(1035,"(event: PoTourGuideStepChangeEvent) => void"),t()(),i(1036,"td",19)(1037,"em")(1038,"strong"),e(1039,"(opcional)"),t()(),i(1040,"p"),e(1041,"Fun\xE7\xE3o de "),i(1042,"em"),e(1043,"callback"),t(),e(1044," invocada a cada mudan\xE7a de passo durante a execu\xE7\xE3o do tour."),t(),i(1045,"p"),e(1046,"Recebe como argumento um evento "),i(1047,"code"),e(1048,"PoTourGuideStepChangeEvent"),t(),e(1049,` contendo o passo ativo, seu \xEDndice, a dire\xE7\xE3o
da transi\xE7\xE3o (`),i(1050,"code"),e(1051,"'next'"),t(),e(1052,", "),i(1053,"code"),e(1054,"'previous'"),t(),e(1055,", "),i(1056,"code"),e(1057,"'goto'"),t(),e(1058," ou "),i(1059,"code"),e(1060,"'start'"),t(),e(1061,") e o total de passos do tour."),t(),i(1062,"p"),e(1063,"O "),i(1064,"em"),e(1065,"callback"),t(),e(1066," \xE9 executado antes da emiss\xE3o do evento correspondente em "),i(1067,"code"),e(1068,"PoTourGuideService.stepChange$"),t(),e(1069,`,
permitindo a aplica\xE7\xE3o consumidora reagir \xE0 transi\xE7\xE3o antes que outros assinantes do `),i(1070,"code"),e(1071,"Observable"),t(),e(1072," sejam notificados."),t()()(),i(1073,"tr",12)(1074,"td",13)(1075,"div",14)(1076,"span",15),e(1077," overlayOpacity"),n(1078,"br"),t()()(),i(1079,"td",16)(1080,"code",33),e(1081,"number"),t()(),i(1082,"td",19)(1083,"em")(1084,"strong"),e(1085,"(opcional)"),t()(),i(1086,"p"),e(1087,"Define a opacidade do "),i(1088,"em"),e(1089,"overlay"),t(),e(1090," que escurece a p\xE1gina ao redor do elemento destacado."),t(),i(1091,"p"),e(1092,"O valor deve estar contido no intervalo "),i(1093,"code"),e(1094,"[0, 1]"),t(),e(1095,", sendo "),i(1096,"code"),e(1097,"0"),t(),e(1098," totalmente transparente e "),i(1099,"code"),e(1100,"1"),t(),e(1101,` totalmente opaco.
Valores fora deste intervalo s\xE3o ajustados (`),i(1102,"em"),e(1103,"clamped"),t(),e(1104,") para os limites mais pr\xF3ximos."),t()()(),i(1105,"tr",12)(1106,"td",13)(1107,"div",14)(1108,"span",15),e(1109," popoverClass"),n(1110,"br"),t()()(),i(1111,"td",16)(1112,"code",24),e(1113,"string"),t()(),i(1114,"td",19)(1115,"em")(1116,"strong"),e(1117,"(opcional)"),t()(),i(1118,"p"),e(1119,"Classe CSS adicional aplicada ao elemento raiz do popover do tour."),t(),i(1120,"p"),e(1121,"\xDAtil para customiza\xE7\xF5es pontuais sem alterar o tema global do PO UI. A classe padr\xE3o "),i(1122,"code"),e(1123,"po-tour-guide-popover"),t(),e(1124,`
\xE9 sempre aplicada e preservada \u2014 o valor informado \xE9 concatenado a ela.`),t()()(),i(1125,"tr",12)(1126,"td",13)(1127,"div",14)(1128,"span",15),e(1129," previousLabel"),n(1130,"br"),t()()(),i(1131,"td",16)(1132,"code",24),e(1133,"string"),t()(),i(1134,"td",19)(1135,"em")(1136,"strong"),e(1137,"(opcional)"),t()(),i(1138,"p")(1139,"em"),e(1140,"Label"),t(),e(1141,' padr\xE3o do bot\xE3o "Anterior" aplicado a todos os passos do tour.'),t(),i(1142,"p"),e(1143,"Pode ser sobrescrito individualmente por passo atrav\xE9s de "),i(1144,"code"),e(1145,"PoTourGuideStep.previousLabel"),t(),e(1146,"."),t()()(),i(1147,"tr",12)(1148,"td",13)(1149,"div",14)(1150,"span",15),e(1151," progressTemplate"),n(1152,"br"),t()()(),i(1153,"td",16)(1154,"code",24),e(1155,"string"),t()(),i(1156,"td",19)(1157,"em")(1158,"strong"),e(1159,"(opcional)"),t()(),i(1160,"p"),e(1161,"Template do texto de progresso exibido no popover quando "),i(1162,"code"),e(1163,"showProgress"),t(),e(1164," est\xE1 habilitado."),t(),i(1165,"p"),e(1166,"Aceita os seguintes "),i(1167,"em"),e(1168,"placeholders"),t(),e(1169,", que s\xE3o substitu\xEDdos em tempo de renderiza\xE7\xE3o:"),t(),i(1170,"ul")(1171,"li")(1172,"code"),e(1173,"current"),t(),e(1174,": n\xFAmero do passo atual, com base 1 (ou seja, o primeiro passo \xE9 exibido como "),i(1175,"code"),e(1176,"1"),t(),e(1177,")."),t(),i(1178,"li")(1179,"code"),e(1180,"total"),t(),e(1181,": n\xFAmero total de passos do tour."),t()(),i(1182,"p"),e(1183,"Quando o template informado n\xE3o cont\xE9m nenhum dos "),i(1184,"em"),e(1185,"placeholders"),t(),e(1186,` suportados, o texto \xE9 exibido
literalmente e um aviso \xE9 registrado em `),i(1187,"code"),e(1188,"console.warn"),t(),e(1189,"."),t()()(),i(1190,"tr",12)(1191,"td",13)(1192,"div",14)(1193,"span",15),e(1194," showProgress"),n(1195,"br"),t()()(),i(1196,"td",16)(1197,"code",31),e(1198,"boolean"),t()(),i(1199,"td",19)(1200,"em")(1201,"strong"),e(1202,"(opcional)"),t()(),i(1203,"p"),e(1204,"Exibe o indicador textual de progresso do tour no popover (por exemplo, "),i(1205,"code"),e(1206,"1 de 5"),t(),e(1207,")."),t(),i(1208,"p"),e(1209,"O texto pode ser personalizado atrav\xE9s da propriedade "),i(1210,"code"),e(1211,"progressTemplate"),t(),e(1212,"."),t()()()(),i(1213,"h4",22)(1214,"code",5),e(1215,"PoTourGuideEvent"),t()(),i(1216,"div",2)(1217,"p"),e(1218,"Interface que descreve o evento emitido pelo "),i(1219,"code"),e(1220,"PoTourGuideService"),t(),e(1221," no in\xEDcio da execu\xE7\xE3o de um tour guiado."),t(),i(1222,"p"),e(1223,"\xC9 publicado no "),i(1224,"code"),e(1225,"Observable"),t(),i(1226,"code"),e(1227,"PoTourGuideService.tourStart$"),t(),e(1228,` exatamente uma vez por execu\xE7\xE3o, imediatamente
ap\xF3s a configura\xE7\xE3o da inst\xE2ncia do tour e antes da emiss\xE3o do primeiro `),i(1229,"code"),e(1230,"PoTourGuideStepChangeEvent"),t(),e(1231,` em
`),i(1232,"code"),e(1233,"PoTourGuideService.stepChange$"),t(),e(1234,"."),t(),i(1235,"p"),e(1236,"As aplica\xE7\xF5es consumidoras podem assinar "),i(1237,"code"),e(1238,"tourStart$"),t(),e(1239,` para registrar telemetria do in\xEDcio do tour,
exibir mensagens contextuais ou disparar l\xF3gica de neg\xF3cio dependente do in\xEDcio da jornada do usu\xE1rio.`),t()(),i(1240,"h4",8),e(1241,"Propriedades"),t(),i(1242,"table",9)(1243,"tr",10)(1244,"th",11),e(1245,"Nome"),t(),i(1246,"th",11),e(1247,"Tipo"),t(),i(1248,"th",11),e(1249,"Descri\xE7\xE3o"),t()(),i(1250,"tr",12)(1251,"td",13)(1252,"div",14)(1253,"span",15),e(1254," startIndex"),n(1255,"br"),t()()(),i(1256,"td",16)(1257,"code",33),e(1258,"number"),t()(),i(1259,"td",19)(1260,"p"),e(1261,"\xCDndice do passo inicial do tour, com base zero."),t(),i(1262,"p"),e(1263,"Corresponde ao argumento "),i(1264,"code"),e(1265,"startIndex"),t(),e(1266," informado a "),i(1267,"code"),e(1268,"PoTourGuideService.start"),t(),e(1269,`. Quando o m\xE9todo \xE9 invocado
sem argumentos, o valor \xE9 `),i(1270,"code"),e(1271,"0"),t(),e(1272,"."),t()()(),i(1273,"tr",12)(1274,"td",13)(1275,"div",14)(1276,"span",15),e(1277," timestamp"),n(1278,"br"),t()()(),i(1279,"td",16)(1280,"code",33),e(1281,"number"),t()(),i(1282,"td",19)(1283,"p"),e(1284,"Marca de tempo, em milissegundos, do momento de emiss\xE3o do evento, obtida a partir de "),i(1285,"code"),e(1286,"Date.now()"),t(),e(1287,"."),t(),i(1288,"p"),e(1289,"\xDAtil para correlacionar o in\xEDcio do tour com outros eventos de telemetria da aplica\xE7\xE3o."),t()()(),i(1290,"tr",12)(1291,"td",13)(1292,"div",14)(1293,"span",15),e(1294," totalSteps"),n(1295,"br"),t()()(),i(1296,"td",16)(1297,"code",33),e(1298,"number"),t()(),i(1299,"td",19)(1300,"p"),e(1301,"Total de passos configurados no tour, equivalente ao tamanho do array passado a "),i(1302,"code"),e(1303,"PoTourGuideService.setSteps"),t(),e(1304,"."),t()()()(),i(1305,"h4",22)(1306,"code",5),e(1307,"PoTourGuideStepChangeEvent"),t()(),i(1308,"div",2)(1309,"p"),e(1310,"Interface que descreve o evento emitido pelo "),i(1311,"code"),e(1312,"PoTourGuideService"),t(),e(1313," a cada mudan\xE7a de passo durante a execu\xE7\xE3o do tour."),t(),i(1314,"p"),e(1315,"\xC9 publicado no "),i(1316,"code"),e(1317,"Observable"),t(),i(1318,"code"),e(1319,"PoTourGuideService.stepChange$"),t(),e(1320,` toda vez que o passo ativo \xE9 alterado, seja por
intera\xE7\xE3o do usu\xE1rio (cliques nos bot\xF5es "Pr\xF3ximo"/"Anterior" ou navega\xE7\xE3o por teclado) ou por chamada
program\xE1tica aos m\xE9todos `),i(1321,"code"),e(1322,"next"),t(),e(1323,", "),i(1324,"code"),e(1325,"previous"),t(),e(1326,", "),i(1327,"code"),e(1328,"goTo"),t(),e(1329," e "),i(1330,"code"),e(1331,"start"),t(),e(1332," do "),i(1333,"code"),e(1334,"PoTourGuideService"),t(),e(1335,"."),t(),i(1336,"p"),e(1337,"As aplica\xE7\xF5es consumidoras podem assinar "),i(1338,"code"),e(1339,"stepChange$"),t(),e(1340,` para reagir \xE0 navega\xE7\xE3o do usu\xE1rio, atualizar a
UI conforme o passo ativo, registrar telemetria de progresso ou disparar l\xF3gica de neg\xF3cio contextual.`),t()(),i(1341,"h4",8),e(1342,"Propriedades"),t(),i(1343,"table",9)(1344,"tr",10)(1345,"th",11),e(1346,"Nome"),t(),i(1347,"th",11),e(1348,"Tipo"),t(),i(1349,"th",11),e(1350,"Descri\xE7\xE3o"),t()(),i(1351,"tr",12)(1352,"td",13)(1353,"div",14)(1354,"span",15),e(1355," direction"),n(1356,"br"),t()()(),i(1357,"td",16)(1358,"code",34),e(1359,"'next' "),t(),i(1360,"code",29),e(1361," 'previous' "),t(),i(1362,"code",35),e(1363," 'goto' "),t(),i(1364,"code",36),e(1365," 'start'"),t()(),i(1366,"td",19)(1367,"p"),e(1368,"Dire\xE7\xE3o da transi\xE7\xE3o que originou a mudan\xE7a de passo."),t(),i(1369,"p"),e(1370,"Valores aceitos:"),t(),i(1371,"ul")(1372,"li")(1373,"code"),e(1374,"next"),t(),e(1375,": a transi\xE7\xE3o foi originada pelo m\xE9todo "),i(1376,"code"),e(1377,"PoTourGuideService.next"),t(),e(1378,' ou pelo bot\xE3o "Pr\xF3ximo" do popover.'),t(),i(1379,"li")(1380,"code"),e(1381,"previous"),t(),e(1382,": a transi\xE7\xE3o foi originada pelo m\xE9todo "),i(1383,"code"),e(1384,"PoTourGuideService.previous"),t(),e(1385,' ou pelo bot\xE3o "Anterior" do popover.'),t(),i(1386,"li")(1387,"code"),e(1388,"goto"),t(),e(1389,": a transi\xE7\xE3o foi originada pela chamada ao m\xE9todo "),i(1390,"code"),e(1391,"PoTourGuideService.goTo"),t(),e(1392," com um \xEDndice arbitr\xE1rio."),t(),i(1393,"li")(1394,"code"),e(1395,"start"),t(),e(1396,`: a transi\xE7\xE3o corresponde \xE0 exibi\xE7\xE3o do primeiro passo logo ap\xF3s a inicializa\xE7\xE3o do tour
pelo m\xE9todo `),i(1397,"code"),e(1398,"PoTourGuideService.start"),t(),e(1399,"."),t()()()(),i(1400,"tr",12)(1401,"td",13)(1402,"div",14)(1403,"span",15),e(1404," index"),n(1405,"br"),t()()(),i(1406,"td",16)(1407,"code",33),e(1408,"number"),t()(),i(1409,"td",19)(1410,"p"),e(1411,"\xCDndice, com base zero, do passo ativo ap\xF3s a transi\xE7\xE3o."),t(),i(1412,"p"),e(1413,"Est\xE1 sempre contido no intervalo "),i(1414,"code"),e(1415,"[0, totalSteps - 1]"),t(),e(1416,"."),t()()(),i(1417,"tr",12)(1418,"td",13)(1419,"div",14)(1420,"span",15),e(1421," step"),n(1422,"br"),t()()(),i(1423,"td",16)(1424,"code",37),e(1425,"PoTourGuideStep"),t()(),i(1426,"td",19)(1427,"p"),e(1428,"Passo do tour que se tornou ativo ap\xF3s a transi\xE7\xE3o."),t(),i(1429,"p"),e(1430,"Corresponde ao elemento da lista "),i(1431,"code"),e(1432,"steps"),t(),e(1433," (configurada via "),i(1434,"code"),e(1435,"PoTourGuideService.setSteps"),t(),e(1436,`) cujo \xEDndice \xE9
igual ao valor de `),i(1437,"code"),e(1438,"index"),t(),e(1439," neste evento."),t()()(),i(1440,"tr",12)(1441,"td",13)(1442,"div",14)(1443,"span",15),e(1444," totalSteps"),n(1445,"br"),t()()(),i(1446,"td",16)(1447,"code",33),e(1448,"number"),t()(),i(1449,"td",19)(1450,"p"),e(1451,"Total de passos configurados no tour, equivalente ao tamanho do array passado a "),i(1452,"code"),e(1453,"PoTourGuideService.setSteps"),t(),e(1454,"."),t()()()(),i(1455,"h4",22)(1456,"code",5),e(1457,"PoTourGuideEndEvent"),t()(),i(1458,"div",2)(1459,"p"),e(1460,"Interface que descreve o evento emitido pelo "),i(1461,"code"),e(1462,"PoTourGuideService"),t(),e(1463," no encerramento da execu\xE7\xE3o de um tour guiado."),t(),i(1464,"p"),e(1465,"\xC9 publicado no "),i(1466,"code"),e(1467,"Observable"),t(),i(1468,"code"),e(1469,"PoTourGuideService.tourEnd$"),t(),e(1470,` exatamente uma vez por execu\xE7\xE3o, sempre ap\xF3s a
emiss\xE3o do \xFAltimo `),i(1471,"code"),e(1472,"PoTourGuideStepChangeEvent"),t(),e(1473," em "),i(1474,"code"),e(1475,"PoTourGuideService.stepChange$"),t(),e(1476,` e ap\xF3s a limpeza do estado
interno do servi\xE7o.`),t(),i(1477,"p"),e(1478,"As aplica\xE7\xF5es consumidoras podem assinar "),i(1479,"code"),e(1480,"tourEnd$"),t(),e(1481,` para registrar telemetria de conclus\xE3o ou de
abandono do tour, executar limpezas de UI ou disparar l\xF3gica de neg\xF3cio dependente do encerramento
da jornada do usu\xE1rio.`),t()(),i(1482,"h4",8),e(1483,"Propriedades"),t(),i(1484,"table",9)(1485,"tr",10)(1486,"th",11),e(1487,"Nome"),t(),i(1488,"th",11),e(1489,"Tipo"),t(),i(1490,"th",11),e(1491,"Descri\xE7\xE3o"),t()(),i(1492,"tr",12)(1493,"td",13)(1494,"div",14)(1495,"span",15),e(1496," lastIndex"),n(1497,"br"),t()()(),i(1498,"td",16)(1499,"code",33),e(1500,"number"),t()(),i(1501,"td",19)(1502,"p"),e(1503,"\xCDndice, com base zero, do \xFAltimo passo ativo antes do encerramento do tour."),t(),i(1504,"p"),e(1505,"Quando "),i(1506,"code"),e(1507,"reason"),t(),e(1508," \xE9 "),i(1509,"code"),e(1510,"'completed'"),t(),e(1511,", corresponde ao \xEDndice do \xFAltimo passo da lista ("),i(1512,"code"),e(1513,"totalSteps - 1"),t(),e(1514,`).
Quando `),i(1515,"code"),e(1516,"reason"),t(),e(1517," \xE9 "),i(1518,"code"),e(1519,"'closed'"),t(),e(1520," ou "),i(1521,"code"),e(1522,"'destroyed'"),t(),e(1523,`, corresponde ao \xEDndice do passo que estava em exibi\xE7\xE3o
no momento do encerramento.`),t()()(),i(1524,"tr",12)(1525,"td",13)(1526,"div",14)(1527,"span",15),e(1528," reason"),n(1529,"br"),t()()(),i(1530,"td",16)(1531,"code",38),e(1532,"'completed' "),t(),i(1533,"code",39),e(1534," 'closed' "),t(),i(1535,"code",40),e(1536," 'destroyed'"),t()(),i(1537,"td",19)(1538,"p"),e(1539,"Motivo do encerramento do tour."),t(),i(1540,"p"),e(1541,"Valores aceitos:"),t(),i(1542,"ul")(1543,"li")(1544,"code"),e(1545,"completed"),t(),e(1546,": o usu\xE1rio avan\xE7ou al\xE9m do \xFAltimo passo do tour, concluindo a jornada por completo."),t(),i(1547,"li")(1548,"code"),e(1549,"closed"),t(),e(1550,": o tour foi encerrado antes da conclus\xE3o, seja pelo usu\xE1rio (tecla "),i(1551,"code"),e(1552,"Esc"),t(),e(1553,`, bot\xE3o "Fechar"
ou clique fora do popover quando `),i(1554,"code"),e(1555,"PoTourGuideOptions.allowClose"),t(),e(1556,` est\xE1 habilitado) ou pela aplica\xE7\xE3o
consumidora atrav\xE9s das chamadas a `),i(1557,"code"),e(1558,"PoTourGuideService.close"),t(),e(1559," ou "),i(1560,"code"),e(1561,"PoTourGuideService.exit"),t(),e(1562,"."),t(),i(1563,"li")(1564,"code"),e(1565,"destroyed"),t(),e(1566,`: o encerramento foi for\xE7ado pela destrui\xE7\xE3o da inst\xE2ncia do servi\xE7o \u2014 cen\xE1rio raro,
normalmente observado em testes automatizados ou em ciclos de vida at\xEDpicos da aplica\xE7\xE3o.`),t()()()(),i(1567,"tr",12)(1568,"td",13)(1569,"div",14)(1570,"span",15),e(1571," totalSteps"),n(1572,"br"),t()()(),i(1573,"td",16)(1574,"code",33),e(1575,"number"),t()(),i(1576,"td",19)(1577,"p"),e(1578,"Total de passos configurados no tour, equivalente ao tamanho do array passado a "),i(1579,"code"),e(1580,"PoTourGuideService.setSteps"),t(),e(1581,"."),t()()()()())},encapsulation:2})}return r})();var le=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,d){this.route=m,this.router=d}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let d=m.view;this.activeTab=d||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(d){return new(d||r)(T(N),T(U))};static \u0275cmp=g({type:r,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Tour Guide",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(d,o){d&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),b("p-click",function(){return o.changeTab("doc")}),n(3,"sample-po-tour-guide-doc"),t(),i(4,"po-tab",3),b("p-click",function(){return o.changeTab("web")}),n(5,"sample-po-tour-guide-basic-view")(6,"sample-po-tour-guide-labs-view")(7,"sample-po-tour-guide-onboarding-view"),t()()()),d&2&&(v("p-actions",o.actions),l(2),v("p-active",o.activeTab==="doc"),l(2),v("p-hide",o.hidePoWebSample)("p-active",o.activeTab==="web"))},dependencies:[Y,f,P,ie,ne,re,de],encapsulation:2})}return r})();var Te=[{path:"",component:le}],me=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=O({type:r});static \u0275inj=D({imports:[j.forChild(Te),j]})}return r})();var Qe=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=O({type:r});static \u0275inj=D({imports:[Z,me]})}return r})();export{Qe as DocPoTourGuideModule};
