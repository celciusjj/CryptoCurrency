import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { getCurrencies } from '../services';

export const useCryptoList = () => {
  const [filter, setFilter] = useState('');
  const [debouncedSearch] = useDebounce(filter, 800);

  const query = useInfiniteQuery({
    queryKey: ['crypto-list', debouncedSearch],
    queryFn: ({ pageParam = 0 }) => {
      const ids = filter ? debouncedSearch?.split(',').map(id => id.trim()) : undefined;

      return getCurrencies({ ids }, pageParam);
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
