
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Map, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TripCardProps {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  image: string;
  status: "upcoming" | "active" | "past";
  onClick: (id: string) => void;
}

const TripCard = ({
  id,
  title,
  destination,
  startDate,
  endDate,
  image,
  status,
  onClick
}: TripCardProps) => {
  const statusColors = {
    upcoming: "bg-blue-100 text-blue-800",
    active: "bg-green-100 text-green-800",
    past: "bg-gray-100 text-gray-800"
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <Card className="trip-card animate-fade-in">
      <div className="relative">
        <img src={image} alt={destination} className="trip-card-image" />
        <div className="absolute top-2 right-2">
          <Badge className={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <Navigation className="h-4 w-4" /> {destination}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={() => onClick(id)}>
          View Trip
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCard;