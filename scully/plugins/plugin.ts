/* eslint-disable @typescript-eslint/no-unused-vars */
import blogMappings from './../../src/blog/blog-mappings.json';

import { registerPlugin, getPluginConfig, HandledRoute } from '@scullyio/scully';

export const myPlugin = 'myPlugin';
export const routesPlugin = 'routesPlugin';

const myFunctionPlugin = async (html: string): Promise<string> => {
  return html;
};

const validator = async () => [];

registerPlugin('postProcessByHtml', myPlugin, myFunctionPlugin, validator);

function blogIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {
  return Promise.resolve(createRoutes());
}

function createRoutes() {
  return blogMappings.map(x => ({ route: `/blogs/${x.id}` }));
}

registerPlugin('router', routesPlugin, blogIdPlugin, validator);
