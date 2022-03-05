import styled from 'styled-components';
import {categories} from '../data';

const Container = styled.div`
    displey: flex;
    padding: 20px;
    justry-content: space-between;
`;


function Categories() {
  return (
    <Container>
        {categories.map(item => (
            <CategoriesItem item = {item} key={item.id}/>
        ))}

    </Container>
  )
}

export default Categories