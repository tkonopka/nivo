(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{zoQ5:function(e,r,t){"use strict";t.r(r);var n=t("mXGw"),o=t.n(n),a=t("NYG6"),i=t.n(a),l=t("Izya"),s=t("6zZa"),u=t("ZS2m"),c=t("HMBA"),p=t.n(c),d=t("Eo5u"),m=t("RQLE"),g=[{key:"data",group:"Base",help:"Chart data.",description:"\n            Chart data, which must conform to this structure:\n            ```\n            Array<{\n                id:        {string|number}\n                title?:    {ReactNode}\n                subtitle?: {ReactNode}\n                data: Array<{\n                    ranges:   number[]\n                    measures: number[]\n                    markers?: number[]\n                }>\n            }>\n            ```\n\n            If `title` is `undefined`, `id` will be used for\n            `title`.\n        ",type:"object[]",required:!0},{key:"width",enableControlForFlavors:["api"],group:"Base",help:"Chart width.",description:"not required if using `ResponsiveBullet`.",type:"number",required:!0,controlType:"range",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],group:"Base",help:"Chart height.",description:"not required if using `ResponsiveBullet`.",type:"number",required:!0,controlType:"range",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"layout",group:"Base",help:"How to display items.",type:"string",required:!1,defaultValue:l.c.layout,controlType:"radio",controlOptions:{choices:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}]}},{key:"reverse",group:"Base",help:"Reverse chart.",description:"\n            Reverse chart, starts on top instead of bottom\n            for vertical layout and right instead of left\n            for horizontal one.\n        ",type:"boolean",required:!1,defaultValue:l.c.reverse,controlType:"switch"},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"spacing",help:"define spacing between items.",type:"number",required:!1,defaultValue:l.c.spacing,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:100}},{key:"measureSize",help:"define size of measure related to item size, expressed as a ratio.",type:"number",required:!1,defaultValue:l.c.measureSize,controlType:"range",group:"Base",controlOptions:{min:0,max:1,step:.05}},{key:"markerSize",help:"define size of markers related to item size, expressed as a ratio.",type:"number",required:!1,defaultValue:l.c.markerSize,controlType:"range",group:"Base",controlOptions:{min:0,max:2,step:.05}},m.f,{key:"rangeComponent",flavors:["svg"],group:"Style",help:"Custom component for ranges.",type:"Function",required:!1},{key:"rangeColors",help:"Ranges colors",description:"\n            Defines colors for ranges,\n            you can either use categorical colors:\n            `greens` or sequential form: `seq:green`.\n        ",type:"string | Function | string[]",required:!1,defaultValue:l.c.rangeColors,controlType:"colors",group:"Style",controlOptions:{includeSequential:!0}},{key:"measureComponent",flavors:["svg"],group:"Style",help:"Custom component for measures.",type:"Function",required:!1},{key:"measureColors",help:"Measures colors.",description:"\n            Defines colors for measures,\n            you can either use categorical colors:\n            `greens` or sequential form: `seq:green`.\n        ",type:"string | Function | string[]",required:!1,defaultValue:l.c.measureColors,controlType:"colors",group:"Style",controlOptions:{includeSequential:!0}},{key:"markerComponent",flavors:["svg"],group:"Style",help:"Custom component for markers.",type:"Function",required:!1},{key:"markerColors",help:"Markers colors.",description:"\n            Defines colors for markers,\n            you can either use categorical colors:\n            `greens` or sequential form: `seq:green`.\n        ",type:"string | Function| string[]",required:!1,defaultValue:l.c.markerColors,controlType:"colors",group:"Style",controlOptions:{includeSequential:!0}},{key:"axisPosition",help:"Where to put axis.",type:"string",required:!1,defaultValue:l.c.axisPosition,controlType:"radio",group:"Axes",controlOptions:{choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}},{key:"titlePosition",help:"Where to put title.",type:"string",required:!1,defaultValue:l.c.titlePosition,controlType:"radio",group:"Title",controlOptions:{choices:[{label:"before",value:"before"},{label:"after",value:"after"}]}},{key:"titleAlign",help:"title alignment.",type:"string",required:!1,defaultValue:l.c.titleAlign,controlType:"choices",group:"Title",controlOptions:{choices:[{label:"start",value:"start"},{label:"middle",value:"middle"},{label:"end",value:"end"}]}},{key:"titleOffsetX",help:"title x offset from bullet edge.",type:"number",required:!1,defaultValue:l.c.titleOffset,controlType:"range",group:"Title",controlOptions:{min:-100,max:100,unit:"px"}},{key:"titleOffsetY",help:"title y offset from bullet edge.",type:"number",required:!1,defaultValue:l.c.titleOffset,controlType:"range",group:"Title",controlOptions:{min:-100,max:100,unit:"px"}},{key:"titleRotation",help:"title rotation.",type:"number",required:!1,defaultValue:l.c.titleRotation,controlType:"angle",group:"Title",controlOptions:{start:90,min:-360,max:360,step:5}},{key:"onRangeClick",flavors:["svg"],type:"(range, event) => void",group:"Interactivity",required:!1,help:"onClick handler for ranges.",description:"\n            onClick handler for ranges, will receive range\n            data as first argument & event as second one.\n\n            The data has the following shape:\n            ```\n            {\n                id:    string,\n                v0:    number,\n                v1:    number,\n                index: number,\n                color: string,\n            }\n            ```\n\n            `v1` is the value of the range while\n            `v0` is the value of previous range.\n        "},{key:"onMeasureClick",flavors:["svg"],type:"(measure, event) => void",group:"Interactivity",required:!1,help:"onClick handler for measures.",description:"\n            onClick handler for measures, will receive measure\n            data as first argument & event as second one.\n\n            The data has the following shape:\n            ```\n            {\n                id:    string,\n                v0:    number,\n                v1:    number,\n                index: number,\n                color: string,\n            }\n            ```\n\n            `v1` is the value of the measure while\n            `v0` is the value of previous measure.\n        "},{key:"onMarkerClick",flavors:["svg"],type:"(marker, event) => void",group:"Interactivity",required:!1,help:"onClick handler for markers.",description:"\n            onClick handler for markers, will receive marker\n            data as first argument & event as second one.\n\n            The data has the following shape:\n            ```\n            {\n                id:    string,\n                value: number,\n                index: number,\n                color: string,\n            }\n            ```\n        "}].concat(Object(d.a)(Object(m.e)(["svg"],l.c,"react-spring"))),f=Object(m.d)(g),y=function(){return[Object(s.a)("temp.",i()([100,120,140])[0]),Object(s.a)("power",2,{float:!0,measureCount:2}),Object(s.a)("volume",i()([40,60,80])[0],{rangeCount:8}),Object(s.a)("cost",5e5,{measureCount:2}),Object(s.a)("revenue",i()([9,11,13])[0],{markerCount:2})]},h={margin:{top:50,right:90,bottom:50,left:90},layout:l.c.layout,reverse:l.c.reverse,spacing:46,titlePosition:l.c.titlePosition,titleAlign:"start",titleOffsetX:-70,titleOffsetY:l.c.titleOffsetY,titleRotation:l.c.titleRotation,measureSize:.2,markerSize:.6,axisPosition:l.c.axisPosition,rangeColors:l.c.rangeColors,measureColors:l.c.measureColors,markerColors:l.c.markerColors,animate:l.c.animate,motionConfig:l.c.motionConfig};r.default=function(){return o.a.createElement(u.a,{name:"Bullet",meta:p.a.Bullet,icon:"bullet",flavors:p.a.flavors,currentFlavor:"svg",properties:f,initialProperties:h,defaultProperties:l.c,generateData:y},(function(e,r,t,n){return o.a.createElement(l.b,Object.assign({data:r},e,{theme:t,onRangeClick:function(e){n({type:"click",label:"[range] "+e.id+": ["+e.v0+", "+e.v1+"]",color:e.color,data:e})},onMeasureClick:function(e){n({type:"click",label:"[measure] "+e.id+": ["+e.v0+", "+e.v1+"]",color:e.color,data:e})},onMarkerClick:function(e){n({type:"click",label:"[marker] "+e.id+": "+e.value,color:e.color,data:e})}}))}))}}}]);
//# sourceMappingURL=component---src-pages-bullet-index-js-f9814ec887379b0743be.js.map