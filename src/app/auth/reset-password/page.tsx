import Loader from "@/components/Loader";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ResetPasswordPage />
      </Suspense>
    </>
  );
}
