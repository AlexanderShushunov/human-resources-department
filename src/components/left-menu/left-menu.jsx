// @flow
import * as React from 'react';
import {NavLink} from 'react-router-dom';
import './left-menu.css';

type MenuItems = {
    label: string,
    path: string
}

type LeftMenuProps = {
    items: Array<MenuItems>
}

export const LeftMenu = ({items}: LeftMenuProps) => (

    <nav className="left-menu nav flex-column">
        {
            items.map(
                (item, index) => (<Item {...item} key={index} />)
            )
        }
    </nav>
);

const Item = ({label, path}) => (
    <NavLink
        className={'nav-link nav-item'}
        to={path}
        activeClassName="left-menu__item--active"
    >
        {label}
    </NavLink>
);
