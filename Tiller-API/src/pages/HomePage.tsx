import { NavLink } from "react-router-dom";

function HomePage() {
  const sectionStyle = "bg-slate-700 p-3 rounded-lg";

  return (
    <main className="min-h-screen bg-zinc-200 pt-24 flex justify-center text-white">
      <div className="p-4 bg-slate-800 h-fit rounded-xl flex flex-col items-center gap-2">
        <section className={`${sectionStyle} font-bold text-3xl`}>
          Welcome to this Tiller API Demo!
        </section>

        <section className={`${sectionStyle} text-xl`}>
          A short demo showcasing the Tiller API with a React frontend.
        </section>

        <section className={sectionStyle}>
          API made and set up by Jon Pape Hallem –{" "}
          <a className="underline" href="https://github.com/jonp-h">
            GitHub
          </a>
        </section>

        <NavLink
          to="/games"
          className="px-5 py-3 bg-amber-600 rounded-lg text-white font-semibold hover:bg-amber-500"
        >
          View Games
        </NavLink>
      </div>
    </main>
  );
}

export default HomePage;
