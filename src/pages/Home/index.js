import React, {useState} from "react";
import Main from "../../components/Main";
import {useHistory} from "react-router-dom";


export default function Home(){
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const handleSubmit = (event) => {
        try {
          event.preventDefault();

          if(!email || !password){
          alert('Email e senha são obrigatórios')
          } 
          else {
          if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            document.querySelector('#emailError').className = "error-msg error";
            return;
          } 
          else {document.querySelector('#emailError').className = "error-msg"; }

          if (password.length < 6) {
            document.querySelector('#passwordError').className = "error-msg error";
            return;
          }
          else {document.querySelector('#passwordError').className = "error-msg"; }

          history.push("/map");
          }
        
        }
        catch (error) {
            alert('Desculpe pelo transtorno. Estamos trabalhando para resolver o problema!')
        }
      }


    return (
        <>
            
            <Main>

                <form onSubmit={handleSubmit} className="form-login">
                    <h1>Acessar o Sistema</h1>
                    
                        <label for="email"> Email:</label>
            
                                <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="exemplo@site.com">
                                </input>
       
                        <span id="emailError" className="error-msg">Email inválido!</span>       
                        
                        <label for="password"> Senha:</label>
                            
                                <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Digite sua senha">
                                </input>         
                        
                        <span id="passwordError" className="error-msg">Senha inválida!</span>

                        <button type="submit" className="btn-login" >Entrar</button>
               
                </form>
                
            </Main>
         
        </>
    )

}

