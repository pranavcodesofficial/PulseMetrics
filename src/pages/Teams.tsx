import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, UserPlus, Settings, Crown } from 'lucide-react';

const Teams = () => {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Team Lead', status: 'online', avatar: '/placeholder-avatar.jpg', initials: 'SJ' },
    { name: 'Mike Chen', role: 'Developer', status: 'away', avatar: '/placeholder-avatar.jpg', initials: 'MC' },
    { name: 'Emily Davis', role: 'Designer', status: 'online', avatar: '/placeholder-avatar.jpg', initials: 'ED' },
    { name: 'Alex Rodriguez', role: 'Analyst', status: 'offline', avatar: '/placeholder-avatar.jpg', initials: 'AR' },
    { name: 'Lisa Wang', role: 'Manager', status: 'online', avatar: '/placeholder-avatar.jpg', initials: 'LW' },
    { name: 'Tom Wilson', role: 'Developer', status: 'away', avatar: '/placeholder-avatar.jpg', initials: 'TW' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

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
          <h1 className="text-3xl font-bold gradient-text mb-2">Teams</h1>
          <p className="text-muted-foreground">Manage your team members and collaboration</p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card border-border/50">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Total Members</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <Crown className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">Team Leads</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Active leads</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                <UserPlus className="h-5 w-5 text-primary" />
                <CardTitle className="text-sm">New Invites</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Pending approval</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Members Grid */}
        <Card className="glass-card border-border/50 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>Team Members</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/20 border border-border/30 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background ${getStatusColor(member.status)}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{member.name}</h3>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {member.status}
                    </Badge>
                    <Settings className="h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Activity */}
        <Card className="glass-card border-border/50">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/20">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-2/3 mb-1" />
                    <Skeleton className="h-3 w-1/3" />
                  </div>
                  <Skeleton className="h-6 w-16" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Teams;