import styled from "styled-components";
import IContent from "@/interface/Content";
import CardTrending from "../CardTrending";

const TrendingsListContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

interface ITrendingList {
  trendings: IContent[];
}

const TrendingsList = ({ trendings }: ITrendingList) => {
  const trendingsList = trendings.map((content, index) => (
    <li key={index}>
      <CardTrending content={content} />
    </li>
  ));
  return <TrendingsListContainer>{trendingsList}</TrendingsListContainer>;
};

export default TrendingsList;
