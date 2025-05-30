import { Route, Routes } from "react-router-dom";
import React from "react";
import SuspenseWraper from "./components/utils/suspanse-wraper.tsx";
import AppLayout from "./layout/app-layout.tsx";

const LazyLandingPage = React.lazy(() => import("./pages/lnading"));
const AuthLayout = React.lazy(() => import("@/layout/auth-layout"));
const LoginPage = React.lazy(() => import("@/pages/login"));
const RegisterPage = React.lazy(() => import("@/pages/register"));
const Onboard = React.lazy(() => import("@/pages/onboard"));
const Dashboard = React.lazy(() => import("@/pages/dashboard"));


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SuspenseWraper>
                <div className="w-full overflow-hidden">
                    <LazyLandingPage />
                </div>
            </SuspenseWraper>} />
            <Route path="/auth" element={<SuspenseWraper><AuthLayout /></SuspenseWraper>} >
                <Route path="login" element={<SuspenseWraper><LoginPage /></SuspenseWraper>} />
                <Route path="register" element={<SuspenseWraper><RegisterPage /></SuspenseWraper>} />
            </Route>
            <Route path="/app" element={<SuspenseWraper><AuthLayout /></SuspenseWraper>} >
                <Route path="/app/onboard" element={<SuspenseWraper><Onboard /></SuspenseWraper>} />
            </Route>
            <Route path="/app" element={<SuspenseWraper><AppLayout /></SuspenseWraper>} >
                <Route index element={<SuspenseWraper><Dashboard /></SuspenseWraper>} />
            </Route>

            <Route path="*" element={<div>404</div>} />
        </Routes >
    )
}

export default AppRoutes;

//