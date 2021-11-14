import './CompaniesForm.css'
import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const  CompaniesForm= ()=>{

    const [corporateName, setCorporateName] = useState("");
    const [fantasyName, setFantasyName] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [complement, setComplement] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const history = useHistory();

    
    const handleSubmit = async (event) => {

        try{
            event.preventDefault();
            if(!corporateName || !fantasyName || !cnpj || !email || !cep || !address || !number || !district || !city || !latitude || !longitude){
            alert('Por favor preencha os campos, apenas o complemento não é obrigatório!')
            if(!corporateName) {
            document.querySelector('#corporateError').className = "error-msg error";
            }
            if (corporateName){
              document.querySelector('#corporateError').className = "error-msg";
            }
            if(!fantasyName){
              document.querySelector('#fantasyError').className = "error-msg error";
            }
  
            if(fantasyName){
              document.querySelector('#fantasyError').className = "error-msg";
            }
            if(!cnpj){
              document.querySelector('#cnpjError').className = "error-msg error";
            }
            if(cnpj){
              document.querySelector('#cnpjError').className = "error-msg";
              return;
            }
            if(!email){
              document.querySelector('#emailError').className = "error-msg error";
            }
            if(email){
              document.querySelector('#emailError').className = "error-msg";
            }
             if(!cep){
              document.querySelector('#cepError').className = "error-msg error";
            }
            if(cep){
              document.querySelector('#cepError').className = "error-msg";
            }
            if(!address){
              document.querySelector('#addressError').className = "error-msg error";
            }
            if(address){
              document.querySelector('#addressError').className = "error-msg";
              return;
            }
             if(!number){
              document.querySelector('#numberError').className = "error-msg error";
            }
            if(number){
              document.querySelector('#numberError').className = "error-msg";
            }
            if(!district){
              document.querySelector('#districtError').className = "error-msg error";
            }
            if(district){
              document.querySelector('#districtError').className = "error-msg";
            } if(!city){
              document.querySelector('#cityError').className = "error-msg error";
            }
            if(city){
              document.querySelector('#cityError').className = "error-msg";
            } 
            if(!latitude){
              document.querySelector('#latitudeError').className = "error-msg error";
            }
            if(latitude){
              document.querySelector('#latitudeError').className = "error-msg";
            }
            if(!longitude){
              document.querySelector('#longitudeError').className = "error-msg error";
            }
            if(longitude){
              document.querySelector('#longitudeError').className = "error-msg";
              return;
            }
            
          } else{
            if (corporateName && fantasyName && cnpj && email && cep && address && number && district && city && latitude && longitude)
  
            {await fetch(
                'http://localhost:3333/empresas',
                {
                  headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                  },
                  method: "POST",
                  body: JSON.stringify({
                  "corporateName": corporateName,
                  "fantasyName": fantasyName,
                  "cnpj":cnpj,
                  "email":email,
                  "cep": cep,
                  "address": address,
                  "number": number,
                  "district": district,
                  "city": city,
                  "complement": complement,
                  "latitude": latitude,
                  "longitude": longitude
                  })
                }
              );
      
                
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Empresa cadastrada com sucesso',
            showConfirmButton: false,
            timer: 2000
          })

             history.push("/map");
            
  
          }}}
      
  
      catch (error) {
            alert('Desculpe pelo transtorno. Estamos trabalhando para resolver o problema!')
      }
    }

return(
<>
<form onSubmit={handleSubmit} className="form-companies">

<section className="header-form">

    <h1>Cadastrar Nova Empresa</h1>
    <div>
        <Link to="/"><button id="cancel">Cancelar</button></Link>
        <button type="submit"onClick={handleSubmit} className="btn-salvar" >Salvar</button>
    </div>

</section>

<section className="company-name">

     <div>
         <label for="corporate">Razão Social</label>
            <input
            type="text"
            name="corporate"
            value={corporateName}
            onChange={(e) => setCorporateName(e.target.value)}
            placeholder="Digite aqui a razão social">
            </input>
            <span id="corporateError" className="error-msg ">Campo obrigatório!</span>
     </div>   

     <div>
         <label for="fantasy">Nome Fantasia</label>
            <input
            type="text"
            name="fantasy"
            value={fantasyName}
            onChange={(e) => setFantasyName(e.target.value)}
            placeholder="Digite aqui o nome fantasia">
            </input>
            <span id="fantasyError" className="error-msg">Campo obrigatório!</span>
     </div>  

     <div>
         <label for="cnpj">CNPJ</label>
            <input
            type="text"
            name="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="00.000.000/0000-00">
            </input>
            <span id="cnpjError" className="error-msg">Campo obrigatório!</span>
     </div>    

     <div>
         <label for="emailCompany">Email</label>
            <input
            type="text"
            name="emailCompany"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite aqui o email">
            </input>
            <span id="emailError" className="error-msg">Campo obrigatório!</span>
     </div>   

</section>

<hr/>

<section className="address-details">

    
        <section className="cep-address">
            <div className="cep">
                <label for="cep">CEP</label>
                    <input
                    type="number"
                    name="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="00000-000">
                    </input>
                    <span id="cepError" className="error-msg">Campo obrigatório!</span>
            </div>
            <div className="address">
                <label for="address"> Endereço</label>
                    <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Digite aqui o endereço">
                    </input>
                    <span id="addressError" className="error-msg">Campo obrigatório!</span>
            </div>
        </section>
 
        <section className="number-district-city">
            <div>
                <label for="number"> Número</label>
                    <input
                    type="number"
                    name="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Digite aqui o número">
                    </input>
                    <span id="numberError" className="error-msg">Campo obrigatório!</span>
            </div>
            <div>
                <label for="district"> Bairro</label>
                    <input
                    type="text"
                    name="district"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="Digite aqui o bairro">
                    </input>
                    <span id="districtError" className="error-msg">Campo obrigatório!</span>
            </div>
            <div>
                <label for="city"> Cidade:</label>
                    <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Digite aqui a cidade">
                    </input>
                    <span id="cityError" className="error-msg">Campo obrigatório!</span>
            </div>
        </section>
  

        <div className="complement">
            <label for="complement"> Complemento</label>

                <input
                type="text"
                name="complement"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                placeholder="Digite aqui um complemento">
                </input>

        </div>

</section>  
<hr/>
<section className="latitude-longitude">

        <div>
            <label for="latitude"> Latitude</label>
                <input
                type="number"
                name="latitude"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="Informe aqui a latitude">
                </input>
                <span id="latitudeError" className="error-msg">Campo obrigatório!</span>
        </div>

        <div>
            <label for="longitude"> Longitude</label>
                <input
                type="number"
                name="longitude"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="Informe aqui a longitude">
                </input>
                <span id="longitudeError" className="error-msg">Campo obrigatório!</span>
        </div>

</section>       

</form>
</>
)
}

export default CompaniesForm;