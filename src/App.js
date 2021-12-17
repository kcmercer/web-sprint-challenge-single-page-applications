import React from "react";
import styled from 'styled-components';
import pizzabkg from './assets/pizzabkg.jpg';
import { Switch, Route, Link } from 'react-router-dom';
import PizzaTime from './components/PizzaForm';
import Home from './components/Landing';

const StyledNav = styled.nav`
 display: flex;
 width: 100%;
`
const StyledH1 = styled.h1`
  padding-left: 2%;
`
const StyledA = styled.a`
  border: 1px solid black;
  padding: 1% 3% 1% 3%;
  text-decoration: none;
  background-color: white;
`
const NavDiv = styled.div`
  display: flex;
  width: 80%;
  margin-right: 2%;
  align-items: center;
  justify-content: flex-end;
`
const MidDiv = styled.div`
  background-image: url(${pizzabkg});
  background-size: cover;
  height: 59vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
const TextDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  align-items: center;
  justify-content: center;
`
const StyledH2 = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  text-shadow: 3px 1px black;
  margin-left: 6%;
`
const StyledButton = styled.button`
  width: 10%;
  height: 4vh;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 2px 2px black;
`
const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const ImgDiv = styled.div`
  width: 20%;
  padding-bottom: 5%;
`
const StyledH3 = styled.h3`
  padding-top: 5%;
`
const ExtraImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid black;
  padding-top: 5%;
  width: 100%;
`
const StyledImg = styled.img`
  width: 225px;
  height: 112px;
`





const App = () => {
  return (
    <>
      <header>
        <StyledNav>
        <StyledH1>BLOOMTECH EATS</StyledH1>
          <NavDiv>
            <StyledA href="/">Home</StyledA>
            <StyledA href="/help">Help</StyledA>
          </NavDiv>
        </StyledNav>
      </header>

      <Route path='/pizzatime' component={PizzaTime}></Route>
      <Route path='/' component={Home}></Route>
    </>
  );
};
export default App;
