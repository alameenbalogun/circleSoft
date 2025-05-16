"use client";

import PageLayout from "@/src/components/PageLayout";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { HiMiniPlus } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
// import Image from "next/image";
// import employee from "@/src/json/employee.json";
// import CheckBox from "@/src/components/button/Checkbox";
// import { HiArrowsUpDown } from "react-icons/hi2";
import { Button } from "@/src/components/ui/button";
import { ComboBox } from "@/src/resuable/ComboBox";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "@/src/lib/employees";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import Spinner from "@/src/components/Spinner";
import { PaginationControls } from "@/src/resuable/Paginations";
import { useRouter } from "next/navigation";

const jobOptions = [
  { value: "frontend_developer", label: "Frontend Developer" },
  { value: "backend_developer", label: "Backend Developer" },
  { value: "devops", label: "Devops" },
  { value: "ui_ux", label: "UI/UX" },
  { value: "finance", label: "Finance" },
];

const officeOptions = [
  { value: "technology", label: "Technology" },
  { value: "admin", label: "Admin" },
  { value: "sales", label: "Sales" },
  { value: "enterprise", label: "Enterprise" },
  { value: "infastructure", label: "Infrastructure" },
];

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "on_leave", label: "Leave" },
  { value: "onboarding", label: "Onboarding" },
  { value: "probation", label: "Probation" },
  { value: "suspended", label: "Suspended" },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  // const [selected, setSelected] = useState("");
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedOffice, setSelectedOffice] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["employees", currentPage],
    queryFn: fetchEmployees,
  });

  const router = useRouter();

  const filteredEmployees = data?.users?.filter((employee) => {
    if (!searchTerm) return true;
    const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();

    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <PageLayout>
      <div className="bg-white shadow-sm p-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl text-black font-extrabold leading-normal uppercase">
              Employees
            </h1>
            <p className="text-gray-500 text-sm">Manage your employees</p>
          </div>

          <div className="flex justify-start items-center gap-3">
            <Button variant="outline" size="lg">
              <LiaFileDownloadSolid className="w-5 h-5 object-cover" />
              Download
            </Button>
            <Button className="bg-[#020752] text-white" size="lg">
              <HiMiniPlus className="w-5 h-5 object-cover" />
              Add New
            </Button>
          </div>
        </div>

        {/* Select Options */}
        <div className="flex gap-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Employee"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full pr-10 "
            />
            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6" />
          </div>
          <ComboBox
            options={officeOptions}
            value={selectedOffice}
            onChange={setSelectedOffice}
            placeholder="All Offices"
          />
          <ComboBox
            options={jobOptions}
            value={selectedJob}
            onChange={setSelectedJob}
            placeholder="All Job Titles"
          />
          <ComboBox
            options={statusOptions}
            value={selectedStatus}
            onChange={setSelectedStatus}
            placeholder="All Status"
          />
          <Button
            className="bg-green-700 h-11 text-white font-semibold"
            size="lg"
          >
            Submit
          </Button>
        </div>

        <div className="relative pb-5 mt-10 overflow-x-auto overflow-y-auto  ">
          {isLoading ? (
            <div className="w-full h-full items-center justify-center">
              <Spinner />
            </div>
          ) : error ? (
            <p className="bg-red-300 text-red-500">{error}</p>
          ) : filteredEmployees?.length > 0 ? (
            <Table className="text-gray-600 border">
              <TableHeader>
                <TableRow className="!px-10 border-gray-600 bg-gray-100 ">
                  <TableHead className="font-semibold border-r text-center">
                    Employee Name
                  </TableHead>
                  <TableHead className="font-semibold border-r text-center">
                    Job Title
                  </TableHead>
                  <TableHead className="font-semibold border-r text-center">
                    Line Manager
                  </TableHead>
                  <TableHead className="font-semibold border-r text-center">
                    Department
                  </TableHead>
                  <TableHead className="font-semibold border-r text-center">
                    Office
                  </TableHead>
                  <TableHead className="font-semibold border-r text-center">
                    Employee Status
                  </TableHead>
                  <TableHead className="font-semibold text-center">
                    Account
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEmployees?.map((employee) => (
                  <TableRow
                    key={employee.id}
                    className="border-gray-300 cursor-pointer hover:bg-gray-50"
                    onClick={() =>
                      router.push(`/dashboard/employee/${employee.id}`)
                    }
                  >
                    <TableCell className="font-medium border-r text-center">
                      {employee.firstName} {employee.lastName}
                    </TableCell>
                    <TableCell className="border-r text-center">
                      {employee?.company?.title}
                    </TableCell>
                    <TableCell className="border-r text-center">
                      {employee?.company?.name}
                    </TableCell>
                    <TableCell className="border-r text-center">
                      {employee?.company?.department}
                    </TableCell>
                    <TableCell className="border-r text-center">
                      {employee?.address?.city}
                    </TableCell>
                    <TableCell className="flex justify-center border-r ">
                      <p
                        className={`${
                          employee?.role === "admin"
                            ? `bg-[#4286f45d] text-[#4286f4]`
                            : employee?.role === "moderator"
                            ? "bg-[#99f2c8] text-[#1f4037]"
                            : employee?.role === "user"
                            ? "bg-[#cbb4d4] text-[#20002c]"
                            : "bg-red-100 text-red-600"
                        } flex justify-center items-center py-1 rounded font-semibold uppercase w-3/4 text-xs `}
                      >
                        {employee?.role === "admin"
                          ? "active"
                          : employee?.role === "moderator"
                          ? "Probation"
                          : employee?.role === "user"
                          ? "On Boarding"
                          : "On leave"}
                      </p>
                    </TableCell>
                    <TableCell className="">
                      {employee?.gender === "female"
                        ? "Activated"
                        : "Need Activation"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-red-500">No employee found!</p>
          )}
        </div>
        <div className="mt-5 mr-auto">
          <PaginationControls
            total={data?.total}
            limit={data?.limit}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </PageLayout>
  );
}
