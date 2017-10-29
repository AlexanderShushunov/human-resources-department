// @flow
import * as React from 'react';
import './editable-row.css';
import type {ViewComponentType, EditComponentType} from '../flow-types';
import {EditableCell} from '../editable-cell';

type EditableRowProps<T> = {
    entity: T,
    columns: Array<{
        fieldName: $Keys<T>,
        ViewComponent?: ViewComponentType<string>,
        EditComponent?: EditComponentType<string>
    }>,
    onChange: (T) => void,
    onDelete: () => void,
    edit?: boolean
}

export class EditableRow<T: Object> extends React.PureComponent<EditableRowProps<T>> {

    change = (newValue: string, fieldName: string) => {
        const {
            entity,
            onChange
        } = this.props;
        onChange({
            ...entity,
            [fieldName]: newValue
        });
    };

    render() {
        const {
            entity,
            columns,
            onDelete,
            edit
        } = this.props;
        return (
            <tr className="editable-row">
                {columns.map(
                    ({fieldName, ViewComponent, EditComponent}, index) => (
                        <EditableCell
                            value={entity[fieldName]}
                            ViewComponent={ViewComponent}
                            EditComponent={EditComponent}
                            onChange={newValue => this.change(newValue, fieldName)}
                            key={fieldName}
                            edit={edit && index === 0}
                        />
                    )
                )}
                <td
                    className="
                        editable-row__icon-cell
                        editable-row__icon-cell--delete
                    "
                    onClick={onDelete}
                />
            </tr>
        );
    }
}
