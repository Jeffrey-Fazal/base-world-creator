// create and edit npc

import { useState } from "react";

export function NPC() {
  const [NPC, setNPC] = useState([
    { name: "Dobby", Disposition: "Good Elf", campaign: "Chamber of Secrets" }
  ]);

  const handleNameChange = (index, value) => {
    setNPC((prevNPC) => {
      const updatedNPC = [...prevNPC];
      updatedNPC[index].name = value;
      return updatedNPC;
    });
  };

  const handleDispositionChange = (index, value) => {
    setNPC((prevNPC) => {
      const updatedNPC = [...prevNPC];
      updatedNPC[index].Disposition = value;
      return updatedNPC;
    });
  };

  const handleCampaignChange = (index, value) => {
    setNPC((prevNPC) => {
      const updatedNPC = [...prevNPC];
      updatedNPC[index].campaign = value;
      return updatedNPC;
    });
  };

  const handleAddRow = () => {
    setNPC((prevNPC) => [
      ...prevNPC,
      { name: "", Disposition: "", campaign: "" }
    ]);
  };

  const handleRemoveRow = (index) => {
    setNPC((prevNPC) => {
      const updatedNPC = [...prevNPC];
      updatedNPC.splice(index, 1);
      return updatedNPC;
    });
  };

  return (
    <>
      <div className="border-solid border-accent border-2 rounded-md p-4">
        <h2>Create NPC and characters</h2>
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
              {NPC.map((character, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={character.name}
                      onChange={(e) => handleNameChange(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={character.Disposition}
                      onChange={(e) => handleDispositionChange(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={character.campaign}
                      onChange={(e) => handleCampaignChange(index, e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleRemoveRow(index)}
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
