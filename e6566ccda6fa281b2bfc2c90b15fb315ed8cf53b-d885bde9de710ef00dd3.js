(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{PQXq:function(e,t,n){"use strict";n.d(t,"a",(function(){return $})),n.d(t,"b",(function(){return G})),n.d(t,"c",(function(){return de})),n.d(t,"d",(function(){return he}));n("UKgA");var i=n("mXGw"),r=n("wMFK"),o=n("5QYd"),a=n("ySTC"),l=n("FFEP"),u=n("6SCL"),c=n("pu8f"),d=n("aBO9"),s=n("Uj2Y"),h=n.n(s),f=n("llhf"),b=n("W0B4"),y=n.n(b),p=n("oYCi"),g=n("56Mt"),m=n("QRkI");function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function k(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function w(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var W=function(e,t,n,i,r,o){return Object(c.a)(i,{all:e.map(t),min:0,max:0},r,o).padding(n)},R=function(e,t){return e.map((function(e){return j(j({},t.reduce((function(e,t){return e[t]=null,e}),{})),e)}))},P=function(e){return Object.keys(e).reduce((function(t,n){return e[n]&&(t[n]=e[n]),t}),{})},T=function(e,t){return e>t},L=function(e,t){return e<t},M=function(e){var t;return(t=[]).concat.apply(t,w(e))},q=function(e,t){return Array.from(" ".repeat(t-e),(function(t,n){return e+n}))},I=function(e){return T(e,0)?0:e},V=function(e,t,n,i){var r=e.data,o=e.getIndex,a=e.keys,l=e.getColor,u=e.innerPadding,c=e.xScale,d=e.yScale,s=n?L:T,h=r.map(P);return M(a.map((function(e,n){return q(0,c.domain().length).map((function(a){var f,b=c(o(r[a]))+t*n+u*n,y=(f=r[a][e],s(f,0)?d(f):i),p=function(e,t){return s(e,0)?i-t:d(e)-i}(r[a][e],y),g={id:e,value:r[a][e],index:a,indexValue:o(r[a]),data:h[a]};return{key:"".concat(e,".").concat(g.indexValue),data:g,x:b,y:y,width:t,height:p,color:l(g)}}))})))},E=function(e,t,n,i){var r=e.data,o=e.getIndex,a=e.keys,l=e.getColor,u=e.innerPadding,c=void 0===u?0:u,d=e.xScale,s=e.yScale,h=n?L:T,f=r.map(P);return M(a.map((function(e,n){return q(0,s.domain().length).map((function(a){var u,b=(u=r[a][e],h(u,0)?i:d(u)),y=s(o(r[a]))+t*n+c*n,p=function(e,t){return h(e,0)?d(e)-i:i-t}(r[a][e],b),g={id:e,value:r[a][e],index:a,indexValue:o(r[a]),data:f[a]};return{key:"".concat(e,".").concat(g.indexValue),data:g,x:b,y:y,width:p,height:t,color:l(g)}}))})))},D=function(e){var t,n=e.layout,i=e.minValue,r=e.maxValue,o=e.reverse,a=e.width,l=e.height,u=e.padding,d=void 0===u?0:u,s=e.innerPadding,h=void 0===s?0:s,f=e.valueScale,b=e.indexScale,y=e.hiddenIds,p=C(e,["layout","minValue","maxValue","reverse","width","height","padding","innerPadding","valueScale","indexScale","hiddenIds"]),g=p.keys.filter((function(e){return!y.includes(e)})),m=R(p.data,g),x=S("vertical"===n?["y","x",a]:["x","y",l],3),v=x[0],O=x[1],k=x[2],P=W(m,p.getIndex,d,b,k,O),T=j({max:r,min:i,reverse:o},f),L="auto"===T.min?I:function(e){return e},M=m.reduce((function(e,t){return[].concat(w(e),w(g.map((function(e){return t[e]}))))}),[]).filter(Boolean),q=L(Math.min.apply(Math,w(M))),D=(t=Math.max.apply(Math,w(M)),isFinite(t)?t:0),F=Object(c.a)(T,{all:M,min:q,max:D},"x"===v?a:l,v),A=S("vertical"===n?[P,F]:[F,P],2),z=A[0],B=A[1],H=(P.bandwidth()-h*(g.length-1))/g.length,Y=[j(j({},p),{},{data:m,keys:g,innerPadding:h,xScale:z,yScale:B}),H,T.reverse,F(0)],X=H>0?"vertical"===n?V.apply(void 0,Y):E.apply(void 0,Y):[],G=p.keys.map((function(e){var t=X.find((function(t){return t.data.id===e}))||{data:{}};return j(j({},t),{},{data:j(j({id:e},t.data),{},{hidden:y.includes(e)})})}));return{xScale:z,yScale:B,bars:X,legendData:G}},F=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return n>0?t.reduce((function(t,i){return t.concat(Array.isArray(i)?e(i,n-1):i)}),[]):t.slice()},A=function(e,t,n){var i=e.getIndex,r=e.getColor,o=e.innerPadding,a=e.stackedData,l=e.xScale,u=e.yScale;return F(a.map((function(e){return l.domain().map((function(a,c){var d=e[c],s=l(i(d.data)),h=function(e){return u(e[n?0:1])}(d)+.5*o,f=function(e,t){return u(e[n?1:0])-t}(d,h)-o,b={id:e.key,value:d.data[e.key],index:c,indexValue:a,data:P(d.data)};return{key:"".concat(e.key,".").concat(a),data:b,x:s,y:h,width:t,height:f,color:r(b)}}))})))},z=function(e,t,n){var i=e.getIndex,r=e.getColor,o=e.innerPadding,a=e.stackedData,l=e.xScale,u=e.yScale;return F(a.map((function(e){return u.domain().map((function(a,c){var d=e[c],s=u(i(d.data)),h=function(e){return l(e[n?1:0])}(d)+.5*o,f=function(e,t){return l(e[n?0:1])-t}(d,h)-o,b={id:e.key,value:d.data[e.key],index:c,indexValue:a,data:P(d.data)};return{key:"".concat(e.key,".").concat(a),data:b,x:h,y:s,width:f,height:t,color:r(b)}}))})))},B=function(e){var t=e.data,n=e.layout,i=e.minValue,r=e.maxValue,o=e.reverse,a=e.width,l=e.height,u=e.padding,s=void 0===u?0:u,h=e.valueScale,f=e.indexScale,b=e.hiddenIds,y=C(e,["data","layout","minValue","maxValue","reverse","width","height","padding","valueScale","indexScale","hiddenIds"]),p=y.keys.filter((function(e){return!b.includes(e)})),g=Object(d.y)().keys(p).offset(d.z)(R(t,p)),m=S("vertical"===n?["y","x",a]:["x","y",l],3),x=m[0],v=m[1],O=m[2],k=W(t,y.getIndex,s,f,O,v),P=j({max:r,min:i,reverse:o},h),T=F(g,2),L=Math.min.apply(Math,w(T)),M=Math.max.apply(Math,w(T)),q=Object(c.a)(P,{all:T,min:L,max:M},"x"===x?a:l,x),I=S("vertical"===n?[k,q]:[q,k],2),V=I[0],E=I[1],D=y.innerPadding>0?y.innerPadding:0,B=k.bandwidth(),H=[j(j({},y),{},{innerPadding:D,stackedData:g,xScale:V,yScale:E}),B,P.reverse],Y=B>0?"vertical"===n?A.apply(void 0,H):z.apply(void 0,H):[],X=y.keys.map((function(e){var t=Y.find((function(t){return t.data.id===e}))||{data:{}};return j(j({},t),{},{data:j(j({id:e},t.data),{},{hidden:b.includes(e)})})}));return{xScale:V,yScale:E,bars:Y,legendData:X}},H=function(e){var t=e.from,n=e.bars,i=e.layout,r=e.direction,o=e.groupMode,a=e.reverse;return"indexes"===t?function(e){return h()(e.map((function(e){return{id:e.data.indexValue,label:e.data.label||e.data.indexValue,hidden:e.data.hidden,color:e.color,fill:e.data.fill}})),(function(e){return e.id}))}(n):function(e,t,n,i,r){var o=h()(e.map((function(e){return{id:e.data.id,label:e.data.label||e.data.id,hidden:e.data.hidden,color:e.color,fill:e.data.fill}})),(function(e){return e.id}));return("vertical"===t&&"stacked"===i&&"column"===n&&!0!==r||"horizontal"===t&&"stacked"===i&&!0===r)&&o.reverse(),o}(n,i,r,o,a)},Y=Object(u.a)(Object(u.g)(["data","color","onClick"],(function(e){var t=e.data,n=e.color,i=e.onClick;return{onClick:function(e){return i(j({color:n},t),e)}}})),u.c)((function(e){var t=e.data,n=e.x,r=e.y,o=e.width,a=e.height,l=e.borderRadius,u=e.color,c=e.borderWidth,d=e.borderColor,s=e.label,h=e.shouldRenderLabel,f=e.labelColor,b=e.showTooltip,y=e.hideTooltip,g=e.onClick,m=e.onMouseEnter,x=e.onMouseLeave,v=e.getTooltipLabel,O=e.tooltip,k=e.tooltipFormat,w=e.theme;return Object(p.jsxs)("g",{transform:"translate(".concat(n,", ").concat(r,")"),children:[Object(p.jsx)("rect",{width:o,height:a,rx:l,ry:l,fill:t.fill?t.fill:u,strokeWidth:c,stroke:d,onMouseEnter:function(e){m(t,e),b(Object(i.createElement)(O,j(j({},t),{},{color:u,getTooltipLabel:v,tooltipFormat:k})),e)},onMouseMove:function(e){return b(Object(i.createElement)(O,j(j({},t),{},{color:u,getTooltipLabel:v,tooltipFormat:k})),e)},onMouseLeave:function(e){x(t,e),y(e)},onClick:g}),h&&Object(p.jsx)("text",{x:o/2,y:a/2,textAnchor:"middle",dominantBaseline:"central",style:j(j({},w.labels.text),{},{pointerEvents:"none",fill:f}),children:s})]})})),X=j(j({data:y.a.arrayOf(y.a.object).isRequired,indexBy:y.a.oneOfType([y.a.string,y.a.func]).isRequired,getIndex:y.a.func.isRequired,keys:y.a.arrayOf(y.a.oneOfType([y.a.string,y.a.number])).isRequired,layers:y.a.arrayOf(y.a.oneOfType([y.a.oneOf(["grid","axes","bars","markers","legends","annotations"]),y.a.func])).isRequired,groupMode:y.a.oneOf(["stacked","grouped"]).isRequired,layout:y.a.oneOf(["horizontal","vertical"]).isRequired,reverse:y.a.bool.isRequired,valueScale:y.a.object.isRequired,indexScale:y.a.object.isRequired,minValue:y.a.oneOfType([y.a.number,y.a.oneOf(["auto"])]).isRequired,maxValue:y.a.oneOfType([y.a.number,y.a.oneOf(["auto"])]).isRequired,padding:y.a.number.isRequired,innerPadding:y.a.number.isRequired,axisTop:a.d,axisRight:a.d,axisBottom:a.d,axisLeft:a.d,enableGridX:y.a.bool.isRequired,enableGridY:y.a.bool.isRequired,gridXValues:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.oneOfType([y.a.number,y.a.string]))]),gridYValues:y.a.oneOfType([y.a.number,y.a.arrayOf(y.a.oneOfType([y.a.number,y.a.string]))]),barComponent:y.a.func.isRequired,enableLabel:y.a.bool.isRequired,label:y.a.oneOfType([y.a.string,y.a.func]).isRequired,labelFormat:y.a.oneOfType([y.a.string,y.a.func]),getLabel:y.a.func.isRequired,labelSkipWidth:y.a.number.isRequired,labelSkipHeight:y.a.number.isRequired,labelTextColor:f.k.isRequired,getLabelTextColor:y.a.func.isRequired,labelLinkColor:f.k.isRequired,getLabelLinkColor:y.a.func.isRequired,colors:f.p.isRequired,colorBy:f.d.isRequired,borderRadius:y.a.number.isRequired,getColor:y.a.func.isRequired},o.D),{},{borderWidth:y.a.number.isRequired,borderColor:f.k.isRequired,getBorderColor:y.a.func.isRequired,isInteractive:y.a.bool,onClick:y.a.func.isRequired,onMouseEnter:y.a.func.isRequired,onMouseLeave:y.a.func.isRequired,tooltipLabel:y.a.func,getTooltipLabel:y.a.func.isRequired,tooltipFormat:y.a.oneOfType([y.a.func,y.a.string]),tooltip:y.a.func,legends:y.a.arrayOf(y.a.shape(j({dataFrom:y.a.oneOf(["indexes","keys"]).isRequired},l.b))).isRequired,renderWrapper:y.a.bool,pixelRatio:y.a.number.isRequired}),G=(j(j({},X),{},{role:y.a.string.isRequired}),{indexBy:"id",keys:["value"],layers:["grid","axes","bars","markers","legends","annotations"],groupMode:"stacked",layout:"vertical",reverse:!1,minValue:"auto",maxValue:"auto",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},padding:.1,innerPadding:0,axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,barComponent:Y,enableLabel:!0,label:"value",labelSkipWidth:0,labelSkipHeight:0,labelLinkColor:"theme",labelTextColor:"theme",colors:{scheme:"nivo"},colorBy:"id",defs:[],fill:[],borderRadius:0,borderWidth:0,borderColor:{from:"color"},isInteractive:!0,tooltip:function(e){var t=e.color,n=e.getTooltipLabel,i=e.tooltipFormat,r=C(e,["color","getTooltipLabel","tooltipFormat"]);return Object(p.jsx)(g.a,{id:n(r),value:r.value,enableChip:!0,color:t,format:i})},onClick:o.U,onMouseEnter:o.U,onMouseLeave:o.U,legends:[],annotations:[],pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio||1}),U=j(j({},G),{},{role:"img"}),_=function(e){return Object(u.a)(Object(u.b)(G),Object(o.xb)(),Object(o.vb)(),Object(o.wb)(),Object(u.g)(["colors","colorBy"],(function(e){var t=e.colors,n=e.colorBy;return{getColor:Object(f.j)(t,n)}})),Object(u.g)(["indexBy"],(function(e){var t=e.indexBy;return{getIndex:Object(o.K)(t)}})),Object(u.g)(["labelTextColor","theme"],(function(e){var t=e.labelTextColor,n=e.theme;return{getLabelTextColor:Object(f.h)(t,n)}})),Object(u.g)(["labelLinkColor","theme"],(function(e){var t=e.labelLinkColor,n=e.theme;return{getLabelLinkColor:Object(f.h)(t,n)}})),Object(u.g)(["label","labelFormat"],(function(e){var t=e.label,n=e.labelFormat;return{getLabel:Object(o.I)(t,n)}})),Object(u.g)(["borderColor","theme"],(function(e){var t=e.borderColor,n=e.theme;return{getBorderColor:Object(f.h)(t,n)}})),Object(u.g)(["tooltipLabel"],(function(e){var t=e.tooltipLabel,n=function(e){return"".concat(e.id," - ").concat(e.indexValue)};return"function"==typeof t&&(n=t),{getTooltipLabel:n}})),u.c)(e)},J=function(e){var t=e.bars,n=e.annotations,i=e.animate,r=e.innerWidth,o=e.innerHeight,a=e.motionStiffness,l=e.motionDamping;return Object(m.c)({items:t,annotations:n,getPosition:function(e){return{x:e.x+e.width/2,y:e.y+e.height/2}},getDimensions:function(e,t){var n=e.width+2*t,i=e.height+2*t;return{width:n,height:i,size:Math.max(n,i)}}}).map((function(e,t){return Object(p.jsx)(m.a,j(j({},e),{},{containerWidth:r,containerHeight:o,animate:i,motionStiffness:a,motionDamping:l}),t)}))},K=function(e){var t=e.style;return{x:t.x.val,y:t.y.val,width:0,height:t.height.val}},Q=function(e){var t=e.style;return{x:t.x.val,y:t.y.val+t.height.val,width:t.width.val,height:0}},N=function(e){var t=e.data,n=e.getIndex,u=e.keys,c=e.groupMode,d=e.layout,s=e.reverse,h=e.minValue,f=e.maxValue,b=e.valueScale,y=e.indexScale,g=e.margin,m=e.width,x=e.height,v=e.outerWidth,O=e.outerHeight,k=e.padding,C=e.innerPadding,W=e.axisTop,R=e.axisRight,P=e.axisBottom,T=e.axisLeft,L=e.enableGridX,M=e.enableGridY,q=e.gridXValues,I=e.gridYValues,V=e.layers,E=e.barComponent,F=e.enableLabel,A=e.getLabel,z=e.labelSkipWidth,Y=e.labelSkipHeight,X=e.getLabelTextColor,G=e.markers,U=e.theme,_=e.getColor,N=e.defs,$=e.fill,Z=e.borderRadius,ee=e.borderWidth,te=e.getBorderColor,ne=e.annotations,ie=e.isInteractive,re=e.getTooltipLabel,oe=e.tooltipFormat,ae=e.tooltip,le=e.onClick,ue=e.onMouseEnter,ce=e.onMouseLeave,de=e.legends,se=e.animate,he=e.motionStiffness,fe=e.motionDamping,be=e.renderWrapper,ye=e.role,pe=S(Object(i.useState)([]),2),ge=pe[0],me=pe[1],xe=Object(i.useCallback)((function(e){me((function(t){return t.indexOf(e)>-1?t.filter((function(t){return t!==e})):[].concat(w(t),[e])}))}),[]),ve=("grouped"===c?D:B)({layout:d,reverse:s,data:t,getIndex:n,keys:u,minValue:h,maxValue:f,width:m,height:x,getColor:_,padding:k,innerPadding:C,valueScale:b,indexScale:y,hiddenIds:ge}),je={animate:se,motionDamping:fe,motionStiffness:he},Oe={damping:fe,stiffness:he},ke="vertical"===d?Q:K,we="vertical"===d?function(e){return function(t){var n=t.style;return{x:n.x,y:Object(r.spring)(n.y.val+n.height.val,e),width:n.width,height:Object(r.spring)(0,e)}}}(Oe):function(e){return function(t){var n=t.style;return{x:n.x,y:n.y,width:Object(r.spring)(0,e),height:n.height}}}(Oe),Se=function(e){var t=e.width,n=e.height;return!!F&&(!(z>0&&t<z)&&!(Y>0&&n<Y))},Ce=Object(o.r)(N,ve.bars,$,{dataKey:"data",targetKey:"data.fill"});return Object(p.jsx)(o.f,{animate:se,isInteractive:ie,motionStiffness:he,motionDamping:fe,renderWrapper:be,theme:U,children:function(t){var n,u=t.showTooltip,h=t.hideTooltip,f={borderRadius:Z,borderWidth:ee,enableLabel:F,labelSkipWidth:z,labelSkipHeight:Y,showTooltip:u,hideTooltip:h,onClick:le,onMouseEnter:ue,onMouseLeave:ce,theme:U,getTooltipLabel:re,tooltipFormat:oe,tooltip:ae};n=!0===se?Object(p.jsx)(r.TransitionMotion,{willEnter:ke,willLeave:we,styles:ve.bars.filter((function(e){return null!==e.data.value})).map((function(e){return{key:e.key,data:e,style:{x:Object(r.spring)(e.x,Oe),y:Object(r.spring)(e.y,Oe),width:Object(r.spring)(e.width,Oe),height:Object(r.spring)(e.height,Oe)}}})),children:function(e){return Object(p.jsx)("g",{children:e.map((function(e){var t=e.key,n=e.style,r=e.data,o=j(j({},r),n);return Object(i.createElement)(E,j(j(j({key:t},o),f),{},{shouldRenderLabel:Se(o),width:Math.max(n.width,0),height:Math.max(n.height,0),label:A(r.data),labelColor:X(o,U),borderColor:te(o),theme:U}))}))})}},"bars"):ve.bars.filter((function(e){return null!==e.data.value})).map((function(e){return Object(i.createElement)(E,j(j(j({key:e.key},e),f),{},{label:A(e.data),shouldRenderLabel:Se(e),labelColor:X(e,U),borderColor:te(e),theme:U}))}));var b={grid:Object(p.jsx)(a.c,{width:m,height:x,xScale:L?ve.xScale:null,yScale:M?ve.yScale:null,xValues:q,yValues:I},"grid"),axes:Object(p.jsx)(a.a,{xScale:ve.xScale,yScale:ve.yScale,width:m,height:x,top:W,right:R,bottom:P,left:T},"axes"),bars:n,markers:Object(p.jsx)(o.a,{markers:G,width:m,height:x,xScale:ve.xScale,yScale:ve.yScale,theme:U},"markers"),legends:de.map((function(e,t){var n=H({from:e.dataFrom,bars:ve.legendData,layout:d,direction:e.direction,groupMode:c,reverse:s});return void 0===n?null:Object(p.jsx)(l.a,j(j({},e),{},{containerWidth:m,containerHeight:x,data:n,theme:U,toggleSerie:e.toggleSerie?xe:void 0}),t)})),annotations:Object(p.jsx)(J,j({innerWidth:m,innerHeight:x,bars:ve.bars,annotations:ne},je),"annotations")};return Object(p.jsx)(o.l,{width:v,height:O,margin:g,defs:Ce,theme:U,role:ye,children:V.map((function(t,n){return"function"==typeof t?Object(p.jsx)(i.Fragment,{children:t(j(j(j({},e),ve),{},{showTooltip:u,hideTooltip:h}))},n):b[t]}))})}})};N.defaultProps=U;var $=Object(u.d)("Bar")(_(N));function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function te(e,t){return(te=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e){return(ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function re(e,t){return!t||"object"!==ie(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=ne(e);if(t){var r=ne(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return re(this,n)}}var ae=function(e,t,n,i){return e.find((function(e){return Object(o.N)(e.x+t.left,e.y+t.top,e.width,e.height,n,i)}))},le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&te(e,t)}(u,e);var t,n,i,r=oe(u);function u(){var e;Z(this,u);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=r.call.apply(r,[this].concat(n))).handleMouseHover=function(t,n){return function(i){if(e.bars){var r=e.props,a=r.margin,l=r.theme,u=r.tooltip,c=r.getTooltipLabel,d=r.tooltipFormat,s=S(Object(o.L)(e.surface,i),2),h=s[0],f=s[1],b=ae(e.bars,a,h,f);void 0!==b?t(Object(p.jsx)(g.a,{id:c(b.data),value:b.data.value,enableChip:!0,color:b.color,theme:l,format:d,renderContent:"function"==typeof u?u.bind(null,j({color:b.color},b.data)):null}),i):n()}}},e.handleMouseLeave=function(e){return function(){e()}},e.handleClick=function(t){if(e.bars){var n=e.props,i=n.margin,r=n.onClick,a=S(Object(o.L)(e.surface,t),2),l=a[0],u=a[1],c=ae(e.bars,i,l,u);void 0!==c&&r(c.data,t)}},e}return t=u,(n=[{key:"componentDidMount",value:function(){this.ctx=this.surface.getContext("2d"),this.draw(this.props)}},{key:"shouldComponentUpdate",value:function(e){return this.props.outerWidth!==e.outerWidth||this.props.outerHeight!==e.outerHeight||this.props.isInteractive!==e.isInteractive||this.props.theme!==e.theme||(this.draw(e),!1)}},{key:"componentDidUpdate",value:function(){this.ctx=this.surface.getContext("2d"),this.draw(this.props)}},{key:"draw",value:function(e){var t=this,n=e.data,i=e.keys,r=e.getIndex,o=e.minValue,u=e.maxValue,c=e.valueScale,d=e.indexScale,s=e.width,f=e.height,b=e.outerWidth,y=e.outerHeight,p=e.pixelRatio,g=e.margin,m=e.layout,x=e.reverse,v=e.groupMode,O=e.padding,k=e.innerPadding,w=e.axisTop,S=e.axisRight,C=e.axisBottom,W=e.axisLeft,R=e.theme,P=e.getColor,T=e.borderWidth,L=e.getBorderColor,M=e.legends,q=e.enableGridX,I=e.gridXValues,V=e.enableGridY,E=e.gridYValues;this.surface.width=b*p,this.surface.height=y*p,this.ctx.scale(p,p);var F={layout:m,reverse:x,data:n,getIndex:r,keys:i,minValue:o,maxValue:u,width:s,height:f,getColor:P,padding:O,innerPadding:k,valueScale:c,indexScale:d},A="grouped"===v?D(F):B(F);this.bars=A.bars,this.ctx.fillStyle=R.background,this.ctx.fillRect(0,0,b,y),this.ctx.translate(g.left,g.top),R.grid.line.strokeWidth>0&&(this.ctx.lineWidth=R.grid.line.strokeWidth,this.ctx.strokeStyle=R.grid.line.stroke,q&&Object(a.g)(this.ctx,{width:s,height:f,scale:A.xScale,axis:"x",values:I}),V&&Object(a.g)(this.ctx,{width:s,height:f,scale:A.yScale,axis:"y",values:E})),this.ctx.strokeStyle="#dddddd";var z=h()(A.bars.map((function(e){return{id:e.data.id,label:e.data.id,color:e.color,fill:e.data.fill}})).reverse(),(function(e){return e.id})),H=h()(A.bars.map((function(e){return{id:e.data.indexValue,label:e.data.indexValue,color:e.color,fill:e.data.fill}})),(function(e){return e.id}));M.forEach((function(e){var n;if("keys"===e.dataFrom?n=z:"indexes"===e.dataFrom&&(n=H),void 0===n)return null;Object(l.d)(t.ctx,j(j({},e),{},{data:n,containerWidth:s,containerHeight:f,itemTextColor:"#999",symbolSize:16,theme:R}))})),Object(a.e)(this.ctx,{xScale:A.xScale,yScale:A.yScale,width:s,height:f,top:w,right:S,bottom:C,left:W,theme:R}),A.bars.forEach((function(e){var n=e.x,i=e.y,r=e.color,o=e.width,a=e.height;t.ctx.fillStyle=r,T>0&&(t.ctx.strokeStyle=L(e),t.ctx.lineWidth=T),t.ctx.beginPath(),t.ctx.rect(n,i,o,a),t.ctx.fill(),T>0&&t.ctx.stroke()}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.outerWidth,i=t.outerHeight,r=t.pixelRatio,a=t.isInteractive,l=t.renderWrapper,u=t.theme,c=t.canvasRef;return Object(p.jsx)(o.f,{isInteractive:a,renderWrapper:l,theme:u,animate:!1,children:function(t){var o=t.showTooltip,a=t.hideTooltip;return Object(p.jsx)("canvas",{ref:function(t){e.surface=t,c&&(c.current=t)},width:n*r,height:i*r,style:{width:n,height:i},onMouseEnter:e.handleMouseHover(o,a),onMouseMove:e.handleMouseHover(o,a),onMouseLeave:e.handleMouseLeave(a),onClick:e.handleClick})}})}}])&&ee(t.prototype,n),i&&ee(t,i),u}(i.Component);le.defaultProps=G;var ue=Object(u.d)("BarCanvas")(_(le)),ce=Object(i.forwardRef)((function(e,t){return Object(p.jsx)(ue,j(j({},e),{},{canvasRef:t}))})),de=function(e){return Object(p.jsx)(o.k,{children:function(t){var n=t.width,i=t.height;return Object(p.jsx)($,j({width:n,height:i},e))}})},se=function(e,t){return Object(p.jsx)(o.k,{children:function(n){var i=n.width,r=n.height;return Object(p.jsx)(ce,j(j({width:i,height:r},e),{},{ref:t}))}})},he=Object(i.forwardRef)(se)},QRkI:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return F})),n.d(t,"c",(function(){return W}));n("UKgA");var i=n("mXGw"),r=n("PWxN"),o=n.n(r),a=n("XQLF"),l=n.n(a),u=n("eeCi"),c=n.n(u),d=n("5QYd"),s=n("g4kd"),h=n("oYCi");function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function g(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function m(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function x(e){return function(e){if(Array.isArray(e))return p(e)}(e)||g(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=4,j=120,O=8,k=function(e){return"circle"===e.type},w=function(e){return"dot"===e.type},S=function(e){return"rect"===e.type},C=function(e){var t,n,i=e.x,r=e.y,o=e.noteX,a=e.noteY,u=e.noteWidth,c=void 0===u?j:u,s=e.noteTextOffset,h=void 0===s?O:s;if(l()(o))t=i+o;else{if(void 0===o.abs)throw new Error("noteX should be either a number or an object containing an 'abs' property");t=o.abs}if(l()(a))n=r+a;else{if(void 0===a.abs)throw new Error("noteY should be either a number or an object containing an 'abs' property");n=a.abs}var f=i,b=r,y=function(e,t,n,i){var r=Math.atan2(i-t,n-e);return Object(d.n)(Object(d.bb)(r))}(i,r,t,n);if(k(e)){var p=Object(d.Y)(Object(d.E)(y),e.size/2);f+=p.x,b+=p.y}if(S(e)){var g=Math.round((y+90)/45)%8;0===g&&(b-=e.height/2),1===g&&(f+=e.width/2,b-=e.height/2),2===g&&(f+=e.width/2),3===g&&(f+=e.width/2,b+=e.height/2),4===g&&(b+=e.height/2),5===g&&(f-=e.width/2,b+=e.height/2),6===g&&(f-=e.width/2),7===g&&(f-=e.width/2,b-=e.height/2)}var m=t,x=t;return(y+90)%360>180?(m-=c,x-=c):x+=c,{points:[[f,b],[t,n],[x,n]],text:[m,n-h],angle:y+90}},W=function(e){var t=e.data,n=e.annotations,r=e.getPosition,a=e.getDimensions;return Object(i.useMemo)((function(){return function(e){var t=e.data,n=e.annotations,i=e.getPosition,r=e.getDimensions;return n.reduce((function(e,n){var a=n.offset||0;return[].concat(x(e),x(c()(t,n.match).map((function(e){var t=i(e),l=r(e);return(k(n)||S(n))&&(l.size=l.size+2*a,l.width=l.width+2*a,l.height=l.height+2*a),y(y(y(y({},o()(n,["match","offset"])),t),l),{},{size:n.size||l.size,datum:e})}))))}),[])}({data:t,annotations:n,getPosition:r,getDimensions:a})}),[t,n,r,a])},R=function(e){var t=e.datum,n=e.x,r=e.y,a=e.note,l=Object(d.sb)(),u=Object(d.qb)(),c=u.animate,f=u.config,b=Object(s.useSpring)({x:n,y:r,config:f,immediate:!c});return"function"==typeof a?Object(i.createElement)(a,{x:n,y:r,datum:t}):Object(h.jsxs)(h.Fragment,{children:[l.annotations.text.outlineWidth>0&&Object(h.jsx)(s.animated.text,{x:b.x,y:b.y,style:y(y({},l.annotations.text),{},{strokeLinejoin:"round",strokeWidth:2*l.annotations.text.outlineWidth,stroke:l.annotations.text.outlineColor}),children:a}),Object(h.jsx)(s.animated.text,{x:b.x,y:b.y,style:o()(l.annotations.text,["outlineWidth","outlineColor"]),children:a})]})};function P(e){if(Array.isArray(e))return e}function T(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function L(e,t){return P(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(i=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(u){r=!0,o=u}finally{try{i||null==l.return||l.return()}finally{if(r)throw o}}return n}}(e,t)||m(e,t)||T()}var M=function(e){var t=e.points,n=e.isOutline,r=void 0!==n&&n,o=Object(d.sb)(),a=Object(i.useMemo)((function(){var e,n=P(e=t)||g(e)||m(e)||T(),i=n[0];return n.slice(1).reduce((function(e,t){var n=L(t,2),i=n[0],r=n[1];return"".concat(e," L").concat(i,",").concat(r)}),"M".concat(i[0],",").concat(i[1]))}),[t]),l=Object(d.mb)(a);if(r&&o.annotations.link.outlineWidth<=0)return null;var u=y({},o.annotations.link);return r&&(u.strokeLinecap="square",u.strokeWidth=o.annotations.link.strokeWidth+2*o.annotations.link.outlineWidth,u.stroke=o.annotations.link.outlineColor),Object(h.jsx)(s.animated.path,{fill:"none",d:l,style:u})},q=function(e){var t=e.x,n=e.y,i=e.size,r=Object(d.sb)(),o=Object(d.qb)(),a=o.animate,l=o.config,u=Object(s.useSpring)({x:t,y:n,radius:i/2,config:l,immediate:!a});return Object(h.jsxs)(h.Fragment,{children:[r.annotations.outline.outlineWidth>0&&Object(h.jsx)(s.animated.circle,{cx:u.x,cy:u.y,r:u.radius,style:y(y({},r.annotations.outline),{},{fill:"none",strokeWidth:r.annotations.outline.strokeWidth+2*r.annotations.outline.outlineWidth,stroke:r.annotations.outline.outlineColor})}),Object(h.jsx)(s.animated.circle,{cx:u.x,cy:u.y,r:u.radius,style:r.annotations.outline})]})},I=function(e){var t=e.x,n=e.y,i=e.size,r=void 0===i?v:i,o=Object(d.sb)(),a=Object(d.qb)(),l=a.animate,u=a.config,c=Object(s.useSpring)({x:t,y:n,radius:r/2,config:u,immediate:!l});return Object(h.jsxs)(h.Fragment,{children:[o.annotations.outline.outlineWidth>0&&Object(h.jsx)(s.animated.circle,{cx:c.x,cy:c.y,r:c.radius,style:y(y({},o.annotations.outline),{},{fill:"none",strokeWidth:2*o.annotations.outline.outlineWidth,stroke:o.annotations.outline.outlineColor})}),Object(h.jsx)(s.animated.circle,{cx:c.x,cy:c.y,r:c.radius,style:o.annotations.symbol})]})},V=function(e){var t=e.x,n=e.y,i=e.width,r=e.height,o=Object(d.sb)(),a=Object(d.qb)(),l=a.animate,u=a.config,c=Object(s.useSpring)({x:t-i/2,y:n-r/2,width:i,height:r,config:u,immediate:!l});return Object(h.jsxs)(h.Fragment,{children:[o.annotations.outline.outlineWidth>0&&Object(h.jsx)(s.animated.rect,{x:c.x,y:c.y,width:c.width,height:c.height,style:y(y({},o.annotations.outline),{},{fill:"none",strokeWidth:o.annotations.outline.strokeWidth+2*o.annotations.outline.outlineWidth,stroke:o.annotations.outline.outlineColor})}),Object(h.jsx)(s.animated.rect,{x:c.x,y:c.y,width:c.width,height:c.height,style:o.annotations.outline})]})},E=function(e){var t=e.datum,n=e.x,r=e.y,o=e.note,a=function(e){return Object(i.useMemo)((function(){return C(e)}),[e])}(e);if(!function(e){var t=typeof e;return Object(i.isValidElement)(e)||"string"===t||"function"===t||"object"===t}(o))throw new Error("note should be a valid react element");return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(M,{points:a.points,isOutline:!0}),k(e)&&Object(h.jsx)(q,{x:n,y:r,size:e.size}),w(e)&&Object(h.jsx)(I,{x:n,y:r,size:e.size}),S(e)&&Object(h.jsx)(V,{x:n,y:r,width:e.width,height:e.height}),Object(h.jsx)(M,{points:a.points}),Object(h.jsx)(R,{datum:t,x:a.text[0],y:a.text[1],note:o})]})},D=function(e,t){t.forEach((function(t,n){var i=L(t,2),r=i[0],o=i[1];0===n?e.moveTo(r,o):e.lineTo(r,o)}))},F=function(e,t){var n=t.annotations,i=t.theme;0!==n.length&&(e.save(),n.forEach((function(t){if(n=t.note,"string"!==(r=typeof n)&&"function"!==r)throw new Error("note is invalid for canvas implementation");var n,r;i.annotations.link.outlineWidth>0&&(e.lineCap="square",e.strokeStyle=i.annotations.link.outlineColor,e.lineWidth=i.annotations.link.strokeWidth+2*i.annotations.link.outlineWidth,e.beginPath(),D(e,t.computed.points),e.stroke(),e.lineCap="butt"),k(t)&&i.annotations.outline.outlineWidth>0&&(e.strokeStyle=i.annotations.outline.outlineColor,e.lineWidth=i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.stroke()),w(t)&&i.annotations.symbol.outlineWidth>0&&(e.strokeStyle=i.annotations.symbol.outlineColor,e.lineWidth=2*i.annotations.symbol.outlineWidth,e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.stroke()),S(t)&&i.annotations.outline.outlineWidth>0&&(e.strokeStyle=i.annotations.outline.outlineColor,e.lineWidth=i.annotations.outline.strokeWidth+2*i.annotations.outline.outlineWidth,e.beginPath(),e.rect(t.x-t.width/2,t.y-t.height/2,t.width,t.height),e.stroke()),e.strokeStyle=i.annotations.link.stroke,e.lineWidth=i.annotations.link.strokeWidth,e.beginPath(),D(e,t.computed.points),e.stroke(),k(t)&&(e.strokeStyle=i.annotations.outline.stroke,e.lineWidth=i.annotations.outline.strokeWidth,e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.stroke()),w(t)&&(e.fillStyle=i.annotations.symbol.fill,e.beginPath(),e.arc(t.x,t.y,t.size/2,0,2*Math.PI),e.fill()),S(t)&&(e.strokeStyle=i.annotations.outline.stroke,e.lineWidth=i.annotations.outline.strokeWidth,e.beginPath(),e.rect(t.x-t.width/2,t.y-t.height/2,t.width,t.height),e.stroke()),"function"==typeof t.note?t.note(e,{datum:t.datum,x:t.computed.text[0],y:t.computed.text[1],theme:i}):(e.font="".concat(i.annotations.text.fontSize,"px ").concat(i.annotations.text.fontFamily),e.fillStyle=i.annotations.text.fill,e.strokeStyle=i.annotations.text.outlineColor,e.lineWidth=2*i.annotations.text.outlineWidth,i.annotations.text.outlineWidth>0&&(e.lineJoin="round",e.strokeText(t.note,t.computed.text[0],t.computed.text[1]),e.lineJoin="miter"),e.fillText(t.note,t.computed.text[0],t.computed.text[1]))})),e.restore())}},eeCi:function(e,t,n){var i=n("07F0"),r=n("lJjI"),o=n("tDyL"),a=n("PqlX");e.exports=function(e,t){return(a(e)?i:r)(e,o(t,3))}},lJjI:function(e,t,n){var i=n("T0uz");e.exports=function(e,t){var n=[];return i(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}}}]);
//# sourceMappingURL=e6566ccda6fa281b2bfc2c90b15fb315ed8cf53b-d885bde9de710ef00dd3.js.map