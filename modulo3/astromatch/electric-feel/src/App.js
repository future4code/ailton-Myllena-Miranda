import React, {useState,useEffect} from "react";
import { Container, ContainerPage } from "./styled";
import { Home } from "./pages/Home";
import { Matches } from "./pages/Matches";

function App() {
const [page, setPage] = useState("home") 

  return (
    <Container>
      <ContainerPage>
      {page === "home" && <Home setPage={setPage}/>}
      {page ==="matches" && <Matches setPage={setPage}/>}
     </ContainerPage>
    </Container>
  );
}

export default App;
