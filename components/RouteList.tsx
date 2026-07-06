import { Route } from "../lib/types";

interface RouteListProps {
  routes: Route[];
}

export default function RouteList({ routes }: RouteListProps) {
  if (routes.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-[#ECE6DA] shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Routes
        </h2>

        <p className="text-[#6D6D64]">
          No routes yet.
          <br />
          Start today's adventure 🌿
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#ECE6DA] shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-6">
        Routes
      </h2>

      <div className="space-y-4">
        {routes.map((route) => (
          <div
            key={route.id}
            className="rounded-2xl border border-[#ECE6DA] p-5"
          >
            <div className="flex justify-between items-start">

              <div>
                <h3 className="text-lg font-semibold">
                  {route.name}
                </h3>

                <p className="text-[#6D6D64]">
                  {route.result}
                </p>
              </div>

              <div className="text-xl font-semibold">
                {route.grade}
              </div>

            </div>

            {route.notes && (
              <p className="mt-4 text-[#6D6D64]">
                {route.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}