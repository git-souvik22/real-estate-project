import React from "react";

export default function Header() {
  return (
    <header>
      <h1 className="font-bold text-sm sm:text-xl">
        <span className="text-slate-500">REAL</span>
        <span className="text-slate-700">Estate</span>
      </h1>
      <form>
        <input type="search" placeholder="Search..." />
      </form>
    </header>
  );
}
