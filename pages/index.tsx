import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { PostList, PostItem } from '../components/post';
import { getDatabase } from '../api/notion';

// getStaticProps : static generation
// getServerSideProps : server-side rendering
// useSWR : client-side rendering
export async function getStaticProps() {
  const database = await getDatabase('9105f127b6b740e2a8d38688da6b31d2');
  return {
    props: {
      posts: database.results,
    },
  };
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <PostList>
          {posts?.map(({ id, properties, last_edited_time }) => (
            <PostItem key={id} id={id} title={properties.Name.title[0].plain_text} lastEditedTime={last_edited_time} />
          ))}
        </PostList>
      </section>
    </Layout>
  );
}