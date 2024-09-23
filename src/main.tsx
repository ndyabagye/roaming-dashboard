// /src/main.tsx
 
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProviderContext, useAuth } from './auth';
import "./index.css"
 
const queryClient = new QueryClient();
 
const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined!, // auth context initial value
  },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
});
 
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
 
const Router = () => {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ auth }} />;
};
 
const rootElement = document.getElementById('root')!;
 
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <AuthProviderContext>
        <Router />
      </AuthProviderContext>
    </QueryClientProvider>
  );
}