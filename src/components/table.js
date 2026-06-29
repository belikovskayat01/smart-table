import { cloneTemplate } from "../lib/utils.js";

export function initTable(settings, onAction) {
    const { tableTemplate, rowTemplate, before, after } = settings;

    const root = cloneTemplate(tableTemplate);

    // BEFORE / AFTER блоки
    before.reverse().forEach(name => {
        root[name] = cloneTemplate(name);
        root.container.prepend(root[name].container);
    });

    after.forEach(name => {
        root[name] = cloneTemplate(name);
        root.container.append(root[name].container);
    });

    // события
    root.container.addEventListener('change', () => onAction());
    root.container.addEventListener('reset', () => setTimeout(onAction));
    root.container.addEventListener('submit', (e) => {
        e.preventDefault();
        onAction(e.submitter);
    });

    // РЕНДЕР (КЛЮЧЕВОЕ)
    function render(data) {
        const rows = data.map(item => {
            const row = cloneTemplate(rowTemplate);

            Object.entries(item).forEach(([key, value]) => {
                if (row.elements[key]) {
                    row.elements[key].textContent = value;
                }
            });

            return row.container;
        });

        root.elements.rows.replaceChildren(...rows);
    }

    return {
        ...root,
        render
    };
}