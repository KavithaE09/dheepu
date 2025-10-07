import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const moods = [
  { emoji: "😊", label: "Great", color: "bg-green-200 hover:bg-green-300" },
  { emoji: "🙂", label: "Good", color: "bg-blue-200 hover:bg-blue-300" },
  { emoji: "😐", label: "Okay", color: "bg-yellow-200 hover:bg-yellow-300" },
  { emoji: "😔", label: "Low", color: "bg-orange-200 hover:bg-orange-300" },
  { emoji: "😢", label: "Struggling", color: "bg-red-200 hover:bg-red-300" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const { toast } = useToast();

  const handleMoodSelect = (index: number, label: string) => {
    setSelectedMood(index);
    toast({
      title: "Mood logged",
      description: `You're feeling ${label.toLowerCase()} today. That's okay. 💜`,
    });
  };

  return (
    <Card className="border-2 border-border bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">How are you feeling today?</CardTitle>
        <CardDescription className="text-base">
          Track your mood daily. There's no right or wrong answer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-3">
          {moods.map((mood, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-24 flex flex-col items-center justify-center gap-2 rounded-2xl border-2 transition-all duration-300 ${
                mood.color
              } ${
                selectedMood === index
                  ? "scale-110 border-primary shadow-glow"
                  : "border-border"
              }`}
              onClick={() => handleMoodSelect(index, mood.label)}
            >
              <span className="text-4xl">{mood.emoji}</span>
              <span className="text-sm font-medium text-foreground">{mood.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
