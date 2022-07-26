import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
`;
export const LogoOrange = styled.div`
  width: 42px;
  height: 42px;
  background-color: #fe7e02;
  border-radius: 100% 0 0 0;
`;
export const LogoLightOrange = styled.div`
  width: 42px;
  height: 42px;
  background-color: #f9b24e;
  border-radius: 0 0 100% 0;
`;
export const LogoGrey = styled(LogoOrange)`
  background-color: #45525b;
`;
export const LogoLightGrey = styled(LogoLightOrange)`
  background-color: #a8bbc6;
`;


export const Title = styled.p`
margin-top:12px;
font-family: "IBM Plex Sans", sans-serif;
font-weight:700;
font-size:36px;
line-height:46.8px;
color:#373737;
text-align:center;

`
export const Subtitle = styled.p`
font-family: "IBM Plex Sans", sans-serif;
font-weight:300;
font-size:16px;
line-height:21px;
color:black;
text-align:center;
`
export const ContainerInput = styled.form`
display:flex;
gap:8px;
flex-direction:column;
align-items:center;
margin-top:107px;
`
export const PadraoInput = styled.input`
width:363px;
height:60px;
border: solid 1px #D5D8DE;
background-color:#FFFFFF;
::placeholder{
   padding-left:17px; 
   font-family: "Noto Sans", sans-serif;
   color:#5B6167;
   font-size:16px;
   font-weight:400;
   line-height:21.79px;
}
`

export const FineLine = styled.div`
margin-top:18px;
margin-bottom:18px;
width: 363.01px;
align-self:center;
height:1px;
background-image: linear-gradient(to  right, #FF6489, #F9B24E);
`

export const DivButtonCrie = styled.div`
display:flex;
justify-content:center;
`