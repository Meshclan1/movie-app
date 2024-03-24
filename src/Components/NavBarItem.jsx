"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavBarItem() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div title="" params="">
      NavBarItem
    </div>
  );
}
