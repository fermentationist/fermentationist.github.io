import styled from "styled-components";
import {Link} from "react-router-dom";
import Nav from "../../components/Nav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  min-width: fit-content;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  text-align: center;
  background: linear-gradient(#242424, #121212);
  margin: 0;
`;

const H1 = styled.h1`
  margin-top: 2em;
  text-align: center;
  width: 100vw;
  font-size: 10vw;
  font-weight: 1500;
  white-space: nowrap;
  text-shadow: 3px 3px 5px black;
  @media screen and (min-width: 600px) {
    font-size: 8vw;
  }
`;

const Page = props => {
  return (
    <Container className={props.className ? props.className : ""} style={props.style ? props.style : {}}>
      <H1><Link to="/">Dennis Hodges</Link></H1>
        <div id="console-game-content">
          {props.children}
        </div>
      <Nav />
      <br/>
    </Container>
  )
}

export default Page;