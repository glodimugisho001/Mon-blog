"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const ForgetPasswordPage = () => {

    const router = useRouter(); 
    const onSubmit = async (Formdata: FormData) => {
      const email = Formdata.get("email")
      await authClient.requestPasswordReset(
        {
          email: String(email),
          redirectTo: "/redirect-password",
        },
        {
          onSuccess: () => {
            router.push("/auth");
            router.refresh(); // Force Next.js to refetch Server Components
          },
          onError: (error) => {
            console.log(error);
          },  
        },
      );
    };
  return (
    <Card className="max-w-sm w-full self-start mt-10">
      <CardHeader>  
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your email address and we'll send you a link to reset your password.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" />
          </div>
          <Button type="submit" className="w-full">Reset Password</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ForgetPasswordPage;
