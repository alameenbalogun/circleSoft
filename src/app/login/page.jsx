"use client";

import { LoginForm } from "@/src/components/LoginForm";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="grid min-h-svh overflow-hidden max-h-screen lg:grid-cols-2">
      <div className="relative hidden bg-muted h-full lg:block">
        {isLoading && (
          <div className="absolute inset-0 z-0 animate-pulse bg-gray-300 dark:bg-gray-700" />
        )}
        <Image
          fill
          src="/login-img.jpg"
          alt="Image"
          onLoadingComplete={() => setIsLoading(false)}
          className={`z-10 inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          } dark:brightness-[0.8] dark:grayscale`}
        />
        <div className={`absolute h-[40%] xl:h-[30%] bg-muted/50 z-40 bottom-0 bg-[#020853] w-full border-t-2 border-gray-300  flex flex-col gap-2 p-8`}>
          <div className="flex gap-1 items-center">
            <div className="flex justify-center items-center">
              <img src="./logo-1.svg" alt="Side Logo" className="" />
              <img src="./logo.svg" alt="Center Logo" className="-ml-[18px]" />
            </div>

            <h3 className="text-xl font-sans text-white">
              Korr<span className="font-bold">Edge</span>
            </h3>
          </div>
          <h1 className="text-white text-3xl xl:text-5xl xl:w-3/5 font-semibold mb-3 xl:leading-[1.3]">
            Let's empower your employees today.
          </h1>
          <p className="text-white text-base font-light">
            We help to complete all your conveyancing needs easily
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
