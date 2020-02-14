import styled from "styled-components";



export const Container = styled.div`
  display: flex;
`

export const ContainerForm = styled.div`
    background-color: #000;
    width: 400px;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: sticky;
    top: 0;
    img{
        margin-top: 20%;
    }
`

export const Form = styled.form`
    margin: 20px;
    display: flex;
    align-items: center;

    input{
        width: 300px;
        height: 30px;
        padding: 10px;
        border: 0;
        font-size: 15px;
        background-color: #fff;
        color: #444;
        border-radius: 3px;
        font-weight: 600;
        outline: 0;
    }

    button{
        margin: 10px;
        width: 50px;
        height: 30px;
        color: #fff;
        background-color: transparent;
        border: 1px solid #fff;
        font-size: 20px;
        border-radius: 3px;
        outline: 0;
        &:hover{
            background: rgb(255, 255, 255, 0.3)
        }
        &:active{
            transform: scale(0.95);
        }
    }
`