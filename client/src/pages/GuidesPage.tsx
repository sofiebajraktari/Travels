
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/EmptyState";
import { Book } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const GuidesPage = () => {
  const { toast } = useToast();

  const handleBrowseGuides = () => {
    toast({
      title: "Browse Guides",
      description: "Browsing travel guides...",
    });
  };

  // For demo purposes, let's say we have no guides yet
  const hasGuides = false;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Travel Guides</h1>
          <p className="text-muted-foreground">
            Explore destination guides and travel tips.
          </p>
        </div>
        <Button onClick={handleBrowseGuides}>Browse Guides</Button>
      </div>

      {hasGuides ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Guides</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Guide list would go here */}
              <p>Travel guide recommendations would be displayed here...</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <EmptyState
          title="No guides available"
          description="There are no travel guides in your collection yet. Browse our catalog to find guides for your next destination."
          action={{
            label: "Browse Guides",
            onClick: handleBrowseGuides
          }}
          icon={<Book className="h-12 w-12 text-muted-foreground" />}
        />
      )}
    </div>
  );
};

export default GuidesPage;