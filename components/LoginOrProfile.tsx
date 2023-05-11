"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronDown } from "lucide-react";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

function LoginOrProfile() {
  const { isSignedIn, user } = useUser();
  return (
    <DropdownMenuTrigger asChild>
      <Button variant={"outline"}>
        {isSignedIn ? (
          <>
            <Avatar className=" h-7 w-7 mr-2">
              <AvatarImage
                src={user.profileImageUrl}
                alt={user.fullName || ""}
              />
              <AvatarFallback>{user.username?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>{user.username}</div>
            <ChevronDown className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            Settings <ChevronDown className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </DropdownMenuTrigger>
  );
}

export default LoginOrProfile;
