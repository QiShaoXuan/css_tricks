import{P as k}from"./prism.CBfTwKG-.js";import{_ as P,o as r,c as m,j as e,F as x,B as g,b as y,w as $,a as b,t as f,E as l,e as v,C as c}from"./framework.b1umHdsy.js";const z={name:"hollow-two-circle",data(){return{width:300,height:100,radio:10,dashed:!0,position:"horizontal",distance:60,positions:["horizontal","vertical"],color1:"#00adb5",color2:"#eeeeee",shadow:!0,composeRadio:5,composePositionH:"right",composePositionV:"bottom",composePositionsHorizontal:["left","right"],composePositionsVertical:["top","bottom"]}},computed:{style(){let i="",o="",h="",a=this.composePositionH==="left"?this.color1:this.color2,t="";const w=this.position==="vertical"&&(this.composePositionV==="top"||this.composePositionV==="bottom")?`${this.composeRadio*3}px ${this.composeRadio}px;`:`${this.composeRadio}px ${this.composeRadio*3}px;`;if(this.position==="vertical")switch(this.composePositionV){case"top":t="to right",a=this.color1,i=`height: ${this.composeRadio}px;
  width:100%;
  left: 0;
  top: ${this.composeRadio*-1}px;`,o=`${this.composeRadio*2}px 0px`;break;case"bottom":t="to right",a=this.color2,i=`height: ${this.composeRadio}px;
  width:100%;
  left: 0;
  bottom: ${this.composeRadio*-1}px;`,o=`${this.composeRadio*2}px ${this.composeRadio}px`;break}if(this.position==="horizontal")switch(this.composePositionH){case"left":t="to bottom",a=this.color1,i=`height: 100%;
  width:${this.composeRadio}px;
  top: 0;
  left: ${this.composeRadio*-1}px;`,o=`0px ${this.composeRadio*2}px`;break;case"right":t="to bottom",a=this.color2,i=`height: 100%;
  width:${this.composeRadio}px;
  top: 0;
  right: ${this.composeRadio*-1}px;`,o=`${this.composeRadio}px ${this.composeRadio*2}px`;break}switch(h=`.hollow-compose-many-circles::after {
  content: '';
  position: absolute;
  ${i}
  background-image: linear-gradient(${t}, ${a} ${this.composeRadio}px, transparent ${this.composeRadio}px, transparent),
  radial-gradient(${this.composeRadio*2}px circle at ${o}, transparent ${this.composeRadio}px, ${a} ${this.composeRadio}px);
  background-size: ${w}
  }`,this.position){case"horizontal":return`.hollow-compose-many-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right /${this.width-this.distance}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width-this.distance}px 51% no-repeat;
   ${this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":""}
}

${this.dashed?`.hollow-compose-many-circles::before {
  content: '';
  height: ${this.height-this.radio*2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}`:""}

${h}
`;case"vertical":return`.hollow-compose-many-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) top right / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height-this.distance}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height-this.distance}px no-repeat;
   ${this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":""}
}

${this.dashed?`.hollow-compose-many-circles::before {
  content: '';
  width: ${this.width-this.radio*2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.distance}px;
  margin: auto;
}`:""}

${h}
`}}},watch:{style(){this.setStyle(),this.setStyleToBody()}},methods:{setStyle(){this.$refs.css.innerHTML=k.highlight(this.style,k.languages.css)},setStyleToBody(){let i=document.querySelector("#hollow-compose-many-circles-style");i.innerHTML=this.style}},mounted(){const i=document.createElement("style");i.setAttribute("id","hollow-compose-many-circles-style"),document.head.appendChild(i),setTimeout(()=>{this.setStyle(),this.setStyleToBody()})}},S={class:"key-value"},U={class:"key-value"},C={class:"key-value"},H={class:"key-value"},B={class:"key-value"},T={class:"key-value"},_={class:"key-value"},N={class:"key-value"},D={class:"language-css extra-class"},E={class:"language-css"},L={ref:"css"};function M(i,o,h,a,t,w){const u=c("el-radio"),n=c("el-input-number"),V=c("el-switch"),R=c("DemoCopy");return r(),m("div",null,[o[20]||(o[20]=e("div",{class:"warpper"},[e("div",{class:"hollow-compose-many-circles"})],-1)),e("div",S,[o[10]||(o[10]=e("span",{class:"key"},"位置：",-1)),(r(!0),m(x,null,g(t.positions,(s,p)=>(r(),y(u,{modelValue:t.position,"onUpdate:modelValue":o[0]||(o[0]=d=>t.position=d),key:p,value:s},{default:$(()=>[b(f(s),1)]),_:2},1032,["modelValue","value"]))),128))]),e("div",U,[o[11]||(o[11]=e("span",{class:"key"},"组合半径：",-1)),l(n,{modelValue:t.composeRadio,"onUpdate:modelValue":o[1]||(o[1]=s=>t.composeRadio=s),size:"small",min:1,max:10,label:"半径"},null,8,["modelValue"])]),e("div",C,[o[12]||(o[12]=e("span",{class:"key"},"组合位置：",-1)),t.position==="horizontal"?(r(!0),m(x,{key:0},g(t.composePositionsHorizontal,(s,p)=>(r(),y(u,{modelValue:t.composePositionH,"onUpdate:modelValue":o[2]||(o[2]=d=>t.composePositionH=d),key:p,value:s},{default:$(()=>[b(f(s),1)]),_:2},1032,["modelValue","value"]))),128)):v("",!0),t.position==="vertical"?(r(!0),m(x,{key:1},g(t.composePositionsVertical,(s,p)=>(r(),y(u,{modelValue:t.composePositionV,"onUpdate:modelValue":o[3]||(o[3]=d=>t.composePositionV=d),key:p,value:s},{default:$(()=>[b(f(s),1)]),_:2},1032,["modelValue","value"]))),128)):v("",!0)]),e("div",H,[o[13]||(o[13]=e("span",{class:"key"},"宽度：",-1)),l(n,{modelValue:t.width,"onUpdate:modelValue":o[4]||(o[4]=s=>t.width=s),size:"small",min:100,max:500,label:"宽度"},null,8,["modelValue"])]),e("div",B,[o[14]||(o[14]=e("span",{class:"key"},"长度：",-1)),l(n,{modelValue:t.height,"onUpdate:modelValue":o[5]||(o[5]=s=>t.height=s),size:"small",min:50,max:500,label:"长度"},null,8,["modelValue"])]),e("div",T,[o[15]||(o[15]=e("span",{class:"key"},"距离：",-1)),l(n,{modelValue:t.distance,"onUpdate:modelValue":o[6]||(o[6]=s=>t.distance=s),size:"small",min:40,max:200,label:"距离"},null,8,["modelValue"])]),e("div",_,[o[16]||(o[16]=e("span",{class:"key"},"半径：",-1)),l(n,{modelValue:t.radio,"onUpdate:modelValue":o[7]||(o[7]=s=>t.radio=s),size:"small",min:1,max:20,label:"半径"},null,8,["modelValue"])]),e("div",N,[o[17]||(o[17]=e("span",{class:"key"},"虚线：",-1)),l(V,{modelValue:t.dashed,"onUpdate:modelValue":o[8]||(o[8]=s=>t.dashed=s),"active-color":"#00adb5"},null,8,["modelValue"]),o[18]||(o[18]=e("span",{style:{width:"100px"}},null,-1)),o[19]||(o[19]=e("span",{class:"key"},"阴影：",-1)),l(V,{modelValue:t.shadow,"onUpdate:modelValue":o[9]||(o[9]=s=>t.shadow=s),"active-color":"#00adb5"},null,8,["modelValue"])]),e("div",D,[l(R,{lang:"css"}),e("pre",E,[e("code",L,null,512)])])])}const q=P(z,[["render",M],["__scopeId","data-v-1552eeee"]]);export{q as default};
