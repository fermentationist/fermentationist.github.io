import styled from "styled-components";
import Page from "../../components/Page";

const P = styled.p`
  max-width: 600px;
  margin: 3em;
  line-height: 2.25;
  @media screen and (min-width: 600px) {
    font-size: 1.5em;
  }
`;

const About = props => {
  return (
    <Page>
      <P>
      "I am a full stack software engineer with an inquisitive mind and a commitment to craftsmanship. I have more than three years of experience as a JavaScript developer, but I am always open to learning something new. As an artist, I have an aptitude for acquiring and applying new skillsets extemporaneously, and a knack for viewing problems from unexpected angles. I love to MAKE things, with code, or otherwise."
      </P>
    </Page>
  );
}

export default About;