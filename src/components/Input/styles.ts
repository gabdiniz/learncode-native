import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: spacing.small,
  },
  containerInput: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row'
  },
  icon: {
    position: 'absolute',
    top: 15,
    right: 20
  },
  input: {
    display: 'flex',
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 100,
    fontSize: typography.md_3,
    fontFamily: typography.regular
  },
  label: {
    color: colors.white,
    fontFamily: typography.bold,
    paddingStart: spacing.extraSmall,
    fontSize: typography.md_2
  }
});