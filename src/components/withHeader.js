import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function withHeader(Component){
    function NewComponent(props){
        return(
            <>
                <Header/>
                <Component{...props}/>
                <Footer/>
            </>
        );
    }
    return NewComponent;
}