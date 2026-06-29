import {createComparison, defaultRules} from "../lib/compare.js";

const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {

    Object.keys(indexes).forEach((elementName) => {
        elements[elementName].append(
            ...Object.values(indexes[elementName]).map(name => new Option(name, name))
        );
    });

    return (data, state, action) => {

        if (action && action.name === 'clear') {
            const input = action.parentElement.querySelector('input');
            input.value = '';
            state[action.dataset.field] = '';
        }

        return data.filter(row => compare(row, state));
    };
}