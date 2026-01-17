import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <Alert>
      <AlertTitle>Unauthorized</AlertTitle>
      <AlertDescription>You are not authorized to access this page? you need to login first</AlertDescription>
      <Button asChild>
        <Link href="/auth/login">Login</Link>
      </Button>
    </Alert>
  )
} 