"use client";
import PageLayout from "@/components/PageLayout";
import employees from "@/json/employee.json";
import DirectoryCard from "@/components/DirectoryCard";

export default function Page() {
  return (
    <PageLayout>
      <div className="px-6 py-6">
        <div className="w-full">
          <h1 className="text-2xl font-semibold mb-1">Directory</h1>
          <p className="text-sm text-gray-500 mb-6">This is director board</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
            {employees.map((e, index) => (
              <DirectoryCard key={index} {...e} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
