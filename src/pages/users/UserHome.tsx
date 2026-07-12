import { motion } from "framer-motion";
import {
  User,
  ShieldCheck,
  Bell,
  Activity,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "@/auth/store";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import type UserT from "@/models/User";
import { getCurrentUser } from "@/services/AuthService";

function UserHome() {

const user = useAuth((state) => state.user);
const [user1, setUser1] = useState<UserT | null>(null);

const getUserData = async () => {
  try {
    const user1 = await getCurrentUser(user?.email);

    setUser1(user1);
    toast.success("Success!You are able to hit protected APIs")
  } catch (error) {
    console.log(error);
    toast.error("error in getting data");
  }
};
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 50, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-100px] top-[-100px] h-96 w-96 rounded-full bg-primary/15 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 20, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-100px] bottom-[-100px] h-96 w-96 rounded-full bg-violet-500/15 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="overflow-hidden border bg-background/70 backdrop-blur-xl shadow-2xl">

            <CardContent className="flex flex-col items-center gap-6 py-14 text-center">

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 12,
                  delay: 0.2,
                }}
                whileHover={{
                  rotate: 8,
                  scale: 1.08,
                }}
                className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 shadow-lg"
              >
                <User className="h-11 w-11 text-primary" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                  Welcome Back 👋
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Authentication was successful! This is a beautiful placeholder
                  dashboard that demonstrates a protected route after login.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={getUserData} size="lg">
                  Get Current User
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p>{user1?.name}</p>
              </motion.div>

            </CardContent>

          </Card>
        </motion.div>

        {/* Feature Cards */}

        <section className="mt-10 grid gap-6 md:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">

              <CardHeader>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>

                <CardTitle>Recent Activity</CardTitle>

                <CardDescription>
                  View your recent login history, account activity and
                  application usage.
                </CardDescription>

              </CardHeader>

            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">

              <CardHeader>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>

                <CardTitle>Security</CardTitle>

                <CardDescription>
                  Your account is secured using JWT authentication,
                  authorization and OAuth2 login.
                </CardDescription>

              </CardHeader>

            </Card>
          </motion.div>
                    <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <Card className="h-full transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>

                <CardTitle>Notifications</CardTitle>

                <CardDescription>
                  Stay informed with account updates, alerts and future
                  application notifications.
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        </section>

        {/* Information */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <Card className="border-dashed bg-background/70 backdrop-blur-xl shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                🚀 Dummy User Dashboard
              </CardTitle>

              <CardDescription>
                This page is only intended for demonstration purposes while
                developing the authentication system.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 text-muted-foreground">

              <motion.div
                whileHover={{ x: 8 }}
                className="rounded-lg border bg-primary/5 p-4"
              >
                ✅ User authentication completed successfully.
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="rounded-lg border bg-primary/5 p-4"
              >
                🔐 Protected routes are now accessible only after login.
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="rounded-lg border bg-primary/5 p-4"
              >
                🌐 OAuth2, JWT Authentication and Role-Based Authorization are
                ready for integration.
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="rounded-lg border bg-primary/5 p-4"
              >
                💡 Replace this page later with your actual dashboard,
                analytics, profile management and settings.
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 border-t pt-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Built with ❤️ using React, Spring Boot, Tailwind CSS and shadcn/ui
          </p>
        </motion.footer>

      </div>
    </main>
  );
}

export default UserHome;