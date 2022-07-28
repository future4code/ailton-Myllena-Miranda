import React, { useContext } from "react";
import { Header } from "../../components/Header/Header";
import {
  ContainerFeed,
  ContainerForm,
  InputDescription,
  InputTitle,
  FineLineModificada,
} from "./styled";
import { Separator } from "../../styled";
import { RoundButton } from "../../components/RoundButton/RoundButton";
import { CardPost } from "../../components/CardPost/CardPost";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalContext } from "../../global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { CreatePost } from "../../services/requests";
import { goToPostPage } from "../../routes/coordinator";


export default function FeedPage() {
  useProtectedPage();
  const navigate = useNavigate();
  const { logout, Posts} = useContext(GlobalContext);
 
  const [form, onChange, Clear] = useForm({
    title: "",
    body: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    CreatePost(form);
    Clear();
  };

  return (
    <ContainerFeed>
      <Header title={"Logout"} onClick={() => logout(navigate)} />
      <Separator valor={"30px"} />
      <ContainerForm onSubmit={handleClick}>
        <InputTitle
          placeholder="Título"
          name="title"
          value={form.title}
          onChange={onChange}
        />
        <InputDescription
          placeholder="Escreva seu post..."
          name="body"
          value={form.body}
          onChange={onChange}
        />
        <RoundButton
          color={"#FF6489, #F9B24E"}
          title={"Postar"}
          text={"#FFFFFF"}
          border={"none"}
          radius={"12px"}
        />
      </ContainerForm>
      <FineLineModificada />
      <Separator valor={"36px"} />
      {Posts?.map((item)=>{
        return (
          <>
           <CardPost typeCard={"post"}  Post={item} onClick={()=>goToPostPage(navigate,item.id)}/>
           <Separator valor={"10px"}/>
          </>
        )
      })}
     
    </ContainerFeed>
  );
}
