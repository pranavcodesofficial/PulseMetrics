import { useState, useEffect } from 'react';
import { Zap, Brain, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const insights = [
  {
    id: 1,
    icon: TrendingUp,
    type: 'growth',
    title: 'Traffic Spike Detected',
    message: 'Instagram Ads campaign showing 40% increase at 4PM. Consider boosting budget by 25%.',
    action: 'Boost Budget',
    timestamp: '2 min ago',
  },
  {
    id: 2,
    icon: AlertTriangle,
    type: 'warning',
    title: 'Conversion Drop Alert',
    message: 'Mobile checkout conversion dropped 15%. Landing page load time increased to 3.2s.',
    action: 'Optimize Page',
    timestamp: '5 min ago',
  },
  {
    id: 3,
    icon: Brain,
    type: 'insight',
    title: 'Audience Behavior Pattern',
    message: 'Users from organic search have 60% higher session duration. Focus on SEO content.',
    action: 'View Details',
    timestamp: '8 min ago',
  },
];

const AIInsights = () => {
  const [currentInsight, setCurrentInsight] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % insights.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const insight = insights[currentInsight];
  const Icon = insight.icon;

  return (
    <div className="glass-card rounded-xl p-6 glow-primary animate-fade-in-up">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/20 text-primary">
          <Zap className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold gradient-text">AI Insights</h3>
          <p className="text-xs text-muted-foreground">Real-time intelligence</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 border border-border/50 transition-all duration-300">
          <div className="p-2 rounded-full bg-primary/20 text-primary mt-1">
            <Icon className="h-4 w-4" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">{insight.title}</h4>
              <span className="text-xs text-muted-foreground">{insight.timestamp}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {insight.message}
            </p>
            <Button size="sm" variant="outline" className="text-xs h-7">
              {insight.action}
            </Button>
          </div>
        </div>

        {/* Insight Indicators */}
        <div className="flex justify-center space-x-2">
          {insights.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentInsight
                  ? 'bg-primary shadow-glow'
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
              onClick={() => setCurrentInsight(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIInsights;