"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { FaMale, FaFemale } from "react-icons/fa";
// import PageLayout from "@/components/PageLayout";
import JobCard from "@/src/components/JobCard";
import Image from "next/image";
import PageLayout from "@/src/components/PageLayout";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "@/src/components/Spinner";
import { useState } from "react";
import { PaginationControls } from "@/src/resuable/Paginations";
import { fetchAllEmployees, fetchEmployees } from "@/src/lib/employees";

// const fetchEmployees = async ({ queryKey }) => {
//   const [_key, page] = queryKey;
//   const USERS_PER_PAGE = 10;
//   const skip = (page - 1) * USERS_PER_PAGE;
//   const res = await axios.get(
//     `https://dummyjson.com/users?limit=${USERS_PER_PAGE}&skip=${skip}`
//   );
//   return res.data;
// };

// const fetchAllEmployees = async () => {
//   const res = await axios.get("https://dummyjson.com/users?limit=208");
//   return res.data;
// };

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ["employees", currentPage],
    queryFn: fetchEmployees,
    keepPreviousData: true,
  });

  const {
    data: allData,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useQuery({
    queryKey: ["allEmployees"],
    queryFn: fetchAllEmployees,
  });

  const genderCounts = allData?.users?.reduce(
    (acc, employee) => {
      if (employee.gender === "female") {
        acc.female += 1;
      } else if (employee.gender === "male") {
        acc.male += 1;
      }
      return acc;
    },
    { female: 0, male: 0 }
  );

  const total = genderCounts?.female + genderCounts?.male;
  const femalePercentage = ((genderCounts?.female / total) * 100).toFixed(1);
  const malePercentage = ((genderCounts?.male / total) * 100).toFixed(1);

  const data1 = [
    { month: "Jan", view: 45, applied: 15 },
    { month: "Feb", view: 60, applied: 20 },
    { month: "Mar", view: 70, applied: 20 },
    { month: "Apr", view: 55, applied: 20 },
    { month: "May", view: 40, applied: 15 },
    { month: "Jun", view: 55, applied: 15 },
    { month: "Jul", view: 62, applied: 18 },
    { month: "Aug", view: 75, applied: 15 },
    { month: "Sep", view: 60, applied: 30 },
    { month: "Oct", view: 55, applied: 25 },
    { month: "Nov", view: 45, applied: 15 },
    { month: "Dec", view: 75, applied: 10 },
  ];

  const data2 = [
    { name: "Female", value: parseFloat(femalePercentage) },
    { name: "Male", value: parseFloat(malePercentage) },
  ];

  const COLORS = ["#16C098", "#5932EA"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.75;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 20;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - 10;
    const icon =
      index === 0 ? <FaMale color="#16C098" /> : <FaFemale color="#5932EA" />;

    return (
      <foreignObject x={x} y={y} width={60} height={24}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="flex items-center justify-center gap-1 text-[11px] font-semibold text-black bg-[#ECEEF6] shadow-md rounded px-2 py-[2px]"
        >
          {icon} {(percent * 100).toFixed(0)}%
        </div>
      </foreignObject>
    );
  };

  return (
    <PageLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 xl:!gap-10 mb-16">
        <JobCard
          title="Total Employees"
          icon="/tradeSignal.svg"
          percentage={10.0}
          number={856}
          description="Employee"
        />
        <JobCard
          title="Job Views"
          icon="/tradeSignal.svg"
          percentage={22.0}
          number={3342}
          description="Viewers"
        />
        <JobCard
          title="Job Applied"
          icon="/tradeSignal.svg"
          percentage={12.0}
          number={77}
          description="Applicants"
        />
        <JobCard
          title="Resigned Employees"
          icon="/tradeRed.svg"
          percentage={7.0}
          number={856}
          description="Employee"
          bgColor="#C10A0A26"
          color="#C71026"
        />
      </div>

      <div className="shadow-sm bg-white mt-6 h-[50vh] rounded pb-10 !p-5 mb-16">
        <div className="flex justify-between items-center mb-4 p-4 px-6">
          <h2 className="text-xl font-semibold">Job Statistics</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="h-4 w-4 bg-[#F2EFFF]"></div>
              <p className="text-[14px]">Job View</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-4 w-4 bg-[#5932EA]"></div>
              <p className="text-[14px]">Job Applied</p>
            </div>
            <button className="text-sm text-gray-600 border px-2 py-1 rounded-md">
              This Month ▼
            </button>
          </div>
        </div>

        <ResponsiveContainer width="100%" height="85%">
          <BarChart
            data={data1}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barSize={40}
            barGap={20}
            barCategoryGap="100%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="view" stackId="a" fill="#5932EA" />
            <Bar dataKey="applied" stackId="a" fill="#F2EFFF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid sm:grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 w-full">
        <div className="bg-white shadow-md py-5 px-6 pb-10 rounded-[6px]">
          <div className="flex items-center justify-between mb-10">
            <h1 className="font-bold text-[#343434] text-[14px] mt-4">
              Employee Status
            </h1>
            <div className="flex items-center rounded-md gap-1 bg-white shadow-md p-2">
              <p className="text-[12px] font-bold text-[#1A2B88]">
                Filter & Short
              </p>
              <img src="/filter.svg" alt="Filter" width={15} />
            </div>
          </div>

          <div className="relative overflow-x-auto overflow-y-auto h-100  sm:rounded-lg pb-5">
            {isLoading ? (
              <div className="flex justify-center items-center h-full w-full">
                <Spinner />
              </div>
            ) : error ? (
              <p className="bg-red-500">{error}</p>
            ) : data?.users?.length > 0 ? (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      Employee Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Department
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Discipline
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.users?.map((employee, idx) => (
                    <tr
                      key={idx}
                      className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-gray-200 text-center"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-1 items-center justify-start"
                      >
                        <Image
                          src={employee?.image}
                          width={30}
                          height={30}
                          alt={employee?.image}
                        />
                        {employee.firstName + " " + employee.lastName}
                      </th>
                      <td className="px-6 py-4 text-center">
                        {employee?.company?.department}
                      </td>
                      <td className="px-6 py-4 text-center">{employee.age}</td>
                      <td className="px-6 py-4 text-center">
                        {employee.company.title}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <p
                          className={`p-2 text-white !w-24 text-center font-semibold text-xs rounded ${
                            employee.role === "admin"
                              ? "bg-green-600"
                              : employee.role === "moderator"
                              ? "bg-yellow-600"
                              : "bg-blue-700"
                          }`}
                        >
                          {employee.role}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No data found</p>
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
        {/* pie chart */}
        <div className="shadow-md bg-white p-2 px-6 rounded-[6px] w-full">
          <h1 className="font-bold text-[#343434] text-[14px] mt-5">
            Employee Composition
          </h1>
          <div className="w-full h-[400px] object-cover scale-100 md:scale-125 lg:scale-130 xl:scale-150 2xl:scale-210">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data2}
                  innerRadius={50}
                  outerRadius={70}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  paddingAngle={3}
                  label={renderCustomizedLabel}
                >
                  {data2.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <h1 className="text-[#1A2B88] font-semibold text-center">
            {allData?.users?.length} Total Employee
          </h1>
        </div>
      </div>
    </PageLayout>
  );
}
