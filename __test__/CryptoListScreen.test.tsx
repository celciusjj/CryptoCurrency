import { CryptoCurrency } from '@/modules/crypto/models';
import CryptoListScreen from '@/modules/crypto/screens/CryptoListScreen';
import { getMultipleCurrencies, getSingleCurrency } from '@/modules/crypto/services';
import { QueryClient, QueryClientProvider, useInfiniteQuery } from '@tanstack/react-query';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

export const currencyMock: CryptoCurrency = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  rank: 1,
  priceUsd: 65000.0,
  percentChange1h: 0.25,
  percentChange24h: 2.5,
  percentChange7d: 10.0,
  marketCapUsd: 1200000000000,
  volume24: 35000000000,
  volume24a: 34000000000,
  csupply: 19000000,
  tsupply: 21000000,
  msupply: 21000000,
};

jest.mock('use-debounce', () => ({
  useDebounce: (value: string) => [value],
}));

jest.mock('@tanstack/react-query', () => {
  const actual = jest.requireActual('@tanstack/react-query');
  return {
    ...actual,
    useInfiniteQuery: jest.fn(),
    QueryClient: actual.QueryClient,
    QueryClientProvider: actual.QueryClientProvider,
  };
});

jest.mock('@/modules/crypto/services', () => ({
  getSingleCurrency: jest.fn(),
  getMultipleCurrencies: jest.fn(),
}));

const queryClient = new QueryClient();

describe('CryptoListScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getSingleCurrency as jest.Mock).mockResolvedValue({ data: [] });
    (getMultipleCurrencies as jest.Mock).mockResolvedValue({
      data: [],
      hasMore: false,
      nextStart: 0,
    });

    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: { pages: [{ data: [], hasMore: false, nextStart: 0 }] },
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      isLoading: false,
    });
  });

  it('render title corretly', async () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <CryptoListScreen />
      </QueryClientProvider>,
    );
    await waitFor(() => {
      expect(getByText('cryptoList.title')).toBeTruthy();
    });
  });

  it('updates search filter when typing in SearcherBar', () => {
    const { getByPlaceholderText } = render(
      <QueryClientProvider client={queryClient}>
        <CryptoListScreen />
      </QueryClientProvider>,
    );
    const input = getByPlaceholderText('cryptoList.searchPlaceholder');
    fireEvent.changeText(input, '90');
    expect(input.props.value).toBe('90');
  });
});

it('renders currency item from single currency data', async () => {
  (getSingleCurrency as jest.Mock).mockResolvedValue({ data: [currencyMock] });

  (useInfiniteQuery as jest.Mock).mockReturnValue({
    data: { pages: [{ data: [currencyMock], hasMore: false, nextStart: 0 }] },
    fetchNextPage: jest.fn(),
    hasNextPage: false,
    isFetchingNextPage: false,
    isLoading: false,
  });

  const { getByText } = render(
    <QueryClientProvider client={queryClient}>
      <CryptoListScreen />
    </QueryClientProvider>,
  );

  await waitFor(() => {
    expect(getByText(currencyMock.name)).toBeTruthy();
  });
});
