import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";


const H3 = styled.h3`
  height: 48px;
  text-align: center;
  margin: 0.5em;
  display: inline;
  font-weight: 250;
  @media screen and (min-width: 600px) {
    font-size: 2vw;
  }
`;

const StyledLink = styled(Link)`
  min-height: 48px;
`;

const Nav = props => {
  const location = useLocation();
  const pathname = location.pathname;
  const links = [
    {
      name: "Home",
      path: ["/", "/home"]
    },
    {
      name: "About",
      path: ["/about"]
    },
    {
      name: "Projects",
      path: ["/projects"]
    },
    {
      name: "Contact",
      path: ["/contact"]
    }
  ]
  return (
    <nav>
      {
        links.map((link, index) => {
          if (link.path.includes(pathname)) {
            return null;
          }
          return (
            <span key={`nav-link-${index}`}>
              <H3><StyledLink to={link.path[0]}>{link.name}</StyledLink></H3>
              {
                index !== links.length - 1 ? (
                  <H3>|</H3>
                ) : null
              }
            </span>
          )
        })
      }
    </nav>
  )
}

export default Nav;