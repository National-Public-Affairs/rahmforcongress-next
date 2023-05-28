import React from 'react';

type Props = {
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}

const PolygonOne: React.FC<Props> = ({
  fillColor,
  strokeColor,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1341.0005 578.54"
    style={{
      stroke: strokeColor || 'rgba(0,0,0,0)',
      strokeMiterlimit: 10,
      fill: fillColor || 'rgba(0,0,0,0)',
    }}
    className={className}
  >
    <g>
      <polygon
        points="1340.5 .5 1340 498 760.5 578.04 .5 578.04 .5 92.5 670.5 .5 1340.5 .5"
      />
    </g>
  </svg>
);

export default PolygonOne;
