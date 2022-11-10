import Container  from "../elements/Container.jsx";
import styled from "styled-components";
import profilePic from "../assets/images/diego-pic.png";
import ArticlesLink from "../blocks/ArticlesLink.jsx";
import { Title } from "../elements/Titles.jsx";
import { StyledText } from "../elements/StyledText.jsx";
import { CircleImage } from "../elements/CircleImage.jsx";
import { PrimaryButton, SecondaryButton } from "../elements/Buttons.jsx";
import { Row } from "../elements/Row.jsx";
const RowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  div {
    flex: 1;
  }
  img {
    max-width: 350px;
    border-radius: 50%;
    margin:auto 0
  }
`;
const Header = ({className}) => {
  return (
    <header className={className}>
      <Container>
        <RowsContainer>
          <div>
            <Title>
              Bienvid@, soy <StyledText> Diego Dorado </StyledText>FrontEnd
              Developer
            </Title>
            <Row>
              <PrimaryButton>mis proyectos</PrimaryButton>
              <SecondaryButton>mi curriculum</SecondaryButton>
            </Row>
            <ArticlesLink></ArticlesLink>
          </div>
          <CircleImage width="200" src={profilePic} alt="foto-diego" />
        </RowsContainer>
      </Container>
    </header>
  );
};
export default styled(Header)`
background-color:white;
color:black;
padding:5px;
`
