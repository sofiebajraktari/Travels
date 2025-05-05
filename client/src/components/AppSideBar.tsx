
import { 
    Calendar, 
    Compass, 
    Luggage, 
    Map, 
    Book, 
    Settings, 
    Users, 
    Bell, 
    CreditCard, 
    Bookmark
  } from "lucide-react";
  import { useState } from "react";
  import { Button } from "@/components/ui/button";
  import { Link } from "react-router-dom";
  import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarTrigger,
    SidebarFooter
  } from "@/components/ui/sidebar";
  
  const sidebarItems = [
    {
      title: "Dashboard",
      icon: Compass,
      path: "/"
    },
    {
      title: "My Trips",
      icon: Luggage,
      path: "/trips"
    },
    {
      title: "Itineraries",
      icon: Calendar,
      path: "/itineraries"
    },
    {
      title: "Travel Docs",
      icon: Map,
      path: "/documents"
    },
    {
      title: "Bookmarks",
      icon: Bookmark,
      path: "/bookmarks"
    },
    {
      title: "Travel Guides",
      icon: Book,
      path: "/guides"
    },
    {
      title: "Expenses",
      icon: CreditCard,
      path: "/expenses"
    }
  ];
  
  const secondarySidebarItems = [
    {
      title: "Travel Buddies",
      icon: Users,
      path: "/buddies"
    },
    {
      title: "Notifications",
      icon: Bell,
      path: "/notifications"
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings"
    }
  ];
  
  const AppSidebar = () => {
    const [activePath, setActivePath] = useState(window.location.pathname);
    
    return (
      <Sidebar>
        <SidebarHeader className="py-6">
          <div className="flex items-center px-4">
            <Compass className="h-6 w-6 text-primary mr-2" />
            <span className="text-lg font-semibold">RoamAround</span>
          </div>
          <div className="absolute right-2 top-3 md:hidden">
            <SidebarTrigger />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton 
                      className={activePath === item.path ? "bg-accent" : ""}
                      onClick={() => setActivePath(item.path)}
                      asChild
                    >
                      <Link to={item.path} className="flex items-center">
                        <item.icon className="mr-2 h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup className="mt-4">
            <SidebarGroupLabel>Tools &amp; Preferences</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {secondarySidebarItems.map((item) => (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton 
                      className={activePath === item.path ? "bg-accent" : ""}
                      onClick={() => setActivePath(item.path)}
                      asChild
                    >
                      <Link to={item.path} className="flex items-center">
                        <item.icon className="mr-2 h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="px-4 py-4">
            <Button className="w-full" variant="outline">
              Create New Trip
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    );
  };
  
  export default AppSidebar;