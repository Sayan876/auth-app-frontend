import useAuth from "@/auth/store";
import { Button } from "./button";
import { NavLink, useNavigate } from "react-router";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const checkLogin = useAuth((state) => state.checkLogin);
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);

  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const ThemeButton = (
    <Button
  variant="outline"
  size="icon"
  onClick={toggleTheme}
  className="cursor-pointer transition-all duration-500 hover:scale-110 active:scale-95"
>
  <div className="relative flex h-5 w-5 items-center justify-center">
    <Sun
      className={`absolute h-5 w-5 transition-all duration-500 ${
        theme === "dark"
          ? "rotate-0 scale-100"
          : "rotate-180 scale-0"
      }`}
    />

    <Moon
      className={`absolute h-5 w-5 transition-all duration-500 ${
        theme === "dark"
          ? "-rotate-180 scale-0"
          : "rotate-0 scale-100"
      }`}
    />
  </div>
</Button>
  );

  return (
    <nav className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0 md:h-16 py-5 md:py-0 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-colors duration-500">
      {/* Brand */}
      <div className="flex items-center gap-2 font-semibold">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-r from-primary to-primary/40 text-primary-foreground">
          A
        </span>

        <span className="tracking-tight text-base">
          Auth App
        </span>
      </div>

      <div className="flex items-center gap-2">
        {checkLogin() ? (
          <>
            <NavLink
              to="/dashboard/profile"
              className="font-medium hover:text-primary transition-colors"
            >
              {user?.name}
            </NavLink>

            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Logout
            </Button>

            {ThemeButton}
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className="hover:text-primary transition-colors"
            >
              Home
            </NavLink>

            <NavLink to="/login">
              <Button
                size="sm"
                variant="outline"
                className="cursor-pointer"
              >
                Login
              </Button>
            </NavLink>

            <NavLink to="/signup">
              <Button
                size="sm"
                variant="outline"
                className="cursor-pointer"
              >
                Register
              </Button>
            </NavLink>

            {ThemeButton}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;