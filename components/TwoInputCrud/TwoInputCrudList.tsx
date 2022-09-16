import React from 'react';
import { IarticleList } from './TwoInputCrud';
import styled from 'styled-components';

interface Props {
  list: IarticleList[];
}

const TwoInputCrudList = ({ list }: Props) => {
  return (
    <ListSection>
      {list.map(list => (
        <Article>
          <h2>Article Name: {list.articleName}</h2>
          <h2>Article Content: {list.articleContent}</h2>
        </Article>
      ))}
    </ListSection>
  );
};

const ListSection = styled.section``;

const Article = styled.article`
  margin-top: 32px;
`;

export default TwoInputCrudList;
