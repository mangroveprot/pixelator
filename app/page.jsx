"use client";

import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen bg-customBg text-white ">
      <h1 className="text-center">Nothing Here!!</h1>
      Go on{" "}
      <Link href="/profitCalculator" className="btn">
        Profit Calculator
      </Link>
    </div>
  );
}

export default page;
