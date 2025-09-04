import{_ as e,p as a,q as n,a1 as s}from"./framework-cf3d8b6f.js";const i={},d=s(`<h1 id="更新版本" tabindex="-1"><a class="header-anchor" href="#更新版本" aria-hidden="true">#</a> 更新版本</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>MineAdmin是一个持续迭代版本、新增功能和修复BUG的系统，您可以参考此文档保持您的MineAdmin为最新版本。</p></div><h2 id="更新最新的代码" tabindex="-1"><a class="header-anchor" href="#更新最新的代码" aria-hidden="true">#</a> 更新最新的代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 保存工作现场（将目前还不想提交的但是已经修改的代码保存至堆栈中）</span>
<span class="token function">git</span> stash

<span class="token comment"># 从远程仓库获取最新代码并自动合并到本地</span>
<span class="token function">git</span> pull

<span class="token comment"># pull 命令如果有冲突，先处理冲突（您新增的文件不会发生冲突，而框架文件我们更新同时您也更新了该文件才可能冲突）</span>

<span class="token comment"># 恢复工作现场</span>
<span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新依赖" tabindex="-1"><a class="header-anchor" href="#更新依赖" aria-hidden="true">#</a> 更新依赖</h2><h3 id="更新后端" tabindex="-1"><a class="header-anchor" href="#更新后端" aria-hidden="true">#</a> 更新后端</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> update <span class="token parameter variable">-vvv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新前端" tabindex="-1"><a class="header-anchor" href="#更新前端" aria-hidden="true">#</a> 更新前端</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="升级数据库" tabindex="-1"><a class="header-anchor" href="#升级数据库" aria-hidden="true">#</a> 升级数据库</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php bin/hyperf.php mine:update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="更新redis缓存" tabindex="-1"><a class="header-anchor" href="#更新redis缓存" aria-hidden="true">#</a> 更新Redis缓存</h2><p>进入到后台首页，点击头像下拉菜单弹出<code>清除缓存</code>即可</p>`,13),r=[d];function c(l,t){return a(),n("div",null,r)}const o=e(i,[["render",c],["__file","version.html.vue"]]);export{o as default};
