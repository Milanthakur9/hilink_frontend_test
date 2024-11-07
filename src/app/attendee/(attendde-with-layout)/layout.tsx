import AttendeeHeader from "@/components/header/AttendeeHeader";
import "../../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AttendeeHeader />
      {children}
    </div>
  );
}
