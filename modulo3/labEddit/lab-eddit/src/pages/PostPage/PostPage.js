import React, { useContext } from "react";
import { Header } from "../../components/Header/Header";
import x from "../../assets/x.png";
import { ContainerPostPage, FineLinePost } from "./styled";
import { Separator } from "../../styled";
import { CardPost } from "../../components/CardPost/CardPost";
import { RoundButton } from "../../components/RoundButton/RoundButton";
import { InputDescription } from "../FeedPage/styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalContext } from "../../global/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { CreateComment } from "../../services/requests";
import { useRequest } from "../../hooks/useRequest";

export default function PostPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const { logout, Posts } = useContext(GlobalContext);
  const [form, onChange, Clear] = useForm({
    body: "",
  });
  const Comments = useRequest(`/posts/${params.id}/comments`);
  const params = useParams();
  const Item = Posts?.map((item) => {
    if (item.id === params.id) {
      return <CardPost typeCard={"post"} Post={item} />;
    }
  });
  const handleClick = (event) => {
    event.preventDefault();
    CreateComment(params.id, form);
    Clear();
  };

  return (
    <ContainerPostPage>
      <Header title={"Logout"} src={x} onClick={() => logout(navigate)} />
      <Separator valor={"28px"} />
      {Item}
      <Separator valor={"12px"} />
      <form onSubmit={handleClick}>
        <InputDescription
          name="body"
          value={form.body}
          placeholder="Adicionar comentário"
          onChange={onChange}
        />
        <RoundButton
          color={"#FF6489, #F9B24E"}
          title={"Continuar"}
          text={"#FFFFFF"}
          border={"none"}
          radius={"12px"}
        />
      </form>
      <Separator valor={"16px"} />
      <FineLinePost />
      <Separator valor={"36px"} />
      {Comments?.map((item) => {
        <CardPost Post={item} typeCard={"comments"} />;
      })}
    </ContainerPostPage>
  );
}
