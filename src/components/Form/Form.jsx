import { React, useState } from "react";
import Label from "../Label/Label";
import Input from "../Input/Input";
import sha256 from 'js-sha256';

const Form = () => {
  function logar(e) {
    e.preventDefault();

    var senhaHash = sha256(nome+senha)
    //se nome mais senha gerar o hash correto entao redirecionar para pagina secreta
    console.log(`Logou com a senha ${nome+senha} -> ${senhaHash} `);
  }

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  console.log(nome);
  console.log(senha);

  

  return (
    <form className="form" onSubmit={logar}>
      <Label htmlFor='nome' text="de felipr para:" />
      <Input
        id="nome"
        name="nome"
        type="text"
        placeholder="seu nome (:"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Label hmlFor='senha' text="senha:" />
      <Input 
        id="senha"
        name="senha"
        type="password"
        placeholder="sua senha secreta"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Input type="submit" text="ENTRAR" />
    </form>
  );
};

export default Form;
