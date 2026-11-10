import{P as f}from"./prism.CBfTwKG-.js";import{_ as k,o as a,c as h,j as e,F as m,B as x,b as u,w as $,a as g,t as w,e as y,E as r,C as p}from"./framework.b1umHdsy.js";const v={name:"hollow-compose-three-circles",data(){return{width:300,height:100,radio:10,dashed:!0,position:"horizontal",distance:60,positions:["horizontal","vertical"],color1:"#00adb5",color2:"#eeeeee",shadow:!0,composePositionH:"right",composePositionV:"bottom",composePositionsHorizontal:["left","right"],composePositionsVertical:["top","bottom"]}},computed:{style(){let s="";switch(this.position){case"horizontal":switch(this.composePositionH){case"right":s=`background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) bottom left /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) ${this.distance}px 0/${this.width-this.distance-this.radio}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) ${this.distance}px ${this.height/2}px /${this.width-this.distance-this.radio}px 51% no-repeat,
    radial-gradient(circle at ${this.radio}px ${this.height/2}px, transparent ${this.radio}px, ${this.color2} 0) ${this.width-this.radio}px 0/${this.radio}px ${this.height}px no-repeat;`;break;case"left":s=`background: radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color1} 0) ${this.radio}px 0 / ${this.distance}px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.radio}px ${this.height/2}px /${this.distance}px 51% no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) top right/${this.width-this.distance-this.radio}px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color2} 0) bottom right /${this.width-this.distance-this.radio}px 51% no-repeat,
    radial-gradient(circle at 0 ${this.height/2}px, transparent ${this.radio}px, ${this.color1} 0) top left/${this.radio}px ${this.height}px no-repeat;`;break}return`.hollow-compose-three-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  ${s}
   ${this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":""}
}

${this.dashed?`.hollow-compose-three-circles::after {
  content: '';
  height: ${this.height-this.radio*2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: ${this.composePositionH==="left"?this.distance+this.radio:this.distance}px;
  top: 0;
  bottom: 0;
  margin: auto;
}`:""}
`;case"vertical":switch(this.composePositionV){case"top":s=`background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.width/2}px ${this.radio}px / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) 0 ${this.radio}px / 51% ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) bottom right / 51% ${this.height-this.distance-this.radio}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) bottom left / 51% ${this.height-this.distance-this.radio}px no-repeat,
    radial-gradient(circle at ${this.width/2}px 0, transparent ${this.radio}px, ${this.color1} 0) top left/${this.width}px ${this.radio}px no-repeat;`;break;case"bottom":s=`background: radial-gradient(circle at right bottom, transparent ${this.radio}px, ${this.color1} 0) ${this.width/2-2}px 0 / ${this.width/2+2}px ${this.distance}px no-repeat,
    radial-gradient(circle at left bottom, transparent ${this.radio}px, ${this.color1} 0) top left / ${this.width/2}px ${this.distance}px no-repeat,
    radial-gradient(circle at right top, transparent ${this.radio}px, ${this.color2} 0) ${this.width/2-2}px ${this.distance}px / ${this.width/2+2}px ${this.height-this.distance-this.radio}px no-repeat,
    radial-gradient(circle at left top, transparent ${this.radio}px, ${this.color2} 0) 0 ${this.distance}px / ${this.width/2}px ${this.height-this.distance-this.radio}px no-repeat,
    radial-gradient(circle at ${this.width/2}px ${this.radio}px, transparent ${this.radio}px, ${this.color2} 0) bottom left/${this.width}px ${this.radio}px no-repeat;`;break}return`.hollow-compose-three-circles {
  width: ${this.width}px;
  height: ${this.height}px;
  position: relative;
  ${s}
   ${this.shadow?"filter: drop-shadow(2px 2px 2px rgba(0,0,0,.2));":""}
}

${this.dashed?`.hollow-compose-three-circles::after {
  content: '';
  width: ${this.width-this.radio*2}px;
  border: 1px dashed #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: ${this.composePositionV==="top"?this.distance+this.radio:this.distance}px;
  margin: auto;
}`:""}
`}}},watch:{style(){this.setStyle(),this.setStyleToBody()}},methods:{setStyle(){this.$refs.css.innerHTML=f.highlight(this.style,f.languages.css)},setStyleToBody(){let s=document.querySelector("#hollow-compose1");s.innerHTML=this.style}},mounted(){const s=document.createElement("style");s.setAttribute("id","hollow-compose1"),document.head.appendChild(s),setTimeout(()=>{this.setStyle(),this.setStyleToBody()})}},P={class:"key-value"},z={class:"key-value"},H={class:"key-value"},U={class:"key-value"},B={class:"key-value"},S={class:"key-value"},T={class:"key-value"},_={class:"language-css extra-class"},C={class:"language-css"},N={ref:"css"};function D(s,t,E,L,i,F){const c=p("el-radio"),d=p("el-input-number"),b=p("el-switch"),V=p("DemoCopy");return a(),h("div",null,[t[18]||(t[18]=e("div",{class:"warpper"},[e("div",{class:"hollow-compose-three-circles"})],-1)),e("div",P,[t[9]||(t[9]=e("span",{class:"key"},"位置：",-1)),(a(!0),h(m,null,x(i.positions,(o,l)=>(a(),u(c,{modelValue:i.position,"onUpdate:modelValue":t[0]||(t[0]=n=>i.position=n),key:l,value:o},{default:$(()=>[g(w(o),1)]),_:2},1032,["modelValue","value"]))),128))]),e("div",z,[t[10]||(t[10]=e("span",{class:"key"},"组合位置：",-1)),i.position==="horizontal"?(a(!0),h(m,{key:0},x(i.composePositionsHorizontal,(o,l)=>(a(),u(c,{modelValue:i.composePositionH,"onUpdate:modelValue":t[1]||(t[1]=n=>i.composePositionH=n),key:l,value:o},{default:$(()=>[g(w(o),1)]),_:2},1032,["modelValue","value"]))),128)):y("",!0),i.position==="vertical"?(a(!0),h(m,{key:1},x(i.composePositionsVertical,(o,l)=>(a(),u(c,{modelValue:i.composePositionV,"onUpdate:modelValue":t[2]||(t[2]=n=>i.composePositionV=n),key:l,value:o},{default:$(()=>[g(w(o),1)]),_:2},1032,["modelValue","value"]))),128)):y("",!0)]),e("div",H,[t[11]||(t[11]=e("span",{class:"key"},"宽度：",-1)),r(d,{modelValue:i.width,"onUpdate:modelValue":t[3]||(t[3]=o=>i.width=o),size:"small",min:100,max:500,label:"宽度"},null,8,["modelValue"])]),e("div",U,[t[12]||(t[12]=e("span",{class:"key"},"长度：",-1)),r(d,{modelValue:i.height,"onUpdate:modelValue":t[4]||(t[4]=o=>i.height=o),size:"small",min:50,max:500,label:"长度"},null,8,["modelValue"])]),e("div",B,[t[13]||(t[13]=e("span",{class:"key"},"距离：",-1)),r(d,{modelValue:i.distance,"onUpdate:modelValue":t[5]||(t[5]=o=>i.distance=o),size:"small",min:40,max:200,label:"距离"},null,8,["modelValue"])]),e("div",S,[t[14]||(t[14]=e("span",{class:"key"},"半径：",-1)),r(d,{modelValue:i.radio,"onUpdate:modelValue":t[6]||(t[6]=o=>i.radio=o),size:"small",min:1,max:20,label:"半径"},null,8,["modelValue"])]),e("div",T,[t[15]||(t[15]=e("span",{class:"key"},"虚线：",-1)),r(b,{modelValue:i.dashed,"onUpdate:modelValue":t[7]||(t[7]=o=>i.dashed=o),"active-color":"#00adb5"},null,8,["modelValue"]),t[16]||(t[16]=e("span",{style:{width:"100px"}},null,-1)),t[17]||(t[17]=e("span",{class:"key"},"阴影：",-1)),r(b,{modelValue:i.shadow,"onUpdate:modelValue":t[8]||(t[8]=o=>i.shadow=o),"active-color":"#00adb5"},null,8,["modelValue"])]),e("div",_,[r(V,{lang:"css"}),e("pre",C,[e("code",N,null,512)])])])}const q=k(v,[["render",D],["__scopeId","data-v-593d6c66"]]);export{q as default};
