import React from 'react';
import NextHead from 'next/head';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import type { MediaType } from '@/types/fields';

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

const defaultDescription = 'Tayler Rahm for US Congress in Minnesota\'s MN-02';
const defaultTitle = 'A New Generation of Leadership';
const titleSuffix = ' | Rahm for Congress';
const defaultOGImage = `${SERVER_URL}/images/og-image.jpg`;
const defaultKeywords = 'United States, Congress, House of Representatives, Campaign, Rahm';

type Props = {
  title?: string,
  description?: string,
  ogImage?: MediaType,
  keywords?: string,
};

const Head: React.FC<Props> = ({ title, description, ogImage, keywords }) => {
  const { asPath } = useRouter();
  console.log('head data', title)
  const getTitle = () => {
    if (title) return title + titleSuffix;
    return defaultTitle + titleSuffix;
  };

  return (
    <NextHead>
      <title>
        {getTitle()}
      </title>
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
      />
      <meta
        name="description"
        content={description || defaultDescription}
      />
      <meta
        name="keywords"
        content={keywords || defaultKeywords}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        property="og:url"
        content={`${SERVER_URL}${asPath}`}
      />
      <meta
        property="og:title"
        content={title || defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="twitter:title"
        content={title || defaultTitle}
      />
      <meta
        name="twitter:site"
        content="@payloadcms"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:image"
        content={ogImage?.url || defaultOGImage}
      />
      <meta
        property="og:image"
        content={ogImage?.url || defaultOGImage}
      />
    </NextHead>
  );
};

export default Head;
