"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdInsertChartOutlined } from "react-icons/md";
import { LuLayoutDashboard, LuCalendarDays } from "react-icons/lu";
import { LiaIdCard } from "react-icons/lia";
import { TbBriefcase } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

export default function SideBar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center gap-4 p-2 px-5 xl:px-10 h-[50px] ${
      pathname === path
        ? "bg-black text-white"
        : "hover:bg-[#5932EA] hover:text-white"
    }`;

  return (
    <div className="top-[66px] shadow-sm !h-[calc(100vh-66px)] bg-white flex flex-col overflow-y-auto">

      <div className="flex gap-2 md:gap-5 xl:gap-10 px-2 md:px-5 xl:px-10 p-6">
        <div className="flex gap-2 xl:!gap-3 items-center">
          <img src="/gavano.svg" alt="Gavano Image" width={40} />
          <div>
            <h1 className="font-bold text-sm xl:text-base">Gavano</h1>
            <p className="text-[10px] xl:text-[11px]">HR Manager</p>
          </div>
        </div>
        <img src="/menu.svg" alt="Menu" />
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div>
          <ul className="mb-4 cursor-pointer">
            <Link href="/" className={linkClass("/")}>
              <LuLayoutDashboard className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Dashboard</p>
            </Link>
            <Link href="/finance" className={linkClass("/finance")}>
              <MdInsertChartOutlined className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Finance</p>
            </Link>
            <Link href="/calendar" className={linkClass("/calendar")}>
              <LuCalendarDays className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Calendar</p>
            </Link>

            <div className="mt-6">
              <h2 className="text-[16px] font-semibold text-gray-500 px-5 xl:px-10 mb-2 uppercase">
                Recruitment
              </h2>

              <Link href="/employee" className={linkClass("/employee")}>
                <LiaIdCard className="w-6 h-6 object-cover" />
                <p className="text-[16px]">Employees</p>
              </Link>
              <Link href="/company" className={linkClass("/company")}>
                <TbBriefcase className="w-6 h-6 object-cover" />
                <p className="text-[16px]">Company</p>
              </Link>
              <Link href="/candidate" className={linkClass("/candidate")}>
                <IoIosContact className="w-6 h-6 object-cover" />
                <p className="text-[16px]">Candidate</p>
              </Link>
            </div>
          </ul>

          <hr className="bg-[#E0E0E0] h-[1px] border-0" />

          <ul className="mt-3 cursor-pointer">
            <Link href="/profile" className={linkClass("/profile")}>
              <BsPerson className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Profile</p>
            </Link>
            <Link href="/settings" className={linkClass("/settings")}>
              <IoSettingsOutline className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Settings</p>
            </Link>
          </ul>
        </div>

        <div>
          <hr className="bg-[#E0E0E0] h-[1px] border-0" />
          <ul className="cursor-pointer">
            <Link
              href="/logout"
              className="flex items-center gap-4 p-2 px-5 xl:px-10 bg-red-500 text-white hover:bg-white h-[50px] hover:text-red-500"
            >
              <CiLogout className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Logout</p>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
