import React from "react";
import PageLayout from "@/src/components/PageLayout";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/src/components/Pagination";

const employees = [
  {
    name: "Pristie Candro",
    id: "UND01",
    title: "UI/UX Designer",
    from: "Aug 21 2023",
    to: "Aug 28 2023",
    type: "Engagement",
    status: "ACTIVE",
    image: "/gavano.svg",
  },
  {
    name: "Hanna Baptista",
    id: "UND02",
    title: "Graphic Designer",
    from: "Jun 24 2023",
    to: "Jun 27 2023",
    type: "Unpaid Time Off",
    status: "ONBOARDING",
    image: "/gavano.svg",
  },
  {
    name: "Miracle Geidt",
    id: "UND03",
    title: "Finance",
    from: "Feb 10 2023",
    to: "Feb 12 2023",
    type: "Unpaid Time Off",
    status: "PROBATION",
    image: "/gavano.svg",
  },
  {
    name: "Rayna Torff",
    id: "UND04",
    title: "Project Manager",
    from: "Sep 01 2023",
    to: "Sep 02 2023",
    type: "Sick Leave (Unpaid)",
    status: "ACTIVE",
    image: "/gavano.svg",
  },
  {
    name: "Giana Lupnhutz",
    id: "UND05",
    title: "Creative Director",
    from: "Jul 11 2023",
    to: "Jul 14 2023",
    type: "Relative Funeral",
    status: "ON LEAVE",
    image: "/gavano.svg",
  },
  {
    name: "James George",
    id: "UND06",
    title: "Lead Designer",
    from: "Aug 01 2023",
    to: "Aug 10 2023",
    type: "Annual",
    status: "ACTIVE",
    image: "/gavano.svg",
  },
  {
    name: "Jordyn George",
    id: "UND07",
    title: "IT Support",
    from: "Dec 18 2022",
    to: "Dec 20 2022",
    type: "Unpaid Time Off",
    status: "ONBOARDING",
    image: "/gavano.svg",
  },
  {
    name: "Skylar Herwitz",
    id: "UND08",
    title: "3D Designer",
    from: "Nov 25 2022",
    to: "Nov 28 2022",
    type: "Sick Leave (Unpaid)",
    status: "ACTIVE",
    image: "/gavano.svg",
  },
];

const statusStyles = {
  ACTIVE: "bg-green-100 text-green-800",
  PROBATION: "bg-blue-100 text-blue-800",
  ONBOARDING: "bg-orange-100 text-orange-800",
  "ON LEAVE": "bg-pink-100 text-pink-800",
};

export default function page() {
  return (
    <PageLayout>
      <div className="p-6 bg-white rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-bold">Time Off Schedule</h1>
            <p className="text-sm text-gray-500">
              <Link href="/report" className="cursor-pointer">
                {" "}
                List Report
              </Link>{" "}
              › Time Off Schedule
            </p>
          </div>
          <button className="bg-gray-800 text-white px-4 py-3 rounded-lg flex items-center gap-2">
            <img src="/file.svg" alt="file image" className="w-4 h-4" />
            Download Data
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <select className="border border-gray-300 hover:shadow-sm  py-3 px-4 h-12 rounded-lg text-base text-gray-700">
            <option>All Offices</option>
          </select>
          <select className="border border-gray-300 hover:shadow-sm  py-3 px-4 h-12 rounded-lg text-base text-gray-700">
            <option>All Jobs</option>
          </select>
          <select className="border border-gray-300 hover:shadow-sm  py-3 px-4 h-12 rounded-lg text-base text-gray-700">
            <option>All Status</option>
          </select>
          <select className="border border-gray-300 hover:shadow-sm  py-3 px-4 h-12 rounded-lg text-base text-gray-700">
            <option>All Departments</option>
          </select>
        </div>

        {/*Table */}
        <div className="overflow-x-auto bg-white shadow rounded">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left bg-white border border-gray-200">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-5 text-left">Employee Name</th>
                  <th className="px-4 py-5 text-left">Employee ID</th>
                  <th className="px-4 py-5 text-left">Job Title</th>
                  <th className="px-4 py-5 text-left">From</th>
                  <th className="px-4 py-5 text-left">To</th>
                  <th className="px-4 py-5 text-left">Type</th>
                  <th className="px-4 py-5 text-left">Employee Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {employees.map((i, id) => (
                  <tr key={id} className="border-t border-gray-200">
                    <td className="px-4 py-4 flex items-center gap-2">
                      <Image
                        src={i.image}
                        alt={i.title}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      {i.name}
                    </td>
                    <td className="px-4 py-4">{i.id}</td>
                    <td className="px-4 py-4">{i.title}</td>
                    <td className="px-4 py-4">{i.from}</td>
                    <td className="px-4 py-4">{i.to}</td>
                    <td className="px-4 py-4">{i.type}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-4 py-3 rounded-lg inline-block w-36 text-center text-sm font-medium ${
                          statusStyles[i.status]
                        }`}
                      >
                        {i.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="w-full !border-b-0">
          <Pagination />
        </div>
      </div>
    </PageLayout>
  );
}
