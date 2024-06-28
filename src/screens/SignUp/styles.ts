import { StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: spacing.large,
    paddingTop: 200,
    gap: 10
  },
  title: {
    fontFamily: typography.bold,
    fontSize: typography.lg_2,
    color: colors.white,
    marginBottom: spacing.medium
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    paddingEnd: spacing.small,
    marginBottom: spacing.medium
  },
  forgotPasswordText: {
    color: colors.white
  }
});