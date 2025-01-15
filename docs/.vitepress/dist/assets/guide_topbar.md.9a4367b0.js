import{_ as s,o as a,c as n,V as l}from"./chunks/framework.4490fb98.js";const p="/topbar.gif",o="/topbar-switchaabbarandtoolbar.gif",u=JSON.parse('{"title":"顶栏","description":"","frontmatter":{},"headers":[],"relativePath":"guide/topbar.md","filePath":"guide/topbar.md"}'),e={name:"guide/topbar.md"},t=l(`<h1 id="顶栏" tabindex="-1">顶栏 <a class="header-anchor" href="#顶栏" aria-label="Permalink to &quot;顶栏&quot;">​</a></h1><h2 id="模式" tabindex="-1">模式 <a class="header-anchor" href="#模式" aria-label="Permalink to &quot;模式&quot;">​</a></h2><p>提供了 3 种模式可选择，可以在应用配置里设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  topbar: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * static 默认，静止，跟随页面滚动</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * fixed 固定，不跟随页面滚动，始终固定在顶部</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sticky 粘性，页面往下滚动时隐藏，往上滚动时显示</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&#39;static&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  topbar: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * static 默认，静止，跟随页面滚动</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * fixed 固定，不跟随页面滚动，始终固定在顶部</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     * sticky 粘性，页面往下滚动时隐藏，往上滚动时显示</span></span>
<span class="line highlighted"><span style="color:#6A737D;">     */</span></span>
<span class="line highlighted"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&#39;static&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+p+`" alt="" data-zoomable=""></p><h2 id="切换标签栏和工具栏" tabindex="-1">切换标签栏和工具栏 <sup class="pro-badge"></sup> <a class="header-anchor" href="#切换标签栏和工具栏" aria-label="Permalink to &quot;切换标签栏和工具栏 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h2><p>默认标签栏在上，工具栏在下，可以在应用配置里设置切换：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  topbar: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    switchTabbarAndToolbar: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  topbar: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    switchTabbarAndToolbar: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+o+'" alt="" data-zoomable=""></p>',9),c=[t];function i(r,h,g,E,d,y){return a(),n("div",null,c)}const _=s(e,[["render",i]]);export{u as __pageData,_ as default};
