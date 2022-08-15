import styled from "styled-components";
import { ContainerInput} from "../LoginPage/styled";

export const ContainerRegist = styled.div`
display:flex;
flex-direction:column;
`
export const Title = styled.p`
font-family: "IBM Plex Sans", sans-serif;
font-weight:700;
font-size:33px;
line-height:42.9px;
color:#373737;
padding-left:32px;
`

export const NovoContainerInput = styled(ContainerInput)`
margin-top:0;
` 
export const SpanMaster = styled.span`
font-family: "Noto Sans", sans-serif;
font-weight:400;
font-size:14px;
line-height:19px;
width:361px;
`
export const BlueSpan = styled.span`
color:#4088CB;
`
export const ContainerCheckbox = styled.div`
display:flex;
align-items:center;
gap:10.93px;
`
export const TextoCheckbox = styled.p`
width:337.22px;
height:38px;
font-family: "Noto Sans", sans-serif;
font-weight:400;
font-size:14px;
line-height:19.07px;
`
export const Checkbox = styled.input`
width:17.85px;
height:18px;
border: 1px solid #C4C4C4;
border-radius:2px;
text-decoration:none;
`