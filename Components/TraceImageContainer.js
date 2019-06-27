import React from 'react';
// import LongPressableArea from './LongPressableArea';
import ScalableArea from './ScalableArea';
import Container from './Container';
import theme from '../utils/theme';
import TripleTappableArea from './TripleTappableArea';

const TraceImageContainer = (props) => {
  const { children, onPress, tappable, scalable, showingEditMode } = props;
  const onPressAction = tappable ? onPress : null;

  if (!showingEditMode) {
    return (
      <ScalableArea scalable={scalable}>
        <TripleTappableArea onPress={onPressAction}>
          {/* <LongPressableArea onLongPress={onLongPressAction}> */}
          { children }
          {/* </LongPressableArea> */}
        </TripleTappableArea>
      </ScalableArea>
    );
  } else {
    return <Container styles={[theme.alignCenter]}>{children}</Container>;
  }
};


export default TraceImageContainer;
