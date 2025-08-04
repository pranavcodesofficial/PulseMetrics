
import { useState } from 'react';
import { Bell, User, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const tabs = [
    { name: 'Dashboard', path: '/' },
    { name: 'Reports', path: '/reports' },
    { name: 'Teams', path: '/teams' },
    { name: 'Settings', path: '/settings' }
  ];

  const getActiveTab = () => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    return currentTab ? currentTab.name : 'Dashboard';
  };

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src={logo} alt="PulseMetrics" className="w-8 h-8" />
          <span className="gradient-text text-xl font-bold">PulseMetrics</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              variant={getActiveTab() === tab.name ? 'default' : 'ghost'}
              size="sm"
              onClick={() => navigate(tab.path)}
              className={`
                relative px-4 py-2 rounded-lg transition-all duration-300
                ${getActiveTab() === tab.name
                  ? 'bg-primary/20 text-primary shadow-glow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }
              `}
            >
              {tab.name}
              {getActiveTab() === tab.name && (
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary rounded-full" />
              )}
            </Button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative p-2">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xs text-primary-foreground font-medium">3</span>
            </span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1 sm:space-x-2 hover:bg-muted/50 p-1 sm:p-2">
                <Avatar className="h-7 w-7 sm:h-8 sm:w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="hidden lg:block text-sm font-medium">John Doe</span>
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 hidden sm:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass-card border-border/50">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/50 bg-gradient-glass backdrop-blur-glass">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {tabs.map((tab) => (
              <Button
                key={tab.name}
                variant={getActiveTab() === tab.name ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => {
                  navigate(tab.path);
                  setMobileMenuOpen(false);
                }}
              >
                {tab.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
