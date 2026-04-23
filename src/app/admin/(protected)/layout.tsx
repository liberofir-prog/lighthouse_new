import { requireAdmin } from "@/lib/admin-auth";
import type { ReactNode } from "react";

export default async function ProtectedAdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireAdmin();
  return <>{children}</>;
}
