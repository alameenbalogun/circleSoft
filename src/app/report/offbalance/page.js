import PageLayout from "@/src/components/PageLayout";
import Pagination from "@/src/components/Pagination";
import Image from "next/image";
import Link from "next/link";

const timeOffData = [
  {
    name: "Pristia Candra",
    email: "pristia@email.com",
    id: "LN001",
    department: "Team Product",
    title: "UI/UX Designer",
    office: "Unpixel Office",
    entitlement: 12,
    carryOver: 0,
    request: 0,
    image: "/gavano.svg",
  },
  {
    name: "Hanna Baptista",
    email: "hanna@email.com",
    id: "LN002",
    department: "Team Product",
    title: "Graphic Designer",
    office: "Unpixel Office",
    entitlement: 30,
    carryOver: 0,
    request: 0,
    image: "/gavano.svg",
  },
  {
    name: "Carlos Mendoza",
    email: "carlos@email.com",
    id: "LN003",
    department: "Engineering",
    title: "Frontend Developer",
    office: "Unpixel Office",
    entitlement: 20,
    carryOver: 2,
    request: 5,
    image: "/gavano.svg",
  },
  {
    name: "Fatima Ahmed",
    email: "fatima@email.com",
    id: "LN004",
    department: "Engineering",
    title: "Backend Developer",
    office: "Unpixel Office",
    entitlement: 18,
    carryOver: 1,
    request: 2,
    image: "/gavano.svg",
  },
  {
    name: "Liam O'Connor",
    email: "liam@email.com",
    id: "LN005",
    department: "Marketing",
    title: "Content Strategist",
    office: "Remote",
    entitlement: 15,
    carryOver: 0,
    request: 1,
    image: "/gavano.svg",
  },
  {
    name: "Aisha Khan",
    email: "aisha@email.com",
    id: "LN006",
    department: "Marketing",
    title: "SEO Specialist",
    office: "Unpixel Office",
    entitlement: 20,
    carryOver: 0,
    request: 0,
    image: "/gavano.svg",
  },
  {
    name: "Daniel Wu",
    email: "daniel@email.com",
    id: "LN007",
    department: "Sales",
    title: "Account Manager",
    office: "Unpixel Office",
    entitlement: 22,
    carryOver: 2,
    request: 4,
    image: "/gavano.svg",
  },
  {
    name: "Emily Smith",
    email: "emily@email.com",
    id: "LN008",
    department: "Customer Support",
    title: "Support Lead",
    office: "Remote",
    entitlement: 25,
    carryOver: 5,
    request: 3,
    image: "/gavano.svg",
  },
  {
    name: "Mohammed Alvi",
    email: "mohammed@email.com",
    id: "LN009",
    department: "Engineering",
    title: "DevOps Engineer",
    office: "Unpixel Office",
    entitlement: 18,
    carryOver: 1,
    request: 2,
    image: "/gavano.svg",
  },
  {
    name: "Julia Roberts",
    email: "julia@email.com",
    id: "LN010",
    department: "Human Resources",
    title: "HR Generalist",
    office: "Unpixel Office",
    entitlement: 24,
    carryOver: 0,
    request: 0,
    image: "/gavano.svg",
  },
  {
    name: "Tariq Bello",
    email: "tariq@email.com",
    id: "LN011",
    department: "Finance",
    title: "Financial Analyst",
    office: "Remote",
    entitlement: 21,
    carryOver: 0,
    request: 1,
    image: "/gavano.svg",
  },
  {
    name: "Nina Zhang",
    email: "nina@email.com",
    id: "LN012",
    department: "Engineering",
    title: "QA Engineer",
    office: "Unpixel Office",
    entitlement: 19,
    carryOver: 1,
    request: 2,
    image: "/gavano.svg",
  },
];

export default function Page() {
  return (
    <PageLayout>
      <div className="p-6 bg-white rounded-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-bold">Time Off Balance</h1>
            <p className="text-sm text-gray-500">
              <Link href="/report" className="cursor-pointer"> List Report</Link>  › Time Off Balance
            </p>
          </div>
          <button className="bg-gray-800 text-white px-4 py-3 rounded-lg flex items-center gap-2">
            <img src="/file.svg" alt="file image" className="w-4 h-4" />
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
              {timeOffData.map((person, index) => (
                <tr key={index} className="border-b !border-gray-300">
                  <td className="px-4 py-4 flex items-center gap-2">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{person.name}</div>
                      <div className="text-xs text-gray-500">
                        {person.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">{person.id}</td>
                  <td className="px-4 py-4">{person.department}</td>
                  <td className="px-4 py-4">{person.title}</td>
                  <td className="px-4 py-4">{person.office}</td>
                  <td className="px-4 py-4">{person.entitlement}</td>
                  <td className="px-4 py-4">{person.carryOver}</td>
                  <td className="px-4 py-4">{person.request}</td>
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
