import { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Users, Target, MousePointer, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  trend: number;
  icon: 'users' | 'conversion' | 'bounce' | 'revenue';
  delay?: number;
}

const iconMap = {
  users: Users,
  conversion: Target,
  bounce: MousePointer,
  revenue: DollarSign,
};

const KPICard = ({ title, value, trend, icon, delay = 0 }: KPICardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const Icon = iconMap[icon];
  const isPositiveTrend = trend > 0;
  const TrendIcon = isPositiveTrend ? TrendingUp : TrendingDown;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let currentValue = 0;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(currentValue));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  const formatDisplayValue = () => {
    if (typeof value === 'string' && value.includes('$')) {
      return `$${displayValue.toLocaleString()}`;
    }
    if (typeof value === 'string' && value.includes('%')) {
      return `${displayValue.toFixed(1)}%`;
    }
    return displayValue.toLocaleString();
  };

  return (
    <div
      className={cn(
        'glass-card rounded-xl p-6 transition-all duration-500 transform hover:scale-105',
        'animate-fade-in-up',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-lg bg-primary/20 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div className={cn(
          'flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium',
          isPositiveTrend
            ? 'bg-success/20 text-success'
            : 'bg-destructive/20 text-destructive'
        )}>
          <TrendIcon className="h-3 w-3" />
          <span>{Math.abs(trend)}%</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="text-2xl font-bold counter">{formatDisplayValue()}</p>
      </div>
    </div>
  );
};

export default KPICard;