import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { BarChart3, TrendingUp, FileText, Calendar } from 'lucide-react';

const Reports = () => {
  return (
    <div className="min-h-screen bg-gradient-main text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        {/* Coming Soon Banner */}
        <div className="mb-8 p-4 rounded-lg bg-muted/20 border border-border/50">
          <p className="text-center text-muted-foreground">
            🚧 Coming soon — part of our product roadmap.
          </p>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Reports</h1>
          <p className="text-muted-foreground">Comprehensive analytics and reporting dashboard</p>
        </div>

        {/* Report Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Performance Report', icon: BarChart3, type: 'Weekly' },
            { title: 'Growth Analysis', icon: TrendingUp, type: 'Monthly' },
            { title: 'User Insights', icon: FileText, type: 'Quarterly' },
            { title: 'Custom Reports', icon: Calendar, type: 'Custom' }
          ].map((report, index) => (
            <Card key={index} className="glass-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <report.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-medium">{report.title}</CardTitle>
                    <p className="text-xs text-muted-foreground">{report.type}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Reports Section */}
        <Card className="glass-card border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Recent Reports</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/20">
                  <Skeleton className="h-10 w-10 rounded" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-1/3 mb-2" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                  <Skeleton className="h-8 w-20" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chart Placeholder */}
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle>Analytics Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Reports;