<div align="center">

<img width="814" src="docs/images/logo.png" alt="logo">

A command-line interface tool for translating localization files to other languages.

---

[![NodeJS](https://img.shields.io/node/v/%40kabeep%2Fnode-translate-i18n?color=lightseagreen)](https://nodejs.org/docs/latest/api/)
[![License](https://img.shields.io/github/license/kabeep/node-translate-i18n?color=slateblue)](LICENSE)
[![NPM](https://img.shields.io/npm/d18m/%40kabeep%2Fnode-translate-i18n?color=cornflowerblue)](https://www.npmjs.com/package/@kabeep/node-translate-i18n)
[![Codecov](https://img.shields.io/codecov/c/github/kabeep/node-translate-i18n?logo=codecov&color=mediumvioletred)](https://codecov.io/gh/kabeep/node-translate-i18n)
[![Codacy](https://img.shields.io/codacy/grade/dfc924592ec54c55bcd4f5ed940065b9?logo=codacy&logoColor=dodgerblue&color=dodgerblue)](https://app.codacy.com/gh/kabeep/node-translate-i18n/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/Qh23T2Zgw4Fy4V8uvKaymp/SM7PbTQQQRHifxy6jgNcTm/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/circleci/Qh23T2Zgw4Fy4V8uvKaymp/SM7PbTQQQRHifxy6jgNcTm/tree/master)

English | [简体中文](README.zh-CN.md)

![Alt](https://repobeats.axiom.co/api/embed/eb1e5895d457cb227266870e7461139852ca040c.svg "Repobeats analytics image")

<img width="814" src="docs/images/helper.png" alt="help-information">

</div>

## 📖 Introduction

> Node Translate I18n is a tool for multilingual internationalization, enabling easy translation of localization files
> into other languages. Translate a Chinese localization file `zh-CN.js`, for example, into an English localization
> file `en-US.js`.
>
> With a simple command-line interface, you can quickly convert your project's localization files into the desired
> target language, facilitating cross-language i18n support in NodeJS project.



<img width="814" src="docs/images/usage.gif" alt="usage-gif">

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

localize({
    _: ['./src/locale/en-US.ts'],
    to: ['zh-CN', 'ja-JP'],
    rewrite: true,
})
    .then(console.log)
    .catch(console.error);
```

#### Using in terminal

```shell
localize ./en-US.ts -t "zh-CN" "ja-JP" -r
```

```text
Usage: localize <path> [options]

Options:
  -t, --to       Target language, specified as ISO 639-1 code [array] [required]
  -r, --rewrite  Overwrite the file or phrase if it exists
                                                      [boolean] [default: false]
  -v, --version  Show version number                                   [boolean]
  -h, --help     Show help                                             [boolean]

Examples:
  localize ./en-US.ts -t zh-CN -r  Overwrite an existing file or phrase
  localize ./en-US.js -t zh-CN     Use javascript locale files
  localize ./en-US.ts -t zh-CN     Use typescript locale files
  localize ./en-US.json -t zh-CN   Use json locale file
```

## 🪄 Examples

#### Append

> For localized files that do not exist,
> the cli will create and write a new file using the translation from the source file.
> (The file name comes from the `to` parameter).

```shell
# locale
#   ├── en-US.js (1 row)
# =>
# locale
#   ├── en-US.js (1 row)
# + ├── zh-CN.js (1 row)
localize ./locale/en-US.js -t "zh-CN"
```

#### Diff

> When the localization file in the `to` parameter already exists,
> only the new phrases will be written via `diff`.
> This is useful when certain phrases have been manually modified
> with more accurate translation results.

```shell
# locale
#   ├── en-US.js (2 row)
#   ├── zh-CN.js (1 row)
#   ├── ja-JP.js (2 row)
# =>
# locale
#   ├── en-US.js (2 row)
# M ├── zh-CN.js (2 row)
#   ├── ja-JP.js (2 row)
localize ./locale/en-US.js -t "zh-CN" "ja-JP"
```

#### Rewrite

> When the localization file in the `to` parameter already exists,
> the existing phrase will be overwritten.

```shell
# locale
#   ├── en-US.js (2 row)
#   ├── zh-CN.js (2 row)
#   ├── ja-JP.js (2 row)
# =>
# locale
#   ├── en-US.js (2 row)
# M ├── zh-CN.js (2 row)
# M ├── ja-JP.js (2 row)
localize ./locale/en-US.js -t "zh-CN" "ja-JP" -r
```

## 🔩 Supported `to` parameters

- [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/code_list.php)

```text
en, zh, ru, ...
```

- [RFC 4647](https://www.rfc-editor.org/rfc/rfc4647.txt)
  （Any combination with [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/code_list.php)，
  [ISO 15924](https://unicode.org/iso15924/iso15924-codes.html)
  and [ISO 3166-1](https://www.iso.org/obp/ui/#search)）

```text
en-US, zh-CN, zh-TW, ru-RU, ...
```

- Custom file suffix

```text
en-US.locale, zh-CN.locale, zh-TW.locale, ru-RU.locale, ...
```

## 📄 Supported file extensions

- Javascript
- Typescript
- JSON

## </> Supported code styles

Unlimited key-value pairs can be viewed
[format.js docs](https://formatjs.io/docs/core-concepts/basic-internationalization-principles/)
or [polyglot.js docs](https://airbnb.io/polyglot.js/)

Here is an example:

```json
{
    "GREETING": "Hello {{name}}"
}
```

or

```javascript
export default {
    "GREETING": "Hello {{name}}"
}
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