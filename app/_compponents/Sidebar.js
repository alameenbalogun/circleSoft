
import Link from "next/link";
import Image from "next/image";


export default function SideBar({ children }) {
  return (
    <div className="mt-[66px] fixed min-h-screen inline-block shadow-sm   bg-white">
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
              <img
                src="/dashboard.svg"
                className="hover:fill-yellow-300"
                alt="Dashboard"
                width={20}
              />
              <Link href="/" className="text-[16px]">
                Dashboard
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2 group px-10 group-hover:bg-[#F8F8F8] h-[50px] group-hover:text-[#5932EA]">
              <img
                src="/finance.svg"
                alt="finance"
                width={20}
                // className="fill-[#5932EA]"
              />
              <Link href="/finance" className="text-[16px]">
                Finance
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <img src="/employees.svg" alt="employees" width={20} />
              <Link href="/employee" className="text-[16px]">
                Employees
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10 hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <img src="/company.svg" alt="company" width={20} />
              <Link href="/company" className="text-[16px]">
                Company
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <img src="/candidate.svg" alt="candidate" width={20} />
              <Link href="/candidate" className="text-[16px]">
                Candidate
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <img src="/calendar.svg" alt="calendar" width={20} />
              <Link href="calendar" className="text-[16px]">
                Calendar
              </Link>
            </li>
          </ul>

          <hr className="bg-[#E0E0E0] h-[1px] border-0" />

          <ul className="mt-3 cursor-pointer">
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <img src="/profile.svg" alt="profile" width={20} />
              <Link href="/profile" className="text-[16px]">
                Profile
              </Link>
            </li>
            <li className="flex items-center gap-4 p-2  px-10  hover:bg-[#F8F8F8] h-[50px] hover:text-[#5932EA]">
              <img src="/settings.svg" alt="settings" width={20} />
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
