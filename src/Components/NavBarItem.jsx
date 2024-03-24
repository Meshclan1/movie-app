"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavBarItem() {
  searchParams = useSearchParams();
  genre = searchParams.get();

  return (
    <div title="" params="">
      NavBarItem
    </div>
  );
}
