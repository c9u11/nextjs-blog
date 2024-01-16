import styled from 'styled-components';
import Date from './date';
import Link from 'next/link';

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const PostList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 5px;
`
const PostItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  aspect-ratio: 1;
  gap: 3px;
  &:hover {
    background-color: #eee;
  }
`
const PostItemTitle = styled.h3`
  font-size: 20px;
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
  font-size: 14px;
  color: #666;
  text-decoration: none;
`

interface PostItemProps {
  id: string;
  title: string;
  lastEditedTime: string;
}

const PostItem = ({ id, title, lastEditedTime }: PostItemProps) => {
  return (
    <CustomLink href={`/posts/${id}`}>
      <PostItemContainer>
        <PostImage></PostImage>
        <PostItemTitle>{title}</PostItemTitle>
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