import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-collage.jpg";

const WelcomeHero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden rounded-3xl mx-4 mt-4 shadow-soft">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-white/50" />
      
      <div className="relative z-10 text-center px-6 py-12 animate-fade-in">
        <Heart className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse-glow" />
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          You're Not Alone
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 mb-4 max-w-2xl mx-auto font-bold">
          A gentle space created with love
        </p>
        <div className="text-gray-700 text-lg space-y-2">
          <p className="italic font-bold">From Kavi, for Dheepuu 💜</p>
          <p className="text-base max-w-xl mx-auto leading-relaxed font-bold">
            This is your safe heaven — a place where you can breathe, reflect, and find support whenever you need it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;
