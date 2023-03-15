import {useEffect, useState} from "react";

// TODO: Add to firebase
export function CreateEncounters({onSave}) {
    const [encounters, setEncounters] = useState([
        {id: 1, name: "First Encounter", type: "Info", notes: "Introduce the world"},
    ]);

    useEffect(() => {
        if (typeof onSave === "function") {
            onSave(encounters);
        }
    }, [encounters, onSave]);

    const handleAddEncounter = () => {
        const newEncounter = {id: encounters.length + 1, name: "", type: "", notes: ""};
        setEncounters([...encounters, newEncounter]);
    };

    const handleDeleteEncounter = (id) => {
        setEncounters(encounters.filter((encounter) => encounter.id !== id));
    };

    return (
        <div className="border-solid border-accent border-2 rounded-md p-4">
            <h2>Encounters</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* rows */}
                    {encounters.map((encounter) => (
                        <tr key={encounter.id}>
                            <th>{encounter.id}</th>
                            <td>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={encounter.name}
                                    onChange={(e) => {
                                        const updatedEncounters = encounters.map((enc) =>
                                            enc.id === encounter.id ? {...enc, name: e.target.value} : enc
                                        );
                                        setEncounters(updatedEncounters);
                                    }}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={encounter.type}
                                    onChange={(e) => {
                                        const updatedEncounters = encounters.map((enc) =>
                                            enc.id === encounter.id ? {...enc, type: e.target.value} : enc
                                        );
                                        setEncounters(updatedEncounters);
                                    }}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={encounter.notes}
                                    onChange={(e) => {
                                        const updatedEncounters = encounters.map((enc) =>
                                            enc.id === encounter.id ? {...enc, notes: e.target.value} : enc
                                        );
                                        setEncounters(updatedEncounters);
                                    }}
                                />
                            </td>
                            <td>
                                <button
                                    className="btn btn-ghost btn-xs"
                                    onClick={() => handleDeleteEncounter(encounter.id)}
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="btn-group">
                <button className="btn btn-active" onClick={handleAddEncounter}>
                    Add
                </button>
                <button className="btn" onClick={() => setEncounters([])}>
                    Delete All
                </button>
            </div>
        </div>
    );
}
