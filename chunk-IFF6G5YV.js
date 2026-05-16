import{o as Ee,p as Se}from"./chunk-AT3MKFJ3.js";import{Gb as y,Hb as C,Ia as le,Ja as de,Lb as ue,Ra as pe,U as ne,Va as se,_ as ie,ab as ce,j as x,ma as ae,na as oe,oa as me,pa as _,qa as N,ra as re,sa as M,ta as O,tb as he,ua as A,w as te}from"./chunk-GCMU57WK.js";import{Ea as d,Fa as t,Ga as n,Ha as i,I as f,Jb as G,Jc as p,Mb as U,Mc as H,Nc as Q,O as P,Oa as I,P as D,Pa as E,Pc as J,Qc as K,Tc as X,Uc as Y,Va as V,Wa as R,Xa as q,Yc as Z,bb as z,cb as e,cd as $,eb as j,ed as ee,gb as L,gd as F,ha as l,hb as k,ib as w,ma as v,oa as S,pa as T,pb as B,rb as W}from"./chunk-XD3NZLB4.js";import{a as s,b as u}from"./chunk-GAL4ENT6.js";var Ae=["reactiveFormData"],ve=(()=>{class m{cdr;fb;poTheme;reactiveFormModal;a11yLevel;a11yLevelStorage="po-a11y-AAA";reactiveForm;theme=0;themeStorage="po-theme-default";a11yChangeListenerAAA;a11yChangeListenerAA;themeChangeListenerDark;themeChangeListenerDefault;a11yLevelOptions=[{label:"AA",value:"AA"},{label:"AAA",value:"AAA"}];themeOptions=[{label:"Light",value:0},{label:"Dark",value:1}];modalPrimaryAction={action:()=>this.reactiveFormModal.close(),label:"Close"};poThemeSample={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(s({},oe),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(s({},_),{info:u(s({},_.info),{base:"#0079b8"})}),neutral:s({},me)},onRoot:u(s({},N.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:s({},N.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:u(s({},re),{disabled:"var(--color-neutral-mid-40)"}),feedback:u(s({},M),{info:u(s({},M.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:u(s({},O.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:s({},O.perComponent)}},active:ae.light};constructor(r,o,a){this.cdr=r,this.fb=o,this.poTheme=a,this.poTheme.setA11yDefaultSizeSmall(!0);let c=this.poTheme.applyTheme();this.a11yLevel=this.poTheme.getA11yLevel(),c?this.theme=c.active||0:(this.poTheme.setTheme(this.poThemeSample,this.theme,this.a11yLevel),this.theme=this.poThemeSample.active),this.createReactiveForm()}ngOnInit(){localStorage.getItem("po-ui-theme")&&(this.themeStorage=localStorage.getItem("po-ui-theme")),this.theme=this.themeStorage==="po-theme-default"?0:1,this.changeTheme(this.theme,!1),localStorage.getItem("po-ui-a11y")&&(this.a11yLevelStorage=localStorage.getItem("po-ui-a11y")),this.a11yLevel=this.a11yLevelStorage==="po-a11y-AAA"?x.AAA:x.AA,this.changeA11yLevel(this.a11yLevel,!1),this.themeChangeListenerDefault=()=>{this.changeTheme(0,!1),this.theme=0},this.themeChangeListenerDark=()=>{this.changeTheme(1,!1),this.theme=1},this.a11yChangeListenerAAA=()=>{this.changeA11yLevel(x.AAA,!1),this.a11yLevel=x.AAA},this.a11yChangeListenerAA=()=>{this.changeA11yLevel(x.AA,!1),this.a11yLevel=x.AA},window.addEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.addEventListener("po-a11y-AAA",this.a11yChangeListenerAAA),window.addEventListener("po-theme-default",this.themeChangeListenerDefault),window.addEventListener("po-theme-dark",this.themeChangeListenerDark)}ngOnDestroy(){window.removeEventListener("po-theme-default",this.themeChangeListenerDefault),window.removeEventListener("po-theme-dark",this.themeChangeListenerDark),window.removeEventListener("po-a11y-AA",this.a11yChangeListenerAA),window.removeEventListener("po-a11y-AAA",this.a11yChangeListenerAAA)}changeA11yLevel(r,o=!0){this.poTheme.setCurrentThemeA11y(r),r==="AA"?localStorage.setItem("po-ui-a11y","po-a11y-AA"):localStorage.setItem("po-ui-a11y","po-a11y-AAA"),r===x.AA&&this.poTheme.setA11yDefaultSizeSmall(!0),o&&window.dispatchEvent(new Event("po-sample-change-a11y"))}changeTheme(r,o=!0){this.poTheme.setTheme(this.poThemeSample,r,this.a11yLevel),r===1?localStorage.setItem("po-ui-theme","po-theme-dark"):localStorage.setItem("po-ui-theme","po-theme-default"),o&&window.dispatchEvent(new Event("po-sample-change-theme")),this.a11yLevel==="AA"&&this.poTheme.setA11yDefaultSizeSmall(!0)}createReactiveForm(){this.reactiveForm=this.fb.group({name:["",p.compose([p.required,p.minLength(5),p.maxLength(30)])],address:["",p.compose([p.required,p.minLength(5),p.maxLength(50)])],number:["",p.compose([p.required,p.min(1),p.max(99999)])],email:["",p.required],website:["",p.required]})}saveForm(){this.reactiveFormModal.open()}static \u0275fac=function(o){return new(o||m)(v(G),v(Z),v(A))};static \u0275cmp=S({type:m,selectors:[["sample-po-theme-labs"]],viewQuery:function(o,a){if(o&1&&V(Ae,7),o&2){let c;R(c=q())&&(a.reactiveFormModal=c.first)}},standalone:!1,features:[B([A])],decls:22,vars:12,consts:[["reactiveFormData",""],["p-title","Example"],[3,"formGroup"],["formControlName","name","p-clean","","p-icon","an an-user","p-label","Customer name",1,"po-lg-6"],["formControlName","email","p-label","Email","p-clean","",1,"po-lg-6"],["formControlName","address","p-clean","","p-icon","an an-map-pin","p-label","Address",1,"po-lg-4","po-md-8"],["formControlName","number","p-label","Number","p-clean","",1,"po-lg-2","po-md-4"],["formControlName","website","p-label","Website","p-clean","",1,"po-lg-6"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"],["p-title","Save successful",3,"p-primary-action"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Address",1,"po-md-6",3,"p-value"],["p-label","Number",1,"po-md-6",3,"p-value"],["p-label","Email",1,"po-md-6",3,"p-value"],["p-label","Website",1,"po-md-6",3,"p-value"],[1,"po-row","po-mt-3"],["name","theme","p-label","Theme Type",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"],["name","a11ylevel","p-label","Acessibility Level",1,"po-md-6",3,"ngModelChange","p-change","ngModel","p-options"]],template:function(o,a){if(o&1){let c=I();t(0,"po-widget",1)(1,"form",2),i(2,"po-input",3)(3,"po-email",4)(4,"po-input",5)(5,"po-number",6)(6,"po-url",7),t(7,"div",8)(8,"po-button",9),E("p-click",function(){return a.saveForm()}),n()()(),t(9,"po-modal",10,0)(11,"div",8),i(12,"po-info",11),n(),t(13,"div",8),i(14,"po-info",12)(15,"po-info",13),n(),t(16,"div",8),i(17,"po-info",14)(18,"po-info",15),n()()(),t(19,"div",16)(20,"po-radio-group",17),w("ngModelChange",function(h){return P(c),k(a.theme,h)||(a.theme=h),D(h)}),E("p-change",function(h){return a.changeTheme(h)}),n(),t(21,"po-radio-group",18),w("ngModelChange",function(h){return P(c),k(a.a11yLevel,h)||(a.a11yLevel=h),D(h)}),E("p-change",function(h){return a.changeA11yLevel(h)}),n()()}o&2&&(l(),d("formGroup",a.reactiveForm),l(7),d("p-disabled",!a.reactiveForm.valid),l(),d("p-primary-action",a.modalPrimaryAction),l(3),d("p-value",a.reactiveForm.controls.name.value),l(2),d("p-value",a.reactiveForm.controls.address.value),l(),d("p-value",a.reactiveForm.controls.number.value),l(2),d("p-value",a.reactiveForm.controls.email.value),l(),d("p-value",a.reactiveForm.controls.website.value),l(2),L("ngModel",a.theme),d("p-options",a.themeOptions),l(),L("ngModel",a.a11yLevel),d("p-options",a.a11yLevelOptions))},dependencies:[K,H,Q,J,Y,X,te,ne,le,de,pe,se,ce,ie,ue],encapsulation:2})}return m})();var Ce=m=>({"docs-sample-code-tabs":m}),be=(()=>{class m{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(o){return new(o||m)};static \u0275cmp=S({type:m,selectors:[["sample-po-theme-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(o,a){o&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Theme Labs"),n(),t(4,"a",2),E("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-theme-labs/sample-po-theme-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-widget p-title="Example">
  <form [formGroup]="reactiveForm">
    <po-input class="po-lg-6" formControlName="name" p-clean p-icon="an an-user" p-label="Customer name"> </po-input>

    <po-email class="po-lg-6" formControlName="email" p-label="Email" p-clean> </po-email>

    <po-input class="po-lg-4 po-md-8" formControlName="address" p-clean p-icon="an an-map-pin" p-label="Address">
    </po-input>

    <po-number class="po-lg-2 po-md-4" formControlName="number" p-label="Number" p-clean> </po-number>

    <po-url class="po-lg-6" formControlName="website" p-label="Website" p-clean> </po-url>

    <div class="po-row">
      <po-button class="po-md-3" p-label="Save" [p-disabled]="!reactiveForm.valid" (p-click)="saveForm()"> </po-button>
    </div>
  </form>

  <po-modal #reactiveFormData p-title="Save successful" [p-primary-action]="modalPrimaryAction">
    <div class="po-row">
      <po-info class="po-md-12" p-label="Name" [p-value]="reactiveForm.controls.name.value"> </po-info>
    </div>

    <div class="po-row">
      <po-info class="po-md-6" p-label="Address" [p-value]="reactiveForm.controls.address.value"> </po-info>

      <po-info class="po-md-6" p-label="Number" [p-value]="reactiveForm.controls.number.value"> </po-info>
    </div>

    <div class="po-row">
      <po-info class="po-md-6" p-label="Email" [p-value]="reactiveForm.controls.email.value"> </po-info>

      <po-info class="po-md-6" p-label="Website" [p-value]="reactiveForm.controls.website.value"> </po-info>
    </div>
  </po-modal>
</po-widget>

<div class="po-row po-mt-3">
  <po-radio-group
    class="po-md-6"
    name="theme"
    p-label="Theme Type"
    [(ngModel)]="theme"
    [p-options]="themeOptions"
    (p-change)="changeTheme($event)"
  >
  </po-radio-group>

  <po-radio-group
    class="po-md-6"
    name="a11ylevel"
    p-label="Acessibility Level"
    [(ngModel)]="a11yLevel"
    [p-options]="a11yLevelOptions"
    (p-change)="changeA11yLevel($event)"
  >
  </po-radio-group>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-theme-labs/sample-po-theme-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import {
  PoRadioGroupOption,
  PoThemeA11yEnum,
  PoThemeService,
  PoThemeTypeEnum,
  poThemeDefaultActions,
  poThemeDefaultActionsDark,
  poThemeDefaultDarkValues,
  poThemeDefaultFeedback,
  poThemeDefaultFeedbackDark,
  poThemeDefaultLightValues,
  poThemeDefaultNeutrals
} from '@po-ui/ng-components';

import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
@Component({
  selector: 'sample-po-theme-labs',
  templateUrl: './sample-po-theme-labs.component.html',
  providers: [PoThemeService],
  standalone: false
})
export class SamplePoThemeLabsComponent implements OnInit, OnDestroy {
  @ViewChild('reactiveFormData', { static: true }) reactiveFormModal: PoModalComponent;

  a11yLevel: PoThemeA11yEnum;
  a11yLevelStorage = 'po-a11y-AAA';
  reactiveForm: UntypedFormGroup;
  theme: PoThemeTypeEnum = 0;
  themeStorage = 'po-theme-default';

  private a11yChangeListenerAAA: any;
  private a11yChangeListenerAA: any;
  private themeChangeListenerDark: any;
  private themeChangeListenerDefault: any;

  readonly a11yLevelOptions: Array<PoRadioGroupOption> = [
    { label: 'AA', value: 'AA' },
    { label: 'AAA', value: 'AAA' }
  ];

  readonly themeOptions: Array<PoRadioGroupOption> = [
    { label: 'Light', value: 0 },
    { label: 'Dark', value: 1 }
  ];

  readonly modalPrimaryAction: PoModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  poThemeSample = {
    name: 'po-theme',
    type: {
      light: {
        color: {
          brand: {
            '01': {
              lightest: '#f2eaf6',
              lighter: '#d9c2e5',
              light: '#bd94d1',
              base: '#753399',
              dark: '#5b1c7d',
              darker: '#400e58',
              darkest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActions,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedback,
            info: {
              ...poThemeDefaultFeedback.info,
              base: '#0079b8'
            }
          },
          neutral: {
            ...poThemeDefaultNeutrals
          }
        },
        onRoot: {
          ...poThemeDefaultLightValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultLightValues.perComponent
        }
      },
      dark: {
        color: {
          brand: {
            '01': {
              darkest: '#f2eaf6',
              darker: '#d9c2e5',
              dark: '#bd94d1',
              base: '#753399',
              light: '#5b1c7d',
              lighter: '#400e58',
              lightest: '#260538'
            },
            '02': {
              base: '#b92f72'
            },
            '03': {
              base: '#ffd464'
            }
          },
          action: {
            ...poThemeDefaultActionsDark,
            disabled: 'var(--color-neutral-mid-40)'
          },
          feedback: {
            ...poThemeDefaultFeedbackDark,
            info: {
              ...poThemeDefaultFeedbackDark.info,
              base: '#0079b8'
            }
          },
          neutral: {
            light: {
              '00': '#1c1c1c',
              '05': '#202020',
              '10': '#2b2b2b',
              '20': '#3b3b3b',
              '30': '#5a5a5a'
            },
            mid: {
              '40': '#7c7c7c',
              '60': '#a1a1a1'
            },
            dark: {
              '70': '#c1c1c1',
              '80': '#d9d9d9',
              '90': '#eeeeee',
              '95': '#fbfbfb'
            }
          }
        },
        onRoot: {
          ...poThemeDefaultDarkValues.onRoot,
          '--color-page-background-color-page': 'var(--color-neutral-light-05)'
        },
        perComponent: {
          ...poThemeDefaultDarkValues.perComponent
        }
      }
    },
    active: PoThemeTypeEnum.light
  };

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: UntypedFormBuilder,
    private poTheme: PoThemeService
  ) {
    this.poTheme.setA11yDefaultSizeSmall(true);

    const _poTheme = this.poTheme.applyTheme();
    this.a11yLevel = this.poTheme.getA11yLevel();

    if (!_poTheme) {
      this.poTheme.setTheme(this.poThemeSample, this.theme, this.a11yLevel);
      this.theme = this.poThemeSample.active;
    } else {
      this.theme = _poTheme.active || 0;
    }
    this.createReactiveForm();
  }

  ngOnInit(): void {
    if (localStorage.getItem('po-ui-theme')) {
      this.themeStorage = localStorage.getItem('po-ui-theme');
    }

    this.theme = this.themeStorage === 'po-theme-default' ? 0 : 1;
    this.changeTheme(this.theme, false);

    if (localStorage.getItem('po-ui-a11y')) {
      this.a11yLevelStorage = localStorage.getItem('po-ui-a11y');
    }

    this.a11yLevel = this.a11yLevelStorage === 'po-a11y-AAA' ? PoThemeA11yEnum.AAA : PoThemeA11yEnum.AA;
    this.changeA11yLevel(this.a11yLevel, false);

    this.themeChangeListenerDefault = () => {
      this.changeTheme(0, false);
      this.theme = 0;
    };

    this.themeChangeListenerDark = () => {
      this.changeTheme(1, false);
      this.theme = 1;
    };

    this.a11yChangeListenerAAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AAA, false);
      this.a11yLevel = PoThemeA11yEnum.AAA;
    };

    this.a11yChangeListenerAA = () => {
      this.changeA11yLevel(PoThemeA11yEnum.AA, false);
      this.a11yLevel = PoThemeA11yEnum.AA;
    };

    window.addEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.addEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
    window.addEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.addEventListener('po-theme-dark', this.themeChangeListenerDark);
  }

  ngOnDestroy(): void {
    window.removeEventListener('po-theme-default', this.themeChangeListenerDefault);
    window.removeEventListener('po-theme-dark', this.themeChangeListenerDark);

    window.removeEventListener('po-a11y-AA', this.a11yChangeListenerAA);
    window.removeEventListener('po-a11y-AAA', this.a11yChangeListenerAAA);
  }

  changeA11yLevel(value: PoThemeA11yEnum, dispatchEvent = true) {
    this.poTheme.setCurrentThemeA11y(value);
    value === 'AA'
      ? localStorage.setItem('po-ui-a11y', 'po-a11y-AA')
      : localStorage.setItem('po-ui-a11y', 'po-a11y-AAA');

    if (value === PoThemeA11yEnum.AA) {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }

    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-a11y'));
    }
  }

  changeTheme(value: number, dispatchEvent = true) {
    this.poTheme.setTheme(this.poThemeSample, value, this.a11yLevel);
    value === 1
      ? localStorage.setItem('po-ui-theme', 'po-theme-dark')
      : localStorage.setItem('po-ui-theme', 'po-theme-default');
    if (dispatchEvent) {
      window.dispatchEvent(new Event('po-sample-change-theme'));
    }

    if (this.a11yLevel === 'AA') {
      this.poTheme.setA11yDefaultSizeSmall(true);
    }
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-theme-labs"),n(),i(23,"hr")),o&2&&(l(5),z("po-icon "+a.sampleCodeButtonIcon),l(),j(" ",a.sampleCodeButtonLabel),l(),d("ngClass",W(4,Ce,a.hideSampleCodeTabs)))},dependencies:[U,Ee,y,C,ve],encapsulation:2})}return m})();var ge=(()=>{class m{static \u0275fac=function(o){return new(o||m)};static \u0275cmp=S({type:m,selectors:[["sample-po-theme-doc"]],standalone:!1,decls:1191,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","guides/theme-service"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-method-table"],[1,"docs-api-properties-row"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-property-description"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-name-cell"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoThemeColorAction"],[1,"language-javascript"],["pan","",1,"docs-api-property-type","poThemeColorBrand"],["pan","",1,"docs-api-property-type","PoThemeColorCategorical"],["pan","",1,"docs-api-property-type","PoThemeColorNeutral"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","{","'70'?:","string;","'80'?:","string;","'90'?:","string;","'95'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'00'?:","string;","'05'?:","string;","'10'?:","string;","'20'?:","string;","'30'?:","string;","}"],["pan","",1,"docs-api-property-type","{","'40'?:","string;","'60'?:","string;","}"],["pan","",1,"docs-api-property-type","PoThemeColor"],["pan","",1,"docs-api-property-type","DynamicProperties"],["pan","",1,"docs-api-property-type","PoThemeTypeEnum"],["pan","",1,"docs-api-property-type","PoThemeActive"],["pan","",1,"docs-api-property-type","PoThemeType"],["pan","",1,"docs-api-property-type","Array<PoThemeType>"]],template:function(o,a){o&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoThemeModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do servi\xE7o PoThemeService."),n()(),t(7,"h3",3),e(8,"Services"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoThemeService"),n()(),t(12,"div",2)(13,"p"),e(14,"O servi\xE7o "),t(15,"code"),e(16,"PoThemeService"),n(),e(17," permite customizar as cores do tema padr\xE3o do "),t(18,"code"),e(19,"PO-UI"),n(),e(20,` e definir o n\xEDvel de acessibilidade
mais adequado ao projeto.`),n(),t(21,"p"),e(22,"O n\xEDvel "),t(23,"strong"),e(24,"AAA"),n(),e(25,` (padr\xE3o) garante maior contraste, \xE1reas clic\xE1veis amplas e espa\xE7amentos maiores entre os elementos,
enquanto o n\xEDvel `),t(26,"strong"),e(27,"AA"),n(),e(28,` mant\xE9m a conformidade com as diretrizes de acessibilidade, mas com propor\xE7\xF5es mais equilibradas
e contornos mais sutis.`),n(),t(29,"p"),e(30,"O servi\xE7o tamb\xE9m possibilita configurar a "),t(31,"strong"),e(32,"densidade de espa\xE7amentos"),n(),e(33,`, permitindo ajustar o espa\xE7o entre e dentro dos
componentes. Essa configura\xE7\xE3o pode ser utilizada com qualquer n\xEDvel de acessibilidade.`),n(),t(34,"blockquote")(35,"p"),e(36,"Observa\xE7\xE3o: a customiza\xE7\xE3o das cores de "),t(37,"code"),e(38,"feedback"),n(),e(39," n\xE3o \xE9 recomendada por motivos de acessibilidade e usabilidade."),n()(),t(40,"blockquote")(41,"p"),e(42,`Para saber mais sobre como customizar o tema padr\xE3o, consulte o item
`),t(43,"a",6),e(44,"Customiza\xE7\xE3o de Temas usando o servi\xE7o PO-UI"),n(),e(45," na aba "),t(46,"code"),e(47,"Guias"),n(),e(48,"."),n()()(),t(49,"h3",7),e(50,"M\xE9todos"),n(),t(51,"table",8)(52,"tr",9)(53,"th",10)(54,"div",11)(55,"h4")(56,"span",12),e(57," setTheme "),n()()()()(),t(58,"tr",13)(59,"td",13)(60,"p"),e(61,"Aplica um tema ao componente de acordo com o tipo de tema e o n\xEDvel de acessibilidade especificados."),n(),t(62,"p"),e(63,"Este m\xE9todo configura o tema do componente com base no objeto "),t(64,"code"),e(65,"themeConfig"),n(),e(66," fornecido, no "),t(67,"code"),e(68,"themeType"),n(),e(69," e no "),t(70,"code"),e(71,"a11yLevel"),n(),e(72,`.
Al\xE9m disso, ele pode opcionalmente salvar a prefer\xEAncia de tema no localStorage, se solicitado.`),n()()()(),t(73,"h5")(74,"b"),e(75,"Par\xE2metros"),n()(),t(76,"table",14)(77,"tr",15)(78,"th",16),e(79,"Nome"),n(),t(80,"th",16),e(81,"Tipo"),n(),t(82,"th",16),e(83,"Descri\xE7\xE3o"),n()(),t(84,"tr",9)(85,"td",17),e(86," themeConfig"),n(),t(87,"td",18)(88,"code",19),e(89," PoTheme "),n()(),t(90,"td",13)(91,"p"),e(92,"Configura\xE7\xE3o de tema a ser aplicada ao componente."),n()()(),t(93,"tr",9)(94,"td",17),e(95," themeType"),n(),t(96,"td",18)(97,"code",19),e(98," PoThemeTypeEnum "),n()(),t(99,"td",13)(100,"p"),e(101,"(Opcional) Tipo de tema, podendo ser 'light' (claro) ou 'dark' (escuro). O tema claro \xE9 o padr\xE3o."),n()()(),t(102,"tr",9)(103,"td",17),e(104," a11yLevel"),n(),t(105,"td",18)(106,"code",19),e(107," PoThemeA11yEnum "),n()(),t(108,"td",13)(109,"p"),e(110,"(Opcional) N\xEDvel de acessibilidade dos componentes, podendo ser AA ou AAA. Padr\xE3o \xE9 AAA."),n()()(),t(111,"tr",9)(112,"td",17),e(113," persistPreference"),n(),t(114,"td",18)(115,"code",19),e(116," boolean "),n()(),t(117,"td",13)(118,"p"),e(119,`(Opcional) Define se a prefer\xEAncia de tema deve ser salva no
localStorage para persist\xEAncia. Por padr\xE3o \xE9 `),t(120,"code"),e(121,"true"),n(),e(122,", ou seja, a prefer\xEAncia ser\xE1 salva automaticamente."),n()()()(),i(123,"br"),t(124,"table",8)(125,"tr",9)(126,"th",10)(127,"div",11)(128,"h4")(129,"span",12),e(130," getA11yLevel "),n()()()()(),t(131,"tr",13)(132,"td",13)(133,"p"),e(134,`Retorna o n\xEDvel de acessibilidade configurado no tema.
Se n\xE3o estiver configurado, retorna `),t(135,"code"),e(136,"AAA"),n(),e(137," como padr\xE3o."),n()()()(),t(138,"h5")(139,"b"),e(140,"Retorno"),n()(),t(141,"table",14)(142,"tr",15)(143,"th",16),e(144,"Tipo"),n(),t(145,"th",16),e(146,"Descri\xE7\xE3o"),n()(),t(147,"tr",9)(148,"td",18)(149,"code",19),e(150,"PoThemeA11yEnum"),n()(),t(151,"td",13)(152,"p"),e(153,"O n\xEDvel de acessibilidade, que pode ser "),t(154,"code"),e(155,"AA"),n(),e(156," ou "),t(157,"code"),e(158,"AAA"),n(),e(159,"."),n()()()(),i(160,"br"),t(161,"table",8)(162,"tr",9)(163,"th",10)(164,"div",11)(165,"h4")(166,"span",12),e(167," setA11yDefaultSizeSmall "),n()()()()(),t(168,"tr",13)(169,"td",13)(170,"p"),e(171,"Define o tamanho "),t(172,"code"),e(173,"small"),n(),e(174,` como padr\xE3o para componentes que n\xE3o possuem um tamanho definido. Essa configura\xE7\xE3o \xE9
aplicada globalmente apenas quando o n\xEDvel de acessibilidade for `),t(175,"code"),e(176,"AA"),n(),e(177,`. O valor definido \xE9 salvo no
`),t(178,"code"),e(179,"localStorage"),n(),e(180," sob a chave "),t(181,"code"),e(182,"po-default-size"),n(),e(183," e o atributo "),t(184,"code"),e(185,"data-default-size"),n(),e(186,` \xE9 adicionado ao elemento HTML
para que os componentes possam aplicar o tamanho`),n(),t(187,"p"),e(188,"Exemplo de uso:"),n(),t(189,"pre")(190,"code",20),e(191,`import { poThemeDefault, PoThemeService, PoThemeTypeEnum, PoThemeA11yEnum } from '@po-ui/ng-components';

private themeService = inject(PoThemeService);

constructor() {
 this.themeService.setA11yDefaultSizeSmall(true);
 this.themeService.setTheme(poThemeDefault, PoThemeTypeEnum.light, PoThemeA11yEnum.AA);
}
`),n()(),t(192,"blockquote")(193,"p"),e(194,"Para garantir que o tamanho "),t(195,"code"),e(196,"small"),n(),e(197,` seja aplicado corretamente a todos os componentes, recomendamos
definir esta configura\xE7\xE3o `),t(198,"strong"),e(199,"junto com o n\xEDvel de acessibilidade "),t(200,"code"),e(201,"AA"),n(),e(202," na inicializa\xE7\xE3o da aplica\xE7\xE3o"),n(),e(203,`.
Para ajustar a densidade visual dos componentes agrupadores (como pages, container, etc.), utilize tamb\xE9m
o m\xE9todo `),t(204,"code"),e(205,"setDensityMode"),n(),e(206," conforme necess\xE1rio."),n()()()()(),t(207,"h5")(208,"b"),e(209,"Par\xE2metros"),n()(),t(210,"table",14)(211,"tr",15)(212,"th",16),e(213,"Nome"),n(),t(214,"th",16),e(215,"Tipo"),n(),t(216,"th",16),e(217,"Descri\xE7\xE3o"),n()(),t(218,"tr",9)(219,"td",17),e(220," enable"),n(),t(221,"td",18)(222,"code",19),e(223," boolean "),n()(),t(224,"td",13)(225,"p"),e(226,"Habilita ou desabilita o tamanho "),t(227,"code"),e(228,"small"),n(),e(229," globalmente."),n()()()(),i(230,"br"),t(231,"table",8)(232,"tr",9)(233,"th",10)(234,"div",11)(235,"h4")(236,"span",12),e(237," getDensityMode "),n()()()()(),t(238,"tr",13)(239,"td",13)(240,"p"),e(241,`Retorna o modo de adensamento dos componentes agrupadores.
Se n\xE3o estiver configurado, retorna `),t(242,"code"),e(243,"medium"),n(),e(244," como padr\xE3o."),n()()()(),t(245,"h5")(246,"b"),e(247,"Retorno"),n()(),t(248,"table",14)(249,"tr",15)(250,"th",16),e(251,"Tipo"),n(),t(252,"th",16),e(253,"Descri\xE7\xE3o"),n()(),t(254,"tr",9)(255,"td",18)(256,"code",19),e(257,"PoDensityMode"),n()(),t(258,"td",13)(259,"p"),e(260,"O modo de adensamento, que pode ser "),t(261,"code"),e(262,"small"),n(),e(263," ou "),t(264,"code"),e(265,"medium"),n(),e(266,"."),n()()()(),i(267,"br"),t(268,"table",8)(269,"tr",9)(270,"th",10)(271,"div",11)(272,"h4")(273,"span",12),e(274," setDensityMode "),n()()()()(),t(275,"tr",13)(276,"td",13)(277,"p"),e(278,"Aplica o modo de adensamento compacto ("),t(279,"code"),e(280,"small"),n(),e(281,") ou espa\xE7oso ("),t(282,"code"),e(283,"medium"),n(),e(284,`) para os componentes agrupadores,
independentemente do n\xEDvel de acessibilidade. O valor definido \xE9 salvo no `),t(285,"code"),e(286,"localStorage"),n(),e(287,` sob a chave
`),t(288,"code"),e(289,"po-density-mode"),n(),e(290,"."),n()()()(),t(291,"h5")(292,"b"),e(293,"Par\xE2metros"),n()(),t(294,"table",14)(295,"tr",15)(296,"th",16),e(297,"Nome"),n(),t(298,"th",16),e(299,"Tipo"),n(),t(300,"th",16),e(301,"Descri\xE7\xE3o"),n()(),t(302,"tr",9)(303,"td",17),e(304," mode"),n(),t(305,"td",18)(306,"code",21),e(307," 'small' "),n(),t(308,"code",22),e(309," 'medium' "),n()(),t(310,"td",13)(311,"p"),e(312,"Define o modo de densidade: "),t(313,"code"),e(314,"small"),n(),e(315," para compacto, "),t(316,"code"),e(317,"medium"),n(),e(318,` para espa\xE7oso.
O valor padr\xE3o \xE9 `),t(319,"code"),e(320,"medium"),n(),e(321,"."),n()()()(),i(322,"br"),t(323,"table",8)(324,"tr",9)(325,"th",10)(326,"div",11)(327,"h4")(328,"span",12),e(329," persistThemeActive "),n()()()()(),t(330,"tr",13)(331,"td",13)(332,"p"),e(333,`Restaura e aplica as prefer\xEAncias visuais do usu\xE1rio para o tema da aplica\xE7\xE3o, garantindo que essas prefer\xEAncias
sejam persistidas no `),t(334,"code"),e(335,"localStorage"),n(),e(336," para uso em recarregamentos futuros."),n()()()(),t(337,"h5")(338,"b"),e(339,"Retorno"),n()(),t(340,"table",14)(341,"tr",15)(342,"th",16),e(343,"Tipo"),n(),t(344,"th",16),e(345,"Descri\xE7\xE3o"),n()(),t(346,"tr",9)(347,"td",18)(348,"code",19),e(349,"PoTheme"),n()(),t(350,"td",13)(351,"p"),e(352,"O tema atualmente aplicado."),n()()()(),i(353,"br"),t(354,"table",8)(355,"tr",9)(356,"th",10)(357,"div",11)(358,"h4")(359,"span",12),e(360," changeCurrentThemeType "),n()()()()(),t(361,"tr",13)(362,"td",13)(363,"p"),e(364,"Altera o tipo do tema armazenado e aplica os novos estilos ao documento."),n(),t(365,"p"),e(366,"Este m\xE9todo altera o tipo do tema armazenado ativo (light/dark)"),n()()()(),t(367,"h5")(368,"b"),e(369,"Par\xE2metros"),n()(),t(370,"table",14)(371,"tr",15)(372,"th",16),e(373,"Nome"),n(),t(374,"th",16),e(375,"Tipo"),n(),t(376,"th",16),e(377,"Descri\xE7\xE3o"),n()(),t(378,"tr",9)(379,"td",17),e(380," themeType"),n(),t(381,"td",18)(382,"code",19),e(383," PoThemeTypeEnum "),n()(),t(384,"td",13)(385,"p"),e(386,"O tipo de tema a ser aplicado, light ou dark."),n()()()(),i(387,"br"),t(388,"table",8)(389,"tr",9)(390,"th",10)(391,"div",11)(392,"h4")(393,"span",12),e(394," cleanThemeActive "),n()()()()(),t(395,"tr",13)(396,"td",13)(397,"p"),e(398,`M\xE9todo remove o tema armazenado e limpa todos os estilos de tema
aplicados ao documento.`),n()()()(),t(399,"h5")(400,"b"),e(401,"Par\xE2metros"),n()(),t(402,"table",14)(403,"tr",15)(404,"th",16),e(405,"Nome"),n(),t(406,"th",16),e(407,"Tipo"),n(),t(408,"th",16),e(409,"Descri\xE7\xE3o"),n()(),t(410,"tr",9)(411,"td",17),e(412," persistPreference"),n(),t(413,"td",18)(414,"code",19),e(415," boolean "),n()(),t(416,"td",13)(417,"p"),e(418,"(Opcional) Define se a prefer\xEAncia de tema n\xE3o deve ser mantida no localStorage para persist\xEAncia. "),t(419,"code"),e(420,"true"),n(),e(421," para remover, "),t(422,"code"),e(423,"false"),n(),e(424," para manter."),n()()()(),i(425,"br"),t(426,"table",8)(427,"tr",9)(428,"th",10)(429,"div",11)(430,"h4")(431,"span",12),e(432," getThemeActive "),n()()()()(),t(433,"tr",13)(434,"td",13)(435,"p"),e(436,"Retorna o tema ativo como um observable. Este m\xE9todo funcionar\xE1 apenas se o tema estiver armazenado no "),t(437,"code"),e(438,"localStorage"),n(),e(439,"."),n()()()(),t(440,"h5")(441,"b"),e(442,"Retorno"),n()(),t(443,"table",14)(444,"tr",15)(445,"th",16),e(446,"Tipo"),n(),t(447,"th",16),e(448,"Descri\xE7\xE3o"),n()(),t(449,"tr",9)(450,"td",18)(451,"code",19),e(452,"PoTheme"),n()(),t(453,"td",13)(454,"p"),e(455,"Tema ativo."),n()()()(),i(456,"br"),t(457,"table",8)(458,"tr",9)(459,"th",10)(460,"div",11)(461,"h4")(462,"span",12),e(463," setDefaultTheme "),n()()()()(),t(464,"tr",13)(465,"td",13)(466,"p"),e(467,'Define o tema atual como o tema "PoUI Padr\xE3o".'),n()()()(),t(468,"h5")(469,"b"),e(470,"Par\xE2metros"),n()(),t(471,"table",14)(472,"tr",15)(473,"th",16),e(474,"Nome"),n(),t(475,"th",16),e(476,"Tipo"),n(),t(477,"th",16),e(478,"Descri\xE7\xE3o"),n()(),t(479,"tr",9)(480,"td",17),e(481," type"),n(),t(482,"td",18)(483,"code",19),e(484," PoThemeTypeEnum "),n()(),t(485,"td",13)(486,"p"),e(487,"O tipo de Tema a ser aplicado, light / dark."),n()()()(),i(488,"br"),t(489,"table",8)(490,"tr",9)(491,"th",10)(492,"div",11)(493,"h4")(494,"span",12),e(495," setThemeType "),n()()()()(),t(496,"tr",13)(497,"td",13)(498,"p"),e(499,"Define o tipo (light/dark) quando um tema est\xE1 sendo aplicado."),n()()()(),t(500,"h5")(501,"b"),e(502,"Par\xE2metros"),n()(),t(503,"table",14)(504,"tr",15)(505,"th",16),e(506,"Nome"),n(),t(507,"th",16),e(508,"Tipo"),n(),t(509,"th",16),e(510,"Descri\xE7\xE3o"),n()(),t(511,"tr",9)(512,"td",17),e(513," theme"),n(),t(514,"td",18)(515,"code",19),e(516," PoTheme "),n()(),t(517,"td",13)(518,"p"),e(519,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(520,"tr",9)(521,"td",17),e(522," themeType"),n(),t(523,"td",18)(524,"code",19),e(525," PoThemeTypeEnum "),n()(),t(526,"td",13)(527,"p"),e(528,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(529,"br"),t(530,"table",8)(531,"tr",9)(532,"th",10)(533,"div",11)(534,"h4")(535,"span",12),e(536," setCurrentThemeType "),n()()()()(),t(537,"tr",13)(538,"td",13)(539,"p"),e(540,"Define o tipo (light/dark) para um tema j\xE1 ativo."),n()()()(),t(541,"h5")(542,"b"),e(543,"Par\xE2metros"),n()(),t(544,"table",14)(545,"tr",15)(546,"th",16),e(547,"Nome"),n(),t(548,"th",16),e(549,"Tipo"),n(),t(550,"th",16),e(551,"Descri\xE7\xE3o"),n()(),t(552,"tr",9)(553,"td",17),e(554," themeType"),n(),t(555,"td",18)(556,"code",19),e(557," PoThemeTypeEnum "),n()(),t(558,"td",13)(559,"p"),e(560,"(Opcional) Tipo de tema a ser aplicado, podendo ser 'light' (claro) ou 'dark' (escuro). Por padr\xE3o, o tema claro \xE9 aplicado."),n()()()(),i(561,"br"),t(562,"table",8)(563,"tr",9)(564,"th",10)(565,"div",11)(566,"h4")(567,"span",12),e(568," setThemeA11y "),n()()()()(),t(569,"tr",13)(570,"td",13)(571,"p"),e(572,"Define o n\xEDvel de acessibilidade quando um tema est\xE1 sendo aplicado."),n()()()(),t(573,"h5")(574,"b"),e(575,"Par\xE2metros"),n()(),t(576,"table",14)(577,"tr",15)(578,"th",16),e(579,"Nome"),n(),t(580,"th",16),e(581,"Tipo"),n(),t(582,"th",16),e(583,"Descri\xE7\xE3o"),n()(),t(584,"tr",9)(585,"td",17),e(586," theme"),n(),t(587,"td",18)(588,"code",19),e(589," PoTheme "),n()(),t(590,"td",13)(591,"p"),e(592,"Objeto contendo as defini\xE7\xF5es de tema a serem aplicadas no componente."),n()()(),t(593,"tr",9)(594,"td",17),e(595," a11y"),n(),t(596,"td",18)(597,"code",19),e(598," PoThemeA11yEnum "),n()(),t(599,"td",13)(600,"p"),e(601,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(602,"br"),t(603,"table",8)(604,"tr",9)(605,"th",10)(606,"div",11)(607,"h4")(608,"span",12),e(609," setCurrentThemeA11y "),n()()()()(),t(610,"tr",13)(611,"td",13)(612,"p"),e(613,"Define o n\xEDvel de acessibilidade para um tema j\xE1 ativo."),n()()()(),t(614,"h5")(615,"b"),e(616,"Par\xE2metros"),n()(),t(617,"table",14)(618,"tr",15)(619,"th",16),e(620,"Nome"),n(),t(621,"th",16),e(622,"Tipo"),n(),t(623,"th",16),e(624,"Descri\xE7\xE3o"),n()(),t(625,"tr",9)(626,"td",17),e(627," a11y"),n(),t(628,"td",18)(629,"code",19),e(630," PoThemeA11yEnum "),n()(),t(631,"td",13)(632,"p"),e(633,`(Opcional) N\xEDvel de acessibilidade dos componentes podendo ser
AA ou AAA. Por padr\xE3o a acessibilidade \xE9 AAA.`),n()()()(),i(634,"br"),t(635,"h3"),e(636,"Interfaces"),n(),t(637,"h4",23)(638,"code",5),e(639,"PoThemeColor"),n()(),t(640,"div",2)(641,"p"),e(642,"Interface para representar as cores do tema."),n()(),t(643,"h4",7),e(644,"Propriedades"),n(),t(645,"table",14)(646,"tr",15)(647,"th",16),e(648,"Nome"),n(),t(649,"th",16),e(650,"Tipo"),n(),t(651,"th",16),e(652,"Descri\xE7\xE3o"),n()(),t(653,"tr",9)(654,"td",17)(655,"div",11)(656,"span",12),e(657," action"),i(658,"br"),n()()(),t(659,"td",18)(660,"code",24),e(661,"PoThemeColorAction"),n()(),t(662,"td",13)(663,"em")(664,"strong"),e(665,"(opcional)"),n()(),t(666,"p"),e(667,"Cores da Action a serem aplicadas."),n(),t(668,"p"),e(669,"Exemplo de uso:"),n(),t(670,"pre")(671,"code",25),e(672,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
 hover: 'var(--color-brand-01-dark)',
 pressed: 'var(--color-brand-01-darker)',
 disabled: 'var(--color-neutral-light-30)',
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(673,"tr",9)(674,"td",17)(675,"div",11)(676,"span",12),e(677," brand"),i(678,"br"),n()()(),t(679,"td",18)(680,"code",26),e(681,"poThemeColorBrand"),n()(),t(682,"td",13)(683,"em")(684,"strong"),e(685,"(opcional)"),n()(),t(686,"p"),e(687,"Cores da Brand a serem aplicadas."),n(),t(688,"p"),e(689,"Exemplo de uso:"),n(),t(690,"pre")(691,"code",20),e(692,`PoThemeColor.brand = {
 01: PoThemeColorTone,
 02: PoThemeColorTone,
 03: PoThemeColorTone
}
`),n()()()(),t(693,"tr",9)(694,"td",17)(695,"div",11)(696,"span",12),e(697," categorical"),i(698,"br"),n()()(),t(699,"td",18)(700,"code",27),e(701,"PoThemeColorCategorical"),n()(),t(702,"td",13)(703,"em")(704,"strong"),e(705,"(opcional)"),n()(),t(706,"p"),e(707,"Cores da Categorical a serem aplicadas."),n(),t(708,"p"),e(709,"Exemplo de uso:"),n(),t(710,"pre")(711,"code",20),e(712,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(713,"tr",9)(714,"td",17)(715,"div",11)(716,"span",12),e(717," categorical-overlay"),i(718,"br"),n()()(),t(719,"td",18)(720,"code",27),e(721,"PoThemeColorCategorical"),n()(),t(722,"td",13)(723,"em")(724,"strong"),e(725,"(opcional)"),n()(),t(726,"p"),e(727,"Cores da Categorical a serem aplicadas."),n(),t(728,"p"),e(729,"Exemplo de uso:"),n(),t(730,"pre")(731,"code",20),e(732,`PoThemeColor.categorical = {
 01: string,
 02: string,
 03: string
}
`),n()()()(),t(733,"tr",9)(734,"td",17)(735,"div",11)(736,"span",12),e(737," neutral"),i(738,"br"),n()()(),t(739,"td",18)(740,"code",28),e(741,"PoThemeColorNeutral"),n()(),t(742,"td",13)(743,"em")(744,"strong"),e(745,"(opcional)"),n()(),t(746,"p"),e(747,"Cores Neutrals a serem aplicadas."),n(),t(748,"p"),e(749,"Exemplo de uso:"),n(),t(750,"pre")(751,"code",20),e(752,`PoThemeColor.neutral = {
 light: { '00': string, '05': string, '10': string, '20': string, '30': string },
 mid: { '40': string, '60': string },
 dark: { '70': string, '80': string, '90': string, '95': string },
}
`),n()()()()(),t(753,"h4",23)(754,"code",5),e(755,"PoThemeColorAction"),n()(),t(756,"div",2)(757,"p"),e(758,"Interface para as cores de a\xE7\xE3o do tema."),n()(),t(759,"h4",7),e(760,"Propriedades"),n(),t(761,"table",14)(762,"tr",15)(763,"th",16),e(764,"Nome"),n(),t(765,"th",16),e(766,"Tipo"),n(),t(767,"th",16),e(768,"Descri\xE7\xE3o"),n()(),t(769,"tr",9)(770,"td",17)(771,"div",11)(772,"span",12),e(773," default"),i(774,"br"),n()()(),t(775,"td",18)(776,"code",29),e(777,"string"),n()(),t(778,"td",13)(779,"em")(780,"strong"),e(781,"(opcional)"),n()(),t(782,"p"),e(783,"Cores da Action 'Default'."),n(),t(784,"p"),e(785,"Exemplo de uso:"),n(),t(786,"pre")(787,"code",20),e(788,`PoThemeColor.action = {
 default: 'var(--color-brand-01-base)',
}
`),n()()()(),t(789,"tr",9)(790,"td",17)(791,"div",11)(792,"span",12),e(793," disabled"),i(794,"br"),n()()(),t(795,"td",18)(796,"code",29),e(797,"string"),n()(),t(798,"td",13)(799,"em")(800,"strong"),e(801,"(opcional)"),n()(),t(802,"p"),e(803,"Cores da Action de 'disabled'."),n(),t(804,"p"),e(805,"Exemplo de uso:"),n(),t(806,"pre")(807,"code",20),e(808,`PoThemeColor.action = {
 disabled: 'var(--color-neutral-light-30)',
}
`),n()()()(),t(809,"tr",9)(810,"td",17)(811,"div",11)(812,"span",12),e(813," focus"),i(814,"br"),n()()(),t(815,"td",18)(816,"code",29),e(817,"string"),n()(),t(818,"td",13)(819,"em")(820,"strong"),e(821,"(opcional)"),n()(),t(822,"p"),e(823,"Cores da Action para 'focus'."),n(),t(824,"p"),e(825,"Exemplo de uso:"),n(),t(826,"pre")(827,"code",20),e(828,`PoThemeColor.action = {
 focus: 'var(--color-brand-01-darkest)'
}
`),n()()()(),t(829,"tr",9)(830,"td",17)(831,"div",11)(832,"span",12),e(833," hover"),i(834,"br"),n()()(),t(835,"td",18)(836,"code",29),e(837,"string"),n()(),t(838,"td",13)(839,"em")(840,"strong"),e(841,"(opcional)"),n()(),t(842,"p"),e(843,"Cores da Action para 'hover'."),n(),t(844,"p"),e(845,"Exemplo de uso:"),n(),t(846,"pre")(847,"code",20),e(848,`PoThemeColor.action = {
 hover: 'var(--color-brand-01-dark)',
}
`),n()()()(),t(849,"tr",9)(850,"td",17)(851,"div",11)(852,"span",12),e(853," pressed"),i(854,"br"),n()()(),t(855,"td",18)(856,"code",29),e(857,"string"),n()(),t(858,"td",13)(859,"em")(860,"strong"),e(861,"(opcional)"),n()(),t(862,"p"),e(863,"Cores da Action para 'pressed'."),n(),t(864,"p"),e(865,"Exemplo de uso:"),n(),t(866,"pre")(867,"code",20),e(868,`PoThemeColor.action = {
 pressed: 'var(--color-brand-01-darker)',
}
`),n()()()()(),t(869,"h4",23)(870,"code",5),e(871,"PoThemeColorNeutral"),n()(),t(872,"div",2)(873,"p"),e(874,"Interface para as cores neutras do tema."),n()(),t(875,"h4",7),e(876,"Propriedades"),n(),t(877,"table",14)(878,"tr",15)(879,"th",16),e(880,"Nome"),n(),t(881,"th",16),e(882,"Tipo"),n(),t(883,"th",16),e(884,"Descri\xE7\xE3o"),n()(),t(885,"tr",9)(886,"td",17)(887,"div",11)(888,"span",12),e(889," dark"),i(890,"br"),n()()(),t(891,"td",18)(892,"code",30),e(893,`{ '70'?: string; '80'?: string; '90'?: string; '95'?: string;
}`),n()(),t(894,"td",13)(895,"em")(896,"strong"),e(897,"(opcional)"),n()(),t(898,"p"),e(899,"Cores Neutrals do tipo 'dark'."),n(),t(900,"p"),e(901,"Exemplo de uso:"),n(),t(902,"pre")(903,"code",20),e(904,`PoThemeColor.neutral.dark = {
 '70': '#4a5c60',
 '80': '#2c3739',
 '90': '#1d2426',
 '95': '#0b0e0e',
}
`),n()()()(),t(905,"tr",9)(906,"td",17)(907,"div",11)(908,"span",12),e(909," light"),i(910,"br"),n()()(),t(911,"td",18)(912,"code",31),e(913,`{ '00'?: string; '05'?: string; '10'?: string; '20'?: string; '30'?: string;
}`),n()(),t(914,"td",13)(915,"em")(916,"strong"),e(917,"(opcional)"),n()(),t(918,"p"),e(919,"Cores Neutrals do tipo 'light'."),n(),t(920,"p"),e(921,"Exemplo de uso:"),n(),t(922,"pre")(923,"code",20),e(924,`PoThemeColor.neutral.light = {
 '00': '#ffffff',
 '05': '#fbfbfb',
 '10': '#eceeee',
 '20': '#dadedf',
 '30': '#b6bdbf'
}
`),n()()()(),t(925,"tr",9)(926,"td",17)(927,"div",11)(928,"span",12),e(929," mid"),i(930,"br"),n()()(),t(931,"td",18)(932,"code",32),e(933,`{ '40'?: string; '60'?: string;
}`),n()(),t(934,"td",13)(935,"em")(936,"strong"),e(937,"(opcional)"),n()(),t(938,"p"),e(939,"Cores Neutrals do tipo 'mid'."),n(),t(940,"p"),e(941,"Exemplo de uso:"),n(),t(942,"pre")(943,"code",20),e(944,`PoThemeColor.neutral.mid = {
 '40': '#9da7a9',
 '60': '#6e7c7f',
}
`),n()()()()(),t(945,"h4",23)(946,"code",5),e(947,"PoThemeTokens"),n()(),t(948,"div",2)(949,"p"),e(950,"Interface para o tema da aplica\xE7\xE3o."),n()(),t(951,"h4",23)(952,"code",5),e(953,"PoThemeToken"),n()(),t(954,"div",2)(955,"p"),e(956,"Interface para os tokens do Tema."),n()(),t(957,"h4",7),e(958,"Propriedades"),n(),t(959,"table",14)(960,"tr",15)(961,"th",16),e(962,"Nome"),n(),t(963,"th",16),e(964,"Tipo"),n(),t(965,"th",16),e(966,"Descri\xE7\xE3o"),n()(),t(967,"tr",9)(968,"td",17)(969,"div",11)(970,"span",12),e(971," color"),i(972,"br"),n()()(),t(973,"td",18)(974,"code",33),e(975,"PoThemeColor"),n()(),t(976,"td",13)(977,"em")(978,"strong"),e(979,"(opcional)"),n()(),t(980,"p"),e(981,"Tokens do tipo 'color'"),n()()(),t(982,"tr",9)(983,"td",17)(984,"div",11)(985,"span",12),e(986," onRoot"),i(987,"br"),n()()(),t(988,"td",18)(989,"code",34),e(990,"DynamicProperties"),n()(),t(991,"td",13)(992,"em")(993,"strong"),e(994,"(opcional)"),n()(),t(995,"p"),e(996,`Tokens do tipo 'onRoot'
Esta propriedade adicionar\xE1 todos os tokens passados e adicionado direto no `),t(997,"code"),e(998,":root"),n()(),t(999,"p"),e(1e3,"Exemplo de uso:"),n(),t(1001,"pre")(1002,"code",20),e(1003,`onRoot: {
  '--color-page-background-color-page': '#121212',
  '--color-toolbar-color-badge-text': 'var(--color-neutral-dark-95)',
},
`),n()()()(),t(1004,"tr",9)(1005,"td",17)(1006,"div",11)(1007,"span",12),e(1008," perComponent"),i(1009,"br"),n()()(),t(1010,"td",18)(1011,"code",34),e(1012,"DynamicProperties"),n()(),t(1013,"td",13)(1014,"em")(1015,"strong"),e(1016,"(opcional)"),n()(),t(1017,"p"),e(1018,"Tokens do tipo 'perComponent'"),n(),t(1019,"p"),e(1020,"Exemplo de uso:"),n(),t(1021,"pre")(1022,"code",20),e(1023,`perComponent: {
  'po-badge': {
    '--color': 'var(--color-neutral-dark-95)',
  },
  'po-container': {
    '--background': '#121212',
  },
},
`),n()()()()(),t(1024,"h4",23)(1025,"code",5),e(1026,"PoTheme"),n()(),t(1027,"div",2)(1028,"p"),e(1029,"Interface para o m\xE9todo "),t(1030,"code"),e(1031,"setTheme()"),n(),e(1032,"."),n()(),t(1033,"h4",7),e(1034,"Propriedades"),n(),t(1035,"table",14)(1036,"tr",15)(1037,"th",16),e(1038,"Nome"),n(),t(1039,"th",16),e(1040,"Tipo"),n(),t(1041,"th",16),e(1042,"Descri\xE7\xE3o"),n()(),t(1043,"tr",9)(1044,"td",17)(1045,"div",11)(1046,"span",12),e(1047," active"),i(1048,"br"),n()()(),t(1049,"td",18)(1050,"code",35),e(1051,"PoThemeTypeEnum "),n(),t(1052,"code",36),e(1053," PoThemeActive"),n()(),t(1054,"td",13)(1055,"em")(1056,"strong"),e(1057,"(opcional)"),n()(),t(1058,"p"),e(1059,"Tipo e n\xEDvel de acessibilidade de tema ativo"),n()()(),t(1060,"tr",9)(1061,"td",17)(1062,"div",11)(1063,"span",12),e(1064," name"),i(1065,"br"),n()()(),t(1066,"td",18)(1067,"code",29),e(1068,"string"),n()(),t(1069,"td",13)(1070,"p"),e(1071,`Nome para o tema:
Ex.: default, totvs, sunset...`),n()()(),t(1072,"tr",9)(1073,"td",17)(1074,"div",11)(1075,"span",12),e(1076," type"),i(1077,"br"),n()()(),t(1078,"td",18)(1079,"code",37),e(1080,"PoThemeType "),n(),t(1081,"code",38),e(1082," Array<PoThemeType>"),n()(),t(1083,"td",13)(1084,"p"),e(1085,"Tipo de tema:"),n(),t(1086,"ul")(1087,"li"),e(1088,"light"),n(),t(1089,"li"),e(1090,"dark"),n()()()()(),t(1091,"h3"),e(1092,"Enums"),n(),t(1093,"h4",4)(1094,"code",5),e(1095,"PoThemeA11yEnum"),n()(),t(1096,"div",2)(1097,"p"),e(1098,"Enum para configurar o n\xEDvel de acessibilidade dos componentes atrav\xE9s do servi\xE7o de tema."),n(),t(1099,"pre")(1100,"code"),e(1101,`import { PoThemeA11yEnum } from '@po-ui/theme';

// Definindo o n\xEDvel de acessibilidade ao configurar as cores e o tipo do tema (light | dark)
themeService.setTheme(...theme, ...type, PoThemeA11yEnum.AA);

// Definindo o n\xEDvel de acessibilidade ao configurar apenas as cores do tema
themeService.setThemeA11y(...theme, PoThemeA11yEnum.AAA);

// Alterando o n\xEDvel de acessibilidade com as cores do tema j\xE1 definidas
themeService.setCurrentThemeA11y(PoThemeA11yEnum.AAA);
`),n()()(),t(1102,"h4",7),e(1103,"Propriedades"),n(),t(1104,"table",14)(1105,"tr",15)(1106,"th",16),e(1107,"Nome"),n(),t(1108,"th",16),e(1109,"Descri\xE7\xE3o"),n()(),t(1110,"tr",9)(1111,"td",17)(1112,"div",11)(1113,"span",12),e(1114," AA"),i(1115,"br"),n()()(),t(1116,"td",13)(1117,"p"),e(1118,"N\xEDvel de acessibilidade AA."),n(),t(1119,"ul")(1120,"li"),e(1121,"Define a espessura do "),t(1122,"code"),e(1123,"outline"),n(),e(1124," para "),t(1125,"strong"),e(1126,"2px"),n(),e(1127,"."),n(),t(1128,"li"),e(1129,"Disponibiliza o tamanho "),t(1130,"code"),e(1131,"small"),n(),e(1132,` para componentes de formul\xE1rio (buttons, inputs, checkboxes, radios e switches)
conforme suas documenta\xE7\xF5es.`),n()()()(),t(1133,"tr",9)(1134,"td",17)(1135,"div",11)(1136,"span",12),e(1137," AAA"),i(1138,"br"),n()()(),t(1139,"td",13)(1140,"p"),e(1141,"N\xEDvel de acessibilidade AAA."),n(),t(1142,"ul")(1143,"li"),e(1144,"Define a espessura do "),t(1145,"code"),e(1146,"outline"),n(),e(1147," para "),t(1148,"strong"),e(1149,"4px"),n(),e(1150,"."),n(),t(1151,"li"),e(1152,"N\xE3o disponibiliza o tamanho "),t(1153,"code"),e(1154,"small"),n(),e(1155," para componentes de formul\xE1rio."),n()()()()(),t(1156,"h4",4)(1157,"code",5),e(1158,"PoThemeTypeEnum"),n()(),t(1159,"div",2)(1160,"p"),e(1161,"Enum utilizado para configurar o tipo de tema suportado, \xE9 poss\xEDvel alternar entre os tipos definidos."),n(),t(1162,"pre")(1163,"code"),e(1164,`import { PoThemeTypeEnum } from '@po-ui/theme';

// Definindo o tipo de tema como claro
themeService.setTheme(...theme, PoThemeTypeEnum.light);

// Definindo o tipo de tema como escuro
themeService.setTheme(...theme, PoThemeTypeEnum.dark);

// Alterando o tipo do tema para um tema j\xE1 aplicado
themeService.setCurrentThemeType(PoThemeTypeEnum.dark);
`),n()()(),t(1165,"h4",7),e(1166,"Propriedades"),n(),t(1167,"table",14)(1168,"tr",15)(1169,"th",16),e(1170,"Nome"),n(),t(1171,"th",16),e(1172,"Descri\xE7\xE3o"),n()(),t(1173,"tr",9)(1174,"td",17)(1175,"div",11)(1176,"span",12),e(1177," light"),i(1178,"br"),n()()(),t(1179,"td",13)(1180,"p"),e(1181,"Define o tema como claro."),n()()(),t(1182,"tr",9)(1183,"td",17)(1184,"div",11)(1185,"span",12),e(1186," dark"),i(1187,"br"),n()()(),t(1188,"td",13)(1189,"p"),e(1190,"Define o tema como escuro."),n()()()()())},encapsulation:2})}return m})();var fe=(()=>{class m{route;router;sub;hidePoWebSample=!0;samplesLength=1;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(r,o){this.route=r,this.router=o}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(r=>{let o=r.view;this.activeTab=o||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(r){this.router.navigate([],{queryParams:{view:r},queryParamsHandling:"merge"}),this.activeTab=r}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(o){return new(o||m)(v($),v(ee))};static \u0275cmp=S({type:m,selectors:[["ng-component"]],standalone:!1,decls:6,vars:4,consts:[["p-title","Theme",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(o,a){o&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),E("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-theme-doc"),n(),t(4,"po-tab",3),E("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-theme-labs-view"),n()()()),o&2&&(d("p-actions",a.actions),l(2),d("p-active",a.activeTab==="doc"),l(2),d("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[he,y,C,be,ge],encapsulation:2})}return m})();var Le=[{path:"",component:fe}],Te=(()=>{class m{static \u0275fac=function(o){return new(o||m)};static \u0275mod=T({type:m});static \u0275inj=f({imports:[F.forChild(Le),F]})}return m})();var Xe=(()=>{class m{static \u0275fac=function(o){return new(o||m)};static \u0275mod=T({type:m});static \u0275inj=f({imports:[Se,Te]})}return m})();export{Xe as DocPoThemeModule};
