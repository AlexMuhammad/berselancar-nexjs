import React from "react";
export const metadata = {
  title: "Settings",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Khusus Settings aja yang gan </p>
      {children}
    </div>
  );
}
