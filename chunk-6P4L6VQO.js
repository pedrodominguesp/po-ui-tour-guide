import{o as k,p as ae}from"./chunk-AT3MKFJ3.js";import{A,Gb as g,Hb as v,Ja as oe,U as ee,_ as W,a as R,ab as ne,tb as ie,w as N,ya as te}from"./chunk-GCMU57WK.js";import{Ea as c,Fa as o,Ga as t,Ha as a,I as M,Mb as P,Mc as D,Nc as K,O as h,Oa as I,Oc as X,P as E,Pa as u,Pc as L,Qc as J,Va as q,Wa as z,Xa as j,_a as U,_b as Q,bb as T,cb as e,cd as Z,eb as w,ed as $,gb as x,gd as H,ha as m,hb as S,ib as C,ma as F,oa as s,pa as O,rb as y,xb as G,yb as Y}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var le=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","checkbox","p-label","PO Checkbox"]],template:function(l,n){l&1&&a(0,"po-checkbox",0)},dependencies:[A],encapsulation:2})}return i})();var Ee=i=>({"docs-sample-code-tabs":i}),pe=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Basic"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox name="checkbox" p-label="PO Checkbox"> </po-checkbox>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-basic/sample-po-checkbox-basic.component.ts"),t(),o(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-checkbox-basic',
  templateUrl: './sample-po-checkbox-basic.component.html',
  standalone: false
})
export class SamplePoCheckboxBasicComponent {}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-basic"),t(),a(23,"hr")),l&2&&(m(5),T("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),c("ngClass",y(4,Ee,n.hideSampleCodeTabs)))},dependencies:[P,k,g,v,le],encapsulation:2})}return i})();var me=(()=>{class i{helperText;checkbox;disabled;help;size;event;label;labelTextWrap;compactLabel;sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"},{label:"large",value:"large"}];ngOnInit(){this.restore()}changeEvent(r){this.event=r}restore(){this.helperText="",this.checkbox=void 0,this.disabled=!1,this.event=void 0,this.help="",this.label=void 0,this.size="medium",this.compactLabel=!1}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-labs"]],standalone:!1,decls:19,vars:20,consts:[["f","ngForm"],["name","checkbox",3,"ngModelChange","p-change","p-keydown","ngModel","p-helper","p-disabled","p-help","p-label","p-size","p-label-text-wrap","p-compact-label"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","label","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","disabled","p-label","Disabled",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","labelTextWrap","p-label","Label Text Wrap",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","compactLabel","p-label","Compact Label",1,"po-sm-3",3,"ngModelChange","ngModel"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(l,n){if(l&1){let d=I();o(0,"po-checkbox",1),C("ngModelChange",function(p){return h(d),S(n.checkbox,p)||(n.checkbox=p),E(p)}),u("p-change",function(){return n.changeEvent("p-change")})("p-keydown",function(){return n.changeEvent("p-keydown")}),t(),a(1,"po-divider"),o(2,"div",2),a(3,"po-info",3),G(4,"json"),a(5,"po-info",4),t(),a(6,"po-divider"),o(7,"form",null,0)(9,"div",2)(10,"po-input",5),C("ngModelChange",function(p){return h(d),S(n.label,p)||(n.label=p),E(p)}),t(),o(11,"po-input",6),C("ngModelChange",function(p){return h(d),S(n.help,p)||(n.help=p),E(p)}),t(),o(12,"po-input",7),C("ngModelChange",function(p){return h(d),S(n.helperText,p)||(n.helperText=p),E(p)}),t(),o(13,"po-switch",8),C("ngModelChange",function(p){return h(d),S(n.disabled,p)||(n.disabled=p),E(p)}),t(),o(14,"po-switch",9),C("ngModelChange",function(p){return h(d),S(n.labelTextWrap,p)||(n.labelTextWrap=p),E(p)}),t(),o(15,"po-switch",10),C("ngModelChange",function(p){return h(d),S(n.compactLabel,p)||(n.compactLabel=p),E(p)}),t(),o(16,"po-radio-group",11),C("ngModelChange",function(p){return h(d),S(n.size,p)||(n.size=p),E(p)}),t()(),o(17,"div",2)(18,"po-button",12),u("p-click",function(){return n.restore()}),t()()()}l&2&&(x("ngModel",n.checkbox),c("p-helper",n.helperText)("p-disabled",n.disabled)("p-help",n.help)("p-label",n.label)("p-size",n.size)("p-label-text-wrap",n.labelTextWrap)("p-compact-label",n.compactLabel),m(3),c("p-value",Y(4,18,n.checkbox)),m(2),c("p-value",n.event),m(5),x("ngModel",n.label),m(),x("ngModel",n.help),m(),x("ngModel",n.helperText),m(),x("ngModel",n.disabled),m(),x("ngModel",n.labelTextWrap),m(),x("ngModel",n.compactLabel),m(),x("ngModel",n.size),c("p-options",n.sizeOptions))},dependencies:[J,D,K,L,X,N,R,ee,oe,A,te,ne,Q],encapsulation:2})}return i})();var fe=i=>({"docs-sample-code-tabs":i}),re=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox Labs"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.html"),t(),o(13,"pre",7),e(14,`<po-checkbox
  name="checkbox"
  [(ngModel)]="checkbox"
  [p-helper]="helperText"
  [p-disabled]="disabled"
  [p-help]="help"
  [p-label]="label"
  [p-size]="size"
  (p-change)="changeEvent('p-change')"
  (p-keydown)="changeEvent('p-keydown')"
  [p-label-text-wrap]="labelTextWrap"
  [p-compact-label]="compactLabel"
>
</po-checkbox>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="checkbox | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-switch class="po-sm-3" name="disabled" [(ngModel)]="disabled" p-label="Disabled"> </po-switch>
    <po-switch class="po-sm-3" name="labelTextWrap" [(ngModel)]="labelTextWrap" p-label="Label Text Wrap"> </po-switch>
    <po-switch class="po-sm-3" name="compactLabel" [(ngModel)]="compactLabel" p-label="Compact Label"> </po-switch>

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
    <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-labs/sample-po-checkbox-labs.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';
import { PoRadioGroupOption } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-checkbox-labs',
  templateUrl: './sample-po-checkbox-labs.component.html',
  standalone: false
})
export class SamplePoCheckboxLabsComponent implements OnInit {
  helperText: string;
  checkbox: boolean | null;
  disabled: boolean;
  help: string;
  size: string;
  event: string;
  label: string;
  labelTextWrap: boolean;
  compactLabel: boolean;

  sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
    { label: 'large', value: 'large' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.helperText = '';
    this.checkbox = undefined;
    this.disabled = false;
    this.event = undefined;
    this.help = '';
    this.label = undefined;
    this.size = 'medium';
    this.compactLabel = false;
  }
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-labs"),t(),a(23,"hr")),l&2&&(m(5),T("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),c("ngClass",y(4,fe,n.hideSampleCodeTabs)))},dependencies:[P,k,g,v,me],encapsulation:2})}return i})();var de=(()=>{class i{modalTerm;acceptance=!1;primaryAction={action:()=>{this.modalTerm.close()},disabled:!0,label:"Confirm"};static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-acceptance-term"]],viewQuery:function(l,n){if(l&1&&q(W,7),l&2){let d;z(d=j())&&(n.modalTerm=d.first)}},standalone:!1,decls:23,vars:2,consts:[["modalTerm",""],["p-label","View term",3,"p-click"],["p-title","Acceptance Term",3,"p-primary-action"],[1,"po-row"],[1,"po-sm-12"],[1,"po-font-text-large-bold"],[1,"po-row","po-p-1"],["name","acceptance","p-label","I have read and agree to the terms of service and privacy",3,"ngModelChange","p-change","ngModel"]],template:function(l,n){if(l&1){let d=I();o(0,"po-button",1),u("p-click",function(){h(d);let p=U(2);return E(p.open())}),t(),o(1,"po-modal",2,0)(3,"div",3)(4,"div",4)(5,"h3",5),e(6,"MIT License"),t()(),o(7,"div",4)(8,"h4"),e(9,"Copyright (c) 2019 PO UI"),t()(),a(10,"po-divider",4),o(11,"div",4)(12,"p"),e(13,' Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: '),t(),a(14,"br"),o(15,"p"),e(16," The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. "),t(),a(17,"br"),o(18,"p"),e(19,' THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. '),t()()(),a(20,"po-divider"),o(21,"div",6)(22,"po-checkbox",7),C("ngModelChange",function(p){return h(d),S(n.acceptance,p)||(n.acceptance=p),E(p)}),u("p-change",function(){return n.primaryAction.disabled=!n.acceptance}),t()()()}l&2&&(m(),c("p-primary-action",n.primaryAction),m(21),x("ngModel",n.acceptance))},dependencies:[D,L,N,R,A,W],encapsulation:2})}return i})();var ke=i=>({"docs-sample-code-tabs":i}),ce=(()=>{class i{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-acceptance-term-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,n){l&1&&(a(0,"br"),o(1,"blockquote",0)(2,"label",1),e(3,"PO Checkbox - Acceptance Term"),t(),o(4,"a",2),u("click",function(){return n.toggleSampleCodeTabs()}),a(5,"span"),e(6),t()(),o(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.html"),t(),o(13,"pre",7),e(14,`<po-button p-label="View term" (p-click)="modalTerm.open()"> </po-button>

<po-modal #modalTerm p-title="Acceptance Term" [p-primary-action]="primaryAction">
  <div class="po-row">
    <div class="po-sm-12">
      <h3 class="po-font-text-large-bold">MIT License</h3>
    </div>

    <div class="po-sm-12">
      <h4>Copyright (c) 2019 PO UI</h4>
    </div>

    <po-divider class="po-sm-12"></po-divider>

    <div class="po-sm-12">
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
        documentation files (the "Software"), to deal in the Software without restriction, including without limitation
        the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
        to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      </p>
      <br />
      <p>
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of
        the Software.
      </p>
      <br />
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
        THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
        CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.
      </p>
    </div>
  </div>

  <po-divider></po-divider>

  <div class="po-row po-p-1">
    <po-checkbox
      name="acceptance"
      [(ngModel)]="acceptance"
      p-label="I have read and agree to the terms of service and privacy"
      (p-change)="primaryAction.disabled = !acceptance"
    >
    </po-checkbox>
  </div>
</po-modal>
`),t()()(),o(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-checkbox-acceptance-term/sample-po-checkbox-acceptance-term.component.ts"),t(),o(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-checkbox-acceptance-term',
  templateUrl: './sample-po-checkbox-acceptance-term.component.html',
  standalone: false
})
export class SamplePoCheckboxAcceptanceTermComponent {
  @ViewChild(PoModalComponent, { static: true }) modalTerm: PoModalComponent;

  acceptance: boolean = false;

  primaryAction: PoModalAction = {
    action: () => {
      this.modalTerm.close();
    },
    disabled: true,
    label: 'Confirm'
  };
}
`),t()()()()(),o(21,"div",10),a(22,"sample-po-checkbox-acceptance-term"),t(),a(23,"hr")),l&2&&(m(5),T("po-icon "+n.sampleCodeButtonIcon),m(),w(" ",n.sampleCodeButtonLabel),m(),c("ngClass",y(4,ke,n.hideSampleCodeTabs)))},dependencies:[P,k,g,v,de],encapsulation:2})}return i})();var se=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275cmp=s({type:i,selectors:[["sample-po-checkbox-doc"]],standalone:!1,decls:702,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"],["href","https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance-enhanced"],["href","https://www.w3.org/WAI/WCAG21/Understanding/use-of-color"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"]],template:function(l,n){l&1&&(o(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),o(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),o(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),o(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),o(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),o(16,"h3",3),e(17,"Componente"),t(),o(18,"h4",4)(19,"code",5),e(20,"PoCheckboxComponent"),t()(),o(21,"div",2)(22,"p"),e(23,"O componente "),o(24,"code"),e(25,"po-checkbox"),t(),e(26,` exibe uma caixa de op\xE7\xE3o com um texto ao lado, na qual \xE9 poss\xEDvel marcar e desmarcar atrav\xE9s tanto
no `),o(27,"em"),e(28,"click"),t(),e(29," do "),o(30,"em"),e(31,"mouse"),t(),e(32," quanto por meio da tecla "),o(33,"em"),e(34,"space"),t(),e(35," quando estiver com foco."),t(),o(36,"p"),e(37,`Cada op\xE7\xE3o poder\xE1 receber um estado de marcado, desmarcado, indeterminado/mixed e desabilitado, como tamb\xE9m uma a\xE7\xE3o que ser\xE1 disparada quando
ocorrer mudan\xE7as do valor.`),t(),o(38,"blockquote")(39,"p"),e(40,"O "),o(41,"em"),e(42,"model"),t(),e(43," deste componente aceitar\xE1 valores igual \xE0 "),o(44,"code"),e(45,"true"),t(),e(46,", "),o(47,"code"),e(48,"false"),t(),e(49," ou "),o(50,"code"),e(51,"null"),t(),e(52," para quando for indeterminado/mixed."),t()(),o(53,"p")(54,"strong"),e(55,"Acessibilidade tratada no componente:"),t()(),o(56,"p"),e(57,"Algumas diretrizes de acessibilidade j\xE1 s\xE3o tratadas no componente, internamente, e n\xE3o podem ser alteradas pelo propriet\xE1rio do conte\xFAdo. S\xE3o elas:"),t(),o(58,"ul")(59,"li"),e(60,"O componente foi desenvolvido utilizando controles padr\xF5es HTML para permitir a identifica\xE7\xE3o do mesmo na interface por tecnologias assistivas. "),o(61,"a",6),e(62,"WCAG 4.1.2: Name, Role, Value"),t()(),o(63,"li"),e(64,"A \xE1rea do foco precisar ter uma espessura de pelo menos 2 pixels CSS e o foco n\xE3o pode ficar escondido por outros elementos da tela. "),o(65,"a",7),e(66,"WCAG 2.4.12: Focus Appearance"),t()(),o(67,"li"),e(68,"A cor n\xE3o deve ser o \xFAnico meio para diferenciar o componente do seu estado marcado e desmarcado. "),o(69,"a",8),e(70,"WGAG 1.4.1: Use of Color, 3.2.4: Consistent Identification"),t()()(),o(71,"h4"),e(72,"Tokens customiz\xE1veis"),t(),o(73,"p"),e(74,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),o(75,"blockquote")(76,"p"),e(77,"Para maiores informa\xE7\xF5es, acesse o guia "),o(78,"a",9),e(79,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(80,"."),t()(),o(81,"table")(82,"thead")(83,"tr")(84,"th"),e(85,"Propriedade"),t(),o(86,"th"),e(87,"Descri\xE7\xE3o"),t(),o(88,"th"),e(89,"Valor Padr\xE3o"),t()()(),o(90,"tbody")(91,"tr")(92,"td")(93,"strong"),e(94,"Default Values"),t()(),a(95,"td")(96,"td"),t(),o(97,"tr")(98,"td")(99,"code"),e(100,"--border-color"),t()(),o(101,"td"),e(102,"Cor da borda"),t(),o(103,"td")(104,"code"),e(105,"var(--color-neutral-dark-70)"),t()()(),o(106,"tr")(107,"td")(108,"code"),e(109,"--color-unchecked"),t()(),o(110,"td"),e(111,"Cor quando n\xE3o selecionado"),t(),o(112,"td")(113,"code"),e(114,"var(--color-neutral-light-00)"),t()()(),o(115,"tr")(116,"td")(117,"code"),e(118,"--color-checked"),t()(),o(119,"td"),e(120,"Cor quando selecionado"),t(),o(121,"td")(122,"code"),e(123,"var(--color-action-default)"),t()()(),o(124,"tr")(125,"td")(126,"code"),e(127,"--field-container-title-justify"),t()(),o(128,"td"),e(129,"Alinhamento horizontal do t\xEDtulo ("),o(130,"code"),e(131,"justify-content"),t(),e(132,")"),t(),o(133,"td")(134,"code"),e(135,"space-between"),t()()(),o(136,"tr")(137,"td")(138,"code"),e(139,"--field-container-title-flex"),t()(),o(140,"td"),e(141,"Flex do t\xEDtulo ("),o(142,"code"),e(143,"flex"),t(),e(144,")"),t(),o(145,"td")(146,"code"),e(147,"1 auto"),t()()(),o(148,"tr")(149,"td")(150,"strong"),e(151,"Hover"),t()(),a(152,"td")(153,"td"),t(),o(154,"tr")(155,"td")(156,"code"),e(157,"--color-hover"),t()(),o(158,"td"),e(159,"Cor principal no estado hover"),t(),o(160,"td")(161,"code"),e(162,"var(--color-action-hover)"),t()()(),o(163,"tr")(164,"td")(165,"code"),e(166,"--shadow-color-hover"),t()(),o(167,"td"),e(168,"Cor da sombra no estado hover"),t(),o(169,"td")(170,"code"),e(171,"var(--color-brand-01-lighter)"),t()()(),o(172,"tr")(173,"td")(174,"strong"),e(175,"Focused"),t()(),a(176,"td")(177,"td"),t(),o(178,"tr")(179,"td")(180,"code"),e(181,"--outline-color-focused"),t()(),o(182,"td"),e(183,"Cor do outline do estado de focus"),t(),o(184,"td")(185,"code"),e(186,"var(--color-action-focus)"),t()()(),o(187,"tr")(188,"td")(189,"strong"),e(190,"Disabled"),t()(),a(191,"td")(192,"td"),t(),o(193,"tr")(194,"td")(195,"code"),e(196,"--color-unchecked-disabled"),t(),e(197," \xA0"),t(),o(198,"td"),e(199,"Cor pricipal quando n\xE3o selecionado no estado disabled\xA0"),t(),o(200,"td")(201,"code"),e(202,"var(--color-action-disabled)"),t()()(),o(203,"tr")(204,"td")(205,"code"),e(206,"--color-checked-disabled"),t(),e(207," \xA0"),t(),o(208,"td"),e(209,"Cor pricipal quando selecionado no estado disabled"),t(),o(210,"td")(211,"code"),e(212,"var(--color-neutral-dark-70)"),t()()()()()(),o(213,"div",10)(214,"h4",11),e(215,"Seletor"),t(),o(216,"pre",12),e(217,`<po-checkbox
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    (p-blur)="EventEmitter"
    (p-change)="EventEmitter"
    p-compact-label="boolean"
    p-disabled="boolean"
    p-help="string"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    name="string"
    p-helper="PoHelperOptions | string"
    p-size="string" >
</po-checkbox>
`),t()(),o(218,"h4",13),e(219,"Propriedades"),t(),o(220,"table",14)(221,"tr",15)(222,"th",16),e(223,"Nome"),t(),o(224,"th",16),e(225,"Tipo"),t(),o(226,"th",16),e(227,"Padr\xE3o"),t(),o(228,"th",16),e(229,"Descri\xE7\xE3o"),t()(),o(230,"tr",17)(231,"td",18)(232,"div",19)(233,"span",20),e(234," (p-additional-help)"),a(235,"br"),t()(),o(236,"div",21),e(237,"Deprecated"),t()(),o(238,"td",22)(239,"code",23),e(240,"EventEmitter"),t()(),o(241,"td",24),e(242,"-"),t(),o(243,"td",25)(244,"em")(245,"strong"),e(246,"(opcional)"),t()(),o(247,"p"),e(248,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),o(249,"blockquote")(250,"p"),e(251,"Essa propriedade est\xE1 "),o(252,"strong"),e(253,"depreciada"),t(),e(254," e ser\xE1 removida na vers\xE3o "),o(255,"code"),e(256,"23.x.x"),t(),e(257,". Recomendamos utilizar a propriedade "),o(258,"code"),e(259,"p-helper"),t(),e(260," que oferece mais recursos e flexibilidade."),t()()()(),o(261,"tr",17)(262,"td",18)(263,"div",26)(264,"span",27),e(265," p-additional-help-tooltip"),a(266,"br"),t()(),o(267,"div",21),e(268,"Deprecated"),t()(),o(269,"td",22)(270,"code",28),e(271,"string"),t()(),o(272,"td",24),e(273,"-"),t(),o(274,"td",25)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),o(278,"p"),e(279,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),o(280,"code"),e(281,"po-helper"),t(),e(282,`.
`),o(283,"strong"),e(284,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),o(285,"blockquote")(286,"p"),e(287,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),o(288,"blockquote")(289,"p"),e(290,"Essa propriedade est\xE1 "),o(291,"strong"),e(292,"depreciada"),t(),e(293," e ser\xE1 removida na vers\xE3o "),o(294,"code"),e(295,"23.x.x"),t(),e(296,". Recomendamos utilizar a propriedade "),o(297,"code"),e(298,"p-helper"),t(),e(299," que oferece mais recursos e flexibilidade."),t()()()(),o(300,"tr",17)(301,"td",18)(302,"div",26)(303,"span",27),e(304," p-append-in-body"),a(305,"br"),t()()(),o(306,"td",22)(307,"code",29),e(308,"boolean"),t()(),o(309,"td",24)(310,"p")(311,"code"),e(312,"false"),t()()(),o(313,"td",25)(314,"em")(315,"strong"),e(316,"(opcional)"),t()(),o(317,"p"),e(318,"Define que o popover ("),o(319,"code"),e(320,"p-helper"),t(),e(321,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),o(322,"blockquote")(323,"p"),e(324,"Quando utilizado com "),o(325,"code"),e(326,"p-helper"),t(),e(327,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),o(328,"tr",17)(329,"td",18)(330,"div",26)(331,"span",27),e(332," p-auto-focus"),a(333,"br"),t()()(),o(334,"td",22)(335,"code",29),e(336,"boolean"),t()(),o(337,"td",24)(338,"p")(339,"code"),e(340,"false"),t()()(),o(341,"td",25)(342,"em")(343,"strong"),e(344,"(opcional)"),t()(),o(345,"p"),e(346,"Aplica foco no elemento ao ser iniciado."),t(),o(347,"blockquote")(348,"p"),e(349,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),o(350,"tr",17)(351,"td",18)(352,"div",19)(353,"span",20),e(354," (p-blur)"),a(355,"br"),t()()(),o(356,"td",22)(357,"code",23),e(358,"EventEmitter"),t()(),o(359,"td",24),e(360,"-"),t(),o(361,"td",25)(362,"em")(363,"strong"),e(364,"(opcional)"),t()(),o(365,"p"),e(366,"Evento disparado ao sair do campo."),t()()(),o(367,"tr",17)(368,"td",18)(369,"div",19)(370,"span",20),e(371," (p-change)"),a(372,"br"),t()()(),o(373,"td",22)(374,"code",23),e(375,"EventEmitter"),t()(),o(376,"td",24),e(377,"-"),t(),o(378,"td",25)(379,"em")(380,"strong"),e(381,"(opcional)"),t()(),o(382,"p"),e(383,"Evento disparado quando o valor do "),o(384,"em"),e(385,"checkbox"),t(),e(386," for alterado."),t()()(),o(387,"tr",17)(388,"td",18)(389,"div",26)(390,"span",27),e(391," p-compact-label"),a(392,"br"),t()()(),o(393,"td",22)(394,"code",29),e(395,"boolean"),t()(),o(396,"td",24)(397,"p")(398,"code"),e(399,"false"),t()()(),o(400,"td",25)(401,"em")(402,"strong"),e(403,"(opcional)"),t()(),o(404,"p"),e(405,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),o(406,"p"),e(407,"Quando habilitado ("),o(408,"code"),e(409,"true"),t(),e(410,"), o modo compacto afeta o conjunto composto por:"),t(),o(411,"ul")(412,"li")(413,"code"),e(414,"po-label"),t()(),o(415,"li")(416,"code"),e(417,"p-requirement (showRequired)"),t()(),o(418,"li")(419,"code"),e(420,"po-helper"),t()()(),o(421,"p"),e(422,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),o(423,"p"),e(424,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),o(425,"ul")(426,"li")(427,"code"),e(428,"--field-container-title-justify"),t()(),o(429,"li")(430,"code"),e(431,"--field-container-title-flex"),t()()(),o(432,"p"),e(433,"Exemplo:"),t(),o(434,"pre")(435,"code"),e(436,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),o(437,"p"),e(438,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),o(439,"tr",17)(440,"td",18)(441,"div",26)(442,"span",27),e(443," p-disabled"),a(444,"br"),t()()(),o(445,"td",22)(446,"code",29),e(447,"boolean"),t()(),o(448,"td",24)(449,"p")(450,"code"),e(451,"false"),t()()(),o(452,"td",25)(453,"em")(454,"strong"),e(455,"(opcional)"),t()(),o(456,"p"),e(457,"Define o estado do "),o(458,"em"),e(459,"checkbox"),t(),e(460," como desabilitado."),t()()(),o(461,"tr",17)(462,"td",18)(463,"div",26)(464,"span",27),e(465," p-help"),a(466,"br"),t()()(),o(467,"td",22)(468,"code",28),e(469,"string"),t()(),o(470,"td",24),e(471,"-"),t(),o(472,"td",25)(473,"em")(474,"strong"),e(475,"(opcional)"),t()(),o(476,"p"),e(477,"Texto de apoio do campo"),t()()(),o(478,"tr",17)(479,"td",18)(480,"div",19)(481,"span",20),e(482," (p-keydown)"),a(483,"br"),t()()(),o(484,"td",22)(485,"code",23),e(486,"EventEmitter"),t()(),o(487,"td",24),e(488,"-"),t(),o(489,"td",25)(490,"em")(491,"strong"),e(492,"(opcional)"),t()(),o(493,"p"),e(494,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),o(495,"code"),e(496,"KeyboardEvent"),t(),e(497," com informa\xE7\xF5es sobre a tecla."),t()()(),o(498,"tr",17)(499,"td",18)(500,"div",26)(501,"span",27),e(502," p-label"),a(503,"br"),t()()(),o(504,"td",22)(505,"code",28),e(506,"string"),t()(),o(507,"td",24),e(508,"-"),t(),o(509,"td",25)(510,"em")(511,"strong"),e(512,"(opcional)"),t()(),o(513,"p"),e(514,"Texto de exibi\xE7\xE3o do "),o(515,"em"),e(516,"checkbox"),t(),e(517,"."),t()()(),o(518,"tr",17)(519,"td",18)(520,"div",26)(521,"span",27),e(522," p-label-text-wrap"),a(523,"br"),t()()(),o(524,"td",22)(525,"code",29),e(526,"boolean"),t()(),o(527,"td",24)(528,"p")(529,"code"),e(530,"false"),t()()(),o(531,"td",25)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),o(535,"p"),e(536,"Habilita a quebra autom\xE1tica do texto da propriedade "),o(537,"code"),e(538,"p-label"),t(),e(539,". Quando "),o(540,"code"),e(541,"p-label-text-wrap"),t(),e(542,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),o(543,"tr",17)(544,"td",18)(545,"div",26)(546,"span",27),e(547," name"),a(548,"br"),t()()(),o(549,"td",22)(550,"code",28),e(551,"string"),t()(),o(552,"td",24),e(553,"-"),t(),o(554,"td",25)(555,"p"),e(556,"Define o nome do "),o(557,"em"),e(558,"checkbox"),t(),e(559,"."),t()()(),o(560,"tr",17)(561,"td",18)(562,"div",26)(563,"span",27),e(564," p-helper"),a(565,"br"),t()()(),o(566,"td",22)(567,"code",30),e(568,"PoHelperOptions "),t(),o(569,"code",28),e(570," string"),t()(),o(571,"td",24),e(572,"-"),t(),o(573,"td",25)(574,"em")(575,"strong"),e(576,"(opcional)"),t()(),o(577,"p"),e(578,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),o(579,"code"),e(580,"p-label"),t(),e(581," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),o(582,"code"),e(583,"p-label"),t(),e(584,"."),t(),o(585,"blockquote")(586,"p"),e(587,"Para mais informa\xE7\xF5es acesse: "),o(588,"a",31),e(589,"https://po-ui.io/documentation/po-helper"),t(),e(590,"."),t()(),o(591,"blockquote")(592,"p"),e(593,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),o(594,"code"),e(595,"p-additional-help-tooltip"),t(),e(596," e "),o(597,"code"),e(598,"p-additional-help"),t(),e(599,") ser\xE1 ignorado."),t()()()(),o(600,"tr",17)(601,"td",18)(602,"div",26)(603,"span",27),e(604," p-size"),a(605,"br"),t()()(),o(606,"td",22)(607,"code",28),e(608,"string"),t()(),o(609,"td",24)(610,"p")(611,"code"),e(612,"medium"),t()()(),o(613,"td",25)(614,"em")(615,"strong"),e(616,"(opcional)"),t()(),o(617,"p"),e(618,"Define o tamanho da caixa de sele\xE7\xE3o do componente:"),t(),o(619,"ul")(620,"li")(621,"code"),e(622,"small"),t(),e(623,": 16x16 (dispon\xEDvel apenas para acessibilidade AA)."),t(),o(624,"li")(625,"code"),e(626,"medium"),t(),e(627,": 24x24."),t(),o(628,"li")(629,"code"),e(630,"large"),t(),e(631,": 32x32."),t()(),o(632,"blockquote")(633,"p"),e(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),o(635,"code"),e(636,"medium"),t(),e(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),o(638,"a",32),e(639,"po-theme"),t(),e(640,"."),t()()()()(),o(641,"h3",13),e(642,"M\xE9todos"),t(),o(643,"table",33)(644,"tr",17)(645,"th",34)(646,"div",26)(647,"h4")(648,"span",27),e(649," focus "),t()()()()(),o(650,"tr",25)(651,"td",25)(652,"p"),e(653,"Fun\xE7\xE3o que atribui foco ao "),o(654,"em"),e(655,"checkbox"),t(),e(656,"."),t(),o(657,"p"),e(658,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a refer\xEAncia do componente no DOM atrav\xE9s do "),o(659,"code"),e(660,"ViewChild"),t(),e(661,", como por exemplo:"),t(),o(662,"pre")(663,"code"),e(664,`...
import { ViewChild } from '@angular/core';
import { PoCheckboxComponent } from '@po-ui/ng-components';

...

@ViewChild(PoCheckboxComponent, { static: true }) checkbox: PoCheckboxComponent;

focusCheckbox() {
  this.checkbox.focus();
}
`),t()()()()(),a(665,"br"),o(666,"table",33)(667,"tr",17)(668,"th",34)(669,"div",26)(670,"h4")(671,"span",27),e(672," showAdditionalHelp "),t()()()()(),o(673,"tr",25)(674,"td",25)(675,"p"),e(676,"M\xE9todo que exibe "),o(677,"code"),e(678,"p-helper"),t(),e(679," ou executa a a\xE7\xE3o definida em "),o(680,"code"),e(681,"p-helper{eventOnClick}"),t(),e(682," ou em "),o(683,"code"),e(684,"p-additionalHelp"),t(),e(685,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),o(686,"code"),e(687,"p-keydown"),t(),e(688,"."),t(),o(689,"blockquote")(690,"p"),e(691,"Exibe ou oculta o conte\xFAdo do componente "),o(692,"code"),e(693,"po-helper"),t(),e(694," quando o componente estiver com foco."),t()(),o(695,"pre")(696,"code"),e(697,`//Exemplo com label e p-helper
<po-checkbox
 #checkbox
 ...
 p-label="Label do checkbox"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, checkbox)"
