const fs = require("fs");
const path = require("path");

const scopes = fs
	.readdirSync(path.resolve(__dirname, "src"), { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name.replace(/s$/, ""));

module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2, //严格类型，如果提交消息的类型不在规定的类型列表中，将会失败
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    'type-case': [0], //提交消息的类型是否符合大小写
    'type-empty': [0], //提交消息是否包含类型
    'scope-empty': [0], //提交消息是否包含作用域
    'scope-case': [0], //提交消息的作用域是否符合大小写规范
    'subject-full-stop': [0, 'never'], //提交消息的主题是否以句号结尾
    'subject-case': [0, 'never'], //校验提交消息的主题是否符合大小写规范
    'header-max-length': [0, 'always', 72], //提交消息的头部是否超过指定长度
  },
  // cz-git配置
  prompt: {
    messages: {
      //自定义命令行提示信息
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?',
    },
    types: [
      //自定义选择类型提示
      { value: 'feat', name: '特性:   🚀  新增功能', emoji: '🚀' },
      { value: 'fix', name: '修复:   🧩  修复缺陷', emoji: '🧩' },
      { value: 'docs', name: '文档:   📚  文档变更', emoji: '📚' },
      {
        value: 'style',
        name: '格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）',
        emoji: '🎨',
      },
      {
        value: 'refactor',
        name: '重构:   ♻️  代码重构（不包括 bug 修复、功能新增）',
        emoji: '♻️',
      },
      { value: 'perf', name: '性能:    ⚡️  性能优化', emoji: '⚡️' },
      {
        value: 'test',
        name: '测试:   ✅  添加疏漏测试或已有测试改动',
        emoji: '✅',
      },
      {
        value: 'build',
        name: '构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
        emoji: '📦️',
      },
      { value: 'ci', name: '集成:   🎡  修改 CI 配置、脚本', emoji: '🎡' },
      { value: 'chore', name: '回退:   ⏪️  回滚 commit', emoji: '⏪️' },
      {
        value: 'revert',
        name: '其他:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
        emoji: '🔨',
      },
      { value: 'wip', name: '开发:   🕔  正在开发中', emoji: '🕔' },
      { value: 'workflow', name: '工作流:   📋  工作流程改进', emoji: '📋' },
      { value: 'types', name: '类型:   🔰  类型定义文件修改', emoji: '🔰' },
    ],
		useEmoji: true,
		scopes: [...scopes],
		customScopesAlign: "bottom",
		emptyScopesAlias: "empty",
		customScopesAlias: "custom",
		allowBreakingChanges: ["feat", "fix"],
  },
}
