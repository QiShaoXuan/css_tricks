import{_ as a,C as l,o as p,c as o,E as e,ax as c}from"./chunks/framework.b1umHdsy.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{"languageLink":"/tab/circle-border.html"},"headers":[],"relativePath":"_en/tab/circle-border.md","filePath":"_en/tab/circle-border.md"}'),r={name:"_en/tab/circle-border.md"};function E(t,s,y,F,i,B){const n=l("tab-circleBorder");return p(),o("div",null,[e(n),s[0]||(s[0]=c(`<div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#FFAB70;">$radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">$bg-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#eee</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#FFAB70;">$active-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#00adb5</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.tabs</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">  display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">flex</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  justify-content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  align-items</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">center</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">  background</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$active-color</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">  li</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">    height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">40</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#79B8FF;"> 15</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#85E89D;">    cursor</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">pointer</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    background</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$active-color</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    transition</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">color</span><span style="color:#79B8FF;"> 0.2</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">height</span><span style="color:#79B8FF;"> 0.2</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">margin</span><span style="color:#79B8FF;"> 0.2</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$radius</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">    position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">    &amp;</span><span style="color:#B392F0;">:not</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">:first-of-type</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#85E89D;">    &amp;</span><span style="color:#B392F0;">:not</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">:first-of-type</span><span style="color:#E1E4E8;">)</span><span style="color:#B392F0;">::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#85E89D;">      content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      width</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$radius</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      height</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$radius</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">    &amp;</span><span style="color:#B392F0;">.active</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">      color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#909399</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      background</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$bg-color</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      margin-top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-10</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">      border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$radius</span><span style="color:#FFAB70;"> $radius</span><span style="color:#79B8FF;"> 0</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#85E89D;">      &amp;</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        left</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#FFAB70;">$radius</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#79B8FF;"> 0</span><span style="color:#FFAB70;"> $radius</span><span style="color:#79B8FF;"> 0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        background</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$active-color</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#85E89D;">      &amp;</span><span style="color:#B392F0;">::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        left</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">-</span><span style="color:#FFAB70;">$radius</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        background</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$bg-color</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#85E89D;">    &amp;</span><span style="color:#B392F0;">.active</span><span style="color:#E1E4E8;"> + </span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#85E89D;">      &amp;</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        background</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$bg-color</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#85E89D;">      &amp;</span><span style="color:#B392F0;">::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#79B8FF;">        border-radius</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#79B8FF;"> 0</span><span style="color:#79B8FF;"> 0</span><span style="color:#FFAB70;"> $radius</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#79B8FF;">        background</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$active-color</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div>`,1))])}const u=a(r,[["render",E]]);export{b as __pageData,u as default};
