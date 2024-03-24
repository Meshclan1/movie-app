"use client";

import React from "react";
import useTheme from "next-themes";
import { useState, useEffect } from "react";

import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function DarkModeSwitch() {
  [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const { theme, setTheme, systemTheme } = useTheme();

  return <div>DarkModeSwitch</div>;
}
