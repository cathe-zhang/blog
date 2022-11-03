import{_ as a}from"./chunks/04_tag_form.1d518f51.js";import{_ as e,c as t,o as s,a as l}from"./app.7932eb4a.js";const n="/blog/assets/02_tag_position.3679fa8c.png",o="/blog/assets/03_create_tag_button.f64ba75d.png",y=JSON.parse('{"title":"Gitlab\u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"Git Commit\u89C4\u8303","slug":"git-commit\u89C4\u8303","link":"#git-commit\u89C4\u8303","children":[]},{"level":2,"title":"\u5F00\u53D1\u534F\u4F5C\u89C4\u8303","slug":"\u5F00\u53D1\u534F\u4F5C\u89C4\u8303","link":"#\u5F00\u53D1\u534F\u4F5C\u89C4\u8303","children":[{"level":3,"title":"\u65B0\u5EFA\u5206\u652F","slug":"\u65B0\u5EFA\u5206\u652F","link":"#\u65B0\u5EFA\u5206\u652F","children":[]},{"level":3,"title":"\u4EE3\u7801\u5408\u5E76","slug":"\u4EE3\u7801\u5408\u5E76","link":"#\u4EE3\u7801\u5408\u5E76","children":[]},{"level":3,"title":"\u4EE3\u7801\u4E0A\u7EBF","slug":"\u4EE3\u7801\u4E0A\u7EBF","link":"#\u4EE3\u7801\u4E0A\u7EBF","children":[]},{"level":3,"title":"\u4E0A\u7EBF\u4E4B\u540E\u7684\u5DE5\u4F5C","slug":"\u4E0A\u7EBF\u4E4B\u540E\u7684\u5DE5\u4F5C","link":"#\u4E0A\u7EBF\u4E4B\u540E\u7684\u5DE5\u4F5C","children":[]}]}],"relativePath":"\u524D\u7AEF\u5DE5\u7A0B\u5316/Gitlab_\u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B.md"}'),p={name:"\u524D\u7AEF\u5DE5\u7A0B\u5316/Gitlab_\u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B.md"},d=l(`<h1 id="gitlab\u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B" tabindex="-1">Gitlab\u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B <a class="header-anchor" href="#gitlab\u534F\u4F5C\u5F00\u53D1\u6D41\u7A0B" aria-hidden="true">#</a></h1><h2 id="git-commit\u89C4\u8303" tabindex="-1">Git Commit\u89C4\u8303 <a class="header-anchor" href="#git-commit\u89C4\u8303" aria-hidden="true">#</a></h2><p><code>&lt;type&gt;(scope): &lt;subject&gt;</code></p><p>type: \u6B64\u6B21commit\u7684\u7C7B\u578B, \u5EFA\u8BAE\u4F7F\u7528\u4EE5\u4E0B\u51E0\u79CD\u7C7B\u578B\uFF1A</p><table><thead><tr><th>type</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>fix</td><td>\u4FEE\u590Dbug</td></tr><tr><td>feat</td><td>\u65B0\u529F\u80FD</td></tr><tr><td>update</td><td>\u975Efix\u548Cfeat\u7684\u5176\u4ED6\u66F4\u65B0</td></tr><tr><td>refactor</td><td>\u91CD\u6784</td></tr><tr><td>docs</td><td>\u66F4\u65B0\u6587\u6863\uFF08\u5982readme\uFF09</td></tr><tr><td>chore</td><td>\u6784\u5EFA\u5DE5\u5177\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8</td></tr><tr><td>style</td><td>\u4E0D\u6D89\u53CA\u4EE3\u7801\u903B\u8F91\u7684\u53D8\u52A8\uFF0C\u5982\u7F29\u8FDB\u548C\u6362\u884C\u5904\u7406</td></tr><tr><td>test</td><td>\u6DFB\u52A0\u8C03\u8BD5\u4EE3\u7801</td></tr></tbody></table><p>scope: \u8868\u793A\u6B64\u6B21\u63D0\u4EA4\u5F71\u54CD\u7684\u8303\u56F4\u53EF\u9009\u53C2\u6570, \u5982\u6587\u6863\u66F4\u65B0\u3001\u5DE5\u5177\u7C7B\u7684\u65B9\u6CD5\u66F4\u65B0\u5219\u6307\u5B9A\u76F8\u5E94\u6587\u4EF6\u540D, \u5F71\u54CD\u5168\u5C40\u7684\u66F4\u65B0\u5219\u4F7F\u7528 * \u6216\u4E0D\u5199\u3002</p><p>\u5408\u6CD5\u7684git commit\u793A\u4F8B\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u66F4\u65B0readme</span></span>
<span class="line"><span style="color:#A6ACCD;">docs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">changelog</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">: \u6DFB\u52A0v4.8.0.0\u7248\u672C\u8BB0\u5F55</span></span>
<span class="line"><span style="color:#676E95;"># \u65B0\u589E\u6D41\u91CF\u6C60</span></span>
<span class="line"><span style="color:#A6ACCD;">feat</span><span style="color:#89DDFF;">(*)</span><span style="color:#A6ACCD;">: \u65B0\u589E\u6D41\u91CF\u6C60\u529F\u80FD</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5F00\u53D1\u534F\u4F5C\u89C4\u8303" tabindex="-1">\u5F00\u53D1\u534F\u4F5C\u89C4\u8303 <a class="header-anchor" href="#\u5F00\u53D1\u534F\u4F5C\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u5F53\u8981\u5F00\u59CB\u5F00\u53D1\u4E00\u4E2A\u65B0\u529F\u80FD\u6216\u8FDB\u884C\u7EBF\u4E0A\u7D27\u6025\u95EE\u9898\u4FEE\u590D\u65F6\uFF0C\u5E94\u8BE5\u9075\u5FAA\u4EE5\u4E0B\u89C4\u8303\uFF1A</p><h3 id="\u65B0\u5EFA\u5206\u652F" tabindex="-1">\u65B0\u5EFA\u5206\u652F <a class="header-anchor" href="#\u65B0\u5EFA\u5206\u652F" aria-hidden="true">#</a></h3><p>\u65B0\u5EFA\u5206\u652F\u65F6\uFF0C\u5E94\u8BE5\u57FA\u4E8Emaster\u5206\u652F\u65B0\u5EFA\uFF0C\u4E00\u4E2A\u89C4\u8303\u5B8C\u6574\u7684\u5206\u652F\u540D\u5E94\u8BE5\u5305\u542B3\u4E2A\u90E8\u5206\uFF1A</p><ul><li>\u5206\u652F\u7C7B\u578B, \u53D6 <code>git commit\u89C4\u8303</code> \u4E2D\u7684\u63A8\u8350\u503C;</li><li>\u529F\u80FD\u6A21\u5757\u540D\u79F0, \u5982\u6D41\u91CF\u6C60, \u5219\u547D\u540D\u4E3A <code>flowpool</code></li><li>\u5F00\u53D1\u8005gitlab\u8D26\u6237\u540D, \u5982 lexmin0412</li></ul><p>\u7EFC\u5408\u4EE5\u4E0A\u89C4\u8303\uFF0C\u5F53\u6211\u4EEC\u5373\u5C06\u5F00\u59CB\u4E00\u4E2A\u540D\u4E3A\u6D41\u91CF\u6C60\u7684\u65B0\u529F\u80FD\u5F00\u53D1\u65F6, \u6211\u4EEC\u5E94\u8BE5\u4ECEmaster\u65B0\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>feat_flowpool_lexmin0412</code> \u7684\u5206\u652F\u3002</p><p>\u5176\u4ED6\u5408\u6CD5\u7684\u5206\u652F\u540D\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4EE5\u4E0B\u7C7B\u578B\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u540D\u4E3A\u6D41\u91CF\u6C60\u7684\u65B0\u529F\u80FD\u5F00\u53D1, \u5F00\u53D1\u8005\u540D\u79F0\u4E3Alexmin0412</span></span>
<span class="line"><span style="color:#A6ACCD;">feat_flowpool_lexmin0412</span></span>
<span class="line"><span style="color:#676E95;"># \u7EA2\u5305\u652F\u4ED8\u7D27\u6025\u95EE\u9898\u5904\u7406, \u5F00\u53D1\u8005\u540D\u4E3Acathe</span></span>
<span class="line"><span style="color:#A6ACCD;">fix_redPacket_pay_cathe</span></span>
<span class="line"><span style="color:#676E95;"># taro\u4F9D\u8D56\u7248\u672C\u5347\u7EA7, \u5F00\u53D1\u8005\u540D\u4E3Ahehs</span></span>
<span class="line"><span style="color:#A6ACCD;">chore_taro_update_hehs</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4EE3\u7801\u5408\u5E76" tabindex="-1">\u4EE3\u7801\u5408\u5E76 <a class="header-anchor" href="#\u4EE3\u7801\u5408\u5E76" aria-hidden="true">#</a></h3><p>\u5F53\u6211\u4EEC\u8FDB\u884C\u4EE3\u7801\u5408\u5E76\u65F6\uFF0C\u9700\u8981\u9075\u5FAA\u5982\u4E0B\u89C4\u8303\uFF1A</p><p>\u4E3A\u4E86\u5B9E\u65F6\u5171\u4EAB\u81EA\u5DF1\u5230\u5F00\u53D1\u8FDB\u5EA6\u7ED9\u522B\u7684\u5C0F\u4F19\u4F34\uFF0C\u5728\u5408\u5E76\u4EE3\u7801\u65F6\u5E94\u8BE5\u5148\u4ECE\u81EA\u5DF1\u7684\u5206\u652F\u5408\u5E76\u5230 <code>release/develop</code> \u5206\u652F, \u5982\u679C\u9700\u8981\u5728\u6D4B\u8BD5\u73AF\u5883\u9884\u89C8\u6216\u529F\u80FD\u5DF2\u5F00\u53D1\u5B8C\u6210, \u5219\u518D\u5C06 <code>release</code> \u5206\u652F\u7684\u4EE3\u7801\u5408\u5E76\u5230 <code>uat</code></p><p>\u4E3A\u4E86\u5171\u4EAB\u4ED6\u4EBA\u7684\u5F00\u53D1\u8FDB\u5EA6, \u6211\u4EEC\u4E5F\u5E94\u8BE5\u5728\u5408\u9002\u7684\u65F6\u95F4\u4ECE <code>release</code> \u5206\u652F\u5408\u5E76\u4EE3\u7801\u5230\u81EA\u5DF1\u7684\u5206\u652F\u3002\u4F46\u5B58\u5728\u4EE5\u4E0B\u7279\u6B8A\u60C5\u51B5\uFF1A</p><p>\u5982\u679C\u5B58\u5728\u540C\u4E00\u9879\u76EE\u6709\u4E0D\u540C\u7684\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u4E0D\u540C\u7684\u529F\u80FD, \u4E14\u4E0D\u5728\u540C\u4E00\u65F6\u95F4\u4E0A\u7EBF\u7684\u60C5\u51B5\uFF0C\u5207\u8BB0\u4E0D\u80FD\u4ECE <code>release</code> \u62C9\u53D6\u4EE3\u7801\u5230\u81EA\u5DF1\u7684\u5206\u652F, \u5426\u5219\u591A\u6B21\u5408\u5E76\u540E\u4F1A\u9020\u6210\u5F00\u53D1\u8FDB\u5EA6\u6DF7\u6DC6\u7684\u60C5\u51B5\u3002</p><h3 id="\u4EE3\u7801\u4E0A\u7EBF" tabindex="-1">\u4EE3\u7801\u4E0A\u7EBF <a class="header-anchor" href="#\u4EE3\u7801\u4E0A\u7EBF" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u6765\u8BF4, \u4EE3\u7801\u5728<code>uat</code> \u6D4B\u8BD5\u901A\u8FC7\u540E, \u5E94\u8BE5\u4ECE <code>release/develop</code> \u5206\u652F\u5408\u5E76\u4EE3\u7801\u5230 <code>master</code>, \u4F46\u5982\u679C\u5B58\u5728\u540C\u4E00\u9879\u76EE\u6709\u4E0D\u540C\u7684\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u4E0D\u540C\u7684\u529F\u80FD, \u4E14\u4E0D\u5728\u540C\u4E00\u65F6\u95F4\u4E0A\u7EBF\u7684\u60C5\u51B5\uFF0C\u5728\u4E0A\u7EBF\u65F6\u5E94\u8BE5\u76F4\u63A5\u4ECE\u81EA\u5DF1\u7684\u5206\u652F\u5408\u5E76\u5230 <code>master</code> \u5206\u652F, \u7136\u540E\u53D1\u9001\u7EDF\u4E00\u683C\u5F0F\u5230\u90AE\u4EF6\u7ED9\u8FD0\u7EF4\u5C0F\u4F19\u4F34\u5E2E\u5FD9\u4E0A\u7EBF\u3002</p><h3 id="\u4E0A\u7EBF\u4E4B\u540E\u7684\u5DE5\u4F5C" tabindex="-1">\u4E0A\u7EBF\u4E4B\u540E\u7684\u5DE5\u4F5C <a class="header-anchor" href="#\u4E0A\u7EBF\u4E4B\u540E\u7684\u5DE5\u4F5C" aria-hidden="true">#</a></h3><p>\u5728\u8FD0\u7EF4\u6267\u884C\u4E0A\u7EBF\u4E4B\u540E, \u9700\u8981\u89C6\u60C5\u51B5\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\u3002</p><h4 id="\u65B0\u5EFAtag" tabindex="-1">\u65B0\u5EFATag <a class="header-anchor" href="#\u65B0\u5EFAtag" aria-hidden="true">#</a></h4><p>\u5982\u679C\u662F\u5927\u7248\u672C\u66F4\u65B0, \u5728\u4E0A\u7EBF\u4E4B\u540E\u9700\u8981\u6253\u6807\u7B7E(\u4E5F\u5C31\u662FTag)\u6765\u5907\u4EFD\u6211\u4EEC\u7684\u4EE3\u7801, \u9632\u6B62\u4E22\u5931\u3002</p><p>\u70B9\u51FBTags</p><p><img src="`+n+'" alt="\u8FD9\u662F\u56FE\u7247"></p><p>\u70B9\u51FBNew Tag</p><p><img src="'+o+'" alt="\u65B0\u5EFA\u6807\u7B7E\u6309\u94AE"></p><p>\u8FDB\u5165\u65B0\u5EFA\u6807\u7B7E\u7684\u9875\u9762, \u4F9D\u7167 <a href="./Gitlab_Tag\u521B\u5EFA\u89C4\u8303.html">Tag\u89C4\u8303</a> \u586B\u5165\u4FE1\u606F\uFF0C\u53C2\u8003\u5982\u4E0B\uFF1A</p><p><img src="'+a+'" alt=""></p><p>\u7136\u540E\u70B9\u51FB <code>Create tag</code> \u6309\u94AE\u5373\u53EF\u521B\u5EFA\u6807\u7B7E, \u5907\u4EFD\u5F53\u524D\u7248\u672C\u4EE3\u7801, \u4FBF\u4E8E\u4EE3\u7801\u56DE\u6EAF\u3002</p>',34),c=[d];function i(r,h,_,g,m,b){return s(),t("div",null,c)}const C=e(p,[["render",i]]);export{y as __pageData,C as default};
