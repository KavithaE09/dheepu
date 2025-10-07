import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const quotes = [
  "You are braver than you believe, stronger than you seem, and loved more than you know.",
  "Every small step forward is still progress. Be proud of yourself.",
  "It's okay to not be okay. You're doing the best you can, and that's enough.",
  "Your feelings are valid. You deserve kindness, especially from yourself.",
  "Healing isn't linear. Some days will be harder than others, and that's okay.",
  "You are worthy of love, peace, and happiness, exactly as you are.",
  "Taking time to rest is not giving up. It's taking care of yourself.",
  "Your story isn't over yet. There are beautiful chapters still to come.",
];

const DailyQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Get a consistent quote for the day based on the date
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("quoteDate");
    
    if (savedDate !== today) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      localStorage.setItem("quoteDate", today);
      localStorage.setItem("dailyQuote", quotes[randomIndex]);
    } else {
      setQuote(localStorage.getItem("dailyQuote") || quotes[0]);
    }
  }, []);

  return (
    <Card className="border-2 border-primary/30 bg-gradient-primary shadow-glow animate-fade-in">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Sparkles className="w-8 h-8 text-primary flex-shrink-0 animate-pulse-glow" />
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground italic">
              "{quote}"
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyQuote;
