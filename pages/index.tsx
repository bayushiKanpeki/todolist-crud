import styled from 'styled-components';
import type { NextPage } from 'next';
import React from 'react';
import Spacer from '../components/Spacer';
import SingleInputCrud from 'components/SingleInputCrud';

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <SingleInputCrud />
    </PageWrapper>
  );
};

const PageWrapper = styled.main``;

export default Home;
