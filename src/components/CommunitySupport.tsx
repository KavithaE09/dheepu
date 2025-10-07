import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Heart, ExternalLink } from "lucide-react";

const resources = [
  {
    title: "Mental Health Support Groups",
    description: "Connect with others who understand what you're going through",
    link: "https://www.nami.org/support",
    icon: Users
  },
  {
    title: "Crisis Text Line",
    description: "Text HOME to 741741 - Free 24/7 support",
    link: "https://www.crisistextline.org",
    icon: MessageCircle
  },
  {
    title: "7 Cups Online Therapy",
    description: "Free emotional support and online therapy",
    link: "https://www.7cups.com",
    icon: Heart
  }
];

const CommunitySupport = () => {
  return (
    <Card className="border-2 border-border bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl text-primary">Community Support</CardTitle>
        </div>
        <CardDescription className="text-base">
          You're not alone - connect with caring communities
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div
              key={index}
              className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(resource.link, "_blank")}
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}

        <div className="mt-6 p-4 rounded-lg bg-gradient-primary border border-primary/30">
          <p className="text-sm text-center text-foreground">
            <strong>Emergency Help:</strong> If you're in crisis, please call{" "}
            <a href="tel:988" className="underline font-semibold">
              988
            </a>{" "}
            (Suicide & Crisis Lifeline) or text <strong>HOME</strong> to{" "}
            <a href="sms:741741" className="underline font-semibold">
              741741
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunitySupport;
