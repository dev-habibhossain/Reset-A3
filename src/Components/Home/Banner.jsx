import heroImg from "../../assets/hero.png";

export default function Banner() {
  return (
    <div className="flex flex-col items-center text-center py-16 px-4 bg-white">
      <h1 className="text-5xl font-bold text-slate-800">
        We Build <span className="text-primary">Productive</span> Apps
      </h1>
      <p className="max-w-2xl text-slate-500 mt-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
      </p>
      <div className="flex gap-4 mt-8">
        <button className="btn btn-outline gap-2 border-slate-300">
          Google Play
        </button>
        <button className="btn btn-outline gap-2 border-slate-300">
          App Store
        </button>
      </div>
      <div className="mt-12 relative">
        <img
          src={heroImg}
          alt="App Mockup"
          className="w-full max-w-md mx-auto"
        />
      </div>
    </div>
  );
}
