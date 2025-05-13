import { LoginForm } from "@/src/components/LoginForm";
import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted h-full lg:block">
        <Image
          fill
          src="/login-img.jpg"
          alt="Image"
          className="absolute z-10 inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute h-[40%] bg-muted/50 z-40 bottom-0 bg-blue-950 w-full border-t-4 border-gray-900 flex flex-col gap-4 p-8" >
          <div className="flex gap-2 md:justify-start">
            <a href="#" className="flex items-center  gap-2 font-medium text-white text-base">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500 text-blue bg-blue-500-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              ActiveHr
            </a>
          </div>{" "}
          <h1 className="text-white text-4xl font-semibold">Let's empower your employees today.</h1>
          <p className="text-white text-base">We help to complete all your conveyancing needs easily</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
