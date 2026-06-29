import {rules, createComparison} from "../lib/compare.js";

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
}