
import { Link, useLocation } from 'react-router-dom';

function Header() {

    const ubicacion = useLocation();

    return (
        <header className=''>
            <div>
                <h1>No manches mi termo</h1>
            </div>

            <div>
                <nav>
                    <Link to="/Home">Home</Link>
                    <Link to="/Nosotros">About us</Link>
                </nav>
            </div>

            <div>
                {/*Si la dirección en la que se encuentra el usuario es diferente de /Publicacion, 
                entonces muestra estos elementos; de lo contrario, no muestra nada*/}
                {ubicacion.pathname !== "/Publicacion" && (
                    <button>
                        <Link to="/Publicacion">
                            <h4>Crear nueva publicación</h4>
                        </Link>
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
