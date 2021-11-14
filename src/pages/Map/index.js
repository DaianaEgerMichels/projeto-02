import React, {useEffect, useState} from "react";
import Main from "../../components/Main";
import {MapContainer,TileLayer, Marker, Popup } from 'react-leaflet';
import Header from "../../components/Header";


export default function Map(){

    const [companies, setCompanies] = useState([]);

    useEffect(() => {

        async function getCompanies() {
          const result = await fetch("http://localhost:3333/empresas");
          const data = await result.json();
          setCompanies(data);
        }
            
        getCompanies();
            
      }, []);

    return (
        <>
        <Header></Header>
        <Main>
        <div className="container-map">  

            <MapContainer center={[-28.1632702, -48.9803306]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 {
                     companies.map(item => (
                        <Marker position={[item.latitude, item.longitude]}>
                            <Popup>
                                <div className="popup-style">
                                    <p>{`Razão Social: ${item.corporateName}`}</p>
                                    <p>{`Nome Fantasia: ${item.fantasyName}`}</p>
                                    <p>{`Endereço: ${item.address}, ${item.number}, ${item.district}, ${item.city}`}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                 }
            </MapContainer>

        </div>
        </Main>
        </>
    )

}