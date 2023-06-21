import { GetServerSideProps } from 'next';
import type { PageQueryType } from '@/types/collections';
import NotFound from '@/components/NotFound';
import Template from '@/components/layout/Template';
import Head from '@/components/Head';
import Hero from '@/components/layout/PageHero';
import Banner from '@/components/layout/Banner';
import { FooterType, LegalType, SocialType } from '@/types/globals';
import RenderBlocks from '@/components/RenderBlocks';

export type Props = {
  page?: PageQueryType;
  footer: FooterType;
  socialMedia?: SocialType;
  legal?: LegalType;
}

const Page: React.FC<Props> = ({
  page,
  footer,
  legal,
  socialMedia,
}) => {
  if (!page || page.totalPages < 1) {
    return <NotFound />;
  }

  const pageData = page.docs[0];
  const { meta, hero, layout, banner } = pageData;

  return (
    <Template
      footer={footer}
      legal={legal}
      socialMedia={socialMedia}
    >
      {
        pageData?.banner?.display === 'yes' && (
          <Banner
            display={banner.display}
            newTab={banner.newTab}
            link={banner.link}
            bannerBackgroundColor={banner.bannerBackgroundColor}
            textColor={banner.textColor}
          />
        )
      }
      <Head
        title={meta?.title}
        description={meta?.description}
        ogImage={meta?.image}
      />
      <Hero
        type={hero.type}
        foregroundMedia={hero?.foregroundMedia}
        backgroundMedia={hero?.backgroundMedia}
        richText={hero?.richText}
      />
      <RenderBlocks layout={layout} />
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
