"use client";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Header from "@/components/header/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <Card className="w-full max-w-lg border border-gray-400">
          <CardContent className="pt-2 px-6 pb-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-8">Login</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <Input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 border-b border-gray-400 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-gray-400"
                />
              </div>

              <div className="space-y-1">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 border-b border-gray-400 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-gray-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember Me
                  </label>
                </div>

                <Link
                  href="#"
                  className="text-sm font-medium text-amber-500 hover:text-amber-600"
                >
                  Forgot Password
                </Link>
              </div>

              <Link href="/">
                <Button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-500 text-black font-medium"
                >
                  LOGIN
                </Button>
              </Link>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="#"
                  className="font-medium text-amber-500 hover:text-amber-600"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="w-full max-w-md mt-6 flex items-center">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-4 text-sm text-gray-500 font-medium">OR</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        <Button
          variant="outline"
          className="mt-6 w-full max-w-md border border-gray-400 hover:bg-gray-50"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <Link href="https://www.google.com">Sign up with Google</Link>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
