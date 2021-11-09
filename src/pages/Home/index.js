import React, {useState} from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";


export default function Home(){
    const [variavel, setVariavel] = useState("");

    return (
        <>
            <Header></Header>

            <Main>
             Hello World
            </Main>
         
            <Footer></Footer>
        </>
    )

}

