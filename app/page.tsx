import Link from "next/link";
import Sidebar from "../components/Sidebar";
import SessionHistory from "../components/SessionHistory";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#F8F5EE]">
      <Sidebar />

      <section className="flex-1 p-14 overflow-y-auto">

        <p className="uppercase tracking-[0.3em] text-[#6E8B62] text-sm mb-4">
          🌿 MOSS & CHALK
        </p>

        <h1 className="text-5xl font-semibold text-[#2F352E] mb-4">
          Welcome back.
        </h1>

        <p className="text-xl text-[#6D6D64] mb-10">
          Ready for your next adventure?
        </p>

        <Link
          href="/sessions"
          className="inline-flex rounded-2xl bg-[#2F4732] px-8 py-4 text-white hover:opacity-90 transition mb-10"
        >
          + New Session
        </Link>

        <SessionHistory />

      </section>
    </main>
  );
}