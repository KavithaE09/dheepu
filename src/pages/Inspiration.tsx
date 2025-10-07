import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Inspiration = () => {
  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              You're Stronger Than You Know
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 font-light italic max-w-3xl mx-auto leading-relaxed">
              "If you could handle us for four years, trust me—you can handle anything life throws at you. 💪✨🔥"
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft">
            <video 
              controls 
              className="w-full rounded-2xl shadow-glow"
              poster="/placeholder.svg"
            >
              <source src="/inspiration-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="text-center text-muted-foreground">
            <p className="text-lg">
              Remember: Every challenge you've overcome has made you stronger. 💜
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
