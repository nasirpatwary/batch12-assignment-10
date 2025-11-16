import useChartCollect from "../hooks/useChartCollect";

const ChartCard = () => {
  const [data] = useChartCollect();
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="border space-y-2 border-primary w-full rounded-2xl p-5">
        <p className="text-2xl">Total Revenue</p>
        <h2 className="text-2xl md:text-5xl font-bold text-primary">
          {data.revenue}{" "}
        </h2>
      </div>
      <div className="border space-y-2 border-primary w-full rounded-2xl p-5">
        <p className="text-2xl">Total Financils</p>
        <h2 className="text-2xl md:text-5xl font-bold text-primary">
          {data.financials}
        </h2>
      </div>

      <div className="border space-y-2 border-primary w-full rounded-2xl p-5">
        <p className="text-2xl">Total Users</p>
        <h2 className="text-2xl md:text-5xl font-bold text-primary">
          {data.users}
        </h2>
      </div>
    </div>
  );
};

export default ChartCard;
