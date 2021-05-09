const nodeHtmlToImage = require('node-html-to-image')
const fs = require('fs');

const dir = './_site/teasers'

fs.readdir(dir, { withFileTypes: true }, (err, dirents) => {
  if (err) throw err;
  dirents.forEach(({ name }, i) => {
    const fileType = name.split('.')[1]
    if (fileType !== 'html') return
    fs.readFile(`${dir}/${name}`, 'utf-8', async (err, data) => {
      if (err) throw err;
      await nodeHtmlToImage({
        output: `${dir}/${name.split('.')[0]}.png`,
        html: data,
        waitUntil: 'domcontentloaded',
        puppeteerArgs: {
          defaultViewport: {
            width: 800,
            height: 418
          }
        }
      })
      console.log(`${name.split('.')[0]}`)
    })
  })
});