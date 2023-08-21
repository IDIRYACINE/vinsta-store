import clsx from "clsx"
import LoginForm from "./LoginForm"

function AdminLoginPage(): JSX.Element{
    const className = clsx([
        'flex flex-col justify-center items-center min-h-screen',
    ])

    return (
        <div className={className}>
            <LoginForm />
        </div>
    )
}




export {AdminLoginPage}