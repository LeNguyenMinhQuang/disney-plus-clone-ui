import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("./images/login-background.jpg") center center / cover
      no-repeat fixed;
    z-index: -1;
    opacity: 0.8;
  }
`;
const CTA = styled.div`
  margin-top: 140px;
  max-width: 650px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LogoOne = styled.div``;
const SignUp = styled.a`
  margin: 8px 0 12px;
  color: #f9f9f9;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  transition: 0.3s;
  letter-spacing: 1.5px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const LogoTwo = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

function Login() {
  return (
    <Container>
      <CTA>
        <LogoOne>
          <img src="./images/cta-logo-one.svg" />
        </LogoOne>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LogoTwo>
          <img src="./images/cta-logo-two.png" />
        </LogoTwo>
      </CTA>
    </Container>
  );
}

export default Login;
