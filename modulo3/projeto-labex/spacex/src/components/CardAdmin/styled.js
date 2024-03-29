import styled from "styled-components";

export const ContainerCardAdmin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 25vw;
  height: 20vh;
  background-color: rgba(92, 20, 235, 0.54);
  border-radius: 10px;
  margin-top: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0.3, 0, 0.6);
  @media screen and (max-width: 480px) {
    width: 42vw;
    height: 20vh;
  }
`

export const ContainerButtonsCard = styled.div`
display:flex;
justify-content:space-around;
width:100%;
button{
  cursor: pointer;
  width:80px;
  height:25px;
  border-radius:20px;
  border:none;
  background-color:#C6A49A;
  color:white;
  :hover{
    background-color:#5E15EB;
  }
}
`

