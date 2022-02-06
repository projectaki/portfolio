import { ScullyConfig } from '@scullyio/scully';
const { DisableAngular } = require('scully-plugin-disable-angular');
import { copyToClipboard } from '@scullyio/scully-plugin-copy-to-clipboard';
import { routesPlugin } from './scully/plugins/plugin';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

const postRenderers = [DisableAngular, copyToClipboard];

export const config: ScullyConfig = {
  projectRoot: './src',
  defaultPostRenderers: postRenderers,
  projectName: 'portfolio',
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    '/blogs/:blogId': {
      type: routesPlugin,
    },
  },
};
