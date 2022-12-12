import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
    ];
    const config = [
        {   
            label: 'Fruit', 
            render : (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name,
        },
        {
            label: 'Color', 
            render : (fruit) => <div className={`p-2 m-3 ${fruit.color}`}></div>
        },
        {
            label: 'Score', 
            render : (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score,
        },
        {
            label: 'Score Squared', 
            render : (fruit) => fruit.score ** 2,
            sortValue: (fruit) => fruit.score ** 2,
        },
    ];

    const keyFn = (item) => {
        return item.name;
    }

    return (
        <SortableTable data={data} config={config} keyFn={keyFn}></SortableTable>
    );
}

export default TablePage;