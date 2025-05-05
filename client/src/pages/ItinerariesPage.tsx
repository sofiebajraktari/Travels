
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/EmptyState";
import { Calendar, Navigation } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ItinerariesPage = () => {
  const { toast } = useToast();

  const handleCreateItinerary = () => {
    toast({
      title: "New Itinerary",
      description: "Creating a new itinerary...",
    });
  };

  // For demo purposes, let's say we have no itineraries yet
  const hasItineraries = false;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Itineraries</h1>
          <p className="text-muted-foreground">
            Plan your daily activities for each trip.
          </p>
        </div>
        <Button onClick={handleCreateItinerary}>Create Itinerary</Button>
      </div>

      {hasItineraries ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Summer Vacation - Bali</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <Navigation className="h-4 w-4" /> Bali, Indonesia
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Jun 15 - Jun 25, 2025</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Itinerary content would go here */}
              <p>Itinerary details would be displayed here...</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <EmptyState
          title="No itineraries yet"
          description="You haven't created any itineraries yet. Create an itinerary to plan your trip day by day."
          action={{
            label: "Create Itinerary",
            onClick: handleCreateItinerary
          }}
        />
      )}
    </div>
  );
};

export default ItinerariesPage;
