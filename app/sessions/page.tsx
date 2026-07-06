"use client";

import { useState } from "react";

import Sidebar from "../../components/Sidebar";
import RouteForm from "../../components/RouteForm";
import RouteList from "../../components/RouteList";
import SessionInfo from "../../components/SessionInfo";
import FinishSessionButton from "../../components/FinishSessionButton";

import { Route, Session } from "../../lib/types";
import { addSession } from "../../lib/storage";

export default function SessionsPage() {
  const [location, setLocation] = useState("");
  const [routes, setRoutes] = useState<Route[]>([]);

  function addRoute(route: Route) {
    setRoutes((current) => [...current, route]);
  }

  function finishSession() {
    if (!location.trim()) {
      alert("Please enter a gym or crag.");
      return;
    }

    if (routes.length === 0) {
      alert("Please add at least one route.");
      return;
    }

    const session: Session = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),

      locationType: "Gym",
      locationName: location,

      climbType: "Rope",
      gradingSystem: "French",

      notes: "",

      routes,
    };

    addSession(session);

    alert("🌿 Session saved!");

    setLocation("");
    setRoutes([]);
  }

  return (
    <main className="flex min-h-screen bg-[#F8F5EE]">
      <Sidebar />

      <section className="flex-1 p-14 overflow-y-auto">

        <p className="uppercase tracking-[0.3em] text-[#6E8B62] text-sm mb-4">
          🌿 TODAY'S SESSION
        </p>

        <h1 className="text-5xl font-semibold text-[#2F352E] mb-8">
          Today's Session
        </h1>

        <SessionInfo
          location={location}
          setLocation={setLocation}
        />

        <RouteList routes={routes} />

        <div className="mt-8">
          <RouteForm
            gradingSystem="French"
            onSave={addRoute}
          />
        </div>

        <FinishSessionButton
          onFinish={finishSession}
        />

      </section>
    </main>
  );
}