import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../Label/Label";
import Input from "../Input/Input";
import sha256 from "js-sha256";
import Button from "../Button/Button";

const Form = () => {

  const navigate = useNavigate();

  function logar(e) {
    e.preventDefault();
    console.log(`iniciou evento de submit`);

    var senhaHash = sha256(nome + senha);

    console.log(senhaHash);
    //se nome mais senha gerar o hash correto entao redirecionar para pagina secreta

    if (
      senhaHash ===
      "823cc632de117e2c83ebb268e75f93b0ce1fb159cfda8ea78649cf9a43b6e187"
    ) {
      console.log(`usuario loggado`);

      localStorage.setItem("user", true);
      

      navigate("/protectedPage");
      console.log(`autenticou`);
    }
    else {
      console.log(`senha e/ou usuario incorretos`);
    }
  }

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");


  return (
    <form className="form" onSubmit={logar}>
      <Label htmlFor="nome" text="de felipr para:" />
      <Input
        id="nome"
        name="nome"
        type="text"
        placeholder="seu nome (:"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      
      <Label hmlFor="senha" text="senha:" />
      <Input
        id="senha"
        name="senha"
        type="password"
        placeholder="sua senha secreta"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Button type="submit" text="ENTRAR" />
    </form>
  );
};

export default Form;
