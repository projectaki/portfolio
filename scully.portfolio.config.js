"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const { DisableAngular } = require('scully-plugin-disable-angular');
const scully_plugin_copy_to_clipboard_1 = require("@scullyio/scully-plugin-copy-to-clipboard");
const plugin_1 = require("./scully/plugins/plugin");
/** this loads the default render plugin, remove when switching to something else. */
require("@scullyio/scully-plugin-puppeteer");
const postRenderers = [DisableAngular, scully_plugin_copy_to_clipboard_1.copyToClipboard];
exports.config = {
    projectRoot: './src',
    defaultPostRenderers: postRenderers,
    projectName: 'portfolio',
    // add spsModulePath when using de Scully Platform Server,
    outDir: './dist/static',
    routes: {
        '/blogs/:blogId': {
            type: plugin_1.routesPlugin,
        },
    },
};
