import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-slate-900 rounded-b-lg font-sans w-full px-5 py-5 sticky top-0 z-50 mx-auto">
      <div className="flex gap-5">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `text-lg font-semibold px-4 py-2 rounded-md transition-colors ${
              isActive
                ? "bg-amber-600 text-white"
                : "bg-slate-500 text-gray-100 hover:bg-slate-400 hover:text-white"
            }`
          }
        >
          Homepage
        </NavLink>

        <NavLink
          to="/games"
          className={({ isActive }) =>
            `text-lg font-semibold px-4 py-2 rounded-md transition-colors ${
              isActive
                ? "bg-amber-600 text-white"
                : "bg-slate-500 text-gray-100 hover:bg-slate-400 hover:text-white"
            }`
          }
        >
          Games
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
