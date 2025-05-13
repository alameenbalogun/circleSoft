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

        <div className="absolute h-[30%] bg-muted/50 z-40 bottom-0 bg-[#020853] w-full border-t-4 border-gray-900 flex flex-col gap-4 p-8">
          {/* <div className="flex gap-2 md:justify-start mb-4">
            <a
              href="#"
              className="flex items-center  gap-2 font-medium text-white text-base"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-500 text-blue bg-blue-500-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>
              ActiveHr
            </a>
          </div>{" "} */}
          <div className="flex gap-1 items-center">
            <div className="flex justify-center items-center">
              <img src="./logo-1.svg" alt="Side Logo" className="" />
              <img src="./logo.svg" alt="Center Logo" className="-ml-[18px]" />
            </div>

            <h3 className="text-xl font-sans text-white">
              Korr<span className="font-bold">Edge</span>
            </h3>
          </div>
          <h1 className="text-white text-5xl w-3/5 font-semibold mb-3 leading-[1.3]">
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
