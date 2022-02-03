// React imports
import React from 'react';

// Components imports
import Main from '../components/Main';
import Section from '../components/Section';
import PageTitle from '../components/PageTitle';

const HomePage = () => {
  return (
    <Main>
      <Section>
        <PageTitle title="Phone book always with you" />
      </Section>
    </Main>
  );
};

export default HomePage;