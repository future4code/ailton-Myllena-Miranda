import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import atual from './img/atual.jpeg';
import kin from './img/kin-birthday.jpg'
import gostoso from './img/joohan.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

       <Post
          nomeUsuario={'myllenam'}
          fotoUsuario={atual}
          fotoPost={kin}
        />

          <Post
          nomeUsuario={'joohoneywalker'}
          fotoUsuario={gostoso}
          fotoPost={gostoso}
        />
      </MainContainer>
    );
  }
}

export default App;
