import { getUser } from "@/lib/auth-server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UnauthorizedPage from "./unauthorized";
import { Check, Edit } from "lucide-react";
import Link from "next/link";

const AuthPage = async () => {
  const user = await getUser();

  if(!user) {
    return <UnauthorizedPage />
  }
  return (
    <Card className="w-full max-w-sm self-start mt-10">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>User Profile</CardTitle>
          <Link href="/auth/edit" className="flex items-center gap-2 text-sm">
            <Edit className="size-3 text-muted-foreground"/> Edit
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
            <span className="text-sm font-medium">Email</span>
            <div className="flex items-center gap-2">
              <span className="text-sm"> {user?.email} </span>
              {user.emailVerified ? <Check className="text-green-500 size-4"/>: null}
            </div>
          </div>
        </div>  
      </CardContent>
    </Card>
  );
};

export default AuthPage;
