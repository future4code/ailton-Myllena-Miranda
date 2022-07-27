import styled from "styled-components";
import { FineLine } from "../LoginPage/styled";

export const FineLineModificada = styled(FineLine)`
margin-top:12px;
margin-bottom:0px;
`

export const ContainerFeed= styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
export const ContainerForm =styled.form`
display:flex;
flex-direction:column;
align-items:center;
gap:8px;
`

export const InputTitle = styled.input`
width:364px;
height:40px;
background-color:#EDEDED;
border:none;
border-radius:6px;
::placeholder{
   padding-left:17px; 
   font-family: "IBM Plex Sans", sans-serif;
   color:#5B6167;
   font-size:16px;
   font-weight:400;
   line-height:21.79px;
}
`
export const InputDescription =styled.textarea`
margin-bottom:4px;
max-width:364px;
min-width:364px;
height:131px;
max-height:131px;
min-height:131px;
background-color:#EDEDED;
border:none;
border-radius:12px;
::placeholder{
   padding-left:17px; 
   font-family: "IBM Plex Sans", sans-serif;
   color:#5B6167;
   font-size:16px;
   font-weight:400;
   line-height:23px;
   padding-top:15px;
   
}
`