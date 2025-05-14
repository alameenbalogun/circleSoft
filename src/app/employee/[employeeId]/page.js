import PageLayout from "@/src/components/PageLayout";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { GoPencil, GoPlus } from "react-icons/go";
import { MdDelete, MdOutlineSimCardDownload } from "react-icons/md";
import Link from "next/link";
import employee from "@/src/json/employee.json";

// const employeeDetail = {
//   name: "Justin Lipshutz",
//   department: "Marketing",
//   age: 22,
//   growth: "+100%",
//   employmentType: "Permanent",
//   avatar: "justin.svg",
//   jobTitle: "UI/UX Designer",
//   lineManager: "@Pristucandro",
//   office: "Tech",
//   employeeStatus: "active",
//   account: "activated",
// };

export default function Page({ params }) {
  console.log(params);

  const employeeDetails = employee[params.employeeId];

  return (
    <PageLayout>
      <div className="flex items-center gap-2">
        <Link href="/employee">
          {" "}
          <IoIosArrowBack className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold">Detail Employee</h1>
      </div>

      <div className="mt-6 flex  gap-6 h-auto">
        <div className="flex flex-col  bg-white gap-4 p-8 h-[65vh] rounded-md">
          <div className="flex flex-col items-center">
            {" "}
            <Image
              src={`/${employeeDetails.avatar}`}
              className="rounded-full"
              width={300}
              height={100}
              alt={employeeDetails.name}
            />
            <h1 className="-mt-12 text-2xl font-bold">
              {employeeDetails.name}
            </h1>
            <p className="text-lg">{employeeDetails.jobTitle}</p>
            {/* Dropdown for selecting panel position */}
          </div>
          <hr />
          <div className="flex flex-col gap-4">
            <p className="flex gap-2 items-center">
              <MdOutlineMailOutline className="w-5 h-5" />
              {" " + employeeDetails.name}
            </p>
            <p className="flex gap-2 items-center">
              <MdOutlineLocalPhone className="w-5 h-5" />
              {" " + "000111"}
            </p>
            <p className="flex gap-2 items-center">
              <TfiWorld className="w-5 h-5" />
              {" " + "GMT +7:00"}
            </p>

            <hr />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              {" "}
              <p className="text-sm text-gray-500">Department</p>
              <p>{employeeDetails.department}</p>
            </div>
            <div className="flex justify-between">
              {" "}
              <p className="text-sm text-gray-500">Line Manager</p>
              <p>{employeeDetails.lineManager}</p>
            </div>

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full text-lg"
              type="button"
            >
              Action
              {/* <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg> */}
            </button>

            {/* <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="bg-white w-full rounded-md p-8">
          <Tabs defaultValue="general">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger className="cursor-pointer" value="general">
                General
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="job">
                Job
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="payroll">
                Payroll
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="document">
                Document
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="setting">
                Settings
              </TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div className="flex flex-col rounded-md shadow-md p-3">
                <div className="h-20 items-center border-b-2 p-4 border-b-gray-200 flex justify-between">
                  <div className="flex justify-between items-center w-full ">
                    <h1 className="text-lg font-bold">Personal Info</h1>
                    <div>
                      <GoPencil className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-6 p-4">
                    <div className="col-span-2 flex flex-col gap-3">
                      <h1>FullName</h1>
                      <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                        <p className="text-lg uppercase">
                          {employeeDetails.name}
                        </p>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <h1>Gender</h1>
                      <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                        <p className="text-lg">{employeeDetails.name}</p>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <h1>Date of Birth</h1>
                      <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                        <p className="text-lg">{employeeDetails.name}</p>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <h1>
                        Email Address <br />
                        Nationality{" "}
                      </h1>
                      <div className="rounded-md flex flex-col  p-4 w-full shadow-sm">
                        <p className="text-lg">{employeeDetails.name}</p>
                        <p className="text-lg">{employeeDetails.name}</p>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <h1>
                        Phone Number <br />
                        Healthcare{" "}
                      </h1>
                      <div className="rounded-md flex flex-col  p-4 w-full shadow-sm">
                        <p className="text-lg">{employeeDetails.name}</p>
                        <p className="text-lg">{employeeDetails.name}</p>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <h1>Marital Status</h1>
                      <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                        <p className="text-lg">{employeeDetails.name}</p>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <h1>Personal Tax ID</h1>
                      <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                        <p className="text-lg">{employeeDetails.name}</p>
                      </div>
                    </div>
                    <div className="col-span-2">
                      {" "}
                      <h1>Social Insurance</h1>
                      <div className="rounded-md flex  p-4 w-full shadow-sm">
                        <p className="text-lg">{employeeDetails.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="job">
              <div className="flex flex-col gap-6">
                <div className="rounded-md shadow-md p-4">
                  <div className="h-20 items-center border-b-2 p-4 border-b-gray-200 flex justify-between">
                    <div className="flex justify-between items-center w-full ">
                      <h1 className="text-lg font-bold">
                        Employment Information
                      </h1>
                      <div>
                        <GoPencil className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex gap-10">
                      <p className="text-gray-700">employeeDetails ID</p>
                      <p className="font-semibold">{employeeDetails.name}</p>
                    </div>
                    <div className="flex gap-10">
                      <p className="text-gray-700">Service Year</p>
                      <p className="font-semibold">{employeeDetails.name}</p>
                    </div>
                    <div className="flex gap-10">
                      <p className="text-gray-700">Joining Date</p>
                      <p className="font-semibold">{employeeDetails.name}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-md shadow-md p-4">
                  <div className="h-20 items-center border-b-2 p-4 border-b-gray-200 flex justify-between">
                    <div className="flex justify-between items-center w-full ">
                      <h1 className="text-lg font-bold">Job Timeline</h1>
                      <div>
                        <GoPlus className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="relative pb-5 mt-3 overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right">
                      <thead className="text-x uppercase bg-gray-50 ">
                        <tr>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Effective Date
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Job Title
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Position Type
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Employment Type
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Line Manager
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white  even:bg-gray-5 border-gray-200">
                          <td className="px-6 py-4">{employeeDetails.name}</td>
                          <td className="px-6 py-4">
                            {employeeDetails.department}
                          </td>
                          <td className="px-6 py-4">
                            {employeeDetails.office}
                          </td>
                          <td className="px-6 py-4">
                            {employeeDetails.office}
                          </td>
                          <td className="px-6 py-4">
                            {employeeDetails.lineManager}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="rounded-md shadow-md p-4">
                  <div className="h-20 items-center border-b-2 p-4 border-b-gray-200 flex justify-between">
                    <div className="flex justify-between items-center w-full ">
                      <h1 className="text-lg font-bold">Contract Timeline</h1>
                      <div>
                        <GoPlus className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="relative pb-5 mt-3 overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right">
                      <thead className="text-x uppercase bg-gray-50 ">
                        <tr>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Contract Number
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Contract Name
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Contract Type
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Start Date
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            End Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white  even:bg-gray-5 border-gray-200">
                          <td className="px-6 py-4">{employeeDetails.name}</td>
                          <td className="px-6 py-4">
                            {employeeDetails.department}
                          </td>
                          <td className="px-6 py-4">
                            {employeeDetails.office}
                          </td>
                          <td className="px-6 py-4">
                            {employeeDetails.office}
                          </td>
                          <td className="px-6 py-4">
                            {employeeDetails.lineManager}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="payroll">
              <div className="flex flex-col gap-6 rounded-md shadow-md p-4">
                <div className="flex justify-between">
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex gap-10">
                      <p className="text-gray-700">employee Status</p>
                      <p className="font-semibold capitalize">
                        {employeeDetails.employeeStatus}
                      </p>
                    </div>
                    <div className="flex gap-10">
                      <p className="text-gray-700">Employment Type</p>
                      <p className="font-semibold">
                        {employeeDetails.employmentType}
                      </p>
                    </div>
                    <div className="flex gap-10">
                      <p className="text-gray-700">Geofencing</p>
                      <p className="font-semibold">{employeeDetails.name}</p>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-4">
                    <div className="flex gap-10">
                      <p className="text-gray-700">Job Title</p>
                      <p className="font-semibold">
                        {employeeDetails.jobTitle}
                      </p>
                    </div>
                    <div className="flex gap-10">
                      <p className="text-gray-700">Job Date</p>
                      <p className="font-semibold">{employeeDetails.name}</p>
                    </div>
                    <div className="flex gap-10">
                      <p className="text-gray-700">Last Working Date</p>
                      <p className="font-semibold">{}</p>
                    </div>
                  </div>
                </div>
                <div className="h-20 p-4 flex justify-between rounded-md items-center bg-gray-200">
                  <h1 className="font-bold text-lg">Total Compensation</h1>
                  <p>$ {11222222222222}</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                    <p className="text-lg">Salary</p>
                  </div>
                  <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                    <p className="text-lg">Recurring</p>
                  </div>
                  <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                    <p className="text-lg">One-off</p>
                  </div>
                  <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                    <p className="text-lg">Offset</p>
                  </div>
                  <div className="rounded-md flex items-center p-4 w-full shadow-sm">
                    <p className="text-lg">Offset</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="document">
              <div className="rounded-md shadow-md p-4 flex flex-col gap-6">
                <div className="h-20 items-center border-b-2 p-4 border-b-gray-200 flex justify-between">
                  <div className="flex justify-between items-center w-full ">
                    <h1 className="text-lg font-bold">Personal Documents</h1>
                    <div>
                      <GoPlus className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                <div className="h-90 flex items-center justify-center p-4">
                  {/* <p className="mb-20 text-center">
                    Drag and Drop Some files here
                  </p> */}
                  <input type="file" />
                </div>

                <div className="rounded-md shadow-md p-4">
                  <div className="h-20 items-center border-b-2 p-4 border-b-gray-200 flex justify-between">
                    <div className="flex justify-between items-center w-full ">
                      <h1 className="text-lg font-bold">Personal Document</h1>
                      <div>
                        <GoPlus className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="relative pb-5 mt-3 overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right">
                      <thead className="text-x uppercase bg-gray-50 ">
                        <tr>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Document Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 font-semibold"
                          ></th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white  even:bg-gray-5 border-gray-200">
                          <td className="px-6 py-4">{employeeDetails.name}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <MdOutlineSimCardDownload className="w-6 h-6" />
                              <MdDelete className="w-6 h-6" />
                            </div>
                          </td>
                          <td className="px-6 py-4">{employeeDetails.name}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="rounded-md shadow-md p-4">
                  <div className="h-20 items-center border-b-2 p-4 border-b-gray-200 flex justify-between">
                    <div className="flex justify-between items-center w-full ">
                      <h1 className="text-lg font-bold">Pay Slip</h1>
                      <div>
                        <GoPlus className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="relative pb-5 mt-3 overflow-x-auto overflow-y-auto  shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right">
                      <thead className="text-x uppercase bg-gray-50 ">
                        <tr>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Document Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 font-semibold"
                          ></th>
                          <th scope="col" className="px-6 py-3 font-semibold">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white  even:bg-gray-5 border-gray-200">
                          <td className="px-6 py-4">{employeeDetails.name}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <MdOutlineSimCardDownload className="w-6 h-6" />
                              <MdDelete className="w-6 h-6" />
                            </div>
                          </td>
                          <td className="px-6 py-4">{employeeDetails.name}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="setting"></TabsContent>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
}
