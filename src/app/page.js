"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FaMale, FaFemale } from "react-icons/fa";
import PageLayout from "../components/PageLayout";
import JobCard from "../components/JobCard";

export default function Page() {
  const data = [
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
    { name: "Female", value: 65 },
    { name: "Male", value: 35 },
  ];

  const COLORS = ["#16C098", "#5932EA"];

  const RADIAN = Math.PI / 180;

  // Custom label renderer to place icon + text in center of each slice
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

    const x = cx + radius * Math.cos(-midAngle * RADIAN) - 20; // Shift left a bit
    const y = cy + radius * Math.sin(-midAngle * RADIAN) - 10; // Shift up a bit

    const color = index === 0 ? "#16C098" : "#5932EA";
    const icon =
      index === 0 ? <FaMale color="#16C098" /> : <FaFemale color="#5932EA" />; // Can be replaced with emojis or icons

    return (
      <foreignObject x={x} y={y} width={60} height={24}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className="flex items-center justify-center gap-1 text-[11px] font-semibold text-black bg-[#ECEEF6] shadow-md rounded px-2 py-[2px]"
          // style={{ color }}
        >
          {icon} {(percent * 100).toFixed(0)}%
        </div>
      </foreignObject>
    );
  };

  return (
    <PageLayout>
      <div className="grid grid-cols-4 gap-8">
        <JobCard
          title={" Total Employees"}
          icon={"/tradeSignal.svg"}
          percentage={10.0}
          number={856}
          description={"Employee"}
        />
        <JobCard
          title={"Total Job Views"}
          icon={"/tradeSignal.svg"}
          percentage={22.0}
          number={3_342}
          description={"Viewers"}
        />
        <JobCard
          title={"Total Job Applied"}
          icon={"/tradeSignal.svg"}
          percentage={12.0}
          number={77}
          description={"Applicants"}
        />
        <JobCard
          title={"Total Resigned Employee"}
          icon={"/tradeRed.svg"}
          percentage={7.0}
          number={856}
          description={"Employee"}
          bgColor={"#C10A0A26"}
          color={"#C71026"}
        />
      </div>

      <div className="shadow-sm bg-white mt-4">
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

        {/* <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis ticks={[20, 40, 60, 80, 100, 120, 140, 160, 180]} />
            <Tooltip />
            <Bar dataKey="view" stackId="a" fill="#5932EA" />
            <Bar dataKey="applied" stackId="a" fill="#F2EFFF" />
            </BarChart>
            </ResponsiveContainer> */}

        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            width={50}
            height={100}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={40}
            barGap={20}
            barCategoryGap={"100%"}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="view" stackId="a" fill="#5932EA" />
            <Bar dataKey="applied" stackId="a" fill="#F2EFFF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="shadow-md mt-6 grid grid-cols-[2fr_1fr] gap-4">
        <div className=" bg-white shadow-md p-2 px-6">
          <div className="flex items-center justify-between  p-2">
            <h1 className="font-bold text-[#343434] text-[14px] mt-4">
              Employee Status
            </h1>
            <div className="flex items-center rounded-md gap-1 bg-[#F6F6F6] shadow-md p-2">
              <p className="text-[12px] font-bold text-[#1A2B88]">
                Filter & Short
              </p>
              <img src="/filter.svg" alt="Filter" width={15} />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2 p-2 mt-2 text-[#949494] text-[12px]">
            <p>Employee Name</p>
            <p>Department</p>
            <p>Age</p>
            <p>Discipline</p>
            <p>Status</p>
          </div>
          <div className="grid grid-cols-5 p-2 text-[11px] gap-2 items-center font-bold">
            <div className="flex items-center gap-1">
              <img src="justin.svg" alt="Justin" width={30} />
              <h1>Justin Lipshutz</h1>
            </div>
            <h1>Marketing</h1>
            <h1>22</h1>
            <h1>
              <span className="text-[#16C098] text-[12px] font-extrabold">
                +
              </span>
              100%
            </h1>
            <h1 className="bg-[#16C09833] p-2 w-[80px] text-[#16C098]  rounded-md">
              Permanent
            </h1>
          </div>
          <div className="grid grid-cols-5 gap-2 p-2 text-[11px] items-center font-bold">
            <div className="flex items-center gap-1">
              <img src="justin.svg" alt="Justin" width={30} />
              <h1>Marcus Culhane</h1>
            </div>
            <h1>Fianance</h1>
            <h1>24</h1>
            <h1>
              <span className="text-[#16C098] text-[12px] font-extrabold">
                +
              </span>
              95%
            </h1>
            <h1 className="bg-[#AFAFAF33] p-2 text-[#16C098] w-[80px] rounded-md">
              Contract
            </h1>
          </div>
          <div className="grid grid-cols-5 p-2 gap-2 text-[12px] items-center font-bold">
            <div className="flex items-center gap-1">
              <img src="leo.svg" alt="leo" width={30} />
              <h1>Leo Stanturn</h1>
            </div>
            <h1>R&D</h1>
            <h1>28</h1>
            <h1>
              <span className="text-[#16C098] text-[12px] font-extrabold">
                +
              </span>
              89%
            </h1>
            <h1 className="bg-[#16C09833] p-2 text-[#16C098] inline-block rounded-md w-[80px]">
              Permanent
            </h1>
          </div>
        </div>
        <div className="shadow-md bg-white p-2 px-6">
          <h1 className="font-bold text-[#343434] text-[14px] mt-5">
            Employee Composition
          </h1>
          <ResponsiveContainer width="100%" height={200}>
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

          <h1 className="text-[#949494] text-center  ">856 Total Employee</h1>
        </div>
      </div>
    </PageLayout>
  );
}
