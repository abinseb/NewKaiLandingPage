import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';

const statsData = [
  {
    number: 20,
    suffix: '+',
    title: 'Departments',
    description: 'Government departments leveraging AI for better governance',
    icon: '🎯'
  },
  {
    number: 50,
    suffix: '+',
    title: 'Ideas ',
    description: 'Driving innovation with ideas from various sectors',
    icon: '⚡'
  },
  {
    number: 700,
    suffix: '+',
    title: 'Proposals',
    description: 'Innovation Pipeline in Progress',
    icon: '💡'
  }
];

const StatCard = ({ stat, index }: { stat: typeof statsData[0], index: number }) => {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const [count, startAnimation] = useCounterAnimation(stat.number);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => startAnimation(), index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, startAnimation, index]);

  return (
    <div
      ref={ref}
      className={`card-glass p-6 rounded-xl glow-border transition-all duration-700 hover:scale-105 ${
        isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="text-center space-y-4">
        <div className="text-4xl mb-4">{stat.icon}</div>
        
        <div className="space-y-2">
          <div className="text-4xl md:text-5xl font-bold glow-text">
            {count}{stat.suffix}
          </div>
          <h3 className="text-xl font-semibold text-kai-cyan">{stat.title}</h3>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {stat.description}
        </p>
      </div>
    </div>
  );
};

export const StatsCards = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Powering Smart Governance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the transformation of traditional governance through cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};