import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const name = "c9u11";
export const siteTitle = "Next.js Sample Website";

const PAGE_DEFAULT_HORIZONTAL_PADDING = "20px";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid var(--sidebar-background);
  background-color: var(--main-background);
  padding: 10px ${PAGE_DEFAULT_HORIZONTAL_PADDING};
  position: sticky;
  top: 0;
`;
const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const BlogTitle = styled.h1`
  font-size: 36px;
  color: #001858;
  margin: 0;
  padding: 0;
  &::after {
    content: ".Blog";
    font-size: 18px;
    color: #337ea9;
    margin: 0;
    padding: 0;
  }
`;

const HeaderItem = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: var(--primary-text);
  margin: 0;
  padding: 0;
`;

const Main = styled.main`
  background-color: var(--main-background);
  width: 100%;
  padding: 20px ${PAGE_DEFAULT_HORIZONTAL_PADDING};
`;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header>
        <HeaderLeft>
          <BlogTitle>{name}</BlogTitle>
        </HeaderLeft>
        <HeaderRight>
          <HeaderItem href="/">Home</HeaderItem>
          <HeaderItem href="/about">About</HeaderItem>
          <HeaderItem href="/posts">Posts</HeaderItem>
        </HeaderRight>
      </Header>
      <Main>{children}</Main>
    </Container>
  );
}
