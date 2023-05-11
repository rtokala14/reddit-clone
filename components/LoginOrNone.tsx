import { SignInButton, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";

function LoginOrNone() {
  return (
    <SignedOut>
      <SignInButton>
        <Button variant={"default"}>Sign In</Button>
      </SignInButton>
    </SignedOut>
  );
}

export default LoginOrNone;
