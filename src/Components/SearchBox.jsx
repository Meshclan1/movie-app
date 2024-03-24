"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function SearchBox() {
  // [search, setSearch] = useState("");

  return (
    <>
      <div>SearchBox</div>
      <form onSubmit={(e) => e.target.value}>
        <input
          onChange={(e) => e.target.value}
          placeholder="Search Item"
        ></input>
        <button> Click Here</button>
      </form>
    </>
  );
}
