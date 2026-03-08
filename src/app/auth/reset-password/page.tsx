import Loader from "@/components/Loader";
import { Suspense } from "react";
import ResetPasswordForm from "./ResetPasswordForm";

// Force le rendu dynamique pour éviter l'exécution pendant le build
export const dynamic = "force-dynamic";

export default function ResetPasswordPage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ResetPasswordForm />
      </Suspense>
    </>
  );
}
