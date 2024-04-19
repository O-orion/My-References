// Importando a imagem
import './menu.css'

export default function MenuComponent() {

    return (
        <nav className='container-menu'>
            <ul className='menu-lista'>
                <li>
                    <a className='menu-link'>Home</a>
                </li>
                <li>
                    <a className='menu-link'>Home</a>
                </li>
                <li>
                    <a className='menu-link'>Home</a>
                </li>
                <li>
                    <a className='menu-link'>Home</a>
                </li>
            </ul>

            <div className="container-utils">
                <input className='pesquisa' type="text" placeholder='pesquisar' />
            </div>
        </nav>
    )
}
