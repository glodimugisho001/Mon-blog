"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
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
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.email("Email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});
type Props = {};

export default function SignUpForm({}: Props) {
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
        },
        onError: (error) => {
          console.log(error); 
          toast.error("Sign up failed:", {
            id: "signing-up",
          });
        },
      }
    );
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-6 border border-gray-300 rounded-lg"
        >
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Sign up to your account</FieldLegend>
              <FieldDescription>
                Enter your email below to sign up to your account
              </FieldDescription>
              <FieldGroup>
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
                  <FieldDescription>
                    <a
                      href="#"
                      className="text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="vertical" className="gap-2">
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <Button variant="outline" className="w-full" type="button">
                Login with Google
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
