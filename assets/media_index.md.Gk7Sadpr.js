import{_ as n,o as a,c as p,ax as l}from"./chunks/framework.b1umHdsy.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{"languageLink":"/_en/media/"},"headers":[],"relativePath":"media/index.md","filePath":"media/README.md"}'),o={name:"media/index.md"};function e(c,s,t,r,E,i){return a(),p("div",null,[...s[0]||(s[0]=[l(`<h2 id="常用-midea" tabindex="-1">常用 midea <a class="header-anchor" href="#常用-midea" aria-label="Permalink to &quot;常用 midea&quot;">​</a></h2><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#6A737D;">/* 横屏 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> screen</span><span style="color:#F97583;"> and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">orientation</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">landscape</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 竖屏 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> screen</span><span style="color:#F97583;"> and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">orientation</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">portrait</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 窗口宽度&lt;960,设计宽度=768 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> screen</span><span style="color:#F97583;"> and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">959</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 窗口宽度&lt;768,设计宽度=640 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> screen</span><span style="color:#F97583;"> and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">767</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 窗口宽度&lt;640,设计宽度=480 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> screen</span><span style="color:#F97583;"> and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">639</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 窗口宽度&lt;480,设计宽度=320 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> screen</span><span style="color:#F97583;"> and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">479</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 设备像素比为2 */</span></span>
<span class="line"><span style="color:#6A737D;">/* 常用于1px边框，还应规定 3dppx 的情况 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-resolution</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">dppx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* windows UI 贴靠 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> screen</span><span style="color:#F97583;"> and</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">-ms-view-state</span><span style="color:#E1E4E8;">:snapped){</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">/* 打印 */</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#79B8FF;"> print</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">     </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>orientation 方向</p><p>resolution 分辨率</p><p>dpr === dppx</p></div>`,3)])])}const d=n(o,[["render",e]]);export{F as __pageData,d as default};
