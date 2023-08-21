import { ThemeProvider } from "@emotion/react";
import { Navbar } from "@storefront/components/Navbar";
import { ReactNode } from "react";
import { theme } from "./StoreTheme";

interface LayoutProps {
    children: ReactNode;
}

function StoreLayout({ children }: LayoutProps) {
    return (

        <ThemeProvider theme={theme}>
            <Navbar />
            {children}

        </ThemeProvider>

    )
}

export { StoreLayout }