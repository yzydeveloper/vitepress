

import { readdirSync } from "fs";
import { resolve, join } from "path";

function tran(path) {
    const res = path.replace(/\\/g, "/").split("public")
    return res[res.length - 1]
}
function getPublicFile(root = resolve(__dirname, "./public")) {
    let files = {}
    function fn(root) {
        const dirents = readdirSync(root, { withFileTypes: true });
        dirents.forEach((contents) => {
            let child = join(root, contents.name);
            if (contents.isDirectory()) {
                fn(child);
            } else {
                const rootKey = tran(root)
                const childKey = tran(child)
                files[rootKey] = files[rootKey] ? files[rootKey].concat(childKey) : [childKey]
            }
        });
    }
    fn(root)
    return files
}
/**
 * Plugin
 * Provide all static resources under the current route
 */
const vitePublicFiles = (options = {}) => {
    const virtualFileId = "vite-public-files";
    // const { path } = options;
    let files = getPublicFile()
    return {
        name: "vite-plugin-public-files",
        resolveId(id) {
            if (id === virtualFileId) {
                returnvirtualFileId;
            }
        },
        load(id) {
            if (id === virtualFileId) {
                return `export const files = ${JSON.stringify(files)}`;
            }
        },
        //atch static resource files,
        //And use the updated message to issue a custom event
        handleHotUpdate({ file, server }) {
            console.log(file)
            files = getPublicFile();
            server.ws.send({
                type: "custom",
                event: "public-update",
                data: files,
            });
        },
    };
};
export default vitePublicFiles;
