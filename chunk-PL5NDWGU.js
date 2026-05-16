import{o as w,p as We}from"./chunk-AT3MKFJ3.js";import{Aa as $,Ba as X,Ca as Be,Da as Re,Fa as y,Gb as T,Hb as P,Ja as le,Lb as je,Q as Ie,Ra as Ve,S as Fe,U as Oe,Xa as Ne,Ya as ze,_ as F,a as B,ab as U,fa as oe,k as be,tb as He,w as W,ya as Le,za as qe}from"./chunk-GCMU57WK.js";import{Ba as he,Ca as ge,Da as ve,Ea as c,Fa as t,Ga as n,H as O,Ha as i,I as K,K as xe,Mb as A,Mc as H,Nc as De,O as S,Oa as z,Oc as Ae,P as x,Pa as u,Pc as j,Qc as Me,Ra as fe,Va as L,Wa as k,Xa as I,Yb as Pe,ac as we,bb as C,cb as e,cd as ke,db as ce,eb as D,ed as ae,gb as h,gd as ue,ha as s,hb as g,ib as v,ma as _,mb as Ce,mc as _e,nb as ee,oa as b,ob as te,pa as Y,pb as q,qb as ne,rb as f,ta as Z,xb as ie,yb as ye,z as Se,zb as Te}from"./chunk-XD3NZLB4.js";import{a as G,b as J}from"./chunk-GAL4ENT6.js";var pt=()=>({table:"PO Table",angular:"PO-UI"}),ct=r=>[r],Ue=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-basic"]],standalone:!1,decls:1,vars:4,consts:[[3,"p-items"]],template:function(l,a){l&1&&i(0,"po-table",0),l&2&&c("p-items",f(2,ct,ne(1,pt)))},dependencies:[y],encapsulation:2})}return r})();var bt=r=>({"docs-sample-code-tabs":r}),Qe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Basic"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-basic/sample-po-table-basic.component.html"),n(),t(13,"pre",7),e(14,`<po-table [p-items]="[{ table: 'PO Table', angular: 'PO-UI' }]"> </po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-basic/sample-po-table-basic.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-basic',
  templateUrl: './sample-po-table-basic.component.html',
  standalone: false
})
export class SamplePoTableBasicComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-basic"),n(),i(23,"hr")),l&2&&(s(5),C("po-icon "+a.sampleCodeButtonIcon),s(),D(" ",a.sampleCodeButtonLabel),s(),c("ngClass",f(4,bt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,Ue],encapsulation:2})}return r})();var re=(()=>{class r{colors=["color-01","color-02","color-03","color-04","color-05","color-06","color-07","color-08","color-09","color-10","color-11","color-12","caption-tag-01","caption-tag-03","caption-tag-06","caption-tag-08","caption-tag-11","caption-tag-13","caption-tag-16","caption-tag-18","caption-tag-21","caption-tag-23","caption-tag-26","caption-tag-28","caption-tag-31","caption-tag-33"];generateNewItem(o){return{text:`Text ${o}`,page:`Link ${o}`,link:"https://po-ui.io/",number:o,date:this.generateRandomDate(),time:this.generateRandomTime(),dateTime:this.generateRandomDate(),currency:this.generateRandomNumber(),subtitle:this.generateRandomColor(),detail:[{info:"Detail Information 1",date:new Date,time:this.generateRandomTime(),currency:1500.5},{info:"Detail Information 2",date:new Date,time:this.generateRandomTime(),currency:6511}],label:this.generateRandomColor(),color:`Text ${o}`,icon:this.generateRandomIcon(o),boolean:this.generateRandomBoolean()}}getColumns(){return{text:{property:"text",width:"30%"},number:{property:"number",type:"number"},date:{property:"date",type:"date"},time:{property:"time",type:"time"},dateTime:{property:"dateTime",label:"DateTime",type:"dateTime"},currency:{property:"currency",type:"currency",format:"USD"},link:{property:"page",label:"Link",type:"link"},icon:{property:"icon",type:"icon"},boolean:{property:"boolean",type:"boolean"},subtitle:{property:"subtitle",type:"subtitle",width:"10%",subtitles:[{value:"color-01",color:"color-01",label:"Color 1",content:"1"},{value:"color-02",color:"color-02",label:"Color 2",content:"2"},{value:"color-03",color:"color-03",label:"Color 3",content:"3"},{value:"color-04",color:"color-04",label:"Color 4",content:"4"},{value:"color-05",color:"color-05",label:"Color 5",content:"5"},{value:"color-06",color:"color-06",label:"Color 6",content:"6"},{value:"color-07",color:"color-07",label:"Color 7",content:"7"},{value:"color-08",color:"color-08",label:"Color 8",content:"8"},{value:"color-09",color:"color-09",label:"Color 9",content:"9"},{value:"color-10",color:"color-10",label:"Color 10",content:"10"},{value:"color-11",color:"color-11",label:"Color 11",content:"11"},{value:"color-12",color:"color-12",label:"Color 12",content:"12"}]},label:{property:"label",type:"label",width:"10%",labels:[{value:"color-01",color:"color-01",label:"Color 1"},{value:"color-02",color:"color-02",label:"Color 2"},{value:"color-03",color:"color-03",label:"Color 3"},{value:"color-04",color:"color-04",label:"Color 4"},{value:"color-05",color:"color-05",label:"Color 5"},{value:"color-06",color:"color-06",label:"Color 6"},{value:"color-07",color:"color-07",label:"Color 7"},{value:"color-08",color:"color-08",label:"Color 8"},{value:"color-09",color:"color-09",label:"Color 9"},{value:"color-10",color:"color-10",label:"Color 10"},{value:"color-11",color:"color-11",label:"Color 11"},{value:"color-12",color:"color-12",label:"Color 12"},{value:"caption-tag-01",color:"caption-tag-01",label:"Caption 01"},{value:"caption-tag-03",color:"caption-tag-03",label:"Caption 03"},{value:"caption-tag-06",color:"caption-tag-06",label:"Caption 06"},{value:"caption-tag-08",color:"caption-tag-08",label:"Caption 08"},{value:"caption-tag-11",color:"caption-tag-11",label:"Caption 11"},{value:"caption-tag-13",color:"caption-tag-13",label:"Caption 13"},{value:"caption-tag-16",color:"caption-tag-16",label:"Caption 16"},{value:"caption-tag-18",color:"caption-tag-18",label:"Caption 18"},{value:"caption-tag-21",color:"caption-tag-21",label:"Caption 21"},{value:"caption-tag-23",color:"caption-tag-23",label:"Caption 23"},{value:"caption-tag-26",color:"caption-tag-26",label:"Caption 26"},{value:"caption-tag-28",color:"caption-tag-28",label:"Caption 28"},{value:"caption-tag-31",color:"caption-tag-31",label:"Caption 31"},{value:"caption-tag-33",color:"caption-tag-33",label:"Caption 33"}]},color:{property:"color",width:"10%",color:this.changeColor},detail:{property:"detail",type:"detail",detail:{columns:[{property:"info",label:"Detail"},{property:"date",label:"Detail Date",type:"date",format:"dd-MM-yy"},{property:"time",label:"Detail Time",type:"time"},{property:"currency",label:"Detail Currency",type:"currency"}],typeHeader:"inline"}}}}changeColor(o,l){return o[l].slice(5,7).trim()%2===0?"caption-tag-08":"caption-tag-13"}generateRandomBoolean(){return Math.random()>=.5}generateRandomNumber(){return(Math.random()*200+1).toFixed(3)}generateRandomColor(){return this.colors[Math.floor(Math.random()*this.colors.length)]}generateRandomIcon(o){let l=["an an-copy","an an-check","an an-camera","an an-plant","an an-building-apartment"],a=["an an-trash","an an-newspaper","an an-gas-pump","an an-chats","an an-bluetooth"],m=Math.floor(Math.random()*5);return[{value:`${o}`,icon:l[m],tooltip:l[m]},{value:`${o}`,icon:a[m],tooltip:a[m]}]}generateRandomTime(){let o=Math.floor(Math.random()*23),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59),m=o<10?"0"+o.toString():o.toString(),p=l<10?"0"+l.toString():l.toString(),d=a<10?"0"+a.toString():a.toString();return`${m}:${p}:${d}`}generateRandomDate(){let o=Math.floor(Math.random()*28),l=Math.floor(Math.random()*12),a=Math.floor(Math.random()*24)+2e3;return new Date(a,l,o)}static \u0275fac=function(l){return new(l||r)};static \u0275prov=O({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var Je=(()=>{class r{samplePoTableLabsService;poModal;actions;actionsDefinition;actionTableFirst={action:this.openModal.bind(this),disabled:this.disableAction.bind(this),label:"First Action"};actionTableSecond={action:this.openModal.bind(this),label:"Second Action"};columns;columnsDefinition;columnsName;componentsSize;container;currentItem;customLiterals;event;height;items;itemIndex=0;literals;maxColumns;properties=["hideBatchActions","hideTableSearch"];selection;spacing=be.Medium;filterType=$.startsWith;filteredColumns=[];actionsDefinitionOptions=[{label:"Actions",value:"actions"},{label:"Disable first action",value:"disableAction",disabled:!0},{label:"Single action",value:"singleAction"},{label:"First action visible",value:"visibleAction"}];selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Hide select all",value:"hideSelectAll",disabled:!0},{label:"Single select",value:"singleSelect",disabled:!0}];componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}];filterModeOptions=[{label:"Starts With",value:$.startsWith},{label:"Contains",value:$.contains},{label:"Ends With",value:$.endsWith}];columnsOptions=[{value:"text",label:"Text"},{value:"link",label:"Link"},{value:"number",label:"Number"},{value:"currency",label:"Currency"},{value:"date",label:"Date"},{value:"time",label:"Time"},{value:"dateTime",label:"DateTime"},{value:"subtitle",label:"Subtitle"},{value:"detail",label:"Detail"},{value:"label",label:"Label"},{value:"color",label:"Color"},{value:"icon",label:"Icon"},{value:"boolean",label:"Boolean"}];propertiesOptions=[{label:"Sort",value:"sort"},{label:"Striped",value:"striped"},{label:"Show more disabled",value:"showMoreDisabled"},{label:"Loading show more",value:"loadingShowMore"},{label:"Hide detail",value:"hideDetail"},{label:"Loading",value:"loading"},{label:"Auto collapse",value:"autoCollapse"},{label:"Hide columns manager",value:"hideColumnsManager"},{label:"Hide batch actions",value:"hideBatchActions"},{label:"Actions Right",value:"actionsRight"},{label:"Draggable",value:"draggable"},{label:"Hide action fixed columns",value:"fixed"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Virtual Scroll",value:"virtualScroll"}];typeHeaderOptions=[{label:"Inline",value:"inline"},{label:"None",value:"none"},{label:"Top",value:"top"}];typeSpacing=[{label:"ExtraSmall",value:"extraSmall"},{label:"Small",value:"small"},{label:"Medium",value:"medium"},{label:"Large",value:"large"}];constructor(o){this.samplePoTableLabsService=o,this.columnsDefinition=this.samplePoTableLabsService?.getColumns()}ngOnInit(){this.restore()}addItem(){this.items=[...this.items,this.samplePoTableLabsService.generateNewItem(this.itemIndex)],this.itemIndex++}changeActionOptions(){let o=this.actionsDefinition.actions;this.actionsDefinitionOptions[1].disabled=!o,this.actionsDefinitionOptions[2].disabled=!o,this.actionsDefinitionOptions[3].disabled=!o,this.actionsDefinitionOptions=[].concat(this.actionsDefinitionOptions),this.actions=o?this.actionsDefinition.singleAction?[this.actionTableFirst]:[this.actionTableFirst,this.actionTableSecond]:[],this.actionTableFirst.visible=this.actionsDefinition.visibleAction,this.spacingSelectOrAction()}changeEvent(o){this.event=o}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch(o){this.customLiterals=void 0}}changeFilteredColumns(){this.filteredColumns=this.filteredColumns.toString().split(/,\s*/)}changeSelectionOptions(){let o=this.selection.includes("singleSelect"),l=this.selection.includes("selectable");this.selectionOptions[1].disabled=o||!l,this.selectionOptions[2].disabled=!l,this.selectionOptions=[].concat(this.selectionOptions),this.spacingSelectOrAction()}deleteItems(o){this.height&&(this.items=o)}disableAction(){return this.actionsDefinition.disableAction}openModal(o){this.currentItem=o.text,this.poModal.open()}restore(){this.actionsDefinition={visibleAction:null},this.actions=[],this.columnsDefinition.detail.detail.typeHeader=void 0,this.columnsName=[],this.container="",this.customLiterals=void 0,this.height=void 0,this.componentsSize="medium",this.items=[],this.itemIndex=0,this.literals="",this.maxColumns=void 0,this.properties=["hideBatchActions","hideTableSearch"],this.selection=[],this.spacing=be.Medium,this.filteredColumns=[],this.updateColumns(),this.changeActionOptions()}showMore(){this.addItem()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>{this.columns.push(this.columnsDefinition[o])})}spacingSelectOrAction(){this.columnsName.length>0&&this.updateColumns()}static \u0275fac=function(l){return new(l||r)(_(re))};static \u0275cmp=b({type:r,selectors:[["sample-po-table-labs"]],viewQuery:function(l,a){if(l&1&&L(F,7),l&2){let m;k(m=I())&&(a.poModal=m.first)}},standalone:!1,features:[q([re])],decls:34,vars:51,consts:[["f","ngForm"],[3,"p-all-selected","p-all-unselected","p-change-fixed-columns","p-collapsed","p-expanded","p-selected","p-show-more","p-unselected","p-delete-items","p-actions","p-actions-right","p-columns","p-container","p-height","p-filter-type","p-components-size","p-hide-detail","p-hide-columns-manager","p-hide-batch-actions","p-hide-table-search","p-hide-select-all","p-items","p-literals","p-filtered-columns","p-loading","p-max-columns","p-selectable","p-spacing","p-loading-show-more","p-show-more-disabled","p-single-select","p-sort","p-striped","p-virtual-scroll","p-auto-collapse","p-draggable","p-hide-action-fixed-columns"],[1,"po-row"],["p-label","Event",1,"po-md-12",3,"p-value"],["p-label","Add Item",1,"po-md-3",3,"p-click"],["name","columnsName","p-label","Columns","p-columns","4",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-options"],["p-columns","3","name","typeHeader","p-label","Column detail typeHeader",1,"po-lg-9",3,"ngModelChange","ngModel","p-options"],["name","hideSelect","p-label","Column detail hideSelect",1,"po-lg-3",3,"ngModelChange","ngModel"],["name","properties","p-label","Properties","p-columns","4",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","actionsDefinition","p-columns","4","p-indeterminate","","p-label","Actions",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","spacing","p-columns","4","p-help","Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).","p-label","Spacing",1,"po-lg-12",3,"ngModelChange","ngModel","p-options"],["name","selection","p-columns","4","p-help","To enable 'hide select all' and 'single select' check 'selectable'.","p-label","Selection",1,"po-lg-12",3,"ngModelChange","p-change","ngModel","p-options"],["name","filterMode","p-columns","4","p-label","Filter mode",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","size","p-columns","4","p-label","Components size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme).",1,"po-md-12",3,"ngModelChange","ngModel","p-options"],["name","literals","p-help",'Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}',"p-label","Literals",1,"po-md-12","po-lg-6",3,"ngModelChange","p-change","ngModel"],["name","filteredColumns","p-help",'Ex.: "text, time"',"p-label","Filter Columns",1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","height","p-clean","","p-help","Height of table","p-label","Height",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","maxColumns","p-clean","","p-help","Max columns to be visible","p-label","Max Columns",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["p-label","Sample Restore",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm","p-title","PO Table"],["p-label","Chosen Item:",3,"p-value"]],template:function(l,a){if(l&1){let m=z();t(0,"po-table",1),u("p-all-selected",function(){return a.changeEvent("p-all-selected")})("p-all-unselected",function(){return a.changeEvent("p-all-unselected")})("p-change-fixed-columns",function(){return a.changeEvent("p-change-fixed-columns")})("p-collapsed",function(){return a.changeEvent("p-collapsed")})("p-expanded",function(){return a.changeEvent("p-expanded")})("p-selected",function(){return a.changeEvent("p-selected")})("p-show-more",function(){return a.showMore()})("p-unselected",function(){return a.changeEvent("p-unselected")})("p-delete-items",function(d){return a.deleteItems(d)}),n(),i(1,"po-divider"),t(2,"div",2),i(3,"po-info",3),n(),i(4,"po-divider"),t(5,"div",2)(6,"po-button",4),u("p-click",function(){return a.addItem()}),n()(),i(7,"po-divider"),t(8,"form",null,0)(10,"div",2)(11,"po-checkbox-group",5),v("ngModelChange",function(d){return S(m),g(a.columnsName,d)||(a.columnsName=d),x(d)}),u("p-change",function(){return a.updateColumns()}),n()(),t(12,"div",2)(13,"po-radio-group",6),v("ngModelChange",function(d){return S(m),g(a.columnsDefinition.detail.detail.typeHeader,d)||(a.columnsDefinition.detail.detail.typeHeader=d),x(d)}),n(),t(14,"po-switch",7),v("ngModelChange",function(d){return S(m),g(a.columnsDefinition.detail.detail.hideSelect,d)||(a.columnsDefinition.detail.detail.hideSelect=d),x(d)}),n()(),t(15,"div",2)(16,"po-checkbox-group",8),v("ngModelChange",function(d){return S(m),g(a.properties,d)||(a.properties=d),x(d)}),n()(),t(17,"div",2)(18,"po-checkbox-group",9),v("ngModelChange",function(d){return S(m),g(a.actionsDefinition,d)||(a.actionsDefinition=d),x(d)}),u("p-change",function(){return a.changeActionOptions()}),n()(),t(19,"div",2)(20,"po-radio-group",10),v("ngModelChange",function(d){return S(m),g(a.spacing,d)||(a.spacing=d),x(d)}),n()(),t(21,"div",2)(22,"po-checkbox-group",11),v("ngModelChange",function(d){return S(m),g(a.selection,d)||(a.selection=d),x(d)}),u("p-change",function(){return a.changeSelectionOptions()}),n(),t(23,"po-radio-group",12),v("ngModelChange",function(d){return S(m),g(a.filterType,d)||(a.filterType=d),x(d)}),n(),t(24,"po-radio-group",13),v("ngModelChange",function(d){return S(m),g(a.componentsSize,d)||(a.componentsSize=d),x(d)}),n()(),t(25,"div",2)(26,"po-input",14),v("ngModelChange",function(d){return S(m),g(a.literals,d)||(a.literals=d),x(d)}),u("p-change",function(){return a.changeLiterals()}),n(),t(27,"po-input",15),v("ngModelChange",function(d){return S(m),g(a.filteredColumns,d)||(a.filteredColumns=d),x(d)}),u("p-change",function(){return a.changeFilteredColumns()}),n(),t(28,"po-number",16),v("ngModelChange",function(d){return S(m),g(a.height,d)||(a.height=d),x(d)}),n(),t(29,"po-number",17),v("ngModelChange",function(d){return S(m),g(a.maxColumns,d)||(a.maxColumns=d),x(d)}),n()(),t(30,"div",2)(31,"po-button",18),u("p-click",function(){return a.restore()}),n()()(),t(32,"po-modal",19),i(33,"po-info",20),n()}l&2&&(c("p-actions",a.actions)("p-actions-right",a.properties.includes("actionsRight"))("p-columns",a.columns)("p-container",a.container)("p-height",a.height)("p-filter-type",a.filterType)("p-components-size",a.componentsSize)("p-hide-detail",a.properties.includes("hideDetail"))("p-hide-columns-manager",a.properties.includes("hideColumnsManager"))("p-hide-batch-actions",a.properties.includes("hideBatchActions"))("p-hide-table-search",a.properties.includes("hideTableSearch"))("p-hide-select-all",a.selection.includes("hideSelectAll"))("p-items",a.items)("p-literals",a.customLiterals)("p-filtered-columns",a.filteredColumns)("p-loading",a.properties.includes("loading"))("p-max-columns",a.maxColumns)("p-selectable",a.selection.includes("selectable"))("p-spacing",a.spacing)("p-loading-show-more",a.properties.includes("loadingShowMore"))("p-show-more-disabled",a.properties.includes("showMoreDisabled"))("p-single-select",a.selection.includes("singleSelect"))("p-sort",a.properties.includes("sort"))("p-striped",a.properties.includes("striped"))("p-virtual-scroll",a.properties.includes("virtualScroll"))("p-auto-collapse",a.properties.includes("autoCollapse"))("p-draggable",a.properties.includes("draggable"))("p-hide-action-fixed-columns",a.properties.includes("fixed")),s(3),c("p-value",a.event),s(8),h("ngModel",a.columnsName),c("p-options",a.columnsOptions),s(2),h("ngModel",a.columnsDefinition.detail.detail.typeHeader),c("p-options",a.typeHeaderOptions),s(),h("ngModel",a.columnsDefinition.detail.detail.hideSelect),s(2),h("ngModel",a.properties),c("p-options",a.propertiesOptions),s(2),h("ngModel",a.actionsDefinition),c("p-options",a.actionsDefinitionOptions),s(2),h("ngModel",a.spacing),c("p-options",a.typeSpacing),s(2),h("ngModel",a.selection),c("p-options",a.selectionOptions),s(),h("ngModel",a.filterType),c("p-options",a.filterModeOptions),s(),h("ngModel",a.componentsSize),c("p-options",a.componentsSizeOptions),s(2),h("ngModel",a.literals),s(),h("ngModel",a.filteredColumns),s(),h("ngModel",a.height),s(),h("ngModel",a.maxColumns),s(4),c("p-value",a.currentItem))},dependencies:[Me,H,De,j,Ae,W,B,Fe,Oe,le,Ve,Le,U,F,y],encapsulation:2})}return r})();var ht=r=>({"docs-sample-code-tabs":r}),$e=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-labs-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Labs"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-labs/sample-po-table-labs.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-actions]="actions"
  [p-actions-right]="properties.includes('actionsRight')"
  [p-columns]="columns"
  [p-container]="container"
  [p-height]="height"
  [p-filter-type]="filterType"
  [p-components-size]="componentsSize"
  [p-hide-detail]="properties.includes('hideDetail')"
  [p-hide-columns-manager]="properties.includes('hideColumnsManager')"
  [p-hide-batch-actions]="properties.includes('hideBatchActions')"
  [p-hide-table-search]="properties.includes('hideTableSearch')"
  [p-hide-select-all]="selection.includes('hideSelectAll')"
  [p-items]="items"
  [p-literals]="customLiterals"
  [p-filtered-columns]="filteredColumns"
  [p-loading]="properties.includes('loading')"
  [p-max-columns]="maxColumns"
  [p-selectable]="selection.includes('selectable')"
  [p-spacing]="spacing"
  [p-loading-show-more]="properties.includes('loadingShowMore')"
  [p-show-more-disabled]="properties.includes('showMoreDisabled')"
  [p-single-select]="selection.includes('singleSelect')"
  [p-sort]="properties.includes('sort')"
  [p-striped]="properties.includes('striped')"
  [p-virtual-scroll]="properties.includes('virtualScroll')"
  (p-all-selected)="changeEvent('p-all-selected')"
  (p-all-unselected)="changeEvent('p-all-unselected')"
  (p-change-fixed-columns)="changeEvent('p-change-fixed-columns')"
  (p-collapsed)="changeEvent('p-collapsed')"
  (p-expanded)="changeEvent('p-expanded')"
  (p-selected)="changeEvent('p-selected')"
  (p-show-more)="showMore()"
  (p-unselected)="changeEvent('p-unselected')"
  [p-auto-collapse]="properties.includes('autoCollapse')"
  (p-delete-items)="deleteItems($event)"
  [p-draggable]="properties.includes('draggable')"
  [p-hide-action-fixed-columns]="properties.includes('fixed')"
>
</po-table>

<po-divider></po-divider>

<div class="po-row">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider></po-divider>

<div class="po-row">
  <po-button class="po-md-3" p-label="Add Item" (p-click)="addItem()"> </po-button>
</div>

<po-divider></po-divider>

<form #f="ngForm">
  <div class="po-row">
    <po-checkbox-group
      class="po-md-12"
      name="columnsName"
      [(ngModel)]="columnsName"
      p-label="Columns"
      p-columns="4"
      [p-options]="columnsOptions"
      (p-change)="updateColumns()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-9"
      p-columns="3"
      name="typeHeader"
      [(ngModel)]="columnsDefinition.detail.detail.typeHeader"
      p-label="Column detail typeHeader"
      [p-options]="typeHeaderOptions"
    >
    </po-radio-group>

    <po-switch
      class="po-lg-3"
      name="hideSelect"
      [(ngModel)]="columnsDefinition.detail.detail.hideSelect"
      p-label="Column detail hideSelect"
    >
    </po-switch>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="properties"
      [(ngModel)]="properties"
      p-label="Properties"
      p-columns="4"
      [p-options]="propertiesOptions"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="actionsDefinition"
      [(ngModel)]="actionsDefinition"
      p-columns="4"
      p-indeterminate
      p-label="Actions"
      [p-options]="actionsDefinitionOptions"
      (p-change)="changeActionOptions()"
    >
    </po-checkbox-group>
  </div>

  <div class="po-row">
    <po-radio-group
      class="po-lg-12"
      name="spacing"
      [(ngModel)]="spacing"
      p-columns="4"
      p-help="Para aplicar o tamanho extraSmall, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      p-label="Spacing"
      [p-options]="typeSpacing"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-checkbox-group
      class="po-lg-12"
      name="selection"
      [(ngModel)]="selection"
      p-columns="4"
      p-help="To enable 'hide select all' and 'single select' check 'selectable'."
      p-label="Selection"
      [p-options]="selectionOptions"
      (p-change)="changeSelectionOptions()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-12"
      name="filterMode"
      [(ngModel)]="filterType"
      p-columns="4"
      p-label="Filter mode"
      [p-options]="filterModeOptions"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-12"
      name="size"
      [(ngModel)]="componentsSize"
      p-columns="4"
      p-label="Components size"
      p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA, ajust\xE1vel no navbar ou servi\xE7o de tema (https://po-ui.io/documentation/po-theme)."
      [p-options]="componentsSizeOptions"
    >
    </po-radio-group>
  </div>

  <div class="po-row">
    <po-input
      class="po-md-12 po-lg-6"
      name="literals"
      [(ngModel)]="literals"
      p-help='Ex.: {"noData": "Sem dados a serem exibidos", "noColumns": "Colunas n\xE3o definidas"}'
      p-label="Literals"
      (p-change)="changeLiterals()"
    >
    </po-input>

    <po-input
      class="po-md-6"
      name="filteredColumns"
      [(ngModel)]="filteredColumns"
      p-help='Ex.: "text, time"'
      p-label="Filter Columns"
      (p-change)="changeFilteredColumns()"
    >
    </po-input>

    <po-number
      class="po-md-6 po-lg-3"
      name="height"
      [(ngModel)]="height"
      p-clean
      p-help="Height of table"
      p-label="Height"
    >
    </po-number>

    <po-number
      class="po-md-6 po-lg-3"
      name="maxColumns"
      [(ngModel)]="maxColumns"
      p-clean
      p-help="Max columns to be visible"
      p-label="Max Columns"
    >
    </po-number>
  </div>

  <div class="po-row">
    <po-button class="po-md-3" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>

<po-modal p-click-out="true" p-size="sm" p-title="PO Table">
  <po-info p-label="Chosen Item:" [p-value]="currentItem"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-labs/sample-po-table-labs.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit, ViewChild } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoModalComponent,
  PoRadioGroupOption,
  PoSearchFilterMode,
  PoTableAction,
  PoTableColumn,
  PoTableColumnSpacing,
  PoTableLiterals
} from '@po-ui/ng-components';

import { SamplePoTableLabsService } from './sample-po-table-labs.service';

