import { NavLink, useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";

function Navbar() {
  const { pathname } = useLocation();
  const isGamesPage = pathname === "/games";

  return (
    <nav className="bg-slate-900 rounded-b-lg font-sans w-full px-5 py-5 sticky top-0 z-50 mx-auto">
      <div className="flex items-center gap-5 flex-nowrap">
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

        {isGamesPage && <Searchbar />}
      </div>
    </nav>
  );
}

export default Navbar;
