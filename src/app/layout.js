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
        <div className="flex justify-normal items-start w-full h-dvh relative">
          <div className="h-full !max-w-[15%] !w-full !overflow-hidden">
            <SideBar />
          </div>
          <div className="h-full max-w-[85%] w-full overflow-y-scroll overflow-hidden p-10 pb-24">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
