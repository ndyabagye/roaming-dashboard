import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { IAuthContext } from "../auth";

export interface IRouterContext {
	auth: IAuthContext,
	queryClient: QueryClient,
}

export const Route = createRootRouteWithContext<IAuthContext>()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<Outlet />
			<ReactQueryDevtools initialIsOpen={false} buttonPosition="top-right" />
			<TanStackRouterDevtools  position="bottom-right" />
		</>
	)
}