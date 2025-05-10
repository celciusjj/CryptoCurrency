import { ThemeProvider } from '@/theme';
import { ThemeContextProvider } from '@/theme/context/ThemeContextProvider';
import { ThemeNavigationProvider } from '@/theme/ThemeNavigationProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';

export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <ThemeNavigationProvider>
          <ThemeProvider>
            <Slot />
          </ThemeProvider>
        </ThemeNavigationProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
