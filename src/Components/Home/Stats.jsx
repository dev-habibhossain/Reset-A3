export default function Stats() {
  const stats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      sub: "21% More Than Last Month",
    },
    { label: "Total Reviews", value: "906K", sub: "46% More Than Last Month" },
    { label: "Active Apps", value: "132+", sub: "31 More Will Launch" },
  ];

  return (
    <div className="bg-primary text-white py-12 px-4 rounded-none">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Trusted By Millions, Built For You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        {stats.map((s, idx) => (
          <div key={idx}>
            <p className="opacity-80 text-sm">{s.label}</p>
            <h3 className="text-4xl font-bold my-2">{s.value}</h3>
            <p className="text-xs opacity-60">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
