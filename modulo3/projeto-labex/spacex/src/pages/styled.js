import styled from "styled-components";

export const Loading =styled.img`
width:150px;
 animation: rotateLoad 2s infinite linear;
  @keyframes rotateLoad {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
` 