import React, { useState, useEffect } from 'react';
import { useMouseInfo } from '@faceless-ui/mouse-info';
import { joinClassNames } from '@/styles/joinClassNames';
import classes from './styles.module.scss';

type Props = {
  show?: boolean;
}

const DragHandle: React.FC<Props> = (props) => {
  const { show = false } = props;
  const mouseInfo = useMouseInfo();
  const [savedPosition, savePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (show) {
      savePosition({ x: mouseInfo.x, y: mouseInfo.y });
    }
  }, [show, mouseInfo]);
  
  return (
    <div
      className={
        joinClassNames([show && classes.showHandle, classes.handleContainer])
      }
    >
      <div
        className={classes.handle}
        style={
          show
            ? { left: mouseInfo.x, top: (mouseInfo.y - 8) }
            : { left: savedPosition.x, top: savedPosition.y }
        }
      >
        Drag me
      </div>
    </div>
  );
};

export default DragHandle;