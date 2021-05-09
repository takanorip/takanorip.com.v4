---
title: Font Loading API の紹介
date: 2018-12-03T15:01:00.737Z
tags:
  - blog
layout: layouts/blog.njk
---

[[toc]]

![](https://cdn-images-1.medium.com/max/800/1*G-RrNppUi7a2aWGlkRliog.png)

これは[ウェブフォントアドベントカレンダー](https://adventar.org/calendars/2911) 4日目の記事です。

これを使えば、ウェブフォントの読み込みを JavaScript から制御することができます。

CSS の font-face を定義し操作すること、それらのロード状況を追跡すること、デフォルトの遅延読み込み動作をオーバーライドすることが可能です。

IE と Microsoft Edge 以外のブラウザで動作します。

[**Can I use... Support tables for HTML5, CSS3, etc**  
_"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile…_caniuse.com](https://caniuse.com/#feat=font-loading "https://caniuse.com/#feat=font-loading")[](https://caniuse.com/#feat=font-loading)

### 使い方

[https://gist.github.com/takanorip/2e895488820caff942fc83a555e9acc3](https://gist.github.com/takanorip/2e895488820caff942fc83a555e9acc3)

[https://codepen.io/takanorip/embed/preview/JezmVZ?height=600&slug-hash=JezmVZ&default-tabs=js,result&host=https://codepen.io](https://codepen.io/takanorip/embed/preview/JezmVZ?height=600&slug-hash=JezmVZ&default-tabs=js,result&host=https://codepen.io)

### 補足

Abobe Fonts はこの API の Polyfill である [webfontloader](https://github.com/typekit/webfontloader) を使用しています。

Google Fonts はユニコードサブセットをしており、ユニコードごとにダウンロードするフォントファイルが決まっています。  
そのため、この API を使用して制御することは難しいかもしれないです。

その他のウェブフォント配信サービスはダイナミックサブセッティングを採用しているので、この API や webfontloader を使用して制御するのは難しいと思います。  
サービスによっては制御用のAPIを公開しているのでそちらを利用するのが良いと思います。（例：Typesquare）

[**API References | TypeSquare**  
_URL tag options enable you to change actions during loading a web font by adding parameters to typesquare.js which is a…_typesquare.com](https://typesquare.com/service/api_reference "https://typesquare.com/service/api_reference")[](https://typesquare.com/service/api_reference)