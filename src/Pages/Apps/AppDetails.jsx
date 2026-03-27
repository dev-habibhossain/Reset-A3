import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import appsData from "../../assets/appsData.json";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";

export default function AppDetails() {
  const { id } = useParams();
  const app = appsData.find((a) => a.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
    return installed.some((item) => item.id === app?.id);
  });

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!isInstalled) {
      localStorage.setItem(
        "installedApps",
        JSON.stringify([...installed, app]),
      );
      setIsInstalled(true);
      toast.success("App Installed Successfully!");
    }
  };

  if (!app) return <AppNotFound />; // See error component below

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row gap-8 border p-6 rounded-xl border-dashed border-blue-400">
        <img
          src={app.image}
          className="w-40 h-40 rounded-3xl"
          alt={app.title}
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-primary mt-1">Developed by {app.companyName}</p>

          <div className="flex gap-10 mt-6 border-t pt-4">
            <div className="text-center">
              <img src={downloadIcon} className="w-6 mx-auto mb-1" />
              <p className="font-bold text-xl">
                {(app.downloads / 1000000).toFixed(0)}M
              </p>
              <p className="text-xs text-slate-400">Downloads</p>
            </div>
            <div className="text-center">
              <img src={ratingIcon} className="w-6 mx-auto mb-1" />
              <p className="font-bold text-xl">{app.ratingAvg}</p>
              <p className="text-xs text-slate-400">Average Ratings</p>
            </div>
            {/* Add Review count here too */}
          </div>

          <button
            disabled={isInstalled}
            onClick={handleInstall}
            className={`btn mt-6 btn-secondary ${isInstalled ? "btn-disabled" : ""}`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="border p-6 rounded-xl border-dashed border-blue-400">
        <h3 className="font-bold mb-4">Ratings</h3>
        <div className="space-y-3">
          {app.ratings
            .slice()
            .reverse()
            .map((rating) => {
              const total =
                app.ratings.reduce((sum, r) => sum + r.count, 0) || 1;
              const pct = Math.round((rating.count / total) * 100);
              return (
                <div key={rating.name} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>{rating.name}</span>
                    <span>{rating.count}</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-orange-400 to-orange-600"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="border p-6 rounded-xl border-dashed border-blue-400">
        <h3 className="font-bold mb-4 text-xl">Description</h3>
        <p className="text-slate-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
}

function AppNotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <h1 className="text-3xl font-bold">App Not Found</h1>
      <p className="text-slate-500">The selected app does not exist.</p>
    </div>
  );
}
