import { HeroSection } from '@/components/HeroSection';
import { StatsCards } from '@/components/StatsCards';
import { DataTable } from '@/components/DataTable';
import { Footer } from '@/components/Footer';
import { DepartmentCards } from '@/components/DepartmentCard';
import { DarkDepartmentCards } from '@/components/DarkCard';
import Feedback from '@/components/Feedback';
import { VidyAiCards } from '@/components/VidyAi';

const Index = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <StatsCards />
      <VidyAiCards/>
      {/* <DepartmentCards/> */}
      <DarkDepartmentCards/>
      <Feedback/>
      {/* <DataTable /> */}

      <Footer />
    </div>
  );
};

export default Index;