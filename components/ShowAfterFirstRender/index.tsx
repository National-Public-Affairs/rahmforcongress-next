import React, { useState, useEffect } from 'react';

type Props = {
  children: any;
}

export const ShowAfterFirstRender: React.FC<Props> = (props) => {
  const { children } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div style={{ opacity: show ? 1 : 0 }}>
      {children}
    </div>
  );
};
