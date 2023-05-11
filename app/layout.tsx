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
      <html lang="en">
        <body className={inter.variable}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

function NavBar() {
  return (
    <div className=" w-full flex justify-between items-center h-14 px-2 border-b border-b-border">
      <div>Hello</div>
      <div className="flex items-center gap-2">
        <LoginOrNone />
        <div className="">
          <DropdownMenu>
            <LoginOrProfile />
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>General</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Dark Mode</DropdownMenuItem>
              <DropdownMenuLabel>Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <SIgnOutBtnForDD />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
