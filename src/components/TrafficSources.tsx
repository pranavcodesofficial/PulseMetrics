import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TrafficSources = () => {
  const data = {
    labels: ['Organic', 'Paid', 'Direct', 'Referral'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: [
          'hsl(220 100% 50%)',
          'hsl(260 100% 70%)',
          'hsl(200 100% 60%)',
          'hsl(142 76% 36%)',
        ],
        borderColor: [
          'hsl(220 100% 60%)',
          'hsl(260 100% 80%)',
          'hsl(200 100% 70%)',
          'hsl(142 76% 46%)',
        ],
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'hsl(240 10% 12% / 0.95)',
        titleColor: 'hsl(0 0% 98%)',
        bodyColor: 'hsl(0 0% 98%)',
        borderColor: 'hsl(240 10% 18%)',
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
        callbacks: {
          label: (context: any) => {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
    cutout: '70%',
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const,
    },
  };

  const totalTraffic = 125432;

  const legendItems = [
    { label: 'Organic', value: 45, color: 'hsl(220 100% 50%)', count: Math.round(totalTraffic * 0.45) },
    { label: 'Paid', value: 25, color: 'hsl(260 100% 70%)', count: Math.round(totalTraffic * 0.25) },
    { label: 'Direct', value: 20, color: 'hsl(200 100% 60%)', count: Math.round(totalTraffic * 0.20) },
    { label: 'Referral', value: 10, color: 'hsl(142 76% 36%)', count: Math.round(totalTraffic * 0.10) },
  ];

  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in-up delay-300">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Traffic Sources</h3>
        <p className="text-sm text-muted-foreground">Last 30 days breakdown</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="relative h-48">
          <Doughnut data={data} options={options} />
          {/* Center Total */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-2xl font-bold">{totalTraffic.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Visits</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {legendItems.map((item, index) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold">{item.value}%</p>
                <p className="text-xs text-muted-foreground">{item.count.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficSources;