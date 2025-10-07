import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Volume2, Music, Cloud, Waves, Wind, Droplets } from "lucide-react";

const sounds = [
  { 
    id: "rain", 
    name: "Gentle Rain", 
    icon: Droplets, 
    url: "https://assets.mixkit.co/active_storage/sfx/2390/2390-preview.mp3",
    description: "Soft rainfall"
  },
  { 
    id: "ocean", 
    name: "Ocean Waves", 
    icon: Waves, 
    url: "https://assets.mixkit.co/active_storage/sfx/2393/2393-preview.mp3",
    description: "Peaceful waves"
  },
  { 
    id: "forest", 
    name: "Forest Breeze", 
    icon: Wind, 
    url: "https://assets.mixkit.co/active_storage/sfx/2398/2398-preview.mp3",
    description: "Wind through trees"
  },
  { 
    id: "storm", 
    name: "Thunder Storm", 
    icon: Cloud, 
    url: "https://assets.mixkit.co/active_storage/sfx/2396/2396-preview.mp3",
    description: "Distant thunder"
  }
];

const CalmingSounds = () => {
  const [selectedSound, setSelectedSound] = useState(sounds[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const [audio] = useState(() => new Audio());

  const togglePlay = () => {
    if (!isPlaying) {
      audio.src = selectedSound.url;
      audio.loop = true;
      audio.volume = volume[0] / 100;
      audio.play();
    } else {
      audio.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSoundChange = (sound: typeof sounds[0]) => {
    const wasPlaying = isPlaying;
    if (isPlaying) {
      audio.pause();
    }
    setSelectedSound(sound);
    if (wasPlaying) {
      audio.src = sound.url;
      audio.loop = true;
      audio.volume = volume[0] / 100;
      audio.play();
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    audio.volume = newVolume[0] / 100;
  };

  return (
    <Card className="border-2 border-border bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Music className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl text-primary">Calming Sounds</CardTitle>
        </div>
        <CardDescription className="text-base">
          Nature sounds to help you relax and find peace
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          {sounds.map((sound) => {
            const Icon = sound.icon;
            return (
              <Button
                key={sound.id}
                variant={selectedSound.id === sound.id ? "default" : "outline"}
                onClick={() => handleSoundChange(sound)}
                className="h-auto py-4 flex flex-col items-center gap-2"
              >
                <Icon className="w-6 h-6" />
                <div className="text-center">
                  <div className="font-semibold">{sound.name}</div>
                  <div className="text-xs opacity-80">{sound.description}</div>
                </div>
              </Button>
            );
          })}
        </div>

        <div className="flex items-center justify-center">
          <Button
            onClick={togglePlay}
            size="lg"
            className={`w-32 h-32 rounded-full transition-all duration-300 ${
              isPlaying
                ? "bg-primary hover:bg-primary/90 animate-pulse-glow"
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            <Volume2 className="w-12 h-12" />
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Volume</span>
            <span>{volume[0]}%</span>
          </div>
          <Slider
            value={volume}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="cursor-pointer"
          />
        </div>

        <p className="text-sm text-center text-muted-foreground italic">
          Currently playing: {selectedSound.name}
        </p>
      </CardContent>
    </Card>
  );
};

export default CalmingSounds;
