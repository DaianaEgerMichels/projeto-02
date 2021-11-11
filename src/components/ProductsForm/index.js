import React, {useState, useEffect} from "react";
import './ProductsForm.css'
import {Link} from "react-router-dom";


const  ProductsForm= ()=>{

    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [unitCost, setUnitCost] = useState("");
    const [description, setDescription] = useState("");
    const [provider, setProvider] = useState([]);
    const [group, setGroup] = useState([]);

    
    const handleSubmit = (event) => {
        event.preventDefault();

        //history.push("/list");}
    
        // api
        event.target.checkValidity();
        console.log("handleSubmit");


        //await fetch(
            //'http://localhost:3333/login',
           // {
             // headers: {
            //    'Accept': 'application/json',
               // 'Content-Type': 'application/json'
             // },
            //  method: "POST",
            //  body: JSON.stringify({
             //   "email": email,
             //   "password": password,
             // })
           // }
         // );
    
        
        }

        useEffect(() => {

            async function getProviders() {
              const result = await fetch("http://localhost:3333/fornecedores");
              const data = await result.json();
              console.log(data);
              setProvider(data);
            }
        
            getProviders();
        
          }, []);

          useEffect(() => {

            async function getGroups() {
              const result = await fetch("http://localhost:3333/categorias");
              const data = await result.json();
              console.log(data);
              setGroup(data);
            }
        
            getGroups();
        
          }, []);



return(
<>
<form onSubmit={handleSubmit} className="form-login">

<section className="header-form">

    <h1>Cadastrar Novo Produto</h1>
    <Link to="/"><button id="cancel">Cancelar</button></Link>
    <button type="submit"onClick={handleSubmit} className="btn-salvar" >Salvar</button>

</section>

<section>
        <div className="image-container">
        {setUrl && <img id="img" href={url} alt="Imagem do Produto" className="image-product"></img>} 
        </div>

        <label for="url"> URL da Imagem</label>

            <input
            type="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Coloque aqui a url">
            </input>

</section>   


<section className="name-cost">

     <label for="name"> Razão Social</label>

        <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite aqui o nome do produto">
        </input>

        {!setName && <span id="nameError" className="error-msg error">Campo obrigatório!</span>}     

     <label for="cost">{"Custo Unitário (R$)"}</label>

        <input
        type="text"
        name="cost"
        value={unitCost}
        onChange={(e) => setUnitCost(e.target.value)}
        placeholder="Digite aqui o nome fantasia">
        </input>

        {!setUnitCost && <span id="costError" className="error-msg error">Campo obrigatório!</span>}       

</section>

<section>
            <label for="description">Descrição</label>
            <textarea
            rows={5}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite aqui uma breve descrição do produto">
            </textarea>

            {!setDescription && <span id="descriptionError" className="error-msg error">Campo obrigatório!</span>} 

</section>   

<hr/>

<section>

    <div>Fornecedor
        <select value={provider} onChange={(e) => setProvider(e.target.value)}>

            <option value={""} ></option>

           {provider.map(state=> <option value={state}>{state}</option>)}

        </select>
    </div>
    <div>Grupo
        <select value={group} onChange={(e) => setGroup(e.target.value)}>

            <option value={""} ></option>

           {group.map(state=> <option value={state}>{state}</option>)}

        </select>
    </div>
       

</section>       

</form>
</>
)
}

export default ProductsForm;