import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import WelcomeHero from "@/components/WelcomeHero";
import PhotoGallery from "@/components/PhotoGallery";
import collageBg from "@/assets/collage-bg.jpg";
import MoodTracker from "@/components/MoodTracker";
import Journal from "@/components/Journal";
import DailyQuote from "@/components/DailyQuote";
import BreathingExercise from "@/components/BreathingExercise";
import CalmingSounds from "@/components/CalmingSounds";
import MeditationGuide from "@/components/MeditationGuide";
import ProgressTracker from "@/components/ProgressTracker";
import SafeSpace from "@/components/SafeSpace";
import SupportChatbot from "@/components/SupportChatbot";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${collageBg})` }}
      />
      <div className="fixed inset-0 bg-gradient-calm opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto py-8 px-4 space-y-8">
        {/* Inspiration Link */}
        <div className="flex justify-end animate-fade-in">
          <Link to="/inspiration">
            <Button variant="secondary" className="shadow-soft">
              <Sparkles className="w-4 h-4 mr-2" />
              View Inspiration
            </Button>
          </Link>
        </div>
        <WelcomeHero />
        
        <PhotoGallery />
        
        <DailyQuote />
        
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <MoodTracker />
          <ProgressTracker />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <BreathingExercise />
          <CalmingSounds />
        </div>
        
        <div className="animate-fade-in">
          <MeditationGuide />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <Journal />
          <SafeSpace />
        </div>
        
        
        <div className="animate-fade-in">
          <SupportChatbot />
        </div>

        <footer className="text-center py-8 text-muted-foreground">
          <p className="text-sm">
            Remember: You are loved, you are valued, and you matter. 💜
          </p>
          <p className="text-xs mt-2">
            Made with love by Kavi for Dheepuu
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
