import { getDatabase } from "../../api/notion";
import Layout from "../../components/layout";
import { PostItem, PostList } from "../../components/post";

// getStaticProps : static generation
// getServerSideProps : server-side rendering
// useSWR : client-side rendering
export async function getServerSideProps() {
  const database = await getDatabase("9105f127b6b740e2a8d38688da6b31d2");
  return {
    props: {
      posts: database.results
    }
  };
}

export default function Posts({ posts }) {
  const filteredPosts = posts.filter(({ properties }) => {
    const tags = properties.Tags.multi_select;
    return !tags.some((tag) => tag.name === "WIP");
  });
  return (
    <Layout>
      <PostList>
        {filteredPosts?.map(({ id, properties, last_edited_time }) => {
          const title = properties.Name.title[0].plain_text;
          const tags = properties.Tags.multi_select;
          return (
            <PostItem
              key={id}
              id={id}
              title={title}
              lastEditedTime={last_edited_time}
              tags={tags}
            />
          );
        })}
      </PostList>
    </Layout>
  );
}
