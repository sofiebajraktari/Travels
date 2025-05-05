import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/EmptyState";
import { useToast } from "@/components/ui/use-toast";

const DocumentsPage = () => {
  const { toast } = useToast();

  const handleUploadDocument = () => {
    toast({
      title: "Upload Document",
      description: "Opening document upload dialog...",
    });
  };

  // For demo purposes, let's say we have no documents yet
  const hasDocuments = false;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Travel Documents</h1>
          <p className="text-muted-foreground">
            Store and manage your important travel documents.
          </p>
        </div>
        <Button onClick={handleUploadDocument}>Upload Document</Button>
      </div>

      {hasDocuments ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Documents</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Document list would go here */}
              <p>Document list would be displayed here...</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <EmptyState
          title="No documents yet"
          description="You haven't uploaded any travel documents. Upload documents like passports, visas, and booking confirmations."
          action={{
            label: "Upload Document",
            onClick: handleUploadDocument
          }}
        />
      )}
    </div>
  );
};

export default DocumentsPage;
