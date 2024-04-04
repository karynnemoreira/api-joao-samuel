import styled from "styled-components"

export const Navegacao = styled.nav`
display: flex;
justify-content: space-around;
align-items: center;
height: 25vh;
background-color: #ffd452;

@media (min-width: 320px) and (max-width: 768px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 40vh;

    img{
        height: 15vh;
    }

    ul{
        height: 20vh;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
}

img{
    height: 10vh;
}

ul{
    width: 60vw;
    display: flex;
    justify-content: space-evenly;
}

li{
    list-style: none;
    font-size: 1.7rem;
    font-weight: 600;
}
`



export const Container = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 80vh;


@media (min-width: 320px) and (max-width: 768px){
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`

export const Cadastro = styled.div`
background-color: #ffd452;
border: solid #ff2e5f;
border-radius: 10%;
width: 25vw;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
/* background-image: url("https://yata-apix-cbb6b702-ef1a-4258-908c-6cfa93768a5c.s3-object.locaweb.com.br/13ccb0ed6a4c4b8b8d6e06bab0378823.png");
background-repeat: no-repeat;
background-position: center;
background-size: 20%; */

h2{
    font-size: 2.2rem;
}

h3{
    font-size: 1.6rem;
    color: #140d1a;
}

@media (min-width: 320px) and (max-width: 768px){
width: 80%;
height: 70vh;
margin: 1rem;
}


`