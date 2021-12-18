import React from "react";
import styled from 'styled-components';
import { Switch, Route, Link } from 'react-router-dom';
import PizzaTime from './components/PizzaForm';
import Home from './components/Landing';

// Styling
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
// Entire App rendering
const App = () => {
  return (
    <>
      <header>
        <StyledNav>
        <StyledH1>BLOOMTECH EATS</StyledH1>
          <NavDiv>
            <StyledA href="/">Home</StyledA>
            <StyledA href="/help">Help</StyledA>
            <Link id='order-pizza' to="/pizza">Pizza?</Link>
          </NavDiv>
        </StyledNav>
      </header>
      <Switch>
        <Route path='/pizza' component={PizzaTime}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </>
  );
};
export default App;
