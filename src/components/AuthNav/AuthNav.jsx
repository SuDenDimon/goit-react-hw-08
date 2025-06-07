import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css';
import clsx from 'clsx';


const NavLinkActivClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

export default function AuthNav() {


  return (
    <>
      <NavLink className={NavLinkActivClass} to="/register">
        Register
      </NavLink>
      <NavLink className={NavLinkActivClass} to="/login">
        Log In
      </NavLink>
    </>
  );
  
};