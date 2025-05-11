
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/EmptyState";
import { Bookmark } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BookmarksPage = () => {
  const { toast } = useToast();

  const handleAddBookmark = () => {
    toast({
      title: "Add Bookmark",
      description: "Adding a new bookmark...",
    });
  };

  // For demo purposes, let's say we have no bookmarks yet
  const hasBookmarks = false;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bookmarks</h1>
          <p className="text-muted-foreground">
            Save your favorite destinations and travel resources.
          </p>
        </div>
        <Button onClick={handleAddBookmark}>Add Bookmark</Button>
      </div>

      {hasBookmarks ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Bookmarks</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Bookmark list would go here */}
              <p>Bookmark list would be displayed here...</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <EmptyState
          title="No bookmarks yet"
          description="You haven't saved any bookmarks yet. Start by adding your favorite destinations and travel resources."
          action={{
            label: "Add Bookmark",
            onClick: handleAddBookmark
          }}
          icon={<Bookmark className="h-12 w-12 text-muted-foreground" />}
        />
      )}
    </div>
  );
};

export default BookmarksPage;