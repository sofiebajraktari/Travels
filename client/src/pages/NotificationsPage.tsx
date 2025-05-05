
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/EmptyState";
import { Bell } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const NotificationsPage = () => {
  const { toast } = useToast();

  const handleManageNotifications = () => {
    toast({
      title: "Manage Notifications",
      description: "Opening notification preferences...",
    });
  };

  // For demo purposes, let's say we have no notifications yet
  const hasNotifications = false;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">
            Stay updated with travel alerts and trip reminders.
          </p>
        </div>
        <Button onClick={handleManageNotifications} variant="outline">Manage Settings</Button>
      </div>

      {hasNotifications ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Notifications list would go here */}
              <p>Recent notifications would be displayed here...</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <EmptyState
          title="No notifications"
          description="You don't have any notifications at the moment. Check back later for updates on your trips."
          action={{
            label: "Manage Settings",
            onClick: handleManageNotifications
          }}
          icon={<Bell className="h-12 w-12 text-muted-foreground" />}
        />
      )}
    </div>
  );
};

export default NotificationsPage;