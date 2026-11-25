import { useState } from "react";
import './publicacion.css'

function Publicacion() {
    
    const [objeto, setObjeto] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [contacto, setContacto] = useState("");   
    const [foto, setFoto] = useState("");


    function enviarFormulario(evento){
        evento.preventDefault();
        if(
            objeto.trim() === "" ||
            ubicacion.trim() === "" ||
            categoria.trim() === "" ||
            descripcion.trim() === "" ||
            contacto.trim() === "" ||
            foto.trim() === ""
        ){
            setMensaje("Completa los campos")
        } else{
            limpiarFormulario()
            setMensaje("Se envio correctamente")
        }
        setMostrar(true)
    }

    return(
        <main className="formulario">
            <form onSubmit={enviarFormulario}>
                <label>Nombre del Objeto</label>
                <input type="text" value={objeto} onChange={(e) => setObjeto(e.target.value)} />
                <label>Ubicación</label>

                <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
                <label>Categoría</label>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Seleccionar</option>
                    <option value="accesorios">Accesorio</option>
                    <option value="libro">Cuaderno/libro</option>
                    <option value="termo">Termo</option>
                    <option value="electronica">Electrónica</option>
                </select>
                <label>Descripción</label>

                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                <label>Contacto</label>
                
                <input type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} />


                <label>Subir foto</label>
                <input type="file" accept="image/*" onChange={(e) => setFoto(e.target.value)} />
                <button type="submit">Publicar la publicacion</button>
            </form>
        </main>
    )

}

export default Publicacion;