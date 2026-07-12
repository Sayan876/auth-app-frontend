import { motion } from "framer-motion";
import {
  User as UserIcon,
  Mail,
  Calendar,
  ShieldCheck,
  Edit,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import useAuth from "@/auth/store";

function UserProfile() {
  const { user } = useAuth();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">

      {/* Animated Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-primary/15 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -40, 20, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-violet-500/15 blur-3xl"
        />

      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden border bg-background/70 backdrop-blur-xl shadow-2xl">

            <CardContent className="flex flex-col items-center gap-6 py-10 md:flex-row">

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
              >
                <Avatar className="h-32 w-32 border-4 border-primary/20">

                  <AvatarImage src={user?.image} />

                  <AvatarFallback className="text-3xl">
                    {user?.name?.charAt(0).toUpperCase() ?? "U"}
                  </AvatarFallback>

                </Avatar>
              </motion.div>

              <div className="flex-1 text-center md:text-left">

                <h1 className="text-4xl font-bold">
                  {user?.name || "Unknown User"}
                </h1>

                <p className="mt-2 text-muted-foreground">
                  {user?.email}
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">

                  <Badge
                    variant={user?.enable ? "default" : "destructive"}
                  >
                    {user?.enable ? "Verified" : "Disabled"}
                  </Badge>

                  <Badge variant="secondary">
                    {user?.provider}
                  </Badge>

                </div>

              </div>

              <Button>
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>

            </CardContent>

          </Card>
        </motion.div>

        {/* Information Section */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* Personal Information */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <Card className="h-full">

              <CardHeader>

                <CardTitle>
                  Personal Information
                </CardTitle>

                <CardDescription>
                  Your account information.
                </CardDescription>

              </CardHeader>

              <CardContent className="space-y-6">

                <div className="flex items-center gap-4">

                  <UserIcon className="text-primary" />

                  <div>

                    <p className="text-sm text-muted-foreground">
                      Name
                    </p>

                    <p className="font-medium">
                      {user?.name || "Not Available"}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <Mail className="text-primary" />

                  <div>

                    <p className="text-sm text-muted-foreground">
                      Email
                    </p>

                    <p className="font-medium">
                      {user?.email}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <Calendar className="text-primary" />

                  <div>

                    <p className="text-sm text-muted-foreground">
                      Joined
                    </p>

                    <p className="font-medium">
                      {user?.createAt
                        ? new Date(user.createAt).toLocaleDateString()
                        : "Not Available"}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <Calendar className="text-primary" />

                  <div>

                    <p className="text-sm text-muted-foreground">
                      Last Updated
                    </p>

                    <p className="font-medium">
                      {user?.updatedAt
                        ? new Date(user.updatedAt).toLocaleDateString()
                        : "Not Available"}
                    </p>

                  </div>

                </div>

              </CardContent>

            </Card>

          </motion.div>
                    {/* Account Status */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Card className="h-full">

              <CardHeader>
                <CardTitle>Account Status</CardTitle>

                <CardDescription>
                  Authentication and account details.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">

                <div className="rounded-lg border bg-primary/5 p-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-green-600" />

                    <div>
                      <p className="font-semibold">
                        {user?.enable
                          ? "Account Verified"
                          : "Account Disabled"}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {user?.enable
                          ? "Your email has been verified successfully."
                          : "Your account has not been verified yet."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">
                    Login Provider
                  </p>

                  <Badge className="mt-2" variant="secondary">
                    {user?.provider}
                  </Badge>
                </div>

                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">
                    User ID
                  </p>

                  <p className="mt-2 break-all text-sm font-medium">
                    {user?.id}
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <p className="text-sm text-muted-foreground">
                    Profile Picture
                  </p>

                  <p className="mt-2 text-sm">
                    {user?.image
                      ? "Profile picture uploaded"
                      : "No profile picture available"}
                  </p>
                </div>

              </CardContent>

            </Card>
          </motion.div>

        </div>

        {/* Footer */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Card className="border-dashed bg-background/60 backdrop-blur-lg">
            <CardContent className="flex flex-col items-center gap-3 py-6 text-center">

              <h3 className="text-lg font-semibold">
                Welcome, {user?.name || "User"} 👋
              </h3>

              <p className="max-w-2xl text-sm text-muted-foreground">
                This is your profile page. Here you can view your account
                information, authentication status, login provider, and other
                personal details. More features like profile editing, password
                changes, and account settings can be added later.
              </p>

            </CardContent>
          </Card>
        </motion.div>

      </div>
    </main>
  );
}

export default UserProfile;