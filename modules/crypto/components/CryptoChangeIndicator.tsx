import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react';
import withArrowDownAnimation from './withArrowDownAnimation';
import withArrowUpAnimation from './withArrowUpAnimation';

interface Props {
  percentChange: number;
  size?: number;
}

const CryptoChangeIndicator: React.FC<Props> = ({ percentChange, size = 12 }) => {
  const ArrowUpIcon = withArrowUpAnimation(FontAwesome6);
  const ArrowDownIcon = withArrowDownAnimation(FontAwesome6);
  return percentChange >= 0 ? <ArrowUpIcon size={size} /> : <ArrowDownIcon size={size} />;
};

export default CryptoChangeIndicator;
