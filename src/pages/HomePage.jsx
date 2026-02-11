import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import StorySection from '../sections/StorySection';
import DetailsSection from '../sections/DetailsSection';
import RSVPSection from '../sections/RSVPSection';
import GiftsSection from '../sections/GiftsSection';
import GallerySection from '../sections/GallerySection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      <main className="pt-16">
        <HeroSection />
        <StorySection />
        <DetailsSection />
        <RSVPSection />
        <GiftsSection />
        <GallerySection />
      </main>
      
      <Footer />
    </div>
  );
}
