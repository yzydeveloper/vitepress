function setPath(path) {
  return `/docs/${path}/`
}
module.exports = [
  {
    text: "笔记记录",
    link: setPath('note'),
  },
  {
    text: "我的开源",
    link: setPath('open_source'),
  },
  {
    text: "杂货铺",
    link: setPath('grocery_store'),
  },
];
