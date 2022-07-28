import axios from "axios";
import {BASE_URL} from "../constants/BASE_URL";
import { token } from "../constants/token";



export const Signup = (form) => {
  axios
    .post(`${BASE_URL}/users/signup`, form)
    .then((res) => {
      alert("Usuário criado com sucesso!:)");

    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const Login = (form, goTo, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goTo(navigate)
      
    })
    .catch((err) => {
      alert("Conta não reconhecida");
    });
};

export const CreatePost = (form) => {
  axios
    .post(`${BASE_URL}/posts`, form, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      alert("Post publicado! :)");
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const CreateComment = (id, form) => {
  axios
    .post(`${BASE_URL}/posts/${id}/comments`, form, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      alert("Comentário publicado! :)");
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

//Voto em conteúdos//

export const CreatePostVote = (id, valor) => {
  const body = {
    direction: valor,
  };
  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const CreateCommentVote = (id, valor) => {
  const body = {
    direction: valor,
  };
  axios
    .post(`${BASE_URL}/comments/${id}/votes`, body, {
      headers: {
        authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
