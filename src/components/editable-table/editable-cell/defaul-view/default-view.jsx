// @flow
import * as React from 'react';
import type {ViewComponentProps} from '../../flow-types';
import './default-view.css';

export function DefaultView<V>({value, onClick}: ViewComponentProps<V>) {
    return (
        <span
            className="default-view"
            onClick={onClick}
        >
            {String(value)}
        </span>
    );
}
