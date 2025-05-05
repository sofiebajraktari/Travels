
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/EmptyState";
import SearchBar from "@/components/SearchBar";
import TripCard from "@/components/TripCard";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Sample trip data for demonstration
const sampleTrips = [
  {
    id: "trip1",
    title: "Summer Vacation",
    destination: "Bali, Indonesia",
    startDate: "2025-06-15",
    endDate: "2025-06-25",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&h=400",
    status: "upcoming" as const
  },
  {
    id: "trip2",
    title: "Business Conference",
    destination: "New York, USA",
    startDate: "2025-07-10",
    endDate: "2025-07-15",
    image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=800&h=400",
    status: "upcoming" as const
  },
  {
    id: "trip3",
    title: "Winter Getaway",
    destination: "Aspen, Colorado",
    startDate: "2024-12-20",
    endDate: "2024-12-28",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=800&h=400",
    status: "upcoming" as const
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (query: string) => {
    toast({
      title: "Search initiated",
      description: `Searching for: ${query}`,
    });
  };

  const handleCreateTrip = () => {
    toast({
      title: "New Trip",
      description: "Creating a new trip...",
    });
    // In a real app, this would navigate to a trip creation form
    // navigate("/trips/new");
  };

  const handleTripClick = (id: string) => {
    toast({
      title: "Trip Selected",
      description: `Viewing trip ${id}`,
    });
    // In a real app, this would navigate to the trip detail page
    // navigate(`/trips/${id}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your travel dashboard. Manage all your trips in one place.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <SearchBar onSearch={handleSearch} />
          <Button onClick={handleCreateTrip}>Create Trip</Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Trips</CardTitle>
          </CardHeader>
          <CardContent>
            {sampleTrips.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sampleTrips.map((trip) => (
                  <TripCard
                    key={trip.id}
                    {...trip}
                    onClick={handleTripClick}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No upcoming trips"
                description="You don't have any upcoming trips. Get started by creating your first trip."
                action={{
                  label: "Create Trip",
                  onClick: handleCreateTrip
                }}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;