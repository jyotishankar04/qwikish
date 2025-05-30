import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github } from "lucide-react"
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    return (
        <Card className="w-96 px-4 py-10 flex flex-col bg-background shadow dark:shadow-none gap-10">
            <CardHeader className="w-full flex flex-col gap-2 justify-center items-center">
                <CardTitle className="text-2xl">Secure Login</CardTitle>
                <CardDescription className="text-center text-md">
                    Authenticate quickly and securely
                </CardDescription>
            </CardHeader>
            <CardContent className="flex w-full flex-col justify-center items-center gap-6">
                <Button onClick={() => {
                    window.location.href = "http://localhost:5173/app/onboard"
                }} variant={"outline"} className="w-full hover:bg-foreground/5 py-2 text-md cursor-pointer" >
                    <span >
                        <FcGoogle className="h-6 w-6" />
                    </span>
                    Continue with Google
                </Button>
                <Button variant={"default"} className="w-full bg-foreground hover:bg-foreground/5 text-md cursor-pointer py-2 dark:bg-black" size={"lg"}>
                    <span>
                        <Github />
                    </span>
                    Continue with GitHub
                </Button>
            </CardContent>

        </Card>
    )
}

export default Login