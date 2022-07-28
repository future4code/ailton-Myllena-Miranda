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
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { CreateComment } from "../../services/requests";

export default function PostPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const { logout } = useContext(GlobalContext);
  const [form, onChange, Clear] = useForm({
    body: "",
  });

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   CreateComment(form);
  //   Clear();
  // };

  return (
    <ContainerPostPage>
      <Header title={"Logout"} src={x} onClick={() => logout(navigate)} />
      <Separator valor={"28px"} />
      <CardPost />
      <Separator valor={"12px"} />
      <form>
        <InputDescription placeholder="Adicionar comentário" />
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
      <CardPost />
    </ContainerPostPage>
  );
}
