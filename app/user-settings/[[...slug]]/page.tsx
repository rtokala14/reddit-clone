"use client";
import { UserProfile } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";
import { useTheme } from "next-themes";

function Page() {
  const { theme } = useTheme();
  return (
    <div className="w-full pb-4 flex items-center justify-center pt-4">
      <UserProfile
        appearance={{
          baseTheme: theme === "dark" ? dark : shadesOfPurple,
        }}
        path="/user-settings"
        routing="path"
      />
    </div>
  );
}

export default Page;
