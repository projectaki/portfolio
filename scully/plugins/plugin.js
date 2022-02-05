"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesPlugin = exports.myPlugin = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
const blog_mappings_json_1 = __importDefault(require("./../../src/blog/blog-mappings.json"));
const scully_1 = require("@scullyio/scully");
exports.myPlugin = 'myPlugin';
exports.routesPlugin = 'routesPlugin';
const myFunctionPlugin = async (html) => {
    return html;
};
const validator = async () => [];
(0, scully_1.registerPlugin)('postProcessByHtml', exports.myPlugin, myFunctionPlugin, validator);
function blogIdPlugin(route, config = {}) {
    return Promise.resolve(createRoutes());
}
function createRoutes() {
    return blog_mappings_json_1.default.map(x => ({ route: `/blogs/${x.id}` }));
}
(0, scully_1.registerPlugin)('router', exports.routesPlugin, blogIdPlugin, validator);
//# sourceMappingURL=plugin.js.map