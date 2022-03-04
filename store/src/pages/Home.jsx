import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";


const Container = styled.div`
    padding: 0 ;
    margin: -8px;
`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
    </Container>
  );
};

export default Home;
