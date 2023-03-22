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
      <form onSubmit={onSearchHandler}>
        <input type="text" placeholder="Cari github..." />
        <button>Cari</button>
        {"Mencari: " + query}
      </form>
      {query && <SectionResult query={query} />}
    </div>
  );
}
