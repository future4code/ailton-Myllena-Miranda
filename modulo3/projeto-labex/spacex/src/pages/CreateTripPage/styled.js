import styled from "styled-components";
import fundo from "../../assets/spacePages.jpg"

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
margin-top:10px;
gap:10px;
`