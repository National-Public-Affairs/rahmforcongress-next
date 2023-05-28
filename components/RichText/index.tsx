import React from 'react';
import serialize from './serialize';
import classes from './styles.module.scss';

const RichText: React.FC<{ className?: string, content: any }> = ({ className, content }) => {
  if (!content) {
    return null;
  }

  return (
    <div className={[className, classes.richText].filter(Boolean).join(' ')}>
      {serialize(content)}
    </div>
  );
};

export default RichText;
