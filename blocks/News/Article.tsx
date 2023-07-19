import React from 'react';

import { NewsType } from '@/types/collections';
import Media from '@/components/Media';

type Props = {
  data: NewsType;
};

const Article: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Media
        mimeType={data.media.mimeType}
        url={data.media.url}
      />
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </div>
  );
};

export default Article;
