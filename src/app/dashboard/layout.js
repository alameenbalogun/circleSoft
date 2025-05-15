"use client";

import { Suspense } from "react";
import Header from "@/src/components/Header";
import SideBar from "@/src/components/Sidebar";

import Spinner from "@/src/components/Spinner";

export default function DashboardLayout({ children }) {
  return (
    <section className="relative bg-[#f8f8f8] w-full overflow-hidden h-dvh">
      <Header />
      <div className="flex justify-normal items-start w-full !h-full pt-16">
        <div className="h-full !max-w-[15%] !w-full !overflow-hidden">
          <SideBar />
        </div>
        <div className="h-full max-w-[85%] w-full overflow-y-scroll overflow-hidden p-10 pb-16">
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </div>
      </div>
    </section>
  );
}
