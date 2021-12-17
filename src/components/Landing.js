import React from "react";
import styled from 'styled-components';
import pizzabkg from '../assets/pizzabkg.jpg';

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
// const StyledButton = styled.button`
//  width: 10%;
//  height: 4vh;
//  align-items: center;
//  justify-content: center;
//  background-color: white;
//  border: 2px 2px black;
// `
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



export default function Home() {

return (
    <>
        <MidDiv className='mid'>
            <TextDiv>
            <StyledH2>Your favorite food, delivered while coding</StyledH2>
            </TextDiv>
        </MidDiv>

        <StyledDiv>
            <StyledH3>Food Delivery in Gotham City</StyledH3>
        </StyledDiv>

        <StyledDiv className='options-section'>
            <ImgDiv className='mcdonalds'>
            <StyledImg src="https://blog.logomyway.com/wp-content/uploads/2017/01/mcdonalds-logo-1.jpg" alt='mcdonalds logo'></StyledImg>
            <h4>McDonalds</h4>
            <p>$ - American - Fast Food - Burgers </p>
            <span><p>20-30min</p><p>$5.99 Delivery Fee</p></span>
            </ImgDiv>
            <ImgDiv className='sweetgreen'>
            <StyledImg src="https://lh3.googleusercontent.com/lYm6Mp1lt1YKMaYPEzYtB6OleaCOxg-0GY9TOOO1uMMsmBb4_Xgshmaf46iw411BJFU"alt='sweetgreen logo'></StyledImg>
            <h4>sweetgreen</h4>
            <p>$ - Healthy - Salads</p>
            <span><p>30-45min</p><p>$4.99 Delivery Fee</p></span>
            </ImgDiv>
            <ImgDiv className='starbucks'>
            <StyledImg src="https://cdn.mos.cms.futurecdn.net/8tEvBrHEeMTTBt26SiniHM.jpg" alt='starbucks logo'></StyledImg>
            <h4>Starbucks</h4>
            <p>$ - Cafe - Coffee and Tea - Breakfast and Brunch</p>
            <span><p>10-20min</p><p>$3.99 Delivery Fee</p></span>
            </ImgDiv>
            <ExtraImg>
            <ImgDiv>
                <StyledImg src="https://cdn.mos.cms.futurecdn.net/hgRu36yguybcDeZLsZybEA-1200-80.jpg" alt='tacobell logo'></StyledImg>
            </ImgDiv>
            <ImgDiv>
                <StyledImg src="https://1000logos.net/wp-content/uploads/2016/10/Burger-King-Logo-1999.jpg" alt='burger king logo'></StyledImg>
            </ImgDiv>
            <ImgDiv>
                <StyledImg src="https://searchlogovector.com/wp-content/uploads/2018/08/orange-julius-logo-vector.png" alt='orange julius logo'></StyledImg>
            </ImgDiv>
            </ExtraImg>
        </StyledDiv>
    </>
)};