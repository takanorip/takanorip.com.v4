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
