---
title: "UIの色設計に役立った記事・ツールまとめ"
date: 2020-07-03
tags:
  - design
  - color scheme
layout: layouts/blog.njk
---

[[toc]]

最近仕事でColor Schema Designをする機会があった。全くの未経験分野だったので様々な記事やツールを参考にしたので、その中でも特に役立ったなと思うものを紹介しようと思う。

## 記事

### The color system - Material Design

https://material.io/design/color/the-color-system.html

言わずと知れたMaterial Designのドキュメント。色の組み合わせ方や選び方などの理論に加えて色の組み合わせ例もたくさんあってとても参考になる。これは必読。`Tools for picking colors`が便利。全体的に有益な情報しか書いてないが、他にも[Applying color to UI](https://material.io/design/color/applying-color-to-ui.html)や[Text legibility](https://material.io/design/color/text-legibility.html)のページも読んどくと良さそう。

### Color in Design Systems - EightShapes

https://eightshapes.com/articles/color-in-design-systems.html

グラフィックデザイナーではない人がカラーパレットを構築するための記事。16項目に項目にわたってかなり丁寧に解説されていて、あまり詳しくない人が躓きそうなポイントが網羅されてる感がある。Accessibilityについても丁寧に書かれているのでグッド。これ読めばだいたいいける気がする。

### Creating A Design System: Building a Color Palette - UXPin

https://www.uxpin.com/create-design-system-guide/build-color-palette-for-design-system

カラーパレット作成の手順をチェックリスト形式で分かりやすく紹介してくれている記事。100%この手順通りにしなくても良いと思うけど、初めてやる人にとっては良い道標になりそう。先に紹介した`Color in Design Systems`と一緒に読むと良さそう。

## ツール

### Deep learning color generator - Eva Design System

https://colors.eva.design/

Brand ColorからSemantic Colorを自動生成してくれるやつ。僕はこれを使って大体の色を決めた後、コントラスト比とかみながら微調整したりした。かなり便利。

### COLOR TOOL - Material Design

https://material.io/resources/color/

### Color Designer

https://colordesigner.io/

## その他面白かった記事

### Re-approaching Color

https://design.lyft.com/re-approaching-color-9e604ba22c88

カラーセットを決める際のネーミングやどういうアルゴリズムに従うと良いかとその実践について書かれている。色を3次元的に捉えた図がとても新鮮だった。（僕はこういう考え方をしたことがなかった。）

> In interfaces, we don’t need an even distribution of light and dark shades. We need pockets of concentration in light and dark shades with only a few middle shades. We also need to have more control in how colors progress in hue and saturation.

この部分「たしかにーーー」と思った。

### Designing accessible color systems - stripe

https://stripe.com/blog/accessible-color-systems

アクセシブルなカラーシステムをどうやって構築するかという記事。色空間について解説されてて非常に為になった。この記事で紹介されてるツールを是非公開してほしい…。