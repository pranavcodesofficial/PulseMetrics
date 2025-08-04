import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Marketing Director',
    avatar: '/placeholder-avatar.jpg',
    status: 'online',
    initials: 'SC',
    lastActive: 'now',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Data Analyst',
    avatar: '/placeholder-avatar.jpg',
    status: 'away',
    initials: 'MR',
    lastActive: '5m ago',
  },
  {
    id: 3,
    name: 'Emily Foster',
    role: 'Product Manager',
    avatar: '/placeholder-avatar.jpg',
    status: 'online',
    initials: 'EF',
    lastActive: 'now',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Growth Engineer',
    avatar: '/placeholder-avatar.jpg',
    status: 'offline',
    initials: 'DK',
    lastActive: '2h ago',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'UX Designer',
    avatar: '/placeholder-avatar.jpg',
    status: 'online',
    initials: 'LT',
    lastActive: 'now',
  },
  {
    id: 6,
    name: 'Alex Morgan',
    role: 'Backend Developer',
    avatar: '/placeholder-avatar.jpg',
    status: 'away',
    initials: 'AM',
    lastActive: '15m ago',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'online':
      return 'bg-success';
    case 'away':
      return 'bg-warning';
    case 'offline':
      return 'bg-muted-foreground';
    default:
      return 'bg-muted-foreground';
  }
};

const getStatusVariant = (status: string) => {
  switch (status) {
    case 'online':
      return 'default';
    case 'away':
      return 'secondary';
    case 'offline':
      return 'outline';
    default:
      return 'outline';
  }
};

const TeamGrid = () => {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in-up delay-400">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Team Members</h3>
        <p className="text-sm text-muted-foreground">Current team status and availability</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="group p-4 rounded-lg border border-border/50 bg-muted/20 hover:bg-muted/40 transition-all duration-300 hover:scale-105 hover:shadow-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="relative">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-primary/20 text-primary font-medium">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background ${getStatusColor(
                    member.status
                  )}`}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{member.name}</p>
                <p className="text-xs text-muted-foreground truncate">{member.role}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Badge variant={getStatusVariant(member.status)} className="text-xs capitalize">
                {member.status}
              </Badge>
              <div className="flex items-center space-x-1">
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MessageCircle className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Mail className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-border/30">
              <p className="text-xs text-muted-foreground">
                Last active: {member.lastActive}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;