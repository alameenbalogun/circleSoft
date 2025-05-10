"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarRoutes } from "./routes";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SideBar() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionTitle) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const linkClass = (path) =>
    `flex items-center gap-4 py-8 px-5 xl:px-10 h-12 ${
      pathname === path
        ? "bg-black text-white"
        : "hover:bg-[#5932EA] hover:text-white"
    }`;

  return (
    <div className="top-[66px] shadow-md !h-[calc(100vh-64px)] bg-white flex flex-col overflow-y-auto">
      <div className="flex gap-2 md:gap-5 xl:gap-12 px-2 md:px-5 xl:!px-5 p-4 mb-5 w-full">
        <div className="flex gap-2 xl:!gap-3 items-center w-full">
          <img src="/gavano.svg" alt="Gavano Image" width={40} />
          <div>
            <h1 className="font-bold text-sm xl:text-base">Gavano</h1>
            <p className="text-[10px] xl:text-[11px]">HR Manager</p>
          </div>
        </div>
        <img src="/menu.svg" alt="Menu" />
      </div>

      {/* <div className="flex flex-col justify-between h-full">
        <ul className="mb-4 cursor-pointer">
          {sidebarRoutes
            .filter((route) => !route.isLogout)
            .map((route, idx) =>
              route.children ? (
                <li key={idx} className="mt-1">
                  <button
                    onClick={() => toggleSection(route.section)}
                    className={`${linkClass()} w-full flex justify-between items-center cursor-pointer`}
                  >
                    <div className="flex items-center gap-2 cursor-pointer">
                    
                      {route.children[0].icon}
                      <p className="text-[16px]">{route.section}</p>
                    </div>
                    {openSections[route.section] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  
                  <ul
                    className={` overflow-hidden transition-all duration-300 bg-gray-100 ${
                      openSections[route.section] ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    {route.children.map((child, cIdx) => (
                      <li key={cIdx}>
                        <Link
                          href={child.path}
                          className={`${linkClass(child.path)} pl-10`}
                        >
                          {child.icon}
                          <p className="text-base">{child.title}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={idx}>
                  <Link
                    href={route.path}
                    className={linkClass(route.path, route.isLogout)}
                  >
                    {route.icon}
                    <p className="text-[16px]">{route.title}</p>
                  </Link>
                </li>
              )
            )}
        </ul>

 
        <div className="text-red-500">
          {sidebarRoutes
            .filter((route) => route.isLogout)
            .map((logoutRoute, idx) => (
              <Link
                href={logoutRoute.path}
                key={idx}
                className={`${linkClass(
                  logoutRoute.path,
                  true
                )} hover:bg-red-500 hover:text-white`}
              >
                {logoutRoute.icon}
                <p className="text-[16px]">{logoutRoute.title}</p>
              </Link>
            ))}
        </div>
      </div> */}
      <div className="flex flex-col justify-between h-full">
        <ul className="mb-4 cursor-pointer font-medium text-gray-700">
          {sidebarRoutes
            .filter((route) => !route.isLogout)
            .map((route, idx) =>
              route.children ? (
                <li key={idx} className="mt-0 relative pl-0">
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
                    <div className="absolute left-7 top-0 bottom-0 w-px bg-gray-400"></div>

                    {/* Children list */}
                    <ul className="bg-zinc-50">
                      {route.children.map((child, cIdx) => (
                        <li key={cIdx} className="relative pl-7">
                          {/* Horizontal connecting line */}
                          <div className="absolute left-7 top-8 w-3 h-px bg-gray-400"></div>

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
              <Link
                href={logoutRoute.path}
                key={idx}
                className={`${linkClass(
                  logoutRoute.path,
                  true
                )} hover:bg-red-500 hover:text-white`}
              >
                {logoutRoute.icon}
                <p className="text-[16px]">{logoutRoute.title}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
