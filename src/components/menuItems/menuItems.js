 
import {NavLink} from 'react-router-dom'

import './menuItems.scss'

const  MenuItems = () => {

    return (
        <div className="wrapper">
            <ul className="menu">

                <li className="menu__item">
                <NavLink
                    exact
                    to="/"
                    activeStyle={{color: '#9f0013'}}
                    className="menu__link">
                    Random dish
                </NavLink></li>

                <li className="menu__item">
                    
                    <NavLink
                        exact
                        to="/favorites"
                        activeStyle={{color: '#9f0013'}}
                        className="menu__link">
                        Favourites
                    </NavLink>
                </li>
            </ul>

            
        </div>
    )
}

export default MenuItems