import Head from "next/head";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { SEO, SITE_URL } from "../lib/constants";

type Props = {
  title?: string;
  description?: string;
  ogimage?: string;
};

export const Meta: FunctionComponent<Props> = ({
  title,
  description,
  ogimage,
}) => {
  const pageTitle = title || SEO.title;
  const pageDescription = description || SEO.description;
  const ogImage = ogimage || SEO.ogimage;

  const router = useRouter();
  const currentUrl = `${SITE_URL}${router.asPath}`;

  return (
    <Head>
      <title>{`${pageTitle} - Creators`}</title>
      <link rel="icon" href="/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={ogImage} />
    </Head>
  );
};
