import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Play, Pause } from "lucide-react";

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [count, setCount] = useState(4);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          // Move to next phase
          if (phase === "inhale") {
            setPhase("hold");
            return 4;
          } else if (phase === "hold") {
            setPhase("exhale");
            return 6;
          } else {
            setPhase("inhale");
            return 4;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase]);

  const toggleExercise = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setPhase("inhale");
      setCount(4);
    }
  };

  const getPhaseText = () => {
    switch (phase) {
      case "inhale":
        return "Breathe In";
      case "hold":
        return "Hold";
      case "exhale":
        return "Breathe Out";
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "inhale":
        return "text-secondary";
      case "hold":
        return "text-accent";
      case "exhale":
        return "text-primary";
    }
  };

  return (
    <Card className="border-2 border-border bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Wind className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl text-primary">Breathing Exercise</CardTitle>
        </div>
        <CardDescription className="text-base">
          Take a moment to center yourself with guided breathing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center py-8">
          <div
            className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-1000 ${
              isActive ? "animate-pulse-glow" : ""
            } ${
              phase === "inhale"
                ? "bg-secondary/30 scale-110"
                : phase === "hold"
                ? "bg-accent/30 scale-105"
                : "bg-primary/30 scale-100"
            }`}
          >
            <div className="text-center">
              <p className={`text-5xl font-bold ${getPhaseColor()}`}>{count}</p>
              <p className={`text-sm font-medium ${getPhaseColor()}`}>{getPhaseText()}</p>
            </div>
          </div>
        </div>
        
        <Button
          onClick={toggleExercise}
          className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-glow"
          size="lg"
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Start Exercise
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BreathingExercise;
