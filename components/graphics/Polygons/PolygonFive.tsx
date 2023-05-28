import React from 'react';

type Props = {
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}

const PolygonFive: React.FC<Props> = ({
  fillColor,
  strokeColor,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1470.9685 224.0545"
    style={{
      fill: fillColor,
      stroke: strokeColor,
    }}
    className={className}
  >
    <g>
      <path
        d="m.0106,67.0059l36.9921,81.7061,658.555,75.3425,775.4108-94.3863L988.6489,0,0,67.0051"
      />
    </g>
  </svg>
);

export default PolygonFive;
