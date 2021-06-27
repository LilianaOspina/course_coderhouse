import React from "react";
import "../../App.scss";

function Field({text}){
    return  <div className="form-body">
                <label>{text}</label>
                <input type="text" />
            </div>
}

function Form(){
    return <>
         <p>Formulario de ingreso</p>

        <Field text="Nombre"></Field>

        <div className="form-body">
            <label>Apellido</label>
            <input type="text" />
        </div>
        
        <div className="form-body">
            <label>Edad</label>
            <input type="text" />
        </div>
        <button type="button">Enviar!</button>
    </>
}