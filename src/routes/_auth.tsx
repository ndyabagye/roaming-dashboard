import {
  createFileRoute,
  Outlet,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import { useAuth } from "../auth";
import { Sidebar } from "@/components/common/Sidebar";
import { Navbar } from "@/components/common/Navbar";

const AuthLayout = () => {
  const router = useRouter();
  const navigate = Route.useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth?.logout().then(() => {
      router.invalidate().finally(() => {
        navigate({ to: "/" });
      });
    });
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar logout={handleLogout} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AuthLayout,
});
