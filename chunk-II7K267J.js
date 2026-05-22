import{o as M,p as Se}from"./chunk-WYOAC7KN.js";import{Fa as se,Hb as w,Ib as L,J as I,Ja as me,K as x,L as V,M as q,Mb as Ee,S as le,Sa as ce,U as de,Ya as ue,a as ae,bb as ge,fa as U,ub as he,w as re,ya as pe}from"./chunk-XOCFD5XY.js";import{Ea as c,Fa as n,Ga as t,Ha as o,I as H,L as J,Mb as D,Mc as K,Nc as $,O as g,Oa as R,Oc as ee,P as h,Pa as u,Pc as te,Qc as ne,Ra as f,bb as T,cb as e,cd as ie,eb as k,ed as oe,gb as E,gd as j,ha as p,hb as S,ib as b,ma as Y,oa as C,pa as Z,pb as X,qb as O,rb as y,sb as Q,ya as B,za as W}from"./chunk-XD3NZLB4.js";import{a as v,b as _}from"./chunk-GAL4ENT6.js";var Oe=()=>({label:"Angular",data:100}),Ge=()=>({label:"React",data:10}),Be=(r,G)=>[r,G],be=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-basic"]],standalone:!1,decls:1,vars:6,consts:[[3,"p-series"]],template:function(d,i){d&1&&o(0,"po-chart",0),d&2&&c("p-series",Q(3,Be,O(1,Oe),O(2,Ge)))},dependencies:[V],encapsulation:2})}return r})();var Fe=r=>({"docs-sample-code-tabs":r}),xe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-basic-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Basic"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-basic/sample-po-chart-basic.component.html"),t(),n(13,"pre",7),e(14,`<po-chart
  [p-series]="[
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]"
>
</po-chart>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-basic/sample-po-chart-basic.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

@Component({
  selector: 'sample-po-chart-basic',
  templateUrl: './sample-po-chart-basic.component.html',
  standalone: false
})
export class SamplePoChartBasicComponent {}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-basic"),t(),o(23,"hr")),d&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel),p(),c("ngClass",y(4,Fe,i.hideSampleCodeTabs)))},dependencies:[D,M,w,L,be],encapsulation:2})}return r})();var Ie=()=>({value:"fillPoints",label:"fillPoints"}),N=r=>[r],qe=()=>({label:"legend",value:"legend"}),ze=()=>({label:"roseType",value:"roseType"}),He=()=>({label:"showFromToLegend",value:"showFromToLegend"}),Ze=()=>({label:"pointer",value:"pointer"}),Ye=()=>({label:"stacked",value:"stacked"}),je=()=>({value:"fixed",label:"Fixed"});function Ue(r,G){if(r&1){let l=R();n(0,"po-checkbox-group",54),b("ngModelChange",function(i){g(l);let s=f();return S(s.selectedValuesDataLabel,i)||(s.selectedValuesDataLabel=i),h(i)}),u("p-change",function(){g(l);let i=f();return h(i.changeDataLabelOptions())}),t()}if(r&2){let l=f();c("p-options",y(3,N,O(2,je))),E("ngModel",l.selectedValuesDataLabel)}}function Je(r,G){if(r&1){let l=R();n(0,"po-number",55),b("ngModelChange",function(i){g(l);let s=f();return S(s.valueGauge,i)||(s.valueGauge=i),h(i)}),u("p-change",function(i){g(l);let s=f();return h(s.changeValueGauge(i))}),t()}if(r&2){let l=f();E("ngModel",l.valueGauge)}}function Xe(r,G){if(r&1){let l=R();n(0,"po-radio-group",56),b("ngModelChange",function(i){g(l);let s=f();return S(s.selectedShapeOption,i)||(s.selectedShapeOption=i),h(i)}),t(),n(1,"po-switch",57),b("ngModelChange",function(i){g(l);let s=f();return S(s.selectedSplitArea,i)||(s.selectedSplitArea=i),h(i)}),t(),n(2,"po-switch",58),b("ngModelChange",function(i){g(l);let s=f();return S(s.selectedAreaStyle,i)||(s.selectedAreaStyle=i),h(i)}),t()}if(r&2){let l=f();c("p-options",l.optionsShapeOption),E("ngModel",l.selectedShapeOption),p(),E("ngModel",l.selectedSplitArea),p(),E("ngModel",l.selectedAreaStyle)}}function Qe(r,G){if(r&1){let l=R();n(0,"po-input",59),b("ngModelChange",function(i){g(l);let s=f();return S(s.data,i)||(s.data=i),h(i)}),t()}if(r&2){let l=f();E("ngModel",l.data)}}function Ke(r,G){if(r&1){let l=R();n(0,"po-input",60),b("ngModelChange",function(i){g(l);let s=f();return S(s.stackGroupName,i)||(s.stackGroupName=i),h(i)}),t()}if(r&2){let l=f();E("ngModel",l.stackGroupName)}}function $e(r,G){if(r&1){let l=R();n(0,"po-number",61),b("ngModelChange",function(i){g(l);let s=f();return S(s.fromGauge,i)||(s.fromGauge=i),h(i)}),t()}if(r&2){let l=f();E("ngModel",l.fromGauge)}}function et(r,G){if(r&1){let l=R();n(0,"po-number",62),b("ngModelChange",function(i){g(l);let s=f();return S(s.toGauge,i)||(s.toGauge=i),h(i)}),t()}if(r&2){let l=f();E("ngModel",l.toGauge)}}function tt(r,G){if(r&1){let l=R();n(0,"div",3)(1,"po-button",63),u("p-click",function(){g(l);let i=f();return h(i.addData())}),t()()}}function nt(r,G){if(r&1){let l=R();n(0,"po-number",64),b("ngModelChange",function(i){g(l);let s=f();return S(s.min,i)||(s.min=i),h(i)}),t(),n(1,"po-number",65),b("ngModelChange",function(i){g(l);let s=f();return S(s.max,i)||(s.max=i),h(i)}),t(),n(2,"po-input",66),b("ngModelChange",function(i){g(l);let s=f();return S(s.colorIndicator,i)||(s.colorIndicator=i),h(i)}),t(),n(3,"div",3)(4,"po-button",67),u("p-click",function(){g(l);let i=f();return h(i.addData())}),t()()}if(r&2){let l=f();E("ngModel",l.min),p(),E("ngModel",l.max),p(),E("ngModel",l.colorIndicator),p(2),c("p-disabled",l.isTypeRadar&&!l.categories)}}var Ce=(()=>{class r{color;stackGroupName;data;label;tooltip;type;serieType;valueGauge;fromGauge;toGauge;allCategories=[];radarConfig={indicator:[]};categories;min;max;colorIndicator;event;height;series;title;dataLabel;isTypeGauge=!1;isTypeRadar=!1;disabledTooltip=!1;disabledType=!1;selectedSplitArea=!1;selectedAreaStyle=!1;options={axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0};selectedValuesDataLabel=[];selectedValuesAxis=[];selectedValuesHeader=[];selectedValuesDataZoom=[];selectedValuesFillPoints=[];selectedRoseType=[];selectedFromToLegend=[];selectedPointer=[];selectedStacked=[];selectedValuesLegend=["legend"];selectedLegendVerticalPosition="bottom";selectedLegendPosition="center";selectedLegendType="plain";selectedRendererOption="canvas";selectedShapeOption="polygon";helpRadar='Example: ["Bold", "Keen", "Calm", "Wise"]';helpGeneric='Example: ["Jan", "Feb", "Mar", "Apr"]';optionsAxis=[{value:"showXAxis",label:"showXAxis"},{value:"showYAxis",label:"showYAxis"},{value:"showAxisDetails",label:"showAxisDetails"}];optionsHeader=[{value:"hideTableDetails",label:"hideTableDetails"},{value:"hideExpand",label:"hideExpand"},{value:"hideExportCsv",label:"hideExportCsv"},{value:"hideExportImage",label:"hideExportImage"}];optionsDataZoom=[{value:"dataZoom",label:"dataZoom"},{value:"bottomDataZoom",label:"bottomDataZoom"}];optionsLegendVerticalPosition=[{value:"top",label:"top"},{value:"bottom",label:"bottom"}];optionsLegendPosition=[{value:"left",label:"left"},{value:"center",label:"center"},{value:"right",label:"right"}];optionsLegendType=[{value:"plain",label:"plain"},{value:"scroll",label:"scroll"}];optionsRendererOption=[{value:"canvas",label:"canvas"},{value:"svg",label:"svg"}];optionsShapeOption=[{value:"polygon",label:"polygon"},{value:"circle",label:"circle"}];typeOptions=[{label:"Line",value:x.Line},{label:"Area",value:x.Area},{label:"Bar",value:x.Bar},{label:"Column",value:x.Column},{label:"Donut",value:x.Donut},{label:"Pie",value:x.Pie},{label:"Gauge",value:x.Gauge},{label:"Radar",value:x.Radar}];labelTypeOptions=[{label:"Number",value:I.Number},{label:"Currency",value:I.Currency}];changeDataLabelOptions(){this.dataLabel=_(v({},this.dataLabel),{fixed:this.selectedValuesDataLabel.includes("fixed")})}changeAxisOptions(){let l={showXAxis:this.selectedValuesAxis.includes("showXAxis"),showYAxis:this.selectedValuesAxis.includes("showYAxis"),showAxisDetails:this.selectedValuesAxis.includes("showAxisDetails")};this.options=_(v({},this.options),{axis:l})}changeHeaderOptions(){let l={hideExpand:this.selectedValuesHeader.includes("hideExpand"),hideExportCsv:this.selectedValuesHeader.includes("hideExportCsv"),hideExportImage:this.selectedValuesHeader.includes("hideExportImage"),hideTableDetails:this.selectedValuesHeader.includes("hideTableDetails")};this.options=_(v({},this.options),{header:l})}changeDataZoomOptions(){this.options=_(v({},this.options),{dataZoom:this.selectedValuesDataZoom.includes("dataZoom"),bottomDataZoom:this.selectedValuesDataZoom.includes("bottomDataZoom")}),this.options=v({},this.options)}changeFillPointsOptions(){this.options=_(v({},this.options),{fillPoints:this.selectedValuesFillPoints.includes("fillPoints")})}changeLegendOptions(){this.options=_(v({},this.options),{legend:this.selectedValuesLegend.includes("legend")})}changeRoseTypeOptions(){this.options=_(v({},this.options),{roseType:this.selectedRoseType.includes("roseType")})}changeShowFromToLegend(){this.options=_(v({},this.options),{showFromToLegend:this.selectedFromToLegend.includes("showFromToLegend")})}changePointer(){this.options=_(v({},this.options),{pointer:this.selectedPointer.includes("pointer")})}changeStacked(){this.options=_(v({},this.options),{stacked:this.selectedStacked.includes("stacked")})}changeLegendVerticalPosition(){this.options=_(v({},this.options),{legendVerticalPosition:this.selectedLegendVerticalPosition})}changeLegendPosition(){this.options=_(v({},this.options),{legendPosition:this.selectedLegendPosition})}changeLegendType(){this.options=_(v({},this.options),{legendType:this.selectedLegendType})}changeRendererOption(){this.options=_(v({},this.options),{rendererOption:this.selectedRendererOption})}changeType(l){l===x.Gauge&&(this.isTypeGauge=!0,this.changeSwitchGauge(!0)),l===x.Radar&&(this.isTypeRadar=!0,this.changeSwitchRadar(!0))}changeSwitchGauge(l){this.restore(!0),this.disabledTooltip=l,this.disabledType=l,l?(this.serieType=x.Gauge,this.type=x.Gauge,this.isTypeRadar=!1):(this.serieType=void 0,this.type=void 0)}changeSwitchRadar(l){this.restore(!0,!0),this.disabledType=l,l?(this.serieType=x.Radar,this.type=x.Radar,this.isTypeGauge=!1):(this.serieType=void 0,this.type=void 0)}changeValueGauge(l){this.series?.length===1&&!this.toGauge&&(this.series[0].data=l,this.series=[...this.series])}ngOnInit(){this.restore()}addOptions(l){this.options=v(v({},this.options),l?v({},l):{})}addCategories(){this.allCategories=this.convertToArray(this.categories)}addIndicators(){if(!this.categories){this.radarConfig={indicator:[]};return}let l=this.convertToArray(this.categories);this.radarConfig={indicator:l.map(d=>({name:d,min:this.min,max:this.max,color:this.colorIndicator})),shape:this.selectedShapeOption,splitArea:this.selectedSplitArea}}addData(){let l=this.serieType??this.type,d;l==="radar"?(d=this.convertToArray(this.data).map(m=>Number(m)),this.addIndicators()):d=isNaN(this.data)?this.convertToArray(this.data):Math.floor(this.data);let i=_(v({label:this.label,data:d,tooltip:this.tooltip},this.color?{color:this.color}:{}),{type:l,stackGroupName:this.stackGroupName,from:this.fromGauge,to:this.toGauge,areaStyle:this.selectedAreaStyle??void 0});this.series=[...this.series,i],this.label=void 0,this.color=void 0,this.data=void 0,this.tooltip=void 0,this.stackGroupName=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.isTypeGauge||(this.type=void 0)}isTypeGrid(){return this.type===x.Line||this.type===x.Area||this.type===x.Column||this.type===x.Bar||this.type===x.Radar}changeEvent(l,d){this.event=`${l}: ${JSON.stringify(d)}`}restore(l=!1,d=!1){this.color=void 0,this.data=void 0,this.label=void 0,this.tooltip=void 0,this.type=void 0,this.serieType=void 0,this.fromGauge=void 0,this.toGauge=void 0,this.valueGauge=void 0,this.allCategories=[],this.categories=void 0,this.event=void 0,this.height=void 0,this.series=[],this.title=void 0,this.disabledTooltip=!1,this.disabledType=!1,this.dataLabel={fixed:!1},this.options=_(v({},this.options),{axis:{minRange:void 0,maxRange:void 0,gridLines:void 0,labelType:void 0,paddingBottom:void 0,paddingLeft:void 0,paddingRight:void 0,rotateLegend:void 0,showXAxis:void 0,showYAxis:void 0,showAxisDetails:void 0},header:{hideExpand:void 0,hideExportCsv:void 0,hideExportImage:void 0,hideTableDetails:void 0},dataZoom:void 0,fillPoints:void 0,firstColumnName:void 0,innerRadius:void 0,borderRadius:void 0,textCenterGraph:void 0,descriptionChart:void 0,subtitleGauge:void 0,legend:void 0,legendPosition:void 0,legendVerticalPosition:void 0,bottomDataZoom:void 0,rendererOption:void 0,pointer:void 0,stacked:void 0,roseType:void 0,showFromToLegend:void 0}),this.selectedValuesDataLabel=[],this.selectedValuesAxis=[],this.selectedValuesHeader=[],this.selectedValuesDataZoom=[],this.selectedValuesFillPoints=[],this.selectedValuesLegend=[],this.selectedRoseType=[],l||(this.selectedFromToLegend=[],this.selectedPointer=[],this.isTypeGauge=!1),d||(this.isTypeRadar=!1,this.categories=void 0,this.radarConfig=[])}convertToArray(l){try{return JSON.parse(l)}catch(d){return}}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-labs"]],standalone:!1,decls:66,vars:100,consts:[["chartSeries","ngForm"],[3,"p-series-click","p-series-hover","p-categories","p-height","p-data-label","p-options","p-series","p-title","p-type","p-value-gauge-multiple"],["p-label","Events",1,"po-md-12"],[1,"po-row"],["p-label","Event",3,"p-value"],["p-label","Properties",1,"po-md-12"],["name","type","p-columns","3","p-label","Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","height","p-label","Height",1,"po-md-3",3,"ngModelChange","ngModel"],["name","title","p-label","Title",1,"po-md-3",3,"ngModelChange","ngModel"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"p-options","ngModel"],["p-label","Chart series",1,"po-md-12"],["name","switch","p-label","Gauge Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["name","radar","p-label","Radar Type",1,"po-md-3",3,"ngModelChange","p-change","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModel"],["name","label","p-label","Label",1,"po-md-4",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModel"],["name","serieType","p-help","Serie Type","p-label","Type",1,"po-md-4",3,"ngModelChange","p-change","ngModel","p-disabled","p-options"],["name","tooltip","p-label","Tooltip","p-help","Custom Tooltip",1,"po-md-4",3,"ngModelChange","p-disabled","ngModel"],["name","color","p-label","Color","p-help","Custom Color",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModel"],["p-label","Chart categories",1,"po-md-12"],["name","categories",3,"ngModelChange","p-blur","p-label","p-help","ngModel"],["p-label","Chart options",1,"po-md-12"],["name","minRange","p-label","minRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","maxRange","p-label","maxRange",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","gridLines","p-label","gridLines",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","labelType","p-label","labelType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","paddingBottom","p-label","paddingBottom",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingLeft","p-label","paddingLeft",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","paddingRight","p-label","paddingRight",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","rotateLegend","p-label","rotateLegend",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","innerRadius","p-label","innerRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","borderRadius","p-label","borderRadius",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","firstColumnName","p-label","firstColumnName",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","textCenterGraph","p-label","textCenterGraph",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","descriptionChart","p-label","descriptionChart",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","subtitleGauge","p-label","subtitleGauge",1,"po-md-4",3,"ngModelChange","p-blur","ngModel"],["name","headerGroup","p-label","Header",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","axisGroup","p-label","Axis",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","dataZoomGroup","p-label","DataZoom",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","fillPoints","p-label","FillPoints",1,"po-md-4",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","legend","p-label","Legend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","roseType","p-label","RoseType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","showFromToLegend","p-label","ShowFromToLegend",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","pointer","p-label","Pointer",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","stacked","p-label","Stacked",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendVerticalPosition","p-label","LegendVerticalPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendPosition","p-label","LegendPosition",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioLegendType","p-label","LegendType",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],["name","radioRendererOption","p-label","RendererOption",1,"po-md-4",3,"ngModelChange","p-change","p-options","ngModel"],[1,"po-md-12"],["p-label","Sample Restore",1,"po-md-4",3,"p-click"],["name","dataLabel","p-label","DataLabel",1,"po-md-3",3,"ngModelChange","p-change","p-options","ngModel"],["p-label","Value Gauge","name","valueGauge",1,"po-md-4",3,"ngModelChange","p-change","ngModel"],["name","radioShapeOption","p-label","ShapeOption",1,"po-md-3",3,"ngModelChange","p-options","ngModel"],["name","splitArea","p-label","splitArea",1,"po-md-1",3,"ngModelChange","ngModel"],["name","areaStyle","p-label","areaStyle",1,"po-md-1",3,"ngModelChange","ngModel"],["name","data","p-label","Data","p-help","Example: [25, 58, 83, 66] or 25",1,"po-md-4",3,"ngModelChange","ngModel"],["name","stackGroupName","p-label","Stack Group Name","p-help","Custom Group Name",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","From","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","To","name","from",1,"po-md-4",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click"],["name","min","p-label","Min",1,"po-md-3",3,"ngModelChange","ngModel"],["name","max","p-label","Max",1,"po-md-3",3,"ngModelChange","ngModel"],["name","colorIndicator","p-label","Color",1,"po-md-3",3,"ngModelChange","ngModel"],["p-label","Add Serie",1,"po-md-4",3,"p-click","p-disabled"]],template:function(d,i){if(d&1){let s=R();n(0,"po-chart",1),u("p-series-click",function(a){return i.changeEvent("p-series-click",a)})("p-series-hover",function(a){return i.changeEvent("p-series-hover",a)}),t(),o(1,"po-divider",2),n(2,"div",3),o(3,"po-info",4),t(),o(4,"po-divider",5),n(5,"form")(6,"po-select",6),b("ngModelChange",function(a){return g(s),S(i.type,a)||(i.type=a),h(a)}),u("p-change",function(a){return i.changeType(a)}),t(),n(7,"po-number",7),b("ngModelChange",function(a){return g(s),S(i.height,a)||(i.height=a),h(a)}),t(),n(8,"po-input",8),b("ngModelChange",function(a){return g(s),S(i.title,a)||(i.title=a),h(a)}),t(),B(9,Ue,1,5,"po-checkbox-group",9),t(),o(10,"po-divider",10),n(11,"form",null,0)(13,"div",3)(14,"po-switch",11),b("ngModelChange",function(a){return g(s),S(i.isTypeGauge,a)||(i.isTypeGauge=a),h(a)}),u("p-change",function(a){return i.changeSwitchGauge(a)}),t(),n(15,"po-switch",12),b("ngModelChange",function(a){return g(s),S(i.isTypeRadar,a)||(i.isTypeRadar=a),h(a)}),u("p-change",function(a){return i.changeSwitchRadar(a)}),t(),B(16,Je,1,1,"po-number",13),B(17,Xe,3,4),t(),n(18,"div",3)(19,"po-input",14),b("ngModelChange",function(a){return g(s),S(i.label,a)||(i.label=a),h(a)}),t(),B(20,Qe,1,1,"po-input",15),n(21,"po-select",16),b("ngModelChange",function(a){return g(s),S(i.serieType,a)||(i.serieType=a),h(a)}),u("p-change",function(a){return i.changeType(a)}),t(),n(22,"po-input",17),b("ngModelChange",function(a){return g(s),S(i.tooltip,a)||(i.tooltip=a),h(a)}),t(),n(23,"po-input",18),b("ngModelChange",function(a){return g(s),S(i.color,a)||(i.color=a),h(a)}),t(),B(24,Ke,1,1,"po-input",19),B(25,$e,1,1,"po-number",20),B(26,et,1,1,"po-number",21),B(27,tt,2,0,"div",3),t()(),n(28,"div",3),o(29,"po-divider",22),n(30,"po-input",23),b("ngModelChange",function(a){return g(s),S(i.categories,a)||(i.categories=a),h(a)}),u("p-blur",function(){return i.addCategories()}),t(),B(31,nt,5,4),t(),n(32,"form")(33,"div",3),o(34,"po-divider",24),n(35,"po-number",25),b("ngModelChange",function(a){return g(s),S(i.options.axis.minRange,a)||(i.options.axis.minRange=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(36,"po-number",26),b("ngModelChange",function(a){return g(s),S(i.options.axis.maxRange,a)||(i.options.axis.maxRange=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(37,"po-number",27),b("ngModelChange",function(a){return g(s),S(i.options.axis.gridLines,a)||(i.options.axis.gridLines=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(38,"po-select",28),b("ngModelChange",function(a){return g(s),S(i.options.axis.labelType,a)||(i.options.axis.labelType=a),h(a)}),u("p-change",function(){return i.addOptions()}),t(),n(39,"po-number",29),b("ngModelChange",function(a){return g(s),S(i.options.axis.paddingBottom,a)||(i.options.axis.paddingBottom=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(40,"po-number",30),b("ngModelChange",function(a){return g(s),S(i.options.axis.paddingLeft,a)||(i.options.axis.paddingLeft=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(41,"po-number",31),b("ngModelChange",function(a){return g(s),S(i.options.axis.paddingRight,a)||(i.options.axis.paddingRight=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(42,"po-number",32),b("ngModelChange",function(a){return g(s),S(i.options.axis.rotateLegend,a)||(i.options.axis.rotateLegend=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(43,"po-number",33),b("ngModelChange",function(a){return g(s),S(i.options.innerRadius,a)||(i.options.innerRadius=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(44,"po-number",34),b("ngModelChange",function(a){return g(s),S(i.options.borderRadius,a)||(i.options.borderRadius=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(45,"po-input",35),b("ngModelChange",function(a){return g(s),S(i.options.firstColumnName,a)||(i.options.firstColumnName=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(46,"po-input",36),b("ngModelChange",function(a){return g(s),S(i.options.textCenterGraph,a)||(i.options.textCenterGraph=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(47,"po-input",37),b("ngModelChange",function(a){return g(s),S(i.options.descriptionChart,a)||(i.options.descriptionChart=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t(),n(48,"po-input",38),b("ngModelChange",function(a){return g(s),S(i.options.subtitleGauge,a)||(i.options.subtitleGauge=a),h(a)}),u("p-blur",function(){return i.addOptions()}),t()(),n(49,"div",3)(50,"po-checkbox-group",39),b("ngModelChange",function(a){return g(s),S(i.selectedValuesHeader,a)||(i.selectedValuesHeader=a),h(a)}),u("p-change",function(){return i.changeHeaderOptions()}),t(),n(51,"po-checkbox-group",40),b("ngModelChange",function(a){return g(s),S(i.selectedValuesAxis,a)||(i.selectedValuesAxis=a),h(a)}),u("p-change",function(){return i.changeAxisOptions()}),t(),n(52,"po-checkbox-group",41),b("ngModelChange",function(a){return g(s),S(i.selectedValuesDataZoom,a)||(i.selectedValuesDataZoom=a),h(a)}),u("p-change",function(){return i.changeDataZoomOptions()}),t(),n(53,"po-checkbox-group",42),b("ngModelChange",function(a){return g(s),S(i.selectedValuesFillPoints,a)||(i.selectedValuesFillPoints=a),h(a)}),u("p-change",function(){return i.changeFillPointsOptions()}),t(),n(54,"po-checkbox-group",43),b("ngModelChange",function(a){return g(s),S(i.selectedValuesLegend,a)||(i.selectedValuesLegend=a),h(a)}),u("p-change",function(){return i.changeLegendOptions()}),t(),n(55,"po-checkbox-group",44),b("ngModelChange",function(a){return g(s),S(i.selectedRoseType,a)||(i.selectedRoseType=a),h(a)}),u("p-change",function(){return i.changeRoseTypeOptions()}),t(),n(56,"po-checkbox-group",45),b("ngModelChange",function(a){return g(s),S(i.selectedFromToLegend,a)||(i.selectedFromToLegend=a),h(a)}),u("p-change",function(){return i.changeShowFromToLegend()}),t(),n(57,"po-checkbox-group",46),b("ngModelChange",function(a){return g(s),S(i.selectedPointer,a)||(i.selectedPointer=a),h(a)}),u("p-change",function(){return i.changePointer()}),t(),n(58,"po-checkbox-group",47),b("ngModelChange",function(a){return g(s),S(i.selectedStacked,a)||(i.selectedStacked=a),h(a)}),u("p-change",function(){return i.changeStacked()}),t(),n(59,"po-radio-group",48),b("ngModelChange",function(a){return g(s),S(i.selectedLegendVerticalPosition,a)||(i.selectedLegendVerticalPosition=a),h(a)}),u("p-change",function(){return i.changeLegendVerticalPosition()}),t(),n(60,"po-radio-group",49),b("ngModelChange",function(a){return g(s),S(i.selectedLegendPosition,a)||(i.selectedLegendPosition=a),h(a)}),u("p-change",function(){return i.changeLegendPosition()}),t(),n(61,"po-radio-group",50),b("ngModelChange",function(a){return g(s),S(i.selectedLegendType,a)||(i.selectedLegendType=a),h(a)}),u("p-change",function(){return i.changeLegendType()}),t(),n(62,"po-radio-group",51),b("ngModelChange",function(a){return g(s),S(i.selectedRendererOption,a)||(i.selectedRendererOption=a),h(a)}),u("p-change",function(){return i.changeRendererOption()}),t()(),o(63,"po-divider",52),n(64,"div",3)(65,"po-button",53),u("p-click",function(){return i.restore()}),t()()()}d&2&&(c("p-categories",i.isTypeRadar?i.radarConfig:i.allCategories)("p-height",i.height)("p-data-label",i.dataLabel)("p-options",i.options)("p-series",i.series)("p-title",i.title)("p-type",i.type)("p-value-gauge-multiple",i.valueGauge),p(3),c("p-value",i.event),p(3),E("ngModel",i.type),c("p-disabled",i.disabledType)("p-options",i.typeOptions),p(),E("ngModel",i.height),p(),E("ngModel",i.title),p(),W(i.isTypeGrid()?9:-1),p(5),E("ngModel",i.isTypeGauge),p(),E("ngModel",i.isTypeRadar),p(),W(i.isTypeGauge?16:-1),p(),W(i.isTypeRadar?17:-1),p(2),E("ngModel",i.label),p(),W(i.isTypeGauge?-1:20),p(),E("ngModel",i.serieType),c("p-disabled",i.disabledType)("p-options",i.typeOptions),p(),c("p-disabled",i.disabledTooltip),E("ngModel",i.tooltip),p(),E("ngModel",i.color),p(),W(i.type==="bar"||i.serieType==="bar"||i.type==="column"||i.serieType==="column"?24:-1),p(),W(i.isTypeGauge?25:-1),p(),W(i.isTypeGauge?26:-1),p(),W(i.isTypeRadar?-1:27),p(3),T(i.isTypeRadar?"po-md-3":"po-md-4"),c("p-label",i.isTypeRadar?"Indicators":"Categories")("p-help",i.isTypeRadar?i.helpRadar:i.helpGeneric),E("ngModel",i.categories),p(),W(i.isTypeRadar?31:-1),p(4),E("ngModel",i.options.axis.minRange),p(),E("ngModel",i.options.axis.maxRange),p(),E("ngModel",i.options.axis.gridLines),p(),c("p-options",i.labelTypeOptions),E("ngModel",i.options.axis.labelType),p(),E("ngModel",i.options.axis.paddingBottom),p(),E("ngModel",i.options.axis.paddingLeft),p(),E("ngModel",i.options.axis.paddingRight),p(),E("ngModel",i.options.axis.rotateLegend),p(),E("ngModel",i.options.innerRadius),p(),E("ngModel",i.options.borderRadius),p(),E("ngModel",i.options.firstColumnName),p(),E("ngModel",i.options.textCenterGraph),p(),E("ngModel",i.options.descriptionChart),p(),E("ngModel",i.options.subtitleGauge),p(2),c("p-columns",2)("p-options",i.optionsHeader),E("ngModel",i.selectedValuesHeader),p(),c("p-columns",2)("p-options",i.optionsAxis),E("ngModel",i.selectedValuesAxis),p(),c("p-columns",2)("p-options",i.optionsDataZoom),E("ngModel",i.selectedValuesDataZoom),p(),c("p-columns",1)("p-options",y(83,N,O(82,Ie))),E("ngModel",i.selectedValuesFillPoints),p(),c("p-options",y(86,N,O(85,qe))),E("ngModel",i.selectedValuesLegend),p(),c("p-options",y(89,N,O(88,ze))),E("ngModel",i.selectedRoseType),p(),c("p-options",y(92,N,O(91,He))),E("ngModel",i.selectedFromToLegend),p(),c("p-options",y(95,N,O(94,Ze))),E("ngModel",i.selectedPointer),p(),c("p-options",y(98,N,O(97,Ye))),E("ngModel",i.selectedStacked),p(),c("p-options",i.optionsLegendVerticalPosition),E("ngModel",i.selectedLegendVerticalPosition),p(),c("p-options",i.optionsLegendPosition),E("ngModel",i.selectedLegendPosition),p(),c("p-options",i.optionsLegendType),E("ngModel",i.selectedLegendType),p(),c("p-options",i.optionsRendererOption),E("ngModel",i.selectedRendererOption))},dependencies:[ne,K,$,te,ee,re,V,ae,le,de,me,ce,ue,pe,ge],encapsulation:2})}return r})();var ot=r=>({"docs-sample-code-tabs":r}),fe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-labs-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart Labs"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-labs/sample-po-chart-labs.component.html"),t(),n(13,"pre",7),e(14,`<po-chart
  [p-categories]="isTypeRadar ? radarConfig : allCategories"
  [p-height]="height"
  [p-data-label]="dataLabel"
  [p-options]="options"
  [p-series]="series"
  [p-title]="title"
  [p-type]="type"
  [p-value-gauge-multiple]="valueGauge"
  (p-series-click)="changeEvent('p-series-click', $event)"
  (p-series-hover)="changeEvent('p-series-hover', $event)"
>
</po-chart>

<po-divider class="po-md-12" p-label="Events"></po-divider>

<div class="po-row">
  <po-info p-label="Event" [p-value]="event"> </po-info>
</div>

<po-divider class="po-md-12" p-label="Properties"></po-divider>

<form>
  <po-select
    class="po-md-3"
    name="type"
    [(ngModel)]="type"
    p-columns="3"
    p-label="Type"
    [p-disabled]="disabledType"
    [p-options]="typeOptions"
    (p-change)="changeType($event)"
  >
  </po-select>

  <po-number class="po-md-3" name="height" p-label="Height" [(ngModel)]="height"> </po-number>

  <po-input class="po-md-3" name="title" p-label="Title" [(ngModel)]="title"> </po-input>

  @if (isTypeGrid()) {
    <po-checkbox-group
      class="po-md-3"
      name="dataLabel"
      p-label="DataLabel"
      [p-options]="[{ value: 'fixed', label: 'Fixed' }]"
      [(ngModel)]="selectedValuesDataLabel"
      (p-change)="changeDataLabelOptions()"
    >
    </po-checkbox-group>
  }
</form>

<po-divider class="po-md-12" p-label="Chart series"></po-divider>

<form #chartSeries="ngForm">
  <div class="po-row">
    <po-switch
      class="po-md-3"
      name="switch"
      p-label="Gauge Type"
      [(ngModel)]="isTypeGauge"
      (p-change)="changeSwitchGauge($event)"
    >
    </po-switch>

    <po-switch
      class="po-md-3"
      name="radar"
      p-label="Radar Type"
      [(ngModel)]="isTypeRadar"
      (p-change)="changeSwitchRadar($event)"
    >
    </po-switch>

    @if (isTypeGauge) {
      <po-number
        class="po-md-4"
        p-label="Value Gauge"
        name="valueGauge"
        [(ngModel)]="valueGauge"
        (p-change)="changeValueGauge($event)"
      ></po-number>
    }

    @if (isTypeRadar) {
      <po-radio-group
        class="po-md-3"
        name="radioShapeOption"
        p-label="ShapeOption"
        [p-options]="optionsShapeOption"
        [(ngModel)]="selectedShapeOption"
      >
      </po-radio-group>

      <po-switch name="splitArea" class="po-md-1" p-label="splitArea" [(ngModel)]="selectedSplitArea"> </po-switch>

      <po-switch name="areaStyle" class="po-md-1" p-label="areaStyle" [(ngModel)]="selectedAreaStyle"> </po-switch>
    }
  </div>

  <div class="po-row">
    <po-input class="po-md-4" name="label" p-label="Label" [(ngModel)]="label"></po-input>

    @if (!isTypeGauge) {
      <po-input class="po-md-4" name="data" p-label="Data" p-help="Example: [25, 58, 83, 66] or 25" [(ngModel)]="data">
      </po-input>
    }

    <po-select
      class="po-md-4"
      name="serieType"
      [(ngModel)]="serieType"
      p-help="Serie Type"
      p-label="Type"
      [p-disabled]="disabledType"
      [p-options]="typeOptions"
      (p-change)="changeType($event)"
    >
    </po-select>

    <po-input
      class="po-md-4"
      name="tooltip"
      p-label="Tooltip"
      p-help="Custom Tooltip"
      [p-disabled]="disabledTooltip"
      [(ngModel)]="tooltip"
    ></po-input>

    <po-input class="po-md-4" name="color" p-label="Color" p-help="Custom Color" [(ngModel)]="color"></po-input>

    @if (type === 'bar' || serieType === 'bar' || type === 'column' || serieType === 'column') {
      <po-input
        class="po-md-4"
        name="stackGroupName"
        p-label="Stack Group Name"
        p-help="Custom Group Name"
        [(ngModel)]="stackGroupName"
      ></po-input>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="From" name="from" [(ngModel)]="fromGauge"></po-number>
    }

    @if (isTypeGauge) {
      <po-number class="po-md-4" p-label="To" name="from" [(ngModel)]="toGauge"></po-number>
    }

    @if (!isTypeRadar) {
      <div class="po-row">
        <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()"> </po-button>
      </div>
    }
  </div>
</form>
<div class="po-row">
  <po-divider class="po-md-12" p-label="Chart categories"></po-divider>
  <po-input
    name="categories"
    [class]="isTypeRadar ? 'po-md-3' : 'po-md-4'"
    [p-label]="isTypeRadar ? 'Indicators' : 'Categories'"
    [p-help]="isTypeRadar ? helpRadar : helpGeneric"
    [(ngModel)]="categories"
    (p-blur)="addCategories()"
  >
  </po-input>

  @if (isTypeRadar) {
    <po-number name="min" class="po-md-3" p-label="Min" [(ngModel)]="min"> </po-number>

    <po-number name="max" class="po-md-3" p-label="Max" [(ngModel)]="max"> </po-number>

    <po-input name="colorIndicator" class="po-md-3" p-label="Color" [(ngModel)]="colorIndicator"> </po-input>

    <div class="po-row">
      <po-button class="po-md-4" p-label="Add Serie" (p-click)="addData()" [p-disabled]="isTypeRadar && !categories">
      </po-button>
    </div>
  }
</div>
<form>
  <div class="po-row">
    <po-divider class="po-md-12" p-label="Chart options"></po-divider>

    <po-number
      class="po-md-4"
      name="minRange"
      p-label="minRange"
      [(ngModel)]="options.axis.minRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="maxRange"
      p-label="maxRange"
      [(ngModel)]="options.axis.maxRange"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="gridLines"
      p-label="gridLines"
      [(ngModel)]="options.axis.gridLines"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-select
      class="po-md-4"
      name="labelType"
      p-label="labelType"
      [p-options]="labelTypeOptions"
      [(ngModel)]="options.axis.labelType"
      (p-change)="addOptions()"
    >
    </po-select>

    <po-number
      class="po-md-4"
      name="paddingBottom"
      p-label="paddingBottom"
      [(ngModel)]="options.axis.paddingBottom"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingLeft"
      p-label="paddingLeft"
      [(ngModel)]="options.axis.paddingLeft"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="paddingRight"
      p-label="paddingRight"
      [(ngModel)]="options.axis.paddingRight"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="rotateLegend"
      p-label="rotateLegend"
      [(ngModel)]="options.axis.rotateLegend"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="innerRadius"
      p-label="innerRadius"
      [(ngModel)]="options.innerRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-number
      class="po-md-4"
      name="borderRadius"
      p-label="borderRadius"
      [(ngModel)]="options.borderRadius"
      (p-blur)="addOptions()"
    >
    </po-number>

    <po-input
      class="po-md-4"
      name="firstColumnName"
      p-label="firstColumnName"
      [(ngModel)]="options.firstColumnName"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="textCenterGraph"
      p-label="textCenterGraph"
      [(ngModel)]="options.textCenterGraph"
      (p-blur)="addOptions()"
    >
    </po-input>

    <po-input
      class="po-md-4"
      name="descriptionChart"
      p-label="descriptionChart"
      [(ngModel)]="options.descriptionChart"
      (p-blur)="addOptions()"
    ></po-input>

    <po-input
      class="po-md-4"
      name="subtitleGauge"
      p-label="subtitleGauge"
      [(ngModel)]="options.subtitleGauge"
      (p-blur)="addOptions()"
    >
    </po-input>
  </div>
  <div class="po-row">
    <po-checkbox-group
      class="po-md-4"
      name="headerGroup"
      p-label="Header"
      [p-columns]="2"
      [p-options]="optionsHeader"
      [(ngModel)]="selectedValuesHeader"
      (p-change)="changeHeaderOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="axisGroup"
      p-label="Axis"
      [p-columns]="2"
      [p-options]="optionsAxis"
      [(ngModel)]="selectedValuesAxis"
      (p-change)="changeAxisOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="dataZoomGroup"
      p-label="DataZoom"
      [p-columns]="2"
      [p-options]="optionsDataZoom"
      [(ngModel)]="selectedValuesDataZoom"
      (p-change)="changeDataZoomOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="fillPoints"
      p-label="FillPoints"
      [p-columns]="1"
      [p-options]="[{ value: 'fillPoints', label: 'fillPoints' }]"
      [(ngModel)]="selectedValuesFillPoints"
      (p-change)="changeFillPointsOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="legend"
      p-label="Legend"
      [p-options]="[{ label: 'legend', value: 'legend' }]"
      [(ngModel)]="selectedValuesLegend"
      (p-change)="changeLegendOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="roseType"
      p-label="RoseType"
      [p-options]="[{ label: 'roseType', value: 'roseType' }]"
      [(ngModel)]="selectedRoseType"
      (p-change)="changeRoseTypeOptions()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="showFromToLegend"
      p-label="ShowFromToLegend"
      [p-options]="[{ label: 'showFromToLegend', value: 'showFromToLegend' }]"
      [(ngModel)]="selectedFromToLegend"
      (p-change)="changeShowFromToLegend()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="pointer"
      p-label="Pointer"
      [p-options]="[{ label: 'pointer', value: 'pointer' }]"
      [(ngModel)]="selectedPointer"
      (p-change)="changePointer()"
    >
    </po-checkbox-group>

    <po-checkbox-group
      class="po-md-4"
      name="stacked"
      p-label="Stacked"
      [p-options]="[{ label: 'stacked', value: 'stacked' }]"
      [(ngModel)]="selectedStacked"
      (p-change)="changeStacked()"
    >
    </po-checkbox-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendVerticalPosition"
      p-label="LegendVerticalPosition"
      [p-options]="optionsLegendVerticalPosition"
      [(ngModel)]="selectedLegendVerticalPosition"
      (p-change)="changeLegendVerticalPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendPosition"
      p-label="LegendPosition"
      [p-options]="optionsLegendPosition"
      [(ngModel)]="selectedLegendPosition"
      (p-change)="changeLegendPosition()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioLegendType"
      p-label="LegendType"
      [p-options]="optionsLegendType"
      [(ngModel)]="selectedLegendType"
      (p-change)="changeLegendType()"
    >
    </po-radio-group>

    <po-radio-group
      class="po-md-4"
      name="radioRendererOption"
      p-label="RendererOption"
      [p-options]="optionsRendererOption"
      [(ngModel)]="selectedRendererOption"
      (p-change)="changeRendererOption()"
    >
    </po-radio-group>
  </div>

  <po-divider class="po-md-12"></po-divider>
  <div class="po-row">
    <po-button class="po-md-4" p-label="Sample Restore" (p-click)="restore()"> </po-button>
  </div>
</form>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-labs/sample-po-chart-labs.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, OnInit } from '@angular/core';

import {
  PoChartSerie,
  PoChartType,
  PoSelectOption,
  PoChartOptions,
  PoChartDataLabel,
  PoChartLabelFormat
} from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-labs',
  templateUrl: './sample-po-chart-labs.component.html',
  standalone: false
})
export class SamplePoChartLabsComponent implements OnInit {
  color: string;
  stackGroupName: string;
  data;
  label: string;
  tooltip: string;
  type: PoChartType;
  serieType: PoChartType;
  valueGauge: number;
  fromGauge: number;
  toGauge: number;
  allCategories: Array<string> = [];
  radarConfig: any = {
    indicator: []
  };

