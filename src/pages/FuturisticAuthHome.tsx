import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import {
  ShieldCheck,
  Lock,
  UserRound,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "../App.css";

const features = [
  {
    title: "JWT Authentication",
    description:
      "Secure authentication using access and refresh tokens with Spring Security.",
    icon: ShieldCheck,
  },
  {
    title: "Role Based Access",
    description:
      "Protect pages and APIs with flexible user and admin authorization.",
    icon: UserRound,
  },
  {
    title: "Enterprise Security",
    description:
      "Modern architecture designed for scalability and production deployment.",
    icon: Lock,
  },
];

const stats = [
  {
    title: "99.99%",
    subtitle: "Application Uptime",
  },
  {
    title: "JWT",
    subtitle: "Token Based Security",
  },
  {
    title: "OAuth2",
    subtitle: "Social Login Ready",
  },
];

function FuturisticAuthHome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-primary/15 blur-3xl" />

        <div className="absolute right-[-120px] bottom-[-120px] h-96 w-96 rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      {/* ================= HERO ================= */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        <div className="rounded-full border bg-muted px-5 py-2 text-sm text-muted-foreground">
          🚀 Next Generation Authentication Platform
        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl">
          Build
          <span className="bg-gradient-to-r from-primary via-blue-500 to-violet-500 bg-clip-text text-transparent">
            {" "}
            Secure Authentication
          </span>
          <br />
          In Minutes
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          A modern authentication solution built with React, Spring Boot,
          JWT Authentication, OAuth2 and enterprise-grade security.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>

        {/* Hero Card */}

        <Card className="mt-20 w-full max-w-5xl border shadow-xl">
          <CardContent className="grid gap-8 p-10 md:grid-cols-3">
            <div>
              <ShieldCheck className="mb-4 h-10 w-10 text-primary" />
              <h3 className="font-semibold">Secure APIs</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Protect every endpoint using JWT Authentication.
              </p>
            </div>

            <div>
              <Lock className="mb-4 h-10 w-10 text-primary" />
              <h3 className="font-semibold">Encrypted Passwords</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                BCrypt password hashing for maximum protection.
              </p>
            </div>

            <div>
              <UserRound className="mb-4 h-10 w-10 text-primary" />
              <h3 className="font-semibold">Role Management</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                User and Admin authorization made simple.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Powerful Authentication Features
          </h2>

          <p className="mt-4 text-muted-foreground">
            Everything required for production-ready authentication.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardHeader>
                <feature.icon className="mb-4 h-10 w-10 text-primary" />

                <CardTitle>{feature.title}</CardTitle>

                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= WHY US ================= */}

      <section className="bg-muted/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Why Choose Our Authentication Platform?
            </h2>

            <p className="mt-6 text-muted-foreground">
              Built using modern technologies and security best practices,
              making authentication easier than ever.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "JWT Access & Refresh Tokens",
              "OAuth2 Login",
              "Role Based Authorization",
              "Email Verification",
              "Password Reset",
              "Production Ready APIs",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border p-4"
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <Card
              key={stat.title}
              className="text-center transition hover:shadow-lg"
            >
              <CardContent className="p-10">
                <h2 className="text-5xl font-bold text-primary">
                  {stat.title}
                </h2>

                <p className="mt-3 text-muted-foreground">
                  {stat.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="mx-auto max-w-5xl px-6 py-24">
        <Card className="border bg-primary text-primary-foreground shadow-2xl">
          <CardContent className="flex flex-col items-center py-20 text-center">
            <h2 className="text-5xl font-bold">
              Ready to Build Secure Applications?
            </h2>

            <p className="mt-6 max-w-2xl text-primary-foreground/80">
              Start building scalable authentication with React, Spring Boot,
              JWT, OAuth2 and modern security practices.
            </p>

            <Button
              variant="secondary"
              size="lg"
              className="mt-10"
            >
              Create Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 md:flex-row">
          <div className="font-semibold">
            AuthApp
          </div>

          <div className="text-sm text-muted-foreground">
            © 2026 AuthApp. Built with React + Spring Boot + shadcn/ui.
          </div>
        </div>
      </footer>
    </main>
  );
}

export default FuturisticAuthHome;