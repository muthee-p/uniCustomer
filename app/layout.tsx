
import Providers from "@components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from '@components/Nav'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unicab Rides",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Nav />
          {children}
        </Providers>
      </body>
    </html>
  );
}