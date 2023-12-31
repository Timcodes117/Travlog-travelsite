import Head from 'next/head';

const Meta = ({ title, description, image }) => (
  <Head>
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </Head>
);

export default Meta;
