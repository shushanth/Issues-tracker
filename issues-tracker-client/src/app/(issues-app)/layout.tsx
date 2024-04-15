import Navigation from "./ui/navigation/navigation";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default RootLayout;
