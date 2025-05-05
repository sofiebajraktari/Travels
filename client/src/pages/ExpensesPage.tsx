
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EmptyState from "@/components/EmptyState";
import { CreditCard } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ExpensesPage = () => {
  const { toast } = useToast();

  const handleAddExpense = () => {
    toast({
      title: "Add Expense",
      description: "Adding a new travel expense...",
    });
  };

  // For demo purposes, let's say we have no expenses yet
  const hasExpenses = false;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Travel Expenses</h1>
          <p className="text-muted-foreground">
            Track and manage your travel spending.
          </p>
        </div>
        <Button onClick={handleAddExpense}>Add Expense</Button>
      </div>

      {hasExpenses ? (
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Expense list would go here */}
              <p>Expense list and summary would be displayed here...</p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <EmptyState
          title="No expenses yet"
          description="You haven't recorded any travel expenses. Start tracking your spending to stay within budget."
          action={{
            label: "Add Expense",
            onClick: handleAddExpense
          }}
          icon={<CreditCard className="h-12 w-12 text-muted-foreground" />}
        />
      )}
    </div>
  );
};

export default ExpensesPage;