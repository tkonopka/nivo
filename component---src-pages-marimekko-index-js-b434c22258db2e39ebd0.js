(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"3RCi":function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return M})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return x}));n("UKgA");var i=n("mXGw"),r=n.n(i),o=n("5QYd"),a=n("ySTC"),c=n("FFEP"),l=n("edSL"),s=n.n(l),u=n("aBO9"),d=n("wbYc"),f=n("llhf"),m=n("fWs0"),p=n("56Mt");function h(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={layout:"vertical",offset:"none",outerPadding:0,innerPadding:3,layers:["grid","axes","bars","legends"],enableGridX:!1,enableGridY:!0,colors:{scheme:"nivo"},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,animate:!0,motionConfig:"gentle"};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={expand:u.A,diverging:u.z,none:u.B,silouhette:u.C,wiggle:u.D},k=function(e){var t=e.data,n=e.id,r=e.value,a=e.valueFormat,c=e.dimensions,l=e.layout,m=e.offset,p=e.outerPadding,h=e.innerPadding,g=e.colors,y=e.borderColor,b=e.borderWidth,k=e.width,O=e.height,w=function(e){return Object(i.useMemo)((function(){var t={},n=[];return e.forEach((function(e){n.push(e.id),t[e.id]="function"==typeof e.value?e.value:function(t){return s()(t,e.value,0)}})),{dimensionIds:n,dimensions:t}}),[e])}(c),j=w.dimensionIds,P=function(e,t){return Object(i.useMemo)((function(){var n=e(t),i=[];return n.forEach((function(e){e.forEach((function(e){i.push(e[0]),i.push(e[1])}))})),{stacked:n,min:Math.min.apply(Math,i),max:Math.max.apply(Math,i)}}),[e,t])}(function(e,t,n){return Object(i.useMemo)((function(){var i=x[n];return Object(u.y)().keys(e).value((function(e,n){return t[n](e)})).offset(i)}),[e,t,n])}(j,w.dimensions,m),t),E=P.stacked,M=P.min,C=P.max,S=function(e,t,n){var r="function"==typeof t?t:function(e){return s()(e,t)},o="function"==typeof n?n:function(e){return s()(e,n,0)};return Object(i.useMemo)((function(){var t=[];return e.forEach((function(e,n){var i=r(e),a=o(e);t.push({index:n,id:i,value:a,data:e})})),t}),[e,r,o])}(t,n,r),T=function(e){var t=e.data,n=e.width,r=e.height,o=e.layout,a=e.outerPadding,c=e.innerPadding;return Object(i.useMemo)((function(){var e=t.reduce((function(e,t){return e+t.value}),0),i=Object(d.b)().domain([0,e]),l=2*a+(t.length-1)*c;return"vertical"===o?i.range([0,n-l]):i.range([0,r-l]),i}),[t,n,r,o])}({data:S,width:k,height:O,layout:l,outerPadding:p,innerPadding:h}),D=function(e,t,n,r,o){return Object(i.useMemo)((function(){return"vertical"===o?Object(d.b)().domain([t,e]).range([0,r]):Object(d.b)().domain([e,t]).range([0,n])}),[e,t,n,r,o])}(M,C,k,O,l),I=function(e){var t=e.data,n=e.stacked,r=e.dimensionIds,a=e.valueFormat,c=e.thicknessScale,l=e.dimensionsScale,s=e.colors,u=e.layout,d=e.outerPadding,m=e.innerPadding,p=Object(f.s)(s,"id"),h=Object(o.tb)(a);return Object(i.useMemo)((function(){var e=[],i=d;return t.forEach((function(t){var o=c(t.value),a=v(v({},t),{},{x:"vertical"===u?i:0,y:"vertical"===u?0:i,width:"vertical"===u?o:0,height:"vertical"===u?0:o,dimensions:[]}),s=[],d=0;i+=o+m,r.forEach((function(e){var i=n.find((function(t){return t.key===e}));if(i){var r=i[t.index],o={id:e,datum:a,value:r[1]-r[0],formattedValue:h(r[1]-r[0]),color:"rgba(0, 0, 0, 0)",x:0,y:0,width:0,height:0},c=l(r[0]),f=l(r[1]);"vertical"===u?(o.x=a.x,o.y=Math.min(c,f),o.width=a.width,o.height=Math.max(c,f)-o.y,s.push(o.y),d+=o.height):(o.x=Math.min(c,f),o.y=a.y,o.width=Math.max(c,f)-o.x,o.height=a.height,s.push(o.x),d+=o.width),o.color=p(o),a.dimensions.push(o)}"vertical"===u?(a.y=Math.min.apply(Math,s),a.height=d):(a.x=Math.min.apply(Math,s),a.width=d)})),e.push(a)})),e}),[t,n,r,c,l,u,d,m,p,h])}({data:S,stacked:E,dimensionIds:j,valueFormat:a,thicknessScale:T,dimensionsScale:D,colors:g,layout:l,outerPadding:p,innerPadding:h});return{computedData:I,bars:function(e,t,n){var r=Object(o.sb)(),a=Object(f.r)(t,r);return Object(i.useMemo)((function(){var t=[];return e.forEach((function(e){e.dimensions.forEach((function(i){t.push(v(v({key:"".concat(e.id,"-").concat(i.id)},i),{},{borderColor:a(i),borderWidth:n}))}))})),t}),[e,n,a])}(I,y,b),thicknessScale:T,dimensionsScale:D,dimensionIds:j}},O=function(e){var t,n=e.bar,o=e.animatedProps,a=e.isInteractive,c=e.tooltip,l=e.onClick,s=e.onMouseEnter,u=e.onMouseMove,d=e.onMouseLeave,f=Object(p.i)(),h=f.showTooltipFromEvent,g=f.hideTooltip,y=Object(i.useCallback)((function(e){return h(Object(i.createElement)(c,{bar:n}),e)}),[h,c,n]),b=Object(i.useCallback)((function(e){null==l||l(n,e)}),[l,n]),v=Object(i.useCallback)((function(e){null==s||s(n,e),y(e)}),[y,n]),x=Object(i.useCallback)((function(e){null==u||u(n,e),y(e)}),[y,n]),k=Object(i.useCallback)((function(e){null==d||d(n,e),g()}),[d,n,g]);return r.a.createElement(m.animated.rect,{x:o.x,y:o.y,width:Object(m.to)(o.width,(function(e){return Math.max(e,0)})),height:Object(m.to)(o.height,(function(e){return Math.max(e,0)})),fill:null!==(t=n.fill)&&void 0!==t?t:o.color,stroke:o.borderColor,strokeWidth:n.borderWidth,onClick:a?b:void 0,onMouseEnter:a?v:void 0,onMouseMove:a?x:void 0,onMouseLeave:a?k:void 0})},w=function(e){var t=e.bars,n=e.isInteractive,i=e.tooltip,a=e.onClick,c=e.onMouseEnter,l=e.onMouseMove,s=e.onMouseLeave,u=Object(o.qb)(),d=u.animate,f=u.config,p=Object(m.useTransition)(t,{keys:function(e){return e.key},initial:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:1,borderColor:e.borderColor}},from:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:0,borderColor:e.borderColor}},enter:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:1,borderColor:e.borderColor}},update:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.color,opacity:1,borderColor:e.borderColor}},leave:function(e){return{opacity:0,x:e.x,y:e.y,width:e.width,height:e.height,color:e.color}},config:f,immediate:!d});return r.a.createElement(r.a.Fragment,null,p((function(e,t){return r.a.createElement(O,{key:t.key,bar:t,animatedProps:e,isInteractive:n,tooltip:i,onClick:a,onMouseEnter:c,onMouseMove:l,onMouseLeave:s})})))},j=function(e){var t=e.bar;return r.a.createElement(p.a,{id:"".concat(t.datum.id," - ").concat(t.id),value:t.formattedValue,enableChip:!0,color:t.color})},P=function(e){var t=e.data,n=e.id,l=e.value,s=e.valueFormat,u=e.dimensions,d=e.width,f=e.height,m=e.margin,p=e.layout,h=void 0===p?g.layout:p,y=e.offset,b=void 0===y?g.offset:y,v=e.outerPadding,x=void 0===v?g.outerPadding:v,O=e.innerPadding,P=void 0===O?g.innerPadding:O,E=e.layers,M=void 0===E?g.layers:E,C=e.axisTop,S=e.axisRight,T=e.axisBottom,D=e.axisLeft,I=e.enableGridX,q=void 0===I?g.enableGridX:I,B=e.gridXValues,V=e.enableGridY,W=void 0===V?g.enableGridY:V,R=e.gridYValues,Y=e.colors,X=void 0===Y?g.colors:Y,F=e.defs,z=void 0===F?[]:F,A=e.fill,G=void 0===A?[]:A,L=e.borderWidth,H=void 0===L?g.borderWidth:L,N=e.borderColor,Z=void 0===N?g.borderColor:N,_=e.isInteractive,J=void 0===_?g.isInteractive:_,Q=e.tooltip,U=void 0===Q?j:Q,K=e.onClick,$=e.onMouseEnter,ee=e.onMouseMove,te=e.onMouseLeave,ne=e.legends,ie=void 0===ne?[]:ne,re=e.role,oe=Object(o.ob)(d,f,m),ae=oe.outerWidth,ce=oe.outerHeight,le=oe.margin,se=oe.innerWidth,ue=oe.innerHeight,de=k({data:t,id:n,value:l,dimensions:u,valueFormat:s,layout:h,offset:b,outerPadding:x,innerPadding:P,colors:X,borderColor:Z,borderWidth:H,width:se,height:ue}),fe=de.computedData,me=de.bars,pe=de.thicknessScale,he=de.dimensionsScale,ge=de.dimensionIds,ye={grid:null,axes:null,bars:null,legends:null},be=Object(o.r)(z,me,G);M.includes("bars")&&(ye.bars=r.a.createElement(w,{key:"bars",bars:me,isInteractive:J,tooltip:U,onClick:K,onMouseEnter:$,onMouseMove:ee,onMouseLeave:te}));var ve="vertical"===h?pe:he,xe="vertical"===h?he:pe;M.includes("grid")&&(ye.grid=r.a.createElement(a.c,{key:"grid",xScale:q?ve:void 0,yScale:W?xe:void 0,width:se,height:ue,xValues:B,yValues:R})),M.includes("axes")&&(ye.axes=r.a.createElement(a.a,{key:"axes",xScale:ve,yScale:xe,width:se,height:ue,top:C,right:S,bottom:T,left:D}));var ke=function(e,t){var n=[];return e.forEach((function(e){var i=t.find((function(t){return t.id===e}));i&&n.push({id:e,label:e,color:i.color,fill:i.fill})})),n}(ge,me);M.includes("legends")&&(ye.legends=r.a.createElement("g",{key:"legends"},ie.map((function(e,t){return r.a.createElement(c.j,Object.assign({key:t},e,{containerWidth:se,containerHeight:ue,data:ke}))}))));var Oe=function(e){var t=e.data,n=e.bars,r=e.thicknessScale,o=e.dimensionsScale;return Object(i.useMemo)((function(){return{data:t,bars:n,thicknessScale:r,dimensionsScale:o}}),[t,n,r,o])}({data:fe,bars:me,thicknessScale:pe,dimensionsScale:he});return r.a.createElement(o.l,{width:ae,height:ce,margin:le,defs:be,role:re},M.map((function(e,t){return void 0!==ye[e]?ye[e]:"function"==typeof e?r.a.createElement(i.Fragment,{key:t},Object(i.createElement)(e,Oe)):null})))},E=function(e){var t=e.isInteractive,n=void 0===t?g.isInteractive:t,i=e.animate,a=void 0===i?g.animate:i,c=e.motionConfig,l=void 0===c?g.motionConfig:c,s=h(e,["isInteractive","animate","motionConfig"]);return r.a.createElement(o.b,{theme:s.theme,isInteractive:n,animate:a,motionConfig:l},r.a.createElement(P,Object.assign({isInteractive:n,animate:a,motionConfig:l},s)))},M=function(e){return r.a.createElement(o.k,null,(function(t){var n=t.width,i=t.height;return r.a.createElement(E,Object.assign({width:n,height:i},e))}))}},JCgZ:function(e,t,n){var i=n("VPOt"),r=n("/Qyy"),o=n("UzdM"),a=parseFloat,c=Math.min,l=Math.random;e.exports=function(e,t,n){if(n&&"boolean"!=typeof n&&r(e,t,n)&&(t=n=void 0),void 0===n&&("boolean"==typeof t?(n=t,t=void 0):"boolean"==typeof e&&(n=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=o(e),void 0===t?(t=e,e=0):t=o(t)),e>t){var s=e;e=t,t=s}if(n||e%1||t%1){var u=l();return c(e+u*(t-e+a("1e-"+((u+"").length-1))),t)}return i(e,t)}},VPOt:function(e,t){var n=Math.floor,i=Math.random;e.exports=function(e,t){return e+n(i()*(t-e+1))}},nLLr:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return s}));var i=n("PWxN"),r=n.n(i),o=n("KXzt"),a=n.n(o),c=function(e,t){var n=(void 0===t?{}:t).exclude,i=void 0===n?[]:n;return function(t,n){void 0===n&&(n={});var o={};return Object.keys(t).forEach((function(i){e[i]&&(o[i]=e[i](t[i],t,n))})),Object.assign({},r()(t,i),o)}},l=function(e){return function(t,n){return n["axis"+a()(e)].enable?r()(t,["enable"]):null}},s=function(e){var t=e.format;return!0===e.enabled?t:void 0}},xZ4X:function(e,t,n){"use strict";n.r(t);var i=n("PWxN"),r=n.n(i),o=n("JCgZ"),a=n.n(o),c=n("mXGw"),l=n.n(c),s=n("3RCi"),u=n("ZS2m"),d=n("7zDm"),f=n.n(d),m=n("UutA"),p=n("5QYd"),h=n("nLLr"),g=m.d.div.withConfig({displayName:"mapper__TooltipWrapper",componentId:"sc-1pr2a6w-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:12px;background:#333;padding:12px 16px;font-size:12px;border-radius:2px;"]),y=m.d.span.withConfig({displayName:"mapper__TooltipKey",componentId:"sc-1pr2a6w-1"})([""]),b=m.d.span.withConfig({displayName:"mapper__TooltipValue",componentId:"sc-1pr2a6w-2"})(["font-weight:600;"]),v=function(e){var t=e.bar;return l.a.createElement(g,{style:{color:t.color}},l.a.createElement(y,null,"datum.id"),l.a.createElement(b,null,t.datum.id),l.a.createElement(y,null,"id"),l.a.createElement(b,null,t.id),l.a.createElement(y,null,"value"),l.a.createElement(b,null,t.value),l.a.createElement(y,null,"color"),l.a.createElement(b,null,t.color),l.a.createElement(y,null,"thickness"),l.a.createElement(b,null,t.datum.thickness))},x=Object(h.c)({valueFormat:h.b,axisTop:Object(h.a)("top"),axisRight:Object(h.a)("right"),axisBottom:Object(h.a)("bottom"),axisLeft:Object(h.a)("left"),tooltip:function(e,t){if(t["custom tooltip example"])return v},defs:function(e,t){if(t["showcase pattern usage"])return[Object(p.W)("lines",{background:"rgba(0, 0, 0, 0)",color:"inherit",rotation:-45,lineWidth:4,spacing:8})]},fill:function(e,t){if(t["showcase pattern usage"])return[{match:{id:"agree strongly"},id:"lines"},{match:{id:"disagree strongly"},id:"lines"}]}},{exclude:["custom tooltip example","showcase pattern usage"]}),k=n("Eo5u"),O=n("RQLE"),w=[{key:"data",group:"Base",help:"Chart data, which should be immutable.",description:"\n            The data doesn't have to conform to a specific schema,\n            it's gonna depend on how you configure `id`, `value`\n            and `dimensions`.\n        ",type:"RawDatum[]",required:!0},{key:"id",group:"Base",help:"ID accessor.",description:"\n            Define how to access the ID of each datum,\n            by default, nivo will look for the `id` property.\n        ",type:"string | (datum: RawDatum): string | number",required:!0},{key:"value",group:"Base",help:"Value accessor.",description:"\n            Define how to access the value of each datum,\n            which will dictate the thickness of the bars,\n            by default, nivo will look for the `value` property.\n        ",type:"string | (datum: RawDatum): number",required:!0},{key:"dimensions",group:"Base",help:"Data dimensions configuration.",type:"{ id: string, value: string | (datum: RawDatum) => number }",required:!0},{key:"valueFormat",group:"Base",help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n            \n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",required:!1,type:"string | (value: number) => string | number",controlType:"valueFormat"},{key:"layout",help:"How to display bars.",type:"string",required:!1,defaultValue:s.c.layout,controlType:"radio",group:"Base",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"offset",help:"Offset type.",type:"OffsetId",required:!1,controlType:"choices",group:"Base",defaultValue:s.c.offset,controlOptions:{choices:Object.keys(s.d).map((function(e){return{label:e,value:e}}))}},{key:"outerPadding",help:"Space before the first bar and after the last one.",type:"number",required:!1,defaultValue:s.c.outerPadding,controlType:"range",group:"Base",controlOptions:{min:0,max:20,unit:"px"}},{key:"innerPadding",help:"Space between bars.",type:"number",required:!1,defaultValue:s.c.innerPadding,controlType:"range",group:"Base",controlOptions:{min:0,max:20,unit:"px"}},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using\n            `<ResponsiveMarimekko />`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using\n            `<ResponsiveMarimekko />`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},O.f,{key:"colors",help:"Defines color range.",type:"string | Function | string[]",required:!1,defaultValue:s.c.colors,controlType:"ordinalColors",group:"Style"}].concat(Object(k.a)(Object(O.b)("Style",["svg","api"])),[{key:"showcase pattern usage",flavors:["svg"],help:"Patterns.",description:"\n            You can use `defs` and `fill` properties\n            to use patterns, see\n            [dedicated guide](self:/guides/patterns)\n            for further information.\n        ",type:"boolean",controlType:"switch",group:"Style"},{key:"borderWidth",help:"Slices border width.",type:"number",required:!1,defaultValue:s.c.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",type:"string | object | Function",required:!1,defaultValue:s.c.borderColor,controlType:"inheritedColor",group:"Style"}],Object(k.a)(Object(O.a)()),[{key:"enableGridX",help:"Enable/disable x grid.",type:"boolean",required:!1,defaultValue:s.c.enableGridX,controlType:"switch",group:"Grid & Axes"},{key:"gridXValues",group:"Grid & Axes",help:"Specify values to use for vertical grid lines.",type:"number[]",required:!1},{key:"enableGridY",help:"Enable/disable y grid.",type:"boolean",required:!1,defaultValue:s.c.enableGridY,controlType:"switch",group:"Grid & Axes"},{key:"gridYValues",group:"Grid & Axes",help:"Specify values to use for horizontal grid lines.",type:"number[]",required:!1},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",description:"\n            You can also use this to insert extra layers\n            to the chart, the extra layer must be a component.\n            \n            The layer component which will receive the chart's\n            context & computed data and must return a valid SVG element\n            for the `Marimekko` component.\n            \n            The props passed to layers have the following structure:\n            \n            ```\n            {\n                data: ComputedDatum<RawDatum>[]\n                bars: BarDatum<RawDatum>[]\n                thicknessScale: ScaleLinear<number, number>\n                dimensionsScale: ScaleLinear<number, number>\n            }\n            ```\n        ",required:!1,type:"Array<string | Function>",defaultValue:s.c.layers},{key:"isInteractive",flavors:["svg"],group:"Interactivity",help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:s.c.isInteractive,controlType:"switch"},{key:"onClick",flavors:["svg"],group:"Interactivity",help:"onClick handler, it receives target bar data and mouse event.",type:"(bar: BarDatum<RawDatum>, event: MouseEvent) => void",required:!1},{key:"onMouseEnter",flavors:["svg"],group:"Interactivity",help:"onMouseEnter handler, it receives target bar data and mouse event.",type:"(bar: BarDatum<RawDatum>, event: MouseEvent) => void",required:!1},{key:"onMouseMove",flavors:["svg"],group:"Interactivity",help:"onMouseMove handler, it receives target bar data and mouse event.",type:"(bar: BarDatum<RawDatum>, event: MouseEvent) => void",required:!1},{key:"onMouseLeave",flavors:["svg"],group:"Interactivity",help:"onMouseLeave handler, it receives target bar data and mouse event.",type:"(bar: BarDatum<RawDatum>, event: MouseEvent) => void",required:!1},{key:"tooltip",group:"Interactivity",type:"Component",required:!1,help:"Custom tooltip component",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML element and will receive\n            the following props:\n            \n            ```\n            {\n                bar: BarDatum<RawDatum>\n            }\n            ```\n            \n            You can also customize the style of the tooltip using\n            the `theme.tooltip` object.\n        "},{key:"custom tooltip example",help:"Showcase custom tooltip.",type:"boolean",controlType:"switch",group:"Interactivity"}],Object(k.a)(Object(O.e)(["svg"],s.c,"react-spring")),[{key:"legends",flavors:["svg"],type:"Legend[]",help:"Optional chart's legends.",group:"Legends",controlType:"array",controlOptions:{props:Object(O.c)(["svg"]),shouldCreate:!0,addLabel:"add legend",shouldRemove:!0,getItemTitle:function(e,t){return"legend["+e+"]: "+t.anchor+", "+t.direction},defaults:{anchor:"top-left",direction:"column",justify:!1,translateX:0,translateY:0,itemWidth:100,itemHeight:20,itemsSpacing:0,symbolSize:20,itemDirection:"left-to-right",onClick:function(e){alert(JSON.stringify(e,null,"    "))}}}}]),j=Object(O.d)(w),P=function(){return a()(0,32)},E=function(){return["it's good","it's sweet","it's spicy","worth eating","worth buying"].map((function(e){return{statement:e,participation:P(),stronglyAgree:P(),agree:P(),disagree:P(),stronglyDisagree:P()}}))},M={id:"statement",value:"participation",dimensions:[{id:"disagree strongly",value:"stronglyDisagree"},{id:"disagree",value:"disagree"},{id:"agree",value:"agree"},{id:"agree strongly",value:"stronglyAgree"}],layout:s.c.layout,offset:s.c.offset,outerPadding:s.c.outerPadding,innerPadding:9,axisTop:{enable:!1,orient:"top",tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:36},axisRight:{enable:!0,orient:"right",tickSize:5,tickPadding:5,tickRotation:0,legend:"",legendOffset:0},axisBottom:{enable:!0,orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"participation",legendOffset:36,legendPosition:"middle"},axisLeft:{enable:!0,orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"opinions",legendOffset:-40,legendPosition:"middle"},enableGridX:s.c.enableGridX,enableGridY:s.c.enableGridY,margin:{top:40,right:80,bottom:100,left:80},valueFormat:{format:"",enabled:!1},colors:{scheme:"spectral"},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},isInteractive:!0,"custom tooltip example":!1,tooltip:null,"showcase pattern usage":!0,defs:[],fill:[],animate:s.c.animate,motionConfig:s.c.motionConfig,legends:[{anchor:"bottom",direction:"row",justify:!1,translateX:0,translateY:80,itemsSpacing:0,itemWidth:140,itemHeight:18,itemTextColor:"#999",itemDirection:"right-to-left",itemOpacity:1,symbolSize:18,symbolShape:"square",effects:[{on:"hover",style:{itemTextColor:"#000"}}]}]};t.default=function(){return l.a.createElement(u.a,{name:"Marimekko",meta:f.a.Marimekko,icon:"marimekko",flavors:f.a.flavors,currentFlavor:"svg",properties:j,initialProperties:M,defaultProperties:s.c,propertiesMapper:x,generateData:E},(function(e,t,n,i){return l.a.createElement(s.b,Object.assign({data:t},e,{theme:n,onClick:function(e){i({type:"click",label:"[bar] "+e.datum.id+" - "+e.id+": "+e.value,color:e.color,data:Object.assign({},r()(e,["datum"]),{datum:r()(e.datum,["dimensions"])})})},legends:e.legends.map((function(e){return Object.assign({},e)}))}))}))}},ySTC:function(e,t,n){"use strict";n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return P})),n.d(t,"e",(function(){return z})),n.d(t,"f",(function(){return X})),n.d(t,"g",(function(){return A}));var i=n("mXGw"),r=n.n(i),o=n("fWs0"),a=n("5QYd"),c=n("qsVS"),l=n("ibHE"),s=n("ZZWI"),u=n("W0B4"),d=n.n(u);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t=e.bandwidth();if(0===t)return e;var n=t/2;return e.round()&&(n=Math.round(n)),function(t){return e(t)+n}},g={millisecond:[c.e,c.v],second:[c.k,c.A],minute:[c.f,c.w],hour:[c.d,c.u],day:[c.a,c.s],week:[c.p,c.F],sunday:[c.l,c.B],monday:[c.g,c.x],tuesday:[c.n,c.D],wednesday:[c.o,c.E],thursday:[c.m,c.C],friday:[c.c,c.t],saturday:[c.j,c.z],month:[c.h,c.y],year:[c.r,c.G]},y=Object.keys(g),b=new RegExp("^every\\s*(\\d+)?\\s*(".concat(y.join("|"),")s?$"),"i"),v=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},x=function(e,t){if(Array.isArray(t))return t;if(e.ticks){if(void 0===t)return e.ticks();if(v(t))return e.ticks(t);if("string"==typeof t){var n=t.match(b);if(n){var i=g[n[2]][e.useUTC?1:0];return void 0===n[1]?e.ticks(i):e.ticks(i.every(Number(n[1])))}throw new Error("Invalid tickValues: ".concat(t))}}return e.domain()},k=function(e){var t,n=e.axis,i=e.scale,r=e.ticksPosition,o=e.tickValues,c=e.tickSize,l=e.tickPadding,s=e.tickRotation,u=e.engine,d=void 0===u?"svg":u,f=x(i,o),m=a.ib[d],g=i.bandwidth?h(i):i,y={lineX:0,lineY:0},b={textX:0,textY:0},v="object"==typeof document&&"rtl"===document.dir,k=m.align.center,O=m.baseline.center;return"x"===n?(t=function(e){return{x:g(e),y:0}},y.lineY=c*("after"===r?1:-1),b.textY=(c+l)*("after"===r?1:-1),O="after"===r?m.baseline.top:m.baseline.bottom,0===s?k=m.align.center:"after"===r&&s<0||"before"===r&&s>0?(k=m.align[v?"left":"right"],O=m.baseline.center):("after"===r&&s>0||"before"===r&&s<0)&&(k=m.align[v?"right":"left"],O=m.baseline.center)):(t=function(e){return{x:0,y:g(e)}},y.lineX=c*("after"===r?1:-1),b.textX=(c+l)*("after"===r?1:-1),k="after"===r?m.align.left:m.align.right),{ticks:f.map((function(e){return p(p(p({key:"number"==typeof e||"string"==typeof e?e:"".concat(e),value:e},t(e)),y),b)})),textAlign:k,textBaseline:O}},O=function(e,t){if(!e||"function"==typeof e)return e;if("time"===t.type){var n=Object(l.a)(e);return function(e){return n(new Date(e))}}return Object(s.a)(e)},w=function(e){var t,n=e.width,i=e.height,r=e.scale,o=e.axis,a=e.values,c=Array.isArray(a)?a:void 0,l=v(a)?a:void 0,s=c||x(r,l),u=r.bandwidth?h(r):r;return"x"===o?t=s.map((function(e){return{key:"".concat(e),x1:u(e),x2:u(e),y1:0,y2:i}})):"y"===o&&(t=s.map((function(e){return{key:"".concat(e),x1:0,x2:n,y1:u(e),y2:u(e)}}))),t},j={ticksPosition:d.a.oneOf(["before","after"]),tickValues:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.oneOfType([d.a.number,d.a.string,d.a.instanceOf(Date)])),d.a.string]),tickSize:d.a.number,tickPadding:d.a.number,tickRotation:d.a.number,format:d.a.oneOfType([d.a.func,d.a.string]),renderTick:d.a.func,legend:d.a.node,legendPosition:d.a.oneOf(["start","middle","end"]),legendOffset:d.a.number,ariaHidden:d.a.bool},P=d.a.shape(j),E=function(e){var t=e.value,n=e.format,i=e.lineX,c=e.lineY,l=e.onClick,s=e.textBaseline,u=e.textAnchor,d=e.animatedProps,f=Object(a.sb)(),m=t;void 0!==n&&(m=n(m));var p={opacity:d.opacity};return l&&(p.cursor="pointer"),r.a.createElement(o.animated.g,Object.assign({transform:d.transform},l?{onClick:function(e){return l(e,m)}}:{},{style:p}),r.a.createElement("line",{x1:0,x2:i,y1:0,y2:c,style:f.axis.ticks.line}),r.a.createElement(o.animated.text,{dominantBaseline:s,textAnchor:u,transform:d.textTransform,style:f.axis.ticks.text},m))};E.defaultProps={opacity:1,rotate:0};var M=function(e){var t=e.axis,n=e.scale,c=e.x,l=e.y,s=e.length,u=e.ticksPosition,d=e.tickValues,f=e.tickSize,m=e.tickPadding,h=e.tickRotation,g=e.format,y=e.renderTick,b=e.legend,v=e.legendPosition,x=e.legendOffset,w=e.onClick,j=e.ariaHidden,P=Object(a.sb)(),E=Object(i.useMemo)((function(){return O(g,n)}),[g,n]),M=k({axis:t,scale:n,ticksPosition:u,tickValues:d,tickSize:f,tickPadding:m,tickRotation:h}),C=M.ticks,S=M.textAlign,T=M.textBaseline,D=null;if(void 0!==b){var I,q=0,B=0,V=0;"y"===t?(V=-90,q=x,"start"===v?(I="start",B=s):"middle"===v?(I="middle",B=s/2):"end"===v&&(I="end")):(B=x,"start"===v?I="start":"middle"===v?(I="middle",q=s/2):"end"===v&&(I="end",q=s)),D=r.a.createElement("text",{transform:"translate(".concat(q,", ").concat(B,") rotate(").concat(V,")"),textAnchor:I,style:p({dominantBaseline:"central"},P.axis.legend.text)},b)}var W=Object(a.qb)(),R=W.animate,Y=W.config,X=Object(o.useSpring)({transform:"translate(".concat(c,",").concat(l,")"),lineX2:"x"===t?s:0,lineY2:"x"===t?0:s,config:Y,immediate:!R}),F=Object(o.useTransition)(C,{key:function(e){return e.key},initial:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(h,")")}},from:function(e){return{opacity:0,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(h,")")}},enter:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(h,")")}},update:function(e){return{opacity:1,transform:"translate(".concat(e.x,",").concat(e.y,")"),textTransform:"translate(".concat(e.textX,",").concat(e.textY,") rotate(").concat(h,")")}},leave:{opacity:0},config:Y,immediate:!R});return r.a.createElement(o.animated.g,{transform:X.transform,"aria-hidden":j},F((function(e,t,n,i){return r.a.createElement(y,p(p({tickIndex:i,format:E,rotate:h,textBaseline:T,textAnchor:S,animatedProps:e},t),w?{onClick:w}:{}))})),r.a.createElement(o.animated.line,{style:P.axis.domain.line,x1:0,x2:X.lineX2,y1:0,y2:X.lineY2}),D)};M.defaultProps={x:0,y:0,tickSize:5,tickPadding:5,tickRotation:0,renderTick:Object(i.memo)(E),legendPosition:"end",legendOffset:0};var C=Object(i.memo)(M),S=["top","right","bottom","left"],T=function(e){var t=e.xScale,n=e.yScale,i=e.width,o=e.height,a={top:e.top,right:e.right,bottom:e.bottom,left:e.left};return S.map((function(e){var c=a[e];if(!c)return null;var l="top"===e||"bottom"===e,s="top"===e||"left"===e?"before":"after";return r.a.createElement(C,Object.assign({key:e},c,{axis:l?"x":"y",x:"right"===e?i:0,y:"bottom"===e?o:0,scale:l?t:n,length:l?i:o,ticksPosition:s}))}))},D=Object(i.memo)(T),I=function(e){var t=e.animatedProps,n=Object(a.sb)();return r.a.createElement(o.animated.line,Object.assign({},t,n.grid.line))};I.defaultProps={x1:0,x2:0,y1:0,y2:0};var q=Object(i.memo)(I),B=function(e){var t=e.lines,n=Object(a.qb)(),i=n.animate,c=n.config,l=Object(o.useTransition)(t,{key:function(e){return e.key},initial:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},from:function(e){return{opacity:0,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},enter:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},update:function(e){return{opacity:1,x1:e.x1,x2:e.x2,y1:e.y1,y2:e.y2}},leave:{opacity:0},config:c,immediate:!i});return r.a.createElement("g",null,l((function(e,t){return r.a.createElement(q,Object.assign({},t,{key:t.key,animatedProps:e}))})))},V=Object(i.memo)(B),W=function(e){var t=e.width,n=e.height,o=e.xScale,a=e.yScale,c=e.xValues,l=e.yValues,s=Object(i.useMemo)((function(){return!!o&&w({width:t,height:n,scale:o,axis:"x",values:c})}),[o,c,t,n]),u=!!a&&w({width:t,height:n,scale:a,axis:"y",values:l});return r.a.createElement(r.a.Fragment,null,s&&r.a.createElement(V,{type:"x",lines:s}),u&&r.a.createElement(V,{type:"y",lines:u}))},R=Object(i.memo)(W),Y=function(e){return e*Math.PI/180},X=function(e,t){var n=t.axis,i=t.scale,r=t.x,o=void 0===r?0:r,a=t.y,c=void 0===a?0:a,l=t.length,s=t.ticksPosition,u=t.tickValues,d=t.tickSize,f=void 0===d?5:d,m=t.tickPadding,p=void 0===m?5:m,h=t.tickRotation,g=void 0===h?0:h,y=t.format,b=t.legend,v=t.legendPosition,x=void 0===v?"end":v,O=t.legendOffset,w=void 0===O?0:O,j=t.theme,P=k({axis:n,scale:i,ticksPosition:s,tickValues:u,tickSize:f,tickPadding:p,tickRotation:g,engine:"canvas"}),E=P.ticks,M=P.textAlign,C=P.textBaseline;if(e.save(),e.translate(o,c),e.textAlign=M,e.textBaseline=C,e.font="".concat(j.axis.ticks.text.fontSize,"px ").concat(j.axis.ticks.text.fontFamily),j.axis.domain.line.strokeWidth>0&&(e.lineWidth=j.axis.domain.line.strokeWidth,e.lineCap="square",e.strokeStyle=j.axis.domain.line.stroke,e.beginPath(),e.moveTo(0,0),e.lineTo("x"===n?l:0,"x"===n?0:l),e.stroke()),E.forEach((function(t){j.axis.ticks.line.strokeWidth>0&&(e.lineWidth=j.axis.ticks.line.strokeWidth,e.lineCap="square",e.strokeStyle=j.axis.ticks.line.stroke,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.lineX,t.y+t.lineY),e.stroke());var n=void 0!==y?y(t.value):t.value;e.save(),e.translate(t.x+t.textX,t.y+t.textY),e.rotate(Y(g)),e.fillStyle=j.axis.ticks.text.fill,e.fillText(n,0,0),e.restore()})),void 0!==b){var S,T=0,D=0,I=0;"y"===n?(I=-90,T=w,"start"===x?(S="start",D=l):"middle"===x?(S="center",D=l/2):"end"===x&&(S="end")):(D=w,"start"===x?S="start":"middle"===x?(S="center",T=l/2):"end"===x&&(S="end",T=l)),e.translate(T,D),e.rotate(Y(I)),e.font="".concat(j.axis.legend.text.fontWeight?"".concat(j.axis.legend.text.fontWeight," "):"").concat(j.axis.legend.text.fontSize,"px ").concat(j.axis.legend.text.fontFamily),e.fillStyle=j.axis.legend.text.fill,e.textAlign=S,e.textBaseline="middle",e.fillText(b,0,0)}e.restore()},F=["top","right","bottom","left"],z=function(e,t){var n=t.xScale,i=t.yScale,r=t.width,o=t.height,a=t.top,c=t.right,l=t.bottom,s=t.left,u=t.theme,d={top:a,right:c,bottom:l,left:s};F.forEach((function(t){var a=d[t];if(!a)return null;var c="top"===t||"bottom"===t,l="top"===t||"left"===t?"before":"after",s=c?n:i,f=O(a.format,s);X(e,p(p({},a),{},{axis:c?"x":"y",x:"right"===t?r:0,y:"bottom"===t?o:0,scale:s,format:f,length:c?r:o,ticksPosition:l,theme:u}))}))},A=function(e,t){var n=t.width,i=t.height,r=t.scale,o=t.axis,a=t.values;w({width:n,height:i,scale:r,axis:o,values:a}).forEach((function(t){e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke()}))}}}]);
//# sourceMappingURL=component---src-pages-marimekko-index-js-b434c22258db2e39ebd0.js.map