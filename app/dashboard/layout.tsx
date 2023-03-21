import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>Khusus dashboard ini mah</p>
      {children}
    </div>
  );
}
