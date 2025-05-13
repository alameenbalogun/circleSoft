import "./globals.css";

export const metadata = {
  title: "Circle Soft",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
