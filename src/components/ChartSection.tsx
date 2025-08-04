import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartSection = () => {
  // Line Chart Data - User Engagement
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'User Engagement',
        data: [65, 78, 85, 81, 96, 104, 118],
        borderColor: 'hsl(220 100% 50%)',
        backgroundColor: 'hsl(220 100% 50% / 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: 'hsl(220 100% 50%)',
        pointBorderColor: 'hsl(220 100% 60%)',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  // Bar Chart Data - Revenue by Channel
  const barData = {
    labels: ['Organic', 'Paid Search', 'Social', 'Email', 'Direct'],
    datasets: [
      {
        label: 'Revenue ($)',
        data: [42000, 35000, 28000, 22000, 18000],
        backgroundColor: [
          'hsl(220 100% 50% / 0.8)',
          'hsl(260 100% 70% / 0.8)',
          'hsl(200 100% 60% / 0.8)',
          'hsl(142 76% 36% / 0.8)',
          'hsl(38 92% 50% / 0.8)',
        ],
        borderColor: [
          'hsl(220 100% 50%)',
          'hsl(260 100% 70%)',
          'hsl(200 100% 60%)',
          'hsl(142 76% 36%)',
          'hsl(38 92% 50%)',
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const chartOptions = {
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
      },
    },
    scales: {
      x: {
        grid: {
          color: 'hsl(240 10% 18%)',
          drawBorder: false,
        },
        ticks: {
          color: 'hsl(240 5% 65%)',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: 'hsl(240 10% 18%)',
          drawBorder: false,
        },
        ticks: {
          color: 'hsl(240 5% 65%)',
          font: {
            family: 'Inter',
            size: 12,
          },
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const,
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Line Chart */}
      <div className="glass-card rounded-xl p-6 animate-fade-in-up delay-100">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">User Engagement Trend</h3>
          <p className="text-sm text-muted-foreground">Monthly active users over time</p>
        </div>
        <div className="h-64">
          <Line data={lineData} options={chartOptions} />
        </div>
      </div>

      {/* Bar Chart */}
      <div className="glass-card rounded-xl p-6 animate-fade-in-up delay-200">
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Revenue by Channel</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue breakdown</p>
        </div>
        <div className="h-64">
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default ChartSection;