import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  list-style-type: none;
  padding: 1rem;
`;

export const StyledSpan = styled.span`
  background: #9290c3;
  color: #070f2b;
  border-radius: 50%;
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 5px;
  background-color: #9290c3;
  color: #070f2b;
  border: none;
  cursor: pointer;
`;

export const StyledOption = styled.option`
  color: #070f2b;
  background: #9290c3;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
  &:hover {
    color: #070f2b;
    background-color: #9290c3;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledH2 = styled.h2`
  color: #9290c3;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem;
  text-align: center;
`;

export const StyledSongsList = styled.ul<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: none;
  padding: 0;
  & > li {
    display: ${props => (props.open ? 'block' : 'none')};
  }
`;
