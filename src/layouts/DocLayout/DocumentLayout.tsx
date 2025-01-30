import { Layout, LayoutHeader, LayoutToc } from '@lobehub/ui';
import { createStyles, useResponsive, useTheme } from 'antd-style';
import { Helmet, useIntl, useLocation } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo, useCallback, useEffect, useMemo, type ReactNode } from 'react';

import Changelog from '@/pages/Changelog';
import Docs from '@/pages/Docs';
import Home from '@/pages/Home';
import Footer from '@/slots/Footer';
import Header from '@/slots/Header';
import Sidebar from '@/slots/Sidebar';
import Toc from '@/slots/Toc';
import { heroSelectors, siteSelectors, useSiteStore } from '@/store';

const useStyles = createStyles(({ css, stylish, token, responsive, prefixCls }) => {
  return {
    wholeHeader: css`
      & > section.acss-mxvocc {
        border-radius: 18px;
        backdrop-filter: blur(18px) saturate(180%);
        border: 1px solid rgba(250, 250, 250, 0.12);
      }
      position: sticky;
      margin: 0 auto;

      width: max-content;

      inset-block-start: 24px;

      div.layoutkit-flexbox {
        border: none;
        border-radius: 18px;
      }
    `,
  };
});

const DocumentLayout = memo(() => {
  const { styles } = useStyles();
  
  const intl = useIntl();
  const { hash } = useLocation();
  const theme = useTheme();
  const { mobile, laptop } = useResponsive();

  const { loading, page, siteTitle, noToc } = useSiteStore((s) => {
    const isChanlogPage = s.location.pathname === '/changelog';
    const isHomePage = heroSelectors.isHeroPage(s);
    let page;

    if (isHomePage) {
      page = 'home';
    } else if (isChanlogPage) {
      page = 'changelog';
    } else {
      page = 'docs';
    }

    return {
      loading: s.siteData.loading,
      noToc: siteSelectors.tocAnchorItem(s).length === 0,
      page: page,
      siteTitle: siteSelectors.siteTitle(s),
    };
  });

  const fm = useSiteStore((s) => s.routeMeta.frontmatter, isEqual);

  const hideSidebar = page !== 'docs' || mobile || fm.sidebar === false;
  const shouldHideToc = fm.toc === false || noToc;
  const hideToc = mobile ? shouldHideToc : !laptop || shouldHideToc;

  const HelmetBlock = useCallback(
    () => (
      <Helmet>
        <html lang={intl.locale.replace(/-.+$/, '')} />
        {fm.title && <meta content={fm.title} property="og:title" />}
        {fm.description && <meta content={fm.description} name="description" />}
        {fm.description && <meta content={fm.description} property="og:description" />}
        {fm.keywords && <meta content={fm.keywords.join(',')} name="keywords" />}
        {fm.keywords && <meta content={fm.keywords.join(',')} property="og:keywords" />}
        {!fm.title || page === 'home' ? (
          <title>{siteTitle}</title>
        ) : (
          <title>
            {fm.title} - {siteTitle}
          </title>
        )}
      </Helmet>
    ),
    [intl, fm, siteTitle, page],
  );

  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (!id) return;
    setTimeout(() => {
      const elm = document.querySelector(`#${decodeURIComponent(id)}`);
      if (elm) {
        elm.scrollIntoView();
        window?.scrollBy({ top: -80 });
      }
    }, 1);
  }, [loading, hash]);

  useEffect(() => {
    document.body.scrollTo(0, 0);
  }, [siteTitle]);

  const RenderHelmet = memo(({ toc }: { toc?: ReactNode }) => {
    if (mobile) {
      return (
        <LayoutHeader headerHeight={page === 'home' ? theme.headerHeight : theme.headerHeight + 36}>
          <Header />
          {toc && <LayoutToc>{toc}</LayoutToc>}
        </LayoutHeader>
      )
    }

    return (
      <LayoutHeader className={styles.wholeHeader} headerHeight={0}>
        <Header />
        {/* {toc && <LayoutToc>{toc}</LayoutToc>} */}
      </LayoutHeader>
    )
  })

  return (
    <>
      <HelmetBlock />
      <Layout
        asideWidth={theme.sidebarWidth}
        footer={<Footer />}
        helmet={<RenderHelmet toc={hideToc ? undefined : <Toc />} />}
        sidebar={hideSidebar ? undefined : <Sidebar />}
        toc={hideToc ? undefined : <Toc />}
        tocWidth={hideToc ? 0 : theme.tocWidth}
      >
        {page === 'home' && <Home />}
        {page === 'changelog' && <Changelog />}
        {page === 'docs' && <Docs />}
      </Layout>
    </>
  );
});

export default DocumentLayout;
