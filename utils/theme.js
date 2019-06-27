import { Dimensions, Platform, PixelRatio, StyleSheet } from 'react-native';
import colors from './colors';


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  console.log(SCREEN_WIDTH);
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    if (SCREEN_WIDTH > 700) {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) * 0.8;
    }
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const themeBits = {
  noFlex: {
    flex: 0,
  },
  flex: {
    flex: 1,
  },
  posAbsolute: {
    position: 'absolute', top: 0, left: 0, right: 0,
  },
  absoluteFull: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
  padded: {
    padding: 20,
  },
  unpadded: {
    padding: 0,
  },
  margin: {
    margin: 10,
  },
  noMargin: {
    margin: 0,
  },
  bordered: {
    borderWidth: 2,
    borderColor: 'red',
  },
  centerText: {
    textAlign: 'center',
  },
  largeFontSize: {
    fontSize: normalize(25), // 25,
  },
  mediumFontSize: {
    fontSize: normalize(20), // 20,
  },
  regularFontSize: {
    fontSize: normalize(15), // 15,
  },
  smallFontSize: {
    fontSize: normalize(13), // 13,
  },
  lightText: {
    color: colors.white,
  },
  mediumText: {
    color: colors.slateLight,
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
  mediumVerticalMargins: {
    marginTop: 20,
    marginBottom: 20,
  },
  smallVerticalMargins: {
    marginTop: 10,
    marginBottom: 10,
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
  bodyTextSmall: {
    ...themeBits.smallFontSize,
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
  imageOverlayButton: {
    ...themeBits.shaded,
    opacity: 0.8,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

export default theme;
