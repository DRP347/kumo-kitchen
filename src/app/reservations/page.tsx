import type { Metadata } from "next";
import ReservationsClient from "./ReservationsClient";

export const metadata: Metadata = {
  title: "Reservations — Kumo Kitchen",
  description:
    "Secure your moment at Kumo Kitchen. Select a date, guests, and time to confirm your reservation request.",
};

export default function ReservationsPage() {
  return <ReservationsClient />;
}
