import comp from "/home/aso/my-vuepress-site/docs/.vuepress/.temp/pages/projects/insightboard.html.vue"
const data = JSON.parse("{\"path\":\"/projects/insightboard.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"description\":\" \"},\"headers\":[],\"git\":{\"contributors\":[{\"name\":\"Aso A. Sdiq\",\"username\":\"\",\"email\":\"aso.sargaty@gmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"e83d4138336e06b33e4b14466e773d499e7c4d14\",\"time\":1759701854000,\"email\":\"aso.sargaty@gmail.com\",\"author\":\"Aso A. Sdiq\",\"message\":\"project url bug fix\"},{\"hash\":\"aa4f48485ed510867b18b7e7ac9137811aa78824\",\"time\":1759699404000,\"email\":\"aso.sargaty@gmail.com\",\"author\":\"Aso A. Sdiq\",\"message\":\"first commit\"}]},\"filePathRelative\":\"projects/insightboard.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
