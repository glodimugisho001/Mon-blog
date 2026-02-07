import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js"

// Force le rendu dynamique pour éviter l'exécution pendant le build
export const dynamic = 'force-dynamic';

export const { POST, GET } = toNextJsHandler(auth)