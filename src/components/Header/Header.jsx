import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
  return (
    <header className={s.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9p_mJTZG00e2JVvM6ZmeOZmhjmlWqWmPg-A&usqp=CAU" alt="" />

        <div className={s.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
        : <NavLink to={'/login'}>Login</NavLink>
        }
            
        </div>
      </header>
  );
};

export default Header;