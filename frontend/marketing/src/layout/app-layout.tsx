import AppSidebar from "@/components/app/sidebar"

import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <div className="w-full relative overflow-hidden flex  h-full  items-center">
            <div className="flex items-start gap-2 h-full">
                <AppSidebar />
            </div>
            <div className="flex-1 bg-sky-900 w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout