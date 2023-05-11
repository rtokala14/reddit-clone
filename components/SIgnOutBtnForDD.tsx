"use client";

import { SignIn, SignInButton, useClerk } from "@clerk/nextjs";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

function SIgnOutBtnForDD() {
  const { signOut, user } = useClerk();
  return (
    <>
      {user ? (
        <DropdownMenuItem
          onClick={() => signOut()}
          className=" w-full mt-1"
          asChild
        >
          <Button variant={"destructive"}>Sign out</Button>
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem className=" w-full mt-1" asChild>
          <Button variant={"default"}>
            <SignInButton />
          </Button>
        </DropdownMenuItem>
      )}
    </>
  );
}

export default SIgnOutBtnForDD;
