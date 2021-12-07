
import { useState } from "react";



///creo el array con los inputs a mapear en el formulario
const inputs = [
    {
        label: "Nombre",
        name: "name",
        type: "text"
    },
    {
        label: "Celular",
        name: "phone",
        type: "phone"
    },
    {
        label: "Email",
        name: "email",
        type: "email"
    },
    {
        label: "Confirma tu email",
        name: "email2",
        type: "email"
    }
]

export const CartForm = ({sendOrder}) => {
    


    ///creo estados para controlar el formulario
    const [formFields, setFormFields] = useState({
        name: "",
        phone: "",
        email: "",
        email2: ""
    });

    ///manejo de los eventos de cada input, guardando el estado en cada cambio
    function handleChange(evt) {
        setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
    }


    ///evento okclick de envio de orden.
    function onSubmit(event) {
        sendOrder(formFields.name,formFields.phone, formFields.email);///llamo a la funcion para grabar en la db
        console.log(
          `Usuario ${formFields.name} creado`);

      }




    return (
        <div className="formContainer">

            {/* mapeo los campos que tengo en el array */}
            {inputs.map((input) => (
                <div key={input.name} >
                    <label >{input.label}:  </label>
                    <input
                        value={formFields[input.name]}
                        name={input.name}
                        type={input.type}
                        onChange={handleChange}
                    />
                </div>
            ))}

            {/* valido que el boton este desabilitado si algun campo esta vacio, o si mail y confirmacion no coinciden*/}
           
            <button disabled={(!(formFields.name && formFields.phone && formFields.email&& formFields.email2))||(formFields.email!==formFields.email2)}
            onClick={onSubmit}>
            Enviar Orden</button>
           
        </div>
    );

}

