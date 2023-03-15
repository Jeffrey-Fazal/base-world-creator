// Navigation menu
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (

        <nav>
            <div className='navbar'>
                <ul>
                    <li><NavLink to="/">Adventurarr |</NavLink></li>
                    <li><NavLink to="/story"> Story | </NavLink></li>
                    <li><NavLink className="underline" to="/creator">Creators | </NavLink></li>
                    <li><NavLink to="/player">Players | </NavLink></li>
                    <li><NavLink to="/profile">Profile | </NavLink></li>
                    {/* Add logic to show login or signout depending on user session */}
                    {/* <li><NavLink to="/login">Login |</NavLink></li>
                    <li><NavLink to="/signout"> SignOut |</NavLink></li>
                    <li><NavLink to="/signup"> Join Us</NavLink></li> */}
                </ul>
            </div>
        </nav>

    )
};