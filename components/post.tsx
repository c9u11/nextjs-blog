import styled from "styled-components";
import Date from "./date";
import Link from "next/link";

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  list-style: none;
  padding: 0;
  max-width: 936px;
  margin: 0 auto;
`;
const PostItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  aspect-ratio: 1;
  gap: 5px;
  &:hover {
    background-color: var(--sidebar-background);
  }
`;
const PostItemTitle = styled.h3`
  font-size: 14px;
  font-weight: bolder;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  color: var(--primary-text);
`;

const PostImage = styled.img`
  width: 100%;
  flex: 1;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid var(--gray-background);

  background: var(--skeleton-background);
  animation: var(--skeleton-animation);
`;

const DateContainer = styled.div`
  font-size: 12px;
  color: var(--gray-text);
  text-decoration: none;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 3px;
`;

const Tag = styled.span<{ $color: string }>`
  font-size: 10px;
  font-weight: 300;
  color: white;
  background-color: ${({ $color }) => `var(--${$color}-text)`};
  padding: 3px 6px;
  text-decoration: none;
  width: fit-content;
  border-radius: 3px;
`;

const Article = styled.article`
  max-width: 936px;
  margin: 0 auto;
`;

interface PostItemProps {
  id: string;
  title: string;
  lastEditedTime: string;
  tags: Tag[];
}

interface Tag {
  name: string;
  color: string;
}

const PostItem = ({ id, title, lastEditedTime, tags }: PostItemProps) => {
  return (
    <CustomLink href={`/posts/${id}`}>
      <PostItemContainer>
        <PostImage></PostImage>
        <PostItemTitle>{title}</PostItemTitle>
        <TagContainer>
          {tags.map((tag) => (
            <Tag $color={tag.color}>{tag.name}</Tag>
          ))}
        </TagContainer>
        <DateContainer>
          <Date dateString={lastEditedTime} />
        </DateContainer>
      </PostItemContainer>
    </CustomLink>
  );
};

export { PostList, PostItem, Article };
