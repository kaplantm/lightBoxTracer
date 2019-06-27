import React from 'react';
// import LongPressableArea from './LongPressableArea';
import ScalableArea from './ScalableArea';
import Container from './Container';
import theme from '../utils/theme';
import DoubleTappableArea from './DoubleTappableArea';

const TraceImageContainer = (props) => {
  const { children, onPress, tappable, scalable, showingEditMode } = props;
  const onPressAction = tappable ? onPress : null;

  if (!showingEditMode) {
    return (
      <ScalableArea scalable={scalable}>
        <DoubleTappableArea onPress={onPressAction}>
          {/* <LongPressableArea onLongPress={onLongPressAction}> */}
          { children }
          {/* </LongPressableArea> */}
        </DoubleTappableArea>
      </ScalableArea>
    );
  } else {
    return <Container styles={[theme.alignCenter]}>{children}</Container>;
  }
};


export default TraceImageContainer;