  categories: string;
  min: number;
  max: number;
  colorIndicator: string;
  event: string;
  height: number;
  series: Array<PoChartSerie>;
  title: string;
  dataLabel: PoChartDataLabel;
  isTypeGauge = false;
  isTypeRadar = false;
  disabledTooltip = false;
  disabledType = false;
  selectedSplitArea = false;
  selectedAreaStyle = false;
  options: PoChartOptions = {
    axis: {
      minRange: undefined,
      maxRange: undefined,
      gridLines: undefined,
      labelType: undefined,
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingRight: undefined,
      rotateLegend: undefined,
      showXAxis: undefined,
      showYAxis: undefined,
      showAxisDetails: undefined
    },
    header: {
      hideExpand: undefined,
      hideExportCsv: undefined,
      hideExportImage: undefined,
      hideTableDetails: undefined
    },
    dataZoom: undefined,
    fillPoints: undefined,
    firstColumnName: undefined,
    innerRadius: undefined,
    borderRadius: undefined,
    textCenterGraph: undefined,
    descriptionChart: undefined,
    subtitleGauge: undefined,
    legend: undefined,
    legendPosition: undefined,
    legendVerticalPosition: undefined,
    bottomDataZoom: undefined,
    rendererOption: undefined,
    pointer: undefined,
    stacked: undefined,
    roseType: undefined,
    showFromToLegend: undefined
  };

  selectedValuesDataLabel: Array<string> = [];
  selectedValuesAxis: Array<string> = [];
  selectedValuesHeader: Array<string> = [];
  selectedValuesDataZoom: Array<string> = [];
  selectedValuesFillPoints: Array<string> = [];
  selectedRoseType: Array<string> = [];
  selectedFromToLegend: Array<string> = [];
  selectedPointer: Array<string> = [];
  selectedStacked: Array<string> = [];
  selectedValuesLegend: Array<string> = ['legend'];
  selectedLegendVerticalPosition: PoChartOptions['legendVerticalPosition'] = 'bottom';
  selectedLegendPosition: PoChartOptions['legendPosition'] = 'center';
  selectedLegendType: PoChartOptions['legendPositionlegendType'] = 'plain';
  selectedRendererOption: PoChartOptions['rendererOption'] = 'canvas';
  selectedShapeOption = 'polygon';
  helpRadar = 'Example: ["Bold", "Keen", "Calm", "Wise"]';
  helpGeneric = 'Example: ["Jan", "Feb", "Mar", "Apr"]';

  optionsAxis = [
    { value: 'showXAxis', label: 'showXAxis' },
    { value: 'showYAxis', label: 'showYAxis' },
    { value: 'showAxisDetails', label: 'showAxisDetails' }
  ];

  optionsHeader = [
    { value: 'hideTableDetails', label: 'hideTableDetails' },
    { value: 'hideExpand', label: 'hideExpand' },
    { value: 'hideExportCsv', label: 'hideExportCsv' },
    { value: 'hideExportImage', label: 'hideExportImage' }
  ];

  optionsDataZoom = [
    { value: 'dataZoom', label: 'dataZoom' },
    { value: 'bottomDataZoom', label: 'bottomDataZoom' }
  ];

  optionsLegendVerticalPosition = [
    { value: 'top', label: 'top' },
    { value: 'bottom', label: 'bottom' }
  ];

  optionsLegendPosition = [
    { value: 'left', label: 'left' },
    { value: 'center', label: 'center' },
    { value: 'right', label: 'right' }
  ];

  optionsLegendType = [
    { value: 'plain', label: 'plain' },
    { value: 'scroll', label: 'scroll' }
  ];

  optionsRendererOption = [
    { value: 'canvas', label: 'canvas' },
    { value: 'svg', label: 'svg' }
  ];

  optionsShapeOption = [
    { value: 'polygon', label: 'polygon' },
    { value: 'circle', label: 'circle' }
  ];

  readonly typeOptions: Array<PoSelectOption> = [
    { label: 'Line', value: PoChartType.Line },
    { label: 'Area', value: PoChartType.Area },
    { label: 'Bar', value: PoChartType.Bar },
    { label: 'Column', value: PoChartType.Column },
    { label: 'Donut', value: PoChartType.Donut },
    { label: 'Pie', value: PoChartType.Pie },
    { label: 'Gauge', value: PoChartType.Gauge },
    { label: 'Radar', value: PoChartType.Radar }
  ];

