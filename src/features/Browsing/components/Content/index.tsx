import AppHeading from "@/components/ui/AppHeading";
import styled from "styled-components";
import IContent from "@/interface/Content";
import CardTrending from "../CardTrending";
import useFetchRecommendeds from "../../hooks/useFetchRecommendeds";
import Card from "../Card";

const TrendingsListContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

interface IContentList {
  contents: IContent[];
}

const ContentList = ({ contents }: IContentList) => {
  const contentList = contents.map((content, index) => (
    <li key={index}>
      <Card content={content} />
    </li>
  ));
  return <TrendingsListContainer>{contentList}</TrendingsListContainer>;
};

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Contents = () => {
  const {
    recommendeds,
    isSuccessRecommendeds,
    isLoadingRecommendeds,
    isErrorRecommendeds,
  } = useFetchRecommendeds();

  if (isLoadingRecommendeds) {
    ("Loading");
  }
  if (isErrorRecommendeds) {
    ("Error");
  }
  if (isSuccessRecommendeds && recommendeds) {
    return (
      <CarouselContainer>
        <AppHeading large>Recommended for you</AppHeading>
        <ContentList contents={recommendeds} />
      </CarouselContainer>
    );
  } else {
    return <div></div>;
  }
};

export default Contents;
