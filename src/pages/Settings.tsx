import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Camera
} from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-main text-foreground">
      <Navigation />
      
      <main className="container mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Platform Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and configurations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Account Preferences */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Account Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback className="bg-primary/20 text-primary text-lg">JD</AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Camera className="h-4 w-4" />
                    <span>Change Photo</span>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG or GIF. Max 2MB.</p>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input 
                  id="full-name" 
                  defaultValue="John Doe" 
                  className="bg-muted/20 border-border/50"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  defaultValue="john.doe@pulsemetrics.com" 
                  className="bg-muted/20 border-border/50"
                />
              </div>

              {/* Timezone */}
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger className="bg-muted/20 border-border/50">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-border/50">
                    <SelectItem value="utc-8">(UTC-08:00) Pacific Time</SelectItem>
                    <SelectItem value="utc-5">(UTC-05:00) Eastern Time</SelectItem>
                    <SelectItem value="utc-0">(UTC+00:00) GMT</SelectItem>
                    <SelectItem value="utc+1">(UTC+01:00) Central European Time</SelectItem>
                    <SelectItem value="utc+8">(UTC+08:00) China Standard Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input 
                  id="company" 
                  defaultValue="PulseMetrics Inc." 
                  className="bg-muted/20 border-border/50"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="admin">
                  <SelectTrigger className="bg-muted/20 border-border/50">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-border/50">
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="analyst">Analyst</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notification Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email Notifications */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Email Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <div className="text-sm font-medium">Weekly Reports</div>
                      <div className="text-xs text-muted-foreground">Get weekly analytics summaries</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <div className="text-sm font-medium">Alert Notifications</div>
                      <div className="text-xs text-muted-foreground">Critical system alerts and warnings</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <div className="text-sm font-medium">Team Updates</div>
                      <div className="text-xs text-muted-foreground">Team member activity and changes</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              {/* Push Notifications */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Push Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <div className="text-sm font-medium">Browser Notifications</div>
                      <div className="text-xs text-muted-foreground">Real-time notifications in browser</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <div className="text-sm font-medium">Mobile App</div>
                      <div className="text-xs text-muted-foreground">Push notifications on mobile device</div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              {/* SMS Notifications */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium">SMS Notifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <div className="text-sm font-medium">Critical Alerts</div>
                      <div className="text-xs text-muted-foreground">SMS for critical system issues</div>
                    </div>
                    <Switch />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                    <div>
                      <div className="text-sm font-medium">Security Alerts</div>
                      <div className="text-xs text-muted-foreground">SMS for security-related events</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Save Button */}
        <div className="flex justify-end mt-8">
          <Button variant="ghost" className="flex items-center space-x-2">
            <SettingsIcon className="h-4 w-4" />
            <span>Save Changes</span>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Settings;