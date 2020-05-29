module.exports = {
  theme: require.resolve("../../theme"),
  title: "Tulip-scroll",
  description: "A lightweight scroll for Vue project.",
  base: process.env.NODE_ENV === "production" ? "/scroll-docs/" : "/",
  // head: [["link", { rel: "icon", href: "/assets/logo.png" }]],
  
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "最后更新时间",
    repo: "https://github.com/artiely/tulip-scroll",
    editLinks: false
  },
  head: [
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    // ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
  ],
  plugins: ["copy-code"],
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-vuese'), { /* options */ })
    }
  }
};
