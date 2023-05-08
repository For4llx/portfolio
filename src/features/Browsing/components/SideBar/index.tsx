import NavIconBookMark from "@/components/icons/NavIconBookMark";
import NavIconHome from "@/components/icons/NavIconHome";
import NavIconMovies from "@/components/icons/NavIconMovies";
import NavIconTvSeries from "@/components/icons/NavIconTvSeries";
import AppLink from "@/components/ui/AppLink";
import AppLogo from "@/components/ui/AppLogo";
import styled from "styled-components";

const SideBarContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.semiDarkBlue};
  border-radius: 20px;
  max-height: 960px;
  @media screen and (max-width: 768px) {
    padding: 2rem;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
    gap: 1.5rem;
    border-radius: 0;
    width: 100%;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
  @media screen and (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Avatar = styled.img`
  position: absolute;
  bottom: 2rem;
  border: 1px solid ${(props) => props.theme.white};
  border-radius: 100%;

  height: 40px;
  width: 40px;
  @media screen and (max-width: 768px) {
    position: static;
    bottom: 0;
  }
  @media screen and (max-width: 480px) {
    height: 24px;
    width: 24px;
  }
`;

const SideBar = () => {
  return (
    <SideBarContainer>
      <AppLogo src="./assets/logo.svg" />
      <Navigation>
        <AppLink>
          <NavIconHome />
        </AppLink>
        <AppLink>
          <NavIconMovies />
        </AppLink>
        <AppLink>
          <NavIconTvSeries />
        </AppLink>
        <AppLink>
          <NavIconBookMark />
        </AppLink>
      </Navigation>
      <Avatar src="./assets/image-avatar.png" alt="Avatar" />
    </SideBarContainer>
  );
};

export default SideBar;
