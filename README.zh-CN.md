<div align="center">

<img width="814" src="docs/images/logo.png" alt="logo">

用于将本地化文件翻译为其他语言的命令行界面工具。

---

[English](README.md) | 简体中文

</div>

## 📖 简介

> node-Translate-i18n 是一个用于多语言国际化的工具，能够轻松地将本地化文件翻译成其他语言，例如为 `en-US.js`
> 翻译一份中文本地化文件 `zh-CN.js`。
>
> 通过简单的命令行界面，您可以快速将项目的本地化文件转换成所需的目标语言，实现 NodeJS
> 项目跨语言的国际化支持。

## ⚙️ 安装

```bash
npm install @kabeep/node-translate-i18n --save
```

```bash
yarn add @kabeep/node-translate-i18n
```

```bash
pnpm add @kabeep/node-translate-i18n
```

## 🚀 使用

#### 在 Javascript 中使用

```javascript
import localize from '@kabeep/node-translate-i18n';

localize({ from: 'en-US', to: 'zh-CN' });
```

#### 在终端中使用

```shell
localize -f "en-US" -t "zh-CN"
```

## 🪄 例子

#### 目录结构

```shell
# locale
# ├── en-US.js
```

#### 使用语言代码

```shell
localize -f "en-US" -t "zh-CN"
```

## 🔗 关联库

- [i18n-cli](https://github.com/pandodao/i18n-cli) - 一个 CLI 工具，利用 OpenAI API 翻译基于 JSON 的语言环境文件
- [locize-cli](https://github.com/locize/locize-cli) - locize cli 导入/导出语言环境、添加/编辑/删除、同步片段
- [node-polyglot](https://github.com/airbnb/polyglot.js) - 让您的 JavaScript 能够讲多种语言。
- [node-translate](https://github.com/kabeep/node-translate) - 🦜 一个强大、安全且功能丰富的 API，通过 Google 翻译。
- [node-translate-cli](https://github.com/kabeep/node-translate-cli) - > 一个强大、安全且功能丰富的终端工具，通过 Google
  翻译。_

## 🤝 贡献

欢迎通过 Pull Requests 或 [Issues](https://github.com/kabeep/node-translate-i18n/issues) 来贡献你的想法和代码。

## 📄 许可

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。