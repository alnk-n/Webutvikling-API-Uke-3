import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";

function Searchbar() {
  const [params, setParams] = useSearchParams();
  const qFromUrl = params.get("q") ?? "";
  const [value, setValue] = useState(qFromUrl);

  useEffect(() => {
    setValue(qFromUrl);
  }, [qFromUrl]);

  const pushToUrl = useMemo(
    () =>
      debounce((next: string) => {
        setParams((prev) => {
          const p = new URLSearchParams(prev);

          const trimmed = next.trim();
          if (trimmed) p.set("q", trimmed);
          else p.delete("q");

          // reset page whenever search changes
          p.set("page", "0");

          return p;
        });
      }, 300),
    [setParams]
  );

  useEffect(() => () => pushToUrl.cancel(), [pushToUrl]);

  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="button"
          className="p-1 focus:outline-none focus:shadow-outline"
          aria-label="Search"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </span>

      <input
        type="search"
        className="py-2 text-md text-white bg-slate-800 rounded-md pl-10 pr-3 w-72 focus:outline-none focus:bg-slate-700 focus:text-zinc-200"
        placeholder="Search games..."
        value={value}
        onChange={(e) => {
          const next = e.target.value;
          setValue(next);
          pushToUrl(next);
        }}
      />
    </div>
  );
}

export default Searchbar;