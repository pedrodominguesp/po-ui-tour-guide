import{o as b,p as Q}from"./chunk-AT3MKFJ3.js";import{Gb as x,Hb as S,Qb as N,db as C,tb as Y,w as L,za as V}from"./chunk-GCMU57WK.js";import{Ea as p,Fa as i,Ga as t,H as D,Ha as n,I as P,L as g,Mb as h,O as k,Oa as w,P as q,Pa as c,Va as A,Wa as M,Xa as j,_a as y,bb as v,cb as e,cd as J,eb as f,ed as W,gd as H,ha as d,ma as B,oa as s,pa as T,pb as z,qb as X,rb as E}from"./chunk-XD3NZLB4.js";import{a as R}from"./chunk-GAL4ENT6.js";var me=()=>({property:"name",required:!0,showRequired:!0}),le=o=>[o],G=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-fields"]],template:function(a,r){a&1&&n(0,"po-dynamic-form",0),a&2&&p("p-fields",E(2,le,X(1,me)))},dependencies:[C],encapsulation:2})}return o})();var pe=o=>({"docs-sample-code-tabs":o}),$=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form Basic"),t(),i(4,"a",2),c("click",function(){return r.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.html"),t(),i(13,"pre",7),e(14,`<po-dynamic-form [p-fields]="[{ property: 'name', required: true, showRequired: true }]"> </po-dynamic-form>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-basic/sample-po-dynamic-form-basic.component.ts"),t(),i(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-dynamic-form-basic',
  templateUrl: './sample-po-dynamic-form-basic.component.html',
  standalone: false
})
export class SamplePoDynamicFormBasicComponent {}
`),t()()()()(),i(21,"div",10),n(22,"sample-po-dynamic-form-basic"),t(),n(23,"hr")),a&2&&(d(5),v("po-icon "+r.sampleCodeButtonIcon),d(),f(" ",r.sampleCodeButtonLabel),d(),p("ngClass",E(4,pe,r.hideSampleCodeTabs)))},dependencies:[h,b,x,S,G],encapsulation:2})}return o})();var U=(()=>{class o{getCity(m){switch(m){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(m){let a={property:"cpf",visible:!0},r={property:"cnpj",visible:!0};return{fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var ce=["dynamicForm"],ee=(()=>{class o{poNotification=g(V);registerService=g(U);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",divider:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password"},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",divider:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",divider:"Work data",range:!0,gridColumns:5,gridSmColumns:12},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",divider:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:N.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile"}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(m){return setTimeout(()=>{let a=this.registerService.getCity(m.value.state);this.updateDynamicFormField("city",{options:a,loading:!1})},500),{value:{city:void 0},fields:[{property:"city",gridColumns:6,disabled:!1,loading:!0}]}}onLoadFields(m){return this.registerService.getUserDocument(m)}updateDynamicFormField(m,a){let r=this.dynamicForm?.fields??this.fields,l=r.findIndex(O=>O.property===m);l>=0&&(r[l]=R(R({},r[l]),a),this.fields=[...r])}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register"]],viewQuery:function(a,r){if(a&1&&A(ce,7),a&2){let l;M(l=j())&&(r.dynamicForm=l.first)}},standalone:!1,features:[z([U])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=w();n(0,"po-dynamic-form",1,0)(2,"br"),i(3,"div",2)(4,"po-button",3),c("p-click",function(){k(l);let I=y(1);return r.poNotification.success("Data saved successfully!"),q(I.form.reset())}),t()()}if(a&2){let l=y(1);p("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),d(4),p("p-disabled",l==null?null:l.form.invalid)}},dependencies:[L,C],encapsulation:2})}return o})();var Ee=o=>({"docs-sample-code-tabs":o}),te=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-register-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Register"),t(),i(4,"a",2),c("click",function(){return r.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.html"),t(),i(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  ForceBooleanComponentEnum,
  PoDynamicFormComponent
} from '@po-ui/ng-components';
import { PoDynamicFormRegisterService } from './sample-po-dynamic-form-register.service';

@Component({
  selector: 'sample-po-dynamic-form-register',
  templateUrl: './sample-po-dynamic-form-register.component.html',
  providers: [PoDynamicFormRegisterService],
  standalone: false
})
export class SamplePoDynamicFormRegisterComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormRegisterService);
  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      divider: 'PERSONAL DATA',
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
      order: -1
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
      placeholder: 'Type your password'
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
    { property: 'email', divider: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
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
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      divider: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      divider: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile'
    }
  ];
  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    setTimeout(() => {
      const options = this.registerService.getCity(changedValue.value.state);
      this.updateDynamicFormField('city', { options, loading: false });
    }, 500);
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          disabled: false,
          loading: true
        }
      ]
    };
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }

  private updateDynamicFormField(property: string, updates: Partial<PoDynamicFormField>): void {
    const currentFields = this.dynamicForm?.fields ?? this.fields;
    const index = currentFields.findIndex(field => field.property === property);
    if (index >= 0) {
      currentFields[index] = { ...currentFields[index], ...updates };
      this.fields = [...currentFields];
    }
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-dynamic-form-register/sample-po-dynamic-form-register.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormRegisterService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-dynamic-form-register"),t(),n(27,"hr")),a&2&&(d(5),v("po-icon "+r.sampleCodeButtonIcon),d(),f(" ",r.sampleCodeButtonLabel),d(),p("ngClass",E(4,Ee,r.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ee],encapsulation:2})}return o})();var K=(()=>{class o{getCity(m){switch(m){case 1:return[{city:"Palho\xE7a",code:5},{city:"Lages",code:6},{city:"Balne\xE1rio Cambori\xFA",code:7},{city:"Brusque",code:8}];case 2:return[{city:"S\xE3o Paulo",code:9},{city:"Guarulhos",code:10},{city:"Campinas",code:11},{city:"S\xE3o Bernardo do Campo",code:12}];case 3:return[{city:"Rio de Janeiro",code:13},{city:"S\xE3o Gon\xE7alo",code:14},{city:"Duque de Caxias",code:15},{city:"Nova Igua\xE7u",code:16}];case 4:return[{city:"Belo Horizonte",code:17},{city:"Uberl\xE2ndia",code:18},{city:"Contagem",code:19},{city:"Juiz de Fora",code:20}]}return[]}getUserDocument(m){let a={property:"cpf",visible:!0},r={property:"cnpj",visible:!0};return{fields:[m.isJuridicPerson?r:a]}}static \u0275fac=function(a){return new(a||o)};static \u0275prov=D({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Se=["dynamicForm"],ie=(()=>{class o{poNotification=g(V);registerService=g(K);dynamicForm;person={};validateFields=["state"];fields=[{property:"name",container:"PERSONAL DATA",required:!0,minLength:4,maxLength:50,gridColumns:6,gridSmColumns:12,order:1,placeholder:"Type your name"},{property:"birthday",label:"Date of birth",type:"date",format:"mm/dd/yyyy",gridColumns:6,gridSmColumns:12,maxValue:"2010-01-01",errorMessage:"The date must be before the year 2010.",order:-1,help:"Enter or select a valid date.",additionalHelpTooltip:"Please enter a valid date in the format MMDDYYYY.",keydown:this.onKeyDown.bind(this,"birthday")},{property:"cpf",label:"CPF",mask:"999.999.999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"cnpj",label:"CNPJ",mask:"99.999.999/9999-99",gridColumns:6,gridSmColumns:12,visible:!1},{property:"genre",gridColumns:6,gridSmColumns:12,options:["Male","Female","Other"],order:2},{property:"shortDescription",label:"Short Description",gridColumns:12,gridSmColumns:12,rows:5,placeholder:"Type short description"},{property:"secretKey",label:"Secret Key",gridColumns:6,secret:!0,pattern:"[a-zA]{5}[Z0-9]{3}",errorMessage:"At least 5 alphabetic and 3 numeric characters are required.",placeholder:"Type your password",help:"Password must include a combination of letters and numbers.",additionalHelpTooltip:"At least 5 alphabetic and 3 numeric characters are required.",keydown:this.onKeyDown.bind(this,"secretKey")},{property:"rememberSecretKey",label:"Remember Secret Key",gridColumns:3,type:"boolean",booleanTrue:"yes",booleanFalse:"no",formatModel:!0},{property:"status",label:"Status",gridColumns:3,type:"boolean",booleanTrue:"Active",booleanFalse:"Inactive",formatModel:!0},{property:"email",container:"CONTACTS",gridColumns:6,icon:"an an-envelope"},{property:"phone",mask:"(99) 99999-9999",gridColumns:6},{property:"address",gridColumns:6},{property:"addressNumber",label:"Address number",type:"number",gridColumns:6,maxValue:1e4,errorMessage:"Invalid number."},{property:"state",gridColumns:6,options:[{state:"Santa Catarina",code:1},{state:"S\xE3o Paulo",code:2},{state:"Rio de Janeiro",code:3},{state:"Minas Gerais",code:4}],fieldLabel:"state",fieldValue:"code"},{property:"city",disabled:!0,gridColumns:6,fieldValue:"code",fieldLabel:"city"},{property:"vacation",type:"date",container:"Work data",range:!0,gridColumns:5,gridSmColumns:12,help:"Enter or select a valid date range.",additionalHelpTooltip:"Ensure the start date is earlier than or equal to the end date.",keydown:this.onKeyDown.bind(this,"vacation")},{property:"entryTime",label:"Entry time",type:"time",gridColumns:2,gridSmColumns:6},{property:"exitTime",label:"Exit time",type:"time",gridColumns:2,gridSmColumns:6},{property:"wage",type:"currency",gridColumns:3,gridSmColumns:12,decimalsLength:2,thousandMaxlength:7,icon:"an an-currency-circle-dollar"},{property:"hobbies",container:"MORE INFO",gridColumns:6,gridSmColumns:12,optional:!0,options:["Soccer","Basketball","Bike","Yoga","Travel","Run"],optionsMulti:!0,listboxControlPosition:"top"},{property:"favoriteHero",gridColumns:6,gridSmColumns:12,label:"Favorite hero",optional:!0,searchService:"https://po-sample-api.onrender.com/v1/heroes",columns:[{property:"nickname",label:"Hero"},{property:"label",label:"Name"}],format:["id","nickname"],fieldLabel:"nickname",fieldValue:"email"},{property:"partner",gridColumns:6,gridSmColumns:12,optionsService:"https://po-sample-api.onrender.com/v1/people",fieldLabel:"name",fieldValue:"id",optional:!0,listboxControlPosition:"top"},{property:"videogame",gridColumns:6,gridSmColumns:12,label:"Video game console",optional:!0,fieldValue:"code",fieldLabel:"console",options:[{console:"Nintendo Wii U",code:"NWU"},{console:"Playstation 4",code:"PS4"},{console:"Xbox One",code:"XONE"},{console:"Nintendo Switch",code:"NSW"},{console:"Playstation 5",code:"PS5"},{console:"Xbox Series S|X",code:"XSSX"}],optionsMulti:!0,listboxControlPosition:"top"},{property:"agree",gridColumns:12,label:"Do you agree?",type:"boolean",forceBooleanComponentType:N.checkbox},{property:"image",type:"upload",gridColumns:12,gridSmColumns:12,label:"Upload your background",optional:!0,url:"https://po-sample-api.onrender.com/v1/uploads/addFile",customAction:{icon:"an an-download",visible:!0},customActionClick:m=>{console.log("Iniciar download para o arquivo:",m.name)}}];ngOnInit(){this.person={name:"Tony Stark",birthday:"1970-05-29",isJuridicPerson:!1,videogame:["PS4","NSW","XSSX"],rememberSecretKey:"no",status:"active"}}onChangeFields(m){return{value:{city:void 0},fields:[{property:"city",gridColumns:6,options:this.registerService.getCity(m.value.state),disabled:!1}]}}onKeyDown(m,a){a.code==="F9"&&this.dynamicForm.showAdditionalHelp(m)}onLoadFields(m){return this.registerService.getUserDocument(m)}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container"]],viewQuery:function(a,r){if(a&1&&A(Se,7),a&2){let l;M(l=j())&&(r.dynamicForm=l.first)}},standalone:!1,features:[z([K])],decls:5,vars:6,consts:[["dynamicForm",""],["p-auto-focus","name",3,"p-fields","p-load","p-validate","p-validate-fields","p-value"],[1,"po-row"],["p-label","Save",1,"po-md-3",3,"p-click","p-disabled"]],template:function(a,r){if(a&1){let l=w();n(0,"po-dynamic-form",1,0)(2,"br"),i(3,"div",2)(4,"po-button",3),c("p-click",function(){k(l);let I=y(1);return r.poNotification.success("Data saved successfully!"),q(I.form.reset())}),t()()}if(a&2){let l=y(1);p("p-fields",r.fields)("p-load",r.onLoadFields.bind(r))("p-validate",r.onChangeFields.bind(r))("p-validate-fields",r.validateFields)("p-value",r.person),d(4),p("p-disabled",l==null?null:l.form.invalid)}},dependencies:[L,C],encapsulation:2})}return o})();var ge=o=>({"docs-sample-code-tabs":o}),ne=(()=>{class o{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-container-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(a,r){a&1&&(n(0,"br"),i(1,"blockquote",0)(2,"label",1),e(3,"PO Dynamic Form - Container"),t(),i(4,"a",2),c("click",function(){return r.toggleSampleCodeTabs()}),n(5,"span"),e(6),t()(),i(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.html"),t(),i(13,"pre",7),e(14,`<po-dynamic-form
  #dynamicForm
  p-auto-focus="name"
  [p-fields]="fields"
  [p-load]="onLoadFields.bind(this)"
  [p-validate]="this.onChangeFields.bind(this)"
  [p-validate-fields]="validateFields"
  [p-value]="person"
>
</po-dynamic-form>

<br />

<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Save"
    [p-disabled]="dynamicForm?.form.invalid"
    (p-click)="poNotification.success('Data saved successfully!'); dynamicForm.form.reset()"
  >
  </po-button>
