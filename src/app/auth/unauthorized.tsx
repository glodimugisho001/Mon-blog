import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { ShieldAlert, Lock } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="bg-white max-w-md w-full h-auto dark:bg-gray-800 rounded-2xl shadow-2xl border border-red-200 p-8 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-2">
          <Lock className="h-6 w-6 text-red-600 dark:text-red-400" />
          Accès Non Autorisé
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Vous devez être connecté pour accéder à cette page.
        </p>
      </div>

      <Alert
        variant="destructive"
        className="border-red-300 dark:border-red-700"
      >
        <ShieldAlert className="h-4 w-4" />
        <AlertTitle>Authentification requise</AlertTitle>
        <AlertDescription>
          Cette page est protégée et nécessite une authentification valide.
          Veuillez vous connecter ou créer un compte pour continuer.
        </AlertDescription>
      </Alert>

      <div className="space-y-3">
        <Link
          href="/auth/signin"
          className={buttonVariants({
            variant: "default",
            className:
              "w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
          })}
        >
          Se Connecter
        </Link>
        <Link
          href="/auth/signup"
          className={buttonVariants({
            variant: "outline",
            className:
              "w-full h-12 text-base font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300",
          })}
        >
          Créer un Compte
        </Link>
      </div>

      <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:underline"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
