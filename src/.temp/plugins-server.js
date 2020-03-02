import plugin_gridsome_vue_remark_5 from "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/node_modules/@gridsome/vue-remark/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_vue_remark_5,
    options: {"typeName":"Documentation","baseDir":"./docs","pathPrefix":"/docs","template":"./src/templates/Documentation.vue","plugins":[["gridsome-plugin-remark-shiki",{"theme":"Material-Theme-Palenight","skipInline":true}]],"index":["index"],"includePaths":[],"remark":{"plugins":[["gridsome-plugin-remark-shiki",{"theme":"Material-Theme-Palenight","skipInline":true}]],"externalLinksTarget":"_blank","externalLinksRel":["nofollow","noopener","noreferrer"],"anchorClassName":"icon icon-link"},"refs":{}}
  }
]
