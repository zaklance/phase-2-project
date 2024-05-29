import React from "react";
import { NavLink, useLocation, useMatch } from 'react-router-dom';

function NavHead() {

    const location = useLocation();

    return (
        <header>
            <nav id="navigation-bar">
                <ul>
                    <li className="nav-link-box">
                        <NavLink
                        to='/'
                        className='nav-link' >
                            Abstract
                        </NavLink>
                    </li>
                    <li className="nav-link-box">
                        <NavLink
                        to='/111-Mass-in-a-Box'
                        className='nav-link' >
                            Directive 111
                        </NavLink>
                        {/* <ul className="popOutMenu">
                            <li>Guide</li>
                            <li>Data</li>
                            <li>Results</li>
                        </ul> */}
                    </li>
                    {/* <li className="nav-link-box">
                        <NavLink
                        to='/211-Cohesion-&-the-Outcast'
                        className='nav-link' >
                            Directive 211
                        </NavLink>
                    </li> */}
                    <li className="nav-link-box">
                        <NavLink
                        to='/Theory'
                        className='nav-link' >
                            More Theory
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className="title">Speculative Directive</h1>
            <h2 className="title">{location.pathname.slice(1).replaceAll('-', ' ')}</h2>
        </header>
    )
}

export default NavHead;

