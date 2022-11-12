import styled from "styled-components";
import DevIcon from "devicon-react-svg";
import Page from "../../components/Page";
import {Link} from "react-router-dom";

const Container = styled.div`
  margin: 2em;
`;

const LinkIcon = styled(DevIcon)`
	fill: rgba(255, 255, 255, 0.87);
	width: 5em;
	height: auto;
	text-align: center;
	align-content: center;
  &:hover{
		transition: 0.6s;
		fill: #f99c33;
	}
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 1em;
  text-align: center;
  margin-bottom: 1em;
`;

const UnorderedList = styled.ul`
  text-align: center;
  padding: 0;
  margin-bottom: 4em;
`;

const Span = styled.span`
  font-size: 2em;
  &:hover{
		transition: 0.6s;
		color: #f99c33;
	}
`;

const Contact = props => {
  return (
    <Page>
      <Container>
        <UnorderedList className="contact-links">
					<ListItem>
						<a href="mailto:dennis.m.hodges@gmail.com" target="_blank" aria-label="Contact me by email">
							<LinkIcon icon="email" viewBox="-7 0 45 25"/>
						</a>
					</ListItem>
          <ListItem>
						<a href="https://drive.google.com/file/d/1QTj_XqF4mwawpbAW6UYj4cNZwxqp5Xw1/view?usp=sharing" target="_blank" ><Span>résumé</Span></a>
					</ListItem>
					<ListItem>
						<a href="https://github.com/fermentationist" target="_blank" aria-label="Check out my work on Github">
							<LinkIcon icon="github" viewBox="4 4 24 24" />
						</a>
					</ListItem>
					<ListItem>
						<a href="https://linkedin.com/in/dennis-hodges/" target="_blank" aria-label="Connect with me through Linkedin">
							<LinkIcon icon="linkedin" tooltip="LinkedIn" viewBox="0 0 24 24"/>
						</a>
					</ListItem>
				</UnorderedList>
      </Container>
    </Page>
  )
}

export default Contact;