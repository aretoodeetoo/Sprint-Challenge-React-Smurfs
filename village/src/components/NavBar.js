import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    return(
        <div className="navBarWrapper">
            <h1>Welcome to Smurf Village!</h1>
            <div className="navLinkStyles">
            <NavLink exact path to={`/`} style={{textDecoration: 'none', color: 'lightblue'}} activeStyle={{fontWeight: 'bold', color: 'blue'}}>Home Page</NavLink>
            <NavLink to={`/smurfs`} style={{textDecoration: 'none', color: 'lightblue'}} activeStyle={{fontWeight: 'bold', color: 'blue'}}>Smurf Residents</NavLink>
            <NavLink to={`/smurf-form`} style={{textDecoration: 'none', color: 'lightblue'}} activeStyle={{fontWeight: 'bold', color: 'blue'}}>Add a Smurf</NavLink>
            </div>
        </div>
    );
}

export default NavBar;