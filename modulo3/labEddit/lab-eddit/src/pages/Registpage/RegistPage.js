import React from "react";
import { Header } from "../../components/Header/Header";
import { ContainerRegist, Title, NovoContainerInput, SpanMaster, BlueSpan, ContainerCheckbox, TextoCheckbox, Checkbox } from "./styled";
import { Separator } from "../../styled";
import { PadraoInput } from "../LoginPage/styled";
import { RoundButton } from "../../components/RoundButton/RoundButton";

export default function RegistPage() {
  return (
    <ContainerRegist>
      <Header title={"Entrar"} />
      <Separator valor={"29px"} />
      <Title>Olá, boas vindas ao LabEddit ;)</Title>
      <Separator valor={"194px"} />
      <NovoContainerInput>
        <PadraoInput placeholder="Nome de usuário" />
        <PadraoInput placeholder="E-mail" />
        <PadraoInput placeholder="Senha" />
        <Separator valor={"65px"}/>
        <SpanMaster>
          Ao continuar você concorda com o nosso<BlueSpan> Contrato de usuário</BlueSpan> e
          nossa <BlueSpan>Política de Privacidade</BlueSpan>
        </SpanMaster>
         <Separator valor={"17px"}/>
        <ContainerCheckbox>
          <Checkbox type="checkbox" />
          <TextoCheckbox>Eu concordo em receber emails sobre coisas legais no Labeddit</TextoCheckbox>
        </ContainerCheckbox>
         <Separator valor={"28px"}/>
        <RoundButton
          color={"#FF6489, #F9B24E"}
          title={"Cadastrar"}
          text={"#FFFFFF"}
          border={"none"}
          radius={"27px"}
        />
      </NovoContainerInput>
    </ContainerRegist>
  );
}
