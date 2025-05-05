
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmptyState from "@/components/EmptyState";
import SearchBar from "@/components/SearchBar";
import TripCard from "@/components/TripCard";
import { useToast } from "@/components/ui/use-toast";

// Sample trip data for demonstration
const sampleTrips = {
  upcoming: [
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
    }
  ],
  active: [],
  past: [
    {
      id: "trip3",
      title: "Beach Weekend",
      destination: "Miami, Florida",
      startDate: "2024-04-01",
      endDate: "2024-04-03",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&h=400",
      status: "past" as const
    }
  ]
};

const TripsPage = () => {
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
  };

  const handleTripClick = (id: string) => {
    toast({
      title: "Trip Selected",
      description: `Viewing trip ${id}`,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Trips</h1>
          <p className="text-muted-foreground">
            View and manage all your travel plans.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <SearchBar onSearch={handleSearch} />
          <Button onClick={handleCreateTrip}>New Trip</Button>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {sampleTrips.upcoming.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sampleTrips.upcoming.map((trip) => (
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
        </TabsContent>

        <TabsContent value="active">
          {sampleTrips.active.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sampleTrips.active.map((trip) => (
                <TripCard
                  key={trip.id}
                  {...trip}
                  onClick={handleTripClick}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No active trips"
              description="You don't have any active trips at the moment."
              action={{
                label: "Create Trip",
                onClick: handleCreateTrip
              }}
            />
          )}
        </TabsContent>

        <TabsContent value="past">
          {sampleTrips.past.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sampleTrips.past.map((trip) => (
                <TripCard
                  key={trip.id}
                  {...trip}
                  onClick={handleTripClick}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No past trips"
              description="You don't have any past trips on record."
              action={{
                label: "Create Trip",
                onClick: handleCreateTrip
              }}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TripsPage;