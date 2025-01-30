import { FooterColumn } from 'rc-footer/es/column';

import EN from './EN'
import zhCN from './zh-CN';

const mapper: Record<'EN' | 'zh-CN', FooterColumn[]> = {
  "EN": EN,
  'zh-CN': zhCN
}

export const getColumns = (locale: 'EN' | 'zh-CN') => {
  return mapper[locale] ?? mapper['EN'];
};
