import './fonts/ys-display/fonts.css'
import './style.css'

import {data as sourceData} from "./data/dataset_1.js";

import {initData} from "./data.js";
import {processFormData} from "./lib/utils.js";

import {initTable} from "./components/table.js";
// @todo: подключение
<<<<<<< HEAD
import {initSearching} from './components/searching.js';
import {initPagination} from "./components/pagination.js";
import {initSorting} from "./components/sorting.js";
import {initFiltering} from './components/filtering.js';
=======
>>>>>>> 6796e4fab5089f886ce0ac66c879041c882d5182


// Исходные данные используемые в render()
const {data, ...indexes} = initData(sourceData);

/**
 * Сбор и обработка полей из таблицы
 * @returns {Object}
 */
function collectState() {
    const state = processFormData(new FormData(sampleTable.container));

<<<<<<< HEAD
    const rowsPerPage = parseInt(state.rowsPerPage);
    const page = parseInt(state.page ?? 1);

    return {
        ...state,
        rowsPerPage,
        page
=======
    return {
        ...state
>>>>>>> 6796e4fab5089f886ce0ac66c879041c882d5182
    };
}

/**
 * Перерисовка состояния таблицы при любых изменениях
 * @param {HTMLButtonElement?} action
 */
function render(action) {
    let state = collectState(); // состояние полей из таблицы
    let result = [...data]; // копируем для последующего изменения
    // @todo: использование
<<<<<<< HEAD
    result = applySearching(result, state, action);
    result = applyFiltering(result, state, action);
    result = applySorting(result, state, action);
    result = applyPagination(result, state, action);
    

    sampleTable.render(result);
=======


    sampleTable.render(result)
>>>>>>> 6796e4fab5089f886ce0ac66c879041c882d5182
}

const sampleTable = initTable({
    tableTemplate: 'table',
    rowTemplate: 'row',
<<<<<<< HEAD
    before: ['search', 'header', 'filter'],
    after: ['pagination']
}, render);

// @todo: инициализация
const applyPagination = initPagination(
    sampleTable.pagination.elements,
    (el, page, isCurrent) => {
        const input = el.querySelector('input');
        const label = el.querySelector('span');

        input.value = page;
        input.checked = isCurrent;
        label.textContent = page;
        
        return el;
    }
);

const applySorting = initSorting([
    sampleTable.header.elements.sortByDate,
    sampleTable.header.elements.sortByTotal
]);

const applyFiltering = initFiltering(
    sampleTable.filter.elements,
    {
        searchBySeller: indexes.sellers
    }
);

const applySearching = initSearching();
=======
    before: [],
    after: []
}, render);

// @todo: инициализация
>>>>>>> 6796e4fab5089f886ce0ac66c879041c882d5182


const appRoot = document.querySelector('#app');
appRoot.appendChild(sampleTable.container);

render();
