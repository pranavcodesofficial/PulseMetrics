import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Users, UserPlus, Mail, MoreHorizontal } from 'lucide-react';

const Teams = () => {
  const teamMembers = [
    { 
      name: 'Sarah Johnson', 
      role: 'Lead Developer', 
      status: 'Active', 
      email: 'sarah.johnson@pulsemetrics.com',
      avatar: '/placeholder-avatar.jpg', 
      initials: 'SJ',
      joinedDate: '2023-01-15'
    },
    { 
      name: 'Mike Chen', 
      role: 'Senior Analyst', 
      status: 'Active', 
      email: 'mike.chen@pulsemetrics.com',
      avatar: '/placeholder-avatar.jpg', 
      initials: 'MC',
      joinedDate: '2023-03-22'
    },
    { 
      name: 'Emily Davis', 
      role: 'UX Designer', 
      status: 'Active', 
      email: 'emily.davis@pulsemetrics.com',
      avatar: '/placeholder-avatar.jpg', 
      initials: 'ED',
      joinedDate: '2023-02-10'
    },
    { 
      name: 'Alex Rodriguez', 
      role: 'Data Scientist', 
      status: 'Invited', 
      email: 'alex.rodriguez@pulsemetrics.com',
      avatar: '/placeholder-avatar.jpg', 
      initials: 'AR',
      joinedDate: '2024-01-05'
    },
    { 
      name: 'Lisa Wang', 
      role: 'Product Manager', 
      status: 'Active', 
      email: 'lisa.wang@pulsemetrics.com',
      avatar: '/placeholder-avatar.jpg', 
      initials: 'LW',
      joinedDate: '2022-11-30'
    },
    { 
      name: 'Tom Wilson', 
      role: 'Backend Developer', 
      status: 'Active', 
      email: 'tom.wilson@pulsemetrics.com',
      avatar: '/placeholder-avatar.jpg', 
      initials: 'TW',
      joinedDate: '2023-07-18'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Invited': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
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
            <h1 className="text-3xl font-bold gradient-text mb-2">Team Management</h1>
            <p className="text-muted-foreground">Manage your team members and collaboration</p>
          </div>
          
          <Button className="flex items-center space-x-2">
            <UserPlus className="h-4 w-4" />
            <span>Add New Member</span>
          </Button>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center space-x-3">
            <Switch id="show-active" />
            <label htmlFor="show-active" className="text-sm font-medium">
              Show only active members
            </label>
          </div>
          
          <div className="text-sm text-muted-foreground">
            {teamMembers.filter(m => m.status === 'Active').length} active • {teamMembers.filter(m => m.status === 'Invited').length} invited
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback className="bg-primary/20 text-primary font-medium">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-base">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="p-1">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground truncate">{member.email}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={getStatusColor(member.status)}>
                      {member.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Joined {new Date(member.joinedDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  {member.status === 'Invited' && (
                    <Button variant="outline" size="sm" className="w-full">
                      Resend Invitation
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="glass-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.length}</div>
              <p className="text-xs text-muted-foreground">Across all teams</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.filter(m => m.status === 'Active').length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-border/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Invites</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamMembers.filter(m => m.status === 'Invited').length}</div>
              <p className="text-xs text-muted-foreground">Awaiting response</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Teams;