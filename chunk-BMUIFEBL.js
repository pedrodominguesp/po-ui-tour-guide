import{o as y,p as _e}from"./chunk-AT3MKFJ3.js";import{Cb as Ce,Eb as we,Gb as w,Hb as _,Ja as B,Lb as $,Ra as ge,S as ce,U as Ee,Ua as T,Va as he,Xa as ve,Ya as X,_ as Se,a as se,ab as Z,c as ue,tb as fe,w as j,ya as be,za as xe}from"./chunk-GCMU57WK.js";import{Ea as u,Fa as n,Ga as t,Ha as o,I as W,L as H,Mb as C,Mc as L,Nc as z,O as E,Oa as q,Oc as R,P as S,Pa as c,Pc as V,Qc as O,Ra as N,Tc as le,Uc as re,Va as K,Wa as D,Xa as U,Xc as de,_a as A,_b as ae,ab as ne,bb as P,cb as e,cd as pe,eb as F,ed as me,gb as x,gd as te,ha as p,hb as g,ib as h,ma as ee,oa as b,pa as Q,qb as Y,rb as v,xb as ie,ya as G,yb as oe,za as J}from"./chunk-XD3NZLB4.js";import"./chunk-GAL4ENT6.js";var ye=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-basic"]],standalone:!1,decls:1,vars:0,consts:[["name","upload","p-label","PO Upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile"]],template:function(r,i){r&1&&o(0,"po-upload",0)},dependencies:[T],encapsulation:2})}return a})();var Ne=a=>({"docs-sample-code-tabs":a}),Pe=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Basic"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-basic/sample-po-upload-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-upload name="upload" p-label="PO Upload" p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"> </po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-basic/sample-po-upload-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-upload-basic',
  templateUrl: 'sample-po-upload-basic.component.html',
  standalone: false
})
export class SamplePoUploadBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-basic"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),F(" ",i.sampleCodeButtonLabel),p(),u("ngClass",v(4,Ne,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,ye],encapsulation:2})}return a})();function He(a,Be){if(a&1&&(n(0,"div")(1,"po-widget",22)(2,"form",23),o(3,"po-input",24)(4,"po-select",25)(5,"po-select",26)(6,"po-switch",27)(7,"po-switch",28),t()()()),a&2){let d=N();p(2),u("formGroup",d.actionForm),p(2),u("p-options",d.iconOptions),p(),u("p-options",d.typeOptions)}}var Te=(()=>{class a{fb=H(de);helperText;allowedExtensions;customLiterals;dragDropHeight;event;formField;help;label;literals;modalActions;maxFiles;maxSize;minSize;properties;restrictions;upload;url;headers;headersLabs;action;customModalActions;actionForm;size;propertiesOptions=[{value:"autoupload",label:"Automatic upload"},{value:"directory",label:"Directory"},{value:"disabled",label:"Disabled"},{value:"disabledRemoveFile",label:"Disabled Remove File"},{value:"dragDrop",label:"Drag Drop"},{value:"requiredUrl",label:"required Url"},{value:"multiple",label:"Multiple upload"},{value:"optional",label:"Optional"},{value:"required",label:"Required"},{value:"showRequired",label:"Show Required"},{value:"restrictionsInfo",label:"Hide Restrictions Info"},{value:"selectButton",label:"Hide Select Files Button"},{value:"sendButton",label:"Hide Send Files Button"},{value:"showCustomAction",label:"Add Custom Action to Progress"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"compactLabel",label:"Compact Label"},{value:"showThumbnail",label:"Show Thumbnail"},{value:"loading",label:"Loading"}];sizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];typeOptions=[{label:"Danger",value:"danger"},{label:"Default",value:"default"}];iconOptions=[{value:"an an-download",label:"an an-download"},{value:"an an-Server",label:"an an-Server"},{value:"an an-upload",label:"an an-upload"},{value:"an an-share",label:"an an-share"}];constructor(){this.initializeActionForm()}initializeActionForm(){this.actionForm=this.fb.group({label:[""],icon:[""],type:["default"],visible:[!0],disabled:[!1]})}ngOnInit(){this.restore(),this.actionForm.valueChanges.subscribe(d=>{this.updateAction(d)})}updateAction(d){this.action=d}changeEvent(d){this.event=d}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(d){this.customLiterals=void 0}}changeModalActions(){try{this.customModalActions=JSON.parse(this.modalActions)}catch(d){this.customModalActions=void 0}}onChangeHeaders(d){try{this.headers=JSON.parse(d)}catch(r){this.headers=void 0}}onChangeExtension(){let d=this.allowedExtensions.split(",").map(r=>r.trim());this.restrictions=Object.assign({},this.restrictions,{allowedExtensions:d})}onChangeMaxFiles(d){this.restrictions=Object.assign({},this.restrictions,{maxFiles:d})}onChangeMaxSize(d){this.restrictions=Object.assign({},this.restrictions,{maxFileSize:this.getValueInBytes(d)})}onChangeMinSize(d){this.restrictions=Object.assign({},this.restrictions,{minFileSize:this.getValueInBytes(d)})}restore(){this.helperText="",this.allowedExtensions=void 0,this.customLiterals=void 0,this.dragDropHeight=void 0,this.event=void 0,this.formField=void 0,this.label=void 0,this.help=void 0,this.literals="",this.modalActions="",this.maxFiles=void 0,this.maxSize=void 0,this.minSize=void 0,this.properties=[],this.restrictions={},this.upload=void 0,this.url="https://po-sample-api.onrender.com/v1/uploads/addFile",this.headers=void 0,this.headersLabs=void 0,this.actionForm.reset({type:"default",visible:!0}),this.action={label:"",type:"default"},this.customModalActions=[],this.size="medium"}getValueInBytes(d){return 1048576*d}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-labs"]],standalone:!1,decls:29,vars:53,consts:[["fRestrictions","ngForm"],["name","upload",3,"ngModelChange","p-custom-action-click","p-error","p-keydown","p-success","p-upload","p-open-modal-preview","p-remove","ngModel","p-helper","p-auto-upload","p-directory","p-disabled","p-required-url","p-disabled-remove-file","p-drag-drop","p-drag-drop-height","p-form-field","p-help","p-hide-select-button","p-hide-restrictions-info","p-hide-send-button","p-label","p-literals","p-loading","p-multiple","p-optional","p-required","p-show-required","p-show-thumbnail","p-restrictions","p-size","p-url","p-headers","p-custom-action","p-label-text-wrap","p-compact-label","p-custom-modal-actions"],[1,"po-row"],["p-label","Model",1,"po-md-6",3,"p-value"],["p-label","Event",1,"po-md-6",3,"p-value"],["name","allowedExtensions","p-help","Digite as extens\xF5es permitidas separadas por v\xEDrgula","p-label","Allowed Extensions","p-placeholder",".png, .jpeg, .jpg",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","maxFiles","p-clean","","p-help","Requer p-multiple habilitado","p-label","Max Files",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","dragDropHeight","p-clean","","p-help","Altura da \xE1rea de arrastar e soltar","p-label","Drag Drop Height","p-min","160",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","minSize","p-clean","","p-help","Em megabytes","p-label","Min File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","maxSize","p-clean","","p-help","Em megabytes","p-label","Max File Size",1,"po-md-6","po-lg-3",3,"ngModelChange","p-change","ngModel"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","formField","p-clean","","p-label","Form Field",1,"po-md-6",3,"ngModelChange","ngModel"],["name","url","p-clean","","p-label","URL","p-required","",1,"po-md-12","po-lg-6",3,"ngModelChange","ngModel"],["name","headers","p-help",'Ex.: {"Authorization": "12312414"}',"p-label","Headers",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","literals","p-help",'Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","customModalActions","p-help",'Ex.: [{"label": "Label", "disabled": false}]',"p-label","Custom Modal Actions",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel","p-disabled"],["name","properties","p-columns","4","p-help","Select any options","p-label","Properties",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],[1,"po-row","po-mt-1"],["p-label","Sample Restore",1,"po-lg-3","po-md-6",3,"p-click"],["p-title","Action Button"],[1,"po-row",3,"formGroup"],["formControlName","label","p-label","Label",1,"po-md-6","po-lg-4"],["formControlName","icon","p-label","Icon",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","type","p-label","Type",1,"po-md-6","po-lg-3",3,"p-options"],["formControlName","disabled","p-label","Disabled",1,"po-md-3","po-lg-2"],["formControlName","visible","p-label","Visible",1,"po-md-3","po-lg-2"]],template:function(r,i){if(r&1){let m=q();n(0,"po-upload",1),h("ngModelChange",function(l){return E(m),g(i.upload,l)||(i.upload=l),S(l)}),c("p-custom-action-click",function(){return i.changeEvent("p-custom-action-click")})("p-error",function(){return i.changeEvent("p-error")})("p-keydown",function(){return i.changeEvent("p-keydown")})("p-success",function(){return i.changeEvent("p-success")})("p-upload",function(){return i.changeEvent("p-upload")})("p-upload",function(){return i.changeEvent("p-upload")})("p-open-modal-preview",function(){return i.changeEvent("p-open-modal-preview")})("p-remove",function(){return i.changeEvent("p-remove")}),t(),o(1,"po-divider"),n(2,"div",2),o(3,"po-info",3),ie(4,"json"),o(5,"po-info",4),t(),o(6,"po-divider"),n(7,"div",2)(8,"form",null,0)(10,"po-input",5),h("ngModelChange",function(l){return E(m),g(i.allowedExtensions,l)||(i.allowedExtensions=l),S(l)}),c("p-change",function(){return i.onChangeExtension()}),t(),n(11,"po-number",6),h("ngModelChange",function(l){return E(m),g(i.maxFiles,l)||(i.maxFiles=l),S(l)}),c("p-change",function(){return i.onChangeMaxFiles(i.maxFiles)}),t(),n(12,"po-number",7),h("ngModelChange",function(l){return E(m),g(i.dragDropHeight,l)||(i.dragDropHeight=l),S(l)}),t(),n(13,"po-number",8),h("ngModelChange",function(l){return E(m),g(i.minSize,l)||(i.minSize=l),S(l)}),c("p-change",function(){return i.onChangeMinSize(i.minSize)}),t(),n(14,"po-number",9),h("ngModelChange",function(l){return E(m),g(i.maxSize,l)||(i.maxSize=l),S(l)}),c("p-change",function(){return i.onChangeMaxSize(i.maxSize)}),t(),o(15,"po-divider"),n(16,"po-input",10),h("ngModelChange",function(l){return E(m),g(i.label,l)||(i.label=l),S(l)}),t(),n(17,"po-input",11),h("ngModelChange",function(l){return E(m),g(i.help,l)||(i.help=l),S(l)}),t(),n(18,"po-input",12),h("ngModelChange",function(l){return E(m),g(i.helperText,l)||(i.helperText=l),S(l)}),t(),n(19,"po-input",13),h("ngModelChange",function(l){return E(m),g(i.formField,l)||(i.formField=l),S(l)}),t(),n(20,"po-input",14),h("ngModelChange",function(l){return E(m),g(i.url,l)||(i.url=l),S(l)}),t(),n(21,"po-input",15),h("ngModelChange",function(l){return E(m),g(i.headersLabs,l)||(i.headersLabs=l),S(l)}),c("p-change",function(l){return i.onChangeHeaders(l)}),t(),n(22,"po-input",16),h("ngModelChange",function(l){return E(m),g(i.literals,l)||(i.literals=l),S(l)}),c("p-change",function(){return i.changeLiterals()}),t(),n(23,"po-input",17),h("ngModelChange",function(l){return E(m),g(i.modalActions,l)||(i.modalActions=l),S(l)}),c("p-change",function(){return i.changeModalActions()}),t(),n(24,"po-checkbox-group",18),h("ngModelChange",function(l){return E(m),g(i.properties,l)||(i.properties=l),S(l)}),t(),G(25,He,8,3,"div"),n(26,"po-radio-group",19),h("ngModelChange",function(l){return E(m),g(i.size,l)||(i.size=l),S(l)}),t(),n(27,"div",20)(28,"po-button",21),c("p-click",function(){return i.restore()}),t()()()()}r&2&&(x("ngModel",i.upload),u("p-helper",i.helperText)("p-auto-upload",i.properties.includes("autoupload"))("p-directory",i.properties.includes("directory"))("p-disabled",i.properties.includes("disabled"))("p-required-url",i.properties.includes("requiredUrl"))("p-disabled-remove-file",i.properties.includes("disabledRemoveFile"))("p-drag-drop",i.properties.includes("dragDrop"))("p-drag-drop-height",i.dragDropHeight)("p-form-field",i.formField)("p-help",i.help)("p-hide-select-button",i.properties.includes("selectButton"))("p-hide-restrictions-info",i.properties.includes("restrictionsInfo"))("p-hide-send-button",i.properties.includes("sendButton"))("p-label",i.label)("p-literals",i.customLiterals)("p-loading",i.properties.includes("loading"))("p-multiple",i.properties.includes("multiple"))("p-optional",i.properties.includes("optional"))("p-required",i.properties.includes("required"))("p-show-required",i.properties.includes("showRequired"))("p-show-thumbnail",i.properties.includes("showThumbnail"))("p-restrictions",i.restrictions)("p-size",i.size)("p-url",i.url)("p-headers",i.headers)("p-custom-action",i.action)("p-label-text-wrap",i.properties==null?null:i.properties.includes("labelTextWrap"))("p-compact-label",i.properties==null?null:i.properties.includes("compactLabel"))("p-custom-modal-actions",i.customModalActions),p(3),u("p-value",oe(4,51,i.upload)),p(2),u("p-value",i.event),p(5),x("ngModel",i.allowedExtensions),p(),x("ngModel",i.maxFiles),p(),x("ngModel",i.dragDropHeight),p(),x("ngModel",i.minSize),p(),x("ngModel",i.maxSize),p(2),x("ngModel",i.label),p(),x("ngModel",i.help),p(),x("ngModel",i.helperText),p(),x("ngModel",i.formField),p(),x("ngModel",i.url),p(),x("ngModel",i.headersLabs),p(),x("ngModel",i.literals),p(),x("ngModel",i.modalActions),u("p-disabled",!i.properties.includes("showThumbnail")),p(),x("ngModel",i.properties),u("p-options",i.propertiesOptions),p(),J(i.properties.includes("showCustomAction")?25:-1),p(),x("ngModel",i.size),u("p-options",i.sizeOptions))},dependencies:[O,L,z,V,R,re,le,j,se,ce,Ee,B,ge,ve,T,be,Z,$,ae],encapsulation:2})}return a})();var Ge=a=>({"docs-sample-code-tabs":a}),Me=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload Labs"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-labs/sample-po-upload-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  [(ngModel)]="upload"
  [p-helper]="helperText"
  [p-auto-upload]="properties.includes('autoupload')"
  [p-directory]="properties.includes('directory')"
  [p-disabled]="properties.includes('disabled')"
  [p-required-url]="properties.includes('requiredUrl')"
  [p-disabled-remove-file]="properties.includes('disabledRemoveFile')"
  [p-drag-drop]="properties.includes('dragDrop')"
  [p-drag-drop-height]="dragDropHeight"
  [p-form-field]="formField"
  [p-help]="help"
  [p-hide-select-button]="properties.includes('selectButton')"
  [p-hide-restrictions-info]="properties.includes('restrictionsInfo')"
  [p-hide-send-button]="properties.includes('sendButton')"
  [p-label]="label"
  [p-literals]="customLiterals"
  [p-loading]="properties.includes('loading')"
  [p-multiple]="properties.includes('multiple')"
  [p-optional]="properties.includes('optional')"
  [p-required]="properties.includes('required')"
  [p-show-required]="properties.includes('showRequired')"
  [p-show-thumbnail]="properties.includes('showThumbnail')"
  [p-restrictions]="restrictions"
  [p-size]="size"
  [p-url]="url"
  [p-headers]="headers"
  [p-custom-action]="action"
  [p-label-text-wrap]="properties?.includes('labelTextWrap')"
  [p-compact-label]="properties?.includes('compactLabel')"
  [p-custom-modal-actions]="customModalActions"
  (p-custom-action-click)="changeEvent('p-custom-action-click')"
  (p-error)="changeEvent('p-error')"
  (p-keydown)="changeEvent('p-keydown')"
  (p-success)="changeEvent('p-success')"
  (p-upload)="changeEvent('p-upload')"
  (p-upload)="changeEvent('p-upload')"
  (p-open-modal-preview)="changeEvent('p-open-modal-preview')"
  (p-remove)="changeEvent('p-remove')"
