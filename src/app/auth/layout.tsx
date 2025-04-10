"use client";

import { usePathname } from "next/navigation";
import "@/app/auth/auth.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="auth-layout">
        <main className="auth-content">{children}</main>
      </div>
    );
}