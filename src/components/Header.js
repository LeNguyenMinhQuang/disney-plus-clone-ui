import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 5vw;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none !important;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <NavLink to={"/"}>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </NavLink>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <a className="loginbutton">
        <UserImg src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-1/273274778_1061316107760309_3545370022311045621_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=chMt_IC5SToAX9fcSG3&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-WqS31gK2NCy156rstrDMw40ObnKUniCCYu9Rl0ohH7Q&oe=6211400F" />
      </a>
    </Nav>
  );
}

export default Header;
