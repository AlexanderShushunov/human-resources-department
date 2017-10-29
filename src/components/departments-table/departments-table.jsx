// @flow
import * as React from 'react';
import without from 'lodash/without';
import {EditableRow} from '../editable-table/editable-row';
import type {Department} from '../../model';
import {generateId} from '../../utils/id-generator';

type DepartmentsTableState = {
    departments: Array<Department>,
    justAdded: boolean
};

export class DepartmentsTable extends React.PureComponent<{}, DepartmentsTableState> {
    state = {
        departments: [{
            id: generateId(),
            name: 'Marketing'
        }, {
            id: generateId(),
            name: 'Accounting'
        }, {
            id: generateId(),
            name: 'Logistics'
        }],
        justAdded: false
    };

    deleteDepartment = (department: Department) => this.setState(
        ({departments}) => ({
            departments: without(departments, department)
        })
    );

    addDepartment = () => this.setState(
        ({departments}) => ({
            departments: [...departments, {
                name: '',
                id: generateId()
            }],
            justAdded: true
        })
    );

    changeDepartment = (oldDepartment: Department, newDepartment: Department) =>
        this.setState(
            ({departments}) => ({
                departments: departments.map(department =>
                    department === oldDepartment ? newDepartment : department
                ),
                justAdded: false
            })
        );


    render() {
        const {
            departments,
            justAdded
        } = this.state;
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col" />
                    </tr>
                    </thead>
                    <tbody>
                    {
                        departments.map(
                            (department, index) => (
                                <EditableRow
                                    entity={department}
                                    columns={[{
                                        fieldName: 'name'
                                    }]}
                                    onChange={newDepartment =>
                                        this.changeDepartment(department, newDepartment)
                                    }
                                    onDelete={() => this.deleteDepartment(department)}
                                    edit={justAdded && index === departments.length - 1}
                                    key={department.id}
                                />
                            )
                        )
                    }
                    </tbody>
                </table>
                <button
                    className="btn btn-primary"
                    onClick={this.addDepartment}
                >
                    Add
                </button>
            </div>
        );
    }
}
