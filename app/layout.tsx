"use client";
import Link from "next/link";
import "../styles/globals.css";

import { useRouter } from "next/navigation";

export const metadata = {
  title: "Home",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const router = useRouter();
  const menuItem = (url: string, title: string, className?: string) => (
    <div className={`bg-black text-white py-2 px-3 rounded-lg ${className}`}>
      <Link href={url}>{title}</Link>
    </div>
  );
  // const onClickHandler = (url: string) => {
  //   router.push(url);
  // };
  return (
    <html lang="en">
      <body className="container mx-auto py-[10px]">
        <div className="inline-flex w-full">
          {menuItem("/", "Home", "bg-white text-red-400 font-bold text-2xl px-0 py-0")}
          <div className="inline-flex justify-end space-x-3 w-full">
            {menuItem("/dashboard", "Dashboard")}
            {menuItem("/settings", "Settings")}
            {menuItem("/cari", "Cari Orang")}
            {/* <li className="bg-black text-white py-2 px-3">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/cari">Cari Orang</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li> */}
          </div>
        </div>
        {/* <li onClick={() => onClickHandler("/settings")}>Settings</li> */}
        {children}
      </body>
    </html>
  );
}
