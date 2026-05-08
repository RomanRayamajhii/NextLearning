
"use client"
import Link from "next/link";

import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
  UserButton

} from "@clerk/nextjs";


export const Navigation = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-background border-b border-(--foreground)/10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <h1 className="text-xl font-semibold text-foreground">Next.js App</h1>
          </div>
          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <>
              <SignInButton >
                <button className="px-4 py-2 text-md border bg-black text-white  rounded-full transition-all duration-200 ease-in-out  hover:bg-white hover:text-black hover:shadow-black hover:shadow-md">
                  Sign In
                </button>
                </SignInButton >

                <SignUpButton  >
                <button className="px-4 py-2 text-md border bg-black text-white  rounded-full transition-all duration-200 ease-in-out  hover:bg-white hover:text-black hover:shadow-black hover:shadow-md">
                  Sign Up
                </button>

                </SignUpButton >
                </>
            ) : (
              <>
               
                <Link href="/user-profile" className="text-foreground hover:text-foreground/80">
                 Profile
                </Link>
                <SignOutButton />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};