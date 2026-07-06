export type ClimbType = "Rope" | "Boulder";

export type RopeGradingSystem =
  | "UIAA"
  | "French"
  | "YDS";

export type BoulderGradingSystem =
  | "Font"
  | "V Scale";

export type GradingSystem =
  | RopeGradingSystem
  | BoulderGradingSystem;

export type RouteResult =
  | "Flash"
  | "Onsight"
  | "Redpoint"
  | "Attempt"
  | "Repeat";

export interface Route {
  id: string;
  name: string;
  grade: string;
  result: RouteResult;
  notes: string;
}

export interface Session {
  id: string;
  date: string;

  locationType: "Gym" | "Crag";
  locationName: string;

  climbType: ClimbType;
  gradingSystem: GradingSystem;

  notes: string;

  routes: Route[];
}