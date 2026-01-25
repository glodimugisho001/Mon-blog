import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="flex justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/20">
              <Mail className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">
            Vérifiez vos emails
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Nous avons envoyé un lien de réinitialisation de mot de passe à
            votre adresse email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Cliquez sur le lien dans l'email pour définir un nouveau mot de
            passe. Si vous ne le voyez pas, vérifiez vos spams.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild variant="outline" className="w-full">
            <Link href="/auth/signin">Retour à la connexion</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
