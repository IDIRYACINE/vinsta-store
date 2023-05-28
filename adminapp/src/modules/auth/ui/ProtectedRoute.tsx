import { observer } from "mobx-react";
import { ReactNode } from "react";
import { AuthContext } from "../logic/AuthContext";
import AuthState from "../state/AuthState";
import LoginForm from "./LoginForm";

type ProtectedRouteProps = {
    component: ReactNode;
};

type ViewProps = {
    state: AuthState;
}

export const getServerSideProps = async () => {
    const user = AuthContext.state.getUser();

    if ((!user) || (user.isAdmin.value !== true)) {
        return {
          redirect: {
            destination: '/adminlogin/',
            permanent: false,
          },
        };
      }

    return {
        props: {
           user,
           
        },
    };
}

function ProtectedRoute({ component }: ProtectedRouteProps) {

    const View = observer(({ state }: ViewProps) => {
        if (state.isLoggedIn()) {
            return <>{component}</>;
        } else {
            return <LoginForm />;
        }
    });

    return <View state={AuthContext.state} />;
}

export default ProtectedRoute