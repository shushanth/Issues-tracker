import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issues tracker App",
  description: "Issue tracker app, which tracks issues",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="layout-header p-5 m-5 shadow-indigo-100 flex flex-col">
          <h1 className="text-3xl font-semibold tracking-wider">
            Issues Tracker
          </h1>
        </div>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;
