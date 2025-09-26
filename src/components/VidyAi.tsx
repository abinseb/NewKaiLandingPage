import { useScrollAnimation, useCounterAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';

const statsData = [
  {
    number: 10,
    suffix: '+',
    title: 'Programs',
    description: 'Diverse skill development programs offered',
    icon: '🎓'
  },
  {
    number: 20,
    suffix: '+',
    title: 'Departments',
    description: 'Active collaboration across government & institutions',
    icon: '♻️'
  },
  {
    number: 500,
    suffix: '+',
    title: 'Participants',
    description: 'Strong participation from diverse backgrounds',
    icon: '👥'
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

export const VidyAiCards = () => {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="pt-0 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-800  ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          Capacity Building Portal
          </h2>
          <p className="text-xl text-muted-foreground  max-w-3xl mx-auto">
          Driving Departmental Excellence through AI 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
      {/* vidyai button */}
      <div className='relative pt-5'>
            <div className="flex flex-col  gap-4 justify-center items-center mt-8 mb-20">
                        {/* <button className="px-8 py-4 bg-gradient-to-r from-kai-blue to-kai-cyan text-kai-dark font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 glow-border">
                        Vidya -AI
                        </button> */}
                        {/* Text that idicate its a trainig program portal --> viyAi */}
                        {/* <p className="text-kai-cyan text-sm md:text-base">
                        A Training Program Portal for Government Employees
                        </p> */}

                        <button className="px-8 py-4 bg-transparent border border-kai-cyan text-kai-cyan font-semibold rounded-lg hover:bg-kai-cyan hover:text-kai-dark transition-all duration-300">
                        Vidy - AI
                        </button>
            </div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-kai-cyan rounded-full flex justify-center">
              <div className="w-1 h-3 bg-kai-cyan rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
    </section>
  );
};