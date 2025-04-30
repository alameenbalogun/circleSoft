import Link from "next/link";
import { MdInsertChartOutlined } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaIdCard } from "react-icons/lia";
import { TbBriefcase } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

export default function SideBar() {
  return (
    <div className="top-[66px] shadow-sm !h-[calc(100vh-66px)] bg-white flex flex-col overflow-y-auto">
      <div className="flex gap-2 md:!gap-5 xl:!gap-10 px-2 md:!px-5 xl:!px-10 p-6">
        <div className="flex gap-2 xl:!gap-3 items-center">
          <img src="/gavano.svg" alt="Gavano Image" width={40} />
          <div className="">
            <h1 className="font-bold text-sm xl:text-base">Gavano</h1>
            <p className="text-[10px] xl:text-[11px]">HR Manager</p>
          </div>
        </div>
        <img src="/menu.svg" alt="Menu " />
      </div>
      <div className="mt-3 flex flex-col h-full">
        <div>
          {" "}
          <ul className="mb-4 cursor-pointer">
            <Link
              href="/"
              className="flex items-center gap-4 p-2 hover:text-[#FFF] h-[50px] hover:bg-[#5932EA] px-5 xl:!px-10"
            >
              <LuLayoutDashboard className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Dashboard</p>
            </Link>
            <Link
              href="/finance"
              className="flex items-center gap-4 p-2 group px-5 xl:!px-10 hover:text-[#FFF] h-[50px] hover:bg-[#5932EA]"
            >
              <MdInsertChartOutlined className="w-6 h-6 object-cover" />
              <p className="text-[16px] ">Finance</p>
            </Link>
            <Link
              href="/employee"
              className="flex items-center gap-4 p-2 px-5 xl:!px-10 hover:text-[#FFF] h-[50px] hover:bg-[#5932EA]"
            >
              <LiaIdCard className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Employees</p>
            </Link>
            <Link
              href="/company"
              className="flex items-center gap-4 p-2 px-5 xl:!px-10 hover:text-[#FFF] h-[50px] hover:bg-[#5932EA]"
            >
              <TbBriefcase className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Company</p>
            </Link>
            <Link
              href="/candidate"
              className="flex items-center gap-4 p-2 px-5 xl:!px-10 hover:text-[#FFF] h-[50px] hover:bg-[#5932EA]"
            >
              <IoIosContact className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Candidate</p>
            </Link>
            <Link
              href="/calendar"
              className="flex items-center gap-4 p-2 px-5 xl:!px-10 hover:text-[#FFF] h-[50px] hover:bg-[#5932EA]"
            >
              <LuCalendarDays className="w-6 h-6 object-cover" />
              <p className="text-[16px]">Calendar</p>
            </Link>
          </ul>
        </div>

          <hr className="bg-[#E0E0E0] h-[1px] border-0" />

          <div>
            <ul className="mt-3 cursor-pointer">
              <Link
                href="/profile"
                className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]"
              >
                <BsPerson className="w-6 h-6 object-cover" />
                <p className="text-[16px]">Profile</p>
              </Link>
              <Link
                href="/settings"
                className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]"
              >
                <IoSettingsOutline className="w-6 h-6 object-cover" />
                <p className="text-[16px]">Settings</p>
              </Link>
            </ul>
          </div>

          <div className="items-end">
            <hr className="bg-[#E0E0E0] h-[1px] border-0" />

            <ul className="cursor-pointer">
              <Link
                href="/logout"
                className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]"
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
