import{_ as s,c as a,o as n,a as l}from"./app.7932eb4a.js";const i=JSON.parse('{"title":"JavaScript \u6570\u7EC4\u65B9\u6CD5\u5927\u5168","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]},{"level":2,"title":"Array.prototype.reduce()","slug":"array-prototype-reduce","link":"#array-prototype-reduce","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5","link":"#\u8BED\u6CD5","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B","link":"#\u793A\u4F8B","children":[]},{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-1","link":"#\u8BED\u6CD5-1","children":[]},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B-1","link":"#\u793A\u4F8B-1","children":[]}]},{"level":2,"title":"Array.prototype.map()","slug":"array-prototype-map","link":"#array-prototype-map","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-2","link":"#\u8BED\u6CD5-2","children":[]},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B-2","link":"#\u793A\u4F8B-2","children":[]}]},{"level":2,"title":"Array.prototype.sort()","slug":"array-prototype-sort","link":"#array-prototype-sort","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-3","link":"#\u8BED\u6CD5-3","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570-1","link":"#\u53C2\u6570-1","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C","link":"#\u8FD4\u56DE\u503C","children":[]},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B-3","link":"#\u793A\u4F8B-3","children":[]}]},{"level":2,"title":"Array.prototype.reverse()","slug":"array-prototype-reverse","link":"#array-prototype-reverse","children":[{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-1","link":"#\u8FD4\u56DE\u503C-1","children":[]},{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-4","link":"#\u8BED\u6CD5-4","children":[]},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B-4","link":"#\u793A\u4F8B-4","children":[]}]},{"level":2,"title":"Array.prototype.fill()","slug":"array-prototype-fill","link":"#array-prototype-fill","children":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5-5","link":"#\u8BED\u6CD5-5","children":[]},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570-2","link":"#\u53C2\u6570-2","children":[]},{"level":3,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C-2","link":"#\u8FD4\u56DE\u503C-2","children":[]},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B-5","link":"#\u793A\u4F8B-5","children":[]}]}],"relativePath":"JavaScript/\u6570\u7EC4\u65B9\u6CD5.md"}'),p={name:"JavaScript/\u6570\u7EC4\u65B9\u6CD5.md"},o=l(`<h1 id="javascript-\u6570\u7EC4\u65B9\u6CD5\u5927\u5168" tabindex="-1">JavaScript \u6570\u7EC4\u65B9\u6CD5\u5927\u5168 <a class="header-anchor" href="#javascript-\u6570\u7EC4\u65B9\u6CD5\u5927\u5168" aria-hidden="true">#</a></h1><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">MDN-Array</a></p><h2 id="array-prototype-reduce" tabindex="-1">Array.prototype.reduce() <a class="header-anchor" href="#array-prototype-reduce" aria-hidden="true">#</a></h2><p>\u7D2F\u52A0\u5668\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">arr.reduce(function(prev, cur, curIndex, arr), initialValue)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>Callbackfn: \u7D2F\u52A0\u5668\uFF0C\u6307\u5B9A\u6570\u7EC4\u4E2D\u524D\u540E\u7684\u503C\u5982\u4F55\u4F7F\u7528\uFF0C\u6700\u7EC8\u8BA1\u7B97\u4E3A\u4E00\u4E2A\u503C\uFF1B</p><p>initialValue: \u521D\u59CB\u503C</p><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">arr.reduce</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prev</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">curIndex</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">prev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prev</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cur</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">curIndex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">curIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">arr</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prev</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// prev 1 cur 2 curIndex 1 arr [ 1, 2, 3, 4 ]</span></span>
<span class="line"><span style="color:#676E95;">// prev 3 cur 3 curIndex 2 arr [ 1, 2, 3, 4 ]</span></span>
<span class="line"><span style="color:#676E95;">// prev 6 cur 4 curIndex 3 arr [ 1, 2, 3, 4 ]</span></span>
<span class="line"><span style="color:#676E95;">// arr.reduce 10</span></span>
<span class="line"></span></code></pre></div><p>prev \u4ECE\u7B2C 1 \u4E2A\u5143\u7D20\u5F00\u59CB\uFF0Ccur \u4ECE\u7B2C 2 \u4E2A\u5143\u7D20\u5F00\u59CB\uFF0C\u6240\u4EE5 curIndex \u4ECE 2 \u5F00\u59CB\u3002</p><p>##Array.prototype.reduceRight()</p><p>\u4ECE\u53F3\u81F3\u5DE6\u7684\u7D2F\u52A0\u5668\uFF0C\u6267\u884C\u65B9\u5411\u4E0E reduce \u76F8\u53CD\u3002</p><h3 id="\u8BED\u6CD5-1" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5-1" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prev</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">curIndex</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#82AAFF;">initialValue</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u793A\u4F8B-1" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B-1" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">arr.reduce</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduceRight</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">prev</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">curIndex</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">prev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prev</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cur</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">curIndex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">curIndex</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">arr</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prev</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// prev 4 cur 3 curIndex 2 arr [ 1, 2, 3, 4 ]</span></span>
<span class="line"><span style="color:#676E95;">// prev 7 cur 2 curIndex 1 arr [ 1, 2, 3, 4 ]</span></span>
<span class="line"><span style="color:#676E95;">// prev 9 cur 1 curIndex 0 arr [ 1, 2, 3, 4 ]</span></span>
<span class="line"><span style="color:#676E95;">// arr.reduce 10</span></span>
<span class="line"></span></code></pre></div><h2 id="array-prototype-map" tabindex="-1">Array.prototype.map() <a class="header-anchor" href="#array-prototype-map" aria-hidden="true">#</a></h2><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u7ED3\u679C\u662F\u8BE5\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u53D8\u4E3A\u8C03\u7528\u4E00\u6B21\u63D0\u4F9B\u7684\u51FD\u6570\u540E\u7684\u8FD4\u56DE\u503C\u3002</p><h3 id="\u8BED\u6CD5-2" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5-2" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#82AAFF;">thisArg</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u793A\u4F8B-2" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B-2" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> newArr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;">current</span><span style="color:#89DDFF;">*</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(newArr)  </span><span style="color:#676E95;">// [3,6,9]</span></span>
<span class="line"></span></code></pre></div><h2 id="array-prototype-sort" tabindex="-1">Array.prototype.sort() <a class="header-anchor" href="#array-prototype-sort" aria-hidden="true">#</a></h2><p>\u6392\u5E8F\u3002</p><h3 id="\u8BED\u6CD5-3" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5-3" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">([compareFunction])</span></span>
<span class="line"></span></code></pre></div><h3 id="\u53C2\u6570-1" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570-1" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>compareFunction</td><td>\u6307\u5B9A\u6392\u5E8F\u89C4\u5219\uFF0C\u5FC5\u987B\u662F\u51FD\u6570</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h3><p>\u6392\u5E8F\u540E\u7684\u6570\u7EC4\u3002</p><h3 id="\u793A\u4F8B-3" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B-3" aria-hidden="true">#</a></h3><h4 id="\u5B57\u6BCD\u5347\u5E8F" tabindex="-1">\u5B57\u6BCD\u5347\u5E8F <a class="header-anchor" href="#\u5B57\u6BCD\u5347\u5E8F" aria-hidden="true">#</a></h4><p>\u4E0D\u4F20\u4EFB\u4F55\u53C2\u6570\uFF0C\u9ED8\u8BA4\u6309\u5B57\u6BCD\u5347\u5E8F\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">helen</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bob</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)  </span><span style="color:#676E95;">// [&#39;alice&#39;, &#39;bob&#39;, &#39;helen&#39;]</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">helen</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">alice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bob</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> b)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)  </span><span style="color:#676E95;">// [&#39;alice&#39;, &#39;bob&#39;, &#39;helen&#39;]</span></span>
<span class="line"></span></code></pre></div><h4 id="\u6570\u5B57\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F" tabindex="-1">\u6570\u5B57\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F <a class="header-anchor" href="#\u6570\u5B57\u4ECE\u5C0F\u5230\u5927\u6392\u5E8F" aria-hidden="true">#</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">350</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> b)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(result)  </span><span style="color:#676E95;">// [20, 100, 350]</span></span>
<span class="line"></span></code></pre></div><h2 id="array-prototype-reverse" tabindex="-1">Array.prototype.reverse() <a class="header-anchor" href="#array-prototype-reverse" aria-hidden="true">#</a></h2><p>\u5012\u5E8F\u3002</p><h3 id="\u8FD4\u56DE\u503C-1" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C-1" aria-hidden="true">#</a></h3><p>\u5012\u5E8F\u540E\u7684\u6570\u7EC4\u3002</p><h3 id="\u8BED\u6CD5-4" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5-4" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><h3 id="\u793A\u4F8B-4" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B-4" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#A6ACCD;">())   </span><span style="color:#676E95;">// [{test: 3}, &#39;2&#39;, 1]</span></span>
<span class="line"></span></code></pre></div><h2 id="array-prototype-fill" tabindex="-1">Array.prototype.fill() <a class="header-anchor" href="#array-prototype-fill" aria-hidden="true">#</a></h2><p>\u7528\u4E00\u4E2A\u56FA\u5B9A\u503C\u586B\u5145\u6307\u5B9A\u6570\u7EC4\u4E2D\u4ECE\u8D77\u59CB\u7D22\u5F15\u5230\u7EC8\u6B62\u7D22\u5F15\u7684\u5168\u90E8\u5143\u7D20\uFF0C<em>\u4E0D\u5305\u62EC\u7EC8\u6B62\u7D22\u5F15</em>\u3002</p><h3 id="\u8BED\u6CD5-5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5-5" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#A6ACCD;">(value[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> startIndex[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> endIndex]])</span></span>
<span class="line"></span></code></pre></div><h3 id="\u53C2\u6570-2" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570-2" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>value</td><td>\u586B\u5145\u7684\u503C</td></tr><tr><td>startIndex</td><td>\u5F00\u59CB\u7D22\u5F15</td></tr><tr><td>endIndex</td><td>\u7EC8\u6B62\u7D22\u5F15\uFF0C\u4E0D\u586B\u5145</td></tr></tbody></table><h3 id="\u8FD4\u56DE\u503C-2" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C-2" aria-hidden="true">#</a></h3><p>\u4FEE\u6539\u540E\u7684\u6570\u7EC4\u3002</p><h3 id="\u793A\u4F8B-5" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B-5" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr)  </span><span style="color:#676E95;">// [0,0,0,0,0]</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr)  </span><span style="color:#676E95;">// [1,0,0,0,0]</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(arr)  </span><span style="color:#676E95;">// [1,0,0,4,5]</span></span>
<span class="line"></span></code></pre></div>`,60),e=[o];function r(t,c,y,D,C,F){return n(),a("div",null,e)}const d=s(p,[["render",r]]);export{i as __pageData,d as default};
