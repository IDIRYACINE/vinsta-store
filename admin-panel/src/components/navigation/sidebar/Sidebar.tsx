import clsx from "clsx"
import SidebarButton from "./SidebarButton"

export default function Sidebar(){
    const className = clsx([
        'flex flex-col items-center justify-between p-4 bg-gray-200',
        'w-64 h-full '
    ])
    return (
        <>
            <aside className={className}>
                <SidebarButton text='test' iconClassName={""}></SidebarButton>
            </aside>
        </>
    )
}