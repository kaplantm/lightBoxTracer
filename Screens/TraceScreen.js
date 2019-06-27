import React, { Component } from 'react';
import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import PropTypes from 'prop-types';
import theme from '../utils/theme';
import withSafeArea from '../utils/withSafeArea';
import TraceImage from '../Components/TraceImage';
import Container from '../Components/Container';
import EditPanel from '../Components/EditPanel';
import ImageOverlayButtons from '../Components/ImageOverlayButtons';
import TraceImageContainer from '../Components/TraceImageContainer';

type Props = {};
class TraceScreen extends Component<Props> {
  static propTypes = {
    navigationParams: PropTypes.shape({
      image: PropTypes.string.isRequired,
    }),
    componentId: PropTypes.string.isRequired,
  };

  state = {
    imageViewHeight: undefined,
    imageViewWidth: undefined,
    image: undefined,
    saturationValue: 1,
    contrastValue: 1,
    brightnessValue: 1,
    showingSelectMode: false,
    showingEditMode: false,
    showingScaleMode: false,
    flipped: false,
    rotation: 0,
  }

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    const { navigationParams } = this.props;
    const image = navigationParams ? navigationParams.image : null;
    this.setState({
      imageViewHeight: height,
      imageViewWidth: width,
      image,
      // eslint-disable-next-line max-len
      // image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/440px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    });
  }

  pop = () => {
    const { componentId } = this.props;
    Navigation.pop(componentId);
  }

  renderLoading = () => {
    return (
      <Container styles={[theme.alignCenter, theme.justifyCenter]}>
        <Text>Loading...</Text>
      </Container>
    );
  }

  onSliderChange = (stateKey, value) => {
    this.setState({
      [stateKey]: value,
    });
  }

  getFilterData = () => {
    const { saturationValue, contrastValue, brightnessValue } = this.state;
    return {
      saturationValue: saturationValue ** 2,
      contrastValue: contrastValue ** 2,
      brightnessValue: brightnessValue ** 2,
    };
  }

  getTraceImage = () => {
    const { image, imageViewWidth, imageViewHeight, flipped, rotation, showingScaleMode, showingEditMode } = this.state;
    return (
      image
        ? (
          <TraceImageContainer
            onPress={this.onImagePress}
            tappable={this.tappable}
            scalable={showingScaleMode}
            showingEditMode={showingEditMode}
          >
            <TraceImage
              flipped={flipped}
              rotation={rotation}
              image={image}
              height={imageViewHeight}
              width={imageViewWidth}
              filterData={this.getFilterData()}
            />
          </TraceImageContainer>
        )
        : this.renderLoading()
    );
  }

  setStateByObject = (object, callback) => {
    object && this.setState(object, callback);
  }

  setStateByFunction = (updateFunction) => {
    try {
      this.setState((state) => updateFunction(state));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Failed to update state via setStateByFunction.');
    }
  }

  onImagePress = () => {
    this.setStateByObject({ showingSelectMode: true, showingEditMode: false, showingScaleMode: false });
  }

  get tappable() {
    const { showingSelectMode, showingEditMode, showingScaleMode, image } = this.state;
    return image && !showingSelectMode && !showingEditMode && !showingScaleMode;
  }

  get sliderValues() {
    const { saturationValue, contrastValue, brightnessValue } = this.state;
    return { saturationValue, contrastValue, brightnessValue };
  }

  // TODO change container styles to style (and cleanup all styles in app)
  render() {
    const { showingSelectMode, showingEditMode, showingScaleMode } = this.state;

    return (
      <Container style={theme.pageContainer}>
        <Container
          styles={[theme.contentContainer, theme.unpadded, { alignItems: 'stretch', backgroundColor: 'black' }]}
          onLayout={this.onLayout}
        >
          {this.getTraceImage()}
        </Container>
        {((showingSelectMode || showingEditMode || showingScaleMode))
        && (
        <ImageOverlayButtons
          pop={this.pop}
          showingSelectMode={showingSelectMode}
          showingScaleMode={showingScaleMode}
          setStateByFunction={this.setStateByFunction}
          setStateByObject={this.setStateByObject}
        />
        ) }
        {showingEditMode && (
        <EditPanel
          onSliderChange={this.onSliderChange}
          sliderValues={this.sliderValues}
          getheaderTimeOutCallBack={this.getheaderTimeOutCallBack}
        />
        )}
      </Container>
    );
  }
}

export default withSafeArea(TraceScreen);
