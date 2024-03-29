import React, { useEffect } from "react";
import styled from "styled-components";
import db, { firebaseApp } from "../firebase";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewer from "./Viewer";

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow: hidden;

  &:before {
    background: url("./images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

function Home() {
  useEffect(() => {
    console.log(db);
    console.log(firebaseApp);
  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Movies />
    </Container>
  );
}

export default Home;
