import styled from "styled-components";

export const ContainerHome = styled.div`
width:100%;
height:100%;
`

export const ContainerMyllena = styled.div`
width:100%;
height:100%;
`

export const HeaderMyllena = styled.header`
display:flex;
align-items:center;
justify-content:flex-start;
width:100%;
height:14%;

`

export const HeaderHome = styled.header`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
width:100%;
height:14%;

`

export const MainHome = styled.main`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:72%;

`

export const MainMyllena = styled.main`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:72%;

`

export const ImgLista = styled.img`
width:50px;
height:50px;
border-radius:30px;
margin-left:8px;

`

export const HeaderMatches = styled.header`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
width:100%;
height:14vh;
`
export const MainMatchs = styled.main`
width:100%;
height: 86vh;
overflow:auto;
margin-top:6px;
background-color:white;
`
export const ItemMatch = styled.div`
display:flex;
flex-direction:row;
align-items:center;
height:50px;
border-bottom: solid 1px pink;
gap: 10px;
margin-top:25px;
p{
   color: #23AFE1;
   text-shadow: 0.8px 0.8px 0.8px pink;
}
`


export const ContainerMatches = styled.div`
width:100%;
height:100%;
`

export const Logo = styled.img`
width:155px;
margin-left:15px;
cursor:pointer;
`
export const Eu = styled.img`
width:67px;
height:67px;
border-radius:50%;
margin-right:15px;
cursor:pointer;
`

export const FooterHome = styled.footer`
width:100%;
height:14%;
display:flex;
align-items:center;
justify-content:flex-end;
`
export const FooterMyllena = styled.footer`
width:100%;
height:14%;
display:flex;
align-items:center;
justify-content:flex-end;
`

export const Lista = styled.img`
height:100%;
margin-right:15px;
cursor: pointer;
`
export const ContainerCardMyllena = styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
width:95%;
height:95%;
color:white;
text-shadow: 1px 1px 2px black;
font-size:20px;
background-image: url(${(props)=> props.photo});
background-position: center;
background-size:cover;
border-radius:2%;
strong{
    font-size:25px;   
}
`