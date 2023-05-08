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
  flex-direction: column;
  gap: 0.5rem;
`;

const Picture = styled.picture`
  display: block;
  width: 280px;
  height: 174px;
`;
const Image = styled.img`
  width: 280px;
  height: 174px;
  border-radius: 8px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column-reverse;
  border-radius: 8px;
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

const Card = ({ content }: ICard) => {
  return (
    <Container>
      <Thumbnail>
        <Picture>
          <source srcSet={content.thumbnail.regular.large} />
          <source srcSet={content.thumbnail.regular.medium} />
          <source srcSet={content.thumbnail.regular.small} />
          <Image src={content.thumbnail.regular.large} />
        </Picture>
        <Description>
          <AppHeading xsmall as="h3">
            {content.title}
          </AppHeading>
          <AppParagraph small>
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

export default Card;