></po-checkbox>
`),t()(),o(698,"pre")(699,"code"),e(700,`...
onKeyDown(event: KeyboardEvent, inp: PoCheckboxComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),a(701,"br"),t())},dependencies:[k],encapsulation:2})}return i})();var ue=(()=>{class i{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,l){this.route=r,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let l=r.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||i)(F(Z),F($))};static \u0275cmp=s({type:i,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Checkbox",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,n){l&1&&(o(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return n.changeTab("doc")}),a(3,"sample-po-checkbox-doc"),t(),o(4,"po-tab",3),u("p-click",function(){return n.changeTab("web")}),a(5,"sample-po-checkbox-basic-view")(6,"sample-po-checkbox-labs-view")(7,"sample-po-checkbox-acceptance-term-view"),t()()()),l&2&&(c("p-actions",n.actions),m(2),c("p-active",n.activeTab==="doc"),m(2),c("p-hide",n.hidePoWebSample)("p-active",n.activeTab==="web"))},dependencies:[ie,g,v,pe,re,ce,se],encapsulation:2})}return i})();var ye=[{path:"",component:ue}],be=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=O({type:i});static \u0275inj=M({imports:[H.forChild(ye),H]})}return i})();var Je=(()=>{class i{static \u0275fac=function(l){return new(l||i)};static \u0275mod=O({type:i});static \u0275inj=M({imports:[ae,be]})}return i})();export{Je as DocPoCheckboxModule};
