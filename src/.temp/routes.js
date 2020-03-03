export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/src/templates/Tag.vue")
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--vue-components-in-markdown-md" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/docs/vue-components-in-markdown.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/src/pages/Blog.vue")
  },
  {
    path: "/introduction-to-gridsome/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/src/templates/Post.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/src/pages/Docs.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/admin/Desktop/GitHub-Repositories/mercerbe.github.io/src/pages/404.vue")
  }
]

