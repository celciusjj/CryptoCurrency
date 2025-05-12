import { useAppTheme } from '@/theme/types';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Text } from 'react-native-paper';

interface Props {
  label: string;
  value?: string;
  valueColor?: string;
}

export const CryptoInfoRow = ({ label, value, valueColor }: Props) => {
  const { colors } = useAppTheme();
  const { width } = useWindowDimensions();

  const isSmallScreen = width < 390;

  return (
    <View style={[styles.infoRow, isSmallScreen && styles.infoRowColumn]}>
      <Text style={[styles.label, { color: colors.black }]}>{label}</Text>
      <Text style={{ color: valueColor ?? colors.black }}>{value || 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
