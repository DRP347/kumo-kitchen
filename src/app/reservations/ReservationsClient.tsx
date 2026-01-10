"use client";

import dynamic from "next/dynamic";

const ReservationLayout = dynamic(
  () => import("@/components/reservations/ReservationLayout"),
  { ssr: false }
);

export default function ReservationsClient() {
  return <ReservationLayout />;
}
