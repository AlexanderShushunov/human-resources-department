// @flow
import React, {Component} from 'react';
import './app.css';
import {LeftMenu} from '../components/left-menu';

const MENU_ITEMS = [
    {
        label: 'Departments',
        path: 'departments',
        active: false
    },
    {
        label: 'Employees',
        path: 'employees',
        active: true
    }
];

export class App extends Component<{}, {}> {
    render() {
        return (
            <LeftMenu items={MENU_ITEMS} />
        );
    }
}
