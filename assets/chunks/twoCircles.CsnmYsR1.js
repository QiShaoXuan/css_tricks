import{P as p}from"./prism.CBfTwKG-.js";import{_ as w,o as n,c as h,j as e,F as x,B as y,b as f,w as b,a as $,t as v,E as i,C as r}from"./framework.b1umHdsy.js";const V={name:"hollow-two-circle",data(){return{width:300,height:100,radio:10,dashed:!0,position:"horizontal",distance:60,positions:["horizontal","vertical"],color1:"#00adb5",color2:"#eeeeee",shadow:!0}},computed:{style(){switch(this.position){case"horizontal":return`.hollow-two-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right /${this.width-this.distance}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width-this.distance}px 51% no-repeat;
   ${this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":""}
}

${this.dashed?`.hollow-two-circles::after {
  content: '';
  height: ${this.height-this.radio*2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}`:""}
`;case"vertical":return`.hollow-two-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) top right / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height-this.distance}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height-this.distance}px no-repeat;
   ${this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":""}
}

${this.dashed?`.hollow-two-circles::after {
  content: '';
  width: ${this.width-this.radio*2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.distance}px;
  margin: auto;
}`:""}
`}}},watch:{style(){this.setStyle(),this.setStyleToBody()}},methods:{setStyle(){this.$refs.css.innerHTML=p.highlight(this.style,p.languages.css)},setStyleToBody(){let l=document.querySelector("#hollow-two-circles-style");l.innerHTML=this.style}},mounted(){const l=document.createElement("style");l.setAttribute("id","hollow-two-circles-style"),document.head.appendChild(l),setTimeout(()=>{this.setStyle(),this.setStyleToBody()})}},k={class:"key-value"},_={class:"key-value"},B={class:"key-value"},S={class:"key-value"},z={class:"key-value"},C={class:"key-value"},T={class:"language-css extra-class"},U={class:"language-css"},D={ref:"css"};function E(l,t,L,N,o,F){const c=r("el-radio"),a=r("el-input-number"),d=r("el-switch"),u=r("DemoCopy");return n(),h("div",null,[t[15]||(t[15]=e("div",{class:"warpper"},[e("div",{class:"hollow-two-circles"})],-1)),e("div",k,[t[7]||(t[7]=e("span",{class:"key"},"位置：",-1)),(n(!0),h(x,null,y(o.positions,(s,m)=>(n(),f(c,{modelValue:o.position,"onUpdate:modelValue":t[0]||(t[0]=g=>o.position=g),key:m,value:s},{default:b(()=>[$(v(s),1)]),_:2},1032,["modelValue","value"]))),128))]),e("div",_,[t[8]||(t[8]=e("span",{class:"key"},"宽度：",-1)),i(a,{modelValue:o.width,"onUpdate:modelValue":t[1]||(t[1]=s=>o.width=s),size:"small",min:100,max:500,label:"宽度"},null,8,["modelValue"])]),e("div",B,[t[9]||(t[9]=e("span",{class:"key"},"长度：",-1)),i(a,{modelValue:o.height,"onUpdate:modelValue":t[2]||(t[2]=s=>o.height=s),size:"small",min:50,max:500,label:"长度"},null,8,["modelValue"])]),e("div",S,[t[10]||(t[10]=e("span",{class:"key"},"距离：",-1)),i(a,{modelValue:o.distance,"onUpdate:modelValue":t[3]||(t[3]=s=>o.distance=s),size:"small",min:40,max:200,label:"距离"},null,8,["modelValue"])]),e("div",z,[t[11]||(t[11]=e("span",{class:"key"},"半径：",-1)),i(a,{modelValue:o.radio,"onUpdate:modelValue":t[4]||(t[4]=s=>o.radio=s),size:"small",min:1,max:20,label:"半径"},null,8,["modelValue"])]),e("div",C,[t[12]||(t[12]=e("span",{class:"key"},"虚线：",-1)),i(d,{modelValue:o.dashed,"onUpdate:modelValue":t[5]||(t[5]=s=>o.dashed=s),"active-color":"#00adb5"},null,8,["modelValue"]),t[13]||(t[13]=e("span",{style:{width:"100px"}},null,-1)),t[14]||(t[14]=e("span",{class:"key"},"阴影：",-1)),i(d,{modelValue:o.shadow,"onUpdate:modelValue":t[6]||(t[6]=s=>o.shadow=s),"active-color":"#00adb5"},null,8,["modelValue"])]),e("div",T,[i(u,{lang:"css"}),e("pre",U,[e("code",D,null,512)])])])}const P=w(V,[["render",E],["__scopeId","data-v-b98c893a"]]);export{P as default};
