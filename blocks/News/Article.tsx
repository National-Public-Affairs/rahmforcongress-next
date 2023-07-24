import React from 'react';

import { NewsType } from '@/types/collections';
import Media from '@/components/Media';

import classes from './styles.module.scss';
import styles from '../../styles/app.module.scss';
import { colors } from '@/styles/styles';

type Props = {
  data: NewsType;
};

const Article: React.FC<Props> = ({ data }) => {
  return (
    <a href={data.links[0].link.url} className={classes.articleLink}>
      <div
        className={classes.article}
        style={{ backgroundColor: colors[data.backgroundColor] }}
      >
        <div className={classes.imageWrapper}>
          <Media
            mimeType={data.media.mimeType}
            url={data.media.url}
            className={classes.logo}
          />
        </div>

        <div style={{
          color: data.backgroundColor === 'yellow'
            ? colors.darkPurple
            : data.backgroundColor === 'white'
              ? colors.purple
              : colors.yellow
        }}>
          <h5 className={styles.h5}>{data.title}</h5>
          <p className={classes.description}>{data.description}</p>
        </div>
      </div>
    </a>
  );
};

export default Article;
