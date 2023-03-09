// Child component of CreatorHome
// import's hooks to past to parent compnent
import { useState, useRef } from "react";
// party variable will be pushed to parent
// character will be used to reference an individual that is part of a party
export function CreateParty(props) {
  const [party, setParty] = useState([
    { name: "Harry Potter", class: "Wizard", campaign: "Chamber of Secrets" },
    { name: "Hagrid", class: "Giant", campaign: "Chamber of Secrets" }
  ]);

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
    const updatedCharacter = {
      name: e.target.value,
      class: party[index].class,
      campaign: party[index].campaign,
    };
    // Function that keep tracks of whole party  
    const updatedParty = party.map((character, idx) => {
      if (idx === index) {
        return updatedCharacter;
      } else {
        return character;
      }
    });
    // Note the whole party is saved as a prop, not just an individual character  
    props.onSave(updatedParty);
    setParty(updatedParty);
  };

  // Functions to handle changes to the party and discard or add new items
  const handleNameChange = (index, value) => {
    setParty((prevParty) => {
      const updatedParty = [...prevParty];
      updatedParty[index].name = value;
      return updatedParty;
    });
  };

  const handleClassChange = (index, value) => {
    setParty((prevParty) => {
      const updatedParty = [...prevParty];
      updatedParty[index].class = value;
      return updatedParty;
    });
  };

  const handleCampaignChange = (index, value) => {
    setParty((prevParty) => {
      const updatedParty = [...prevParty];
      updatedParty[index].campaign = value;
      return updatedParty;
    });
  };
  // Creates a new row whilst keeping previous rows data
  const handleAddRow = () => {
    setParty((prevParty) => [
      ...prevParty,
      { name: "", class: "", campaign: "" }
    ]);
  };
  // Deletes the selected row
  const handleRemoveRow = (index) => {
    setParty((prevParty) => {
      const updatedParty = [...prevParty];
      updatedParty.splice(index, 1);
      return updatedParty;
    });
  };

  return (
    <>
      <div className="border-solid border-accent border-2 rounded-md p-4">
        <h2>Create party and characters</h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Campaign</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* The map function stores everything in the party variable and allows each row 
represents a new character   */}
              {party.map((character, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={character.name || ""}
                      onChange={(e) => handleNameChange(index, e.target.value)}
                      onBlur={(e) => handleSave(e, index)}
                    />
                  </td>
                  {/* The handleXchange functions are used to save a single value and update it to the party
handle save is used in conjunction with onblur and is render to ensure data is saved correctly*/}
                  <td>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={character.class || ""}
                      onChange={(e) => handleClassChange(index, e.target.value)}
                      onBlur={(e) => handleSave(e, index)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="input input-bordered"
                      value={character.campaign || ""}
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
                <th>Class</th>
                <th>Campaign</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="btn-group">
          <button className="btn" onClick={handleAddRow}>Add Character</button>
        </div>
      </div>
    </>
  );
}