// @flow
import * as React from 'react';
import type {EditComponentProps} from '../../flow-types';
import {focusToLastPosition} from '../../../../utils/focus-to-last-position';

export class DefaultEdit<V> extends React.PureComponent<EditComponentProps<V>> {

    input: ?HTMLInputElement;

    componentDidMount() {
        if (this.input) {
            focusToLastPosition(this.input)
        }
    }

    setRef = (input: ?HTMLInputElement) => {
        this.input = input;
    };

    render() {
        const {
            value,
            onBlur,
            onChange
        } = this.props;
        return (
            <input
                type="text"
                className="form-control"
                value={value}
                onChange={({target: {value}}) => onChange(value)}
                onBlur={onBlur}
                ref={this.setRef}
            />
        );
    }
}
