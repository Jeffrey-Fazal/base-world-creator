import {useState} from "react";

export function CreateStory({onStoryChange}) {
    const [story, setStory] = useState("");

    const handleStoryChange = (e) => {
        const newStory = e.target.value;
        setStory(newStory);
        onStoryChange(newStory);
    };

    return (<div className="border-solid border-accent border-2 rounded-md p-4">
            <h2>Story & Storyline</h2>
            <div>
        <textarea
            placeholder="Add your story"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            value={story}
            onChange={handleStoryChange}
        ></textarea>
            </div>
        </div>);
}