  readonly labelTypeOptions: Array<PoSelectOption> = [
    { label: 'Number', value: PoChartLabelFormat.Number },
    { label: 'Currency', value: PoChartLabelFormat.Currency }
  ];

  changeDataLabelOptions() {
    this.dataLabel = {
      ...this.dataLabel,
      fixed: this.selectedValuesDataLabel.includes('fixed')
    };
  }

  changeAxisOptions() {
    const newAxis = {
      showXAxis: this.selectedValuesAxis.includes('showXAxis'),
      showYAxis: this.selectedValuesAxis.includes('showYAxis'),
      showAxisDetails: this.selectedValuesAxis.includes('showAxisDetails')
    };

    this.options = {
      ...this.options,
      axis: newAxis
    };
  }

  changeHeaderOptions() {
    const newHeader = {
      hideExpand: this.selectedValuesHeader.includes('hideExpand'),
      hideExportCsv: this.selectedValuesHeader.includes('hideExportCsv'),
      hideExportImage: this.selectedValuesHeader.includes('hideExportImage'),
      hideTableDetails: this.selectedValuesHeader.includes('hideTableDetails')
    };

    this.options = {
      ...this.options,
      header: newHeader
    };
  }

  changeDataZoomOptions() {
    this.options = {
      ...this.options,
      dataZoom: this.selectedValuesDataZoom.includes('dataZoom'),
      bottomDataZoom: this.selectedValuesDataZoom.includes('bottomDataZoom')
    };

    this.options = { ...this.options };
  }

  changeFillPointsOptions() {
    this.options = {
      ...this.options,
      fillPoints: this.selectedValuesFillPoints.includes('fillPoints')
    };
  }

  changeLegendOptions() {
    this.options = {
      ...this.options,
      legend: this.selectedValuesLegend.includes('legend')
    };
  }

  changeRoseTypeOptions() {
    this.options = {
      ...this.options,
      roseType: this.selectedRoseType.includes('roseType')
    };
  }

  changeShowFromToLegend() {
    this.options = {
      ...this.options,
      showFromToLegend: this.selectedFromToLegend.includes('showFromToLegend')
    };
  }

  changePointer() {
    this.options = {
      ...this.options,
      pointer: this.selectedPointer.includes('pointer')
    };
  }

  changeStacked() {
    this.options = {
      ...this.options,
      stacked: this.selectedStacked.includes('stacked')
    };
  }

  changeLegendVerticalPosition() {
    this.options = {
      ...this.options,
      legendVerticalPosition: this.selectedLegendVerticalPosition
    };
  }

  changeLegendPosition() {
    this.options = {
      ...this.options,
      legendPosition: this.selectedLegendPosition
    };
  }

  changeLegendType() {
    this.options = {
      ...this.options,
      legendType: this.selectedLegendType
    };
  }

  changeRendererOption() {
    this.options = {
      ...this.options,
      rendererOption: this.selectedRendererOption
    };
  }

  changeType(event) {
    if (event === PoChartType.Gauge) {
      this.isTypeGauge = true;
      this.changeSwitchGauge(true);
    }
    if (event === PoChartType.Radar) {
      this.isTypeRadar = true;
      this.changeSwitchRadar(true);
    }
  }

  changeSwitchGauge(event) {
    this.restore(true);
    this.disabledTooltip = event;
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Gauge;
      this.type = PoChartType.Gauge;
      this.isTypeRadar = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeSwitchRadar(event) {
    this.restore(true, true);
    this.disabledType = event;
    if (event) {
      this.serieType = PoChartType.Radar;
      this.type = PoChartType.Radar;
      this.isTypeGauge = false;
    } else {
      this.serieType = undefined;
      this.type = undefined;
    }
  }

  changeValueGauge(event) {
    if (this.series?.length === 1 && !this.toGauge) {
      this.series[0].data = event;
      this.series = [...this.series];
    }
  }

  ngOnInit() {
    this.restore();
  }

  addOptions(actionOptions?: PoChartOptions) {
    this.options = { ...this.options, ...(actionOptions ? { ...actionOptions } : {}) };
  }

  addCategories() {
    this.allCategories = this.convertToArray(this.categories);
  }

  addIndicators() {
    if (!this.categories) {
      this.radarConfig = { indicator: [] };
      return;
    }

    const arr = this.convertToArray(this.categories);

    this.radarConfig = {
      indicator: arr.map(item => ({ name: item, min: this.min, max: this.max, color: this.colorIndicator })),
      shape: this.selectedShapeOption,
      splitArea: this.selectedSplitArea
    };
  }

  addData() {
    const type = this.serieType ?? this.type;

    let data;

    if (type === 'radar') {
      const arr = this.convertToArray(this.data);
      data = arr.map(v => Number(v));
      this.addIndicators();
    } else {
      data = isNaN(this.data) ? this.convertToArray(this.data) : Math.floor(this.data);
    }

    const serie = {
      label: this.label,
      data,
      tooltip: this.tooltip,
      ...(this.color ? { color: this.color } : {}),
      type,
      stackGroupName: this.stackGroupName,
      from: this.fromGauge,
      to: this.toGauge,
      areaStyle: this.selectedAreaStyle ?? undefined
    };

    this.series = [...this.series, serie];

    this.label = undefined;
    this.color = undefined;
    this.data = undefined;
    this.tooltip = undefined;
    this.stackGroupName = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;

    if (!this.isTypeGauge) {
      this.type = undefined;
    }
  }

  isTypeGrid(): boolean {
    return (
      this.type === PoChartType.Line ||
      this.type === PoChartType.Area ||
      this.type === PoChartType.Column ||
      this.type === PoChartType.Bar ||
      this.type === PoChartType.Radar
    );
  }

  changeEvent(eventName: string, serieEvent: PoChartSerie): void {
    this.event = \`\${eventName}: \${JSON.stringify(serieEvent)}\`;
  }

  restore(fromGauge = false, keepRadar = false) {
    this.color = undefined;
    this.data = undefined;
    this.label = undefined;
    this.tooltip = undefined;
    this.type = undefined;
    this.serieType = undefined;
    this.fromGauge = undefined;
    this.toGauge = undefined;
    this.valueGauge = undefined;
    this.allCategories = [];
    this.categories = undefined;
    this.event = undefined;
    this.height = undefined;
    this.series = [];
    this.title = undefined;
    this.disabledTooltip = false;
    this.disabledType = false;

    this.dataLabel = { fixed: false };

    this.options = {
      ...this.options,
      axis: {
        minRange: undefined,
        maxRange: undefined,
        gridLines: undefined,
        labelType: undefined,
        paddingBottom: undefined,
        paddingLeft: undefined,
        paddingRight: undefined,
        rotateLegend: undefined,
        showXAxis: undefined,
        showYAxis: undefined,
        showAxisDetails: undefined
      },
      header: {
        hideExpand: undefined,
        hideExportCsv: undefined,
        hideExportImage: undefined,
        hideTableDetails: undefined
      },
      dataZoom: undefined,
      fillPoints: undefined,
      firstColumnName: undefined,
      innerRadius: undefined,
      borderRadius: undefined,
      textCenterGraph: undefined,
      descriptionChart: undefined,
      subtitleGauge: undefined,
      legend: undefined,
      legendPosition: undefined,
      legendVerticalPosition: undefined,
      bottomDataZoom: undefined,
      rendererOption: undefined,
      pointer: undefined,
      stacked: undefined,
      roseType: undefined,
      showFromToLegend: undefined
    };

    this.selectedValuesDataLabel = [];
    this.selectedValuesAxis = [];
    this.selectedValuesHeader = [];
    this.selectedValuesDataZoom = [];
    this.selectedValuesFillPoints = [];
    this.selectedValuesLegend = [];
    this.selectedRoseType = [];

    if (!fromGauge) {
      this.selectedFromToLegend = [];
      this.selectedPointer = [];
      this.isTypeGauge = false;
    }

    if (!keepRadar) {
      this.isTypeRadar = false;
      this.categories = undefined;
      this.radarConfig = [];
    }
  }

  private convertToArray(value: string): Array<any> {
    try {
      return JSON.parse(value);
    } catch {
      return undefined;
    }
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-labs"),t(),o(23,"hr")),d&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel),p(),c("ngClass",y(4,ot,i.hideSampleCodeTabs)))},dependencies:[D,M,w,L,Ce],encapsulation:2})}return r})();var ye=(()=>{class r{poAlert=J(U);participationByCountryInWorldExportsType=x.Line;evolutionOfCoffeeAndSomeCompetitorsType=x.Column;coffeConsumingChartType=x.Donut;consumptionPerCapitaType=x.Bar;categories=["2010","2011","2012","2013","2014","2015"];chartAreaCategories=["Jan-18","Jul-18","Jan-19","Jul-19","Jan-20","Jul-20","Jan-21"];categoriesColumn=["coffee","chocolate","tea"];consumptionPerCapitaItems=["Water","Fruit Juice","Coffee","Cola drinks","Pils","Tea","Red Wine","Prosecco","Sodas","Beer 0% A.","Wheat Beer","Milk Shakes"];chartAreaSeries=[{label:"Starbucks",data:[550,497,532,550,530,565,572],type:x.Area},{label:"Green Mntn Coffee Roaster",data:[420,511,493,525,522,510,567],type:x.Area},{label:"Dunkin Brands Group",data:[312,542,497,610,542,661,674],type:x.Area},{label:"Coffee Arabica Price",data:[550,612,525,373,342,297,282],type:x.Line}];coffeeConsumption=[{label:"Finland",data:9.6,tooltip:"Finland (Europe)"},{label:"Norway",data:7.2,tooltip:"Norway (Europe)"},{label:"Netherlands",data:6.7,tooltip:"Netherlands (Europe)"},{label:"Slovenia",data:6.1,tooltip:"Slovenia (Europe)"},{label:"Austria",data:5.5,tooltip:"Austria (Europe)"},{label:"Germany",data:5.2,tooltip:"Germany (Europe)"},{label:"Denmark",data:5.1,tooltip:"Denmark (Europe)"},{label:"Sweden",data:4.9,tooltip:"Sweden (Europe)"},{label:"Switzerland",data:4.8,tooltip:"Switzerland (Europe)"},{label:"Belgium",data:4.6,tooltip:"Belgium (Europe)"},{label:"Canada",data:4.5,tooltip:"Canada (North America)"},{label:"Brazil",data:4.3,tooltip:"Brazil (South America)"},{label:"Italy",data:4.2,tooltip:"Italy (Europe)"},{label:"France",data:4.1,tooltip:"France (Europe)"},{label:"USA",data:4,tooltip:"USA (North America)"}];consumptionPerCapita=[{label:"2018",data:[86.5,51.3,44.6,39.5,27.6,27.3,25.4,21.5,20.8,15.9,15.4,14.4]},{label:"2020",data:[86.1,52.1,47.3,37.8,29.8,28.5,24.9,22.5,21.1,14.5,15.5,15.5]}];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,25,29,33,33],color:"color-10",tooltip:l=>`Pa\xEDs: ${l.seriesName}<br><b>Ano:</b> ${l.name}<br><b>Exporta\xE7\xF5es:</b> ${l.value}%`},{label:"Vietnam",data:[15,17,23,19,22,18],tooltip:"Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%"},{label:"Colombia",data:[8,7,6,9,10,11],tooltip:`Pa\xEDs: {seriesName}
Ano: {name}
Participa\xE7\xE3o: {value}%`},{label:"India",data:[5,6,5,4,5,5]},{label:"Indonesia",data:[7,6,10,10,4,6]}];evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:x.Column},{label:"2017",data:[93,52,18],type:x.Column},{label:"2020",data:[95,21,-17],type:x.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:x.Line,color:"color-10"}];coffeeProduction=[{label:"Brazil",data:1796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}];items=[{position:"1",company:"Tim Hortons",location:"Hamilton, Ontario, Canada",foundation:"1964"},{position:"2",company:"Bewley\u2019s",location:"Dublin, Ireland",foundation:"1840"},{position:"3",company:"Lavazza Coffee",location:"Italy",foundation:"1895"},{position:"4",company:"Peet\u2019s Tea and Coffee",location:"Emeryville, California, US",foundation:"1966"},{position:"5",company:"Tully\u2019s Coffee",location:"Seattle, Washington, US",foundation:"1992"},{position:"6",company:"Costa Coffee",location:"Dunstable, England",foundation:"1971"},{position:"7",company:"McCafe",location:"Oak Brook, Illinois, United States",foundation:"1993"},{position:"8",company:"Starbucks Coffee",location:"Seattle, Washington, US",foundation:"1971"},{position:"9",company:"Dunkin\u2019 Donuts",location:"Quincy, Massachusetts, US",foundation:"1950"},{position:"10",company:"Coffee Beanery",location:"Flushing, Michigan, US",foundation:"1976"}];coffeeProductionOptions={roseType:!0,borderRadius:8};coffeeConsumptionOptions={legendType:"scroll"};consumptionPerCapitaOptions={axis:{maxRange:100,gridLines:2,labelType:I.Number,rotateLegend:45},legendVerticalPosition:"top"};chartAreaOptions={axis:{maxRange:700,gridLines:8},fillPoints:!0};options={axis:{minRange:0,maxRange:40,gridLines:5,labelType:I.Number},dataZoom:!0};optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7,showXAxis:!0}};searchMore(l){window.open(`http://google.com/search?q=coffee+producing+${l.label}`,"_blank")}showMeTheDates(l){this.poAlert.alert({title:"Statistic",message:`${l.label} consuming ${l.data}kg per capita!`,ok:()=>{}})}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-coffee-ranking"]],standalone:!1,features:[X([U])],decls:28,vars:22,consts:[[1,"po-row"],[1,"po-md-12","po-lg-6"],["p-title","Participation by country in world exports - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series","p-type"],["p-title","Evolution of coffee and some competitors - %",1,"po-md-12","po-mt-2",3,"p-options","p-categories","p-series"],["p-title","Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %",1,"po-md-12","po-mt-2",3,"p-height","p-categories","p-series","p-type","p-options"],[1,"po-md-12"],["p-title","Top 5 coffee producing countries (in tons)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-options","p-series"],["p-title","Top 15 Coffee Consuming Countries (in kg per capita)",1,"po-lg-6","po-mt-2",3,"p-series-click","p-series","p-options","p-type"],["p-title","While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)",1,"po-md-6","po-mt-2",3,"p-options","p-categories","p-series"],[1,"po-md-6","po-mt-2"],["p-height","198"],[1,"po-font-title","po-text-center","po-pt-5"],[1,"po-text-center"],[1,"po-lg-12","po-mt-2"],[1,"po-font-text-bold"],["p-container","shadow",3,"p-items","p-hide-table-search"]],template:function(d,i){d&1&&(n(0,"div",0)(1,"div",1)(2,"div",0),o(3,"po-chart",2)(4,"po-chart",3),t()(),n(5,"div",1),o(6,"po-chart",4),t(),n(7,"div",5)(8,"po-chart",6),u("p-series-click",function(m){return i.searchMore(m)}),t(),n(9,"po-chart",7),u("p-series-click",function(m){return i.showMeTheDates(m)}),t()(),n(10,"div",0),o(11,"po-chart",8),n(12,"div",9)(13,"po-widget",10)(14,"div",11),e(15,"66 billion"),t(),n(16,"div",12),e(17,"cups of coffee are consumed per year in U.S."),t()(),n(18,"po-widget",10)(19,"div",11),e(20,"2nd most"),t(),n(21,"div",12),e(22,"traded commodity in the world second to Oil."),t()()()()(),n(23,"div",0)(24,"po-container",13)(25,"div",14),e(26,"Top 10 Largest Coffee Chains in the World"),t(),o(27,"po-table",15),t()()),d&2&&(p(3),c("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType),p(),c("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.evolutionOfCoffeeAndSomeCompetitors),p(2),c("p-height",816)("p-categories",i.consumptionPerCapitaItems)("p-series",i.consumptionPerCapita)("p-type",i.consumptionPerCapitaType)("p-options",i.consumptionPerCapitaOptions),p(2),c("p-options",i.coffeeProductionOptions)("p-series",i.coffeeProduction),p(),c("p-series",i.coffeeConsumption)("p-options",i.coffeeConsumptionOptions)("p-type",i.coffeConsumingChartType),p(2),c("p-options",i.chartAreaOptions)("p-categories",i.chartAreaCategories)("p-series",i.chartAreaSeries),p(16),c("p-items",i.items)("p-hide-table-search",!1))},dependencies:[V,q,se,Ee],encapsulation:2})}return r})();var lt=r=>({"docs-sample-code-tabs":r}),ve=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-coffee-ranking-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Coffee Ranking"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <div class="po-md-12 po-lg-6">
    <div class="po-row">
      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Participation by country in world exports - %"
        [p-options]="options"
        [p-categories]="categories"
        [p-series]="participationByCountryInWorldExports"
        [p-type]="participationByCountryInWorldExportsType"
      >
      </po-chart>

      <po-chart
        class="po-md-12 po-mt-2"
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </div>
  </div>

  <div class="po-md-12 po-lg-6">
    <po-chart
      class="po-md-12 po-mt-2"
      p-title="Ranking of the most purchased and consumed beverages in Germany between 2018 and 2020 - in %"
      [p-height]="816"
      [p-categories]="consumptionPerCapitaItems"
      [p-series]="consumptionPerCapita"
      [p-type]="consumptionPerCapitaType"
      [p-options]="consumptionPerCapitaOptions"
    >
    </po-chart>
  </div>

  <div class="po-md-12">
    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 5 coffee producing countries (in tons)"
      [p-options]="coffeeProductionOptions"
      [p-series]="coffeeProduction"
      (p-series-click)="searchMore($event)"
    >
    </po-chart>

    <po-chart
      class="po-lg-6 po-mt-2"
      p-title="Top 15 Coffee Consuming Countries (in kg per capita)"
      [p-series]="coffeeConsumption"
      [p-options]="coffeeConsumptionOptions"
      [p-type]="coffeConsumingChartType"
      (p-series-click)="showMeTheDates($event)"
    >
    </po-chart>
  </div>

  <div class="po-row">
    <po-chart
      class="po-md-6 po-mt-2"
      p-title="While the coffee price falls, all three of these companies profit margins have risen  - (US$ millions)"
      [p-options]="chartAreaOptions"
      [p-categories]="chartAreaCategories"
      [p-series]="chartAreaSeries"
    >
    </po-chart>

    <div class="po-md-6 po-mt-2">
      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">66 billion</div>
        <div class="po-text-center">cups of coffee are consumed per year in U.S.</div>
      </po-widget>

      <po-widget p-height="198">
        <div class="po-font-title po-text-center po-pt-5">2nd most</div>
        <div class="po-text-center">traded commodity in the world second to Oil.</div>
      </po-widget>
    </div>
  </div>
</div>

<div class="po-row">
  <po-container class="po-lg-12 po-mt-2">
    <div class="po-font-text-bold">Top 10 Largest Coffee Chains in the World</div>

    <po-table p-container="shadow" [p-items]="items" [p-hide-table-search]="false"> </po-table>
  </po-container>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-coffee-ranking/sample-po-chart-coffee-ranking.component.ts"),t(),n(19,"pre",9),e(20,`import { Component, inject } from '@angular/core';

import { PoChartType, PoChartOptions, PoChartSerie, PoDialogService, PoChartLabelFormat } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-coffee-ranking',
  templateUrl: './sample-po-chart-coffee-ranking.component.html',
  providers: [PoDialogService],
  standalone: false
})
export class SamplePoChartCoffeeRankingComponent {
  private poAlert = inject(PoDialogService);

  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  evolutionOfCoffeeAndSomeCompetitorsType: PoChartType = PoChartType.Column;
  coffeConsumingChartType: PoChartType = PoChartType.Donut;
  consumptionPerCapitaType: PoChartType = PoChartType.Bar;

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];

  consumptionPerCapitaItems: Array<string> = [
    'Water',
    'Fruit Juice',
    'Coffee',
    'Cola drinks',
    'Pils',
    'Tea',
    'Red Wine',
    'Prosecco',
    'Sodas',
    'Beer 0% A.',
    'Wheat Beer',
    'Milk Shakes'
  ];

