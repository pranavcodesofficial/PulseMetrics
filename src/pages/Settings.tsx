import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Database,
  Key,
  Globe
} from 'lucide-react';

const Settings = () => {
  const settingsCategories = [
    {
      title: 'Profile Settings',
      icon: User,
      items: [
        { label: 'Display Name', value: 'John Doe' },
        { label: 'Email', value: 'john.doe@company.com' },
        { label: 'Profile Picture', component: 'avatar' },
        { label: 'Bio', value: 'Analytics Manager' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', component: 'switch', defaultChecked: true },
        { label: 'Push Notifications', component: 'switch', defaultChecked: false },
        { label: 'Weekly Reports', component: 'switch', defaultChecked: true },
        { label: 'Team Updates', component: 'switch', defaultChecked: true }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        { label: 'Two-Factor Authentication', component: 'switch', defaultChecked: false },
        { label: 'Login Alerts', component: 'switch', defaultChecked: true },
        { label: 'Data Sharing', component: 'switch', defaultChecked: false },
        { label: 'Session Timeout', value: '30 minutes' }
      ]
    },
    {
      title: 'Appearance',
      icon: Palette,
      items: [
        { label: 'Theme', value: 'Dark Mode' },
        { label: 'Language', value: 'English (US)' },
        { label: 'Date Format', value: 'MM/DD/YYYY' },
        { label: 'Timezone', value: 'UTC-8 (PST)' }
      ]
    }
  ];

  const renderSettingItem = (item: any, index: number) => {
    if (item.component === 'switch') {
      return (
        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
          <span className="text-sm font-medium">{item.label}</span>
          <Switch defaultChecked={item.defaultChecked} />
        </div>
      );
    }
    
    if (item.component === 'avatar') {
      return (
        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
          <span className="text-sm font-medium">{item.label}</span>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      );
    }

    return (
      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
        <span className="text-sm font-medium">{item.label}</span>
        <span className="text-sm text-muted-foreground">{item.value}</span>
      </div>
    );
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
          <h1 className="text-3xl font-bold gradient-text mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and configurations</p>
        </div>

        {/* Quick Settings */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'API Keys', icon: Key, count: '3 active' },
            { title: 'Integrations', icon: Database, count: '5 connected' },
            { title: 'Webhooks', icon: Globe, count: '2 configured' },
            { title: 'Backups', icon: Shield, count: 'Daily' }
          ].map((setting, index) => (
            <Card key={index} className="glass-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <setting.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{setting.title}</h3>
                    <p className="text-xs text-muted-foreground">{setting.count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Settings Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {settingsCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <category.icon className="h-5 w-5" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => 
                    renderSettingItem(item, itemIndex)
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Information */}
        <Card className="glass-card border-border/50 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="h-5 w-5" />
              <span>System Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-muted/20">
                <div className="text-sm font-medium mb-1">Version</div>
                <Badge variant="secondary">v2.4.1</Badge>
              </div>
              <div className="p-3 rounded-lg bg-muted/20">
                <div className="text-sm font-medium mb-1">Last Updated</div>
                <div className="text-sm text-muted-foreground">2 days ago</div>
              </div>
              <div className="p-3 rounded-lg bg-muted/20">
                <div className="text-sm font-medium mb-1">Status</div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Operational
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Settings;