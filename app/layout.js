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
        <div className="grid grid-cols-[auto_1fr]">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
