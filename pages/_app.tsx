import React from 'react';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import '../src/style.css';
import Head from 'next/head'

export default function MyApp(props: AppProps) {
  const {Component, pageProps} = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
  <React.Fragment>
    <Head>
      <title>EmojiTalkie: The anonymous voice chat community</title>
    </Head>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  </React.Fragment>
  );
}
