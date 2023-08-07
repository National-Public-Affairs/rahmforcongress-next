import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { Grid, Cell } from '@faceless-ui/css-grid';
import { SyncLoader } from 'react-spinners';

import GridContainer from '../../components/layout/GridContainer';
import Error from '@/components/Error';
import Article from './Article';

import { NewsQueryType } from '@/types/collections';

import classes from './styles.module.scss';

const NewsBlock: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState<NewsQueryType>();
  // fetch news data
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);

      const news = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/news`)
        .then(res => res.json());
        
      setNews(news);
      setLoading(false);
    };

    getNews();
  }, []);

  // QUERY LOADING
  if (loading) {
    return (
      <div className={classes.loading}>
        <div className={classes.spinner}>
          <SyncLoader color="white" />
        </div>
      </div>
    );
  }

  // IF NO NEWS OR QUERY FAILS
  if (!news || news.docs?.length < 1) {
    return (
      <GridContainer>
        <Grid>
          <Cell
            cols={1}
            start={4}
          >
            <Error message="There was a problem retrieving the news." />
          </Cell>
        </Grid>
      </GridContainer>
    );
  }

  return (
    <div>
      <GridContainer>
        <Grid>
          <Cell
            cols={6}
            start={4}
            startM={2}
            colsS={8}
            startS={1}
            className={classes.articles}
          >
            {
              news?.docs?.map((article) => (
                <div key={article.id}>
                  <Article data={article} />
                </div>
              ))
            }
          </Cell>
        </Grid>
      </GridContainer>
    </div>
  );
};

export default NewsBlock;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const newsQuery = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/news`
  ).then((res) => res.json());

  if (!newsQuery || newsQuery.totalDocs === 0) {
    ctx.res.statusCode = 404;
  }

  return {
    props: {
      news: newsQuery,
    }
  }
};
