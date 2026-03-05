import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cadastro.css"

export default function Cadastro() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const navigate = useNavigate()

    async function verificarCadastro(e){
        e.preventDefault()
        if(!login || !senha){
            alert('Preencha os campos!')
            return;
        }

        try {
            const response = await fetch(`http://localhost:3020/usuarios?login=${login}`);

            if(!response.ok) throw new Error('Não foi possível conectar a API');

            const searchedUser = await response.json();
            
            if(searchedUser.length > 0){
                alert('ERRO: Usuário já existe.');
                return;
            }
            else {
                cadastrar(e);
                return;
            }
        } catch (error) {
            console.log('Erro: ', error.message);
        }

    }
    
    async function cadastrar(e){
        e.preventDefault();
        if(!login || !senha){
            alert('Preencha os campos!')
            return;
        }
        const novoUsuario = {
            "login": login,
            "senha": senha,
        }

        try {
            const response = await fetch('http://localhost:3020/usuarios/',{
                method: 'POST',
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(novoUsuario)
            })

            if(!response.ok){
                throw new Error(console.log('Erro. Não foi possível conectar a API.'))
            }else{
                alert("Cadastro realizado!"); 
                navigate("/");
            };
        } catch (error) {
            console.log("ERRO: ", error.message);
        }

    }
    return (
    <main>
        <div className="container">
            <h2>Novo Cadastro</h2>
            <form onSubmit={verificarCadastro} className="form-container">
                <input
                className="input-text"
                type="text"
                placeholder="Login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                />

                <input
                className="input-text"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                />

                <button className="cadastro-button" type="submit">Cadastrar</button>
            </form>

            <Link to={'/'}>Login</Link>
      </div>
    </main>
    )
  }