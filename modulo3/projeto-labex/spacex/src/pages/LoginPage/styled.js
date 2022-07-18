import styled from "styled-components";
import back from "../../assets/space.jpg"


export const ContainerLogin = styled.div`
width:100%;
height:100%;
background-image: url(${back});
background-position:center;
background-repeat:none;
background-size:cover;
`

export const MainLogin = styled.main`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:90vh;
`
export const ContainerInputCaixinha = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
background-color:rgba(92, 20, 235, 0.54);
border-radius:15px;
box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.88);
width:30vw;
height:50vh;
gap:13px;
@media screen and (max-width: 480px) {
    width:87vw;
height:45vh;  
}
h1{
    font-size:42px;
    margin-top:50px;
    text-shadow:1px 1px 2px black;
   color:#C6A49A;
   padding-bottom:18px;
}
input{
    width:250px;
    height:28px;
    border-radius:10px;
    border:none;
    background-color:rgba(255, 255, 255, 0.3);
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.88);
    text-align:center;
    font-weight:bold;
}
button{
    margin-top:13px;
    cursor: pointer;
    width:120px;
    height:28px;
    border-radius:8px;
    border:solid 1.5px #7677A3;
    background-color:#C6A49A;
    font-weight:bold;
    :hover{
        background-color: #ADB2D0;
        box-shadow: 4px 3px 3px #312D45;
    }
    @media screen and (max-width: 480px) {
        box-shadow: 4px 3px 3px #312D45;
    }
}
`