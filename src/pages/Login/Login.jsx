import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import { useState } from "react";



export default function Login() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const[erro,setErro] = useState('')
  const navigate = useNavigate()
 
  async function validarLogin(e){

    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3020/usuarios?login=${login}`)

      if(!response.ok) throw new Error(alert("Erro ao conectar a API"));

      const usuario = await response.json();
      console.log(usuario[0].login)
      if(usuario[0].login === login && usuario[0].senha === senha){
        navigate('/home');
        return usuario[0].login
      } else{
        alert('Login e/ou senha inválidos.')
        return null
      } 
    } catch (error) {
      console.log('Erro: ', error.message)
    }
  
  }


 
    return (
        <>
        <main>
            <h1>Login</h1>
            <form onSubmit={validarLogin}>
              <label>Login <br />
                <input
                  type="text" 
                  placeholder="Digite seu login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  />
              </label>
              <label>Senha: <br />
                <input
                  type="password" 
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  />
              </label>

              <button type="submit">Entrar</button>
            </form>
            <Link to={"/Cadastro"}> Cadastro!</Link>
        </main>
        
          
          
        </>
 
    )
  }