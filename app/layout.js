import SideBar from "./_compponents/Sidebar";
import Header from "./_compponents/Header";
import "./globals.css";

export const metadata = {
  title: "Circle Soft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-[#f8f8f8]">
        <Header />
        <div className="flex justify-normal items-start w-full h-dvh">
          <div className="h-full w-1/5 ">
            <SideBar />
          </div>
          <div className="h-full w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
