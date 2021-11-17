import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from "../../constants";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <SportsStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </SportsStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  


  @media ${p => p.theme.queries.tabletAndUp} {
    grid-template-columns: minmax(0px, auto);
    gap: 64px;
  }
  
  @media ${p => p.theme.queries.laptopAndUp} {
    grid-template-columns: 1fr minmax(0px, 1fr);
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media ${p => p.theme.queries.laptopAndUp} {
    border-right: 1px solid var(--color-gray-300);
    padding-right: 24px;
    margin-right: 24px;
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;
  

`;

const SportsSection = styled.section``;

const SportsStoryWrapper = styled.div`
  min-width: 220px;
`

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;
  
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    grid-template-columns: revert;
    flex-wrap: nowrap;
    overflow: scroll;
  }
`;

export default SpecialtyStoryGrid;
