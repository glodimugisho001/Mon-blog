"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Github } from "lucide-react";

type ProviderEnum = Parameters<typeof signIn.social>[0]["provider"];

const schema = z.object({
  email: z.email("Email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 8 caractères"),
});
type Props = {};

export default function SignInForm({}: Props) {
  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    console.log(data);
    await signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onRequest: () => {
          toast.loading("Signing in...", {
            id: "signing-in",
          });
        },
        onResponse: (response) => {
          console.log("le serveur a repondu", response);
        },
        onSuccess: () => {
          toast.success("Sign in successful", {
            id: "signing-in",
          });
          router.push("/auth");
          router.refresh(); // Force Next.js to refetch Server Components
        },
        onError: (error) => {
          console.log(error);
          toast.error("Sign in failed:", {
            id: "signing-in",
          });
        },
      },
    );
  };

  const signInWithProvider = async (provider: ProviderEnum) => {
    await signIn.social({
      provider: provider,
      callbackURL: "/auth", // Redirige vers /auth après l'authentification
    });
  };

  return (
    <div className="w-full max-w-sm">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-6 border border-gray-300 rounded-lg w-full flex flex-col gap-4"
      >
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Sign In</FieldLegend>
            <FieldGroup className="mt-4">
              <Field orientation={"responsive"}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                  )}
                />
                <FieldError errors={[form.formState.errors.email]} />
              </Field>
              <Field>
                <div className="flex justify-between items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link href="/auth/forget-password" className="text-indigo-600 text-sm  underline-offset-4 hover:underline">Forgot password?</Link>
                </div>
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <Input id="password" type="password" {...field} />
                  )}
                />
                <FieldError errors={[form.formState.errors.password]} />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="vertical" className="gap-4">
            <Button type="submit" className="w-full">
              Sign In
            </Button>
            <p className="text-center text-muted-foreground">or</p>
            <div className="flex flex-col gap-2 items-center justify-center">
              <Button
                onClick={() => signInWithProvider("github")}
                variant="outline"
                className="w-full"
                type="button"
              >
                <Github />
                Sign In with github
              </Button>
              <Button
                onClick={() => signInWithProvider("google")}
                variant="outline"
                className="w-full"
                type="button"
              >
                Sign In with google
              </Button>
            </div>
          </Field>
        </FieldGroup>
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-blue-600 underline-offset-4 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
