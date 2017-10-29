// @flow
import * as React from 'react';
import type {ViewComponentType, EditComponentType} from '../flow-types';
import {DefaultView} from './defaul-view';
import {DefaultEdit} from './default-edit';

type EditableCellProps<V> = {
    value: V,
    ViewComponent: ViewComponentType<V>,
    EditComponent: EditComponentType<V>,
    onChange: (V) => void,
    edit?: boolean
}

type EditableCellState = {
    mode: 'view' | 'edit'
}

export class EditableCell<V> extends React.PureComponent<EditableCellProps<V>, EditableCellState> {

    static defaultProps = {
        ViewComponent: DefaultView,
        EditComponent: DefaultEdit
    };

    constructor(props: EditableCellProps<V>) {
        super(props);
        this.state = {
            mode: props.edit ? 'edit' : 'view'
        };
    }


    toEditMode = () => this.setState({mode: 'edit'});

    toViewMode = () => this.setState({mode: 'view'});

    render() {
        const {
            value,
            ViewComponent,
            EditComponent,
            onChange
        } = this.props;
        return (
            <td>
                {
                    this.state.mode === 'view'
                        ? <ViewComponent
                            value={value}
                            onClick={this.toEditMode}
                        />
                        : <EditComponent
                            value={value}
                            onChange={onChange}
                            onBlur={this.toViewMode}
                        />
                }
            </td>
        );
    }
}
