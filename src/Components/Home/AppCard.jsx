import { Link } from "react-router";

export default function AppCard({ app }) {
  return (
    <Link
      to={`/app/${app.id}`}
      className="card bg-base-100 shadow-xl transition-all cursor-pointer"
    >
      <figure className="p-4 bg-slate-100 m-4 rounded-xl">
        <img
          src={app.image}
          alt={app.title}
          className="rounded-xl h-32 object-contain"
        />
      </figure>
      <div className="card-body p-4 pt-0">
        <h2 className="card-title text-sm h-12 overflow-hidden">{app.title}</h2>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-1 text-xs text-green-600 font-semibold">
            <span>▲</span> {app.downloads / 1000000}M
          </div>
          <div className="flex items-center gap-1 text-xs text-orange-500 font-semibold">
            <span>⭐</span> {app.ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
}
