import { Suspense } from "react"
import Loading from "./loading"

const SuspenseWraper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Suspense fallback={<Loading />}>

            {children}
        </Suspense>
    )
}

export default SuspenseWraper