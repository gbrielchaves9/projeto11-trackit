import React from "react";
import styled from "styled-components";
import tr from "../assets/tr.png";




export default function Habitos() {

    return (
        <>
            <PageContainer>
                <div>

                    <SessionContainer data-test="movie-day">
                        <img src={tr} alt={"carregando"} />
                        <h1>'s Habits</h1>


                    </SessionContainer>
                    <ButtonsContainer>
                    </ButtonsContainer>
                </div>
                <FooterContainer data-test="footer">
                    <div>
                        <p>Hábitos</p>

                    </div>
                    <div>
                        <p>Histórico</p>
                    </div>
                </FooterContainer>

            </PageContainer>
        </>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    background: #E5E5E5;
   
   
`
const SessionContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    top :0;
    img {
        height: 49px;
width: 97px;
border-radius: nullpx;
margin-left: 18px;
    margin-right: 191px;
    margin-bottom: 10px;
        }
`
const ButtonsContainer = styled.div`
margin-top:120px;
    display: flex;
    flex-direction: row;
    background-color:red;
    button {
        height: 35px;
width: 40px;
border-radius: 5px;
color:black;
    }
    a {
        text-decoration: none;
    }
`
const FooterContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;
    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
      
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`