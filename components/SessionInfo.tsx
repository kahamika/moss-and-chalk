interface SessionInfoProps {
  location: string;
  setLocation: (value: string) => void;
}

export default function SessionInfo({
  location,
  setLocation,
}: SessionInfoProps) {
  return (
    <div className="bg-white rounded-3xl border border-[#ECE6DA] shadow-sm p-8 mb-8">

      <h2 className="text-2xl font-semibold mb-6">
        Session Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium">
            Gym / Crag
          </label>

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-xl border border-[#D8D1C5] p-3"
            placeholder="Hangar Climbing Gym"
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

    </div>
  );
}