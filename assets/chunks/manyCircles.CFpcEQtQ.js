import{P as h}from"./prism.CBfTwKG-.js";import{_ as $,o as n,c,j as o,F as w,B as b,b as k,w as f,a as _,t as v,E as l,C as a}from"./framework.b1umHdsy.js";const V={name:"hollow-circle",data(){return{positions:["top","bottom","left","right"],position:"bottom",width:300,height:100,radio:5,color:"#00adb5",shadow:!1}},computed:{style(){let s="",t="";const d=this.position==="top"||this.position==="bottom"?"to right":"to bottom",p=this.position==="top"||this.position==="bottom"?`${this.radio*3}px ${this.radio}px;`:`${this.radio}px ${this.radio*3}px;`;switch(this.position){case"top":s=`height: ${this.radio}px;
  width:100%;
  left: 0;
  top: ${this.radio*-1}px;`,t=`${this.radio*2}px 0px`;break;case"bottom":s=`height: ${this.radio}px;
  width:100%;
  left: 0;
  bottom: ${this.radio*-1}px;`,t=`${this.radio*2}px ${this.radio}px`;break;case"left":s=`height: 100%;
  width:${this.radio}px;
  top: 0;
  left: ${this.radio*-1}px;`,t=`0px ${this.radio*2}px`;break;case"right":s=`height: 100%;
  width:${this.radio}px;
  top: 0;
  right: ${this.radio*-1}px;`,t=`${this.radio}px ${this.radio*2}px`;break}return`.hollow-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: ${this.color};
  margin-${this.position}: ${this.radio*2}px;
  ${this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":""}
}
.hollow-circles::after {
  content: '';
  position: absolute;
  ${s}
  background-image: linear-gradient(${d}, ${this.color} ${this.radio}px, transparent ${this.radio}px, transparent),
  radial-gradient(${this.radio*2}px circle at ${t}, transparent ${this.radio}px, ${this.color} ${this.radio}px);
  background-size: ${p}
}`}},watch:{style(){this.setStyle(),this.setStyleToBody()}},methods:{setStyle(){this.$refs.css.innerHTML=h.highlight(this.style,h.languages.css)},setStyleToBody(){let s=document.querySelector("#hollow-circles-style");s.innerHTML=this.style}},mounted(){const s=document.createElement("style");s.setAttribute("id","hollow-circles-style"),document.head.appendChild(s),setTimeout(()=>{this.setStyle(),this.setStyleToBody()})}},S={class:"hollow-circle-container"},B={class:"key-value"},C={class:"key-value"},T={class:"key-value"},z={class:"key-value"},U={class:"key-value"},D={class:"language-css extra-class"},E={class:"language-css"},L={ref:"css"};function N(s,t,d,p,e,P){const m=a("el-radio"),r=a("el-input-number"),u=a("el-switch"),x=a("DemoCopy");return n(),c("div",S,[t[10]||(t[10]=o("div",{class:"warpper"},[o("div",{class:"hollow-circles"})],-1)),o("div",B,[t[5]||(t[5]=o("span",{class:"key"},"位置：",-1)),(n(!0),c(w,null,b(e.positions,(i,y)=>(n(),k(m,{modelValue:e.position,"onUpdate:modelValue":t[0]||(t[0]=g=>e.position=g),key:y,value:i},{default:f(()=>[_(v(i),1)]),_:2},1032,["modelValue","value"]))),128))]),o("div",C,[t[6]||(t[6]=o("span",{class:"key"},"宽度：",-1)),l(r,{modelValue:e.width,"onUpdate:modelValue":t[1]||(t[1]=i=>e.width=i),size:"small",min:100,max:500,label:"宽度"},null,8,["modelValue"])]),o("div",T,[t[7]||(t[7]=o("span",{class:"key"},"长度：",-1)),l(r,{modelValue:e.height,"onUpdate:modelValue":t[2]||(t[2]=i=>e.height=i),size:"small",min:50,max:500,label:"长度"},null,8,["modelValue"])]),o("div",z,[t[8]||(t[8]=o("span",{class:"key"},"半径：",-1)),l(r,{modelValue:e.radio,"onUpdate:modelValue":t[3]||(t[3]=i=>e.radio=i),size:"small",min:1,max:10,label:"半径"},null,8,["modelValue"])]),o("div",U,[t[9]||(t[9]=o("span",{class:"key"},"阴影：",-1)),l(u,{modelValue:e.shadow,"onUpdate:modelValue":t[4]||(t[4]=i=>e.shadow=i),"active-color":"#00adb5"},null,8,["modelValue"])]),o("div",D,[l(x,{lang:"css"}),o("pre",E,[o("code",L,null,512)])])])}const M=$(V,[["render",N],["__scopeId","data-v-198febe1"]]);export{M as default};
