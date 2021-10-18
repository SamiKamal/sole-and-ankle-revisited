import React from 'react';
import styled from 'styled-components/macro';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';
import {QUEREIS} from '../../constants'

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUEREIS.tabletAndDown}{
    padding: 48px 32px;
  }


  @media ${QUEREIS.phoneAndDown}{
    padding: 48px 16px;
  }
`;

export default App;
