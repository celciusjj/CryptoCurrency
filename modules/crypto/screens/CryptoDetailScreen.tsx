import Loader from '@/modules/common/components/Loader';
import { InfoRow } from '@/modules/crypto/components/CryptoInfoRow';
import { useCryptoDetail } from '@/modules/crypto/hooks/useCryptoDetail';
import { useAppTheme } from '@/theme/types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Icon, Surface, Text } from 'react-native-paper';

export default function CryptoDetailScreen() {
  const { currencyData, socialStats, isLoadingCurrency, isLoadingSocial } = useCryptoDetail();
  const { colors } = useAppTheme();
  const isLoading = isLoadingCurrency || isLoadingSocial;
  if (!currencyData) {
    return <></>;
  }

  const {
    name,
    symbol,
    rank,
    priceUsd,
    percentChange1h,
    percentChange24h,
    percentChange7d,
    marketCapUsd,
    volume24,
    volume24a,
    csupply,
    tsupply,
    msupply,
  } = currencyData;

  return (
    <>
      <ScrollView style={{ padding: 20 }}>
        <Surface elevation={1} style={[styles.container, { borderColor: colors.grey600 }]}>
          <View style={styles.headerRow}>
            <Icon color={colors.primary700} size={36} source="currency-usd" />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text variant="titleLarge" style={{ color: colors.primary700 }}>
                {name} ({symbol})
              </Text>
              <Text style={{ color: colors.primary700 }}>Rank #{rank}</Text>
            </View>
          </View>

          <Divider bold style={{ marginVertical: 10 }} />
          <InfoRow label="Precio USD" value={`$${priceUsd?.toFixed(2)}`} />

          <InfoRow
            label="Cambio 1h"
            value={`${percentChange1h.toFixed(2)}%`}
            valueColor={percentChange1h >= 0 ? 'green' : 'red'}
          />
          <InfoRow
            label="Cambio 24h"
            value={`${percentChange24h.toFixed(2)}%`}
            valueColor={percentChange24h >= 0 ? 'green' : 'red'}
          />
          <InfoRow
            label="Cambio 7d"
            value={`${percentChange7d.toFixed(2)}%`}
            valueColor={percentChange7d >= 0 ? 'green' : 'red'}
          />
          <InfoRow label="Market Cap" value={`$${marketCapUsd.toLocaleString()}`} />
          <InfoRow label="Volumen 24h" value={`$${volume24.toLocaleString()}`} />
          <InfoRow label="Monedas comercializadas" value={`$${volume24a.toLocaleString()}`} />
          <InfoRow label="Suministro Circulante" value={csupply.toLocaleString()} />
          <InfoRow label="Suministro Total" value={tsupply.toLocaleString()} />
          <InfoRow label="Suministro Máximo" value={msupply?.toLocaleString()} />
          {socialStats ? (
            <>
              <Divider bold style={{ marginVertical: 10 }} />
              <InfoRow
                label="Reddit active users"
                value={String(socialStats.redditActiveUsers ?? 'N/A')}
              />
              <InfoRow
                label="Reddit subscriptors"
                value={String(socialStats.redditSubscribers ?? 'N/A')}
              />
              <InfoRow
                label="Twitter followers"
                value={String(socialStats.twitterFollowers ?? 'N/A')}
              />
              <InfoRow label="Tweets" value={String(socialStats.twitterPosts ?? 'N/A')} />
            </>
          ) : null}
        </Surface>
      </ScrollView>
      <Loader loading={isLoading} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,

    borderRadius: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
