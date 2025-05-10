import { SearcherBar } from '@/modules/common/components/SearcherBar';
import CryptoCurrencyItem from '@/modules/crypto/components/CryptoCurrencyItem';
import { useCryptoList } from '@/modules/crypto/hooks/useCryptoList';
import { useAppTheme } from '@/theme/types';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export default function CryptoList() {
  const { colors } = useAppTheme();
  const { data, filter, setFilter, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useCryptoList();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary700 }} variant="titleSmall">
        Explore Cryptocurrencies
      </Text>

      <View style={{ marginBottom: 20 }}>
        <SearcherBar
          value={filter}
          onChange={setFilter}
          autoFocus
          placeholder="Search by ID, separated by commas"
        />
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
        keyExtractor={item => item?.id?.toString()}
        renderItem={({ item }) => (
          <CryptoCurrencyItem key={item.id} onPress={() => {}} crypto={item} />
        )}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    gap: 20,
  },
});
