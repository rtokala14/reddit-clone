import SignInOrProfile from "@/components/SignInOrProfile";
import Link from "next/link";

export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div>Hello</div>
      <SignInOrProfile />
      <Link href="/test">Test</Link>
    </main>
  );
}
