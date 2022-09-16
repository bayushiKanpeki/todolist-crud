import React from 'react';
import { IList } from './SingleInputCrud';
import styled from 'styled-components';

interface Props {
  list: IList[];
}

const SingleInputCrudList = ({ list }: Props) => {
  return (
    <ListSection>
      {list.map(list => (
        <h1>{list.listTitle}</h1>
      ))}
    </ListSection>
  );
};

const ListSection = styled.section``;

export default SingleInputCrudList;
