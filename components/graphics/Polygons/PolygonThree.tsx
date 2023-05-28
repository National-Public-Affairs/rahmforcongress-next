import React from 'react';

type Props = {
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}

const PolygonThree: React.FC<Props> = ({
  fillColor,
  strokeColor,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1719.83 405.02"
    style={{
      fill: fillColor,
      stroke: strokeColor,
    }}
    className={className}
  >
    <g>
      <polygon
        points="226.7 .51 1718.7 35.51 1436.75 336.01 163.7 404.51 .7 247.51 226.7 .51"
        style={{ strokeMiterlimit: '10' }}
      />
    </g>
  </svg>
);

export default PolygonThree;
