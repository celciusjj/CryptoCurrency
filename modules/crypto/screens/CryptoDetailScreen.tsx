import Loader from '@/modules/common/components/Loader';
import { CryptoInfoRow } from '@/modules/crypto/components/CryptoInfoRow';
import { useCryptoDetail } from '@/modules/crypto/hooks/useCryptoDetail';
import { useAppTheme } from '@/theme/types';
import { useTranslations } from '@/translations/hooks/useTranslations';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Icon, Surface, Text } from 'react-native-paper';

export default function CryptoDetailScreen() {
  const { translate } = useTranslations();
  const { currencyData, socialStats, isLoadingCurrency, isLoadingSocial } = useCryptoDetail();
  const { colors } = useAppTheme();
  const isLoading = isLoadingCurrency || isLoadingSocial;
  if (!currencyData) {
    return <></>;
  }

  const {
    id,
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
      <ScrollView>
        <View style={{ padding: 20 }}>
          <View style={styles.textContainer}>
            <Text style={{ color: colors.primary }} variant="headlineSmall">
              {translate('cryptoDetail.title')}
            </Text>
            <Text style={{ color: colors.black }} variant="bodyLarge">
              {translate('cryptoDetail.subtitle')}
            </Text>
          </View>
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
            <CryptoInfoRow label={translate('crypto.id')} value={id} />
            <CryptoInfoRow
              label={translate('crypto.priceUsd')}
              value={`$${priceUsd?.toFixed(2)}`}
            />

            <CryptoInfoRow
              label={translate('crypto.change1h')}
              value={`${percentChange1h.toFixed(2)}%`}
              valueColor={percentChange1h >= 0 ? 'green' : 'red'}
            />
            <CryptoInfoRow
              label={translate('crypto.change24h')}
              value={`${percentChange24h.toFixed(2)}%`}
              valueColor={percentChange24h >= 0 ? 'green' : 'red'}
            />
            <CryptoInfoRow
              label={translate('crypto.change7d')}
              value={`${percentChange7d.toFixed(2)}%`}
              valueColor={percentChange7d >= 0 ? 'green' : 'red'}
            />

            <CryptoInfoRow
              label={translate('crypto.marketCap')}
              value={`$${marketCapUsd.toLocaleString()}`}
            />
            <CryptoInfoRow
              label={translate('crypto.volume24')}
              value={`$${volume24.toLocaleString()}`}
            />
            <CryptoInfoRow
              label={translate('crypto.volume24a')}
              value={`$${volume24a.toLocaleString()}`}
            />
            <CryptoInfoRow label={translate('crypto.csupply')} value={csupply.toLocaleString()} />
            <CryptoInfoRow label={translate('crypto.tsupply')} value={tsupply.toLocaleString()} />
            <CryptoInfoRow label={translate('crypto.msupply')} value={msupply?.toLocaleString()} />
            {socialStats ? (
              <>
                <Divider bold style={{ marginVertical: 10 }} />
                <CryptoInfoRow
                  label={translate('crypto.redditActiveUsers')}
                  value={String(socialStats.redditActiveUsers ?? 'N/A')}
                />
                <CryptoInfoRow
                  label={translate('crypto.redditSubscribers')}
                  value={String(socialStats.redditSubscribers ?? 'N/A')}
                />
                <CryptoInfoRow
                  label={translate('crypto.twitterFollowers')}
                  value={String(socialStats.twitterFollowers ?? 'N/A')}
                />
                <CryptoInfoRow
                  label={translate('crypto.twitterPosts')}
                  value={String(socialStats.twitterPosts ?? 'N/A')}
                />
              </>
            ) : null}
          </Surface>
        </View>
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
  textContainer: {
    flexDirection: 'column',
    gap: 5,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
