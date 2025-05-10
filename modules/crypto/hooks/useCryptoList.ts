import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { CryptoCurrency } from '../models';
import { getMultipleCurrencies, getSingleCurrency } from '../services';

export const useCryptoList = () => {
  const [filter, setFilter] = useState('');
  const [debouncedSearch] = useDebounce(filter, 800);

  const query = useInfiniteQuery({
    queryKey: ['crypto-list', debouncedSearch],
    queryFn: async ({ pageParam = 0 }) => {
      const ids = debouncedSearch ? debouncedSearch?.split(',').map(id => id.trim()) : undefined;
      if (ids?.length) {
        const response = await getSingleCurrency<CryptoCurrency[]>(ids.join(','));
        return { data: response, nextStart: 0, hasMore: false };
      }
      return await getMultipleCurrencies(pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: lastPage => (lastPage.hasMore ? lastPage.nextStart : undefined),
  });

  const flattenedData = query.data?.pages?.flatMap(page => page.data) ?? [];

  return {
    data: flattenedData ?? [],
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    isLoading: query.isLoading,
    filter,
    setFilter,
  };
};
