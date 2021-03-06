import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  text-align: center;
  font: Monosans;
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.sbcgreen};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className='bar'>
      <Logo>
        <Link href='/'>
          <a>SBC Events</a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
