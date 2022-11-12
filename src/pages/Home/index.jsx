import styled from "styled-components";
import Page from "../../components/Page";

const Video = styled.video`
  position: relative;
  width: max(300px, 38vw);
  height: max(300px, 38vw);
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 2px 2px 5px black;
  @media screen and (min-width: 600px) {
    width: min(800px, 38vw);
    height: unset;
  }
  &:hover {
    transition: ease-in 250ms;
    filter: invert(0.8) blur(5px);
  }
`;

const H2 = styled.h2`
  text-align: center;
  width: 100vw;
  margin: 1em;
  @media screen and (min-width: 600px) {
    font-size: 3.5vw;
  }
`;

const Home = props => {
  return (
    <Page style={{overflow: "hidden"}}>
      <Video playsInline autoPlay muted loop>
        <source src="airlock_bw copy_test.mp4" />
      </Video>
      <H2>Full Stack Software Developer</H2>
    </Page>
  );
}

export default Home;