>
</po-upload>

<po-divider />

<div class="po-row">
  <po-info class="po-md-6" p-label="Model" [p-value]="upload | json"> </po-info>

  <po-info class="po-md-6" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider />

<div class="po-row">
  <form #fRestrictions="ngForm">
    <po-input
      class="po-md-6"
      name="allowedExtensions"
      [(ngModel)]="allowedExtensions"
      p-help="Digite as extens\xF5es permitidas separadas por v\xEDrgula"
      p-label="Allowed Extensions"
      p-placeholder=".png, .jpeg, .jpg"
      (p-change)="onChangeExtension()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxFiles"
      [(ngModel)]="maxFiles"
      p-clean
      p-help="Requer p-multiple habilitado"
      p-label="Max Files"
      (p-change)="onChangeMaxFiles(maxFiles)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="dragDropHeight"
      [(ngModel)]="dragDropHeight"
      p-clean
      p-help="Altura da \xE1rea de arrastar e soltar"
      p-label="Drag Drop Height"
      p-min="160"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="minSize"
      [(ngModel)]="minSize"
      p-clean
      p-help="Em megabytes"
      p-label="Min File Size"
      (p-change)="onChangeMinSize(minSize)"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxSize"
      [(ngModel)]="maxSize"
      p-clean
      p-help="Em megabytes"
      p-label="Max File Size"
      (p-change)="onChangeMaxSize(maxSize)"
    >
    </po-number>

    <po-divider />

    <po-input class="po-md-6" name="label" [(ngModel)]="label" p-clean p-label="Label"> </po-input>

    <po-input class="po-md-6" name="help" [(ngModel)]="help" p-clean p-label="Help"> </po-input>

    <po-input class="po-md-6" name="helperText" [(ngModel)]="helperText" p-clean p-label="Additional Help"> </po-input>

    <po-input class="po-md-6" name="formField" [(ngModel)]="formField" p-clean p-label="Form Field"> </po-input>

    <po-input class="po-md-12 po-lg-6" name="url" [(ngModel)]="url" p-clean p-label="URL" p-required> </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="headers"
      [(ngModel)]="headersLabs"
      p-help='Ex.: {"Authorization": "12312414"}'
      p-label="Headers"
      (p-change)="onChangeHeaders($event)"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"selectFile": "Select file", "deleteFile": "Delete file", "cancel": "Cancel sending"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-12 po-lg-6"
      name="customModalActions"
      [(ngModel)]="modalActions"
      [p-disabled]="!properties.includes('showThumbnail')"
      p-help='Ex.: [{"label": "Label", "disabled": false}]'
      p-label="Custom Modal Actions"
      (p-change)="changeModalActions()"
    >
    </po-input>

    <po-checkbox-group
      class="po-md-12"
      name="properties"
      [(ngModel)]="properties"
      p-columns="4"
      p-help="Select any options"
      p-label="Properties"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>

    @if (properties.includes('showCustomAction')) {
      <div>
        <po-widget p-title="Action Button">
          <form [formGroup]="actionForm" class="po-row">
            <po-input class="po-md-6 po-lg-4" formControlName="label" p-label="Label" />
            <po-select class="po-md-6 po-lg-3" formControlName="icon" p-label="Icon" [p-options]="iconOptions" />
            <po-select class="po-md-6 po-lg-3" formControlName="type" p-label="Type" [p-options]="typeOptions" />
            <po-switch class="po-md-3 po-lg-2" formControlName="disabled" p-label="Disabled" />
            <po-switch class="po-md-3 po-lg-2" formControlName="visible" p-label="Visible" />
          </form>
        </po-widget>
      </div>
    }

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

    <div class="po-row po-mt-1">
      <po-button class="po-lg-3 po-md-6" p-label="Sample Restore" (p-click)="restore()"> </po-button>
    </div>
  </form>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-labs/sample-po-upload-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {
  PoCheckboxGroupOption,
  PoProgressAction,
  PoSelectOption,
  PoRadioGroupOption,
  PoUploadFileRestrictions,
  PoUploadLiterals,
  PoModalAction
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-labs',
  templateUrl: './sample-po-upload-labs.component.html',
  standalone: false
})
export class SamplePoUploadLabsComponent implements OnInit {
  private fb = inject(FormBuilder);

