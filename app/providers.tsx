"use client";

import LandingPlaceholder from "@/home/components/LandingPlaceholder";
import { persistor, store } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
						retry: 1,
						refetchOnWindowFocus: false,
					},
				},
			}),
	);

	return (
		<Provider store={store}>
			<PersistGate loading={<LandingPlaceholder />} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	);
}
