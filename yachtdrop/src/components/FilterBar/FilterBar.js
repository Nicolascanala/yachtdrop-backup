import styled from 'styled-components';
import React from 'react';
import BarButton from './objects/BarButton.js';

const FilterBarWrapper = styled.div`
  position: fixed;
  margin-top: 93px;
`;

const FilterGrid = styled.div`
  justify-content: left;
  height: 100vh;
  width: 300px;
  background-color: white;
  padding: 20px;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const FilterDiv = styled.div`
  padding: 12px;
  border-bottom: 2px solid lightgray;
`;

const FilterTitle = styled.div`
  padding: 16px;
  font-size: 30px;
`;

const BlackSection = styled.div`
  background-color: black;
  height: 21px;
`;

const FilterBar = () => {
  return (
    <FilterBarWrapper>
      <BarButton />
      <BlackSection />
      <FilterGrid>
        <FilterTitle>Filter by</FilterTitle>
        <FilterDiv>Type</FilterDiv>
        <FilterDiv>Region</FilterDiv>
        <FilterDiv>Price</FilterDiv>
      </FilterGrid>
    </FilterBarWrapper>
  );
};

export default FilterBar;