import { ThemeProvider } from "@/theme";
import { ThemeContextProvider } from "@/theme/context/ThemeContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <ThemeProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
