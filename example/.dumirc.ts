import { defineConfig } from 'dumi';
import { SiteThemeConfig } from 'dumi-theme-lobehub';
import { resolve } from 'node:path';

import { description } from '../package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig: SiteThemeConfig = {
  // actions: [
  //   {
  //     link: '/documents/tech',
  //     text: '技术支撑',
  //   },
  //   {
  //     link: '/download',
  //     text: '立即下载',
  //     type: 'primary',
  //   },
  // ],
  analytics: {
    plausible: {
      domain: 'dumi-theme.lobehub.com',
      scriptBaseUrl: 'https://plausible.lobehub-inc.cn',
    },
  },
  // apiHeader: {
  //   docUrl: `{github}/tree/master/src/{atomId}/index.md`,
  //   match: ['/components'],
  //   pkg: name,
  //   sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  // },
  description,
  logo: 'https://img2.quotawish.com/2025/01/30/679b1932e7dfe.png',
  name: 'LeavesWord',
  prefersColor: {
    default: 'light',
    switch: true,
  },
  title: 'LeavesWord',
};

export default defineConfig({
  alias: {
    '@': resolve(__dirname, '../src'),
    'dumi-theme-lobehub': resolve(__dirname, '../src'),
  },
  base: '/',
  define: {
    'process.env': process.env,
  },
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: ['https://img2.quotawish.com/2025/01/30/679b19334f760.ico'],
  locales: [
    { id: 'en-US', name: 'EN' },
    { id: 'zh-CN', name: '简体中文' },
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  ssr: /* isProduction ? {} :  */false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'LeavesWord',
});
