
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/EmptyState";
import { Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BuddiesPage = () => {
  const { toast } = useToast();

  const handleAddBuddy = () => {
    toast({
      title: "Add Travel Buddy",
      description: "Adding a new travel companion...",
    });
  };

  // For demo purposes, let's say we have no travel buddies yet
  const hasBuddies = false;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Travel Buddies</h1>
          <p className="text-muted-foreground">
            Connect with friends and family to plan trips together.
          </p>
        </div>
        <Button onClick={handleAddBuddy}>Add Buddy</Button>
      </div>

      {hasBuddies ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Travel Companions</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Buddies list would go here */}
              <p>Travel buddies list would be displayed here...</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <EmptyState
          title="No travel buddies yet"
          description="You haven't added any travel companions. Invite friends and family to plan trips together."
          action={{
            label: "Add Buddy",
            onClick: handleAddBuddy
          }}
          icon={<Users className="h-12 w-12 text-muted-foreground" />}
        />
      )}
    </div>
  );
};

export default BuddiesPage;