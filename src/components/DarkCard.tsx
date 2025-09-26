import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useNavigate } from 'react-router-dom';
import d1 from  '@/assets/common/d1.png';
import d2 from  '@/assets/common/d2.png';

interface Department {
  id: string;
  name: string;
  description: string;
  welcomingIdea: string;
  image: string;
}

const departments: Department[] = [
  {
    id: 'animal-husbandry',
    name: 'Animal Husbandry',
    description: 'Livestock development and veterinary services',
    welcomingIdea: 'Advancing livestock development and animal welfare through innovative veterinary practices.',
    image: d1
  },
  {
    id: 'dairy-development',
    name: 'Dairy Development Department',
    description: 'Milk production and dairy industry advancement',
    welcomingIdea: 'Enhancing dairy farming techniques and milk production quality standards.',
    image: d2
  },
  {
    id: 'technical-education',
    name: 'Directorate of Technical Education',
    description: 'Technical and vocational training programs',
    welcomingIdea: 'Providing world-class technical education and skill development opportunities.',
    image: d1
  },
  {
    id: 'environment-climate',
    name: 'Environment & Climate Change',
    description: 'Environmental protection and climate initiatives',
    welcomingIdea: 'Leading sustainable development and climate change mitigation efforts.',
    image:d2
  },
  {
    id: 'economics-statistics',
    name: 'Department of Economics and Statistics',
    description: 'Economic research and statistical analysis',
    welcomingIdea: 'Providing comprehensive economic insights and statistical data analysis.',
    image:d1
  },
  {
    id: 'finance-department',
    name: 'Finance Department',
    description: 'Financial planning and budget management',
    welcomingIdea: 'Managing state finances and implementing fiscal policies effectively.',
    image: d2
  },
  {
    id: 'gst-department',
    name: 'GST Department',
    description: 'Goods and Services Tax administration',
    welcomingIdea: 'Streamlining tax collection and ensuring compliance with GST regulations.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=200&fit=crop'
  },
  {
    id: 'homoeopathy',
    name: 'Homoeopathy Department',
    description: 'Alternative medicine and wellness programs',
    welcomingIdea: 'Promoting holistic health through traditional and alternative medicine practices.',
    image: d2
  },
  {
    id: 'agriculture',
    name: 'Department of Agriculture',
    description: 'Agricultural development and farmer support',
    welcomingIdea: 'Enhancing agricultural productivity and supporting farmer livelihoods.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=200&h=200&fit=crop'
  },
  {
    id: 'health-services',
    name: 'Health & Family Welfare',
    description: 'Public health and medical services',
    welcomingIdea: 'Ensuring quality healthcare services and promoting public health initiatives.',
    image: d1
  }
];

export const DarkDepartmentCards = () => {
  const [ref, isVisible] = useScrollAnimation();
  const navigate = useNavigate();

  const handleViewProposals = (departmentId: string) => {
    navigate(`/department/${departmentId}/proposals`);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-kai-dark to-background">
      <div className="container mx-auto max-w-7xl">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Ideas from <span className="text-kai-cyan">Departments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover cutting-edge research and innovation across multiple disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {departments.map((department, index) => (
            <Card 
              key={department.id}
              className={` card-glass p-6 rounded-xl glow-border transition-all duration-700 hover:scale-105 `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-5 text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-kai-cyan shadow-md">
                    <img 
                      src={department.image} 
                      alt={department.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-gray-800 text-base font-semibold  leading-tight text-kai-cyan">
                  {department.name}
                </CardTitle>
                {/* <CardDescription className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {department.description}
                </CardDescription> */}
                {/* <Button 
                  onClick={() => handleViewProposals(department.id)}
                  variant="outline"
                  className="w-full border-kai-cyan/60 text-kai-dark hover:bg-kai-cyan hover:text-white transition-all duration-300"
                >
                  View Proposals
                </Button> */}
              </CardContent>
              {/* view link */}
              <div className="mt-4">
                <Button 
                  className="w-full bg-gradient-to-r from-kai-blue to-kai-cyan text-kai-dark font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 glow-border"
                >
                  View Ideas
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};