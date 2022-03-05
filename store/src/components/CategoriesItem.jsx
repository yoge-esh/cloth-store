import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  height: 70vh;
  display: flex;
  flex: 1;
  margin: 3px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;  
  `;
const Info = styled.div`
    position: absolute;
    top: 0; 
    left: 0; 
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  color: gray;
  font-weight: 600;
`;

const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt="" />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
