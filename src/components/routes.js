import { BiSolidReport } from "react-icons/bi";
import { IoIosBriefcase, IoIosContact } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { TbBriefcase } from "react-icons/tb";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaCalendarAlt, FaClipboardList, FaCog, FaIdBadge, FaSignOutAlt, FaUserAlt } from "react-icons/fa";

export const sidebarRoutes = [
  {
    title: "Dashboard",
    path: "/",
    icon: <MdDashboard className="w-6 h-6 object-cover" />,
  },
  {
    title: "Finance",
    path: "/finance",
    icon: <BiSolidReport className="w-6 h-6 object-cover" />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <FaCalendarAlt className="w-6 h-6 object-cover" />,
  },
  {
    section: "Employees",
    children: [
      {
        title: "Manage Employees",
        path: "/employee",
        icon: <FaIdBadge className="w-6 h-6 object-cover" />,
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
    icon: <FaUserAlt className="w-6 h-6 object-cover" />,
  },
  {
    title: "Report",
    path: "/report",
    icon: <FaClipboardList className="w-6 h-6 object-cover" />,
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
        icon: <BsBriefcaseFill className="w-6 h-6 object-cover" />,
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
    icon: <FaCog className="w-6 h-6 object-cover" />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <FaSignOutAlt className="w-6 h-6 object-cover" />,
    isLogout: true,
  },
];
