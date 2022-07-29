import React from "react";
import { Header } from "../../components/Header/Header";
import {
  ContainerRegist,
  Title,
  NovoContainerInput,
  SpanMaster,
  BlueSpan,
  ContainerCheckbox,
  TextoCheckbox,
  Checkbox,
} from "./styled";
import { Separator } from "../../styled";
import { PadraoInput } from "../LoginPage/styled";
import { RoundButton } from "../../components/RoundButton/RoundButton";
import { useForm } from "../../hooks/useForm";
import { Signup } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

export default function RegistPage() {
  const [form, onChange, Clear] = useForm({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const handleClick = (event) => {
    event.preventDefault();
    Signup(form);
    Clear();
  };
  return (
    <ContainerRegist>
      <Header title={"Entrar"} onClick={()=> goToLoginPage(navigate)}/>
      <Separator valor={"29px"} />
      <Title>{"Olá, boas vindas ao LabEddit ;)"}</Title>
      <Separator valor={"194px"} />
      <NovoContainerInput onSubmit={handleClick}>
        <PadraoInput
          placeholder="Nome de usuário"
          name='username'
          value={form.username}
          onChange={onChange}
        />
        <PadraoInput
          placeholder="E-mail"
          name='email'
          value={form.email}
          onChange={onChange}
        />
        <PadraoInput
          placeholder="Senha"
          name='password'
          value={form.password}
          onChange={onChange}
        />
        <Separator valor={"65px"} />
        <SpanMaster>
          Ao continuar você concorda com o nosso
          <BlueSpan> Contrato de usuário</BlueSpan> e nossa{" "}
          <BlueSpan>Política de Privacidade</BlueSpan>
        </SpanMaster>
        <Separator valor={"17px"} />
        <ContainerCheckbox>
          <Checkbox type="checkbox" />
          <TextoCheckbox>
            Eu concordo em receber emails sobre coisas legais no Labeddit
          </TextoCheckbox>
        </ContainerCheckbox>
        <Separator valor={"28px"} />
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
