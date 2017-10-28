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

export class App extends Component<{}, {}> {
    render() {
        return (
            <Router>
                <div>
                    <LeftMenu
                        items={MENU_ITEMS.map(
                            ({label, path}) => ({label, path})
                        )}
                    />
                    {MENU_ITEMS.map(
                        ({path, component}) => (
                            <Route
                                path={path}
                                component={component}
                                key={path}
                            />
                        )
                    )}
                </div>
            </Router>
        );
    }
}
