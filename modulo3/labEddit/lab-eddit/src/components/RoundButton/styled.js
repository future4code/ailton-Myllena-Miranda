import styled from "styled-components";

export const ContainerButton = styled.div`
cursor: pointer;
display:flex;
align-items:center;
justify-content:center;
width:365px;
height:51px;
border-radius:${(props) => props.radius};
border: solid 1px ${(props) => props.border};
background-image: linear-gradient(to  right, ${(props) => props.color});
`
export const ButtonName = styled.p`
font-family: "Noto Sans", sans-serif;
font-weight:700;
font-size:18px;
line-height:24.52px;
color:${(props) => props.text};
`