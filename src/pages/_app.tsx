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
      <SessionProvider session={session}>
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
