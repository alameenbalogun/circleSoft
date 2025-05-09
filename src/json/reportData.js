import { FaBriefcase, FaCalendarAlt, FaClock, FaExchangeAlt, FaFileAlt, FaUserMinus, FaUserPlus, FaUsers } from "react-icons/fa";


export const reportData = [
    {
        icon: FaUsers ,
        title: "Headcount (Point-in-time)",
        description: "Breakdown of all current employees."
    },
    {
        icon: FaUserPlus ,
        title: "Onboarding",
        description: "Onboarding employees by month of their join date."
    },
    {
        icon: FaUserMinus ,
        title: "Offboarding",
        description: "Offboarding and inactive employees by month of their last working date."
    },
    {
        icon: FaCalendarAlt ,
        title: "Time Off Balance",
        description: "An overview of employees' time off balance."
    },
    {
        icon: FaBriefcase ,
        title: "Recruitment Pipeline",
        description: "An overview of the hiring progress during a period of time."
    },
    {
        icon: FaFileAlt ,
        title: "Employee Data Reports",
        description: "An overview of employee information."
    },
    {
        icon: FaClock ,
        title: "Time Off Schedule",
        description: "An overview of employees' time off schedule."
    },
    {
        icon: FaExchangeAlt ,
        title: "Employee Turnover Rate",
        description: "An overview of the resigned employees over the active employees."
    },
]