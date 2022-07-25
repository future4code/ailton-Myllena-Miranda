import styled from "styled-components";
import back from "../../assets/space.jpg"

export const ContainerList = styled.div`
width:100%;
height:100%;
max-height:100vh;
overflow:auto;
background-image: url(${back});
background-position:center;
background-repeat:none;
background-size:cover;
`
export const MainList = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:90vh;
min-height:90vh;
`

export const Title = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
margin-top:50px;
margin-bottom:20px;

h1{
  text-shadow:1px 1px 2px black;
  font-size:40px;
  color:white;
}
`

export const ContainerCardsList = styled.div`
width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 25px 10px;
`
export const ContainerButtonList = styled.div`
display:flex;
justify-content:space-around;
width:38vw;
margin-top:13px;
button{
  cursor: pointer;
  width:100px;
  height:35px;
  border-radius:20px;
  border:none;
  font-weight:bold;
  background-color:#5E15EB;
  color:white;
  text-shadow:1px 1px 2px black;
  box-shadow: 10px 10px 10px rgba(0, 0.3, 0, 0.6);
  :hover{
    background-color:#957BA7;
    width:105px;
    height:38px;
  }
  
}
`