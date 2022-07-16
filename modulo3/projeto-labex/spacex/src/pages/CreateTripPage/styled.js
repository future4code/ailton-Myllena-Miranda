import styled from "styled-components";
import fundo from "../../assets/space.jpg"

export const ContainerPageCreateTrip = styled.div`
height:100%;
width:100%;
background-image: url(${fundo});
background-position:center;
background-size:cover;
background-repeat:none;
`
export const ContainerMainCreateTrip = styled.main`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:90vh;
`
export const FormCreateTrip = styled.form`
display:flex;
flex-direction:column;
align-items:center;
margin-top:35px;
gap:10px;
input{
    width:300px;
    height:28px;
    margin-top:10px;
    border-radius:7px;
    border: none;
    text-align:center;
}
select{
    width:300px;
    height:28px;
    margin-top:10px;
    border-radius:7px;
    border: none;
    text-align:center;
}
textarea{
    margin-top:10px;
    width:300px;
    max-width:300px;
    min-width:300px;
    height:28px;
    min-height:28px;
    max-height:90px;
    text-align:center;
    border-radius:7px;
}
button{
    cursor: pointer;
    margin-top:20px;
    width:135px;
    height:32px;
    border-radius:8px;
    border:solid 1.5px #7677A3;
    background-color: #5E15EB;
    font-weight:bold;
    color:white;
    :hover{
        background-color:#C6A49A;
        box-shadow: 4px 3px 3px #312D45;
        width:138px;
        height:35px;
        
    }
   
}
`

export const CreateTripBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:40vw;
height:80vh;
border-radius:10px;
background-color: rgba(0, 0, 0, 0.6);
h1{
    font-size:45px;
    margin-top:50px;
    color:rgb(94, 21, 235);
    text-shadow:0.3px 0.3px 2px white;
}
@media screen and (max-width: 480px){
    width:90vw;
    height:60vh;
    margin-top:60px;
}
`