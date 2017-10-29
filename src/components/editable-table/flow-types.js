// @flow
export type ViewComponentProps<V> = {
    value: V,
    onClick: () => void
};

export type ViewComponentType<V> = React$ComponentType<ViewComponentProps<V>>;

export type EditComponentProps<V> = {
    value: V,
    onChange: (V) => void,
    onBlur: () => void
};

export type EditComponentType<V> = React$ComponentType<EditComponentProps<V>>;
