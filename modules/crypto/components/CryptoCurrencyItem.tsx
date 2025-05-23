import { useAppTheme } from '@/theme/types';
import { useTranslations } from '@/translations/hooks/useTranslations';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Divider, Icon, Surface, Text } from 'react-native-paper';
import { CryptoCurrency } from '../models';
import CryptoChangeIndicator from './CryptoChangeIndicator';
import { CryptoInfoRow } from './CryptoInfoRow';

interface Props {
  crypto: CryptoCurrency;
}

const CryptoCurrencyItem = ({ crypto }: Props) => {
  const { colors } = useAppTheme();
  const styles = currencyStyles();
  const { translate } = useTranslations();

  return (
    <Link
      asChild
      href={{
        pathname: '/crypto/[id]',
        params: { id: crypto.id },
      }}>
      <TouchableOpacity>
        <Surface elevation={0} style={[styles.container, { borderColor: colors.grey600 }]}>
          <View style={styles.itemContainer}>
            <View style={styles.headerContainer}>
              <Icon color={colors.primary700} size={32} source="currency-usd" />
              <View style={{ flexDirection: 'column', gap: 2 }}>
                <Text
                  variant="titleSmall"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ color: colors.primary700, flexShrink: 1 }}>
                  {crypto.name}
                </Text>
                <Text
                  variant="bodySmall"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ color: colors.primary700, flexShrink: 1 }}>
                  ({crypto.symbol})
                </Text>
              </View>
            </View>
            <View>
              <Text variant="titleSmall" style={{ color: colors.primary700 }}>
                #{crypto.rank}
              </Text>
            </View>
          </View>

          <Divider />

          <View style={{ marginTop: 10 }}>
            <CryptoInfoRow label={translate('crypto.id')} value={crypto.id} />
            <CryptoInfoRow
              label={translate('crypto.priceUsd')}
              value={`$${crypto.priceUsd.toFixed(2)}`}
            />
            <CryptoInfoRow
              indicatorIcon={<CryptoChangeIndicator percentChange={crypto.percentChange24h} />}
              label={translate('crypto.change24h')}
              value={`${crypto.percentChange24h.toFixed(2)}%`}
              valueColor={crypto.percentChange24h >= 0 ? 'green' : 'red'}
            />
            <CryptoInfoRow
              label={translate('crypto.marketCap')}
              value={`$${crypto.marketCapUsd.toLocaleString()}`}
            />
          </View>
        </Surface>
      </TouchableOpacity>
    </Link>
  );
};

export default CryptoCurrencyItem;

export const currencyStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderRadius: 16,
    },
    headerContainer: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      maxWidth: '70%',
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    textInfo: {
      width: '50%',
      flexWrap: 'wrap',
      fontWeight: '700',
    },
  });
