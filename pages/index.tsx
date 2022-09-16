import styled from 'styled-components';
import type { NextPage } from 'next';
import React from 'react';
import Spacer from '../components/Spacer';
import SingleInputCrud from 'components/SingleInputCrud';
import TwoInputCrud from 'components/TwoInputCrud/TwoInputCrud';

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <h1>SingleInputCrud</h1>
      <SingleInputCrud />
      <h1>TwoInputCrud</h1>
      <TwoInputCrud />
    </PageWrapper>
  );
};

const PageWrapper = styled.main``;

export default Home;
