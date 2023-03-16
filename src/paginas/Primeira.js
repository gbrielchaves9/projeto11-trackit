import React, { useState } from 'react';
import logo from "../assets/logo.png";
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Primeira() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    function enviaDados(e) {
        e.preventDefault()
        const dadosConta = { senha, email }
        console.log(dadosConta)
    }

    return (
        <PageContainer>
            <img src={logo} alt={"carregando"} />



            <ListContainer  >
                <form onSubmit={enviaDados}>
                    <input type="email" placeholder="E-mail"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="senha" placeholder="senha"
                        required
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button data-test="book-seat-btn" type="submit" >Entrar</button>
                </form>
            </ListContainer>
            <Link to={`/cadastro`} data-test="movie" >
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </PageContainer>


    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 65px;
    img{
        height: 178px;
        width: 180px;
    }
    p{
        font-family: Lexend Deca;
font-size: 14px;
font-weight: 400;
text-align: center;
    }
`
const ListContainer = styled.label`
background-color:black;
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
        background: #52B6FF;
    }
    input {
        width: calc(100vw - 60px);
        height: 45px;
left: 36px;
top: 279px;
border-radius: 5px;
    }
`