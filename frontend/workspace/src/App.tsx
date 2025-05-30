import { Button } from "./components/ui/button"

const App = () => {
  return (
    <div className="w-full h-screen bg-background flex flex-col gap-2 justify-center items-center">

      <h1 className="text-4xl text-foreground font-bold">Welcome to Qwikish Workspace</h1>
      <Button>Click me</Button>
    </div>
  )
}

export default App
