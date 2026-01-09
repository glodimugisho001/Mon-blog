"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Email invalide"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});
type Props = {};

export default function SignUpForm({}: Props) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {
    console.log(data);
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
                <Field>
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
