---
title: Apollo Client で SSR する
date: 2018-12-10T03:28:07.829Z
tags:
  - blog
layout: layouts/blog.njk
---

[[toc]]

![](https://cdn-images-1.medium.com/max/800/1*gbQLv0JIO_8MPeaBrxBHKw.png)

これは FOLIO Advent Calendar 2018 10日目の記事です。

[**FOLIO Advent Calendar 2018 - Adventar**  
_株式会社FOLIOのメンバーによるアドベントカレンダーです！ FOLIO Advent Calendar 2017: https://qiita.com/advent-calendar/2017/folio-sec…_adventar.org](https://adventar.org/calendars/3424 "https://adventar.org/calendars/3424")[](https://adventar.org/calendars/3424)

## Apollo Client

GraphQLサーバーと通信するためのクライアントサイドライブラリです。

[**Introduction | Apollo Client**  
_What is Apollo Client and what does it do?_www.apollographql.com](https://www.apollographql.com/docs/react/ "https://www.apollographql.com/docs/react/")[](https://www.apollographql.com/docs/react/)

GraphQLって何？って人は公式ドキュメントとかを読むと良いと思います。

[**GraphQL: A query language for APIs.**  
_GraphQL provides a complete description of the data in your API, gives clients the power to ask for exactly what they…_graphql.org](https://graphql.org/learn/ "https://graphql.org/learn/")[](https://graphql.org/learn/)

[**GraphQL入門 - 使いたくなるGraphQL - Qiita**  
_本記事は Livesense Advent Calendar 2016 - Qiita の24日目の記事になります。…_qiita.com](https://qiita.com/bananaumai/items/3eb77a67102f53e8a1ad "https://qiita.com/bananaumai/items/3eb77a67102f53e8a1ad")[](https://qiita.com/bananaumai/items/3eb77a67102f53e8a1ad)

ReactでApollo Client( [react-apollo](https://www.apollographql.com/docs/react/) )を使用すると次のように書けます。

[https://gist.github.com/takanorip/bb70f000929203be23dd961ad8890f5d](https://gist.github.com/takanorip/bb70f000929203be23dd961ad8890f5d)

## Server-side rendering with Apollo

Apollo Client を使用してSSR するにはサーバー側で次の2つの処理を行います。これはReduxを使用してSSRするときとおおよそ同じです。

-   サーバーサイドでAPIにアクセスしStoreを共有する
-   サーバーサイドでHTMLを生成する

## Store rehydration

サーバーサイドでクエリを実行できるアプリケーションの場合、データの初期状態を設定できます。

次のようなscriptタグを記述することでサーバー側で定義した初期状態をクライアントサイドで受け取ることができます。

[https://gist.github.com/takanorip/eaace8d840183b16bf02a3ff25c02336](https://gist.github.com/takanorip/eaace8d840183b16bf02a3ff25c02336)

それをInMemoryCacheに渡します。

[https://gist.github.com/takanorip/8400eccd4c3185c93049c5e85a1c84f7](https://gist.github.com/takanorip/8400eccd4c3185c93049c5e85a1c84f7)

クライアントサイドでUIがレンダリングされたときにはすでにデータがストアに格納されているため、即座にデータを表示することができます。

## Server-side rendering

**react-apollo** に組み込まれたレンダリング関数を使用して、アプリケーション全体をレンダリングします。これらの関数は、コンポーネントツリーをレンダリングするために必要なすべてのクエリを取得してくれます。通常はExpressなどのHTTPサーバー内でこれらの機能を使用します。

Apollo ClientでSSRする際は次の2つのことに注意する必要があります。

1.  各クエリの結果を一度だけ取得したいので、**ssrMode：true**オプションをApollo Clientコンストラクタに渡して **force-fetching** が繰り返されるのを避けます。
2.  複数のリクエストに対してリクエストごとに新しいクライアントまたはStoreインスタンスを作成する必要があります。  
    そうしないと古いデータが残ってしまい、認証に問題が発生する可能性があります。

[https://gist.github.com/takanorip/4db791390672accb5eb0770a22635334](https://gist.github.com/takanorip/4db791390672accb5eb0770a22635334)

## Rendering

**react-apollo** には2つのレンダリング関数が用意されています。

### getDataFromTree()

この関数はReactツリーをレンダリングするために必要なクエリを決定し、それらをすべて実行します。ネストされたクエリがある場合は、ツリー全体を再帰的に実行します。

この関数はPromiseを返し、データの取得とStoreの準備が完了したときにそのPromiseが解決されます。そしてPromise が解決される時に Store が完全に初期化されます。

[https://gist.github.com/takanorip/dc1a2cbc771c3a2ed617407ebb1eceac](https://gist.github.com/takanorip/dc1a2cbc771c3a2ed617407ebb1eceac)

この <Html> コンポーネントの中身は次のようになります。

[https://gist.github.com/takanorip/cceb5bf9c03a3452696a6300d7debed2](https://gist.github.com/takanorip/cceb5bf9c03a3452696a6300d7debed2)

### `renderToStringWithData()`

これは **getDataFromTree 関数**を単純化し、レンダリングする必要のあるコンテンツを文字列で返します。

[https://gist.github.com/takanorip/30d4bbf4f5f59b7b3fc45c72cbd13205](https://gist.github.com/takanorip/30d4bbf4f5f59b7b3fc45c72cbd13205)

### Skipping queries for SSR

SSR中に意図的にQueryをスキップしたい場合は、オプションに **ssr：false** を渡すことができます。

[https://gist.github.com/takanorip/533dad8e6ccf44e3c21aed86214a6283](https://gist.github.com/takanorip/533dad8e6ccf44e3c21aed86214a6283)

## おわりに

FOLIOでもBFFにGraphQLを採用するかどうか検討中なのですが、StoreのrehydrationがReduxよりも簡潔にかけるのは良いなと思いました。

このあたりは個人でも試していきたいです。

明日は [sion\_cojp](https://adventar.org/users/19752) さんの記事です。