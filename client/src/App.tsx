
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import TripsPage from "./pages/TripsPage";
import ItinerariesPage from "./pages/ItinerariesPage";
import DocumentsPage from "./pages/DocumentsPage";
import BookmarksPage from "./pages/BookmarksPage";
import GuidesPage from "./pages/GuidesPage";
import ExpensesPage from "./pages/ExpensesPage";
import BuddiesPage from "./pages/BuddiesPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="trips" element={<TripsPage />} />
            <Route path="itineraries" element={<ItinerariesPage />} />
            <Route path="documents" element={<DocumentsPage />} />
            <Route path="bookmarks" element={<BookmarksPage />} />
            <Route path="guides" element={<GuidesPage />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="buddies" element={<BuddiesPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
