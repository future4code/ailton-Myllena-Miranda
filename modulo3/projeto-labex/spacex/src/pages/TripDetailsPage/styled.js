import styled from "styled-components";
import fundo from "../../assets/space.jpg"

export const ContainerTripDetails = styled.div`
width:100%;
height:100%;
min-height:100vh;
overflow:auto;
background-image: url(${fundo});
background-position:center;
background-repeat:none;
background-size:cover;
`
export const MaintripDetails = styled.main`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
height:90vh;
min-height:90vh;
`

export const TripBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:15px;
width:30vw;
height:60vh;
min-height:60vh;
border-radius:500px;
background-color:rgba(123, 65, 139, 0.45);
box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.88);
word-wrap:break-word;
  word-break:break-all;
h1{
    color:white;
    text-shadow:1px 1px 2px black;
}
p{
    font-size:20px;
}
@media screen and (max-width: 480px){
    width:90vw;
    min-height:50vh;
height:50vh;  
p{
    font-size:22px;
}
}
`
export const ContainerCandidates = styled.div`
display:flex;
align-items:center;
width:100%;
height:100%;
margin-top:25px;
margin-bottom:10px;
h2{
    font-size:30px;
    text-shadow:1px 1px 2px white;
    margin-bottom:10px;
}
@media screen and (max-width: 480px){
    flex-direction:column;
}
`
export const CandidatesPendent = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:50vw;
height:100%;

`

export const CandidatesApproved = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:50vw;
height:100%;
`

export const CardAproved = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 25vw;
  height: 25vh;
  min-height: 25vh;
  overflow:auto;
  background-color: rgba(92, 20, 235, 0.54);
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom:15px;
  box-shadow: 10px 10px 10px rgba(0, 0.3, 0, 0.6);
  word-wrap:break-word;
  word-break:break-all;
  p{
    margin-left:20px;
  }
  @media screen and (max-width: 480px) {
    width: 70vw;
    height: 30vh;
  }
`
export const CardPendent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 25vw;
  height: 25vh;
  min-height: 25vh;
  overflow:auto;
  background-color: rgba(216, 202, 182, 0.45);
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom:15px;
  box-shadow: 10px 10px 10px rgba(0, 0.3, 0, 0.6);
  word-wrap:break-word;
  word-break:break-all;
  p{
    margin-left:20px;
  }
  @media screen and (max-width: 480px) {
    width: 70vw;
    height: 30vh;
  }
`

