import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Client } from '@notionhq/client';
import Link from 'next/link';
import Date from '../components/date';

// getStaticProps : static generation
// getServerSideProps : server-side rendering
// useSWR : client-side rendering
export async function getStaticProps() {
  const notion = new Client({
    auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
  });

  const response = await notion.databases.query({
    database_id: '9105f127b6b740e2a8d38688da6b31d2',
  })
  return {
    props: {
      posts: response.results,
    },
  };
}

export default function Home({ posts }) {
  console.log(posts);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello World]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {posts?.map(({ id, properties, last_edited_time }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{properties.Name.title[0].plain_text}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={last_edited_time} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}