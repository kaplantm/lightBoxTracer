import { StyleSheet } from 'react-native';
import colors from './colors';

const themeBits = {
  noFlex: {
    flex: 0,
  },
  flex: {
    flex: 1,
  },
  padded: {
    padding: 20,
  },
  unpadded: {
    padding: 0,
  },
  centerText: {
    textAlign: 'center',
  },
  largeFontSize: {
    fontSize: 25,
  },
  mediumFontSize: {
    fontSize: 20,
  },
  regularFontSize: {
    fontSize: 15,
  },
  lightText: {
    color: colors.white,
  },
  darkText: {
    color: colors.slate,
  },
  shaded: {
    shadowColor: colors.slate,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  verticalMargins: {
    marginTop: 40,
    marginBottom: 40,

  },
};

const theme = StyleSheet.create({
  ...themeBits,
  pageContainer: {
    backgroundColor: colors.offWhite,
    ...themeBits.justifyCenter,
    ...themeBits.alignCenter,
  },
  contentContainer: {
    ...themeBits.flex,
    width: '100%',
    ...themeBits.padded,
    ...themeBits.justifyCenter,
    ...themeBits.alignCenter,
    ...themeBits.shaded,
    // flex: 1,

    backgroundColor: colors.white,
    // backgroundColor: 'red',
  },
  header: {
    ...themeBits.padded,
    ...themeBits.verticalMargins,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: colors.apricot,
    borderBottomWidth: 5,
  },
  headerText: {
    ...themeBits.centerText,
    ...themeBits.largeFontSize,
    ...themeBits.darkText,
    fontWeight: '700',
    letterSpacing: 2,
  },
  bodyText: {
    ...themeBits.regularFontSize,
    ...themeBits.darkText,
  },
  ctaButton: {
    ...themeBits.padded,
    ...themeBits.shaded,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: colors.apricot,
    ...themeBits.verticalMargins,
  },
  ctaButtonText: {
    ...themeBits.lightText,
    ...themeBits.mediumFontSize,
  },
  safeArea: {
    backgroundColor: colors.offWhite,
  },
});

export default theme;
