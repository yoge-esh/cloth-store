import { Badge } from "@material-ui/core";
import { Search, ZoomInTwoTone } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border-radius: 5px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-left: 10px;
  height: 30px;
  width: 200px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: 0.9rem;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  text-align: center;
`;

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  `;
  
  const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
  `;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{color:"gray", fontSize:16, cursor:'pointer'}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Khanal.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ZoomInTwoTone />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;