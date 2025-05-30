import { Spotlight } from "@/components/ui/spotlight-new"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div className="w-full relative overflow-hidden flex flex-col h-full  p-20 gap-10 items-center">
            <Spotlight />

            <div className="flex items-center gap-2">
                <h1 className="text-4xl font-bold md:text-6xl">Qwikish</h1>
            </div>
            <Outlet />
        </div>
    )
}

export default AuthLayout

//