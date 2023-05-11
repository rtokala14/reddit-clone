import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import LoginOrProfile from "@/components/LoginOrProfile";
import SIgnOutBtnForDD from "@/components/SIgnOutBtnForDD";
import LoginOrNone from "@/components/LoginOrNone";
import { ThemeChanger, ThemeProviderX } from "@/components/ThemeProviderX";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const metadata = {
  title: "Reddit Clone",
  description:
    "A Reddit clone built with Next.js, Vercel Postgres, Clerk and Drizzle",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html className="" suppressHydrationWarning lang="en">
        <body className={inter.variable}>
          <ThemeProviderX>
            <NavBar />
            {children}
          </ThemeProviderX>
        </body>
      </html>
    </ClerkProvider>
  );
}

function NavBar() {
  return (
    <nav className=" w-full z-50 sticky backdrop-blur-lg top-0 flex justify-between items-center h-14 px-2 border-b border-b-border">
      <Link href={"/"}>
        <Button variant={"ghost"}>Reddit</Button>
      </Link>
      <div className="flex items-center gap-2">
        <LoginOrNone />
        <div className="">
          <DropdownMenu>
            <LoginOrProfile />
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>General</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem className=" justify-between"> */}
              {/* <Label htmlFor="darkMode">Dark Mode</Label> */}
              {/* Dark Mode */}
              <ThemeChanger />
              {/* </DropdownMenuItem> */}
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <Link href={"/user-settings"}>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </Link>
              <SIgnOutBtnForDD />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
