/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, ImagePickerIOS, Alert } from 'react-native';
import PropTypes from 'prop-types';
import Permissions from 'react-native-permissions';
import SplashScreen from 'react-native-splash-screen';
import { Navigation } from 'react-native-navigation';
import theme from '../utils/theme';
import withSafeArea from '../utils/withSafeArea';
import Header from '../Components/Header';
import Cta from '../Components/Cta';
import Container from '../Components/Container';

type Props = {};
class StartScreen extends Component<Props> {
  static propTypes = {
    componentId: PropTypes.string,
  };

  state = {
    photoPermission: 'undetermined',
  }

  componentDidMount() {
    Permissions.check('photo').then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response });
    });
    SplashScreen.hide();
  }

  // Request permission to access photos
  requestPermission = (callback) => {
    Permissions.request('photo').then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response }, () => {
        callback();
      });
    });
  }

  alertForPhotosPermission() {
    this.requestPermission();
  }

  onClickLoadImage = () => {
    const { photoPermission } = this.state;

    switch (photoPermission) {
      case 'authorized':
        this.pickImage();
        break;
      case 'undetermined':
        this.requestPermission(this.pickImage);
        break;
      default:
        Alert.alert('Cannot load image.', 'Lightbox Tracer does not have permission to access your photo library. ', [{
          text: 'Cancel',
          // eslint-disable-next-line no-console
          onPress: () => console.log('Permission denied'),
          style: 'cancel',
        },
        {
          text: 'Open Settings',
          onPress: Permissions.openSettings,
        }]);
    }
  }

  pickImage = () => {
    const { photoPermission } = this.state;
    if (photoPermission === 'authorized') {
      ImagePickerIOS.openSelectDialog(
        { showImages: true, showVideos: false },
        (imageUri) => {
          this.navigateToTraceImage(imageUri);
        },
        // eslint-disable-next-line no-console
        () => console.log('Cancelled'),
      );
    }
  };

  navigateToTraceImage = async image => {
    const { componentId } = this.props;
    await Navigation.push(componentId, {
      component: {
        passProps: {
          // Props come in keys by name. Wrapping all in navigationParams to group
          navigationParams: {
            image,
          },
        },
        name: 'navigation.playground.TraceScreen',
      },
    });
  };

  render() {
    return (
      <Container styles={[theme.pageContainer]}>
        <View style={theme.contentContainer}>
          <Header />
          <Text style={theme.bodyText}>Select an image to trace.</Text>
          <Cta text="Load Image" action={this.onClickLoadImage} />
          <Container styles={[{ flex: 0.5, width: '70%', justifyContent: 'flex-end' }, theme.mediumVerticalMargins]}>
            <Text style={[theme.bodyTextSmall, theme.smallVerticalMargins, theme.centerText, theme.mediumText]}>
Load an image to trace.
            </Text>
            <Text style={[theme.bodyTextSmall, theme.smallVerticalMargins, theme.centerText, theme.mediumText]}>
Triple tap the image to display controls for scaling and color filtering.
            </Text>
            <Text style={[theme.bodyTextSmall, theme.smallVerticalMargins, theme.centerText, theme.mediumText]}>
Click the X button hide controls.
            </Text>
          </Container>
        </View>
      </Container>
    );
  }
}

// export default StartScreen;
export default withSafeArea(StartScreen);
