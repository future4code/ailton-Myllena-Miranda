import styled from "styled-components";
import space from "../../assets/space.jpg"

export const MainHome = styled.main`
width:100%;
height:90vh;
display:flex;
flex-direction:column;
align-items:center;
@media screen and (max-width: 480px) {
    min-height:90vh;
}
`

export const ContainerHome = styled.div`
width:100%;
height:100%;
max-height:100vh;
overflow:auto;
background-image:url(${space});
background-position:center;
background-repeat:none;
background-size:cover;

`

export const ContainerCardsHome = styled.div`
width:85vw;
height:30vh;
display:flex;
align-items:center;
justify-content:space-around;
margin-top:25px;
@media screen and (max-width: 480px) {
  width:100%;
  height:100%;
   display:flex;
   flex-direction:column;
  gap:30px;

  }
`
export const ContainerTextoViagem = styled.div`
width:83vw;
text-align:start;
margin-bottom:3px;
h3{
    color:#5E15EB;
    text-shadow: 1px 1px 1.5px white;

}
`
export const ContainerImagemPrincipal = styled.div`
width:311px;
height:343px;
margin-top:15px;
@media screen and (max-width: 480px){
    margin-top:20px;
    margin-bottom:10px;
  }
`
export const Nave = styled.img`
  width:290px;
 

`



