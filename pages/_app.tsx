import React from 'react';
import type { AppProps } from 'next/app';
import "../styles/scss/headlines.scss";
import "../styles/scss/demo.scss";
import "../styles/scss/bootstrap.scss";
import "../styles/scss/style.scss";
import "../styles/scss/theme-type.scss";
import Layout from './layout/layout';
import Settings from './components/demo/settings';
import { useRouter } from 'next/router';
import { metaTitle } from '../typescript/data/metaTitle';
import { Provider } from 'react-redux';
import { getStore } from './redux/store';
import { SSRProvider } from 'react-bootstrap';
import PreLoader from './layout/loader';

const MyApp = ({ Component, pageProps }: AppProps, props: any) => {
  const [isShow, setIsShow] = React.useState(true);
  const router = useRouter();
  const title: string | null = React.useMemo(() => {
    const url = router.pathname.split("/");
    if (url.length > 1) {
      return metaTitle[url[1]]
    }
    return null
  }, [router])
  return (
    <SSRProvider>
      <Provider store={getStore()}>
        <Layout props={{ title }}>
          <>
            {isShow ? <PreLoader setIsShow={setIsShow} /> : <></>}
            <Component {...pageProps} />
            <Settings />
          </>
        </Layout>
      </Provider>
    </SSRProvider>
  )
}

export default MyApp
