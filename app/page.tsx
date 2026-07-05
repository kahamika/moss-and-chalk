export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EE] text-[#2F352E] flex items-center justify-center p-8">
      <div className="max-w-3xl w-full rounded-3xl bg-[#FFFCF8] shadow-xl p-12 border border-[#E7E2D8]">
        <p className="text-sm uppercase tracking-[0.25em] text-[#6E8B62] mb-2">
          🌿 Moss & Chalk
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Good evening, climber.
        </h1>

        <p className="text-xl text-[#6D6D64] mb-10">
          What adventure are we logging today?
        </p>

        <button className="rounded-2xl bg-[#30422F] px-8 py-4 text-white text-lg hover:opacity-90 transition">
          + New Session
        </button>
      </div>
    </main>
  );
}