  helperText: string;
  allowedExtensions: string;
  customLiterals: PoUploadLiterals;
  dragDropHeight: number;
  event: string;
  formField: string;
  help: string;
  label: string;
  literals: string;
  modalActions: string;
  maxFiles: number;
  maxSize: number;
  minSize: number;
  properties: Array<string>;
  restrictions: PoUploadFileRestrictions;
  upload: Array<any>;
  url: string;
  headers: { [name: string]: string | Array<string> };
  headersLabs: string;
  action: PoProgressAction;
  customModalActions: Array<PoModalAction>;
  actionForm: FormGroup;
  size: string;

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoupload', label: 'Automatic upload' },
    { value: 'directory', label: 'Directory' },
    { value: 'disabled', label: 'Disabled' },
    { value: 'disabledRemoveFile', label: 'Disabled Remove File' },
    { value: 'dragDrop', label: 'Drag Drop' },
    { value: 'requiredUrl', label: 'required Url' },
    { value: 'multiple', label: 'Multiple upload' },
    { value: 'optional', label: 'Optional' },
    { value: 'required', label: 'Required' },
    { value: 'showRequired', label: 'Show Required' },
    { value: 'restrictionsInfo', label: 'Hide Restrictions Info' },
    { value: 'selectButton', label: 'Hide Select Files Button' },
    { value: 'sendButton', label: 'Hide Send Files Button' },
    { value: 'showCustomAction', label: 'Add Custom Action to Progress' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'compactLabel', label: 'Compact Label' },
    { value: 'showThumbnail', label: 'Show Thumbnail' },
    { value: 'loading', label: 'Loading' }
  ];

  public readonly sizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Danger', value: 'danger' },
    { label: 'Default', value: 'default' }
  ];

  public readonly iconOptions: Array<PoSelectOption> = [
    { value: 'an an-download', label: 'an an-download' },
    { value: 'an an-Server', label: 'an an-Server' },
    { value: 'an an-upload', label: 'an an-upload' },
    { value: 'an an-share', label: 'an an-share' }
  ];

  constructor() {
    this.initializeActionForm();
  }

  initializeActionForm() {
    this.actionForm = this.fb.group({
      label: [''],
      icon: [''],
      type: ['default'],
      visible: [true],
      disabled: [false]
    });
  }

  ngOnInit() {
    this.restore();
    this.actionForm.valueChanges.subscribe(formValue => {
      this.updateAction(formValue);
    });
  }

  updateAction(formValue: any) {
    this.action = formValue;
  }

  changeEvent(event: string) {
    this.event = event;
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = undefined;
    }
  }

  changeModalActions() {
    try {
      this.customModalActions = JSON.parse(this.modalActions);
    } catch {
      this.customModalActions = undefined;
    }
  }

  onChangeHeaders(headers) {
    try {
      this.headers = JSON.parse(headers);
    } catch {
      this.headers = undefined;
    }
  }
  onChangeExtension() {
    const allowedExtensions = this.allowedExtensions.split(',').map(allowedExtension => allowedExtension.trim());
    this.restrictions = Object.assign({}, this.restrictions, { allowedExtensions });
  }

  onChangeMaxFiles(maxFiles: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFiles });
  }

  onChangeMaxSize(maxSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { maxFileSize: this.getValueInBytes(maxSize) });
  }

  onChangeMinSize(minSize: number) {
    this.restrictions = Object.assign({}, this.restrictions, { minFileSize: this.getValueInBytes(minSize) });
  }

  restore() {
    this.helperText = '';
    this.allowedExtensions = undefined;
    this.customLiterals = undefined;
    this.dragDropHeight = undefined;
    this.event = undefined;
    this.formField = undefined;
    this.label = undefined;
    this.help = undefined;
    this.literals = '';
    this.modalActions = '';
    this.maxFiles = undefined;
    this.maxSize = undefined;
    this.minSize = undefined;
    this.properties = [];
    this.restrictions = {};
    this.upload = undefined;
    this.url = 'https://po-sample-api.onrender.com/v1/uploads/addFile';
    this.headers = undefined;
    this.headersLabs = undefined;
    this.actionForm.reset({ type: 'default', visible: true });
    this.action = { label: '', type: 'default' };
    this.customModalActions = [];
    this.size = 'medium';
  }

  private getValueInBytes(value: number) {
    return 1048576 * value;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-labs"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),F(" ",i.sampleCodeButtonLabel),p(),u("ngClass",v(4,Ge,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Te],encapsulation:2})}return a})();var Ke=["formOpportunity"],Ye=()=>({maxFileSize:"204800"}),qe=(()=>{class a{poNotification=H(xe);formOpportunity;biograph;linkedin;name;resume;uploadedResume;ngOnInit(){this.uploadedResume=!1}apply(){this.formOpportunity.reset(),this.uploadedResume=!1,this.poNotification.success("You were applied successfully")}resumeUploadError(){this.uploadedResume=!1}resumeUploadSuccess(){this.uploadedResume=!0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-resume"]],viewQuery:function(r,i){if(r&1&&K(Ke,7),r&2){let m;D(m=U())&&(i.formOpportunity=m.first)}},standalone:!1,decls:12,vars:7,consts:[["formOpportunity","ngForm"],[1,"po-row"],["name","name","p-clean","","p-label","Full Name","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","biograph","p-label","Biograph","p-required","",1,"po-md-12",3,"ngModelChange","ngModel"],["name","linkedin","p-clean","","p-label","LinkedIn URL",1,"po-md-12",3,"ngModelChange","ngModel"],["name","resume","p-label","Resume","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-md-12",3,"ngModelChange","p-error","p-success","ngModel","p-restrictions"],["p-label","Apply",1,"po-md-4",3,"p-click","p-disabled"]],template:function(r,i){if(r&1){let m=q();n(0,"form",null,0)(2,"div",1)(3,"po-input",2),h("ngModelChange",function(l){return E(m),g(i.name,l)||(i.name=l),S(l)}),t()(),n(4,"div",1)(5,"po-textarea",3),h("ngModelChange",function(l){return E(m),g(i.biograph,l)||(i.biograph=l),S(l)}),t()(),n(6,"div",1)(7,"po-url",4),h("ngModelChange",function(l){return E(m),g(i.linkedin,l)||(i.linkedin=l),S(l)}),t()(),n(8,"div",1)(9,"po-upload",5),h("ngModelChange",function(l){return E(m),g(i.resume,l)||(i.resume=l),S(l)}),c("p-error",function(){return i.resumeUploadError()})("p-success",function(){return i.resumeUploadSuccess()}),t()(),n(10,"div",1)(11,"po-button",6),c("p-click",function(){return i.apply()}),t()()()}if(r&2){let m=A(1);p(3),x("ngModel",i.name),p(2),x("ngModel",i.biograph),p(2),x("ngModel",i.linkedin),p(2),x("ngModel",i.resume),u("p-restrictions",Y(6,Ye)),p(2),u("p-disabled",m.invalid||!i.uploadedResume)}},dependencies:[O,L,z,V,R,j,B,X,T,he],encapsulation:2})}return a})();var Ze=a=>({"docs-sample-code-tabs":a}),De=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-resume-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Resume"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-resume/sample-po-upload-resume.component.html"),t(),n(13,"pre",7),e(14,`<form #formOpportunity="ngForm">
  <div class="po-row">
    <po-input class="po-md-12" name="name" [(ngModel)]="name" p-clean p-label="Full Name" p-required> </po-input>
  </div>

  <div class="po-row">
    <po-textarea class="po-md-12" name="biograph" [(ngModel)]="biograph" p-label="Biograph" p-required> </po-textarea>
  </div>

  <div class="po-row">
    <po-url class="po-md-12" name="linkedin" [(ngModel)]="linkedin" p-clean p-label="LinkedIn URL"> </po-url>
  </div>

  <div class="po-row">
    <po-upload
      class="po-md-12"
      name="resume"
      [(ngModel)]="resume"
      p-label="Resume"
      p-required
      p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
      [p-restrictions]="{ maxFileSize: '204800' }"
      (p-error)="resumeUploadError()"
      (p-success)="resumeUploadSuccess()"
    >
    </po-upload>
  </div>

  <div class="po-row">
    <po-button
      class="po-md-4"
      p-label="Apply"
      [p-disabled]="formOpportunity.invalid || !uploadedResume"
      (p-click)="apply()"
    >
    </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-resume/sample-po-upload-resume.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-resume',
  templateUrl: 'sample-po-upload-resume.component.html',
  standalone: false
})
export class SamplePoUploadResumeComponent implements OnInit {
  private poNotification = inject(PoNotificationService);

  @ViewChild('formOpportunity', { static: true }) formOpportunity: UntypedFormControl;

  biograph: string;
  linkedin: string;
  name: string;
  resume: string;
  uploadedResume: boolean;

  ngOnInit() {
    this.uploadedResume = false;
  }

  apply() {
    this.formOpportunity.reset();
    this.uploadedResume = false;

    this.poNotification.success('You were applied successfully');
  }

  resumeUploadError() {
    this.uploadedResume = false;
  }

  resumeUploadSuccess() {
    this.uploadedResume = true;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-resume"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),F(" ",i.sampleCodeButtonLabel),p(),u("ngClass",v(4,Ze,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,qe],encapsulation:2})}return a})();var et=["upload"],tt=["stepper"],nt=["submitForm"],it=["sucessData"],ot=a=>({"po-invisible":a});function at(a,Be){if(a&1){let d=q();n(0,"div",8)(1,"div",9)(2,"p",11),e(3,"Confirm informations"),t()(),o(4,"po-info",28)(5,"po-info",29)(6,"po-info",30),n(7,"po-button",31),c("p-click",function(){E(d);let i=N();return S(i.confirmSubmit())}),t()()}if(a&2){let d=N();p(4),u("p-value",d.project[0].name||"N/D"),p(),u("p-value",d.title||"N/D"),p(),u("p-value",d.description||"N/D")}}var Ue=(()=>{class a{upload;stepper;submitForm;sucessData;confirm={action:()=>{this.sucessData.close()},label:"Return"};description;project=[];restrictions={allowedExtensions:[".zip",".7z",".tar",".wim"]};title;ngOnInit(){this.newSubmit()}canSubmitProject(){return!!(this.project&&this.project.length)&&this.title&&this.description}confirmSubmit(){this.sucessData.open(),this.newSubmit(),this.stepper.first()}submitProject(){this.upload.sendFiles(),this.stepper.next()}newSubmit(){this.project=[],this.title=void 0,this.description=void 0}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-rs"]],viewQuery:function(r,i){if(r&1&&K(et,7)(tt,7)(nt,7)(it,7),r&2){let m;D(m=U())&&(i.upload=m.first),D(m=U())&&(i.stepper=m.first),D(m=U())&&(i.submitForm=m.first),D(m=U())&&(i.sucessData=m.first)}},standalone:!1,decls:47,vars:15,consts:[["stepper",""],["submitForm","ngForm"],["upload",""],["sucessData",""],[1,"po-row"],["p-orientation","vertical","p-step-icons","","p-step-size","42",1,"po-lg-10","po-offset-lg-2","po-offset-xl-2"],["p-label","Welcome"],["p-title","Realize & Show",1,"po-lg-8","po-mt-2"],[1,"tht-row"],[1,"po-sm-12"],[1,"po-font-title"],[1,"po-font-text-large"],["p-label","Yes!","p-kind","primary",1,"po-sm-12","po-mt-2",3,"p-click"],["p-label","Submit",3,"p-can-active-next-step"],[1,"po-lg-10"],[1,"po-font-subtitle"],[1,"po-font-text-small-bold"],[1,"po-font-title","po-lg-2"],["p-icon","an an-cloud-arrow-up",1,"po-clickable",3,"click"],["p-icon","an an-fill an-x-circle",1,"po-clickable",3,"click","ngClass"],[1,"po-sm-12","po-mt-3","po-font-text-bold"],["name","project","p-hide-select-button","","p-hide-send-button","","p-required","","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",1,"po-sm-12",3,"ngModelChange","ngModel","p-restrictions"],["name","title","p-label","Title","p-placeholder","Be creative","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["name","description","p-label","Description","p-maxlength","140","p-placeholder","Resume on few words","p-required","",1,"po-sm-12",3,"ngModelChange","ngModel","p-disabled"],["p-label","Done",1,"po-sm-12","po-mt-2",3,"p-click","p-disabled"],["p-label","Confirm"],["p-title","Confirmation",3,"p-primary-action"],[1,"po-sm-12","po-font-title"],["p-label","File name",1,"po-md-4",3,"p-value"],["p-label","Title",1,"po-md-4",3,"p-value"],["p-label","Description",1,"po-md-4",3,"p-value"],["p-label","Confirm",1,"po-sm-12","po-mt-2","po-mb-2",3,"p-click"]],template:function(r,i){if(r&1){let m=q();n(0,"div",4)(1,"po-stepper",5,0)(3,"po-step",6)(4,"po-widget",7)(5,"div",8)(6,"div",9)(7,"h1",10),e(8,"Welcome, TOTVS!"),t(),n(9,"p",11),e(10,"Let's submit your project?"),t()()(),n(11,"div",8)(12,"po-button",12),c("p-click",function(){E(m);let l=A(2);return S(l.next())}),t()()()(),n(13,"po-step",13)(14,"po-widget",7)(15,"form",null,1)(17,"div",4)(18,"div",14)(19,"div",4)(20,"p",15),e(21,"Please, select your project:"),t()(),n(22,"div",4)(23,"p",16),e(24,"*Upload a zip file containing your project."),t()()(),n(25,"div",17)(26,"po-icon",18),c("click",function(){E(m);let l=A(32);return S(l.selectFiles())}),t(),n(27,"po-icon",19),c("click",function(){E(m);let l=A(32);return S(l.clear())}),t()()(),n(28,"div",4)(29,"label",20),e(30,"Attached"),t(),n(31,"po-upload",21,2),h("ngModelChange",function(l){return E(m),g(i.project,l)||(i.project=l),S(l)}),t()(),n(33,"div",4)(34,"po-input",22),h("ngModelChange",function(l){return E(m),g(i.title,l)||(i.title=l),S(l)}),t()(),n(35,"div",4)(36,"po-textarea",23),h("ngModelChange",function(l){return E(m),g(i.description,l)||(i.description=l),S(l)}),t()(),n(37,"div",8)(38,"po-button",24),c("p-click",function(){return i.submitProject()}),t()()()()(),n(39,"po-step",25)(40,"po-widget",7),G(41,at,8,3,"div",8),t()()()(),n(42,"po-modal",26,3)(44,"div",4)(45,"p",27),e(46,"Project successfully submited!"),t()()()}r&2&&(p(13),u("p-can-active-next-step",i.canSubmitProject.bind(i)),p(14),u("ngClass",v(13,ot,i.project.length<1)),p(2),ne("po-invisible",i.project.length<1),p(2),x("ngModel",i.project),u("p-restrictions",i.restrictions),p(3),x("ngModel",i.title),u("p-disabled",i.project.length<1),p(2),x("ngModel",i.description),u("p-disabled",i.project.length<1),p(2),u("p-disabled",i.canSubmitProject()),p(3),J(i.canSubmitProject()?41:-1),p(),u("p-primary-action",i.confirm))},dependencies:[C,O,L,z,V,R,j,B,X,T,ue,Z,Se,Ce,we,$],encapsulation:2})}return a})();var rt=a=>({"docs-sample-code-tabs":a}),ke=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-rs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - Realize & Show"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-rs/sample-po-upload-rs.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-stepper
    #stepper
    class="po-lg-10 po-offset-lg-2 po-offset-xl-2"
    p-orientation="vertical"
    p-step-icons
    p-step-size="42"
  >
    <po-step p-label="Welcome">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <div class="tht-row">
          <div class="po-sm-12">
            <h1 class="po-font-title">Welcome, TOTVS!</h1>
            <p class="po-font-text-large">Let's submit your project?</p>
          </div>
        </div>

        <div class="tht-row">
          <po-button class="po-sm-12 po-mt-2" p-label="Yes!" p-kind="primary" (p-click)="stepper.next()"> </po-button>
        </div>
      </po-widget>
    </po-step>

    <po-step p-label="Submit" [p-can-active-next-step]="canSubmitProject.bind(this)">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        <form #submitForm="ngForm">
          <div class="po-row">
            <div class="po-lg-10">
              <div class="po-row">
                <p class="po-font-subtitle">Please, select your project:</p>
              </div>

              <div class="po-row">
                <p class="po-font-text-small-bold">*Upload a zip file containing your project.</p>
              </div>
            </div>

            <div class="po-font-title po-lg-2">
              <po-icon p-icon="an an-cloud-arrow-up" class="po-clickable" (click)="upload.selectFiles()"></po-icon>
              <po-icon
                p-icon="an an-fill an-x-circle"
                class="po-clickable"
                [ngClass]="{ 'po-invisible': project.length < 1 }"
                (click)="upload.clear()"
              ></po-icon>
            </div>
          </div>

          <div class="po-row">
            <label class="po-sm-12 po-mt-3 po-font-text-bold" [class.po-invisible]="project.length < 1">Attached</label>
            <po-upload
              #upload
              class="po-sm-12"
              name="project"
              [(ngModel)]="project"
              p-hide-select-button
              p-hide-send-button
              p-required
              p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
              [p-restrictions]="restrictions"
            >
            </po-upload>
          </div>

          <div class="po-row">
            <po-input
              class="po-sm-12"
              name="title"
              [(ngModel)]="title"
              p-label="Title"
              p-placeholder="Be creative"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-input>
          </div>

          <div class="po-row">
            <po-textarea
              class="po-sm-12"
              name="description"
              [(ngModel)]="description"
              p-label="Description"
              p-maxlength="140"
              p-placeholder="Resume on few words"
              p-required
              [p-disabled]="project.length < 1"
            >
            </po-textarea>
          </div>

          <div class="tht-row">
            <po-button
              class="po-sm-12 po-mt-2"
              p-label="Done"
              [p-disabled]="canSubmitProject()"
              (p-click)="submitProject()"
            >
            </po-button>
          </div>
        </form>
      </po-widget>
    </po-step>

    <po-step p-label="Confirm">
      <po-widget class="po-lg-8 po-mt-2" p-title="Realize & Show">
        @if (canSubmitProject()) {
          <div class="tht-row">
            <div class="po-sm-12">
              <p class="po-font-text-large">Confirm informations</p>
            </div>
            <po-info class="po-md-4" p-label="File name" [p-value]="project[0].name || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Title" [p-value]="title || 'N/D'"> </po-info>
            <po-info class="po-md-4" p-label="Description" [p-value]="description || 'N/D'"> </po-info>
            <po-button class="po-sm-12 po-mt-2 po-mb-2" p-label="Confirm" (p-click)="confirmSubmit()"> </po-button>
          </div>
        }
      </po-widget>
    </po-step>
  </po-stepper>
</div>

<po-modal #sucessData p-title="Confirmation" [p-primary-action]="confirm">
  <div class="po-row">
    <p class="po-sm-12 po-font-title">Project successfully submited!</p>
  </div>
</po-modal>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-rs/sample-po-upload-rs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PoModalAction, PoModalComponent, PoStepperComponent, PoUploadComponent } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-rs',
  templateUrl: 'sample-po-upload-rs.component.html',
  standalone: false
})
export class SamplePoUploadRsComponent implements OnInit {
  @ViewChild('upload', { static: true }) upload: PoUploadComponent;
  @ViewChild('stepper', { static: true }) stepper: PoStepperComponent;
  @ViewChild('submitForm', { static: true }) submitForm: NgForm;
  @ViewChild('sucessData', { static: true }) sucessData: PoModalComponent;

  confirm: PoModalAction = {
    action: () => {
      this.sucessData.close();
    },
    label: 'Return'
  };

  description: string;
  project: Array<any> = [];
  restrictions = { allowedExtensions: ['.zip', '.7z', '.tar', '.wim'] };
  title: string;

  ngOnInit() {
    this.newSubmit();
  }

  canSubmitProject() {
    return !!(this.project && this.project.length) && this.title && this.description;
  }

  confirmSubmit() {
    this.sucessData.open();
    this.newSubmit();
    this.stepper.first();
  }

  submitProject() {
    this.upload.sendFiles();
    this.stepper.next();
  }

  private newSubmit() {
    this.project = [];
    this.title = undefined;
    this.description = undefined;
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-rs"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),F(" ",i.sampleCodeButtonLabel),p(),u("ngClass",v(4,rt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Ue],encapsulation:2})}return a})();var Ae=(()=>{class a{customAction={icon:"an an-download",type:"default",visible:!1};uploadSuccess(){this.customAction.visible=!0}onCustomActionClick(d){if(!d.rawFile){console.error("Arquivo inv\xE1lido ou n\xE3o encontrado.");return}this.downloadFile(d.rawFile)}downloadFile(d){let r=URL.createObjectURL(d),i=document.createElement("a");i.href=r,i.download=d.name,i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-download"]],standalone:!1,decls:1,vars:2,consts:[["name","upload","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-custom-action-click","p-success","p-custom-action","p-multiple"]],template:function(r,i){r&1&&(n(0,"po-upload",0),c("p-custom-action-click",function(s){return i.onCustomActionClick(s)})("p-success",function(){return i.uploadSuccess()}),t()),r&2&&u("p-custom-action",i.customAction)("p-multiple",!0)},dependencies:[T],encapsulation:2})}return a})();var mt=a=>({"docs-sample-code-tabs":a}),Le=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-download-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Download Button"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-download/sample-po-upload-download.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-custom-action]="customAction"
  (p-custom-action-click)="onCustomActionClick($event)"
  [p-multiple]="true"
  (p-success)="uploadSuccess()"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-download/sample-po-upload-download.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-download',
  templateUrl: 'sample-po-upload-download.component.html',
  standalone: false
})
export class SamplePoUploadDownloadComponent {
  customAction: PoProgressAction = {
    icon: 'an an-download',
    type: 'default',
    visible: false
  };

  uploadSuccess() {
    this.customAction.visible = true;
  }

  onCustomActionClick(file: { rawFile: File }) {
    if (!file.rawFile) {
      console.error('Arquivo inv\xE1lido ou n\xE3o encontrado.');
      return;
    }

    this.downloadFile(file.rawFile);
  }

  downloadFile(rawFile: File) {
    // Cria uma URL tempor\xE1ria para o arquivo
    const url = URL.createObjectURL(rawFile);

    // Cria um link <a> tempor\xE1rio para iniciar o download
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = rawFile.name; // Define o nome do arquivo para o download
    anchor.style.display = 'none';

    // Adiciona o link ao DOM, aciona o clique e remove o link
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    // Libera a mem\xF3ria utilizada pela URL tempor\xE1ria
    URL.revokeObjectURL(url);
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-download"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),F(" ",i.sampleCodeButtonLabel),p(),u("ngClass",v(4,mt,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,Ae],encapsulation:2})}return a})();var ut=()=>[".png",".jpg",".jpeg",".gif"],ct=a=>({allowedExtensions:a,maxFiles:5,maxFileSize:2057280}),ze=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-preview"]],standalone:!1,decls:1,vars:6,consts:[["name","upload","p-label","PO Upload com Pr\xE9-visualiza\xE7\xE3o","p-url","https://po-sample-api.onrender.com/v1/uploads/addFile",3,"p-restrictions","p-show-thumbnail","p-multiple"]],template:function(r,i){r&1&&o(0,"po-upload",0),r&2&&u("p-restrictions",v(4,ct,Y(3,ut)))("p-show-thumbnail",!0)("p-multiple",!0)},dependencies:[T],encapsulation:2})}return a})();var St=a=>({"docs-sample-code-tabs":a}),Re=(()=>{class a{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-preview-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(r,i){r&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Upload - with Preview"),t(),n(4,"a",2),c("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-upload-preview/sample-po-upload-preview.component.html"),t(),n(13,"pre",7),e(14,`<po-upload
  name="upload"
  p-label="PO Upload com Pr\xE9-visualiza\xE7\xE3o"
  p-url="https://po-sample-api.onrender.com/v1/uploads/addFile"
  [p-restrictions]="{ allowedExtensions: ['.png', '.jpg', '.jpeg', '.gif'], maxFiles: 5, maxFileSize: 2057280 }"
  [p-show-thumbnail]="true"
  [p-multiple]="true"
></po-upload>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-upload-preview/sample-po-upload-preview.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoProgressAction } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-upload-preview',
  templateUrl: 'sample-po-upload-preview.component.html',
  standalone: false
})
export class SamplePoUploadPreviewComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-upload-preview"),t(),o(23,"hr")),r&2&&(p(5),P("po-icon "+i.sampleCodeButtonIcon),p(),F(" ",i.sampleCodeButtonLabel),p(),u("ngClass",v(4,St,i.hideSampleCodeTabs)))},dependencies:[C,y,w,_,ze],encapsulation:2})}return a})();var Ve=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275cmp=b({type:a,selectors:[["sample-po-upload-doc"]],standalone:!1,decls:2328,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoProgressAction"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<PoModalAction>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoUploadFileRestrictions"],["pan","",1,"docs-api-property-type","{","[name:","string]:","string"],["pan","",1,"docs-api-property-type","Array<string>;","}"],["pan","",1,"docs-api-property-type","PoUploadLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["href","https://po-ui.io/documentation/po-helper"],["href","https://po-ui.io/documentation/po-theme"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["href","https://po-ui.io/icons"]],template:function(r,i){r&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoFieldModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,`M\xF3dulo dos componentes: po-checkbox, po-checkbox-group, po-combo, po-datepicker, po-datepicker-range, po-email, po-input,
po-lookup, po-number, po-multiselect, po-password, po-radio-group, po-select, po-switch, po-textarea, po-upload
e po-url.`),t(),n(7,"blockquote")(8,"p"),e(9,"N\xE3o esque\xE7a de importar o m\xF3dulo "),n(10,"code"),e(11,"FormsModule"),t(),e(12,` para usar os componentes de formul\xE1rios e caso esteja trabalhando com
formul\xE1rios reativos, importe o m\xF3dulo `),n(13,"code"),e(14,"ReactiveFormsModule"),t(),e(15,", ambos nativos do Angular."),t()()(),n(16,"h3",3),e(17,"Componente"),t(),n(18,"h4",4)(19,"code",5),e(20,"PoUploadComponent"),t()(),n(21,"div",2)(22,"p"),e(23,"O componente "),n(24,"code"),e(25,"po-upload"),t(),e(26,` permite que o usu\xE1rio envie arquivo(s) ao servidor e acompanhe o progresso.
Este componente tamb\xE9m possibilita algumas configura\xE7\xF5es como: \u2013 Envio de diret\xF3rios, onde ele acessa o diret\xF3rio selecionado assim como seus sub-diret\xF3rios;`),t(),n(27,"ul")(28,"li"),e(29,"M\xFAltipla sele\xE7\xE3o, onde o usu\xE1rio pode enviar mais de um arquivo ao servidor."),t(),n(30,"li"),e(31,`Auto envio, onde o arquivo \xE9 enviado imediatamente ap\xF3s a sele\xE7\xE3o do usu\xE1rio, n\xE3o necessitando que o usu\xE1rio
clique em enviar.`),t(),n(32,"li"),e(33,"Restri\xE7\xF5es de formatos de arquivo e tamanho."),t(),n(34,"li"),e(35,"Fun\xE7\xE3o de sucesso que ser\xE1 disparada quando os arquivos forem enviados com sucesso."),t(),n(36,"li"),e(37,"Fun\xE7\xE3o de erro que ser\xE1 disparada quando houver erro no envio dos arquivos."),t(),n(38,"li"),e(39,"Permite habilitar uma \xE1rea onde os arquivos podem ser arrastados."),t()(),n(40,"h4"),e(41,"Tokens customiz\xE1veis"),t(),n(42,"p"),e(43,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(44,"blockquote")(45,"p"),e(46,"Para maiores informa\xE7\xF5es, acesse o guia "),n(47,"a",6),e(48,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(49,"."),t()(),n(50,"table")(51,"thead")(52,"tr")(53,"th"),e(54,"Propriedade"),t(),n(55,"th"),e(56,"Descri\xE7\xE3o"),t(),n(57,"th"),e(58,"Valor Padr\xE3o"),t()()(),n(59,"tbody")(60,"tr")(61,"td")(62,"strong"),e(63,"FIELD CONTAINER"),t()(),o(64,"td")(65,"td"),t(),n(66,"tr")(67,"td")(68,"code"),e(69,"--field-container-title-justify"),t()(),n(70,"td"),e(71,"Alinhamento horizontal do t\xEDtulo ("),n(72,"code"),e(73,"justify-content"),t(),e(74,")"),t(),n(75,"td")(76,"code"),e(77,"space-between"),t()()(),n(78,"tr")(79,"td")(80,"code"),e(81,"--field-container-title-flex"),t()(),n(82,"td"),e(83,"Flex do t\xEDtulo ("),n(84,"code"),e(85,"flex"),t(),e(86,")"),t(),n(87,"td")(88,"code"),e(89,"1 auto"),t()()(),n(90,"tr")(91,"td")(92,"strong"),e(93,"TEXT SUPPORT"),t()(),o(94,"td")(95,"td"),t(),n(96,"tr")(97,"td")(98,"code"),e(99,"--font-family-text-support"),t()(),n(100,"td"),e(101,"Fam\xEDlia tipogr\xE1fica usada no texto de suporte"),t(),n(102,"td")(103,"code"),e(104,"var(--font-family-theme)"),t()()(),n(105,"tr")(106,"td")(107,"code"),e(108,"--text-color-text-support"),t()(),n(109,"td"),e(110,"Cor da fonte no texto de suporte"),t(),n(111,"td")(112,"code"),e(113,"var(--color-neutral-dark-90)"),t()()(),n(114,"tr")(115,"td")(116,"strong"),e(117,"UPLOAD CONTENT"),t()(),o(118,"td")(119,"td"),t(),n(120,"tr")(121,"td")(122,"code"),e(123,"--background-color-content"),t(),e(124," \xA0"),t(),n(125,"td"),e(126,"Cor de fundo"),t(),n(127,"td")(128,"code"),e(129,"var(--color-neutral-light-10)"),t()()(),n(130,"tr")(131,"td")(132,"code"),e(133,"--border-color-content"),t()(),n(134,"td"),e(135,"Cor da borda"),t(),n(136,"td")(137,"code"),e(138,"var(--color-neutral-light-20)"),t()()(),n(139,"tr")(140,"td")(141,"code"),e(142,"--border-radius-content"),t()(),n(143,"td"),e(144,"Cont\xE9m o valor do raio dos cantos do elemento"),t(),n(145,"td")(146,"code"),e(147,"var(--border-radius-md)"),t()()(),n(148,"tr")(149,"td")(150,"code"),e(151,"--text-color-file-name"),t()(),n(152,"td"),e(153,"Cor do texto do nome do arquivo"),t(),n(154,"td")(155,"code"),e(156,"var(--color-neutral-dark-90)"),t()()(),n(157,"tr")(158,"td")(159,"code"),e(160,"--font-family-file-name"),t()(),n(161,"td"),e(162,"Fam\xEDlia tipogr\xE1fica usada no texto do arquivo"),t(),n(163,"td")(164,"code"),e(165,"var(--font-family-theme)"),t()()(),n(166,"tr")(167,"td")(168,"code"),e(169,"--text-color-info-bar"),t()(),n(170,"td"),e(171,"Cor do texto de informa\xE7\xE3o"),t(),n(172,"td")(173,"code"),e(174,"var(--color-neutral-mid-60)"),t()()(),n(175,"tr")(176,"td")(177,"code"),e(178,"--font-family-info-bar"),t()(),n(179,"td"),e(180,"Fam\xEDlia tipogr\xE1fica usada no texto de informa\xE7\xE3o"),t(),n(181,"td")(182,"code"),e(183,"var(--font-family-theme)"),t()()(),n(184,"tr")(185,"td")(186,"strong"),e(187,"ERROR STATE"),t()(),o(188,"td")(189,"td"),t(),n(190,"tr")(191,"td")(192,"code"),e(193,"--background-color-content-error"),t()(),n(194,"td"),e(195,"Cor de fundo do container de erro"),t(),n(196,"td")(197,"code"),e(198,"var(--color-neutral-light-00)"),t()()(),n(199,"tr")(200,"td")(201,"code"),e(202,"--border-color-content-error"),t()(),n(203,"td"),e(204,"Cor da borda do container de erro"),t(),n(205,"td")(206,"code"),e(207,"var(--color-feedback-negative-base)"),t()()(),n(208,"tr")(209,"td")(210,"code"),e(211,"--text-color-error"),t()(),n(212,"td"),e(213,"Cor do texto do container de erro"),t(),n(214,"td")(215,"code"),e(216,"var(--color-feedback-negative-dark)"),t()()(),n(217,"tr")(218,"td")(219,"code"),e(220,"--color-icon-error"),t()(),n(221,"td"),e(222,"Cor do \xEDcone no estado de erro"),t(),n(223,"td")(224,"code"),e(225,"var(--color-feedback-negative-base)"),t()()(),n(226,"tr")(227,"td")(228,"code"),e(229,"--font-family-error"),t()(),n(230,"td"),e(231,"Fam\xEDlia tipogr\xE1fica usada no texto de erro"),t(),n(232,"td")(233,"code"),e(234,"var(--font-family-theme)"),t()()(),n(235,"tr")(236,"td")(237,"strong"),e(238,"UPLOADED STATE"),t()(),o(239,"td")(240,"td"),t(),n(241,"tr")(242,"td")(243,"code"),e(244,"--background-color-content-uploaded"),t()(),n(245,"td"),e(246,"Cor de fundo do container com status de enviado"),t(),n(247,"td")(248,"code"),e(249,"var(--color-neutral-light-00)"),t()()(),n(250,"tr")(251,"td")(252,"code"),e(253,"--border-color-content-uploaded"),t()(),n(254,"td"),e(255,"Cor da borda do container com status de enviado"),t(),n(256,"td")(257,"code"),e(258,"var(--color-neutral-light-20)"),t()()(),n(259,"tr")(260,"td")(261,"strong"),e(262,"INTERACTIVE STATE"),t()(),o(263,"td")(264,"td"),t(),n(265,"tr")(266,"td")(267,"code"),e(268,"--text-color-file-name-interactive"),t()(),n(269,"td"),e(270,"Cor do texto do nome do arquivo quando interativo"),t(),n(271,"td")(272,"code"),e(273,"var(--color-action-default)"),t()()(),n(274,"tr")(275,"td")(276,"strong"),e(277,"THUMBNAIL"),t()(),o(278,"td")(279,"td"),t(),n(280,"tr")(281,"td")(282,"code"),e(283,"--color-icon-thumbnail"),t()(),n(284,"td"),e(285,"Cor do \xEDcone na thumbnail"),t(),n(286,"td")(287,"code"),e(288,"var(--color-action-default)"),t()()(),n(289,"tr")(290,"td")(291,"code"),e(292,"--border-width-thumbnail"),t()(),n(293,"td"),e(294,"Tamanho da fonte na thumbnail"),t(),n(295,"td")(296,"code"),e(297,"var(--border-width-sm)"),t()()(),n(298,"tr")(299,"td")(300,"code"),e(301,"--border-radius-thumbnail"),t()(),n(302,"td"),e(303,"Cont\xE9m o valor do raio dos cantos na thumbnail"),t(),n(304,"td")(305,"code"),e(306,"var(--border-radius-md)"),t()()(),n(307,"tr")(308,"td")(309,"code"),e(310,"--background-color-thumbnail"),t()(),n(311,"td"),e(312,"Cor de fundo na thumbnail"),t(),n(313,"td")(314,"code"),e(315,"var(--color-neutral-light-05)"),t()()(),n(316,"tr")(317,"td")(318,"strong"),e(319,"Focused"),t()(),o(320,"td")(321,"td"),t(),n(322,"tr")(323,"td")(324,"code"),e(325,"--outline-color-focused"),t()(),n(326,"td"),e(327,"Cor do outline do estado de focus"),t(),n(328,"td")(329,"code"),e(330,"var(--color-action-focus)"),t()()()()()(),n(331,"div",7)(332,"h4",8),e(333,"Seletor"),t(),n(334,"pre",9),e(335,`<po-upload
    (p-additional-help)="EventEmitter"
    p-additional-help-tooltip="string"
    p-append-in-body="boolean"
    p-auto-focus="boolean"
    p-auto-upload="boolean"
    p-compact-label="boolean"
    p-custom-action="PoProgressAction"
    (p-custom-action-click)="EventEmitter"
    p-custom-modal-actions="Array<PoModalAction>"
    p-directory="boolean"
    p-disabled="boolean"
    p-disabled-remove-file="boolean"
    p-drag-drop="boolean"
    p-drag-drop-height="number"
    p-restrictions="PoUploadFileRestrictions"
    p-form-field="string"
    p-headers="{
    [name: string]: string | Array<string>;
}"
    p-help="string"
    p-hide-restrictions-info="boolean"
    p-hide-select-button="boolean"
    p-hide-send-button="boolean"
    p-multiple="boolean"
    (p-keydown)="EventEmitter"
    p-label="string"
    p-label-text-wrap="boolean"
    p-literals="PoUploadLiterals"
    p-loading="boolean"
    name="string"
    (ng-model-change)="EventEmitter"
    (p-cancel)="EventEmitter"
    (p-error)="EventEmitter"
    (p-open-modal-preview)="EventEmitter"
    (p-remove)="EventEmitter"
    (p-success)="EventEmitter"
    (p-upload)="EventEmitter"
    p-optional="boolean"
    p-helper="PoHelperOptions | string"
    p-required="boolean"
    p-required-url="boolean"
    p-show-required="boolean"
    p-show-thumbnail="boolean"
    p-size="string"
    p-url="string" >
</po-upload>
`),t()(),n(336,"h4",10),e(337,"Propriedades"),t(),n(338,"table",11)(339,"tr",12)(340,"th",13),e(341,"Nome"),t(),n(342,"th",13),e(343,"Tipo"),t(),n(344,"th",13),e(345,"Padr\xE3o"),t(),n(346,"th",13),e(347,"Descri\xE7\xE3o"),t()(),n(348,"tr",14)(349,"td",15)(350,"div",16)(351,"span",17),e(352," (p-additional-help)"),o(353,"br"),t()(),n(354,"div",18),e(355,"Deprecated"),t()(),n(356,"td",19)(357,"code",20),e(358,"EventEmitter"),t()(),n(359,"td",21),e(360,"-"),t(),n(361,"td",22)(362,"em")(363,"strong"),e(364,"(opcional)"),t()(),n(365,"p"),e(366,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),n(367,"blockquote")(368,"p"),e(369,"Essa propriedade est\xE1 "),n(370,"strong"),e(371,"depreciada"),t(),e(372," e ser\xE1 removida na vers\xE3o "),n(373,"code"),e(374,"23.x.x"),t(),e(375,". Recomendamos utilizar a propriedade "),n(376,"code"),e(377,"p-helper"),t(),e(378," que oferece mais recursos e flexibilidade."),t()()()(),n(379,"tr",14)(380,"td",15)(381,"div",23)(382,"span",24),e(383," p-additional-help-tooltip"),o(384,"br"),t()(),n(385,"div",18),e(386,"Deprecated"),t()(),n(387,"td",19)(388,"code",25),e(389,"string"),t()(),n(390,"td",21),e(391,"-"),t(),n(392,"td",22)(393,"em")(394,"strong"),e(395,"(opcional)"),t()(),n(396,"p"),e(397,"Exibe um \xEDcone de ajuda adicional, com o texto desta propriedade sendo passado para o popover do componente "),n(398,"code"),e(399,"po-helper"),t(),e(400,`.
`),n(401,"strong"),e(402,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),n(403,"blockquote")(404,"p"),e(405,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),n(406,"blockquote")(407,"p"),e(408,"Essa propriedade est\xE1 "),n(409,"strong"),e(410,"depreciada"),t(),e(411," e ser\xE1 removida na vers\xE3o "),n(412,"code"),e(413,"23.x.x"),t(),e(414,". Recomendamos utilizar a propriedade "),n(415,"code"),e(416,"p-helper"),t(),e(417," que oferece mais recursos e flexibilidade."),t()()()(),n(418,"tr",14)(419,"td",15)(420,"div",23)(421,"span",24),e(422," p-append-in-body"),o(423,"br"),t()()(),n(424,"td",19)(425,"code",26),e(426,"boolean"),t()(),n(427,"td",21)(428,"p")(429,"code"),e(430,"false"),t()()(),n(431,"td",22)(432,"em")(433,"strong"),e(434,"(opcional)"),t()(),n(435,"p"),e(436,"Define que o popover ("),n(437,"code"),e(438,"p-helper"),t(),e(439,`) ser\xE1 inclu\xEDdo no body da p\xE1gina e n\xE3o dentro do componente. Essa
op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou overflow escondido, garantindo o
posicionamento correto do tooltip pr\xF3ximo ao elemento.`),t(),n(440,"blockquote")(441,"p"),e(442,"Quando utilizado com "),n(443,"code"),e(444,"p-helper"),t(),e(445,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do popover."),t()()()(),n(446,"tr",14)(447,"td",15)(448,"div",23)(449,"span",24),e(450," p-auto-focus"),o(451,"br"),t()()(),n(452,"td",19)(453,"code",26),e(454,"boolean"),t()(),n(455,"td",21)(456,"p")(457,"code"),e(458,"false"),t()()(),n(459,"td",22)(460,"em")(461,"strong"),e(462,"(opcional)"),t()(),n(463,"p"),e(464,"Aplica foco no elemento ao ser iniciado."),t(),n(465,"blockquote")(466,"p"),e(467,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),n(468,"tr",14)(469,"td",15)(470,"div",23)(471,"span",24),e(472," p-auto-upload"),o(473,"br"),t()()(),n(474,"td",19)(475,"code",26),e(476,"boolean"),t()(),n(477,"td",21)(478,"p")(479,"code"),e(480,"false"),t()()(),n(481,"td",22)(482,"em")(483,"strong"),e(484,"(opcional)"),t()(),n(485,"p"),e(486,"Define se o envio do arquivo ser\xE1 autom\xE1tico ao selecionar o mesmo."),t(),n(487,"blockquote")(488,"p"),e(489,"Esta propriedade funciona somente se a propriedade "),n(490,"code"),e(491,"p-url"),t(),e(492," tiver um valor atribu\xEDdo."),t()()()(),n(493,"tr",14)(494,"td",15)(495,"div",23)(496,"span",24),e(497," p-compact-label"),o(498,"br"),t()()(),n(499,"td",19)(500,"code",26),e(501,"boolean"),t()(),n(502,"td",21)(503,"p")(504,"code"),e(505,"false"),t()()(),n(506,"td",22)(507,"em")(508,"strong"),e(509,"(opcional)"),t()(),n(510,"p"),e(511,"Define se o t\xEDtulo do campo ser\xE1 exibido de forma compacta."),t(),n(512,"p"),e(513,"Quando habilitado ("),n(514,"code"),e(515,"true"),t(),e(516,"), o modo compacto afeta o conjunto composto por:"),t(),n(517,"ul")(518,"li")(519,"code"),e(520,"po-label"),t()(),n(521,"li")(522,"code"),e(523,"p-requirement (showRequired)"),t()(),n(524,"li")(525,"code"),e(526,"po-helper"),t()()(),n(527,"p"),e(528,`Ou seja, todos os elementos relacionados ao t\xEDtulo do campo
(r\xF3tulo, indicador de obrigatoriedade e componente auxiliar) passam
a seguir o comportamento de layout compacto.`),t(),n(529,"p"),e(530,`Tamb\xE9m \xE9 poss\xEDvel definir esse comportamento de forma global,
uma \xFAnica vez, na folha de estilo geral da aplica\xE7\xE3o, por meio
da customiza\xE7\xE3o dos tokens CSS:`),t(),n(531,"ul")(532,"li")(533,"code"),e(534,"--field-container-title-justify"),t()(),n(535,"li")(536,"code"),e(537,"--field-container-title-flex"),t()()(),n(538,"p"),e(539,"Exemplo:"),t(),n(540,"pre")(541,"code"),e(542,`:root {
  --field-container-title-justify: flex-start;
  --field-container-title-flex: 0 1 auto;
}
`),t()(),n(543,"p"),e(544,`Dessa forma, o layout compacto passa a ser o padr\xE3o da aplica\xE7\xE3o,
sem a necessidade de definir a propriedade individualmente em cada campo.`),t()()(),n(545,"tr",14)(546,"td",15)(547,"div",23)(548,"span",24),e(549," p-custom-action"),o(550,"br"),t()()(),n(551,"td",19)(552,"code",27),e(553,"PoProgressAction"),t()(),n(554,"td",21),e(555,"-"),t(),n(556,"td",22)(557,"em")(558,"strong"),e(559,"(opcional)"),t()(),n(560,"p"),e(561,"Define uma a\xE7\xE3o personalizada no componente "),n(562,"code"),e(563,"po-upload"),t(),e(564,`, adicionando um bot\xE3o no canto inferior direito
de cada barra de progresso associada aos arquivos enviados ou em envio.`),t(),n(565,"p"),e(566,"A a\xE7\xE3o deve implementar a interface "),n(567,"strong"),e(568,"PoProgressAction"),t(),e(569,", permitindo configurar propriedades como:"),t(),n(570,"ul")(571,"li")(572,"code"),e(573,"label"),t(),e(574,": Texto do bot\xE3o."),t(),n(575,"li")(576,"code"),e(577,"icon"),t(),e(578,": \xCDcone a ser exibido no bot\xE3o."),t(),n(579,"li")(580,"code"),e(581,"type"),t(),e(582,": Tipo de bot\xE3o (ex.: "),n(583,"code"),e(584,"danger"),t(),e(585," ou "),n(586,"code"),e(587,"default"),t(),e(588,")."),t(),n(589,"li")(590,"code"),e(591,"disabled"),t(),e(592,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(593,"li")(594,"code"),e(595,"visible"),t(),e(596,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(597,"p")(598,"strong"),e(599,"Exemplo de uso:"),t()(),n(600,"pre")(601,"code",28),e(602,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(603,"pre")(604,"code",29),e(605,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
}
`),t()()()(),n(606,"tr",14)(607,"td",15)(608,"div",16)(609,"span",17),e(610," (p-custom-action-click)"),o(611,"br"),t()()(),n(612,"td",19)(613,"code",20),e(614,"EventEmitter"),t()(),n(615,"td",21),e(616,"-"),t(),n(617,"td",22)(618,"em")(619,"strong"),e(620,"(opcional)"),t()(),n(621,"p"),e(622,"Evento emitido ao clicar na a\xE7\xE3o personalizada configurada no "),n(623,"code"),e(624,"p-custom-action"),t(),e(625,"."),t(),n(626,"p"),e(627,`O evento retorna o arquivo associado \xE0 barra de progresso onde a a\xE7\xE3o foi clicada,
permitindo executar opera\xE7\xF5es espec\xEDficas para aquele arquivo.`),t(),n(628,"p")(629,"strong"),e(630,"Exemplo de uso:"),t()(),n(631,"pre")(632,"code",28),e(633,`<po-upload
 [p-custom-action]="customAction"
 (p-custom-action-click)="onCustomActionClick($event)">
</po-upload>
`),t()(),n(634,"pre")(635,"code",29),e(636,`customAction: PoProgressAction = {
  label: 'Baixar',
  icon: 'an an-download',
  type: 'default',
  visible: true
};

onCustomActionClick(file: PoUploadFile) {
  console.log(\`A\xE7\xE3o personalizada clicada para o arquivo: \${file.name}\`);
  // L\xF3gica para download do arquivo
  this.downloadFile(file);
}

downloadFile(file: PoUploadFile) {
  // Exemplo de download
  console.log(\`Iniciando o download do arquivo: \${file.name}\`);
}
`),t()()()(),n(637,"tr",14)(638,"td",15)(639,"div",23)(640,"span",24),e(641," p-custom-modal-actions"),o(642,"br"),t()()(),n(643,"td",19)(644,"code",30),e(645,"Array<PoModalAction>"),t()(),n(646,"td",21),e(647,"-"),t(),n(648,"td",22)(649,"em")(650,"strong"),e(651,"(opcional)"),t()(),n(652,"p"),e(653,`Define uma ou duas a\xE7\xF5es personalizadas do modal de pr\xE9-visualiza\xE7\xE3o, adicionando um bot\xE3o ou dois bot\xF5es no canto inferior direito
do modal.`),t(),n(654,"p"),e(655,"A a\xE7\xE3o deve implementar a interface "),n(656,"strong"),e(657,"PoModalAction"),t(),e(658,", permitindo configurar propriedades como:"),t(),n(659,"ul")(660,"li")(661,"code"),e(662,"label"),t(),e(663,": Texto do bot\xE3o."),t(),n(664,"li")(665,"code"),e(666,"action"),t(),e(667,": \xCDcone a ser exibido no bot\xE3o."),t(),n(668,"li")(669,"code"),e(670,"danger"),t(),e(671,": Define a propriedade "),n(672,"code"),e(673,"p-danger"),t(),e(674," do bot\xE3o."),t(),n(675,"li")(676,"code"),e(677,"disabled"),t(),e(678,": Indica se o bot\xE3o deve estar desabilitado."),t(),n(679,"li")(680,"code"),e(681,"visible"),t(),e(682,": Indica se o bot\xE3o deve estar vis\xEDvel."),t()(),n(683,"p")(684,"strong"),e(685,"Exemplo de uso:"),t()(),n(686,"pre")(687,"code",28),e(688,`<po-upload
 [p-custom-modal-actions]="customActions"
</po-upload>
`),t()(),n(689,"pre")(690,"code",29),e(691,`customActions:  Array<PoModalAction> = [
 { label: 'Confirmar', action: this.confirmModal.bind(this) },
 { label: 'Cancelar', action: this.closeModal.bind(this) }
];
`),t()()()(),n(692,"tr",14)(693,"td",15)(694,"div",23)(695,"span",24),e(696," p-directory"),o(697,"br"),t()()(),n(698,"td",19)(699,"code",26),e(700,"boolean"),t()(),n(701,"td",21)(702,"p")(703,"code"),e(704,"false"),t()()(),n(705,"td",22)(706,"em")(707,"strong"),e(708,"(opcional)"),t()(),n(709,"p"),e(710,"Permite a sele\xE7\xE3o de diret\xF3rios contendo um ou mais arquivos para envio."),t(),n(711,"blockquote")(712,"p"),e(713,"A habilita\xE7\xE3o desta propriedade se restringe apenas \xE0 sele\xE7\xE3o de diret\xF3rios."),t()(),n(714,"blockquote")(715,"p"),e(716,"Defini\xE7\xE3o n\xE3o suportada pelo browser "),n(717,"strong"),e(718,"Internet Explorer"),t(),e(719,", todavia ser\xE1 poss\xEDvel a sele\xE7\xE3o de arquivos padr\xE3o."),t()()()(),n(720,"tr",14)(721,"td",15)(722,"div",23)(723,"span",24),e(724," p-disabled"),o(725,"br"),t()()(),n(726,"td",19)(727,"code",26),e(728,"boolean"),t()(),n(729,"td",21),e(730,"-"),t(),n(731,"td",22)(732,"em")(733,"strong"),e(734,"(opcional)"),t()(),n(735,"p"),e(736,"Indica que o campo ser\xE1 desabilitado."),t()()(),n(737,"tr",14)(738,"td",15)(739,"div",23)(740,"span",24),e(741," p-disabled-remove-file"),o(742,"br"),t()()(),n(743,"td",19)(744,"code",26),e(745,"boolean"),t()(),n(746,"td",21)(747,"p")(748,"code"),e(749,"false"),t()()(),n(750,"td",22)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),n(754,"p"),e(755,"Desabilita bot\xE3o de remover o(s) arquivo(s) selecionado(s)."),t()()(),n(756,"tr",14)(757,"td",15)(758,"div",23)(759,"span",24),e(760," p-drag-drop"),o(761,"br"),t()()(),n(762,"td",19)(763,"code",26),e(764,"boolean"),t()(),n(765,"td",21)(766,"p")(767,"code"),e(768,"false"),t()()(),n(769,"td",22)(770,"em")(771,"strong"),e(772,"(opcional)"),t()(),n(773,"p"),e(774,`Exibe a \xE1rea onde \xE9 poss\xEDvel arrastar e selecionar os arquivos. Quando estiver definida, omite o bot\xE3o para sele\xE7\xE3o de arquivos
automaticamente.`),t(),n(775,"blockquote")(776,"p"),e(777,"Recomendamos utilizar apenas um "),n(778,"code"),e(779,"po-upload"),t(),e(780," com esta funcionalidade por tela."),t()()()(),n(781,"tr",14)(782,"td",15)(783,"div",23)(784,"span",24),e(785," p-drag-drop-height"),o(786,"br"),t()()(),n(787,"td",19)(788,"code",31),e(789,"number"),t()(),n(790,"td",21)(791,"p")(792,"code"),e(793,"320"),t()()(),n(794,"td",22)(795,"em")(796,"strong"),e(797,"(opcional)"),t()(),n(798,"p"),e(799,"Define em "),n(800,"em"),e(801,"pixels"),t(),e(802," a altura da \xE1rea onde podem ser arrastados os arquivos. A altura m\xEDnima aceita \xE9 "),n(803,"code"),e(804,"160px"),t(),e(805,"."),t(),n(806,"blockquote")(807,"p"),e(808,"Esta propriedade funciona somente se a propriedade "),n(809,"code"),e(810,"p-drag-drop"),t(),e(811," estiver habilitada."),t()()()(),n(812,"tr",14)(813,"td",15)(814,"div",23)(815,"span",24),e(816," p-restrictions"),o(817,"br"),t()()(),n(818,"td",19)(819,"code",32),e(820,"PoUploadFileRestrictions"),t()(),n(821,"td",21),e(822,"-"),t(),n(823,"td",22)(824,"em")(825,"strong"),e(826,"(opcional)"),t()(),n(827,"p"),e(828,"Objeto que segue a defini\xE7\xE3o da interface "),n(829,"code"),e(830,"PoUploadFileRestrictions"),t(),e(831,`,
que possibilita definir tamanho m\xE1ximo/m\xEDnimo e extens\xE3o dos arquivos permitidos.`),t()()(),n(832,"tr",14)(833,"td",15)(834,"div",23)(835,"span",24),e(836," p-form-field"),o(837,"br"),t()()(),n(838,"td",19)(839,"code",25),e(840,"string"),t()(),n(841,"td",21)(842,"p")(843,"code"),e(844,"files"),t()()(),n(845,"td",22)(846,"em")(847,"strong"),e(848,"(opcional)"),t()(),n(849,"p"),e(850,"Nome do campo de formul\xE1rio que ser\xE1 enviado para o servi\xE7o informado na propriedade "),n(851,"code"),e(852,"p-url"),t(),e(853,"."),t()()(),n(854,"tr",14)(855,"td",15)(856,"div",23)(857,"span",24),e(858," p-headers"),o(859,"br"),t()()(),n(860,"td",19)(861,"code",33),e(862,"{ [name: string]: string "),t(),n(863,"code",34),e(864,` Array<string>;
}`),t()(),n(865,"td",21),e(866,"-"),t(),n(867,"td",22)(868,"p"),e(869,"Objeto que cont\xE9m os cabe\xE7alhos que ser\xE1 enviado na requisi\xE7\xE3o dos arquivos."),t()()(),n(870,"tr",14)(871,"td",15)(872,"div",23)(873,"span",24),e(874," p-help"),o(875,"br"),t()()(),n(876,"td",19)(877,"code",25),e(878,"string"),t()(),n(879,"td",21),e(880,"-"),t(),n(881,"td",22)(882,"em")(883,"strong"),e(884,"(opcional)"),t()(),n(885,"p"),e(886,"Texto de apoio para o campo."),t()()(),n(887,"tr",14)(888,"td",15)(889,"div",23)(890,"span",24),e(891," p-hide-restrictions-info"),o(892,"br"),t()()(),n(893,"td",19)(894,"code",26),e(895,"boolean"),t()(),n(896,"td",21)(897,"p")(898,"code"),e(899,"false"),t()()(),n(900,"td",22)(901,"em")(902,"strong"),e(903,"(opcional)"),t()(),n(904,"p"),e(905,"Oculta visualmente as informa\xE7\xF5es de restri\xE7\xF5es para o upload."),t()()(),n(906,"tr",14)(907,"td",15)(908,"div",23)(909,"span",24),e(910," p-hide-select-button"),o(911,"br"),t()()(),n(912,"td",19)(913,"code",26),e(914,"boolean"),t()(),n(915,"td",21)(916,"p")(917,"code"),e(918,"false"),t()()(),n(919,"td",22)(920,"em")(921,"strong"),e(922,"(opcional)"),t()(),n(923,"p"),e(924,"Omite o bot\xE3o de sele\xE7\xE3o de arquivos."),t(),n(925,"blockquote")(926,"p"),e(927,"Caso o valor definido seja "),n(928,"code"),e(929,"true"),t(),e(930,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(931,"code"),e(932,"selectFiles()"),t(),e(933," para sele\xE7\xE3o de arquivos."),t()()()(),n(934,"tr",14)(935,"td",15)(936,"div",23)(937,"span",24),e(938," p-hide-send-button"),o(939,"br"),t()()(),n(940,"td",19)(941,"code",26),e(942,"boolean"),t()(),n(943,"td",21)(944,"p")(945,"code"),e(946,"false"),t()()(),n(947,"td",22)(948,"em")(949,"strong"),e(950,"(opcional)"),t()(),n(951,"p"),e(952,"Omite o bot\xE3o de envio de arquivos."),t(),n(953,"blockquote")(954,"p"),e(955,"Caso o valor definido seja "),n(956,"code"),e(957,"true"),t(),e(958,`, caber\xE1 ao desenvolvedor a responsabilidade
pela chamada do m\xE9todo `),n(959,"code"),e(960,"sendFiles()"),t(),e(961," para envio do(s) arquivo(s) selecionado(s)."),t()()()(),n(962,"tr",14)(963,"td",15)(964,"div",23)(965,"span",24),e(966," p-multiple"),o(967,"br"),t()()(),n(968,"td",19)(969,"code",26),e(970,"boolean"),t()(),n(971,"td",21),e(972,"-"),t(),n(973,"td",22)(974,"em")(975,"strong"),e(976,"(opcional)"),t()(),n(977,"p"),e(978,"Define se pode selecionar mais de um arquivo."),t(),n(979,"blockquote")(980,"p"),e(981,"Se utilizada a "),n(982,"code"),e(983,"p-directory"),t(),e(984,", habilita-se automaticamente esta propriedade."),t()()()(),n(985,"tr",14)(986,"td",15)(987,"div",16)(988,"span",17),e(989," (p-keydown)"),o(990,"br"),t()()(),n(991,"td",19)(992,"code",20),e(993,"EventEmitter"),t()(),n(994,"td",21),e(995,"-"),t(),n(996,"td",22)(997,"em")(998,"strong"),e(999,"(opcional)"),t()(),n(1e3,"p"),e(1001,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no componente.
Retorna um objeto `),n(1002,"code"),e(1003,"KeyboardEvent"),t(),e(1004," com informa\xE7\xF5es sobre a tecla."),t()()(),n(1005,"tr",14)(1006,"td",15)(1007,"div",23)(1008,"span",24),e(1009," p-label"),o(1010,"br"),t()()(),n(1011,"td",19)(1012,"code",25),e(1013,"string"),t()(),n(1014,"td",21),e(1015,"-"),t(),n(1016,"td",22)(1017,"em")(1018,"strong"),e(1019,"(opcional)"),t()(),n(1020,"p"),e(1021,"R\xF3tulo do campo."),t()()(),n(1022,"tr",14)(1023,"td",15)(1024,"div",23)(1025,"span",24),e(1026," p-label-text-wrap"),o(1027,"br"),t()()(),n(1028,"td",19)(1029,"code",26),e(1030,"boolean"),t()(),n(1031,"td",21)(1032,"p")(1033,"code"),e(1034,"false"),t()()(),n(1035,"td",22)(1036,"em")(1037,"strong"),e(1038,"(opcional)"),t()(),n(1039,"p"),e(1040,"Habilita a quebra autom\xE1tica do texto da propriedade "),n(1041,"code"),e(1042,"p-label"),t(),e(1043,". Quando "),n(1044,"code"),e(1045,"p-label-text-wrap"),t(),e(1046,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),n(1047,"tr",14)(1048,"td",15)(1049,"div",23)(1050,"span",24),e(1051," p-literals"),o(1052,"br"),t()()(),n(1053,"td",19)(1054,"code",35),e(1055,"PoUploadLiterals"),t()(),n(1056,"td",21),e(1057,"-"),t(),n(1058,"td",22)(1059,"em")(1060,"strong"),e(1061,"(opcional)"),t()(),n(1062,"p"),e(1063,"Objeto com as literais usadas no "),n(1064,"code"),e(1065,"po-upload"),t(),e(1066,"."),t(),n(1067,"p"),e(1068,"Existem duas maneiras de customizar o componente:"),t(),n(1069,"ul")(1070,"li"),e(1071,"passando um objeto implementando a interface "),n(1072,"code"),e(1073,"PoUploadLiterals"),t(),e(1074," com todas as literais dispon\xEDveis;"),t(),n(1075,"li"),e(1076,"passando apenas as literais que deseja customizar:"),n(1077,"pre")(1078,"code"),e(1079,`const customLiterals: PoUploadLiterals = {
  folders: 'Pastas',
  selectFile: 'Buscar arquivo',
  startSending: 'Enviar'
};
`),t()()()(),n(1080,"p"),e(1081,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente:"),t(),n(1082,"pre")(1083,"code"),e(1084,`<po-upload
  [p-literals]="customLiterals">
</po-upload>
`),t()(),n(1085,"blockquote")(1086,"p"),e(1087,"O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do "),n(1088,"em"),e(1089,"browser"),t(),e(1090," (pt, en, es, ru)."),t()()()(),n(1091,"tr",14)(1092,"td",15)(1093,"div",23)(1094,"span",24),e(1095," p-loading"),o(1096,"br"),t()()(),n(1097,"td",19)(1098,"code",26),e(1099,"boolean"),t()(),n(1100,"td",21)(1101,"p")(1102,"code"),e(1103,"false"),t()()(),n(1104,"td",22)(1105,"em")(1106,"strong"),e(1107,"(opcional)"),t()(),n(1108,"p"),e(1109,"Exibe um \xEDcone de carregamento no bot\xE3o "),n(1110,"code"),e(1111,"Selecionar arquivo"),t(),e(1112,", \xE0 esquerda do texto, sinalizando que uma opera\xE7\xE3o est\xE1\xA0em andamento."),t(),n(1113,"blockquote")(1114,"p"),e(1115,"Incompat\xEDvel com "),n(1116,"code"),e(1117,"p-drag-drop"),t(),e(1118," e "),n(1119,"code"),e(1120,"p-hide-select-button"),t(),e(1121,", pois o estado de loading depende da exibi\xE7\xE3o do bot\xE3o "),n(1122,"code"),e(1123,"Selecionar arquivo"),t(),e(1124,"."),t()()()(),n(1125,"tr",14)(1126,"td",15)(1127,"div",23)(1128,"span",24),e(1129," name"),o(1130,"br"),t()()(),n(1131,"td",19)(1132,"code",25),e(1133,"string"),t()(),n(1134,"td",21),e(1135,"-"),t(),n(1136,"td",22)(1137,"p"),e(1138,"Define o valor do atributo "),n(1139,"code"),e(1140,"name"),t(),e(1141," do componente."),t()()(),n(1142,"tr",14)(1143,"td",15)(1144,"div",16)(1145,"span",17),e(1146," (ngModelChange)"),o(1147,"br"),t()()(),n(1148,"td",19)(1149,"code",20),e(1150,"EventEmitter"),t()(),n(1151,"td",21),e(1152,"-"),t(),n(1153,"td",22)(1154,"em")(1155,"strong"),e(1156,"(opcional)"),t()(),n(1157,"p"),e(1158,"Fun\xE7\xE3o para atualizar o ngModel do componente, necess\xE1rio quando n\xE3o for utilizado dentro da "),n(1159,"em"),e(1160,"tag"),t(),n(1161,"code"),e(1162,"form"),t(),e(1163,"."),t(),n(1164,"p"),e(1165,"Na vers\xE3o 12.2.0 do Angular a verifica\xE7\xE3o "),n(1166,"code"),e(1167,"strictTemplates"),t(),e(1168,` vem true como default. Portanto, para utilizar
two-way binding no componente deve se utilizar da seguinte forma:`),t(),n(1169,"pre")(1170,"code"),e(1171,`<po-upload ... [ngModel]="UploadModel" (ngModelChange)="uploadModel = $event"> </po-upload>
`),t()()()(),n(1172,"tr",14)(1173,"td",15)(1174,"div",16)(1175,"span",17),e(1176," (p-cancel)"),o(1177,"br"),t()()(),n(1178,"td",19)(1179,"code",20),e(1180,"EventEmitter"),t()(),n(1181,"td",21),e(1182,"-"),t(),n(1183,"td",22)(1184,"em")(1185,"strong"),e(1186,"(opcional)"),t()(),n(1187,"p"),e(1188,"Evento ser\xE1 disparado ao clicar no \xEDcone de fechar."),t(),n(1189,"blockquote")(1190,"p"),e(1191,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1192,"tr",14)(1193,"td",15)(1194,"div",16)(1195,"span",17),e(1196," (p-error)"),o(1197,"br"),t()()(),n(1198,"td",19)(1199,"code",20),e(1200,"EventEmitter"),t()(),n(1201,"td",21),e(1202,"-"),t(),n(1203,"td",22)(1204,"em")(1205,"strong"),e(1206,"(opcional)"),t()(),n(1207,"p"),e(1208,"Evento ser\xE1 disparado quando ocorrer algum erro no envio do arquivo."),t(),n(1209,"blockquote")(1210,"p"),e(1211,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(1212,"code"),e(1213,"HttpErrorResponse"),t(),e(1214,"."),t()()()(),n(1215,"tr",14)(1216,"td",15)(1217,"div",16)(1218,"span",17),e(1219," (p-open-modal-preview)"),o(1220,"br"),t()()(),n(1221,"td",19)(1222,"code",20),e(1223,"EventEmitter"),t()(),n(1224,"td",21),e(1225,"-"),t(),n(1226,"td",22)(1227,"em")(1228,"strong"),e(1229,"(opcional)"),t()(),n(1230,"p"),e(1231,"Evento ser\xE1 disparado ao abrir o modal de pr\xE9-visualiza\xE7\xE3o."),t(),n(1232,"blockquote")(1233,"p"),e(1234,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1235,"tr",14)(1236,"td",15)(1237,"div",16)(1238,"span",17),e(1239," (p-remove)"),o(1240,"br"),t()()(),n(1241,"td",19)(1242,"code",20),e(1243,"EventEmitter"),t()(),n(1244,"td",21),e(1245,"-"),t(),n(1246,"td",22)(1247,"em")(1248,"strong"),e(1249,"(opcional)"),t()(),n(1250,"p"),e(1251,"Evento ser\xE1 disparado ao clicar no \xEDcone de remover."),t(),n(1252,"blockquote")(1253,"p"),e(1254,"Por par\xE2metro ser\xE1 passado o objeto do arquivo."),t()()()(),n(1255,"tr",14)(1256,"td",15)(1257,"div",16)(1258,"span",17),e(1259," (p-success)"),o(1260,"br"),t()()(),n(1261,"td",19)(1262,"code",20),e(1263,"EventEmitter"),t()(),n(1264,"td",21),e(1265,"-"),t(),n(1266,"td",22)(1267,"em")(1268,"strong"),e(1269,"(opcional)"),t()(),n(1270,"p"),e(1271,"Evento ser\xE1 disparado quando o envio do arquivo for realizado com sucesso."),t(),n(1272,"blockquote")(1273,"p"),e(1274,"Por par\xE2metro ser\xE1 passado o objeto do retorno que \xE9 do tipo "),n(1275,"code"),e(1276,"HttpResponse"),t(),e(1277,"."),t()()()(),n(1278,"tr",14)(1279,"td",15)(1280,"div",16)(1281,"span",17),e(1282," (p-upload)"),o(1283,"br"),t()()(),n(1284,"td",19)(1285,"code",20),e(1286,"EventEmitter"),t()(),n(1287,"td",21),e(1288,"-"),t(),n(1289,"td",22)(1290,"em")(1291,"strong"),e(1292,"(opcional)"),t()(),n(1293,"p"),e(1294,`Fun\xE7\xE3o que ser\xE1 executada no momento de realizar o envio do arquivo,
onde ser\xE1 poss\xEDvel adicionar informa\xE7\xF5es ao par\xE2metro que ser\xE1 enviado na requisi\xE7\xE3o.
\xC9 passado por par\xE2metro um objeto com o arquivo e as propriedades data e extraFormData,
que ser\xE3o enviadas em conjunto com o arquivo na requisi\xE7\xE3o, por exemplo:`),t(),n(1295,"blockquote")(1296,"p"),e(1297,"data, nesta propriedade pode ser informado algum dado"),t()(),n(1298,"pre")(1299,"code"),e(1300,`event.data = {id: 'id do usu\xE1rio'};
`),t()(),n(1301,"blockquote")(1302,"p"),e(1303,`extraFormData, nesta propriedade pode ser informado algum dado solicitado pela API
que n\xE3o possa estar no objeto `),n(1304,"code"),e(1305,"data"),t(),e(1306,`, assim o conte\xFAdo sar\xE1 extra\xEDdo do objeto e
enviado como par\xE2metro`),t()(),n(1307,"pre")(1308,"code"),e(1309,`event.extraFormData = {id: 'id do usu\xE1rio'};
`),t()()()(),n(1310,"tr",14)(1311,"td",15)(1312,"div",23)(1313,"span",24),e(1314," p-optional"),o(1315,"br"),t()()(),n(1316,"td",19)(1317,"code",26),e(1318,"boolean"),t()(),n(1319,"td",21)(1320,"p")(1321,"code"),e(1322,"false"),t()()(),n(1323,"td",22)(1324,"em")(1325,"strong"),e(1326,"(opcional)"),t()(),n(1327,"p"),e(1328,"Define se a indica\xE7\xE3o de campo opcional ser\xE1 exibida."),t(),n(1329,"blockquote")(1330,"p"),e(1331,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1332,"ul")(1333,"li"),e(1334,"O campo conter "),n(1335,"code"),e(1336,"p-required"),t(),e(1337,";"),t(),n(1338,"li"),e(1339,"N\xE3o possuir "),n(1340,"code"),e(1341,"p-help"),t(),e(1342," e/ou "),n(1343,"code"),e(1344,"p-label"),t(),e(1345,"."),t()()()(),n(1346,"tr",14)(1347,"td",15)(1348,"div",23)(1349,"span",24),e(1350," p-helper"),o(1351,"br"),t()()(),n(1352,"td",19)(1353,"code",36),e(1354,"PoHelperOptions "),t(),n(1355,"code",25),e(1356," string"),t()(),n(1357,"td",21),e(1358,"-"),t(),n(1359,"td",22)(1360,"em")(1361,"strong"),e(1362,"(opcional)"),t()(),n(1363,"p"),e(1364,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label quando a propriedade "),n(1365,"code"),e(1366,"p-label"),t(),e(1367," for definida, ou, ao lado do componente na aus\xEAncia da propriedade "),n(1368,"code"),e(1369,"p-label"),t(),e(1370,"."),t(),n(1371,"blockquote")(1372,"p"),e(1373,"Para mais informa\xE7\xF5es acesse: "),n(1374,"a",37),e(1375,"https://po-ui.io/documentation/po-helper"),t(),e(1376,"."),t()(),n(1377,"blockquote")(1378,"p"),e(1379,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),n(1380,"code"),e(1381,"p-additional-help-tooltip"),t(),e(1382," e "),n(1383,"code"),e(1384,"p-additional-help"),t(),e(1385,") ser\xE1 ignorado."),t()()()(),n(1386,"tr",14)(1387,"td",15)(1388,"div",23)(1389,"span",24),e(1390," p-required"),o(1391,"br"),t()()(),n(1392,"td",19)(1393,"code",26),e(1394,"boolean"),t()(),n(1395,"td",21)(1396,"p")(1397,"code"),e(1398,"false"),t()()(),n(1399,"td",22)(1400,"em")(1401,"strong"),e(1402,"(opcional)"),t()(),n(1403,"p"),e(1404,"Define que o campo ser\xE1 obrigat\xF3rio."),t()()(),n(1405,"tr",14)(1406,"td",15)(1407,"div",23)(1408,"span",24),e(1409," p-required-url"),o(1410,"br"),t()()(),n(1411,"td",19)(1412,"code",26),e(1413,"boolean"),t()(),n(1414,"td",21)(1415,"p")(1416,"code"),e(1417,"true"),t()()(),n(1418,"td",22)(1419,"em")(1420,"strong"),e(1421,"(opcional)"),t()(),n(1422,"p"),e(1423,"Define se a propriedade "),n(1424,"code"),e(1425,"p-url"),t(),e(1426," \xE9 obrigat\xF3ria."),t(),n(1427,"p"),e(1428,"Caso a propriedade seja definida como "),n(1429,"code"),e(1430,"false"),t(),e(1431,":"),t(),n(1432,"ul")(1433,"li"),e(1434,'o bot\xE3o de "Selecionar arquivo" ficar\xE1 habilitado mesmo sem a propriedade '),n(1435,"code"),e(1436,"p-url"),t(),e(1437," definida."),t(),n(1438,"li"),e(1439,'o bot\xE3o "Iniciar envio" ficar\xE1 oculto at\xE9 que a propriedade '),n(1440,"code"),e(1441,"p-url"),t(),e(1442," seja definida."),t()(),n(1443,"blockquote")(1444,"p"),e(1445,"Se utilizada com a propriedade "),n(1446,"code"),e(1447,"p-auto-upload"),t(),e(1448," definida como "),n(1449,"code"),e(1450,"true"),t(),e(1451," ser\xE1 necess\xE1rio definir a propriedade "),n(1452,"code"),e(1453,"p-url"),t(),e(1454,"."),t()()()(),n(1455,"tr",14)(1456,"td",15)(1457,"div",23)(1458,"span",24),e(1459," p-show-required"),o(1460,"br"),t()()(),n(1461,"td",19)(1462,"code",26),e(1463,"boolean"),t()(),n(1464,"td",21),e(1465,"-"),t(),n(1466,"td",22)(1467,"p"),e(1468,"Define se a indica\xE7\xE3o de campo obrigat\xF3rio ser\xE1 exibida."),t(),n(1469,"blockquote")(1470,"p"),e(1471,"N\xE3o ser\xE1 exibida a indica\xE7\xE3o se:"),t()(),n(1472,"ul")(1473,"li"),e(1474,"N\xE3o possuir "),n(1475,"code"),e(1476,"p-help"),t(),e(1477," e/ou "),n(1478,"code"),e(1479,"p-label"),t(),e(1480,"."),t()()()(),n(1481,"tr",14)(1482,"td",15)(1483,"div",23)(1484,"span",24),e(1485," p-show-thumbnail"),o(1486,"br"),t()()(),n(1487,"td",19)(1488,"code",26),e(1489,"boolean"),t()(),n(1490,"td",21)(1491,"p")(1492,"code"),e(1493,"true"),t()()(),n(1494,"td",22)(1495,"em")(1496,"strong"),e(1497,"(opcional)"),t()(),n(1498,"p"),e(1499,"Exibe a pr\xE9-visualiza\xE7\xE3o de imagens ao anex\xE1-las."),t(),n(1500,"blockquote")(1501,"p"),e(1502,"Propriedade funciona apenas em arquivos de formato de imagem ("),n(1503,"code"),e(1504,".png"),t(),e(1505,", "),n(1506,"code"),e(1507,".jpg"),t(),e(1508,", "),n(1509,"code"),e(1510,".jpeg"),t(),e(1511," e "),n(1512,"code"),e(1513,".gif"),t(),e(1514,`).
Ser\xE1 ignorada em outros tipos de arquivo.`),t()()()(),n(1515,"tr",14)(1516,"td",15)(1517,"div",23)(1518,"span",24),e(1519," p-size"),o(1520,"br"),t()()(),n(1521,"td",19)(1522,"code",25),e(1523,"string"),t()(),n(1524,"td",21)(1525,"p")(1526,"code"),e(1527,"medium"),t()()(),n(1528,"td",22)(1529,"em")(1530,"strong"),e(1531,"(opcional)"),t()(),n(1532,"p"),e(1533,"Define o tamanho e as a\xE7\xF5es do componente:"),t(),n(1534,"ul")(1535,"li")(1536,"code"),e(1537,"small"),t(),e(1538,": altura do button como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),n(1539,"li")(1540,"code"),e(1541,"medium"),t(),e(1542,": altura do button como 44px."),t()(),n(1543,"blockquote")(1544,"p"),e(1545,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),n(1546,"code"),e(1547,"medium"),t(),e(1548,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),n(1549,"a",38),e(1550,"po-theme"),t(),e(1551,"."),t()()()(),n(1552,"tr",14)(1553,"td",15)(1554,"div",23)(1555,"span",24),e(1556," p-url"),o(1557,"br"),t()()(),n(1558,"td",19)(1559,"code",25),e(1560,"string"),t()(),n(1561,"td",21),e(1562,"-"),t(),n(1563,"td",22)(1564,"p"),e(1565,"URL que deve ser feita a requisi\xE7\xE3o com os arquivos selecionados."),t()()()(),n(1566,"h3",10),e(1567,"M\xE9todos"),t(),n(1568,"table",39)(1569,"tr",14)(1570,"th",40)(1571,"div",23)(1572,"h4")(1573,"span",24),e(1574," clear "),t()()()()(),n(1575,"tr",22)(1576,"td",22)(1577,"p"),e(1578,"M\xE9todo respons\xE1vel por "),n(1579,"strong"),e(1580,"limpar"),t(),e(1581," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1582,"br"),n(1583,"table",39)(1584,"tr",14)(1585,"th",40)(1586,"div",23)(1587,"h4")(1588,"span",24),e(1589," focus "),t()()()()(),n(1590,"tr",22)(1591,"td",22)(1592,"p"),e(1593,"Fun\xE7\xE3o que atribui foco ao componente."),t(),n(1594,"p"),e(1595,"Para utiliz\xE1-la \xE9 necess\xE1rio ter a inst\xE2ncia do componente no DOM, podendo ser utilizado o ViewChild da seguinte forma:"),t(),n(1596,"pre")(1597,"code"),e(1598,`import { PoUploadComponent } from '@po-ui/ng-components';

...

@ViewChild(PoUploadComponent, { static: true }) upload: PoUploadComponent;

focusUpload() {
  this.upload.focus();
}
`),t()()()()(),o(1599,"br"),n(1600,"table",39)(1601,"tr",14)(1602,"th",40)(1603,"div",23)(1604,"h4")(1605,"span",24),e(1606," closeModal "),t()()()()(),n(1607,"tr",22)(1608,"td",22)(1609,"p"),e(1610,"M\xE9todo respons\xE1vel por fechar o modal."),t()()()(),o(1611,"br"),n(1612,"table",39)(1613,"tr",14)(1614,"th",40)(1615,"div",23)(1616,"h4")(1617,"span",24),e(1618," selectFiles "),t()()()()(),n(1619,"tr",22)(1620,"td",22)(1621,"p"),e(1622,"M\xE9todo respons\xE1vel por "),n(1623,"strong"),e(1624,"abrir"),t(),e(1625," a janela para sele\xE7\xE3o de arquivo(s)."),t()()()(),o(1626,"br"),n(1627,"table",39)(1628,"tr",14)(1629,"th",40)(1630,"div",23)(1631,"h4")(1632,"span",24),e(1633," sendFiles "),t()()()()(),n(1634,"tr",22)(1635,"td",22)(1636,"p"),e(1637,"M\xE9todo respons\xE1vel por "),n(1638,"strong"),e(1639,"enviar"),t(),e(1640," o(s) arquivo(s) selecionado(s)."),t()()()(),o(1641,"br"),n(1642,"table",39)(1643,"tr",14)(1644,"th",40)(1645,"div",23)(1646,"h4")(1647,"span",24),e(1648," showAdditionalHelp "),t()()()()(),n(1649,"tr",22)(1650,"td",22)(1651,"p"),e(1652,"M\xE9todo que exibe "),n(1653,"code"),e(1654,"p-helper"),t(),e(1655," ou executa a a\xE7\xE3o definida em "),n(1656,"code"),e(1657,"p-helper{eventOnClick}"),t(),e(1658," ou em "),n(1659,"code"),e(1660,"p-additionalHelp"),t(),e(1661,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),n(1662,"code"),e(1663,"p-keydown"),t(),e(1664,"."),t(),n(1665,"blockquote")(1666,"p"),e(1667,"Exibe ou oculta o conte\xFAdo do componente "),n(1668,"code"),e(1669,"po-helper"),t(),e(1670," quando o componente estiver com foco."),t()(),n(1671,"pre")(1672,"code"),e(1673,`//Exemplo com p-label e p-helper
<po-upload
 #upload
 ...
 p-label="Label do upload"
 [p-helper]="helperOptions"
 (p-keydown)="onKeyDown($event, upload)"
></po-upload>
`),t()(),n(1674,"pre")(1675,"code"),e(1676,`...
onKeyDown(event: KeyboardEvent, inp: PoUploadComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}
`),t()()()()(),o(1677,"br"),n(1678,"h3"),e(1679,"Interfaces"),t(),n(1680,"h4",41)(1681,"code",5),e(1682,"PoUploadFileRestrictions"),t()(),n(1683,"div",2)(1684,"p"),e(1685,`Interface que define as restri\xE7\xF5es dos arquivos a serem selecionados com base em regras predefinidas
para o seu tamanho, extens\xE3o e quantidade.`),t()(),n(1686,"h4",10),e(1687,"Propriedades"),t(),n(1688,"table",11)(1689,"tr",12)(1690,"th",13),e(1691,"Nome"),t(),n(1692,"th",13),e(1693,"Tipo"),t(),n(1694,"th",13),e(1695,"Descri\xE7\xE3o"),t()(),n(1696,"tr",14)(1697,"td",15)(1698,"div",23)(1699,"span",24),e(1700," allowedExtensions"),o(1701,"br"),t()()(),n(1702,"td",19)(1703,"code",42),e(1704,"Array<string>"),t()(),n(1705,"td",22)(1706,"em")(1707,"strong"),e(1708,"(opcional)"),t()(),n(1709,"p"),e(1710,"Extens\xF5es permitidas de arquivos que ser\xE3o enviados ao servidor, devendo ser informada uma cole\xE7\xE3o de extens\xF5es, por exemplo:"),t(),n(1711,"pre")(1712,"code"),e(1713,`allowedExtensions = ['.png', '.jpg', '.pdf'];
`),t()()()(),n(1714,"tr",14)(1715,"td",15)(1716,"div",23)(1717,"span",24),e(1718," maxFileSize"),o(1719,"br"),t()()(),n(1720,"td",19)(1721,"code",31),e(1722,"number"),t()(),n(1723,"td",22)(1724,"em")(1725,"strong"),e(1726,"(opcional)"),t()(),n(1727,"p"),e(1728,"Tamanho m\xE1ximo do arquivo a ser enviado ao servidor."),t(),n(1729,"p"),e(1730,"Deve ser informado um valor em "),n(1731,"em"),e(1732,"bytes"),t(),e(1733,", por exemplo: "),n(1734,"code"),e(1735,"31457280"),t(),e(1736," (30MB)."),t(),n(1737,"blockquote")(1738,"p"),e(1739,"Por padr\xE3o o valor \xE9 "),n(1740,"code"),e(1741,"30 MB"),t(),e(1742,"."),t()()()(),n(1743,"tr",14)(1744,"td",15)(1745,"div",23)(1746,"span",24),e(1747," maxFiles"),o(1748,"br"),t()()(),n(1749,"td",19)(1750,"code",31),e(1751,"number"),t()(),n(1752,"td",22)(1753,"em")(1754,"strong"),e(1755,"(opcional)"),t()(),n(1756,"p"),e(1757,"Quantidade m\xE1xima de arquivos para o "),n(1758,"em"),e(1759,"upload"),t(),e(1760,"."),t(),n(1761,"blockquote")(1762,"p"),e(1763,"Esta propriedade ser\xE1 v\xE1lida somente se a propriedade "),n(1764,"code"),e(1765,"p-multiple"),t(),e(1766," estiver habilitada e seu valor for maior do que zero."),t()()()(),n(1767,"tr",14)(1768,"td",15)(1769,"div",23)(1770,"span",24),e(1771," minFileSize"),o(1772,"br"),t()()(),n(1773,"td",19)(1774,"code",31),e(1775,"number"),t()(),n(1776,"td",22)(1777,"em")(1778,"strong"),e(1779,"(opcional)"),t()(),n(1780,"p"),e(1781,"Tamanho m\xEDnimo em "),n(1782,"em"),e(1783,"bytes"),t(),e(1784," do arquivo que ser\xE1 enviado ao servidor."),t(),n(1785,"blockquote")(1786,"p"),e(1787,"Por padr\xE3o o valor \xE9 "),n(1788,"code"),e(1789,"0"),t(),e(1790,"."),t()()()()(),n(1791,"h4",41)(1792,"code",5),e(1793,"PoUploadLiterals"),t()(),n(1794,"div",2)(1795,"p"),e(1796,"Interface para defini\xE7\xE3o das literais usadas no "),n(1797,"code"),e(1798,"po-upload"),t(),e(1799,"."),t()(),n(1800,"h4",10),e(1801,"Propriedades"),t(),n(1802,"table",11)(1803,"tr",12)(1804,"th",13),e(1805,"Nome"),t(),n(1806,"th",13),e(1807,"Tipo"),t(),n(1808,"th",13),e(1809,"Descri\xE7\xE3o"),t()(),n(1810,"tr",14)(1811,"td",15)(1812,"div",23)(1813,"span",24),e(1814," close"),o(1815,"br"),t()()(),n(1816,"td",19)(1817,"code",25),e(1818,"string"),t()(),n(1819,"td",22)(1820,"em")(1821,"strong"),e(1822,"(opcional)"),t()(),n(1823,"p"),e(1824,"Texto do leitor de tela ao focar no \xEDcone de fechar."),t()()(),n(1825,"tr",14)(1826,"td",15)(1827,"div",23)(1828,"span",24),e(1829," continue"),o(1830,"br"),t()()(),n(1831,"td",19)(1832,"code",25),e(1833,"string"),t()(),n(1834,"td",22)(1835,"em")(1836,"strong"),e(1837,"(opcional)"),t()(),n(1838,"p"),e(1839,"Texto do bot\xE3o padr\xE3o do modal de pr\xE9-visualizar."),t()()(),n(1840,"tr",14)(1841,"td",15)(1842,"div",23)(1843,"span",24),e(1844," doneText"),o(1845,"br"),t()()(),n(1846,"td",19)(1847,"code",25),e(1848,"string"),t()(),n(1849,"td",22)(1850,"em")(1851,"strong"),e(1852,"(opcional)"),t()(),n(1853,"p"),e(1854,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for de sucesso."),t()()(),n(1855,"tr",14)(1856,"td",15)(1857,"div",23)(1858,"span",24),e(1859," dragFilesHere"),o(1860,"br"),t()()(),n(1861,"td",19)(1862,"code",25),e(1863,"string"),t()(),n(1864,"td",22)(1865,"em")(1866,"strong"),e(1867,"(opcional)"),t()(),n(1868,"p"),e(1869,"Texto indicativo para a \xE1rea onde os arquivos devem ser arrastados quando utilizada a propriedade "),n(1870,"code"),e(1871,"p-drag-drop"),t(),e(1872,"."),t()()(),n(1873,"tr",14)(1874,"td",15)(1875,"div",23)(1876,"span",24),e(1877," dragFoldersHere"),o(1878,"br"),t()()(),n(1879,"td",19)(1880,"code",25),e(1881,"string"),t()(),n(1882,"td",22)(1883,"em")(1884,"strong"),e(1885,"(opcional)"),t()(),n(1886,"p"),e(1887,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser arrastados quando utilizada a propriedade "),n(1888,"code"),e(1889,"p-drag-drop"),t(),e(1890,"."),t()()(),n(1891,"tr",14)(1892,"td",15)(1893,"div",23)(1894,"span",24),e(1895," dropFilesHere"),o(1896,"br"),t()()(),n(1897,"td",19)(1898,"code",25),e(1899,"string"),t()(),n(1900,"td",22)(1901,"em")(1902,"strong"),e(1903,"(opcional)"),t()(),n(1904,"p"),e(1905,"Texto indicativo para a \xE1rea onde os arquivos devem ser soltos quando utilizada a propriedade "),n(1906,"code"),e(1907,"p-drag-drop"),t()()()(),n(1908,"tr",14)(1909,"td",15)(1910,"div",23)(1911,"span",24),e(1912," dropFoldersHere"),o(1913,"br"),t()()(),n(1914,"td",19)(1915,"code",25),e(1916,"string"),t()(),n(1917,"td",22)(1918,"em")(1919,"strong"),e(1920,"(opcional)"),t()(),n(1921,"p"),e(1922,"Texto indicativo para a \xE1rea onde os diret\xF3rios devem ser soltos quando utilizada a propriedade "),n(1923,"code"),e(1924,"p-drag-drop"),t(),e(1925,"."),t()()(),n(1926,"tr",14)(1927,"td",15)(1928,"div",23)(1929,"span",24),e(1930," errorOccurred"),o(1931,"br"),t()()(),n(1932,"td",19)(1933,"code",25),e(1934,"string"),t()(),n(1935,"td",22)(1936,"em")(1937,"strong"),e(1938,"(opcional)"),t()(),n(1939,"p"),e(1940,"Texto a ser exibido quando ocorrer erro no envio do arquivo."),t()()(),n(1941,"tr",14)(1942,"td",15)(1943,"div",23)(1944,"span",24),e(1945," files"),o(1946,"br"),t()()(),n(1947,"td",19)(1948,"code",25),e(1949,"string"),t()(),n(1950,"td",22)(1951,"em")(1952,"strong"),e(1953,"(opcional)"),t()(),n(1954,"p"),e(1955,"Par\xE2metro "),n(1956,"em"),e(1957,"files"),t(),e(1958," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1959,"em"),e(1960,"dragDrop"),t(),e(1961,"."),t()()(),n(1962,"tr",14)(1963,"td",15)(1964,"div",23)(1965,"span",24),e(1966," folders"),o(1967,"br"),t()()(),n(1968,"td",19)(1969,"code",25),e(1970,"string"),t()(),n(1971,"td",22)(1972,"em")(1973,"strong"),e(1974,"(opcional)"),t()(),n(1975,"p"),e(1976,"Par\xE2metro "),n(1977,"em"),e(1978,"folders"),t(),e(1979," para o texto de exibi\xE7\xE3o quando arrastado um arquivo para um local inv\xE1lido com a op\xE7\xE3o de "),n(1980,"em"),e(1981,"dragDrop"),t(),e(1982,"."),t()()(),n(1983,"tr",14)(1984,"td",15)(1985,"div",23)(1986,"span",24),e(1987," invalidDropArea"),o(1988,"br"),t()()(),n(1989,"td",19)(1990,"code",25),e(1991,"string"),t()(),n(1992,"td",22)(1993,"em")(1994,"strong"),e(1995,"(opcional)"),t()(),n(1996,"p"),e(1997,"Texto exibido caso o usu\xE1rio arrastar um arquivo para um local inv\xE1lido ao utilizar a op\xE7\xE3o de "),n(1998,"em"),e(1999,"dragDrop"),t(),e(2e3,"."),t()()(),n(2001,"tr",14)(2002,"td",15)(2003,"div",23)(2004,"span",24),e(2005," preview"),o(2006,"br"),t()()(),n(2007,"td",19)(2008,"code",25),e(2009,"string"),t()(),n(2010,"td",22)(2011,"em")(2012,"strong"),e(2013,"(opcional)"),t()(),n(2014,"p"),e(2015,"T\xEDtulo do modal de pr\xE9-visualizar."),t()()(),n(2016,"tr",14)(2017,"td",15)(2018,"div",23)(2019,"span",24),e(2020," selectFile"),o(2021,"br"),t()()(),n(2022,"td",19)(2023,"code",25),e(2024,"string"),t()(),n(2025,"td",22)(2026,"em")(2027,"strong"),e(2028,"(opcional)"),t()(),n(2029,"p"),e(2030,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos."),t()()(),n(2031,"tr",14)(2032,"td",15)(2033,"div",23)(2034,"span",24),e(2035," selectFiles"),o(2036,"br"),t()()(),n(2037,"td",19)(2038,"code",25),e(2039,"string"),t()(),n(2040,"td",22)(2041,"em")(2042,"strong"),e(2043,"(opcional)"),t()(),n(2044,"p"),e(2045,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(2046,"code"),e(2047,"p-multiple"),t(),e(2048,"."),t()()(),n(2049,"tr",14)(2050,"td",15)(2051,"div",23)(2052,"span",24),e(2053," selectFilesOnComputer"),o(2054,"br"),t()()(),n(2055,"td",19)(2056,"code",25),e(2057,"string"),t()(),n(2058,"td",22)(2059,"em")(2060,"strong"),e(2061,"(opcional)"),t()(),n(2062,"p"),e(2063,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de arquivos na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(2064,"em"),e(2065,"dragDrop"),t(),e(2066,"."),t()()(),n(2067,"tr",14)(2068,"td",15)(2069,"div",23)(2070,"span",24),e(2071," selectFolder"),o(2072,"br"),t()()(),n(2073,"td",19)(2074,"code",25),e(2075,"string"),t()(),n(2076,"td",22)(2077,"em")(2078,"strong"),e(2079,"(opcional)"),t()(),n(2080,"p"),e(2081,"Texto exibido no label do bot\xE3o de sele\xE7\xE3o dos arquivos ao utilizar a propriedade "),n(2082,"code"),e(2083,"p-directory"),t(),e(2084,"."),t()()(),n(2085,"tr",14)(2086,"td",15)(2087,"div",23)(2088,"span",24),e(2089," selectFolderOnComputer"),o(2090,"br"),t()()(),n(2091,"td",19)(2092,"code",25),e(2093,"string"),t()(),n(2094,"td",22)(2095,"em")(2096,"strong"),e(2097,"(opcional)"),t()(),n(2098,"p"),e(2099,`Texto utilizado para indicar a possibilidade de sele\xE7\xE3o de diret\xF3rio na \xE1rea onde podem ser arrastados os arquivos
ao utilizar a op\xE7\xE3o de `),n(2100,"em"),e(2101,"dragDrop"),t(),e(2102,"."),t()()(),n(2103,"tr",14)(2104,"td",15)(2105,"div",23)(2106,"span",24),e(2107," sentWithSuccess"),o(2108,"br"),t()()(),n(2109,"td",19)(2110,"code",25),e(2111,"string"),t()(),n(2112,"td",22)(2113,"em")(2114,"strong"),e(2115,"(opcional)"),t()(),n(2116,"p"),e(2117,"Texto a ser exibido quando o envio do arquivo for realizado com sucesso."),t()()(),n(2118,"tr",14)(2119,"td",15)(2120,"div",23)(2121,"span",24),e(2122," startSending"),o(2123,"br"),t()()(),n(2124,"td",19)(2125,"code",25),e(2126,"string"),t()(),n(2127,"td",22)(2128,"em")(2129,"strong"),e(2130,"(opcional)"),t()(),n(2131,"p"),e(2132,"Texto exibido no label do bot\xE3o para iniciar o envio dos arquivos."),t()()(),n(2133,"tr",14)(2134,"td",15)(2135,"div",23)(2136,"span",24),e(2137," thumbnail"),o(2138,"br"),t()()(),n(2139,"td",19)(2140,"code",25),e(2141,"string"),t()(),n(2142,"td",22)(2143,"em")(2144,"strong"),e(2145,"(opcional)"),t()(),n(2146,"p"),e(2147,"Texto do leitor da miniatura da imagem."),t()()(),n(2148,"tr",14)(2149,"td",15)(2150,"div",23)(2151,"span",24),e(2152," tryAgain"),o(2153,"br"),t()()(),n(2154,"td",19)(2155,"code",25),e(2156,"string"),t()(),n(2157,"td",22)(2158,"em")(2159,"strong"),e(2160,"(opcional)"),t()(),n(2161,"p"),e(2162,"Texto de Tente novamente ao ocorrer erro ao enviar."),t()()(),n(2163,"tr",14)(2164,"td",15)(2165,"div",23)(2166,"span",24),e(2167," uploadingText"),o(2168,"br"),t()()(),n(2169,"td",19)(2170,"code",25),e(2171,"string"),t()(),n(2172,"td",22)(2173,"em")(2174,"strong"),e(2175,"(opcional)"),t()(),n(2176,"p"),e(2177,"Texto a ser exibido no container de informa\xE7\xE3o quando o estado for enviando."),t()()()(),n(2178,"h4",41)(2179,"code",5),e(2180,"PoProgressAction"),t()(),n(2181,"div",2)(2182,"p"),e(2183,"Interface para as a\xE7\xF5es dos componentes po-progress e po-upload."),t()(),n(2184,"h4",10),e(2185,"Propriedades"),t(),n(2186,"table",11)(2187,"tr",12)(2188,"th",13),e(2189,"Nome"),t(),n(2190,"th",13),e(2191,"Tipo"),t(),n(2192,"th",13),e(2193,"Descri\xE7\xE3o"),t()(),n(2194,"tr",14)(2195,"td",15)(2196,"div",23)(2197,"span",24),e(2198," disabled"),o(2199,"br"),t()()(),n(2200,"td",19)(2201,"code",26),e(2202,"boolean "),t(),n(2203,"code",43),e(2204," Function"),t()(),n(2205,"td",22)(2206,"em")(2207,"strong"),e(2208,"(opcional)"),t()(),n(2209,"p"),e(2210,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),n(2211,"p"),e(2212,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),n(2213,"tr",14)(2214,"td",15)(2215,"div",23)(2216,"span",24),e(2217," icon"),o(2218,"br"),t()()(),n(2219,"td",19)(2220,"code",25),e(2221,"string "),t(),n(2222,"code",44),e(2223," TemplateRef<void>"),t()(),n(2224,"td",22)(2225,"em")(2226,"strong"),e(2227,"(opcional)"),t()(),n(2228,"p"),e(2229,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),n(2230,"p"),e(2231,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),n(2232,"a",45),e(2233,"Biblioteca de \xEDcones"),t(),e(2234,". conforme exemplo abaixo:"),t(),n(2235,"pre")(2236,"code"),e(2237,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>
`),t()(),n(2238,"p"),e(2239,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),n(2240,"pre")(2241,"code"),e(2242,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>
`),t()(),n(2243,"p"),e(2244,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),n(2245,"code"),e(2246,"TemplateRef"),t(),e(2247,`, conforme exemplo abaixo:
component.html:`),t(),n(2248,"pre")(2249,"code"),e(2250,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>
`),t()(),n(2251,"p"),e(2252,"component.ts:"),t(),n(2253,"pre")(2254,"code"),e(2255,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];
`),t()()()(),n(2256,"tr",14)(2257,"td",15)(2258,"div",23)(2259,"span",24),e(2260," label"),o(2261,"br"),t()()(),n(2262,"td",19)(2263,"code",25),e(2264,"string"),t()(),n(2265,"td",22)(2266,"em")(2267,"strong"),e(2268,"(opcional)"),t()(),n(2269,"p"),e(2270,"R\xF3tulo da a\xE7\xE3o."),t()()(),n(2271,"tr",14)(2272,"td",15)(2273,"div",23)(2274,"span",24),e(2275," type"),o(2276,"br"),t()()(),n(2277,"td",19)(2278,"code",25),e(2279,"string"),t()(),n(2280,"td",22)(2281,"em")(2282,"strong"),e(2283,"(opcional)"),t()(),n(2284,"p"),e(2285,"Define a cor do item, sendo "),n(2286,"code"),e(2287,"default"),t(),e(2288," o padr\xE3o."),t(),n(2289,"p"),e(2290,"Valores v\xE1lidos:"),t(),n(2291,"ul")(2292,"li")(2293,"code"),e(2294,"default"),t()(),n(2295,"li")(2296,"code"),e(2297,"danger"),t(),e(2298," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),n(2299,"tr",14)(2300,"td",15)(2301,"div",23)(2302,"span",24),e(2303," visible"),o(2304,"br"),t()()(),n(2305,"td",19)(2306,"code",26),e(2307,"boolean "),t(),n(2308,"code",43),e(2309," Function"),t()(),n(2310,"td",22)(2311,"em")(2312,"strong"),e(2313,"(opcional)"),t()(),n(2314,"p"),e(2315,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),n(2316,"blockquote")(2317,"p"),e(2318,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),n(2319,"p"),e(2320,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),n(2321,"ul")(2322,"li")(2323,"p"),e(2324,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),n(2325,"li")(2326,"p"),e(2327,"Informar diretamente um valor booleano."),t()()()()()()())},dependencies:[y],encapsulation:2})}return a})();var Oe=(()=>{class a{route;router;sub;hidePoWebSample=!0;samplesLength=6;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(d,r){this.route=d,this.router=r}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(d=>{let r=d.view;this.activeTab=r||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(d){this.router.navigate([],{queryParams:{view:d},queryParamsHandling:"merge"}),this.activeTab=d}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(r){return new(r||a)(ee(pe),ee(me))};static \u0275cmp=b({type:a,selectors:[["ng-component"]],standalone:!1,decls:11,vars:4,consts:[["p-title","Upload",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(r,i){r&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),c("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-upload-doc"),t(),n(4,"po-tab",3),c("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-upload-basic-view")(6,"sample-po-upload-labs-view")(7,"sample-po-upload-resume-view")(8,"sample-po-upload-rs-view")(9,"sample-po-upload-download-view")(10,"sample-po-upload-preview-view"),t()()()),r&2&&(u("p-actions",i.actions),p(2),u("p-active",i.activeTab==="doc"),p(2),u("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[fe,w,_,Pe,Me,De,ke,Le,Re,Ve],encapsulation:2})}return a})();var gt=[{path:"",component:Oe}],je=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=Q({type:a});static \u0275inj=W({imports:[te.forChild(gt),te]})}return a})();var dn=(()=>{class a{static \u0275fac=function(r){return new(r||a)};static \u0275mod=Q({type:a});static \u0275inj=W({imports:[_e,je]})}return a})();export{dn as DocPoUploadModule};
