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

export default function LoginPage() {
  const navigate = useNavigate();

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
      <ContainerInput>
        <PadraoInput placeholder="Nome" />
        <PadraoInput
          type="password"
          placeholder="Senha"
          pattern="[0-9a-zA-Z]{8,30}"
          title={
            "A senha deve ter no mínimo 9 caracteres incluindo números e letras"
          }
        />
        <Separator valor={"56px"} />
        <RoundButton
          onClick={() => goToFeedPage(navigate)}
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
          onClick={() => goToRegistPage(navigate)}
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
