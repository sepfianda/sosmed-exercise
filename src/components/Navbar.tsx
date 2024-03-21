import { Button } from "@/components/ui/button"


const Navbar : React.FC = () => {
  return (
    <nav className="bg-primary">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
                <h1 className="text-3xl font-bold cursor-pointer text-white">SOSMED</h1>
                <div className="flex gap-4">
                <Button>Login</Button>
                <Button>Register</Button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar