import PageLayout from "@/src/components/PageLayout";
import ReportCard from "@/src/components/ReportCard";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
  FaExchangeAlt,
  FaFileAlt,
  FaUserMinus,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";

const reportData = [
  {
    icon: FaUsers,
    title: "Headcount (Point-in-time)",
    description: "Breakdown of all current employees.",
  },
  {
    icon: FaUserPlus,
    title: "Onboarding",
    description: "Onboarding employees by month of their join date.",
  },
  {
    icon: FaUserMinus,
    title: "Offboarding",
    description:
      "Offboarding and inactive employees by month of their last working date.",
  },
  {
    icon: FaCalendarAlt,
    title: "Time Off Balance",
    description: "An overview of employees' time off balance.",
  },
  {
    icon: FaBriefcase,
    title: "Recruitment Pipeline",
    description: "An overview of the hiring progress during a period of time.",
  },
  {
    icon: FaFileAlt,
    title: "Employee Data Reports",
    description: "An overview of employee information.",
  },
  {
    icon: FaClock,
    title: "Time Off Schedule",
    description: "An overview of employees' time off schedule.",
  },
  {
    icon: FaExchangeAlt,
    title: "Employee Turnover Rate",
    description:
      "An overview of the resigned employees over the active employees.",
  },
];

export default function Page() {
  return (
    <PageLayout>
      <div className="max-w-9xl mx-auto">
        <h1 className="text-2xl font-semibold text-black">Report</h1>
        <p className="text-gray-500 mb-8">Here&apos;s report so far</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {reportData.map((item, index) => (
          <ReportCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </PageLayout>
  );
}
