import React from 'react';

type Props = {
  fillColor?: string;
  strokeColor?: string;
  className?: string;
}

const PolygonFour: React.FC<Props> = ({
  fillColor,
  strokeColor,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 608.5 331.1"
    style={{
      stroke: strokeColor || 'rgba(0,0,0,0)',
      strokeMiterlimit: 10,
      fill: fillColor || 'rgba(0,0,0,0)',
    }}
    className={className}
  >
    <g>
      <polygon
        points=".67 123.57 434.67 .57 607.67 218.57 290.67 330.57 54.67 256.57 .67 123.57"
        style={{ strokeMiterlimit: '10' }}
      />
    </g>
  </svg>
);

export default PolygonFour;
