import { GetServerSideProps } from 'next';
import type { PageQueryType } from '@/types/collections';
import NotFound from '@/components/NotFound';
import Template from '@/components/layout/Template';
import Head from '@/components/Head';

export type Props = {
  page?: PageQueryType;
}

const Page: React.FC<Props> = ({ page }) => {
  if (!page || page.totalPages < 1) {
    return <NotFound />;
  }

  const pageData = page.docs[0];
  console.log('page data', pageData)
  return (
    <Template>
      <Head
        title={pageData?.meta?.title}
        description={pageData?.meta?.description}
        ogImage={pageData?.meta?.image}
      />
    </Template>
  );
}

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug ? (ctx.params.slug as string[]).join('/') : 'home';

  const pageQuery = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`
  ).then((res) => res.json());

  if (!pageQuery || pageQuery.totalDocs === 0) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      page: pageQuery,
    },
  };
};
