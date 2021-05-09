const fs = require('fs');
const fsPromises = fs.promises;
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const fileName = argv.fileName
const title = argv.title
const date = argv.date
const tag = argv.tag

const template = `---
title: ${title}
date: ${date}
tags: [ blog, ${tag} ]
layout: layouts/blog.njk
---

[[toc]]

`

console.log(tag);

fsPromises.writeFile(`./src/blog/${fileName}.md`, template);