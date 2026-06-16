import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  documentationSidebar: [
    'quickstart',
    'helm-install',
    'discord',
    'deployment-guide',
    'grafana',
  {
  type: 'category',
    label: 'Helpdesk API',
    link: {
      type: 'generated-index',
      title: 'Helpdesk API',
      description: 'Docs for our Helpdesk endpoints Guide',
      slug: '/category/helpdesk-api',
    },
    items: require('./docs/openapi/sidebar.js'), 
    },
    ],
};

export default sidebars;
