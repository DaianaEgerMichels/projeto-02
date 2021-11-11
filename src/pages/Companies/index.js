import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";

import CompaniesForm from "../../components/CompaniesForm";


export default function Companies(){
    
    return (
        <>
            <Header></Header>
            <Main>
             <CompaniesForm></CompaniesForm>
            </Main>
         
        </>
    )

}