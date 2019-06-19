import { StyleSheet } from "react-native";
import colors from "./colors";

const styleBits = {
  flex: {
    flex: 1
  },
  padded: {
    padding: 20
  },
  centerText: {
    textAlign: "center"
  },
  largeFontSize: {
    fontSize: 25
  },
  mediumFontSize: {
    fontSize: 20
  },
  regularFontSize: {
    fontSize: 15
  },
  lightText: {
    color: colors.white
  },
  darkText: {
    color: colors.slate
  },
  shaded: {
    shadowColor: colors.slate,
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  alignCenter: {
    alignItems: "center"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  verticalMargins: {
    marginTop: 40,
    marginBottom: 40,

  }
};

const styles = StyleSheet.create({
  ...styleBits,
  pageContainer: {
    flex: 1,
    backgroundColor: colors.offWhite,
    ...styleBits.justifyCenter,
    ...styleBits.alignCenter,
  },
  contentContainer: {
    ...styleBits.padded,
    ...styleBits.justifyCenter,
    ...styleBits.alignCenter,
    ...styleBits.shaded,
    // flex: 1,

    backgroundColor: colors.white,
    // backgroundColor: 'red',
  },
  header: {
    ...styleBits.padded,
    ...styleBits.verticalMargins,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: colors.apricot,
    borderBottomWidth: 5
  },
  headerText: {
    ...styleBits.centerText,
    ...styleBits.largeFontSize,
    ...styleBits.darkText,
    fontWeight: "700",
    letterSpacing: 2
  },
  bodyText: {
    ...styleBits.regularFontSize,
    ...styleBits.darkText,
  },
  ctaButton: {
    ...styleBits.padded,
    ...styleBits.shaded,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: colors.apricot,
    ...styleBits.verticalMargins,
  },
  ctaButtonText: {
    ...styleBits.lightText,
    ...styleBits.mediumFontSize
  }
});

export default styles;
