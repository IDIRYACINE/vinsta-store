import "../styles/globals.css";
import { AdminLayout } from "admin-panel/src";
import type { AppProps } from "next/app";
import { DefaultLayout } from "@store";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function App({ Component, pageProps, router }: AppProps) {
  const isUnderAdminRoute = router.pathname.startsWith("/admin");

  
const Layout = ({ children }: LayoutProps) => {
  if (isUnderAdminRoute) {
    return <AdminLayout>{children}</AdminLayout>;
  } else {
    return <DefaultLayout>{children}</DefaultLayout>;
  }
}

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
