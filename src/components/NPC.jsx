export function NPC() {
    return (
        <>
        <div className="border-solid border-accent border-2 rounded-md p-4">
            <h2>NPC - villians, guides and randoms</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Disposition</th>
                            <th>Campagin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
                <select className="select select-primary w-full max-w-xs">
                    <option disabled selected>What is the best TV show?</option>
                    <option>Game of Thrones</option>
                    <option>Lost</option>
                    <option>Breaking Bad</option>
                    <option>Walking Dead</option>
                </select>
                <div className="btn-group">
                    <button className="btn btn-active">Add</button>
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                </div>
            </div>
        </div>
        </>
    )
}