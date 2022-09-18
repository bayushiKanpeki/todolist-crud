import React from 'react';
import { IList } from './SingleInputCrud';
import styled from 'styled-components';

interface Props {
  lists: IList[];
  handleDelete: (listId: number) => void;
}

const SingleInputCrudList = ({ lists, handleDelete }: Props) => {
  let listContent;
  // const [isEditing, setIsEditing] = React.useState(false);

  // if (isEditing) {
  //   listContent = (
  //     <>
  //       <input />
  //       <button onClick={() => setIsEditing(false)}>Save</button>
  //     </>
  //   );
  // } else {
  //   listContent = (
  //     <>
  //       {lists.listTitle}{' '}
  //       <button onClick={() => setIsEditing(true)}>Edit</button>
  //     </>
  //   );
  // }

  return (
    <ListSection>
      {lists.map(list => (
        <ArticleContainer key={list.id}>
          <h1>{list.listTitle}</h1>
          <DeleteButton onClick={() => handleDelete(list.id)}>
            delete
          </DeleteButton>
          <EditButton>edit</EditButton>
        </ArticleContainer>
      ))}
    </ListSection>
  );
};

const ListSection = styled.section``;

const ArticleContainer = styled.article`
  border: 1px solid gray;
  padding: 8px;
  margin: 8px;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background: gainsboro;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  background: gainsboro;
`;

export default SingleInputCrudList;
