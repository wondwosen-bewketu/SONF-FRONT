import styled from "@emotion/styled";
import { Flex, Image } from "rebass";

export const Container = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

export const SongCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const SongTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: #333;
`;

export const SongArtist = styled.p`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #666;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background: linear-gradient(45deg, #9290c3, #535C91);
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #070f2b;
  }
`;

export const StyledActiveButton = styled(Button)`
  background-color: #9290c3;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SongImage = styled(Image)`
  height: 36px;
  padding-right: 20px;
  border-radius: 50%;
`;

export const ResponsiveFlex = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 2rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    margin: 1rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  & > Button {
    font-size: 1.2rem;
    padding: 5px 10px;
    margin: 0 5px;
  }
  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;
