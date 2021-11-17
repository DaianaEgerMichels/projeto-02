import React, { useState, useEffect } from "react";
import Main from "../../components/Main";
import Header from "../../components/Header";
import ProductContainer from "../../components/ProductContainer";
import './List.css'


export default function List(){

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function getProducts() {
          const result = await fetch("http://localhost:3333/produtos");
          const data = await result.json();
          setProducts(data);
        }
            
        getProducts();
            
      }, []);

    return (
        <>
            <Header></Header>
            <Main>
              <section className="list-products">
                <h1>Lista de Produtos</h1>
                {products.map(item=> <ProductContainer url={item.url} name={item.name} description={item.description} unitCost={item.unitCost} provider={item.provider} group={item.group}></ProductContainer>)}
              </section>
            </Main>
         
        </>
    )

}
