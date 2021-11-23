
import { useState } from "react";


///creo el array con los inputs a mapear en el formulario
const inputs = [
    {
        label: "Nombre",
        name: "name"
    },
    {
        label: "Celular",
        name: "phone"
    },
    {
        label: "Email",
        name: "email"
    }
]

export const CartForm = ({ createCostumer, sendOrder}) => {

    ;

    ///creo estados para controlar el formulario
    const [formFields, setFormFields] = useState({
        name: "",
        phone: "",
        email: ""
    });

    ///manejo de los eventos de cada input, guardando el estado en cada cambio
    function handleChange(evt) {
        setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
    }


    ///evento okclick de envio de orden.
    function onSubmit(event) {
        createCostumer(formFields.name,formFields.phone, formFields.email);///creo el usr y lo guardo en el context
        sendOrder();///llamo a la funcion para grabar en la db
        console.log(
          `Usuario ${formFields.name}creado`);

      }




    return (
        <div className="formContainer">

            {/* mapeo los campos que tengo en el array */}
            {inputs.map((input) => (
                <div key={input.name} >
                    <label >{input.label}</label>
                    <input
                        value={formFields[input.name]}
                        name={input.name}
                        type="text"
                        onChange={handleChange}
                    />
                </div>
            ))}

            {/* valido que el boton este desabilitado si algun campo esta vacio */}
            <button disabled={!(formFields.name && formFields.phone && formFields.email)}
            onClick={onSubmit}>
            Enviar Orden</button>
        </div>
    );

}

