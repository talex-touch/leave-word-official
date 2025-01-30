import { getRouteMetaById, useMatchedRoute } from 'dumi';
import type { IRouteMeta } from 'dumi/dist/client/theme-api/types';
import useSWR from 'swr';

import { useStoreApi } from '../../store/useSiteStore';

const EMPTY_META = {
  frontmatter: {},
  texts: [],
  toc: [],
} as any;

// https://github.com/umijs/dumi/pull/2165
export const useRouteMeta = () => {
  const storeApi = useStoreApi();
  const matched = useMatchedRoute();

  const merge = (meta: IRouteMeta = EMPTY_META) => {
    if (matched.meta) {
      for (const key of Object.keys(matched.meta)) {
        (meta as any)[key] ??= (matched.meta as any)[key];
      }
    }
    return meta;
  };

  useSWR(matched.id, getRouteMetaById, {
    fallback: EMPTY_META,
    onSuccess: (meta) => {
      storeApi.setState({ routeMeta: merge(meta) });
    },
  });
};
