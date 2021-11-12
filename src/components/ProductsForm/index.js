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
    event.preventDefault();

    await fetch(
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
      position: 'top-end',
      icon: 'success',
      title: 'Produto cadastrado com sucesso',
      showConfirmButton: false,
      timer: 1500
    })

    history.push("/list");
        
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
    
    {setUrl && <div className="image-container view"><img id="img" href={url} alt="Imagem do Produto" className="image-product"></img></div>} 
    

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

     <div>
       <label for="name">Produto</label>
          <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite aqui o nome do produto">
          </input>
          {!setName && <span id="nameError" className="error-msg error">Campo obrigatório!</span>}
     </div>   

     <div>
       <label for="cost">{"Custo Unitário (R$)"}</label>
          <input
          type="text"
          name="cost"
          value={unitCost}
          onChange={(e) => setUnitCost(e.target.value)}
          placeholder="Digite aqui o custo do produto">
          </input>
          {!setUnitCost && <span id="costError" className="error-msg error">Campo obrigatório!</span>}
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

            {!setDescription && <span id="descriptionError" className="error-msg error">Campo obrigatório!</span>} 

  </section>   

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

</form>
</>
)
}

export default ProductsForm;