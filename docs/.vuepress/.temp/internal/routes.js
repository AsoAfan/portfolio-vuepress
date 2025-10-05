export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"About"} }],
  ["/contact.html", { loader: () => import(/* webpackChunkName: "contact.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/contact.html.js"), meta: {"title":"Contact"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"John Doe - Developer Dashboard"} }],
  ["/stack.html", { loader: () => import(/* webpackChunkName: "stack.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/stack.html.js"), meta: {"title":"Tech Stack"} }],
  ["/projects/", { loader: () => import(/* webpackChunkName: "projects_index.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/projects/index.html.js"), meta: {"title":"Projects"} }],
  ["/projects/insightboard.html", { loader: () => import(/* webpackChunkName: "projects_insightboard.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/projects/insightboard.html.js"), meta: {"title":""} }],
  ["/projects/taskflow.html", { loader: () => import(/* webpackChunkName: "projects_taskflow.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/projects/taskflow.html.js"), meta: {"title":"TaskFlow - Project Details"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
