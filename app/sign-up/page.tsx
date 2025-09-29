import Link from "next/link"
import Image from "next/image"
import { AuthForm } from "@/components/auth-form"

export default function SignUpPage() {
  return (
    <main className="min-h-dvh grid place-items-center px-4">
      <div className="w-full max-w-sm rounded-lg border bg-card p-6">
        <div className="mb-4 flex items-center gap-2">
          <Image src="/images/seed-3.jpg" alt="Samir" width={28} height={28} className="rounded object-cover" />
          <h1 className="text-lg font-semibold">Samir — Create account</h1>
        </div>
        <AuthForm mode="sign-up" />
        <p className="mt-4 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline underline-offset-4 hover:text-foreground">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  )
}
