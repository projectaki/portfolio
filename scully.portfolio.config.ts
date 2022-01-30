import { ScullyConfig } from '@scullyio/scully';
const { DisableAngular } = require('scully-plugin-disable-angular');

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

const postRenderers = [DisableAngular];

export const config: ScullyConfig = {
  projectRoot: './src',
  defaultPostRenderers: postRenderers,
  projectName: 'portfolio',
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {},
};
