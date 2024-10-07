import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Public_Sans } from "next/font/google";
import Head from "next/head";

import { api } from "@/utils/api";

import "@/styles/globals.css";

const inter = Public_Sans({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WGQXFB6P');`}
        </script>
      </Head>
      <body>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGQXFB6P"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <SessionProvider session={session}>
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </SessionProvider>
      </body>
    </>
  );
};

export default api.withTRPC(MyApp);
