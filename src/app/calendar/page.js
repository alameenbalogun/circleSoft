import Header from "../_compponents/Header";
import PageLayout from "@/src/components/PageLayout";
import SideBar from "../_compponents/Sidebar";

export default function Page() {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const day = date.getDate();
  return (
    <PageLayout>
      Calendar here... Today is {day} {month} {year}
    </PageLayout>
  );
}
