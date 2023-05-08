import styled from "styled-components";
import Carousel from "./components/Carousel";
import Contents from "./components/Content";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";

const PageContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Browsing = () => {
  return (
    <>
      <SideBar />
      <PageContentLayout>
        <SearchBar />
        <Carousel />
        <Contents />
      </PageContentLayout>
    </>
  );
};

export default Browsing;
