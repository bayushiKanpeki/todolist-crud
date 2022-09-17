import React from 'react';
import { IarticleList } from './TwoInputCrud';
import styled from 'styled-components';

interface Props {
  list: IarticleList[];
  handleDelete: (articleListId: number) => void;
}

const TwoInputCrudList = ({ list, handleDelete }: Props) => {
  return (
    <ListSection>
      {list.map(list => (
        <Article>
          <h2>Article Name: {list.articleName}</h2>
          <h2>Article Content: {list.articleContent}</h2>
          <DeleteButton onClick={() => handleDelete(list.id)}>
            delete
          </DeleteButton>
        </Article>
      ))}
    </ListSection>
  );
};

const ListSection = styled.section``;

const Article = styled.article`
  margin-top: 32px;
  border: 1px solid gray;
  padding: 8px;
  margin: 8px;
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background: gainsboro;
`;

export default TwoInputCrudList;
