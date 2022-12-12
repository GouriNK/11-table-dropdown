import { Fragment } from "react";

function Table ({data, config, keyFn}) {

    // Labels for table header
    const renderedTableHeader = config.map((column)=>{
        // Fragment is like a custom component, to which we can assign a key prop, or 
        // group diff child elements together without inserting anything into the DOM
        // There will be no parent element or nesting reqd
        if(column.headerTemplate) {
            return <Fragment key={column.label}>{column.headerTemplate()}</Fragment>;
        }
        return (
           <th key={column.label}>{column.label}</th>
        );
    })

    const renderedRows = data.map((item)=>{
        // for this item, go through each column's render and render each column.
        const renderedCells = config.map((column)=>{
            return <td className="p-3" key={column.label}>
                {column.render(item)}
            </td>
        });
        return (
            <tr className="border-b" key={keyFn(item)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedTableHeader}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table;