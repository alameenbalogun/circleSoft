import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "Circle Soft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-[#f8f8f8] w-full overflow-hidden">
        <Header />
        <div className="flex justify-normal items-start w-full h-dvh">
          <div className="h-full w-[273px] ">
            <SideBar />
          </div>
          <div className="h-full w-full overflow-scroll pb-[41px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
