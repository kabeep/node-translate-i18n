<div align="center">

<img width="814" src="docs/images/logo.png" alt="logo">

A command-line interface tool for translating localization files to other languages.

---

English | [简体中文](README.zh-CN.md)

</div>

## 📖 Introduction

> Node Translate I18n is a tool for multilingual internationalization, enabling easy translation of localization files
> into other languages. Translate a Chinese localization file `zh-CN.js`, for example, into an English localization
> file `en-US.js`.
>
> With a simple command-line interface, you can quickly convert your project's localization files into the desired
> target language, facilitating cross-language i18n support in NodeJS project.

## ⚙️ Installation

```bash
npm install @kabeep/node-translate-i18n --save
```

```bash
yarn add @kabeep/node-translate-i18n
```

```bash
pnpm add @kabeep/node-translate-i18n
```

## 🚀 Usage

#### Using in javascript

```javascript
import localize from '@kabeep/node-translate-i18n';

localize({ from: 'en-US', to: 'zh-CN' });
```

#### Using in terminal

```shell
localize -f "en-US" -t "zh-CN"
```

## 🪄 Examples

#### Directory tree

```shell
# locale
# ├── en-US.js
```

#### Usage of language code

```shell
localize -f "en-US" -t "zh-CN"
```

## 🔗 Related

- [i18n-cli](https://github.com/pandodao/i18n-cli) - A CLI tool that utilizes the OpenAI API to translate JSON-based
  locale files
- [locize-cli](https://github.com/locize/locize-cli) - locize cli to import / export locales, add / edit / remove, sync
  segments
- [node-polyglot](https://github.com/airbnb/polyglot.js) - Give your JavaScript the ability to speak many languages.
- [node-translate](https://github.com/kabeep/node-translate) - 🦜 A powerful, secure and feature-rich api via Google
  Translation.
- [node-translate-cli](https://github.com/kabeep/node-translate-cli) - > A powerful, secure and feature-rich tool via
  Google Translation in terminal. _

## 🤝 Contribution

Contributions via Pull Requests or [Issues](https://github.com/kabeep/node-translate-i18n/issues) are welcome.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.