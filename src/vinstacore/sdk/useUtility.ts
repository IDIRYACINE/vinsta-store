import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"


export const useInPage = (pattern: string) => {
    const pathName = usePathname()

    const [isInProductPage, enableFilters] = useState(false)

    useEffect(() => {
        enableFilters(pathName?.includes(pattern) ?? false)

    }, [pathName, isInProductPage, pattern])

    return isInProductPage
}