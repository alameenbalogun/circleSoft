"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";
import { BsBriefcaseFill, BsFillCreditCard2FrontFill } from "react-icons/bs";
import { FaCalendarAlt, FaClipboardList, FaCog, FaIdBadge, FaSignOutAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

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
              <MdSpaceDashboard className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Dashboard</p>
            </Link>
            <Link href="/finance" className={linkClass("/finance")}>
              <BsFillCreditCard2FrontFill className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Finance</p>
            </Link>
            <Link href="/calendar" className={linkClass("/calendar")}>
              <FaCalendarAlt className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Calendar</p>
            </Link>

            <Link href="/report" className={linkClass("/report")}>
              <FaClipboardList className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Report</p>
            </Link>

            <div className="mt-6">
              <h2 className="text-[16px] font-semibold text-gray-500 px-5 xl:px-10 mb-2 uppercase">
                Recruitment
              </h2>

              <Link href="/employee" className={linkClass("/employee")}>
                <FaIdBadge className="w-6 h-6 object-cover" />
                <p className="text-[16px]">Employees</p>
              </Link>
              <Link href="/company" className={linkClass("/company")}>
                <BsBriefcaseFill className="w-6 h-6 object-cover" />
                <p className="text-[16px]">Company</p>
              </Link>
              <Link href="/candidate" className={linkClass("/candidate")}>
                <FaCircleUser className="w-6 h-6 object-cover" />
                <p className="text-[16px]">Candidate</p>
              </Link>
            </div>
          </ul>

          <hr className="bg-[#E0E0E0] h-[1px] border-0" />

          <ul className="mt-3 cursor-pointer">
            <Link href="/profile" className={linkClass("/profile")}>
              <FaUserAlt className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Profile</p>
            </Link>
            <Link href="/settings" className={linkClass("/settings")}>
              <FaCog className="w-6 h-6 object-cover" />
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
              <FaSignOutAlt className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Logout</p>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
