import Link from "next/link";
import { MdInsertChartOutlined } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaIdCard } from "react-icons/lia";
import { TbBriefcase } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export default function SideBar() {
  return (
    <div className="mt-[66px] fixed min-h-screen inline-block shadow-sm  bg-white">
      <div className="">
        <div className="flex gap-5  px-10 p-6">
          <div className="flex gap-2 items-center">
            <img src="/gavano.svg" alt="Gavano Image" width={40} />
            <div className="">
              <h1 className="font-bold">Gavano</h1>
              <p className="text-[11px]">HR Manager</p>
            </div>
          </div>
          <img src="/menu.svg" alt="Menu " />
        </div>
        <div className="mt-3">
          <ul className="mb-4 cursor-pointer">
            <li className="flex items-center gap-4 p-2 hover:bg-[#F8F8F8] hover:text-[#5932EA] h-[50px]  px-10">
              <LuLayoutDashboard className="w-6 h-6 object-cover" />
              <Link href="/" className="text-[16px]">
                Dashboard
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2 group px-10 hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <MdInsertChartOutlined className="w-6 h-6 object-cover" />
              <Link href="/finance" className="text-[16px] ">
                Finance
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <LiaIdCard className="w-6 h-6 object-cover" />
              <Link href="/employee" className="text-[16px]">
                Employees
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10 hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <TbBriefcase className="w-6 h-6 object-cover" />
              <Link href="/company" className="text-[16px]">
                Company
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <IoIosContact className="w-6 h-6 object-cover" />
              <Link href="/candidate" className="text-[16px]">
                Candidate
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <LuCalendarDays className="w-6 h-6 object-cover" />
              <Link href="calendar" className="text-[16px]">
                Calendar
              </Link>
            </li>
          </ul>

          <hr className="bg-[#E0E0E0] h-[1px] border-0" />

          <ul className="mt-3 cursor-pointer">
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <BsPerson className="w-6 h-6 object-cover" />
              <Link href="/profile" className="text-[16px]">
                Profile
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <IoSettingsOutline className="w-6 h-6 object-cover" />
              <Link href="settings" className="text-[16px]">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
