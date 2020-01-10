module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['html', 'prettier', 'vue'],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'warn',
      {
        // xx个字符后折行
        printWidth: 160,
        // 单引号
        singleQuote: true,
        // 尾随逗号<none, es5, all>
        trailingComma: 'none',
        // Tab占用2个空格
        tabWidth: 2,
        // 是否使用制表符：true-制表符，false-空格
        useTabs: false,
        // 括号添加空格
        bracketSpacing: true,
        // 箭头函数参数始终放置圆括号
        arrowParens: 'always',
        // JSX. 把>放置在最后一行末尾
        jsxBracketSameLine: true,
        // 语句末尾添加分号
        semi: true,
        // 括号
        bracesSpacing: true,
        // 数组展开
        arrayExpand: true,
        // JSX单引号
        jsxSingleQuote: false,
        // 更好的错误信息输出
        openOutput: true,
        // 匿名函数省略空格
        noSpaceEmptyFn: true,
        // 函数括号前始终插入空格
        spaceBeforeFunctionParen: true,
        // 三元运算
        flattenTernaries: true,
        // 允许属性名和值断行
        breakProperty: true,
        // else放置在新行
        breakBeforeElse: true,
        // 滚动到错误航
        autoScroll: true,
        // 对齐冒号
        alignObjectProperties: true,
        // 样式文件启用
        cssEnable: ['css', 'less', 'scss', 'postcss'],
        // GraphQL
        graphqlEnable: ['graphql'],
        // JavaScript 启用
        javascriptEnable: [],
        // JSON启用
        jsonEnable: ['json'],
        // TypeScript启用
        typescriptEnable: []
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      classes: true,
      defaultParams: true,
      modules: true
    }
  },
  extends: [
    'plugin:vue/base',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};
