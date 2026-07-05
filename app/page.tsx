import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#F8F5EE]">
      <Sidebar />

      <section className="flex-1 p-14 overflow-y-auto">

  <p className="uppercase tracking-[0.3em] text-[#6E8B62] text-sm mb-4">
    🌿 GOOD EVENING
  </p>

  <h1 className="text-6xl leading-none text-[#2F352E] font-semibold mb-4">
    Good evening,
    <br />
    climber.
  </h1>

  <p className="text-2xl text-[#6D6D64] mb-10">
    What adventure are we logging today?
  </p>

  <div className="grid grid-cols-2 gap-6 mb-8">

    <a
  href="/sessions"
  className="rounded-3xl bg-white p-8 shadow-sm border border-[#ECE6DA] cursor-pointer hover:shadow-md transition block"
>
      <h2 className="text-2xl font-semibold mb-2">
        ➕ New Session
      </h2>

      <p className="text-[#6D6D64]">
        Log today's climbing session.
      </p>
    </a>

    <div className="rounded-3xl bg-white p-8 shadow-sm border border-[#ECE6DA]">
      <h2 className="text-2xl font-semibold mb-2">
        📈 Statistics
      </h2>

      <p className="text-[#6D6D64]">
        See your recent progress.
      </p>
    </div>

  </div>

  <div className="rounded-3xl bg-white p-8 border border-[#ECE6DA] shadow-sm">

    <div className="flex justify-between items-center mb-6">

      <h2 className="text-3xl">
        Today's Session
      </h2>

      <button className="text-[#6E8B62]">
        View all
      </button>

    </div>

    <div className="rounded-2xl border-2 border-dashed border-[#D8D1C5] p-6 text-center text-[#6D6D64]">
      + Add Route
    </div>

    <p className="mt-8 text-[#8A857D]">
      Today's page is still blank.
      <br />
      Ready for your next adventure? 🌿
    </p>

  </div>

</section>
    </main>
  );
}