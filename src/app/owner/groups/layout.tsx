import "../../globals.css";
import SideBar from "./components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SideBar >
      {children}
      </SideBar>
    </div>
  );
}
