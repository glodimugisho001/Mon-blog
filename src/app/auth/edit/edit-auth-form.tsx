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
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const schema = z.object({
  name: z.string(),
  image: z.string().nullable(),
});

export default function SignInForm(props: {
  defaultValues: z.infer<typeof schema>;
}) {
  const router = useRouter();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: props.defaultValues,
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
        onResponse: (response) => {
          console.log("le serveur a repondu", response);
        },
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
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <Field orientation={"responsive"}>
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Controller
          name="name"
          control={form.control}
          render={({ field }) => <Input id="name" type="text" {...field} />}
        />
        <FieldError errors={[form.formState.errors.name]} />
      </Field>
      <Field>
        <FieldLabel htmlFor="image">Image URL</FieldLabel>
        <Controller
          name="image"
          control={form.control}
          render={({ field }) => (
            <Input
              id="image"
              type="text"
              {...field}
              value={field.value ?? ""}
            />
          )}
        />
        <FieldError errors={[form.formState.errors.image]} />
      </Field>
      <Button type="submit">Update</Button>
    </form>
  );
}
