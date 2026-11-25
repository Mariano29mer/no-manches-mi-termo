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
            <form className="campos" onSubmit={enviarFormulario}>
                <div className="campo">
                    <label className="campo-titulo">Nombre del Objeto</label>
                    <input className="campo-input" type="text" value={objeto} onChange={(e) => setObjeto(e.target.value)} />
                </div>

                <div className="campo">
                    <label className="campo-titulo">Ubicación</label>
                    <input className="campo-input" type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
                </div>

                <div className="campo">
                    <label className="campo-titulo">Categoría</label>
                    <select className="campo-select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="accesorios">Accesorios</option>
                        <option value="libro">Cuaderno/libro</option>
                        <option value="termo">Termo</option>
                        <option value="electronica">Electrónica</option>
                    </select>
                </div>

                <div className="campo">
                    <label className="campo-titulo">Descripción</label>
                    <input className="campo-input" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>

                <div className="campo">
                    <label className="campo-titulo">Contacto</label>
                    <input className="campo-input" type="text" value={contacto} onChange={(e) => setContacto(e.target.value)} />
                </div>

                <div className="campo">
                    <label className="campo-titulo">Subir foto</label>
                    <input className="input-foto" type="file" accept="image/*" onChange={(e) => setFoto(e.target.value)} />
                </div>

                <button className="boton boton-azul" type="submit">Publicar la publicacion</button>
            </form>
        </main>
    )
}
export default Publicacion;