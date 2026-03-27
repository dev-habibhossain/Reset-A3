import { useState } from "react";
import { Link } from "react-router";
import appsData from "../../assets/appsData.json";
import AppCard from "../../Components/Home/AppCard";
import Banner from "../../Components/Home/Banner";
import Stats from "../../Components/Home/Stats";

export default function Home() {
  const [hotApps] = useState(() =>
    appsData.sort((a, b) => b.downloads - a.downloads).slice(0, 6),
  );

  return (
    <div>
      <Banner />
      <Stats />

      {/* Hot Apps Section */}
      <div className="py-10 px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Hot Apps</h2>
          <p className="text-slate-500 mt-2">
            Discover the most popular apps trending now.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hotApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/apps" className="btn btn-primary">
            View All Apps
          </Link>
        </div>
      </div>
    </div>
  );
}
