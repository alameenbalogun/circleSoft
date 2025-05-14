"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export function LoginForm({ className, ...props }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const [formData, setFormData] = useState({
    email: "aet@gmail.com",
    password: "123456",
  });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    if (!validateEmail(email)) {
      setError("Invalid email.");
      return;
    }

    if (!validatePassword(password)) {
     setError("Password must be at least 6 characters long.");
    }
    // Simulate a login request
    //  send the email and password to the server for authentication
    console.log("Email:", email);
    console.log("Password:", password);

    localStorage.setItem("loggedIn", true);
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col gap-6 shadow-xl rounded-xl py-10 px-6 w-full",
        className
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold mb-4">Login to your account</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">
            Email Address<span className="text-red-600">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="input your registered email"
            required
            className="placeholder:text-gray-500 placeholder:text-sm h-12 text-black outline-none focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-none"
          />
          <p className="text-sm text-red">{error}</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">
            Password<span className="text-red-600">*</span>
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="input your registered password"
              required
              className="placeholder:text-gray-500 placeholder:text-sm h-12 text-black outline-none focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-none"
            />
                      <p className="text-sm text-red">{error}</p>

            <button
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2  rounded-md p-1 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              {showPassword ? (
                <Eye width={16} height={16} />
              ) : (
                <EyeClosed width={16} height={16} />
              )}
            </button>
          </div>

          <a
            href="#"
            className="ml-auto text-sm underline-offset-4 hover:underline text-[#020853] font-medium"
          >
            Forgot your password?
          </a>
        </div>
        <Button
          type="submit"
          className="w-full bg-[#020853] text-white hover:scale-[1.02] h-12 transition-all duration-200 ease-out hover:opacity-80 cursor-pointer"
        >
          Login
        </Button>
        <div className="relative text-center text-sm w-full flex justify-between items-center">
          <hr className="w-1/3 h-[1px] text-gray-300" />
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or login with
          </span>
          <hr className="w-1/3 h-[1px] text-gray-300" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full cursor-pointer h-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg>
            Login with GitHub
          </Button>
          <Button variant="outline" className="w-full cursor-pointer h-12">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                fill="currentColor"
              />
            </svg> */}
            <FcGoogle />
            Login with Google
          </Button>
        </div>
      </div>
      {/* <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div> */}
    </form>
  );
}
