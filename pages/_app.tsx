import '../storeapp/styles/globals.css';
import { AdminLayout } from "@adminapp";
import type { AppProps } from "next/app";
import { DefaultLayout } from "@store";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface LayoutProps {
  children: ReactNode;
}

export default function App({ Component, pageProps, router }: AppProps) {
  const isUnderAdminRoute = router.pathname.startsWith("/admin");


  const Layout = ({ children }: LayoutProps) => {
    if (isUnderAdminRoute) {
      return (<SessionProvider session={pageProps.session}>
        <AdminLayout>{children}</AdminLayout></SessionProvider>)

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
