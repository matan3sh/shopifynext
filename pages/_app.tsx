import "@assets/main.css";
import { FC, PropsWithChildren } from "react";
import type { AppProps } from "next/app";
import { UIProvider } from "@components/ui/context";

const Noop: FC<PropsWithChildren> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<PropsWithChildren> } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
