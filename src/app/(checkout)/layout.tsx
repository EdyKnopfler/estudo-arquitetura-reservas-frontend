import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function CheckoutProtectedArea({ children }: { children: ReactNode }) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <>
      {children}
    </>
  )
}