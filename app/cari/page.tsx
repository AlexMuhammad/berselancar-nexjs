"use client";
import React, { useState } from "react";
import SectionResult from "./sectionResult";

export default function Cari() {
  const [query, setQuery] = useState("");
  const onSearchHandler = (e: any) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };
  return (
    <div>
      <form onSubmit={onSearchHandler} className="flex w-full space-x-3 mt-10">
        <input type="text" placeholder="Cari github..." className="w-full border-zinc-400 border rounded-md px-3" />
        <button className="bg-blue-600 px-4 py-1 rounded-md text-white">Cari</button>
        {/* {"Mencari: " + query} */}
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
