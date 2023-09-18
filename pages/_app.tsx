import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { usePathname, } from 'next/navigation';
import { AdminLayout } from '@adminapp/components/context/AdminLayout';
import { StoreLayout } from '@storefront/context/StoreLayout';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Head from 'next/head'
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '@vinstacore/store/store';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

    const pathname = usePathname();
    const isAdminPath = pathname?.includes('admin') ?? false;

    const Layout = isAdminPath ? AdminLayout : StoreLayout;

    return (

        <Provider store={store}>

            <UserProvider>
                <Layout>
                    <div id="app-content">
                        <Head >
                            <title>Vinstaverse</title>

                            <meta property="og:title" content="Vinstaverse" key="title" />

                        </Head>
                        <Component {...pageProps} />
                    </div>
                </ Layout >

            </UserProvider>
        </Provider>


    )


}