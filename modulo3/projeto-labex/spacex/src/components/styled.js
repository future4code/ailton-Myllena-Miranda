import styled from "styled-components";

export const ContainerHeader = styled.header`
width:100%;
height:10vh;
display:flex;
align-items:center;
justify-content:space-between;
p{
    margin-right:30px;
}
` 
export const Logo = styled.img`
width:53px;
margin:30px;
cursor: pointer;
:hover{
    transition:0.4s;
    width:60px;
}
`

export const BotaoVoltar = styled.button`
 margin-right:30px;
`
export const ContainerCardHome= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:190px;
width:160px;
border-radius:6px;
box-shadow: 10px 10px 10px rgba(0, 0.3, 0, 0.6);
cursor: pointer;
background-color:rgba(123, 65, 139, 0.45);
:hover{
    transition:0.8s;
    height:200px ;
    width:180px;
    img{
        transition: width 1s ease-in-out; 
        -webkit-transition:transform 18s;
        width:140px;
transform: rotate(360deg);
         }
}
`
export const PlanetaLua = styled.img`
width:105px;
`
export const ContainerImg = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:70%;
`
export const ContainerTextoDesc = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:25%;
p{
    margin-top:4px;
}
`