@Component({
  selector: 'sample-po-table-labs',
  templateUrl: './sample-po-table-labs.component.html',
  providers: [SamplePoTableLabsService],
  standalone: false
})
export class SamplePoTableLabsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  actions: Array<PoTableAction>;
  actionsDefinition: any;
  actionTableFirst: PoTableAction = {
    action: this.openModal.bind(this),
    disabled: this.disableAction.bind(this),
    label: 'First Action'
  };
  actionTableSecond: PoTableAction = { action: this.openModal.bind(this), label: 'Second Action' };

  columns: Array<PoTableColumn>;
  columnsDefinition: any;
  columnsName: Array<string>;
  componentsSize: string;
  container: string;
  currentItem: string;
  customLiterals: PoTableLiterals;
  event: string;
  height: number;
  items: Array<any>;
  itemIndex = 0;
  literals: string;
  maxColumns: number;
  properties: Array<string> = ['hideBatchActions', 'hideTableSearch'];
  selection: Array<string>;
  spacing: PoTableColumnSpacing = PoTableColumnSpacing.Medium;
  filterType: PoSearchFilterMode = PoSearchFilterMode.startsWith;
  filteredColumns: Array<string> = [];

  actionsDefinitionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Disable first action', value: 'disableAction', disabled: true },
    { label: 'Single action', value: 'singleAction' },
    { label: 'First action visible', value: 'visibleAction' }
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Hide select all', value: 'hideSelectAll', disabled: true },
    { label: 'Single select', value: 'singleSelect', disabled: true }
  ];

  public readonly componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
  ];

  public readonly filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Starts With', value: PoSearchFilterMode.startsWith },
    { label: 'Contains', value: PoSearchFilterMode.contains },
    { label: 'Ends With', value: PoSearchFilterMode.endsWith }
  ];

  public readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'text', label: 'Text' },
    { value: 'link', label: 'Link' },
    { value: 'number', label: 'Number' },
    { value: 'currency', label: 'Currency' },
    { value: 'date', label: 'Date' },
    { value: 'time', label: 'Time' },
    { value: 'dateTime', label: 'DateTime' },
    { value: 'subtitle', label: 'Subtitle' },
    { value: 'detail', label: 'Detail' },
    { value: 'label', label: 'Label' },
    { value: 'color', label: 'Color' },
    { value: 'icon', label: 'Icon' },
    { value: 'boolean', label: 'Boolean' }
  ];

  public readonly propertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Sort', value: 'sort' },
    { label: 'Striped', value: 'striped' },
    { label: 'Show more disabled', value: 'showMoreDisabled' },
    { label: 'Loading show more', value: 'loadingShowMore' },
    { label: 'Hide detail', value: 'hideDetail' },
    { label: 'Loading', value: 'loading' },
    { label: 'Auto collapse', value: 'autoCollapse' },
    { label: 'Hide columns manager', value: 'hideColumnsManager' },
    { label: 'Hide batch actions', value: 'hideBatchActions' },
    { label: 'Actions Right', value: 'actionsRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Hide action fixed columns', value: 'fixed' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];

  public readonly typeHeaderOptions: Array<PoRadioGroupOption> = [
    { label: 'Inline', value: 'inline' },
    { label: 'None', value: 'none' },
    { label: 'Top', value: 'top' }
  ];

  public readonly typeSpacing: Array<PoRadioGroupOption> = [
    { label: 'ExtraSmall', value: 'extraSmall' },
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  constructor(private samplePoTableLabsService: SamplePoTableLabsService) {
    this.columnsDefinition = this.samplePoTableLabsService?.getColumns();
  }

  ngOnInit() {
    this.restore();
  }

  addItem() {
    this.items = [...this.items, this.samplePoTableLabsService.generateNewItem(this.itemIndex)];
    this.itemIndex++;
  }

  changeActionOptions() {
    const actions = this.actionsDefinition.actions;

    this.actionsDefinitionOptions[1].disabled = !actions;
    this.actionsDefinitionOptions[2].disabled = !actions;
    this.actionsDefinitionOptions[3].disabled = !actions;

    this.actionsDefinitionOptions = [].concat(this.actionsDefinitionOptions);

    this.actions = actions
      ? this.actionsDefinition.singleAction
        ? [this.actionTableFirst]
        : [this.actionTableFirst, this.actionTableSecond]
      : [];
    this.actionTableFirst.visible = this.actionsDefinition.visibleAction;
    this.spacingSelectOrAction();
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

  changeFilteredColumns() {
    this.filteredColumns = this.filteredColumns.toString().split(/,\\s*/);
  }

  changeSelectionOptions() {
    const singleSelect = this.selection.includes('singleSelect');
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = singleSelect || !selectable;
    this.selectionOptions[2].disabled = !selectable;

    this.selectionOptions = [].concat(this.selectionOptions);
    this.spacingSelectOrAction();
  }

  deleteItems(items: Array<any>) {
    if (this.height) {
      this.items = items;
    }
  }

  disableAction() {
    return this.actionsDefinition.disableAction;
  }

  openModal(row) {
    this.currentItem = row.text;
    this.poModal.open();
  }

  restore() {
    this.actionsDefinition = { visibleAction: null };
    this.actions = [];
    //this.columnsDefinition = this.samplePoTableLabsService.getColumns();
    this.columnsDefinition.detail.detail.typeHeader = undefined;
    this.columnsName = [];
    this.container = '';
    this.customLiterals = undefined;
    this.height = undefined;
    this.componentsSize = 'medium';
    this.items = [];
    this.itemIndex = 0;
    this.literals = '';
    this.maxColumns = undefined;
    this.properties = ['hideBatchActions', 'hideTableSearch'];
    this.selection = [];
    this.spacing = PoTableColumnSpacing.Medium;
    this.filteredColumns = [];

    this.updateColumns();
    this.changeActionOptions();
  }

  showMore() {
    this.addItem();
  }

  updateColumns() {
    this.columns = [];
    this.columnsName.forEach(column => {
      this.columns.push(this.columnsDefinition[column]);
    });
  }

  private spacingSelectOrAction() {
    if (this.columnsName.length > 0) {
      this.updateColumns();
    }
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-labs/sample-po-table-labs.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableLabsService {
  private readonly colors = [
    'color-01',
    'color-02',
    'color-03',
    'color-04',
    'color-05',
    'color-06',
    'color-07',
    'color-08',
    'color-09',
    'color-10',
    'color-11',
    'color-12',
    'caption-tag-01',
    'caption-tag-03',
    'caption-tag-06',
    'caption-tag-08',
    'caption-tag-11',
    'caption-tag-13',
    'caption-tag-16',
    'caption-tag-18',
    'caption-tag-21',
    'caption-tag-23',
    'caption-tag-26',
    'caption-tag-28',
    'caption-tag-31',
    'caption-tag-33'
  ];

  generateNewItem(index: number) {
    return {
      text: \`Text \${index}\`,
      page: \`Link \${index}\`,
      link: 'https://po-ui.io/',
      number: index,
      date: this.generateRandomDate(),
      time: this.generateRandomTime(),
      dateTime: this.generateRandomDate(),
      currency: this.generateRandomNumber(),
      subtitle: this.generateRandomColor(),
      detail: [
        { info: \`Detail Information 1\`, date: new Date(), time: this.generateRandomTime(), currency: 1500.5 },
        { info: \`Detail Information 2\`, date: new Date(), time: this.generateRandomTime(), currency: 6511 }
      ],
      label: this.generateRandomColor(),
      color: \`Text \${index}\`,
      icon: this.generateRandomIcon(index),
      boolean: this.generateRandomBoolean()
    };
  }

  getColumns() {
    return {
      text: <PoTableColumn>{ property: 'text', width: '30%' },
      number: <PoTableColumn>{ property: 'number', type: 'number' },
      date: <PoTableColumn>{ property: 'date', type: 'date' },
      time: <PoTableColumn>{ property: 'time', type: 'time' },
      dateTime: <PoTableColumn>{ property: 'dateTime', label: 'DateTime', type: 'dateTime' },
      currency: <PoTableColumn>{ property: 'currency', type: 'currency', format: 'USD' },
      link: <PoTableColumn>{ property: 'page', label: 'Link', type: 'link' },
      icon: <PoTableColumn>{ property: 'icon', type: 'icon' },
      boolean: <PoTableColumn>{ property: 'boolean', type: 'boolean' },
      subtitle: <PoTableColumn>{
        property: 'subtitle',
        type: 'subtitle',
        width: '10%',
        subtitles: [
          { value: 'color-01', color: 'color-01', label: 'Color 1', content: '1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2', content: '2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3', content: '3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4', content: '4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5', content: '5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6', content: '6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7', content: '7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8', content: '8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9', content: '9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10', content: '10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11', content: '11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12', content: '12' }
        ]
      },

      label: <PoTableColumn>{
        property: 'label',
        type: 'label',
        width: '10%',
        labels: [
          { value: 'color-01', color: 'color-01', label: 'Color 1' },
          { value: 'color-02', color: 'color-02', label: 'Color 2' },
          { value: 'color-03', color: 'color-03', label: 'Color 3' },
          { value: 'color-04', color: 'color-04', label: 'Color 4' },
          { value: 'color-05', color: 'color-05', label: 'Color 5' },
          { value: 'color-06', color: 'color-06', label: 'Color 6' },
          { value: 'color-07', color: 'color-07', label: 'Color 7' },
          { value: 'color-08', color: 'color-08', label: 'Color 8' },
          { value: 'color-09', color: 'color-09', label: 'Color 9' },
          { value: 'color-10', color: 'color-10', label: 'Color 10' },
          { value: 'color-11', color: 'color-11', label: 'Color 11' },
          { value: 'color-12', color: 'color-12', label: 'Color 12' },
          { value: 'caption-tag-01', color: 'caption-tag-01', label: 'Caption 01' },
          { value: 'caption-tag-03', color: 'caption-tag-03', label: 'Caption 03' },
          { value: 'caption-tag-06', color: 'caption-tag-06', label: 'Caption 06' },
          { value: 'caption-tag-08', color: 'caption-tag-08', label: 'Caption 08' },
          { value: 'caption-tag-11', color: 'caption-tag-11', label: 'Caption 11' },
          { value: 'caption-tag-13', color: 'caption-tag-13', label: 'Caption 13' },
          { value: 'caption-tag-16', color: 'caption-tag-16', label: 'Caption 16' },
          { value: 'caption-tag-18', color: 'caption-tag-18', label: 'Caption 18' },
          { value: 'caption-tag-21', color: 'caption-tag-21', label: 'Caption 21' },
          { value: 'caption-tag-23', color: 'caption-tag-23', label: 'Caption 23' },
          { value: 'caption-tag-26', color: 'caption-tag-26', label: 'Caption 26' },
          { value: 'caption-tag-28', color: 'caption-tag-28', label: 'Caption 28' },
          { value: 'caption-tag-31', color: 'caption-tag-31', label: 'Caption 31' },
          { value: 'caption-tag-33', color: 'caption-tag-33', label: 'Caption 33' }
        ]
      },

      color: <PoTableColumn>{ property: 'color', width: '10%', color: this.changeColor },

      detail: <PoTableColumn>{
        property: 'detail',
        type: 'detail',
        detail: {
          columns: [
            { property: 'info', label: 'Detail' },
            { property: 'date', label: 'Detail Date', type: 'date', format: 'dd-MM-yy' },
            { property: 'time', label: 'Detail Time', type: 'time' },
            { property: 'currency', label: 'Detail Currency', type: 'currency' }
          ],
          typeHeader: 'inline'
        }
      }
    };
  }

  private changeColor(row, column) {
    const number = row[column].slice(5, 7).trim();

    return number % 2 === 0 ? 'caption-tag-08' : 'caption-tag-13';
  }

  private generateRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private generateRandomNumber() {
    return (Math.random() * 200 + 1).toFixed(3);
  }

  private generateRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  private generateRandomIcon(index: number) {
    const iconsOne = ['an an-copy', 'an an-check', 'an an-camera', 'an an-plant', 'an an-building-apartment'];
    const iconsTwo = ['an an-trash', 'an an-newspaper', 'an an-gas-pump', 'an an-chats', 'an an-bluetooth'];

    const randomIcon = Math.floor(Math.random() * 5);

    return [
      { value: \`\${index}\`, icon: iconsOne[randomIcon], tooltip: iconsOne[randomIcon] },
      { value: \`\${index}\`, icon: iconsTwo[randomIcon], tooltip: iconsTwo[randomIcon] }
    ];
  }

  private generateRandomTime() {
    const hour = Math.floor(Math.random() * 23);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const hourValid = hour < 10 ? '0' + hour.toString() : hour.toString();
    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`\${hourValid}:\${minutesValid}:\${secondsValid}\`;
  }

  private generateRandomDate() {
    const day = Math.floor(Math.random() * 28);
    const month = Math.floor(Math.random() * 12);
    const year = Math.floor(Math.random() * 24) + 2000;

    return new Date(year, month, day);
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-labs"),n(),i(27,"hr")),l&2&&(s(5),C("po-icon "+a.sampleCodeButtonIcon),s(),D(" ",a.sampleCodeButtonLabel),s(),c("ngClass",f(4,ht,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,Je],encapsulation:2})}return r})();var vt=["table"],Xe=(()=>{class r{tableComponent;service="";key;value;sampleService="";params;filters=[];columns=[{property:"id"},{property:"name"}];stringColumns=JSON.stringify(this.columns);defaultColumns=[...this.columns];addFilter(o,l){this.params=J(G({},this.params),{[o]:l}),this.setFilters(o,l),this.tableComponent.applyFilters(this.params),this.resetInputs()}changeService(o){this.sampleService=o}onChangeColumns(o){try{this.columns=JSON.parse(o)}catch(l){this.stringColumns=JSON.stringify(this.defaultColumns),this.columns=[...this.defaultColumns]}}removeAllItems(){this.tableComponent.applyFilters({})}removeItem(o){delete this.params[o.removedDisclaimer.property],this.tableComponent.applyFilters(this.params)}resetInputs(){this.key=void 0,this.value=void 0}setFilters(o,l){let a=this.filters.find(m=>m.property===o);a?(this.filters.splice(this.filters.indexOf(a),1),a=Object.assign({},a)):a={property:o},a.value=l,a.label=`${o.charAt(0).toUpperCase()+o.slice(1)}: ${l}`,this.filters=[...this.filters,a]}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-with-api"]],viewQuery:function(l,a){if(l&1&&L(vt,5),l&2){let m;k(m=I())&&(a.tableComponent=m.first)}},standalone:!1,decls:16,vars:12,consts:[["table",""],[1,"po-row"],["p-label","URL API service","p-help","https://po-sample-api.onrender.com/v1/heroes",1,"po-md-12",3,"ngModelChange","p-change","ngModel"],["p-label","Columns",1,"po-md-12"],["p-label","Columns","p-help","[{ property: 'name' }]",1,"po-md-12",3,"ngModelChange","p-change","ngModel","p-rows"],["p-label","Filters",1,"po-md-12"],["p-label","Key","p-help","Object key",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Value","p-help","Object value",1,"po-md-6",3,"ngModelChange","ngModel"],["p-label","Add Filter",1,"po-md-3",3,"p-click","p-disabled"],[1,"po-mt-1","po-md-12",3,"p-remove","p-remove-all","p-disclaimers"],[1,"po-mt-1","po-md-12",3,"p-columns","p-service-api","p-height","p-hide-table-search","p-infinite-scroll"]],template:function(l,a){if(l&1){let m=z();t(0,"div",1)(1,"po-input",2),v("ngModelChange",function(d){return S(m),g(a.service,d)||(a.service=d),x(d)}),u("p-change",function(){return a.changeService(a.service)}),n()(),t(2,"div",1),i(3,"po-divider",3),t(4,"po-textarea",4),v("ngModelChange",function(d){return S(m),g(a.stringColumns,d)||(a.stringColumns=d),x(d)}),u("p-change",function(d){return a.onChangeColumns(d)}),n()(),t(5,"div",1),i(6,"po-divider",5),t(7,"po-input",6),v("ngModelChange",function(d){return S(m),g(a.key,d)||(a.key=d),x(d)}),n(),t(8,"po-input",7),v("ngModelChange",function(d){return S(m),g(a.value,d)||(a.value=d),x(d)}),n()(),t(9,"div",1)(10,"po-button",8),u("p-click",function(){return a.addFilter(a.key,a.value)}),n()(),t(11,"div",1)(12,"po-disclaimer-group",9),u("p-remove",function(d){return a.removeItem(d)})("p-remove-all",function(){return a.removeAllItems()}),n()(),t(13,"div",1),i(14,"po-table",10,0),n()}l&2&&(s(),h("ngModel",a.service),s(3),h("ngModel",a.stringColumns),c("p-rows",5),s(3),h("ngModel",a.key),s(),h("ngModel",a.value),s(2),c("p-disabled",!a.key||!a.value),s(2),c("p-disclaimers",a.filters),s(2),c("p-columns",a.columns)("p-service-api",a.sampleService)("p-height",300)("p-hide-table-search",!1)("p-infinite-scroll",!0))},dependencies:[H,j,W,Ie,B,le,ze,y],encapsulation:2})}return r})();var Ct=r=>({"docs-sample-code-tabs":r}),Ke=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-with-api-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table using API"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-with-api/sample-po-table-with-api.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row">
  <po-input
    class="po-md-12"
    p-label="URL API service"
    p-help="https://po-sample-api.onrender.com/v1/heroes"
    [(ngModel)]="service"
    (p-change)="changeService(service)"
  >
  </po-input>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Columns"></po-divider>
  <po-textarea
    class="po-md-12"
    p-label="Columns"
    p-help="[{ property: 'name' }]"
    [(ngModel)]="stringColumns"
    [p-rows]="5"
    (p-change)="onChangeColumns($event)"
  >
  </po-textarea>
</div>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Filters"></po-divider>
  <po-input class="po-md-6" p-label="Key" p-help="Object key" [(ngModel)]="key"></po-input>
  <po-input class="po-md-6" p-label="Value" p-help="Object value" [(ngModel)]="value"></po-input>
</div>
<div class="po-row">
  <po-button
    class="po-md-3"
    p-label="Add Filter"
    (p-click)="addFilter(key, value)"
    [p-disabled]="!key || !value"
  ></po-button>
</div>
<div class="po-row">
  <po-disclaimer-group
    class="po-mt-1 po-md-12"
    [p-disclaimers]="filters"
    (p-remove)="removeItem($event)"
    (p-remove-all)="removeAllItems()"
  >
  </po-disclaimer-group>
</div>
<div class="po-row">
  <po-table
    class="po-mt-1 po-md-12"
    #table
    [p-columns]="columns"
    [p-service-api]="sampleService"
    [p-height]="300"
    [p-hide-table-search]="false"
    [p-infinite-scroll]="true"
  >
  </po-table>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-with-api/sample-po-table-with-api.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild } from '@angular/core';
import { PoDisclaimerGroupRemoveAction, PoDisclaimer, PoTableComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-table-with-api',
  templateUrl: './sample-po-table-with-api.component.html',
  standalone: false
})
export class SamplePoTableWithApiComponent {
  @ViewChild('table') tableComponent: PoTableComponent;

  service = '';
  key: string;
  value: string;
  sampleService = '';
  params: {};
  filters: Array<PoDisclaimer> = [];
  columns: Array<PoTableColumn> = [{ property: 'id' }, { property: 'name' }];
  stringColumns: string = JSON.stringify(this.columns);

  private defaultColumns: Array<PoTableColumn> = [...this.columns];

  addFilter(property: string, value: any) {
    this.params = { ...this.params, [property]: value };

    this.setFilters(property, value);

    this.tableComponent.applyFilters(this.params);

    this.resetInputs();
  }

  changeService(service) {
    this.sampleService = service;
  }

  onChangeColumns(columns) {
    try {
      this.columns = JSON.parse(columns);
    } catch (e) {
      this.stringColumns = JSON.stringify(this.defaultColumns);
      this.columns = [...this.defaultColumns];
    }
  }

  removeAllItems() {
    this.tableComponent.applyFilters({});
  }

  removeItem(item: PoDisclaimerGroupRemoveAction) {
    delete this.params[item.removedDisclaimer.property];
    this.tableComponent.applyFilters(this.params);
  }

  private resetInputs() {
    this.key = undefined;
    this.value = undefined;
  }

  private setFilters(property: string, value: string) {
    let filter = this.filters.find(item => item.property === property);
    if (!filter) {
      filter = <any>{ property: property };
    } else {
      this.filters.splice(this.filters.indexOf(filter), 1);
      filter = Object.assign({}, filter);
    }

    filter.value = value;
    filter.label = \`\${property.charAt(0).toUpperCase() + property.slice(1)}: \${value}\`;

    this.filters = [...this.filters, filter];
  }
}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-with-api"),n(),i(23,"hr")),l&2&&(s(5),C("po-icon "+a.sampleCodeButtonIcon),s(),D(" ",a.sampleCodeButtonLabel),s(),c("ngClass",f(4,Ct,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,Xe],encapsulation:2})}return r})();var me=(()=>{class r{getColumns(){return[{property:"code",type:"number",width:"8%"},{property:"product"},{property:"customer"},{property:"exit_forecast",label:"Exit forecast",type:"dateTime"},{property:"time_since_purchase",label:"Time since purchase",type:"time",visible:!1},{property:"quantity",label:"Quantity (Tons)",type:"number",width:"15%",visible:!1},{property:"icms",label:"ICMS",type:"number",format:"1.2-5",visible:!1},{property:"status",type:"label",width:"8%",labels:[{value:"delivered",color:"caption-tag-23",label:"Delivered"},{value:"transport",color:"caption-tag-14",label:"Transport"},{value:"production",color:"caption-tag-03",label:"Production"},{value:"stock",color:"caption-tag-33",label:"Stock",icon:"an an-package"}]}]}getItems(){return[{code:1200,product:"Rice",customer:"Angeloni",quantity:3,icms:1500,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"delivered",license_plate:"MDJD9191",batch_product:18041822,driver:"Jos\xE9 Oliveira"},{code:1355,product:"Margarine",customer:"Giassi",quantity:1,icms:50,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"XXA5454",batch_product:18041821,driver:"Francisco Pereira"},{code:1496,product:"Wheat flour",customer:"Walmart",quantity:5,icms:2045,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"transport",license_plate:"QEW5779",batch_product:18041820,driver:"Pedro da Costa"},{code:1712,product:"Milk",customer:"Carrefour",quantity:10,icms:15005,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"WWW1247",batch_product:18041819,driver:"Jo\xE3o da Silva"},{code:1881,product:"Oil",customer:"Carrefour",quantity:1,icms:1110,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"production",license_plate:"XXI2312",batch_product:18041825,driver:"Antonio Lima"},{code:1551,product:"Cream cheese",customer:"Barbosa",quantity:15,icms:1119,exit_forecast:this.generateRandomDate(),time_since_purchase:this.generateRandomTime(),status:"stock",license_plate:"XXI2359",batch_product:18041888,driver:"Vitoria Felix"}]}generateRandomDate(){let o=Math.floor(Math.random()*20),l=Math.floor(Math.random()*59),a=Math.floor(Math.random()*59);return new Date(2018,10,23,o,l,a)}generateRandomTime(){let o=Math.floor(Math.random()*59),l=Math.floor(Math.random()*59),a=o<10?"0"+o.toString():o.toString(),m=l<10?"0"+l.toString():l.toString();return`00:${a}:${m}`}static \u0275fac=function(l){return new(l||r)};static \u0275prov=O({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Pt(r,Q){if(r&1){let o=z();t(0,"po-widget",2)(1,"div",3)(2,"po-select",4),v("ngModelChange",function(a){let m=S(o).$implicit;return g(m.status,a)||(m.status=a),x(a)}),n()(),t(3,"div",3),i(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),n()()}if(r&2){let o=Q.$implicit,l=fe();c("p-title",ee("Transport detail ",o.code)),s(2),h("ngModel",o.status),c("p-options",l.statusOptions),s(2),c("p-value",o.batch_product),s(),c("p-value",o.driver),s(),c("p-value",o.license_plate)}}var Ye=(()=>{class r{transportService;columns;items;statusOptions=[{label:"Delivered",value:"delivered"},{label:"Transport",value:"transport"},{label:"Production",value:"production"}];constructor(o){this.transportService=o}ngOnInit(){this.columns=this.transportService.getColumns(),this.items=this.transportService.getItems()}isUndelivered(o,l){return o.status!=="delivered"}static \u0275fac=function(l){return new(l||r)(_(me))};static \u0275cmp=b({type:r,selectors:[["sample-po-table-transport"]],standalone:!1,features:[q([me])],decls:2,vars:9,consts:[["p-spacing","large",3,"p-auto-collapse","p-columns","p-hide-columns-manager","p-hide-table-search","p-items","p-sort","p-striped"],["p-table-row-template","",3,"p-table-row-template-arrow-direction","p-table-row-template-show"],[3,"p-title"],[1,"po-row"],["name","status","p-label","Transport status",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Batch of product","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","Driver","p-orientation","horizontal",1,"po-md-4",3,"p-value"],["p-label","License plate","p-orientation","horizontal",1,"po-md-4",3,"p-value"]],template:function(l,a){l&1&&(t(0,"po-table",0),Z(1,Pt,7,7,"ng-template",1),n()),l&2&&(c("p-auto-collapse",!0)("p-columns",a.columns)("p-hide-columns-manager",!0)("p-hide-table-search",!1)("p-items",a.items)("p-sort",!0)("p-striped",!0),s(),c("p-table-row-template-arrow-direction","right")("p-table-row-template-show",a.isUndelivered))},dependencies:[H,j,Ne,U,y,Re,je],encapsulation:2})}return r})();var _t=r=>({"docs-sample-code-tabs":r}),Ze=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-transport-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Transport"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-transport/sample-po-table-transport.component.html"),n(),t(13,"pre",7),e(14,`<po-table
  [p-auto-collapse]="true"
  [p-columns]="columns"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
  [p-items]="items"
  [p-sort]="true"
  [p-striped]="true"
  p-spacing="large"
>
  <ng-template
    p-table-row-template
    let-rowItem
    let-i="rowIndex"
    [p-table-row-template-arrow-direction]="'right'"
    [p-table-row-template-show]="isUndelivered"
  >
    <po-widget p-title="Transport detail { { rowItem.code }}">
      <div class="po-row">
        <po-select
          class="po-md-6"
          name="status"
          [(ngModel)]="rowItem.status"
          p-label="Transport status"
          [p-options]="statusOptions"
        >
        </po-select>
      </div>

      <div class="po-row">
        <po-info
          class="po-md-4"
          p-label="Batch of product"
          p-orientation="horizontal"
          [p-value]="rowItem.batch_product"
        >
        </po-info>

        <po-info class="po-md-4" p-label="Driver" p-orientation="horizontal" [p-value]="rowItem.driver"> </po-info>

        <po-info class="po-md-4" p-label="License plate" p-orientation="horizontal" [p-value]="rowItem.license_plate">
        </po-info>
      </div>
    </po-widget>
  </ng-template>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-transport/sample-po-table-transport.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import { PoSelectOption } from '@po-ui/ng-components';

import { PoTableColumn } from '@po-ui/ng-components';

import { SamplePoTableTransportService } from './sample-po-table-transport.service';

@Component({
  selector: 'sample-po-table-transport',
  templateUrl: 'sample-po-table-transport.component.html',
  providers: [SamplePoTableTransportService],
  standalone: false
})
export class SamplePoTableTransportComponent implements OnInit {
  columns: Array<PoTableColumn>;
  items: Array<any>;

  readonly statusOptions: Array<PoSelectOption> = [
    { label: 'Delivered', value: 'delivered' },
    { label: 'Transport', value: 'transport' },
    { label: 'Production', value: 'production' }
  ];

  constructor(private transportService: SamplePoTableTransportService) {}

  ngOnInit() {
    this.columns = this.transportService.getColumns();
    this.items = this.transportService.getItems();
  }

  isUndelivered(row, index: number) {
    return row.status !== 'delivered';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-transport/sample-po-table-transport.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTagType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableTransportService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', type: 'number', width: '8%' },
      { property: 'product' },
      { property: 'customer' },
      { property: 'exit_forecast', label: 'Exit forecast', type: 'dateTime' },
      { property: 'time_since_purchase', label: 'Time since purchase', type: 'time', visible: false },
      { property: 'quantity', label: 'Quantity (Tons)', type: 'number', width: '15%', visible: false },
      { property: 'icms', label: 'ICMS', type: 'number', format: '1.2-5', visible: false },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: 'delivered', color: 'caption-tag-23', label: 'Delivered' },
          { value: 'transport', color: 'caption-tag-14', label: 'Transport' },
          { value: 'production', color: 'caption-tag-03', label: 'Production' },
          { value: 'stock', color: 'caption-tag-33', label: 'Stock', icon: 'an an-package' }
        ]
      }
    ];
  }

  getItems(): Array<any> {
    return [
      {
        code: 1200,
        product: 'Rice',
        customer: 'Angeloni',
        quantity: 3,
        icms: 1500,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'delivered',
        license_plate: 'MDJD9191',
        batch_product: 18041822,
        driver: 'Jos\xE9 Oliveira'
      },
      {
        code: 1355,
        product: 'Margarine',
        customer: 'Giassi',
        quantity: 1,
        icms: 50,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'XXA5454',
        batch_product: 18041821,
        driver: 'Francisco Pereira'
      },
      {
        code: 1496,
        product: 'Wheat flour',
        customer: 'Walmart',
        quantity: 5,
        icms: 2045,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'transport',
        license_plate: 'QEW5779',
        batch_product: 18041820,
        driver: 'Pedro da Costa'
      },
      {
        code: 1712,
        product: 'Milk',
        customer: 'Carrefour',
        quantity: 10,
        icms: 15005,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'WWW1247',
        batch_product: 18041819,
        driver: 'Jo\xE3o da Silva'
      },
      {
        code: 1881,
        product: 'Oil',
        customer: 'Carrefour',
        quantity: 1,
        icms: 1110,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'production',
        license_plate: 'XXI2312',
        batch_product: 18041825,
        driver: 'Antonio Lima'
      },
      {
        code: 1551,
        product: 'Cream cheese',
        customer: 'Barbosa',
        quantity: 15,
        icms: 1119,
        exit_forecast: this.generateRandomDate(),
        time_since_purchase: this.generateRandomTime(),
        status: 'stock',
        license_plate: 'XXI2359',
        batch_product: 18041888,
        driver: 'Vitoria Felix'
      }
    ];
  }

  private generateRandomDate() {
    const hour = Math.floor(Math.random() * 20);
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    return new Date(2018, 10, 23, hour, minutes, seconds);
  }

  private generateRandomTime() {
    const minutes = Math.floor(Math.random() * 59);
    const seconds = Math.floor(Math.random() * 59);

    const minutesValid = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
    const secondsValid = seconds < 10 ? '0' + seconds.toString() : seconds.toString();

    return \`00:\${minutesValid}:\${secondsValid}\`;
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-transport"),n(),i(27,"hr")),l&2&&(s(5),C("po-icon "+a.sampleCodeButtonIcon),s(),D(" ",a.sampleCodeButtonLabel),s(),c("ngClass",f(4,_t,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,Ye],encapsulation:2})}return r})();var se=(()=>{class r{getColumns(){return[{property:"status",type:"label",labels:[{value:"available",color:"caption-tag-13",label:"Available"},{value:"reserved",color:"caption-tag-08",label:"Reserved"},{value:"closed",color:"caption-tag-03",label:"Closed"}]},{property:"country"},{property:"destination"},{property:"region",type:"subtitle",width:"180px",subtitles:[{value:"Alps",color:"color-01",label:"Alps",content:"AL"},{value:"Australasia",color:"color-02",label:"Australasia",content:"AU"},{value:"British Isle",color:"color-03",label:"British Isle",content:"BI"},{value:"Caucasus",color:"color-04",label:"Caucasus",content:"CA"},{value:"Danube",color:"color-05",label:"Danube",content:"DA"},{value:"East Asia",color:"color-06",label:"East Asia",content:"EA"},{value:"Latin America",color:"color-07",label:"Latin America",content:"LA"},{value:"Mediterranean",color:"color-08",label:"Mediterranean",content:"ME"},{value:"Nordics",color:"color-09",label:"Nordics",content:"NO"},{value:"North America",color:"color-10",label:"North America",content:"NA"},{value:"Southern Africa",color:"color-11",label:"Southern Africa",content:"SA"},{value:"Western Africa",color:"color-12",label:"Western Africa",content:"WA"}]},{property:"date",type:"date"},{property:"returnDate",label:"Return Date",type:"date"},{property:"value",type:"currency",format:"USD"},{property:"id",label:"Flight Number",type:"number"},{property:"onBoardService",label:"On Board Service",type:"boolean",boolean:{trueLabel:"Yes",falseLabel:"No"}},{property:"detail",label:"Details",type:"detail",detail:{columns:[{property:"package"},{property:"tour"},{property:"time",label:"Departure time",type:"time",format:"HH:mm"},{property:"distance",label:"Distance (Miles)",type:"number",format:"1.0-5"}],typeHeader:"top"}}]}getItems(){return[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"20:10:10",distance:"1000"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"09:15:19",distance:"2000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"07:10:20",distance:"3000"}]},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"10:15:10",distance:"4800"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"22:15:10",distance:"11000"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"10:15:10",distance:"1000"}]},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48999,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America",detail:[{package:"Basic",tour:"City tour by public bus and visit to the main museums.",time:"12:10:10",distance:"2200"},{package:"Intermediary",tour:"City tour by van and guided visit to the main museums.",time:"11:10:10",distance:"1500"},{package:"Complete",tour:"VIP city tour, music show with dinner and guided tour to the main museums.",time:"16:10:10",distance:"1800"}]},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}]}static \u0275fac=function(l){return new(l||r)};static \u0275prov=O({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var et=(()=>{class r{sampleAirfare;poNotification;poDialog;poModal;poTable;actions=[{action:this.discount.bind(this),icon:"an an-currency-circle-dollar",label:"Apply Discount",disabled:this.validateDiscount.bind(this)},{action:this.details.bind(this),icon:"an an-info",label:"Details"},{action:this.remove.bind(this),icon:"po-icon an an-trash",label:"Remove"}];columns;columnsDefault;detail;items;total=0;totalExpanded=0;initialColumns;constructor(o,l,a){this.sampleAirfare=o,this.poNotification=l,this.poDialog=a}ngOnInit(){this.columns=this.sampleAirfare.getColumns(),this.items=this.sampleAirfare.getItems()}ngAfterViewInit(){if(this.columnsDefault=this.columns,localStorage.getItem("initial-columns")){this.initialColumns=localStorage.getItem("initial-columns").split(",");let l=[...this.columns.map(a=>J(G({},a),{visible:this.initialColumns.includes(a.property)}))];l.sort(this.sortFunction),this.columns=l}}sortFunction(o,l){let a=localStorage.getItem("initial-columns").split(","),m=a.indexOf(o.property),p=a.indexOf(l.property);if(m===-1)return 1;if(p===-1||m<p)return-1;if(m>p)return 1}addToCart(){let o=this.poTable.getSelectedRows();o.length>0&&this.poDialog.confirm({title:"Add to cart",message:`Would you like to add ${o.length} items to cart?`,confirm:()=>this.confirmItems(o),cancel:()=>{}})}confirmItems(o){o.forEach(l=>{switch(l.status){case"available":this.poNotification.success(`${this.getDescription(l)} added succesfully`);break;case"reserved":this.poNotification.warning(`${this.getDescription(l)} added succesfully, verify your e-mail to complete reservation`);break;case"closed":this.poNotification.error(`${this.getDescription(l)} is closed and not available anymore`);break}}),this.poTable.unselectRows()}collapseAll(){this.items.forEach((o,l)=>{o.detail&&(this.onCollapseDetail(),this.poTable.collapse(l))})}decreaseTotal(o){o.value&&(this.total-=o.value)}deleteItems(o){this.items=o}details(o){this.detail=o,this.poModal.open()}remove(o){this.poTable.removeItem(o)}discount(o){if(!o.disableDiscount){let l=J(G({},o),{value:o.value-o.value*.2,disableDiscount:!0});this.poTable.updateItem(o,l)}}expandAll(){this.totalExpanded=0,this.items.forEach((o,l)=>{o.detail&&(this.onExpandDetail(),this.poTable.expand(l))})}onCollapseDetail(){this.totalExpanded-=1,this.totalExpanded=this.totalExpanded<0?0:this.totalExpanded}onExpandDetail(){this.totalExpanded+=1}sumTotal(o){o.value&&(this.total+=o.value)}restoreColumn(){this.columns=this.columnsDefault}changeColumnVisible(o){localStorage.setItem("initial-columns",o)}getDescription(o){return`Airfare to ${o.destination} - ${o.initials}`}validateDiscount(o){return o.disableDiscount}static \u0275fac=function(l){return new(l||r)(_(se),_(qe),_(oe))};static \u0275cmp=b({type:r,selectors:[["sample-po-table-airfare"]],viewQuery:function(l,a){if(l&1&&L(F,7)(y,7),l&2){let m;k(m=I())&&(a.poModal=m.first),k(m=I())&&(a.poTable=m.first)}},standalone:!1,features:[q([se,oe])],decls:16,vars:24,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-collapsed","p-expanded","p-selected","p-unselected","p-change-visible-columns","p-restore-column-manager","p-delete-items","p-container","p-height","p-hide-batch-actions","p-hide-table-search","p-selectable","p-sort","p-striped","p-actions","p-columns","p-items","p-max-columns","p-virtual-scroll"],["p-label","Total Value","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],["p-label","Expanded Itens","p-orientation","horizontal",1,"po-md-6","po-mb-sm-2","po-mb-md-2","po-lb-lg-2",3,"p-value"],[1,"po-row"],["p-icon","an an-shopping-cart-simple","p-label","Add items to cart",1,"po-md-3",3,"p-click"],["p-label","Expand all detail",1,"po-md-3",3,"p-click"],["p-label","Collapse all detail",1,"po-md-3",3,"p-click"],["p-click-out","true","p-size","sm",3,"p-title"],["p-label","Airline",1,"po-sm-6",3,"p-value"],["p-label","Initials",1,"po-sm-2",3,"p-value"],["p-label","Class",1,"po-sm-4",3,"p-value"]],template:function(l,a){l&1&&(t(0,"div",0),e(1,"Choose one or more promotional airfares"),n(),i(2,"po-divider"),t(3,"po-table",1),u("p-collapsed",function(){return a.onCollapseDetail()})("p-expanded",function(){return a.onExpandDetail()})("p-selected",function(p){return a.sumTotal(p)})("p-unselected",function(p){return a.decreaseTotal(p)})("p-change-visible-columns",function(p){return a.changeColumnVisible(p)})("p-restore-column-manager",function(){return a.restoreColumn()})("p-delete-items",function(p){return a.deleteItems(p)}),n(),i(4,"po-divider")(5,"po-info",2),ie(6,"currency"),i(7,"po-info",3),t(8,"div",4)(9,"po-button",5),u("p-click",function(){return a.addToCart()}),n(),t(10,"po-button",6),u("p-click",function(){return a.expandAll()}),n(),t(11,"po-button",7),u("p-click",function(){return a.collapseAll()}),n()(),t(12,"po-modal",8),i(13,"po-info",9)(14,"po-info",10)(15,"po-info",11),n()),l&2&&(s(3),c("p-container",!0)("p-height",400)("p-hide-batch-actions",!1)("p-hide-table-search",!1)("p-selectable",!0)("p-sort",!0)("p-striped",!0)("p-actions",a.actions)("p-columns",a.columns)("p-items",a.items)("p-max-columns",7)("p-virtual-scroll",!1),s(2),c("p-value",Ce(Te(6,21,a.total,"USD"))),s(2),c("p-value",a.totalExpanded),s(5),c("p-title",te("",a.detail==null?null:a.detail.destination," - ",a.detail==null?null:a.detail.country)),s(),c("p-value",a.detail==null?null:a.detail.airline),s(),c("p-value",a.detail==null?null:a.detail.initials),s(),c("p-value",a.detail==null?null:a.detail.class))},dependencies:[W,B,U,F,y,we],encapsulation:2})}return r})();var kt=r=>({"docs-sample-code-tabs":r}),tt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-airfare-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Airfare"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-airfare/sample-po-table-airfare.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more promotional airfares</div>

<po-divider></po-divider>

<po-table
  [p-container]="true"
  [p-height]="400"
  [p-hide-batch-actions]="false"
  [p-hide-table-search]="false"
  [p-selectable]="true"
  [p-sort]="true"
  [p-striped]="true"
  [p-actions]="actions"
  [p-columns]="columns"
  [p-items]="items"
  [p-max-columns]="7"
  [p-virtual-scroll]="false"
  (p-collapsed)="onCollapseDetail()"
  (p-expanded)="onExpandDetail()"
  (p-selected)="sumTotal($event)"
  (p-unselected)="decreaseTotal($event)"
  (p-change-visible-columns)="changeColumnVisible($event)"
  (p-restore-column-manager)="restoreColumn()"
  (p-delete-items)="deleteItems($event)"
>
</po-table>

<po-divider></po-divider>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Total Value"
  p-orientation="horizontal"
  p-value="{ { total | currency: 'USD' }}"
>
</po-info>

<po-info
  class="po-md-6 po-mb-sm-2 po-mb-md-2 po-lb-lg-2"
  p-label="Expanded Itens"
  p-orientation="horizontal"
  [p-value]="totalExpanded"
>
</po-info>

<div class="po-row">
  <po-button class="po-md-3" p-icon="an an-shopping-cart-simple" p-label="Add items to cart" (p-click)="addToCart()">
  </po-button>
  <po-button class="po-md-3" p-label="Expand all detail" (p-click)="expandAll()"> </po-button>
  <po-button class="po-md-3" p-label="Collapse all detail" (p-click)="collapseAll()"> </po-button>
</div>

<po-modal p-click-out="true" p-size="sm" p-title="{ { detail?.destination }} - { { detail?.country }}">
  <po-info class="po-sm-6" p-label="Airline" [p-value]="detail?.airline"> </po-info>

  <po-info class="po-sm-2" p-label="Initials" [p-value]="detail?.initials"> </po-info>

  <po-info class="po-sm-4" p-label="Class" [p-value]="detail?.class"> </po-info>
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-airfare/sample-po-table-airfare.component.ts"),n(),t(19,"pre",9),e(20,`import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import {
  PoDialogService,
  PoModalComponent,
  PoTableAction,
  PoTableColumn,
  PoTableComponent,
  PoNotificationService
} from '@po-ui/ng-components';

import { SamplePoTableAirfareService } from './sample-po-table-airfare.service';

@Component({
  selector: 'sample-po-table-airfare',
  templateUrl: './sample-po-table-airfare.component.html',
  providers: [SamplePoTableAirfareService, PoDialogService],
  standalone: false
})
export class SamplePoTableAirfareComponent implements AfterViewInit, OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(PoTableComponent, { static: true }) poTable: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];
  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<any>;

  constructor(
    private sampleAirfare: SamplePoTableAirfareService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.columns = this.sampleAirfare.getColumns();
    this.items = this.sampleAirfare.getItems();
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      this.initialColumns = localStorage.getItem('initial-columns').split(',');

      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property)
      }));

      const newColumn = [...result];
      newColumn.sort(this.sortFunction);
      this.columns = newColumn;
    }
  }

  sortFunction(a, b) {
    const teste = localStorage.getItem('initial-columns').split(',');
    const indexA = teste.indexOf(a['property']);
    const indexB = teste.indexOf(b['property']);
    if (indexA === -1) {
      return 1;
    }
    if (indexB === -1) {
      return -1;
    }
    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }
  }

  addToCart() {
    const selectedItems = this.poTable.getSelectedRows();

    if (selectedItems.length > 0) {
      this.poDialog.confirm({
        title: 'Add to cart',
        message: \`Would you like to add \${selectedItems.length} items to cart?\`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(\`\${this.getDescription(item)} added succesfully\`);
          break;
        case 'reserved':
          this.poNotification.warning(
            \`\${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation\`
          );
          break;
        case 'closed':
          this.poNotification.error(\`\${this.getDescription(item)} is closed and not available anymore\`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return \`Airfare to \${item.destination} - \${item.initials}\`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-airfare/sample-po-table-airfare.service.ts"),n(),t(23,"pre",9),e(24,`import { Injectable } from '@angular/core';

import { PoTableColumn, PoTableDetail } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableAirfareService {
  getColumns(): Array<PoTableColumn> {
    const airfareDetail: PoTableDetail = {
      columns: [
        { property: 'package' },
        { property: 'tour' },
        { property: 'time', label: 'Departure time', type: 'time', format: 'HH:mm' },
        { property: 'distance', label: 'Distance (Miles)', type: 'number', format: '1.0-5' }
      ],
      typeHeader: 'top'
    };

    return [
      {
        property: 'status',
        type: 'label',
        labels: [
          { value: 'available', color: 'caption-tag-13', label: 'Available' },
          { value: 'reserved', color: 'caption-tag-08', label: 'Reserved' },
          { value: 'closed', color: 'caption-tag-03', label: 'Closed' }
        ]
      },
      { property: 'country' },
      { property: 'destination' },
      {
        property: 'region',
        type: 'subtitle',
        width: '180px',
        subtitles: [
          { value: 'Alps', color: 'color-01', label: 'Alps', content: 'AL' },
          { value: 'Australasia', color: 'color-02', label: 'Australasia', content: 'AU' },
          { value: 'British Isle', color: 'color-03', label: 'British Isle', content: 'BI' },
          { value: 'Caucasus', color: 'color-04', label: 'Caucasus', content: 'CA' },
          { value: 'Danube', color: 'color-05', label: 'Danube', content: 'DA' },
          { value: 'East Asia', color: 'color-06', label: 'East Asia', content: 'EA' },
          { value: 'Latin America', color: 'color-07', label: 'Latin America', content: 'LA' },
          { value: 'Mediterranean', color: 'color-08', label: 'Mediterranean', content: 'ME' },
          { value: 'Nordics', color: 'color-09', label: 'Nordics', content: 'NO' },
          { value: 'North America', color: 'color-10', label: 'North America', content: 'NA' },
          { value: 'Southern Africa', color: 'color-11', label: 'Southern Africa', content: 'SA' },
          { value: 'Western Africa', color: 'color-12', label: 'Western Africa', content: 'WA' }
        ]
      },
      { property: 'date', type: 'date' },
      { property: 'returnDate', label: 'Return Date', type: 'date' },
      { property: 'value', type: 'currency', format: 'USD' },
      { property: 'id', label: 'Flight Number', type: 'number' },
      {
        property: 'onBoardService',
        label: 'On Board Service',
        type: 'boolean',
        boolean: {
          trueLabel: 'Yes',
          falseLabel: 'No'
        }
      },
      { property: 'detail', label: 'Details', type: 'detail', detail: airfareDetail }
    ];
  }

  getItems() {
    return [
      {
        id: 11234,
        initials: 'BR',
        country: 'Brazil',
        value: 1000.0,
        date: '2018-10-09',
        returnDate: '2018-11-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Rio de Janeiro',
        airline: 'Azul',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '20:10:10',
            distance: '1000'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '09:15:19',
            distance: '2000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '07:10:20',
            distance: '3000'
          }
        ]
      },
      {
        id: 22467,
        initials: 'FR',
        country: 'France',
        value: 5000.0,
        date: '2019-12-13',
        returnDate: '2019-12-31',
        class: 'Economic',
        onBoardService: false,
        destination: 'Paris',
        airline: 'British Airways',
        status: 'closed',
        region: 'Alps',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '10:15:10',
            distance: '4800'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '22:15:10',
            distance: '11000'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '10:15:10',
            distance: '1000'
          }
        ]
      },
      {
        id: 40670,
        initials: 'SN',
        country: 'Senegal',
        value: 3200.0,
        date: '2017-11-22',
        returnDate: '2018-12-01',
        class: 'Economic',
        onBoardService: false,
        destination: 'Dakar',
        airline: 'Iberia',
        status: 'closed',
        region: 'Western Africa'
      },
      {
        id: 34679,
        initials: 'PT',
        country: 'Portugal',
        value: 5500.0,
        date: '2017-10-10',
        returnDate: '2018-10-20',
        class: 'Economic',
        onBoardService: false,
        destination: 'Lisbon',
        airline: 'Air Europa',
        status: 'closed',
        region: 'Mediterranean'
      },
      {
        id: 48999,
        initials: 'RU',
        country: 'Russia',
        value: 6700.0,
        date: '2019-01-17',
        returnDate: '2019-02-20',
        class: 'First Class',
        onBoardService: true,
        destination: 'Moscow',
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'Caucasus'
      },
      {
        id: 48999,
        initials: 'US',
        country: 'United States',
        value: 2700.49,
        date: '2018-10-17',
        returnDate: '2018-10-29',
        class: 'Economic',
        onBoardService: false,
        destination: 'Los Angeles',
        airline: 'American Airlines',
        status: 'reserved',
        region: 'North America'
      },
      {
        id: 54563,
        initials: 'CL',
        country: 'Chile',
        value: 2000.0,
        date: '2018-10-20',
        returnDate: '2018-11-01',
        destination: 'Cusco',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'available',
        region: 'Latin America'
      },
      {
        id: 64568,
        initials: 'MX',
        country: 'Mexico',
        value: 2100.0,
        date: '2018-03-10',
        returnDate: '2018-05-09',
        destination: 'Mexico City',
        class: 'Economic',
        onBoardService: false,
        airline: 'Aero M\xE9xico',
        status: 'available',
        region: 'Latin America',
        detail: [
          {
            package: 'Basic',
            tour: 'City tour by public bus and visit to the main museums.',
            time: '12:10:10',
            distance: '2200'
          },
          {
            package: 'Intermediary',
            tour: 'City tour by van and guided visit to the main museums.',
            time: '11:10:10',
            distance: '1500'
          },
          {
            package: 'Complete',
            tour: 'VIP city tour, music show with dinner and guided tour to the main museums.',
            time: '16:10:10',
            distance: '1800'
          }
        ]
      },
      {
        id: 75456,
        initials: 'IE',
        country: 'Ireland',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Cork',
        class: 'First Class',
        onBoardService: true,
        airline: 'Lufthansa',
        status: 'reserved',
        region: 'British Isle'
      },
      {
        id: 23445,
        initials: 'ZA',
        country: 'South Africa',
        value: 1900.0,
        date: '2018-12-10',
        returnDate: '2018-12-25',
        destination: 'Cape Town',
        class: 'Economic',
        onBoardService: false,
        airline: 'South African Airways',
        status: 'available',
        region: 'Southern Africa'
      },
      {
        id: 19238,
        initials: 'AU',
        country: 'Australia',
        value: 6300.0,
        date: '2018-10-14',
        returnDate: '2018-10-30',
        destination: 'Sydney',
        class: 'First Class',
        onBoardService: true,
        airline: 'Jetstar Airways',
        status: 'reserved',
        region: 'Australasia'
      },
      {
        id: 85456,
        initials: 'JP',
        country: 'Japan',
        value: 5900.0,
        date: '2018-10-25',
        returnDate: '2018-11-10',
        destination: 'Tokio',
        class: 'Executive',
        onBoardService: true,
        airline: 'Japan Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 94565,
        initials: 'CN',
        country: 'China',
        value: 2900.0,
        date: '2018-10-10',
        returnDate: '2018-10-25',
        destination: 'Beijing',
        class: 'Economic',
        onBoardService: false,
        airline: 'Malaysia Airlines',
        status: 'available',
        region: 'East Asia'
      },
      {
        id: 32330,
        initials: 'UK',
        country: 'England',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-11-15',
        destination: 'London',
        class: 'Executive',
        onBoardService: true,
        airline: 'British Airways',
        status: 'available',
        region: 'British Isle'
      },
      {
        id: 14560,
        initials: 'CA',
        country: 'Canada',
        value: 2090.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Quebec',
        class: 'Economic',
        onBoardService: false,
        airline: 'American Airlines',
        status: 'available',
        region: 'North America'
      },
      {
        id: 93800,
        initials: 'IS',
        country: 'Iceland',
        value: 6300.0,
        date: '2018-10-12',
        returnDate: '2018-10-27',
        destination: 'Reykjav\xEDk',
        class: 'Economic',
        onBoardService: false,
        airline: 'Star Alliance',
        status: 'available',
        region: 'Nordics'
      },
      {
        id: 34239,
        initials: 'DE',
        country: 'Germany',
        value: 3070.5,
        date: '2018-10-07',
        returnDate: '2018-10-20',
        destination: 'Berlin',
        class: 'Executive',
        onBoardService: true,
        airline: 'LATAM',
        status: 'available',
        region: 'Danube'
      },
      {
        id: 45611,
        initials: 'AR',
        country: 'Argentina',
        value: 3500.5,
        date: '2018-12-07',
        returnDate: '2018-12-29',
        destination: 'Ushuaia',
        class: 'Economic',
        onBoardService: false,
        airline: 'LATAM',
        status: 'reserved',
        region: 'Latin America'
      }
    ];
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-airfare"),n(),i(27,"hr")),l&2&&(s(5),C("po-icon "+a.sampleCodeButtonIcon),s(),D(" ",a.sampleCodeButtonLabel),s(),c("ngClass",f(4,kt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,et],encapsulation:2})}return r})();var N=(function(r){return r[r.Stable=0]="Stable",r[r.Experimental=1]="Experimental",r[r.RoadMap=2]="RoadMap",r})(N||{});var de=(()=>{class r{items=[{component:{favorite:["favorite","documentation"],name:"PO Select",description:"Display a list of items and allows selection",link:"/documentation/po-select",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Checkbox",description:"Group of square buttons that allows multiple items to be selected",link:"/documentation/po-checkbox-group",extra:"Best Practices",extras:["Short and objective texts for items","Use with short lists","For big lists use PO Multiselect"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Login",description:"Template for authentication",link:"/documentation/po-page-login",extra:"Features",extras:[],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Number",description:"Input that allows only numbers",link:"/documentation/po-number",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Page Dynamic Table",description:"Template for list resources with a table",link:"/documentation/po-page-dynamic-table",extra:"Features",extras:["6 defaults actions","Use Metadata to build your page","No code","Customization"],status:0,type:"template"}},{component:{favorite:["favorite","documentation"],name:"PO Combo",description:"Display a list of items with filter and allows selection",link:"/documentation/po-combo",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Notification",description:"Show notification easily and quickly",link:"/documentation/po-notification",extra:"Features",extras:["4 types of notifications","Define time for your notifications","Use actions in your notification"],status:0,type:"service"}},{component:{favorite:["favorite","documentation"],name:"PO Multiselect",description:"Display a list of items and allows multiple selection",link:"/documentation/po-multiselect",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:1,type:"component"}},{component:{favorite:[],name:"PO Grid",description:"Create a grid for edition",link:"/documentation/po-grid",extra:"Features",extras:[],status:2,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Input",description:"Input for general texts",link:"/documentation/po-input",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Textarea",description:"Larger input for big texts",link:"/documentation/po-textarea",extra:"Best Practices",extras:["Recommended to large texts like observations and details","For short texts use po-input"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Datepicker",description:"Input with calendar for dates",link:"/documentation/po-datepicker",extra:"Features",extras:["Multiple idioms ( pt, es , en)","Custom date formats","Period validation (start date and end date)"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Email",description:"Input that allows valid email texts (username@email.com)",link:"/documentation/po-email",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Url",description:"Input that expects a valid url as text (http://www.url.com)",link:"/documentation/po-url",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Password",description:"Input with bullet text to type passwords",link:"/documentation/po-password",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Login",description:"Input with a user icon that represents a login field",link:"/documentation/po-login",extra:"Features",extras:["Filter options (starts, contains, ends)","Custom services","Navigation by keys"],status:0,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Upload",description:"Upload file(s) with a loading bar",link:"/documentation/po-upload",extra:"Features",extras:["Multiple file selection","Automatic upload after click","File format and size restriction"],status:1,type:"component"}},{component:{favorite:["favorite","documentation"],name:"PO Avatar",description:"Creates a circle with a picture inside",link:"/documentation/po-avatar",extra:"Features",extras:["Multiple sizes","Default image"],status:0,type:"component"}}];getItems(o,l=!1){let a=[...this.items];return o&&o.column&&a.sort((m,p)=>this.sort(m,p,o)),l||(a.length=10),a}sort(o,l,a){let m=a.column.property,p=a.type;if(m.split(".").length>1){let d=m.split(".")[0],Ee=m.split(".")[1];return o[d][Ee]<l[d][Ee]?p===X.Ascending?-1:1:p===X.Ascending?1:-1}else return o[m]<l[m]?p===X.Ascending?-1:1:p===X.Ascending?1:-1}static \u0275fac=function(l){return new(l||r)};static \u0275prov=O({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();function Lt(r,Q){if(r&1&&(t(0,"div"),e(1),ie(2,"uppercase"),n()),r&2){let o=Q.$implicit;C(ee("badge ",o)),s(),ce(ye(2,4,o))}}function qt(r,Q){if(r&1&&(t(0,"ul")(1,"li",4),e(2),n(),i(3,"po-divider"),n()),r&2){let o=Q.$implicit;s(2),ce(o)}}var nt=(()=>{class r{sampleComponents;router;poModal;extraInformation;items;showMoreDisabled=!1;title;isLoading=!1;columns=[{property:"component.status",type:"label",label:"Status",width:"5%",labels:[{value:N.Stable,color:"caption-tag-13",label:"Stable",textColor:"white",tooltip:"Published component"},{value:N.Experimental,color:"caption-tag-08",label:"Experimental",textColor:"white",tooltip:"Component in homologation"},{value:N.RoadMap,color:"caption-tag-03",label:"Roadmap",textColor:"white",tooltip:"Component in roadmap"}]},{property:"component.name",label:"Name",type:"link"},{property:"component.type",label:"Type",type:"columnTemplate",width:"10%"},{property:"component.description",label:"Descri\xE7\xE3o",color:this.experimentalColor.bind(this)},{property:"component.extra",label:"Extras",width:"10%",type:"link",tooltip:"Additional details",action:(o,l)=>{this.extras(o,l)},disabled:this.canShowExtras.bind(this)},{property:"component.favorite",label:"Actions",type:"icon",sortable:!1,icons:[{action:this.favorite.bind(this),color:this.isFavorite.bind(this),icon:"an an-star",tooltip:"Favorite",value:"favorite"},{action:this.goToDocumentation.bind(this),disabled:this.canGoToDocumentation.bind(this),icon:"an an-arrow-square-out",tooltip:"Click to go to documentation",value:"documentation"}]}];constructor(o,l){this.sampleComponents=o,this.router=l}ngOnInit(){this.items=this.sampleComponents.getItems()}experimentalColor(o){return o?.component?.status===N.Experimental?"caption-tag-08":"caption-tag-13"}extras(o,l){this.title=o,this.extraInformation=l,this.poModal.open()}goToDocumentation(o){this.router.navigate([o?.component?.link])}showMore(o){this.isLoading=!0,this.showMoreDisabled=!0,setTimeout(()=>{this.items=this.getItems(o),this.isLoading=!1},4e3)}sort(o){this.items=this.getItems(o)}showAlert(o){alert(o)}canGoToDocumentation(o){return o?.component?.status!==N.Stable}canShowExtras(o){return o?.component?.status!==N.Stable||o?.component?.extras.length===0}favorite(o){o.component.isFavorite=!o.component.isFavorite}getItems(o){return this.sampleComponents.getItems(o,this.showMoreDisabled)}isFavorite(o){return o?.component?.isFavorite?"caption-tag-08":"caption-tag-13"}static \u0275fac=function(l){return new(l||r)(_(de),_(ae))};static \u0275cmp=b({type:r,selectors:[["sample-po-table-components"]],viewQuery:function(l,a){if(l&1&&L(F,7),l&2){let m;k(m=I())&&(a.poModal=m.first)}},standalone:!1,features:[q([de])],decls:8,vars:9,consts:[[1,"po-font-text-large","po-text-color-neutral-dark-40"],["p-container","shadow",3,"p-show-more","p-sort-by","p-loading-show-more","p-columns","p-items","p-show-more-disabled","p-sort"],["p-table-column-template","",3,"p-property"],["p-click-out","true","p-size","sm",3,"p-title"],[1,"po-font-text"]],template:function(l,a){l&1&&(t(0,"div",0),e(1,"PO UI Library"),n(),i(2,"po-divider"),t(3,"po-table",1),u("p-show-more",function(p){return a.showMore(p)})("p-sort-by",function(p){return a.sort(p)}),Z(4,Lt,3,6,"ng-template",2),n(),t(5,"po-modal",3),ge(6,qt,4,1,"ul",null,he),n()),l&2&&(s(3),c("p-loading-show-more",a.isLoading)("p-columns",a.columns)("p-items",a.items)("p-show-more-disabled",a.showMoreDisabled)("p-sort",!0),s(),c("p-property","component.type"),s(),c("p-title",te("",a.title," - ",a.extraInformation==null?null:a.extraInformation.component)),s(),ve(a.extraInformation==null?null:a.extraInformation.extras))},dependencies:[B,F,y,Be,Pe],styles:[".badge[_ngcontent-%COMP%]{padding:3px 10px;border-radius:3px;color:#fff;width:100px;text-align:center;box-shadow:0 4px 8px #0003,0 6px 20px #00000030;font-size:10px}.badge.component[_ngcontent-%COMP%]{background-color:#82b1ff}.badge.service[_ngcontent-%COMP%]{background-color:#b39ddb}.badge.template[_ngcontent-%COMP%]{background-color:#ffb515}"]})}return r})();var Rt=r=>({"docs-sample-code-tabs":r}),it=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-components-view"]],standalone:!1,decls:38,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],["p-label","CSS"],["appCodeHighlight","",1,"css"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Po Field Components"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-components/sample-po-table-components.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-large po-text-color-neutral-dark-40">PO UI Library</div>

<po-divider />

<po-table
  p-container="shadow"
  [p-loading-show-more]="isLoading"
  [p-columns]="columns"
  [p-items]="items"
  [p-show-more-disabled]="showMoreDisabled"
  [p-sort]="true"
  (p-show-more)="showMore($event)"
  (p-sort-by)="sort($event)"
>
  <ng-template p-table-column-template [p-property]="'component.type'" let-value>
    <div class="badge { { value }}">{ { value | uppercase }}</div>
  </ng-template>
</po-table>

<po-modal p-click-out="true" p-size="sm" p-title="{ { title }} - { { extraInformation?.component }}">
  @for (extra of extraInformation?.extras; track extra) {
    <ul>
      <li class="po-font-text">{ { extra }}</li>
      <po-divider />
    </ul>
  }
</po-modal>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-components/sample-po-table-components.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PoModalComponent, PoTableColumn, PoTableColumnLabel, PoTableColumnSort } from '@po-ui/ng-components';

import { SamplePoTableComponentStatus } from './sample-po-table-components.enum';
import { SamplePoTableComponentsService } from './sample-po-table-components.service';

@Component({
  selector: 'sample-po-table-components',
  templateUrl: './sample-po-table-components.component.html',
  styleUrls: ['./sample-po-table-components.component.css'],
  providers: [SamplePoTableComponentsService],
  standalone: false
})
export class SamplePoTableComponentsComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  extraInformation: any;
  items: Array<any>;
  showMoreDisabled: boolean = false;
  title: any;
  isLoading: boolean = false;

  public readonly columns: Array<PoTableColumn> = [
    {
      property: 'component.status',
      type: 'label',
      label: 'Status',
      width: '5%',
      labels: <Array<PoTableColumnLabel>>[
        {
          value: SamplePoTableComponentStatus.Stable,
          color: 'caption-tag-13',
          label: 'Stable',
          textColor: 'white',
          tooltip: 'Published component'
        },
        {
          value: SamplePoTableComponentStatus.Experimental,
          color: 'caption-tag-08',
          label: 'Experimental',
          textColor: 'white',
          tooltip: 'Component in homologation'
        },
        {
          value: SamplePoTableComponentStatus.RoadMap,
          color: 'caption-tag-03',
          label: 'Roadmap',
          textColor: 'white',
          tooltip: 'Component in roadmap'
        }
      ]
    },
    {
      property: 'component.name',
      label: 'Name',
      type: 'link'
    },
    { property: 'component.type', label: 'Type', type: 'columnTemplate', width: '10%' },
    { property: 'component.description', label: 'Descri\xE7\xE3o', color: this.experimentalColor.bind(this) },
    {
      property: 'component.extra',
      label: 'Extras',
      width: '10%',
      type: 'link',
      tooltip: 'Additional details',
      action: (value, row) => {
        this.extras(value, row);
      },
      disabled: this.canShowExtras.bind(this)
    },
    {
      property: 'component.favorite',
      label: 'Actions',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.favorite.bind(this),
          color: this.isFavorite.bind(this),
          icon: 'an an-star',
          tooltip: 'Favorite',
          value: 'favorite'
        },
        {
          action: this.goToDocumentation.bind(this),
          disabled: this.canGoToDocumentation.bind(this),
          icon: 'an an-arrow-square-out',
          tooltip: 'Click to go to documentation',
          value: 'documentation'
        }
      ]
    }
  ];

  constructor(
    public sampleComponents: SamplePoTableComponentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = this.sampleComponents.getItems();
  }

  experimentalColor(row) {
    return row?.component?.status === SamplePoTableComponentStatus.Experimental ? 'caption-tag-08' : 'caption-tag-13';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.poModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row?.component?.link]);
  }

  showMore(sort: PoTableColumnSort) {
    this.isLoading = true;
    this.showMoreDisabled = true;
    setTimeout(() => {
      this.items = this.getItems(sort);
      this.isLoading = false;
    }, 4000);
  }

  sort(sort: PoTableColumnSort) {
    this.items = this.getItems(sort);
  }

  public showAlert(msg): void {
    alert(msg);
  }

  private canGoToDocumentation(row) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable;
  }

  private canShowExtras(row: any) {
    return row?.component?.status !== SamplePoTableComponentStatus.Stable || row?.component?.extras.length === 0;
  }

  private favorite(row) {
    row.component.isFavorite = !row.component.isFavorite;
  }

  private getItems(sort: PoTableColumnSort) {
    return this.sampleComponents.getItems(sort, this.showMoreDisabled);
  }

  private isFavorite(row) {
    return row?.component?.isFavorite ? 'caption-tag-08' : 'caption-tag-13';
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-components/sample-po-table-components.enum.ts"),n(),t(23,"pre",9),e(24,`export enum SamplePoTableComponentStatus {
  Stable,
  Experimental,
  RoadMap
}
`),n(),t(25,"label",6),e(26,"sample-po-table-components/sample-po-table-components.service.ts"),n(),t(27,"pre",9),e(28,`import { Injectable } from '@angular/core';

import { PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableComponentsService {
  readonly items = [
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Select',
        description: 'Display a list of items and allows selection',
        link: '/documentation/po-select',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Checkbox',
        description: 'Group of square buttons that allows multiple items to be selected',
        link: '/documentation/po-checkbox-group',
        extra: 'Best Practices',
        extras: ['Short and objective texts for items', 'Use with short lists', 'For big lists use PO Multiselect'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Login',
        description: 'Template for authentication',
        link: '/documentation/po-page-login',
        extra: 'Features',
        extras: [],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Number',
        description: 'Input that allows only numbers',
        link: '/documentation/po-number',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Page Dynamic Table',
        description: 'Template for list resources with a table',
        link: '/documentation/po-page-dynamic-table',
        extra: 'Features',
        extras: ['6 defaults actions', 'Use Metadata to build your page', 'No code', 'Customization'],
        status: 0,
        type: 'template'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Combo',
        description: 'Display a list of items with filter and allows selection',
        link: '/documentation/po-combo',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Notification',
        description: 'Show notification easily and quickly',
        link: '/documentation/po-notification',
        extra: 'Features',
        extras: ['4 types of notifications', 'Define time for your notifications', 'Use actions in your notification'],
        status: 0,
        type: 'service'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Multiselect',
        description: 'Display a list of items and allows multiple selection',
        link: '/documentation/po-multiselect',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: [],
        name: 'PO Grid',
        description: 'Create a grid for edition',
        link: '/documentation/po-grid',
        extra: 'Features',
        extras: [],
        status: 2,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Input',
        description: 'Input for general texts',
        link: '/documentation/po-input',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Textarea',
        description: 'Larger input for big texts',
        link: '/documentation/po-textarea',
        extra: 'Best Practices',
        extras: ['Recommended to large texts like observations and details', 'For short texts use po-input'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Datepicker',
        description: 'Input with calendar for dates',
        link: '/documentation/po-datepicker',
        extra: 'Features',
        extras: [
          'Multiple idioms ( pt, es , en)',
          'Custom date formats',
          'Period validation (start date and end date)'
        ],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Email',
        description: 'Input that allows valid email texts (username@email.com)',
        link: '/documentation/po-email',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Url',
        description: 'Input that expects a valid url as text (http://www.url.com)',
        link: '/documentation/po-url',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Password',
        description: 'Input with bullet text to type passwords',
        link: '/documentation/po-password',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Login',
        description: 'Input with a user icon that represents a login field',
        link: '/documentation/po-login',
        extra: 'Features',
        extras: ['Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys'],
        status: 0,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Upload',
        description: 'Upload file(s) with a loading bar',
        link: '/documentation/po-upload',
        extra: 'Features',
        extras: ['Multiple file selection', 'Automatic upload after click', 'File format and size restriction'],
        status: 1,
        type: 'component'
      }
    },
    {
      component: {
        favorite: ['favorite', 'documentation'],
        name: 'PO Avatar',
        description: 'Creates a circle with a picture inside',
        link: '/documentation/po-avatar',
        extra: 'Features',
        extras: ['Multiple sizes', 'Default image'],
        status: 0,
        type: 'component'
      }
    }
  ];

  getItems(sort?: PoTableColumnSort, loadAll: boolean = false): Array<any> {
    const result = [...this.items];

    if (sort && sort.column) {
      result.sort((value, valueToCompare) => this.sort(value, valueToCompare, sort));
    }

    if (!loadAll) {
      result.length = 10;
    }

    return result;
  }

  private sort(value: any, valueToCompare: any, sort: PoTableColumnSort) {
    const property = sort.column.property;
    const type = sort.type;

    if (property.split('.').length > 1) {
      const propertySplitedFirst = property.split('.')[0];
      const propertySplitedLast = property.split('.')[1];
      if (
        value[propertySplitedFirst][propertySplitedLast] < valueToCompare[propertySplitedFirst][propertySplitedLast]
      ) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    } else {
      if (value[property] < valueToCompare[property]) {
        return type === PoTableColumnSortType.Ascending ? -1 : 1;
      }
      return type === PoTableColumnSortType.Ascending ? 1 : -1;
    }
  }
}
`),n()()(),t(29,"po-tab",10)(30,"div")(31,"label",6),e(32,"sample-po-table-components/sample-po-table-components.component.css"),n(),t(33,"pre",11),e(34,`.badge {
  padding: 3px 10px;
  border-radius: 3px;
  color: #fff;
  width: 100px;
  text-align: center;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-size: 10px;
}

.badge.component {
  background-color: #82b1ff;
}

.badge.service {
  background-color: #b39ddb;
}

.badge.template {
  background-color: #ffb515;
}
`),n()()()()(),t(35,"div",12),i(36,"sample-po-table-components"),n(),i(37,"hr")),l&2&&(s(5),C("po-icon "+a.sampleCodeButtonIcon),s(),D(" ",a.sampleCodeButtonLabel),s(),c("ngClass",f(4,Rt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,nt],encapsulation:2})}return r})();var pe=(()=>{class r{http;constructor(o){this.http=o}getColumns(){return[{property:"id",label:"Id",type:"string",width:"90px"},{property:"label",label:"Name",type:"string",width:"90px"},{property:"email",label:"E-mail",type:"string",width:"120px"}]}getItems(){return this.http.get("https://po-sample-api.onrender.com/v1/heroes").pipe(Se("items"))}static \u0275fac=function(l){return new(l||r)(xe(_e))};static \u0275prov=O({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var zt=["POItemsOri"],Ht=["POItemsSelected"],at=(()=>{class r{service;poItemsOri;poItemsSelected;items=[];itemsSelected=[];columns;constructor(o){this.service=o}ngOnInit(){this.getColumns(),this.getItems()}getColumns(){this.columns=this.service.getColumns()}getItems(){this.service.getItems().subscribe({next:o=>this.items=o,error:o=>console.error(o)})}changeOptions(o,l){if(l==="new")this.itemsSelected.push({id:o.id,label:o.label,email:o.email}),this.itemsSelected=[...this.itemsSelected];else{let a=this.itemsSelected.findIndex(m=>m.id===o.id);this.poItemsSelected.removeItem(a),this.itemsSelected=[...this.poItemsSelected.items]}}deleteItems(o){this.items=o,this.itemsSelected=[]}static \u0275fac=function(l){return new(l||r)(_(pe))};static \u0275cmp=b({type:r,selectors:[["sample-po-table-heroes"]],viewQuery:function(l,a){if(l&1&&L(zt,7)(Ht,7),l&2){let m;k(m=I())&&(a.poItemsOri=m.first),k(m=I())&&(a.poItemsSelected=m.first)}},standalone:!1,features:[q([pe])],decls:11,vars:16,consts:[["POItemsOri",""],["POItemsSelected",""],[1,"po-row","po-pb-2"],[1,"po-md-6"],[1,"po-font-text-bold","po-text-color-neutral-dark-40"],["p-selectable","true","p-infinite-scroll-distance","80","p-height","300",3,"p-selected","p-unselected","p-delete-items","p-columns","p-infinite-scroll","p-hide-select-all","p-hide-table-search","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"],["p-height","300",3,"p-columns","p-hide-table-search","p-striped","p-infinite-scroll","p-items","p-hide-action-fixed-columns","p-text-wrap","p-virtual-scroll"]],template:function(l,a){l&1&&(t(0,"div",2)(1,"div",3)(2,"div",4),e(3,"Choose one or more heroes for your team"),n(),t(4,"po-table",5,0),u("p-selected",function(p){return a.changeOptions(p,"new")})("p-unselected",function(p){return a.changeOptions(p,"change")})("p-delete-items",function(p){return a.deleteItems(p)}),n()(),t(6,"div",3)(7,"div",4),e(8,"Here your chosen heroes"),n(),i(9,"po-table",6,1),n()()),l&2&&(s(4),c("p-columns",a.columns)("p-infinite-scroll",!0)("p-hide-select-all",!0)("p-hide-table-search",!1)("p-items",a.items)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1),s(5),c("p-columns",a.columns)("p-hide-table-search",!1)("p-striped",!0)("p-infinite-scroll",!0)("p-items",a.itemsSelected)("p-hide-action-fixed-columns",!0)("p-text-wrap",!0)("p-virtual-scroll",!1))},dependencies:[y],encapsulation:2})}return r})();var Wt=r=>({"docs-sample-code-tabs":r}),ot=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-heroes-view"]],standalone:!1,decls:28,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table - Heroes"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-heroes/sample-po-table-heroes.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-row po-pb-2">
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Choose one or more heroes for your team</div>
    <po-table
      #POItemsOri
      [p-columns]="columns"
      [p-infinite-scroll]="true"
      p-selectable="true"
      [p-hide-select-all]="true"
      [p-hide-table-search]="false"
      p-infinite-scroll-distance="80"
      (p-selected)="changeOptions($event, 'new')"
      (p-unselected)="changeOptions($event, 'change')"
      p-height="300"
      [p-items]="items"
      (p-delete-items)="deleteItems($event)"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
  <div class="po-md-6">
    <div class="po-font-text-bold po-text-color-neutral-dark-40">Here your chosen heroes</div>
    <po-table
      #POItemsSelected
      [p-columns]="columns"
      [p-hide-table-search]="false"
      [p-striped]="true"
      [p-infinite-scroll]="true"
      p-height="300"
      [p-items]="itemsSelected"
      [p-hide-action-fixed-columns]="true"
      [p-text-wrap]="true"
      [p-virtual-scroll]="false"
    >
    </po-table>
  </div>
</div>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-heroes/sample-po-table-heroes.component.ts"),n(),t(19,"pre",9),e(20,`import { Component, ViewChild, OnInit } from '@angular/core';
import { PoTableColumn, PoTableComponent } from '@po-ui/ng-components';

import { SamplePoTableHeroesService } from './sample-po-table-heroes.service';

@Component({
  selector: 'sample-po-table-heroes',
  templateUrl: './sample-po-table-heroes.component.html',
  providers: [SamplePoTableHeroesService],
  standalone: false
})
export class SamplePoTableHeroesComponent implements OnInit {
  @ViewChild('POItemsOri', { static: true }) poItemsOri: PoTableComponent;
  @ViewChild('POItemsSelected', { static: true }) poItemsSelected: PoTableComponent;

  items: Array<any> = [];
  itemsSelected: Array<any> = [];
  columns: Array<PoTableColumn>;

  constructor(private service: SamplePoTableHeroesService) {}

  ngOnInit(): void {
    this.getColumns();
    this.getItems();
  }

  getColumns(): void {
    this.columns = this.service.getColumns();
  }

  getItems(): void {
    this.service.getItems().subscribe({
      next: res => (this.items = res),
      error: err => console.error(err)
    });
  }

  changeOptions(event, type): void {
    if (type === 'new') {
      this.itemsSelected.push({
        id: event.id,
        label: event.label,
        email: event.email
      });
      this.itemsSelected = [...this.itemsSelected];
    } else {
      const index = this.itemsSelected.findIndex(el => el.id === event.id);
      this.poItemsSelected.removeItem(index);
      this.itemsSelected = [...this.poItemsSelected.items];
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
    this.itemsSelected = [];
  }
}
`),n(),t(21,"label",6),e(22,"sample-po-table-heroes/sample-po-table-heroes.service.ts"),n(),t(23,"pre",9),e(24,`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SamplePoTableHeroesService {
  constructor(private http: HttpClient) {}
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'Id', type: 'string', width: '90px' },
      { property: 'label', label: 'Name', type: 'string', width: '90px' },
      { property: 'email', label: 'E-mail', type: 'string', width: '120px' }
    ];
  }

  getItems(): Observable<any> {
    return this.http.get('https://po-sample-api.onrender.com/v1/heroes').pipe(pluck('items'));
  }
}
`),n()()()()(),t(25,"div",10),i(26,"sample-po-table-heroes"),n(),i(27,"hr")),l&2&&(s(5),C("po-icon "+a.sampleCodeButtonIcon),s(),D(" ",a.sampleCodeButtonLabel),s(),c("ngClass",f(4,Wt,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,at],encapsulation:2})}return r})();var Qt=()=>({code:"001",table:"PO Table",angular:"PO-UI"}),Gt=r=>[r],lt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-draggable"]],standalone:!1,decls:4,vars:7,consts:[[1,"po-font-text-bold","po-text-color-neutral-dark-40"],[3,"p-items","p-draggable","p-hide-columns-manager","p-hide-table-search"]],template:function(l,a){l&1&&(t(0,"div",0),e(1,` Choose one column and drag to another horizontal position in the table and drop
`),n(),i(2,"po-divider")(3,"po-table",1)),l&2&&(s(3),c("p-items",f(5,Gt,ne(4,Qt)))("p-draggable",!0)("p-hide-columns-manager",!0)("p-hide-table-search",!1))},dependencies:[B,y],encapsulation:2})}return r})();var $t=r=>({"docs-sample-code-tabs":r}),rt=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-draggable-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(l,a){l&1&&(i(0,"br"),t(1,"blockquote",0)(2,"label",1),e(3,"PO Table Drag and Drop"),n(),t(4,"a",2),u("click",function(){return a.toggleSampleCodeTabs()}),i(5,"span"),e(6),n()(),t(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-table-draggable/sample-po-table-draggable.component.html"),n(),t(13,"pre",7),e(14,`<div class="po-font-text-bold po-text-color-neutral-dark-40">
  Choose one column and drag to another horizontal position in the table and drop
