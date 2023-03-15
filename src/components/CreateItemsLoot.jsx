import {useState} from "react";
export function CreateItemsLoot() {
    const [items, setItems] = useState([{id: 1, name: "Loot Item 1", type: "Loot"}, {
        id: 2,
        name: "Inventory Item 1",
        type: "Inventory"
    }]);
    const [newItemName, setNewItemName] = useState("");
    const [newItemType, setNewItemType] = useState("Loot");

    const handleNewItemNameChange = (event) => {
        setNewItemName(event.target.value);
    };

    const handleNewItemTypeChange = (event) => {
        setNewItemType(event.target.value);
    };

    const handleAddItem = () => {
        const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
        const newItem = {id: newId, name: newItemName, type: newItemType};
        setItems([...items, newItem]);
        setNewItemName("");
        setNewItemType("Loot");
    };

    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (<>
            <div className="border-solid border-accent border-2 rounded-md p-4">
                <h2>Create items and loot</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox"/>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Type</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* rows */}
                        {items.map((item) => (<tr key={item.id}>
                                <td>
                                    <label>
                                        <input type="checkbox" className="checkbox"/>
                                    </label>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">edit</button>
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() => handleDeleteItem(item.id)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>))}
                        {/* add row */}
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={newItemName}
                                    onChange={handleNewItemNameChange}
                                />
                            </td>
                            <td>
                                <select value={newItemType} onChange={handleNewItemTypeChange}>
                                    <option value="Loot">Loot</option>
                                    <option value="Inventory">Inventory</option>
                                </select>
                            </td>
                            <td>
                                <button className="btn btn-ghost btn-xs" onClick={handleAddItem}>
                                    add
                                </button>
                            </td>
                        </tr>
                        </tbody>
                        {/* foot */}
                        <tfoot>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox"/>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Type</th>
                            <th></th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>);
}
