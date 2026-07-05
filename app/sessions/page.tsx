import RouteForm from "../../components/RouteForm";
import Sidebar from "../../components/Sidebar";
export default function SessionsPage() {
  return (
    <main className="flex min-h-screen bg-[#F8F5EE]">
      <Sidebar />

      <section className="flex-1 p-14">

        <p className="uppercase tracking-[0.3em] text-[#6E8B62] text-sm mb-4">
          🧗 NEW SESSION
        </p>

        <h1 className="text-5xl font-semibold text-[#2F352E] mb-10">
          Today's Climb
        </h1>

        <div className="bg-white rounded-3xl border border-[#ECE6DA] p-8 shadow-sm">

          <div className="grid grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium">
                Gym / Crag
              </label>

              <input
                className="w-full rounded-xl border border-[#D8D1C5] p-3"
                placeholder="The Spot Gym"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-[#D8D1C5] p-3"
              />
            </div>

          </div>

          <button className="mt-10 rounded-2xl bg-[#2F4732] text-white px-8 py-4">
            + Add Route
          </button>

        </div>

      </section>

    </main>
  );
}