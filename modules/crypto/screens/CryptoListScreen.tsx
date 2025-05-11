import Loader from '@/modules/common/components/Loader';
import { SearcherBar } from '@/modules/common/components/SearcherBar';
import CryptoCurrencyItem from '@/modules/crypto/components/CryptoCurrencyItem';
import { useCryptoList } from '@/modules/crypto/hooks/useCryptoList';
import { useThemeContext } from '@/theme/context/ThemeContextProvider';
import { useAppTheme } from '@/theme/types';
import { useTranslations } from '@/translations/hooks/useTranslations';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { Switch, Text } from 'react-native-paper';

export default function CryptoListScreen() {
  const { translate } = useTranslations();
  const { colors } = useAppTheme();
  const { readTheme, setTheme } = useThemeContext();
  const { data, filter, setFilter, fetchNextPage, isFetchingNextPage, hasNextPage, isLoading } =
    useCryptoList();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: colors.primary }} variant="headlineSmall">
          {translate('cryptoList.title')}
        </Text>

        <View>
          <SearcherBar
            value={filter}
            onChange={setFilter}
            placeholder={translate('cryptoList.searchPlaceholder')}
          />
        </View>

        <View style={styles.itemContainerThemeMode}>
          <Text variant="bodyLarge">{translate('cryptoList.darkMode')}</Text>
          <Switch onValueChange={setTheme} value={readTheme?.()} />
        </View>

        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage) {
              fetchNextPage();
            }
          }}
          style={{ paddingHorizontal: 10 }}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CryptoCurrencyItem key={item.id} crypto={item} />}
        />
      </SafeAreaView>
      <Loader loading={isLoading} />
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20,
    flex: 1,
    gap: 20,
  },
  itemContainerThemeMode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
