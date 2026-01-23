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
import { authClient, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Github } from "lucide-react";

type ProviderEnum = Parameters<typeof signIn.social>[0]["provider"];

const schema = z.object({
  name: z.string(),
  image: z.string()
});

export default function SignInForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      image: "",
    },
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (data) => {
    console.log(data);
    await authClient.updateUser(
      {
        name: data.name,
        image: data.image,
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
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <Input
                      id="name"
                      type="text"
                      {...field}
                    />
                  )}
                />
                <FieldError errors={[form.formState.errors.name]} />
              </Field>
              <Field>
                <FieldLabel htmlFor="image">Image URL</FieldLabel>
                <Controller
                  name="image"
                  control={form.control}
                  render={({ field }) => (
                    <Input id="image" {...field} />
                  )}
                />
                <FieldError errors={[form.formState.errors.image]} />
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
