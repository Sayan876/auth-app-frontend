import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "../components/ui/separator";
import { motion } from "framer-motion";

import { CheckCircle2Icon, Mail} from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { Eye, EyeOff, Lock } from "lucide-react";
import { useState, type FormEvent } from "react";
import { NavLink, useNavigate } from "react-router";
import type LoginData from "@/models/LoginData";
import toast from "react-hot-toast";
import { loginUser } from "@/services/AuthService";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import useAuth from "@/auth/store";
import Oauth2buttons from "@/components/ui/Oauth2buttons";



const Login = () => {

  const navigate = useNavigate();

  const [loginData,setLoginData]=useState<LoginData>({
    email:'',
    password:''
  })

  const [loading,setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const login = useAuth((state) => state.login)

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=>{

    setLoginData({
      ...loginData,
      [event.target.name]:event.target.value
    })

  }

  const handleFormSubmit = async (event:FormEvent) =>{
    event.preventDefault();
    
    if(loginData.email.trim()===""){
      toast.error("input required");
      return;
    }

    if(loginData.password.trim()===""){
      toast.error("input required");
      return;
    }

    // console.log(event.target);
    // console.log(loginData)

    //server call
    
    try {
      setLoading(true)
      //const userInfo = await loginUser(loginData);
      // login system from useAuth

       await login(loginData);
      toast.success("Login Successful");
      // console.log(userInfo)
      navigate("/dashboard")
    } catch (error:any) {
      console.log(error);
      
      //toast.error("Wrong credentials!")
      if(error?.status==400){
        setError(error)
      }else{
        setError(error)
      }
    }finally{
      setLoading(false)
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  return (
    <motion.main initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }} className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-violet-500/20 blur-[140px]" />

      </div>

      <Card className="w-full max-w-sm border bg-background/70 backdrop-blur-xl shadow-2xl">
  <CardContent className="p-6">
    <div className="mb-5 text-center">
      <h1 className="text-3xl font-bold tracking-tight">
        Welcome Back
      </h1>
    </div>

    {error && (
      <div className="mb-4">
        <Alert variant="destructive">
          <CheckCircle2Icon className="h-4 w-4" />
          <AlertTitle>
            {error?.response
              ? error?.response?.data?.message
              : "Network Error"}
          </AlertTitle>
        </Alert>
      </div>
    )}

    <form onSubmit={handleFormSubmit} className="space-y-4">
      {/* Email */}
      <div className="space-y-2">
        <Label>Email</Label>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="pl-10 h-10"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-2">
        <Label>Password</Label>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10 pr-10 h-10"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Login Button */}
      <Button
        disabled={loading}
        type="submit"
        className="w-full h-10 cursor-pointer"
      >
        {loading ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Please wait
          </>
        ) : (
          "Login"
        )}
      </Button>

      {/* Divider */}
      <div className="relative py-1">
        <Separator />

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-muted-foreground">
          OR
        </span>
      </div>

      <Oauth2buttons/>



      {/* Footer */}
      <div className="flex items-center justify-between text-sm">
        <button
          type="button"
          className="text-primary hover:underline cursor-pointer"
        >
          Forgot Password?
        </button>
      </div>

      <div className="pt-2 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <NavLink
          to="/signup"
          className="font-medium text-primary hover:underline"
        >
          Create Account
        </NavLink>
      </div>
    </form>
  </CardContent>
</Card>

    </motion.main>
  );
};

export default Login;