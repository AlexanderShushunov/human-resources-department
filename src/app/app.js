// @flow
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './app.css';
import {LeftMenu} from '../components/left-menu';
import {DepartmentsTable} from '../components/departments-table';
import {EmployeesTable} from '../components/employees-table';
import {AppLayout} from './app-layout';

const MENU_ITEMS = [
    {
        label: 'Departments',
        path: '/departments',
        component: DepartmentsTable

    },
    {
        label: 'Employees',
        path: '/employees',
        component: EmployeesTable
    }
];

const SpecificLeftMenu = () => (
    <LeftMenu
        items={MENU_ITEMS.map(
            ({label, path}) => ({label, path})
        )}
    />
);

const Content = () => MENU_ITEMS.map(
    ({path, component}) => (
        <Route
            path={path}
            component={component}
            key={path}
        />
    )
);

export class App extends Component<{}, {}> {
    render() {
        return (
            <Router>
                <AppLayout
                    LeftMenu={SpecificLeftMenu}
                    Content={Content}
                />
            </Router>
        );
    }
}
