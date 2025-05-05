import PageLayout from "@/src/components/PageLayout";

import { LiaFileDownloadSolid } from "react-icons/lia";
import { HiMiniPlus } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import DropdownSelect from "@/src/components/button/DropdownSelect";
import Image from "next/image";
import employee from "@/src/json/employee.json";
import CheckBox from "@/src/components/button/Checkbox";
import { HiArrowsUpDown } from "react-icons/hi2";

export default function Page() {
  return (
    <PageLayout>
      <div className="bg-white shadow-sm p-6">
        {/*Header */}
        <div className="flex justify-between items-center mb-5 mt-4 ">
          <div>
            <h1 className="text-xl text-gray-800">Employees</h1>
            <p className="text-gray-500">Manage your employees</p>
          </div>

          <div>
            <button
              type="button"
              className="text-black  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-100 dark:hover:bg-gray-300 dark:focus:ring-gray-100 gap-1 "
            >
              <LiaFileDownloadSolid className="w-4 h-4 object-cover" />
              Download
            </button>
            <button
              type="button"
              className="text-white  hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-1 "
            >
              <HiMiniPlus className="w-4 h-4 object-cover" />
              Add New
            </button>
          </div>
        </div>

        {/* Select Options */}
        <div className="flex gap-4">
          <form className="relative w-full mb-4 ">
            <input
              type="text"
              placeholder="Search Employee"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full pr-10 "
            />
            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
          </form>
          <DropdownSelect id={"offices"} options={["All Offices"]} />
          <DropdownSelect id={"job-titles"} options={["All Job Titles"]} />
          <DropdownSelect id={"status"} options={["All Status"]} />
        </div>

        <div className="relative  sm:rounded-lg pb-5 mt-3">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-x uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-3 justify-between">
                    <div className="flex gap-3">
                      {" "}
                      <CheckBox />
                      Employee Name
                    </div>
                    <HiArrowsUpDown className="" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center justify-between">
                    Job Title
                    <HiArrowsUpDown />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center justify-between">
                    Line Manager
                    <HiArrowsUpDown />
                  </div>{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center justify-between">
                    Department
                    <HiArrowsUpDown />
                  </div>{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center justify-between">
                    Office
                    <HiArrowsUpDown />
                  </div>{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  Employee Status
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center justify-between">
                    Account
                    <HiArrowsUpDown />
                  </div>{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {employee.map((employee, idx) => (
                <tr
                  key={idx}
                  className="odd:bg-white  even:bg-gray-5 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap dark:text-black flex justify-normal gap-1 items-center"
                  >
                    <CheckBox />
                    <Image
                      src="leo.svg"
                      width={30}
                      height={30}
                      alt={employee.name}
                    />
                    {employee.name}
                  </th>
                  <td className="px-6 py-4">{employee.jobTitle}</td>
                  <td className="px-6 py-4">{employee.lineManager}</td>
                  <td className="px-6 py-4">{employee.department}</td>
                  <td className="px-6 py-4">{employee.office}</td>
                  <td className={`px-6 py-4  `}>
                    <p
                      className={`p-2 text-white !w-24 text-center uppercase font-semibold text-xs rounded ${
                        employee.employeeStatus === "active"
                          ? "bg-green-600"
                          : employee.employeeStatus === "onboarding"
                          ? "bg-yellow-600"
                          : employee.employeeStatus === "onleave"
                          ? "bg-gray-600"
                          : "bg-blue-700"
                      } `}
                    >
                      {" "}
                      {employee.employeeStatus}
                    </p>
                  </td>
                  <td className="px-6 py-4">{employee.account}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
