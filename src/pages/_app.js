import { useEffect } from 'react';
import Router from 'next/router';

import { ApolloProvider } from "@apollo/client";
import { apolloSystemClient } from "lib/apolloClients";

import { ThemeProvider } from 'theme-ui';
import { ChakraProvider } from "@chakra-ui/react"
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';

import { initGA, logPageView } from 'analytics';

import 'react-multi-carousel/lib/styles.css';
// import 'react-modal-video/css/modal-video.min.css';
import 'react-table-v6/react-table.css'
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <ApolloProvider client={apolloSystemClient}>
      <ThemeProvider theme={theme}>
        <StickyProvider>
          <Layout>
            <ChakraProvider>
              <Component {...pageProps} />
            </ChakraProvider>
          </Layout>
        </StickyProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
