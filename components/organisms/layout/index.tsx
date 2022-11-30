import Footer from "@components/organisms/footer";
import NavbarMenu from "@components/organisms/navbarMenu";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  pageTitle?: string;
  navbar?: boolean;
  footer?: boolean;
  children: React.ReactNode;
};

function Layout({ navbar, children, footer, pageTitle }: Props) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle} | StoreGG</title>
      </Head>
      {navbar ? <NavbarMenu activePath={pathname} /> : null}
      {children}
      {footer ? <Footer /> : null}
    </>
  );
}

Layout.defaultProps = {
  pageTitle: "Loading...",
  navbar: true,
  footer: true,
};

export default Layout;