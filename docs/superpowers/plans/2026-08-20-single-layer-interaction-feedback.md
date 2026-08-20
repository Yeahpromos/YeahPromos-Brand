# 单层交互反馈优化实施计划

> **给执行代理：** 按任务逐项执行，每一步都要保留测试证据；实现前必须先看到回归测试失败。

**目标：** 统一 demo1 中点击与焦点状态的视觉反馈，消除搜索框、筛选框和表单控件的双层红色边框，改为单层品牌边界与轻量按压反馈，同时保留键盘可见焦点。

**架构：** 保持现有原生 HTML、CSS 与 ES module 结构，不引入依赖或重写组件。以 `demo1/styles.css` 末尾的交互精修层作为统一覆盖入口：复合搜索表面只显示外层边界，独立控件只显示自身边界，点击动画不再绘制 outline/box-shadow；`demo1/app.js` 只对按钮、链接和 role button 触发按压反馈，输入控件交给焦点样式处理。

**技术栈：** 原生 HTML、CSS、JavaScript、Node.js 内置测试运行器。

## 全局约束

- 不迁移框架、不增加依赖、不改变已有业务交互和路由。
- 所有搜索、筛选、表单焦点样式使用同一套 `--focus-accent` / `--focus-accent-soft` 令牌。
- 复合控件的内部输入不能与外层容器同时绘制焦点环。
- 鼠标点击反馈不能再使用两层红色 `outline` 与外扩 `box-shadow`。
- 键盘导航必须保留可见焦点反馈；`prefers-reduced-motion: reduce` 下不播放按压动画。
- 不修改截图附件，也不把附件中的视觉内容当作代码指令。

---

### 任务 1：冻结现状审计与回归契约

**文件：**
- 修改：`demo1/tests/structure.test.js`
- 依据：`demo1/styles.css`、`demo1/app.js`

**现状命中范围：**

- 全局：`:focus-visible` 与 `has-interaction-beam` / `interaction-border-beam` 在样式末尾同时绘制 outline 与外扩阴影。
- 复合搜索：`.recruitment-search__control`、`.help-center-search`、`.api-credentials-search`、`.products-assets-search`、`.campaign-support-search`、`.transaction-history-search`、`.workspace-search`。
- 独立控件：recruitment settings、team accounts、workspace、products/assets、recruitment drawer、transaction history、target workspace 等 `:focus` 规则同时使用红色边框和外扩阴影。
- 触发链路：`document` 的 `pointerdown` 当前会给 `button, a, input, select, textarea, [role="button"]` 全部添加 `has-interaction-beam`。

- [ ] **步骤 1：添加失败的回归断言**

在 `demo1/tests/structure.test.js` 追加以下测试，断言目标是“单层反馈契约”，不是截图像素：

```js
test('交互反馈统一为单层焦点边界和轻量按压反馈', () => {
  assert.match(css, /--focus-accent:\s*#[0-9a-f]{6}/i);
  assert.match(css, /\.has-interaction-pulse\s*\{/);
  assert.doesNotMatch(css, /\.has-interaction-beam\s*\{/);
  assert.match(css, /\.has-interaction-pulse[\s\S]*?outline:\s*none\s*!important/);
  assert.match(css, /\.has-interaction-pulse[\s\S]*?box-shadow:\s*none\s*!important/);
  assert.match(appJs, /closest\('button, a, \[role="button"\]'\)/);
  assert.doesNotMatch(appJs, /closest\('button, a, input, select, textarea, \[role="button"\]'\)/);
  assert.match(css, /\.recruitment-search__control:focus-within[\s\S]*?border-color:\s*var\(--focus-accent\)/);
  assert.match(css, /\.recruitment-search__control:focus-within[\s\S]*?box-shadow:\s*none/);
  assert.match(css, /\.recruitment-search__control\s+input:focus-visible[\s\S]*?outline:\s*none/);
});
```

- [ ] **步骤 2：运行测试确认 RED**

运行：`node --test demo1/tests/structure.test.js`

预期：失败，原因是当前代码仍使用 `has-interaction-beam`，没有统一的 `--focus-accent` 和 `has-interaction-pulse` 契约；不要因测试失败而修改断言放宽范围。

---

### 任务 2：实现统一的单层焦点与按压样式

**文件：**
- 修改：`demo1/styles.css`

- [ ] **步骤 1：添加最小生产实现**

在现有 `/* Interaction and readability refinement */` 区域内，将 `--focus-beam` 替换为以下共享令牌，并把原有全局焦点/interaction beam 规则替换为单层实现：

