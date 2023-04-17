import { AdminAppContext } from "@admin/components/context/AppContext"
import { Typography } from "@mui/material"
import clsx from "clsx"
import { observer } from "mobx-react"
import { useContext } from "react"
import NavigationState from "../sidebar/logic/State"


interface NavTitleProps {
    state:NavigationState
}

export default function Navbar() {

    const className = clsx([
        'flex-row p-4 flex-start justify-between bg-blue-500 text-white',
        'w-full h-16 ',
    ])

    const { navState } = useContext(AdminAppContext)

    const NavTitle = observer((navProps: NavTitleProps) => {
        const panel = navProps.state.getCurrentPanel()
        return <Typography variant="h5">{panel.name.value}</Typography>
    })

    return (
        <nav className={className}>
            <NavTitle state={navState} />
        </nav>
    )
}