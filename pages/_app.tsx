import type { AppProps } from "next/app";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

import { Layout } from "components/layout/index";
import "styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import client from "graphql/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Script
        id="crisp"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="${process.env.CRISP_WEBSITE_ID}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ApolloProvider>
  );
}

export default MyApp;
