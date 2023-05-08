import BookmarkIcon from "@/components/icons/BookmarkIcon";
import AppHeading from "@/components/ui/AppHeading";
import AppLink from "@/components/ui/AppLink";
import AppParagraph from "@/components/ui/AppParagraph";
import IContent from "@/interface/Content";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Thumbnail = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
`;

const Picture = styled.picture`
  display: block;
  width: 470px;
  height: 230px;
`;
const Image = styled.img`
  width: 470px;
  height: 230px;
  border-radius: 8px;
`;

const Description = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  bottom: 0;
  padding: 1.5rem;
  border-radius: 8px;
  background-image: linear-gradient(hsla(0, 0%, 0%, 0%), hsla(0, 0%, 0%, 75%));
  width: 100%;
`;

const ThumbnailMarkDonw = styled(AppLink)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: transparent;
  background-color: hsla(223, 30%, 9%, 50%);
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

interface ICard {
  content: IContent;
}

const CardTrending = ({ content }: ICard) => {
  return (
    <Container>
      <Thumbnail>
        <Picture>
          <source srcSet={content.thumbnail.trending.large} />
          <source srcSet={content.thumbnail.trending.small} />
          <Image src={content.thumbnail.trending.large} />
        </Picture>
        <Description>
          <AppHeading small as="h2">
            {content.title}
          </AppHeading>
          <AppParagraph>
            {content.year} · {content.category} · {content.rating}
          </AppParagraph>
        </Description>
        <ThumbnailMarkDonw as="button">
          <BookmarkIcon />
        </ThumbnailMarkDonw>
      </Thumbnail>
    </Container>
  );
};

export default CardTrending;
