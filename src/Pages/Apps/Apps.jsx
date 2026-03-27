import { useState } from "react";
import appErrorImg from "../../assets/App-Error.png";
import appsData from "../../assets/appsData.json";
import AppCard from "../../Components/Home/AppCard"; // We'll create this next

export default function Apps() {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");

  // Filter and Sort Logic
  const displayApps = appsData
    .filter((app) => app.title.toLowerCase().includes(searchText.toLowerCase()))
    .sort((a, b) => {
      if (sortType === "high") return b.downloads - a.downloads;
      if (sortType === "low") return a.downloads - b.downloads;
      return 0;
    });

  return (
    <div className="py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Our All Applications</h2>
        <p className="text-slate-500 mt-2">
          Explore All Apps on the Market developed by us.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h3 className="font-bold text-xl text-slate-700">
          ({displayApps.length}) Apps Found
        </h3>

        <div className="flex gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Apps..."
            className="input input-bordered w-full md:w-80"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="select select-bordered"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By Downloads</option>
            <option value="high">High-Low</option>
            <option value="low">Low-High</option>
          </select>
        </div>
      </div>

      {displayApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-20">
          <img src={appErrorImg} className="w-64" alt="Not Found" />
          <h2 className="text-2xl font-bold mt-4">OPPS!! APP NOT FOUND</h2>
        </div>
      )}
    </div>
  );
}
