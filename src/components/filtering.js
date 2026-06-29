import { createComparison, defaultRules } from "../lib/compare.js";

const compare = createComparison(defaultRules);

export function initFiltering(elements, indexes) {
    // заполняем dropdown'ы
    Object.keys(indexes).forEach((key) => {
        const select = elements[key];

        if (!select) return;

        select.append(
            ...Object.values(indexes[key]).map(name => new Option(name, name))
        );
    });

    return (data, state, action) => {
        // очистка фильтра
        if (action && action.name === 'clear') {
            const input = action.parentElement.querySelector('input');

            if (input) input.value = '';

            const field = action.dataset.field;
            if (field) state[field] = '';
        }

        return data.filter(row => compare(row, state));
    };
}