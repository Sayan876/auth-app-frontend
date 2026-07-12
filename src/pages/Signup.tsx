import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { motion } from "framer-motion";

import { CheckCircle2Icon, Mail, User} from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";

import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { registerUser } from "@/services/AuthService";
import type RegisterData from "@/models/RegisterData";
import { useNavigate } from "react-router";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";


const Signup = () => {

    const [data, setData] = useState<RegisterData>({
    name: "",
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const [loading,setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null)

  const handleInputChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
     //console.log(event.target.name);
     //console.log(event.target.value);
     setData((value)=>({
      ...value,
      [event.target.name]:event.target.value,
     }))
  }

  const handleFormSubmit = async(event:React.FormEvent)=>{
    event.preventDefault();
    console.log(data);

    //validation

    if(data.name.trim()===""){
      toast.error("Name is required!")
      return;
    }

    if(data.email.trim()===""){
      toast.error("Email is required!")
      return;
    }

    if(data.password.trim()===""){
      toast.error("Password is required!")
      return;
    }

    try {

      setLoading(true)


      const result = await registerUser(data)
      console.log(result)
      toast.success("User Regestration Successfully")
      setData(
        {
          name: "",
          email:"",
          password:""
        }
      )
      navigate("/login")
      
    } catch (error:any) {
      console.log(error)
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
        Create Account
      </h1>
    </div>

    {error && (
      <div className="mb-4">
        <Alert variant="destructive">
          <CheckCircle2Icon className="h-4 w-4" />
          <AlertTitle>
            {error?.response
              ? error?.response?.data?.message
              : error?.message}
          </AlertTitle>
        </Alert>
      </div>
    )}

    <form onSubmit={handleFormSubmit} className="space-y-4">
      {/* Username */}
      <div className="space-y-2">
        <Label>Username</Label>

        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            type="text"
            placeholder="Your name"
            className="pl-10 h-10"
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label>Email</Label>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            type="email"
            placeholder="you@example.com"
            className="pl-10 h-10"
            name="email"
            value={data.email}
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
            value={data.password}
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

      {/* Sign Up Button */}
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
          "Sign Up"
        )}
      </Button>

      {/* Divider */}
      <div className="relative py-1">
        <Separator />

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-muted-foreground">
          OR
        </span>
      </div>

      {/* Google */}
      <Button
        type="button"
        variant="outline"
        className="w-full h-10 transition-all hover:scale-[1.02] cursor-pointer"
      >
        <FaGoogle className="mr-3 text-red-500" />
        Continue with Google
      </Button>

      {/* GitHub */}
      <Button
        type="button"
        variant="outline"
        className="w-full h-10 transition-all hover:scale-[1.02] cursor-pointer"
      >
        <FaGithub className="mr-3 text-lg" />
        Continue with GitHub
      </Button>
    </form>
  </CardContent>
</Card>

    </motion.main>
  );
};

export default Signup;