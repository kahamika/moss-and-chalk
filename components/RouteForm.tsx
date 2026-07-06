"use client";

import { useState } from "react";
import { grades } from "../lib/grades";
import { Route, RouteResult } from "../lib/types";

interface RouteFormProps {
  gradingSystem: keyof typeof grades;
  onSave: (route: Route) => void;
}

const results: RouteResult[] = [
  "Flash",
  "Onsight",
  "Redpoint",
  "Attempt",
  "Repeat",
];

export default function RouteForm({
  gradingSystem,
  onSave,
}: RouteFormProps) {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState<string>(
    grades[gradingSystem][0]
  );
  const [result, setResult] =
    useState<RouteResult>("Flash");
  const [notes, setNotes] = useState("");

  function saveRoute() {
    if (!name.trim()) return;

    onSave({
      id: crypto.randomUUID(),
      name: name.trim(),
      grade,
      result,
      notes: notes.trim(),
    });

    setName("");
    setGrade(grades[gradingSystem][0]);
    setResult("Flash");
    setNotes("");
  }

  return (
    <div className="bg-white rounded-3xl border border-[#ECE6DA] shadow-sm p-8 mb-8">

      <h2 className="text-2xl font-semibold mb-6">
        Add Route
      </h2>

      <div className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
            Route Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Green Arete"
            className="w-full rounded-xl border border-[#D8D1C5] p-3"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 font-medium">
              Grade
            </label>

            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full rounded-xl border border-[#D8D1C5] p-3"
            >
              {grades[gradingSystem].map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Result
            </label>

            <select
              value={result}
              onChange={(e) =>
                setResult(e.target.value as RouteResult)
              }
              className="w-full rounded-xl border border-[#D8D1C5] p-3"
            >
              {results.map((result) => (
                <option key={result} value={result}>
                  {result}
                </option>
              ))}
            </select>
          </div>

        </div>

        <div>
          <label className="block mb-2 font-medium">
            Notes
          </label>

          <textarea
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Optional notes..."
            className="w-full rounded-xl border border-[#D8D1C5] p-3"
          />
        </div>

        <button
          type="button"
          onClick={saveRoute}
          className="rounded-2xl bg-[#2F4732] text-white px-8 py-4 hover:opacity-90 transition"
        >
          Save Route
        </button>

      </div>

    </div>
  );
}