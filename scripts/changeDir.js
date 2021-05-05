const fs = require("fs-extra");
fs.removeSync("./dist");
fs.moveSync(".vitepress/dist", "./dist");
