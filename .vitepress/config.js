module.exports = {
  // 网页中的rem=实际像素*0.0625
  title: "ONE PIECE",
  description: "ONE PIECE",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/favicon.ico",
      },
    ],
  ],
  themeConfig: {
    logo: "/assets/favicon.ico",
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    smoothScroll: true,
  },
};
