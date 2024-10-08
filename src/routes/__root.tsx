import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { IAuthContext } from "../auth";

export interface IRouterContext {
	auth: IAuthContext,
	queryClient: QueryClient,
}

export const Route = createRootRouteWithContext<IRouterContext>()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<Outlet />
			<ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
			<TanStackRouterDevtools  position="bottom-right" />
		</>
	)
}