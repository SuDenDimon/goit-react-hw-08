
import { NavLink } from 'react-router-dom';
import clsx from 'clsx'
import style from "./Navigation.module.css"
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function Navigation() {

  const isLoggedIn = useSelector(selectIsLoggedIn);

const NavLinkActivClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

  return (

    <>
      <NavLink to="/" className={NavLinkActivClass}>
        Home
      </NavLink>
      {isLoggedIn && (<NavLink to="/contacts" className={NavLinkActivClass}>
        Contacts
      </NavLink>)}
      
        
    </>

  );
}
