
import { Button } from './button'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { NavLink } from 'react-router'

function Oauth2buttons() {
  return (
    <div className='flex flex-col gap-3'>
              {/* Google Login */}
      <NavLink to={"http://localhost:8083/oauth2/authorization/google"}>
        
        <Button
        type="button"
        variant="outline"
        className="w-full h-10 transition-all hover:scale-[1.02] cursor-pointer"
      >
        <FaGoogle className="mr-3 text-red-500" />
        Continue with Google
      </Button>
        
        </NavLink>        
      

      {/* GitHub Login */}

      <NavLink  to="http://localhost:8083/oauth2/authorization/github">

        <Button
        type="button"
        variant="outline"
        className="w-full h-10 transition-all hover:scale-[1.02] cursor-pointer"
      >
        <FaGithub className="mr-3 text-lg" />
        Continue with GitHub
      </Button>



      </NavLink>
      
    </div>
  )
}

export default Oauth2buttons