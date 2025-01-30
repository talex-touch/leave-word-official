import { Icon } from '@lobehub/ui';
import { Link } from 'dumi';
import { Bug, FileClock, GitFork, Github } from 'lucide-react';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';

export const resources: FooterColumn = {
  items: [
    {
      description: 'Staged release progress',
      openExternal: true,
      title: 'Target progress',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'Features of different versions',
      openExternal: true,
      title: 'Version comparison',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'Browse technical design',
      openExternal: true,
      title: 'Feature overview',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'Explore life design',
      openExternal: true,
      title: 'Modern design',
      url: 'https://ai.quotawish.com',
    },
  ],
  title: 'Product',
};

export const community: FooterColumn = {
  items: [
    {
      icon: <Icon icon={Bug} size="small" />,
      openExternal: true,
      title: 'Report issues',
      url: `https://quotawish.com`,
    },
    {
      icon: <Icon icon={GitFork} size="small" />,
      openExternal: true,
      title: 'Feedback exchange',
      url: `https://quotawish.com`,
    },
  ].filter(Boolean) as FooterColumnItem[],
  title: 'Social',
};

export const help: FooterColumn = {
  items: [
    {
      icon: <Icon icon={Github} size="small" />,
      openExternal: true,
      title: 'GitHub',
      url: "https://quotawish.com",
    },
    {
      LinkComponent: Link,
      icon: <Icon icon={FileClock} size="small" />,
      title: 'Release notes',
      url: '/changelog',
    },
  ].filter(Boolean) as FooterColumnItem[],
  title: 'Help',
};

export const more: FooterColumn = {
  items: [
    {
      description: 'AI / LLM Mixed Chat',
      openExternal: true,
      title: 'ThisAI',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'AI / LLM Mixed Document',
      openExternal: true,
      title: 'Writer',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'AI / LLM Mixed APP',
      openExternal: true,
      title: 'Touch',
      url: 'https://ai.quotawish.com',
    },
    {
      description: 'AI / LLM Mixed Call',
      openExternal: true,
      title: 'QuotaCall',
      url: 'https://ai.quotawish.com',
    },
  ],
  title: 'More products',
};

export default [resources, community, help, more]