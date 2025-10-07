import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BookHeart, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Journal = () => {
  const [entry, setEntry] = useState("");
  const { toast } = useToast();

  const handleSave = () => {
    if (entry.trim()) {
      // Save to localStorage for privacy
      const savedEntries = JSON.parse(localStorage.getItem("journalEntries") || "[]");
      savedEntries.push({
        date: new Date().toISOString(),
        content: entry,
      });
      localStorage.setItem("journalEntries", JSON.stringify(savedEntries));
      
      toast({
        title: "Entry saved privately",
        description: "Your thoughts are safe here. 💜",
      });
      setEntry("");
    }
  };

  return (
    <Card className="border-2 border-border bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2">
          <BookHeart className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl text-primary">Your Private Journal</CardTitle>
        </div>
        <CardDescription className="text-base">
          Write freely. Your thoughts stay private on your device.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="What's on your mind today? Let it all out..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="min-h-[200px] resize-none border-2 rounded-xl focus:ring-2 focus:ring-primary/50 bg-background/50"
        />
        <Button 
          onClick={handleSave} 
          className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-glow"
          size="lg"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Entry
        </Button>
      </CardContent>
    </Card>
  );
};

export default Journal;
