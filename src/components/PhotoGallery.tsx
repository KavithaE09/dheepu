import { Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";
import photo6 from "@/assets/photo6.jpg";
import photo7 from "@/assets/photo7.jpg";
import photo8 from "@/assets/photo8.jpg";

const PhotoGallery = () => {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

  return (
    <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur shadow-soft hover:shadow-glow transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-2 justify-center">
          <Heart className="w-6 h-6 text-primary animate-pulse-glow" />
          <CardTitle className="text-2xl text-primary text-center">
            Beautiful Memories Together
          </CardTitle>
          <Heart className="w-6 h-6 text-primary animate-pulse-glow" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg border-2 border-primary/20 shadow-soft hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-4 italic">
          Every moment with you is precious 💜
        </p>
      </CardContent>
    </Card>
  );
};

export default PhotoGallery;
