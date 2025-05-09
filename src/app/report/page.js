import PageLayout from "@/src/components/PageLayout";
import ReportCard from "@/src/components/ReportCard";
import { reportData } from "@/src/json/reportData";

export default function Page() {
  return (
    <PageLayout>
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-9xl mx-auto">
          <h1 className="text-2xl font-semibold text-black">Report</h1>
          <p className="text-gray-500 mb-8">Here's report so far</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {reportData.map((item,index)=> (
                <ReportCard key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
