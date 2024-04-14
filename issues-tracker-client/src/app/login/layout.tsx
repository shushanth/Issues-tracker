import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Issues tracker sign in",
  description: "Issue tracker app, which tracks issues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="login-layout flex flex-col m-8 p-8">{children}</div>;
}
