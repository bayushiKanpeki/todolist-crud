import styled from 'styled-components';
import type { NextPage } from 'next';
import React from 'react';
import Spacer from '../components/Spacer';
import SingleInputCrud from 'components/SingleInputCrud';
import TwoInputCrud from 'components/TwoInputCrud/TwoInputCrud';
import MultipleInputInObjectCrud from 'components/MultipleInputInObjectCrud';

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <div>
        <Title>SingleInputCrud</Title>
        <SingleInputCrud />
      </div>
      <div>
        <Title>TwoInputCrud</Title>
        <TwoInputCrud />
      </div>
      <div>
        <Title>Multiple Input on Object</Title>
        <MultipleInputInObjectCrud />
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.main`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 1.5rem;
  text-decoration: underline;
`;

export default Home;
