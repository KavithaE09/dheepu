import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Calendar, Heart } from "lucide-react";

interface MoodEntry {
  date: string;
  mood: string;
}

const ProgressTracker = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [weeklyProgress, setWeeklyProgress] = useState(0);

  useEffect(() => {
    const savedEntries = localStorage.getItem("moodHistory");
    if (savedEntries) {
      const parsed = JSON.parse(savedEntries);
      setEntries(parsed.slice(-7)); // Last 7 days
      
      // Calculate weekly progress based on positive moods
      const positiveCount = parsed.slice(-7).filter((e: MoodEntry) => 
        ["😊", "😄", "🥰"].includes(e.mood)
      ).length;
      setWeeklyProgress((positiveCount / 7) * 100);
    }
  }, []);

  const getTodayStats = () => {
    const today = new Date().toDateString();
    const todayEntries = entries.filter(e => new Date(e.date).toDateString() === today);
    return todayEntries.length;
  };

  return (
    <Card className="border-2 border-border bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl text-primary">Your Progress</CardTitle>
        </div>
        <CardDescription className="text-base">
          Tracking your journey to wellness
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Weekly Wellness</span>
            <span className="text-sm text-muted-foreground">{Math.round(weeklyProgress)}%</span>
          </div>
          <Progress value={weeklyProgress} className="h-3" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gradient-primary border border-primary/30">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">This Week</span>
            </div>
            <p className="text-2xl font-bold text-primary">{entries.length}</p>
            <p className="text-xs text-muted-foreground">check-ins</p>
          </div>

          <div className="p-4 rounded-lg bg-gradient-primary border border-primary/30">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Today</span>
            </div>
            <p className="text-2xl font-bold text-primary">{getTodayStats()}</p>
            <p className="text-xs text-muted-foreground">mood entries</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Recent Moods</h4>
          <div className="flex gap-2 flex-wrap">
            {entries.slice(-7).reverse().map((entry, index) => (
              <div
                key={index}
                className="text-3xl p-2 rounded-lg bg-muted/50 border border-border hover:scale-110 transition-transform"
                title={new Date(entry.date).toLocaleDateString()}
              >
                {entry.mood}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-center text-muted-foreground italic">
          Every small step forward is progress worth celebrating 🌟
        </p>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
