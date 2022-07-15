import styled from "styled-components";
import fundo from "../../assets/space.jpg"

export const ContainerApp = styled.div`
width:100%;
height:100%;
background-image: url(${fundo});
background-position:center;
background-repeat:none;
background-size:cover;
`

export const MainApp = styled.main`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:90vh;
`

export const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
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
    margin-top:35px;
    margin-bottom:95px;
    width:128px;
    height:28px;
    border-radius:8px;
    border:solid 1.5px #7677A3;
    background-color:#C6A49A;
    font-weight:bold;
    :hover{
        background-color: #5E15EB;
        box-shadow: 4px 3px 3px #312D45;
        width:135px;
        height:32px;
        
    }
}
`
export const ButtonVoltar = styled.button`
cursor: pointer;
margin-right:388px;
margin-top:490px;
width:120px;
height:28px;
position:fixed;
border-radius:8px;
    border:solid 1.5px #7677A3;
    background-color:#C6A49A;
    font-weight:bold;
    :hover{
        background-color: #5E15EB;
        box-shadow: 4px 3px 3px #312D45;
        width:133px;
        height:30px;
    }
    @media screen and (max-width: 480px){
        margin-left:105px;
        width:70px;
    }

`

export const ContainerBoxApp = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 40vw;
height:80vh;
background-color:rgba(123, 65, 139, 0.45);
border-radius:15px;
box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.88);
h1{
    font-size:36px;
    margin-top:50px;
    text-shadow:0.5px 0.5px 1.5px white;
   color:#160F1F;
   padding-bottom:18px;
   @media screen and (max-width: 480px){
    font-size:28px;
    text-shadow:none;
   }
}

@media screen and (max-width: 480px){
    width:90vw;
    height:75vh;
}
`