import { useState } from "react";
import toast from "react-hot-toast";

export default function Installation() {
  const [installedApps, setInstalledApps] = useState(() => {
    return JSON.parse(localStorage.getItem("installedApps") || "[]");
  });

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    setInstalledApps(updated);
    toast.error("App Uninstalled!");
  };

  return (
    <div className="py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Your Installed Apps</h2>
        <p className="text-slate-500 mt-2">
          Manage the apps you have added to your system.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <h3 className="font-bold mb-4">{installedApps.length} Apps Found</h3>

        {installedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                className="w-16 h-16 rounded-lg"
                alt={app.title}
              />
              <div>
                <h4 className="font-bold text-lg">{app.title}</h4>
                <div className="flex gap-4 text-xs text-slate-500 mt-1">
                  <span>{app.downloads / 1000000}M Downloads</span>
                  <span>⭐ {app.ratingAvg}</span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleUninstall(app.id)}
              className="btn btn-success btn-sm text-white px-6"
            >
              Uninstall
            </button>
          </div>
        ))}

        {installedApps.length === 0 && (
          <p className="text-center text-slate-400 mt-20">
            No apps installed yet.
          </p>
        )}
      </div>
    </div>
  );
}
