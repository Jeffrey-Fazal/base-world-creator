// Child component of CreatorHome (similar to CreateParty)
// import's hooks to past to parent compnent
import {useRef, useState} from "react";

// party variable will be pushed to parent
// npc will be used to reference an individual that is part of a cast
// instead of character will be used to reference an individual that is part of a party
// class has been changed to disposition
export function CreateNPCs(props) {
    const [cast, setCast] = useState([
        {name: "", disposition: "", campaign: ""},
    ]);

    const [npcs, setNpcs] = useState([]);

    const isRendering = useRef(false);

    const handleSave = (e, index) => {
        if (isRendering.current) {
            return;
        }

        isRendering.current = true;
        setTimeout(() => {
            isRendering.current = false;
        }, 0);
        // Variable to store updated character
        const updatedNpc = {
            name: cast[index].name,
            disposition: cast[index].disposition,
            campaign: cast[index].campaign,
        };
        // Function that keep tracks of whole cast
        const updatedCast = cast.map((npc, idx) => {
            if (idx === index) {
                return updatedNpc;
            } else {
                return npc;
            }
        });
        // Note the whole cast is saved as a prop, not just an individual character
        props.onSave(updatedCast);
        setCast(updatedCast);
    };

    // Functions to handle changes to the cast and discard or add new items
    const handleNameChange = (index, value) => {
        setCast((prevParty) => {
            const updatedCast = [...prevParty];
            updatedCast[index].name = value;
            return updatedCast;
        });
    };

    const handleNpcSave = (npcData) => {
        const updatedNpcs = [...npcs, ...npcData];
        setNpcs(updatedNpcs);
        props.onSave(updatedNpcs); // add this line
    };


    const handleClassChange = (index, value) => {
        setCast((prevParty) => {
            const updatedCast = [...prevParty];
            updatedCast[index].disposition = value;
            return updatedCast;
        });
    };

    const handleCampaignChange = (index, value) => {
        setCast((prevParty) => {
            const updatedCast = [...prevParty];
            updatedCast[index].campaign = value;
            return updatedCast;
        });
    };
    // Creates a new row whilst keeping previous rows data
    const handleAddRow = () => {
        setCast((prevParty) => [
            ...prevParty,
            {name: "", disposition: "", campaign: ""}
        ]);
    };
    // Deletes the selected row
    const handleRemoveRow = (index) => {
        setCast((prevParty) => {
            const updatedCast = [...prevParty];
            updatedCast.splice(index, 1);
            return updatedCast;
        });
    };

    return (
        <>
            <div className="border-solid border-accent border-2 rounded-md p-4">
                <h2>Create additional characters e.g. NPC and casts.</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Disposition</th>
                            <th>Campaign</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* The map function stores everything in the cast variable and allows each row
represents a new character   */}
                        {cast.map((npc, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        value={npc.name || ""}
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                        onBlur={(e) => handleSave(e, index)}
                                    />
                                </td>
                                {/* The handleXchange functions are used to save a single value and update it to the cast
handle save is used in conjunction with onblur and is render to ensure data is saved correctly*/}
                                <td>
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        value={npc.disposition || ""}
                                        onChange={(e) => handleClassChange(index, e.target.value)}
                                        onBlur={(e) => handleSave(e, index)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="input input-bordered"
                                        value={npc.campaign || ""}
                                        onChange={(e) => handleCampaignChange(index, e.target.value)}
                                        onBlur={(e) => handleSave(e, index)}
                                    />
                                </td>
                                <td>
                                    {/* This is a text button that will remove the row and purge it's data */}
                                    <button
                                        className="btn btn-ghost btn-xs"
                                        onClick={() => handleRemoveRow(index)}
                                        onBlur={(e) => handleSave(e, index)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        {/* foot */}
                        <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Disposition</th>
                            <th>Campaign</th>
                            <th></th>
                        </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="btn-group">
                    <button className="btn" onClick={handleAddRow}>Add NPC</button>
                </div>
            </div>
        </>
    );
}