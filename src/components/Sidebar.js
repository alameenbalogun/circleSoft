"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { CiLogout } from "react-icons/ci";
import { sidebarRoutes } from "./routes";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function SideBar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionTitle) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const logOut = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  }
  const linkClass = (path) =>
    `flex items-center gap-4 py-8 px-5 xl:px-10 h-12  ${
      pathname === path
        ? "bg-white !text-gray-900 shadow-md"
        : "hover:bg-[#15c097] hover:text-white"
    }`;

  return (
    <div className="top-[66px] shadow-md !h-[calc(100vh-64px)] !bg-gradient-to-t from-[#020853] to-[#020853] flex flex-col overflow-y-auto text-white">
      <div className="flex items-center gap-2 md:gap-5 xl:gap-12 px-2 md:px-5 xl:!px-5 p-4 mb-5 w-full">
        <div className="flex gap-2 xl:!gap-3 items-center w-full">
          <Image src="/gavano.svg" alt="Gavano Image" height={50} width={50} />
          <div>
            <h1 className="font-bold text-sm xl:text-base">Gavano Kolos</h1>
            <p className="text-[9px] xl:text-[11px]">HR Manager</p>
          </div>
        </div>
        <HiOutlineDotsHorizontal className="h-5 w-5 object-cover" />
      </div>
      <div className="flex flex-col justify-between h-full">
        <ul className="mb-4 cursor-pointer font-medium text-white">
          {sidebarRoutes
            .filter((route) => !route.isLogout)
            .map((route, idx) =>
              route.children ? (
                <li key={idx} className="mt-0 relative pl-0 cursor-pointer">
                  <button
                    onClick={() => toggleSection(route.section)}
                    className={`${linkClass()} w-full flex justify-between items-center cursor-pointer`}
                  >
                    <div className="flex items-center gap-4 cursor-pointer">
                      {/* Use the first child icon or a default one */}
                      {route.children[0].icon}
                      <p className="text-[16px]">{route.section}</p>
                    </div>
                    {openSections[route.section] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Dropdown children container with the vertical line */}
                  <div
                    className={`relative ${
                      openSections[route.section] ? "block" : "hidden"
                    }`}
                  >
                    {/* Vertical connecting line */}
                    <div className="absolute left-7 top-0 bottom-0 w-px bg-white"></div>

                    {/* Children list */}
                    <ul className="!bg-gradient-to-t from-[#020853] to-[#020853]">
                      {route.children.map((child, cIdx) => (
                        <li key={cIdx} className="relative pl-7">
                          {/* Horizontal connecting line */}
                          <div className="absolute left-7 top-8 w-3 h-px bg-white"></div>

                          <Link
                            href={child.path}
                            className={`${linkClass(child.path)}`}
                          >
                            {/* {child.icon} */}
                            <p className="text-base">{child.title}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={idx} className="">
                  <Link
                    href={route.path}
                    className={`${linkClass(route.path, route.isLogout)} pl-5`}
                  >
                    {route.icon}
                    <p className="text-[16px]">{route.title}</p>
                  </Link>
                </li>
              )
            )}
        </ul>

        {/* Logout link moved to bottom */}
        <div className="text-red-500">
          {sidebarRoutes
            .filter((route) => route.isLogout)
            .map((logoutRoute, idx) => (
              <button
                onClick={() => logOut()}
                key={idx}
                className={`${linkClass(
                  logoutRoute.path,
                  true
                )} hover:bg-red-500 hover:text-white`}
              >
                {logoutRoute.icon}
                <p className="text-[16px]">{logoutRoute.title}</p>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
