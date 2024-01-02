import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Client } from '@notionhq/client';

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
      notionData: response,
    },
  };
}

export default function Home({ notionData }) {
  console.log(notionData);
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
          {/* {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))} */}
        </ul>
      </section>
    </Layout>
  );
}