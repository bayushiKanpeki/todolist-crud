import React from 'react';
import { IList } from './SingleInputCrud';
import styled from 'styled-components';

interface Props {
  list: IList[];
  handleDelete: (listId: number) => void;
}

const SingleInputCrudList = ({ list, handleDelete }: Props) => {
  return (
    <ListSection>
      {list.map(list => (
        <ArticleContainer key={list.id}>
          <h1>{list.listTitle}</h1>
          <DeleteButton onClick={() => handleDelete(list.id)}>
            delete
          </DeleteButton>
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

export default SingleInputCrudList;
