import styled from "styled-components";
import { popularProducts } from "../data";

const Container = styled.div``;

function Products() {
  return (
    <Container>
      {popularProducts.map((product) => (
          <Product item={item} key={item.id}/>
      ))}
    </Container>
  );
}

export default Products;
