import { react, useState} from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top: 12px;
  overfloew: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  butom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: 0px auto;
  opacity: 0.5;
  z-index: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0wv);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  margin-top: 12px;
  background-color: ${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="fcf1ed">
          <ImageContainer>
            <Image src="https://picsum.photos/200/300" />
          </ImageContainer>
          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Desc>Don't Compromise on Styles</Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fbf0f4">
          <ImageContainer>
            <Image src="https://picsum.photos/200/300" />
          </ImageContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>Don't Compromise on Styles</Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>

        <Slide bg="fcf1ed">
          <ImageContainer>
            <Image src="https://picsum.photos/200/300" />
          </ImageContainer>
          <InfoContainer>
            <Title>BLACK FRIDAY SALE</Title>
            <Desc>Don't Compromise on Styles</Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
