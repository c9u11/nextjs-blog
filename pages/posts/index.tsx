import Head from 'next/head';
import { getDatabase } from '../../api/notion';
import Layout from '../../components/layout';
import { PostItem, PostList } from '../../components/post';

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

export default function Posts({ posts }) {
  return (
    <Layout>
      <PostList>
        {posts?.map(({ id, properties, last_edited_time }) => (
          <PostItem key={id} id={id} title={properties.Name.title[0].plain_text} lastEditedTime={last_edited_time} />
        ))}
      </PostList>
    </Layout>
  );
}