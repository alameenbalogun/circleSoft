import Pagination from "@/components/Pagination";
import Link from "next/link";
import employees from '@/json/employee.json';
import { FaRegFileAlt } from "react-icons/fa";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";



export default function Page() {
  return (
    <PageLayout>
      <div className="p-6 bg-white rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-xl font-bold">Time Off Balance</h1>
            <p className="text-sm text-gray-500">
              <Link href="/report" className="cursor-pointer">
                {" "}
                List Report
              </Link>{" "}
              › Time Off Balance
            </p>
          </div>
          <button className="bg-gray-800 text-white px-4 py-3 rounded-lg flex items-center gap-2 mb-2">
            <FaRegFileAlt className="w-4 h-4" />
            Download Data
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <select className="border text-gray-700 border-gray-300 hover:shadow-sm  py-3 px-4 h-12 rounded-lg text-base">
            <option>All Offices</option>
          </select>
          <select className="border text-gray-700 border-gray-300 hover:shadow-sm  py-3 px-4 h-12 rounded-lg text-base">
            <option>All Jobs</option>
          </select>
          <select className="border text-gray-700 border-gray-300 hover:shadow-sm  py-3 px-4 h-12 rounded-lg text-base">
            <option>All Status</option>
          </select>
          <select className="border text-gray-700 border-gray-300 hover:shadow-sm  py-3 px-4 h-12 rounded-lg text-base">
            <option>All Departments</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow rounded">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-5">Employee Name</th>
                <th className="px-4 py-5">Employee ID</th>
                <th className="px-4 py-5">Department</th>
                <th className="px-4 py-5">Job Title</th>
                <th className="px-4 py-5">Office</th>
                <th className="px-4 py-5">Entitlement</th>
                <th className="px-4 py-5">Carry Over</th>
                <th className="px-4 py-5">Request</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {employees.map((p, index) => (
                <tr key={index} className="border-b !border-gray-300">
                  <td className="px-4 py-4 flex items-center gap-2">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-xs text-gray-500">
                        {p.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">{p.id}</td>
                  <td className="px-4 py-4">{p.department}</td>
                  <td className="px-4 py-4">{p.jobTitle}</td>
                  <td className="px-4 py-4">{p.office}</td>
                  <td className="px-4 py-4">{p.entitlement}</td>
                  <td className="px-4 py-4">{p.carryOver}</td>
                  <td className="px-4 py-4">{p.request}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="w-full !border-b-0">
          <Pagination />
        </div>
      </div>
    </PageLayout>
  );
}
