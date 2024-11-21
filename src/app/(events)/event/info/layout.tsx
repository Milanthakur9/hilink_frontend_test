import EventInfoFooter from "@/components/footer/EventInfoFooter";
import "../../../../app/globals.css";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense>
        {children}
        <EventInfoFooter />
      </Suspense>
    </div>
  );
}
