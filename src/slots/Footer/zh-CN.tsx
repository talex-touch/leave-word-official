import { Icon } from '@lobehub/ui';
import { Link } from 'dumi';
import { Bug, FileClock, GitFork, Github } from 'lucide-react';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';

export const resources: FooterColumn = {
  items: [
    {
      description: '阶段性发版进度',
      openExternal: true,
      title: '目标进展',
      url: 'https://ai.quotawish.com',
    },
    {
      description: '不同版本特性',
      openExternal: true,
      title: '版本对比',
      url: 'https://ai.quotawish.com',
    },
    {
      description: '浏览技术设计',
      openExternal: true,
      title: '特性总览',
      url: 'https://ai.quotawish.com',
    },
    {
      description: '探索生命设计',
      openExternal: true,
      title: '现代设计',
      url: 'https://ai.quotawish.com',
    },
  ],
  title: '产品',
};

export const community: FooterColumn = {
  items: [
    {
      icon: <Icon icon={ Bug } size = "small" />,
    openExternal: true,
    title: '报告问题',
    url: `https://quotawish.com`,
    },
  {
    icon: <Icon icon={ GitFork } size = "small" />,
      openExternal: true,
        title: '反馈交流',
          url: `https://quotawish.com`,
    },
  ].filter(Boolean) as FooterColumnItem[],
  title: '社交',
};

export const help: FooterColumn = {
  items: [
    {
      icon: <Icon icon={ Github } size = "small" />,
    openExternal: true,
    title: 'GitHub',
    url: "https://quotawish.com",
    },
  {
    LinkComponent: Link,
    icon: <Icon icon={ FileClock } size = "small" />,
      title: '发版记录',
        url: '/changelog',
    },
  ].filter(Boolean) as FooterColumnItem[],
  title: '帮助',
};

export const more: FooterColumn = {
  items: [
    {
      description: 'AI / LLM Mixed Chat',
      openExternal: true,
      title: '科塔智爱',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'AI / LLM Mixed Document',
      openExternal: true,
      title: '科塔惠编',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'AI / LLM Mixed APP',
      openExternal: true,
      title: '科塔锐意',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'AI / LLM Mixed Call',
      openExternal: true,
      title: '科塔飞讯',
      url: 'https://ai.quotawish.com',
    },
  ],
  title: '更多产品',
};

export default [resources, community, help, more]