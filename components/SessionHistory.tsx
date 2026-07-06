"use client";

import { getSessions } from "../lib/storage";

export default function SessionHistory() {
  const sessions = getSessions();

  return (
    <div className="bg-white rounded-3xl border border-[#ECE6DA] shadow-sm p-8">

      <h2 className="text-2xl font-semibold mb-6">
        Recent Sessions
      </h2>

      {sessions.length === 0 ? (
        <p className="text-[#6D6D64]">
          No saved sessions yet.
        </p>
      ) : (
        <div className="space-y-4">

          {sessions
            .slice()
            .reverse()
            .map((session) => (
              <div
                key={session.id}
                className="rounded-2xl border border-[#ECE6DA] p-5 hover:bg-[#FAF8F3] transition cursor-pointer"
              >
                <div className="flex justify-between">

                  <div>

                    <h3 className="text-lg font-semibold">
                      {session.locationName}
                    </h3>

                    <p className="text-[#6D6D64]">
                      {new Date(session.date).toLocaleDateString()}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="font-semibold">
                      {session.routes.length} route{session.routes.length !== 1 ? "s" : ""}
                    </p>

                    <p className="text-[#6D6D64]">
                      {session.gradingSystem}
                    </p>

                  </div>

                </div>

              </div>
            ))}

        </div>
      )}

    </div>
  );
}