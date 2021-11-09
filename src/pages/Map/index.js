import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import {MapContainer,TileLayer, Marker, Popup } from 'react-leaflet';

const COMPANIES = [
    {
      id: 1,
      name: 'Empresa X',
      coordinates: [51.505,-0.09]
    },
   {
      id: 2,
      name: 'Empresa Y',
      coordinates: [11.505,-0.09]
    },
     {
      id: 3,
      name: 'Empresa XYTE',
      coordinates: [13.505,-0.09]
    },
     {
      id: 4,
      name: 'Empresa Z',
      coordinates: [12.505,-0.09]
    }
  ]


export default function Map(){

    return (
        <>
        {/*<Header></Header>*/}
        <Main>
        <div className="container-map">  

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 {
                     COMPANIES.map(item => (
                        <Marker position={item.coordinates}>
                            <Popup>
                                <p>Nome: {item.name}</p>
                            </Popup>
                        </Marker>
                    ))
                 }
            </MapContainer>

        </div>
        </Main>
        {/*<Footer></Footer>*/}
        </>
    )

}