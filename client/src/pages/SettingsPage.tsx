
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const SettingsPage = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and application settings.
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              <span>Account Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <h3 className="font-medium">Profile Information</h3>
              <p className="text-sm text-muted-foreground">
                Update your personal information and profile settings.
              </p>
            </div>
            <Separator />
            <div className="space-y-1">
              <h3 className="font-medium">Notification Preferences</h3>
              <p className="text-sm text-muted-foreground">
                Configure how and when you receive notifications.
              </p>
            </div>
            <Separator />
            <div className="space-y-1">
              <h3 className="font-medium">Privacy Settings</h3>
              <p className="text-sm text-muted-foreground">
                Control your privacy settings and data sharing preferences.
              </p>
            </div>
            <Separator />
            <div className="space-y-1">
              <h3 className="font-medium">Display Settings</h3>
              <p className="text-sm text-muted-foreground">
                Customize the appearance and layout of the application.
              </p>
            </div>
            <div className="pt-4">
              <Button onClick={handleSaveSettings}>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsPage;