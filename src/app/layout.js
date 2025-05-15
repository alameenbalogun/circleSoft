import ReactQueryProvider from "@/react-query-provider";
import "./globals.css";

export const metadata = {
  title: "KorrEdge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
