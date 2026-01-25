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
import { signIn, signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Github } from "lucide-react";

type ProviderEnum = Parameters<typeof signIn.social>[0]["provider"];

const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.email("Email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 8 caractères"),
});

export default function SignUpForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    console.log(data);
    await signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onRequest: () => {
          toast.loading("Signing up...", {
            id: "signing-up",
          });
        },
        onResponse: (response) => {
          console.log("le serveur a repondu", response);
        },
        onSuccess: () => {
          toast.success("Sign up successful", {
            id: "signing-up",
          });
          router.push("/auth");
          router.refresh(); // Force Next.js to refetch Server Components
        },
        onError: (error) => {
          console.log(error);
          toast.error("Sign up failed:", {
            id: "signing-up",
          });
        },
      },
    );
  };

  const signUpWithProvider = async (provider: ProviderEnum) => {
    await signIn.social({
      provider: provider,
      callbackURL: "/auth", // Redirige vers /auth après l'authentification
    });
  };

  return (
    <div className="w-full max-w-sm">
      {/* {blog-react-484818} */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-6 border border-gray-300 rounded-lg w-full flex flex-col gap-4"
      >
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Sign Up</FieldLegend>
            <FieldGroup className="mt-4">
              <Field orientation={"responsive"}>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      {...field}
                    />
                  )}
                />
                <FieldError errors={[form.formState.errors.name]} />
              </Field>
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
                <FieldLabel htmlFor="password">Password</FieldLabel>
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
              Sign Up
            </Button>
            <p className="text-center text-muted-foreground">or</p>
            <div className="flex flex-col gap-2 items-center justify-center">
              <Button
                onClick={() => signUpWithProvider("github")}
                variant="outline"
                className="w-full"
                type="button"
              >
                <Github />
                Sign Up with github
              </Button>
              <Button
                onClick={() => signUpWithProvider("google")}
                variant="outline"
                className="w-full"
                type="button"
              >
                Sign Up with google
              </Button>
            </div>
          </Field>
        </FieldGroup>
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-blue-600 underline-offset-4 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
