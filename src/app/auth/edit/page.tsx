import { getUser } from "@/lib/auth-server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EditAuthForm from "./edit-auth-form";

const AuthPage = async () => {
  const user = await getUser();

  return (
    <Card className="w-full max-w-sm self-start mt-10">
      <CardHeader>
        <CardTitle>Edit Account</CardTitle>
      </CardHeader>
      <CardContent>
        <EditAuthForm defaultValues={{name: user?.name ?? "", image: user?.image ?? ""}} />
      </CardContent>
    </Card>
  );
};

export default AuthPage;
