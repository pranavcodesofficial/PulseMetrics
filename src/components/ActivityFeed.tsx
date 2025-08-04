import { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  ShoppingCart, 
  UserPlus, 
  MessageSquare, 
  Star, 
  CreditCard,
  Eye,
  Download,
  Share
} from 'lucide-react';

const activityTypes = {
  purchase: { icon: ShoppingCart, color: 'hsl(142 76% 36%)', label: 'Purchase' },
  signup: { icon: UserPlus, color: 'hsl(220 100% 50%)', label: 'New User' },
  review: { icon: Star, color: 'hsl(38 92% 50%)', label: 'Review' },
  message: { icon: MessageSquare, color: 'hsl(260 100% 70%)', label: 'Message' },
  payment: { icon: CreditCard, color: 'hsl(142 76% 36%)', label: 'Payment' },
  view: { icon: Eye, color: 'hsl(200 100% 60%)', label: 'Page View' },
  download: { icon: Download, color: 'hsl(260 100% 70%)', label: 'Download' },
  share: { icon: Share, color: 'hsl(200 100% 60%)', label: 'Share' },
};

const initialActivities = [
  {
    id: 1,
    type: 'purchase',
    user: { name: 'John Smith', avatar: '', initials: 'JS' },
    message: 'completed a purchase of $299',
    timestamp: '2 minutes ago',
    details: 'Pro Plan Subscription',
  },
  {
    id: 2,
    type: 'signup',
    user: { name: 'Emma Wilson', avatar: '', initials: 'EW' },
    message: 'signed up for a new account',
    timestamp: '5 minutes ago',
    details: 'From organic search',
  },
  {
    id: 3,
    type: 'review',
    user: { name: 'Mike Johnson', avatar: '', initials: 'MJ' },
    message: 'left a 5-star review',
    timestamp: '8 minutes ago',
    details: 'Dashboard Analytics',
  },
  {
    id: 4,
    type: 'message',
    user: { name: 'Sarah Chen', avatar: '', initials: 'SC' },
    message: 'sent a support message',
    timestamp: '12 minutes ago',
    details: 'Integration help',
  },
  {
    id: 5,
    type: 'payment',
    user: { name: 'David Kim', avatar: '', initials: 'DK' },
    message: 'upgraded to Enterprise plan',
    timestamp: '15 minutes ago',
    details: '$999/month',
  },
  {
    id: 6,
    type: 'view',
    user: { name: 'Lisa Brown', avatar: '', initials: 'LB' },
    message: 'viewed pricing page',
    timestamp: '18 minutes ago',
    details: 'Mobile device',
  },
];

const ActivityFeed = () => {
  const [activities, setActivities] = useState(initialActivities);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        type: Object.keys(activityTypes)[Math.floor(Math.random() * Object.keys(activityTypes).length)] as keyof typeof activityTypes,
        user: {
          name: ['Alex Morgan', 'Taylor Swift', 'Chris Evans', 'Emma Stone'][Math.floor(Math.random() * 4)],
          avatar: '',
          initials: ['AM', 'TS', 'CE', 'ES'][Math.floor(Math.random() * 4)],
        },
        message: [
          'completed a purchase',
          'signed up for trial',
          'downloaded report',
          'shared dashboard'
        ][Math.floor(Math.random() * 4)],
        timestamp: 'Just now',
        details: ['Pro Plan', 'Free Trial', 'Analytics Report', 'Public Link'][Math.floor(Math.random() * 4)],
      };

      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in-up delay-500">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Real-Time Activity</h3>
        <p className="text-sm text-muted-foreground">Live user actions and events</p>
      </div>

      <ScrollArea className="h-96">
        <div className="space-y-4">
          {activities.map((activity, index) => {
            const activityType = activityTypes[activity.type];
            const Icon = activityType.icon;

            return (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                    <AvatarFallback className="bg-primary/20 text-primary text-xs font-medium">
                      {activity.user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background flex items-center justify-center"
                    style={{ backgroundColor: activityType.color }}
                  >
                    <Icon className="h-2 w-2 text-white" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user.name}</span>{' '}
                      <span className="text-muted-foreground">{activity.message}</span>
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {activityType.label}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">{activity.details}</p>
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ActivityFeed;