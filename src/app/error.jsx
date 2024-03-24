"use client";

import React from "react";
import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong.. Please try again later.</h1>
      <button onClick={() => reset()}> </button>
    </div>
  );
}