</div>

<po-divider></po-divider>

<po-table
  [p-items]="[{ code: '001', table: 'PO Table', angular: 'PO-UI' }]"
  [p-draggable]="true"
  [p-hide-columns-manager]="true"
  [p-hide-table-search]="false"
>
</po-table>
`),n()()(),t(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-table-draggable/sample-po-table-draggable.component.ts"),n(),t(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-table-draggable',
  templateUrl: './sample-po-table-draggable.component.html',
  standalone: false
})
export class SamplePoTableDraggableComponent {}
`),n()()()()(),t(21,"div",10),i(22,"sample-po-table-draggable"),n(),i(23,"hr")),l&2&&(s(5),C("po-icon "+a.sampleCodeButtonIcon),s(),D(" ",a.sampleCodeButtonLabel),s(),c("ngClass",f(4,$t,a.hideSampleCodeTabs)))},dependencies:[A,w,T,P,lt],encapsulation:2})}return r})();var mt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275cmp=b({type:r,selectors:[["sample-po-table-doc"]],standalone:!1,decls:4661,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/documentation/po-table-row-template"],["href","/documentation/po-table-column-template"],["href","/documentation/po-table-cell-template"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","PoTableAction[]"],["href","https://po-ui.io/icons"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","PoTableColumn[]"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","PoSearchFilterMode"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","any[]"],["pan","",1,"docs-api-property-type","PoTableLiterals"],["href","/documentation/po-i18n"],["href","https://po-ui.io/guides/api"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoTableColumn"],["pan","",1,"docs-api-property-type","PoTableColumnSortType"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],[1,"dot","po-caption-tag-01"],[1,"dot","po-caption-tag-02"],[1,"dot","po-caption-tag-03"],[1,"dot","po-caption-tag-04"],[1,"dot","po-caption-tag-05"],[1,"dot","po-caption-tag-06"],[1,"dot","po-caption-tag-07"],[1,"dot","po-caption-tag-08"],[1,"dot","po-caption-tag-09"],[1,"dot","po-caption-tag-10"],[1,"dot","po-caption-tag-11"],[1,"dot","po-caption-tag-12"],[1,"dot","po-caption-tag-13"],[1,"dot","po-caption-tag-14"],[1,"dot","po-caption-tag-15"],[1,"dot","po-caption-tag-16"],[1,"dot","po-caption-tag-17"],[1,"dot","po-caption-tag-18"],[1,"dot","po-caption-tag-19"],[1,"dot","po-caption-tag-20"],[1,"dot","po-caption-tag-21"],[1,"dot","po-caption-tag-22"],[1,"dot","po-caption-tag-23"],[1,"dot","po-caption-tag-24"],[1,"dot","po-caption-tag-25"],[1,"dot","po-caption-tag-26"],[1,"dot","po-caption-tag-27"],[1,"dot","po-caption-tag-28"],[1,"dot","po-caption-tag-29"],[1,"dot","po-caption-tag-30"],[1,"dot","po-caption-tag-31"],[1,"dot","po-caption-tag-32"],[1,"dot","po-caption-tag-33"],[1,"dot","po-caption-tag-34"],[1,"dot","po-caption-tag-35"],["pan","",1,"docs-api-property-type","PoTableDetail"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["id","tableColumnIcon"],[1,"an","an-check"],[1,"an","an-warning-circle"],[1,"an","an-x"],[1,"an","an-info"],["pan","",1,"docs-api-property-type","PoTagType"],["href","https://angular.io/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableDetailColumn>"]],template:function(l,a){l&1&&(t(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoTableModule } from '@po-ui/ng-components';"),n()(),t(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente po-table"),n()(),t(7,"h3",3),e(8,"Componente"),n(),t(9,"h4",4)(10,"code",5),e(11,"PoTableComponent"),n()(),t(12,"div",2)(13,"p"),e(14,`Este componente de tabela \xE9 utilizado para exibi\xE7\xE3o de dados com diferentes tipos como por exemplo textos, data, horas e n\xFAmeros com
formato personalizado.`),n(),t(15,"p"),e(16,`Tamb\xE9m \xE9 possivel criar tabelas com ordena\xE7\xE3o de dados, linhas com detalhes, coluna para sele\xE7\xE3o de linhas, coluna com a\xE7\xF5es e tamb\xE9m
carregamento por demanda atrav\xE9s do bot\xE3o `),t(17,"strong"),e(18,"Carregar mais resultados"),n(),e(19,"."),n(),t(20,"blockquote")(21,"p"),e(22,"As linhas de detalhes podem tamb\xE9m ser customizadas atrav\xE9s do "),t(23,"a",6)(24,"code"),e(25,"p-table-row-template"),n()(),e(26,"."),n()(),t(27,"blockquote")(28,"p"),e(29,"As colunas podem ser customizadas atrav\xE9s dos templates "),t(30,"a",7)(31,"code"),e(32,"p-table-column-template"),n()(),e(33,`
e `),t(34,"a",8)(35,"code"),e(36,"p-table-cell-template"),n()(),e(37,"."),n()(),t(38,"p"),e(39,`O componente permite gerenciar a exibi\xE7\xE3o das colunas dinamicamente. Esta funcionalidade pode ser acessada atrav\xE9s do \xEDcone de engrenagem
no canto superior direito do cabe\xE7alho da tabela.`),n(),t(40,"p"),e(41,"Caso a largura de todas as colunas forem definidas e o total ultrapassar o tamanho tabela, ser\xE1 exibido um "),t(42,"em"),e(43,"scroll"),n(),e(44,` na horizontal para a
completa visualiza\xE7\xE3o dos dados.`),n(),t(45,"h4"),e(46,"Tokens customiz\xE1veis"),n(),t(47,"p"),e(48,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),n(),t(49,"blockquote")(50,"p"),e(51,"Para maiores informa\xE7\xF5es, acesse o guia "),t(52,"a",9),e(53,"Personalizando o Tema Padr\xE3o com Tokens CSS"),n(),e(54,"."),n()(),t(55,"table")(56,"thead")(57,"tr")(58,"th"),e(59,"Propriedade"),n(),t(60,"th"),e(61,"Descri\xE7\xE3o"),n(),t(62,"th"),e(63,"Valor Padr\xE3o"),n()()(),t(64,"tbody")(65,"tr")(66,"td")(67,"strong"),e(68,"Default Values"),n()(),i(69,"td")(70,"td"),n(),t(71,"tr")(72,"td")(73,"code"),e(74,"--font-family"),n()(),t(75,"td"),e(76,"Fam\xEDlia tipogr\xE1fica usada"),n(),t(77,"td")(78,"code"),e(79,"var(--font-family-theme)"),n()()(),t(80,"tr")(81,"td")(82,"code"),e(83,"--background-color"),n()(),t(84,"td"),e(85,"Cor de background"),n(),t(86,"td")(87,"code"),e(88,"var(--color-neutral-light-00)"),n()()(),t(89,"tr")(90,"td")(91,"code"),e(92,"--color"),n()(),t(93,"td"),e(94,"Cor principal da table"),n(),t(95,"td")(96,"code"),e(97,"var(--color-neutral-dark-95)"),n()()(),t(98,"tr")(99,"td")(100,"code"),e(101,"--background-striped-color"),n()(),t(102,"td"),e(103,"Cor do background quando striped"),n(),t(104,"td")(105,"code"),e(106,"var(--color-neutral-light-05)"),n()()(),t(107,"tr")(108,"td")(109,"code"),e(110,"--color-line"),n()(),t(111,"td"),e(112,"Cor das linhas"),n(),t(113,"td")(114,"code"),e(115,"var(--color-neutral-mid-40)"),n()()(),t(116,"tr")(117,"td")(118,"strong"),e(119,"Hover"),n()(),i(120,"td")(121,"td"),n(),t(122,"tr")(123,"td")(124,"code"),e(125,"--color-hover"),n()(),t(126,"td"),e(127,"Cor principal no estado hover"),n(),t(128,"td")(129,"code"),e(130,"var(--color-action-hover)"),n()()(),t(131,"tr")(132,"td")(133,"code"),e(134,"--background-color-hover"),n()(),t(135,"td"),e(136,"Cor de background no estado hover"),n(),t(137,"td")(138,"code"),e(139,"var(--color-brand-01-lighter)"),n()()(),t(140,"tr")(141,"td")(142,"strong"),e(143,"Focused"),n()(),i(144,"td")(145,"td"),n(),t(146,"tr")(147,"td")(148,"code"),e(149,"--outline-color-focused"),n()(),t(150,"td"),e(151,"Cor do outline do estado de focus"),n(),t(152,"td")(153,"code"),e(154,"var(--color-action-focus)"),n()()(),t(155,"tr")(156,"td")(157,"strong"),e(158,"Disabled"),n()(),i(159,"td")(160,"td"),n(),t(161,"tr")(162,"td")(163,"code"),e(164,"--color-disabled"),n()(),t(165,"td"),e(166,"Cor principal no estado disabled"),n(),t(167,"td")(168,"code"),e(169,"var(--color-neutral-mid-40)"),n()()(),t(170,"tr")(171,"td")(172,"strong"),e(173,"Headline"),n()(),i(174,"td")(175,"td"),n(),t(176,"tr")(177,"td")(178,"code"),e(179,"--background-color-headline"),n(),e(180," \xA0"),n(),t(181,"td"),e(182,"Cor do cabe\xE7alho"),n(),t(183,"td")(184,"code"),e(185,"var(--color-neutral-light-10)"),n()()(),t(186,"tr")(187,"td")(188,"code"),e(189,"--font-weight-headline"),n()(),t(190,"td"),e(191,"Peso da fonte do cabe\xE7alho"),n(),t(192,"td")(193,"code"),e(194,"var(--font-weight-bold)"),n()()(),t(195,"tr")(196,"td")(197,"strong"),e(198,"Selected"),n()(),i(199,"td")(200,"td"),n(),t(201,"tr")(202,"td")(203,"code"),e(204,"--background-color-selected"),n(),e(205,"\xA0"),n(),t(206,"td"),e(207,"Cor de background no estado de selecionado"),n(),t(208,"td")(209,"code"),e(210,"var(--color-brand-01-lightest)"),n()()(),t(211,"tr")(212,"td")(213,"strong"),e(214,"Actived"),n()(),i(215,"td")(216,"td"),n(),t(217,"tr")(218,"td")(219,"code"),e(220,"--color-actived"),n()(),t(221,"td"),e(222,"Cor do texto no estado de selecionado"),n(),t(223,"td")(224,"code"),e(225,"var(--color-neutral-dark-90)"),n()()(),t(226,"tr")(227,"td")(228,"code"),e(229,"--background-color-actived"),n()(),t(230,"td"),e(231,"Cor de background no estado de selecionado"),n(),t(232,"td")(233,"code"),e(234,"var(--color-brand-01-light)"),n()()()()()(),t(235,"div",10)(236,"h4",11),e(237,"Seletor"),n(),t(238,"pre",12),e(239,`<po-table
    p-actions-right="boolean"
    p-actions="PoTableAction[]"
    (p-all-selected)="EventEmitter"
    (p-all-unselected)="EventEmitter"
    p-auto-collapse="boolean"
    (p-change-fixed-columns)="EventEmitter"
    (p-change-visible-columns)="EventEmitter"
    (p-collapsed)="EventEmitter"
    (p-restore-column-manager)="EventEmitter"
    p-columns="PoTableColumn[]"
    p-components-size="string"
    p-container="string"
    p-draggable="boolean"
    (p-delete-items)="EventEmitter"
    (p-expanded)="EventEmitter"
    p-filter-type="PoSearchFilterMode"
    p-filtered-columns="Array<string>"
    p-height="number"
    p-hide-action-fixed-columns="boolean"
    p-hide-batch-actions="boolean"
    p-hide-columns-manager="boolean"
    p-hide-detail="boolean"
    p-hide-select-all="boolean"
    p-hide-table-search="boolean"
    p-infinite-scroll="boolean"
    p-infinite-scroll-distance="number"
    p-items="any[]"
    p-literals="PoTableLiterals"
    p-loading="boolean"
    p-loading-show-more="boolean"
    p-max-columns="number"
    p-param-delete-api="string"
    p-selectable="boolean"
    p-selectable-entire-line="boolean"
    (p-selected)="EventEmitter"
    p-service-api="string"
    p-service-delete="string"
    (p-show-more)="EventEmitter"
    p-show-more-disabled="boolean"
    p-single-select="boolean"
    p-sort="boolean"
    (p-sort-by)="EventEmitter"
    p-spacing="string"
    p-striped="boolean"
    p-text-wrap="boolean"
    (p-unselected)="EventEmitter"
    p-virtual-scroll="boolean" >
</po-table>
`),n()(),t(240,"h4",13),e(241,"Propriedades"),n(),t(242,"table",14)(243,"tr",15)(244,"th",16),e(245,"Nome"),n(),t(246,"th",16),e(247,"Tipo"),n(),t(248,"th",16),e(249,"Padr\xE3o"),n(),t(250,"th",16),e(251,"Descri\xE7\xE3o"),n()(),t(252,"tr",17)(253,"td",18)(254,"div",19)(255,"span",20),e(256," p-actions-right"),i(257,"br"),n()()(),t(258,"td",21)(259,"code",22),e(260,"boolean"),n()(),t(261,"td",23)(262,"p")(263,"code"),e(264,"false"),n()()(),t(265,"td",24)(266,"em")(267,"strong"),e(268,"(opcional)"),n()(),t(269,"p"),e(270,"Define que a coluna de a\xE7\xF5es ficar\xE1 no lado direito da tabela."),n()()(),t(271,"tr",17)(272,"td",18)(273,"div",19)(274,"span",20),e(275," p-actions"),i(276,"br"),n()()(),t(277,"td",21)(278,"code",25),e(279,"PoTableAction[]"),n()(),t(280,"td",23),e(281,"-"),n(),t(282,"td",24)(283,"em")(284,"strong"),e(285,"(opcional)"),n()(),t(286,"p"),e(287,"Define uma lista de a\xE7\xF5es."),n(),t(288,"p"),e(289,`Quando houver apenas uma a\xE7\xE3o definida ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrup\xE1-las exibindo o \xEDcone `),t(290,"a",26)(291,"strong"),e(292,"an an-dots-three"),n()(),e(293," que listar\xE1 as a\xE7\xF5es ao ser clicado."),n(),t(294,"p")(295,"strong"),e(296,"A coluna de a\xE7\xF5es n\xE3o ser\xE1 exibida quando:"),n()(),t(297,"ul")(298,"li"),e(299,"a lista conter valores inv\xE1lidos ou indefinidos."),n(),t(300,"li"),e(301,"tenha uma \xFAnica a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),n()()()(),t(302,"tr",17)(303,"td",18)(304,"div",27)(305,"span",28),e(306," (p-all-selected)"),i(307,"br"),n()()(),t(308,"td",21)(309,"code",29),e(310,"EventEmitter"),n()(),t(311,"td",23),e(312,"-"),n(),t(313,"td",24)(314,"em")(315,"strong"),e(316,"(opcional)"),n()(),t(317,"p"),e(318,"Evento executado quando todas as linhas s\xE3o selecionadas por meio do "),t(319,"em"),e(320,"checkbox"),n(),e(321," que seleciona todas as linhas."),n()()(),t(322,"tr",17)(323,"td",18)(324,"div",27)(325,"span",28),e(326," (p-all-unselected)"),i(327,"br"),n()()(),t(328,"td",21)(329,"code",29),e(330,"EventEmitter"),n()(),t(331,"td",23),e(332,"-"),n(),t(333,"td",24)(334,"em")(335,"strong"),e(336,"(opcional)"),n()(),t(337,"p"),e(338,"Evento executado quando a sele\xE7\xE3o das linhas \xE9 desmarcada por meio do "),t(339,"em"),e(340,"checkbox"),n(),e(341," que seleciona todas as linhas."),n()()(),t(342,"tr",17)(343,"td",18)(344,"div",19)(345,"span",20),e(346," p-auto-collapse"),i(347,"br"),n()()(),t(348,"td",21)(349,"code",22),e(350,"boolean"),n()(),t(351,"td",23)(352,"p")(353,"code"),e(354,"false"),n()()(),t(355,"td",24)(356,"em")(357,"strong"),e(358,"(opcional)"),n()(),t(359,"p"),e(360,"Permite fechar um detalhe ou row template automaticamente, ao abrir outro item."),n()()(),t(361,"tr",17)(362,"td",18)(363,"div",27)(364,"span",28),e(365," (p-change-fixed-columns)"),i(366,"br"),n()()(),t(367,"td",21)(368,"code",29),e(369,"EventEmitter"),n()(),t(370,"td",23),e(371,"-"),n(),t(372,"td",24)(373,"em")(374,"strong"),e(375,"(opcional)"),n()(),t(376,"p"),e(377,"Evento disparado ao alterar o estado de fixa\xE7\xE3o de uma coluna no gerenciador de colunas."),n(),t(378,"p"),e(379,`O componente envia como par\xE2metro um array de string com as propriedades das colunas fixas.
Por exemplo: ["name", "age"].`),n(),t(380,"blockquote")(381,"p"),e(382,"Incompat\xEDvel com "),t(383,"code"),e(384,"p-hide-action-fixed-columns"),n(),e(385,". Quando esta propriedade estiver ativa, o evento n\xE3o ser\xE1 disparado."),n()()()(),t(386,"tr",17)(387,"td",18)(388,"div",27)(389,"span",28),e(390," (p-change-visible-columns)"),i(391,"br"),n()()(),t(392,"td",21)(393,"code",29),e(394,"EventEmitter"),n()(),t(395,"td",23),e(396,"-"),n(),t(397,"td",24)(398,"em")(399,"strong"),e(400,"(opcional)"),n()(),t(401,"p"),e(402,"Evento disparado ao fechar o page slide do gerenciador de colunas ap\xF3s alterar as colunas vis\xEDveis."),n(),t(403,"p"),e(404,`O componente envia como par\xE2metro um array de string com as colunas vis\xEDveis atualizadas.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(405,"tr",17)(406,"td",18)(407,"div",27)(408,"span",28),e(409," (p-collapsed)"),i(410,"br"),n()()(),t(411,"td",21)(412,"code",29),e(413,"EventEmitter"),n()(),t(414,"td",23),e(415,"-"),n(),t(416,"td",24)(417,"em")(418,"strong"),e(419,"(opcional)"),n()(),t(420,"p"),e(421,"Evento executado ao colapsar uma linha do "),t(422,"code"),e(423,"po-table"),n(),e(424,"."),n(),t(425,"blockquote")(426,"p"),e(427,"Como par\xE2metro o componente envia o item colapsado."),n()()()(),t(428,"tr",17)(429,"td",18)(430,"div",27)(431,"span",28),e(432," (p-restore-column-manager)"),i(433,"br"),n()()(),t(434,"td",21)(435,"code",29),e(436,"EventEmitter"),n()(),t(437,"td",23),e(438,"-"),n(),t(439,"td",24)(440,"em")(441,"strong"),e(442,"(opcional)"),n()(),t(443,"p"),e(444,"Evento disparado ao clicar no bot\xE3o de restaurar padr\xE3o no gerenciador de colunas."),n(),t(445,"p"),e(446,`O componente envia como par\xE2metro um array de string com as colunas configuradas inicialmente.
Por exemplo: ["idCard", "name", "hireStatus", "age"].`),n()()(),t(447,"tr",17)(448,"td",18)(449,"div",19)(450,"span",20),e(451," p-columns"),i(452,"br"),n()()(),t(453,"td",21)(454,"code",30),e(455,"PoTableColumn[]"),n()(),t(456,"td",23),e(457,"-"),n(),t(458,"td",24)(459,"em")(460,"strong"),e(461,"(opcional)"),n()(),t(462,"p"),e(463,"Lista das colunas da tabela, deve receber um "),t(464,"em"),e(465,"array"),n(),e(466," de objetos que implementam a interface "),t(467,"code"),e(468,"PoTableColumn"),n(),e(469,`.
Por padr\xE3o receber\xE1 como valor a primeira coluna da lista de itens da tabela.`),n(),t(470,"blockquote")(471,"p"),e(472,"Caso n\xE3o encontre valor, a mensagem 'Nenhuma defini\xE7\xE3o de colunas' ser\xE1 exibida."),n()()()(),t(473,"tr",17)(474,"td",18)(475,"div",19)(476,"span",20),e(477," p-components-size"),i(478,"br"),n()()(),t(479,"td",21)(480,"code",31),e(481,"string"),n()(),t(482,"td",23)(483,"p")(484,"code"),e(485,"medium"),n()()(),t(486,"td",24)(487,"em")(488,"strong"),e(489,"(opcional)"),n()(),t(490,"p"),e(491,"Define o tamanho dos componentes de formul\xE1rio no table:"),n(),t(492,"ul")(493,"li")(494,"code"),e(495,"small"),n(),e(496,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),n(),t(497,"li")(498,"code"),e(499,"medium"),n(),e(500,": aplica a medida medium de cada componente."),n()(),t(501,"blockquote")(502,"p"),e(503,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),t(504,"code"),e(505,"medium"),n(),e(506,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),t(507,"a",32),e(508,"po-theme"),n(),e(509,"."),n()()()(),t(510,"tr",17)(511,"td",18)(512,"div",19)(513,"span",20),e(514," p-container"),i(515,"br"),n()()(),t(516,"td",21)(517,"code",31),e(518,"string"),n()(),t(519,"td",23)(520,"p")(521,"code"),e(522,"border"),n()()(),t(523,"td",24)(524,"em")(525,"strong"),e(526,"(opcional)"),n()(),t(527,"p"),e(528,"Adiciona um contorno arredondado ao "),t(529,"code"),e(530,"po-table"),n(),e(531,", as op\xE7\xF5es s\xE3o:"),n(),t(532,"ul")(533,"li")(534,"code"),e(535,"border"),n(),e(536,": com bordas/linhas."),n(),t(537,"li")(538,"code"),e(539,"shadow"),n(),e(540,": com sombras."),n()()()(),t(541,"tr",17)(542,"td",18)(543,"div",19)(544,"span",20),e(545," p-draggable"),i(546,"br"),n()()(),t(547,"td",21)(548,"code",22),e(549,"boolean"),n()(),t(550,"td",23)(551,"p")(552,"code"),e(553,"false"),n()()(),t(554,"td",24)(555,"em")(556,"strong"),e(557,"(opcional)"),n()(),t(558,"p"),e(559,"Habilita o modo drag and drop para as colunas da tabela."),n()()(),t(560,"tr",17)(561,"td",18)(562,"div",27)(563,"span",28),e(564," (p-delete-items)"),i(565,"br"),n()()(),t(566,"td",21)(567,"code",29),e(568,"EventEmitter"),n()(),t(569,"td",23),e(570,"-"),n(),t(571,"td",24)(572,"em")(573,"strong"),e(574,"(opcional)"),n()(),t(575,"p"),e(576,"Evento executado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado."),n(),t(577,"pre")(578,"code"),e(579,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()(),t(580,"blockquote")(581,"p"),e(582,"Como par\xE2metro o componente envia a lista atualizada, sem os itens exclu\xEDdos."),n()()()(),t(583,"tr",17)(584,"td",18)(585,"div",27)(586,"span",28),e(587," (p-expanded)"),i(588,"br"),n()()(),t(589,"td",21)(590,"code",29),e(591,"EventEmitter"),n()(),t(592,"td",23),e(593,"-"),n(),t(594,"td",24)(595,"em")(596,"strong"),e(597,"(opcional)"),n()(),t(598,"p"),e(599,"Evento executado ao expandir uma linha do "),t(600,"code"),e(601,"po-table"),n(),e(602,"."),n(),t(603,"blockquote")(604,"p"),e(605,"Como par\xE2metro o componente envia o item expandido."),n()()()(),t(606,"tr",17)(607,"td",18)(608,"div",19)(609,"span",20),e(610," p-filter-type"),i(611,"br"),n()()(),t(612,"td",21)(613,"code",33),e(614,"PoSearchFilterMode"),n()(),t(615,"td",23)(616,"p")(617,"code"),e(618,"startsWith"),n()()(),t(619,"td",24)(620,"em")(621,"strong"),e(622,"(opcional)"),n()(),t(623,"p"),e(624,`Define o modo de pesquisa utilizado no campo de busca, quando habilitado.
Valores definidos no enum: PoSearchFilterMode`),n(),t(625,"blockquote")(626,"p"),e(627,`Obs: A pesquisa \xE9 realizada exclusivamente nos dados locais, ou seja, aqueles que foram
renderizados na tabela.`),n()()()(),t(628,"tr",17)(629,"td",18)(630,"div",19)(631,"span",20),e(632," p-filtered-columns"),i(633,"br"),n()()(),t(634,"td",21)(635,"code",34),e(636,"Array<string>"),n()(),t(637,"td",23),e(638,"-"),n(),t(639,"td",24)(640,"em")(641,"strong"),e(642,"(opcional)"),n()(),t(643,"p"),e(644,`Define as colunas que ser\xE3o filtradas no campo de pesquisa.
Aceita um array de strings, representando as colunas espec\xEDficas que ser\xE3o consideradas na filtragem.`),n()()(),t(645,"tr",17)(646,"td",18)(647,"div",19)(648,"span",20),e(649," p-height"),i(650,"br"),n()()(),t(651,"td",21)(652,"code",35),e(653,"number"),n()(),t(654,"td",23),e(655,"-"),n(),t(656,"td",24)(657,"em")(658,"strong"),e(659,"(opcional)"),n()(),t(660,"p"),e(661,"Define a altura da tabela em "),t(662,"em"),e(663,"pixels"),n(),e(664," e fixa o cabe\xE7alho."),n(),t(665,"p"),e(666,"Ao utilizar essa propriedade ser\xE1 inserido o "),t(667,"code"),e(668,"virtual-scroll"),n(),e(669," na tabela melhorando a performance."),n()()(),t(670,"tr",17)(671,"td",18)(672,"div",19)(673,"span",20),e(674," p-hide-action-fixed-columns"),i(675,"br"),n()()(),t(676,"td",21)(677,"code",22),e(678,"boolean"),n()(),t(679,"td",23)(680,"p")(681,"code"),e(682,"false"),n()()(),t(683,"td",24)(684,"em")(685,"strong"),e(686,"(opcional)"),n()(),t(687,"p"),e(688,"Permite que as a\xE7\xF5es para fixar uma coluna da tabela sejam escondidas."),n()()(),t(689,"tr",17)(690,"td",18)(691,"div",19)(692,"span",20),e(693," p-hide-batch-actions"),i(694,"br"),n()()(),t(695,"td",21)(696,"code",22),e(697,"boolean"),n()(),t(698,"td",23)(699,"p")(700,"code"),e(701,"true"),n()()(),t(702,"td",24)(703,"em")(704,"strong"),e(705,"(opcional)"),n()(),t(706,"p"),e(707,"Permite que as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens, sejam escondidas."),n()()(),t(708,"tr",17)(709,"td",18)(710,"div",19)(711,"span",20),e(712," p-hide-columns-manager"),i(713,"br"),n()()(),t(714,"td",21)(715,"code",22),e(716,"boolean"),n()(),t(717,"td",23)(718,"p")(719,"code"),e(720,"false"),n()()(),t(721,"td",24)(722,"em")(723,"strong"),e(724,"(opcional)"),n()(),t(725,"p"),e(726,"Permite que o gerenciador de colunas, respons\xE1vel pela defini\xE7\xE3o de quais colunas ser\xE3o exibidas, seja escondido."),n()()(),t(727,"tr",17)(728,"td",18)(729,"div",19)(730,"span",20),e(731," p-hide-detail"),i(732,"br"),n()()(),t(733,"td",21)(734,"code",22),e(735,"boolean"),n()(),t(736,"td",23)(737,"p")(738,"code"),e(739,"false"),n()()(),t(740,"td",24)(741,"em")(742,"strong"),e(743,"(opcional)"),n()(),t(744,"p"),e(745,"Habilita a visualiza\xE7\xE3o da lista de detalhes de cada linha da coluna."),n()()(),t(746,"tr",17)(747,"td",18)(748,"div",19)(749,"span",20),e(750," p-hide-select-all"),i(751,"br"),n()()(),t(752,"td",21)(753,"code",22),e(754,"boolean"),n()(),t(755,"td",23)(756,"p")(757,"code"),e(758,"false"),n()()(),t(759,"td",24)(760,"p"),e(761,"Esconde o "),t(762,"em"),e(763,"checkbox"),n(),e(764," para sele\xE7\xE3o de todas as linhas."),n(),t(765,"blockquote")(766,"p"),e(767,"Sempre receber\xE1 "),t(768,"em"),e(769,"true"),n(),e(770," caso a sele\xE7\xE3o de apenas uma linha esteja ativa."),n()()()(),t(771,"tr",17)(772,"td",18)(773,"div",19)(774,"span",20),e(775," p-hide-table-search"),i(776,"br"),n()()(),t(777,"td",21)(778,"code",22),e(779,"boolean"),n()(),t(780,"td",23)(781,"p")(782,"code"),e(783,"true"),n()()(),t(784,"td",24)(785,"em")(786,"strong"),e(787,"(opcional)"),n()(),t(788,"p"),e(789,"Permite que o campo de pesquisa seja escondido."),n()()(),t(790,"tr",17)(791,"td",18)(792,"div",19)(793,"span",20),e(794," p-infinite-scroll"),i(795,"br"),n()()(),t(796,"td",21)(797,"code",22),e(798,"boolean"),n()(),t(799,"td",23)(800,"p")(801,"code"),e(802,"false"),n()()(),t(803,"td",24)(804,"em")(805,"strong"),e(806,"(opcional)"),n()(),t(807,"p"),e(808,`Se verdadeiro, ativa a funcionalidade de scroll infinito para a tabela e o bot\xE3o "Carregar Mais" deixar\xE1 de ser exibido. Ao chegar no fim da tabela
executar\xE1 a fun\xE7\xE3o `),t(809,"code"),e(810,"p-show-more"),n(),e(811,"."),n(),t(812,"p")(813,"strong"),e(814,"Regras de utiliza\xE7\xE3o:"),n()(),t(815,"ul")(816,"li"),e(817,"O scroll infinito s\xF3 funciona para tabelas que utilizam a propriedade "),t(818,"code"),e(819,"p-height"),n(),e(820," e que possuem o scroll j\xE1 na carga inicial dos dados."),n()()()(),t(821,"tr",17)(822,"td",18)(823,"div",19)(824,"span",20),e(825," p-infinite-scroll-distance"),i(826,"br"),n()()(),t(827,"td",21)(828,"code",35),e(829,"number"),n()(),t(830,"td",23),e(831,"-"),n(),t(832,"td",24)(833,"em")(834,"strong"),e(835,"(opcional)"),n()(),t(836,"p"),e(837,"Define o percentual necess\xE1rio para disparar o evento "),t(838,"code"),e(839,"p-show-more"),n(),e(840,`, que \xE9 respons\xE1vel por carregar mais dados na tabela. Caso o valor informado seja maior que 100 ou menor
que 0, o valor padr\xE3o ser\xE1 100%`),n(),t(841,"p")(842,"strong"),e(843,"Exemplos:"),n()(),t(844,"ul")(845,"li"),e(846,"p-infinite-scroll-distance = 80: Quando atingir 80% do scroll da tabela, o "),t(847,"code"),e(848,"p-show-more"),n(),e(849," ser\xE1 disparado."),n()()()(),t(850,"tr",17)(851,"td",18)(852,"div",19)(853,"span",20),e(854," p-items"),i(855,"br"),n()()(),t(856,"td",21)(857,"code",36),e(858,"any[]"),n()(),t(859,"td",23),e(860,"-"),n(),t(861,"td",24)(862,"p"),e(863,"Lista de itens da tabela."),n(),t(864,"blockquote")(865,"p"),e(866,"Se falso, ser\xE1 inicializado como um "),t(867,"em"),e(868,"array"),n(),e(869," vazio."),n()()()(),t(870,"tr",17)(871,"td",18)(872,"div",19)(873,"span",20),e(874," p-literals"),i(875,"br"),n()()(),t(876,"td",21)(877,"code",37),e(878,"PoTableLiterals"),n()(),t(879,"td",23),e(880,"-"),n(),t(881,"td",24)(882,"em")(883,"strong"),e(884,"(opcional)"),n()(),t(885,"p"),e(886,"Objeto com as literais usadas no "),t(887,"code"),e(888,"po-table"),n(),e(889,"."),n(),t(890,"p"),e(891,"Existem duas maneiras de customizar o componente, passando um objeto com todas as literais dispon\xEDveis:"),n(),t(892,"pre")(893,"code"),e(894,`const customLiterals: PoTableLiterals = {
  noColumns: 'Nenhuma defini\xE7\xE3o de colunas',
  noData: 'Nenhum dado encontrado',
  noVisibleColumn: 'Nenhuma coluna vis\xEDvel',
  noItem: 'Nenhum item selecionado',
  oneItem: '1 item selecionado',
  multipleItems: 'itens selecionados',
  loadingData: 'Carregando',
  loadMoreData: 'Carregar mais resultados',
  seeCompleteSubtitle: 'Ver legenda completa',
  completeSubtitle: 'Legenda completa',
  columnsManager: 'Gerenciador de colunas',
  bodyDelete: 'Deseja realmente excluir esse item?',
  cancel: 'Cancelar',
  delete: 'Excluir',
  deleteSuccessful: 'Itens removidos com sucesso',
  deleteApiError: 'Ocorreu um erro inesperado, tente novamente mais tarde!',
};
`),n()(),t(895,"p"),e(896,"Ou passando apenas as literais que deseja customizar:"),n(),t(897,"pre")(898,"code"),e(899,`const customLiterals: PoTableLiterals = {
  noData: 'Sem dados'
};
`),n()(),t(900,"p"),e(901,"E para carregar as literais customizadas, basta apenas passar o objeto para o componente."),n(),t(902,"pre")(903,"code"),e(904,`<po-table
  [p-literals]="customLiterals">
</po-table>
`),n()(),t(905,"blockquote")(906,"p"),e(907,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),t(908,"a",38)(909,"code"),e(910,"PoI18nService"),n()(),e(911," ou do browser."),n()()()(),t(912,"tr",17)(913,"td",18)(914,"div",19)(915,"span",20),e(916," p-loading"),i(917,"br"),n()()(),t(918,"td",21)(919,"code",22),e(920,"boolean"),n()(),t(921,"td",23)(922,"p")(923,"code"),e(924,"false"),n()()(),t(925,"td",24)(926,"em")(927,"strong"),e(928,"(opcional)"),n()(),t(929,"p"),e(930,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados da "),t(931,"em"),e(932,"table"),n(),e(933,"."),n()()(),t(934,"tr",17)(935,"td",18)(936,"div",19)(937,"span",20),e(938," p-loading-show-more"),i(939,"br"),n()()(),t(940,"td",21)(941,"code",22),e(942,"boolean"),n()(),t(943,"td",23)(944,"p")(945,"code"),e(946,"false"),n()()(),t(947,"td",24)(948,"em")(949,"strong"),e(950,"(opcional)"),n()(),t(951,"p"),e(952,'Permite que seja adicionado o estado de carregamento no bot\xE3o "Carregar mais resultados".'),n()()(),t(953,"tr",17)(954,"td",18)(955,"div",19)(956,"span",20),e(957," p-max-columns"),i(958,"br"),n()()(),t(959,"td",21)(960,"code",35),e(961,"number"),n()(),t(962,"td",23),e(963,"-"),n(),t(964,"td",24)(965,"em")(966,"strong"),e(967,"(opcional)"),n()(),t(968,"p"),e(969,"Define uma quantidade m\xE1xima de colunas que ser\xE3o exibidas na tabela."),n(),t(970,"p"),e(971,`Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o
desabilitadas e caso houver mais colunas vis\xEDveis do que o permitido, as excedentes
ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),n()()(),t(972,"tr",17)(973,"td",18)(974,"div",19)(975,"span",20),e(976," p-param-delete-api"),i(977,"br"),n()()(),t(978,"td",21)(979,"code",31),e(980,"string"),n()(),t(981,"td",23)(982,"p")(983,"code"),e(984,"id"),n()()(),t(985,"td",24)(986,"em")(987,"strong"),e(988,"(opcional)"),n()(),t(989,"p"),e(990,"Adiciona o par\xE2metro a ser enviado para a requisi\xE7\xE3o de DELETE."),n(),t(991,"p"),e(992,"\xC9 necess\xE1rio a utiliza\xE7\xE3o da propriedade "),t(993,"code"),e(994,"p-service-delete"),n(),e(995," em conjunto."),n()()(),t(996,"tr",17)(997,"td",18)(998,"div",19)(999,"span",20),e(1e3," p-selectable"),i(1001,"br"),n()()(),t(1002,"td",21)(1003,"code",22),e(1004,"boolean"),n()(),t(1005,"td",23)(1006,"p")(1007,"code"),e(1008,"false"),n()()(),t(1009,"td",24)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),n()(),t(1013,"p"),e(1014,"Permite a sele\xE7\xE3o de linhas na tabela e, caso a propriedade "),t(1015,"code"),e(1016,"p-single-select"),n(),e(1017,` esteja definida ser\xE1 poss\xEDvel
selecionar apenas uma \xFAnica linha.`),n(),t(1018,"p")(1019,"strong"),e(1020,"Importante:"),n()(),t(1021,"ul")(1022,"li"),e(1023,"As linhas de detalhe definidas em "),t(1024,"code"),e(1025,"PoTableDetail"),n(),e(1026," possuem comportamento independente da linha mestre;"),n(),t(1027,"li"),e(1028,"Cada linha possui por padr\xE3o a propriedade din\xE2mica "),t(1029,"code"),e(1030,"$selected"),n(),e(1031,`, na qual \xE9 poss\xEDvel validar se a linha
est\xE1 selecionada, por exemplo: `),t(1032,"code"),e(1033,"item.$selected"),n(),e(1034," ou "),t(1035,"code"),e(1036,"item['$selected']"),n(),e(1037,"."),n()()()(),t(1038,"tr",17)(1039,"td",18)(1040,"div",19)(1041,"span",20),e(1042," p-selectable-entire-line"),i(1043,"br"),n()()(),t(1044,"td",21)(1045,"code",22),e(1046,"boolean"),n()(),t(1047,"td",23)(1048,"p")(1049,"code"),e(1050,"true"),n()()(),t(1051,"td",24)(1052,"p"),e(1053,"Permite selecionar um item da tabela clicando na linha."),n(),t(1054,"blockquote")(1055,"p"),e(1056,"Caso haja necessidade de selecionar o item apenas via radio ou checkbox, deve-se definir esta propriedade como "),t(1057,"code"),e(1058,"false"),n(),e(1059,"."),n()()()(),t(1060,"tr",17)(1061,"td",18)(1062,"div",27)(1063,"span",28),e(1064," (p-selected)"),i(1065,"br"),n()()(),t(1066,"td",21)(1067,"code",29),e(1068,"EventEmitter"),n()(),t(1069,"td",23),e(1070,"-"),n(),t(1071,"td",24)(1072,"em")(1073,"strong"),e(1074,"(opcional)"),n()(),t(1075,"p"),e(1076,"Evento executado ao selecionar uma linha do "),t(1077,"code"),e(1078,"po-table"),n(),e(1079,"."),n()()(),t(1080,"tr",17)(1081,"td",18)(1082,"div",19)(1083,"span",20),e(1084," p-service-api"),i(1085,"br"),n()()(),t(1086,"td",21)(1087,"code",31),e(1088,"string"),n()(),t(1089,"td",23),e(1090,"-"),n(),t(1091,"td",24)(1092,"em")(1093,"strong"),e(1094,"(opcional)"),n()(),t(1095,"p"),e(1096,"URL da API respons\xE1vel por retornar os registros."),n(),t(1097,"p"),e(1098,"Ao realizar a busca de mais registros via pagina\xE7\xE3o (Carregar mais resultados), ser\xE1 enviado os par\xE2metros "),t(1099,"code"),e(1100,"page"),n(),e(1101," e "),t(1102,"code"),e(1103,"pageSize"),n(),e(1104,", conforme abaixo:"),n(),t(1105,"pre")(1106,"code"),e(1107,`url + ?page=1&pageSize=10
`),n()(),t(1108,"p"),e(1109,"Caso utilizar ordena\xE7\xE3o, a coluna ordenada ser\xE1 enviada atrav\xE9s do par\xE2metro "),t(1110,"code"),e(1111,"order"),n(),e(1112,", por exemplo:"),n(),t(1113,"ul")(1114,"li")(1115,"p"),e(1116,"Coluna decrescente:"),n(),t(1117,"pre")(1118,"code"),e(1119,`url + ?page=1&pageSize=10&order=-name
`),n()()(),t(1120,"li")(1121,"p"),e(1122,"Coluna ascendente:"),n(),t(1123,"pre")(1124,"code"),e(1125,`url + ?page=1&pageSize=10&order=name
`),n()()()(),t(1126,"blockquote")(1127,"p"),e(1128,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1129,"a",39),e(1130,"API do PO UI"),n(),e(1131,"."),n()()()(),t(1132,"tr",17)(1133,"td",18)(1134,"div",19)(1135,"span",20),e(1136," p-service-delete"),i(1137,"br"),n()()(),t(1138,"td",21)(1139,"code",31),e(1140,"string"),n()(),t(1141,"td",23),e(1142,"-"),n(),t(1143,"td",24)(1144,"em")(1145,"strong"),e(1146,"(opcional)"),n()(),t(1147,"p"),e(1148,"URL da API respons\xE1vel por excluir os registros."),n(),t(1149,"p"),e(1150,"Ao selecionar o bot\xE3o de excluir itens, essa url ser\xE1 executada utilizando o par\xE2metro enviado na propriedade "),t(1151,"code"),e(1152,"p-param-delete-api"),n(),e(1153,`.
Caso ela n\xE3o seja utilizada, o par\xE2metro padr\xE3o a ser enviado ser\xE1 `),t(1154,"code"),e(1155,"id"),n(),e(1156,"."),n(),t(1157,"blockquote")(1158,"p"),e(1159,"Esta URL deve retornar e receber os dados no padr\xE3o de "),t(1160,"a",39),e(1161,"API do PO UI"),n(),e(1162,"."),n()()()(),t(1163,"tr",17)(1164,"td",18)(1165,"div",27)(1166,"span",28),e(1167," (p-show-more)"),i(1168,"br"),n()()(),t(1169,"td",21)(1170,"code",29),e(1171,"EventEmitter"),n()(),t(1172,"td",23),e(1173,"-"),n(),t(1174,"td",24)(1175,"em")(1176,"strong"),e(1177,"(opcional)"),n()(),t(1178,"p"),e(1179,`Recebe uma a\xE7\xE3o de clique para o bot\xE3o "Carregar mais resultados", caso nenhuma a\xE7\xE3o for definida o mesmo
n\xE3o \xE9 vis\xEDvel.`),n(),t(1180,"p"),e(1181,"Recebe um objeto "),t(1182,"code"),e(1183,"{ column, type }"),n(),e(1184," onde:"),n(),t(1185,"ul")(1186,"li"),e(1187,"column ("),t(1188,"code"),e(1189,"PoTableColumn"),n(),e(1190,"): objeto da coluna que est\xE1 ordenada."),n(),t(1191,"li"),e(1192,"type ("),t(1193,"code"),e(1194,"PoTableColumnSortType"),n(),e(1195,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1196,"tr",17)(1197,"td",18)(1198,"div",19)(1199,"span",20),e(1200," p-show-more-disabled"),i(1201,"br"),n()()(),t(1202,"td",21)(1203,"code",22),e(1204,"boolean"),n()(),t(1205,"td",23)(1206,"p")(1207,"code"),e(1208,"false"),n()()(),t(1209,"td",24)(1210,"p"),e(1211,'Se verdadeiro, torna habilitado o bot\xE3o "Carregar mais resultados".'),n()()(),t(1212,"tr",17)(1213,"td",18)(1214,"div",19)(1215,"span",20),e(1216," p-single-select"),i(1217,"br"),n()()(),t(1218,"td",21)(1219,"code",22),e(1220,"boolean"),n()(),t(1221,"td",23),e(1222,"-"),n(),t(1223,"td",24)(1224,"p"),e(1225,"Define que somente uma linha da tabela pode ser selecionada."),n(),t(1226,"blockquote")(1227,"p"),e(1228,"Esta defini\xE7\xE3o n\xE3o se aplica aos itens filhos, os mesmos possuem comportamento independente do item pai."),n()()()(),t(1229,"tr",17)(1230,"td",18)(1231,"div",19)(1232,"span",20),e(1233," p-sort"),i(1234,"br"),n()()(),t(1235,"td",21)(1236,"code",22),e(1237,"boolean"),n()(),t(1238,"td",23)(1239,"p")(1240,"code"),e(1241,"false"),n()()(),t(1242,"td",24)(1243,"em")(1244,"strong"),e(1245,"(opcional)"),n()(),t(1246,"p"),e(1247,`Habilita em todas as colunas a op\xE7\xE3o de ordena\xE7\xE3o de dados. Caso a coluna seja do tipo 'data' ou 'dateTime' a
mesma deve respeitar os tipos de entrada definidos para que sejam ordenadas.`),n()()(),t(1248,"tr",17)(1249,"td",18)(1250,"div",27)(1251,"span",28),e(1252," (p-sort-by)"),i(1253,"br"),n()()(),t(1254,"td",21)(1255,"code",29),e(1256,"EventEmitter"),n()(),t(1257,"td",23),e(1258,"-"),n(),t(1259,"td",24)(1260,"em")(1261,"strong"),e(1262,"(opcional)"),n()(),t(1263,"p"),e(1264,"Evento executado ao ordenar colunas da tabela."),n(),t(1265,"p"),e(1266,"Recebe um objeto "),t(1267,"code"),e(1268,"{ column, type }"),n(),e(1269," onde:"),n(),t(1270,"ul")(1271,"li"),e(1272,"column ("),t(1273,"code"),e(1274,"PoTableColumn"),n(),e(1275,"): objeto da coluna que foi clicada/ordenada."),n(),t(1276,"li"),e(1277,"type ("),t(1278,"code"),e(1279,"PoTableColumnSortType"),n(),e(1280,"): tipo da ordena\xE7\xE3o."),n()()()(),t(1281,"tr",17)(1282,"td",18)(1283,"div",19)(1284,"span",20),e(1285," p-spacing"),i(1286,"br"),n()()(),t(1287,"td",21)(1288,"code",31),e(1289,"string"),n()(),t(1290,"td",23)(1291,"p")(1292,"code"),e(1293,"medium"),n()()(),t(1294,"td",24)(1295,"em")(1296,"strong"),e(1297,"(opcional)"),n()(),t(1298,"p"),e(1299,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do table. Os valores
permitidos s\xE3o definidos pelo enum `),t(1300,"strong"),e(1301,"PoTableColumnSpacing"),n(),e(1302,"."),n(),t(1303,"blockquote")(1304,"p"),e(1305,"Em n\xEDvel de acessibilidade "),t(1306,"strong"),e(1307,"AA"),n(),e(1308,", caso o valor de "),t(1309,"code"),e(1310,"p-spacing"),n(),e(1311," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),t(1312,"code"),e(1313,"extraSmall"),n(),e(1314,`
nos seguintes cen\xE1rios:`),n(),t(1315,"ul")(1316,"li"),e(1317,"Quando o valor de "),t(1318,"code"),e(1319,"p-components-size"),n(),e(1320," for "),t(1321,"code"),e(1322,"small"),n(),e(1323,";"),n(),t(1324,"li"),e(1325,"Quando o valor padr\xE3o dos componentes for configurado como "),t(1326,"code"),e(1327,"small"),n(),e(1328,` no
`),t(1329,"a",32),e(1330,"servi\xE7o de tema"),n(),e(1331,"."),n()()()()(),t(1332,"tr",17)(1333,"td",18)(1334,"div",19)(1335,"span",20),e(1336," p-striped"),i(1337,"br"),n()()(),t(1338,"td",21)(1339,"code",22),e(1340,"boolean"),n()(),t(1341,"td",23)(1342,"p")(1343,"code"),e(1344,"false"),n()()(),t(1345,"td",24)(1346,"p"),e(1347,"Habilita ou desabilita o estilo listrado da tabela ("),t(1348,"code"),e(1349,"striped"),n(),e(1350,")."),n(),t(1351,"blockquote")(1352,"p"),e(1353,"Recomendado para tabelas com maior n\xFAmero de dados, facilitando a sua visualiza\xE7\xE3o na tabela."),n()()()(),t(1354,"tr",17)(1355,"td",18)(1356,"div",19)(1357,"span",20),e(1358," p-text-wrap"),i(1359,"br"),n()()(),t(1360,"td",21)(1361,"code",22),e(1362,"boolean"),n()(),t(1363,"td",23)(1364,"p")(1365,"code"),e(1366,"false"),n()()(),t(1367,"td",24)(1368,"em")(1369,"strong"),e(1370,"(opcional)"),n()(),t(1371,"p"),e(1372,`Habilita ou desabilita a quebra autom\xE1tica de texto. Quando ativada, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),n(),t(1373,"blockquote")(1374,"p"),e(1375,"Incompat\xEDvel com "),t(1376,"code"),e(1377,"virtual-scroll"),n(),e(1378,", que requer altura fixa nas linhas."),n()()()(),t(1379,"tr",17)(1380,"td",18)(1381,"div",27)(1382,"span",28),e(1383," (p-unselected)"),i(1384,"br"),n()()(),t(1385,"td",21)(1386,"code",29),e(1387,"EventEmitter"),n()(),t(1388,"td",23),e(1389,"-"),n(),t(1390,"td",24)(1391,"em")(1392,"strong"),e(1393,"(opcional)"),n()(),t(1394,"p"),e(1395,"Evento executado ao desmarcar a sele\xE7\xE3o de uma linha do "),t(1396,"code"),e(1397,"po-table"),n(),e(1398,"."),n()()(),t(1399,"tr",17)(1400,"td",18)(1401,"div",19)(1402,"span",20),e(1403," p-virtual-scroll"),i(1404,"br"),n()()(),t(1405,"td",21)(1406,"code",22),e(1407,"boolean"),n()(),t(1408,"td",23)(1409,"p")(1410,"code"),e(1411,"true"),n()()(),t(1412,"td",24)(1413,"em")(1414,"strong"),e(1415,"(opcional)"),n()(),t(1416,"p"),e(1417,"Habilita o "),t(1418,"code"),e(1419,"virtual-scroll"),n(),e(1420,` na tabela para melhorar a performance com grandes volumes de dados.
Requer altura (`),t(1421,"code"),e(1422,"p-height"),n(),e(1423,") para funcionar corretamente."),n(),t(1424,"blockquote")(1425,"p"),e(1426,"Incompat\xEDvel com "),t(1427,"code"),e(1428,"p-text-wrap"),n(),e(1429," e "),t(1430,"code"),e(1431,"master-detail"),n(),e(1432,", pois o "),t(1433,"code"),e(1434,"virtual-scroll"),n(),e(1435," exige altura fixa nas linhas."),n()()()()(),t(1436,"h3",13),e(1437,"M\xE9todos"),n(),t(1438,"table",40)(1439,"tr",17)(1440,"th",41)(1441,"div",19)(1442,"h4")(1443,"span",20),e(1444," applyFilters "),n()()()()(),t(1445,"tr",24)(1446,"td",24)(1447,"p"),e(1448,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza a tabela."),n(),t(1449,"p"),e(1450,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),n(),t(1451,"pre")(1452,"code"),e(1453,`url + ?page=1&pageSize=10
`),n()(),t(1454,"blockquote")(1455,"p"),e(1456,"Obs: os par\xE2metros "),t(1457,"code"),e(1458,"page"),n(),e(1459," e "),t(1460,"code"),e(1461,"pageSize"),n(),e(1462," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),n()(),t(1463,"p"),e(1464,"Caso sejam informados os par\xE2metros "),t(1465,"code"),e(1466,"{ name: 'JOHN', age: '23' }"),n(),e(1467,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),n(),t(1468,"pre")(1469,"code"),e(1470,`url + ?page=1&pageSize=10&name=JOHN&age=23
`),n()()()()(),t(1471,"h5")(1472,"b"),e(1473,"Par\xE2metros"),n()(),t(1474,"table",14)(1475,"tr",15)(1476,"th",16),e(1477,"Nome"),n(),t(1478,"th",16),e(1479,"Tipo"),n(),t(1480,"th",16),e(1481,"Descri\xE7\xE3o"),n()(),t(1482,"tr",17)(1483,"td",18),e(1484," queryParams"),n(),t(1485,"td",21)(1486,"code",42),e(1487," { key: value } "),n()(),t(1488,"td",24)(1489,"p"),e(1490,"Formato do objeto a ser enviado."),n(),t(1491,"blockquote")(1492,"p"),e(1493,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),n()()()()(),i(1494,"br"),t(1495,"table",40)(1496,"tr",17)(1497,"th",41)(1498,"div",19)(1499,"h4")(1500,"span",20),e(1501," applyFixedColumns "),n()()()()(),t(1502,"tr",24)(1503,"td",24)(1504,"p"),e(1505,"Verifica se columns possuem a propriedade width."),n()()()(),i(1506,"br"),t(1507,"table",40)(1508,"tr",17)(1509,"th",41)(1510,"div",19)(1511,"h4")(1512,"span",20),e(1513," collapse "),n()()()()(),t(1514,"tr",24)(1515,"td",24)(1516,"p"),e(1517,"M\xE9todo que colapsa uma linha com detalhe quando executada."),n()()()(),t(1518,"h5")(1519,"b"),e(1520,"Par\xE2metros"),n()(),t(1521,"table",14)(1522,"tr",15)(1523,"th",16),e(1524,"Nome"),n(),t(1525,"th",16),e(1526,"Tipo"),n(),t(1527,"th",16),e(1528,"Descri\xE7\xE3o"),n()(),t(1529,"tr",17)(1530,"td",18),e(1531," rowIndex"),n(),t(1532,"td",21)(1533,"code",43),e(1534," number "),n()(),t(1535,"td",24)(1536,"p"),e(1537,"\xCDndice da linha que ser\xE1 colapsada."),n(),t(1538,"blockquote")(1539,"p"),e(1540,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1541,"br"),t(1542,"table",40)(1543,"tr",17)(1544,"th",41)(1545,"div",19)(1546,"h4")(1547,"span",20),e(1548," expand "),n()()()()(),t(1549,"tr",24)(1550,"td",24)(1551,"p"),e(1552,"M\xE9todo que expande uma linha com detalhe quando executada."),n()()()(),t(1553,"h5")(1554,"b"),e(1555,"Par\xE2metros"),n()(),t(1556,"table",14)(1557,"tr",15)(1558,"th",16),e(1559,"Nome"),n(),t(1560,"th",16),e(1561,"Tipo"),n(),t(1562,"th",16),e(1563,"Descri\xE7\xE3o"),n()(),t(1564,"tr",17)(1565,"td",18),e(1566," rowIndex"),n(),t(1567,"td",21)(1568,"code",43),e(1569," number "),n()(),t(1570,"td",24)(1571,"p"),e(1572,"\xCDndice da linha que ser\xE1 expandida."),n(),t(1573,"blockquote")(1574,"p"),e(1575,"Ao reordenar os dados da tabela, o valor contido neste \xEDndice ser\xE1 alterado conforme a ordena\xE7\xE3o."),n()()()()(),i(1576,"br"),t(1577,"table",40)(1578,"tr",17)(1579,"th",41)(1580,"div",19)(1581,"h4")(1582,"span",20),e(1583," getSelectedRows "),n()()()()(),t(1584,"tr",24)(1585,"td",24)(1586,"p"),e(1587,"Retorna as linhas do "),t(1588,"code"),e(1589,"po-table"),n(),e(1590," que est\xE3o selecionadas."),n()()()(),i(1591,"br"),t(1592,"table",40)(1593,"tr",17)(1594,"th",41)(1595,"div",19)(1596,"h4")(1597,"span",20),e(1598," getUnselectedRows "),n()()()()(),t(1599,"tr",24)(1600,"td",24)(1601,"p"),e(1602,"Retorna as linhas do "),t(1603,"code"),e(1604,"po-table"),n(),e(1605," que n\xE3o est\xE3o selecionadas."),n()()()(),i(1606,"br"),t(1607,"table",40)(1608,"tr",17)(1609,"th",41)(1610,"div",19)(1611,"h4")(1612,"span",20),e(1613," unselectRows "),n()()()()(),t(1614,"tr",24)(1615,"td",24)(1616,"p"),e(1617,"Desmarca as linhas que est\xE3o selecionadas."),n()()()(),i(1618,"br"),t(1619,"table",40)(1620,"tr",17)(1621,"th",41)(1622,"div",19)(1623,"h4")(1624,"span",20),e(1625," unselectRowItem "),n()()()()(),t(1626,"tr",24)(1627,"td",24)(1628,"p"),e(1629,"Desmarca uma linha que est\xE1 selecionada."),n()()()(),i(1630,"br"),t(1631,"table",40)(1632,"tr",17)(1633,"th",41)(1634,"div",19)(1635,"h4")(1636,"span",20),e(1637," selectRowItem "),n()()()()(),t(1638,"tr",24)(1639,"td",24)(1640,"p"),e(1641,"Seleciona uma linha do 'po-table'."),n()()()(),i(1642,"br"),t(1643,"table",40)(1644,"tr",17)(1645,"th",41)(1646,"div",19)(1647,"h4")(1648,"span",20),e(1649," deleteItems "),n()()()()(),t(1650,"tr",24)(1651,"td",24)(1652,"p"),e(1653,`M\xE9todo respons\xE1vel pela exclus\xE3o de itens em lote.
Caso a tabela esteja executando a propriedade `),t(1654,"code"),e(1655,"p-service-delete"),n(),e(1656,", ser\xE1 necess\xE1rio excluir 1 item por vez."),n(),t(1657,"p"),e(1658,"Ao utilizar "),t(1659,"code"),e(1660,"p-service-delete"),n(),e(1661," mas sem a propriedade "),t(1662,"code"),e(1663,"p-service-api"),n(),e(1664,`, ser\xE1 responsabilidade do usu\xE1rio o tratamento
ap\xF3s a requisi\xE7\xE3o DELETE ser executada.`),n(),t(1665,"p"),e(1666,"Caso a tabela utilize "),t(1667,"code"),e(1668,"p-height"),n(),e(1669," e esteja sem servi\xE7o, \xE9 necess\xE1rio a reatribui\xE7\xE3o dos itens utilizando o evento "),t(1670,"code"),e(1671,"(p-delete-items)"),n(),e(1672,", por exemplo:"),n(),t(1673,"pre")(1674,"code"),e(1675,`<po-table
 (p-delete-items)="items = $event"
>
</po-table>
`),n()()()()(),i(1676,"br"),t(1677,"table",40)(1678,"tr",17)(1679,"th",41)(1680,"div",19)(1681,"h4")(1682,"span",20),e(1683," removeItem "),n()()()()(),t(1684,"tr",24)(1685,"td",24)(1686,"p"),e(1687,"M\xE9todo que remove um item da tabela."),n()()()(),t(1688,"h5")(1689,"b"),e(1690,"Par\xE2metros"),n()(),t(1691,"table",14)(1692,"tr",15)(1693,"th",16),e(1694,"Nome"),n(),t(1695,"th",16),e(1696,"Tipo"),n(),t(1697,"th",16),e(1698,"Descri\xE7\xE3o"),n()(),t(1699,"tr",17)(1700,"td",18),e(1701," item"),n(),t(1702,"td",21)(1703,"code",35),e(1704," number "),n(),t(1705,"code",42),e(1706," { key: value } "),n()(),t(1707,"td",24)(1708,"p"),e(1709,"\xCDndice da linha ou o item que ser\xE1 removido."),n(),t(1710,"blockquote")(1711,"p"),e(1712,"Ao remover o item, a linha que o representa ser\xE1 exclu\xEDda da tabela."),n()()()()(),i(1713,"br"),t(1714,"table",40)(1715,"tr",17)(1716,"th",41)(1717,"div",19)(1718,"h4")(1719,"span",20),e(1720," updateItem "),n()()()()(),t(1721,"tr",24)(1722,"td",24)(1723,"p"),e(1724,"M\xE9todo que atualiza um item da tabela."),n()()()(),t(1725,"h5")(1726,"b"),e(1727,"Par\xE2metros"),n()(),t(1728,"table",14)(1729,"tr",15)(1730,"th",16),e(1731,"Nome"),n(),t(1732,"th",16),e(1733,"Tipo"),n(),t(1734,"th",16),e(1735,"Descri\xE7\xE3o"),n()(),t(1736,"tr",17)(1737,"td",18),e(1738," item"),n(),t(1739,"td",21)(1740,"code",35),e(1741," number "),n(),t(1742,"code",42),e(1743," { key: value } "),n()(),t(1744,"td",24)(1745,"p"),e(1746,"\xCDndice da linha ou o item que ser\xE1 atualizado."),n()()(),t(1747,"tr",17)(1748,"td",18),e(1749," updatedItem"),n(),t(1750,"td",21)(1751,"code",42),e(1752," { key: value } "),n()(),t(1753,"td",24)(1754,"p"),e(1755,"Item que foi atualizado."),n(),t(1756,"blockquote")(1757,"p"),e(1758,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada na tabela."),n()()()()(),i(1759,"br"),t(1760,"h3"),e(1761,"Interfaces"),n(),t(1762,"h4",44)(1763,"code",5),e(1764,"PoTableAction"),n()(),t(1765,"div",2)(1766,"p"),e(1767,"Interface para lista de a\xE7\xF5es do componente. "),n()(),t(1768,"h4",13),e(1769,"Propriedades"),n(),t(1770,"table",14)(1771,"tr",15)(1772,"th",16),e(1773,"Nome"),n(),t(1774,"th",16),e(1775,"Tipo"),n(),t(1776,"th",16),e(1777,"Descri\xE7\xE3o"),n()(),t(1778,"tr",17)(1779,"td",18)(1780,"div",19)(1781,"span",20),e(1782," action"),i(1783,"br"),n()()(),t(1784,"td",21)(1785,"code",45),e(1786,"Function"),n()(),t(1787,"td",24)(1788,"em")(1789,"strong"),e(1790,"(opcional)"),n()(),t(1791,"p"),e(1792,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),n(),t(1793,"p"),e(1794,"A action tamb\xE9m pode ser executada para o agrupador de subitens quando a a\xE7\xE3o possuir "),t(1795,"code"),e(1796,"subItems"),n(),e(1797,"."),n(),t(1798,"blockquote")(1799,"p"),e(1800,"Para que a fun\xE7\xE3o seja executada no contexto do componente, utilize "),t(1801,"em"),e(1802,"bind"),n(),e(1803,`:
`),t(1804,"code"),e(1805,"action: this.myFunction.bind(this)"),n()()()()(),t(1806,"tr",17)(1807,"td",18)(1808,"div",19)(1809,"span",20),e(1810," disabled"),i(1811,"br"),n()()(),t(1812,"td",21)(1813,"code",22),e(1814,"boolean "),n(),t(1815,"code",45),e(1816," Function"),n()(),t(1817,"td",24)(1818,"em")(1819,"strong"),e(1820,"(opcional)"),n()(),t(1821,"p"),e(1822,"Desabilita a a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),n()()(),t(1823,"tr",17)(1824,"td",18)(1825,"div",19)(1826,"span",20),e(1827," icon"),i(1828,"br"),n()()(),t(1829,"td",21)(1830,"code",31),e(1831,"string "),n(),t(1832,"code",46),e(1833," TemplateRef<void>"),n()(),t(1834,"td",24)(1835,"em")(1836,"strong"),e(1837,"(opcional)"),n()(),t(1838,"p"),e(1839,"\xCDcone exibido ao lado esquerdo do r\xF3tulo."),n(),t(1840,"p"),e(1841,"Aceita \xEDcones da "),t(1842,"a",26),e(1843,"Biblioteca de \xEDcones"),n(),e(1844,`, fontes externas (ex: Font Awesome)
ou um `),t(1845,"code"),e(1846,"TemplateRef"),n(),e(1847," para \xEDcones customizados."),n(),t(1848,"pre")(1849,"code"),e(1850,`{ label: 'A\xE7\xE3o', icon: 'an an-newspaper' }
`),n()()()(),t(1851,"tr",17)(1852,"td",18)(1853,"div",19)(1854,"span",20),e(1855," label"),i(1856,"br"),n()()(),t(1857,"td",21)(1858,"code",31),e(1859,"string"),n()(),t(1860,"td",24)(1861,"p"),e(1862,"R\xF3tulo da a\xE7\xE3o."),n(),t(1863,"p"),e(1864,"A label tamb\xE9m pode representar o agrupador de subitens quando a a\xE7\xE3o possuir "),t(1865,"code"),e(1866,"subItems"),n(),e(1867,"."),n()()(),t(1868,"tr",17)(1869,"td",18)(1870,"div",19)(1871,"span",20),e(1872," selected"),i(1873,"br"),n()()(),t(1874,"td",21)(1875,"code",22),e(1876,"boolean"),n()(),t(1877,"td",24)(1878,"em")(1879,"strong"),e(1880,"(opcional)"),n()(),t(1881,"p"),e(1882,"Define se a a\xE7\xE3o est\xE1 selecionada."),n()()(),t(1883,"tr",17)(1884,"td",18)(1885,"div",19)(1886,"span",20),e(1887," separator"),i(1888,"br"),n()()(),t(1889,"td",21)(1890,"code",22),e(1891,"boolean"),n()(),t(1892,"td",24)(1893,"em")(1894,"strong"),e(1895,"(opcional)"),n()(),t(1896,"p"),e(1897,"Atribui uma linha separadora acima do item."),n()()(),t(1898,"tr",17)(1899,"td",18)(1900,"div",19)(1901,"span",20),e(1902," subItems"),i(1903,"br"),n()()(),t(1904,"td",21)(1905,"code",47),e(1906,"Array<PoPopupAction>"),n()(),t(1907,"td",24)(1908,"em")(1909,"strong"),e(1910,"(opcional)"),n()(),t(1911,"p"),e(1912,"Define uma lista de subitens para cria\xE7\xE3o de menus aninhados."),n(),t(1913,"p"),e(1914,`Ao definir esta propriedade, o item exibir\xE1 um \xEDcone indicador de subn\xEDvel.
Recomenda-se utilizar no m\xE1ximo tr\xEAs n\xEDveis hier\xE1rquicos para garantir a usabilidade.`),n(),t(1915,"blockquote")(1916,"p"),e(1917,"As propriedades "),t(1918,"code"),e(1919,"disabled"),n(),e(1920,", "),t(1921,"code"),e(1922,"type"),n(),e(1923," e "),t(1924,"code"),e(1925,"visible"),n(),e(1926," n\xE3o s\xE3o aplicadas visualmente ao item agrupador."),n()(),t(1927,"blockquote")(1928,"p"),e(1929,"Quando "),t(1930,"code"),e(1931,"url"),n(),e(1932," \xE9 informada em um agrupador, o redirecionamento ter\xE1 prioridade e os subitens n\xE3o ser\xE3o abertos."),n()(),t(1933,"blockquote")(1934,"p"),e(1935,"Em subn\xEDveis aninhados, o "),t(1936,"code"),e(1937,"icon"),n(),e(1938," do agrupador \xE9 substitu\xEDdo pelo indicador de navega\xE7\xE3o (seta)."),n()()()(),t(1939,"tr",17)(1940,"td",18)(1941,"div",19)(1942,"span",20),e(1943," type"),i(1944,"br"),n()()(),t(1945,"td",21)(1946,"code",31),e(1947,"string"),n()(),t(1948,"td",24)(1949,"em")(1950,"strong"),e(1951,"(opcional)"),n()(),t(1952,"p"),e(1953,"Define a cor do item."),n(),t(1954,"p"),e(1955,"Valores v\xE1lidos:"),n(),t(1956,"ul")(1957,"li")(1958,"code"),e(1959,"default"),n()(),t(1960,"li")(1961,"code"),e(1962,"danger"),n()()()()(),t(1963,"tr",17)(1964,"td",18)(1965,"div",19)(1966,"span",20),e(1967," url"),i(1968,"br"),n()()(),t(1969,"td",21)(1970,"code",31),e(1971,"string"),n()(),t(1972,"td",24)(1973,"em")(1974,"strong"),e(1975,"(opcional)"),n()(),t(1976,"p"),e(1977,"URL para redirecionamento. Aceita rotas internas e links externos."),n(),t(1978,"p"),e(1979,`A url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),t(1980,"code"),e(1981,"url"),n(),e(1982," \xE9 informada em um agrupador, o clique "),t(1983,"strong"),e(1984,"n\xE3o abrir\xE1 os subitens"),n(),e(1985,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),n(),t(1986,"blockquote")(1987,"p"),e(1988,"Quando informada, tem prioridade sobre a propriedade "),t(1989,"code"),e(1990,"action"),n(),e(1991,"."),n()()()(),t(1992,"tr",17)(1993,"td",18)(1994,"div",19)(1995,"span",20),e(1996," visible"),i(1997,"br"),n()()(),t(1998,"td",21)(1999,"code",22),e(2e3,"boolean "),n(),t(2001,"code",45),e(2002," Function"),n()(),t(2003,"td",24)(2004,"em")(2005,"strong"),e(2006,"(opcional)"),n()(),t(2007,"p"),e(2008,"Define a visibilidade da a\xE7\xE3o. Aceita um valor booleano ou uma fun\xE7\xE3o que retorna booleano."),n()()()(),t(2009,"h4",44)(2010,"code",5),e(2011,"PoTableBoolean"),n()(),t(2012,"div",2)(2013,"p"),e(2014,"Interface que define as colunas booleanas do "),t(2015,"code"),e(2016,"po-table"),n(),e(2017,"."),n()(),t(2018,"h4",13),e(2019,"Propriedades"),n(),t(2020,"table",14)(2021,"tr",15)(2022,"th",16),e(2023,"Nome"),n(),t(2024,"th",16),e(2025,"Tipo"),n(),t(2026,"th",16),e(2027,"Descri\xE7\xE3o"),n()(),t(2028,"tr",17)(2029,"td",18)(2030,"div",19)(2031,"span",20),e(2032," falseLabel"),i(2033,"br"),n()()(),t(2034,"td",21)(2035,"code",31),e(2036,"string"),n()(),t(2037,"td",24)(2038,"em")(2039,"strong"),e(2040,"(opcional)"),n()(),t(2041,"p"),e(2042,"Define o r\xF3tulo para valores "),t(2043,"code"),e(2044,"false"),n(),e(2045,"."),n()()(),t(2046,"tr",17)(2047,"td",18)(2048,"div",19)(2049,"span",20),e(2050," trueLabel"),i(2051,"br"),n()()(),t(2052,"td",21)(2053,"code",31),e(2054,"string"),n()(),t(2055,"td",24)(2056,"em")(2057,"strong"),e(2058,"(opcional)"),n()(),t(2059,"p"),e(2060,"Define o r\xF3tulo para valores "),t(2061,"code"),e(2062,"true"),n(),e(2063,"."),n()()()(),t(2064,"h4",44)(2065,"code",5),e(2066,"PoTableColumnSort"),n()(),t(2067,"div",2)(2068,"p"),e(2069,"Interface para ordena\xE7\xE3o das colunas do componente table."),n()(),t(2070,"h4",13),e(2071,"Propriedades"),n(),t(2072,"table",14)(2073,"tr",15)(2074,"th",16),e(2075,"Nome"),n(),t(2076,"th",16),e(2077,"Tipo"),n(),t(2078,"th",16),e(2079,"Descri\xE7\xE3o"),n()(),t(2080,"tr",17)(2081,"td",18)(2082,"div",19)(2083,"span",20),e(2084," column"),i(2085,"br"),n()()(),t(2086,"td",21)(2087,"code",48),e(2088,"PoTableColumn"),n()(),t(2089,"td",24)(2090,"em")(2091,"strong"),e(2092,"(opcional)"),n()(),t(2093,"p"),e(2094,"Coluna pela qual a tabela est\xE1 ordenada."),n()()(),t(2095,"tr",17)(2096,"td",18)(2097,"div",19)(2098,"span",20),e(2099," type"),i(2100,"br"),n()()(),t(2101,"td",21)(2102,"code",49),e(2103,"PoTableColumnSortType"),n()(),t(2104,"td",24)(2105,"p"),e(2106,"Tipo da ordena\xE7\xE3o."),n()()()(),t(2107,"h4",44)(2108,"code",5),e(2109,"PoTableColumn"),n()(),t(2110,"div",2)(2111,"p"),e(2112,"Interface para configura\xE7\xE3o das colunas do "),t(2113,"code"),e(2114,"po-table"),n(),e(2115,"."),n(),t(2116,"p"),e(2117,"As defini\xE7\xF5es das colunas ser\xE3o aplicadas linha a linha."),n()(),t(2118,"h4",13),e(2119,"Propriedades"),n(),t(2120,"table",14)(2121,"tr",15)(2122,"th",16),e(2123,"Nome"),n(),t(2124,"th",16),e(2125,"Tipo"),n(),t(2126,"th",16),e(2127,"Descri\xE7\xE3o"),n()(),t(2128,"tr",17)(2129,"td",18)(2130,"div",19)(2131,"span",20),e(2132," action"),i(2133,"br"),n()()(),t(2134,"td",21)(2135,"code",45),e(2136,"Function"),n()(),t(2137,"td",24)(2138,"em")(2139,"strong"),e(2140,"(opcional)"),n()(),t(2141,"p"),e(2142,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),t(2143,"code"),e(2144,"link"),n(),e(2145," ou "),t(2146,"code"),e(2147,"icon"),n(),e(2148,"."),n(),t(2149,"blockquote")(2150,"p"),e(2151,"Quando for do tipo "),t(2152,"code"),e(2153,"link"),n(),e(2154,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),n()(),t(2155,"blockquote")(2156,"p"),e(2157,"Quando for do tipo "),t(2158,"code"),e(2159,"icon"),n(),e(2160," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),n()()()(),t(2161,"tr",17)(2162,"td",18)(2163,"div",19)(2164,"span",20),e(2165," boolean"),i(2166,"br"),n()()(),t(2167,"td",21)(2168,"code",50),e(2169,"PoTableBoolean"),n()(),t(2170,"td",24)(2171,"em")(2172,"strong"),e(2173,"(opcional)"),n()(),t(2174,"p"),e(2175,"Define um objeto do tipo "),t(2176,"code"),e(2177,"PoTableBoolean"),n(),e(2178," para as colunas do tipo "),t(2179,"em"),e(2180,"boolean"),n(),e(2181,". Por exemplo:"),n(),t(2182,"pre")(2183,"code"),e(2184,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}
`),n()(),t(2185,"blockquote")(2186,"p"),e(2187,"Caso n\xE3o seja definido um objeto para colunas do tipo "),t(2188,"em"),e(2189,"boolean"),n(),e(2190,`,
esta exibir\xE1 por padr\xE3o `),t(2191,"code"),e(2192,"Sim"),n(),e(2193," e "),t(2194,"code"),e(2195,"N\xE3o"),n(),e(2196," de acordo com os valores "),t(2197,"em"),e(2198,"booleanos"),n(),e(2199,"."),n()()()(),t(2200,"tr",17)(2201,"td",18)(2202,"div",19)(2203,"span",20),e(2204," color"),i(2205,"br"),n()()(),t(2206,"td",21)(2207,"code",31),e(2208,"string "),n(),t(2209,"code",45),e(2210," Function"),n()(),t(2211,"td",24)(2212,"em")(2213,"strong"),e(2214,"(opcional)"),n()(),t(2215,"p"),e(2216,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),n(),t(2217,"p"),e(2218,"Valores v\xE1lidos:"),n(),t(2219,"ul")(2220,"li"),i(2221,"span",51),t(2222,"code"),e(2223,"color-01"),n()(),t(2224,"li"),i(2225,"span",52),t(2226,"code"),e(2227,"color-02"),n()(),t(2228,"li"),i(2229,"span",53),t(2230,"code"),e(2231,"color-03"),n()(),t(2232,"li"),i(2233,"span",54),t(2234,"code"),e(2235,"color-04"),n()(),t(2236,"li"),i(2237,"span",55),t(2238,"code"),e(2239,"color-05"),n()(),t(2240,"li"),i(2241,"span",56),t(2242,"code"),e(2243,"color-06"),n()(),t(2244,"li"),i(2245,"span",57),t(2246,"code"),e(2247,"color-07"),n()(),t(2248,"li"),i(2249,"span",58),t(2250,"code"),e(2251,"color-08"),n()(),t(2252,"li"),i(2253,"span",59),t(2254,"code"),e(2255,"color-09"),n()(),t(2256,"li"),i(2257,"span",60),t(2258,"code"),e(2259,"color-10"),n()(),t(2260,"li"),i(2261,"span",61),t(2262,"code"),e(2263,"color-11"),n()(),t(2264,"li"),i(2265,"span",62),t(2266,"code"),e(2267,"color-12"),n()()(),t(2268,"blockquote")(2269,"p"),e(2270,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),t(2271,"strong"),e(2272,"Caption Tag Colors"),n(),e(2273,":"),n()(),t(2274,"ul")(2275,"li"),i(2276,"span",63),t(2277,"code"),e(2278,"caption-tag-01"),n(),i(2279,"span",64),t(2280,"code"),e(2281,"caption-tag-02"),n(),i(2282,"span",65),t(2283,"code"),e(2284,"caption-tag-03"),n(),i(2285,"span",66),t(2286,"code"),e(2287,"caption-tag-04"),n(),i(2288,"span",67),t(2289,"code"),e(2290,"caption-tag-05"),n()(),t(2291,"li"),i(2292,"span",68),t(2293,"code"),e(2294,"caption-tag-06"),n(),i(2295,"span",69),t(2296,"code"),e(2297,"caption-tag-07"),n(),i(2298,"span",70),t(2299,"code"),e(2300,"caption-tag-08"),n(),i(2301,"span",71),t(2302,"code"),e(2303,"caption-tag-09"),n(),i(2304,"span",72),t(2305,"code"),e(2306,"caption-tag-10"),n()(),t(2307,"li"),i(2308,"span",73),t(2309,"code"),e(2310,"caption-tag-11"),n(),i(2311,"span",74),t(2312,"code"),e(2313,"caption-tag-12"),n(),i(2314,"span",75),t(2315,"code"),e(2316,"caption-tag-13"),n(),i(2317,"span",76),t(2318,"code"),e(2319,"caption-tag-14"),n(),i(2320,"span",77),t(2321,"code"),e(2322,"caption-tag-15"),n()(),t(2323,"li"),i(2324,"span",78),t(2325,"code"),e(2326,"caption-tag-16"),n(),i(2327,"span",79),t(2328,"code"),e(2329,"caption-tag-17"),n(),i(2330,"span",80),t(2331,"code"),e(2332,"caption-tag-18"),n(),i(2333,"span",81),t(2334,"code"),e(2335,"caption-tag-19"),n(),i(2336,"span",82),t(2337,"code"),e(2338,"caption-tag-20"),n()(),t(2339,"li"),i(2340,"span",83),t(2341,"code"),e(2342,"caption-tag-21"),n(),i(2343,"span",84),t(2344,"code"),e(2345,"caption-tag-22"),n(),i(2346,"span",85),t(2347,"code"),e(2348,"caption-tag-23"),n(),i(2349,"span",86),t(2350,"code"),e(2351,"caption-tag-24"),n(),i(2352,"span",87),t(2353,"code"),e(2354,"caption-tag-25"),n()(),t(2355,"li"),i(2356,"span",88),t(2357,"code"),e(2358,"caption-tag-26"),n(),i(2359,"span",89),t(2360,"code"),e(2361,"caption-tag-27"),n(),i(2362,"span",90),t(2363,"code"),e(2364,"caption-tag-28"),n(),i(2365,"span",91),t(2366,"code"),e(2367,"caption-tag-29"),n(),i(2368,"span",92),t(2369,"code"),e(2370,"caption-tag-30"),n()(),t(2371,"li"),i(2372,"span",93),t(2373,"code"),e(2374,"caption-tag-31"),n(),i(2375,"span",94),t(2376,"code"),e(2377,"caption-tag-32"),n(),i(2378,"span",95),t(2379,"code"),e(2380,"caption-tag-33"),n(),i(2381,"span",96),t(2382,"code"),e(2383,"caption-tag-34"),n(),i(2384,"span",97),t(2385,"code"),e(2386,"caption-tag-35"),n()()(),t(2387,"blockquote")(2388,"p"),e(2389,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),n()(),t(2390,"pre")(2391,"code"),e(2392,`(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }
`),n()(),t(2393,"blockquote")(2394,"p"),e(2395,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),t(2396,"code"),e(2397,"icons"),n(),e(2398,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),n()(),t(2399,"pre")(2400,"code"),e(2401,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},
`),n()()()(),t(2402,"tr",17)(2403,"td",18)(2404,"div",19)(2405,"span",20),e(2406," detail"),i(2407,"br"),n()()(),t(2408,"td",21)(2409,"code",98),e(2410,"PoTableDetail"),n()(),t(2411,"td",24)(2412,"em")(2413,"strong"),e(2414,"(opcional)"),n()(),t(2415,"p"),e(2416,"Define um objeto que segue a interface "),t(2417,"code"),e(2418,"PoTableDetail"),n(),e(2419,", para as colunas de detalhes. Por exemplo:"),n(),t(2420,"pre")(2421,"code"),e(2422,`{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }
`),n()()()(),t(2423,"tr",17)(2424,"td",18)(2425,"div",19)(2426,"span",20),e(2427," disabled"),i(2428,"br"),n()()(),t(2429,"td",21)(2430,"code",45),e(2431,"Function"),n()(),t(2432,"td",24)(2433,"em")(2434,"strong"),e(2435,"(opcional)"),n()(),t(2436,"p"),e(2437,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),t(2438,"em"),e(2439,"link"),n(),e(2440," e sua a\xE7\xE3o."),n(),t(2441,"blockquote")(2442,"p"),e(2443,"Propriedade dispon\xEDvel nas colunas do tipo "),t(2444,"code"),e(2445,"link"),n(),e(2446,"."),n()()()(),t(2447,"tr",17)(2448,"td",18)(2449,"div",19)(2450,"span",20),e(2451," format"),i(2452,"br"),n()()(),t(2453,"td",21)(2454,"code",31),e(2455,"string"),n()(),t(2456,"td",24)(2457,"em")(2458,"strong"),e(2459,"(opcional)"),n()(),t(2460,"p"),e(2461,"Formato de exibi\xE7\xE3o do valor da coluna."),n(),t(2462,"table")(2463,"thead")(2464,"tr")(2465,"th"),e(2466,"Formata\xE7\xE3o"),n(),t(2467,"th"),e(2468,"Type da Coluna"),n(),t(2469,"th"),e(2470,"Descri\xE7\xE3o"),n(),t(2471,"th"),e(2472,"Exemplos"),n()()(),t(2473,"tbody")(2474,"tr")(2475,"td"),e(2476,"Monet\xE1rio"),n(),t(2477,"td")(2478,"code"),e(2479,"currency"),n()(),t(2480,"td"),e(2481,"Formato para valores monet\xE1rios. Informe o c\xF3digo da moeda (ISO 4217)."),n(),t(2482,"td")(2483,"code"),e(2484,"'BRL'"),n(),e(2485,", "),t(2486,"code"),e(2487,"'USD'"),n(),e(2488,", "),t(2489,"code"),e(2490,"'EUR'"),n(),e(2491,", "),t(2492,"code"),e(2493,"'RUB'"),n()()(),t(2494,"tr")(2495,"td"),e(2496,"Data"),n(),t(2497,"td")(2498,"code"),e(2499,"date"),n()(),t(2500,"td"),e(2501,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),n(),t(2502,"td")(2503,"code"),e(2504,"'dd/MM/yyyy'"),n(),e(2505,", "),t(2506,"code"),e(2507,"'dd-MM-yy'"),n(),e(2508,", "),t(2509,"code"),e(2510,"'mm/dd/yyyy'"),n()()(),t(2511,"tr")(2512,"td"),e(2513,"Hora"),n(),t(2514,"td")(2515,"code"),e(2516,"time"),n()(),t(2517,"td"),e(2518,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),n(),t(2519,"td")(2520,"code"),e(2521,"'HH:mm'"),n(),e(2522,", "),t(2523,"code"),e(2524,"'HH:mm:ss.ffffff'"),n(),e(2525,", "),t(2526,"code"),e(2527,"'HH:mm:ss.ff'"),n(),e(2528,", "),t(2529,"code"),e(2530,"'mm:ss.fff'"),n()()(),t(2531,"tr")(2532,"td"),e(2533,"N\xFAmero"),n(),t(2534,"td")(2535,"code"),e(2536,"number"),n()(),t(2537,"td"),e(2538,"Aceita um valor seguindo o padr\xE3o "),t(2539,"a",99)(2540,"strong"),e(2541,"DecimalPipe"),n()(),e(2542," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),n(),t(2543,"td")(2544,"code"),e(2545,"'1.2-5'"),n(),e(2546," (ex.: "),t(2547,"code"),e(2548,"50"),n(),e(2549," \u2192 "),t(2550,"code"),e(2551,"50.00"),n(),e(2552,")"),n()()()(),t(2553,"p"),e(2554,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),n()()(),t(2555,"tr",17)(2556,"td",18)(2557,"div",19)(2558,"span",20),e(2559," icons"),i(2560,"br"),n()()(),t(2561,"td",21)(2562,"code",100),e(2563,"Array<PoTableColumnIcon>"),n()(),t(2564,"td",24)(2565,"em")(2566,"strong"),e(2567,"(opcional)"),n()(),t(2568,"p"),e(2569,"Define um "),t(2570,"em"),e(2571,"array"),n(),e(2572," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),t(2573,"code"),e(2574,"action"),n(),e(2575," e "),t(2576,"code"),e(2577,"color"),n(),e(2578,`
definidos na coluna, \xE0 partir do `),t(2579,"em"),e(2580,"value"),n(),e(2581," da "),t(2582,"a",101)(2583,"code"),e(2584,"PoTableColumnIcon"),n()(),e(2585,", por exemplo:"),n(),t(2586,"pre")(2587,"code"),e(2588,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},
`),n()(),t(2589,"pre")(2590,"code"),e(2591,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...
`),n()()()(),t(2592,"tr",17)(2593,"td",18)(2594,"div",19)(2595,"span",20),e(2596," label"),i(2597,"br"),n()()(),t(2598,"td",21)(2599,"code",31),e(2600,"string"),n()(),t(2601,"td",24)(2602,"em")(2603,"strong"),e(2604,"(opcional)"),n()(),t(2605,"p"),e(2606,"Texto para t\xEDtulo da coluna."),n(),t(2607,"p"),e(2608,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),t(2609,"em"),e(2610,"label"),n(),e(2611," o valor da propriedade "),t(2612,"em"),e(2613,"property"),n(),e(2614," com a primeira letra em mai\xFAsculo."),n()()(),t(2615,"tr",17)(2616,"td",18)(2617,"div",19)(2618,"span",20),e(2619," labels"),i(2620,"br"),n()()(),t(2621,"td",21)(2622,"code",102),e(2623,"Array<PoTableColumnLabel>"),n()(),t(2624,"td",24)(2625,"em")(2626,"strong"),e(2627,"(opcional)"),n()(),t(2628,"p"),e(2629,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),t(2630,"code"),e(2631,"PoTableColumnLabel"),n(),e(2632," na qual devem ser definidas os labels. Por exemplo:"),n(),t(2633,"pre")(2634,"code"),e(2635,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', tooltip: 'Flight Status' }
}
`),n()()()(),t(2636,"tr",17)(2637,"td",18)(2638,"div",19)(2639,"span",20),e(2640," link"),i(2641,"br"),n()()(),t(2642,"td",21)(2643,"code",31),e(2644,"string"),n()(),t(2645,"td",24)(2646,"em")(2647,"strong"),e(2648,"(opcional)"),n()(),t(2649,"p"),e(2650,"Define o nome da propriedade que conter\xE1 o "),t(2651,"code"),e(2652,"link"),n(),e(2653," a ser redirecionado."),n()()(),t(2654,"tr",17)(2655,"td",18)(2656,"div",19)(2657,"span",20),e(2658," property"),i(2659,"br"),n()()(),t(2660,"td",21)(2661,"code",31),e(2662,"string"),n()(),t(2663,"td",24)(2664,"em")(2665,"strong"),e(2666,"(opcional)"),n()(),t(2667,"p"),e(2668,"Nome identificador da coluna. Tamb\xE9m permite objetos aninhados conforme exemplo abaixo."),n(),t(2669,"pre")(2670,"code"),e(2671,`{ property: 'address.street', label: 'Rua' }
`),n()()()(),t(2672,"tr",17)(2673,"td",18)(2674,"div",19)(2675,"span",20),e(2676," sortable"),i(2677,"br"),n()()(),t(2678,"td",21)(2679,"code",22),e(2680,"boolean"),n()(),t(2681,"td",24)(2682,"em")(2683,"strong"),e(2684,"(opcional)"),n()(),t(2685,"p"),e(2686,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),n()()(),t(2687,"tr",17)(2688,"td",18)(2689,"div",19)(2690,"span",20),e(2691," subtitles"),i(2692,"br"),n()()(),t(2693,"td",21)(2694,"code",103),e(2695,"Array<PoTableSubtitleColumn>"),n()(),t(2696,"td",24)(2697,"em")(2698,"strong"),e(2699,"(opcional)"),n()(),t(2700,"p"),e(2701,"Define um array de objetos para as colunas de legenda. Onde, "),t(2702,"code"),e(2703,"subtitles"),n(),e(2704,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),n(),t(2705,"pre")(2706,"code"),e(2707,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'caption-tag-13', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'caption-tag-08', label: 'Atrasado', content: '2' }
}
`),n()(),t(2708,"p"),e(2709,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),n()()(),t(2710,"tr",17)(2711,"td",18)(2712,"div",19)(2713,"span",20),e(2714," tooltip"),i(2715,"br"),n()()(),t(2716,"td",21)(2717,"code",31),e(2718,"string"),n()(),t(2719,"td",24)(2720,"em")(2721,"strong"),e(2722,"(opcional)"),n()(),t(2723,"p"),e(2724,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(2725,"em"),e(2726,"mouse"),n(),e(2727," sobre um texto."),n(),t(2728,"blockquote")(2729,"p"),e(2730,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),t(2731,"em"),e(2732,"link"),n(),e(2733,"."),n()(),t(2734,"blockquote")(2735,"p"),e(2736,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),t(2737,"em"),e(2738,"tooltip"),n(),e(2739," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),n()()()(),t(2740,"tr",17)(2741,"td",18)(2742,"div",19)(2743,"span",20),e(2744," type"),i(2745,"br"),n()()(),t(2746,"td",21)(2747,"code",31),e(2748,"string"),n()(),t(2749,"td",24)(2750,"em")(2751,"strong"),e(2752,"(opcional)"),n()(),t(2753,"p"),e(2754,"Tipo da coluna."),n(),t(2755,"p"),e(2756,"Valores v\xE1lidos:"),n(),t(2757,"ul")(2758,"li")(2759,"p")(2760,"code"),e(2761,"boolean"),n(),e(2762,": Exibir\xE1 por padr\xE3o "),t(2763,"code"),e(2764,"Sim"),n(),e(2765," e "),t(2766,"code"),e(2767,"N\xE3o"),n(),e(2768," de acordo com os valores "),t(2769,"em"),e(2770,"booleanos"),n(),e(2771,"."),n(),t(2772,"blockquote")(2773,"p"),e(2774,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),t(2775,"code"),e(2776,"boolean"),n(),e(2777," desta interface."),n()()(),t(2778,"li")(2779,"p")(2780,"code"),e(2781,"currency"),n(),e(2782,": valores monet\xE1rios."),n()(),t(2783,"li")(2784,"p")(2785,"code"),e(2786,"date"),n(),e(2787,": valor de datas."),n(),t(2788,"ul")(2789,"li"),e(2790,"Aceita os tipos "),t(2791,"em"),e(2792,"string"),n(),e(2793," e "),t(2794,"em"),e(2795,"Date"),n(),e(2796,` padr\xE3o do Javascript,
por exemplo: `),t(2797,"code"),e(2798,"'2017-11-28'"),n(),e(2799," ou "),t(2800,"code"),e(2801,"new Date(2017, 10, 28)"),n(),e(2802,"."),n()()(),t(2803,"li")(2804,"p")(2805,"code"),e(2806,"dateTime"),n(),e(2807,": valor de data com hor\xE1rio."),n(),t(2808,"ul")(2809,"li"),e(2810,"Aceita o tipo "),t(2811,"em"),e(2812,"string"),n(),e(2813," no formato "),t(2814,"strong"),e(2815,"ISO-8601"),n(),e(2816," extendido "),t(2817,"strong"),e(2818,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(2819,`
e o tipo `),t(2820,"em"),e(2821,"Date"),n(),e(2822," padr\xE3o do Javascript, por exemplo: "),t(2823,"code"),e(2824,"'2017-11-28T00:00:00-02:00'"),n(),e(2825," ou "),t(2826,"code"),e(2827,"new Date(2017, 10, 28)"),n(),e(2828,"."),n()()(),t(2829,"li")(2830,"p")(2831,"code"),e(2832,"detail"),n(),e(2833,": array de objetos para o master-detail."),n(),t(2834,"ul")(2835,"li"),e(2836,"Incompat\xEDvel com "),t(2837,"code"),e(2838,"virtual-scroll"),n(),e(2839,", que requer altura fixa nas linhas."),n()()(),t(2840,"li")(2841,"p")(2842,"code"),e(2843,"icon"),n(),e(2844,": "),t(2845,"em"),e(2846,"array"),n(),e(2847," de "),t(2848,"em"),e(2849,"string"),n(),e(2850," ou objetos para a coluna de \xEDcones."),n()(),t(2851,"li")(2852,"p")(2853,"code"),e(2854,"label"),n(),e(2855,": texto com destaque."),n()(),t(2856,"li")(2857,"p")(2858,"code"),e(2859,"link"),n(),e(2860,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),n()(),t(2861,"li")(2862,"p")(2863,"code"),e(2864,"number"),n(),e(2865,": valores num\xE9ricos."),n()(),t(2866,"li")(2867,"p")(2868,"code"),e(2869,"string"),n(),e(2870,": textos."),n()(),t(2871,"li")(2872,"p")(2873,"code"),e(2874,"subtitle"),n(),e(2875,": array de objetos para a coluna de legenda."),n()(),t(2876,"li")(2877,"p")(2878,"code"),e(2879,"time"),n(),e(2880,": valor de hor\xE1rio."),n(),t(2881,"ul")(2882,"li"),e(2883,"Aceita o tipo "),t(2884,"em"),e(2885,"string"),n(),e(2886," nos formatos "),t(2887,"strong"),e(2888,"'HH:mm:ss'"),n(),e(2889," ou "),t(2890,"strong"),e(2891,"'HH:mm:ss.ffffff'"),n(),e(2892,", por exemplo: "),t(2893,"code"),e(2894,"'23:12:45'"),n(),e(2895,"."),n()()(),t(2896,"li")(2897,"p")(2898,"code"),e(2899,"cellTemplate"),n(),e(2900,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2901,"a",8),e(2902,"PoTableCellTemplate"),n(),e(2903,"."),n()(),t(2904,"li")(2905,"p")(2906,"code"),e(2907,"columnTemplate"),n(),e(2908,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),t(2909,"a",7),e(2910,"PoTableColumnTemplate"),n(),e(2911,"."),n()()()()(),t(2912,"tr",17)(2913,"td",18)(2914,"div",19)(2915,"span",20),e(2916," visible"),i(2917,"br"),n()()(),t(2918,"td",21)(2919,"code",22),e(2920,"boolean"),n()(),t(2921,"td",24)(2922,"em")(2923,"strong"),e(2924,"(opcional)"),n()(),t(2925,"p"),e(2926,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),t(2927,"strong"),e(2928,"gerenciador de colunas"),n(),e(2929,"."),n(),t(2930,"blockquote")(2931,"p"),e(2932,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),t(2933,"code"),e(2934,"p-max-columns"),n(),e(2935,"."),n()()()(),t(2936,"tr",17)(2937,"td",18)(2938,"div",19)(2939,"span",20),e(2940," width"),i(2941,"br"),n()()(),t(2942,"td",21)(2943,"code",31),e(2944,"string"),n()(),t(2945,"td",24)(2946,"em")(2947,"strong"),e(2948,"(opcional)"),n()(),t(2949,"p"),e(2950,`hoje o tamanho m\xEDnimo das colunas \xE9 de 32px, respeitando o padding lateral.
Boas Pr\xE1ticas:
Indicamos:`),n(),t(2951,"ul")(2952,"li"),e(2953,"para colunas com 2 das propriedades (property, [p-draggable] e [p-sort]) : 96px"),n(),t(2954,"li"),e(2955,"para colunas com 3 propriedades (property, [p-draggable] e [p-sort]) : 144px"),n()()()()(),t(2956,"h4",44)(2957,"code",5),e(2958,"PoTableLiterals"),n()(),t(2959,"div",2)(2960,"p"),e(2961,"Interface para defini\xE7\xE3o das literais usadas no "),t(2962,"code"),e(2963,"po-table"),n(),e(2964,"."),n()(),t(2965,"h4",13),e(2966,"Propriedades"),n(),t(2967,"table",14)(2968,"tr",15)(2969,"th",16),e(2970,"Nome"),n(),t(2971,"th",16),e(2972,"Tipo"),n(),t(2973,"th",16),e(2974,"Descri\xE7\xE3o"),n()(),t(2975,"tr",17)(2976,"td",18)(2977,"div",19)(2978,"span",20),e(2979," bodyDelete"),i(2980,"br"),n()()(),t(2981,"td",21)(2982,"code",31),e(2983,"string"),n()(),t(2984,"td",24)(2985,"em")(2986,"strong"),e(2987,"(opcional)"),n()(),t(2988,"p"),e(2989,"Texto no corpo do Modal de exclus\xE3o"),n()()(),t(2990,"tr",17)(2991,"td",18)(2992,"div",19)(2993,"span",20),e(2994," cancel"),i(2995,"br"),n()()(),t(2996,"td",21)(2997,"code",31),e(2998,"string"),n()(),t(2999,"td",24)(3e3,"em")(3001,"strong"),e(3002,"(opcional)"),n()(),t(3003,"p"),e(3004,"Texto no Modal para cancelar a exclus\xE3o"),n()()(),t(3005,"tr",17)(3006,"td",18)(3007,"div",19)(3008,"span",20),e(3009," columnsManager"),i(3010,"br"),n()()(),t(3011,"td",21)(3012,"code",31),e(3013,"string"),n()(),t(3014,"td",24)(3015,"em")(3016,"strong"),e(3017,"(opcional)"),n()(),t(3018,"p"),e(3019,"Texto do "),t(3020,"strong"),e(3021,"Gerenciador de colunas"),n(),e(3022," localizado no canto superior direito da tabela."),n()()(),t(3023,"tr",17)(3024,"td",18)(3025,"div",19)(3026,"span",20),e(3027," completeSubtitle"),i(3028,"br"),n()()(),t(3029,"td",21)(3030,"code",31),e(3031,"string"),n()(),t(3032,"td",24)(3033,"em")(3034,"strong"),e(3035,"(opcional)"),n()(),t(3036,"p"),e(3037,"T\xEDtulo da modal 'Legenda completa' que aparece ao clicar no bot\xE3o 'Ver legenda completa'."),n()()(),t(3038,"tr",17)(3039,"td",18)(3040,"div",19)(3041,"span",20),e(3042," delete"),i(3043,"br"),n()()(),t(3044,"td",21)(3045,"code",31),e(3046,"string"),n()(),t(3047,"td",24)(3048,"em")(3049,"strong"),e(3050,"(opcional)"),n()(),t(3051,"p"),e(3052,"Texto no Modal para confirmar a exclus\xE3o"),n()()(),t(3053,"tr",17)(3054,"td",18)(3055,"div",19)(3056,"span",20),e(3057," deleteApiError"),i(3058,"br"),n()()(),t(3059,"td",21)(3060,"code",31),e(3061,"string"),n()(),t(3062,"td",24)(3063,"em")(3064,"strong"),e(3065,"(opcional)"),n()(),t(3066,"p"),e(3067,"Texto de notifica\xE7\xE3o de erro na requisi\xE7\xE3o Delete"),n()()(),t(3068,"tr",17)(3069,"td",18)(3070,"div",19)(3071,"span",20),e(3072," deleteSuccessful"),i(3073,"br"),n()()(),t(3074,"td",21)(3075,"code",31),e(3076,"string"),n()(),t(3077,"td",24)(3078,"em")(3079,"strong"),e(3080,"(opcional)"),n()(),t(3081,"p"),e(3082,"Texto de notifica\xE7\xE3o de remo\xE7\xE3o com sucesso"),n()()(),t(3083,"tr",17)(3084,"td",18)(3085,"div",19)(3086,"span",20),e(3087," loadMoreData"),i(3088,"br"),n()()(),t(3089,"td",21)(3090,"code",31),e(3091,"string"),n()(),t(3092,"td",24)(3093,"em")(3094,"strong"),e(3095,"(opcional)"),n()(),t(3096,"p"),e(3097,"Texto do bot\xE3o de "),t(3098,"strong"),e(3099,"Carregar mais resultados"),n(),e(3100," localizado no rodap\xE9 da tabela."),n()()(),t(3101,"tr",17)(3102,"td",18)(3103,"div",19)(3104,"span",20),e(3105," loadingData"),i(3106,"br"),n()()(),t(3107,"td",21)(3108,"code",31),e(3109,"string"),n()(),t(3110,"td",24)(3111,"em")(3112,"strong"),e(3113,"(opcional)"),n()(),t(3114,"p"),e(3115,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na tabela."),n()()(),t(3116,"tr",17)(3117,"td",18)(3118,"div",19)(3119,"span",20),e(3120," multipleItems"),i(3121,"br"),n()()(),t(3122,"td",21)(3123,"code",31),e(3124,"string"),n()(),t(3125,"td",24)(3126,"em")(3127,"strong"),e(3128,"(opcional)"),n()(),t(3129,"p"),e(3130,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(3131,"tr",17)(3132,"td",18)(3133,"div",19)(3134,"span",20),e(3135," noColumns"),i(3136,"br"),n()()(),t(3137,"td",21)(3138,"code",31),e(3139,"string"),n()(),t(3140,"td",24)(3141,"em")(3142,"strong"),e(3143,"(opcional)"),n()(),t(3144,"p"),e(3145,"Texto exibido quando n\xE3o existem colunas definidas para a tabela."),n()()(),t(3146,"tr",17)(3147,"td",18)(3148,"div",19)(3149,"span",20),e(3150," noData"),i(3151,"br"),n()()(),t(3152,"td",21)(3153,"code",31),e(3154,"string"),n()(),t(3155,"td",24)(3156,"em")(3157,"strong"),e(3158,"(opcional)"),n()(),t(3159,"p"),e(3160,"Texto exibido quando n\xE3o existem itens para serem exibidos na tabela."),n()()(),t(3161,"tr",17)(3162,"td",18)(3163,"div",19)(3164,"span",20),e(3165," noItem"),i(3166,"br"),n()()(),t(3167,"td",21)(3168,"code",31),e(3169,"string"),n()(),t(3170,"td",24)(3171,"em")(3172,"strong"),e(3173,"(opcional)"),n()(),t(3174,"p"),e(3175,"Texto exibido quando nenhum item for selecionado no checkbox."),n()()(),t(3176,"tr",17)(3177,"td",18)(3178,"div",19)(3179,"span",20),e(3180," noVisibleColumn"),i(3181,"br"),n()()(),t(3182,"td",21)(3183,"code",31),e(3184,"string"),n()(),t(3185,"td",24)(3186,"em")(3187,"strong"),e(3188,"(opcional)"),n()(),t(3189,"p"),e(3190,"Texto exibido quando n\xE3o existem colunas vis\xEDveis para a tabela."),n()()(),t(3191,"tr",17)(3192,"td",18)(3193,"div",19)(3194,"span",20),e(3195," oneItem"),i(3196,"br"),n()()(),t(3197,"td",21)(3198,"code",31),e(3199,"string"),n()(),t(3200,"td",24)(3201,"em")(3202,"strong"),e(3203,"(opcional)"),n()(),t(3204,"p"),e(3205,"Texto exibido quando apenas 1 item for selecionado no checkbox."),n()()(),t(3206,"tr",17)(3207,"td",18)(3208,"div",19)(3209,"span",20),e(3210," seeCompleteSubtitle"),i(3211,"br"),n()()(),t(3212,"td",21)(3213,"code",31),e(3214,"string"),n()(),t(3215,"td",24)(3216,"em")(3217,"strong"),e(3218,"(opcional)"),n()(),t(3219,"p"),e(3220,"Texto do bot\xE3o "),t(3221,"strong"),e(3222,"Ver legenda completa"),n(),e(3223," que aparece quando o rodap\xE9 de legendas \xE9 maior que a tabela."),n()()()(),t(3224,"h4",44)(3225,"code",5),e(3226,"PoTableColumnIcon"),n()(),t(3227,"div",2)(3228,"p"),i(3229,"a",104),n(),t(3230,"p"),e(3231,"Interface que define a coluna com \xEDcone(s) do "),t(3232,"code"),e(3233,"po-table"),n(),e(3234,"."),n()(),t(3235,"h4",13),e(3236,"Propriedades"),n(),t(3237,"table",14)(3238,"tr",15)(3239,"th",16),e(3240,"Nome"),n(),t(3241,"th",16),e(3242,"Tipo"),n(),t(3243,"th",16),e(3244,"Descri\xE7\xE3o"),n()(),t(3245,"tr",17)(3246,"td",18)(3247,"div",19)(3248,"span",20),e(3249," action"),i(3250,"br"),n()()(),t(3251,"td",21)(3252,"code",45),e(3253,"Function"),n()(),t(3254,"td",24)(3255,"em")(3256,"strong"),e(3257,"(opcional)"),n()(),t(3258,"p"),e(3259,"Define a a\xE7\xE3o que ser\xE1 executada ao clicar no \xEDcone."),n()()(),t(3260,"tr",17)(3261,"td",18)(3262,"div",19)(3263,"span",20),e(3264," color"),i(3265,"br"),n()()(),t(3266,"td",21)(3267,"code",31),e(3268,"string "),n(),t(3269,"code",45),e(3270," Function"),n()(),t(3271,"td",24)(3272,"em")(3273,"strong"),e(3274,"(opcional)"),n()(),t(3275,"p"),e(3276,"Define a cor do \xEDcone."),n(),t(3277,"p"),e(3278,"Valores v\xE1lidos:"),n(),t(3279,"ul")(3280,"li"),i(3281,"span",51),t(3282,"code"),e(3283,"color-01"),n()(),t(3284,"li"),i(3285,"span",52),t(3286,"code"),e(3287,"color-02"),n()(),t(3288,"li"),i(3289,"span",53),t(3290,"code"),e(3291,"color-03"),n()(),t(3292,"li"),i(3293,"span",54),t(3294,"code"),e(3295,"color-04"),n()(),t(3296,"li"),i(3297,"span",55),t(3298,"code"),e(3299,"color-05"),n()(),t(3300,"li"),i(3301,"span",56),t(3302,"code"),e(3303,"color-06"),n()(),t(3304,"li"),i(3305,"span",57),t(3306,"code"),e(3307,"color-07"),n()(),t(3308,"li"),i(3309,"span",58),t(3310,"code"),e(3311,"color-08"),n()(),t(3312,"li"),i(3313,"span",59),t(3314,"code"),e(3315,"color-09"),n()(),t(3316,"li"),i(3317,"span",60),t(3318,"code"),e(3319,"color-10"),n()(),t(3320,"li"),i(3321,"span",61),t(3322,"code"),e(3323,"color-11"),n()(),t(3324,"li"),i(3325,"span",62),t(3326,"code"),e(3327,"color-12"),n()()(),t(3328,"blockquote")(3329,"p"),e(3330,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),t(3331,"strong"),e(3332,"Caption Tag Colors"),n(),e(3333,":"),n()(),t(3334,"ul")(3335,"li"),i(3336,"span",63),t(3337,"code"),e(3338,"caption-tag-01"),n(),i(3339,"span",64),t(3340,"code"),e(3341,"caption-tag-02"),n(),i(3342,"span",65),t(3343,"code"),e(3344,"caption-tag-03"),n(),i(3345,"span",66),t(3346,"code"),e(3347,"caption-tag-04"),n(),i(3348,"span",67),t(3349,"code"),e(3350,"caption-tag-05"),n()(),t(3351,"li"),i(3352,"span",68),t(3353,"code"),e(3354,"caption-tag-06"),n(),i(3355,"span",69),t(3356,"code"),e(3357,"caption-tag-07"),n(),i(3358,"span",70),t(3359,"code"),e(3360,"caption-tag-08"),n(),i(3361,"span",71),t(3362,"code"),e(3363,"caption-tag-09"),n(),i(3364,"span",72),t(3365,"code"),e(3366,"caption-tag-10"),n()(),t(3367,"li"),i(3368,"span",73),t(3369,"code"),e(3370,"caption-tag-11"),n(),i(3371,"span",74),t(3372,"code"),e(3373,"caption-tag-12"),n(),i(3374,"span",75),t(3375,"code"),e(3376,"caption-tag-13"),n(),i(3377,"span",76),t(3378,"code"),e(3379,"caption-tag-14"),n(),i(3380,"span",77),t(3381,"code"),e(3382,"caption-tag-15"),n()(),t(3383,"li"),i(3384,"span",78),t(3385,"code"),e(3386,"caption-tag-16"),n(),i(3387,"span",79),t(3388,"code"),e(3389,"caption-tag-17"),n(),i(3390,"span",80),t(3391,"code"),e(3392,"caption-tag-18"),n(),i(3393,"span",81),t(3394,"code"),e(3395,"caption-tag-19"),n(),i(3396,"span",82),t(3397,"code"),e(3398,"caption-tag-20"),n()(),t(3399,"li"),i(3400,"span",83),t(3401,"code"),e(3402,"caption-tag-21"),n(),i(3403,"span",84),t(3404,"code"),e(3405,"caption-tag-22"),n(),i(3406,"span",85),t(3407,"code"),e(3408,"caption-tag-23"),n(),i(3409,"span",86),t(3410,"code"),e(3411,"caption-tag-24"),n(),i(3412,"span",87),t(3413,"code"),e(3414,"caption-tag-25"),n()(),t(3415,"li"),i(3416,"span",88),t(3417,"code"),e(3418,"caption-tag-26"),n(),i(3419,"span",89),t(3420,"code"),e(3421,"caption-tag-27"),n(),i(3422,"span",90),t(3423,"code"),e(3424,"caption-tag-28"),n(),i(3425,"span",91),t(3426,"code"),e(3427,"caption-tag-29"),n(),i(3428,"span",92),t(3429,"code"),e(3430,"caption-tag-30"),n()(),t(3431,"li"),i(3432,"span",93),t(3433,"code"),e(3434,"caption-tag-31"),n(),i(3435,"span",94),t(3436,"code"),e(3437,"caption-tag-32"),n(),i(3438,"span",95),t(3439,"code"),e(3440,"caption-tag-33"),n(),i(3441,"span",96),t(3442,"code"),e(3443,"caption-tag-34"),n(),i(3444,"span",97),t(3445,"code"),e(3446,"caption-tag-35"),n()()()()(),t(3447,"tr",17)(3448,"td",18)(3449,"div",19)(3450,"span",20),e(3451," disabled"),i(3452,"br"),n()()(),t(3453,"td",21)(3454,"code",45),e(3455,"Function"),n()(),t(3456,"td",24)(3457,"em")(3458,"strong"),e(3459,"(opcional)"),n()(),t(3460,"p"),e(3461,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o \xEDcone e sua a\xE7\xE3o."),n()()(),t(3462,"tr",17)(3463,"td",18)(3464,"div",19)(3465,"span",20),e(3466," icon"),i(3467,"br"),n()()(),t(3468,"td",21)(3469,"code",31),e(3470,"string "),n(),t(3471,"code",46),e(3472," TemplateRef<void>"),n()(),t(3473,"td",24)(3474,"em")(3475,"strong"),e(3476,"(opcional)"),n()(),t(3477,"p"),e(3478,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3479,"a",26),e(3480,"Biblioteca de \xEDcones"),n(),e(3481,". conforme exemplo abaixo:"),n(),t(3482,"pre")(3483,"code"),e(3484,`[ { icon: 'an an-plus' } ]
`),n()(),t(3485,"p"),e(3486,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),n(),t(3487,"pre")(3488,"code"),e(3489,`[ {  icon: 'fas fa-plus' } ]
`),n()(),t(3490,"p"),e(3491,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3492,"code"),e(3493,"TemplateRef"),n(),e(3494,`, conforme exemplo abaixo:
`),t(3495,"code"),e(3496,"component.html"),n(),e(3497,":"),n(),t(3498,"pre")(3499,"code"),e(3500,`<ng-template #iconTemplateAdd>
 <span class="material-icons" style="font-size: inherit;">add</span>
</ng-template>

<po-table [p-column]="myProperty"></po-table>
`),n()(),t(3501,"p")(3502,"code"),e(3503,"component.ts"),n(),e(3504,":"),n(),t(3505,"pre")(3506,"code"),e(3507,`@ViewChild('iconTemplateAdd', { static: true }) iconTemplateAdd: TemplateRef<void>;

myProperty = [
 { property: 'columnIcon', label: 'Icons', type: 'icon', icons: [
  { value: 'plus', icon: this.iconTemplateAdd },
 ]}
];
`),n()(),t(3508,"blockquote")(3509,"p"),e(3510,"Caso esta propriedade n\xE3o seja definida, a mesma receber\xE1 o valor contido em "),t(3511,"code"),e(3512,"value"),n(),e(3513,"."),n()()()(),t(3514,"tr",17)(3515,"td",18)(3516,"div",19)(3517,"span",20),e(3518," tooltip"),i(3519,"br"),n()()(),t(3520,"td",21)(3521,"code",31),e(3522,"string"),n()(),t(3523,"td",24)(3524,"em")(3525,"strong"),e(3526,"(opcional)"),n()(),t(3527,"p"),e(3528,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3529,"em"),e(3530,"mouse"),n(),e(3531," em cima do \xEDcone."),n()()(),t(3532,"tr",17)(3533,"td",18)(3534,"div",19)(3535,"span",20),e(3536," value"),i(3537,"br"),n()()(),t(3538,"td",21)(3539,"code",31),e(3540,"string"),n()(),t(3541,"td",24)(3542,"p"),e(3543,"Define o valor do \xEDcone que ser\xE1 exibido."),n()()()(),t(3544,"h4",44)(3545,"code",5),e(3546,"PoTableColumnLabel"),n()(),t(3547,"div",2)(3548,"p"),e(3549,"Interface para configura\xE7\xE3o das colunas de labels do "),t(3550,"code"),e(3551,"po-table"),n(),e(3552,"."),n()(),t(3553,"h4",13),e(3554,"Propriedades"),n(),t(3555,"table",14)(3556,"tr",15)(3557,"th",16),e(3558,"Nome"),n(),t(3559,"th",16),e(3560,"Tipo"),n(),t(3561,"th",16),e(3562,"Descri\xE7\xE3o"),n()(),t(3563,"tr",17)(3564,"td",18)(3565,"div",19)(3566,"span",20),e(3567," color"),i(3568,"br"),n()()(),t(3569,"td",21)(3570,"code",31),e(3571,"string"),n()(),t(3572,"td",24)(3573,"em")(3574,"strong"),e(3575,"(opcional)"),n()(),t(3576,"p"),e(3577,"Define a cor do label."),n(),t(3578,"p"),e(3579,"Valores v\xE1lidos:"),n(),t(3580,"ul")(3581,"li"),i(3582,"span",51),t(3583,"code"),e(3584,"color-01"),n()(),t(3585,"li"),i(3586,"span",52),t(3587,"code"),e(3588,"color-02"),n()(),t(3589,"li"),i(3590,"span",53),t(3591,"code"),e(3592,"color-03"),n()(),t(3593,"li"),i(3594,"span",54),t(3595,"code"),e(3596,"color-04"),n()(),t(3597,"li"),i(3598,"span",55),t(3599,"code"),e(3600,"color-05"),n()(),t(3601,"li"),i(3602,"span",56),t(3603,"code"),e(3604,"color-06"),n()(),t(3605,"li"),i(3606,"span",57),t(3607,"code"),e(3608,"color-07"),n()(),t(3609,"li"),i(3610,"span",58),t(3611,"code"),e(3612,"color-08"),n()(),t(3613,"li"),i(3614,"span",59),t(3615,"code"),e(3616,"color-09"),n()(),t(3617,"li"),i(3618,"span",60),t(3619,"code"),e(3620,"color-10"),n()(),t(3621,"li"),i(3622,"span",61),t(3623,"code"),e(3624,"color-11"),n()(),t(3625,"li"),i(3626,"span",62),t(3627,"code"),e(3628,"color-12"),n()()(),t(3629,"blockquote")(3630,"p"),e(3631,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),t(3632,"strong"),e(3633,"Caption Tag Colors"),n(),e(3634,":"),n()(),t(3635,"ul")(3636,"li"),i(3637,"span",63),t(3638,"code"),e(3639,"caption-tag-01"),n(),i(3640,"span",64),t(3641,"code"),e(3642,"caption-tag-02"),n(),i(3643,"span",65),t(3644,"code"),e(3645,"caption-tag-03"),n(),i(3646,"span",66),t(3647,"code"),e(3648,"caption-tag-04"),n(),i(3649,"span",67),t(3650,"code"),e(3651,"caption-tag-05"),n()(),t(3652,"li"),i(3653,"span",68),t(3654,"code"),e(3655,"caption-tag-06"),n(),i(3656,"span",69),t(3657,"code"),e(3658,"caption-tag-07"),n(),i(3659,"span",70),t(3660,"code"),e(3661,"caption-tag-08"),n(),i(3662,"span",71),t(3663,"code"),e(3664,"caption-tag-09"),n(),i(3665,"span",72),t(3666,"code"),e(3667,"caption-tag-10"),n()(),t(3668,"li"),i(3669,"span",73),t(3670,"code"),e(3671,"caption-tag-11"),n(),i(3672,"span",74),t(3673,"code"),e(3674,"caption-tag-12"),n(),i(3675,"span",75),t(3676,"code"),e(3677,"caption-tag-13"),n(),i(3678,"span",76),t(3679,"code"),e(3680,"caption-tag-14"),n(),i(3681,"span",77),t(3682,"code"),e(3683,"caption-tag-15"),n()(),t(3684,"li"),i(3685,"span",78),t(3686,"code"),e(3687,"caption-tag-16"),n(),i(3688,"span",79),t(3689,"code"),e(3690,"caption-tag-17"),n(),i(3691,"span",80),t(3692,"code"),e(3693,"caption-tag-18"),n(),i(3694,"span",81),t(3695,"code"),e(3696,"caption-tag-19"),n(),i(3697,"span",82),t(3698,"code"),e(3699,"caption-tag-20"),n()(),t(3700,"li"),i(3701,"span",83),t(3702,"code"),e(3703,"caption-tag-21"),n(),i(3704,"span",84),t(3705,"code"),e(3706,"caption-tag-22"),n(),i(3707,"span",85),t(3708,"code"),e(3709,"caption-tag-23"),n(),i(3710,"span",86),t(3711,"code"),e(3712,"caption-tag-24"),n(),i(3713,"span",87),t(3714,"code"),e(3715,"caption-tag-25"),n()(),t(3716,"li"),i(3717,"span",88),t(3718,"code"),e(3719,"caption-tag-26"),n(),i(3720,"span",89),t(3721,"code"),e(3722,"caption-tag-27"),n(),i(3723,"span",90),t(3724,"code"),e(3725,"caption-tag-28"),n(),i(3726,"span",91),t(3727,"code"),e(3728,"caption-tag-29"),n(),i(3729,"span",92),t(3730,"code"),e(3731,"caption-tag-30"),n()(),t(3732,"li"),i(3733,"span",93),t(3734,"code"),e(3735,"caption-tag-31"),n(),i(3736,"span",94),t(3737,"code"),e(3738,"caption-tag-32"),n(),i(3739,"span",95),t(3740,"code"),e(3741,"caption-tag-33"),n(),i(3742,"span",96),t(3743,"code"),e(3744,"caption-tag-34"),n(),i(3745,"span",97),t(3746,"code"),e(3747,"caption-tag-35"),n()()(),t(3748,"p"),e(3749,"Exemplo de uso:"),n(),t(3750,"pre")(3751,"code"),e(3752,`{ property: 'status', type: 'label', labels: [
  { value: 'ativo', color: 'caption-tag-13', label: 'Ativo' },
  { value: 'pendente', color: 'caption-tag-08', label: 'Pendente' }
]}
`),n()()()(),t(3753,"tr",17)(3754,"td",18)(3755,"div",19)(3756,"span",20),e(3757," icon"),i(3758,"br"),n()()(),t(3759,"td",21)(3760,"code",22),e(3761,"boolean "),n(),t(3762,"code",31),e(3763," string "),n(),t(3764,"code",46),e(3765," TemplateRef<void>"),n()(),t(3766,"td",24)(3767,"em")(3768,"strong"),e(3769,"(opcional)"),n()(),t(3770,"p"),e(3771,"Define ou ativa um \xEDcone que ser\xE1 exibido ao lado do valor da "),t(3772,"em"),e(3773,"tag"),n(),e(3774,"."),n(),t(3775,"p"),e(3776,"Quando "),t(3777,"code"),e(3778,"p-type"),n(),e(3779," estiver definida, basta informar um valor igual a "),t(3780,"code"),e(3781,"true"),n(),e(3782," para que o \xEDcone seja exibido conforme descri\xE7\xF5es abaixo:"),n(),t(3783,"ul")(3784,"li"),i(3785,"span",105),e(3786," - "),t(3787,"code"),e(3788,"success"),n()(),t(3789,"li"),i(3790,"span",106),e(3791," - "),t(3792,"code"),e(3793,"warning"),n()(),t(3794,"li"),i(3795,"span",107),e(3796," - "),t(3797,"code"),e(3798,"danger"),n()(),t(3799,"li"),i(3800,"span",108),e(3801," - "),t(3802,"code"),e(3803,"info"),n()()(),t(3804,"p"),e(3805,"Tamb\xE9m \xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),t(3806,"a",26),e(3807,"Biblioteca de \xEDcones"),n(),e(3808,". conforme exemplo abaixo:"),n(),t(3809,"pre")(3810,"code"),e(3811,`<po-tag p-icon="an an-user" p-value="PO Tag"></po-tag>
`),n()(),t(3812,"p"),e(3813,"como tamb\xE9m utilizar outras fontes de \xEDcones, por exemplo a biblioteca "),t(3814,"em"),e(3815,"Font Awesome"),n(),e(3816,", da seguinte forma:"),n(),t(3817,"pre")(3818,"code"),e(3819,`<po-tag p-icon="fa fa-podcast" p-value="PO Tag"></po-button>
`),n()(),t(3820,"p"),e(3821,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),t(3822,"code"),e(3823,"TemplateRef"),n(),e(3824,", conforme exemplo abaixo:"),n(),t(3825,"pre")(3826,"code"),e(3827,`<po-tag [p-icon]="template" p-value="Tag template ionic"></po-button>

<ng-template #template>
 <ion-icon style="font-size: inherit" name="heart"></ion-icon>
</ng-template>
`),n()(),t(3828,"blockquote")(3829,"p"),e(3830,"Para o \xEDcone enquadrar corretamente, deve-se utilizar "),t(3831,"code"),e(3832,"font-size: inherit"),n(),e(3833," caso o \xEDcone utilizado n\xE3o aplique-o."),n()()()(),t(3834,"tr",17)(3835,"td",18)(3836,"div",19)(3837,"span",20),e(3838," label"),i(3839,"br"),n()()(),t(3840,"td",21)(3841,"code",31),e(3842,"string"),n()(),t(3843,"td",24)(3844,"p"),e(3845,"Texto que ser\xE1 exibido na coluna."),n()()(),t(3846,"tr",17)(3847,"td",18)(3848,"div",19)(3849,"span",20),e(3850," textColor"),i(3851,"br"),n()()(),t(3852,"td",21)(3853,"code",31),e(3854,"string"),n()(),t(3855,"td",24)(3856,"em")(3857,"strong"),e(3858,"(opcional)"),n()(),t(3859,"p"),e(3860,"Determina a cor do texto da tag. As maneiras de customizar as cores s\xE3o:"),n(),t(3861,"ul")(3862,"li")(3863,"p"),e(3864,"Hexadeximal, por exemplo "),t(3865,"code"),e(3866,"#c64840"),n(),e(3867,";"),n()(),t(3868,"li")(3869,"p"),e(3870,"RGB, como "),t(3871,"code"),e(3872,"rgb(0, 0, 165)"),n(),e(3873,";"),n()(),t(3874,"li")(3875,"p"),e(3876,"O nome da cor, por exemplo "),t(3877,"code"),e(3878,"blue"),n(),e(3879,";"),n()(),t(3880,"li")(3881,"p"),e(3882,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(),t(3883,"ul")(3884,"li"),i(3885,"span",51),t(3886,"code"),e(3887,"color-01"),n()(),t(3888,"li"),i(3889,"span",52),t(3890,"code"),e(3891,"color-02"),n()(),t(3892,"li"),i(3893,"span",53),t(3894,"code"),e(3895,"color-03"),n()(),t(3896,"li"),i(3897,"span",54),t(3898,"code"),e(3899,"color-04"),n()(),t(3900,"li"),i(3901,"span",55),t(3902,"code"),e(3903,"color-05"),n()(),t(3904,"li"),i(3905,"span",56),t(3906,"code"),e(3907,"color-06"),n()(),t(3908,"li"),i(3909,"span",57),t(3910,"code"),e(3911,"color-07"),n()(),t(3912,"li"),i(3913,"span",58),t(3914,"code"),e(3915,"color-08"),n()(),t(3916,"li"),i(3917,"span",59),t(3918,"code"),e(3919,"color-09"),n()(),t(3920,"li"),i(3921,"span",60),t(3922,"code"),e(3923,"color-10"),n()(),t(3924,"li"),i(3925,"span",61),t(3926,"code"),e(3927,"color-11"),n()(),t(3928,"li"),i(3929,"span",62),t(3930,"code"),e(3931,"color-12"),n()()()(),t(3932,"li")(3933,"p"),e(3934,"Para uma melhor acessibilidade no uso do componente \xE9 recomend\xE1vel utilizar cores com um melhor contraste em rela\xE7\xE3o ao background."),n()()(),t(3935,"blockquote")(3936,"p")(3937,"strong"),e(3938,"Aten\xE7\xE3o:"),n(),e(3939," A propriedade "),t(3940,"code"),e(3941,"p-type"),n(),e(3942," sobrep\xF5e esta defini\xE7\xE3o."),n()(),t(3943,"blockquote")(3944,"p")(3945,"strong"),e(3946,"Aten\xE7\xE3o:"),n(),e(3947," As cores da paleta "),t(3948,"strong"),e(3949,"Caption Tag Colors"),n(),e(3950," ("),t(3951,"code"),e(3952,"caption-tag-01"),n(),e(3953," a "),t(3954,"code"),e(3955,"caption-tag-35"),n(),e(3956,`) n\xE3o s\xE3o aceitas nesta propriedade,
pois possuem cor de texto fixa definida via token CSS.`),n()()()(),t(3957,"tr",17)(3958,"td",18)(3959,"div",19)(3960,"span",20),e(3961," tooltip"),i(3962,"br"),n()()(),t(3963,"td",21)(3964,"code",31),e(3965,"string"),n()(),t(3966,"td",24)(3967,"em")(3968,"strong"),e(3969,"(opcional)"),n()(),t(3970,"p"),e(3971,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),t(3972,"em"),e(3973,"mouse"),n(),e(3974," em cima do "),t(3975,"em"),e(3976,"label"),n(),e(3977,"."),n(),t(3978,"blockquote")(3979,"p"),e(3980,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribuido ao tooltip e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula.`),n()()()(),t(3981,"tr",17)(3982,"td",18)(3983,"div",19)(3984,"span",20),e(3985," type"),i(3986,"br"),n()()(),t(3987,"td",21)(3988,"code",109),e(3989,"PoTagType"),n()(),t(3990,"td",24)(3991,"em")(3992,"strong"),e(3993,"(opcional)"),n()(),t(3994,"p"),e(3995,"Define o tipo da "),t(3996,"em"),e(3997,"tag"),n(),e(3998,"."),n(),t(3999,"p"),e(4e3,"Valores v\xE1lidos:"),n(),t(4001,"ul")(4002,"li")(4003,"code"),e(4004,"success"),n(),e(4005,": cor verde utilizada para simbolizar sucesso ou \xEAxito."),n(),t(4006,"li")(4007,"code"),e(4008,"warning"),n(),e(4009,": cor amarela que representa aviso ou advert\xEAncia."),n(),t(4010,"li")(4011,"code"),e(4012,"danger"),n(),e(4013,": cor vermelha para erro ou aviso cr\xEDtico."),n(),t(4014,"li")(4015,"code"),e(4016,"info"),n(),e(4017,": cor cinza escuro que caracteriza conte\xFAdo informativo."),n()(),t(4018,"blockquote")(4019,"p"),e(4020,"Quando esta propriedade for definida, ir\xE1 sobrepor a defini\xE7\xE3o de "),t(4021,"code"),e(4022,"p-color"),n(),e(4023," e "),t(4024,"code"),e(4025,"p-icon"),n(),e(4026," somente ser\xE1 exibido caso seja "),t(4027,"code"),e(4028,"true"),n(),e(4029,"."),n()()()(),t(4030,"tr",17)(4031,"td",18)(4032,"div",19)(4033,"span",20),e(4034," value"),i(4035,"br"),n()()(),t(4036,"td",21)(4037,"code",31),e(4038,"string "),n(),t(4039,"code",35),e(4040," number"),n()(),t(4041,"td",24)(4042,"p"),e(4043,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(4044,"h4",44)(4045,"code",5),e(4046,"PoTableDetailColumn"),n()(),t(4047,"div",2)(4048,"p"),e(4049,"Interface para configura\xE7\xE3o das colunas do "),t(4050,"code"),e(4051,"po-table-detail"),n(),e(4052,"."),n()(),t(4053,"h4",13),e(4054,"Propriedades"),n(),t(4055,"table",14)(4056,"tr",15)(4057,"th",16),e(4058,"Nome"),n(),t(4059,"th",16),e(4060,"Tipo"),n(),t(4061,"th",16),e(4062,"Descri\xE7\xE3o"),n()(),t(4063,"tr",17)(4064,"td",18)(4065,"div",19)(4066,"span",20),e(4067," format"),i(4068,"br"),n()()(),t(4069,"td",21)(4070,"code",31),e(4071,"string"),n()(),t(4072,"td",24)(4073,"em")(4074,"strong"),e(4075,"(opcional)"),n()(),t(4076,"p"),e(4077,"Formato de exibi\xE7\xE3o do valor da coluna:"),n(),t(4078,"ul")(4079,"li")(4080,"p"),e(4081,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),n()(),t(4082,"li")(4083,"p"),e(4084,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),n()(),t(4085,"li")(4086,"p"),e(4087,`Formato para hor\xE1rio (time): aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1
'HH:mm:ss'. Exemplos: 'HH:mm', 'HH:mm:ss.ffffff', 'HH:mm:ss.ff', 'mm:ss.fff'.`),n()(),t(4088,"li")(4089,"p"),e(4090,"Formato para n\xFAmeros (number): aceita um valor seguindo o padr\xE3o "),t(4091,"a",110)(4092,"strong"),e(4093,"DecimalPipe"),n()(),e(4094," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original. Exemplo:"),n(),t(4095,"ul")(4096,"li"),e(4097,"Valor de entrada: "),t(4098,"code"),e(4099,"50"),n(),e(4100," e valor para formata\xE7\xE3o: "),t(4101,"code"),e(4102,"'1.2-5'"),n(),e(4103," o resultado ser\xE1: "),t(4104,"code"),e(4105,"50.00"),n()()()()()()(),t(4106,"tr",17)(4107,"td",18)(4108,"div",19)(4109,"span",20),e(4110," label"),i(4111,"br"),n()()(),t(4112,"td",21)(4113,"code",31),e(4114,"string"),n()(),t(4115,"td",24)(4116,"em")(4117,"strong"),e(4118,"(opcional)"),n()(),t(4119,"p"),e(4120,"Texto para t\xEDtulo da coluna."),n()()(),t(4121,"tr",17)(4122,"td",18)(4123,"div",19)(4124,"span",20),e(4125," property"),i(4126,"br"),n()()(),t(4127,"td",21)(4128,"code",31),e(4129,"string"),n()(),t(4130,"td",24)(4131,"em")(4132,"strong"),e(4133,"(opcional)"),n()(),t(4134,"p"),e(4135,"Nome identificador da coluna."),n()()(),t(4136,"tr",17)(4137,"td",18)(4138,"div",19)(4139,"span",20),e(4140," type"),i(4141,"br"),n()()(),t(4142,"td",21)(4143,"code",31),e(4144,"string"),n()(),t(4145,"td",24)(4146,"em")(4147,"strong"),e(4148,"(opcional)"),n()(),t(4149,"p"),e(4150,"Tipo da coluna."),n(),t(4151,"p"),e(4152,"Valores v\xE1lidos:"),n(),t(4153,"ul")(4154,"li")(4155,"p")(4156,"code"),e(4157,"currency"),n(),e(4158,": valores monet\xE1rios."),n()(),t(4159,"li")(4160,"p")(4161,"code"),e(4162,"date"),n(),e(4163,": valor de datas."),n(),t(4164,"ul")(4165,"li"),e(4166,"Aceita os tipos "),t(4167,"em"),e(4168,"string"),n(),e(4169," e "),t(4170,"em"),e(4171,"Date"),n(),e(4172,` padr\xE3o do Javascript,
por exemplo: `),t(4173,"code"),e(4174,"'2017-11-28'"),n(),e(4175," ou "),t(4176,"code"),e(4177,"new Date(2017, 10, 28)"),n(),e(4178,"."),n()()(),t(4179,"li")(4180,"p")(4181,"code"),e(4182,"time"),n(),e(4183,": valor de hor\xE1rio."),n()(),t(4184,"li")(4185,"p")(4186,"code"),e(4187,"number"),n(),e(4188,": valores num\xE9ricos."),n()(),t(4189,"li")(4190,"p")(4191,"code"),e(4192,"dateTime"),n(),e(4193,": valor de data com hor\xE1rio."),n(),t(4194,"ul")(4195,"li"),e(4196,"Aceita o tipo "),t(4197,"em"),e(4198,"string"),n(),e(4199," no formato "),t(4200,"strong"),e(4201,"ISO-8601"),n(),e(4202," extendido "),t(4203,"strong"),e(4204,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),n(),e(4205,`
e o tipo `),t(4206,"em"),e(4207,"Date"),n(),e(4208," padr\xE3o do Javascript, por exemplo: "),t(4209,"code"),e(4210,"'2017-11-28T00:00:00-02:00'"),n(),e(4211," ou "),t(4212,"code"),e(4213,"new Date(2017, 10, 28)"),n(),e(4214,"."),n(),t(4215,"li"),e(4216,"Aceita o tipo "),t(4217,"em"),e(4218,"string"),n(),e(4219," nos formatos "),t(4220,"strong"),e(4221,"'HH:mm:ss'"),n(),e(4222," ou "),t(4223,"strong"),e(4224,"'HH:mm:ss.ffffff'"),n(),e(4225,", por exemplo: "),t(4226,"code"),e(4227,"'23:12:45'"),n(),e(4228,"."),n()()()()()()(),t(4229,"h4",44)(4230,"code",5),e(4231,"PoTableDetail"),n()(),t(4232,"div",2)(4233,"p"),e(4234,"Interface para configura\xE7\xE3o do "),t(4235,"em"),e(4236,"detail"),n(),e(4237," do componente "),t(4238,"code"),e(4239,"po-table"),n(),e(4240,"."),n()(),t(4241,"h4",13),e(4242,"Propriedades"),n(),t(4243,"table",14)(4244,"tr",15)(4245,"th",16),e(4246,"Nome"),n(),t(4247,"th",16),e(4248,"Tipo"),n(),t(4249,"th",16),e(4250,"Descri\xE7\xE3o"),n()(),t(4251,"tr",17)(4252,"td",18)(4253,"div",19)(4254,"span",20),e(4255," columns"),i(4256,"br"),n()()(),t(4257,"td",21)(4258,"code",111),e(4259,"Array<PoTableDetailColumn>"),n()(),t(4260,"td",24)(4261,"p"),e(4262,"Define uma lista do tipo "),t(4263,"code"),e(4264,"PoTableDetailColumn"),n(),e(4265," para as colunas do objet "),t(4266,"em"),e(4267,"detail"),n(),e(4268,". Por exemplo:"),n(),t(4269,"pre")(4270,"code"),e(4271,`[
 { property: 'miles', label: 'Miles', type: 'number', format: '1.0-5' },
 { property: 'departure', label: 'Departure time', type: 'date', format: 'dd/MM/yyyy' }
]
`),n()()()(),t(4272,"tr",17)(4273,"td",18)(4274,"div",19)(4275,"span",20),e(4276," hideSelect"),i(4277,"br"),n()()(),t(4278,"td",21)(4279,"code",22),e(4280,"boolean"),n()(),t(4281,"td",24)(4282,"em")(4283,"strong"),e(4284,"(opcional)"),n()(),t(4285,"p"),e(4286,"Define se o checkbox de sele\xE7\xE3o do detail ser\xE1 exibido. Valor padr\xE3o 'false'."),n()()(),t(4287,"tr",17)(4288,"td",18)(4289,"div",19)(4290,"span",20),e(4291," typeHeader"),i(4292,"br"),n()()(),t(4293,"td",21)(4294,"code",31),e(4295,"string"),n()(),t(4296,"td",24)(4297,"em")(4298,"strong"),e(4299,"(opcional)"),n()(),t(4300,"p"),e(4301,"Define o tipo de cabe\xE7alho para o conte\xFAdo do "),t(4302,"em"),e(4303,"detail"),n(),e(4304," ."),n(),t(4305,"p"),e(4306,"Valores v\xE1lidos:"),n(),t(4307,"ul")(4308,"li")(4309,"code"),e(4310,"inline"),n(),e(4311,": Atribui o cabe\xE7alho na mesma linha do "),t(4312,"em"),e(4313,"detail"),n(),e(4314,"."),n(),t(4315,"li")(4316,"code"),e(4317,"top"),n(),e(4318,": Atribui o cabe\xE7alho acima do "),t(4319,"em"),e(4320,"detail"),n(),e(4321,", id\xEAntico ao "),t(4322,"code"),e(4323,"po-table"),n(),e(4324,"."),n(),t(4325,"li")(4326,"code"),e(4327,"none"),n(),e(4328,": Remove o cabe\xE7alho do "),t(4329,"em"),e(4330,"detail"),n(),e(4331,"."),n()()()()(),t(4332,"h4",44)(4333,"code",5),e(4334,"PoTableSubtitleColumn"),n()(),t(4335,"div",2)(4336,"p"),e(4337,"Interface para configura\xE7\xE3o das colunas de legenda do Po-Table."),n()(),t(4338,"h4",13),e(4339,"Propriedades"),n(),t(4340,"table",14)(4341,"tr",15)(4342,"th",16),e(4343,"Nome"),n(),t(4344,"th",16),e(4345,"Tipo"),n(),t(4346,"th",16),e(4347,"Descri\xE7\xE3o"),n()(),t(4348,"tr",17)(4349,"td",18)(4350,"div",19)(4351,"span",20),e(4352," color"),i(4353,"br"),n()()(),t(4354,"td",21)(4355,"code",31),e(4356,"string"),n()(),t(4357,"td",24)(4358,"em")(4359,"strong"),e(4360,"(opcional)"),n()(),t(4361,"p"),e(4362,"Define a cor do "),t(4363,"em"),e(4364,"status"),n(),e(4365,"."),n(),t(4366,"p"),e(4367,"Valores v\xE1lidos:"),n(),t(4368,"ul")(4369,"li"),i(4370,"span",51),t(4371,"code"),e(4372,"color-01"),n()(),t(4373,"li"),i(4374,"span",52),t(4375,"code"),e(4376,"color-02"),n()(),t(4377,"li"),i(4378,"span",53),t(4379,"code"),e(4380,"color-03"),n()(),t(4381,"li"),i(4382,"span",54),t(4383,"code"),e(4384,"color-04"),n()(),t(4385,"li"),i(4386,"span",55),t(4387,"code"),e(4388,"color-05"),n()(),t(4389,"li"),i(4390,"span",56),t(4391,"code"),e(4392,"color-06"),n()(),t(4393,"li"),i(4394,"span",57),t(4395,"code"),e(4396,"color-07"),n()(),t(4397,"li"),i(4398,"span",58),t(4399,"code"),e(4400,"color-08"),n()(),t(4401,"li"),i(4402,"span",59),t(4403,"code"),e(4404,"color-09"),n()(),t(4405,"li"),i(4406,"span",60),t(4407,"code"),e(4408,"color-10"),n()(),t(4409,"li"),i(4410,"span",61),t(4411,"code"),e(4412,"color-11"),n()(),t(4413,"li"),i(4414,"span",62),t(4415,"code"),e(4416,"color-12"),n()()(),t(4417,"blockquote")(4418,"p"),e(4419,"Tamb\xE9m \xE9 poss\xEDvel utilizar as 35 cores da paleta "),t(4420,"strong"),e(4421,"Caption Tag Colors"),n(),e(4422,":"),n()(),t(4423,"ul")(4424,"li"),i(4425,"span",63),t(4426,"code"),e(4427,"caption-tag-01"),n(),i(4428,"span",64),t(4429,"code"),e(4430,"caption-tag-02"),n(),i(4431,"span",65),t(4432,"code"),e(4433,"caption-tag-03"),n(),i(4434,"span",66),t(4435,"code"),e(4436,"caption-tag-04"),n(),i(4437,"span",67),t(4438,"code"),e(4439,"caption-tag-05"),n()(),t(4440,"li"),i(4441,"span",68),t(4442,"code"),e(4443,"caption-tag-06"),n(),i(4444,"span",69),t(4445,"code"),e(4446,"caption-tag-07"),n(),i(4447,"span",70),t(4448,"code"),e(4449,"caption-tag-08"),n(),i(4450,"span",71),t(4451,"code"),e(4452,"caption-tag-09"),n(),i(4453,"span",72),t(4454,"code"),e(4455,"caption-tag-10"),n()(),t(4456,"li"),i(4457,"span",73),t(4458,"code"),e(4459,"caption-tag-11"),n(),i(4460,"span",74),t(4461,"code"),e(4462,"caption-tag-12"),n(),i(4463,"span",75),t(4464,"code"),e(4465,"caption-tag-13"),n(),i(4466,"span",76),t(4467,"code"),e(4468,"caption-tag-14"),n(),i(4469,"span",77),t(4470,"code"),e(4471,"caption-tag-15"),n()(),t(4472,"li"),i(4473,"span",78),t(4474,"code"),e(4475,"caption-tag-16"),n(),i(4476,"span",79),t(4477,"code"),e(4478,"caption-tag-17"),n(),i(4479,"span",80),t(4480,"code"),e(4481,"caption-tag-18"),n(),i(4482,"span",81),t(4483,"code"),e(4484,"caption-tag-19"),n(),i(4485,"span",82),t(4486,"code"),e(4487,"caption-tag-20"),n()(),t(4488,"li"),i(4489,"span",83),t(4490,"code"),e(4491,"caption-tag-21"),n(),i(4492,"span",84),t(4493,"code"),e(4494,"caption-tag-22"),n(),i(4495,"span",85),t(4496,"code"),e(4497,"caption-tag-23"),n(),i(4498,"span",86),t(4499,"code"),e(4500,"caption-tag-24"),n(),i(4501,"span",87),t(4502,"code"),e(4503,"caption-tag-25"),n()(),t(4504,"li"),i(4505,"span",88),t(4506,"code"),e(4507,"caption-tag-26"),n(),i(4508,"span",89),t(4509,"code"),e(4510,"caption-tag-27"),n(),i(4511,"span",90),t(4512,"code"),e(4513,"caption-tag-28"),n(),i(4514,"span",91),t(4515,"code"),e(4516,"caption-tag-29"),n(),i(4517,"span",92),t(4518,"code"),e(4519,"caption-tag-30"),n()(),t(4520,"li"),i(4521,"span",93),t(4522,"code"),e(4523,"caption-tag-31"),n(),i(4524,"span",94),t(4525,"code"),e(4526,"caption-tag-32"),n(),i(4527,"span",95),t(4528,"code"),e(4529,"caption-tag-33"),n(),i(4530,"span",96),t(4531,"code"),e(4532,"caption-tag-34"),n(),i(4533,"span",97),t(4534,"code"),e(4535,"caption-tag-35"),n()()()()(),t(4536,"tr",17)(4537,"td",18)(4538,"div",19)(4539,"span",20),e(4540," content"),i(4541,"br"),n()()(),t(4542,"td",21)(4543,"code",31),e(4544,"string"),n()(),t(4545,"td",24)(4546,"p"),e(4547,"Conte\xFAdo que ser\xE1 exibido na coluna da tabela."),n()()(),t(4548,"tr",17)(4549,"td",18)(4550,"div",19)(4551,"span",20),e(4552," label"),i(4553,"br"),n()()(),t(4554,"td",21)(4555,"code",31),e(4556,"string"),n()(),t(4557,"td",24)(4558,"p"),e(4559,"Texto que ser\xE1 exibido no rodap\xE9 da tabela como legenda."),n()()(),t(4560,"tr",17)(4561,"td",18)(4562,"div",19)(4563,"span",20),e(4564," value"),i(4565,"br"),n()()(),t(4566,"td",21)(4567,"code",31),e(4568,"string "),n(),t(4569,"code",35),e(4570," number"),n()(),t(4571,"td",24)(4572,"p"),e(4573,"Valor que ser\xE1 usado como refer\xEAncia para exibi\xE7\xE3o do conte\xFAdo na coluna."),n()()()(),t(4574,"h3"),e(4575,"Enums"),n(),t(4576,"h4",4)(4577,"code",5),e(4578,"PoTableColumnSortType"),n()(),t(4579,"div",2)(4580,"p"),e(4581,"Tipos de ordena\xE7\xE3o das colunas da tabela."),n()(),t(4582,"h4",13),e(4583,"Propriedades"),n(),t(4584,"table",14)(4585,"tr",15)(4586,"th",16),e(4587,"Nome"),n(),t(4588,"th",16),e(4589,"Descri\xE7\xE3o"),n()(),t(4590,"tr",17)(4591,"td",18)(4592,"div",19)(4593,"span",20),e(4594," Ascending"),i(4595,"br"),n()()(),t(4596,"td",24)(4597,"p"),e(4598,"Ordena\xE7\xE3o ascendente"),n()()(),t(4599,"tr",17)(4600,"td",18)(4601,"div",19)(4602,"span",20),e(4603," Descending"),i(4604,"br"),n()()(),t(4605,"td",24)(4606,"p"),e(4607,"Ordena\xE7\xE3o descendente"),n()()()(),t(4608,"h4",4)(4609,"code",5),e(4610,"PoTableColumnSpacing"),n()(),t(4611,"div",2)(4612,"p"),e(4613,"Tipos de espa\xE7amento interno (padding) das c\xE9lulas ("),t(4614,"strong"),e(4615,"p-spacing"),n(),e(4616,") do po-table."),n()(),t(4617,"h4",13),e(4618,"Propriedades"),n(),t(4619,"table",14)(4620,"tr",15)(4621,"th",16),e(4622,"Nome"),n(),t(4623,"th",16),e(4624,"Descri\xE7\xE3o"),n()(),t(4625,"tr",17)(4626,"td",18)(4627,"div",19)(4628,"span",20),e(4629," ExtraSmall"),i(4630,"br"),n()()(),t(4631,"td",24)(4632,"p"),e(4633,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),n()()(),t(4634,"tr",17)(4635,"td",18)(4636,"div",19)(4637,"span",20),e(4638," Small"),i(4639,"br"),n()()(),t(4640,"td",24)(4641,"p"),e(4642,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),n()()(),t(4643,"tr",17)(4644,"td",18)(4645,"div",19)(4646,"span",20),e(4647," Medium"),i(4648,"br"),n()()(),t(4649,"td",24)(4650,"p"),e(4651,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),n()()(),t(4652,"tr",17)(4653,"td",18)(4654,"div",19)(4655,"span",20),e(4656," Large"),i(4657,"br"),n()()(),t(4658,"td",24)(4659,"p"),e(4660,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),n()()()()())},dependencies:[w],encapsulation:2})}return r})();var st=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=8;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(o,l){this.route=o,this.router=l}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(o=>{let l=o.view;this.activeTab=l||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(o){this.router.navigate([],{queryParams:{view:o},queryParamsHandling:"merge"}),this.activeTab=o}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(l){return new(l||r)(_(ke),_(ae))};static \u0275cmp=b({type:r,selectors:[["ng-component"]],standalone:!1,decls:13,vars:4,consts:[["p-title","Table",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(l,a){l&1&&(t(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return a.changeTab("doc")}),i(3,"sample-po-table-doc"),n(),t(4,"po-tab",3),u("p-click",function(){return a.changeTab("web")}),i(5,"sample-po-table-basic-view")(6,"sample-po-table-labs-view")(7,"sample-po-table-with-api-view")(8,"sample-po-table-transport-view")(9,"sample-po-table-airfare-view")(10,"sample-po-table-components-view")(11,"sample-po-table-heroes-view")(12,"sample-po-table-draggable-view"),n()()()),l&2&&(c("p-actions",a.actions),s(2),c("p-active",a.activeTab==="doc"),s(2),c("p-hide",a.hidePoWebSample)("p-active",a.activeTab==="web"))},dependencies:[He,T,P,Qe,$e,Ke,Ze,tt,it,ot,rt,mt],encapsulation:2})}return r})();var Yt=[{path:"",component:st}],dt=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Y({type:r});static \u0275inj=K({imports:[ue.forChild(Yt),ue]})}return r})();var ii=(()=>{class r{static \u0275fac=function(l){return new(l||r)};static \u0275mod=Y({type:r});static \u0275inj=K({imports:[We,dt]})}return r})();export{ii as DocPoTableModule};
