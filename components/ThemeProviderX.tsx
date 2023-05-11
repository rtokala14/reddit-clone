"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Switch } from "./ui/switch";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";

export function ThemeProviderX({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} defaultTheme="light" attribute="class">
      {children}
    </ThemeProvider>
  );
}

export function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenuItem
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className=" justify-between"
    >
      <Label className=" font-normal" htmlFor="darkMode">
        Dark Mode
      </Label>
      <Switch id="darkMode" checked={theme === "dark"} />
    </DropdownMenuItem>
  );
}
