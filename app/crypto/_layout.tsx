import { useAppTheme } from '@/theme/types';
import { useTranslations } from '@/translations/hooks/useTranslations';
import { Stack } from 'expo-router';

export default function CryptoLayout() {
  const { colors } = useAppTheme();
  const { translate } = useTranslations();
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />

      <Stack.Screen
        name="[id]"
        options={{
          title: translate('shared.back'),
          headerShown: true,
        }}
      />
    </Stack>
  );
}
