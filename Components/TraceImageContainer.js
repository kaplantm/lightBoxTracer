import React from 'react';
import LongPressableArea from './LongPressableArea';
import ScalableArea from './ScalableArea';
import Container from './Container';
import theme from '../utils/theme';

const TraceImageContainer = (props) => {
  const { children, onLongPress, tappable, scalable, showingEditMode } = props;
  const onLongPressAction = tappable ? onLongPress : null;

  if (!showingEditMode) {
    return (
      <ScalableArea scalable={scalable}>
        <LongPressableArea onLongPress={onLongPressAction}>
          { children }
        </LongPressableArea>
      </ScalableArea>
    );
  } else {
    return <Container styles={[theme.alignCenter]}>{children}</Container>;
  }
};


export default TraceImageContainer;
