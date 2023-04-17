import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
  }
  
function DefaultLayout({children} :LayoutProps){
    return (
        <>
            {children}
        </>
    )
}

export {DefaultLayout}