import EventInfoFooter from "@/components/footer/EventInfoFooter";
import "../../../../app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <EventInfoFooter />
    </div>
  );
}
