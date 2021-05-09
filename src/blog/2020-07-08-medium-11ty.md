---
title: "Mediumの記事を移行した"
date: 2020-07-08
tags:
  - tech
  - turndown
  - jsdom
layout: layouts/blog.njk
---

## やったこと

このブログを作る前にMediumで書いていた記事をすべて移行してきた。画像はまだMedium上にあるものを参照している。

MediumからHTML形式で記事がエクスポートされるので、このブログで利用するには下記手順でコンテンツを整形する必要がある。

1. HTMLをmarkdownに変換しやすい形に編集
2. HTMLをmarkdownに変換
3. markdownに11ty用YAMLヘッダを追加

## HTMLをmarkdownに変換しやすい形に編集

やったことは下記。[jsdom](https://github.com/jsdom/jsdom)を使ってこれらの処理を行った。

- コンテンツ部分の抜き出し（styleなどの余計な部分を省くため）
- iframeとかscriptで表示してたとこをリンクにする
- 見出しタグ変更

iframeはそのまま埋め込んでも良かったんだけど、レスポンシブ対応とかめんどくさかったのでリンクに変換した。見出しはMediumの記事だと`h3, h4`タグが使われているんだけどこちらの都合で`h2, h3`タグに変換した。

## HTMLをmarkdownに変換

[turndown](https://github.com/domchristie/turndown)を使った。`headingStyle`と`codeBlockStyle`は11tyの設定と違う書式がデフォルトになってるので上書きした。それ以外は特に問題なく使えた。感謝。

## ライブラリ公開した

雑に`npm publish`した。（ https://www.npmjs.com/package/medium-11ty ）
こんな感じで使える。

```bash
$ npx medium-11ty index.js --input InputPath --output OutputPath
```