</div>
`),t()()(),i(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.component.ts"),t(),i(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';

import {
  ForceBooleanComponentEnum,
  PoDynamicFormComponent,
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService,
  PoUploadFile
} from '@po-ui/ng-components';
import { PoDynamicFormContainerService } from './sample-po-dynamic-form-container.service';

@Component({
  selector: 'sample-po-dynamic-form-container',
  templateUrl: './sample-po-dynamic-form-container.component.html',
  providers: [PoDynamicFormContainerService],
  standalone: false
})
export class SamplePoDynamicFormContainerComponent implements OnInit {
  poNotification = inject(PoNotificationService);
  private registerService = inject(PoDynamicFormContainerService);

  @ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;
  person = {};
  validateFields: Array<string> = ['state'];

  fields: Array<PoDynamicFormField> = [
    {
      property: 'name',
      container: 'PERSONAL DATA',
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
      additionalHelpTooltip: 'Please enter a valid date in the format MMDDYYYY.',
      keydown: this.onKeyDown.bind(this, 'birthday')
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
      additionalHelpTooltip: 'At least 5 alphabetic and 3 numeric characters are required.',
      keydown: this.onKeyDown.bind(this, 'secretKey')
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
    { property: 'email', container: 'CONTACTS', gridColumns: 6, icon: 'an an-envelope' },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
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
    { property: 'city', disabled: true, gridColumns: 6, fieldValue: 'code', fieldLabel: 'city' },
    {
      property: 'vacation',
      type: 'date',
      container: 'Work data',
      range: true,
      gridColumns: 5,
      gridSmColumns: 12,
      help: 'Enter or select a valid date range.',
      additionalHelpTooltip: 'Ensure the start date is earlier than or equal to the end date.',
      keydown: this.onKeyDown.bind(this, 'vacation')
    },
    {
      property: 'entryTime',
      label: 'Entry time',
      type: 'time',
      gridColumns: 2,
      gridSmColumns: 6
    },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 2, gridSmColumns: 6 },
    {
      property: 'wage',
      type: 'currency',
      gridColumns: 3,
      gridSmColumns: 12,
      decimalsLength: 2,
      thousandMaxlength: 7,
      icon: 'an an-currency-circle-dollar'
    },
    {
      property: 'hobbies',
      container: 'MORE INFO',
      gridColumns: 6,
      gridSmColumns: 12,
      optional: true,
      options: ['Soccer', 'Basketball', 'Bike', 'Yoga', 'Travel', 'Run'],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'favoriteHero',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Favorite hero',
      optional: true,
      searchService: 'https://po-sample-api.onrender.com/v1/heroes',
      columns: [
        { property: 'nickname', label: 'Hero' },
        { property: 'label', label: 'Name' }
      ],
      format: ['id', 'nickname'],
      fieldLabel: 'nickname',
      fieldValue: 'email'
    },
    {
      property: 'partner',
      gridColumns: 6,
      gridSmColumns: 12,
      optionsService: 'https://po-sample-api.onrender.com/v1/people',
      fieldLabel: 'name',
      fieldValue: 'id',
      optional: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'videogame',
      gridColumns: 6,
      gridSmColumns: 12,
      label: 'Video game console',
      optional: true,
      fieldValue: 'code',
      fieldLabel: 'console',
      options: [
        { console: 'Nintendo Wii U', code: 'NWU' },
        { console: 'Playstation 4', code: 'PS4' },
        { console: 'Xbox One', code: 'XONE' },
        { console: 'Nintendo Switch', code: 'NSW' },
        { console: 'Playstation 5', code: 'PS5' },
        { console: 'Xbox Series S|X', code: 'XSSX' }
      ],
      optionsMulti: true,
      listboxControlPosition: 'top'
    },
    {
      property: 'agree',
      gridColumns: 12,
      label: 'Do you agree?',
      type: 'boolean',
      forceBooleanComponentType: ForceBooleanComponentEnum.checkbox
    },
    {
      property: 'image',
      type: 'upload',
      gridColumns: 12,
      gridSmColumns: 12,
      label: 'Upload your background',
      optional: true,
      url: 'https://po-sample-api.onrender.com/v1/uploads/addFile',
      customAction: { icon: 'an an-download', visible: true },
      customActionClick: (file: PoUploadFile) => {
        console.log('Iniciar download para o arquivo:', file.name);
      }
    }
  ];

  ngOnInit() {
    this.person = {
      name: 'Tony Stark',
      birthday: '1970-05-29',
      isJuridicPerson: false,
      videogame: ['PS4', 'NSW', 'XSSX'],
      rememberSecretKey: 'no',
      status: 'active'
    };
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: { city: undefined },
      fields: [
        {
          property: 'city',
          gridColumns: 6,
          options: this.registerService.getCity(changedValue.value.state),
          disabled: false
        }
      ]
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.dynamicForm.showAdditionalHelp(property);
    }
  }

  onLoadFields(value: any) {
    return this.registerService.getUserDocument(value);
  }
}
`),t(),i(21,"label",6),e(22,"sample-po-dynamic-form-container/sample-po-dynamic-form-container.service.ts"),t(),i(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoDynamicFormContainerService {
  getCity(state: number) {
    switch (state) {
      case 1: {
        return [
          { city: 'Palho\xE7a', code: 5 },
          { city: 'Lages', code: 6 },
          { city: 'Balne\xE1rio Cambori\xFA', code: 7 },
          { city: 'Brusque', code: 8 }
        ];
      }
      case 2: {
        return [
          { city: 'S\xE3o Paulo', code: 9 },
          { city: 'Guarulhos', code: 10 },
          { city: 'Campinas', code: 11 },
          { city: 'S\xE3o Bernardo do Campo', code: 12 }
        ];
      }
      case 3: {
        return [
          { city: 'Rio de Janeiro', code: 13 },
          { city: 'S\xE3o Gon\xE7alo', code: 14 },
          { city: 'Duque de Caxias', code: 15 },
          { city: 'Nova Igua\xE7u', code: 16 }
        ];
      }
      case 4: {
        return [
          { city: 'Belo Horizonte', code: 17 },
          { city: 'Uberl\xE2ndia', code: 18 },
          { city: 'Contagem', code: 19 },
          { city: 'Juiz de Fora', code: 20 }
        ];
      }
    }
    return [];
  }

  getUserDocument(value) {
    const cpfField = { property: 'cpf', visible: true };
    const cnpjField = { property: 'cnpj', visible: true };
    const document = value.isJuridicPerson ? cnpjField : cpfField;

    return {
      fields: [document]
    };
  }
}
`),t()()()()(),i(25,"div",10),n(26,"sample-po-dynamic-form-container"),t(),n(27,"hr")),a&2&&(d(5),v("po-icon "+r.sampleCodeButtonIcon),d(),f(" ",r.sampleCodeButtonLabel),d(),p("ngClass",E(4,ge,r.hideSampleCodeTabs)))},dependencies:[h,b,x,S,ie],encapsulation:2})}return o})();var oe=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275cmp=s({type:o,selectors:[["sample-po-dynamic-form-doc"]],standalone:!1,decls:5164,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDynamicFormField>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"language-html"],[1,"language-ts"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","Function"],["href","documentation/po-dynamic-form#po-dynamic-form-load"],["href","documentation/po-dynamic-form#po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","any"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"language-javascript"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<PoLookupAdvancedFilter>"],["pan","",1,"docs-api-property-type","Array<PoLookupColumn>"],["pan","",1,"docs-api-property-type","number"],["href","/documentation/po-lookup"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","(file:","PoUploadFile)","=>","void"],["pan","",1,"docs-api-property-type","(value)","=>","Observable<boolean>"],["pan","",1,"docs-api-property-type","ErrorAsyncProperties"],["pan","",1,"docs-api-property-type","PoMultiselectFilterMode"],["pan","",1,"docs-api-property-type","ForceBooleanComponentEnum"],["pan","",1,"docs-api-property-type","ForceOptionComponentEnum"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"],["pan","",1,"docs-api-property-type","PoDatepickerIsoFormat"],["pan","",1,"docs-api-property-type","PoSwitchLabelPosition"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","PoLookupLiterals"],["pan","",1,"docs-api-property-type","PoMultiselectLiterals"],["pan","",1,"docs-api-property-type","PoComboLiterals"],["pan","",1,"docs-api-property-type","PoDatepickerRangeLiterals"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["href","documentation/po-i18n"],["pan","",1,"docs-api-property-type","'month-year'"],["pan","",1,"docs-api-property-type","'year'"],["pan","",1,"docs-api-property-type","PoTimepickerModelFormat"],["pan","",1,"docs-api-property-type","Array<PoSelectOption>"],["pan","",1,"docs-api-property-type","Array<PoMultiselectOption>"],["pan","",1,"docs-api-property-type","Array<PoCheckboxGroupOption>"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","PoComboFilter"],["pan","",1,"docs-api-property-type","PoMultiselectFilter"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<PoCalendarRangePreset>"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","PoLookupFilter"],["pan","",1,"docs-api-property-type","PoDynamicFieldType"],["href","documentation/po-dynamic-form#po-dynamic-form-field-validation"],["id","po-dynamic-form-load"],["id","po-dynamic-form-field-validation"],["pan","",1,"docs-api-property-type","PoDynamicFormField"],["id","po-dynamic-form-validation"],["pan","",1,"docs-api-property-type","'change'"],["pan","",1,"docs-api-property-type","'changeModel'"]],template:function(a,r){a&1&&(i(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoDynamicModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2),i(5,"h3",3),e(6,"Componente"),t(),i(7,"h4",4)(8,"code",5),e(9,"PoDynamicFormComponent"),t()(),i(10,"div",2)(11,"p"),e(12,"Componente para cria\xE7\xE3o de formul\xE1rios din\xE2micos a partir de uma lista de objetos."),t(),i(13,"p"),e(14,"Tamb\xE9m \xE9 poss\xEDvel verificar se o formul\xE1rio est\xE1 v\xE1lido e informar valores para a exibi\xE7\xE3o de informa\xE7\xF5es. "),t()(),i(15,"div",6)(16,"h4",7),e(17,"Seletor"),t(),i(18,"pre",8),e(19,`<po-dynamic-form
    p-auto-focus="string"
    p-components-size="string"
    p-fields="Array<PoDynamicFormField>"
    (p-form)="EventEmitter"
    p-group-form="boolean"
    p-load="string | Function"
    p-validate="string | Function"
    p-validate-fields="Array<string>"
    p-validate-on-input="boolean"
    p-value="any" >
</po-dynamic-form>
`),t()(),i(20,"h4",9),e(21,"Propriedades"),t(),i(22,"table",10)(23,"tr",11)(24,"th",12),e(25,"Nome"),t(),i(26,"th",12),e(27,"Tipo"),t(),i(28,"th",12),e(29,"Padr\xE3o"),t(),i(30,"th",12),e(31,"Descri\xE7\xE3o"),t()(),i(32,"tr",13)(33,"td",14)(34,"div",15)(35,"span",16),e(36," p-auto-focus"),n(37,"br"),t()()(),i(38,"td",17)(39,"code",18),e(40,"string"),t()(),i(41,"td",19),e(42,"-"),t(),i(43,"td",20)(44,"em")(45,"strong"),e(46,"(opcional)"),t()(),i(47,"p"),e(48,"Nome da propriedade, atribu\xEDda ao "),i(49,"code"),e(50,"PoDynamicFormField.property"),t(),e(51,", que iniciar\xE1 o campo com foco."),t()()(),i(52,"tr",13)(53,"td",14)(54,"div",15)(55,"span",16),e(56," p-components-size"),n(57,"br"),t()()(),i(58,"td",17)(59,"code",18),e(60,"string"),t()(),i(61,"td",19)(62,"p")(63,"code"),e(64,"medium"),t()()(),i(65,"td",20)(66,"em")(67,"strong"),e(68,"(opcional)"),t()(),i(69,"p"),e(70,"Define o tamanho dos componentes de formul\xE1rio no template:"),t(),i(71,"ul")(72,"li")(73,"code"),e(74,"small"),t(),e(75,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(76,"li")(77,"code"),e(78,"medium"),t(),e(79,": aplica a medida medium de cada componente."),t()(),i(80,"blockquote")(81,"p"),e(82,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(83,"code"),e(84,"medium"),t(),e(85,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(86,"a",21),e(87,"po-theme"),t(),e(88,"."),t()()()(),i(89,"tr",13)(90,"td",14)(91,"div",15)(92,"span",16),e(93," p-fields"),n(94,"br"),t()()(),i(95,"td",17)(96,"code",22),e(97,"Array<PoDynamicFormField>"),t()(),i(98,"td",19)(99,"p")(100,"code"),e(101,"[]"),t()()(),i(102,"td",20)(103,"p"),e(104,"Cole\xE7\xE3o de objetos que implementam a interface "),i(105,"code"),e(106,"PoDynamicFormField"),t(),e(107,`, para defini\xE7\xE3o dos campos que ser\xE3o criados
dinamicamente.`),t(),i(108,"blockquote")(109,"p"),e(110,"Ex: "),i(111,"code"),e(112,"[ { property: 'name' } ]"),t()()(),i(113,"p"),e(114,"Regras de tipagem e cria\xE7\xE3o dos componentes:"),t(),i(115,"ul")(116,"li"),e(117,"Caso o "),i(118,"em"),e(119,"type"),t(),e(120," informado seja "),i(121,"em"),e(122,"boolean"),t(),e(123," o componente criado ser\xE1 o "),i(124,"code"),e(125,"po-switch"),t(),e(126,"."),t(),i(127,"li"),e(128,"Caso o "),i(129,"em"),e(130,"type"),t(),e(131," informado seja "),i(132,"em"),e(133,"currency"),t(),e(134," e n\xE3o seja informado um "),i(135,"em"),e(136,"mask"),t(),e(137," ou "),i(138,"em"),e(139,"pattern"),t(),e(140," o componente criado ser\xE1 o "),i(141,"code"),e(142,"po-decimal"),t(),e(143,`,
caso seja informado um `),i(144,"em"),e(145,"mask"),t(),e(146," ou "),i(147,"em"),e(148,"pattern"),t(),e(149," o componente criado ser\xE1 o "),i(150,"code"),e(151,"po-input"),t(),e(152,"."),t(),i(153,"li"),e(154,"Caso o "),i(155,"em"),e(156,"type"),t(),e(157," informado seja "),i(158,"em"),e(159,"number"),t(),e(160," e n\xE3o seja informado um "),i(161,"em"),e(162,"mask"),t(),e(163," ou "),i(164,"em"),e(165,"pattern"),t(),e(166," o componente criado ser\xE1 o "),i(167,"code"),e(168,"po-number"),t(),e(169,`, caso seja
informado um `),i(170,"em"),e(171,"mask"),t(),e(172," ou "),i(173,"em"),e(174,"pattern"),t(),e(175," o componente criado ser\xE1 o "),i(176,"code"),e(177,"po-input"),t(),e(178,"."),t(),i(179,"li"),e(180,"Caso a lista possua a propriedade "),i(181,"code"),e(182,"options"),t(),e(183," e a mesma possua at\xE9 3 itens o componente criado ser\xE1 o "),i(184,"code"),e(185,"po-radio-group"),t(),e(186,`
ou `),i(187,"code"),e(188,"po-checkbox-group"),t(),e(189," se informar a propriedade "),i(190,"code"),e(191,"optionsMulti"),t(),e(192,"."),t(),i(193,"li"),e(194,"Caso a mesma possua 3 ou mais itens, ser\xE1 criado o componente "),i(195,"code"),e(196,"po-select"),t(),e(197," ou, "),i(198,"code"),e(199,"po-multiselect"),t(),e(200," se a propriedade "),i(201,"code"),e(202,"optionsMulti"),t(),e(203,`
for verdadeira.`),t(),i(204,"li"),e(205,"Caso o "),i(206,"em"),e(207,"type"),t(),e(208," informado seja "),i(209,"em"),e(210,"date"),t(),e(211," ou "),i(212,"em"),e(213,"datetime"),t(),e(214," o componente criado ser\xE1 o "),i(215,"code"),e(216,"po-datepicker"),t(),e(217,"."),t(),i(218,"li"),e(219,"Caso seja informado a propriedade "),i(220,"code"),e(221,"optionsService"),t(),e(222," o componente criado ser\xE1 o "),i(223,"code"),e(224,"po-combo"),t(),e(225,"."),t(),i(226,"li"),e(227,"Caso o "),i(228,"em"),e(229,"type"),t(),e(230," informado seja "),i(231,"em"),e(232,"time"),t(),e(233," o componente criado ser\xE1 um "),i(234,"code"),e(235,"po-input"),t(),e(236," podendo receber um "),i(237,"em"),e(238,"mask"),t(),e(239,` para formatar
o valor exibido, caso n\xE3o seja informado um `),i(240,"em"),e(241,"mask"),t(),e(242," o componente ser\xE1 criado com a m\xE1scara '99:99' por padr\xE3o."),t(),i(243,"li"),e(244,"Caso a lista possua a propriedade "),i(245,"code"),e(246,"rows"),t(),e(247,` e esta seja definida com valor maior ou igual a 3 o componente criado ser\xE1
o `),i(248,"code"),e(249,"po-textarea"),t(),e(250,", caso o valor da propriedade "),i(251,"code"),e(252,"rows"),t(),e(253," seja menor que 3 o componente criado ser\xE1 o "),i(254,"code"),e(255,"po-input"),t(),e(256,"."),t(),i(257,"li"),e(258,"Caso seja informada a propriedade "),i(259,"code"),e(260,"secret"),t(),e(261," o componente criado ser\xE1 o "),i(262,"code"),e(263,"po-password"),t(),e(264,"."),t(),i(265,"li"),e(266,"Caso o "),i(267,"em"),e(268,"type"),t(),e(269," informado seja "),i(270,"em"),e(271,"string"),t(),e(272," o componente criado ser\xE1 o "),i(273,"code"),e(274,"po-input"),t(),e(275,"."),i(276,"blockquote")(277,"p"),e(278,"Ao alterar o valor das "),i(279,"code"),e(280,"properties"),t(),e(281,", visibilidade e/ou agrupamentos via container, os "),i(282,"code"),e(283,"fields"),t(),e(284," que utilizam servi\xE7o podem refazer as chamadas para as API's."),t()()()()()(),i(285,"tr",13)(286,"td",14)(287,"div",23)(288,"span",24),e(289," (p-form)"),n(290,"br"),t()()(),i(291,"td",17)(292,"code",25),e(293,"EventEmitter"),t()(),i(294,"td",19),e(295,"-"),t(),i(296,"td",20)(297,"em")(298,"strong"),e(299,"(opcional)"),t()(),i(300,"p"),e(301,`Na inicializa\xE7\xE3o do componente ser\xE1 repassado o objeto de formul\xE1rio utilizado no componente,
podendo ser utilizado para valida\xE7\xF5es e/ou detec\xE7\xE3o de mudan\xE7a dos valores.`),t(),i(302,"p"),e(303,`Portanto existem duas maneiras de recuperar o formul\xE1rio,
atrav\xE9s de `),i(304,"em"),e(305,"template reference"),t(),e(306," e atrav\xE9s do "),i(307,"em"),e(308,"output"),t(),e(309,", veja os exemplos abaixo:"),t(),i(310,"blockquote")(311,"p")(312,"em"),e(313,"template reference"),t()()(),i(314,"pre")(315,"code",26),e(316,`<po-dynamic-form #dynamicForm>
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.form.invalid">
</po-button>
`),t()(),i(317,"blockquote")(318,"p")(319,"em"),e(320,"Output"),t()()(),i(321,"pre")(322,"code",26),e(323,`...
<po-dynamic-form (p-form)="getForm($event)">
</po-dynamic-form>

<po-button p-label="Adicionar" [p-disabled]="dynamicForm?.invalid">
</po-button>
...
`),t()(),i(324,"pre")(325,"code",27),e(326,`...

export class AppComponent {

  dynamicForm: NgForm;

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

}
`),t()(),i(327,"blockquote")(328,"p"),e(329,"Caso a propriedade "),i(330,"code"),e(331,"p-group-form"),t(),e(332,` for verdadeira n\xE3o ser\xE1 repassado o formul\xE1rio, pois o mesmo utilizar\xE1
o formul\xE1rio pai.`),t()()()(),i(333,"tr",13)(334,"td",14)(335,"div",15)(336,"span",16),e(337," p-group-form"),n(338,"br"),t()()(),i(339,"td",17)(340,"code",28),e(341,"boolean"),t()(),i(342,"td",19),e(343,"-"),t(),i(344,"td",20)(345,"em")(346,"strong"),e(347,"(opcional)"),t()(),i(348,"p"),e(349,"Ao informar esta propriedade, o componente passar\xE1 a utilizar o formul\xE1rio pai para criar os "),i(350,"code"),e(351,"FormControl"),t(),e(352,`
e com isso \xE9 poss\xEDvel recuperar o valor do formul\xE1rio e suas valida\xE7\xF5es a partir do formul\xE1rio pai.`),t(),i(353,"pre")(354,"code",26),e(355,`<form #parentForm="ngForm">

  <po-dynamic-form p-group-form [p-fields]="fields"></po-dynamic-form>

 <po-button p-label="Adicionar" [p-disabled]="parentForm.invalid"></po-button>
</form>
`),t()()()(),i(356,"tr",13)(357,"td",14)(358,"div",15)(359,"span",16),e(360," p-load"),n(361,"br"),t()()(),i(362,"td",17)(363,"code",18),e(364,"string "),t(),i(365,"code",29),e(366," Function"),t()(),i(367,"td",19),e(368,"-"),t(),i(369,"td",20)(370,"em")(371,"strong"),e(372,"(opcional)"),t()(),i(373,"p"),e(374,"Fun\xE7\xE3o ou servi\xE7o que ser\xE1 executado na inicializa\xE7\xE3o do componente."),t(),i(375,"p"),e(376,"A propriedade aceita os seguintes tipos:"),t(),i(377,"ul")(378,"li")(379,"code"),e(380,"string"),t(),e(381,": "),i(382,"em"),e(383,"Endpoint"),t(),e(384," usado pelo componente para requisi\xE7\xE3o via "),i(385,"code"),e(386,"POST"),t(),e(387,"."),t(),i(388,"li")(389,"code"),e(390,"function"),t(),e(391,": M\xE9todo que ser\xE1 executado."),t()(),i(392,"p"),e(393,"Ao ser executado, ir\xE1 receber como par\xE2metro o objeto informado no "),i(394,"code"),e(395,"p-value"),t(),e(396,"."),t(),i(397,"p"),e(398,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(399,"a",30),e(400,"PoDynamicFormLoad"),t(),e(401,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos, valores e determinar o campo a ser focado.`),t(),i(402,"p"),e(403,"Por exemplo:"),t(),i(404,"pre")(405,"code"),e(406,`onLoadFields(): PoDynamicFormLoad {

  return {
    value: { cpf: undefined },
    fields: [
      { property: 'cpf' }
    ],
    focus: 'cpf'
  };
}
`),t()(),i(407,"p"),e(408,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(409,"code"),e(410,"bind"),t(),e(411,", por exemplo:"),t(),i(412,"pre")(413,"code"),e(414,`[p-load]="onLoadFields.bind(this)"
`),t()()()(),i(415,"tr",13)(416,"td",14)(417,"div",15)(418,"span",16),e(419," p-validate"),n(420,"br"),t()()(),i(421,"td",17)(422,"code",18),e(423,"string "),t(),i(424,"code",29),e(425," Function"),t()(),i(426,"td",19),e(427,"-"),t(),i(428,"td",20)(429,"em")(430,"strong"),e(431,"(opcional)"),t()(),i(432,"p"),e(433,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(434,"strong"),e(435,"mudan\xE7as do formul\xE1rio"),t(),e(436,"."),t(),i(437,"p"),e(438,"A propriedade aceita os seguintes tipos:"),t(),i(439,"ul")(440,"li")(441,"code"),e(442,"string"),t(),e(443,": "),i(444,"em"),e(445,"Endpoint"),t(),e(446," usado pelo componente para requisi\xE7\xE3o via "),i(447,"code"),e(448,"POST"),t(),e(449,"."),t(),i(450,"li")(451,"code"),e(452,"function"),t(),e(453,": M\xE9todo que ser\xE1 executado."),t()(),i(454,"p"),e(455,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e os valores atualizados do formulario, conforme a interface `),i(456,"code"),e(457,"PoDynamicFormFieldChanged"),t()(),i(458,"p"),e(459,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(460,"a",31),e(461,"PoDynamicFormValidation"),t(),e(462,`,
onde o usu\xE1rio poder\xE1 determinar as novas atualiza\xE7\xF5es dos campos.
Por exemplo:`),t(),i(463,"pre")(464,"code"),e(465,`onChangeFields(changeValue): PoDynamicFormValidation {

if (changeValue.property === 'state') {

  return {
    value: { city: undefined },
    fields: [
      { property: 'city', options: this.getCity(changeValue.value.state) }
    ],
    focus: 'city'
  };
}
`),t()(),i(466,"p"),e(467,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(468,"code"),e(469,"bind"),t(),e(470,", por exemplo:"),t(),i(471,"pre")(472,"code"),e(473,`[p-validate]="this.myFunction.bind(this)"
`),t()(),i(474,"blockquote")(475,"p"),e(476,"Se houver uma lista de campos para valida\xE7\xE3o definida em "),i(477,"code"),e(478,"p-validate-fields"),t(),e(479,", a propriedade "),i(480,"code"),e(481,"validate"),t(),e(482," s\xF3 receber\xE1 o disparo para os campos equivalentes."),t()()()(),i(483,"tr",13)(484,"td",14)(485,"div",15)(486,"span",16),e(487," p-validate-fields"),n(488,"br"),t()()(),i(489,"td",17)(490,"code",32),e(491,"Array<string>"),t()(),i(492,"td",19),e(493,"-"),t(),i(494,"td",20)(495,"em")(496,"strong"),e(497,"(opcional)"),t()(),i(498,"p"),e(499,"Lista que define os campos que ir\xE3o disparar o validate do form."),t()()(),i(500,"tr",13)(501,"td",14)(502,"div",15)(503,"span",16),e(504," p-validate-on-input"),n(505,"br"),t()()(),i(506,"td",17)(507,"code",28),e(508,"boolean"),t()(),i(509,"td",19),e(510,"-"),t(),i(511,"td",20)(512,"em")(513,"strong"),e(514,"(opcional)"),t()(),i(515,"p"),e(516,"Ao informar esta propriedade, o componente passar\xE1 a emitir o valor a cada caractere digitado."),t(),i(517,"p"),e(518,"Pode ser aplicado nos seguintes componentes:"),t(),i(519,"ul")(520,"li"),e(521,"po-input"),t(),i(522,"li"),e(523,"po-number"),t(),i(524,"li"),e(525,"po-decimal"),t(),i(526,"li"),e(527,"po-textarea"),t(),i(528,"li"),e(529,"po-password"),t()(),i(530,"p"),e(531,"Deve informar os campos que deseja receber as emiss\xF5es na propriedade "),i(532,"code"),e(533,"p-validate-fields"),t(),e(534,"."),t()()(),i(535,"tr",13)(536,"td",14)(537,"div",15)(538,"span",16),e(539," p-value"),n(540,"br"),t()()(),i(541,"td",17)(542,"code",33),e(543,"any"),t()(),i(544,"td",19),e(545,"-"),t(),i(546,"td",20)(547,"p"),e(548,"Objeto que ser\xE1 utilizado como valor para exibir as informa\xE7\xF5es, ser\xE1 recuperado e preenchido atrav\xE9s do atributo "),i(549,"em"),e(550,"property"),t(),e(551,`
dos objetos contidos na propridade `),i(552,"code"),e(553,"p-fields"),t(),e(554,"."),t(),i(555,"p"),e(556,"Pode iniciar com valor ou apenas com um objeto vazio que ser\xE1 preenchido conforme descrito acima."),t(),i(557,"blockquote")(558,"p"),e(559,"Ex: "),i(560,"code"),e(561,"{ name: 'po' }"),t()()()()()(),i(562,"h3",9),e(563,"M\xE9todos"),t(),i(564,"table",34)(565,"tr",13)(566,"th",35)(567,"div",15)(568,"h4")(569,"span",16),e(570," focus "),t()()()()(),i(571,"tr",20)(572,"td",20)(573,"p"),e(574,"Fun\xE7\xE3o que atribui foco ao campo desejado."),t(),i(575,"p"),e(576,"Para utiliz\xE1-la \xE9 necess\xE1rio capturar a inst\xE2ncia do "),i(577,"code"),e(578,"dynamic form"),t(),e(579,", como por exemplo:"),t(),i(580,"pre")(581,"code",26),e(582,`<po-dynamic-form #dynamicForm [p-fields]="fields"></po-dynamic-form>
`),t()(),i(583,"pre")(584,"code",36),e(585,`import { PoDynamicFormComponent, PoDynamicFormField } from '@po-ui/ng-components';

...

@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
  { property: 'fieldOne' },
  { property: 'fieldTwo' }
];

fieldFocus() {
  this.dynamicForm.focus('fieldTwo');
}
`),t()()()()(),i(586,"h5")(587,"b"),e(588,"Par\xE2metros"),t()(),i(589,"table",10)(590,"tr",11)(591,"th",12),e(592,"Nome"),t(),i(593,"th",12),e(594,"Tipo"),t(),i(595,"th",12),e(596,"Descri\xE7\xE3o"),t()(),i(597,"tr",13)(598,"td",14),e(599," property"),t(),i(600,"td",17)(601,"code",37),e(602," string "),t()(),i(603,"td",20)(604,"p"),e(605,"Nome da propriedade atribu\xEDda ao "),i(606,"code"),e(607,"PoDynamicFormField.property"),t(),e(608,"."),t()()()(),n(609,"br"),i(610,"table",34)(611,"tr",13)(612,"th",35)(613,"div",15)(614,"h4")(615,"span",16),e(616," showAdditionalHelp "),t()()()()(),i(617,"tr",20)(618,"td",20)(619,"p"),e(620,"M\xE9todo que exibe "),i(621,"code"),e(622,"p-helper"),t(),e(623," ou executa a a\xE7\xE3o definida em "),i(624,"code"),e(625,"p-helper{eventOnClick}"),t(),e(626," ou em "),i(627,"code"),e(628,"p-additionalHelp"),t(),e(629,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(630,"code"),e(631,"keydown"),t(),e(632,"."),t(),i(633,"pre")(634,"code"),e(635,`import { PoDynamicModule } from '@po-ui/ng-components';
...
@ViewChild('dynamicForm', { static: true }) dynamicForm: PoDynamicFormComponent;

fields: Array<PoDynamicFormField> = [
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
   this.dynamicForm.showAdditionalHelp(property);
 }
}
`),t()()()()(),i(636,"h5")(637,"b"),e(638,"Par\xE2metros"),t()(),i(639,"table",10)(640,"tr",11)(641,"th",12),e(642,"Nome"),t(),i(643,"th",12),e(644,"Tipo"),t(),i(645,"th",12),e(646,"Descri\xE7\xE3o"),t()(),i(647,"tr",13)(648,"td",14),e(649," property"),t(),i(650,"td",17)(651,"code",37),e(652," string "),t()(),i(653,"td",20)(654,"p"),e(655,"Identificador da coluna."),t()()()(),n(656,"br"),i(657,"h3"),e(658,"Interfaces"),t(),i(659,"h4",38)(660,"code",5),e(661,"PoDynamicFormField"),t()(),i(662,"div",2)(663,"p"),e(664," Interface para defini\xE7\xE3o das propriedades dos campos de entrada que ser\xE3o criados dinamicamente."),t()(),i(665,"h4",9),e(666,"Propriedades"),t(),i(667,"table",10)(668,"tr",11)(669,"th",12),e(670,"Nome"),t(),i(671,"th",12),e(672,"Tipo"),t(),i(673,"th",12),e(674,"Descri\xE7\xE3o"),t()(),i(675,"tr",13)(676,"td",14)(677,"div",15)(678,"span",16),e(679," additionalHelp"),n(680,"br"),t()()(),i(681,"td",17)(682,"code",29),e(683,"Function"),t()(),i(684,"td",20)(685,"em")(686,"strong"),e(687,"(opcional)"),t()(),i(688,"p"),e(689,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(690,"blockquote")(691,"p"),e(692,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(693,"tr",13)(694,"td",14)(695,"div",15)(696,"span",16),e(697," additionalHelpTooltip"),n(698,"br"),t()()(),i(699,"td",17)(700,"code",18),e(701,"string"),t()(),i(702,"td",20)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),i(706,"p"),e(707,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),i(708,"code"),e(709,"po-helper"),t(),e(710,`.
`),i(711,"strong"),e(712,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(713,"blockquote")(714,"p"),e(715,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade p-helper que oferece mais recursos e flexibilidade."),t()()()(),i(716,"tr",13)(717,"td",14)(718,"div",15)(719,"span",16),e(720," advancedFilters"),n(721,"br"),t()()(),i(722,"td",17)(723,"code",39),e(724,"Array<PoLookupAdvancedFilter>"),t()(),i(725,"td",20)(726,"em")(727,"strong"),e(728,"(opcional)"),t()(),i(729,"p"),e(730,"Lista de objetos dos campos que ser\xE3o criados na busca avan\xE7ada."),t(),i(731,"blockquote")(732,"p"),e(733,"Caso n\xE3o seja passado um objeto ou ent\xE3o ele esteja em branco o link de busca avan\xE7ada ficar\xE1 escondido."),t()(),i(734,"p"),e(735,"Exemplo de URL com busca avan\xE7ada:"),t(),i(736,"p")(737,"code"),e(738,"url + ?page=1&pageSize=20&name=Tony%20Stark&nickname=Homem%20de%20Ferro"),t()(),i(739,"p"),e(740,"Caso algum par\xE2metro seja uma lista, a concatena\xE7\xE3o \xE9 feita utilizando v\xEDrgula. Exemplo:"),t(),i(741,"p")(742,"code"),e(743,"url + ?page=1&pageSize=20&name=Tony%20Stark,Peter%20Parker,Gohan"),t()()()(),i(744,"tr",13)(745,"td",14)(746,"div",15)(747,"span",16),e(748," appendBox"),n(749,"br"),t()()(),i(750,"td",17)(751,"code",28),e(752,"boolean"),t()(),i(753,"td",20)(754,"em")(755,"strong"),e(756,"(opcional)"),t()(),i(757,"p"),e(758,"Define que o "),i(759,"code"),e(760,"listbox"),t(),e(761," e/ou popover ("),i(762,"code"),e(763,"p-helper"),t(),e(764," e/ou "),i(765,"code"),e(766,"p-error-limit"),t(),e(767,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o \xE9 necess\xE1ria para cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(768,"blockquote")(769,"p"),e(770,"Quando utilizado com "),i(771,"code"),e(772,"p-helper"),t(),e(773,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),i(774,"tr",13)(775,"td",14)(776,"div",15)(777,"span",16),e(778," autoHeight"),n(779,"br"),t()()(),i(780,"td",17)(781,"code",28),e(782,"boolean"),t()(),i(783,"td",20)(784,"em")(785,"strong"),e(786,"(opcional)"),t()(),i(787,"p"),e(788,"Define que a altura do componente ser\xE1 auto ajust\xE1vel, possuindo uma altura minima por\xE9m a altura m\xE1xima ser\xE1 de acordo com o n\xFAmero de itens selecionados e a extens\xE3o dos mesmos, mantendo-os sempre vis\xEDveis."),t(),i(789,"p")(790,"strong"),e(791,"Componentes compat\xEDveis:"),t(),i(792,"code"),e(793,"po-multiselect"),t(),e(794,", "),i(795,"code"),e(796,"po-lookup"),t(),e(797,"."),t()()(),i(798,"tr",13)(799,"td",14)(800,"div",15)(801,"span",16),e(802," autoUpload"),n(803,"br"),t()()(),i(804,"td",17)(805,"code",28),e(806,"boolean"),t()(),i(807,"td",20)(808,"em")(809,"strong"),e(810,"(opcional)"),t()(),i(811,"p"),e(812,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),i(813,"p")(814,"strong"),e(815,"Componente compat\xEDvel"),t(),e(816,": "),i(817,"code"),e(818,"po-upload"),t()()()(),i(819,"tr",13)(820,"td",14)(821,"div",15)(822,"span",16),e(823," booleanFalse"),n(824,"br"),t()()(),i(825,"td",17)(826,"code",18),e(827,"string"),t()(),i(828,"td",20)(829,"em")(830,"strong"),e(831,"(opcional)"),t()(),i(832,"p"),e(833,"Texto exibido quando o valor do componente for "),i(834,"em"),e(835,"false"),t(),e(836,"."),t()()(),i(837,"tr",13)(838,"td",14)(839,"div",15)(840,"span",16),e(841," booleanTrue"),n(842,"br"),t()()(),i(843,"td",17)(844,"code",18),e(845,"string"),t()(),i(846,"td",20)(847,"em")(848,"strong"),e(849,"(opcional)"),t()(),i(850,"p"),e(851,"Texto exibido quando o valor do componente for "),i(852,"em"),e(853,"true"),t(),e(854,"."),t()()(),i(855,"tr",13)(856,"td",14)(857,"div",15)(858,"span",16),e(859," changeOnEnter"),n(860,"br"),t()()(),i(861,"td",17)(862,"code",28),e(863,"boolean"),t()(),i(864,"td",20)(865,"em")(866,"strong"),e(867,"(opcional)"),t()(),i(868,"p"),e(869,"Indica que o evento "),i(870,"code"),e(871,"p-change"),t(),e(872,' s\xF3 ser\xE1 disparado ao clicar ou pressionar a tecla "Enter" sobre uma op\xE7\xE3o selecionada no '),i(873,"code"),e(874,"po-combo"),t(),e(875,"."),t()()(),i(876,"tr",13)(877,"td",14)(878,"div",15)(879,"span",16),e(880," changeVisibleColumns"),n(881,"br"),t()()(),i(882,"td",17)(883,"code",29),e(884,"Function"),t()(),i(885,"td",20)(886,"em")(887,"strong"),e(888,"(opcional)"),t()(),i(889,"p"),e(890,"Evento disparado ao fechar o popover do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),t(),i(891,"p"),e(892,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(893,"p")(894,"strong"),e(895,"Componente compat\xEDvel"),t(),e(896,": "),i(897,"code"),e(898,"po-lookup"),t()()()(),i(899,"tr",13)(900,"td",14)(901,"div",15)(902,"span",16),e(903," clean"),n(904,"br"),t()()(),i(905,"td",17)(906,"code",28),e(907,"boolean"),t()(),i(908,"td",20)(909,"em")(910,"strong"),e(911,"(opcional)"),t()(),i(912,"p"),e(913,"Se verdadeiro, o campo receber\xE1 um bot\xE3o para ser limpo."),t(),i(914,"p")(915,"strong"),e(916,"Componentes compat\xEDveis:"),t(),i(917,"code"),e(918,"po-datepicker"),t(),e(919,", "),i(920,"code"),e(921,"po-datepicker-range"),t(),e(922,", "),i(923,"code"),e(924,"po-input"),t(),e(925,", "),i(926,"code"),e(927,"po-number"),t(),e(928,", "),i(929,"code"),e(930,"po-decimal"),t(),e(931,`,
`),i(932,"code"),e(933,"po-combo"),t(),e(934,", "),i(935,"code"),e(936,"po-lookup"),t(),e(937,", "),i(938,"code"),e(939,"po-password"),t(),e(940,", "),i(941,"code"),e(942,"po-timepicker"),t(),e(943,"."),t()()(),i(944,"tr",13)(945,"td",14)(946,"div",15)(947,"span",16),e(948," columnRestoreManager"),n(949,"br"),t()()(),i(950,"td",17)(951,"code",29),e(952,"Function"),t()(),i(953,"td",20)(954,"em")(955,"strong"),e(956,"(opcional)"),t()(),i(957,"p"),e(958,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),t(),i(959,"p"),e(960,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),t(),i(961,"p")(962,"strong"),e(963,"Componente compat\xEDvel"),t(),e(964,": "),i(965,"code"),e(966,"po-lookup"),t()()()(),i(967,"tr",13)(968,"td",14)(969,"div",15)(970,"span",16),e(971," columns"),n(972,"br"),t()()(),i(973,"td",17)(974,"code",40),e(975,"Array<PoLookupColumn> "),t(),i(976,"code",41),e(977," number"),t()(),i(978,"td",20)(979,"em")(980,"strong"),e(981,"(opcional)"),t()(),i(982,"p"),e(983,"Define as colunas para utiliza\xE7\xE3o da busca avan\xE7ada. Usada somente em conjunto com a propriedade "),i(984,"code"),e(985,"searchService"),t(),e(986,`,
essa propriedade deve receber um array de objetos que implementam a interface `),i(987,"a",42)(988,"code"),e(989,"PoLookupColumn"),t()(),e(990,"."),t(),i(991,"blockquote")(992,"p"),e(993,"Caso sejam informadas colunas, deve-se obrigatoriamente conter colunas definidas como "),i(994,"em"),e(995,"label"),t(),e(996," e "),i(997,"em"),e(998,"value"),t(),e(999,` para valores
de tela e do model respectivamente.`),t()(),i(1e3,"p")(1001,"strong"),e(1002,"Componentes compat\xEDveis:"),t(),i(1003,"code"),e(1004,"po-radio-group"),t(),e(1005,", "),i(1006,"code"),e(1007,"po-lookup"),t(),e(1008,", "),i(1009,"code"),e(1010,"po-checkbox-group"),t(),e(1011,"."),t()()(),i(1012,"tr",13)(1013,"td",14)(1014,"div",15)(1015,"span",16),e(1016," compactLabel"),n(1017,"br"),t()()(),i(1018,"td",17)(1019,"code",28),e(1020,"boolean"),t()(),i(1021,"td",20)(1022,"em")(1023,"strong"),e(1024,"(opcional)"),t()(),i(1025,"p"),e(1026,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),i(1027,"p"),e(1028,"Quando habilitado ("),i(1029,"code"),e(1030,"true"),t(),e(1031,"), o modo compacto afeta o conjunto composto por:"),t(),i(1032,"ul")(1033,"li")(1034,"code"),e(1035,"po-label"),t()(),i(1036,"li")(1037,"code"),e(1038,"p-requirement (showRequired)"),t()(),i(1039,"li")(1040,"code"),e(1041,"po-helper"),t()()(),i(1042,"p"),e(1043,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),i(1044,"p"),e(1045,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),i(1046,"ul")(1047,"li")(1048,"code"),e(1049,"--field-container-title-justify"),t()(),i(1050,"li")(1051,"code"),e(1052,"--field-container-title-flex"),t()()(),i(1053,"p"),e(1054,"Exemplo:"),t(),i(1055,"pre")(1056,"code"),e(1057,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),i(1058,"p"),e(1059,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),i(1060,"tr",13)(1061,"td",14)(1062,"div",15)(1063,"span",16),e(1064," container"),n(1065,"br"),t()()(),i(1066,"td",17)(1067,"code",18),e(1068,"string"),t()(),i(1069,"td",20)(1070,"em")(1071,"strong"),e(1072,"(opcional)"),t()(),i(1073,"p"),e(1074,`Exibir\xE1 um container para todos os campos abaixo dessa propriedade.
Esta propriedade configura o layout dos componentes dynamic-view e dynamic-edit, deixando todos os items dentro de containers`),t(),i(1075,"p"),e(1076,"Est\xE1 propriedade \xE9 do tipo string, o valor que ser\xE1 titulo do contianer"),t()()(),i(1077,"tr",13)(1078,"td",14)(1079,"div",15)(1080,"span",16),e(1081," customAction"),n(1082,"br"),t()()(),i(1083,"td",17)(1084,"code",43),e(1085,"PoProgressAction"),t()(),i(1086,"td",20)(1087,"em")(1088,"strong"),e(1089,"(opcional)"),t()(),i(1090,"p"),e(1091,"Define uma a\xE7\xE3o personalizada no componente "),i(1092,"code"),e(1093,"po-upload"),t(),e(1094,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),i(1095,"p")(1096,"strong"),e(1097,"Componente compat\xEDvel"),t(),e(1098,": "),i(1099,"code"),e(1100,"po-upload"),t(),e(1101,","),t(),i(1102,"p")(1103,"strong"),e(1104,"Exemplo de configura\xE7\xE3o"),t(),e(1105,":"),t(),i(1106,"pre")(1107,"code",44),e(1108,`customAction: {
  label: 'Baixar',
  icon: 'an-download',
  type: 'default',
  visible: true,
  disabled: false
};
`),t()()()(),i(1109,"tr",13)(1110,"td",14)(1111,"div",15)(1112,"span",16),e(1113," customActionClick"),n(1114,"br"),t()()(),i(1115,"td",17)(1116,"code",45),e(1117,"(file: PoUploadFile) => void"),t()(),i(1118,"td",20)(1119,"em")(1120,"strong"),e(1121,"(opcional)"),t()(),i(1122,"p"),e(1123,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),i(1124,"code"),e(1125,"p-custom-action"),t(),e(1126,"."),t(),i(1127,"p")(1128,"strong"),e(1129,"Componente compat\xEDvel"),t(),e(1130,": "),i(1131,"code"),e(1132,"po-upload"),t(),e(1133,","),t(),i(1134,"p"),e(1135,`Este evento \xE9 emitido quando o bot\xE3o de a\xE7\xE3o personalizada \xE9 clicado na barra de progresso associada a um arquivo.
O arquivo relacionado \xE0 barra de progresso ser\xE1 passado como par\xE2metro do evento, permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),i(1136,"p")(1137,"strong"),e(1138,"Par\xE2metro do evento"),t(),e(1139,":"),t(),i(1140,"ul")(1141,"li")(1142,"code"),e(1143,"file"),t(),e(1144,": O arquivo associado ao bot\xE3o de a\xE7\xE3o. Este objeto \xE9 da classe "),i(1145,"code"),e(1146,"PoUploadFile"),t(),e(1147," e cont\xE9m informa\xE7\xF5es sobre o arquivo, como nome, status e progresso."),t()(),i(1148,"p")(1149,"strong"),e(1150,"Exemplo de uso"),t(),e(1151,":"),t(),i(1152,"pre")(1153,"code",44),e(1154,`customActionClick: (file: PoUploadFile) => {
  console.log('A\xE7\xE3o personalizada clicada para o arquivo:', file.name);
  // L\xF3gica de download ou outra a\xE7\xE3o relacionada ao arquivo
}
`),t()()()(),i(1155,"tr",13)(1156,"td",14)(1157,"div",15)(1158,"span",16),e(1159," debounceTime"),n(1160,"br"),t()()(),i(1161,"td",17)(1162,"code",41),e(1163,"number"),t()(),i(1164,"td",20)(1165,"em")(1166,"strong"),e(1167,"(opcional)"),t()(),i(1168,"p"),e(1169,"Esta propriedade define em quanto tempo (em milissegundos), aguarda para acionar o evento de filtro ap\xF3s cada pressionamento de tecla. Ser\xE1 utilizada apenas quando houver servi\xE7o ("),i(1170,"code"),e(1171,"p-filter-service"),t(),e(1172,")."),t(),i(1173,"p")(1174,"strong"),e(1175,"Componentes compat\xEDveis:"),t(),i(1176,"code"),e(1177,"po-combo"),t(),e(1178,", "),i(1179,"code"),e(1180,"po-multiselect"),t(),e(1181,"."),t()()(),i(1182,"tr",13)(1183,"td",14)(1184,"div",15)(1185,"span",16),e(1186," decimalsLength"),n(1187,"br"),t()()(),i(1188,"td",17)(1189,"code",41),e(1190,"number"),t()(),i(1191,"td",20)(1192,"em")(1193,"strong"),e(1194,"(opcional)"),t()(),i(1195,"p"),e(1196,"Quantidade m\xE1xima de casas decimais."),t(),i(1197,"blockquote")(1198,"p"),e(1199,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(1200,"code"),e(1201,"type"),t(),e(1202," for "),i(1203,"em"),e(1204,"currency"),t(),e(1205," ou "),i(1206,"em"),e(1207,"decimal"),t(),e(1208,"."),t()()()(),i(1209,"tr",13)(1210,"td",14)(1211,"div",15)(1212,"span",16),e(1213," directory"),n(1214,"br"),t()()(),i(1215,"td",17)(1216,"code",28),e(1217,"boolean"),t()(),i(1218,"td",20)(1219,"em")(1220,"strong"),e(1221,"(opcional)"),t()(),i(1222,"p"),e(1223,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),i(1224,"blockquote")(1225,"p"),e(1226,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),i(1227,"blockquote")(1228,"p"),e(1229,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),i(1230,"strong"),e(1231,"Internet Explorer"),t(),e(1232,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()(),i(1233,"p")(1234,"strong"),e(1235,"Componente compat\xEDvel"),t(),e(1236,": "),i(1237,"code"),e(1238,"po-upload"),t()()()(),i(1239,"tr",13)(1240,"td",14)(1241,"div",15)(1242,"span",16),e(1243," disabled"),n(1244,"br"),t()()(),i(1245,"td",17)(1246,"code",28),e(1247,"boolean"),t()(),i(1248,"td",20)(1249,"em")(1250,"strong"),e(1251,"(opcional)"),t()(),i(1252,"p"),e(1253,"Desabilita o campo caso informar o valor "),i(1254,"em"),e(1255,"true"),t(),e(1256,"."),t()()(),i(1257,"tr",13)(1258,"td",14)(1259,"div",15)(1260,"span",16),e(1261," disabledInitFilter"),n(1262,"br"),t()()(),i(1263,"td",17)(1264,"code",28),e(1265,"boolean"),t()(),i(1266,"td",20)(1267,"em")(1268,"strong"),e(1269,"(opcional)"),t()(),i(1270,"p"),e(1271,"Desabilita o filtro inicial no servi\xE7o do "),i(1272,"code"),e(1273,"po-combo"),t(),e(1274,", que \xE9 executado no primeiro clique no campo."),t()()(),i(1275,"tr",13)(1276,"td",14)(1277,"div",15)(1278,"span",16),e(1279," disabledTabFilter"),n(1280,"br"),t()()(),i(1281,"td",17)(1282,"code",28),e(1283,"boolean"),t()(),i(1284,"td",20)(1285,"em")(1286,"strong"),e(1287,"(opcional)"),t()(),i(1288,"p"),e(1289,"Se verdadeiro, desabilitar\xE1 a busca de um item via TAB no "),i(1290,"code"),e(1291,"po-combo"),t(),e(1292,"."),t()()(),i(1293,"tr",13)(1294,"td",14)(1295,"div",15)(1296,"span",16),e(1297," divider"),n(1298,"br"),t()()(),i(1299,"td",17)(1300,"code",18),e(1301,"string"),t()(),i(1302,"td",20)(1303,"em")(1304,"strong"),e(1305,"(opcional)"),t()(),i(1306,"p"),e(1307,"Exibir\xE1 um divisor acima, utilizando o seu conteudo como t\xEDtulo."),t()()(),i(1308,"tr",13)(1309,"td",14)(1310,"div",15)(1311,"span",16),e(1312," dragDrop"),n(1313,"br"),t()()(),i(1314,"td",17)(1315,"code",28),e(1316,"boolean"),t()(),i(1317,"td",20)(1318,"em")(1319,"strong"),e(1320,"(opcional)"),t()(),i(1321,"p"),e(1322,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),i(1323,"blockquote")(1324,"p"),e(1325,"Recomendamos utilizar apenas um "),i(1326,"code"),e(1327,"po-upload"),t(),e(1328," com esta funcionalidade por tela."),t()(),i(1329,"p")(1330,"strong"),e(1331,"Componente compat\xEDvel"),t(),e(1332,": "),i(1333,"code"),e(1334,"po-upload"),t()()()(),i(1335,"tr",13)(1336,"td",14)(1337,"div",15)(1338,"span",16),e(1339," dragDropHeight"),n(1340,"br"),t()()(),i(1341,"td",17)(1342,"code",41),e(1343,"number"),t()(),i(1344,"td",20)(1345,"em")(1346,"strong"),e(1347,"(opcional)"),t()(),i(1348,"p"),e(1349,"Define em "),i(1350,"em"),e(1351,"pixels"),t(),e(1352," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),i(1353,"code"),e(1354,"160px"),t(),e(1355,"."),t(),i(1356,"blockquote")(1357,"p"),e(1358,"Esta propriedade funciona somente se a propriedade "),i(1359,"code"),e(1360,"p-drag-drop"),t(),e(1361," estiver habilitada."),t()(),i(1362,"p")(1363,"strong"),e(1364,"Componente compat\xEDvel"),t(),e(1365,": "),i(1366,"code"),e(1367,"po-upload"),t()()()(),i(1368,"tr",13)(1369,"td",14)(1370,"div",15)(1371,"span",16),e(1372," errorAsyncFunction"),n(1373,"br"),t()()(),i(1374,"td",17)(1375,"code",46),e(1376,"(value) => Observable<boolean>"),t()(),i(1377,"td",20)(1378,"em")(1379,"strong"),e(1380,"(opcional)"),t()(),i(1381,"p"),e(1382,`Fun\xE7\xE3o executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(1383,"code"),e(1384,"change"),t(),e(1385," ou "),i(1386,"code"),e(1387,"change-model"),t(),e(1388,", dependendo do valor da propriedade "),i(1389,"code"),e(1390,"triggerMode"),t(),e(1391,"."),t(),i(1392,"blockquote")(1393,"p"),e(1394,"Retorna "),i(1395,"code"),e(1396,"Observable com o valor true"),t(),e(1397," para sinalizar o erro "),i(1398,"code"),e(1399,"false"),t(),e(1400," para indicar que n\xE3o h\xE1 erro."),t()(),i(1401,"p")(1402,"strong"),e(1403,"Componente compat\xEDvel"),t(),e(1404,": "),i(1405,"code"),e(1406,"po-datepicker"),t()()()(),i(1407,"tr",13)(1408,"td",14)(1409,"div",15)(1410,"span",16),e(1411," errorAsyncProperties"),n(1412,"br"),t()()(),i(1413,"td",17)(1414,"code",47),e(1415,"ErrorAsyncProperties"),t()(),i(1416,"td",20)(1417,"em")(1418,"strong"),e(1419,"(opcional)"),t()(),i(1420,"p"),e(1421,"Realiza alguma valida\xE7\xE3o customizada ass\xEDncrona no componente."),t(),i(1422,"p")(1423,"strong"),e(1424,"Componentes compat\xEDveis:"),t(),i(1425,"code"),e(1426,"po-input"),t(),e(1427,", "),i(1428,"code"),e(1429,"po-number"),t(),e(1430,", "),i(1431,"code"),e(1432,"po-decimal"),t(),e(1433,", "),i(1434,"code"),e(1435,"po-password"),t(),e(1436,"."),t()()(),i(1437,"tr",13)(1438,"td",14)(1439,"div",15)(1440,"span",16),e(1441," errorLimit"),n(1442,"br"),t()()(),i(1443,"td",17)(1444,"code",28),e(1445,"boolean"),t()(),i(1446,"td",20)(1447,"em")(1448,"strong"),e(1449,"(opcional)"),t()(),i(1450,"p"),e(1451,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(1452,"blockquote")(1453,"p"),e(1454,"Caso essa propriedade seja definida como "),i(1455,"code"),e(1456,"true"),t(),e(1457,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()(),i(1458,"p")(1459,"strong"),e(1460,"Componentes compat\xEDveis:"),t(),i(1461,"code"),e(1462,"po-checkbox-group"),t(),e(1463,", "),i(1464,"code"),e(1465,"po-combo"),t(),e(1466,", "),i(1467,"code"),e(1468,"po-datepicker"),t(),e(1469,", "),i(1470,"code"),e(1471,"po-datepicker-range"),t(),e(1472,", "),i(1473,"code"),e(1474,"po-decimal"),t(),e(1475,", "),i(1476,"code"),e(1477,"po-input"),t(),e(1478,", "),i(1479,"code"),e(1480,"po-lookup"),t(),e(1481,", "),i(1482,"code"),e(1483,"po-multiselect"),t(),e(1484,", "),i(1485,"code"),e(1486,"po-number"),t(),e(1487,", "),i(1488,"code"),e(1489,"po-password"),t(),e(1490,", "),i(1491,"code"),e(1492,"po-radio-group"),t(),e(1493,", "),i(1494,"code"),e(1495,"po-select"),t(),e(1496,`,
`),i(1497,"code"),e(1498,"po-switch"),t(),e(1499,", "),i(1500,"code"),e(1501,"po-textarea"),t(),e(1502,", "),i(1503,"code"),e(1504,"po-timepicker"),t(),e(1505,"."),t()()(),i(1506,"tr",13)(1507,"td",14)(1508,"div",15)(1509,"span",16),e(1510," errorMessage"),n(1511,"br"),t()()(),i(1512,"td",17)(1513,"code",18),e(1514,"string"),t()(),i(1515,"td",20)(1516,"em")(1517,"strong"),e(1518,"(opcional)"),t()(),i(1519,"p"),e(1520,"Mensagem que ser\xE1 apresentada quando o campo ficar inv\xE1lido."),t(),i(1521,"p"),e(1522,"O campo fica inv\xE1lido quando as seguintes propriedades n\xE3o forem respeitadas:"),t(),i(1523,"ul")(1524,"li"),e(1525,"pattern;"),t(),i(1526,"li"),e(1527,"minValue;"),t(),i(1528,"li"),e(1529,"maxValue;"),t(),i(1530,"li"),e(1531,"required;"),t()(),i(1532,"blockquote")(1533,"p"),e(1534,`Esta mensagem pode ser exibida quando o campo estiver vazio, caso seja requerido. Em casos de componentes como
`),i(1535,"code"),e(1536,"po-datepicker"),t(),e(1537,", "),i(1538,"code"),e(1539,"po-input"),t(),e(1540,", "),i(1541,"code"),e(1542,"po-number"),t(),e(1543,", "),i(1544,"code"),e(1545,"po-decimal"),t(),e(1546,", "),i(1547,"code"),e(1548,"po-password"),t(),e(1549,", "),i(1550,"code"),e(1551,"po-timepicker"),t(),e(1552,`, \xE9 necess\xE1rio que a propriedade
`),i(1553,"code"),e(1554,"requiredFieldErrorMessage"),t(),e(1555," esteja como "),i(1556,"code"),e(1557,"true"),t(),e(1558,` para que a mensagem seja exibida com o campo vazio. Componentes
como `),i(1559,"code"),e(1560,"po-datepicker-range"),t(),e(1561,", "),i(1562,"code"),e(1563,"po-select"),t(),e(1564,", "),i(1565,"code"),e(1566,"po-checkbox-group"),t(),e(1567,", "),i(1568,"code"),e(1569,"po-radio-group"),t(),e(1570,", "),i(1571,"code"),e(1572,"po-multiselect"),t(),e(1573,", "),i(1574,"code"),e(1575,"po-combo"),t(),e(1576,`,
`),i(1577,"code"),e(1578,"po-lookup"),t(),e(1579," e "),i(1580,"code"),e(1581,"po-textarea"),t(),e(1582," n\xE3o \xE9 necess\xE1rio passar a propriedade "),i(1583,"code"),e(1584,"requiredFieldErrorMessage"),t(),e(1585,"."),t()(),i(1586,"p")(1587,"strong"),e(1588,"Componentes compat\xEDveis:"),t(),i(1589,"code"),e(1590,"po-checkbox-group"),t(),e(1591,", "),i(1592,"code"),e(1593,"po-combo"),t(),e(1594,", "),i(1595,"code"),e(1596,"po-datepicker"),t(),e(1597,", "),i(1598,"code"),e(1599,"po-datepicker-range"),t(),e(1600,", "),i(1601,"code"),e(1602,"po-decimal"),t(),e(1603,", "),i(1604,"code"),e(1605,"po-input"),t(),e(1606,", "),i(1607,"code"),e(1608,"po-lookup"),t(),e(1609,", "),i(1610,"code"),e(1611,"po-multiselect"),t(),e(1612,", "),i(1613,"code"),e(1614,"po-number"),t(),e(1615,", "),i(1616,"code"),e(1617,"po-password"),t(),e(1618,", "),i(1619,"code"),e(1620,"po-radio-group"),t(),e(1621,", "),i(1622,"code"),e(1623,"po-select"),t(),e(1624,`,
`),i(1625,"code"),e(1626,"po-switch"),t(),e(1627,", "),i(1628,"code"),e(1629,"po-textarea"),t(),e(1630,", "),i(1631,"code"),e(1632,"po-timepicker"),t(),e(1633,"."),t()()(),i(1634,"tr",13)(1635,"td",14)(1636,"div",15)(1637,"span",16),e(1638," fieldLabel"),n(1639,"br"),t()()(),i(1640,"td",17)(1641,"code",18),e(1642,"string"),t()(),i(1643,"td",20)(1644,"em")(1645,"strong"),e(1646,"(opcional)"),t()(),i(1647,"p"),e(1648,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como descri\xE7\xE3o do campo."),t(),i(1649,"p"),e(1650,"O valor padr\xE3o \xE9: "),i(1651,"code"),e(1652,"label"),t(),e(1653,"."),t(),i(1654,"blockquote")(1655,"p"),e(1656,"Esta propriedade pode ser utilizada em conjunto com: "),i(1657,"code"),e(1658,"options"),t(),e(1659,", "),i(1660,"code"),e(1661,"optionsService"),t(),e(1662," e "),i(1663,"code"),e(1664,"searchService"),t(),e(1665,"."),t()()()(),i(1666,"tr",13)(1667,"td",14)(1668,"div",15)(1669,"span",16),e(1670," fieldValue"),n(1671,"br"),t()()(),i(1672,"td",17)(1673,"code",18),e(1674,"string"),t()(),i(1675,"td",20)(1676,"em")(1677,"strong"),e(1678,"(opcional)"),t()(),i(1679,"p"),e(1680,"Nome da propriedade do objeto retornado que ser\xE1 utilizado como valor do campo."),t(),i(1681,"p"),e(1682,"O valor padr\xE3o \xE9: "),i(1683,"code"),e(1684,"value"),t(),e(1685,"."),t(),i(1686,"blockquote")(1687,"p"),e(1688,"Esta propriedade pode ser utilizada em conjunto com: "),i(1689,"code"),e(1690,"options"),t(),e(1691,", "),i(1692,"code"),e(1693,"optionsService"),t(),e(1694," e "),i(1695,"code"),e(1696,"searchService"),t(),e(1697,"."),t()()()(),i(1698,"tr",13)(1699,"td",14)(1700,"div",15)(1701,"span",16),e(1702," filterMinlength"),n(1703,"br"),t()()(),i(1704,"td",17)(1705,"code",41),e(1706,"number"),t()(),i(1707,"td",20)(1708,"em")(1709,"strong"),e(1710,"(opcional)"),t()(),i(1711,"p"),e(1712,"Valor m\xEDnimo de caracteres para realizar o filtro no servi\xE7o do "),i(1713,"code"),e(1714,"po-combo"),t(),e(1715,"."),t()()(),i(1716,"tr",13)(1717,"td",14)(1718,"div",15)(1719,"span",16),e(1720," filterMode"),n(1721,"br"),t()()(),i(1722,"td",17)(1723,"code",48),e(1724,"PoMultiselectFilterMode"),t()(),i(1725,"td",20)(1726,"em")(1727,"strong"),e(1728,"(opcional)"),t()(),i(1729,"p"),e(1730,"Define o modo de pesquisa utilizado no filtro da lista de sele\xE7\xE3o: "),i(1731,"code"),e(1732,"startsWith"),t(),e(1733,", "),i(1734,"code"),e(1735,"contains"),t(),e(1736," ou "),i(1737,"code"),e(1738,"endsWith"),t(),e(1739,"."),t(),i(1740,"blockquote")(1741,"p"),e(1742,"Quando utilizar a propriedade p-filter-service esta propriedade ser\xE1 ignorada."),t()(),i(1743,"p")(1744,"strong"),e(1745,"Componente compat\xEDvel:"),t(),i(1746,"code"),e(1747,"po-multiselect"),t(),e(1748,"."),t()()(),i(1749,"tr",13)(1750,"td",14)(1751,"div",15)(1752,"span",16),e(1753," forceBooleanComponentType"),n(1754,"br"),t()()(),i(1755,"td",17)(1756,"code",49),e(1757,"ForceBooleanComponentEnum"),t()(),i(1758,"td",20)(1759,"em")(1760,"strong"),e(1761,"(opcional)"),t()(),i(1762,"p"),e(1763,"Valores aceitos:"),t(),i(1764,"ul")(1765,"li"),e(1766,"ForceBooleanComponentEnum.switch"),t(),i(1767,"li"),e(1768,"ForceBooleanComponentEnum.checkbox"),t()()()(),i(1769,"tr",13)(1770,"td",14)(1771,"div",15)(1772,"span",16),e(1773," forceOptionsComponentType"),n(1774,"br"),t()()(),i(1775,"td",17)(1776,"code",50),e(1777,"ForceOptionComponentEnum"),t()(),i(1778,"td",20)(1779,"em")(1780,"strong"),e(1781,"(opcional)"),t()(),i(1782,"p"),e(1783,"pode ser utilizada em conjunto com a propriedade "),i(1784,"code"),e(1785,"options"),t(),e(1786," for\xE7ando o componente a renderizar um "),i(1787,"code"),e(1788,"po-select"),t(),e(1789," ou "),i(1790,"code"),e(1791,"po-radio-group"),t(),e(1792,"."),t(),i(1793,"p"),e(1794,"Valores aceitos:"),t(),i(1795,"ul")(1796,"li"),e(1797,"ForceOptionComponentEnum.radioGroup"),t(),i(1798,"li"),e(1799,"ForceOptionComponentEnum.select"),t()(),i(1800,"blockquote")(1801,"p"),e(1802,"Essa propriedade ser\xE1 ignorada caso seja utilizada em conjunto com a propriedade "),i(1803,"code"),e(1804,"optionsMulti"),t(),e(1805," e "),i(1806,"code"),e(1807,"optionsService"),t(),e(1808,"."),t()()()(),i(1809,"tr",13)(1810,"td",14)(1811,"div",15)(1812,"span",16),e(1813," formField"),n(1814,"br"),t()()(),i(1815,"td",17)(1816,"code",18),e(1817,"string"),t()(),i(1818,"td",20)(1819,"em")(1820,"strong"),e(1821,"(opcional)"),t()(),i(1822,"p"),e(1823,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),i(1824,"code"),e(1825,"url"),t(),e(1826,"."),t(),i(1827,"blockquote")(1828,"p"),e(1829,"O valor default \xE9 "),i(1830,"code"),e(1831,"files"),t()()(),i(1832,"p")(1833,"strong"),e(1834,"Componente compat\xEDvel"),t(),e(1835,": "),i(1836,"code"),e(1837,"po-upload"),t()()()(),i(1838,"tr",13)(1839,"td",14)(1840,"div",15)(1841,"span",16),e(1842," format"),n(1843,"br"),t()()(),i(1844,"td",17)(1845,"code",18),e(1846,"string "),t(),i(1847,"code",32),e(1848," Array<string>"),t()(),i(1849,"td",20)(1850,"em")(1851,"strong"),e(1852,"(opcional)"),t()(),i(1853,"p"),e(1854,"Formato de exibi\xE7\xE3o no campo."),t(),i(1855,"p"),e(1856,"Ao utilizar esta propriedade com o "),i(1857,"code"),e(1858,"type"),t(),i(1859,"em"),e(1860,"PoDynamicFieldType.Date"),t(),e(1861," ou "),i(1862,"em"),e(1863,"PoDynamicFieldType.DateTime"),t(),e(1864,`,
pode ser utilizada para formata\xE7\xE3o de exibi\xE7\xE3o da data:`),t(),i(1865,"p"),e(1866,"Valores v\xE1lidos:"),t(),i(1867,"ul")(1868,"li"),e(1869,"dd/mm/yyyy"),t(),i(1870,"li"),e(1871,"mm/dd/yyyy"),t(),i(1872,"li"),e(1873,"yyyy/mm/dd"),t()(),i(1874,"p"),e(1875,"Ao utilizar com o "),i(1876,"code"),e(1877,"type"),t(),i(1878,"em"),e(1879,"PoDynamicFieldType.Time"),t(),e(1880,", define o formato de exibi\xE7\xE3o do hor\xE1rio:"),t(),i(1881,"p"),e(1882,"Valores v\xE1lidos:"),t(),i(1883,"ul")(1884,"li")(1885,"code"),e(1886,"24"),t(),e(1887,": formato de 24 horas (padr\xE3o)"),t(),i(1888,"li")(1889,"code"),e(1890,"12"),t(),e(1891,": formato de 12 horas com indicador AM/PM"),t()(),i(1892,"p"),e(1893,"Tamb\xE9m pode-se utilizar em conjunto com "),i(1894,"code"),e(1895,"searchService"),t(),e(1896,`, informando uma lista de propriedades que ser\xE1 utilizado
para formata\xE7\xE3o da exibi\xE7\xE3o no campo, por exemplo: ["id", "name"].`),t(),i(1897,"p")(1898,"strong"),e(1899,"Componentes compat\xEDveis:"),t(),i(1900,"code"),e(1901,"po-datepicker"),t(),e(1902,", "),i(1903,"code"),e(1904,"po-timepicker"),t(),e(1905,", "),i(1906,"code"),e(1907,"po-lookup"),t(),e(1908,"."),t()()(),i(1909,"tr",13)(1910,"td",14)(1911,"div",15)(1912,"span",16),e(1913," formatModel"),n(1914,"br"),t()()(),i(1915,"td",17)(1916,"code",28),e(1917,"boolean"),t()(),i(1918,"td",20)(1919,"em")(1920,"strong"),e(1921,"(opcional)"),t()(),i(1922,"p"),e(1923,"Indica se o "),i(1924,"code"),e(1925,"model"),t(),e(1926," receber\xE1 o valor formatado pelas propriedades "),i(1927,"code"),e(1928,"p-label-on"),t(),e(1929," e "),i(1930,"code"),e(1931,"p-label-off"),t(),e(1932,` ou
apenas o valor puro (sem formata\xE7\xE3o).`),t(),i(1933,"p"),e(1934,"O valor padr\xE3o \xE9: "),i(1935,"code"),e(1936,"false"),t(),e(1937,"."),t(),i(1938,"blockquote")(1939,"p"),e(1940,"Esta propriedade est\xE1 disponivel apenas para o "),i(1941,"code"),e(1942,"swicth"),t(),e(1943,"."),t()()()(),i(1944,"tr",13)(1945,"td",14)(1946,"div",15)(1947,"span",16),e(1948," gridColumns"),n(1949,"br"),t()()(),i(1950,"td",17)(1951,"code",41),e(1952,"number"),t()(),i(1953,"td",20)(1954,"em")(1955,"strong"),e(1956,"(opcional)"),t()(),i(1957,"p"),e(1958,"Tamanho de exibi\xE7\xE3o do campo em telas."),t(),i(1959,"p"),e(1960,"Deve ser usado o sistema de "),i(1961,"strong"),e(1962,"grid"),t(),e(1963," do PO (1 ... 12 colunas)."),t(),i(1964,"blockquote")(1965,"p"),e(1966,"Esta propriedade \xE9 generica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(1967,"tr",13)(1968,"td",14)(1969,"div",15)(1970,"span",16),e(1971," gridLgColumns"),n(1972,"br"),t()()(),i(1973,"td",17)(1974,"code",41),e(1975,"number"),t()(),i(1976,"td",20)(1977,"em")(1978,"strong"),e(1979,"(opcional)"),t()(),i(1980,"p"),e(1981,"Tamanho de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(1982,"p"),e(1983,"Deve ser usado o sistema de "),i(1984,"strong"),e(1985,"grid"),t(),e(1986," do PO (1 ... 12 colunas)."),t(),i(1987,"blockquote")(1988,"p"),e(1989,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(1990,"code"),e(1991,"gridColumns"),t(),e(1992,"."),t()()()(),i(1993,"tr",13)(1994,"td",14)(1995,"div",15)(1996,"span",16),e(1997," gridLgPull"),n(1998,"br"),t()()(),i(1999,"td",17)(2e3,"code",41),e(2001,"number"),t()(),i(2002,"td",20)(2003,"em")(2004,"strong"),e(2005,"(opcional)"),t()(),i(2006,"p"),e(2007,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas grandes (lg)."),t(),i(2008,"p"),e(2009,"Deve ser usado o sistema de "),i(2010,"strong"),e(2011,"grid"),t(),e(2012," do PO (1 ... 11 colunas)."),t(),i(2013,"blockquote")(2014,"p"),e(2015,"Esta propriedade n\xE3o funciona com a propriedade "),i(2016,"code"),e(2017,"gridColumns"),t(),e(2018,". Deve-se especificar o tamanho da tela."),t()()()(),i(2019,"tr",13)(2020,"td",14)(2021,"div",15)(2022,"span",16),e(2023," gridMdColumns"),n(2024,"br"),t()()(),i(2025,"td",17)(2026,"code",41),e(2027,"number"),t()(),i(2028,"td",20)(2029,"em")(2030,"strong"),e(2031,"(opcional)"),t()(),i(2032,"p"),e(2033,"Tamanho de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(2034,"p"),e(2035,"Deve ser usado o sistema de "),i(2036,"strong"),e(2037,"grid"),t(),e(2038," do PO (1 ... 12 colunas)."),t(),i(2039,"blockquote")(2040,"p"),e(2041,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2042,"code"),e(2043,"gridColumns"),t(),e(2044,"."),t()()()(),i(2045,"tr",13)(2046,"td",14)(2047,"div",15)(2048,"span",16),e(2049," gridMdPull"),n(2050,"br"),t()()(),i(2051,"td",17)(2052,"code",41),e(2053,"number"),t()(),i(2054,"td",20)(2055,"em")(2056,"strong"),e(2057,"(opcional)"),t()(),i(2058,"p"),e(2059,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas m\xE9dias (md)."),t(),i(2060,"p"),e(2061,"Deve ser usado o sistema de "),i(2062,"strong"),e(2063,"grid"),t(),e(2064," do PO (1 ... 11 colunas)."),t(),i(2065,"blockquote")(2066,"p"),e(2067,"Esta propriedade n\xE3o funciona com a propriedade "),i(2068,"code"),e(2069,"gridColumns"),t(),e(2070,". Deve-se especificar o tamanho da tela."),t()()()(),i(2071,"tr",13)(2072,"td",14)(2073,"div",15)(2074,"span",16),e(2075," gridSmColumns"),n(2076,"br"),t()()(),i(2077,"td",17)(2078,"code",41),e(2079,"number"),t()(),i(2080,"td",20)(2081,"em")(2082,"strong"),e(2083,"(opcional)"),t()(),i(2084,"p"),e(2085,"Tamanho de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(2086,"p"),e(2087,"Deve ser usado o sistema de "),i(2088,"strong"),e(2089,"grid"),t(),e(2090," do PO (1 ... 12 colunas)."),t(),i(2091,"blockquote")(2092,"p"),e(2093,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2094,"code"),e(2095,"gridColumns"),t(),e(2096,"."),t()()()(),i(2097,"tr",13)(2098,"td",14)(2099,"div",15)(2100,"span",16),e(2101," gridSmPull"),n(2102,"br"),t()()(),i(2103,"td",17)(2104,"code",41),e(2105,"number"),t()(),i(2106,"td",20)(2107,"em")(2108,"strong"),e(2109,"(opcional)"),t()(),i(2110,"p"),e(2111,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas menores (sm)."),t(),i(2112,"p"),e(2113,"Deve ser usado o sistema de "),i(2114,"strong"),e(2115,"grid"),t(),e(2116," do PO (1 ... 11 colunas)."),t(),i(2117,"blockquote")(2118,"p"),e(2119,"Esta propriedade n\xE3o funciona com a propriedade "),i(2120,"code"),e(2121,"gridColumns"),t(),e(2122,". Deve-se especificar o tamanho da tela."),t()()()(),i(2123,"tr",13)(2124,"td",14)(2125,"div",15)(2126,"span",16),e(2127," gridXlColumns"),n(2128,"br"),t()()(),i(2129,"td",17)(2130,"code",41),e(2131,"number"),t()(),i(2132,"td",20)(2133,"em")(2134,"strong"),e(2135,"(opcional)"),t()(),i(2136,"p"),e(2137,"Tamanho de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(2138,"p"),e(2139,"Deve ser usado o sistema de "),i(2140,"strong"),e(2141,"grid"),t(),e(2142," do PO (1 ... 12 colunas)."),t(),i(2143,"blockquote")(2144,"p"),e(2145,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(2146,"code"),e(2147,"gridColumns"),t(),e(2148,"."),t()()()(),i(2149,"tr",13)(2150,"td",14)(2151,"div",15)(2152,"span",16),e(2153," gridXlPull"),n(2154,"br"),t()()(),i(2155,"td",17)(2156,"code",41),e(2157,"number"),t()(),i(2158,"td",20)(2159,"em")(2160,"strong"),e(2161,"(opcional)"),t()(),i(2162,"p"),e(2163,"Tamanho do espa\xE7amento ap\xF3s o campo antes da exibi\xE7\xE3o do pr\xF3ximo campo em telas extra grandes (xl)."),t(),i(2164,"p"),e(2165,"Deve ser usado o sistema de "),i(2166,"strong"),e(2167,"grid"),t(),e(2168," do PO (1 ... 11 colunas)."),t(),i(2169,"blockquote")(2170,"p"),e(2171,"Esta propriedade n\xE3o funciona com a propriedade "),i(2172,"code"),e(2173,"gridColumns"),t(),e(2174,". Deve-se especificar o tamanho da tela."),t()()()(),i(2175,"tr",13)(2176,"td",14)(2177,"div",15)(2178,"span",16),e(2179," headers"),n(2180,"br"),t()()(),i(2181,"td",17)(2182,"code",51),e(2183,"{ [name: string]: string "),t(),i(2184,"code",52),e(2185,` Array<string>;
}`),t()(),i(2186,"td",20)(2187,"em")(2188,"strong"),e(2189,"(opcional)"),t()(),i(2190,"p"),e(2191,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t(),i(2192,"p")(2193,"strong"),e(2194,"Componente compat\xEDvel"),t(),e(2195,": "),i(2196,"code"),e(2197,"po-upload"),t()()()(),i(2198,"tr",13)(2199,"td",14)(2200,"div",15)(2201,"span",16),e(2202," help"),n(2203,"br"),t()()(),i(2204,"td",17)(2205,"code",18),e(2206,"string"),t()(),i(2207,"td",20)(2208,"em")(2209,"strong"),e(2210,"(opcional)"),t()(),i(2211,"p"),e(2212,"Texto de ajuda."),t()()(),i(2213,"tr",13)(2214,"td",14)(2215,"div",15)(2216,"span",16),e(2217," helper"),n(2218,"br"),t()()(),i(2219,"td",17)(2220,"code",18),e(2221,"string "),t(),i(2222,"code",53),e(2223," PoHelperOptions"),t()(),i(2224,"td",20)(2225,"em")(2226,"strong"),e(2227,"(opcional)"),t()(),i(2228,"p"),e(2229,"Texto simples que ser\xE1 apresentado como aux\xEDlio ao campo ou objeto com as defini\xE7\xF5es do po-helper."),t()()(),i(2230,"tr",13)(2231,"td",14)(2232,"div",15)(2233,"span",16),e(2234," hideLabelStatus"),n(2235,"br"),t()()(),i(2236,"td",17)(2237,"code",28),e(2238,"boolean"),t()(),i(2239,"td",20)(2240,"em")(2241,"strong"),e(2242,"(opcional)"),t()(),i(2243,"p"),e(2244,"Indica se o status do "),i(2245,"code"),e(2246,"model"),t(),e(2247," ser\xE1 escondido visualmente ao lado do switch"),t()()(),i(2248,"tr",13)(2249,"td",14)(2250,"div",15)(2251,"span",16),e(2252," hidePasswordPeek"),n(2253,"br"),t()()(),i(2254,"td",17)(2255,"code",28),e(2256,"boolean"),t()(),i(2257,"td",20)(2258,"em")(2259,"strong"),e(2260,"(opcional)"),t()(),i(2261,"p"),e(2262,"Permite esconder a fun\xE7\xE3o de espiar a senha digitada no "),i(2263,"code"),e(2264,"po-password"),t(),e(2265,"."),t()()(),i(2266,"tr",13)(2267,"td",14)(2268,"div",15)(2269,"span",16),e(2270," hideRestrictionsInfo"),n(2271,"br"),t()()(),i(2272,"td",17)(2273,"code",28),e(2274,"boolean"),t()(),i(2275,"td",20)(2276,"em")(2277,"strong"),e(2278,"(opcional)"),t()(),i(2279,"p"),e(2280,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t(),i(2281,"p")(2282,"strong"),e(2283,"Componente compat\xEDvel"),t(),e(2284,": "),i(2285,"code"),e(2286,"po-upload"),t()()()(),i(2287,"tr",13)(2288,"td",14)(2289,"div",15)(2290,"span",16),e(2291," hideSearch"),n(2292,"br"),t()()(),i(2293,"td",17)(2294,"code",28),e(2295,"boolean"),t()(),i(2296,"td",20)(2297,"em")(2298,"strong"),e(2299,"(opcional)"),t()(),i(2300,"p"),e(2301,"Esconde o campo de pesquisa existente dentro do dropdown do "),i(2302,"code"),e(2303,"po-multiselect"),t(),e(2304,"."),t()()(),i(2305,"tr",13)(2306,"td",14)(2307,"div",15)(2308,"span",16),e(2309," hideSelectAll"),n(2310,"br"),t()()(),i(2311,"td",17)(2312,"code",28),e(2313,"boolean"),t()(),i(2314,"td",20)(2315,"em")(2316,"strong"),e(2317,"(opcional)"),t()(),i(2318,"p"),e(2319,'Indica se o campo "Selecionar todos" do '),i(2320,"code"),e(2321,"po-multiselect"),t(),e(2322," ser\xE1 escondido."),t()()(),i(2323,"tr",13)(2324,"td",14)(2325,"div",15)(2326,"span",16),e(2327," hideSelectButton"),n(2328,"br"),t()()(),i(2329,"td",17)(2330,"code",28),e(2331,"boolean"),t()(),i(2332,"td",20)(2333,"em")(2334,"strong"),e(2335,"(opcional)"),t()(),i(2336,"p"),e(2337,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),i(2338,"blockquote")(2339,"p"),e(2340,"Caso o valor definido seja "),i(2341,"code"),e(2342,"true"),t(),e(2343,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2344,"code"),e(2345,"selectFiles()"),t(),e(2346," para sele\xE7\xE3o de arquivos."),t()(),i(2347,"p")(2348,"strong"),e(2349,"Componente compat\xEDvel"),t(),e(2350,": "),i(2351,"code"),e(2352,"po-upload"),t()()()(),i(2353,"tr",13)(2354,"td",14)(2355,"div",15)(2356,"span",16),e(2357," hideSendButton"),n(2358,"br"),t()()(),i(2359,"td",17)(2360,"code",28),e(2361,"boolean"),t()(),i(2362,"td",20)(2363,"em")(2364,"strong"),e(2365,"(opcional)"),t()(),i(2366,"p"),e(2367,"Omite o bot\xE3o de envio de arquivos."),t(),i(2368,"blockquote")(2369,"p"),e(2370,"Caso o valor definido seja "),i(2371,"code"),e(2372,"true"),t(),e(2373,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),i(2374,"code"),e(2375,"sendFiles()"),t(),e(2376," para envio do(s) arquivo(s) selecionado(s)."),t()(),i(2377,"p")(2378,"strong"),e(2379,"Componente compat\xEDvel"),t(),e(2380,": "),i(2381,"code"),e(2382,"po-upload"),t()()()(),i(2383,"tr",13)(2384,"td",14)(2385,"div",15)(2386,"span",16),e(2387," icon"),n(2388,"br"),t()()(),i(2389,"td",17)(2390,"code",18),e(2391,"string "),t(),i(2392,"code",54),e(2393," TemplateRef<void>"),t()(),i(2394,"td",20)(2395,"em")(2396,"strong"),e(2397,"(opcional)"),t()(),i(2398,"p"),e(2399,"Define o \xEDcone que ser\xE1 exibido no in\xEDcio do campo."),t(),i(2400,"blockquote")(2401,"p"),e(2402,"Esta propriedade s\xF3 pode ser utilizado nos campos:"),t()(),i(2403,"ul")(2404,"li"),e(2405,"Input;"),t(),i(2406,"li"),e(2407,"Number;"),t(),i(2408,"li"),e(2409,"Decimal;"),t(),i(2410,"li"),e(2411,"Combo;"),t(),i(2412,"li"),e(2413,"Password;"),t()(),i(2414,"blockquote")(2415,"p"),e(2416,"Veja a disponibilidade de \xEDcones em "),i(2417,"a",55),e(2418,"biblioteca de \xEDcones"),t(),e(2419,"."),t()()()(),i(2420,"tr",13)(2421,"td",14)(2422,"div",15)(2423,"span",16),e(2424," infiniteScroll"),n(2425,"br"),t()()(),i(2426,"td",17)(2427,"code",28),e(2428,"boolean"),t()(),i(2429,"td",20)(2430,"em")(2431,"strong"),e(2432,"(opcional)"),t()(),i(2433,"p"),e(2434,"Se verdadeiro ativa a funcionalidade de scroll infinito para o combo ou lookup, ao chegar ao fim da tabela executar\xE1 nova busca dos dados conforme pagina\xE7\xE3o."),t(),i(2435,"p")(2436,"strong"),e(2437,"Componentes compat\xEDveis:"),t(),i(2438,"code"),e(2439,"po-combo"),t(),e(2440,", "),i(2441,"code"),e(2442,"po-lookup"),t(),e(2443,"."),t()()(),i(2444,"tr",13)(2445,"td",14)(2446,"div",15)(2447,"span",16),e(2448," infiniteScrollDistance"),n(2449,"br"),t()()(),i(2450,"td",17)(2451,"code",41),e(2452,"number"),t()(),i(2453,"td",20)(2454,"em")(2455,"strong"),e(2456,"(opcional)"),t()(),i(2457,"p"),e(2458,`Define o percentual necess\xE1rio para disparar o evento show-more, que \xE9 respons\xE1vel por carregar mais dados no combo. Caso o valor seja maior que 100 ou menor que 0, o valor padr\xE3o ser\xE1 100%.
`),i(2459,"strong"),e(2460,"Exemplos"),t(),i(2461,"code"),e(2462,"{ infiniteScrollDistance: 80 }"),t(),e(2463,": Quando atingir 80% do scroll do combo, o show-more ser\xE1 disparado."),t(),i(2464,"p")(2465,"strong"),e(2466,"Componente compat\xEDvel:"),t(),i(2467,"code"),e(2468,"po-combo"),t(),e(2469,"."),t()()(),i(2470,"tr",13)(2471,"td",14)(2472,"div",15)(2473,"span",16),e(2474," invalidValue"),n(2475,"br"),t()()(),i(2476,"td",17)(2477,"code",28),e(2478,"boolean"),t()(),i(2479,"td",20)(2480,"em")(2481,"strong"),e(2482,"(opcional)"),t()(),i(2483,"p"),e(2484,"Define qual valor ser\xE1 considerado como inv\xE1lido para exibir a mensagem da propriedade "),i(2485,"code"),e(2486,"p-field-error-message"),t(),e(2487,"."),t(),i(2488,"blockquote")(2489,"p"),e(2490,"Caso essa propriedade seja definida como "),i(2491,"code"),e(2492,"true"),t(),e(2493,", a mensagem de erro ser\xE1 exibida quando o campo estiver ligado(on/true)."),t()(),i(2494,"p")(2495,"strong"),e(2496,"Componente compat\xEDvel"),t(),e(2497,": "),i(2498,"code"),e(2499,"po-switch"),t()()()(),i(2500,"tr",13)(2501,"td",14)(2502,"div",15)(2503,"span",16),e(2504," isoFormat"),n(2505,"br"),t()()(),i(2506,"td",17)(2507,"code",56),e(2508,"PoDatepickerIsoFormat"),t()(),i(2509,"td",20)(2510,"em")(2511,"strong"),e(2512,"(opcional)"),t()(),i(2513,"p"),e(2514,"Padr\xE3o de formata\xE7\xE3o para sa\xEDda do model, independentemente do formato de entrada."),t(),i(2515,"blockquote")(2516,"p"),e(2517,"Veja os valores v\xE1lidos no "),i(2518,"code"),e(2519,"PoDatepickerIsoFormat"),t(),e(2520,"."),t()(),i(2521,"p")(2522,"strong"),e(2523,"Componente compat\xEDvel:"),t(),i(2524,"code"),e(2525,"po-datepicker"),t()()()(),i(2526,"tr",13)(2527,"td",14)(2528,"div",15)(2529,"span",16),e(2530," key"),n(2531,"br"),t()()(),i(2532,"td",17)(2533,"code",28),e(2534,"boolean"),t()(),i(2535,"td",20)(2536,"em")(2537,"strong"),e(2538,"(opcional)"),t()(),i(2539,"p"),e(2540,"Identificador"),t()()(),i(2541,"tr",13)(2542,"td",14)(2543,"div",15)(2544,"span",16),e(2545," keydown"),n(2546,"br"),t()()(),i(2547,"td",17)(2548,"code",29),e(2549,"Function"),t()(),i(2550,"td",20)(2551,"em")(2552,"strong"),e(2553,"(opcional)"),t()(),i(2554,"p"),e(2555,`Fun\xE7\xE3o executada quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),i(2556,"code"),e(2557,"KeyboardEvent"),t(),e(2558," com informa\xE7\xF5es sobre a tecla."),t()()(),i(2559,"tr",13)(2560,"td",14)(2561,"div",15)(2562,"span",16),e(2563," label"),n(2564,"br"),t()()(),i(2565,"td",17)(2566,"code",18),e(2567,"string"),t()(),i(2568,"td",20)(2569,"em")(2570,"strong"),e(2571,"(opcional)"),t()(),i(2572,"p"),e(2573,"R\xF3tulo do campo exibido."),t(),i(2574,"p"),e(2575,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(2576,"code"),e(2577,"label"),t(),e(2578," o valor da propriedade "),i(2579,"code"),e(2580,"property"),t(),e(2581," com a primeira letra em mai\xFAsculo."),t()()(),i(2582,"tr",13)(2583,"td",14)(2584,"div",15)(2585,"span",16),e(2586," labelPosition"),n(2587,"br"),t()()(),i(2588,"td",17)(2589,"code",57),e(2590,"PoSwitchLabelPosition"),t()(),i(2591,"td",20)(2592,"em")(2593,"strong"),e(2594,"(opcional)"),t()(),i(2595,"p"),e(2596,"Posi\xE7\xE3o de exibi\xE7\xE3o do r\xF3tulo do PoSwitch."),t(),i(2597,"blockquote")(2598,"p"),e(2599,"Por padr\xE3o exibe \xE0 direita."),t()()()(),i(2600,"tr",13)(2601,"td",14)(2602,"div",15)(2603,"span",16),e(2604," listboxControlPosition"),n(2605,"br"),t()()(),i(2606,"td",17)(2607,"code",58),e(2608,"'top' "),t(),i(2609,"code",59),e(2610," 'bottom'"),t()(),i(2611,"td",20)(2612,"em")(2613,"strong"),e(2614,"(opcional)"),t()(),i(2615,"p"),e(2616,"Define a dire\xE7\xE3o preferida para exibi\xE7\xE3o do "),i(2617,"code"),e(2618,"listbox"),t(),e(2619," em rela\xE7\xE3o ao campo ("),i(2620,"code"),e(2621,"top"),t(),e(2622," ou "),i(2623,"code"),e(2624,"bottom"),t(),e(2625,`).
\xDAtil em casos onde o posicionamento autom\xE1tico n\xE3o se comporta como esperado, como quando o componente est\xE1 pr\xF3ximo
ao final do formul\xE1rio ou do container vis\xEDvel. Na maioria dos casos, essa dire\xE7\xE3o ser\xE1 respeitada; no entanto,
pode ser ajustada automaticamente conforme o espa\xE7o dispon\xEDvel na tela.`),t(),i(2626,"p")(2627,"strong"),e(2628,"Componentes compat\xEDveis:"),t(),i(2629,"code"),e(2630,"po-multiselect"),t(),e(2631,", "),i(2632,"code"),e(2633,"po-combo"),t(),e(2634,"."),t()()(),i(2635,"tr",13)(2636,"td",14)(2637,"div",15)(2638,"span",16),e(2639," literals"),n(2640,"br"),t()()(),i(2641,"td",17)(2642,"code",60),e(2643,"PoLookupLiterals "),t(),i(2644,"code",61),e(2645," PoMultiselectLiterals "),t(),i(2646,"code",62),e(2647," PoComboLiterals "),t(),i(2648,"code",63),e(2649," PoDatepickerRangeLiterals "),t(),i(2650,"code",64),e(2651," PoUploadLiterals"),t()(),i(2652,"td",20)(2653,"em")(2654,"strong"),e(2655,"(opcional)"),t()(),i(2656,"p"),e(2657,"Objeto com as literais usadas para os seguintes componentes: "),i(2658,"code"),e(2659,"po-lookup"),t(),e(2660,", "),i(2661,"code"),e(2662,"po-multiselect"),t(),e(2663,", "),i(2664,"code"),e(2665,"po-combo"),t(),e(2666," e "),i(2667,"code"),e(2668,"po-datepicker-range"),t(),e(2669,"."),t(),i(2670,"blockquote")(2671,"p"),e(2672,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do PoI18nService ou do browser."),t()(),i(2673,"p")(2674,"strong"),e(2675,"Componentes compat\xEDveis:"),t(),i(2676,"code"),e(2677,"po-lookup"),t(),e(2678,", "),i(2679,"code"),e(2680,"po-multiselect"),t(),e(2681,", "),i(2682,"code"),e(2683,"po-combo"),t(),e(2684,", "),i(2685,"code"),e(2686,"po-datepicker-range"),t()()()(),i(2687,"tr",13)(2688,"td",14)(2689,"div",15)(2690,"span",16),e(2691," loading"),n(2692,"br"),t()()(),i(2693,"td",17)(2694,"code",28),e(2695,"boolean"),t()(),i(2696,"td",20)(2697,"em")(2698,"strong"),e(2699,"(opcional)"),t()(),i(2700,"p"),e(2701,"Habilita um estado de carregamento no componente, desabilitando-o e exibindo um \xEDcone de carregamento."),t(),i(2702,"blockquote")(2703,"p"),e(2704,"Por padr\xE3o \xE9 "),i(2705,"code"),e(2706,"false"),t(),e(2707,"."),t()(),i(2708,"p")(2709,"strong"),e(2710,"Componentes compat\xEDveis:"),t(),i(2711,"code"),e(2712,"po-datepicker"),t(),e(2713,", "),i(2714,"code"),e(2715,"po-datepicker-range"),t(),e(2716,", "),i(2717,"code"),e(2718,"po-number"),t(),e(2719,", "),i(2720,"code"),e(2721,"po-decimal"),t(),e(2722,`,
`),i(2723,"code"),e(2724,"po-input"),t(),e(2725,", "),i(2726,"code"),e(2727,"po-select"),t(),e(2728,", "),i(2729,"code"),e(2730,"po-switch"),t(),e(2731,", "),i(2732,"code"),e(2733,"po-combo"),t(),e(2734,", "),i(2735,"code"),e(2736,"po-lookup"),t(),e(2737,", "),i(2738,"code"),e(2739,"po-multiselect"),t(),e(2740,`,
`),i(2741,"code"),e(2742,"po-textarea"),t(),e(2743,", "),i(2744,"code"),e(2745,"po-password"),t(),e(2746,", "),i(2747,"code"),e(2748,"po-upload"),t(),e(2749,"."),t()()(),i(2750,"tr",13)(2751,"td",14)(2752,"div",15)(2753,"span",16),e(2754," locale"),n(2755,"br"),t()()(),i(2756,"td",17)(2757,"code",18),e(2758,"string"),t()(),i(2759,"td",20)(2760,"em")(2761,"strong"),e(2762,"(opcional)"),t()(),i(2763,"p"),e(2764,`Define a localidade a ser utilizada no componente.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(2765,"a",65)(2766,"code"),e(2767,"I18n"),t()()(),i(2768,"p"),e(2769,"Exemplo de utiliza\xE7\xE3o:"),t(),i(2770,"pre")(2771,"code"),e(2772,`[
  { property: 'birthday', locale: 'en', type: 'date' },
  { property: 'wage', locale: 'ru', type: 'currency' }
];
`),t()(),i(2773,"blockquote")(2774,"p"),e(2775,"Para ver quais linguagens suportadas acesse "),i(2776,"a",65)(2777,"code"),e(2778,"I18n"),t()()()(),i(2779,"p")(2780,"strong"),e(2781,"Componentes compat\xEDveis:"),t(),i(2782,"code"),e(2783,"po-datepicker"),t(),e(2784,", "),i(2785,"code"),e(2786,"po-decimal"),t(),e(2787,", "),i(2788,"code"),e(2789,"po-timepicker"),t(),e(2790,"."),t()()(),i(2791,"tr",13)(2792,"td",14)(2793,"div",15)(2794,"span",16),e(2795," mask"),n(2796,"br"),t()()(),i(2797,"td",17)(2798,"code",18),e(2799,"string"),t()(),i(2800,"td",20)(2801,"em")(2802,"strong"),e(2803,"(opcional)"),t()(),i(2804,"p"),e(2805,"M\xE1scara para o campo."),t(),i(2806,"p")(2807,"strong"),e(2808,"Componente compat\xEDvel:"),t(),i(2809,"code"),e(2810,"po-input"),t(),e(2811,"."),t(),i(2812,"blockquote")(2813,"p"),e(2814,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(2815,"code"),e(2816,"type: time"),t(),e(2817,"."),t()()()(),i(2818,"tr",13)(2819,"td",14)(2820,"div",15)(2821,"span",16),e(2822," maskFormatModel"),n(2823,"br"),t()()(),i(2824,"td",17)(2825,"code",28),e(2826,"boolean"),t()(),i(2827,"td",20)(2828,"em")(2829,"strong"),e(2830,"(opcional)"),t()(),i(2831,"p"),e(2832,"Define que o valor do componente ser\xE1 conforme especificado na masc\xE1ra. O valor padr\xE3o \xE9 "),i(2833,"code"),e(2834,"false"),t(),e(2835,"."),t(),i(2836,"p")(2837,"strong"),e(2838,"Componente compat\xEDvel:"),t(),i(2839,"code"),e(2840,"po-input"),t(),e(2841,"."),t(),i(2842,"blockquote")(2843,"p"),e(2844,"tamb\xE9m \xE9 atribu\xEDdo ao utilizar a propriedade "),i(2845,"code"),e(2846,"type: time"),t(),e(2847,"."),t()()()(),i(2848,"tr",13)(2849,"td",14)(2850,"div",15)(2851,"span",16),e(2852," maskNoLengthValidation"),n(2853,"br"),t()()(),i(2854,"td",17)(2855,"code",28),e(2856,"boolean"),t()(),i(2857,"td",20)(2858,"em")(2859,"strong"),e(2860,"(opcional)"),t()(),i(2861,"p"),e(2862,"Controla como o componente aplica as valida\xE7\xF5es de comprimento m\xEDnimo ("),i(2863,"code"),e(2864,"minLength"),t(),e(2865,") e m\xE1ximo ("),i(2866,"code"),e(2867,"maxLength"),t(),e(2868,") quando h\xE1 uma m\xE1scara ("),i(2869,"code"),e(2870,"p-mask"),t(),e(2871,") definida."),t(),i(2872,"ul")(2873,"li"),e(2874,"Quando "),i(2875,"code"),e(2876,"true"),t(),e(2877,", apenas os caracteres alfanum\xE9ricos ser\xE3o contabilizados para a valida\xE7\xE3o dos comprimentos."),t(),i(2878,"li"),e(2879,"Quando "),i(2880,"code"),e(2881,"false"),t(),e(2882,", todos os caracteres, incluindo os especiais da m\xE1scara, ser\xE3o considerados na valida\xE7\xE3o."),t()(),i(2883,"p")(2884,"strong"),e(2885,"Componentes compat\xEDveis:"),t(),i(2886,"code"),e(2887,"po-input"),t(),e(2888,", "),i(2889,"code"),e(2890,"po-decimal"),t(),e(2891,"."),t(),i(2892,"blockquote")(2893,"p"),e(2894,"Esta propriedade \xE9 ignorada quando utilizada em conjunto com "),i(2895,"code"),e(2896,"p-mask-format-model"),t(),e(2897,"."),t()(),i(2898,"p"),e(2899,"Exemplo:"),t(),i(2900,"pre")(2901,"code"),e(2902,`fields:Array<PoDynamicFormField> = [
{
  property: 'CNPJ maskNoLengthValidation TRUE',
  required: true,
  showRequired: true,
  mask: '99.999.999/9999-99',
  pattern: '([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])',
  maskNoLengthValidation: true,
  maxLength: 14,
  minLength: 0
}
`),t()(),i(2903,"ul")(2904,"li"),e(2905,"Entrada: "),i(2906,"code"),e(2907,"11.111.111/1111-11"),t(),e(2908," \u2192 Valida\xE7\xE3o ser\xE1 aplicada somente aos n\xFAmeros, ignorando os caracteres especiais."),t()()()(),i(2909,"tr",13)(2910,"td",14)(2911,"div",15)(2912,"span",16),e(2913," maxLength"),n(2914,"br"),t()()(),i(2915,"td",17)(2916,"code",41),e(2917,"number"),t()(),i(2918,"td",20)(2919,"em")(2920,"strong"),e(2921,"(opcional)"),t()(),i(2922,"p"),e(2923,"Tamanho m\xE1ximo de caracteres."),t(),i(2924,"p")(2925,"strong"),e(2926,"Componentes compat\xEDveis:"),t(),i(2927,"code"),e(2928,"po-input"),t(),e(2929,", "),i(2930,"code"),e(2931,"po-number"),t(),e(2932,", "),i(2933,"code"),e(2934,"po-decimal"),t(),e(2935,", "),i(2936,"code"),e(2937,"po-textarea"),t(),e(2938,", "),i(2939,"code"),e(2940,"po-password"),t(),e(2941,"."),t()()(),i(2942,"tr",13)(2943,"td",14)(2944,"div",15)(2945,"span",16),e(2946," maxValue"),n(2947,"br"),t()()(),i(2948,"td",17)(2949,"code",18),e(2950,"string "),t(),i(2951,"code",41),e(2952," number"),t()(),i(2953,"td",20)(2954,"em")(2955,"strong"),e(2956,"(opcional)"),t()(),i(2957,"p"),e(2958,"Valor m\xE1ximo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(2959,"em"),e(2960,"number"),t(),e(2961,", "),i(2962,"em"),e(2963,"date"),t(),e(2964,", "),i(2965,"em"),e(2966,"dateTime"),t(),e(2967," ou "),i(2968,"em"),e(2969,"time"),t(),e(2970,"."),t(),i(2971,"blockquote")(2972,"p"),e(2973,"Para "),i(2974,"code"),e(2975,"po-timepicker"),t(),e(2976,", o valor deve estar no formato "),i(2977,"code"),e(2978,"HH:mm"),t(),e(2979," ou "),i(2980,"code"),e(2981,"HH:mm:ss"),t(),e(2982,"."),t()(),i(2983,"p")(2984,"strong"),e(2985,"Componentes compat\xEDveis:"),t(),i(2986,"code"),e(2987,"po-datepicker"),t(),e(2988,", "),i(2989,"code"),e(2990,"po-datepicker-range"),t(),e(2991,", "),i(2992,"code"),e(2993,"po-number"),t(),e(2994,", "),i(2995,"code"),e(2996,"po-decimal"),t(),e(2997,", "),i(2998,"code"),e(2999,"po-timepicker"),t()()()(),i(3e3,"tr",13)(3001,"td",14)(3002,"div",15)(3003,"span",16),e(3004," minLength"),n(3005,"br"),t()()(),i(3006,"td",17)(3007,"code",41),e(3008,"number"),t()(),i(3009,"td",20)(3010,"em")(3011,"strong"),e(3012,"(opcional)"),t()(),i(3013,"p"),e(3014,"Tamanho m\xEDnimo de caracteres."),t(),i(3015,"p")(3016,"strong"),e(3017,"Componentes compat\xEDveis:"),t(),i(3018,"code"),e(3019,"po-input"),t(),e(3020,", "),i(3021,"code"),e(3022,"po-number"),t(),e(3023,", "),i(3024,"code"),e(3025,"po-decimal"),t(),e(3026,", "),i(3027,"code"),e(3028,"po-textarea"),t(),e(3029,", "),i(3030,"code"),e(3031,"po-password"),t(),e(3032,"."),t()()(),i(3033,"tr",13)(3034,"td",14)(3035,"div",15)(3036,"span",16),e(3037," minValue"),n(3038,"br"),t()()(),i(3039,"td",17)(3040,"code",18),e(3041,"string "),t(),i(3042,"code",41),e(3043," number"),t()(),i(3044,"td",20)(3045,"em")(3046,"strong"),e(3047,"(opcional)"),t()(),i(3048,"p"),e(3049,"Valor m\xEDnimo a ser informado no componente, podendo ser utilizado quando o tipo de dado por "),i(3050,"em"),e(3051,"number"),t(),e(3052,", "),i(3053,"em"),e(3054,"date"),t(),e(3055,", "),i(3056,"em"),e(3057,"dateTime"),t(),e(3058," ou "),i(3059,"em"),e(3060,"time"),t(),e(3061,"."),t(),i(3062,"blockquote")(3063,"p"),e(3064,"Para "),i(3065,"code"),e(3066,"po-timepicker"),t(),e(3067,", o valor deve estar no formato "),i(3068,"code"),e(3069,"HH:mm"),t(),e(3070," ou "),i(3071,"code"),e(3072,"HH:mm:ss"),t(),e(3073,"."),t()(),i(3074,"p")(3075,"strong"),e(3076,"Componentes compat\xEDveis:"),t(),i(3077,"code"),e(3078,"po-datepicker"),t(),e(3079,", "),i(3080,"code"),e(3081,"po-datepicker-range"),t(),e(3082,", "),i(3083,"code"),e(3084,"po-number"),t(),e(3085,", "),i(3086,"code"),e(3087,"po-decimal"),t(),e(3088,", "),i(3089,"code"),e(3090,"po-timepicker"),t()()()(),i(3091,"tr",13)(3092,"td",14)(3093,"div",15)(3094,"span",16),e(3095," minuteInterval"),n(3096,"br"),t()()(),i(3097,"td",17)(3098,"code",41),e(3099,"number"),t()(),i(3100,"td",20)(3101,"em")(3102,"strong"),e(3103,"(opcional)"),t()(),i(3104,"p"),e(3105,"Define o intervalo entre os minutos exibidos no painel do timepicker."),t()()(),i(3106,"tr",13)(3107,"td",14)(3108,"div",15)(3109,"span",16),e(3110," mode"),n(3111,"br"),t()()(),i(3112,"td",17)(3113,"code",66),e(3114,"'month-year' "),t(),i(3115,"code",67),e(3116," 'year'"),t()(),i(3117,"td",20)(3118,"em")(3119,"strong"),e(3120,"(opcional)"),t()(),i(3121,"p"),e(3122,"Define o modo de sele\xE7\xE3o do "),i(3123,"code"),e(3124,"po-datepicker"),t(),e(3125,"."),t(),i(3126,"p"),e(3127,"Valores aceitos:"),t(),i(3128,"ul")(3129,"li")(3130,"code"),e(3131,"'month-year'"),t(),e(3132,": exibe sele\xE7\xE3o de m\xEAs e ano (formato "),i(3133,"code"),e(3134,"MM/YYYY"),t(),e(3135,")"),t(),i(3136,"li")(3137,"code"),e(3138,"'year'"),t(),e(3139,": exibe sele\xE7\xE3o apenas de ano (formato "),i(3140,"code"),e(3141,"YYYY"),t(),e(3142,")"),t()(),i(3143,"p")(3144,"strong"),e(3145,"Componente compat\xEDvel:"),t(),i(3146,"code"),e(3147,"po-datepicker"),t()()()(),i(3148,"tr",13)(3149,"td",14)(3150,"div",15)(3151,"span",16),e(3152," modelFormat"),n(3153,"br"),t()()(),i(3154,"td",17)(3155,"code",68),e(3156,"PoTimepickerModelFormat"),t()(),i(3157,"td",20)(3158,"em")(3159,"strong"),e(3160,"(opcional)"),t()(),i(3161,"p"),e(3162,"Define o formato do valor do hor\xE1rio a ser utilizado no model do "),i(3163,"code"),e(3164,"po-timepicker"),t(),e(3165,"."),t(),i(3166,"blockquote")(3167,"p"),e(3168,"Veja os valores v\xE1lidos no "),i(3169,"code"),e(3170,"PoTimepickerModelFormat"),t(),e(3171,"."),t()(),i(3172,"p")(3173,"strong"),e(3174,"Componente compat\xEDvel:"),t(),i(3175,"code"),e(3176,"po-timepicker"),t()()()(),i(3177,"tr",13)(3178,"td",14)(3179,"div",15)(3180,"span",16),e(3181," multiple"),n(3182,"br"),t()()(),i(3183,"td",17)(3184,"code",28),e(3185,"boolean"),t()(),i(3186,"td",20)(3187,"em")(3188,"strong"),e(3189,"(opcional)"),t()(),i(3190,"p"),e(3191,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(3192,"p")(3193,"strong"),e(3194,"Componentes compat\xEDveis:"),t(),i(3195,"code"),e(3196,"po-lookup"),t(),e(3197,", "),i(3198,"code"),e(3199,"po-upload"),t()()()(),i(3200,"tr",13)(3201,"td",14)(3202,"div",15)(3203,"span",16),e(3204," noAutocomplete"),n(3205,"br"),t()()(),i(3206,"td",17)(3207,"code",28),e(3208,"boolean"),t()(),i(3209,"td",20)(3210,"em")(3211,"strong"),e(3212,"(opcional)"),t()(),i(3213,"p"),e(3214,"Define a propriedade nativa "),i(3215,"code"),e(3216,"autocomplete"),t(),e(3217," do campo como off."),t(),i(3218,"p")(3219,"strong"),e(3220,"Componentes compat\xEDveis:"),t(),i(3221,"code"),e(3222,"po-datepicker"),t(),e(3223,", "),i(3224,"code"),e(3225,"po-datepicker-range"),t(),e(3226,", "),i(3227,"code"),e(3228,"po-input"),t(),e(3229,", "),i(3230,"code"),e(3231,"po-number"),t(),e(3232,", "),i(3233,"code"),e(3234,"po-decimal"),t(),e(3235,`,
`),i(3236,"code"),e(3237,"po-lookup"),t(),e(3238,", "),i(3239,"code"),e(3240,"po-password"),t(),e(3241,", "),i(3242,"code"),e(3243,"po-timepicker"),t(),e(3244,"."),t()()(),i(3245,"tr",13)(3246,"td",14)(3247,"div",15)(3248,"span",16),e(3249," offsetColumns"),n(3250,"br"),t()()(),i(3251,"td",17)(3252,"code",41),e(3253,"number"),t()(),i(3254,"td",20)(3255,"em")(3256,"strong"),e(3257,"(opcional)"),t()(),i(3258,"p"),e(3259,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas."),t(),i(3260,"p"),e(3261,"Deve ser usado o sistema de "),i(3262,"strong"),e(3263,"grid"),t(),e(3264," do PO (1 ... 12 colunas)."),t(),i(3265,"blockquote")(3266,"p"),e(3267,"Esta propriedade \xE9 gen\xE9rica, aplica o valor em todos os tamanhos de telas."),t()()()(),i(3268,"tr",13)(3269,"td",14)(3270,"div",15)(3271,"span",16),e(3272," offsetLgColumns"),n(3273,"br"),t()()(),i(3274,"td",17)(3275,"code",41),e(3276,"number"),t()(),i(3277,"td",20)(3278,"em")(3279,"strong"),e(3280,"(opcional)"),t()(),i(3281,"p"),e(3282,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas grandes (lg)."),t(),i(3283,"p"),e(3284,"Deve ser usado o sistema de "),i(3285,"strong"),e(3286,"grid"),t(),e(3287," do PO (1 ... 12 colunas)."),t(),i(3288,"blockquote")(3289,"p"),e(3290,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3291,"code"),e(3292,"offsetColumns"),t(),e(3293,"."),t()()()(),i(3294,"tr",13)(3295,"td",14)(3296,"div",15)(3297,"span",16),e(3298," offsetMdColumns"),n(3299,"br"),t()()(),i(3300,"td",17)(3301,"code",41),e(3302,"number"),t()(),i(3303,"td",20)(3304,"em")(3305,"strong"),e(3306,"(opcional)"),t()(),i(3307,"p"),e(3308,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas m\xE9dias (md)."),t(),i(3309,"p"),e(3310,"Deve ser usado o sistema de "),i(3311,"strong"),e(3312,"grid"),t(),e(3313," do PO (1 ... 12 colunas)."),t(),i(3314,"blockquote")(3315,"p"),e(3316,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3317,"code"),e(3318,"offsetColumns"),t(),e(3319,"."),t()()()(),i(3320,"tr",13)(3321,"td",14)(3322,"div",15)(3323,"span",16),e(3324," offsetSmColumns"),n(3325,"br"),t()()(),i(3326,"td",17)(3327,"code",41),e(3328,"number"),t()(),i(3329,"td",20)(3330,"em")(3331,"strong"),e(3332,"(opcional)"),t()(),i(3333,"p"),e(3334,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas menores (sm)."),t(),i(3335,"p"),e(3336,"Deve ser usado o sistema de "),i(3337,"strong"),e(3338,"grid"),t(),e(3339," do PO (1 ... 12 colunas)."),t(),i(3340,"blockquote")(3341,"p"),e(3342,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3343,"code"),e(3344,"offsetColumns"),t(),e(3345,"."),t()()()(),i(3346,"tr",13)(3347,"td",14)(3348,"div",15)(3349,"span",16),e(3350," offsetXlColumns"),n(3351,"br"),t()()(),i(3352,"td",17)(3353,"code",41),e(3354,"number"),t()(),i(3355,"td",20)(3356,"em")(3357,"strong"),e(3358,"(opcional)"),t()(),i(3359,"p"),e(3360,"Tamanho do espa\xE7o de exibi\xE7\xE3o do campo em telas extra grandes (xl)."),t(),i(3361,"p"),e(3362,"Deve ser usado o sistema de "),i(3363,"strong"),e(3364,"grid"),t(),e(3365," do PO (1 ... 12 colunas)."),t(),i(3366,"blockquote")(3367,"p"),e(3368,"Esta propriedade sobrescreve o valor definido para o tamanho dela na "),i(3369,"code"),e(3370,"offsetColumns"),t(),e(3371,"."),t()()()(),i(3372,"tr",13)(3373,"td",14)(3374,"div",15)(3375,"span",16),e(3376," onError"),n(3377,"br"),t()()(),i(3378,"td",17)(3379,"code",29),e(3380,"Function"),t()(),i(3381,"td",20)(3382,"em")(3383,"strong"),e(3384,"(opcional)"),t()(),i(3385,"p"),e(3386,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),i(3387,"blockquote")(3388,"p"),e(3389,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3390,"code"),e(3391,"HttpErrorResponse"),t(),e(3392,"."),t()(),i(3393,"p")(3394,"strong"),e(3395,"Componente compat\xEDvel"),t(),e(3396,": "),i(3397,"code"),e(3398,"po-upload"),t()()()(),i(3399,"tr",13)(3400,"td",14)(3401,"div",15)(3402,"span",16),e(3403," onSuccess"),n(3404,"br"),t()()(),i(3405,"td",17)(3406,"code",29),e(3407,"Function"),t()(),i(3408,"td",20)(3409,"em")(3410,"strong"),e(3411,"(opcional)"),t()(),i(3412,"p"),e(3413,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),i(3414,"blockquote")(3415,"p"),e(3416,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),i(3417,"code"),e(3418,"HttpResponse"),t(),e(3419,"."),t()(),i(3420,"p")(3421,"strong"),e(3422,"Componente compat\xEDvel"),t(),e(3423,": "),i(3424,"code"),e(3425,"po-upload"),t()()()(),i(3426,"tr",13)(3427,"td",14)(3428,"div",15)(3429,"span",16),e(3430," onUpload"),n(3431,"br"),t()()(),i(3432,"td",17)(3433,"code",29),e(3434,"Function"),t()(),i(3435,"td",20)(3436,"em")(3437,"strong"),e(3438,"(opcional)"),t()(),i(3439,"p"),e(3440,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e a propriedade data nesta propriedade pode ser informado algum dado,
que ser\xE1 enviado em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),i(3441,"pre")(3442,"code"),e(3443,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),i(3444,"p")(3445,"strong"),e(3446,"Componente compat\xEDvel"),t(),e(3447,": "),i(3448,"code"),e(3449,"po-upload"),t()()()(),i(3450,"tr",13)(3451,"td",14)(3452,"div",15)(3453,"span",16),e(3454," optional"),n(3455,"br"),t()()(),i(3456,"td",17)(3457,"code",28),e(3458,"boolean"),t()(),i(3459,"td",20)(3460,"em")(3461,"strong"),e(3462,"(opcional)"),t()(),i(3463,"p"),e(3464,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),i(3465,"blockquote")(3466,"p"),e(3467,"A indica\xE7\xE3o n\xE3o ser\xE1 exibida, se:"),t()(),i(3468,"ul")(3469,"li"),e(3470,"O campo for "),i(3471,"code"),e(3472,"required"),t(),e(3473,", ou;"),t(),i(3474,"li"),e(3475,"N\xE3o possuir "),i(3476,"code"),e(3477,"help"),t(),e(3478," e "),i(3479,"code"),e(3480,"label"),t(),e(3481,"."),t()(),i(3482,"p")(3483,"strong"),e(3484,"Componentes compat\xEDveis:"),t(),i(3485,"code"),e(3486,"po-datepicker"),t(),e(3487,", "),i(3488,"code"),e(3489,"po-datepicker-range"),t(),e(3490,", "),i(3491,"code"),e(3492,"po-timepicker"),t(),e(3493,", "),i(3494,"code"),e(3495,"po-input"),t(),e(3496,", "),i(3497,"code"),e(3498,"po-number"),t(),e(3499,`,
`),i(3500,"code"),e(3501,"po-decimal"),t(),e(3502,", "),i(3503,"code"),e(3504,"po-select"),t(),e(3505,", "),i(3506,"code"),e(3507,"po-radio-group"),t(),e(3508,", "),i(3509,"code"),e(3510,"po-combo"),t(),e(3511,", "),i(3512,"code"),e(3513,"po-lookup"),t(),e(3514,", "),i(3515,"code"),e(3516,"po-checkbox-group"),t(),e(3517,", "),i(3518,"code"),e(3519,"po-multiselect"),t(),e(3520,`,
`),i(3521,"code"),e(3522,"po-textarea"),t(),e(3523,", "),i(3524,"code"),e(3525,"po-password"),t(),e(3526,"."),t()()(),i(3527,"tr",13)(3528,"td",14)(3529,"div",15)(3530,"span",16),e(3531," options"),n(3532,"br"),t()()(),i(3533,"td",17)(3534,"code",32),e(3535,"Array<string> "),t(),i(3536,"code",69),e(3537," Array<PoSelectOption> "),t(),i(3538,"code",70),e(3539," Array<PoMultiselectOption> "),t(),i(3540,"code",71),e(3541," Array<PoCheckboxGroupOption> "),t(),i(3542,"code",72),e(3543," Array<any>"),t()(),i(3544,"td",20)(3545,"em")(3546,"strong"),e(3547,"(opcional)"),t()(),i(3548,"p"),e(3549,"Lista de op\xE7\xF5es que ser\xE3o exibidos em um componente, podendo selecionar uma op\xE7\xE3o."),t(),i(3550,"p")(3551,"strong"),e(3552,"Componentes compat\xEDveis:"),t(),i(3553,"code"),e(3554,"po-select"),t(),e(3555,", "),i(3556,"code"),e(3557,"po-radio-group"),t(),e(3558,", "),i(3559,"code"),e(3560,"po-checkbox-group"),t(),e(3561,", "),i(3562,"code"),e(3563,"po-multiselect"),t(),e(3564,"."),t()()(),i(3565,"tr",13)(3566,"td",14)(3567,"div",15)(3568,"span",16),e(3569," optionsMulti"),n(3570,"br"),t()()(),i(3571,"td",17)(3572,"code",28),e(3573,"boolean"),t()(),i(3574,"td",20)(3575,"em")(3576,"strong"),e(3577,"(opcional)"),t()(),i(3578,"p"),e(3579,"Permite que o usu\xE1rio fa\xE7a m\xFAltipla sele\xE7\xE3o dentro da lista de op\xE7\xF5es."),t()()(),i(3580,"tr",13)(3581,"td",14)(3582,"div",15)(3583,"span",16),e(3584," optionsService"),n(3585,"br"),t()()(),i(3586,"td",17)(3587,"code",18),e(3588,"string "),t(),i(3589,"code",73),e(3590," PoComboFilter "),t(),i(3591,"code",74),e(3592," PoMultiselectFilter"),t()(),i(3593,"td",20)(3594,"em")(3595,"strong"),e(3596,"(opcional)"),t()(),i(3597,"p"),e(3598,"Servi\xE7o que ser\xE1 utilizado para buscar os itens e preencher a lista de op\xE7\xF5es dinamicamente. Pode ser informada uma URL ou uma instancia do servi\xE7o baseado em PoComboFilter. "),i(3599,"strong"),e(3600,"Importante"),t()(),i(3601,"blockquote")(3602,"p"),e(3603,"Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o "),i(3604,"a",75),e(3605,"guia de API do PO UI"),t(),e(3606,"."),t()()()(),i(3607,"tr",13)(3608,"td",14)(3609,"div",15)(3610,"span",16),e(3611," order"),n(3612,"br"),t()()(),i(3613,"td",17)(3614,"code",41),e(3615,"number"),t()(),i(3616,"td",20)(3617,"em")(3618,"strong"),e(3619,"(opcional)"),t()(),i(3620,"p"),e(3621,"Informa a ordem de exibi\xE7\xE3o do campo."),t(),i(3622,"p"),e(3623,"Exemplo de utiliza\xE7\xE3o:"),t(),i(3624,"p")(3625,"code"),e(3626,"[ { property: 'test 1', order: 2 }, { property: 'test 2', order: 1 }, { property: 'test 3' }, { property: 'test 4', order: 3 } ];"),t()(),i(3627,"p"),e(3628,`Na exibi\xE7\xE3o a ordem ficar\xE1 dessa forma:
`),i(3629,"code"),e(3630,"[ { property: 'test 2', order: 1 }, { property: 'test 1', order: 2 }, { property: 'test 4', order: 3 }, { property: 'test 3' } ];"),t()(),i(3631,"p"),e(3632,"S\xF3 ser\xE3o aceitos valores com n\xFAmeros inteiros maiores do que zero."),t(),i(3633,"p"),e(3634,"Campos sem "),i(3635,"code"),e(3636,"order"),t(),e(3637,` ou com valores negativos, zerados ou inv\xE1lidos
ser\xE3o os \xFAltimos a serem renderizados e seguir\xE3o o posicionamento dentro do
array.`),t()()(),i(3638,"tr",13)(3639,"td",14)(3640,"div",15)(3641,"span",16),e(3642," params"),n(3643,"br"),t()()(),i(3644,"td",17)(3645,"code",33),e(3646,"any"),t()(),i(3647,"td",20)(3648,"em")(3649,"strong"),e(3650,"(opcional)"),t()(),i(3651,"p"),e(3652,"Objeto que ser\xE1 enviado como par\xE2metro nas requisi\xE7\xF5es de busca usados pelos componentes "),i(3653,"code"),e(3654,"po-lookup"),t(),e(3655,` e
`),i(3656,"code"),e(3657,"po-combo"),t(),e(3658,"."),t(),i(3659,"p"),e(3660,"Por exemplo, para o par\xE2metro "),i(3661,"code"),e(3662,"{ age: 23 }"),t(),e(3663," a URL da requisi\xE7\xE3o ficaria:"),t(),i(3664,"p")(3665,"code"),e(3666,"url + ?age=23&filter=Peter"),t()()()(),i(3667,"tr",13)(3668,"td",14)(3669,"div",15)(3670,"span",16),e(3671," pattern"),n(3672,"br"),t()()(),i(3673,"td",17)(3674,"code",18),e(3675,"string"),t()(),i(3676,"td",20)(3677,"em")(3678,"strong"),e(3679,"(opcional)"),t()(),i(3680,"p"),e(3681,"Regex para valida\xE7\xE3o do campo."),t(),i(3682,"p")(3683,"strong"),e(3684,"Componentes compat\xEDveis:"),t(),i(3685,"code"),e(3686,"po-input"),t(),e(3687,", "),i(3688,"code"),e(3689,"po-password"),t(),e(3690,"."),t()()(),i(3691,"tr",13)(3692,"td",14)(3693,"div",15)(3694,"span",16),e(3695," placeholder"),n(3696,"br"),t()()(),i(3697,"td",17)(3698,"code",18),e(3699,"string"),t()(),i(3700,"td",20)(3701,"em")(3702,"strong"),e(3703,"(opcional)"),t()(),i(3704,"p"),e(3705,"Mensagem que ser\xE1 exibida enquanto o campo n\xE3o estiver preenchido."),t(),i(3706,"p")(3707,"strong"),e(3708,"Componentes compat\xEDveis:"),t(),i(3709,"code"),e(3710,"po-datepicker"),t(),e(3711,", "),i(3712,"code"),e(3713,"po-datepicker-range"),t(),e(3714,", "),i(3715,"code"),e(3716,"po-timepicker"),t(),e(3717,", "),i(3718,"code"),e(3719,"po-input"),t(),e(3720,", "),i(3721,"code"),e(3722,"po-number"),t(),e(3723,", "),i(3724,"code"),e(3725,"po-decimal"),t(),e(3726,", "),i(3727,"code"),e(3728,"po-select"),t(),e(3729,", "),i(3730,"code"),e(3731,"po-combo"),t(),e(3732,", "),i(3733,"code"),e(3734,"po-lookup"),t(),e(3735,", "),i(3736,"code"),e(3737,"po-multiselect"),t(),e(3738,", "),i(3739,"code"),e(3740,"po-textarea"),t(),e(3741,", "),i(3742,"code"),e(3743,"po-password"),t(),e(3744,"."),t()()(),i(3745,"tr",13)(3746,"td",14)(3747,"div",15)(3748,"span",16),e(3749," placeholderSearch"),n(3750,"br"),t()()(),i(3751,"td",17)(3752,"code",18),e(3753,"string"),t()(),i(3754,"td",20)(3755,"em")(3756,"strong"),e(3757,"(opcional)"),t()(),i(3758,"p"),e(3759,"Placeholder do campo de pesquisa do "),i(3760,"code"),e(3761,"po-multiselect"),t(),e(3762,"."),t(),i(3763,"blockquote")(3764,"p"),e(3765,"Caso o mesmo n\xE3o seja informado, o valor padr\xE3o ser\xE1 traduzido com base no idioma do navegador (pt, es e en)."),t()()()(),i(3766,"tr",13)(3767,"td",14)(3768,"div",15)(3769,"span",16),e(3770," property"),n(3771,"br"),t()()(),i(3772,"td",17)(3773,"code",18),e(3774,"string"),t()(),i(3775,"td",20)(3776,"p"),e(3777,"Nome de refer\xEAncia do campo."),t()()(),i(3778,"tr",13)(3779,"td",14)(3780,"div",15)(3781,"span",16),e(3782," range"),n(3783,"br"),t()()(),i(3784,"td",17)(3785,"code",28),e(3786,"boolean"),t()(),i(3787,"td",20)(3788,"em")(3789,"strong"),e(3790,"(opcional)"),t()(),i(3791,"p"),e(3792,"O controle passa a permitir a entrada de um intervalo ao inv\xE9s de um \xFAnico valor."),t(),i(3793,"blockquote")(3794,"p"),e(3795,"Atualmente essa propriedade est\xE1 dispon\xEDvel apenas para o tipo 'date' e 'dateTime'."),t()()()(),i(3796,"tr",13)(3797,"td",14)(3798,"div",15)(3799,"span",16),e(3800," rangePresetOptions"),n(3801,"br"),t()()(),i(3802,"td",17)(3803,"code",76),e(3804,"Array<PoCalendarRangePreset>"),t()(),i(3805,"td",20)(3806,"em")(3807,"strong"),e(3808,"(opcional)"),t()(),i(3809,"p"),e(3810,"Lista de presets customizados de intervalos de data exibidos no painel lateral do calend\xE1rio."),t(),i(3811,"p"),e(3812,"Para utilizar presets customizados, informe um array de objetos que implementam a interface "),i(3813,"code"),e(3814,"PoCalendarRangePreset"),t(),e(3815,"."),t(),i(3816,"p")(3817,"strong"),e(3818,"Componente compat\xEDvel:"),t(),i(3819,"code"),e(3820,"po-datepicker-range"),t()()()(),i(3821,"tr",13)(3822,"td",14)(3823,"div",15)(3824,"span",16),e(3825," rangePresets"),n(3826,"br"),t()()(),i(3827,"td",17)(3828,"code",28),e(3829,"boolean "),t(),i(3830,"code",32),e(3831," Array<string>"),t()(),i(3832,"td",20)(3833,"em")(3834,"strong"),e(3835,"(opcional)"),t()(),i(3836,"p"),e(3837,"Habilita a exibi\xE7\xE3o dos presets padr\xE3o de intervalos de data no painel lateral do calend\xE1rio."),t(),i(3838,"p"),e(3839,"Aceita os seguintes valores:"),t(),i(3840,"ul")(3841,"li")(3842,"code"),e(3843,"true"),t(),e(3844,": exibe todos os presets padr\xE3o."),t(),i(3845,"li")(3846,"code"),e(3847,"false"),t(),e(3848,": n\xE3o exibe os presets padr\xE3o."),t(),i(3849,"li")(3850,"code"),e(3851,"Array<string>"),t(),e(3852,": exibe apenas os presets padr\xE3o cujos labels estejam no array informado."),t()(),i(3853,"p")(3854,"strong"),e(3855,"Componente compat\xEDvel:"),t(),i(3856,"code"),e(3857,"po-datepicker-range"),t()()()(),i(3858,"tr",13)(3859,"td",14)(3860,"div",15)(3861,"span",16),e(3862," rangePresetsOrder"),n(3863,"br"),t()()(),i(3864,"td",17)(3865,"code",77),e(3866,"'asc' "),t(),i(3867,"code",78),e(3868," 'desc'"),t()(),i(3869,"td",20)(3870,"em")(3871,"strong"),e(3872,"(opcional)"),t()(),i(3873,"p"),e(3874,"Define a ordena\xE7\xE3o dos presets na lista."),t(),i(3875,"p"),e(3876,"Valores aceitos:"),t(),i(3877,"ul")(3878,"li")(3879,"code"),e(3880,"'asc'"),t(),e(3881,": ordena\xE7\xE3o crescente (passado \u2192 futuro)"),t(),i(3882,"li")(3883,"code"),e(3884,"'desc'"),t(),e(3885,": ordena\xE7\xE3o decrescente (futuro \u2192 passado)"),t()(),i(3886,"p")(3887,"strong"),e(3888,"Componente compat\xEDvel:"),t(),i(3889,"code"),e(3890,"po-datepicker-range"),t()()()(),i(3891,"tr",13)(3892,"td",14)(3893,"div",15)(3894,"span",16),e(3895," readonly"),n(3896,"br"),t()()(),i(3897,"td",17)(3898,"code",28),e(3899,"boolean"),t()(),i(3900,"td",20)(3901,"em")(3902,"strong"),e(3903,"(opcional)"),t()(),i(3904,"p"),e(3905,"Indica que o campo ser\xE1 somente leitura."),t(),i(3906,"p")(3907,"strong"),e(3908,"Componentes compat\xEDveis:"),t(),i(3909,"code"),e(3910,"po-datepicker"),t(),e(3911,", "),i(3912,"code"),e(3913,"po-datepicker-range"),t(),e(3914,", "),i(3915,"code"),e(3916,"po-timepicker"),t(),e(3917,", "),i(3918,"code"),e(3919,"po-input"),t(),e(3920,", "),i(3921,"code"),e(3922,"po-number"),t(),e(3923,`,
`),i(3924,"code"),e(3925,"po-decimal"),t(),e(3926,", "),i(3927,"code"),e(3928,"po-select"),t(),e(3929,", "),i(3930,"code"),e(3931,"po-textarea"),t(),e(3932,", "),i(3933,"code"),e(3934,"po-password"),t(),e(3935,"."),t()()(),i(3936,"tr",13)(3937,"td",14)(3938,"div",15)(3939,"span",16),e(3940," removeInitialFilter"),n(3941,"br"),t()()(),i(3942,"td",17)(3943,"code",28),e(3944,"boolean"),t()(),i(3945,"td",20)(3946,"em")(3947,"strong"),e(3948,"(opcional)"),t()(),i(3949,"p"),e(3950,"Define que o filtro no primeiro clique ser\xE1 removido."),t(),i(3951,"blockquote")(3952,"p"),e(3953,`Caso o combo tenha um valor padr\xE3o de inicializa\xE7\xE3o, o primeiro clique
no componente retornar\xE1 todos os itens da lista e n\xE3o apenas o item inicialiazado.`),t()(),i(3954,"p")(3955,"strong"),e(3956,"Componente compat\xEDvel"),t(),e(3957,": "),i(3958,"code"),e(3959,"po-combo"),t()()()(),i(3960,"tr",13)(3961,"td",14)(3962,"div",15)(3963,"span",16),e(3964," required"),n(3965,"br"),t()()(),i(3966,"td",17)(3967,"code",28),e(3968,"boolean"),t()(),i(3969,"td",20)(3970,"em")(3971,"strong"),e(3972,"(opcional)"),t()(),i(3973,"p"),e(3974,"Define a obrigatoriedade do campo."),t(),i(3975,"p")(3976,"strong"),e(3977,"Componentes compat\xEDveis:"),t(),i(3978,"code"),e(3979,"po-datepicker"),t(),e(3980,", "),i(3981,"code"),e(3982,"po-datepicker-range"),t(),e(3983,", "),i(3984,"code"),e(3985,"po-timepicker"),t(),e(3986,", "),i(3987,"code"),e(3988,"po-input"),t(),e(3989,", "),i(3990,"code"),e(3991,"po-number"),t(),e(3992,`,
`),i(3993,"code"),e(3994,"po-decimal"),t(),e(3995,", "),i(3996,"code"),e(3997,"po-select"),t(),e(3998,", "),i(3999,"code"),e(4e3,"po-radio-group"),t(),e(4001,", "),i(4002,"code"),e(4003,"po-combo"),t(),e(4004,", "),i(4005,"code"),e(4006,"po-lookup"),t(),e(4007,", "),i(4008,"code"),e(4009,"po-checkbox-group"),t(),e(4010,", "),i(4011,"code"),e(4012,"po-multiselect"),t(),e(4013,`,
`),i(4014,"code"),e(4015,"po-textarea"),t(),e(4016,", "),i(4017,"code"),e(4018,"po-password``, "),t(),e(4019,"po-upload`."),t()()(),i(4020,"tr",13)(4021,"td",14)(4022,"div",15)(4023,"span",16),e(4024," requiredFieldErrorMessage"),n(4025,"br"),t()()(),i(4026,"td",17)(4027,"code",28),e(4028,"boolean"),t()(),i(4029,"td",20)(4030,"em")(4031,"strong"),e(4032,"(opcional)"),t()(),i(4033,"p"),e(4034,"Exibe a mensagem setada na propriedade "),i(4035,"code"),e(4036,"errorMessage"),t(),e(4037," se o campo estiver vazio e for requerido."),t(),i(4038,"blockquote")(4039,"p"),e(4040,"Necess\xE1rio que a propriedade "),i(4041,"code"),e(4042,"required"),t(),e(4043," esteja habilitada."),t()(),i(4044,"p")(4045,"strong"),e(4046,"Componentes compat\xEDveis:"),t(),i(4047,"code"),e(4048,"po-datepicker"),t(),e(4049,", "),i(4050,"code"),e(4051,"po-timepicker"),t(),e(4052,", "),i(4053,"code"),e(4054,"po-input"),t(),e(4055,", "),i(4056,"code"),e(4057,"po-number"),t(),e(4058,", "),i(4059,"code"),e(4060,"po-decimal"),t(),e(4061,", "),i(4062,"code"),e(4063,"po-password"),t(),e(4064,"."),t()()(),i(4065,"tr",13)(4066,"td",14)(4067,"div",15)(4068,"span",16),e(4069," restrictions"),n(4070,"br"),t()()(),i(4071,"td",17)(4072,"code",79),e(4073,"PoUploadFileRestrictions"),t()(),i(4074,"td",20)(4075,"em")(4076,"strong"),e(4077,"(opcional)"),t()(),i(4078,"p"),e(4079,"Objeto que segue a defini\xE7\xE3o da interface "),i(4080,"code"),e(4081,"PoUploadFileRestrictions"),t(),e(4082,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t(),i(4083,"p")(4084,"strong"),e(4085,"Componente compat\xEDvel"),t(),e(4086,": "),i(4087,"code"),e(4088,"po-upload"),t()()()(),i(4089,"tr",13)(4090,"td",14)(4091,"div",15)(4092,"span",16),e(4093," rows"),n(4094,"br"),t()()(),i(4095,"td",17)(4096,"code",41),e(4097,"number"),t()(),i(4098,"td",20)(4099,"em")(4100,"strong"),e(4101,"(opcional)"),t()(),i(4102,"p"),e(4103,"Quantidade de linhas exibidas no "),i(4104,"code"),e(4105,"po-textarea"),t(),e(4106,"."),t()()(),i(4107,"tr",13)(4108,"td",14)(4109,"div",15)(4110,"span",16),e(4111," searchService"),n(4112,"br"),t()()(),i(4113,"td",17)(4114,"code",18),e(4115,"string "),t(),i(4116,"code",80),e(4117," PoLookupFilter"),t()(),i(4118,"td",20)(4119,"em")(4120,"strong"),e(4121,"(opcional)"),t()(),i(4122,"p"),e(4123,"Servi\xE7o que ser\xE1 utilizado para realizar a busca avan\xE7ada. Pode ser utilizado em conjunto com a propriedade "),i(4124,"code"),e(4125,"columns"),t(),e(4126,`.
Pode ser ser informada uma URL ou uma instancia do servi\xE7o baseado em PoLookupFilter.
`),i(4127,"strong"),e(4128,"Importante:"),t()(),i(4129,"blockquote")(4130,"p"),e(4131,"Caso utilizar a propriedade "),i(4132,"code"),e(4133,"optionsService"),t(),e(4134,` esta propriedade ser\xE1 ignorada.
Para que funcione corretamente, \xE9 importante que o servi\xE7o siga o
`),i(4135,"a",75),e(4136,"guia de API do PO UI"),t(),e(4137,"."),t()()()(),i(4138,"tr",13)(4139,"td",14)(4140,"div",15)(4141,"span",16),e(4142," secondInterval"),n(4143,"br"),t()()(),i(4144,"td",17)(4145,"code",41),e(4146,"number"),t()(),i(4147,"td",20)(4148,"em")(4149,"strong"),e(4150,"(opcional)"),t()(),i(4151,"p"),e(4152,"Define o intervalo entre os segundos exibidos no painel do timepicker."),t()()(),i(4153,"tr",13)(4154,"td",14)(4155,"div",15)(4156,"span",16),e(4157," secret"),n(4158,"br"),t()()(),i(4159,"td",17)(4160,"code",28),e(4161,"boolean"),t()(),i(4162,"td",20)(4163,"em")(4164,"strong"),e(4165,"(opcional)"),t()(),i(4166,"p"),e(4167,"Esconde a informa\xE7\xE3o estilo "),i(4168,"em"),e(4169,"password"),t(),e(4170,", pode ser utilizado quando o tipo de dado for "),i(4171,"em"),e(4172,"string"),t(),e(4173,"."),t()()(),i(4174,"tr",13)(4175,"td",14)(4176,"div",15)(4177,"span",16),e(4178," showRequired"),n(4179,"br"),t()()(),i(4180,"td",17)(4181,"code",28),e(4182,"boolean"),t()(),i(4183,"td",20)(4184,"em")(4185,"strong"),e(4186,"(opcional)"),t()(),i(4187,"p"),e(4188,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),i(4189,"blockquote")(4190,"p"),e(4191,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),i(4192,"ul")(4193,"li"),e(4194,"N\xE3o possuir "),i(4195,"code"),e(4196,"p-help"),t(),e(4197," e/ou "),i(4198,"code"),e(4199,"p-label"),t(),e(4200,"."),t()(),i(4201,"p")(4202,"strong"),e(4203,"Componentes compat\xEDveis:"),t(),i(4204,"code"),e(4205,"po-datepicker"),t(),e(4206,", "),i(4207,"code"),e(4208,"po-datepicker-range"),t(),e(4209,", "),i(4210,"code"),e(4211,"po-timepicker"),t(),e(4212,", "),i(4213,"code"),e(4214,"po-input"),t(),e(4215,", "),i(4216,"code"),e(4217,"po-number"),t(),e(4218,`,
`),i(4219,"code"),e(4220,"po-decimal"),t(),e(4221,", "),i(4222,"code"),e(4223,"po-select"),t(),e(4224,", "),i(4225,"code"),e(4226,"po-radio-group"),t(),e(4227,", "),i(4228,"code"),e(4229,"po-combo"),t(),e(4230,", "),i(4231,"code"),e(4232,"po-lookup"),t(),e(4233,", "),i(4234,"code"),e(4235,"po-checkbox-group"),t(),e(4236,", "),i(4237,"code"),e(4238,"po-multiselect"),t(),e(4239,`,
`),i(4240,"code"),e(4241,"po-textarea"),t(),e(4242,", "),i(4243,"code"),e(4244,"po-password"),t(),e(4245,", "),i(4246,"code"),e(4247,"po-upload"),t(),e(4248,"."),t()()(),i(4249,"tr",13)(4250,"td",14)(4251,"div",15)(4252,"span",16),e(4253," showSeconds"),n(4254,"br"),t()()(),i(4255,"td",17)(4256,"code",28),e(4257,"boolean"),t()(),i(4258,"td",20)(4259,"em")(4260,"strong"),e(4261,"(opcional)"),t()(),i(4262,"p"),e(4263,"Exibe a coluna de segundos no painel do timepicker."),t()()(),i(4264,"tr",13)(4265,"td",14)(4266,"div",15)(4267,"span",16),e(4268," showThumbnail"),n(4269,"br"),t()()(),i(4270,"td",17)(4271,"code",28),e(4272,"boolean"),t()(),i(4273,"td",20)(4274,"em")(4275,"strong"),e(4276,"(opcional)"),t()(),i(4277,"p"),e(4278,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),i(4279,"blockquote")(4280,"p"),e(4281,"Propriedade funciona apenas em arquivos de formato de imagem ("),i(4282,"code"),e(4283,".png"),t(),e(4284,", "),i(4285,"code"),e(4286,".jpg"),t(),e(4287,", "),i(4288,"code"),e(4289,".jpeg"),t(),e(4290," e "),i(4291,"code"),e(4292,".gif"),t(),e(4293,")."),t()(),i(4294,"p")(4295,"strong"),e(4296,"Componente compat\xEDvel"),t(),e(4297,": "),i(4298,"code"),e(4299,"po-upload"),t()()()(),i(4300,"tr",13)(4301,"td",14)(4302,"div",15)(4303,"span",16),e(4304," size"),n(4305,"br"),t()()(),i(4306,"td",17)(4307,"code",18),e(4308,"string"),t()(),i(4309,"td",20)(4310,"em")(4311,"strong"),e(4312,"(opcional)"),t()(),i(4313,"p"),e(4314,"Define o tamanho dos componentes de formul\xE1rio no template conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4315,"ul")(4316,"li")(4317,"code"),e(4318,"small"),t(),e(4319,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4320,"li")(4321,"code"),e(4322,"medium"),t(),e(4323,": aplica a medida medium de cada componente."),t(),i(4324,"li")(4325,"code"),e(4326,"large"),t(),e(4327,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4328,"code"),e(4329,"po-checkbox"),t(),e(4330," e "),i(4331,"code"),e(4332,"po-radio-group"),t(),e(4333,")."),i(4334,"blockquote")(4335,"p"),e(4336,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4337,"code"),e(4338,"medium"),t(),e(4339,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4340,"a",21),e(4341,"po-theme"),t(),e(4342,"."),t()()()()()(),i(4343,"tr",13)(4344,"td",14)(4345,"div",15)(4346,"span",16),e(4347," sort"),n(4348,"br"),t()()(),i(4349,"td",17)(4350,"code",28),e(4351,"boolean"),t()(),i(4352,"td",20)(4353,"em")(4354,"strong"),e(4355,"(opcional)"),t()(),i(4356,"p"),e(4357,"Indica que a lista definida na propriedade p-options ser\xE1 ordenada pela descri\xE7\xE3o."),t(),i(4358,"p")(4359,"strong"),e(4360,"Componentes compat\xEDveis:"),t(),i(4361,"code"),e(4362,"po-combo"),t(),e(4363,", po-multiselect"),t()()(),i(4364,"tr",13)(4365,"td",14)(4366,"div",15)(4367,"span",16),e(4368," step"),n(4369,"br"),t()()(),i(4370,"td",17)(4371,"code",41),e(4372,"number"),t()(),i(4373,"td",20)(4374,"em")(4375,"strong"),e(4376,"(opcional)"),t()(),i(4377,"p"),e(4378,"Intervalo utilizado no "),i(4379,"code"),e(4380,"po-number"),t(),e(4381,"."),t()()(),i(4382,"tr",13)(4383,"td",14)(4384,"div",15)(4385,"span",16),e(4386," thousandMaxlength"),n(4387,"br"),t()()(),i(4388,"td",17)(4389,"code",41),e(4390,"number"),t()(),i(4391,"td",20)(4392,"em")(4393,"strong"),e(4394,"(opcional)"),t()(),i(4395,"p"),e(4396,"Quantidade m\xE1xima de d\xEDgitos antes do separador decimal. O valor m\xE1ximo permitido \xE9 13"),t(),i(4397,"blockquote")(4398,"p"),e(4399,"Esta propriedade s\xF3 pode ser utilizada quando o "),i(4400,"code"),e(4401,"type"),t(),e(4402," for "),i(4403,"em"),e(4404,"currency"),t(),e(4405," ou "),i(4406,"em"),e(4407,"decimal"),t(),e(4408,"."),t()()()(),i(4409,"tr",13)(4410,"td",14)(4411,"div",15)(4412,"span",16),e(4413," type"),n(4414,"br"),t()()(),i(4415,"td",17)(4416,"code",18),e(4417,"string "),t(),i(4418,"code",81),e(4419," PoDynamicFieldType"),t()(),i(4420,"td",20)(4421,"em")(4422,"strong"),e(4423,"(opcional)"),t()(),i(4424,"p"),e(4425,"Tipo do valor campo."),t(),i(4426,"p"),e(4427,"Valores v\xE1lidos:"),t(),i(4428,"ul")(4429,"li")(4430,"code"),e(4431,"boolean"),t(),e(4432,": Valores "),i(4433,"em"),e(4434,"booleanos"),t(),e(4435,"."),t(),i(4436,"li")(4437,"code"),e(4438,"currency"),t(),e(4439,": Valores monet\xE1rios."),t(),i(4440,"li")(4441,"code"),e(4442,"decimal"),t(),e(4443,": Valores decimais."),t(),i(4444,"li")(4445,"code"),e(4446,"date"),t(),e(4447,": Valores de datas."),i(4448,"ul")(4449,"li"),e(4450,"Aceita os tipos "),i(4451,"strong"),e(4452,"string"),t(),e(4453," e "),i(4454,"strong"),e(4455,"Date"),t(),e(4456,` padr\xE3o do Javascript,
por exemplo: `),i(4457,"code"),e(4458,"'2017-11-28'"),t(),e(4459," ou "),i(4460,"code"),e(4461,"new Date(2017, 10, 28)"),t(),e(4462,"."),t()()(),i(4463,"li")(4464,"code"),e(4465,"dateTime"),t(),e(4466,": Valor de data com hor\xE1rio."),i(4467,"ul")(4468,"li"),e(4469,"Aceita o tipo "),i(4470,"em"),e(4471,"string"),t(),e(4472," no formato "),i(4473,"strong"),e(4474,"ISO-8601"),t(),e(4475," extendido "),i(4476,"strong"),e(4477,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4478,`
e o tipo `),i(4479,"strong"),e(4480,"Date"),t(),e(4481," padr\xE3o do Javascript, por exemplo: "),i(4482,"code"),e(4483,"'2017-11-28T00:00:00-02:00'"),t(),e(4484," ou "),i(4485,"code"),e(4486,"new Date(2017, 10, 28)"),t(),e(4487,"."),t()()(),i(4488,"li")(4489,"code"),e(4490,"number"),t(),e(4491,": Valores num\xE9ricos."),t(),i(4492,"li")(4493,"code"),e(4494,"string"),t(),e(4495,": Textos."),t(),i(4496,"li")(4497,"code"),e(4498,"time"),t(),e(4499,": Valor do hor\xE1rio."),i(4500,"ul")(4501,"li"),e(4502,"Aceita o tipo "),i(4503,"strong"),e(4504,"string"),t(),e(4505," nos formatos "),i(4506,"strong"),e(4507,"'HH:mm:ss'"),t(),e(4508," ou "),i(4509,"strong"),e(4510,"'HH:mm:ss.ffffff'"),t(),e(4511,", por exemplo: "),i(4512,"code"),e(4513,"'23:12:45'"),t(),e(4514,"."),t()()()()()(),i(4515,"tr",13)(4516,"td",14)(4517,"div",15)(4518,"span",16),e(4519," url"),n(4520,"br"),t()()(),i(4521,"td",17)(4522,"code",18),e(4523,"string"),t()(),i(4524,"td",20)(4525,"em")(4526,"strong"),e(4527,"(opcional)"),t()(),i(4528,"p"),e(4529,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t(),i(4530,"p")(4531,"strong"),e(4532,"Componente compat\xEDvel"),t(),e(4533,": "),i(4534,"code"),e(4535,"po-upload"),t()()()(),i(4536,"tr",13)(4537,"td",14)(4538,"div",15)(4539,"span",16),e(4540," validate"),n(4541,"br"),t()()(),i(4542,"td",17)(4543,"code",18),e(4544,"string "),t(),i(4545,"code",29),e(4546," Function"),t()(),i(4547,"td",20)(4548,"em")(4549,"strong"),e(4550,"(opcional)"),t()(),i(4551,"p"),e(4552,"Fun\xE7\xE3o ou servi\xE7o para validar as "),i(4553,"strong"),e(4554,"mudan\xE7as do campo"),t(),e(4555,"."),t(),i(4556,"ul")(4557,"li"),e(4558,"A propriedade aceita os seguintes tipos:"),t()(),i(4559,"ul")(4560,"li")(4561,"strong"),e(4562,"String"),t(),e(4563,": Endpoint usado pelo componente para requisi\xE7\xE3o via "),i(4564,"code"),e(4565,"POST"),t(),e(4566,"."),t(),i(4567,"li")(4568,"strong"),e(4569,"Function"),t(),e(4570,": M\xE9todo que ser\xE1 executado."),t()(),i(4571,"p"),e(4572,`Ao ser executado, ir\xE1 receber como par\xE2metro um objeto com o nome da propriedade
alterada e o novo valor, conforme a interface `),i(4573,"code"),e(4574,"PoDynamicFormFieldChanged"),t(),e(4575,":"),t(),i(4576,"p")(4577,"code"),e(4578,"{ property: 'property name', value: 'new value' }"),t()(),i(4579,"p"),e(4580,"O retorno desta fun\xE7\xE3o deve ser do tipo "),i(4581,"a",82),e(4582,"PoDynamicFormFieldValidation"),t(),e(4583,`,
onde o usu\xE1rio poder\xE1 determinar as novas propriedades do campo.
Por exemplo:`),t(),i(4584,"pre")(4585,"code"),e(4586,`onChangeField(changeValue): PoDynamicFormFieldValidation {

if (changeValue.property === 'birthday' && !this.validate('birthday')) {
  return {
    value: '',
    field: { property: 'birthday', required: true },
    focus: true
  };
}
`),t()(),i(4587,"p"),e(4588,"Para referenciar a sua fun\xE7\xE3o utilize a propriedade "),i(4589,"code"),e(4590,"bind"),t(),e(4591,`, por exemplo:
`),i(4592,"code"),e(4593,"{ property: 'state', gridColumns: 6, validate: this.myFunction.bind(this) }"),t()()()(),i(4594,"tr",13)(4595,"td",14)(4596,"div",15)(4597,"span",16),e(4598," visible"),n(4599,"br"),t()()(),i(4600,"td",17)(4601,"code",28),e(4602,"boolean"),t()(),i(4603,"td",20)(4604,"em")(4605,"strong"),e(4606,"(opcional)"),t()(),i(4607,"p"),e(4608,"Indica se o campo ser\xE1 vis\xEDvel."),t()()(),i(4609,"tr",13)(4610,"td",14)(4611,"div",15)(4612,"span",16),e(4613," yearRangeLimit"),n(4614,"br"),t()()(),i(4615,"td",17)(4616,"code",41),e(4617,"number"),t()(),i(4618,"td",20)(4619,"em")(4620,"strong"),e(4621,"(opcional)"),t()(),i(4622,"p"),e(4623,"Define o limite de anos exibidos na lista de anos do "),i(4624,"code"),e(4625,"po-datepicker"),t(),e(4626," nos modos "),i(4627,"code"),e(4628,"month-year"),t(),e(4629," e "),i(4630,"code"),e(4631,"year"),t(),e(4632,"."),t()()()(),i(4633,"h4",38)(4634,"code",5),e(4635,"PoDynamicFormLoad"),t()(),i(4636,"div",2)(4637,"p"),n(4638,"a",83),t(),i(4639,"p"),e(4640,"Estrutura de retorno no carregamento do formul\xE1rio."),t()(),i(4641,"h4",9),e(4642,"Propriedades"),t(),i(4643,"table",10)(4644,"tr",11)(4645,"th",12),e(4646,"Nome"),t(),i(4647,"th",12),e(4648,"Tipo"),t(),i(4649,"th",12),e(4650,"Descri\xE7\xE3o"),t()(),i(4651,"tr",13)(4652,"td",14)(4653,"div",15)(4654,"span",16),e(4655," fields"),n(4656,"br"),t()()(),i(4657,"td",17)(4658,"code",22),e(4659,"Array<PoDynamicFormField>"),t()(),i(4660,"td",20)(4661,"em")(4662,"strong"),e(4663,"(opcional)"),t()(),i(4664,"p"),e(4665,"Lista com as novas defini\xE7\xF5es dos campos."),t(),i(4666,"blockquote")(4667,"p"),e(4668,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que precisam ser alteradas ou adicionadas."),t()()()(),i(4669,"tr",13)(4670,"td",14)(4671,"div",15)(4672,"span",16),e(4673," focus"),n(4674,"br"),t()()(),i(4675,"td",17)(4676,"code",18),e(4677,"string"),t()(),i(4678,"td",20)(4679,"em")(4680,"strong"),e(4681,"(opcional)"),t()(),i(4682,"p"),e(4683,"Nome do campo que receber\xE1 o foco."),t(),i(4684,"p"),e(4685,"Exemplo:"),t(),i(4686,"pre")(4687,"code"),e(4688,`focus: 'name'
`),t()()()(),i(4689,"tr",13)(4690,"td",14)(4691,"div",15)(4692,"span",16),e(4693," value"),n(4694,"br"),t()()(),i(4695,"td",17)(4696,"code",33),e(4697,"any"),t()(),i(4698,"td",20)(4699,"em")(4700,"strong"),e(4701,"(opcional)"),t()(),i(4702,"p"),e(4703,"Objeto contendo os novos valores."),t(),i(4704,"p"),e(4705,"Exemplo:"),t(),i(4706,"pre")(4707,"code"),e(4708,`{
  name: 'new name',
  age: 10
}
`),t()(),i(4709,"blockquote")(4710,"p"),e(4711,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),i(4712,"h4",38)(4713,"code",5),e(4714,"PoDynamicFormFieldChanged"),t()(),i(4715,"div",2)(4716,"p"),e(4717,"Estrutura dos valores que ser\xE3o disparados quando houver uma mudan\xE7a em um campo ou no formul\xE1rio."),t()(),i(4718,"h4",9),e(4719,"Propriedades"),t(),i(4720,"table",10)(4721,"tr",11)(4722,"th",12),e(4723,"Nome"),t(),i(4724,"th",12),e(4725,"Tipo"),t(),i(4726,"th",12),e(4727,"Descri\xE7\xE3o"),t()(),i(4728,"tr",13)(4729,"td",14)(4730,"div",15)(4731,"span",16),e(4732," property"),n(4733,"br"),t()()(),i(4734,"td",17)(4735,"code",18),e(4736,"string"),t()(),i(4737,"td",20)(4738,"p"),e(4739,"Valor da propriedade do campo."),t()()(),i(4740,"tr",13)(4741,"td",14)(4742,"div",15)(4743,"span",16),e(4744," value"),n(4745,"br"),t()()(),i(4746,"td",17)(4747,"code",33),e(4748,"any"),t()(),i(4749,"td",20)(4750,"p"),e(4751,"Novo valor do campo."),t()()()(),i(4752,"h4",38)(4753,"code",5),e(4754,"PoDynamicFormFieldValidation"),t()(),i(4755,"div",2)(4756,"p"),n(4757,"a",84),t(),i(4758,"p"),e(4759,"Estrutura de retorno da valida\xE7\xE3o de um campo."),t()(),i(4760,"h4",9),e(4761,"Propriedades"),t(),i(4762,"table",10)(4763,"tr",11)(4764,"th",12),e(4765,"Nome"),t(),i(4766,"th",12),e(4767,"Tipo"),t(),i(4768,"th",12),e(4769,"Descri\xE7\xE3o"),t()(),i(4770,"tr",13)(4771,"td",14)(4772,"div",15)(4773,"span",16),e(4774," field"),n(4775,"br"),t()()(),i(4776,"td",17)(4777,"code",85),e(4778,"PoDynamicFormField"),t()(),i(4779,"td",20)(4780,"em")(4781,"strong"),e(4782,"(opcional)"),t()(),i(4783,"p"),e(4784,"Novas defini\xE7\xF5es das propriedades do campo."),t(),i(4785,"blockquote")(4786,"p"),e(4787,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades, apenas as que foram alteradas."),t()()()(),i(4788,"tr",13)(4789,"td",14)(4790,"div",15)(4791,"span",16),e(4792," focus"),n(4793,"br"),t()()(),i(4794,"td",17)(4795,"code",28),e(4796,"boolean"),t()(),i(4797,"td",20)(4798,"em")(4799,"strong"),e(4800,"(opcional)"),t()(),i(4801,"p"),e(4802,"Coloca o foco no campo ap\xF3s a valida\xE7\xE3o."),t()()(),i(4803,"tr",13)(4804,"td",14)(4805,"div",15)(4806,"span",16),e(4807," value"),n(4808,"br"),t()()(),i(4809,"td",17)(4810,"code",33),e(4811,"any"),t()(),i(4812,"td",20)(4813,"em")(4814,"strong"),e(4815,"(opcional)"),t()(),i(4816,"p"),e(4817,"Novo valor do campo"),t()()()(),i(4818,"h4",38)(4819,"code",5),e(4820,"PoDynamicFormValidation"),t()(),i(4821,"div",2)(4822,"p"),n(4823,"a",86),t(),i(4824,"p"),e(4825,"Estrutura de retorno da valida\xE7\xE3o do formul\xE1rio."),t()(),i(4826,"h4",9),e(4827,"Propriedades"),t(),i(4828,"table",10)(4829,"tr",11)(4830,"th",12),e(4831,"Nome"),t(),i(4832,"th",12),e(4833,"Tipo"),t(),i(4834,"th",12),e(4835,"Descri\xE7\xE3o"),t()(),i(4836,"tr",13)(4837,"td",14)(4838,"div",15)(4839,"span",16),e(4840," fields"),n(4841,"br"),t()()(),i(4842,"td",17)(4843,"code",22),e(4844,"Array<PoDynamicFormField>"),t()(),i(4845,"td",20)(4846,"em")(4847,"strong"),e(4848,"(opcional)"),t()(),i(4849,"p"),e(4850,"Lista com as novas defini\xE7\xF5es dos campos."),t(),i(4851,"blockquote")(4852,"p"),e(4853,"N\xE3o \xE9 necess\xE1rio colocar todas as propriedades e campos, apenas as que foram alteradas."),t()()()(),i(4854,"tr",13)(4855,"td",14)(4856,"div",15)(4857,"span",16),e(4858," focus"),n(4859,"br"),t()()(),i(4860,"td",17)(4861,"code",18),e(4862,"string"),t()(),i(4863,"td",20)(4864,"em")(4865,"strong"),e(4866,"(opcional)"),t()(),i(4867,"p"),e(4868,"Nome do campo que receber\xE1 o foco."),t(),i(4869,"p"),e(4870,"Exemplo:"),t(),i(4871,"pre")(4872,"code"),e(4873,`focus: 'name'
`),t()()()(),i(4874,"tr",13)(4875,"td",14)(4876,"div",15)(4877,"span",16),e(4878," value"),n(4879,"br"),t()()(),i(4880,"td",17)(4881,"code",33),e(4882,"any"),t()(),i(4883,"td",20)(4884,"em")(4885,"strong"),e(4886,"(opcional)"),t()(),i(4887,"p"),e(4888,"Objeto contendo os novos valores."),t(),i(4889,"p"),e(4890,"Exemplo:"),t(),i(4891,"pre")(4892,"code"),e(4893,`{
  name: 'new name',
  age: 10
}
`),t()(),i(4894,"blockquote")(4895,"p"),e(4896,"N\xE3o \xE9 necess\xE1rio colocar os valores de todos os campos, apenas os que foram alterados."),t()()()()(),i(4897,"h4",38)(4898,"code",5),e(4899,"ErrorAsyncProperties"),t()(),i(4900,"div",2)(4901,"p"),e(4902,"Interface para realizar uma valida\xE7\xE3o ass\xEDncrona no componente."),t()(),i(4903,"h4",9),e(4904,"Propriedades"),t(),i(4905,"table",10)(4906,"tr",11)(4907,"th",12),e(4908,"Nome"),t(),i(4909,"th",12),e(4910,"Tipo"),t(),i(4911,"th",12),e(4912,"Descri\xE7\xE3o"),t()(),i(4913,"tr",13)(4914,"td",14)(4915,"div",15)(4916,"span",16),e(4917," errorAsync"),n(4918,"br"),t()()(),i(4919,"td",17)(4920,"code",46),e(4921,"(value) => Observable<boolean>"),t()(),i(4922,"td",20)(4923,"p"),e(4924,`Fun\xE7\xE3o obrigat\xF3ria executada para realizar a valida\xE7\xE3o ass\xEDncrona personalizada.
Executada ao disparar o output `),i(4925,"code"),e(4926,"change"),t(),e(4927," ou "),i(4928,"code"),e(4929,"change-model"),t(),e(4930,", dependendo do valor da propriedade "),i(4931,"code"),e(4932,"triggerMode"),t(),e(4933,"."),t()()(),i(4934,"tr",13)(4935,"td",14)(4936,"div",15)(4937,"span",16),e(4938," triggerMode"),n(4939,"br"),t()()(),i(4940,"td",17)(4941,"code",87),e(4942,"'change' "),t(),i(4943,"code",88),e(4944," 'changeModel'"),t()(),i(4945,"td",20)(4946,"em")(4947,"strong"),e(4948,"(opcional)"),t()(),i(4949,"p"),e(4950,"Controla se o m\xE9todo ser\xE1 executado no disparo do output "),i(4951,"code"),e(4952,"change"),t(),e(4953," ou "),i(4954,"code"),e(4955,"change-model"),t(),e(4956,"."),t()()()(),i(4957,"h3"),e(4958,"Enums"),t(),i(4959,"h4",4)(4960,"code",5),e(4961,"ForceBooleanComponentEnum"),t()(),i(4962,"div",2)(4963,"p"),e(4964,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),i(4965,"h4",9),e(4966,"Propriedades"),t(),i(4967,"table",10)(4968,"tr",11)(4969,"th",12),e(4970,"Nome"),t(),i(4971,"th",12),e(4972,"Descri\xE7\xE3o"),t()(),i(4973,"tr",13)(4974,"td",14)(4975,"div",15)(4976,"span",16),e(4977," switch"),n(4978,"br"),t()()(),i(4979,"td",20)(4980,"p"),e(4981,"For\xE7a a renderiza\xE7\xE3o de um po-switch"),t()()(),i(4982,"tr",13)(4983,"td",14)(4984,"div",15)(4985,"span",16),e(4986," checkbox"),n(4987,"br"),t()()(),i(4988,"td",20)(4989,"p"),e(4990,"For\xE7a a renderiza\xE7\xE3o de um po-checkbox"),t()()()(),i(4991,"h4",4)(4992,"code",5),e(4993,"ForceOptionComponentEnum"),t()(),i(4994,"div",2)(4995,"p"),e(4996,"Enum para defini\xE7\xE3o do tipo de componente a ser renderizado."),t()(),i(4997,"h4",9),e(4998,"Propriedades"),t(),i(4999,"table",10)(5e3,"tr",11)(5001,"th",12),e(5002,"Nome"),t(),i(5003,"th",12),e(5004,"Descri\xE7\xE3o"),t()(),i(5005,"tr",13)(5006,"td",14)(5007,"div",15)(5008,"span",16),e(5009," radioGroup"),n(5010,"br"),t()()(),i(5011,"td",20)(5012,"p"),e(5013,"For\xE7a a renderiza\xE7\xE3o de um po-radio-group independente da quantidade do op\xE7\xF5es"),t()()(),i(5014,"tr",13)(5015,"td",14)(5016,"div",15)(5017,"span",16),e(5018," select"),n(5019,"br"),t()()(),i(5020,"td",20)(5021,"p"),e(5022,"For\xE7a a renderiza\xE7\xE3o de um po-select independente da quantidade do op\xE7\xF5es"),t()()()(),i(5023,"h4",4)(5024,"code",5),e(5025,"PoDynamicFieldType"),t()(),i(5026,"div",2)(5027,"p"),e(5028,"Enum para defini\xE7\xE3o do tipo de campo que ser\xE1 criado dinamicamente."),t()(),i(5029,"h4",9),e(5030,"Propriedades"),t(),i(5031,"table",10)(5032,"tr",11)(5033,"th",12),e(5034,"Nome"),t(),i(5035,"th",12),e(5036,"Descri\xE7\xE3o"),t()(),i(5037,"tr",13)(5038,"td",14)(5039,"div",15)(5040,"span",16),e(5041," Boolean"),n(5042,"br"),t()()(),i(5043,"td",20)(5044,"p"),e(5045,"Valor booleano."),t()()(),i(5046,"tr",13)(5047,"td",14)(5048,"div",15)(5049,"span",16),e(5050," Currency"),n(5051,"br"),t()()(),i(5052,"td",20)(5053,"p"),e(5054,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),i(5055,"tr",13)(5056,"td",14)(5057,"div",15)(5058,"span",16),e(5059," Decimal"),n(5060,"br"),t()()(),i(5061,"td",20)(5062,"p"),e(5063,"Valor num\xE9rico que cont\xE9m casas decimais e milhar."),t()()(),i(5064,"tr",13)(5065,"td",14)(5066,"div",15)(5067,"span",16),e(5068," Date"),n(5069,"br"),t()()(),i(5070,"td",20)(5071,"p"),e(5072,"Valor para data."),t()()(),i(5073,"tr",13)(5074,"td",14)(5075,"div",15)(5076,"span",16),e(5077," DateTime"),n(5078,"br"),t()()(),i(5079,"td",20)(5080,"p"),e(5081,"Valor para data e hora."),t()()(),i(5082,"tr",13)(5083,"td",14)(5084,"div",15)(5085,"span",16),e(5086," Time"),n(5087,"br"),t()()(),i(5088,"td",20)(5089,"p"),e(5090,"Utilizado para informar/exibir hora."),t()()(),i(5091,"tr",13)(5092,"td",14)(5093,"div",15)(5094,"span",16),e(5095," Number"),n(5096,"br"),t()()(),i(5097,"td",20)(5098,"p"),e(5099,"Valor num\xE9rico."),t()()(),i(5100,"tr",13)(5101,"td",14)(5102,"div",15)(5103,"span",16),e(5104," String"),n(5105,"br"),t()()(),i(5106,"td",20)(5107,"p"),e(5108,"Texto."),t()()(),i(5109,"tr",13)(5110,"td",14)(5111,"div",15)(5112,"span",16),e(5113," Upload"),n(5114,"br"),t()()(),i(5115,"td",20)(5116,"p"),e(5117,"Utilizado para fazer uploads de arquivos."),t()()()(),i(5118,"h4",4)(5119,"code",5),e(5120,"PoTimepickerModelFormat"),t()(),i(5121,"div",2)(5122,"p")(5123,"em"),e(5124,"Enum"),t(),e(5125," que define o padr\xE3o de formata\xE7\xE3o do model de sa\xEDda do timepicker."),t()(),i(5126,"h4",9),e(5127,"Propriedades"),t(),i(5128,"table",10)(5129,"tr",11)(5130,"th",12),e(5131,"Nome"),t(),i(5132,"th",12),e(5133,"Descri\xE7\xE3o"),t()(),i(5134,"tr",13)(5135,"td",14)(5136,"div",15)(5137,"span",16),e(5138," HourMinute"),n(5139,"br"),t()()(),i(5140,"td",20)(5141,"p"),e(5142,"Formato b\xE1sico "),i(5143,"code"),e(5144,"HH:mm"),t(),e(5145," (ex: "),i(5146,"code"),e(5147,"14:30"),t(),e(5148,")."),t()()(),i(5149,"tr",13)(5150,"td",14)(5151,"div",15)(5152,"span",16),e(5153," HourMinuteSecond"),n(5154,"br"),t()()(),i(5155,"td",20)(5156,"p"),e(5157,"Formato com segundos "),i(5158,"code"),e(5159,"HH:mm:ss"),t(),e(5160," (ex: "),i(5161,"code"),e(5162,"14:30:00"),t(),e(5163,")."),t()()()()())},dependencies:[b],encapsulation:2})}return o})();var ae=(()=>{class o{route;router;sub;hidePoWebSample=!0;samplesLength=3;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(m,a){this.route=m,this.router=a}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(m=>{let a=m.view;this.activeTab=a||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(m){this.router.navigate([],{queryParams:{view:m},queryParamsHandling:"merge"}),this.activeTab=m}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(a){return new(a||o)(B(J),B(W))};static \u0275cmp=s({type:o,selectors:[["ng-component"]],standalone:!1,decls:8,vars:4,consts:[["p-title","Dynamic Form",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(a,r){a&1&&(i(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return r.changeTab("doc")}),n(3,"sample-po-dynamic-form-doc"),t(),i(4,"po-tab",3),c("p-click",function(){return r.changeTab("web")}),n(5,"sample-po-dynamic-form-basic-view")(6,"sample-po-dynamic-form-register-view")(7,"sample-po-dynamic-form-container-view"),t()()()),a&2&&(p("p-actions",r.actions),d(2),p("p-active",r.activeTab==="doc"),d(2),p("p-hide",r.hidePoWebSample)("p-active",r.activeTab==="web"))},dependencies:[Y,x,S,$,te,ne,oe],encapsulation:2})}return o})();var fe=[{path:"",component:ae}],re=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[H.forChild(fe),H]})}return o})();var ot=(()=>{class o{static \u0275fac=function(a){return new(a||o)};static \u0275mod=T({type:o});static \u0275inj=P({imports:[Q,re]})}return o})();export{ot as DocPoDynamicFormModule};
