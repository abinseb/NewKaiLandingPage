import { HeroSection } from '@/components/HeroSection';
import { StatsCards } from '@/components/StatsCards';
import { DataTable } from '@/components/DataTable';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <StatsCards />
      <DataTable />
      <Footer />
    </div>
  );
};

export default Index;