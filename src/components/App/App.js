import React from 'react';

import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { ThemeProvider } from 'styled-components';
import Footer from '../Footer';
import Spacer from '../Spacer';
import MainStoryGrid from '../MainStoryGrid';
import SpecialtyStoryGrid from '../SpecialtyStoryGrid';
import { COLORS, QUERIES } from "../../constants";

const App = () => {
  return (
    <ThemeProvider theme={{queries: QUERIES, colors: COLORS}}>
      <Header />
      <MaxWidthWrapper as="main">
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </MaxWidthWrapper>
      <Spacer size={64} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
