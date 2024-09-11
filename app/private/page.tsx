import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { logout } from "./actions";
import { Button } from "@/components/ui/button";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <form action={logout}>
        <Button type="submit" variant={"destructive"}>
          Logout
        </Button>
      </form>
    </div>
  );
}
