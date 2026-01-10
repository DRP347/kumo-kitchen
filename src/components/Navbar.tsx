"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isReservations = pathname === "/reservations";

  const goReservations = useCallback(() => {
    if (!isReservations) router.push("/reservations");
  }, [router, isReservations]);

  return (
    <header
      className="site-header fixed top-0 z-[9999] w-full"
      style={{
        pointerEvents: "auto", // prevents canvas/overlays from eating clicks
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Brand */}
        <Link
          href="/"
          className="text-xs tracking-[0.35em] text-neutral-300 transition hover:text-neutral-100"
          style={{ textDecoration: "none" }}
        >
          KUMO KITCHEN
        </Link>

        {/* CTA */}
        {isReservations ? (
          <span
            className="rounded-full border border-neutral-800 px-4 py-2 text-xs text-neutral-500"
            aria-current="page"
          >
            Reservations
          </span>
        ) : (
          // Use BOTH: Link for normal navigation + onClick router.push for reliability
          <Link
            href="/reservation"
            className="rounded-full border border-neutral-700 px-4 py-2 text-xs text-neutral-300 transition hover:border-neutral-300 hover:text-neutral-100"
            style={{ textDecoration: "none", pointerEvents: "auto" }}
            onClick={(e) => {
              // If something weird blocks default nav, force it.
              e.preventDefault();
              goReservations();
            }}
          >
            Reserve
          </Link>
        )}
      </div>
    </header>
  );
}
