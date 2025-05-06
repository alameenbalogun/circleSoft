"use client";
import PageLayout from "@/src/components/PageLayout";
import jobs from "../../json/jobs.json";
import { useState } from "react";
import Image from "next/image";
import { GraduationCap, MapPin } from "lucide-react";
import employees from "../../json/employee.json";

export default function Page() {
  const [sortOpen, setSortOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("active");

  // Get unique employee statuses
  const statusTabs = [
    "all",
    ...new Set(employees.map((emp) => emp.employeeStatus)),
  ];

  // Filter employees based on active tab
  const filteredEmployees =
    activeTab === "all"
      ? employees
      : employees.filter((emp) => emp.employeeStatus === activeTab);

  const now = new Date();
  const currentYear = now.getFullYear();

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(currentYear, now.getMonth() - i);
    return {
      label: `${date.toLocaleString("default", {
        month: "long",
      })} ${date.getFullYear()}`,
      value: `${date.getMonth()}-${date.getFullYear()}`,
    };
  }).slice(0, 5);

  return (
    <PageLayout>
      <div className="bg-white shadow-md py-5 px-6 mt-5 pb-10 rounded-[6px] ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Current Openings</h2>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setSortOpen(!sortOpen);
                setMonthOpen(false); // ✅ close other dropdown
              }}
              className="text-black bg-white border border-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Sort by latest{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {sortOpen && (
              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-[148px] border border-black absolute right-0 top-12">
                <ul className="py-2 text-sm text-black">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Latest
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Oldest
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Highest Salary
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      A - Z
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Job Cards */}
        <div className="overflow-x-auto hide-scrollbar mt-5 w-full ">
          <div className="flex gap-6 h-auto w-max">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="overflow-hidden w-[315px] h-[183px] rounded-2xl relative border-l-[5px] bg-white"
                style={{ borderLeftColor: job.color }}
              >
                {/* job title */}
                <div className="flex gap-[12px] pl-2.5 pt-4">
                  <Image src={job.icon} width={47} height={47} />
                  <div className="flex flex-col ">
                    <h4 className="text-base font-semibold ">{job.title}</h4>
                    <p className="font-light text-xs">{job.posted_day}</p>
                  </div>
                </div>

                {/* pills */}
                <div className="flex pl-2.5 gap-2 mt-4 ">
                  <div className="w-[87px] h-[27px] rounded-[23px] py-1.5 px-3 gap-1 flex items-center justify-center bg-gray-200  ">
                    <MapPin
                      width={16}
                      height={16}
                      color="#000"
                    />
                    <p className="text-xs text-[#000] font-light">
                      {job.location}
                    </p>
                  </div>
                  <div className=" h-[27px] rounded-[23px] py-1.5 px-3 gap-1 flex items-center justify-center bg-gray-200  ">
                    <GraduationCap width={16} height={16} color="#000" />
                    <p className="text-xs text-[#000] font-light">
                      {job.years_of_experience} years of experience
                    </p>
                  </div>
                </div>

                <div className="flex justify-between  items-center mt-4 px-2.5">
                  <div className="flex gap-1 ">
                    <p className="font-bold text-4xl ">{job.applied}</p>
                    <p className="text-xs text-[#898989] font-light mt-[20px]">
                      applications
                    </p>
                  </div>
                  <p className="text-[#00B85E] text-xs mt-[10px]">
                    {job.applied_last_week} in last week
                  </p>
                </div>

                {/* backdrop color */}
                <div
                  className="w-[151px] h-[151px] absolute right-0 top-[-20px] rounded-full blur-[78px]"
                  style={{ backgroundColor: job.color, opacity: 0.15 }}
                />

                {/* send icon */}
                <div className="backdrop-blur-[97px] bg-black/10 w-[30px] h-[30px] absolute top-[8px] right-[8px] flex justify-center items-center rounded-full">
                  <Image
                    src="/icons/send.svg"
                    width={14}
                    height={14}
                    alt="send"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Candidates + Month Filter */}
      <div className="flex justify-between items-center mt-[40px]">
        <h3 className="text-lg font-semibold">Candidates</h3>

        {/* month dropdown */}

        <div className="relative">
          <button
            onClick={() => {
              setMonthOpen(!monthOpen);
              setSortOpen(false); // ✅ close other dropdown
            }}
            className="text-black bg-white border border-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            {months[0].label}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {monthOpen && (
            <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow  border border-black absolute right-0 mt-2">
              <ul className="py-2 text-sm text-black">
                {months.map((month) => (
                  <li key={month.value}>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      {month.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className=" bg-white shadow-md py-5 px-6 mt-5 pb-10 rounded-[6px]">
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {statusTabs.map((status) => (
            <button
              key={status}
              onClick={() => setActiveTab(status)}
              className={`px-4 py-2 rounded-md border ${
                activeTab === status
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {status === "all"
                ? "All"
                : `${status.charAt(0).toUpperCase()}${status.slice(1)}`}{" "}
              (
              {status === "all"
                ? employees.length
                : employees.filter((e) => e.employeeStatus === status).length}
              )
            </button>
          ))}
        </div>
        <div className="relative overflow-x-auto overflow-y-auto h-100 shadow-md sm:rounded-lg pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Candidate Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Stages
                </th>
                <th scope="col" className="px-6 py-3">
                  Applied Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Application Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Attachments
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee, idx) => (
                <tr
                  key={idx}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-normal gap-1 items-center"
                  >
                    <Image
                      src="leo.svg"
                      width={30}
                      height={30}
                      alt={employee.name}
                    />
                    {employee.name}
                  </th>
                  <td className="px-6 py-4">{employee.department}</td>
                  <td className="px-6 py-4">{employee.age}</td>
                  <td className="px-6 py-4">{employee.growth}</td>
                  <td className={`px-6 py-4  `}>
                    <p
                      className={`p-2 text-white !w-24 text-center font-semibold text-xs rounded ${
                        employee.employmentType === "Permanent"
                          ? "bg-green-600"
                          : employee.employmentType === "Contract"
                          ? "bg-yellow-600"
                          : "bg-blue-700"
                      } `}
                    >
                      {" "}
                      {employee.employmentType}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
