// Creates the story name
// Keeps track of the document ID so other stuff can be done

import { useState } from "react";

export function NewStoryName({ onSave }) {
    const [storyName, setStoryName] = useState("");

    const handleStoryNameChange = (event) => {
        setStoryName(event.target.value);
    }

    const handleSaveClick = () => {
        onSave(storyName);
    }

    return (
        <div className="border-solid border-accent border-2 rounded-md p-4">
            <h2>New Story Name</h2>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={storyName} onChange={handleStoryNameChange} />
            <button className="btn btn-primary" onClick={handleSaveClick}>Button</button>
        </div>
    )
}
