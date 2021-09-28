import{_ as e}from"./IconSfc.12692c7c.js";import{o as s,c as t,a5 as a}from"./vendor.bac705d4.js";const d={components:{}},l={class:"varlet-site-doc"},o=a(`<h1>Uploader</h1><div class="card"><h3>Intro</h3><p>It provides the ability to read files and preview pictures and videos. Get the file upload server by listening for <code>after-read</code> events.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Uploader } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Uploader)
</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> @<span class="hljs-attr">after-read</span>=<span class="hljs-string">&quot;handleAfterRead&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([])

    <span class="hljs-keyword">const</span> handleAfterRead = <span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(file)

    <span class="hljs-keyword">return</span> {
      files,
      handleAfterRead
    }
  }
}
</code></pre></div><div class="card"><h3>File Preview</h3><p>By analyzing the file URL suffix name to determine the file type, support image and video preview.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://www.runoob.com/try/demo_source/mov_bbb.mp4&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cover.jpg&#39;</span>
      }
    ])

    <span class="hljs-keyword">return</span> { files }
  }
}
</code></pre></div><div class="card"><h3>Upload State</h3><p>Three uploading states, <code>loading</code>, <code>success</code> and <code>error</code>, are provided, and tool functions are provided to quickly obtain files with corresponding states.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> @<span class="hljs-attr">after-read</span>=<span class="hljs-string">&quot;handleAfterRead&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">state</span>: <span class="hljs-string">&#39;loading&#39;</span>
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">state</span>: <span class="hljs-string">&#39;success&#39;</span>
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">cover</span>: <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,
        <span class="hljs-attr">state</span>: <span class="hljs-string">&#39;error&#39;</span>
      }
    ])

    <span class="hljs-keyword">const</span> handleAfterRead = <span class="hljs-function">(<span class="hljs-params">file</span>) =&gt;</span> {
      file.state = <span class="hljs-string">&#39;loading&#39;</span>

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        file.state = <span class="hljs-string">&#39;success&#39;</span>
      }, <span class="hljs-number">1000</span>)
    }

    <span class="hljs-keyword">return</span> { 
      files,
      handleAfterRead
    }
  }
}
</code></pre></div><div class="card"><h3>File Maxlength</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> <span class="hljs-attr">:maxlength</span>=<span class="hljs-string">&quot;1&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>File Size Limit</h3><p>If the limit is exceeded, the file will be blocked. You can get the file by listening for the <code>oversize</code> event.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> <span class="hljs-attr">:maxsize</span>=<span class="hljs-string">&quot;1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;handleOversize&quot;</span> /&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([])

    <span class="hljs-keyword">const</span> handleOversize = <span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(file)

    <span class="hljs-keyword">return</span> { 
      files,
      handleAfterRead
    }
  }
}
</code></pre></div><div class="card"><h3>Upload Preprocessing</h3><p>Operate on a file by registering a <code>before-read</code> event that returns a false value to prevent the file from being read.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span> @<span class="hljs-attr">before-read</span>=<span class="hljs-string">&quot;handleBeforeRead&quot;</span>/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> files = ref([])

    <span class="hljs-keyword">const</span> handleBeforeRead = <span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> file.file.size &lt;= <span class="hljs-number">1024</span> * <span class="hljs-number">10</span>

    <span class="hljs-keyword">return</span> { 
      files,
      handleAfterRead
    }
  }
}
</code></pre></div><div class="card"><h3>Disabled</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">disabled</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Readonly</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">readonly</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>/&gt;</span>
</code></pre></div><div class="card"><h3>Validate</h3><p>The values are validated by passing in an array of validator, If the validator returns <code>true</code>, the validation passes. Other values are converted to text as a user prompt. The second argument is a collection of utility functions that can quickly get a collection of files that match the state.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span>
  <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[
    (v, u) =&gt; u.getError(v).length === 0 || &#39;There is a file that failed to upload&#39;
  ]&quot;</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>
/&gt;</span>
</code></pre></div><div class="card"><h3>Customize upload styles</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;files&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Upload<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-uploader</span>&gt;</span>
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>File list</td><td><em>VarFile[]</em></td><td><code>[]</code></td></tr><tr><td><code>accept</code></td><td>Accepted file type, consistent with the native attribute</td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td><code>capture</code></td><td>Get the file, the same as the native property</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>multiple</code></td><td>Whether to select multiple files</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>Whether the readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>Whether the disabled</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>removable</code></td><td>Whether the removable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>maxlength</code></td><td>Maximum number of files</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>maxsize</code></td><td>Maximum file size</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>previewed</code></td><td>Whether to allow preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>ripple</code></td><td>Whether to open ripple</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>validate-trigger</code></td><td>Timing to trigger validation\uFF0C The optional value is <code>onChange</code> <code>onRemove</code></td><td><em>ValidateTriggers[]</em></td><td><code>[&#39;onChange&#39;, &#39;onRemove&#39;]</code></td></tr><tr><td><code>rules</code></td><td>The validation rules\uFF0CReturns <code>true</code> to indicate that the validation passed\uFF0CThe remaining values are converted to text as user prompts</td><td><em>Array&lt;(v: VarFile, u: VarFileUtils) =&gt; any&gt;</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFile</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>file</code></td><td>Native file</td><td><em>File</em></td><td><code>-</code></td></tr><tr><td><code>name</code></td><td>File name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>url</code></td><td>File url</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cover</code></td><td>File cover image</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>Cover image fill mode, Optional value is <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>state</code></td><td>File upload state, Optional value is <code>loading</code> <code>success</code> <code>error</code></td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>VarFileUtils</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr></tbody></table></div><div class="card"><h3>Methods</h3><table><thead><tr><th>Method</th><th>Description</th><th>Arguments</th><th>Return</th></tr></thead><tbody><tr><td><code>getLoading</code></td><td>Gets a collection of files for <code>state</code> is <code>loading</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getSuccess</code></td><td>Gets a collection of files for <code>state</code> is <code>success</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>getError</code></td><td>Gets a collection of files for <code>state</code> is <code>error</code></td><td><code>VarFile[]</code></td><td><code>VarFile[]</code></td></tr><tr><td><code>validate</code></td><td>Trigger validate</td><td><code>-</code></td><td><code>valid: Promise&lt;boolean&gt;</code></td></tr><tr><td><code>resetValidation</code></td><td>Clearing validate messages</td><td><code>-</code></td><td><code>-</code></td></tr><tr><td><code>reset</code></td><td>Clear the value of the binding(set to <code>[]</code>)and validate messages</td><td><code>-</code></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>before-read</code></td><td>Trigger returns a false value before a file is read to prevent the file from being read(support promise)</td><td><code>file: VarFile</code></td></tr><tr><td><code>after-read</code></td><td>Triggered after the file is read</td><td><code>file: VarFile</code></td></tr><tr><td><code>oversize</code></td><td>Triggered when the file size limit is exceeded</td><td><code>file: VarFile</code></td></tr><tr><td><code>remove</code></td><td>Triggered when a file is deleted</td><td><code>file: VarFile</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Upload action content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-action-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-action-icon-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-action-icon-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-action-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-size</code></td><td><code>80px</code></td></tr><tr><td><code>--uploader-file-margin</code></td><td><code>0 10px 10px 0</code></td></tr><tr><td><code>--uploader-file-name-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-file-name-color</code></td><td><code>#888</code></td></tr><tr><td><code>--uploader-file-name-font-size</code></td><td><code>12px</code></td></tr><tr><td><code>--uploader-file-name-padding</code></td><td><code>10px</code></td></tr><tr><td><code>--uploader-file-text-align</code></td><td><code>center</code></td></tr><tr><td><code>--uploader-file-close-background</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--uploader-file-close-size</code></td><td><code>24px</code></td></tr><tr><td><code>--uploader-file-close-icon-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--uploader-file-close-icon-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--uploader-file-cover-fit</code></td><td><code>cover</code></td></tr><tr><td><code>--uploader-file-cover-background</code></td><td><code>#f7f8fa</code></td></tr><tr><td><code>--uploader-preview-video-width</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-preview-video-height</code></td><td><code>100vw</code></td></tr><tr><td><code>--uploader-file-indicator-height</code></td><td><code>4px</code></td></tr><tr><td><code>--uploader-file-indicator-normal-color</code></td><td><code>var(--color-disabled)</code></td></tr><tr><td><code>--uploader-file-indicator-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--uploader-file-indicator-error-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--uploader-disabled-color</code></td><td><code>#ddd</code></td></tr><tr><td><code>--uploader-loading-background</code></td><td><code>linear-gradient(90deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3), hsla(0, 0%, 100%, 0))</code></td></tr></tbody></table></div>`,21),n=[o];function c(r,p,i,h,g,u){return s(),t("div",l,n)}var v=e(d,[["render",c]]);export{v as default};