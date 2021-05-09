---
title: "Installing Algolia on my blog by 11ty"
date: 2020-07-13
tags:
  - tech
  - algolia
layout: layouts/blog.njk
---

[[toc]]

## 概要

ブログに全文検索機能を実装したかったので[Algolia](https://www.algolia.com/)を導入した。ドキュメントがすごく充実していて助かったが、いくつかつまずいたところがあるのでこの記事にまとめた。ここではAlgoliaとは何かについては特に解説しない。

検索ページは[こちら](https://takanorip.com/blog/search/)か右上のナビゲーションからいけるよ。

## 記事を登録する

まず最初に検索に必要な情報をAlgoliaに登録する。GatsbyだとPluginがあってよしなにやってくれるのだけど、11tyにはそういう便利Pluginがなさそうなので自力実装した。

### 記事データをJSON化する

Algoliaに登録したい記事データをJSONファイルとして出力する。11tyの`Custom Collection`と`Permalink`の機能を利用する。

まず`algolia`というCustom Collectionをつくる。[`.eleventy.js`](https://github.com/takanorip/portfolio-version3/blob/master/.eleventy.js)に次のように書いた。

```js
module.exports = function (eleventyConfig) {
  ...
  const format = require("date-fns/format");
  const removeMd = require("remove-markdown");

  const bodyText = (md) => {
    const text = removeMd(md);
    return text.replace(/\[\[toc\]\]/g, "").replace(/\r?\n/g, "");
  };

  eleventyConfig.addCollection("algolia", (collection) => {
    return collection.getFilteredByTags("blog").map((item) => {
      const body = bodyText(item.template.frontMatter.content);
      return {
        id: item.fileSlug,
        objectID: item.fileSlug,
        body: body,
        title: item.data.title,
        createdAt: format(item.date, "yyyy-MM-dd"),
      };
    });
  });
  ...
};
```

今回ここで一番時間を使った気がする。`item.template.frontMatter.content`に記事のmarkdownが格納されているので、こいつをいい感じに整形して本文として使った。（多分このプロパティは参照されることを想定していない気がする。）

`objectID`はAlgoliaが記事を識別するのに参照する値なので必須。これをJSON出力時にセットしておかないとデータの更新ができなくなってしまう。

次にここで定義した`algolia`CollectionをJSONファイルに出力する。`algolia.njk`を用意して次のように書く。（`\`がないとデータが展開されちゃうので実際に書くときは省略してね。）

```html
---
permalink: index.json
eleventyExcludeFromCollections: true
---
{\{ collections.algolia | dump | safe }\}
```

これで記事情報をJSON出力できた。

### API経由で登録

続いてAlgoliaのAPIをたたいてデータを登録する。これは11tyのbuild処理外でやるので別途ファイルを用意する。

```js
const algoliasearch = require('algoliasearch');
const data = require('../_site/index.json');

const key = process.env.ALGOLIA_API_KEY
const client = algoliasearch('YOUR_PROJECT_ID', key);
const index = client.initIndex('YOUR_INDICES_NAME');

index.saveObjects(data, {
  autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
  console.log(objectIDs);
});
```

## 検索UI実装

記事データを登録できたので検索UIを実装する。UI実装にはAlgoliaが提供している[Instant Search](https://www.algolia.com/products/instantsearch/)というプロダクトを利用する。ReactやVue.js、Angularなどは公式UIライブラリが提供されているらしい。今回は特にフレームワークを利用していないので`InstantSearch.js`を使って実装していく。

Algoliaのプロダクトはどれもドキュメントがすごく充実しているので、僕が書くことは特になにもない。ドキュメントを読めば大丈夫。
https://www.algolia.com/doc/guides/building-search-ui/getting-started/js/

### 本文を抜粋する

本文は全文表示されると長すぎるので、検索キーワード周辺を抜粋して表示したい。下記のように設定を追加すると、指定文字数で抜粋された本文が`hit._snippetResult`に格納されるのでそれを表示する。`["body:40"]`の`body`は本文のプロパティ名。

```js
instantsearch.widgets.configure({
  attributesToSnippet: ["body:40"],
}),
```

### index.js

```js
const search = instantsearch({
  indexName: "blog",
  searchClient: algoliasearch("T3J60MBUA8", "8f49853dd7e9830263fdea7ff69497ee"),
});

const { configure, searchBox, poweredBy, hits, pagination } = instantsearch.widgets

search.addWidgets([
  configure({
    attributesToSnippet: ["body:40"],
    snippetEllipsisText: "[…]",
  }),
  searchBox({
    container: "#searchbox",
    placeholder: "Search posts",
    autofocus: true,
  }),
  poweredBy({
    container: "#poweredby",
  }),
  hits({
    container: "#hits",
    templates: {
      item(hit) {
        return `
        <a class="takanorip-hitLink" href="/blog/${hit.id}">
          <p class="takanorip-hitName">${hit._highlightResult.title.value}</p>
          <p class="takanorip-hitExcerpt">${hit._snippetResult.body.value}</p>
        </a>
        `;
      },
    },
  }),
  pagination({
    container: "#pagination",
  }),
]);

search.start();
```

テンプレートはhandlebarsのように書くこともできるみたいだけど、僕は関数で書いたほうがわかりやすいと思った。

## 感想

けっこうサクッと実装できたので満足。