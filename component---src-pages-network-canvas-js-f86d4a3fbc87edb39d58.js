(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"6NhV":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return L})),n.d(t,"b",(function(){return N})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return Y})),n.d(t,"e",(function(){return H}));n("xl0S"),n("1c7q"),n("p0JG"),n("Zrjq"),n("VlJN"),n("YjJN"),n("jr56"),n("Eb4t"),n("IYjZ"),n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var r=n("mXGw"),i=n.n(r),o=n("5QYd"),a=n("llhf"),u=n("56Mt"),l=n("W0B4"),c=n.n(l),s=n("edSL"),f=n.n(s),h=n("4e1R"),d=n.n(h),y=n("XQLF"),p=n.n(y),v=n("BORk"),g=n("wMFK");function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _={nodes:c.a.arrayOf(c.a.shape({id:c.a.string.isRequired})).isRequired,links:c.a.arrayOf(c.a.shape({source:c.a.string.isRequired,target:c.a.string.isRequired})).isRequired,layers:c.a.arrayOf(c.a.oneOfType([c.a.oneOf(["links","nodes"]),c.a.func])).isRequired,linkDistance:c.a.oneOfType([c.a.string,c.a.func,c.a.number]).isRequired,repulsivity:c.a.number.isRequired,distanceMin:c.a.number.isRequired,distanceMax:c.a.number.isRequired,iterations:c.a.number.isRequired,nodeColor:c.a.oneOfType([c.a.string,c.a.func]).isRequired,nodeBorderWidth:c.a.oneOfType([c.a.number,c.a.func]).isRequired,nodeBorderColor:a.k.isRequired,linkThickness:c.a.oneOfType([c.a.number,c.a.func]).isRequired,linkColor:a.k.isRequired,isInteractive:c.a.bool.isRequired},O=(b(b({},_),{},{role:c.a.string.isRequired},o.R),b({pixelRatio:c.a.number.isRequired},_),{layers:["links","nodes"],linkDistance:30,repulsivity:10,distanceMin:1,distanceMax:1/0,iterations:90,nodeBorderWidth:0,nodeBorderColor:{from:"color"},linkThickness:1,linkColor:{from:"source.color"},isInteractive:!0}),j=b(b({},O),{},{animate:!0,motionStiffness:90,motionDamping:15,role:"img"}),N=b(b({},O),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1}),M=function(e){var t=e.nodes,n=e.links,i=e.linkDistance,o=e.repulsivity,a=e.distanceMin,u=e.distanceMax,l=e.center,c=e.iterations,s=w(Object(r.useState)([]),2),h=s[0],y=s[1],g=w(Object(r.useState)([]),2),m=g[0],x=g[1];return Object(r.useEffect)((function(){var e=function(e){var t,n=e.linkDistance,r=e.repulsivity,i=e.distanceMin,o=e.distanceMax,a=e.center;return"function"==typeof n?t=n:p()(n)?t=n:d()(n)&&(t=function(e){return f()(e,n)}),{link:Object(v.c)().id((function(e){return e.id})).distance(t),charge:Object(v.d)().strength(-r).distanceMin(i).distanceMax(o),center:Object(v.a)(a[0],a[1])}}({linkDistance:i,repulsivity:o,distanceMin:a,distanceMax:u,center:l}),r=t.map((function(e){return b({},e)})),s=n.map((function(e){return b({id:"".concat(e.source,".").concat(e.target)},e)})),g=Object(v.e)(r).force("link",e.link.links(s)).force("charge",e.charge).force("center",e.center).stop();return g.tick(c),y(r),x(s.map((function(e){return e.previousSource=h.find((function(t){return t.id===e.source.id})),e.previousTarget=h.find((function(t){return t.id===e.target.id})),e}))),function(){g.stop()}}),[t,n,i,o,a,u,c,l[0],l[1]]),[h,m]},C=function(e){return Object(r.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},E=function(e){return Object(r.useMemo)((function(){return"function"==typeof e?e:function(){return e}}),[e])},q=Object(r.memo)((function(e){var t=e.node,n=e.x,r=e.y,o=e.radius,a=e.color,u=e.borderWidth,l=e.borderColor,c=e.scale,s=void 0===c?1:c,f=e.handleNodeHover,h=e.handleNodeLeave;return i.a.createElement("circle",{transform:"translate(".concat(n,",").concat(r,") scale(").concat(s,")"),r:o,fill:a,strokeWidth:u,stroke:l,onMouseEnter:function(e){return f(t,e)},onMouseMove:function(e){return f(t,e)},onMouseLeave:h})})),T=function(e){var t=e.style;return{x:t.x.val,y:t.y.val,radius:t.radius.val,scale:0}},A=function(e){return function(t){var n=t.style;return{x:n.x,y:n.y,radius:n.radius,scale:Object(g.spring)(0,e)}}},R=Object(r.memo)((function(e){var t=e.nodes,n=e.color,r=e.borderWidth,a=e.borderColor,u=e.handleNodeHover,l=e.handleNodeLeave,c=Object(o.pb)().springConfig;return i.a.createElement(g.TransitionMotion,{willEnter:T,willLeave:A(c),styles:t.map((function(e){return{key:e.id,data:e,style:{x:Object(g.spring)(e.x,c),y:Object(g.spring)(e.y,c),radius:Object(g.spring)(e.radius,c),scale:Object(g.spring)(1,c)}}}))},(function(e){return i.a.createElement(i.a.Fragment,null,e.map((function(e){var t=e.key,o=e.style,c=e.data;return i.a.createElement(q,{key:t,node:c,x:o.x,y:o.y,radius:Math.max(o.radius,0),color:n(c),borderWidth:r,borderColor:a(c),scale:Math.max(o.scale,0),handleNodeHover:u,handleNodeLeave:l})})))}))})),S=Object(r.memo)((function(e){var t=e.nodes,n=e.color,r=e.borderWidth,o=e.borderColor,a=e.handleNodeHover,u=e.handleNodeLeave;return t.map((function(e){return i.a.createElement(q,{key:e.id,node:e,x:e.x,y:e.y,radius:e.radius,color:n(e),borderWidth:r,borderColor:o(e),handleNodeHover:a,handleNodeLeave:u})}))})),P=Object(r.memo)((function(e){var t=e.sourceX,n=e.sourceY,r=e.targetX,o=e.targetY,a=e.thickness,u=e.color;return i.a.createElement("line",{stroke:u,strokeWidth:a,strokeLinecap:"round",x1:t,y1:n,x2:r,y2:o})})),W=function(e){var t=e.style,n=e.data,r=n.previousSource?n.previousSource.x:t.sourceX.val,i=n.previousSource?n.previousSource.y:t.sourceY.val;return{sourceX:r,sourceY:i,targetX:r,targetY:i}},D=Object(r.memo)((function(e){var t=e.links,n=e.linkThickness,r=e.linkColor,a=Object(o.pb)().springConfig;return i.a.createElement(g.TransitionMotion,{willEnter:W,styles:t.map((function(e){return{key:e.id,data:e,style:{sourceX:Object(g.spring)(e.source.x,a),sourceY:Object(g.spring)(e.source.y,a),targetX:Object(g.spring)(e.target.x,a),targetY:Object(g.spring)(e.target.y,a)}}}))},(function(e){return i.a.createElement(i.a.Fragment,null,e.map((function(e){var t=e.key,o=e.style,a=e.data;return i.a.createElement(P,{key:t,link:a,color:r(a),thickness:n(a),sourceX:o.sourceX,sourceY:o.sourceY,targetX:o.targetX,targetY:o.targetY})})))}))})),I=Object(r.memo)((function(e){var t=e.links,n=e.linkThickness,r=e.linkColor;return t.map((function(e){return i.a.createElement(P,{key:e.id,link:e,color:r(e),thickness:n(e),sourceX:e.source.x,sourceY:e.source.y,targetX:e.target.x,targetY:e.target.y})}))})),B=Object(r.memo)((function(e){var t=e.node,n=e.format,r=e.tooltip;return i.a.createElement(u.a,{id:t.id,enableChip:!0,color:t.color,format:n,renderContent:"function"==typeof r?r.bind(null,b({},t)):null})})),F=function(e){var t=e.width,n=e.height,l=e.margin,c=e.nodes,s=e.links,f=e.linkDistance,h=e.repulsivity,d=e.distanceMin,y=e.distanceMax,p=e.iterations,v=e.layers,g=e.nodeColor,m=e.nodeBorderWidth,x=e.nodeBorderColor,k=e.linkThickness,_=e.linkColor,O=e.tooltip,j=e.isInteractive,N=e.role,q=Object(o.nb)(t,n,l),T=q.margin,A=q.innerWidth,P=q.innerHeight,W=q.outerWidth,F=q.outerHeight,L=Object(o.pb)().animate,Y=Object(o.rb)(),V=C(g),X=Object(a.r)(x,Y),H=E(k),z=Object(a.r)(_,Y),J=w(M({nodes:c,links:s,linkDistance:f,repulsivity:h,distanceMin:d,distanceMax:y,iterations:p,center:[A/2,P/2]}),2),Z=J[0],G=J[1],Q=Object(u.h)(),U=Q.showTooltipFromEvent,K=Q.hideTooltip,$=Object(r.useCallback)((function(e,t){U(i.a.createElement(B,{node:e,tooltip:O}),t)}),[U,O]),ee=Object(r.useCallback)((function(){K()}),[K]),te={links:i.a.createElement(!0===L?D:I,{key:"links",links:G,linkThickness:H,linkColor:z}),nodes:i.a.createElement(!0===L?R:S,{key:"nodes",nodes:Z,color:V,borderWidth:m,borderColor:X,handleNodeHover:j?$:void 0,handleNodeLeave:j?ee:void 0})};return i.a.createElement(o.k,{width:W,height:F,margin:T,role:N},v.map((function(t,n){return"function"==typeof t?i.a.createElement(r.Fragment,{key:n},t(b(b({},e),{},{innerWidth:A,innerHeight:P,nodes:Z,links:G}))):te[t]})))};F.defaultProps=j;var L=Object(o.tb)(F),Y=function(e){return i.a.createElement(o.j,null,(function(t){var n=t.width,r=t.height;return i.a.createElement(L,Object.assign({width:n,height:r},e))}))},V=function(e){var t=e.width,n=e.height,u=e.margin,l=e.pixelRatio,c=e.nodes,s=e.links,f=e.linkDistance,h=e.repulsivity,d=e.distanceMin,y=e.distanceMax,p=e.iterations,v=e.layers,g=e.nodeColor,m=e.nodeBorderWidth,x=e.nodeBorderColor,k=e.linkThickness,_=e.linkColor,O=e.isInteractive,j=Object(r.useRef)(null),N=Object(o.nb)(t,n,u),q=N.margin,T=N.innerWidth,A=N.innerHeight,R=N.outerWidth,S=N.outerHeight,P=w(M({nodes:c,links:s,linkDistance:f,repulsivity:h,distanceMin:d,distanceMax:y,iterations:p,center:[T/2,A/2]}),2),W=P[0],D=P[1],I=Object(o.rb)(),B=C(g),F=Object(a.r)(x,I),L=E(k),Y=Object(a.r)(_,I);return Object(r.useEffect)((function(){j.current.width=R*l,j.current.height=S*l;var t=j.current.getContext("2d");t.scale(l,l),t.fillStyle=I.background,t.fillRect(0,0,R,S),t.translate(q.left,q.top),v.forEach((function(n){"links"===n?D.forEach((function(e){t.strokeStyle=Y(e),t.lineWidth=L(e),t.beginPath(),t.moveTo(e.source.x,e.source.y),t.lineTo(e.target.x,e.target.y),t.stroke()})):"nodes"===n?W.forEach((function(e){t.fillStyle=B(e),t.beginPath(),t.arc(e.x,e.y,e.radius,0,2*Math.PI),t.fill(),m>0&&(t.strokeStyle=F(e),t.lineWidth=m,t.stroke())})):"function"==typeof n&&n(t,b(b({},e),{},{nodes:W,links:D}))}))}),[j,R,S,v,I,W,D,B,m,F,L,Y]),i.a.createElement("canvas",{ref:j,width:R*l,height:S*l,style:{width:R,height:S,cursor:O?"auto":"normal"}})};V.defaultProps=N;var X=Object(o.tb)(V),H=function(e){return i.a.createElement(o.j,null,(function(t){var n=t.width,r=t.height;return i.a.createElement(X,Object.assign({width:n,height:r},e))}))}}).call(this,n("pCvA"))},BORk:function(e,t,n){"use strict";var r=function(e,t){var n;function r(){var r,i,o=n.length,a=0,u=0;for(r=0;r<o;++r)a+=(i=n[r]).x,u+=i.y;for(a=a/o-e,u=u/o-t,r=0;r<o;++r)(i=n[r]).x-=a,i.y-=u}return null==e&&(e=0),null==t&&(t=0),r.initialize=function(e){n=e},r.x=function(t){return arguments.length?(e=+t,r):e},r.y=function(e){return arguments.length?(t=+e,r):t},r};n("p0JG");function i(e,t,n,r){if(isNaN(t)||isNaN(n))return e;var i,o,a,u,l,c,s,f,h,d=e._root,y={data:r},p=e._x0,v=e._y0,g=e._x1,m=e._y1;if(!d)return e._root=y,e;for(;d.length;)if((c=t>=(o=(p+g)/2))?p=o:g=o,(s=n>=(a=(v+m)/2))?v=a:m=a,i=d,!(d=d[f=s<<1|c]))return i[f]=y,e;if(u=+e._x.call(null,d.data),l=+e._y.call(null,d.data),t===u&&n===l)return y.next=d,i?i[f]=y:e._root=y,e;do{i=i?i[f]=new Array(4):e._root=new Array(4),(c=t>=(o=(p+g)/2))?p=o:g=o,(s=n>=(a=(v+m)/2))?v=a:m=a}while((f=s<<1|c)==(h=(l>=a)<<1|u>=o));return i[h]=d,i[f]=y,e}var o=function(e,t,n,r,i){this.node=e,this.x0=t,this.y0=n,this.x1=r,this.y1=i};function a(e){return e[0]}function u(e){return e[1]}function l(e,t,n){var r=new c(null==t?a:t,null==n?u:n,NaN,NaN,NaN,NaN);return null==e?r:r.addAll(e)}function c(e,t,n,r,i,o){this._x=e,this._y=t,this._x0=n,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function s(e){for(var t={data:e.data},n=t;e=e.next;)n=n.next={data:e.data};return t}var f=l.prototype=c.prototype;f.copy=function(){var e,t,n=new c(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return n;if(!r.length)return n._root=s(r),n;for(e=[{source:r,target:n._root=new Array(4)}];r=e.pop();)for(var i=0;i<4;++i)(t=r.source[i])&&(t.length?e.push({source:t,target:r.target[i]=new Array(4)}):r.target[i]=s(t));return n},f.add=function(e){var t=+this._x.call(null,e),n=+this._y.call(null,e);return i(this.cover(t,n),t,n,e)},f.addAll=function(e){var t,n,r,o,a=e.length,u=new Array(a),l=new Array(a),c=1/0,s=1/0,f=-1/0,h=-1/0;for(n=0;n<a;++n)isNaN(r=+this._x.call(null,t=e[n]))||isNaN(o=+this._y.call(null,t))||(u[n]=r,l[n]=o,r<c&&(c=r),r>f&&(f=r),o<s&&(s=o),o>h&&(h=o));if(c>f||s>h)return this;for(this.cover(c,s).cover(f,h),n=0;n<a;++n)i(this,u[n],l[n],e[n]);return this},f.cover=function(e,t){if(isNaN(e=+e)||isNaN(t=+t))return this;var n=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(n))i=(n=Math.floor(e))+1,o=(r=Math.floor(t))+1;else{for(var a,u,l=i-n,c=this._root;n>e||e>=i||r>t||t>=o;)switch(u=(t<r)<<1|e<n,(a=new Array(4))[u]=c,c=a,l*=2,u){case 0:i=n+l,o=r+l;break;case 1:n=i-l,o=r+l;break;case 2:i=n+l,r=o-l;break;case 3:n=i-l,r=o-l}this._root&&this._root.length&&(this._root=c)}return this._x0=n,this._y0=r,this._x1=i,this._y1=o,this},f.data=function(){var e=[];return this.visit((function(t){if(!t.length)do{e.push(t.data)}while(t=t.next)})),e},f.extent=function(e){return arguments.length?this.cover(+e[0][0],+e[0][1]).cover(+e[1][0],+e[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},f.find=function(e,t,n){var r,i,a,u,l,c,s,f=this._x0,h=this._y0,d=this._x1,y=this._y1,p=[],v=this._root;for(v&&p.push(new o(v,f,h,d,y)),null==n?n=1/0:(f=e-n,h=t-n,d=e+n,y=t+n,n*=n);c=p.pop();)if(!(!(v=c.node)||(i=c.x0)>d||(a=c.y0)>y||(u=c.x1)<f||(l=c.y1)<h))if(v.length){var g=(i+u)/2,m=(a+l)/2;p.push(new o(v[3],g,m,u,l),new o(v[2],i,m,g,l),new o(v[1],g,a,u,m),new o(v[0],i,a,g,m)),(s=(t>=m)<<1|e>=g)&&(c=p[p.length-1],p[p.length-1]=p[p.length-1-s],p[p.length-1-s]=c)}else{var x=e-+this._x.call(null,v.data),b=t-+this._y.call(null,v.data),k=x*x+b*b;if(k<n){var w=Math.sqrt(n=k);f=e-w,h=t-w,d=e+w,y=t+w,r=v.data}}return r},f.remove=function(e){if(isNaN(o=+this._x.call(null,e))||isNaN(a=+this._y.call(null,e)))return this;var t,n,r,i,o,a,u,l,c,s,f,h,d=this._root,y=this._x0,p=this._y0,v=this._x1,g=this._y1;if(!d)return this;if(d.length)for(;;){if((c=o>=(u=(y+v)/2))?y=u:v=u,(s=a>=(l=(p+g)/2))?p=l:g=l,t=d,!(d=d[f=s<<1|c]))return this;if(!d.length)break;(t[f+1&3]||t[f+2&3]||t[f+3&3])&&(n=t,h=f)}for(;d.data!==e;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):t?(i?t[f]=i:delete t[f],(d=t[0]||t[1]||t[2]||t[3])&&d===(t[3]||t[2]||t[1]||t[0])&&!d.length&&(n?n[h]=d:this._root=d),this):(this._root=i,this)},f.removeAll=function(e){for(var t=0,n=e.length;t<n;++t)this.remove(e[t]);return this},f.root=function(){return this._root},f.size=function(){var e=0;return this.visit((function(t){if(!t.length)do{++e}while(t=t.next)})),e},f.visit=function(e){var t,n,r,i,a,u,l=[],c=this._root;for(c&&l.push(new o(c,this._x0,this._y0,this._x1,this._y1));t=l.pop();)if(!e(c=t.node,r=t.x0,i=t.y0,a=t.x1,u=t.y1)&&c.length){var s=(r+a)/2,f=(i+u)/2;(n=c[3])&&l.push(new o(n,s,f,a,u)),(n=c[2])&&l.push(new o(n,r,f,s,u)),(n=c[1])&&l.push(new o(n,s,i,a,f)),(n=c[0])&&l.push(new o(n,r,i,s,f))}return this},f.visitAfter=function(e){var t,n=[],r=[];for(this._root&&n.push(new o(this._root,this._x0,this._y0,this._x1,this._y1));t=n.pop();){var i=t.node;if(i.length){var a,u=t.x0,l=t.y0,c=t.x1,s=t.y1,f=(u+c)/2,h=(l+s)/2;(a=i[0])&&n.push(new o(a,u,l,f,h)),(a=i[1])&&n.push(new o(a,f,l,c,h)),(a=i[2])&&n.push(new o(a,u,h,f,s)),(a=i[3])&&n.push(new o(a,f,h,c,s))}r.push(t)}for(;t=r.pop();)e(t.node,t.x0,t.y0,t.x1,t.y1);return this},f.x=function(e){return arguments.length?(this._x=e,this):this._x},f.y=function(e){return arguments.length?(this._y=e,this):this._y};var h=function(e){return function(){return e}},d=function(){return 1e-6*(Math.random()-.5)};function y(e){return e.x+e.vx}function p(e){return e.y+e.vy}var v=function(e){var t,n,r=1,i=1;function o(){for(var e,o,u,c,s,f,h,v=t.length,g=0;g<i;++g)for(o=l(t,y,p).visitAfter(a),e=0;e<v;++e)u=t[e],f=n[u.index],h=f*f,c=u.x+u.vx,s=u.y+u.vy,o.visit(m);function m(e,t,n,i,o){var a=e.data,l=e.r,y=f+l;if(!a)return t>c+y||i<c-y||n>s+y||o<s-y;if(a.index>u.index){var p=c-a.x-a.vx,v=s-a.y-a.vy,g=p*p+v*v;g<y*y&&(0===p&&(g+=(p=d())*p),0===v&&(g+=(v=d())*v),g=(y-(g=Math.sqrt(g)))/g*r,u.vx+=(p*=g)*(y=(l*=l)/(h+l)),u.vy+=(v*=g)*y,a.vx-=p*(y=1-y),a.vy-=v*y)}}}function a(e){if(e.data)return e.r=n[e.data.index];for(var t=e.r=0;t<4;++t)e[t]&&e[t].r>e.r&&(e.r=e[t].r)}function u(){if(t){var r,i,o=t.length;for(n=new Array(o),r=0;r<o;++r)i=t[r],n[i.index]=+e(i,r,t)}}return"function"!=typeof e&&(e=h(null==e?1:+e)),o.initialize=function(e){t=e,u()},o.iterations=function(e){return arguments.length?(i=+e,o):i},o.strength=function(e){return arguments.length?(r=+e,o):r},o.radius=function(t){return arguments.length?(e="function"==typeof t?t:h(+t),u(),o):e},o};n("RqWj"),n("abGl"),n("gZHo"),n("Fdmb"),n("VlJN"),n("ZY1c");function g(e){return e.index}function m(e,t){var n=e.get(t);if(!n)throw new Error("missing: "+t);return n}var x=function(e){var t,n,r,i,o,a=g,u=function(e){return 1/Math.min(i[e.source.index],i[e.target.index])},l=h(30),c=1;function s(r){for(var i=0,a=e.length;i<c;++i)for(var u,l,s,f,h,y,p,v=0;v<a;++v)l=(u=e[v]).source,f=(s=u.target).x+s.vx-l.x-l.vx||d(),h=s.y+s.vy-l.y-l.vy||d(),f*=y=((y=Math.sqrt(f*f+h*h))-n[v])/y*r*t[v],h*=y,s.vx-=f*(p=o[v]),s.vy-=h*p,l.vx+=f*(p=1-p),l.vy+=h*p}function f(){if(r){var u,l,c=r.length,s=e.length,f=new Map(r.map((function(e,t){return[a(e,t,r),e]})));for(u=0,i=new Array(c);u<s;++u)(l=e[u]).index=u,"object"!=typeof l.source&&(l.source=m(f,l.source)),"object"!=typeof l.target&&(l.target=m(f,l.target)),i[l.source.index]=(i[l.source.index]||0)+1,i[l.target.index]=(i[l.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)l=e[u],o[u]=i[l.source.index]/(i[l.source.index]+i[l.target.index]);t=new Array(s),y(),n=new Array(s),p()}}function y(){if(r)for(var n=0,i=e.length;n<i;++n)t[n]=+u(e[n],n,e)}function p(){if(r)for(var t=0,i=e.length;t<i;++t)n[t]=+l(e[t],t,e)}return null==e&&(e=[]),s.initialize=function(e){r=e,f()},s.links=function(t){return arguments.length?(e=t,f(),s):e},s.id=function(e){return arguments.length?(a=e,s):a},s.iterations=function(e){return arguments.length?(c=+e,s):c},s.strength=function(e){return arguments.length?(u="function"==typeof e?e:h(+e),y(),s):u},s.distance=function(e){return arguments.length?(l="function"==typeof e?e:h(+e),p(),s):l},s},b=(n("Tw+y"),n("jr56"),n("6IHZ"),n("7qNv"),n("kr69"),{value:function(){}});function k(){for(var e,t=0,n=arguments.length,r={};t<n;++t){if(!(e=arguments[t]+"")||e in r)throw new Error("illegal type: "+e);r[e]=[]}return new w(r)}function w(e){this._=e}function _(e,t){return e.trim().split(/^|\s+/).map((function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}}))}function O(e,t){for(var n,r=0,i=e.length;r<i;++r)if((n=e[r]).name===t)return n.value}function j(e,t,n){for(var r=0,i=e.length;r<i;++r)if(e[r].name===t){e[r]=b,e=e.slice(0,r).concat(e.slice(r+1));break}return null!=n&&e.push({name:t,value:n}),e}w.prototype=k.prototype={constructor:w,on:function(e,t){var n,r=this._,i=_(e+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=t&&"function"!=typeof t)throw new Error("invalid callback: "+t);for(;++o<a;)if(n=(e=i[o]).type)r[n]=j(r[n],e.name,t);else if(null==t)for(n in r)r[n]=j(r[n],e.name,null);return this}for(;++o<a;)if((n=(e=i[o]).type)&&(n=O(r[n],e.name)))return n},copy:function(){var e={},t=this._;for(var n in t)e[n]=t[n].slice();return new w(e)},call:function(e,t){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=0,n=(r=this._[e]).length;o<n;++o)r[o].value.apply(t,i)},apply:function(e,t,n){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(t,n)}};var N,M,C=k,E=(n("a+rV"),0),q=0,T=0,A=1e3,R=0,S=0,P=0,W="object"==typeof performance&&performance.now?performance:Date,D="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function I(){return S||(D(B),S=W.now()+P)}function B(){S=0}function F(){this._call=this._time=this._next=null}function L(e,t,n){var r=new F;return r.restart(e,t,n),r}function Y(){S=(R=W.now())+P,E=q=0;try{!function(){I(),++E;for(var e,t=N;t;)(e=S-t._time)>=0&&t._call.call(null,e),t=t._next;--E}()}finally{E=0,function(){var e,t,n=N,r=1/0;for(;n;)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:N=t);M=e,X(r)}(),S=0}}function V(){var e=W.now(),t=e-R;t>A&&(P-=t,R=e)}function X(e){E||(q&&(q=clearTimeout(q)),e-S>24?(e<1/0&&(q=setTimeout(Y,e-W.now()-P)),T&&(T=clearInterval(T))):(T||(R=W.now(),T=setInterval(V,A)),E=1,D(Y)))}F.prototype=L.prototype={constructor:F,restart:function(e,t,n){if("function"!=typeof e)throw new TypeError("callback is not a function");n=(null==n?I():+n)+(null==t?0:+t),this._next||M===this||(M?M._next=this:N=this,M=this),this._call=e,this._time=n,X()},stop:function(){this._call&&(this._call=null,this._time=1/0,X())}};function H(e){return e.x}function z(e){return e.y}var J=10,Z=Math.PI*(3-Math.sqrt(5)),G=function(e){var t,n=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=new Map,l=L(s),c=C("tick","end");function s(){f(),c.call("tick",t),n<r&&(l.stop(),c.call("end",t))}function f(r){var l,c,s=e.length;void 0===r&&(r=1);for(var f=0;f<r;++f)for(n+=(o-n)*i,u.forEach((function(e){e(n)})),l=0;l<s;++l)null==(c=e[l]).fx?c.x+=c.vx*=a:(c.x=c.fx,c.vx=0),null==c.fy?c.y+=c.vy*=a:(c.y=c.fy,c.vy=0);return t}function h(){for(var t,n=0,r=e.length;n<r;++n){if((t=e[n]).index=n,null!=t.fx&&(t.x=t.fx),null!=t.fy&&(t.y=t.fy),isNaN(t.x)||isNaN(t.y)){var i=J*Math.sqrt(n),o=n*Z;t.x=i*Math.cos(o),t.y=i*Math.sin(o)}(isNaN(t.vx)||isNaN(t.vy))&&(t.vx=t.vy=0)}}function d(t){return t.initialize&&t.initialize(e),t}return null==e&&(e=[]),h(),t={tick:f,restart:function(){return l.restart(s),t},stop:function(){return l.stop(),t},nodes:function(n){return arguments.length?(e=n,h(),u.forEach(d),t):e},alpha:function(e){return arguments.length?(n=+e,t):n},alphaMin:function(e){return arguments.length?(r=+e,t):r},alphaDecay:function(e){return arguments.length?(i=+e,t):+i},alphaTarget:function(e){return arguments.length?(o=+e,t):o},velocityDecay:function(e){return arguments.length?(a=1-e,t):1-a},force:function(e,n){return arguments.length>1?(null==n?u.delete(e):u.set(e,d(n)),t):u.get(e)},find:function(t,n,r){var i,o,a,u,l,c=0,s=e.length;for(null==r?r=1/0:r*=r,c=0;c<s;++c)(a=(i=t-(u=e[c]).x)*i+(o=n-u.y)*o)<r&&(l=u,r=a);return l},on:function(e,n){return arguments.length>1?(c.on(e,n),t):c.on(e)}}},Q=function(){var e,t,n,r,i=h(-30),o=1,a=1/0,u=.81;function c(r){var i,o=e.length,a=l(e,H,z).visitAfter(f);for(n=r,i=0;i<o;++i)t=e[i],a.visit(y)}function s(){if(e){var t,n,o=e.length;for(r=new Array(o),t=0;t<o;++t)n=e[t],r[n.index]=+i(n,t,e)}}function f(e){var t,n,i,o,a,u=0,l=0;if(e.length){for(i=o=a=0;a<4;++a)(t=e[a])&&(n=Math.abs(t.value))&&(u+=t.value,l+=n,i+=n*t.x,o+=n*t.y);e.x=i/l,e.y=o/l}else{(t=e).x=t.data.x,t.y=t.data.y;do{u+=r[t.data.index]}while(t=t.next)}e.value=u}function y(e,i,l,c){if(!e.value)return!0;var s=e.x-t.x,f=e.y-t.y,h=c-i,y=s*s+f*f;if(h*h/u<y)return y<a&&(0===s&&(y+=(s=d())*s),0===f&&(y+=(f=d())*f),y<o&&(y=Math.sqrt(o*y)),t.vx+=s*e.value*n/y,t.vy+=f*e.value*n/y),!0;if(!(e.length||y>=a)){(e.data!==t||e.next)&&(0===s&&(y+=(s=d())*s),0===f&&(y+=(f=d())*f),y<o&&(y=Math.sqrt(o*y)));do{e.data!==t&&(h=r[e.data.index]*n/y,t.vx+=s*h,t.vy+=f*h)}while(e=e.next)}}return c.initialize=function(t){e=t,s()},c.strength=function(e){return arguments.length?(i="function"==typeof e?e:h(+e),s(),c):i},c.distanceMin=function(e){return arguments.length?(o=e*e,c):Math.sqrt(o)},c.distanceMax=function(e){return arguments.length?(a=e*e,c):Math.sqrt(a)},c.theta=function(e){return arguments.length?(u=e*e,c):Math.sqrt(u)},c},U=function(e){var t,n,r,i=h(.1);function o(e){for(var i,o=0,a=t.length;o<a;++o)(i=t[o]).vx+=(r[o]-i.x)*n[o]*e}function a(){if(t){var o,a=t.length;for(n=new Array(a),r=new Array(a),o=0;o<a;++o)n[o]=isNaN(r[o]=+e(t[o],o,t))?0:+i(t[o],o,t)}}return"function"!=typeof e&&(e=h(null==e?0:+e)),o.initialize=function(e){t=e,a()},o.strength=function(e){return arguments.length?(i="function"==typeof e?e:h(+e),a(),o):i},o.x=function(t){return arguments.length?(e="function"==typeof t?t:h(+t),a(),o):e},o},K=function(e){var t,n,r,i=h(.1);function o(e){for(var i,o=0,a=t.length;o<a;++o)(i=t[o]).vy+=(r[o]-i.y)*n[o]*e}function a(){if(t){var o,a=t.length;for(n=new Array(a),r=new Array(a),o=0;o<a;++o)n[o]=isNaN(r[o]=+e(t[o],o,t))?0:+i(t[o],o,t)}}return"function"!=typeof e&&(e=h(null==e?0:+e)),o.initialize=function(e){t=e,a()},o.strength=function(e){return arguments.length?(i="function"==typeof e?e:h(+e),a(),o):i},o.y=function(t){return arguments.length?(e="function"==typeof t?t:h(+t),a(),o):e},o};n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return Q})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return U})),n.d(t,"g",(function(){return K}))},fTqa:function(e,t,n){"use strict";n.r(t);n("1c7q"),n("XQVo");var r=n("mXGw"),i=n.n(r),o=n("6NhV"),a=n("ZS2m"),u=n("hvUk"),l=n.n(u),c=n("kNwl"),s=n("6zZa"),f=Object.freeze({pixelRatio:"undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,margin:{top:0,right:0,bottom:0,left:0},linkDistance:"distance",repulsivity:4,iterations:60,nodeColor:function(e){return e.color},nodeBorderWidth:1,nodeBorderColor:{theme:"background"},linkColor:o.b.linkColor,linkThickness:1,isInteractive:!0});t.default=function(){return i.a.createElement(a.a,{name:"NetworkCanvas",meta:l.a.NetworkCanvas,icon:"network",flavors:l.a.flavors,currentFlavor:"canvas",properties:c.a,initialProperties:f,defaultProperties:o.b,generateData:function(){return Object(s.g)()},getDataSize:function(e){return e.nodes.length}},(function(e,t,n,r){return i.a.createElement(o.e,Object.assign({nodes:t.nodes,links:t.links},e,{theme:n}))}))}},kNwl:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("VlJN"),n("YjJN"),n("Eb4t"),n("Fdmb"),n("IYjZ"),n("yvkl"),n("abGl");var r,i=n("6NhV"),o=n("RQLE");var a,u=[{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            Not required if using responsive component.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            Not required if using responsive component.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},(r={key:"margin",group:"Base",type:"object",help:"Chart margin.",controlType:"margin"},r.group="Base",r),{key:"linkDistance",group:"Simulation",type:"number | string | (link: Link) => number",help:"Control links' distance.",description:"\n            If you set a **number**, this value will be used for all links.\n\n            If you use a **string**, this will be used to pick the distance\n            from the corresponding link property, thus, this property\n            should exist on each link.\n\n            If you use a **function**, it will receive a link and must return\n            the desired distance.\n        "},{key:"repulsivity",group:"Simulation",type:"number",help:"Control how nodes repel each other.",description:"\n            This value will also affect the strength\n            of `distanceMin` and `distanceMax`.\n        ",controlType:"range",controlOptions:{min:1,max:100},defaultValue:i.c.repulsivity},{key:"distanceMin",group:"Simulation",type:"number",help:"Sets the minimum distance between nodes for the many-body force.",defaultValue:i.c.distanceMin},{key:"distanceMax",group:"Simulation",help:"Sets the maximum distance between nodes for the many-body force.",defaultValue:i.c.distanceMax},{key:"iterations",group:"Simulation",help:"Adjust the simulation quality.",description:"\n            Increasing this number will result in a **more accurate simulation**,\n            however it will also involve more computing.\n        ",type:"number",defaultValue:i.c.iterations,controlType:"range",controlOptions:{min:60,max:260}},{key:"nodeColor",group:"Nodes",type:"string | (node: Node) => string",help:"Control nodes' color."},{key:"nodeBorderWidth",group:"Nodes",type:"number | (node: Node) => number",help:"Control nodes' border width.",defaultValue:i.c.nodeBorderWidth,controlType:"lineWidth"},{key:"nodeBorderColor",group:"Nodes",type:"string | object | (link: Link) => string",help:"Control nodes' border color.",defaultValue:i.c.nodeBorderColor,controlType:"inheritedColor"},{key:"linkThickness",enableControlForFlavors:["canvas"],group:"Links",type:"number | (link: Link) => number",help:"Control links' thickness.",defaultValue:i.c.linkThickness,controlType:"lineWidth"},{key:"linkColor",group:"Links",type:"string | (link: Link) => string",help:"Control links' color.",defaultValue:i.c.linkColor,controlType:"inheritedColor",controlOptions:{inheritableProperties:["source.color","target.color"]}},{key:"tooltip",group:"Interactivity",type:"Function",required:!1,help:"Custom tooltip component.",description:"\n            A function allowing complete tooltip customisation,\n            it must return a valid HTML\n            element and will receive the node's data.\n        "},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",required:!1,defaultValue:i.c.layers}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(a=Object(o.e)(["svg"],i.c))||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),l=Object(o.d)(u)}}]);
//# sourceMappingURL=component---src-pages-network-canvas-js-f86d4a3fbc87edb39d58.js.map