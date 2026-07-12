import useAuth from "@/auth/store";
import { Button } from "./button";
import { Card } from "./card"
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {

    const checkLogin = useAuth((state)=>state.checkLogin)
    const user = useAuth((state)=>state.user)
    const logout = useAuth((state)=>state.logout)
    const navigate = useNavigate(); 

  return (
    <nav className="sticky top-0 z-50 py-5 dark:border-b border-gray-600 md:py-0 flex md:flex-row flex-col gap-4 md:gap-0 md:h-14 justify-around items-center dark:bg-gray-900">
        {/* Brand*/}
        <div className="font-semibold items-center flex gap-2">
            <span className="inline-block h-6 w-6 text-center rounded-md bg-gradient-to-r from-primary to-primary/40">{"A"}</span>
            <span className="text-base tracking-tight">Auth App</span>
        </div>

        <div className="flex gap-2 items-center">
            {checkLogin()?<>
              <NavLink to="/dashboard/profile">{user?.name}</NavLink>
            

                <Button size="sm" onClick={()=>{logout();navigate("/")}} className={"cursor-pointer"} variant="outline">Logout</Button>

            
            
            
            
            </>:<>
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">

                <Button size="sm" className={"cursor-pointer"} variant="outline">Login</Button>

            </NavLink>
            
            <NavLink to="/signup">
                <Button size="sm" className={"cursor-pointer"} variant="outline">Register</Button>
            </NavLink>
            </>}
        </div>
    </nav>
  )
}

export default Navbar