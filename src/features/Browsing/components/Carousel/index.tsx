import AppHeading from "@/components/ui/AppHeading";
import styled from "styled-components";
import useFetchTrendings from "../../hooks/useFetchTrendings";
import TrendingsList from "../CardTrendingList";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Carousel = () => {
  const {
    trendings,
    isSuccessTrendings,
    isLoadingTrendings,
    isErrorTrendings,
  } = useFetchTrendings();

  if (isLoadingTrendings) {
    ("Loading");
  }
  if (isErrorTrendings) {
    ("Error");
  }
  if (isSuccessTrendings && trendings) {
    return (
      <CarouselContainer>
        <AppHeading large>Trending</AppHeading>
        <TrendingsList trendings={trendings} />
      </CarouselContainer>
    );
  } else {
    return <div></div>;
  }
};

export default Carousel;
