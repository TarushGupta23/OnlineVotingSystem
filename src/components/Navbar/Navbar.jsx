import './navbar.css'

export default function Navbar() {
    return <nav>
        <div className='web-logo' />
        <ul>
            <li className='nav-page'><a href='#'>Home</a></li>
            <li className='nav-page'><a href='#'>Cast Vote</a></li>
            <li className='nav-page'><a href='#'>Create Vote</a></li>
        </ul>
        <ul>
            <li className='nav-icon' id='nav-notification'></li>
            <li className='nav-icon' id='nav-profile'></li>
        </ul>
        <hr />
    </nav>
}