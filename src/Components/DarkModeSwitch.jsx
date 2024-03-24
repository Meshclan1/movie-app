"use client";

import React from "react";
import useTheme from "next-themes";
import { useState, useEffect } from "react";

export default function DarkModeSwitch() {
  [,] = useState("");

  useEffect(() => {}, []);

  const { theme, setTheme, defaultTheme } = useTheme();

  return <div>DarkModeSwitch</div>;
}
