import styled from 'styled-components';
import Date from './date';
import Link from 'next/link';

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(260px, 1fr));
  list-style: none;
  padding: 0;
  margin: 0;
`
const PostItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  aspect-ratio: 1;
  gap: 5px;
  &:hover {
    background-color: #eee;
  }
`
const PostItemTitle = styled.h3`
  font-size: 14px;
  font-weight: bolder;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  color: #2B2C34;
`

const PostImage = styled.img`
  width: 100%;
  flex: 1;
  object-fit: cover;
  border-radius: 5px;
  background-color: #ddd;
  border: 1px solid #ddd;
`

const DateContainer = styled.div`
  font-size: 12px;
  color: #666;
  text-decoration: none;
`

const TagContainer = styled.div`
  display: flex;
  gap: 3px;
`

const Tag = styled.span<{ $color: string }>`
  font-size: 10px;
  font-weight: 300;
  color: white;
  background-color: ${({ $color }) => $color};
  padding: 3px 6px;
  text-decoration: none;
  width: fit-content;
  border-radius: 3px;
`

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
          {
            tags.map((tag) => (
              <Tag $color={tag.color}>{tag.name}</Tag>
            ))
          }
        </TagContainer>
        <DateContainer>
          <Date dateString={lastEditedTime} />
        </DateContainer>
      </PostItemContainer>
    </CustomLink>
  );
}

export {
  PostList,
  PostItem,
}