  chartAreaSeries: Array<PoChartSerie> = [
    { label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
    { label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
    { label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
    {
      label: 'Coffee Arabica Price',
      data: [550, 612, 525, 373, 342, 297, 282],
      type: PoChartType.Line
    }
  ];

  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' },
    { label: 'Germany', data: 5.2, tooltip: 'Germany (Europe)' },
    { label: 'Denmark', data: 5.1, tooltip: 'Denmark (Europe)' },
    { label: 'Sweden', data: 4.9, tooltip: 'Sweden (Europe)' },
    { label: 'Switzerland', data: 4.8, tooltip: 'Switzerland (Europe)' },
    { label: 'Belgium', data: 4.6, tooltip: 'Belgium (Europe)' },
    { label: 'Canada', data: 4.5, tooltip: 'Canada (North America)' },
    { label: 'Brazil', data: 4.3, tooltip: 'Brazil (South America)' },
    { label: 'Italy', data: 4.2, tooltip: 'Italy (Europe)' },
    { label: 'France', data: 4.1, tooltip: 'France (Europe)' },
    { label: 'USA', data: 4.0, tooltip: 'USA (North America)' }
  ];

  consumptionPerCapita: Array<PoChartSerie> = [
    { label: '2018', data: [86.5, 51.3, 44.6, 39.5, 27.6, 27.3, 25.4, 21.5, 20.8, 15.9, 15.4, 14.4] },
    { label: '2020', data: [86.1, 52.1, 47.3, 37.8, 29.8, 28.5, 24.9, 22.5, 21.1, 14.5, 15.5, 15.5] }
  ];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: [35, 32, 25, 29, 33, 33],
      color: 'color-10',
      tooltip: params =>
        \`Pa\xEDs: \${params.seriesName}<br><b>Ano:</b> \${params.name}<br><b>Exporta\xE7\xF5es:</b> \${params.value}%\`
    },
    {
      label: 'Vietnam',
      data: [15, 17, 23, 19, 22, 18],
      tooltip: 'Exporta\xE7\xF5es de <b>{seriesName}</b><br><i>Ano:</i> {name}<br>Participa\xE7\xE3o: {value}%'
    },
    {
      label: 'Colombia',
      data: [8, 7, 6, 9, 10, 11],
      tooltip: 'Pa\xEDs: {seriesName}\\nAno: {name}\\nParticipa\xE7\xE3o: {value}%'
    },
    { label: 'India', data: [5, 6, 5, 4, 5, 5] },
    { label: 'Indonesia', data: [7, 6, 10, 10, 4, 6] }
  ];

  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    { label: 'Coffee consumption in Brazil', data: [34, 27, 79], type: PoChartType.Line, color: 'color-10' }
  ];

  coffeeProduction: Array<PoChartSerie> = [
    { label: 'Brazil', data: 1796, tooltip: 'Brazil (South America)', color: 'color-10' },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' }
  ];

  items: Array<any> = [
    { position: '1', company: 'Tim Hortons', location: 'Hamilton, Ontario, Canada', foundation: '1964' },
    { position: '2', company: 'Bewley\u2019s', location: 'Dublin, Ireland', foundation: '1840' },
    { position: '3', company: 'Lavazza Coffee', location: 'Italy', foundation: '1895' },
    { position: '4', company: 'Peet\u2019s Tea and Coffee', location: 'Emeryville, California, US', foundation: '1966' },
    { position: '5', company: 'Tully\u2019s Coffee', location: 'Seattle, Washington, US', foundation: '1992' },
    { position: '6', company: 'Costa Coffee', location: 'Dunstable, England', foundation: '1971' },
    { position: '7', company: 'McCafe', location: 'Oak Brook, Illinois, United States', foundation: '1993' },
    { position: '8', company: 'Starbucks Coffee', location: 'Seattle, Washington, US', foundation: '1971' },
    { position: '9', company: 'Dunkin\u2019 Donuts', location: 'Quincy, Massachusetts, US', foundation: '1950' },
    { position: '10', company: 'Coffee Beanery', location: 'Flushing, Michigan, US', foundation: '1976' }
  ];

  coffeeProductionOptions: PoChartOptions = {
    roseType: true,
    borderRadius: 8
  };

  coffeeConsumptionOptions: PoChartOptions = {
    legendType: 'scroll'
  };

  consumptionPerCapitaOptions: PoChartOptions = {
    axis: {
      maxRange: 100,
      gridLines: 2,
      labelType: PoChartLabelFormat.Number,
      rotateLegend: 45
    },
    legendVerticalPosition: 'top'
  };

  chartAreaOptions: PoChartOptions = {
    axis: {
      maxRange: 700,
      gridLines: 8
    },
    fillPoints: true
  };

  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5,
      labelType: PoChartLabelFormat.Number
    },
    dataZoom: true
  };

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
      showXAxis: true
    }
  };

  searchMore(event: any) {
    window.open(\`http://google.com/search?q=coffee+producing+\${event.label}\`, '_blank');
  }

  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: \`\${event.label} consuming \${event.data}kg per capita!\`,
      ok: () => {}
    });
  }
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-coffee-ranking"),t(),o(23,"hr")),d&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel),p(),c("ngClass",y(4,lt,i.hideSampleCodeTabs)))},dependencies:[D,M,w,L,ye],encapsulation:2})}return r})();var _e=(()=>{class r{typeBar=x.Bar;optionsColumn={axis:{minRange:-20,gridLines:7}};categoriesColumn=["North Region","Central Region","South Region"];seriesColumn=[{label:"Year 2014",data:[51,40,42],stackGroupName:"group1"},{label:"Year 2017",data:[53,52,18]},{label:"Year 2020",data:[55,21,-17],stackGroupName:"group1"},{label:"Year 2023",data:[35,27,23],stackGroupName:"group2"},{label:"Year 2026",data:[45,34,17],stackGroupName:"group2"},{label:"Year 2029",data:[23,63,56],stackGroupName:"group1"}];optionsBar={stacked:!0};categoriesBar=["North Region","Central Region","South Region","Southeast Region","Northeast Region"];seriesBar=[{label:"Year 2014",data:[199,340,247,236,222]},{label:"Year 2017",data:[221,252,225,241,225]},{label:"Year 2020",data:[229,213,196,212,237]},{label:"Year 2023",data:[240,237,230,223,231]},{label:"Year 2026",data:[235,270,239,255,242]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-stacked"]],standalone:!1,decls:6,vars:9,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],["p-title","Average Temperature by Region",1,"po-lg-6",3,"p-height","p-options","p-categories","p-series"],["p-title","Energy Consumption by Region",1,"po-lg-6",3,"p-type","p-height","p-options","p-categories","p-series"]],template:function(d,i){d&1&&(n(0,"po-container")(1,"div",0),e(2,"Energy and Climate Analysis"),t(),n(3,"div",1),o(4,"po-chart",2)(5,"po-chart",3),t()()),d&2&&(p(4),c("p-height",500)("p-options",i.optionsColumn)("p-categories",i.categoriesColumn)("p-series",i.seriesColumn),p(),c("p-type",i.typeBar)("p-height",500)("p-options",i.optionsBar)("p-categories",i.categoriesBar)("p-series",i.seriesBar))},dependencies:[V,q],encapsulation:2})}return r})();var st=r=>({"docs-sample-code-tabs":r}),Pe=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-stacked-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Stacked"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-stacked/sample-po-chart-stacked.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-font-title po-mb-3">Energy and Climate Analysis</div>
  <div class="po-row">
    <po-chart
      class="po-lg-6"
      p-title="Average Temperature by Region"
      [p-height]="500"
      [p-options]="optionsColumn"
      [p-categories]="categoriesColumn"
      [p-series]="seriesColumn"
    >
    </po-chart>

    <po-chart
      class="po-lg-6"
      p-title="Energy Consumption by Region"
      [p-type]="typeBar"
      [p-height]="500"
      [p-options]="optionsBar"
      [p-categories]="categoriesBar"
      [p-series]="seriesBar"
    >
    </po-chart>
  </div>
</po-container>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-stacked/sample-po-chart-stacked.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-stacked',
  templateUrl: './sample-po-chart-stacked.component.html',
  standalone: false
})
export class SamplePoChartStackedComponent {
  typeBar = PoChartType.Bar;

  optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      gridLines: 7
    }
  };

  categoriesColumn: Array<string> = ['North Region', 'Central Region', 'South Region'];

  seriesColumn: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [51, 40, 42], stackGroupName: 'group1' },
    { label: 'Year 2017', data: [53, 52, 18] },
    { label: 'Year 2020', data: [55, 21, -17], stackGroupName: 'group1' },
    { label: 'Year 2023', data: [35, 27, 23], stackGroupName: 'group2' },
    { label: 'Year 2026', data: [45, 34, 17], stackGroupName: 'group2' },
    { label: 'Year 2029', data: [23, 63, 56], stackGroupName: 'group1' }
  ];

  optionsBar: PoChartOptions = {
    stacked: true
  };

  categoriesBar: Array<string> = [
    'North Region',
    'Central Region',
    'South Region',
    'Southeast Region',
    'Northeast Region'
  ];

  seriesBar: Array<PoChartSerie> = [
    { label: 'Year 2014', data: [199, 340, 247, 236, 222] },
    { label: 'Year 2017', data: [221, 252, 225, 241, 225] },
    { label: 'Year 2020', data: [229, 213, 196, 212, 237] },
    { label: 'Year 2023', data: [240, 237, 230, 223, 231] },
    { label: 'Year 2026', data: [235, 270, 239, 255, 242] }
  ];
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-stacked"),t(),o(23,"hr")),d&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel),p(),c("ngClass",y(4,st,i.hideSampleCodeTabs)))},dependencies:[D,M,w,L,_e],encapsulation:2})}return r})();var Te=(()=>{class r{type=x.Gauge;optionsSingle={descriptionChart:"25% of turnover"};optionsRange={descriptionChart:"The sales increased in 82% in the first bimester of 2020",showFromToLegend:!0};turnover=[{data:25,label:"Low rate"}];salesRanges=[{from:0,to:50,label:"Sales reduction"},{from:50,to:75,label:"Average sales"},{from:75,to:100,label:"Sales soared"}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-summary"]],standalone:!1,decls:8,vars:7,consts:[[1,"po-font-title","po-mb-3"],[1,"po-row"],[1,"po-lg-6"],["p-title","Employee turnover rate","p-value","25",3,"p-type","p-options","p-series"],["p-title","Sales performance",3,"p-type","p-options","p-value-gauge-multiple","p-series"]],template:function(d,i){d&1&&(n(0,"po-container")(1,"div",0),e(2,"Sales Performance"),t(),n(3,"div",1)(4,"div",2),o(5,"po-chart",3),t(),n(6,"div",2),o(7,"po-chart",4),t()()()),d&2&&(p(5),c("p-type",i.type)("p-options",i.optionsSingle)("p-series",i.turnover),p(2),c("p-type",i.type)("p-options",i.optionsRange)("p-value-gauge-multiple",50)("p-series",i.salesRanges))},dependencies:[V,q],encapsulation:2})}return r})();var ut=r=>({"docs-sample-code-tabs":r}),we=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-summary-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Summary"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-summary/sample-po-chart-summary.component.html"),t(),n(13,"pre",7),e(14,`<po-container>
  <div class="po-font-title po-mb-3">Sales Performance</div>
  <div class="po-row">
    <div class="po-lg-6">
      <po-chart
        p-title="Employee turnover rate"
        p-value="25"
        [p-type]="type"
        [p-options]="optionsSingle"
        [p-series]="turnover"
      ></po-chart>
    </div>
    <div class="po-lg-6">
      <po-chart
        p-title="Sales performance"
        [p-type]="type"
        [p-options]="optionsRange"
        [p-value-gauge-multiple]="50"
        [p-series]="salesRanges"
      ></po-chart>
    </div>
  </div>
</po-container>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-summary/sample-po-chart-summary.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-summary',
  templateUrl: './sample-po-chart-summary.component.html',
  standalone: false
})
export class SamplePoChartSummaryComponent {
  type = PoChartType.Gauge;
  optionsSingle: PoChartOptions = {
    descriptionChart: '25% of turnover'
  };

  optionsRange: PoChartOptions = {
    descriptionChart: 'The sales increased in 82% in the first bimester of 2020',
    showFromToLegend: true
  };

  turnover: Array<PoChartSerie> = [{ data: 25, label: 'Low rate' }];

  salesRanges: Array<PoChartSerie> = [
    { from: 0, to: 50, label: 'Sales reduction' },
    { from: 50, to: 75, label: 'Average sales' },
    { from: 75, to: 100, label: 'Sales soared' }
  ];
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-summary"),t(),o(23,"hr")),d&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel),p(),c("ngClass",y(4,ut,i.hideSampleCodeTabs)))},dependencies:[D,M,w,L,Te],encapsulation:2})}return r})();var Le=(()=>{class r{participationByCountryInWorldExportsType=x.Line;options={axis:{minRange:0,maxRange:40,gridLines:5}};dataLabel={fixed:!0};categories=["2010","2011","2012","2013","2014","2015"];participationByCountryInWorldExports=[{label:"Brazil",data:[35,32,27,29,33,33]},{label:"Vietnam",data:[15,17,18,19,22,18]},{label:"Colombia",data:[8,7,6,9,10,11]}];static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-world-exports"]],standalone:!1,decls:2,vars:5,consts:[[1,"po-row"],["p-title","Participation by country in world exports - %",1,"po-md-12",3,"p-options","p-categories","p-series","p-type","p-data-label"]],template:function(d,i){d&1&&(n(0,"div",0),o(1,"po-chart",1),t()),d&2&&(p(),c("p-options",i.options)("p-categories",i.categories)("p-series",i.participationByCountryInWorldExports)("p-type",i.participationByCountryInWorldExportsType)("p-data-label",i.dataLabel))},dependencies:[V],encapsulation:2})}return r})();var Et=r=>({"docs-sample-code-tabs":r}),Me=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-world-exports-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - World Exports"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-chart
    class="po-md-12"
    p-title="Participation by country in world exports - %"
    [p-options]="options"
    [p-categories]="categories"
    [p-series]="participationByCountryInWorldExports"
    [p-type]="participationByCountryInWorldExportsType"
    [p-data-label]="dataLabel"
  >
  </po-chart>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-world-exports/sample-po-chart-world-exports.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';

import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'sample-po-chart-world-exports',
  templateUrl: './sample-po-chart-world-exports.component.html',
  standalone: false
})
export class SamplePoChartWorldExportsComponent {
  participationByCountryInWorldExportsType: PoChartType = PoChartType.Line;
  options: PoChartOptions = {
    axis: {
      minRange: 0,
      maxRange: 40,
      gridLines: 5
    }
  };
  dataLabel = { fixed: true };

  categories: Array<string> = ['2010', '2011', '2012', '2013', '2014', '2015'];

