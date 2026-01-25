import { getUser } from "@/lib/auth-server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Check, Edit } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UnauthorizedPage from "./unauthorized";

export const dynamic = "force-dynamic";

const AuthPage = async () => {
  const user = await getUser();

  if (!user) {
    return UnauthorizedPage()
  }
  return (
    <Card className="w-full max-w-sm self-start mt-10">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>User Profile</CardTitle>
          <Link href="/auth/edit" className="flex items-center gap-2 text-sm">
            <Edit className="size-3 text-muted-foreground" /> Edit
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex flex-col">
            <span className="text-sm font-medium">Name</span>
            <span className="text-sm"> {user?.name} </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Email</span>
              {user.emailVerified ? (
                <Check className="text-green-500 size-4" />
              ) : (
                <form>
                  <Button
                    className="h-6"
                    formAction={async () => {
                      "use server";
                      await auth.api.sendVerificationEmail({
                        headers: await headers(),
                        body: {
                          email: user.email,
                          callbackURL: "/auth",
                        },
                      });
                      redirect(`/auth/verify?email=${user.email}`);
                    }}
                    variant="outline"
                  >
                    Verify
                  </Button>
                </form>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm"> {user?.email} </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthPage;
