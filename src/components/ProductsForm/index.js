import React, {useState, useEffect} from "react";
import './ProductsForm.css'
import {Link, useHistory} from "react-router-dom";
import Swal from 'sweetalert2'


const  ProductsForm= ()=>{

  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [description, setDescription] = useState("");
  const [provider, setProvider] = useState("");
  const [providers, setProviders] = useState([]);
  const [group, setGroup] = useState("");
  const [groups, setGroups] = useState([]);
  const history = useHistory();

    
  const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        if(!url || !name || !description || !unitCost || !provider || !group){
          alert('Por favor preencha todos os campos!')
          if (!url){
            document.querySelector('#imageProduct').className = "image-container";
            document.querySelector('#urlError').className = "error-msg error";
          }
          if (url){
          document.querySelector('#imageProduct').className = "image-container view";  
          document.querySelector('#urlError').className = "error-msg"; 
          }
          if(!name) {
          document.querySelector('#nameError').className = "error-msg error";
          }
          if (name){
            document.querySelector('#nameError').className = "error-msg";
          }
          if(!unitCost){
            document.querySelector('#costError').className = "error-msg error";
          }

          if(unitCost){
            document.querySelector('#costError').className = "error-msg";
          }
          if(!description){
            document.querySelector('#descriptionError').className = "error-msg error";
          }
          if(description){
            document.querySelector('#descriptionError').className = "error-msg";
            return;
          }
          
        } else{
          if (url && name && description && unitCost && provider && group)

          {await fetch(
            'http://localhost:3333/produtos',
            {
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
              "url": url,
              "name": name,
              "unitCost": unitCost,
              "description":description,
              "provider": provider,
              "group": group
              })
            }
          );

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Produto cadastrado com sucesso',
            showConfirmButton: false,
            timer: 2000
          })
      

          history.push("/list");
          }

        }
    }

    catch (error) {
          alert('Desculpe pelo transtorno. Estamos trabalhando para resolver o problema!')
    }
      
        
  }

  useEffect(() => {

    async function getProviders() {
      const result = await fetch("http://localhost:3333/fornecedores");
      const data = await result.json();
      setProviders(data);
    }
        
    getProviders();
        
  }, []);

  useEffect(() => {

    async function getGroups() {
      const result = await fetch("http://localhost:3333/categorias");
      const data = await result.json();
      setGroups(data);
    }
        
    getGroups();
        
  }, []);


return(
<>
<form onSubmit={handleSubmit} className="form-products">

  <section className="header-form">

    <h1>Cadastrar Novo Produto</h1>
    <div>
      <Link to="/"><button id="cancel">Cancelar</button></Link>
      <button type="submit"onClick={handleSubmit} className="btn-salvar" >Salvar</button>
    </div>

  </section>

  <section className="img-url">
    
    {setUrl && <div id ="imageProduct" className="image-container view "><img id="img" src={url} 
    alt={url} className="image-product"></img></div>}
    {!setUrl &&<div id ="imageProduct" className="image-container"><img id="img" src={url} 
    alt={url} className="image-product"></img></div>}

    <label for="url"> URL da Imagem</label>

      <input
        type="url"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Coloque aqui a url">
      </input>
      <span id="urlError" className="error-msg">Campo obrigatório!</span>
  </section>   


  <section className="name-cost">

     <div>
       <label for="name">Produto</label>
          <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do produto">
          </input>
          <span id="nameError" className="error-msg">Campo obrigatório!</span>
     </div>   

     <div>
       <label for="cost">{"Custo Unitário (R$)"}</label>
          <input
          type="text"
          name="cost"
          value={unitCost}
          onChange={(e) => setUnitCost(e.target.value)}
          placeholder="Custo do produto">
          </input>
          <span id="costError" className="error-msg">Campo obrigatório!</span>
     </div>    

  </section>

  <section className="description">
            <label for="description">Descrição</label>
            <textarea
            rows={5}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite aqui uma breve descrição do produto">
            </textarea>

            <span id="descriptionError" className="error-msg ">Campo obrigatório!</span> 

  </section>   
<hr/>
  <section className="selects">

    <div><span>Fornecedor</span>
        <select value={provider} onChange={(e) => setProvider(e.target.value)}>

            <option value="" selected disabled>Selecione uma opção</option>

           {providers.map((state)=> (<option value={state}>{state}</option>))}

        </select>
    </div>
    <div><span>Grupo</span>
        <select value={group} onChange={(e) => setGroup(e.target.value)}>

            <option value="" selected disabled> Selecione uma opção </option>

           {groups.map((state)=> (<option value={state}>{state}</option>))}

        </select>
    </div>
       

  </section>    

  <div className="products-checked">
    <Link to="/list"><button id="btn-checked">Produtos Cadastrados</button></Link>
  </div>   

</form>
</>
)
}

export default ProductsForm;