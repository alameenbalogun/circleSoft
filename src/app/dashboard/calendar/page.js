import PageLayout from "@/src/components/PageLayout";

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
