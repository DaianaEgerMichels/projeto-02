import React from "react";
import "./ProductContainer.css"

const ProductContainer = (url,name, description, unitCost, provider,group )=>{
    return(
        
        <section className="product-container" >
            <div id="image-product">
                <img src={url} alt={name}></img>
            </div>

            <div id="details-product">
                <h2>{name}</h2>
                <h4>{description}</h4>
                <p>{`Custo unitário R$ ${unitCost}`}</p>
                <p>{`Fornecedor: ${provider}`}</p>
                <p>{`Grupo: ${group}`}</p>
            </div>
        </section>
    )
}

export default ProductContainer;