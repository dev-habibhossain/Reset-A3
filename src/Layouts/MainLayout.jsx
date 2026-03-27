import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Toaster position="top-right" />
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
