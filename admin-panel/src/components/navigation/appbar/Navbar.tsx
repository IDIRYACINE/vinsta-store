import clsx from "clsx"

export default function Navbar(){
    const className = clsx([
        'flex-row p-4  flex-start justify-between bg-blue-500 text-white',
        'w-full h-16 ',
    ])

    return (
        <>
            <nav className={className}>
                <h1>Dashboard</h1>
            </nav>
        </>
    )
}