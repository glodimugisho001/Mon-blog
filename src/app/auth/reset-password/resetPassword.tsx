"use client";

import { authClient } from "@/lib/auth-client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ResetPasswordPage = () => {
  const token = useSearchParams().get("token");
  const router = useRouter();
  const onSubmit = async (Formdata: FormData) => {
    const password = Formdata.get("password");
    if (!token) {
      toast.error("Invalid token");
      return;
    }
    try {
      await authClient.resetPassword({
        token: token as string,
        newPassword: password as string,
      },
      {
        onSuccess: () => {
          router.push("/auth/signin");
          toast.success("Password reset successfully, you can now sign in.", {duration: 5000, id: "reset-password"});
        },
        onError: () => {
          toast.error("Something went wrong", {id: "reset-password"});
        },
      }
      );
    } catch (error) {
      toast.error("Something went wrong", {id: "reset-password"});
    }
  };
  return (
    <Card className="max-w-sm w-full self-start mt-10">
      <CardHeader>
        <CardTitle>New Password</CardTitle>
        <CardDescription>Enter your new password.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input type="password" name="password" id="password" />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ResetPasswordPage;
