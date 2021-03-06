import { ApolloProvider } from '@apollo/client';
import Router from 'next/router';
import NProgress from 'nprogress';
// import PageRedesign from '../components/PageRedesign';
import PropTypes from 'prop-types';
import withData from '../lib/withData';
import Page from '../components/Page';

Router.events.on('routerChangeStart', () => NProgress.start());
Router.events.on('routerChangeComplete', () => NProgress.done());
Router.events.on('routerChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  // console.log('apollo');
  return (
    <>
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    </>
  );
}
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
  apollo: PropTypes.any,
};
