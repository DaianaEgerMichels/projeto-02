import './CompaniesForm.css'
import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";

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
        event.preventDefault();

        await fetch(
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

       history.push("/map");
        
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
            {!setCorporateName && <span id="corporateError" className="error-msg error">Campo obrigatório!</span>}
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
            {!setFantasyName && <span id="fantasyError" className="error-msg error">Campo obrigatório!</span>}
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
            {!setCnpj && <span id="cnpjError" className="error-msg error">Campo obrigatório!</span>}
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
            {!setEmail && <span id="emailError" className="error-msg error">Campo obrigatório!</span>}
     </div>   

</section>


<section className="address-details">

    
        <section className="cep-address">
            <div>
                <label for="cep">CEP</label>
                    <input
                    type="number"
                    name="cep"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="00000-000">
                    </input>
                    {!setCep && <span id="cepError" className="error-msg error">Campo obrigatório!</span>}
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
                    {!setAddress && <span id="addressError" className="error-msg error">Campo obrigatório!</span>}
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
                    {!setNumber && <span id="numberError" className="error-msg error">Campo obrigatório!</span>}
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
                    {!setDistrict && <span id="districtError" className="error-msg error">Campo obrigatório!</span>}
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
                    {!setCity && <span id="cityError" className="error-msg error">Campo obrigatório!</span>}
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
                {!setLatitude && <span id="latitudeError" className="error-msg error">Campo obrigatório!</span>}
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
                {!setLongitude && <span id="longitudeError" className="error-msg error">Campo obrigatório!</span>}
        </div>

</section>       

</form>
</>
)
}

export default CompaniesForm;