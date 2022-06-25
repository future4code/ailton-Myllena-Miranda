import React from "react";
import {Container} from "./styled"
import {Header} from "../src/components/Header/Header"
import {Main} from "../src/components/Main/Main"
import {Footer} from "../src/components/Footer/Footer"


class App extends React.Component {
  render(){
    return(
      <Container>
      <Header/>
      <Main/>
      <Footer/>
      </Container>
    )
  }
}

export default App;
