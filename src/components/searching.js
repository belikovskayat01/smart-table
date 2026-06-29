import {rules, createComparison} from "../lib/compare.js";

<<<<<<< HEAD
export function initSearching() {

    return (data, state) => {
        const query = state.search;

        if (!query) return data;

        return data.filter(row => {
            const values = [row.date, row.customer, row.seller];
            return values.some(v =>
                String(v).toLowerCase().includes(query.toLowerCase())
            );
        });
    };
=======

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор

    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        return data;
    }
>>>>>>> 6796e4fab5089f886ce0ac66c879041c882d5182
}