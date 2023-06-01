module.exports = {
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
}
