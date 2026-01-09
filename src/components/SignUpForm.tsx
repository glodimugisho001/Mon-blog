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

type Props = {};

export default function SignUpForm({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <form className="p-6 border border-gray-300 rounded-lg">
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Sign up to your account</FieldLegend>
              <FieldDescription>
                Enter your email below to sign up to your account
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input id="password" type="password" required />
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
