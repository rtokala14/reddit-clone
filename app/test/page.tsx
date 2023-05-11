import { UsersTable, db } from "@/lib/drizzle";
import Link from "next/link";

async function Page() {
  const list = await db.select().from(UsersTable);
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <Link href="/">Home</Link>
      {list.map((user) => {
        return <div key={user.id}>{user.name} </div>;
      })}
    </div>
  );
}

export default Page;
