import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "@/styles/globals.css";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" });
const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={`${notoSans.variable} ${notoSansMono.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default MyApp;