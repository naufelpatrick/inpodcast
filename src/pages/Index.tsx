
import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import LatestEpisode from '@/components/sections/LatestEpisode';
import FeaturedReels from '@/components/sections/FeaturedReels';
import Testimonials from '@/components/sections/Testimonials';
import PlatformsCTA from '@/components/sections/PlatformsCTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <LatestEpisode />
      <FeaturedReels />
      <Testimonials />
      <PlatformsCTA />
    </Layout>
  );
};

export default Index;
