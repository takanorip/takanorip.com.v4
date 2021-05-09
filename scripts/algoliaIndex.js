const algoliasearch = require('algoliasearch');
const contactsJSON = require('../_site/index.json');

const key = process.env.ALGOLIA_API_KEY
const client = algoliasearch('T3J60MBUA8', key);
const index = client.initIndex('blog');

index.saveObjects(contactsJSON, {
  autoGenerateObjectIDIfNotExist: true
}).then(({ objectIDs }) => {
  console.log(objectIDs);
});