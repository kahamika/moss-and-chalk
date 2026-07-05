"use client";
import { useState } from "react";
export default function RouteForm() {   
const [routeName, setRouteName] = useState("");
const [grade, setGrade] = useState("6a");
const [style, setStyle] = useState("Flash");
const [notes, setNotes] = useState("");
  return (
    <div className="mt-8 rounded-3xl border border-[#ECE6DA] bg-[#FFFCF8] p-8">

      <h2 className="text-2xl font-semibold mb-6">
        Add Route
      </h2>

      <div className="space-y-6">

        <div>
          <label className="block mb-2 font-medium">
            Route Name
          </label>

          <input
  value={routeName}
  onChange={(e) => setRouteName(e.target.value)}
  className="w-full rounded-xl border border-[#D8D1C5] p-3"
  placeholder="Green Arete"
/>
        </div>

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Grade
            </label>

            <select className="w-full rounded-xl border border-[#D8D1C5] p-3">
              <option>5a</option>
              <option>5b</option>
              <option>5c</option>
              <option>6a</option>
              <option>6a+</option>
              <option>6b</option>
              <option>6b+</option>
              <option>6c</option>
              <option>6c+</option>
              <option>7a</option>
              <option>7a+</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Style
            </label>

            <select className="w-full rounded-xl border border-[#D8D1C5] p-3">
              <option>Flash</option>
              <option>Onsight</option>
              <option>Redpoint</option>
              <option>Attempt</option>
            </select>
          </div>

        </div>

        <div>
          <label className="block mb-2 font-medium">
            Notes
          </label>

          <textarea
            rows={4}
            className="w-full rounded-xl border border-[#D8D1C5] p-3"
            placeholder="Felt strong today..."
          />
        </div>

        <button className="rounded-2xl bg-[#2F4732] px-8 py-4 text-white hover:opacity-90">
          Save Route
        </button>

      </div>

    </div>
  );
}