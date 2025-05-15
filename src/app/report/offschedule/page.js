import React from "react";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { FaRegFileAlt } from "react-icons/fa";
import employees from "@/json/employee.json";

const statusStyles = {
  ACTIVE: "bg-green-100 text-green-800",
  PROBATION: "bg-blue-100 text-blue-800",
  ONBOARDING: "bg-orange-100 text-orange-800",
  ONLEAVE: "!bg-pink-100 text-pink-800",
};

export default function page() {
  return (
    <PageLayout>
      <div className="p-6 bg-white rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
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
            <FaRegFileAlt className="w-4 h-4" />
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
                {employees.map((e, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-4 flex items-center gap-2">
                      <Image
                        src={e.image || "/icons/marcus.svg"}
                        alt={e.jobTitle || "Employee image"}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />

                      {e.name}
                    </td>
                    <td className="px-4 py-4">{e.id}</td>
                    <td className="px-4 py-4">{e.jobTitle}</td>
                    <td className="px-4 py-4">{e.from}</td>
                    <td className="px-4 py-4">{e.to}</td>
                    <td className="px-4 py-4">{e.type}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-4 py-3 rounded-lg inline-block w-36 text-center text-sm font-medium ${
                          statusStyles[e.employeeStatus.toUpperCase()]
                        }`}
                      >
                        {e.employeeStatus.toUpperCase()}
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
