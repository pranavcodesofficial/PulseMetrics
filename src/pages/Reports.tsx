import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, BarChart3, Download, Calendar, ChevronDown } from 'lucide-react';

const Reports = () => {
  const reportSnapshots = [
    { name: 'User Engagement Report', generatedOn: '2024-01-15', status: 'Completed' },
    { name: 'Revenue Analytics Q4', generatedOn: '2024-01-14', status: 'Completed' },
    { name: 'Campaign Performance', generatedOn: '2024-01-13', status: 'Processing' },
    { name: 'Customer Cohort Analysis', generatedOn: '2024-01-12', status: 'Completed' },
    { name: 'Traffic Sources Report', generatedOn: '2024-01-11', status: 'Failed' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Processing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Failed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-main text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2">Reports Overview</h1>
            <p className="text-muted-foreground">Comprehensive analytics and reporting dashboard</p>
          </div>
          
          {/* Date Range Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Last 30 Days</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card border-border/50">
              <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
              <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
              <DropdownMenuItem>Last 90 Days</DropdownMenuItem>
              <DropdownMenuItem>Custom Range</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Large Analytics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="glass-card border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Monthly Active Users</CardTitle>
                </div>
                <TrendingUp className="h-4 w-4 text-green-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">127,834</div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    +12.5%
                  </Badge>
                  <span className="text-sm text-muted-foreground">from last month</span>
                </div>
                {/* Sparkline placeholder */}
                <div className="h-20 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg flex items-end justify-between px-2 py-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-primary/60 rounded-sm"
                      style={{ 
                        height: `${Math.random() * 60 + 20}%`,
                        width: '6px'
                      }}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Top Performing Channels</CardTitle>
                </div>
                <TrendingUp className="h-4 w-4 text-green-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold">$1,847,293</div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    +8.2%
                  </Badge>
                  <span className="text-sm text-muted-foreground">total revenue</span>
                </div>
                {/* Channel breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Organic Search</span>
                    <span className="font-medium">42.3%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Direct Traffic</span>
                    <span className="font-medium">28.7%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Social Media</span>
                    <span className="font-medium">18.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Email Campaign</span>
                    <span className="font-medium">10.1%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Report Snapshots Table */}
        <Card className="glass-card border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Recent Report Snapshots</span>
              </CardTitle>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export All</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Generated On</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportSnapshots.map((report, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{report.name}</TableCell>
                    <TableCell className="text-muted-foreground">{report.generatedOn}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Reports;