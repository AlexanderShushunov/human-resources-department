// @flow
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './left-menu.css';

type MenuItems = {
    label: string,
    path: string,
    active: boolean,
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

const Item = ({label, path, active}) => (
    <a
        className={`
            nav-link
            nav-item
            ${active ? 'left-menu__item--active' : ''}
        `}
        href={path}
    >
        {label}
    </a>
);
