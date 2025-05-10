import { useAppTheme } from '@/theme/types';
import { Stack } from 'expo-router';

export default function CryptoLayout() {
  const { colors } = useAppTheme();
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="[id]"
        options={{
          title: 'Crypto currency detail',
          headerShown: true,
        }}
      />
    </Stack>
  );
}
