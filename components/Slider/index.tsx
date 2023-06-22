import React, {
  useReducer,
  useCallback,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { withWindowInfo } from '@faceless-ui/window-info';
import { MouseInfoProvider } from '@faceless-ui/mouse-info';
import useDraggable from './useDragScroll';
import Slide from './Slide';
import type { Reducer, SliderContext, Props } from './types';
import { joinClassNames } from '@/styles/joinClassNames';
import classes from './styles.module.scss';
import DragHandle from './DragHandle';

const Context = createContext<SliderContext>({
  hasNext: false,
  hasPrev: false,
  currentSlide: 0,
  next: () => null,
  prev: () => null,
  dispatch: () => null,
  percentScrolled: 0,
  slides: [],
});

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      const newState = [...state];
      newState[action.i] = action.slide;
      return newState;
    }

    case 'UPDATE_SIZE': {
      const newState = [...state];
      newState[action.i] = {
        ...state[action.i],
        width: action.width,
        height: action.height,
      };
    }

    default: {
      return state;
    }
  }
};

export const SliderProvider = ({ children }: any) => {
  const [slides, dispatch] = useReducer(reducer, []);
  const [percentScrolled, setPercentScrolled] = useState(0);
  const currentSlide = slides.findIndex((slide) => slide && slide.isIntersecting);
  const containerRef = useDraggable();

  const hasPrev = Boolean(currentSlide);
  const hasNext = slides.length > currentSlide;

  const next = useCallback(() => {
    if (containerRef.current) {
      const passedSlides = slides.slice(0, currentSlide + 1);
      const scrollPos = passedSlides.reduce((pos, slide) => pos + slide.width, 0);

      containerRef.current.scrollTo({
        top: 0,
        left: scrollPos,
        behavior: 'smooth',
      });
    }
  }, [slides, containerRef, currentSlide]);

  const prev = useCallback(() => {
    if (containerRef.current && currentSlide) {
      const passedSlides = slides.slice(0, currentSlide - 1);
      const scrollPos = passedSlides.reduce((pos, slide) => pos + slide.width, 0);

      containerRef.current.scrollTo({
        top: 0,
        left: scrollPos,
        behavior: 'smooth',
      });
    }
  }, [slides, containerRef, currentSlide]);

  useEffect(() => {
    const container = containerRef?.current;
    let eventListener: EventListener;

    if (container) {
      // timer setup
      let timeout: number;

      eventListener = () => {
        // if there's a timer, cancel it
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }

        // set up new requestAnimationFrame()
        timeout = window.requestAnimationFrame(() => {
          // run scroll functions
          const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
          setPercentScrolled(scrollPercentage);
        });
      };

      // listen for resize events
      container.addEventListener('scroll', eventListener, false);
    }

    return () => {
      if (container) container.removeEventListener('scroll', eventListener);
    }
  }, [containerRef]);

  const value = {
    currentSlide,
    dispatch,
    next,
    prev,
    containerRef,
    hasPrev,
    hasNext,
    percentScrolled,
    slides,
  };

  return (
    <Context.Provider value={value}>
      {typeof children === 'function' && children(value)}
      {typeof children !== 'function' && children}
    </Context.Provider>
  );
};

export const useSlider = (): SliderContext => useContext(Context);

const Slider: React.FC<Props> = ({
  children,
  hideScrollbar = false,
}) => {
  const { dispatch, containerRef, slides } = useSlider();
  const [showDragHandle, setShowDragHandle] = useState(false);
  const [enableDragHandle, setEnableDragHandle] = useState(true);

  useEffect(() => {
    setEnableDragHandle(slides.length > 2);
  }, [slides]);

  return (
    <div
      className={
        joinClassNames([classes.wrap, enableDragHandle && classes.grabCursor])
      }
      style={hideScrollbar
        ? {
          height: containerRef?.current?.clientHeight ? containerRef?.current?.clientHeight : 0,
        }
        : {}
      }
    >
      <div
        ref={containerRef}
        className={classes.slider}
        onMouseMove={() => setShowDragHandle(true)}
        onMouseLeave={() => setShowDragHandle(false)}
      >
        {
          enableDragHandle && (
            <MouseInfoProvider>
              <DragHandle show={showDragHandle} />
            </MouseInfoProvider>
          )
        }

        {
          Array.isArray(children) && children.map((child, idx) => (
            <Slide
              containerRef={containerRef}
              key={idx}
              i={idx}
              dispatch={dispatch}
            >
              {child}
            </Slide>
          ))
        }
      </div>
    </div>
  );
};

export default withWindowInfo(Slider);
