import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    template: "%s / Arbitrans",
    default: "Arbitrans - Rental Kendaraan Purwokerto",
  },
  description:
    "Tempat rental penyewaan kendaraan paling terpercaya di Purwokerto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased bg-netral-100`}>
        {children}
      </body>
    </html>
  );
}
