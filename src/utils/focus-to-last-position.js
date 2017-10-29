// @flow
export const focusToLastPosition = (input: HTMLInputElement) => {
    const valueLength = input.value.length;
    input.selectionStart = valueLength;
    input.selectionEnd = valueLength;
    input.focus();
};

