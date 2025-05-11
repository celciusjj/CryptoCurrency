import { useAppTheme } from '@/theme/types';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface Props {
  label: string;
  value?: string;
  valueColor?: string;
}

export const CryptoInfoRow = ({ label, value, valueColor }: Props) => {
  const { colors } = useAppTheme();
  return (
    <View style={styles.infoRow}>
      <Text style={[styles.label, { color: colors.black }]}>{label}</Text>
      <Text style={{ color: valueColor ?? colors.black }}>{value || 'N/A'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    flexWrap: 'wrap',
    width: '50%',
    fontWeight: 'bold',
  },
});
