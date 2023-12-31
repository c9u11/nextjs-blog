import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getDatabase, getPage, getBlocks } from '../../api/notion';
import { Render } from '@9gustin/react-notion-render';

export async function getStaticPaths() {
  const paths = (await getDatabase('9105f127b6b740e2a8d38688da6b31d2')).results.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const page = await getPage(params.id);
  const blocks = await getBlocks(params.id);
  return {
    props: {
      page,
      blocks
    }
  }
}

export default function Post({ page, blocks }) {
  const title = page.properties.Name.title[0].plain_text;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={page.last_edited_time} />
        </div>
        <Render blocks={blocks.results} />
      </article>
    </Layout>
  );
}