import styled from "styled-components";

export const ContainerHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:428px;
height:50px;
background-color:#EDEDED;
`
export const LogoDiv = styled.div`
width:14.01px;
height:14.31px;
background-color:${(props)=> props.color};
border-radius:${(props)=> props.border};
`
export const ContainerLogo = styled.div`
display:flex;
padding-left:199.9px;
` 
export const Title = styled.p`
cursor: pointer;
font-family: "Noto Sans", sans-serif;
font-weight:600;
font-size:18px;
line-height:24.52px;
color:#4088CB;
padding-right:29px;
`