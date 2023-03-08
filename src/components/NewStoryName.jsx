// Creates the story name
// Keeps track of the document ID so other stuff can be done

import { useState } from "react";

export function NewStoryName({ onSave }) {
  const [storyName, setStoryName] = useState("");

  const handleStoryNameChange = (event) => {
    const newName = event.target.value;
    setStoryName(newName);
    onSave(newName); // Call onSave with the new name whenever it's updated
  }

  return (
    <div className="border-solid border-accent border-2 rounded-md p-4">
      <h2>New Story Name*</h2>
        <div className="tooltip" data-tip="Choose a descriptive name">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
            value={storyName}
            onChange={handleStoryNameChange}
          />
        </div>
    </div>
  );
}