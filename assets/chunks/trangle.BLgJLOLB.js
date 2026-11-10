import{P as i}from"./prism.CBfTwKG-.js";import{_ as w,o as u,c as p,j as s,N as g,F as y,B as V,t as d,E as l,C as m}from"./framework.b1umHdsy.js";const b={name:"",data(){return{radius:50,deg:60,startAngle:0,color:"#00adb5"}},computed:{width(){return this.radius*2},spanStyles(){const t=Math.PI/180*this.deg,e=this.radius,r=2,c=(Math.tan(t/r/2)*e).toFixed(4);return Array.from({length:r},(o,a)=>({transform:`translate(-50%, 0) rotate(${this.startAngle+this.deg/r/2+a*this.deg/r}deg)`,borderWidth:`${e}px ${c}px 0 ${c}px`,borderColor:`${this.color} transparent transparent transparent`}))},code(){const t=this.spanStyles.map((e,r)=>`
  .sector-container span:nth-child(${r+1}) {
    transform: ${e.transform};
    border-width: ${e.borderWidth};
    border-color: ${e.borderColor};
  }`).join("");return this.getContainer(this.radius)+this.setSpans()+t}},watch:{code(){this.setCode()}},methods:{setSpans(){return`
  .sector-container span {
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 0;
    border-style: solid;
    transform-origin: bottom center;
  }`},getContainer(t){return`.sector-container {
    width: ${t*2}px;
    height: ${t*2}px;
    background: transparent;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }`},setCode(){this.$refs.code.innerHTML=i.highlight(this.code,i.languages.css)},setHtmlCode(){const t=`<div class="sector-container">
  <span></span>
  <span></span>
</div>`;this.$refs.htmlcode.innerHTML=i.highlight(t,i.languages.html)}},mounted(){setTimeout(()=>{this.setCode(),this.setHtmlCode()})}},C={class:"ourter-container"},k={class:"trangle-outer-container"},x={class:"key-value-container"},$={class:"w-50"},S={class:"key"},A={class:"w-50"},z={class:"key"},B={class:"w-50"},H={class:"key"},M={class:"w-50"},U={class:"key"},D={class:"block"},F={class:"code language-css extra-class"},L={class:"language-css"},N={ref:"code"},P={class:"code language-html extra-class"},T={class:"language-html"},j={ref:"htmlcode"};function E(t,e,r,c,o,a){const h=m("el-slider"),f=m("el-color-picker"),_=m("DemoCopy");return u(),p("div",C,[s("div",k,[s("div",{class:"sector-container",style:g({width:`${a.width}px`,height:`${a.width}px`})},[(u(!0),p(y,null,V(a.spanStyles,(n,v)=>(u(),p("span",{key:v,style:g(n)},null,4))),128))],4)]),s("div",x,[s("div",$,[s("span",S,d(t.__("半径")),1),l(h,{class:"slider",modelValue:o.radius,"onUpdate:modelValue":e[0]||(e[0]=n=>o.radius=n),min:20,max:150,"show-input":"","input-size":"small"},null,8,["modelValue"])]),s("div",A,[s("span",z,d(t.__("角度")),1),l(h,{class:"slider",modelValue:o.deg,"onUpdate:modelValue":e[1]||(e[1]=n=>o.deg=n),min:1,max:359,"show-input":"","input-size":"small"},null,8,["modelValue"])]),s("div",B,[s("span",H,d(t.__("起始角度")),1),l(h,{class:"slider",modelValue:o.startAngle,"onUpdate:modelValue":e[2]||(e[2]=n=>o.startAngle=n),min:0,max:360,"show-input":"","input-size":"small"},null,8,["modelValue"])]),s("div",M,[s("span",U,d(t.__("颜色")),1),s("div",D,[l(f,{modelValue:o.color,"onUpdate:modelValue":e[3]||(e[3]=n=>o.color=n)},null,8,["modelValue"])])])]),s("div",F,[l(_,{lang:"css"}),s("pre",L,[s("code",N,null,512)])]),s("div",P,[l(_,{lang:"html"}),s("pre",T,[s("code",j,null,512)])])])}const R=w(b,[["render",E]]);export{R as default};
