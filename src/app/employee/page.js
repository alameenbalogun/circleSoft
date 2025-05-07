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
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl text-black font-extrabold leading-normal uppercase">
              Employees
            </h1>
            <p className="text-gray-500 text-sm">Manage your employees</p>
          </div>

          <div className="flex justify-start items-center gap-3">
            <button className="text-black cursor-pointer hover:bg-gray-700 hover:text-white border-gray-700 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-100 dark:hover:bg-gray-300 dark:focus:ring-gray-100 gap-1 ">
              <LiaFileDownloadSolid className="w-5 h-5 object-cover" />
              Download
            </button>
            <button className="text-white cursor-pointer fo border border-transparent bg-gray-700 hover:text-gray-700 hover:bg-white hover:border-2 hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-1">
              <HiMiniPlus className="w-5 h-5 object-cover" />
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

        <div className="relative pb-5 mt-3 overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-x uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3 font-semibold">
                  <div className="flex items-center gap-3 justify-normal">
                    <div className="flex gap-3">
                      {" "}
                      <CheckBox />
                      Employee Name
                    </div>
                    <HiArrowsUpDown className="" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 font-semibold text-center">
                  <div className="flex items-center justify-normal gap-3">
                    Job Title
                    <HiArrowsUpDown />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 font-semibold">
                  <div className="flex items-center justify-normal gap-3">
                    Line Manager
                    <HiArrowsUpDown />
                  </div>{" "}
                </th>
                <th scope="col" className="px-6 py-3 font-semibold">
                  <div className="flex items-center justify-normal gap-3">
                    Department
                    <HiArrowsUpDown />
                  </div>{" "}
                </th>
                <th scope="col" className="px-6 py-3 font-semibold">
                  <div className="flex items-center justify-normal gap-3">
                    Office
                    <HiArrowsUpDown />
                  </div>{" "}
                </th>
                <th scope="col" className="px-6 py-3 font-semibold">
                  Employee Status
                </th>
                <th scope="col" className="px-6 py-3 font-semibold">
                  <div className="flex items-center justify-normal gap-3">
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
                  <td
                    scope="row"
                    className="px-6 py-4  whitespace-nowrap dark:text-black flex justify-normal gap-1 items-center"
                  >
                    <CheckBox />
                    <Image
                      src="leo.svg"
                      width={30}
                      height={30}
                      alt={employee.name}
                    />
                    {employee.name}
                  </td>
                  <td className="px-6 py-4">{employee.jobTitle}</td>
                  <td className="px-6 py-4">{employee.lineManager}</td>
                  <td className="px-6 py-4">{employee.department}</td>
                  <td className="px-6 py-4">{employee.office}</td>
                  <td className={`px-6 py-4  `}>
                    <p
                      className={`p-2 text-white w-3/4 text-center uppercase font-semibold text-xs rounded ${
                        employee.employeeStatus === "active"
                          ? "bg-green-500"
                          : employee.employeeStatus === "onboarding"
                          ? "bg-yellow-500"
                          : employee.employeeStatus === "onleave"
                          ? "bg-gray-500"
                          : "bg-blue-500"
                      } `}
                    >
                      {" "}
                      {employee.employeeStatus}
                    </p>
                  </td>
                  <td className="px-6 py-4 capitalize">{employee.account}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
