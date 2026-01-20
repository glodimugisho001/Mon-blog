import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { ShieldAlert, Lock } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-950 dark:to-gray-900 p-4">
      <div className="max-w-md w-full space-y-8 animate-in fade-in zoom-in duration-500">
        {/* Icon Container */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-red-100 dark:bg-red-900/30 p-6 rounded-full">
              <ShieldAlert className="h-16 w-16 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        {/* Alert Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-red-200 dark:border-red-800 p-8 space-y-6">
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

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link
              href="/auth/login"
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

          {/* Home Link */}
          <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 hover:underline"
            >
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
