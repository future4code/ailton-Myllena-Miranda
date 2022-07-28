import React from "react";
import { RoundButton } from "../../components/RoundButton/RoundButton";
import {
  ContainerLogin,
  ContainerLogo,
  LogoOrange,
  LogoLightOrange,
  LogoGrey,
  LogoLightGrey,
  Title,
  Subtitle,
  ContainerInput,
  PadraoInput,
  FineLine,
  DivButtonCrie,
} from "./styled";
import { Separator } from "../../styled";
import { useNavigate } from "react-router-dom";
import { goToRegistPage, goToFeedPage } from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";
import { Login } from "../../services/requests";
import { token } from "../../constants/token";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, onChange, Clear] = useForm({
    email: "",
    password: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
    Login(form, goToFeedPage, navigate);
    Clear();
  };

  return (
    <ContainerLogin>
      <ContainerLogo>
        <div>
          <LogoOrange />
          <LogoLightOrange />
        </div>
        <div>
          <LogoGrey />
          <LogoLightGrey />
        </div>
      </ContainerLogo>
      <Title>LabEddit</Title>
      <Subtitle>O projeto de rede social da Labenu</Subtitle>
      <ContainerInput onSubmit={handleClick}>
        <PadraoInput
          name="email"
          value={form.email}
          placeholder="E-mail"
          onChange={onChange}
        />
        <PadraoInput
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Senha"
          pattern="[0-9a-zA-Z]{8,30}"
          title={
            "A senha deve ter no mínimo 9 caracteres incluindo números e letras"
          }
        />
        <Separator valor={"56px"} />
        <RoundButton
          color={"#FF6489, #F9B24E"}
          title={"Continuar"}
          text={"#FFFFFF"}
          border={"none"}
          radius={"27px"}
        />
      </ContainerInput>
      <FineLine />
      <DivButtonCrie>
        <RoundButton
           onClick={()=>goToRegistPage(navigate)}
          color={"#FFFFFF,#FFFFFF"}
          title={"Crie uma conta!"}
          text={"#FE7E02"}
          border={"#FE7E02"}
          radius={"27px"}
        />
      </DivButtonCrie>
    </ContainerLogin>
  );
}
