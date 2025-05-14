import { useAppTheme } from '@/theme/types';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-paper';

interface Props {
  label: string;
  value?: string;
  valueColor?: string;
  indicatorIcon?: React.ReactElement;
}

export const CryptoInfoRow = ({ label, value, valueColor, indicatorIcon }: Props) => {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();

  const isSmallScreen = width < 390;

  return (
    <View style={[styles.infoRow, isSmallScreen && styles.infoRowColumn]}>
      <Text style={[styles.label, { color: colors.black }]}>{label}</Text>
      <View style={styles.valueContainer}>
        <Text style={[styles.value, { color: valueColor ?? colors.black }]}>{value || 'N/A'}</Text>
        {indicatorIcon ? <View style={styles.indicator}>{indicatorIcon}</View> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoRowColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    flexWrap: 'wrap',
    width: '50%',
    fontWeight: 'bold',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    marginLeft: 5,
  },
  value: {
    fontSize: 14,
  },
});
