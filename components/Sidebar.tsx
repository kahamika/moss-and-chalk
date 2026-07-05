import {
  Home,
  BookOpen,
  TrendingUp,
  Mountain,
  Settings,
  Leaf,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home" },
  { icon: BookOpen, label: "Sessions" },
  { icon: TrendingUp, label: "Progress" },
  { icon: Mountain, label: "Projects" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#2F4732] text-white p-8 flex flex-col">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Leaf className="text-[#B7D7A8]" size={28} />
          <div>
            <h1 className="text-3xl font-semibold">Moss & Chalk</h1>
            <p className="text-green-200 text-sm">
              Your climbing journal
            </p>
          </div>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        {menuItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 w-full rounded-2xl px-4 py-3 hover:bg-white/10 transition"
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/10 pt-6 text-green-200 text-sm">
        🌿 Keep climbing, keep growing.
      </div>
    </aside>
  );
}