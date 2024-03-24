"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function NavBarItem({title, params }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
<div>
    <Link href="">{title}<Link/>
    </div>
)
}
