import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Play, Pause } from "lucide-react";

const meditations = [
  {
    title: "Body Scan Meditation",
    duration: "5 minutes",
    steps: [
      "Find a comfortable position, sitting or lying down",
      "Close your eyes and take three deep breaths",
      "Focus on your toes - notice any sensations",
      "Slowly move your attention up through your feet, legs, torso",
      "Continue through your arms, neck, and head",
      "Notice tension and let it dissolve with each breath",
      "Rest in this peaceful awareness for a moment"
    ]
  },
  {
    title: "Loving-Kindness Meditation",
    duration: "7 minutes",
    steps: [
      "Sit comfortably and close your eyes",
      "Think of someone you love deeply",
      "Silently say: 'May you be happy, may you be healthy'",
      "Now direct these wishes toward yourself",
      "Extend these wishes to a neutral person",
      "Finally, send kindness to someone you find difficult",
      "End by sending love to all beings everywhere"
    ]
  },
  {
    title: "Mindful Breathing",
    duration: "3 minutes",
    steps: [
      "Sit in a comfortable position",
      "Notice your natural breath without changing it",
      "Count '1' on the inhale, '2' on the exhale",
      "Continue counting up to 10, then start over",
      "When your mind wanders, gently return to counting",
      "Simply observe without judgment",
      "Rest in the rhythm of your breath"
    ]
  }
];

const MeditationGuide = () => {
  const [selectedMeditation, setSelectedMeditation] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <Card className="border-2 border-border bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl text-primary">Meditation Guide</CardTitle>
        </div>
        <CardDescription className="text-base">
          Guided practices for peace and clarity
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-2 flex-wrap">
          {meditations.map((meditation, index) => (
            <Button
              key={index}
              variant={selectedMeditation === index ? "default" : "outline"}
              onClick={() => {
                setSelectedMeditation(index);
                setIsActive(false);
              }}
              className="text-sm"
            >
              {meditation.title}
            </Button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-foreground">
              {meditations[selectedMeditation].title}
            </h3>
            <span className="text-sm text-muted-foreground">
              {meditations[selectedMeditation].duration}
            </span>
          </div>

          <Button
            onClick={() => setIsActive(!isActive)}
            size="lg"
            className="w-full"
          >
            {isActive ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Pause Practice
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Start Practice
              </>
            )}
          </Button>

          {isActive && (
            <div className="space-y-3 animate-fade-in">
              {meditations[selectedMeditation].steps.map((step, index) => (
                <div
                  key={index}
                  className="p-3 rounded-lg bg-muted/50 border border-border"
                >
                  <p className="text-sm text-foreground">
                    <span className="font-semibold text-primary">Step {index + 1}:</span> {step}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MeditationGuide;
