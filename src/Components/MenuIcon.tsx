import* as React from 'react';
import {NavLink} from 'react-router-dom';
import {FC} from 'react';

interface MenuIcon{
  link: string;
  icon: string;
  quantity?: number;
}

const MenuIcon: FC<MenuIcon> = ({link, icon, quantity}) => {
  return (
    <NavLink className="customer_btn" to={link}  >
      <span className="position-absolute start-200 top-0 translate-middle badge rounded-pill pop-theme">{quantity}</span>
      <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon;