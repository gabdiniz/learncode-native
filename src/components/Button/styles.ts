import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 100,
    padding: 12,
    backgroundColor: colors.primary,
    height: 50,
    gap: spacing.extraSmall
  },
  label: {
    color: colors.white,
    fontFamily: typography.bold,
    fontSize: typography.md_3
  }
});