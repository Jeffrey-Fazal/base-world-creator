
export function CreateItemsLoot() {
    return (
        <>
            <div className="border-solid border-accent border-2 rounded-md p-4">
                <h2>Create items and loot</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Type</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </td>
                                <td>Loot Item 1</td>
                                <td>Loot</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">edit</button>
                                    <button className="btn btn-ghost btn-xs">delete</button>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </td>
                                <td>Inventory Item 1</td>
                                <td>Inventory</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">edit</button>
                                    <button className="btn btn-ghost btn-xs">delete</button>
                                </td>
                            </tr>
                            {/* add row */}
                            <tr>
                                <td></td>
                                <td><input type="text" placeholder="Name" /></td>
                                <td>
                                    <select>
                                        <option value="loot">Loot</option>
                                        <option value="inventory">Inventory</option>
                                    </select>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">add</button>
                                </td>
                            </tr>
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
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
        </>
    )
}