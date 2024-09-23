// Sidebar.js
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Package2,
  Home,
  ShoppingCart,
  Flag,
  Users,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span>Acme Inc</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {[
              {
                to: "/dashboard",
                label: "Dashboard",
                icon: <Home className="h-4 w-4" />,
              },
              {
                to: "/countries",
                label: "Countries",
                icon: <Flag className="h-4 w-4" />,
                active: true,
              },
              {
                to: "/profile",
                label: "Profile",
                icon: <ShoppingCart className="h-4 w-4" />,
                badge: 6,
              },
              {
                to: "#",
                label: "Customers",
                icon: <Users className="h-4 w-4" />,
              },
              {
                to: "#",
                label: "Analytics",
                icon: <LineChart className="h-4 w-4" />,
              },
            ].map(({ to, label, icon, badge }) => (
              <Link
                key={label}
                to={to}
                activeOptions={{ exact: true }}
              >
                {({ isActive }) => {
                  return (
                    <>
                      <span className={`flex items-center gap-3 rounded-lg px-3 py-2 ${isActive ? "bg-muted text-primary" : "text-muted-foreground"} transition-all hover:text-primary`}>
                        {icon}
                        {label}
                        {badge && (
                          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                            {badge}
                          </Badge>
                        )}
                      </span>
                    </>
                  );
                }}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
