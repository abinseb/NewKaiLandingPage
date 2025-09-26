import { useEffect, useState } from 'react';
import k1Background from '@/assets/background.png';
import k2Title from '@/assets/k2.png';
import img1 from '@/assets/common/2.png'
import img2 from '@/assets/common/3.png'
import img3 from '@/assets/common/4.png'
import logokerala from '@/assets/gok.png'

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}

      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat animate-pulse-glow floating-animation"
          style={{ backgroundImage: `url(${k1Background})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-kai-dark/50 to-kai-purple/70" />

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-cyan-300 rounded-full animate-float opacity-30 transition-all duration-300 shadow-lg  "
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className='flex z-10   flex-col  w-full'>
        <div className='flex  w-full justify-between mb-5 text-cyan-200 px-1 md:px-20'>

          <div className="flex justify-center items-center">
            <img src={logokerala} alt="Logo" className=" h-10 md:h-16 cursor-pointer w-auto bg-white" />
            {/* <span className="text-xl md:text-2xl font-bold ">
                    K-AI
                      </span> */}
          </div>
          <button className="px-4 py-2 text-lg flex items-center text-cyan-200">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5" />
              <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
              <path d="M15 19l2 2l4 -4" />
            </svg>

            Login
          </button>

        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Title Image */}
            <div className=' flex flex-col '>
            <div className="mb-8 flex ">
              <img
                src={k2Title}
                alt="K-AI The Guiding Hand of Smart Governance"
                className="max-w-xl w-full  h-auto "
                style={{ filter: 'drop-shadow(0 0 20px hsl(var(--kai-cyan) / 0.6))' }}
              />
            </div>

            {/* Description */}
            <div className="space-y-6  flex justify-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-start text-xl md:text-2xl text-kai-glow leading-relaxed max-w-4xl ">
                Revolutionizing governance through artificial intelligence. Experience the future of
                smart decision-making with K-AI's advanced neural networks and predictive analytics.
              </p>
            </div>
              {/* cards */}
              <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Capture Idea",
                      description: "Departments or registered users can submit their ideas through a structured form, selecting the relevant category and uploading necessary documents.",
                      icon: img1,
                      href: "/published-ideas"
                    },
                    {
                      title: "Evaluate",
                      description: "Proposals submitted by government departments, startups, and other organizations will be evaluated by a panel of expert reviewers based on key criteria such as innovation, feasibility, relevance, and potential impact. The most promising ideas will be shortlisted and recommended for implementation through a structured evaluation process",
                      icon: img2,
                    },
                    {
                      title: "Implement",
                      description: "The shortlisted ideas by the expert evaluators will be implemented and monitored with the support from the KSITM and the expert team.",
                      icon: img3,
                    }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="relative rounded-lg p-2  py-3 px-4 text-center overflow-hidden border-cyan-400 border-2 animated-border"
                    >
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-[#1A1130]  rounded-[0.5rem] z-0"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="h-10 w-10 mx-auto flex items-center justify-center">
                          <img
                            src={feature.icon}
                            alt={feature.icon}
                            className="h-12 w-12 object-cover rounded-full"
                          />
                        </div>
                        <h3 className="font-bold text-3xl text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-100 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="flex flex-col  gap-4 justify-center items-center mt-8 mb-20">
               <button className="px-8 py-4 bg-gradient-to-r from-kai-blue to-kai-cyan text-kai-dark font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 glow-border">
                  Vidya -AI
                </button> 
               
                <p className="text-kai-cyan text-sm md:text-base">
                  A Training Program Portal for Government Employees
                </p>

                <button className="px-8 py-4 bg-transparent border border-kai-cyan text-kai-cyan font-semibold rounded-lg hover:bg-kai-cyan hover:text-kai-dark transition-all duration-300">
                Vidy - AI
                </button>
              </div> */}
            </div>
          </div>

          {/* Scroll indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-kai-cyan rounded-full flex justify-center">
              <div className="w-1 h-3 bg-kai-cyan rounded-full mt-2 animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};