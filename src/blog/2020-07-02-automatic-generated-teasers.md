---
title: "ブログにシェア画像自動生成機能をつけた"
date: 2020-07-02
updated_at: 2020-07-07
tags:
  - tech
  - node-html-to-image
layout: layouts/blog.njk
---

[[toc]]

## 概要

シェア画像自動生成機能をつけた。[この記事](https://fettblog.eu/11ty-automatic-twitter-cards/)を参考にした。

大体こんな感じ。

1. タイトルからシェア画像の元になるページを生成
2. ブログのデータにシェア画像URLをセット
4. ベースレイアウトでURLをog:imageにセット
3. 生成元ページのHTMLからPNGを生成

## 細かい話

### HTML to PNG

参考にした記事ではSVGを作ってそれをPNGに変換しているけど、僕はSVGでいろいろ調整していくのがめんどくさかったのでHTMLをPNGにする方法にした。HTMLをPNGに変換するのは[node-html-to-image](https://github.com/frinyvonnick/node-html-to-image)を使った。このライブラリはpuppeteerを使ってHTMLを画像に変換してくれるやつ。記事数増えてビルドに時間かかりすぎるようなら考え直すかも。

### CSS in puppeteer

~~外部CSSは反映されなかったので~~インラインスタイルでCSSを書いた。~~Google Fontsのフォントを参照したかったんだけど無理だったのでbase64にしてHTMLに埋め込んだ。おかげでHTMLがクソ長になってしまった…。~~
`node-html-to-image`のoptionにある`waitUntil`に`domcontentloaded`を設定すれば外部CSSも適用される。（base64でフォント埋め込んだせいでビルドが大変遅くなっていた…。）

```js
{
  waitUntil: 'domcontentloaded',
}
```

あと「ブラウザで見ると問題ないのに生成した画像だとちょっとずれる」みたいなことがあったのでCSSを調整した。`margin-top`があると良くないみたいだったので`padding`にした。

### Computed Data

記事のデータに`ogImageUrl`を持たせる必要があったので、11tyの[`Computed Data`](https://www.11ty.dev/docs/data-computed/)という仕組みを利用した。`blog`ディレクトリに`blog.11tydata.js`を配置して下記のようなコードを書けば、`blog`配下にある記事すべてに`ogImageUrl`というデータが追加される。

```js
module.exports = {
  eleventyComputed: {
    ogImageUrl: data => `https://takanorip.com/teasers/${data.page.fileSlug}.png`
  }
};
```

## その他

11tyの[Pagination](https://www.11ty.dev/docs/pagination/)と[Permalink](https://www.11ty.dev/docs/permalinks/)はマジで便利。この2つを使えば任意のデータからページを簡単に出力できる。タグの記事一覧もこれらの機能を使って実装されてる。

## 感想
意外とかんたんだった。だいぶ11tyを理解してきた気がする。