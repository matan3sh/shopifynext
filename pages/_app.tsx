import "@assets/main.css";
import type { AppProps } from "next/app";
import { FC, PropsWithChildren } from "react";

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<PropsWithChildren> } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