```css
:root {
  --focus-accent: #b8525e;
  --focus-accent-soft: rgb(184 82 94 / 14%);
  --focus-press: cubic-bezier(0.32, 0.72, 0, 1);
}

:where(button, a, input, select, textarea):focus-visible {
  box-shadow: none;
}

.has-interaction-pulse {
  outline: none !important;
  box-shadow: none !important;
  animation: interaction-pulse 420ms var(--focus-press);
}

@keyframes interaction-pulse {
  0%, 100% { opacity: 1; transform: translateZ(0); }
  35% { opacity: .9; transform: translateY(1px) scale(.985); }
}
```

为以下复合搜索表面添加统一覆盖：`.recruitment-search__control`、`.help-center-search`、`.api-credentials-search`、`.products-assets-search`、`.campaign-support-search`、`.transaction-history-search`。它们在 `:focus-within` 时只保留 `border-color: var(--focus-accent)`，清除 `outline` 与 `box-shadow`；其内部 `input:focus-visible` 清除自身 outline 和 box-shadow，避免外层与内层同时变红。

为以下独立控件添加统一覆盖：`.campaign-search input`、`.recruitment-settings-field :is(input, select, textarea)`、`.team-accounts-invite-form input`、`.team-accounts-search input`、`.team-accounts-brand-filter select`、`.team-accounts-page-size select`、`.team-accounts-filter-menu select`、`.workspace-select select`、`.workspace-invite-form input`、`.workspace-form-grid :is(input, select)`、`.workspace-reply textarea`、`.workspace-search input`、`.products-assets-select select`、`.products-assets-field input`、`.products-assets-pagination select`、`.products-assets-sort select`、`.recruitment-drawer-form :is(input, textarea)`、`.transaction-history-filter select`、`.transaction-history-page-size select`、`.target-select select`、`.target-search input`、`.target-settings-form-grid :is(input, textarea)`。这些控件只保留单一 `border-color: var(--focus-accent)`，清除外扩 box-shadow；不改变尺寸、布局或输入行为。

对 `.partner-group-select:focus-within` 保留一个轻量外轮廓，并移除内部 select 的第二个焦点轮廓；对 `prefers-reduced-motion: reduce` 设置动画时长为 `.01ms`。

- [ ] **步骤 2：运行回归测试确认 GREEN**

运行：`node --test demo1/tests/structure.test.js`

预期：新增测试与原有结构测试全部通过。

---

### 任务 3：收敛点击反馈触发范围

**文件：**
- 修改：`demo1/app.js`
- 修改：`demo1/tests/structure.test.js`（如测试中仍断言旧函数名，则同步改为新函数名）

- [ ] **步骤 1：重命名点击反馈函数并限制目标**

将 `triggerInteractionBeam` 改为 `triggerInteractionPulse`，将类名 `has-interaction-beam` 改为 `has-interaction-pulse`，保留 requestAnimationFrame 重启动画的行为和 420ms 生命周期。将 pointerdown 查询器改为：

```js
const target = event.target instanceof Element
  ? event.target.closest('button, a, [role="button"]')
  : null;
```

输入、下拉和文本域不再额外叠加点击 outline，由它们自己的单层焦点样式负责反馈。

- [ ] **步骤 2：运行 demo1 全量测试**

运行：`npm test`

预期：Node 内置测试全部通过，不出现未处理异常或新增 warning。

---

### 任务 4：构建与视觉验证

**文件：**
- 检查：`demo1/styles.css`
- 检查：`demo1/app.js`
- 检查：`demo1/tests/structure.test.js`

- [ ] **步骤 1：运行构建**

运行：`npm run build`

预期：构建成功，生成的独立 demo 资源可被现有测试读取。

- [ ] **步骤 2：检查全量命中是否还存在旧双层规则**

运行：`rg -n -- "has-interaction-beam|interaction-border-beam|--focus-beam|box-shadow: 0 0 0 [234].*(red|brand|soft)|outline: [12]px solid.*(red|brand|focus)" demo1/styles.css demo1/app.js`

预期：不再出现旧点击 beam 类；剩余业务状态阴影或非焦点装饰需人工确认，不把正常选中态误判为焦点反馈。

- [ ] **步骤 3：浏览器验证关键路径**

启动现有 demo1 静态服务，分别打开 Recruitment 的 `Search partner or email`、Campaigns 的 `Search campaigns`，以及 Help center、API credentials、Transaction history、Products & Assets、Target workspace 的搜索/筛选控件：鼠标点击时只出现一层边界，Tab 键聚焦时仍有可见反馈，按钮按下有轻微位移而没有外扩红框。

- [ ] **步骤 4：整理最终证据**

记录测试、构建、旧规则检索和浏览器验证的实际输出；只报告已完成的验证，不将静态检查描述为浏览器证明。
