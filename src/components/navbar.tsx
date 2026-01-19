import Link from "next/link";
import { Suspense } from "react";
import { Button, buttonVariants } from "./ui/button";
import clsx from "clsx";
import { getUser } from "@/lib/auth-server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MobileMenu from "./MobileMenu";
import { LogOut, User } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const links = [
  { url: "/", label: "Home" },
  { url: "/blog", label: "Blog" },
];
export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 border-b-[2px] border-gray-200 md:border-none  ">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600">
          <Link href="/">Glodi.dev</Link>
        </h1>

        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className={clsx(
                    buttonVariants({ variant: "link" }),
                    "hover:text-blue-600 transition-colors text-[24px]",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Suspense fallback={<SkeletonButton />}>
            <AuthButton />
          </Suspense>

          {/* Mobile Menu */}
          <MobileMenu links={links} />
        </nav>
      </div>
    </header>
  );
}

export const AuthButton = async () => {
  const user = await getUser();

  if (!user) {
    return (
      <Link
        href="/auth/signup"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        Sign Up
      </Link>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Avatar className="size-6">
            {user.image? (
              <AvatarImage src={user.image}/>
            )
            : (
              <AvatarFallback>{user.email[0].toUpperCase()}</AvatarFallback>
            )}
          </Avatar>
          <p className="text-sm">{user.name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/auth">
            <User className="size-3.5"/>
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <form action="">
            <button
              className="flex items-center gap-2"
              formAction={ async () => {
                "use server"
                await auth.api.signOut({
                  headers: await headers(),
                })
                revalidatePath("/auth/signin")
                redirect("/auth/signin")
              }}
            >
              <LogOut className="size-3.5"/>
              Logout
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SkeletonButton = () => {
  return (
    <Button variant="outline" size="sm">
      <Avatar>
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
    </Button>
  );
};
