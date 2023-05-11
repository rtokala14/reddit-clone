"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

function SignInOrProfile() {
  const { isSignedIn } = useUser();
  return <div>{isSignedIn ? <UserButton /> : <SignInButton />}</div>;
}

export default SignInOrProfile;
