import { Suspense } from "react";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";

import "./globals.css";
import Spinner from "../components/Spinner";

export const metadata = {
  title: "Circle Soft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-[#f8f8f8] w-full overflow-hidden h-dvh">
        <div className="fixed top-0 w-full !h-16 z-50">
          <Header />
        </div>
        <div className="flex justify-normal items-start w-full !h-full relative !pt-16">
          <div className="h-full !max-w-[15%] !w-full !overflow-hidden">
            <SideBar />
          </div>
          <div className="h-full max-w-[85%] w-full overflow-y-scroll overflow-hidden p-10 pb-24">
            <Suspense fallback={<Spinner />}>{children}</Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
