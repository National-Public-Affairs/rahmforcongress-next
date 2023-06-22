import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import GridContainer from '@/components/layout/GridContainer';
import Slider, { SliderProvider } from '..';
import type { SliderContext } from '../types';
import type { Color } from '@/styles/styles';
import classes from './styles.module.scss';
import { colors } from '@/styles/styles';

type Props = {
  backgroundColor: Color;
  slides: JSX.Element[];
}

const SliderOnBackground: React.FC<Props> = ({ backgroundColor, slides }) => {
  const { width } = useWindowInfo();
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [sliderLeftPadding, setSliderLeftPadding] = useState<number>();

  useEffect(() => {
    if (containerRef?.current && gridRef?.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const gridWidth = gridRef.current.offsetWidth;
      const widthToSet = (containerWidth - gridWidth) / 2;
      setSliderLeftPadding(widthToSet);
    }
  }, [width]);
  
  const [showTrack, setShowTrack] = useState(true);
  useEffect(() => {
    if (slides.length <= 2) {
      setShowTrack(false);
    }
  }, [slides.length]);

  return (
    <div
      className={classes.sliderOnBackground}
      ref={containerRef}
      style={{ backgroundColor: colors[backgroundColor] }}
    >
      <SliderProvider>
        {(slider: SliderContext) => (
          <Fragment>
            <div
              className={classes.slider}
            >
              <Slider hideScrollbar>
                {slides.map((slide, i) => (
                  <div
                    style={{
                      marginLeft: i === 0 ? sliderLeftPadding : undefined,
                    }}
                    key={i}
                  >
                    {slide}
                  </div>
                ))}
              </Slider>
            </div>
            {showTrack && (
              <GridContainer className={classes.trackWrap}>
                <div
                  ref={gridRef}
                >
                  <div className={classes.track}>
                    <div
                      className={classes.indicator}
                      style={{ left: `${slider.percentScrolled * 100}%` }}
                    />
                  </div>
                </div>
              </GridContainer>
            )}
          </Fragment>
        )}
      </SliderProvider>
    </div>
  );
};

export default SliderOnBackground;
