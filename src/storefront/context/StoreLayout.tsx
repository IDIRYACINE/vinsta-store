import { ThemeProvider } from "@emotion/react";
import { Navbar } from "@storefront/components/Navbar";
import { store } from "@storefront/store";
import { ReactNode } from "react";
import { Provider } from 'react-redux';
import { theme } from "./StoreTheme";

interface LayoutProps {
    children: ReactNode;
}

function StoreLayout({ children }: LayoutProps) {
    return (

        <ThemeProvider theme={theme}>
            <Provider store={store}>
                    <Navbar />
                    {children}

            </Provider>
        </ThemeProvider>

    )
}

export { StoreLayout }