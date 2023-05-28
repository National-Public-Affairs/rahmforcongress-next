import React from 'react';

type Props = {
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}

const PolygonTwo: React.FC<Props> = ({
  fillColor,
  strokeColor,
  className,
}) => (
  <svg
    viewBox="0 0 1386.5107 429.0274"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      fill: fillColor,
      stroke: strokeColor,
    }}
    className={className}
  >
    <polygon
      points=".899 183.5073 628.899 .5073 1385.899 77.5073 1306.899 428.5073 168.899 372.5073 .899 183.5073"
      style={{ strokeMiterlimit: '10' }}
    />
  </svg>
);

export default PolygonTwo;
