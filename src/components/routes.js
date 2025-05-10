import { MdInsertChartOutlined } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbBriefcase } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { LuLayoutDashboard, LuCalendarDays } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { IoIosBriefcase } from "react-icons/io";

export const sidebarRoutes = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdDashboard className="w-6 h-6 object-cover" />,
  },
  {
    title: "Reports",
    path: "/finance",
    icon: <BiSolidReport className="w-6 h-6 object-cover" />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <LuCalendarDays className="w-6 h-6 object-cover" />,
  },
  {
    section: "Employees",
    children: [
      {
        title: "Manage Employees",
        path: "/employee",
        icon: <IoPeopleOutline className="w-6 h-6 object-cover" />,
      },
      {
        title: "Directory",
        path: "/company",
        icon: <TbBriefcase className="w-6 h-6 object-cover" />,
      },
      {
        title: "Candidate",
        path: "/candidate",
        icon: <IoIosContact className="w-6 h-6 object-cover" />,
      },
    ],
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <BsPerson className="w-6 h-6 object-cover" />,
  },
  {
    section: "Recruitment",
    children: [
      {
        title: "Jobs",
        path: "/employee",
        icon: <IoIosBriefcase className="w-6 h-6 object-cover" />,
      },
      {
        title: "Candidates",
        path: "/company",
        icon: <TbBriefcase className="w-6 h-6 object-cover" />,
      },
      {
        title: "Settings",
        path: "/candidate",
        icon: <IoIosContact className="w-6 h-6 object-cover" />,
      },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline className="w-6 h-6 object-cover" />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <CiLogout className="w-6 h-6 object-cover" />,
    isLogout: true,
  },
];
