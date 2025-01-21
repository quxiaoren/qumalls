import{_ as s,o as n,c as a,V as l}from"./chunks/framework.4490fb98.js";const p="/module1.gif",o="/module2.gif",g=JSON.parse('{"title":"标准模块","description":"","frontmatter":{},"headers":[],"relativePath":"guide/plop-module.md","filePath":"guide/plop-module.md"}'),e={name:"guide/plop-module.md"},t=l(`<h1 id="标准模块" tabindex="-1">标准模块 <sup class="pro-badge"></sup> <a class="header-anchor" href="#标准模块" aria-label="Permalink to &quot;标准模块 &lt;sup class=&quot;pro-badge&quot; /&gt;&quot;">​</a></h1><p>在《<a href="./plop.html#module">代码文件自动生成 - module</a>》里介绍了如何快速生成一个标准模块，这个标准模块是一个最基础的 CURD 模块，它包含列表页和编辑页，同时提供了搜索和删除的功能，并且同时也可以生成对应的 mock 文件，在这基础上可以更方便的进行业务扩展。</p><p>下面我就实际操作一遍，并介绍一下这个标准模块有哪些特性。</p><h1 id="用法说明" tabindex="-1">用法说明 <a class="header-anchor" href="#用法说明" aria-label="Permalink to &quot;用法说明&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">? 请选择需要创建的模式： module - 创建标准模块（包含列表页&amp;详情页）</span></span>
<span class="line"><span style="color:#e1e4e8;">? 请选择模块创建目录 src/views</span></span>
<span class="line"><span style="color:#e1e4e8;">? 请输入模块名 example</span></span>
<span class="line"><span style="color:#e1e4e8;">? 请输入模块中文名称 演示</span></span>
<span class="line"><span style="color:#e1e4e8;">? 是否生成 Mock Yes</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\views\\example\\list.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\views\\example\\detail.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\views\\example\\components\\DetailForm\\index.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\views\\example\\components\\FormMode\\index.vue</span></span>
<span class="line"><span style="color:#e1e4e8;">√  ++ \\src\\mock\\example.ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">? 请选择需要创建的模式： module - 创建标准模块（包含列表页&amp;详情页）</span></span>
<span class="line"><span style="color:#24292e;">? 请选择模块创建目录 src/views</span></span>
<span class="line"><span style="color:#24292e;">? 请输入模块名 example</span></span>
<span class="line"><span style="color:#24292e;">? 请输入模块中文名称 演示</span></span>
<span class="line"><span style="color:#24292e;">? 是否生成 Mock Yes</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\views\\example\\list.vue</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\views\\example\\detail.vue</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\views\\example\\components\\DetailForm\\index.vue</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\views\\example\\components\\FormMode\\index.vue</span></span>
<span class="line"><span style="color:#24292e;">√  ++ \\src\\mock\\example.ts</span></span></code></pre></div><p>这里我已经通过命令在 <code>/src/views/</code> 目录下创建好了一个 example 文件夹，并且也生成了 mock 数据。接下来需要去配置下路由，这样我们才可以在导航栏里访问到。</p><p>首先在 <code>/src/router/modules/</code> 目录下新建一个与文件夹同名的 <code>example.ts</code> 文件，并在里面复制以下代码：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { RouteRecordRaw } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Layout</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/layouts/index.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RouteRecordRaw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: </span><span style="color:#9ECBFF;">&#39;/example&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  component: Layout,</span></span>
<span class="line"><span style="color:#E1E4E8;">  redirect: </span><span style="color:#9ECBFF;">&#39;/example/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;example&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;演示&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;exampleList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/example/list.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;列表&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;create&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;exampleCreate&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/example/detail.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;新增&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        sidebar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        activeMenu: </span><span style="color:#9ECBFF;">&#39;/example/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;edit/:id&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;exampleEdit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/example/detail.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;编辑&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        sidebar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        activeMenu: </span><span style="color:#9ECBFF;">&#39;/example/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> routes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { RouteRecordRaw } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Layout</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/layouts/index.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  path: </span><span style="color:#032F62;">&#39;/example&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  component: Layout,</span></span>
<span class="line"><span style="color:#24292E;">  redirect: </span><span style="color:#032F62;">&#39;/example/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;example&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  meta: {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;演示&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  children: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;exampleList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/example/list.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;列表&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;create&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;exampleCreate&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/example/detail.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;新增&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        sidebar: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        activeMenu: </span><span style="color:#032F62;">&#39;/example/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;edit/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;exampleEdit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/example/detail.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;编辑&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        sidebar: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        activeMenu: </span><span style="color:#032F62;">&#39;/example/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> routes</span></span></code></pre></div><p>然后到 <code>/src/router/routes.ts</code> 文件里加上这个路由配置文件的引用。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Example </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./modules/example&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">asyncRoutes</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Route</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">recordMainRaw</span><span style="color:#E1E4E8;">[] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      title: </span><span style="color:#9ECBFF;">&#39;页面&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      icon: </span><span style="color:#9ECBFF;">&#39;ri-pages-line&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">PagesExample,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      Example,</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Example </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./modules/example&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">asyncRoutes</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Route</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">recordMainRaw</span><span style="color:#24292E;">[] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    meta: {</span></span>
<span class="line"><span style="color:#24292E;">      title: </span><span style="color:#032F62;">&#39;页面&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      icon: </span><span style="color:#032F62;">&#39;ri-pages-line&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">PagesExample,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      Example,</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>最后，我们还需要替换几处页面中路由的 <code>name</code> 因为需要和我们配置的路由 <code>name</code> 一致，才可以正确跳转页面。</p><p>先打开 <code>list.vue</code> 文件，找到 <code>onCreate()</code> 和 <code>onEdit()</code> 方法并替换：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onCreate</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (data.value.formMode </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;router&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;exampleCreate&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data.value.formModeProps.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    data.value.formModeProps.visible </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onEdit</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (data.value.formMode </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;router&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;exampleEdit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: row.id,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    data.value.formModeProps.id </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row.id</span></span>
<span class="line"><span style="color:#E1E4E8;">    data.value.formModeProps.visible </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onCreate</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (data.value.formMode </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;router&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;exampleCreate&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    data.value.formModeProps.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    data.value.formModeProps.visible </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onEdit</span><span style="color:#24292E;">(</span><span style="color:#E36209;">row</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (data.value.formMode </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;router&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line highlighted"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;exampleEdit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      params: {</span></span>
<span class="line"><span style="color:#24292E;">        id: row.id,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    data.value.formModeProps.id </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> row.id</span></span>
<span class="line"><span style="color:#24292E;">    data.value.formModeProps.visible </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>然后打开 <code>detail.vue</code> 文件，替换以下两处：</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">page-header</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">route.name </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;exampleCreate&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;新增演示&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;编辑演示&#39;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;mini&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">round</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">goBack</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">svg-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ep:arrow-left&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    返回</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">page-header</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">page-header</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">route.name </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;exampleCreate&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;新增演示&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;编辑演示&#39;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;mini&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">round</span><span style="color:#24292E;"> @</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">goBack</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">svg-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ep:arrow-left&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    返回</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">page-header</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">goBack</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (settingsStore.tabbar.enable </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">settingsStore.tabbar.mergeTabs) {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">useTabbar</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;exampleList&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    router.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({ name: </span><span style="color:#9ECBFF;">&#39;exampleList&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">goBack</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (settingsStore.tabbar.enable </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#24292E;">settingsStore.tabbar.mergeTabs) {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">useTabbar</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;exampleList&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    router.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({ name: </span><span style="color:#032F62;">&#39;exampleList&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>这时候就可以通过导航栏访问到我们的页面了，我们的一个演示模块也就初步创建好了。</p><p><img src="`+p+`" alt="" data-zoomable=""></p><h2 id="特性介绍" tabindex="-1">特性介绍 <a class="header-anchor" href="#特性介绍" aria-label="Permalink to &quot;特性介绍&quot;">​</a></h2><p>功能部分的介绍主要还是要看代码，先从列表页 <code>list.vue</code> 开始。</p><p>最先看到的是这句文件导入代码，因为几乎每个列表页都需要翻页功能，所以把翻页相关的东西都存放在 <code>/src/utils/composables/pagination/index.ts</code> 方便复用。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> usePagination </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/utils/composables/usePagination&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">pagination</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">getParams</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">onSizeChange</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">onCurrentChange</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">onSortChange</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">usePagination</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> usePagination </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/utils/composables/usePagination&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">pagination</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">getParams</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">onSizeChange</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">onCurrentChange</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">onSortChange</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">usePagination</span><span style="color:#24292E;">()</span></span></code></pre></div><p>接着在 <code>data</code> 里存放的是标准模块提供的一些配置项和必要数据参数字段。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  loading: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 表格是否自适应高度</span></span>
<span class="line"><span style="color:#E1E4E8;">  tableAutoHeight: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 详情展示模式</span></span>
<span class="line"><span style="color:#6A737D;">   * router 路由跳转</span></span>
<span class="line"><span style="color:#6A737D;">   * dialog 对话框</span></span>
<span class="line"><span style="color:#6A737D;">   * drawer 抽屉</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  formMode: </span><span style="color:#9ECBFF;">&#39;router&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 详情</span></span>
<span class="line"><span style="color:#E1E4E8;">  formModeProps: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    visible: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 搜索</span></span>
<span class="line"><span style="color:#E1E4E8;">  search: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    account: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mobile: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sex: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  searchMore: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 批量操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  batch: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    enable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    selectionDataList: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 列表数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  dataList: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  loading: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 表格是否自适应高度</span></span>
<span class="line"><span style="color:#24292E;">  tableAutoHeight: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * 详情展示模式</span></span>
<span class="line"><span style="color:#6A737D;">   * router 路由跳转</span></span>
<span class="line"><span style="color:#6A737D;">   * dialog 对话框</span></span>
<span class="line"><span style="color:#6A737D;">   * drawer 抽屉</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line highlighted"><span style="color:#24292E;">  formMode: </span><span style="color:#032F62;">&#39;router&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 详情</span></span>
<span class="line"><span style="color:#24292E;">  formModeProps: {</span></span>
<span class="line"><span style="color:#24292E;">    visible: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 搜索</span></span>
<span class="line"><span style="color:#24292E;">  search: {</span></span>
<span class="line"><span style="color:#24292E;">    account: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    mobile: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sex: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  searchMore: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 批量操作</span></span>
<span class="line"><span style="color:#24292E;">  batch: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    enable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    selectionDataList: [],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 列表数据</span></span>
<span class="line"><span style="color:#24292E;">  dataList: [],</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>标准模块提供了 3 种详情展示模式，默认是路由跳转的方式，你可以修改 <code>formMode: &#39;dialog&#39;</code> 开启详情弹窗模式，保存后效果如下：</p><p><img src="`+o+`" alt="" data-zoomable=""></p><p>紧接着的是下面这段代码，它的作用是当列表页开启缓存时，并以路由跳转的方式进入详情页进行新增或编辑操作后，先对缓存的列表页进行一次数据更新，然后再跳转回列表页，这样即可以保证列表页相关搜索、翻页等状态可以被缓存，又能保证数据是最新。具体实现则是通过绑定一个事件总线，并在详情页里调用这个事件。需要注意的是，专业版如果开启标签栏，事件总线的名称得确保唯一。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getDataList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (data.value.formMode </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;router&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    eventBus.</span><span style="color:#B392F0;">on</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;get-data-list&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">getDataList</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">onBeforeUnmount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (data.value.formMode </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;router&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    eventBus.</span><span style="color:#B392F0;">off</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;get-data-list&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getDataList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (data.value.formMode </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;router&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    eventBus.</span><span style="color:#6F42C1;">on</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;get-data-list&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">getDataList</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">onBeforeUnmount</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (data.value.formMode </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;router&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    eventBus.</span><span style="color:#6F42C1;">off</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;get-data-list&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>再往下就是需要你修改或编写业务代码的部分，这里就不继续展开了。</p><p>详情页的代码就不多介绍了，相对比较简单，可自行阅读理解。其中表单部分单独封装成组件存放在 <code>/src/views/[模块文件夹]/components/DetailForm/index.vue</code> 里了，同样你在 <code>components/</code> 文件夹下还能看到另外一个 <code>FormMode</code> 的文件夹，这样的用意是让表单可以复用，<strong>可以通过路由跳转的形式进入详情页，也可以通过弹窗或抽屉的形式打开详情页</strong>。</p><p>可能有人会有疑问，为什么不在生成文件的时候直接让我选择用哪种形式，这样生成出来就是哪种，而是在生成好的代码文件里再进行配置？</p><p>这样设计的目的主要有三点：</p><ol><li><strong>合理使用</strong>。关于表单具体使用哪种展示模式比较好，我们的建议是，当表单与当前列表页关联性较强，内容少则使用弹窗，内容多则使用抽屉；而当表单与当前列表页关联性较弱，且内容多，则使用路由跳转，让新页面进行承载。</li><li><strong>方便后期维护</strong>。考虑到需求会变，可能一开始是一个很简单的表单，后期需求一点点增加，变成了一个庞大的表单，这时候就要从弹窗或抽屉改成路由跳转，反之也可能是从路由跳转改成弹窗或抽屉，处理起来都很麻烦。所以方便后期维护，这部分是有意而为之，做成了 3 种形式共存，通过配置可一键切换。</li><li><strong>跨模块的组件调用</strong>。例如有两个管理模块，一个用户管理，一个部门管理，当我在填写新增用户表单的时候，表单项里有一项是选择部门，这时候部门可能还没创建，但表单已经填写一半了。如果让用户离开页面去部门管理里创建好部门后，再回来新建用户，先不说数据如何缓存的问题，光是操作流被打断，页面跳来跳去就很影响用户体验了。所以这个时候就可以在选择部门后面放一个新增部门的操作按钮，点击后弹出新增部门的弹窗，新增完成后弹窗关闭，让用户可以继续在新增用户的界面做后续操作。</li></ol><hr><p>当然标准模块也只是框架提供的一个标准，你可以沿用，也可以根据自己的需求指定一套标准，毕竟最终目的都是提高开发效率，同时也确保多人协作开发的时候有个统一标准，不会出现每个人做出来的模块风格都不一样。</p>`,35),c=[t];function r(E,y,i,d,F,u){return n(),a("div",null,c)}const h=s(e,[["render",r]]);export{g as __pageData,h as default};
