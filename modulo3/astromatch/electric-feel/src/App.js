import React, {useState,useEffect} from "react";
import { Container, ContainerPage, ButtonLimpa } from "./styled";
import { Home } from "./pages/Home";
import { Matches } from "./pages/Matches";
import { Myllena } from "./pages/Myllena";
import { clear } from "./services/requests";
import limpa from "../src/assets/LimparMatches2.png"

function App() {
const [page, setPage] = useState("home") 

useEffect(()=>{
clear()
}, [])

  return (
    <>
    <Container>
      <ContainerPage>
      {page === "home" && <Home setPage={setPage}/>}
      {page ==="matches" && <Matches setPage={setPage}/>}
      {page === "myllena" && <Myllena setPage={setPage}/>}
     </ContainerPage>
    </Container>
     <ButtonLimpa src={limpa}onClick={clear}/>
     </>
  );
}

export default App;
