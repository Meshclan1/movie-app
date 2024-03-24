"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function providers() {
  return (
    <>
      <div>providers</div>
      <NextThemesProvider defaultTheme="" />
      <div>{children}</div>
    </>
  );
}
