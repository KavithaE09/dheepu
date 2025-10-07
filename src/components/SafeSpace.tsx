import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Entry {
  id: string;
  text: string;
  date: string;
}

const SafeSpace = () => {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("safeSpaceEntries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    if (entry.trim()) {
      const newEntry: Entry = {
        id: Date.now().toString(),
        text: entry,
        date: new Date().toISOString()
      };
      const updated = [newEntry, ...entries];
      setEntries(updated);
      localStorage.setItem("safeSpaceEntries", JSON.stringify(updated));
      setEntry("");
      toast({
        title: "Saved to your safe space",
        description: "Your thoughts are private and secure 💜"
      });
    }
  };

  const handleDelete = (id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("safeSpaceEntries", JSON.stringify(updated));
    toast({
      title: "Entry deleted",
      description: "Your entry has been removed"
    });
  };

  return (
    <Card className="border-2 border-border bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl text-primary">Your Safe Space</CardTitle>
        </div>
        <CardDescription className="text-base">
          Write anything here - it's private and always here for you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Textarea
            placeholder="Write whatever is on your mind... worries, fears, hopes, dreams. This space is yours."
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="min-h-32 resize-none"
          />
          <Button onClick={handleSave} className="w-full">
            Save to Safe Space
          </Button>
        </div>

        {entries.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Your Previous Entries</h3>
            <ScrollArea className="h-64 rounded-lg border border-border p-4">
              <div className="space-y-4">
                {entries.map((e) => (
                  <div
                    key={e.id}
                    className="p-3 rounded-lg bg-muted/50 border border-border relative group"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-muted-foreground">
                        {new Date(e.date).toLocaleDateString()} at{" "}
                        {new Date(e.date).toLocaleTimeString()}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(e.id)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                    <p className="text-sm text-foreground whitespace-pre-wrap">{e.text}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}

        <p className="text-xs text-center text-muted-foreground italic">
          All entries are stored privately on your device
        </p>
      </CardContent>
    </Card>
  );
};

export default SafeSpace;
