import { Link } from 'react-router-dom';

function Header(){
    return(
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
                <button>
                    <Link to="/Publicacion"><h4>Crear nueva publicacion</h4></Link>
                </button>
            </div>
        </header>
    );
}


export default Header;