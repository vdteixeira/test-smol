import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ContentCreatorList } from '../components/ContentCreatorList';
import { ContentList } from '../components/ContentList';
import { ContentCreator, Content } from '../utils/types';

type Props = {
  contentCreators: ContentCreator[];
  contents: Content[];
};

const Home: React.FC<Props> = ({ contentCreators, contents }) => {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js App</h1>
        <ContentCreatorList contentCreators={contentCreators} />
        <ContentList contents={contents} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const res1 = await fetch(`http://localhost:3000/api/contentCreators`);
  const contentCreators: ContentCreator[] = await res1.json();

  const res2 = await fetch(`http://localhost:3000/api/contents`);
  const contents: Content[] = await res2.json();

  // Pass data to the page via props
  return { props: { contentCreators, contents } };
};

export default Home;