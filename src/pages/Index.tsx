import Navigation from '@/components/Navigation';
import KPICard from '@/components/KPICard';
import AIInsights from '@/components/AIInsights';
import ChartSection from '@/components/ChartSection';
import TrafficSources from '@/components/TrafficSources';
import TeamGrid from '@/components/TeamGrid';
import ActivityFeed from '@/components/ActivityFeed';

const Index = () => {
  const kpiData = [
    {
      title: 'Total Visitors',
      value: '124,892',
      trend: 12.5,
      icon: 'users' as const,
      delay: 0,
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      trend: 8.3,
      icon: 'conversion' as const,
      delay: 100,
    },
    {
      title: 'Bounce Rate',
      value: '42.8%',
      trend: -5.2,
      icon: 'bounce' as const,
      delay: 200,
    },
    {
      title: 'Revenue',
      value: '$89,432',
      trend: 15.7,
      icon: 'revenue' as const,
      delay: 300,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero KPI Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <KPICard
              key={index}
              title={kpi.title}
              value={kpi.value}
              trend={kpi.trend}
              icon={kpi.icon}
              delay={kpi.delay}
            />
          ))}
        </section>

        {/* AI Insights Section */}
        <section>
          <AIInsights />
        </section>

        {/* Charts Section */}
        <section>
          <ChartSection />
        </section>

        {/* Traffic Sources & Activity Grid */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-1">
            <TrafficSources />
          </div>
          <div className="xl:col-span-2">
            <ActivityFeed />
          </div>
        </section>

        {/* Team Section */}
        <section>
          <TeamGrid />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-gradient-glass backdrop-blur-glass mt-16">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 PulseMetrics. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;