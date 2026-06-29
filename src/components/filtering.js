export function initFiltering(elements, indexes) {

    Object.keys(indexes).forEach((name) => {
        elements[name].append(
            ...Object.values(indexes[name]).map(v => new Option(v, v))
        );
    });

    return (data, state, action) => {

        // 🔥 НОРМАЛИЗАЦИЯ ЧИСЕЛ (ВАЖНО)
        const normalizedState = {
            ...state,
            totalFrom: state.totalFrom !== '' && state.totalFrom != null
                ? Number(state.totalFrom)
                : '',
            totalTo: state.totalTo !== '' && state.totalTo != null
                ? Number(state.totalTo)
                : ''
        };

        if (action && action.name === 'clear') {
            const input = action.parentElement.querySelector('input');

            if (input) input.value = '';

            if (action.dataset.field) {
                normalizedState[action.dataset.field] = '';
                state[action.dataset.field] = '';
            }
        }

        return data.filter(row => compare(row, normalizedState));
    };
}