  participationByCountryInWorldExports: Array<PoChartSerie> = [
    { label: 'Brazil', data: [35, 32, 27, 29, 33, 33] },
    { label: 'Vietnam', data: [15, 17, 18, 19, 22, 18] },
    { label: 'Colombia', data: [8, 7, 6, 9, 10, 11] }
  ];
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-world-exports"),t(),o(23,"hr")),d&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel),p(),c("ngClass",y(4,Et,i.hideSampleCodeTabs)))},dependencies:[D,M,w,L,Le],encapsulation:2})}return r})();var ke=(()=>{class r{radarConfig={indicator:[{name:"Frontend Development",max:100},{name:"Backend Development",max:100},{name:"Database Design",max:100},{name:"Cloud & DevOps",max:100},{name:"Testing & Quality",max:100},{name:"System Architecture",max:100}],splitArea:!0,shape:"circle"};radarConfigMovies={indicator:[{name:"Storytelling",max:100},{name:"Characters",max:100},{name:"Visual Effects",max:100},{name:"Soundtrack",max:100},{name:"Pacing",max:100},{name:"Rewatchability",max:100}],splitArea:!0};type=x.Radar;series=[{label:"Team Alpha",data:[82,50,78,70,88,81]},{label:"Team Beta",data:[65,83,72,89,60,74]},{label:"Team Delta",data:[45,21,33,65,24,58]},{label:"Team Omega",data:[60,49,19,58,94,59]}];seriesMovies=[{label:"Sci-Fi",data:[60,53,45,58,42,55]},{label:"Fantasy",data:[53,80,66,71,75,88]},{label:"Drama",data:[92,31,98,60,88,72]},{label:"Thriller",data:[44,56,75,84,90,80]}];radarOptions={areaStyle:!0};static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-technology-skill"]],standalone:!1,decls:3,vars:6,consts:[[1,"po-row"],["p-title","Technology Skill Assessment",1,"po-md-6",3,"p-categories","p-type","p-series"],["p-title","Genre Popularity","p-type","radar",1,"po-md-6",3,"p-categories","p-series","p-options"]],template:function(d,i){d&1&&(n(0,"div",0),o(1,"po-chart",1)(2,"po-chart",2),t()),d&2&&(p(),c("p-categories",i.radarConfig)("p-type",i.type)("p-series",i.series),p(),c("p-categories",i.radarConfigMovies)("p-series",i.seriesMovies)("p-options",i.radarOptions))},dependencies:[V],encapsulation:2})}return r})();var xt=r=>({"docs-sample-code-tabs":r}),De=(()=>{class r{hideSampleCodeTabs=!0;sampleCodeButtonLabel="Talk is cheap, show me the code!";sampleCodeButtonIcon="an an-plus";toggleSampleCodeTabs(){this.hideSampleCodeTabs=!this.hideSampleCodeTabs,this.sampleCodeButtonLabel=this.hideSampleCodeTabs?"Talk is cheap, show me the code!":"Okay, hide the code",this.sampleCodeButtonIcon=this.hideSampleCodeTabs?"an an-plus":"an an-minus"}static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-technology-skill-view"]],standalone:!1,decls:24,vars:6,consts:[[1,"sample-blockquote"],[1,"sample-title","po-font-text-large-bold"],[1,"show-me-the-code",3,"click"],[3,"ngClass"],["p-size","2"],["p-label","HTML","p-active",""],[1,"doc-label-path"],["appCodeHighlight","",1,"html"],["p-label","TS"],["appCodeHighlight","",1,"typescript"],[1,"docs-sample-container"]],template:function(d,i){d&1&&(o(0,"br"),n(1,"blockquote",0)(2,"label",1),e(3,"PO Chart - Radar"),t(),n(4,"a",2),u("click",function(){return i.toggleSampleCodeTabs()}),o(5,"span"),e(6),t()(),n(7,"div",3)(8,"po-tabs",4)(9,"po-tab",5)(10,"div")(11,"label",6),e(12,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.html"),t(),n(13,"pre",7),e(14,`<div class="po-row">
  <po-chart
    class="po-md-6"
    p-title="Technology Skill Assessment"
    [p-categories]="radarConfig"
    [p-type]="type"
    [p-series]="series"
  >
  </po-chart>

  <po-chart
    class="po-md-6"
    p-title="Genre Popularity"
    p-type="radar"
    [p-categories]="radarConfigMovies"
    [p-series]="seriesMovies"
    [p-options]="radarOptions"
  >
  </po-chart>
</div>
`),t()()(),n(15,"po-tab",8)(16,"div")(17,"label",6),e(18,"sample-po-chart-technology-skill/sample-po-chart-technology-skill.component.ts"),t(),n(19,"pre",9),e(20,`import { Component } from '@angular/core';
import { PoChartOptions, PoChartType } from '@po-ui/ng-components';
import { PoChartRadarOptions } from '@po-ui/ng-components/lib/components/po-chart/interfaces/po-chart-radar-options.interface';

@Component({
  selector: 'sample-po-chart-technology-skill',
  templateUrl: './sample-po-chart-technology-skill.component.html',
  standalone: false
})
export class SamplePoChartTechnologySkillComponent {
  radarConfig: PoChartRadarOptions = {
    indicator: [
      { name: 'Frontend Development', max: 100 },
      { name: 'Backend Development', max: 100 },
      { name: 'Database Design', max: 100 },
      { name: 'Cloud & DevOps', max: 100 },
      { name: 'Testing & Quality', max: 100 },
      { name: 'System Architecture', max: 100 }
    ],
    splitArea: true,
    shape: 'circle'
  };

  radarConfigMovies: PoChartRadarOptions = {
    indicator: [
      { name: 'Storytelling', max: 100 },
      { name: 'Characters', max: 100 },
      { name: 'Visual Effects', max: 100 },
      { name: 'Soundtrack', max: 100 },
      { name: 'Pacing', max: 100 },
      { name: 'Rewatchability', max: 100 }
    ],
    splitArea: true
  };

  type = PoChartType.Radar;

  series = [
    {
      label: 'Team Alpha',
      data: [82, 50, 78, 70, 88, 81]
    },
    {
      label: 'Team Beta',
      data: [65, 83, 72, 89, 60, 74]
    },
    {
      label: 'Team Delta',
      data: [45, 21, 33, 65, 24, 58]
    },
    {
      label: 'Team Omega',
      data: [60, 49, 19, 58, 94, 59]
    }
  ];

  seriesMovies = [
    {
      label: 'Sci-Fi',
      data: [60, 53, 45, 58, 42, 55]
    },
    {
      label: 'Fantasy',
      data: [53, 80, 66, 71, 75, 88]
    },
    {
      label: 'Drama',
      data: [92, 31, 98, 60, 88, 72]
    },
    {
      label: 'Thriller',
      data: [44, 56, 75, 84, 90, 80]
    }
  ];

  radarOptions: PoChartOptions = {
    areaStyle: true
  };
}
`),t()()()()(),n(21,"div",10),o(22,"sample-po-chart-technology-skill"),t(),o(23,"hr")),d&2&&(p(5),T("po-icon "+i.sampleCodeButtonIcon),p(),k(" ",i.sampleCodeButtonLabel),p(),c("ngClass",y(4,xt,i.hideSampleCodeTabs)))},dependencies:[D,M,w,L,ke],encapsulation:2})}return r})();var Ve=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275cmp=C({type:r,selectors:[["sample-po-chart-doc"]],standalone:!1,decls:2833,vars:0,consts:[[1,"docs-api"],[1,"docs-api-module-import"],[1,"docs-api-class-description"],[1,"docs-api-h3"],[1,"docs-api-class-name"],[1,"doc-code"],["href","/guides/guide-charts"],["href","https://po-ui.io/guides/theme-customization"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","PoChartRadarOptions"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Array<PoPopupAction>"],["pan","",1,"docs-api-property-type","PoChartDataLabel"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","PoChartLiterals"],["href","/documentation/po-i18n"],["pan","",1,"docs-api-property-type","PoChartOptions"],["pan","",1,"docs-api-property-type","Array<PoChartSerie>"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","PoChartType"],[1,"docs-api-h4","docs-api-class-name"],["pan","",1,"docs-api-property-type","PoChartLabelFormat"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","PoChartAxisOptions"],["pan","",1,"docs-api-property-type","PoChartHeaderOptions"],["pan","",1,"docs-api-property-type","'left'"],["pan","",1,"docs-api-property-type","'center'"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'plain'"],["pan","",1,"docs-api-property-type","'scroll'"],["pan","",1,"docs-api-property-type","'top'"],["pan","",1,"docs-api-property-type","'bottom'"],["pan","",1,"docs-api-property-type","'canvas'"],["pan","",1,"docs-api-property-type","'svg'"],["pan","",1,"docs-api-property-type","Array<PoChartIndicatorOptions>"],["pan","",1,"docs-api-property-type","'polygon'"],["pan","",1,"docs-api-property-type","'circle'"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","Array<number>"],["pan","",1,"docs-api-property-type","((params:","any)","=>","string)"],[1,"language-ts"],["href","https://angular.io/api/common/DecimalPipe"],["href","https://angular.dev/api/core/DEFAULT_CURRENCY_CODE"],["href","https://angular.dev/api/core/LOCALE_ID"]],template:function(d,i){d&1&&(n(0,"div",0)(1,"p",1)(2,"code"),e(3,"import { PoChartModule } from '@po-ui/ng-components';"),t()(),n(4,"div",2)(5,"p"),e(6,"M\xF3dulo do componente "),n(7,"code"),e(8,"po-chart"),t(),e(9,"."),t()(),n(10,"h3",3),e(11,"Componente"),t(),n(12,"h4",4)(13,"code",5),e(14,"PoChartComponent"),t()(),n(15,"div",2)(16,"p"),e(17,"O "),n(18,"code"),e(19,"po-chart"),t(),e(20,` \xE9 um componente para renderiza\xE7\xE3o de dados atrav\xE9s de gr\xE1ficos, com isso facilitando a compreens\xE3o e tornando a
visualiza\xE7\xE3o destes dados mais agrad\xE1vel.`),t(),n(21,"p"),e(22,"Atrav\xE9s de suas principais propriedades \xE9 poss\xEDvel definir atributos, tais como tipo de gr\xE1fico, altura, t\xEDtulo, cores customizadas, op\xE7\xF5es para os eixos, entre outros."),t(),n(23,"p"),e(24,"O componente permite utilizar em conjunto s\xE9ries do tipo linha e coluna."),t(),n(25,"p"),e(26,`Al\xE9m disso, tamb\xE9m \xE9 poss\xEDvel definir uma a\xE7\xE3o que ser\xE1 executada ao clicar em determinado elemento do gr\xE1fico
e outra que ser\xE1 executada ao passar o `),n(27,"em"),e(28,"mouse"),t(),e(29," sobre o elemento."),t(),n(30,"h4"),e(31,"Guia de uso para Gr\xE1ficos"),t(),n(32,"blockquote")(33,"p"),e(34,"Veja nosso "),n(35,"a",6),e(36,"guia de uso para gr\xE1ficos"),t(),e(37,` para auxiliar na constru\xE7\xE3o do seu gr\xE1fico,
informando em qual caso utilizar, o que devemos evitar e boas pr\xE1ticas relacionada a cores.`),t()(),n(38,"h4"),e(39,"Tokens customiz\xE1veis"),t(),n(40,"p"),e(41,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (CSS):"),t(),n(42,"blockquote")(43,"p"),e(44,"Para maiores informa\xE7\xF5es, acesse o guia "),n(45,"a",7),e(46,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(47,"."),t()(),n(48,"table")(49,"thead")(50,"tr")(51,"th"),e(52,"Propriedade"),t(),n(53,"th"),e(54,"Descri\xE7\xE3o"),t(),n(55,"th"),e(56,"Valor Padr\xE3o"),t()()(),n(57,"tbody")(58,"tr")(59,"td")(60,"strong"),e(61,"Chart (po-chart)"),t()(),o(62,"td")(63,"td"),t(),n(64,"tr")(65,"td")(66,"code"),e(67,"--background-color-grid"),t()(),n(68,"td"),e(69,"Cor de background dos gr\xE1ficos"),t(),n(70,"td")(71,"code"),e(72,"var(--color-neutral-light-00)"),t()()(),n(73,"tr")(74,"td")(75,"code"),e(76,"--color-description-chart"),t()(),n(77,"td"),e(78,"Cor da descri\xE7\xE3o dos gr\xE1ficos"),t(),n(79,"td")(80,"code"),e(81,"var(--color-neutral-dark-70)"),t()()(),n(82,"tr")(83,"td")(84,"code"),e(85,"--font-family-description-chart"),t()(),n(86,"td"),e(87,"Fonte da descri\xE7\xE3o dos gr\xE1ficos"),t(),n(88,"td")(89,"code"),e(90,"var(--font-family-theme)"),t()()(),n(91,"tr")(92,"td")(93,"code"),e(94,"--font-size-description-chart"),t()(),n(95,"td"),e(96,"Tamanho da fonte da descri\xE7\xE3o dos gr\xE1ficos"),t(),n(97,"td")(98,"code"),e(99,"var(--font-size-sm)"),t()()(),n(100,"tr")(101,"td")(102,"code"),e(103,"--font-weight-description-chart"),t()(),n(104,"td"),e(105,"Peso da fonte da descri\xE7\xE3o dos gr\xE1ficos"),t(),n(106,"td")(107,"code"),e(108,"var(--font-weight-normal)"),t()()(),n(109,"tr")(110,"td")(111,"strong"),e(112,"Header (po-chart .po-chart-header )"),t()(),o(113,"td")(114,"td"),t(),n(115,"tr")(116,"td")(117,"code"),e(118,"--background-color"),t()(),n(119,"td"),e(120,"Cor de background do cabe\xE7alho"),t(),n(121,"td")(122,"code"),e(123,"var(--color-neutral-light-00)"),t()()(),n(124,"tr")(125,"td")(126,"code"),e(127,"--color"),t()(),n(128,"td"),e(129,"Cor da fonte do cabe\xE7alho"),t(),n(130,"td")(131,"code"),e(132,"var(--color-neutral-dark-70)"),t()()(),n(133,"tr")(134,"td")(135,"code"),e(136,"--font-family"),t()(),n(137,"td"),e(138,"Fam\xEDlia tipogr\xE1fica usada"),t(),n(139,"td")(140,"code"),e(141,"var(--font-family-theme)"),t()()(),n(142,"tr")(143,"td")(144,"code"),e(145,"--font-size-title"),t()(),n(146,"td"),e(147,"Tamanho da fonte"),t(),n(148,"td")(149,"code"),e(150,"var(--font-size-default)"),t()()(),n(151,"tr")(152,"td")(153,"code"),e(154,"--font-size-icons"),t()(),n(155,"td"),e(156,"Tamanho dos \xEDcones"),t(),n(157,"td")(158,"code"),e(159,"var(--font-size-md)"),t()()(),n(160,"tr")(161,"td")(162,"code"),e(163,"--font-weight"),t()(),n(164,"td"),e(165,"Peso da fonte"),t(),n(166,"td")(167,"code"),e(168,"var(--font-weight-bold)"),t()()(),n(169,"tr")(170,"td")(171,"strong"),e(172,"Chart (po-chart .po-chart)"),t()(),o(173,"td")(174,"td"),t(),n(175,"tr")(176,"td")(177,"code"),e(178,"--color-grid"),t()(),n(179,"td"),e(180,"Cor da linha dos gr\xE1ficos que possuem eixo"),t(),n(181,"td")(182,"code"),e(183,"var(--color-neutral-light-20)"),t()()(),n(184,"tr")(185,"td")(186,"code"),e(187,"--font-family-grid"),t()(),n(188,"td"),e(189,"Fam\xEDlia tipogr\xE1fica usada nos valores dos eixos"),t(),n(190,"td")(191,"code"),e(192,"var(--font-family-theme)"),t()()(),n(193,"tr")(194,"td")(195,"code"),e(196,"--font-size-grid"),t()(),n(197,"td"),e(198,"Tamanho da fonte usada nos valores dos eixos"),t(),n(199,"td")(200,"code"),e(201,"var(--font-size-xs)"),t()()(),n(202,"tr")(203,"td")(204,"code"),e(205,"--font-weight-grid"),t()(),n(206,"td"),e(207,"Peso da fonte usada nos valores dos eixos"),t(),n(208,"td")(209,"code"),e(210,"var(--font-weight-normal)"),t()()(),n(211,"tr")(212,"td")(213,"code"),e(214,"--color-legend"),t()(),n(215,"td"),e(216,"Cor da fonte da legenda"),t(),n(217,"td")(218,"code"),e(219,"var(--color-neutral-dark-70)"),t()()(),n(220,"tr")(221,"td")(222,"code"),e(223,"--color-legend-scroll-icon-active"),t()(),n(224,"td"),e(225,"Cor do \xEDcone de scroll da legenda no estado ativo, pro tipo "),n(226,"code"),e(227,"scroll"),t()(),n(228,"td")(229,"code"),e(230,"var(--color-action-default)"),t()()(),n(231,"tr")(232,"td")(233,"code"),e(234,"--color-legend-scroll-icon-inactive"),t()(),n(235,"td"),e(236,"Cor do \xEDcone de scroll da legenda no estado inativo, pro tipo "),n(237,"code"),e(238,"scroll"),t()(),n(239,"td")(240,"code"),e(241,"var(--color-action-disabled)"),t()()(),n(242,"tr")(243,"td")(244,"code"),e(245,"--border-radius-bar"),t()(),n(246,"td"),e(247,"Tamanho da borda nos graficos "),n(248,"code"),e(249,"Bar"),t(),e(250," e "),n(251,"code"),e(252,"Column"),t()(),n(253,"td")(254,"code"),e(255,"var(--border-radius-none)"),t()()(),n(256,"tr")(257,"td")(258,"code"),e(259,"--border-color"),t()(),n(260,"td"),e(261,"Cor da borda do gr\xE1fico nos Gr\xE1ficos "),n(262,"code"),e(263,"Donut"),t(),e(264," e "),n(265,"code"),e(266,"Pie"),t()(),n(267,"td")(268,"code"),e(269,"var(--color-neutral-light-00)"),t()()(),n(270,"tr")(271,"td")(272,"code"),e(273,"--color-hightlight-value"),t()(),n(274,"td"),e(275,"Cor do valor de destaque nos Gr\xE1ficos "),n(276,"code"),e(277,"Donut"),t(),e(278," e "),n(279,"code"),e(280,"Gauge"),t()(),n(281,"td")(282,"code"),e(283,"var(--color-neutral-dark-70)"),t()()(),n(284,"tr")(285,"td")(286,"code"),e(287,"--font-family-hightlight-value"),t()(),n(288,"td"),e(289,"Fam\xEDlia tipogr\xE1fica do valor de destaque nos Gr\xE1ficos "),n(290,"code"),e(291,"Donut"),t(),e(292," e "),n(293,"code"),e(294,"Gauge"),t()(),n(295,"td")(296,"code"),e(297,"var(--font-family-theme)"),t()()(),n(298,"tr")(299,"td")(300,"code"),e(301,"--font-weight-hightlight-value"),t()(),n(302,"td"),e(303,"Peso da fonte do valor de destaque nos Gr\xE1ficos "),n(304,"code"),e(305,"Donut"),t(),e(306," e "),n(307,"code"),e(308,"Gauge"),t()(),n(309,"td")(310,"code"),e(311,"var(--font-weight-bold)"),t()()(),n(312,"tr")(313,"td")(314,"code"),e(315,"--color-base-gauge"),t()(),n(316,"td"),e(317,"Cor da base do gr\xE1fico "),n(318,"code"),e(319,"Gauge"),t()(),n(320,"td")(321,"code"),e(322,"var(--color-neutral-light-20)"),t()()(),n(323,"tr")(324,"td")(325,"code"),e(326,"--color-gauge-pointer-color"),t()(),n(327,"td"),e(328,"Cor do ponteiro do gr\xE1fico "),n(329,"code"),e(330,"Gauge"),t()(),n(331,"td")(332,"code"),e(333,"var(--color-neutral-dark-70)"),t()()(),n(334,"tr")(335,"td")(336,"code"),e(337,"--color-chart-line-point-fill"),t()(),n(338,"td"),e(339,"Cor de dentro do c\xEDrculo dos gr\xE1ficos "),n(340,"code"),e(341,"Line"),t(),e(342," e "),n(343,"code"),e(344,"Area"),t()(),n(345,"td")(346,"code"),e(347,"var(--color-neutral-light-00)"),t()()(),n(348,"tr")(349,"td")(350,"code"),e(351,"--border-color-radar"),t()(),n(352,"td"),e(353,"Cor do eixo da grid do gr\xE1fico "),n(354,"code"),e(355,"Radar"),t()(),n(356,"td")(357,"code"),e(358,"var(--color-neutral-light-30)"),t()()(),n(359,"tr")(360,"td")(361,"code"),e(362,"--color-background-zebra"),t()(),n(363,"td"),e(364,"Cor das \xE1reas alternadas (efeito zebrado) da grid do gr\xE1fico "),n(365,"code"),e(366,"Radar"),t()(),n(367,"td")(368,"code"),e(369,"var(--color-neutral-light-10)"),t()()(),n(370,"tr")(371,"td")(372,"code"),e(373,"--color-background-line"),t()(),n(374,"td"),e(375,"Cor das \xE1reas entre as faixas zebradas da grade do "),n(376,"code"),e(377,"Radar"),t()(),n(378,"td")(379,"code"),e(380,"none"),t()()(),n(381,"tr")(382,"td")(383,"strong"),e(384,"Wrapper (.po-chart-container-gauge)"),t()(),o(385,"td")(386,"td"),t(),n(387,"tr")(388,"td")(389,"code"),e(390,"--background-color-container-gauge"),t()(),n(391,"td"),e(392,"Cor de background do container do gauge"),t(),n(393,"td")(394,"code"),e(395,"var(--color-neutral-light-00)"),t()()()()()(),n(396,"div",8)(397,"h4",9),e(398,"Seletor"),t(),n(399,"pre",10),e(400,`<po-chart
    p-categories="Array<string> | PoChartRadarOptions"
    p-custom-actions="Array<PoPopupAction>"
    p-data-label="PoChartDataLabel"
    p-height="number"
    p-literals="PoChartLiterals"
    p-options="PoChartOptions"
    p-series="Array<PoChartSerie>"
    (p-series-click)="EventEmitter"
    (p-series-hover)="EventEmitter"
    p-title="string"
    p-type="PoChartType"
    p-value-gauge-multiple="number" >
</po-chart>
`),t()(),n(401,"h4",11),e(402,"Propriedades"),t(),n(403,"table",12)(404,"tr",13)(405,"th",14),e(406,"Nome"),t(),n(407,"th",14),e(408,"Tipo"),t(),n(409,"th",14),e(410,"Padr\xE3o"),t(),n(411,"th",14),e(412,"Descri\xE7\xE3o"),t()(),n(413,"tr",15)(414,"td",16)(415,"div",17)(416,"span",18),e(417," p-categories"),o(418,"br"),t()()(),n(419,"td",19)(420,"code",20),e(421,"Array<string> "),t(),n(422,"code",21),e(423," PoChartRadarOptions"),t()(),n(424,"td",22),e(425,"-"),t(),n(426,"td",23)(427,"em")(428,"strong"),e(429,"(opcional)"),t()(),n(430,"p"),e(431,"Define os valores utilizados na constru\xE7\xE3o das categorias do gr\xE1fico."),t(),n(432,"p"),e(433,"Para gr\xE1ficos dos tipos "),n(434,"em"),e(435,"bar"),t(),e(436,", "),n(437,"em"),e(438,"area"),t(),e(439,", "),n(440,"em"),e(441,"column"),t(),e(442," e "),n(443,"em"),e(444,"line"),t(),e(445,", representa os nomes das categorias exibidas no eixo."),t(),n(446,"p"),e(447,"Para gr\xE1ficos do tipo "),n(448,"em"),e(449,"radar"),t(),e(450,`, representa a configura\xE7\xE3o dos indicadores, formato (shape), \xE1reas de divis\xE3o (splitArea)
e demais op\xE7\xF5es espec\xEDficas do gr\xE1fico `),n(451,"code"),e(452,"Radar"),t(),e(453,"."),t(),n(454,"blockquote")(455,"p"),e(456,"Caso nenhum valor seja informado, ser\xE1 utilizado um h\xEDfen como categoria correspondente para cada s\xE9rie."),t()(),n(457,"blockquote")(458,"p"),e(459,"Gr\xE1ficos do tipo bar dimensionam sua \xE1rea considerando a largura do maior texto da categoria, sendo recomend\xE1vel utilizar r\xF3tulos curtos para facilitar a leitura."),t()()()(),n(460,"tr",15)(461,"td",16)(462,"div",17)(463,"span",18),e(464," p-custom-actions"),o(465,"br"),t()()(),n(466,"td",19)(467,"code",24),e(468,"Array<PoPopupAction>"),t()(),n(469,"td",22),e(470,"-"),t(),n(471,"td",23)(472,"em")(473,"strong"),e(474,"(opcional)"),t()(),n(475,"p"),e(476,"Essa propriedade permite que o desenvolvedor adicione a\xE7\xF5es customizadas no popup do header, oferecendo mais flexibilidade e controle sobre as intera\xE7\xF5es do componente."),t()()(),n(477,"tr",15)(478,"td",16)(479,"div",17)(480,"span",18),e(481," p-data-label"),o(482,"br"),t()()(),n(483,"td",19)(484,"code",25),e(485,"PoChartDataLabel"),t()(),n(486,"td",22),e(487,"-"),t(),n(488,"td",23)(489,"em")(490,"strong"),e(491,"(opcional)"),t()(),n(492,"p"),e(493,"Permite configurar as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no gr\xE1fico."),t(),n(494,"p"),e(495,"Essa configura\xE7\xE3o possibilita fixar os valores das s\xE9ries diretamente no gr\xE1fico, alterando o comportamento visual:"),t(),n(496,"ul")(497,"li"),e(498,"Os valores das s\xE9ries permanecem vis\xEDveis, sem a necessidade de hover."),t(),n(499,"li"),e(500,"O "),n(501,"em"),e(502,"tooltip"),t(),e(503," n\xE3o ser\xE1 exibido."),t(),n(504,"li"),e(505,"Os marcadores ("),n(506,"em"),e(507,"bullets"),t(),e(508,") ter\xE3o seu estilo ajustado."),t(),n(509,"li"),e(510,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),t()(),n(511,"blockquote")(512,"p"),e(513,"Dispon\xEDvel para gr\xE1ficos do tipo "),n(514,"code"),e(515,"line"),t(),e(516," e "),n(517,"code"),e(518,"radar"),t(),e(519,"."),t()(),n(520,"h4"),e(521,"Exemplo de utiliza\xE7\xE3o:"),t(),n(522,"pre")(523,"code",26),e(524,`dataLabel: PoChartDataLabel = {
  fixed: true,
};
`),t()()()(),n(525,"tr",15)(526,"td",16)(527,"div",17)(528,"span",18),e(529," p-height"),o(530,"br"),t()()(),n(531,"td",19)(532,"code",27),e(533,"number"),t()(),n(534,"td",22)(535,"p")(536,"code"),e(537,"400"),t()()(),n(538,"td",23)(539,"em")(540,"strong"),e(541,"(opcional)"),t()(),n(542,"p"),e(543,"Define a altura do gr\xE1fico em px."),t(),n(544,"blockquote")(545,"p"),e(546,"No caso do tipo "),n(547,"code"),e(548,"Gauge"),t(),e(549,", o valor padr\xE3o \xE9 "),n(550,"code"),e(551,"300"),t(),e(552," e esse \xE9 seu valor minimo aceito. Nos outros tipos, o valor m\xEDnimo aceito nesta propriedade \xE9 200."),t()()()(),n(553,"tr",15)(554,"td",16)(555,"div",17)(556,"span",18),e(557," p-literals"),o(558,"br"),t()()(),n(559,"td",19)(560,"code",28),e(561,"PoChartLiterals"),t()(),n(562,"td",22),e(563,"-"),t(),n(564,"td",23)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),n(568,"p"),e(569,"Objeto com as literais usadas no "),n(570,"code"),e(571,"po-chart"),t(),e(572,"."),t(),n(573,"p"),e(574,"Para utilizar basta passar a literal que deseja customizar:"),t(),n(575,"pre")(576,"code"),e(577,`const customLiterals: PoChartLiterals = {
  downloadCSV: 'Obter CSV',
};
`),t()(),n(578,"p"),e(579,"E para carregar a literal customizada, basta apenas passar o objeto para o componente."),t(),n(580,"pre")(581,"code"),e(582,`<po-chart
  [p-literals]="customLiterals">
</po-chart>
`),t()(),n(583,"blockquote")(584,"p"),e(585,`O objeto padr\xE3o de literais ser\xE1 traduzido de acordo com o idioma do
`),n(586,"a",29)(587,"code"),e(588,"PoI18nService"),t()(),e(589," ou do browser."),t()()()(),n(590,"tr",15)(591,"td",16)(592,"div",17)(593,"span",18),e(594," p-options"),o(595,"br"),t()()(),n(596,"td",19)(597,"code",30),e(598,"PoChartOptions"),t()(),n(599,"td",22),e(600,"-"),t(),n(601,"td",23)(602,"em")(603,"strong"),e(604,"(opcional)"),t()(),n(605,"p"),e(606,"Objeto com as configura\xE7\xF5es usadas no "),n(607,"code"),e(608,"po-chart"),t(),e(609,"."),t(),n(610,"p"),e(611,`\xC9 poss\xEDvel, por exemplo, definir as configura\xE7\xF5es de exibi\xE7\xE3o das legendas,
configurar os eixos(`),n(612,"em"),e(613,"axis"),t(),e(614,") para os gr\xE1ficos dos tipos "),n(615,"code"),e(616,"area"),t(),e(617,", "),n(618,"code"),e(619,"line"),t(),e(620,", "),n(621,"code"),e(622,"column"),t(),e(623,", "),n(624,"code"),e(625,"bar"),t(),e(626," e "),n(627,"code"),e(628,"radar"),t(),e(629," da seguinte forma:"),t(),n(630,"pre")(631,"code"),e(632,`chartOptions: PoChartOptions = {
  legend: true,
  axis: {
    minRange: 0,
    maxRange: 100,
    gridLines: 5,
  },
};
`),t()()()(),n(633,"tr",15)(634,"td",16)(635,"div",17)(636,"span",18),e(637," p-series"),o(638,"br"),t()()(),n(639,"td",19)(640,"code",31),e(641,"Array<PoChartSerie>"),t()(),n(642,"td",22),e(643,"-"),t(),n(644,"td",23)(645,"p"),e(646,"Define os elementos do gr\xE1fico que ser\xE3o criados dinamicamente."),t()()(),n(647,"tr",15)(648,"td",16)(649,"div",32)(650,"span",33),e(651," (p-series-click)"),o(652,"br"),t()()(),n(653,"td",19)(654,"code",34),e(655,"EventEmitter"),t()(),n(656,"td",22),e(657,"-"),t(),n(658,"td",23)(659,"em")(660,"strong"),e(661,"(opcional)"),t()(),n(662,"p"),e(663,"Evento executado quando o usu\xE1rio clicar sobre um elemento do gr\xE1fico."),t(),n(664,"p"),e(665,"O evento emitir\xE1 o seguinte par\xE2metro:"),t(),n(666,"ul")(667,"li")(668,"em"),e(669,"donut"),t(),e(670," e "),n(671,"em"),e(672,"pie"),t(),e(673,": um objeto contendo a categoria e valor da s\xE9rie."),t(),n(674,"li")(675,"em"),e(676,"radar"),t(),e(677,": um objeto contendo o nome da s\xE9rie e os valores."),t(),n(678,"li")(679,"em"),e(680,"area"),t(),e(681,", "),n(682,"em"),e(683,"line"),t(),e(684,", "),n(685,"em"),e(686,"column"),t(),e(687," e "),n(688,"em"),e(689,"bar"),t(),e(690,": um objeto contendo o nome da s\xE9rie, valor e categoria do eixo do gr\xE1fico."),t()()()(),n(691,"tr",15)(692,"td",16)(693,"div",32)(694,"span",33),e(695," (p-series-hover)"),o(696,"br"),t()()(),n(697,"td",19)(698,"code",34),e(699,"EventEmitter"),t()(),n(700,"td",22),e(701,"-"),t(),n(702,"td",23)(703,"em")(704,"strong"),e(705,"(opcional)"),t()(),n(706,"p"),e(707,"Evento executado quando o usu\xE1rio passar o "),n(708,"em"),e(709,"mouse"),t(),e(710," sobre um elemento do gr\xE1fico."),t(),n(711,"p"),e(712,"O evento emitir\xE1 o seguinte par\xE2metro de acordo com o tipo de gr\xE1fico:"),t(),n(713,"ul")(714,"li")(715,"em"),e(716,"donut"),t(),e(717," e "),n(718,"em"),e(719,"pie"),t(),e(720,": um objeto contendo a categoria e valor da s\xE9rie."),t(),n(721,"li")(722,"em"),e(723,"radar"),t(),e(724,": um objeto contendo o nome da s\xE9rie e os valores."),t(),n(725,"li")(726,"em"),e(727,"area"),t(),e(728,", "),n(729,"em"),e(730,"line"),t(),e(731,", "),n(732,"em"),e(733,"column"),t(),e(734," e "),n(735,"em"),e(736,"bar"),t(),e(737,": um objeto contendo a categoria, valor da s\xE9rie e categoria do eixo do gr\xE1fico."),t()()()(),n(738,"tr",15)(739,"td",16)(740,"div",17)(741,"span",18),e(742," p-title"),o(743,"br"),t()()(),n(744,"td",19)(745,"code",35),e(746,"string"),t()(),n(747,"td",22),e(748,"-"),t(),n(749,"td",23)(750,"em")(751,"strong"),e(752,"(opcional)"),t()(),n(753,"p"),e(754,"Define o t\xEDtulo do gr\xE1fico."),t()()(),n(755,"tr",15)(756,"td",16)(757,"div",17)(758,"span",18),e(759," p-type"),o(760,"br"),t()()(),n(761,"td",19)(762,"code",36),e(763,"PoChartType"),t()(),n(764,"td",22),e(765,"-"),t(),n(766,"td",23)(767,"em")(768,"strong"),e(769,"(opcional)"),t()(),n(770,"p"),e(771,"Define o tipo de gr\xE1fico."),t(),n(772,"p"),e(773,"\xC9 poss\xEDvel tamb\xE9m combinar gr\xE1ficos dos tipos linha e coluna. Para isso, opte pela declara\xE7\xE3o de "),n(774,"code"),e(775,"type"),t(),e(776," conforme a interface "),n(777,"code"),e(778,"PoChartSerie"),t(),e(779,"."),t(),n(780,"blockquote")(781,"p"),e(782,"Note que, se houver declara\xE7\xE3o de tipo de gr\xE1fico tanto em "),n(783,"code"),e(784,"p-type"),t(),e(785," quanto em "),n(786,"code"),e(787,"PochartSerie.type"),t(),e(788,", o valor "),n(789,"code"),e(790,"{ type }"),t(),e(791," da primeira s\xE9rie anular\xE1 o valor definido em "),n(792,"code"),e(793,"p-type"),t(),e(794,"."),t()(),n(795,"p"),e(796,"Se n\xE3o passado valor, o padr\xE3o ser\xE1 relativo \xE0 primeira s\xE9rie passada em "),n(797,"code"),e(798,"p-series"),t(),e(799,":"),t(),n(800,"ul")(801,"li"),e(802,"Se "),n(803,"code"),e(804,"p-series = [{ data: [1,2,3] }]"),t(),e(805,": ser\xE1 "),n(806,"code"),e(807,"PoChartType.Column"),t(),e(808,"."),t(),n(809,"li"),e(810,"Se "),n(811,"code"),e(812,"p-series = [{ data: 1 }]"),t(),e(813,": ser\xE1 "),n(814,"code"),e(815,"PoChartType.Pie"),t(),e(816,"."),t()(),n(817,"blockquote")(818,"p"),e(819,"Veja os valores v\xE1lidos no "),n(820,"em"),e(821,"enum"),t(),n(822,"code"),e(823,"PoChartType"),t(),e(824,"."),t()()()(),n(825,"tr",15)(826,"td",16)(827,"div",17)(828,"span",18),e(829," p-value-gauge-multiple"),o(830,"br"),t()()(),n(831,"td",19)(832,"code",27),e(833,"number"),t()(),n(834,"td",22),e(835,"-"),t(),n(836,"td",23)(837,"em")(838,"strong"),e(839,"(opcional)"),t()(),n(840,"p"),e(841,"Define o valor do gr\xE1fico do tipo "),n(842,"code"),e(843,"Gauge"),t(),e(844," quando utliza as propriedades "),n(845,"code"),e(846,"From"),t(),n(847,"code"),e(848,"To"),t(),e(849,"."),t()()()(),n(850,"h3"),e(851,"Interfaces"),t(),n(852,"h4",37)(853,"code",5),e(854,"PoChartAxisOptions"),t()(),n(855,"div",2)(856,"p")(857,"em"),e(858,"Interface"),t(),e(859," que define os eixos do grid."),t()(),n(860,"h4",11),e(861,"Propriedades"),t(),n(862,"table",12)(863,"tr",13)(864,"th",14),e(865,"Nome"),t(),n(866,"th",14),e(867,"Tipo"),t(),n(868,"th",14),e(869,"Descri\xE7\xE3o"),t()(),n(870,"tr",15)(871,"td",16)(872,"div",17)(873,"span",18),e(874," gridLines"),o(875,"br"),t()()(),n(876,"td",19)(877,"code",27),e(878,"number"),t()(),n(879,"td",23)(880,"em")(881,"strong"),e(882,"(opcional)"),t()(),n(883,"p"),e(884,`Define a quantidade de linhas exibidas no grid.
Para os gr\xE1ficos dos tipos `),n(885,"code"),e(886,"Area"),t(),e(887,", "),n(888,"code"),e(889,"Line"),t(),e(890," e "),n(891,"code"),e(892,"Column"),t(),e(893,`, as linhas modificadas ser\xE3o as horizontais (eixo X).
J\xE1 para gr\xE1ficos do tipo `),n(894,"code"),e(895,"Bar"),t(),e(896,", tratar\xE1 as linhas verticais (eixo Y)."),t(),n(897,"p"),e(898,"A propriedade cont\xE9m as seguintes diretrizes para seu correto funcionamento:"),t(),n(899,"ul")(900,"li"),e(901,"Quantidade padr\xE3o de linhas: '5';"),t(),n(902,"li"),e(903,"Quantidade m\xEDnima permitida: '2';"),t()()()(),n(904,"tr",15)(905,"td",16)(906,"div",17)(907,"span",18),e(908," labelType"),o(909,"br"),t()()(),n(910,"td",19)(911,"code",38),e(912,"PoChartLabelFormat"),t()(),n(913,"td",23)(914,"em")(915,"strong"),e(916,"(opcional)"),t()(),n(917,"p"),e(918,"Define o tipo do label e a formata\xE7\xE3o exibida no eixo de valor."),t()()(),n(919,"tr",15)(920,"td",16)(921,"div",17)(922,"span",18),e(923," maxRange"),o(924,"br"),t()()(),n(925,"td",19)(926,"code",27),e(927,"number"),t()(),n(928,"td",23)(929,"em")(930,"strong"),e(931,"(opcional)"),t()(),n(932,"p"),e(933,`Define o alcance de valor m\xE1ximo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor de alcance m\xE1ximo exibido ser\xE1 o maior existente entre as s\xE9ries.`),t(),n(934,"blockquote")(935,"p"),e(936,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),t()()()(),n(937,"tr",15)(938,"td",16)(939,"div",17)(940,"span",18),e(941," minRange"),o(942,"br"),t()()(),n(943,"td",19)(944,"code",27),e(945,"number"),t()(),n(946,"td",23)(947,"em")(948,"strong"),e(949,"(opcional)"),t()(),n(950,"p"),e(951,`Define o alcance m\xEDnimo exibido no eixo Y.
Caso n\xE3o seja definido valor, o valor-base de alcance m\xEDnimo ser\xE1 o menor encontrado entre as s\xE9ries.
Se houver valores negativos nas s\xE9ries, o menor deles ser\xE1 a base m\xEDnima.`),t(),n(952,"blockquote")(953,"p"),e(954,"Esta defini\xE7\xE3o n\xE3o deve refletir na plotagem das s\xE9ries. Os valores m\xE1ximos e m\xEDnimos encontrados nas s\xE9ries ser\xE3o as bases para seus alcance."),t()()()(),n(955,"tr",15)(956,"td",16)(957,"div",17)(958,"span",18),e(959," paddingBottom"),o(960,"br"),t()()(),n(961,"td",19)(962,"code",27),e(963,"number"),t()(),n(964,"td",23)(965,"em")(966,"strong"),e(967,"(opcional)"),t()(),n(968,"p"),e(969,"Permite aumentar ou diminuir o espa\xE7o inferior do gr\xE1fico."),t()()(),n(970,"tr",15)(971,"td",16)(972,"div",17)(973,"span",18),e(974," paddingLeft"),o(975,"br"),t()()(),n(976,"td",19)(977,"code",27),e(978,"number"),t()(),n(979,"td",23)(980,"em")(981,"strong"),e(982,"(opcional)"),t()(),n(983,"p"),e(984,"Permite aumentar ou diminuir o espa\xE7o esquerdo do gr\xE1fico."),t()()(),n(985,"tr",15)(986,"td",16)(987,"div",17)(988,"span",18),e(989," paddingRight"),o(990,"br"),t()()(),n(991,"td",19)(992,"code",27),e(993,"number"),t()(),n(994,"td",23)(995,"em")(996,"strong"),e(997,"(opcional)"),t()(),n(998,"p"),e(999,"Permite aumentar ou diminuir o espa\xE7o direito do gr\xE1fico."),t()()(),n(1e3,"tr",15)(1001,"td",16)(1002,"div",17)(1003,"span",18),e(1004," rotateLegend"),o(1005,"br"),t()()(),n(1006,"td",19)(1007,"code",27),e(1008,"number"),t()(),n(1009,"td",23)(1010,"em")(1011,"strong"),e(1012,"(opcional)"),t()(),n(1013,"p"),e(1014,`Define o \xE2ngulo de rota\xE7\xE3o da legenda do gr\xE1fico.
Aceita valores entre -90 e 90 graus, onde:`),t(),n(1015,"ul")(1016,"li"),e(1017,"Valores negativos giram a legenda para a esquerda."),t(),n(1018,"li"),e(1019,"Valores positivos giram a legenda para a direita."),t()(),n(1020,"p"),e(1021,"Se n\xE3o for definido, a legenda ser\xE1 exibida sem rota\xE7\xE3o."),t()()(),n(1022,"tr",15)(1023,"td",16)(1024,"div",17)(1025,"span",18),e(1026," showAxisDetails"),o(1027,"br"),t()()(),n(1028,"td",19)(1029,"code",39),e(1030,"boolean"),t()(),n(1031,"td",23)(1032,"em")(1033,"strong"),e(1034,"(opcional)"),t()(),n(1035,"p"),e(1036,"Exibe a linha de detalhes que acompanha o mouse"),t()()(),n(1037,"tr",15)(1038,"td",16)(1039,"div",17)(1040,"span",18),e(1041," showXAxis"),o(1042,"br"),t()()(),n(1043,"td",19)(1044,"code",39),e(1045,"boolean"),t()(),n(1046,"td",23)(1047,"em")(1048,"strong"),e(1049,"(opcional)"),t()(),n(1050,"p"),e(1051,"Exibe a linha do eixo X"),t()()(),n(1052,"tr",15)(1053,"td",16)(1054,"div",17)(1055,"span",18),e(1056," showYAxis"),o(1057,"br"),t()()(),n(1058,"td",19)(1059,"code",39),e(1060,"boolean"),t()(),n(1061,"td",23)(1062,"em")(1063,"strong"),e(1064,"(opcional)"),t()(),n(1065,"p"),e(1066,"Exibe a linha do eixo Y"),t()()()(),n(1067,"h4",37)(1068,"code",5),e(1069,"PoChartHeaderOptions"),t()(),n(1070,"div",2)(1071,"p")(1072,"em"),e(1073,"Interface"),t(),e(1074," para configura\xE7\xE3o das a\xE7\xF5es dispon\xEDveis no cabe\xE7alho."),t()(),n(1075,"h4",11),e(1076,"Propriedades"),t(),n(1077,"table",12)(1078,"tr",13)(1079,"th",14),e(1080,"Nome"),t(),n(1081,"th",14),e(1082,"Tipo"),t(),n(1083,"th",14),e(1084,"Descri\xE7\xE3o"),t()(),n(1085,"tr",15)(1086,"td",16)(1087,"div",17)(1088,"span",18),e(1089," hideExpand"),o(1090,"br"),t()()(),n(1091,"td",19)(1092,"code",39),e(1093,"boolean"),t()(),n(1094,"td",23)(1095,"em")(1096,"strong"),e(1097,"(opcional)"),t()(),n(1098,"p"),e(1099,"Define se o bot\xE3o respons\xE1vel por expandir o gr\xE1fico deve ser ocultado."),t()()(),n(1100,"tr",15)(1101,"td",16)(1102,"div",17)(1103,"span",18),e(1104," hideExportCsv"),o(1105,"br"),t()()(),n(1106,"td",19)(1107,"code",39),e(1108,"boolean"),t()(),n(1109,"td",23)(1110,"em")(1111,"strong"),e(1112,"(opcional)"),t()(),n(1113,"p"),e(1114,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico em formato CSV deve ser ocultada."),t()()(),n(1115,"tr",15)(1116,"td",16)(1117,"div",17)(1118,"span",18),e(1119," hideExportImage"),o(1120,"br"),t()()(),n(1121,"td",19)(1122,"code",39),e(1123,"boolean"),t()(),n(1124,"td",23)(1125,"em")(1126,"strong"),e(1127,"(opcional)"),t()(),n(1128,"p"),e(1129,"Define se a op\xE7\xE3o de exporta\xE7\xE3o do gr\xE1fico nos formatos JPG e PNG deve ser ocultada."),t()()(),n(1130,"tr",15)(1131,"td",16)(1132,"div",17)(1133,"span",18),e(1134," hideTableDetails"),o(1135,"br"),t()()(),n(1136,"td",19)(1137,"code",39),e(1138,"boolean"),t()(),n(1139,"td",23)(1140,"em")(1141,"strong"),e(1142,"(opcional)"),t()(),n(1143,"p"),e(1144,"Define se o bot\xE3o respons\xE1vel por exibir os detalhes do gr\xE1fico em formato de tabela deve ser ocultado."),t()()()(),n(1145,"h4",37)(1146,"code",5),e(1147,"PoChartIndicatorOptions"),t()(),n(1148,"div",2)(1149,"p"),e(1150,"Interface para configura\xE7\xF5es dos indicadores do gr\xE1fico "),n(1151,"code"),e(1152,"radar"),t(),e(1153,"."),t()(),n(1154,"h4",11),e(1155,"Propriedades"),t(),n(1156,"table",12)(1157,"tr",13)(1158,"th",14),e(1159,"Nome"),t(),n(1160,"th",14),e(1161,"Tipo"),t(),n(1162,"th",14),e(1163,"Descri\xE7\xE3o"),t()(),n(1164,"tr",15)(1165,"td",16)(1166,"div",17)(1167,"span",18),e(1168," color"),o(1169,"br"),t()()(),n(1170,"td",19)(1171,"code",35),e(1172,"string"),t()(),n(1173,"td",23)(1174,"em")(1175,"strong"),e(1176,"(opcional)"),t()(),n(1177,"p"),e(1178,`Cor do texto do indicator.
Recomendamos avaliar o contraste da cor definida para garantir melhor acessibilidade.`),t(),n(1179,"blockquote")(1180,"p"),e(1181,"Nome da cor, hexadecimal ou RGB."),t()()()(),n(1182,"tr",15)(1183,"td",16)(1184,"div",17)(1185,"span",18),e(1186," max"),o(1187,"br"),t()()(),n(1188,"td",19)(1189,"code",27),e(1190,"number"),t()(),n(1191,"td",23)(1192,"em")(1193,"strong"),e(1194,"(opcional)"),t()(),n(1195,"p"),e(1196,"Valor m\xE1ximo do indicator."),t(),n(1197,"p"),e(1198,"A propriedade "),n(1199,"code"),e(1200,"max"),t(),e(1201,` n\xE3o impede que a s\xE9rie contenha valores superiores ao m\xE1ximo definido.
Caso isso ocorra, os valores poder\xE3o extrapolar os limites do gr\xE1fico.`),t()()(),n(1202,"tr",15)(1203,"td",16)(1204,"div",17)(1205,"span",18),e(1206," min"),o(1207,"br"),t()()(),n(1208,"td",19)(1209,"code",27),e(1210,"number"),t()(),n(1211,"td",23)(1212,"em")(1213,"strong"),e(1214,"(opcional)"),t()(),n(1215,"p"),e(1216,"Valor m\xEDnimo do indicator, com valor padr\xE3o de 0."),t(),n(1217,"p"),e(1218,"A propriedade "),n(1219,"code"),e(1220,"min"),t(),e(1221,` n\xE3o impede que a s\xE9rie contenha valores inferiores ao m\xEDnimo definido.
Caso isso ocorra, os valores ser\xE3o apresentados ao centro do gr\xE1fico.`),t()()(),n(1222,"tr",15)(1223,"td",16)(1224,"div",17)(1225,"span",18),e(1226," name"),o(1227,"br"),t()()(),n(1228,"td",19)(1229,"code",35),e(1230,"string"),t()(),n(1231,"td",23)(1232,"em")(1233,"strong"),e(1234,"(opcional)"),t()(),n(1235,"p"),e(1236,"Nome do indicator."),t()()()(),n(1237,"h4",37)(1238,"code",5),e(1239,"PoChartLiterals"),t()(),n(1240,"div",2)(1241,"p"),e(1242,"Interface para defini\xE7\xE3o dos literais usadas no "),n(1243,"code"),e(1244,"po-chart"),t(),e(1245,"."),t()(),n(1246,"h4",11),e(1247,"Propriedades"),t(),n(1248,"table",12)(1249,"tr",13)(1250,"th",14),e(1251,"Nome"),t(),n(1252,"th",14),e(1253,"Tipo"),t(),n(1254,"th",14),e(1255,"Descri\xE7\xE3o"),t()(),n(1256,"tr",15)(1257,"td",16)(1258,"div",17)(1259,"span",18),e(1260," category"),o(1261,"br"),t()()(),n(1262,"td",19)(1263,"code",35),e(1264,"string"),t()(),n(1265,"td",23)(1266,"em")(1267,"strong"),e(1268,"(opcional)"),t()(),n(1269,"p"),e(1270,"Texto da primeira coluna da tabela no gr\xE1fico do tipo "),n(1271,"code"),e(1272,"Bar"),t(),e(1273,"."),t()()(),n(1274,"tr",15)(1275,"td",16)(1276,"div",17)(1277,"span",18),e(1278," downloadCSV"),o(1279,"br"),t()()(),n(1280,"td",19)(1281,"code",35),e(1282,"string"),t()(),n(1283,"td",23)(1284,"em")(1285,"strong"),e(1286,"(opcional)"),t()(),n(1287,"p"),e(1288,"Texto exibido para a a\xE7\xE3o de download de dados em formato CSV."),t()()(),n(1289,"tr",15)(1290,"td",16)(1291,"div",17)(1292,"span",18),e(1293," exportCSV"),o(1294,"br"),t()()(),n(1295,"td",19)(1296,"code",35),e(1297,"string"),t()(),n(1298,"td",23)(1299,"em")(1300,"strong"),e(1301,"(opcional)"),t()(),n(1302,"p"),e(1303,"Texto do bot\xE3o para exportar o gr\xE1fico em CSV."),t()()(),n(1304,"tr",15)(1305,"td",16)(1306,"div",17)(1307,"span",18),e(1308," exportJPG"),o(1309,"br"),t()()(),n(1310,"td",19)(1311,"code",35),e(1312,"string"),t()(),n(1313,"td",23)(1314,"em")(1315,"strong"),e(1316,"(opcional)"),t()(),n(1317,"p"),e(1318,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem JPG."),t()()(),n(1319,"tr",15)(1320,"td",16)(1321,"div",17)(1322,"span",18),e(1323," exportPNG"),o(1324,"br"),t()()(),n(1325,"td",19)(1326,"code",35),e(1327,"string"),t()(),n(1328,"td",23)(1329,"em")(1330,"strong"),e(1331,"(opcional)"),t()(),n(1332,"p"),e(1333,"Texto do bot\xE3o para exportar o gr\xE1fico como imagem PNG."),t()()(),n(1334,"tr",15)(1335,"td",16)(1336,"div",17)(1337,"span",18),e(1338," item"),o(1339,"br"),t()()(),n(1340,"td",19)(1341,"code",35),e(1342,"string"),t()(),n(1343,"td",23)(1344,"em")(1345,"strong"),e(1346,"(opcional)"),t()(),n(1347,"p"),e(1348,"Texto dos t\xEDtulos das colunas "),n(1349,"code"),e(1350,"Gauge"),t(),e(1351," e n\xE3o possui label."),t()()(),n(1352,"tr",15)(1353,"td",16)(1354,"div",17)(1355,"span",18),e(1356," serie"),o(1357,"br"),t()()(),n(1358,"td",19)(1359,"code",35),e(1360,"string"),t()(),n(1361,"td",23)(1362,"em")(1363,"strong"),e(1364,"(opcional)"),t()(),n(1365,"p"),e(1366,"Texto da primeira coluna da tabela em todos os gr\xE1ficos com exce\xE7\xE3o do "),n(1367,"code"),e(1368,"Bar"),t(),e(1369," e "),n(1370,"code"),e(1371,"Gauge"),t(),e(1372,"."),t()()(),n(1373,"tr",15)(1374,"td",16)(1375,"div",17)(1376,"span",18),e(1377," value"),o(1378,"br"),t()()(),n(1379,"td",19)(1380,"code",35),e(1381,"string"),t()(),n(1382,"td",23)(1383,"em")(1384,"strong"),e(1385,"(opcional)"),t()(),n(1386,"p"),e(1387,"Texto da primeira coluna da tabela quando o gr\xE1fico \xE9 do tipo "),n(1388,"code"),e(1389,"Gauge"),t(),e(1390,"."),t()()()(),n(1391,"h4",37)(1392,"code",5),e(1393,"PoChartOptions"),t()(),n(1394,"div",2)(1395,"p")(1396,"em"),e(1397,"Interface"),t(),e(1398," para configura\xE7\xF5es dos elementos do gr\xE1fico."),t()(),n(1399,"h4",11),e(1400,"Propriedades"),t(),n(1401,"table",12)(1402,"tr",13)(1403,"th",14),e(1404,"Nome"),t(),n(1405,"th",14),e(1406,"Tipo"),t(),n(1407,"th",14),e(1408,"Descri\xE7\xE3o"),t()(),n(1409,"tr",15)(1410,"td",16)(1411,"div",17)(1412,"span",18),e(1413," areaStyle"),o(1414,"br"),t()()(),n(1415,"td",19)(1416,"code",39),e(1417,"boolean"),t()(),n(1418,"td",23)(1419,"em")(1420,"strong"),e(1421,"(opcional)"),t()(),n(1422,"p"),e(1423,"Define se as s\xE9ries ter\xE3o sua \xE1rea preenchida."),t(),n(1424,"blockquote")(1425,"p"),e(1426,"Esta propriedade tem preced\xEAncia sobre a defini\xE7\xE3o de "),n(1427,"code"),e(1428,"areaStyle"),t(),e(1429," em cada s\xE9rie, "),n(1430,"code"),e(1431,"fillpoints"),t(),e(1432," n\xE3o funciona quando "),n(1433,"code"),e(1434,"areaStyle"),t(),e(1435," est\xE1 definido como "),n(1436,"code"),e(1437,"true"),t(),e(1438,"."),t()()()(),n(1439,"tr",15)(1440,"td",16)(1441,"div",17)(1442,"span",18),e(1443," axis"),o(1444,"br"),t()()(),n(1445,"td",19)(1446,"code",40),e(1447,"PoChartAxisOptions"),t()(),n(1448,"td",23)(1449,"em")(1450,"strong"),e(1451,"(opcional)"),t()(),n(1452,"p"),e(1453,"Define um objeto do tipo "),n(1454,"code"),e(1455,"PoChartAxisOptions"),t(),e(1456," para configura\xE7\xE3o dos eixos."),t()()(),n(1457,"tr",15)(1458,"td",16)(1459,"div",17)(1460,"span",18),e(1461," borderRadius"),o(1462,"br"),t()()(),n(1463,"td",19)(1464,"code",27),e(1465,"number"),t()(),n(1466,"td",23)(1467,"em")(1468,"strong"),e(1469,"(opcional)"),t()(),n(1470,"p"),e(1471,"Define borda entre os itens do gr\xE1fico. V\xE1lido para os gr\xE1ficos "),n(1472,"code"),e(1473,"Donut"),t(),e(1474,", "),n(1475,"code"),e(1476,"Pie"),t(),e(1477,"."),t(),n(1478,"blockquote")(1479,"p"),e(1480,"Valores v\xE1lidos entre 0 e 100,"),t()()()(),n(1481,"tr",15)(1482,"td",16)(1483,"div",17)(1484,"span",18),e(1485," bottomDataZoom"),o(1486,"br"),t()()(),n(1487,"td",19)(1488,"code",39),e(1489,"boolean "),t(),n(1490,"code",27),e(1491," number"),t()(),n(1492,"td",23)(1493,"em")(1494,"strong"),e(1495,"(opcional)"),t()(),n(1496,"p"),e(1497,"Define a dist\xE2ncia inferior do componente DataZoom."),t(),n(1498,"p"),e(1499,"Esta propriedade aceita os seguintes valores:"),t(),n(1500,"ul")(1501,"li")(1502,"p")(1503,"code"),e(1504,"false"),t(),e(1505," (padr\xE3o): n\xE3o aplica ajustes."),t()(),n(1506,"li")(1507,"p")(1508,"code"),e(1509,"true"),t(),e(1510,": aplica um valor autom\xE1tico com base no posicionamento da legenda:"),t(),n(1511,"ul")(1512,"li")(1513,"code"),e(1514,"8"),t(),e(1515," pixels quando o DataZoom estiver habilitado e n\xE3o houver legenda, ou quando a legenda estiver posicionada no topo."),t(),n(1516,"li")(1517,"code"),e(1518,"32"),t(),e(1519," pixels quando o DataZoom estiver habilitado e a legenda estiver posicionada na parte inferior."),t()()(),n(1520,"li")(1521,"p")(1522,"code"),e(1523,"number"),t(),e(1524,": aplica o valor num\xE9rico informado como dist\xE2ncia inferior. Este valor tem prioridade sobre a configura\xE7\xE3o booleana."),t()()(),n(1525,"blockquote")(1526,"p"),e(1527,"Esta configura\xE7\xE3o \xE9 considerada apenas quando o DataZoom estiver habilitado ("),n(1528,"code"),e(1529,"dataZoom: true"),t(),e(1530,")."),t()()()(),n(1531,"tr",15)(1532,"td",16)(1533,"div",17)(1534,"span",18),e(1535," dataZoom"),o(1536,"br"),t()()(),n(1537,"td",19)(1538,"code",39),e(1539,"boolean"),t()(),n(1540,"td",23)(1541,"em")(1542,"strong"),e(1543,"(opcional)"),t()(),n(1544,"p"),e(1545,"Permite aplicar zoom ao gr\xE1fico com o scroll do mouse;"),t()()(),n(1546,"tr",15)(1547,"td",16)(1548,"div",17)(1549,"span",18),e(1550," descriptionChart"),o(1551,"br"),t()()(),n(1552,"td",19)(1553,"code",35),e(1554,"string"),t()(),n(1555,"td",23)(1556,"em")(1557,"strong"),e(1558,"(opcional)"),t()(),n(1559,"p"),e(1560,"Define a descri\xE7\xE3o do gr\xE1fico exibido acima do gr\xE1fico."),t()()(),n(1561,"tr",15)(1562,"td",16)(1563,"div",17)(1564,"span",18),e(1565," fillPoints"),o(1566,"br"),t()()(),n(1567,"td",19)(1568,"code",39),e(1569,"boolean"),t()(),n(1570,"td",23)(1571,"em")(1572,"strong"),e(1573,"(opcional)"),t()(),n(1574,"p"),e(1575,`Define se os pontos do gr\xE1fico ser\xE3o preenchidos.
Quando true, os pontos s\xE3o totalmente coloridos. Quando false, apenas a borda dos pontos ser\xE1 exibida, mantendo o interior transparente.`),t(),n(1576,"blockquote")(1577,"p"),e(1578,"Esta propriedade \xE9 utiliz\xE1vel para os gr\xE1ficos dos tipos "),n(1579,"code"),e(1580,"Area"),t(),e(1581,", "),n(1582,"code"),e(1583,"Line"),t(),e(1584," e "),n(1585,"code"),e(1586,"Radar"),t(),e(1587,`.
Para o tipo `),n(1588,"code"),e(1589,"Radar"),t(),e(1590,", o valor padr\xE3o \xE9 "),n(1591,"code"),e(1592,"true"),t(),e(1593,"."),t()()()(),n(1594,"tr",15)(1595,"td",16)(1596,"div",17)(1597,"span",18),e(1598," firstColumnName"),o(1599,"br"),t()()(),n(1600,"td",19)(1601,"code",35),e(1602,"string"),t()(),n(1603,"td",23)(1604,"em")(1605,"strong"),e(1606,"(opcional)"),t()(),n(1607,"p"),e(1608,"Valor que permite customizar o nome da "),n(1609,"code"),e(1610,"TH"),t(),e(1611," da primeira coluna da tabela descritiva."),t()()(),n(1612,"tr",15)(1613,"td",16)(1614,"div",17)(1615,"span",18),e(1616," header"),o(1617,"br"),t()()(),n(1618,"td",19)(1619,"code",41),e(1620,"PoChartHeaderOptions"),t()(),n(1621,"td",23)(1622,"em")(1623,"strong"),e(1624,"(opcional)"),t()(),n(1625,"p"),e(1626,"Define um objeto do tipo "),n(1627,"code"),e(1628,"PoChartHeaderOptions"),t(),e(1629," para configurar a exibi\xE7\xE3o de bot\xF5es no cabe\xE7alho do gr\xE1fico."),t()()(),n(1630,"tr",15)(1631,"td",16)(1632,"div",17)(1633,"span",18),e(1634," innerRadius"),o(1635,"br"),t()()(),n(1636,"td",19)(1637,"code",27),e(1638,"number"),t()(),n(1639,"td",23)(1640,"em")(1641,"strong"),e(1642,"(opcional)"),t()(),n(1643,"p"),e(1644,"Define o di\xE2metro, em valor percentual entre "),n(1645,"code"),e(1646,"0"),t(),e(1647," e "),n(1648,"code"),e(1649,"100"),t(),e(1650,", da \xE1rea central para gr\xE1ficos do tipo "),n(1651,"code"),e(1652,"donut"),t(),e(1653,`.
Se passado um percentual que torne a espessura do gr\xE1fico menor do que `),n(1654,"code"),e(1655,"40px"),t(),e(1656,`,
os textos internos do gr\xE1ficos ser\xE3o ocultados para que n\xE3o haja quebra de layout.`),t()()(),n(1657,"tr",15)(1658,"td",16)(1659,"div",17)(1660,"span",18),e(1661," legend"),o(1662,"br"),t()()(),n(1663,"td",19)(1664,"code",39),e(1665,"boolean"),t()(),n(1666,"td",23)(1667,"em")(1668,"strong"),e(1669,"(opcional)"),t()(),n(1670,"p"),e(1671,"Define a exibi\xE7\xE3o da legenda do gr\xE1fico. Valor padr\xE3o \xE9 "),n(1672,"code"),e(1673,"true"),t()()()(),n(1674,"tr",15)(1675,"td",16)(1676,"div",17)(1677,"span",18),e(1678," legendPosition"),o(1679,"br"),t()()(),n(1680,"td",19)(1681,"code",42),e(1682,"'left' "),t(),n(1683,"code",43),e(1684," 'center' "),t(),n(1685,"code",44),e(1686," 'right'"),t()(),n(1687,"td",23)(1688,"em")(1689,"strong"),e(1690,"(opcional)"),t()(),n(1691,"p"),e(1692,"Define o alinhamento horizontal da legenda."),t(),n(1693,"blockquote")(1694,"p"),e(1695,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),n(1696,"code"),e(1697,"Gauge"),t(),e(1698,"."),t()()()(),n(1699,"tr",15)(1700,"td",16)(1701,"div",17)(1702,"span",18),e(1703," legendType"),o(1704,"br"),t()()(),n(1705,"td",19)(1706,"code",45),e(1707,"'plain' "),t(),n(1708,"code",46),e(1709," 'scroll'"),t()(),n(1710,"td",23)(1711,"em")(1712,"strong"),e(1713,"(opcional)"),t()(),n(1714,"p"),e(1715,"Define o tipo da legenda."),t(),n(1716,"ul")(1717,"li")(1718,"code"),e(1719,"plain"),t(),e(1720,": exibe todas as legendas de forma est\xE1tica."),t(),n(1721,"li")(1722,"code"),e(1723,"scroll"),t(),e(1724,": habilita rolagem quando a quantidade de legendas exceder o espa\xE7o dispon\xEDvel no gr\xE1fico."),t()(),n(1725,"blockquote")(1726,"p"),e(1727,"Propriedade inv\xE1lida para o gr\xE1fico do tipo "),n(1728,"code"),e(1729,"Gauge"),t(),e(1730,"."),t()()()(),n(1731,"tr",15)(1732,"td",16)(1733,"div",17)(1734,"span",18),e(1735," legendVerticalPosition"),o(1736,"br"),t()()(),n(1737,"td",19)(1738,"code",47),e(1739,"'top' "),t(),n(1740,"code",48),e(1741," 'bottom'"),t()(),n(1742,"td",23)(1743,"em")(1744,"strong"),e(1745,"(opcional)"),t()(),n(1746,"p"),e(1747,"Define a posi\xE7\xE3o vertical da legenda no gr\xE1fico."),t(),n(1748,"blockquote")(1749,"p"),e(1750,"Quando utilizada com o valor "),n(1751,"code"),e(1752,"top"),t(),e(1753,", recomenda-se configurar tamb\xE9m a propriedade "),n(1754,"code"),e(1755,"bottomDataZoom"),t(),e(1756," caso o "),n(1757,"code"),e(1758,"dataZoom"),t(),e(1759,` esteja habilitado, para evitar sobreposi\xE7\xE3o entre os elementos.
Propriedade inv\xE1lida para o gr\xE1fico do tipo `),n(1760,"code"),e(1761,"Gauge"),t(),e(1762,"."),t()()()(),n(1763,"tr",15)(1764,"td",16)(1765,"div",17)(1766,"span",18),e(1767," pointer"),o(1768,"br"),t()()(),n(1769,"td",19)(1770,"code",39),e(1771,"boolean"),t()(),n(1772,"td",23)(1773,"em")(1774,"strong"),e(1775,"(opcional)"),t()(),n(1776,"p"),e(1777,"Define a exibi\xE7\xE3o do ponteiro."),t(),n(1778,"blockquote")(1779,"p"),e(1780,"V\xE1lido para gr\xE1fico do tipo "),n(1781,"code"),e(1782,"Gauge"),t(),e(1783,"."),t()()()(),n(1784,"tr",15)(1785,"td",16)(1786,"div",17)(1787,"span",18),e(1788," rendererOption"),o(1789,"br"),t()()(),n(1790,"td",19)(1791,"code",49),e(1792,"'canvas' "),t(),n(1793,"code",50),e(1794," 'svg'"),t()(),n(1795,"td",23)(1796,"em")(1797,"strong"),e(1798,"(opcional)"),t()(),n(1799,"p"),e(1800,"Define como o gr\xE1fico ser\xE1 renderizado."),t(),n(1801,"blockquote")(1802,"p"),e(1803,"Recomenda-se n\xE3o modificar o valor da propriedade "),n(1804,"code"),e(1805,"rendererOption"),t(),e(1806," ap\xF3s a inicializa\xE7\xE3o da aplica\xE7\xE3o, uma vez que tal altera\xE7\xE3o pode ocasionar comportamentos inconsistentes na renderiza\xE7\xE3o do gr\xE1fico."),t()()()(),n(1807,"tr",15)(1808,"td",16)(1809,"div",17)(1810,"span",18),e(1811," roseType"),o(1812,"br"),t()()(),n(1813,"td",19)(1814,"code",39),e(1815,"boolean"),t()(),n(1816,"td",23)(1817,"em")(1818,"strong"),e(1819,"(opcional)"),t()(),n(1820,"p"),e(1821,"Transforma os gr\xE1ficos do tipo "),n(1822,"code"),e(1823,"Donut"),t(),e(1824," ou "),n(1825,"code"),e(1826,"Pie"),t(),e(1827," num gr\xE1fico de \xE1rea polar."),t(),n(1828,"blockquote")(1829,"p"),e(1830,"V\xE1lido para os gr\xE1ficos "),n(1831,"code"),e(1832,"Donut"),t(),e(1833," e "),n(1834,"code"),e(1835,"Pie"),t(),e(1836,"."),t()()()(),n(1837,"tr",15)(1838,"td",16)(1839,"div",17)(1840,"span",18),e(1841," showContainerGauge"),o(1842,"br"),t()()(),n(1843,"td",19)(1844,"code",39),e(1845,"boolean"),t()(),n(1846,"td",23)(1847,"em")(1848,"strong"),e(1849,"(opcional)"),t()(),n(1850,"p"),e(1851,"Esconde a estiliza\xE7\xE3o do container em volta do gr\xE1fico."),t(),n(1852,"blockquote")(1853,"p"),e(1854,"V\xE1lido para gr\xE1fico do tipo "),n(1855,"code"),e(1856,"Gauge"),t(),e(1857,"."),t()()()(),n(1858,"tr",15)(1859,"td",16)(1860,"div",17)(1861,"span",18),e(1862," showFromToLegend"),o(1863,"br"),t()()(),n(1864,"td",19)(1865,"code",39),e(1866,"boolean"),t()(),n(1867,"td",23)(1868,"em")(1869,"strong"),e(1870,"(opcional)"),t()(),n(1871,"p"),e(1872,"Exibe os valores das propriedades "),n(1873,"code"),e(1874,"from"),t(),e(1875," e "),n(1876,"code"),e(1877,"to"),t(),e(1878," no gr\xE1fico do no texto da legenda entre par\xEAnteses."),t(),n(1879,"blockquote")(1880,"p"),e(1881,"V\xE1lido para gr\xE1fico do tipo "),n(1882,"code"),e(1883,"Gauge"),t(),e(1884,"."),t()()()(),n(1885,"tr",15)(1886,"td",16)(1887,"div",17)(1888,"span",18),e(1889," stacked"),o(1890,"br"),t()()(),n(1891,"td",19)(1892,"code",39),e(1893,"boolean"),t()(),n(1894,"td",23)(1895,"em")(1896,"strong"),e(1897,"(opcional)"),t()(),n(1898,"p"),e(1899,"Agrupa todas as s\xE9ries numa \xFAnica coluna ou barra por categoria. Essa propriedade sobrescreve a propriedade "),n(1900,"code"),e(1901,"stackGroupName"),t(),e(1902," da interface "),n(1903,"code"),e(1904,"PoChartSerie"),t()(),n(1905,"blockquote")(1906,"p"),e(1907,"V\xE1lido para gr\xE1fico do tipo "),n(1908,"code"),e(1909,"Column"),t(),e(1910," e "),n(1911,"code"),e(1912,"Bar"),t(),e(1913,"."),t()(),n(1914,"blockquote")(1915,"p"),e(1916,"Essa propriedade habilita a propriedade "),n(1917,"code"),e(1918,"p-data-label"),t(),e(1919," por padr\xE3o, podendo ser desabilitada passando "),n(1920,"code"),e(1921,"[p-data-label]={ fixed: false }"),t(),e(1922,"."),t()()()(),n(1923,"tr",15)(1924,"td",16)(1925,"div",17)(1926,"span",18),e(1927," subtitleGauge"),o(1928,"br"),t()()(),n(1929,"td",19)(1930,"code",35),e(1931,"string"),t()(),n(1932,"td",23)(1933,"em")(1934,"strong"),e(1935,"(opcional)"),t()(),n(1936,"p"),e(1937,"Define um subt\xEDtulo para o Gauge. Indicamos um subt\xEDtulo pequeno, com uma quantidade m\xE1xima de 32 caracteres na altura padr\xE3o."),t(),n(1938,"blockquote")(1939,"p"),e(1940,"V\xE1lido para gr\xE1fico do tipo "),n(1941,"code"),e(1942,"Gauge"),t(),e(1943,"."),t()()()(),n(1944,"tr",15)(1945,"td",16)(1946,"div",17)(1947,"span",18),e(1948," textCenterGraph"),o(1949,"br"),t()()(),n(1950,"td",19)(1951,"code",35),e(1952,"string"),t()(),n(1953,"td",23)(1954,"em")(1955,"strong"),e(1956,"(opcional)"),t()(),n(1957,"p"),e(1958,"Aplica texto centralizado customizado nos gr\xE1ficos de "),n(1959,"code"),e(1960,"Donut"),t(),e(1961,"."),t()()()(),n(1962,"h4",37)(1963,"code",5),e(1964,"PoChartRadarOptions"),t()(),n(1965,"div",2)(1966,"p")(1967,"em"),e(1968,"Interface"),t(),e(1969," para configura\xE7\xF5es do gr\xE1fico "),n(1970,"code"),e(1971,"radar"),t(),e(1972,"."),t()(),n(1973,"h4",11),e(1974,"Propriedades"),t(),n(1975,"table",12)(1976,"tr",13)(1977,"th",14),e(1978,"Nome"),t(),n(1979,"th",14),e(1980,"Tipo"),t(),n(1981,"th",14),e(1982,"Descri\xE7\xE3o"),t()(),n(1983,"tr",15)(1984,"td",16)(1985,"div",17)(1986,"span",18),e(1987," indicator"),o(1988,"br"),t()()(),n(1989,"td",19)(1990,"code",51),e(1991,"Array<PoChartIndicatorOptions>"),t()(),n(1992,"td",23)(1993,"em")(1994,"strong"),e(1995,"(opcional)"),t()(),n(1996,"p"),e(1997,"Define as configura\xE7\xF5es dos indicadores do gr\xE1fico, como nome, cor, valor m\xEDnimo e valor m\xE1ximo."),t()()(),n(1998,"tr",15)(1999,"td",16)(2e3,"div",17)(2001,"span",18),e(2002," shape"),o(2003,"br"),t()()(),n(2004,"td",19)(2005,"code",52),e(2006,"'polygon' "),t(),n(2007,"code",53),e(2008," 'circle'"),t()(),n(2009,"td",23)(2010,"em")(2011,"strong"),e(2012,"(opcional)"),t()(),n(2013,"p"),e(2014,"Define o formato da grid, podendo ser exibida como pol\xEDgono ou c\xEDrculo."),t()()(),n(2015,"tr",15)(2016,"td",16)(2017,"div",17)(2018,"span",18),e(2019," splitArea"),o(2020,"br"),t()()(),n(2021,"td",19)(2022,"code",39),e(2023,"boolean"),t()(),n(2024,"td",23)(2025,"em")(2026,"strong"),e(2027,"(opcional)"),t()(),n(2028,"p"),e(2029,"Define o efeito zebrado na grid."),t()()()(),n(2030,"h4",37)(2031,"code",5),e(2032,"PoChartDataLabel"),t()(),n(2033,"div",2)(2034,"p"),e(2035,"Interface que define as propriedades de exibi\xE7\xE3o dos r\xF3tulos das s\xE9ries no "),n(2036,"code"),e(2037,"po-chart"),t(),e(2038,"."),t()(),n(2039,"h4",11),e(2040,"Propriedades"),t(),n(2041,"table",12)(2042,"tr",13)(2043,"th",14),e(2044,"Nome"),t(),n(2045,"th",14),e(2046,"Tipo"),t(),n(2047,"th",14),e(2048,"Descri\xE7\xE3o"),t()(),n(2049,"tr",15)(2050,"td",16)(2051,"div",17)(2052,"span",18),e(2053," fixed"),o(2054,"br"),t()()(),n(2055,"td",19)(2056,"code",39),e(2057,"boolean"),t()(),n(2058,"td",23)(2059,"em")(2060,"strong"),e(2061,"(opcional)"),t()(),n(2062,"p"),e(2063,"Indica se o texto associado aos pontos da s\xE9rie deve permanecer fixo na exibi\xE7\xE3o do gr\xE1fico."),t(),n(2064,"ul")(2065,"li"),e(2066,"Quando definido como "),n(2067,"code"),e(2068,"true"),t(),e(2069,":"),n(2070,"ul")(2071,"li"),e(2072,"O "),n(2073,"em"),e(2074,"tooltip"),t(),e(2075," n\xE3o ser\xE1 exibido."),t(),n(2076,"li"),e(2077,"As outras s\xE9ries ficar\xE3o com opacidade reduzida ao passar o mouse sobre a s\xE9rie ativa."),t()()()(),n(2078,"blockquote")(2079,"p"),e(2080,"Dispon\xEDvel para os tipo de gr\xE1fico "),n(2081,"code"),e(2082,"PoChartType.Line"),t(),e(2083,", "),n(2084,"code"),e(2085,"PoChartType.Area"),t(),e(2086,", "),n(2087,"code"),e(2088,"PoChartType.Column"),t(),e(2089,", "),n(2090,"code"),e(2091,"PoChartType.Bar e PoChartType.Radar"),t(),e(2092,"."),t()()()()(),n(2093,"h4",37)(2094,"code",5),e(2095,"PoChartSerie"),t()(),n(2096,"div",2)(2097,"p"),e(2098,"Interface das series din\xE2micas do "),n(2099,"code"),e(2100,"po-chart"),t(),e(2101," que possibilita desenhar gr\xE1ficos dos tipos "),n(2102,"code"),e(2103,"area"),t(),e(2104,", "),n(2105,"code"),e(2106,"bar"),t(),e(2107,", "),n(2108,"code"),e(2109,"column"),t(),e(2110,", "),n(2111,"code"),e(2112,"line"),t(),e(2113,", "),n(2114,"code"),e(2115,"donut"),t(),e(2116,", "),n(2117,"code"),e(2118,"pie"),t(),e(2119," e "),n(2120,"code"),e(2121,"radar"),t()()(),n(2122,"h4",11),e(2123,"Propriedades"),t(),n(2124,"table",12)(2125,"tr",13)(2126,"th",14),e(2127,"Nome"),t(),n(2128,"th",14),e(2129,"Tipo"),t(),n(2130,"th",14),e(2131,"Descri\xE7\xE3o"),t()(),n(2132,"tr",15)(2133,"td",16)(2134,"div",17)(2135,"span",18),e(2136," areaStyle"),o(2137,"br"),t()()(),n(2138,"td",19)(2139,"code",39),e(2140,"boolean"),t()(),n(2141,"td",23)(2142,"em")(2143,"strong"),e(2144,"(opcional)"),t()(),n(2145,"p"),e(2146,"Define se a s\xE9rie ter\xE1 sua \xE1rea preenchida."),t(),n(2147,"blockquote")(2148,"p"),e(2149,"Propriedade v\xE1lida para gr\xE1ficos do tipo "),n(2150,"code"),e(2151,"Radar"),t(),e(2152,", "),n(2153,"code"),e(2154,"fillpoints"),t(),e(2155," n\xE3o funciona quando "),n(2156,"code"),e(2157,"areaStyle"),t(),e(2158," est\xE1 definido como "),n(2159,"code"),e(2160,"true"),t(),e(2161,"."),t()()()(),n(2162,"tr",15)(2163,"td",16)(2164,"div",17)(2165,"span",18),e(2166," color"),o(2167,"br"),t()()(),n(2168,"td",19)(2169,"code",35),e(2170,"string"),t()(),n(2171,"td",23)(2172,"em")(2173,"strong"),e(2174,"(opcional)"),t()(),n(2175,"p"),e(2176,"Determina a cor da s\xE9rie. As maneiras de customizar o "),n(2177,"em"),e(2178,"preset"),t(),e(2179," padr\xE3o de cores s\xE3o:"),t(),n(2180,"ul")(2181,"li"),e(2182,"Hexadecimal, por exemplo "),n(2183,"code"),e(2184,"#c64840"),t(),e(2185,";"),t(),n(2186,"li"),e(2187,"RGB, por exemplo "),n(2188,"code"),e(2189,"rgb(0, 0, 165)"),t()(),n(2190,"li"),e(2191,"O nome da cor, por exemplo "),n(2192,"code"),e(2193,"blue"),t(),e(2194,";"),t(),n(2195,"li"),e(2196,"Vari\xE1veis CSS, por exemplo "),n(2197,"code"),e(2198,"var(--color-01)"),t(),e(2199,";"),t(),n(2200,"li"),e(2201,`Usando uma das cores do tema do PO:
Valores v\xE1lidos:`),n(2202,"ul")(2203,"li"),o(2204,"span",54),n(2205,"code"),e(2206,"color-01"),t()(),n(2207,"li"),o(2208,"span",55),n(2209,"code"),e(2210,"color-02"),t()(),n(2211,"li"),o(2212,"span",56),n(2213,"code"),e(2214,"color-03"),t()(),n(2215,"li"),o(2216,"span",57),n(2217,"code"),e(2218,"color-04"),t()(),n(2219,"li"),o(2220,"span",58),n(2221,"code"),e(2222,"color-05"),t()(),n(2223,"li"),o(2224,"span",59),n(2225,"code"),e(2226,"color-06"),t()(),n(2227,"li"),o(2228,"span",60),n(2229,"code"),e(2230,"color-07"),t()(),n(2231,"li"),o(2232,"span",61),n(2233,"code"),e(2234,"color-08"),t()(),n(2235,"li"),o(2236,"span",62),n(2237,"code"),e(2238,"color-09"),t()(),n(2239,"li"),o(2240,"span",63),n(2241,"code"),e(2242,"color-10"),t()(),n(2243,"li"),o(2244,"span",64),n(2245,"code"),e(2246,"color-11"),t()(),n(2247,"li"),o(2248,"span",65),n(2249,"code"),e(2250,"color-12"),t()()()()(),n(2251,"ul")(2252,"li"),e(2253,"A partir da 13\xB0 s\xE9rie o valor da cor ser\xE1 preta caso n\xE3o seja enviada uma cor customizada."),t()()()(),n(2254,"tr",15)(2255,"td",16)(2256,"div",17)(2257,"span",18),e(2258," data"),o(2259,"br"),t()()(),n(2260,"td",19)(2261,"code",27),e(2262,"number "),t(),n(2263,"code",66),e(2264," Array<number>"),t()(),n(2265,"td",23)(2266,"em")(2267,"strong"),e(2268,"(opcional)"),t()(),n(2269,"p"),e(2270,"Define a lista de valores para a s\xE9rie. Os tipos esperados s\xE3o de acordo com o tipo de gr\xE1fico:"),t(),n(2271,"ul")(2272,"li"),e(2273,"Para gr\xE1ficos dos tipos "),n(2274,"code"),e(2275,"donut"),t(),e(2276," e "),n(2277,"code"),e(2278,"pie"),t(),e(2279,", espera-se "),n(2280,"em"),e(2281,"number"),t(),e(2282,";"),t(),n(2283,"li"),e(2284,"Para gr\xE1ficos dos tipos "),n(2285,"code"),e(2286,"area"),t(),e(2287,", "),n(2288,"code"),e(2289,"bar"),t(),e(2290,", "),n(2291,"code"),e(2292,"column"),t(),e(2293,", "),n(2294,"code"),e(2295,"line"),t(),e(2296," e "),n(2297,"code"),e(2298,"radar"),t(),e(2299,", espera-se um "),n(2300,"em"),e(2301,"array"),t(),e(2302," de "),n(2303,"code"),e(2304,"data"),t(),e(2305,"."),t()(),n(2306,"blockquote")(2307,"p"),e(2308,"Se passado valor "),n(2309,"code"),e(2310,"null"),t(),e(2311," em determinado item da lista, a itera\xE7\xE3o ir\xE1 ignor\xE1-lo."),t()()()(),n(2312,"tr",15)(2313,"td",16)(2314,"div",17)(2315,"span",18),e(2316," from"),o(2317,"br"),t()()(),n(2318,"td",19)(2319,"code",27),e(2320,"number"),t()(),n(2321,"td",23)(2322,"em")(2323,"strong"),e(2324,"(opcional)"),t()(),n(2325,"p"),e(2326,"Alcance inicial da cor."),t(),n(2327,"blockquote")(2328,"p"),e(2329,"Propriedade v\xE1lida para gr\xE1fico do tipo "),n(2330,"code"),e(2331,"Gauge"),t(),e(2332,"."),t()()()(),n(2333,"tr",15)(2334,"td",16)(2335,"div",17)(2336,"span",18),e(2337," label"),o(2338,"br"),t()()(),n(2339,"td",19)(2340,"code",35),e(2341,"string"),t()(),n(2342,"td",23)(2343,"em")(2344,"strong"),e(2345,"(opcional)"),t()(),n(2346,"p"),e(2347,"R\xF3tulo refer\xEAncia da s\xE9rie."),t()()(),n(2348,"tr",15)(2349,"td",16)(2350,"div",17)(2351,"span",18),e(2352," stackGroupName"),o(2353,"br"),t()()(),n(2354,"td",19)(2355,"code",35),e(2356,"string"),t()(),n(2357,"td",23)(2358,"em")(2359,"strong"),e(2360,"(opcional)"),t()(),n(2361,"p"),e(2362,"Agrupa as s\xE9ries em barras ou colunas que receberem o mesmo "),n(2363,"code"),e(2364,"stackGroupName"),t(),e(2365,". Exemplo:"),t(),n(2366,"ul")(2367,"li"),e(2368,"Serie A: "),n(2369,"code"),e(2370,"{ data: 500, stackGroupName: 'group1' ... }"),t(),e(2371,";"),t(),n(2372,"li"),e(2373,"S\xE9rie B: "),n(2374,"code"),e(2375,"{ data: 200, stackGroupName: 'group1' ... }"),t(),e(2376,"."),t(),n(2377,"li"),e(2378,"S\xE9rie C: "),n(2379,"code"),e(2380,"{ data: 100, stackGroupName: 'group2' ... }"),t(),e(2381,"."),t(),n(2382,"li"),e(2383,"S\xE9rie D: "),n(2384,"code"),e(2385,"{ data: 400, stackGroupName: 'group2' ... }"),t(),e(2386,"."),t()(),n(2387,"p"),e(2388,"Nesse caso ser\xE1 criado duas barras ou colunas com duas series agrupadas em cada uma por categoria."),t(),n(2389,"blockquote")(2390,"p"),e(2391,"V\xE1lido para gr\xE1fico do tipo "),n(2392,"code"),e(2393,"Column"),t(),e(2394," e "),n(2395,"code"),e(2396,"Bar"),t(),e(2397,". Essa propriedade \xE9 ignorada caso a propriedade "),n(2398,"code"),e(2399,"stacked"),t(),e(2400," da interface "),n(2401,"code"),e(2402,"PoChartOptions"),t(),e(2403," esteja como "),n(2404,"code"),e(2405,"true"),t(),e(2406,"."),t()(),n(2407,"blockquote")(2408,"p"),e(2409,"Essa propriedade habilita a propriedade "),n(2410,"code"),e(2411,"p-data-label"),t(),e(2412," por padr\xE3o, podendo ser desabilitada passando "),n(2413,"code"),e(2414,"[p-data-label]={ fixed: false }"),t(),e(2415,"."),t()()()(),n(2416,"tr",15)(2417,"td",16)(2418,"div",17)(2419,"span",18),e(2420," to"),o(2421,"br"),t()()(),n(2422,"td",19)(2423,"code",27),e(2424,"number"),t()(),n(2425,"td",23)(2426,"em")(2427,"strong"),e(2428,"(opcional)"),t()(),n(2429,"p"),e(2430,"Alcance final da cor."),t(),n(2431,"blockquote")(2432,"p"),e(2433,"Propriedade v\xE1lida para gr\xE1fico do tipo "),n(2434,"code"),e(2435,"Gauge"),t(),e(2436,"."),t()()()(),n(2437,"tr",15)(2438,"td",16)(2439,"div",17)(2440,"span",18),e(2441," tooltip"),o(2442,"br"),t()()(),n(2443,"td",19)(2444,"code",35),e(2445,"string "),t(),n(2446,"code",67),e(2447," ((params: any) => string)"),t()(),n(2448,"td",23)(2449,"em")(2450,"strong"),e(2451,"(opcional)"),t()(),n(2452,"p"),e(2453,"Define o texto que ser\xE1 exibido na tooltip ao passar o mouse por cima das s\xE9ries do "),n(2454,"em"),e(2455,"chart"),t(),e(2456,"."),t(),n(2457,"p"),e(2458,"Formatos aceitos:"),t(),n(2459,"ul")(2460,"li")(2461,"p")(2462,"strong"),e(2463,"string"),t(),e(2464,": pode conter marcadores din\xE2micos e HTML simples."),t()(),n(2465,"li")(2466,"p"),e(2467,"Marcadores dispon\xEDveis:"),t()(),n(2468,"li")(2469,"p")(2470,"code"),e(2471,"{name}"),t(),e(2472," \u2192 Nome do item/categoria."),t()(),n(2473,"li")(2474,"p")(2475,"code"),e(2476,"{seriesName}"),t(),e(2477," \u2192 Nome da s\xE9rie."),t()(),n(2478,"li")(2479,"p")(2480,"code"),e(2481,"{value}"),t(),e(2482," \u2192 Valor correspondente."),t()(),n(2483,"li")(2484,"p")(2485,"strong"),e(2486,"function"),t(),e(2487,": fun\xE7\xE3o que recebe o objeto "),n(2488,"code"),e(2489,"params"),t(),e(2490," e deve retornar uma "),n(2491,"em"),e(2492,"string"),t(),e(2493," com o conte\xFAdo da tooltip."),t()()(),n(2494,"blockquote")(2495,"p"),e(2496,"\xC9 poss\xEDvel utilizar marca\xE7\xE3o HTML simples ("),n(2497,"code"),e(2498,"<b>"),t(),e(2499,", "),n(2500,"code"),e(2501,"<i>"),t(),e(2502,", "),n(2503,"code"),e(2504,"<br>"),t(),e(2505,", "),n(2506,"code"),e(2507,"<hr>"),t(),e(2508,", etc.) que ser\xE1 interpretada via "),n(2509,"code"),e(2510,"innerHTML"),t(),e(2511,"."),t()(),n(2512,"blockquote")(2513,"p"),e(2514,"Formata\xE7\xE3o customizada (ser\xE1 convertido internamente para HTML):"),t()(),n(2515,"ul")(2516,"li")(2517,"code"),e(2518,"\\n"),t(),e(2519," \u2192 quebra de linha ("),n(2520,"code"),e(2521,"<br>"),t(),e(2522,")."),t(),n(2523,"li")(2524,"code"),e(2525,"**texto**"),t(),e(2526," \u2192 negrito ("),n(2527,"code"),e(2528,"<b>"),t(),e(2529,")."),t(),n(2530,"li")(2531,"code"),e(2532,"__texto__"),t(),e(2533," \u2192 it\xE1lico ("),n(2534,"code"),e(2535,"<i>"),t(),e(2536,")."),t()(),n(2537,"blockquote")(2538,"p"),e(2539,"Caso n\xE3o seja informado um valor para o "),n(2540,"em"),e(2541,"tooltip"),t(),e(2542,", ser\xE1 exibido da seguinte forma:"),t()(),n(2543,"ul")(2544,"li")(2545,"code"),e(2546,"donut"),t(),e(2547,", "),n(2548,"code"),e(2549,"label"),t(),e(2550,": valor proporcional ao total em porcentagem."),t(),n(2551,"li")(2552,"code"),e(2553,"radar"),t(),e(2554,": nome da s\xE9rie, o nome do indicator e os valores correspondentes."),t(),n(2555,"li")(2556,"code"),e(2557,"area"),t(),e(2558,", "),n(2559,"code"),e(2560,"bar"),t(),e(2561,", "),n(2562,"code"),e(2563,"column"),t(),e(2564,", "),n(2565,"code"),e(2566,"line"),t(),e(2567," e "),n(2568,"code"),e(2569,"pie"),t(),e(2570,": "),n(2571,"code"),e(2572,"label"),t(),e(2573,": "),n(2574,"code"),e(2575,"data"),t(),e(2576,"."),t()(),n(2577,"h3"),e(2578,"Exemplos:"),t(),n(2579,"p")(2580,"strong"),e(2581,"Usando string com placeholders:"),t()(),n(2582,"pre")(2583,"code",68),e(2584,`tooltip: 'Ano: {name}<br>S\xE9rie: {seriesName}<br>Valor: <b>{value}</b>'
`),t()(),n(2585,"p")(2586,"strong"),e(2587,"Usando fun\xE7\xE3o de callback:"),t()(),n(2588,"pre")(2589,"code",68),e(2590,"tooltip = (params) => {\n  return `Ano: ${params.name}<br><i>Valor:</i> ${params.value}`;\n}\n"),t()()()(),n(2591,"tr",15)(2592,"td",16)(2593,"div",17)(2594,"span",18),e(2595," type"),o(2596,"br"),t()()(),n(2597,"td",19)(2598,"code",36),e(2599,"PoChartType"),t()(),n(2600,"td",23)(2601,"em")(2602,"strong"),e(2603,"(opcional)"),t()(),n(2604,"p"),e(2605,"Define em qual tipo de gr\xE1fico que ser\xE1 exibida a s\xE9rie. \xC9 poss\xEDvel combinar s\xE9ries dos tipos "),n(2606,"code"),e(2607,"column"),t(),e(2608," e "),n(2609,"code"),e(2610,"line"),t(),e(2611," no mesmo gr\xE1fico. Para isso, basta criar as s\xE9ries com as configura\xE7\xF5es:"),t(),n(2612,"ul")(2613,"li"),e(2614,"Serie A: "),n(2615,"code"),e(2616,"{ type: ChartType.Column, data: ... }"),t(),e(2617,";"),t(),n(2618,"li"),e(2619,"S\xE9rie B: "),n(2620,"code"),e(2621,"{ type: ChartType.Line, data: ... }"),t(),e(2622,"."),t()(),n(2623,"p"),e(2624,"Se tanto "),n(2625,"code"),e(2626,"p-type"),t(),e(2627," quanto "),n(2628,"code"),e(2629,"{ type }"),t(),e(2630," forem ignorados, o padr\xE3o gerado pelo componente ser\xE1:"),t(),n(2631,"ul")(2632,"li")(2633,"code"),e(2634,"column"),t(),e(2635,": se "),n(2636,"code"),e(2637,"data"),t(),e(2638," receber "),n(2639,"code"),e(2640,"Array<number>"),t(),e(2641,";"),t(),n(2642,"li")(2643,"code"),e(2644,"pie"),t(),e(2645,": se "),n(2646,"code"),e(2647,"data"),t(),e(2648," for "),n(2649,"em"),e(2650,"number"),t(),e(2651,"."),t()(),n(2652,"blockquote")(2653,"p"),e(2654,"Se utilizada a propriedade "),n(2655,"code"),e(2656,"p-type"),t(),e(2657,", dispensa-se a defini\xE7\xE3o desta propriedade. Por\xE9m, se houver declara\xE7\xE3o para ambas, o valor "),n(2658,"code"),e(2659,"{type}"),t(),e(2660," da primeira s\xE9rie sobrescrever\xE1 o valor definido em "),n(2661,"code"),e(2662,"p-type"),t(),e(2663,"."),t()(),n(2664,"blockquote")(2665,"p"),e(2666,"O componente s\xF3 exibir\xE1 as s\xE9ries que tiverem o mesmo "),n(2667,"code"),e(2668,"type"),t(),e(2669," definido, exceto para mesclagem para tipos "),n(2670,"code"),e(2671,"column"),t(),e(2672," e "),n(2673,"code"),e(2674,"line"),t(),e(2675,"."),t()()()()(),n(2676,"h3"),e(2677,"Enums"),t(),n(2678,"h4",4)(2679,"code",5),e(2680,"PoChartLabelFormat"),t()(),n(2681,"div",2)(2682,"p")(2683,"em"),e(2684,"Enum"),t(),n(2685,"code"),e(2686,"PoChartLabelFormat"),t(),e(2687," para especifica\xE7\xE3o dos tipos de formata\xE7\xE3o do eixo de valor no gr\xE1fico."),t()(),n(2688,"h4",11),e(2689,"Propriedades"),t(),n(2690,"table",12)(2691,"tr",13)(2692,"th",14),e(2693,"Nome"),t(),n(2694,"th",14),e(2695,"Descri\xE7\xE3o"),t()(),n(2696,"tr",15)(2697,"td",16)(2698,"div",17)(2699,"span",18),e(2700," Number"),o(2701,"br"),t()()(),n(2702,"td",23)(2703,"p"),e(2704,"Os valores ser\xE3o exibidos no formato num\xE9rico com duas casas decimais. Equivalente ao formato "),n(2705,"code"),e(2706,"'1.2-2'"),t(),e(2707," da "),n(2708,"a",69),e(2709,"DecimalPipe"),t(),e(2710,"."),t()()(),n(2711,"tr",15)(2712,"td",16)(2713,"div",17)(2714,"span",18),e(2715," Currency"),o(2716,"br"),t()()(),n(2717,"td",23)(2718,"p"),e(2719,"Os valores ser\xE3o exibidos com o s\xEDmbolo monet\xE1rio de acordo com a formata\xE7\xE3o padr\xE3o da aplica\xE7\xE3o, isto \xE9, o valor do token "),n(2720,"a",70),e(2721,"DEFAULT_CURRENCY_CODE"),t(),e(2722,". Para adequar ao padr\xE3o num\xE9rico brasileiro, \xE9 necess\xE1rio configurar o "),n(2723,"a",71),e(2724,"LOCALE_ID"),t(),e(2725," da aplica\xE7\xE3o. A configura\xE7\xE3o pode ser feita da seguinte forma:"),t(),n(2726,"pre")(2727,"code"),e(2728,`import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

@NgModule({
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class AppModule { }
`),t()()()()(),n(2729,"h4",4)(2730,"code",5),e(2731,"PoChartType"),t()(),n(2732,"div",2)(2733,"p")(2734,"em"),e(2735,"Enum"),t(),n(2736,"code"),e(2737,"PoChartType"),t(),e(2738," para especifica\xE7\xE3o dos tipos de gr\xE1ficos."),t()(),n(2739,"h4",11),e(2740,"Propriedades"),t(),n(2741,"table",12)(2742,"tr",13)(2743,"th",14),e(2744,"Nome"),t(),n(2745,"th",14),e(2746,"Descri\xE7\xE3o"),t()(),n(2747,"tr",15)(2748,"td",16)(2749,"div",17)(2750,"span",18),e(2751," Area"),o(2752,"br"),t()()(),n(2753,"td",23)(2754,"p"),e(2755,`Tipo de gr\xE1fico que exibe os dados de modo quantitativo, utilizando linhas cont\xEDnuas demarcadas por pontos para cada valor de s\xE9rie definido.
Similar ao gr\xE1fico de linha, diferencia-se pela \xE1rea localizada abaixo da linha das s\xE9ries, que \xE9 preenchida com cores para um destaque expl\xEDcita da evolu\xE7\xE3o e mudan\xE7a dos dados.`),t()()(),n(2756,"tr",15)(2757,"td",16)(2758,"div",17)(2759,"span",18),e(2760," Donut"),o(2761,"br"),t()()(),n(2762,"td",23)(2763,"p"),e(2764,"Exibe os dados em formato de rosca, dividindo em partes proporcionais."),t()()(),n(2765,"tr",15)(2766,"td",16)(2767,"div",17)(2768,"span",18),e(2769," Pie"),o(2770,"br"),t()()(),n(2771,"td",23)(2772,"p"),e(2773,"Exibe os dados em formato circular, dividindo proporcionalmente em fatias."),t()()(),n(2774,"tr",15)(2775,"td",16)(2776,"div",17)(2777,"span",18),e(2778," Line"),o(2779,"br"),t()()(),n(2780,"td",23)(2781,"p"),e(2782,`Gr\xE1fico que mostra os dados de modo linear e cont\xEDnuo. \xC9 \xFAtil, por exemplo, para fazer compara\xE7\xF5es de tend\xEAncia durante determinado per\xEDodo.
Pode ser utilizado em conjunto com gr\xE1ficos dos tipos `),n(2783,"code"),e(2784,"column"),t(),e(2785," e "),n(2786,"code"),e(2787,"area"),t(),e(2788,", definindo-se o tipo atrav\xE9s da propriedade "),n(2789,"code"),e(2790,"PoChartSerie.type"),t(),e(2791,"."),t()()(),n(2792,"tr",15)(2793,"td",16)(2794,"div",17)(2795,"span",18),e(2796," Column"),o(2797,"br"),t()()(),n(2798,"td",23)(2799,"p"),e(2800,`Gr\xE1fico que exibe os dados em forma de barras verticais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo entre diversas s\xE9ries.
As s\xE9ries s\xE3o exibidas lado-a-lado, com um pequeno espa\xE7o entre elas.`),t()()(),n(2801,"tr",15)(2802,"td",16)(2803,"div",17)(2804,"span",18),e(2805," Bar"),o(2806,"br"),t()()(),n(2807,"td",23)(2808,"p"),e(2809,"Gr\xE1fico que exibe os dados em forma de barras horizontais e sua extens\xE3o varia de acordo com seus valores. \xC9 comumente usado como comparativo de s\xE9ries e categorias."),t()()(),n(2810,"tr",15)(2811,"td",16)(2812,"div",17)(2813,"span",18),e(2814," Gauge"),o(2815,"br"),t()()(),n(2816,"td",23)(2817,"p"),e(2818,"Gr\xE1fico que prov\xEA a representa\xE7\xE3o de um valor atrav\xE9s de um arco. Possui dois tipos de tratamentos:"),t(),n(2819,"ul")(2820,"li"),e(2821,"\xC9 poss\xEDvel demonstrar um dado percentual simples em conjunto com uma descri\xE7\xE3o resumida em seu interior;"),t(),n(2822,"li"),e(2823,"Para um demonstrativo mais elaborado, consegue-se definir alcances em cores, um breve texto descritivo e um ponteiro indicando o valor desejado."),t()()()(),n(2824,"tr",15)(2825,"td",16)(2826,"div",17)(2827,"span",18),e(2828," Radar"),o(2829,"br"),t()()(),n(2830,"td",23)(2831,"p"),e(2832,"Tipo de gr\xE1fico utilizado para visualizar e comparar o desempenho de diferentes itens em m\xFAltiplas categorias."),t()()()()())},dependencies:[M],encapsulation:2})}return r})();var Ae=(()=>{class r{route;router;sub;hidePoWebSample=!0;samplesLength=7;activeTab="doc";actions=[{label:"Documenta\xE7\xE3o",action:this.goBack.bind(this),icon:"an an-file-text"},{label:"Colabore",action:this.improveDocs.bind(this)}];constructor(l,d){this.route=l,this.router=d}goBack(){this.router.navigate(["documentation"])}improveDocs(){this.router.navigate(["guides/development-flow"])}ngOnInit(){this.sub=this.route.queryParams.subscribe(l=>{let d=l.view;this.activeTab=d||"doc",this.hidePoWebSample=this.samplesLength===0})}changeTab(l){this.router.navigate([],{queryParams:{view:l},queryParamsHandling:"merge"}),this.activeTab=l}ngOnDestroy(){this.sub.unsubscribe()}static \u0275fac=function(d){return new(d||r)(Y(ie),Y(oe))};static \u0275cmp=C({type:r,selectors:[["ng-component"]],standalone:!1,decls:12,vars:4,consts:[["p-title","Chart",3,"p-actions"],["p-size","1"],["p-label","Documenta\xE7\xE3o",3,"p-click","p-active"],["p-label","Exemplos",3,"p-click","p-hide","p-active"]],template:function(d,i){d&1&&(n(0,"po-page-default",0)(1,"po-tabs",1)(2,"po-tab",2),u("p-click",function(){return i.changeTab("doc")}),o(3,"sample-po-chart-doc"),t(),n(4,"po-tab",3),u("p-click",function(){return i.changeTab("web")}),o(5,"sample-po-chart-basic-view")(6,"sample-po-chart-labs-view")(7,"sample-po-chart-coffee-ranking-view")(8,"sample-po-chart-stacked-view")(9,"sample-po-chart-summary-view")(10,"sample-po-chart-world-exports-view")(11,"sample-po-chart-technology-skill-view"),t()()()),d&2&&(c("p-actions",i.actions),p(2),c("p-active",i.activeTab==="doc"),p(2),c("p-hide",i.hidePoWebSample)("p-active",i.activeTab==="web"))},dependencies:[he,w,L,xe,fe,ve,Pe,we,Me,De,Ve],encapsulation:2})}return r})();var yt=[{path:"",component:Ae}],Re=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=Z({type:r});static \u0275inj=H({imports:[j.forChild(yt),j]})}return r})();var xn=(()=>{class r{static \u0275fac=function(d){return new(d||r)};static \u0275mod=Z({type:r});static \u0275inj=H({imports:[Se,Re]})}return r})();export{xn as DocPoChartModule};
